import {Component,ElementRef} from 'angular2/core';
import {ObservableWrapper,EventEmitter} from 'angular2/src/facade/async';
import {AiControl} from '../AiControl/AiControl';

@Component(AiControl.meta({
    templateUrl:'package:src/components/AiCheckbox/AiCheckbox.html',
    selector: 'ai-checkbox',
    inputs:['value'],
    outputs:['onchange'],
    host:{
        //'(click)':'toggle()',
        '[class.checked]': 'value',
    },
}))    
export class AiCheckbox extends AiControl{ 
    value:boolean=false; 
    onchange: EventEmitter<any>=new EventEmitter();

    constructor(ele: ElementRef) {  
        super(ele); 
    }
    
    onClick(){
        this.toggle();
    }
    
    toggle():void{
        if(!this.disabled)
            this.value=!this.value;
    }

} 
  
   
 
  