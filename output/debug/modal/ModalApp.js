System.register(['angular2/core', 'ai/components/Ai'], function(exports_1, context_1) {
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
                AppComponent.prototype.onAlert = function () {
                    this.dialog.alert('MacBook Light. Years ahead.|Our goal with MacBook was to do the impossible: engineer a full‑size experience into the lightest and most compact Mac notebook ever. ');
                };
                AppComponent.prototype.onAlertWithIcon = function () {
                    this.dialog.alert('MacBook Light. Years ahead.|Our goal with MacBook was to do the impossible.|help');
                };
                AppComponent.prototype.onConfirm = function () {
                    this.dialog.confirm('MacBook Light. Years ahead.|Our goal with MacBook was to do the impossible: engineer a full‑size experience into the lightest and most compact Mac notebook ever. ', function (value) {
                        window.alert(value);
                    });
                };
                AppComponent.prototype.onConfirmWithIcon = function () {
                    this.dialog.confirm('MacBook Light. Years ahead.|Our goal with MacBook was to do the impossible.|help');
                };
                AppComponent.prototype.onNotification = function () {
                    this.dialog.notify('Our goal with MacBook was to do the impossible|||Undo', function (v) {
                        window.alert('pressed ' + v);
                    });
                };
                AppComponent.prototype.onNotificationWithIcon = function () {
                    this.dialog.notify('Our goal with MacBook was to do the impossible.|help|white');
                };
                AppComponent.prototype.onBlackNotification = function () {
                    this.dialog.notify('Our goal with MacBook was to do the impossible||black|Undo');
                };
                AppComponent.prototype.onBlackNotificationWithIcon = function () {
                    this.dialog.notify('Our goal with MacBook was to do the impossible.|help|black');
                };
                AppComponent.prototype.onClick = function () {
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
            }(Ai_1.AiApp));
            exports_1("AppComponent", AppComponent);
            Ai_1.AiApp.boot(AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGFsL01vZGFsQXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFTQTtnQkFBbUMsZ0NBQUs7Z0JBSXBDLHNCQUFvQixLQUFjLEVBQVMsTUFBZ0IsRUFBVSxVQUFzQixFQUN2RSxRQUFrQixFQUFVLFNBQW1CO29CQUM1RCxrQkFBTSxVQUFVLENBQUMsQ0FBQztvQkFGTCxVQUFLLEdBQUwsS0FBSyxDQUFTO29CQUFTLFdBQU0sR0FBTixNQUFNLENBQVU7b0JBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBWTtvQkFDdkUsYUFBUSxHQUFSLFFBQVEsQ0FBVTtvQkFBVSxjQUFTLEdBQVQsU0FBUyxDQUFVO2dCQUduRSxDQUFDO2dCQUVELDhCQUFPLEdBQVA7b0JBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsb0tBQW9LLENBQUMsQ0FBQztnQkFDNUwsQ0FBQztnQkFFRCxzQ0FBZSxHQUFmO29CQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLGtGQUFrRixDQUFDLENBQUM7Z0JBQzFHLENBQUM7Z0JBRUQsZ0NBQVMsR0FBVDtvQkFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxvS0FBb0ssRUFBQyxVQUFTLEtBQUs7d0JBQ25NLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3hCLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUM7Z0JBRUQsd0NBQWlCLEdBQWpCO29CQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGtGQUFrRixDQUFDLENBQUM7Z0JBQzVHLENBQUM7Z0JBRUQscUNBQWMsR0FBZDtvQkFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyx1REFBdUQsRUFBQyxVQUFTLENBQUM7d0JBQ2pGLE1BQU0sQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFDLENBQUMsQ0FBQyxDQUFDO29CQUMvQixDQUFDLENBQUMsQ0FBQztnQkFDUCxDQUFDO2dCQUVELDZDQUFzQixHQUF0QjtvQkFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyw0REFBNEQsQ0FBQyxDQUFDO2dCQUNyRixDQUFDO2dCQUVELDBDQUFtQixHQUFuQjtvQkFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyw0REFBNEQsQ0FBQyxDQUFDO2dCQUNyRixDQUFDO2dCQUVELGtEQUEyQixHQUEzQjtvQkFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyw0REFBNEQsQ0FBQyxDQUFDO2dCQUNyRixDQUFDO2dCQUdELDhCQUFPLEdBQVA7Z0JBaUNBLENBQUM7Z0JBdEZMO29CQUFDLGdCQUFTLENBQUMsVUFBSyxDQUFDLElBQUksQ0FBQzt3QkFDbEIsUUFBUSxFQUFFLFdBQVc7d0JBQ3JCLFNBQVMsRUFBRSxDQUFDLFlBQU8sRUFBQyxhQUFRLENBQUM7d0JBQzdCLFdBQVcsRUFBQyxpQ0FBaUM7d0JBQzdDLFVBQVUsRUFBRSxDQUFDLGFBQVEsQ0FBQztxQkFDekIsQ0FBQyxDQUFDOztnQ0FBQTtnQkFrRkgsbUJBQUM7WUFBRCxDQWpGQSxBQWlGQyxDQWpGa0MsVUFBSyxHQWlGdkM7WUFqRkQsdUNBaUZDLENBQUE7WUFDRCxVQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDIiwiZmlsZSI6Im1vZGFsL01vZGFsQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBwcm92aWRlLCBFbGVtZW50UmVmLCBJbmplY3RvciwgUmVuZGVyZXJ9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtBaUFwcCxBaURpYWxvZyxBaUJ1dHRvbiwgQWlNb2RhbEluc3RhbmNlLEFpTW9kYWxDb25maWcsQWlNb2RhbFBvc2l0aW9uLEFpTW9kYWxBbGlnbiwgQWlNb2RhbH0gZnJvbSAnYWkvY29tcG9uZW50cy9BaSc7XG5cbkBDb21wb25lbnQoQWlBcHAubWV0YSh7XG4gICAgc2VsZWN0b3I6ICdtb2RhbC1hcHAnLFxuICAgIHByb3ZpZGVyczogW0FpTW9kYWwsQWlEaWFsb2ddLFxuICAgIHRlbXBsYXRlVXJsOidwYWNrYWdlOmFwcC9tb2RhbC9Nb2RhbEFwcC5odG1sJyxcbiAgICBkaXJlY3RpdmVzOiBbQWlCdXR0b25dXG59KSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgIGV4dGVuZHMgQWlBcHB7XG5cbiAgICBwdWJsaWMgbGFzdE1vZGFsUmVzdWx0OiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1vZGFsOiBBaU1vZGFsLHByaXZhdGUgZGlhbG9nOiBBaURpYWxvZywgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLCBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIpIHtcbiAgICAgICAgICAgc3VwZXIoZWxlbWVudFJlZik7XG5cbiAgICB9XG5cbiAgICBvbkFsZXJ0KCl7XG4gICAgICAgIHRoaXMuZGlhbG9nLmFsZXJ0KCdNYWNCb29rIExpZ2h0LiBZZWFycyBhaGVhZC58T3VyIGdvYWwgd2l0aCBNYWNCb29rIHdhcyB0byBkbyB0aGUgaW1wb3NzaWJsZTogZW5naW5lZXIgYSBmdWxs4oCRc2l6ZSBleHBlcmllbmNlIGludG8gdGhlIGxpZ2h0ZXN0IGFuZCBtb3N0IGNvbXBhY3QgTWFjIG5vdGVib29rIGV2ZXIuICcpO1xuICAgIH1cblxuICAgIG9uQWxlcnRXaXRoSWNvbigpe1xuICAgICAgICB0aGlzLmRpYWxvZy5hbGVydCgnTWFjQm9vayBMaWdodC4gWWVhcnMgYWhlYWQufE91ciBnb2FsIHdpdGggTWFjQm9vayB3YXMgdG8gZG8gdGhlIGltcG9zc2libGUufGhlbHAnKTtcbiAgICB9XG5cbiAgICBvbkNvbmZpcm0oKXtcbiAgICAgICAgdGhpcy5kaWFsb2cuY29uZmlybSgnTWFjQm9vayBMaWdodC4gWWVhcnMgYWhlYWQufE91ciBnb2FsIHdpdGggTWFjQm9vayB3YXMgdG8gZG8gdGhlIGltcG9zc2libGU6IGVuZ2luZWVyIGEgZnVsbOKAkXNpemUgZXhwZXJpZW5jZSBpbnRvIHRoZSBsaWdodGVzdCBhbmQgbW9zdCBjb21wYWN0IE1hYyBub3RlYm9vayBldmVyLiAnLGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAgICAgICAgIHdpbmRvdy5hbGVydCh2YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uQ29uZmlybVdpdGhJY29uKCl7XG4gICAgICAgIHRoaXMuZGlhbG9nLmNvbmZpcm0oJ01hY0Jvb2sgTGlnaHQuIFllYXJzIGFoZWFkLnxPdXIgZ29hbCB3aXRoIE1hY0Jvb2sgd2FzIHRvIGRvIHRoZSBpbXBvc3NpYmxlLnxoZWxwJyk7XG4gICAgfVxuXG4gICAgb25Ob3RpZmljYXRpb24oKXtcbiAgICAgICAgdGhpcy5kaWFsb2cubm90aWZ5KCdPdXIgZ29hbCB3aXRoIE1hY0Jvb2sgd2FzIHRvIGRvIHRoZSBpbXBvc3NpYmxlfHx8VW5kbycsZnVuY3Rpb24odil7XG4gICAgICAgICAgICB3aW5kb3cuYWxlcnQoJ3ByZXNzZWQgJyt2KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25Ob3RpZmljYXRpb25XaXRoSWNvbigpe1xuICAgICAgICB0aGlzLmRpYWxvZy5ub3RpZnkoJ091ciBnb2FsIHdpdGggTWFjQm9vayB3YXMgdG8gZG8gdGhlIGltcG9zc2libGUufGhlbHB8d2hpdGUnKTtcbiAgICB9XG5cbiAgICBvbkJsYWNrTm90aWZpY2F0aW9uKCl7XG4gICAgICAgIHRoaXMuZGlhbG9nLm5vdGlmeSgnT3VyIGdvYWwgd2l0aCBNYWNCb29rIHdhcyB0byBkbyB0aGUgaW1wb3NzaWJsZXx8YmxhY2t8VW5kbycpO1xuICAgIH1cblxuICAgIG9uQmxhY2tOb3RpZmljYXRpb25XaXRoSWNvbigpe1xuICAgICAgICB0aGlzLmRpYWxvZy5ub3RpZnkoJ091ciBnb2FsIHdpdGggTWFjQm9vayB3YXMgdG8gZG8gdGhlIGltcG9zc2libGUufGhlbHB8YmxhY2snKTtcbiAgICB9XG5cblxuICAgIG9uQ2xpY2soKXtcblxuICAgICAgICAvKlxuICAgICAgICB2YXIgbW9kYWxDb250ZW50OkNvbmZpcm1Db250ZXh0ID0gbmV3IENvbmZpcm1Db250ZXh0KCdTaW1wbGUgU21hbGwgbW9kYWwnLCAnUHJlc3MgRVNDIG9yIGNsaWNrIE9LIC8gb3V0c2lkZSBhcmVhIHRvIGNsb3NlLicpO1xuXG4gICAgICAgIGxldCBkaWFsb2c6ICBQcm9taXNlPEFpTW9kYWxJbnN0YW5jZT47XG4gICAgICAgIGxldCBiaW5kaW5ncyA9IEluamVjdG9yLnJlc29sdmUoW1xuICAgICAgICAgICAgcHJvdmlkZShDb25maXJtQ29udGV4dCwge3VzZVZhbHVlOiBtb2RhbENvbnRlbnR9KVxuICAgICAgICBdKTtcblxuICAgICAgICBsZXQgY29uZmlnOkFpTW9kYWxDb25maWcgPW5ldyBBaU1vZGFsQ29uZmlnKCk7XG4gICAgICAgIC8vY29uZmlnLm1hc2s9J2JsYWNrJztcbiAgICAgICAgLy9jb25maWcudHJhY2tpbmdTaXplUG9zaXRpb249dHJ1ZTtcbiAgICAgICAgLy9jb25maWcuYW5jaG9yTmFtZT1cIm1vZGFsSGVyZVwiO1xuICAgICAgICBjb25maWcueT1uZXcgQWlNb2RhbFBvc2l0aW9uKFwiMTAwJVwiLEFpTW9kYWxBbGlnbi5CZWdpbik7XG4gICAgICAgIGNvbmZpZy5hcm91bmRUbz0nYnRuJztcblxuICAgICAgICBkaWFsb2cgPSB0aGlzLm1vZGFsLm9wZW4oPGFueT5Db25maXJtRGlhbG9nLGJpbmRpbmdzLGNvbmZpZyk7XG5cbiAgICAgICAgZGlhbG9nLnRoZW4oXG4gICAgICAgICAgICAocmVzdWx0UHJvbWlzZSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHRQcm9taXNlLnJlc3VsdC50aGVuKFxuICAgICAgICAgICAgICAgICAgICAocmVzdWx0KSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdE1vZGFsUmVzdWx0ID0gcmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAoKSA9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdE1vZGFsUmVzdWx0ID0gJ1JlamVjdGVkISc7XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgKi9cbiAgICB9XG59XG5BaUFwcC5ib290KEFwcENvbXBvbmVudCk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
