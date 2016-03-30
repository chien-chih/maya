import {Component,ElementRef,Attribute} from 'angular2/core';
import {AiControl} from '../AiControl/AiControl';
import {ModalInstance} from './ModalInstance';
import {Modal} from './Modal';


@Component({
    selector: 'ai-modal-container',
    host: {
        '[class]': 'getClass()',
        '[style.visibility]': 'visibility',

//        '[style.position]': 'position',
  //      '[style.height]': 'height',
    //    '[style.width]': 'width',
      //  '[style.top]': 'top',
        //'[style.left]': 'left',
//        '[style.right]': 'right',
  //      '[style.bottom]': 'bottom',
        'tabindex': '0',
        'role': 'dialog',
    //    'style': 'display: block',
//        '[style.position]': 'positionString',
        '(body:keydown)': 'documentKeypress($event)',
        '(click)': 'onClick()'

    },
    template:'<div class="ai-modal-dialog"><i #modalDialog></i></div>'
    //<div style="display: none" #modalDialog></div>
 //<div class="modal-dialog" (click)="onContainerClick($event)" style="display: block">
 //
})
export class AiModalContainer extends AiControl{
    public visibility:string='hidden';
    
    public position: string;
    public height: string;
    public width: string;
    public top: string;
    public left: string;
    public right: string;
    public bottom: string;

    public positionString: string;
    private modal: Modal;


    constructor(private instance: ModalInstance,ele: ElementRef) {
        super(ele); 
        
        
        
/*
        if (!instance.inElement) {
            this.position = this.width = this.height = null;
            this.top = this.left = this.right = this.bottom = null;
        } else {
            this.position = 'absolute';
            this.height = '100%';
            this.width = '100%';
            this.top = this.left = this.right = this.bottom = '0';
        }
        
        if (!instance.inElement) {
            this.positionString = null;
        } else {
            this.positionString = 'absolute';
        }
*/
    }
    
        onContainerClick($event: any) {
        $event.stopPropagation();
    }

    getClass():string{
        var cls:string='';

        if(this.instance.config.mask != null)
            cls+=' mask '+this.instance.config.mask;

        if(this.instance.config.autoHide)
            cls+=' autohide';

        return cls;
    }

    resetPosition() {
        var dialog=this.nativeElement.childNodes[0];
        var content=dialog.childNodes[1];
        var config=this.instance.config;
        var position = config.floating ? 'fixed' : 'absolute';

        var x=config.x;
        if (typeof x == 'string' && x.indexOf('%') != -1) {
            dialog.style.position='fixed';
            dialog.style.left=x;            
            content.style.position='relative';
            content.style.left=-content.clientWidth /2;            
        }
        else {
            dialog.style.position=position;
            dialog.style.left=x;            
        }

        var y=config.y;
        if (typeof y == 'string' && y.indexOf('%') != -1) {
            dialog.style.position='fixed';
            dialog.style.top=y;            
            content.style.position='relative';
            content.style.top=-content.clientHeight /2;            
        }
        else {
            dialog.style.position=position;
            dialog.style.left=y;            
        }
        
        this.visibility=null;
    }


    onClick() {
        //return !this.instance.config.isBlocking && this.instance.dismiss();
    }

    documentKeypress(event: KeyboardEvent) {
        // check that this modal is the last in the stack.
        if (this.modal.position(this.instance) !== this.modal.length - 1) return;

        if (this.instance.config.supportsKey(event.keyCode)) {
            this.instance.dismiss();
        }
    }
    
    onLoad(){
        var that=this;
        window.setTimeout(function () {
            that.resetPosition();
        },1);
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