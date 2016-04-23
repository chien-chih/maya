System.register(['../Ai', 'angular2/core', "angular2/src/facade/async"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
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
    var AiModalContainer;
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
            AiModalContainer = (function (_super) {
                __extends(AiModalContainer, _super);
                function AiModalContainer(instance, ele) {
                    _super.call(this, ele);
                    this.instance = instance;
                    this.visibility = 'hidden';
                    this.closeAfterTimerId = -1;
                    this.waitTimerId = -1;
                }
                Object.defineProperty(AiModalContainer.prototype, "Class", {
                    get: function () {
                        var cls = '';
                        if (this.instance.config.mask)
                            cls += 'mask ' + this.instance.config.mask;
                        if (this.instance.config.autoHide)
                            cls += ' autohide';
                        if (this.instance.config.animation === 'fade')
                            cls += ' ai-fade-in';
                        return cls;
                    },
                    enumerable: true,
                    configurable: true
                });
                AiModalContainer.prototype.resetPosition = function () {
                    //the real modal show position is dialog position + align position
                    var dialog = this.nativeElement.childNodes[0];
                    var content = dialog.childNodes[1];
                    var config = this.instance.config;
                    dialog.style.position = config.Position;
                    content.style.position = 'relative';
                    var target = null;
                    if (config.aroundTo)
                        target = document.getElementById(config.aroundTo);
                    config.x.positionLeft(dialog, content, target);
                    config.y.positionTop(dialog, content, target);
                    if (config.width)
                        dialog.style.width = config.width;
                    if (config.height)
                        dialog.style.height = config.height;
                    this.visibility = null;
                };
                AiModalContainer.prototype.onClick = function () {
                    if (this.instance.config.autoHide)
                        this.instance.dismiss();
                };
                AiModalContainer.prototype.documentKeypress = function (event) {
                    if (this.instance.isTopModal && this.instance.config.ESCHide && event.keyCode == Ai_1.KeyCodes.ESCAPE)
                        this.instance.dismiss();
                };
                AiModalContainer.prototype.onLoad = function () {
                    var that = this;
                    async_1.TimerWrapper.setTimeout(function () {
                        that.resetPosition();
                    }, 1);
                    //Watch Time Hide
                    var closeAfter = this.instance.config.TimeHide;
                    if (closeAfter > 0) {
                        this.closeAfterTimerId = async_1.TimerWrapper.setInterval(function () {
                            that.instance.dismiss();
                        }, closeAfter);
                    }
                    //track size
                    if (this.instance.config.trackingSizePosition) {
                        async_1.TimerWrapper.setInterval(function () {
                            that.resetPosition();
                        }, 500);
                    }
                    if (this.instance.isOnlyModal) {
                        var dom = Ai_1.AiDOM.get();
                        dom.addClass(dom.query('body'), 'modal-open');
                    }
                    this.loadAnimation();
                };
                AiModalContainer.prototype.beforeUnload = function (callback) {
                    if (this.closeAfterTimerId != -1) {
                        async_1.TimerWrapper.clearTimeout(this.closeAfterTimerId);
                        this.closeAfterTimerId = -1;
                    }
                    var self = this;
                    if (this.waitTimerId != -1) {
                        async_1.TimerWrapper.clearTimeout(this.waitTimerId);
                        this.waitTimerId = -1;
                    }
                    var waitTime = this.unloadAnimation();
                    if (waitTime == 0)
                        callback();
                    else
                        this.waitTimerId = async_1.TimerWrapper.setTimeout(function () {
                            callback();
                            self.waitTimerId = -1;
                        }, waitTime);
                };
                AiModalContainer.prototype.onUnload = function () {
                    if (this.instance.isNoModal) {
                        var dom = Ai_1.AiDOM.get();
                        dom.removeClass(dom.query('body'), 'modal-open');
                    }
                };
                AiModalContainer.prototype.loadAnimation = function () {
                    var dom = Ai_1.AiDOM.get();
                    var dialog = this.nativeElement.childNodes[0];
                    if (this.instance.config.animation === 'slidedown')
                        dom.addClass(dialog, 'ai-top-in');
                };
                AiModalContainer.prototype.unloadAnimation = function () {
                    var dom = Ai_1.AiDOM.get();
                    var dialog = this.nativeElement.childNodes[0];
                    if (this.instance.config.animation === 'slidedown') {
                        dom.addClass(dialog, 'ai-top-out');
                        return 500;
                    }
                    else if (this.instance.config.animation === 'fade') {
                        dom.addClass(this.nativeElement, 'ai-fade-out');
                        return 300;
                    }
                    return 0;
                };
                AiModalContainer = __decorate([
                    core_1.Component({
                        selector: 'ai-modal-container',
                        host: {
                            '[class]': 'Class',
                            '[style.visibility]': 'visibility',
                            '(click)': 'onClick()',
                            '(body:keydown)': 'documentKeypress($event)',
                            'tabindex': '0',
                            'role': 'dialog'
                        },
                        template: '<div class="ai-modal-dialog"><i #modalDialog></i></div>'
                    }), 
                    __metadata('design:paramtypes', [Ai_1.AiModalInstance, core_1.ElementRef])
                ], AiModalContainer);
                return AiModalContainer;
            }(Ai_1.AiControl));
            exports_1("AiModalContainer", AiModalContainer);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlNb2RhbC9BaU1vZGFsQ29udGFpbmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFpQkE7Z0JBQXNDLG9DQUFTO2dCQVEzQywwQkFBb0IsUUFBeUIsRUFBQyxHQUFlO29CQUN6RCxrQkFBTSxHQUFHLENBQUMsQ0FBQztvQkFESyxhQUFRLEdBQVIsUUFBUSxDQUFpQjtvQkFON0MsZUFBVSxHQUFRLFFBQVEsQ0FBQztvQkFFM0Isc0JBQWlCLEdBQVEsQ0FBQyxDQUFDLENBQUM7b0JBRTVCLGdCQUFXLEdBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBSXRCLENBQUM7Z0JBRUQsc0JBQUksbUNBQUs7eUJBQVQ7d0JBQ0ksSUFBSSxHQUFHLEdBQVEsRUFBRSxDQUFDO3dCQUVsQixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7NEJBQ3pCLEdBQUcsSUFBRSxPQUFPLEdBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO3dCQUUzQyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7NEJBQzdCLEdBQUcsSUFBRSxXQUFXLENBQUM7d0JBRXJCLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFNBQVMsS0FBRyxNQUFNLENBQUM7NEJBQ3ZDLEdBQUcsSUFBRyxhQUFhLENBQUM7d0JBRXhCLE1BQU0sQ0FBQyxHQUFHLENBQUM7b0JBQ2YsQ0FBQzs7O21CQUFBO2dCQUVELHdDQUFhLEdBQWI7b0JBQ0ksa0VBQWtFO29CQUVsRSxJQUFJLE1BQU0sR0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDNUMsSUFBSSxPQUFPLEdBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FB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LEVBQUUsb0JBQW9CO3dCQUM5QixJQUFJLEVBQUU7NEJBQ0YsU0FBUyxFQUFFLE9BQU87NEJBQ2xCLG9CQUFvQixFQUFFLFlBQVk7NEJBQ2xDLFNBQVMsRUFBRSxXQUFXOzRCQUN0QixnQkFBZ0IsRUFBRSwwQkFBMEI7NEJBQzVDLFVBQVUsRUFBRSxHQUFHOzRCQUNmLE1BQU0sRUFBRSxRQUFRO3lCQUNuQjt3QkFDRCxRQUFRLEVBQUMseURBQXlEO3FCQUNyRSxDQUFDOztvQ0FBQTtnQkE4SUYsdUJBQUM7WUFBRCxDQTdJQSxBQTZJQyxDQTdJcUMsY0FBUyxHQTZJOUM7WUE3SUQsK0NBNklDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9BaU1vZGFsL0FpTW9kYWxDb250YWluZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FpRE9NLEFpQ29udHJvbCxLZXlDb2RlcyxBaU1vZGFsSW5zdGFuY2UsQWlNb2RhbENvbmZpZyxBaU1vZGFsQWxpZ24sQWlNb2RhbH0gZnJvbSAnLi4vQWknO1xuaW1wb3J0IHtDb21wb25lbnQsRWxlbWVudFJlZixBdHRyaWJ1dGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtUaW1lcldyYXBwZXJ9IGZyb20gXCJhbmd1bGFyMi9zcmMvZmFjYWRlL2FzeW5jXCI7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhaS1tb2RhbC1jb250YWluZXInLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgJ1tjbGFzc10nOiAnQ2xhc3MnLFxuICAgICAgICAnW3N0eWxlLnZpc2liaWxpdHldJzogJ3Zpc2liaWxpdHknLFxuICAgICAgICAnKGNsaWNrKSc6ICdvbkNsaWNrKCknLFxuICAgICAgICAnKGJvZHk6a2V5ZG93biknOiAnZG9jdW1lbnRLZXlwcmVzcygkZXZlbnQpJyxcbiAgICAgICAgJ3RhYmluZGV4JzogJzAnLFxuICAgICAgICAncm9sZSc6ICdkaWFsb2cnXG4gICAgfSxcbiAgICB0ZW1wbGF0ZTonPGRpdiBjbGFzcz1cImFpLW1vZGFsLWRpYWxvZ1wiPjxpICNtb2RhbERpYWxvZz48L2k+PC9kaXY+J1xufSlcbmV4cG9ydCBjbGFzcyBBaU1vZGFsQ29udGFpbmVyIGV4dGVuZHMgQWlDb250cm9se1xuXG4gICAgdmlzaWJpbGl0eTpzdHJpbmc9J2hpZGRlbic7XG5cbiAgICBjbG9zZUFmdGVyVGltZXJJZDpudW1iZXI9LTE7XG5cbiAgICB3YWl0VGltZXJJZDpudW1iZXI9LTE7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGluc3RhbmNlOiBBaU1vZGFsSW5zdGFuY2UsZWxlOiBFbGVtZW50UmVmKSB7XG4gICAgICAgIHN1cGVyKGVsZSk7XG4gICAgfVxuXG4gICAgZ2V0IENsYXNzKCk6c3RyaW5ne1xuICAgICAgICB2YXIgY2xzOnN0cmluZz0nJztcblxuICAgICAgICBpZih0aGlzLmluc3RhbmNlLmNvbmZpZy5tYXNrKVxuICAgICAgICAgICAgY2xzKz0nbWFzayAnK3RoaXMuaW5zdGFuY2UuY29uZmlnLm1hc2s7XG5cbiAgICAgICAgaWYodGhpcy5pbnN0YW5jZS5jb25maWcuYXV0b0hpZGUpXG4gICAgICAgICAgICBjbHMrPScgYXV0b2hpZGUnO1xuXG4gICAgICAgIGlmKHRoaXMuaW5zdGFuY2UuY29uZmlnLmFuaW1hdGlvbj09PSdmYWRlJykvL211c3QgYmUgaGVyZVxuICAgICAgICAgICAgY2xzKz0gJyBhaS1mYWRlLWluJztcblxuICAgICAgICByZXR1cm4gY2xzO1xuICAgIH1cblxuICAgIHJlc2V0UG9zaXRpb24oKSB7XG4gICAgICAgIC8vdGhlIHJlYWwgbW9kYWwgc2hvdyBwb3NpdGlvbiBpcyBkaWFsb2cgcG9zaXRpb24gKyBhbGlnbiBwb3NpdGlvblxuXG4gICAgICAgIHZhciBkaWFsb2c9dGhpcy5uYXRpdmVFbGVtZW50LmNoaWxkTm9kZXNbMF07XG4gICAgICAgIHZhciBjb250ZW50PWRpYWxvZy5jaGlsZE5vZGVzWzFdO1xuICAgICAgICB2YXIgY29uZmlnPXRoaXMuaW5zdGFuY2UuY29uZmlnO1xuXG4gICAgICAgIGRpYWxvZy5zdHlsZS5wb3NpdGlvbj1jb25maWcuUG9zaXRpb247XG4gICAgICAgIGNvbnRlbnQuc3R5bGUucG9zaXRpb249J3JlbGF0aXZlJztcbiAgICAgICAgbGV0IHRhcmdldD1udWxsO1xuICAgICAgICBpZihjb25maWcuYXJvdW5kVG8pXG4gICAgICAgICAgICB0YXJnZXQ9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29uZmlnLmFyb3VuZFRvKTtcbiAgICAgICAgY29uZmlnLngucG9zaXRpb25MZWZ0KGRpYWxvZyxjb250ZW50LHRhcmdldCk7XG4gICAgICAgIGNvbmZpZy55LnBvc2l0aW9uVG9wKGRpYWxvZyxjb250ZW50LHRhcmdldCk7XG5cbiAgICAgICAgaWYoY29uZmlnLndpZHRoKVxuICAgICAgICAgICAgZGlhbG9nLnN0eWxlLndpZHRoPWNvbmZpZy53aWR0aDtcblxuICAgICAgICBpZihjb25maWcuaGVpZ2h0KVxuICAgICAgICAgICAgZGlhbG9nLnN0eWxlLmhlaWdodD1jb25maWcuaGVpZ2h0O1xuXG4gICAgICAgIHRoaXMudmlzaWJpbGl0eT1udWxsO1xuICAgIH1cblxuXG4gICAgb25DbGljaygpIHtcbiAgICAgICAgaWYodGhpcy5pbnN0YW5jZS5jb25maWcuYXV0b0hpZGUpXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlLmRpc21pc3MoKTtcbiAgICB9XG5cbiAgICBkb2N1bWVudEtleXByZXNzKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmluc3RhbmNlLmlzVG9wTW9kYWwgJiYgdGhpcy5pbnN0YW5jZS5jb25maWcuRVNDSGlkZSAmJiBldmVudC5rZXlDb2RlPT1LZXlDb2Rlcy5FU0NBUEUpXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlLmRpc21pc3MoKTtcbiAgICB9XG5cbiAgICBvbkxvYWQoKXtcbiAgICAgICAgdmFyIHRoYXQ9dGhpcztcbiAgICAgICAgVGltZXJXcmFwcGVyLnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhhdC5yZXNldFBvc2l0aW9uKCk7XG4gICAgICAgIH0sIDEpO1xuXG4gICAgICAgIC8vV2F0Y2ggVGltZSBIaWRlXG4gICAgICAgIGxldCBjbG9zZUFmdGVyPXRoaXMuaW5zdGFuY2UuY29uZmlnLlRpbWVIaWRlO1xuICAgICAgICBpZihjbG9zZUFmdGVyID4gMCl7XG4gICAgICAgICAgICB0aGlzLmNsb3NlQWZ0ZXJUaW1lcklkPVRpbWVyV3JhcHBlci5zZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhhdC5pbnN0YW5jZS5kaXNtaXNzKCk7XG4gICAgICAgICAgICB9LCBjbG9zZUFmdGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vdHJhY2sgc2l6ZVxuICAgICAgICBpZih0aGlzLmluc3RhbmNlLmNvbmZpZy50cmFja2luZ1NpemVQb3NpdGlvbil7XG4gICAgICAgICAgICBUaW1lcldyYXBwZXIuc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoYXQucmVzZXRQb3NpdGlvbigpO1xuICAgICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmluc3RhbmNlLmlzT25seU1vZGFsKXtcbiAgICAgICAgICAgIGxldCBkb209QWlET00uZ2V0KCk7XG4gICAgICAgICAgICBkb20uYWRkQ2xhc3MoZG9tLnF1ZXJ5KCdib2R5JyksICdtb2RhbC1vcGVuJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sb2FkQW5pbWF0aW9uKCk7XG4gICAgfVxuXG4gICAgYmVmb3JlVW5sb2FkKGNhbGxiYWNrKXtcblxuICAgICAgICBpZih0aGlzLmNsb3NlQWZ0ZXJUaW1lcklkICE9IC0xKXtcbiAgICAgICAgICAgIFRpbWVyV3JhcHBlci5jbGVhclRpbWVvdXQodGhpcy5jbG9zZUFmdGVyVGltZXJJZCk7XG4gICAgICAgICAgICB0aGlzLmNsb3NlQWZ0ZXJUaW1lcklkPS0xO1xuICAgICAgICB9XG5cblxuICAgICAgICB2YXIgc2VsZj10aGlzO1xuICAgICAgICBpZih0aGlzLndhaXRUaW1lcklkICE9IC0xKSB7XG4gICAgICAgICAgICBUaW1lcldyYXBwZXIuY2xlYXJUaW1lb3V0KHRoaXMud2FpdFRpbWVySWQpO1xuICAgICAgICAgICAgdGhpcy53YWl0VGltZXJJZCA9IC0xO1xuICAgICAgICB9XG4gICAgICAgIGxldCB3YWl0VGltZT10aGlzLnVubG9hZEFuaW1hdGlvbigpO1xuICAgICAgICBpZih3YWl0VGltZT09MCkgY2FsbGJhY2soKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGhpcy53YWl0VGltZXJJZD1UaW1lcldyYXBwZXIuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICBzZWxmLndhaXRUaW1lcklkPS0xO1xuICAgICAgICAgICAgfSwgd2FpdFRpbWUpO1xuICAgIH1cblxuICAgIG9uVW5sb2FkKCl7XG5cbiAgICAgICAgaWYgKHRoaXMuaW5zdGFuY2UuaXNOb01vZGFsKXtcbiAgICAgICAgICAgIGxldCBkb209QWlET00uZ2V0KCk7XG4gICAgICAgICAgICBkb20ucmVtb3ZlQ2xhc3MoZG9tLnF1ZXJ5KCdib2R5JyksICdtb2RhbC1vcGVuJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsb2FkQW5pbWF0aW9uKCl7XG4gICAgICAgIGxldCBkb209QWlET00uZ2V0KCk7XG4gICAgICAgIHZhciBkaWFsb2c9dGhpcy5uYXRpdmVFbGVtZW50LmNoaWxkTm9kZXNbMF07XG4gICAgICAgIGlmKHRoaXMuaW5zdGFuY2UuY29uZmlnLmFuaW1hdGlvbj09PSdzbGlkZWRvd24nKVxuICAgICAgICAgICAgZG9tLmFkZENsYXNzKGRpYWxvZywgJ2FpLXRvcC1pbicpO1xuICAgIH1cblxuICAgIHVubG9hZEFuaW1hdGlvbigpOm51bWJlcntcbiAgICAgICAgbGV0IGRvbT1BaURPTS5nZXQoKTtcbiAgICAgICAgdmFyIGRpYWxvZz10aGlzLm5hdGl2ZUVsZW1lbnQuY2hpbGROb2Rlc1swXTtcbiAgICAgICAgaWYodGhpcy5pbnN0YW5jZS5jb25maWcuYW5pbWF0aW9uPT09J3NsaWRlZG93bicpe1xuICAgICAgICAgICAgZG9tLmFkZENsYXNzKGRpYWxvZywgJ2FpLXRvcC1vdXQnKTtcbiAgICAgICAgICAgIHJldHVybiA1MDA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZih0aGlzLmluc3RhbmNlLmNvbmZpZy5hbmltYXRpb249PT0nZmFkZScpe1xuICAgICAgICAgICAgZG9tLmFkZENsYXNzKHRoaXMubmF0aXZlRWxlbWVudCwgJ2FpLWZhZGUtb3V0Jyk7XG4gICAgICAgICAgICByZXR1cm4gMzAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
