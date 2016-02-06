import {Component,ElementRef} from 'angular2/core';
import {bootstrap}    from 'angular2/platform/browser';
import * as ai from 'ai/ai';
import * as sample from 'ai/sample/sample';
import {AiButton} from 'ai/components/AiButton/AiButton';
import {AiIcon} from 'ai/components/AiIcon/AiIcon';
import {AiApp} from 'ai/components/AiApp/AiApp';

@Component(AiApp.meta({
    selector: 'button-app',
    template: `
        <ai-icon>android</ai-icon>
        <br/>
        <ai-button >Cancel</ai-button><ai-button  primary leftborder>OK</ai-button>
        <ai-button tabindex='-1' large>Cancel</ai-button><ai-button  large primary leftborder>OK</ai-button>
        <ai-button  small>Cancel</ai-button><ai-button  small primary leftborder>OK</ai-button>
        <br>
        <ai-button>Cancel</ai-button><ai-button  large>large</ai-button>
        <ai-button  small>small</ai-button><ai-button  [disabled]="true">disabled</ai-button>

        <ai-button  primary>normal</ai-button><ai-button  large primary>large</ai-button>
        <ai-button  small primary>small</ai-button><ai-button  [disabled]="true" primary>disabled</ai-button>

        <ai-button  red>normal</ai-button><ai-button  large red>large</ai-button>
        <ai-button  small red>small</ai-button><ai-button  [disabled]="true" red>disabled</ai-button>
        
        <ai-button  green>normal</ai-button><ai-button  large green>large</ai-button>
        <ai-button  small green>small</ai-button><ai-button  [disabled]="true" green>disabled</ai-button>

        <ai-button  yellow>normal</ai-button><ai-button  large yellow>large</ai-button>
        <ai-button  small  yellow>small</ai-button><ai-button  [disabled]="true" yellow>disabled</ai-button>
        <br/>
        
        
        <ai-button icon>menu</ai-button><ai-button icon large>menu</ai-button>
        <ai-button icon small>menu</ai-button><ai-button icon [disabled]="true">menu</ai-button>

        <ai-button icon primary>menu</ai-button><ai-button large icon primary>menu</ai-button>
        <ai-button small icon primary>menu</ai-button><ai-button [disabled]="true" icon primary>menu</ai-button>

        <ai-button icon red>replay</ai-button><ai-button large icon red>replay</ai-button>
        <ai-button small icon red>replay</ai-button><ai-button [disabled]="true" icon red>replay</ai-button>
        
        <ai-button icon green>mic</ai-button><ai-button large icon green>mic</ai-button>
        <ai-button small icon green>mic</ai-button><ai-button [disabled]="true" icon green>mic</ai-button>

        <ai-button icon yellow>hd</ai-button><ai-button large icon yellow>hd</ai-button>
        <ai-button small icon yellow>hd</ai-button><ai-button [disabled]="true" icon yellow>hd</ai-button>

        <br/>

        <ai-button fab>add</ai-button><ai-button large fab>add</ai-button>
        <ai-button small fab>add</ai-button><ai-button [disabled]="true" fab>add</ai-button>
        
        <ai-button fab primary>add</ai-button><ai-button large fab primary>add</ai-button>
        <ai-button small fab primary>add</ai-button><ai-button [disabled]="true" fab primary>add</ai-button>

        <ai-button fab red>done</ai-button><ai-button large fab red>done</ai-button>
        <ai-button small fab red>done</ai-button><ai-button [disabled]="true" fab red>done</ai-button>
        
        <ai-button fab green>autorenew</ai-button><ai-button large fab green>autorenew</ai-button>
        <ai-button small fab green>autorenew</ai-button><ai-button [disabled]="true" fab green>autorenew</ai-button>

        <ai-button fab yellow>airplay</ai-button><ai-button large fab yellow>airplay</ai-button>
        <ai-button small fab yellow>airplay</ai-button><ai-button [disabled]="true" fab yellow>airplay</ai-button>
        <br/>

        <ai-button link>Cancel</ai-button><ai-button link primary leftborder>OK</ai-button>
        <ai-button link large>Cancel</ai-button><ai-button link large primary leftborder>OK</ai-button>
        <ai-button link small>Cancel</ai-button><ai-button link small primary leftborder>OK</ai-button>
        <br>
        <ai-button link>link</ai-button><ai-button link large>large</ai-button>
        <ai-button link small>small</ai-button><ai-button link [disabled]="true">disabled</ai-button>

        <ai-button link primary>normal</ai-button><ai-button link large primary>large</ai-button>
        <ai-button link small primary>small</ai-button><ai-button link [disabled]="true" primary>disabled</ai-button>

        <ai-button link red>normal</ai-button><ai-button link large red>large</ai-button>
        <ai-button link small red>small</ai-button><ai-button link [disabled]="true" red>disabled</ai-button>
        
        <ai-button link green>normal</ai-button><ai-button link large green>large</ai-button>
        <ai-button link small green>small</ai-button><ai-button link [disabled]="true" green>disabled</ai-button>

        <ai-button link yellow>normal</ai-button><ai-button link large yellow>large</ai-button>
        <ai-button link small  yellow>small</ai-button><ai-button link [disabled]="true" yellow>disabled</ai-button>
        <br/>

        <ai-button raised (onclick)='onClick()'>normal</ai-button><ai-button large raised>large</ai-button>
        <ai-button small raised>small</ai-button><ai-button [disabled]="true" raised (onclick)='onClick()'>disabled</ai-button>
        
        <ai-button raised primary>normal</ai-button><ai-button large raised primary>large</ai-button>
        <ai-button small raised primary>small</ai-button><ai-button [disabled]="true" raised primary>disabled</ai-button>

        <ai-button raised red>normal</ai-button><ai-button large raised red>large</ai-button>
        <ai-button small raised red>small</ai-button><ai-button [disabled]="true" raised red>disabled</ai-button>
        
        <ai-button raised green>normal</ai-button><ai-button large raised green>large</ai-button>
        <ai-button small raised green>small</ai-button><ai-button [disabled]="true" raised green>disabled</ai-button>

        <ai-button raised yellow>normal</ai-button><ai-button large raised yellow>large</ai-button>
        <ai-button small raised yellow>small</ai-button><ai-button [disabled]="true" raised yellow>disabled</ai-button>
        `

/*
    template: `
        <ai-button>normal</ai-button><ai-button [size]="'large'">large</ai-button><ai-button [size]="'small'">small</ai-button>
        <br/>
        
        
        <br/>
        <hello-world>Loading...</hello-world><h1 class="student main">My First Angular 2 App</h1><br><button  (click)="onClick()">click</button>
        `
        */
    ,directives: [AiButton,AiIcon]
}))
export class AppComponent extends AiApp{ 

    constructor(ele: ElementRef) {  
        super(ele); 
    }

    isEventSupported(eventName){
      var TAGNAMES = {
        'select':'input','change':'input',
        'submit':'form','reset':'form',
        'error':'img','load':'img','abort':'img'
      }

        var el = document.createElement(TAGNAMES[eventName] || 'div');
        eventName = 'on' + eventName;
        var isSupported = (eventName in el);
        if (!isSupported) {
          el.setAttribute(eventName, 'return;');
          isSupported = typeof el[eventName] == 'function';
        }
        el = null;
        return isSupported;
      
    }
    i:number=0;
    onClick() {
        //alert('mouseout:'+this.isEventSupported('mouseout'));
        this.i=this.i +1;
        console.log(this.i.toString());

        //var strings = ['Hello', '98052', 10];
        //var l = new ai.LettersOnlyValidator();
        //if(l.isAcceptable('hello'))
           // alert("true");
            //else
            //alert("false");
  }  
}              

bootstrap(AppComponent);  