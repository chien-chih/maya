System.register([], function(exports_1) {
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
            })();
            exports_1("StringChain", StringChain);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdXRpbHMudHMiXSwibmFtZXMiOlsiU3RyaW5nQ2hhaW4iLCJTdHJpbmdDaGFpbi5jb25zdHJ1Y3RvciIsIlN0cmluZ0NoYWluLmFkZCIsIlN0cmluZ0NoYWluLnJlbW92ZSIsIlN0cmluZ0NoYWluLnRvU3RyaW5nIiwiU3RyaW5nQ2hhaW4uYXNzaWduIl0sIm1hcHBpbmdzIjoiOzs7OztZQUFBO2dCQUVJQSxxQkFBb0JBLE9BQWNBO29CQUFkQyxZQUFPQSxHQUFQQSxPQUFPQSxDQUFPQTtnQkFDbENBLENBQUNBO2dCQUVERCx5QkFBR0EsR0FBSEEsVUFBSUEsSUFBV0E7b0JBRVhFLElBQUlBLEdBQUNBLElBQUlBLEdBQUNBLEdBQUdBLEdBQUNBLElBQUlBLENBQUNBLElBQUlBLEVBQUVBLEdBQUdBLEVBQUVBLENBQUNBO29CQUMvQkEsRUFBRUEsQ0FBQUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7d0JBQ2hDQSxJQUFJQSxDQUFDQSxPQUFPQSxJQUFFQSxJQUFJQSxDQUFDQTtvQkFDdkJBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLEVBQUVBLENBQUNBO2dCQUMzQkEsQ0FBQ0E7Z0JBRURGLDRCQUFNQSxHQUFOQSxVQUFPQSxJQUFXQTtvQkFDZEcsSUFBSUEsR0FBQ0EsSUFBSUEsR0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsRUFBRUEsR0FBR0EsRUFBRUEsQ0FBQ0E7b0JBQzNCQSxJQUFJQSxDQUFDQSxPQUFPQSxHQUFDQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxPQUFPQSxDQUFDQSxJQUFJQSxFQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxPQUFPQSxDQUFDQSxJQUFJQSxFQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtvQkFDN0RBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLEVBQUVBLENBQUNBO2dCQUMzQkEsQ0FBQ0E7Z0JBRURILDhCQUFRQSxHQUFSQTtvQkFDSUksTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsSUFBSUEsRUFBRUEsQ0FBQ0E7Z0JBQy9CQSxDQUFDQTtnQkFFREosNEJBQU1BLEdBQU5BLFVBQU9BLElBQVdBO29CQUNkSyxJQUFJQSxDQUFDQSxPQUFPQSxHQUFDQSxJQUFJQSxDQUFDQTtnQkFDdEJBLENBQUNBO2dCQUVMTCxrQkFBQ0E7WUFBREEsQ0EzQkEsQUEyQkNBLElBQUE7WUEzQkQscUNBMkJDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy91dGlscy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBTdHJpbmdDaGFpbiB7IFxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBjdXJyZW50OnN0cmluZyl7XG4gICAgfSBcblxuICAgIGFkZCh0ZXh0OnN0cmluZyk6c3RyaW5ne1xuICAgICAgICBcbiAgICAgICAgdGV4dD10ZXh0PycgJyt0ZXh0LnRyaW0oKSA6ICcnO1xuICAgICAgICBpZih0aGlzLmN1cnJlbnQuaW5kZXhPZih0ZXh0KSA9PSAtMSlcbiAgICAgICAgICAgIHRoaXMuY3VycmVudCs9dGV4dDtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9TdHJpbmcoKTtcbiAgICB9XG5cbiAgICByZW1vdmUodGV4dDpzdHJpbmcpOnN0cmluZ3tcbiAgICAgICAgdGV4dD10ZXh0P3RleHQudHJpbSgpIDogJyc7XG4gICAgICAgIHRoaXMuY3VycmVudD10aGlzLmN1cnJlbnQucmVwbGFjZSh0ZXh0LCcnKS5yZXBsYWNlKCcgICcsJyAnKTsgICAgICAgICAgICAgICAgXG4gICAgICAgIHJldHVybiB0aGlzLnRvU3RyaW5nKCk7XG4gICAgfVxuXG4gICAgdG9TdHJpbmcoKTpzdHJpbmd7XG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnQudHJpbSgpO1xuICAgIH1cbiBcbiAgICBhc3NpZ24odGV4dDpzdHJpbmcpe1xuICAgICAgICB0aGlzLmN1cnJlbnQ9dGV4dDtcbiAgICB9XG4gXG59ICAgICAiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
