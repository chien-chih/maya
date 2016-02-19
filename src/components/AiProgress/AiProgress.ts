import {Component,ElementRef, Attribute, OnChanges} from 'angular2/core';
import {isPresent, isBlank} from 'angular2/src/facade/lang';
import {Math} from 'angular2/src/facade/math';
import {AiControl} from '../AiControl/AiControl';

@Component(AiControl.meta({
        templateUrl:'package:src/components/AiProgress/AiProgress.html',
        selector: 'ai-progress',
        inputs: ['value'],
        host: {
            'role': 'progressbar',
            'aria-valuemin': '0',
            'aria-valuemax': '100',
            '[attr.aria-valuenow]': 'value',
        },        
    },{
        ignoreActive:1,
        ignoreFocus:1,
        ignoreHover:1
    }
))    
export class AiProgress extends AiControl implements OnChanges{ 
    /** Value for the primary bar. */
    _value: number;
    
    /** CSS `transform` property applied to the primary bar. */
    BarTransform: string='';
    
    constructor(ele: ElementRef) { 
        super(ele); 
    }

    get value() {
        return this._value;
    }
    
    set value(v) {
        if (isPresent(v)) {
          this._value = AiProgress.clamp(v);
        }
    }
    
    ngOnChanges(_) {
        if (isBlank(this.value)) {
          return;
        }
        this.BarTransform = this.transformForValue(this.value);
    }
    
    /** Gets the CSS `transform` property for a progress bar based on the given value (0 - 100). */
    transformForValue(value) {
        // TODO(jelbourn): test perf gain of caching these, since there are only 101 values.
        let scale = value / 100;
        let translateX = (value - 100) / 2;
        return `translateX(${translateX}%) scale(${scale}, 1)`;
    }
    
    /** Clamps a value to be between 0 and 100. */
    static clamp(v) {
        return Math.max(0, Math.min(100, v));
    }
} 
  
   
 
  