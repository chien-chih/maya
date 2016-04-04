import {Component,ElementRef,Attribute} from 'angular2/core';
import {AiControl} from '../AiControl/AiControl';
import {AiModalInstance} from './AiModalInstance';
import {AiModalConfig,AiModalAlign} from './AiModalConfig';
import {AiModal} from './AiModal';
import {TimerWrapper} from "angular2/src/facade/async";

@Component({
    selector: 'ai-modal-container',
    host: {
        '[class]': 'Class',
        '[style.visibility]': 'visibility',
        '(click)': 'onClick()',
        '(body:keydown)': 'documentKeypress($event)',
        'tabindex': '0',
        'role': 'dialog'
    },
    template:'<div class="ai-modal-dialog"><i #modalDialog></i></div>'
})
export class AiModalContainer extends AiControl{

    visibility:string='hidden';
    
    constructor(private instance: AiModalInstance,ele: ElementRef) {
        super(ele); 
    }
    
    get Class():string{
        var cls:string='';

        if(this.instance.config.mask)
            cls+=' mask '+this.instance.config.mask;

        if(this.instance.config.autoHide)
            cls+=' autohide';

        return cls;
    }

    resetPosition() {
        //the real modal show position is dialog position + align position
        
        var dialog=this.nativeElement.childNodes[0];
        var content=dialog.childNodes[1];
        var config=this.instance.config;

        dialog.style.position=config.Position;
        content.style.position='relative';
        let target=null;
        if(config.aroundTo)
            target=document.getElementById(config.aroundTo);
        config.x.positionLeft(dialog,content,target);
        config.y.positionTop(dialog,content,target);

        this.visibility=null;
    }


    onClick() {
        if(this.instance.config.autoHide)
            this.instance.dismiss();
    }

    documentKeypress(event: KeyboardEvent) {
        if (this.instance.isTopModal && 
            this.instance.config.supportsKey(event.keyCode))
            {
            this.instance.dismiss();
        }
    }
    
    onLoad(){
        var that=this;
        //that.resetPosition();

        TimerWrapper.setTimeout(() => {
            that.resetPosition();
        }, 1);


        if(this.instance.config.trackingSizePosition){
            TimerWrapper.setInterval(() => {
                that.resetPosition();
            }, 500);
         
        }            
                    
        //document.body.setAttribute(mobile?'mobile':'desktop','');

        //if (this._list.length === 1) {
           // DOM.addClass(DOM.query('body'), 'modal-open'); 
        //}
    }

    onUnload(){
        //if (this._list.length === 0) {
            //DOM.removeClass(DOM.query('body'), 'modal-open');
        //}

    }
}