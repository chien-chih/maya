import {Component,ElementRef} from 'angular2/core';
import {ObservableWrapper,EventEmitter} from 'angular2/src/facade/async';
import {AiToggle} from '../AiToggle/AiToggle';

@Component(AiToggle.meta({
    templateUrl:'package:src/components/AiCheck/AiCheck.html',
    selector: 'ai-check',
    inputs:['up','down'],
}))    
export class AiCheck extends AiToggle{ 

    value:boolean=false; 
    up:string='check_box_outline_blank';
    down:string='check_box';

    constructor(ele: ElementRef) {  
        super(ele); 
    }


    onClick(){
        this.toggle();
    }
    
    get icon(): string {
        if(this.checked) return this.down;
        return this.up;
    }

} 
  
   
 
  