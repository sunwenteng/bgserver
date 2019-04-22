import * as LoginDB from '../../lib/mysql/login_db';
import * as GmModule from './gm_module';
import {Log} from "../../lib/util/log";
import * as GmStruct from './gm_struct';
import {GM_STATE} from './gm_struct';
import {Role} from "../game/modles/role";

let curMaxReadCommandAutoId: number = 0; // 当前读取的最大gm auto_id
let maxRunningGmCommandTime = 0; // gm最大运行时间
let allGmCommand: { [auto_id: number]: GmStruct.GmCommand } = {}; // 所有GM指令

export async function createGmCommand(gmInfo: any): Promise<GmStruct.GmCommand> {
    return new Promise<GmStruct.GmCommand>(async resolve => {
        let ret: GmStruct.GmCommand = null;

        if (GmModule[gmInfo.opr]) {
            ret = new GmModule[gmInfo.opr]();
        }

        if (ret) {
            Object.keys(gmInfo).forEach((obj) => {
                ret[obj] = gmInfo[obj];
            });
        }

        if (ret.status === GM_STATE.PENDING || ret.status === GM_STATE.RUNNING) {
            Log.sInfo('create gm command then valid, id=' + ret.auto_id);
            await ret.validate();
        }
        resolve(ret);
    });
}

async function checkTargetType(targetType: number, targetId: number): Promise<boolean> {
    return new Promise<boolean>(async resolve => {
        switch (targetType) {
            case GmStruct.GM_COMMAND_TARGET_TYPE.SERVER:
                resolve(true);
                break;
            case GmStruct.GM_COMMAND_TARGET_TYPE.ROLE:
                let result = await LoginDB.conn.execute("select server_id from re_passport_player where ?", {role_id: targetId});
                if (result.length === 0 || !result[0].server_id) {
                    resolve(false);
                }
                else {
                    resolve(true);
                }
                break;
            case GmStruct.GM_COMMAND_TARGET_TYPE.PASSPORT:
                resolve(false);
                break;
            default:
                resolve(false);
                break;
        }
    });
}

async function readCommands(cmds: GmStruct.GmCommand[]) {
    for (let cmd of cmds) {
        curMaxReadCommandAutoId = Math.max(curMaxReadCommandAutoId, cmd.auto_id);
        let ret = await checkTargetType(cmd.target_type, cmd.target_id);
        if (ret) {
            let gmCmd = await createGmCommand(cmd);
            if (!gmCmd) {
                await LoginDB.conn.execute("update gm_cmd set ? where ?", [{
                    status: GmStruct.GM_STATE.ERROR,
                    error_msg: 'operation not support, opr=' + cmd.opr
                }, {auto_id: cmd.auto_id}]);
            }
            else {
                appendGmCommand(gmCmd);
            }
        }
        else {
            await LoginDB.conn.execute("update gm_cmd set ? where ?", [{
                status: GmStruct.GM_STATE.ERROR,
                error_msg: 'checkTargetType error, may be roleUid not found or not support passport, auto_id=' + cmd.auto_id
            }, {auto_id: cmd.auto_id}]);
        }
    }
}

function appendGmCommand(gmCmd: GmStruct.GmCommand): boolean {
    Log.sInfo('GmCommand, Append GM Command, id=%d, opr=%s', gmCmd.auto_id, gmCmd.opr);
    allGmCommand[gmCmd.auto_id] = gmCmd;
    return true;
}

function removeGmCommand(gmCmd: GmStruct.GmCommand): boolean {
    Log.sInfo('GmCommand, Remove GM Command, id=%d, opr=%s', gmCmd.auto_id, gmCmd.opr);
    delete allGmCommand[gmCmd.auto_id];
    return true;
}

export async function cancelGmCommand(gmCommandId): Promise<boolean> {
    return new Promise<boolean>(async resolve => {
        if (allGmCommand.hasOwnProperty(gmCommandId)) {
            resolve(await allGmCommand[gmCommandId].cancel());
        }
        else {
            resolve(false);
        }
    });
}

export function hasGmCommand(gmAutoId: number): boolean {
    return allGmCommand.hasOwnProperty(gmAutoId.toString());
}

export async function readNewGmCommand() {
    let ret = await LoginDB.conn.execute("select auto_id, opr, target_type, target_id, start_time, end_time, backup_value, status, params from gm_cmd" +
        " where auto_id > " + curMaxReadCommandAutoId + " and status = " + GmStruct.GM_STATE.NEW);
    await readCommands(ret);
    Log.sInfo('readNewGmCommand success');
}

export async function initGmCommand() {
    let ret = await LoginDB.conn.execute("select auto_id, opr, target_type, target_id, start_time, end_time, backup_value, status, params from gm_cmd" +
        " where status != ? and status != ? and status != ?", [GmStruct.GM_STATE.ERROR, GmStruct.GM_STATE.COMPLETE, GmStruct.GM_STATE.CANCELED]);
    await readCommands(ret);
    Log.sInfo('initGmCommand success');
}

