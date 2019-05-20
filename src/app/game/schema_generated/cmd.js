/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.Hit = (function() {

    /**
     * Namespace Hit.
     * @exports Hit
     * @namespace
     */
    var Hit = {};

    /**
     * E_ADVENTURE_EVENT enum.
     * @name Hit.E_ADVENTURE_EVENT
     * @enum {string}
     * @property {number} EAE_ADV=0 EAE_ADV value
     * @property {number} EAE_BATTLE=1 EAE_BATTLE value
     */
    Hit.E_ADVENTURE_EVENT = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "EAE_ADV"] = 0;
        values[valuesById[1] = "EAE_BATTLE"] = 1;
        return values;
    })();

    Hit.AdventureInfo = (function() {

        /**
         * Properties of an AdventureInfo.
         * @memberof Hit
         * @interface IAdventureInfo
         * @property {number|null} [adventureStageId] AdventureInfo adventureStageId
         * @property {number|null} [stageExp] AdventureInfo stageExp
         */

        /**
         * Constructs a new AdventureInfo.
         * @memberof Hit
         * @classdesc Represents an AdventureInfo.
         * @implements IAdventureInfo
         * @constructor
         * @param {Hit.IAdventureInfo=} [properties] Properties to set
         */
        function AdventureInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AdventureInfo adventureStageId.
         * @member {number} adventureStageId
         * @memberof Hit.AdventureInfo
         * @instance
         */
        AdventureInfo.prototype.adventureStageId = 0;

        /**
         * AdventureInfo stageExp.
         * @member {number} stageExp
         * @memberof Hit.AdventureInfo
         * @instance
         */
        AdventureInfo.prototype.stageExp = 0;

        /**
         * Creates a new AdventureInfo instance using the specified properties.
         * @function create
         * @memberof Hit.AdventureInfo
         * @static
         * @param {Hit.IAdventureInfo=} [properties] Properties to set
         * @returns {Hit.AdventureInfo} AdventureInfo instance
         */
        AdventureInfo.create = function create(properties) {
            return new AdventureInfo(properties);
        };

        /**
         * Encodes the specified AdventureInfo message. Does not implicitly {@link Hit.AdventureInfo.verify|verify} messages.
         * @function encode
         * @memberof Hit.AdventureInfo
         * @static
         * @param {Hit.IAdventureInfo} message AdventureInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AdventureInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.adventureStageId != null && message.hasOwnProperty("adventureStageId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.adventureStageId);
            if (message.stageExp != null && message.hasOwnProperty("stageExp"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.stageExp);
            return writer;
        };

        /**
         * Encodes the specified AdventureInfo message, length delimited. Does not implicitly {@link Hit.AdventureInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Hit.AdventureInfo
         * @static
         * @param {Hit.IAdventureInfo} message AdventureInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AdventureInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AdventureInfo message from the specified reader or buffer.
         * @function decode
         * @memberof Hit.AdventureInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Hit.AdventureInfo} AdventureInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AdventureInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Hit.AdventureInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.adventureStageId = reader.int32();
                    break;
                case 2:
                    message.stageExp = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AdventureInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Hit.AdventureInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Hit.AdventureInfo} AdventureInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AdventureInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AdventureInfo message.
         * @function verify
         * @memberof Hit.AdventureInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AdventureInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.adventureStageId != null && message.hasOwnProperty("adventureStageId"))
                if (!$util.isInteger(message.adventureStageId))
                    return "adventureStageId: integer expected";
            if (message.stageExp != null && message.hasOwnProperty("stageExp"))
                if (!$util.isInteger(message.stageExp))
                    return "stageExp: integer expected";
            return null;
        };

        /**
         * Creates an AdventureInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Hit.AdventureInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Hit.AdventureInfo} AdventureInfo
         */
        AdventureInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.Hit.AdventureInfo)
                return object;
            var message = new $root.Hit.AdventureInfo();
            if (object.adventureStageId != null)
                message.adventureStageId = object.adventureStageId | 0;
            if (object.stageExp != null)
                message.stageExp = object.stageExp | 0;
            return message;
        };

        /**
         * Creates a plain object from an AdventureInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Hit.AdventureInfo
         * @static
         * @param {Hit.AdventureInfo} message AdventureInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AdventureInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.adventureStageId = 0;
                object.stageExp = 0;
            }
            if (message.adventureStageId != null && message.hasOwnProperty("adventureStageId"))
                object.adventureStageId = message.adventureStageId;
            if (message.stageExp != null && message.hasOwnProperty("stageExp"))
                object.stageExp = message.stageExp;
            return object;
        };

        /**
         * Converts this AdventureInfo to JSON.
         * @function toJSON
         * @memberof Hit.AdventureInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AdventureInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AdventureInfo;
    })();

    Hit.STC_ADVENTURE = (function() {

        /**
         * Properties of a STC_ADVENTURE.
         * @memberof Hit
         * @interface ISTC_ADVENTURE
         * @property {number|null} [advId] STC_ADVENTURE advId
         * @property {Array.<number>|null} [params] STC_ADVENTURE params
         */

        /**
         * Constructs a new STC_ADVENTURE.
         * @memberof Hit
         * @classdesc Represents a STC_ADVENTURE.
         * @implements ISTC_ADVENTURE
         * @constructor
         * @param {Hit.ISTC_ADVENTURE=} [properties] Properties to set
         */
        function STC_ADVENTURE(properties) {
            this.params = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * STC_ADVENTURE advId.
         * @member {number} advId
         * @memberof Hit.STC_ADVENTURE
         * @instance
         */
        STC_ADVENTURE.prototype.advId = 0;

        /**
         * STC_ADVENTURE params.
         * @member {Array.<number>} params
         * @memberof Hit.STC_ADVENTURE
         * @instance
         */
        STC_ADVENTURE.prototype.params = $util.emptyArray;

        /**
         * Creates a new STC_ADVENTURE instance using the specified properties.
         * @function create
         * @memberof Hit.STC_ADVENTURE
         * @static
         * @param {Hit.ISTC_ADVENTURE=} [properties] Properties to set
         * @returns {Hit.STC_ADVENTURE} STC_ADVENTURE instance
         */
        STC_ADVENTURE.create = function create(properties) {
            return new STC_ADVENTURE(properties);
        };

        /**
         * Encodes the specified STC_ADVENTURE message. Does not implicitly {@link Hit.STC_ADVENTURE.verify|verify} messages.
         * @function encode
         * @memberof Hit.STC_ADVENTURE
         * @static
         * @param {Hit.ISTC_ADVENTURE} message STC_ADVENTURE message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        STC_ADVENTURE.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.advId != null && message.hasOwnProperty("advId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.advId);
            if (message.params != null && message.params.length) {
                writer.uint32(/* id 2, wireType 2 =*/18).fork();
                for (var i = 0; i < message.params.length; ++i)
                    writer.int32(message.params[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified STC_ADVENTURE message, length delimited. Does not implicitly {@link Hit.STC_ADVENTURE.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Hit.STC_ADVENTURE
         * @static
         * @param {Hit.ISTC_ADVENTURE} message STC_ADVENTURE message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        STC_ADVENTURE.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a STC_ADVENTURE message from the specified reader or buffer.
         * @function decode
         * @memberof Hit.STC_ADVENTURE
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Hit.STC_ADVENTURE} STC_ADVENTURE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        STC_ADVENTURE.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Hit.STC_ADVENTURE();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.advId = reader.int32();
                    break;
                case 2:
                    if (!(message.params && message.params.length))
                        message.params = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.params.push(reader.int32());
                    } else
                        message.params.push(reader.int32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a STC_ADVENTURE message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Hit.STC_ADVENTURE
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Hit.STC_ADVENTURE} STC_ADVENTURE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        STC_ADVENTURE.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a STC_ADVENTURE message.
         * @function verify
         * @memberof Hit.STC_ADVENTURE
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        STC_ADVENTURE.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.advId != null && message.hasOwnProperty("advId"))
                if (!$util.isInteger(message.advId))
                    return "advId: integer expected";
            if (message.params != null && message.hasOwnProperty("params")) {
                if (!Array.isArray(message.params))
                    return "params: array expected";
                for (var i = 0; i < message.params.length; ++i)
                    if (!$util.isInteger(message.params[i]))
                        return "params: integer[] expected";
            }
            return null;
        };

        /**
         * Creates a STC_ADVENTURE message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Hit.STC_ADVENTURE
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Hit.STC_ADVENTURE} STC_ADVENTURE
         */
        STC_ADVENTURE.fromObject = function fromObject(object) {
            if (object instanceof $root.Hit.STC_ADVENTURE)
                return object;
            var message = new $root.Hit.STC_ADVENTURE();
            if (object.advId != null)
                message.advId = object.advId | 0;
            if (object.params) {
                if (!Array.isArray(object.params))
                    throw TypeError(".Hit.STC_ADVENTURE.params: array expected");
                message.params = [];
                for (var i = 0; i < object.params.length; ++i)
                    message.params[i] = object.params[i] | 0;
            }
            return message;
        };

        /**
         * Creates a plain object from a STC_ADVENTURE message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Hit.STC_ADVENTURE
         * @static
         * @param {Hit.STC_ADVENTURE} message STC_ADVENTURE
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        STC_ADVENTURE.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.params = [];
            if (options.defaults)
                object.advId = 0;
            if (message.advId != null && message.hasOwnProperty("advId"))
                object.advId = message.advId;
            if (message.params && message.params.length) {
                object.params = [];
                for (var j = 0; j < message.params.length; ++j)
                    object.params[j] = message.params[j];
            }
            return object;
        };

        /**
         * Converts this STC_ADVENTURE to JSON.
         * @function toJSON
         * @memberof Hit.STC_ADVENTURE
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        STC_ADVENTURE.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return STC_ADVENTURE;
    })();

    Hit.RC_ADVENTURE_RESULT = (function() {

        /**
         * Properties of a RC_ADVENTURE_RESULT.
         * @memberof Hit
         * @interface IRC_ADVENTURE_RESULT
         * @property {Hit.E_ADVENTURE_EVENT|null} [evt] RC_ADVENTURE_RESULT evt
         * @property {Hit.ISTC_REWARD|null} [rwd] RC_ADVENTURE_RESULT rwd
         * @property {Hit.ISTC_BATTLE_RESULT|null} [battleResult] RC_ADVENTURE_RESULT battleResult
         * @property {Hit.ISTC_ADVENTURE|null} [adv] RC_ADVENTURE_RESULT adv
         * @property {number|null} [errCode] RC_ADVENTURE_RESULT errCode
         */

        /**
         * Constructs a new RC_ADVENTURE_RESULT.
         * @memberof Hit
         * @classdesc Represents a RC_ADVENTURE_RESULT.
         * @implements IRC_ADVENTURE_RESULT
         * @constructor
         * @param {Hit.IRC_ADVENTURE_RESULT=} [properties] Properties to set
         */
        function RC_ADVENTURE_RESULT(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RC_ADVENTURE_RESULT evt.
         * @member {Hit.E_ADVENTURE_EVENT} evt
         * @memberof Hit.RC_ADVENTURE_RESULT
         * @instance
         */
        RC_ADVENTURE_RESULT.prototype.evt = 0;

        /**
         * RC_ADVENTURE_RESULT rwd.
         * @member {Hit.ISTC_REWARD|null|undefined} rwd
         * @memberof Hit.RC_ADVENTURE_RESULT
         * @instance
         */
        RC_ADVENTURE_RESULT.prototype.rwd = null;

        /**
         * RC_ADVENTURE_RESULT battleResult.
         * @member {Hit.ISTC_BATTLE_RESULT|null|undefined} battleResult
         * @memberof Hit.RC_ADVENTURE_RESULT
         * @instance
         */
        RC_ADVENTURE_RESULT.prototype.battleResult = null;

        /**
         * RC_ADVENTURE_RESULT adv.
         * @member {Hit.ISTC_ADVENTURE|null|undefined} adv
         * @memberof Hit.RC_ADVENTURE_RESULT
         * @instance
         */
        RC_ADVENTURE_RESULT.prototype.adv = null;

        /**
         * RC_ADVENTURE_RESULT errCode.
         * @member {number} errCode
         * @memberof Hit.RC_ADVENTURE_RESULT
         * @instance
         */
        RC_ADVENTURE_RESULT.prototype.errCode = 0;

        /**
         * Creates a new RC_ADVENTURE_RESULT instance using the specified properties.
         * @function create
         * @memberof Hit.RC_ADVENTURE_RESULT
         * @static
         * @param {Hit.IRC_ADVENTURE_RESULT=} [properties] Properties to set
         * @returns {Hit.RC_ADVENTURE_RESULT} RC_ADVENTURE_RESULT instance
         */
        RC_ADVENTURE_RESULT.create = function create(properties) {
            return new RC_ADVENTURE_RESULT(properties);
        };

        /**
         * Encodes the specified RC_ADVENTURE_RESULT message. Does not implicitly {@link Hit.RC_ADVENTURE_RESULT.verify|verify} messages.
         * @function encode
         * @memberof Hit.RC_ADVENTURE_RESULT
         * @static
         * @param {Hit.IRC_ADVENTURE_RESULT} message RC_ADVENTURE_RESULT message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RC_ADVENTURE_RESULT.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.evt != null && message.hasOwnProperty("evt"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.evt);
            if (message.rwd != null && message.hasOwnProperty("rwd"))
                $root.Hit.STC_REWARD.encode(message.rwd, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.battleResult != null && message.hasOwnProperty("battleResult"))
                $root.Hit.STC_BATTLE_RESULT.encode(message.battleResult, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.adv != null && message.hasOwnProperty("adv"))
                $root.Hit.STC_ADVENTURE.encode(message.adv, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.errCode);
            return writer;
        };

        /**
         * Encodes the specified RC_ADVENTURE_RESULT message, length delimited. Does not implicitly {@link Hit.RC_ADVENTURE_RESULT.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Hit.RC_ADVENTURE_RESULT
         * @static
         * @param {Hit.IRC_ADVENTURE_RESULT} message RC_ADVENTURE_RESULT message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RC_ADVENTURE_RESULT.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RC_ADVENTURE_RESULT message from the specified reader or buffer.
         * @function decode
         * @memberof Hit.RC_ADVENTURE_RESULT
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Hit.RC_ADVENTURE_RESULT} RC_ADVENTURE_RESULT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RC_ADVENTURE_RESULT.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Hit.RC_ADVENTURE_RESULT();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.evt = reader.int32();
                    break;
                case 2:
                    message.rwd = $root.Hit.STC_REWARD.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.battleResult = $root.Hit.STC_BATTLE_RESULT.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.adv = $root.Hit.STC_ADVENTURE.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.errCode = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RC_ADVENTURE_RESULT message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Hit.RC_ADVENTURE_RESULT
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Hit.RC_ADVENTURE_RESULT} RC_ADVENTURE_RESULT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RC_ADVENTURE_RESULT.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RC_ADVENTURE_RESULT message.
         * @function verify
         * @memberof Hit.RC_ADVENTURE_RESULT
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RC_ADVENTURE_RESULT.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.evt != null && message.hasOwnProperty("evt"))
                switch (message.evt) {
                default:
                    return "evt: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.rwd != null && message.hasOwnProperty("rwd")) {
                var error = $root.Hit.STC_REWARD.verify(message.rwd);
                if (error)
                    return "rwd." + error;
            }
            if (message.battleResult != null && message.hasOwnProperty("battleResult")) {
                var error = $root.Hit.STC_BATTLE_RESULT.verify(message.battleResult);
                if (error)
                    return "battleResult." + error;
            }
            if (message.adv != null && message.hasOwnProperty("adv")) {
                var error = $root.Hit.STC_ADVENTURE.verify(message.adv);
                if (error)
                    return "adv." + error;
            }
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                if (!$util.isInteger(message.errCode))
                    return "errCode: integer expected";
            return null;
        };

        /**
         * Creates a RC_ADVENTURE_RESULT message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Hit.RC_ADVENTURE_RESULT
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Hit.RC_ADVENTURE_RESULT} RC_ADVENTURE_RESULT
         */
        RC_ADVENTURE_RESULT.fromObject = function fromObject(object) {
            if (object instanceof $root.Hit.RC_ADVENTURE_RESULT)
                return object;
            var message = new $root.Hit.RC_ADVENTURE_RESULT();
            switch (object.evt) {
            case "EAE_ADV":
            case 0:
                message.evt = 0;
                break;
            case "EAE_BATTLE":
            case 1:
                message.evt = 1;
                break;
            }
            if (object.rwd != null) {
                if (typeof object.rwd !== "object")
                    throw TypeError(".Hit.RC_ADVENTURE_RESULT.rwd: object expected");
                message.rwd = $root.Hit.STC_REWARD.fromObject(object.rwd);
            }
            if (object.battleResult != null) {
                if (typeof object.battleResult !== "object")
                    throw TypeError(".Hit.RC_ADVENTURE_RESULT.battleResult: object expected");
                message.battleResult = $root.Hit.STC_BATTLE_RESULT.fromObject(object.battleResult);
            }
            if (object.adv != null) {
                if (typeof object.adv !== "object")
                    throw TypeError(".Hit.RC_ADVENTURE_RESULT.adv: object expected");
                message.adv = $root.Hit.STC_ADVENTURE.fromObject(object.adv);
            }
            if (object.errCode != null)
                message.errCode = object.errCode | 0;
            return message;
        };

        /**
         * Creates a plain object from a RC_ADVENTURE_RESULT message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Hit.RC_ADVENTURE_RESULT
         * @static
         * @param {Hit.RC_ADVENTURE_RESULT} message RC_ADVENTURE_RESULT
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RC_ADVENTURE_RESULT.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.evt = options.enums === String ? "EAE_ADV" : 0;
                object.rwd = null;
                object.battleResult = null;
                object.adv = null;
                object.errCode = 0;
            }
            if (message.evt != null && message.hasOwnProperty("evt"))
                object.evt = options.enums === String ? $root.Hit.E_ADVENTURE_EVENT[message.evt] : message.evt;
            if (message.rwd != null && message.hasOwnProperty("rwd"))
                object.rwd = $root.Hit.STC_REWARD.toObject(message.rwd, options);
            if (message.battleResult != null && message.hasOwnProperty("battleResult"))
                object.battleResult = $root.Hit.STC_BATTLE_RESULT.toObject(message.battleResult, options);
            if (message.adv != null && message.hasOwnProperty("adv"))
                object.adv = $root.Hit.STC_ADVENTURE.toObject(message.adv, options);
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                object.errCode = message.errCode;
            return object;
        };

        /**
         * Converts this RC_ADVENTURE_RESULT to JSON.
         * @function toJSON
         * @memberof Hit.RC_ADVENTURE_RESULT
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RC_ADVENTURE_RESULT.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RC_ADVENTURE_RESULT;
    })();

    /**
     * EBATTLE_WEATHER enum.
     * @name Hit.EBATTLE_WEATHER
     * @enum {string}
     * @property {number} EBW_CLEAR_SKIES=0 EBW_CLEAR_SKIES value
     * @property {number} EBW_HARSH_SUNLIGHT=1 EBW_HARSH_SUNLIGHT value
     * @property {number} EBW_RAIN=2 EBW_RAIN value
     * @property {number} EBW_SANDSTORM=3 EBW_SANDSTORM value
     * @property {number} EBW_HAIL=4 EBW_HAIL value
     * @property {number} EBW_FOG=5 EBW_FOG value
     * @property {number} EBW_MYSTERIOUS_AIR_CURRENT=6 EBW_MYSTERIOUS_AIR_CURRENT value
     */
    Hit.EBATTLE_WEATHER = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "EBW_CLEAR_SKIES"] = 0;
        values[valuesById[1] = "EBW_HARSH_SUNLIGHT"] = 1;
        values[valuesById[2] = "EBW_RAIN"] = 2;
        values[valuesById[3] = "EBW_SANDSTORM"] = 3;
        values[valuesById[4] = "EBW_HAIL"] = 4;
        values[valuesById[5] = "EBW_FOG"] = 5;
        values[valuesById[6] = "EBW_MYSTERIOUS_AIR_CURRENT"] = 6;
        return values;
    })();

    Hit.STC_BATTLE_INPUT = (function() {

        /**
         * Properties of a STC_BATTLE_INPUT.
         * @memberof Hit
         * @interface ISTC_BATTLE_INPUT
         * @property {Array.<Hit.ISTC_BATTLE_INPUT_TEAM>|null} [teams] STC_BATTLE_INPUT teams
         * @property {number|null} [fieldCnt] STC_BATTLE_INPUT fieldCnt
         * @property {Hit.EBATTLE_WEATHER|null} [weather] STC_BATTLE_INPUT weather
         */

        /**
         * Constructs a new STC_BATTLE_INPUT.
         * @memberof Hit
         * @classdesc Represents a STC_BATTLE_INPUT.
         * @implements ISTC_BATTLE_INPUT
         * @constructor
         * @param {Hit.ISTC_BATTLE_INPUT=} [properties] Properties to set
         */
        function STC_BATTLE_INPUT(properties) {
            this.teams = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * STC_BATTLE_INPUT teams.
         * @member {Array.<Hit.ISTC_BATTLE_INPUT_TEAM>} teams
         * @memberof Hit.STC_BATTLE_INPUT
         * @instance
         */
        STC_BATTLE_INPUT.prototype.teams = $util.emptyArray;

        /**
         * STC_BATTLE_INPUT fieldCnt.
         * @member {number} fieldCnt
         * @memberof Hit.STC_BATTLE_INPUT
         * @instance
         */
        STC_BATTLE_INPUT.prototype.fieldCnt = 0;

        /**
         * STC_BATTLE_INPUT weather.
         * @member {Hit.EBATTLE_WEATHER} weather
         * @memberof Hit.STC_BATTLE_INPUT
         * @instance
         */
        STC_BATTLE_INPUT.prototype.weather = 0;

        /**
         * Creates a new STC_BATTLE_INPUT instance using the specified properties.
         * @function create
         * @memberof Hit.STC_BATTLE_INPUT
         * @static
         * @param {Hit.ISTC_BATTLE_INPUT=} [properties] Properties to set
         * @returns {Hit.STC_BATTLE_INPUT} STC_BATTLE_INPUT instance
         */
        STC_BATTLE_INPUT.create = function create(properties) {
            return new STC_BATTLE_INPUT(properties);
        };

        /**
         * Encodes the specified STC_BATTLE_INPUT message. Does not implicitly {@link Hit.STC_BATTLE_INPUT.verify|verify} messages.
         * @function encode
         * @memberof Hit.STC_BATTLE_INPUT
         * @static
         * @param {Hit.ISTC_BATTLE_INPUT} message STC_BATTLE_INPUT message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        STC_BATTLE_INPUT.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.teams != null && message.teams.length)
                for (var i = 0; i < message.teams.length; ++i)
                    $root.Hit.STC_BATTLE_INPUT_TEAM.encode(message.teams[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.fieldCnt != null && message.hasOwnProperty("fieldCnt"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.fieldCnt);
            if (message.weather != null && message.hasOwnProperty("weather"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.weather);
            return writer;
        };

        /**
         * Encodes the specified STC_BATTLE_INPUT message, length delimited. Does not implicitly {@link Hit.STC_BATTLE_INPUT.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Hit.STC_BATTLE_INPUT
         * @static
         * @param {Hit.ISTC_BATTLE_INPUT} message STC_BATTLE_INPUT message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        STC_BATTLE_INPUT.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a STC_BATTLE_INPUT message from the specified reader or buffer.
         * @function decode
         * @memberof Hit.STC_BATTLE_INPUT
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Hit.STC_BATTLE_INPUT} STC_BATTLE_INPUT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        STC_BATTLE_INPUT.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Hit.STC_BATTLE_INPUT();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.teams && message.teams.length))
                        message.teams = [];
                    message.teams.push($root.Hit.STC_BATTLE_INPUT_TEAM.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.fieldCnt = reader.uint32();
                    break;
                case 3:
                    message.weather = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a STC_BATTLE_INPUT message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Hit.STC_BATTLE_INPUT
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Hit.STC_BATTLE_INPUT} STC_BATTLE_INPUT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        STC_BATTLE_INPUT.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a STC_BATTLE_INPUT message.
         * @function verify
         * @memberof Hit.STC_BATTLE_INPUT
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        STC_BATTLE_INPUT.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.teams != null && message.hasOwnProperty("teams")) {
                if (!Array.isArray(message.teams))
                    return "teams: array expected";
                for (var i = 0; i < message.teams.length; ++i) {
                    var error = $root.Hit.STC_BATTLE_INPUT_TEAM.verify(message.teams[i]);
                    if (error)
                        return "teams." + error;
                }
            }
            if (message.fieldCnt != null && message.hasOwnProperty("fieldCnt"))
                if (!$util.isInteger(message.fieldCnt))
                    return "fieldCnt: integer expected";
            if (message.weather != null && message.hasOwnProperty("weather"))
                switch (message.weather) {
                default:
                    return "weather: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                    break;
                }
            return null;
        };

        /**
         * Creates a STC_BATTLE_INPUT message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Hit.STC_BATTLE_INPUT
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Hit.STC_BATTLE_INPUT} STC_BATTLE_INPUT
         */
        STC_BATTLE_INPUT.fromObject = function fromObject(object) {
            if (object instanceof $root.Hit.STC_BATTLE_INPUT)
                return object;
            var message = new $root.Hit.STC_BATTLE_INPUT();
            if (object.teams) {
                if (!Array.isArray(object.teams))
                    throw TypeError(".Hit.STC_BATTLE_INPUT.teams: array expected");
                message.teams = [];
                for (var i = 0; i < object.teams.length; ++i) {
                    if (typeof object.teams[i] !== "object")
                        throw TypeError(".Hit.STC_BATTLE_INPUT.teams: object expected");
                    message.teams[i] = $root.Hit.STC_BATTLE_INPUT_TEAM.fromObject(object.teams[i]);
                }
            }
            if (object.fieldCnt != null)
                message.fieldCnt = object.fieldCnt >>> 0;
            switch (object.weather) {
            case "EBW_CLEAR_SKIES":
            case 0:
                message.weather = 0;
                break;
            case "EBW_HARSH_SUNLIGHT":
            case 1:
                message.weather = 1;
                break;
            case "EBW_RAIN":
            case 2:
                message.weather = 2;
                break;
            case "EBW_SANDSTORM":
            case 3:
                message.weather = 3;
                break;
            case "EBW_HAIL":
            case 4:
                message.weather = 4;
                break;
            case "EBW_FOG":
            case 5:
                message.weather = 5;
                break;
            case "EBW_MYSTERIOUS_AIR_CURRENT":
            case 6:
                message.weather = 6;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a STC_BATTLE_INPUT message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Hit.STC_BATTLE_INPUT
         * @static
         * @param {Hit.STC_BATTLE_INPUT} message STC_BATTLE_INPUT
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        STC_BATTLE_INPUT.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.teams = [];
            if (options.defaults) {
                object.fieldCnt = 0;
                object.weather = options.enums === String ? "EBW_CLEAR_SKIES" : 0;
            }
            if (message.teams && message.teams.length) {
                object.teams = [];
                for (var j = 0; j < message.teams.length; ++j)
                    object.teams[j] = $root.Hit.STC_BATTLE_INPUT_TEAM.toObject(message.teams[j], options);
            }
            if (message.fieldCnt != null && message.hasOwnProperty("fieldCnt"))
                object.fieldCnt = message.fieldCnt;
            if (message.weather != null && message.hasOwnProperty("weather"))
                object.weather = options.enums === String ? $root.Hit.EBATTLE_WEATHER[message.weather] : message.weather;
            return object;
        };

        /**
         * Converts this STC_BATTLE_INPUT to JSON.
         * @function toJSON
         * @memberof Hit.STC_BATTLE_INPUT
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        STC_BATTLE_INPUT.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return STC_BATTLE_INPUT;
    })();

    Hit.STC_BATTLE_INPUT_TEAM = (function() {

        /**
         * Properties of a STC_BATTLE_INPUT_TEAM.
         * @memberof Hit
         * @interface ISTC_BATTLE_INPUT_TEAM
         * @property {number|null} [ver] STC_BATTLE_INPUT_TEAM ver
         * @property {string|null} [name] STC_BATTLE_INPUT_TEAM name
         * @property {Array.<Hit.ISTC_BATTLE_INPUT_POKE>|null} [pokes] STC_BATTLE_INPUT_TEAM pokes
         */

        /**
         * Constructs a new STC_BATTLE_INPUT_TEAM.
         * @memberof Hit
         * @classdesc Represents a STC_BATTLE_INPUT_TEAM.
         * @implements ISTC_BATTLE_INPUT_TEAM
         * @constructor
         * @param {Hit.ISTC_BATTLE_INPUT_TEAM=} [properties] Properties to set
         */
        function STC_BATTLE_INPUT_TEAM(properties) {
            this.pokes = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * STC_BATTLE_INPUT_TEAM ver.
         * @member {number} ver
         * @memberof Hit.STC_BATTLE_INPUT_TEAM
         * @instance
         */
        STC_BATTLE_INPUT_TEAM.prototype.ver = 0;

        /**
         * STC_BATTLE_INPUT_TEAM name.
         * @member {string} name
         * @memberof Hit.STC_BATTLE_INPUT_TEAM
         * @instance
         */
        STC_BATTLE_INPUT_TEAM.prototype.name = "";

        /**
         * STC_BATTLE_INPUT_TEAM pokes.
         * @member {Array.<Hit.ISTC_BATTLE_INPUT_POKE>} pokes
         * @memberof Hit.STC_BATTLE_INPUT_TEAM
         * @instance
         */
        STC_BATTLE_INPUT_TEAM.prototype.pokes = $util.emptyArray;

        /**
         * Creates a new STC_BATTLE_INPUT_TEAM instance using the specified properties.
         * @function create
         * @memberof Hit.STC_BATTLE_INPUT_TEAM
         * @static
         * @param {Hit.ISTC_BATTLE_INPUT_TEAM=} [properties] Properties to set
         * @returns {Hit.STC_BATTLE_INPUT_TEAM} STC_BATTLE_INPUT_TEAM instance
         */
        STC_BATTLE_INPUT_TEAM.create = function create(properties) {
            return new STC_BATTLE_INPUT_TEAM(properties);
        };

        /**
         * Encodes the specified STC_BATTLE_INPUT_TEAM message. Does not implicitly {@link Hit.STC_BATTLE_INPUT_TEAM.verify|verify} messages.
         * @function encode
         * @memberof Hit.STC_BATTLE_INPUT_TEAM
         * @static
         * @param {Hit.ISTC_BATTLE_INPUT_TEAM} message STC_BATTLE_INPUT_TEAM message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        STC_BATTLE_INPUT_TEAM.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ver != null && message.hasOwnProperty("ver"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.ver);
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.pokes != null && message.pokes.length)
                for (var i = 0; i < message.pokes.length; ++i)
                    $root.Hit.STC_BATTLE_INPUT_POKE.encode(message.pokes[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified STC_BATTLE_INPUT_TEAM message, length delimited. Does not implicitly {@link Hit.STC_BATTLE_INPUT_TEAM.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Hit.STC_BATTLE_INPUT_TEAM
         * @static
         * @param {Hit.ISTC_BATTLE_INPUT_TEAM} message STC_BATTLE_INPUT_TEAM message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        STC_BATTLE_INPUT_TEAM.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a STC_BATTLE_INPUT_TEAM message from the specified reader or buffer.
         * @function decode
         * @memberof Hit.STC_BATTLE_INPUT_TEAM
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Hit.STC_BATTLE_INPUT_TEAM} STC_BATTLE_INPUT_TEAM
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        STC_BATTLE_INPUT_TEAM.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Hit.STC_BATTLE_INPUT_TEAM();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ver = reader.uint32();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    if (!(message.pokes && message.pokes.length))
                        message.pokes = [];
                    message.pokes.push($root.Hit.STC_BATTLE_INPUT_POKE.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a STC_BATTLE_INPUT_TEAM message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Hit.STC_BATTLE_INPUT_TEAM
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Hit.STC_BATTLE_INPUT_TEAM} STC_BATTLE_INPUT_TEAM
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        STC_BATTLE_INPUT_TEAM.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a STC_BATTLE_INPUT_TEAM message.
         * @function verify
         * @memberof Hit.STC_BATTLE_INPUT_TEAM
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        STC_BATTLE_INPUT_TEAM.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ver != null && message.hasOwnProperty("ver"))
                if (!$util.isInteger(message.ver))
                    return "ver: integer expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.pokes != null && message.hasOwnProperty("pokes")) {
                if (!Array.isArray(message.pokes))
                    return "pokes: array expected";
                for (var i = 0; i < message.pokes.length; ++i) {
                    var error = $root.Hit.STC_BATTLE_INPUT_POKE.verify(message.pokes[i]);
                    if (error)
                        return "pokes." + error;
                }
            }
            return null;
        };

        /**
         * Creates a STC_BATTLE_INPUT_TEAM message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Hit.STC_BATTLE_INPUT_TEAM
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Hit.STC_BATTLE_INPUT_TEAM} STC_BATTLE_INPUT_TEAM
         */
        STC_BATTLE_INPUT_TEAM.fromObject = function fromObject(object) {
            if (object instanceof $root.Hit.STC_BATTLE_INPUT_TEAM)
                return object;
            var message = new $root.Hit.STC_BATTLE_INPUT_TEAM();
            if (object.ver != null)
                message.ver = object.ver >>> 0;
            if (object.name != null)
                message.name = String(object.name);
            if (object.pokes) {
                if (!Array.isArray(object.pokes))
                    throw TypeError(".Hit.STC_BATTLE_INPUT_TEAM.pokes: array expected");
                message.pokes = [];
                for (var i = 0; i < object.pokes.length; ++i) {
                    if (typeof object.pokes[i] !== "object")
                        throw TypeError(".Hit.STC_BATTLE_INPUT_TEAM.pokes: object expected");
                    message.pokes[i] = $root.Hit.STC_BATTLE_INPUT_POKE.fromObject(object.pokes[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a STC_BATTLE_INPUT_TEAM message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Hit.STC_BATTLE_INPUT_TEAM
         * @static
         * @param {Hit.STC_BATTLE_INPUT_TEAM} message STC_BATTLE_INPUT_TEAM
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        STC_BATTLE_INPUT_TEAM.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.pokes = [];
            if (options.defaults) {
                object.ver = 0;
                object.name = "";
            }
            if (message.ver != null && message.hasOwnProperty("ver"))
                object.ver = message.ver;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.pokes && message.pokes.length) {
                object.pokes = [];
                for (var j = 0; j < message.pokes.length; ++j)
                    object.pokes[j] = $root.Hit.STC_BATTLE_INPUT_POKE.toObject(message.pokes[j], options);
            }
            return object;
        };

        /**
         * Converts this STC_BATTLE_INPUT_TEAM to JSON.
         * @function toJSON
         * @memberof Hit.STC_BATTLE_INPUT_TEAM
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        STC_BATTLE_INPUT_TEAM.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return STC_BATTLE_INPUT_TEAM;
    })();

    Hit.STC_BATTLE_INPUT_POKE = (function() {

        /**
         * Properties of a STC_BATTLE_INPUT_POKE.
         * @memberof Hit
         * @interface ISTC_BATTLE_INPUT_POKE
         * @property {number|null} [ver] STC_BATTLE_INPUT_POKE ver
         * @property {number|null} [pokeId] STC_BATTLE_INPUT_POKE pokeId
         * @property {number|null} [lv] STC_BATTLE_INPUT_POKE lv
         * @property {Array.<number>|null} [ivs] STC_BATTLE_INPUT_POKE ivs
         * @property {number|null} [nature] STC_BATTLE_INPUT_POKE nature
         * @property {number|null} [alv] STC_BATTLE_INPUT_POKE alv
         * @property {number|null} [nonVolatileStatus] STC_BATTLE_INPUT_POKE nonVolatileStatus
         * @property {number|null} [nvsLastingRounds] STC_BATTLE_INPUT_POKE nvsLastingRounds
         * @property {Array.<Hit.ISTC_BATTLE_INPUT_MOVE>|null} [moves] STC_BATTLE_INPUT_POKE moves
         * @property {Array.<Hit.ISTC_BATTLE_INPUT_ABILITY>|null} [abilities] STC_BATTLE_INPUT_POKE abilities
         * @property {number|null} [userData] STC_BATTLE_INPUT_POKE userData
         */

        /**
         * Constructs a new STC_BATTLE_INPUT_POKE.
         * @memberof Hit
         * @classdesc Represents a STC_BATTLE_INPUT_POKE.
         * @implements ISTC_BATTLE_INPUT_POKE
         * @constructor
         * @param {Hit.ISTC_BATTLE_INPUT_POKE=} [properties] Properties to set
         */
        function STC_BATTLE_INPUT_POKE(properties) {
            this.ivs = [];
            this.moves = [];
            this.abilities = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * STC_BATTLE_INPUT_POKE ver.
         * @member {number} ver
         * @memberof Hit.STC_BATTLE_INPUT_POKE
         * @instance
         */
        STC_BATTLE_INPUT_POKE.prototype.ver = 0;

        /**
         * STC_BATTLE_INPUT_POKE pokeId.
         * @member {number} pokeId
         * @memberof Hit.STC_BATTLE_INPUT_POKE
         * @instance
         */
        STC_BATTLE_INPUT_POKE.prototype.pokeId = 0;

        /**
         * STC_BATTLE_INPUT_POKE lv.
         * @member {number} lv
         * @memberof Hit.STC_BATTLE_INPUT_POKE
         * @instance
         */
        STC_BATTLE_INPUT_POKE.prototype.lv = 0;

        /**
         * STC_BATTLE_INPUT_POKE ivs.
         * @member {Array.<number>} ivs
         * @memberof Hit.STC_BATTLE_INPUT_POKE
         * @instance
         */
        STC_BATTLE_INPUT_POKE.prototype.ivs = $util.emptyArray;

        /**
         * STC_BATTLE_INPUT_POKE nature.
         * @member {number} nature
         * @memberof Hit.STC_BATTLE_INPUT_POKE
         * @instance
         */
        STC_BATTLE_INPUT_POKE.prototype.nature = 0;

        /**
         * STC_BATTLE_INPUT_POKE alv.
         * @member {number} alv
         * @memberof Hit.STC_BATTLE_INPUT_POKE
         * @instance
         */
        STC_BATTLE_INPUT_POKE.prototype.alv = 0;

        /**
         * STC_BATTLE_INPUT_POKE nonVolatileStatus.
         * @member {number} nonVolatileStatus
         * @memberof Hit.STC_BATTLE_INPUT_POKE
         * @instance
         */
        STC_BATTLE_INPUT_POKE.prototype.nonVolatileStatus = 0;

        /**
         * STC_BATTLE_INPUT_POKE nvsLastingRounds.
         * @member {number} nvsLastingRounds
         * @memberof Hit.STC_BATTLE_INPUT_POKE
         * @instance
         */
        STC_BATTLE_INPUT_POKE.prototype.nvsLastingRounds = 0;

        /**
         * STC_BATTLE_INPUT_POKE moves.
         * @member {Array.<Hit.ISTC_BATTLE_INPUT_MOVE>} moves
         * @memberof Hit.STC_BATTLE_INPUT_POKE
         * @instance
         */
        STC_BATTLE_INPUT_POKE.prototype.moves = $util.emptyArray;

        /**
         * STC_BATTLE_INPUT_POKE abilities.
         * @member {Array.<Hit.ISTC_BATTLE_INPUT_ABILITY>} abilities
         * @memberof Hit.STC_BATTLE_INPUT_POKE
         * @instance
         */
        STC_BATTLE_INPUT_POKE.prototype.abilities = $util.emptyArray;

        /**
         * STC_BATTLE_INPUT_POKE userData.
         * @member {number} userData
         * @memberof Hit.STC_BATTLE_INPUT_POKE
         * @instance
         */
        STC_BATTLE_INPUT_POKE.prototype.userData = 0;

        /**
         * Creates a new STC_BATTLE_INPUT_POKE instance using the specified properties.
         * @function create
         * @memberof Hit.STC_BATTLE_INPUT_POKE
         * @static
         * @param {Hit.ISTC_BATTLE_INPUT_POKE=} [properties] Properties to set
         * @returns {Hit.STC_BATTLE_INPUT_POKE} STC_BATTLE_INPUT_POKE instance
         */
        STC_BATTLE_INPUT_POKE.create = function create(properties) {
            return new STC_BATTLE_INPUT_POKE(properties);
        };

        /**
         * Encodes the specified STC_BATTLE_INPUT_POKE message. Does not implicitly {@link Hit.STC_BATTLE_INPUT_POKE.verify|verify} messages.
         * @function encode
         * @memberof Hit.STC_BATTLE_INPUT_POKE
         * @static
         * @param {Hit.ISTC_BATTLE_INPUT_POKE} message STC_BATTLE_INPUT_POKE message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        STC_BATTLE_INPUT_POKE.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ver != null && message.hasOwnProperty("ver"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.ver);
            if (message.pokeId != null && message.hasOwnProperty("pokeId"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.pokeId);
            if (message.lv != null && message.hasOwnProperty("lv"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.lv);
            if (message.ivs != null && message.ivs.length) {
                writer.uint32(/* id 4, wireType 2 =*/34).fork();
                for (var i = 0; i < message.ivs.length; ++i)
                    writer.int32(message.ivs[i]);
                writer.ldelim();
            }
            if (message.nature != null && message.hasOwnProperty("nature"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.nature);
            if (message.alv != null && message.hasOwnProperty("alv"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.alv);
            if (message.nonVolatileStatus != null && message.hasOwnProperty("nonVolatileStatus"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.nonVolatileStatus);
            if (message.nvsLastingRounds != null && message.hasOwnProperty("nvsLastingRounds"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.nvsLastingRounds);
            if (message.moves != null && message.moves.length)
                for (var i = 0; i < message.moves.length; ++i)
                    $root.Hit.STC_BATTLE_INPUT_MOVE.encode(message.moves[i], writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            if (message.abilities != null && message.abilities.length)
                for (var i = 0; i < message.abilities.length; ++i)
                    $root.Hit.STC_BATTLE_INPUT_ABILITY.encode(message.abilities[i], writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.userData != null && message.hasOwnProperty("userData"))
                writer.uint32(/* id 11, wireType 0 =*/88).uint32(message.userData);
            return writer;
        };

        /**
         * Encodes the specified STC_BATTLE_INPUT_POKE message, length delimited. Does not implicitly {@link Hit.STC_BATTLE_INPUT_POKE.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Hit.STC_BATTLE_INPUT_POKE
         * @static
         * @param {Hit.ISTC_BATTLE_INPUT_POKE} message STC_BATTLE_INPUT_POKE message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        STC_BATTLE_INPUT_POKE.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a STC_BATTLE_INPUT_POKE message from the specified reader or buffer.
         * @function decode
         * @memberof Hit.STC_BATTLE_INPUT_POKE
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Hit.STC_BATTLE_INPUT_POKE} STC_BATTLE_INPUT_POKE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        STC_BATTLE_INPUT_POKE.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Hit.STC_BATTLE_INPUT_POKE();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ver = reader.uint32();
                    break;
                case 2:
                    message.pokeId = reader.uint32();
                    break;
                case 3:
                    message.lv = reader.int32();
                    break;
                case 4:
                    if (!(message.ivs && message.ivs.length))
                        message.ivs = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.ivs.push(reader.int32());
                    } else
                        message.ivs.push(reader.int32());
                    break;
                case 5:
                    message.nature = reader.int32();
                    break;
                case 6:
                    message.alv = reader.int32();
                    break;
                case 7:
                    message.nonVolatileStatus = reader.uint32();
                    break;
                case 8:
                    message.nvsLastingRounds = reader.uint32();
                    break;
                case 9:
                    if (!(message.moves && message.moves.length))
                        message.moves = [];
                    message.moves.push($root.Hit.STC_BATTLE_INPUT_MOVE.decode(reader, reader.uint32()));
                    break;
                case 10:
                    if (!(message.abilities && message.abilities.length))
                        message.abilities = [];
                    message.abilities.push($root.Hit.STC_BATTLE_INPUT_ABILITY.decode(reader, reader.uint32()));
                    break;
                case 11:
                    message.userData = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a STC_BATTLE_INPUT_POKE message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Hit.STC_BATTLE_INPUT_POKE
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Hit.STC_BATTLE_INPUT_POKE} STC_BATTLE_INPUT_POKE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        STC_BATTLE_INPUT_POKE.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a STC_BATTLE_INPUT_POKE message.
         * @function verify
         * @memberof Hit.STC_BATTLE_INPUT_POKE
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        STC_BATTLE_INPUT_POKE.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ver != null && message.hasOwnProperty("ver"))
                if (!$util.isInteger(message.ver))
                    return "ver: integer expected";
            if (message.pokeId != null && message.hasOwnProperty("pokeId"))
                if (!$util.isInteger(message.pokeId))
                    return "pokeId: integer expected";
            if (message.lv != null && message.hasOwnProperty("lv"))
                if (!$util.isInteger(message.lv))
                    return "lv: integer expected";
            if (message.ivs != null && message.hasOwnProperty("ivs")) {
                if (!Array.isArray(message.ivs))
                    return "ivs: array expected";
                for (var i = 0; i < message.ivs.length; ++i)
                    if (!$util.isInteger(message.ivs[i]))
                        return "ivs: integer[] expected";
            }
            if (message.nature != null && message.hasOwnProperty("nature"))
                if (!$util.isInteger(message.nature))
                    return "nature: integer expected";
            if (message.alv != null && message.hasOwnProperty("alv"))
                if (!$util.isInteger(message.alv))
                    return "alv: integer expected";
            if (message.nonVolatileStatus != null && message.hasOwnProperty("nonVolatileStatus"))
                if (!$util.isInteger(message.nonVolatileStatus))
                    return "nonVolatileStatus: integer expected";
            if (message.nvsLastingRounds != null && message.hasOwnProperty("nvsLastingRounds"))
                if (!$util.isInteger(message.nvsLastingRounds))
                    return "nvsLastingRounds: integer expected";
            if (message.moves != null && message.hasOwnProperty("moves")) {
                if (!Array.isArray(message.moves))
                    return "moves: array expected";
                for (var i = 0; i < message.moves.length; ++i) {
                    var error = $root.Hit.STC_BATTLE_INPUT_MOVE.verify(message.moves[i]);
                    if (error)
                        return "moves." + error;
                }
            }
            if (message.abilities != null && message.hasOwnProperty("abilities")) {
                if (!Array.isArray(message.abilities))
                    return "abilities: array expected";
                for (var i = 0; i < message.abilities.length; ++i) {
                    var error = $root.Hit.STC_BATTLE_INPUT_ABILITY.verify(message.abilities[i]);
                    if (error)
                        return "abilities." + error;
                }
            }
            if (message.userData != null && message.hasOwnProperty("userData"))
                if (!$util.isInteger(message.userData))
                    return "userData: integer expected";
            return null;
        };

        /**
         * Creates a STC_BATTLE_INPUT_POKE message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Hit.STC_BATTLE_INPUT_POKE
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Hit.STC_BATTLE_INPUT_POKE} STC_BATTLE_INPUT_POKE
         */
        STC_BATTLE_INPUT_POKE.fromObject = function fromObject(object) {
            if (object instanceof $root.Hit.STC_BATTLE_INPUT_POKE)
                return object;
            var message = new $root.Hit.STC_BATTLE_INPUT_POKE();
            if (object.ver != null)
                message.ver = object.ver >>> 0;
            if (object.pokeId != null)
                message.pokeId = object.pokeId >>> 0;
            if (object.lv != null)
                message.lv = object.lv | 0;
            if (object.ivs) {
                if (!Array.isArray(object.ivs))
                    throw TypeError(".Hit.STC_BATTLE_INPUT_POKE.ivs: array expected");
                message.ivs = [];
                for (var i = 0; i < object.ivs.length; ++i)
                    message.ivs[i] = object.ivs[i] | 0;
            }
            if (object.nature != null)
                message.nature = object.nature | 0;
            if (object.alv != null)
                message.alv = object.alv | 0;
            if (object.nonVolatileStatus != null)
                message.nonVolatileStatus = object.nonVolatileStatus >>> 0;
            if (object.nvsLastingRounds != null)
                message.nvsLastingRounds = object.nvsLastingRounds >>> 0;
            if (object.moves) {
                if (!Array.isArray(object.moves))
                    throw TypeError(".Hit.STC_BATTLE_INPUT_POKE.moves: array expected");
                message.moves = [];
                for (var i = 0; i < object.moves.length; ++i) {
                    if (typeof object.moves[i] !== "object")
                        throw TypeError(".Hit.STC_BATTLE_INPUT_POKE.moves: object expected");
                    message.moves[i] = $root.Hit.STC_BATTLE_INPUT_MOVE.fromObject(object.moves[i]);
                }
            }
            if (object.abilities) {
                if (!Array.isArray(object.abilities))
                    throw TypeError(".Hit.STC_BATTLE_INPUT_POKE.abilities: array expected");
                message.abilities = [];
                for (var i = 0; i < object.abilities.length; ++i) {
                    if (typeof object.abilities[i] !== "object")
                        throw TypeError(".Hit.STC_BATTLE_INPUT_POKE.abilities: object expected");
                    message.abilities[i] = $root.Hit.STC_BATTLE_INPUT_ABILITY.fromObject(object.abilities[i]);
                }
            }
            if (object.userData != null)
                message.userData = object.userData >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a STC_BATTLE_INPUT_POKE message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Hit.STC_BATTLE_INPUT_POKE
         * @static
         * @param {Hit.STC_BATTLE_INPUT_POKE} message STC_BATTLE_INPUT_POKE
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        STC_BATTLE_INPUT_POKE.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.ivs = [];
                object.moves = [];
                object.abilities = [];
            }
            if (options.defaults) {
                object.ver = 0;
                object.pokeId = 0;
                object.lv = 0;
                object.nature = 0;
                object.alv = 0;
                object.nonVolatileStatus = 0;
                object.nvsLastingRounds = 0;
                object.userData = 0;
            }
            if (message.ver != null && message.hasOwnProperty("ver"))
                object.ver = message.ver;
            if (message.pokeId != null && message.hasOwnProperty("pokeId"))
                object.pokeId = message.pokeId;
            if (message.lv != null && message.hasOwnProperty("lv"))
                object.lv = message.lv;
            if (message.ivs && message.ivs.length) {
                object.ivs = [];
                for (var j = 0; j < message.ivs.length; ++j)
                    object.ivs[j] = message.ivs[j];
            }
            if (message.nature != null && message.hasOwnProperty("nature"))
                object.nature = message.nature;
            if (message.alv != null && message.hasOwnProperty("alv"))
                object.alv = message.alv;
            if (message.nonVolatileStatus != null && message.hasOwnProperty("nonVolatileStatus"))
                object.nonVolatileStatus = message.nonVolatileStatus;
            if (message.nvsLastingRounds != null && message.hasOwnProperty("nvsLastingRounds"))
                object.nvsLastingRounds = message.nvsLastingRounds;
            if (message.moves && message.moves.length) {
                object.moves = [];
                for (var j = 0; j < message.moves.length; ++j)
                    object.moves[j] = $root.Hit.STC_BATTLE_INPUT_MOVE.toObject(message.moves[j], options);
            }
            if (message.abilities && message.abilities.length) {
                object.abilities = [];
                for (var j = 0; j < message.abilities.length; ++j)
                    object.abilities[j] = $root.Hit.STC_BATTLE_INPUT_ABILITY.toObject(message.abilities[j], options);
            }
            if (message.userData != null && message.hasOwnProperty("userData"))
                object.userData = message.userData;
            return object;
        };

        /**
         * Converts this STC_BATTLE_INPUT_POKE to JSON.
         * @function toJSON
         * @memberof Hit.STC_BATTLE_INPUT_POKE
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        STC_BATTLE_INPUT_POKE.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return STC_BATTLE_INPUT_POKE;
    })();

    Hit.STC_BATTLE_INPUT_MOVE = (function() {

        /**
         * Properties of a STC_BATTLE_INPUT_MOVE.
         * @memberof Hit
         * @interface ISTC_BATTLE_INPUT_MOVE
         * @property {number|null} [id] STC_BATTLE_INPUT_MOVE id
         */

        /**
         * Constructs a new STC_BATTLE_INPUT_MOVE.
         * @memberof Hit
         * @classdesc Represents a STC_BATTLE_INPUT_MOVE.
         * @implements ISTC_BATTLE_INPUT_MOVE
         * @constructor
         * @param {Hit.ISTC_BATTLE_INPUT_MOVE=} [properties] Properties to set
         */
        function STC_BATTLE_INPUT_MOVE(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * STC_BATTLE_INPUT_MOVE id.
         * @member {number} id
         * @memberof Hit.STC_BATTLE_INPUT_MOVE
         * @instance
         */
        STC_BATTLE_INPUT_MOVE.prototype.id = 0;

        /**
         * Creates a new STC_BATTLE_INPUT_MOVE instance using the specified properties.
         * @function create
         * @memberof Hit.STC_BATTLE_INPUT_MOVE
         * @static
         * @param {Hit.ISTC_BATTLE_INPUT_MOVE=} [properties] Properties to set
         * @returns {Hit.STC_BATTLE_INPUT_MOVE} STC_BATTLE_INPUT_MOVE instance
         */
        STC_BATTLE_INPUT_MOVE.create = function create(properties) {
            return new STC_BATTLE_INPUT_MOVE(properties);
        };

        /**
         * Encodes the specified STC_BATTLE_INPUT_MOVE message. Does not implicitly {@link Hit.STC_BATTLE_INPUT_MOVE.verify|verify} messages.
         * @function encode
         * @memberof Hit.STC_BATTLE_INPUT_MOVE
         * @static
         * @param {Hit.ISTC_BATTLE_INPUT_MOVE} message STC_BATTLE_INPUT_MOVE message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        STC_BATTLE_INPUT_MOVE.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
            return writer;
        };

        /**
         * Encodes the specified STC_BATTLE_INPUT_MOVE message, length delimited. Does not implicitly {@link Hit.STC_BATTLE_INPUT_MOVE.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Hit.STC_BATTLE_INPUT_MOVE
         * @static
         * @param {Hit.ISTC_BATTLE_INPUT_MOVE} message STC_BATTLE_INPUT_MOVE message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        STC_BATTLE_INPUT_MOVE.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a STC_BATTLE_INPUT_MOVE message from the specified reader or buffer.
         * @function decode
         * @memberof Hit.STC_BATTLE_INPUT_MOVE
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Hit.STC_BATTLE_INPUT_MOVE} STC_BATTLE_INPUT_MOVE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        STC_BATTLE_INPUT_MOVE.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Hit.STC_BATTLE_INPUT_MOVE();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a STC_BATTLE_INPUT_MOVE message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Hit.STC_BATTLE_INPUT_MOVE
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Hit.STC_BATTLE_INPUT_MOVE} STC_BATTLE_INPUT_MOVE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        STC_BATTLE_INPUT_MOVE.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a STC_BATTLE_INPUT_MOVE message.
         * @function verify
         * @memberof Hit.STC_BATTLE_INPUT_MOVE
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        STC_BATTLE_INPUT_MOVE.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            return null;
        };

        /**
         * Creates a STC_BATTLE_INPUT_MOVE message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Hit.STC_BATTLE_INPUT_MOVE
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Hit.STC_BATTLE_INPUT_MOVE} STC_BATTLE_INPUT_MOVE
         */
        STC_BATTLE_INPUT_MOVE.fromObject = function fromObject(object) {
            if (object instanceof $root.Hit.STC_BATTLE_INPUT_MOVE)
                return object;
            var message = new $root.Hit.STC_BATTLE_INPUT_MOVE();
            if (object.id != null)
                message.id = object.id >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a STC_BATTLE_INPUT_MOVE message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Hit.STC_BATTLE_INPUT_MOVE
         * @static
         * @param {Hit.STC_BATTLE_INPUT_MOVE} message STC_BATTLE_INPUT_MOVE
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        STC_BATTLE_INPUT_MOVE.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.id = 0;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            return object;
        };

        /**
         * Converts this STC_BATTLE_INPUT_MOVE to JSON.
         * @function toJSON
         * @memberof Hit.STC_BATTLE_INPUT_MOVE
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        STC_BATTLE_INPUT_MOVE.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return STC_BATTLE_INPUT_MOVE;
    })();

    Hit.STC_BATTLE_INPUT_ABILITY = (function() {

        /**
         * Properties of a STC_BATTLE_INPUT_ABILITY.
         * @memberof Hit
         * @interface ISTC_BATTLE_INPUT_ABILITY
         * @property {number|null} [id] STC_BATTLE_INPUT_ABILITY id
         */

        /**
         * Constructs a new STC_BATTLE_INPUT_ABILITY.
         * @memberof Hit
         * @classdesc Represents a STC_BATTLE_INPUT_ABILITY.
         * @implements ISTC_BATTLE_INPUT_ABILITY
         * @constructor
         * @param {Hit.ISTC_BATTLE_INPUT_ABILITY=} [properties] Properties to set
         */
        function STC_BATTLE_INPUT_ABILITY(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * STC_BATTLE_INPUT_ABILITY id.
         * @member {number} id
         * @memberof Hit.STC_BATTLE_INPUT_ABILITY
         * @instance
         */
        STC_BATTLE_INPUT_ABILITY.prototype.id = 0;

        /**
         * Creates a new STC_BATTLE_INPUT_ABILITY instance using the specified properties.
         * @function create
         * @memberof Hit.STC_BATTLE_INPUT_ABILITY
         * @static
         * @param {Hit.ISTC_BATTLE_INPUT_ABILITY=} [properties] Properties to set
         * @returns {Hit.STC_BATTLE_INPUT_ABILITY} STC_BATTLE_INPUT_ABILITY instance
         */
        STC_BATTLE_INPUT_ABILITY.create = function create(properties) {
            return new STC_BATTLE_INPUT_ABILITY(properties);
        };

        /**
         * Encodes the specified STC_BATTLE_INPUT_ABILITY message. Does not implicitly {@link Hit.STC_BATTLE_INPUT_ABILITY.verify|verify} messages.
         * @function encode
         * @memberof Hit.STC_BATTLE_INPUT_ABILITY
         * @static
         * @param {Hit.ISTC_BATTLE_INPUT_ABILITY} message STC_BATTLE_INPUT_ABILITY message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        STC_BATTLE_INPUT_ABILITY.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
            return writer;
        };

        /**
         * Encodes the specified STC_BATTLE_INPUT_ABILITY message, length delimited. Does not implicitly {@link Hit.STC_BATTLE_INPUT_ABILITY.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Hit.STC_BATTLE_INPUT_ABILITY
         * @static
         * @param {Hit.ISTC_BATTLE_INPUT_ABILITY} message STC_BATTLE_INPUT_ABILITY message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        STC_BATTLE_INPUT_ABILITY.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a STC_BATTLE_INPUT_ABILITY message from the specified reader or buffer.
         * @function decode
         * @memberof Hit.STC_BATTLE_INPUT_ABILITY
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Hit.STC_BATTLE_INPUT_ABILITY} STC_BATTLE_INPUT_ABILITY
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        STC_BATTLE_INPUT_ABILITY.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Hit.STC_BATTLE_INPUT_ABILITY();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a STC_BATTLE_INPUT_ABILITY message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Hit.STC_BATTLE_INPUT_ABILITY
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Hit.STC_BATTLE_INPUT_ABILITY} STC_BATTLE_INPUT_ABILITY
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        STC_BATTLE_INPUT_ABILITY.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a STC_BATTLE_INPUT_ABILITY message.
         * @function verify
         * @memberof Hit.STC_BATTLE_INPUT_ABILITY
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        STC_BATTLE_INPUT_ABILITY.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            return null;
        };

        /**
         * Creates a STC_BATTLE_INPUT_ABILITY message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Hit.STC_BATTLE_INPUT_ABILITY
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Hit.STC_BATTLE_INPUT_ABILITY} STC_BATTLE_INPUT_ABILITY
         */
        STC_BATTLE_INPUT_ABILITY.fromObject = function fromObject(object) {
            if (object instanceof $root.Hit.STC_BATTLE_INPUT_ABILITY)
                return object;
            var message = new $root.Hit.STC_BATTLE_INPUT_ABILITY();
            if (object.id != null)
                message.id = object.id >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a STC_BATTLE_INPUT_ABILITY message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Hit.STC_BATTLE_INPUT_ABILITY
         * @static
         * @param {Hit.STC_BATTLE_INPUT_ABILITY} message STC_BATTLE_INPUT_ABILITY
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        STC_BATTLE_INPUT_ABILITY.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.id = 0;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            return object;
        };

        /**
         * Converts this STC_BATTLE_INPUT_ABILITY to JSON.
         * @function toJSON
         * @memberof Hit.STC_BATTLE_INPUT_ABILITY
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        STC_BATTLE_INPUT_ABILITY.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return STC_BATTLE_INPUT_ABILITY;
    })();

    Hit.STC_BATTLE_RESULT = (function() {

        /**
         * Properties of a STC_BATTLE_RESULT.
         * @memberof Hit
         * @interface ISTC_BATTLE_RESULT
         * @property {number|null} [ver] STC_BATTLE_RESULT ver
         * @property {number|null} [battleType] STC_BATTLE_RESULT battleType
         * @property {number|null} [mapId] STC_BATTLE_RESULT mapId
         * @property {number|null} [fieldCnt] STC_BATTLE_RESULT fieldCnt
         * @property {Hit.EBATTLE_WEATHER|null} [weather] STC_BATTLE_RESULT weather
         * @property {Array.<Hit.ISTC_BATTLE_TEAM>|null} [teams] STC_BATTLE_RESULT teams
         * @property {number|null} [result] STC_BATTLE_RESULT result
         * @property {number|null} [star] STC_BATTLE_RESULT star
         * @property {Hit.ISTC_BATTLE_REPORT|null} [report] STC_BATTLE_RESULT report
         * @property {string|null} [err] STC_BATTLE_RESULT err
         */

        /**
         * Constructs a new STC_BATTLE_RESULT.
         * @memberof Hit
         * @classdesc Represents a STC_BATTLE_RESULT.
         * @implements ISTC_BATTLE_RESULT
         * @constructor
         * @param {Hit.ISTC_BATTLE_RESULT=} [properties] Properties to set
         */
        function STC_BATTLE_RESULT(properties) {
            this.teams = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * STC_BATTLE_RESULT ver.
         * @member {number} ver
         * @memberof Hit.STC_BATTLE_RESULT
         * @instance
         */
        STC_BATTLE_RESULT.prototype.ver = 0;

        /**
         * STC_BATTLE_RESULT battleType.
         * @member {number} battleType
         * @memberof Hit.STC_BATTLE_RESULT
         * @instance
         */
        STC_BATTLE_RESULT.prototype.battleType = 0;

        /**
         * STC_BATTLE_RESULT mapId.
         * @member {number} mapId
         * @memberof Hit.STC_BATTLE_RESULT
         * @instance
         */
        STC_BATTLE_RESULT.prototype.mapId = 0;

        /**
         * STC_BATTLE_RESULT fieldCnt.
         * @member {number} fieldCnt
         * @memberof Hit.STC_BATTLE_RESULT
         * @instance
         */
        STC_BATTLE_RESULT.prototype.fieldCnt = 0;

        /**
         * STC_BATTLE_RESULT weather.
         * @member {Hit.EBATTLE_WEATHER} weather
         * @memberof Hit.STC_BATTLE_RESULT
         * @instance
         */
        STC_BATTLE_RESULT.prototype.weather = 0;

        /**
         * STC_BATTLE_RESULT teams.
         * @member {Array.<Hit.ISTC_BATTLE_TEAM>} teams
         * @memberof Hit.STC_BATTLE_RESULT
         * @instance
         */
        STC_BATTLE_RESULT.prototype.teams = $util.emptyArray;

        /**
         * STC_BATTLE_RESULT result.
         * @member {number} result
         * @memberof Hit.STC_BATTLE_RESULT
         * @instance
         */
        STC_BATTLE_RESULT.prototype.result = 0;

        /**
         * STC_BATTLE_RESULT star.
         * @member {number} star
         * @memberof Hit.STC_BATTLE_RESULT
         * @instance
         */
        STC_BATTLE_RESULT.prototype.star = 0;

        /**
         * STC_BATTLE_RESULT report.
         * @member {Hit.ISTC_BATTLE_REPORT|null|undefined} report
         * @memberof Hit.STC_BATTLE_RESULT
         * @instance
         */
        STC_BATTLE_RESULT.prototype.report = null;

        /**
         * STC_BATTLE_RESULT err.
         * @member {string} err
         * @memberof Hit.STC_BATTLE_RESULT
         * @instance
         */
        STC_BATTLE_RESULT.prototype.err = "";

        /**
         * Creates a new STC_BATTLE_RESULT instance using the specified properties.
         * @function create
         * @memberof Hit.STC_BATTLE_RESULT
         * @static
         * @param {Hit.ISTC_BATTLE_RESULT=} [properties] Properties to set
         * @returns {Hit.STC_BATTLE_RESULT} STC_BATTLE_RESULT instance
         */
        STC_BATTLE_RESULT.create = function create(properties) {
            return new STC_BATTLE_RESULT(properties);
        };

        /**
         * Encodes the specified STC_BATTLE_RESULT message. Does not implicitly {@link Hit.STC_BATTLE_RESULT.verify|verify} messages.
         * @function encode
         * @memberof Hit.STC_BATTLE_RESULT
         * @static
         * @param {Hit.ISTC_BATTLE_RESULT} message STC_BATTLE_RESULT message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        STC_BATTLE_RESULT.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ver != null && message.hasOwnProperty("ver"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.ver);
            if (message.battleType != null && message.hasOwnProperty("battleType"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.battleType);
            if (message.mapId != null && message.hasOwnProperty("mapId"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.mapId);
            if (message.fieldCnt != null && message.hasOwnProperty("fieldCnt"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.fieldCnt);
            if (message.weather != null && message.hasOwnProperty("weather"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.weather);
            if (message.teams != null && message.teams.length)
                for (var i = 0; i < message.teams.length; ++i)
                    $root.Hit.STC_BATTLE_TEAM.encode(message.teams[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.result != null && message.hasOwnProperty("result"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.result);
            if (message.star != null && message.hasOwnProperty("star"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.star);
            if (message.err != null && message.hasOwnProperty("err"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.err);
            if (message.report != null && message.hasOwnProperty("report"))
                $root.Hit.STC_BATTLE_REPORT.encode(message.report, writer.uint32(/* id 79, wireType 2 =*/634).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified STC_BATTLE_RESULT message, length delimited. Does not implicitly {@link Hit.STC_BATTLE_RESULT.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Hit.STC_BATTLE_RESULT
         * @static
         * @param {Hit.ISTC_BATTLE_RESULT} message STC_BATTLE_RESULT message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        STC_BATTLE_RESULT.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a STC_BATTLE_RESULT message from the specified reader or buffer.
         * @function decode
         * @memberof Hit.STC_BATTLE_RESULT
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Hit.STC_BATTLE_RESULT} STC_BATTLE_RESULT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        STC_BATTLE_RESULT.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Hit.STC_BATTLE_RESULT();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ver = reader.uint32();
                    break;
                case 2:
                    message.battleType = reader.uint32();
                    break;
                case 3:
                    message.mapId = reader.uint32();
                    break;
                case 4:
                    message.fieldCnt = reader.uint32();
                    break;
                case 5:
                    message.weather = reader.int32();
                    break;
                case 6:
                    if (!(message.teams && message.teams.length))
                        message.teams = [];
                    message.teams.push($root.Hit.STC_BATTLE_TEAM.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.result = reader.uint32();
                    break;
                case 8:
                    message.star = reader.uint32();
                    break;
                case 79:
                    message.report = $root.Hit.STC_BATTLE_REPORT.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.err = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a STC_BATTLE_RESULT message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Hit.STC_BATTLE_RESULT
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Hit.STC_BATTLE_RESULT} STC_BATTLE_RESULT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        STC_BATTLE_RESULT.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a STC_BATTLE_RESULT message.
         * @function verify
         * @memberof Hit.STC_BATTLE_RESULT
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        STC_BATTLE_RESULT.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ver != null && message.hasOwnProperty("ver"))
                if (!$util.isInteger(message.ver))
                    return "ver: integer expected";
            if (message.battleType != null && message.hasOwnProperty("battleType"))
                if (!$util.isInteger(message.battleType))
                    return "battleType: integer expected";
            if (message.mapId != null && message.hasOwnProperty("mapId"))
                if (!$util.isInteger(message.mapId))
                    return "mapId: integer expected";
            if (message.fieldCnt != null && message.hasOwnProperty("fieldCnt"))
                if (!$util.isInteger(message.fieldCnt))
                    return "fieldCnt: integer expected";
            if (message.weather != null && message.hasOwnProperty("weather"))
                switch (message.weather) {
                default:
                    return "weather: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                    break;
                }
            if (message.teams != null && message.hasOwnProperty("teams")) {
                if (!Array.isArray(message.teams))
                    return "teams: array expected";
                for (var i = 0; i < message.teams.length; ++i) {
                    var error = $root.Hit.STC_BATTLE_TEAM.verify(message.teams[i]);
                    if (error)
                        return "teams." + error;
                }
            }
            if (message.result != null && message.hasOwnProperty("result"))
                if (!$util.isInteger(message.result))
                    return "result: integer expected";
            if (message.star != null && message.hasOwnProperty("star"))
                if (!$util.isInteger(message.star))
                    return "star: integer expected";
            if (message.report != null && message.hasOwnProperty("report")) {
                var error = $root.Hit.STC_BATTLE_REPORT.verify(message.report);
                if (error)
                    return "report." + error;
            }
            if (message.err != null && message.hasOwnProperty("err"))
                if (!$util.isString(message.err))
                    return "err: string expected";
            return null;
        };

        /**
         * Creates a STC_BATTLE_RESULT message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Hit.STC_BATTLE_RESULT
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Hit.STC_BATTLE_RESULT} STC_BATTLE_RESULT
         */
        STC_BATTLE_RESULT.fromObject = function fromObject(object) {
            if (object instanceof $root.Hit.STC_BATTLE_RESULT)
                return object;
            var message = new $root.Hit.STC_BATTLE_RESULT();
            if (object.ver != null)
                message.ver = object.ver >>> 0;
            if (object.battleType != null)
                message.battleType = object.battleType >>> 0;
            if (object.mapId != null)
                message.mapId = object.mapId >>> 0;
            if (object.fieldCnt != null)
                message.fieldCnt = object.fieldCnt >>> 0;
            switch (object.weather) {
            case "EBW_CLEAR_SKIES":
            case 0:
                message.weather = 0;
                break;
            case "EBW_HARSH_SUNLIGHT":
            case 1:
                message.weather = 1;
                break;
            case "EBW_RAIN":
            case 2:
                message.weather = 2;
                break;
            case "EBW_SANDSTORM":
            case 3:
                message.weather = 3;
                break;
            case "EBW_HAIL":
            case 4:
                message.weather = 4;
                break;
            case "EBW_FOG":
            case 5:
                message.weather = 5;
                break;
            case "EBW_MYSTERIOUS_AIR_CURRENT":
            case 6:
                message.weather = 6;
                break;
            }
            if (object.teams) {
                if (!Array.isArray(object.teams))
                    throw TypeError(".Hit.STC_BATTLE_RESULT.teams: array expected");
                message.teams = [];
                for (var i = 0; i < object.teams.length; ++i) {
                    if (typeof object.teams[i] !== "object")
                        throw TypeError(".Hit.STC_BATTLE_RESULT.teams: object expected");
                    message.teams[i] = $root.Hit.STC_BATTLE_TEAM.fromObject(object.teams[i]);
                }
            }
            if (object.result != null)
                message.result = object.result >>> 0;
            if (object.star != null)
                message.star = object.star >>> 0;
            if (object.report != null) {
                if (typeof object.report !== "object")
                    throw TypeError(".Hit.STC_BATTLE_RESULT.report: object expected");
                message.report = $root.Hit.STC_BATTLE_REPORT.fromObject(object.report);
            }
            if (object.err != null)
                message.err = String(object.err);
            return message;
        };

        /**
         * Creates a plain object from a STC_BATTLE_RESULT message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Hit.STC_BATTLE_RESULT
         * @static
         * @param {Hit.STC_BATTLE_RESULT} message STC_BATTLE_RESULT
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        STC_BATTLE_RESULT.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.teams = [];
            if (options.defaults) {
                object.ver = 0;
                object.battleType = 0;
                object.mapId = 0;
                object.fieldCnt = 0;
                object.weather = options.enums === String ? "EBW_CLEAR_SKIES" : 0;
                object.result = 0;
                object.star = 0;
                object.err = "";
                object.report = null;
            }
            if (message.ver != null && message.hasOwnProperty("ver"))
                object.ver = message.ver;
            if (message.battleType != null && message.hasOwnProperty("battleType"))
                object.battleType = message.battleType;
            if (message.mapId != null && message.hasOwnProperty("mapId"))
                object.mapId = message.mapId;
            if (message.fieldCnt != null && message.hasOwnProperty("fieldCnt"))
                object.fieldCnt = message.fieldCnt;
            if (message.weather != null && message.hasOwnProperty("weather"))
                object.weather = options.enums === String ? $root.Hit.EBATTLE_WEATHER[message.weather] : message.weather;
            if (message.teams && message.teams.length) {
                object.teams = [];
                for (var j = 0; j < message.teams.length; ++j)
                    object.teams[j] = $root.Hit.STC_BATTLE_TEAM.toObject(message.teams[j], options);
            }
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = message.result;
            if (message.star != null && message.hasOwnProperty("star"))
                object.star = message.star;
            if (message.err != null && message.hasOwnProperty("err"))
                object.err = message.err;
            if (message.report != null && message.hasOwnProperty("report"))
                object.report = $root.Hit.STC_BATTLE_REPORT.toObject(message.report, options);
            return object;
        };

        /**
         * Converts this STC_BATTLE_RESULT to JSON.
         * @function toJSON
         * @memberof Hit.STC_BATTLE_RESULT
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        STC_BATTLE_RESULT.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return STC_BATTLE_RESULT;
    })();

    Hit.STC_BATTLE_TEAM = (function() {

        /**
         * Properties of a STC_BATTLE_TEAM.
         * @memberof Hit
         * @interface ISTC_BATTLE_TEAM
         * @property {string|null} [name] STC_BATTLE_TEAM name
         * @property {Array.<Hit.ISTC_BATTLE_POKE>|null} [pokes] STC_BATTLE_TEAM pokes
         */

        /**
         * Constructs a new STC_BATTLE_TEAM.
         * @memberof Hit
         * @classdesc Represents a STC_BATTLE_TEAM.
         * @implements ISTC_BATTLE_TEAM
         * @constructor
         * @param {Hit.ISTC_BATTLE_TEAM=} [properties] Properties to set
         */
        function STC_BATTLE_TEAM(properties) {
            this.pokes = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * STC_BATTLE_TEAM name.
         * @member {string} name
         * @memberof Hit.STC_BATTLE_TEAM
         * @instance
         */
        STC_BATTLE_TEAM.prototype.name = "";

        /**
         * STC_BATTLE_TEAM pokes.
         * @member {Array.<Hit.ISTC_BATTLE_POKE>} pokes
         * @memberof Hit.STC_BATTLE_TEAM
         * @instance
         */
        STC_BATTLE_TEAM.prototype.pokes = $util.emptyArray;

        /**
         * Creates a new STC_BATTLE_TEAM instance using the specified properties.
         * @function create
         * @memberof Hit.STC_BATTLE_TEAM
         * @static
         * @param {Hit.ISTC_BATTLE_TEAM=} [properties] Properties to set
         * @returns {Hit.STC_BATTLE_TEAM} STC_BATTLE_TEAM instance
         */
        STC_BATTLE_TEAM.create = function create(properties) {
            return new STC_BATTLE_TEAM(properties);
        };

        /**
         * Encodes the specified STC_BATTLE_TEAM message. Does not implicitly {@link Hit.STC_BATTLE_TEAM.verify|verify} messages.
         * @function encode
         * @memberof Hit.STC_BATTLE_TEAM
         * @static
         * @param {Hit.ISTC_BATTLE_TEAM} message STC_BATTLE_TEAM message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        STC_BATTLE_TEAM.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.pokes != null && message.pokes.length)
                for (var i = 0; i < message.pokes.length; ++i)
                    $root.Hit.STC_BATTLE_POKE.encode(message.pokes[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified STC_BATTLE_TEAM message, length delimited. Does not implicitly {@link Hit.STC_BATTLE_TEAM.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Hit.STC_BATTLE_TEAM
         * @static
         * @param {Hit.ISTC_BATTLE_TEAM} message STC_BATTLE_TEAM message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        STC_BATTLE_TEAM.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a STC_BATTLE_TEAM message from the specified reader or buffer.
         * @function decode
         * @memberof Hit.STC_BATTLE_TEAM
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Hit.STC_BATTLE_TEAM} STC_BATTLE_TEAM
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        STC_BATTLE_TEAM.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Hit.STC_BATTLE_TEAM();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    if (!(message.pokes && message.pokes.length))
                        message.pokes = [];
                    message.pokes.push($root.Hit.STC_BATTLE_POKE.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a STC_BATTLE_TEAM message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Hit.STC_BATTLE_TEAM
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Hit.STC_BATTLE_TEAM} STC_BATTLE_TEAM
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        STC_BATTLE_TEAM.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a STC_BATTLE_TEAM message.
         * @function verify
         * @memberof Hit.STC_BATTLE_TEAM
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        STC_BATTLE_TEAM.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.pokes != null && message.hasOwnProperty("pokes")) {
                if (!Array.isArray(message.pokes))
                    return "pokes: array expected";
                for (var i = 0; i < message.pokes.length; ++i) {
                    var error = $root.Hit.STC_BATTLE_POKE.verify(message.pokes[i]);
                    if (error)
                        return "pokes." + error;
                }
            }
            return null;
        };

        /**
         * Creates a STC_BATTLE_TEAM message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Hit.STC_BATTLE_TEAM
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Hit.STC_BATTLE_TEAM} STC_BATTLE_TEAM
         */
        STC_BATTLE_TEAM.fromObject = function fromObject(object) {
            if (object instanceof $root.Hit.STC_BATTLE_TEAM)
                return object;
            var message = new $root.Hit.STC_BATTLE_TEAM();
            if (object.name != null)
                message.name = String(object.name);
            if (object.pokes) {
                if (!Array.isArray(object.pokes))
                    throw TypeError(".Hit.STC_BATTLE_TEAM.pokes: array expected");
                message.pokes = [];
                for (var i = 0; i < object.pokes.length; ++i) {
                    if (typeof object.pokes[i] !== "object")
                        throw TypeError(".Hit.STC_BATTLE_TEAM.pokes: object expected");
                    message.pokes[i] = $root.Hit.STC_BATTLE_POKE.fromObject(object.pokes[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a STC_BATTLE_TEAM message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Hit.STC_BATTLE_TEAM
         * @static
         * @param {Hit.STC_BATTLE_TEAM} message STC_BATTLE_TEAM
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        STC_BATTLE_TEAM.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.pokes = [];
            if (options.defaults)
                object.name = "";
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.pokes && message.pokes.length) {
                object.pokes = [];
                for (var j = 0; j < message.pokes.length; ++j)
                    object.pokes[j] = $root.Hit.STC_BATTLE_POKE.toObject(message.pokes[j], options);
            }
            return object;
        };

        /**
         * Converts this STC_BATTLE_TEAM to JSON.
         * @function toJSON
         * @memberof Hit.STC_BATTLE_TEAM
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        STC_BATTLE_TEAM.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return STC_BATTLE_TEAM;
    })();

    Hit.STC_BATTLE_REPORT = (function() {

        /**
         * Properties of a STC_BATTLE_REPORT.
         * @memberof Hit
         * @interface ISTC_BATTLE_REPORT
         * @property {Array.<Hit.ISTC_BATTLE_ROUND>|null} [rounds] STC_BATTLE_REPORT rounds
         */

        /**
         * Constructs a new STC_BATTLE_REPORT.
         * @memberof Hit
         * @classdesc Represents a STC_BATTLE_REPORT.
         * @implements ISTC_BATTLE_REPORT
         * @constructor
         * @param {Hit.ISTC_BATTLE_REPORT=} [properties] Properties to set
         */
        function STC_BATTLE_REPORT(properties) {
            this.rounds = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * STC_BATTLE_REPORT rounds.
         * @member {Array.<Hit.ISTC_BATTLE_ROUND>} rounds
         * @memberof Hit.STC_BATTLE_REPORT
         * @instance
         */
        STC_BATTLE_REPORT.prototype.rounds = $util.emptyArray;

        /**
         * Creates a new STC_BATTLE_REPORT instance using the specified properties.
         * @function create
         * @memberof Hit.STC_BATTLE_REPORT
         * @static
         * @param {Hit.ISTC_BATTLE_REPORT=} [properties] Properties to set
         * @returns {Hit.STC_BATTLE_REPORT} STC_BATTLE_REPORT instance
         */
        STC_BATTLE_REPORT.create = function create(properties) {
            return new STC_BATTLE_REPORT(properties);
        };

        /**
         * Encodes the specified STC_BATTLE_REPORT message. Does not implicitly {@link Hit.STC_BATTLE_REPORT.verify|verify} messages.
         * @function encode
         * @memberof Hit.STC_BATTLE_REPORT
         * @static
         * @param {Hit.ISTC_BATTLE_REPORT} message STC_BATTLE_REPORT message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        STC_BATTLE_REPORT.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.rounds != null && message.rounds.length)
                for (var i = 0; i < message.rounds.length; ++i)
                    $root.Hit.STC_BATTLE_ROUND.encode(message.rounds[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified STC_BATTLE_REPORT message, length delimited. Does not implicitly {@link Hit.STC_BATTLE_REPORT.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Hit.STC_BATTLE_REPORT
         * @static
         * @param {Hit.ISTC_BATTLE_REPORT} message STC_BATTLE_REPORT message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        STC_BATTLE_REPORT.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a STC_BATTLE_REPORT message from the specified reader or buffer.
         * @function decode
         * @memberof Hit.STC_BATTLE_REPORT
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Hit.STC_BATTLE_REPORT} STC_BATTLE_REPORT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        STC_BATTLE_REPORT.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Hit.STC_BATTLE_REPORT();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.rounds && message.rounds.length))
                        message.rounds = [];
                    message.rounds.push($root.Hit.STC_BATTLE_ROUND.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a STC_BATTLE_REPORT message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Hit.STC_BATTLE_REPORT
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Hit.STC_BATTLE_REPORT} STC_BATTLE_REPORT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        STC_BATTLE_REPORT.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a STC_BATTLE_REPORT message.
         * @function verify
         * @memberof Hit.STC_BATTLE_REPORT
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        STC_BATTLE_REPORT.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.rounds != null && message.hasOwnProperty("rounds")) {
                if (!Array.isArray(message.rounds))
                    return "rounds: array expected";
                for (var i = 0; i < message.rounds.length; ++i) {
                    var error = $root.Hit.STC_BATTLE_ROUND.verify(message.rounds[i]);
                    if (error)
                        return "rounds." + error;
                }
            }
            return null;
        };

        /**
         * Creates a STC_BATTLE_REPORT message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Hit.STC_BATTLE_REPORT
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Hit.STC_BATTLE_REPORT} STC_BATTLE_REPORT
         */
        STC_BATTLE_REPORT.fromObject = function fromObject(object) {
            if (object instanceof $root.Hit.STC_BATTLE_REPORT)
                return object;
            var message = new $root.Hit.STC_BATTLE_REPORT();
            if (object.rounds) {
                if (!Array.isArray(object.rounds))
                    throw TypeError(".Hit.STC_BATTLE_REPORT.rounds: array expected");
                message.rounds = [];
                for (var i = 0; i < object.rounds.length; ++i) {
                    if (typeof object.rounds[i] !== "object")
                        throw TypeError(".Hit.STC_BATTLE_REPORT.rounds: object expected");
                    message.rounds[i] = $root.Hit.STC_BATTLE_ROUND.fromObject(object.rounds[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a STC_BATTLE_REPORT message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Hit.STC_BATTLE_REPORT
         * @static
         * @param {Hit.STC_BATTLE_REPORT} message STC_BATTLE_REPORT
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        STC_BATTLE_REPORT.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.rounds = [];
            if (message.rounds && message.rounds.length) {
                object.rounds = [];
                for (var j = 0; j < message.rounds.length; ++j)
                    object.rounds[j] = $root.Hit.STC_BATTLE_ROUND.toObject(message.rounds[j], options);
            }
            return object;
        };

        /**
         * Converts this STC_BATTLE_REPORT to JSON.
         * @function toJSON
         * @memberof Hit.STC_BATTLE_REPORT
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        STC_BATTLE_REPORT.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return STC_BATTLE_REPORT;
    })();

    Hit.STC_BATTLE_POKE = (function() {

        /**
         * Properties of a STC_BATTLE_POKE.
         * @memberof Hit
         * @interface ISTC_BATTLE_POKE
         * @property {number|null} [uid] STC_BATTLE_POKE uid
         * @property {number|null} [pokeId] STC_BATTLE_POKE pokeId
         * @property {number|null} [maxHp] STC_BATTLE_POKE maxHp
         * @property {number|null} [initHp] STC_BATTLE_POKE initHp
         * @property {number|null} [lv] STC_BATTLE_POKE lv
         * @property {number|null} [alv] STC_BATTLE_POKE alv
         * @property {number|null} [nonVolatileStatus] STC_BATTLE_POKE nonVolatileStatus
         */

        /**
         * Constructs a new STC_BATTLE_POKE.
         * @memberof Hit
         * @classdesc Represents a STC_BATTLE_POKE.
         * @implements ISTC_BATTLE_POKE
         * @constructor
         * @param {Hit.ISTC_BATTLE_POKE=} [properties] Properties to set
         */
        function STC_BATTLE_POKE(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * STC_BATTLE_POKE uid.
         * @member {number} uid
         * @memberof Hit.STC_BATTLE_POKE
         * @instance
         */
        STC_BATTLE_POKE.prototype.uid = 0;

        /**
         * STC_BATTLE_POKE pokeId.
         * @member {number} pokeId
         * @memberof Hit.STC_BATTLE_POKE
         * @instance
         */
        STC_BATTLE_POKE.prototype.pokeId = 0;

        /**
         * STC_BATTLE_POKE maxHp.
         * @member {number} maxHp
         * @memberof Hit.STC_BATTLE_POKE
         * @instance
         */
        STC_BATTLE_POKE.prototype.maxHp = 0;

        /**
         * STC_BATTLE_POKE initHp.
         * @member {number} initHp
         * @memberof Hit.STC_BATTLE_POKE
         * @instance
         */
        STC_BATTLE_POKE.prototype.initHp = 0;

        /**
         * STC_BATTLE_POKE lv.
         * @member {number} lv
         * @memberof Hit.STC_BATTLE_POKE
         * @instance
         */
        STC_BATTLE_POKE.prototype.lv = 0;

        /**
         * STC_BATTLE_POKE alv.
         * @member {number} alv
         * @memberof Hit.STC_BATTLE_POKE
         * @instance
         */
        STC_BATTLE_POKE.prototype.alv = 0;

        /**
         * STC_BATTLE_POKE nonVolatileStatus.
         * @member {number} nonVolatileStatus
         * @memberof Hit.STC_BATTLE_POKE
         * @instance
         */
        STC_BATTLE_POKE.prototype.nonVolatileStatus = 0;

        /**
         * Creates a new STC_BATTLE_POKE instance using the specified properties.
         * @function create
         * @memberof Hit.STC_BATTLE_POKE
         * @static
         * @param {Hit.ISTC_BATTLE_POKE=} [properties] Properties to set
         * @returns {Hit.STC_BATTLE_POKE} STC_BATTLE_POKE instance
         */
        STC_BATTLE_POKE.create = function create(properties) {
            return new STC_BATTLE_POKE(properties);
        };

        /**
         * Encodes the specified STC_BATTLE_POKE message. Does not implicitly {@link Hit.STC_BATTLE_POKE.verify|verify} messages.
         * @function encode
         * @memberof Hit.STC_BATTLE_POKE
         * @static
         * @param {Hit.ISTC_BATTLE_POKE} message STC_BATTLE_POKE message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        STC_BATTLE_POKE.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.uid);
            if (message.pokeId != null && message.hasOwnProperty("pokeId"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.pokeId);
            if (message.maxHp != null && message.hasOwnProperty("maxHp"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.maxHp);
            if (message.initHp != null && message.hasOwnProperty("initHp"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.initHp);
            if (message.lv != null && message.hasOwnProperty("lv"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.lv);
            if (message.alv != null && message.hasOwnProperty("alv"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.alv);
            if (message.nonVolatileStatus != null && message.hasOwnProperty("nonVolatileStatus"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.nonVolatileStatus);
            return writer;
        };

        /**
         * Encodes the specified STC_BATTLE_POKE message, length delimited. Does not implicitly {@link Hit.STC_BATTLE_POKE.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Hit.STC_BATTLE_POKE
         * @static
         * @param {Hit.ISTC_BATTLE_POKE} message STC_BATTLE_POKE message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        STC_BATTLE_POKE.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a STC_BATTLE_POKE message from the specified reader or buffer.
         * @function decode
         * @memberof Hit.STC_BATTLE_POKE
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Hit.STC_BATTLE_POKE} STC_BATTLE_POKE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        STC_BATTLE_POKE.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Hit.STC_BATTLE_POKE();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.uint32();
                    break;
                case 2:
                    message.pokeId = reader.uint32();
                    break;
                case 3:
                    message.maxHp = reader.int32();
                    break;
                case 4:
                    message.initHp = reader.int32();
                    break;
                case 5:
                    message.lv = reader.uint32();
                    break;
                case 6:
                    message.alv = reader.uint32();
                    break;
                case 7:
                    message.nonVolatileStatus = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a STC_BATTLE_POKE message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Hit.STC_BATTLE_POKE
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Hit.STC_BATTLE_POKE} STC_BATTLE_POKE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        STC_BATTLE_POKE.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a STC_BATTLE_POKE message.
         * @function verify
         * @memberof Hit.STC_BATTLE_POKE
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        STC_BATTLE_POKE.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid))
                    return "uid: integer expected";
            if (message.pokeId != null && message.hasOwnProperty("pokeId"))
                if (!$util.isInteger(message.pokeId))
                    return "pokeId: integer expected";
            if (message.maxHp != null && message.hasOwnProperty("maxHp"))
                if (!$util.isInteger(message.maxHp))
                    return "maxHp: integer expected";
            if (message.initHp != null && message.hasOwnProperty("initHp"))
                if (!$util.isInteger(message.initHp))
                    return "initHp: integer expected";
            if (message.lv != null && message.hasOwnProperty("lv"))
                if (!$util.isInteger(message.lv))
                    return "lv: integer expected";
            if (message.alv != null && message.hasOwnProperty("alv"))
                if (!$util.isInteger(message.alv))
                    return "alv: integer expected";
            if (message.nonVolatileStatus != null && message.hasOwnProperty("nonVolatileStatus"))
                if (!$util.isInteger(message.nonVolatileStatus))
                    return "nonVolatileStatus: integer expected";
            return null;
        };

        /**
         * Creates a STC_BATTLE_POKE message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Hit.STC_BATTLE_POKE
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Hit.STC_BATTLE_POKE} STC_BATTLE_POKE
         */
        STC_BATTLE_POKE.fromObject = function fromObject(object) {
            if (object instanceof $root.Hit.STC_BATTLE_POKE)
                return object;
            var message = new $root.Hit.STC_BATTLE_POKE();
            if (object.uid != null)
                message.uid = object.uid >>> 0;
            if (object.pokeId != null)
                message.pokeId = object.pokeId >>> 0;
            if (object.maxHp != null)
                message.maxHp = object.maxHp | 0;
            if (object.initHp != null)
                message.initHp = object.initHp | 0;
            if (object.lv != null)
                message.lv = object.lv >>> 0;
            if (object.alv != null)
                message.alv = object.alv >>> 0;
            if (object.nonVolatileStatus != null)
                message.nonVolatileStatus = object.nonVolatileStatus >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a STC_BATTLE_POKE message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Hit.STC_BATTLE_POKE
         * @static
         * @param {Hit.STC_BATTLE_POKE} message STC_BATTLE_POKE
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        STC_BATTLE_POKE.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.uid = 0;
                object.pokeId = 0;
                object.maxHp = 0;
                object.initHp = 0;
                object.lv = 0;
                object.alv = 0;
                object.nonVolatileStatus = 0;
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            if (message.pokeId != null && message.hasOwnProperty("pokeId"))
                object.pokeId = message.pokeId;
            if (message.maxHp != null && message.hasOwnProperty("maxHp"))
                object.maxHp = message.maxHp;
            if (message.initHp != null && message.hasOwnProperty("initHp"))
                object.initHp = message.initHp;
            if (message.lv != null && message.hasOwnProperty("lv"))
                object.lv = message.lv;
            if (message.alv != null && message.hasOwnProperty("alv"))
                object.alv = message.alv;
            if (message.nonVolatileStatus != null && message.hasOwnProperty("nonVolatileStatus"))
                object.nonVolatileStatus = message.nonVolatileStatus;
            return object;
        };

        /**
         * Converts this STC_BATTLE_POKE to JSON.
         * @function toJSON
         * @memberof Hit.STC_BATTLE_POKE
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        STC_BATTLE_POKE.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return STC_BATTLE_POKE;
    })();

    Hit.STC_BATTLE_MOVE = (function() {

        /**
         * Properties of a STC_BATTLE_MOVE.
         * @memberof Hit
         * @interface ISTC_BATTLE_MOVE
         * @property {number|null} [uid] STC_BATTLE_MOVE uid
         * @property {number|null} [moveId] STC_BATTLE_MOVE moveId
         * @property {Array.<Hit.ISTC_BATTLE_TARGET>|null} [targets] STC_BATTLE_MOVE targets
         */

        /**
         * Constructs a new STC_BATTLE_MOVE.
         * @memberof Hit
         * @classdesc Represents a STC_BATTLE_MOVE.
         * @implements ISTC_BATTLE_MOVE
         * @constructor
         * @param {Hit.ISTC_BATTLE_MOVE=} [properties] Properties to set
         */
        function STC_BATTLE_MOVE(properties) {
            this.targets = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * STC_BATTLE_MOVE uid.
         * @member {number} uid
         * @memberof Hit.STC_BATTLE_MOVE
         * @instance
         */
        STC_BATTLE_MOVE.prototype.uid = 0;

        /**
         * STC_BATTLE_MOVE moveId.
         * @member {number} moveId
         * @memberof Hit.STC_BATTLE_MOVE
         * @instance
         */
        STC_BATTLE_MOVE.prototype.moveId = 0;

        /**
         * STC_BATTLE_MOVE targets.
         * @member {Array.<Hit.ISTC_BATTLE_TARGET>} targets
         * @memberof Hit.STC_BATTLE_MOVE
         * @instance
         */
        STC_BATTLE_MOVE.prototype.targets = $util.emptyArray;

        /**
         * Creates a new STC_BATTLE_MOVE instance using the specified properties.
         * @function create
         * @memberof Hit.STC_BATTLE_MOVE
         * @static
         * @param {Hit.ISTC_BATTLE_MOVE=} [properties] Properties to set
         * @returns {Hit.STC_BATTLE_MOVE} STC_BATTLE_MOVE instance
         */
        STC_BATTLE_MOVE.create = function create(properties) {
            return new STC_BATTLE_MOVE(properties);
        };

        /**
         * Encodes the specified STC_BATTLE_MOVE message. Does not implicitly {@link Hit.STC_BATTLE_MOVE.verify|verify} messages.
         * @function encode
         * @memberof Hit.STC_BATTLE_MOVE
         * @static
         * @param {Hit.ISTC_BATTLE_MOVE} message STC_BATTLE_MOVE message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        STC_BATTLE_MOVE.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.uid);
            if (message.moveId != null && message.hasOwnProperty("moveId"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.moveId);
            if (message.targets != null && message.targets.length)
                for (var i = 0; i < message.targets.length; ++i)
                    $root.Hit.STC_BATTLE_TARGET.encode(message.targets[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified STC_BATTLE_MOVE message, length delimited. Does not implicitly {@link Hit.STC_BATTLE_MOVE.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Hit.STC_BATTLE_MOVE
         * @static
         * @param {Hit.ISTC_BATTLE_MOVE} message STC_BATTLE_MOVE message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        STC_BATTLE_MOVE.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a STC_BATTLE_MOVE message from the specified reader or buffer.
         * @function decode
         * @memberof Hit.STC_BATTLE_MOVE
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Hit.STC_BATTLE_MOVE} STC_BATTLE_MOVE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        STC_BATTLE_MOVE.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Hit.STC_BATTLE_MOVE();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.uint32();
                    break;
                case 2:
                    message.moveId = reader.uint32();
                    break;
                case 3:
                    if (!(message.targets && message.targets.length))
                        message.targets = [];
                    message.targets.push($root.Hit.STC_BATTLE_TARGET.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a STC_BATTLE_MOVE message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Hit.STC_BATTLE_MOVE
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Hit.STC_BATTLE_MOVE} STC_BATTLE_MOVE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        STC_BATTLE_MOVE.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a STC_BATTLE_MOVE message.
         * @function verify
         * @memberof Hit.STC_BATTLE_MOVE
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        STC_BATTLE_MOVE.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid))
                    return "uid: integer expected";
            if (message.moveId != null && message.hasOwnProperty("moveId"))
                if (!$util.isInteger(message.moveId))
                    return "moveId: integer expected";
            if (message.targets != null && message.hasOwnProperty("targets")) {
                if (!Array.isArray(message.targets))
                    return "targets: array expected";
                for (var i = 0; i < message.targets.length; ++i) {
                    var error = $root.Hit.STC_BATTLE_TARGET.verify(message.targets[i]);
                    if (error)
                        return "targets." + error;
                }
            }
            return null;
        };

        /**
         * Creates a STC_BATTLE_MOVE message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Hit.STC_BATTLE_MOVE
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Hit.STC_BATTLE_MOVE} STC_BATTLE_MOVE
         */
        STC_BATTLE_MOVE.fromObject = function fromObject(object) {
            if (object instanceof $root.Hit.STC_BATTLE_MOVE)
                return object;
            var message = new $root.Hit.STC_BATTLE_MOVE();
            if (object.uid != null)
                message.uid = object.uid >>> 0;
            if (object.moveId != null)
                message.moveId = object.moveId >>> 0;
            if (object.targets) {
                if (!Array.isArray(object.targets))
                    throw TypeError(".Hit.STC_BATTLE_MOVE.targets: array expected");
                message.targets = [];
                for (var i = 0; i < object.targets.length; ++i) {
                    if (typeof object.targets[i] !== "object")
                        throw TypeError(".Hit.STC_BATTLE_MOVE.targets: object expected");
                    message.targets[i] = $root.Hit.STC_BATTLE_TARGET.fromObject(object.targets[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a STC_BATTLE_MOVE message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Hit.STC_BATTLE_MOVE
         * @static
         * @param {Hit.STC_BATTLE_MOVE} message STC_BATTLE_MOVE
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        STC_BATTLE_MOVE.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.targets = [];
            if (options.defaults) {
                object.uid = 0;
                object.moveId = 0;
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            if (message.moveId != null && message.hasOwnProperty("moveId"))
                object.moveId = message.moveId;
            if (message.targets && message.targets.length) {
                object.targets = [];
                for (var j = 0; j < message.targets.length; ++j)
                    object.targets[j] = $root.Hit.STC_BATTLE_TARGET.toObject(message.targets[j], options);
            }
            return object;
        };

        /**
         * Converts this STC_BATTLE_MOVE to JSON.
         * @function toJSON
         * @memberof Hit.STC_BATTLE_MOVE
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        STC_BATTLE_MOVE.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return STC_BATTLE_MOVE;
    })();

    Hit.STC_BATTLE_ROUND = (function() {

        /**
         * Properties of a STC_BATTLE_ROUND.
         * @memberof Hit
         * @interface ISTC_BATTLE_ROUND
         * @property {number|null} [round] STC_BATTLE_ROUND round
         * @property {Array.<Hit.ISTC_BATTLE_ACTION>|null} [acts] STC_BATTLE_ROUND acts
         */

        /**
         * Constructs a new STC_BATTLE_ROUND.
         * @memberof Hit
         * @classdesc Represents a STC_BATTLE_ROUND.
         * @implements ISTC_BATTLE_ROUND
         * @constructor
         * @param {Hit.ISTC_BATTLE_ROUND=} [properties] Properties to set
         */
        function STC_BATTLE_ROUND(properties) {
            this.acts = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * STC_BATTLE_ROUND round.
         * @member {number} round
         * @memberof Hit.STC_BATTLE_ROUND
         * @instance
         */
        STC_BATTLE_ROUND.prototype.round = 0;

        /**
         * STC_BATTLE_ROUND acts.
         * @member {Array.<Hit.ISTC_BATTLE_ACTION>} acts
         * @memberof Hit.STC_BATTLE_ROUND
         * @instance
         */
        STC_BATTLE_ROUND.prototype.acts = $util.emptyArray;

        /**
         * Creates a new STC_BATTLE_ROUND instance using the specified properties.
         * @function create
         * @memberof Hit.STC_BATTLE_ROUND
         * @static
         * @param {Hit.ISTC_BATTLE_ROUND=} [properties] Properties to set
         * @returns {Hit.STC_BATTLE_ROUND} STC_BATTLE_ROUND instance
         */
        STC_BATTLE_ROUND.create = function create(properties) {
            return new STC_BATTLE_ROUND(properties);
        };

        /**
         * Encodes the specified STC_BATTLE_ROUND message. Does not implicitly {@link Hit.STC_BATTLE_ROUND.verify|verify} messages.
         * @function encode
         * @memberof Hit.STC_BATTLE_ROUND
         * @static
         * @param {Hit.ISTC_BATTLE_ROUND} message STC_BATTLE_ROUND message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        STC_BATTLE_ROUND.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.round != null && message.hasOwnProperty("round"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.round);
            if (message.acts != null && message.acts.length)
                for (var i = 0; i < message.acts.length; ++i)
                    $root.Hit.STC_BATTLE_ACTION.encode(message.acts[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified STC_BATTLE_ROUND message, length delimited. Does not implicitly {@link Hit.STC_BATTLE_ROUND.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Hit.STC_BATTLE_ROUND
         * @static
         * @param {Hit.ISTC_BATTLE_ROUND} message STC_BATTLE_ROUND message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        STC_BATTLE_ROUND.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a STC_BATTLE_ROUND message from the specified reader or buffer.
         * @function decode
         * @memberof Hit.STC_BATTLE_ROUND
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Hit.STC_BATTLE_ROUND} STC_BATTLE_ROUND
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        STC_BATTLE_ROUND.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Hit.STC_BATTLE_ROUND();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.round = reader.uint32();
                    break;
                case 2:
                    if (!(message.acts && message.acts.length))
                        message.acts = [];
                    message.acts.push($root.Hit.STC_BATTLE_ACTION.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a STC_BATTLE_ROUND message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Hit.STC_BATTLE_ROUND
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Hit.STC_BATTLE_ROUND} STC_BATTLE_ROUND
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        STC_BATTLE_ROUND.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a STC_BATTLE_ROUND message.
         * @function verify
         * @memberof Hit.STC_BATTLE_ROUND
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        STC_BATTLE_ROUND.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.round != null && message.hasOwnProperty("round"))
                if (!$util.isInteger(message.round))
                    return "round: integer expected";
            if (message.acts != null && message.hasOwnProperty("acts")) {
                if (!Array.isArray(message.acts))
                    return "acts: array expected";
                for (var i = 0; i < message.acts.length; ++i) {
                    var error = $root.Hit.STC_BATTLE_ACTION.verify(message.acts[i]);
                    if (error)
                        return "acts." + error;
                }
            }
            return null;
        };

        /**
         * Creates a STC_BATTLE_ROUND message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Hit.STC_BATTLE_ROUND
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Hit.STC_BATTLE_ROUND} STC_BATTLE_ROUND
         */
        STC_BATTLE_ROUND.fromObject = function fromObject(object) {
            if (object instanceof $root.Hit.STC_BATTLE_ROUND)
                return object;
            var message = new $root.Hit.STC_BATTLE_ROUND();
            if (object.round != null)
                message.round = object.round >>> 0;
            if (object.acts) {
                if (!Array.isArray(object.acts))
                    throw TypeError(".Hit.STC_BATTLE_ROUND.acts: array expected");
                message.acts = [];
                for (var i = 0; i < object.acts.length; ++i) {
                    if (typeof object.acts[i] !== "object")
                        throw TypeError(".Hit.STC_BATTLE_ROUND.acts: object expected");
                    message.acts[i] = $root.Hit.STC_BATTLE_ACTION.fromObject(object.acts[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a STC_BATTLE_ROUND message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Hit.STC_BATTLE_ROUND
         * @static
         * @param {Hit.STC_BATTLE_ROUND} message STC_BATTLE_ROUND
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        STC_BATTLE_ROUND.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.acts = [];
            if (options.defaults)
                object.round = 0;
            if (message.round != null && message.hasOwnProperty("round"))
                object.round = message.round;
            if (message.acts && message.acts.length) {
                object.acts = [];
                for (var j = 0; j < message.acts.length; ++j)
                    object.acts[j] = $root.Hit.STC_BATTLE_ACTION.toObject(message.acts[j], options);
            }
            return object;
        };

        /**
         * Converts this STC_BATTLE_ROUND to JSON.
         * @function toJSON
         * @memberof Hit.STC_BATTLE_ROUND
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        STC_BATTLE_ROUND.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return STC_BATTLE_ROUND;
    })();

    /**
     * EBATTLE_TYPE_EFFECTIVE enum.
     * @name Hit.EBATTLE_TYPE_EFFECTIVE
     * @enum {string}
     * @property {number} EBTE_VERY_EFFECTIVE=0 EBTE_VERY_EFFECTIVE value
     * @property {number} EBTE_NORMAL=1 EBTE_NORMAL value
     * @property {number} EBTE_NOT_EFFECTIVE=2 EBTE_NOT_EFFECTIVE value
     * @property {number} EBTE_NO_EFFECT=3 EBTE_NO_EFFECT value
     */
    Hit.EBATTLE_TYPE_EFFECTIVE = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "EBTE_VERY_EFFECTIVE"] = 0;
        values[valuesById[1] = "EBTE_NORMAL"] = 1;
        values[valuesById[2] = "EBTE_NOT_EFFECTIVE"] = 2;
        values[valuesById[3] = "EBTE_NO_EFFECT"] = 3;
        return values;
    })();

    Hit.STC_BATTLE_TARGET = (function() {

        /**
         * Properties of a STC_BATTLE_TARGET.
         * @memberof Hit
         * @interface ISTC_BATTLE_TARGET
         * @property {number|null} [uid] STC_BATTLE_TARGET uid
         * @property {number|null} [statId] STC_BATTLE_TARGET statId
         * @property {number|null} [value] STC_BATTLE_TARGET value
         * @property {Hit.EBATTLE_TYPE_EFFECTIVE|null} [effective] STC_BATTLE_TARGET effective
         */

        /**
         * Constructs a new STC_BATTLE_TARGET.
         * @memberof Hit
         * @classdesc Represents a STC_BATTLE_TARGET.
         * @implements ISTC_BATTLE_TARGET
         * @constructor
         * @param {Hit.ISTC_BATTLE_TARGET=} [properties] Properties to set
         */
        function STC_BATTLE_TARGET(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * STC_BATTLE_TARGET uid.
         * @member {number} uid
         * @memberof Hit.STC_BATTLE_TARGET
         * @instance
         */
        STC_BATTLE_TARGET.prototype.uid = 0;

        /**
         * STC_BATTLE_TARGET statId.
         * @member {number} statId
         * @memberof Hit.STC_BATTLE_TARGET
         * @instance
         */
        STC_BATTLE_TARGET.prototype.statId = 0;

        /**
         * STC_BATTLE_TARGET value.
         * @member {number} value
         * @memberof Hit.STC_BATTLE_TARGET
         * @instance
         */
        STC_BATTLE_TARGET.prototype.value = 0;

        /**
         * STC_BATTLE_TARGET effective.
         * @member {Hit.EBATTLE_TYPE_EFFECTIVE} effective
         * @memberof Hit.STC_BATTLE_TARGET
         * @instance
         */
        STC_BATTLE_TARGET.prototype.effective = 0;

        /**
         * Creates a new STC_BATTLE_TARGET instance using the specified properties.
         * @function create
         * @memberof Hit.STC_BATTLE_TARGET
         * @static
         * @param {Hit.ISTC_BATTLE_TARGET=} [properties] Properties to set
         * @returns {Hit.STC_BATTLE_TARGET} STC_BATTLE_TARGET instance
         */
        STC_BATTLE_TARGET.create = function create(properties) {
            return new STC_BATTLE_TARGET(properties);
        };

        /**
         * Encodes the specified STC_BATTLE_TARGET message. Does not implicitly {@link Hit.STC_BATTLE_TARGET.verify|verify} messages.
         * @function encode
         * @memberof Hit.STC_BATTLE_TARGET
         * @static
         * @param {Hit.ISTC_BATTLE_TARGET} message STC_BATTLE_TARGET message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        STC_BATTLE_TARGET.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.uid);
            if (message.statId != null && message.hasOwnProperty("statId"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.statId);
            if (message.value != null && message.hasOwnProperty("value"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.value);
            if (message.effective != null && message.hasOwnProperty("effective"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.effective);
            return writer;
        };

        /**
         * Encodes the specified STC_BATTLE_TARGET message, length delimited. Does not implicitly {@link Hit.STC_BATTLE_TARGET.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Hit.STC_BATTLE_TARGET
         * @static
         * @param {Hit.ISTC_BATTLE_TARGET} message STC_BATTLE_TARGET message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        STC_BATTLE_TARGET.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a STC_BATTLE_TARGET message from the specified reader or buffer.
         * @function decode
         * @memberof Hit.STC_BATTLE_TARGET
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Hit.STC_BATTLE_TARGET} STC_BATTLE_TARGET
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        STC_BATTLE_TARGET.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Hit.STC_BATTLE_TARGET();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.uint32();
                    break;
                case 2:
                    message.statId = reader.uint32();
                    break;
                case 3:
                    message.value = reader.int32();
                    break;
                case 4:
                    message.effective = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a STC_BATTLE_TARGET message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Hit.STC_BATTLE_TARGET
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Hit.STC_BATTLE_TARGET} STC_BATTLE_TARGET
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        STC_BATTLE_TARGET.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a STC_BATTLE_TARGET message.
         * @function verify
         * @memberof Hit.STC_BATTLE_TARGET
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        STC_BATTLE_TARGET.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid))
                    return "uid: integer expected";
            if (message.statId != null && message.hasOwnProperty("statId"))
                if (!$util.isInteger(message.statId))
                    return "statId: integer expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (!$util.isInteger(message.value))
                    return "value: integer expected";
            if (message.effective != null && message.hasOwnProperty("effective"))
                switch (message.effective) {
                default:
                    return "effective: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            return null;
        };

        /**
         * Creates a STC_BATTLE_TARGET message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Hit.STC_BATTLE_TARGET
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Hit.STC_BATTLE_TARGET} STC_BATTLE_TARGET
         */
        STC_BATTLE_TARGET.fromObject = function fromObject(object) {
            if (object instanceof $root.Hit.STC_BATTLE_TARGET)
                return object;
            var message = new $root.Hit.STC_BATTLE_TARGET();
            if (object.uid != null)
                message.uid = object.uid >>> 0;
            if (object.statId != null)
                message.statId = object.statId >>> 0;
            if (object.value != null)
                message.value = object.value | 0;
            switch (object.effective) {
            case "EBTE_VERY_EFFECTIVE":
            case 0:
                message.effective = 0;
                break;
            case "EBTE_NORMAL":
            case 1:
                message.effective = 1;
                break;
            case "EBTE_NOT_EFFECTIVE":
            case 2:
                message.effective = 2;
                break;
            case "EBTE_NO_EFFECT":
            case 3:
                message.effective = 3;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a STC_BATTLE_TARGET message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Hit.STC_BATTLE_TARGET
         * @static
         * @param {Hit.STC_BATTLE_TARGET} message STC_BATTLE_TARGET
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        STC_BATTLE_TARGET.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.uid = 0;
                object.statId = 0;
                object.value = 0;
                object.effective = options.enums === String ? "EBTE_VERY_EFFECTIVE" : 0;
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            if (message.statId != null && message.hasOwnProperty("statId"))
                object.statId = message.statId;
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = message.value;
            if (message.effective != null && message.hasOwnProperty("effective"))
                object.effective = options.enums === String ? $root.Hit.EBATTLE_TYPE_EFFECTIVE[message.effective] : message.effective;
            return object;
        };

        /**
         * Converts this STC_BATTLE_TARGET to JSON.
         * @function toJSON
         * @memberof Hit.STC_BATTLE_TARGET
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        STC_BATTLE_TARGET.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return STC_BATTLE_TARGET;
    })();

    Hit.STC_BATTLE_SWITCH_POKE = (function() {

        /**
         * Properties of a STC_BATTLE_SWITCH_POKE.
         * @memberof Hit
         * @interface ISTC_BATTLE_SWITCH_POKE
         * @property {number|null} [uid] STC_BATTLE_SWITCH_POKE uid
         * @property {number|null} [teamIdx] STC_BATTLE_SWITCH_POKE teamIdx
         * @property {number|null} [pos] STC_BATTLE_SWITCH_POKE pos
         */

        /**
         * Constructs a new STC_BATTLE_SWITCH_POKE.
         * @memberof Hit
         * @classdesc Represents a STC_BATTLE_SWITCH_POKE.
         * @implements ISTC_BATTLE_SWITCH_POKE
         * @constructor
         * @param {Hit.ISTC_BATTLE_SWITCH_POKE=} [properties] Properties to set
         */
        function STC_BATTLE_SWITCH_POKE(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * STC_BATTLE_SWITCH_POKE uid.
         * @member {number} uid
         * @memberof Hit.STC_BATTLE_SWITCH_POKE
         * @instance
         */
        STC_BATTLE_SWITCH_POKE.prototype.uid = 0;

        /**
         * STC_BATTLE_SWITCH_POKE teamIdx.
         * @member {number} teamIdx
         * @memberof Hit.STC_BATTLE_SWITCH_POKE
         * @instance
         */
        STC_BATTLE_SWITCH_POKE.prototype.teamIdx = 0;

        /**
         * STC_BATTLE_SWITCH_POKE pos.
         * @member {number} pos
         * @memberof Hit.STC_BATTLE_SWITCH_POKE
         * @instance
         */
        STC_BATTLE_SWITCH_POKE.prototype.pos = 0;

        /**
         * Creates a new STC_BATTLE_SWITCH_POKE instance using the specified properties.
         * @function create
         * @memberof Hit.STC_BATTLE_SWITCH_POKE
         * @static
         * @param {Hit.ISTC_BATTLE_SWITCH_POKE=} [properties] Properties to set
         * @returns {Hit.STC_BATTLE_SWITCH_POKE} STC_BATTLE_SWITCH_POKE instance
         */
        STC_BATTLE_SWITCH_POKE.create = function create(properties) {
            return new STC_BATTLE_SWITCH_POKE(properties);
        };

        /**
         * Encodes the specified STC_BATTLE_SWITCH_POKE message. Does not implicitly {@link Hit.STC_BATTLE_SWITCH_POKE.verify|verify} messages.
         * @function encode
         * @memberof Hit.STC_BATTLE_SWITCH_POKE
         * @static
         * @param {Hit.ISTC_BATTLE_SWITCH_POKE} message STC_BATTLE_SWITCH_POKE message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        STC_BATTLE_SWITCH_POKE.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.uid);
            if (message.teamIdx != null && message.hasOwnProperty("teamIdx"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.teamIdx);
            if (message.pos != null && message.hasOwnProperty("pos"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.pos);
            return writer;
        };

        /**
         * Encodes the specified STC_BATTLE_SWITCH_POKE message, length delimited. Does not implicitly {@link Hit.STC_BATTLE_SWITCH_POKE.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Hit.STC_BATTLE_SWITCH_POKE
         * @static
         * @param {Hit.ISTC_BATTLE_SWITCH_POKE} message STC_BATTLE_SWITCH_POKE message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        STC_BATTLE_SWITCH_POKE.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a STC_BATTLE_SWITCH_POKE message from the specified reader or buffer.
         * @function decode
         * @memberof Hit.STC_BATTLE_SWITCH_POKE
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Hit.STC_BATTLE_SWITCH_POKE} STC_BATTLE_SWITCH_POKE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        STC_BATTLE_SWITCH_POKE.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Hit.STC_BATTLE_SWITCH_POKE();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.uint32();
                    break;
                case 2:
                    message.teamIdx = reader.uint32();
                    break;
                case 3:
                    message.pos = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a STC_BATTLE_SWITCH_POKE message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Hit.STC_BATTLE_SWITCH_POKE
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Hit.STC_BATTLE_SWITCH_POKE} STC_BATTLE_SWITCH_POKE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        STC_BATTLE_SWITCH_POKE.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a STC_BATTLE_SWITCH_POKE message.
         * @function verify
         * @memberof Hit.STC_BATTLE_SWITCH_POKE
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        STC_BATTLE_SWITCH_POKE.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid))
                    return "uid: integer expected";
            if (message.teamIdx != null && message.hasOwnProperty("teamIdx"))
                if (!$util.isInteger(message.teamIdx))
                    return "teamIdx: integer expected";
            if (message.pos != null && message.hasOwnProperty("pos"))
                if (!$util.isInteger(message.pos))
                    return "pos: integer expected";
            return null;
        };

        /**
         * Creates a STC_BATTLE_SWITCH_POKE message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Hit.STC_BATTLE_SWITCH_POKE
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Hit.STC_BATTLE_SWITCH_POKE} STC_BATTLE_SWITCH_POKE
         */
        STC_BATTLE_SWITCH_POKE.fromObject = function fromObject(object) {
            if (object instanceof $root.Hit.STC_BATTLE_SWITCH_POKE)
                return object;
            var message = new $root.Hit.STC_BATTLE_SWITCH_POKE();
            if (object.uid != null)
                message.uid = object.uid >>> 0;
            if (object.teamIdx != null)
                message.teamIdx = object.teamIdx >>> 0;
            if (object.pos != null)
                message.pos = object.pos >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a STC_BATTLE_SWITCH_POKE message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Hit.STC_BATTLE_SWITCH_POKE
         * @static
         * @param {Hit.STC_BATTLE_SWITCH_POKE} message STC_BATTLE_SWITCH_POKE
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        STC_BATTLE_SWITCH_POKE.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.uid = 0;
                object.teamIdx = 0;
                object.pos = 0;
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            if (message.teamIdx != null && message.hasOwnProperty("teamIdx"))
                object.teamIdx = message.teamIdx;
            if (message.pos != null && message.hasOwnProperty("pos"))
                object.pos = message.pos;
            return object;
        };

        /**
         * Converts this STC_BATTLE_SWITCH_POKE to JSON.
         * @function toJSON
         * @memberof Hit.STC_BATTLE_SWITCH_POKE
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        STC_BATTLE_SWITCH_POKE.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return STC_BATTLE_SWITCH_POKE;
    })();

    Hit.STC_BATTLE_POKE_DEAD = (function() {

        /**
         * Properties of a STC_BATTLE_POKE_DEAD.
         * @memberof Hit
         * @interface ISTC_BATTLE_POKE_DEAD
         * @property {number|null} [uid] STC_BATTLE_POKE_DEAD uid
         */

        /**
         * Constructs a new STC_BATTLE_POKE_DEAD.
         * @memberof Hit
         * @classdesc Represents a STC_BATTLE_POKE_DEAD.
         * @implements ISTC_BATTLE_POKE_DEAD
         * @constructor
         * @param {Hit.ISTC_BATTLE_POKE_DEAD=} [properties] Properties to set
         */
        function STC_BATTLE_POKE_DEAD(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * STC_BATTLE_POKE_DEAD uid.
         * @member {number} uid
         * @memberof Hit.STC_BATTLE_POKE_DEAD
         * @instance
         */
        STC_BATTLE_POKE_DEAD.prototype.uid = 0;

        /**
         * Creates a new STC_BATTLE_POKE_DEAD instance using the specified properties.
         * @function create
         * @memberof Hit.STC_BATTLE_POKE_DEAD
         * @static
         * @param {Hit.ISTC_BATTLE_POKE_DEAD=} [properties] Properties to set
         * @returns {Hit.STC_BATTLE_POKE_DEAD} STC_BATTLE_POKE_DEAD instance
         */
        STC_BATTLE_POKE_DEAD.create = function create(properties) {
            return new STC_BATTLE_POKE_DEAD(properties);
        };

        /**
         * Encodes the specified STC_BATTLE_POKE_DEAD message. Does not implicitly {@link Hit.STC_BATTLE_POKE_DEAD.verify|verify} messages.
         * @function encode
         * @memberof Hit.STC_BATTLE_POKE_DEAD
         * @static
         * @param {Hit.ISTC_BATTLE_POKE_DEAD} message STC_BATTLE_POKE_DEAD message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        STC_BATTLE_POKE_DEAD.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.uid);
            return writer;
        };

        /**
         * Encodes the specified STC_BATTLE_POKE_DEAD message, length delimited. Does not implicitly {@link Hit.STC_BATTLE_POKE_DEAD.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Hit.STC_BATTLE_POKE_DEAD
         * @static
         * @param {Hit.ISTC_BATTLE_POKE_DEAD} message STC_BATTLE_POKE_DEAD message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        STC_BATTLE_POKE_DEAD.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a STC_BATTLE_POKE_DEAD message from the specified reader or buffer.
         * @function decode
         * @memberof Hit.STC_BATTLE_POKE_DEAD
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Hit.STC_BATTLE_POKE_DEAD} STC_BATTLE_POKE_DEAD
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        STC_BATTLE_POKE_DEAD.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Hit.STC_BATTLE_POKE_DEAD();
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
         * Decodes a STC_BATTLE_POKE_DEAD message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Hit.STC_BATTLE_POKE_DEAD
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Hit.STC_BATTLE_POKE_DEAD} STC_BATTLE_POKE_DEAD
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        STC_BATTLE_POKE_DEAD.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a STC_BATTLE_POKE_DEAD message.
         * @function verify
         * @memberof Hit.STC_BATTLE_POKE_DEAD
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        STC_BATTLE_POKE_DEAD.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid))
                    return "uid: integer expected";
            return null;
        };

        /**
         * Creates a STC_BATTLE_POKE_DEAD message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Hit.STC_BATTLE_POKE_DEAD
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Hit.STC_BATTLE_POKE_DEAD} STC_BATTLE_POKE_DEAD
         */
        STC_BATTLE_POKE_DEAD.fromObject = function fromObject(object) {
            if (object instanceof $root.Hit.STC_BATTLE_POKE_DEAD)
                return object;
            var message = new $root.Hit.STC_BATTLE_POKE_DEAD();
            if (object.uid != null)
                message.uid = object.uid >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a STC_BATTLE_POKE_DEAD message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Hit.STC_BATTLE_POKE_DEAD
         * @static
         * @param {Hit.STC_BATTLE_POKE_DEAD} message STC_BATTLE_POKE_DEAD
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        STC_BATTLE_POKE_DEAD.toObject = function toObject(message, options) {
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
         * Converts this STC_BATTLE_POKE_DEAD to JSON.
         * @function toJSON
         * @memberof Hit.STC_BATTLE_POKE_DEAD
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        STC_BATTLE_POKE_DEAD.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return STC_BATTLE_POKE_DEAD;
    })();

    /**
     * EBATTLE_STATUS_ACTION enum.
     * @name Hit.EBATTLE_STATUS_ACTION
     * @enum {string}
     * @property {number} EBSA_ADD=0 EBSA_ADD value
     * @property {number} EBSA_REMOVE=1 EBSA_REMOVE value
     * @property {number} EBSA_DMG=2 EBSA_DMG value
     * @property {number} EBSA_NO_MOVE=3 EBSA_NO_MOVE value
     */
    Hit.EBATTLE_STATUS_ACTION = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "EBSA_ADD"] = 0;
        values[valuesById[1] = "EBSA_REMOVE"] = 1;
        values[valuesById[2] = "EBSA_DMG"] = 2;
        values[valuesById[3] = "EBSA_NO_MOVE"] = 3;
        return values;
    })();

    /**
     * EBATTLE_STATUS_TYPE enum.
     * @name Hit.EBATTLE_STATUS_TYPE
     * @enum {string}
     * @property {number} EBST_NONE=0 EBST_NONE value
     * @property {number} EBST_BURN=1 EBST_BURN value
     * @property {number} EBST_FREEZE=2 EBST_FREEZE value
     * @property {number} EBST_PARALYSIS=3 EBST_PARALYSIS value
     * @property {number} EBST_POISON=4 EBST_POISON value
     * @property {number} EBST_BADLY_POISONED=5 EBST_BADLY_POISONED value
     * @property {number} EBST_SLEEP=6 EBST_SLEEP value
     */
    Hit.EBATTLE_STATUS_TYPE = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "EBST_NONE"] = 0;
        values[valuesById[1] = "EBST_BURN"] = 1;
        values[valuesById[2] = "EBST_FREEZE"] = 2;
        values[valuesById[3] = "EBST_PARALYSIS"] = 3;
        values[valuesById[4] = "EBST_POISON"] = 4;
        values[valuesById[5] = "EBST_BADLY_POISONED"] = 5;
        values[valuesById[6] = "EBST_SLEEP"] = 6;
        return values;
    })();

    Hit.STC_BATTLE_STATUS = (function() {

        /**
         * Properties of a STC_BATTLE_STATUS.
         * @memberof Hit
         * @interface ISTC_BATTLE_STATUS
         * @property {number|null} [uid] STC_BATTLE_STATUS uid
         * @property {Hit.EBATTLE_STATUS_TYPE|null} [t] STC_BATTLE_STATUS t
         * @property {Hit.EBATTLE_STATUS_ACTION|null} [act] STC_BATTLE_STATUS act
         * @property {Array.<number>|null} [intParams] STC_BATTLE_STATUS intParams
         */

        /**
         * Constructs a new STC_BATTLE_STATUS.
         * @memberof Hit
         * @classdesc Represents a STC_BATTLE_STATUS.
         * @implements ISTC_BATTLE_STATUS
         * @constructor
         * @param {Hit.ISTC_BATTLE_STATUS=} [properties] Properties to set
         */
        function STC_BATTLE_STATUS(properties) {
            this.intParams = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * STC_BATTLE_STATUS uid.
         * @member {number} uid
         * @memberof Hit.STC_BATTLE_STATUS
         * @instance
         */
        STC_BATTLE_STATUS.prototype.uid = 0;

        /**
         * STC_BATTLE_STATUS t.
         * @member {Hit.EBATTLE_STATUS_TYPE} t
         * @memberof Hit.STC_BATTLE_STATUS
         * @instance
         */
        STC_BATTLE_STATUS.prototype.t = 0;

        /**
         * STC_BATTLE_STATUS act.
         * @member {Hit.EBATTLE_STATUS_ACTION} act
         * @memberof Hit.STC_BATTLE_STATUS
         * @instance
         */
        STC_BATTLE_STATUS.prototype.act = 0;

        /**
         * STC_BATTLE_STATUS intParams.
         * @member {Array.<number>} intParams
         * @memberof Hit.STC_BATTLE_STATUS
         * @instance
         */
        STC_BATTLE_STATUS.prototype.intParams = $util.emptyArray;

        /**
         * Creates a new STC_BATTLE_STATUS instance using the specified properties.
         * @function create
         * @memberof Hit.STC_BATTLE_STATUS
         * @static
         * @param {Hit.ISTC_BATTLE_STATUS=} [properties] Properties to set
         * @returns {Hit.STC_BATTLE_STATUS} STC_BATTLE_STATUS instance
         */
        STC_BATTLE_STATUS.create = function create(properties) {
            return new STC_BATTLE_STATUS(properties);
        };

        /**
         * Encodes the specified STC_BATTLE_STATUS message. Does not implicitly {@link Hit.STC_BATTLE_STATUS.verify|verify} messages.
         * @function encode
         * @memberof Hit.STC_BATTLE_STATUS
         * @static
         * @param {Hit.ISTC_BATTLE_STATUS} message STC_BATTLE_STATUS message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        STC_BATTLE_STATUS.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.uid);
            if (message.t != null && message.hasOwnProperty("t"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.t);
            if (message.act != null && message.hasOwnProperty("act"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.act);
            if (message.intParams != null && message.intParams.length) {
                writer.uint32(/* id 4, wireType 2 =*/34).fork();
                for (var i = 0; i < message.intParams.length; ++i)
                    writer.int32(message.intParams[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified STC_BATTLE_STATUS message, length delimited. Does not implicitly {@link Hit.STC_BATTLE_STATUS.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Hit.STC_BATTLE_STATUS
         * @static
         * @param {Hit.ISTC_BATTLE_STATUS} message STC_BATTLE_STATUS message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        STC_BATTLE_STATUS.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a STC_BATTLE_STATUS message from the specified reader or buffer.
         * @function decode
         * @memberof Hit.STC_BATTLE_STATUS
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Hit.STC_BATTLE_STATUS} STC_BATTLE_STATUS
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        STC_BATTLE_STATUS.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Hit.STC_BATTLE_STATUS();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.uint32();
                    break;
                case 2:
                    message.t = reader.int32();
                    break;
                case 3:
                    message.act = reader.int32();
                    break;
                case 4:
                    if (!(message.intParams && message.intParams.length))
                        message.intParams = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.intParams.push(reader.int32());
                    } else
                        message.intParams.push(reader.int32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a STC_BATTLE_STATUS message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Hit.STC_BATTLE_STATUS
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Hit.STC_BATTLE_STATUS} STC_BATTLE_STATUS
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        STC_BATTLE_STATUS.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a STC_BATTLE_STATUS message.
         * @function verify
         * @memberof Hit.STC_BATTLE_STATUS
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        STC_BATTLE_STATUS.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid))
                    return "uid: integer expected";
            if (message.t != null && message.hasOwnProperty("t"))
                switch (message.t) {
                default:
                    return "t: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                    break;
                }
            if (message.act != null && message.hasOwnProperty("act"))
                switch (message.act) {
                default:
                    return "act: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.intParams != null && message.hasOwnProperty("intParams")) {
                if (!Array.isArray(message.intParams))
                    return "intParams: array expected";
                for (var i = 0; i < message.intParams.length; ++i)
                    if (!$util.isInteger(message.intParams[i]))
                        return "intParams: integer[] expected";
            }
            return null;
        };

        /**
         * Creates a STC_BATTLE_STATUS message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Hit.STC_BATTLE_STATUS
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Hit.STC_BATTLE_STATUS} STC_BATTLE_STATUS
         */
        STC_BATTLE_STATUS.fromObject = function fromObject(object) {
            if (object instanceof $root.Hit.STC_BATTLE_STATUS)
                return object;
            var message = new $root.Hit.STC_BATTLE_STATUS();
            if (object.uid != null)
                message.uid = object.uid >>> 0;
            switch (object.t) {
            case "EBST_NONE":
            case 0:
                message.t = 0;
                break;
            case "EBST_BURN":
            case 1:
                message.t = 1;
                break;
            case "EBST_FREEZE":
            case 2:
                message.t = 2;
                break;
            case "EBST_PARALYSIS":
            case 3:
                message.t = 3;
                break;
            case "EBST_POISON":
            case 4:
                message.t = 4;
                break;
            case "EBST_BADLY_POISONED":
            case 5:
                message.t = 5;
                break;
            case "EBST_SLEEP":
            case 6:
                message.t = 6;
                break;
            }
            switch (object.act) {
            case "EBSA_ADD":
            case 0:
                message.act = 0;
                break;
            case "EBSA_REMOVE":
            case 1:
                message.act = 1;
                break;
            case "EBSA_DMG":
            case 2:
                message.act = 2;
                break;
            case "EBSA_NO_MOVE":
            case 3:
                message.act = 3;
                break;
            }
            if (object.intParams) {
                if (!Array.isArray(object.intParams))
                    throw TypeError(".Hit.STC_BATTLE_STATUS.intParams: array expected");
                message.intParams = [];
                for (var i = 0; i < object.intParams.length; ++i)
                    message.intParams[i] = object.intParams[i] | 0;
            }
            return message;
        };

        /**
         * Creates a plain object from a STC_BATTLE_STATUS message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Hit.STC_BATTLE_STATUS
         * @static
         * @param {Hit.STC_BATTLE_STATUS} message STC_BATTLE_STATUS
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        STC_BATTLE_STATUS.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.intParams = [];
            if (options.defaults) {
                object.uid = 0;
                object.t = options.enums === String ? "EBST_NONE" : 0;
                object.act = options.enums === String ? "EBSA_ADD" : 0;
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            if (message.t != null && message.hasOwnProperty("t"))
                object.t = options.enums === String ? $root.Hit.EBATTLE_STATUS_TYPE[message.t] : message.t;
            if (message.act != null && message.hasOwnProperty("act"))
                object.act = options.enums === String ? $root.Hit.EBATTLE_STATUS_ACTION[message.act] : message.act;
            if (message.intParams && message.intParams.length) {
                object.intParams = [];
                for (var j = 0; j < message.intParams.length; ++j)
                    object.intParams[j] = message.intParams[j];
            }
            return object;
        };

        /**
         * Converts this STC_BATTLE_STATUS to JSON.
         * @function toJSON
         * @memberof Hit.STC_BATTLE_STATUS
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        STC_BATTLE_STATUS.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return STC_BATTLE_STATUS;
    })();

    /**
     * EBATTLE_WEATHER_ACTION enum.
     * @name Hit.EBATTLE_WEATHER_ACTION
     * @enum {string}
     * @property {number} EBWA_CHANGE=0 EBWA_CHANGE value
     * @property {number} EBWA_DMG=1 EBWA_DMG value
     */
    Hit.EBATTLE_WEATHER_ACTION = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "EBWA_CHANGE"] = 0;
        values[valuesById[1] = "EBWA_DMG"] = 1;
        return values;
    })();

    Hit.STC_BATTLE_WEATHER = (function() {

        /**
         * Properties of a STC_BATTLE_WEATHER.
         * @memberof Hit
         * @interface ISTC_BATTLE_WEATHER
         * @property {number|null} [uid] STC_BATTLE_WEATHER uid
         * @property {Hit.EBATTLE_WEATHER|null} [weather] STC_BATTLE_WEATHER weather
         * @property {Hit.EBATTLE_WEATHER_ACTION|null} [act] STC_BATTLE_WEATHER act
         * @property {Array.<number>|null} [intParams] STC_BATTLE_WEATHER intParams
         */

        /**
         * Constructs a new STC_BATTLE_WEATHER.
         * @memberof Hit
         * @classdesc Represents a STC_BATTLE_WEATHER.
         * @implements ISTC_BATTLE_WEATHER
         * @constructor
         * @param {Hit.ISTC_BATTLE_WEATHER=} [properties] Properties to set
         */
        function STC_BATTLE_WEATHER(properties) {
            this.intParams = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * STC_BATTLE_WEATHER uid.
         * @member {number} uid
         * @memberof Hit.STC_BATTLE_WEATHER
         * @instance
         */
        STC_BATTLE_WEATHER.prototype.uid = 0;

        /**
         * STC_BATTLE_WEATHER weather.
         * @member {Hit.EBATTLE_WEATHER} weather
         * @memberof Hit.STC_BATTLE_WEATHER
         * @instance
         */
        STC_BATTLE_WEATHER.prototype.weather = 0;

        /**
         * STC_BATTLE_WEATHER act.
         * @member {Hit.EBATTLE_WEATHER_ACTION} act
         * @memberof Hit.STC_BATTLE_WEATHER
         * @instance
         */
        STC_BATTLE_WEATHER.prototype.act = 0;

        /**
         * STC_BATTLE_WEATHER intParams.
         * @member {Array.<number>} intParams
         * @memberof Hit.STC_BATTLE_WEATHER
         * @instance
         */
        STC_BATTLE_WEATHER.prototype.intParams = $util.emptyArray;

        /**
         * Creates a new STC_BATTLE_WEATHER instance using the specified properties.
         * @function create
         * @memberof Hit.STC_BATTLE_WEATHER
         * @static
         * @param {Hit.ISTC_BATTLE_WEATHER=} [properties] Properties to set
         * @returns {Hit.STC_BATTLE_WEATHER} STC_BATTLE_WEATHER instance
         */
        STC_BATTLE_WEATHER.create = function create(properties) {
            return new STC_BATTLE_WEATHER(properties);
        };

        /**
         * Encodes the specified STC_BATTLE_WEATHER message. Does not implicitly {@link Hit.STC_BATTLE_WEATHER.verify|verify} messages.
         * @function encode
         * @memberof Hit.STC_BATTLE_WEATHER
         * @static
         * @param {Hit.ISTC_BATTLE_WEATHER} message STC_BATTLE_WEATHER message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        STC_BATTLE_WEATHER.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.uid);
            if (message.weather != null && message.hasOwnProperty("weather"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.weather);
            if (message.act != null && message.hasOwnProperty("act"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.act);
            if (message.intParams != null && message.intParams.length) {
                writer.uint32(/* id 4, wireType 2 =*/34).fork();
                for (var i = 0; i < message.intParams.length; ++i)
                    writer.int32(message.intParams[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified STC_BATTLE_WEATHER message, length delimited. Does not implicitly {@link Hit.STC_BATTLE_WEATHER.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Hit.STC_BATTLE_WEATHER
         * @static
         * @param {Hit.ISTC_BATTLE_WEATHER} message STC_BATTLE_WEATHER message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        STC_BATTLE_WEATHER.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a STC_BATTLE_WEATHER message from the specified reader or buffer.
         * @function decode
         * @memberof Hit.STC_BATTLE_WEATHER
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Hit.STC_BATTLE_WEATHER} STC_BATTLE_WEATHER
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        STC_BATTLE_WEATHER.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Hit.STC_BATTLE_WEATHER();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.uint32();
                    break;
                case 2:
                    message.weather = reader.int32();
                    break;
                case 3:
                    message.act = reader.int32();
                    break;
                case 4:
                    if (!(message.intParams && message.intParams.length))
                        message.intParams = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.intParams.push(reader.int32());
                    } else
                        message.intParams.push(reader.int32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a STC_BATTLE_WEATHER message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Hit.STC_BATTLE_WEATHER
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Hit.STC_BATTLE_WEATHER} STC_BATTLE_WEATHER
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        STC_BATTLE_WEATHER.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a STC_BATTLE_WEATHER message.
         * @function verify
         * @memberof Hit.STC_BATTLE_WEATHER
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        STC_BATTLE_WEATHER.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid))
                    return "uid: integer expected";
            if (message.weather != null && message.hasOwnProperty("weather"))
                switch (message.weather) {
                default:
                    return "weather: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                    break;
                }
            if (message.act != null && message.hasOwnProperty("act"))
                switch (message.act) {
                default:
                    return "act: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.intParams != null && message.hasOwnProperty("intParams")) {
                if (!Array.isArray(message.intParams))
                    return "intParams: array expected";
                for (var i = 0; i < message.intParams.length; ++i)
                    if (!$util.isInteger(message.intParams[i]))
                        return "intParams: integer[] expected";
            }
            return null;
        };

        /**
         * Creates a STC_BATTLE_WEATHER message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Hit.STC_BATTLE_WEATHER
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Hit.STC_BATTLE_WEATHER} STC_BATTLE_WEATHER
         */
        STC_BATTLE_WEATHER.fromObject = function fromObject(object) {
            if (object instanceof $root.Hit.STC_BATTLE_WEATHER)
                return object;
            var message = new $root.Hit.STC_BATTLE_WEATHER();
            if (object.uid != null)
                message.uid = object.uid >>> 0;
            switch (object.weather) {
            case "EBW_CLEAR_SKIES":
            case 0:
                message.weather = 0;
                break;
            case "EBW_HARSH_SUNLIGHT":
            case 1:
                message.weather = 1;
                break;
            case "EBW_RAIN":
            case 2:
                message.weather = 2;
                break;
            case "EBW_SANDSTORM":
            case 3:
                message.weather = 3;
                break;
            case "EBW_HAIL":
            case 4:
                message.weather = 4;
                break;
            case "EBW_FOG":
            case 5:
                message.weather = 5;
                break;
            case "EBW_MYSTERIOUS_AIR_CURRENT":
            case 6:
                message.weather = 6;
                break;
            }
            switch (object.act) {
            case "EBWA_CHANGE":
            case 0:
                message.act = 0;
                break;
            case "EBWA_DMG":
            case 1:
                message.act = 1;
                break;
            }
            if (object.intParams) {
                if (!Array.isArray(object.intParams))
                    throw TypeError(".Hit.STC_BATTLE_WEATHER.intParams: array expected");
                message.intParams = [];
                for (var i = 0; i < object.intParams.length; ++i)
                    message.intParams[i] = object.intParams[i] | 0;
            }
            return message;
        };

        /**
         * Creates a plain object from a STC_BATTLE_WEATHER message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Hit.STC_BATTLE_WEATHER
         * @static
         * @param {Hit.STC_BATTLE_WEATHER} message STC_BATTLE_WEATHER
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        STC_BATTLE_WEATHER.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.intParams = [];
            if (options.defaults) {
                object.uid = 0;
                object.weather = options.enums === String ? "EBW_CLEAR_SKIES" : 0;
                object.act = options.enums === String ? "EBWA_CHANGE" : 0;
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            if (message.weather != null && message.hasOwnProperty("weather"))
                object.weather = options.enums === String ? $root.Hit.EBATTLE_WEATHER[message.weather] : message.weather;
            if (message.act != null && message.hasOwnProperty("act"))
                object.act = options.enums === String ? $root.Hit.EBATTLE_WEATHER_ACTION[message.act] : message.act;
            if (message.intParams && message.intParams.length) {
                object.intParams = [];
                for (var j = 0; j < message.intParams.length; ++j)
                    object.intParams[j] = message.intParams[j];
            }
            return object;
        };

        /**
         * Converts this STC_BATTLE_WEATHER to JSON.
         * @function toJSON
         * @memberof Hit.STC_BATTLE_WEATHER
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        STC_BATTLE_WEATHER.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return STC_BATTLE_WEATHER;
    })();

    /**
     * EBATTLE_ACT_TYPE enum.
     * @name Hit.EBATTLE_ACT_TYPE
     * @enum {string}
     * @property {number} EBAT_SWITCH=0 EBAT_SWITCH value
     * @property {number} EBAT_MOVE=1 EBAT_MOVE value
     * @property {number} EBAT_DEAD=2 EBAT_DEAD value
     * @property {number} EBAT_STATUS=3 EBAT_STATUS value
     * @property {number} EBAT_WEATHER=4 EBAT_WEATHER value
     */
    Hit.EBATTLE_ACT_TYPE = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "EBAT_SWITCH"] = 0;
        values[valuesById[1] = "EBAT_MOVE"] = 1;
        values[valuesById[2] = "EBAT_DEAD"] = 2;
        values[valuesById[3] = "EBAT_STATUS"] = 3;
        values[valuesById[4] = "EBAT_WEATHER"] = 4;
        return values;
    })();

    Hit.STC_BATTLE_ACTION = (function() {

        /**
         * Properties of a STC_BATTLE_ACTION.
         * @memberof Hit
         * @interface ISTC_BATTLE_ACTION
         * @property {Hit.EBATTLE_ACT_TYPE|null} [type] STC_BATTLE_ACTION type
         * @property {Hit.ISTC_BATTLE_SWITCH_POKE|null} ["switch"] STC_BATTLE_ACTION switch
         * @property {Hit.ISTC_BATTLE_MOVE|null} [move] STC_BATTLE_ACTION move
         * @property {Hit.ISTC_BATTLE_POKE_DEAD|null} [dead] STC_BATTLE_ACTION dead
         * @property {Hit.ISTC_BATTLE_STATUS|null} [status] STC_BATTLE_ACTION status
         * @property {Hit.ISTC_BATTLE_WEATHER|null} [weather] STC_BATTLE_ACTION weather
         */

        /**
         * Constructs a new STC_BATTLE_ACTION.
         * @memberof Hit
         * @classdesc Represents a STC_BATTLE_ACTION.
         * @implements ISTC_BATTLE_ACTION
         * @constructor
         * @param {Hit.ISTC_BATTLE_ACTION=} [properties] Properties to set
         */
        function STC_BATTLE_ACTION(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * STC_BATTLE_ACTION type.
         * @member {Hit.EBATTLE_ACT_TYPE} type
         * @memberof Hit.STC_BATTLE_ACTION
         * @instance
         */
        STC_BATTLE_ACTION.prototype.type = 0;

        /**
         * STC_BATTLE_ACTION switch.
         * @member {Hit.ISTC_BATTLE_SWITCH_POKE|null|undefined} switch
         * @memberof Hit.STC_BATTLE_ACTION
         * @instance
         */
        STC_BATTLE_ACTION.prototype["switch"] = null;

        /**
         * STC_BATTLE_ACTION move.
         * @member {Hit.ISTC_BATTLE_MOVE|null|undefined} move
         * @memberof Hit.STC_BATTLE_ACTION
         * @instance
         */
        STC_BATTLE_ACTION.prototype.move = null;

        /**
         * STC_BATTLE_ACTION dead.
         * @member {Hit.ISTC_BATTLE_POKE_DEAD|null|undefined} dead
         * @memberof Hit.STC_BATTLE_ACTION
         * @instance
         */
        STC_BATTLE_ACTION.prototype.dead = null;

        /**
         * STC_BATTLE_ACTION status.
         * @member {Hit.ISTC_BATTLE_STATUS|null|undefined} status
         * @memberof Hit.STC_BATTLE_ACTION
         * @instance
         */
        STC_BATTLE_ACTION.prototype.status = null;

        /**
         * STC_BATTLE_ACTION weather.
         * @member {Hit.ISTC_BATTLE_WEATHER|null|undefined} weather
         * @memberof Hit.STC_BATTLE_ACTION
         * @instance
         */
        STC_BATTLE_ACTION.prototype.weather = null;

        /**
         * Creates a new STC_BATTLE_ACTION instance using the specified properties.
         * @function create
         * @memberof Hit.STC_BATTLE_ACTION
         * @static
         * @param {Hit.ISTC_BATTLE_ACTION=} [properties] Properties to set
         * @returns {Hit.STC_BATTLE_ACTION} STC_BATTLE_ACTION instance
         */
        STC_BATTLE_ACTION.create = function create(properties) {
            return new STC_BATTLE_ACTION(properties);
        };

        /**
         * Encodes the specified STC_BATTLE_ACTION message. Does not implicitly {@link Hit.STC_BATTLE_ACTION.verify|verify} messages.
         * @function encode
         * @memberof Hit.STC_BATTLE_ACTION
         * @static
         * @param {Hit.ISTC_BATTLE_ACTION} message STC_BATTLE_ACTION message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        STC_BATTLE_ACTION.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message["switch"] != null && message.hasOwnProperty("switch"))
                $root.Hit.STC_BATTLE_SWITCH_POKE.encode(message["switch"], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.move != null && message.hasOwnProperty("move"))
                $root.Hit.STC_BATTLE_MOVE.encode(message.move, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.dead != null && message.hasOwnProperty("dead"))
                $root.Hit.STC_BATTLE_POKE_DEAD.encode(message.dead, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.status != null && message.hasOwnProperty("status"))
                $root.Hit.STC_BATTLE_STATUS.encode(message.status, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.weather != null && message.hasOwnProperty("weather"))
                $root.Hit.STC_BATTLE_WEATHER.encode(message.weather, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified STC_BATTLE_ACTION message, length delimited. Does not implicitly {@link Hit.STC_BATTLE_ACTION.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Hit.STC_BATTLE_ACTION
         * @static
         * @param {Hit.ISTC_BATTLE_ACTION} message STC_BATTLE_ACTION message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        STC_BATTLE_ACTION.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a STC_BATTLE_ACTION message from the specified reader or buffer.
         * @function decode
         * @memberof Hit.STC_BATTLE_ACTION
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Hit.STC_BATTLE_ACTION} STC_BATTLE_ACTION
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        STC_BATTLE_ACTION.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Hit.STC_BATTLE_ACTION();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message["switch"] = $root.Hit.STC_BATTLE_SWITCH_POKE.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.move = $root.Hit.STC_BATTLE_MOVE.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.dead = $root.Hit.STC_BATTLE_POKE_DEAD.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.status = $root.Hit.STC_BATTLE_STATUS.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.weather = $root.Hit.STC_BATTLE_WEATHER.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a STC_BATTLE_ACTION message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Hit.STC_BATTLE_ACTION
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Hit.STC_BATTLE_ACTION} STC_BATTLE_ACTION
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        STC_BATTLE_ACTION.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a STC_BATTLE_ACTION message.
         * @function verify
         * @memberof Hit.STC_BATTLE_ACTION
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        STC_BATTLE_ACTION.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            if (message["switch"] != null && message.hasOwnProperty("switch")) {
                var error = $root.Hit.STC_BATTLE_SWITCH_POKE.verify(message["switch"]);
                if (error)
                    return "switch." + error;
            }
            if (message.move != null && message.hasOwnProperty("move")) {
                var error = $root.Hit.STC_BATTLE_MOVE.verify(message.move);
                if (error)
                    return "move." + error;
            }
            if (message.dead != null && message.hasOwnProperty("dead")) {
                var error = $root.Hit.STC_BATTLE_POKE_DEAD.verify(message.dead);
                if (error)
                    return "dead." + error;
            }
            if (message.status != null && message.hasOwnProperty("status")) {
                var error = $root.Hit.STC_BATTLE_STATUS.verify(message.status);
                if (error)
                    return "status." + error;
            }
            if (message.weather != null && message.hasOwnProperty("weather")) {
                var error = $root.Hit.STC_BATTLE_WEATHER.verify(message.weather);
                if (error)
                    return "weather." + error;
            }
            return null;
        };

        /**
         * Creates a STC_BATTLE_ACTION message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Hit.STC_BATTLE_ACTION
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Hit.STC_BATTLE_ACTION} STC_BATTLE_ACTION
         */
        STC_BATTLE_ACTION.fromObject = function fromObject(object) {
            if (object instanceof $root.Hit.STC_BATTLE_ACTION)
                return object;
            var message = new $root.Hit.STC_BATTLE_ACTION();
            switch (object.type) {
            case "EBAT_SWITCH":
            case 0:
                message.type = 0;
                break;
            case "EBAT_MOVE":
            case 1:
                message.type = 1;
                break;
            case "EBAT_DEAD":
            case 2:
                message.type = 2;
                break;
            case "EBAT_STATUS":
            case 3:
                message.type = 3;
                break;
            case "EBAT_WEATHER":
            case 4:
                message.type = 4;
                break;
            }
            if (object["switch"] != null) {
                if (typeof object["switch"] !== "object")
                    throw TypeError(".Hit.STC_BATTLE_ACTION.switch: object expected");
                message["switch"] = $root.Hit.STC_BATTLE_SWITCH_POKE.fromObject(object["switch"]);
            }
            if (object.move != null) {
                if (typeof object.move !== "object")
                    throw TypeError(".Hit.STC_BATTLE_ACTION.move: object expected");
                message.move = $root.Hit.STC_BATTLE_MOVE.fromObject(object.move);
            }
            if (object.dead != null) {
                if (typeof object.dead !== "object")
                    throw TypeError(".Hit.STC_BATTLE_ACTION.dead: object expected");
                message.dead = $root.Hit.STC_BATTLE_POKE_DEAD.fromObject(object.dead);
            }
            if (object.status != null) {
                if (typeof object.status !== "object")
                    throw TypeError(".Hit.STC_BATTLE_ACTION.status: object expected");
                message.status = $root.Hit.STC_BATTLE_STATUS.fromObject(object.status);
            }
            if (object.weather != null) {
                if (typeof object.weather !== "object")
                    throw TypeError(".Hit.STC_BATTLE_ACTION.weather: object expected");
                message.weather = $root.Hit.STC_BATTLE_WEATHER.fromObject(object.weather);
            }
            return message;
        };

        /**
         * Creates a plain object from a STC_BATTLE_ACTION message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Hit.STC_BATTLE_ACTION
         * @static
         * @param {Hit.STC_BATTLE_ACTION} message STC_BATTLE_ACTION
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        STC_BATTLE_ACTION.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.type = options.enums === String ? "EBAT_SWITCH" : 0;
                object["switch"] = null;
                object.move = null;
                object.dead = null;
                object.status = null;
                object.weather = null;
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.Hit.EBATTLE_ACT_TYPE[message.type] : message.type;
            if (message["switch"] != null && message.hasOwnProperty("switch"))
                object["switch"] = $root.Hit.STC_BATTLE_SWITCH_POKE.toObject(message["switch"], options);
            if (message.move != null && message.hasOwnProperty("move"))
                object.move = $root.Hit.STC_BATTLE_MOVE.toObject(message.move, options);
            if (message.dead != null && message.hasOwnProperty("dead"))
                object.dead = $root.Hit.STC_BATTLE_POKE_DEAD.toObject(message.dead, options);
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = $root.Hit.STC_BATTLE_STATUS.toObject(message.status, options);
            if (message.weather != null && message.hasOwnProperty("weather"))
                object.weather = $root.Hit.STC_BATTLE_WEATHER.toObject(message.weather, options);
            return object;
        };

        /**
         * Converts this STC_BATTLE_ACTION to JSON.
         * @function toJSON
         * @memberof Hit.STC_BATTLE_ACTION
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        STC_BATTLE_ACTION.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return STC_BATTLE_ACTION;
    })();

    /**
     * E_REWARD_TYPE enum.
     * @name Hit.E_REWARD_TYPE
     * @enum {string}
     * @property {number} ERT_RES=0 ERT_RES value
     * @property {number} ERT_BAG_ITEM=1 ERT_BAG_ITEM value
     * @property {number} ERT_POKE=2 ERT_POKE value
     */
    Hit.E_REWARD_TYPE = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "ERT_RES"] = 0;
        values[valuesById[1] = "ERT_BAG_ITEM"] = 1;
        values[valuesById[2] = "ERT_POKE"] = 2;
        return values;
    })();

    Hit.STC_REWARD_ENTRY = (function() {

        /**
         * Properties of a STC_REWARD_ENTRY.
         * @memberof Hit
         * @interface ISTC_REWARD_ENTRY
         * @property {Hit.E_REWARD_TYPE|null} [type] STC_REWARD_ENTRY type
         * @property {number|null} [id] STC_REWARD_ENTRY id
         * @property {number|null} [cnt] STC_REWARD_ENTRY cnt
         */

        /**
         * Constructs a new STC_REWARD_ENTRY.
         * @memberof Hit
         * @classdesc Represents a STC_REWARD_ENTRY.
         * @implements ISTC_REWARD_ENTRY
         * @constructor
         * @param {Hit.ISTC_REWARD_ENTRY=} [properties] Properties to set
         */
        function STC_REWARD_ENTRY(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * STC_REWARD_ENTRY type.
         * @member {Hit.E_REWARD_TYPE} type
         * @memberof Hit.STC_REWARD_ENTRY
         * @instance
         */
        STC_REWARD_ENTRY.prototype.type = 0;

        /**
         * STC_REWARD_ENTRY id.
         * @member {number} id
         * @memberof Hit.STC_REWARD_ENTRY
         * @instance
         */
        STC_REWARD_ENTRY.prototype.id = 0;

        /**
         * STC_REWARD_ENTRY cnt.
         * @member {number} cnt
         * @memberof Hit.STC_REWARD_ENTRY
         * @instance
         */
        STC_REWARD_ENTRY.prototype.cnt = 0;

        /**
         * Creates a new STC_REWARD_ENTRY instance using the specified properties.
         * @function create
         * @memberof Hit.STC_REWARD_ENTRY
         * @static
         * @param {Hit.ISTC_REWARD_ENTRY=} [properties] Properties to set
         * @returns {Hit.STC_REWARD_ENTRY} STC_REWARD_ENTRY instance
         */
        STC_REWARD_ENTRY.create = function create(properties) {
            return new STC_REWARD_ENTRY(properties);
        };

        /**
         * Encodes the specified STC_REWARD_ENTRY message. Does not implicitly {@link Hit.STC_REWARD_ENTRY.verify|verify} messages.
         * @function encode
         * @memberof Hit.STC_REWARD_ENTRY
         * @static
         * @param {Hit.ISTC_REWARD_ENTRY} message STC_REWARD_ENTRY message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        STC_REWARD_ENTRY.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.id);
            if (message.cnt != null && message.hasOwnProperty("cnt"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.cnt);
            return writer;
        };

        /**
         * Encodes the specified STC_REWARD_ENTRY message, length delimited. Does not implicitly {@link Hit.STC_REWARD_ENTRY.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Hit.STC_REWARD_ENTRY
         * @static
         * @param {Hit.ISTC_REWARD_ENTRY} message STC_REWARD_ENTRY message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        STC_REWARD_ENTRY.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a STC_REWARD_ENTRY message from the specified reader or buffer.
         * @function decode
         * @memberof Hit.STC_REWARD_ENTRY
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Hit.STC_REWARD_ENTRY} STC_REWARD_ENTRY
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        STC_REWARD_ENTRY.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Hit.STC_REWARD_ENTRY();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.id = reader.int32();
                    break;
                case 3:
                    message.cnt = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a STC_REWARD_ENTRY message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Hit.STC_REWARD_ENTRY
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Hit.STC_REWARD_ENTRY} STC_REWARD_ENTRY
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        STC_REWARD_ENTRY.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a STC_REWARD_ENTRY message.
         * @function verify
         * @memberof Hit.STC_REWARD_ENTRY
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        STC_REWARD_ENTRY.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.cnt != null && message.hasOwnProperty("cnt"))
                if (!$util.isInteger(message.cnt))
                    return "cnt: integer expected";
            return null;
        };

        /**
         * Creates a STC_REWARD_ENTRY message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Hit.STC_REWARD_ENTRY
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Hit.STC_REWARD_ENTRY} STC_REWARD_ENTRY
         */
        STC_REWARD_ENTRY.fromObject = function fromObject(object) {
            if (object instanceof $root.Hit.STC_REWARD_ENTRY)
                return object;
            var message = new $root.Hit.STC_REWARD_ENTRY();
            switch (object.type) {
            case "ERT_RES":
            case 0:
                message.type = 0;
                break;
            case "ERT_BAG_ITEM":
            case 1:
                message.type = 1;
                break;
            case "ERT_POKE":
            case 2:
                message.type = 2;
                break;
            }
            if (object.id != null)
                message.id = object.id | 0;
            if (object.cnt != null)
                message.cnt = object.cnt | 0;
            return message;
        };

        /**
         * Creates a plain object from a STC_REWARD_ENTRY message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Hit.STC_REWARD_ENTRY
         * @static
         * @param {Hit.STC_REWARD_ENTRY} message STC_REWARD_ENTRY
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        STC_REWARD_ENTRY.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.type = options.enums === String ? "ERT_RES" : 0;
                object.id = 0;
                object.cnt = 0;
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.Hit.E_REWARD_TYPE[message.type] : message.type;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.cnt != null && message.hasOwnProperty("cnt"))
                object.cnt = message.cnt;
            return object;
        };

        /**
         * Converts this STC_REWARD_ENTRY to JSON.
         * @function toJSON
         * @memberof Hit.STC_REWARD_ENTRY
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        STC_REWARD_ENTRY.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return STC_REWARD_ENTRY;
    })();

    Hit.STC_REWARD = (function() {

        /**
         * Properties of a STC_REWARD.
         * @memberof Hit
         * @interface ISTC_REWARD
         * @property {Array.<Hit.ISTC_REWARD_ENTRY>|null} [rwds] STC_REWARD rwds
         */

        /**
         * Constructs a new STC_REWARD.
         * @memberof Hit
         * @classdesc Represents a STC_REWARD.
         * @implements ISTC_REWARD
         * @constructor
         * @param {Hit.ISTC_REWARD=} [properties] Properties to set
         */
        function STC_REWARD(properties) {
            this.rwds = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * STC_REWARD rwds.
         * @member {Array.<Hit.ISTC_REWARD_ENTRY>} rwds
         * @memberof Hit.STC_REWARD
         * @instance
         */
        STC_REWARD.prototype.rwds = $util.emptyArray;

        /**
         * Creates a new STC_REWARD instance using the specified properties.
         * @function create
         * @memberof Hit.STC_REWARD
         * @static
         * @param {Hit.ISTC_REWARD=} [properties] Properties to set
         * @returns {Hit.STC_REWARD} STC_REWARD instance
         */
        STC_REWARD.create = function create(properties) {
            return new STC_REWARD(properties);
        };

        /**
         * Encodes the specified STC_REWARD message. Does not implicitly {@link Hit.STC_REWARD.verify|verify} messages.
         * @function encode
         * @memberof Hit.STC_REWARD
         * @static
         * @param {Hit.ISTC_REWARD} message STC_REWARD message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        STC_REWARD.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.rwds != null && message.rwds.length)
                for (var i = 0; i < message.rwds.length; ++i)
                    $root.Hit.STC_REWARD_ENTRY.encode(message.rwds[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified STC_REWARD message, length delimited. Does not implicitly {@link Hit.STC_REWARD.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Hit.STC_REWARD
         * @static
         * @param {Hit.ISTC_REWARD} message STC_REWARD message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        STC_REWARD.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a STC_REWARD message from the specified reader or buffer.
         * @function decode
         * @memberof Hit.STC_REWARD
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Hit.STC_REWARD} STC_REWARD
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        STC_REWARD.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Hit.STC_REWARD();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.rwds && message.rwds.length))
                        message.rwds = [];
                    message.rwds.push($root.Hit.STC_REWARD_ENTRY.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a STC_REWARD message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Hit.STC_REWARD
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Hit.STC_REWARD} STC_REWARD
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        STC_REWARD.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a STC_REWARD message.
         * @function verify
         * @memberof Hit.STC_REWARD
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        STC_REWARD.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.rwds != null && message.hasOwnProperty("rwds")) {
                if (!Array.isArray(message.rwds))
                    return "rwds: array expected";
                for (var i = 0; i < message.rwds.length; ++i) {
                    var error = $root.Hit.STC_REWARD_ENTRY.verify(message.rwds[i]);
                    if (error)
                        return "rwds." + error;
                }
            }
            return null;
        };

        /**
         * Creates a STC_REWARD message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Hit.STC_REWARD
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Hit.STC_REWARD} STC_REWARD
         */
        STC_REWARD.fromObject = function fromObject(object) {
            if (object instanceof $root.Hit.STC_REWARD)
                return object;
            var message = new $root.Hit.STC_REWARD();
            if (object.rwds) {
                if (!Array.isArray(object.rwds))
                    throw TypeError(".Hit.STC_REWARD.rwds: array expected");
                message.rwds = [];
                for (var i = 0; i < object.rwds.length; ++i) {
                    if (typeof object.rwds[i] !== "object")
                        throw TypeError(".Hit.STC_REWARD.rwds: object expected");
                    message.rwds[i] = $root.Hit.STC_REWARD_ENTRY.fromObject(object.rwds[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a STC_REWARD message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Hit.STC_REWARD
         * @static
         * @param {Hit.STC_REWARD} message STC_REWARD
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        STC_REWARD.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.rwds = [];
            if (message.rwds && message.rwds.length) {
                object.rwds = [];
                for (var j = 0; j < message.rwds.length; ++j)
                    object.rwds[j] = $root.Hit.STC_REWARD_ENTRY.toObject(message.rwds[j], options);
            }
            return object;
        };

        /**
         * Converts this STC_REWARD to JSON.
         * @function toJSON
         * @memberof Hit.STC_REWARD
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        STC_REWARD.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return STC_REWARD;
    })();

    Hit.ItemBagEntry = (function() {

        /**
         * Properties of an ItemBagEntry.
         * @memberof Hit
         * @interface IItemBagEntry
         * @property {number|null} [uid] ItemBagEntry uid
         * @property {number|null} [id] ItemBagEntry id
         * @property {number|null} [cnt] ItemBagEntry cnt
         */

        /**
         * Constructs a new ItemBagEntry.
         * @memberof Hit
         * @classdesc Represents an ItemBagEntry.
         * @implements IItemBagEntry
         * @constructor
         * @param {Hit.IItemBagEntry=} [properties] Properties to set
         */
        function ItemBagEntry(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ItemBagEntry uid.
         * @member {number} uid
         * @memberof Hit.ItemBagEntry
         * @instance
         */
        ItemBagEntry.prototype.uid = 0;

        /**
         * ItemBagEntry id.
         * @member {number} id
         * @memberof Hit.ItemBagEntry
         * @instance
         */
        ItemBagEntry.prototype.id = 0;

        /**
         * ItemBagEntry cnt.
         * @member {number} cnt
         * @memberof Hit.ItemBagEntry
         * @instance
         */
        ItemBagEntry.prototype.cnt = 0;

        /**
         * Creates a new ItemBagEntry instance using the specified properties.
         * @function create
         * @memberof Hit.ItemBagEntry
         * @static
         * @param {Hit.IItemBagEntry=} [properties] Properties to set
         * @returns {Hit.ItemBagEntry} ItemBagEntry instance
         */
        ItemBagEntry.create = function create(properties) {
            return new ItemBagEntry(properties);
        };

        /**
         * Encodes the specified ItemBagEntry message. Does not implicitly {@link Hit.ItemBagEntry.verify|verify} messages.
         * @function encode
         * @memberof Hit.ItemBagEntry
         * @static
         * @param {Hit.IItemBagEntry} message ItemBagEntry message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ItemBagEntry.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.uid);
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.id);
            if (message.cnt != null && message.hasOwnProperty("cnt"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.cnt);
            return writer;
        };

        /**
         * Encodes the specified ItemBagEntry message, length delimited. Does not implicitly {@link Hit.ItemBagEntry.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Hit.ItemBagEntry
         * @static
         * @param {Hit.IItemBagEntry} message ItemBagEntry message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ItemBagEntry.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ItemBagEntry message from the specified reader or buffer.
         * @function decode
         * @memberof Hit.ItemBagEntry
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Hit.ItemBagEntry} ItemBagEntry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ItemBagEntry.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Hit.ItemBagEntry();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.int32();
                    break;
                case 2:
                    message.id = reader.int32();
                    break;
                case 3:
                    message.cnt = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ItemBagEntry message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Hit.ItemBagEntry
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Hit.ItemBagEntry} ItemBagEntry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ItemBagEntry.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ItemBagEntry message.
         * @function verify
         * @memberof Hit.ItemBagEntry
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ItemBagEntry.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid))
                    return "uid: integer expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.cnt != null && message.hasOwnProperty("cnt"))
                if (!$util.isInteger(message.cnt))
                    return "cnt: integer expected";
            return null;
        };

        /**
         * Creates an ItemBagEntry message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Hit.ItemBagEntry
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Hit.ItemBagEntry} ItemBagEntry
         */
        ItemBagEntry.fromObject = function fromObject(object) {
            if (object instanceof $root.Hit.ItemBagEntry)
                return object;
            var message = new $root.Hit.ItemBagEntry();
            if (object.uid != null)
                message.uid = object.uid | 0;
            if (object.id != null)
                message.id = object.id | 0;
            if (object.cnt != null)
                message.cnt = object.cnt | 0;
            return message;
        };

        /**
         * Creates a plain object from an ItemBagEntry message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Hit.ItemBagEntry
         * @static
         * @param {Hit.ItemBagEntry} message ItemBagEntry
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ItemBagEntry.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.uid = 0;
                object.id = 0;
                object.cnt = 0;
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.cnt != null && message.hasOwnProperty("cnt"))
                object.cnt = message.cnt;
            return object;
        };

        /**
         * Converts this ItemBagEntry to JSON.
         * @function toJSON
         * @memberof Hit.ItemBagEntry
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ItemBagEntry.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ItemBagEntry;
    })();

    Hit.BagRes = (function() {

        /**
         * Properties of a BagRes.
         * @memberof Hit
         * @interface IBagRes
         * @property {number|null} [uid] BagRes uid
         * @property {number|null} [id] BagRes id
         */

        /**
         * Constructs a new BagRes.
         * @memberof Hit
         * @classdesc Represents a BagRes.
         * @implements IBagRes
         * @constructor
         * @param {Hit.IBagRes=} [properties] Properties to set
         */
        function BagRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BagRes uid.
         * @member {number} uid
         * @memberof Hit.BagRes
         * @instance
         */
        BagRes.prototype.uid = 0;

        /**
         * BagRes id.
         * @member {number} id
         * @memberof Hit.BagRes
         * @instance
         */
        BagRes.prototype.id = 0;

        /**
         * Creates a new BagRes instance using the specified properties.
         * @function create
         * @memberof Hit.BagRes
         * @static
         * @param {Hit.IBagRes=} [properties] Properties to set
         * @returns {Hit.BagRes} BagRes instance
         */
        BagRes.create = function create(properties) {
            return new BagRes(properties);
        };

        /**
         * Encodes the specified BagRes message. Does not implicitly {@link Hit.BagRes.verify|verify} messages.
         * @function encode
         * @memberof Hit.BagRes
         * @static
         * @param {Hit.IBagRes} message BagRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BagRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.uid);
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.id);
            return writer;
        };

        /**
         * Encodes the specified BagRes message, length delimited. Does not implicitly {@link Hit.BagRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Hit.BagRes
         * @static
         * @param {Hit.IBagRes} message BagRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BagRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BagRes message from the specified reader or buffer.
         * @function decode
         * @memberof Hit.BagRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Hit.BagRes} BagRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BagRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Hit.BagRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.int32();
                    break;
                case 2:
                    message.id = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BagRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Hit.BagRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Hit.BagRes} BagRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BagRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BagRes message.
         * @function verify
         * @memberof Hit.BagRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BagRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid))
                    return "uid: integer expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            return null;
        };

        /**
         * Creates a BagRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Hit.BagRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Hit.BagRes} BagRes
         */
        BagRes.fromObject = function fromObject(object) {
            if (object instanceof $root.Hit.BagRes)
                return object;
            var message = new $root.Hit.BagRes();
            if (object.uid != null)
                message.uid = object.uid | 0;
            if (object.id != null)
                message.id = object.id | 0;
            return message;
        };

        /**
         * Creates a plain object from a BagRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Hit.BagRes
         * @static
         * @param {Hit.BagRes} message BagRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BagRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.uid = 0;
                object.id = 0;
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            return object;
        };

        /**
         * Converts this BagRes to JSON.
         * @function toJSON
         * @memberof Hit.BagRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BagRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BagRes;
    })();

    Hit.ItemBag = (function() {

        /**
         * Properties of an ItemBag.
         * @memberof Hit
         * @interface IItemBag
         * @property {Array.<Hit.IItemBagEntry>|null} [items] ItemBag items
         * @property {number|null} [gold] ItemBag gold
         * @property {number|null} [diamond] ItemBag diamond
         * @property {Object.<string,Hit.IItemBagEntry>|null} [goods] ItemBag goods
         * @property {Object.<string,Hit.IBagRes>|null} [bags] ItemBag bags
         * @property {number|Long|null} [bigNum1] ItemBag bigNum1
         * @property {number|Long|null} [bigNum2] ItemBag bigNum2
         */

        /**
         * Constructs a new ItemBag.
         * @memberof Hit
         * @classdesc Represents an ItemBag.
         * @implements IItemBag
         * @constructor
         * @param {Hit.IItemBag=} [properties] Properties to set
         */
        function ItemBag(properties) {
            this.items = [];
            this.goods = {};
            this.bags = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ItemBag items.
         * @member {Array.<Hit.IItemBagEntry>} items
         * @memberof Hit.ItemBag
         * @instance
         */
        ItemBag.prototype.items = $util.emptyArray;

        /**
         * ItemBag gold.
         * @member {number} gold
         * @memberof Hit.ItemBag
         * @instance
         */
        ItemBag.prototype.gold = 0;

        /**
         * ItemBag diamond.
         * @member {number} diamond
         * @memberof Hit.ItemBag
         * @instance
         */
        ItemBag.prototype.diamond = 0;

        /**
         * ItemBag goods.
         * @member {Object.<string,Hit.IItemBagEntry>} goods
         * @memberof Hit.ItemBag
         * @instance
         */
        ItemBag.prototype.goods = $util.emptyObject;

        /**
         * ItemBag bags.
         * @member {Object.<string,Hit.IBagRes>} bags
         * @memberof Hit.ItemBag
         * @instance
         */
        ItemBag.prototype.bags = $util.emptyObject;

        /**
         * ItemBag bigNum1.
         * @member {number|Long} bigNum1
         * @memberof Hit.ItemBag
         * @instance
         */
        ItemBag.prototype.bigNum1 = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ItemBag bigNum2.
         * @member {number|Long} bigNum2
         * @memberof Hit.ItemBag
         * @instance
         */
        ItemBag.prototype.bigNum2 = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new ItemBag instance using the specified properties.
         * @function create
         * @memberof Hit.ItemBag
         * @static
         * @param {Hit.IItemBag=} [properties] Properties to set
         * @returns {Hit.ItemBag} ItemBag instance
         */
        ItemBag.create = function create(properties) {
            return new ItemBag(properties);
        };

        /**
         * Encodes the specified ItemBag message. Does not implicitly {@link Hit.ItemBag.verify|verify} messages.
         * @function encode
         * @memberof Hit.ItemBag
         * @static
         * @param {Hit.IItemBag} message ItemBag message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ItemBag.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.items != null && message.items.length)
                for (var i = 0; i < message.items.length; ++i)
                    $root.Hit.ItemBagEntry.encode(message.items[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.gold != null && message.hasOwnProperty("gold"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.gold);
            if (message.diamond != null && message.hasOwnProperty("diamond"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.diamond);
            if (message.goods != null && message.hasOwnProperty("goods"))
                for (var keys = Object.keys(message.goods), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 4, wireType 2 =*/34).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                    $root.Hit.ItemBagEntry.encode(message.goods[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            if (message.bags != null && message.hasOwnProperty("bags"))
                for (var keys = Object.keys(message.bags), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 5, wireType 2 =*/42).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                    $root.Hit.BagRes.encode(message.bags[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            if (message.bigNum1 != null && message.hasOwnProperty("bigNum1"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.bigNum1);
            if (message.bigNum2 != null && message.hasOwnProperty("bigNum2"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint64(message.bigNum2);
            return writer;
        };

        /**
         * Encodes the specified ItemBag message, length delimited. Does not implicitly {@link Hit.ItemBag.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Hit.ItemBag
         * @static
         * @param {Hit.IItemBag} message ItemBag message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ItemBag.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ItemBag message from the specified reader or buffer.
         * @function decode
         * @memberof Hit.ItemBag
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Hit.ItemBag} ItemBag
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ItemBag.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Hit.ItemBag(), key;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.items && message.items.length))
                        message.items = [];
                    message.items.push($root.Hit.ItemBagEntry.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.gold = reader.int32();
                    break;
                case 3:
                    message.diamond = reader.int32();
                    break;
                case 4:
                    reader.skip().pos++;
                    if (message.goods === $util.emptyObject)
                        message.goods = {};
                    key = reader.int32();
                    reader.pos++;
                    message.goods[key] = $root.Hit.ItemBagEntry.decode(reader, reader.uint32());
                    break;
                case 5:
                    reader.skip().pos++;
                    if (message.bags === $util.emptyObject)
                        message.bags = {};
                    key = reader.string();
                    reader.pos++;
                    message.bags[key] = $root.Hit.BagRes.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.bigNum1 = reader.int64();
                    break;
                case 7:
                    message.bigNum2 = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ItemBag message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Hit.ItemBag
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Hit.ItemBag} ItemBag
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ItemBag.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ItemBag message.
         * @function verify
         * @memberof Hit.ItemBag
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ItemBag.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.items != null && message.hasOwnProperty("items")) {
                if (!Array.isArray(message.items))
                    return "items: array expected";
                for (var i = 0; i < message.items.length; ++i) {
                    var error = $root.Hit.ItemBagEntry.verify(message.items[i]);
                    if (error)
                        return "items." + error;
                }
            }
            if (message.gold != null && message.hasOwnProperty("gold"))
                if (!$util.isInteger(message.gold))
                    return "gold: integer expected";
            if (message.diamond != null && message.hasOwnProperty("diamond"))
                if (!$util.isInteger(message.diamond))
                    return "diamond: integer expected";
            if (message.goods != null && message.hasOwnProperty("goods")) {
                if (!$util.isObject(message.goods))
                    return "goods: object expected";
                var key = Object.keys(message.goods);
                for (var i = 0; i < key.length; ++i) {
                    if (!$util.key32Re.test(key[i]))
                        return "goods: integer key{k:int32} expected";
                    {
                        var error = $root.Hit.ItemBagEntry.verify(message.goods[key[i]]);
                        if (error)
                            return "goods." + error;
                    }
                }
            }
            if (message.bags != null && message.hasOwnProperty("bags")) {
                if (!$util.isObject(message.bags))
                    return "bags: object expected";
                var key = Object.keys(message.bags);
                for (var i = 0; i < key.length; ++i) {
                    var error = $root.Hit.BagRes.verify(message.bags[key[i]]);
                    if (error)
                        return "bags." + error;
                }
            }
            if (message.bigNum1 != null && message.hasOwnProperty("bigNum1"))
                if (!$util.isInteger(message.bigNum1) && !(message.bigNum1 && $util.isInteger(message.bigNum1.low) && $util.isInteger(message.bigNum1.high)))
                    return "bigNum1: integer|Long expected";
            if (message.bigNum2 != null && message.hasOwnProperty("bigNum2"))
                if (!$util.isInteger(message.bigNum2) && !(message.bigNum2 && $util.isInteger(message.bigNum2.low) && $util.isInteger(message.bigNum2.high)))
                    return "bigNum2: integer|Long expected";
            return null;
        };

        /**
         * Creates an ItemBag message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Hit.ItemBag
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Hit.ItemBag} ItemBag
         */
        ItemBag.fromObject = function fromObject(object) {
            if (object instanceof $root.Hit.ItemBag)
                return object;
            var message = new $root.Hit.ItemBag();
            if (object.items) {
                if (!Array.isArray(object.items))
                    throw TypeError(".Hit.ItemBag.items: array expected");
                message.items = [];
                for (var i = 0; i < object.items.length; ++i) {
                    if (typeof object.items[i] !== "object")
                        throw TypeError(".Hit.ItemBag.items: object expected");
                    message.items[i] = $root.Hit.ItemBagEntry.fromObject(object.items[i]);
                }
            }
            if (object.gold != null)
                message.gold = object.gold | 0;
            if (object.diamond != null)
                message.diamond = object.diamond | 0;
            if (object.goods) {
                if (typeof object.goods !== "object")
                    throw TypeError(".Hit.ItemBag.goods: object expected");
                message.goods = {};
                for (var keys = Object.keys(object.goods), i = 0; i < keys.length; ++i) {
                    if (typeof object.goods[keys[i]] !== "object")
                        throw TypeError(".Hit.ItemBag.goods: object expected");
                    message.goods[keys[i]] = $root.Hit.ItemBagEntry.fromObject(object.goods[keys[i]]);
                }
            }
            if (object.bags) {
                if (typeof object.bags !== "object")
                    throw TypeError(".Hit.ItemBag.bags: object expected");
                message.bags = {};
                for (var keys = Object.keys(object.bags), i = 0; i < keys.length; ++i) {
                    if (typeof object.bags[keys[i]] !== "object")
                        throw TypeError(".Hit.ItemBag.bags: object expected");
                    message.bags[keys[i]] = $root.Hit.BagRes.fromObject(object.bags[keys[i]]);
                }
            }
            if (object.bigNum1 != null)
                if ($util.Long)
                    (message.bigNum1 = $util.Long.fromValue(object.bigNum1)).unsigned = false;
                else if (typeof object.bigNum1 === "string")
                    message.bigNum1 = parseInt(object.bigNum1, 10);
                else if (typeof object.bigNum1 === "number")
                    message.bigNum1 = object.bigNum1;
                else if (typeof object.bigNum1 === "object")
                    message.bigNum1 = new $util.LongBits(object.bigNum1.low >>> 0, object.bigNum1.high >>> 0).toNumber();
            if (object.bigNum2 != null)
                if ($util.Long)
                    (message.bigNum2 = $util.Long.fromValue(object.bigNum2)).unsigned = true;
                else if (typeof object.bigNum2 === "string")
                    message.bigNum2 = parseInt(object.bigNum2, 10);
                else if (typeof object.bigNum2 === "number")
                    message.bigNum2 = object.bigNum2;
                else if (typeof object.bigNum2 === "object")
                    message.bigNum2 = new $util.LongBits(object.bigNum2.low >>> 0, object.bigNum2.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from an ItemBag message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Hit.ItemBag
         * @static
         * @param {Hit.ItemBag} message ItemBag
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ItemBag.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.items = [];
            if (options.objects || options.defaults) {
                object.goods = {};
                object.bags = {};
            }
            if (options.defaults) {
                object.gold = 0;
                object.diamond = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.bigNum1 = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.bigNum1 = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.bigNum2 = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.bigNum2 = options.longs === String ? "0" : 0;
            }
            if (message.items && message.items.length) {
                object.items = [];
                for (var j = 0; j < message.items.length; ++j)
                    object.items[j] = $root.Hit.ItemBagEntry.toObject(message.items[j], options);
            }
            if (message.gold != null && message.hasOwnProperty("gold"))
                object.gold = message.gold;
            if (message.diamond != null && message.hasOwnProperty("diamond"))
                object.diamond = message.diamond;
            var keys2;
            if (message.goods && (keys2 = Object.keys(message.goods)).length) {
                object.goods = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.goods[keys2[j]] = $root.Hit.ItemBagEntry.toObject(message.goods[keys2[j]], options);
            }
            if (message.bags && (keys2 = Object.keys(message.bags)).length) {
                object.bags = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.bags[keys2[j]] = $root.Hit.BagRes.toObject(message.bags[keys2[j]], options);
            }
            if (message.bigNum1 != null && message.hasOwnProperty("bigNum1"))
                if (typeof message.bigNum1 === "number")
                    object.bigNum1 = options.longs === String ? String(message.bigNum1) : message.bigNum1;
                else
                    object.bigNum1 = options.longs === String ? $util.Long.prototype.toString.call(message.bigNum1) : options.longs === Number ? new $util.LongBits(message.bigNum1.low >>> 0, message.bigNum1.high >>> 0).toNumber() : message.bigNum1;
            if (message.bigNum2 != null && message.hasOwnProperty("bigNum2"))
                if (typeof message.bigNum2 === "number")
                    object.bigNum2 = options.longs === String ? String(message.bigNum2) : message.bigNum2;
                else
                    object.bigNum2 = options.longs === String ? $util.Long.prototype.toString.call(message.bigNum2) : options.longs === Number ? new $util.LongBits(message.bigNum2.low >>> 0, message.bigNum2.high >>> 0).toNumber(true) : message.bigNum2;
            return object;
        };

        /**
         * Converts this ItemBag to JSON.
         * @function toJSON
         * @memberof Hit.ItemBag
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ItemBag.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ItemBag;
    })();

    Hit.CR_USE_ITEM = (function() {

        /**
         * Properties of a CR_USE_ITEM.
         * @memberof Hit
         * @interface ICR_USE_ITEM
         * @property {number|null} [itemUid] CR_USE_ITEM itemUid
         */

        /**
         * Constructs a new CR_USE_ITEM.
         * @memberof Hit
         * @classdesc Represents a CR_USE_ITEM.
         * @implements ICR_USE_ITEM
         * @constructor
         * @param {Hit.ICR_USE_ITEM=} [properties] Properties to set
         */
        function CR_USE_ITEM(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CR_USE_ITEM itemUid.
         * @member {number} itemUid
         * @memberof Hit.CR_USE_ITEM
         * @instance
         */
        CR_USE_ITEM.prototype.itemUid = 0;

        /**
         * Creates a new CR_USE_ITEM instance using the specified properties.
         * @function create
         * @memberof Hit.CR_USE_ITEM
         * @static
         * @param {Hit.ICR_USE_ITEM=} [properties] Properties to set
         * @returns {Hit.CR_USE_ITEM} CR_USE_ITEM instance
         */
        CR_USE_ITEM.create = function create(properties) {
            return new CR_USE_ITEM(properties);
        };

        /**
         * Encodes the specified CR_USE_ITEM message. Does not implicitly {@link Hit.CR_USE_ITEM.verify|verify} messages.
         * @function encode
         * @memberof Hit.CR_USE_ITEM
         * @static
         * @param {Hit.ICR_USE_ITEM} message CR_USE_ITEM message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CR_USE_ITEM.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.itemUid != null && message.hasOwnProperty("itemUid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.itemUid);
            return writer;
        };

        /**
         * Encodes the specified CR_USE_ITEM message, length delimited. Does not implicitly {@link Hit.CR_USE_ITEM.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Hit.CR_USE_ITEM
         * @static
         * @param {Hit.ICR_USE_ITEM} message CR_USE_ITEM message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CR_USE_ITEM.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CR_USE_ITEM message from the specified reader or buffer.
         * @function decode
         * @memberof Hit.CR_USE_ITEM
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Hit.CR_USE_ITEM} CR_USE_ITEM
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CR_USE_ITEM.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Hit.CR_USE_ITEM();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.itemUid = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CR_USE_ITEM message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Hit.CR_USE_ITEM
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Hit.CR_USE_ITEM} CR_USE_ITEM
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CR_USE_ITEM.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CR_USE_ITEM message.
         * @function verify
         * @memberof Hit.CR_USE_ITEM
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CR_USE_ITEM.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.itemUid != null && message.hasOwnProperty("itemUid"))
                if (!$util.isInteger(message.itemUid))
                    return "itemUid: integer expected";
            return null;
        };

        /**
         * Creates a CR_USE_ITEM message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Hit.CR_USE_ITEM
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Hit.CR_USE_ITEM} CR_USE_ITEM
         */
        CR_USE_ITEM.fromObject = function fromObject(object) {
            if (object instanceof $root.Hit.CR_USE_ITEM)
                return object;
            var message = new $root.Hit.CR_USE_ITEM();
            if (object.itemUid != null)
                message.itemUid = object.itemUid | 0;
            return message;
        };

        /**
         * Creates a plain object from a CR_USE_ITEM message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Hit.CR_USE_ITEM
         * @static
         * @param {Hit.CR_USE_ITEM} message CR_USE_ITEM
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CR_USE_ITEM.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.itemUid = 0;
            if (message.itemUid != null && message.hasOwnProperty("itemUid"))
                object.itemUid = message.itemUid;
            return object;
        };

        /**
         * Converts this CR_USE_ITEM to JSON.
         * @function toJSON
         * @memberof Hit.CR_USE_ITEM
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CR_USE_ITEM.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CR_USE_ITEM;
    })();

    Hit.RC_USE_ITEM_RESULT = (function() {

        /**
         * Properties of a RC_USE_ITEM_RESULT.
         * @memberof Hit
         * @interface IRC_USE_ITEM_RESULT
         * @property {number|null} [errCode] RC_USE_ITEM_RESULT errCode
         */

        /**
         * Constructs a new RC_USE_ITEM_RESULT.
         * @memberof Hit
         * @classdesc Represents a RC_USE_ITEM_RESULT.
         * @implements IRC_USE_ITEM_RESULT
         * @constructor
         * @param {Hit.IRC_USE_ITEM_RESULT=} [properties] Properties to set
         */
        function RC_USE_ITEM_RESULT(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RC_USE_ITEM_RESULT errCode.
         * @member {number} errCode
         * @memberof Hit.RC_USE_ITEM_RESULT
         * @instance
         */
        RC_USE_ITEM_RESULT.prototype.errCode = 0;

        /**
         * Creates a new RC_USE_ITEM_RESULT instance using the specified properties.
         * @function create
         * @memberof Hit.RC_USE_ITEM_RESULT
         * @static
         * @param {Hit.IRC_USE_ITEM_RESULT=} [properties] Properties to set
         * @returns {Hit.RC_USE_ITEM_RESULT} RC_USE_ITEM_RESULT instance
         */
        RC_USE_ITEM_RESULT.create = function create(properties) {
            return new RC_USE_ITEM_RESULT(properties);
        };

        /**
         * Encodes the specified RC_USE_ITEM_RESULT message. Does not implicitly {@link Hit.RC_USE_ITEM_RESULT.verify|verify} messages.
         * @function encode
         * @memberof Hit.RC_USE_ITEM_RESULT
         * @static
         * @param {Hit.IRC_USE_ITEM_RESULT} message RC_USE_ITEM_RESULT message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RC_USE_ITEM_RESULT.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errCode);
            return writer;
        };

        /**
         * Encodes the specified RC_USE_ITEM_RESULT message, length delimited. Does not implicitly {@link Hit.RC_USE_ITEM_RESULT.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Hit.RC_USE_ITEM_RESULT
         * @static
         * @param {Hit.IRC_USE_ITEM_RESULT} message RC_USE_ITEM_RESULT message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RC_USE_ITEM_RESULT.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RC_USE_ITEM_RESULT message from the specified reader or buffer.
         * @function decode
         * @memberof Hit.RC_USE_ITEM_RESULT
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Hit.RC_USE_ITEM_RESULT} RC_USE_ITEM_RESULT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RC_USE_ITEM_RESULT.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Hit.RC_USE_ITEM_RESULT();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.errCode = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RC_USE_ITEM_RESULT message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Hit.RC_USE_ITEM_RESULT
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Hit.RC_USE_ITEM_RESULT} RC_USE_ITEM_RESULT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RC_USE_ITEM_RESULT.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RC_USE_ITEM_RESULT message.
         * @function verify
         * @memberof Hit.RC_USE_ITEM_RESULT
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RC_USE_ITEM_RESULT.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                if (!$util.isInteger(message.errCode))
                    return "errCode: integer expected";
            return null;
        };

        /**
         * Creates a RC_USE_ITEM_RESULT message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Hit.RC_USE_ITEM_RESULT
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Hit.RC_USE_ITEM_RESULT} RC_USE_ITEM_RESULT
         */
        RC_USE_ITEM_RESULT.fromObject = function fromObject(object) {
            if (object instanceof $root.Hit.RC_USE_ITEM_RESULT)
                return object;
            var message = new $root.Hit.RC_USE_ITEM_RESULT();
            if (object.errCode != null)
                message.errCode = object.errCode | 0;
            return message;
        };

        /**
         * Creates a plain object from a RC_USE_ITEM_RESULT message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Hit.RC_USE_ITEM_RESULT
         * @static
         * @param {Hit.RC_USE_ITEM_RESULT} message RC_USE_ITEM_RESULT
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RC_USE_ITEM_RESULT.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.errCode = 0;
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                object.errCode = message.errCode;
            return object;
        };

        /**
         * Converts this RC_USE_ITEM_RESULT to JSON.
         * @function toJSON
         * @memberof Hit.RC_USE_ITEM_RESULT
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RC_USE_ITEM_RESULT.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RC_USE_ITEM_RESULT;
    })();

    Hit.BROADCAST_PARAM = (function() {

        /**
         * Properties of a BROADCAST_PARAM.
         * @memberof Hit
         * @interface IBROADCAST_PARAM
         * @property {number|null} [type] BROADCAST_PARAM type
         * @property {string|null} [val] BROADCAST_PARAM val
         */

        /**
         * Constructs a new BROADCAST_PARAM.
         * @memberof Hit
         * @classdesc Represents a BROADCAST_PARAM.
         * @implements IBROADCAST_PARAM
         * @constructor
         * @param {Hit.IBROADCAST_PARAM=} [properties] Properties to set
         */
        function BROADCAST_PARAM(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BROADCAST_PARAM type.
         * @member {number} type
         * @memberof Hit.BROADCAST_PARAM
         * @instance
         */
        BROADCAST_PARAM.prototype.type = 0;

        /**
         * BROADCAST_PARAM val.
         * @member {string} val
         * @memberof Hit.BROADCAST_PARAM
         * @instance
         */
        BROADCAST_PARAM.prototype.val = "";

        /**
         * Creates a new BROADCAST_PARAM instance using the specified properties.
         * @function create
         * @memberof Hit.BROADCAST_PARAM
         * @static
         * @param {Hit.IBROADCAST_PARAM=} [properties] Properties to set
         * @returns {Hit.BROADCAST_PARAM} BROADCAST_PARAM instance
         */
        BROADCAST_PARAM.create = function create(properties) {
            return new BROADCAST_PARAM(properties);
        };

        /**
         * Encodes the specified BROADCAST_PARAM message. Does not implicitly {@link Hit.BROADCAST_PARAM.verify|verify} messages.
         * @function encode
         * @memberof Hit.BROADCAST_PARAM
         * @static
         * @param {Hit.IBROADCAST_PARAM} message BROADCAST_PARAM message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BROADCAST_PARAM.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.val != null && message.hasOwnProperty("val"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.val);
            return writer;
        };

        /**
         * Encodes the specified BROADCAST_PARAM message, length delimited. Does not implicitly {@link Hit.BROADCAST_PARAM.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Hit.BROADCAST_PARAM
         * @static
         * @param {Hit.IBROADCAST_PARAM} message BROADCAST_PARAM message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BROADCAST_PARAM.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BROADCAST_PARAM message from the specified reader or buffer.
         * @function decode
         * @memberof Hit.BROADCAST_PARAM
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Hit.BROADCAST_PARAM} BROADCAST_PARAM
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BROADCAST_PARAM.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Hit.BROADCAST_PARAM();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.val = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BROADCAST_PARAM message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Hit.BROADCAST_PARAM
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Hit.BROADCAST_PARAM} BROADCAST_PARAM
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BROADCAST_PARAM.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BROADCAST_PARAM message.
         * @function verify
         * @memberof Hit.BROADCAST_PARAM
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BROADCAST_PARAM.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isInteger(message.type))
                    return "type: integer expected";
            if (message.val != null && message.hasOwnProperty("val"))
                if (!$util.isString(message.val))
                    return "val: string expected";
            return null;
        };

        /**
         * Creates a BROADCAST_PARAM message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Hit.BROADCAST_PARAM
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Hit.BROADCAST_PARAM} BROADCAST_PARAM
         */
        BROADCAST_PARAM.fromObject = function fromObject(object) {
            if (object instanceof $root.Hit.BROADCAST_PARAM)
                return object;
            var message = new $root.Hit.BROADCAST_PARAM();
            if (object.type != null)
                message.type = object.type | 0;
            if (object.val != null)
                message.val = String(object.val);
            return message;
        };

        /**
         * Creates a plain object from a BROADCAST_PARAM message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Hit.BROADCAST_PARAM
         * @static
         * @param {Hit.BROADCAST_PARAM} message BROADCAST_PARAM
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BROADCAST_PARAM.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.type = 0;
                object.val = "";
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.val != null && message.hasOwnProperty("val"))
                object.val = message.val;
            return object;
        };

        /**
         * Converts this BROADCAST_PARAM to JSON.
         * @function toJSON
         * @memberof Hit.BROADCAST_PARAM
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BROADCAST_PARAM.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BROADCAST_PARAM;
    })();

    Hit.RC_BROADCAST = (function() {

        /**
         * Properties of a RC_BROADCAST.
         * @memberof Hit
         * @interface IRC_BROADCAST
         * @property {string|null} [content] RC_BROADCAST content
         * @property {Array.<Hit.IBROADCAST_PARAM>|null} [params] RC_BROADCAST params
         */

        /**
         * Constructs a new RC_BROADCAST.
         * @memberof Hit
         * @classdesc Represents a RC_BROADCAST.
         * @implements IRC_BROADCAST
         * @constructor
         * @param {Hit.IRC_BROADCAST=} [properties] Properties to set
         */
        function RC_BROADCAST(properties) {
            this.params = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RC_BROADCAST content.
         * @member {string} content
         * @memberof Hit.RC_BROADCAST
         * @instance
         */
        RC_BROADCAST.prototype.content = "";

        /**
         * RC_BROADCAST params.
         * @member {Array.<Hit.IBROADCAST_PARAM>} params
         * @memberof Hit.RC_BROADCAST
         * @instance
         */
        RC_BROADCAST.prototype.params = $util.emptyArray;

        /**
         * Creates a new RC_BROADCAST instance using the specified properties.
         * @function create
         * @memberof Hit.RC_BROADCAST
         * @static
         * @param {Hit.IRC_BROADCAST=} [properties] Properties to set
         * @returns {Hit.RC_BROADCAST} RC_BROADCAST instance
         */
        RC_BROADCAST.create = function create(properties) {
            return new RC_BROADCAST(properties);
        };

        /**
         * Encodes the specified RC_BROADCAST message. Does not implicitly {@link Hit.RC_BROADCAST.verify|verify} messages.
         * @function encode
         * @memberof Hit.RC_BROADCAST
         * @static
         * @param {Hit.IRC_BROADCAST} message RC_BROADCAST message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RC_BROADCAST.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.content != null && message.hasOwnProperty("content"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.content);
            if (message.params != null && message.params.length)
                for (var i = 0; i < message.params.length; ++i)
                    $root.Hit.BROADCAST_PARAM.encode(message.params[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RC_BROADCAST message, length delimited. Does not implicitly {@link Hit.RC_BROADCAST.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Hit.RC_BROADCAST
         * @static
         * @param {Hit.IRC_BROADCAST} message RC_BROADCAST message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RC_BROADCAST.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RC_BROADCAST message from the specified reader or buffer.
         * @function decode
         * @memberof Hit.RC_BROADCAST
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Hit.RC_BROADCAST} RC_BROADCAST
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RC_BROADCAST.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Hit.RC_BROADCAST();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.content = reader.string();
                    break;
                case 2:
                    if (!(message.params && message.params.length))
                        message.params = [];
                    message.params.push($root.Hit.BROADCAST_PARAM.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RC_BROADCAST message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Hit.RC_BROADCAST
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Hit.RC_BROADCAST} RC_BROADCAST
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RC_BROADCAST.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RC_BROADCAST message.
         * @function verify
         * @memberof Hit.RC_BROADCAST
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RC_BROADCAST.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.content != null && message.hasOwnProperty("content"))
                if (!$util.isString(message.content))
                    return "content: string expected";
            if (message.params != null && message.hasOwnProperty("params")) {
                if (!Array.isArray(message.params))
                    return "params: array expected";
                for (var i = 0; i < message.params.length; ++i) {
                    var error = $root.Hit.BROADCAST_PARAM.verify(message.params[i]);
                    if (error)
                        return "params." + error;
                }
            }
            return null;
        };

        /**
         * Creates a RC_BROADCAST message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Hit.RC_BROADCAST
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Hit.RC_BROADCAST} RC_BROADCAST
         */
        RC_BROADCAST.fromObject = function fromObject(object) {
            if (object instanceof $root.Hit.RC_BROADCAST)
                return object;
            var message = new $root.Hit.RC_BROADCAST();
            if (object.content != null)
                message.content = String(object.content);
            if (object.params) {
                if (!Array.isArray(object.params))
                    throw TypeError(".Hit.RC_BROADCAST.params: array expected");
                message.params = [];
                for (var i = 0; i < object.params.length; ++i) {
                    if (typeof object.params[i] !== "object")
                        throw TypeError(".Hit.RC_BROADCAST.params: object expected");
                    message.params[i] = $root.Hit.BROADCAST_PARAM.fromObject(object.params[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a RC_BROADCAST message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Hit.RC_BROADCAST
         * @static
         * @param {Hit.RC_BROADCAST} message RC_BROADCAST
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RC_BROADCAST.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.params = [];
            if (options.defaults)
                object.content = "";
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = message.content;
            if (message.params && message.params.length) {
                object.params = [];
                for (var j = 0; j < message.params.length; ++j)
                    object.params[j] = $root.Hit.BROADCAST_PARAM.toObject(message.params[j], options);
            }
            return object;
        };

        /**
         * Converts this RC_BROADCAST to JSON.
         * @function toJSON
         * @memberof Hit.RC_BROADCAST
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RC_BROADCAST.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RC_BROADCAST;
    })();

    Hit.RC_LV_UP = (function() {

        /**
         * Properties of a RC_LV_UP.
         * @memberof Hit
         * @interface IRC_LV_UP
         * @property {number|null} [lv] RC_LV_UP lv
         * @property {Hit.ISTC_REWARD|null} [rwd] RC_LV_UP rwd
         */

        /**
         * Constructs a new RC_LV_UP.
         * @memberof Hit
         * @classdesc Represents a RC_LV_UP.
         * @implements IRC_LV_UP
         * @constructor
         * @param {Hit.IRC_LV_UP=} [properties] Properties to set
         */
        function RC_LV_UP(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RC_LV_UP lv.
         * @member {number} lv
         * @memberof Hit.RC_LV_UP
         * @instance
         */
        RC_LV_UP.prototype.lv = 0;

        /**
         * RC_LV_UP rwd.
         * @member {Hit.ISTC_REWARD|null|undefined} rwd
         * @memberof Hit.RC_LV_UP
         * @instance
         */
        RC_LV_UP.prototype.rwd = null;

        /**
         * Creates a new RC_LV_UP instance using the specified properties.
         * @function create
         * @memberof Hit.RC_LV_UP
         * @static
         * @param {Hit.IRC_LV_UP=} [properties] Properties to set
         * @returns {Hit.RC_LV_UP} RC_LV_UP instance
         */
        RC_LV_UP.create = function create(properties) {
            return new RC_LV_UP(properties);
        };

        /**
         * Encodes the specified RC_LV_UP message. Does not implicitly {@link Hit.RC_LV_UP.verify|verify} messages.
         * @function encode
         * @memberof Hit.RC_LV_UP
         * @static
         * @param {Hit.IRC_LV_UP} message RC_LV_UP message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RC_LV_UP.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.lv != null && message.hasOwnProperty("lv"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.lv);
            if (message.rwd != null && message.hasOwnProperty("rwd"))
                $root.Hit.STC_REWARD.encode(message.rwd, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RC_LV_UP message, length delimited. Does not implicitly {@link Hit.RC_LV_UP.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Hit.RC_LV_UP
         * @static
         * @param {Hit.IRC_LV_UP} message RC_LV_UP message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RC_LV_UP.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RC_LV_UP message from the specified reader or buffer.
         * @function decode
         * @memberof Hit.RC_LV_UP
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Hit.RC_LV_UP} RC_LV_UP
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RC_LV_UP.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Hit.RC_LV_UP();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.lv = reader.int32();
                    break;
                case 2:
                    message.rwd = $root.Hit.STC_REWARD.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RC_LV_UP message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Hit.RC_LV_UP
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Hit.RC_LV_UP} RC_LV_UP
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RC_LV_UP.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RC_LV_UP message.
         * @function verify
         * @memberof Hit.RC_LV_UP
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RC_LV_UP.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.lv != null && message.hasOwnProperty("lv"))
                if (!$util.isInteger(message.lv))
                    return "lv: integer expected";
            if (message.rwd != null && message.hasOwnProperty("rwd")) {
                var error = $root.Hit.STC_REWARD.verify(message.rwd);
                if (error)
                    return "rwd." + error;
            }
            return null;
        };

        /**
         * Creates a RC_LV_UP message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Hit.RC_LV_UP
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Hit.RC_LV_UP} RC_LV_UP
         */
        RC_LV_UP.fromObject = function fromObject(object) {
            if (object instanceof $root.Hit.RC_LV_UP)
                return object;
            var message = new $root.Hit.RC_LV_UP();
            if (object.lv != null)
                message.lv = object.lv | 0;
            if (object.rwd != null) {
                if (typeof object.rwd !== "object")
                    throw TypeError(".Hit.RC_LV_UP.rwd: object expected");
                message.rwd = $root.Hit.STC_REWARD.fromObject(object.rwd);
            }
            return message;
        };

        /**
         * Creates a plain object from a RC_LV_UP message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Hit.RC_LV_UP
         * @static
         * @param {Hit.RC_LV_UP} message RC_LV_UP
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RC_LV_UP.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.lv = 0;
                object.rwd = null;
            }
            if (message.lv != null && message.hasOwnProperty("lv"))
                object.lv = message.lv;
            if (message.rwd != null && message.hasOwnProperty("rwd"))
                object.rwd = $root.Hit.STC_REWARD.toObject(message.rwd, options);
            return object;
        };

        /**
         * Converts this RC_LV_UP to JSON.
         * @function toJSON
         * @memberof Hit.RC_LV_UP
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RC_LV_UP.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RC_LV_UP;
    })();

    Hit.BattleSeason = (function() {

        /**
         * Properties of a BattleSeason.
         * @memberof Hit
         * @interface IBattleSeason
         * @property {number|null} [evtId] BattleSeason evtId
         * @property {number|null} [state] BattleSeason state
         * @property {number|null} [startTime] BattleSeason startTime
         * @property {number|null} [endTime] BattleSeason endTime
         * @property {number|null} [itemId] BattleSeason itemId
         */

        /**
         * Constructs a new BattleSeason.
         * @memberof Hit
         * @classdesc Represents a BattleSeason.
         * @implements IBattleSeason
         * @constructor
         * @param {Hit.IBattleSeason=} [properties] Properties to set
         */
        function BattleSeason(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BattleSeason evtId.
         * @member {number} evtId
         * @memberof Hit.BattleSeason
         * @instance
         */
        BattleSeason.prototype.evtId = 0;

        /**
         * BattleSeason state.
         * @member {number} state
         * @memberof Hit.BattleSeason
         * @instance
         */
        BattleSeason.prototype.state = 0;

        /**
         * BattleSeason startTime.
         * @member {number} startTime
         * @memberof Hit.BattleSeason
         * @instance
         */
        BattleSeason.prototype.startTime = 0;

        /**
         * BattleSeason endTime.
         * @member {number} endTime
         * @memberof Hit.BattleSeason
         * @instance
         */
        BattleSeason.prototype.endTime = 0;

        /**
         * BattleSeason itemId.
         * @member {number} itemId
         * @memberof Hit.BattleSeason
         * @instance
         */
        BattleSeason.prototype.itemId = 0;

        /**
         * Creates a new BattleSeason instance using the specified properties.
         * @function create
         * @memberof Hit.BattleSeason
         * @static
         * @param {Hit.IBattleSeason=} [properties] Properties to set
         * @returns {Hit.BattleSeason} BattleSeason instance
         */
        BattleSeason.create = function create(properties) {
            return new BattleSeason(properties);
        };

        /**
         * Encodes the specified BattleSeason message. Does not implicitly {@link Hit.BattleSeason.verify|verify} messages.
         * @function encode
         * @memberof Hit.BattleSeason
         * @static
         * @param {Hit.IBattleSeason} message BattleSeason message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleSeason.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.evtId != null && message.hasOwnProperty("evtId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.evtId);
            if (message.state != null && message.hasOwnProperty("state"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.state);
            if (message.startTime != null && message.hasOwnProperty("startTime"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.startTime);
            if (message.endTime != null && message.hasOwnProperty("endTime"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.endTime);
            if (message.itemId != null && message.hasOwnProperty("itemId"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.itemId);
            return writer;
        };

        /**
         * Encodes the specified BattleSeason message, length delimited. Does not implicitly {@link Hit.BattleSeason.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Hit.BattleSeason
         * @static
         * @param {Hit.IBattleSeason} message BattleSeason message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleSeason.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BattleSeason message from the specified reader or buffer.
         * @function decode
         * @memberof Hit.BattleSeason
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Hit.BattleSeason} BattleSeason
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleSeason.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Hit.BattleSeason();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.evtId = reader.int32();
                    break;
                case 2:
                    message.state = reader.int32();
                    break;
                case 3:
                    message.startTime = reader.uint32();
                    break;
                case 4:
                    message.endTime = reader.uint32();
                    break;
                case 6:
                    message.itemId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BattleSeason message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Hit.BattleSeason
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Hit.BattleSeason} BattleSeason
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleSeason.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BattleSeason message.
         * @function verify
         * @memberof Hit.BattleSeason
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BattleSeason.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.evtId != null && message.hasOwnProperty("evtId"))
                if (!$util.isInteger(message.evtId))
                    return "evtId: integer expected";
            if (message.state != null && message.hasOwnProperty("state"))
                if (!$util.isInteger(message.state))
                    return "state: integer expected";
            if (message.startTime != null && message.hasOwnProperty("startTime"))
                if (!$util.isInteger(message.startTime))
                    return "startTime: integer expected";
            if (message.endTime != null && message.hasOwnProperty("endTime"))
                if (!$util.isInteger(message.endTime))
                    return "endTime: integer expected";
            if (message.itemId != null && message.hasOwnProperty("itemId"))
                if (!$util.isInteger(message.itemId))
                    return "itemId: integer expected";
            return null;
        };

        /**
         * Creates a BattleSeason message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Hit.BattleSeason
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Hit.BattleSeason} BattleSeason
         */
        BattleSeason.fromObject = function fromObject(object) {
            if (object instanceof $root.Hit.BattleSeason)
                return object;
            var message = new $root.Hit.BattleSeason();
            if (object.evtId != null)
                message.evtId = object.evtId | 0;
            if (object.state != null)
                message.state = object.state | 0;
            if (object.startTime != null)
                message.startTime = object.startTime >>> 0;
            if (object.endTime != null)
                message.endTime = object.endTime >>> 0;
            if (object.itemId != null)
                message.itemId = object.itemId | 0;
            return message;
        };

        /**
         * Creates a plain object from a BattleSeason message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Hit.BattleSeason
         * @static
         * @param {Hit.BattleSeason} message BattleSeason
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BattleSeason.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.evtId = 0;
                object.state = 0;
                object.startTime = 0;
                object.endTime = 0;
                object.itemId = 0;
            }
            if (message.evtId != null && message.hasOwnProperty("evtId"))
                object.evtId = message.evtId;
            if (message.state != null && message.hasOwnProperty("state"))
                object.state = message.state;
            if (message.startTime != null && message.hasOwnProperty("startTime"))
                object.startTime = message.startTime;
            if (message.endTime != null && message.hasOwnProperty("endTime"))
                object.endTime = message.endTime;
            if (message.itemId != null && message.hasOwnProperty("itemId"))
                object.itemId = message.itemId;
            return object;
        };

        /**
         * Converts this BattleSeason to JSON.
         * @function toJSON
         * @memberof Hit.BattleSeason
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BattleSeason.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BattleSeason;
    })();

    /**
     * E_GACHA_TYPE enum.
     * @name Hit.E_GACHA_TYPE
     * @enum {string}
     * @property {number} UGT_NORMAL=0 UGT_NORMAL value
     * @property {number} UGT_SPECIAL=1 UGT_SPECIAL value
     */
    Hit.E_GACHA_TYPE = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "UGT_NORMAL"] = 0;
        values[valuesById[1] = "UGT_SPECIAL"] = 1;
        return values;
    })();

    Hit.CR_GACHA = (function() {

        /**
         * Properties of a CR_GACHA.
         * @memberof Hit
         * @interface ICR_GACHA
         * @property {Hit.E_GACHA_TYPE|null} [type] CR_GACHA type
         * @property {number|null} [cnt] CR_GACHA cnt
         */

        /**
         * Constructs a new CR_GACHA.
         * @memberof Hit
         * @classdesc Represents a CR_GACHA.
         * @implements ICR_GACHA
         * @constructor
         * @param {Hit.ICR_GACHA=} [properties] Properties to set
         */
        function CR_GACHA(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CR_GACHA type.
         * @member {Hit.E_GACHA_TYPE} type
         * @memberof Hit.CR_GACHA
         * @instance
         */
        CR_GACHA.prototype.type = 0;

        /**
         * CR_GACHA cnt.
         * @member {number} cnt
         * @memberof Hit.CR_GACHA
         * @instance
         */
        CR_GACHA.prototype.cnt = 0;

        /**
         * Creates a new CR_GACHA instance using the specified properties.
         * @function create
         * @memberof Hit.CR_GACHA
         * @static
         * @param {Hit.ICR_GACHA=} [properties] Properties to set
         * @returns {Hit.CR_GACHA} CR_GACHA instance
         */
        CR_GACHA.create = function create(properties) {
            return new CR_GACHA(properties);
        };

        /**
         * Encodes the specified CR_GACHA message. Does not implicitly {@link Hit.CR_GACHA.verify|verify} messages.
         * @function encode
         * @memberof Hit.CR_GACHA
         * @static
         * @param {Hit.ICR_GACHA} message CR_GACHA message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CR_GACHA.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.cnt != null && message.hasOwnProperty("cnt"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.cnt);
            return writer;
        };

        /**
         * Encodes the specified CR_GACHA message, length delimited. Does not implicitly {@link Hit.CR_GACHA.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Hit.CR_GACHA
         * @static
         * @param {Hit.ICR_GACHA} message CR_GACHA message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CR_GACHA.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CR_GACHA message from the specified reader or buffer.
         * @function decode
         * @memberof Hit.CR_GACHA
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Hit.CR_GACHA} CR_GACHA
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CR_GACHA.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Hit.CR_GACHA();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.cnt = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CR_GACHA message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Hit.CR_GACHA
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Hit.CR_GACHA} CR_GACHA
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CR_GACHA.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CR_GACHA message.
         * @function verify
         * @memberof Hit.CR_GACHA
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CR_GACHA.verify = function verify(message) {
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
            if (message.cnt != null && message.hasOwnProperty("cnt"))
                if (!$util.isInteger(message.cnt))
                    return "cnt: integer expected";
            return null;
        };

        /**
         * Creates a CR_GACHA message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Hit.CR_GACHA
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Hit.CR_GACHA} CR_GACHA
         */
        CR_GACHA.fromObject = function fromObject(object) {
            if (object instanceof $root.Hit.CR_GACHA)
                return object;
            var message = new $root.Hit.CR_GACHA();
            switch (object.type) {
            case "UGT_NORMAL":
            case 0:
                message.type = 0;
                break;
            case "UGT_SPECIAL":
            case 1:
                message.type = 1;
                break;
            }
            if (object.cnt != null)
                message.cnt = object.cnt | 0;
            return message;
        };

        /**
         * Creates a plain object from a CR_GACHA message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Hit.CR_GACHA
         * @static
         * @param {Hit.CR_GACHA} message CR_GACHA
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CR_GACHA.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.type = options.enums === String ? "UGT_NORMAL" : 0;
                object.cnt = 0;
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.Hit.E_GACHA_TYPE[message.type] : message.type;
            if (message.cnt != null && message.hasOwnProperty("cnt"))
                object.cnt = message.cnt;
            return object;
        };

        /**
         * Converts this CR_GACHA to JSON.
         * @function toJSON
         * @memberof Hit.CR_GACHA
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CR_GACHA.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CR_GACHA;
    })();

    Hit.RC_GACHA_RESULT = (function() {

        /**
         * Properties of a RC_GACHA_RESULT.
         * @memberof Hit
         * @interface IRC_GACHA_RESULT
         * @property {Hit.ISTC_REWARD|null} [pokes] RC_GACHA_RESULT pokes
         * @property {number|null} [errorCode] RC_GACHA_RESULT errorCode
         */

        /**
         * Constructs a new RC_GACHA_RESULT.
         * @memberof Hit
         * @classdesc Represents a RC_GACHA_RESULT.
         * @implements IRC_GACHA_RESULT
         * @constructor
         * @param {Hit.IRC_GACHA_RESULT=} [properties] Properties to set
         */
        function RC_GACHA_RESULT(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RC_GACHA_RESULT pokes.
         * @member {Hit.ISTC_REWARD|null|undefined} pokes
         * @memberof Hit.RC_GACHA_RESULT
         * @instance
         */
        RC_GACHA_RESULT.prototype.pokes = null;

        /**
         * RC_GACHA_RESULT errorCode.
         * @member {number} errorCode
         * @memberof Hit.RC_GACHA_RESULT
         * @instance
         */
        RC_GACHA_RESULT.prototype.errorCode = 0;

        /**
         * Creates a new RC_GACHA_RESULT instance using the specified properties.
         * @function create
         * @memberof Hit.RC_GACHA_RESULT
         * @static
         * @param {Hit.IRC_GACHA_RESULT=} [properties] Properties to set
         * @returns {Hit.RC_GACHA_RESULT} RC_GACHA_RESULT instance
         */
        RC_GACHA_RESULT.create = function create(properties) {
            return new RC_GACHA_RESULT(properties);
        };

        /**
         * Encodes the specified RC_GACHA_RESULT message. Does not implicitly {@link Hit.RC_GACHA_RESULT.verify|verify} messages.
         * @function encode
         * @memberof Hit.RC_GACHA_RESULT
         * @static
         * @param {Hit.IRC_GACHA_RESULT} message RC_GACHA_RESULT message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RC_GACHA_RESULT.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.pokes != null && message.hasOwnProperty("pokes"))
                $root.Hit.STC_REWARD.encode(message.pokes, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.errorCode != null && message.hasOwnProperty("errorCode"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.errorCode);
            return writer;
        };

        /**
         * Encodes the specified RC_GACHA_RESULT message, length delimited. Does not implicitly {@link Hit.RC_GACHA_RESULT.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Hit.RC_GACHA_RESULT
         * @static
         * @param {Hit.IRC_GACHA_RESULT} message RC_GACHA_RESULT message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RC_GACHA_RESULT.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RC_GACHA_RESULT message from the specified reader or buffer.
         * @function decode
         * @memberof Hit.RC_GACHA_RESULT
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Hit.RC_GACHA_RESULT} RC_GACHA_RESULT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RC_GACHA_RESULT.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Hit.RC_GACHA_RESULT();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.pokes = $root.Hit.STC_REWARD.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.errorCode = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RC_GACHA_RESULT message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Hit.RC_GACHA_RESULT
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Hit.RC_GACHA_RESULT} RC_GACHA_RESULT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RC_GACHA_RESULT.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RC_GACHA_RESULT message.
         * @function verify
         * @memberof Hit.RC_GACHA_RESULT
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RC_GACHA_RESULT.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.pokes != null && message.hasOwnProperty("pokes")) {
                var error = $root.Hit.STC_REWARD.verify(message.pokes);
                if (error)
                    return "pokes." + error;
            }
            if (message.errorCode != null && message.hasOwnProperty("errorCode"))
                if (!$util.isInteger(message.errorCode))
                    return "errorCode: integer expected";
            return null;
        };

        /**
         * Creates a RC_GACHA_RESULT message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Hit.RC_GACHA_RESULT
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Hit.RC_GACHA_RESULT} RC_GACHA_RESULT
         */
        RC_GACHA_RESULT.fromObject = function fromObject(object) {
            if (object instanceof $root.Hit.RC_GACHA_RESULT)
                return object;
            var message = new $root.Hit.RC_GACHA_RESULT();
            if (object.pokes != null) {
                if (typeof object.pokes !== "object")
                    throw TypeError(".Hit.RC_GACHA_RESULT.pokes: object expected");
                message.pokes = $root.Hit.STC_REWARD.fromObject(object.pokes);
            }
            if (object.errorCode != null)
                message.errorCode = object.errorCode | 0;
            return message;
        };

        /**
         * Creates a plain object from a RC_GACHA_RESULT message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Hit.RC_GACHA_RESULT
         * @static
         * @param {Hit.RC_GACHA_RESULT} message RC_GACHA_RESULT
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RC_GACHA_RESULT.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.pokes = null;
                object.errorCode = 0;
            }
            if (message.pokes != null && message.hasOwnProperty("pokes"))
                object.pokes = $root.Hit.STC_REWARD.toObject(message.pokes, options);
            if (message.errorCode != null && message.hasOwnProperty("errorCode"))
                object.errorCode = message.errorCode;
            return object;
        };

        /**
         * Converts this RC_GACHA_RESULT to JSON.
         * @function toJSON
         * @memberof Hit.RC_GACHA_RESULT
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RC_GACHA_RESULT.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RC_GACHA_RESULT;
    })();

    Hit.CR_DEL_MAIL = (function() {

        /**
         * Properties of a CR_DEL_MAIL.
         * @memberof Hit
         * @interface ICR_DEL_MAIL
         * @property {number|null} [mailId] CR_DEL_MAIL mailId
         */

        /**
         * Constructs a new CR_DEL_MAIL.
         * @memberof Hit
         * @classdesc Represents a CR_DEL_MAIL.
         * @implements ICR_DEL_MAIL
         * @constructor
         * @param {Hit.ICR_DEL_MAIL=} [properties] Properties to set
         */
        function CR_DEL_MAIL(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CR_DEL_MAIL mailId.
         * @member {number} mailId
         * @memberof Hit.CR_DEL_MAIL
         * @instance
         */
        CR_DEL_MAIL.prototype.mailId = 0;

        /**
         * Creates a new CR_DEL_MAIL instance using the specified properties.
         * @function create
         * @memberof Hit.CR_DEL_MAIL
         * @static
         * @param {Hit.ICR_DEL_MAIL=} [properties] Properties to set
         * @returns {Hit.CR_DEL_MAIL} CR_DEL_MAIL instance
         */
        CR_DEL_MAIL.create = function create(properties) {
            return new CR_DEL_MAIL(properties);
        };

        /**
         * Encodes the specified CR_DEL_MAIL message. Does not implicitly {@link Hit.CR_DEL_MAIL.verify|verify} messages.
         * @function encode
         * @memberof Hit.CR_DEL_MAIL
         * @static
         * @param {Hit.ICR_DEL_MAIL} message CR_DEL_MAIL message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CR_DEL_MAIL.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.mailId != null && message.hasOwnProperty("mailId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.mailId);
            return writer;
        };

        /**
         * Encodes the specified CR_DEL_MAIL message, length delimited. Does not implicitly {@link Hit.CR_DEL_MAIL.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Hit.CR_DEL_MAIL
         * @static
         * @param {Hit.ICR_DEL_MAIL} message CR_DEL_MAIL message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CR_DEL_MAIL.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CR_DEL_MAIL message from the specified reader or buffer.
         * @function decode
         * @memberof Hit.CR_DEL_MAIL
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Hit.CR_DEL_MAIL} CR_DEL_MAIL
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CR_DEL_MAIL.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Hit.CR_DEL_MAIL();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.mailId = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CR_DEL_MAIL message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Hit.CR_DEL_MAIL
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Hit.CR_DEL_MAIL} CR_DEL_MAIL
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CR_DEL_MAIL.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CR_DEL_MAIL message.
         * @function verify
         * @memberof Hit.CR_DEL_MAIL
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CR_DEL_MAIL.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.mailId != null && message.hasOwnProperty("mailId"))
                if (!$util.isInteger(message.mailId))
                    return "mailId: integer expected";
            return null;
        };

        /**
         * Creates a CR_DEL_MAIL message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Hit.CR_DEL_MAIL
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Hit.CR_DEL_MAIL} CR_DEL_MAIL
         */
        CR_DEL_MAIL.fromObject = function fromObject(object) {
            if (object instanceof $root.Hit.CR_DEL_MAIL)
                return object;
            var message = new $root.Hit.CR_DEL_MAIL();
            if (object.mailId != null)
                message.mailId = object.mailId >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a CR_DEL_MAIL message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Hit.CR_DEL_MAIL
         * @static
         * @param {Hit.CR_DEL_MAIL} message CR_DEL_MAIL
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CR_DEL_MAIL.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.mailId = 0;
            if (message.mailId != null && message.hasOwnProperty("mailId"))
                object.mailId = message.mailId;
            return object;
        };

        /**
         * Converts this CR_DEL_MAIL to JSON.
         * @function toJSON
         * @memberof Hit.CR_DEL_MAIL
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CR_DEL_MAIL.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CR_DEL_MAIL;
    })();

    Hit.RC_DEL_MAIL_RESULT = (function() {

        /**
         * Properties of a RC_DEL_MAIL_RESULT.
         * @memberof Hit
         * @interface IRC_DEL_MAIL_RESULT
         * @property {number|null} [mailId] RC_DEL_MAIL_RESULT mailId
         */

        /**
         * Constructs a new RC_DEL_MAIL_RESULT.
         * @memberof Hit
         * @classdesc Represents a RC_DEL_MAIL_RESULT.
         * @implements IRC_DEL_MAIL_RESULT
         * @constructor
         * @param {Hit.IRC_DEL_MAIL_RESULT=} [properties] Properties to set
         */
        function RC_DEL_MAIL_RESULT(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RC_DEL_MAIL_RESULT mailId.
         * @member {number} mailId
         * @memberof Hit.RC_DEL_MAIL_RESULT
         * @instance
         */
        RC_DEL_MAIL_RESULT.prototype.mailId = 0;

        /**
         * Creates a new RC_DEL_MAIL_RESULT instance using the specified properties.
         * @function create
         * @memberof Hit.RC_DEL_MAIL_RESULT
         * @static
         * @param {Hit.IRC_DEL_MAIL_RESULT=} [properties] Properties to set
         * @returns {Hit.RC_DEL_MAIL_RESULT} RC_DEL_MAIL_RESULT instance
         */
        RC_DEL_MAIL_RESULT.create = function create(properties) {
            return new RC_DEL_MAIL_RESULT(properties);
        };

        /**
         * Encodes the specified RC_DEL_MAIL_RESULT message. Does not implicitly {@link Hit.RC_DEL_MAIL_RESULT.verify|verify} messages.
         * @function encode
         * @memberof Hit.RC_DEL_MAIL_RESULT
         * @static
         * @param {Hit.IRC_DEL_MAIL_RESULT} message RC_DEL_MAIL_RESULT message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RC_DEL_MAIL_RESULT.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.mailId != null && message.hasOwnProperty("mailId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.mailId);
            return writer;
        };

        /**
         * Encodes the specified RC_DEL_MAIL_RESULT message, length delimited. Does not implicitly {@link Hit.RC_DEL_MAIL_RESULT.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Hit.RC_DEL_MAIL_RESULT
         * @static
         * @param {Hit.IRC_DEL_MAIL_RESULT} message RC_DEL_MAIL_RESULT message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RC_DEL_MAIL_RESULT.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RC_DEL_MAIL_RESULT message from the specified reader or buffer.
         * @function decode
         * @memberof Hit.RC_DEL_MAIL_RESULT
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Hit.RC_DEL_MAIL_RESULT} RC_DEL_MAIL_RESULT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RC_DEL_MAIL_RESULT.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Hit.RC_DEL_MAIL_RESULT();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.mailId = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RC_DEL_MAIL_RESULT message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Hit.RC_DEL_MAIL_RESULT
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Hit.RC_DEL_MAIL_RESULT} RC_DEL_MAIL_RESULT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RC_DEL_MAIL_RESULT.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RC_DEL_MAIL_RESULT message.
         * @function verify
         * @memberof Hit.RC_DEL_MAIL_RESULT
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RC_DEL_MAIL_RESULT.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.mailId != null && message.hasOwnProperty("mailId"))
                if (!$util.isInteger(message.mailId))
                    return "mailId: integer expected";
            return null;
        };

        /**
         * Creates a RC_DEL_MAIL_RESULT message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Hit.RC_DEL_MAIL_RESULT
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Hit.RC_DEL_MAIL_RESULT} RC_DEL_MAIL_RESULT
         */
        RC_DEL_MAIL_RESULT.fromObject = function fromObject(object) {
            if (object instanceof $root.Hit.RC_DEL_MAIL_RESULT)
                return object;
            var message = new $root.Hit.RC_DEL_MAIL_RESULT();
            if (object.mailId != null)
                message.mailId = object.mailId >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a RC_DEL_MAIL_RESULT message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Hit.RC_DEL_MAIL_RESULT
         * @static
         * @param {Hit.RC_DEL_MAIL_RESULT} message RC_DEL_MAIL_RESULT
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RC_DEL_MAIL_RESULT.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.mailId = 0;
            if (message.mailId != null && message.hasOwnProperty("mailId"))
                object.mailId = message.mailId;
            return object;
        };

        /**
         * Converts this RC_DEL_MAIL_RESULT to JSON.
         * @function toJSON
         * @memberof Hit.RC_DEL_MAIL_RESULT
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RC_DEL_MAIL_RESULT.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RC_DEL_MAIL_RESULT;
    })();

    Hit.GetItemMsg = (function() {

        /**
         * Properties of a GetItemMsg.
         * @memberof Hit
         * @interface IGetItemMsg
         * @property {number|null} [mailId] GetItemMsg mailId
         * @property {string|null} [receiverUid] GetItemMsg receiverUid
         * @property {number|null} [itemId] GetItemMsg itemId
         * @property {number|null} [cnt] GetItemMsg cnt
         */

        /**
         * Constructs a new GetItemMsg.
         * @memberof Hit
         * @classdesc Represents a GetItemMsg.
         * @implements IGetItemMsg
         * @constructor
         * @param {Hit.IGetItemMsg=} [properties] Properties to set
         */
        function GetItemMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetItemMsg mailId.
         * @member {number} mailId
         * @memberof Hit.GetItemMsg
         * @instance
         */
        GetItemMsg.prototype.mailId = 0;

        /**
         * GetItemMsg receiverUid.
         * @member {string} receiverUid
         * @memberof Hit.GetItemMsg
         * @instance
         */
        GetItemMsg.prototype.receiverUid = "";

        /**
         * GetItemMsg itemId.
         * @member {number} itemId
         * @memberof Hit.GetItemMsg
         * @instance
         */
        GetItemMsg.prototype.itemId = 0;

        /**
         * GetItemMsg cnt.
         * @member {number} cnt
         * @memberof Hit.GetItemMsg
         * @instance
         */
        GetItemMsg.prototype.cnt = 0;

        /**
         * Creates a new GetItemMsg instance using the specified properties.
         * @function create
         * @memberof Hit.GetItemMsg
         * @static
         * @param {Hit.IGetItemMsg=} [properties] Properties to set
         * @returns {Hit.GetItemMsg} GetItemMsg instance
         */
        GetItemMsg.create = function create(properties) {
            return new GetItemMsg(properties);
        };

        /**
         * Encodes the specified GetItemMsg message. Does not implicitly {@link Hit.GetItemMsg.verify|verify} messages.
         * @function encode
         * @memberof Hit.GetItemMsg
         * @static
         * @param {Hit.IGetItemMsg} message GetItemMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetItemMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.mailId != null && message.hasOwnProperty("mailId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.mailId);
            if (message.receiverUid != null && message.hasOwnProperty("receiverUid"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.receiverUid);
            if (message.itemId != null && message.hasOwnProperty("itemId"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.itemId);
            if (message.cnt != null && message.hasOwnProperty("cnt"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.cnt);
            return writer;
        };

        /**
         * Encodes the specified GetItemMsg message, length delimited. Does not implicitly {@link Hit.GetItemMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Hit.GetItemMsg
         * @static
         * @param {Hit.IGetItemMsg} message GetItemMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetItemMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetItemMsg message from the specified reader or buffer.
         * @function decode
         * @memberof Hit.GetItemMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Hit.GetItemMsg} GetItemMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetItemMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Hit.GetItemMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.mailId = reader.uint32();
                    break;
                case 2:
                    message.receiverUid = reader.string();
                    break;
                case 3:
                    message.itemId = reader.int32();
                    break;
                case 4:
                    message.cnt = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetItemMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Hit.GetItemMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Hit.GetItemMsg} GetItemMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetItemMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetItemMsg message.
         * @function verify
         * @memberof Hit.GetItemMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetItemMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.mailId != null && message.hasOwnProperty("mailId"))
                if (!$util.isInteger(message.mailId))
                    return "mailId: integer expected";
            if (message.receiverUid != null && message.hasOwnProperty("receiverUid"))
                if (!$util.isString(message.receiverUid))
                    return "receiverUid: string expected";
            if (message.itemId != null && message.hasOwnProperty("itemId"))
                if (!$util.isInteger(message.itemId))
                    return "itemId: integer expected";
            if (message.cnt != null && message.hasOwnProperty("cnt"))
                if (!$util.isInteger(message.cnt))
                    return "cnt: integer expected";
            return null;
        };

        /**
         * Creates a GetItemMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Hit.GetItemMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Hit.GetItemMsg} GetItemMsg
         */
        GetItemMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.Hit.GetItemMsg)
                return object;
            var message = new $root.Hit.GetItemMsg();
            if (object.mailId != null)
                message.mailId = object.mailId >>> 0;
            if (object.receiverUid != null)
                message.receiverUid = String(object.receiverUid);
            if (object.itemId != null)
                message.itemId = object.itemId | 0;
            if (object.cnt != null)
                message.cnt = object.cnt | 0;
            return message;
        };

        /**
         * Creates a plain object from a GetItemMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Hit.GetItemMsg
         * @static
         * @param {Hit.GetItemMsg} message GetItemMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetItemMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.mailId = 0;
                object.receiverUid = "";
                object.itemId = 0;
                object.cnt = 0;
            }
            if (message.mailId != null && message.hasOwnProperty("mailId"))
                object.mailId = message.mailId;
            if (message.receiverUid != null && message.hasOwnProperty("receiverUid"))
                object.receiverUid = message.receiverUid;
            if (message.itemId != null && message.hasOwnProperty("itemId"))
                object.itemId = message.itemId;
            if (message.cnt != null && message.hasOwnProperty("cnt"))
                object.cnt = message.cnt;
            return object;
        };

        /**
         * Converts this GetItemMsg to JSON.
         * @function toJSON
         * @memberof Hit.GetItemMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetItemMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetItemMsg;
    })();

    Hit.GetItemMsgList = (function() {

        /**
         * Properties of a GetItemMsgList.
         * @memberof Hit
         * @interface IGetItemMsgList
         * @property {Array.<Hit.IGetItemMsg>|null} [mails] GetItemMsgList mails
         */

        /**
         * Constructs a new GetItemMsgList.
         * @memberof Hit
         * @classdesc Represents a GetItemMsgList.
         * @implements IGetItemMsgList
         * @constructor
         * @param {Hit.IGetItemMsgList=} [properties] Properties to set
         */
        function GetItemMsgList(properties) {
            this.mails = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetItemMsgList mails.
         * @member {Array.<Hit.IGetItemMsg>} mails
         * @memberof Hit.GetItemMsgList
         * @instance
         */
        GetItemMsgList.prototype.mails = $util.emptyArray;

        /**
         * Creates a new GetItemMsgList instance using the specified properties.
         * @function create
         * @memberof Hit.GetItemMsgList
         * @static
         * @param {Hit.IGetItemMsgList=} [properties] Properties to set
         * @returns {Hit.GetItemMsgList} GetItemMsgList instance
         */
        GetItemMsgList.create = function create(properties) {
            return new GetItemMsgList(properties);
        };

        /**
         * Encodes the specified GetItemMsgList message. Does not implicitly {@link Hit.GetItemMsgList.verify|verify} messages.
         * @function encode
         * @memberof Hit.GetItemMsgList
         * @static
         * @param {Hit.IGetItemMsgList} message GetItemMsgList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetItemMsgList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.mails != null && message.mails.length)
                for (var i = 0; i < message.mails.length; ++i)
                    $root.Hit.GetItemMsg.encode(message.mails[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetItemMsgList message, length delimited. Does not implicitly {@link Hit.GetItemMsgList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Hit.GetItemMsgList
         * @static
         * @param {Hit.IGetItemMsgList} message GetItemMsgList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetItemMsgList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetItemMsgList message from the specified reader or buffer.
         * @function decode
         * @memberof Hit.GetItemMsgList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Hit.GetItemMsgList} GetItemMsgList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetItemMsgList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Hit.GetItemMsgList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.mails && message.mails.length))
                        message.mails = [];
                    message.mails.push($root.Hit.GetItemMsg.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetItemMsgList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Hit.GetItemMsgList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Hit.GetItemMsgList} GetItemMsgList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetItemMsgList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetItemMsgList message.
         * @function verify
         * @memberof Hit.GetItemMsgList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetItemMsgList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.mails != null && message.hasOwnProperty("mails")) {
                if (!Array.isArray(message.mails))
                    return "mails: array expected";
                for (var i = 0; i < message.mails.length; ++i) {
                    var error = $root.Hit.GetItemMsg.verify(message.mails[i]);
                    if (error)
                        return "mails." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GetItemMsgList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Hit.GetItemMsgList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Hit.GetItemMsgList} GetItemMsgList
         */
        GetItemMsgList.fromObject = function fromObject(object) {
            if (object instanceof $root.Hit.GetItemMsgList)
                return object;
            var message = new $root.Hit.GetItemMsgList();
            if (object.mails) {
                if (!Array.isArray(object.mails))
                    throw TypeError(".Hit.GetItemMsgList.mails: array expected");
                message.mails = [];
                for (var i = 0; i < object.mails.length; ++i) {
                    if (typeof object.mails[i] !== "object")
                        throw TypeError(".Hit.GetItemMsgList.mails: object expected");
                    message.mails[i] = $root.Hit.GetItemMsg.fromObject(object.mails[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GetItemMsgList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Hit.GetItemMsgList
         * @static
         * @param {Hit.GetItemMsgList} message GetItemMsgList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetItemMsgList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.mails = [];
            if (message.mails && message.mails.length) {
                object.mails = [];
                for (var j = 0; j < message.mails.length; ++j)
                    object.mails[j] = $root.Hit.GetItemMsg.toObject(message.mails[j], options);
            }
            return object;
        };

        /**
         * Converts this GetItemMsgList to JSON.
         * @function toJSON
         * @memberof Hit.GetItemMsgList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetItemMsgList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetItemMsgList;
    })();

    Hit.CR_ADD_TO_TEAM = (function() {

        /**
         * Properties of a CR_ADD_TO_TEAM.
         * @memberof Hit
         * @interface ICR_ADD_TO_TEAM
         * @property {number|null} [pokeUid] CR_ADD_TO_TEAM pokeUid
         * @property {number|null} [posIdx] CR_ADD_TO_TEAM posIdx
         */

        /**
         * Constructs a new CR_ADD_TO_TEAM.
         * @memberof Hit
         * @classdesc Represents a CR_ADD_TO_TEAM.
         * @implements ICR_ADD_TO_TEAM
         * @constructor
         * @param {Hit.ICR_ADD_TO_TEAM=} [properties] Properties to set
         */
        function CR_ADD_TO_TEAM(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CR_ADD_TO_TEAM pokeUid.
         * @member {number} pokeUid
         * @memberof Hit.CR_ADD_TO_TEAM
         * @instance
         */
        CR_ADD_TO_TEAM.prototype.pokeUid = 0;

        /**
         * CR_ADD_TO_TEAM posIdx.
         * @member {number} posIdx
         * @memberof Hit.CR_ADD_TO_TEAM
         * @instance
         */
        CR_ADD_TO_TEAM.prototype.posIdx = 0;

        /**
         * Creates a new CR_ADD_TO_TEAM instance using the specified properties.
         * @function create
         * @memberof Hit.CR_ADD_TO_TEAM
         * @static
         * @param {Hit.ICR_ADD_TO_TEAM=} [properties] Properties to set
         * @returns {Hit.CR_ADD_TO_TEAM} CR_ADD_TO_TEAM instance
         */
        CR_ADD_TO_TEAM.create = function create(properties) {
            return new CR_ADD_TO_TEAM(properties);
        };

        /**
         * Encodes the specified CR_ADD_TO_TEAM message. Does not implicitly {@link Hit.CR_ADD_TO_TEAM.verify|verify} messages.
         * @function encode
         * @memberof Hit.CR_ADD_TO_TEAM
         * @static
         * @param {Hit.ICR_ADD_TO_TEAM} message CR_ADD_TO_TEAM message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CR_ADD_TO_TEAM.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.pokeUid != null && message.hasOwnProperty("pokeUid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.pokeUid);
            if (message.posIdx != null && message.hasOwnProperty("posIdx"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.posIdx);
            return writer;
        };

        /**
         * Encodes the specified CR_ADD_TO_TEAM message, length delimited. Does not implicitly {@link Hit.CR_ADD_TO_TEAM.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Hit.CR_ADD_TO_TEAM
         * @static
         * @param {Hit.ICR_ADD_TO_TEAM} message CR_ADD_TO_TEAM message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CR_ADD_TO_TEAM.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CR_ADD_TO_TEAM message from the specified reader or buffer.
         * @function decode
         * @memberof Hit.CR_ADD_TO_TEAM
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Hit.CR_ADD_TO_TEAM} CR_ADD_TO_TEAM
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CR_ADD_TO_TEAM.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Hit.CR_ADD_TO_TEAM();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.pokeUid = reader.int32();
                    break;
                case 2:
                    message.posIdx = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CR_ADD_TO_TEAM message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Hit.CR_ADD_TO_TEAM
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Hit.CR_ADD_TO_TEAM} CR_ADD_TO_TEAM
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CR_ADD_TO_TEAM.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CR_ADD_TO_TEAM message.
         * @function verify
         * @memberof Hit.CR_ADD_TO_TEAM
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CR_ADD_TO_TEAM.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.pokeUid != null && message.hasOwnProperty("pokeUid"))
                if (!$util.isInteger(message.pokeUid))
                    return "pokeUid: integer expected";
            if (message.posIdx != null && message.hasOwnProperty("posIdx"))
                if (!$util.isInteger(message.posIdx))
                    return "posIdx: integer expected";
            return null;
        };

        /**
         * Creates a CR_ADD_TO_TEAM message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Hit.CR_ADD_TO_TEAM
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Hit.CR_ADD_TO_TEAM} CR_ADD_TO_TEAM
         */
        CR_ADD_TO_TEAM.fromObject = function fromObject(object) {
            if (object instanceof $root.Hit.CR_ADD_TO_TEAM)
                return object;
            var message = new $root.Hit.CR_ADD_TO_TEAM();
            if (object.pokeUid != null)
                message.pokeUid = object.pokeUid | 0;
            if (object.posIdx != null)
                message.posIdx = object.posIdx | 0;
            return message;
        };

        /**
         * Creates a plain object from a CR_ADD_TO_TEAM message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Hit.CR_ADD_TO_TEAM
         * @static
         * @param {Hit.CR_ADD_TO_TEAM} message CR_ADD_TO_TEAM
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CR_ADD_TO_TEAM.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.pokeUid = 0;
                object.posIdx = 0;
            }
            if (message.pokeUid != null && message.hasOwnProperty("pokeUid"))
                object.pokeUid = message.pokeUid;
            if (message.posIdx != null && message.hasOwnProperty("posIdx"))
                object.posIdx = message.posIdx;
            return object;
        };

        /**
         * Converts this CR_ADD_TO_TEAM to JSON.
         * @function toJSON
         * @memberof Hit.CR_ADD_TO_TEAM
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CR_ADD_TO_TEAM.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CR_ADD_TO_TEAM;
    })();

    Hit.RC_ADD_TO_TEAM_RESULT = (function() {

        /**
         * Properties of a RC_ADD_TO_TEAM_RESULT.
         * @memberof Hit
         * @interface IRC_ADD_TO_TEAM_RESULT
         * @property {number|null} [errCode] RC_ADD_TO_TEAM_RESULT errCode
         */

        /**
         * Constructs a new RC_ADD_TO_TEAM_RESULT.
         * @memberof Hit
         * @classdesc Represents a RC_ADD_TO_TEAM_RESULT.
         * @implements IRC_ADD_TO_TEAM_RESULT
         * @constructor
         * @param {Hit.IRC_ADD_TO_TEAM_RESULT=} [properties] Properties to set
         */
        function RC_ADD_TO_TEAM_RESULT(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RC_ADD_TO_TEAM_RESULT errCode.
         * @member {number} errCode
         * @memberof Hit.RC_ADD_TO_TEAM_RESULT
         * @instance
         */
        RC_ADD_TO_TEAM_RESULT.prototype.errCode = 0;

        /**
         * Creates a new RC_ADD_TO_TEAM_RESULT instance using the specified properties.
         * @function create
         * @memberof Hit.RC_ADD_TO_TEAM_RESULT
         * @static
         * @param {Hit.IRC_ADD_TO_TEAM_RESULT=} [properties] Properties to set
         * @returns {Hit.RC_ADD_TO_TEAM_RESULT} RC_ADD_TO_TEAM_RESULT instance
         */
        RC_ADD_TO_TEAM_RESULT.create = function create(properties) {
            return new RC_ADD_TO_TEAM_RESULT(properties);
        };

        /**
         * Encodes the specified RC_ADD_TO_TEAM_RESULT message. Does not implicitly {@link Hit.RC_ADD_TO_TEAM_RESULT.verify|verify} messages.
         * @function encode
         * @memberof Hit.RC_ADD_TO_TEAM_RESULT
         * @static
         * @param {Hit.IRC_ADD_TO_TEAM_RESULT} message RC_ADD_TO_TEAM_RESULT message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RC_ADD_TO_TEAM_RESULT.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errCode);
            return writer;
        };

        /**
         * Encodes the specified RC_ADD_TO_TEAM_RESULT message, length delimited. Does not implicitly {@link Hit.RC_ADD_TO_TEAM_RESULT.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Hit.RC_ADD_TO_TEAM_RESULT
         * @static
         * @param {Hit.IRC_ADD_TO_TEAM_RESULT} message RC_ADD_TO_TEAM_RESULT message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RC_ADD_TO_TEAM_RESULT.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RC_ADD_TO_TEAM_RESULT message from the specified reader or buffer.
         * @function decode
         * @memberof Hit.RC_ADD_TO_TEAM_RESULT
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Hit.RC_ADD_TO_TEAM_RESULT} RC_ADD_TO_TEAM_RESULT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RC_ADD_TO_TEAM_RESULT.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Hit.RC_ADD_TO_TEAM_RESULT();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.errCode = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RC_ADD_TO_TEAM_RESULT message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Hit.RC_ADD_TO_TEAM_RESULT
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Hit.RC_ADD_TO_TEAM_RESULT} RC_ADD_TO_TEAM_RESULT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RC_ADD_TO_TEAM_RESULT.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RC_ADD_TO_TEAM_RESULT message.
         * @function verify
         * @memberof Hit.RC_ADD_TO_TEAM_RESULT
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RC_ADD_TO_TEAM_RESULT.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                if (!$util.isInteger(message.errCode))
                    return "errCode: integer expected";
            return null;
        };

        /**
         * Creates a RC_ADD_TO_TEAM_RESULT message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Hit.RC_ADD_TO_TEAM_RESULT
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Hit.RC_ADD_TO_TEAM_RESULT} RC_ADD_TO_TEAM_RESULT
         */
        RC_ADD_TO_TEAM_RESULT.fromObject = function fromObject(object) {
            if (object instanceof $root.Hit.RC_ADD_TO_TEAM_RESULT)
                return object;
            var message = new $root.Hit.RC_ADD_TO_TEAM_RESULT();
            if (object.errCode != null)
                message.errCode = object.errCode | 0;
            return message;
        };

        /**
         * Creates a plain object from a RC_ADD_TO_TEAM_RESULT message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Hit.RC_ADD_TO_TEAM_RESULT
         * @static
         * @param {Hit.RC_ADD_TO_TEAM_RESULT} message RC_ADD_TO_TEAM_RESULT
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RC_ADD_TO_TEAM_RESULT.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.errCode = 0;
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                object.errCode = message.errCode;
            return object;
        };

        /**
         * Converts this RC_ADD_TO_TEAM_RESULT to JSON.
         * @function toJSON
         * @memberof Hit.RC_ADD_TO_TEAM_RESULT
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RC_ADD_TO_TEAM_RESULT.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RC_ADD_TO_TEAM_RESULT;
    })();

    Hit.AdventureTeam = (function() {

        /**
         * Properties of an AdventureTeam.
         * @memberof Hit
         * @interface IAdventureTeam
         * @property {Array.<Hit.IAdventureTeamMember>|null} [members] AdventureTeam members
         */

        /**
         * Constructs a new AdventureTeam.
         * @memberof Hit
         * @classdesc Represents an AdventureTeam.
         * @implements IAdventureTeam
         * @constructor
         * @param {Hit.IAdventureTeam=} [properties] Properties to set
         */
        function AdventureTeam(properties) {
            this.members = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AdventureTeam members.
         * @member {Array.<Hit.IAdventureTeamMember>} members
         * @memberof Hit.AdventureTeam
         * @instance
         */
        AdventureTeam.prototype.members = $util.emptyArray;

        /**
         * Creates a new AdventureTeam instance using the specified properties.
         * @function create
         * @memberof Hit.AdventureTeam
         * @static
         * @param {Hit.IAdventureTeam=} [properties] Properties to set
         * @returns {Hit.AdventureTeam} AdventureTeam instance
         */
        AdventureTeam.create = function create(properties) {
            return new AdventureTeam(properties);
        };

        /**
         * Encodes the specified AdventureTeam message. Does not implicitly {@link Hit.AdventureTeam.verify|verify} messages.
         * @function encode
         * @memberof Hit.AdventureTeam
         * @static
         * @param {Hit.IAdventureTeam} message AdventureTeam message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AdventureTeam.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.members != null && message.members.length)
                for (var i = 0; i < message.members.length; ++i)
                    $root.Hit.AdventureTeamMember.encode(message.members[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified AdventureTeam message, length delimited. Does not implicitly {@link Hit.AdventureTeam.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Hit.AdventureTeam
         * @static
         * @param {Hit.IAdventureTeam} message AdventureTeam message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AdventureTeam.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AdventureTeam message from the specified reader or buffer.
         * @function decode
         * @memberof Hit.AdventureTeam
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Hit.AdventureTeam} AdventureTeam
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AdventureTeam.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Hit.AdventureTeam();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.members && message.members.length))
                        message.members = [];
                    message.members.push($root.Hit.AdventureTeamMember.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AdventureTeam message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Hit.AdventureTeam
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Hit.AdventureTeam} AdventureTeam
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AdventureTeam.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AdventureTeam message.
         * @function verify
         * @memberof Hit.AdventureTeam
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AdventureTeam.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.members != null && message.hasOwnProperty("members")) {
                if (!Array.isArray(message.members))
                    return "members: array expected";
                for (var i = 0; i < message.members.length; ++i) {
                    var error = $root.Hit.AdventureTeamMember.verify(message.members[i]);
                    if (error)
                        return "members." + error;
                }
            }
            return null;
        };

        /**
         * Creates an AdventureTeam message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Hit.AdventureTeam
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Hit.AdventureTeam} AdventureTeam
         */
        AdventureTeam.fromObject = function fromObject(object) {
            if (object instanceof $root.Hit.AdventureTeam)
                return object;
            var message = new $root.Hit.AdventureTeam();
            if (object.members) {
                if (!Array.isArray(object.members))
                    throw TypeError(".Hit.AdventureTeam.members: array expected");
                message.members = [];
                for (var i = 0; i < object.members.length; ++i) {
                    if (typeof object.members[i] !== "object")
                        throw TypeError(".Hit.AdventureTeam.members: object expected");
                    message.members[i] = $root.Hit.AdventureTeamMember.fromObject(object.members[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an AdventureTeam message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Hit.AdventureTeam
         * @static
         * @param {Hit.AdventureTeam} message AdventureTeam
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AdventureTeam.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.members = [];
            if (message.members && message.members.length) {
                object.members = [];
                for (var j = 0; j < message.members.length; ++j)
                    object.members[j] = $root.Hit.AdventureTeamMember.toObject(message.members[j], options);
            }
            return object;
        };

        /**
         * Converts this AdventureTeam to JSON.
         * @function toJSON
         * @memberof Hit.AdventureTeam
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AdventureTeam.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AdventureTeam;
    })();

    Hit.AdventureTeamMember = (function() {

        /**
         * Properties of an AdventureTeamMember.
         * @memberof Hit
         * @interface IAdventureTeamMember
         * @property {number|null} [uid] AdventureTeamMember uid
         */

        /**
         * Constructs a new AdventureTeamMember.
         * @memberof Hit
         * @classdesc Represents an AdventureTeamMember.
         * @implements IAdventureTeamMember
         * @constructor
         * @param {Hit.IAdventureTeamMember=} [properties] Properties to set
         */
        function AdventureTeamMember(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AdventureTeamMember uid.
         * @member {number} uid
         * @memberof Hit.AdventureTeamMember
         * @instance
         */
        AdventureTeamMember.prototype.uid = 0;

        /**
         * Creates a new AdventureTeamMember instance using the specified properties.
         * @function create
         * @memberof Hit.AdventureTeamMember
         * @static
         * @param {Hit.IAdventureTeamMember=} [properties] Properties to set
         * @returns {Hit.AdventureTeamMember} AdventureTeamMember instance
         */
        AdventureTeamMember.create = function create(properties) {
            return new AdventureTeamMember(properties);
        };

        /**
         * Encodes the specified AdventureTeamMember message. Does not implicitly {@link Hit.AdventureTeamMember.verify|verify} messages.
         * @function encode
         * @memberof Hit.AdventureTeamMember
         * @static
         * @param {Hit.IAdventureTeamMember} message AdventureTeamMember message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AdventureTeamMember.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.uid);
            return writer;
        };

        /**
         * Encodes the specified AdventureTeamMember message, length delimited. Does not implicitly {@link Hit.AdventureTeamMember.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Hit.AdventureTeamMember
         * @static
         * @param {Hit.IAdventureTeamMember} message AdventureTeamMember message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AdventureTeamMember.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AdventureTeamMember message from the specified reader or buffer.
         * @function decode
         * @memberof Hit.AdventureTeamMember
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Hit.AdventureTeamMember} AdventureTeamMember
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AdventureTeamMember.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Hit.AdventureTeamMember();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AdventureTeamMember message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Hit.AdventureTeamMember
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Hit.AdventureTeamMember} AdventureTeamMember
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AdventureTeamMember.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AdventureTeamMember message.
         * @function verify
         * @memberof Hit.AdventureTeamMember
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AdventureTeamMember.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid))
                    return "uid: integer expected";
            return null;
        };

        /**
         * Creates an AdventureTeamMember message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Hit.AdventureTeamMember
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Hit.AdventureTeamMember} AdventureTeamMember
         */
        AdventureTeamMember.fromObject = function fromObject(object) {
            if (object instanceof $root.Hit.AdventureTeamMember)
                return object;
            var message = new $root.Hit.AdventureTeamMember();
            if (object.uid != null)
                message.uid = object.uid | 0;
            return message;
        };

        /**
         * Creates a plain object from an AdventureTeamMember message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Hit.AdventureTeamMember
         * @static
         * @param {Hit.AdventureTeamMember} message AdventureTeamMember
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AdventureTeamMember.toObject = function toObject(message, options) {
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
         * Converts this AdventureTeamMember to JSON.
         * @function toJSON
         * @memberof Hit.AdventureTeamMember
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AdventureTeamMember.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AdventureTeamMember;
    })();

    Hit.PokeList = (function() {

        /**
         * Properties of a PokeList.
         * @memberof Hit
         * @interface IPokeList
         * @property {Array.<Hit.IPokeInfo>|null} [pokes] PokeList pokes
         */

        /**
         * Constructs a new PokeList.
         * @memberof Hit
         * @classdesc Represents a PokeList.
         * @implements IPokeList
         * @constructor
         * @param {Hit.IPokeList=} [properties] Properties to set
         */
        function PokeList(properties) {
            this.pokes = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PokeList pokes.
         * @member {Array.<Hit.IPokeInfo>} pokes
         * @memberof Hit.PokeList
         * @instance
         */
        PokeList.prototype.pokes = $util.emptyArray;

        /**
         * Creates a new PokeList instance using the specified properties.
         * @function create
         * @memberof Hit.PokeList
         * @static
         * @param {Hit.IPokeList=} [properties] Properties to set
         * @returns {Hit.PokeList} PokeList instance
         */
        PokeList.create = function create(properties) {
            return new PokeList(properties);
        };

        /**
         * Encodes the specified PokeList message. Does not implicitly {@link Hit.PokeList.verify|verify} messages.
         * @function encode
         * @memberof Hit.PokeList
         * @static
         * @param {Hit.IPokeList} message PokeList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PokeList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.pokes != null && message.pokes.length)
                for (var i = 0; i < message.pokes.length; ++i)
                    $root.Hit.PokeInfo.encode(message.pokes[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified PokeList message, length delimited. Does not implicitly {@link Hit.PokeList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Hit.PokeList
         * @static
         * @param {Hit.IPokeList} message PokeList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PokeList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PokeList message from the specified reader or buffer.
         * @function decode
         * @memberof Hit.PokeList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Hit.PokeList} PokeList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PokeList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Hit.PokeList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.pokes && message.pokes.length))
                        message.pokes = [];
                    message.pokes.push($root.Hit.PokeInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PokeList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Hit.PokeList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Hit.PokeList} PokeList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PokeList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PokeList message.
         * @function verify
         * @memberof Hit.PokeList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PokeList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.pokes != null && message.hasOwnProperty("pokes")) {
                if (!Array.isArray(message.pokes))
                    return "pokes: array expected";
                for (var i = 0; i < message.pokes.length; ++i) {
                    var error = $root.Hit.PokeInfo.verify(message.pokes[i]);
                    if (error)
                        return "pokes." + error;
                }
            }
            return null;
        };

        /**
         * Creates a PokeList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Hit.PokeList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Hit.PokeList} PokeList
         */
        PokeList.fromObject = function fromObject(object) {
            if (object instanceof $root.Hit.PokeList)
                return object;
            var message = new $root.Hit.PokeList();
            if (object.pokes) {
                if (!Array.isArray(object.pokes))
                    throw TypeError(".Hit.PokeList.pokes: array expected");
                message.pokes = [];
                for (var i = 0; i < object.pokes.length; ++i) {
                    if (typeof object.pokes[i] !== "object")
                        throw TypeError(".Hit.PokeList.pokes: object expected");
                    message.pokes[i] = $root.Hit.PokeInfo.fromObject(object.pokes[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a PokeList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Hit.PokeList
         * @static
         * @param {Hit.PokeList} message PokeList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PokeList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.pokes = [];
            if (message.pokes && message.pokes.length) {
                object.pokes = [];
                for (var j = 0; j < message.pokes.length; ++j)
                    object.pokes[j] = $root.Hit.PokeInfo.toObject(message.pokes[j], options);
            }
            return object;
        };

        /**
         * Converts this PokeList to JSON.
         * @function toJSON
         * @memberof Hit.PokeList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PokeList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PokeList;
    })();

    Hit.PokeInfo = (function() {

        /**
         * Properties of a PokeInfo.
         * @memberof Hit
         * @interface IPokeInfo
         * @property {number|null} [uid] PokeInfo uid
         * @property {number|null} [id] PokeInfo id
         * @property {number|null} [lv] PokeInfo lv
         * @property {number|null} [adv] PokeInfo adv
         * @property {number|null} [alv] PokeInfo alv
         * @property {number|null} [ivsHp] PokeInfo ivsHp
         * @property {number|null} [ivsAtk] PokeInfo ivsAtk
         * @property {number|null} [ivsDef] PokeInfo ivsDef
         * @property {number|null} [ivsSpa] PokeInfo ivsSpa
         * @property {number|null} [ivsSpd] PokeInfo ivsSpd
         * @property {number|null} [ivsSpeed] PokeInfo ivsSpeed
         * @property {number|null} [ivsAccu] PokeInfo ivsAccu
         * @property {number|null} [ivsEvasion] PokeInfo ivsEvasion
         * @property {number|null} [nature] PokeInfo nature
         * @property {number|null} [ability] PokeInfo ability
         * @property {Array.<number>|null} [moves] PokeInfo moves
         */

        /**
         * Constructs a new PokeInfo.
         * @memberof Hit
         * @classdesc Represents a PokeInfo.
         * @implements IPokeInfo
         * @constructor
         * @param {Hit.IPokeInfo=} [properties] Properties to set
         */
        function PokeInfo(properties) {
            this.moves = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PokeInfo uid.
         * @member {number} uid
         * @memberof Hit.PokeInfo
         * @instance
         */
        PokeInfo.prototype.uid = 0;

        /**
         * PokeInfo id.
         * @member {number} id
         * @memberof Hit.PokeInfo
         * @instance
         */
        PokeInfo.prototype.id = 0;

        /**
         * PokeInfo lv.
         * @member {number} lv
         * @memberof Hit.PokeInfo
         * @instance
         */
        PokeInfo.prototype.lv = 0;

        /**
         * PokeInfo adv.
         * @member {number} adv
         * @memberof Hit.PokeInfo
         * @instance
         */
        PokeInfo.prototype.adv = 0;

        /**
         * PokeInfo alv.
         * @member {number} alv
         * @memberof Hit.PokeInfo
         * @instance
         */
        PokeInfo.prototype.alv = 0;

        /**
         * PokeInfo ivsHp.
         * @member {number} ivsHp
         * @memberof Hit.PokeInfo
         * @instance
         */
        PokeInfo.prototype.ivsHp = 0;

        /**
         * PokeInfo ivsAtk.
         * @member {number} ivsAtk
         * @memberof Hit.PokeInfo
         * @instance
         */
        PokeInfo.prototype.ivsAtk = 0;

        /**
         * PokeInfo ivsDef.
         * @member {number} ivsDef
         * @memberof Hit.PokeInfo
         * @instance
         */
        PokeInfo.prototype.ivsDef = 0;

        /**
         * PokeInfo ivsSpa.
         * @member {number} ivsSpa
         * @memberof Hit.PokeInfo
         * @instance
         */
        PokeInfo.prototype.ivsSpa = 0;

        /**
         * PokeInfo ivsSpd.
         * @member {number} ivsSpd
         * @memberof Hit.PokeInfo
         * @instance
         */
        PokeInfo.prototype.ivsSpd = 0;

        /**
         * PokeInfo ivsSpeed.
         * @member {number} ivsSpeed
         * @memberof Hit.PokeInfo
         * @instance
         */
        PokeInfo.prototype.ivsSpeed = 0;

        /**
         * PokeInfo ivsAccu.
         * @member {number} ivsAccu
         * @memberof Hit.PokeInfo
         * @instance
         */
        PokeInfo.prototype.ivsAccu = 0;

        /**
         * PokeInfo ivsEvasion.
         * @member {number} ivsEvasion
         * @memberof Hit.PokeInfo
         * @instance
         */
        PokeInfo.prototype.ivsEvasion = 0;

        /**
         * PokeInfo nature.
         * @member {number} nature
         * @memberof Hit.PokeInfo
         * @instance
         */
        PokeInfo.prototype.nature = 0;

        /**
         * PokeInfo ability.
         * @member {number} ability
         * @memberof Hit.PokeInfo
         * @instance
         */
        PokeInfo.prototype.ability = 0;

        /**
         * PokeInfo moves.
         * @member {Array.<number>} moves
         * @memberof Hit.PokeInfo
         * @instance
         */
        PokeInfo.prototype.moves = $util.emptyArray;

        /**
         * Creates a new PokeInfo instance using the specified properties.
         * @function create
         * @memberof Hit.PokeInfo
         * @static
         * @param {Hit.IPokeInfo=} [properties] Properties to set
         * @returns {Hit.PokeInfo} PokeInfo instance
         */
        PokeInfo.create = function create(properties) {
            return new PokeInfo(properties);
        };

        /**
         * Encodes the specified PokeInfo message. Does not implicitly {@link Hit.PokeInfo.verify|verify} messages.
         * @function encode
         * @memberof Hit.PokeInfo
         * @static
         * @param {Hit.IPokeInfo} message PokeInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PokeInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.uid);
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.id);
            if (message.lv != null && message.hasOwnProperty("lv"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.lv);
            if (message.adv != null && message.hasOwnProperty("adv"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.adv);
            if (message.alv != null && message.hasOwnProperty("alv"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.alv);
            if (message.ivsHp != null && message.hasOwnProperty("ivsHp"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.ivsHp);
            if (message.ivsAtk != null && message.hasOwnProperty("ivsAtk"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.ivsAtk);
            if (message.ivsDef != null && message.hasOwnProperty("ivsDef"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.ivsDef);
            if (message.ivsSpa != null && message.hasOwnProperty("ivsSpa"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.ivsSpa);
            if (message.ivsSpd != null && message.hasOwnProperty("ivsSpd"))
                writer.uint32(/* id 10, wireType 0 =*/80).int32(message.ivsSpd);
            if (message.ivsSpeed != null && message.hasOwnProperty("ivsSpeed"))
                writer.uint32(/* id 11, wireType 0 =*/88).int32(message.ivsSpeed);
            if (message.ivsAccu != null && message.hasOwnProperty("ivsAccu"))
                writer.uint32(/* id 12, wireType 0 =*/96).int32(message.ivsAccu);
            if (message.ivsEvasion != null && message.hasOwnProperty("ivsEvasion"))
                writer.uint32(/* id 13, wireType 0 =*/104).int32(message.ivsEvasion);
            if (message.nature != null && message.hasOwnProperty("nature"))
                writer.uint32(/* id 14, wireType 0 =*/112).int32(message.nature);
            if (message.ability != null && message.hasOwnProperty("ability"))
                writer.uint32(/* id 15, wireType 0 =*/120).int32(message.ability);
            if (message.moves != null && message.moves.length) {
                writer.uint32(/* id 16, wireType 2 =*/130).fork();
                for (var i = 0; i < message.moves.length; ++i)
                    writer.int32(message.moves[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified PokeInfo message, length delimited. Does not implicitly {@link Hit.PokeInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Hit.PokeInfo
         * @static
         * @param {Hit.IPokeInfo} message PokeInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PokeInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PokeInfo message from the specified reader or buffer.
         * @function decode
         * @memberof Hit.PokeInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Hit.PokeInfo} PokeInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PokeInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Hit.PokeInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.int32();
                    break;
                case 2:
                    message.id = reader.int32();
                    break;
                case 3:
                    message.lv = reader.int32();
                    break;
                case 4:
                    message.adv = reader.int32();
                    break;
                case 5:
                    message.alv = reader.int32();
                    break;
                case 6:
                    message.ivsHp = reader.int32();
                    break;
                case 7:
                    message.ivsAtk = reader.int32();
                    break;
                case 8:
                    message.ivsDef = reader.int32();
                    break;
                case 9:
                    message.ivsSpa = reader.int32();
                    break;
                case 10:
                    message.ivsSpd = reader.int32();
                    break;
                case 11:
                    message.ivsSpeed = reader.int32();
                    break;
                case 12:
                    message.ivsAccu = reader.int32();
                    break;
                case 13:
                    message.ivsEvasion = reader.int32();
                    break;
                case 14:
                    message.nature = reader.int32();
                    break;
                case 15:
                    message.ability = reader.int32();
                    break;
                case 16:
                    if (!(message.moves && message.moves.length))
                        message.moves = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.moves.push(reader.int32());
                    } else
                        message.moves.push(reader.int32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PokeInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Hit.PokeInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Hit.PokeInfo} PokeInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PokeInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PokeInfo message.
         * @function verify
         * @memberof Hit.PokeInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PokeInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid))
                    return "uid: integer expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.lv != null && message.hasOwnProperty("lv"))
                if (!$util.isInteger(message.lv))
                    return "lv: integer expected";
            if (message.adv != null && message.hasOwnProperty("adv"))
                if (!$util.isInteger(message.adv))
                    return "adv: integer expected";
            if (message.alv != null && message.hasOwnProperty("alv"))
                if (!$util.isInteger(message.alv))
                    return "alv: integer expected";
            if (message.ivsHp != null && message.hasOwnProperty("ivsHp"))
                if (!$util.isInteger(message.ivsHp))
                    return "ivsHp: integer expected";
            if (message.ivsAtk != null && message.hasOwnProperty("ivsAtk"))
                if (!$util.isInteger(message.ivsAtk))
                    return "ivsAtk: integer expected";
            if (message.ivsDef != null && message.hasOwnProperty("ivsDef"))
                if (!$util.isInteger(message.ivsDef))
                    return "ivsDef: integer expected";
            if (message.ivsSpa != null && message.hasOwnProperty("ivsSpa"))
                if (!$util.isInteger(message.ivsSpa))
                    return "ivsSpa: integer expected";
            if (message.ivsSpd != null && message.hasOwnProperty("ivsSpd"))
                if (!$util.isInteger(message.ivsSpd))
                    return "ivsSpd: integer expected";
            if (message.ivsSpeed != null && message.hasOwnProperty("ivsSpeed"))
                if (!$util.isInteger(message.ivsSpeed))
                    return "ivsSpeed: integer expected";
            if (message.ivsAccu != null && message.hasOwnProperty("ivsAccu"))
                if (!$util.isInteger(message.ivsAccu))
                    return "ivsAccu: integer expected";
            if (message.ivsEvasion != null && message.hasOwnProperty("ivsEvasion"))
                if (!$util.isInteger(message.ivsEvasion))
                    return "ivsEvasion: integer expected";
            if (message.nature != null && message.hasOwnProperty("nature"))
                if (!$util.isInteger(message.nature))
                    return "nature: integer expected";
            if (message.ability != null && message.hasOwnProperty("ability"))
                if (!$util.isInteger(message.ability))
                    return "ability: integer expected";
            if (message.moves != null && message.hasOwnProperty("moves")) {
                if (!Array.isArray(message.moves))
                    return "moves: array expected";
                for (var i = 0; i < message.moves.length; ++i)
                    if (!$util.isInteger(message.moves[i]))
                        return "moves: integer[] expected";
            }
            return null;
        };

        /**
         * Creates a PokeInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Hit.PokeInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Hit.PokeInfo} PokeInfo
         */
        PokeInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.Hit.PokeInfo)
                return object;
            var message = new $root.Hit.PokeInfo();
            if (object.uid != null)
                message.uid = object.uid | 0;
            if (object.id != null)
                message.id = object.id | 0;
            if (object.lv != null)
                message.lv = object.lv | 0;
            if (object.adv != null)
                message.adv = object.adv | 0;
            if (object.alv != null)
                message.alv = object.alv | 0;
            if (object.ivsHp != null)
                message.ivsHp = object.ivsHp | 0;
            if (object.ivsAtk != null)
                message.ivsAtk = object.ivsAtk | 0;
            if (object.ivsDef != null)
                message.ivsDef = object.ivsDef | 0;
            if (object.ivsSpa != null)
                message.ivsSpa = object.ivsSpa | 0;
            if (object.ivsSpd != null)
                message.ivsSpd = object.ivsSpd | 0;
            if (object.ivsSpeed != null)
                message.ivsSpeed = object.ivsSpeed | 0;
            if (object.ivsAccu != null)
                message.ivsAccu = object.ivsAccu | 0;
            if (object.ivsEvasion != null)
                message.ivsEvasion = object.ivsEvasion | 0;
            if (object.nature != null)
                message.nature = object.nature | 0;
            if (object.ability != null)
                message.ability = object.ability | 0;
            if (object.moves) {
                if (!Array.isArray(object.moves))
                    throw TypeError(".Hit.PokeInfo.moves: array expected");
                message.moves = [];
                for (var i = 0; i < object.moves.length; ++i)
                    message.moves[i] = object.moves[i] | 0;
            }
            return message;
        };

        /**
         * Creates a plain object from a PokeInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Hit.PokeInfo
         * @static
         * @param {Hit.PokeInfo} message PokeInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PokeInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.moves = [];
            if (options.defaults) {
                object.uid = 0;
                object.id = 0;
                object.lv = 0;
                object.adv = 0;
                object.alv = 0;
                object.ivsHp = 0;
                object.ivsAtk = 0;
                object.ivsDef = 0;
                object.ivsSpa = 0;
                object.ivsSpd = 0;
                object.ivsSpeed = 0;
                object.ivsAccu = 0;
                object.ivsEvasion = 0;
                object.nature = 0;
                object.ability = 0;
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.lv != null && message.hasOwnProperty("lv"))
                object.lv = message.lv;
            if (message.adv != null && message.hasOwnProperty("adv"))
                object.adv = message.adv;
            if (message.alv != null && message.hasOwnProperty("alv"))
                object.alv = message.alv;
            if (message.ivsHp != null && message.hasOwnProperty("ivsHp"))
                object.ivsHp = message.ivsHp;
            if (message.ivsAtk != null && message.hasOwnProperty("ivsAtk"))
                object.ivsAtk = message.ivsAtk;
            if (message.ivsDef != null && message.hasOwnProperty("ivsDef"))
                object.ivsDef = message.ivsDef;
            if (message.ivsSpa != null && message.hasOwnProperty("ivsSpa"))
                object.ivsSpa = message.ivsSpa;
            if (message.ivsSpd != null && message.hasOwnProperty("ivsSpd"))
                object.ivsSpd = message.ivsSpd;
            if (message.ivsSpeed != null && message.hasOwnProperty("ivsSpeed"))
                object.ivsSpeed = message.ivsSpeed;
            if (message.ivsAccu != null && message.hasOwnProperty("ivsAccu"))
                object.ivsAccu = message.ivsAccu;
            if (message.ivsEvasion != null && message.hasOwnProperty("ivsEvasion"))
                object.ivsEvasion = message.ivsEvasion;
            if (message.nature != null && message.hasOwnProperty("nature"))
                object.nature = message.nature;
            if (message.ability != null && message.hasOwnProperty("ability"))
                object.ability = message.ability;
            if (message.moves && message.moves.length) {
                object.moves = [];
                for (var j = 0; j < message.moves.length; ++j)
                    object.moves[j] = message.moves[j];
            }
            return object;
        };

        /**
         * Converts this PokeInfo to JSON.
         * @function toJSON
         * @memberof Hit.PokeInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PokeInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PokeInfo;
    })();

    Hit.CR_POKE_LV_UP = (function() {

        /**
         * Properties of a CR_POKE_LV_UP.
         * @memberof Hit
         * @interface ICR_POKE_LV_UP
         * @property {number|null} [pokeUid] CR_POKE_LV_UP pokeUid
         */

        /**
         * Constructs a new CR_POKE_LV_UP.
         * @memberof Hit
         * @classdesc Represents a CR_POKE_LV_UP.
         * @implements ICR_POKE_LV_UP
         * @constructor
         * @param {Hit.ICR_POKE_LV_UP=} [properties] Properties to set
         */
        function CR_POKE_LV_UP(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CR_POKE_LV_UP pokeUid.
         * @member {number} pokeUid
         * @memberof Hit.CR_POKE_LV_UP
         * @instance
         */
        CR_POKE_LV_UP.prototype.pokeUid = 0;

        /**
         * Creates a new CR_POKE_LV_UP instance using the specified properties.
         * @function create
         * @memberof Hit.CR_POKE_LV_UP
         * @static
         * @param {Hit.ICR_POKE_LV_UP=} [properties] Properties to set
         * @returns {Hit.CR_POKE_LV_UP} CR_POKE_LV_UP instance
         */
        CR_POKE_LV_UP.create = function create(properties) {
            return new CR_POKE_LV_UP(properties);
        };

        /**
         * Encodes the specified CR_POKE_LV_UP message. Does not implicitly {@link Hit.CR_POKE_LV_UP.verify|verify} messages.
         * @function encode
         * @memberof Hit.CR_POKE_LV_UP
         * @static
         * @param {Hit.ICR_POKE_LV_UP} message CR_POKE_LV_UP message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CR_POKE_LV_UP.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.pokeUid != null && message.hasOwnProperty("pokeUid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.pokeUid);
            return writer;
        };

        /**
         * Encodes the specified CR_POKE_LV_UP message, length delimited. Does not implicitly {@link Hit.CR_POKE_LV_UP.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Hit.CR_POKE_LV_UP
         * @static
         * @param {Hit.ICR_POKE_LV_UP} message CR_POKE_LV_UP message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CR_POKE_LV_UP.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CR_POKE_LV_UP message from the specified reader or buffer.
         * @function decode
         * @memberof Hit.CR_POKE_LV_UP
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Hit.CR_POKE_LV_UP} CR_POKE_LV_UP
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CR_POKE_LV_UP.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Hit.CR_POKE_LV_UP();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.pokeUid = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CR_POKE_LV_UP message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Hit.CR_POKE_LV_UP
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Hit.CR_POKE_LV_UP} CR_POKE_LV_UP
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CR_POKE_LV_UP.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CR_POKE_LV_UP message.
         * @function verify
         * @memberof Hit.CR_POKE_LV_UP
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CR_POKE_LV_UP.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.pokeUid != null && message.hasOwnProperty("pokeUid"))
                if (!$util.isInteger(message.pokeUid))
                    return "pokeUid: integer expected";
            return null;
        };

        /**
         * Creates a CR_POKE_LV_UP message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Hit.CR_POKE_LV_UP
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Hit.CR_POKE_LV_UP} CR_POKE_LV_UP
         */
        CR_POKE_LV_UP.fromObject = function fromObject(object) {
            if (object instanceof $root.Hit.CR_POKE_LV_UP)
                return object;
            var message = new $root.Hit.CR_POKE_LV_UP();
            if (object.pokeUid != null)
                message.pokeUid = object.pokeUid | 0;
            return message;
        };

        /**
         * Creates a plain object from a CR_POKE_LV_UP message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Hit.CR_POKE_LV_UP
         * @static
         * @param {Hit.CR_POKE_LV_UP} message CR_POKE_LV_UP
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CR_POKE_LV_UP.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.pokeUid = 0;
            if (message.pokeUid != null && message.hasOwnProperty("pokeUid"))
                object.pokeUid = message.pokeUid;
            return object;
        };

        /**
         * Converts this CR_POKE_LV_UP to JSON.
         * @function toJSON
         * @memberof Hit.CR_POKE_LV_UP
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CR_POKE_LV_UP.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CR_POKE_LV_UP;
    })();

    Hit.RC_POKE_LV_UP_RESULT = (function() {

        /**
         * Properties of a RC_POKE_LV_UP_RESULT.
         * @memberof Hit
         * @interface IRC_POKE_LV_UP_RESULT
         * @property {number|null} [errCode] RC_POKE_LV_UP_RESULT errCode
         */

        /**
         * Constructs a new RC_POKE_LV_UP_RESULT.
         * @memberof Hit
         * @classdesc Represents a RC_POKE_LV_UP_RESULT.
         * @implements IRC_POKE_LV_UP_RESULT
         * @constructor
         * @param {Hit.IRC_POKE_LV_UP_RESULT=} [properties] Properties to set
         */
        function RC_POKE_LV_UP_RESULT(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RC_POKE_LV_UP_RESULT errCode.
         * @member {number} errCode
         * @memberof Hit.RC_POKE_LV_UP_RESULT
         * @instance
         */
        RC_POKE_LV_UP_RESULT.prototype.errCode = 0;

        /**
         * Creates a new RC_POKE_LV_UP_RESULT instance using the specified properties.
         * @function create
         * @memberof Hit.RC_POKE_LV_UP_RESULT
         * @static
         * @param {Hit.IRC_POKE_LV_UP_RESULT=} [properties] Properties to set
         * @returns {Hit.RC_POKE_LV_UP_RESULT} RC_POKE_LV_UP_RESULT instance
         */
        RC_POKE_LV_UP_RESULT.create = function create(properties) {
            return new RC_POKE_LV_UP_RESULT(properties);
        };

        /**
         * Encodes the specified RC_POKE_LV_UP_RESULT message. Does not implicitly {@link Hit.RC_POKE_LV_UP_RESULT.verify|verify} messages.
         * @function encode
         * @memberof Hit.RC_POKE_LV_UP_RESULT
         * @static
         * @param {Hit.IRC_POKE_LV_UP_RESULT} message RC_POKE_LV_UP_RESULT message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RC_POKE_LV_UP_RESULT.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errCode);
            return writer;
        };

        /**
         * Encodes the specified RC_POKE_LV_UP_RESULT message, length delimited. Does not implicitly {@link Hit.RC_POKE_LV_UP_RESULT.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Hit.RC_POKE_LV_UP_RESULT
         * @static
         * @param {Hit.IRC_POKE_LV_UP_RESULT} message RC_POKE_LV_UP_RESULT message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RC_POKE_LV_UP_RESULT.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RC_POKE_LV_UP_RESULT message from the specified reader or buffer.
         * @function decode
         * @memberof Hit.RC_POKE_LV_UP_RESULT
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Hit.RC_POKE_LV_UP_RESULT} RC_POKE_LV_UP_RESULT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RC_POKE_LV_UP_RESULT.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Hit.RC_POKE_LV_UP_RESULT();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.errCode = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RC_POKE_LV_UP_RESULT message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Hit.RC_POKE_LV_UP_RESULT
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Hit.RC_POKE_LV_UP_RESULT} RC_POKE_LV_UP_RESULT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RC_POKE_LV_UP_RESULT.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RC_POKE_LV_UP_RESULT message.
         * @function verify
         * @memberof Hit.RC_POKE_LV_UP_RESULT
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RC_POKE_LV_UP_RESULT.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                if (!$util.isInteger(message.errCode))
                    return "errCode: integer expected";
            return null;
        };

        /**
         * Creates a RC_POKE_LV_UP_RESULT message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Hit.RC_POKE_LV_UP_RESULT
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Hit.RC_POKE_LV_UP_RESULT} RC_POKE_LV_UP_RESULT
         */
        RC_POKE_LV_UP_RESULT.fromObject = function fromObject(object) {
            if (object instanceof $root.Hit.RC_POKE_LV_UP_RESULT)
                return object;
            var message = new $root.Hit.RC_POKE_LV_UP_RESULT();
            if (object.errCode != null)
                message.errCode = object.errCode | 0;
            return message;
        };

        /**
         * Creates a plain object from a RC_POKE_LV_UP_RESULT message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Hit.RC_POKE_LV_UP_RESULT
         * @static
         * @param {Hit.RC_POKE_LV_UP_RESULT} message RC_POKE_LV_UP_RESULT
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RC_POKE_LV_UP_RESULT.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.errCode = 0;
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                object.errCode = message.errCode;
            return object;
        };

        /**
         * Converts this RC_POKE_LV_UP_RESULT to JSON.
         * @function toJSON
         * @memberof Hit.RC_POKE_LV_UP_RESULT
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RC_POKE_LV_UP_RESULT.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RC_POKE_LV_UP_RESULT;
    })();

    Hit.CR_POKE_ADV = (function() {

        /**
         * Properties of a CR_POKE_ADV.
         * @memberof Hit
         * @interface ICR_POKE_ADV
         * @property {number|null} [pokeUid] CR_POKE_ADV pokeUid
         */

        /**
         * Constructs a new CR_POKE_ADV.
         * @memberof Hit
         * @classdesc Represents a CR_POKE_ADV.
         * @implements ICR_POKE_ADV
         * @constructor
         * @param {Hit.ICR_POKE_ADV=} [properties] Properties to set
         */
        function CR_POKE_ADV(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CR_POKE_ADV pokeUid.
         * @member {number} pokeUid
         * @memberof Hit.CR_POKE_ADV
         * @instance
         */
        CR_POKE_ADV.prototype.pokeUid = 0;

        /**
         * Creates a new CR_POKE_ADV instance using the specified properties.
         * @function create
         * @memberof Hit.CR_POKE_ADV
         * @static
         * @param {Hit.ICR_POKE_ADV=} [properties] Properties to set
         * @returns {Hit.CR_POKE_ADV} CR_POKE_ADV instance
         */
        CR_POKE_ADV.create = function create(properties) {
            return new CR_POKE_ADV(properties);
        };

        /**
         * Encodes the specified CR_POKE_ADV message. Does not implicitly {@link Hit.CR_POKE_ADV.verify|verify} messages.
         * @function encode
         * @memberof Hit.CR_POKE_ADV
         * @static
         * @param {Hit.ICR_POKE_ADV} message CR_POKE_ADV message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CR_POKE_ADV.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.pokeUid != null && message.hasOwnProperty("pokeUid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.pokeUid);
            return writer;
        };

        /**
         * Encodes the specified CR_POKE_ADV message, length delimited. Does not implicitly {@link Hit.CR_POKE_ADV.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Hit.CR_POKE_ADV
         * @static
         * @param {Hit.ICR_POKE_ADV} message CR_POKE_ADV message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CR_POKE_ADV.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CR_POKE_ADV message from the specified reader or buffer.
         * @function decode
         * @memberof Hit.CR_POKE_ADV
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Hit.CR_POKE_ADV} CR_POKE_ADV
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CR_POKE_ADV.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Hit.CR_POKE_ADV();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.pokeUid = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CR_POKE_ADV message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Hit.CR_POKE_ADV
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Hit.CR_POKE_ADV} CR_POKE_ADV
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CR_POKE_ADV.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CR_POKE_ADV message.
         * @function verify
         * @memberof Hit.CR_POKE_ADV
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CR_POKE_ADV.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.pokeUid != null && message.hasOwnProperty("pokeUid"))
                if (!$util.isInteger(message.pokeUid))
                    return "pokeUid: integer expected";
            return null;
        };

        /**
         * Creates a CR_POKE_ADV message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Hit.CR_POKE_ADV
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Hit.CR_POKE_ADV} CR_POKE_ADV
         */
        CR_POKE_ADV.fromObject = function fromObject(object) {
            if (object instanceof $root.Hit.CR_POKE_ADV)
                return object;
            var message = new $root.Hit.CR_POKE_ADV();
            if (object.pokeUid != null)
                message.pokeUid = object.pokeUid | 0;
            return message;
        };

        /**
         * Creates a plain object from a CR_POKE_ADV message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Hit.CR_POKE_ADV
         * @static
         * @param {Hit.CR_POKE_ADV} message CR_POKE_ADV
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CR_POKE_ADV.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.pokeUid = 0;
            if (message.pokeUid != null && message.hasOwnProperty("pokeUid"))
                object.pokeUid = message.pokeUid;
            return object;
        };

        /**
         * Converts this CR_POKE_ADV to JSON.
         * @function toJSON
         * @memberof Hit.CR_POKE_ADV
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CR_POKE_ADV.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CR_POKE_ADV;
    })();

    Hit.RC_POKE_ADV_RESULT = (function() {

        /**
         * Properties of a RC_POKE_ADV_RESULT.
         * @memberof Hit
         * @interface IRC_POKE_ADV_RESULT
         * @property {number|null} [errCode] RC_POKE_ADV_RESULT errCode
         */

        /**
         * Constructs a new RC_POKE_ADV_RESULT.
         * @memberof Hit
         * @classdesc Represents a RC_POKE_ADV_RESULT.
         * @implements IRC_POKE_ADV_RESULT
         * @constructor
         * @param {Hit.IRC_POKE_ADV_RESULT=} [properties] Properties to set
         */
        function RC_POKE_ADV_RESULT(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RC_POKE_ADV_RESULT errCode.
         * @member {number} errCode
         * @memberof Hit.RC_POKE_ADV_RESULT
         * @instance
         */
        RC_POKE_ADV_RESULT.prototype.errCode = 0;

        /**
         * Creates a new RC_POKE_ADV_RESULT instance using the specified properties.
         * @function create
         * @memberof Hit.RC_POKE_ADV_RESULT
         * @static
         * @param {Hit.IRC_POKE_ADV_RESULT=} [properties] Properties to set
         * @returns {Hit.RC_POKE_ADV_RESULT} RC_POKE_ADV_RESULT instance
         */
        RC_POKE_ADV_RESULT.create = function create(properties) {
            return new RC_POKE_ADV_RESULT(properties);
        };

        /**
         * Encodes the specified RC_POKE_ADV_RESULT message. Does not implicitly {@link Hit.RC_POKE_ADV_RESULT.verify|verify} messages.
         * @function encode
         * @memberof Hit.RC_POKE_ADV_RESULT
         * @static
         * @param {Hit.IRC_POKE_ADV_RESULT} message RC_POKE_ADV_RESULT message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RC_POKE_ADV_RESULT.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errCode);
            return writer;
        };

        /**
         * Encodes the specified RC_POKE_ADV_RESULT message, length delimited. Does not implicitly {@link Hit.RC_POKE_ADV_RESULT.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Hit.RC_POKE_ADV_RESULT
         * @static
         * @param {Hit.IRC_POKE_ADV_RESULT} message RC_POKE_ADV_RESULT message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RC_POKE_ADV_RESULT.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RC_POKE_ADV_RESULT message from the specified reader or buffer.
         * @function decode
         * @memberof Hit.RC_POKE_ADV_RESULT
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Hit.RC_POKE_ADV_RESULT} RC_POKE_ADV_RESULT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RC_POKE_ADV_RESULT.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Hit.RC_POKE_ADV_RESULT();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.errCode = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RC_POKE_ADV_RESULT message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Hit.RC_POKE_ADV_RESULT
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Hit.RC_POKE_ADV_RESULT} RC_POKE_ADV_RESULT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RC_POKE_ADV_RESULT.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RC_POKE_ADV_RESULT message.
         * @function verify
         * @memberof Hit.RC_POKE_ADV_RESULT
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RC_POKE_ADV_RESULT.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                if (!$util.isInteger(message.errCode))
                    return "errCode: integer expected";
            return null;
        };

        /**
         * Creates a RC_POKE_ADV_RESULT message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Hit.RC_POKE_ADV_RESULT
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Hit.RC_POKE_ADV_RESULT} RC_POKE_ADV_RESULT
         */
        RC_POKE_ADV_RESULT.fromObject = function fromObject(object) {
            if (object instanceof $root.Hit.RC_POKE_ADV_RESULT)
                return object;
            var message = new $root.Hit.RC_POKE_ADV_RESULT();
            if (object.errCode != null)
                message.errCode = object.errCode | 0;
            return message;
        };

        /**
         * Creates a plain object from a RC_POKE_ADV_RESULT message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Hit.RC_POKE_ADV_RESULT
         * @static
         * @param {Hit.RC_POKE_ADV_RESULT} message RC_POKE_ADV_RESULT
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RC_POKE_ADV_RESULT.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.errCode = 0;
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                object.errCode = message.errCode;
            return object;
        };

        /**
         * Converts this RC_POKE_ADV_RESULT to JSON.
         * @function toJSON
         * @memberof Hit.RC_POKE_ADV_RESULT
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RC_POKE_ADV_RESULT.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RC_POKE_ADV_RESULT;
    })();

    Hit.CombatPointRank = (function() {

        /**
         * Properties of a CombatPointRank.
         * @memberof Hit
         * @interface ICombatPointRank
         * @property {string|null} [roleId] CombatPointRank roleId
         * @property {number|null} [score] CombatPointRank score
         * @property {string|null} [name] CombatPointRank name
         */

        /**
         * Constructs a new CombatPointRank.
         * @memberof Hit
         * @classdesc Represents a CombatPointRank.
         * @implements ICombatPointRank
         * @constructor
         * @param {Hit.ICombatPointRank=} [properties] Properties to set
         */
        function CombatPointRank(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CombatPointRank roleId.
         * @member {string} roleId
         * @memberof Hit.CombatPointRank
         * @instance
         */
        CombatPointRank.prototype.roleId = "";

        /**
         * CombatPointRank score.
         * @member {number} score
         * @memberof Hit.CombatPointRank
         * @instance
         */
        CombatPointRank.prototype.score = 0;

        /**
         * CombatPointRank name.
         * @member {string} name
         * @memberof Hit.CombatPointRank
         * @instance
         */
        CombatPointRank.prototype.name = "";

        /**
         * Creates a new CombatPointRank instance using the specified properties.
         * @function create
         * @memberof Hit.CombatPointRank
         * @static
         * @param {Hit.ICombatPointRank=} [properties] Properties to set
         * @returns {Hit.CombatPointRank} CombatPointRank instance
         */
        CombatPointRank.create = function create(properties) {
            return new CombatPointRank(properties);
        };

        /**
         * Encodes the specified CombatPointRank message. Does not implicitly {@link Hit.CombatPointRank.verify|verify} messages.
         * @function encode
         * @memberof Hit.CombatPointRank
         * @static
         * @param {Hit.ICombatPointRank} message CombatPointRank message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CombatPointRank.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roleId != null && message.hasOwnProperty("roleId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.roleId);
            if (message.score != null && message.hasOwnProperty("score"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.score);
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.name);
            return writer;
        };

        /**
         * Encodes the specified CombatPointRank message, length delimited. Does not implicitly {@link Hit.CombatPointRank.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Hit.CombatPointRank
         * @static
         * @param {Hit.ICombatPointRank} message CombatPointRank message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CombatPointRank.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CombatPointRank message from the specified reader or buffer.
         * @function decode
         * @memberof Hit.CombatPointRank
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Hit.CombatPointRank} CombatPointRank
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CombatPointRank.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Hit.CombatPointRank();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.roleId = reader.string();
                    break;
                case 2:
                    message.score = reader.int32();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CombatPointRank message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Hit.CombatPointRank
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Hit.CombatPointRank} CombatPointRank
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CombatPointRank.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CombatPointRank message.
         * @function verify
         * @memberof Hit.CombatPointRank
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CombatPointRank.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roleId != null && message.hasOwnProperty("roleId"))
                if (!$util.isString(message.roleId))
                    return "roleId: string expected";
            if (message.score != null && message.hasOwnProperty("score"))
                if (!$util.isInteger(message.score))
                    return "score: integer expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            return null;
        };

        /**
         * Creates a CombatPointRank message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Hit.CombatPointRank
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Hit.CombatPointRank} CombatPointRank
         */
        CombatPointRank.fromObject = function fromObject(object) {
            if (object instanceof $root.Hit.CombatPointRank)
                return object;
            var message = new $root.Hit.CombatPointRank();
            if (object.roleId != null)
                message.roleId = String(object.roleId);
            if (object.score != null)
                message.score = object.score | 0;
            if (object.name != null)
                message.name = String(object.name);
            return message;
        };

        /**
         * Creates a plain object from a CombatPointRank message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Hit.CombatPointRank
         * @static
         * @param {Hit.CombatPointRank} message CombatPointRank
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CombatPointRank.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.roleId = "";
                object.score = 0;
                object.name = "";
            }
            if (message.roleId != null && message.hasOwnProperty("roleId"))
                object.roleId = message.roleId;
            if (message.score != null && message.hasOwnProperty("score"))
                object.score = message.score;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            return object;
        };

        /**
         * Converts this CombatPointRank to JSON.
         * @function toJSON
         * @memberof Hit.CombatPointRank
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CombatPointRank.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CombatPointRank;
    })();

    Hit.AdventureRank = (function() {

        /**
         * Properties of an AdventureRank.
         * @memberof Hit
         * @interface IAdventureRank
         * @property {string|null} [roleId] AdventureRank roleId
         * @property {number|null} [score] AdventureRank score
         * @property {string|null} [name] AdventureRank name
         */

        /**
         * Constructs a new AdventureRank.
         * @memberof Hit
         * @classdesc Represents an AdventureRank.
         * @implements IAdventureRank
         * @constructor
         * @param {Hit.IAdventureRank=} [properties] Properties to set
         */
        function AdventureRank(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AdventureRank roleId.
         * @member {string} roleId
         * @memberof Hit.AdventureRank
         * @instance
         */
        AdventureRank.prototype.roleId = "";

        /**
         * AdventureRank score.
         * @member {number} score
         * @memberof Hit.AdventureRank
         * @instance
         */
        AdventureRank.prototype.score = 0;

        /**
         * AdventureRank name.
         * @member {string} name
         * @memberof Hit.AdventureRank
         * @instance
         */
        AdventureRank.prototype.name = "";

        /**
         * Creates a new AdventureRank instance using the specified properties.
         * @function create
         * @memberof Hit.AdventureRank
         * @static
         * @param {Hit.IAdventureRank=} [properties] Properties to set
         * @returns {Hit.AdventureRank} AdventureRank instance
         */
        AdventureRank.create = function create(properties) {
            return new AdventureRank(properties);
        };

        /**
         * Encodes the specified AdventureRank message. Does not implicitly {@link Hit.AdventureRank.verify|verify} messages.
         * @function encode
         * @memberof Hit.AdventureRank
         * @static
         * @param {Hit.IAdventureRank} message AdventureRank message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AdventureRank.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roleId != null && message.hasOwnProperty("roleId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.roleId);
            if (message.score != null && message.hasOwnProperty("score"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.score);
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.name);
            return writer;
        };

        /**
         * Encodes the specified AdventureRank message, length delimited. Does not implicitly {@link Hit.AdventureRank.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Hit.AdventureRank
         * @static
         * @param {Hit.IAdventureRank} message AdventureRank message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AdventureRank.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AdventureRank message from the specified reader or buffer.
         * @function decode
         * @memberof Hit.AdventureRank
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Hit.AdventureRank} AdventureRank
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AdventureRank.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Hit.AdventureRank();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.roleId = reader.string();
                    break;
                case 2:
                    message.score = reader.int32();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AdventureRank message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Hit.AdventureRank
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Hit.AdventureRank} AdventureRank
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AdventureRank.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AdventureRank message.
         * @function verify
         * @memberof Hit.AdventureRank
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AdventureRank.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roleId != null && message.hasOwnProperty("roleId"))
                if (!$util.isString(message.roleId))
                    return "roleId: string expected";
            if (message.score != null && message.hasOwnProperty("score"))
                if (!$util.isInteger(message.score))
                    return "score: integer expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            return null;
        };

        /**
         * Creates an AdventureRank message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Hit.AdventureRank
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Hit.AdventureRank} AdventureRank
         */
        AdventureRank.fromObject = function fromObject(object) {
            if (object instanceof $root.Hit.AdventureRank)
                return object;
            var message = new $root.Hit.AdventureRank();
            if (object.roleId != null)
                message.roleId = String(object.roleId);
            if (object.score != null)
                message.score = object.score | 0;
            if (object.name != null)
                message.name = String(object.name);
            return message;
        };

        /**
         * Creates a plain object from an AdventureRank message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Hit.AdventureRank
         * @static
         * @param {Hit.AdventureRank} message AdventureRank
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AdventureRank.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.roleId = "";
                object.score = 0;
                object.name = "";
            }
            if (message.roleId != null && message.hasOwnProperty("roleId"))
                object.roleId = message.roleId;
            if (message.score != null && message.hasOwnProperty("score"))
                object.score = message.score;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            return object;
        };

        /**
         * Converts this AdventureRank to JSON.
         * @function toJSON
         * @memberof Hit.AdventureRank
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AdventureRank.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AdventureRank;
    })();

    Hit.CombatPointRankList = (function() {

        /**
         * Properties of a CombatPointRankList.
         * @memberof Hit
         * @interface ICombatPointRankList
         * @property {Array.<Hit.ICombatPointRank>|null} [ranks] CombatPointRankList ranks
         */

        /**
         * Constructs a new CombatPointRankList.
         * @memberof Hit
         * @classdesc Represents a CombatPointRankList.
         * @implements ICombatPointRankList
         * @constructor
         * @param {Hit.ICombatPointRankList=} [properties] Properties to set
         */
        function CombatPointRankList(properties) {
            this.ranks = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CombatPointRankList ranks.
         * @member {Array.<Hit.ICombatPointRank>} ranks
         * @memberof Hit.CombatPointRankList
         * @instance
         */
        CombatPointRankList.prototype.ranks = $util.emptyArray;

        /**
         * Creates a new CombatPointRankList instance using the specified properties.
         * @function create
         * @memberof Hit.CombatPointRankList
         * @static
         * @param {Hit.ICombatPointRankList=} [properties] Properties to set
         * @returns {Hit.CombatPointRankList} CombatPointRankList instance
         */
        CombatPointRankList.create = function create(properties) {
            return new CombatPointRankList(properties);
        };

        /**
         * Encodes the specified CombatPointRankList message. Does not implicitly {@link Hit.CombatPointRankList.verify|verify} messages.
         * @function encode
         * @memberof Hit.CombatPointRankList
         * @static
         * @param {Hit.ICombatPointRankList} message CombatPointRankList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CombatPointRankList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ranks != null && message.ranks.length)
                for (var i = 0; i < message.ranks.length; ++i)
                    $root.Hit.CombatPointRank.encode(message.ranks[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified CombatPointRankList message, length delimited. Does not implicitly {@link Hit.CombatPointRankList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Hit.CombatPointRankList
         * @static
         * @param {Hit.ICombatPointRankList} message CombatPointRankList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CombatPointRankList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CombatPointRankList message from the specified reader or buffer.
         * @function decode
         * @memberof Hit.CombatPointRankList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Hit.CombatPointRankList} CombatPointRankList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CombatPointRankList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Hit.CombatPointRankList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.ranks && message.ranks.length))
                        message.ranks = [];
                    message.ranks.push($root.Hit.CombatPointRank.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CombatPointRankList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Hit.CombatPointRankList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Hit.CombatPointRankList} CombatPointRankList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CombatPointRankList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CombatPointRankList message.
         * @function verify
         * @memberof Hit.CombatPointRankList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CombatPointRankList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ranks != null && message.hasOwnProperty("ranks")) {
                if (!Array.isArray(message.ranks))
                    return "ranks: array expected";
                for (var i = 0; i < message.ranks.length; ++i) {
                    var error = $root.Hit.CombatPointRank.verify(message.ranks[i]);
                    if (error)
                        return "ranks." + error;
                }
            }
            return null;
        };

        /**
         * Creates a CombatPointRankList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Hit.CombatPointRankList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Hit.CombatPointRankList} CombatPointRankList
         */
        CombatPointRankList.fromObject = function fromObject(object) {
            if (object instanceof $root.Hit.CombatPointRankList)
                return object;
            var message = new $root.Hit.CombatPointRankList();
            if (object.ranks) {
                if (!Array.isArray(object.ranks))
                    throw TypeError(".Hit.CombatPointRankList.ranks: array expected");
                message.ranks = [];
                for (var i = 0; i < object.ranks.length; ++i) {
                    if (typeof object.ranks[i] !== "object")
                        throw TypeError(".Hit.CombatPointRankList.ranks: object expected");
                    message.ranks[i] = $root.Hit.CombatPointRank.fromObject(object.ranks[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a CombatPointRankList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Hit.CombatPointRankList
         * @static
         * @param {Hit.CombatPointRankList} message CombatPointRankList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CombatPointRankList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.ranks = [];
            if (message.ranks && message.ranks.length) {
                object.ranks = [];
                for (var j = 0; j < message.ranks.length; ++j)
                    object.ranks[j] = $root.Hit.CombatPointRank.toObject(message.ranks[j], options);
            }
            return object;
        };

        /**
         * Converts this CombatPointRankList to JSON.
         * @function toJSON
         * @memberof Hit.CombatPointRankList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CombatPointRankList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CombatPointRankList;
    })();

    Hit.AdventureRankList = (function() {

        /**
         * Properties of an AdventureRankList.
         * @memberof Hit
         * @interface IAdventureRankList
         * @property {Array.<Hit.IAdventureRank>|null} [ranks] AdventureRankList ranks
         */

        /**
         * Constructs a new AdventureRankList.
         * @memberof Hit
         * @classdesc Represents an AdventureRankList.
         * @implements IAdventureRankList
         * @constructor
         * @param {Hit.IAdventureRankList=} [properties] Properties to set
         */
        function AdventureRankList(properties) {
            this.ranks = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AdventureRankList ranks.
         * @member {Array.<Hit.IAdventureRank>} ranks
         * @memberof Hit.AdventureRankList
         * @instance
         */
        AdventureRankList.prototype.ranks = $util.emptyArray;

        /**
         * Creates a new AdventureRankList instance using the specified properties.
         * @function create
         * @memberof Hit.AdventureRankList
         * @static
         * @param {Hit.IAdventureRankList=} [properties] Properties to set
         * @returns {Hit.AdventureRankList} AdventureRankList instance
         */
        AdventureRankList.create = function create(properties) {
            return new AdventureRankList(properties);
        };

        /**
         * Encodes the specified AdventureRankList message. Does not implicitly {@link Hit.AdventureRankList.verify|verify} messages.
         * @function encode
         * @memberof Hit.AdventureRankList
         * @static
         * @param {Hit.IAdventureRankList} message AdventureRankList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AdventureRankList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ranks != null && message.ranks.length)
                for (var i = 0; i < message.ranks.length; ++i)
                    $root.Hit.AdventureRank.encode(message.ranks[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified AdventureRankList message, length delimited. Does not implicitly {@link Hit.AdventureRankList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Hit.AdventureRankList
         * @static
         * @param {Hit.IAdventureRankList} message AdventureRankList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AdventureRankList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AdventureRankList message from the specified reader or buffer.
         * @function decode
         * @memberof Hit.AdventureRankList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Hit.AdventureRankList} AdventureRankList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AdventureRankList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Hit.AdventureRankList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.ranks && message.ranks.length))
                        message.ranks = [];
                    message.ranks.push($root.Hit.AdventureRank.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AdventureRankList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Hit.AdventureRankList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Hit.AdventureRankList} AdventureRankList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AdventureRankList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AdventureRankList message.
         * @function verify
         * @memberof Hit.AdventureRankList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AdventureRankList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ranks != null && message.hasOwnProperty("ranks")) {
                if (!Array.isArray(message.ranks))
                    return "ranks: array expected";
                for (var i = 0; i < message.ranks.length; ++i) {
                    var error = $root.Hit.AdventureRank.verify(message.ranks[i]);
                    if (error)
                        return "ranks." + error;
                }
            }
            return null;
        };

        /**
         * Creates an AdventureRankList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Hit.AdventureRankList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Hit.AdventureRankList} AdventureRankList
         */
        AdventureRankList.fromObject = function fromObject(object) {
            if (object instanceof $root.Hit.AdventureRankList)
                return object;
            var message = new $root.Hit.AdventureRankList();
            if (object.ranks) {
                if (!Array.isArray(object.ranks))
                    throw TypeError(".Hit.AdventureRankList.ranks: array expected");
                message.ranks = [];
                for (var i = 0; i < object.ranks.length; ++i) {
                    if (typeof object.ranks[i] !== "object")
                        throw TypeError(".Hit.AdventureRankList.ranks: object expected");
                    message.ranks[i] = $root.Hit.AdventureRank.fromObject(object.ranks[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an AdventureRankList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Hit.AdventureRankList
         * @static
         * @param {Hit.AdventureRankList} message AdventureRankList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AdventureRankList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.ranks = [];
            if (message.ranks && message.ranks.length) {
                object.ranks = [];
                for (var j = 0; j < message.ranks.length; ++j)
                    object.ranks[j] = $root.Hit.AdventureRank.toObject(message.ranks[j], options);
            }
            return object;
        };

        /**
         * Converts this AdventureRankList to JSON.
         * @function toJSON
         * @memberof Hit.AdventureRankList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AdventureRankList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AdventureRankList;
    })();

    Hit.BR_PLAYER_INFO = (function() {

        /**
         * Properties of a BR_PLAYER_INFO.
         * @memberof Hit
         * @interface IBR_PLAYER_INFO
         * @property {string|null} [uid] BR_PLAYER_INFO uid
         */

        /**
         * Constructs a new BR_PLAYER_INFO.
         * @memberof Hit
         * @classdesc Represents a BR_PLAYER_INFO.
         * @implements IBR_PLAYER_INFO
         * @constructor
         * @param {Hit.IBR_PLAYER_INFO=} [properties] Properties to set
         */
        function BR_PLAYER_INFO(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BR_PLAYER_INFO uid.
         * @member {string} uid
         * @memberof Hit.BR_PLAYER_INFO
         * @instance
         */
        BR_PLAYER_INFO.prototype.uid = "";

        /**
         * Creates a new BR_PLAYER_INFO instance using the specified properties.
         * @function create
         * @memberof Hit.BR_PLAYER_INFO
         * @static
         * @param {Hit.IBR_PLAYER_INFO=} [properties] Properties to set
         * @returns {Hit.BR_PLAYER_INFO} BR_PLAYER_INFO instance
         */
        BR_PLAYER_INFO.create = function create(properties) {
            return new BR_PLAYER_INFO(properties);
        };

        /**
         * Encodes the specified BR_PLAYER_INFO message. Does not implicitly {@link Hit.BR_PLAYER_INFO.verify|verify} messages.
         * @function encode
         * @memberof Hit.BR_PLAYER_INFO
         * @static
         * @param {Hit.IBR_PLAYER_INFO} message BR_PLAYER_INFO message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BR_PLAYER_INFO.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.uid);
            return writer;
        };

        /**
         * Encodes the specified BR_PLAYER_INFO message, length delimited. Does not implicitly {@link Hit.BR_PLAYER_INFO.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Hit.BR_PLAYER_INFO
         * @static
         * @param {Hit.IBR_PLAYER_INFO} message BR_PLAYER_INFO message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BR_PLAYER_INFO.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BR_PLAYER_INFO message from the specified reader or buffer.
         * @function decode
         * @memberof Hit.BR_PLAYER_INFO
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Hit.BR_PLAYER_INFO} BR_PLAYER_INFO
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BR_PLAYER_INFO.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Hit.BR_PLAYER_INFO();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BR_PLAYER_INFO message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Hit.BR_PLAYER_INFO
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Hit.BR_PLAYER_INFO} BR_PLAYER_INFO
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BR_PLAYER_INFO.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BR_PLAYER_INFO message.
         * @function verify
         * @memberof Hit.BR_PLAYER_INFO
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BR_PLAYER_INFO.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isString(message.uid))
                    return "uid: string expected";
            return null;
        };

        /**
         * Creates a BR_PLAYER_INFO message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Hit.BR_PLAYER_INFO
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Hit.BR_PLAYER_INFO} BR_PLAYER_INFO
         */
        BR_PLAYER_INFO.fromObject = function fromObject(object) {
            if (object instanceof $root.Hit.BR_PLAYER_INFO)
                return object;
            var message = new $root.Hit.BR_PLAYER_INFO();
            if (object.uid != null)
                message.uid = String(object.uid);
            return message;
        };

        /**
         * Creates a plain object from a BR_PLAYER_INFO message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Hit.BR_PLAYER_INFO
         * @static
         * @param {Hit.BR_PLAYER_INFO} message BR_PLAYER_INFO
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BR_PLAYER_INFO.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.uid = "";
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            return object;
        };

        /**
         * Converts this BR_PLAYER_INFO to JSON.
         * @function toJSON
         * @memberof Hit.BR_PLAYER_INFO
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BR_PLAYER_INFO.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BR_PLAYER_INFO;
    })();

    Hit.RB_PLAYER_INFO_RESULT = (function() {

        /**
         * Properties of a RB_PLAYER_INFO_RESULT.
         * @memberof Hit
         * @interface IRB_PLAYER_INFO_RESULT
         * @property {string|null} [uid] RB_PLAYER_INFO_RESULT uid
         */

        /**
         * Constructs a new RB_PLAYER_INFO_RESULT.
         * @memberof Hit
         * @classdesc Represents a RB_PLAYER_INFO_RESULT.
         * @implements IRB_PLAYER_INFO_RESULT
         * @constructor
         * @param {Hit.IRB_PLAYER_INFO_RESULT=} [properties] Properties to set
         */
        function RB_PLAYER_INFO_RESULT(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RB_PLAYER_INFO_RESULT uid.
         * @member {string} uid
         * @memberof Hit.RB_PLAYER_INFO_RESULT
         * @instance
         */
        RB_PLAYER_INFO_RESULT.prototype.uid = "";

        /**
         * Creates a new RB_PLAYER_INFO_RESULT instance using the specified properties.
         * @function create
         * @memberof Hit.RB_PLAYER_INFO_RESULT
         * @static
         * @param {Hit.IRB_PLAYER_INFO_RESULT=} [properties] Properties to set
         * @returns {Hit.RB_PLAYER_INFO_RESULT} RB_PLAYER_INFO_RESULT instance
         */
        RB_PLAYER_INFO_RESULT.create = function create(properties) {
            return new RB_PLAYER_INFO_RESULT(properties);
        };

        /**
         * Encodes the specified RB_PLAYER_INFO_RESULT message. Does not implicitly {@link Hit.RB_PLAYER_INFO_RESULT.verify|verify} messages.
         * @function encode
         * @memberof Hit.RB_PLAYER_INFO_RESULT
         * @static
         * @param {Hit.IRB_PLAYER_INFO_RESULT} message RB_PLAYER_INFO_RESULT message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RB_PLAYER_INFO_RESULT.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.uid);
            return writer;
        };

        /**
         * Encodes the specified RB_PLAYER_INFO_RESULT message, length delimited. Does not implicitly {@link Hit.RB_PLAYER_INFO_RESULT.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Hit.RB_PLAYER_INFO_RESULT
         * @static
         * @param {Hit.IRB_PLAYER_INFO_RESULT} message RB_PLAYER_INFO_RESULT message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RB_PLAYER_INFO_RESULT.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RB_PLAYER_INFO_RESULT message from the specified reader or buffer.
         * @function decode
         * @memberof Hit.RB_PLAYER_INFO_RESULT
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Hit.RB_PLAYER_INFO_RESULT} RB_PLAYER_INFO_RESULT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RB_PLAYER_INFO_RESULT.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Hit.RB_PLAYER_INFO_RESULT();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RB_PLAYER_INFO_RESULT message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Hit.RB_PLAYER_INFO_RESULT
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Hit.RB_PLAYER_INFO_RESULT} RB_PLAYER_INFO_RESULT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RB_PLAYER_INFO_RESULT.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RB_PLAYER_INFO_RESULT message.
         * @function verify
         * @memberof Hit.RB_PLAYER_INFO_RESULT
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RB_PLAYER_INFO_RESULT.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isString(message.uid))
                    return "uid: string expected";
            return null;
        };

        /**
         * Creates a RB_PLAYER_INFO_RESULT message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Hit.RB_PLAYER_INFO_RESULT
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Hit.RB_PLAYER_INFO_RESULT} RB_PLAYER_INFO_RESULT
         */
        RB_PLAYER_INFO_RESULT.fromObject = function fromObject(object) {
            if (object instanceof $root.Hit.RB_PLAYER_INFO_RESULT)
                return object;
            var message = new $root.Hit.RB_PLAYER_INFO_RESULT();
            if (object.uid != null)
                message.uid = String(object.uid);
            return message;
        };

        /**
         * Creates a plain object from a RB_PLAYER_INFO_RESULT message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Hit.RB_PLAYER_INFO_RESULT
         * @static
         * @param {Hit.RB_PLAYER_INFO_RESULT} message RB_PLAYER_INFO_RESULT
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RB_PLAYER_INFO_RESULT.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.uid = "";
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            return object;
        };

        /**
         * Converts this RB_PLAYER_INFO_RESULT to JSON.
         * @function toJSON
         * @memberof Hit.RB_PLAYER_INFO_RESULT
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RB_PLAYER_INFO_RESULT.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RB_PLAYER_INFO_RESULT;
    })();

    Hit.RoleModel = (function() {

        /**
         * Properties of a RoleModel.
         * @memberof Hit
         * @interface IRoleModel
         * @property {string|null} [name] RoleModel name
         * @property {number|null} [lv] RoleModel lv
         * @property {number|null} [exp] RoleModel exp
         * @property {number|null} [nextLvExpCost] RoleModel nextLvExpCost
         */

        /**
         * Constructs a new RoleModel.
         * @memberof Hit
         * @classdesc Represents a RoleModel.
         * @implements IRoleModel
         * @constructor
         * @param {Hit.IRoleModel=} [properties] Properties to set
         */
        function RoleModel(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RoleModel name.
         * @member {string} name
         * @memberof Hit.RoleModel
         * @instance
         */
        RoleModel.prototype.name = "";

        /**
         * RoleModel lv.
         * @member {number} lv
         * @memberof Hit.RoleModel
         * @instance
         */
        RoleModel.prototype.lv = 0;

        /**
         * RoleModel exp.
         * @member {number} exp
         * @memberof Hit.RoleModel
         * @instance
         */
        RoleModel.prototype.exp = 0;

        /**
         * RoleModel nextLvExpCost.
         * @member {number} nextLvExpCost
         * @memberof Hit.RoleModel
         * @instance
         */
        RoleModel.prototype.nextLvExpCost = 0;

        /**
         * Creates a new RoleModel instance using the specified properties.
         * @function create
         * @memberof Hit.RoleModel
         * @static
         * @param {Hit.IRoleModel=} [properties] Properties to set
         * @returns {Hit.RoleModel} RoleModel instance
         */
        RoleModel.create = function create(properties) {
            return new RoleModel(properties);
        };

        /**
         * Encodes the specified RoleModel message. Does not implicitly {@link Hit.RoleModel.verify|verify} messages.
         * @function encode
         * @memberof Hit.RoleModel
         * @static
         * @param {Hit.IRoleModel} message RoleModel message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoleModel.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.lv != null && message.hasOwnProperty("lv"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.lv);
            if (message.exp != null && message.hasOwnProperty("exp"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.exp);
            if (message.nextLvExpCost != null && message.hasOwnProperty("nextLvExpCost"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.nextLvExpCost);
            return writer;
        };

        /**
         * Encodes the specified RoleModel message, length delimited. Does not implicitly {@link Hit.RoleModel.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Hit.RoleModel
         * @static
         * @param {Hit.IRoleModel} message RoleModel message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoleModel.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RoleModel message from the specified reader or buffer.
         * @function decode
         * @memberof Hit.RoleModel
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Hit.RoleModel} RoleModel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoleModel.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Hit.RoleModel();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.lv = reader.int32();
                    break;
                case 3:
                    message.exp = reader.int32();
                    break;
                case 4:
                    message.nextLvExpCost = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RoleModel message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Hit.RoleModel
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Hit.RoleModel} RoleModel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoleModel.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RoleModel message.
         * @function verify
         * @memberof Hit.RoleModel
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RoleModel.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.lv != null && message.hasOwnProperty("lv"))
                if (!$util.isInteger(message.lv))
                    return "lv: integer expected";
            if (message.exp != null && message.hasOwnProperty("exp"))
                if (!$util.isInteger(message.exp))
                    return "exp: integer expected";
            if (message.nextLvExpCost != null && message.hasOwnProperty("nextLvExpCost"))
                if (!$util.isInteger(message.nextLvExpCost))
                    return "nextLvExpCost: integer expected";
            return null;
        };

        /**
         * Creates a RoleModel message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Hit.RoleModel
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Hit.RoleModel} RoleModel
         */
        RoleModel.fromObject = function fromObject(object) {
            if (object instanceof $root.Hit.RoleModel)
                return object;
            var message = new $root.Hit.RoleModel();
            if (object.name != null)
                message.name = String(object.name);
            if (object.lv != null)
                message.lv = object.lv | 0;
            if (object.exp != null)
                message.exp = object.exp | 0;
            if (object.nextLvExpCost != null)
                message.nextLvExpCost = object.nextLvExpCost | 0;
            return message;
        };

        /**
         * Creates a plain object from a RoleModel message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Hit.RoleModel
         * @static
         * @param {Hit.RoleModel} message RoleModel
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RoleModel.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.name = "";
                object.lv = 0;
                object.exp = 0;
                object.nextLvExpCost = 0;
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.lv != null && message.hasOwnProperty("lv"))
                object.lv = message.lv;
            if (message.exp != null && message.hasOwnProperty("exp"))
                object.exp = message.exp;
            if (message.nextLvExpCost != null && message.hasOwnProperty("nextLvExpCost"))
                object.nextLvExpCost = message.nextLvExpCost;
            return object;
        };

        /**
         * Converts this RoleModel to JSON.
         * @function toJSON
         * @memberof Hit.RoleModel
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RoleModel.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RoleModel;
    })();

    Hit.CR_CHANGE_NAME = (function() {

        /**
         * Properties of a CR_CHANGE_NAME.
         * @memberof Hit
         * @interface ICR_CHANGE_NAME
         * @property {string|null} [name] CR_CHANGE_NAME name
         */

        /**
         * Constructs a new CR_CHANGE_NAME.
         * @memberof Hit
         * @classdesc Represents a CR_CHANGE_NAME.
         * @implements ICR_CHANGE_NAME
         * @constructor
         * @param {Hit.ICR_CHANGE_NAME=} [properties] Properties to set
         */
        function CR_CHANGE_NAME(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CR_CHANGE_NAME name.
         * @member {string} name
         * @memberof Hit.CR_CHANGE_NAME
         * @instance
         */
        CR_CHANGE_NAME.prototype.name = "";

        /**
         * Creates a new CR_CHANGE_NAME instance using the specified properties.
         * @function create
         * @memberof Hit.CR_CHANGE_NAME
         * @static
         * @param {Hit.ICR_CHANGE_NAME=} [properties] Properties to set
         * @returns {Hit.CR_CHANGE_NAME} CR_CHANGE_NAME instance
         */
        CR_CHANGE_NAME.create = function create(properties) {
            return new CR_CHANGE_NAME(properties);
        };

        /**
         * Encodes the specified CR_CHANGE_NAME message. Does not implicitly {@link Hit.CR_CHANGE_NAME.verify|verify} messages.
         * @function encode
         * @memberof Hit.CR_CHANGE_NAME
         * @static
         * @param {Hit.ICR_CHANGE_NAME} message CR_CHANGE_NAME message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CR_CHANGE_NAME.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            return writer;
        };

        /**
         * Encodes the specified CR_CHANGE_NAME message, length delimited. Does not implicitly {@link Hit.CR_CHANGE_NAME.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Hit.CR_CHANGE_NAME
         * @static
         * @param {Hit.ICR_CHANGE_NAME} message CR_CHANGE_NAME message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CR_CHANGE_NAME.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CR_CHANGE_NAME message from the specified reader or buffer.
         * @function decode
         * @memberof Hit.CR_CHANGE_NAME
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Hit.CR_CHANGE_NAME} CR_CHANGE_NAME
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CR_CHANGE_NAME.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Hit.CR_CHANGE_NAME();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CR_CHANGE_NAME message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Hit.CR_CHANGE_NAME
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Hit.CR_CHANGE_NAME} CR_CHANGE_NAME
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CR_CHANGE_NAME.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CR_CHANGE_NAME message.
         * @function verify
         * @memberof Hit.CR_CHANGE_NAME
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CR_CHANGE_NAME.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            return null;
        };

        /**
         * Creates a CR_CHANGE_NAME message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Hit.CR_CHANGE_NAME
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Hit.CR_CHANGE_NAME} CR_CHANGE_NAME
         */
        CR_CHANGE_NAME.fromObject = function fromObject(object) {
            if (object instanceof $root.Hit.CR_CHANGE_NAME)
                return object;
            var message = new $root.Hit.CR_CHANGE_NAME();
            if (object.name != null)
                message.name = String(object.name);
            return message;
        };

        /**
         * Creates a plain object from a CR_CHANGE_NAME message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Hit.CR_CHANGE_NAME
         * @static
         * @param {Hit.CR_CHANGE_NAME} message CR_CHANGE_NAME
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CR_CHANGE_NAME.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.name = "";
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            return object;
        };

        /**
         * Converts this CR_CHANGE_NAME to JSON.
         * @function toJSON
         * @memberof Hit.CR_CHANGE_NAME
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CR_CHANGE_NAME.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CR_CHANGE_NAME;
    })();

    Hit.RC_CHANGE_NAME_RESULT = (function() {

        /**
         * Properties of a RC_CHANGE_NAME_RESULT.
         * @memberof Hit
         * @interface IRC_CHANGE_NAME_RESULT
         * @property {number|null} [errCode] RC_CHANGE_NAME_RESULT errCode
         */

        /**
         * Constructs a new RC_CHANGE_NAME_RESULT.
         * @memberof Hit
         * @classdesc Represents a RC_CHANGE_NAME_RESULT.
         * @implements IRC_CHANGE_NAME_RESULT
         * @constructor
         * @param {Hit.IRC_CHANGE_NAME_RESULT=} [properties] Properties to set
         */
        function RC_CHANGE_NAME_RESULT(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RC_CHANGE_NAME_RESULT errCode.
         * @member {number} errCode
         * @memberof Hit.RC_CHANGE_NAME_RESULT
         * @instance
         */
        RC_CHANGE_NAME_RESULT.prototype.errCode = 0;

        /**
         * Creates a new RC_CHANGE_NAME_RESULT instance using the specified properties.
         * @function create
         * @memberof Hit.RC_CHANGE_NAME_RESULT
         * @static
         * @param {Hit.IRC_CHANGE_NAME_RESULT=} [properties] Properties to set
         * @returns {Hit.RC_CHANGE_NAME_RESULT} RC_CHANGE_NAME_RESULT instance
         */
        RC_CHANGE_NAME_RESULT.create = function create(properties) {
            return new RC_CHANGE_NAME_RESULT(properties);
        };

        /**
         * Encodes the specified RC_CHANGE_NAME_RESULT message. Does not implicitly {@link Hit.RC_CHANGE_NAME_RESULT.verify|verify} messages.
         * @function encode
         * @memberof Hit.RC_CHANGE_NAME_RESULT
         * @static
         * @param {Hit.IRC_CHANGE_NAME_RESULT} message RC_CHANGE_NAME_RESULT message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RC_CHANGE_NAME_RESULT.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errCode);
            return writer;
        };

        /**
         * Encodes the specified RC_CHANGE_NAME_RESULT message, length delimited. Does not implicitly {@link Hit.RC_CHANGE_NAME_RESULT.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Hit.RC_CHANGE_NAME_RESULT
         * @static
         * @param {Hit.IRC_CHANGE_NAME_RESULT} message RC_CHANGE_NAME_RESULT message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RC_CHANGE_NAME_RESULT.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RC_CHANGE_NAME_RESULT message from the specified reader or buffer.
         * @function decode
         * @memberof Hit.RC_CHANGE_NAME_RESULT
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Hit.RC_CHANGE_NAME_RESULT} RC_CHANGE_NAME_RESULT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RC_CHANGE_NAME_RESULT.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Hit.RC_CHANGE_NAME_RESULT();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.errCode = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RC_CHANGE_NAME_RESULT message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Hit.RC_CHANGE_NAME_RESULT
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Hit.RC_CHANGE_NAME_RESULT} RC_CHANGE_NAME_RESULT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RC_CHANGE_NAME_RESULT.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RC_CHANGE_NAME_RESULT message.
         * @function verify
         * @memberof Hit.RC_CHANGE_NAME_RESULT
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RC_CHANGE_NAME_RESULT.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                if (!$util.isInteger(message.errCode))
                    return "errCode: integer expected";
            return null;
        };

        /**
         * Creates a RC_CHANGE_NAME_RESULT message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Hit.RC_CHANGE_NAME_RESULT
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Hit.RC_CHANGE_NAME_RESULT} RC_CHANGE_NAME_RESULT
         */
        RC_CHANGE_NAME_RESULT.fromObject = function fromObject(object) {
            if (object instanceof $root.Hit.RC_CHANGE_NAME_RESULT)
                return object;
            var message = new $root.Hit.RC_CHANGE_NAME_RESULT();
            if (object.errCode != null)
                message.errCode = object.errCode | 0;
            return message;
        };

        /**
         * Creates a plain object from a RC_CHANGE_NAME_RESULT message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Hit.RC_CHANGE_NAME_RESULT
         * @static
         * @param {Hit.RC_CHANGE_NAME_RESULT} message RC_CHANGE_NAME_RESULT
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RC_CHANGE_NAME_RESULT.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.errCode = 0;
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                object.errCode = message.errCode;
            return object;
        };

        /**
         * Converts this RC_CHANGE_NAME_RESULT to JSON.
         * @function toJSON
         * @memberof Hit.RC_CHANGE_NAME_RESULT
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RC_CHANGE_NAME_RESULT.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RC_CHANGE_NAME_RESULT;
    })();

    Hit.RC_RAND_NAME_RESULT = (function() {

        /**
         * Properties of a RC_RAND_NAME_RESULT.
         * @memberof Hit
         * @interface IRC_RAND_NAME_RESULT
         * @property {string|null} [name] RC_RAND_NAME_RESULT name
         */

        /**
         * Constructs a new RC_RAND_NAME_RESULT.
         * @memberof Hit
         * @classdesc Represents a RC_RAND_NAME_RESULT.
         * @implements IRC_RAND_NAME_RESULT
         * @constructor
         * @param {Hit.IRC_RAND_NAME_RESULT=} [properties] Properties to set
         */
        function RC_RAND_NAME_RESULT(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RC_RAND_NAME_RESULT name.
         * @member {string} name
         * @memberof Hit.RC_RAND_NAME_RESULT
         * @instance
         */
        RC_RAND_NAME_RESULT.prototype.name = "";

        /**
         * Creates a new RC_RAND_NAME_RESULT instance using the specified properties.
         * @function create
         * @memberof Hit.RC_RAND_NAME_RESULT
         * @static
         * @param {Hit.IRC_RAND_NAME_RESULT=} [properties] Properties to set
         * @returns {Hit.RC_RAND_NAME_RESULT} RC_RAND_NAME_RESULT instance
         */
        RC_RAND_NAME_RESULT.create = function create(properties) {
            return new RC_RAND_NAME_RESULT(properties);
        };

        /**
         * Encodes the specified RC_RAND_NAME_RESULT message. Does not implicitly {@link Hit.RC_RAND_NAME_RESULT.verify|verify} messages.
         * @function encode
         * @memberof Hit.RC_RAND_NAME_RESULT
         * @static
         * @param {Hit.IRC_RAND_NAME_RESULT} message RC_RAND_NAME_RESULT message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RC_RAND_NAME_RESULT.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            return writer;
        };

        /**
         * Encodes the specified RC_RAND_NAME_RESULT message, length delimited. Does not implicitly {@link Hit.RC_RAND_NAME_RESULT.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Hit.RC_RAND_NAME_RESULT
         * @static
         * @param {Hit.IRC_RAND_NAME_RESULT} message RC_RAND_NAME_RESULT message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RC_RAND_NAME_RESULT.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RC_RAND_NAME_RESULT message from the specified reader or buffer.
         * @function decode
         * @memberof Hit.RC_RAND_NAME_RESULT
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Hit.RC_RAND_NAME_RESULT} RC_RAND_NAME_RESULT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RC_RAND_NAME_RESULT.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Hit.RC_RAND_NAME_RESULT();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RC_RAND_NAME_RESULT message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Hit.RC_RAND_NAME_RESULT
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Hit.RC_RAND_NAME_RESULT} RC_RAND_NAME_RESULT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RC_RAND_NAME_RESULT.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RC_RAND_NAME_RESULT message.
         * @function verify
         * @memberof Hit.RC_RAND_NAME_RESULT
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RC_RAND_NAME_RESULT.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            return null;
        };

        /**
         * Creates a RC_RAND_NAME_RESULT message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Hit.RC_RAND_NAME_RESULT
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Hit.RC_RAND_NAME_RESULT} RC_RAND_NAME_RESULT
         */
        RC_RAND_NAME_RESULT.fromObject = function fromObject(object) {
            if (object instanceof $root.Hit.RC_RAND_NAME_RESULT)
                return object;
            var message = new $root.Hit.RC_RAND_NAME_RESULT();
            if (object.name != null)
                message.name = String(object.name);
            return message;
        };

        /**
         * Creates a plain object from a RC_RAND_NAME_RESULT message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Hit.RC_RAND_NAME_RESULT
         * @static
         * @param {Hit.RC_RAND_NAME_RESULT} message RC_RAND_NAME_RESULT
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RC_RAND_NAME_RESULT.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.name = "";
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            return object;
        };

        /**
         * Converts this RC_RAND_NAME_RESULT to JSON.
         * @function toJSON
         * @memberof Hit.RC_RAND_NAME_RESULT
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RC_RAND_NAME_RESULT.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RC_RAND_NAME_RESULT;
    })();

    Hit.CR_PAY = (function() {

        /**
         * Properties of a CR_PAY.
         * @memberof Hit
         * @interface ICR_PAY
         * @property {number|null} [payId] CR_PAY payId
         */

        /**
         * Constructs a new CR_PAY.
         * @memberof Hit
         * @classdesc Represents a CR_PAY.
         * @implements ICR_PAY
         * @constructor
         * @param {Hit.ICR_PAY=} [properties] Properties to set
         */
        function CR_PAY(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CR_PAY payId.
         * @member {number} payId
         * @memberof Hit.CR_PAY
         * @instance
         */
        CR_PAY.prototype.payId = 0;

        /**
         * Creates a new CR_PAY instance using the specified properties.
         * @function create
         * @memberof Hit.CR_PAY
         * @static
         * @param {Hit.ICR_PAY=} [properties] Properties to set
         * @returns {Hit.CR_PAY} CR_PAY instance
         */
        CR_PAY.create = function create(properties) {
            return new CR_PAY(properties);
        };

        /**
         * Encodes the specified CR_PAY message. Does not implicitly {@link Hit.CR_PAY.verify|verify} messages.
         * @function encode
         * @memberof Hit.CR_PAY
         * @static
         * @param {Hit.ICR_PAY} message CR_PAY message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CR_PAY.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.payId != null && message.hasOwnProperty("payId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.payId);
            return writer;
        };

        /**
         * Encodes the specified CR_PAY message, length delimited. Does not implicitly {@link Hit.CR_PAY.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Hit.CR_PAY
         * @static
         * @param {Hit.ICR_PAY} message CR_PAY message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CR_PAY.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CR_PAY message from the specified reader or buffer.
         * @function decode
         * @memberof Hit.CR_PAY
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Hit.CR_PAY} CR_PAY
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CR_PAY.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Hit.CR_PAY();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.payId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CR_PAY message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Hit.CR_PAY
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Hit.CR_PAY} CR_PAY
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CR_PAY.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CR_PAY message.
         * @function verify
         * @memberof Hit.CR_PAY
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CR_PAY.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.payId != null && message.hasOwnProperty("payId"))
                if (!$util.isInteger(message.payId))
                    return "payId: integer expected";
            return null;
        };

        /**
         * Creates a CR_PAY message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Hit.CR_PAY
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Hit.CR_PAY} CR_PAY
         */
        CR_PAY.fromObject = function fromObject(object) {
            if (object instanceof $root.Hit.CR_PAY)
                return object;
            var message = new $root.Hit.CR_PAY();
            if (object.payId != null)
                message.payId = object.payId | 0;
            return message;
        };

        /**
         * Creates a plain object from a CR_PAY message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Hit.CR_PAY
         * @static
         * @param {Hit.CR_PAY} message CR_PAY
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CR_PAY.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.payId = 0;
            if (message.payId != null && message.hasOwnProperty("payId"))
                object.payId = message.payId;
            return object;
        };

        /**
         * Converts this CR_PAY to JSON.
         * @function toJSON
         * @memberof Hit.CR_PAY
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CR_PAY.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CR_PAY;
    })();

    Hit.RC_PAY_RESULT = (function() {

        /**
         * Properties of a RC_PAY_RESULT.
         * @memberof Hit
         * @interface IRC_PAY_RESULT
         * @property {number|null} [cnt] RC_PAY_RESULT cnt
         */

        /**
         * Constructs a new RC_PAY_RESULT.
         * @memberof Hit
         * @classdesc Represents a RC_PAY_RESULT.
         * @implements IRC_PAY_RESULT
         * @constructor
         * @param {Hit.IRC_PAY_RESULT=} [properties] Properties to set
         */
        function RC_PAY_RESULT(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RC_PAY_RESULT cnt.
         * @member {number} cnt
         * @memberof Hit.RC_PAY_RESULT
         * @instance
         */
        RC_PAY_RESULT.prototype.cnt = 0;

        /**
         * Creates a new RC_PAY_RESULT instance using the specified properties.
         * @function create
         * @memberof Hit.RC_PAY_RESULT
         * @static
         * @param {Hit.IRC_PAY_RESULT=} [properties] Properties to set
         * @returns {Hit.RC_PAY_RESULT} RC_PAY_RESULT instance
         */
        RC_PAY_RESULT.create = function create(properties) {
            return new RC_PAY_RESULT(properties);
        };

        /**
         * Encodes the specified RC_PAY_RESULT message. Does not implicitly {@link Hit.RC_PAY_RESULT.verify|verify} messages.
         * @function encode
         * @memberof Hit.RC_PAY_RESULT
         * @static
         * @param {Hit.IRC_PAY_RESULT} message RC_PAY_RESULT message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RC_PAY_RESULT.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cnt != null && message.hasOwnProperty("cnt"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cnt);
            return writer;
        };

        /**
         * Encodes the specified RC_PAY_RESULT message, length delimited. Does not implicitly {@link Hit.RC_PAY_RESULT.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Hit.RC_PAY_RESULT
         * @static
         * @param {Hit.IRC_PAY_RESULT} message RC_PAY_RESULT message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RC_PAY_RESULT.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RC_PAY_RESULT message from the specified reader or buffer.
         * @function decode
         * @memberof Hit.RC_PAY_RESULT
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Hit.RC_PAY_RESULT} RC_PAY_RESULT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RC_PAY_RESULT.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Hit.RC_PAY_RESULT();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.cnt = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RC_PAY_RESULT message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Hit.RC_PAY_RESULT
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Hit.RC_PAY_RESULT} RC_PAY_RESULT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RC_PAY_RESULT.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RC_PAY_RESULT message.
         * @function verify
         * @memberof Hit.RC_PAY_RESULT
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RC_PAY_RESULT.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.cnt != null && message.hasOwnProperty("cnt"))
                if (!$util.isInteger(message.cnt))
                    return "cnt: integer expected";
            return null;
        };

        /**
         * Creates a RC_PAY_RESULT message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Hit.RC_PAY_RESULT
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Hit.RC_PAY_RESULT} RC_PAY_RESULT
         */
        RC_PAY_RESULT.fromObject = function fromObject(object) {
            if (object instanceof $root.Hit.RC_PAY_RESULT)
                return object;
            var message = new $root.Hit.RC_PAY_RESULT();
            if (object.cnt != null)
                message.cnt = object.cnt | 0;
            return message;
        };

        /**
         * Creates a plain object from a RC_PAY_RESULT message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Hit.RC_PAY_RESULT
         * @static
         * @param {Hit.RC_PAY_RESULT} message RC_PAY_RESULT
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RC_PAY_RESULT.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.cnt = 0;
            if (message.cnt != null && message.hasOwnProperty("cnt"))
                object.cnt = message.cnt;
            return object;
        };

        /**
         * Converts this RC_PAY_RESULT to JSON.
         * @function toJSON
         * @memberof Hit.RC_PAY_RESULT
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RC_PAY_RESULT.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RC_PAY_RESULT;
    })();

    Hit.ShopList = (function() {

        /**
         * Properties of a ShopList.
         * @memberof Hit
         * @interface IShopList
         * @property {Array.<Hit.IShopListItem>|null} [items] ShopList items
         */

        /**
         * Constructs a new ShopList.
         * @memberof Hit
         * @classdesc Represents a ShopList.
         * @implements IShopList
         * @constructor
         * @param {Hit.IShopList=} [properties] Properties to set
         */
        function ShopList(properties) {
            this.items = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ShopList items.
         * @member {Array.<Hit.IShopListItem>} items
         * @memberof Hit.ShopList
         * @instance
         */
        ShopList.prototype.items = $util.emptyArray;

        /**
         * Creates a new ShopList instance using the specified properties.
         * @function create
         * @memberof Hit.ShopList
         * @static
         * @param {Hit.IShopList=} [properties] Properties to set
         * @returns {Hit.ShopList} ShopList instance
         */
        ShopList.create = function create(properties) {
            return new ShopList(properties);
        };

        /**
         * Encodes the specified ShopList message. Does not implicitly {@link Hit.ShopList.verify|verify} messages.
         * @function encode
         * @memberof Hit.ShopList
         * @static
         * @param {Hit.IShopList} message ShopList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ShopList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.items != null && message.items.length)
                for (var i = 0; i < message.items.length; ++i)
                    $root.Hit.ShopListItem.encode(message.items[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ShopList message, length delimited. Does not implicitly {@link Hit.ShopList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Hit.ShopList
         * @static
         * @param {Hit.IShopList} message ShopList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ShopList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ShopList message from the specified reader or buffer.
         * @function decode
         * @memberof Hit.ShopList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Hit.ShopList} ShopList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ShopList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Hit.ShopList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.items && message.items.length))
                        message.items = [];
                    message.items.push($root.Hit.ShopListItem.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ShopList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Hit.ShopList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Hit.ShopList} ShopList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ShopList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ShopList message.
         * @function verify
         * @memberof Hit.ShopList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ShopList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.items != null && message.hasOwnProperty("items")) {
                if (!Array.isArray(message.items))
                    return "items: array expected";
                for (var i = 0; i < message.items.length; ++i) {
                    var error = $root.Hit.ShopListItem.verify(message.items[i]);
                    if (error)
                        return "items." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ShopList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Hit.ShopList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Hit.ShopList} ShopList
         */
        ShopList.fromObject = function fromObject(object) {
            if (object instanceof $root.Hit.ShopList)
                return object;
            var message = new $root.Hit.ShopList();
            if (object.items) {
                if (!Array.isArray(object.items))
                    throw TypeError(".Hit.ShopList.items: array expected");
                message.items = [];
                for (var i = 0; i < object.items.length; ++i) {
                    if (typeof object.items[i] !== "object")
                        throw TypeError(".Hit.ShopList.items: object expected");
                    message.items[i] = $root.Hit.ShopListItem.fromObject(object.items[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ShopList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Hit.ShopList
         * @static
         * @param {Hit.ShopList} message ShopList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ShopList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.items = [];
            if (message.items && message.items.length) {
                object.items = [];
                for (var j = 0; j < message.items.length; ++j)
                    object.items[j] = $root.Hit.ShopListItem.toObject(message.items[j], options);
            }
            return object;
        };

        /**
         * Converts this ShopList to JSON.
         * @function toJSON
         * @memberof Hit.ShopList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ShopList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ShopList;
    })();

    Hit.ShopListItem = (function() {

        /**
         * Properties of a ShopListItem.
         * @memberof Hit
         * @interface IShopListItem
         * @property {number|null} [payId] ShopListItem payId
         * @property {number|null} [payType] ShopListItem payType
         * @property {number|null} [payCnt] ShopListItem payCnt
         * @property {number|null} [itemId] ShopListItem itemId
         * @property {number|null} [itemCnt] ShopListItem itemCnt
         * @property {string|null} [name] ShopListItem name
         * @property {string|null} [desc] ShopListItem desc
         * @property {string|null} [icon] ShopListItem icon
         */

        /**
         * Constructs a new ShopListItem.
         * @memberof Hit
         * @classdesc Represents a ShopListItem.
         * @implements IShopListItem
         * @constructor
         * @param {Hit.IShopListItem=} [properties] Properties to set
         */
        function ShopListItem(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ShopListItem payId.
         * @member {number} payId
         * @memberof Hit.ShopListItem
         * @instance
         */
        ShopListItem.prototype.payId = 0;

        /**
         * ShopListItem payType.
         * @member {number} payType
         * @memberof Hit.ShopListItem
         * @instance
         */
        ShopListItem.prototype.payType = 0;

        /**
         * ShopListItem payCnt.
         * @member {number} payCnt
         * @memberof Hit.ShopListItem
         * @instance
         */
        ShopListItem.prototype.payCnt = 0;

        /**
         * ShopListItem itemId.
         * @member {number} itemId
         * @memberof Hit.ShopListItem
         * @instance
         */
        ShopListItem.prototype.itemId = 0;

        /**
         * ShopListItem itemCnt.
         * @member {number} itemCnt
         * @memberof Hit.ShopListItem
         * @instance
         */
        ShopListItem.prototype.itemCnt = 0;

        /**
         * ShopListItem name.
         * @member {string} name
         * @memberof Hit.ShopListItem
         * @instance
         */
        ShopListItem.prototype.name = "";

        /**
         * ShopListItem desc.
         * @member {string} desc
         * @memberof Hit.ShopListItem
         * @instance
         */
        ShopListItem.prototype.desc = "";

        /**
         * ShopListItem icon.
         * @member {string} icon
         * @memberof Hit.ShopListItem
         * @instance
         */
        ShopListItem.prototype.icon = "";

        /**
         * Creates a new ShopListItem instance using the specified properties.
         * @function create
         * @memberof Hit.ShopListItem
         * @static
         * @param {Hit.IShopListItem=} [properties] Properties to set
         * @returns {Hit.ShopListItem} ShopListItem instance
         */
        ShopListItem.create = function create(properties) {
            return new ShopListItem(properties);
        };

        /**
         * Encodes the specified ShopListItem message. Does not implicitly {@link Hit.ShopListItem.verify|verify} messages.
         * @function encode
         * @memberof Hit.ShopListItem
         * @static
         * @param {Hit.IShopListItem} message ShopListItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ShopListItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.payId != null && message.hasOwnProperty("payId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.payId);
            if (message.payType != null && message.hasOwnProperty("payType"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.payType);
            if (message.payCnt != null && message.hasOwnProperty("payCnt"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.payCnt);
            if (message.itemId != null && message.hasOwnProperty("itemId"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.itemId);
            if (message.itemCnt != null && message.hasOwnProperty("itemCnt"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.itemCnt);
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.name);
            if (message.desc != null && message.hasOwnProperty("desc"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.desc);
            if (message.icon != null && message.hasOwnProperty("icon"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.icon);
            return writer;
        };

        /**
         * Encodes the specified ShopListItem message, length delimited. Does not implicitly {@link Hit.ShopListItem.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Hit.ShopListItem
         * @static
         * @param {Hit.IShopListItem} message ShopListItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ShopListItem.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ShopListItem message from the specified reader or buffer.
         * @function decode
         * @memberof Hit.ShopListItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Hit.ShopListItem} ShopListItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ShopListItem.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Hit.ShopListItem();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.payId = reader.int32();
                    break;
                case 2:
                    message.payType = reader.int32();
                    break;
                case 3:
                    message.payCnt = reader.int32();
                    break;
                case 4:
                    message.itemId = reader.int32();
                    break;
                case 5:
                    message.itemCnt = reader.int32();
                    break;
                case 6:
                    message.name = reader.string();
                    break;
                case 7:
                    message.desc = reader.string();
                    break;
                case 8:
                    message.icon = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ShopListItem message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Hit.ShopListItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Hit.ShopListItem} ShopListItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ShopListItem.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ShopListItem message.
         * @function verify
         * @memberof Hit.ShopListItem
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ShopListItem.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.payId != null && message.hasOwnProperty("payId"))
                if (!$util.isInteger(message.payId))
                    return "payId: integer expected";
            if (message.payType != null && message.hasOwnProperty("payType"))
                if (!$util.isInteger(message.payType))
                    return "payType: integer expected";
            if (message.payCnt != null && message.hasOwnProperty("payCnt"))
                if (!$util.isInteger(message.payCnt))
                    return "payCnt: integer expected";
            if (message.itemId != null && message.hasOwnProperty("itemId"))
                if (!$util.isInteger(message.itemId))
                    return "itemId: integer expected";
            if (message.itemCnt != null && message.hasOwnProperty("itemCnt"))
                if (!$util.isInteger(message.itemCnt))
                    return "itemCnt: integer expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.desc != null && message.hasOwnProperty("desc"))
                if (!$util.isString(message.desc))
                    return "desc: string expected";
            if (message.icon != null && message.hasOwnProperty("icon"))
                if (!$util.isString(message.icon))
                    return "icon: string expected";
            return null;
        };

        /**
         * Creates a ShopListItem message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Hit.ShopListItem
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Hit.ShopListItem} ShopListItem
         */
        ShopListItem.fromObject = function fromObject(object) {
            if (object instanceof $root.Hit.ShopListItem)
                return object;
            var message = new $root.Hit.ShopListItem();
            if (object.payId != null)
                message.payId = object.payId | 0;
            if (object.payType != null)
                message.payType = object.payType | 0;
            if (object.payCnt != null)
                message.payCnt = object.payCnt | 0;
            if (object.itemId != null)
                message.itemId = object.itemId | 0;
            if (object.itemCnt != null)
                message.itemCnt = object.itemCnt | 0;
            if (object.name != null)
                message.name = String(object.name);
            if (object.desc != null)
                message.desc = String(object.desc);
            if (object.icon != null)
                message.icon = String(object.icon);
            return message;
        };

        /**
         * Creates a plain object from a ShopListItem message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Hit.ShopListItem
         * @static
         * @param {Hit.ShopListItem} message ShopListItem
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ShopListItem.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.payId = 0;
                object.payType = 0;
                object.payCnt = 0;
                object.itemId = 0;
                object.itemCnt = 0;
                object.name = "";
                object.desc = "";
                object.icon = "";
            }
            if (message.payId != null && message.hasOwnProperty("payId"))
                object.payId = message.payId;
            if (message.payType != null && message.hasOwnProperty("payType"))
                object.payType = message.payType;
            if (message.payCnt != null && message.hasOwnProperty("payCnt"))
                object.payCnt = message.payCnt;
            if (message.itemId != null && message.hasOwnProperty("itemId"))
                object.itemId = message.itemId;
            if (message.itemCnt != null && message.hasOwnProperty("itemCnt"))
                object.itemCnt = message.itemCnt;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.desc != null && message.hasOwnProperty("desc"))
                object.desc = message.desc;
            if (message.icon != null && message.hasOwnProperty("icon"))
                object.icon = message.icon;
            return object;
        };

        /**
         * Converts this ShopListItem to JSON.
         * @function toJSON
         * @memberof Hit.ShopListItem
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ShopListItem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ShopListItem;
    })();

    return Hit;
})();

module.exports = $root;
