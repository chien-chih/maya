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
    valueA:string='1234';
    

    onSpinButtonClick(){
        this.spinButtonSpinning=!this.spinButtonSpinning;         
    }

    onRightClick(){
        alert('right');
    }
    
    onLeftClick(){
        alert('click left');
    }

    onValueChange(value){
    }

}
AiApp.boot(AppComponent);  