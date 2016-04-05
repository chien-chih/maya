System.register(['angular2/core', 'angular2/platform/browser', '../UiService'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
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
            }());
            exports_1("AiApp", AiApp);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlBcHAvQWlBcHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFZQTtnQkFjSSxlQUFzQixHQUFlO29CQUFmLFFBQUcsR0FBSCxHQUFHLENBQVk7Z0JBQ3JDLENBQUM7Z0JBYk0sVUFBSSxHQUFYLFVBQVksZ0JBQXNCLEVBQUUsZUFBNEI7b0JBRTVELEVBQUUsQ0FBQSxDQUFDLENBQUMsZUFBZSxDQUFDO3dCQUFDLGVBQWUsR0FBQyxFQUFFLENBQUM7b0JBQ3hDLGVBQWUsQ0FBQyxJQUFJLENBQUMscUJBQVMsQ0FBQyxDQUFDO29CQUVoQyxtQkFBUyxDQUFDLGdCQUFnQixFQUFDLGVBQWUsQ0FBQyxDQUFDO2dCQUNoRCxDQUFDO2dCQUVNLFVBQUksR0FBRyxVQUFVLElBQVE7b0JBQzVCLE1BQU0sQ0FBQyxJQUFJLENBQUM7Z0JBQ2hCLENBQUMsQ0FBQTtnQkFoQkw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUMsRUFBRTt3QkFDWCxRQUFRLEVBQUUsUUFBUTtxQkFDckIsQ0FBQzs7eUJBQUE7Z0JBb0JGLFlBQUM7WUFBRCxDQW5CQSxBQW1CQyxJQUFBO1lBbkJELHlCQW1CQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvQWlBcHAvQWlBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7Q29tcG9uZW50LEVsZW1lbnRSZWZ9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHsgVHlwZSB9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZyc7XG5pbXBvcnQge2Jvb3RzdHJhcH0gICAgZnJvbSAnYW5ndWxhcjIvcGxhdGZvcm0vYnJvd3Nlcic7XG4vL2ltcG9ydCB7ZW5hYmxlUHJvZE1vZGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuLy9lbmFibGVQcm9kTW9kZSgpO1xuaW1wb3J0IHtVaVNlcnZpY2V9IGZyb20gJy4uL1VpU2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHRlbXBsYXRlOicnLFxuICAgIHNlbGVjdG9yOiAnYWktYXBwJyxcbn0pICAgIFxuZXhwb3J0IGNsYXNzIEFpQXBweyBcblxuICAgIHN0YXRpYyBib290KGFwcENvbXBvbmVudFR5cGU6IFR5cGUsIGN1c3RvbVByb3ZpZGVycz86IEFycmF5PGFueT4pe1xuXG4gICAgICAgIGlmKCFjdXN0b21Qcm92aWRlcnMpIGN1c3RvbVByb3ZpZGVycz1bXTsgICAgICAgICBcbiAgICAgICAgY3VzdG9tUHJvdmlkZXJzLnB1c2goVWlTZXJ2aWNlKTtcblxuICAgICAgICBib290c3RyYXAoYXBwQ29tcG9uZW50VHlwZSxjdXN0b21Qcm92aWRlcnMpOyAgXG4gICAgfVxuXG4gICAgc3RhdGljIG1ldGEgPSBmdW5jdGlvbiAobWV0YTphbnkpOmFueXtcbiAgICAgICAgcmV0dXJuIG1ldGE7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIGVsZTogRWxlbWVudFJlZikgeyBcbiAgICB9XG5cblxuXG59IFxuXG5cblxuIFxuICAiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
