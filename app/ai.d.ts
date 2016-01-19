declare module ai {
    interface StringValidator {
        isAcceptable(s: string): boolean;
    }
    class LettersOnlyValidator implements StringValidator {
        isAcceptable(s: string): boolean;
    }
    class ZipCodeValidator implements StringValidator {
        isAcceptable(s: string): boolean;
    }
}
