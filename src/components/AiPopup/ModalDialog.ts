import {ModalInstance} from './ModalInstance';


export interface ModalDialog {
    instance: ModalInstance;

    /**
     * Invoked before a modal is dismissed, return true to cancel dismissal.
     */
    beforeDismiss?(): boolean;

    /**
     * Invoked before a modal is closed, return true to cancel closing.
     */
    beforeClose?(): boolean;
} 