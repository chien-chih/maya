import {Component,ElementRef,Input,Output} from 'angular2/core';
import {ControlValueAccessor} from 'angular2/common';
import {ObservableWrapper,EventEmitter} from 'angular2/src/facade/async';
import {AiControl} from '../AiControl/AiControl';

export class AiFormControl extends AiControl implements ControlValueAccessor{
    value:any=null;
    label:string=''; 
    message:string='';
    word:string='';
    error:string='';
    icon:string='';
    
    //validation
    required:boolean=false;

    @Output()
    _value_change: EventEmitter<any>=new EventEmitter();

    static meta(meta:any,options?:any):any{
        meta=AiControl.meta(meta,options);
        meta.inputs.push('value');
        meta.inputs.push('label');
        meta.inputs.push('message');
        meta.inputs.push('word');
        meta.inputs.push('error');
        meta.inputs.push('icon');
        meta.inputs.push('required');
        meta.host['[class.valued]']='hasValue()';
        meta.host['[class.icon]']='hasIcon()';
        meta.host['[class.required]']='required';
        meta.host['[class.error]']='hasError()';
        return meta;
    }
    
    constructor(ele: ElementRef) {
        super(ele); 
        this.nativeElement.setAttribute('ai-form-control',''); 
    }  

    onChange = (_) => {};
    onTouched = () => {};
    registerOnChange(fn: (_: any) => void): void { this.onChange = fn; }
    registerOnTouched(fn: () => void): void { this.onTouched = fn; }

    writeValue(value: any): void {
        if(value) this.value=value;
    }

    updateValue(value:any) {
        this.error='';
        this.value = value;
        this.onChange(this.value);
        ObservableWrapper.callEmit(this._value_change, this.value);
    }

    hasValue(){
        return this.value != null && this.value.length > 0;
    } 


    hasLabel(){
        return this.label.length > 0;
    }

    hasMessage(){
        return this.message.length > 0;
    }

    hasWord(){
        return this.word.length > 0;
    }

    hasIcon(){
        return this.icon.length > 0;
    }

    hasError(){
        return this.error.length > 0;
    }

    validate(text:string):boolean{
        this.error='';
        if(this.required && text.length==0) {
            this.error=this.label+' is required';
            return false;
        }
        return true;
    }    
 
}

 