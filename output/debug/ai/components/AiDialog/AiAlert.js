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
                        template: "<div class='ai-dlg-body' [attr.hasIcon]='hasIcon()'>\n        <h2 class='title'>{{context.title}}</h2>\n        <p class='message'>{{context.message}}</p>\n        <div class='left'>\n            <span class='ico' ai-material>{{context.ico}}</span>\n        </div>\n\n    </div>\n    <div class='bar'>\n        <ai-button class='yes' raised red (_click)='ok()'>{{context.okText}}</ai-button>\n    </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [Ai_1.AiModalInstance, AiAlertContext])
                ], AiAlert);
                return AiAlert;
            }());
            exports_1("AiAlert", AiAlert);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlEaWFsb2cvQWlBbGVydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUdBO2dCQUNJLHdCQUNXLEtBQWtCLEVBQ2xCLE9BQW9CLEVBQ3BCLEdBQWEsRUFDYixNQUFxQjtvQkFINUIscUJBQXlCLEdBQXpCLFVBQXlCO29CQUN6Qix1QkFBMkIsR0FBM0IsWUFBMkI7b0JBQzNCLG1CQUFvQixHQUFwQixRQUFvQjtvQkFDcEIsc0JBQTRCLEdBQTVCLGFBQTRCO29CQUhyQixVQUFLLEdBQUwsS0FBSyxDQUFhO29CQUNsQixZQUFPLEdBQVAsT0FBTyxDQUFhO29CQUNwQixRQUFHLEdBQUgsR0FBRyxDQUFVO29CQUNiLFdBQU0sR0FBTixNQUFNLENBQWU7Z0JBQzdCLENBQUM7Z0JBQ1IscUJBQUM7WUFBRCxDQVBBLEFBT0MsSUFBQTtZQVBELDJDQU9DLENBQUE7WUFvQkQ7Z0JBWUksaUJBQW1CLFFBQXlCLEVBQVEsT0FBdUI7b0JBQXhELGFBQVEsR0FBUixRQUFRLENBQWlCO29CQUFRLFlBQU8sR0FBUCxPQUFPLENBQWdCO2dCQUMzRSxDQUFDO2dCQVhELHNCQUFXLHdCQUFhO3lCQUF4Qjt3QkFDSSxJQUFJLE1BQU0sR0FBZ0IsSUFBSSxrQkFBYSxFQUFFLENBQUM7d0JBQzlDLE1BQU0sQ0FBQyxDQUFDLEdBQUMsb0JBQWUsQ0FBQyxNQUFNLEVBQUUsQ0FBQzt3QkFDbEMsTUFBTSxDQUFDLENBQUMsR0FBQyxJQUFJLG9CQUFlLENBQUMsR0FBRyxFQUFDLGlCQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQ3JELE1BQU0sQ0FBQyxJQUFJLEdBQUMsT0FBTyxDQUFDO3dCQUNwQixNQUFNLENBQUMsUUFBUSxHQUFDLElBQUksQ0FBQzt3QkFDckIsTUFBTSxDQUFDLFNBQVMsR0FBQyxNQUFNLENBQUM7d0JBQ3hCLE1BQU0sQ0FBQyxNQUFNLENBQUM7b0JBQ2xCLENBQUM7OzttQkFBQTtnQkFLRCxvQkFBRSxHQUFGO29CQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQzVCLENBQUM7Z0JBRUQseUJBQU8sR0FBUDtvQkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUMsSUFBSSxDQUFDO2dCQUNqRCxDQUFDO2dCQXRDTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxVQUFVO3dCQUNwQixVQUFVLEVBQUUsQ0FBQyxhQUFRLENBQUM7d0JBQ3RCLFFBQVEsRUFDUiwyWkFXQztxQkFDSixDQUFDOzsyQkFBQTtnQkF5QkYsY0FBQztZQUFELENBeEJBLEFBd0JDLElBQUE7WUF4QkQsNkJBd0JDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9BaURpYWxvZy9BaUFsZXJ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtBaUJ1dHRvbixBaUNvbmZpcm0sQWlDb25maXJtQ29udGV4dCxBaU1vZGFsSW5zdGFuY2UsQWlNb2RhbERpYWxvZyxBaU1vZGFsQ29uZmlnLEFpTW9kYWxBbGlnbixBaU1vZGFsUG9zaXRpb259IGZyb20gJy4uL0FpJztcblxuZXhwb3J0IGNsYXNzIEFpQWxlcnRDb250ZXh0IHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIHRpdGxlOiBzdHJpbmcgPSAnJyxcbiAgICAgICAgcHVibGljIG1lc3NhZ2U6IHN0cmluZyA9ICcnLFxuICAgICAgICBwdWJsaWMgaWNvOnN0cmluZz0nJyxcbiAgICAgICAgcHVibGljIG9rVGV4dDogc3RyaW5nID0gJ09LJ1xuICAgICkge31cbn1cblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FpLWFsZXJ0JyxcbiAgICBkaXJlY3RpdmVzOiBbQWlCdXR0b25dLFxuICAgIHRlbXBsYXRlOlxuICAgIGA8ZGl2IGNsYXNzPSdhaS1kbGctYm9keScgW2F0dHIuaGFzSWNvbl09J2hhc0ljb24oKSc+XG4gICAgICAgIDxoMiBjbGFzcz0ndGl0bGUnPnt7Y29udGV4dC50aXRsZX19PC9oMj5cbiAgICAgICAgPHAgY2xhc3M9J21lc3NhZ2UnPnt7Y29udGV4dC5tZXNzYWdlfX08L3A+XG4gICAgICAgIDxkaXYgY2xhc3M9J2xlZnQnPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ljbycgYWktbWF0ZXJpYWw+e3tjb250ZXh0Lmljb319PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9J2Jhcic+XG4gICAgICAgIDxhaS1idXR0b24gY2xhc3M9J3llcycgcmFpc2VkIHJlZCAoX2NsaWNrKT0nb2soKSc+e3tjb250ZXh0Lm9rVGV4dH19PC9haS1idXR0b24+XG4gICAgPC9kaXY+XG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyBBaUFsZXJ0IGltcGxlbWVudHMgQWlNb2RhbERpYWxvZyB7XG5cbiAgICBzdGF0aWMgZ2V0IERlZmF1bHRDb25maWcoKTpBaU1vZGFsQ29uZmlne1xuICAgICAgICBsZXQgY29uZmlnOkFpTW9kYWxDb25maWcgPW5ldyBBaU1vZGFsQ29uZmlnKCk7XG4gICAgICAgIGNvbmZpZy54PUFpTW9kYWxQb3NpdGlvbi5DZW50ZXIoKTtcbiAgICAgICAgY29uZmlnLnk9bmV3IEFpTW9kYWxQb3NpdGlvbigxMDAsQWlNb2RhbEFsaWduLkJlZ2luKTtcbiAgICAgICAgY29uZmlnLm1hc2s9J2JsYWNrJztcbiAgICAgICAgY29uZmlnLmZsb2F0aW5nPXRydWU7XG4gICAgICAgIGNvbmZpZy5hbmltYXRpb249J2ZhZGUnO1xuICAgICAgICByZXR1cm4gY29uZmlnO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBpbnN0YW5jZTogQWlNb2RhbEluc3RhbmNlLHB1YmxpYyBjb250ZXh0OiBBaUFsZXJ0Q29udGV4dCkge1xuICAgIH1cblxuICAgIG9rKCkge1xuICAgICAgICB0aGlzLmluc3RhbmNlLmRpc21pc3MoKTtcbiAgICB9XG5cbiAgICBoYXNJY29uKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQuaWNvLmxlbmd0aCA+IDAgPyAnJzpudWxsO1xuICAgIH1cblxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
