import "reflect-metadata";
import {Container, Inject, Service} from "typedi";

@Service()
class BeanFactory {
    create() {
    }
}

@Service()
class SugarFactory {
    create() {
    }
}

@Service()
class WaterFactory {
    constructor() {
        console.log(1);
    }

    create() {
    }
}

class CoffeeMaker {

    @Inject()
    beanFactory: BeanFactory;

    @Inject()
    sugarFactory: SugarFactory;

    @Inject()
    waterFactory: WaterFactory;

    make() {
        this.beanFactory.create();
        this.sugarFactory.create();
        this.waterFactory.create();
    }

}