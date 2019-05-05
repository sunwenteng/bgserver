/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

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

module.exports = $root;
