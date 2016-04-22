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

    onAlert(){
        this.dialog.alert('MacBook Light. Years ahead.|Our goal with MacBook was to do the impossible: engineer a full‑size experience into the lightest and most compact Mac notebook ever. ');
    }

    onAlertWithIcon(){
        this.dialog.alert('MacBook Light. Years ahead.|Our goal with MacBook was to do the impossible.|help');
    }

    onConfirm(){
        this.dialog.confirm('MacBook Light. Years ahead.|Our goal with MacBook was to do the impossible: engineer a full‑size experience into the lightest and most compact Mac notebook ever. ',function(value){
            window.alert(value);
        });
    }

    onConfirmWithIcon(){
        this.dialog.confirm('MacBook Light. Years ahead.|Our goal with MacBook was to do the impossible.|help');
    }

    onNotification(){
        this.dialog.notify('Our goal with MacBook was to do the impossible|||Undo',function(v){
            window.alert('pressed '+v);
        });
    }

    onNotificationWithIcon(){
        this.dialog.notify('Our goal with MacBook was to do the impossible.|help|white');
    }

    onBlackNotification(){
        this.dialog.notify('Our goal with MacBook was to do the impossible||black|Undo');
    }

    onBlackNotificationWithIcon(){
        this.dialog.notify('Our goal with MacBook was to do the impossible.|help|black');
    }


    onClick(){

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