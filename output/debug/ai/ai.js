System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
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
            }());
            exports_1("LettersOnlyValidator", LettersOnlyValidator);
            numberRegexp = /^[0-9]+$/;
            ZipCodeValidator = (function () {
                function ZipCodeValidator() {
                }
                ZipCodeValidator.prototype.isAcceptable = function (s) {
                    return s.length === 5 && numberRegexp.test(s);
                };
                return ZipCodeValidator;
            }());
            exports_1("ZipCodeValidator", ZipCodeValidator);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztRQUtJLGFBQWEsd0JBT2IsWUFBWTs7OztZQVBaLGFBQWEsR0FBRyxhQUFhLENBQUM7WUFDbEM7Z0JBQUE7Z0JBSUEsQ0FBQztnQkFIRywyQ0FBWSxHQUFaLFVBQWEsQ0FBUztvQkFDbEIsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pDLENBQUM7Z0JBQ0wsMkJBQUM7WUFBRCxDQUpBLEFBSUMsSUFBQTtZQUpELHVEQUlDLENBQUE7WUFFRyxZQUFZLEdBQUcsVUFBVSxDQUFDO1lBQzlCO2dCQUFBO2dCQUlBLENBQUM7Z0JBSEcsdUNBQVksR0FBWixVQUFhLENBQVM7b0JBQ2xCLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNsRCxDQUFDO2dCQUNMLHVCQUFDO1lBQUQsQ0FKQSxBQUlDLElBQUE7WUFKRCwrQ0FJQyxDQUFBIiwiZmlsZSI6ImFpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgaW50ZXJmYWNlIFN0cmluZ1ZhbGlkYXRvciB7XG4gICAgaXNBY2NlcHRhYmxlKHM6IHN0cmluZyk6IGJvb2xlYW47XG59ICAgIFxuXG52YXIgbGV0dGVyc1JlZ2V4cCA9IC9eW0EtWmEtel0rJC87XG5leHBvcnQgY2xhc3MgTGV0dGVyc09ubHlWYWxpZGF0b3IgaW1wbGVtZW50cyBTdHJpbmdWYWxpZGF0b3Ige1xuICAgIGlzQWNjZXB0YWJsZShzOiBzdHJpbmcpIHsgICAgICAgIFxuICAgICAgICByZXR1cm4gbGV0dGVyc1JlZ2V4cC50ZXN0KHMpO1xuICAgIH1cbn1cblxudmFyIG51bWJlclJlZ2V4cCA9IC9eWzAtOV0rJC87XG5leHBvcnQgY2xhc3MgWmlwQ29kZVZhbGlkYXRvciBpbXBsZW1lbnRzIFN0cmluZ1ZhbGlkYXRvciB7XG4gICAgaXNBY2NlcHRhYmxlKHM6IHN0cmluZykgeyAgICAgICAgXG4gICAgICAgIHJldHVybiBzLmxlbmd0aCA9PT0gNSAmJiBudW1iZXJSZWdleHAudGVzdChzKTtcbiAgICB9ICBcbn0gICAgICBcblxuIFxuXG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
