import {Service} from "typedi";

@Service(ResourceService.name)
export class ResourceService {
    test() {
        console.log('i am test of resourceService');
    }
}