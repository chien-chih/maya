import {Component,ElementRef,Renderer} from 'angular2/core';

@Component({
    template:'',
    selector: 'ai-app',
})    
export class AiApp{ 

    static meta = function (meta:any):any{
        //if(!meta.directives) meta.directives=[];
        //meta.directives.push(AiApp);
        //meta.inputs.push('AiApp');
        return meta;
    }

    constructor(ele: ElementRef) { 
        debugger
    }

} 
  
   
 
  