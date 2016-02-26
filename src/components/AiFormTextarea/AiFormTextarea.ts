import {Component,ElementRef,Attribute} from 'angular2/core';
import {ObservableWrapper, EventEmitter} from 'angular2/src/facade/async';
import {AiFormControl} from '../AiFormControl/AiFormControl';
import {AiFormInput} from '../AiFormInput/AiFormInput';

@Component(AiFormControl.meta({
        templateUrl:'package:src/components/AiFormTextarea/AiFormTextarea.html',
        selector: 'ai-form-textarea',
        inputs:['showCounter','maxLength','readonly','value'],
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
export class AiFormTextarea extends AiFormInput { 

    constructor(ele: ElementRef) { 
        super(ele);
    }
} 
  
