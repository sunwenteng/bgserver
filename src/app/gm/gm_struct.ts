import {Role} from "../game/modles/role";

export enum GM_TYPE {
    NORMAL = 0,	// 普通权限，注册默认，消耗钻石计入数据统计，不可使用外网指令，只在服务器正常情况下可登录
    TEST_NORMAL = 1,	// 普通权限，注册默认，消耗钻石计入数据统计，不可使用外网指令，服务器维护状态下，可登录
    TYPE_ = 2,	// not use
    TASTE = 3,	// 普通权限，充值，消耗钻石不计入数据统计，不可使用外网指令，只在服务器正常情况下可登录
    GM = 4      	// GM权限，充值，消耗钻石不计入数据统计，可使用外网指令，服务器维护状态下，可登录
}

export enum GM_STATE {
    NEW = 0,
    PENDING = 1,
    RUNNING = 2,
    COMPLETE = 3,
    CANCEL = 4,
    CANCELED = 5,
    ERROR = 6,
    DO_VALIDATE = 7,
    DO_TRIGGER = 8,
    DO_TICK = 9,
    DO_COMPLETE = 10
}

export enum GM_COMMAND_TARGET_TYPE {
    SERVER = 1,
    ROLE = 2,
    PASSPORT = 3
}

export class GmCommand {
    auto_id: number = 0;
    target_id = 0;
    opr: string = "";
    target_type: GM_COMMAND_TARGET_TYPE = GM_COMMAND_TARGET_TYPE.SERVER;
    start_time: number = 0;
    end_time: number = 0;
    backup_value: string = "";
    status: GM_STATE = GM_STATE.NEW;
    params: string = "";
    bDirty: boolean = false;
    errMsg: string = "";
    paramArr: string[] = [];

    constructor() {
    }

    assertParamNum(paramNum): boolean {
        this.paramArr = this.params.split('|');
        if (this.paramArr.length >= paramNum) {
            return true;
        }
        this.errMsg = `param count error, req=${paramNum}, cur=${this.paramArr.length}`;
        return false;
    }

    async tick(): Promise<boolean> {
        return new Promise<boolean>(resolve => {
            resolve(true);
        });
    }

    async validate(): Promise<boolean> {
        return new Promise<boolean>(resolve => {
            resolve(true);
        });
    }

    async trigger(): Promise<boolean> {
        return new Promise<boolean>(resolve => {
            resolve(true);
        });
    }

    async complete(): Promise<boolean> {
        return new Promise<boolean>(resolve => {
            resolve(true);
        });
    }

    async handlerRole(role: Role): Promise<boolean> {
        return new Promise<boolean>(resolve => {
            resolve(true);
        });
    }

    async cancel(): Promise<boolean> {
        return new Promise<boolean>(async resolve => {
            if (this.status === GM_STATE.NEW || this.status === GM_STATE.PENDING) {
                this.status = GM_STATE.CANCELED;
                this.bDirty = true;
                resolve(true);
            }
            else if (this.status === GM_STATE.RUNNING) {
                let ret = await this.complete();
                if (ret) {
                    this.status = GM_STATE.CANCELED;
                    this.bDirty = true;
                    resolve(true);
                }
                else {
                    resolve(false);
                }
            }
            else {
                resolve(false);
            }
        });
    }

    dirty(): boolean {
        return this.bDirty;
    }

    reset(): void {
        this.bDirty = false;
    }
}