import {Component} from 'angular2/core';
import {AiApp} from 'ai/components/AiApp/AiApp';
import {AiButton} from 'ai/components/AiButton/AiButton';


@Component(AiApp.meta({
    selector: 'ui-app',
    templateUrl:'package:app/ui/UiApp.html',
    directives: [AiButton]  
}))
export class AppComponent  extends AiApp{  
    spinButtonSpinning:boolean=false;
    
    onSpinButtonClick(){
        debugger
        this.spinButtonSpinning=!this.spinButtonSpinning;         
    }
}
AiApp.boot(AppComponent);  