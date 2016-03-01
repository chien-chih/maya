import {Component,ElementRef,Input,Output,forwardRef,Provider,HostBinding} from 'angular2/core';
import {ControlValueAccessor,NG_VALUE_ACCESSOR} from 'angular2/common';
import {ObservableWrapper,EventEmitter} from 'angular2/src/facade/async';
import {AiControl} from '../AiControl/AiControl';
import {AiIcon} from '../AiIcon/AiIcon';

@Component(AiControl.meta({
    templateUrl:'package:src/components/AiInput/AiInput.html',
    directives: [AiIcon],
    selector: 'ai-input',
    host: {
        '[class.focus]': 'isFocus',
        '[class.valued]': 'hasValue()',
        '[class.readonly]': 'readonly',
        '[class.ai-input-left]': 'hasLeftIcon()',
        '[class.ai-input-right]': 'hasRightIcon()'
    }
    ,providers: [new Provider(NG_VALUE_ACCESSOR, {useExisting: forwardRef(() => AiInput), multi: true})]
    },{
        ignoreActive:1,
        ignoreFocus:1,
        ignoreHover:1
    }))    
export class AiInput extends AiControl implements ControlValueAccessor{ 
    @Input() 
    value: string=''; 
    
    @Input() 
    type:string='text';

    @Input() 
    maxlength:number=255;

    @Input() 
    readonly:boolean=false;

    @Input() 
    cancel_button:boolean=false;

    @Input() 
    symbol_icon:string='';

    @Input() 
    left_icon:string='';

    @Input() 
    right_icon:string='';

    @Output()
    _click_right: EventEmitter<any>=new EventEmitter();

    @Output()
    _click_left: EventEmitter<any>=new EventEmitter();

    @Output()
    _focus_change: EventEmitter<any>=new EventEmitter();

    @Output()
    _value_change: EventEmitter<any>=new EventEmitter();

    constructor(ele: ElementRef) {  
        super(ele); 
    }

    onChange = (_) => {};
    onTouched = () => {};
    registerOnChange(fn: (_: any) => void): void { this.onChange = fn; }
    registerOnTouched(fn: () => void): void { this.onTouched = fn; }
    writeValue(value: any): void {
        this.value=value?value:'';
        
    }
  
    ngOnInit() {
        this.updateValue(null);
    }

    updateValue(event) {
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
        return this.value && this.value.length > 0;
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
  
   
 
  