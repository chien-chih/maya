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
                AppComponent.prototype.onRightClick = function () {
                    alert('right');
                };
                AppComponent.prototype.onLeftClick = function () {
                    alert('left');
                };
                AppComponent.prototype.onValueChange = function (value) {
                    debugger;
                    alert(value);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlucHV0L0lucHV0QXBwLnRzIl0sIm5hbWVzIjpbIkFwcENvbXBvbmVudCIsIkFwcENvbXBvbmVudC5jb25zdHJ1Y3RvciIsIkFwcENvbXBvbmVudC5vblNwaW5CdXR0b25DbGljayIsIkFwcENvbXBvbmVudC5vblJpZ2h0Q2xpY2siLCJBcHBDb21wb25lbnQub25MZWZ0Q2xpY2siLCJBcHBDb21wb25lbnQub25WYWx1ZUNoYW5nZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFLQTtnQkFLbUNBLGdDQUFLQTtnQkFMeENBO29CQUttQ0MsOEJBQUtBO29CQUNwQ0EsdUJBQWtCQSxHQUFTQSxLQUFLQSxDQUFDQTtnQkFtQnJDQSxDQUFDQTtnQkFqQkdELHdDQUFpQkEsR0FBakJBO29CQUNJRSxJQUFJQSxDQUFDQSxrQkFBa0JBLEdBQUNBLENBQUNBLElBQUlBLENBQUNBLGtCQUFrQkEsQ0FBQ0E7Z0JBQ3JEQSxDQUFDQTtnQkFFREYsbUNBQVlBLEdBQVpBO29CQUNJRyxLQUFLQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQTtnQkFDbkJBLENBQUNBO2dCQUVESCxrQ0FBV0EsR0FBWEE7b0JBQ0lJLEtBQUtBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBO2dCQUNsQkEsQ0FBQ0E7Z0JBRURKLG9DQUFhQSxHQUFiQSxVQUFjQSxLQUFLQTtvQkFDZkssUUFBUUEsQ0FBQUE7b0JBQ1JBLEtBQUtBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO2dCQUNqQkEsQ0FBQ0E7Z0JBdkJMTDtvQkFBQ0EsZ0JBQVNBLENBQUNBLGFBQUtBLENBQUNBLElBQUlBLENBQUNBO3dCQUNsQkEsUUFBUUEsRUFBRUEsV0FBV0E7d0JBQ3JCQSxXQUFXQSxFQUFDQSxpQ0FBaUNBO3dCQUM3Q0EsVUFBVUEsRUFBRUEsQ0FBQ0EsaUJBQU9BLENBQUNBO3FCQUN4QkEsQ0FBQ0EsQ0FBQ0E7O2lDQXFCRkE7Z0JBQURBLG1CQUFDQTtZQUFEQSxDQXpCQSxBQXlCQ0EsRUFwQmtDLGFBQUssRUFvQnZDO1lBekJELHVDQXlCQyxDQUFBO1lBQ0QsYUFBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyIsImZpbGUiOiJpbnB1dC9JbnB1dEFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7QWlBcHB9IGZyb20gJ2FpL2NvbXBvbmVudHMvQWlBcHAvQWlBcHAnO1xuaW1wb3J0IHtBaUlucHV0fSBmcm9tICdhaS9jb21wb25lbnRzL0FpSW5wdXQvQWlJbnB1dCc7XG5cblxuQENvbXBvbmVudChBaUFwcC5tZXRhKHtcbiAgICBzZWxlY3RvcjogJ2lucHV0LWFwcCcsXG4gICAgdGVtcGxhdGVVcmw6J3BhY2thZ2U6YXBwL2lucHV0L0lucHV0QXBwLmh0bWwnLFxuICAgIGRpcmVjdGl2ZXM6IFtBaUlucHV0XSAgXG59KSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgIGV4dGVuZHMgQWlBcHB7ICBcbiAgICBzcGluQnV0dG9uU3Bpbm5pbmc6Ym9vbGVhbj1mYWxzZTtcbiAgICBcbiAgICBvblNwaW5CdXR0b25DbGljaygpe1xuICAgICAgICB0aGlzLnNwaW5CdXR0b25TcGlubmluZz0hdGhpcy5zcGluQnV0dG9uU3Bpbm5pbmc7ICAgICAgICAgXG4gICAgfVxuXG4gICAgb25SaWdodENsaWNrKCl7XG4gICAgICAgIGFsZXJ0KCdyaWdodCcpO1xuICAgIH1cbiAgICBcbiAgICBvbkxlZnRDbGljaygpe1xuICAgICAgICBhbGVydCgnbGVmdCcpO1xuICAgIH1cblxuICAgIG9uVmFsdWVDaGFuZ2UodmFsdWUpe1xuICAgICAgICBkZWJ1Z2dlclxuICAgICAgICBhbGVydCh2YWx1ZSk7XG4gICAgfVxuXG59XG5BaUFwcC5ib290KEFwcENvbXBvbmVudCk7ICAiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
