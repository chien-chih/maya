System.register([], function(exports_1) {
    var lettersRegexp, LettersOnlyValidator, numberRegexp, ZipCodeValidator;
    return {
        setters:[],
        execute: function() {
            lettersRegexp = /^[A-Za-z]+$/;
            LettersOnlyValidator = (function () {
                function LettersOnlyValidator() {
                }
                LettersOnlyValidator.prototype.isAcceptable = function (s) {
                    return lettersRegexp.test(s);
                };
                return LettersOnlyValidator;
            })();
            exports_1("LettersOnlyValidator", LettersOnlyValidator);
            numberRegexp = /^[0-9]+$/;
            ZipCodeValidator = (function () {
                function ZipCodeValidator() {
                }
                ZipCodeValidator.prototype.isAcceptable = function (s) {
                    return s.length === 5 && numberRegexp.test(s);
                };
                return ZipCodeValidator;
            })();
            exports_1("ZipCodeValidator", ZipCodeValidator);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFpLnRzIl0sIm5hbWVzIjpbIkxldHRlcnNPbmx5VmFsaWRhdG9yIiwiTGV0dGVyc09ubHlWYWxpZGF0b3IuY29uc3RydWN0b3IiLCJMZXR0ZXJzT25seVZhbGlkYXRvci5pc0FjY2VwdGFibGUiLCJaaXBDb2RlVmFsaWRhdG9yIiwiWmlwQ29kZVZhbGlkYXRvci5jb25zdHJ1Y3RvciIsIlppcENvZGVWYWxpZGF0b3IuaXNBY2NlcHRhYmxlIl0sIm1hcHBpbmdzIjoiO1FBS0ksYUFBYSx3QkFPYixZQUFZOzs7O1lBUFosYUFBYSxHQUFHLGFBQWEsQ0FBQztZQUNsQztnQkFBQUE7Z0JBSUFDLENBQUNBO2dCQUhHRCwyQ0FBWUEsR0FBWkEsVUFBYUEsQ0FBU0E7b0JBQ2xCRSxNQUFNQSxDQUFDQSxhQUFhQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDakNBLENBQUNBO2dCQUNMRiwyQkFBQ0E7WUFBREEsQ0FKQSxBQUlDQSxJQUFBO1lBSkQsdURBSUMsQ0FBQTtZQUVHLFlBQVksR0FBRyxVQUFVLENBQUM7WUFDOUI7Z0JBQUFHO2dCQUlBQyxDQUFDQTtnQkFIR0QsdUNBQVlBLEdBQVpBLFVBQWFBLENBQVNBO29CQUNsQkUsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsTUFBTUEsS0FBS0EsQ0FBQ0EsSUFBSUEsWUFBWUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ2xEQSxDQUFDQTtnQkFDTEYsdUJBQUNBO1lBQURBLENBSkEsQUFJQ0EsSUFBQTtZQUpELCtDQUlDLENBQUEiLCJmaWxlIjoiYWkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBpbnRlcmZhY2UgU3RyaW5nVmFsaWRhdG9yIHtcbiAgICBpc0FjY2VwdGFibGUoczogc3RyaW5nKTogYm9vbGVhbjtcbn0gICAgXG5cbnZhciBsZXR0ZXJzUmVnZXhwID0gL15bQS1aYS16XSskLztcbmV4cG9ydCBjbGFzcyBMZXR0ZXJzT25seVZhbGlkYXRvciBpbXBsZW1lbnRzIFN0cmluZ1ZhbGlkYXRvciB7XG4gICAgaXNBY2NlcHRhYmxlKHM6IHN0cmluZykgeyAgICAgICAgXG4gICAgICAgIHJldHVybiBsZXR0ZXJzUmVnZXhwLnRlc3Qocyk7XG4gICAgfVxufVxuXG52YXIgbnVtYmVyUmVnZXhwID0gL15bMC05XSskLztcbmV4cG9ydCBjbGFzcyBaaXBDb2RlVmFsaWRhdG9yIGltcGxlbWVudHMgU3RyaW5nVmFsaWRhdG9yIHtcbiAgICBpc0FjY2VwdGFibGUoczogc3RyaW5nKSB7ICAgICAgICBcbiAgICAgICAgcmV0dXJuIHMubGVuZ3RoID09PSA1ICYmIG51bWJlclJlZ2V4cC50ZXN0KHMpO1xuICAgIH0gIFxufSAgICAgXG5cbiBcblxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
