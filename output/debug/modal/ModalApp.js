System.register(['angular2/core', 'ai/components/Ai'], function(exports_1) {
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
    var core_1, Ai_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Ai_1_1) {
                Ai_1 = Ai_1_1;
            }],
        execute: function() {
            AppComponent = (function (_super) {
                __extends(AppComponent, _super);
                function AppComponent(modal, dialog, elementRef, injector, _renderer) {
                    _super.call(this, elementRef);
                    this.modal = modal;
                    this.dialog = dialog;
                    this.elementRef = elementRef;
                    this.injector = injector;
                    this._renderer = _renderer;
                }
                AppComponent.prototype.onClick = function () {
                    this.dialog.confirm('hello', function (value) {
                        window.alert(value);
                    });
                };
                AppComponent = __decorate([
                    core_1.Component(Ai_1.AiApp.meta({
                        selector: 'modal-app',
                        providers: [Ai_1.AiModal, Ai_1.AiDialog],
                        templateUrl: 'package:app/modal/ModalApp.html',
                        directives: [Ai_1.AiButton]
                    })), 
                    __metadata('design:paramtypes', [Ai_1.AiModal, Ai_1.AiDialog, core_1.ElementRef, core_1.Injector, core_1.Renderer])
                ], AppComponent);
                return AppComponent;
            })(Ai_1.AiApp);
            exports_1("AppComponent", AppComponent);
            Ai_1.AiApp.boot(AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGFsL01vZGFsQXBwLnRzIl0sIm5hbWVzIjpbIkFwcENvbXBvbmVudCIsIkFwcENvbXBvbmVudC5jb25zdHJ1Y3RvciIsIkFwcENvbXBvbmVudC5vbkNsaWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUdBO2dCQU1tQ0EsZ0NBQUtBO2dCQUlwQ0Esc0JBQW9CQSxLQUFjQSxFQUFTQSxNQUFnQkEsRUFBVUEsVUFBc0JBLEVBQ3ZFQSxRQUFrQkEsRUFBVUEsU0FBbUJBO29CQUM1REMsa0JBQU1BLFVBQVVBLENBQUNBLENBQUNBO29CQUZMQSxVQUFLQSxHQUFMQSxLQUFLQSxDQUFTQTtvQkFBU0EsV0FBTUEsR0FBTkEsTUFBTUEsQ0FBVUE7b0JBQVVBLGVBQVVBLEdBQVZBLFVBQVVBLENBQVlBO29CQUN2RUEsYUFBUUEsR0FBUkEsUUFBUUEsQ0FBVUE7b0JBQVVBLGNBQVNBLEdBQVRBLFNBQVNBLENBQVVBO2dCQUduRUEsQ0FBQ0E7Z0JBRURELDhCQUFPQSxHQUFQQTtvQkFDSUUsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsT0FBT0EsRUFBQ0EsVUFBU0EsS0FBS0E7d0JBQ3RDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3hCLENBQUMsQ0FBQ0EsQ0FBQ0E7Z0JBZ0NQQSxDQUFDQTtnQkFuRExGO29CQUFDQSxnQkFBU0EsQ0FBQ0EsVUFBS0EsQ0FBQ0EsSUFBSUEsQ0FBQ0E7d0JBQ2xCQSxRQUFRQSxFQUFFQSxXQUFXQTt3QkFDckJBLFNBQVNBLEVBQUVBLENBQUNBLFlBQU9BLEVBQUNBLGFBQVFBLENBQUNBO3dCQUM3QkEsV0FBV0EsRUFBQ0EsaUNBQWlDQTt3QkFDN0NBLFVBQVVBLEVBQUVBLENBQUNBLGFBQVFBLENBQUNBO3FCQUN6QkEsQ0FBQ0EsQ0FBQ0E7O2lDQStDRkE7Z0JBQURBLG1CQUFDQTtZQUFEQSxDQXBEQSxBQW9EQ0EsRUE5Q2tDLFVBQUssRUE4Q3ZDO1lBcERELHVDQW9EQyxDQUFBO1lBQ0QsVUFBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyIsImZpbGUiOiJtb2RhbC9Nb2RhbEFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgcHJvdmlkZSwgRWxlbWVudFJlZiwgSW5qZWN0b3IsIFJlbmRlcmVyfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7QWlBcHAsQWlEaWFsb2csQWlCdXR0b24sIEFpTW9kYWxJbnN0YW5jZSxBaU1vZGFsQ29uZmlnLEFpTW9kYWxQb3NpdGlvbixBaU1vZGFsQWxpZ24sIEFpTW9kYWwsIENvbmZpcm1Db250ZXh0LCBDb25maXJtRGlhbG9nfSBmcm9tICdhaS9jb21wb25lbnRzL0FpJztcblxuQENvbXBvbmVudChBaUFwcC5tZXRhKHtcbiAgICBzZWxlY3RvcjogJ21vZGFsLWFwcCcsXG4gICAgcHJvdmlkZXJzOiBbQWlNb2RhbCxBaURpYWxvZ10sXG4gICAgdGVtcGxhdGVVcmw6J3BhY2thZ2U6YXBwL21vZGFsL01vZGFsQXBwLmh0bWwnLFxuICAgIGRpcmVjdGl2ZXM6IFtBaUJ1dHRvbl0gIFxufSkpXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50ICBleHRlbmRzIEFpQXBweyAgXG5cbiAgICBwdWJsaWMgbGFzdE1vZGFsUmVzdWx0OiBzdHJpbmc7XG4gICAgXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBtb2RhbDogQWlNb2RhbCxwcml2YXRlIGRpYWxvZzogQWlEaWFsb2csIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICAgICAgICAgICAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvciwgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyKSB7XG4gICAgICAgICAgIHN1cGVyKGVsZW1lbnRSZWYpOyAgICBcbiAgICAgICAgICAgXG4gICAgfVxuICAgICAgICAgICAgICAgIFxuICAgIG9uQ2xpY2soKXtcbiAgICAgICAgdGhpcy5kaWFsb2cuY29uZmlybSgnaGVsbG8nLGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAgICAgICAgIHdpbmRvdy5hbGVydCh2YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgICAvKlxuICAgICAgICB2YXIgbW9kYWxDb250ZW50OkNvbmZpcm1Db250ZXh0ID0gbmV3IENvbmZpcm1Db250ZXh0KCdTaW1wbGUgU21hbGwgbW9kYWwnLCAnUHJlc3MgRVNDIG9yIGNsaWNrIE9LIC8gb3V0c2lkZSBhcmVhIHRvIGNsb3NlLicpO1xuIFxuICAgICAgICBsZXQgZGlhbG9nOiAgUHJvbWlzZTxBaU1vZGFsSW5zdGFuY2U+O1xuICAgICAgICBsZXQgYmluZGluZ3MgPSBJbmplY3Rvci5yZXNvbHZlKFtcbiAgICAgICAgICAgIHByb3ZpZGUoQ29uZmlybUNvbnRleHQsIHt1c2VWYWx1ZTogbW9kYWxDb250ZW50fSlcbiAgICAgICAgXSk7XG5cbiAgICAgICAgbGV0IGNvbmZpZzpBaU1vZGFsQ29uZmlnID1uZXcgQWlNb2RhbENvbmZpZygpO1xuICAgICAgICAvL2NvbmZpZy5tYXNrPSdibGFjayc7XG4gICAgICAgIC8vY29uZmlnLnRyYWNraW5nU2l6ZVBvc2l0aW9uPXRydWU7XG4gICAgICAgIC8vY29uZmlnLmFuY2hvck5hbWU9XCJtb2RhbEhlcmVcIjtcbiAgICAgICAgY29uZmlnLnk9bmV3IEFpTW9kYWxQb3NpdGlvbihcIjEwMCVcIixBaU1vZGFsQWxpZ24uQmVnaW4pO1xuICAgICAgICBjb25maWcuYXJvdW5kVG89J2J0bic7XG4gICAgICAgIFxuICAgICAgICBkaWFsb2cgPSB0aGlzLm1vZGFsLm9wZW4oPGFueT5Db25maXJtRGlhbG9nLGJpbmRpbmdzLGNvbmZpZyk7XG4gICAgICAgICAgICBcbiAgICAgICAgZGlhbG9nLnRoZW4oXG4gICAgICAgICAgICAocmVzdWx0UHJvbWlzZSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHRQcm9taXNlLnJlc3VsdC50aGVuKFxuICAgICAgICAgICAgICAgICAgICAocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RNb2RhbFJlc3VsdCA9IHJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgfSwgXG4gICAgICAgICAgICAgICAgICAgICgpID0+eyBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdE1vZGFsUmVzdWx0ID0gJ1JlamVjdGVkISc7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KTsgICAgICAgICAgICBcbiAgICAgICAgKi8gICAgXG4gICAgfVxufVxuQWlBcHAuYm9vdChBcHBDb21wb25lbnQpOyAgICAiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
