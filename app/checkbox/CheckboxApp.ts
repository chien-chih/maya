import {Component} from 'angular2/core';
import {bootstrap}    from 'angular2/platform/browser';
import {AiApp} from 'ai/components/AiApp/AiApp';
import {AiCheckbox} from 'ai/components/AiCheckbox/AiCheckbox';
import {AiToggle} from 'ai/components/AiToggle/AiToggle';
import {AiRadio} from 'ai/components/AiRadio/AiRadio';
import {AiRadioGroup} from 'ai/components/AiRadio/AiRadioGroup';


@Component(AiApp.meta({
    selector: 'checkbox-app',
    templateUrl:'package:app/checkbox/CheckboxApp.html',
    directives: [AiCheckbox,AiToggle,AiRadioGroup,AiRadio]  
}))
export class AppComponent  extends AiApp{  
    
}              

bootstrap(AppComponent);  