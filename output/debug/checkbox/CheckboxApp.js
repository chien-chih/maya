System.register(['angular2/core', 'ai/components/AiApp/AiApp', 'ai/components/AiCheckbox/AiCheckbox', 'ai/components/AiCheck/AiCheck', 'ai/components/AiRadio/AiRadio', 'ai/components/AiRadio/AiRadioGroup'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
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
    var core_1, AiApp_1, AiCheckbox_1, AiCheck_1, AiRadio_1, AiRadioGroup_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (AiApp_1_1) {
                AiApp_1 = AiApp_1_1;
            },
            function (AiCheckbox_1_1) {
                AiCheckbox_1 = AiCheckbox_1_1;
            },
            function (AiCheck_1_1) {
                AiCheck_1 = AiCheck_1_1;
            },
            function (AiRadio_1_1) {
                AiRadio_1 = AiRadio_1_1;
            },
            function (AiRadioGroup_1_1) {
                AiRadioGroup_1 = AiRadioGroup_1_1;
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
                        templateUrl: 'package:app/checkbox/CheckboxApp.html',
                        directives: [AiCheckbox_1.AiCheckbox, AiCheck_1.AiCheck, AiRadioGroup_1.AiRadioGroup, AiRadio_1.AiRadio]
                    })), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }(AiApp_1.AiApp));
            exports_1("AppComponent", AppComponent);
            AiApp_1.AiApp.boot(AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZWNrYm94L0NoZWNrYm94QXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFhQTtnQkFBbUMsZ0NBQUs7Z0JBQXhDO29CQUFtQyw4QkFBSztnQkFFeEMsQ0FBQztnQkFQRDtvQkFBQyxnQkFBUyxDQUFDLGFBQUssQ0FBQyxJQUFJLENBQUM7d0JBQ2xCLFFBQVEsRUFBRSxjQUFjO3dCQUN4QixXQUFXLEVBQUMsdUNBQXVDO3dCQUNuRCxVQUFVLEVBQUUsQ0FBQyx1QkFBVSxFQUFDLGlCQUFPLEVBQUMsMkJBQVksRUFBQyxpQkFBTyxDQUFDO3FCQUN4RCxDQUFDLENBQUM7O2dDQUFBO2dCQUdILG1CQUFDO1lBQUQsQ0FGQSxBQUVDLENBRmtDLGFBQUssR0FFdkM7WUFGRCx1Q0FFQyxDQUFBO1lBQ0QsYUFBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyIsImZpbGUiOiJjaGVja2JveC9DaGVja2JveEFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7QWlBcHB9IGZyb20gJ2FpL2NvbXBvbmVudHMvQWlBcHAvQWlBcHAnO1xuaW1wb3J0IHtBaUNoZWNrYm94fSBmcm9tICdhaS9jb21wb25lbnRzL0FpQ2hlY2tib3gvQWlDaGVja2JveCc7XG5pbXBvcnQge0FpQ2hlY2t9IGZyb20gJ2FpL2NvbXBvbmVudHMvQWlDaGVjay9BaUNoZWNrJztcbmltcG9ydCB7QWlSYWRpb30gZnJvbSAnYWkvY29tcG9uZW50cy9BaVJhZGlvL0FpUmFkaW8nO1xuaW1wb3J0IHtBaVJhZGlvR3JvdXB9IGZyb20gJ2FpL2NvbXBvbmVudHMvQWlSYWRpby9BaVJhZGlvR3JvdXAnO1xuXG5cbkBDb21wb25lbnQoQWlBcHAubWV0YSh7XG4gICAgc2VsZWN0b3I6ICdjaGVja2JveC1hcHAnLFxuICAgIHRlbXBsYXRlVXJsOidwYWNrYWdlOmFwcC9jaGVja2JveC9DaGVja2JveEFwcC5odG1sJyxcbiAgICBkaXJlY3RpdmVzOiBbQWlDaGVja2JveCxBaUNoZWNrLEFpUmFkaW9Hcm91cCxBaVJhZGlvXSAgXG59KSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgIGV4dGVuZHMgQWlBcHB7ICBcbiAgICBcbn0gICAgICAgICAgICAgIFxuQWlBcHAuYm9vdChBcHBDb21wb25lbnQpOyAgIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
