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

    //slidedown
    onSlidedown(){
        this.dialog.slidedown('Our goal with MacBook was to do the impossible||Undo',function(v){
            window.alert('pressed '+v);
        });
    }

    onSlidedownWithIcon(){
        this.dialog.slidedown('Our goal with MacBook was to do the impossible.|help|Undo');
    }

    onDarkSlidedown(){
        this.dialog.slidedownDark('Our goal with MacBook was to do the impossible||Undo');
    }

    onDarkSlidedownWithIcon(){
        this.dialog.slidedownDark('Our goal with MacBook was to do the impossible.|help');
    }

    //corner
    onCorner(){
        this.dialog.corner('Our goal with MacBook was to do the impossible||Undo',function(v){
            window.alert('pressed '+v);
        });
    }

    onCornerWithIcon(){
        this.dialog.corner('Our goal with MacBook was to do the impossible.|help|Undo');
    }

    onDarkCorner(){
        this.dialog.cornerDark('Our goal with MacBook was to do the impossible||Undo');
    }

    onDarkCornerWithIcon(){
        this.dialog.cornerDark('Our goal with MacBook was to do the impossible.|help');
    }

    //thumb
    onThumb(){
        this.dialog.thumb('MacBook was to do the impossible||Undo',function(v){
            window.alert('pressed '+v);
        });
    }

    onThumbWithIcon(){
        this.dialog.thumb('MacBook was to do the impossible.|help|Undo');
    }

    onDarkThumb(){
        this.dialog.thumbDark('MacBook was to do the impossible||Undo');
    }

    onDarkThumbWithIcon(){
        this.dialog.thumbDark('MacBook was to do the impossible.|help');
    }

    //flip
    onFlip(){
        this.dialog.flip('The event was added to your calendar. Check out all your events in your||event overview',function(v){
            window.alert('pressed '+v);
        });
    }

    onFlipWithIcon(){
        this.dialog.flip('The event was added to your calendar. Check out all your events in your.|help|event overview');
    }

    onDarkFlip(){
        this.dialog.flipDark('Our goal with MacBook was to do the impossible||Undo');
    }

    onDarkFlipWithIcon(){
        this.dialog.flipDark('Our goal with MacBook was to do the impossible.|help');
    }

    //wait
    onWaitStart(){
        this.dialog.waitStart('Connection timed out||try again',function(v){
            window.alert('pressed '+v);
        }); 
    }

    onWaitStop(){
        this.dialog.waitStop();
    }

    onWaitStartWithIcon(){
        this.dialog.waitStart('Connection timed out|error_outline'); 
    }

    onWaitStartWithOK(){
        this.dialog.waitStart('Connection timed out|error_outline|try again'); 
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