import {Component,ElementRef, Attribute, OnChanges} from 'angular2/core';
import {isPresent, isBlank} from 'angular2/src/facade/lang';
import {Math} from 'angular2/src/facade/math';
import {AiControl} from '../AiControl/AiControl';

@Component(AiControl.meta({
        templateUrl:'package:src/components/AiPercent/AiPercent.html',
        selector: 'ai-percent',
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
export class AiPercent extends AiControl implements OnChanges{ 
    /** Value for the primary bar. */
    _value: number;
    
    rightTransform: string='';
    rightTransition: string='';
    leftTransform: string='';
    leftTransition: string='';
    
    constructor(ele: ElementRef) { 
        super(ele); 
    }

    get value() {
        return this._value;
    }
    
    set value(v) {
        if (isPresent(v)) {
          this._value = AiPercent.clamp(v);
        }
    }
    
    getPercent():string{
        return `${this.value}%`;  

    }
    
    ngOnChanges(_) {
        if (isBlank(this.value)) {
          return;
        }
        this.animateIndicator(this.value);
    }
    
    /** Clamps a value to be between 0 and 100. */
    static clamp(v) {
        return Math.max(0, Math.min(100, v));
    }
    
    /**
     * Manually animate the Determinate indicator based on the specified
     * percentage value (0-100).
     *
     * Note: this animation was previously done using SCSS.
     * - generated 54K of styles
     * - use attribute selectors which had poor performances in IE
     */
    animateIndicator(value:number) {
        this.leftTransition= (value <= 50) ? "transform 0.1s linear" : "";
        this.rightTransition= (value >= 50) ? "transform 0.1s linear" : "";

        let lt=value <= 50 ? 135 : (((value - 50) / 50 * 180) + 135);
        this.leftTransform=`rotate(${lt}deg)`;  

        let rt = value >= 50 ? 45 : (value / 50 * 180 - 135);
        this.rightTransform=`rotate(${rt}deg)`;
    }

} 
  
   
 
  