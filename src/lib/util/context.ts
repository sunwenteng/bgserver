import {Container} from "typedi";

export function getBean(controller): Function {
    if (!controller) {
        return null;
    }
    if (!Container.has(controller.name)) {
        Container.set(controller.name, new controller());
    }
    return Container.get(controller.name);
}