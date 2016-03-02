import {Component,ElementRef,forwardRef,Provider} from 'angular2/core';
import {NG_VALUE_ACCESSOR} from 'angular2/common';
import {ObservableWrapper, EventEmitter} from 'angular2/src/facade/async';
import {AiFormControl} from '../AiFormControl/AiFormControl';
import {AiFormInput} from '../AiFormInput/AiFormInput';
import {AiTextarea} from '../AiTextarea/AiTextarea';

@Component(AiFormControl.meta({
        templateUrl:'package:src/components/AiFormTextarea/AiFormTextarea.html',
        directives: [AiTextarea],
        selector: 'ai-form-textarea',
        inputs: AiFormInput.inputs,
        host: AiFormInput.host,
        providers: [new Provider(NG_VALUE_ACCESSOR, {useExisting: forwardRef(() => AiFormTextarea), multi: true})]
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
  
