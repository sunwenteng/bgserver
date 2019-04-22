import * as fs from "fs";

export class Global {
    static config: any;
    static isAppValid: boolean = true;
    static playerInfoMysqlColumn = [];
    static allControllers = {};
    static allActions = {};

    static setConfig(path: string, bForce: boolean) {
        if (!bForce && Global.config) {
            return;
        }

        if (!fs.existsSync(path)) {
            throw new Error('path not found, path=' + path);
        }

        let content = fs.readFileSync(path);

        try {
            Global.config = JSON.parse(content.toString());
        }
        catch (e) {
            throw new Error(`config.json is not json format, content=${content.toString()}`);
        }
    }
}