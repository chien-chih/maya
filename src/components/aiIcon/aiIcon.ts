import {Component,ElementRef,Renderer} from 'angular2/core';
import {AiControl} from '../aiControl';

@Component({
    templateUrl:'package:src/components/aiIcon/aiIcon.html',
    selector: 'ai-icon',
})    


export class AiIcon extends AiControl { 

    constructor(ele: ElementRef) { 
        super(ele); 
    }

} 
  
   
 
  