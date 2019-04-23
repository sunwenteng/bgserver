import {Get, JsonController} from "routing-controllers";
import * as uuid from 'uuid';

@JsonController('/test')
export class TestController {
    @Get('/uuid')
    uuid() {
        return uuid.v1();
    }

    @Get()
    hello() {
        return 'hello';
    }
}