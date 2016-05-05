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
                    this.instance.close();
                };
                AiConfirm.prototype.hasIcon = function () {
                    return this.context.ico.length > 0 ? '' : null;
                };
                AiConfirm.prototype.closingDelayTime = function () {
                    return 500;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlEaWFsb2cvQWlDb25maXJtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBR0E7Z0JBQ0ksMEJBQ1csS0FBa0IsRUFDbEIsT0FBb0IsRUFDcEIsR0FBYSxFQUNiLE9BQXVCLEVBQ3ZCLE1BQXFCO29CQUo1QixxQkFBeUIsR0FBekIsVUFBeUI7b0JBQ3pCLHVCQUEyQixHQUEzQixZQUEyQjtvQkFDM0IsbUJBQW9CLEdBQXBCLFFBQW9CO29CQUNwQix1QkFBOEIsR0FBOUIsZUFBOEI7b0JBQzlCLHNCQUE0QixHQUE1QixhQUE0QjtvQkFKckIsVUFBSyxHQUFMLEtBQUssQ0FBYTtvQkFDbEIsWUFBTyxHQUFQLE9BQU8sQ0FBYTtvQkFDcEIsUUFBRyxHQUFILEdBQUcsQ0FBVTtvQkFDYixZQUFPLEdBQVAsT0FBTyxDQUFnQjtvQkFDdkIsV0FBTSxHQUFOLE1BQU0sQ0FBZTtnQkFDN0IsQ0FBQztnQkFDUix1QkFBQztZQUFELENBUkEsQUFRQyxJQUFBO1lBUkQsK0NBUUMsQ0FBQTtZQW9CRDtnQkFZSSxtQkFBbUIsUUFBeUIsRUFBUSxPQUF5QjtvQkFBMUQsYUFBUSxHQUFSLFFBQVEsQ0FBaUI7b0JBQVEsWUFBTyxHQUFQLE9BQU8sQ0FBa0I7Z0JBQzdFLENBQUM7Z0JBWEQsc0JBQVcsMEJBQWE7eUJBQXhCO3dCQUNJLElBQUksTUFBTSxHQUFnQixJQUFJLGtCQUFhLEVBQUUsQ0FBQzt3QkFDOUMsTUFBTSxDQUFDLENBQUMsR0FBQyxvQkFBZSxDQUFDLE1BQU0sRUFBRSxDQUFDO3dCQUNsQyxNQUFNLENBQUMsQ0FBQyxHQUFDLElBQUksb0JBQWUsQ0FBQyxHQUFHLEVBQUMsaUJBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDckQsTUFBTSxDQUFDLElBQUksR0FBQyxPQUFPLENBQUM7d0JBQ3BCLE1BQU0sQ0FBQyxRQUFRLEdBQUMsSUFBSSxDQUFDO3dCQUNyQixNQUFNLENBQUMsU0FBUyxHQUFDLE1BQU0sQ0FBQzt3QkFDeEIsTUFBTSxDQUFDLE1BQU0sQ0FBQztvQkFDbEIsQ0FBQzs7O21CQUFBO2dCQUtELHNCQUFFLEdBQUY7b0JBQ0ksSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzlCLENBQUM7Z0JBRUQsMEJBQU0sR0FBTjtvQkFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUMxQixDQUFDO2dCQUVELDJCQUFPLEdBQVA7b0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFDLElBQUksQ0FBQztnQkFDakQsQ0FBQztnQkFFRCxvQ0FBZ0IsR0FBaEI7b0JBQ0ksTUFBTSxDQUFDLEdBQUcsQ0FBQztnQkFDZixDQUFDO2dCQS9DTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxZQUFZO3dCQUN0QixVQUFVLEVBQUUsQ0FBQyxhQUFRLENBQUM7d0JBQ3RCLFFBQVEsRUFDUiwwaEJBWUM7cUJBQ0osQ0FBQzs7NkJBQUE7Z0JBZ0NGLGdCQUFDO1lBQUQsQ0EvQkEsQUErQkMsSUFBQTtZQS9CRCxpQ0ErQkMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL0FpRGlhbG9nL0FpQ29uZmlybS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7QWlCdXR0b24sQWlNb2RhbEluc3RhbmNlLEFpTW9kYWxEaWFsb2csQWlNb2RhbENvbmZpZyxBaU1vZGFsQWxpZ24sQWlNb2RhbFBvc2l0aW9ufSBmcm9tICcuLi9BaSc7XG5cbmV4cG9ydCBjbGFzcyBBaUNvbmZpcm1Db250ZXh0IHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIHRpdGxlOiBzdHJpbmcgPSAnJyxcbiAgICAgICAgcHVibGljIG1lc3NhZ2U6IHN0cmluZyA9ICcnLFxuICAgICAgICBwdWJsaWMgaWNvOnN0cmluZz0nJyxcbiAgICAgICAgcHVibGljIHllc1RleHQ6IHN0cmluZyA9ICdZRVMnLFxuICAgICAgICBwdWJsaWMgbm9UZXh0OiBzdHJpbmcgPSAnTk8nXG4gICAgKSB7fVxufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FpLWNvbmZpcm0nLFxuICAgIGRpcmVjdGl2ZXM6IFtBaUJ1dHRvbl0sXG4gICAgdGVtcGxhdGU6XG4gICAgYDxkaXYgY2xhc3M9J2FpLWRsZy1ib2R5JyBbYXR0ci5oYXNJY29uXT0naGFzSWNvbigpJz5cbiAgICAgICAgPGgyIGNsYXNzPSd0aXRsZSc+e3tjb250ZXh0LnRpdGxlfX08L2gyPlxuICAgICAgICA8cCBjbGFzcz0nbXNnJz57e2NvbnRleHQubWVzc2FnZX19PC9wPlxuICAgICAgICA8ZGl2IGNsYXNzPSdsZWZ0Jz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdpY28nIGFpLW1hdGVyaWFsPnt7Y29udGV4dC5pY299fTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz0nYmFyJz5cbiAgICAgICAgPGRpdiBjbGFzcz0nbGluZSc+PC9kaXY+XG4gICAgICAgIDxhaS1idXR0b24gY2xhc3M9J25vJyBwcmltYXJ5IChfY2xpY2spPSdjYW5jZWwoKSc+e3tjb250ZXh0Lm5vVGV4dH19PC9haS1idXR0b24+XG4gICAgICAgIDxhaS1idXR0b24gY2xhc3M9J3llcycgcHJpbWFyeSBsZWZ0Ym9yZGVyIChfY2xpY2spPSdvaygpJz57e2NvbnRleHQueWVzVGV4dH19PC9haS1idXR0b24+XG4gICAgPC9kaXY+XG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyBBaUNvbmZpcm0gaW1wbGVtZW50cyBBaU1vZGFsRGlhbG9nIHtcblxuICAgIHN0YXRpYyBnZXQgRGVmYXVsdENvbmZpZygpOkFpTW9kYWxDb25maWd7XG4gICAgICAgIGxldCBjb25maWc6QWlNb2RhbENvbmZpZyA9bmV3IEFpTW9kYWxDb25maWcoKTtcbiAgICAgICAgY29uZmlnLng9QWlNb2RhbFBvc2l0aW9uLkNlbnRlcigpO1xuICAgICAgICBjb25maWcueT1uZXcgQWlNb2RhbFBvc2l0aW9uKDEwMCxBaU1vZGFsQWxpZ24uQmVnaW4pO1xuICAgICAgICBjb25maWcubWFzaz0nYmxhY2snO1xuICAgICAgICBjb25maWcuZmxvYXRpbmc9dHJ1ZTtcbiAgICAgICAgY29uZmlnLmFuaW1hdGlvbj0nZmFkZSc7XG4gICAgICAgIHJldHVybiBjb25maWc7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocHVibGljIGluc3RhbmNlOiBBaU1vZGFsSW5zdGFuY2UscHVibGljIGNvbnRleHQ6IEFpQ29uZmlybUNvbnRleHQpIHtcbiAgICB9XG5cbiAgICBvaygpIHtcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5jbG9zZSh0cnVlKTtcbiAgICB9XG5cbiAgICBjYW5jZWwoKSB7XG4gICAgICAgIHRoaXMuaW5zdGFuY2UuY2xvc2UoKTtcbiAgICB9XG5cbiAgICBoYXNJY29uKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQuaWNvLmxlbmd0aCA+IDAgPyAnJzpudWxsO1xuICAgIH1cblxuICAgIGNsb3NpbmdEZWxheVRpbWUoKTpudW1iZXJ7XG4gICAgICAgIHJldHVybiA1MDA7XG4gICAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
