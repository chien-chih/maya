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
                AiModalContainer.prototype.unloadAnimation = function () {
                    var dom = Ai_1.AiDOM.get();
                    var dialog = this.nativeElement.childNodes[0];
                    if (this.instance.config.animation === 'slidedown') {
                        dom.addClass(dialog, 'ai-top-out');
                        return 500;
                    }
                    else if (this.instance.config.animation === 'fade' || this.instance.config.animation === 'jelly') {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlNb2RhbC9BaU1vZGFsQ29udGFpbmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFpQkE7Z0JBQXNDLG9DQUFTO2dCQVEzQywwQkFBb0IsUUFBeUIsRUFBQyxHQUFlO29CQUN6RCxrQkFBTSxHQUFHLENBQUMsQ0FBQztvQkFESyxhQUFRLEdBQVIsUUFBUSxDQUFpQjtvQkFON0MsZUFBVSxHQUFRLFFBQVEsQ0FBQztvQkFFM0Isc0JBQWlCLEdBQVEsQ0FBQyxDQUFDLENBQUM7b0JBRTVCLGdCQUFXLEdBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBSXRCLENBQUM7Z0JBRUQsc0JBQUksbUNBQUs7eUJBQVQ7d0JBQ0ksSUFBSSxHQUFHLEdBQVEsRUFBRSxDQUFDO3dCQUVsQixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7NEJBQ3pCLEdBQUcsSUFBRSxPQUFPLEdBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO3dCQUUzQyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7NEJBQzdCLEdBQUcsSUFBRSxXQUFXLENBQUM7d0JBRXJCLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFNBQVMsS0FBRyxNQUFNLENBQUM7NEJBQ3ZDLEdBQUcsSUFBRyxhQUFhLENBQUM7d0JBRXhCLE1BQU0sQ0FBQyxHQUFHLENBQUM7b0JBQ2YsQ0FBQzs7O21CQUFBO2dCQUVELHdDQUFhLEdBQWI7b0JBQ0ksa0VBQWtFO29CQUVsRSxJQUFJLE1BQU0sR0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDNUMsSUFBSSxPQUFPLEdBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FB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SXFDLGNBQVMsR0F1STlDO1lBdklELCtDQXVJQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvQWlNb2RhbC9BaU1vZGFsQ29udGFpbmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBaURPTSxBaUNvbnRyb2wsS2V5Q29kZXMsQWlNb2RhbEluc3RhbmNlLEFpTW9kYWxDb25maWcsQWlNb2RhbEFsaWduLEFpTW9kYWx9IGZyb20gJy4uL0FpJztcbmltcG9ydCB7Q29tcG9uZW50LEVsZW1lbnRSZWYsQXR0cmlidXRlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7VGltZXJXcmFwcGVyfSBmcm9tIFwiYW5ndWxhcjIvc3JjL2ZhY2FkZS9hc3luY1wiO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYWktbW9kYWwtY29udGFpbmVyJyxcbiAgICBob3N0OiB7XG4gICAgICAgICdbY2xhc3NdJzogJ0NsYXNzJyxcbiAgICAgICAgJ1tzdHlsZS52aXNpYmlsaXR5XSc6ICd2aXNpYmlsaXR5JyxcbiAgICAgICAgJyhjbGljayknOiAnb25DbGljaygpJyxcbiAgICAgICAgJyhib2R5OmtleWRvd24pJzogJ2RvY3VtZW50S2V5cHJlc3MoJGV2ZW50KScsXG4gICAgICAgICd0YWJpbmRleCc6ICcwJyxcbiAgICAgICAgJ3JvbGUnOiAnZGlhbG9nJ1xuICAgIH0sXG4gICAgdGVtcGxhdGU6JzxkaXYgY2xhc3M9XCJhaS1tb2RhbC1kaWFsb2dcIj48aSAjbW9kYWxEaWFsb2c+PC9pPjwvZGl2Pidcbn0pXG5leHBvcnQgY2xhc3MgQWlNb2RhbENvbnRhaW5lciBleHRlbmRzIEFpQ29udHJvbHtcblxuICAgIHZpc2liaWxpdHk6c3RyaW5nPSdoaWRkZW4nO1xuXG4gICAgY2xvc2VBZnRlclRpbWVySWQ6bnVtYmVyPS0xO1xuXG4gICAgd2FpdFRpbWVySWQ6bnVtYmVyPS0xO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBpbnN0YW5jZTogQWlNb2RhbEluc3RhbmNlLGVsZTogRWxlbWVudFJlZikge1xuICAgICAgICBzdXBlcihlbGUpO1xuICAgIH1cblxuICAgIGdldCBDbGFzcygpOnN0cmluZ3tcbiAgICAgICAgdmFyIGNsczpzdHJpbmc9Jyc7XG5cbiAgICAgICAgaWYodGhpcy5pbnN0YW5jZS5jb25maWcubWFzaylcbiAgICAgICAgICAgIGNscys9J21hc2sgJyt0aGlzLmluc3RhbmNlLmNvbmZpZy5tYXNrO1xuXG4gICAgICAgIGlmKHRoaXMuaW5zdGFuY2UuY29uZmlnLmF1dG9IaWRlKVxuICAgICAgICAgICAgY2xzKz0nIGF1dG9oaWRlJztcblxuICAgICAgICBpZih0aGlzLmluc3RhbmNlLmNvbmZpZy5hbmltYXRpb249PT0nZmFkZScpLy9tdXN0IGJlIGhlcmVcbiAgICAgICAgICAgIGNscys9ICcgYWktZmFkZS1pbic7XG5cbiAgICAgICAgcmV0dXJuIGNscztcbiAgICB9XG5cbiAgICByZXNldFBvc2l0aW9uKCkge1xuICAgICAgICAvL3RoZSByZWFsIG1vZGFsIHNob3cgcG9zaXRpb24gaXMgZGlhbG9nIHBvc2l0aW9uICsgYWxpZ24gcG9zaXRpb25cblxuICAgICAgICB2YXIgZGlhbG9nPXRoaXMubmF0aXZlRWxlbWVudC5jaGlsZE5vZGVzWzBdO1xuICAgICAgICB2YXIgY29udGVudD1kaWFsb2cuY2hpbGROb2Rlc1sxXTtcbiAgICAgICAgdmFyIGNvbmZpZz10aGlzLmluc3RhbmNlLmNvbmZpZztcblxuICAgICAgICBkaWFsb2cuc3R5bGUucG9zaXRpb249Y29uZmlnLlBvc2l0aW9uO1xuICAgICAgICBjb250ZW50LnN0eWxlLnBvc2l0aW9uPSdyZWxhdGl2ZSc7XG4gICAgICAgIGxldCB0YXJnZXQ9bnVsbDtcbiAgICAgICAgaWYoY29uZmlnLmFyb3VuZFRvKVxuICAgICAgICAgICAgdGFyZ2V0PWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbmZpZy5hcm91bmRUbyk7XG4gICAgICAgIGNvbmZpZy54LnBvc2l0aW9uTGVmdChkaWFsb2csY29udGVudCx0YXJnZXQpO1xuICAgICAgICBjb25maWcueS5wb3NpdGlvblRvcChkaWFsb2csY29udGVudCx0YXJnZXQpO1xuXG4gICAgICAgIGlmKGNvbmZpZy53aWR0aClcbiAgICAgICAgICAgIGRpYWxvZy5zdHlsZS53aWR0aD1jb25maWcud2lkdGg7XG5cbiAgICAgICAgaWYoY29uZmlnLmhlaWdodClcbiAgICAgICAgICAgIGRpYWxvZy5zdHlsZS5oZWlnaHQ9Y29uZmlnLmhlaWdodDtcblxuICAgICAgICB0aGlzLnZpc2liaWxpdHk9bnVsbDtcbiAgICB9XG5cblxuICAgIG9uQ2xpY2soKSB7XG4gICAgICAgIGlmKHRoaXMuaW5zdGFuY2UuY29uZmlnLmF1dG9IaWRlKVxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5kaXNtaXNzKCk7XG4gICAgfVxuXG4gICAgZG9jdW1lbnRLZXlwcmVzcyhldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICBpZiAodGhpcy5pbnN0YW5jZS5pc1RvcE1vZGFsICYmIHRoaXMuaW5zdGFuY2UuY29uZmlnLkVTQ0hpZGUgJiYgZXZlbnQua2V5Q29kZT09S2V5Q29kZXMuRVNDQVBFKVxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5kaXNtaXNzKCk7XG4gICAgfVxuXG4gICAgb25Mb2FkKCl7XG4gICAgICAgIHZhciB0aGF0PXRoaXM7XG4gICAgICAgIFRpbWVyV3JhcHBlci5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoYXQucmVzZXRQb3NpdGlvbigpO1xuICAgICAgICB9LCAxKTtcblxuXG4gICAgICAgIC8vV2F0Y2ggVGltZSBIaWRlXG4gICAgICAgIGxldCBjbG9zZUFmdGVyPXRoaXMuaW5zdGFuY2UuY29uZmlnLlRpbWVIaWRlO1xuICAgICAgICBpZihjbG9zZUFmdGVyID4gMCl7XG4gICAgICAgICAgICB0aGlzLmNsb3NlQWZ0ZXJUaW1lcklkPVRpbWVyV3JhcHBlci5zZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhhdC5pbnN0YW5jZS5kaXNtaXNzKCk7XG4gICAgICAgICAgICB9LCBjbG9zZUFmdGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vdHJhY2sgc2l6ZVxuICAgICAgICBpZih0aGlzLmluc3RhbmNlLmNvbmZpZy50cmFja2luZ1NpemVQb3NpdGlvbil7XG4gICAgICAgICAgICBUaW1lcldyYXBwZXIuc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoYXQucmVzZXRQb3NpdGlvbigpO1xuICAgICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmluc3RhbmNlLmlzT25seU1vZGFsKXtcbiAgICAgICAgICAgIGxldCBkb209QWlET00uZ2V0KCk7XG4gICAgICAgICAgICBkb20uYWRkQ2xhc3MoZG9tLnF1ZXJ5KCdib2R5JyksICdtb2RhbC1vcGVuJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBiZWZvcmVVbmxvYWQoY2FsbGJhY2spe1xuXG4gICAgICAgIGlmKHRoaXMuY2xvc2VBZnRlclRpbWVySWQgIT0gLTEpe1xuICAgICAgICAgICAgVGltZXJXcmFwcGVyLmNsZWFyVGltZW91dCh0aGlzLmNsb3NlQWZ0ZXJUaW1lcklkKTtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VBZnRlclRpbWVySWQ9LTE7XG4gICAgICAgIH1cblxuXG4gICAgICAgIHZhciBzZWxmPXRoaXM7XG4gICAgICAgIGlmKHRoaXMud2FpdFRpbWVySWQgIT0gLTEpIHtcbiAgICAgICAgICAgIFRpbWVyV3JhcHBlci5jbGVhclRpbWVvdXQodGhpcy53YWl0VGltZXJJZCk7XG4gICAgICAgICAgICB0aGlzLndhaXRUaW1lcklkID0gLTE7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHdhaXRUaW1lPXRoaXMudW5sb2FkQW5pbWF0aW9uKCk7XG4gICAgICAgIGlmKHdhaXRUaW1lPT0wKSBjYWxsYmFjaygpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICB0aGlzLndhaXRUaW1lcklkPVRpbWVyV3JhcHBlci5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgIHNlbGYud2FpdFRpbWVySWQ9LTE7XG4gICAgICAgICAgICB9LCB3YWl0VGltZSk7XG4gICAgfVxuXG4gICAgb25VbmxvYWQoKXtcblxuICAgICAgICBpZiAodGhpcy5pbnN0YW5jZS5pc05vTW9kYWwpe1xuICAgICAgICAgICAgbGV0IGRvbT1BaURPTS5nZXQoKTtcbiAgICAgICAgICAgIGRvbS5yZW1vdmVDbGFzcyhkb20ucXVlcnkoJ2JvZHknKSwgJ21vZGFsLW9wZW4nKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgdW5sb2FkQW5pbWF0aW9uKCk6bnVtYmVye1xuICAgICAgICBsZXQgZG9tPUFpRE9NLmdldCgpO1xuICAgICAgICB2YXIgZGlhbG9nPXRoaXMubmF0aXZlRWxlbWVudC5jaGlsZE5vZGVzWzBdO1xuICAgICAgICBpZih0aGlzLmluc3RhbmNlLmNvbmZpZy5hbmltYXRpb249PT0nc2xpZGVkb3duJyl7XG4gICAgICAgICAgICBkb20uYWRkQ2xhc3MoZGlhbG9nLCAnYWktdG9wLW91dCcpO1xuICAgICAgICAgICAgcmV0dXJuIDUwMDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHRoaXMuaW5zdGFuY2UuY29uZmlnLmFuaW1hdGlvbj09PSdmYWRlJyB8fCB0aGlzLmluc3RhbmNlLmNvbmZpZy5hbmltYXRpb249PT0namVsbHknKXtcbiAgICAgICAgICAgIGRvbS5hZGRDbGFzcyh0aGlzLm5hdGl2ZUVsZW1lbnQsICdhaS1mYWRlLW91dCcpO1xuICAgICAgICAgICAgcmV0dXJuIDMwMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
