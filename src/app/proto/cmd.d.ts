import * as $protobuf from "protobufjs";
export namespace C2S {

    interface IMessage {
        LOGIN_CS_LOGIN?: (C2S.ILOGIN_CS_LOGIN|null);
        LOGIN_CS_CHOOSE_SERVER?: (C2S.ILOGIN_CS_CHOOSE_SERVER|null);
        LOGIN_CS_GET_SERVER_LIST?: (C2S.ILOGIN_CS_GET_SERVER_LIST|null);
        LOGIN_CS_GET_INFO?: (C2S.ILOGIN_CS_GET_INFO|null);
        LOGIN_CS_QUERY?: (C2S.ILOGIN_CS_QUERY|null);
        CS_TEST_ECHO?: (C2S.ICS_TEST_ECHO|null);
        CS_ROLE_ONLINE?: (C2S.ICS_ROLE_ONLINE|null);
        CS_ROLE_HEART_BEAT?: (C2S.ICS_ROLE_HEART_BEAT|null);
        CS_ROLE_CREATE?: (C2S.ICS_ROLE_CREATE|null);
        CS_GM_CMD?: (C2S.ICS_GM_CMD|null);
        CS_ROLE_CHAT?: (C2S.ICS_ROLE_CHAT|null);
    }

    class Message implements IMessage {
        constructor(properties?: C2S.IMessage);
        public LOGIN_CS_LOGIN?: (C2S.ILOGIN_CS_LOGIN|null);
        public LOGIN_CS_CHOOSE_SERVER?: (C2S.ILOGIN_CS_CHOOSE_SERVER|null);
        public LOGIN_CS_GET_SERVER_LIST?: (C2S.ILOGIN_CS_GET_SERVER_LIST|null);
        public LOGIN_CS_GET_INFO?: (C2S.ILOGIN_CS_GET_INFO|null);
        public LOGIN_CS_QUERY?: (C2S.ILOGIN_CS_QUERY|null);
        public CS_TEST_ECHO?: (C2S.ICS_TEST_ECHO|null);
        public CS_ROLE_ONLINE?: (C2S.ICS_ROLE_ONLINE|null);
        public CS_ROLE_HEART_BEAT?: (C2S.ICS_ROLE_HEART_BEAT|null);
        public CS_ROLE_CREATE?: (C2S.ICS_ROLE_CREATE|null);
        public CS_GM_CMD?: (C2S.ICS_GM_CMD|null);
        public CS_ROLE_CHAT?: (C2S.ICS_ROLE_CHAT|null);
        public kind?: ("LOGIN_CS_LOGIN"|"LOGIN_CS_CHOOSE_SERVER"|"LOGIN_CS_GET_SERVER_LIST"|"LOGIN_CS_GET_INFO"|"LOGIN_CS_QUERY"|"CS_TEST_ECHO"|"CS_ROLE_ONLINE"|"CS_ROLE_HEART_BEAT"|"CS_ROLE_CREATE"|"CS_GM_CMD"|"CS_ROLE_CHAT");
        public static create(properties?: C2S.IMessage): C2S.Message;
        public static encode(message: C2S.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: C2S.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): C2S.Message;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): C2S.Message;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): C2S.Message;
        public static toObject(message: C2S.Message, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface ICS_TEST_ECHO {
        name?: (string|null);
        msg?: (string|null);
        b?: (number|Long|null);
        data?: (number[]|null);
        color?: (C2S.CS_TEST_ECHO.Color|null);
        map?: ({ [k: string]: string }|null);
    }

    class CS_TEST_ECHO implements ICS_TEST_ECHO {
        constructor(properties?: C2S.ICS_TEST_ECHO);
        public name: string;
        public msg: string;
        public b: (number|Long);
        public data: number[];
        public color: C2S.CS_TEST_ECHO.Color;
        public map: { [k: string]: string };
        public static create(properties?: C2S.ICS_TEST_ECHO): C2S.CS_TEST_ECHO;
        public static encode(message: C2S.ICS_TEST_ECHO, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: C2S.ICS_TEST_ECHO, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): C2S.CS_TEST_ECHO;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): C2S.CS_TEST_ECHO;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): C2S.CS_TEST_ECHO;
        public static toObject(message: C2S.CS_TEST_ECHO, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    namespace CS_TEST_ECHO {

        enum Color {
            RED = 0,
            BLUE = 1,
            YELLOW = 1
        }
    }

    interface ICS_ROLE_HEART_BEAT {
        msg?: (string|null);
    }

    class CS_ROLE_HEART_BEAT implements ICS_ROLE_HEART_BEAT {
        constructor(properties?: C2S.ICS_ROLE_HEART_BEAT);
        public msg: string;
        public static create(properties?: C2S.ICS_ROLE_HEART_BEAT): C2S.CS_ROLE_HEART_BEAT;
        public static encode(message: C2S.ICS_ROLE_HEART_BEAT, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: C2S.ICS_ROLE_HEART_BEAT, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): C2S.CS_ROLE_HEART_BEAT;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): C2S.CS_ROLE_HEART_BEAT;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): C2S.CS_ROLE_HEART_BEAT;
        public static toObject(message: C2S.CS_ROLE_HEART_BEAT, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface ICS_ROLE_ONLINE {
        token?: (string|null);
        uid?: (number|null);
        device?: (string|null);
        deviceType?: (string|null);
        inviter?: (number|null);
    }

    class CS_ROLE_ONLINE implements ICS_ROLE_ONLINE {
        constructor(properties?: C2S.ICS_ROLE_ONLINE);
        public token: string;
        public uid: number;
        public device: string;
        public deviceType: string;
        public inviter: number;
        public static create(properties?: C2S.ICS_ROLE_ONLINE): C2S.CS_ROLE_ONLINE;
        public static encode(message: C2S.ICS_ROLE_ONLINE, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: C2S.ICS_ROLE_ONLINE, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): C2S.CS_ROLE_ONLINE;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): C2S.CS_ROLE_ONLINE;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): C2S.CS_ROLE_ONLINE;
        public static toObject(message: C2S.CS_ROLE_ONLINE, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface ILOGIN_CS_LOGIN {
        passport?: (string|null);
        pwd?: (string|null);
        device?: (string|null);
        deviceUid?: (string|null);
        deviceType?: (string|null);
        deviceToken?: (string|null);
        platform?: (number|null);
    }

    class LOGIN_CS_LOGIN implements ILOGIN_CS_LOGIN {
        constructor(properties?: C2S.ILOGIN_CS_LOGIN);
        public passport: string;
        public pwd: string;
        public device: string;
        public deviceUid: string;
        public deviceType: string;
        public deviceToken: string;
        public platform: number;
        public static create(properties?: C2S.ILOGIN_CS_LOGIN): C2S.LOGIN_CS_LOGIN;
        public static encode(message: C2S.ILOGIN_CS_LOGIN, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: C2S.ILOGIN_CS_LOGIN, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): C2S.LOGIN_CS_LOGIN;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): C2S.LOGIN_CS_LOGIN;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): C2S.LOGIN_CS_LOGIN;
        public static toObject(message: C2S.LOGIN_CS_LOGIN, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface ILOGIN_CS_CHOOSE_SERVER {
        serverId?: (number|null);
    }

    class LOGIN_CS_CHOOSE_SERVER implements ILOGIN_CS_CHOOSE_SERVER {
        constructor(properties?: C2S.ILOGIN_CS_CHOOSE_SERVER);
        public serverId: number;
        public static create(properties?: C2S.ILOGIN_CS_CHOOSE_SERVER): C2S.LOGIN_CS_CHOOSE_SERVER;
        public static encode(message: C2S.ILOGIN_CS_CHOOSE_SERVER, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: C2S.ILOGIN_CS_CHOOSE_SERVER, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): C2S.LOGIN_CS_CHOOSE_SERVER;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): C2S.LOGIN_CS_CHOOSE_SERVER;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): C2S.LOGIN_CS_CHOOSE_SERVER;
        public static toObject(message: C2S.LOGIN_CS_CHOOSE_SERVER, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface ILOGIN_CS_GET_SERVER_LIST {
    }

    class LOGIN_CS_GET_SERVER_LIST implements ILOGIN_CS_GET_SERVER_LIST {
        constructor(properties?: C2S.ILOGIN_CS_GET_SERVER_LIST);
        public static create(properties?: C2S.ILOGIN_CS_GET_SERVER_LIST): C2S.LOGIN_CS_GET_SERVER_LIST;
        public static encode(message: C2S.ILOGIN_CS_GET_SERVER_LIST, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: C2S.ILOGIN_CS_GET_SERVER_LIST, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): C2S.LOGIN_CS_GET_SERVER_LIST;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): C2S.LOGIN_CS_GET_SERVER_LIST;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): C2S.LOGIN_CS_GET_SERVER_LIST;
        public static toObject(message: C2S.LOGIN_CS_GET_SERVER_LIST, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface ILOGIN_CS_GET_INFO {
        platformId?: (number|null);
        clientVersion?: (string|null);
    }

    class LOGIN_CS_GET_INFO implements ILOGIN_CS_GET_INFO {
        constructor(properties?: C2S.ILOGIN_CS_GET_INFO);
        public platformId: number;
        public clientVersion: string;
        public static create(properties?: C2S.ILOGIN_CS_GET_INFO): C2S.LOGIN_CS_GET_INFO;
        public static encode(message: C2S.ILOGIN_CS_GET_INFO, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: C2S.ILOGIN_CS_GET_INFO, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): C2S.LOGIN_CS_GET_INFO;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): C2S.LOGIN_CS_GET_INFO;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): C2S.LOGIN_CS_GET_INFO;
        public static toObject(message: C2S.LOGIN_CS_GET_INFO, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface ILOGIN_CS_QUERY {
        uid?: (number|null);
    }

    class LOGIN_CS_QUERY implements ILOGIN_CS_QUERY {
        constructor(properties?: C2S.ILOGIN_CS_QUERY);
        public uid: number;
        public static create(properties?: C2S.ILOGIN_CS_QUERY): C2S.LOGIN_CS_QUERY;
        public static encode(message: C2S.ILOGIN_CS_QUERY, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: C2S.ILOGIN_CS_QUERY, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): C2S.LOGIN_CS_QUERY;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): C2S.LOGIN_CS_QUERY;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): C2S.LOGIN_CS_QUERY;
        public static toObject(message: C2S.LOGIN_CS_QUERY, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface ICS_ROLE_CREATE {
        name?: (string|null);
        uid?: (number|null);
        iconId?: (number|null);
        gender?: (number|null);
        inviter?: (number|null);
    }

    class CS_ROLE_CREATE implements ICS_ROLE_CREATE {
        constructor(properties?: C2S.ICS_ROLE_CREATE);
        public name: string;
        public uid: number;
        public iconId: number;
        public gender: number;
        public inviter: number;
        public static create(properties?: C2S.ICS_ROLE_CREATE): C2S.CS_ROLE_CREATE;
        public static encode(message: C2S.ICS_ROLE_CREATE, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: C2S.ICS_ROLE_CREATE, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): C2S.CS_ROLE_CREATE;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): C2S.CS_ROLE_CREATE;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): C2S.CS_ROLE_CREATE;
        public static toObject(message: C2S.CS_ROLE_CREATE, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface ICS_GM_CMD {
        msg?: (string|null);
    }

    class CS_GM_CMD implements ICS_GM_CMD {
        constructor(properties?: C2S.ICS_GM_CMD);
        public msg: string;
        public static create(properties?: C2S.ICS_GM_CMD): C2S.CS_GM_CMD;
        public static encode(message: C2S.ICS_GM_CMD, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: C2S.ICS_GM_CMD, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): C2S.CS_GM_CMD;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): C2S.CS_GM_CMD;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): C2S.CS_GM_CMD;
        public static toObject(message: C2S.CS_GM_CMD, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    enum ERankType {
        combat = 0
    }

    interface ICS_ROLE_CHAT {
        msg?: (string|null);
        channel?: (C2S.CS_ROLE_CHAT.EChatChannel|null);
    }

    class CS_ROLE_CHAT implements ICS_ROLE_CHAT {
        constructor(properties?: C2S.ICS_ROLE_CHAT);
        public msg: string;
        public channel: C2S.CS_ROLE_CHAT.EChatChannel;
        public static create(properties?: C2S.ICS_ROLE_CHAT): C2S.CS_ROLE_CHAT;
        public static encode(message: C2S.ICS_ROLE_CHAT, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: C2S.ICS_ROLE_CHAT, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): C2S.CS_ROLE_CHAT;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): C2S.CS_ROLE_CHAT;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): C2S.CS_ROLE_CHAT;
        public static toObject(message: C2S.CS_ROLE_CHAT, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    namespace CS_ROLE_CHAT {

        enum EChatChannel {
            none = 0,
            server = 1,
            guild = 2,
            game = 3,
            broadcast = 100
        }
    }
}

