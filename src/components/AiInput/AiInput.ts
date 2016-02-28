import {Component,ElementRef} from 'angular2/core';
import {ObservableWrapper,EventEmitter} from 'angular2/src/facade/async';
import {AiControl} from '../AiControl/AiControl';

@Component(AiControl.meta({
    templateUrl:'package:src/components/AiInput/AiInput.html',
    selector: 'ai-input',
    inputs:['maxLength','type','readonly','value','left','right'],
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
    value: string=""; 
    maxLength:number=255;
    type:string='text';
    readonly:boolean=false;

    constructor(ele: ElementRef) {  
        super(ele); 
    }

    hasValue(){
        return this.value.length > 0;
    } 

    updateValue(event) {
        this.value = event.target.value;
    }
    
    setHasFocus(hasFocus: boolean) {
        this.isFocus=hasFocus;
    }

    getMaxLength(){
        return this.maxLength;
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
 
} 
  
   
 
  