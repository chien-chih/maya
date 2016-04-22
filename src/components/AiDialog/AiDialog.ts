import {Injectable,DynamicComponentLoader,ComponentRef,ElementRef,Injector,provide,ResolvedProvider,Optional,ApplicationRef} from 'angular2/core';
import {AiModal,AiModalInstance,AiAlert,AiAlertContext,AiConfirm,AiConfirmContext,AiNotification,AiNotificationContext,AiModalConfig,AiModalAlign,AiModalPosition} from '../Ai';


@Injectable()
export class AiDialog{

    constructor(private modal: AiModal){

    }
    //text:message|title|ico|yes|no
    confirm(text:string,callback?:any){
        var n = text.split("|");
        let context:AiConfirmContext=new AiConfirmContext(n[0],n[1],n[2],n[3],n[4]);
        let bindings = Injector.resolve([provide(AiConfirmContext, {useValue: context})]);

        let dialog:Promise<AiModalInstance> = this.modal.open(
            <any>AiConfirm,bindings,AiConfirm.DefaultConfig);
        dialog.then(
            (resultPromise) => {
                return resultPromise.result.then(
                    (result) => {
                        if(callback) callback(true);
                    },
                    () =>{
                        if(callback) callback(false);
                    }
                );
            });
    }

    //text:message|title|ico|ok
    alert(text:string,callback?:any){
        var n = text.split("|");
        let context:AiAlertContext=new AiAlertContext(n[0],n[1],n[2],n[3]);
        let bindings = Injector.resolve([provide(AiAlertContext, {useValue: context})]);

        let dialog:Promise<AiModalInstance> = this.modal.open(
            <any>AiAlert,bindings,AiAlert.DefaultConfig);
        dialog.then(
            (resultPromise) => {
                return resultPromise.result.then(
                    (result) => {
                        if(callback) callback();
                    },
                    () =>{
                        if(callback) callback();
                    }
                );
            });
    }
    //text:message|ico|color|yes|no
    notify(text:string,callback?:any){
        var n = text.split("|");
        let context:AiNotificationContext=new AiNotificationContext(n[0],n[1],n[2],n[3]);
        let bindings = Injector.resolve([provide(AiNotificationContext, {useValue: context})]);

        let dialog:Promise<AiModalInstance> = this.modal.open(
            <any>AiNotification,bindings,AiNotification.DefaultConfig);
        dialog.then(
            (resultPromise) => {
                return resultPromise.result.then(
                    (result) => {
                        if(callback) callback(true);
                    },
                    () =>{
                        if(callback) callback();
                    }
                );
            });

    }

    corner(text:string,callback?:any){

    }

    //text:message|ico|color|yes|no
    thumb(text:string,callback?:any){

    }

    genie(text:string,callback?:any){

    }

    flip(text:string,callback?:any){

    }

    //text:message|ico|color|yes|no
    progress(text:string,callback?:any){

    }


}