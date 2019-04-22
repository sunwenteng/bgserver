import {Role} from "./role";
import {Model} from "./model";

export abstract class RoleModel extends Model {
    loaded: boolean = false;
    role: Role = null;
    key: string;

    protected constructor(role: Role, key: string) {
        super();
        this.role = role;
        this.key = key;
    }

    protected makeDirty() {
        this.role.dirtyFields[this.key] = null;
    }

    isDirty() {
        return this.role.dirtyFields.hasOwnProperty(this.key);
    }

    public abstract serializeInitNetMsg();

    public abstract refresh(bSendProtocol:boolean);
}
