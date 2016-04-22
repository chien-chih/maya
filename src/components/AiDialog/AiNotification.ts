import {Component} from 'angular2/core';
import {AiButton,AiConfirm,AiConfirmContext,AiModalInstance,AiModalDialog,AiModalConfig,AiModalAlign,AiModalPosition} from '../Ai';

export class AiNotificationContext {
    constructor(
        public message:string = '',
        public ico:string='',
        public color:string='',
        public ok: string = ''
    ) {}
}

@Component({
    selector: 'ai-notification',
    directives: [AiButton],
    template:
    `<div [class]='getClass()' [attr.hasIcon]='hasIcon()'>
    	<div class="inner">
            <span class='ico' ai-material>{{context.ico}}</span>
    		<p class='msg'>
    		{{context.message}}
    		<ai-button *ngIf="hasOK()" link class='ok' (_click)='ok()'>{{context.ok}}</ai-button>
    		</p>
    	</div>
    	<ai-button icon class='close' (_click)='close()'>clear</ai-button>
    </div>`
})
export class AiNotification implements AiModalDialog {

    static get DefaultConfig():AiModalConfig{
        let config:AiModalConfig =new AiModalConfig();
        config.x=AiModalPosition.Begin;
        config.y=AiModalPosition.Begin;
        config.animation='slidetop';
        config.width='100%';
        config.floating=true;
        config.TimeHide=15000;
        return config;
    }

    constructor(public instance: AiModalInstance,public context: AiNotificationContext) {
    }

    getClass(){
        var c='body';
        if(this.context.color.length > 0)
            c+=' '+this.context.color;
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

    hasIcon(){
        return this.context.ico.length > 0 ? '':null;
    }


}