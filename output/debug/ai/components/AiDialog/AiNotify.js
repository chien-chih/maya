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
    var AiNotifyContext, AiNotify;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Ai_1_1) {
                Ai_1 = Ai_1_1;
            }],
        execute: function() {
            AiNotifyContext = (function () {
                function AiNotifyContext(message, ico, ok, style, color) {
                    this.message = message;
                    this.ico = ico;
                    this.ok = ok;
                    this.style = style;
                    this.color = color;
                }
                return AiNotifyContext;
            }());
            exports_1("AiNotifyContext", AiNotifyContext);
            AiNotify = (function () {
                function AiNotify(instance, context) {
                    this.instance = instance;
                    this.context = context;
                }
                AiNotify.GetConfig = function (context) {
                    var config = new Ai_1.AiModalConfig();
                    config.floating = true;
                    config.TimeHide = 15000 * 10;
                    if (context.style === 'slidedown') {
                        config.x = Ai_1.AiModalPosition.Begin();
                        config.y = Ai_1.AiModalPosition.Begin();
                        config.animation = 'slidedown';
                        config.width = '100%';
                    }
                    else if (context.style === 'corner') {
                        config.x = Ai_1.AiModalPosition.End(-20);
                        config.y = Ai_1.AiModalPosition.Begin(20);
                    }
                    return config;
                };
                AiNotify.prototype.getClass = function () {
                    var c = this.context.style;
                    if (this.context.color.length > 0)
                        c += ' ' + this.context.color;
                    if (this.context.ico.length > 0)
                        c += ' hasico';
                    return c;
                };
                AiNotify.prototype.hasOK = function () {
                    return this.context.ok.length > 0;
                };
                AiNotify.prototype.ok = function () {
                    this.instance.close(true);
                };
                AiNotify.prototype.close = function () {
                    this.instance.dismiss();
                };
                AiNotify = __decorate([
                    core_1.Component({
                        selector: 'ai-notify',
                        directives: [Ai_1.AiButton],
                        host: {
                            '[class]': 'getClass()'
                        },
                        template: "\n    \t<div class=\"inner\">\n            <span class='ico' ai-material>{{context.ico}}</span>\n    \t\t<p class='msg'>\n    \t\t{{context.message}}\n    \t\t<ai-button *ngIf=\"hasOK()\" link class='ok' (_click)='ok()'>{{context.ok}}</ai-button>\n    \t\t</p>\n    \t</div>\n    \t<ai-button icon class='close' (_click)='close()'>clear</ai-button>\n    "
                    }), 
                    __metadata('design:paramtypes', [Ai_1.AiModalInstance, AiNotifyContext])
                ], AiNotify);
                return AiNotify;
            }());
            exports_1("AiNotify", AiNotify);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlEaWFsb2cvQWlOb3RpZnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFHQTtnQkFDSSx5QkFDVyxPQUFjLEVBQ2QsR0FBVSxFQUNWLEVBQVUsRUFDVixLQUFZLEVBQ1osS0FBWTtvQkFKWixZQUFPLEdBQVAsT0FBTyxDQUFPO29CQUNkLFFBQUcsR0FBSCxHQUFHLENBQU87b0JBQ1YsT0FBRSxHQUFGLEVBQUUsQ0FBUTtvQkFDVixVQUFLLEdBQUwsS0FBSyxDQUFPO29CQUNaLFVBQUssR0FBTCxLQUFLLENBQU87Z0JBQ3BCLENBQUM7Z0JBQ1Isc0JBQUM7WUFBRCxDQVJBLEFBUUMsSUFBQTtZQVJELDZDQVFDLENBQUE7WUFvQkQ7Z0JBb0JJLGtCQUFtQixRQUF5QixFQUFRLE9BQXdCO29CQUF6RCxhQUFRLEdBQVIsUUFBUSxDQUFpQjtvQkFBUSxZQUFPLEdBQVAsT0FBTyxDQUFpQjtnQkFDNUUsQ0FBQztnQkFuQk0sa0JBQVMsR0FBaEIsVUFBaUIsT0FBd0I7b0JBQ3JDLElBQUksTUFBTSxHQUFnQixJQUFJLGtCQUFhLEVBQUUsQ0FBQztvQkFFOUMsTUFBTSxDQUFDLFFBQVEsR0FBQyxJQUFJLENBQUM7b0JBQ3JCLE1BQU0sQ0FBQyxRQUFRLEdBQUMsS0FBSyxHQUFDLEVBQUUsQ0FBQztvQkFDekIsRUFBRSxDQUFBLENBQUMsT0FBTyxDQUFDLEtBQUssS0FBRyxXQUFXLENBQUMsQ0FBQSxDQUFDO3dCQUM1QixNQUFNLENBQUMsQ0FBQyxHQUFDLG9CQUFlLENBQUMsS0FBSyxFQUFFLENBQUM7d0JBQ2pDLE1BQU0sQ0FBQyxDQUFDLEdBQUMsb0JBQWUsQ0FBQyxLQUFLLEVBQUUsQ0FBQzt3QkFDakMsTUFBTSxDQUFDLFNBQVMsR0FBQyxXQUFXLENBQUM7d0JBQzdCLE1BQU0sQ0FBQyxLQUFLLEdBQUMsTUFBTSxDQUFDO29CQUN4QixDQUFDO29CQUFBLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxLQUFHLFFBQVEsQ0FBQyxDQUFBLENBQUM7d0JBQ2hDLE1BQU0sQ0FBQyxDQUFDLEdBQUMsb0JBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQzt3QkFDbEMsTUFBTSxDQUFDLENBQUMsR0FBQyxvQkFBZSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFDdkMsQ0FBQztvQkFFRCxNQUFNLENBQUMsTUFBTSxDQUFDO2dCQUNsQixDQUFDO2dCQUtELDJCQUFRLEdBQVI7b0JBQ0ksSUFBSSxDQUFDLEdBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7b0JBQ3pCLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7d0JBQzdCLENBQUMsSUFBRSxHQUFHLEdBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7b0JBQzlCLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7d0JBQzNCLENBQUMsSUFBRSxTQUFTLENBQUM7b0JBQ2pCLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ2IsQ0FBQztnQkFFRCx3QkFBSyxHQUFMO29CQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO2dCQUN0QyxDQUFDO2dCQUVELHFCQUFFLEdBQUY7b0JBQ0ksSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzlCLENBQUM7Z0JBRUQsd0JBQUssR0FBTDtvQkFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUM1QixDQUFDO2dCQTVETDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxXQUFXO3dCQUNyQixVQUFVLEVBQUUsQ0FBQyxhQUFRLENBQUM7d0JBQ3RCLElBQUksRUFBQzs0QkFDRCxTQUFTLEVBQUUsWUFBWTt5QkFDdEI7d0JBQ0wsUUFBUSxFQUNSLG9XQVNDO3FCQUNKLENBQUM7OzRCQUFBO2dCQStDRixlQUFDO1lBQUQsQ0E5Q0EsQUE4Q0MsSUFBQTtZQTlDRCwrQkE4Q0MsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL0FpRGlhbG9nL0FpTm90aWZ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtBaUJ1dHRvbixBaUNvbmZpcm0sQWlDb25maXJtQ29udGV4dCxBaU1vZGFsSW5zdGFuY2UsQWlNb2RhbERpYWxvZyxBaU1vZGFsQ29uZmlnLEFpTW9kYWxBbGlnbixBaU1vZGFsUG9zaXRpb259IGZyb20gJy4uL0FpJztcblxuZXhwb3J0IGNsYXNzIEFpTm90aWZ5Q29udGV4dCB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyBtZXNzYWdlOnN0cmluZyxcbiAgICAgICAgcHVibGljIGljbzpzdHJpbmcsXG4gICAgICAgIHB1YmxpYyBvazogc3RyaW5nLFxuICAgICAgICBwdWJsaWMgc3R5bGU6c3RyaW5nLFxuICAgICAgICBwdWJsaWMgY29sb3I6c3RyaW5nXG4gICAgKSB7fVxufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FpLW5vdGlmeScsXG4gICAgZGlyZWN0aXZlczogW0FpQnV0dG9uXSxcbiAgICBob3N0OntcbiAgICAgICAgJ1tjbGFzc10nOiAnZ2V0Q2xhc3MoKSdcbiAgICAgICAgfSxcbiAgICB0ZW1wbGF0ZTpcbiAgICBgXG4gICAgXHQ8ZGl2IGNsYXNzPVwiaW5uZXJcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdpY28nIGFpLW1hdGVyaWFsPnt7Y29udGV4dC5pY299fTwvc3Bhbj5cbiAgICBcdFx0PHAgY2xhc3M9J21zZyc+XG4gICAgXHRcdHt7Y29udGV4dC5tZXNzYWdlfX1cbiAgICBcdFx0PGFpLWJ1dHRvbiAqbmdJZj1cImhhc09LKClcIiBsaW5rIGNsYXNzPSdvaycgKF9jbGljayk9J29rKCknPnt7Y29udGV4dC5va319PC9haS1idXR0b24+XG4gICAgXHRcdDwvcD5cbiAgICBcdDwvZGl2PlxuICAgIFx0PGFpLWJ1dHRvbiBpY29uIGNsYXNzPSdjbG9zZScgKF9jbGljayk9J2Nsb3NlKCknPmNsZWFyPC9haS1idXR0b24+XG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyBBaU5vdGlmeSBpbXBsZW1lbnRzIEFpTW9kYWxEaWFsb2cge1xuXG4gICAgc3RhdGljIEdldENvbmZpZyhjb250ZXh0OiBBaU5vdGlmeUNvbnRleHQpOkFpTW9kYWxDb25maWd7XG4gICAgICAgIGxldCBjb25maWc6QWlNb2RhbENvbmZpZyA9bmV3IEFpTW9kYWxDb25maWcoKTtcbiAgICAgICAgXG4gICAgICAgIGNvbmZpZy5mbG9hdGluZz10cnVlO1xuICAgICAgICBjb25maWcuVGltZUhpZGU9MTUwMDAqMTA7XG4gICAgICAgIGlmKGNvbnRleHQuc3R5bGU9PT0nc2xpZGVkb3duJyl7XG4gICAgICAgICAgICBjb25maWcueD1BaU1vZGFsUG9zaXRpb24uQmVnaW4oKTtcbiAgICAgICAgICAgIGNvbmZpZy55PUFpTW9kYWxQb3NpdGlvbi5CZWdpbigpO1xuICAgICAgICAgICAgY29uZmlnLmFuaW1hdGlvbj0nc2xpZGVkb3duJztcbiAgICAgICAgICAgIGNvbmZpZy53aWR0aD0nMTAwJSc7XG4gICAgICAgIH1lbHNlIGlmIChjb250ZXh0LnN0eWxlPT09J2Nvcm5lcicpe1xuICAgICAgICAgICAgY29uZmlnLng9QWlNb2RhbFBvc2l0aW9uLkVuZCgtMjApO1xuICAgICAgICAgICAgY29uZmlnLnk9QWlNb2RhbFBvc2l0aW9uLkJlZ2luKDIwKTtcbiAgICAgICAgfSBcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBjb25maWc7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocHVibGljIGluc3RhbmNlOiBBaU1vZGFsSW5zdGFuY2UscHVibGljIGNvbnRleHQ6IEFpTm90aWZ5Q29udGV4dCkge1xuICAgIH1cblxuICAgIGdldENsYXNzKCl7XG4gICAgICAgIHZhciBjPXRoaXMuY29udGV4dC5zdHlsZTtcbiAgICAgICAgaWYodGhpcy5jb250ZXh0LmNvbG9yLmxlbmd0aCA+IDApXG4gICAgICAgICAgICBjKz0nICcrdGhpcy5jb250ZXh0LmNvbG9yO1xuICAgICAgICBpZih0aGlzLmNvbnRleHQuaWNvLmxlbmd0aCA+IDApXG4gICAgICAgICAgICBjKz0nIGhhc2ljbyc7XG4gICAgICAgIHJldHVybiBjO1xuICAgIH1cblxuICAgIGhhc09LKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQub2subGVuZ3RoID4gMDtcbiAgICB9XG5cbiAgICBvaygpe1xuICAgICAgICB0aGlzLmluc3RhbmNlLmNsb3NlKHRydWUpO1xuICAgIH1cblxuICAgIGNsb3NlKCkge1xuICAgICAgICB0aGlzLmluc3RhbmNlLmRpc21pc3MoKTtcbiAgICB9XG5cblxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
