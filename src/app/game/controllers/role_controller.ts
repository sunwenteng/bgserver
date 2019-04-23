import {Controller} from "routing-controllers";
import {Inject} from "typedi";
import {ResourceService} from "../services/resource_service";

@Controller()
export class RoleController {

    @Inject()
    resourceServer: ResourceService;
}