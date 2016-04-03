import {Injectable} from 'angular2/core';


export enum AiModalAlign{
    Begin,Center,End
}    

export class AiModalPosition{
    
    offset:any;
    
    align:AiModalAlign;
    
    constructor(offset:any=0,align:AiModalAlign=AiModalAlign.Begin) {
        this.offset=offset;
        this.align=align;
    }


    static get Begin(){
        return new AiModalPosition();
    }

    static get Center(){
        return new AiModalPosition('50%',AiModalAlign.Center);
    }

    static get End(){
        return new AiModalPosition('100%',AiModalAlign.End);
    }

    numberOffset(){
        return Number(this.offset.replace('%','').trim());
    }

    positionLeft(dialog,content,targetElement){
         
        var x=this.offset;
        if(targetElement){
            var left=targetElement.offsetLeft;
            if(typeof this.offset == 'string' && this.offset.indexOf('%') != -1){
                var width=targetElement.offsetWidth;
                var noffset:number=this.numberOffset();
                x=left+ (width * noffset)/100;
                
            }else
                x=left+x;
        }
        
        dialog.style.left=x;
        switch(this.align){
            case AiModalAlign.Begin:
                content.style.left=0;
                break;
            case AiModalAlign.Center:
                content.style.left=-content.offsetWidth /2;
                break;
            case AiModalAlign.End:
                content.style.left=-content.offsetWidth;
                break;
        }
    }

    positionTop(dialog,content,targetElement){
        var y=this.offset;
        if(targetElement){
            var top=targetElement.offsetTop;
            if(typeof this.offset == 'string' && this.offset.indexOf('%') != -1){
                var height=targetElement.offsetHeight;
                var noffset:number=this.numberOffset();
                y=top+ (height * noffset)/100;
                
            }else
                y=top+y;
        }
        
        dialog.style.top=y;            
        switch(this.align){
            case AiModalAlign.Begin:
                content.style.top=0;
                break;
            case AiModalAlign.Center:
                content.style.top=-content.offsetWidth /2;
                break;
            case AiModalAlign.End:
                content.style.top=-content.offsetWidth;
                break;
        }
    }

}

/**
 * A configuration definition object.
 * Instruction for how to show a modal.
 */
@Injectable()
export class AiModalConfig {

    x:AiModalPosition=AiModalPosition.Center;
    
    y:AiModalPosition=AiModalPosition.Begin;

    floating:boolean=false;

    aroundTo:string; // position dialog around to an element

    anchorName:string=null;

    mask : string=null; //null,'white','black'
    
    autoHide:boolean=false;

    trackingSizePosition:boolean=false;    

    /**
     * Keyboard value/s that close the modal.
     * Accepts either a single numeric value or an array of numeric values.
     * A modal closed by a keyboard stroke will result in a 'reject' notification from the promise.
     * Defaults to 27, set `null` implicitly to disable.
     */
    keyboard: Array<number> | number=[27];


    constructor(
        keyboard: Array<number> | number = undefined) {
    }

    get Position(){
        return this.floating ? 'fixed':'absolute';
    }


    /**
     * Returns true if the config instance supports a given key.
     * @param key
     * @returns {boolean}
     */
    supportsKey(keyCode: number): boolean {
        return (<Array<number>>this.keyboard).indexOf(keyCode) > -1;
    }
}

