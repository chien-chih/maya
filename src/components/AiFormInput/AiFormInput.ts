import {Component,ElementRef,forwardRef,Provider} from 'angular2/core';
import {NG_VALUE_ACCESSOR} from 'angular2/common';
import {ObservableWrapper,EventEmitter} from 'angular2/src/facade/async';
import {AiFormControl} from '../AiFormControl/AiFormControl';
import {AiInput} from '../AiInput/AiInput';

@Component(AiFormControl.meta({
        templateUrl:'package:src/components/AiFormInput/AiFormInput.html',
        directives: [AiInput],
        selector: 'ai-form-input',
        inputs: AiFormInput.inputs,
        host: AiFormInput.host,
        providers: [new Provider(NG_VALUE_ACCESSOR, {useExisting: forwardRef(() => AiFormInput), multi: true})]
    },{
        ignoreActive:1,
        ignoreFocus:1,
        ignoreHover:1
    }
))    
export class AiFormInput extends AiFormControl { 

    static inputs=['type','maxlength','min_length','readonly','counter','validated'];
    static host={
            '[class.focus]': 'isFocus',
            '[class.readonly]': 'readonly',
        };
    private matcher:any;

    type:string='text';

    max_length:number=255;

    min_length:number=0;

    readonly:boolean=false;

    counter:boolean=false;

    validated:boolean=false;

    constructor(ele: ElementRef) { 
        super(ele);
        this.nativeElement.setAttribute('ai-form-input',''); 
            
    }
    
    ngOnInit() {
    
        this.inhieritAttributesToChilds(0);
        var child=this.nativeElement.childNodes[0];
        if(this.nativeElement.getAttribute('round') != null)
            child.setAttribute('round','');
        else if(this.nativeElement.getAttribute('ellipse') != null)
            child.setAttribute('ellipse','');
        else if(this.nativeElement.getAttribute('none') != null)
            child.setAttribute('none','');
        else if(this.nativeElement.getAttribute('rect') != null)
            child.setAttribute('rect','');
        else 
            child.setAttribute('line','');

        var match=this.nativeElement.getAttribute('match');
        if(match != null){
            this.matcher=new RegExp(match);
        }
            
        var format=this.nativeElement.getAttribute('format');
        if(format != null)
            child.setAttribute('format',format);

        var numberInput=this.nativeElement.getAttribute('numberinput');
        if(numberInput != null) 
            child.setAttribute('numberinput','');
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
            
            if(this.matcher && !this.matcher.test(text)){
                this.error=this.label+' is not valid format ';
                return false;
            }
        }
        return true;
    }    

    setHasFocus(hasFocus: boolean) {
        this.isFocus=hasFocus;
        if(!hasFocus && this.value != null){
            this.validate(this.value);
        }
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
  
