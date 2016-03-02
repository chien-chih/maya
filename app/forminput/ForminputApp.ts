import {Component} from 'angular2/core';
import {AiApp} from 'ai/components/AiApp/AiApp';
import {AiFormInput} from 'ai/components/AiFormInput/AiFormInput';
import {AiFormTextarea} from 'ai/components/AiFormTextarea/AiFormTextarea';


@Component(AiApp.meta({
    selector: 'forminput-app',
    templateUrl:'package:app/forminput/ForminputApp.html',
    directives: [AiFormInput,AiFormTextarea]  
}))
export class AppComponent  extends AiApp{  
    value:string='';

    valueX:string='';

}
AiApp.boot(AppComponent);  