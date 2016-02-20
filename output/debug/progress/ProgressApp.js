System.register(['angular2/core', 'angular2/platform/browser', 'ai/components/AiApp/AiApp', 'ai/components/AiSpinner/AiSpinner', 'ai/components/AiProgress/AiProgress', 'ai/components/AiPercent/AiPercent'], function(exports_1) {
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, browser_1, AiApp_1, AiSpinner_1, AiProgress_1, AiPercent_1;
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
            function (AiSpinner_1_1) {
                AiSpinner_1 = AiSpinner_1_1;
            },
            function (AiProgress_1_1) {
                AiProgress_1 = AiProgress_1_1;
            },
            function (AiPercent_1_1) {
                AiPercent_1 = AiPercent_1_1;
            }],
        execute: function() {
            AppComponent = (function (_super) {
                __extends(AppComponent, _super);
                function AppComponent() {
                    _super.apply(this, arguments);
                }
                AppComponent = __decorate([
                    core_1.Component(AiApp_1.AiApp.meta({
                        selector: 'progress-app',
                        templateUrl: 'package:app/progress/ProgressApp.html',
                        directives: [AiSpinner_1.AiSpinner, AiProgress_1.AiProgress, AiPercent_1.AiPercent]
                    })), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })(AiApp_1.AiApp);
            exports_1("AppComponent", AppComponent);
            browser_1.bootstrap(AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2dyZXNzL1Byb2dyZXNzQXBwLnRzIl0sIm5hbWVzIjpbIkFwcENvbXBvbmVudCIsIkFwcENvbXBvbmVudC5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFRQTtnQkFLbUNBLGdDQUFLQTtnQkFMeENBO29CQUttQ0MsOEJBQUtBO2dCQUV4Q0EsQ0FBQ0E7Z0JBUEREO29CQUFDQSxnQkFBU0EsQ0FBQ0EsYUFBS0EsQ0FBQ0EsSUFBSUEsQ0FBQ0E7d0JBQ2xCQSxRQUFRQSxFQUFFQSxjQUFjQTt3QkFDeEJBLFdBQVdBLEVBQUNBLHVDQUF1Q0E7d0JBQ25EQSxVQUFVQSxFQUFFQSxDQUFDQSxxQkFBU0EsRUFBQ0EsdUJBQVVBLEVBQUNBLHFCQUFTQSxDQUFDQTtxQkFDL0NBLENBQUNBLENBQUNBOztpQ0FHRkE7Z0JBQURBLG1CQUFDQTtZQUFEQSxDQVBBLEFBT0NBLEVBRmtDLGFBQUssRUFFdkM7WUFQRCx1Q0FPQyxDQUFBO1lBRUQsbUJBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQyIsImZpbGUiOiJwcm9ncmVzcy9Qcm9ncmVzc0FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Ym9vdHN0cmFwfSAgICBmcm9tICdhbmd1bGFyMi9wbGF0Zm9ybS9icm93c2VyJztcbmltcG9ydCB7QWlBcHB9IGZyb20gJ2FpL2NvbXBvbmVudHMvQWlBcHAvQWlBcHAnO1xuaW1wb3J0IHtBaVNwaW5uZXJ9IGZyb20gJ2FpL2NvbXBvbmVudHMvQWlTcGlubmVyL0FpU3Bpbm5lcic7XG5pbXBvcnQge0FpUHJvZ3Jlc3N9IGZyb20gJ2FpL2NvbXBvbmVudHMvQWlQcm9ncmVzcy9BaVByb2dyZXNzJztcbmltcG9ydCB7QWlQZXJjZW50fSBmcm9tICdhaS9jb21wb25lbnRzL0FpUGVyY2VudC9BaVBlcmNlbnQnO1xuXG5cbkBDb21wb25lbnQoQWlBcHAubWV0YSh7XG4gICAgc2VsZWN0b3I6ICdwcm9ncmVzcy1hcHAnLFxuICAgIHRlbXBsYXRlVXJsOidwYWNrYWdlOmFwcC9wcm9ncmVzcy9Qcm9ncmVzc0FwcC5odG1sJyxcbiAgICBkaXJlY3RpdmVzOiBbQWlTcGlubmVyLEFpUHJvZ3Jlc3MsQWlQZXJjZW50XSAgXG59KSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgIGV4dGVuZHMgQWlBcHB7ICBcbiAgICAgXG59ICAgICAgICAgICAgICBcblxuYm9vdHN0cmFwKEFwcENvbXBvbmVudCk7ICJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
