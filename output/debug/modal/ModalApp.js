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
                AppComponent.prototype.onSlidedown = function () {
                    this.dialog.slidedown('Our goal with MacBook was to do the impossible||Undo', function (v) {
                        window.alert('pressed ' + v);
                    });
                };
                AppComponent.prototype.onSlidedownWithIcon = function () {
                    this.dialog.slidedown('Our goal with MacBook was to do the impossible.|help|Undo');
                };
                AppComponent.prototype.onDarkSlidedown = function () {
                    this.dialog.slidedownDark('Our goal with MacBook was to do the impossible||Undo');
                };
                AppComponent.prototype.onDarkSlidedownWithIcon = function () {
                    this.dialog.slidedownDark('Our goal with MacBook was to do the impossible.|help');
                };
                AppComponent.prototype.onCorner = function () {
                    this.dialog.corner('Our goal with MacBook was to do the impossible||Undo', function (v) {
                        window.alert('pressed ' + v);
                    });
                };
                AppComponent.prototype.onCornerWithIcon = function () {
                    this.dialog.corner('Our goal with MacBook was to do the impossible.|help|Undo');
                };
                AppComponent.prototype.onDarkCorner = function () {
                    this.dialog.cornerDark('Our goal with MacBook was to do the impossible||Undo');
                };
                AppComponent.prototype.onDarkCornerWithIcon = function () {
                    this.dialog.cornerDark('Our goal with MacBook was to do the impossible.|help');
                };
                AppComponent.prototype.onThumb = function () {
                    this.dialog.thumb('MacBook was to do the impossible||Undo', function (v) {
                        window.alert('pressed ' + v);
                    });
                };
                AppComponent.prototype.onThumbWithIcon = function () {
                    this.dialog.thumb('MacBook was to do the impossible.|help|Undo');
                };
                AppComponent.prototype.onDarkThumb = function () {
                    this.dialog.thumbDark('MacBook was to do the impossible||Undo');
                };
                AppComponent.prototype.onDarkThumbWithIcon = function () {
                    this.dialog.thumbDark('MacBook was to do the impossible.|help');
                };
                AppComponent.prototype.onFlip = function () {
                    this.dialog.flip('The event was added to your calendar. Check out all your events in your||event overview', function (v) {
                        window.alert('pressed ' + v);
                    });
                };
                AppComponent.prototype.onFlipWithIcon = function () {
                    this.dialog.flip('The event was added to your calendar. Check out all your events in your.|help|event overview');
                };
                AppComponent.prototype.onDarkFlip = function () {
                    this.dialog.flipDark('Our goal with MacBook was to do the impossible||Undo');
                };
                AppComponent.prototype.onDarkFlipWithIcon = function () {
                    this.dialog.flipDark('Our goal with MacBook was to do the impossible.|help');
                };
                AppComponent.prototype.onWaitStart = function () {
                    this.dialog.waitStart('Connection timed out||try again', function (v) {
                        window.alert('pressed ' + v);
                    });
                };
                AppComponent.prototype.onWaitStop = function () {
                    this.dialog.waitStop();
                };
                AppComponent.prototype.onWaitStartWithIcon = function () {
                    this.dialog.waitStart('Connection timed out|error_outline');
                };
                AppComponent.prototype.onWaitStartWithOK = function () {
                    this.dialog.waitStart('Connection timed out|error_outline|try again');
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

//# sourceMappingURL=data:application/json;base64,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RUQsd0NBQWlCLEdBQWpCO29CQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLDhDQUE4QyxDQUFDLENBQUM7Z0JBQzFFLENBQUM7Z0JBR0QsOEJBQU8sR0FBUDtnQkFpQ0EsQ0FBQztnQkFuS0w7b0JBQUMsZ0JBQVMsQ0FBQyxVQUFLLENBQUMsSUFBSSxDQUFDO3dCQUNsQixRQUFRLEVBQUUsV0FBVzt3QkFDckIsU0FBUyxFQUFFLENBQUMsWUFBTyxFQUFDLGFBQVEsQ0FBQzt3QkFDN0IsV0FBVyxFQUFDLGlDQUFpQzt3QkFDN0MsVUFBVSxFQUFFLENBQUMsYUFBUSxDQUFDO3FCQUN6QixDQUFDLENBQUM7O2dDQUFBO2dCQStKSCxtQkFBQztZQUFELENBOUpBLEFBOEpDLENBOUprQyxVQUFLLEdBOEp2QztZQTlKRCx1Q0E4SkMsQ0FBQTtZQUNELFVBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMiLCJmaWxlIjoibW9kYWwvTW9kYWxBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIHByb3ZpZGUsIEVsZW1lbnRSZWYsIEluamVjdG9yLCBSZW5kZXJlcn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0FpQXBwLEFpRGlhbG9nLEFpQnV0dG9uLCBBaU1vZGFsSW5zdGFuY2UsQWlNb2RhbENvbmZpZyxBaU1vZGFsUG9zaXRpb24sQWlNb2RhbEFsaWduLCBBaU1vZGFsfSBmcm9tICdhaS9jb21wb25lbnRzL0FpJztcblxuQENvbXBvbmVudChBaUFwcC5tZXRhKHtcbiAgICBzZWxlY3RvcjogJ21vZGFsLWFwcCcsXG4gICAgcHJvdmlkZXJzOiBbQWlNb2RhbCxBaURpYWxvZ10sXG4gICAgdGVtcGxhdGVVcmw6J3BhY2thZ2U6YXBwL21vZGFsL01vZGFsQXBwLmh0bWwnLFxuICAgIGRpcmVjdGl2ZXM6IFtBaUJ1dHRvbl1cbn0pKVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCAgZXh0ZW5kcyBBaUFwcHtcblxuICAgIHB1YmxpYyBsYXN0TW9kYWxSZXN1bHQ6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbW9kYWw6IEFpTW9kYWwscHJpdmF0ZSBkaWFsb2c6IEFpRGlhbG9nLCBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcikge1xuICAgICAgICAgICBzdXBlcihlbGVtZW50UmVmKTtcblxuICAgIH1cblxuICAgIG9uQWxlcnQoKXtcbiAgICAgICAgdGhpcy5kaWFsb2cuYWxlcnQoJ01hY0Jvb2sgTGlnaHQuIFllYXJzIGFoZWFkLnxPdXIgZ29hbCB3aXRoIE1hY0Jvb2sgd2FzIHRvIGRvIHRoZSBpbXBvc3NpYmxlOiBlbmdpbmVlciBhIGZ1bGzigJFzaXplIGV4cGVyaWVuY2UgaW50byB0aGUgbGlnaHRlc3QgYW5kIG1vc3QgY29tcGFjdCBNYWMgbm90ZWJvb2sgZXZlci4gJyk7XG4gICAgfVxuXG4gICAgb25BbGVydFdpdGhJY29uKCl7XG4gICAgICAgIHRoaXMuZGlhbG9nLmFsZXJ0KCdNYWNCb29rIExpZ2h0LiBZZWFycyBhaGVhZC58T3VyIGdvYWwgd2l0aCBNYWNCb29rIHdhcyB0byBkbyB0aGUgaW1wb3NzaWJsZS58aGVscCcpO1xuICAgIH1cblxuICAgIG9uQ29uZmlybSgpe1xuICAgICAgICB0aGlzLmRpYWxvZy5jb25maXJtKCdNYWNCb29rIExpZ2h0LiBZZWFycyBhaGVhZC58T3VyIGdvYWwgd2l0aCBNYWNCb29rIHdhcyB0byBkbyB0aGUgaW1wb3NzaWJsZTogZW5naW5lZXIgYSBmdWxs4oCRc2l6ZSBleHBlcmllbmNlIGludG8gdGhlIGxpZ2h0ZXN0IGFuZCBtb3N0IGNvbXBhY3QgTWFjIG5vdGVib29rIGV2ZXIuICcsZnVuY3Rpb24odmFsdWUpe1xuICAgICAgICAgICAgd2luZG93LmFsZXJ0KHZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25Db25maXJtV2l0aEljb24oKXtcbiAgICAgICAgdGhpcy5kaWFsb2cuY29uZmlybSgnTWFjQm9vayBMaWdodC4gWWVhcnMgYWhlYWQufE91ciBnb2FsIHdpdGggTWFjQm9vayB3YXMgdG8gZG8gdGhlIGltcG9zc2libGUufGhlbHAnKTtcbiAgICB9XG5cbiAgICAvL3NsaWRlZG93blxuICAgIG9uU2xpZGVkb3duKCl7XG4gICAgICAgIHRoaXMuZGlhbG9nLnNsaWRlZG93bignT3VyIGdvYWwgd2l0aCBNYWNCb29rIHdhcyB0byBkbyB0aGUgaW1wb3NzaWJsZXx8VW5kbycsZnVuY3Rpb24odil7XG4gICAgICAgICAgICB3aW5kb3cuYWxlcnQoJ3ByZXNzZWQgJyt2KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25TbGlkZWRvd25XaXRoSWNvbigpe1xuICAgICAgICB0aGlzLmRpYWxvZy5zbGlkZWRvd24oJ091ciBnb2FsIHdpdGggTWFjQm9vayB3YXMgdG8gZG8gdGhlIGltcG9zc2libGUufGhlbHB8VW5kbycpO1xuICAgIH1cblxuICAgIG9uRGFya1NsaWRlZG93bigpe1xuICAgICAgICB0aGlzLmRpYWxvZy5zbGlkZWRvd25EYXJrKCdPdXIgZ29hbCB3aXRoIE1hY0Jvb2sgd2FzIHRvIGRvIHRoZSBpbXBvc3NpYmxlfHxVbmRvJyk7XG4gICAgfVxuXG4gICAgb25EYXJrU2xpZGVkb3duV2l0aEljb24oKXtcbiAgICAgICAgdGhpcy5kaWFsb2cuc2xpZGVkb3duRGFyaygnT3VyIGdvYWwgd2l0aCBNYWNCb29rIHdhcyB0byBkbyB0aGUgaW1wb3NzaWJsZS58aGVscCcpO1xuICAgIH1cblxuICAgIC8vY29ybmVyXG4gICAgb25Db3JuZXIoKXtcbiAgICAgICAgdGhpcy5kaWFsb2cuY29ybmVyKCdPdXIgZ29hbCB3aXRoIE1hY0Jvb2sgd2FzIHRvIGRvIHRoZSBpbXBvc3NpYmxlfHxVbmRvJyxmdW5jdGlvbih2KXtcbiAgICAgICAgICAgIHdpbmRvdy5hbGVydCgncHJlc3NlZCAnK3YpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkNvcm5lcldpdGhJY29uKCl7XG4gICAgICAgIHRoaXMuZGlhbG9nLmNvcm5lcignT3VyIGdvYWwgd2l0aCBNYWNCb29rIHdhcyB0byBkbyB0aGUgaW1wb3NzaWJsZS58aGVscHxVbmRvJyk7XG4gICAgfVxuXG4gICAgb25EYXJrQ29ybmVyKCl7XG4gICAgICAgIHRoaXMuZGlhbG9nLmNvcm5lckRhcmsoJ091ciBnb2FsIHdpdGggTWFjQm9vayB3YXMgdG8gZG8gdGhlIGltcG9zc2libGV8fFVuZG8nKTtcbiAgICB9XG5cbiAgICBvbkRhcmtDb3JuZXJXaXRoSWNvbigpe1xuICAgICAgICB0aGlzLmRpYWxvZy5jb3JuZXJEYXJrKCdPdXIgZ29hbCB3aXRoIE1hY0Jvb2sgd2FzIHRvIGRvIHRoZSBpbXBvc3NpYmxlLnxoZWxwJyk7XG4gICAgfVxuXG4gICAgLy90aHVtYlxuICAgIG9uVGh1bWIoKXtcbiAgICAgICAgdGhpcy5kaWFsb2cudGh1bWIoJ01hY0Jvb2sgd2FzIHRvIGRvIHRoZSBpbXBvc3NpYmxlfHxVbmRvJyxmdW5jdGlvbih2KXtcbiAgICAgICAgICAgIHdpbmRvdy5hbGVydCgncHJlc3NlZCAnK3YpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvblRodW1iV2l0aEljb24oKXtcbiAgICAgICAgdGhpcy5kaWFsb2cudGh1bWIoJ01hY0Jvb2sgd2FzIHRvIGRvIHRoZSBpbXBvc3NpYmxlLnxoZWxwfFVuZG8nKTtcbiAgICB9XG5cbiAgICBvbkRhcmtUaHVtYigpe1xuICAgICAgICB0aGlzLmRpYWxvZy50aHVtYkRhcmsoJ01hY0Jvb2sgd2FzIHRvIGRvIHRoZSBpbXBvc3NpYmxlfHxVbmRvJyk7XG4gICAgfVxuXG4gICAgb25EYXJrVGh1bWJXaXRoSWNvbigpe1xuICAgICAgICB0aGlzLmRpYWxvZy50aHVtYkRhcmsoJ01hY0Jvb2sgd2FzIHRvIGRvIHRoZSBpbXBvc3NpYmxlLnxoZWxwJyk7XG4gICAgfVxuXG4gICAgLy9mbGlwXG4gICAgb25GbGlwKCl7XG4gICAgICAgIHRoaXMuZGlhbG9nLmZsaXAoJ1RoZSBldmVudCB3YXMgYWRkZWQgdG8geW91ciBjYWxlbmRhci4gQ2hlY2sgb3V0IGFsbCB5b3VyIGV2ZW50cyBpbiB5b3VyfHxldmVudCBvdmVydmlldycsZnVuY3Rpb24odil7XG4gICAgICAgICAgICB3aW5kb3cuYWxlcnQoJ3ByZXNzZWQgJyt2KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25GbGlwV2l0aEljb24oKXtcbiAgICAgICAgdGhpcy5kaWFsb2cuZmxpcCgnVGhlIGV2ZW50IHdhcyBhZGRlZCB0byB5b3VyIGNhbGVuZGFyLiBDaGVjayBvdXQgYWxsIHlvdXIgZXZlbnRzIGluIHlvdXIufGhlbHB8ZXZlbnQgb3ZlcnZpZXcnKTtcbiAgICB9XG5cbiAgICBvbkRhcmtGbGlwKCl7XG4gICAgICAgIHRoaXMuZGlhbG9nLmZsaXBEYXJrKCdPdXIgZ29hbCB3aXRoIE1hY0Jvb2sgd2FzIHRvIGRvIHRoZSBpbXBvc3NpYmxlfHxVbmRvJyk7XG4gICAgfVxuXG4gICAgb25EYXJrRmxpcFdpdGhJY29uKCl7XG4gICAgICAgIHRoaXMuZGlhbG9nLmZsaXBEYXJrKCdPdXIgZ29hbCB3aXRoIE1hY0Jvb2sgd2FzIHRvIGRvIHRoZSBpbXBvc3NpYmxlLnxoZWxwJyk7XG4gICAgfVxuXG4gICAgLy93YWl0XG4gICAgb25XYWl0U3RhcnQoKXtcbiAgICAgICAgdGhpcy5kaWFsb2cud2FpdFN0YXJ0KCdDb25uZWN0aW9uIHRpbWVkIG91dHx8dHJ5IGFnYWluJyxmdW5jdGlvbih2KXtcbiAgICAgICAgICAgIHdpbmRvdy5hbGVydCgncHJlc3NlZCAnK3YpO1xuICAgICAgICB9KTsgXG4gICAgfVxuXG4gICAgb25XYWl0U3RvcCgpe1xuICAgICAgICB0aGlzLmRpYWxvZy53YWl0U3RvcCgpO1xuICAgIH1cblxuICAgIG9uV2FpdFN0YXJ0V2l0aEljb24oKXtcbiAgICAgICAgdGhpcy5kaWFsb2cud2FpdFN0YXJ0KCdDb25uZWN0aW9uIHRpbWVkIG91dHxlcnJvcl9vdXRsaW5lJyk7IFxuICAgIH1cblxuICAgIG9uV2FpdFN0YXJ0V2l0aE9LKCl7XG4gICAgICAgIHRoaXMuZGlhbG9nLndhaXRTdGFydCgnQ29ubmVjdGlvbiB0aW1lZCBvdXR8ZXJyb3Jfb3V0bGluZXx0cnkgYWdhaW4nKTsgXG4gICAgfVxuXG5cbiAgICBvbkNsaWNrKCl7XG5cbiAgICAgICAgLypcbiAgICAgICAgdmFyIG1vZGFsQ29udGVudDpDb25maXJtQ29udGV4dCA9IG5ldyBDb25maXJtQ29udGV4dCgnU2ltcGxlIFNtYWxsIG1vZGFsJywgJ1ByZXNzIEVTQyBvciBjbGljayBPSyAvIG91dHNpZGUgYXJlYSB0byBjbG9zZS4nKTtcblxuICAgICAgICBsZXQgZGlhbG9nOiAgUHJvbWlzZTxBaU1vZGFsSW5zdGFuY2U+O1xuICAgICAgICBsZXQgYmluZGluZ3MgPSBJbmplY3Rvci5yZXNvbHZlKFtcbiAgICAgICAgICAgIHByb3ZpZGUoQ29uZmlybUNvbnRleHQsIHt1c2VWYWx1ZTogbW9kYWxDb250ZW50fSlcbiAgICAgICAgXSk7XG5cbiAgICAgICAgbGV0IGNvbmZpZzpBaU1vZGFsQ29uZmlnID1uZXcgQWlNb2RhbENvbmZpZygpO1xuICAgICAgICAvL2NvbmZpZy5tYXNrPSdibGFjayc7XG4gICAgICAgIC8vY29uZmlnLnRyYWNraW5nU2l6ZVBvc2l0aW9uPXRydWU7XG4gICAgICAgIC8vY29uZmlnLmFuY2hvck5hbWU9XCJtb2RhbEhlcmVcIjtcbiAgICAgICAgY29uZmlnLnk9bmV3IEFpTW9kYWxQb3NpdGlvbihcIjEwMCVcIixBaU1vZGFsQWxpZ24uQmVnaW4pO1xuICAgICAgICBjb25maWcuYXJvdW5kVG89J2J0bic7XG5cbiAgICAgICAgZGlhbG9nID0gdGhpcy5tb2RhbC5vcGVuKDxhbnk+Q29uZmlybURpYWxvZyxiaW5kaW5ncyxjb25maWcpO1xuXG4gICAgICAgIGRpYWxvZy50aGVuKFxuICAgICAgICAgICAgKHJlc3VsdFByb21pc2UpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0UHJvbWlzZS5yZXN1bHQudGhlbihcbiAgICAgICAgICAgICAgICAgICAgKHJlc3VsdCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RNb2RhbFJlc3VsdCA9IHJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgKCkgPT57XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RNb2RhbFJlc3VsdCA9ICdSZWplY3RlZCEnO1xuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICovXG4gICAgfVxufVxuQWlBcHAuYm9vdChBcHBDb21wb25lbnQpOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
