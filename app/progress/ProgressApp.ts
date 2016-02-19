import {Component} from 'angular2/core';
import {bootstrap}    from 'angular2/platform/browser';
import {AiApp} from 'ai/components/AiApp/AiApp';
import {AiSpinner} from 'ai/components/AiSpinner/AiSpinner';
import {AiProgress} from 'ai/components/AiProgress/AiProgress';


@Component(AiApp.meta({
    selector: 'progress-app',
    templateUrl:'package:app/progress/ProgressApp.html',
    directives: [AiSpinner,AiProgress]  
}))
export class AppComponent  extends AiApp{  
    
}              

bootstrap(AppComponent); 