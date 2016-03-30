System.register(['angular2/core', 'ai/components/AiApp/AiApp', 'ai/components/AiButton/AiButton', 'ai/components/AiPopup/AiPopupInclude'], function(exports_1) {
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
    var core_1, AiApp_1, AiButton_1, AiPopupInclude_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (AiApp_1_1) {
                AiApp_1 = AiApp_1_1;
            },
            function (AiButton_1_1) {
                AiButton_1 = AiButton_1_1;
            },
            function (AiPopupInclude_1_1) {
                AiPopupInclude_1 = AiPopupInclude_1_1;
            }],
        execute: function() {
            AppComponent = (function (_super) {
                __extends(AppComponent, _super);
                function AppComponent(modal, elementRef, injector, _renderer) {
                    _super.call(this, elementRef);
                    this.modal = modal;
                    this.elementRef = elementRef;
                    this.injector = injector;
                    this._renderer = _renderer;
                }
                AppComponent.prototype.onClick = function () {
                    var _this = this;
                    var modalContent = new AiPopupInclude_1.YesNoModalContent('Simple Small modal', 'Press ESC or click OK / outside area to close.', true);
                    var dialog;
                    var bindings = core_1.Injector.resolve([
                        core_1.provide(AiPopupInclude_1.YesNoModalContent, { useValue: modalContent })
                    ]);
                    dialog = this.modal.open(AiPopupInclude_1.YesNoModal, bindings);
                    dialog.then(function (resultPromise) {
                        return resultPromise.result.then(function (result) {
                            _this.lastModalResult = result;
                        }, function () {
                            _this.lastModalResult = 'Rejected!';
                        });
                    });
                };
                AppComponent = __decorate([
                    core_1.Component(AiApp_1.AiApp.meta({
                        selector: 'popup-app',
                        providers: [AiPopupInclude_1.Modal],
                        templateUrl: 'package:app/popup/PopupApp.html',
                        directives: [AiButton_1.AiButton]
                    })), 
                    __metadata('design:paramtypes', [AiPopupInclude_1.Modal, core_1.ElementRef, core_1.Injector, core_1.Renderer])
                ], AppComponent);
                return AppComponent;
            })(AiApp_1.AiApp);
            exports_1("AppComponent", AppComponent);
            AiApp_1.AiApp.boot(AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvcHVwL1BvcHVwQXBwLnRzIl0sIm5hbWVzIjpbIkFwcENvbXBvbmVudCIsIkFwcENvbXBvbmVudC5jb25zdHJ1Y3RvciIsIkFwcENvbXBvbmVudC5vbkNsaWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUtBO2dCQU1tQ0EsZ0NBQUtBO2dCQUlwQ0Esc0JBQW9CQSxLQUFZQSxFQUFVQSxVQUFzQkEsRUFDNUNBLFFBQWtCQSxFQUFVQSxTQUFtQkE7b0JBQzVEQyxrQkFBTUEsVUFBVUEsQ0FBQ0EsQ0FBQ0E7b0JBRkxBLFVBQUtBLEdBQUxBLEtBQUtBLENBQU9BO29CQUFVQSxlQUFVQSxHQUFWQSxVQUFVQSxDQUFZQTtvQkFDNUNBLGFBQVFBLEdBQVJBLFFBQVFBLENBQVVBO29CQUFVQSxjQUFTQSxHQUFUQSxTQUFTQSxDQUFVQTtnQkFFbkVBLENBQUNBO2dCQUVERCw4QkFBT0EsR0FBUEE7b0JBQUFFLGlCQXdCQ0E7b0JBdkJHQSxJQUFJQSxZQUFZQSxHQUFxQkEsSUFBSUEsa0NBQWlCQSxDQUFDQSxvQkFBb0JBLEVBQUVBLGdEQUFnREEsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7b0JBRXpJQSxJQUFJQSxNQUErQkEsQ0FBQ0E7b0JBQ3BDQSxJQUFJQSxRQUFRQSxHQUFHQSxlQUFRQSxDQUFDQSxPQUFPQSxDQUFDQTt3QkFDNUJBLGNBQU9BLENBQUNBLGtDQUFpQkEsRUFBRUEsRUFBQ0EsUUFBUUEsRUFBRUEsWUFBWUEsRUFBQ0EsQ0FBQ0E7cUJBQ3ZEQSxDQUFDQSxDQUFDQTtvQkFFSEEsTUFBTUEsR0FBR0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsSUFBSUEsQ0FBTUEsMkJBQVVBLEVBQUNBLFFBQVFBLENBQUNBLENBQUNBO29CQUVuREEsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FDUEEsVUFBQ0EsYUFBYUE7d0JBQ1ZBLE1BQU1BLENBQUNBLGFBQWFBLENBQUNBLE1BQU1BLENBQUNBLElBQUlBLENBQzVCQSxVQUFDQSxNQUFNQTs0QkFFSEEsS0FBSUEsQ0FBQ0EsZUFBZUEsR0FBR0EsTUFBTUEsQ0FBQ0E7d0JBQ2xDQSxDQUFDQSxFQUNEQTs0QkFDSUEsS0FBSUEsQ0FBQ0EsZUFBZUEsR0FBR0EsV0FBV0EsQ0FBQ0E7d0JBRXZDQSxDQUFDQSxDQUNKQSxDQUFDQTtvQkFDTkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBRVhBLENBQUNBO2dCQXZDTEY7b0JBQUNBLGdCQUFTQSxDQUFDQSxhQUFLQSxDQUFDQSxJQUFJQSxDQUFDQTt3QkFDbEJBLFFBQVFBLEVBQUVBLFdBQVdBO3dCQUNyQkEsU0FBU0EsRUFBRUEsQ0FBQ0Esc0JBQUtBLENBQUNBO3dCQUNsQkEsV0FBV0EsRUFBQ0EsaUNBQWlDQTt3QkFDN0NBLFVBQVVBLEVBQUVBLENBQUNBLG1CQUFRQSxDQUFDQTtxQkFDekJBLENBQUNBLENBQUNBOztpQ0FxQ0ZBO2dCQUFEQSxtQkFBQ0E7WUFBREEsQ0ExQ0EsQUEwQ0NBLEVBcENrQyxhQUFLLEVBb0N2QztZQTFDRCx1Q0EwQ0MsQ0FBQTtZQUNELGFBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMiLCJmaWxlIjoicG9wdXAvUG9wdXBBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIHByb3ZpZGUsIEVsZW1lbnRSZWYsIEluamVjdG9yLCBSZW5kZXJlcn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0FpQXBwfSBmcm9tICdhaS9jb21wb25lbnRzL0FpQXBwL0FpQXBwJztcbmltcG9ydCB7QWlCdXR0b259IGZyb20gJ2FpL2NvbXBvbmVudHMvQWlCdXR0b24vQWlCdXR0b24nO1xuaW1wb3J0IHsgTW9kYWxJbnN0YW5jZSxNb2RhbENvbmZpZywgTW9kYWwsIFllc05vTW9kYWxDb250ZW50LCBZZXNOb01vZGFsfSBmcm9tICdhaS9jb21wb25lbnRzL0FpUG9wdXAvQWlQb3B1cEluY2x1ZGUnO1xuXG5AQ29tcG9uZW50KEFpQXBwLm1ldGEoe1xuICAgIHNlbGVjdG9yOiAncG9wdXAtYXBwJyxcbiAgICBwcm92aWRlcnM6IFtNb2RhbF0sXG4gICAgdGVtcGxhdGVVcmw6J3BhY2thZ2U6YXBwL3BvcHVwL1BvcHVwQXBwLmh0bWwnLFxuICAgIGRpcmVjdGl2ZXM6IFtBaUJ1dHRvbl0gIFxufSkpXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50ICBleHRlbmRzIEFpQXBweyAgXG5cbiAgICBwdWJsaWMgbGFzdE1vZGFsUmVzdWx0OiBzdHJpbmc7XG4gICAgXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBtb2RhbDogTW9kYWwsIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICAgICAgICAgICAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvciwgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyKSB7XG4gICAgICAgICAgIHN1cGVyKGVsZW1lbnRSZWYpOyAgICAgICAgICAgICBcbiAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgb25DbGljaygpe1xuICAgICAgICB2YXIgbW9kYWxDb250ZW50Olllc05vTW9kYWxDb250ZW50ID0gbmV3IFllc05vTW9kYWxDb250ZW50KCdTaW1wbGUgU21hbGwgbW9kYWwnLCAnUHJlc3MgRVNDIG9yIGNsaWNrIE9LIC8gb3V0c2lkZSBhcmVhIHRvIGNsb3NlLicsIHRydWUpO1xuIFxuICAgICAgICBsZXQgZGlhbG9nOiAgUHJvbWlzZTxNb2RhbEluc3RhbmNlPjtcbiAgICAgICAgbGV0IGJpbmRpbmdzID0gSW5qZWN0b3IucmVzb2x2ZShbXG4gICAgICAgICAgICBwcm92aWRlKFllc05vTW9kYWxDb250ZW50LCB7dXNlVmFsdWU6IG1vZGFsQ29udGVudH0pXG4gICAgICAgIF0pO1xuXG4gICAgICAgIGRpYWxvZyA9IHRoaXMubW9kYWwub3Blbig8YW55Plllc05vTW9kYWwsYmluZGluZ3MpO1xuICAgICAgICAgICAgXG4gICAgICAgIGRpYWxvZy50aGVuKFxuICAgICAgICAgICAgKHJlc3VsdFByb21pc2UpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0UHJvbWlzZS5yZXN1bHQudGhlbihcbiAgICAgICAgICAgICAgICAgICAgKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0TW9kYWxSZXN1bHQgPSByZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgIH0sIFxuICAgICAgICAgICAgICAgICAgICAoKSA9PnsgXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RNb2RhbFJlc3VsdCA9ICdSZWplY3RlZCEnO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSk7ICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICB9XG5cblxufVxuQWlBcHAuYm9vdChBcHBDb21wb25lbnQpOyAgIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
