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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlBcHAvQWlBcHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFZQTtnQkFhSSxlQUFzQixHQUFlO29CQUFmLFFBQUcsR0FBSCxHQUFHLENBQVk7Z0JBQ3JDLENBQUM7Z0JBWk0sVUFBSSxHQUFYLFVBQVksZ0JBQXNCLEVBQUUsZUFBNEI7b0JBQzVELEVBQUUsQ0FBQSxDQUFDLENBQUMsZUFBZSxDQUFDO3dCQUFDLGVBQWUsR0FBQyxFQUFFLENBQUM7b0JBQ3hDLGVBQWUsQ0FBQyxJQUFJLENBQUMscUJBQVMsQ0FBQyxDQUFDO29CQUVoQyxtQkFBUyxDQUFDLGdCQUFnQixFQUFDLGVBQWUsQ0FBQyxDQUFDO2dCQUNoRCxDQUFDO2dCQUVNLFVBQUksR0FBRyxVQUFVLElBQVE7b0JBQzVCLE1BQU0sQ0FBQyxJQUFJLENBQUM7Z0JBQ2hCLENBQUMsQ0FBQTtnQkFmTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBQyxFQUFFO3dCQUNYLFFBQVEsRUFBRSxRQUFRO3FCQUNyQixDQUFDOzt5QkFBQTtnQkFtQkYsWUFBQztZQUFELENBbEJBLEFBa0JDLElBQUE7WUFsQkQseUJBa0JDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9BaUFwcC9BaUFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHtDb21wb25lbnQsRWxlbWVudFJlZn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQgeyBUeXBlIH0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9sYW5nJztcbmltcG9ydCB7Ym9vdHN0cmFwfSAgICBmcm9tICdhbmd1bGFyMi9wbGF0Zm9ybS9icm93c2VyJztcbi8vaW1wb3J0IHtlbmFibGVQcm9kTW9kZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG4vL2VuYWJsZVByb2RNb2RlKCk7XG5pbXBvcnQge1VpU2VydmljZX0gZnJvbSAnLi4vVWlTZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgdGVtcGxhdGU6JycsXG4gICAgc2VsZWN0b3I6ICdhaS1hcHAnLFxufSkgICAgXG5leHBvcnQgY2xhc3MgQWlBcHB7IFxuXG4gICAgc3RhdGljIGJvb3QoYXBwQ29tcG9uZW50VHlwZTogVHlwZSwgY3VzdG9tUHJvdmlkZXJzPzogQXJyYXk8YW55Pil7XG4gICAgICAgIGlmKCFjdXN0b21Qcm92aWRlcnMpIGN1c3RvbVByb3ZpZGVycz1bXTsgICAgICAgICBcbiAgICAgICAgY3VzdG9tUHJvdmlkZXJzLnB1c2goVWlTZXJ2aWNlKTtcblxuICAgICAgICBib290c3RyYXAoYXBwQ29tcG9uZW50VHlwZSxjdXN0b21Qcm92aWRlcnMpOyAgXG4gICAgfVxuXG4gICAgc3RhdGljIG1ldGEgPSBmdW5jdGlvbiAobWV0YTphbnkpOmFueXtcbiAgICAgICAgcmV0dXJuIG1ldGE7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIGVsZTogRWxlbWVudFJlZikgeyBcbiAgICB9XG5cblxuXG59IFxuXG5cblxuIFxuICAiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
