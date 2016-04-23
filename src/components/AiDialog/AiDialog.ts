import {Injectable,DynamicComponentLoader,ComponentRef,ElementRef,Injector,provide,ResolvedProvider,Optional,ApplicationRef} from 'angular2/core';
import {AiModal,AiModalInstance,AiAlert,AiAlertContext,AiConfirm,AiConfirmContext,AiNotify,AiNotifyContext,AiModalConfig,AiModalAlign,AiModalPosition} from '../Ai';


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

    //text:message|icon|ok
    slidedown(text:string,callback?:any){
        this.notification(text,'slidedown','',callback);
    }
 
    //text:message|icon|ok
    slidedownDark(text:string,callback?:any){
        this.notification(text,'slidedown','dark',callback);
    }

    //text:message|icon|ok
    corner(text:string,callback?:any){
        this.notification(text,'corner','',callback);
    }
 
    //text:message|icon|ok
    cornerDark(text:string,callback?:any){
        this.notification(text,'corner','dark',callback);
    }

    //text:message|icon|ok
    thumb(text:string,callback?:any){
        this.notification(text,'thumb','',callback);
    }
 
    //text:message|icon|ok
    thumbDark(text:string,callback?:any){
        this.notification(text,'thumb','dark',callback);
    }

    //text:message|icon|ok
    flip(text:string,callback?:any){
        this.notification(text,'flip','',callback);
    }
 
    //text:message|icon|ok
    flipDark(text:string,callback?:any){
        this.notification(text,'flip','dark',callback);
    }

    //text:message|icon|ok
    progress(text:string,callback?:any){
        this.notification(text,'progress','',callback);
    }
 
    //text:message|icon|ok
    progressDark(text:string,callback?:any){
        this.notification(text,'progress','dark',callback);
    }

    //text:message|icon|ok
    notification(text:string,style:string,color:string,callback?:any){
        var n = text.split("|");
        let context:AiNotifyContext=new AiNotifyContext(n[0],n[1]?n[1]:'',n[2]?n[2]:'',style,color);
        let bindings = Injector.resolve([provide(AiNotifyContext, {useValue: context})]);

        let dialog:Promise<AiModalInstance> = this.modal.open(
            <any>AiNotify,bindings,AiNotify.GetConfig(context));
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

}