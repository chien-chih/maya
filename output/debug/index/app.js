System.register(['angular2/core', 'angular2/platform/browser', 'ai/components/AiApp/AiApp', 'ai/components/AiCheckbox/AiCheckbox', 'ai/components/AiToggle/AiToggle'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, browser_1, AiApp_1, AiCheckbox_1, AiToggle_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (AiApp_1_1) {
                AiApp_1 = AiApp_1_1;
            },
            function (AiCheckbox_1_1) {
                AiCheckbox_1 = AiCheckbox_1_1;
            },
            function (AiToggle_1_1) {
                AiToggle_1 = AiToggle_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component(AiApp_1.AiApp.meta({
                        selector: 'checkbox-app',
                        template: "\n        <ai-toggle>Hello world</ai-toggle>\n        <br/>\n        <ai-checkbox>normal</ai-checkbox><ai-checkbox primary>primary</ai-checkbox><ai-checkbox [disabled]=\"true\">disabled</ai-checkbox>\n        <ai-checkbox color=\"red\" [value]=\"true\" >red</ai-checkbox><ai-checkbox color=\"green\">green</ai-checkbox><ai-checkbox color=\"yellow\">yellow</ai-checkbox>\n        <br/>\n        <ai-checkbox size='small'>small</ai-checkbox><ai-checkbox>normal</ai-checkbox><ai-checkbox size='large'>large</ai-checkbox>\n        ",
                        directives: [AiCheckbox_1.AiCheckbox, AiToggle_1.AiToggle]
                    })), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
            browser_1.bootstrap(AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4L2FwcC50cyJdLCJuYW1lcyI6WyJBcHBDb21wb25lbnQiLCJBcHBDb21wb25lbnQuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU1BO2dCQUFBQTtnQkFjQUMsQ0FBQ0E7Z0JBZEREO29CQUFDQSxnQkFBU0EsQ0FBQ0EsYUFBS0EsQ0FBQ0EsSUFBSUEsQ0FBQ0E7d0JBQ2xCQSxRQUFRQSxFQUFFQSxjQUFjQTt3QkFDeEJBLFFBQVFBLEVBQUVBLGloQkFPTEE7d0JBQ0xBLFVBQVVBLEVBQUVBLENBQUNBLHVCQUFVQSxFQUFDQSxtQkFBUUEsQ0FBQ0E7cUJBQ3BDQSxDQUFDQSxDQUFDQTs7aUNBR0ZBO2dCQUFEQSxtQkFBQ0E7WUFBREEsQ0FkQSxBQWNDQSxJQUFBO1lBZEQsdUNBY0MsQ0FBQTtZQUVELG1CQUFTLENBQUMsWUFBWSxDQUFDLENBQUMiLCJmaWxlIjoiaW5kZXgvYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtib290c3RyYXB9ICAgIGZyb20gJ2FuZ3VsYXIyL3BsYXRmb3JtL2Jyb3dzZXInO1xuaW1wb3J0IHtBaUFwcH0gZnJvbSAnYWkvY29tcG9uZW50cy9BaUFwcC9BaUFwcCc7XG5pbXBvcnQge0FpQ2hlY2tib3h9IGZyb20gJ2FpL2NvbXBvbmVudHMvQWlDaGVja2JveC9BaUNoZWNrYm94JztcbmltcG9ydCB7QWlUb2dnbGV9IGZyb20gJ2FpL2NvbXBvbmVudHMvQWlUb2dnbGUvQWlUb2dnbGUnO1xuXG5AQ29tcG9uZW50KEFpQXBwLm1ldGEoe1xuICAgIHNlbGVjdG9yOiAnY2hlY2tib3gtYXBwJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8YWktdG9nZ2xlPkhlbGxvIHdvcmxkPC9haS10b2dnbGU+XG4gICAgICAgIDxici8+XG4gICAgICAgIDxhaS1jaGVja2JveD5ub3JtYWw8L2FpLWNoZWNrYm94PjxhaS1jaGVja2JveCBwcmltYXJ5PnByaW1hcnk8L2FpLWNoZWNrYm94PjxhaS1jaGVja2JveCBbZGlzYWJsZWRdPVwidHJ1ZVwiPmRpc2FibGVkPC9haS1jaGVja2JveD5cbiAgICAgICAgPGFpLWNoZWNrYm94IGNvbG9yPVwicmVkXCIgW3ZhbHVlXT1cInRydWVcIiA+cmVkPC9haS1jaGVja2JveD48YWktY2hlY2tib3ggY29sb3I9XCJncmVlblwiPmdyZWVuPC9haS1jaGVja2JveD48YWktY2hlY2tib3ggY29sb3I9XCJ5ZWxsb3dcIj55ZWxsb3c8L2FpLWNoZWNrYm94PlxuICAgICAgICA8YnIvPlxuICAgICAgICA8YWktY2hlY2tib3ggc2l6ZT0nc21hbGwnPnNtYWxsPC9haS1jaGVja2JveD48YWktY2hlY2tib3g+bm9ybWFsPC9haS1jaGVja2JveD48YWktY2hlY2tib3ggc2l6ZT0nbGFyZ2UnPmxhcmdlPC9haS1jaGVja2JveD5cbiAgICAgICAgYCxcbiAgICBkaXJlY3RpdmVzOiBbQWlDaGVja2JveCxBaVRvZ2dsZV0gIFxufSkpXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHsgIFxuICAgIFxufSAgICAgICAgICAgICAgXG5cbmJvb3RzdHJhcChBcHBDb21wb25lbnQpOyAgIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
