import {Component} from 'angular2/core';
import {bootstrap}    from 'angular2/platform/browser';
import {AiApp} from 'ai/components/AiApp/AiApp';
import {AiCheckbox} from 'ai/components/AiCheckbox/AiCheckbox';
import {AiToggle} from 'ai/components/AiToggle/AiToggle';

@Component(AiApp.meta({
    selector: 'checkbox-app',
    templateUrl:'package:app/index/IndexApp.html',
    directives: [AiCheckbox,AiToggle]  
}))
export class AppComponent  extends AiApp{  
    
}              

bootstrap(AppComponent);  