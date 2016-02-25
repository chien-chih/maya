import {ElementRef} from 'angular2/core';
import {AiControl} from '../AiControl/AiControl';

export class AiSection extends AiControl{
 
    label:string;
    message:string;
    word:string;
    error:string;
    
    static meta(meta:any,options?:any):any{
        meta=AiControl.meta(meta,options);
        meta.inputs.push('label');
        meta.inputs.push('message');
        meta.inputs.push('word');
        meta.inputs.push('error');
        //meta.host['[class.]']='isLabelExist()';
        return meta;
    }
    
    constructor(ele: ElementRef) {
        super(ele); 
        var el:any = this.ele.nativeElement;
        el.setAttribute('ai-section',''); 
    }  

    isLabelExist(){
        return this.label != null && this.label.length > 0;
    }

    isMessageExist(){
        return this.message != null && this.message.length > 0;
    }

    isWordExist(){
        return this.word != null && this.word.length > 0;
    }

    isErrorExist(){
        return this.error != null && this.error.length > 0;
    }

}

