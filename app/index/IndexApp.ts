import {Component} from 'angular2/core';
import {bootstrap}    from 'angular2/platform/browser';
import {AiApp} from 'ai/components/AiApp/AiApp';
import {AiCheckbox} from 'ai/components/AiCheckbox/AiCheckbox';
import {AiToggle} from 'ai/components/AiToggle/AiToggle';

@Component(AiApp.meta({
    selector: 'checkbox-app',
    template: `
        <ai-toggle up='star_border' down='star'></ai-toggle> <ai-toggle up='star_border' down='star' primary></ai-toggle>
        <ai-toggle up='favorite_border' down='favorite'></ai-toggle><ai-toggle up='favorite_border' down='favorite' color='red'></ai-toggle>
        <ai-toggle large up='zoom_in' down='zoom_out'></ai-toggle> <ai-toggle small up='videocam' down='videocam_off'></ai-toggle>
    
        <ai-toggle>normal</ai-toggle><ai-toggle primary>primary</ai-toggle><ai-toggle [disabled]="true">disabled</ai-toggle>
        <ai-toggle large>large</ai-toggle><ai-toggle small>small</ai-toggle>
        <ai-toggle red [value]="true" >red</ai-toggle><ai-toggle green>green</ai-toggle><ai-toggle yellow>yellow</ai-toggle>
        <br/>
        <ai-checkbox>normal</ai-checkbox><ai-checkbox primary>primary</ai-checkbox><ai-checkbox [disabled]="true">disabled</ai-checkbox>
        <ai-checkbox red [value]="true" >red</ai-checkbox><ai-checkbox green>green</ai-checkbox><ai-checkbox yellow>yellow</ai-checkbox>
        <br/>
        <ai-checkbox small>small</ai-checkbox><ai-checkbox>normal</ai-checkbox><ai-checkbox large>large</ai-checkbox>
        `,
    directives: [AiCheckbox,AiToggle]  
}))
export class AppComponent  extends AiApp{  
    
}              

bootstrap(AppComponent);  