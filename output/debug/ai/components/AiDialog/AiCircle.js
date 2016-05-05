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
    var AiCircleContext, AiCircle;
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
            AiCircleContext = (function () {
                function AiCircleContext(message, ico, ok) {
                    this.message = message;
                    this.ico = ico;
                    this.ok = ok;
                }
                return AiCircleContext;
            }());
            exports_1("AiCircleContext", AiCircleContext);
            AiCircle = (function () {
                function AiCircle(instance, context, ele) {
                    this.instance = instance;
                    this.context = context;
                    this.ele = ele;
                    this.isClosing = false;
                    this.nativeElement = null;
                    this.waitTimerId = -1;
                    this.nativeElement = ele.nativeElement;
                    AiCircle.setDlgInstance(this);
                }
                AiCircle.setDlgInstance = function (dlgInstance) {
                    AiCircle.removeDlgInstance();
                    AiCircle.dlgInstance = dlgInstance;
                };
                AiCircle.removeDlgInstance = function () {
                    if (AiCircle.dlgInstance) {
                        AiCircle.dlgInstance.close();
                        AiCircle.dlgInstance = null;
                    }
                };
                AiCircle.GetConfig = function (context) {
                    var config = new Ai_1.AiModalConfig();
                    config.floating = true;
                    config.TimeHide = 15000 * 10;
                    config.x = Ai_1.AiModalPosition.Begin(20);
                    config.y = Ai_1.AiModalPosition.End(-20);
                    return config;
                };
                AiCircle.prototype.onOpen = function () {
                    var _this = this;
                    var dom = Ai_1.AiDOM.get();
                    var self = this;
                    if (this.context.ico.length > 0)
                        dom.addClass(this.nativeElement, 'hasico');
                    this.waitTimerId = async_1.TimerWrapper.setTimeout(function () {
                        dom.addClass(_this.nativeElement, 'show');
                    }, 27000);
                };
                AiCircle.prototype.beforeClose = function () {
                    Ai_1.AiDOM.get().addClass(this.nativeElement, 'ai-fade-out');
                    return false;
                };
                AiCircle.prototype.closingDelayTime = function () {
                    return 500;
                };
                AiCircle.prototype.hasOK = function () {
                    return this.context.ok.length > 0;
                };
                AiCircle.prototype.disposeTimer = function () {
                    if (this.waitTimerId != -1) {
                        async_1.TimerWrapper.clearTimeout(this.waitTimerId);
                        this.waitTimerId = -1;
                    }
                };
                AiCircle.prototype.ok = function () {
                    this.disposeTimer();
                    this.instance.close(true);
                };
                AiCircle.prototype.close = function () {
                    this.disposeTimer();
                    this.instance.close();
                };
                AiCircle.dlgInstance = null;
                AiCircle = __decorate([
                    core_1.Component({
                        selector: 'ai-circle',
                        directives: [Ai_1.AiButton],
                        template: "\n    \t<p class='msg'>\n    \t    {{context.message}}\n    \t    <ai-button *ngIf=\"hasOK()\" link class='ok' (_click)='ok()'>{{context.ok}}</ai-button>\n    \t</p>\n        <span class='ico' ai-material>{{context.ico}}</span>\n    \t<ai-button icon class='close' (_click)='close()'>highlight_off</ai-button>\n    \t<svg width=\"70px\" height=\"70px\"><path d=\"m35,2.5c17.955803,0 32.5,14.544199 32.5,32.5c0,17.955803 -14.544197,32.5 -32.5,32.5c-17.955803,0 -32.5,-14.544197 -32.5,-32.5c0,-17.955801 14.544197,-32.5 32.5,-32.5z\"></path></svg>\n    "
                    }), 
                    __metadata('design:paramtypes', [Ai_1.AiModalInstance, AiCircleContext, core_1.ElementRef])
                ], AiCircle);
                return AiCircle;
            }());
            exports_1("AiCircle", AiCircle);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlEaWFsb2cvQWlDaXJjbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFJQTtnQkFDSSx5QkFDVyxPQUFjLEVBQ2QsR0FBVSxFQUNWLEVBQVU7b0JBRlYsWUFBTyxHQUFQLE9BQU8sQ0FBTztvQkFDZCxRQUFHLEdBQUgsR0FBRyxDQUFPO29CQUNWLE9BQUUsR0FBRixFQUFFLENBQVE7Z0JBQ2xCLENBQUM7Z0JBQ1Isc0JBQUM7WUFBRCxDQU5BLEFBTUMsSUFBQTtZQU5ELDZDQU1DLENBQUE7WUFnQkQ7Z0JBZ0NJLGtCQUFtQixRQUF5QixFQUFRLE9BQXdCLEVBQVMsR0FBZTtvQkFBakYsYUFBUSxHQUFSLFFBQVEsQ0FBaUI7b0JBQVEsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7b0JBQVMsUUFBRyxHQUFILEdBQUcsQ0FBWTtvQkE5QnBHLGNBQVMsR0FBUyxLQUFLLENBQUM7b0JBRXhCLGtCQUFhLEdBQUssSUFBSSxDQUFDO29CQUV2QixnQkFBVyxHQUFRLENBQUMsQ0FBQyxDQUFDO29CQTJCbEIsSUFBSSxDQUFDLGFBQWEsR0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDO29CQUNyQyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNsQyxDQUFDO2dCQXpCTSx1QkFBYyxHQUFyQixVQUFzQixXQUFvQjtvQkFDdEMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUM7b0JBQzdCLFFBQVEsQ0FBQyxXQUFXLEdBQUMsV0FBVyxDQUFDO2dCQUNyQyxDQUFDO2dCQUVNLDBCQUFpQixHQUF4QjtvQkFDSSxFQUFFLENBQUEsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUEsQ0FBQzt3QkFDckIsUUFBUSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQzt3QkFDN0IsUUFBUSxDQUFDLFdBQVcsR0FBQyxJQUFJLENBQUM7b0JBQzlCLENBQUM7Z0JBQ0wsQ0FBQztnQkFFTSxrQkFBUyxHQUFoQixVQUFpQixPQUF3QjtvQkFDckMsSUFBSSxNQUFNLEdBQWdCLElBQUksa0JBQWEsRUFBRSxDQUFDO29CQUU5QyxNQUFNLENBQUMsUUFBUSxHQUFDLElBQUksQ0FBQztvQkFDckIsTUFBTSxDQUFDLFFBQVEsR0FBQyxLQUFLLEdBQUMsRUFBRSxDQUFDO29CQUN6QixNQUFNLENBQUMsQ0FBQyxHQUFDLG9CQUFlLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUNuQyxNQUFNLENBQUMsQ0FBQyxHQUFDLG9CQUFlLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQ2xDLE1BQU0sQ0FBQyxNQUFNLENBQUM7Z0JBQ2xCLENBQUM7Z0JBT0QseUJBQU0sR0FBTjtvQkFBQSxpQkFVQztvQkFURyxJQUFJLEdBQUcsR0FBQyxVQUFLLENBQUMsR0FBRyxFQUFFLENBQUM7b0JBQ3BCLElBQUksSUFBSSxHQUFDLElBQUksQ0FBQztvQkFDZCxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO3dCQUMzQixHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDLENBQUM7b0JBRS9DLElBQUksQ0FBQyxXQUFXLEdBQUMsb0JBQVksQ0FBQyxVQUFVLENBQUM7d0JBQ2pDLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsQ0FBQztvQkFDN0MsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUVsQixDQUFDO2dCQUVELDhCQUFXLEdBQVg7b0JBQ0ksVUFBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLGFBQWEsQ0FBQyxDQUFDO29CQUN4RCxNQUFNLENBQUMsS0FBSyxDQUFDO2dCQUNqQixDQUFDO2dCQUVELG1DQUFnQixHQUFoQjtvQkFDSSxNQUFNLENBQUMsR0FBRyxDQUFDO2dCQUNmLENBQUM7Z0JBRUQsd0JBQUssR0FBTDtvQkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztnQkFDdEMsQ0FBQztnQkFFRCwrQkFBWSxHQUFaO29CQUNJLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQSxDQUFDO3dCQUN2QixvQkFBWSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7d0JBQzVDLElBQUksQ0FBQyxXQUFXLEdBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3hCLENBQUM7Z0JBQ0wsQ0FBQztnQkFFRCxxQkFBRSxHQUFGO29CQUNJLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztvQkFDcEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzlCLENBQUM7Z0JBRUQsd0JBQUssR0FBTDtvQkFDSSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7b0JBQ3BCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQzFCLENBQUM7Z0JBckVNLG9CQUFXLEdBQVUsSUFBSSxDQUFDO2dCQXRCckM7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsV0FBVzt3QkFDckIsVUFBVSxFQUFFLENBQUMsYUFBUSxDQUFDO3dCQUN0QixRQUFRLEVBQ1IseWlCQVFDO3FCQUNKLENBQUM7OzRCQUFBO2dCQWtGRixlQUFDO1lBQUQsQ0FqRkEsQUFpRkMsSUFBQTtZQWpGRCwrQkFpRkMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL0FpRGlhbG9nL0FpQ2lyY2xlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBaURPTSxBaUJ1dHRvbixBaUNvbmZpcm0sQWlDb25maXJtQ29udGV4dCxBaU1vZGFsSW5zdGFuY2UsQWlNb2RhbERpYWxvZyxBaU1vZGFsQ29uZmlnLEFpTW9kYWxBbGlnbixBaU1vZGFsUG9zaXRpb259IGZyb20gJy4uL0FpJztcbmltcG9ydCB7Q29tcG9uZW50LEVsZW1lbnRSZWZ9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtUaW1lcldyYXBwZXJ9IGZyb20gXCJhbmd1bGFyMi9zcmMvZmFjYWRlL2FzeW5jXCI7XG5cbmV4cG9ydCBjbGFzcyBBaUNpcmNsZUNvbnRleHQge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgbWVzc2FnZTpzdHJpbmcsXG4gICAgICAgIHB1YmxpYyBpY286c3RyaW5nLFxuICAgICAgICBwdWJsaWMgb2s6IHN0cmluZ1xuICAgICkge31cbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhaS1jaXJjbGUnLFxuICAgIGRpcmVjdGl2ZXM6IFtBaUJ1dHRvbl0sXG4gICAgdGVtcGxhdGU6XG4gICAgYFxuICAgIFx0PHAgY2xhc3M9J21zZyc+XG4gICAgXHQgICAge3tjb250ZXh0Lm1lc3NhZ2V9fVxuICAgIFx0ICAgIDxhaS1idXR0b24gKm5nSWY9XCJoYXNPSygpXCIgbGluayBjbGFzcz0nb2snIChfY2xpY2spPSdvaygpJz57e2NvbnRleHQub2t9fTwvYWktYnV0dG9uPlxuICAgIFx0PC9wPlxuICAgICAgICA8c3BhbiBjbGFzcz0naWNvJyBhaS1tYXRlcmlhbD57e2NvbnRleHQuaWNvfX08L3NwYW4+XG4gICAgXHQ8YWktYnV0dG9uIGljb24gY2xhc3M9J2Nsb3NlJyAoX2NsaWNrKT0nY2xvc2UoKSc+aGlnaGxpZ2h0X29mZjwvYWktYnV0dG9uPlxuICAgIFx0PHN2ZyB3aWR0aD1cIjcwcHhcIiBoZWlnaHQ9XCI3MHB4XCI+PHBhdGggZD1cIm0zNSwyLjVjMTcuOTU1ODAzLDAgMzIuNSwxNC41NDQxOTkgMzIuNSwzMi41YzAsMTcuOTU1ODAzIC0xNC41NDQxOTcsMzIuNSAtMzIuNSwzMi41Yy0xNy45NTU4MDMsMCAtMzIuNSwtMTQuNTQ0MTk3IC0zMi41LC0zMi41YzAsLTE3Ljk1NTgwMSAxNC41NDQxOTcsLTMyLjUgMzIuNSwtMzIuNXpcIj48L3BhdGg+PC9zdmc+XG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyBBaUNpcmNsZSBpbXBsZW1lbnRzIEFpTW9kYWxEaWFsb2cge1xuXG4gICAgaXNDbG9zaW5nOmJvb2xlYW49ZmFsc2U7XG4gICAgXG4gICAgbmF0aXZlRWxlbWVudDphbnk9bnVsbDtcbiAgICBcbiAgICB3YWl0VGltZXJJZDpudW1iZXI9LTE7XG5cbiAgICBzdGF0aWMgZGxnSW5zdGFuY2U6QWlDaXJjbGU9bnVsbDtcblxuICAgIHN0YXRpYyBzZXREbGdJbnN0YW5jZShkbGdJbnN0YW5jZTpBaUNpcmNsZSl7XG4gICAgICAgIEFpQ2lyY2xlLnJlbW92ZURsZ0luc3RhbmNlKCk7XG4gICAgICAgIEFpQ2lyY2xlLmRsZ0luc3RhbmNlPWRsZ0luc3RhbmNlO1xuICAgIH1cbiAgICBcbiAgICBzdGF0aWMgcmVtb3ZlRGxnSW5zdGFuY2UoKXtcbiAgICAgICAgaWYoQWlDaXJjbGUuZGxnSW5zdGFuY2Upe1xuICAgICAgICAgICAgQWlDaXJjbGUuZGxnSW5zdGFuY2UuY2xvc2UoKTtcbiAgICAgICAgICAgIEFpQ2lyY2xlLmRsZ0luc3RhbmNlPW51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgR2V0Q29uZmlnKGNvbnRleHQ6IEFpQ2lyY2xlQ29udGV4dCk6QWlNb2RhbENvbmZpZ3tcbiAgICAgICAgbGV0IGNvbmZpZzpBaU1vZGFsQ29uZmlnID1uZXcgQWlNb2RhbENvbmZpZygpO1xuICAgICAgICBcbiAgICAgICAgY29uZmlnLmZsb2F0aW5nPXRydWU7XG4gICAgICAgIGNvbmZpZy5UaW1lSGlkZT0xNTAwMCoxMDtcbiAgICAgICAgY29uZmlnLng9QWlNb2RhbFBvc2l0aW9uLkJlZ2luKDIwKTtcbiAgICAgICAgY29uZmlnLnk9QWlNb2RhbFBvc2l0aW9uLkVuZCgtMjApO1xuICAgICAgICByZXR1cm4gY29uZmlnO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBpbnN0YW5jZTogQWlNb2RhbEluc3RhbmNlLHB1YmxpYyBjb250ZXh0OiBBaUNpcmNsZUNvbnRleHQscHJpdmF0ZSBlbGU6IEVsZW1lbnRSZWYpIHtcbiAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50PWVsZS5uYXRpdmVFbGVtZW50O1xuICAgICAgICBBaUNpcmNsZS5zZXREbGdJbnN0YW5jZSh0aGlzKTtcbiAgICB9XG5cbiAgICBvbk9wZW4oKXtcbiAgICAgICAgbGV0IGRvbT1BaURPTS5nZXQoKTtcbiAgICAgICAgdmFyIHNlbGY9dGhpcztcbiAgICAgICAgaWYodGhpcy5jb250ZXh0Lmljby5sZW5ndGggPiAwKVxuICAgICAgICAgICAgZG9tLmFkZENsYXNzKHRoaXMubmF0aXZlRWxlbWVudCwgJ2hhc2ljbycpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy53YWl0VGltZXJJZD1UaW1lcldyYXBwZXIuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgZG9tLmFkZENsYXNzKHRoaXMubmF0aXZlRWxlbWVudCwgJ3Nob3cnKTtcbiAgICAgICAgICAgIH0sIDI3MDAwKTtcblxuICAgIH0gXG5cbiAgICBiZWZvcmVDbG9zZSgpOiBib29sZWFue1xuICAgICAgICBBaURPTS5nZXQoKS5hZGRDbGFzcyh0aGlzLm5hdGl2ZUVsZW1lbnQsICdhaS1mYWRlLW91dCcpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY2xvc2luZ0RlbGF5VGltZSgpOm51bWJlcntcbiAgICAgICAgcmV0dXJuIDUwMDtcbiAgICB9IFxuXG4gICAgaGFzT0soKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC5vay5sZW5ndGggPiAwO1xuICAgIH1cblxuICAgIGRpc3Bvc2VUaW1lcigpe1xuICAgICAgICBpZih0aGlzLndhaXRUaW1lcklkICE9IC0xKXtcbiAgICAgICAgICAgIFRpbWVyV3JhcHBlci5jbGVhclRpbWVvdXQodGhpcy53YWl0VGltZXJJZCk7XG4gICAgICAgICAgICB0aGlzLndhaXRUaW1lcklkPS0xO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb2soKXtcbiAgICAgICAgdGhpcy5kaXNwb3NlVGltZXIoKTtcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5jbG9zZSh0cnVlKTtcbiAgICB9XG5cbiAgICBjbG9zZSgpIHsgXG4gICAgICAgIHRoaXMuZGlzcG9zZVRpbWVyKCk7XG4gICAgICAgIHRoaXMuaW5zdGFuY2UuY2xvc2UoKTtcbiAgICB9XG5cblxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
