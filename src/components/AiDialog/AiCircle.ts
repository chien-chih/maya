import {AiDOM,AiButton,AiConfirm,AiConfirmContext,AiModalInstance,AiModalDialog,AiModalConfig,AiModalAlign,AiModalPosition} from '../Ai';
import {Component,ElementRef} from 'angular2/core';
import {TimerWrapper} from "angular2/src/facade/async";

export class AiCircleContext {
    constructor(
        public message:string,
        public ico:string,
        public ok: string
    ) {}
}

@Component({
    selector: 'ai-circle',
    directives: [AiButton],
    template:
    `
    	<p class='msg'>
    	    {{context.message}}
    	    <ai-button *ngIf="hasOK()" link class='ok' (_click)='ok()'>{{context.ok}}</ai-button>
    	</p>
        <span class='ico' ai-material>{{context.ico}}</span>
    	<ai-button icon class='close' (_click)='close()'>highlight_off</ai-button>
    	<svg width="70px" height="70px"><path d="m35,2.5c17.955803,0 32.5,14.544199 32.5,32.5c0,17.955803 -14.544197,32.5 -32.5,32.5c-17.955803,0 -32.5,-14.544197 -32.5,-32.5c0,-17.955801 14.544197,-32.5 32.5,-32.5z"></path></svg>
    `
})
export class AiCircle implements AiModalDialog {

    isClosing:boolean=false;
    
    nativeElement:any=null;
    
    waitTimerId:number=-1;

    static dlgInstance:AiCircle=null;

    static setDlgInstance(dlgInstance:AiCircle){
        AiCircle.removeDlgInstance();
        AiCircle.dlgInstance=dlgInstance;
    }
    
    static removeDlgInstance(){
        if(AiCircle.dlgInstance){
            AiCircle.dlgInstance.close();
            AiCircle.dlgInstance=null;
        }
    }

    static GetConfig(context: AiCircleContext):AiModalConfig{
        let config:AiModalConfig =new AiModalConfig();
        
        config.floating=true;
        config.TimeHide=15000*10;
        config.x=AiModalPosition.Begin(20);
        config.y=AiModalPosition.End(-20);
        return config;
    }

    constructor(public instance: AiModalInstance,public context: AiCircleContext,private ele: ElementRef) {
        this.nativeElement=ele.nativeElement;
        AiCircle.setDlgInstance(this);
    }

    onOpen(){
        let dom=AiDOM.get();
        var self=this;
        if(this.context.ico.length > 0)
            dom.addClass(this.nativeElement, 'hasico');
        
        this.waitTimerId=TimerWrapper.setTimeout(() => {
                dom.addClass(this.nativeElement, 'show');
            }, 27000);

    } 

    beforeClose(): boolean{
        AiDOM.get().addClass(this.nativeElement, 'ai-fade-out');
        return false;
    }

    closingDelayTime():number{
        return 500;
    } 

    hasOK(){
        return this.context.ok.length > 0;
    }

    disposeTimer(){
        if(this.waitTimerId != -1){
            TimerWrapper.clearTimeout(this.waitTimerId);
            this.waitTimerId=-1;
        }
    }

    ok(){
        this.disposeTimer();
        this.instance.close(true);
    }

    close() { 
        this.disposeTimer();
        this.instance.close();
    }



}