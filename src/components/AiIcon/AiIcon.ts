import {Component,ElementRef,Renderer} from 'angular2/core';
import {AiControl} from '../AiControl/AiControl';

@Component(AiControl.meta({
        templateUrl:'package:src/components/AiIcon/AiIcon.html',
        selector: 'ai-icon',
    },{
        ignoreDisabled:1,
        ignoreFocus:1
    }
))    
export class AiIcon extends AiControl { 

    constructor(ele: ElementRef) { 
        super(ele); 
        this.enableMaterial();
    }

} 
  
   
 
  