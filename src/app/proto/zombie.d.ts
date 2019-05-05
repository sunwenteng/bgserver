import * as $protobuf from "protobufjs";
export namespace Zombie {

    interface ISession_Init {
        name?: (string|null);
        uId?: (string|null);
        sId?: (number|null);
        hash?: (string|null);
        lang?: (string|null);
        channelId?: (string|null);
    }

    class Session_Init implements ISession_Init {
        constructor(properties?: Zombie.ISession_Init);
        public name: string;
        public uId: string;
        public sId: number;
        public hash: string;
        public lang: string;
        public channelId: string;
        public static create(properties?: Zombie.ISession_Init): Zombie.Session_Init;
        public static encode(message: Zombie.ISession_Init, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: Zombie.ISession_Init, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Zombie.Session_Init;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Zombie.Session_Init;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): Zombie.Session_Init;
        public static toObject(message: Zombie.Session_Init, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface ISession_Close {
        reason?: (number|null);
    }

    class Session_Close implements ISession_Close {
        constructor(properties?: Zombie.ISession_Close);
        public reason: number;
        public static create(properties?: Zombie.ISession_Close): Zombie.Session_Close;
        public static encode(message: Zombie.ISession_Close, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: Zombie.ISession_Close, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Zombie.Session_Close;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Zombie.Session_Close;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): Zombie.Session_Close;
        public static toObject(message: Zombie.Session_Close, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    enum Session_Service_Bind_State {
        SSBS_UNBINDED = 0,
        SSBS_BINDED = 1
    }

    interface ISession_Service_Bind {
        bind?: (Zombie.Session_Service_Bind_State|null);
    }

    class Session_Service_Bind implements ISession_Service_Bind {
        constructor(properties?: Zombie.ISession_Service_Bind);
        public bind: Zombie.Session_Service_Bind_State;
        public static create(properties?: Zombie.ISession_Service_Bind): Zombie.Session_Service_Bind;
        public static encode(message: Zombie.ISession_Service_Bind, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: Zombie.ISession_Service_Bind, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Zombie.Session_Service_Bind;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Zombie.Session_Service_Bind;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): Zombie.Session_Service_Bind;
        public static toObject(message: Zombie.Session_Service_Bind, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IAck_Msg {
        msgIdx?: (number|null);
    }

    class Ack_Msg implements IAck_Msg {
        constructor(properties?: Zombie.IAck_Msg);
        public msgIdx: number;
        public static create(properties?: Zombie.IAck_Msg): Zombie.Ack_Msg;
        public static encode(message: Zombie.IAck_Msg, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: Zombie.IAck_Msg, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Zombie.Ack_Msg;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Zombie.Ack_Msg;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): Zombie.Ack_Msg;
        public static toObject(message: Zombie.Ack_Msg, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    enum Data_Sync_Type {
        E_DST_FULL = 0,
        E_DST_DELTA = 1
    }

    interface IData_Sync {
        type?: (Zombie.Data_Sync_Type|null);
        data?: (Uint8Array|null);
    }

    class Data_Sync implements IData_Sync {
        constructor(properties?: Zombie.IData_Sync);
        public type: Zombie.Data_Sync_Type;
        public data: Uint8Array;
        public static create(properties?: Zombie.IData_Sync): Zombie.Data_Sync;
        public static encode(message: Zombie.IData_Sync, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: Zombie.IData_Sync, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Zombie.Data_Sync;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Zombie.Data_Sync;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): Zombie.Data_Sync;
        public static toObject(message: Zombie.Data_Sync, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }
}
