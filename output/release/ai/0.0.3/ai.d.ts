export interface StringValidator {
    isAcceptable(s: string): boolean;
}
export declare class LettersOnlyValidator implements StringValidator {
    isAcceptable(s: string): boolean;
}
export declare class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string): boolean;
}

export declare class HelloWorld {
    yourName: string;
}
