import {Component} from 'angular2/core';
import {AiApp} from 'ai/components/AiApp/AiApp';
import {AiInput} from 'ai/components/AiInput/AiInput';


@Component(AiApp.meta({
    selector: 'input-app',
    templateUrl:'package:app/input/InputApp.html',
    directives: [AiInput]  
}))
export class AppComponent  extends AiApp{  
    spinButtonSpinning:boolean=false;
    
    onSpinButtonClick(){
        this.spinButtonSpinning=!this.spinButtonSpinning;         
    }
}
AiApp.boot(AppComponent);  