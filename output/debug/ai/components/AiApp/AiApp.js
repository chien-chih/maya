System.register(['angular2/core', 'angular2/platform/browser', '../UiService'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, browser_1, UiService_1;
    var AiApp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (UiService_1_1) {
                UiService_1 = UiService_1_1;
            }],
        execute: function() {
            AiApp = (function () {
                function AiApp(ele) {
                    this.ele = ele;
                }
                AiApp.boot = function (appComponentType, customProviders) {
                    if (!customProviders)
                        customProviders = [];
                    customProviders.push(UiService_1.UiService);
                    browser_1.bootstrap(appComponentType, customProviders);
                };
                AiApp.meta = function (meta) {
                    return meta;
                };
                AiApp = __decorate([
                    core_1.Component({
                        template: '',
                        selector: 'ai-app',
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], AiApp);
                return AiApp;
            })();
            exports_1("AiApp", AiApp);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlBcHAvQWlBcHAudHMiXSwibmFtZXMiOlsiQWlBcHAiLCJBaUFwcC5jb25zdHJ1Y3RvciIsIkFpQXBwLmJvb3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU9BO2dCQWlCSUEsZUFBc0JBLEdBQWVBO29CQUFmQyxRQUFHQSxHQUFIQSxHQUFHQSxDQUFZQTtnQkFDckNBLENBQUNBO2dCQVpNRCxVQUFJQSxHQUFYQSxVQUFZQSxnQkFBc0JBLEVBQUVBLGVBQTRCQTtvQkFDNURFLEVBQUVBLENBQUFBLENBQUNBLENBQUNBLGVBQWVBLENBQUNBO3dCQUFDQSxlQUFlQSxHQUFDQSxFQUFFQSxDQUFDQTtvQkFDeENBLGVBQWVBLENBQUNBLElBQUlBLENBQUNBLHFCQUFTQSxDQUFDQSxDQUFDQTtvQkFFaENBLG1CQUFTQSxDQUFDQSxnQkFBZ0JBLEVBQUNBLGVBQWVBLENBQUNBLENBQUNBO2dCQUNoREEsQ0FBQ0E7Z0JBRU1GLFVBQUlBLEdBQUdBLFVBQVVBLElBQVFBO29CQUM1QixNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUNoQixDQUFDLENBQUFBO2dCQWZMQTtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNQQSxRQUFRQSxFQUFDQSxFQUFFQTt3QkFDWEEsUUFBUUEsRUFBRUEsUUFBUUE7cUJBQ3JCQSxDQUFDQTs7MEJBbUJEQTtnQkFBREEsWUFBQ0E7WUFBREEsQ0F0QkEsQUFzQkNBLElBQUE7WUF0QkQseUJBc0JDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9BaUFwcC9BaUFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LEVsZW1lbnRSZWZ9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHsgVHlwZSB9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZyc7XG5pbXBvcnQge2Jvb3RzdHJhcH0gICAgZnJvbSAnYW5ndWxhcjIvcGxhdGZvcm0vYnJvd3Nlcic7XG4vL2ltcG9ydCB7ZW5hYmxlUHJvZE1vZGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuLy9lbmFibGVQcm9kTW9kZSgpO1xuaW1wb3J0IHtVaVNlcnZpY2V9IGZyb20gJy4uL1VpU2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHRlbXBsYXRlOicnLFxuICAgIHNlbGVjdG9yOiAnYWktYXBwJyxcbn0pICAgIFxuZXhwb3J0IGNsYXNzIEFpQXBweyBcblxuICAgIHN0YXRpYyBib290KGFwcENvbXBvbmVudFR5cGU6IFR5cGUsIGN1c3RvbVByb3ZpZGVycz86IEFycmF5PGFueT4pe1xuICAgICAgICBpZighY3VzdG9tUHJvdmlkZXJzKSBjdXN0b21Qcm92aWRlcnM9W107ICAgICAgICAgXG4gICAgICAgIGN1c3RvbVByb3ZpZGVycy5wdXNoKFVpU2VydmljZSk7XG5cbiAgICAgICAgYm9vdHN0cmFwKGFwcENvbXBvbmVudFR5cGUsY3VzdG9tUHJvdmlkZXJzKTsgIFxuICAgIH1cblxuICAgIHN0YXRpYyBtZXRhID0gZnVuY3Rpb24gKG1ldGE6YW55KTphbnl7XG4gICAgICAgIHJldHVybiBtZXRhO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBlbGU6IEVsZW1lbnRSZWYpIHsgXG4gICAgfVxuXG5cblxufSBcblxuXG5cbiBcbiAgIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
