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
                        config.x = Ai_1.AiModalPosition.Center;
                        config.y = new Ai_1.AiModalPosition(100, Ai_1.AiModalAlign.Begin);
                        config.mask = 'white';
                        config.floating = true;
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
                        template: "<div class='ai-dlg-body' [attr.hasIcon]='hasIcon()'>\n        <div class='title'>{{context.title}}</div>\n        <div class='message'>{{context.message}}</div>\n        <span class='ico' ai-material>{{context.ico}}</span>\n    </div>\n    <div class='bar'>\n        <div class='line'></div>\n        <ai-button class='no' primary (_click)='cancel()'>{{context.noText}}</ai-button>\n        <ai-button class='yes' primary leftborder (_click)='ok()'>{{context.yesText}}</ai-button>    \n    </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [Ai_1.AiModalInstance, AiConfirmContext])
                ], AiConfirm);
                return AiConfirm;
            }());
            exports_1("AiConfirm", AiConfirm);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlEaWFsb2cvQWlDb25maXJtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBR0E7Z0JBQ0ksMEJBQ1csS0FBa0IsRUFDbEIsT0FBb0IsRUFDcEIsR0FBYSxFQUNiLE9BQXVCLEVBQ3ZCLE1BQXFCO29CQUo1QixxQkFBeUIsR0FBekIsVUFBeUI7b0JBQ3pCLHVCQUEyQixHQUEzQixZQUEyQjtvQkFDM0IsbUJBQW9CLEdBQXBCLFFBQW9CO29CQUNwQix1QkFBOEIsR0FBOUIsZUFBOEI7b0JBQzlCLHNCQUE0QixHQUE1QixhQUE0QjtvQkFKckIsVUFBSyxHQUFMLEtBQUssQ0FBYTtvQkFDbEIsWUFBTyxHQUFQLE9BQU8sQ0FBYTtvQkFDcEIsUUFBRyxHQUFILEdBQUcsQ0FBVTtvQkFDYixZQUFPLEdBQVAsT0FBTyxDQUFnQjtvQkFDdkIsV0FBTSxHQUFOLE1BQU0sQ0FBZTtnQkFDN0IsQ0FBQztnQkFDUix1QkFBQztZQUFELENBUkEsQUFRQyxJQUFBO1lBUkQsK0NBUUMsQ0FBQTtZQWtCRDtnQkFXSSxtQkFBbUIsUUFBeUIsRUFBUSxPQUF5QjtvQkFBMUQsYUFBUSxHQUFSLFFBQVEsQ0FBaUI7b0JBQVEsWUFBTyxHQUFQLE9BQU8sQ0FBa0I7Z0JBQzdFLENBQUM7Z0JBVkQsc0JBQVcsMEJBQWE7eUJBQXhCO3dCQUNJLElBQUksTUFBTSxHQUFnQixJQUFJLGtCQUFhLEVBQUUsQ0FBQzt3QkFDOUMsTUFBTSxDQUFDLENBQUMsR0FBQyxvQkFBZSxDQUFDLE1BQU0sQ0FBQzt3QkFDaEMsTUFBTSxDQUFDLENBQUMsR0FBQyxJQUFJLG9CQUFlLENBQUMsR0FBRyxFQUFDLGlCQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQ3JELE1BQU0sQ0FBQyxJQUFJLEdBQUMsT0FBTyxDQUFDO3dCQUNwQixNQUFNLENBQUMsUUFBUSxHQUFDLElBQUksQ0FBQzt3QkFDckIsTUFBTSxDQUFDLE1BQU0sQ0FBQztvQkFDbEIsQ0FBQzs7O21CQUFBO2dCQUtELHNCQUFFLEdBQUY7b0JBQ0ksSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzlCLENBQUM7Z0JBRUQsMEJBQU0sR0FBTjtvQkFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUM1QixDQUFDO2dCQUVELDJCQUFPLEdBQVA7b0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFDLElBQUksQ0FBQztnQkFDakQsQ0FBQztnQkF4Q0w7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsWUFBWTt3QkFDdEIsVUFBVSxFQUFFLENBQUMsYUFBUSxDQUFDO3dCQUN0QixRQUFRLEVBQ1Isd2ZBVUM7cUJBQ0osQ0FBQzs7NkJBQUE7Z0JBMkJGLGdCQUFDO1lBQUQsQ0ExQkEsQUEwQkMsSUFBQTtZQTFCRCxpQ0EwQkMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL0FpRGlhbG9nL0FpQ29uZmlybS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7QWlCdXR0b24sQWlNb2RhbEluc3RhbmNlLEFpTW9kYWxEaWFsb2csQWlNb2RhbENvbmZpZyxBaU1vZGFsQWxpZ24sQWlNb2RhbFBvc2l0aW9ufSBmcm9tICcuLi9BaSc7XG5cbmV4cG9ydCBjbGFzcyBBaUNvbmZpcm1Db250ZXh0IHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIHRpdGxlOiBzdHJpbmcgPSAnJyxcbiAgICAgICAgcHVibGljIG1lc3NhZ2U6IHN0cmluZyA9ICcnLFxuICAgICAgICBwdWJsaWMgaWNvOnN0cmluZz0nJyxcbiAgICAgICAgcHVibGljIHllc1RleHQ6IHN0cmluZyA9ICdZRVMnLFxuICAgICAgICBwdWJsaWMgbm9UZXh0OiBzdHJpbmcgPSAnTk8nXG4gICAgKSB7fVxufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FpLWNvbmZpcm0nLFxuICAgIGRpcmVjdGl2ZXM6IFtBaUJ1dHRvbl0sXG4gICAgdGVtcGxhdGU6XG4gICAgYDxkaXYgY2xhc3M9J2FpLWRsZy1ib2R5JyBbYXR0ci5oYXNJY29uXT0naGFzSWNvbigpJz5cbiAgICAgICAgPGRpdiBjbGFzcz0ndGl0bGUnPnt7Y29udGV4dC50aXRsZX19PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9J21lc3NhZ2UnPnt7Y29udGV4dC5tZXNzYWdlfX08L2Rpdj5cbiAgICAgICAgPHNwYW4gY2xhc3M9J2ljbycgYWktbWF0ZXJpYWw+e3tjb250ZXh0Lmljb319PC9zcGFuPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9J2Jhcic+XG4gICAgICAgIDxkaXYgY2xhc3M9J2xpbmUnPjwvZGl2PlxuICAgICAgICA8YWktYnV0dG9uIGNsYXNzPSdubycgcHJpbWFyeSAoX2NsaWNrKT0nY2FuY2VsKCknPnt7Y29udGV4dC5ub1RleHR9fTwvYWktYnV0dG9uPlxuICAgICAgICA8YWktYnV0dG9uIGNsYXNzPSd5ZXMnIHByaW1hcnkgbGVmdGJvcmRlciAoX2NsaWNrKT0nb2soKSc+e3tjb250ZXh0Lnllc1RleHR9fTwvYWktYnV0dG9uPiAgICBcbiAgICA8L2Rpdj5cbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzIEFpQ29uZmlybSBpbXBsZW1lbnRzIEFpTW9kYWxEaWFsb2cge1xuXG4gICAgc3RhdGljIGdldCBEZWZhdWx0Q29uZmlnKCk6QWlNb2RhbENvbmZpZ3sgXG4gICAgICAgIGxldCBjb25maWc6QWlNb2RhbENvbmZpZyA9bmV3IEFpTW9kYWxDb25maWcoKTsgICAgXG4gICAgICAgIGNvbmZpZy54PUFpTW9kYWxQb3NpdGlvbi5DZW50ZXI7XG4gICAgICAgIGNvbmZpZy55PW5ldyBBaU1vZGFsUG9zaXRpb24oMTAwLEFpTW9kYWxBbGlnbi5CZWdpbik7XG4gICAgICAgIGNvbmZpZy5tYXNrPSd3aGl0ZSc7XG4gICAgICAgIGNvbmZpZy5mbG9hdGluZz10cnVlO1xuICAgICAgICByZXR1cm4gY29uZmlnOyBcbiAgICB9ICAgIFxuXG4gICAgY29uc3RydWN0b3IocHVibGljIGluc3RhbmNlOiBBaU1vZGFsSW5zdGFuY2UscHVibGljIGNvbnRleHQ6IEFpQ29uZmlybUNvbnRleHQpIHtcbiAgICB9XG5cbiAgICBvaygpIHtcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5jbG9zZSh0cnVlKTtcbiAgICB9XG5cbiAgICBjYW5jZWwoKSB7XG4gICAgICAgIHRoaXMuaW5zdGFuY2UuZGlzbWlzcygpO1xuICAgIH1cbiAgICBcbiAgICBoYXNJY29uKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQuaWNvLmxlbmd0aCA+IDAgPyAnJzpudWxsO1xuICAgIH1cbiAgICBcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
