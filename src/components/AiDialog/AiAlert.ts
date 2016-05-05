import {Component} from 'angular2/core';
import {AiButton,AiConfirm,AiConfirmContext,AiModalInstance,AiModalDialog,AiModalConfig,AiModalAlign,AiModalPosition} from '../Ai';

export class AiAlertContext {
    constructor(
        public title: string = '',
        public message: string = '',
        public ico:string='',
        public okText: string = 'OK'
    ) {}
}


@Component({
    selector: 'ai-alert',
    directives: [AiButton],
    template:
    `<div class='ai-dlg-body' [attr.hasIcon]='hasIcon()'>
        <h2 class='title'>{{context.title}}</h2>
        <p class='message'>{{context.message}}</p>
        <div class='left'>
            <span class='ico' ai-material>{{context.ico}}</span>
        </div>

    </div>
    <div class='bar'>
        <ai-button class='yes' raised red (_click)='ok()'>{{context.okText}}</ai-button>
    </div>
    `
})
export class AiAlert implements AiModalDialog {

    static get DefaultConfig():AiModalConfig{
        let config:AiModalConfig =new AiModalConfig();
        config.x=AiModalPosition.Center();
        config.y=new AiModalPosition(100,AiModalAlign.Begin);
        config.mask='black';
        config.floating=true;
        //config.animation='fade';
        return config;
    }

    constructor(public instance: AiModalInstance,public context: AiAlertContext) {
    }

    ok() {
        this.instance.close();
    }

    hasIcon(){
        return this.context.ico.length > 0 ? '':null;
    }

    closingDelayTime():number{
        return 500;
    }

}