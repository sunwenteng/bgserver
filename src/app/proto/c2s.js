/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.C2S = (function() {

    /**
     * Namespace C2S.
     * @exports C2S
     * @namespace
     */
    var C2S = {};

    C2S.Message = (function() {

        /**
         * Properties of a Message.
         * @memberof C2S
         * @interface IMessage
         * @property {C2S.ILOGIN_CS_LOGIN|null} [LOGIN_CS_LOGIN] Message LOGIN_CS_LOGIN
         * @property {C2S.ILOGIN_CS_CHOOSE_SERVER|null} [LOGIN_CS_CHOOSE_SERVER] Message LOGIN_CS_CHOOSE_SERVER
         * @property {C2S.ILOGIN_CS_GET_SERVER_LIST|null} [LOGIN_CS_GET_SERVER_LIST] Message LOGIN_CS_GET_SERVER_LIST
         * @property {C2S.ILOGIN_CS_GET_INFO|null} [LOGIN_CS_GET_INFO] Message LOGIN_CS_GET_INFO
         * @property {C2S.ILOGIN_CS_QUERY|null} [LOGIN_CS_QUERY] Message LOGIN_CS_QUERY
         * @property {C2S.ICS_TEST_ECHO|null} [CS_TEST_ECHO] Message CS_TEST_ECHO
         * @property {C2S.ICS_ROLE_ONLINE|null} [CS_ROLE_ONLINE] Message CS_ROLE_ONLINE
         * @property {C2S.ICS_ROLE_HEART_BEAT|null} [CS_ROLE_HEART_BEAT] Message CS_ROLE_HEART_BEAT
         * @property {C2S.ICS_ROLE_CREATE|null} [CS_ROLE_CREATE] Message CS_ROLE_CREATE
         * @property {C2S.ICS_GM_CMD|null} [CS_GM_CMD] Message CS_GM_CMD
         * @property {C2S.ICS_ROLE_CHAT|null} [CS_ROLE_CHAT] Message CS_ROLE_CHAT
         */

        /**
         * Constructs a new Message.
         * @memberof C2S
         * @classdesc remember to put your message here as a kind support*
         * @implements IMessage
         * @constructor
         * @param {C2S.IMessage=} [properties] Properties to set
         */
        function Message(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Message LOGIN_CS_LOGIN.
         * @member {C2S.ILOGIN_CS_LOGIN|null|undefined} LOGIN_CS_LOGIN
         * @memberof C2S.Message
         * @instance
         */
        Message.prototype.LOGIN_CS_LOGIN = null;

        /**
         * Message LOGIN_CS_CHOOSE_SERVER.
         * @member {C2S.ILOGIN_CS_CHOOSE_SERVER|null|undefined} LOGIN_CS_CHOOSE_SERVER
         * @memberof C2S.Message
         * @instance
         */
        Message.prototype.LOGIN_CS_CHOOSE_SERVER = null;

        /**
         * Message LOGIN_CS_GET_SERVER_LIST.
         * @member {C2S.ILOGIN_CS_GET_SERVER_LIST|null|undefined} LOGIN_CS_GET_SERVER_LIST
         * @memberof C2S.Message
         * @instance
         */
        Message.prototype.LOGIN_CS_GET_SERVER_LIST = null;

        /**
         * Message LOGIN_CS_GET_INFO.
         * @member {C2S.ILOGIN_CS_GET_INFO|null|undefined} LOGIN_CS_GET_INFO
         * @memberof C2S.Message
         * @instance
         */
        Message.prototype.LOGIN_CS_GET_INFO = null;

        /**
         * Message LOGIN_CS_QUERY.
         * @member {C2S.ILOGIN_CS_QUERY|null|undefined} LOGIN_CS_QUERY
         * @memberof C2S.Message
         * @instance
         */
        Message.prototype.LOGIN_CS_QUERY = null;

        /**
         * Message CS_TEST_ECHO.
         * @member {C2S.ICS_TEST_ECHO|null|undefined} CS_TEST_ECHO
         * @memberof C2S.Message
         * @instance
         */
        Message.prototype.CS_TEST_ECHO = null;

        /**
         * Message CS_ROLE_ONLINE.
         * @member {C2S.ICS_ROLE_ONLINE|null|undefined} CS_ROLE_ONLINE
         * @memberof C2S.Message
         * @instance
         */
        Message.prototype.CS_ROLE_ONLINE = null;

        /**
         * Message CS_ROLE_HEART_BEAT.
         * @member {C2S.ICS_ROLE_HEART_BEAT|null|undefined} CS_ROLE_HEART_BEAT
         * @memberof C2S.Message
         * @instance
         */
        Message.prototype.CS_ROLE_HEART_BEAT = null;

        /**
         * Message CS_ROLE_CREATE.
         * @member {C2S.ICS_ROLE_CREATE|null|undefined} CS_ROLE_CREATE
         * @memberof C2S.Message
         * @instance
         */
        Message.prototype.CS_ROLE_CREATE = null;

        /**
         * Message CS_GM_CMD.
         * @member {C2S.ICS_GM_CMD|null|undefined} CS_GM_CMD
         * @memberof C2S.Message
         * @instance
         */
        Message.prototype.CS_GM_CMD = null;

        /**
         * Message CS_ROLE_CHAT.
         * @member {C2S.ICS_ROLE_CHAT|null|undefined} CS_ROLE_CHAT
         * @memberof C2S.Message
         * @instance
         */
        Message.prototype.CS_ROLE_CHAT = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * Message kind.
         * @member {"LOGIN_CS_LOGIN"|"LOGIN_CS_CHOOSE_SERVER"|"LOGIN_CS_GET_SERVER_LIST"|"LOGIN_CS_GET_INFO"|"LOGIN_CS_QUERY"|"CS_TEST_ECHO"|"CS_ROLE_ONLINE"|"CS_ROLE_HEART_BEAT"|"CS_ROLE_CREATE"|"CS_GM_CMD"|"CS_ROLE_CHAT"|undefined} kind
         * @memberof C2S.Message
         * @instance
         */
        Object.defineProperty(Message.prototype, "kind", {
            get: $util.oneOfGetter($oneOfFields = ["LOGIN_CS_LOGIN", "LOGIN_CS_CHOOSE_SERVER", "LOGIN_CS_GET_SERVER_LIST", "LOGIN_CS_GET_INFO", "LOGIN_CS_QUERY", "CS_TEST_ECHO", "CS_ROLE_ONLINE", "CS_ROLE_HEART_BEAT", "CS_ROLE_CREATE", "CS_GM_CMD", "CS_ROLE_CHAT"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Message instance using the specified properties.
         * @function create
         * @memberof C2S.Message
         * @static
         * @param {C2S.IMessage=} [properties] Properties to set
         * @returns {C2S.Message} Message instance
         */
        Message.create = function create(properties) {
            return new Message(properties);
        };

        /**
         * Encodes the specified Message message. Does not implicitly {@link C2S.Message.verify|verify} messages.
         * @function encode
         * @memberof C2S.Message
         * @static
         * @param {C2S.IMessage} message Message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Message.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.CS_TEST_ECHO != null && message.hasOwnProperty("CS_TEST_ECHO"))
                $root.C2S.CS_TEST_ECHO.encode(message.CS_TEST_ECHO, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.LOGIN_CS_LOGIN != null && message.hasOwnProperty("LOGIN_CS_LOGIN"))
                $root.C2S.LOGIN_CS_LOGIN.encode(message.LOGIN_CS_LOGIN, writer.uint32(/* id 1001, wireType 2 =*/8010).fork()).ldelim();
            if (message.LOGIN_CS_CHOOSE_SERVER != null && message.hasOwnProperty("LOGIN_CS_CHOOSE_SERVER"))
                $root.C2S.LOGIN_CS_CHOOSE_SERVER.encode(message.LOGIN_CS_CHOOSE_SERVER, writer.uint32(/* id 1002, wireType 2 =*/8018).fork()).ldelim();
            if (message.LOGIN_CS_GET_SERVER_LIST != null && message.hasOwnProperty("LOGIN_CS_GET_SERVER_LIST"))
                $root.C2S.LOGIN_CS_GET_SERVER_LIST.encode(message.LOGIN_CS_GET_SERVER_LIST, writer.uint32(/* id 1003, wireType 2 =*/8026).fork()).ldelim();
            if (message.LOGIN_CS_GET_INFO != null && message.hasOwnProperty("LOGIN_CS_GET_INFO"))
                $root.C2S.LOGIN_CS_GET_INFO.encode(message.LOGIN_CS_GET_INFO, writer.uint32(/* id 1004, wireType 2 =*/8034).fork()).ldelim();
            if (message.LOGIN_CS_QUERY != null && message.hasOwnProperty("LOGIN_CS_QUERY"))
                $root.C2S.LOGIN_CS_QUERY.encode(message.LOGIN_CS_QUERY, writer.uint32(/* id 1005, wireType 2 =*/8042).fork()).ldelim();
            if (message.CS_ROLE_ONLINE != null && message.hasOwnProperty("CS_ROLE_ONLINE"))
                $root.C2S.CS_ROLE_ONLINE.encode(message.CS_ROLE_ONLINE, writer.uint32(/* id 2001, wireType 2 =*/16010).fork()).ldelim();
            if (message.CS_ROLE_HEART_BEAT != null && message.hasOwnProperty("CS_ROLE_HEART_BEAT"))
                $root.C2S.CS_ROLE_HEART_BEAT.encode(message.CS_ROLE_HEART_BEAT, writer.uint32(/* id 2002, wireType 2 =*/16018).fork()).ldelim();
            if (message.CS_ROLE_CREATE != null && message.hasOwnProperty("CS_ROLE_CREATE"))
                $root.C2S.CS_ROLE_CREATE.encode(message.CS_ROLE_CREATE, writer.uint32(/* id 2003, wireType 2 =*/16026).fork()).ldelim();
            if (message.CS_GM_CMD != null && message.hasOwnProperty("CS_GM_CMD"))
                $root.C2S.CS_GM_CMD.encode(message.CS_GM_CMD, writer.uint32(/* id 2004, wireType 2 =*/16034).fork()).ldelim();
            if (message.CS_ROLE_CHAT != null && message.hasOwnProperty("CS_ROLE_CHAT"))
                $root.C2S.CS_ROLE_CHAT.encode(message.CS_ROLE_CHAT, writer.uint32(/* id 2005, wireType 2 =*/16042).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Message message, length delimited. Does not implicitly {@link C2S.Message.verify|verify} messages.
         * @function encodeDelimited
         * @memberof C2S.Message
         * @static
         * @param {C2S.IMessage} message Message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Message.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Message message from the specified reader or buffer.
         * @function decode
         * @memberof C2S.Message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {C2S.Message} Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Message.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.C2S.Message();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1001:
                    message.LOGIN_CS_LOGIN = $root.C2S.LOGIN_CS_LOGIN.decode(reader, reader.uint32());
                    break;
                case 1002:
                    message.LOGIN_CS_CHOOSE_SERVER = $root.C2S.LOGIN_CS_CHOOSE_SERVER.decode(reader, reader.uint32());
                    break;
                case 1003:
                    message.LOGIN_CS_GET_SERVER_LIST = $root.C2S.LOGIN_CS_GET_SERVER_LIST.decode(reader, reader.uint32());
                    break;
                case 1004:
                    message.LOGIN_CS_GET_INFO = $root.C2S.LOGIN_CS_GET_INFO.decode(reader, reader.uint32());
                    break;
                case 1005:
                    message.LOGIN_CS_QUERY = $root.C2S.LOGIN_CS_QUERY.decode(reader, reader.uint32());
                    break;
                case 1:
                    message.CS_TEST_ECHO = $root.C2S.CS_TEST_ECHO.decode(reader, reader.uint32());
                    break;
                case 2001:
                    message.CS_ROLE_ONLINE = $root.C2S.CS_ROLE_ONLINE.decode(reader, reader.uint32());
                    break;
                case 2002:
                    message.CS_ROLE_HEART_BEAT = $root.C2S.CS_ROLE_HEART_BEAT.decode(reader, reader.uint32());
                    break;
                case 2003:
                    message.CS_ROLE_CREATE = $root.C2S.CS_ROLE_CREATE.decode(reader, reader.uint32());
                    break;
                case 2004:
                    message.CS_GM_CMD = $root.C2S.CS_GM_CMD.decode(reader, reader.uint32());
                    break;
                case 2005:
                    message.CS_ROLE_CHAT = $root.C2S.CS_ROLE_CHAT.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Message message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof C2S.Message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {C2S.Message} Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Message.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Message message.
         * @function verify
         * @memberof C2S.Message
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Message.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.LOGIN_CS_LOGIN != null && message.hasOwnProperty("LOGIN_CS_LOGIN")) {
                properties.kind = 1;
                {
                    var error = $root.C2S.LOGIN_CS_LOGIN.verify(message.LOGIN_CS_LOGIN);
                    if (error)
                        return "LOGIN_CS_LOGIN." + error;
                }
            }
            if (message.LOGIN_CS_CHOOSE_SERVER != null && message.hasOwnProperty("LOGIN_CS_CHOOSE_SERVER")) {
                if (properties.kind === 1)
                    return "kind: multiple values";
                properties.kind = 1;
                {
                    var error = $root.C2S.LOGIN_CS_CHOOSE_SERVER.verify(message.LOGIN_CS_CHOOSE_SERVER);
                    if (error)
                        return "LOGIN_CS_CHOOSE_SERVER." + error;
                }
            }
            if (message.LOGIN_CS_GET_SERVER_LIST != null && message.hasOwnProperty("LOGIN_CS_GET_SERVER_LIST")) {
                if (properties.kind === 1)
                    return "kind: multiple values";
                properties.kind = 1;
                {
                    var error = $root.C2S.LOGIN_CS_GET_SERVER_LIST.verify(message.LOGIN_CS_GET_SERVER_LIST);
                    if (error)
                        return "LOGIN_CS_GET_SERVER_LIST." + error;
                }
            }
            if (message.LOGIN_CS_GET_INFO != null && message.hasOwnProperty("LOGIN_CS_GET_INFO")) {
                if (properties.kind === 1)
                    return "kind: multiple values";
                properties.kind = 1;
                {
                    var error = $root.C2S.LOGIN_CS_GET_INFO.verify(message.LOGIN_CS_GET_INFO);
                    if (error)
                        return "LOGIN_CS_GET_INFO." + error;
                }
            }
            if (message.LOGIN_CS_QUERY != null && message.hasOwnProperty("LOGIN_CS_QUERY")) {
                if (properties.kind === 1)
                    return "kind: multiple values";
                properties.kind = 1;
                {
                    var error = $root.C2S.LOGIN_CS_QUERY.verify(message.LOGIN_CS_QUERY);
                    if (error)
                        return "LOGIN_CS_QUERY." + error;
                }
            }
            if (message.CS_TEST_ECHO != null && message.hasOwnProperty("CS_TEST_ECHO")) {
                if (properties.kind === 1)
                    return "kind: multiple values";
                properties.kind = 1;
                {
                    var error = $root.C2S.CS_TEST_ECHO.verify(message.CS_TEST_ECHO);
                    if (error)
                        return "CS_TEST_ECHO." + error;
                }
            }
            if (message.CS_ROLE_ONLINE != null && message.hasOwnProperty("CS_ROLE_ONLINE")) {
                if (properties.kind === 1)
                    return "kind: multiple values";
                properties.kind = 1;
                {
                    var error = $root.C2S.CS_ROLE_ONLINE.verify(message.CS_ROLE_ONLINE);
                    if (error)
                        return "CS_ROLE_ONLINE." + error;
                }
            }
            if (message.CS_ROLE_HEART_BEAT != null && message.hasOwnProperty("CS_ROLE_HEART_BEAT")) {
                if (properties.kind === 1)
                    return "kind: multiple values";
                properties.kind = 1;
                {
                    var error = $root.C2S.CS_ROLE_HEART_BEAT.verify(message.CS_ROLE_HEART_BEAT);
                    if (error)
                        return "CS_ROLE_HEART_BEAT." + error;
                }
            }
            if (message.CS_ROLE_CREATE != null && message.hasOwnProperty("CS_ROLE_CREATE")) {
                if (properties.kind === 1)
                    return "kind: multiple values";
                properties.kind = 1;
                {
                    var error = $root.C2S.CS_ROLE_CREATE.verify(message.CS_ROLE_CREATE);
                    if (error)
                        return "CS_ROLE_CREATE." + error;
                }
            }
            if (message.CS_GM_CMD != null && message.hasOwnProperty("CS_GM_CMD")) {
                if (properties.kind === 1)
                    return "kind: multiple values";
                properties.kind = 1;
                {
                    var error = $root.C2S.CS_GM_CMD.verify(message.CS_GM_CMD);
                    if (error)
                        return "CS_GM_CMD." + error;
                }
            }
            if (message.CS_ROLE_CHAT != null && message.hasOwnProperty("CS_ROLE_CHAT")) {
                if (properties.kind === 1)
                    return "kind: multiple values";
                properties.kind = 1;
                {
                    var error = $root.C2S.CS_ROLE_CHAT.verify(message.CS_ROLE_CHAT);
                    if (error)
                        return "CS_ROLE_CHAT." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Message message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof C2S.Message
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {C2S.Message} Message
         */
        Message.fromObject = function fromObject(object) {
            if (object instanceof $root.C2S.Message)
                return object;
            var message = new $root.C2S.Message();
            if (object.LOGIN_CS_LOGIN != null) {
                if (typeof object.LOGIN_CS_LOGIN !== "object")
                    throw TypeError(".C2S.Message.LOGIN_CS_LOGIN: object expected");
                message.LOGIN_CS_LOGIN = $root.C2S.LOGIN_CS_LOGIN.fromObject(object.LOGIN_CS_LOGIN);
            }
            if (object.LOGIN_CS_CHOOSE_SERVER != null) {
                if (typeof object.LOGIN_CS_CHOOSE_SERVER !== "object")
                    throw TypeError(".C2S.Message.LOGIN_CS_CHOOSE_SERVER: object expected");
                message.LOGIN_CS_CHOOSE_SERVER = $root.C2S.LOGIN_CS_CHOOSE_SERVER.fromObject(object.LOGIN_CS_CHOOSE_SERVER);
            }
            if (object.LOGIN_CS_GET_SERVER_LIST != null) {
                if (typeof object.LOGIN_CS_GET_SERVER_LIST !== "object")
                    throw TypeError(".C2S.Message.LOGIN_CS_GET_SERVER_LIST: object expected");
                message.LOGIN_CS_GET_SERVER_LIST = $root.C2S.LOGIN_CS_GET_SERVER_LIST.fromObject(object.LOGIN_CS_GET_SERVER_LIST);
            }
            if (object.LOGIN_CS_GET_INFO != null) {
                if (typeof object.LOGIN_CS_GET_INFO !== "object")
                    throw TypeError(".C2S.Message.LOGIN_CS_GET_INFO: object expected");
                message.LOGIN_CS_GET_INFO = $root.C2S.LOGIN_CS_GET_INFO.fromObject(object.LOGIN_CS_GET_INFO);
            }
            if (object.LOGIN_CS_QUERY != null) {
                if (typeof object.LOGIN_CS_QUERY !== "object")
                    throw TypeError(".C2S.Message.LOGIN_CS_QUERY: object expected");
                message.LOGIN_CS_QUERY = $root.C2S.LOGIN_CS_QUERY.fromObject(object.LOGIN_CS_QUERY);
            }
            if (object.CS_TEST_ECHO != null) {
                if (typeof object.CS_TEST_ECHO !== "object")
                    throw TypeError(".C2S.Message.CS_TEST_ECHO: object expected");
                message.CS_TEST_ECHO = $root.C2S.CS_TEST_ECHO.fromObject(object.CS_TEST_ECHO);
            }
            if (object.CS_ROLE_ONLINE != null) {
                if (typeof object.CS_ROLE_ONLINE !== "object")
                    throw TypeError(".C2S.Message.CS_ROLE_ONLINE: object expected");
                message.CS_ROLE_ONLINE = $root.C2S.CS_ROLE_ONLINE.fromObject(object.CS_ROLE_ONLINE);
            }
            if (object.CS_ROLE_HEART_BEAT != null) {
                if (typeof object.CS_ROLE_HEART_BEAT !== "object")
                    throw TypeError(".C2S.Message.CS_ROLE_HEART_BEAT: object expected");
                message.CS_ROLE_HEART_BEAT = $root.C2S.CS_ROLE_HEART_BEAT.fromObject(object.CS_ROLE_HEART_BEAT);
            }
            if (object.CS_ROLE_CREATE != null) {
                if (typeof object.CS_ROLE_CREATE !== "object")
                    throw TypeError(".C2S.Message.CS_ROLE_CREATE: object expected");
                message.CS_ROLE_CREATE = $root.C2S.CS_ROLE_CREATE.fromObject(object.CS_ROLE_CREATE);
            }
            if (object.CS_GM_CMD != null) {
                if (typeof object.CS_GM_CMD !== "object")
                    throw TypeError(".C2S.Message.CS_GM_CMD: object expected");
                message.CS_GM_CMD = $root.C2S.CS_GM_CMD.fromObject(object.CS_GM_CMD);
            }
            if (object.CS_ROLE_CHAT != null) {
                if (typeof object.CS_ROLE_CHAT !== "object")
                    throw TypeError(".C2S.Message.CS_ROLE_CHAT: object expected");
                message.CS_ROLE_CHAT = $root.C2S.CS_ROLE_CHAT.fromObject(object.CS_ROLE_CHAT);
            }
            return message;
        };

        /**
         * Creates a plain object from a Message message. Also converts values to other types if specified.
         * @function toObject
         * @memberof C2S.Message
         * @static
         * @param {C2S.Message} message Message
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Message.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.CS_TEST_ECHO != null && message.hasOwnProperty("CS_TEST_ECHO")) {
                object.CS_TEST_ECHO = $root.C2S.CS_TEST_ECHO.toObject(message.CS_TEST_ECHO, options);
                if (options.oneofs)
                    object.kind = "CS_TEST_ECHO";
            }
            if (message.LOGIN_CS_LOGIN != null && message.hasOwnProperty("LOGIN_CS_LOGIN")) {
                object.LOGIN_CS_LOGIN = $root.C2S.LOGIN_CS_LOGIN.toObject(message.LOGIN_CS_LOGIN, options);
                if (options.oneofs)
                    object.kind = "LOGIN_CS_LOGIN";
            }
            if (message.LOGIN_CS_CHOOSE_SERVER != null && message.hasOwnProperty("LOGIN_CS_CHOOSE_SERVER")) {
                object.LOGIN_CS_CHOOSE_SERVER = $root.C2S.LOGIN_CS_CHOOSE_SERVER.toObject(message.LOGIN_CS_CHOOSE_SERVER, options);
                if (options.oneofs)
                    object.kind = "LOGIN_CS_CHOOSE_SERVER";
            }
            if (message.LOGIN_CS_GET_SERVER_LIST != null && message.hasOwnProperty("LOGIN_CS_GET_SERVER_LIST")) {
                object.LOGIN_CS_GET_SERVER_LIST = $root.C2S.LOGIN_CS_GET_SERVER_LIST.toObject(message.LOGIN_CS_GET_SERVER_LIST, options);
                if (options.oneofs)
                    object.kind = "LOGIN_CS_GET_SERVER_LIST";
            }
            if (message.LOGIN_CS_GET_INFO != null && message.hasOwnProperty("LOGIN_CS_GET_INFO")) {
                object.LOGIN_CS_GET_INFO = $root.C2S.LOGIN_CS_GET_INFO.toObject(message.LOGIN_CS_GET_INFO, options);
                if (options.oneofs)
                    object.kind = "LOGIN_CS_GET_INFO";
            }
            if (message.LOGIN_CS_QUERY != null && message.hasOwnProperty("LOGIN_CS_QUERY")) {
                object.LOGIN_CS_QUERY = $root.C2S.LOGIN_CS_QUERY.toObject(message.LOGIN_CS_QUERY, options);
                if (options.oneofs)
                    object.kind = "LOGIN_CS_QUERY";
            }
            if (message.CS_ROLE_ONLINE != null && message.hasOwnProperty("CS_ROLE_ONLINE")) {
                object.CS_ROLE_ONLINE = $root.C2S.CS_ROLE_ONLINE.toObject(message.CS_ROLE_ONLINE, options);
                if (options.oneofs)
                    object.kind = "CS_ROLE_ONLINE";
            }
            if (message.CS_ROLE_HEART_BEAT != null && message.hasOwnProperty("CS_ROLE_HEART_BEAT")) {
                object.CS_ROLE_HEART_BEAT = $root.C2S.CS_ROLE_HEART_BEAT.toObject(message.CS_ROLE_HEART_BEAT, options);
                if (options.oneofs)
                    object.kind = "CS_ROLE_HEART_BEAT";
            }
            if (message.CS_ROLE_CREATE != null && message.hasOwnProperty("CS_ROLE_CREATE")) {
                object.CS_ROLE_CREATE = $root.C2S.CS_ROLE_CREATE.toObject(message.CS_ROLE_CREATE, options);
                if (options.oneofs)
                    object.kind = "CS_ROLE_CREATE";
            }
            if (message.CS_GM_CMD != null && message.hasOwnProperty("CS_GM_CMD")) {
                object.CS_GM_CMD = $root.C2S.CS_GM_CMD.toObject(message.CS_GM_CMD, options);
                if (options.oneofs)
                    object.kind = "CS_GM_CMD";
            }
            if (message.CS_ROLE_CHAT != null && message.hasOwnProperty("CS_ROLE_CHAT")) {
                object.CS_ROLE_CHAT = $root.C2S.CS_ROLE_CHAT.toObject(message.CS_ROLE_CHAT, options);
                if (options.oneofs)
                    object.kind = "CS_ROLE_CHAT";
            }
            return object;
        };

        /**
         * Converts this Message to JSON.
         * @function toJSON
         * @memberof C2S.Message
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Message.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Message;
    })();

    C2S.CS_TEST_ECHO = (function() {

        /**
         * Properties of a CS_TEST_ECHO.
         * @memberof C2S
         * @interface ICS_TEST_ECHO
         * @property {string|null} [name] CS_TEST_ECHO name
         * @property {string|null} [msg] CS_TEST_ECHO msg
         * @property {number|Long|null} [b] CS_TEST_ECHO b
         * @property {Array.<number>|null} [data] CS_TEST_ECHO data
         * @property {C2S.CS_TEST_ECHO.Color|null} [color] CS_TEST_ECHO color
         * @property {Object.<string,string>|null} [map] CS_TEST_ECHO map
         */

        /**
         * Constructs a new CS_TEST_ECHO.
         * @memberof C2S
         * @classdesc you must name the message in the following format: [PACKAGE_NAME]_[CONTROLLER_NAME]_[METHOD_NAME]*
         * @implements ICS_TEST_ECHO
         * @constructor
         * @param {C2S.ICS_TEST_ECHO=} [properties] Properties to set
         */
        function CS_TEST_ECHO(properties) {
            this.data = [];
            this.map = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CS_TEST_ECHO name.
         * @member {string} name
         * @memberof C2S.CS_TEST_ECHO
         * @instance
         */
        CS_TEST_ECHO.prototype.name = "";

        /**
         * CS_TEST_ECHO msg.
         * @member {string} msg
         * @memberof C2S.CS_TEST_ECHO
         * @instance
         */
        CS_TEST_ECHO.prototype.msg = "";

        /**
         * CS_TEST_ECHO b.
         * @member {number|Long} b
         * @memberof C2S.CS_TEST_ECHO
         * @instance
         */
        CS_TEST_ECHO.prototype.b = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CS_TEST_ECHO data.
         * @member {Array.<number>} data
         * @memberof C2S.CS_TEST_ECHO
         * @instance
         */
        CS_TEST_ECHO.prototype.data = $util.emptyArray;

        /**
         * CS_TEST_ECHO color.
         * @member {C2S.CS_TEST_ECHO.Color} color
         * @memberof C2S.CS_TEST_ECHO
         * @instance
         */
        CS_TEST_ECHO.prototype.color = 0;

        /**
         * CS_TEST_ECHO map.
         * @member {Object.<string,string>} map
         * @memberof C2S.CS_TEST_ECHO
         * @instance
         */
        CS_TEST_ECHO.prototype.map = $util.emptyObject;

        /**
         * Creates a new CS_TEST_ECHO instance using the specified properties.
         * @function create
         * @memberof C2S.CS_TEST_ECHO
         * @static
         * @param {C2S.ICS_TEST_ECHO=} [properties] Properties to set
         * @returns {C2S.CS_TEST_ECHO} CS_TEST_ECHO instance
         */
        CS_TEST_ECHO.create = function create(properties) {
            return new CS_TEST_ECHO(properties);
        };

        /**
         * Encodes the specified CS_TEST_ECHO message. Does not implicitly {@link C2S.CS_TEST_ECHO.verify|verify} messages.
         * @function encode
         * @memberof C2S.CS_TEST_ECHO
         * @static
         * @param {C2S.ICS_TEST_ECHO} message CS_TEST_ECHO message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CS_TEST_ECHO.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.msg != null && message.hasOwnProperty("msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            if (message.b != null && message.hasOwnProperty("b"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.b);
            if (message.data != null && message.data.length) {
                writer.uint32(/* id 4, wireType 2 =*/34).fork();
                for (var i = 0; i < message.data.length; ++i)
                    writer.int32(message.data[i]);
                writer.ldelim();
            }
            if (message.color != null && message.hasOwnProperty("color"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.color);
            if (message.map != null && message.hasOwnProperty("map"))
                for (var keys = Object.keys(message.map), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 6, wireType 2 =*/50).fork().uint32(/* id 1, wireType 0 =*/8).uint64(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.map[keys[i]]).ldelim();
            return writer;
        };

        /**
         * Encodes the specified CS_TEST_ECHO message, length delimited. Does not implicitly {@link C2S.CS_TEST_ECHO.verify|verify} messages.
         * @function encodeDelimited
         * @memberof C2S.CS_TEST_ECHO
         * @static
         * @param {C2S.ICS_TEST_ECHO} message CS_TEST_ECHO message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CS_TEST_ECHO.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CS_TEST_ECHO message from the specified reader or buffer.
         * @function decode
         * @memberof C2S.CS_TEST_ECHO
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {C2S.CS_TEST_ECHO} CS_TEST_ECHO
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CS_TEST_ECHO.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.C2S.CS_TEST_ECHO(), key;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.msg = reader.string();
                    break;
                case 3:
                    message.b = reader.int64();
                    break;
                case 4:
                    if (!(message.data && message.data.length))
                        message.data = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.data.push(reader.int32());
                    } else
                        message.data.push(reader.int32());
                    break;
                case 5:
                    message.color = reader.int32();
                    break;
                case 6:
                    reader.skip().pos++;
                    if (message.map === $util.emptyObject)
                        message.map = {};
                    key = reader.uint64();
                    reader.pos++;
                    message.map[typeof key === "object" ? $util.longToHash(key) : key] = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CS_TEST_ECHO message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof C2S.CS_TEST_ECHO
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {C2S.CS_TEST_ECHO} CS_TEST_ECHO
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CS_TEST_ECHO.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CS_TEST_ECHO message.
         * @function verify
         * @memberof C2S.CS_TEST_ECHO
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CS_TEST_ECHO.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            if (message.b != null && message.hasOwnProperty("b"))
                if (!$util.isInteger(message.b) && !(message.b && $util.isInteger(message.b.low) && $util.isInteger(message.b.high)))
                    return "b: integer|Long expected";
            if (message.data != null && message.hasOwnProperty("data")) {
                if (!Array.isArray(message.data))
                    return "data: array expected";
                for (var i = 0; i < message.data.length; ++i)
                    if (!$util.isInteger(message.data[i]))
                        return "data: integer[] expected";
            }
            if (message.color != null && message.hasOwnProperty("color"))
                switch (message.color) {
                default:
                    return "color: enum value expected";
                case 0:
                case 1:
                case 1:
                    break;
                }
            if (message.map != null && message.hasOwnProperty("map")) {
                if (!$util.isObject(message.map))
                    return "map: object expected";
                var key = Object.keys(message.map);
                for (var i = 0; i < key.length; ++i) {
                    if (!$util.key64Re.test(key[i]))
                        return "map: integer|Long key{k:uint64} expected";
                    if (!$util.isString(message.map[key[i]]))
                        return "map: string{k:uint64} expected";
                }
            }
            return null;
        };

        /**
         * Creates a CS_TEST_ECHO message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof C2S.CS_TEST_ECHO
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {C2S.CS_TEST_ECHO} CS_TEST_ECHO
         */
        CS_TEST_ECHO.fromObject = function fromObject(object) {
            if (object instanceof $root.C2S.CS_TEST_ECHO)
                return object;
            var message = new $root.C2S.CS_TEST_ECHO();
            if (object.name != null)
                message.name = String(object.name);
            if (object.msg != null)
                message.msg = String(object.msg);
            if (object.b != null)
                if ($util.Long)
                    (message.b = $util.Long.fromValue(object.b)).unsigned = false;
                else if (typeof object.b === "string")
                    message.b = parseInt(object.b, 10);
                else if (typeof object.b === "number")
                    message.b = object.b;
                else if (typeof object.b === "object")
                    message.b = new $util.LongBits(object.b.low >>> 0, object.b.high >>> 0).toNumber();
            if (object.data) {
                if (!Array.isArray(object.data))
                    throw TypeError(".C2S.CS_TEST_ECHO.data: array expected");
                message.data = [];
                for (var i = 0; i < object.data.length; ++i)
                    message.data[i] = object.data[i] | 0;
            }
            switch (object.color) {
            case "RED":
            case 0:
                message.color = 0;
                break;
            case "BLUE":
            case 1:
                message.color = 1;
                break;
            case "YELLOW":
            case 1:
                message.color = 1;
                break;
            }
            if (object.map) {
                if (typeof object.map !== "object")
                    throw TypeError(".C2S.CS_TEST_ECHO.map: object expected");
                message.map = {};
                for (var keys = Object.keys(object.map), i = 0; i < keys.length; ++i)
                    message.map[keys[i]] = String(object.map[keys[i]]);
            }
            return message;
        };

        /**
         * Creates a plain object from a CS_TEST_ECHO message. Also converts values to other types if specified.
         * @function toObject
         * @memberof C2S.CS_TEST_ECHO
         * @static
         * @param {C2S.CS_TEST_ECHO} message CS_TEST_ECHO
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CS_TEST_ECHO.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.data = [];
            if (options.objects || options.defaults)
                object.map = {};
            if (options.defaults) {
                object.name = "";
                object.msg = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.b = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.b = options.longs === String ? "0" : 0;
                object.color = options.enums === String ? "RED" : 0;
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            if (message.b != null && message.hasOwnProperty("b"))
                if (typeof message.b === "number")
                    object.b = options.longs === String ? String(message.b) : message.b;
                else
                    object.b = options.longs === String ? $util.Long.prototype.toString.call(message.b) : options.longs === Number ? new $util.LongBits(message.b.low >>> 0, message.b.high >>> 0).toNumber() : message.b;
            if (message.data && message.data.length) {
                object.data = [];
                for (var j = 0; j < message.data.length; ++j)
                    object.data[j] = message.data[j];
            }
            if (message.color != null && message.hasOwnProperty("color"))
                object.color = options.enums === String ? $root.C2S.CS_TEST_ECHO.Color[message.color] : message.color;
            var keys2;
            if (message.map && (keys2 = Object.keys(message.map)).length) {
                object.map = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.map[keys2[j]] = message.map[keys2[j]];
            }
            return object;
        };

        /**
         * Converts this CS_TEST_ECHO to JSON.
         * @function toJSON
         * @memberof C2S.CS_TEST_ECHO
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CS_TEST_ECHO.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Color enum.
         * @name C2S.CS_TEST_ECHO.Color
         * @enum {string}
         * @property {number} RED=0 RED value
         * @property {number} BLUE=1 BLUE value
         * @property {number} YELLOW=1 YELLOW value
         */
        CS_TEST_ECHO.Color = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "RED"] = 0;
            values[valuesById[1] = "BLUE"] = 1;
            values["YELLOW"] = 1;
            return values;
        })();

        return CS_TEST_ECHO;
    })();

    C2S.CS_ROLE_HEART_BEAT = (function() {

        /**
         * Properties of a CS_ROLE_HEART_BEAT.
         * @memberof C2S
         * @interface ICS_ROLE_HEART_BEAT
         * @property {string|null} [msg] CS_ROLE_HEART_BEAT msg
         */

        /**
         * Constructs a new CS_ROLE_HEART_BEAT.
         * @memberof C2S
         * @classdesc Represents a CS_ROLE_HEART_BEAT.
         * @implements ICS_ROLE_HEART_BEAT
         * @constructor
         * @param {C2S.ICS_ROLE_HEART_BEAT=} [properties] Properties to set
         */
        function CS_ROLE_HEART_BEAT(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CS_ROLE_HEART_BEAT msg.
         * @member {string} msg
         * @memberof C2S.CS_ROLE_HEART_BEAT
         * @instance
         */
        CS_ROLE_HEART_BEAT.prototype.msg = "";

        /**
         * Creates a new CS_ROLE_HEART_BEAT instance using the specified properties.
         * @function create
         * @memberof C2S.CS_ROLE_HEART_BEAT
         * @static
         * @param {C2S.ICS_ROLE_HEART_BEAT=} [properties] Properties to set
         * @returns {C2S.CS_ROLE_HEART_BEAT} CS_ROLE_HEART_BEAT instance
         */
        CS_ROLE_HEART_BEAT.create = function create(properties) {
            return new CS_ROLE_HEART_BEAT(properties);
        };

        /**
         * Encodes the specified CS_ROLE_HEART_BEAT message. Does not implicitly {@link C2S.CS_ROLE_HEART_BEAT.verify|verify} messages.
         * @function encode
         * @memberof C2S.CS_ROLE_HEART_BEAT
         * @static
         * @param {C2S.ICS_ROLE_HEART_BEAT} message CS_ROLE_HEART_BEAT message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CS_ROLE_HEART_BEAT.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.msg != null && message.hasOwnProperty("msg"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.msg);
            return writer;
        };

        /**
         * Encodes the specified CS_ROLE_HEART_BEAT message, length delimited. Does not implicitly {@link C2S.CS_ROLE_HEART_BEAT.verify|verify} messages.
         * @function encodeDelimited
         * @memberof C2S.CS_ROLE_HEART_BEAT
         * @static
         * @param {C2S.ICS_ROLE_HEART_BEAT} message CS_ROLE_HEART_BEAT message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CS_ROLE_HEART_BEAT.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CS_ROLE_HEART_BEAT message from the specified reader or buffer.
         * @function decode
         * @memberof C2S.CS_ROLE_HEART_BEAT
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {C2S.CS_ROLE_HEART_BEAT} CS_ROLE_HEART_BEAT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CS_ROLE_HEART_BEAT.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.C2S.CS_ROLE_HEART_BEAT();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.msg = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CS_ROLE_HEART_BEAT message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof C2S.CS_ROLE_HEART_BEAT
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {C2S.CS_ROLE_HEART_BEAT} CS_ROLE_HEART_BEAT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CS_ROLE_HEART_BEAT.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CS_ROLE_HEART_BEAT message.
         * @function verify
         * @memberof C2S.CS_ROLE_HEART_BEAT
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CS_ROLE_HEART_BEAT.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            return null;
        };

        /**
         * Creates a CS_ROLE_HEART_BEAT message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof C2S.CS_ROLE_HEART_BEAT
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {C2S.CS_ROLE_HEART_BEAT} CS_ROLE_HEART_BEAT
         */
        CS_ROLE_HEART_BEAT.fromObject = function fromObject(object) {
            if (object instanceof $root.C2S.CS_ROLE_HEART_BEAT)
                return object;
            var message = new $root.C2S.CS_ROLE_HEART_BEAT();
            if (object.msg != null)
                message.msg = String(object.msg);
            return message;
        };

        /**
         * Creates a plain object from a CS_ROLE_HEART_BEAT message. Also converts values to other types if specified.
         * @function toObject
         * @memberof C2S.CS_ROLE_HEART_BEAT
         * @static
         * @param {C2S.CS_ROLE_HEART_BEAT} message CS_ROLE_HEART_BEAT
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CS_ROLE_HEART_BEAT.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.msg = "";
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            return object;
        };

        /**
         * Converts this CS_ROLE_HEART_BEAT to JSON.
         * @function toJSON
         * @memberof C2S.CS_ROLE_HEART_BEAT
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CS_ROLE_HEART_BEAT.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CS_ROLE_HEART_BEAT;
    })();

    C2S.CS_ROLE_ONLINE = (function() {

        /**
         * Properties of a CS_ROLE_ONLINE.
         * @memberof C2S
         * @interface ICS_ROLE_ONLINE
         * @property {string|null} [token] CS_ROLE_ONLINE token
         * @property {number|null} [uid] CS_ROLE_ONLINE uid
         * @property {string|null} [device] CS_ROLE_ONLINE device
         * @property {string|null} [deviceType] CS_ROLE_ONLINE deviceType
         * @property {number|null} [inviter] CS_ROLE_ONLINE inviter
         */

        /**
         * Constructs a new CS_ROLE_ONLINE.
         * @memberof C2S
         * @classdesc Represents a CS_ROLE_ONLINE.
         * @implements ICS_ROLE_ONLINE
         * @constructor
         * @param {C2S.ICS_ROLE_ONLINE=} [properties] Properties to set
         */
        function CS_ROLE_ONLINE(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CS_ROLE_ONLINE token.
         * @member {string} token
         * @memberof C2S.CS_ROLE_ONLINE
         * @instance
         */
        CS_ROLE_ONLINE.prototype.token = "";

        /**
         * CS_ROLE_ONLINE uid.
         * @member {number} uid
         * @memberof C2S.CS_ROLE_ONLINE
         * @instance
         */
        CS_ROLE_ONLINE.prototype.uid = 0;

        /**
         * CS_ROLE_ONLINE device.
         * @member {string} device
         * @memberof C2S.CS_ROLE_ONLINE
         * @instance
         */
        CS_ROLE_ONLINE.prototype.device = "";

        /**
         * CS_ROLE_ONLINE deviceType.
         * @member {string} deviceType
         * @memberof C2S.CS_ROLE_ONLINE
         * @instance
         */
        CS_ROLE_ONLINE.prototype.deviceType = "";

        /**
         * CS_ROLE_ONLINE inviter.
         * @member {number} inviter
         * @memberof C2S.CS_ROLE_ONLINE
         * @instance
         */
        CS_ROLE_ONLINE.prototype.inviter = 0;

        /**
         * Creates a new CS_ROLE_ONLINE instance using the specified properties.
         * @function create
         * @memberof C2S.CS_ROLE_ONLINE
         * @static
         * @param {C2S.ICS_ROLE_ONLINE=} [properties] Properties to set
         * @returns {C2S.CS_ROLE_ONLINE} CS_ROLE_ONLINE instance
         */
        CS_ROLE_ONLINE.create = function create(properties) {
            return new CS_ROLE_ONLINE(properties);
        };

        /**
         * Encodes the specified CS_ROLE_ONLINE message. Does not implicitly {@link C2S.CS_ROLE_ONLINE.verify|verify} messages.
         * @function encode
         * @memberof C2S.CS_ROLE_ONLINE
         * @static
         * @param {C2S.ICS_ROLE_ONLINE} message CS_ROLE_ONLINE message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CS_ROLE_ONLINE.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.token != null && message.hasOwnProperty("token"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.token);
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.uid);
            if (message.device != null && message.hasOwnProperty("device"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.device);
            if (message.deviceType != null && message.hasOwnProperty("deviceType"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.deviceType);
            if (message.inviter != null && message.hasOwnProperty("inviter"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.inviter);
            return writer;
        };

        /**
         * Encodes the specified CS_ROLE_ONLINE message, length delimited. Does not implicitly {@link C2S.CS_ROLE_ONLINE.verify|verify} messages.
         * @function encodeDelimited
         * @memberof C2S.CS_ROLE_ONLINE
         * @static
         * @param {C2S.ICS_ROLE_ONLINE} message CS_ROLE_ONLINE message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CS_ROLE_ONLINE.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CS_ROLE_ONLINE message from the specified reader or buffer.
         * @function decode
         * @memberof C2S.CS_ROLE_ONLINE
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {C2S.CS_ROLE_ONLINE} CS_ROLE_ONLINE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CS_ROLE_ONLINE.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.C2S.CS_ROLE_ONLINE();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.token = reader.string();
                    break;
                case 2:
                    message.uid = reader.uint32();
                    break;
                case 3:
                    message.device = reader.string();
                    break;
                case 4:
                    message.deviceType = reader.string();
                    break;
                case 5:
                    message.inviter = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CS_ROLE_ONLINE message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof C2S.CS_ROLE_ONLINE
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {C2S.CS_ROLE_ONLINE} CS_ROLE_ONLINE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CS_ROLE_ONLINE.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CS_ROLE_ONLINE message.
         * @function verify
         * @memberof C2S.CS_ROLE_ONLINE
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CS_ROLE_ONLINE.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.token != null && message.hasOwnProperty("token"))
                if (!$util.isString(message.token))
                    return "token: string expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid))
                    return "uid: integer expected";
            if (message.device != null && message.hasOwnProperty("device"))
                if (!$util.isString(message.device))
                    return "device: string expected";
            if (message.deviceType != null && message.hasOwnProperty("deviceType"))
                if (!$util.isString(message.deviceType))
                    return "deviceType: string expected";
            if (message.inviter != null && message.hasOwnProperty("inviter"))
                if (!$util.isInteger(message.inviter))
                    return "inviter: integer expected";
            return null;
        };

        /**
         * Creates a CS_ROLE_ONLINE message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof C2S.CS_ROLE_ONLINE
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {C2S.CS_ROLE_ONLINE} CS_ROLE_ONLINE
         */
        CS_ROLE_ONLINE.fromObject = function fromObject(object) {
            if (object instanceof $root.C2S.CS_ROLE_ONLINE)
                return object;
            var message = new $root.C2S.CS_ROLE_ONLINE();
            if (object.token != null)
                message.token = String(object.token);
            if (object.uid != null)
                message.uid = object.uid >>> 0;
            if (object.device != null)
                message.device = String(object.device);
            if (object.deviceType != null)
                message.deviceType = String(object.deviceType);
            if (object.inviter != null)
                message.inviter = object.inviter >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a CS_ROLE_ONLINE message. Also converts values to other types if specified.
         * @function toObject
         * @memberof C2S.CS_ROLE_ONLINE
         * @static
         * @param {C2S.CS_ROLE_ONLINE} message CS_ROLE_ONLINE
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CS_ROLE_ONLINE.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.token = "";
                object.uid = 0;
                object.device = "";
                object.deviceType = "";
                object.inviter = 0;
            }
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = message.token;
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            if (message.device != null && message.hasOwnProperty("device"))
                object.device = message.device;
            if (message.deviceType != null && message.hasOwnProperty("deviceType"))
                object.deviceType = message.deviceType;
            if (message.inviter != null && message.hasOwnProperty("inviter"))
                object.inviter = message.inviter;
            return object;
        };

        /**
         * Converts this CS_ROLE_ONLINE to JSON.
         * @function toJSON
         * @memberof C2S.CS_ROLE_ONLINE
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CS_ROLE_ONLINE.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CS_ROLE_ONLINE;
    })();

    C2S.LOGIN_CS_LOGIN = (function() {

        /**
         * Properties of a LOGIN_CS_LOGIN.
         * @memberof C2S
         * @interface ILOGIN_CS_LOGIN
         * @property {string|null} [passport] LOGIN_CS_LOGIN passport
         * @property {string|null} [pwd] LOGIN_CS_LOGIN pwd
         * @property {string|null} [device] LOGIN_CS_LOGIN device
         * @property {string|null} [deviceUid] LOGIN_CS_LOGIN deviceUid
         * @property {string|null} [deviceType] LOGIN_CS_LOGIN deviceType
         * @property {string|null} [deviceToken] LOGIN_CS_LOGIN deviceToken
         * @property {number|null} [platform] LOGIN_CS_LOGIN platform
         */

        /**
         * Constructs a new LOGIN_CS_LOGIN.
         * @memberof C2S
         * @classdesc Represents a LOGIN_CS_LOGIN.
         * @implements ILOGIN_CS_LOGIN
         * @constructor
         * @param {C2S.ILOGIN_CS_LOGIN=} [properties] Properties to set
         */
        function LOGIN_CS_LOGIN(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LOGIN_CS_LOGIN passport.
         * @member {string} passport
         * @memberof C2S.LOGIN_CS_LOGIN
         * @instance
         */
        LOGIN_CS_LOGIN.prototype.passport = "";

        /**
         * LOGIN_CS_LOGIN pwd.
         * @member {string} pwd
         * @memberof C2S.LOGIN_CS_LOGIN
         * @instance
         */
        LOGIN_CS_LOGIN.prototype.pwd = "";

        /**
         * LOGIN_CS_LOGIN device.
         * @member {string} device
         * @memberof C2S.LOGIN_CS_LOGIN
         * @instance
         */
        LOGIN_CS_LOGIN.prototype.device = "";

        /**
         * LOGIN_CS_LOGIN deviceUid.
         * @member {string} deviceUid
         * @memberof C2S.LOGIN_CS_LOGIN
         * @instance
         */
        LOGIN_CS_LOGIN.prototype.deviceUid = "";

        /**
         * LOGIN_CS_LOGIN deviceType.
         * @member {string} deviceType
         * @memberof C2S.LOGIN_CS_LOGIN
         * @instance
         */
        LOGIN_CS_LOGIN.prototype.deviceType = "";

        /**
         * LOGIN_CS_LOGIN deviceToken.
         * @member {string} deviceToken
         * @memberof C2S.LOGIN_CS_LOGIN
         * @instance
         */
        LOGIN_CS_LOGIN.prototype.deviceToken = "";

        /**
         * LOGIN_CS_LOGIN platform.
         * @member {number} platform
         * @memberof C2S.LOGIN_CS_LOGIN
         * @instance
         */
        LOGIN_CS_LOGIN.prototype.platform = 0;

        /**
         * Creates a new LOGIN_CS_LOGIN instance using the specified properties.
         * @function create
         * @memberof C2S.LOGIN_CS_LOGIN
         * @static
         * @param {C2S.ILOGIN_CS_LOGIN=} [properties] Properties to set
         * @returns {C2S.LOGIN_CS_LOGIN} LOGIN_CS_LOGIN instance
         */
        LOGIN_CS_LOGIN.create = function create(properties) {
            return new LOGIN_CS_LOGIN(properties);
        };

        /**
         * Encodes the specified LOGIN_CS_LOGIN message. Does not implicitly {@link C2S.LOGIN_CS_LOGIN.verify|verify} messages.
         * @function encode
         * @memberof C2S.LOGIN_CS_LOGIN
         * @static
         * @param {C2S.ILOGIN_CS_LOGIN} message LOGIN_CS_LOGIN message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LOGIN_CS_LOGIN.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.passport != null && message.hasOwnProperty("passport"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.passport);
            if (message.pwd != null && message.hasOwnProperty("pwd"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.pwd);
            if (message.device != null && message.hasOwnProperty("device"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.device);
            if (message.deviceUid != null && message.hasOwnProperty("deviceUid"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.deviceUid);
            if (message.deviceType != null && message.hasOwnProperty("deviceType"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.deviceType);
            if (message.deviceToken != null && message.hasOwnProperty("deviceToken"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.deviceToken);
            if (message.platform != null && message.hasOwnProperty("platform"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.platform);
            return writer;
        };

        /**
         * Encodes the specified LOGIN_CS_LOGIN message, length delimited. Does not implicitly {@link C2S.LOGIN_CS_LOGIN.verify|verify} messages.
         * @function encodeDelimited
         * @memberof C2S.LOGIN_CS_LOGIN
         * @static
         * @param {C2S.ILOGIN_CS_LOGIN} message LOGIN_CS_LOGIN message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LOGIN_CS_LOGIN.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LOGIN_CS_LOGIN message from the specified reader or buffer.
         * @function decode
         * @memberof C2S.LOGIN_CS_LOGIN
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {C2S.LOGIN_CS_LOGIN} LOGIN_CS_LOGIN
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LOGIN_CS_LOGIN.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.C2S.LOGIN_CS_LOGIN();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.passport = reader.string();
                    break;
                case 2:
                    message.pwd = reader.string();
                    break;
                case 3:
                    message.device = reader.string();
                    break;
                case 4:
                    message.deviceUid = reader.string();
                    break;
                case 5:
                    message.deviceType = reader.string();
                    break;
                case 6:
                    message.deviceToken = reader.string();
                    break;
                case 7:
                    message.platform = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LOGIN_CS_LOGIN message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof C2S.LOGIN_CS_LOGIN
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {C2S.LOGIN_CS_LOGIN} LOGIN_CS_LOGIN
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LOGIN_CS_LOGIN.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LOGIN_CS_LOGIN message.
         * @function verify
         * @memberof C2S.LOGIN_CS_LOGIN
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LOGIN_CS_LOGIN.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.passport != null && message.hasOwnProperty("passport"))
                if (!$util.isString(message.passport))
                    return "passport: string expected";
            if (message.pwd != null && message.hasOwnProperty("pwd"))
                if (!$util.isString(message.pwd))
                    return "pwd: string expected";
            if (message.device != null && message.hasOwnProperty("device"))
                if (!$util.isString(message.device))
                    return "device: string expected";
            if (message.deviceUid != null && message.hasOwnProperty("deviceUid"))
                if (!$util.isString(message.deviceUid))
                    return "deviceUid: string expected";
            if (message.deviceType != null && message.hasOwnProperty("deviceType"))
                if (!$util.isString(message.deviceType))
                    return "deviceType: string expected";
            if (message.deviceToken != null && message.hasOwnProperty("deviceToken"))
                if (!$util.isString(message.deviceToken))
                    return "deviceToken: string expected";
            if (message.platform != null && message.hasOwnProperty("platform"))
                if (!$util.isInteger(message.platform))
                    return "platform: integer expected";
            return null;
        };

        /**
         * Creates a LOGIN_CS_LOGIN message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof C2S.LOGIN_CS_LOGIN
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {C2S.LOGIN_CS_LOGIN} LOGIN_CS_LOGIN
         */
        LOGIN_CS_LOGIN.fromObject = function fromObject(object) {
            if (object instanceof $root.C2S.LOGIN_CS_LOGIN)
                return object;
            var message = new $root.C2S.LOGIN_CS_LOGIN();
            if (object.passport != null)
                message.passport = String(object.passport);
            if (object.pwd != null)
                message.pwd = String(object.pwd);
            if (object.device != null)
                message.device = String(object.device);
            if (object.deviceUid != null)
                message.deviceUid = String(object.deviceUid);
            if (object.deviceType != null)
                message.deviceType = String(object.deviceType);
            if (object.deviceToken != null)
                message.deviceToken = String(object.deviceToken);
            if (object.platform != null)
                message.platform = object.platform >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a LOGIN_CS_LOGIN message. Also converts values to other types if specified.
         * @function toObject
         * @memberof C2S.LOGIN_CS_LOGIN
         * @static
         * @param {C2S.LOGIN_CS_LOGIN} message LOGIN_CS_LOGIN
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LOGIN_CS_LOGIN.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.passport = "";
                object.pwd = "";
                object.device = "";
                object.deviceUid = "";
                object.deviceType = "";
                object.deviceToken = "";
                object.platform = 0;
            }
            if (message.passport != null && message.hasOwnProperty("passport"))
                object.passport = message.passport;
            if (message.pwd != null && message.hasOwnProperty("pwd"))
                object.pwd = message.pwd;
            if (message.device != null && message.hasOwnProperty("device"))
                object.device = message.device;
            if (message.deviceUid != null && message.hasOwnProperty("deviceUid"))
                object.deviceUid = message.deviceUid;
            if (message.deviceType != null && message.hasOwnProperty("deviceType"))
                object.deviceType = message.deviceType;
            if (message.deviceToken != null && message.hasOwnProperty("deviceToken"))
                object.deviceToken = message.deviceToken;
            if (message.platform != null && message.hasOwnProperty("platform"))
                object.platform = message.platform;
            return object;
        };

        /**
         * Converts this LOGIN_CS_LOGIN to JSON.
         * @function toJSON
         * @memberof C2S.LOGIN_CS_LOGIN
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LOGIN_CS_LOGIN.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LOGIN_CS_LOGIN;
    })();

    C2S.LOGIN_CS_CHOOSE_SERVER = (function() {

        /**
         * Properties of a LOGIN_CS_CHOOSE_SERVER.
         * @memberof C2S
         * @interface ILOGIN_CS_CHOOSE_SERVER
         * @property {number|null} [serverId] LOGIN_CS_CHOOSE_SERVER serverId
         */

        /**
         * Constructs a new LOGIN_CS_CHOOSE_SERVER.
         * @memberof C2S
         * @classdesc Represents a LOGIN_CS_CHOOSE_SERVER.
         * @implements ILOGIN_CS_CHOOSE_SERVER
         * @constructor
         * @param {C2S.ILOGIN_CS_CHOOSE_SERVER=} [properties] Properties to set
         */
        function LOGIN_CS_CHOOSE_SERVER(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LOGIN_CS_CHOOSE_SERVER serverId.
         * @member {number} serverId
         * @memberof C2S.LOGIN_CS_CHOOSE_SERVER
         * @instance
         */
        LOGIN_CS_CHOOSE_SERVER.prototype.serverId = 0;

        /**
         * Creates a new LOGIN_CS_CHOOSE_SERVER instance using the specified properties.
         * @function create
         * @memberof C2S.LOGIN_CS_CHOOSE_SERVER
         * @static
         * @param {C2S.ILOGIN_CS_CHOOSE_SERVER=} [properties] Properties to set
         * @returns {C2S.LOGIN_CS_CHOOSE_SERVER} LOGIN_CS_CHOOSE_SERVER instance
         */
        LOGIN_CS_CHOOSE_SERVER.create = function create(properties) {
            return new LOGIN_CS_CHOOSE_SERVER(properties);
        };

        /**
         * Encodes the specified LOGIN_CS_CHOOSE_SERVER message. Does not implicitly {@link C2S.LOGIN_CS_CHOOSE_SERVER.verify|verify} messages.
         * @function encode
         * @memberof C2S.LOGIN_CS_CHOOSE_SERVER
         * @static
         * @param {C2S.ILOGIN_CS_CHOOSE_SERVER} message LOGIN_CS_CHOOSE_SERVER message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LOGIN_CS_CHOOSE_SERVER.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.serverId != null && message.hasOwnProperty("serverId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.serverId);
            return writer;
        };

        /**
         * Encodes the specified LOGIN_CS_CHOOSE_SERVER message, length delimited. Does not implicitly {@link C2S.LOGIN_CS_CHOOSE_SERVER.verify|verify} messages.
         * @function encodeDelimited
         * @memberof C2S.LOGIN_CS_CHOOSE_SERVER
         * @static
         * @param {C2S.ILOGIN_CS_CHOOSE_SERVER} message LOGIN_CS_CHOOSE_SERVER message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LOGIN_CS_CHOOSE_SERVER.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LOGIN_CS_CHOOSE_SERVER message from the specified reader or buffer.
         * @function decode
         * @memberof C2S.LOGIN_CS_CHOOSE_SERVER
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {C2S.LOGIN_CS_CHOOSE_SERVER} LOGIN_CS_CHOOSE_SERVER
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LOGIN_CS_CHOOSE_SERVER.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.C2S.LOGIN_CS_CHOOSE_SERVER();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.serverId = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LOGIN_CS_CHOOSE_SERVER message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof C2S.LOGIN_CS_CHOOSE_SERVER
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {C2S.LOGIN_CS_CHOOSE_SERVER} LOGIN_CS_CHOOSE_SERVER
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LOGIN_CS_CHOOSE_SERVER.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LOGIN_CS_CHOOSE_SERVER message.
         * @function verify
         * @memberof C2S.LOGIN_CS_CHOOSE_SERVER
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LOGIN_CS_CHOOSE_SERVER.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.serverId != null && message.hasOwnProperty("serverId"))
                if (!$util.isInteger(message.serverId))
                    return "serverId: integer expected";
            return null;
        };

        /**
         * Creates a LOGIN_CS_CHOOSE_SERVER message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof C2S.LOGIN_CS_CHOOSE_SERVER
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {C2S.LOGIN_CS_CHOOSE_SERVER} LOGIN_CS_CHOOSE_SERVER
         */
        LOGIN_CS_CHOOSE_SERVER.fromObject = function fromObject(object) {
            if (object instanceof $root.C2S.LOGIN_CS_CHOOSE_SERVER)
                return object;
            var message = new $root.C2S.LOGIN_CS_CHOOSE_SERVER();
            if (object.serverId != null)
                message.serverId = object.serverId >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a LOGIN_CS_CHOOSE_SERVER message. Also converts values to other types if specified.
         * @function toObject
         * @memberof C2S.LOGIN_CS_CHOOSE_SERVER
         * @static
         * @param {C2S.LOGIN_CS_CHOOSE_SERVER} message LOGIN_CS_CHOOSE_SERVER
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LOGIN_CS_CHOOSE_SERVER.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.serverId = 0;
            if (message.serverId != null && message.hasOwnProperty("serverId"))
                object.serverId = message.serverId;
            return object;
        };

        /**
         * Converts this LOGIN_CS_CHOOSE_SERVER to JSON.
         * @function toJSON
         * @memberof C2S.LOGIN_CS_CHOOSE_SERVER
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LOGIN_CS_CHOOSE_SERVER.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LOGIN_CS_CHOOSE_SERVER;
    })();

    C2S.LOGIN_CS_GET_SERVER_LIST = (function() {

        /**
         * Properties of a LOGIN_CS_GET_SERVER_LIST.
         * @memberof C2S
         * @interface ILOGIN_CS_GET_SERVER_LIST
         */

        /**
         * Constructs a new LOGIN_CS_GET_SERVER_LIST.
         * @memberof C2S
         * @classdesc Represents a LOGIN_CS_GET_SERVER_LIST.
         * @implements ILOGIN_CS_GET_SERVER_LIST
         * @constructor
         * @param {C2S.ILOGIN_CS_GET_SERVER_LIST=} [properties] Properties to set
         */
        function LOGIN_CS_GET_SERVER_LIST(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new LOGIN_CS_GET_SERVER_LIST instance using the specified properties.
         * @function create
         * @memberof C2S.LOGIN_CS_GET_SERVER_LIST
         * @static
         * @param {C2S.ILOGIN_CS_GET_SERVER_LIST=} [properties] Properties to set
         * @returns {C2S.LOGIN_CS_GET_SERVER_LIST} LOGIN_CS_GET_SERVER_LIST instance
         */
        LOGIN_CS_GET_SERVER_LIST.create = function create(properties) {
            return new LOGIN_CS_GET_SERVER_LIST(properties);
        };

        /**
         * Encodes the specified LOGIN_CS_GET_SERVER_LIST message. Does not implicitly {@link C2S.LOGIN_CS_GET_SERVER_LIST.verify|verify} messages.
         * @function encode
         * @memberof C2S.LOGIN_CS_GET_SERVER_LIST
         * @static
         * @param {C2S.ILOGIN_CS_GET_SERVER_LIST} message LOGIN_CS_GET_SERVER_LIST message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LOGIN_CS_GET_SERVER_LIST.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified LOGIN_CS_GET_SERVER_LIST message, length delimited. Does not implicitly {@link C2S.LOGIN_CS_GET_SERVER_LIST.verify|verify} messages.
         * @function encodeDelimited
         * @memberof C2S.LOGIN_CS_GET_SERVER_LIST
         * @static
         * @param {C2S.ILOGIN_CS_GET_SERVER_LIST} message LOGIN_CS_GET_SERVER_LIST message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LOGIN_CS_GET_SERVER_LIST.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LOGIN_CS_GET_SERVER_LIST message from the specified reader or buffer.
         * @function decode
         * @memberof C2S.LOGIN_CS_GET_SERVER_LIST
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {C2S.LOGIN_CS_GET_SERVER_LIST} LOGIN_CS_GET_SERVER_LIST
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LOGIN_CS_GET_SERVER_LIST.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.C2S.LOGIN_CS_GET_SERVER_LIST();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LOGIN_CS_GET_SERVER_LIST message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof C2S.LOGIN_CS_GET_SERVER_LIST
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {C2S.LOGIN_CS_GET_SERVER_LIST} LOGIN_CS_GET_SERVER_LIST
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LOGIN_CS_GET_SERVER_LIST.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LOGIN_CS_GET_SERVER_LIST message.
         * @function verify
         * @memberof C2S.LOGIN_CS_GET_SERVER_LIST
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LOGIN_CS_GET_SERVER_LIST.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a LOGIN_CS_GET_SERVER_LIST message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof C2S.LOGIN_CS_GET_SERVER_LIST
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {C2S.LOGIN_CS_GET_SERVER_LIST} LOGIN_CS_GET_SERVER_LIST
         */
        LOGIN_CS_GET_SERVER_LIST.fromObject = function fromObject(object) {
            if (object instanceof $root.C2S.LOGIN_CS_GET_SERVER_LIST)
                return object;
            return new $root.C2S.LOGIN_CS_GET_SERVER_LIST();
        };

        /**
         * Creates a plain object from a LOGIN_CS_GET_SERVER_LIST message. Also converts values to other types if specified.
         * @function toObject
         * @memberof C2S.LOGIN_CS_GET_SERVER_LIST
         * @static
         * @param {C2S.LOGIN_CS_GET_SERVER_LIST} message LOGIN_CS_GET_SERVER_LIST
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LOGIN_CS_GET_SERVER_LIST.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this LOGIN_CS_GET_SERVER_LIST to JSON.
         * @function toJSON
         * @memberof C2S.LOGIN_CS_GET_SERVER_LIST
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LOGIN_CS_GET_SERVER_LIST.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LOGIN_CS_GET_SERVER_LIST;
    })();

    C2S.LOGIN_CS_GET_INFO = (function() {

        /**
         * Properties of a LOGIN_CS_GET_INFO.
         * @memberof C2S
         * @interface ILOGIN_CS_GET_INFO
         * @property {number|null} [platformId] LOGIN_CS_GET_INFO platformId
         * @property {string|null} [clientVersion] LOGIN_CS_GET_INFO clientVersion
         */

        /**
         * Constructs a new LOGIN_CS_GET_INFO.
         * @memberof C2S
         * @classdesc Represents a LOGIN_CS_GET_INFO.
         * @implements ILOGIN_CS_GET_INFO
         * @constructor
         * @param {C2S.ILOGIN_CS_GET_INFO=} [properties] Properties to set
         */
        function LOGIN_CS_GET_INFO(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LOGIN_CS_GET_INFO platformId.
         * @member {number} platformId
         * @memberof C2S.LOGIN_CS_GET_INFO
         * @instance
         */
        LOGIN_CS_GET_INFO.prototype.platformId = 0;

        /**
         * LOGIN_CS_GET_INFO clientVersion.
         * @member {string} clientVersion
         * @memberof C2S.LOGIN_CS_GET_INFO
         * @instance
         */
        LOGIN_CS_GET_INFO.prototype.clientVersion = "";

        /**
         * Creates a new LOGIN_CS_GET_INFO instance using the specified properties.
         * @function create
         * @memberof C2S.LOGIN_CS_GET_INFO
         * @static
         * @param {C2S.ILOGIN_CS_GET_INFO=} [properties] Properties to set
         * @returns {C2S.LOGIN_CS_GET_INFO} LOGIN_CS_GET_INFO instance
         */
        LOGIN_CS_GET_INFO.create = function create(properties) {
            return new LOGIN_CS_GET_INFO(properties);
        };

        /**
         * Encodes the specified LOGIN_CS_GET_INFO message. Does not implicitly {@link C2S.LOGIN_CS_GET_INFO.verify|verify} messages.
         * @function encode
         * @memberof C2S.LOGIN_CS_GET_INFO
         * @static
         * @param {C2S.ILOGIN_CS_GET_INFO} message LOGIN_CS_GET_INFO message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LOGIN_CS_GET_INFO.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.platformId != null && message.hasOwnProperty("platformId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.platformId);
            if (message.clientVersion != null && message.hasOwnProperty("clientVersion"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.clientVersion);
            return writer;
        };

        /**
         * Encodes the specified LOGIN_CS_GET_INFO message, length delimited. Does not implicitly {@link C2S.LOGIN_CS_GET_INFO.verify|verify} messages.
         * @function encodeDelimited
         * @memberof C2S.LOGIN_CS_GET_INFO
         * @static
         * @param {C2S.ILOGIN_CS_GET_INFO} message LOGIN_CS_GET_INFO message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LOGIN_CS_GET_INFO.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LOGIN_CS_GET_INFO message from the specified reader or buffer.
         * @function decode
         * @memberof C2S.LOGIN_CS_GET_INFO
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {C2S.LOGIN_CS_GET_INFO} LOGIN_CS_GET_INFO
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LOGIN_CS_GET_INFO.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.C2S.LOGIN_CS_GET_INFO();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.platformId = reader.uint32();
                    break;
                case 2:
                    message.clientVersion = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LOGIN_CS_GET_INFO message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof C2S.LOGIN_CS_GET_INFO
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {C2S.LOGIN_CS_GET_INFO} LOGIN_CS_GET_INFO
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LOGIN_CS_GET_INFO.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LOGIN_CS_GET_INFO message.
         * @function verify
         * @memberof C2S.LOGIN_CS_GET_INFO
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LOGIN_CS_GET_INFO.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.platformId != null && message.hasOwnProperty("platformId"))
                if (!$util.isInteger(message.platformId))
                    return "platformId: integer expected";
            if (message.clientVersion != null && message.hasOwnProperty("clientVersion"))
                if (!$util.isString(message.clientVersion))
                    return "clientVersion: string expected";
            return null;
        };

        /**
         * Creates a LOGIN_CS_GET_INFO message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof C2S.LOGIN_CS_GET_INFO
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {C2S.LOGIN_CS_GET_INFO} LOGIN_CS_GET_INFO
         */
        LOGIN_CS_GET_INFO.fromObject = function fromObject(object) {
            if (object instanceof $root.C2S.LOGIN_CS_GET_INFO)
                return object;
            var message = new $root.C2S.LOGIN_CS_GET_INFO();
            if (object.platformId != null)
                message.platformId = object.platformId >>> 0;
            if (object.clientVersion != null)
                message.clientVersion = String(object.clientVersion);
            return message;
        };

        /**
         * Creates a plain object from a LOGIN_CS_GET_INFO message. Also converts values to other types if specified.
         * @function toObject
         * @memberof C2S.LOGIN_CS_GET_INFO
         * @static
         * @param {C2S.LOGIN_CS_GET_INFO} message LOGIN_CS_GET_INFO
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LOGIN_CS_GET_INFO.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.platformId = 0;
                object.clientVersion = "";
            }
            if (message.platformId != null && message.hasOwnProperty("platformId"))
                object.platformId = message.platformId;
            if (message.clientVersion != null && message.hasOwnProperty("clientVersion"))
                object.clientVersion = message.clientVersion;
            return object;
        };

        /**
         * Converts this LOGIN_CS_GET_INFO to JSON.
         * @function toJSON
         * @memberof C2S.LOGIN_CS_GET_INFO
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LOGIN_CS_GET_INFO.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LOGIN_CS_GET_INFO;
    })();

    C2S.LOGIN_CS_QUERY = (function() {

        /**
         * Properties of a LOGIN_CS_QUERY.
         * @memberof C2S
         * @interface ILOGIN_CS_QUERY
         * @property {number|null} [uid] LOGIN_CS_QUERY uid
         */

        /**
         * Constructs a new LOGIN_CS_QUERY.
         * @memberof C2S
         * @classdesc Represents a LOGIN_CS_QUERY.
         * @implements ILOGIN_CS_QUERY
         * @constructor
         * @param {C2S.ILOGIN_CS_QUERY=} [properties] Properties to set
         */
        function LOGIN_CS_QUERY(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LOGIN_CS_QUERY uid.
         * @member {number} uid
         * @memberof C2S.LOGIN_CS_QUERY
         * @instance
         */
        LOGIN_CS_QUERY.prototype.uid = 0;

        /**
         * Creates a new LOGIN_CS_QUERY instance using the specified properties.
         * @function create
         * @memberof C2S.LOGIN_CS_QUERY
         * @static
         * @param {C2S.ILOGIN_CS_QUERY=} [properties] Properties to set
         * @returns {C2S.LOGIN_CS_QUERY} LOGIN_CS_QUERY instance
         */
        LOGIN_CS_QUERY.create = function create(properties) {
            return new LOGIN_CS_QUERY(properties);
        };

        /**
         * Encodes the specified LOGIN_CS_QUERY message. Does not implicitly {@link C2S.LOGIN_CS_QUERY.verify|verify} messages.
         * @function encode
         * @memberof C2S.LOGIN_CS_QUERY
         * @static
         * @param {C2S.ILOGIN_CS_QUERY} message LOGIN_CS_QUERY message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LOGIN_CS_QUERY.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.uid);
            return writer;
        };

        /**
         * Encodes the specified LOGIN_CS_QUERY message, length delimited. Does not implicitly {@link C2S.LOGIN_CS_QUERY.verify|verify} messages.
         * @function encodeDelimited
         * @memberof C2S.LOGIN_CS_QUERY
         * @static
         * @param {C2S.ILOGIN_CS_QUERY} message LOGIN_CS_QUERY message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LOGIN_CS_QUERY.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LOGIN_CS_QUERY message from the specified reader or buffer.
         * @function decode
         * @memberof C2S.LOGIN_CS_QUERY
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {C2S.LOGIN_CS_QUERY} LOGIN_CS_QUERY
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LOGIN_CS_QUERY.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.C2S.LOGIN_CS_QUERY();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LOGIN_CS_QUERY message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof C2S.LOGIN_CS_QUERY
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {C2S.LOGIN_CS_QUERY} LOGIN_CS_QUERY
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LOGIN_CS_QUERY.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LOGIN_CS_QUERY message.
         * @function verify
         * @memberof C2S.LOGIN_CS_QUERY
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LOGIN_CS_QUERY.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid))
                    return "uid: integer expected";
            return null;
        };

        /**
         * Creates a LOGIN_CS_QUERY message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof C2S.LOGIN_CS_QUERY
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {C2S.LOGIN_CS_QUERY} LOGIN_CS_QUERY
         */
        LOGIN_CS_QUERY.fromObject = function fromObject(object) {
            if (object instanceof $root.C2S.LOGIN_CS_QUERY)
                return object;
            var message = new $root.C2S.LOGIN_CS_QUERY();
            if (object.uid != null)
                message.uid = object.uid >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a LOGIN_CS_QUERY message. Also converts values to other types if specified.
         * @function toObject
         * @memberof C2S.LOGIN_CS_QUERY
         * @static
         * @param {C2S.LOGIN_CS_QUERY} message LOGIN_CS_QUERY
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LOGIN_CS_QUERY.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.uid = 0;
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            return object;
        };

        /**
         * Converts this LOGIN_CS_QUERY to JSON.
         * @function toJSON
         * @memberof C2S.LOGIN_CS_QUERY
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LOGIN_CS_QUERY.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LOGIN_CS_QUERY;
    })();

    C2S.CS_ROLE_CREATE = (function() {

        /**
         * Properties of a CS_ROLE_CREATE.
         * @memberof C2S
         * @interface ICS_ROLE_CREATE
         * @property {string|null} [name] CS_ROLE_CREATE name
         * @property {number|null} [uid] CS_ROLE_CREATE uid
         * @property {number|null} [iconId] CS_ROLE_CREATE iconId
         * @property {number|null} [gender] CS_ROLE_CREATE gender
         * @property {number|null} [inviter] CS_ROLE_CREATE inviter
         */

        /**
         * Constructs a new CS_ROLE_CREATE.
         * @memberof C2S
         * @classdesc Represents a CS_ROLE_CREATE.
         * @implements ICS_ROLE_CREATE
         * @constructor
         * @param {C2S.ICS_ROLE_CREATE=} [properties] Properties to set
         */
        function CS_ROLE_CREATE(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CS_ROLE_CREATE name.
         * @member {string} name
         * @memberof C2S.CS_ROLE_CREATE
         * @instance
         */
        CS_ROLE_CREATE.prototype.name = "";

        /**
         * CS_ROLE_CREATE uid.
         * @member {number} uid
         * @memberof C2S.CS_ROLE_CREATE
         * @instance
         */
        CS_ROLE_CREATE.prototype.uid = 0;

        /**
         * CS_ROLE_CREATE iconId.
         * @member {number} iconId
         * @memberof C2S.CS_ROLE_CREATE
         * @instance
         */
        CS_ROLE_CREATE.prototype.iconId = 0;

        /**
         * CS_ROLE_CREATE gender.
         * @member {number} gender
         * @memberof C2S.CS_ROLE_CREATE
         * @instance
         */
        CS_ROLE_CREATE.prototype.gender = 0;

        /**
         * CS_ROLE_CREATE inviter.
         * @member {number} inviter
         * @memberof C2S.CS_ROLE_CREATE
         * @instance
         */
        CS_ROLE_CREATE.prototype.inviter = 0;

        /**
         * Creates a new CS_ROLE_CREATE instance using the specified properties.
         * @function create
         * @memberof C2S.CS_ROLE_CREATE
         * @static
         * @param {C2S.ICS_ROLE_CREATE=} [properties] Properties to set
         * @returns {C2S.CS_ROLE_CREATE} CS_ROLE_CREATE instance
         */
        CS_ROLE_CREATE.create = function create(properties) {
            return new CS_ROLE_CREATE(properties);
        };

        /**
         * Encodes the specified CS_ROLE_CREATE message. Does not implicitly {@link C2S.CS_ROLE_CREATE.verify|verify} messages.
         * @function encode
         * @memberof C2S.CS_ROLE_CREATE
         * @static
         * @param {C2S.ICS_ROLE_CREATE} message CS_ROLE_CREATE message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CS_ROLE_CREATE.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.uid);
            if (message.iconId != null && message.hasOwnProperty("iconId"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.iconId);
            if (message.gender != null && message.hasOwnProperty("gender"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.gender);
            if (message.inviter != null && message.hasOwnProperty("inviter"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.inviter);
            return writer;
        };

        /**
         * Encodes the specified CS_ROLE_CREATE message, length delimited. Does not implicitly {@link C2S.CS_ROLE_CREATE.verify|verify} messages.
         * @function encodeDelimited
         * @memberof C2S.CS_ROLE_CREATE
         * @static
         * @param {C2S.ICS_ROLE_CREATE} message CS_ROLE_CREATE message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CS_ROLE_CREATE.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CS_ROLE_CREATE message from the specified reader or buffer.
         * @function decode
         * @memberof C2S.CS_ROLE_CREATE
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {C2S.CS_ROLE_CREATE} CS_ROLE_CREATE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CS_ROLE_CREATE.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.C2S.CS_ROLE_CREATE();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.uid = reader.uint32();
                    break;
                case 3:
                    message.iconId = reader.uint32();
                    break;
                case 4:
                    message.gender = reader.uint32();
                    break;
                case 5:
                    message.inviter = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CS_ROLE_CREATE message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof C2S.CS_ROLE_CREATE
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {C2S.CS_ROLE_CREATE} CS_ROLE_CREATE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CS_ROLE_CREATE.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CS_ROLE_CREATE message.
         * @function verify
         * @memberof C2S.CS_ROLE_CREATE
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CS_ROLE_CREATE.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid))
                    return "uid: integer expected";
            if (message.iconId != null && message.hasOwnProperty("iconId"))
                if (!$util.isInteger(message.iconId))
                    return "iconId: integer expected";
            if (message.gender != null && message.hasOwnProperty("gender"))
                if (!$util.isInteger(message.gender))
                    return "gender: integer expected";
            if (message.inviter != null && message.hasOwnProperty("inviter"))
                if (!$util.isInteger(message.inviter))
                    return "inviter: integer expected";
            return null;
        };

        /**
         * Creates a CS_ROLE_CREATE message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof C2S.CS_ROLE_CREATE
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {C2S.CS_ROLE_CREATE} CS_ROLE_CREATE
         */
        CS_ROLE_CREATE.fromObject = function fromObject(object) {
            if (object instanceof $root.C2S.CS_ROLE_CREATE)
                return object;
            var message = new $root.C2S.CS_ROLE_CREATE();
            if (object.name != null)
                message.name = String(object.name);
            if (object.uid != null)
                message.uid = object.uid >>> 0;
            if (object.iconId != null)
                message.iconId = object.iconId >>> 0;
            if (object.gender != null)
                message.gender = object.gender >>> 0;
            if (object.inviter != null)
                message.inviter = object.inviter >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a CS_ROLE_CREATE message. Also converts values to other types if specified.
         * @function toObject
         * @memberof C2S.CS_ROLE_CREATE
         * @static
         * @param {C2S.CS_ROLE_CREATE} message CS_ROLE_CREATE
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CS_ROLE_CREATE.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.name = "";
                object.uid = 0;
                object.iconId = 0;
                object.gender = 0;
                object.inviter = 0;
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            if (message.iconId != null && message.hasOwnProperty("iconId"))
                object.iconId = message.iconId;
            if (message.gender != null && message.hasOwnProperty("gender"))
                object.gender = message.gender;
            if (message.inviter != null && message.hasOwnProperty("inviter"))
                object.inviter = message.inviter;
            return object;
        };

        /**
         * Converts this CS_ROLE_CREATE to JSON.
         * @function toJSON
         * @memberof C2S.CS_ROLE_CREATE
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CS_ROLE_CREATE.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CS_ROLE_CREATE;
    })();

    C2S.CS_GM_CMD = (function() {

        /**
         * Properties of a CS_GM_CMD.
         * @memberof C2S
         * @interface ICS_GM_CMD
         * @property {string|null} [msg] CS_GM_CMD msg
         */

        /**
         * Constructs a new CS_GM_CMD.
         * @memberof C2S
         * @classdesc Represents a CS_GM_CMD.
         * @implements ICS_GM_CMD
         * @constructor
         * @param {C2S.ICS_GM_CMD=} [properties] Properties to set
         */
        function CS_GM_CMD(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CS_GM_CMD msg.
         * @member {string} msg
         * @memberof C2S.CS_GM_CMD
         * @instance
         */
        CS_GM_CMD.prototype.msg = "";

        /**
         * Creates a new CS_GM_CMD instance using the specified properties.
         * @function create
         * @memberof C2S.CS_GM_CMD
         * @static
         * @param {C2S.ICS_GM_CMD=} [properties] Properties to set
         * @returns {C2S.CS_GM_CMD} CS_GM_CMD instance
         */
        CS_GM_CMD.create = function create(properties) {
            return new CS_GM_CMD(properties);
        };

        /**
         * Encodes the specified CS_GM_CMD message. Does not implicitly {@link C2S.CS_GM_CMD.verify|verify} messages.
         * @function encode
         * @memberof C2S.CS_GM_CMD
         * @static
         * @param {C2S.ICS_GM_CMD} message CS_GM_CMD message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CS_GM_CMD.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.msg != null && message.hasOwnProperty("msg"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.msg);
            return writer;
        };

        /**
         * Encodes the specified CS_GM_CMD message, length delimited. Does not implicitly {@link C2S.CS_GM_CMD.verify|verify} messages.
         * @function encodeDelimited
         * @memberof C2S.CS_GM_CMD
         * @static
         * @param {C2S.ICS_GM_CMD} message CS_GM_CMD message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CS_GM_CMD.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CS_GM_CMD message from the specified reader or buffer.
         * @function decode
         * @memberof C2S.CS_GM_CMD
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {C2S.CS_GM_CMD} CS_GM_CMD
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CS_GM_CMD.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.C2S.CS_GM_CMD();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.msg = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CS_GM_CMD message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof C2S.CS_GM_CMD
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {C2S.CS_GM_CMD} CS_GM_CMD
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CS_GM_CMD.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CS_GM_CMD message.
         * @function verify
         * @memberof C2S.CS_GM_CMD
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CS_GM_CMD.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            return null;
        };

        /**
         * Creates a CS_GM_CMD message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof C2S.CS_GM_CMD
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {C2S.CS_GM_CMD} CS_GM_CMD
         */
        CS_GM_CMD.fromObject = function fromObject(object) {
            if (object instanceof $root.C2S.CS_GM_CMD)
                return object;
            var message = new $root.C2S.CS_GM_CMD();
            if (object.msg != null)
                message.msg = String(object.msg);
            return message;
        };

        /**
         * Creates a plain object from a CS_GM_CMD message. Also converts values to other types if specified.
         * @function toObject
         * @memberof C2S.CS_GM_CMD
         * @static
         * @param {C2S.CS_GM_CMD} message CS_GM_CMD
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CS_GM_CMD.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.msg = "";
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            return object;
        };

        /**
         * Converts this CS_GM_CMD to JSON.
         * @function toJSON
         * @memberof C2S.CS_GM_CMD
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CS_GM_CMD.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CS_GM_CMD;
    })();

    /**
     * ERankType enum.
     * @name C2S.ERankType
     * @enum {string}
     * @property {number} combat=0 combat value
     */
    C2S.ERankType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "combat"] = 0;
        return values;
    })();

    C2S.CS_ROLE_CHAT = (function() {

        /**
         * Properties of a CS_ROLE_CHAT.
         * @memberof C2S
         * @interface ICS_ROLE_CHAT
         * @property {string|null} [msg] CS_ROLE_CHAT msg
         * @property {C2S.CS_ROLE_CHAT.EChatChannel|null} [channel] CS_ROLE_CHAT channel
         */

        /**
         * Constructs a new CS_ROLE_CHAT.
         * @memberof C2S
         * @classdesc Represents a CS_ROLE_CHAT.
         * @implements ICS_ROLE_CHAT
         * @constructor
         * @param {C2S.ICS_ROLE_CHAT=} [properties] Properties to set
         */
        function CS_ROLE_CHAT(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CS_ROLE_CHAT msg.
         * @member {string} msg
         * @memberof C2S.CS_ROLE_CHAT
         * @instance
         */
        CS_ROLE_CHAT.prototype.msg = "";

        /**
         * CS_ROLE_CHAT channel.
         * @member {C2S.CS_ROLE_CHAT.EChatChannel} channel
         * @memberof C2S.CS_ROLE_CHAT
         * @instance
         */
        CS_ROLE_CHAT.prototype.channel = 0;

        /**
         * Creates a new CS_ROLE_CHAT instance using the specified properties.
         * @function create
         * @memberof C2S.CS_ROLE_CHAT
         * @static
         * @param {C2S.ICS_ROLE_CHAT=} [properties] Properties to set
         * @returns {C2S.CS_ROLE_CHAT} CS_ROLE_CHAT instance
         */
        CS_ROLE_CHAT.create = function create(properties) {
            return new CS_ROLE_CHAT(properties);
        };

        /**
         * Encodes the specified CS_ROLE_CHAT message. Does not implicitly {@link C2S.CS_ROLE_CHAT.verify|verify} messages.
         * @function encode
         * @memberof C2S.CS_ROLE_CHAT
         * @static
         * @param {C2S.ICS_ROLE_CHAT} message CS_ROLE_CHAT message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CS_ROLE_CHAT.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.msg != null && message.hasOwnProperty("msg"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.msg);
            if (message.channel != null && message.hasOwnProperty("channel"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.channel);
            return writer;
        };

        /**
         * Encodes the specified CS_ROLE_CHAT message, length delimited. Does not implicitly {@link C2S.CS_ROLE_CHAT.verify|verify} messages.
         * @function encodeDelimited
         * @memberof C2S.CS_ROLE_CHAT
         * @static
         * @param {C2S.ICS_ROLE_CHAT} message CS_ROLE_CHAT message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CS_ROLE_CHAT.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CS_ROLE_CHAT message from the specified reader or buffer.
         * @function decode
         * @memberof C2S.CS_ROLE_CHAT
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {C2S.CS_ROLE_CHAT} CS_ROLE_CHAT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CS_ROLE_CHAT.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.C2S.CS_ROLE_CHAT();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.msg = reader.string();
                    break;
                case 2:
                    message.channel = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CS_ROLE_CHAT message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof C2S.CS_ROLE_CHAT
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {C2S.CS_ROLE_CHAT} CS_ROLE_CHAT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CS_ROLE_CHAT.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CS_ROLE_CHAT message.
         * @function verify
         * @memberof C2S.CS_ROLE_CHAT
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CS_ROLE_CHAT.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            if (message.channel != null && message.hasOwnProperty("channel"))
                switch (message.channel) {
                default:
                    return "channel: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 100:
                    break;
                }
            return null;
        };

        /**
         * Creates a CS_ROLE_CHAT message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof C2S.CS_ROLE_CHAT
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {C2S.CS_ROLE_CHAT} CS_ROLE_CHAT
         */
        CS_ROLE_CHAT.fromObject = function fromObject(object) {
            if (object instanceof $root.C2S.CS_ROLE_CHAT)
                return object;
            var message = new $root.C2S.CS_ROLE_CHAT();
            if (object.msg != null)
                message.msg = String(object.msg);
            switch (object.channel) {
            case "none":
            case 0:
                message.channel = 0;
                break;
            case "server":
            case 1:
                message.channel = 1;
                break;
            case "guild":
            case 2:
                message.channel = 2;
                break;
            case "game":
            case 3:
                message.channel = 3;
                break;
            case "broadcast":
            case 100:
                message.channel = 100;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a CS_ROLE_CHAT message. Also converts values to other types if specified.
         * @function toObject
         * @memberof C2S.CS_ROLE_CHAT
         * @static
         * @param {C2S.CS_ROLE_CHAT} message CS_ROLE_CHAT
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CS_ROLE_CHAT.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.msg = "";
                object.channel = options.enums === String ? "none" : 0;
            }
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            if (message.channel != null && message.hasOwnProperty("channel"))
                object.channel = options.enums === String ? $root.C2S.CS_ROLE_CHAT.EChatChannel[message.channel] : message.channel;
            return object;
        };

        /**
         * Converts this CS_ROLE_CHAT to JSON.
         * @function toJSON
         * @memberof C2S.CS_ROLE_CHAT
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CS_ROLE_CHAT.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * EChatChannel enum.
         * @name C2S.CS_ROLE_CHAT.EChatChannel
         * @enum {string}
         * @property {number} none=0 none value
         * @property {number} server=1 server value
         * @property {number} guild=2 guild value
         * @property {number} game=3 game value
         * @property {number} broadcast=100 broadcast value
         */
        CS_ROLE_CHAT.EChatChannel = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "none"] = 0;
            values[valuesById[1] = "server"] = 1;
            values[valuesById[2] = "guild"] = 2;
            values[valuesById[3] = "game"] = 3;
            values[valuesById[100] = "broadcast"] = 100;
            return values;
        })();

        return CS_ROLE_CHAT;
    })();

    return C2S;
})();

module.exports = $root;
