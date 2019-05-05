import * as $protobuf from "protobufjs";
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
