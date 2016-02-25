import {Component,ElementRef} from 'angular2/core';
import {AiButton} from 'ai/components/AiButton/AiButton';
import {AiIcon} from 'ai/components/AiIcon/AiIcon';
import {AiApp} from 'ai/components/AiApp/AiApp';
@Component(AiApp.meta({
    selector: 'button-app',
    templateUrl:'package:app/button/ButtonApp.html',
    directives: [AiButton,AiIcon]
}))
export class AppComponent extends AiApp{ 

    constructor(ele: ElementRef) {  
        super(ele); 
    }

    isEventSupported(eventName){
      var TAGNAMES = {
        'select':'input','change':'input',
        'submit':'form','reset':'form',
        'error':'img','load':'img','abort':'img'
      }

        var el = document.createElement(TAGNAMES[eventName] || 'div');
        eventName = 'on' + eventName;
        var isSupported = (eventName in el);
        if (!isSupported) {
          el.setAttribute(eventName, 'return;');
          isSupported = typeof el[eventName] == 'function';
        }
        el = null;
        return isSupported;
      
    }
    i:number=0;
    onClick() {
        //alert('mouseout:'+this.isEventSupported('mouseout'));
        this.i=this.i +1;
        console.log(this.i.toString());

        //var strings = ['Hello', '98052', 10];
        //var l = new ai.LettersOnlyValidator();
        //if(l.isAcceptable('hello'))
           // alert("true");
            //else
            //alert("false");
  }  
}              

AiApp.boot(AppComponent);  