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
    
    onclick: EventEmitter<any>=new EventEmitter();
    
    static meta = function (meta:any):any{
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
        if (!this.disabled) {
            this.onClick();
            ObservableWrapper.callEmit(this.onclick, null);
        }
    }

    onMouseover() {
        if (!this.disabled) this.isHover = true;
    }
    
    onMouseout() {
        this.isHover = false;
        this.isActive = false;
    }
    
    onMousedown(event: MouseEvent) {
        if (!this.disabled && event.button==0) {
            this.isActive = true;
        }
    }
    
    onMouseup(event: MouseEvent) {
        this.isActive = false;
        if (event.button==0) this.fireClickEvent();
    }
    
    
    onKeydown(event: KeyboardEvent) {
        if (!this.disabled && event.keyCode == KeyCodes.SPACE || event.keyCode == KeyCodes.ENTER) {
            this.isActive = true;
        }
    }
    
    onKeyup(event: KeyboardEvent) {
        this.isActive = false;
        if (event.keyCode == KeyCodes.SPACE || event.keyCode == KeyCodes.ENTER) this.fireClickEvent();
    }
    
    onTouchstart(event) {
        if (!this.disabled && event.touches.length == 1) {
            this.isActive = true;
        }
    }
    
    onTouchend(event) {
        this.isActive = false;
        if (event.touches.length == 1) this.fireClickEvent();
    }

    onFocus() {
        if (!this.disabled)
            this.isFocus = !this.isActive;
    }
    
    onBlur() {
        this.isFocus = false;
    }

    
} 