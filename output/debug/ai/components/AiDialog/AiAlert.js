System.register(['angular2/core', '../Ai'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
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
    var AiAlertContext, AiAlert;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Ai_1_1) {
                Ai_1 = Ai_1_1;
            }],
        execute: function() {
            AiAlertContext = (function () {
                function AiAlertContext(title, message, ico, okText) {
                    if (title === void 0) { title = ''; }
                    if (message === void 0) { message = ''; }
                    if (ico === void 0) { ico = ''; }
                    if (okText === void 0) { okText = 'OK'; }
                    this.title = title;
                    this.message = message;
                    this.ico = ico;
                    this.okText = okText;
                }
                return AiAlertContext;
            }());
            exports_1("AiAlertContext", AiAlertContext);
            AiAlert = (function () {
                function AiAlert(instance, context) {
                    this.instance = instance;
                    this.context = context;
                }
                Object.defineProperty(AiAlert, "DefaultConfig", {
                    get: function () {
                        var config = new Ai_1.AiModalConfig();
                        config.x = Ai_1.AiModalPosition.Center();
                        config.y = new Ai_1.AiModalPosition(100, Ai_1.AiModalAlign.Begin);
                        config.mask = 'black';
                        config.floating = true;
                        config.animation = 'fade';
                        return config;
                    },
                    enumerable: true,
                    configurable: true
                });
                AiAlert.prototype.ok = function () {
                    this.instance.dismiss();
                };
                AiAlert.prototype.hasIcon = function () {
                    return this.context.ico.length > 0 ? '' : null;
                };
                AiAlert = __decorate([
                    core_1.Component({
                        selector: 'ai-alert',
                        directives: [Ai_1.AiButton],
                        template: "<div class='ai-dlg-body ai-fade-in' [attr.hasIcon]='hasIcon()'>\n        <h2 class='title'>{{context.title}}</h2>\n        <p class='message'>{{context.message}}</p>\n        <div class='left'>\n            <span class='ico' ai-material>{{context.ico}}</span>\n        </div>\n\n    </div>\n    <div class='bar'>\n        <ai-button class='yes' raised red (_click)='ok()'>{{context.okText}}</ai-button>\n    </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [Ai_1.AiModalInstance, AiAlertContext])
                ], AiAlert);
                return AiAlert;
            }());
            exports_1("AiAlert", AiAlert);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlEaWFsb2cvQWlBbGVydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUdBO2dCQUNJLHdCQUNXLEtBQWtCLEVBQ2xCLE9BQW9CLEVBQ3BCLEdBQWEsRUFDYixNQUFxQjtvQkFINUIscUJBQXlCLEdBQXpCLFVBQXlCO29CQUN6Qix1QkFBMkIsR0FBM0IsWUFBMkI7b0JBQzNCLG1CQUFvQixHQUFwQixRQUFvQjtvQkFDcEIsc0JBQTRCLEdBQTVCLGFBQTRCO29CQUhyQixVQUFLLEdBQUwsS0FBSyxDQUFhO29CQUNsQixZQUFPLEdBQVAsT0FBTyxDQUFhO29CQUNwQixRQUFHLEdBQUgsR0FBRyxDQUFVO29CQUNiLFdBQU0sR0FBTixNQUFNLENBQWU7Z0JBQzdCLENBQUM7Z0JBQ1IscUJBQUM7WUFBRCxDQVBBLEFBT0MsSUFBQTtZQVBELDJDQU9DLENBQUE7WUFvQkQ7Z0JBWUksaUJBQW1CLFFBQXlCLEVBQVEsT0FBdUI7b0JBQXhELGFBQVEsR0FBUixRQUFRLENBQWlCO29CQUFRLFlBQU8sR0FBUCxPQUFPLENBQWdCO2dCQUMzRSxDQUFDO2dCQVhELHNCQUFXLHdCQUFhO3lCQUF4Qjt3QkFDSSxJQUFJLE1BQU0sR0FBZ0IsSUFBSSxrQkFBYSxFQUFFLENBQUM7d0JBQzlDLE1BQU0sQ0FBQyxDQUFDLEdBQUMsb0JBQWUsQ0FBQyxNQUFNLEVBQUUsQ0FBQzt3QkFDbEMsTUFBTSxDQUFDLENBQUMsR0FBQyxJQUFJLG9CQUFlLENBQUMsR0FBRyxFQUFDLGlCQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQ3JELE1BQU0sQ0FBQyxJQUFJLEdBQUMsT0FBTyxDQUFDO3dCQUNwQixNQUFNLENBQUMsUUFBUSxHQUFDLElBQUksQ0FBQzt3QkFDckIsTUFBTSxDQUFDLFNBQVMsR0FBQyxNQUFNLENBQUM7d0JBQ3hCLE1BQU0sQ0FBQyxNQUFNLENBQUM7b0JBQ2xCLENBQUM7OzttQkFBQTtnQkFLRCxvQkFBRSxHQUFGO29CQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQzVCLENBQUM7Z0JBRUQseUJBQU8sR0FBUDtvQkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUMsSUFBSSxDQUFDO2dCQUNqRCxDQUFDO2dCQXRDTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxVQUFVO3dCQUNwQixVQUFVLEVBQUUsQ0FBQyxhQUFRLENBQUM7d0JBQ3RCLFFBQVEsRUFDUixzYUFXQztxQkFDSixDQUFDOzsyQkFBQTtnQkF5QkYsY0FBQztZQUFELENBeEJBLEFBd0JDLElBQUE7WUF4QkQsNkJBd0JDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9BaURpYWxvZy9BaUFsZXJ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtBaUJ1dHRvbixBaUNvbmZpcm0sQWlDb25maXJtQ29udGV4dCxBaU1vZGFsSW5zdGFuY2UsQWlNb2RhbERpYWxvZyxBaU1vZGFsQ29uZmlnLEFpTW9kYWxBbGlnbixBaU1vZGFsUG9zaXRpb259IGZyb20gJy4uL0FpJztcblxuZXhwb3J0IGNsYXNzIEFpQWxlcnRDb250ZXh0IHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIHRpdGxlOiBzdHJpbmcgPSAnJyxcbiAgICAgICAgcHVibGljIG1lc3NhZ2U6IHN0cmluZyA9ICcnLFxuICAgICAgICBwdWJsaWMgaWNvOnN0cmluZz0nJyxcbiAgICAgICAgcHVibGljIG9rVGV4dDogc3RyaW5nID0gJ09LJ1xuICAgICkge31cbn1cblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FpLWFsZXJ0JyxcbiAgICBkaXJlY3RpdmVzOiBbQWlCdXR0b25dLFxuICAgIHRlbXBsYXRlOlxuICAgIGA8ZGl2IGNsYXNzPSdhaS1kbGctYm9keSBhaS1mYWRlLWluJyBbYXR0ci5oYXNJY29uXT0naGFzSWNvbigpJz5cbiAgICAgICAgPGgyIGNsYXNzPSd0aXRsZSc+e3tjb250ZXh0LnRpdGxlfX08L2gyPlxuICAgICAgICA8cCBjbGFzcz0nbWVzc2FnZSc+e3tjb250ZXh0Lm1lc3NhZ2V9fTwvcD5cbiAgICAgICAgPGRpdiBjbGFzcz0nbGVmdCc+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz0naWNvJyBhaS1tYXRlcmlhbD57e2NvbnRleHQuaWNvfX08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz0nYmFyJz5cbiAgICAgICAgPGFpLWJ1dHRvbiBjbGFzcz0neWVzJyByYWlzZWQgcmVkIChfY2xpY2spPSdvaygpJz57e2NvbnRleHQub2tUZXh0fX08L2FpLWJ1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzIEFpQWxlcnQgaW1wbGVtZW50cyBBaU1vZGFsRGlhbG9nIHtcblxuICAgIHN0YXRpYyBnZXQgRGVmYXVsdENvbmZpZygpOkFpTW9kYWxDb25maWd7XG4gICAgICAgIGxldCBjb25maWc6QWlNb2RhbENvbmZpZyA9bmV3IEFpTW9kYWxDb25maWcoKTtcbiAgICAgICAgY29uZmlnLng9QWlNb2RhbFBvc2l0aW9uLkNlbnRlcigpO1xuICAgICAgICBjb25maWcueT1uZXcgQWlNb2RhbFBvc2l0aW9uKDEwMCxBaU1vZGFsQWxpZ24uQmVnaW4pO1xuICAgICAgICBjb25maWcubWFzaz0nYmxhY2snO1xuICAgICAgICBjb25maWcuZmxvYXRpbmc9dHJ1ZTtcbiAgICAgICAgY29uZmlnLmFuaW1hdGlvbj0nZmFkZSc7XG4gICAgICAgIHJldHVybiBjb25maWc7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocHVibGljIGluc3RhbmNlOiBBaU1vZGFsSW5zdGFuY2UscHVibGljIGNvbnRleHQ6IEFpQWxlcnRDb250ZXh0KSB7XG4gICAgfVxuXG4gICAgb2soKSB7XG4gICAgICAgIHRoaXMuaW5zdGFuY2UuZGlzbWlzcygpO1xuICAgIH1cblxuICAgIGhhc0ljb24oKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC5pY28ubGVuZ3RoID4gMCA/ICcnOm51bGw7XG4gICAgfVxuXG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
