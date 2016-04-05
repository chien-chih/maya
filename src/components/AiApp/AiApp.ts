
import {Component,ElementRef} from 'angular2/core';
import { Type } from 'angular2/src/facade/lang';
import {bootstrap}    from 'angular2/platform/browser';
//import {enableProdMode} from 'angular2/core';
//enableProdMode();
import {UiService} from '../UiService';

@Component({
    template:'',
    selector: 'ai-app',
})    
export class AiApp{ 

    static boot(appComponentType: Type, customProviders?: Array<any>){
        if(!customProviders) customProviders=[];         
        customProviders.push(UiService);

        bootstrap(appComponentType,customProviders);  
    }

    static meta = function (meta:any):any{
        return meta;
    }

    constructor(protected ele: ElementRef) { 
    }



} 



 
  