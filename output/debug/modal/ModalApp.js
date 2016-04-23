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
                    this.dialog.thumb('Our goal with MacBook was to do the impossible||Undo', function (v) {
                        window.alert('pressed ' + v);
                    });
                };
                AppComponent.prototype.onThumbWithIcon = function () {
                    this.dialog.thumb('Our goal with MacBook was to do the impossible.|help|Undo');
                };
                AppComponent.prototype.onDarkThumb = function () {
                    this.dialog.thumbDark('Our goal with MacBook was to do the impossible||Undo');
                };
                AppComponent.prototype.onDarkThumbWithIcon = function () {
                    this.dialog.thumbDark('Our goal with MacBook was to do the impossible.|help');
                };
                AppComponent.prototype.onFlip = function () {
                    this.dialog.flip('Our goal with MacBook was to do the impossible||Undo', function (v) {
                        window.alert('pressed ' + v);
                    });
                };
                AppComponent.prototype.onFlipWithIcon = function () {
                    this.dialog.flip('Our goal with MacBook was to do the impossible.|help|Undo');
                };
                AppComponent.prototype.onDarkFlip = function () {
                    this.dialog.flipDark('Our goal with MacBook was to do the impossible||Undo');
                };
                AppComponent.prototype.onDarkFlipWithIcon = function () {
                    this.dialog.flipDark('Our goal with MacBook was to do the impossible.|help');
                };
                AppComponent.prototype.onProgress = function () {
                    this.dialog.progress('Our goal with MacBook was to do the impossible||Undo', function (v) {
                        window.alert('pressed ' + v);
                    });
                };
                AppComponent.prototype.onProgressWithIcon = function () {
                    this.dialog.progress('Our goal with MacBook was to do the impossible.|help|Undo');
                };
                AppComponent.prototype.onDarkProgress = function () {
                    this.dialog.progressDark('Our goal with MacBook was to do the impossible||Undo');
                };
                AppComponent.prototype.onDarkProgressWithIcon = function () {
                    this.dialog.progressDark('Our goal with MacBook was to do the impossible.|help');
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

//# sourceMappingURL=data:application/json;base64,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Q3JGLENBQUM7Z0JBRUQsNkNBQXNCLEdBQXRCO29CQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLHNEQUFzRCxDQUFDLENBQUM7Z0JBQ3JGLENBQUM7Z0JBR0QsOEJBQU8sR0FBUDtnQkFpQ0EsQ0FBQztnQkFuS0w7b0JBQUMsZ0JBQVMsQ0FBQyxVQUFLLENBQUMsSUFBSSxDQUFDO3dCQUNsQixRQUFRLEVBQUUsV0FBVzt3QkFDckIsU0FBUyxFQUFFLENBQUMsWUFBTyxFQUFDLGFBQVEsQ0FBQzt3QkFDN0IsV0FBVyxFQUFDLGlDQUFpQzt3QkFDN0MsVUFBVSxFQUFFLENBQUMsYUFBUSxDQUFDO3FCQUN6QixDQUFDLENBQUM7O2dDQUFBO2dCQStKSCxtQkFBQztZQUFELENBOUpBLEFBOEpDLENBOUprQyxVQUFLLEdBOEp2QztZQTlKRCx1Q0E4SkMsQ0FBQTtZQUNELFVBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMiLCJmaWxlIjoibW9kYWwvTW9kYWxBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIHByb3ZpZGUsIEVsZW1lbnRSZWYsIEluamVjdG9yLCBSZW5kZXJlcn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0FpQXBwLEFpRGlhbG9nLEFpQnV0dG9uLCBBaU1vZGFsSW5zdGFuY2UsQWlNb2RhbENvbmZpZyxBaU1vZGFsUG9zaXRpb24sQWlNb2RhbEFsaWduLCBBaU1vZGFsfSBmcm9tICdhaS9jb21wb25lbnRzL0FpJztcblxuQENvbXBvbmVudChBaUFwcC5tZXRhKHtcbiAgICBzZWxlY3RvcjogJ21vZGFsLWFwcCcsXG4gICAgcHJvdmlkZXJzOiBbQWlNb2RhbCxBaURpYWxvZ10sXG4gICAgdGVtcGxhdGVVcmw6J3BhY2thZ2U6YXBwL21vZGFsL01vZGFsQXBwLmh0bWwnLFxuICAgIGRpcmVjdGl2ZXM6IFtBaUJ1dHRvbl1cbn0pKVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCAgZXh0ZW5kcyBBaUFwcHtcblxuICAgIHB1YmxpYyBsYXN0TW9kYWxSZXN1bHQ6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbW9kYWw6IEFpTW9kYWwscHJpdmF0ZSBkaWFsb2c6IEFpRGlhbG9nLCBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcikge1xuICAgICAgICAgICBzdXBlcihlbGVtZW50UmVmKTtcblxuICAgIH1cblxuICAgIG9uQWxlcnQoKXtcbiAgICAgICAgdGhpcy5kaWFsb2cuYWxlcnQoJ01hY0Jvb2sgTGlnaHQuIFllYXJzIGFoZWFkLnxPdXIgZ29hbCB3aXRoIE1hY0Jvb2sgd2FzIHRvIGRvIHRoZSBpbXBvc3NpYmxlOiBlbmdpbmVlciBhIGZ1bGzigJFzaXplIGV4cGVyaWVuY2UgaW50byB0aGUgbGlnaHRlc3QgYW5kIG1vc3QgY29tcGFjdCBNYWMgbm90ZWJvb2sgZXZlci4gJyk7XG4gICAgfVxuXG4gICAgb25BbGVydFdpdGhJY29uKCl7XG4gICAgICAgIHRoaXMuZGlhbG9nLmFsZXJ0KCdNYWNCb29rIExpZ2h0LiBZZWFycyBhaGVhZC58T3VyIGdvYWwgd2l0aCBNYWNCb29rIHdhcyB0byBkbyB0aGUgaW1wb3NzaWJsZS58aGVscCcpO1xuICAgIH1cblxuICAgIG9uQ29uZmlybSgpe1xuICAgICAgICB0aGlzLmRpYWxvZy5jb25maXJtKCdNYWNCb29rIExpZ2h0LiBZZWFycyBhaGVhZC58T3VyIGdvYWwgd2l0aCBNYWNCb29rIHdhcyB0byBkbyB0aGUgaW1wb3NzaWJsZTogZW5naW5lZXIgYSBmdWxs4oCRc2l6ZSBleHBlcmllbmNlIGludG8gdGhlIGxpZ2h0ZXN0IGFuZCBtb3N0IGNvbXBhY3QgTWFjIG5vdGVib29rIGV2ZXIuICcsZnVuY3Rpb24odmFsdWUpe1xuICAgICAgICAgICAgd2luZG93LmFsZXJ0KHZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25Db25maXJtV2l0aEljb24oKXtcbiAgICAgICAgdGhpcy5kaWFsb2cuY29uZmlybSgnTWFjQm9vayBMaWdodC4gWWVhcnMgYWhlYWQufE91ciBnb2FsIHdpdGggTWFjQm9vayB3YXMgdG8gZG8gdGhlIGltcG9zc2libGUufGhlbHAnKTtcbiAgICB9XG5cbiAgICAvL3NsaWRlZG93blxuICAgIG9uU2xpZGVkb3duKCl7XG4gICAgICAgIHRoaXMuZGlhbG9nLnNsaWRlZG93bignT3VyIGdvYWwgd2l0aCBNYWNCb29rIHdhcyB0byBkbyB0aGUgaW1wb3NzaWJsZXx8VW5kbycsZnVuY3Rpb24odil7XG4gICAgICAgICAgICB3aW5kb3cuYWxlcnQoJ3ByZXNzZWQgJyt2KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25TbGlkZWRvd25XaXRoSWNvbigpe1xuICAgICAgICB0aGlzLmRpYWxvZy5zbGlkZWRvd24oJ091ciBnb2FsIHdpdGggTWFjQm9vayB3YXMgdG8gZG8gdGhlIGltcG9zc2libGUufGhlbHB8VW5kbycpO1xuICAgIH1cblxuICAgIG9uRGFya1NsaWRlZG93bigpe1xuICAgICAgICB0aGlzLmRpYWxvZy5zbGlkZWRvd25EYXJrKCdPdXIgZ29hbCB3aXRoIE1hY0Jvb2sgd2FzIHRvIGRvIHRoZSBpbXBvc3NpYmxlfHxVbmRvJyk7XG4gICAgfVxuXG4gICAgb25EYXJrU2xpZGVkb3duV2l0aEljb24oKXtcbiAgICAgICAgdGhpcy5kaWFsb2cuc2xpZGVkb3duRGFyaygnT3VyIGdvYWwgd2l0aCBNYWNCb29rIHdhcyB0byBkbyB0aGUgaW1wb3NzaWJsZS58aGVscCcpO1xuICAgIH1cblxuICAgIC8vY29ybmVyXG4gICAgb25Db3JuZXIoKXtcbiAgICAgICAgdGhpcy5kaWFsb2cuY29ybmVyKCdPdXIgZ29hbCB3aXRoIE1hY0Jvb2sgd2FzIHRvIGRvIHRoZSBpbXBvc3NpYmxlfHxVbmRvJyxmdW5jdGlvbih2KXtcbiAgICAgICAgICAgIHdpbmRvdy5hbGVydCgncHJlc3NlZCAnK3YpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkNvcm5lcldpdGhJY29uKCl7XG4gICAgICAgIHRoaXMuZGlhbG9nLmNvcm5lcignT3VyIGdvYWwgd2l0aCBNYWNCb29rIHdhcyB0byBkbyB0aGUgaW1wb3NzaWJsZS58aGVscHxVbmRvJyk7XG4gICAgfVxuXG4gICAgb25EYXJrQ29ybmVyKCl7XG4gICAgICAgIHRoaXMuZGlhbG9nLmNvcm5lckRhcmsoJ091ciBnb2FsIHdpdGggTWFjQm9vayB3YXMgdG8gZG8gdGhlIGltcG9zc2libGV8fFVuZG8nKTtcbiAgICB9XG5cbiAgICBvbkRhcmtDb3JuZXJXaXRoSWNvbigpe1xuICAgICAgICB0aGlzLmRpYWxvZy5jb3JuZXJEYXJrKCdPdXIgZ29hbCB3aXRoIE1hY0Jvb2sgd2FzIHRvIGRvIHRoZSBpbXBvc3NpYmxlLnxoZWxwJyk7XG4gICAgfVxuXG4gICAgLy90aHVtYlxuICAgIG9uVGh1bWIoKXtcbiAgICAgICAgdGhpcy5kaWFsb2cudGh1bWIoJ091ciBnb2FsIHdpdGggTWFjQm9vayB3YXMgdG8gZG8gdGhlIGltcG9zc2libGV8fFVuZG8nLGZ1bmN0aW9uKHYpe1xuICAgICAgICAgICAgd2luZG93LmFsZXJ0KCdwcmVzc2VkICcrdik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uVGh1bWJXaXRoSWNvbigpe1xuICAgICAgICB0aGlzLmRpYWxvZy50aHVtYignT3VyIGdvYWwgd2l0aCBNYWNCb29rIHdhcyB0byBkbyB0aGUgaW1wb3NzaWJsZS58aGVscHxVbmRvJyk7XG4gICAgfVxuXG4gICAgb25EYXJrVGh1bWIoKXtcbiAgICAgICAgdGhpcy5kaWFsb2cudGh1bWJEYXJrKCdPdXIgZ29hbCB3aXRoIE1hY0Jvb2sgd2FzIHRvIGRvIHRoZSBpbXBvc3NpYmxlfHxVbmRvJyk7XG4gICAgfVxuXG4gICAgb25EYXJrVGh1bWJXaXRoSWNvbigpe1xuICAgICAgICB0aGlzLmRpYWxvZy50aHVtYkRhcmsoJ091ciBnb2FsIHdpdGggTWFjQm9vayB3YXMgdG8gZG8gdGhlIGltcG9zc2libGUufGhlbHAnKTtcbiAgICB9XG5cbiAgICAvL2ZsaXBcbiAgICBvbkZsaXAoKXtcbiAgICAgICAgdGhpcy5kaWFsb2cuZmxpcCgnT3VyIGdvYWwgd2l0aCBNYWNCb29rIHdhcyB0byBkbyB0aGUgaW1wb3NzaWJsZXx8VW5kbycsZnVuY3Rpb24odil7XG4gICAgICAgICAgICB3aW5kb3cuYWxlcnQoJ3ByZXNzZWQgJyt2KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25GbGlwV2l0aEljb24oKXtcbiAgICAgICAgdGhpcy5kaWFsb2cuZmxpcCgnT3VyIGdvYWwgd2l0aCBNYWNCb29rIHdhcyB0byBkbyB0aGUgaW1wb3NzaWJsZS58aGVscHxVbmRvJyk7XG4gICAgfVxuXG4gICAgb25EYXJrRmxpcCgpe1xuICAgICAgICB0aGlzLmRpYWxvZy5mbGlwRGFyaygnT3VyIGdvYWwgd2l0aCBNYWNCb29rIHdhcyB0byBkbyB0aGUgaW1wb3NzaWJsZXx8VW5kbycpO1xuICAgIH1cblxuICAgIG9uRGFya0ZsaXBXaXRoSWNvbigpe1xuICAgICAgICB0aGlzLmRpYWxvZy5mbGlwRGFyaygnT3VyIGdvYWwgd2l0aCBNYWNCb29rIHdhcyB0byBkbyB0aGUgaW1wb3NzaWJsZS58aGVscCcpO1xuICAgIH1cblxuICAgIC8vcHJvZ3Jlc3NcbiAgICBvblByb2dyZXNzKCl7XG4gICAgICAgIHRoaXMuZGlhbG9nLnByb2dyZXNzKCdPdXIgZ29hbCB3aXRoIE1hY0Jvb2sgd2FzIHRvIGRvIHRoZSBpbXBvc3NpYmxlfHxVbmRvJyxmdW5jdGlvbih2KXtcbiAgICAgICAgICAgIHdpbmRvdy5hbGVydCgncHJlc3NlZCAnK3YpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvblByb2dyZXNzV2l0aEljb24oKXtcbiAgICAgICAgdGhpcy5kaWFsb2cucHJvZ3Jlc3MoJ091ciBnb2FsIHdpdGggTWFjQm9vayB3YXMgdG8gZG8gdGhlIGltcG9zc2libGUufGhlbHB8VW5kbycpO1xuICAgIH1cblxuICAgIG9uRGFya1Byb2dyZXNzKCl7XG4gICAgICAgIHRoaXMuZGlhbG9nLnByb2dyZXNzRGFyaygnT3VyIGdvYWwgd2l0aCBNYWNCb29rIHdhcyB0byBkbyB0aGUgaW1wb3NzaWJsZXx8VW5kbycpO1xuICAgIH1cblxuICAgIG9uRGFya1Byb2dyZXNzV2l0aEljb24oKXtcbiAgICAgICAgdGhpcy5kaWFsb2cucHJvZ3Jlc3NEYXJrKCdPdXIgZ29hbCB3aXRoIE1hY0Jvb2sgd2FzIHRvIGRvIHRoZSBpbXBvc3NpYmxlLnxoZWxwJyk7XG4gICAgfVxuXG5cbiAgICBvbkNsaWNrKCl7XG5cbiAgICAgICAgLypcbiAgICAgICAgdmFyIG1vZGFsQ29udGVudDpDb25maXJtQ29udGV4dCA9IG5ldyBDb25maXJtQ29udGV4dCgnU2ltcGxlIFNtYWxsIG1vZGFsJywgJ1ByZXNzIEVTQyBvciBjbGljayBPSyAvIG91dHNpZGUgYXJlYSB0byBjbG9zZS4nKTtcblxuICAgICAgICBsZXQgZGlhbG9nOiAgUHJvbWlzZTxBaU1vZGFsSW5zdGFuY2U+O1xuICAgICAgICBsZXQgYmluZGluZ3MgPSBJbmplY3Rvci5yZXNvbHZlKFtcbiAgICAgICAgICAgIHByb3ZpZGUoQ29uZmlybUNvbnRleHQsIHt1c2VWYWx1ZTogbW9kYWxDb250ZW50fSlcbiAgICAgICAgXSk7XG5cbiAgICAgICAgbGV0IGNvbmZpZzpBaU1vZGFsQ29uZmlnID1uZXcgQWlNb2RhbENvbmZpZygpO1xuICAgICAgICAvL2NvbmZpZy5tYXNrPSdibGFjayc7XG4gICAgICAgIC8vY29uZmlnLnRyYWNraW5nU2l6ZVBvc2l0aW9uPXRydWU7XG4gICAgICAgIC8vY29uZmlnLmFuY2hvck5hbWU9XCJtb2RhbEhlcmVcIjtcbiAgICAgICAgY29uZmlnLnk9bmV3IEFpTW9kYWxQb3NpdGlvbihcIjEwMCVcIixBaU1vZGFsQWxpZ24uQmVnaW4pO1xuICAgICAgICBjb25maWcuYXJvdW5kVG89J2J0bic7XG5cbiAgICAgICAgZGlhbG9nID0gdGhpcy5tb2RhbC5vcGVuKDxhbnk+Q29uZmlybURpYWxvZyxiaW5kaW5ncyxjb25maWcpO1xuXG4gICAgICAgIGRpYWxvZy50aGVuKFxuICAgICAgICAgICAgKHJlc3VsdFByb21pc2UpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0UHJvbWlzZS5yZXN1bHQudGhlbihcbiAgICAgICAgICAgICAgICAgICAgKHJlc3VsdCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RNb2RhbFJlc3VsdCA9IHJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgKCkgPT57XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RNb2RhbFJlc3VsdCA9ICdSZWplY3RlZCEnO1xuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICovXG4gICAgfVxufVxuQWlBcHAuYm9vdChBcHBDb21wb25lbnQpOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
