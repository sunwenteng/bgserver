/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.Zombie = (function() {

    /**
     * Namespace Zombie.
     * @exports Zombie
     * @namespace
     */
    var Zombie = {};

    Zombie.Session_Init = (function() {

        /**
         * Properties of a Session_Init.
         * @memberof Zombie
         * @interface ISession_Init
         * @property {string|null} [name] Session_Init name
         * @property {string|null} [uId] Session_Init uId
         * @property {number|null} [sId] Session_Init sId
         * @property {string|null} [hash] Session_Init hash
         * @property {string|null} [lang] Session_Init lang
         * @property {string|null} [channelId] Session_Init channelId
         */

        /**
         * Constructs a new Session_Init.
         * @memberof Zombie
         * @classdesc Represents a Session_Init.
         * @implements ISession_Init
         * @constructor
         * @param {Zombie.ISession_Init=} [properties] Properties to set
         */
        function Session_Init(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Session_Init name.
         * @member {string} name
         * @memberof Zombie.Session_Init
         * @instance
         */
        Session_Init.prototype.name = "";

        /**
         * Session_Init uId.
         * @member {string} uId
         * @memberof Zombie.Session_Init
         * @instance
         */
        Session_Init.prototype.uId = "";

        /**
         * Session_Init sId.
         * @member {number} sId
         * @memberof Zombie.Session_Init
         * @instance
         */
        Session_Init.prototype.sId = 0;

        /**
         * Session_Init hash.
         * @member {string} hash
         * @memberof Zombie.Session_Init
         * @instance
         */
        Session_Init.prototype.hash = "";

        /**
         * Session_Init lang.
         * @member {string} lang
         * @memberof Zombie.Session_Init
         * @instance
         */
        Session_Init.prototype.lang = "";

        /**
         * Session_Init channelId.
         * @member {string} channelId
         * @memberof Zombie.Session_Init
         * @instance
         */
        Session_Init.prototype.channelId = "";

        /**
         * Creates a new Session_Init instance using the specified properties.
         * @function create
         * @memberof Zombie.Session_Init
         * @static
         * @param {Zombie.ISession_Init=} [properties] Properties to set
         * @returns {Zombie.Session_Init} Session_Init instance
         */
        Session_Init.create = function create(properties) {
            return new Session_Init(properties);
        };

        /**
         * Encodes the specified Session_Init message. Does not implicitly {@link Zombie.Session_Init.verify|verify} messages.
         * @function encode
         * @memberof Zombie.Session_Init
         * @static
         * @param {Zombie.ISession_Init} message Session_Init message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Session_Init.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.uId != null && message.hasOwnProperty("uId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.uId);
            if (message.sId != null && message.hasOwnProperty("sId"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.sId);
            if (message.hash != null && message.hasOwnProperty("hash"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.hash);
            if (message.lang != null && message.hasOwnProperty("lang"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.lang);
            if (message.channelId != null && message.hasOwnProperty("channelId"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.channelId);
            return writer;
        };

        /**
         * Encodes the specified Session_Init message, length delimited. Does not implicitly {@link Zombie.Session_Init.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Zombie.Session_Init
         * @static
         * @param {Zombie.ISession_Init} message Session_Init message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Session_Init.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Session_Init message from the specified reader or buffer.
         * @function decode
         * @memberof Zombie.Session_Init
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Zombie.Session_Init} Session_Init
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Session_Init.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Zombie.Session_Init();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.uId = reader.string();
                    break;
                case 3:
                    message.sId = reader.uint32();
                    break;
                case 4:
                    message.hash = reader.string();
                    break;
                case 5:
                    message.lang = reader.string();
                    break;
                case 6:
                    message.channelId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Session_Init message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Zombie.Session_Init
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Zombie.Session_Init} Session_Init
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Session_Init.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Session_Init message.
         * @function verify
         * @memberof Zombie.Session_Init
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Session_Init.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.uId != null && message.hasOwnProperty("uId"))
                if (!$util.isString(message.uId))
                    return "uId: string expected";
            if (message.sId != null && message.hasOwnProperty("sId"))
                if (!$util.isInteger(message.sId))
                    return "sId: integer expected";
            if (message.hash != null && message.hasOwnProperty("hash"))
                if (!$util.isString(message.hash))
                    return "hash: string expected";
            if (message.lang != null && message.hasOwnProperty("lang"))
                if (!$util.isString(message.lang))
                    return "lang: string expected";
            if (message.channelId != null && message.hasOwnProperty("channelId"))
                if (!$util.isString(message.channelId))
                    return "channelId: string expected";
            return null;
        };

        /**
         * Creates a Session_Init message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Zombie.Session_Init
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Zombie.Session_Init} Session_Init
         */
        Session_Init.fromObject = function fromObject(object) {
            if (object instanceof $root.Zombie.Session_Init)
                return object;
            var message = new $root.Zombie.Session_Init();
            if (object.name != null)
                message.name = String(object.name);
            if (object.uId != null)
                message.uId = String(object.uId);
            if (object.sId != null)
                message.sId = object.sId >>> 0;
            if (object.hash != null)
                message.hash = String(object.hash);
            if (object.lang != null)
                message.lang = String(object.lang);
            if (object.channelId != null)
                message.channelId = String(object.channelId);
            return message;
        };

        /**
         * Creates a plain object from a Session_Init message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Zombie.Session_Init
         * @static
         * @param {Zombie.Session_Init} message Session_Init
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Session_Init.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.name = "";
                object.uId = "";
                object.sId = 0;
                object.hash = "";
                object.lang = "";
                object.channelId = "";
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.uId != null && message.hasOwnProperty("uId"))
                object.uId = message.uId;
            if (message.sId != null && message.hasOwnProperty("sId"))
                object.sId = message.sId;
            if (message.hash != null && message.hasOwnProperty("hash"))
                object.hash = message.hash;
            if (message.lang != null && message.hasOwnProperty("lang"))
                object.lang = message.lang;
            if (message.channelId != null && message.hasOwnProperty("channelId"))
                object.channelId = message.channelId;
            return object;
        };

        /**
         * Converts this Session_Init to JSON.
         * @function toJSON
         * @memberof Zombie.Session_Init
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Session_Init.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Session_Init;
    })();

    Zombie.Session_Close = (function() {

        /**
         * Properties of a Session_Close.
         * @memberof Zombie
         * @interface ISession_Close
         * @property {number|null} [reason] Session_Close reason
         */

        /**
         * Constructs a new Session_Close.
         * @memberof Zombie
         * @classdesc Represents a Session_Close.
         * @implements ISession_Close
         * @constructor
         * @param {Zombie.ISession_Close=} [properties] Properties to set
         */
        function Session_Close(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Session_Close reason.
         * @member {number} reason
         * @memberof Zombie.Session_Close
         * @instance
         */
        Session_Close.prototype.reason = 0;

        /**
         * Creates a new Session_Close instance using the specified properties.
         * @function create
         * @memberof Zombie.Session_Close
         * @static
         * @param {Zombie.ISession_Close=} [properties] Properties to set
         * @returns {Zombie.Session_Close} Session_Close instance
         */
        Session_Close.create = function create(properties) {
            return new Session_Close(properties);
        };

        /**
         * Encodes the specified Session_Close message. Does not implicitly {@link Zombie.Session_Close.verify|verify} messages.
         * @function encode
         * @memberof Zombie.Session_Close
         * @static
         * @param {Zombie.ISession_Close} message Session_Close message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Session_Close.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.reason != null && message.hasOwnProperty("reason"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.reason);
            return writer;
        };

        /**
         * Encodes the specified Session_Close message, length delimited. Does not implicitly {@link Zombie.Session_Close.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Zombie.Session_Close
         * @static
         * @param {Zombie.ISession_Close} message Session_Close message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Session_Close.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Session_Close message from the specified reader or buffer.
         * @function decode
         * @memberof Zombie.Session_Close
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Zombie.Session_Close} Session_Close
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Session_Close.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Zombie.Session_Close();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.reason = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Session_Close message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Zombie.Session_Close
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Zombie.Session_Close} Session_Close
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Session_Close.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Session_Close message.
         * @function verify
         * @memberof Zombie.Session_Close
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Session_Close.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.reason != null && message.hasOwnProperty("reason"))
                if (!$util.isInteger(message.reason))
                    return "reason: integer expected";
            return null;
        };

        /**
         * Creates a Session_Close message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Zombie.Session_Close
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Zombie.Session_Close} Session_Close
         */
        Session_Close.fromObject = function fromObject(object) {
            if (object instanceof $root.Zombie.Session_Close)
                return object;
            var message = new $root.Zombie.Session_Close();
            if (object.reason != null)
                message.reason = object.reason >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a Session_Close message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Zombie.Session_Close
         * @static
         * @param {Zombie.Session_Close} message Session_Close
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Session_Close.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.reason = 0;
            if (message.reason != null && message.hasOwnProperty("reason"))
                object.reason = message.reason;
            return object;
        };

        /**
         * Converts this Session_Close to JSON.
         * @function toJSON
         * @memberof Zombie.Session_Close
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Session_Close.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Session_Close;
    })();

    /**
     * Session_Service_Bind_State enum.
     * @name Zombie.Session_Service_Bind_State
     * @enum {string}
     * @property {number} SSBS_UNBINDED=0 SSBS_UNBINDED value
     * @property {number} SSBS_BINDED=1 SSBS_BINDED value
     */
    Zombie.Session_Service_Bind_State = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "SSBS_UNBINDED"] = 0;
        values[valuesById[1] = "SSBS_BINDED"] = 1;
        return values;
    })();

    Zombie.Session_Service_Bind = (function() {

        /**
         * Properties of a Session_Service_Bind.
         * @memberof Zombie
         * @interface ISession_Service_Bind
         * @property {Zombie.Session_Service_Bind_State|null} [bind] Session_Service_Bind bind
         */

        /**
         * Constructs a new Session_Service_Bind.
         * @memberof Zombie
         * @classdesc Represents a Session_Service_Bind.
         * @implements ISession_Service_Bind
         * @constructor
         * @param {Zombie.ISession_Service_Bind=} [properties] Properties to set
         */
        function Session_Service_Bind(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Session_Service_Bind bind.
         * @member {Zombie.Session_Service_Bind_State} bind
         * @memberof Zombie.Session_Service_Bind
         * @instance
         */
        Session_Service_Bind.prototype.bind = 0;

        /**
         * Creates a new Session_Service_Bind instance using the specified properties.
         * @function create
         * @memberof Zombie.Session_Service_Bind
         * @static
         * @param {Zombie.ISession_Service_Bind=} [properties] Properties to set
         * @returns {Zombie.Session_Service_Bind} Session_Service_Bind instance
         */
        Session_Service_Bind.create = function create(properties) {
            return new Session_Service_Bind(properties);
        };

        /**
         * Encodes the specified Session_Service_Bind message. Does not implicitly {@link Zombie.Session_Service_Bind.verify|verify} messages.
         * @function encode
         * @memberof Zombie.Session_Service_Bind
         * @static
         * @param {Zombie.ISession_Service_Bind} message Session_Service_Bind message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Session_Service_Bind.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.bind != null && message.hasOwnProperty("bind"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.bind);
            return writer;
        };

        /**
         * Encodes the specified Session_Service_Bind message, length delimited. Does not implicitly {@link Zombie.Session_Service_Bind.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Zombie.Session_Service_Bind
         * @static
         * @param {Zombie.ISession_Service_Bind} message Session_Service_Bind message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Session_Service_Bind.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Session_Service_Bind message from the specified reader or buffer.
         * @function decode
         * @memberof Zombie.Session_Service_Bind
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Zombie.Session_Service_Bind} Session_Service_Bind
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Session_Service_Bind.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Zombie.Session_Service_Bind();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 2:
                    message.bind = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Session_Service_Bind message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Zombie.Session_Service_Bind
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Zombie.Session_Service_Bind} Session_Service_Bind
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Session_Service_Bind.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Session_Service_Bind message.
         * @function verify
         * @memberof Zombie.Session_Service_Bind
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Session_Service_Bind.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.bind != null && message.hasOwnProperty("bind"))
                switch (message.bind) {
                default:
                    return "bind: enum value expected";
                case 0:
                case 1:
                    break;
                }
            return null;
        };

        /**
         * Creates a Session_Service_Bind message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Zombie.Session_Service_Bind
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Zombie.Session_Service_Bind} Session_Service_Bind
         */
        Session_Service_Bind.fromObject = function fromObject(object) {
            if (object instanceof $root.Zombie.Session_Service_Bind)
                return object;
            var message = new $root.Zombie.Session_Service_Bind();
            switch (object.bind) {
            case "SSBS_UNBINDED":
            case 0:
                message.bind = 0;
                break;
            case "SSBS_BINDED":
            case 1:
                message.bind = 1;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a Session_Service_Bind message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Zombie.Session_Service_Bind
         * @static
         * @param {Zombie.Session_Service_Bind} message Session_Service_Bind
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Session_Service_Bind.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.bind = options.enums === String ? "SSBS_UNBINDED" : 0;
            if (message.bind != null && message.hasOwnProperty("bind"))
                object.bind = options.enums === String ? $root.Zombie.Session_Service_Bind_State[message.bind] : message.bind;
            return object;
        };

        /**
         * Converts this Session_Service_Bind to JSON.
         * @function toJSON
         * @memberof Zombie.Session_Service_Bind
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Session_Service_Bind.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Session_Service_Bind;
    })();

    Zombie.Ack_Msg = (function() {

        /**
         * Properties of an Ack_Msg.
         * @memberof Zombie
         * @interface IAck_Msg
         * @property {number|null} [msgIdx] Ack_Msg msgIdx
         */

        /**
         * Constructs a new Ack_Msg.
         * @memberof Zombie
         * @classdesc Represents an Ack_Msg.
         * @implements IAck_Msg
         * @constructor
         * @param {Zombie.IAck_Msg=} [properties] Properties to set
         */
        function Ack_Msg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Ack_Msg msgIdx.
         * @member {number} msgIdx
         * @memberof Zombie.Ack_Msg
         * @instance
         */
        Ack_Msg.prototype.msgIdx = 0;

        /**
         * Creates a new Ack_Msg instance using the specified properties.
         * @function create
         * @memberof Zombie.Ack_Msg
         * @static
         * @param {Zombie.IAck_Msg=} [properties] Properties to set
         * @returns {Zombie.Ack_Msg} Ack_Msg instance
         */
        Ack_Msg.create = function create(properties) {
            return new Ack_Msg(properties);
        };

        /**
         * Encodes the specified Ack_Msg message. Does not implicitly {@link Zombie.Ack_Msg.verify|verify} messages.
         * @function encode
         * @memberof Zombie.Ack_Msg
         * @static
         * @param {Zombie.IAck_Msg} message Ack_Msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Ack_Msg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.msgIdx != null && message.hasOwnProperty("msgIdx"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.msgIdx);
            return writer;
        };

        /**
         * Encodes the specified Ack_Msg message, length delimited. Does not implicitly {@link Zombie.Ack_Msg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Zombie.Ack_Msg
         * @static
         * @param {Zombie.IAck_Msg} message Ack_Msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Ack_Msg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Ack_Msg message from the specified reader or buffer.
         * @function decode
         * @memberof Zombie.Ack_Msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Zombie.Ack_Msg} Ack_Msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Ack_Msg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Zombie.Ack_Msg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.msgIdx = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Ack_Msg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Zombie.Ack_Msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Zombie.Ack_Msg} Ack_Msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Ack_Msg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Ack_Msg message.
         * @function verify
         * @memberof Zombie.Ack_Msg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Ack_Msg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.msgIdx != null && message.hasOwnProperty("msgIdx"))
                if (!$util.isInteger(message.msgIdx))
                    return "msgIdx: integer expected";
            return null;
        };

        /**
         * Creates an Ack_Msg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Zombie.Ack_Msg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Zombie.Ack_Msg} Ack_Msg
         */
        Ack_Msg.fromObject = function fromObject(object) {
            if (object instanceof $root.Zombie.Ack_Msg)
                return object;
            var message = new $root.Zombie.Ack_Msg();
            if (object.msgIdx != null)
                message.msgIdx = object.msgIdx >>> 0;
            return message;
        };

        /**
         * Creates a plain object from an Ack_Msg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Zombie.Ack_Msg
         * @static
         * @param {Zombie.Ack_Msg} message Ack_Msg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Ack_Msg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.msgIdx = 0;
            if (message.msgIdx != null && message.hasOwnProperty("msgIdx"))
                object.msgIdx = message.msgIdx;
            return object;
        };

        /**
         * Converts this Ack_Msg to JSON.
         * @function toJSON
         * @memberof Zombie.Ack_Msg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Ack_Msg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Ack_Msg;
    })();

    /**
     * Data_Sync_Type enum.
     * @name Zombie.Data_Sync_Type
     * @enum {string}
     * @property {number} E_DST_FULL=0 E_DST_FULL value
     * @property {number} E_DST_DELTA=1 E_DST_DELTA value
     */
    Zombie.Data_Sync_Type = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "E_DST_FULL"] = 0;
        values[valuesById[1] = "E_DST_DELTA"] = 1;
        return values;
    })();

    Zombie.Data_Sync = (function() {

        /**
         * Properties of a Data_Sync.
         * @memberof Zombie
         * @interface IData_Sync
         * @property {Zombie.Data_Sync_Type|null} [type] Data_Sync type
         * @property {Uint8Array|null} [data] Data_Sync data
         */

        /**
         * Constructs a new Data_Sync.
         * @memberof Zombie
         * @classdesc Represents a Data_Sync.
         * @implements IData_Sync
         * @constructor
         * @param {Zombie.IData_Sync=} [properties] Properties to set
         */
        function Data_Sync(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Data_Sync type.
         * @member {Zombie.Data_Sync_Type} type
         * @memberof Zombie.Data_Sync
         * @instance
         */
        Data_Sync.prototype.type = 0;

        /**
         * Data_Sync data.
         * @member {Uint8Array} data
         * @memberof Zombie.Data_Sync
         * @instance
         */
        Data_Sync.prototype.data = $util.newBuffer([]);

        /**
         * Creates a new Data_Sync instance using the specified properties.
         * @function create
         * @memberof Zombie.Data_Sync
         * @static
         * @param {Zombie.IData_Sync=} [properties] Properties to set
         * @returns {Zombie.Data_Sync} Data_Sync instance
         */
        Data_Sync.create = function create(properties) {
            return new Data_Sync(properties);
        };

        /**
         * Encodes the specified Data_Sync message. Does not implicitly {@link Zombie.Data_Sync.verify|verify} messages.
         * @function encode
         * @memberof Zombie.Data_Sync
         * @static
         * @param {Zombie.IData_Sync} message Data_Sync message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Data_Sync.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.data != null && message.hasOwnProperty("data"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.data);
            return writer;
        };

        /**
         * Encodes the specified Data_Sync message, length delimited. Does not implicitly {@link Zombie.Data_Sync.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Zombie.Data_Sync
         * @static
         * @param {Zombie.IData_Sync} message Data_Sync message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Data_Sync.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Data_Sync message from the specified reader or buffer.
         * @function decode
         * @memberof Zombie.Data_Sync
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Zombie.Data_Sync} Data_Sync
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Data_Sync.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Zombie.Data_Sync();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.data = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Data_Sync message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Zombie.Data_Sync
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Zombie.Data_Sync} Data_Sync
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Data_Sync.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Data_Sync message.
         * @function verify
         * @memberof Zombie.Data_Sync
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Data_Sync.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.data != null && message.hasOwnProperty("data"))
                if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                    return "data: buffer expected";
            return null;
        };

        /**
         * Creates a Data_Sync message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Zombie.Data_Sync
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Zombie.Data_Sync} Data_Sync
         */
        Data_Sync.fromObject = function fromObject(object) {
            if (object instanceof $root.Zombie.Data_Sync)
                return object;
            var message = new $root.Zombie.Data_Sync();
            switch (object.type) {
            case "E_DST_FULL":
            case 0:
                message.type = 0;
                break;
            case "E_DST_DELTA":
            case 1:
                message.type = 1;
                break;
            }
            if (object.data != null)
                if (typeof object.data === "string")
                    $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                else if (object.data.length)
                    message.data = object.data;
            return message;
        };

        /**
         * Creates a plain object from a Data_Sync message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Zombie.Data_Sync
         * @static
         * @param {Zombie.Data_Sync} message Data_Sync
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Data_Sync.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.type = options.enums === String ? "E_DST_FULL" : 0;
                if (options.bytes === String)
                    object.data = "";
                else {
                    object.data = [];
                    if (options.bytes !== Array)
                        object.data = $util.newBuffer(object.data);
                }
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.Zombie.Data_Sync_Type[message.type] : message.type;
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
            return object;
        };

        /**
         * Converts this Data_Sync to JSON.
         * @function toJSON
         * @memberof Zombie.Data_Sync
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Data_Sync.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Data_Sync;
    })();

    return Zombie;
})();

module.exports = $root;
