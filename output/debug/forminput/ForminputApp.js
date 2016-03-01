System.register(['angular2/core', 'ai/components/AiApp/AiApp', 'ai/components/AiFormInput/AiFormInput', 'ai/components/AiFormTextarea/AiFormTextarea'], function(exports_1) {
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
    var core_1, AiApp_1, AiFormInput_1, AiFormTextarea_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (AiApp_1_1) {
                AiApp_1 = AiApp_1_1;
            },
            function (AiFormInput_1_1) {
                AiFormInput_1 = AiFormInput_1_1;
            },
            function (AiFormTextarea_1_1) {
                AiFormTextarea_1 = AiFormTextarea_1_1;
            }],
        execute: function() {
            AppComponent = (function (_super) {
                __extends(AppComponent, _super);
                function AppComponent() {
                    _super.apply(this, arguments);
                    this.value = '1234';
                }
                AppComponent = __decorate([
                    core_1.Component(AiApp_1.AiApp.meta({
                        selector: 'forminput-app',
                        templateUrl: 'package:app/forminput/ForminputApp.html',
                        directives: [AiFormInput_1.AiFormInput, AiFormTextarea_1.AiFormTextarea]
                    })), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })(AiApp_1.AiApp);
            exports_1("AppComponent", AppComponent);
            AiApp_1.AiApp.boot(AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm1pbnB1dC9Gb3JtaW5wdXRBcHAudHMiXSwibmFtZXMiOlsiQXBwQ29tcG9uZW50IiwiQXBwQ29tcG9uZW50LmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU1BO2dCQUttQ0EsZ0NBQUtBO2dCQUx4Q0E7b0JBS21DQyw4QkFBS0E7b0JBQ3BDQSxVQUFLQSxHQUFRQSxNQUFNQSxDQUFDQTtnQkFFeEJBLENBQUNBO2dCQVJERDtvQkFBQ0EsZ0JBQVNBLENBQUNBLGFBQUtBLENBQUNBLElBQUlBLENBQUNBO3dCQUNsQkEsUUFBUUEsRUFBRUEsZUFBZUE7d0JBQ3pCQSxXQUFXQSxFQUFDQSx5Q0FBeUNBO3dCQUNyREEsVUFBVUEsRUFBRUEsQ0FBQ0EseUJBQVdBLEVBQUNBLCtCQUFjQSxDQUFDQTtxQkFDM0NBLENBQUNBLENBQUNBOztpQ0FJRkE7Z0JBQURBLG1CQUFDQTtZQUFEQSxDQVJBLEFBUUNBLEVBSGtDLGFBQUssRUFHdkM7WUFSRCx1Q0FRQyxDQUFBO1lBQ0QsYUFBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyIsImZpbGUiOiJmb3JtaW5wdXQvRm9ybWlucHV0QXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtBaUFwcH0gZnJvbSAnYWkvY29tcG9uZW50cy9BaUFwcC9BaUFwcCc7XG5pbXBvcnQge0FpRm9ybUlucHV0fSBmcm9tICdhaS9jb21wb25lbnRzL0FpRm9ybUlucHV0L0FpRm9ybUlucHV0JztcbmltcG9ydCB7QWlGb3JtVGV4dGFyZWF9IGZyb20gJ2FpL2NvbXBvbmVudHMvQWlGb3JtVGV4dGFyZWEvQWlGb3JtVGV4dGFyZWEnO1xuXG5cbkBDb21wb25lbnQoQWlBcHAubWV0YSh7XG4gICAgc2VsZWN0b3I6ICdmb3JtaW5wdXQtYXBwJyxcbiAgICB0ZW1wbGF0ZVVybDoncGFja2FnZTphcHAvZm9ybWlucHV0L0Zvcm1pbnB1dEFwcC5odG1sJyxcbiAgICBkaXJlY3RpdmVzOiBbQWlGb3JtSW5wdXQsQWlGb3JtVGV4dGFyZWFdICBcbn0pKVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCAgZXh0ZW5kcyBBaUFwcHsgIFxuICAgIHZhbHVlOnN0cmluZz0nMTIzNCc7XG5cbn1cbkFpQXBwLmJvb3QoQXBwQ29tcG9uZW50KTsgICJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
