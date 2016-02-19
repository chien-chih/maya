import {Component,ElementRef} from 'angular2/core';
import {AiControl} from '../AiControl/AiControl';

@Component(AiControl.meta({
        templateUrl:'package:src/components/AiSpinner/AiSpinner.html',
        selector: 'ai-spinner',
    },{
        ignoreActive:1,
        ignoreDisabled:1,
        ignoreFocus:1,
        ignoreHover:1
    }
))    
export class AiSpinner extends AiControl { 

    constructor(ele: ElementRef) { 
        super(ele); 
    }
} 
  
   
 
  