import {Injectable} from 'angular2/core';


export enum AiModalAlign{
    Begin,Center,End
}

export class AiModalPosition{

    constructor(public value:any=0
        ,public align:AiModalAlign=AiModalAlign.Begin
        ,public offset:number=0) {
    }

    static Begin(offset:number=0){
        return new AiModalPosition(0,AiModalAlign.Begin,offset);
    }

    static Center(offset:number=0){
        return new AiModalPosition('50%',AiModalAlign.Center,offset);
    }

    static End(offset:number=0){
        return new AiModalPosition('100%',AiModalAlign.End,offset);
    }

    numberValue(){
        return Number(this.value.replace('%','').trim());
    }

    positionLeft(dialog,content,targetElement){
        var x=this.value;
        if(targetElement){
            var left=targetElement.offsetLeft;
            if(typeof this.value == 'string' && this.value.indexOf('%') != -1){
                var width=targetElement.offsetWidth;
                var nvalue:number=this.numberValue();
                x=left+ (width * nvalue)/100;

            }else
                x=left+x;
        }

        dialog.style.left=x;
        let contentLeft=0;
        switch(this.align){
            //case AiModalAlign.Begin:
              //  contentLeft=0;
                //break;
            case AiModalAlign.Center:
                contentLeft=-content.offsetWidth /2;
                break;
            case AiModalAlign.End:
                contentLeft=-content.offsetWidth;
                break;
        }
        content.style.left=contentLeft+this.offset;
    }

    positionTop(dialog,content,targetElement){
        var y=this.value;
        if(targetElement){
            var top=targetElement.offsetTop;
            if(typeof this.value == 'string' && this.value.indexOf('%') != -1){
                var height=targetElement.offsetHeight;
                var nvalue:number=this.numberValue();
                y=top+ (height * nvalue)/100;

            }else
                y=top+y;
        }

        dialog.style.top=y;
        let contentTop=0;
        switch(this.align){
            //case AiModalAlign.Begin:
              //  contentTop=0;
                //break;
            case AiModalAlign.Center:
                contentTop=-content.offsetWidth /2;
                break;
            case AiModalAlign.End:
                contentTop=-content.offsetWidth;
                break;
        }
        content.style.top=contentTop+this.offset;
    }

}

/**
 * A configuration definition object.
 * Instruction for how to show a modal.
 */
@Injectable()
export class AiModalConfig {

    x:AiModalPosition=AiModalPosition.Center();

    y:AiModalPosition=AiModalPosition.Begin();

    width:string=null;

    height:string=null;

    floating:boolean=false;

    aroundTo:string; // position dialog around to an element

    anchorName:string=null;

    mask : string=null; //null,'white','black'

    autoHide:boolean=false;

    ESCHide:boolean=true;

    TimeHide:number=0;//seconds to hide

    trackingSizePosition:boolean=false;

    animation:string=null;//SlideTop,FadeIn

    get Position(){
        return this.floating ? 'fixed':'absolute';
    }

}

