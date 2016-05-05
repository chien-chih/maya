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

    get isOnlyModal(){
        return this.modal.length == 1;
    }

    get isNoModal(){
        return this.modal.length == 0;
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
        var self=this;
        if (this.dialogRef.instance.beforeClose &&
            this.dialogRef.instance.beforeClose() === true ) return;

        let delay=0;
        if (this.dialogRef.instance.closingDelayTime) 
            delay=this.dialogRef.instance.closingDelayTime();
        
        this.containerRef.instance.beforeClose(delay,function(){
            self.dispose();
        });
        self._resultDefered.resolve(result);
    }

    private dispose() {
        this.containerRef.dispose();
        this.dialogRef.dispose();
    }

    onLoad(){
        if (this.dialogRef.instance.onOpen) this.dialogRef.instance.onOpen();
        this.containerRef.instance.onOpen();
    }

    onUnload(){
        if (this.dialogRef.instance.onClose) this.dialogRef.instance.onClose();
        this.containerRef.instance.onClose();
    }

}