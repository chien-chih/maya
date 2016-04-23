import {AiDOM,AiControl,KeyCodes,AiModalInstance,AiModalConfig,AiModalAlign,AiModal} from '../Ai';
import {Component,ElementRef,Attribute} from 'angular2/core';
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

    closeAfterTimerId:number=-1;

    waitTimerId:number=-1;

    constructor(private instance: AiModalInstance,ele: ElementRef) {
        super(ele);
    }

    get Class():string{
        var cls:string='';

        if(this.instance.config.mask)
            cls+='mask '+this.instance.config.mask;

        if(this.instance.config.autoHide)
            cls+=' autohide';

        if(this.instance.config.animation==='fade')//must be here
            cls+= ' ai-fade-in';

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

        if(config.width)
            dialog.style.width=config.width;

        if(config.height)
            dialog.style.height=config.height;

        this.visibility=null;
    }


    onClick() {
        if(this.instance.config.autoHide)
            this.instance.dismiss();
    }

    documentKeypress(event: KeyboardEvent) {
        if (this.instance.isTopModal && this.instance.config.ESCHide && event.keyCode==KeyCodes.ESCAPE)
            this.instance.dismiss();
    }

    onLoad(){
        var that=this;
        TimerWrapper.setTimeout(() => {
            that.resetPosition();
        }, 1);

        //Watch Time Hide
        let closeAfter=this.instance.config.TimeHide;
        if(closeAfter > 0){
            this.closeAfterTimerId=TimerWrapper.setInterval(() => {
                that.instance.dismiss();
            }, closeAfter);
        }

        //track size
        if(this.instance.config.trackingSizePosition){
            TimerWrapper.setInterval(() => {
                that.resetPosition();
            }, 500);
        }

        if (this.instance.isOnlyModal){
            let dom=AiDOM.get();
            dom.addClass(dom.query('body'), 'modal-open');
        }
        this.loadAnimation();
    }

    beforeUnload(callback){

        if(this.closeAfterTimerId != -1){
            TimerWrapper.clearTimeout(this.closeAfterTimerId);
            this.closeAfterTimerId=-1;
        }


        var self=this;
        if(this.waitTimerId != -1) {
            TimerWrapper.clearTimeout(this.waitTimerId);
            this.waitTimerId = -1;
        }
        let waitTime=this.unloadAnimation();
        if(waitTime==0) callback();
        else
            this.waitTimerId=TimerWrapper.setTimeout(() => {
                callback();
                self.waitTimerId=-1;
            }, waitTime);
    }

    onUnload(){

        if (this.instance.isNoModal){
            let dom=AiDOM.get();
            dom.removeClass(dom.query('body'), 'modal-open');
        }
    }

    loadAnimation(){
        let dom=AiDOM.get();
        var dialog=this.nativeElement.childNodes[0];
        if(this.instance.config.animation==='slidedown')
            dom.addClass(dialog, 'ai-top-in');
    }

    unloadAnimation():number{
        let dom=AiDOM.get();
        var dialog=this.nativeElement.childNodes[0];
        if(this.instance.config.animation==='slidedown'){
            dom.addClass(dialog, 'ai-top-out');
            return 500;
        }
        else if(this.instance.config.animation==='fade'){
            dom.addClass(this.nativeElement, 'ai-fade-out');
            return 300;
        }
        return 0;
    }

}