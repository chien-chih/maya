System.register(['angular2/core', 'angular2/platform/browser', 'ai/components/AiApp/AiApp', 'ai/components/AiCheckbox/AiCheckbox', 'ai/components/AiToggle/AiToggle'], function(exports_1) {
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
            AppComponent = (function (_super) {
                __extends(AppComponent, _super);
                function AppComponent() {
                    _super.apply(this, arguments);
                }
                AppComponent = __decorate([
                    core_1.Component(AiApp_1.AiApp.meta({
                        selector: 'checkbox-app',
                        template: "\n        <ai-toggle up='star_border' down='star'></ai-toggle> <ai-toggle up='star_border' down='star' primary></ai-toggle>\n        <ai-toggle up='favorite_border' down='favorite'></ai-toggle><ai-toggle up='favorite_border' down='favorite' color='red'></ai-toggle>\n        <ai-toggle large up='zoom_in' down='zoom_out'></ai-toggle> <ai-toggle small up='videocam' down='videocam_off'></ai-toggle>\n    \n        <ai-toggle>normal</ai-toggle><ai-toggle primary>primary</ai-toggle><ai-toggle [disabled]=\"true\">disabled</ai-toggle>\n        <ai-toggle large>large</ai-toggle><ai-toggle small>small</ai-toggle>\n        <ai-toggle red [value]=\"true\" >red</ai-toggle><ai-toggle green>green</ai-toggle><ai-toggle yellow>yellow</ai-toggle>\n        <br/>\n        <ai-checkbox>normal</ai-checkbox><ai-checkbox primary>primary</ai-checkbox><ai-checkbox [disabled]=\"true\">disabled</ai-checkbox>\n        <ai-checkbox red [value]=\"true\" >red</ai-checkbox><ai-checkbox green>green</ai-checkbox><ai-checkbox yellow>yellow</ai-checkbox>\n        <br/>\n        <ai-checkbox small>small</ai-checkbox><ai-checkbox>normal</ai-checkbox><ai-checkbox large>large</ai-checkbox>\n        ",
                        directives: [AiCheckbox_1.AiCheckbox, AiToggle_1.AiToggle]
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4L0luZGV4QXBwLnRzIl0sIm5hbWVzIjpbIkFwcENvbXBvbmVudCIsIkFwcENvbXBvbmVudC5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFNQTtnQkFrQm1DQSxnQ0FBS0E7Z0JBbEJ4Q0E7b0JBa0JtQ0MsOEJBQUtBO2dCQUV4Q0EsQ0FBQ0E7Z0JBcEJERDtvQkFBQ0EsZ0JBQVNBLENBQUNBLGFBQUtBLENBQUNBLElBQUlBLENBQUNBO3dCQUNsQkEsUUFBUUEsRUFBRUEsY0FBY0E7d0JBQ3hCQSxRQUFRQSxFQUFFQSwwcENBYUxBO3dCQUNMQSxVQUFVQSxFQUFFQSxDQUFDQSx1QkFBVUEsRUFBQ0EsbUJBQVFBLENBQUNBO3FCQUNwQ0EsQ0FBQ0EsQ0FBQ0E7O2lDQUdGQTtnQkFBREEsbUJBQUNBO1lBQURBLENBcEJBLEFBb0JDQSxFQUZrQyxhQUFLLEVBRXZDO1lBcEJELHVDQW9CQyxDQUFBO1lBRUQsbUJBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQyIsImZpbGUiOiJpbmRleC9JbmRleEFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Ym9vdHN0cmFwfSAgICBmcm9tICdhbmd1bGFyMi9wbGF0Zm9ybS9icm93c2VyJztcbmltcG9ydCB7QWlBcHB9IGZyb20gJ2FpL2NvbXBvbmVudHMvQWlBcHAvQWlBcHAnO1xuaW1wb3J0IHtBaUNoZWNrYm94fSBmcm9tICdhaS9jb21wb25lbnRzL0FpQ2hlY2tib3gvQWlDaGVja2JveCc7XG5pbXBvcnQge0FpVG9nZ2xlfSBmcm9tICdhaS9jb21wb25lbnRzL0FpVG9nZ2xlL0FpVG9nZ2xlJztcblxuQENvbXBvbmVudChBaUFwcC5tZXRhKHtcbiAgICBzZWxlY3RvcjogJ2NoZWNrYm94LWFwcCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGFpLXRvZ2dsZSB1cD0nc3Rhcl9ib3JkZXInIGRvd249J3N0YXInPjwvYWktdG9nZ2xlPiA8YWktdG9nZ2xlIHVwPSdzdGFyX2JvcmRlcicgZG93bj0nc3RhcicgcHJpbWFyeT48L2FpLXRvZ2dsZT5cbiAgICAgICAgPGFpLXRvZ2dsZSB1cD0nZmF2b3JpdGVfYm9yZGVyJyBkb3duPSdmYXZvcml0ZSc+PC9haS10b2dnbGU+PGFpLXRvZ2dsZSB1cD0nZmF2b3JpdGVfYm9yZGVyJyBkb3duPSdmYXZvcml0ZScgY29sb3I9J3JlZCc+PC9haS10b2dnbGU+XG4gICAgICAgIDxhaS10b2dnbGUgbGFyZ2UgdXA9J3pvb21faW4nIGRvd249J3pvb21fb3V0Jz48L2FpLXRvZ2dsZT4gPGFpLXRvZ2dsZSBzbWFsbCB1cD0ndmlkZW9jYW0nIGRvd249J3ZpZGVvY2FtX29mZic+PC9haS10b2dnbGU+XG4gICAgXG4gICAgICAgIDxhaS10b2dnbGU+bm9ybWFsPC9haS10b2dnbGU+PGFpLXRvZ2dsZSBwcmltYXJ5PnByaW1hcnk8L2FpLXRvZ2dsZT48YWktdG9nZ2xlIFtkaXNhYmxlZF09XCJ0cnVlXCI+ZGlzYWJsZWQ8L2FpLXRvZ2dsZT5cbiAgICAgICAgPGFpLXRvZ2dsZSBsYXJnZT5sYXJnZTwvYWktdG9nZ2xlPjxhaS10b2dnbGUgc21hbGw+c21hbGw8L2FpLXRvZ2dsZT5cbiAgICAgICAgPGFpLXRvZ2dsZSByZWQgW3ZhbHVlXT1cInRydWVcIiA+cmVkPC9haS10b2dnbGU+PGFpLXRvZ2dsZSBncmVlbj5ncmVlbjwvYWktdG9nZ2xlPjxhaS10b2dnbGUgeWVsbG93PnllbGxvdzwvYWktdG9nZ2xlPlxuICAgICAgICA8YnIvPlxuICAgICAgICA8YWktY2hlY2tib3g+bm9ybWFsPC9haS1jaGVja2JveD48YWktY2hlY2tib3ggcHJpbWFyeT5wcmltYXJ5PC9haS1jaGVja2JveD48YWktY2hlY2tib3ggW2Rpc2FibGVkXT1cInRydWVcIj5kaXNhYmxlZDwvYWktY2hlY2tib3g+XG4gICAgICAgIDxhaS1jaGVja2JveCByZWQgW3ZhbHVlXT1cInRydWVcIiA+cmVkPC9haS1jaGVja2JveD48YWktY2hlY2tib3ggZ3JlZW4+Z3JlZW48L2FpLWNoZWNrYm94PjxhaS1jaGVja2JveCB5ZWxsb3c+eWVsbG93PC9haS1jaGVja2JveD5cbiAgICAgICAgPGJyLz5cbiAgICAgICAgPGFpLWNoZWNrYm94IHNtYWxsPnNtYWxsPC9haS1jaGVja2JveD48YWktY2hlY2tib3g+bm9ybWFsPC9haS1jaGVja2JveD48YWktY2hlY2tib3ggbGFyZ2U+bGFyZ2U8L2FpLWNoZWNrYm94PlxuICAgICAgICBgLFxuICAgIGRpcmVjdGl2ZXM6IFtBaUNoZWNrYm94LEFpVG9nZ2xlXSAgXG59KSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgIGV4dGVuZHMgQWlBcHB7ICBcbiAgICBcbn0gICAgICAgICAgICAgIFxuXG5ib290c3RyYXAoQXBwQ29tcG9uZW50KTsgICJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
