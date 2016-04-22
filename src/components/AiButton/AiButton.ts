import {Component,ElementRef,Attribute} from 'angular2/core';
import {AiControl} from '../AiControl/AiControl';
//import {UiService} from '../UiService';
//,uiService:UiService

@Component(AiControl.meta({
    templateUrl:'package:src/components/AiButton/AiButton.html',
    selector: 'ai-button',
    inputs:[],
    host:{
      //'[class.material]':'type==="fab" ||type==="icon"',
    },
}))
//size:default,small,large
//color:red,green,yellow
export class AiButton extends AiControl{
    //type:string;
    //border:string;

    constructor(ele: ElementRef) {
        super(ele);
        if(this.nativeElement.getAttribute('fab')==="" || this.nativeElement.getAttribute('icon')==="") {
          this.enableMaterial();
        }

    }


}



