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
    var AiConfirmContext, AiConfirm;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Ai_1_1) {
                Ai_1 = Ai_1_1;
            }],
        execute: function() {
            AiConfirmContext = (function () {
                function AiConfirmContext(title, message, ico, yesText, noText) {
                    if (title === void 0) { title = ''; }
                    if (message === void 0) { message = ''; }
                    if (ico === void 0) { ico = ''; }
                    if (yesText === void 0) { yesText = 'YES'; }
                    if (noText === void 0) { noText = 'NO'; }
                    this.title = title;
                    this.message = message;
                    this.ico = ico;
                    this.yesText = yesText;
                    this.noText = noText;
                }
                return AiConfirmContext;
            }());
            exports_1("AiConfirmContext", AiConfirmContext);
            AiConfirm = (function () {
                function AiConfirm(instance, context) {
                    this.instance = instance;
                    this.context = context;
                }
                Object.defineProperty(AiConfirm, "DefaultConfig", {
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
                AiConfirm.prototype.ok = function () {
                    this.instance.close(true);
                };
                AiConfirm.prototype.cancel = function () {
                    this.instance.dismiss();
                };
                AiConfirm.prototype.hasIcon = function () {
                    return this.context.ico.length > 0 ? '' : null;
                };
                AiConfirm = __decorate([
                    core_1.Component({
                        selector: 'ai-confirm',
                        directives: [Ai_1.AiButton],
                        template: "<div class='ai-dlg-body' [attr.hasIcon]='hasIcon()'>\n        <h2 class='title'>{{context.title}}</h2>\n        <p class='msg'>{{context.message}}</p>\n        <div class='left'>\n            <span class='ico' ai-material>{{context.ico}}</span>\n        </div>\n    </div>\n    <div class='bar'>\n        <div class='line'></div>\n        <ai-button class='no' primary (_click)='cancel()'>{{context.noText}}</ai-button>\n        <ai-button class='yes' primary leftborder (_click)='ok()'>{{context.yesText}}</ai-button>\n    </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [Ai_1.AiModalInstance, AiConfirmContext])
                ], AiConfirm);
                return AiConfirm;
            }());
            exports_1("AiConfirm", AiConfirm);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlEaWFsb2cvQWlDb25maXJtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBR0E7Z0JBQ0ksMEJBQ1csS0FBa0IsRUFDbEIsT0FBb0IsRUFDcEIsR0FBYSxFQUNiLE9BQXVCLEVBQ3ZCLE1BQXFCO29CQUo1QixxQkFBeUIsR0FBekIsVUFBeUI7b0JBQ3pCLHVCQUEyQixHQUEzQixZQUEyQjtvQkFDM0IsbUJBQW9CLEdBQXBCLFFBQW9CO29CQUNwQix1QkFBOEIsR0FBOUIsZUFBOEI7b0JBQzlCLHNCQUE0QixHQUE1QixhQUE0QjtvQkFKckIsVUFBSyxHQUFMLEtBQUssQ0FBYTtvQkFDbEIsWUFBTyxHQUFQLE9BQU8sQ0FBYTtvQkFDcEIsUUFBRyxHQUFILEdBQUcsQ0FBVTtvQkFDYixZQUFPLEdBQVAsT0FBTyxDQUFnQjtvQkFDdkIsV0FBTSxHQUFOLE1BQU0sQ0FBZTtnQkFDN0IsQ0FBQztnQkFDUix1QkFBQztZQUFELENBUkEsQUFRQyxJQUFBO1lBUkQsK0NBUUMsQ0FBQTtZQW9CRDtnQkFZSSxtQkFBbUIsUUFBeUIsRUFBUSxPQUF5QjtvQkFBMUQsYUFBUSxHQUFSLFFBQVEsQ0FBaUI7b0JBQVEsWUFBTyxHQUFQLE9BQU8sQ0FBa0I7Z0JBQzdFLENBQUM7Z0JBWEQsc0JBQVcsMEJBQWE7eUJBQXhCO3dCQUNJLElBQUksTUFBTSxHQUFnQixJQUFJLGtCQUFhLEVBQUUsQ0FBQzt3QkFDOUMsTUFBTSxDQUFDLENBQUMsR0FBQyxvQkFBZSxDQUFDLE1BQU0sRUFBRSxDQUFDO3dCQUNsQyxNQUFNLENBQUMsQ0FBQyxHQUFDLElBQUksb0JBQWUsQ0FBQyxHQUFHLEVBQUMsaUJBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDckQsTUFBTSxDQUFDLElBQUksR0FBQyxPQUFPLENBQUM7d0JBQ3BCLE1BQU0sQ0FBQyxRQUFRLEdBQUMsSUFBSSxDQUFDO3dCQUNyQixNQUFNLENBQUMsU0FBUyxHQUFDLE1BQU0sQ0FBQzt3QkFDeEIsTUFBTSxDQUFDLE1BQU0sQ0FBQztvQkFDbEIsQ0FBQzs7O21CQUFBO2dCQUtELHNCQUFFLEdBQUY7b0JBQ0ksSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzlCLENBQUM7Z0JBRUQsMEJBQU0sR0FBTjtvQkFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUM1QixDQUFDO2dCQUVELDJCQUFPLEdBQVA7b0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFDLElBQUksQ0FBQztnQkFDakQsQ0FBQztnQkEzQ0w7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsWUFBWTt3QkFDdEIsVUFBVSxFQUFFLENBQUMsYUFBUSxDQUFDO3dCQUN0QixRQUFRLEVBQ1IsMGhCQVlDO3FCQUNKLENBQUM7OzZCQUFBO2dCQTRCRixnQkFBQztZQUFELENBM0JBLEFBMkJDLElBQUE7WUEzQkQsaUNBMkJDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9BaURpYWxvZy9BaUNvbmZpcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0FpQnV0dG9uLEFpTW9kYWxJbnN0YW5jZSxBaU1vZGFsRGlhbG9nLEFpTW9kYWxDb25maWcsQWlNb2RhbEFsaWduLEFpTW9kYWxQb3NpdGlvbn0gZnJvbSAnLi4vQWknO1xuXG5leHBvcnQgY2xhc3MgQWlDb25maXJtQ29udGV4dCB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyB0aXRsZTogc3RyaW5nID0gJycsXG4gICAgICAgIHB1YmxpYyBtZXNzYWdlOiBzdHJpbmcgPSAnJyxcbiAgICAgICAgcHVibGljIGljbzpzdHJpbmc9JycsXG4gICAgICAgIHB1YmxpYyB5ZXNUZXh0OiBzdHJpbmcgPSAnWUVTJyxcbiAgICAgICAgcHVibGljIG5vVGV4dDogc3RyaW5nID0gJ05PJ1xuICAgICkge31cbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhaS1jb25maXJtJyxcbiAgICBkaXJlY3RpdmVzOiBbQWlCdXR0b25dLFxuICAgIHRlbXBsYXRlOlxuICAgIGA8ZGl2IGNsYXNzPSdhaS1kbGctYm9keScgW2F0dHIuaGFzSWNvbl09J2hhc0ljb24oKSc+XG4gICAgICAgIDxoMiBjbGFzcz0ndGl0bGUnPnt7Y29udGV4dC50aXRsZX19PC9oMj5cbiAgICAgICAgPHAgY2xhc3M9J21zZyc+e3tjb250ZXh0Lm1lc3NhZ2V9fTwvcD5cbiAgICAgICAgPGRpdiBjbGFzcz0nbGVmdCc+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz0naWNvJyBhaS1tYXRlcmlhbD57e2NvbnRleHQuaWNvfX08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9J2Jhcic+XG4gICAgICAgIDxkaXYgY2xhc3M9J2xpbmUnPjwvZGl2PlxuICAgICAgICA8YWktYnV0dG9uIGNsYXNzPSdubycgcHJpbWFyeSAoX2NsaWNrKT0nY2FuY2VsKCknPnt7Y29udGV4dC5ub1RleHR9fTwvYWktYnV0dG9uPlxuICAgICAgICA8YWktYnV0dG9uIGNsYXNzPSd5ZXMnIHByaW1hcnkgbGVmdGJvcmRlciAoX2NsaWNrKT0nb2soKSc+e3tjb250ZXh0Lnllc1RleHR9fTwvYWktYnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgQWlDb25maXJtIGltcGxlbWVudHMgQWlNb2RhbERpYWxvZyB7XG5cbiAgICBzdGF0aWMgZ2V0IERlZmF1bHRDb25maWcoKTpBaU1vZGFsQ29uZmlne1xuICAgICAgICBsZXQgY29uZmlnOkFpTW9kYWxDb25maWcgPW5ldyBBaU1vZGFsQ29uZmlnKCk7XG4gICAgICAgIGNvbmZpZy54PUFpTW9kYWxQb3NpdGlvbi5DZW50ZXIoKTtcbiAgICAgICAgY29uZmlnLnk9bmV3IEFpTW9kYWxQb3NpdGlvbigxMDAsQWlNb2RhbEFsaWduLkJlZ2luKTtcbiAgICAgICAgY29uZmlnLm1hc2s9J2JsYWNrJztcbiAgICAgICAgY29uZmlnLmZsb2F0aW5nPXRydWU7XG4gICAgICAgIGNvbmZpZy5hbmltYXRpb249J2ZhZGUnO1xuICAgICAgICByZXR1cm4gY29uZmlnO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBpbnN0YW5jZTogQWlNb2RhbEluc3RhbmNlLHB1YmxpYyBjb250ZXh0OiBBaUNvbmZpcm1Db250ZXh0KSB7XG4gICAgfVxuXG4gICAgb2soKSB7XG4gICAgICAgIHRoaXMuaW5zdGFuY2UuY2xvc2UodHJ1ZSk7XG4gICAgfVxuXG4gICAgY2FuY2VsKCkge1xuICAgICAgICB0aGlzLmluc3RhbmNlLmRpc21pc3MoKTtcbiAgICB9XG5cbiAgICBoYXNJY29uKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQuaWNvLmxlbmd0aCA+IDAgPyAnJzpudWxsO1xuICAgIH1cblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
