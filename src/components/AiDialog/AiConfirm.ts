import {Component} from 'angular2/core';
import {AiButton,AiModalInstance,AiModalDialog,AiModalConfig,AiModalAlign,AiModalPosition} from '../Ai';

export class AiConfirmContext {
    constructor(
        public title: string = '',
        public message: string = '',
        public ico:string='',
        public yesText: string = 'YES',
        public noText: string = 'NO'
    ) {}
}

@Component({
    selector: 'ai-confirm',
    directives: [AiButton],
    template:
    `<div class='ai-dlg-body' [attr.hasIcon]='hasIcon()'>
        <h2 class='title'>{{context.title}}</h2>
        <p class='msg'>{{context.message}}</p>
        <div class='left'>
            <span class='ico' ai-material>{{context.ico}}</span>
        </div>
    </div>
    <div class='bar'>
        <div class='line'></div>
        <ai-button class='no' primary (_click)='cancel()'>{{context.noText}}</ai-button>
        <ai-button class='yes' primary leftborder (_click)='ok()'>{{context.yesText}}</ai-button>
    </div>
    `
})
export class AiConfirm implements AiModalDialog {

    static get DefaultConfig():AiModalConfig{
        let config:AiModalConfig =new AiModalConfig();
        config.x=AiModalPosition.Center();
        config.y=new AiModalPosition(100,AiModalAlign.Begin);
        config.mask='black';
        config.floating=true;
        config.animation='fade';
        return config;
    }

    constructor(public instance: AiModalInstance,public context: AiConfirmContext) {
    }

    ok() {
        this.instance.close(true);
    }

    cancel() {
        this.instance.close();
    }

    hasIcon(){
        return this.context.ico.length > 0 ? '':null;
    }

    closingDelayTime():number{
        return 500;
    }

}