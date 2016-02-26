System.register(['angular2/core', 'ai/components/AiApp/AiApp', 'ai/components/AiInput/AiInput'], function(exports_1) {
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
    var core_1, AiApp_1, AiInput_1;
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
            }],
        execute: function() {
            AppComponent = (function (_super) {
                __extends(AppComponent, _super);
                function AppComponent() {
                    _super.apply(this, arguments);
                    this.spinButtonSpinning = false;
                }
                AppComponent.prototype.onSpinButtonClick = function () {
                    this.spinButtonSpinning = !this.spinButtonSpinning;
                };
                AppComponent = __decorate([
                    core_1.Component(AiApp_1.AiApp.meta({
                        selector: 'input-app',
                        templateUrl: 'package:app/input/InputApp.html',
                        directives: [AiInput_1.AiInput]
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlucHV0L0lucHV0QXBwLnRzIl0sIm5hbWVzIjpbIkFwcENvbXBvbmVudCIsIkFwcENvbXBvbmVudC5jb25zdHJ1Y3RvciIsIkFwcENvbXBvbmVudC5vblNwaW5CdXR0b25DbGljayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFLQTtnQkFLbUNBLGdDQUFLQTtnQkFMeENBO29CQUttQ0MsOEJBQUtBO29CQUNwQ0EsdUJBQWtCQSxHQUFTQSxLQUFLQSxDQUFDQTtnQkFLckNBLENBQUNBO2dCQUhHRCx3Q0FBaUJBLEdBQWpCQTtvQkFDSUUsSUFBSUEsQ0FBQ0Esa0JBQWtCQSxHQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxrQkFBa0JBLENBQUNBO2dCQUNyREEsQ0FBQ0E7Z0JBVkxGO29CQUFDQSxnQkFBU0EsQ0FBQ0EsYUFBS0EsQ0FBQ0EsSUFBSUEsQ0FBQ0E7d0JBQ2xCQSxRQUFRQSxFQUFFQSxXQUFXQTt3QkFDckJBLFdBQVdBLEVBQUNBLGlDQUFpQ0E7d0JBQzdDQSxVQUFVQSxFQUFFQSxDQUFDQSxpQkFBT0EsQ0FBQ0E7cUJBQ3hCQSxDQUFDQSxDQUFDQTs7aUNBT0ZBO2dCQUFEQSxtQkFBQ0E7WUFBREEsQ0FYQSxBQVdDQSxFQU5rQyxhQUFLLEVBTXZDO1lBWEQsdUNBV0MsQ0FBQTtZQUNELGFBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMiLCJmaWxlIjoiaW5wdXQvSW5wdXRBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0FpQXBwfSBmcm9tICdhaS9jb21wb25lbnRzL0FpQXBwL0FpQXBwJztcbmltcG9ydCB7QWlJbnB1dH0gZnJvbSAnYWkvY29tcG9uZW50cy9BaUlucHV0L0FpSW5wdXQnO1xuXG5cbkBDb21wb25lbnQoQWlBcHAubWV0YSh7XG4gICAgc2VsZWN0b3I6ICdpbnB1dC1hcHAnLFxuICAgIHRlbXBsYXRlVXJsOidwYWNrYWdlOmFwcC9pbnB1dC9JbnB1dEFwcC5odG1sJyxcbiAgICBkaXJlY3RpdmVzOiBbQWlJbnB1dF0gIFxufSkpXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50ICBleHRlbmRzIEFpQXBweyAgXG4gICAgc3BpbkJ1dHRvblNwaW5uaW5nOmJvb2xlYW49ZmFsc2U7XG4gICAgXG4gICAgb25TcGluQnV0dG9uQ2xpY2soKXtcbiAgICAgICAgdGhpcy5zcGluQnV0dG9uU3Bpbm5pbmc9IXRoaXMuc3BpbkJ1dHRvblNwaW5uaW5nOyAgICAgICAgIFxuICAgIH1cbn1cbkFpQXBwLmJvb3QoQXBwQ29tcG9uZW50KTsgICJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
