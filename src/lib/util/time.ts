import {RedisMgr, RedisType} from "../redis/redis_mgr";
import {DAY} from "../../app/game/modles/defines";

/**
 * 游戏可用的一些时间判断函数
 */

let offset = 0;

export async function sleep(time) {
    return new Promise<void>((resolve => {
        setTimeout(() => {
            resolve();
        }, time);
    }));
}

export function realNow(): number {
    return Math.floor(Date.now() / 1000);
}

export function gameNow(): number {
    return Math.floor(Date.now() / 1000) + offset;
}

export function getOffset(): number {
    return offset;
}

export function setOffset(os: number) {
    offset = os;
}

export function isSameDay(time1: number, time2: number): boolean {
    let d1 = new Date(time1 * 1000),
        d2 = new Date(time2 * 1000);
    return d1.getDate() === d2.getDate() && d1.getMonth() === d2.getMonth() && d1.getFullYear() === d2.getFullYear();
}

export function getDays(time1: number, time2: number): number {
    let d1 = new Date(time1 * 1000),
        d2 = new Date(time2 * 1000);

    d1.setHours(0, 0, 0, 0);
    d2.setHours(0, 0, 0, 0);
    return (d2.getTime() - d1.getTime()) / DAY;
}

export function getDayZeroTime(time: number): number {
    let d1 = new Date(time * 1000);
    d1.setHours(0, 0, 0, 0);
    return d1.getTime();
}

/**
 *
 * @param time1
 * @param time2
 * @param nFirstDayInWeek 0-6
 * @constructor
 */
export function isSameWeek(time1, time2, nFirstDayInWeek): boolean {
    let d1 = new Date(time1 * 1000),
        d2 = new Date(time2 * 1000),
        o1 = d1.getDay() - nFirstDayInWeek,
        o2 = d2.getDay() - nFirstDayInWeek;
    return (d1.getFullYear() === d2.getFullYear()) &&
        ((d1.getDay() + (o1 >= 0 ? -o1 : -7 - o1)) === (d2.getDay() + (o2 >= 0 ? -o2 : -7 - o2)));
}

export function isSameMonth(time1, time2): boolean {
    let d1 = new Date(time1 * 1000),
        d2 = new Date(time2 * 1000);
    return (d1.getFullYear() === d2.getFullYear()) && (d1.getMonth() === d2.getMonth());
}

export function isToday(time: number): boolean {
    let d1 = new Date(time * 1000), d2 = new Date();
    return d1.getDate() === d2.getDate() && d1.getMonth() === d2.getMonth() && d1.getFullYear() === d2.getFullYear();
}

export function isYesterday(time: number): boolean {
    return isToday(time + 86400);
}

export function getDaySeconds(time?: number): number {
    if (!time) {
        time = gameNow();
    }
    let date = new Date(time * 1000);
    return date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
}

// 适合主推类型的定时器判断
export class RoundCounter {
    private _interval: number;
    private _start: number;

    constructor(interval) {
        this._interval = interval;
        this._start = 0;
    }

    public setStart(now: number): void {
        this._start = now;
    }

    public getStart(): number {
        return this._start;
    }

    public roundCount(now: number): number {
        if (now <= this._start) {
            return 0;
        } else {
            let count = Math.floor((now - this._start) / this._interval);
            this._start += count * this._interval;
            return count;
        }
    }

    public leftSecondForCount(now: number, count: number): number {
        if (now <= this._start) {
            return count * this._interval;
        }
        return this._interval * count - (now - this._start) % this._interval;
    }
}

export class IntervalTimer {
    private _interval: number = 1;
    private _lastUpdate: number = 0;

    constructor(interval: number, start = 0) {
        this._interval = interval;
        this._lastUpdate = start;
    }

    public passed(now: number): boolean {
        return now >= this._lastUpdate + this._interval;
    }

    public update(now: number): void {
        this._lastUpdate = now;
    }
}

export class RaceTimer {
    private readonly _mutex: string;
    private _interval: number;
    private readonly _callback: Function;
    private _bFirstUpdate: boolean;
    private _timer: any;

    constructor(mutex: string, interval: number, callback: Function) {
        this._bFirstUpdate = true;
        this._mutex = mutex;
        this._interval = interval;
        if (!callback) {
            throw new Error('race timer callback should be valid');
        }
        this._callback = callback;
    }

    public async run() {
        if (this._bFirstUpdate) {
            this._bFirstUpdate = false;
            // Log.sInfo('start run raceTimer mutex=' + this._mutex);
            await this._callback();
            // Log.sInfo('end run raceTimer mutex=' + this._mutex);
        }

        let self = this;
        doUpdate();

        function doUpdate() {
            self._timer = setTimeout(() => {
                RedisMgr.getInstance(RedisType.GAME).lock(self._mutex, async (hasLock: boolean) => {
                    if (hasLock) {
                        // Log.sInfo('start run raceTimer mutex=' + self._mutex);
                        await self._callback();
                        // Log.sInfo('end run raceTimer mutex=' + self._mutex);
                    }
                }, false).then(doUpdate).catch((e) => {
                    console.error(e);
                    doUpdate();
                });
            }, self._interval);
        }
    }

    public stop() {
        clearTimeout(this._timer);
    }
}

export function refreshTime(target, curCntKey, curTimeKey, maxCnt, interval) {
    // Log.sInfo(`p: ${curCntKey}, ${curTimeKey}, ${maxCnt}, ${interval}`);
    if (!target[curCntKey]) {
        target[curCntKey] = 0;
    }

    if (!target[curTimeKey]) {
        target[curTimeKey] = 0;
    }

    let now = gameNow();
    if (target[curTimeKey] === 0) {
        target[curCntKey] = maxCnt;
        target[curTimeKey] = now + interval;
        // Log.sInfo(`a: ${target[curCntKey]}, ${target[curTimeKey]}, ${now}`);
    }

    if (now >= target[curTimeKey]) {
        let addCnt = Math.floor((now - target[curTimeKey]) / interval) + 1;
        target[curCntKey] = (target[curCntKey] + addCnt) > maxCnt ? maxCnt : (target[curCntKey] + addCnt);
        target[curTimeKey] = now + interval - (now - target[curTimeKey]) % interval;
        // Log.sInfo(`b: ${target[curCntKey]}, ${target[curTimeKey]}, ${addCnt}, ${now}`);
    }

    // Log.sInfo(`c: ${target[curCntKey]}, ${target[curTimeKey]}`);
}