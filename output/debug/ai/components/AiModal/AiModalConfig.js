System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var AiModalAlign, AiModalPosition, AiModalConfig;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            (function (AiModalAlign) {
                AiModalAlign[AiModalAlign["Begin"] = 0] = "Begin";
                AiModalAlign[AiModalAlign["Center"] = 1] = "Center";
                AiModalAlign[AiModalAlign["End"] = 2] = "End";
            })(AiModalAlign || (AiModalAlign = {}));
            exports_1("AiModalAlign", AiModalAlign);
            AiModalPosition = (function () {
                function AiModalPosition(offset, align) {
                    if (offset === void 0) { offset = 0; }
                    if (align === void 0) { align = AiModalAlign.Begin; }
                    this.offset = offset;
                    this.align = align;
                }
                Object.defineProperty(AiModalPosition, "Begin", {
                    get: function () {
                        return new AiModalPosition();
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AiModalPosition, "Center", {
                    get: function () {
                        return new AiModalPosition('50%', AiModalAlign.Center);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AiModalPosition, "End", {
                    get: function () {
                        return new AiModalPosition('100%', AiModalAlign.End);
                    },
                    enumerable: true,
                    configurable: true
                });
                AiModalPosition.prototype.numberOffset = function () {
                    return Number(this.offset.replace('%', '').trim());
                };
                AiModalPosition.prototype.positionLeft = function (dialog, content, targetElement) {
                    var x = this.offset;
                    if (targetElement) {
                        var left = targetElement.offsetLeft;
                        if (typeof this.offset == 'string' && this.offset.indexOf('%') != -1) {
                            var width = targetElement.offsetWidth;
                            var noffset = this.numberOffset();
                            x = left + (width * noffset) / 100;
                        }
                        else
                            x = left + x;
                    }
                    dialog.style.left = x;
                    switch (this.align) {
                        case AiModalAlign.Begin:
                            content.style.left = 0;
                            break;
                        case AiModalAlign.Center:
                            content.style.left = -content.offsetWidth / 2;
                            break;
                        case AiModalAlign.End:
                            content.style.left = -content.offsetWidth;
                            break;
                    }
                };
                AiModalPosition.prototype.positionTop = function (dialog, content, targetElement) {
                    var y = this.offset;
                    if (targetElement) {
                        var top = targetElement.offsetTop;
                        if (typeof this.offset == 'string' && this.offset.indexOf('%') != -1) {
                            var height = targetElement.offsetHeight;
                            var noffset = this.numberOffset();
                            y = top + (height * noffset) / 100;
                        }
                        else
                            y = top + y;
                    }
                    dialog.style.top = y;
                    switch (this.align) {
                        case AiModalAlign.Begin:
                            content.style.top = 0;
                            break;
                        case AiModalAlign.Center:
                            content.style.top = -content.offsetWidth / 2;
                            break;
                        case AiModalAlign.End:
                            content.style.top = -content.offsetWidth;
                            break;
                    }
                };
                return AiModalPosition;
            }());
            exports_1("AiModalPosition", AiModalPosition);
            /**
             * A configuration definition object.
             * Instruction for how to show a modal.
             */
            AiModalConfig = (function () {
                function AiModalConfig() {
                    this.x = AiModalPosition.Center;
                    this.y = AiModalPosition.Begin;
                    this.width = null;
                    this.height = null;
                    this.floating = false;
                    this.anchorName = null;
                    this.mask = null; //null,'white','black'
                    this.autoHide = false;
                    this.ESCHide = true;
                    this.TimeHide = 0; //seconds to hide
                    this.trackingSizePosition = false;
                    this.animation = null; //SlideTop,FadeIn
                }
                Object.defineProperty(AiModalConfig.prototype, "Position", {
                    get: function () {
                        return this.floating ? 'fixed' : 'absolute';
                    },
                    enumerable: true,
                    configurable: true
                });
                AiModalConfig = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], AiModalConfig);
                return AiModalConfig;
            }());
            exports_1("AiModalConfig", AiModalConfig);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlNb2RhbC9BaU1vZGFsQ29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBR0EsV0FBWSxZQUFZO2dCQUNwQixpREFBSyxDQUFBO2dCQUFDLG1EQUFNLENBQUE7Z0JBQUMsNkNBQUcsQ0FBQTtZQUNwQixDQUFDLEVBRlcsWUFBWSxLQUFaLFlBQVksUUFFdkI7b0RBQUE7WUFFRDtnQkFNSSx5QkFBWSxNQUFZLEVBQUMsS0FBcUM7b0JBQWxELHNCQUFZLEdBQVosVUFBWTtvQkFBQyxxQkFBcUMsR0FBckMsUUFBbUIsWUFBWSxDQUFDLEtBQUs7b0JBQzFELElBQUksQ0FBQyxNQUFNLEdBQUMsTUFBTSxDQUFDO29CQUNuQixJQUFJLENBQUMsS0FBSyxHQUFDLEtBQUssQ0FBQztnQkFDckIsQ0FBQztnQkFHRCxzQkFBVyx3QkFBSzt5QkFBaEI7d0JBQ0ksTUFBTSxDQUFDLElBQUksZUFBZSxFQUFFLENBQUM7b0JBQ2pDLENBQUM7OzttQkFBQTtnQkFFRCxzQkFBVyx5QkFBTTt5QkFBakI7d0JBQ0ksTUFBTSxDQUFDLElBQUksZUFBZSxDQUFDLEtBQUssRUFBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQzFELENBQUM7OzttQkFBQTtnQkFFRCxzQkFBVyxzQkFBRzt5QkFBZDt3QkFDSSxNQUFNLENBQUMsSUFBSSxlQUFlLENBQUMsTUFBTSxFQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDeEQsQ0FBQzs7O21CQUFBO2dCQUVELHNDQUFZLEdBQVo7b0JBQ0ksTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztnQkFDdEQsQ0FBQztnQkFFRCxzQ0FBWSxHQUFaLFVBQWEsTUFBTSxFQUFDLE9BQU8sRUFBQyxhQUFhO29CQUNyQyxJQUFJLENBQUMsR0FBQyxJ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QUM7NEJBQ3ZDLEtBQUssQ0FBQztvQkFDZCxDQUFDO2dCQUNMLENBQUM7Z0JBRUwsc0JBQUM7WUFBRCxDQWxGQSxBQWtGQyxJQUFBO1lBbEZELDZDQWtGQyxDQUFBO1lBRUQ7OztlQUdHO1lBRUg7Z0JBQUE7b0JBRUksTUFBQyxHQUFpQixlQUFlLENBQUMsTUFBTSxDQUFDO29CQUV6QyxNQUFDLEdBQWlCLGVBQWUsQ0FBQyxLQUFLLENBQUM7b0JBRXhDLFVBQUssR0FBUSxJQUFJLENBQUM7b0JBRWxCLFdBQU0sR0FBUSxJQUFJLENBQUM7b0JBRW5CLGFBQVEsR0FBUyxLQUFLLENBQUM7b0JBSXZCLGVBQVUsR0FBUSxJQUFJLENBQUM7b0JBRXZCLFNBQUksR0FBVSxJQUFJLENBQUMsQ0FBQyxzQkFBc0I7b0JBRTFDLGFBQVEsR0FBUyxLQUFLLENBQUM7b0JBRXZCLFlBQU8sR0FBUyxJQUFJLENBQUM7b0JBRXJCLGFBQVEsR0FBUSxDQUFDLENBQUMsQ0FBQSxpQkFBaUI7b0JBRW5DLHlCQUFvQixHQUFTLEtBQUssQ0FBQztvQkFFbkMsY0FBUyxHQUFRLElBQUksQ0FBQyxDQUFBLGlCQUFpQjtnQkFNM0MsQ0FBQztnQkFKRyxzQkFBSSxtQ0FBUTt5QkFBWjt3QkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLEdBQUMsVUFBVSxDQUFDO29CQUM5QyxDQUFDOzs7bUJBQUE7Z0JBL0JMO29CQUFDLGlCQUFVLEVBQUU7O2lDQUFBO2dCQWlDYixvQkFBQztZQUFELENBaENBLEFBZ0NDLElBQUE7WUFoQ0QseUNBZ0NDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9BaU1vZGFsL0FpTW9kYWxDb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5cbmV4cG9ydCBlbnVtIEFpTW9kYWxBbGlnbntcbiAgICBCZWdpbixDZW50ZXIsRW5kXG59XG5cbmV4cG9ydCBjbGFzcyBBaU1vZGFsUG9zaXRpb257XG5cbiAgICBvZmZzZXQ6YW55O1xuXG4gICAgYWxpZ246QWlNb2RhbEFsaWduO1xuXG4gICAgY29uc3RydWN0b3Iob2Zmc2V0OmFueT0wLGFsaWduOkFpTW9kYWxBbGlnbj1BaU1vZGFsQWxpZ24uQmVnaW4pIHtcbiAgICAgICAgdGhpcy5vZmZzZXQ9b2Zmc2V0O1xuICAgICAgICB0aGlzLmFsaWduPWFsaWduO1xuICAgIH1cblxuXG4gICAgc3RhdGljIGdldCBCZWdpbigpe1xuICAgICAgICByZXR1cm4gbmV3IEFpTW9kYWxQb3NpdGlvbigpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgQ2VudGVyKCl7XG4gICAgICAgIHJldHVybiBuZXcgQWlNb2RhbFBvc2l0aW9uKCc1MCUnLEFpTW9kYWxBbGlnbi5DZW50ZXIpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgRW5kKCl7XG4gICAgICAgIHJldHVybiBuZXcgQWlNb2RhbFBvc2l0aW9uKCcxMDAlJyxBaU1vZGFsQWxpZ24uRW5kKTtcbiAgICB9XG5cbiAgICBudW1iZXJPZmZzZXQoKXtcbiAgICAgICAgcmV0dXJuIE51bWJlcih0aGlzLm9mZnNldC5yZXBsYWNlKCclJywnJykudHJpbSgpKTtcbiAgICB9XG5cbiAgICBwb3NpdGlvbkxlZnQoZGlhbG9nLGNvbnRlbnQsdGFyZ2V0RWxlbWVudCl7XG4gICAgICAgIHZhciB4PXRoaXMub2Zmc2V0O1xuICAgICAgICBpZih0YXJnZXRFbGVtZW50KXtcbiAgICAgICAgICAgIHZhciBsZWZ0PXRhcmdldEVsZW1lbnQub2Zmc2V0TGVmdDtcbiAgICAgICAgICAgIGlmKHR5cGVvZiB0aGlzLm9mZnNldCA9PSAnc3RyaW5nJyAmJiB0aGlzLm9mZnNldC5pbmRleE9mKCclJykgIT0gLTEpe1xuICAgICAgICAgICAgICAgIHZhciB3aWR0aD10YXJnZXRFbGVtZW50Lm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgICAgIHZhciBub2Zmc2V0Om51bWJlcj10aGlzLm51bWJlck9mZnNldCgpO1xuICAgICAgICAgICAgICAgIHg9bGVmdCsgKHdpZHRoICogbm9mZnNldCkvMTAwO1xuXG4gICAgICAgICAgICB9ZWxzZVxuICAgICAgICAgICAgICAgIHg9bGVmdCt4O1xuICAgICAgICB9XG5cbiAgICAgICAgZGlhbG9nLnN0eWxlLmxlZnQ9eDtcbiAgICAgICAgc3dpdGNoKHRoaXMuYWxpZ24pe1xuICAgICAgICAgICAgY2FzZSBBaU1vZGFsQWxpZ24uQmVnaW46XG4gICAgICAgICAgICAgICAgY29udGVudC5zdHlsZS5sZWZ0PTA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFpTW9kYWxBbGlnbi5DZW50ZXI6XG4gICAgICAgICAgICAgICAgY29udGVudC5zdHlsZS5sZWZ0PS1jb250ZW50Lm9mZnNldFdpZHRoIC8yO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBaU1vZGFsQWxpZ24uRW5kOlxuICAgICAgICAgICAgICAgIGNvbnRlbnQuc3R5bGUubGVmdD0tY29udGVudC5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBvc2l0aW9uVG9wKGRpYWxvZyxjb250ZW50LHRhcmdldEVsZW1lbnQpe1xuICAgICAgICB2YXIgeT10aGlzLm9mZnNldDtcbiAgICAgICAgaWYodGFyZ2V0RWxlbWVudCl7XG4gICAgICAgICAgICB2YXIgdG9wPXRhcmdldEVsZW1lbnQub2Zmc2V0VG9wO1xuICAgICAgICAgICAgaWYodHlwZW9mIHRoaXMub2Zmc2V0ID09ICdzdHJpbmcnICYmIHRoaXMub2Zmc2V0LmluZGV4T2YoJyUnKSAhPSAtMSl7XG4gICAgICAgICAgICAgICAgdmFyIGhlaWdodD10YXJnZXRFbGVtZW50Lm9mZnNldEhlaWdodDtcbiAgICAgICAgICAgICAgICB2YXIgbm9mZnNldDpudW1iZXI9dGhpcy5udW1iZXJPZmZzZXQoKTtcbiAgICAgICAgICAgICAgICB5PXRvcCsgKGhlaWdodCAqIG5vZmZzZXQpLzEwMDtcblxuICAgICAgICAgICAgfWVsc2VcbiAgICAgICAgICAgICAgICB5PXRvcCt5O1xuICAgICAgICB9XG5cbiAgICAgICAgZGlhbG9nLnN0eWxlLnRvcD15O1xuICAgICAgICBzd2l0Y2godGhpcy5hbGlnbil7XG4gICAgICAgICAgICBjYXNlIEFpTW9kYWxBbGlnbi5CZWdpbjpcbiAgICAgICAgICAgICAgICBjb250ZW50LnN0eWxlLnRvcD0wO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBaU1vZGFsQWxpZ24uQ2VudGVyOlxuICAgICAgICAgICAgICAgIGNvbnRlbnQuc3R5bGUudG9wPS1jb250ZW50Lm9mZnNldFdpZHRoIC8yO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBaU1vZGFsQWxpZ24uRW5kOlxuICAgICAgICAgICAgICAgIGNvbnRlbnQuc3R5bGUudG9wPS1jb250ZW50Lm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG59XG5cbi8qKlxuICogQSBjb25maWd1cmF0aW9uIGRlZmluaXRpb24gb2JqZWN0LlxuICogSW5zdHJ1Y3Rpb24gZm9yIGhvdyB0byBzaG93IGEgbW9kYWwuXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBaU1vZGFsQ29uZmlnIHtcblxuICAgIHg6QWlNb2RhbFBvc2l0aW9uPUFpTW9kYWxQb3NpdGlvbi5DZW50ZXI7XG5cbiAgICB5OkFpTW9kYWxQb3NpdGlvbj1BaU1vZGFsUG9zaXRpb24uQmVnaW47XG5cbiAgICB3aWR0aDpzdHJpbmc9bnVsbDtcblxuICAgIGhlaWdodDpzdHJpbmc9bnVsbDtcblxuICAgIGZsb2F0aW5nOmJvb2xlYW49ZmFsc2U7XG5cbiAgICBhcm91bmRUbzpzdHJpbmc7IC8vIHBvc2l0aW9uIGRpYWxvZyBhcm91bmQgdG8gYW4gZWxlbWVudFxuXG4gICAgYW5jaG9yTmFtZTpzdHJpbmc9bnVsbDtcblxuICAgIG1hc2sgOiBzdHJpbmc9bnVsbDsgLy9udWxsLCd3aGl0ZScsJ2JsYWNrJ1xuXG4gICAgYXV0b0hpZGU6Ym9vbGVhbj1mYWxzZTtcblxuICAgIEVTQ0hpZGU6Ym9vbGVhbj10cnVlO1xuXG4gICAgVGltZUhpZGU6bnVtYmVyPTA7Ly9zZWNvbmRzIHRvIGhpZGVcblxuICAgIHRyYWNraW5nU2l6ZVBvc2l0aW9uOmJvb2xlYW49ZmFsc2U7XG5cbiAgICBhbmltYXRpb246c3RyaW5nPW51bGw7Ly9TbGlkZVRvcCxGYWRlSW5cblxuICAgIGdldCBQb3NpdGlvbigpe1xuICAgICAgICByZXR1cm4gdGhpcy5mbG9hdGluZyA/ICdmaXhlZCc6J2Fic29sdXRlJztcbiAgICB9XG5cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9