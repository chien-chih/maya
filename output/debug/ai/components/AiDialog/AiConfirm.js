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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlEaWFsb2cvQWlDb25maXJtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBR0E7Z0JBQ0ksMEJBQ1csS0FBa0IsRUFDbEIsT0FBb0IsRUFDcEIsR0FBYSxFQUNiLE9BQXVCLEVBQ3ZCLE1BQXFCO29CQUo1QixxQkFBeUIsR0FBekIsVUFBeUI7b0JBQ3pCLHVCQUEyQixHQUEzQixZQUEyQjtvQkFDM0IsbUJBQW9CLEdBQXBCLFFBQW9CO29CQUNwQix1QkFBOEIsR0FBOUIsZUFBOEI7b0JBQzlCLHNCQUE0QixHQUE1QixhQUE0QjtvQkFKckIsVUFBSyxHQUFMLEtBQUssQ0FBYTtvQkFDbEIsWUFBTyxHQUFQLE9BQU8sQ0FBYTtvQkFDcEIsUUFBRyxHQUFILEdBQUcsQ0FBVTtvQkFDYixZQUFPLEdBQVAsT0FBTyxDQUFnQjtvQkFDdkIsV0FBTSxHQUFOLE1BQU0sQ0FBZTtnQkFDN0IsQ0FBQztnQkFDUix1QkFBQztZQUFELENBUkEsQUFRQyxJQUFBO1lBUkQsK0NBUUMsQ0FBQTtZQW9CRDtnQkFZSSxtQkFBbUIsUUFBeUIsRUFBUSxPQUF5QjtvQkFBMUQsYUFBUSxHQUFSLFFBQVEsQ0FBaUI7b0JBQVEsWUFBTyxHQUFQLE9BQU8sQ0FBa0I7Z0JBQzdFLENBQUM7Z0JBWEQsc0JBQVcsMEJBQWE7eUJBQXhCO3dCQUNJLElBQUksTUFBTSxHQUFnQixJQUFJLGtCQUFhLEVBQUUsQ0FBQzt3QkFDOUMsTUFBTSxDQUFDLENBQUMsR0FBQyxvQkFBZSxDQUFDLE1BQU0sQ0FBQzt3QkFDaEMsTUFBTSxDQUFDLENBQUMsR0FBQyxJQUFJLG9CQUFlLENBQUMsR0FBRyxFQUFDLGlCQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQ3JELE1BQU0sQ0FBQyxJQUFJLEdBQUMsT0FBTyxDQUFDO3dCQUNwQixNQUFNLENBQUMsUUFBUSxHQUFDLElBQUksQ0FBQzt3QkFDckIsTUFBTSxDQUFDLFNBQVMsR0FBQyxNQUFNLENBQUM7d0JBQ3hCLE1BQU0sQ0FBQyxNQUFNLENBQUM7b0JBQ2xCLENBQUM7OzttQkFBQTtnQkFLRCxzQkFBRSxHQUFGO29CQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUM5QixDQUFDO2dCQUVELDBCQUFNLEdBQU47b0JBQ0ksSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDNUIsQ0FBQztnQkFFRCwyQkFBTyxHQUFQO29CQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBQyxJQUFJLENBQUM7Z0JBQ2pELENBQUM7Z0JBM0NMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFlBQVk7d0JBQ3RCLFVBQVUsRUFBRSxDQUFDLGFBQVEsQ0FBQzt3QkFDdEIsUUFBUSxFQUNSLDBoQkFZQztxQkFDSixDQUFDOzs2QkFBQTtnQkE0QkYsZ0JBQUM7WUFBRCxDQTNCQSxBQTJCQyxJQUFBO1lBM0JELGlDQTJCQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvQWlEaWFsb2cvQWlDb25maXJtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtBaUJ1dHRvbixBaU1vZGFsSW5zdGFuY2UsQWlNb2RhbERpYWxvZyxBaU1vZGFsQ29uZmlnLEFpTW9kYWxBbGlnbixBaU1vZGFsUG9zaXRpb259IGZyb20gJy4uL0FpJztcblxuZXhwb3J0IGNsYXNzIEFpQ29uZmlybUNvbnRleHQge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgdGl0bGU6IHN0cmluZyA9ICcnLFxuICAgICAgICBwdWJsaWMgbWVzc2FnZTogc3RyaW5nID0gJycsXG4gICAgICAgIHB1YmxpYyBpY286c3RyaW5nPScnLFxuICAgICAgICBwdWJsaWMgeWVzVGV4dDogc3RyaW5nID0gJ1lFUycsXG4gICAgICAgIHB1YmxpYyBub1RleHQ6IHN0cmluZyA9ICdOTydcbiAgICApIHt9XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYWktY29uZmlybScsXG4gICAgZGlyZWN0aXZlczogW0FpQnV0dG9uXSxcbiAgICB0ZW1wbGF0ZTpcbiAgICBgPGRpdiBjbGFzcz0nYWktZGxnLWJvZHknIFthdHRyLmhhc0ljb25dPSdoYXNJY29uKCknPlxuICAgICAgICA8aDIgY2xhc3M9J3RpdGxlJz57e2NvbnRleHQudGl0bGV9fTwvaDI+XG4gICAgICAgIDxwIGNsYXNzPSdtc2cnPnt7Y29udGV4dC5tZXNzYWdlfX08L3A+XG4gICAgICAgIDxkaXYgY2xhc3M9J2xlZnQnPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ljbycgYWktbWF0ZXJpYWw+e3tjb250ZXh0Lmljb319PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPSdiYXInPlxuICAgICAgICA8ZGl2IGNsYXNzPSdsaW5lJz48L2Rpdj5cbiAgICAgICAgPGFpLWJ1dHRvbiBjbGFzcz0nbm8nIHByaW1hcnkgKF9jbGljayk9J2NhbmNlbCgpJz57e2NvbnRleHQubm9UZXh0fX08L2FpLWJ1dHRvbj5cbiAgICAgICAgPGFpLWJ1dHRvbiBjbGFzcz0neWVzJyBwcmltYXJ5IGxlZnRib3JkZXIgKF9jbGljayk9J29rKCknPnt7Y29udGV4dC55ZXNUZXh0fX08L2FpLWJ1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzIEFpQ29uZmlybSBpbXBsZW1lbnRzIEFpTW9kYWxEaWFsb2cge1xuXG4gICAgc3RhdGljIGdldCBEZWZhdWx0Q29uZmlnKCk6QWlNb2RhbENvbmZpZ3tcbiAgICAgICAgbGV0IGNvbmZpZzpBaU1vZGFsQ29uZmlnID1uZXcgQWlNb2RhbENvbmZpZygpO1xuICAgICAgICBjb25maWcueD1BaU1vZGFsUG9zaXRpb24uQ2VudGVyO1xuICAgICAgICBjb25maWcueT1uZXcgQWlNb2RhbFBvc2l0aW9uKDEwMCxBaU1vZGFsQWxpZ24uQmVnaW4pO1xuICAgICAgICBjb25maWcubWFzaz0nd2hpdGUnO1xuICAgICAgICBjb25maWcuZmxvYXRpbmc9dHJ1ZTtcbiAgICAgICAgY29uZmlnLmFuaW1hdGlvbj0nZmFkZSc7XG4gICAgICAgIHJldHVybiBjb25maWc7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocHVibGljIGluc3RhbmNlOiBBaU1vZGFsSW5zdGFuY2UscHVibGljIGNvbnRleHQ6IEFpQ29uZmlybUNvbnRleHQpIHtcbiAgICB9XG5cbiAgICBvaygpIHtcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5jbG9zZSh0cnVlKTtcbiAgICB9XG5cbiAgICBjYW5jZWwoKSB7XG4gICAgICAgIHRoaXMuaW5zdGFuY2UuZGlzbWlzcygpO1xuICAgIH1cblxuICAgIGhhc0ljb24oKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC5pY28ubGVuZ3RoID4gMCA/ICcnOm51bGw7XG4gICAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
