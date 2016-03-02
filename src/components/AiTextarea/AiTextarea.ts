import {Component,ElementRef,forwardRef,Provider,HostBinding} from 'angular2/core';
import {ControlValueAccessor,NG_VALUE_ACCESSOR} from 'angular2/common';
import {ObservableWrapper,EventEmitter} from 'angular2/src/facade/async';
import {AiControl} from '../AiControl/AiControl';
import {AiInput} from '../AiInput/AiInput';
import {AiIcon} from '../AiIcon/AiIcon';

@Component(AiControl.meta({
    templateUrl:'package:src/components/AiTextarea/AiTextarea.html',
    directives: [AiIcon],
    selector: 'ai-textarea',
    inputs: AiInput.inputs,
    outputs: AiInput.outputs,
    host: AiInput.host,
    providers: [new Provider(NG_VALUE_ACCESSOR, {useExisting: forwardRef(() => AiTextarea), multi: true})]
    },{
        ignoreActive:1,
        ignoreFocus:1,
        ignoreHover:1
    }))   
export class AiTextarea extends AiInput { 

    constructor(ele: ElementRef) {  
        super(ele); 

    }


} 
  
   
 
  