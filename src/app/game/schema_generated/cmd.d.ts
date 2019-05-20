import * as $protobuf from "protobufjs";
export namespace Hit {

    enum E_ADVENTURE_EVENT {
        EAE_ADV = 0,
        EAE_BATTLE = 1
    }

    interface IAdventureInfo {
        adventureStageId?: (number|null);
        stageExp?: (number|null);
    }

    class AdventureInfo implements IAdventureInfo {
        constructor(properties?: Hit.IAdventureInfo);
        public adventureStageId: number;
        public stageExp: number;
        public static create(properties?: Hit.IAdventureInfo): Hit.AdventureInfo;
        public static encode(message: Hit.IAdventureInfo, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: Hit.IAdventureInfo, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Hit.AdventureInfo;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Hit.AdventureInfo;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): Hit.AdventureInfo;
        public static toObject(message: Hit.AdventureInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface ISTC_ADVENTURE {
        advId?: (number|null);
        params?: (number[]|null);
    }

    class STC_ADVENTURE implements ISTC_ADVENTURE {
        constructor(properties?: Hit.ISTC_ADVENTURE);
        public advId: number;
        public params: number[];
        public static create(properties?: Hit.ISTC_ADVENTURE): Hit.STC_ADVENTURE;
        public static encode(message: Hit.ISTC_ADVENTURE, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: Hit.ISTC_ADVENTURE, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Hit.STC_ADVENTURE;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Hit.STC_ADVENTURE;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): Hit.STC_ADVENTURE;
        public static toObject(message: Hit.STC_ADVENTURE, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IRC_ADVENTURE_RESULT {
        evt?: (Hit.E_ADVENTURE_EVENT|null);
        rwd?: (Hit.ISTC_REWARD|null);
        battleResult?: (Hit.ISTC_BATTLE_RESULT|null);
        adv?: (Hit.ISTC_ADVENTURE|null);
        errCode?: (number|null);
    }

    class RC_ADVENTURE_RESULT implements IRC_ADVENTURE_RESULT {
        constructor(properties?: Hit.IRC_ADVENTURE_RESULT);
        public evt: Hit.E_ADVENTURE_EVENT;
        public rwd?: (Hit.ISTC_REWARD|null);
        public battleResult?: (Hit.ISTC_BATTLE_RESULT|null);
        public adv?: (Hit.ISTC_ADVENTURE|null);
        public errCode: number;
        public static create(properties?: Hit.IRC_ADVENTURE_RESULT): Hit.RC_ADVENTURE_RESULT;
        public static encode(message: Hit.IRC_ADVENTURE_RESULT, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: Hit.IRC_ADVENTURE_RESULT, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Hit.RC_ADVENTURE_RESULT;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Hit.RC_ADVENTURE_RESULT;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): Hit.RC_ADVENTURE_RESULT;
        public static toObject(message: Hit.RC_ADVENTURE_RESULT, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    enum EBATTLE_WEATHER {
        EBW_CLEAR_SKIES = 0,
        EBW_HARSH_SUNLIGHT = 1,
        EBW_RAIN = 2,
        EBW_SANDSTORM = 3,
        EBW_HAIL = 4,
        EBW_FOG = 5,
        EBW_MYSTERIOUS_AIR_CURRENT = 6
    }

    interface ISTC_BATTLE_INPUT {
        teams?: (Hit.ISTC_BATTLE_INPUT_TEAM[]|null);
        fieldCnt?: (number|null);
        weather?: (Hit.EBATTLE_WEATHER|null);
    }

    class STC_BATTLE_INPUT implements ISTC_BATTLE_INPUT {
        constructor(properties?: Hit.ISTC_BATTLE_INPUT);
        public teams: Hit.ISTC_BATTLE_INPUT_TEAM[];
        public fieldCnt: number;
        public weather: Hit.EBATTLE_WEATHER;
        public static create(properties?: Hit.ISTC_BATTLE_INPUT): Hit.STC_BATTLE_INPUT;
        public static encode(message: Hit.ISTC_BATTLE_INPUT, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: Hit.ISTC_BATTLE_INPUT, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Hit.STC_BATTLE_INPUT;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Hit.STC_BATTLE_INPUT;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): Hit.STC_BATTLE_INPUT;
        public static toObject(message: Hit.STC_BATTLE_INPUT, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface ISTC_BATTLE_INPUT_TEAM {
        ver?: (number|null);
        name?: (string|null);
        pokes?: (Hit.ISTC_BATTLE_INPUT_POKE[]|null);
    }

    class STC_BATTLE_INPUT_TEAM implements ISTC_BATTLE_INPUT_TEAM {
        constructor(properties?: Hit.ISTC_BATTLE_INPUT_TEAM);
        public ver: number;
        public name: string;
        public pokes: Hit.ISTC_BATTLE_INPUT_POKE[];
        public static create(properties?: Hit.ISTC_BATTLE_INPUT_TEAM): Hit.STC_BATTLE_INPUT_TEAM;
        public static encode(message: Hit.ISTC_BATTLE_INPUT_TEAM, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: Hit.ISTC_BATTLE_INPUT_TEAM, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Hit.STC_BATTLE_INPUT_TEAM;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Hit.STC_BATTLE_INPUT_TEAM;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): Hit.STC_BATTLE_INPUT_TEAM;
        public static toObject(message: Hit.STC_BATTLE_INPUT_TEAM, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface ISTC_BATTLE_INPUT_POKE {
        ver?: (number|null);
        pokeId?: (number|null);
        lv?: (number|null);
        ivs?: (number[]|null);
        nature?: (number|null);
        alv?: (number|null);
        nonVolatileStatus?: (number|null);
        nvsLastingRounds?: (number|null);
        moves?: (Hit.ISTC_BATTLE_INPUT_MOVE[]|null);
        abilities?: (Hit.ISTC_BATTLE_INPUT_ABILITY[]|null);
        userData?: (number|null);
    }

    class STC_BATTLE_INPUT_POKE implements ISTC_BATTLE_INPUT_POKE {
        constructor(properties?: Hit.ISTC_BATTLE_INPUT_POKE);
        public ver: number;
        public pokeId: number;
        public lv: number;
        public ivs: number[];
        public nature: number;
        public alv: number;
        public nonVolatileStatus: number;
        public nvsLastingRounds: number;
        public moves: Hit.ISTC_BATTLE_INPUT_MOVE[];
        public abilities: Hit.ISTC_BATTLE_INPUT_ABILITY[];
        public userData: number;
        public static create(properties?: Hit.ISTC_BATTLE_INPUT_POKE): Hit.STC_BATTLE_INPUT_POKE;
        public static encode(message: Hit.ISTC_BATTLE_INPUT_POKE, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: Hit.ISTC_BATTLE_INPUT_POKE, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Hit.STC_BATTLE_INPUT_POKE;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Hit.STC_BATTLE_INPUT_POKE;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): Hit.STC_BATTLE_INPUT_POKE;
        public static toObject(message: Hit.STC_BATTLE_INPUT_POKE, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface ISTC_BATTLE_INPUT_MOVE {
        id?: (number|null);
    }

    class STC_BATTLE_INPUT_MOVE implements ISTC_BATTLE_INPUT_MOVE {
        constructor(properties?: Hit.ISTC_BATTLE_INPUT_MOVE);
        public id: number;
        public static create(properties?: Hit.ISTC_BATTLE_INPUT_MOVE): Hit.STC_BATTLE_INPUT_MOVE;
        public static encode(message: Hit.ISTC_BATTLE_INPUT_MOVE, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: Hit.ISTC_BATTLE_INPUT_MOVE, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Hit.STC_BATTLE_INPUT_MOVE;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Hit.STC_BATTLE_INPUT_MOVE;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): Hit.STC_BATTLE_INPUT_MOVE;
        public static toObject(message: Hit.STC_BATTLE_INPUT_MOVE, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface ISTC_BATTLE_INPUT_ABILITY {
        id?: (number|null);
    }

    class STC_BATTLE_INPUT_ABILITY implements ISTC_BATTLE_INPUT_ABILITY {
        constructor(properties?: Hit.ISTC_BATTLE_INPUT_ABILITY);
        public id: number;
        public static create(properties?: Hit.ISTC_BATTLE_INPUT_ABILITY): Hit.STC_BATTLE_INPUT_ABILITY;
        public static encode(message: Hit.ISTC_BATTLE_INPUT_ABILITY, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: Hit.ISTC_BATTLE_INPUT_ABILITY, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Hit.STC_BATTLE_INPUT_ABILITY;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Hit.STC_BATTLE_INPUT_ABILITY;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): Hit.STC_BATTLE_INPUT_ABILITY;
        public static toObject(message: Hit.STC_BATTLE_INPUT_ABILITY, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface ISTC_BATTLE_RESULT {
        ver?: (number|null);
        battleType?: (number|null);
        mapId?: (number|null);
        fieldCnt?: (number|null);
        weather?: (Hit.EBATTLE_WEATHER|null);
        teams?: (Hit.ISTC_BATTLE_TEAM[]|null);
        result?: (number|null);
        star?: (number|null);
        report?: (Hit.ISTC_BATTLE_REPORT|null);
        err?: (string|null);
    }

    class STC_BATTLE_RESULT implements ISTC_BATTLE_RESULT {
        constructor(properties?: Hit.ISTC_BATTLE_RESULT);
        public ver: number;
        public battleType: number;
        public mapId: number;
        public fieldCnt: number;
        public weather: Hit.EBATTLE_WEATHER;
        public teams: Hit.ISTC_BATTLE_TEAM[];
        public result: number;
        public star: number;
        public report?: (Hit.ISTC_BATTLE_REPORT|null);
        public err: string;
        public static create(properties?: Hit.ISTC_BATTLE_RESULT): Hit.STC_BATTLE_RESULT;
        public static encode(message: Hit.ISTC_BATTLE_RESULT, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: Hit.ISTC_BATTLE_RESULT, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Hit.STC_BATTLE_RESULT;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Hit.STC_BATTLE_RESULT;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): Hit.STC_BATTLE_RESULT;
        public static toObject(message: Hit.STC_BATTLE_RESULT, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface ISTC_BATTLE_TEAM {
        name?: (string|null);
        pokes?: (Hit.ISTC_BATTLE_POKE[]|null);
    }

    class STC_BATTLE_TEAM implements ISTC_BATTLE_TEAM {
        constructor(properties?: Hit.ISTC_BATTLE_TEAM);
        public name: string;
        public pokes: Hit.ISTC_BATTLE_POKE[];
        public static create(properties?: Hit.ISTC_BATTLE_TEAM): Hit.STC_BATTLE_TEAM;
        public static encode(message: Hit.ISTC_BATTLE_TEAM, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: Hit.ISTC_BATTLE_TEAM, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Hit.STC_BATTLE_TEAM;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Hit.STC_BATTLE_TEAM;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): Hit.STC_BATTLE_TEAM;
        public static toObject(message: Hit.STC_BATTLE_TEAM, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface ISTC_BATTLE_REPORT {
        rounds?: (Hit.ISTC_BATTLE_ROUND[]|null);
    }

    class STC_BATTLE_REPORT implements ISTC_BATTLE_REPORT {
        constructor(properties?: Hit.ISTC_BATTLE_REPORT);
        public rounds: Hit.ISTC_BATTLE_ROUND[];
        public static create(properties?: Hit.ISTC_BATTLE_REPORT): Hit.STC_BATTLE_REPORT;
        public static encode(message: Hit.ISTC_BATTLE_REPORT, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: Hit.ISTC_BATTLE_REPORT, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Hit.STC_BATTLE_REPORT;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Hit.STC_BATTLE_REPORT;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): Hit.STC_BATTLE_REPORT;
        public static toObject(message: Hit.STC_BATTLE_REPORT, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface ISTC_BATTLE_POKE {
        uid?: (number|null);
        pokeId?: (number|null);
        maxHp?: (number|null);
        initHp?: (number|null);
        lv?: (number|null);
        alv?: (number|null);
        nonVolatileStatus?: (number|null);
    }

    class STC_BATTLE_POKE implements ISTC_BATTLE_POKE {
        constructor(properties?: Hit.ISTC_BATTLE_POKE);
        public uid: number;
        public pokeId: number;
        public maxHp: number;
        public initHp: number;
        public lv: number;
        public alv: number;
        public nonVolatileStatus: number;
        public static create(properties?: Hit.ISTC_BATTLE_POKE): Hit.STC_BATTLE_POKE;
        public static encode(message: Hit.ISTC_BATTLE_POKE, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: Hit.ISTC_BATTLE_POKE, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Hit.STC_BATTLE_POKE;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Hit.STC_BATTLE_POKE;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): Hit.STC_BATTLE_POKE;
        public static toObject(message: Hit.STC_BATTLE_POKE, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface ISTC_BATTLE_MOVE {
        uid?: (number|null);
        moveId?: (number|null);
        targets?: (Hit.ISTC_BATTLE_TARGET[]|null);
    }

    class STC_BATTLE_MOVE implements ISTC_BATTLE_MOVE {
        constructor(properties?: Hit.ISTC_BATTLE_MOVE);
        public uid: number;
        public moveId: number;
        public targets: Hit.ISTC_BATTLE_TARGET[];
        public static create(properties?: Hit.ISTC_BATTLE_MOVE): Hit.STC_BATTLE_MOVE;
        public static encode(message: Hit.ISTC_BATTLE_MOVE, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: Hit.ISTC_BATTLE_MOVE, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Hit.STC_BATTLE_MOVE;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Hit.STC_BATTLE_MOVE;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): Hit.STC_BATTLE_MOVE;
        public static toObject(message: Hit.STC_BATTLE_MOVE, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface ISTC_BATTLE_ROUND {
        round?: (number|null);
        acts?: (Hit.ISTC_BATTLE_ACTION[]|null);
    }

    class STC_BATTLE_ROUND implements ISTC_BATTLE_ROUND {
        constructor(properties?: Hit.ISTC_BATTLE_ROUND);
        public round: number;
        public acts: Hit.ISTC_BATTLE_ACTION[];
        public static create(properties?: Hit.ISTC_BATTLE_ROUND): Hit.STC_BATTLE_ROUND;
        public static encode(message: Hit.ISTC_BATTLE_ROUND, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: Hit.ISTC_BATTLE_ROUND, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Hit.STC_BATTLE_ROUND;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Hit.STC_BATTLE_ROUND;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): Hit.STC_BATTLE_ROUND;
        public static toObject(message: Hit.STC_BATTLE_ROUND, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    enum EBATTLE_TYPE_EFFECTIVE {
        EBTE_VERY_EFFECTIVE = 0,
        EBTE_NORMAL = 1,
        EBTE_NOT_EFFECTIVE = 2,
        EBTE_NO_EFFECT = 3
    }

    interface ISTC_BATTLE_TARGET {
        uid?: (number|null);
        statId?: (number|null);
        value?: (number|null);
        effective?: (Hit.EBATTLE_TYPE_EFFECTIVE|null);
    }

    class STC_BATTLE_TARGET implements ISTC_BATTLE_TARGET {
        constructor(properties?: Hit.ISTC_BATTLE_TARGET);
        public uid: number;
        public statId: number;
        public value: number;
        public effective: Hit.EBATTLE_TYPE_EFFECTIVE;
        public static create(properties?: Hit.ISTC_BATTLE_TARGET): Hit.STC_BATTLE_TARGET;
        public static encode(message: Hit.ISTC_BATTLE_TARGET, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: Hit.ISTC_BATTLE_TARGET, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Hit.STC_BATTLE_TARGET;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Hit.STC_BATTLE_TARGET;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): Hit.STC_BATTLE_TARGET;
        public static toObject(message: Hit.STC_BATTLE_TARGET, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface ISTC_BATTLE_SWITCH_POKE {
        uid?: (number|null);
        teamIdx?: (number|null);
        pos?: (number|null);
    }

    class STC_BATTLE_SWITCH_POKE implements ISTC_BATTLE_SWITCH_POKE {
        constructor(properties?: Hit.ISTC_BATTLE_SWITCH_POKE);
        public uid: number;
        public teamIdx: number;
        public pos: number;
        public static create(properties?: Hit.ISTC_BATTLE_SWITCH_POKE): Hit.STC_BATTLE_SWITCH_POKE;
        public static encode(message: Hit.ISTC_BATTLE_SWITCH_POKE, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: Hit.ISTC_BATTLE_SWITCH_POKE, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Hit.STC_BATTLE_SWITCH_POKE;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Hit.STC_BATTLE_SWITCH_POKE;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): Hit.STC_BATTLE_SWITCH_POKE;
        public static toObject(message: Hit.STC_BATTLE_SWITCH_POKE, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface ISTC_BATTLE_POKE_DEAD {
        uid?: (number|null);
    }

    class STC_BATTLE_POKE_DEAD implements ISTC_BATTLE_POKE_DEAD {
        constructor(properties?: Hit.ISTC_BATTLE_POKE_DEAD);
        public uid: number;
        public static create(properties?: Hit.ISTC_BATTLE_POKE_DEAD): Hit.STC_BATTLE_POKE_DEAD;
        public static encode(message: Hit.ISTC_BATTLE_POKE_DEAD, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: Hit.ISTC_BATTLE_POKE_DEAD, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Hit.STC_BATTLE_POKE_DEAD;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Hit.STC_BATTLE_POKE_DEAD;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): Hit.STC_BATTLE_POKE_DEAD;
        public static toObject(message: Hit.STC_BATTLE_POKE_DEAD, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    enum EBATTLE_STATUS_ACTION {
        EBSA_ADD = 0,
        EBSA_REMOVE = 1,
        EBSA_DMG = 2,
        EBSA_NO_MOVE = 3
    }

    enum EBATTLE_STATUS_TYPE {
        EBST_NONE = 0,
        EBST_BURN = 1,
        EBST_FREEZE = 2,
        EBST_PARALYSIS = 3,
        EBST_POISON = 4,
        EBST_BADLY_POISONED = 5,
        EBST_SLEEP = 6
    }

    interface ISTC_BATTLE_STATUS {
        uid?: (number|null);
        t?: (Hit.EBATTLE_STATUS_TYPE|null);
        act?: (Hit.EBATTLE_STATUS_ACTION|null);
        intParams?: (number[]|null);
    }

    class STC_BATTLE_STATUS implements ISTC_BATTLE_STATUS {
        constructor(properties?: Hit.ISTC_BATTLE_STATUS);
        public uid: number;
        public t: Hit.EBATTLE_STATUS_TYPE;
        public act: Hit.EBATTLE_STATUS_ACTION;
        public intParams: number[];
        public static create(properties?: Hit.ISTC_BATTLE_STATUS): Hit.STC_BATTLE_STATUS;
        public static encode(message: Hit.ISTC_BATTLE_STATUS, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: Hit.ISTC_BATTLE_STATUS, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Hit.STC_BATTLE_STATUS;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Hit.STC_BATTLE_STATUS;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): Hit.STC_BATTLE_STATUS;
        public static toObject(message: Hit.STC_BATTLE_STATUS, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    enum EBATTLE_WEATHER_ACTION {
        EBWA_CHANGE = 0,
        EBWA_DMG = 1
    }

    interface ISTC_BATTLE_WEATHER {
        uid?: (number|null);
        weather?: (Hit.EBATTLE_WEATHER|null);
        act?: (Hit.EBATTLE_WEATHER_ACTION|null);
        intParams?: (number[]|null);
    }

    class STC_BATTLE_WEATHER implements ISTC_BATTLE_WEATHER {
        constructor(properties?: Hit.ISTC_BATTLE_WEATHER);
        public uid: number;
        public weather: Hit.EBATTLE_WEATHER;
        public act: Hit.EBATTLE_WEATHER_ACTION;
        public intParams: number[];
        public static create(properties?: Hit.ISTC_BATTLE_WEATHER): Hit.STC_BATTLE_WEATHER;
        public static encode(message: Hit.ISTC_BATTLE_WEATHER, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: Hit.ISTC_BATTLE_WEATHER, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Hit.STC_BATTLE_WEATHER;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Hit.STC_BATTLE_WEATHER;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): Hit.STC_BATTLE_WEATHER;
        public static toObject(message: Hit.STC_BATTLE_WEATHER, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    enum EBATTLE_ACT_TYPE {
        EBAT_SWITCH = 0,
        EBAT_MOVE = 1,
        EBAT_DEAD = 2,
        EBAT_STATUS = 3,
        EBAT_WEATHER = 4
    }

    interface ISTC_BATTLE_ACTION {
        type?: (Hit.EBATTLE_ACT_TYPE|null);
        "switch"?: (Hit.ISTC_BATTLE_SWITCH_POKE|null);
        move?: (Hit.ISTC_BATTLE_MOVE|null);
        dead?: (Hit.ISTC_BATTLE_POKE_DEAD|null);
        status?: (Hit.ISTC_BATTLE_STATUS|null);
        weather?: (Hit.ISTC_BATTLE_WEATHER|null);
    }

    class STC_BATTLE_ACTION implements ISTC_BATTLE_ACTION {
        constructor(properties?: Hit.ISTC_BATTLE_ACTION);
        public type: Hit.EBATTLE_ACT_TYPE;
        public switch?: (Hit.ISTC_BATTLE_SWITCH_POKE|null);
        public move?: (Hit.ISTC_BATTLE_MOVE|null);
        public dead?: (Hit.ISTC_BATTLE_POKE_DEAD|null);
        public status?: (Hit.ISTC_BATTLE_STATUS|null);
        public weather?: (Hit.ISTC_BATTLE_WEATHER|null);
        public static create(properties?: Hit.ISTC_BATTLE_ACTION): Hit.STC_BATTLE_ACTION;
        public static encode(message: Hit.ISTC_BATTLE_ACTION, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: Hit.ISTC_BATTLE_ACTION, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Hit.STC_BATTLE_ACTION;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Hit.STC_BATTLE_ACTION;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): Hit.STC_BATTLE_ACTION;
        public static toObject(message: Hit.STC_BATTLE_ACTION, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    enum E_REWARD_TYPE {
        ERT_RES = 0,
        ERT_BAG_ITEM = 1,
        ERT_POKE = 2
    }

    interface ISTC_REWARD_ENTRY {
        type?: (Hit.E_REWARD_TYPE|null);
        id?: (number|null);
        cnt?: (number|null);
    }

    class STC_REWARD_ENTRY implements ISTC_REWARD_ENTRY {
        constructor(properties?: Hit.ISTC_REWARD_ENTRY);
        public type: Hit.E_REWARD_TYPE;
        public id: number;
        public cnt: number;
        public static create(properties?: Hit.ISTC_REWARD_ENTRY): Hit.STC_REWARD_ENTRY;
        public static encode(message: Hit.ISTC_REWARD_ENTRY, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: Hit.ISTC_REWARD_ENTRY, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Hit.STC_REWARD_ENTRY;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Hit.STC_REWARD_ENTRY;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): Hit.STC_REWARD_ENTRY;
        public static toObject(message: Hit.STC_REWARD_ENTRY, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface ISTC_REWARD {
        rwds?: (Hit.ISTC_REWARD_ENTRY[]|null);
    }

    class STC_REWARD implements ISTC_REWARD {
        constructor(properties?: Hit.ISTC_REWARD);
        public rwds: Hit.ISTC_REWARD_ENTRY[];
        public static create(properties?: Hit.ISTC_REWARD): Hit.STC_REWARD;
        public static encode(message: Hit.ISTC_REWARD, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: Hit.ISTC_REWARD, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Hit.STC_REWARD;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Hit.STC_REWARD;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): Hit.STC_REWARD;
        public static toObject(message: Hit.STC_REWARD, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IItemBagEntry {
        uid?: (number|null);
        id?: (number|null);
        cnt?: (number|null);
    }

    class ItemBagEntry implements IItemBagEntry {
        constructor(properties?: Hit.IItemBagEntry);
        public uid: number;
        public id: number;
        public cnt: number;
        public static create(properties?: Hit.IItemBagEntry): Hit.ItemBagEntry;
        public static encode(message: Hit.IItemBagEntry, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: Hit.IItemBagEntry, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Hit.ItemBagEntry;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Hit.ItemBagEntry;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): Hit.ItemBagEntry;
        public static toObject(message: Hit.ItemBagEntry, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IBagRes {
        uid?: (number|null);
        id?: (number|null);
    }

    class BagRes implements IBagRes {
        constructor(properties?: Hit.IBagRes);
        public uid: number;
        public id: number;
        public static create(properties?: Hit.IBagRes): Hit.BagRes;
        public static encode(message: Hit.IBagRes, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: Hit.IBagRes, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Hit.BagRes;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Hit.BagRes;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): Hit.BagRes;
        public static toObject(message: Hit.BagRes, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IItemBag {
        items?: (Hit.IItemBagEntry[]|null);
        gold?: (number|null);
        diamond?: (number|null);
        goods?: ({ [k: string]: Hit.IItemBagEntry }|null);
        bags?: ({ [k: string]: Hit.IBagRes }|null);
        bigNum1?: (number|Long|null);
        bigNum2?: (number|Long|null);
    }

    class ItemBag implements IItemBag {
        constructor(properties?: Hit.IItemBag);
        public items: Hit.IItemBagEntry[];
        public gold: number;
        public diamond: number;
        public goods: { [k: string]: Hit.IItemBagEntry };
        public bags: { [k: string]: Hit.IBagRes };
        public bigNum1: (number|Long);
        public bigNum2: (number|Long);
        public static create(properties?: Hit.IItemBag): Hit.ItemBag;
        public static encode(message: Hit.IItemBag, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: Hit.IItemBag, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Hit.ItemBag;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Hit.ItemBag;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): Hit.ItemBag;
        public static toObject(message: Hit.ItemBag, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface ICR_USE_ITEM {
        itemUid?: (number|null);
    }

    class CR_USE_ITEM implements ICR_USE_ITEM {
        constructor(properties?: Hit.ICR_USE_ITEM);
        public itemUid: number;
        public static create(properties?: Hit.ICR_USE_ITEM): Hit.CR_USE_ITEM;
        public static encode(message: Hit.ICR_USE_ITEM, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: Hit.ICR_USE_ITEM, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Hit.CR_USE_ITEM;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Hit.CR_USE_ITEM;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): Hit.CR_USE_ITEM;
        public static toObject(message: Hit.CR_USE_ITEM, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IRC_USE_ITEM_RESULT {
        errCode?: (number|null);
    }

    class RC_USE_ITEM_RESULT implements IRC_USE_ITEM_RESULT {
        constructor(properties?: Hit.IRC_USE_ITEM_RESULT);
        public errCode: number;
        public static create(properties?: Hit.IRC_USE_ITEM_RESULT): Hit.RC_USE_ITEM_RESULT;
        public static encode(message: Hit.IRC_USE_ITEM_RESULT, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: Hit.IRC_USE_ITEM_RESULT, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Hit.RC_USE_ITEM_RESULT;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Hit.RC_USE_ITEM_RESULT;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): Hit.RC_USE_ITEM_RESULT;
        public static toObject(message: Hit.RC_USE_ITEM_RESULT, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IBROADCAST_PARAM {
        type?: (number|null);
        val?: (string|null);
    }

    class BROADCAST_PARAM implements IBROADCAST_PARAM {
        constructor(properties?: Hit.IBROADCAST_PARAM);
        public type: number;
        public val: string;
        public static create(properties?: Hit.IBROADCAST_PARAM): Hit.BROADCAST_PARAM;
        public static encode(message: Hit.IBROADCAST_PARAM, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: Hit.IBROADCAST_PARAM, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Hit.BROADCAST_PARAM;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Hit.BROADCAST_PARAM;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): Hit.BROADCAST_PARAM;
        public static toObject(message: Hit.BROADCAST_PARAM, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IRC_BROADCAST {
        content?: (string|null);
        params?: (Hit.IBROADCAST_PARAM[]|null);
    }

    class RC_BROADCAST implements IRC_BROADCAST {
        constructor(properties?: Hit.IRC_BROADCAST);
        public content: string;
        public params: Hit.IBROADCAST_PARAM[];
        public static create(properties?: Hit.IRC_BROADCAST): Hit.RC_BROADCAST;
        public static encode(message: Hit.IRC_BROADCAST, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: Hit.IRC_BROADCAST, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Hit.RC_BROADCAST;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Hit.RC_BROADCAST;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): Hit.RC_BROADCAST;
        public static toObject(message: Hit.RC_BROADCAST, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IRC_LV_UP {
        lv?: (number|null);
        rwd?: (Hit.ISTC_REWARD|null);
    }

    class RC_LV_UP implements IRC_LV_UP {
        constructor(properties?: Hit.IRC_LV_UP);
        public lv: number;
        public rwd?: (Hit.ISTC_REWARD|null);
        public static create(properties?: Hit.IRC_LV_UP): Hit.RC_LV_UP;
        public static encode(message: Hit.IRC_LV_UP, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: Hit.IRC_LV_UP, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Hit.RC_LV_UP;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Hit.RC_LV_UP;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): Hit.RC_LV_UP;
        public static toObject(message: Hit.RC_LV_UP, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IBattleSeason {
        evtId?: (number|null);
        state?: (number|null);
        startTime?: (number|null);
        endTime?: (number|null);
        itemId?: (number|null);
    }

    class BattleSeason implements IBattleSeason {
        constructor(properties?: Hit.IBattleSeason);
        public evtId: number;
        public state: number;
        public startTime: number;
        public endTime: number;
        public itemId: number;
        public static create(properties?: Hit.IBattleSeason): Hit.BattleSeason;
        public static encode(message: Hit.IBattleSeason, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: Hit.IBattleSeason, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Hit.BattleSeason;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Hit.BattleSeason;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): Hit.BattleSeason;
        public static toObject(message: Hit.BattleSeason, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    enum E_GACHA_TYPE {
        UGT_NORMAL = 0,
        UGT_SPECIAL = 1
    }

    interface ICR_GACHA {
        type?: (Hit.E_GACHA_TYPE|null);
        cnt?: (number|null);
    }

    class CR_GACHA implements ICR_GACHA {
        constructor(properties?: Hit.ICR_GACHA);
        public type: Hit.E_GACHA_TYPE;
        public cnt: number;
        public static create(properties?: Hit.ICR_GACHA): Hit.CR_GACHA;
        public static encode(message: Hit.ICR_GACHA, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: Hit.ICR_GACHA, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Hit.CR_GACHA;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Hit.CR_GACHA;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): Hit.CR_GACHA;
        public static toObject(message: Hit.CR_GACHA, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IRC_GACHA_RESULT {
        pokes?: (Hit.ISTC_REWARD|null);
        errorCode?: (number|null);
    }

    class RC_GACHA_RESULT implements IRC_GACHA_RESULT {
        constructor(properties?: Hit.IRC_GACHA_RESULT);
        public pokes?: (Hit.ISTC_REWARD|null);
        public errorCode: number;
        public static create(properties?: Hit.IRC_GACHA_RESULT): Hit.RC_GACHA_RESULT;
        public static encode(message: Hit.IRC_GACHA_RESULT, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: Hit.IRC_GACHA_RESULT, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Hit.RC_GACHA_RESULT;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Hit.RC_GACHA_RESULT;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): Hit.RC_GACHA_RESULT;
        public static toObject(message: Hit.RC_GACHA_RESULT, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface ICR_DEL_MAIL {
        mailId?: (number|null);
    }

    class CR_DEL_MAIL implements ICR_DEL_MAIL {
        constructor(properties?: Hit.ICR_DEL_MAIL);
        public mailId: number;
        public static create(properties?: Hit.ICR_DEL_MAIL): Hit.CR_DEL_MAIL;
        public static encode(message: Hit.ICR_DEL_MAIL, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: Hit.ICR_DEL_MAIL, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Hit.CR_DEL_MAIL;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Hit.CR_DEL_MAIL;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): Hit.CR_DEL_MAIL;
        public static toObject(message: Hit.CR_DEL_MAIL, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IRC_DEL_MAIL_RESULT {
        mailId?: (number|null);
    }

    class RC_DEL_MAIL_RESULT implements IRC_DEL_MAIL_RESULT {
        constructor(properties?: Hit.IRC_DEL_MAIL_RESULT);
        public mailId: number;
        public static create(properties?: Hit.IRC_DEL_MAIL_RESULT): Hit.RC_DEL_MAIL_RESULT;
        public static encode(message: Hit.IRC_DEL_MAIL_RESULT, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: Hit.IRC_DEL_MAIL_RESULT, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Hit.RC_DEL_MAIL_RESULT;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Hit.RC_DEL_MAIL_RESULT;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): Hit.RC_DEL_MAIL_RESULT;
        public static toObject(message: Hit.RC_DEL_MAIL_RESULT, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IGetItemMsg {
        mailId?: (number|null);
        receiverUid?: (string|null);
        itemId?: (number|null);
        cnt?: (number|null);
    }

    class GetItemMsg implements IGetItemMsg {
        constructor(properties?: Hit.IGetItemMsg);
        public mailId: number;
        public receiverUid: string;
        public itemId: number;
        public cnt: number;
        public static create(properties?: Hit.IGetItemMsg): Hit.GetItemMsg;
        public static encode(message: Hit.IGetItemMsg, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: Hit.IGetItemMsg, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Hit.GetItemMsg;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Hit.GetItemMsg;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): Hit.GetItemMsg;
        public static toObject(message: Hit.GetItemMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IGetItemMsgList {
        mails?: (Hit.IGetItemMsg[]|null);
    }

    class GetItemMsgList implements IGetItemMsgList {
        constructor(properties?: Hit.IGetItemMsgList);
        public mails: Hit.IGetItemMsg[];
        public static create(properties?: Hit.IGetItemMsgList): Hit.GetItemMsgList;
        public static encode(message: Hit.IGetItemMsgList, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: Hit.IGetItemMsgList, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Hit.GetItemMsgList;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Hit.GetItemMsgList;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): Hit.GetItemMsgList;
        public static toObject(message: Hit.GetItemMsgList, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface ICR_ADD_TO_TEAM {
        pokeUid?: (number|null);
        posIdx?: (number|null);
    }

    class CR_ADD_TO_TEAM implements ICR_ADD_TO_TEAM {
        constructor(properties?: Hit.ICR_ADD_TO_TEAM);
        public pokeUid: number;
        public posIdx: number;
        public static create(properties?: Hit.ICR_ADD_TO_TEAM): Hit.CR_ADD_TO_TEAM;
        public static encode(message: Hit.ICR_ADD_TO_TEAM, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: Hit.ICR_ADD_TO_TEAM, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Hit.CR_ADD_TO_TEAM;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Hit.CR_ADD_TO_TEAM;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): Hit.CR_ADD_TO_TEAM;
        public static toObject(message: Hit.CR_ADD_TO_TEAM, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IRC_ADD_TO_TEAM_RESULT {
        errCode?: (number|null);
    }

    class RC_ADD_TO_TEAM_RESULT implements IRC_ADD_TO_TEAM_RESULT {
        constructor(properties?: Hit.IRC_ADD_TO_TEAM_RESULT);
        public errCode: number;
        public static create(properties?: Hit.IRC_ADD_TO_TEAM_RESULT): Hit.RC_ADD_TO_TEAM_RESULT;
        public static encode(message: Hit.IRC_ADD_TO_TEAM_RESULT, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: Hit.IRC_ADD_TO_TEAM_RESULT, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Hit.RC_ADD_TO_TEAM_RESULT;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Hit.RC_ADD_TO_TEAM_RESULT;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): Hit.RC_ADD_TO_TEAM_RESULT;
        public static toObject(message: Hit.RC_ADD_TO_TEAM_RESULT, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IAdventureTeam {
        members?: (Hit.IAdventureTeamMember[]|null);
    }

    class AdventureTeam implements IAdventureTeam {
        constructor(properties?: Hit.IAdventureTeam);
        public members: Hit.IAdventureTeamMember[];
        public static create(properties?: Hit.IAdventureTeam): Hit.AdventureTeam;
        public static encode(message: Hit.IAdventureTeam, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: Hit.IAdventureTeam, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Hit.AdventureTeam;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Hit.AdventureTeam;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): Hit.AdventureTeam;
        public static toObject(message: Hit.AdventureTeam, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IAdventureTeamMember {
        uid?: (number|null);
    }

    class AdventureTeamMember implements IAdventureTeamMember {
        constructor(properties?: Hit.IAdventureTeamMember);
        public uid: number;
        public static create(properties?: Hit.IAdventureTeamMember): Hit.AdventureTeamMember;
        public static encode(message: Hit.IAdventureTeamMember, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: Hit.IAdventureTeamMember, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Hit.AdventureTeamMember;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Hit.AdventureTeamMember;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): Hit.AdventureTeamMember;
        public static toObject(message: Hit.AdventureTeamMember, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IPokeList {
        pokes?: (Hit.IPokeInfo[]|null);
    }

    class PokeList implements IPokeList {
        constructor(properties?: Hit.IPokeList);
        public pokes: Hit.IPokeInfo[];
        public static create(properties?: Hit.IPokeList): Hit.PokeList;
        public static encode(message: Hit.IPokeList, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: Hit.IPokeList, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Hit.PokeList;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Hit.PokeList;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): Hit.PokeList;
        public static toObject(message: Hit.PokeList, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IPokeInfo {
        uid?: (number|null);
        id?: (number|null);
        lv?: (number|null);
        adv?: (number|null);
        alv?: (number|null);
        ivsHp?: (number|null);
        ivsAtk?: (number|null);
        ivsDef?: (number|null);
        ivsSpa?: (number|null);
        ivsSpd?: (number|null);
        ivsSpeed?: (number|null);
        ivsAccu?: (number|null);
        ivsEvasion?: (number|null);
        nature?: (number|null);
        ability?: (number|null);
        moves?: (number[]|null);
    }

    class PokeInfo implements IPokeInfo {
        constructor(properties?: Hit.IPokeInfo);
        public uid: number;
        public id: number;
        public lv: number;
        public adv: number;
        public alv: number;
        public ivsHp: number;
        public ivsAtk: number;
        public ivsDef: number;
        public ivsSpa: number;
        public ivsSpd: number;
        public ivsSpeed: number;
        public ivsAccu: number;
        public ivsEvasion: number;
        public nature: number;
        public ability: number;
        public moves: number[];
        public static create(properties?: Hit.IPokeInfo): Hit.PokeInfo;
        public static encode(message: Hit.IPokeInfo, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: Hit.IPokeInfo, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Hit.PokeInfo;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Hit.PokeInfo;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): Hit.PokeInfo;
        public static toObject(message: Hit.PokeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface ICR_POKE_LV_UP {
        pokeUid?: (number|null);
    }

    class CR_POKE_LV_UP implements ICR_POKE_LV_UP {
        constructor(properties?: Hit.ICR_POKE_LV_UP);
        public pokeUid: number;
        public static create(properties?: Hit.ICR_POKE_LV_UP): Hit.CR_POKE_LV_UP;
        public static encode(message: Hit.ICR_POKE_LV_UP, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: Hit.ICR_POKE_LV_UP, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Hit.CR_POKE_LV_UP;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Hit.CR_POKE_LV_UP;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): Hit.CR_POKE_LV_UP;
        public static toObject(message: Hit.CR_POKE_LV_UP, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IRC_POKE_LV_UP_RESULT {
        errCode?: (number|null);
    }

    class RC_POKE_LV_UP_RESULT implements IRC_POKE_LV_UP_RESULT {
        constructor(properties?: Hit.IRC_POKE_LV_UP_RESULT);
        public errCode: number;
        public static create(properties?: Hit.IRC_POKE_LV_UP_RESULT): Hit.RC_POKE_LV_UP_RESULT;
        public static encode(message: Hit.IRC_POKE_LV_UP_RESULT, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: Hit.IRC_POKE_LV_UP_RESULT, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Hit.RC_POKE_LV_UP_RESULT;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Hit.RC_POKE_LV_UP_RESULT;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): Hit.RC_POKE_LV_UP_RESULT;
        public static toObject(message: Hit.RC_POKE_LV_UP_RESULT, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface ICR_POKE_ADV {
        pokeUid?: (number|null);
    }

    class CR_POKE_ADV implements ICR_POKE_ADV {
        constructor(properties?: Hit.ICR_POKE_ADV);
        public pokeUid: number;
        public static create(properties?: Hit.ICR_POKE_ADV): Hit.CR_POKE_ADV;
        public static encode(message: Hit.ICR_POKE_ADV, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: Hit.ICR_POKE_ADV, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Hit.CR_POKE_ADV;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Hit.CR_POKE_ADV;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): Hit.CR_POKE_ADV;
        public static toObject(message: Hit.CR_POKE_ADV, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IRC_POKE_ADV_RESULT {
        errCode?: (number|null);
    }

    class RC_POKE_ADV_RESULT implements IRC_POKE_ADV_RESULT {
        constructor(properties?: Hit.IRC_POKE_ADV_RESULT);
        public errCode: number;
        public static create(properties?: Hit.IRC_POKE_ADV_RESULT): Hit.RC_POKE_ADV_RESULT;
        public static encode(message: Hit.IRC_POKE_ADV_RESULT, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: Hit.IRC_POKE_ADV_RESULT, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Hit.RC_POKE_ADV_RESULT;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Hit.RC_POKE_ADV_RESULT;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): Hit.RC_POKE_ADV_RESULT;
        public static toObject(message: Hit.RC_POKE_ADV_RESULT, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface ICombatPointRank {
        roleId?: (string|null);
        score?: (number|null);
        name?: (string|null);
    }

    class CombatPointRank implements ICombatPointRank {
        constructor(properties?: Hit.ICombatPointRank);
        public roleId: string;
        public score: number;
        public name: string;
        public static create(properties?: Hit.ICombatPointRank): Hit.CombatPointRank;
        public static encode(message: Hit.ICombatPointRank, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: Hit.ICombatPointRank, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Hit.CombatPointRank;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Hit.CombatPointRank;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): Hit.CombatPointRank;
        public static toObject(message: Hit.CombatPointRank, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IAdventureRank {
        roleId?: (string|null);
        score?: (number|null);
        name?: (string|null);
    }

    class AdventureRank implements IAdventureRank {
        constructor(properties?: Hit.IAdventureRank);
        public roleId: string;
        public score: number;
        public name: string;
        public static create(properties?: Hit.IAdventureRank): Hit.AdventureRank;
        public static encode(message: Hit.IAdventureRank, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: Hit.IAdventureRank, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Hit.AdventureRank;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Hit.AdventureRank;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): Hit.AdventureRank;
        public static toObject(message: Hit.AdventureRank, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface ICombatPointRankList {
        ranks?: (Hit.ICombatPointRank[]|null);
    }

    class CombatPointRankList implements ICombatPointRankList {
        constructor(properties?: Hit.ICombatPointRankList);
        public ranks: Hit.ICombatPointRank[];
        public static create(properties?: Hit.ICombatPointRankList): Hit.CombatPointRankList;
        public static encode(message: Hit.ICombatPointRankList, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: Hit.ICombatPointRankList, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Hit.CombatPointRankList;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Hit.CombatPointRankList;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): Hit.CombatPointRankList;
        public static toObject(message: Hit.CombatPointRankList, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IAdventureRankList {
        ranks?: (Hit.IAdventureRank[]|null);
    }

    class AdventureRankList implements IAdventureRankList {
        constructor(properties?: Hit.IAdventureRankList);
        public ranks: Hit.IAdventureRank[];
        public static create(properties?: Hit.IAdventureRankList): Hit.AdventureRankList;
        public static encode(message: Hit.IAdventureRankList, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: Hit.IAdventureRankList, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Hit.AdventureRankList;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Hit.AdventureRankList;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): Hit.AdventureRankList;
        public static toObject(message: Hit.AdventureRankList, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IBR_PLAYER_INFO {
        uid?: (string|null);
    }

    class BR_PLAYER_INFO implements IBR_PLAYER_INFO {
        constructor(properties?: Hit.IBR_PLAYER_INFO);
        public uid: string;
        public static create(properties?: Hit.IBR_PLAYER_INFO): Hit.BR_PLAYER_INFO;
        public static encode(message: Hit.IBR_PLAYER_INFO, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: Hit.IBR_PLAYER_INFO, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Hit.BR_PLAYER_INFO;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Hit.BR_PLAYER_INFO;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): Hit.BR_PLAYER_INFO;
        public static toObject(message: Hit.BR_PLAYER_INFO, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IRB_PLAYER_INFO_RESULT {
        uid?: (string|null);
    }

    class RB_PLAYER_INFO_RESULT implements IRB_PLAYER_INFO_RESULT {
        constructor(properties?: Hit.IRB_PLAYER_INFO_RESULT);
        public uid: string;
        public static create(properties?: Hit.IRB_PLAYER_INFO_RESULT): Hit.RB_PLAYER_INFO_RESULT;
        public static encode(message: Hit.IRB_PLAYER_INFO_RESULT, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: Hit.IRB_PLAYER_INFO_RESULT, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Hit.RB_PLAYER_INFO_RESULT;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Hit.RB_PLAYER_INFO_RESULT;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): Hit.RB_PLAYER_INFO_RESULT;
        public static toObject(message: Hit.RB_PLAYER_INFO_RESULT, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IRoleModel {
        name?: (string|null);
        lv?: (number|null);
        exp?: (number|null);
        nextLvExpCost?: (number|null);
    }

    class RoleModel implements IRoleModel {
        constructor(properties?: Hit.IRoleModel);
        public name: string;
        public lv: number;
        public exp: number;
        public nextLvExpCost: number;
        public static create(properties?: Hit.IRoleModel): Hit.RoleModel;
        public static encode(message: Hit.IRoleModel, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: Hit.IRoleModel, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Hit.RoleModel;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Hit.RoleModel;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): Hit.RoleModel;
        public static toObject(message: Hit.RoleModel, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface ICR_CHANGE_NAME {
        name?: (string|null);
    }

    class CR_CHANGE_NAME implements ICR_CHANGE_NAME {
        constructor(properties?: Hit.ICR_CHANGE_NAME);
        public name: string;
        public static create(properties?: Hit.ICR_CHANGE_NAME): Hit.CR_CHANGE_NAME;
        public static encode(message: Hit.ICR_CHANGE_NAME, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: Hit.ICR_CHANGE_NAME, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Hit.CR_CHANGE_NAME;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Hit.CR_CHANGE_NAME;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): Hit.CR_CHANGE_NAME;
        public static toObject(message: Hit.CR_CHANGE_NAME, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IRC_CHANGE_NAME_RESULT {
        errCode?: (number|null);
    }

    class RC_CHANGE_NAME_RESULT implements IRC_CHANGE_NAME_RESULT {
        constructor(properties?: Hit.IRC_CHANGE_NAME_RESULT);
        public errCode: number;
        public static create(properties?: Hit.IRC_CHANGE_NAME_RESULT): Hit.RC_CHANGE_NAME_RESULT;
        public static encode(message: Hit.IRC_CHANGE_NAME_RESULT, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: Hit.IRC_CHANGE_NAME_RESULT, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Hit.RC_CHANGE_NAME_RESULT;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Hit.RC_CHANGE_NAME_RESULT;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): Hit.RC_CHANGE_NAME_RESULT;
        public static toObject(message: Hit.RC_CHANGE_NAME_RESULT, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IRC_RAND_NAME_RESULT {
        name?: (string|null);
    }

    class RC_RAND_NAME_RESULT implements IRC_RAND_NAME_RESULT {
        constructor(properties?: Hit.IRC_RAND_NAME_RESULT);
        public name: string;
        public static create(properties?: Hit.IRC_RAND_NAME_RESULT): Hit.RC_RAND_NAME_RESULT;
        public static encode(message: Hit.IRC_RAND_NAME_RESULT, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: Hit.IRC_RAND_NAME_RESULT, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Hit.RC_RAND_NAME_RESULT;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Hit.RC_RAND_NAME_RESULT;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): Hit.RC_RAND_NAME_RESULT;
        public static toObject(message: Hit.RC_RAND_NAME_RESULT, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface ICR_PAY {
        payId?: (number|null);
    }

    class CR_PAY implements ICR_PAY {
        constructor(properties?: Hit.ICR_PAY);
        public payId: number;
        public static create(properties?: Hit.ICR_PAY): Hit.CR_PAY;
        public static encode(message: Hit.ICR_PAY, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: Hit.ICR_PAY, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Hit.CR_PAY;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Hit.CR_PAY;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): Hit.CR_PAY;
        public static toObject(message: Hit.CR_PAY, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IRC_PAY_RESULT {
        cnt?: (number|null);
    }

    class RC_PAY_RESULT implements IRC_PAY_RESULT {
        constructor(properties?: Hit.IRC_PAY_RESULT);
        public cnt: number;
        public static create(properties?: Hit.IRC_PAY_RESULT): Hit.RC_PAY_RESULT;
        public static encode(message: Hit.IRC_PAY_RESULT, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: Hit.IRC_PAY_RESULT, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Hit.RC_PAY_RESULT;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Hit.RC_PAY_RESULT;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): Hit.RC_PAY_RESULT;
        public static toObject(message: Hit.RC_PAY_RESULT, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IShopList {
        items?: (Hit.IShopListItem[]|null);
    }

    class ShopList implements IShopList {
        constructor(properties?: Hit.IShopList);
        public items: Hit.IShopListItem[];
        public static create(properties?: Hit.IShopList): Hit.ShopList;
        public static encode(message: Hit.IShopList, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: Hit.IShopList, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Hit.ShopList;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Hit.ShopList;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): Hit.ShopList;
        public static toObject(message: Hit.ShopList, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IShopListItem {
        payId?: (number|null);
        payType?: (number|null);
        payCnt?: (number|null);
        itemId?: (number|null);
        itemCnt?: (number|null);
        name?: (string|null);
        desc?: (string|null);
        icon?: (string|null);
    }

    class ShopListItem implements IShopListItem {
        constructor(properties?: Hit.IShopListItem);
        public payId: number;
        public payType: number;
        public payCnt: number;
        public itemId: number;
        public itemCnt: number;
        public name: string;
        public desc: string;
        public icon: string;
        public static create(properties?: Hit.IShopListItem): Hit.ShopListItem;
        public static encode(message: Hit.IShopListItem, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: Hit.IShopListItem, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Hit.ShopListItem;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Hit.ShopListItem;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): Hit.ShopListItem;
        public static toObject(message: Hit.ShopListItem, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }
}