export namespace S2C {

    interface IMessage {
        SC_TEST_ECHO?: (S2C.ISC_TEST_ECHO|null);
        Error?: (S2C.IError|null);
        LOGIN_SC_LOGIN?: (S2C.ILOGIN_SC_LOGIN|null);
        LOGIN_SC_CHOOSE_SERVER?: (S2C.ILOGIN_SC_CHOOSE_SERVER|null);
        LOGIN_SC_GET_SERVER_LIST?: (S2C.ILOGIN_SC_GET_SERVER_LIST|null);
        LOGIN_SC_GET_INFO?: (S2C.ILOGIN_SC_GET_INFO|null);
        LOGIN_SC_QUERY?: (S2C.ILOGIN_SC_QUERY|null);
        SC_ROLE_CREATE?: (S2C.ISC_ROLE_CREATE|null);
        SC_ROLE_ONLINE?: (S2C.ISC_ROLE_ONLINE|null);
        SC_ROLE_HEART_BEAT?: (S2C.ISC_ROLE_HEART_BEAT|null);
        SC_UPDATE_ROLE_PRO?: (S2C.ISC_UPDATE_ROLE_PRO|null);
        SC_GET_REWARD?: (S2C.ISC_GET_REWARD|null);
        SC_GM_CMD?: (S2C.ISC_GM_CMD|null);
        SC_UPDATE_RECHARGE?: (S2C.ISC_UPDATE_RECHARGE|null);
        SC_ROLE_OFFLINE?: (S2C.ISC_ROLE_OFFLINE|null);
    }

