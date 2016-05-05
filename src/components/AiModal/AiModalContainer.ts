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

    delayTimerId:number=-1;
    
    isClosing:boolean=false;

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
            cls+= this.isClosing ? ' ai-fade-out' : ' ai-fade-in';

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
            this.instance.close();
    }

    documentKeypress(event: KeyboardEvent) {
        if (this.instance.isTopModal && this.instance.config.ESCHide && event.keyCode==KeyCodes.ESCAPE)
            this.instance.close();
    }

    onOpen(){
        var that=this;
        TimerWrapper.setTimeout(() => {
            that.resetPosition();
        }, 1);


        //Watch Time Hide
        let closeAfter=this.instance.config.TimeHide;
        if(closeAfter > 0){
            this.closeAfterTimerId=TimerWrapper.setInterval(() => {
                that.instance.close();
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
            dom.addClass(dom.query('body'), 'ai-modal-open');
        }

    }


    beforeClose(delay,callback){
        var self=this;
        this.isClosing=true;
        if(this.closeAfterTimerId != -1){
            TimerWrapper.clearTimeout(this.closeAfterTimerId);
            this.closeAfterTimerId=-1;
        }

        if(this.delayTimerId != -1) {
            TimerWrapper.clearTimeout(this.delayTimerId);   
            this.delayTimerId = -1
        }
        
        if(delay==0)
            callback();
        else
            this.delayTimerId=TimerWrapper.setTimeout(() => {
                    callback();
                    self.delayTimerId=-1;
                }, delay-100);
        
    }

    onClose(){

        if (this.instance.isNoModal){
            let dom=AiDOM.get();
            dom.removeClass(dom.query('body'), 'ai-modal-open');
        }
    }



}