System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var UiService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            UiService = (function () {
                function UiService(componentLoader) {
                }
                UiService.prototype.getHello = function () {
                    return "hello";
                };
                UiService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [core_1.DynamicComponentLoader])
                ], UiService);
                return UiService;
            })();
            exports_1("UiService", UiService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVWlTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbIlVpU2VydmljZSIsIlVpU2VydmljZS5jb25zdHJ1Y3RvciIsIlVpU2VydmljZS5nZXRIZWxsbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBRUE7Z0JBR0lBLG1CQUFZQSxlQUFzQ0E7Z0JBQ2xEQyxDQUFDQTtnQkFFREQsNEJBQVFBLEdBQVJBO29CQUNJRSxNQUFNQSxDQUFDQSxPQUFPQSxDQUFDQTtnQkFDbkJBLENBQUNBO2dCQVJMRjtvQkFBQ0EsaUJBQVVBLEVBQUVBOzs4QkFVWkE7Z0JBQURBLGdCQUFDQTtZQUFEQSxDQVZBLEFBVUNBLElBQUE7WUFWRCxpQ0FVQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvVWlTZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlLER5bmFtaWNDb21wb25lbnRMb2FkZXJ9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVWlTZXJ2aWNlIHsgXG5cbiAgICBjb25zdHJ1Y3Rvcihjb21wb25lbnRMb2FkZXI6RHluYW1pY0NvbXBvbmVudExvYWRlcil7XG4gICAgfSBcblxuICAgIGdldEhlbGxvKCk6c3RyaW5ne1xuICAgICAgICByZXR1cm4gXCJoZWxsb1wiO1xuICAgIH1cblxufSAgICAiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
