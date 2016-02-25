System.register(['angular2/core', 'ai/components/AiApp/AiApp', 'ai/components/AiCheckbox/AiCheckbox', 'ai/components/AiCheck/AiCheck', 'ai/components/AiRadio/AiRadio', 'ai/components/AiRadio/AiRadioGroup'], function(exports_1) {
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
            })(AiApp_1.AiApp);
            exports_1("AppComponent", AppComponent);
            AiApp_1.AiApp.boot(AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZWNrYm94L0NoZWNrYm94QXBwLnRzIl0sIm5hbWVzIjpbIkFwcENvbXBvbmVudCIsIkFwcENvbXBvbmVudC5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFRQTtnQkFLbUNBLGdDQUFLQTtnQkFMeENBO29CQUttQ0MsOEJBQUtBO2dCQUV4Q0EsQ0FBQ0E7Z0JBUEREO29CQUFDQSxnQkFBU0EsQ0FBQ0EsYUFBS0EsQ0FBQ0EsSUFBSUEsQ0FBQ0E7d0JBQ2xCQSxRQUFRQSxFQUFFQSxjQUFjQTt3QkFDeEJBLFdBQVdBLEVBQUNBLHVDQUF1Q0E7d0JBQ25EQSxVQUFVQSxFQUFFQSxDQUFDQSx1QkFBVUEsRUFBQ0EsaUJBQU9BLEVBQUNBLDJCQUFZQSxFQUFDQSxpQkFBT0EsQ0FBQ0E7cUJBQ3hEQSxDQUFDQSxDQUFDQTs7aUNBR0ZBO2dCQUFEQSxtQkFBQ0E7WUFBREEsQ0FQQSxBQU9DQSxFQUZrQyxhQUFLLEVBRXZDO1lBUEQsdUNBT0MsQ0FBQTtZQUNELGFBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMiLCJmaWxlIjoiY2hlY2tib3gvQ2hlY2tib3hBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0FpQXBwfSBmcm9tICdhaS9jb21wb25lbnRzL0FpQXBwL0FpQXBwJztcbmltcG9ydCB7QWlDaGVja2JveH0gZnJvbSAnYWkvY29tcG9uZW50cy9BaUNoZWNrYm94L0FpQ2hlY2tib3gnO1xuaW1wb3J0IHtBaUNoZWNrfSBmcm9tICdhaS9jb21wb25lbnRzL0FpQ2hlY2svQWlDaGVjayc7XG5pbXBvcnQge0FpUmFkaW99IGZyb20gJ2FpL2NvbXBvbmVudHMvQWlSYWRpby9BaVJhZGlvJztcbmltcG9ydCB7QWlSYWRpb0dyb3VwfSBmcm9tICdhaS9jb21wb25lbnRzL0FpUmFkaW8vQWlSYWRpb0dyb3VwJztcblxuXG5AQ29tcG9uZW50KEFpQXBwLm1ldGEoe1xuICAgIHNlbGVjdG9yOiAnY2hlY2tib3gtYXBwJyxcbiAgICB0ZW1wbGF0ZVVybDoncGFja2FnZTphcHAvY2hlY2tib3gvQ2hlY2tib3hBcHAuaHRtbCcsXG4gICAgZGlyZWN0aXZlczogW0FpQ2hlY2tib3gsQWlDaGVjayxBaVJhZGlvR3JvdXAsQWlSYWRpb10gIFxufSkpXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50ICBleHRlbmRzIEFpQXBweyAgXG4gICAgXG59ICAgICAgICAgICAgICBcbkFpQXBwLmJvb3QoQXBwQ29tcG9uZW50KTsgICJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