export async function updateGmCommand(): Promise<boolean> {
    return new Promise<boolean>(async resolve => {
            let dbTime = await LoginDB.getDBTime();
            if (dbTime < maxRunningGmCommandTime) {
                Log.sError('updateGmCommand, invalid update, max=%d, cur=%d', maxRunningGmCommandTime, dbTime);
                resolve(false);
            }
            else {
                for (let uid in allGmCommand) {
                    let gmCmd = allGmCommand[uid];
                    if (gmCmd.status === GM_STATE.NEW) {
                        Log.sInfo('GmCmd, valid gm command, id=%d, opr=%s', gmCmd.auto_id, gmCmd.opr);
                        gmCmd.status = GmStruct.GM_STATE.DO_VALIDATE;
                        let ret = await gmCmd.validate();
                        if (!ret) {
                            Log.sError('GmCmd, valid error, id=%d, opr=%s, errMsg=%s', gmCmd.auto_id, gmCmd.opr, gmCmd.errMsg);
                            gmCmd.status = GmStruct.GM_STATE.ERROR;
                            gmCmd.bDirty = true;
                        }
                        else {
                            Log.sInfo('GmCmd, gm command pending, id=%d, opr=%s', gmCmd.auto_id, gmCmd.opr);
                            gmCmd.status = GmStruct.GM_STATE.PENDING;
                            gmCmd.bDirty = true;
                        }
                    }

                    if (gmCmd.status === GM_STATE.PENDING && (gmCmd.start_time === 0 || gmCmd.start_time < dbTime)) {
                        Log.sInfo('GmCmd, trigger gm command, id=%d, opr=%s', gmCmd.auto_id, gmCmd.opr);
                        gmCmd.status = GmStruct.GM_STATE.DO_TRIGGER;
                        let ret = await gmCmd.trigger();
                        if (!ret) {
                            Log.sError('GmCmd, trigger error, id=%d, opr=%s, errMsg=%s', gmCmd.auto_id, gmCmd.opr, gmCmd.errMsg);
                            gmCmd.status = GmStruct.GM_STATE.ERROR;
                            gmCmd.bDirty = true;
                        }
                        else {
                            Log.sInfo('GmCmd, gm command running, id=%d, opr=%s', gmCmd.auto_id, gmCmd.opr);
                            gmCmd.start_time = dbTime;
                            gmCmd.status = GmStruct.GM_STATE.RUNNING;
                            gmCmd.bDirty = true;
                        }
                    }

                    if (gmCmd.status === GmStruct.GM_STATE.RUNNING) {
                        gmCmd.status = GmStruct.GM_STATE.DO_TICK;
                        let ret = await gmCmd.tick();
                        if (!ret) {
                            Log.sError('tick error, id=%d, opr=%s, errMsg=%s', gmCmd.auto_id, gmCmd.opr, gmCmd.errMsg);
                        }
                        gmCmd.status = GmStruct.GM_STATE.RUNNING;

                        if (gmCmd.end_time === 0 || gmCmd.end_time < dbTime) {
                            Log.sInfo('GmCmd, finish gm command, id=%d, opr=%s', gmCmd.auto_id, gmCmd.opr);
                            gmCmd.status = GmStruct.GM_STATE.DO_COMPLETE;
                            let success = await gmCmd.complete();
                            if (!success) {
                                Log.sError('GmCmd, run error, id=%d, opr=%s, errMsg=%s', gmCmd.auto_id, gmCmd.opr, gmCmd.errMsg);
                                gmCmd.status = GmStruct.GM_STATE.ERROR;
                                gmCmd.bDirty = true;
                            }
                            else {
                                Log.sInfo('GmCmd, complete gm command, id=%d, opr=%s', gmCmd.auto_id, gmCmd.opr);
                                gmCmd.status = GmStruct.GM_STATE.COMPLETE;
                                gmCmd.bDirty = true;
                            }
                        }
                    }
                }

                for (let uid in allGmCommand) {
                    let gmCmd = allGmCommand[uid];
                    if (gmCmd.dirty() && gmCmd.status <= GmStruct.GM_STATE.ERROR) {
                        await LoginDB.conn.execute("update gm_cmd set ? where ?", [{
                            status: gmCmd.status,
                            error_msg: gmCmd.errMsg,
                            opr: gmCmd.opr,
                            target_type: gmCmd.target_type,
                            target_id: gmCmd.target_id,
                            start_time: gmCmd.start_time,
                            end_time: gmCmd.end_time,
                            backup_value: gmCmd.backup_value
                        }, {auto_id: gmCmd.auto_id}]);
                        Log.sInfo('updateGmCmdDirtyInfo success, id=%d, opr=%s', gmCmd.auto_id, gmCmd.opr);

                        if (gmCmd.status === GmStruct.GM_STATE.COMPLETE || gmCmd.status === GmStruct.GM_STATE.ERROR || gmCmd.status === GmStruct.GM_STATE.CANCELED) {
                            removeGmCommand(gmCmd);
                        }
                        gmCmd.reset();
                    }
                }

                maxRunningGmCommandTime = dbTime;
                resolve(true);
            }
        }
    );
}

export async function handlerGmCommandRole(role: Role): Promise<number> {
    return new Promise<number>(async resolve => {
        if (maxRunningGmCommandTime <= role.timeLastGm) {
            resolve(role.timeLastGm);
        }
        else {
            for (let uid in allGmCommand) {
                let gmCmd = allGmCommand[uid];
                if (gmCmd.status === GmStruct.GM_STATE.RUNNING && role.timeLastGm < gmCmd.start_time) {
                    let ret = await gmCmd.handlerRole(role);
                    if (!ret) {
                        Log.uError(role.uid, 'handlerGmCommandRole error, auto_id=' + gmCmd.auto_id);
                    }
                }
            }
            resolve(maxRunningGmCommandTime);
        }
    });
}