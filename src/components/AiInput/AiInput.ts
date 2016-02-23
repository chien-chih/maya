import {Component,ElementRef,Attribute} from 'angular2/core';
//import {NgIf} from 'angular2/angular2';
import {ObservableWrapper, EventEmitter} from 'angular2/src/facade/async';
import {AiControl} from '../AiControl/AiControl';

@Component(AiControl.meta({
        templateUrl:'package:src/components/AiInput/AiInput.html',
        selector: 'ai-input',
        inputs: [],
        host: {
            '[class.focus]': 'isFocus',
        },       
    },{
        ignoreActive:1,
        ignoreFocus:1,
        ignoreHover:1
    }
))    
export class AiInput extends AiControl { 
    textareaMode:boolean=false;
    value: string; 

    // Events emitted by this directive. We use these special 'md-' events to communicate
    // to the parent MdInputContainer.
    //mdChange: EventEmitter<any>;
    //mdFocusChange: EventEmitter<any>;
  
    constructor(ele: ElementRef,@Attribute('textarea') textarea: string,@Attribute('value') value: string) { 
        super(ele);
        if(textarea != null) this.textareaMode=true;
        this.value = value == null ? '' : value;
    }

    updateValue(event) {
        this.value = event.target.value;
    }
    
    setHasFocus(hasFocus: boolean) {
        this.isFocus=hasFocus;
    }
} 
  
