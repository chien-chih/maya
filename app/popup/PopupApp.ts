import { Component, provide, ElementRef, Injector, Renderer} from 'angular2/core';
import {AiApp} from 'ai/components/AiApp/AiApp';
import {AiButton} from 'ai/components/AiButton/AiButton';
import { ModalInstance,ModalConfig, Modal, YesNoModalContent, YesNoModal} from 'ai/components/AiPopup/AiPopupInclude';

@Component(AiApp.meta({
    selector: 'popup-app',
    providers: [Modal],
    templateUrl:'package:app/popup/PopupApp.html',
    directives: [AiButton]  
}))
export class AppComponent  extends AiApp{  

    public lastModalResult: string;
    
    constructor(private modal: Modal, private elementRef: ElementRef,
                private injector: Injector, private _renderer: Renderer) {
           super(elementRef);             
    }
                
    onClick(){
        var modalContent:YesNoModalContent = new YesNoModalContent('Simple Small modal', 'Press ESC or click OK / outside area to close.', true);
 
        let dialog:  Promise<ModalInstance>;
        let bindings = Injector.resolve([
            provide(YesNoModalContent, {useValue: modalContent})
        ]);

        dialog = this.modal.open(<any>YesNoModal,bindings);
            
        dialog.then(
            (resultPromise) => {
                return resultPromise.result.then(
                    (result) => {
                            
                        this.lastModalResult = result;
                    }, 
                    () =>{ 
                        this.lastModalResult = 'Rejected!';
                        
                    }
                );
            });            
            
    }


}
AiApp.boot(AppComponent);  