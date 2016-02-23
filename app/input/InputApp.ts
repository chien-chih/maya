import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {AiApp} from 'ai/components/AiApp/AiApp';
import {AiInput} from 'ai/components/AiInput/AiInput';


@Component(AiApp.meta({
    selector: 'input-app',
    templateUrl:'package:app/input/InputApp.html',
    directives: [AiInput]  
}))
export class AppComponent  extends AiApp{  
     
}              

bootstrap(AppComponent); 