    class Message implements IMessage {
        constructor(properties?: S2C.IMessage);
        public SC_TEST_ECHO?: (S2C.ISC_TEST_ECHO|null);
        public Error?: (S2C.IError|null);
        public LOGIN_SC_LOGIN?: (S2C.ILOGIN_SC_LOGIN|null);
        public LOGIN_SC_CHOOSE_SERVER?: (S2C.ILOGIN_SC_CHOOSE_SERVER|null);
        public LOGIN_SC_GET_SERVER_LIST?: (S2C.ILOGIN_SC_GET_SERVER_LIST|null);
        public LOGIN_SC_GET_INFO?: (S2C.ILOGIN_SC_GET_INFO|null);
        public LOGIN_SC_QUERY?: (S2C.ILOGIN_SC_QUERY|null);
        public SC_ROLE_CREATE?: (S2C.ISC_ROLE_CREATE|null);
        public SC_ROLE_ONLINE?: (S2C.ISC_ROLE_ONLINE|null);
        public SC_ROLE_HEART_BEAT?: (S2C.ISC_ROLE_HEART_BEAT|null);
        public SC_UPDATE_ROLE_PRO?: (S2C.ISC_UPDATE_ROLE_PRO|null);
        public SC_GET_REWARD?: (S2C.ISC_GET_REWARD|null);
        public SC_GM_CMD?: (S2C.ISC_GM_CMD|null);
        public SC_UPDATE_RECHARGE?: (S2C.ISC_UPDATE_RECHARGE|null);
        public SC_ROLE_OFFLINE?: (S2C.ISC_ROLE_OFFLINE|null);
        public kind?: ("SC_TEST_ECHO"|"Error"|"LOGIN_SC_LOGIN"|"LOGIN_SC_CHOOSE_SERVER"|"LOGIN_SC_GET_SERVER_LIST"|"LOGIN_SC_GET_INFO"|"LOGIN_SC_QUERY"|"SC_ROLE_CREATE"|"SC_ROLE_ONLINE"|"SC_ROLE_HEART_BEAT"|"SC_UPDATE_ROLE_PRO"|"SC_GET_REWARD"|"SC_GM_CMD"|"SC_UPDATE_RECHARGE"|"SC_ROLE_OFFLINE");
        public static create(properties?: S2C.IMessage): S2C.Message;
        public static encode(message: S2C.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: S2C.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2C.Message;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2C.Message;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): S2C.Message;
        public static toObject(message: S2C.Message, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IError {
        id?: (number|null);
        msg?: (string|null);
    }

    class Error implements IError {
        constructor(properties?: S2C.IError);
        public id: number;
        public msg: string;
        public static create(properties?: S2C.IError): S2C.Error;
        public static encode(message: S2C.IError, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: S2C.IError, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2C.Error;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2C.Error;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): S2C.Error;
        public static toObject(message: S2C.Error, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface ISC_ROLE_DETAIL {
        summary?: (S2C.IRoleSummary|null);
    }

    class SC_ROLE_DETAIL implements ISC_ROLE_DETAIL {
        constructor(properties?: S2C.ISC_ROLE_DETAIL);
        public summary?: (S2C.IRoleSummary|null);
        public static create(properties?: S2C.ISC_ROLE_DETAIL): S2C.SC_ROLE_DETAIL;
        public static encode(message: S2C.ISC_ROLE_DETAIL, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: S2C.ISC_ROLE_DETAIL, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2C.SC_ROLE_DETAIL;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2C.SC_ROLE_DETAIL;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): S2C.SC_ROLE_DETAIL;
        public static toObject(message: S2C.SC_ROLE_DETAIL, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IReward {
        type?: (number|null);
        id?: (number|null);
        value?: (number|Long|null);
    }

    class Reward implements IReward {
        constructor(properties?: S2C.IReward);
        public type: number;
        public id: number;
        public value: (number|Long);
        public static create(properties?: S2C.IReward): S2C.Reward;
        public static encode(message: S2C.IReward, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: S2C.IReward, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2C.Reward;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2C.Reward;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): S2C.Reward;
        public static toObject(message: S2C.Reward, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface ISC_GET_REWARD {
        reward?: (S2C.IReward[]|null);
    }

    class SC_GET_REWARD implements ISC_GET_REWARD {
        constructor(properties?: S2C.ISC_GET_REWARD);
        public reward: S2C.IReward[];
        public static create(properties?: S2C.ISC_GET_REWARD): S2C.SC_GET_REWARD;
        public static encode(message: S2C.ISC_GET_REWARD, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: S2C.ISC_GET_REWARD, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2C.SC_GET_REWARD;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2C.SC_GET_REWARD;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): S2C.SC_GET_REWARD;
        public static toObject(message: S2C.SC_GET_REWARD, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IRoleSummary {
        uid?: (number|null);
        nickname?: (string|null);
        headimgurl?: (string|null);
        gender?: (number|null);
        iconId?: (number|null);
        level?: (number|null);
        combat?: (number|Long|null);
        love?: (number|null);
        stage?: (number|null);
        signature?: (string|null);
        vipLevel?: (number|null);
        guildName?: (string|null);
        exp?: (number|Long|null);
        titleId?: (number|null);
        str?: (number|null);
        brain?: (number|null);
        politics?: (number|null);
        prestige?: (number|null);
        titleIds?: (number[]|null);
        lastLoginTime?: (number|null);
        fightScore?: (number|null);
        devotionTotal?: (number|null);
        buildType?: (number|null);
        guildId?: (number|null);
    }

    class RoleSummary implements IRoleSummary {
        constructor(properties?: S2C.IRoleSummary);
        public uid: number;
        public nickname: string;
        public headimgurl: string;
        public gender: number;
        public iconId: number;
        public level: number;
        public combat: (number|Long);
        public love: number;
        public stage: number;
        public signature: string;
        public vipLevel: number;
        public guildName: string;
        public exp: (number|Long);
        public titleId: number;
        public str: number;
        public brain: number;
        public politics: number;
        public prestige: number;
        public titleIds: number[];
        public lastLoginTime: number;
        public fightScore: number;
        public devotionTotal: number;
        public buildType: number;
        public guildId: number;
        public static create(properties?: S2C.IRoleSummary): S2C.RoleSummary;
        public static encode(message: S2C.IRoleSummary, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: S2C.IRoleSummary, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2C.RoleSummary;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2C.RoleSummary;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): S2C.RoleSummary;
        public static toObject(message: S2C.RoleSummary, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface ISC_UPDATE_ROLE_PRO {
        uid?: (number|null);
        nickname?: (string|null);
        headimgurl?: (string|null);
        diamond?: (number|null);
        gold?: (number|Long|null);
        level?: (number|null);
        vipLevel?: (number|null);
        exp?: (number|Long|null);
        vipExp?: (number|null);
        gender?: (number|null);
        iconId?: (number|null);
        army?: (number|Long|null);
        rice?: (number|Long|null);
        reputation?: (number|null);
        stamina?: (number|null);
        politicsCnt?: (number|null);
        intelCnt?: (number|null);
        armyCnt?: (number|null);
        banquetPoint?: (number|null);
        devotion?: (number|null);
        activePoint?: (number|null);
        taofaScore?: (number|null);
        combat?: (number|null);
        timeStamina?: (number|null);
        signature?: (string|null);
        timePoliticsCnt?: (number|null);
        timeIntelCnt?: (number|null);
        timeArmyCnt?: (number|null);
        stage?: (number|null);
        titleId?: (number|null);
        admireCombat?: (number|null);
        admireLove?: (number|null);
        signedDays?: (number|null);
        admireStage?: (number|null);
        curSignedState?: (number|null);
        curSevenState?: (number|null);
        sevenDays?: (number|null);
        hanlinExp?: (number|null);
        hanlinId?: (number|null);
        fieldScore?: (number|null);
        fieldBossHpLeft?: (number|null);
        fieldBossId?: (number|null);
        salaryCnt?: (number|null);
        fieldPoint?: (number|null);
        energy?: (number|null);
        timeEnergy?: (number|null);
        zhenzai?: (number|null);
        luck?: (number|null);
        silkId?: (number|null);
        fastSilk?: (number|null);
        timeLeftGuild?: (number|null);
        buildType?: (number|null);
        bossHp?: (number|Long|null);
        gmAuth?: (number|null);
        taofaId?: (number|null);
        taofaMaxId?: (number|null);
        guildId?: (number|null);
        devotionTotal?: (number|null);
        enemyUid?: (number|null);
        fightPower?: (number|null);
        timeMonthCard?: (number|null);
        timeLifeCard?: (number|null);
        joinCnt?: (number|null);
        taofaTotal?: (number|null);
        createTime?: (number|null);
        harvestPoint?: (number|null);
        timeVipCard?: (number|null);
        str?: (number|null);
        brain?: (number|null);
        politics?: (number|null);
        prestige?: (number|null);
    }

    class SC_UPDATE_ROLE_PRO implements ISC_UPDATE_ROLE_PRO {
        constructor(properties?: S2C.ISC_UPDATE_ROLE_PRO);
        public uid: number;
        public nickname: string;
        public headimgurl: string;
        public diamond: number;
        public gold: (number|Long);
        public level: number;
        public vipLevel: number;
        public exp: (number|Long);
        public vipExp: number;
        public gender: number;
        public iconId: number;
        public army: (number|Long);
        public rice: (number|Long);
        public reputation: number;
        public stamina: number;
        public politicsCnt: number;
        public intelCnt: number;
        public armyCnt: number;
        public banquetPoint: number;
        public devotion: number;
        public activePoint: number;
        public taofaScore: number;
        public combat: number;
        public timeStamina: number;
        public signature: string;
        public timePoliticsCnt: number;
        public timeIntelCnt: number;
        public timeArmyCnt: number;
        public stage: number;
        public titleId: number;
        public admireCombat: number;
        public admireLove: number;
        public signedDays: number;
        public admireStage: number;
        public curSignedState: number;
        public curSevenState: number;
        public sevenDays: number;
        public hanlinExp: number;
        public hanlinId: number;
        public fieldScore: number;
        public fieldBossHpLeft: number;
        public fieldBossId: number;
        public salaryCnt: number;
        public fieldPoint: number;
        public energy: number;
        public timeEnergy: number;
        public zhenzai: number;
        public luck: number;
        public silkId: number;
        public fastSilk: number;
        public timeLeftGuild: number;
        public buildType: number;
        public bossHp: (number|Long);
        public gmAuth: number;
        public taofaId: number;
        public taofaMaxId: number;
        public guildId: number;
        public devotionTotal: number;
        public enemyUid: number;
        public fightPower: number;
        public timeMonthCard: number;
        public timeLifeCard: number;
        public joinCnt: number;
        public taofaTotal: number;
        public createTime: number;
        public harvestPoint: number;
        public timeVipCard: number;
        public str: number;
        public brain: number;
        public politics: number;
        public prestige: number;
        public static create(properties?: S2C.ISC_UPDATE_ROLE_PRO): S2C.SC_UPDATE_ROLE_PRO;
        public static encode(message: S2C.ISC_UPDATE_ROLE_PRO, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: S2C.ISC_UPDATE_ROLE_PRO, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2C.SC_UPDATE_ROLE_PRO;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2C.SC_UPDATE_ROLE_PRO;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): S2C.SC_UPDATE_ROLE_PRO;
        public static toObject(message: S2C.SC_UPDATE_ROLE_PRO, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface ISC_TEST_ECHO {
        cmdId?: (number|null);
        msg?: (string|null);
    }

    class SC_TEST_ECHO implements ISC_TEST_ECHO {
        constructor(properties?: S2C.ISC_TEST_ECHO);
        public cmdId: number;
        public msg: string;
        public static create(properties?: S2C.ISC_TEST_ECHO): S2C.SC_TEST_ECHO;
        public static encode(message: S2C.ISC_TEST_ECHO, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: S2C.ISC_TEST_ECHO, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2C.SC_TEST_ECHO;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2C.SC_TEST_ECHO;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): S2C.SC_TEST_ECHO;
        public static toObject(message: S2C.SC_TEST_ECHO, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface ISC_ROLE_ONLINE {
        result?: (number|null);
    }

    class SC_ROLE_ONLINE implements ISC_ROLE_ONLINE {
        constructor(properties?: S2C.ISC_ROLE_ONLINE);
        public result: number;
        public static create(properties?: S2C.ISC_ROLE_ONLINE): S2C.SC_ROLE_ONLINE;
        public static encode(message: S2C.ISC_ROLE_ONLINE, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: S2C.ISC_ROLE_ONLINE, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2C.SC_ROLE_ONLINE;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2C.SC_ROLE_ONLINE;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): S2C.SC_ROLE_ONLINE;
        public static toObject(message: S2C.SC_ROLE_ONLINE, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface ISC_ROLE_HEART_BEAT {
        msg?: (string|null);
        clientVersion?: (string|null);
    }

    class SC_ROLE_HEART_BEAT implements ISC_ROLE_HEART_BEAT {
        constructor(properties?: S2C.ISC_ROLE_HEART_BEAT);
        public msg: string;
        public clientVersion: string;
        public static create(properties?: S2C.ISC_ROLE_HEART_BEAT): S2C.SC_ROLE_HEART_BEAT;
        public static encode(message: S2C.ISC_ROLE_HEART_BEAT, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: S2C.ISC_ROLE_HEART_BEAT, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2C.SC_ROLE_HEART_BEAT;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2C.SC_ROLE_HEART_BEAT;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): S2C.SC_ROLE_HEART_BEAT;
        public static toObject(message: S2C.SC_ROLE_HEART_BEAT, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface ILOGIN_SC_LOGIN {
        serverId?: (number|null);
        gmAuth?: (number|null);
        isNew?: (number|null);
    }

    class LOGIN_SC_LOGIN implements ILOGIN_SC_LOGIN {
        constructor(properties?: S2C.ILOGIN_SC_LOGIN);
        public serverId: number;
        public gmAuth: number;
        public isNew: number;
        public static create(properties?: S2C.ILOGIN_SC_LOGIN): S2C.LOGIN_SC_LOGIN;
        public static encode(message: S2C.ILOGIN_SC_LOGIN, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: S2C.ILOGIN_SC_LOGIN, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2C.LOGIN_SC_LOGIN;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2C.LOGIN_SC_LOGIN;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): S2C.LOGIN_SC_LOGIN;
        public static toObject(message: S2C.LOGIN_SC_LOGIN, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface ILOGIN_SC_CHOOSE_SERVER {
        ip?: (string|null);
        port?: (number|null);
        version?: (string|null);
        resVersion?: (string|null);
        resServerAddress?: (string|null);
        uid?: (number|null);
        token?: (string|null);
        serverId?: (number|null);
        serverName?: (string|null);
    }

    class LOGIN_SC_CHOOSE_SERVER implements ILOGIN_SC_CHOOSE_SERVER {
        constructor(properties?: S2C.ILOGIN_SC_CHOOSE_SERVER);
        public ip: string;
        public port: number;
        public version: string;
        public resVersion: string;
        public resServerAddress: string;
        public uid: number;
        public token: string;
        public serverId: number;
        public serverName: string;
        public static create(properties?: S2C.ILOGIN_SC_CHOOSE_SERVER): S2C.LOGIN_SC_CHOOSE_SERVER;
        public static encode(message: S2C.ILOGIN_SC_CHOOSE_SERVER, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: S2C.ILOGIN_SC_CHOOSE_SERVER, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2C.LOGIN_SC_CHOOSE_SERVER;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2C.LOGIN_SC_CHOOSE_SERVER;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): S2C.LOGIN_SC_CHOOSE_SERVER;
        public static toObject(message: S2C.LOGIN_SC_CHOOSE_SERVER, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface ILOGIN_SC_GET_SERVER_LIST {
        servers?: (S2C.LOGIN_SC_GET_SERVER_LIST.IServer[]|null);
    }

    class LOGIN_SC_GET_SERVER_LIST implements ILOGIN_SC_GET_SERVER_LIST {
        constructor(properties?: S2C.ILOGIN_SC_GET_SERVER_LIST);
        public servers: S2C.LOGIN_SC_GET_SERVER_LIST.IServer[];
        public static create(properties?: S2C.ILOGIN_SC_GET_SERVER_LIST): S2C.LOGIN_SC_GET_SERVER_LIST;
        public static encode(message: S2C.ILOGIN_SC_GET_SERVER_LIST, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: S2C.ILOGIN_SC_GET_SERVER_LIST, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2C.LOGIN_SC_GET_SERVER_LIST;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2C.LOGIN_SC_GET_SERVER_LIST;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): S2C.LOGIN_SC_GET_SERVER_LIST;
        public static toObject(message: S2C.LOGIN_SC_GET_SERVER_LIST, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    namespace LOGIN_SC_GET_SERVER_LIST {

        interface IServer {
            serverId?: (number|null);
            name?: (string|null);
            status?: (number|null);
            level?: (number|null);
            lastLoginTime?: (number|null);
        }

        class Server implements IServer {
            constructor(properties?: S2C.LOGIN_SC_GET_SERVER_LIST.IServer);
            public serverId: number;
            public name: string;
            public status: number;
            public level: number;
            public lastLoginTime: number;
            public static create(properties?: S2C.LOGIN_SC_GET_SERVER_LIST.IServer): S2C.LOGIN_SC_GET_SERVER_LIST.Server;
            public static encode(message: S2C.LOGIN_SC_GET_SERVER_LIST.IServer, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: S2C.LOGIN_SC_GET_SERVER_LIST.IServer, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2C.LOGIN_SC_GET_SERVER_LIST.Server;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2C.LOGIN_SC_GET_SERVER_LIST.Server;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): S2C.LOGIN_SC_GET_SERVER_LIST.Server;
            public static toObject(message: S2C.LOGIN_SC_GET_SERVER_LIST.Server, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }
    }

    interface ILOGIN_SC_GET_INFO {
        notice?: (string|null);
        version?: (string|null);
        updateAddress?: (string|null);
    }

    class LOGIN_SC_GET_INFO implements ILOGIN_SC_GET_INFO {
        constructor(properties?: S2C.ILOGIN_SC_GET_INFO);
        public notice: string;
        public version: string;
        public updateAddress: string;
        public static create(properties?: S2C.ILOGIN_SC_GET_INFO): S2C.LOGIN_SC_GET_INFO;
        public static encode(message: S2C.ILOGIN_SC_GET_INFO, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: S2C.ILOGIN_SC_GET_INFO, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2C.LOGIN_SC_GET_INFO;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2C.LOGIN_SC_GET_INFO;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): S2C.LOGIN_SC_GET_INFO;
        public static toObject(message: S2C.LOGIN_SC_GET_INFO, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface ILOGIN_SC_QUERY {
        ip?: (string|null);
        port?: (number|null);
        state?: (number|null);
        success?: (boolean|null);
    }

    class LOGIN_SC_QUERY implements ILOGIN_SC_QUERY {
        constructor(properties?: S2C.ILOGIN_SC_QUERY);
        public ip: string;
        public port: number;
        public state: number;
        public success: boolean;
        public static create(properties?: S2C.ILOGIN_SC_QUERY): S2C.LOGIN_SC_QUERY;
        public static encode(message: S2C.ILOGIN_SC_QUERY, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: S2C.ILOGIN_SC_QUERY, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2C.LOGIN_SC_QUERY;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2C.LOGIN_SC_QUERY;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): S2C.LOGIN_SC_QUERY;
        public static toObject(message: S2C.LOGIN_SC_QUERY, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface ISC_ROLE_CREATE {
        reslut?: (number|null);
    }

    class SC_ROLE_CREATE implements ISC_ROLE_CREATE {
        constructor(properties?: S2C.ISC_ROLE_CREATE);
        public reslut: number;
        public static create(properties?: S2C.ISC_ROLE_CREATE): S2C.SC_ROLE_CREATE;
        public static encode(message: S2C.ISC_ROLE_CREATE, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: S2C.ISC_ROLE_CREATE, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2C.SC_ROLE_CREATE;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2C.SC_ROLE_CREATE;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): S2C.SC_ROLE_CREATE;
        public static toObject(message: S2C.SC_ROLE_CREATE, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface ISC_GM_CMD {
        msg?: (string|null);
    }

    class SC_GM_CMD implements ISC_GM_CMD {
        constructor(properties?: S2C.ISC_GM_CMD);
        public msg: string;
        public static create(properties?: S2C.ISC_GM_CMD): S2C.SC_GM_CMD;
        public static encode(message: S2C.ISC_GM_CMD, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: S2C.ISC_GM_CMD, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2C.SC_GM_CMD;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2C.SC_GM_CMD;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): S2C.SC_GM_CMD;
        public static toObject(message: S2C.SC_GM_CMD, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface ISC_UPDATE_CHAT {
        msgs?: (S2C.SC_UPDATE_CHAT.IChatMsg[]|null);
    }

    class SC_UPDATE_CHAT implements ISC_UPDATE_CHAT {
        constructor(properties?: S2C.ISC_UPDATE_CHAT);
        public msgs: S2C.SC_UPDATE_CHAT.IChatMsg[];
        public static create(properties?: S2C.ISC_UPDATE_CHAT): S2C.SC_UPDATE_CHAT;
        public static encode(message: S2C.ISC_UPDATE_CHAT, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: S2C.ISC_UPDATE_CHAT, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2C.SC_UPDATE_CHAT;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2C.SC_UPDATE_CHAT;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): S2C.SC_UPDATE_CHAT;
        public static toObject(message: S2C.SC_UPDATE_CHAT, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    namespace SC_UPDATE_CHAT {

        enum EChatTempalteId {
            none = 0,
            banquet = 1,
            hanlin = 2,
            guildStage = 3,
            throneOnline = 4
        }

        interface IChatMsg {
            roleId?: (number|null);
            name?: (string|null);
            titleId?: (number|null);
            vipLevel?: (number|null);
            msg?: (string|null);
            createTime?: (number|null);
            channel?: (number|null);
            channelParam?: (number|null);
            templateId?: (S2C.SC_UPDATE_CHAT.EChatTempalteId|null);
            strParams?: (string[]|null);
        }

        class ChatMsg implements IChatMsg {
            constructor(properties?: S2C.SC_UPDATE_CHAT.IChatMsg);
            public roleId: number;
            public name: string;
            public titleId: number;
            public vipLevel: number;
            public msg: string;
            public createTime: number;
            public channel: number;
            public channelParam: number;
            public templateId: S2C.SC_UPDATE_CHAT.EChatTempalteId;
            public strParams: string[];
            public static create(properties?: S2C.SC_UPDATE_CHAT.IChatMsg): S2C.SC_UPDATE_CHAT.ChatMsg;
            public static encode(message: S2C.SC_UPDATE_CHAT.IChatMsg, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: S2C.SC_UPDATE_CHAT.IChatMsg, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2C.SC_UPDATE_CHAT.ChatMsg;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2C.SC_UPDATE_CHAT.ChatMsg;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): S2C.SC_UPDATE_CHAT.ChatMsg;
            public static toObject(message: S2C.SC_UPDATE_CHAT.ChatMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }
    }

    interface ISC_UPDATE_RECHARGE {
    }

    class SC_UPDATE_RECHARGE implements ISC_UPDATE_RECHARGE {
        constructor(properties?: S2C.ISC_UPDATE_RECHARGE);
        public static create(properties?: S2C.ISC_UPDATE_RECHARGE): S2C.SC_UPDATE_RECHARGE;
        public static encode(message: S2C.ISC_UPDATE_RECHARGE, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: S2C.ISC_UPDATE_RECHARGE, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2C.SC_UPDATE_RECHARGE;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2C.SC_UPDATE_RECHARGE;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): S2C.SC_UPDATE_RECHARGE;
        public static toObject(message: S2C.SC_UPDATE_RECHARGE, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface ISC_ROLE_OFFLINE {
        type?: (number|null);
    }

    class SC_ROLE_OFFLINE implements ISC_ROLE_OFFLINE {
        constructor(properties?: S2C.ISC_ROLE_OFFLINE);
        public type: number;
        public static create(properties?: S2C.ISC_ROLE_OFFLINE): S2C.SC_ROLE_OFFLINE;
        public static encode(message: S2C.ISC_ROLE_OFFLINE, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: S2C.ISC_ROLE_OFFLINE, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2C.SC_ROLE_OFFLINE;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2C.SC_ROLE_OFFLINE;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): S2C.SC_ROLE_OFFLINE;
        public static toObject(message: S2C.SC_ROLE_OFFLINE, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }
}

export namespace Router {

    interface ICS_PRECONNECT {
        cmdId?: (number|null);
        host?: (string|null);
        port?: (number|null);
    }

    class CS_PRECONNECT implements ICS_PRECONNECT {
        constructor(properties?: Router.ICS_PRECONNECT);
        public cmdId: number;
        public host: string;
        public port: number;
        public static create(properties?: Router.ICS_PRECONNECT): Router.CS_PRECONNECT;
        public static encode(message: Router.ICS_PRECONNECT, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: Router.ICS_PRECONNECT, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Router.CS_PRECONNECT;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Router.CS_PRECONNECT;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): Router.CS_PRECONNECT;
        public static toObject(message: Router.CS_PRECONNECT, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface ISC_PRECONNECT {
        cmdId?: (number|null);
    }

    class SC_PRECONNECT implements ISC_PRECONNECT {
        constructor(properties?: Router.ISC_PRECONNECT);
        public cmdId: number;
        public static create(properties?: Router.ISC_PRECONNECT): Router.SC_PRECONNECT;
        public static encode(message: Router.ISC_PRECONNECT, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: Router.ISC_PRECONNECT, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Router.SC_PRECONNECT;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Router.SC_PRECONNECT;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): Router.SC_PRECONNECT;
        public static toObject(message: Router.SC_PRECONNECT, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }
}
