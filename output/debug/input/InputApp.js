System.register(['angular2/core', 'ai/components/AiApp/AiApp', 'ai/components/AiInput/AiInput', 'ai/components/AiTextarea/AiTextarea'], function(exports_1, context_1) {
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
    var core_1, AiApp_1, AiInput_1, AiTextarea_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (AiApp_1_1) {
                AiApp_1 = AiApp_1_1;
            },
            function (AiInput_1_1) {
                AiInput_1 = AiInput_1_1;
            },
            function (AiTextarea_1_1) {
                AiTextarea_1 = AiTextarea_1_1;
            }],
        execute: function() {
            AppComponent = (function (_super) {
                __extends(AppComponent, _super);
                function AppComponent() {
                    _super.apply(this, arguments);
                    this.spinButtonSpinning = false;
                    this.valueA = 'Hello';
                }
                AppComponent.prototype.onSpinButtonClick = function () {
                    this.spinButtonSpinning = !this.spinButtonSpinning;
                };
                AppComponent.prototype.onRightClick = function () {
                    alert('right');
                };
                AppComponent.prototype.onLeftClick = function () {
                    alert('click left');
                };
                AppComponent.prototype.onValueChange = function (value) {
                };
                AppComponent = __decorate([
                    core_1.Component(AiApp_1.AiApp.meta({
                        selector: 'input-app',
                        templateUrl: 'package:app/input/InputApp.html',
                        directives: [AiInput_1.AiInput, AiTextarea_1.AiTextarea]
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlucHV0L0lucHV0QXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFXQTtnQkFBbUMsZ0NBQUs7Z0JBQXhDO29CQUFtQyw4QkFBSztvQkFDcEMsdUJBQWtCLEdBQVMsS0FBSyxDQUFDO29CQUNqQyxXQUFNLEdBQVEsT0FBTyxDQUFDO2dCQWlCMUIsQ0FBQztnQkFmRyx3Q0FBaUIsR0FBakI7b0JBQ0ksSUFBSSxDQUFDLGtCQUFrQixHQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDO2dCQUNyRCxDQUFDO2dCQUVELG1DQUFZLEdBQVo7b0JBQ0ksS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNuQixDQUFDO2dCQUVELGtDQUFXLEdBQVg7b0JBQ0ksS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUN4QixDQUFDO2dCQUVELG9DQUFhLEdBQWIsVUFBYyxLQUFLO2dCQUNuQixDQUFDO2dCQXRCTDtvQkFBQyxnQkFBUyxDQUFDLGFBQUssQ0FBQyxJQUFJLENBQUM7d0JBQ2xCLFFBQVEsRUFBRSxXQUFXO3dCQUNyQixXQUFXLEVBQUMsaUNBQWlDO3dCQUM3QyxVQUFVLEVBQUUsQ0FBQyxpQkFBTyxFQUFDLHVCQUFVLENBQUM7cUJBQ25DLENBQUMsQ0FBQzs7Z0NBQUE7Z0JBb0JILG1CQUFDO1lBQUQsQ0FuQkEsQUFtQkMsQ0FuQmtDLGFBQUssR0FtQnZDO1lBbkJELHVDQW1CQyxDQUFBO1lBQ0QsYUFBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyIsImZpbGUiOiJpbnB1dC9JbnB1dEFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7QWlBcHB9IGZyb20gJ2FpL2NvbXBvbmVudHMvQWlBcHAvQWlBcHAnO1xuaW1wb3J0IHtBaUlucHV0fSBmcm9tICdhaS9jb21wb25lbnRzL0FpSW5wdXQvQWlJbnB1dCc7XG5pbXBvcnQge0FpVGV4dGFyZWF9IGZyb20gJ2FpL2NvbXBvbmVudHMvQWlUZXh0YXJlYS9BaVRleHRhcmVhJztcblxuXG5AQ29tcG9uZW50KEFpQXBwLm1ldGEoe1xuICAgIHNlbGVjdG9yOiAnaW5wdXQtYXBwJyxcbiAgICB0ZW1wbGF0ZVVybDoncGFja2FnZTphcHAvaW5wdXQvSW5wdXRBcHAuaHRtbCcsXG4gICAgZGlyZWN0aXZlczogW0FpSW5wdXQsQWlUZXh0YXJlYV0gIFxufSkpXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50ICBleHRlbmRzIEFpQXBweyAgXG4gICAgc3BpbkJ1dHRvblNwaW5uaW5nOmJvb2xlYW49ZmFsc2U7XG4gICAgdmFsdWVBOnN0cmluZz0nSGVsbG8nO1xuXG4gICAgb25TcGluQnV0dG9uQ2xpY2soKXtcbiAgICAgICAgdGhpcy5zcGluQnV0dG9uU3Bpbm5pbmc9IXRoaXMuc3BpbkJ1dHRvblNwaW5uaW5nOyAgICAgICAgIFxuICAgIH1cblxuICAgIG9uUmlnaHRDbGljaygpe1xuICAgICAgICBhbGVydCgncmlnaHQnKTtcbiAgICB9XG4gICAgXG4gICAgb25MZWZ0Q2xpY2soKXtcbiAgICAgICAgYWxlcnQoJ2NsaWNrIGxlZnQnKTtcbiAgICB9XG5cbiAgICBvblZhbHVlQ2hhbmdlKHZhbHVlKXtcbiAgICB9XG5cbn1cbkFpQXBwLmJvb3QoQXBwQ29tcG9uZW50KTsgICJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
