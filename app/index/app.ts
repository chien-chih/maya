import {Component} from 'angular2/core';
import {bootstrap}    from 'angular2/platform/browser';
import * as ai from 'ai/ai';
import * as button from 'ai/button/button';

@Component({
    selector: 'my-app',
    template: '<hello-world>Loading...</hello-world><h1 class="student main">My First Angular 2 App</h1><br><button  (click)="onClick()">click</button>'
    ,directives: [button.HelloWorld]
})
export class AppComponent { 
    
    onClick() {
        var strings = ['Hello', '98052', 10];
        var l = new ai.LettersOnlyValidator();
        if(l.isAcceptable('hello'))
            alert("true");
            //else
            //alert("false");
  } 
}             

bootstrap(AppComponent);  