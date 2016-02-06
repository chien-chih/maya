import {Component,ElementRef} from 'angular2/core';
//import {enableProdMode} from 'angular2/core';
//enableProdMode();

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

    constructor(protected ele: ElementRef) { 
    }



} 
  
document.addEventListener('DOMContentLoaded', function() {
    alert('hello');
    //debugger
    //document.body.setAttribute('mobile','a');
});
   
 
  