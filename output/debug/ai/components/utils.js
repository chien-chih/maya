System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var StringChain;
    return {
        setters:[],
        execute: function() {
            StringChain = (function () {
                function StringChain(current) {
                    this.current = current;
                }
                StringChain.prototype.add = function (text) {
                    text = text ? ' ' + text.trim() : '';
                    if (this.current.indexOf(text) == -1)
                        this.current += text;
                    return this.toString();
                };
                StringChain.prototype.remove = function (text) {
                    text = text ? text.trim() : '';
                    this.current = this.current.replace(text, '').replace('  ', ' ');
                    return this.toString();
                };
                StringChain.prototype.toString = function () {
                    return this.current.trim();
                };
                StringChain.prototype.assign = function (text) {
                    this.current = text;
                };
                return StringChain;
            }());
            exports_1("StringChain", StringChain);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztZQUFBO2dCQUVJLHFCQUFvQixPQUFjO29CQUFkLFlBQU8sR0FBUCxPQUFPLENBQU87Z0JBQ2xDLENBQUM7Z0JBRUQseUJBQUcsR0FBSCxVQUFJLElBQVc7b0JBRVgsSUFBSSxHQUFDLElBQUksR0FBQyxHQUFHLEdBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQztvQkFDL0IsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7d0JBQ2hDLElBQUksQ0FBQyxPQUFPLElBQUUsSUFBSSxDQUFDO29CQUN2QixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUMzQixDQUFDO2dCQUVELDRCQUFNLEdBQU4sVUFBTyxJQUFXO29CQUNkLElBQUksR0FBQyxJQUFJLEdBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQztvQkFDM0IsSUFBSSxDQUFDLE9BQU8sR0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksRUFBQyxHQUFHLENBQUMsQ0FBQztvQkFDN0QsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDM0IsQ0FBQztnQkFFRCw4QkFBUSxHQUFSO29CQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUMvQixDQUFDO2dCQUVELDRCQUFNLEdBQU4sVUFBTyxJQUFXO29CQUNkLElBQUksQ0FBQyxPQUFPLEdBQUMsSUFBSSxDQUFDO2dCQUN0QixDQUFDO2dCQUVMLGtCQUFDO1lBQUQsQ0EzQkEsQUEyQkMsSUFBQTtZQTNCRCxxQ0EyQkMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL3V0aWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFN0cmluZ0NoYWluIHsgXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGN1cnJlbnQ6c3RyaW5nKXtcbiAgICB9IFxuXG4gICAgYWRkKHRleHQ6c3RyaW5nKTpzdHJpbmd7XG4gICAgICAgIFxuICAgICAgICB0ZXh0PXRleHQ/JyAnK3RleHQudHJpbSgpIDogJyc7XG4gICAgICAgIGlmKHRoaXMuY3VycmVudC5pbmRleE9mKHRleHQpID09IC0xKVxuICAgICAgICAgICAgdGhpcy5jdXJyZW50Kz10ZXh0O1xuICAgICAgICByZXR1cm4gdGhpcy50b1N0cmluZygpO1xuICAgIH1cblxuICAgIHJlbW92ZSh0ZXh0OnN0cmluZyk6c3RyaW5ne1xuICAgICAgICB0ZXh0PXRleHQ/dGV4dC50cmltKCkgOiAnJztcbiAgICAgICAgdGhpcy5jdXJyZW50PXRoaXMuY3VycmVudC5yZXBsYWNlKHRleHQsJycpLnJlcGxhY2UoJyAgJywnICcpOyAgICAgICAgICAgICAgICBcbiAgICAgICAgcmV0dXJuIHRoaXMudG9TdHJpbmcoKTtcbiAgICB9XG5cbiAgICB0b1N0cmluZygpOnN0cmluZ3tcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudC50cmltKCk7XG4gICAgfVxuIFxuICAgIGFzc2lnbih0ZXh0OnN0cmluZyl7XG4gICAgICAgIHRoaXMuY3VycmVudD10ZXh0O1xuICAgIH1cbiBcbn0gICAgICJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
