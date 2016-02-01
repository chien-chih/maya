import {Component} from 'angular2/core';
import {bootstrap}    from 'angular2/platform/browser';
import * as ai from 'ai/ai';
import {AiCheckbox} from 'ai/components/aiCheckbox/aiCheckbox';
        

@Component({
    selector: 'checkbox-app',
    template: `
        <ai-checkbox>normal</ai-checkbox><ai-checkbox primary>primary</ai-checkbox><ai-checkbox [disabled]="true">disabled</ai-checkbox>
        <ai-checkbox color="red" [checked]="true" >red</ai-checkbox><ai-checkbox color="green">green</ai-checkbox><ai-checkbox color="yellow">yellow</ai-checkbox>
        <br/>
        <ai-checkbox size='small'>small</ai-checkbox><ai-checkbox>normal</ai-checkbox><ai-checkbox size='large'>large</ai-checkbox>
        `
    ,directives: [AiCheckbox]  
})
export class AppComponent {  
    
}              

bootstrap(AppComponent);  