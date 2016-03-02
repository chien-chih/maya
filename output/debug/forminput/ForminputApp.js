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
                    this.value = '';
                    this.valueX = '';
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm1pbnB1dC9Gb3JtaW5wdXRBcHAudHMiXSwibmFtZXMiOlsiQXBwQ29tcG9uZW50IiwiQXBwQ29tcG9uZW50LmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU1BO2dCQUttQ0EsZ0NBQUtBO2dCQUx4Q0E7b0JBS21DQyw4QkFBS0E7b0JBQ3BDQSxVQUFLQSxHQUFRQSxFQUFFQSxDQUFDQTtvQkFFaEJBLFdBQU1BLEdBQVFBLEVBQUVBLENBQUNBO2dCQUVyQkEsQ0FBQ0E7Z0JBVkREO29CQUFDQSxnQkFBU0EsQ0FBQ0EsYUFBS0EsQ0FBQ0EsSUFBSUEsQ0FBQ0E7d0JBQ2xCQSxRQUFRQSxFQUFFQSxlQUFlQTt3QkFDekJBLFdBQVdBLEVBQUNBLHlDQUF5Q0E7d0JBQ3JEQSxVQUFVQSxFQUFFQSxDQUFDQSx5QkFBV0EsRUFBQ0EsK0JBQWNBLENBQUNBO3FCQUMzQ0EsQ0FBQ0EsQ0FBQ0E7O2lDQU1GQTtnQkFBREEsbUJBQUNBO1lBQURBLENBVkEsQUFVQ0EsRUFMa0MsYUFBSyxFQUt2QztZQVZELHVDQVVDLENBQUE7WUFDRCxhQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDIiwiZmlsZSI6ImZvcm1pbnB1dC9Gb3JtaW5wdXRBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0FpQXBwfSBmcm9tICdhaS9jb21wb25lbnRzL0FpQXBwL0FpQXBwJztcbmltcG9ydCB7QWlGb3JtSW5wdXR9IGZyb20gJ2FpL2NvbXBvbmVudHMvQWlGb3JtSW5wdXQvQWlGb3JtSW5wdXQnO1xuaW1wb3J0IHtBaUZvcm1UZXh0YXJlYX0gZnJvbSAnYWkvY29tcG9uZW50cy9BaUZvcm1UZXh0YXJlYS9BaUZvcm1UZXh0YXJlYSc7XG5cblxuQENvbXBvbmVudChBaUFwcC5tZXRhKHtcbiAgICBzZWxlY3RvcjogJ2Zvcm1pbnB1dC1hcHAnLFxuICAgIHRlbXBsYXRlVXJsOidwYWNrYWdlOmFwcC9mb3JtaW5wdXQvRm9ybWlucHV0QXBwLmh0bWwnLFxuICAgIGRpcmVjdGl2ZXM6IFtBaUZvcm1JbnB1dCxBaUZvcm1UZXh0YXJlYV0gIFxufSkpXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50ICBleHRlbmRzIEFpQXBweyAgXG4gICAgdmFsdWU6c3RyaW5nPScnO1xuXG4gICAgdmFsdWVYOnN0cmluZz0nJztcblxufVxuQWlBcHAuYm9vdChBcHBDb21wb25lbnQpOyAgIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
