import {Component,ElementRef,Renderer} from 'angular2/core';
import {AiControl} from '../AiControl/AiControl';

@Component(AiControl.meta({
    templateUrl:'package:src/components/AiCheckbox/AiCheckbox.html',
    selector: 'ai-checkbox',
    inputs:['value'],
    host:{
        '(click)':'toggle()',
        '[class.checked]': 'value',
    },
}))    
export class AiCheckbox extends AiControl{ 
    value:boolean=false; 
    
    constructor(ele: ElementRef) {  
        super(ele); 
    }
    toggle():void{
        if(!this.disabled)
            this.value=!this.value;
    }

} 
  
   
 
  