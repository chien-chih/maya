System.register(['angular2/core', 'ai/components/AiButton/AiButton', 'ai/components/AiIcon/AiIcon', 'ai/components/AiApp/AiApp'], function(exports_1) {
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
    var core_1, AiButton_1, AiIcon_1, AiApp_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (AiButton_1_1) {
                AiButton_1 = AiButton_1_1;
            },
            function (AiIcon_1_1) {
                AiIcon_1 = AiIcon_1_1;
            },
            function (AiApp_1_1) {
                AiApp_1 = AiApp_1_1;
            }],
        execute: function() {
            AppComponent = (function (_super) {
                __extends(AppComponent, _super);
                function AppComponent(ele) {
                    _super.call(this, ele);
                    this.i = 0;
                }
                AppComponent.prototype.isEventSupported = function (eventName) {
                    var TAGNAMES = {
                        'select': 'input', 'change': 'input',
                        'submit': 'form', 'reset': 'form',
                        'error': 'img', 'load': 'img', 'abort': 'img'
                    };
                    var el = document.createElement(TAGNAMES[eventName] || 'div');
                    eventName = 'on' + eventName;
                    var isSupported = (eventName in el);
                    if (!isSupported) {
                        el.setAttribute(eventName, 'return;');
                        isSupported = typeof el[eventName] == 'function';
                    }
                    el = null;
                    return isSupported;
                };
                AppComponent.prototype.onClick = function () {
                };
                AppComponent = __decorate([
                    core_1.Component(AiApp_1.AiApp.meta({
                        selector: 'button-app',
                        templateUrl: 'package:app/button/ButtonApp.html',
                        directives: [AiButton_1.AiButton, AiIcon_1.AiIcon]
                    })), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], AppComponent);
                return AppComponent;
            })(AiApp_1.AiApp);
            exports_1("AppComponent", AppComponent);
            AiApp_1.AiApp.boot(AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1dHRvbi9CdXR0b25BcHAudHMiXSwibmFtZXMiOlsiQXBwQ29tcG9uZW50IiwiQXBwQ29tcG9uZW50LmNvbnN0cnVjdG9yIiwiQXBwQ29tcG9uZW50LmlzRXZlbnRTdXBwb3J0ZWQiLCJBcHBDb21wb25lbnQub25DbGljayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFPQTtnQkFLa0NBLGdDQUFLQTtnQkFFbkNBLHNCQUFZQSxHQUFlQTtvQkFDdkJDLGtCQUFNQSxHQUFHQSxDQUFDQSxDQUFDQTtvQkFxQmZBLE1BQUNBLEdBQVFBLENBQUNBLENBQUNBO2dCQXBCWEEsQ0FBQ0E7Z0JBRURELHVDQUFnQkEsR0FBaEJBLFVBQWlCQSxTQUFTQTtvQkFDeEJFLElBQUlBLFFBQVFBLEdBQUdBO3dCQUNiQSxRQUFRQSxFQUFDQSxPQUFPQSxFQUFDQSxRQUFRQSxFQUFDQSxPQUFPQTt3QkFDakNBLFFBQVFBLEVBQUNBLE1BQU1BLEVBQUNBLE9BQU9BLEVBQUNBLE1BQU1BO3dCQUM5QkEsT0FBT0EsRUFBQ0EsS0FBS0EsRUFBQ0EsTUFBTUEsRUFBQ0EsS0FBS0EsRUFBQ0EsT0FBT0EsRUFBQ0EsS0FBS0E7cUJBQ3pDQSxDQUFBQTtvQkFFQ0EsSUFBSUEsRUFBRUEsR0FBR0EsUUFBUUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsSUFBSUEsS0FBS0EsQ0FBQ0EsQ0FBQ0E7b0JBQzlEQSxTQUFTQSxHQUFHQSxJQUFJQSxHQUFHQSxTQUFTQSxDQUFDQTtvQkFDN0JBLElBQUlBLFdBQVdBLEdBQUdBLENBQUNBLFNBQVNBLElBQUlBLEVBQUVBLENBQUNBLENBQUNBO29CQUNwQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsV0FBV0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7d0JBQ2pCQSxFQUFFQSxDQUFDQSxZQUFZQSxDQUFDQSxTQUFTQSxFQUFFQSxTQUFTQSxDQUFDQSxDQUFDQTt3QkFDdENBLFdBQVdBLEdBQUdBLE9BQU9BLEVBQUVBLENBQUNBLFNBQVNBLENBQUNBLElBQUlBLFVBQVVBLENBQUNBO29CQUNuREEsQ0FBQ0E7b0JBQ0RBLEVBQUVBLEdBQUdBLElBQUlBLENBQUNBO29CQUNWQSxNQUFNQSxDQUFDQSxXQUFXQSxDQUFDQTtnQkFFdkJBLENBQUNBO2dCQUVERiw4QkFBT0EsR0FBUEE7Z0JBWUZHLENBQUNBO2dCQTFDSEg7b0JBQUNBLGdCQUFTQSxDQUFDQSxhQUFLQSxDQUFDQSxJQUFJQSxDQUFDQTt3QkFDbEJBLFFBQVFBLEVBQUVBLFlBQVlBO3dCQUN0QkEsV0FBV0EsRUFBQ0EsbUNBQW1DQTt3QkFDL0NBLFVBQVVBLEVBQUVBLENBQUNBLG1CQUFRQSxFQUFDQSxlQUFNQSxDQUFDQTtxQkFDaENBLENBQUNBLENBQUNBOztpQ0F1Q0ZBO2dCQUFEQSxtQkFBQ0E7WUFBREEsQ0EzQ0EsQUEyQ0NBLEVBdENpQyxhQUFLLEVBc0N0QztZQTNDRCx1Q0EyQ0MsQ0FBQTtZQUtELGFBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMiLCJmaWxlIjoiYnV0dG9uL0J1dHRvbkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LEVsZW1lbnRSZWZ9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtBaUJ1dHRvbn0gZnJvbSAnYWkvY29tcG9uZW50cy9BaUJ1dHRvbi9BaUJ1dHRvbic7XG5pbXBvcnQge0FpSWNvbn0gZnJvbSAnYWkvY29tcG9uZW50cy9BaUljb24vQWlJY29uJztcbmltcG9ydCB7QWlBcHB9IGZyb20gJ2FpL2NvbXBvbmVudHMvQWlBcHAvQWlBcHAnO1xuLy9pbXBvcnQge1BhdHRlcm5QYXJzZXJ9IGZyb20gJ2FpL2NvbXBvbmVudHMvQWlJbnB1dC9BaUZvcm1hdHRlcic7XG4vL2ltcG9ydCB7UGF0dGVybk1hdGNoZXJ9IGZyb20gJ2FpL2NvbXBvbmVudHMvQWlJbnB1dC9BaUZvcm1hdHRlcic7XG5cbkBDb21wb25lbnQoQWlBcHAubWV0YSh7XG4gICAgc2VsZWN0b3I6ICdidXR0b24tYXBwJyxcbiAgICB0ZW1wbGF0ZVVybDoncGFja2FnZTphcHAvYnV0dG9uL0J1dHRvbkFwcC5odG1sJyxcbiAgICBkaXJlY3RpdmVzOiBbQWlCdXR0b24sQWlJY29uXVxufSkpXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGV4dGVuZHMgQWlBcHB7IFxuXG4gICAgY29uc3RydWN0b3IoZWxlOiBFbGVtZW50UmVmKSB7ICBcbiAgICAgICAgc3VwZXIoZWxlKTsgXG4gICAgfVxuXG4gICAgaXNFdmVudFN1cHBvcnRlZChldmVudE5hbWUpe1xuICAgICAgdmFyIFRBR05BTUVTID0ge1xuICAgICAgICAnc2VsZWN0JzonaW5wdXQnLCdjaGFuZ2UnOidpbnB1dCcsXG4gICAgICAgICdzdWJtaXQnOidmb3JtJywncmVzZXQnOidmb3JtJyxcbiAgICAgICAgJ2Vycm9yJzonaW1nJywnbG9hZCc6J2ltZycsJ2Fib3J0JzonaW1nJ1xuICAgICAgfVxuXG4gICAgICAgIHZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoVEFHTkFNRVNbZXZlbnROYW1lXSB8fCAnZGl2Jyk7XG4gICAgICAgIGV2ZW50TmFtZSA9ICdvbicgKyBldmVudE5hbWU7XG4gICAgICAgIHZhciBpc1N1cHBvcnRlZCA9IChldmVudE5hbWUgaW4gZWwpO1xuICAgICAgICBpZiAoIWlzU3VwcG9ydGVkKSB7XG4gICAgICAgICAgZWwuc2V0QXR0cmlidXRlKGV2ZW50TmFtZSwgJ3JldHVybjsnKTtcbiAgICAgICAgICBpc1N1cHBvcnRlZCA9IHR5cGVvZiBlbFtldmVudE5hbWVdID09ICdmdW5jdGlvbic7XG4gICAgICAgIH1cbiAgICAgICAgZWwgPSBudWxsO1xuICAgICAgICByZXR1cm4gaXNTdXBwb3J0ZWQ7XG4gICAgICBcbiAgICB9XG4gICAgaTpudW1iZXI9MDtcbiAgICBvbkNsaWNrKCkge1xuLyogIFxuICAgICAgdmFyIHBwPW5ldyBQYXR0ZXJuUGFyc2VyKCk7IFxuICAgICAgdmFyIHJlc3VsdCA9IHBwLnBhcnNlKCcoe3s5QSp9fSkge3s5QSp9fS17e0FBQUF9fScpO1xuICAgICAgXG4gICAgICB2YXIgcGF0dGVybk1hdGNoZXI9bmV3IFBhdHRlcm5NYXRjaGVyKCk7XG4gICAgICBwYXR0ZXJuTWF0Y2hlci5hZGQoJ15hYmMkJywne3sqfX0te3sqfX0te3sqfX0nKTtcblxuICAgICAgdmFyIHJlc3VsdDE9cGF0dGVybk1hdGNoZXIuZ2V0UGF0dGVybignYWJjJyk7XG4gICAgICBcbiAgICAgIGRlYnVnZ2VyXG4gICAgICAqLyBcbiAgfSAgXG59ICAgXG5cblxuIFxuXG5BaUFwcC5ib290KEFwcENvbXBvbmVudCk7ICAiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
