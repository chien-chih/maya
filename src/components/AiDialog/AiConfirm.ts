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
        <div class='title'>{{context.title}}</div>
        <div class='message'>{{context.message}}</div>
        <span class='ico' ai-material>{{context.ico}}</span>
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
        config.x=AiModalPosition.Center;
        config.y=new AiModalPosition(100,AiModalAlign.Begin);
        config.mask='white';
        config.floating=true;
        return config; 
    }    

    constructor(public instance: AiModalInstance,public context: AiConfirmContext) {
    }

    ok() {
        this.instance.close(true);
    }

    cancel() {
        this.instance.dismiss();
    }
    
    hasIcon(){
        return this.context.ico.length > 0 ? '':null;
    }
    
}