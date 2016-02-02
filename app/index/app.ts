import {Component} from 'angular2/core';
import {bootstrap}    from 'angular2/platform/browser';
import {AiApp} from 'ai/components/AiApp/AiApp';
import {AiCheckbox} from 'ai/components/AiCheckbox/AiCheckbox';
import {AiToggle} from 'ai/components/AiToggle/AiToggle';

@Component(AiApp.meta({
    selector: 'checkbox-app',
    template: `
        <ai-toggle>Hello world</ai-toggle>
        <br/>
        <ai-checkbox>normal</ai-checkbox><ai-checkbox primary>primary</ai-checkbox><ai-checkbox [disabled]="true">disabled</ai-checkbox>
        <ai-checkbox color="red" [value]="true" >red</ai-checkbox><ai-checkbox color="green">green</ai-checkbox><ai-checkbox color="yellow">yellow</ai-checkbox>
        <br/>
        <ai-checkbox size='small'>small</ai-checkbox><ai-checkbox>normal</ai-checkbox><ai-checkbox size='large'>large</ai-checkbox>
        `,
    directives: [AiCheckbox,AiToggle]  
}))
export class AppComponent {  
    
}              

bootstrap(AppComponent);  