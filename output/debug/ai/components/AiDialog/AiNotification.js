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
    var AiNotificationContext, AiNotification;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Ai_1_1) {
                Ai_1 = Ai_1_1;
            }],
        execute: function() {
            AiNotificationContext = (function () {
                function AiNotificationContext(message, ico, color, ok) {
                    if (message === void 0) { message = ''; }
                    if (ico === void 0) { ico = ''; }
                    if (color === void 0) { color = ''; }
                    if (ok === void 0) { ok = ''; }
                    this.message = message;
                    this.ico = ico;
                    this.color = color;
                    this.ok = ok;
                }
                return AiNotificationContext;
            }());
            exports_1("AiNotificationContext", AiNotificationContext);
            AiNotification = (function () {
                function AiNotification(instance, context) {
                    this.instance = instance;
                    this.context = context;
                }
                Object.defineProperty(AiNotification, "DefaultConfig", {
                    get: function () {
                        var config = new Ai_1.AiModalConfig();
                        config.x = Ai_1.AiModalPosition.Begin;
                        config.y = Ai_1.AiModalPosition.Begin;
                        config.animation = 'slidetop';
                        config.width = '100%';
                        config.floating = true;
                        config.TimeHide = 15000;
                        return config;
                    },
                    enumerable: true,
                    configurable: true
                });
                AiNotification.prototype.getClass = function () {
                    var c = 'body';
                    if (this.context.color.length > 0)
                        c += ' ' + this.context.color;
                    return c;
                };
                AiNotification.prototype.hasOK = function () {
                    return this.context.ok.length > 0;
                };
                AiNotification.prototype.ok = function () {
                    this.instance.close(true);
                };
                AiNotification.prototype.close = function () {
                    this.instance.dismiss();
                };
                AiNotification.prototype.hasIcon = function () {
                    return this.context.ico.length > 0 ? '' : null;
                };
                AiNotification = __decorate([
                    core_1.Component({
                        selector: 'ai-notification',
                        directives: [Ai_1.AiButton],
                        template: "<div [class]='getClass()' [attr.hasIcon]='hasIcon()'>\n    \t<div class=\"inner\">\n            <span class='ico' ai-material>{{context.ico}}</span>\n    \t\t<p class='msg'>\n    \t\t{{context.message}}\n    \t\t<ai-button *ngIf=\"hasOK()\" link class='ok' (_click)='ok()'>{{context.ok}}</ai-button>\n    \t\t</p>\n    \t</div>\n    \t<ai-button icon class='close' (_click)='close()'>clear</ai-button>\n    </div>"
                    }), 
                    __metadata('design:paramtypes', [Ai_1.AiModalInstance, AiNotificationContext])
                ], AiNotification);
                return AiNotification;
            }());
            exports_1("AiNotification", AiNotification);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlEaWFsb2cvQWlOb3RpZmljYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFHQTtnQkFDSSwrQkFDVyxPQUFtQixFQUNuQixHQUFhLEVBQ2IsS0FBZSxFQUNmLEVBQWU7b0JBSHRCLHVCQUEwQixHQUExQixZQUEwQjtvQkFDMUIsbUJBQW9CLEdBQXBCLFFBQW9CO29CQUNwQixxQkFBc0IsR0FBdEIsVUFBc0I7b0JBQ3RCLGtCQUFzQixHQUF0QixPQUFzQjtvQkFIZixZQUFPLEdBQVAsT0FBTyxDQUFZO29CQUNuQixRQUFHLEdBQUgsR0FBRyxDQUFVO29CQUNiLFVBQUssR0FBTCxLQUFLLENBQVU7b0JBQ2YsT0FBRSxHQUFGLEVBQUUsQ0FBYTtnQkFDdkIsQ0FBQztnQkFDUiw0QkFBQztZQUFELENBUEEsQUFPQyxJQUFBO1lBUEQseURBT0MsQ0FBQTtZQWlCRDtnQkFhSSx3QkFBbUIsUUFBeUIsRUFBUSxPQUE4QjtvQkFBL0QsYUFBUSxHQUFSLFFBQVEsQ0FBaUI7b0JBQVEsWUFBTyxHQUFQLE9BQU8sQ0FBdUI7Z0JBQ2xGLENBQUM7Z0JBWkQsc0JBQVcsK0JBQWE7eUJBQXhCO3dCQUNJLElBQUksTUFBTSxHQUFnQixJQUFJLGtCQUFhLEVBQUUsQ0FBQzt3QkFDOUMsTUFBTSxDQUFDLENBQUMsR0FBQyxvQkFBZSxDQUFDLEtBQUssQ0FBQzt3QkFDL0IsTUFBTSxDQUFDLENBQUMsR0FBQyxvQkFBZSxDQUFDLEtBQUssQ0FBQzt3QkFDL0IsTUFBTSxDQUFDLFNBQVMsR0FBQyxVQUFVLENBQUM7d0JBQzVCLE1BQU0sQ0FBQyxLQUFLLEdBQUMsTUFBTSxDQUFDO3dCQUNwQixNQUFNLENBQUMsUUFBUSxHQUFDLElBQUksQ0FBQzt3QkFDckIsTUFBTSxDQUFDLFFBQVEsR0FBQyxLQUFLLENBQUM7d0JBQ3RCLE1BQU0sQ0FBQyxNQUFNLENBQUM7b0JBQ2xCLENBQUM7OzttQkFBQTtnQkFLRCxpQ0FBUSxHQUFSO29CQUNJLElBQUksQ0FBQyxHQUFDLE1BQU0sQ0FBQztvQkFDYixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO3dCQUM3QixDQUFDLElBQUUsR0FBRyxHQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO29CQUM5QixNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUNiLENBQUM7Z0JBRUQsOEJBQUssR0FBTDtvQkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztnQkFDdEMsQ0FBQztnQkFFRCwyQkFBRSxHQUFGO29CQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUM5QixDQUFDO2dCQUVELDhCQUFLLEdBQUw7b0JBQ0ksSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDNUIsQ0FBQztnQkFFRCxnQ0FBTyxHQUFQO29CQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBQyxJQUFJLENBQUM7Z0JBQ2pELENBQUM7Z0JBcERMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGlCQUFpQjt3QkFDM0IsVUFBVSxFQUFFLENBQUMsYUFBUSxDQUFDO3dCQUN0QixRQUFRLEVBQ1IsK1pBU087cUJBQ1YsQ0FBQzs7a0NBQUE7Z0JBeUNGLHFCQUFDO1lBQUQsQ0F4Q0EsQUF3Q0MsSUFBQTtZQXhDRCwyQ0F3Q0MsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL0FpRGlhbG9nL0FpTm90aWZpY2F0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtBaUJ1dHRvbixBaUNvbmZpcm0sQWlDb25maXJtQ29udGV4dCxBaU1vZGFsSW5zdGFuY2UsQWlNb2RhbERpYWxvZyxBaU1vZGFsQ29uZmlnLEFpTW9kYWxBbGlnbixBaU1vZGFsUG9zaXRpb259IGZyb20gJy4uL0FpJztcblxuZXhwb3J0IGNsYXNzIEFpTm90aWZpY2F0aW9uQ29udGV4dCB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyBtZXNzYWdlOnN0cmluZyA9ICcnLFxuICAgICAgICBwdWJsaWMgaWNvOnN0cmluZz0nJyxcbiAgICAgICAgcHVibGljIGNvbG9yOnN0cmluZz0nJyxcbiAgICAgICAgcHVibGljIG9rOiBzdHJpbmcgPSAnJ1xuICAgICkge31cbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhaS1ub3RpZmljYXRpb24nLFxuICAgIGRpcmVjdGl2ZXM6IFtBaUJ1dHRvbl0sXG4gICAgdGVtcGxhdGU6XG4gICAgYDxkaXYgW2NsYXNzXT0nZ2V0Q2xhc3MoKScgW2F0dHIuaGFzSWNvbl09J2hhc0ljb24oKSc+XG4gICAgXHQ8ZGl2IGNsYXNzPVwiaW5uZXJcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdpY28nIGFpLW1hdGVyaWFsPnt7Y29udGV4dC5pY299fTwvc3Bhbj5cbiAgICBcdFx0PHAgY2xhc3M9J21zZyc+XG4gICAgXHRcdHt7Y29udGV4dC5tZXNzYWdlfX1cbiAgICBcdFx0PGFpLWJ1dHRvbiAqbmdJZj1cImhhc09LKClcIiBsaW5rIGNsYXNzPSdvaycgKF9jbGljayk9J29rKCknPnt7Y29udGV4dC5va319PC9haS1idXR0b24+XG4gICAgXHRcdDwvcD5cbiAgICBcdDwvZGl2PlxuICAgIFx0PGFpLWJ1dHRvbiBpY29uIGNsYXNzPSdjbG9zZScgKF9jbGljayk9J2Nsb3NlKCknPmNsZWFyPC9haS1idXR0b24+XG4gICAgPC9kaXY+YFxufSlcbmV4cG9ydCBjbGFzcyBBaU5vdGlmaWNhdGlvbiBpbXBsZW1lbnRzIEFpTW9kYWxEaWFsb2cge1xuXG4gICAgc3RhdGljIGdldCBEZWZhdWx0Q29uZmlnKCk6QWlNb2RhbENvbmZpZ3tcbiAgICAgICAgbGV0IGNvbmZpZzpBaU1vZGFsQ29uZmlnID1uZXcgQWlNb2RhbENvbmZpZygpO1xuICAgICAgICBjb25maWcueD1BaU1vZGFsUG9zaXRpb24uQmVnaW47XG4gICAgICAgIGNvbmZpZy55PUFpTW9kYWxQb3NpdGlvbi5CZWdpbjtcbiAgICAgICAgY29uZmlnLmFuaW1hdGlvbj0nc2xpZGV0b3AnO1xuICAgICAgICBjb25maWcud2lkdGg9JzEwMCUnO1xuICAgICAgICBjb25maWcuZmxvYXRpbmc9dHJ1ZTtcbiAgICAgICAgY29uZmlnLlRpbWVIaWRlPTE1MDAwO1xuICAgICAgICByZXR1cm4gY29uZmlnO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBpbnN0YW5jZTogQWlNb2RhbEluc3RhbmNlLHB1YmxpYyBjb250ZXh0OiBBaU5vdGlmaWNhdGlvbkNvbnRleHQpIHtcbiAgICB9XG5cbiAgICBnZXRDbGFzcygpe1xuICAgICAgICB2YXIgYz0nYm9keSc7XG4gICAgICAgIGlmKHRoaXMuY29udGV4dC5jb2xvci5sZW5ndGggPiAwKVxuICAgICAgICAgICAgYys9JyAnK3RoaXMuY29udGV4dC5jb2xvcjtcbiAgICAgICAgcmV0dXJuIGM7XG4gICAgfVxuXG4gICAgaGFzT0soKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC5vay5sZW5ndGggPiAwO1xuICAgIH1cblxuICAgIG9rKCl7XG4gICAgICAgIHRoaXMuaW5zdGFuY2UuY2xvc2UodHJ1ZSk7XG4gICAgfVxuXG4gICAgY2xvc2UoKSB7XG4gICAgICAgIHRoaXMuaW5zdGFuY2UuZGlzbWlzcygpO1xuICAgIH1cblxuICAgIGhhc0ljb24oKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC5pY28ubGVuZ3RoID4gMCA/ICcnOm51bGw7XG4gICAgfVxuXG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
