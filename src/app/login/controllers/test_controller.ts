import {Body, Get, JsonController, Post, Req} from "routing-controllers";
import {CS_LOGIN, SC_LOGIN} from "../dto/login";

@JsonController('/test')
export class TestController {
    @Post('/uuid')
    async uuid(@Body() packet: CS_LOGIN, @Req() req) {
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