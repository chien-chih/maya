import {Component,ElementRef,forwardRef,Provider,HostBinding} from 'angular2/core';
import {ControlValueAccessor,NG_VALUE_ACCESSOR} from 'angular2/common';
import {ObservableWrapper,EventEmitter} from 'angular2/src/facade/async';
import {AiControl} from '../AiControl/AiControl';
import {AiIcon} from '../AiIcon/AiIcon';
import {AiFormatter} from './AiFormatter';

@Component(AiControl.meta({
    templateUrl:'package:src/components/AiInput/AiInput.html',
    directives: [AiIcon],
    selector: 'ai-input',
    inputs: AiInput.inputs,
    outputs: AiInput.outputs,
    host: AiInput.host,
    providers: [new Provider(NG_VALUE_ACCESSOR, {useExisting: forwardRef(() => AiInput), multi: true})]
    },{
        ignoreActive:1,
        ignoreFocus:1,
        ignoreHover:1
    }))   
export class AiInput extends AiControl implements ControlValueAccessor{ 

    static inputs=['value','type','maxlength','readonly','cancel_button','symbol_icon','right_icon'];
    static outputs=['_click_right','_click_left','_focus_change','_value_change'];
    static host={
            '[class.formatted]': 'hasFormat()',
            '[class.focus]': 'isFocus',
            '[class.valued]': 'hasValue()',
            '[class.readonly]': 'readonly',
            '[class.ai-input-left]': 'hasLeftIcon()',
            '[class.ai-input-right]': 'hasRightIcon()'
        };

    private formatter:AiFormatter=null;

    _value: string=''; 
    
    type:string='text';

    maxlength:number=255;

    readonly:boolean=false;

    cancel_button:boolean=false;

    symbol_icon:string='';

    left_icon:string='';

    right_icon:string='';

    _click_right: EventEmitter<any>=new EventEmitter();

    _click_left: EventEmitter<any>=new EventEmitter();

    _focus_change: EventEmitter<any>=new EventEmitter();

    _value_change: EventEmitter<any>=new EventEmitter();

    constructor(ele: ElementRef) {  
        super(ele); 
        this.nativeElement.setAttribute('ai-input',''); 
        
        var numberInput=this.nativeElement.getAttribute('numberinput');
        if(numberInput != null) this.setNumberInput();
        var format=this.nativeElement.getAttribute('format');
        if(format){
            var nativeInput=this.nativeElement.childNodes[0];
            this.formatter=new AiFormatter(nativeInput,format);
            if(this.formatter.numberInput != null) this.setNumberInput();
            var that=this;
            this.formatter.onValueChange=function(value){
                that._value=value.trim();
                that.updateValue(null);
            };
        }

    }

    onChange = (_) => {};
    onTouched = () => {};
    registerOnChange(fn: (_: any) => void): void { this.onChange = fn; }
    registerOnTouched(fn: () => void): void { this.onTouched = fn; }

    writeValue(value: any): void {
        var that=this;
        setTimeout(function(){ 
            that.value=value?value:'';
        }, 1);
    }

    get value() {
        return this._value;
    }
    
    set value(v) {
        if(this.hasFormat()){
            this.formatter.setValue(v);
        }else
            this._value=v;
    }

    setNumberInput(){
        this.nativeElement.childNodes[0].setAttribute('pattern','\\d*');
    }
    
    hasFormat(){
        return this.formatter != null;
    }
    
    updateInput(){
        if(this.hasFormat()) return '';
        return this.value;
    }

    updateValue(event) {
        if(this.hasFormat() && event) return;
        if(event) this.value = event.target.value.trim();
        if(this.cancel_button){
            if(this.value.length > 0)
                this.right_icon='cancel';            
            else    
                this.right_icon='';            
        }
        this.onChange(this.value);
        ObservableWrapper.callEmit(this._value_change, this.value);
    }

    hasValue(){
        return this.value.length > 0;
    } 
    
    setHasFocus(hasFocus: boolean) {
        this.isFocus=hasFocus;
        ObservableWrapper.callEmit(this._focus_change,hasFocus);
    }

    getInputTabIndex(){
        if(this.readonly) return -1;
        return this.tabindex;
    }

    getMaxLength(){
        return this.maxlength;
    }    

    getType(){
        return this.type;
    }    

    isReadonly(){
        return this.readonly ? 'true':null;
    }    
    
    hasLeftIcon(){
        return this.left_icon.length > 0;
    }

    hasRightIcon(){
        return this.right_icon.length > 0;
    }

    hasSymbolIcon(){
        return this.symbol_icon.length > 0;
    }
 
    onLeftClick(){
        ObservableWrapper.callEmit(this._click_left, null);
    }
 
    onRightClick(){
        if(this.cancel_button){
            this.value='';
            this.updateValue(null);
            try{
                this.nativeElement.childNodes[0].focus();
            }catch(e){}
        }
        else
            ObservableWrapper.callEmit(this._click_right, null);
    }
 
} 
  
   
 
  