System.register(['../Ai', 'angular2/core', "angular2/src/facade/async"], function(exports_1, context_1) {
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
    var Ai_1, core_1, async_1;
    var AiNotifyContext, AiNotify;
    return {
        setters:[
            function (Ai_1_1) {
                Ai_1 = Ai_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (async_1_1) {
                async_1 = async_1_1;
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
                function AiNotify(instance, context, ele) {
                    this.instance = instance;
                    this.context = context;
                    this.ele = ele;
                    this.isClosing = false;
                    this.nativeElement = null;
                    this.openAnimation = '';
                    this.nativeElement = ele.nativeElement;
                }
                AiNotify.GetConfig = function (context) {
                    var config = new Ai_1.AiModalConfig();
                    config.floating = true;
                    config.TimeHide = 15000;
                    if (context.style === 'slidedown') {
                        config.x = Ai_1.AiModalPosition.Begin();
                        config.y = Ai_1.AiModalPosition.Begin();
                        config.width = '100%';
                    }
                    else if (context.style === 'corner') {
                        config.x = Ai_1.AiModalPosition.End(-20);
                        config.y = Ai_1.AiModalPosition.Begin(20);
                    }
                    else if (context.style === 'thumb') {
                        config.x = Ai_1.AiModalPosition.Begin(20);
                        config.y = Ai_1.AiModalPosition.Begin(20);
                    }
                    else if (context.style === 'flip') {
                        config.x = Ai_1.AiModalPosition.End(-20);
                        config.y = Ai_1.AiModalPosition.End();
                    }
                    return config;
                };
                AiNotify.prototype.onOpen = function () {
                    var dom = Ai_1.AiDOM.get();
                    var cs = this.context.style;
                    var self = this;
                    dom.addClass(this.nativeElement, cs);
                    if (this.context.color.length > 0)
                        dom.addClass(this.nativeElement, this.context.color);
                    if (this.context.ico.length > 0)
                        dom.addClass(this.nativeElement, 'hasico');
                    if (cs === 'slidedown')
                        this.openAnimation = 'ai-top-in';
                    else if (cs === 'flip')
                        this.openAnimation = 'ai-flip-in';
                    else if (cs === 'corner')
                        this.openAnimation = 'ai-jelly-in';
                    else if (cs === 'thumb') {
                        this.openAnimation = 'ai-jelly-in';
                        async_1.TimerWrapper.setTimeout(function () {
                            dom.removeClass(self.nativeElement, 'ai-jelly-in');
                            dom.addClass(self.nativeElement, 'expand');
                        }, 1000);
                    }
                    dom.addClass(this.nativeElement, this.openAnimation);
                };
                AiNotify.prototype.beforeClose = function () {
                    var _this = this;
                    var cs = this.context.style;
                    var dom = Ai_1.AiDOM.get();
                    dom.removeClass(this.nativeElement, this.openAnimation);
                    if (cs === 'slidedown')
                        dom.addClass(this.nativeElement, 'ai-top-out');
                    else if (cs === 'flip')
                        dom.addClass(this.nativeElement, 'ai-flip-out');
                    else if (cs === 'corner')
                        dom.addClass(this.nativeElement, 'ai-fade-out');
                    else if (cs === 'thumb') {
                        dom.removeClass(this.nativeElement, 'expand');
                        async_1.TimerWrapper.setTimeout(function () {
                            dom.addClass(_this.nativeElement, 'ai-fade-out');
                        }, 500);
                    }
                    return false;
                };
                AiNotify.prototype.closingDelayTime = function () {
                    var cs = this.context.style;
                    if (cs === 'slidedown' || cs === 'corner')
                        return 500;
                    return 1000;
                };
                AiNotify.prototype.hasOK = function () {
                    return this.context.ok.length > 0;
                };
                AiNotify.prototype.ok = function () {
                    this.instance.close(true);
                };
                AiNotify.prototype.close = function () {
                    this.instance.close();
                };
                AiNotify = __decorate([
                    core_1.Component({
                        selector: 'ai-notify',
                        directives: [Ai_1.AiButton],
                        template: "\n    \t<p class='msg'>\n    \t    {{context.message}}\n    \t    <ai-button *ngIf=\"hasOK()\" link class='ok' (_click)='ok()'>{{context.ok}}</ai-button>\n    \t</p>\n        <span class='ico' ai-material>{{context.ico}}</span>\n    \t<ai-button icon class='close' (_click)='close()'>clear</ai-button>\n    "
                    }), 
                    __metadata('design:paramtypes', [Ai_1.AiModalInstance, AiNotifyContext, core_1.ElementRef])
                ], AiNotify);
                return AiNotify;
            }());
            exports_1("AiNotify", AiNotify);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlEaWFsb2cvQWlOb3RpZnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFJQTtnQkFDSSx5QkFDVyxPQUFjLEVBQ2QsR0FBVSxFQUNWLEVBQVUsRUFDVixLQUFZLEVBQ1osS0FBWTtvQkFKWixZQUFPLEdBQVAsT0FBTyxDQUFPO29CQUNkLFFBQUcsR0FBSCxHQUFHLENBQU87b0JBQ1YsT0FBRSxHQUFGLEVBQUUsQ0FBUTtvQkFDVixVQUFLLEdBQUwsS0FBSyxDQUFPO29CQUNaLFVBQUssR0FBTCxLQUFLLENBQU87Z0JBQ3BCLENBQUM7Z0JBQ1Isc0JBQUM7WUFBRCxDQVJBLEFBUUMsSUFBQTtZQVJELDZDQVFDLENBQUE7WUFlRDtnQkFrQ0ksa0JBQW1CLFFBQXlCLEVBQVEsT0FBd0IsRUFBUyxHQUFlO29CQUFqRixhQUFRLEdBQVIsUUFBUSxDQUFpQjtvQkFBUSxZQUFPLEdBQVAsT0FBTyxDQUFpQjtvQkFBUyxRQUFHLEdBQUgsR0FBRyxDQUFZO29CQWhDcEcsY0FBUyxHQUFTLEtBQUssQ0FBQztvQkFFeEIsa0JBQWEsR0FBSyxJQUFJLENBQUM7b0JBRXZCLGtCQUFhLEdBQVEsRUFBRSxDQUFDO29CQTZCcEIsSUFBSSxDQUFDLGFBQWEsR0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDO2dCQUN6QyxDQUFDO2dCQTVCTSxrQkFBUyxHQUFoQixVQUFpQixPQUF3QjtvQkFDckMsSUFBSSxNQUFNLEdBQWdCLElBQUksa0JBQWEsRUFBRSxDQUFDO29CQUU5QyxNQUFNLENBQUMsUUFBUSxHQUFDLElBQUksQ0FBQztvQkFDckIsTUFBTSxDQUFDLFFBQVEsR0FBQyxLQUFLLENBQUM7b0JBQ3RCLEVBQUUsQ0FBQSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEtBQUcsV0FBVyxDQUFDLENBQUEsQ0FBQzt3QkFDNUIsTUFBTSxDQUFDLENBQUMsR0FBQyxvQkFBZSxDQUFDLEtBQUssRUFBRSxDQUFDO3dCQUNq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QUssQ0FBQztnQkFDakIsQ0FBQztnQkFFRCxtQ0FBZ0IsR0FBaEI7b0JBQ0ksSUFBSSxFQUFFLEdBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7b0JBQzFCLEVBQUUsQ0FBQyxDQUFDLEVBQUUsS0FBRyxXQUFXLElBQUksRUFBRSxLQUFHLFFBQVEsQ0FBQzt3QkFDbEMsTUFBTSxDQUFDLEdBQUcsQ0FBQztvQkFDZixNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUNoQixDQUFDO2dCQUdELHdCQUFLLEdBQUw7b0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7Z0JBQ3RDLENBQUM7Z0JBRUQscUJBQUUsR0FBRjtvQkFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDOUIsQ0FBQztnQkFFRCx3QkFBSyxHQUFMO29CQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQzFCLENBQUM7Z0JBbkhMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFdBQVc7d0JBQ3JCLFVBQVUsRUFBRSxDQUFDLGFBQVEsQ0FBQzt3QkFDdEIsUUFBUSxFQUNSLHFUQU9DO3FCQUNKLENBQUM7OzRCQUFBO2dCQTJHRixlQUFDO1lBQUQsQ0ExR0EsQUEwR0MsSUFBQTtZQTFHRCwrQkEwR0MsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL0FpRGlhbG9nL0FpTm90aWZ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBaURPTSxBaUJ1dHRvbixBaUNvbmZpcm0sQWlDb25maXJtQ29udGV4dCxBaU1vZGFsSW5zdGFuY2UsQWlNb2RhbERpYWxvZyxBaU1vZGFsQ29uZmlnLEFpTW9kYWxBbGlnbixBaU1vZGFsUG9zaXRpb259IGZyb20gJy4uL0FpJztcbmltcG9ydCB7Q29tcG9uZW50LEVsZW1lbnRSZWZ9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtUaW1lcldyYXBwZXJ9IGZyb20gXCJhbmd1bGFyMi9zcmMvZmFjYWRlL2FzeW5jXCI7XG5cbmV4cG9ydCBjbGFzcyBBaU5vdGlmeUNvbnRleHQge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgbWVzc2FnZTpzdHJpbmcsXG4gICAgICAgIHB1YmxpYyBpY286c3RyaW5nLFxuICAgICAgICBwdWJsaWMgb2s6IHN0cmluZyxcbiAgICAgICAgcHVibGljIHN0eWxlOnN0cmluZyxcbiAgICAgICAgcHVibGljIGNvbG9yOnN0cmluZ1xuICAgICkge31cbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhaS1ub3RpZnknLFxuICAgIGRpcmVjdGl2ZXM6IFtBaUJ1dHRvbl0sXG4gICAgdGVtcGxhdGU6XG4gICAgYFxuICAgIFx0PHAgY2xhc3M9J21zZyc+XG4gICAgXHQgICAge3tjb250ZXh0Lm1lc3NhZ2V9fVxuICAgIFx0ICAgIDxhaS1idXR0b24gKm5nSWY9XCJoYXNPSygpXCIgbGluayBjbGFzcz0nb2snIChfY2xpY2spPSdvaygpJz57e2NvbnRleHQub2t9fTwvYWktYnV0dG9uPlxuICAgIFx0PC9wPlxuICAgICAgICA8c3BhbiBjbGFzcz0naWNvJyBhaS1tYXRlcmlhbD57e2NvbnRleHQuaWNvfX08L3NwYW4+XG4gICAgXHQ8YWktYnV0dG9uIGljb24gY2xhc3M9J2Nsb3NlJyAoX2NsaWNrKT0nY2xvc2UoKSc+Y2xlYXI8L2FpLWJ1dHRvbj5cbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzIEFpTm90aWZ5IGltcGxlbWVudHMgQWlNb2RhbERpYWxvZyB7XG5cbiAgICBpc0Nsb3Npbmc6Ym9vbGVhbj1mYWxzZTtcbiAgICBcbiAgICBuYXRpdmVFbGVtZW50OmFueT1udWxsO1xuICAgIFxuICAgIG9wZW5BbmltYXRpb246c3RyaW5nPScnO1xuXG4gICAgc3RhdGljIEdldENvbmZpZyhjb250ZXh0OiBBaU5vdGlmeUNvbnRleHQpOkFpTW9kYWxDb25maWd7XG4gICAgICAgIGxldCBjb25maWc6QWlNb2RhbENvbmZpZyA9bmV3IEFpTW9kYWxDb25maWcoKTtcbiAgICAgICAgXG4gICAgICAgIGNvbmZpZy5mbG9hdGluZz10cnVlO1xuICAgICAgICBjb25maWcuVGltZUhpZGU9MTUwMDA7XG4gICAgICAgIGlmKGNvbnRleHQuc3R5bGU9PT0nc2xpZGVkb3duJyl7XG4gICAgICAgICAgICBjb25maWcueD1BaU1vZGFsUG9zaXRpb24uQmVnaW4oKTtcbiAgICAgICAgICAgIGNvbmZpZy55PUFpTW9kYWxQb3NpdGlvbi5CZWdpbigpO1xuICAgICAgICAgICAgY29uZmlnLndpZHRoPScxMDAlJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjb250ZXh0LnN0eWxlPT09J2Nvcm5lcicpe1xuICAgICAgICAgICAgY29uZmlnLng9QWlNb2RhbFBvc2l0aW9uLkVuZCgtMjApO1xuICAgICAgICAgICAgY29uZmlnLnk9QWlNb2RhbFBvc2l0aW9uLkJlZ2luKDIwKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjb250ZXh0LnN0eWxlPT09J3RodW1iJyl7XG4gICAgICAgICAgICBjb25maWcueD1BaU1vZGFsUG9zaXRpb24uQmVnaW4oMjApO1xuICAgICAgICAgICAgY29uZmlnLnk9QWlNb2RhbFBvc2l0aW9uLkJlZ2luKDIwKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjb250ZXh0LnN0eWxlPT09J2ZsaXAnKXtcbiAgICAgICAgICAgIGNvbmZpZy54PUFpTW9kYWxQb3NpdGlvbi5FbmQoLTIwKTtcbiAgICAgICAgICAgIGNvbmZpZy55PUFpTW9kYWxQb3NpdGlvbi5FbmQoKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgaW5zdGFuY2U6IEFpTW9kYWxJbnN0YW5jZSxwdWJsaWMgY29udGV4dDogQWlOb3RpZnlDb250ZXh0LHByaXZhdGUgZWxlOiBFbGVtZW50UmVmKSB7XG4gICAgICAgIHRoaXMubmF0aXZlRWxlbWVudD1lbGUubmF0aXZlRWxlbWVudDtcbiAgICB9XG5cbiAgICBvbk9wZW4oKXtcbiAgICAgICAgbGV0IGRvbT1BaURPTS5nZXQoKTtcbiAgICAgICAgbGV0IGNzPXRoaXMuY29udGV4dC5zdHlsZTtcbiAgICAgICAgdmFyIHNlbGY9dGhpcztcbiAgICAgICAgZG9tLmFkZENsYXNzKHRoaXMubmF0aXZlRWxlbWVudCwgY3MpO1xuICAgICAgICBpZih0aGlzLmNvbnRleHQuY29sb3IubGVuZ3RoID4gMClcbiAgICAgICAgICAgIGRvbS5hZGRDbGFzcyh0aGlzLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY29udGV4dC5jb2xvcik7XG4gICAgICAgIGlmKHRoaXMuY29udGV4dC5pY28ubGVuZ3RoID4gMClcbiAgICAgICAgICAgIGRvbS5hZGRDbGFzcyh0aGlzLm5hdGl2ZUVsZW1lbnQsICdoYXNpY28nKTtcblxuICAgICAgICBpZiAoY3M9PT0nc2xpZGVkb3duJykgXG4gICAgICAgICAgICB0aGlzLm9wZW5BbmltYXRpb249J2FpLXRvcC1pbic7XG4gICAgICAgIGVsc2UgaWYgKGNzPT09J2ZsaXAnKVxuICAgICAgICAgICAgdGhpcy5vcGVuQW5pbWF0aW9uPSdhaS1mbGlwLWluJztcbiAgICAgICAgZWxzZSBpZiAoY3M9PT0nY29ybmVyJylcbiAgICAgICAgICAgIHRoaXMub3BlbkFuaW1hdGlvbj0nYWktamVsbHktaW4nO1xuICAgICAgICBlbHNlIGlmIChjcz09PSd0aHVtYicpe1xuICAgICAgICAgICAgdGhpcy5vcGVuQW5pbWF0aW9uPSdhaS1qZWxseS1pbic7XG4gICAgICAgICAgICBUaW1lcldyYXBwZXIuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgZG9tLnJlbW92ZUNsYXNzKHNlbGYubmF0aXZlRWxlbWVudCwgJ2FpLWplbGx5LWluJyk7XG4gICAgICAgICAgICAgICAgZG9tLmFkZENsYXNzKHNlbGYubmF0aXZlRWxlbWVudCwgJ2V4cGFuZCcpO1xuICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgIH1cbiAgICAgICAgZG9tLmFkZENsYXNzKHRoaXMubmF0aXZlRWxlbWVudCwgdGhpcy5vcGVuQW5pbWF0aW9uKTtcbiAgICAgICAgXG4gICAgfSBcblxuICAgIGJlZm9yZUNsb3NlKCk6IGJvb2xlYW57XG4gICAgICAgIGxldCBjcz10aGlzLmNvbnRleHQuc3R5bGU7XG4gICAgICAgIGxldCBkb209QWlET00uZ2V0KCk7XG4gICAgICAgIGRvbS5yZW1vdmVDbGFzcyh0aGlzLm5hdGl2ZUVsZW1lbnQsdGhpcy5vcGVuQW5pbWF0aW9uKTtcbiAgICAgICAgaWYgKGNzPT09J3NsaWRlZG93bicpIFxuICAgICAgICAgICAgZG9tLmFkZENsYXNzKHRoaXMubmF0aXZlRWxlbWVudCwgJ2FpLXRvcC1vdXQnKTtcbiAgICAgICAgZWxzZSBpZiAoY3M9PT0nZmxpcCcpXG4gICAgICAgICAgICBkb20uYWRkQ2xhc3ModGhpcy5uYXRpdmVFbGVtZW50LCAnYWktZmxpcC1vdXQnKTtcbiAgICAgICAgZWxzZSBpZiAoY3M9PT0nY29ybmVyJylcbiAgICAgICAgICAgIGRvbS5hZGRDbGFzcyh0aGlzLm5hdGl2ZUVsZW1lbnQsICdhaS1mYWRlLW91dCcpO1xuICAgICAgICBlbHNlIGlmIChjcz09PSd0aHVtYicpe1xuICAgICAgICAgICAgZG9tLnJlbW92ZUNsYXNzKHRoaXMubmF0aXZlRWxlbWVudCwgJ2V4cGFuZCcpO1xuICAgICAgICAgICAgVGltZXJXcmFwcGVyLnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGRvbS5hZGRDbGFzcyh0aGlzLm5hdGl2ZUVsZW1lbnQsICdhaS1mYWRlLW91dCcpO1xuICAgICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY2xvc2luZ0RlbGF5VGltZSgpOm51bWJlcntcbiAgICAgICAgbGV0IGNzPXRoaXMuY29udGV4dC5zdHlsZTtcbiAgICAgICAgaWYgKGNzPT09J3NsaWRlZG93bicgfHwgY3M9PT0nY29ybmVyJykgXG4gICAgICAgICAgICByZXR1cm4gNTAwO1xuICAgICAgICByZXR1cm4gMTAwMDtcbiAgICB9IFxuXG5cbiAgICBoYXNPSygpe1xuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0Lm9rLmxlbmd0aCA+IDA7XG4gICAgfVxuXG4gICAgb2soKXtcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5jbG9zZSh0cnVlKTtcbiAgICB9XG5cbiAgICBjbG9zZSgpIHsgXG4gICAgICAgIHRoaXMuaW5zdGFuY2UuY2xvc2UoKTtcbiAgICB9XG5cblxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
