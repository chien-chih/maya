import {Component,ElementRef,Renderer} from 'angular2/core';
import {AiControl} from '../AiControl/AiControl';

@Component(AiControl.meta({
    templateUrl:'package:src/components/AiButton/AiButton.html',
    selector: 'ai-button',
    inputs:['type','border'],
    host:{
      '[class.raised]':'type==="raised"',
      '[class.fab]':'type==="fab"',
      '[class.icon]':'type==="icon"',
      '[class.material]':'type==="fab" ||type==="icon"',
      '[class.link]':'!type',
      '[class.left]':'border==="left"',
      '[class.right]':'border==="right"',
    },
}))    
//size:default,small,large
//color:red,green,yellow
export class AiButton extends AiControl{ 
    type:string;
    border:string;
    
    constructor(ele: ElementRef) { 
        super(ele); 
        //var el:any = this.ele.nativeElement;
        //var icon=el.getAttribute('icon');
        //if(icon){
          //el.innerHTML=icon;
        //}
    }
    
    
/*
    onClassNameRebuild(el:any){
  
        this.addClassName('ai-button');
        if(el.getAttribute('type'))
          this.addClassName(el.getAttribute('type')); //raised,fab,icon
        else
          this.addClassName('link')
        this.addClassName(el.getAttribute('border')); //top left bottom right

        var icon=el.getAttribute('icon');
        if(icon)
          el.childNodes[0].innerHTML="<i class='ai-icon'>"+icon+"</i>";
    }
*/




      //[ngClass]="setClasses()"
    /*  
    onMousedown() {
      debugger
      this.isMouseDown = true;
      TimerWrapper.setTimeout(() => {this.isMouseDown = false}, 100);
    }
  
    onFocus() {
      debugger
      this.isKeyboardFocused = !this.isMouseDown;
        this.resetClass();
    }
  
    onBlur() {
      this.isKeyboardFocused = false;
        this.resetClass();
    }

    ngOnInit() {
      
    }    

    constructor(ele: ElementRef) {
        var el:any = ele.nativeElement;
    } 

    host: {
      '(mousedown)': 'onMousedown()',
      '(focus)': 'onFocus()',
      '(blur)': 'onBlur()',
      '[class.ai-button-focus]': 'isMouseDown',
      },


    '[class.raised]': 'type==="raised"',
    '[class.flag]': 'type==="flag"',
    '[class.fab]': 'type==="fab"',
    '[class.link]': 'type==="link"',
    '[class.icon]': 'type==="icon"',

    setClasses() {
      let classes =  { 
        aiButton:true,
        raised: this.type==='raised'
      }
      return classes;
    } 
  
  isMouseDown: boolean = false;
    isMouseDown: boolean = false;
    isKeyboardFocused: boolean = false;


    */
} 
  
   
 
  