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
                        config.x = Ai_1.AiModalPosition.Center;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlEaWFsb2cvQWlBbGVydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUdBO2dCQUNJLHdCQUNXLEtBQWtCLEVBQ2xCLE9BQW9CLEVBQ3BCLEdBQWEsRUFDYixNQUFxQjtvQkFINUIscUJBQXlCLEdBQXpCLFVBQXlCO29CQUN6Qix1QkFBMkIsR0FBM0IsWUFBMkI7b0JBQzNCLG1CQUFvQixHQUFwQixRQUFvQjtvQkFDcEIsc0JBQTRCLEdBQTVCLGFBQTRCO29CQUhyQixVQUFLLEdBQUwsS0FBSyxDQUFhO29CQUNsQixZQUFPLEdBQVAsT0FBTyxDQUFhO29CQUNwQixRQUFHLEdBQUgsR0FBRyxDQUFVO29CQUNiLFdBQU0sR0FBTixNQUFNLENBQWU7Z0JBQzdCLENBQUM7Z0JBQ1IscUJBQUM7WUFBRCxDQVBBLEFBT0MsSUFBQTtZQVBELDJDQU9DLENBQUE7WUFvQkQ7Z0JBWUksaUJBQW1CLFFBQXlCLEVBQVEsT0FBdUI7b0JBQXhELGFBQVEsR0FBUixRQUFRLENBQWlCO29CQUFRLFlBQU8sR0FBUCxPQUFPLENBQWdCO2dCQUMzRSxDQUFDO2dCQVhELHNCQUFXLHdCQUFhO3lCQUF4Qjt3QkFDSSxJQUFJLE1BQU0sR0FBZ0IsSUFBSSxrQkFBYSxFQUFFLENBQUM7d0JBQzlDLE1BQU0sQ0FBQyxDQUFDLEdBQUMsb0JBQWUsQ0FBQyxNQUFNLENBQUM7d0JBQ2hDLE1BQU0sQ0FBQyxDQUFDLEdBQUMsSUFBSSxvQkFBZSxDQUFDLEdBQUcsRUFBQyxpQkFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUNyRCxNQUFNLENBQUMsSUFBSSxHQUFDLE9BQU8sQ0FBQzt3QkFDcEIsTUFBTSxDQUFDLFFBQVEsR0FBQyxJQUFJLENBQUM7d0JBQ3JCLE1BQU0sQ0FBQyxTQUFTLEdBQUMsTUFBTSxDQUFDO3dCQUN4QixNQUFNLENBQUMsTUFBTSxDQUFDO29CQUNsQixDQUFDOzs7bUJBQUE7Z0JBS0Qsb0JBQUUsR0FBRjtvQkFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUM1QixDQUFDO2dCQUVELHlCQUFPLEdBQVA7b0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFDLElBQUksQ0FBQztnQkFDakQsQ0FBQztnQkF0Q0w7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsVUFBVTt3QkFDcEIsVUFBVSxFQUFFLENBQUMsYUFBUSxDQUFDO3dCQUN0QixRQUFRLEVBQ1IsMlpBV0M7cUJBQ0osQ0FBQzs7MkJBQUE7Z0JBeUJGLGNBQUM7WUFBRCxDQXhCQSxBQXdCQyxJQUFBO1lBeEJELDZCQXdCQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvQWlEaWFsb2cvQWlBbGVydC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7QWlCdXR0b24sQWlDb25maXJtLEFpQ29uZmlybUNvbnRleHQsQWlNb2RhbEluc3RhbmNlLEFpTW9kYWxEaWFsb2csQWlNb2RhbENvbmZpZyxBaU1vZGFsQWxpZ24sQWlNb2RhbFBvc2l0aW9ufSBmcm9tICcuLi9BaSc7XG5cbmV4cG9ydCBjbGFzcyBBaUFsZXJ0Q29udGV4dCB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyB0aXRsZTogc3RyaW5nID0gJycsXG4gICAgICAgIHB1YmxpYyBtZXNzYWdlOiBzdHJpbmcgPSAnJyxcbiAgICAgICAgcHVibGljIGljbzpzdHJpbmc9JycsXG4gICAgICAgIHB1YmxpYyBva1RleHQ6IHN0cmluZyA9ICdPSydcbiAgICApIHt9XG59XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhaS1hbGVydCcsXG4gICAgZGlyZWN0aXZlczogW0FpQnV0dG9uXSxcbiAgICB0ZW1wbGF0ZTpcbiAgICBgPGRpdiBjbGFzcz0nYWktZGxnLWJvZHknIFthdHRyLmhhc0ljb25dPSdoYXNJY29uKCknPlxuICAgICAgICA8aDIgY2xhc3M9J3RpdGxlJz57e2NvbnRleHQudGl0bGV9fTwvaDI+XG4gICAgICAgIDxwIGNsYXNzPSdtZXNzYWdlJz57e2NvbnRleHQubWVzc2FnZX19PC9wPlxuICAgICAgICA8ZGl2IGNsYXNzPSdsZWZ0Jz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdpY28nIGFpLW1hdGVyaWFsPnt7Y29udGV4dC5pY299fTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPSdiYXInPlxuICAgICAgICA8YWktYnV0dG9uIGNsYXNzPSd5ZXMnIHJhaXNlZCByZWQgKF9jbGljayk9J29rKCknPnt7Y29udGV4dC5va1RleHR9fTwvYWktYnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgQWlBbGVydCBpbXBsZW1lbnRzIEFpTW9kYWxEaWFsb2cge1xuXG4gICAgc3RhdGljIGdldCBEZWZhdWx0Q29uZmlnKCk6QWlNb2RhbENvbmZpZ3tcbiAgICAgICAgbGV0IGNvbmZpZzpBaU1vZGFsQ29uZmlnID1uZXcgQWlNb2RhbENvbmZpZygpO1xuICAgICAgICBjb25maWcueD1BaU1vZGFsUG9zaXRpb24uQ2VudGVyO1xuICAgICAgICBjb25maWcueT1uZXcgQWlNb2RhbFBvc2l0aW9uKDEwMCxBaU1vZGFsQWxpZ24uQmVnaW4pO1xuICAgICAgICBjb25maWcubWFzaz0nYmxhY2snO1xuICAgICAgICBjb25maWcuZmxvYXRpbmc9dHJ1ZTtcbiAgICAgICAgY29uZmlnLmFuaW1hdGlvbj0nZmFkZSc7XG4gICAgICAgIHJldHVybiBjb25maWc7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocHVibGljIGluc3RhbmNlOiBBaU1vZGFsSW5zdGFuY2UscHVibGljIGNvbnRleHQ6IEFpQWxlcnRDb250ZXh0KSB7XG4gICAgfVxuXG4gICAgb2soKSB7XG4gICAgICAgIHRoaXMuaW5zdGFuY2UuZGlzbWlzcygpO1xuICAgIH1cblxuICAgIGhhc0ljb24oKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC5pY28ubGVuZ3RoID4gMCA/ICcnOm51bGw7XG4gICAgfVxuXG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
