declare module ai {
    interface StringValidator {
        isAcceptable(s: string): boolean;
    }
}

declare module ai {
    class ZipCodeValidator implements StringValidator {
        isAcceptable(s: string): boolean;
    }
}

declare module ai {
    class LettersOnlyValidator implements StringValidator {
        isAcceptable(s: string): boolean;
    }
}
