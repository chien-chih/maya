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
                    this.delayTimerId = -1;
                    this.isClosing = false;
                }
                Object.defineProperty(AiModalContainer.prototype, "Class", {
                    get: function () {
                        var cls = '';
                        if (this.instance.config.mask)
                            cls += 'mask ' + this.instance.config.mask;
                        if (this.instance.config.autoHide)
                            cls += ' autohide';
                        if (this.instance.config.animation === 'fade')
                            cls += this.isClosing ? ' ai-fade-out' : ' ai-fade-in';
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
                        this.instance.close();
                };
                AiModalContainer.prototype.documentKeypress = function (event) {
                    if (this.instance.isTopModal && this.instance.config.ESCHide && event.keyCode == Ai_1.KeyCodes.ESCAPE)
                        this.instance.close();
                };
                AiModalContainer.prototype.onOpen = function () {
                    var that = this;
                    async_1.TimerWrapper.setTimeout(function () {
                        that.resetPosition();
                    }, 1);
                    //Watch Time Hide
                    var closeAfter = this.instance.config.TimeHide;
                    if (closeAfter > 0) {
                        this.closeAfterTimerId = async_1.TimerWrapper.setInterval(function () {
                            that.instance.close();
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
                        dom.addClass(dom.query('body'), 'ai-modal-open');
                    }
                };
                AiModalContainer.prototype.beforeClose = function (delay, callback) {
                    var self = this;
                    this.isClosing = true;
                    if (this.closeAfterTimerId != -1) {
                        async_1.TimerWrapper.clearTimeout(this.closeAfterTimerId);
                        this.closeAfterTimerId = -1;
                    }
                    if (this.delayTimerId != -1) {
                        async_1.TimerWrapper.clearTimeout(this.delayTimerId);
                        this.delayTimerId = -1;
                    }
                    if (delay == 0)
                        callback();
                    else
                        this.delayTimerId = async_1.TimerWrapper.setTimeout(function () {
                            callback();
                            self.delayTimerId = -1;
                        }, delay - 100);
                };
                AiModalContainer.prototype.onClose = function () {
                    if (this.instance.isNoModal) {
                        var dom = Ai_1.AiDOM.get();
                        dom.removeClass(dom.query('body'), 'ai-modal-open');
                    }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlNb2RhbC9BaU1vZGFsQ29udGFpbmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFpQkE7Z0JBQXNDLG9DQUFTO2dCQVUzQywwQkFBb0IsUUFBeUIsRUFBQyxHQUFlO29CQUN6RCxrQkFBTSxHQUFHLENBQUMsQ0FBQztvQkFESyxhQUFRLEdBQVIsUUFBUSxDQUFpQjtvQkFSN0MsZUFBVSxHQUFRLFFBQVEsQ0FBQztvQkFFM0Isc0JBQWlCLEdBQVEsQ0FBQyxDQUFDLENBQUM7b0JBRTVCLGlCQUFZLEdBQVEsQ0FBQyxDQUFDLENBQUM7b0JBRXZCLGNBQVMsR0FBUyxLQUFLLENBQUM7Z0JBSXhCLENBQUM7Z0JBRUQsc0JBQUksbUNBQUs7eUJBQVQ7d0JBQ0ksSUFBSSxHQUFHLEdBQVEsRUFBRSxDQUFDO3dCQUVsQixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7NEJBQ3pCLEdBQUcsSUFBRSxPQUFPLEdBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO3dCQUUzQyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7NEJBQzdCLEdBQUcsSUFBRSxXQUFXLENBQUM7d0JBRXJCLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFNBQVMsS0FBRyxNQUFNLENBQUM7NEJBQ3ZDLEdBQUcsSUFBRyxJQUFJLENBQUMsU0FBUyxHQUFHLGNBQWMsR0FBRyxhQUFhLENBQUM7d0JBRTFELE1BQU0sQ0FBQyxHQUFHLENBQUM7b0JBQ2YsQ0FBQzs7O21CQUFBO2dCQUVELHdDQUFhLEdBQWI7b0JBQ0ksa0VBQWtFO29CQUVsRSxJQUFJLE1BQU0sR0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FB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QUFDO3dCQUNwQixHQUFHLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUUsZUFBZSxDQUFDLENBQUM7b0JBQ3hELENBQUM7Z0JBQ0wsQ0FBQztnQkF2SUw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsb0JBQW9CO3dCQUM5QixJQUFJLEVBQUU7NEJBQ0YsU0FBUyxFQUFFLE9BQU87NEJBQ2xCLG9CQUFvQixFQUFFLFlBQVk7NEJBQ2xDLFNBQVMsRUFBRSxXQUFXOzRCQUN0QixnQkFBZ0IsRUFBRSwwQkFBMEI7NEJBQzVDLFVBQVUsRUFBRSxHQUFHOzRCQUNmLE1BQU0sRUFBRSxRQUFRO3lCQUNuQjt3QkFDRCxRQUFRLEVBQUMseURBQXlEO3FCQUNyRSxDQUFDOztvQ0FBQTtnQkFnSUYsdUJBQUM7WUFBRCxDQS9IQSxBQStIQyxDQS9IcUMsY0FBUyxHQStIOUM7WUEvSEQsK0NBK0hDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9BaU1vZGFsL0FpTW9kYWxDb250YWluZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FpRE9NLEFpQ29udHJvbCxLZXlDb2RlcyxBaU1vZGFsSW5zdGFuY2UsQWlNb2RhbENvbmZpZyxBaU1vZGFsQWxpZ24sQWlNb2RhbH0gZnJvbSAnLi4vQWknO1xuaW1wb3J0IHtDb21wb25lbnQsRWxlbWVudFJlZixBdHRyaWJ1dGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtUaW1lcldyYXBwZXJ9IGZyb20gXCJhbmd1bGFyMi9zcmMvZmFjYWRlL2FzeW5jXCI7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhaS1tb2RhbC1jb250YWluZXInLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgJ1tjbGFzc10nOiAnQ2xhc3MnLFxuICAgICAgICAnW3N0eWxlLnZpc2liaWxpdHldJzogJ3Zpc2liaWxpdHknLFxuICAgICAgICAnKGNsaWNrKSc6ICdvbkNsaWNrKCknLFxuICAgICAgICAnKGJvZHk6a2V5ZG93biknOiAnZG9jdW1lbnRLZXlwcmVzcygkZXZlbnQpJyxcbiAgICAgICAgJ3RhYmluZGV4JzogJzAnLFxuICAgICAgICAncm9sZSc6ICdkaWFsb2cnXG4gICAgfSxcbiAgICB0ZW1wbGF0ZTonPGRpdiBjbGFzcz1cImFpLW1vZGFsLWRpYWxvZ1wiPjxpICNtb2RhbERpYWxvZz48L2k+PC9kaXY+J1xufSlcbmV4cG9ydCBjbGFzcyBBaU1vZGFsQ29udGFpbmVyIGV4dGVuZHMgQWlDb250cm9se1xuXG4gICAgdmlzaWJpbGl0eTpzdHJpbmc9J2hpZGRlbic7XG5cbiAgICBjbG9zZUFmdGVyVGltZXJJZDpudW1iZXI9LTE7XG5cbiAgICBkZWxheVRpbWVySWQ6bnVtYmVyPS0xO1xuICAgIFxuICAgIGlzQ2xvc2luZzpib29sZWFuPWZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBpbnN0YW5jZTogQWlNb2RhbEluc3RhbmNlLGVsZTogRWxlbWVudFJlZikge1xuICAgICAgICBzdXBlcihlbGUpOyBcbiAgICB9XG5cbiAgICBnZXQgQ2xhc3MoKTpzdHJpbmd7XG4gICAgICAgIHZhciBjbHM6c3RyaW5nPScnO1xuXG4gICAgICAgIGlmKHRoaXMuaW5zdGFuY2UuY29uZmlnLm1hc2spXG4gICAgICAgICAgICBjbHMrPSdtYXNrICcrdGhpcy5pbnN0YW5jZS5jb25maWcubWFzaztcblxuICAgICAgICBpZih0aGlzLmluc3RhbmNlLmNvbmZpZy5hdXRvSGlkZSlcbiAgICAgICAgICAgIGNscys9JyBhdXRvaGlkZSc7XG5cbiAgICAgICAgaWYodGhpcy5pbnN0YW5jZS5jb25maWcuYW5pbWF0aW9uPT09J2ZhZGUnKS8vbXVzdCBiZSBoZXJlXG4gICAgICAgICAgICBjbHMrPSB0aGlzLmlzQ2xvc2luZyA/ICcgYWktZmFkZS1vdXQnIDogJyBhaS1mYWRlLWluJztcblxuICAgICAgICByZXR1cm4gY2xzO1xuICAgIH1cblxuICAgIHJlc2V0UG9zaXRpb24oKSB7XG4gICAgICAgIC8vdGhlIHJlYWwgbW9kYWwgc2hvdyBwb3NpdGlvbiBpcyBkaWFsb2cgcG9zaXRpb24gKyBhbGlnbiBwb3NpdGlvblxuXG4gICAgICAgIHZhciBkaWFsb2c9dGhpcy5uYXRpdmVFbGVtZW50LmNoaWxkTm9kZXNbMF07XG4gICAgICAgIHZhciBjb250ZW50PWRpYWxvZy5jaGlsZE5vZGVzWzFdO1xuICAgICAgICB2YXIgY29uZmlnPXRoaXMuaW5zdGFuY2UuY29uZmlnO1xuXG4gICAgICAgIGRpYWxvZy5zdHlsZS5wb3NpdGlvbj1jb25maWcuUG9zaXRpb247XG4gICAgICAgIGNvbnRlbnQuc3R5bGUucG9zaXRpb249J3JlbGF0aXZlJztcbiAgICAgICAgbGV0IHRhcmdldD1udWxsO1xuICAgICAgICBpZihjb25maWcuYXJvdW5kVG8pXG4gICAgICAgICAgICB0YXJnZXQ9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29uZmlnLmFyb3VuZFRvKTtcbiAgICAgICAgY29uZmlnLngucG9zaXRpb25MZWZ0KGRpYWxvZyxjb250ZW50LHRhcmdldCk7XG4gICAgICAgIGNvbmZpZy55LnBvc2l0aW9uVG9wKGRpYWxvZyxjb250ZW50LHRhcmdldCk7XG5cbiAgICAgICAgaWYoY29uZmlnLndpZHRoKVxuICAgICAgICAgICAgZGlhbG9nLnN0eWxlLndpZHRoPWNvbmZpZy53aWR0aDtcblxuICAgICAgICBpZihjb25maWcuaGVpZ2h0KVxuICAgICAgICAgICAgZGlhbG9nLnN0eWxlLmhlaWdodD1jb25maWcuaGVpZ2h0O1xuXG4gICAgICAgIHRoaXMudmlzaWJpbGl0eT1udWxsO1xuICAgIH1cblxuXG4gICAgb25DbGljaygpIHtcbiAgICAgICAgaWYodGhpcy5pbnN0YW5jZS5jb25maWcuYXV0b0hpZGUpXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlLmNsb3NlKCk7XG4gICAgfVxuXG4gICAgZG9jdW1lbnRLZXlwcmVzcyhldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICBpZiAodGhpcy5pbnN0YW5jZS5pc1RvcE1vZGFsICYmIHRoaXMuaW5zdGFuY2UuY29uZmlnLkVTQ0hpZGUgJiYgZXZlbnQua2V5Q29kZT09S2V5Q29kZXMuRVNDQVBFKVxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5jbG9zZSgpO1xuICAgIH1cblxuICAgIG9uT3Blbigpe1xuICAgICAgICB2YXIgdGhhdD10aGlzO1xuICAgICAgICBUaW1lcldyYXBwZXIuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGF0LnJlc2V0UG9zaXRpb24oKTtcbiAgICAgICAgfSwgMSk7XG5cblxuICAgICAgICAvL1dhdGNoIFRpbWUgSGlkZVxuICAgICAgICBsZXQgY2xvc2VBZnRlcj10aGlzLmluc3RhbmNlLmNvbmZpZy5UaW1lSGlkZTtcbiAgICAgICAgaWYoY2xvc2VBZnRlciA+IDApe1xuICAgICAgICAgICAgdGhpcy5jbG9zZUFmdGVyVGltZXJJZD1UaW1lcldyYXBwZXIuc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoYXQuaW5zdGFuY2UuY2xvc2UoKTtcbiAgICAgICAgICAgIH0sIGNsb3NlQWZ0ZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy90cmFjayBzaXplXG4gICAgICAgIGlmKHRoaXMuaW5zdGFuY2UuY29uZmlnLnRyYWNraW5nU2l6ZVBvc2l0aW9uKXtcbiAgICAgICAgICAgIFRpbWVyV3JhcHBlci5zZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhhdC5yZXNldFBvc2l0aW9uKCk7XG4gICAgICAgICAgICB9LCA1MDApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaW5zdGFuY2UuaXNPbmx5TW9kYWwpe1xuICAgICAgICAgICAgbGV0IGRvbT1BaURPTS5nZXQoKTtcbiAgICAgICAgICAgIGRvbS5hZGRDbGFzcyhkb20ucXVlcnkoJ2JvZHknKSwgJ2FpLW1vZGFsLW9wZW4nKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG5cbiAgICBiZWZvcmVDbG9zZShkZWxheSxjYWxsYmFjayl7XG4gICAgICAgIHZhciBzZWxmPXRoaXM7XG4gICAgICAgIHRoaXMuaXNDbG9zaW5nPXRydWU7XG4gICAgICAgIGlmKHRoaXMuY2xvc2VBZnRlclRpbWVySWQgIT0gLTEpe1xuICAgICAgICAgICAgVGltZXJXcmFwcGVyLmNsZWFyVGltZW91dCh0aGlzLmNsb3NlQWZ0ZXJUaW1lcklkKTtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VBZnRlclRpbWVySWQ9LTE7XG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLmRlbGF5VGltZXJJZCAhPSAtMSkge1xuICAgICAgICAgICAgVGltZXJXcmFwcGVyLmNsZWFyVGltZW91dCh0aGlzLmRlbGF5VGltZXJJZCk7ICAgXG4gICAgICAgICAgICB0aGlzLmRlbGF5VGltZXJJZCA9IC0xXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmKGRlbGF5PT0wKVxuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGhpcy5kZWxheVRpbWVySWQ9VGltZXJXcmFwcGVyLnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmRlbGF5VGltZXJJZD0tMTtcbiAgICAgICAgICAgICAgICB9LCBkZWxheS0xMDApO1xuICAgICAgICBcbiAgICB9XG5cbiAgICBvbkNsb3NlKCl7XG5cbiAgICAgICAgaWYgKHRoaXMuaW5zdGFuY2UuaXNOb01vZGFsKXtcbiAgICAgICAgICAgIGxldCBkb209QWlET00uZ2V0KCk7XG4gICAgICAgICAgICBkb20ucmVtb3ZlQ2xhc3MoZG9tLnF1ZXJ5KCdib2R5JyksICdhaS1tb2RhbC1vcGVuJyk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
