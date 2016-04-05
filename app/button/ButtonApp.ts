

import {Component,ElementRef} from 'angular2/core';
import {AiButton} from 'ai/components/AiButton/AiButton';
import {AiIcon} from 'ai/components/AiIcon/AiIcon';
import {AiApp} from 'ai/components/AiApp/AiApp';
//import {PatternParser} from 'ai/components/AiInput/AiFormatter';
//import {PatternMatcher} from 'ai/components/AiInput/AiFormatter';

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
/*  
      var pp=new PatternParser(); 
      var result = pp.parse('({{9A*}}) {{9A*}}-{{AAAA}}');
      
      var patternMatcher=new PatternMatcher();
      patternMatcher.add('^abc$','{{*}}-{{*}}-{{*}}');

      var result1=patternMatcher.getPattern('abc');
      
      debugger
      */ 
  }  
}   


 

AiApp.boot(AppComponent);  