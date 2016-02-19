import {ElementRef,OnChanges} from 'angular2/core';
import {AiControl} from '../AiControl/AiControl';
import {EventEmitter} from 'angular2/src/facade/async';

 
export class AiToggle extends AiControl { 

    /** Whether this toggle is checked. */
    checked: boolean=false;

    /** Value assigned to this toggle. May Used to assign the value to the parent Group. */
    value:any;

    onchange:EventEmitter<any>=new EventEmitter();

    static meta(meta:any):any{
        meta=AiControl.meta(meta);
        meta.inputs.push('value');
        meta.inputs.push('checked');
        meta.outputs.push('onchange');
        meta.host['[class.checked]']='checked';
        return meta;
    }

    constructor(ele: ElementRef) {
        super(ele); 
        var el:any = this.ele.nativeElement;
        el.setAttribute('ai-toggle',''); 
    }  

    toggle():void{
        if(!this.disabled){
            this.checked=!this.checked;
        }
    }

    
} 