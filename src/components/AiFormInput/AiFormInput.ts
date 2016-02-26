import {Component,ElementRef,Attribute} from 'angular2/core';
import {ObservableWrapper, EventEmitter} from 'angular2/src/facade/async';
import {AiFormControl} from '../AiFormControl/AiFormControl';

@Component(AiFormControl.meta({
        templateUrl:'package:src/components/AiFormInput/AiFormInput.html',
        selector: 'ai-form-input',
        inputs:['showCounter','maxLength','type','readonly','value'],
        host: {
            '[class.focus]': 'isFocus',
            '[class.valued]': 'hasValue()',
            '[class.readonly]': 'readonly',
        },       
    },{
        ignoreActive:1,
        ignoreFocus:1,
        ignoreHover:1
    }
))    
export class AiFormInput extends AiFormControl { 
    //textareaMode:boolean=false;
    value: string=""; 
    showCounter:boolean=false;
    maxLength:number=255;
    type:string='text';
    readonly:boolean=false;

    // Events emitted by this directive. We use these special 'md-' events to communicate
    // to the parent MdInputContainer.
    //mdChange: EventEmitter<any>;
    //mdFocusChange: EventEmitter<any>;
  
    constructor(ele: ElementRef) { 
        super(ele);
        var el:any = this.ele.nativeElement;
        el.setAttribute('ai-form-input',''); 
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
        if(!hasFocus)
            this.validate(this.value);
    }

    getMaxLength(){
        return this.maxLength;
    }    

    getType(){
        return this.type;
    }    

    isReadonly(){
        return this.readonly ? 'true':null;
    }    

} 
  
