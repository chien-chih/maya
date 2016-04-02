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
                    var config = new AiPopupInclude_1.AiModalConfig();
                    config.mask = 'black';
                    config.trackingSizePosition = true;
                    dialog = this.modal.open(AiPopupInclude_1.YesNoModal, bindings, config);
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
                        providers: [AiPopupInclude_1.AiModal],
                        templateUrl: 'package:app/popup/PopupApp.html',
                        directives: [AiButton_1.AiButton]
                    })), 
                    __metadata('design:paramtypes', [AiPopupInclude_1.AiModal, core_1.ElementRef, core_1.Injector, core_1.Renderer])
                ], AppComponent);
                return AppComponent;
            })(AiApp_1.AiApp);
            exports_1("AppComponent", AppComponent);
            AiApp_1.AiApp.boot(AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvcHVwL1BvcHVwQXBwLnRzIl0sIm5hbWVzIjpbIkFwcENvbXBvbmVudCIsIkFwcENvbXBvbmVudC5jb25zdHJ1Y3RvciIsIkFwcENvbXBvbmVudC5vbkNsaWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUtBO2dCQU1tQ0EsZ0NBQUtBO2dCQUlwQ0Esc0JBQW9CQSxLQUFjQSxFQUFVQSxVQUFzQkEsRUFDOUNBLFFBQWtCQSxFQUFVQSxTQUFtQkE7b0JBQzVEQyxrQkFBTUEsVUFBVUEsQ0FBQ0EsQ0FBQ0E7b0JBRkxBLFVBQUtBLEdBQUxBLEtBQUtBLENBQVNBO29CQUFVQSxlQUFVQSxHQUFWQSxVQUFVQSxDQUFZQTtvQkFDOUNBLGFBQVFBLEdBQVJBLFFBQVFBLENBQVVBO29CQUFVQSxjQUFTQSxHQUFUQSxTQUFTQSxDQUFVQTtnQkFFbkVBLENBQUNBO2dCQUVERCw4QkFBT0EsR0FBUEE7b0JBQUFFLGlCQStCQ0E7b0JBOUJHQSxJQUFJQSxZQUFZQSxHQUFxQkEsSUFBSUEsa0NBQWlCQSxDQUFDQSxvQkFBb0JBLEVBQUVBLGdEQUFnREEsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7b0JBRXpJQSxJQUFJQSxNQUFpQ0EsQ0FBQ0E7b0JBQ3RDQSxJQUFJQSxRQUFRQSxHQUFHQSxlQUFRQSxDQUFDQSxPQUFPQSxDQUFDQTt3QkFDNUJBLGNBQU9BLENBQUNBLGtDQUFpQkEsRUFBRUEsRUFBQ0EsUUFBUUEsRUFBRUEsWUFBWUEsRUFBQ0EsQ0FBQ0E7cUJBQ3ZEQSxDQUFDQSxDQUFDQTtvQkFFSEEsSUFBSUEsTUFBTUEsR0FBZ0JBLElBQUlBLDhCQUFhQSxFQUFFQSxDQUFDQTtvQkFDOUNBLE1BQU1BLENBQUNBLElBQUlBLEdBQUNBLE9BQU9BLENBQUNBO29CQUNwQkEsTUFBTUEsQ0FBQ0Esb0JBQW9CQSxHQUFDQSxJQUFJQSxDQUFDQTtvQkFLakNBLE1BQU1BLEdBQUdBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLElBQUlBLENBQU1BLDJCQUFVQSxFQUFDQSxRQUFRQSxFQUFDQSxNQUFNQSxDQUFDQSxDQUFDQTtvQkFFMURBLE1BQU1BLENBQUNBLElBQUlBLENBQ1BBLFVBQUNBLGFBQWFBO3dCQUNWQSxNQUFNQSxDQUFDQSxhQUFhQSxDQUFDQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUM1QkEsVUFBQ0EsTUFBTUE7NEJBRUhBLEtBQUlBLENBQUNBLGVBQWVBLEdBQUdBLE1BQU1BLENBQUNBO3dCQUNsQ0EsQ0FBQ0EsRUFDREE7NEJBQ0lBLEtBQUlBLENBQUNBLGVBQWVBLEdBQUdBLFdBQVdBLENBQUNBO3dCQUV2Q0EsQ0FBQ0EsQ0FDSkEsQ0FBQ0E7b0JBQ05BLENBQUNBLENBQUNBLENBQUNBO2dCQUVYQSxDQUFDQTtnQkE5Q0xGO29CQUFDQSxnQkFBU0EsQ0FBQ0EsYUFBS0EsQ0FBQ0EsSUFBSUEsQ0FBQ0E7d0JBQ2xCQSxRQUFRQSxFQUFFQSxXQUFXQTt3QkFDckJBLFNBQVNBLEVBQUVBLENBQUNBLHdCQUFPQSxDQUFDQTt3QkFDcEJBLFdBQVdBLEVBQUNBLGlDQUFpQ0E7d0JBQzdDQSxVQUFVQSxFQUFFQSxDQUFDQSxtQkFBUUEsQ0FBQ0E7cUJBQ3pCQSxDQUFDQSxDQUFDQTs7aUNBNENGQTtnQkFBREEsbUJBQUNBO1lBQURBLENBakRBLEFBaURDQSxFQTNDa0MsYUFBSyxFQTJDdkM7WUFqREQsdUNBaURDLENBQUE7WUFDRCxhQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDIiwiZmlsZSI6InBvcHVwL1BvcHVwQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBwcm92aWRlLCBFbGVtZW50UmVmLCBJbmplY3RvciwgUmVuZGVyZXJ9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtBaUFwcH0gZnJvbSAnYWkvY29tcG9uZW50cy9BaUFwcC9BaUFwcCc7XG5pbXBvcnQge0FpQnV0dG9ufSBmcm9tICdhaS9jb21wb25lbnRzL0FpQnV0dG9uL0FpQnV0dG9uJztcbmltcG9ydCB7IEFpTW9kYWxJbnN0YW5jZSxBaU1vZGFsQ29uZmlnLEFpTW9kYWxQb3NpdGlvbixBaU1vZGFsQWxpZ24sIEFpTW9kYWwsIFllc05vTW9kYWxDb250ZW50LCBZZXNOb01vZGFsfSBmcm9tICdhaS9jb21wb25lbnRzL0FpUG9wdXAvQWlQb3B1cEluY2x1ZGUnO1xuXG5AQ29tcG9uZW50KEFpQXBwLm1ldGEoe1xuICAgIHNlbGVjdG9yOiAncG9wdXAtYXBwJyxcbiAgICBwcm92aWRlcnM6IFtBaU1vZGFsXSxcbiAgICB0ZW1wbGF0ZVVybDoncGFja2FnZTphcHAvcG9wdXAvUG9wdXBBcHAuaHRtbCcsXG4gICAgZGlyZWN0aXZlczogW0FpQnV0dG9uXSAgXG59KSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgIGV4dGVuZHMgQWlBcHB7ICBcblxuICAgIHB1YmxpYyBsYXN0TW9kYWxSZXN1bHQ6IHN0cmluZztcbiAgICBcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1vZGFsOiBBaU1vZGFsLCBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcikge1xuICAgICAgICAgICBzdXBlcihlbGVtZW50UmVmKTsgICAgICAgICAgICAgXG4gICAgfVxuICAgICAgICAgICAgICAgIFxuICAgIG9uQ2xpY2soKXtcbiAgICAgICAgdmFyIG1vZGFsQ29udGVudDpZZXNOb01vZGFsQ29udGVudCA9IG5ldyBZZXNOb01vZGFsQ29udGVudCgnU2ltcGxlIFNtYWxsIG1vZGFsJywgJ1ByZXNzIEVTQyBvciBjbGljayBPSyAvIG91dHNpZGUgYXJlYSB0byBjbG9zZS4nLCB0cnVlKTtcbiBcbiAgICAgICAgbGV0IGRpYWxvZzogIFByb21pc2U8QWlNb2RhbEluc3RhbmNlPjtcbiAgICAgICAgbGV0IGJpbmRpbmdzID0gSW5qZWN0b3IucmVzb2x2ZShbXG4gICAgICAgICAgICBwcm92aWRlKFllc05vTW9kYWxDb250ZW50LCB7dXNlVmFsdWU6IG1vZGFsQ29udGVudH0pXG4gICAgICAgIF0pO1xuXG4gICAgICAgIGxldCBjb25maWc6QWlNb2RhbENvbmZpZyA9bmV3IEFpTW9kYWxDb25maWcoKTtcbiAgICAgICAgY29uZmlnLm1hc2s9J2JsYWNrJztcbiAgICAgICAgY29uZmlnLnRyYWNraW5nU2l6ZVBvc2l0aW9uPXRydWU7XG4gICAgICAgIC8vY29uZmlnLmFuY2hvck5hbWU9XCJtb2RhbEhlcmVcIjtcbiAgICAgICAgLy9jb25maWcueT1uZXcgQWlNb2RhbFBvc2l0aW9uKFwiMTAwJVwiLEFpTW9kYWxBbGlnbi5CZWdpbik7XG4gICAgICAgIC8vY29uZmlnLmFyb3VuZFRvPSdidG4nO1xuICAgICAgICBcbiAgICAgICAgZGlhbG9nID0gdGhpcy5tb2RhbC5vcGVuKDxhbnk+WWVzTm9Nb2RhbCxiaW5kaW5ncyxjb25maWcpO1xuICAgICAgICAgICAgXG4gICAgICAgIGRpYWxvZy50aGVuKFxuICAgICAgICAgICAgKHJlc3VsdFByb21pc2UpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0UHJvbWlzZS5yZXN1bHQudGhlbihcbiAgICAgICAgICAgICAgICAgICAgKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0TW9kYWxSZXN1bHQgPSByZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgIH0sIFxuICAgICAgICAgICAgICAgICAgICAoKSA9PnsgXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RNb2RhbFJlc3VsdCA9ICdSZWplY3RlZCEnO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSk7ICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICB9XG5cblxufVxuQWlBcHAuYm9vdChBcHBDb21wb25lbnQpOyAgICJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
