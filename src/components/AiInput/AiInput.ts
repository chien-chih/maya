import {Component,ElementRef,Attribute,Input,Output,forwardRef,Provider} from 'angular2/core';
import {NgControl,ControlValueAccessor,NG_VALUE_ACCESSOR} from 'angular2/common';
import {CONST_EXPR} from 'angular2/src/facade/lang';


import {ObservableWrapper,EventEmitter} from 'angular2/src/facade/async';
import {AiControl} from '../AiControl/AiControl';
import {AiIcon} from '../AiIcon/AiIcon';


const CUSTOM_VALUE_ACCESSOR = CONST_EXPR(new Provider(
  NG_VALUE_ACCESSOR, {useExisting: forwardRef(() => AiInput), multi: true}));

//const CUSTOM_VALUE_ACCESSOR = new Provider(
  //  NG_VALUE_ACCESSOR, {useExisting: forwardRef(() => LabelsValueAccessor), multi: true});


@Component(AiControl.meta({
    templateUrl:'package:src/components/AiInput/AiInput.html',
    directives: [AiIcon],
    selector: 'ai-input',
    host: {
        '[class.focus]': 'isFocus',
        '[class.valued]': 'hasValue()',
        '[class.readonly]': 'readonly',
        '[class.ai-input-left]': 'isLeftExist()',
        '[class.ai-input-right]': 'isRightExist()'
    }
    ,providers: [CUSTOM_VALUE_ACCESSOR]
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
    cancel:boolean=false;

    @Input() 
    symbol:string='';

    @Input() 
    left:string='';

    @Input() 
    right:string='';

    @Input() 
    maxlength:number=255;

    @Input() 
    minlength:number=255;

    @Input() 
    readonly:boolean=false;

    @Input() 
    required:boolean=false;
    
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
        //, ngControl: NgControl
        //if(ngControl) {
           // this.ngControl.valueAccessor = this;
        //}
    }

    
    onChange = (_) => {};
    onTouched = () => {};
    writeValue(value: any): void {
        if(value) this.value=value;
    //    this.host.writeLabelsValue(value);
    }
    registerOnChange(fn: (_: any) => void): void { this.onChange = fn; }
    registerOnTouched(fn: () => void): void { this.onTouched = fn; }
  
    //writeValue(obj: any): void{ 
        //this.value=obj;
    //}
    //registerOnChange(fn: any): void{
  //      this.onChange = fn;
        
    //}
    //registerOnTouched(fn: any): void{
//        this.onTouched = fn;
        
    //}

    ngOnInit() {
        this.updateValue(null);
    }

    updateValue(event) {
        if(event) this.value = event.target.value.trim();
        if(this.cancel){
            if(this.value.length > 0)
                this.right='cancel';            
            else    
                this.right='';            
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

    getMaxLength(){
        return this.maxlength;
    }    

    getType(){
        return this.type;
    }    

    isReadonly(){
        return this.readonly ? 'true':null;
    }    
    
    isLeftExist(){
        return this.left.length > 0;
    }

    isRightExist(){
        return this.right.length > 0;
    }

    isSymbolExist(){
        return this.symbol.length > 0;
    }
 
    onLeftClick(){
        ObservableWrapper.callEmit(this._click_left, null);
    }

    onRightClick(){
        if(this.cancel){
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
  
   
 
  