import {Component,ElementRef,Renderer} from 'angular2/core';
import {AiControl} from '../AiControl/AiControl';

@Component(AiControl.meta({
    templateUrl:'package:src/components/AiToggle/AiToggle.html',
    selector: 'ai-toggle',
    inputs:['value','up','down'],
    host:{
        '(click)':'toggle()',
        '[class.checked]': 'value',
    },
}))    
export class AiToggle extends AiControl{ 
    value:boolean=false; 
    _up:string='check_box_outline_blank';
    _down:string='check_box';
    _current:string='check_box_outline_blank';
    constructor(ele: ElementRef) {  
        super(ele); 
    }
    toggle():void{
        if(!this.disabled)
            this.value=!this.value;
    }

    get current(): string {
        return this._current;
    }
    set current(v: string) {
        this._current = v;
    }


    get up(): string {
        return this._up;
    }
    set up(v: string) {
        this._up = v;
    }

    get down(): string {
        return this._down;
    }
    set down(v: string) {
        this._down = v;
        this.current=v;
    }

} 
  
   
 
  