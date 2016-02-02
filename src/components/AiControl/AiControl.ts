import {ElementRef} from 'angular2/core';
//import * as utils from 'ai/components/utils';
//import {StringChain} from './utils';
//import {Reflector} from 'angular2/src/core/reflection/reflector';
//import {TimerWrapper} from 'angular2/src/facade/async';
//import {NgClass} from 'angular2/common';

    //directives: [NgClass],
    //host: {
    //  '[attr.disabled]': 'disabled?"disabled":null',
    //},


export class AiControl { 
    //private _classChain:StringChain;  
    //_className : string;
    disabled:boolean;
    color:string;
    size:string;

    static meta = function (meta:any):any{
        if(!meta.inputs) meta.inputs=[];
        meta.inputs.push('disabled');
        if(!meta.host) meta.host={};
        meta.host['[attr.disabled]']='disabled?"disabled":null';
        meta.host['[class.red]']='color==="red"';
        meta.host['[class.yellow]']='color==="yellow"';
        meta.host['[class.green]']='color==="green"';
        meta.host['[class.large]']='size==="large"';
        meta.host['[class.small]']='size==="small"';

        return meta;
    }

    constructor(protected ele: ElementRef) {
        var el:any = this.ele.nativeElement;
        this.color=el.getAttribute('color'); 
        this.size=el.getAttribute('size'); 
    }  

        //Reflect.getMetadata('annotations', ComponentClass);
        //Reflect.defineMetadata("service", { serviceName: name }, target);
        //this.rebuildClassName();  
/*
    rebuildClassName(){
        
        this._classChain=new StringChain('');
        this.onClassNameRebuild(el);

        this.addClassName(el.getAttribute('size')); 
        this.addClassName(el.getAttribute('color')); 
        if(el.getAttribute('primary')!=null) this.addClassName('primary')
        if(this.disabled) this.addClassName('disabled');

        this._className=this._classChain.toString();
        this._classChain=null;
    }
    onClassNameRebuild(el:any){}
    addClassName(name:string){
        this._classChain.add(name);
    }

    get disabled(): boolean {
        return this._disabled;
    }
	
    set disabled(v: boolean) {
        this._disabled = v;
        this.rebuildClassName();
    }
*/
    
} 