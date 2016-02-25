import {Component} from 'angular2/core';
import {AiApp} from 'ai/components/AiApp/AiApp';
import {AiCheckbox} from 'ai/components/AiCheckbox/AiCheckbox';
import {AiCheck} from 'ai/components/AiCheck/AiCheck';
import {AiRadio} from 'ai/components/AiRadio/AiRadio';
import {AiRadioGroup} from 'ai/components/AiRadio/AiRadioGroup';


@Component(AiApp.meta({
    selector: 'checkbox-app',
    templateUrl:'package:app/checkbox/CheckboxApp.html',
    directives: [AiCheckbox,AiCheck,AiRadioGroup,AiRadio]  
}))
export class AppComponent  extends AiApp{  
    
}              
AiApp.boot(AppComponent);  