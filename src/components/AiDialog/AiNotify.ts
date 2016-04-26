import {Component} from 'angular2/core';
import {AiButton,AiConfirm,AiConfirmContext,AiModalInstance,AiModalDialog,AiModalConfig,AiModalAlign,AiModalPosition} from '../Ai';

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
    host:{
        '[class]': 'getClass()'
        },
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

    static GetConfig(context: AiNotifyContext):AiModalConfig{
        let config:AiModalConfig =new AiModalConfig();
        
        config.floating=true;
        config.TimeHide=15000*10;
        if(context.style==='slidedown'){
            config.x=AiModalPosition.Begin();
            config.y=AiModalPosition.Begin();
            config.animation='slidedown';
            config.width='100%';
        }
        else if (context.style==='corner'){
            config.x=AiModalPosition.End(-20);
            config.y=AiModalPosition.Begin(20);
            config.animation='jelly';
        }
        else if (context.style==='thumb'){
            config.x=AiModalPosition.Begin(20);
            config.y=AiModalPosition.Begin(20);
            config.animation='thumb';
        }
        
        return config;
    }

    constructor(public instance: AiModalInstance,public context: AiNotifyContext) {
    }

    getClass(){
        var c=this.context.style;
        if(this.context.color.length > 0)
            c+=' '+this.context.color;
        if(this.context.ico.length > 0)
            c+=' hasico';
            
        if (this.context.style==='slidedown')
            c+=' ai-top-in';
        else if (this.context.style==='corner')
            c+=' ai-jelly-in';
        else if (this.context.style==='thumb')
            c+=' ai-jelly-in';
            
        return c;
    }

    hasOK(){
        return this.context.ok.length > 0;
    }

    ok(){
        this.instance.close(true);
    }

    close() {
        this.instance.dismiss();
    }



}