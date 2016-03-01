import {Component,ElementRef} from 'angular2/core';
import {ObservableWrapper,EventEmitter} from 'angular2/src/facade/async';
import {AiToggle} from '../AiToggle/AiToggle';

@Component(AiToggle.meta({
    templateUrl:'package:src/components/AiCheckbox/AiCheckbox.html',
    selector: 'ai-checkbox'
}))    
export class AiCheckbox extends AiToggle{ 

    constructor(ele: ElementRef) {  
        super(ele); 
    }
    
    onClick(){
        this.toggle();
    }
    
}   
  
   
 
  