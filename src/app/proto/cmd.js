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

$root.Router = (function() {

    /**
     * Namespace Router.
     * @exports Router
     * @namespace
     */
    var Router = {};

    Router.CS_PRECONNECT = (function() {

        /**
         * Properties of a CS_PRECONNECT.
         * @memberof Router
         * @interface ICS_PRECONNECT
         * @property {number|null} [cmdId] CS_PRECONNECT cmdId
         * @property {string|null} [host] CS_PRECONNECT host
         * @property {number|null} [port] CS_PRECONNECT port
         */

        /**
         * Constructs a new CS_PRECONNECT.
         * @memberof Router
         * @classdesc Represents a CS_PRECONNECT.
         * @implements ICS_PRECONNECT
         * @constructor
         * @param {Router.ICS_PRECONNECT=} [properties] Properties to set
         */
        function CS_PRECONNECT(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CS_PRECONNECT cmdId.
         * @member {number} cmdId
         * @memberof Router.CS_PRECONNECT
         * @instance
         */
        CS_PRECONNECT.prototype.cmdId = 1;

        /**
         * CS_PRECONNECT host.
         * @member {string} host
         * @memberof Router.CS_PRECONNECT
         * @instance
         */
        CS_PRECONNECT.prototype.host = "";

        /**
         * CS_PRECONNECT port.
         * @member {number} port
         * @memberof Router.CS_PRECONNECT
         * @instance
         */
        CS_PRECONNECT.prototype.port = 0;

        /**
         * Creates a new CS_PRECONNECT instance using the specified properties.
         * @function create
         * @memberof Router.CS_PRECONNECT
         * @static
         * @param {Router.ICS_PRECONNECT=} [properties] Properties to set
         * @returns {Router.CS_PRECONNECT} CS_PRECONNECT instance
         */
        CS_PRECONNECT.create = function create(properties) {
            return new CS_PRECONNECT(properties);
        };

        /**
         * Encodes the specified CS_PRECONNECT message. Does not implicitly {@link Router.CS_PRECONNECT.verify|verify} messages.
         * @function encode
         * @memberof Router.CS_PRECONNECT
         * @static
         * @param {Router.ICS_PRECONNECT} message CS_PRECONNECT message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CS_PRECONNECT.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmdId != null && message.hasOwnProperty("cmdId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmdId);
            if (message.host != null && message.hasOwnProperty("host"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.host);
            if (message.port != null && message.hasOwnProperty("port"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.port);
            return writer;
        };

        /**
         * Encodes the specified CS_PRECONNECT message, length delimited. Does not implicitly {@link Router.CS_PRECONNECT.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Router.CS_PRECONNECT
         * @static
         * @param {Router.ICS_PRECONNECT} message CS_PRECONNECT message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CS_PRECONNECT.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CS_PRECONNECT message from the specified reader or buffer.
         * @function decode
         * @memberof Router.CS_PRECONNECT
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Router.CS_PRECONNECT} CS_PRECONNECT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CS_PRECONNECT.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Router.CS_PRECONNECT();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.cmdId = reader.int32();
                    break;
                case 2:
                    message.host = reader.string();
                    break;
                case 3:
                    message.port = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CS_PRECONNECT message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Router.CS_PRECONNECT
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Router.CS_PRECONNECT} CS_PRECONNECT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CS_PRECONNECT.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CS_PRECONNECT message.
         * @function verify
         * @memberof Router.CS_PRECONNECT
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CS_PRECONNECT.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.cmdId != null && message.hasOwnProperty("cmdId"))
                if (!$util.isInteger(message.cmdId))
                    return "cmdId: integer expected";
            if (message.host != null && message.hasOwnProperty("host"))
                if (!$util.isString(message.host))
                    return "host: string expected";
            if (message.port != null && message.hasOwnProperty("port"))
                if (!$util.isInteger(message.port))
                    return "port: integer expected";
            return null;
        };

        /**
         * Creates a CS_PRECONNECT message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Router.CS_PRECONNECT
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Router.CS_PRECONNECT} CS_PRECONNECT
         */
        CS_PRECONNECT.fromObject = function fromObject(object) {
            if (object instanceof $root.Router.CS_PRECONNECT)
                return object;
            var message = new $root.Router.CS_PRECONNECT();
            if (object.cmdId != null)
                message.cmdId = object.cmdId | 0;
            if (object.host != null)
                message.host = String(object.host);
            if (object.port != null)
                message.port = object.port | 0;
            return message;
        };

        /**
         * Creates a plain object from a CS_PRECONNECT message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Router.CS_PRECONNECT
         * @static
         * @param {Router.CS_PRECONNECT} message CS_PRECONNECT
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CS_PRECONNECT.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.cmdId = 1;
                object.host = "";
                object.port = 0;
            }
            if (message.cmdId != null && message.hasOwnProperty("cmdId"))
                object.cmdId = message.cmdId;
            if (message.host != null && message.hasOwnProperty("host"))
                object.host = message.host;
            if (message.port != null && message.hasOwnProperty("port"))
                object.port = message.port;
            return object;
        };

        /**
         * Converts this CS_PRECONNECT to JSON.
         * @function toJSON
         * @memberof Router.CS_PRECONNECT
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CS_PRECONNECT.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CS_PRECONNECT;
    })();

    Router.SC_PRECONNECT = (function() {

        /**
         * Properties of a SC_PRECONNECT.
         * @memberof Router
         * @interface ISC_PRECONNECT
         * @property {number|null} [cmdId] SC_PRECONNECT cmdId
         */

        /**
         * Constructs a new SC_PRECONNECT.
         * @memberof Router
         * @classdesc Represents a SC_PRECONNECT.
         * @implements ISC_PRECONNECT
         * @constructor
         * @param {Router.ISC_PRECONNECT=} [properties] Properties to set
         */
        function SC_PRECONNECT(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SC_PRECONNECT cmdId.
         * @member {number} cmdId
         * @memberof Router.SC_PRECONNECT
         * @instance
         */
        SC_PRECONNECT.prototype.cmdId = 2;

        /**
         * Creates a new SC_PRECONNECT instance using the specified properties.
         * @function create
         * @memberof Router.SC_PRECONNECT
         * @static
         * @param {Router.ISC_PRECONNECT=} [properties] Properties to set
         * @returns {Router.SC_PRECONNECT} SC_PRECONNECT instance
         */
        SC_PRECONNECT.create = function create(properties) {
            return new SC_PRECONNECT(properties);
        };

        /**
         * Encodes the specified SC_PRECONNECT message. Does not implicitly {@link Router.SC_PRECONNECT.verify|verify} messages.
         * @function encode
         * @memberof Router.SC_PRECONNECT
         * @static
         * @param {Router.ISC_PRECONNECT} message SC_PRECONNECT message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SC_PRECONNECT.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmdId != null && message.hasOwnProperty("cmdId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmdId);
            return writer;
        };

        /**
         * Encodes the specified SC_PRECONNECT message, length delimited. Does not implicitly {@link Router.SC_PRECONNECT.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Router.SC_PRECONNECT
         * @static
         * @param {Router.ISC_PRECONNECT} message SC_PRECONNECT message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SC_PRECONNECT.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SC_PRECONNECT message from the specified reader or buffer.
         * @function decode
         * @memberof Router.SC_PRECONNECT
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Router.SC_PRECONNECT} SC_PRECONNECT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SC_PRECONNECT.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Router.SC_PRECONNECT();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.cmdId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SC_PRECONNECT message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Router.SC_PRECONNECT
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Router.SC_PRECONNECT} SC_PRECONNECT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SC_PRECONNECT.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SC_PRECONNECT message.
         * @function verify
         * @memberof Router.SC_PRECONNECT
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SC_PRECONNECT.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.cmdId != null && message.hasOwnProperty("cmdId"))
                if (!$util.isInteger(message.cmdId))
                    return "cmdId: integer expected";
            return null;
        };

        /**
         * Creates a SC_PRECONNECT message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Router.SC_PRECONNECT
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Router.SC_PRECONNECT} SC_PRECONNECT
         */
        SC_PRECONNECT.fromObject = function fromObject(object) {
            if (object instanceof $root.Router.SC_PRECONNECT)
                return object;
            var message = new $root.Router.SC_PRECONNECT();
            if (object.cmdId != null)
                message.cmdId = object.cmdId | 0;
            return message;
        };

        /**
         * Creates a plain object from a SC_PRECONNECT message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Router.SC_PRECONNECT
         * @static
         * @param {Router.SC_PRECONNECT} message SC_PRECONNECT
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SC_PRECONNECT.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.cmdId = 2;
            if (message.cmdId != null && message.hasOwnProperty("cmdId"))
                object.cmdId = message.cmdId;
            return object;
        };

        /**
         * Converts this SC_PRECONNECT to JSON.
         * @function toJSON
         * @memberof Router.SC_PRECONNECT
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SC_PRECONNECT.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SC_PRECONNECT;
    })();

    return Router;
})();

$root.S2C = (function() {

    /**
     * Namespace S2C.
     * @exports S2C
     * @namespace
     */
    var S2C = {};

    S2C.Message = (function() {

        /**
         * Properties of a Message.
         * @memberof S2C
         * @interface IMessage
         * @property {S2C.ISC_TEST_ECHO|null} [SC_TEST_ECHO] Message SC_TEST_ECHO
         * @property {S2C.IError|null} [Error] Message Error
         * @property {S2C.ILOGIN_SC_LOGIN|null} [LOGIN_SC_LOGIN] Message LOGIN_SC_LOGIN
         * @property {S2C.ILOGIN_SC_CHOOSE_SERVER|null} [LOGIN_SC_CHOOSE_SERVER] Message LOGIN_SC_CHOOSE_SERVER
         * @property {S2C.ILOGIN_SC_GET_SERVER_LIST|null} [LOGIN_SC_GET_SERVER_LIST] Message LOGIN_SC_GET_SERVER_LIST
         * @property {S2C.ILOGIN_SC_GET_INFO|null} [LOGIN_SC_GET_INFO] Message LOGIN_SC_GET_INFO
         * @property {S2C.ILOGIN_SC_QUERY|null} [LOGIN_SC_QUERY] Message LOGIN_SC_QUERY
         * @property {S2C.ISC_ROLE_CREATE|null} [SC_ROLE_CREATE] Message SC_ROLE_CREATE
         * @property {S2C.ISC_ROLE_ONLINE|null} [SC_ROLE_ONLINE] Message SC_ROLE_ONLINE
         * @property {S2C.ISC_ROLE_HEART_BEAT|null} [SC_ROLE_HEART_BEAT] Message SC_ROLE_HEART_BEAT
         * @property {S2C.ISC_UPDATE_ROLE_PRO|null} [SC_UPDATE_ROLE_PRO] Message SC_UPDATE_ROLE_PRO
         * @property {S2C.ISC_GET_REWARD|null} [SC_GET_REWARD] Message SC_GET_REWARD
         * @property {S2C.ISC_GM_CMD|null} [SC_GM_CMD] Message SC_GM_CMD
         * @property {S2C.ISC_UPDATE_RECHARGE|null} [SC_UPDATE_RECHARGE] Message SC_UPDATE_RECHARGE
         * @property {S2C.ISC_ROLE_OFFLINE|null} [SC_ROLE_OFFLINE] Message SC_ROLE_OFFLINE
         */

        /**
         * Constructs a new Message.
         * @memberof S2C
         * @classdesc remember to put your message here as a kind support*
         * @implements IMessage
         * @constructor
         * @param {S2C.IMessage=} [properties] Properties to set
         */
        function Message(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Message SC_TEST_ECHO.
         * @member {S2C.ISC_TEST_ECHO|null|undefined} SC_TEST_ECHO
         * @memberof S2C.Message
         * @instance
         */
        Message.prototype.SC_TEST_ECHO = null;

        /**
         * Message Error.
         * @member {S2C.IError|null|undefined} Error
         * @memberof S2C.Message
         * @instance
         */
        Message.prototype.Error = null;

        /**
         * Message LOGIN_SC_LOGIN.
         * @member {S2C.ILOGIN_SC_LOGIN|null|undefined} LOGIN_SC_LOGIN
         * @memberof S2C.Message
         * @instance
         */
        Message.prototype.LOGIN_SC_LOGIN = null;

        /**
         * Message LOGIN_SC_CHOOSE_SERVER.
         * @member {S2C.ILOGIN_SC_CHOOSE_SERVER|null|undefined} LOGIN_SC_CHOOSE_SERVER
         * @memberof S2C.Message
         * @instance
         */
        Message.prototype.LOGIN_SC_CHOOSE_SERVER = null;

        /**
         * Message LOGIN_SC_GET_SERVER_LIST.
         * @member {S2C.ILOGIN_SC_GET_SERVER_LIST|null|undefined} LOGIN_SC_GET_SERVER_LIST
         * @memberof S2C.Message
         * @instance
         */
        Message.prototype.LOGIN_SC_GET_SERVER_LIST = null;

        /**
         * Message LOGIN_SC_GET_INFO.
         * @member {S2C.ILOGIN_SC_GET_INFO|null|undefined} LOGIN_SC_GET_INFO
         * @memberof S2C.Message
         * @instance
         */
        Message.prototype.LOGIN_SC_GET_INFO = null;

        /**
         * Message LOGIN_SC_QUERY.
         * @member {S2C.ILOGIN_SC_QUERY|null|undefined} LOGIN_SC_QUERY
         * @memberof S2C.Message
         * @instance
         */
        Message.prototype.LOGIN_SC_QUERY = null;

        /**
         * Message SC_ROLE_CREATE.
         * @member {S2C.ISC_ROLE_CREATE|null|undefined} SC_ROLE_CREATE
         * @memberof S2C.Message
         * @instance
         */
        Message.prototype.SC_ROLE_CREATE = null;

        /**
         * Message SC_ROLE_ONLINE.
         * @member {S2C.ISC_ROLE_ONLINE|null|undefined} SC_ROLE_ONLINE
         * @memberof S2C.Message
         * @instance
         */
        Message.prototype.SC_ROLE_ONLINE = null;

        /**
         * Message SC_ROLE_HEART_BEAT.
         * @member {S2C.ISC_ROLE_HEART_BEAT|null|undefined} SC_ROLE_HEART_BEAT
         * @memberof S2C.Message
         * @instance
         */
        Message.prototype.SC_ROLE_HEART_BEAT = null;

        /**
         * Message SC_UPDATE_ROLE_PRO.
         * @member {S2C.ISC_UPDATE_ROLE_PRO|null|undefined} SC_UPDATE_ROLE_PRO
         * @memberof S2C.Message
         * @instance
         */
        Message.prototype.SC_UPDATE_ROLE_PRO = null;

        /**
         * Message SC_GET_REWARD.
         * @member {S2C.ISC_GET_REWARD|null|undefined} SC_GET_REWARD
         * @memberof S2C.Message
         * @instance
         */
        Message.prototype.SC_GET_REWARD = null;

        /**
         * Message SC_GM_CMD.
         * @member {S2C.ISC_GM_CMD|null|undefined} SC_GM_CMD
         * @memberof S2C.Message
         * @instance
         */
        Message.prototype.SC_GM_CMD = null;

        /**
         * Message SC_UPDATE_RECHARGE.
         * @member {S2C.ISC_UPDATE_RECHARGE|null|undefined} SC_UPDATE_RECHARGE
         * @memberof S2C.Message
         * @instance
         */
        Message.prototype.SC_UPDATE_RECHARGE = null;

        /**
         * Message SC_ROLE_OFFLINE.
         * @member {S2C.ISC_ROLE_OFFLINE|null|undefined} SC_ROLE_OFFLINE
         * @memberof S2C.Message
         * @instance
         */
        Message.prototype.SC_ROLE_OFFLINE = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * Message kind.
         * @member {"SC_TEST_ECHO"|"Error"|"LOGIN_SC_LOGIN"|"LOGIN_SC_CHOOSE_SERVER"|"LOGIN_SC_GET_SERVER_LIST"|"LOGIN_SC_GET_INFO"|"LOGIN_SC_QUERY"|"SC_ROLE_CREATE"|"SC_ROLE_ONLINE"|"SC_ROLE_HEART_BEAT"|"SC_UPDATE_ROLE_PRO"|"SC_GET_REWARD"|"SC_GM_CMD"|"SC_UPDATE_RECHARGE"|"SC_ROLE_OFFLINE"|undefined} kind
         * @memberof S2C.Message
         * @instance
         */
        Object.defineProperty(Message.prototype, "kind", {
            get: $util.oneOfGetter($oneOfFields = ["SC_TEST_ECHO", "Error", "LOGIN_SC_LOGIN", "LOGIN_SC_CHOOSE_SERVER", "LOGIN_SC_GET_SERVER_LIST", "LOGIN_SC_GET_INFO", "LOGIN_SC_QUERY", "SC_ROLE_CREATE", "SC_ROLE_ONLINE", "SC_ROLE_HEART_BEAT", "SC_UPDATE_ROLE_PRO", "SC_GET_REWARD", "SC_GM_CMD", "SC_UPDATE_RECHARGE", "SC_ROLE_OFFLINE"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Message instance using the specified properties.
         * @function create
         * @memberof S2C.Message
         * @static
         * @param {S2C.IMessage=} [properties] Properties to set
         * @returns {S2C.Message} Message instance
         */
        Message.create = function create(properties) {
            return new Message(properties);
        };

        /**
         * Encodes the specified Message message. Does not implicitly {@link S2C.Message.verify|verify} messages.
         * @function encode
         * @memberof S2C.Message
         * @static
         * @param {S2C.IMessage} message Message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Message.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.SC_TEST_ECHO != null && message.hasOwnProperty("SC_TEST_ECHO"))
                $root.S2C.SC_TEST_ECHO.encode(message.SC_TEST_ECHO, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.Error != null && message.hasOwnProperty("Error"))
                $root.S2C.Error.encode(message.Error, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.LOGIN_SC_LOGIN != null && message.hasOwnProperty("LOGIN_SC_LOGIN"))
                $root.S2C.LOGIN_SC_LOGIN.encode(message.LOGIN_SC_LOGIN, writer.uint32(/* id 1001, wireType 2 =*/8010).fork()).ldelim();
            if (message.LOGIN_SC_CHOOSE_SERVER != null && message.hasOwnProperty("LOGIN_SC_CHOOSE_SERVER"))
                $root.S2C.LOGIN_SC_CHOOSE_SERVER.encode(message.LOGIN_SC_CHOOSE_SERVER, writer.uint32(/* id 1002, wireType 2 =*/8018).fork()).ldelim();
            if (message.LOGIN_SC_GET_SERVER_LIST != null && message.hasOwnProperty("LOGIN_SC_GET_SERVER_LIST"))
                $root.S2C.LOGIN_SC_GET_SERVER_LIST.encode(message.LOGIN_SC_GET_SERVER_LIST, writer.uint32(/* id 1003, wireType 2 =*/8026).fork()).ldelim();
            if (message.LOGIN_SC_GET_INFO != null && message.hasOwnProperty("LOGIN_SC_GET_INFO"))
                $root.S2C.LOGIN_SC_GET_INFO.encode(message.LOGIN_SC_GET_INFO, writer.uint32(/* id 1004, wireType 2 =*/8034).fork()).ldelim();
            if (message.LOGIN_SC_QUERY != null && message.hasOwnProperty("LOGIN_SC_QUERY"))
                $root.S2C.LOGIN_SC_QUERY.encode(message.LOGIN_SC_QUERY, writer.uint32(/* id 1005, wireType 2 =*/8042).fork()).ldelim();
            if (message.SC_ROLE_CREATE != null && message.hasOwnProperty("SC_ROLE_CREATE"))
                $root.S2C.SC_ROLE_CREATE.encode(message.SC_ROLE_CREATE, writer.uint32(/* id 2001, wireType 2 =*/16010).fork()).ldelim();
            if (message.SC_ROLE_ONLINE != null && message.hasOwnProperty("SC_ROLE_ONLINE"))
                $root.S2C.SC_ROLE_ONLINE.encode(message.SC_ROLE_ONLINE, writer.uint32(/* id 2002, wireType 2 =*/16018).fork()).ldelim();
            if (message.SC_ROLE_HEART_BEAT != null && message.hasOwnProperty("SC_ROLE_HEART_BEAT"))
                $root.S2C.SC_ROLE_HEART_BEAT.encode(message.SC_ROLE_HEART_BEAT, writer.uint32(/* id 2003, wireType 2 =*/16026).fork()).ldelim();
            if (message.SC_UPDATE_ROLE_PRO != null && message.hasOwnProperty("SC_UPDATE_ROLE_PRO"))
                $root.S2C.SC_UPDATE_ROLE_PRO.encode(message.SC_UPDATE_ROLE_PRO, writer.uint32(/* id 2004, wireType 2 =*/16034).fork()).ldelim();
            if (message.SC_GET_REWARD != null && message.hasOwnProperty("SC_GET_REWARD"))
                $root.S2C.SC_GET_REWARD.encode(message.SC_GET_REWARD, writer.uint32(/* id 2005, wireType 2 =*/16042).fork()).ldelim();
            if (message.SC_GM_CMD != null && message.hasOwnProperty("SC_GM_CMD"))
                $root.S2C.SC_GM_CMD.encode(message.SC_GM_CMD, writer.uint32(/* id 2006, wireType 2 =*/16050).fork()).ldelim();
            if (message.SC_UPDATE_RECHARGE != null && message.hasOwnProperty("SC_UPDATE_RECHARGE"))
                $root.S2C.SC_UPDATE_RECHARGE.encode(message.SC_UPDATE_RECHARGE, writer.uint32(/* id 2007, wireType 2 =*/16058).fork()).ldelim();
            if (message.SC_ROLE_OFFLINE != null && message.hasOwnProperty("SC_ROLE_OFFLINE"))
                $root.S2C.SC_ROLE_OFFLINE.encode(message.SC_ROLE_OFFLINE, writer.uint32(/* id 2008, wireType 2 =*/16066).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Message message, length delimited. Does not implicitly {@link S2C.Message.verify|verify} messages.
         * @function encodeDelimited
         * @memberof S2C.Message
         * @static
         * @param {S2C.IMessage} message Message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Message.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Message message from the specified reader or buffer.
         * @function decode
         * @memberof S2C.Message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {S2C.Message} Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Message.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2C.Message();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.SC_TEST_ECHO = $root.S2C.SC_TEST_ECHO.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.Error = $root.S2C.Error.decode(reader, reader.uint32());
                    break;
                case 1001:
                    message.LOGIN_SC_LOGIN = $root.S2C.LOGIN_SC_LOGIN.decode(reader, reader.uint32());
                    break;
                case 1002:
                    message.LOGIN_SC_CHOOSE_SERVER = $root.S2C.LOGIN_SC_CHOOSE_SERVER.decode(reader, reader.uint32());
                    break;
                case 1003:
                    message.LOGIN_SC_GET_SERVER_LIST = $root.S2C.LOGIN_SC_GET_SERVER_LIST.decode(reader, reader.uint32());
                    break;
                case 1004:
                    message.LOGIN_SC_GET_INFO = $root.S2C.LOGIN_SC_GET_INFO.decode(reader, reader.uint32());
                    break;
                case 1005:
                    message.LOGIN_SC_QUERY = $root.S2C.LOGIN_SC_QUERY.decode(reader, reader.uint32());
                    break;
                case 2001:
                    message.SC_ROLE_CREATE = $root.S2C.SC_ROLE_CREATE.decode(reader, reader.uint32());
                    break;
                case 2002:
                    message.SC_ROLE_ONLINE = $root.S2C.SC_ROLE_ONLINE.decode(reader, reader.uint32());
                    break;
                case 2003:
                    message.SC_ROLE_HEART_BEAT = $root.S2C.SC_ROLE_HEART_BEAT.decode(reader, reader.uint32());
                    break;
                case 2004:
                    message.SC_UPDATE_ROLE_PRO = $root.S2C.SC_UPDATE_ROLE_PRO.decode(reader, reader.uint32());
                    break;
                case 2005:
                    message.SC_GET_REWARD = $root.S2C.SC_GET_REWARD.decode(reader, reader.uint32());
                    break;
                case 2006:
                    message.SC_GM_CMD = $root.S2C.SC_GM_CMD.decode(reader, reader.uint32());
                    break;
                case 2007:
                    message.SC_UPDATE_RECHARGE = $root.S2C.SC_UPDATE_RECHARGE.decode(reader, reader.uint32());
                    break;
                case 2008:
                    message.SC_ROLE_OFFLINE = $root.S2C.SC_ROLE_OFFLINE.decode(reader, reader.uint32());
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
         * @memberof S2C.Message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {S2C.Message} Message
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
         * @memberof S2C.Message
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Message.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.SC_TEST_ECHO != null && message.hasOwnProperty("SC_TEST_ECHO")) {
                properties.kind = 1;
                {
                    var error = $root.S2C.SC_TEST_ECHO.verify(message.SC_TEST_ECHO);
                    if (error)
                        return "SC_TEST_ECHO." + error;
                }
            }
            if (message.Error != null && message.hasOwnProperty("Error")) {
                if (properties.kind === 1)
                    return "kind: multiple values";
                properties.kind = 1;
                {
                    var error = $root.S2C.Error.verify(message.Error);
                    if (error)
                        return "Error." + error;
                }
            }
            if (message.LOGIN_SC_LOGIN != null && message.hasOwnProperty("LOGIN_SC_LOGIN")) {
                if (properties.kind === 1)
                    return "kind: multiple values";
                properties.kind = 1;
                {
                    var error = $root.S2C.LOGIN_SC_LOGIN.verify(message.LOGIN_SC_LOGIN);
                    if (error)
                        return "LOGIN_SC_LOGIN." + error;
                }
            }
            if (message.LOGIN_SC_CHOOSE_SERVER != null && message.hasOwnProperty("LOGIN_SC_CHOOSE_SERVER")) {
                if (properties.kind === 1)
                    return "kind: multiple values";
                properties.kind = 1;
                {
                    var error = $root.S2C.LOGIN_SC_CHOOSE_SERVER.verify(message.LOGIN_SC_CHOOSE_SERVER);
                    if (error)
                        return "LOGIN_SC_CHOOSE_SERVER." + error;
                }
            }
            if (message.LOGIN_SC_GET_SERVER_LIST != null && message.hasOwnProperty("LOGIN_SC_GET_SERVER_LIST")) {
                if (properties.kind === 1)
                    return "kind: multiple values";
                properties.kind = 1;
                {
                    var error = $root.S2C.LOGIN_SC_GET_SERVER_LIST.verify(message.LOGIN_SC_GET_SERVER_LIST);
                    if (error)
                        return "LOGIN_SC_GET_SERVER_LIST." + error;
                }
            }
            if (message.LOGIN_SC_GET_INFO != null && message.hasOwnProperty("LOGIN_SC_GET_INFO")) {
                if (properties.kind === 1)
                    return "kind: multiple values";
                properties.kind = 1;
                {
                    var error = $root.S2C.LOGIN_SC_GET_INFO.verify(message.LOGIN_SC_GET_INFO);
                    if (error)
                        return "LOGIN_SC_GET_INFO." + error;
                }
            }
            if (message.LOGIN_SC_QUERY != null && message.hasOwnProperty("LOGIN_SC_QUERY")) {
                if (properties.kind === 1)
                    return "kind: multiple values";
                properties.kind = 1;
                {
                    var error = $root.S2C.LOGIN_SC_QUERY.verify(message.LOGIN_SC_QUERY);
                    if (error)
                        return "LOGIN_SC_QUERY." + error;
                }
            }
            if (message.SC_ROLE_CREATE != null && message.hasOwnProperty("SC_ROLE_CREATE")) {
                if (properties.kind === 1)
                    return "kind: multiple values";
                properties.kind = 1;
                {
                    var error = $root.S2C.SC_ROLE_CREATE.verify(message.SC_ROLE_CREATE);
                    if (error)
                        return "SC_ROLE_CREATE." + error;
                }
            }
            if (message.SC_ROLE_ONLINE != null && message.hasOwnProperty("SC_ROLE_ONLINE")) {
                if (properties.kind === 1)
                    return "kind: multiple values";
                properties.kind = 1;
                {
                    var error = $root.S2C.SC_ROLE_ONLINE.verify(message.SC_ROLE_ONLINE);
                    if (error)
                        return "SC_ROLE_ONLINE." + error;
                }
            }
            if (message.SC_ROLE_HEART_BEAT != null && message.hasOwnProperty("SC_ROLE_HEART_BEAT")) {
                if (properties.kind === 1)
                    return "kind: multiple values";
                properties.kind = 1;
                {
                    var error = $root.S2C.SC_ROLE_HEART_BEAT.verify(message.SC_ROLE_HEART_BEAT);
                    if (error)
                        return "SC_ROLE_HEART_BEAT." + error;
                }
            }
            if (message.SC_UPDATE_ROLE_PRO != null && message.hasOwnProperty("SC_UPDATE_ROLE_PRO")) {
                if (properties.kind === 1)
                    return "kind: multiple values";
                properties.kind = 1;
                {
                    var error = $root.S2C.SC_UPDATE_ROLE_PRO.verify(message.SC_UPDATE_ROLE_PRO);
                    if (error)
                        return "SC_UPDATE_ROLE_PRO." + error;
                }
            }
            if (message.SC_GET_REWARD != null && message.hasOwnProperty("SC_GET_REWARD")) {
                if (properties.kind === 1)
                    return "kind: multiple values";
                properties.kind = 1;
                {
                    var error = $root.S2C.SC_GET_REWARD.verify(message.SC_GET_REWARD);
                    if (error)
                        return "SC_GET_REWARD." + error;
                }
            }
            if (message.SC_GM_CMD != null && message.hasOwnProperty("SC_GM_CMD")) {
                if (properties.kind === 1)
                    return "kind: multiple values";
                properties.kind = 1;
                {
                    var error = $root.S2C.SC_GM_CMD.verify(message.SC_GM_CMD);
                    if (error)
                        return "SC_GM_CMD." + error;
                }
            }
            if (message.SC_UPDATE_RECHARGE != null && message.hasOwnProperty("SC_UPDATE_RECHARGE")) {
                if (properties.kind === 1)
                    return "kind: multiple values";
                properties.kind = 1;
                {
                    var error = $root.S2C.SC_UPDATE_RECHARGE.verify(message.SC_UPDATE_RECHARGE);
                    if (error)
                        return "SC_UPDATE_RECHARGE." + error;
                }
            }
            if (message.SC_ROLE_OFFLINE != null && message.hasOwnProperty("SC_ROLE_OFFLINE")) {
                if (properties.kind === 1)
                    return "kind: multiple values";
                properties.kind = 1;
                {
                    var error = $root.S2C.SC_ROLE_OFFLINE.verify(message.SC_ROLE_OFFLINE);
                    if (error)
                        return "SC_ROLE_OFFLINE." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Message message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof S2C.Message
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {S2C.Message} Message
         */
        Message.fromObject = function fromObject(object) {
            if (object instanceof $root.S2C.Message)
                return object;
            var message = new $root.S2C.Message();
            if (object.SC_TEST_ECHO != null) {
                if (typeof object.SC_TEST_ECHO !== "object")
                    throw TypeError(".S2C.Message.SC_TEST_ECHO: object expected");
                message.SC_TEST_ECHO = $root.S2C.SC_TEST_ECHO.fromObject(object.SC_TEST_ECHO);
            }
            if (object.Error != null) {
                if (typeof object.Error !== "object")
                    throw TypeError(".S2C.Message.Error: object expected");
                message.Error = $root.S2C.Error.fromObject(object.Error);
            }
            if (object.LOGIN_SC_LOGIN != null) {
                if (typeof object.LOGIN_SC_LOGIN !== "object")
                    throw TypeError(".S2C.Message.LOGIN_SC_LOGIN: object expected");
                message.LOGIN_SC_LOGIN = $root.S2C.LOGIN_SC_LOGIN.fromObject(object.LOGIN_SC_LOGIN);
            }
            if (object.LOGIN_SC_CHOOSE_SERVER != null) {
                if (typeof object.LOGIN_SC_CHOOSE_SERVER !== "object")
                    throw TypeError(".S2C.Message.LOGIN_SC_CHOOSE_SERVER: object expected");
                message.LOGIN_SC_CHOOSE_SERVER = $root.S2C.LOGIN_SC_CHOOSE_SERVER.fromObject(object.LOGIN_SC_CHOOSE_SERVER);
            }
            if (object.LOGIN_SC_GET_SERVER_LIST != null) {
                if (typeof object.LOGIN_SC_GET_SERVER_LIST !== "object")
                    throw TypeError(".S2C.Message.LOGIN_SC_GET_SERVER_LIST: object expected");
                message.LOGIN_SC_GET_SERVER_LIST = $root.S2C.LOGIN_SC_GET_SERVER_LIST.fromObject(object.LOGIN_SC_GET_SERVER_LIST);
            }
            if (object.LOGIN_SC_GET_INFO != null) {
                if (typeof object.LOGIN_SC_GET_INFO !== "object")
                    throw TypeError(".S2C.Message.LOGIN_SC_GET_INFO: object expected");
                message.LOGIN_SC_GET_INFO = $root.S2C.LOGIN_SC_GET_INFO.fromObject(object.LOGIN_SC_GET_INFO);
            }
            if (object.LOGIN_SC_QUERY != null) {
                if (typeof object.LOGIN_SC_QUERY !== "object")
                    throw TypeError(".S2C.Message.LOGIN_SC_QUERY: object expected");
                message.LOGIN_SC_QUERY = $root.S2C.LOGIN_SC_QUERY.fromObject(object.LOGIN_SC_QUERY);
            }
            if (object.SC_ROLE_CREATE != null) {
                if (typeof object.SC_ROLE_CREATE !== "object")
                    throw TypeError(".S2C.Message.SC_ROLE_CREATE: object expected");
                message.SC_ROLE_CREATE = $root.S2C.SC_ROLE_CREATE.fromObject(object.SC_ROLE_CREATE);
            }
            if (object.SC_ROLE_ONLINE != null) {
                if (typeof object.SC_ROLE_ONLINE !== "object")
                    throw TypeError(".S2C.Message.SC_ROLE_ONLINE: object expected");
                message.SC_ROLE_ONLINE = $root.S2C.SC_ROLE_ONLINE.fromObject(object.SC_ROLE_ONLINE);
            }
            if (object.SC_ROLE_HEART_BEAT != null) {
                if (typeof object.SC_ROLE_HEART_BEAT !== "object")
                    throw TypeError(".S2C.Message.SC_ROLE_HEART_BEAT: object expected");
                message.SC_ROLE_HEART_BEAT = $root.S2C.SC_ROLE_HEART_BEAT.fromObject(object.SC_ROLE_HEART_BEAT);
            }
            if (object.SC_UPDATE_ROLE_PRO != null) {
                if (typeof object.SC_UPDATE_ROLE_PRO !== "object")
                    throw TypeError(".S2C.Message.SC_UPDATE_ROLE_PRO: object expected");
                message.SC_UPDATE_ROLE_PRO = $root.S2C.SC_UPDATE_ROLE_PRO.fromObject(object.SC_UPDATE_ROLE_PRO);
            }
            if (object.SC_GET_REWARD != null) {
                if (typeof object.SC_GET_REWARD !== "object")
                    throw TypeError(".S2C.Message.SC_GET_REWARD: object expected");
                message.SC_GET_REWARD = $root.S2C.SC_GET_REWARD.fromObject(object.SC_GET_REWARD);
            }
            if (object.SC_GM_CMD != null) {
                if (typeof object.SC_GM_CMD !== "object")
                    throw TypeError(".S2C.Message.SC_GM_CMD: object expected");
                message.SC_GM_CMD = $root.S2C.SC_GM_CMD.fromObject(object.SC_GM_CMD);
            }
            if (object.SC_UPDATE_RECHARGE != null) {
                if (typeof object.SC_UPDATE_RECHARGE !== "object")
                    throw TypeError(".S2C.Message.SC_UPDATE_RECHARGE: object expected");
                message.SC_UPDATE_RECHARGE = $root.S2C.SC_UPDATE_RECHARGE.fromObject(object.SC_UPDATE_RECHARGE);
            }
            if (object.SC_ROLE_OFFLINE != null) {
                if (typeof object.SC_ROLE_OFFLINE !== "object")
                    throw TypeError(".S2C.Message.SC_ROLE_OFFLINE: object expected");
                message.SC_ROLE_OFFLINE = $root.S2C.SC_ROLE_OFFLINE.fromObject(object.SC_ROLE_OFFLINE);
            }
            return message;
        };

        /**
         * Creates a plain object from a Message message. Also converts values to other types if specified.
         * @function toObject
         * @memberof S2C.Message
         * @static
         * @param {S2C.Message} message Message
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Message.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.SC_TEST_ECHO != null && message.hasOwnProperty("SC_TEST_ECHO")) {
                object.SC_TEST_ECHO = $root.S2C.SC_TEST_ECHO.toObject(message.SC_TEST_ECHO, options);
                if (options.oneofs)
                    object.kind = "SC_TEST_ECHO";
            }
            if (message.Error != null && message.hasOwnProperty("Error")) {
                object.Error = $root.S2C.Error.toObject(message.Error, options);
                if (options.oneofs)
                    object.kind = "Error";
            }
            if (message.LOGIN_SC_LOGIN != null && message.hasOwnProperty("LOGIN_SC_LOGIN")) {
                object.LOGIN_SC_LOGIN = $root.S2C.LOGIN_SC_LOGIN.toObject(message.LOGIN_SC_LOGIN, options);
                if (options.oneofs)
                    object.kind = "LOGIN_SC_LOGIN";
            }
            if (message.LOGIN_SC_CHOOSE_SERVER != null && message.hasOwnProperty("LOGIN_SC_CHOOSE_SERVER")) {
                object.LOGIN_SC_CHOOSE_SERVER = $root.S2C.LOGIN_SC_CHOOSE_SERVER.toObject(message.LOGIN_SC_CHOOSE_SERVER, options);
                if (options.oneofs)
                    object.kind = "LOGIN_SC_CHOOSE_SERVER";
            }
            if (message.LOGIN_SC_GET_SERVER_LIST != null && message.hasOwnProperty("LOGIN_SC_GET_SERVER_LIST")) {
                object.LOGIN_SC_GET_SERVER_LIST = $root.S2C.LOGIN_SC_GET_SERVER_LIST.toObject(message.LOGIN_SC_GET_SERVER_LIST, options);
                if (options.oneofs)
                    object.kind = "LOGIN_SC_GET_SERVER_LIST";
            }
            if (message.LOGIN_SC_GET_INFO != null && message.hasOwnProperty("LOGIN_SC_GET_INFO")) {
                object.LOGIN_SC_GET_INFO = $root.S2C.LOGIN_SC_GET_INFO.toObject(message.LOGIN_SC_GET_INFO, options);
                if (options.oneofs)
                    object.kind = "LOGIN_SC_GET_INFO";
            }
            if (message.LOGIN_SC_QUERY != null && message.hasOwnProperty("LOGIN_SC_QUERY")) {
                object.LOGIN_SC_QUERY = $root.S2C.LOGIN_SC_QUERY.toObject(message.LOGIN_SC_QUERY, options);
                if (options.oneofs)
                    object.kind = "LOGIN_SC_QUERY";
            }
            if (message.SC_ROLE_CREATE != null && message.hasOwnProperty("SC_ROLE_CREATE")) {
                object.SC_ROLE_CREATE = $root.S2C.SC_ROLE_CREATE.toObject(message.SC_ROLE_CREATE, options);
                if (options.oneofs)
                    object.kind = "SC_ROLE_CREATE";
            }
            if (message.SC_ROLE_ONLINE != null && message.hasOwnProperty("SC_ROLE_ONLINE")) {
                object.SC_ROLE_ONLINE = $root.S2C.SC_ROLE_ONLINE.toObject(message.SC_ROLE_ONLINE, options);
                if (options.oneofs)
                    object.kind = "SC_ROLE_ONLINE";
            }
            if (message.SC_ROLE_HEART_BEAT != null && message.hasOwnProperty("SC_ROLE_HEART_BEAT")) {
                object.SC_ROLE_HEART_BEAT = $root.S2C.SC_ROLE_HEART_BEAT.toObject(message.SC_ROLE_HEART_BEAT, options);
                if (options.oneofs)
                    object.kind = "SC_ROLE_HEART_BEAT";
            }
            if (message.SC_UPDATE_ROLE_PRO != null && message.hasOwnProperty("SC_UPDATE_ROLE_PRO")) {
                object.SC_UPDATE_ROLE_PRO = $root.S2C.SC_UPDATE_ROLE_PRO.toObject(message.SC_UPDATE_ROLE_PRO, options);
                if (options.oneofs)
                    object.kind = "SC_UPDATE_ROLE_PRO";
            }
            if (message.SC_GET_REWARD != null && message.hasOwnProperty("SC_GET_REWARD")) {
                object.SC_GET_REWARD = $root.S2C.SC_GET_REWARD.toObject(message.SC_GET_REWARD, options);
                if (options.oneofs)
                    object.kind = "SC_GET_REWARD";
            }
            if (message.SC_GM_CMD != null && message.hasOwnProperty("SC_GM_CMD")) {
                object.SC_GM_CMD = $root.S2C.SC_GM_CMD.toObject(message.SC_GM_CMD, options);
                if (options.oneofs)
                    object.kind = "SC_GM_CMD";
            }
            if (message.SC_UPDATE_RECHARGE != null && message.hasOwnProperty("SC_UPDATE_RECHARGE")) {
                object.SC_UPDATE_RECHARGE = $root.S2C.SC_UPDATE_RECHARGE.toObject(message.SC_UPDATE_RECHARGE, options);
                if (options.oneofs)
                    object.kind = "SC_UPDATE_RECHARGE";
            }
            if (message.SC_ROLE_OFFLINE != null && message.hasOwnProperty("SC_ROLE_OFFLINE")) {
                object.SC_ROLE_OFFLINE = $root.S2C.SC_ROLE_OFFLINE.toObject(message.SC_ROLE_OFFLINE, options);
                if (options.oneofs)
                    object.kind = "SC_ROLE_OFFLINE";
            }
            return object;
        };

        /**
         * Converts this Message to JSON.
         * @function toJSON
         * @memberof S2C.Message
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Message.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Message;
    })();

    S2C.Error = (function() {

        /**
         * Properties of an Error.
         * @memberof S2C
         * @interface IError
         * @property {number|null} [id] Error id
         * @property {string|null} [msg] Error msg
         */

        /**
         * Constructs a new Error.
         * @memberof S2C
         * @classdesc Represents an Error.
         * @implements IError
         * @constructor
         * @param {S2C.IError=} [properties] Properties to set
         */
        function Error(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Error id.
         * @member {number} id
         * @memberof S2C.Error
         * @instance
         */
        Error.prototype.id = 0;

        /**
         * Error msg.
         * @member {string} msg
         * @memberof S2C.Error
         * @instance
         */
        Error.prototype.msg = "";

        /**
         * Creates a new Error instance using the specified properties.
         * @function create
         * @memberof S2C.Error
         * @static
         * @param {S2C.IError=} [properties] Properties to set
         * @returns {S2C.Error} Error instance
         */
        Error.create = function create(properties) {
            return new Error(properties);
        };

        /**
         * Encodes the specified Error message. Does not implicitly {@link S2C.Error.verify|verify} messages.
         * @function encode
         * @memberof S2C.Error
         * @static
         * @param {S2C.IError} message Error message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Error.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.msg != null && message.hasOwnProperty("msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            return writer;
        };

        /**
         * Encodes the specified Error message, length delimited. Does not implicitly {@link S2C.Error.verify|verify} messages.
         * @function encodeDelimited
         * @memberof S2C.Error
         * @static
         * @param {S2C.IError} message Error message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Error.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Error message from the specified reader or buffer.
         * @function decode
         * @memberof S2C.Error
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {S2C.Error} Error
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Error.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2C.Error();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.int32();
                    break;
                case 2:
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
         * Decodes an Error message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof S2C.Error
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {S2C.Error} Error
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Error.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Error message.
         * @function verify
         * @memberof S2C.Error
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Error.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            return null;
        };

        /**
         * Creates an Error message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof S2C.Error
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {S2C.Error} Error
         */
        Error.fromObject = function fromObject(object) {
            if (object instanceof $root.S2C.Error)
                return object;
            var message = new $root.S2C.Error();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            return message;
        };

        /**
         * Creates a plain object from an Error message. Also converts values to other types if specified.
         * @function toObject
         * @memberof S2C.Error
         * @static
         * @param {S2C.Error} message Error
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Error.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = 0;
                object.msg = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            return object;
        };

        /**
         * Converts this Error to JSON.
         * @function toJSON
         * @memberof S2C.Error
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Error.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Error;
    })();

    S2C.SC_ROLE_DETAIL = (function() {

        /**
         * Properties of a SC_ROLE_DETAIL.
         * @memberof S2C
         * @interface ISC_ROLE_DETAIL
         * @property {S2C.IRoleSummary|null} [summary] SC_ROLE_DETAIL summary
         */

        /**
         * Constructs a new SC_ROLE_DETAIL.
         * @memberof S2C
         * @classdesc Represents a SC_ROLE_DETAIL.
         * @implements ISC_ROLE_DETAIL
         * @constructor
         * @param {S2C.ISC_ROLE_DETAIL=} [properties] Properties to set
         */
        function SC_ROLE_DETAIL(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SC_ROLE_DETAIL summary.
         * @member {S2C.IRoleSummary|null|undefined} summary
         * @memberof S2C.SC_ROLE_DETAIL
         * @instance
         */
        SC_ROLE_DETAIL.prototype.summary = null;

        /**
         * Creates a new SC_ROLE_DETAIL instance using the specified properties.
         * @function create
         * @memberof S2C.SC_ROLE_DETAIL
         * @static
         * @param {S2C.ISC_ROLE_DETAIL=} [properties] Properties to set
         * @returns {S2C.SC_ROLE_DETAIL} SC_ROLE_DETAIL instance
         */
        SC_ROLE_DETAIL.create = function create(properties) {
            return new SC_ROLE_DETAIL(properties);
        };

        /**
         * Encodes the specified SC_ROLE_DETAIL message. Does not implicitly {@link S2C.SC_ROLE_DETAIL.verify|verify} messages.
         * @function encode
         * @memberof S2C.SC_ROLE_DETAIL
         * @static
         * @param {S2C.ISC_ROLE_DETAIL} message SC_ROLE_DETAIL message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SC_ROLE_DETAIL.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.summary != null && message.hasOwnProperty("summary"))
                $root.S2C.RoleSummary.encode(message.summary, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SC_ROLE_DETAIL message, length delimited. Does not implicitly {@link S2C.SC_ROLE_DETAIL.verify|verify} messages.
         * @function encodeDelimited
         * @memberof S2C.SC_ROLE_DETAIL
         * @static
         * @param {S2C.ISC_ROLE_DETAIL} message SC_ROLE_DETAIL message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SC_ROLE_DETAIL.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SC_ROLE_DETAIL message from the specified reader or buffer.
         * @function decode
         * @memberof S2C.SC_ROLE_DETAIL
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {S2C.SC_ROLE_DETAIL} SC_ROLE_DETAIL
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SC_ROLE_DETAIL.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2C.SC_ROLE_DETAIL();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.summary = $root.S2C.RoleSummary.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SC_ROLE_DETAIL message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof S2C.SC_ROLE_DETAIL
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {S2C.SC_ROLE_DETAIL} SC_ROLE_DETAIL
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SC_ROLE_DETAIL.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SC_ROLE_DETAIL message.
         * @function verify
         * @memberof S2C.SC_ROLE_DETAIL
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SC_ROLE_DETAIL.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.summary != null && message.hasOwnProperty("summary")) {
                var error = $root.S2C.RoleSummary.verify(message.summary);
                if (error)
                    return "summary." + error;
            }
            return null;
        };

        /**
         * Creates a SC_ROLE_DETAIL message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof S2C.SC_ROLE_DETAIL
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {S2C.SC_ROLE_DETAIL} SC_ROLE_DETAIL
         */
        SC_ROLE_DETAIL.fromObject = function fromObject(object) {
            if (object instanceof $root.S2C.SC_ROLE_DETAIL)
                return object;
            var message = new $root.S2C.SC_ROLE_DETAIL();
            if (object.summary != null) {
                if (typeof object.summary !== "object")
                    throw TypeError(".S2C.SC_ROLE_DETAIL.summary: object expected");
                message.summary = $root.S2C.RoleSummary.fromObject(object.summary);
            }
            return message;
        };

        /**
         * Creates a plain object from a SC_ROLE_DETAIL message. Also converts values to other types if specified.
         * @function toObject
         * @memberof S2C.SC_ROLE_DETAIL
         * @static
         * @param {S2C.SC_ROLE_DETAIL} message SC_ROLE_DETAIL
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SC_ROLE_DETAIL.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.summary = null;
            if (message.summary != null && message.hasOwnProperty("summary"))
                object.summary = $root.S2C.RoleSummary.toObject(message.summary, options);
            return object;
        };

        /**
         * Converts this SC_ROLE_DETAIL to JSON.
         * @function toJSON
         * @memberof S2C.SC_ROLE_DETAIL
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SC_ROLE_DETAIL.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SC_ROLE_DETAIL;
    })();

    S2C.Reward = (function() {

        /**
         * Properties of a Reward.
         * @memberof S2C
         * @interface IReward
         * @property {number|null} [type] Reward type
         * @property {number|null} [id] Reward id
         * @property {number|Long|null} [value] Reward value
         */

        /**
         * Constructs a new Reward.
         * @memberof S2C
         * @classdesc Represents a Reward.
         * @implements IReward
         * @constructor
         * @param {S2C.IReward=} [properties] Properties to set
         */
        function Reward(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Reward type.
         * @member {number} type
         * @memberof S2C.Reward
         * @instance
         */
        Reward.prototype.type = 0;

        /**
         * Reward id.
         * @member {number} id
         * @memberof S2C.Reward
         * @instance
         */
        Reward.prototype.id = 0;

        /**
         * Reward value.
         * @member {number|Long} value
         * @memberof S2C.Reward
         * @instance
         */
        Reward.prototype.value = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new Reward instance using the specified properties.
         * @function create
         * @memberof S2C.Reward
         * @static
         * @param {S2C.IReward=} [properties] Properties to set
         * @returns {S2C.Reward} Reward instance
         */
        Reward.create = function create(properties) {
            return new Reward(properties);
        };

        /**
         * Encodes the specified Reward message. Does not implicitly {@link S2C.Reward.verify|verify} messages.
         * @function encode
         * @memberof S2C.Reward
         * @static
         * @param {S2C.IReward} message Reward message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Reward.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.type);
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.id);
            if (message.value != null && message.hasOwnProperty("value"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.value);
            return writer;
        };

        /**
         * Encodes the specified Reward message, length delimited. Does not implicitly {@link S2C.Reward.verify|verify} messages.
         * @function encodeDelimited
         * @memberof S2C.Reward
         * @static
         * @param {S2C.IReward} message Reward message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Reward.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Reward message from the specified reader or buffer.
         * @function decode
         * @memberof S2C.Reward
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {S2C.Reward} Reward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Reward.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2C.Reward();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.uint32();
                    break;
                case 2:
                    message.id = reader.uint32();
                    break;
                case 3:
                    message.value = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Reward message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof S2C.Reward
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {S2C.Reward} Reward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Reward.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Reward message.
         * @function verify
         * @memberof S2C.Reward
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Reward.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isInteger(message.type))
                    return "type: integer expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (!$util.isInteger(message.value) && !(message.value && $util.isInteger(message.value.low) && $util.isInteger(message.value.high)))
                    return "value: integer|Long expected";
            return null;
        };

        /**
         * Creates a Reward message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof S2C.Reward
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {S2C.Reward} Reward
         */
        Reward.fromObject = function fromObject(object) {
            if (object instanceof $root.S2C.Reward)
                return object;
            var message = new $root.S2C.Reward();
            if (object.type != null)
                message.type = object.type >>> 0;
            if (object.id != null)
                message.id = object.id >>> 0;
            if (object.value != null)
                if ($util.Long)
                    (message.value = $util.Long.fromValue(object.value)).unsigned = false;
                else if (typeof object.value === "string")
                    message.value = parseInt(object.value, 10);
                else if (typeof object.value === "number")
                    message.value = object.value;
                else if (typeof object.value === "object")
                    message.value = new $util.LongBits(object.value.low >>> 0, object.value.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a Reward message. Also converts values to other types if specified.
         * @function toObject
         * @memberof S2C.Reward
         * @static
         * @param {S2C.Reward} message Reward
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Reward.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.type = 0;
                object.id = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.value = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.value = options.longs === String ? "0" : 0;
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.value != null && message.hasOwnProperty("value"))
                if (typeof message.value === "number")
                    object.value = options.longs === String ? String(message.value) : message.value;
                else
                    object.value = options.longs === String ? $util.Long.prototype.toString.call(message.value) : options.longs === Number ? new $util.LongBits(message.value.low >>> 0, message.value.high >>> 0).toNumber() : message.value;
            return object;
        };

        /**
         * Converts this Reward to JSON.
         * @function toJSON
         * @memberof S2C.Reward
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Reward.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Reward;
    })();

    S2C.SC_GET_REWARD = (function() {

        /**
         * Properties of a SC_GET_REWARD.
         * @memberof S2C
         * @interface ISC_GET_REWARD
         * @property {Array.<S2C.IReward>|null} [reward] SC_GET_REWARD reward
         */

        /**
         * Constructs a new SC_GET_REWARD.
         * @memberof S2C
         * @classdesc Represents a SC_GET_REWARD.
         * @implements ISC_GET_REWARD
         * @constructor
         * @param {S2C.ISC_GET_REWARD=} [properties] Properties to set
         */
        function SC_GET_REWARD(properties) {
            this.reward = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SC_GET_REWARD reward.
         * @member {Array.<S2C.IReward>} reward
         * @memberof S2C.SC_GET_REWARD
         * @instance
         */
        SC_GET_REWARD.prototype.reward = $util.emptyArray;

        /**
         * Creates a new SC_GET_REWARD instance using the specified properties.
         * @function create
         * @memberof S2C.SC_GET_REWARD
         * @static
         * @param {S2C.ISC_GET_REWARD=} [properties] Properties to set
         * @returns {S2C.SC_GET_REWARD} SC_GET_REWARD instance
         */
        SC_GET_REWARD.create = function create(properties) {
            return new SC_GET_REWARD(properties);
        };

        /**
         * Encodes the specified SC_GET_REWARD message. Does not implicitly {@link S2C.SC_GET_REWARD.verify|verify} messages.
         * @function encode
         * @memberof S2C.SC_GET_REWARD
         * @static
         * @param {S2C.ISC_GET_REWARD} message SC_GET_REWARD message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SC_GET_REWARD.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.reward != null && message.reward.length)
                for (var i = 0; i < message.reward.length; ++i)
                    $root.S2C.Reward.encode(message.reward[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SC_GET_REWARD message, length delimited. Does not implicitly {@link S2C.SC_GET_REWARD.verify|verify} messages.
         * @function encodeDelimited
         * @memberof S2C.SC_GET_REWARD
         * @static
         * @param {S2C.ISC_GET_REWARD} message SC_GET_REWARD message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SC_GET_REWARD.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SC_GET_REWARD message from the specified reader or buffer.
         * @function decode
         * @memberof S2C.SC_GET_REWARD
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {S2C.SC_GET_REWARD} SC_GET_REWARD
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SC_GET_REWARD.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2C.SC_GET_REWARD();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.reward && message.reward.length))
                        message.reward = [];
                    message.reward.push($root.S2C.Reward.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SC_GET_REWARD message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof S2C.SC_GET_REWARD
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {S2C.SC_GET_REWARD} SC_GET_REWARD
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SC_GET_REWARD.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SC_GET_REWARD message.
         * @function verify
         * @memberof S2C.SC_GET_REWARD
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SC_GET_REWARD.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.reward != null && message.hasOwnProperty("reward")) {
                if (!Array.isArray(message.reward))
                    return "reward: array expected";
                for (var i = 0; i < message.reward.length; ++i) {
                    var error = $root.S2C.Reward.verify(message.reward[i]);
                    if (error)
                        return "reward." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SC_GET_REWARD message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof S2C.SC_GET_REWARD
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {S2C.SC_GET_REWARD} SC_GET_REWARD
         */
        SC_GET_REWARD.fromObject = function fromObject(object) {
            if (object instanceof $root.S2C.SC_GET_REWARD)
                return object;
            var message = new $root.S2C.SC_GET_REWARD();
            if (object.reward) {
                if (!Array.isArray(object.reward))
                    throw TypeError(".S2C.SC_GET_REWARD.reward: array expected");
                message.reward = [];
                for (var i = 0; i < object.reward.length; ++i) {
                    if (typeof object.reward[i] !== "object")
                        throw TypeError(".S2C.SC_GET_REWARD.reward: object expected");
                    message.reward[i] = $root.S2C.Reward.fromObject(object.reward[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SC_GET_REWARD message. Also converts values to other types if specified.
         * @function toObject
         * @memberof S2C.SC_GET_REWARD
         * @static
         * @param {S2C.SC_GET_REWARD} message SC_GET_REWARD
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SC_GET_REWARD.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.reward = [];
            if (message.reward && message.reward.length) {
                object.reward = [];
                for (var j = 0; j < message.reward.length; ++j)
                    object.reward[j] = $root.S2C.Reward.toObject(message.reward[j], options);
            }
            return object;
        };

        /**
         * Converts this SC_GET_REWARD to JSON.
         * @function toJSON
         * @memberof S2C.SC_GET_REWARD
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SC_GET_REWARD.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SC_GET_REWARD;
    })();

    S2C.RoleSummary = (function() {

        /**
         * Properties of a RoleSummary.
         * @memberof S2C
         * @interface IRoleSummary
         * @property {number|null} [uid] RoleSummary uid
         * @property {string|null} [nickname] RoleSummary nickname
         * @property {string|null} [headimgurl] RoleSummary headimgurl
         * @property {number|null} [gender] RoleSummary gender
         * @property {number|null} [iconId] RoleSummary iconId
         * @property {number|null} [level] RoleSummary level
         * @property {number|Long|null} [combat] RoleSummary combat
         * @property {number|null} [love] RoleSummary love
         * @property {number|null} [stage] RoleSummary stage
         * @property {string|null} [signature] RoleSummary signature
         * @property {number|null} [vipLevel] RoleSummary vipLevel
         * @property {string|null} [guildName] RoleSummary guildName
         * @property {number|Long|null} [exp] RoleSummary exp
         * @property {number|null} [titleId] RoleSummary titleId
         * @property {number|null} [str] RoleSummary str
         * @property {number|null} [brain] RoleSummary brain
         * @property {number|null} [politics] RoleSummary politics
         * @property {number|null} [prestige] RoleSummary prestige
         * @property {Array.<number>|null} [titleIds] RoleSummary titleIds
         * @property {number|null} [lastLoginTime] RoleSummary lastLoginTime
         * @property {number|null} [fightScore] RoleSummary fightScore
         * @property {number|null} [devotionTotal] RoleSummary devotionTotal
         * @property {number|null} [buildType] RoleSummary buildType
         * @property {number|null} [guildId] RoleSummary guildId
         */

        /**
         * Constructs a new RoleSummary.
         * @memberof S2C
         * @classdesc Represents a RoleSummary.
         * @implements IRoleSummary
         * @constructor
         * @param {S2C.IRoleSummary=} [properties] Properties to set
         */
        function RoleSummary(properties) {
            this.titleIds = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RoleSummary uid.
         * @member {number} uid
         * @memberof S2C.RoleSummary
         * @instance
         */
        RoleSummary.prototype.uid = 0;

        /**
         * RoleSummary nickname.
         * @member {string} nickname
         * @memberof S2C.RoleSummary
         * @instance
         */
        RoleSummary.prototype.nickname = "";

        /**
         * RoleSummary headimgurl.
         * @member {string} headimgurl
         * @memberof S2C.RoleSummary
         * @instance
         */
        RoleSummary.prototype.headimgurl = "";

        /**
         * RoleSummary gender.
         * @member {number} gender
         * @memberof S2C.RoleSummary
         * @instance
         */
        RoleSummary.prototype.gender = 0;

        /**
         * RoleSummary iconId.
         * @member {number} iconId
         * @memberof S2C.RoleSummary
         * @instance
         */
        RoleSummary.prototype.iconId = 0;

        /**
         * RoleSummary level.
         * @member {number} level
         * @memberof S2C.RoleSummary
         * @instance
         */
        RoleSummary.prototype.level = 0;

        /**
         * RoleSummary combat.
         * @member {number|Long} combat
         * @memberof S2C.RoleSummary
         * @instance
         */
        RoleSummary.prototype.combat = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * RoleSummary love.
         * @member {number} love
         * @memberof S2C.RoleSummary
         * @instance
         */
        RoleSummary.prototype.love = 0;

        /**
         * RoleSummary stage.
         * @member {number} stage
         * @memberof S2C.RoleSummary
         * @instance
         */
        RoleSummary.prototype.stage = 0;

        /**
         * RoleSummary signature.
         * @member {string} signature
         * @memberof S2C.RoleSummary
         * @instance
         */
        RoleSummary.prototype.signature = "";

        /**
         * RoleSummary vipLevel.
         * @member {number} vipLevel
         * @memberof S2C.RoleSummary
         * @instance
         */
        RoleSummary.prototype.vipLevel = 0;

        /**
         * RoleSummary guildName.
         * @member {string} guildName
         * @memberof S2C.RoleSummary
         * @instance
         */
        RoleSummary.prototype.guildName = "";

        /**
         * RoleSummary exp.
         * @member {number|Long} exp
         * @memberof S2C.RoleSummary
         * @instance
         */
        RoleSummary.prototype.exp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * RoleSummary titleId.
         * @member {number} titleId
         * @memberof S2C.RoleSummary
         * @instance
         */
        RoleSummary.prototype.titleId = 0;

        /**
         * RoleSummary str.
         * @member {number} str
         * @memberof S2C.RoleSummary
         * @instance
         */
        RoleSummary.prototype.str = 0;

        /**
         * RoleSummary brain.
         * @member {number} brain
         * @memberof S2C.RoleSummary
         * @instance
         */
        RoleSummary.prototype.brain = 0;

        /**
         * RoleSummary politics.
         * @member {number} politics
         * @memberof S2C.RoleSummary
         * @instance
         */
        RoleSummary.prototype.politics = 0;

        /**
         * RoleSummary prestige.
         * @member {number} prestige
         * @memberof S2C.RoleSummary
         * @instance
         */
        RoleSummary.prototype.prestige = 0;

        /**
         * RoleSummary titleIds.
         * @member {Array.<number>} titleIds
         * @memberof S2C.RoleSummary
         * @instance
         */
        RoleSummary.prototype.titleIds = $util.emptyArray;

        /**
         * RoleSummary lastLoginTime.
         * @member {number} lastLoginTime
         * @memberof S2C.RoleSummary
         * @instance
         */
        RoleSummary.prototype.lastLoginTime = 0;

        /**
         * RoleSummary fightScore.
         * @member {number} fightScore
         * @memberof S2C.RoleSummary
         * @instance
         */
        RoleSummary.prototype.fightScore = 0;

        /**
         * RoleSummary devotionTotal.
         * @member {number} devotionTotal
         * @memberof S2C.RoleSummary
         * @instance
         */
        RoleSummary.prototype.devotionTotal = 0;

        /**
         * RoleSummary buildType.
         * @member {number} buildType
         * @memberof S2C.RoleSummary
         * @instance
         */
        RoleSummary.prototype.buildType = 0;

        /**
         * RoleSummary guildId.
         * @member {number} guildId
         * @memberof S2C.RoleSummary
         * @instance
         */
        RoleSummary.prototype.guildId = 0;

        /**
         * Creates a new RoleSummary instance using the specified properties.
         * @function create
         * @memberof S2C.RoleSummary
         * @static
         * @param {S2C.IRoleSummary=} [properties] Properties to set
         * @returns {S2C.RoleSummary} RoleSummary instance
         */
        RoleSummary.create = function create(properties) {
            return new RoleSummary(properties);
        };

        /**
         * Encodes the specified RoleSummary message. Does not implicitly {@link S2C.RoleSummary.verify|verify} messages.
         * @function encode
         * @memberof S2C.RoleSummary
         * @static
         * @param {S2C.IRoleSummary} message RoleSummary message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoleSummary.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.uid);
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.nickname);
            if (message.headimgurl != null && message.hasOwnProperty("headimgurl"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.headimgurl);
            if (message.gender != null && message.hasOwnProperty("gender"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.gender);
            if (message.iconId != null && message.hasOwnProperty("iconId"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.iconId);
            if (message.level != null && message.hasOwnProperty("level"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.level);
            if (message.combat != null && message.hasOwnProperty("combat"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint64(message.combat);
            if (message.love != null && message.hasOwnProperty("love"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.love);
            if (message.stage != null && message.hasOwnProperty("stage"))
                writer.uint32(/* id 9, wireType 0 =*/72).uint32(message.stage);
            if (message.signature != null && message.hasOwnProperty("signature"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.signature);
            if (message.vipLevel != null && message.hasOwnProperty("vipLevel"))
                writer.uint32(/* id 11, wireType 0 =*/88).uint32(message.vipLevel);
            if (message.guildName != null && message.hasOwnProperty("guildName"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.guildName);
            if (message.exp != null && message.hasOwnProperty("exp"))
                writer.uint32(/* id 13, wireType 0 =*/104).uint64(message.exp);
            if (message.titleId != null && message.hasOwnProperty("titleId"))
                writer.uint32(/* id 14, wireType 0 =*/112).uint32(message.titleId);
            if (message.str != null && message.hasOwnProperty("str"))
                writer.uint32(/* id 15, wireType 0 =*/120).uint32(message.str);
            if (message.brain != null && message.hasOwnProperty("brain"))
                writer.uint32(/* id 16, wireType 0 =*/128).uint32(message.brain);
            if (message.politics != null && message.hasOwnProperty("politics"))
                writer.uint32(/* id 17, wireType 0 =*/136).uint32(message.politics);
            if (message.prestige != null && message.hasOwnProperty("prestige"))
                writer.uint32(/* id 18, wireType 0 =*/144).uint32(message.prestige);
            if (message.titleIds != null && message.titleIds.length) {
                writer.uint32(/* id 19, wireType 2 =*/154).fork();
                for (var i = 0; i < message.titleIds.length; ++i)
                    writer.uint32(message.titleIds[i]);
                writer.ldelim();
            }
            if (message.lastLoginTime != null && message.hasOwnProperty("lastLoginTime"))
                writer.uint32(/* id 20, wireType 0 =*/160).uint32(message.lastLoginTime);
            if (message.fightScore != null && message.hasOwnProperty("fightScore"))
                writer.uint32(/* id 21, wireType 0 =*/168).uint32(message.fightScore);
            if (message.devotionTotal != null && message.hasOwnProperty("devotionTotal"))
                writer.uint32(/* id 22, wireType 0 =*/176).uint32(message.devotionTotal);
            if (message.buildType != null && message.hasOwnProperty("buildType"))
                writer.uint32(/* id 23, wireType 0 =*/184).uint32(message.buildType);
            if (message.guildId != null && message.hasOwnProperty("guildId"))
                writer.uint32(/* id 24, wireType 0 =*/192).uint32(message.guildId);
            return writer;
        };

        /**
         * Encodes the specified RoleSummary message, length delimited. Does not implicitly {@link S2C.RoleSummary.verify|verify} messages.
         * @function encodeDelimited
         * @memberof S2C.RoleSummary
         * @static
         * @param {S2C.IRoleSummary} message RoleSummary message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoleSummary.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RoleSummary message from the specified reader or buffer.
         * @function decode
         * @memberof S2C.RoleSummary
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {S2C.RoleSummary} RoleSummary
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoleSummary.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2C.RoleSummary();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.uint32();
                    break;
                case 2:
                    message.nickname = reader.string();
                    break;
                case 3:
                    message.headimgurl = reader.string();
                    break;
                case 4:
                    message.gender = reader.uint32();
                    break;
                case 5:
                    message.iconId = reader.uint32();
                    break;
                case 6:
                    message.level = reader.uint32();
                    break;
                case 7:
                    message.combat = reader.uint64();
                    break;
                case 8:
                    message.love = reader.uint32();
                    break;
                case 9:
                    message.stage = reader.uint32();
                    break;
                case 10:
                    message.signature = reader.string();
                    break;
                case 11:
                    message.vipLevel = reader.uint32();
                    break;
                case 12:
                    message.guildName = reader.string();
                    break;
                case 13:
                    message.exp = reader.uint64();
                    break;
                case 14:
                    message.titleId = reader.uint32();
                    break;
                case 15:
                    message.str = reader.uint32();
                    break;
                case 16:
                    message.brain = reader.uint32();
                    break;
                case 17:
                    message.politics = reader.uint32();
                    break;
                case 18:
                    message.prestige = reader.uint32();
                    break;
                case 19:
                    if (!(message.titleIds && message.titleIds.length))
                        message.titleIds = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.titleIds.push(reader.uint32());
                    } else
                        message.titleIds.push(reader.uint32());
                    break;
                case 20:
                    message.lastLoginTime = reader.uint32();
                    break;
                case 21:
                    message.fightScore = reader.uint32();
                    break;
                case 22:
                    message.devotionTotal = reader.uint32();
                    break;
                case 23:
                    message.buildType = reader.uint32();
                    break;
                case 24:
                    message.guildId = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RoleSummary message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof S2C.RoleSummary
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {S2C.RoleSummary} RoleSummary
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoleSummary.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RoleSummary message.
         * @function verify
         * @memberof S2C.RoleSummary
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RoleSummary.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid))
                    return "uid: integer expected";
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                if (!$util.isString(message.nickname))
                    return "nickname: string expected";
            if (message.headimgurl != null && message.hasOwnProperty("headimgurl"))
                if (!$util.isString(message.headimgurl))
                    return "headimgurl: string expected";
            if (message.gender != null && message.hasOwnProperty("gender"))
                if (!$util.isInteger(message.gender))
                    return "gender: integer expected";
            if (message.iconId != null && message.hasOwnProperty("iconId"))
                if (!$util.isInteger(message.iconId))
                    return "iconId: integer expected";
            if (message.level != null && message.hasOwnProperty("level"))
                if (!$util.isInteger(message.level))
                    return "level: integer expected";
            if (message.combat != null && message.hasOwnProperty("combat"))
                if (!$util.isInteger(message.combat) && !(message.combat && $util.isInteger(message.combat.low) && $util.isInteger(message.combat.high)))
                    return "combat: integer|Long expected";
            if (message.love != null && message.hasOwnProperty("love"))
                if (!$util.isInteger(message.love))
                    return "love: integer expected";
            if (message.stage != null && message.hasOwnProperty("stage"))
                if (!$util.isInteger(message.stage))
                    return "stage: integer expected";
            if (message.signature != null && message.hasOwnProperty("signature"))
                if (!$util.isString(message.signature))
                    return "signature: string expected";
            if (message.vipLevel != null && message.hasOwnProperty("vipLevel"))
                if (!$util.isInteger(message.vipLevel))
                    return "vipLevel: integer expected";
            if (message.guildName != null && message.hasOwnProperty("guildName"))
                if (!$util.isString(message.guildName))
                    return "guildName: string expected";
            if (message.exp != null && message.hasOwnProperty("exp"))
                if (!$util.isInteger(message.exp) && !(message.exp && $util.isInteger(message.exp.low) && $util.isInteger(message.exp.high)))
                    return "exp: integer|Long expected";
            if (message.titleId != null && message.hasOwnProperty("titleId"))
                if (!$util.isInteger(message.titleId))
                    return "titleId: integer expected";
            if (message.str != null && message.hasOwnProperty("str"))
                if (!$util.isInteger(message.str))
                    return "str: integer expected";
            if (message.brain != null && message.hasOwnProperty("brain"))
                if (!$util.isInteger(message.brain))
                    return "brain: integer expected";
            if (message.politics != null && message.hasOwnProperty("politics"))
                if (!$util.isInteger(message.politics))
                    return "politics: integer expected";
            if (message.prestige != null && message.hasOwnProperty("prestige"))
                if (!$util.isInteger(message.prestige))
                    return "prestige: integer expected";
            if (message.titleIds != null && message.hasOwnProperty("titleIds")) {
                if (!Array.isArray(message.titleIds))
                    return "titleIds: array expected";
                for (var i = 0; i < message.titleIds.length; ++i)
                    if (!$util.isInteger(message.titleIds[i]))
                        return "titleIds: integer[] expected";
            }
            if (message.lastLoginTime != null && message.hasOwnProperty("lastLoginTime"))
                if (!$util.isInteger(message.lastLoginTime))
                    return "lastLoginTime: integer expected";
            if (message.fightScore != null && message.hasOwnProperty("fightScore"))
                if (!$util.isInteger(message.fightScore))
                    return "fightScore: integer expected";
            if (message.devotionTotal != null && message.hasOwnProperty("devotionTotal"))
                if (!$util.isInteger(message.devotionTotal))
                    return "devotionTotal: integer expected";
            if (message.buildType != null && message.hasOwnProperty("buildType"))
                if (!$util.isInteger(message.buildType))
                    return "buildType: integer expected";
            if (message.guildId != null && message.hasOwnProperty("guildId"))
                if (!$util.isInteger(message.guildId))
                    return "guildId: integer expected";
            return null;
        };

        /**
         * Creates a RoleSummary message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof S2C.RoleSummary
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {S2C.RoleSummary} RoleSummary
         */
        RoleSummary.fromObject = function fromObject(object) {
            if (object instanceof $root.S2C.RoleSummary)
                return object;
            var message = new $root.S2C.RoleSummary();
            if (object.uid != null)
                message.uid = object.uid >>> 0;
            if (object.nickname != null)
                message.nickname = String(object.nickname);
            if (object.headimgurl != null)
                message.headimgurl = String(object.headimgurl);
            if (object.gender != null)
                message.gender = object.gender >>> 0;
            if (object.iconId != null)
                message.iconId = object.iconId >>> 0;
            if (object.level != null)
                message.level = object.level >>> 0;
            if (object.combat != null)
                if ($util.Long)
                    (message.combat = $util.Long.fromValue(object.combat)).unsigned = true;
                else if (typeof object.combat === "string")
                    message.combat = parseInt(object.combat, 10);
                else if (typeof object.combat === "number")
                    message.combat = object.combat;
                else if (typeof object.combat === "object")
                    message.combat = new $util.LongBits(object.combat.low >>> 0, object.combat.high >>> 0).toNumber(true);
            if (object.love != null)
                message.love = object.love >>> 0;
            if (object.stage != null)
                message.stage = object.stage >>> 0;
            if (object.signature != null)
                message.signature = String(object.signature);
            if (object.vipLevel != null)
                message.vipLevel = object.vipLevel >>> 0;
            if (object.guildName != null)
                message.guildName = String(object.guildName);
            if (object.exp != null)
                if ($util.Long)
                    (message.exp = $util.Long.fromValue(object.exp)).unsigned = true;
                else if (typeof object.exp === "string")
                    message.exp = parseInt(object.exp, 10);
                else if (typeof object.exp === "number")
                    message.exp = object.exp;
                else if (typeof object.exp === "object")
                    message.exp = new $util.LongBits(object.exp.low >>> 0, object.exp.high >>> 0).toNumber(true);
            if (object.titleId != null)
                message.titleId = object.titleId >>> 0;
            if (object.str != null)
                message.str = object.str >>> 0;
            if (object.brain != null)
                message.brain = object.brain >>> 0;
            if (object.politics != null)
                message.politics = object.politics >>> 0;
            if (object.prestige != null)
                message.prestige = object.prestige >>> 0;
            if (object.titleIds) {
                if (!Array.isArray(object.titleIds))
                    throw TypeError(".S2C.RoleSummary.titleIds: array expected");
                message.titleIds = [];
                for (var i = 0; i < object.titleIds.length; ++i)
                    message.titleIds[i] = object.titleIds[i] >>> 0;
            }
            if (object.lastLoginTime != null)
                message.lastLoginTime = object.lastLoginTime >>> 0;
            if (object.fightScore != null)
                message.fightScore = object.fightScore >>> 0;
            if (object.devotionTotal != null)
                message.devotionTotal = object.devotionTotal >>> 0;
            if (object.buildType != null)
                message.buildType = object.buildType >>> 0;
            if (object.guildId != null)
                message.guildId = object.guildId >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a RoleSummary message. Also converts values to other types if specified.
         * @function toObject
         * @memberof S2C.RoleSummary
         * @static
         * @param {S2C.RoleSummary} message RoleSummary
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RoleSummary.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.titleIds = [];
            if (options.defaults) {
                object.uid = 0;
                object.nickname = "";
                object.headimgurl = "";
                object.gender = 0;
                object.iconId = 0;
                object.level = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.combat = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.combat = options.longs === String ? "0" : 0;
                object.love = 0;
                object.stage = 0;
                object.signature = "";
                object.vipLevel = 0;
                object.guildName = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.exp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.exp = options.longs === String ? "0" : 0;
                object.titleId = 0;
                object.str = 0;
                object.brain = 0;
                object.politics = 0;
                object.prestige = 0;
                object.lastLoginTime = 0;
                object.fightScore = 0;
                object.devotionTotal = 0;
                object.buildType = 0;
                object.guildId = 0;
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                object.nickname = message.nickname;
            if (message.headimgurl != null && message.hasOwnProperty("headimgurl"))
                object.headimgurl = message.headimgurl;
            if (message.gender != null && message.hasOwnProperty("gender"))
                object.gender = message.gender;
            if (message.iconId != null && message.hasOwnProperty("iconId"))
                object.iconId = message.iconId;
            if (message.level != null && message.hasOwnProperty("level"))
                object.level = message.level;
            if (message.combat != null && message.hasOwnProperty("combat"))
                if (typeof message.combat === "number")
                    object.combat = options.longs === String ? String(message.combat) : message.combat;
                else
                    object.combat = options.longs === String ? $util.Long.prototype.toString.call(message.combat) : options.longs === Number ? new $util.LongBits(message.combat.low >>> 0, message.combat.high >>> 0).toNumber(true) : message.combat;
            if (message.love != null && message.hasOwnProperty("love"))
                object.love = message.love;
            if (message.stage != null && message.hasOwnProperty("stage"))
                object.stage = message.stage;
            if (message.signature != null && message.hasOwnProperty("signature"))
                object.signature = message.signature;
            if (message.vipLevel != null && message.hasOwnProperty("vipLevel"))
                object.vipLevel = message.vipLevel;
            if (message.guildName != null && message.hasOwnProperty("guildName"))
                object.guildName = message.guildName;
            if (message.exp != null && message.hasOwnProperty("exp"))
                if (typeof message.exp === "number")
                    object.exp = options.longs === String ? String(message.exp) : message.exp;
                else
                    object.exp = options.longs === String ? $util.Long.prototype.toString.call(message.exp) : options.longs === Number ? new $util.LongBits(message.exp.low >>> 0, message.exp.high >>> 0).toNumber(true) : message.exp;
            if (message.titleId != null && message.hasOwnProperty("titleId"))
                object.titleId = message.titleId;
            if (message.str != null && message.hasOwnProperty("str"))
                object.str = message.str;
            if (message.brain != null && message.hasOwnProperty("brain"))
                object.brain = message.brain;
            if (message.politics != null && message.hasOwnProperty("politics"))
                object.politics = message.politics;
            if (message.prestige != null && message.hasOwnProperty("prestige"))
                object.prestige = message.prestige;
            if (message.titleIds && message.titleIds.length) {
                object.titleIds = [];
                for (var j = 0; j < message.titleIds.length; ++j)
                    object.titleIds[j] = message.titleIds[j];
            }
            if (message.lastLoginTime != null && message.hasOwnProperty("lastLoginTime"))
                object.lastLoginTime = message.lastLoginTime;
            if (message.fightScore != null && message.hasOwnProperty("fightScore"))
                object.fightScore = message.fightScore;
            if (message.devotionTotal != null && message.hasOwnProperty("devotionTotal"))
                object.devotionTotal = message.devotionTotal;
            if (message.buildType != null && message.hasOwnProperty("buildType"))
                object.buildType = message.buildType;
            if (message.guildId != null && message.hasOwnProperty("guildId"))
                object.guildId = message.guildId;
            return object;
        };

        /**
         * Converts this RoleSummary to JSON.
         * @function toJSON
         * @memberof S2C.RoleSummary
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RoleSummary.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RoleSummary;
    })();

    S2C.SC_UPDATE_ROLE_PRO = (function() {

        /**
         * Properties of a SC_UPDATE_ROLE_PRO.
         * @memberof S2C
         * @interface ISC_UPDATE_ROLE_PRO
         * @property {number|null} [uid] SC_UPDATE_ROLE_PRO uid
         * @property {string|null} [nickname] SC_UPDATE_ROLE_PRO nickname
         * @property {string|null} [headimgurl] SC_UPDATE_ROLE_PRO headimgurl
         * @property {number|null} [diamond] SC_UPDATE_ROLE_PRO diamond
         * @property {number|Long|null} [gold] SC_UPDATE_ROLE_PRO gold
         * @property {number|null} [level] SC_UPDATE_ROLE_PRO level
         * @property {number|null} [vipLevel] SC_UPDATE_ROLE_PRO vipLevel
         * @property {number|Long|null} [exp] SC_UPDATE_ROLE_PRO exp
         * @property {number|null} [vipExp] SC_UPDATE_ROLE_PRO vipExp
         * @property {number|null} [gender] SC_UPDATE_ROLE_PRO gender
         * @property {number|null} [iconId] SC_UPDATE_ROLE_PRO iconId
         * @property {number|Long|null} [army] SC_UPDATE_ROLE_PRO army
         * @property {number|Long|null} [rice] SC_UPDATE_ROLE_PRO rice
         * @property {number|null} [reputation] SC_UPDATE_ROLE_PRO reputation
         * @property {number|null} [stamina] SC_UPDATE_ROLE_PRO stamina
         * @property {number|null} [politicsCnt] SC_UPDATE_ROLE_PRO politicsCnt
         * @property {number|null} [intelCnt] SC_UPDATE_ROLE_PRO intelCnt
         * @property {number|null} [armyCnt] SC_UPDATE_ROLE_PRO armyCnt
         * @property {number|null} [banquetPoint] SC_UPDATE_ROLE_PRO banquetPoint
         * @property {number|null} [devotion] SC_UPDATE_ROLE_PRO devotion
         * @property {number|null} [activePoint] SC_UPDATE_ROLE_PRO activePoint
         * @property {number|null} [taofaScore] SC_UPDATE_ROLE_PRO taofaScore
         * @property {number|null} [combat] SC_UPDATE_ROLE_PRO combat
         * @property {number|null} [timeStamina] SC_UPDATE_ROLE_PRO timeStamina
         * @property {string|null} [signature] SC_UPDATE_ROLE_PRO signature
         * @property {number|null} [timePoliticsCnt] SC_UPDATE_ROLE_PRO timePoliticsCnt
         * @property {number|null} [timeIntelCnt] SC_UPDATE_ROLE_PRO timeIntelCnt
         * @property {number|null} [timeArmyCnt] SC_UPDATE_ROLE_PRO timeArmyCnt
         * @property {number|null} [stage] SC_UPDATE_ROLE_PRO stage
         * @property {number|null} [titleId] SC_UPDATE_ROLE_PRO titleId
         * @property {number|null} [admireCombat] SC_UPDATE_ROLE_PRO admireCombat
         * @property {number|null} [admireLove] SC_UPDATE_ROLE_PRO admireLove
         * @property {number|null} [signedDays] SC_UPDATE_ROLE_PRO signedDays
         * @property {number|null} [admireStage] SC_UPDATE_ROLE_PRO admireStage
         * @property {number|null} [curSignedState] SC_UPDATE_ROLE_PRO curSignedState
         * @property {number|null} [curSevenState] SC_UPDATE_ROLE_PRO curSevenState
         * @property {number|null} [sevenDays] SC_UPDATE_ROLE_PRO sevenDays
         * @property {number|null} [hanlinExp] SC_UPDATE_ROLE_PRO hanlinExp
         * @property {number|null} [hanlinId] SC_UPDATE_ROLE_PRO hanlinId
         * @property {number|null} [fieldScore] SC_UPDATE_ROLE_PRO fieldScore
         * @property {number|null} [fieldBossHpLeft] SC_UPDATE_ROLE_PRO fieldBossHpLeft
         * @property {number|null} [fieldBossId] SC_UPDATE_ROLE_PRO fieldBossId
         * @property {number|null} [salaryCnt] SC_UPDATE_ROLE_PRO salaryCnt
         * @property {number|null} [fieldPoint] SC_UPDATE_ROLE_PRO fieldPoint
         * @property {number|null} [energy] SC_UPDATE_ROLE_PRO energy
         * @property {number|null} [timeEnergy] SC_UPDATE_ROLE_PRO timeEnergy
         * @property {number|null} [zhenzai] SC_UPDATE_ROLE_PRO zhenzai
         * @property {number|null} [luck] SC_UPDATE_ROLE_PRO luck
         * @property {number|null} [silkId] SC_UPDATE_ROLE_PRO silkId
         * @property {number|null} [fastSilk] SC_UPDATE_ROLE_PRO fastSilk
         * @property {number|null} [timeLeftGuild] SC_UPDATE_ROLE_PRO timeLeftGuild
         * @property {number|null} [buildType] SC_UPDATE_ROLE_PRO buildType
         * @property {number|Long|null} [bossHp] SC_UPDATE_ROLE_PRO bossHp
         * @property {number|null} [gmAuth] SC_UPDATE_ROLE_PRO gmAuth
         * @property {number|null} [taofaId] SC_UPDATE_ROLE_PRO taofaId
         * @property {number|null} [taofaMaxId] SC_UPDATE_ROLE_PRO taofaMaxId
         * @property {number|null} [guildId] SC_UPDATE_ROLE_PRO guildId
         * @property {number|null} [devotionTotal] SC_UPDATE_ROLE_PRO devotionTotal
         * @property {number|null} [enemyUid] SC_UPDATE_ROLE_PRO enemyUid
         * @property {number|null} [fightPower] SC_UPDATE_ROLE_PRO fightPower
         * @property {number|null} [timeMonthCard] SC_UPDATE_ROLE_PRO timeMonthCard
         * @property {number|null} [timeLifeCard] SC_UPDATE_ROLE_PRO timeLifeCard
         * @property {number|null} [joinCnt] SC_UPDATE_ROLE_PRO joinCnt
         * @property {number|null} [taofaTotal] SC_UPDATE_ROLE_PRO taofaTotal
         * @property {number|null} [createTime] SC_UPDATE_ROLE_PRO createTime
         * @property {number|null} [harvestPoint] SC_UPDATE_ROLE_PRO harvestPoint
         * @property {number|null} [timeVipCard] SC_UPDATE_ROLE_PRO timeVipCard
         * @property {number|null} [str] SC_UPDATE_ROLE_PRO str
         * @property {number|null} [brain] SC_UPDATE_ROLE_PRO brain
         * @property {number|null} [politics] SC_UPDATE_ROLE_PRO politics
         * @property {number|null} [prestige] SC_UPDATE_ROLE_PRO prestige
         */

        /**
         * Constructs a new SC_UPDATE_ROLE_PRO.
         * @memberof S2C
         * @classdesc Represents a SC_UPDATE_ROLE_PRO.
         * @implements ISC_UPDATE_ROLE_PRO
         * @constructor
         * @param {S2C.ISC_UPDATE_ROLE_PRO=} [properties] Properties to set
         */
        function SC_UPDATE_ROLE_PRO(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SC_UPDATE_ROLE_PRO uid.
         * @member {number} uid
         * @memberof S2C.SC_UPDATE_ROLE_PRO
         * @instance
         */
        SC_UPDATE_ROLE_PRO.prototype.uid = 0;

        /**
         * SC_UPDATE_ROLE_PRO nickname.
         * @member {string} nickname
         * @memberof S2C.SC_UPDATE_ROLE_PRO
         * @instance
         */
        SC_UPDATE_ROLE_PRO.prototype.nickname = "";

        /**
         * SC_UPDATE_ROLE_PRO headimgurl.
         * @member {string} headimgurl
         * @memberof S2C.SC_UPDATE_ROLE_PRO
         * @instance
         */
        SC_UPDATE_ROLE_PRO.prototype.headimgurl = "";

        /**
         * SC_UPDATE_ROLE_PRO diamond.
         * @member {number} diamond
         * @memberof S2C.SC_UPDATE_ROLE_PRO
         * @instance
         */
        SC_UPDATE_ROLE_PRO.prototype.diamond = 0;

        /**
         * SC_UPDATE_ROLE_PRO gold.
         * @member {number|Long} gold
         * @memberof S2C.SC_UPDATE_ROLE_PRO
         * @instance
         */
        SC_UPDATE_ROLE_PRO.prototype.gold = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * SC_UPDATE_ROLE_PRO level.
         * @member {number} level
         * @memberof S2C.SC_UPDATE_ROLE_PRO
         * @instance
         */
        SC_UPDATE_ROLE_PRO.prototype.level = 0;

        /**
         * SC_UPDATE_ROLE_PRO vipLevel.
         * @member {number} vipLevel
         * @memberof S2C.SC_UPDATE_ROLE_PRO
         * @instance
         */
        SC_UPDATE_ROLE_PRO.prototype.vipLevel = 0;

        /**
         * SC_UPDATE_ROLE_PRO exp.
         * @member {number|Long} exp
         * @memberof S2C.SC_UPDATE_ROLE_PRO
         * @instance
         */
        SC_UPDATE_ROLE_PRO.prototype.exp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * SC_UPDATE_ROLE_PRO vipExp.
         * @member {number} vipExp
         * @memberof S2C.SC_UPDATE_ROLE_PRO
         * @instance
         */
        SC_UPDATE_ROLE_PRO.prototype.vipExp = 0;

        /**
         * SC_UPDATE_ROLE_PRO gender.
         * @member {number} gender
         * @memberof S2C.SC_UPDATE_ROLE_PRO
         * @instance
         */
        SC_UPDATE_ROLE_PRO.prototype.gender = 0;

        /**
         * SC_UPDATE_ROLE_PRO iconId.
         * @member {number} iconId
         * @memberof S2C.SC_UPDATE_ROLE_PRO
         * @instance
         */
        SC_UPDATE_ROLE_PRO.prototype.iconId = 0;

        /**
         * SC_UPDATE_ROLE_PRO army.
         * @member {number|Long} army
         * @memberof S2C.SC_UPDATE_ROLE_PRO
         * @instance
         */
        SC_UPDATE_ROLE_PRO.prototype.army = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * SC_UPDATE_ROLE_PRO rice.
         * @member {number|Long} rice
         * @memberof S2C.SC_UPDATE_ROLE_PRO
         * @instance
         */
        SC_UPDATE_ROLE_PRO.prototype.rice = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * SC_UPDATE_ROLE_PRO reputation.
         * @member {number} reputation
         * @memberof S2C.SC_UPDATE_ROLE_PRO
         * @instance
         */
        SC_UPDATE_ROLE_PRO.prototype.reputation = 0;

        /**
         * SC_UPDATE_ROLE_PRO stamina.
         * @member {number} stamina
         * @memberof S2C.SC_UPDATE_ROLE_PRO
         * @instance
         */
        SC_UPDATE_ROLE_PRO.prototype.stamina = 0;

        /**
         * SC_UPDATE_ROLE_PRO politicsCnt.
         * @member {number} politicsCnt
         * @memberof S2C.SC_UPDATE_ROLE_PRO
         * @instance
         */
        SC_UPDATE_ROLE_PRO.prototype.politicsCnt = 0;

        /**
         * SC_UPDATE_ROLE_PRO intelCnt.
         * @member {number} intelCnt
         * @memberof S2C.SC_UPDATE_ROLE_PRO
         * @instance
         */
        SC_UPDATE_ROLE_PRO.prototype.intelCnt = 0;

        /**
         * SC_UPDATE_ROLE_PRO armyCnt.
         * @member {number} armyCnt
         * @memberof S2C.SC_UPDATE_ROLE_PRO
         * @instance
         */
        SC_UPDATE_ROLE_PRO.prototype.armyCnt = 0;

        /**
         * SC_UPDATE_ROLE_PRO banquetPoint.
         * @member {number} banquetPoint
         * @memberof S2C.SC_UPDATE_ROLE_PRO
         * @instance
         */
        SC_UPDATE_ROLE_PRO.prototype.banquetPoint = 0;

        /**
         * SC_UPDATE_ROLE_PRO devotion.
         * @member {number} devotion
         * @memberof S2C.SC_UPDATE_ROLE_PRO
         * @instance
         */
        SC_UPDATE_ROLE_PRO.prototype.devotion = 0;

        /**
         * SC_UPDATE_ROLE_PRO activePoint.
         * @member {number} activePoint
         * @memberof S2C.SC_UPDATE_ROLE_PRO
         * @instance
         */
        SC_UPDATE_ROLE_PRO.prototype.activePoint = 0;

        /**
         * SC_UPDATE_ROLE_PRO taofaScore.
         * @member {number} taofaScore
         * @memberof S2C.SC_UPDATE_ROLE_PRO
         * @instance
         */
        SC_UPDATE_ROLE_PRO.prototype.taofaScore = 0;

        /**
         * SC_UPDATE_ROLE_PRO combat.
         * @member {number} combat
         * @memberof S2C.SC_UPDATE_ROLE_PRO
         * @instance
         */
        SC_UPDATE_ROLE_PRO.prototype.combat = 0;

        /**
         * SC_UPDATE_ROLE_PRO timeStamina.
         * @member {number} timeStamina
         * @memberof S2C.SC_UPDATE_ROLE_PRO
         * @instance
         */
        SC_UPDATE_ROLE_PRO.prototype.timeStamina = 0;

        /**
         * SC_UPDATE_ROLE_PRO signature.
         * @member {string} signature
         * @memberof S2C.SC_UPDATE_ROLE_PRO
         * @instance
         */
        SC_UPDATE_ROLE_PRO.prototype.signature = "";

        /**
         * SC_UPDATE_ROLE_PRO timePoliticsCnt.
         * @member {number} timePoliticsCnt
         * @memberof S2C.SC_UPDATE_ROLE_PRO
         * @instance
         */
        SC_UPDATE_ROLE_PRO.prototype.timePoliticsCnt = 0;

        /**
         * SC_UPDATE_ROLE_PRO timeIntelCnt.
         * @member {number} timeIntelCnt
         * @memberof S2C.SC_UPDATE_ROLE_PRO
         * @instance
         */
        SC_UPDATE_ROLE_PRO.prototype.timeIntelCnt = 0;

        /**
         * SC_UPDATE_ROLE_PRO timeArmyCnt.
         * @member {number} timeArmyCnt
         * @memberof S2C.SC_UPDATE_ROLE_PRO
         * @instance
         */
        SC_UPDATE_ROLE_PRO.prototype.timeArmyCnt = 0;

        /**
         * SC_UPDATE_ROLE_PRO stage.
         * @member {number} stage
         * @memberof S2C.SC_UPDATE_ROLE_PRO
         * @instance
         */
        SC_UPDATE_ROLE_PRO.prototype.stage = 0;

        /**
         * SC_UPDATE_ROLE_PRO titleId.
         * @member {number} titleId
         * @memberof S2C.SC_UPDATE_ROLE_PRO
         * @instance
         */
        SC_UPDATE_ROLE_PRO.prototype.titleId = 0;

        /**
         * SC_UPDATE_ROLE_PRO admireCombat.
         * @member {number} admireCombat
         * @memberof S2C.SC_UPDATE_ROLE_PRO
         * @instance
         */
        SC_UPDATE_ROLE_PRO.prototype.admireCombat = 0;

        /**
         * SC_UPDATE_ROLE_PRO admireLove.
         * @member {number} admireLove
         * @memberof S2C.SC_UPDATE_ROLE_PRO
         * @instance
         */
        SC_UPDATE_ROLE_PRO.prototype.admireLove = 0;

        /**
         * SC_UPDATE_ROLE_PRO signedDays.
         * @member {number} signedDays
         * @memberof S2C.SC_UPDATE_ROLE_PRO
         * @instance
         */
        SC_UPDATE_ROLE_PRO.prototype.signedDays = 0;

        /**
         * SC_UPDATE_ROLE_PRO admireStage.
         * @member {number} admireStage
         * @memberof S2C.SC_UPDATE_ROLE_PRO
         * @instance
         */
        SC_UPDATE_ROLE_PRO.prototype.admireStage = 0;

        /**
         * SC_UPDATE_ROLE_PRO curSignedState.
         * @member {number} curSignedState
         * @memberof S2C.SC_UPDATE_ROLE_PRO
         * @instance
         */
        SC_UPDATE_ROLE_PRO.prototype.curSignedState = 0;

        /**
         * SC_UPDATE_ROLE_PRO curSevenState.
         * @member {number} curSevenState
         * @memberof S2C.SC_UPDATE_ROLE_PRO
         * @instance
         */
        SC_UPDATE_ROLE_PRO.prototype.curSevenState = 0;

        /**
         * SC_UPDATE_ROLE_PRO sevenDays.
         * @member {number} sevenDays
         * @memberof S2C.SC_UPDATE_ROLE_PRO
         * @instance
         */
        SC_UPDATE_ROLE_PRO.prototype.sevenDays = 0;

        /**
         * SC_UPDATE_ROLE_PRO hanlinExp.
         * @member {number} hanlinExp
         * @memberof S2C.SC_UPDATE_ROLE_PRO
         * @instance
         */
        SC_UPDATE_ROLE_PRO.prototype.hanlinExp = 0;

        /**
         * SC_UPDATE_ROLE_PRO hanlinId.
         * @member {number} hanlinId
         * @memberof S2C.SC_UPDATE_ROLE_PRO
         * @instance
         */
        SC_UPDATE_ROLE_PRO.prototype.hanlinId = 0;

        /**
         * SC_UPDATE_ROLE_PRO fieldScore.
         * @member {number} fieldScore
         * @memberof S2C.SC_UPDATE_ROLE_PRO
         * @instance
         */
        SC_UPDATE_ROLE_PRO.prototype.fieldScore = 0;

        /**
         * SC_UPDATE_ROLE_PRO fieldBossHpLeft.
         * @member {number} fieldBossHpLeft
         * @memberof S2C.SC_UPDATE_ROLE_PRO
         * @instance
         */
        SC_UPDATE_ROLE_PRO.prototype.fieldBossHpLeft = 0;

        /**
         * SC_UPDATE_ROLE_PRO fieldBossId.
         * @member {number} fieldBossId
         * @memberof S2C.SC_UPDATE_ROLE_PRO
         * @instance
         */
        SC_UPDATE_ROLE_PRO.prototype.fieldBossId = 0;

        /**
         * SC_UPDATE_ROLE_PRO salaryCnt.
         * @member {number} salaryCnt
         * @memberof S2C.SC_UPDATE_ROLE_PRO
         * @instance
         */
        SC_UPDATE_ROLE_PRO.prototype.salaryCnt = 0;

        /**
         * SC_UPDATE_ROLE_PRO fieldPoint.
         * @member {number} fieldPoint
         * @memberof S2C.SC_UPDATE_ROLE_PRO
         * @instance
         */
        SC_UPDATE_ROLE_PRO.prototype.fieldPoint = 0;

        /**
         * SC_UPDATE_ROLE_PRO energy.
         * @member {number} energy
         * @memberof S2C.SC_UPDATE_ROLE_PRO
         * @instance
         */
        SC_UPDATE_ROLE_PRO.prototype.energy = 0;

        /**
         * SC_UPDATE_ROLE_PRO timeEnergy.
         * @member {number} timeEnergy
         * @memberof S2C.SC_UPDATE_ROLE_PRO
         * @instance
         */
        SC_UPDATE_ROLE_PRO.prototype.timeEnergy = 0;

        /**
         * SC_UPDATE_ROLE_PRO zhenzai.
         * @member {number} zhenzai
         * @memberof S2C.SC_UPDATE_ROLE_PRO
         * @instance
         */
        SC_UPDATE_ROLE_PRO.prototype.zhenzai = 0;

        /**
         * SC_UPDATE_ROLE_PRO luck.
         * @member {number} luck
         * @memberof S2C.SC_UPDATE_ROLE_PRO
         * @instance
         */
        SC_UPDATE_ROLE_PRO.prototype.luck = 0;

        /**
         * SC_UPDATE_ROLE_PRO silkId.
         * @member {number} silkId
         * @memberof S2C.SC_UPDATE_ROLE_PRO
         * @instance
         */
        SC_UPDATE_ROLE_PRO.prototype.silkId = 0;

        /**
         * SC_UPDATE_ROLE_PRO fastSilk.
         * @member {number} fastSilk
         * @memberof S2C.SC_UPDATE_ROLE_PRO
         * @instance
         */
        SC_UPDATE_ROLE_PRO.prototype.fastSilk = 0;

        /**
         * SC_UPDATE_ROLE_PRO timeLeftGuild.
         * @member {number} timeLeftGuild
         * @memberof S2C.SC_UPDATE_ROLE_PRO
         * @instance
         */
        SC_UPDATE_ROLE_PRO.prototype.timeLeftGuild = 0;

        /**
         * SC_UPDATE_ROLE_PRO buildType.
         * @member {number} buildType
         * @memberof S2C.SC_UPDATE_ROLE_PRO
         * @instance
         */
        SC_UPDATE_ROLE_PRO.prototype.buildType = 0;

        /**
         * SC_UPDATE_ROLE_PRO bossHp.
         * @member {number|Long} bossHp
         * @memberof S2C.SC_UPDATE_ROLE_PRO
         * @instance
         */
        SC_UPDATE_ROLE_PRO.prototype.bossHp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * SC_UPDATE_ROLE_PRO gmAuth.
         * @member {number} gmAuth
         * @memberof S2C.SC_UPDATE_ROLE_PRO
         * @instance
         */
        SC_UPDATE_ROLE_PRO.prototype.gmAuth = 0;

        /**
         * SC_UPDATE_ROLE_PRO taofaId.
         * @member {number} taofaId
         * @memberof S2C.SC_UPDATE_ROLE_PRO
         * @instance
         */
        SC_UPDATE_ROLE_PRO.prototype.taofaId = 0;

        /**
         * SC_UPDATE_ROLE_PRO taofaMaxId.
         * @member {number} taofaMaxId
         * @memberof S2C.SC_UPDATE_ROLE_PRO
         * @instance
         */
        SC_UPDATE_ROLE_PRO.prototype.taofaMaxId = 0;

        /**
         * SC_UPDATE_ROLE_PRO guildId.
         * @member {number} guildId
         * @memberof S2C.SC_UPDATE_ROLE_PRO
         * @instance
         */
        SC_UPDATE_ROLE_PRO.prototype.guildId = 0;

        /**
         * SC_UPDATE_ROLE_PRO devotionTotal.
         * @member {number} devotionTotal
         * @memberof S2C.SC_UPDATE_ROLE_PRO
         * @instance
         */
        SC_UPDATE_ROLE_PRO.prototype.devotionTotal = 0;

        /**
         * SC_UPDATE_ROLE_PRO enemyUid.
         * @member {number} enemyUid
         * @memberof S2C.SC_UPDATE_ROLE_PRO
         * @instance
         */
        SC_UPDATE_ROLE_PRO.prototype.enemyUid = 0;

        /**
         * SC_UPDATE_ROLE_PRO fightPower.
         * @member {number} fightPower
         * @memberof S2C.SC_UPDATE_ROLE_PRO
         * @instance
         */
        SC_UPDATE_ROLE_PRO.prototype.fightPower = 0;

        /**
         * SC_UPDATE_ROLE_PRO timeMonthCard.
         * @member {number} timeMonthCard
         * @memberof S2C.SC_UPDATE_ROLE_PRO
         * @instance
         */
        SC_UPDATE_ROLE_PRO.prototype.timeMonthCard = 0;

        /**
         * SC_UPDATE_ROLE_PRO timeLifeCard.
         * @member {number} timeLifeCard
         * @memberof S2C.SC_UPDATE_ROLE_PRO
         * @instance
         */
        SC_UPDATE_ROLE_PRO.prototype.timeLifeCard = 0;

        /**
         * SC_UPDATE_ROLE_PRO joinCnt.
         * @member {number} joinCnt
         * @memberof S2C.SC_UPDATE_ROLE_PRO
         * @instance
         */
        SC_UPDATE_ROLE_PRO.prototype.joinCnt = 0;

        /**
         * SC_UPDATE_ROLE_PRO taofaTotal.
         * @member {number} taofaTotal
         * @memberof S2C.SC_UPDATE_ROLE_PRO
         * @instance
         */
        SC_UPDATE_ROLE_PRO.prototype.taofaTotal = 0;

        /**
         * SC_UPDATE_ROLE_PRO createTime.
         * @member {number} createTime
         * @memberof S2C.SC_UPDATE_ROLE_PRO
         * @instance
         */
        SC_UPDATE_ROLE_PRO.prototype.createTime = 0;

        /**
         * SC_UPDATE_ROLE_PRO harvestPoint.
         * @member {number} harvestPoint
         * @memberof S2C.SC_UPDATE_ROLE_PRO
         * @instance
         */
        SC_UPDATE_ROLE_PRO.prototype.harvestPoint = 0;

        /**
         * SC_UPDATE_ROLE_PRO timeVipCard.
         * @member {number} timeVipCard
         * @memberof S2C.SC_UPDATE_ROLE_PRO
         * @instance
         */
        SC_UPDATE_ROLE_PRO.prototype.timeVipCard = 0;

        /**
         * SC_UPDATE_ROLE_PRO str.
         * @member {number} str
         * @memberof S2C.SC_UPDATE_ROLE_PRO
         * @instance
         */
        SC_UPDATE_ROLE_PRO.prototype.str = 0;

        /**
         * SC_UPDATE_ROLE_PRO brain.
         * @member {number} brain
         * @memberof S2C.SC_UPDATE_ROLE_PRO
         * @instance
         */
        SC_UPDATE_ROLE_PRO.prototype.brain = 0;

        /**
         * SC_UPDATE_ROLE_PRO politics.
         * @member {number} politics
         * @memberof S2C.SC_UPDATE_ROLE_PRO
         * @instance
         */
        SC_UPDATE_ROLE_PRO.prototype.politics = 0;

        /**
         * SC_UPDATE_ROLE_PRO prestige.
         * @member {number} prestige
         * @memberof S2C.SC_UPDATE_ROLE_PRO
         * @instance
         */
        SC_UPDATE_ROLE_PRO.prototype.prestige = 0;

        /**
         * Creates a new SC_UPDATE_ROLE_PRO instance using the specified properties.
         * @function create
         * @memberof S2C.SC_UPDATE_ROLE_PRO
         * @static
         * @param {S2C.ISC_UPDATE_ROLE_PRO=} [properties] Properties to set
         * @returns {S2C.SC_UPDATE_ROLE_PRO} SC_UPDATE_ROLE_PRO instance
         */
        SC_UPDATE_ROLE_PRO.create = function create(properties) {
            return new SC_UPDATE_ROLE_PRO(properties);
        };

        /**
         * Encodes the specified SC_UPDATE_ROLE_PRO message. Does not implicitly {@link S2C.SC_UPDATE_ROLE_PRO.verify|verify} messages.
         * @function encode
         * @memberof S2C.SC_UPDATE_ROLE_PRO
         * @static
         * @param {S2C.ISC_UPDATE_ROLE_PRO} message SC_UPDATE_ROLE_PRO message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SC_UPDATE_ROLE_PRO.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.uid);
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.nickname);
            if (message.headimgurl != null && message.hasOwnProperty("headimgurl"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.headimgurl);
            if (message.diamond != null && message.hasOwnProperty("diamond"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.diamond);
            if (message.gold != null && message.hasOwnProperty("gold"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.gold);
            if (message.level != null && message.hasOwnProperty("level"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.level);
            if (message.vipLevel != null && message.hasOwnProperty("vipLevel"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.vipLevel);
            if (message.exp != null && message.hasOwnProperty("exp"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint64(message.exp);
            if (message.vipExp != null && message.hasOwnProperty("vipExp"))
                writer.uint32(/* id 9, wireType 0 =*/72).uint32(message.vipExp);
            if (message.gender != null && message.hasOwnProperty("gender"))
                writer.uint32(/* id 10, wireType 0 =*/80).uint32(message.gender);
            if (message.iconId != null && message.hasOwnProperty("iconId"))
                writer.uint32(/* id 11, wireType 0 =*/88).uint32(message.iconId);
            if (message.army != null && message.hasOwnProperty("army"))
                writer.uint32(/* id 12, wireType 0 =*/96).uint64(message.army);
            if (message.rice != null && message.hasOwnProperty("rice"))
                writer.uint32(/* id 13, wireType 0 =*/104).uint64(message.rice);
            if (message.reputation != null && message.hasOwnProperty("reputation"))
                writer.uint32(/* id 14, wireType 0 =*/112).uint32(message.reputation);
            if (message.stamina != null && message.hasOwnProperty("stamina"))
                writer.uint32(/* id 15, wireType 0 =*/120).uint32(message.stamina);
            if (message.politicsCnt != null && message.hasOwnProperty("politicsCnt"))
                writer.uint32(/* id 16, wireType 0 =*/128).uint32(message.politicsCnt);
            if (message.intelCnt != null && message.hasOwnProperty("intelCnt"))
                writer.uint32(/* id 17, wireType 0 =*/136).uint32(message.intelCnt);
            if (message.armyCnt != null && message.hasOwnProperty("armyCnt"))
                writer.uint32(/* id 18, wireType 0 =*/144).uint32(message.armyCnt);
            if (message.banquetPoint != null && message.hasOwnProperty("banquetPoint"))
                writer.uint32(/* id 19, wireType 0 =*/152).uint32(message.banquetPoint);
            if (message.devotion != null && message.hasOwnProperty("devotion"))
                writer.uint32(/* id 20, wireType 0 =*/160).uint32(message.devotion);
            if (message.activePoint != null && message.hasOwnProperty("activePoint"))
                writer.uint32(/* id 21, wireType 0 =*/168).uint32(message.activePoint);
            if (message.taofaScore != null && message.hasOwnProperty("taofaScore"))
                writer.uint32(/* id 22, wireType 0 =*/176).uint32(message.taofaScore);
            if (message.combat != null && message.hasOwnProperty("combat"))
                writer.uint32(/* id 23, wireType 0 =*/184).uint32(message.combat);
            if (message.timeStamina != null && message.hasOwnProperty("timeStamina"))
                writer.uint32(/* id 24, wireType 0 =*/192).uint32(message.timeStamina);
            if (message.signature != null && message.hasOwnProperty("signature"))
                writer.uint32(/* id 25, wireType 2 =*/202).string(message.signature);
            if (message.timePoliticsCnt != null && message.hasOwnProperty("timePoliticsCnt"))
                writer.uint32(/* id 26, wireType 0 =*/208).uint32(message.timePoliticsCnt);
            if (message.timeIntelCnt != null && message.hasOwnProperty("timeIntelCnt"))
                writer.uint32(/* id 27, wireType 0 =*/216).uint32(message.timeIntelCnt);
            if (message.timeArmyCnt != null && message.hasOwnProperty("timeArmyCnt"))
                writer.uint32(/* id 28, wireType 0 =*/224).uint32(message.timeArmyCnt);
            if (message.stage != null && message.hasOwnProperty("stage"))
                writer.uint32(/* id 29, wireType 0 =*/232).uint32(message.stage);
            if (message.titleId != null && message.hasOwnProperty("titleId"))
                writer.uint32(/* id 30, wireType 0 =*/240).uint32(message.titleId);
            if (message.admireCombat != null && message.hasOwnProperty("admireCombat"))
                writer.uint32(/* id 31, wireType 0 =*/248).uint32(message.admireCombat);
            if (message.admireLove != null && message.hasOwnProperty("admireLove"))
                writer.uint32(/* id 32, wireType 0 =*/256).uint32(message.admireLove);
            if (message.signedDays != null && message.hasOwnProperty("signedDays"))
                writer.uint32(/* id 33, wireType 0 =*/264).uint32(message.signedDays);
            if (message.admireStage != null && message.hasOwnProperty("admireStage"))
                writer.uint32(/* id 34, wireType 0 =*/272).uint32(message.admireStage);
            if (message.curSignedState != null && message.hasOwnProperty("curSignedState"))
                writer.uint32(/* id 35, wireType 0 =*/280).uint32(message.curSignedState);
            if (message.curSevenState != null && message.hasOwnProperty("curSevenState"))
                writer.uint32(/* id 36, wireType 0 =*/288).uint32(message.curSevenState);
            if (message.sevenDays != null && message.hasOwnProperty("sevenDays"))
                writer.uint32(/* id 37, wireType 0 =*/296).uint32(message.sevenDays);
            if (message.hanlinExp != null && message.hasOwnProperty("hanlinExp"))
                writer.uint32(/* id 38, wireType 0 =*/304).uint32(message.hanlinExp);
            if (message.hanlinId != null && message.hasOwnProperty("hanlinId"))
                writer.uint32(/* id 39, wireType 0 =*/312).uint32(message.hanlinId);
            if (message.fieldScore != null && message.hasOwnProperty("fieldScore"))
                writer.uint32(/* id 40, wireType 0 =*/320).uint32(message.fieldScore);
            if (message.fieldBossHpLeft != null && message.hasOwnProperty("fieldBossHpLeft"))
                writer.uint32(/* id 41, wireType 0 =*/328).uint32(message.fieldBossHpLeft);
            if (message.fieldBossId != null && message.hasOwnProperty("fieldBossId"))
                writer.uint32(/* id 42, wireType 0 =*/336).uint32(message.fieldBossId);
            if (message.salaryCnt != null && message.hasOwnProperty("salaryCnt"))
                writer.uint32(/* id 43, wireType 0 =*/344).uint32(message.salaryCnt);
            if (message.fieldPoint != null && message.hasOwnProperty("fieldPoint"))
                writer.uint32(/* id 44, wireType 0 =*/352).uint32(message.fieldPoint);
            if (message.energy != null && message.hasOwnProperty("energy"))
                writer.uint32(/* id 45, wireType 0 =*/360).uint32(message.energy);
            if (message.timeEnergy != null && message.hasOwnProperty("timeEnergy"))
                writer.uint32(/* id 46, wireType 0 =*/368).uint32(message.timeEnergy);
            if (message.zhenzai != null && message.hasOwnProperty("zhenzai"))
                writer.uint32(/* id 47, wireType 0 =*/376).uint32(message.zhenzai);
            if (message.luck != null && message.hasOwnProperty("luck"))
                writer.uint32(/* id 48, wireType 0 =*/384).uint32(message.luck);
            if (message.silkId != null && message.hasOwnProperty("silkId"))
                writer.uint32(/* id 49, wireType 0 =*/392).uint32(message.silkId);
            if (message.fastSilk != null && message.hasOwnProperty("fastSilk"))
                writer.uint32(/* id 50, wireType 0 =*/400).uint32(message.fastSilk);
            if (message.timeLeftGuild != null && message.hasOwnProperty("timeLeftGuild"))
                writer.uint32(/* id 51, wireType 0 =*/408).uint32(message.timeLeftGuild);
            if (message.buildType != null && message.hasOwnProperty("buildType"))
                writer.uint32(/* id 52, wireType 0 =*/416).uint32(message.buildType);
            if (message.bossHp != null && message.hasOwnProperty("bossHp"))
                writer.uint32(/* id 53, wireType 0 =*/424).uint64(message.bossHp);
            if (message.gmAuth != null && message.hasOwnProperty("gmAuth"))
                writer.uint32(/* id 54, wireType 0 =*/432).uint32(message.gmAuth);
            if (message.taofaId != null && message.hasOwnProperty("taofaId"))
                writer.uint32(/* id 55, wireType 0 =*/440).uint32(message.taofaId);
            if (message.taofaMaxId != null && message.hasOwnProperty("taofaMaxId"))
                writer.uint32(/* id 56, wireType 0 =*/448).uint32(message.taofaMaxId);
            if (message.guildId != null && message.hasOwnProperty("guildId"))
                writer.uint32(/* id 57, wireType 0 =*/456).uint32(message.guildId);
            if (message.devotionTotal != null && message.hasOwnProperty("devotionTotal"))
                writer.uint32(/* id 58, wireType 0 =*/464).uint32(message.devotionTotal);
            if (message.enemyUid != null && message.hasOwnProperty("enemyUid"))
                writer.uint32(/* id 59, wireType 0 =*/472).uint32(message.enemyUid);
            if (message.fightPower != null && message.hasOwnProperty("fightPower"))
                writer.uint32(/* id 60, wireType 0 =*/480).uint32(message.fightPower);
            if (message.timeMonthCard != null && message.hasOwnProperty("timeMonthCard"))
                writer.uint32(/* id 61, wireType 0 =*/488).uint32(message.timeMonthCard);
            if (message.timeLifeCard != null && message.hasOwnProperty("timeLifeCard"))
                writer.uint32(/* id 62, wireType 0 =*/496).uint32(message.timeLifeCard);
            if (message.joinCnt != null && message.hasOwnProperty("joinCnt"))
                writer.uint32(/* id 63, wireType 0 =*/504).uint32(message.joinCnt);
            if (message.taofaTotal != null && message.hasOwnProperty("taofaTotal"))
                writer.uint32(/* id 64, wireType 0 =*/512).uint32(message.taofaTotal);
            if (message.createTime != null && message.hasOwnProperty("createTime"))
                writer.uint32(/* id 65, wireType 0 =*/520).uint32(message.createTime);
            if (message.harvestPoint != null && message.hasOwnProperty("harvestPoint"))
                writer.uint32(/* id 66, wireType 0 =*/528).uint32(message.harvestPoint);
            if (message.timeVipCard != null && message.hasOwnProperty("timeVipCard"))
                writer.uint32(/* id 67, wireType 0 =*/536).uint32(message.timeVipCard);
            if (message.str != null && message.hasOwnProperty("str"))
                writer.uint32(/* id 68, wireType 0 =*/544).uint32(message.str);
            if (message.brain != null && message.hasOwnProperty("brain"))
                writer.uint32(/* id 69, wireType 0 =*/552).uint32(message.brain);
            if (message.politics != null && message.hasOwnProperty("politics"))
                writer.uint32(/* id 70, wireType 0 =*/560).uint32(message.politics);
            if (message.prestige != null && message.hasOwnProperty("prestige"))
                writer.uint32(/* id 71, wireType 0 =*/568).uint32(message.prestige);
            return writer;
        };

        /**
         * Encodes the specified SC_UPDATE_ROLE_PRO message, length delimited. Does not implicitly {@link S2C.SC_UPDATE_ROLE_PRO.verify|verify} messages.
         * @function encodeDelimited
         * @memberof S2C.SC_UPDATE_ROLE_PRO
         * @static
         * @param {S2C.ISC_UPDATE_ROLE_PRO} message SC_UPDATE_ROLE_PRO message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SC_UPDATE_ROLE_PRO.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SC_UPDATE_ROLE_PRO message from the specified reader or buffer.
         * @function decode
         * @memberof S2C.SC_UPDATE_ROLE_PRO
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {S2C.SC_UPDATE_ROLE_PRO} SC_UPDATE_ROLE_PRO
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SC_UPDATE_ROLE_PRO.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2C.SC_UPDATE_ROLE_PRO();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.uint32();
                    break;
                case 2:
                    message.nickname = reader.string();
                    break;
                case 3:
                    message.headimgurl = reader.string();
                    break;
                case 4:
                    message.diamond = reader.uint32();
                    break;
                case 5:
                    message.gold = reader.uint64();
                    break;
                case 6:
                    message.level = reader.uint32();
                    break;
                case 7:
                    message.vipLevel = reader.uint32();
                    break;
                case 8:
                    message.exp = reader.uint64();
                    break;
                case 9:
                    message.vipExp = reader.uint32();
                    break;
                case 10:
                    message.gender = reader.uint32();
                    break;
                case 11:
                    message.iconId = reader.uint32();
                    break;
                case 12:
                    message.army = reader.uint64();
                    break;
                case 13:
                    message.rice = reader.uint64();
                    break;
                case 14:
                    message.reputation = reader.uint32();
                    break;
                case 15:
                    message.stamina = reader.uint32();
                    break;
                case 16:
                    message.politicsCnt = reader.uint32();
                    break;
                case 17:
                    message.intelCnt = reader.uint32();
                    break;
                case 18:
                    message.armyCnt = reader.uint32();
                    break;
                case 19:
                    message.banquetPoint = reader.uint32();
                    break;
                case 20:
                    message.devotion = reader.uint32();
                    break;
                case 21:
                    message.activePoint = reader.uint32();
                    break;
                case 22:
                    message.taofaScore = reader.uint32();
                    break;
                case 23:
                    message.combat = reader.uint32();
                    break;
                case 24:
                    message.timeStamina = reader.uint32();
                    break;
                case 25:
                    message.signature = reader.string();
                    break;
                case 26:
                    message.timePoliticsCnt = reader.uint32();
                    break;
                case 27:
                    message.timeIntelCnt = reader.uint32();
                    break;
                case 28:
                    message.timeArmyCnt = reader.uint32();
                    break;
                case 29:
                    message.stage = reader.uint32();
                    break;
                case 30:
                    message.titleId = reader.uint32();
                    break;
                case 31:
                    message.admireCombat = reader.uint32();
                    break;
                case 32:
                    message.admireLove = reader.uint32();
                    break;
                case 33:
                    message.signedDays = reader.uint32();
                    break;
                case 34:
                    message.admireStage = reader.uint32();
                    break;
                case 35:
                    message.curSignedState = reader.uint32();
                    break;
                case 36:
                    message.curSevenState = reader.uint32();
                    break;
                case 37:
                    message.sevenDays = reader.uint32();
                    break;
                case 38:
                    message.hanlinExp = reader.uint32();
                    break;
                case 39:
                    message.hanlinId = reader.uint32();
                    break;
                case 40:
                    message.fieldScore = reader.uint32();
                    break;
                case 41:
                    message.fieldBossHpLeft = reader.uint32();
                    break;
                case 42:
                    message.fieldBossId = reader.uint32();
                    break;
                case 43:
                    message.salaryCnt = reader.uint32();
                    break;
                case 44:
                    message.fieldPoint = reader.uint32();
                    break;
                case 45:
                    message.energy = reader.uint32();
                    break;
                case 46:
                    message.timeEnergy = reader.uint32();
                    break;
                case 47:
                    message.zhenzai = reader.uint32();
                    break;
                case 48:
                    message.luck = reader.uint32();
                    break;
                case 49:
                    message.silkId = reader.uint32();
                    break;
                case 50:
                    message.fastSilk = reader.uint32();
                    break;
                case 51:
                    message.timeLeftGuild = reader.uint32();
                    break;
                case 52:
                    message.buildType = reader.uint32();
                    break;
                case 53:
                    message.bossHp = reader.uint64();
                    break;
                case 54:
                    message.gmAuth = reader.uint32();
                    break;
                case 55:
                    message.taofaId = reader.uint32();
                    break;
                case 56:
                    message.taofaMaxId = reader.uint32();
                    break;
                case 57:
                    message.guildId = reader.uint32();
                    break;
                case 58:
                    message.devotionTotal = reader.uint32();
                    break;
                case 59:
                    message.enemyUid = reader.uint32();
                    break;
                case 60:
                    message.fightPower = reader.uint32();
                    break;
                case 61:
                    message.timeMonthCard = reader.uint32();
                    break;
                case 62:
                    message.timeLifeCard = reader.uint32();
                    break;
                case 63:
                    message.joinCnt = reader.uint32();
                    break;
                case 64:
                    message.taofaTotal = reader.uint32();
                    break;
                case 65:
                    message.createTime = reader.uint32();
                    break;
                case 66:
                    message.harvestPoint = reader.uint32();
                    break;
                case 67:
                    message.timeVipCard = reader.uint32();
                    break;
                case 68:
                    message.str = reader.uint32();
                    break;
                case 69:
                    message.brain = reader.uint32();
                    break;
                case 70:
                    message.politics = reader.uint32();
                    break;
                case 71:
                    message.prestige = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SC_UPDATE_ROLE_PRO message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof S2C.SC_UPDATE_ROLE_PRO
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {S2C.SC_UPDATE_ROLE_PRO} SC_UPDATE_ROLE_PRO
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SC_UPDATE_ROLE_PRO.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SC_UPDATE_ROLE_PRO message.
         * @function verify
         * @memberof S2C.SC_UPDATE_ROLE_PRO
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SC_UPDATE_ROLE_PRO.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid))
                    return "uid: integer expected";
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                if (!$util.isString(message.nickname))
                    return "nickname: string expected";
            if (message.headimgurl != null && message.hasOwnProperty("headimgurl"))
                if (!$util.isString(message.headimgurl))
                    return "headimgurl: string expected";
            if (message.diamond != null && message.hasOwnProperty("diamond"))
                if (!$util.isInteger(message.diamond))
                    return "diamond: integer expected";
            if (message.gold != null && message.hasOwnProperty("gold"))
                if (!$util.isInteger(message.gold) && !(message.gold && $util.isInteger(message.gold.low) && $util.isInteger(message.gold.high)))
                    return "gold: integer|Long expected";
            if (message.level != null && message.hasOwnProperty("level"))
                if (!$util.isInteger(message.level))
                    return "level: integer expected";
            if (message.vipLevel != null && message.hasOwnProperty("vipLevel"))
                if (!$util.isInteger(message.vipLevel))
                    return "vipLevel: integer expected";
            if (message.exp != null && message.hasOwnProperty("exp"))
                if (!$util.isInteger(message.exp) && !(message.exp && $util.isInteger(message.exp.low) && $util.isInteger(message.exp.high)))
                    return "exp: integer|Long expected";
            if (message.vipExp != null && message.hasOwnProperty("vipExp"))
                if (!$util.isInteger(message.vipExp))
                    return "vipExp: integer expected";
            if (message.gender != null && message.hasOwnProperty("gender"))
                if (!$util.isInteger(message.gender))
                    return "gender: integer expected";
            if (message.iconId != null && message.hasOwnProperty("iconId"))
                if (!$util.isInteger(message.iconId))
                    return "iconId: integer expected";
            if (message.army != null && message.hasOwnProperty("army"))
                if (!$util.isInteger(message.army) && !(message.army && $util.isInteger(message.army.low) && $util.isInteger(message.army.high)))
                    return "army: integer|Long expected";
            if (message.rice != null && message.hasOwnProperty("rice"))
                if (!$util.isInteger(message.rice) && !(message.rice && $util.isInteger(message.rice.low) && $util.isInteger(message.rice.high)))
                    return "rice: integer|Long expected";
            if (message.reputation != null && message.hasOwnProperty("reputation"))
                if (!$util.isInteger(message.reputation))
                    return "reputation: integer expected";
            if (message.stamina != null && message.hasOwnProperty("stamina"))
                if (!$util.isInteger(message.stamina))
                    return "stamina: integer expected";
            if (message.politicsCnt != null && message.hasOwnProperty("politicsCnt"))
                if (!$util.isInteger(message.politicsCnt))
                    return "politicsCnt: integer expected";
            if (message.intelCnt != null && message.hasOwnProperty("intelCnt"))
                if (!$util.isInteger(message.intelCnt))
                    return "intelCnt: integer expected";
            if (message.armyCnt != null && message.hasOwnProperty("armyCnt"))
                if (!$util.isInteger(message.armyCnt))
                    return "armyCnt: integer expected";
            if (message.banquetPoint != null && message.hasOwnProperty("banquetPoint"))
                if (!$util.isInteger(message.banquetPoint))
                    return "banquetPoint: integer expected";
            if (message.devotion != null && message.hasOwnProperty("devotion"))
                if (!$util.isInteger(message.devotion))
                    return "devotion: integer expected";
            if (message.activePoint != null && message.hasOwnProperty("activePoint"))
                if (!$util.isInteger(message.activePoint))
                    return "activePoint: integer expected";
            if (message.taofaScore != null && message.hasOwnProperty("taofaScore"))
                if (!$util.isInteger(message.taofaScore))
                    return "taofaScore: integer expected";
            if (message.combat != null && message.hasOwnProperty("combat"))
                if (!$util.isInteger(message.combat))
                    return "combat: integer expected";
            if (message.timeStamina != null && message.hasOwnProperty("timeStamina"))
                if (!$util.isInteger(message.timeStamina))
                    return "timeStamina: integer expected";
            if (message.signature != null && message.hasOwnProperty("signature"))
                if (!$util.isString(message.signature))
                    return "signature: string expected";
            if (message.timePoliticsCnt != null && message.hasOwnProperty("timePoliticsCnt"))
                if (!$util.isInteger(message.timePoliticsCnt))
                    return "timePoliticsCnt: integer expected";
            if (message.timeIntelCnt != null && message.hasOwnProperty("timeIntelCnt"))
                if (!$util.isInteger(message.timeIntelCnt))
                    return "timeIntelCnt: integer expected";
            if (message.timeArmyCnt != null && message.hasOwnProperty("timeArmyCnt"))
                if (!$util.isInteger(message.timeArmyCnt))
                    return "timeArmyCnt: integer expected";
            if (message.stage != null && message.hasOwnProperty("stage"))
                if (!$util.isInteger(message.stage))
                    return "stage: integer expected";
            if (message.titleId != null && message.hasOwnProperty("titleId"))
                if (!$util.isInteger(message.titleId))
                    return "titleId: integer expected";
            if (message.admireCombat != null && message.hasOwnProperty("admireCombat"))
                if (!$util.isInteger(message.admireCombat))
                    return "admireCombat: integer expected";
            if (message.admireLove != null && message.hasOwnProperty("admireLove"))
                if (!$util.isInteger(message.admireLove))
                    return "admireLove: integer expected";
            if (message.signedDays != null && message.hasOwnProperty("signedDays"))
                if (!$util.isInteger(message.signedDays))
                    return "signedDays: integer expected";
            if (message.admireStage != null && message.hasOwnProperty("admireStage"))
                if (!$util.isInteger(message.admireStage))
                    return "admireStage: integer expected";
            if (message.curSignedState != null && message.hasOwnProperty("curSignedState"))
                if (!$util.isInteger(message.curSignedState))
                    return "curSignedState: integer expected";
            if (message.curSevenState != null && message.hasOwnProperty("curSevenState"))
                if (!$util.isInteger(message.curSevenState))
                    return "curSevenState: integer expected";
            if (message.sevenDays != null && message.hasOwnProperty("sevenDays"))
                if (!$util.isInteger(message.sevenDays))
                    return "sevenDays: integer expected";
            if (message.hanlinExp != null && message.hasOwnProperty("hanlinExp"))
                if (!$util.isInteger(message.hanlinExp))
                    return "hanlinExp: integer expected";
            if (message.hanlinId != null && message.hasOwnProperty("hanlinId"))
                if (!$util.isInteger(message.hanlinId))
                    return "hanlinId: integer expected";
            if (message.fieldScore != null && message.hasOwnProperty("fieldScore"))
                if (!$util.isInteger(message.fieldScore))
                    return "fieldScore: integer expected";
            if (message.fieldBossHpLeft != null && message.hasOwnProperty("fieldBossHpLeft"))
                if (!$util.isInteger(message.fieldBossHpLeft))
                    return "fieldBossHpLeft: integer expected";
            if (message.fieldBossId != null && message.hasOwnProperty("fieldBossId"))
                if (!$util.isInteger(message.fieldBossId))
                    return "fieldBossId: integer expected";
            if (message.salaryCnt != null && message.hasOwnProperty("salaryCnt"))
                if (!$util.isInteger(message.salaryCnt))
                    return "salaryCnt: integer expected";
            if (message.fieldPoint != null && message.hasOwnProperty("fieldPoint"))
                if (!$util.isInteger(message.fieldPoint))
                    return "fieldPoint: integer expected";
            if (message.energy != null && message.hasOwnProperty("energy"))
                if (!$util.isInteger(message.energy))
                    return "energy: integer expected";
            if (message.timeEnergy != null && message.hasOwnProperty("timeEnergy"))
                if (!$util.isInteger(message.timeEnergy))
                    return "timeEnergy: integer expected";
            if (message.zhenzai != null && message.hasOwnProperty("zhenzai"))
                if (!$util.isInteger(message.zhenzai))
                    return "zhenzai: integer expected";
            if (message.luck != null && message.hasOwnProperty("luck"))
                if (!$util.isInteger(message.luck))
                    return "luck: integer expected";
            if (message.silkId != null && message.hasOwnProperty("silkId"))
                if (!$util.isInteger(message.silkId))
                    return "silkId: integer expected";
            if (message.fastSilk != null && message.hasOwnProperty("fastSilk"))
                if (!$util.isInteger(message.fastSilk))
                    return "fastSilk: integer expected";
            if (message.timeLeftGuild != null && message.hasOwnProperty("timeLeftGuild"))
                if (!$util.isInteger(message.timeLeftGuild))
                    return "timeLeftGuild: integer expected";
            if (message.buildType != null && message.hasOwnProperty("buildType"))
                if (!$util.isInteger(message.buildType))
                    return "buildType: integer expected";
            if (message.bossHp != null && message.hasOwnProperty("bossHp"))
                if (!$util.isInteger(message.bossHp) && !(message.bossHp && $util.isInteger(message.bossHp.low) && $util.isInteger(message.bossHp.high)))
                    return "bossHp: integer|Long expected";
            if (message.gmAuth != null && message.hasOwnProperty("gmAuth"))
                if (!$util.isInteger(message.gmAuth))
                    return "gmAuth: integer expected";
            if (message.taofaId != null && message.hasOwnProperty("taofaId"))
                if (!$util.isInteger(message.taofaId))
                    return "taofaId: integer expected";
            if (message.taofaMaxId != null && message.hasOwnProperty("taofaMaxId"))
                if (!$util.isInteger(message.taofaMaxId))
                    return "taofaMaxId: integer expected";
            if (message.guildId != null && message.hasOwnProperty("guildId"))
                if (!$util.isInteger(message.guildId))
                    return "guildId: integer expected";
            if (message.devotionTotal != null && message.hasOwnProperty("devotionTotal"))
                if (!$util.isInteger(message.devotionTotal))
                    return "devotionTotal: integer expected";
            if (message.enemyUid != null && message.hasOwnProperty("enemyUid"))
                if (!$util.isInteger(message.enemyUid))
                    return "enemyUid: integer expected";
            if (message.fightPower != null && message.hasOwnProperty("fightPower"))
                if (!$util.isInteger(message.fightPower))
                    return "fightPower: integer expected";
            if (message.timeMonthCard != null && message.hasOwnProperty("timeMonthCard"))
                if (!$util.isInteger(message.timeMonthCard))
                    return "timeMonthCard: integer expected";
            if (message.timeLifeCard != null && message.hasOwnProperty("timeLifeCard"))
                if (!$util.isInteger(message.timeLifeCard))
                    return "timeLifeCard: integer expected";
            if (message.joinCnt != null && message.hasOwnProperty("joinCnt"))
                if (!$util.isInteger(message.joinCnt))
                    return "joinCnt: integer expected";
            if (message.taofaTotal != null && message.hasOwnProperty("taofaTotal"))
                if (!$util.isInteger(message.taofaTotal))
                    return "taofaTotal: integer expected";
            if (message.createTime != null && message.hasOwnProperty("createTime"))
                if (!$util.isInteger(message.createTime))
                    return "createTime: integer expected";
            if (message.harvestPoint != null && message.hasOwnProperty("harvestPoint"))
                if (!$util.isInteger(message.harvestPoint))
                    return "harvestPoint: integer expected";
            if (message.timeVipCard != null && message.hasOwnProperty("timeVipCard"))
                if (!$util.isInteger(message.timeVipCard))
                    return "timeVipCard: integer expected";
            if (message.str != null && message.hasOwnProperty("str"))
                if (!$util.isInteger(message.str))
                    return "str: integer expected";
            if (message.brain != null && message.hasOwnProperty("brain"))
                if (!$util.isInteger(message.brain))
                    return "brain: integer expected";
            if (message.politics != null && message.hasOwnProperty("politics"))
                if (!$util.isInteger(message.politics))
                    return "politics: integer expected";
            if (message.prestige != null && message.hasOwnProperty("prestige"))
                if (!$util.isInteger(message.prestige))
                    return "prestige: integer expected";
            return null;
        };

        /**
         * Creates a SC_UPDATE_ROLE_PRO message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof S2C.SC_UPDATE_ROLE_PRO
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {S2C.SC_UPDATE_ROLE_PRO} SC_UPDATE_ROLE_PRO
         */
        SC_UPDATE_ROLE_PRO.fromObject = function fromObject(object) {
            if (object instanceof $root.S2C.SC_UPDATE_ROLE_PRO)
                return object;
            var message = new $root.S2C.SC_UPDATE_ROLE_PRO();
            if (object.uid != null)
                message.uid = object.uid >>> 0;
            if (object.nickname != null)
                message.nickname = String(object.nickname);
            if (object.headimgurl != null)
                message.headimgurl = String(object.headimgurl);
            if (object.diamond != null)
                message.diamond = object.diamond >>> 0;
            if (object.gold != null)
                if ($util.Long)
                    (message.gold = $util.Long.fromValue(object.gold)).unsigned = true;
                else if (typeof object.gold === "string")
                    message.gold = parseInt(object.gold, 10);
                else if (typeof object.gold === "number")
                    message.gold = object.gold;
                else if (typeof object.gold === "object")
                    message.gold = new $util.LongBits(object.gold.low >>> 0, object.gold.high >>> 0).toNumber(true);
            if (object.level != null)
                message.level = object.level >>> 0;
            if (object.vipLevel != null)
                message.vipLevel = object.vipLevel >>> 0;
            if (object.exp != null)
                if ($util.Long)
                    (message.exp = $util.Long.fromValue(object.exp)).unsigned = true;
                else if (typeof object.exp === "string")
                    message.exp = parseInt(object.exp, 10);
                else if (typeof object.exp === "number")
                    message.exp = object.exp;
                else if (typeof object.exp === "object")
                    message.exp = new $util.LongBits(object.exp.low >>> 0, object.exp.high >>> 0).toNumber(true);
            if (object.vipExp != null)
                message.vipExp = object.vipExp >>> 0;
            if (object.gender != null)
                message.gender = object.gender >>> 0;
            if (object.iconId != null)
                message.iconId = object.iconId >>> 0;
            if (object.army != null)
                if ($util.Long)
                    (message.army = $util.Long.fromValue(object.army)).unsigned = true;
                else if (typeof object.army === "string")
                    message.army = parseInt(object.army, 10);
                else if (typeof object.army === "number")
                    message.army = object.army;
                else if (typeof object.army === "object")
                    message.army = new $util.LongBits(object.army.low >>> 0, object.army.high >>> 0).toNumber(true);
            if (object.rice != null)
                if ($util.Long)
                    (message.rice = $util.Long.fromValue(object.rice)).unsigned = true;
                else if (typeof object.rice === "string")
                    message.rice = parseInt(object.rice, 10);
                else if (typeof object.rice === "number")
                    message.rice = object.rice;
                else if (typeof object.rice === "object")
                    message.rice = new $util.LongBits(object.rice.low >>> 0, object.rice.high >>> 0).toNumber(true);
            if (object.reputation != null)
                message.reputation = object.reputation >>> 0;
            if (object.stamina != null)
                message.stamina = object.stamina >>> 0;
            if (object.politicsCnt != null)
                message.politicsCnt = object.politicsCnt >>> 0;
            if (object.intelCnt != null)
                message.intelCnt = object.intelCnt >>> 0;
            if (object.armyCnt != null)
                message.armyCnt = object.armyCnt >>> 0;
            if (object.banquetPoint != null)
                message.banquetPoint = object.banquetPoint >>> 0;
            if (object.devotion != null)
                message.devotion = object.devotion >>> 0;
            if (object.activePoint != null)
                message.activePoint = object.activePoint >>> 0;
            if (object.taofaScore != null)
                message.taofaScore = object.taofaScore >>> 0;
            if (object.combat != null)
                message.combat = object.combat >>> 0;
            if (object.timeStamina != null)
                message.timeStamina = object.timeStamina >>> 0;
            if (object.signature != null)
                message.signature = String(object.signature);
            if (object.timePoliticsCnt != null)
                message.timePoliticsCnt = object.timePoliticsCnt >>> 0;
            if (object.timeIntelCnt != null)
                message.timeIntelCnt = object.timeIntelCnt >>> 0;
            if (object.timeArmyCnt != null)
                message.timeArmyCnt = object.timeArmyCnt >>> 0;
            if (object.stage != null)
                message.stage = object.stage >>> 0;
            if (object.titleId != null)
                message.titleId = object.titleId >>> 0;
            if (object.admireCombat != null)
                message.admireCombat = object.admireCombat >>> 0;
            if (object.admireLove != null)
                message.admireLove = object.admireLove >>> 0;
            if (object.signedDays != null)
                message.signedDays = object.signedDays >>> 0;
            if (object.admireStage != null)
                message.admireStage = object.admireStage >>> 0;
            if (object.curSignedState != null)
                message.curSignedState = object.curSignedState >>> 0;
            if (object.curSevenState != null)
                message.curSevenState = object.curSevenState >>> 0;
            if (object.sevenDays != null)
                message.sevenDays = object.sevenDays >>> 0;
            if (object.hanlinExp != null)
                message.hanlinExp = object.hanlinExp >>> 0;
            if (object.hanlinId != null)
                message.hanlinId = object.hanlinId >>> 0;
            if (object.fieldScore != null)
                message.fieldScore = object.fieldScore >>> 0;
            if (object.fieldBossHpLeft != null)
                message.fieldBossHpLeft = object.fieldBossHpLeft >>> 0;
            if (object.fieldBossId != null)
                message.fieldBossId = object.fieldBossId >>> 0;
            if (object.salaryCnt != null)
                message.salaryCnt = object.salaryCnt >>> 0;
            if (object.fieldPoint != null)
                message.fieldPoint = object.fieldPoint >>> 0;
            if (object.energy != null)
                message.energy = object.energy >>> 0;
            if (object.timeEnergy != null)
                message.timeEnergy = object.timeEnergy >>> 0;
            if (object.zhenzai != null)
                message.zhenzai = object.zhenzai >>> 0;
            if (object.luck != null)
                message.luck = object.luck >>> 0;
            if (object.silkId != null)
                message.silkId = object.silkId >>> 0;
            if (object.fastSilk != null)
                message.fastSilk = object.fastSilk >>> 0;
            if (object.timeLeftGuild != null)
                message.timeLeftGuild = object.timeLeftGuild >>> 0;
            if (object.buildType != null)
                message.buildType = object.buildType >>> 0;
            if (object.bossHp != null)
                if ($util.Long)
                    (message.bossHp = $util.Long.fromValue(object.bossHp)).unsigned = true;
                else if (typeof object.bossHp === "string")
                    message.bossHp = parseInt(object.bossHp, 10);
                else if (typeof object.bossHp === "number")
                    message.bossHp = object.bossHp;
                else if (typeof object.bossHp === "object")
                    message.bossHp = new $util.LongBits(object.bossHp.low >>> 0, object.bossHp.high >>> 0).toNumber(true);
            if (object.gmAuth != null)
                message.gmAuth = object.gmAuth >>> 0;
            if (object.taofaId != null)
                message.taofaId = object.taofaId >>> 0;
            if (object.taofaMaxId != null)
                message.taofaMaxId = object.taofaMaxId >>> 0;
            if (object.guildId != null)
                message.guildId = object.guildId >>> 0;
            if (object.devotionTotal != null)
                message.devotionTotal = object.devotionTotal >>> 0;
            if (object.enemyUid != null)
                message.enemyUid = object.enemyUid >>> 0;
            if (object.fightPower != null)
                message.fightPower = object.fightPower >>> 0;
            if (object.timeMonthCard != null)
                message.timeMonthCard = object.timeMonthCard >>> 0;
            if (object.timeLifeCard != null)
                message.timeLifeCard = object.timeLifeCard >>> 0;
            if (object.joinCnt != null)
                message.joinCnt = object.joinCnt >>> 0;
            if (object.taofaTotal != null)
                message.taofaTotal = object.taofaTotal >>> 0;
            if (object.createTime != null)
                message.createTime = object.createTime >>> 0;
            if (object.harvestPoint != null)
                message.harvestPoint = object.harvestPoint >>> 0;
            if (object.timeVipCard != null)
                message.timeVipCard = object.timeVipCard >>> 0;
            if (object.str != null)
                message.str = object.str >>> 0;
            if (object.brain != null)
                message.brain = object.brain >>> 0;
            if (object.politics != null)
                message.politics = object.politics >>> 0;
            if (object.prestige != null)
                message.prestige = object.prestige >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a SC_UPDATE_ROLE_PRO message. Also converts values to other types if specified.
         * @function toObject
         * @memberof S2C.SC_UPDATE_ROLE_PRO
         * @static
         * @param {S2C.SC_UPDATE_ROLE_PRO} message SC_UPDATE_ROLE_PRO
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SC_UPDATE_ROLE_PRO.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.uid = 0;
                object.nickname = "";
                object.headimgurl = "";
                object.diamond = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.gold = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.gold = options.longs === String ? "0" : 0;
                object.level = 0;
                object.vipLevel = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.exp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.exp = options.longs === String ? "0" : 0;
                object.vipExp = 0;
                object.gender = 0;
                object.iconId = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.army = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.army = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.rice = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.rice = options.longs === String ? "0" : 0;
                object.reputation = 0;
                object.stamina = 0;
                object.politicsCnt = 0;
                object.intelCnt = 0;
                object.armyCnt = 0;
                object.banquetPoint = 0;
                object.devotion = 0;
                object.activePoint = 0;
                object.taofaScore = 0;
                object.combat = 0;
                object.timeStamina = 0;
                object.signature = "";
                object.timePoliticsCnt = 0;
                object.timeIntelCnt = 0;
                object.timeArmyCnt = 0;
                object.stage = 0;
                object.titleId = 0;
                object.admireCombat = 0;
                object.admireLove = 0;
                object.signedDays = 0;
                object.admireStage = 0;
                object.curSignedState = 0;
                object.curSevenState = 0;
                object.sevenDays = 0;
                object.hanlinExp = 0;
                object.hanlinId = 0;
                object.fieldScore = 0;
                object.fieldBossHpLeft = 0;
                object.fieldBossId = 0;
                object.salaryCnt = 0;
                object.fieldPoint = 0;
                object.energy = 0;
                object.timeEnergy = 0;
                object.zhenzai = 0;
                object.luck = 0;
                object.silkId = 0;
                object.fastSilk = 0;
                object.timeLeftGuild = 0;
                object.buildType = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.bossHp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.bossHp = options.longs === String ? "0" : 0;
                object.gmAuth = 0;
                object.taofaId = 0;
                object.taofaMaxId = 0;
                object.guildId = 0;
                object.devotionTotal = 0;
                object.enemyUid = 0;
                object.fightPower = 0;
                object.timeMonthCard = 0;
                object.timeLifeCard = 0;
                object.joinCnt = 0;
                object.taofaTotal = 0;
                object.createTime = 0;
                object.harvestPoint = 0;
                object.timeVipCard = 0;
                object.str = 0;
                object.brain = 0;
                object.politics = 0;
                object.prestige = 0;
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                object.nickname = message.nickname;
            if (message.headimgurl != null && message.hasOwnProperty("headimgurl"))
                object.headimgurl = message.headimgurl;
            if (message.diamond != null && message.hasOwnProperty("diamond"))
                object.diamond = message.diamond;
            if (message.gold != null && message.hasOwnProperty("gold"))
                if (typeof message.gold === "number")
                    object.gold = options.longs === String ? String(message.gold) : message.gold;
                else
                    object.gold = options.longs === String ? $util.Long.prototype.toString.call(message.gold) : options.longs === Number ? new $util.LongBits(message.gold.low >>> 0, message.gold.high >>> 0).toNumber(true) : message.gold;
            if (message.level != null && message.hasOwnProperty("level"))
                object.level = message.level;
            if (message.vipLevel != null && message.hasOwnProperty("vipLevel"))
                object.vipLevel = message.vipLevel;
            if (message.exp != null && message.hasOwnProperty("exp"))
                if (typeof message.exp === "number")
                    object.exp = options.longs === String ? String(message.exp) : message.exp;
                else
                    object.exp = options.longs === String ? $util.Long.prototype.toString.call(message.exp) : options.longs === Number ? new $util.LongBits(message.exp.low >>> 0, message.exp.high >>> 0).toNumber(true) : message.exp;
            if (message.vipExp != null && message.hasOwnProperty("vipExp"))
                object.vipExp = message.vipExp;
            if (message.gender != null && message.hasOwnProperty("gender"))
                object.gender = message.gender;
            if (message.iconId != null && message.hasOwnProperty("iconId"))
                object.iconId = message.iconId;
            if (message.army != null && message.hasOwnProperty("army"))
                if (typeof message.army === "number")
                    object.army = options.longs === String ? String(message.army) : message.army;
                else
                    object.army = options.longs === String ? $util.Long.prototype.toString.call(message.army) : options.longs === Number ? new $util.LongBits(message.army.low >>> 0, message.army.high >>> 0).toNumber(true) : message.army;
            if (message.rice != null && message.hasOwnProperty("rice"))
                if (typeof message.rice === "number")
                    object.rice = options.longs === String ? String(message.rice) : message.rice;
                else
                    object.rice = options.longs === String ? $util.Long.prototype.toString.call(message.rice) : options.longs === Number ? new $util.LongBits(message.rice.low >>> 0, message.rice.high >>> 0).toNumber(true) : message.rice;
            if (message.reputation != null && message.hasOwnProperty("reputation"))
                object.reputation = message.reputation;
            if (message.stamina != null && message.hasOwnProperty("stamina"))
                object.stamina = message.stamina;
            if (message.politicsCnt != null && message.hasOwnProperty("politicsCnt"))
                object.politicsCnt = message.politicsCnt;
            if (message.intelCnt != null && message.hasOwnProperty("intelCnt"))
                object.intelCnt = message.intelCnt;
            if (message.armyCnt != null && message.hasOwnProperty("armyCnt"))
                object.armyCnt = message.armyCnt;
            if (message.banquetPoint != null && message.hasOwnProperty("banquetPoint"))
                object.banquetPoint = message.banquetPoint;
            if (message.devotion != null && message.hasOwnProperty("devotion"))
                object.devotion = message.devotion;
            if (message.activePoint != null && message.hasOwnProperty("activePoint"))
                object.activePoint = message.activePoint;
            if (message.taofaScore != null && message.hasOwnProperty("taofaScore"))
                object.taofaScore = message.taofaScore;
            if (message.combat != null && message.hasOwnProperty("combat"))
                object.combat = message.combat;
            if (message.timeStamina != null && message.hasOwnProperty("timeStamina"))
                object.timeStamina = message.timeStamina;
            if (message.signature != null && message.hasOwnProperty("signature"))
                object.signature = message.signature;
            if (message.timePoliticsCnt != null && message.hasOwnProperty("timePoliticsCnt"))
                object.timePoliticsCnt = message.timePoliticsCnt;
            if (message.timeIntelCnt != null && message.hasOwnProperty("timeIntelCnt"))
                object.timeIntelCnt = message.timeIntelCnt;
            if (message.timeArmyCnt != null && message.hasOwnProperty("timeArmyCnt"))
                object.timeArmyCnt = message.timeArmyCnt;
            if (message.stage != null && message.hasOwnProperty("stage"))
                object.stage = message.stage;
            if (message.titleId != null && message.hasOwnProperty("titleId"))
                object.titleId = message.titleId;
            if (message.admireCombat != null && message.hasOwnProperty("admireCombat"))
                object.admireCombat = message.admireCombat;
            if (message.admireLove != null && message.hasOwnProperty("admireLove"))
                object.admireLove = message.admireLove;
            if (message.signedDays != null && message.hasOwnProperty("signedDays"))
                object.signedDays = message.signedDays;
            if (message.admireStage != null && message.hasOwnProperty("admireStage"))
                object.admireStage = message.admireStage;
            if (message.curSignedState != null && message.hasOwnProperty("curSignedState"))
                object.curSignedState = message.curSignedState;
            if (message.curSevenState != null && message.hasOwnProperty("curSevenState"))
                object.curSevenState = message.curSevenState;
            if (message.sevenDays != null && message.hasOwnProperty("sevenDays"))
                object.sevenDays = message.sevenDays;
            if (message.hanlinExp != null && message.hasOwnProperty("hanlinExp"))
                object.hanlinExp = message.hanlinExp;
            if (message.hanlinId != null && message.hasOwnProperty("hanlinId"))
                object.hanlinId = message.hanlinId;
            if (message.fieldScore != null && message.hasOwnProperty("fieldScore"))
                object.fieldScore = message.fieldScore;
            if (message.fieldBossHpLeft != null && message.hasOwnProperty("fieldBossHpLeft"))
                object.fieldBossHpLeft = message.fieldBossHpLeft;
            if (message.fieldBossId != null && message.hasOwnProperty("fieldBossId"))
                object.fieldBossId = message.fieldBossId;
            if (message.salaryCnt != null && message.hasOwnProperty("salaryCnt"))
                object.salaryCnt = message.salaryCnt;
            if (message.fieldPoint != null && message.hasOwnProperty("fieldPoint"))
                object.fieldPoint = message.fieldPoint;
            if (message.energy != null && message.hasOwnProperty("energy"))
                object.energy = message.energy;
            if (message.timeEnergy != null && message.hasOwnProperty("timeEnergy"))
                object.timeEnergy = message.timeEnergy;
            if (message.zhenzai != null && message.hasOwnProperty("zhenzai"))
                object.zhenzai = message.zhenzai;
            if (message.luck != null && message.hasOwnProperty("luck"))
                object.luck = message.luck;
            if (message.silkId != null && message.hasOwnProperty("silkId"))
                object.silkId = message.silkId;
            if (message.fastSilk != null && message.hasOwnProperty("fastSilk"))
                object.fastSilk = message.fastSilk;
            if (message.timeLeftGuild != null && message.hasOwnProperty("timeLeftGuild"))
                object.timeLeftGuild = message.timeLeftGuild;
            if (message.buildType != null && message.hasOwnProperty("buildType"))
                object.buildType = message.buildType;
            if (message.bossHp != null && message.hasOwnProperty("bossHp"))
                if (typeof message.bossHp === "number")
                    object.bossHp = options.longs === String ? String(message.bossHp) : message.bossHp;
                else
                    object.bossHp = options.longs === String ? $util.Long.prototype.toString.call(message.bossHp) : options.longs === Number ? new $util.LongBits(message.bossHp.low >>> 0, message.bossHp.high >>> 0).toNumber(true) : message.bossHp;
            if (message.gmAuth != null && message.hasOwnProperty("gmAuth"))
                object.gmAuth = message.gmAuth;
            if (message.taofaId != null && message.hasOwnProperty("taofaId"))
                object.taofaId = message.taofaId;
            if (message.taofaMaxId != null && message.hasOwnProperty("taofaMaxId"))
                object.taofaMaxId = message.taofaMaxId;
            if (message.guildId != null && message.hasOwnProperty("guildId"))
                object.guildId = message.guildId;
            if (message.devotionTotal != null && message.hasOwnProperty("devotionTotal"))
                object.devotionTotal = message.devotionTotal;
            if (message.enemyUid != null && message.hasOwnProperty("enemyUid"))
                object.enemyUid = message.enemyUid;
            if (message.fightPower != null && message.hasOwnProperty("fightPower"))
                object.fightPower = message.fightPower;
            if (message.timeMonthCard != null && message.hasOwnProperty("timeMonthCard"))
                object.timeMonthCard = message.timeMonthCard;
            if (message.timeLifeCard != null && message.hasOwnProperty("timeLifeCard"))
                object.timeLifeCard = message.timeLifeCard;
            if (message.joinCnt != null && message.hasOwnProperty("joinCnt"))
                object.joinCnt = message.joinCnt;
            if (message.taofaTotal != null && message.hasOwnProperty("taofaTotal"))
                object.taofaTotal = message.taofaTotal;
            if (message.createTime != null && message.hasOwnProperty("createTime"))
                object.createTime = message.createTime;
            if (message.harvestPoint != null && message.hasOwnProperty("harvestPoint"))
                object.harvestPoint = message.harvestPoint;
            if (message.timeVipCard != null && message.hasOwnProperty("timeVipCard"))
                object.timeVipCard = message.timeVipCard;
            if (message.str != null && message.hasOwnProperty("str"))
                object.str = message.str;
            if (message.brain != null && message.hasOwnProperty("brain"))
                object.brain = message.brain;
            if (message.politics != null && message.hasOwnProperty("politics"))
                object.politics = message.politics;
            if (message.prestige != null && message.hasOwnProperty("prestige"))
                object.prestige = message.prestige;
            return object;
        };

        /**
         * Converts this SC_UPDATE_ROLE_PRO to JSON.
         * @function toJSON
         * @memberof S2C.SC_UPDATE_ROLE_PRO
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SC_UPDATE_ROLE_PRO.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SC_UPDATE_ROLE_PRO;
    })();

    S2C.SC_TEST_ECHO = (function() {

        /**
         * Properties of a SC_TEST_ECHO.
         * @memberof S2C
         * @interface ISC_TEST_ECHO
         * @property {number|null} [cmdId] SC_TEST_ECHO cmdId
         * @property {string|null} [msg] SC_TEST_ECHO msg
         */

        /**
         * Constructs a new SC_TEST_ECHO.
         * @memberof S2C
         * @classdesc Represents a SC_TEST_ECHO.
         * @implements ISC_TEST_ECHO
         * @constructor
         * @param {S2C.ISC_TEST_ECHO=} [properties] Properties to set
         */
        function SC_TEST_ECHO(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SC_TEST_ECHO cmdId.
         * @member {number} cmdId
         * @memberof S2C.SC_TEST_ECHO
         * @instance
         */
        SC_TEST_ECHO.prototype.cmdId = 0;

        /**
         * SC_TEST_ECHO msg.
         * @member {string} msg
         * @memberof S2C.SC_TEST_ECHO
         * @instance
         */
        SC_TEST_ECHO.prototype.msg = "";

        /**
         * Creates a new SC_TEST_ECHO instance using the specified properties.
         * @function create
         * @memberof S2C.SC_TEST_ECHO
         * @static
         * @param {S2C.ISC_TEST_ECHO=} [properties] Properties to set
         * @returns {S2C.SC_TEST_ECHO} SC_TEST_ECHO instance
         */
        SC_TEST_ECHO.create = function create(properties) {
            return new SC_TEST_ECHO(properties);
        };

        /**
         * Encodes the specified SC_TEST_ECHO message. Does not implicitly {@link S2C.SC_TEST_ECHO.verify|verify} messages.
         * @function encode
         * @memberof S2C.SC_TEST_ECHO
         * @static
         * @param {S2C.ISC_TEST_ECHO} message SC_TEST_ECHO message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SC_TEST_ECHO.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmdId != null && message.hasOwnProperty("cmdId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmdId);
            if (message.msg != null && message.hasOwnProperty("msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            return writer;
        };

        /**
         * Encodes the specified SC_TEST_ECHO message, length delimited. Does not implicitly {@link S2C.SC_TEST_ECHO.verify|verify} messages.
         * @function encodeDelimited
         * @memberof S2C.SC_TEST_ECHO
         * @static
         * @param {S2C.ISC_TEST_ECHO} message SC_TEST_ECHO message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SC_TEST_ECHO.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SC_TEST_ECHO message from the specified reader or buffer.
         * @function decode
         * @memberof S2C.SC_TEST_ECHO
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {S2C.SC_TEST_ECHO} SC_TEST_ECHO
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SC_TEST_ECHO.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2C.SC_TEST_ECHO();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.cmdId = reader.int32();
                    break;
                case 2:
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
         * Decodes a SC_TEST_ECHO message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof S2C.SC_TEST_ECHO
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {S2C.SC_TEST_ECHO} SC_TEST_ECHO
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SC_TEST_ECHO.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SC_TEST_ECHO message.
         * @function verify
         * @memberof S2C.SC_TEST_ECHO
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SC_TEST_ECHO.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.cmdId != null && message.hasOwnProperty("cmdId"))
                if (!$util.isInteger(message.cmdId))
                    return "cmdId: integer expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            return null;
        };

        /**
         * Creates a SC_TEST_ECHO message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof S2C.SC_TEST_ECHO
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {S2C.SC_TEST_ECHO} SC_TEST_ECHO
         */
        SC_TEST_ECHO.fromObject = function fromObject(object) {
            if (object instanceof $root.S2C.SC_TEST_ECHO)
                return object;
            var message = new $root.S2C.SC_TEST_ECHO();
            if (object.cmdId != null)
                message.cmdId = object.cmdId | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            return message;
        };

        /**
         * Creates a plain object from a SC_TEST_ECHO message. Also converts values to other types if specified.
         * @function toObject
         * @memberof S2C.SC_TEST_ECHO
         * @static
         * @param {S2C.SC_TEST_ECHO} message SC_TEST_ECHO
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SC_TEST_ECHO.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.cmdId = 0;
                object.msg = "";
            }
            if (message.cmdId != null && message.hasOwnProperty("cmdId"))
                object.cmdId = message.cmdId;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            return object;
        };

        /**
         * Converts this SC_TEST_ECHO to JSON.
         * @function toJSON
         * @memberof S2C.SC_TEST_ECHO
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SC_TEST_ECHO.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SC_TEST_ECHO;
    })();

    S2C.SC_ROLE_ONLINE = (function() {

        /**
         * Properties of a SC_ROLE_ONLINE.
         * @memberof S2C
         * @interface ISC_ROLE_ONLINE
         * @property {number|null} [result] SC_ROLE_ONLINE result
         */

        /**
         * Constructs a new SC_ROLE_ONLINE.
         * @memberof S2C
         * @classdesc Represents a SC_ROLE_ONLINE.
         * @implements ISC_ROLE_ONLINE
         * @constructor
         * @param {S2C.ISC_ROLE_ONLINE=} [properties] Properties to set
         */
        function SC_ROLE_ONLINE(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SC_ROLE_ONLINE result.
         * @member {number} result
         * @memberof S2C.SC_ROLE_ONLINE
         * @instance
         */
        SC_ROLE_ONLINE.prototype.result = 0;

        /**
         * Creates a new SC_ROLE_ONLINE instance using the specified properties.
         * @function create
         * @memberof S2C.SC_ROLE_ONLINE
         * @static
         * @param {S2C.ISC_ROLE_ONLINE=} [properties] Properties to set
         * @returns {S2C.SC_ROLE_ONLINE} SC_ROLE_ONLINE instance
         */
        SC_ROLE_ONLINE.create = function create(properties) {
            return new SC_ROLE_ONLINE(properties);
        };

        /**
         * Encodes the specified SC_ROLE_ONLINE message. Does not implicitly {@link S2C.SC_ROLE_ONLINE.verify|verify} messages.
         * @function encode
         * @memberof S2C.SC_ROLE_ONLINE
         * @static
         * @param {S2C.ISC_ROLE_ONLINE} message SC_ROLE_ONLINE message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SC_ROLE_ONLINE.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.result != null && message.hasOwnProperty("result"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);
            return writer;
        };

        /**
         * Encodes the specified SC_ROLE_ONLINE message, length delimited. Does not implicitly {@link S2C.SC_ROLE_ONLINE.verify|verify} messages.
         * @function encodeDelimited
         * @memberof S2C.SC_ROLE_ONLINE
         * @static
         * @param {S2C.ISC_ROLE_ONLINE} message SC_ROLE_ONLINE message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SC_ROLE_ONLINE.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SC_ROLE_ONLINE message from the specified reader or buffer.
         * @function decode
         * @memberof S2C.SC_ROLE_ONLINE
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {S2C.SC_ROLE_ONLINE} SC_ROLE_ONLINE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SC_ROLE_ONLINE.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2C.SC_ROLE_ONLINE();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.result = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SC_ROLE_ONLINE message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof S2C.SC_ROLE_ONLINE
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {S2C.SC_ROLE_ONLINE} SC_ROLE_ONLINE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SC_ROLE_ONLINE.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SC_ROLE_ONLINE message.
         * @function verify
         * @memberof S2C.SC_ROLE_ONLINE
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SC_ROLE_ONLINE.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.result != null && message.hasOwnProperty("result"))
                if (!$util.isInteger(message.result))
                    return "result: integer expected";
            return null;
        };

        /**
         * Creates a SC_ROLE_ONLINE message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof S2C.SC_ROLE_ONLINE
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {S2C.SC_ROLE_ONLINE} SC_ROLE_ONLINE
         */
        SC_ROLE_ONLINE.fromObject = function fromObject(object) {
            if (object instanceof $root.S2C.SC_ROLE_ONLINE)
                return object;
            var message = new $root.S2C.SC_ROLE_ONLINE();
            if (object.result != null)
                message.result = object.result | 0;
            return message;
        };

        /**
         * Creates a plain object from a SC_ROLE_ONLINE message. Also converts values to other types if specified.
         * @function toObject
         * @memberof S2C.SC_ROLE_ONLINE
         * @static
         * @param {S2C.SC_ROLE_ONLINE} message SC_ROLE_ONLINE
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SC_ROLE_ONLINE.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.result = 0;
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = message.result;
            return object;
        };

        /**
         * Converts this SC_ROLE_ONLINE to JSON.
         * @function toJSON
         * @memberof S2C.SC_ROLE_ONLINE
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SC_ROLE_ONLINE.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SC_ROLE_ONLINE;
    })();

    S2C.SC_ROLE_HEART_BEAT = (function() {

        /**
         * Properties of a SC_ROLE_HEART_BEAT.
         * @memberof S2C
         * @interface ISC_ROLE_HEART_BEAT
         * @property {string|null} [msg] SC_ROLE_HEART_BEAT msg
         * @property {string|null} [clientVersion] SC_ROLE_HEART_BEAT clientVersion
         */

        /**
         * Constructs a new SC_ROLE_HEART_BEAT.
         * @memberof S2C
         * @classdesc Represents a SC_ROLE_HEART_BEAT.
         * @implements ISC_ROLE_HEART_BEAT
         * @constructor
         * @param {S2C.ISC_ROLE_HEART_BEAT=} [properties] Properties to set
         */
        function SC_ROLE_HEART_BEAT(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SC_ROLE_HEART_BEAT msg.
         * @member {string} msg
         * @memberof S2C.SC_ROLE_HEART_BEAT
         * @instance
         */
        SC_ROLE_HEART_BEAT.prototype.msg = "";

        /**
         * SC_ROLE_HEART_BEAT clientVersion.
         * @member {string} clientVersion
         * @memberof S2C.SC_ROLE_HEART_BEAT
         * @instance
         */
        SC_ROLE_HEART_BEAT.prototype.clientVersion = "";

        /**
         * Creates a new SC_ROLE_HEART_BEAT instance using the specified properties.
         * @function create
         * @memberof S2C.SC_ROLE_HEART_BEAT
         * @static
         * @param {S2C.ISC_ROLE_HEART_BEAT=} [properties] Properties to set
         * @returns {S2C.SC_ROLE_HEART_BEAT} SC_ROLE_HEART_BEAT instance
         */
        SC_ROLE_HEART_BEAT.create = function create(properties) {
            return new SC_ROLE_HEART_BEAT(properties);
        };

        /**
         * Encodes the specified SC_ROLE_HEART_BEAT message. Does not implicitly {@link S2C.SC_ROLE_HEART_BEAT.verify|verify} messages.
         * @function encode
         * @memberof S2C.SC_ROLE_HEART_BEAT
         * @static
         * @param {S2C.ISC_ROLE_HEART_BEAT} message SC_ROLE_HEART_BEAT message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SC_ROLE_HEART_BEAT.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.msg != null && message.hasOwnProperty("msg"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.msg);
            if (message.clientVersion != null && message.hasOwnProperty("clientVersion"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.clientVersion);
            return writer;
        };

        /**
         * Encodes the specified SC_ROLE_HEART_BEAT message, length delimited. Does not implicitly {@link S2C.SC_ROLE_HEART_BEAT.verify|verify} messages.
         * @function encodeDelimited
         * @memberof S2C.SC_ROLE_HEART_BEAT
         * @static
         * @param {S2C.ISC_ROLE_HEART_BEAT} message SC_ROLE_HEART_BEAT message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SC_ROLE_HEART_BEAT.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SC_ROLE_HEART_BEAT message from the specified reader or buffer.
         * @function decode
         * @memberof S2C.SC_ROLE_HEART_BEAT
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {S2C.SC_ROLE_HEART_BEAT} SC_ROLE_HEART_BEAT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SC_ROLE_HEART_BEAT.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2C.SC_ROLE_HEART_BEAT();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.msg = reader.string();
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
         * Decodes a SC_ROLE_HEART_BEAT message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof S2C.SC_ROLE_HEART_BEAT
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {S2C.SC_ROLE_HEART_BEAT} SC_ROLE_HEART_BEAT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SC_ROLE_HEART_BEAT.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SC_ROLE_HEART_BEAT message.
         * @function verify
         * @memberof S2C.SC_ROLE_HEART_BEAT
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SC_ROLE_HEART_BEAT.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            if (message.clientVersion != null && message.hasOwnProperty("clientVersion"))
                if (!$util.isString(message.clientVersion))
                    return "clientVersion: string expected";
            return null;
        };

        /**
         * Creates a SC_ROLE_HEART_BEAT message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof S2C.SC_ROLE_HEART_BEAT
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {S2C.SC_ROLE_HEART_BEAT} SC_ROLE_HEART_BEAT
         */
        SC_ROLE_HEART_BEAT.fromObject = function fromObject(object) {
            if (object instanceof $root.S2C.SC_ROLE_HEART_BEAT)
                return object;
            var message = new $root.S2C.SC_ROLE_HEART_BEAT();
            if (object.msg != null)
                message.msg = String(object.msg);
            if (object.clientVersion != null)
                message.clientVersion = String(object.clientVersion);
            return message;
        };

        /**
         * Creates a plain object from a SC_ROLE_HEART_BEAT message. Also converts values to other types if specified.
         * @function toObject
         * @memberof S2C.SC_ROLE_HEART_BEAT
         * @static
         * @param {S2C.SC_ROLE_HEART_BEAT} message SC_ROLE_HEART_BEAT
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SC_ROLE_HEART_BEAT.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.msg = "";
                object.clientVersion = "";
            }
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            if (message.clientVersion != null && message.hasOwnProperty("clientVersion"))
                object.clientVersion = message.clientVersion;
            return object;
        };

        /**
         * Converts this SC_ROLE_HEART_BEAT to JSON.
         * @function toJSON
         * @memberof S2C.SC_ROLE_HEART_BEAT
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SC_ROLE_HEART_BEAT.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SC_ROLE_HEART_BEAT;
    })();

    S2C.LOGIN_SC_LOGIN = (function() {

        /**
         * Properties of a LOGIN_SC_LOGIN.
         * @memberof S2C
         * @interface ILOGIN_SC_LOGIN
         * @property {number|null} [serverId] LOGIN_SC_LOGIN serverId
         * @property {number|null} [gmAuth] LOGIN_SC_LOGIN gmAuth
         * @property {number|null} [isNew] LOGIN_SC_LOGIN isNew
         */

        /**
         * Constructs a new LOGIN_SC_LOGIN.
         * @memberof S2C
         * @classdesc Represents a LOGIN_SC_LOGIN.
         * @implements ILOGIN_SC_LOGIN
         * @constructor
         * @param {S2C.ILOGIN_SC_LOGIN=} [properties] Properties to set
         */
        function LOGIN_SC_LOGIN(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LOGIN_SC_LOGIN serverId.
         * @member {number} serverId
         * @memberof S2C.LOGIN_SC_LOGIN
         * @instance
         */
        LOGIN_SC_LOGIN.prototype.serverId = 0;

        /**
         * LOGIN_SC_LOGIN gmAuth.
         * @member {number} gmAuth
         * @memberof S2C.LOGIN_SC_LOGIN
         * @instance
         */
        LOGIN_SC_LOGIN.prototype.gmAuth = 0;

        /**
         * LOGIN_SC_LOGIN isNew.
         * @member {number} isNew
         * @memberof S2C.LOGIN_SC_LOGIN
         * @instance
         */
        LOGIN_SC_LOGIN.prototype.isNew = 0;

        /**
         * Creates a new LOGIN_SC_LOGIN instance using the specified properties.
         * @function create
         * @memberof S2C.LOGIN_SC_LOGIN
         * @static
         * @param {S2C.ILOGIN_SC_LOGIN=} [properties] Properties to set
         * @returns {S2C.LOGIN_SC_LOGIN} LOGIN_SC_LOGIN instance
         */
        LOGIN_SC_LOGIN.create = function create(properties) {
            return new LOGIN_SC_LOGIN(properties);
        };

        /**
         * Encodes the specified LOGIN_SC_LOGIN message. Does not implicitly {@link S2C.LOGIN_SC_LOGIN.verify|verify} messages.
         * @function encode
         * @memberof S2C.LOGIN_SC_LOGIN
         * @static
         * @param {S2C.ILOGIN_SC_LOGIN} message LOGIN_SC_LOGIN message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LOGIN_SC_LOGIN.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.serverId != null && message.hasOwnProperty("serverId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.serverId);
            if (message.gmAuth != null && message.hasOwnProperty("gmAuth"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.gmAuth);
            if (message.isNew != null && message.hasOwnProperty("isNew"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.isNew);
            return writer;
        };

        /**
         * Encodes the specified LOGIN_SC_LOGIN message, length delimited. Does not implicitly {@link S2C.LOGIN_SC_LOGIN.verify|verify} messages.
         * @function encodeDelimited
         * @memberof S2C.LOGIN_SC_LOGIN
         * @static
         * @param {S2C.ILOGIN_SC_LOGIN} message LOGIN_SC_LOGIN message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LOGIN_SC_LOGIN.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LOGIN_SC_LOGIN message from the specified reader or buffer.
         * @function decode
         * @memberof S2C.LOGIN_SC_LOGIN
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {S2C.LOGIN_SC_LOGIN} LOGIN_SC_LOGIN
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LOGIN_SC_LOGIN.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2C.LOGIN_SC_LOGIN();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.serverId = reader.uint32();
                    break;
                case 2:
                    message.gmAuth = reader.uint32();
                    break;
                case 3:
                    message.isNew = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LOGIN_SC_LOGIN message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof S2C.LOGIN_SC_LOGIN
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {S2C.LOGIN_SC_LOGIN} LOGIN_SC_LOGIN
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LOGIN_SC_LOGIN.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LOGIN_SC_LOGIN message.
         * @function verify
         * @memberof S2C.LOGIN_SC_LOGIN
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LOGIN_SC_LOGIN.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.serverId != null && message.hasOwnProperty("serverId"))
                if (!$util.isInteger(message.serverId))
                    return "serverId: integer expected";
            if (message.gmAuth != null && message.hasOwnProperty("gmAuth"))
                if (!$util.isInteger(message.gmAuth))
                    return "gmAuth: integer expected";
            if (message.isNew != null && message.hasOwnProperty("isNew"))
                if (!$util.isInteger(message.isNew))
                    return "isNew: integer expected";
            return null;
        };

        /**
         * Creates a LOGIN_SC_LOGIN message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof S2C.LOGIN_SC_LOGIN
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {S2C.LOGIN_SC_LOGIN} LOGIN_SC_LOGIN
         */
        LOGIN_SC_LOGIN.fromObject = function fromObject(object) {
            if (object instanceof $root.S2C.LOGIN_SC_LOGIN)
                return object;
            var message = new $root.S2C.LOGIN_SC_LOGIN();
            if (object.serverId != null)
                message.serverId = object.serverId >>> 0;
            if (object.gmAuth != null)
                message.gmAuth = object.gmAuth >>> 0;
            if (object.isNew != null)
                message.isNew = object.isNew >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a LOGIN_SC_LOGIN message. Also converts values to other types if specified.
         * @function toObject
         * @memberof S2C.LOGIN_SC_LOGIN
         * @static
         * @param {S2C.LOGIN_SC_LOGIN} message LOGIN_SC_LOGIN
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LOGIN_SC_LOGIN.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.serverId = 0;
                object.gmAuth = 0;
                object.isNew = 0;
            }
            if (message.serverId != null && message.hasOwnProperty("serverId"))
                object.serverId = message.serverId;
            if (message.gmAuth != null && message.hasOwnProperty("gmAuth"))
                object.gmAuth = message.gmAuth;
            if (message.isNew != null && message.hasOwnProperty("isNew"))
                object.isNew = message.isNew;
            return object;
        };

        /**
         * Converts this LOGIN_SC_LOGIN to JSON.
         * @function toJSON
         * @memberof S2C.LOGIN_SC_LOGIN
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LOGIN_SC_LOGIN.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LOGIN_SC_LOGIN;
    })();

    S2C.LOGIN_SC_CHOOSE_SERVER = (function() {

        /**
         * Properties of a LOGIN_SC_CHOOSE_SERVER.
         * @memberof S2C
         * @interface ILOGIN_SC_CHOOSE_SERVER
         * @property {string|null} [ip] LOGIN_SC_CHOOSE_SERVER ip
         * @property {number|null} [port] LOGIN_SC_CHOOSE_SERVER port
         * @property {string|null} [version] LOGIN_SC_CHOOSE_SERVER version
         * @property {string|null} [resVersion] LOGIN_SC_CHOOSE_SERVER resVersion
         * @property {string|null} [resServerAddress] LOGIN_SC_CHOOSE_SERVER resServerAddress
         * @property {number|null} [uid] LOGIN_SC_CHOOSE_SERVER uid
         * @property {string|null} [token] LOGIN_SC_CHOOSE_SERVER token
         * @property {number|null} [serverId] LOGIN_SC_CHOOSE_SERVER serverId
         * @property {string|null} [serverName] LOGIN_SC_CHOOSE_SERVER serverName
         */

        /**
         * Constructs a new LOGIN_SC_CHOOSE_SERVER.
         * @memberof S2C
         * @classdesc Represents a LOGIN_SC_CHOOSE_SERVER.
         * @implements ILOGIN_SC_CHOOSE_SERVER
         * @constructor
         * @param {S2C.ILOGIN_SC_CHOOSE_SERVER=} [properties] Properties to set
         */
        function LOGIN_SC_CHOOSE_SERVER(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LOGIN_SC_CHOOSE_SERVER ip.
         * @member {string} ip
         * @memberof S2C.LOGIN_SC_CHOOSE_SERVER
         * @instance
         */
        LOGIN_SC_CHOOSE_SERVER.prototype.ip = "";

        /**
         * LOGIN_SC_CHOOSE_SERVER port.
         * @member {number} port
         * @memberof S2C.LOGIN_SC_CHOOSE_SERVER
         * @instance
         */
        LOGIN_SC_CHOOSE_SERVER.prototype.port = 0;

        /**
         * LOGIN_SC_CHOOSE_SERVER version.
         * @member {string} version
         * @memberof S2C.LOGIN_SC_CHOOSE_SERVER
         * @instance
         */
        LOGIN_SC_CHOOSE_SERVER.prototype.version = "";

        /**
         * LOGIN_SC_CHOOSE_SERVER resVersion.
         * @member {string} resVersion
         * @memberof S2C.LOGIN_SC_CHOOSE_SERVER
         * @instance
         */
        LOGIN_SC_CHOOSE_SERVER.prototype.resVersion = "";

        /**
         * LOGIN_SC_CHOOSE_SERVER resServerAddress.
         * @member {string} resServerAddress
         * @memberof S2C.LOGIN_SC_CHOOSE_SERVER
         * @instance
         */
        LOGIN_SC_CHOOSE_SERVER.prototype.resServerAddress = "";

        /**
         * LOGIN_SC_CHOOSE_SERVER uid.
         * @member {number} uid
         * @memberof S2C.LOGIN_SC_CHOOSE_SERVER
         * @instance
         */
        LOGIN_SC_CHOOSE_SERVER.prototype.uid = 0;

        /**
         * LOGIN_SC_CHOOSE_SERVER token.
         * @member {string} token
         * @memberof S2C.LOGIN_SC_CHOOSE_SERVER
         * @instance
         */
        LOGIN_SC_CHOOSE_SERVER.prototype.token = "";

        /**
         * LOGIN_SC_CHOOSE_SERVER serverId.
         * @member {number} serverId
         * @memberof S2C.LOGIN_SC_CHOOSE_SERVER
         * @instance
         */
        LOGIN_SC_CHOOSE_SERVER.prototype.serverId = 0;

        /**
         * LOGIN_SC_CHOOSE_SERVER serverName.
         * @member {string} serverName
         * @memberof S2C.LOGIN_SC_CHOOSE_SERVER
         * @instance
         */
        LOGIN_SC_CHOOSE_SERVER.prototype.serverName = "";

        /**
         * Creates a new LOGIN_SC_CHOOSE_SERVER instance using the specified properties.
         * @function create
         * @memberof S2C.LOGIN_SC_CHOOSE_SERVER
         * @static
         * @param {S2C.ILOGIN_SC_CHOOSE_SERVER=} [properties] Properties to set
         * @returns {S2C.LOGIN_SC_CHOOSE_SERVER} LOGIN_SC_CHOOSE_SERVER instance
         */
        LOGIN_SC_CHOOSE_SERVER.create = function create(properties) {
            return new LOGIN_SC_CHOOSE_SERVER(properties);
        };

        /**
         * Encodes the specified LOGIN_SC_CHOOSE_SERVER message. Does not implicitly {@link S2C.LOGIN_SC_CHOOSE_SERVER.verify|verify} messages.
         * @function encode
         * @memberof S2C.LOGIN_SC_CHOOSE_SERVER
         * @static
         * @param {S2C.ILOGIN_SC_CHOOSE_SERVER} message LOGIN_SC_CHOOSE_SERVER message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LOGIN_SC_CHOOSE_SERVER.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ip != null && message.hasOwnProperty("ip"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.ip);
            if (message.port != null && message.hasOwnProperty("port"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.port);
            if (message.version != null && message.hasOwnProperty("version"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.version);
            if (message.resVersion != null && message.hasOwnProperty("resVersion"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.resVersion);
            if (message.resServerAddress != null && message.hasOwnProperty("resServerAddress"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.resServerAddress);
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.uid);
            if (message.token != null && message.hasOwnProperty("token"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.token);
            if (message.serverId != null && message.hasOwnProperty("serverId"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.serverId);
            if (message.serverName != null && message.hasOwnProperty("serverName"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.serverName);
            return writer;
        };

        /**
         * Encodes the specified LOGIN_SC_CHOOSE_SERVER message, length delimited. Does not implicitly {@link S2C.LOGIN_SC_CHOOSE_SERVER.verify|verify} messages.
         * @function encodeDelimited
         * @memberof S2C.LOGIN_SC_CHOOSE_SERVER
         * @static
         * @param {S2C.ILOGIN_SC_CHOOSE_SERVER} message LOGIN_SC_CHOOSE_SERVER message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LOGIN_SC_CHOOSE_SERVER.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LOGIN_SC_CHOOSE_SERVER message from the specified reader or buffer.
         * @function decode
         * @memberof S2C.LOGIN_SC_CHOOSE_SERVER
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {S2C.LOGIN_SC_CHOOSE_SERVER} LOGIN_SC_CHOOSE_SERVER
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LOGIN_SC_CHOOSE_SERVER.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2C.LOGIN_SC_CHOOSE_SERVER();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ip = reader.string();
                    break;
                case 2:
                    message.port = reader.uint32();
                    break;
                case 3:
                    message.version = reader.string();
                    break;
                case 4:
                    message.resVersion = reader.string();
                    break;
                case 5:
                    message.resServerAddress = reader.string();
                    break;
                case 6:
                    message.uid = reader.uint32();
                    break;
                case 7:
                    message.token = reader.string();
                    break;
                case 8:
                    message.serverId = reader.uint32();
                    break;
                case 9:
                    message.serverName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LOGIN_SC_CHOOSE_SERVER message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof S2C.LOGIN_SC_CHOOSE_SERVER
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {S2C.LOGIN_SC_CHOOSE_SERVER} LOGIN_SC_CHOOSE_SERVER
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LOGIN_SC_CHOOSE_SERVER.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LOGIN_SC_CHOOSE_SERVER message.
         * @function verify
         * @memberof S2C.LOGIN_SC_CHOOSE_SERVER
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LOGIN_SC_CHOOSE_SERVER.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ip != null && message.hasOwnProperty("ip"))
                if (!$util.isString(message.ip))
                    return "ip: string expected";
            if (message.port != null && message.hasOwnProperty("port"))
                if (!$util.isInteger(message.port))
                    return "port: integer expected";
            if (message.version != null && message.hasOwnProperty("version"))
                if (!$util.isString(message.version))
                    return "version: string expected";
            if (message.resVersion != null && message.hasOwnProperty("resVersion"))
                if (!$util.isString(message.resVersion))
                    return "resVersion: string expected";
            if (message.resServerAddress != null && message.hasOwnProperty("resServerAddress"))
                if (!$util.isString(message.resServerAddress))
                    return "resServerAddress: string expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid))
                    return "uid: integer expected";
            if (message.token != null && message.hasOwnProperty("token"))
                if (!$util.isString(message.token))
                    return "token: string expected";
            if (message.serverId != null && message.hasOwnProperty("serverId"))
                if (!$util.isInteger(message.serverId))
                    return "serverId: integer expected";
            if (message.serverName != null && message.hasOwnProperty("serverName"))
                if (!$util.isString(message.serverName))
                    return "serverName: string expected";
            return null;
        };

        /**
         * Creates a LOGIN_SC_CHOOSE_SERVER message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof S2C.LOGIN_SC_CHOOSE_SERVER
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {S2C.LOGIN_SC_CHOOSE_SERVER} LOGIN_SC_CHOOSE_SERVER
         */
        LOGIN_SC_CHOOSE_SERVER.fromObject = function fromObject(object) {
            if (object instanceof $root.S2C.LOGIN_SC_CHOOSE_SERVER)
                return object;
            var message = new $root.S2C.LOGIN_SC_CHOOSE_SERVER();
            if (object.ip != null)
                message.ip = String(object.ip);
            if (object.port != null)
                message.port = object.port >>> 0;
            if (object.version != null)
                message.version = String(object.version);
            if (object.resVersion != null)
                message.resVersion = String(object.resVersion);
            if (object.resServerAddress != null)
                message.resServerAddress = String(object.resServerAddress);
            if (object.uid != null)
                message.uid = object.uid >>> 0;
            if (object.token != null)
                message.token = String(object.token);
            if (object.serverId != null)
                message.serverId = object.serverId >>> 0;
            if (object.serverName != null)
                message.serverName = String(object.serverName);
            return message;
        };

        /**
         * Creates a plain object from a LOGIN_SC_CHOOSE_SERVER message. Also converts values to other types if specified.
         * @function toObject
         * @memberof S2C.LOGIN_SC_CHOOSE_SERVER
         * @static
         * @param {S2C.LOGIN_SC_CHOOSE_SERVER} message LOGIN_SC_CHOOSE_SERVER
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LOGIN_SC_CHOOSE_SERVER.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.ip = "";
                object.port = 0;
                object.version = "";
                object.resVersion = "";
                object.resServerAddress = "";
                object.uid = 0;
                object.token = "";
                object.serverId = 0;
                object.serverName = "";
            }
            if (message.ip != null && message.hasOwnProperty("ip"))
                object.ip = message.ip;
            if (message.port != null && message.hasOwnProperty("port"))
                object.port = message.port;
            if (message.version != null && message.hasOwnProperty("version"))
                object.version = message.version;
            if (message.resVersion != null && message.hasOwnProperty("resVersion"))
                object.resVersion = message.resVersion;
            if (message.resServerAddress != null && message.hasOwnProperty("resServerAddress"))
                object.resServerAddress = message.resServerAddress;
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = message.token;
            if (message.serverId != null && message.hasOwnProperty("serverId"))
                object.serverId = message.serverId;
            if (message.serverName != null && message.hasOwnProperty("serverName"))
                object.serverName = message.serverName;
            return object;
        };

        /**
         * Converts this LOGIN_SC_CHOOSE_SERVER to JSON.
         * @function toJSON
         * @memberof S2C.LOGIN_SC_CHOOSE_SERVER
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LOGIN_SC_CHOOSE_SERVER.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LOGIN_SC_CHOOSE_SERVER;
    })();

    S2C.LOGIN_SC_GET_SERVER_LIST = (function() {

        /**
         * Properties of a LOGIN_SC_GET_SERVER_LIST.
         * @memberof S2C
         * @interface ILOGIN_SC_GET_SERVER_LIST
         * @property {Array.<S2C.LOGIN_SC_GET_SERVER_LIST.IServer>|null} [servers] LOGIN_SC_GET_SERVER_LIST servers
         */

        /**
         * Constructs a new LOGIN_SC_GET_SERVER_LIST.
         * @memberof S2C
         * @classdesc Represents a LOGIN_SC_GET_SERVER_LIST.
         * @implements ILOGIN_SC_GET_SERVER_LIST
         * @constructor
         * @param {S2C.ILOGIN_SC_GET_SERVER_LIST=} [properties] Properties to set
         */
        function LOGIN_SC_GET_SERVER_LIST(properties) {
            this.servers = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LOGIN_SC_GET_SERVER_LIST servers.
         * @member {Array.<S2C.LOGIN_SC_GET_SERVER_LIST.IServer>} servers
         * @memberof S2C.LOGIN_SC_GET_SERVER_LIST
         * @instance
         */
        LOGIN_SC_GET_SERVER_LIST.prototype.servers = $util.emptyArray;

        /**
         * Creates a new LOGIN_SC_GET_SERVER_LIST instance using the specified properties.
         * @function create
         * @memberof S2C.LOGIN_SC_GET_SERVER_LIST
         * @static
         * @param {S2C.ILOGIN_SC_GET_SERVER_LIST=} [properties] Properties to set
         * @returns {S2C.LOGIN_SC_GET_SERVER_LIST} LOGIN_SC_GET_SERVER_LIST instance
         */
        LOGIN_SC_GET_SERVER_LIST.create = function create(properties) {
            return new LOGIN_SC_GET_SERVER_LIST(properties);
        };

        /**
         * Encodes the specified LOGIN_SC_GET_SERVER_LIST message. Does not implicitly {@link S2C.LOGIN_SC_GET_SERVER_LIST.verify|verify} messages.
         * @function encode
         * @memberof S2C.LOGIN_SC_GET_SERVER_LIST
         * @static
         * @param {S2C.ILOGIN_SC_GET_SERVER_LIST} message LOGIN_SC_GET_SERVER_LIST message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LOGIN_SC_GET_SERVER_LIST.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.servers != null && message.servers.length)
                for (var i = 0; i < message.servers.length; ++i)
                    $root.S2C.LOGIN_SC_GET_SERVER_LIST.Server.encode(message.servers[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified LOGIN_SC_GET_SERVER_LIST message, length delimited. Does not implicitly {@link S2C.LOGIN_SC_GET_SERVER_LIST.verify|verify} messages.
         * @function encodeDelimited
         * @memberof S2C.LOGIN_SC_GET_SERVER_LIST
         * @static
         * @param {S2C.ILOGIN_SC_GET_SERVER_LIST} message LOGIN_SC_GET_SERVER_LIST message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LOGIN_SC_GET_SERVER_LIST.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LOGIN_SC_GET_SERVER_LIST message from the specified reader or buffer.
         * @function decode
         * @memberof S2C.LOGIN_SC_GET_SERVER_LIST
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {S2C.LOGIN_SC_GET_SERVER_LIST} LOGIN_SC_GET_SERVER_LIST
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LOGIN_SC_GET_SERVER_LIST.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2C.LOGIN_SC_GET_SERVER_LIST();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.servers && message.servers.length))
                        message.servers = [];
                    message.servers.push($root.S2C.LOGIN_SC_GET_SERVER_LIST.Server.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LOGIN_SC_GET_SERVER_LIST message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof S2C.LOGIN_SC_GET_SERVER_LIST
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {S2C.LOGIN_SC_GET_SERVER_LIST} LOGIN_SC_GET_SERVER_LIST
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LOGIN_SC_GET_SERVER_LIST.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LOGIN_SC_GET_SERVER_LIST message.
         * @function verify
         * @memberof S2C.LOGIN_SC_GET_SERVER_LIST
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LOGIN_SC_GET_SERVER_LIST.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.servers != null && message.hasOwnProperty("servers")) {
                if (!Array.isArray(message.servers))
                    return "servers: array expected";
                for (var i = 0; i < message.servers.length; ++i) {
                    var error = $root.S2C.LOGIN_SC_GET_SERVER_LIST.Server.verify(message.servers[i]);
                    if (error)
                        return "servers." + error;
                }
            }
            return null;
        };

        /**
         * Creates a LOGIN_SC_GET_SERVER_LIST message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof S2C.LOGIN_SC_GET_SERVER_LIST
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {S2C.LOGIN_SC_GET_SERVER_LIST} LOGIN_SC_GET_SERVER_LIST
         */
        LOGIN_SC_GET_SERVER_LIST.fromObject = function fromObject(object) {
            if (object instanceof $root.S2C.LOGIN_SC_GET_SERVER_LIST)
                return object;
            var message = new $root.S2C.LOGIN_SC_GET_SERVER_LIST();
            if (object.servers) {
                if (!Array.isArray(object.servers))
                    throw TypeError(".S2C.LOGIN_SC_GET_SERVER_LIST.servers: array expected");
                message.servers = [];
                for (var i = 0; i < object.servers.length; ++i) {
                    if (typeof object.servers[i] !== "object")
                        throw TypeError(".S2C.LOGIN_SC_GET_SERVER_LIST.servers: object expected");
                    message.servers[i] = $root.S2C.LOGIN_SC_GET_SERVER_LIST.Server.fromObject(object.servers[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a LOGIN_SC_GET_SERVER_LIST message. Also converts values to other types if specified.
         * @function toObject
         * @memberof S2C.LOGIN_SC_GET_SERVER_LIST
         * @static
         * @param {S2C.LOGIN_SC_GET_SERVER_LIST} message LOGIN_SC_GET_SERVER_LIST
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LOGIN_SC_GET_SERVER_LIST.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.servers = [];
            if (message.servers && message.servers.length) {
                object.servers = [];
                for (var j = 0; j < message.servers.length; ++j)
                    object.servers[j] = $root.S2C.LOGIN_SC_GET_SERVER_LIST.Server.toObject(message.servers[j], options);
            }
            return object;
        };

        /**
         * Converts this LOGIN_SC_GET_SERVER_LIST to JSON.
         * @function toJSON
         * @memberof S2C.LOGIN_SC_GET_SERVER_LIST
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LOGIN_SC_GET_SERVER_LIST.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        LOGIN_SC_GET_SERVER_LIST.Server = (function() {

            /**
             * Properties of a Server.
             * @memberof S2C.LOGIN_SC_GET_SERVER_LIST
             * @interface IServer
             * @property {number|null} [serverId] Server serverId
             * @property {string|null} [name] Server name
             * @property {number|null} [status] Server status
             * @property {number|null} [level] Server level
             * @property {number|null} [lastLoginTime] Server lastLoginTime
             */

            /**
             * Constructs a new Server.
             * @memberof S2C.LOGIN_SC_GET_SERVER_LIST
             * @classdesc Represents a Server.
             * @implements IServer
             * @constructor
             * @param {S2C.LOGIN_SC_GET_SERVER_LIST.IServer=} [properties] Properties to set
             */
            function Server(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Server serverId.
             * @member {number} serverId
             * @memberof S2C.LOGIN_SC_GET_SERVER_LIST.Server
             * @instance
             */
            Server.prototype.serverId = 0;

            /**
             * Server name.
             * @member {string} name
             * @memberof S2C.LOGIN_SC_GET_SERVER_LIST.Server
             * @instance
             */
            Server.prototype.name = "";

            /**
             * Server status.
             * @member {number} status
             * @memberof S2C.LOGIN_SC_GET_SERVER_LIST.Server
             * @instance
             */
            Server.prototype.status = 0;

            /**
             * Server level.
             * @member {number} level
             * @memberof S2C.LOGIN_SC_GET_SERVER_LIST.Server
             * @instance
             */
            Server.prototype.level = 0;

            /**
             * Server lastLoginTime.
             * @member {number} lastLoginTime
             * @memberof S2C.LOGIN_SC_GET_SERVER_LIST.Server
             * @instance
             */
            Server.prototype.lastLoginTime = 0;

            /**
             * Creates a new Server instance using the specified properties.
             * @function create
             * @memberof S2C.LOGIN_SC_GET_SERVER_LIST.Server
             * @static
             * @param {S2C.LOGIN_SC_GET_SERVER_LIST.IServer=} [properties] Properties to set
             * @returns {S2C.LOGIN_SC_GET_SERVER_LIST.Server} Server instance
             */
            Server.create = function create(properties) {
                return new Server(properties);
            };

            /**
             * Encodes the specified Server message. Does not implicitly {@link S2C.LOGIN_SC_GET_SERVER_LIST.Server.verify|verify} messages.
             * @function encode
             * @memberof S2C.LOGIN_SC_GET_SERVER_LIST.Server
             * @static
             * @param {S2C.LOGIN_SC_GET_SERVER_LIST.IServer} message Server message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Server.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.serverId != null && message.hasOwnProperty("serverId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.serverId);
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                if (message.status != null && message.hasOwnProperty("status"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.status);
                if (message.level != null && message.hasOwnProperty("level"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.level);
                if (message.lastLoginTime != null && message.hasOwnProperty("lastLoginTime"))
                    writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.lastLoginTime);
                return writer;
            };

            /**
             * Encodes the specified Server message, length delimited. Does not implicitly {@link S2C.LOGIN_SC_GET_SERVER_LIST.Server.verify|verify} messages.
             * @function encodeDelimited
             * @memberof S2C.LOGIN_SC_GET_SERVER_LIST.Server
             * @static
             * @param {S2C.LOGIN_SC_GET_SERVER_LIST.IServer} message Server message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Server.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Server message from the specified reader or buffer.
             * @function decode
             * @memberof S2C.LOGIN_SC_GET_SERVER_LIST.Server
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {S2C.LOGIN_SC_GET_SERVER_LIST.Server} Server
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Server.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2C.LOGIN_SC_GET_SERVER_LIST.Server();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.serverId = reader.uint32();
                        break;
                    case 2:
                        message.name = reader.string();
                        break;
                    case 3:
                        message.status = reader.uint32();
                        break;
                    case 4:
                        message.level = reader.uint32();
                        break;
                    case 5:
                        message.lastLoginTime = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Server message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof S2C.LOGIN_SC_GET_SERVER_LIST.Server
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {S2C.LOGIN_SC_GET_SERVER_LIST.Server} Server
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Server.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Server message.
             * @function verify
             * @memberof S2C.LOGIN_SC_GET_SERVER_LIST.Server
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Server.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.serverId != null && message.hasOwnProperty("serverId"))
                    if (!$util.isInteger(message.serverId))
                        return "serverId: integer expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.status != null && message.hasOwnProperty("status"))
                    if (!$util.isInteger(message.status))
                        return "status: integer expected";
                if (message.level != null && message.hasOwnProperty("level"))
                    if (!$util.isInteger(message.level))
                        return "level: integer expected";
                if (message.lastLoginTime != null && message.hasOwnProperty("lastLoginTime"))
                    if (!$util.isInteger(message.lastLoginTime))
                        return "lastLoginTime: integer expected";
                return null;
            };

            /**
             * Creates a Server message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof S2C.LOGIN_SC_GET_SERVER_LIST.Server
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {S2C.LOGIN_SC_GET_SERVER_LIST.Server} Server
             */
            Server.fromObject = function fromObject(object) {
                if (object instanceof $root.S2C.LOGIN_SC_GET_SERVER_LIST.Server)
                    return object;
                var message = new $root.S2C.LOGIN_SC_GET_SERVER_LIST.Server();
                if (object.serverId != null)
                    message.serverId = object.serverId >>> 0;
                if (object.name != null)
                    message.name = String(object.name);
                if (object.status != null)
                    message.status = object.status >>> 0;
                if (object.level != null)
                    message.level = object.level >>> 0;
                if (object.lastLoginTime != null)
                    message.lastLoginTime = object.lastLoginTime >>> 0;
                return message;
            };

            /**
             * Creates a plain object from a Server message. Also converts values to other types if specified.
             * @function toObject
             * @memberof S2C.LOGIN_SC_GET_SERVER_LIST.Server
             * @static
             * @param {S2C.LOGIN_SC_GET_SERVER_LIST.Server} message Server
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Server.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.serverId = 0;
                    object.name = "";
                    object.status = 0;
                    object.level = 0;
                    object.lastLoginTime = 0;
                }
                if (message.serverId != null && message.hasOwnProperty("serverId"))
                    object.serverId = message.serverId;
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.status != null && message.hasOwnProperty("status"))
                    object.status = message.status;
                if (message.level != null && message.hasOwnProperty("level"))
                    object.level = message.level;
                if (message.lastLoginTime != null && message.hasOwnProperty("lastLoginTime"))
                    object.lastLoginTime = message.lastLoginTime;
                return object;
            };

            /**
             * Converts this Server to JSON.
             * @function toJSON
             * @memberof S2C.LOGIN_SC_GET_SERVER_LIST.Server
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Server.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Server;
        })();

        return LOGIN_SC_GET_SERVER_LIST;
    })();

    S2C.LOGIN_SC_GET_INFO = (function() {

        /**
         * Properties of a LOGIN_SC_GET_INFO.
         * @memberof S2C
         * @interface ILOGIN_SC_GET_INFO
         * @property {string|null} [notice] LOGIN_SC_GET_INFO notice
         * @property {string|null} [version] LOGIN_SC_GET_INFO version
         * @property {string|null} [updateAddress] LOGIN_SC_GET_INFO updateAddress
         */

        /**
         * Constructs a new LOGIN_SC_GET_INFO.
         * @memberof S2C
         * @classdesc Represents a LOGIN_SC_GET_INFO.
         * @implements ILOGIN_SC_GET_INFO
         * @constructor
         * @param {S2C.ILOGIN_SC_GET_INFO=} [properties] Properties to set
         */
        function LOGIN_SC_GET_INFO(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LOGIN_SC_GET_INFO notice.
         * @member {string} notice
         * @memberof S2C.LOGIN_SC_GET_INFO
         * @instance
         */
        LOGIN_SC_GET_INFO.prototype.notice = "";

        /**
         * LOGIN_SC_GET_INFO version.
         * @member {string} version
         * @memberof S2C.LOGIN_SC_GET_INFO
         * @instance
         */
        LOGIN_SC_GET_INFO.prototype.version = "";

        /**
         * LOGIN_SC_GET_INFO updateAddress.
         * @member {string} updateAddress
         * @memberof S2C.LOGIN_SC_GET_INFO
         * @instance
         */
        LOGIN_SC_GET_INFO.prototype.updateAddress = "";

        /**
         * Creates a new LOGIN_SC_GET_INFO instance using the specified properties.
         * @function create
         * @memberof S2C.LOGIN_SC_GET_INFO
         * @static
         * @param {S2C.ILOGIN_SC_GET_INFO=} [properties] Properties to set
         * @returns {S2C.LOGIN_SC_GET_INFO} LOGIN_SC_GET_INFO instance
         */
        LOGIN_SC_GET_INFO.create = function create(properties) {
            return new LOGIN_SC_GET_INFO(properties);
        };

        /**
         * Encodes the specified LOGIN_SC_GET_INFO message. Does not implicitly {@link S2C.LOGIN_SC_GET_INFO.verify|verify} messages.
         * @function encode
         * @memberof S2C.LOGIN_SC_GET_INFO
         * @static
         * @param {S2C.ILOGIN_SC_GET_INFO} message LOGIN_SC_GET_INFO message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LOGIN_SC_GET_INFO.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.notice != null && message.hasOwnProperty("notice"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.notice);
            if (message.version != null && message.hasOwnProperty("version"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.version);
            if (message.updateAddress != null && message.hasOwnProperty("updateAddress"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.updateAddress);
            return writer;
        };

        /**
         * Encodes the specified LOGIN_SC_GET_INFO message, length delimited. Does not implicitly {@link S2C.LOGIN_SC_GET_INFO.verify|verify} messages.
         * @function encodeDelimited
         * @memberof S2C.LOGIN_SC_GET_INFO
         * @static
         * @param {S2C.ILOGIN_SC_GET_INFO} message LOGIN_SC_GET_INFO message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LOGIN_SC_GET_INFO.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LOGIN_SC_GET_INFO message from the specified reader or buffer.
         * @function decode
         * @memberof S2C.LOGIN_SC_GET_INFO
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {S2C.LOGIN_SC_GET_INFO} LOGIN_SC_GET_INFO
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LOGIN_SC_GET_INFO.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2C.LOGIN_SC_GET_INFO();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.notice = reader.string();
                    break;
                case 2:
                    message.version = reader.string();
                    break;
                case 3:
                    message.updateAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LOGIN_SC_GET_INFO message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof S2C.LOGIN_SC_GET_INFO
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {S2C.LOGIN_SC_GET_INFO} LOGIN_SC_GET_INFO
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LOGIN_SC_GET_INFO.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LOGIN_SC_GET_INFO message.
         * @function verify
         * @memberof S2C.LOGIN_SC_GET_INFO
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LOGIN_SC_GET_INFO.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.notice != null && message.hasOwnProperty("notice"))
                if (!$util.isString(message.notice))
                    return "notice: string expected";
            if (message.version != null && message.hasOwnProperty("version"))
                if (!$util.isString(message.version))
                    return "version: string expected";
            if (message.updateAddress != null && message.hasOwnProperty("updateAddress"))
                if (!$util.isString(message.updateAddress))
                    return "updateAddress: string expected";
            return null;
        };

        /**
         * Creates a LOGIN_SC_GET_INFO message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof S2C.LOGIN_SC_GET_INFO
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {S2C.LOGIN_SC_GET_INFO} LOGIN_SC_GET_INFO
         */
        LOGIN_SC_GET_INFO.fromObject = function fromObject(object) {
            if (object instanceof $root.S2C.LOGIN_SC_GET_INFO)
                return object;
            var message = new $root.S2C.LOGIN_SC_GET_INFO();
            if (object.notice != null)
                message.notice = String(object.notice);
            if (object.version != null)
                message.version = String(object.version);
            if (object.updateAddress != null)
                message.updateAddress = String(object.updateAddress);
            return message;
        };

        /**
         * Creates a plain object from a LOGIN_SC_GET_INFO message. Also converts values to other types if specified.
         * @function toObject
         * @memberof S2C.LOGIN_SC_GET_INFO
         * @static
         * @param {S2C.LOGIN_SC_GET_INFO} message LOGIN_SC_GET_INFO
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LOGIN_SC_GET_INFO.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.notice = "";
                object.version = "";
                object.updateAddress = "";
            }
            if (message.notice != null && message.hasOwnProperty("notice"))
                object.notice = message.notice;
            if (message.version != null && message.hasOwnProperty("version"))
                object.version = message.version;
            if (message.updateAddress != null && message.hasOwnProperty("updateAddress"))
                object.updateAddress = message.updateAddress;
            return object;
        };

        /**
         * Converts this LOGIN_SC_GET_INFO to JSON.
         * @function toJSON
         * @memberof S2C.LOGIN_SC_GET_INFO
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LOGIN_SC_GET_INFO.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LOGIN_SC_GET_INFO;
    })();

    S2C.LOGIN_SC_QUERY = (function() {

        /**
         * Properties of a LOGIN_SC_QUERY.
         * @memberof S2C
         * @interface ILOGIN_SC_QUERY
         * @property {string|null} [ip] LOGIN_SC_QUERY ip
         * @property {number|null} [port] LOGIN_SC_QUERY port
         * @property {number|null} [state] LOGIN_SC_QUERY state
         * @property {boolean|null} [success] LOGIN_SC_QUERY success
         */

        /**
         * Constructs a new LOGIN_SC_QUERY.
         * @memberof S2C
         * @classdesc Represents a LOGIN_SC_QUERY.
         * @implements ILOGIN_SC_QUERY
         * @constructor
         * @param {S2C.ILOGIN_SC_QUERY=} [properties] Properties to set
         */
        function LOGIN_SC_QUERY(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LOGIN_SC_QUERY ip.
         * @member {string} ip
         * @memberof S2C.LOGIN_SC_QUERY
         * @instance
         */
        LOGIN_SC_QUERY.prototype.ip = "";

        /**
         * LOGIN_SC_QUERY port.
         * @member {number} port
         * @memberof S2C.LOGIN_SC_QUERY
         * @instance
         */
        LOGIN_SC_QUERY.prototype.port = 0;

        /**
         * LOGIN_SC_QUERY state.
         * @member {number} state
         * @memberof S2C.LOGIN_SC_QUERY
         * @instance
         */
        LOGIN_SC_QUERY.prototype.state = 0;

        /**
         * LOGIN_SC_QUERY success.
         * @member {boolean} success
         * @memberof S2C.LOGIN_SC_QUERY
         * @instance
         */
        LOGIN_SC_QUERY.prototype.success = false;

        /**
         * Creates a new LOGIN_SC_QUERY instance using the specified properties.
         * @function create
         * @memberof S2C.LOGIN_SC_QUERY
         * @static
         * @param {S2C.ILOGIN_SC_QUERY=} [properties] Properties to set
         * @returns {S2C.LOGIN_SC_QUERY} LOGIN_SC_QUERY instance
         */
        LOGIN_SC_QUERY.create = function create(properties) {
            return new LOGIN_SC_QUERY(properties);
        };

        /**
         * Encodes the specified LOGIN_SC_QUERY message. Does not implicitly {@link S2C.LOGIN_SC_QUERY.verify|verify} messages.
         * @function encode
         * @memberof S2C.LOGIN_SC_QUERY
         * @static
         * @param {S2C.ILOGIN_SC_QUERY} message LOGIN_SC_QUERY message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LOGIN_SC_QUERY.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ip != null && message.hasOwnProperty("ip"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.ip);
            if (message.port != null && message.hasOwnProperty("port"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.port);
            if (message.state != null && message.hasOwnProperty("state"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.state);
            if (message.success != null && message.hasOwnProperty("success"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.success);
            return writer;
        };

        /**
         * Encodes the specified LOGIN_SC_QUERY message, length delimited. Does not implicitly {@link S2C.LOGIN_SC_QUERY.verify|verify} messages.
         * @function encodeDelimited
         * @memberof S2C.LOGIN_SC_QUERY
         * @static
         * @param {S2C.ILOGIN_SC_QUERY} message LOGIN_SC_QUERY message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LOGIN_SC_QUERY.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LOGIN_SC_QUERY message from the specified reader or buffer.
         * @function decode
         * @memberof S2C.LOGIN_SC_QUERY
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {S2C.LOGIN_SC_QUERY} LOGIN_SC_QUERY
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LOGIN_SC_QUERY.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2C.LOGIN_SC_QUERY();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ip = reader.string();
                    break;
                case 2:
                    message.port = reader.uint32();
                    break;
                case 3:
                    message.state = reader.uint32();
                    break;
                case 4:
                    message.success = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LOGIN_SC_QUERY message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof S2C.LOGIN_SC_QUERY
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {S2C.LOGIN_SC_QUERY} LOGIN_SC_QUERY
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LOGIN_SC_QUERY.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LOGIN_SC_QUERY message.
         * @function verify
         * @memberof S2C.LOGIN_SC_QUERY
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LOGIN_SC_QUERY.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ip != null && message.hasOwnProperty("ip"))
                if (!$util.isString(message.ip))
                    return "ip: string expected";
            if (message.port != null && message.hasOwnProperty("port"))
                if (!$util.isInteger(message.port))
                    return "port: integer expected";
            if (message.state != null && message.hasOwnProperty("state"))
                if (!$util.isInteger(message.state))
                    return "state: integer expected";
            if (message.success != null && message.hasOwnProperty("success"))
                if (typeof message.success !== "boolean")
                    return "success: boolean expected";
            return null;
        };

        /**
         * Creates a LOGIN_SC_QUERY message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof S2C.LOGIN_SC_QUERY
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {S2C.LOGIN_SC_QUERY} LOGIN_SC_QUERY
         */
        LOGIN_SC_QUERY.fromObject = function fromObject(object) {
            if (object instanceof $root.S2C.LOGIN_SC_QUERY)
                return object;
            var message = new $root.S2C.LOGIN_SC_QUERY();
            if (object.ip != null)
                message.ip = String(object.ip);
            if (object.port != null)
                message.port = object.port >>> 0;
            if (object.state != null)
                message.state = object.state >>> 0;
            if (object.success != null)
                message.success = Boolean(object.success);
            return message;
        };

        /**
         * Creates a plain object from a LOGIN_SC_QUERY message. Also converts values to other types if specified.
         * @function toObject
         * @memberof S2C.LOGIN_SC_QUERY
         * @static
         * @param {S2C.LOGIN_SC_QUERY} message LOGIN_SC_QUERY
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LOGIN_SC_QUERY.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.ip = "";
                object.port = 0;
                object.state = 0;
                object.success = false;
            }
            if (message.ip != null && message.hasOwnProperty("ip"))
                object.ip = message.ip;
            if (message.port != null && message.hasOwnProperty("port"))
                object.port = message.port;
            if (message.state != null && message.hasOwnProperty("state"))
                object.state = message.state;
            if (message.success != null && message.hasOwnProperty("success"))
                object.success = message.success;
            return object;
        };

        /**
         * Converts this LOGIN_SC_QUERY to JSON.
         * @function toJSON
         * @memberof S2C.LOGIN_SC_QUERY
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LOGIN_SC_QUERY.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LOGIN_SC_QUERY;
    })();

    S2C.SC_ROLE_CREATE = (function() {

        /**
         * Properties of a SC_ROLE_CREATE.
         * @memberof S2C
         * @interface ISC_ROLE_CREATE
         * @property {number|null} [reslut] SC_ROLE_CREATE reslut
         */

        /**
         * Constructs a new SC_ROLE_CREATE.
         * @memberof S2C
         * @classdesc Represents a SC_ROLE_CREATE.
         * @implements ISC_ROLE_CREATE
         * @constructor
         * @param {S2C.ISC_ROLE_CREATE=} [properties] Properties to set
         */
        function SC_ROLE_CREATE(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SC_ROLE_CREATE reslut.
         * @member {number} reslut
         * @memberof S2C.SC_ROLE_CREATE
         * @instance
         */
        SC_ROLE_CREATE.prototype.reslut = 0;

        /**
         * Creates a new SC_ROLE_CREATE instance using the specified properties.
         * @function create
         * @memberof S2C.SC_ROLE_CREATE
         * @static
         * @param {S2C.ISC_ROLE_CREATE=} [properties] Properties to set
         * @returns {S2C.SC_ROLE_CREATE} SC_ROLE_CREATE instance
         */
        SC_ROLE_CREATE.create = function create(properties) {
            return new SC_ROLE_CREATE(properties);
        };

        /**
         * Encodes the specified SC_ROLE_CREATE message. Does not implicitly {@link S2C.SC_ROLE_CREATE.verify|verify} messages.
         * @function encode
         * @memberof S2C.SC_ROLE_CREATE
         * @static
         * @param {S2C.ISC_ROLE_CREATE} message SC_ROLE_CREATE message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SC_ROLE_CREATE.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.reslut != null && message.hasOwnProperty("reslut"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.reslut);
            return writer;
        };

        /**
         * Encodes the specified SC_ROLE_CREATE message, length delimited. Does not implicitly {@link S2C.SC_ROLE_CREATE.verify|verify} messages.
         * @function encodeDelimited
         * @memberof S2C.SC_ROLE_CREATE
         * @static
         * @param {S2C.ISC_ROLE_CREATE} message SC_ROLE_CREATE message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SC_ROLE_CREATE.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SC_ROLE_CREATE message from the specified reader or buffer.
         * @function decode
         * @memberof S2C.SC_ROLE_CREATE
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {S2C.SC_ROLE_CREATE} SC_ROLE_CREATE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SC_ROLE_CREATE.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2C.SC_ROLE_CREATE();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.reslut = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SC_ROLE_CREATE message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof S2C.SC_ROLE_CREATE
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {S2C.SC_ROLE_CREATE} SC_ROLE_CREATE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SC_ROLE_CREATE.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SC_ROLE_CREATE message.
         * @function verify
         * @memberof S2C.SC_ROLE_CREATE
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SC_ROLE_CREATE.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.reslut != null && message.hasOwnProperty("reslut"))
                if (!$util.isInteger(message.reslut))
                    return "reslut: integer expected";
            return null;
        };

        /**
         * Creates a SC_ROLE_CREATE message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof S2C.SC_ROLE_CREATE
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {S2C.SC_ROLE_CREATE} SC_ROLE_CREATE
         */
        SC_ROLE_CREATE.fromObject = function fromObject(object) {
            if (object instanceof $root.S2C.SC_ROLE_CREATE)
                return object;
            var message = new $root.S2C.SC_ROLE_CREATE();
            if (object.reslut != null)
                message.reslut = object.reslut >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a SC_ROLE_CREATE message. Also converts values to other types if specified.
         * @function toObject
         * @memberof S2C.SC_ROLE_CREATE
         * @static
         * @param {S2C.SC_ROLE_CREATE} message SC_ROLE_CREATE
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SC_ROLE_CREATE.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.reslut = 0;
            if (message.reslut != null && message.hasOwnProperty("reslut"))
                object.reslut = message.reslut;
            return object;
        };

        /**
         * Converts this SC_ROLE_CREATE to JSON.
         * @function toJSON
         * @memberof S2C.SC_ROLE_CREATE
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SC_ROLE_CREATE.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SC_ROLE_CREATE;
    })();

    S2C.SC_GM_CMD = (function() {

        /**
         * Properties of a SC_GM_CMD.
         * @memberof S2C
         * @interface ISC_GM_CMD
         * @property {string|null} [msg] SC_GM_CMD msg
         */

        /**
         * Constructs a new SC_GM_CMD.
         * @memberof S2C
         * @classdesc Represents a SC_GM_CMD.
         * @implements ISC_GM_CMD
         * @constructor
         * @param {S2C.ISC_GM_CMD=} [properties] Properties to set
         */
        function SC_GM_CMD(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SC_GM_CMD msg.
         * @member {string} msg
         * @memberof S2C.SC_GM_CMD
         * @instance
         */
        SC_GM_CMD.prototype.msg = "";

        /**
         * Creates a new SC_GM_CMD instance using the specified properties.
         * @function create
         * @memberof S2C.SC_GM_CMD
         * @static
         * @param {S2C.ISC_GM_CMD=} [properties] Properties to set
         * @returns {S2C.SC_GM_CMD} SC_GM_CMD instance
         */
        SC_GM_CMD.create = function create(properties) {
            return new SC_GM_CMD(properties);
        };

        /**
         * Encodes the specified SC_GM_CMD message. Does not implicitly {@link S2C.SC_GM_CMD.verify|verify} messages.
         * @function encode
         * @memberof S2C.SC_GM_CMD
         * @static
         * @param {S2C.ISC_GM_CMD} message SC_GM_CMD message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SC_GM_CMD.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.msg != null && message.hasOwnProperty("msg"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.msg);
            return writer;
        };

        /**
         * Encodes the specified SC_GM_CMD message, length delimited. Does not implicitly {@link S2C.SC_GM_CMD.verify|verify} messages.
         * @function encodeDelimited
         * @memberof S2C.SC_GM_CMD
         * @static
         * @param {S2C.ISC_GM_CMD} message SC_GM_CMD message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SC_GM_CMD.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SC_GM_CMD message from the specified reader or buffer.
         * @function decode
         * @memberof S2C.SC_GM_CMD
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {S2C.SC_GM_CMD} SC_GM_CMD
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SC_GM_CMD.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2C.SC_GM_CMD();
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
         * Decodes a SC_GM_CMD message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof S2C.SC_GM_CMD
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {S2C.SC_GM_CMD} SC_GM_CMD
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SC_GM_CMD.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SC_GM_CMD message.
         * @function verify
         * @memberof S2C.SC_GM_CMD
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SC_GM_CMD.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            return null;
        };

        /**
         * Creates a SC_GM_CMD message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof S2C.SC_GM_CMD
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {S2C.SC_GM_CMD} SC_GM_CMD
         */
        SC_GM_CMD.fromObject = function fromObject(object) {
            if (object instanceof $root.S2C.SC_GM_CMD)
                return object;
            var message = new $root.S2C.SC_GM_CMD();
            if (object.msg != null)
                message.msg = String(object.msg);
            return message;
        };

        /**
         * Creates a plain object from a SC_GM_CMD message. Also converts values to other types if specified.
         * @function toObject
         * @memberof S2C.SC_GM_CMD
         * @static
         * @param {S2C.SC_GM_CMD} message SC_GM_CMD
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SC_GM_CMD.toObject = function toObject(message, options) {
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
         * Converts this SC_GM_CMD to JSON.
         * @function toJSON
         * @memberof S2C.SC_GM_CMD
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SC_GM_CMD.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SC_GM_CMD;
    })();

    S2C.SC_UPDATE_CHAT = (function() {

        /**
         * Properties of a SC_UPDATE_CHAT.
         * @memberof S2C
         * @interface ISC_UPDATE_CHAT
         * @property {Array.<S2C.SC_UPDATE_CHAT.IChatMsg>|null} [msgs] SC_UPDATE_CHAT msgs
         */

        /**
         * Constructs a new SC_UPDATE_CHAT.
         * @memberof S2C
         * @classdesc Represents a SC_UPDATE_CHAT.
         * @implements ISC_UPDATE_CHAT
         * @constructor
         * @param {S2C.ISC_UPDATE_CHAT=} [properties] Properties to set
         */
        function SC_UPDATE_CHAT(properties) {
            this.msgs = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SC_UPDATE_CHAT msgs.
         * @member {Array.<S2C.SC_UPDATE_CHAT.IChatMsg>} msgs
         * @memberof S2C.SC_UPDATE_CHAT
         * @instance
         */
        SC_UPDATE_CHAT.prototype.msgs = $util.emptyArray;

        /**
         * Creates a new SC_UPDATE_CHAT instance using the specified properties.
         * @function create
         * @memberof S2C.SC_UPDATE_CHAT
         * @static
         * @param {S2C.ISC_UPDATE_CHAT=} [properties] Properties to set
         * @returns {S2C.SC_UPDATE_CHAT} SC_UPDATE_CHAT instance
         */
        SC_UPDATE_CHAT.create = function create(properties) {
            return new SC_UPDATE_CHAT(properties);
        };

        /**
         * Encodes the specified SC_UPDATE_CHAT message. Does not implicitly {@link S2C.SC_UPDATE_CHAT.verify|verify} messages.
         * @function encode
         * @memberof S2C.SC_UPDATE_CHAT
         * @static
         * @param {S2C.ISC_UPDATE_CHAT} message SC_UPDATE_CHAT message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SC_UPDATE_CHAT.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.msgs != null && message.msgs.length)
                for (var i = 0; i < message.msgs.length; ++i)
                    $root.S2C.SC_UPDATE_CHAT.ChatMsg.encode(message.msgs[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SC_UPDATE_CHAT message, length delimited. Does not implicitly {@link S2C.SC_UPDATE_CHAT.verify|verify} messages.
         * @function encodeDelimited
         * @memberof S2C.SC_UPDATE_CHAT
         * @static
         * @param {S2C.ISC_UPDATE_CHAT} message SC_UPDATE_CHAT message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SC_UPDATE_CHAT.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SC_UPDATE_CHAT message from the specified reader or buffer.
         * @function decode
         * @memberof S2C.SC_UPDATE_CHAT
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {S2C.SC_UPDATE_CHAT} SC_UPDATE_CHAT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SC_UPDATE_CHAT.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2C.SC_UPDATE_CHAT();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.msgs && message.msgs.length))
                        message.msgs = [];
                    message.msgs.push($root.S2C.SC_UPDATE_CHAT.ChatMsg.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SC_UPDATE_CHAT message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof S2C.SC_UPDATE_CHAT
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {S2C.SC_UPDATE_CHAT} SC_UPDATE_CHAT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SC_UPDATE_CHAT.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SC_UPDATE_CHAT message.
         * @function verify
         * @memberof S2C.SC_UPDATE_CHAT
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SC_UPDATE_CHAT.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.msgs != null && message.hasOwnProperty("msgs")) {
                if (!Array.isArray(message.msgs))
                    return "msgs: array expected";
                for (var i = 0; i < message.msgs.length; ++i) {
                    var error = $root.S2C.SC_UPDATE_CHAT.ChatMsg.verify(message.msgs[i]);
                    if (error)
                        return "msgs." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SC_UPDATE_CHAT message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof S2C.SC_UPDATE_CHAT
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {S2C.SC_UPDATE_CHAT} SC_UPDATE_CHAT
         */
        SC_UPDATE_CHAT.fromObject = function fromObject(object) {
            if (object instanceof $root.S2C.SC_UPDATE_CHAT)
                return object;
            var message = new $root.S2C.SC_UPDATE_CHAT();
            if (object.msgs) {
                if (!Array.isArray(object.msgs))
                    throw TypeError(".S2C.SC_UPDATE_CHAT.msgs: array expected");
                message.msgs = [];
                for (var i = 0; i < object.msgs.length; ++i) {
                    if (typeof object.msgs[i] !== "object")
                        throw TypeError(".S2C.SC_UPDATE_CHAT.msgs: object expected");
                    message.msgs[i] = $root.S2C.SC_UPDATE_CHAT.ChatMsg.fromObject(object.msgs[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SC_UPDATE_CHAT message. Also converts values to other types if specified.
         * @function toObject
         * @memberof S2C.SC_UPDATE_CHAT
         * @static
         * @param {S2C.SC_UPDATE_CHAT} message SC_UPDATE_CHAT
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SC_UPDATE_CHAT.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.msgs = [];
            if (message.msgs && message.msgs.length) {
                object.msgs = [];
                for (var j = 0; j < message.msgs.length; ++j)
                    object.msgs[j] = $root.S2C.SC_UPDATE_CHAT.ChatMsg.toObject(message.msgs[j], options);
            }
            return object;
        };

        /**
         * Converts this SC_UPDATE_CHAT to JSON.
         * @function toJSON
         * @memberof S2C.SC_UPDATE_CHAT
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SC_UPDATE_CHAT.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * EChatTempalteId enum.
         * @name S2C.SC_UPDATE_CHAT.EChatTempalteId
         * @enum {string}
         * @property {number} none=0 none value
         * @property {number} banquet=1 banquet value
         * @property {number} hanlin=2 hanlin value
         * @property {number} guildStage=3 guildStage value
         * @property {number} throneOnline=4 throneOnline value
         */
        SC_UPDATE_CHAT.EChatTempalteId = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "none"] = 0;
            values[valuesById[1] = "banquet"] = 1;
            values[valuesById[2] = "hanlin"] = 2;
            values[valuesById[3] = "guildStage"] = 3;
            values[valuesById[4] = "throneOnline"] = 4;
            return values;
        })();

        SC_UPDATE_CHAT.ChatMsg = (function() {

            /**
             * Properties of a ChatMsg.
             * @memberof S2C.SC_UPDATE_CHAT
             * @interface IChatMsg
             * @property {number|null} [roleId] ChatMsg roleId
             * @property {string|null} [name] ChatMsg name
             * @property {number|null} [titleId] ChatMsg titleId
             * @property {number|null} [vipLevel] ChatMsg vipLevel
             * @property {string|null} [msg] ChatMsg msg
             * @property {number|null} [createTime] ChatMsg createTime
             * @property {number|null} [channel] ChatMsg channel
             * @property {number|null} [channelParam] ChatMsg channelParam
             * @property {S2C.SC_UPDATE_CHAT.EChatTempalteId|null} [templateId] ChatMsg templateId
             * @property {Array.<string>|null} [strParams] ChatMsg strParams
             */

            /**
             * Constructs a new ChatMsg.
             * @memberof S2C.SC_UPDATE_CHAT
             * @classdesc Represents a ChatMsg.
             * @implements IChatMsg
             * @constructor
             * @param {S2C.SC_UPDATE_CHAT.IChatMsg=} [properties] Properties to set
             */
            function ChatMsg(properties) {
                this.strParams = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ChatMsg roleId.
             * @member {number} roleId
             * @memberof S2C.SC_UPDATE_CHAT.ChatMsg
             * @instance
             */
            ChatMsg.prototype.roleId = 0;

            /**
             * ChatMsg name.
             * @member {string} name
             * @memberof S2C.SC_UPDATE_CHAT.ChatMsg
             * @instance
             */
            ChatMsg.prototype.name = "";

            /**
             * ChatMsg titleId.
             * @member {number} titleId
             * @memberof S2C.SC_UPDATE_CHAT.ChatMsg
             * @instance
             */
            ChatMsg.prototype.titleId = 0;

            /**
             * ChatMsg vipLevel.
             * @member {number} vipLevel
             * @memberof S2C.SC_UPDATE_CHAT.ChatMsg
             * @instance
             */
            ChatMsg.prototype.vipLevel = 0;

            /**
             * ChatMsg msg.
             * @member {string} msg
             * @memberof S2C.SC_UPDATE_CHAT.ChatMsg
             * @instance
             */
            ChatMsg.prototype.msg = "";

            /**
             * ChatMsg createTime.
             * @member {number} createTime
             * @memberof S2C.SC_UPDATE_CHAT.ChatMsg
             * @instance
             */
            ChatMsg.prototype.createTime = 0;

            /**
             * ChatMsg channel.
             * @member {number} channel
             * @memberof S2C.SC_UPDATE_CHAT.ChatMsg
             * @instance
             */
            ChatMsg.prototype.channel = 0;

            /**
             * ChatMsg channelParam.
             * @member {number} channelParam
             * @memberof S2C.SC_UPDATE_CHAT.ChatMsg
             * @instance
             */
            ChatMsg.prototype.channelParam = 0;

            /**
             * ChatMsg templateId.
             * @member {S2C.SC_UPDATE_CHAT.EChatTempalteId} templateId
             * @memberof S2C.SC_UPDATE_CHAT.ChatMsg
             * @instance
             */
            ChatMsg.prototype.templateId = 0;

            /**
             * ChatMsg strParams.
             * @member {Array.<string>} strParams
             * @memberof S2C.SC_UPDATE_CHAT.ChatMsg
             * @instance
             */
            ChatMsg.prototype.strParams = $util.emptyArray;

            /**
             * Creates a new ChatMsg instance using the specified properties.
             * @function create
             * @memberof S2C.SC_UPDATE_CHAT.ChatMsg
             * @static
             * @param {S2C.SC_UPDATE_CHAT.IChatMsg=} [properties] Properties to set
             * @returns {S2C.SC_UPDATE_CHAT.ChatMsg} ChatMsg instance
             */
            ChatMsg.create = function create(properties) {
                return new ChatMsg(properties);
            };

            /**
             * Encodes the specified ChatMsg message. Does not implicitly {@link S2C.SC_UPDATE_CHAT.ChatMsg.verify|verify} messages.
             * @function encode
             * @memberof S2C.SC_UPDATE_CHAT.ChatMsg
             * @static
             * @param {S2C.SC_UPDATE_CHAT.IChatMsg} message ChatMsg message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ChatMsg.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.roleId != null && message.hasOwnProperty("roleId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.roleId);
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                if (message.titleId != null && message.hasOwnProperty("titleId"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.titleId);
                if (message.vipLevel != null && message.hasOwnProperty("vipLevel"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.vipLevel);
                if (message.msg != null && message.hasOwnProperty("msg"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.msg);
                if (message.createTime != null && message.hasOwnProperty("createTime"))
                    writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.createTime);
                if (message.channel != null && message.hasOwnProperty("channel"))
                    writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.channel);
                if (message.channelParam != null && message.hasOwnProperty("channelParam"))
                    writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.channelParam);
                if (message.templateId != null && message.hasOwnProperty("templateId"))
                    writer.uint32(/* id 9, wireType 0 =*/72).int32(message.templateId);
                if (message.strParams != null && message.strParams.length)
                    for (var i = 0; i < message.strParams.length; ++i)
                        writer.uint32(/* id 10, wireType 2 =*/82).string(message.strParams[i]);
                return writer;
            };

            /**
             * Encodes the specified ChatMsg message, length delimited. Does not implicitly {@link S2C.SC_UPDATE_CHAT.ChatMsg.verify|verify} messages.
             * @function encodeDelimited
             * @memberof S2C.SC_UPDATE_CHAT.ChatMsg
             * @static
             * @param {S2C.SC_UPDATE_CHAT.IChatMsg} message ChatMsg message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ChatMsg.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ChatMsg message from the specified reader or buffer.
             * @function decode
             * @memberof S2C.SC_UPDATE_CHAT.ChatMsg
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {S2C.SC_UPDATE_CHAT.ChatMsg} ChatMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ChatMsg.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2C.SC_UPDATE_CHAT.ChatMsg();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.roleId = reader.uint32();
                        break;
                    case 2:
                        message.name = reader.string();
                        break;
                    case 3:
                        message.titleId = reader.uint32();
                        break;
                    case 4:
                        message.vipLevel = reader.uint32();
                        break;
                    case 5:
                        message.msg = reader.string();
                        break;
                    case 6:
                        message.createTime = reader.uint32();
                        break;
                    case 7:
                        message.channel = reader.uint32();
                        break;
                    case 8:
                        message.channelParam = reader.uint32();
                        break;
                    case 9:
                        message.templateId = reader.int32();
                        break;
                    case 10:
                        if (!(message.strParams && message.strParams.length))
                            message.strParams = [];
                        message.strParams.push(reader.string());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ChatMsg message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof S2C.SC_UPDATE_CHAT.ChatMsg
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {S2C.SC_UPDATE_CHAT.ChatMsg} ChatMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ChatMsg.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ChatMsg message.
             * @function verify
             * @memberof S2C.SC_UPDATE_CHAT.ChatMsg
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ChatMsg.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.roleId != null && message.hasOwnProperty("roleId"))
                    if (!$util.isInteger(message.roleId))
                        return "roleId: integer expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.titleId != null && message.hasOwnProperty("titleId"))
                    if (!$util.isInteger(message.titleId))
                        return "titleId: integer expected";
                if (message.vipLevel != null && message.hasOwnProperty("vipLevel"))
                    if (!$util.isInteger(message.vipLevel))
                        return "vipLevel: integer expected";
                if (message.msg != null && message.hasOwnProperty("msg"))
                    if (!$util.isString(message.msg))
                        return "msg: string expected";
                if (message.createTime != null && message.hasOwnProperty("createTime"))
                    if (!$util.isInteger(message.createTime))
                        return "createTime: integer expected";
                if (message.channel != null && message.hasOwnProperty("channel"))
                    if (!$util.isInteger(message.channel))
                        return "channel: integer expected";
                if (message.channelParam != null && message.hasOwnProperty("channelParam"))
                    if (!$util.isInteger(message.channelParam))
                        return "channelParam: integer expected";
                if (message.templateId != null && message.hasOwnProperty("templateId"))
                    switch (message.templateId) {
                    default:
                        return "templateId: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                        break;
                    }
                if (message.strParams != null && message.hasOwnProperty("strParams")) {
                    if (!Array.isArray(message.strParams))
                        return "strParams: array expected";
                    for (var i = 0; i < message.strParams.length; ++i)
                        if (!$util.isString(message.strParams[i]))
                            return "strParams: string[] expected";
                }
                return null;
            };

            /**
             * Creates a ChatMsg message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof S2C.SC_UPDATE_CHAT.ChatMsg
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {S2C.SC_UPDATE_CHAT.ChatMsg} ChatMsg
             */
            ChatMsg.fromObject = function fromObject(object) {
                if (object instanceof $root.S2C.SC_UPDATE_CHAT.ChatMsg)
                    return object;
                var message = new $root.S2C.SC_UPDATE_CHAT.ChatMsg();
                if (object.roleId != null)
                    message.roleId = object.roleId >>> 0;
                if (object.name != null)
                    message.name = String(object.name);
                if (object.titleId != null)
                    message.titleId = object.titleId >>> 0;
                if (object.vipLevel != null)
                    message.vipLevel = object.vipLevel >>> 0;
                if (object.msg != null)
                    message.msg = String(object.msg);
                if (object.createTime != null)
                    message.createTime = object.createTime >>> 0;
                if (object.channel != null)
                    message.channel = object.channel >>> 0;
                if (object.channelParam != null)
                    message.channelParam = object.channelParam >>> 0;
                switch (object.templateId) {
                case "none":
                case 0:
                    message.templateId = 0;
                    break;
                case "banquet":
                case 1:
                    message.templateId = 1;
                    break;
                case "hanlin":
                case 2:
                    message.templateId = 2;
                    break;
                case "guildStage":
                case 3:
                    message.templateId = 3;
                    break;
                case "throneOnline":
                case 4:
                    message.templateId = 4;
                    break;
                }
                if (object.strParams) {
                    if (!Array.isArray(object.strParams))
                        throw TypeError(".S2C.SC_UPDATE_CHAT.ChatMsg.strParams: array expected");
                    message.strParams = [];
                    for (var i = 0; i < object.strParams.length; ++i)
                        message.strParams[i] = String(object.strParams[i]);
                }
                return message;
            };

            /**
             * Creates a plain object from a ChatMsg message. Also converts values to other types if specified.
             * @function toObject
             * @memberof S2C.SC_UPDATE_CHAT.ChatMsg
             * @static
             * @param {S2C.SC_UPDATE_CHAT.ChatMsg} message ChatMsg
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ChatMsg.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.strParams = [];
                if (options.defaults) {
                    object.roleId = 0;
                    object.name = "";
                    object.titleId = 0;
                    object.vipLevel = 0;
                    object.msg = "";
                    object.createTime = 0;
                    object.channel = 0;
                    object.channelParam = 0;
                    object.templateId = options.enums === String ? "none" : 0;
                }
                if (message.roleId != null && message.hasOwnProperty("roleId"))
                    object.roleId = message.roleId;
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.titleId != null && message.hasOwnProperty("titleId"))
                    object.titleId = message.titleId;
                if (message.vipLevel != null && message.hasOwnProperty("vipLevel"))
                    object.vipLevel = message.vipLevel;
                if (message.msg != null && message.hasOwnProperty("msg"))
                    object.msg = message.msg;
                if (message.createTime != null && message.hasOwnProperty("createTime"))
                    object.createTime = message.createTime;
                if (message.channel != null && message.hasOwnProperty("channel"))
                    object.channel = message.channel;
                if (message.channelParam != null && message.hasOwnProperty("channelParam"))
                    object.channelParam = message.channelParam;
                if (message.templateId != null && message.hasOwnProperty("templateId"))
                    object.templateId = options.enums === String ? $root.S2C.SC_UPDATE_CHAT.EChatTempalteId[message.templateId] : message.templateId;
                if (message.strParams && message.strParams.length) {
                    object.strParams = [];
                    for (var j = 0; j < message.strParams.length; ++j)
                        object.strParams[j] = message.strParams[j];
                }
                return object;
            };

            /**
             * Converts this ChatMsg to JSON.
             * @function toJSON
             * @memberof S2C.SC_UPDATE_CHAT.ChatMsg
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ChatMsg.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ChatMsg;
        })();

        return SC_UPDATE_CHAT;
    })();

    S2C.SC_UPDATE_RECHARGE = (function() {

        /**
         * Properties of a SC_UPDATE_RECHARGE.
         * @memberof S2C
         * @interface ISC_UPDATE_RECHARGE
         */

        /**
         * Constructs a new SC_UPDATE_RECHARGE.
         * @memberof S2C
         * @classdesc Represents a SC_UPDATE_RECHARGE.
         * @implements ISC_UPDATE_RECHARGE
         * @constructor
         * @param {S2C.ISC_UPDATE_RECHARGE=} [properties] Properties to set
         */
        function SC_UPDATE_RECHARGE(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new SC_UPDATE_RECHARGE instance using the specified properties.
         * @function create
         * @memberof S2C.SC_UPDATE_RECHARGE
         * @static
         * @param {S2C.ISC_UPDATE_RECHARGE=} [properties] Properties to set
         * @returns {S2C.SC_UPDATE_RECHARGE} SC_UPDATE_RECHARGE instance
         */
        SC_UPDATE_RECHARGE.create = function create(properties) {
            return new SC_UPDATE_RECHARGE(properties);
        };

        /**
         * Encodes the specified SC_UPDATE_RECHARGE message. Does not implicitly {@link S2C.SC_UPDATE_RECHARGE.verify|verify} messages.
         * @function encode
         * @memberof S2C.SC_UPDATE_RECHARGE
         * @static
         * @param {S2C.ISC_UPDATE_RECHARGE} message SC_UPDATE_RECHARGE message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SC_UPDATE_RECHARGE.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified SC_UPDATE_RECHARGE message, length delimited. Does not implicitly {@link S2C.SC_UPDATE_RECHARGE.verify|verify} messages.
         * @function encodeDelimited
         * @memberof S2C.SC_UPDATE_RECHARGE
         * @static
         * @param {S2C.ISC_UPDATE_RECHARGE} message SC_UPDATE_RECHARGE message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SC_UPDATE_RECHARGE.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SC_UPDATE_RECHARGE message from the specified reader or buffer.
         * @function decode
         * @memberof S2C.SC_UPDATE_RECHARGE
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {S2C.SC_UPDATE_RECHARGE} SC_UPDATE_RECHARGE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SC_UPDATE_RECHARGE.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2C.SC_UPDATE_RECHARGE();
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
         * Decodes a SC_UPDATE_RECHARGE message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof S2C.SC_UPDATE_RECHARGE
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {S2C.SC_UPDATE_RECHARGE} SC_UPDATE_RECHARGE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SC_UPDATE_RECHARGE.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SC_UPDATE_RECHARGE message.
         * @function verify
         * @memberof S2C.SC_UPDATE_RECHARGE
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SC_UPDATE_RECHARGE.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a SC_UPDATE_RECHARGE message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof S2C.SC_UPDATE_RECHARGE
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {S2C.SC_UPDATE_RECHARGE} SC_UPDATE_RECHARGE
         */
        SC_UPDATE_RECHARGE.fromObject = function fromObject(object) {
            if (object instanceof $root.S2C.SC_UPDATE_RECHARGE)
                return object;
            return new $root.S2C.SC_UPDATE_RECHARGE();
        };

        /**
         * Creates a plain object from a SC_UPDATE_RECHARGE message. Also converts values to other types if specified.
         * @function toObject
         * @memberof S2C.SC_UPDATE_RECHARGE
         * @static
         * @param {S2C.SC_UPDATE_RECHARGE} message SC_UPDATE_RECHARGE
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SC_UPDATE_RECHARGE.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this SC_UPDATE_RECHARGE to JSON.
         * @function toJSON
         * @memberof S2C.SC_UPDATE_RECHARGE
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SC_UPDATE_RECHARGE.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SC_UPDATE_RECHARGE;
    })();

    S2C.SC_ROLE_OFFLINE = (function() {

        /**
         * Properties of a SC_ROLE_OFFLINE.
         * @memberof S2C
         * @interface ISC_ROLE_OFFLINE
         * @property {number|null} [type] SC_ROLE_OFFLINE type
         */

        /**
         * Constructs a new SC_ROLE_OFFLINE.
         * @memberof S2C
         * @classdesc Represents a SC_ROLE_OFFLINE.
         * @implements ISC_ROLE_OFFLINE
         * @constructor
         * @param {S2C.ISC_ROLE_OFFLINE=} [properties] Properties to set
         */
        function SC_ROLE_OFFLINE(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SC_ROLE_OFFLINE type.
         * @member {number} type
         * @memberof S2C.SC_ROLE_OFFLINE
         * @instance
         */
        SC_ROLE_OFFLINE.prototype.type = 0;

        /**
         * Creates a new SC_ROLE_OFFLINE instance using the specified properties.
         * @function create
         * @memberof S2C.SC_ROLE_OFFLINE
         * @static
         * @param {S2C.ISC_ROLE_OFFLINE=} [properties] Properties to set
         * @returns {S2C.SC_ROLE_OFFLINE} SC_ROLE_OFFLINE instance
         */
        SC_ROLE_OFFLINE.create = function create(properties) {
            return new SC_ROLE_OFFLINE(properties);
        };

        /**
         * Encodes the specified SC_ROLE_OFFLINE message. Does not implicitly {@link S2C.SC_ROLE_OFFLINE.verify|verify} messages.
         * @function encode
         * @memberof S2C.SC_ROLE_OFFLINE
         * @static
         * @param {S2C.ISC_ROLE_OFFLINE} message SC_ROLE_OFFLINE message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SC_ROLE_OFFLINE.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.type);
            return writer;
        };

        /**
         * Encodes the specified SC_ROLE_OFFLINE message, length delimited. Does not implicitly {@link S2C.SC_ROLE_OFFLINE.verify|verify} messages.
         * @function encodeDelimited
         * @memberof S2C.SC_ROLE_OFFLINE
         * @static
         * @param {S2C.ISC_ROLE_OFFLINE} message SC_ROLE_OFFLINE message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SC_ROLE_OFFLINE.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SC_ROLE_OFFLINE message from the specified reader or buffer.
         * @function decode
         * @memberof S2C.SC_ROLE_OFFLINE
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {S2C.SC_ROLE_OFFLINE} SC_ROLE_OFFLINE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SC_ROLE_OFFLINE.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2C.SC_ROLE_OFFLINE();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SC_ROLE_OFFLINE message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof S2C.SC_ROLE_OFFLINE
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {S2C.SC_ROLE_OFFLINE} SC_ROLE_OFFLINE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SC_ROLE_OFFLINE.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SC_ROLE_OFFLINE message.
         * @function verify
         * @memberof S2C.SC_ROLE_OFFLINE
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SC_ROLE_OFFLINE.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isInteger(message.type))
                    return "type: integer expected";
            return null;
        };

        /**
         * Creates a SC_ROLE_OFFLINE message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof S2C.SC_ROLE_OFFLINE
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {S2C.SC_ROLE_OFFLINE} SC_ROLE_OFFLINE
         */
        SC_ROLE_OFFLINE.fromObject = function fromObject(object) {
            if (object instanceof $root.S2C.SC_ROLE_OFFLINE)
                return object;
            var message = new $root.S2C.SC_ROLE_OFFLINE();
            if (object.type != null)
                message.type = object.type >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a SC_ROLE_OFFLINE message. Also converts values to other types if specified.
         * @function toObject
         * @memberof S2C.SC_ROLE_OFFLINE
         * @static
         * @param {S2C.SC_ROLE_OFFLINE} message SC_ROLE_OFFLINE
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SC_ROLE_OFFLINE.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.type = 0;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            return object;
        };

        /**
         * Converts this SC_ROLE_OFFLINE to JSON.
         * @function toJSON
         * @memberof S2C.SC_ROLE_OFFLINE
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SC_ROLE_OFFLINE.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SC_ROLE_OFFLINE;
    })();

    return S2C;
})();

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
