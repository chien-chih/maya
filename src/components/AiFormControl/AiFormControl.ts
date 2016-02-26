import {ElementRef} from 'angular2/core';
import {AiControl} from '../AiControl/AiControl';

export class AiFormControl extends AiControl{
 
    label:string='';
    message:string='';
    word:string='';
    error:string='';
    icon:string='';
    
    //validation
    required:boolean=false;
    minLength:number=-1;
    
    static meta(meta:any,options?:any):any{
        meta=AiControl.meta(meta,options);
        meta.inputs.push('label');
        meta.inputs.push('message');
        meta.inputs.push('word');
        meta.inputs.push('error');
        meta.inputs.push('icon');
        meta.inputs.push('required');
        meta.inputs.push('minLength');
        meta.host['[class.icon]']='isIconExist()';
        meta.host['[class.required]']='required';
        meta.host['[class.error]']='isErrorExist()';
        return meta;
    }
    
    constructor(ele: ElementRef) {
        super(ele); 
        var el:any = this.ele.nativeElement;
        el.setAttribute('ai-form-control',''); 
    }  

    isLabelExist(){
        return this.label.length > 0;
    }

    isMessageExist(){
        return this.message.length > 0;
    }

    isWordExist(){
        return this.word.length > 0;
    }

    isIconExist(){
        return this.icon.length > 0;
    }

    isErrorExist(){
        return this.error.length > 0;
    }

    validate(text:string){
        this.error='';
        if(this.required && text.length==0) {
            this.error=this.label+' is required';
        }
        else if(this.minLength > 0 && text.length < this.minLength){
            this.error=this.label+' minimum length is '+this.minLength;
        }
        


    }    

}

