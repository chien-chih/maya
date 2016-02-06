import {ElementRef,Attribute} from 'angular2/core';
import {TimerWrapper} from 'angular2/src/facade/async';
//import {isPresent} from 'angular2/src/facade/lang';
import {KeyboardEvent,MouseEvent} from 'angular2/src/facade/browser';
import {NumberWrapper} from 'angular2/src/facade/lang';
import {CONST} from 'angular2/src/facade/lang';
import {ObservableWrapper,EventEmitter} from 'angular2/src/facade/async';
//import * as utils from 'ai/components/utils';
//import {StringChain} from './utils';
//import {Reflector} from 'angular2/src/core/reflection/reflector';
//import {NgClass} from 'angular2/common';

    //directives: [NgClass],
    //host: {
    //  '[attr.disabled]': 'disabled?"disabled":null',
    //},
@CONST()
export class KeyCodes {
  @CONST() static ESCAPE = 27;
  @CONST() static ENTER = 13;
  @CONST() static SPACE = 32;
  @CONST() static UP = 38;
  @CONST() static DOWN = 40;
}

export class AiControl { 
    tabindex: number=0;
    disabled:boolean=false;
    isFocus: boolean = false;
    isActive: boolean = false;
    isHover: boolean = false;
    isFire:boolean=false;
    keyCode:number=0;
    
    static mobile:boolean=AiControl.init();
    static init():boolean{
        var userAgent = navigator.userAgent;
        var mobile = !!userAgent && /iPad|iPhone|Android/.test(userAgent);
        document.body.setAttribute(mobile?'mobile':'desktop','');
        return mobile;
    }

    onclick: EventEmitter<any>=new EventEmitter();
    
    static meta(meta:any):any{
        if(!meta.inputs) meta.inputs=[];
        meta.inputs.push('disabled');

        if(!meta.outputs) meta.outputs=[];
        meta.outputs.push('onclick');
        
        if(!meta.host) meta.host={};
        meta.host['[class.disabled]']='disabled';
        meta.host['[class.focus]']='isFocus';
        meta.host['[class.active]']='isActive';
        meta.host['[class.hover]']='isHover';
        meta.host['(touchstart)']='onTouchstart($event)';
        meta.host['(touchend)']='onTouchend($event)';
        meta.host['(mouseup)']='onMouseup($event)';
        meta.host['(mousedown)']='onMousedown($event)';
        meta.host['(mouseover)']='onMouseover()';
        meta.host['(mouseout)']='onMouseout()';
        meta.host['(keyup)']='onKeyup($event)';
        meta.host['(keydown)']='onKeydown($event)';
        meta.host['(focus)']='onFocus()';
        meta.host['(blur)']='onBlur()';
        meta.host['[tabindex]']='getTabIndex()';
        return meta;
    }

    enableMaterial(){
        this.ele.nativeElement.setAttribute('ai-material','');
    }

    constructor(protected ele: ElementRef) {
        
        var el:any = this.ele.nativeElement;
        el.setAttribute('ai-control','');
        
        var tabindex = el.getAttribute('tabindex');
        if(tabindex) this.tabindex = NumberWrapper.parseInt(tabindex, 10);

        if(el.getAttribute('disabled'))
            this.disabled = true;
    }  

    getTabIndex(){
        if(this.disabled) return -1;
        return this.tabindex;
    }
    
    protected onClick(){
        
    }
    
    fireClickEvent(){
        if (!this.disabled && !this.isFire) {
            try{
                this.isFire=true;
                this.onClick();
                ObservableWrapper.callEmit(this.onclick, null);
            }finally{
                this.isFire=false;
            }
        }
    }

    onMouseover() {
        //console.log('mouseover');
        //need prevent ios/andorid send strange mouseover event
        if (!this.disabled && !AiControl.mobile) this.isHover = true;
    }
    
    onMouseout() {
        this.isHover = false;
        this.isActive = false;
    }
    
    onMousedown(event: MouseEvent) {
        //console.log('mousedown');
        if (!this.disabled && event.button==0) {
            this.isActive = true;
        }
    }
    
    onMouseup(event: MouseEvent) {
        //console.log('mouseup');
        this.isActive = false;
        if (event.button==0) {
            this.fireClickEvent();
        }
    }
    
    
    onKeydown(event: KeyboardEvent) {
        //fix ios bluetooth keycode bug
        this.keyCode=event.keyCode;
        
        if (!this.disabled && event.keyCode == KeyCodes.SPACE) {
            this.isActive = true;
            //prevent press space jump to end
            event.preventDefault();
            event.stopPropagation();
        }
    }
    
    onKeyup(event: KeyboardEvent) {
        this.isActive = false;
        if (this.keyCode == KeyCodes.SPACE) 
            this.fireClickEvent();
    }
    
    onTouchstart(event) {
        //console.log('touchstart');
        if (!this.disabled && event.touches.length == 1) {
            this.isActive = true;
        }
    }
    
    onTouchend(event) {
        //console.log('touchend');
        this.isActive = false;
         if (!this.disabled){
            this.fireClickEvent();
        }
        event.preventDefault();
    }

    onFocus() {
        //console.log('focus');
        if (!this.disabled){
            this.isFocus = !this.isActive;
        }
    }
    
    onBlur() {
        this.isFocus = false;
    }

    
} 