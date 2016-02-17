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
  @CONST() static LEFT = 37;
  @CONST() static UP = 38;
  @CONST() static RIGHT = 39;
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
        meta.host['(touchstart)']='touchStart($event)';
        meta.host['(touchend)']='touchEnd($event)';
        meta.host['(mouseup)']='mouseUp($event)';
        meta.host['(mousedown)']='mouseDown($event)';
        meta.host['(mouseover)']='mouseOver()';
        meta.host['(mouseout)']='mouseOut()';
        meta.host['(keyup)']='keyUp($event)';
        meta.host['(keydown)']='keyDown($event)';
        meta.host['(focus)']='focus()';
        meta.host['(blur)']='blur()';
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
    
    protected onClick(){}
    protected onMouseOver() {}
    protected onMouseOut() {}
    protected onMouseDown(event: MouseEvent) {}
    protected onMouseUp(event: MouseEvent) {}
    protected onKeyDown(event: KeyboardEvent) {}
    protected onKeyUp(event: KeyboardEvent) {}
    protected onTouchStart(event) {}
    protected onTouchEnd(event) {}
    protected onFocus() {}
    protected onBlur() {}
    
    fireClickEvent(){
        if (!this.disabled && !this.isFire) {
            try{
                this.onClick();
                this.isFire=true;
                ObservableWrapper.callEmit(this.onclick, null);
            }finally{
                this.isFire=false;
            }
        }
    }

    mouseOver() {
        //console.log('mouseover');
        //need prevent ios/andorid send strange mouseover event
        if (!this.disabled && !AiControl.mobile) {
            this.onMouseOver();
            this.isHover = true;
        }
    }
    
    mouseOut() {
        this.isHover = false;
        this.isActive = false;
        if (!this.disabled && !AiControl.mobile) 
            this.onMouseOut();
    }
    
    mouseDown(event: MouseEvent) {
        //console.log('mousedown');
        if (!this.disabled && event.button==0) {
            this.onMouseDown(event);
            this.isActive = true;
        }
    }
    
    mouseUp(event: MouseEvent) {
        //console.log('mouseup');
        this.isActive = false;
        if (!this.disabled && event.button==0) {
            this.onMouseUp(event);
            this.fireClickEvent();
        }
    }
    
    
    keyDown(event: KeyboardEvent) {
        //fix ios bluetooth keycode bug
        this.keyCode=event.keyCode;
        if (!this.disabled) {
            this.onKeyDown(event);
            if(event.keyCode == KeyCodes.SPACE){
                this.isActive = true;
                //prevent press space jump to end
                event.preventDefault();
                event.stopPropagation();
            }
        }
    }
    
    keyUp(event: KeyboardEvent) {
        if (!this.disabled) {
            this.onKeyUp(event);
        }
        this.isActive = false;
        if (this.keyCode == KeyCodes.SPACE) 
            this.fireClickEvent();
    }
    
    touchStart(event) {
        //console.log('touchstart');
        if (!this.disabled) {
            this.onTouchStart(event);
            if(event.touches.length == 1)
                this.isActive = true;
        }
    }
    
    touchEnd(event) {
        //console.log('touchend');
        this.isActive = false;
         if (!this.disabled){
            this.onTouchEnd(event);
            this.fireClickEvent();
        }
        event.preventDefault();
    }

    focus() {
        //console.log('focus');
        if (!this.disabled){
            this.onFocus();
            this.isFocus = !this.isActive;
        }
    }
    
    blur() {
        if (!this.disabled)
            this.onBlur();
        this.isFocus = false;
    }

    
} 