import {Component} from 'angular2/core';
import {AiButton,AiModalInstance,AiModalDialog,AiModalConfig,AiModalAlign,AiModalPosition} from '../Ai';
import {AiConfirm,AiConfirmContext} from './AiConfirm';

@Component({
    selector: 'ai-alert',
    directives: [AiButton],
    template:
    `<div class='ai-dlg-body' [attr.hasIcon]='hasIcon()'>
        <div class='title'>{{context.title}}</div>
        <div class='message'>{{context.message}}</div>
        <span class='ico' ai-material>{{context.ico}}</span>
    </div>
    <div class='bar'>
        <ai-button class='yes' red (_click)='ok()'>{{context.yesText}}</ai-button>    
    </div>
    `
})
export class AiAlert extends AiConfirm {

    static get DefaultConfig():AiModalConfig{ 
        let config:AiModalConfig =new AiModalConfig();    
        config.x=AiModalPosition.Center;
        config.y=new AiModalPosition(100,AiModalAlign.Begin);
        config.mask='black';
        config.floating=true;
        return config; 
    }    

    constructor(public instance: AiModalInstance,public context: AiConfirmContext) {
        super(instance,context);
    }


} 