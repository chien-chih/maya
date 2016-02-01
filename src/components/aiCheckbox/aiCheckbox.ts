import {Component,ElementRef,Renderer} from 'angular2/core';
import {AiControl} from '../aiControl';

@Component(AiControl.meta({
    templateUrl:'package:src/components/aiCheckbox/aiCheckbox.html',
    selector: 'ai-checkbox',
    inputs:['value'],
    host:{
        '[class.checked]': 'value',
    },
}))    
export class AiCheckbox extends AiControl{ 
    value:boolean=false; 
    
    constructor(ele: ElementRef) {  
        super(ele); 
    }

    onClassNameRebuild(el:any){

        this.addClassName('ai-checkbox');
    }
    

    toggle():void{
        this.value=!this.value;
    }

} 
  
   
 
  