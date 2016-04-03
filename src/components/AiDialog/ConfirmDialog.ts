import {Component, provide, ElementRef, Injector} from 'angular2/core';
import {NgIf} from 'angular2/common';
import {AiModalInstance,AiModalDialog} from '../Ai';

export class ConfirmContext {
    constructor(
        public title: string = '',
        public message: string = '',
        public yesText: string = 'YES',
        public noText: string = 'NO'
    ) {}
}

/**
 * A 2 state bootstrap modal window, representing 2 possible answer, true/false.
 */
@Component({
    selector: 'modal-content',
    directives: [ NgIf ],
    /* tslint:disable */ template:
    `<div class="modal-header" style='background:#fff;border:solid 2px red;width:300px;height:100px'>
        <h3 class="modal-title">{{context.title}}</h3>
        </div>
        <div class="modal-body">{{context.body}}</div>
        <div class="modal-footer">
            <button class="btn btn-primary" (click)="ok($event)">{{context.yesText}}</button>
            <button *ngIf="!context.hideNo" class="btn btn-warning" (click)="cancel()">{{context.noText}}</button>
        </div>`
})
export class ConfirmDialog implements AiModalDialog {
    

    constructor(public instance: AiModalInstance,private context: ConfirmContext) {
    }

    ok($event: any) {
        $event.stopPropagation();
        this.instance.close(true);
    }

    cancel() {
        this.instance.dismiss();
    }
    
}