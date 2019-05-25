import {Body, Get, JsonController, Post, Req, Session} from "routing-controllers";
import * as uuid from 'uuid';
import {CS_LOGIN, SC_LOGIN} from "../dto/login";

@JsonController('/test')
export class TestController {
    @Post('/uuid')
    async uuid(@Body() packet: CS_LOGIN, @Session() session: Express.Session, @Req() req) {
        console.log(packet.passport);
        let pck = new SC_LOGIN();
        pck.gmAuth = 1;
        pck.isNew = 0;
        pck.serverId = 1;
        return pck;
    }

    @Get()
    hello() {
        return 'hello';
    }
}