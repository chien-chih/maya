import {Component,ElementRef,Input,Output,forwardRef,Provider} from 'angular2/core';
import {NG_VALUE_ACCESSOR} from 'angular2/common';
import {ObservableWrapper,EventEmitter} from 'angular2/src/facade/async';
import {AiFormControl} from '../AiFormControl/AiFormControl';
import {AiInput} from '../AiInput/AiInput';

@Component(AiFormControl.meta({
        templateUrl:'package:src/components/AiFormInput/AiFormInput.html',
        directives: [AiInput],
        selector: 'ai-form-input',
        host: {
            '[class.focus]': 'isFocus',
            '[class.readonly]': 'readonly',
        },
        providers: [new Provider(NG_VALUE_ACCESSOR, {useExisting: forwardRef(() => AiFormInput), multi: true})]
    },{
        ignoreActive:1,
        ignoreFocus:1,
        ignoreHover:1
    }
))    
export class AiFormInput extends AiFormControl { 

    @Input() 
    type:string='text';

    @Input()  
    max_length:number=255;

    @Input()  
    min_length:number=0;

    @Input() 
    readonly:boolean=false;

    @Input() 
    counter:boolean=false;

    @Input() 
    validated:boolean=false;

    constructor(ele: ElementRef) { 
        super(ele);
    }

    updateValue(value:any) {
        if(this.counter && value)
            this.word= value.length + "/" + this.max_length;
        super.updateValue(value);
    }

    validate(text:string):boolean{
        if(super.validate(text)){
            
            if(this.min_length > 0 && text.length < this.min_length){
                this.error=this.label+' minimum length is '+this.min_length;
                return false;
            }
        }
        return true;
    }    

    setHasFocus(hasFocus: boolean) {
        this.isFocus=hasFocus;
        if(!hasFocus)
            this.validate(this.value);
    }

    getMaxLength(){
        return this.max_length;
    }    

    getType(){
        return this.type;
    }    

    isReadonly(){
        return this.readonly ? 'true':null;
    }    

    getSymbolIcon(){
        
        if(this.hasError())
            return "error";
        else if (this.validated)
            return "done";
        
        return '';
    }


} 
  
