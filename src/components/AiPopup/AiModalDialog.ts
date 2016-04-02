import {AiModalInstance} from './AiModalInstance';


export interface AiModalDialog {
    instance: AiModalInstance;

    /**
     * Invoked before a modal is dismissed, return true to cancel dismissal.
     */
    beforeDismiss?(): boolean;

    /**
     * Invoked before a modal is closed, return true to cancel closing.
     */
    beforeClose?(): boolean;
} 