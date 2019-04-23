import {Service} from "typedi";

@Service()
export class ResourceService {
    test() {
        console.log('i am test of resourceService');
    }
}