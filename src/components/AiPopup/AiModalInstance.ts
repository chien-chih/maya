import { ComponentRef } from 'angular2/core';
import {PromiseWrapper} from 'angular2/src/facade/async';

import {AiModalConfig} from './AiModalConfig';
import {AiModal} from './AiModal';

/**
 * API to an open modal window.
 */
export class AiModalInstance {


    private _resultDefered: any;
    
    dialogRef: ComponentRef;
    
    containerRef: ComponentRef;

    inElement: boolean;

    constructor(public config: AiModalConfig,private modal:AiModal) {
        this._resultDefered = PromiseWrapper.completer();
    }

    get isTopModal(){
        return this.modal.position(this) == this.modal.length - 1;
    }

    /**
     * A Promise that is resolved on a close event and rejected on a dismiss event.
     * @returns {Promise<T>|any|*|Promise<any>}
     */
    get result(): Promise<any> {
        return this._resultDefered.promise;
    }

    /**
     *  Close the modal with a return value, i.e: result.
     */
    close(result: any = null) {
        if ( this.dialogRef.instance.beforeClose &&
                this.dialogRef.instance.beforeClose() === true ) return;
        this.dispose();
        this._resultDefered.resolve(result);
    }

    /**
     *  Close the modal without a return value, i.e: cancelled.
     *  This call is automatically invoked when a user either:
     *  - Presses an exit keyboard key (if configured).
     *  - Clicks outside of the modal window (if configured).
     *  Usually, dismiss represent a Cancel button or a X button.
     */
    dismiss() {
        if ( this.dialogRef.instance.beforeDismiss &&
            this.dialogRef.instance.beforeDismiss() === true ) return;
        this.dispose();
        this._resultDefered.reject();
    }

    private dispose() {
        this.containerRef.dispose();
        this.dialogRef.dispose();
    }
    
    onLoad(){
        this.containerRef.instance.onLoad();
    }
    
    onUnload(){
        this.containerRef.instance.onUnload();
    }

}