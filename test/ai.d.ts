export interface StringValidator {
    isAcceptable(s: string): boolean;
}

import aitype = require('./aitype');
export declare class LettersOnlyValidator implements aitype.StringValidator {
    isAcceptable(s: string): boolean;
}
export declare class ZipCodeValidator implements aitype.StringValidator {
    isAcceptable(s: string): boolean;
}

