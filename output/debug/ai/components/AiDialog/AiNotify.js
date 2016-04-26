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
                        config.animation = 'jelly';
                    }
                    else if (context.style === 'thumb') {
                        config.x = Ai_1.AiModalPosition.Begin(20);
                        config.y = Ai_1.AiModalPosition.Begin(20);
                        config.animation = 'thumb';
                    }
                    return config;
                };
                AiNotify.prototype.getClass = function () {
                    var c = this.context.style;
                    if (this.context.color.length > 0)
                        c += ' ' + this.context.color;
                    if (this.context.ico.length > 0)
                        c += ' hasico';
                    if (this.context.style === 'slidedown')
                        c += ' ai-top-in';
                    else if (this.context.style === 'corner')
                        c += ' ai-jelly-in';
                    else if (this.context.style === 'thumb')
                        c += ' ai-jelly-in';
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
                        template: "\n    \t<p class='msg'>\n    \t    {{context.message}}\n    \t    <ai-button *ngIf=\"hasOK()\" link class='ok' (_click)='ok()'>{{context.ok}}</ai-button>\n    \t</p>\n        <span class='ico' ai-material>{{context.ico}}</span>\n    \t<ai-button icon class='close' (_click)='close()'>clear</ai-button>\n    "
                    }), 
                    __metadata('design:paramtypes', [Ai_1.AiModalInstance, AiNotifyContext])
                ], AiNotify);
                return AiNotify;
            }());
            exports_1("AiNotify", AiNotify);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlEaWFsb2cvQWlOb3RpZnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFHQTtnQkFDSSx5QkFDVyxPQUFjLEVBQ2QsR0FBVSxFQUNWLEVBQVUsRUFDVixLQUFZLEVBQ1osS0FBWTtvQkFKWixZQUFPLEdBQVAsT0FBTyxDQUFPO29CQUNkLFFBQUcsR0FBSCxHQUFHLENBQU87b0JBQ1YsT0FBRSxHQUFGLEVBQUUsQ0FBUTtvQkFDVixVQUFLLEdBQUwsS0FBSyxDQUFPO29CQUNaLFVBQUssR0FBTCxLQUFLLENBQU87Z0JBQ3BCLENBQUM7Z0JBQ1Isc0JBQUM7WUFBRCxDQVJBLEFBUUMsSUFBQTtZQVJELDZDQVFDLENBQUE7WUFrQkQ7Z0JBMkJJLGtCQUFtQixRQUF5QixFQUFRLE9BQXdCO29CQUF6RCxhQUFRLEdBQVIsUUFBUSxDQUFpQjtvQkFBUSxZQUFPLEdBQVAsT0FBTyxDQUFpQjtnQkFDNUUsQ0FBQztnQkExQk0sa0JBQVMsR0FBaEIsVUFBaUIsT0FBd0I7b0JBQ3JDLElBQUksTUFBTSxHQUFnQixJQUFJLGtCQUFhLEVBQUUsQ0FBQztvQkFFOUMsTUFBTSxDQUFDLFFBQVEsR0FBQyxJQUFJLENBQUM7b0JBQ3JCLE1BQU0sQ0FBQyxRQUFRLEdBQUMsS0FBSyxHQUFDLEVBQUUsQ0FBQztvQkFDekIsRUFBRSxDQUFBLENBQUMsT0FBTyxDQUFDLEtBQUssS0FBRyxXQUFXLENBQUMsQ0FBQSxDQUFDO3dCQUM1QixNQUFNLENBQUMsQ0FBQyxHQUFDLG9CQUFlLENBQUMsS0FBSyxFQUFFLENBQUM7d0JBQ2pDLE1BQU0sQ0FBQyxDQUFDLEdBQUMsb0JBQWUsQ0FBQyxLQUFLLEVBQUUsQ0FBQzt3QkFDakMsTUFBTSxDQUFDLFNBQVMsR0FBQyxXQUFXLENBQUM7d0JBQzdCLE1BQU0sQ0FBQyxLQUFLLEdBQUMsTUFBTSxDQUFDO29CQUN4QixDQUFDO29CQUNELElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxLQUFHLFFBQVEsQ0FBQyxDQUFBLENBQUM7d0JBQy9CLE1BQU0sQ0FBQyxDQUFDLEdBQUMsb0JBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQzt3QkFDbEMsTUFBTSxDQUFDLENBQUMsR0FBQyxvQkFBZSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQzt3QkFDbkMsTUFBTSxDQUFDLFNBQVMsR0FBQyxPQUFPLENBQUM7b0JBQzdCLENBQUM7b0JBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEtBQUcsT0FBTyxDQUFDLENBQUEsQ0FBQzt3QkFDOUIsTUFBTSxDQUFDLENBQUMsR0FBQyxvQkFBZSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQzt3QkFDbkMsTUFBTSxDQUFDLENBQUMsR0FBQyxvQkFBZSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQzt3QkFDbkMsTUFBTSxDQUFDLFNBQVMsR0FBQyxPQUFPLENBQUM7b0JBQzdCLENBQUM7b0JBRUQsTUFBTSxDQUFDLE1BQU0sQ0FBQztnQkFDbEIsQ0FBQztnQkFLRCwyQkFBUSxHQUFSO29CQUNJLElBQUksQ0FBQyxHQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO29CQUN6QixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO3dCQUM3QixDQUFDLElBQUUsR0FBRyxHQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO29CQUM5QixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO3dCQUMzQixDQUFDLElBQUUsU0FBUyxDQUFDO29CQUVqQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssS0FBRyxXQUFXLENBQUM7d0JBQ2pDLENBQUMsSUFBRSxZQUFZLENBQUM7b0JBQ3BCLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssS0FBRyxRQUFRLENBQUM7d0JBQ25DLENBQUMsSUFBRSxjQUFjLENBQUM7b0JBQ3RCLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssS0FBRyxPQUFPLENBQUM7d0JBQ2xDLENBQUMsSUFBRSxjQUFjLENBQUM7b0JBRXRCLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ2IsQ0FBQztnQkFFRCx3QkFBSyxHQUFMO29CQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO2dCQUN0QyxDQUFDO2dCQUVELHFCQUFFLEdBQUY7b0JBQ0ksSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzlCLENBQUM7Z0JBRUQsd0JBQUssR0FBTDtvQkFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUM1QixDQUFDO2dCQXpFTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxXQUFXO3dCQUNyQixVQUFVLEVBQUUsQ0FBQyxhQUFRLENBQUM7d0JBQ3RCLElBQUksRUFBQzs0QkFDRCxTQUFTLEVBQUUsWUFBWTt5QkFDdEI7d0JBQ0wsUUFBUSxFQUNSLHFUQU9DO3FCQUNKLENBQUM7OzRCQUFBO2dCQThERixlQUFDO1lBQUQsQ0E3REEsQUE2REMsSUFBQTtZQTdERCwrQkE2REMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL0FpRGlhbG9nL0FpTm90aWZ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtBaUJ1dHRvbixBaUNvbmZpcm0sQWlDb25maXJtQ29udGV4dCxBaU1vZGFsSW5zdGFuY2UsQWlNb2RhbERpYWxvZyxBaU1vZGFsQ29uZmlnLEFpTW9kYWxBbGlnbixBaU1vZGFsUG9zaXRpb259IGZyb20gJy4uL0FpJztcblxuZXhwb3J0IGNsYXNzIEFpTm90aWZ5Q29udGV4dCB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyBtZXNzYWdlOnN0cmluZyxcbiAgICAgICAgcHVibGljIGljbzpzdHJpbmcsXG4gICAgICAgIHB1YmxpYyBvazogc3RyaW5nLFxuICAgICAgICBwdWJsaWMgc3R5bGU6c3RyaW5nLFxuICAgICAgICBwdWJsaWMgY29sb3I6c3RyaW5nXG4gICAgKSB7fVxufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FpLW5vdGlmeScsXG4gICAgZGlyZWN0aXZlczogW0FpQnV0dG9uXSxcbiAgICBob3N0OntcbiAgICAgICAgJ1tjbGFzc10nOiAnZ2V0Q2xhc3MoKSdcbiAgICAgICAgfSxcbiAgICB0ZW1wbGF0ZTpcbiAgICBgXG4gICAgXHQ8cCBjbGFzcz0nbXNnJz5cbiAgICBcdCAgICB7e2NvbnRleHQubWVzc2FnZX19XG4gICAgXHQgICAgPGFpLWJ1dHRvbiAqbmdJZj1cImhhc09LKClcIiBsaW5rIGNsYXNzPSdvaycgKF9jbGljayk9J29rKCknPnt7Y29udGV4dC5va319PC9haS1idXR0b24+XG4gICAgXHQ8L3A+XG4gICAgICAgIDxzcGFuIGNsYXNzPSdpY28nIGFpLW1hdGVyaWFsPnt7Y29udGV4dC5pY299fTwvc3Bhbj5cbiAgICBcdDxhaS1idXR0b24gaWNvbiBjbGFzcz0nY2xvc2UnIChfY2xpY2spPSdjbG9zZSgpJz5jbGVhcjwvYWktYnV0dG9uPlxuICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgQWlOb3RpZnkgaW1wbGVtZW50cyBBaU1vZGFsRGlhbG9nIHtcblxuICAgIHN0YXRpYyBHZXRDb25maWcoY29udGV4dDogQWlOb3RpZnlDb250ZXh0KTpBaU1vZGFsQ29uZmlne1xuICAgICAgICBsZXQgY29uZmlnOkFpTW9kYWxDb25maWcgPW5ldyBBaU1vZGFsQ29uZmlnKCk7XG4gICAgICAgIFxuICAgICAgICBjb25maWcuZmxvYXRpbmc9dHJ1ZTtcbiAgICAgICAgY29uZmlnLlRpbWVIaWRlPTE1MDAwKjEwO1xuICAgICAgICBpZihjb250ZXh0LnN0eWxlPT09J3NsaWRlZG93bicpe1xuICAgICAgICAgICAgY29uZmlnLng9QWlNb2RhbFBvc2l0aW9uLkJlZ2luKCk7XG4gICAgICAgICAgICBjb25maWcueT1BaU1vZGFsUG9zaXRpb24uQmVnaW4oKTtcbiAgICAgICAgICAgIGNvbmZpZy5hbmltYXRpb249J3NsaWRlZG93bic7XG4gICAgICAgICAgICBjb25maWcud2lkdGg9JzEwMCUnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNvbnRleHQuc3R5bGU9PT0nY29ybmVyJyl7XG4gICAgICAgICAgICBjb25maWcueD1BaU1vZGFsUG9zaXRpb24uRW5kKC0yMCk7XG4gICAgICAgICAgICBjb25maWcueT1BaU1vZGFsUG9zaXRpb24uQmVnaW4oMjApO1xuICAgICAgICAgICAgY29uZmlnLmFuaW1hdGlvbj0namVsbHknO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNvbnRleHQuc3R5bGU9PT0ndGh1bWInKXtcbiAgICAgICAgICAgIGNvbmZpZy54PUFpTW9kYWxQb3NpdGlvbi5CZWdpbigyMCk7XG4gICAgICAgICAgICBjb25maWcueT1BaU1vZGFsUG9zaXRpb24uQmVnaW4oMjApO1xuICAgICAgICAgICAgY29uZmlnLmFuaW1hdGlvbj0ndGh1bWInO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gY29uZmlnO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBpbnN0YW5jZTogQWlNb2RhbEluc3RhbmNlLHB1YmxpYyBjb250ZXh0OiBBaU5vdGlmeUNvbnRleHQpIHtcbiAgICB9XG5cbiAgICBnZXRDbGFzcygpe1xuICAgICAgICB2YXIgYz10aGlzLmNvbnRleHQuc3R5bGU7XG4gICAgICAgIGlmKHRoaXMuY29udGV4dC5jb2xvci5sZW5ndGggPiAwKVxuICAgICAgICAgICAgYys9JyAnK3RoaXMuY29udGV4dC5jb2xvcjtcbiAgICAgICAgaWYodGhpcy5jb250ZXh0Lmljby5sZW5ndGggPiAwKVxuICAgICAgICAgICAgYys9JyBoYXNpY28nO1xuICAgICAgICAgICAgXG4gICAgICAgIGlmICh0aGlzLmNvbnRleHQuc3R5bGU9PT0nc2xpZGVkb3duJylcbiAgICAgICAgICAgIGMrPScgYWktdG9wLWluJztcbiAgICAgICAgZWxzZSBpZiAodGhpcy5jb250ZXh0LnN0eWxlPT09J2Nvcm5lcicpXG4gICAgICAgICAgICBjKz0nIGFpLWplbGx5LWluJztcbiAgICAgICAgZWxzZSBpZiAodGhpcy5jb250ZXh0LnN0eWxlPT09J3RodW1iJylcbiAgICAgICAgICAgIGMrPScgYWktamVsbHktaW4nO1xuICAgICAgICAgICAgXG4gICAgICAgIHJldHVybiBjO1xuICAgIH1cblxuICAgIGhhc09LKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQub2subGVuZ3RoID4gMDtcbiAgICB9XG5cbiAgICBvaygpe1xuICAgICAgICB0aGlzLmluc3RhbmNlLmNsb3NlKHRydWUpO1xuICAgIH1cblxuICAgIGNsb3NlKCkge1xuICAgICAgICB0aGlzLmluc3RhbmNlLmRpc21pc3MoKTtcbiAgICB9XG5cblxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
