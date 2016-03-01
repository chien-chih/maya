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
                    this.valueA = '';
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlucHV0L0lucHV0QXBwLnRzIl0sIm5hbWVzIjpbIkFwcENvbXBvbmVudCIsIkFwcENvbXBvbmVudC5jb25zdHJ1Y3RvciIsIkFwcENvbXBvbmVudC5vblNwaW5CdXR0b25DbGljayIsIkFwcENvbXBvbmVudC5vblJpZ2h0Q2xpY2siLCJBcHBDb21wb25lbnQub25MZWZ0Q2xpY2siLCJBcHBDb21wb25lbnQub25WYWx1ZUNoYW5nZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFLQTtnQkFLbUNBLGdDQUFLQTtnQkFMeENBO29CQUttQ0MsOEJBQUtBO29CQUNwQ0EsdUJBQWtCQSxHQUFTQSxLQUFLQSxDQUFDQTtvQkFDakNBLFdBQU1BLEdBQVFBLEVBQUVBLENBQUNBO2dCQWlCckJBLENBQUNBO2dCQWZHRCx3Q0FBaUJBLEdBQWpCQTtvQkFDSUUsSUFBSUEsQ0FBQ0Esa0JBQWtCQSxHQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxrQkFBa0JBLENBQUNBO2dCQUNyREEsQ0FBQ0E7Z0JBRURGLG1DQUFZQSxHQUFaQTtvQkFDSUcsS0FBS0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ25CQSxDQUFDQTtnQkFFREgsa0NBQVdBLEdBQVhBO29CQUNJSSxLQUFLQSxDQUFDQSxZQUFZQSxDQUFDQSxDQUFDQTtnQkFDeEJBLENBQUNBO2dCQUVESixvQ0FBYUEsR0FBYkEsVUFBY0EsS0FBS0E7Z0JBQ25CSyxDQUFDQTtnQkF0QkxMO29CQUFDQSxnQkFBU0EsQ0FBQ0EsYUFBS0EsQ0FBQ0EsSUFBSUEsQ0FBQ0E7d0JBQ2xCQSxRQUFRQSxFQUFFQSxXQUFXQTt3QkFDckJBLFdBQVdBLEVBQUNBLGlDQUFpQ0E7d0JBQzdDQSxVQUFVQSxFQUFFQSxDQUFDQSxpQkFBT0EsQ0FBQ0E7cUJBQ3hCQSxDQUFDQSxDQUFDQTs7aUNBb0JGQTtnQkFBREEsbUJBQUNBO1lBQURBLENBeEJBLEFBd0JDQSxFQW5Ca0MsYUFBSyxFQW1CdkM7WUF4QkQsdUNBd0JDLENBQUE7WUFDRCxhQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDIiwiZmlsZSI6ImlucHV0L0lucHV0QXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtBaUFwcH0gZnJvbSAnYWkvY29tcG9uZW50cy9BaUFwcC9BaUFwcCc7XG5pbXBvcnQge0FpSW5wdXR9IGZyb20gJ2FpL2NvbXBvbmVudHMvQWlJbnB1dC9BaUlucHV0JztcblxuXG5AQ29tcG9uZW50KEFpQXBwLm1ldGEoe1xuICAgIHNlbGVjdG9yOiAnaW5wdXQtYXBwJyxcbiAgICB0ZW1wbGF0ZVVybDoncGFja2FnZTphcHAvaW5wdXQvSW5wdXRBcHAuaHRtbCcsXG4gICAgZGlyZWN0aXZlczogW0FpSW5wdXRdICBcbn0pKVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCAgZXh0ZW5kcyBBaUFwcHsgIFxuICAgIHNwaW5CdXR0b25TcGlubmluZzpib29sZWFuPWZhbHNlO1xuICAgIHZhbHVlQTpzdHJpbmc9Jyc7XG5cbiAgICBvblNwaW5CdXR0b25DbGljaygpe1xuICAgICAgICB0aGlzLnNwaW5CdXR0b25TcGlubmluZz0hdGhpcy5zcGluQnV0dG9uU3Bpbm5pbmc7ICAgICAgICAgXG4gICAgfVxuXG4gICAgb25SaWdodENsaWNrKCl7XG4gICAgICAgIGFsZXJ0KCdyaWdodCcpO1xuICAgIH1cbiAgICBcbiAgICBvbkxlZnRDbGljaygpe1xuICAgICAgICBhbGVydCgnY2xpY2sgbGVmdCcpO1xuICAgIH1cblxuICAgIG9uVmFsdWVDaGFuZ2UodmFsdWUpe1xuICAgIH1cblxufVxuQWlBcHAuYm9vdChBcHBDb21wb25lbnQpOyAgIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
