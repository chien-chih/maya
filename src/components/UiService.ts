import {Injectable,DynamicComponentLoader} from 'angular2/core';

@Injectable()
export class UiService { 

    constructor(componentLoader:DynamicComponentLoader){
    } 

    getHello():string{
        return "hello";
    }

}    