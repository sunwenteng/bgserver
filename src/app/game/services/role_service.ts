import {Service} from "typedi";
import {Role} from "../modles/role";
import {ERROR_CODE} from "../../../lib/util/error_code";
import {charCodeLength, filterString} from "../../../lib/util/game_util";
import {MAX_NAME_LENGTH} from "../modles/defines";
import * as WorldDB from '../../../lib/mysql/world_db';

@Service()
export class RoleService {

    async checkName(role: Role, name: string, serverId: number): Promise<boolean> {
        return new Promise<boolean>(async resolve => {
            let result = false;
            do {
                if (name === '') {
                    role.sendErrorMsg(ERROR_CODE.COMMON.NAME_ILLEGAL);
                    break;
                }

                if (charCodeLength(name) > MAX_NAME_LENGTH) {
                    role.sendErrorMsg(ERROR_CODE.COMMON.NAME_TOO_LONG);
                    break;
                }

                if (filterString(name) !== name) {
                    role.sendErrorMsg(ERROR_CODE.COMMON.NAME_ILLEGAL);
                    break;
                }

                let reply = await WorldDB.conn.execute('select nickname from player_name where ? and ?', [{nickname: name}, {serverId: serverId}]);
                if (reply.length > 0) {
                    role.sendErrorMsg(ERROR_CODE.COMMON.NAME_DUPLICATE);
                    break;
                }
                result = true;
            }
            while (0);
            resolve(result);
        });
    }
}