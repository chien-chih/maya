import { Component, provide, ElementRef, Injector, Renderer} from 'angular2/core';
import {AiApp,AiDialog,AiButton, AiModalInstance,AiModalConfig,AiModalPosition,AiModalAlign, AiModal} from 'ai/components/Ai';

@Component(AiApp.meta({
    selector: 'modal-app',
    providers: [AiModal,AiDialog],
    templateUrl:'package:app/modal/ModalApp.html',
    directives: [AiButton]  
}))
export class AppComponent  extends AiApp{  

    public lastModalResult: string;
    
    constructor(private modal: AiModal,private dialog: AiDialog, private elementRef: ElementRef,
                private injector: Injector, private _renderer: Renderer) {
           super(elementRef);    
           
    }
                
    onClick(){
        this.dialog.alert('All of the banks have agreed to forgive you your debts|Would you like?|help');
        
//        this.dialog.confirm('All of the banks have agreed to forgive you your debts.|Would you like to delete your debt?|help|PLEASE DO IT|SOUND LIKE SCAME',function(value){
  //          window.alert(value);
    //    });
        /*
        var modalContent:ConfirmContext = new ConfirmContext('Simple Small modal', 'Press ESC or click OK / outside area to close.');
 
        let dialog:  Promise<AiModalInstance>;
        let bindings = Injector.resolve([
            provide(ConfirmContext, {useValue: modalContent})
        ]);

        let config:AiModalConfig =new AiModalConfig();
        //config.mask='black';
        //config.trackingSizePosition=true;
        //config.anchorName="modalHere";
        config.y=new AiModalPosition("100%",AiModalAlign.Begin);
        config.aroundTo='btn';
        
        dialog = this.modal.open(<any>ConfirmDialog,bindings,config);
            
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
        */    
    }
}
AiApp.boot(AppComponent);    