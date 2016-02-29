import {Component,ElementRef,Attribute} from 'angular2/core';
import {ObservableWrapper,EventEmitter} from 'angular2/src/facade/async';
import {AiControl} from '../AiControl/AiControl';
import {AiIcon} from '../AiIcon/AiIcon';

@Component(AiControl.meta({
    templateUrl:'package:src/components/AiInput/AiInput.html',
    directives: [AiIcon],
    selector: 'ai-input',
    inputs:['maxlength','readonly','value'],
    outputs:['onclickleft','onclickright','onfocuschange','onvalue'],
    host: {
        '[class.focus]': 'isFocus',
        '[class.valued]': 'hasValue()',
        '[class.readonly]': 'readonly',
        '[class.ai-input-left]': 'isLeftExist()',
        '[class.ai-input-right]': 'isRightExist()'
    }
    },{
        ignoreActive:1,
        ignoreFocus:1,
        ignoreHover:1
    }))    
export class AiInput extends AiControl{ 
    left:string='';
    right:string='';
    value: string=''; 
    maxlength:number=255;
    type:string='text';
    readonly:boolean=false;
    cancel:boolean=false;
    onclickright: EventEmitter<any>=new EventEmitter();
    onclickleft: EventEmitter<any>=new EventEmitter();
    onfocuschange: EventEmitter<any>=new EventEmitter();
    onvalue: EventEmitter<any>=new EventEmitter();

    constructor(ele: ElementRef,
        @Attribute("cancel") cancel,
        @Attribute("type") type,
        @Attribute("left") left,
        @Attribute("right") right
        ) {  
        super(ele); 
        if(type != null) this.type = type;
        if(left != null) this.left = left;
        if(right != null) this.right = right;
        
        if(cancel != null){
            this.cancel = true;
            this.updateCancelIcon();
        }
    }

    updateCancelIcon(){
        if(this.cancel){
            if(this.value.length > 0)
                this.right='cancel';            
            else    
                this.right='';            
        }
    }

    ngOnChanges(_) {
        this.updateCancelIcon();
    }

    hasValue(){
        return this.value.length > 0;
    } 

    updateValue(event) {
        if(event) this.value = event.target.value;
        this.updateCancelIcon();
        ObservableWrapper.callEmit(this.onvalue, this.value);
    }
    
    setHasFocus(hasFocus: boolean) {
        this.isFocus=hasFocus;
        ObservableWrapper.callEmit(this.onfocuschange,hasFocus);
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
 
    onLeftClick(){
        ObservableWrapper.callEmit(this.onclickleft, null);
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
            ObservableWrapper.callEmit(this.onclickright, null);
    }
 
} 
  
   
 
  