import {ElementRef,Attribute,OnChanges} from 'angular2/core';
import {TimerWrapper} from 'angular2/src/facade/async';
//import {isPresent} from 'angular2/src/facade/lang';
import {KeyboardEvent,MouseEvent} from 'angular2/src/facade/browser';
import {NumberWrapper} from 'angular2/src/facade/lang';
import {CONST} from 'angular2/src/facade/lang';
import {ObservableWrapper,EventEmitter} from 'angular2/src/facade/async';
import {DOM} from 'angular2/src/platform/dom/dom_adapter';

//import {BrowserDomAdapter} from "angular2/src/platform/browser/browser_adapter";
//BrowserDomAdapter.makeCurrent();

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

export class AiControl implements OnChanges{ 
    nativeElement:any;
    tabindex: number=0;
    disabled:boolean=false;
    isFocus: boolean = false;
    isActive: boolean = false;
    isHover: boolean = false;
    isFire:boolean=false;
    keyCode:number=0;
    visible: boolean = true;
    
    hint:string='';
    icon:string='';
    error:string='';

    _click: EventEmitter<any>=new EventEmitter();

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
    
    static mobile:boolean=AiControl.init();
    static init():boolean{
        var userAgent = navigator.userAgent;
        var mobile = !!userAgent && /iPad|iPhone|Android/.test(userAgent);
        document.body.setAttribute(mobile?'mobile':'desktop','');
        return mobile;
    }
    static meta(meta:any,options?:any):any{
        if(!options) options={}; 
        if(!meta.inputs) meta.inputs=[];
        if(!meta.outputs) meta.outputs=[];
        if(!meta.host) meta.host={};

        meta.inputs.push('visible');
        meta.host['[class.hide]']='!visible';
        if(!options.ignoreDisabled){
            meta.inputs.push('disabled');
            meta.host['[class.disabled]']='disabled';
        }
        
        if(!options.ignoreFocus){
            meta.host['[class.focus]']='isFocus';
            meta.host['(focus)']='focus()';
            meta.host['(blur)']='blur()';
            meta.host['[tabindex]']='getTabIndex()';
        }        


        if(!options.ignoreHover){
            meta.host['[class.hover]']='isHover';
            meta.host['(mouseover)']='mouseOver()';
            meta.host['(mouseout)']='mouseOut()';
        }        

        if(!options.ignoreActive){
            meta.outputs.push('_click');
            meta.host['[class.active]']='isActive';
            meta.host['(mouseup)']='mouseUp($event)';
            meta.host['(mousedown)']='mouseDown($event)';
            meta.host['(touchstart)']='touchStart($event)';
            meta.host['(touchend)']='touchEnd($event)';
            meta.host['(keyup)']='keyUp($event)';
            meta.host['(keydown)']='keyDown($event)';
        }
        return meta;
    }
  
    constructor(ele: ElementRef) {
        this.nativeElement = ele.nativeElement;
        this.nativeElement.setAttribute('ai-control',''); 

        var tabindex = this.nativeElement.getAttribute('tabindex');
        if(tabindex) this.tabindex = NumberWrapper.parseInt(tabindex, 10);
    }  

    ngOnChanges(_) {
        //alert(this.spinning);
    }

    enableMaterial(){
        this.nativeElement.setAttribute('ai-material','');
    }

    getTabIndex(){
        if(this.disabled || !this.visible) return -1;
        return this.tabindex;
    }

    isDisabled(){
        return this.disabled? "disabled" : null;
    }

    fireClickEvent(){
        if (!this.disabled && !this.isFire) {
            try{
                this.onClick();
                this.isFire=true;
                ObservableWrapper.callEmit(this._click, null);
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


/*  
document.addEventListener('DOMContentLoaded', function() {
    alert('hello');
    //debugger
    //document.body.setAttribute('mobile','a');
});
*/ 
