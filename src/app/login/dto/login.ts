export class CS_LOGIN {
    public passport: string;
    public pwd: string;
    public device: string;
    public deviceUid: string;
    public deviceType: string;
    public deviceToken: string;
    public platform: number;
}

export class SC_LOGIN {
    public serverId: number;
    public gmAuth: number;
    public isNew: number;
}

export interface IServer {
    serverId?: number;
    name?: string;
    status?: number;
    level?: number;
    lastLoginTime?: number;
}

export class CS_GET_SERVER_LIST {
    public passportId: number;
}

export class SC_GET_SERVER_LIST {
    public servers: IServer[];
}

export class CS_GET_INFO {
    public platformId: number;
    public clientVersion: string;
}

export class SC_GET_INFO {
    public notice: string;
    public version: string;
    public updateAddress: string;
}

export class CS_CHOOSE_SERVER {
    public serverId: number;
    public passportId: number;
}

export class SC_CHOOSE_SERVER {
    public ip: string;
    public port: number;
    public version: string;
    public resVersion: string;
    public resServerAddress: string;
    public uid: number;
    public token: string;
    public serverId: number;
    public serverName: string;
}