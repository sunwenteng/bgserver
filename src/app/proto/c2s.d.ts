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
