import {AiDOM,AiButton,AiConfirm,AiConfirmContext,AiModalInstance,AiModalDialog,AiModalConfig,AiModalAlign,AiModalPosition} from '../Ai';
import {Component,ElementRef} from 'angular2/core';
import {TimerWrapper} from "angular2/src/facade/async";

export class AiNotifyContext {
    constructor(
        public message:string,
        public ico:string,
        public ok: string,
        public style:string,
        public color:string
    ) {}
}

@Component({
    selector: 'ai-notify',
    directives: [AiButton],
    template:
    `
    	<p class='msg'>
    	    {{context.message}}
    	    <ai-button *ngIf="hasOK()" link class='ok' (_click)='ok()'>{{context.ok}}</ai-button>
    	</p>
        <span class='ico' ai-material>{{context.ico}}</span>
    	<ai-button icon class='close' (_click)='close()'>clear</ai-button>
    `
})
export class AiNotify implements AiModalDialog {

    isClosing:boolean=false;
    
    nativeElement:any=null;
    
    openAnimation:string='';

    static GetConfig(context: AiNotifyContext):AiModalConfig{
        let config:AiModalConfig =new AiModalConfig();
        
        config.floating=true;
        config.TimeHide=15000;
        if(context.style==='slidedown'){
            config.x=AiModalPosition.Begin();
            config.y=AiModalPosition.Begin();
            config.width='100%';
        }
        else if (context.style==='corner'){
            config.x=AiModalPosition.End(-20);
            config.y=AiModalPosition.Begin(20);
        }
        else if (context.style==='thumb'){
            config.x=AiModalPosition.Begin(20);
            config.y=AiModalPosition.Begin(20);
        }
        else if (context.style==='flip'){
            config.x=AiModalPosition.End(-20);
            config.y=AiModalPosition.End();
        }
        
        return config;
    }

    constructor(public instance: AiModalInstance,public context: AiNotifyContext,private ele: ElementRef) {
        this.nativeElement=ele.nativeElement;
    }

    onOpen(){
        let dom=AiDOM.get();
        let cs=this.context.style;
        var self=this;
        dom.addClass(this.nativeElement, cs);
        if(this.context.color.length > 0)
            dom.addClass(this.nativeElement, this.context.color);
        if(this.context.ico.length > 0)
            dom.addClass(this.nativeElement, 'hasico');

        if (cs==='slidedown') 
            this.openAnimation='ai-top-in';
        else if (cs==='flip')
            this.openAnimation='ai-flip-in';
        else if (cs==='corner')
            this.openAnimation='ai-jelly-in';
        else if (cs==='thumb'){
            this.openAnimation='ai-jelly-in';
            TimerWrapper.setTimeout(() => {
                dom.removeClass(self.nativeElement, 'ai-jelly-in');
                dom.addClass(self.nativeElement, 'expand');
            }, 1000);
        }
        dom.addClass(this.nativeElement, this.openAnimation);
        
    } 

    beforeClose(): boolean{
        let cs=this.context.style;
        let dom=AiDOM.get();
        dom.removeClass(this.nativeElement,this.openAnimation);
        if (cs==='slidedown') 
            dom.addClass(this.nativeElement, 'ai-top-out');
        else if (cs==='flip')
            dom.addClass(this.nativeElement, 'ai-flip-out');
        else if (cs==='corner')
            dom.addClass(this.nativeElement, 'ai-fade-out');
        else if (cs==='thumb'){
            dom.removeClass(this.nativeElement, 'expand');
            TimerWrapper.setTimeout(() => {
                dom.addClass(this.nativeElement, 'ai-fade-out');
            }, 500);
        }
        return false;
    }

    closingDelayTime():number{
        let cs=this.context.style;
        if (cs==='slidedown' || cs==='corner') 
            return 500;
        return 1000;
    } 


    hasOK(){
        return this.context.ok.length > 0;
    }

    ok(){
        this.instance.close(true);
    }

    close() { 
        this.instance.close();
    }



}