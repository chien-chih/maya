import {Component} from 'angular2/core';
import {bootstrap}    from 'angular2/platform/browser';
import * as ai from 'ai/ai';
import * as sample from 'ai/sample/sample';
import {AiButton} from 'ai/components/aiButton/aiButton';
import {AiIcon} from 'ai/components/aiIcon/aiIcon';

@Component({
    selector: 'button-app',
    template: `
        <ai-icon>android</ai-icon>
        <br/>

        <ai-button type='icon' icon='menu'></ai-button><ai-button type='icon' size='large' icon='menu'></ai-button>
        <ai-button type='icon' size='small' icon='menu'></ai-button><ai-button type='icon' [disabled]="true" icon='menu'></ai-button>

        <ai-button type='icon' primary icon='menu'></ai-button><ai-button size='large' type='icon' primary icon='menu'></ai-button>
        <ai-button size='small' type='icon' primary icon='menu'></ai-button><ai-button [disabled]="true" type='icon' primary icon='menu'></ai-button>

        <ai-button type='icon' color='red' icon='replay'></ai-button><ai-button size='large' type='icon' color='red' icon='replay'></ai-button>
        <ai-button size='small' type='icon' color='red' icon='replay'></ai-button><ai-button [disabled]="true" type='icon' color='red' icon='replay'></ai-button>
        
        <ai-button type='icon' color='green' icon='mic'></ai-button><ai-button size='large' type='icon' color='green' icon='mic'></ai-button>
        <ai-button size='small' type='icon' color='green' icon='mic'></ai-button><ai-button [disabled]="true" type='icon' color='green' icon='mic'></ai-button>

        <ai-button type='icon' color='yellow' icon='hd'></ai-button><ai-button size='large' type='icon' color='yellow' icon='hd'></ai-button>
        <ai-button size='small' type='icon' color='yellow' icon='hd'></ai-button><ai-button [disabled]="true" type='icon' color='yellow' icon='hd'></ai-button>

        <br/>

        <ai-button type='fab' icon='add'></ai-button><ai-button size='large' type='fab' icon='add'></ai-button>
        <ai-button size='small' type='fab' icon='add'></ai-button><ai-button [disabled]="true" type='fab' icon='add'></ai-button>
        
        <ai-button type='fab' primary icon='add'></ai-button><ai-button size='large' type='fab' primary icon='add'></ai-button>
        <ai-button size='small' type='fab' primary icon='add'></ai-button><ai-button [disabled]="true" type='fab' primary icon='add'></ai-button>

        <ai-button type='fab' color='red' icon='done'></ai-button><ai-button size='large' type='fab' color='red' icon='done'></ai-button>
        <ai-button size='small' type='fab' color='red' icon='done'></ai-button><ai-button [disabled]="true" type='fab' color='red' icon='done'></ai-button>
        
        <ai-button type='fab' color='green' icon='autorenew'></ai-button><ai-button size='large' type='fab' color='green' icon='autorenew'></ai-button>
        <ai-button size='small' type='fab' color='green' icon='autorenew'></ai-button><ai-button [disabled]="true" type='fab' color='green' icon='autorenew'></ai-button>

        <ai-button type='fab' color='yellow' icon='airplay'></ai-button><ai-button size='large' type='fab' color='yellow' icon='airplay'></ai-button>
        <ai-button size='small' type='fab' color='yellow' icon='airplay'></ai-button><ai-button [disabled]="true" type='fab' color='yellow' icon='airplay'></ai-button>
        <br/>

        <ai-button>Cancel</ai-button><ai-button primary border='left'>OK</ai-button>
        <ai-button size='large'>Cancel</ai-button><ai-button size='large' primary border='left'>OK</ai-button>
        <ai-button size='small'>Cancel</ai-button><ai-button size='small' primary border='left'>OK</ai-button>
        <br>
        <ai-button>normal</ai-button><ai-button size='large'>large</ai-button>
        <ai-button size='small'>small</ai-button><ai-button [disabled]="true">disabled</ai-button>

        <ai-button primary>normal</ai-button><ai-button size='large' primary>large</ai-button>
        <ai-button size='small' primary>small</ai-button><ai-button [disabled]="true" primary>disabled</ai-button>

        <ai-button color='red'>normal</ai-button><ai-button size='large' color='red'>large</ai-button>
        <ai-button size='small' color='red'>small</ai-button><ai-button [disabled]="true" color='red'>disabled</ai-button>
        
        <ai-button color='green'>normal</ai-button><ai-button size='large' color='green'>large</ai-button>
        <ai-button size='small' color='green'>small</ai-button><ai-button [disabled]="true" color='green'>disabled</ai-button>

        <ai-button color='yellow'>normal</ai-button><ai-button size='large' color='yellow'>large</ai-button>
        <ai-button size='small'  color='yellow'>small</ai-button><ai-button [disabled]="true" color='yellow'>disabled</ai-button>
        <br/>

        <ai-button type='raised'>normal</ai-button><ai-button size='large' type='raised'>large</ai-button>
        <ai-button size='small' type='raised'>small</ai-button><ai-button [disabled]="true" type='raised'>disabled</ai-button>
        
        <ai-button type='raised' primary>normal</ai-button><ai-button size='large' type='raised' primary>large</ai-button>
        <ai-button size='small' type='raised' primary>small</ai-button><ai-button [disabled]="true" type='raised' primary>disabled</ai-button>

        <ai-button type='raised' color='red'>normal</ai-button><ai-button size='large' type='raised' color='red'>large</ai-button>
        <ai-button size='small' type='raised' color='red'>small</ai-button><ai-button [disabled]="true" type='raised' color='red'>disabled</ai-button>
        
        <ai-button type='raised' color='green'>normal</ai-button><ai-button size='large' type='raised' color='green'>large</ai-button>
        <ai-button size='small' type='raised' color='green'>small</ai-button><ai-button [disabled]="true" type='raised' color='green'>disabled</ai-button>

        <ai-button type='raised' color='yellow'>normal</ai-button><ai-button size='large' type='raised' color='yellow'>large</ai-button>
        <ai-button size='small' type='raised' color='yellow'>small</ai-button><ai-button [disabled]="true" type='raised' color='yellow'>disabled</ai-button>
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
})
export class AppComponent { 
    
    onClick() {
        var strings = ['Hello', '98052', 10];
        var l = new ai.LettersOnlyValidator();
        if(l.isAcceptable('hello'))
            alert("true");
            //else
            //alert("false");
  }  
}              

bootstrap(AppComponent);  