import {Component,ElementRef,Attribute} from 'angular2/core';
import {ObservableWrapper, EventEmitter} from 'angular2/src/facade/async';
import {AiSection} from '../AiSection/AiSection';

@Component(AiSection.meta({
        templateUrl:'package:src/components/AiInput/AiInput.html',
        selector: 'ai-input',
        inputs:['showCounter','maxLength'],
        host: {
            '[class.focus]': 'isFocus',
            '[class.valued]': 'hasValue()',
        },       
    },{
        ignoreActive:1,
        ignoreFocus:1,
        ignoreHover:1
    }
))    
export class AiInput extends AiSection { 
    textareaMode:boolean=false;
    value: string; 
    showCounter:boolean=false;
    maxLength:number=255;

    // Events emitted by this directive. We use these special 'md-' events to communicate
    // to the parent MdInputContainer.
    //mdChange: EventEmitter<any>;
    //mdFocusChange: EventEmitter<any>;
  
    constructor(ele: ElementRef,@Attribute('textarea') textarea: string,@Attribute('value') value: string) { 
        super(ele);
        if(textarea != null) this.textareaMode=true;
        this.value = value == null ? '' : value;
    }

    hasValue(){
        return this.value.length > 0;
    }

    ngOnChanges(_) {
        this.updateCounter();
    }
    updateValue(event) {
        this.value = event.target.value;
        this.updateCounter();
        this.error='';
    }
    
    updateCounter(){
        if(this.showCounter){
            this.word= this.value.length + "/" + this.maxLength;
        }
    }
    
    setHasFocus(hasFocus: boolean) {
        this.isFocus=hasFocus;
    }

    getMaxLength(){
        return this.maxLength;
    }    

} 
  
