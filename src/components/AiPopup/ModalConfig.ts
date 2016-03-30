import {Injectable} from 'angular2/core';



/**
 * A configuration definition object.
 * Instruction for how to show a modal.
 */
@Injectable()
export class ModalConfig {
    
    anchorName:string=null;

    //mask : string='black';
    mask : string=null;
    
    autoHide:boolean=false;
    
    floating:boolean=false;
    
    x:any='50%';
    
    y:any='20%';

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


    /**
     * Returns true if the config instance supports a given key.
     * @param key
     * @returns {boolean}
     */
    supportsKey(keyCode: number): boolean {
        return (<Array<number>>this.keyboard).indexOf(keyCode) > -1;
    }
}

