import {Component,ElementRef} from 'angular2/core';
import {ObservableWrapper,EventEmitter} from 'angular2/src/facade/async';
import {AiControl} from '../AiControl/AiControl';

@Component(AiControl.meta({
    templateUrl:'package:src/components/AiToggle/AiToggle.html',
    selector: 'ai-toggle',
    inputs:['value','up','down'],
    outputs:['onchange'],
    host:{
        '[class.checked]': 'value',
    },
}))    
export class AiToggle extends AiControl{ 

    value:boolean=false; 
    _up:string='check_box_outline_blank';
    _down:string='check_box';

    onchange: EventEmitter<any>=new EventEmitter();

    constructor(ele: ElementRef) {  
        super(ele); 
    }
    toggle():void{
        if(!this.disabled){
            this.value=!this.value;
        }
    }

    onClick(){
        this.toggle();
    }
    
    get current(): string {
        if(this.value) return this._down;
        return this._up;
    }
    set current(v: string) {
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
  
   
 
  