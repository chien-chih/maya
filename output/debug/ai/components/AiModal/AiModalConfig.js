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
                function AiModalPosition(value, align, offset) {
                    if (value === void 0) { value = 0; }
                    if (align === void 0) { align = AiModalAlign.Begin; }
                    if (offset === void 0) { offset = 0; }
                    this.value = value;
                    this.align = align;
                    this.offset = offset;
                }
                AiModalPosition.Begin = function (offset) {
                    if (offset === void 0) { offset = 0; }
                    return new AiModalPosition(0, AiModalAlign.Begin, offset);
                };
                AiModalPosition.Center = function (offset) {
                    if (offset === void 0) { offset = 0; }
                    return new AiModalPosition('50%', AiModalAlign.Center, offset);
                };
                AiModalPosition.End = function (offset) {
                    if (offset === void 0) { offset = 0; }
                    return new AiModalPosition('100%', AiModalAlign.End, offset);
                };
                AiModalPosition.prototype.numberValue = function () {
                    return Number(this.value.replace('%', '').trim());
                };
                AiModalPosition.prototype.positionLeft = function (dialog, content, targetElement) {
                    var x = this.value;
                    if (targetElement) {
                        var left = targetElement.offsetLeft;
                        if (typeof this.value == 'string' && this.value.indexOf('%') != -1) {
                            var width = targetElement.offsetWidth;
                            var nvalue = this.numberValue();
                            x = left + (width * nvalue) / 100;
                        }
                        else
                            x = left + x;
                    }
                    dialog.style.left = x;
                    var contentLeft = 0;
                    switch (this.align) {
                        //case AiModalAlign.Begin:
                        //  contentLeft=0;
                        //break;
                        case AiModalAlign.Center:
                            contentLeft = -content.offsetWidth / 2;
                            break;
                        case AiModalAlign.End:
                            contentLeft = -content.offsetWidth;
                            break;
                    }
                    content.style.left = contentLeft + this.offset;
                };
                AiModalPosition.prototype.positionTop = function (dialog, content, targetElement) {
                    var y = this.value;
                    if (targetElement) {
                        var top = targetElement.offsetTop;
                        if (typeof this.value == 'string' && this.value.indexOf('%') != -1) {
                            var height = targetElement.offsetHeight;
                            var nvalue = this.numberValue();
                            y = top + (height * nvalue) / 100;
                        }
                        else
                            y = top + y;
                    }
                    dialog.style.top = y;
                    var contentTop = 0;
                    switch (this.align) {
                        //case AiModalAlign.Begin:
                        //  contentTop=0;
                        //break;
                        case AiModalAlign.Center:
                            contentTop = -content.offsetHeight / 2;
                            break;
                        case AiModalAlign.End:
                            contentTop = -content.offsetHeight;
                            break;
                    }
                    content.style.top = contentTop + this.offset;
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
                    this.x = AiModalPosition.Center();
                    this.y = AiModalPosition.Begin();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlNb2RhbC9BaU1vZGFsQ29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBR0EsV0FBWSxZQUFZO2dCQUNwQixpREFBSyxDQUFBO2dCQUFDLG1EQUFNLENBQUE7Z0JBQUMsNkNBQUcsQ0FBQTtZQUNwQixDQUFDLEVBRlcsWUFBWSxLQUFaLFlBQVksUUFFdkI7b0RBQUE7WUFFRDtnQkFFSSx5QkFBbUIsS0FBVyxFQUNsQixLQUFxQyxFQUNyQyxNQUFlO29CQUZmLHFCQUFrQixHQUFsQixTQUFrQjtvQkFDekIscUJBQTRDLEdBQTVDLFFBQTBCLFlBQVksQ0FBQyxLQUFLO29CQUM1QyxzQkFBc0IsR0FBdEIsVUFBc0I7b0JBRlIsVUFBSyxHQUFMLEtBQUssQ0FBTTtvQkFDbEIsVUFBSyxHQUFMLEtBQUssQ0FBZ0M7b0JBQ3JDLFdBQU0sR0FBTixNQUFNLENBQVM7Z0JBQzNCLENBQUM7Z0JBRU0scUJBQUssR0FBWixVQUFhLE1BQWU7b0JBQWYsc0JBQWUsR0FBZixVQUFlO29CQUN4QixNQUFNLENBQUMsSUFBSSxlQUFlLENBQUMsQ0FBQyxFQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQzVELENBQUM7Z0JBRU0sc0JBQU0sR0FBYixVQUFjLE1BQWU7b0JBQWYsc0JBQWUsR0FBZixVQUFlO29CQUN6QixNQUFNLENBQUMsSUFBSSxlQUFlLENBQUMsS0FBSyxFQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ2pFLENBQUM7Z0JBRU0sbUJBQUcsR0FBVixVQUFXLE1BQWU7b0JBQWYsc0JBQWUsR0FBZixVQUFlO29CQUN0QixNQUFNLENBQUMsSUFBSSxlQUFlLENBQUMsTUFBTSxFQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQy9ELENBQUM7Z0JBRUQscUNBQVcsR0FBWDtvQkFDSSxNQUFNLENBQUMsTUFBTSxD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cy9BaU1vZGFsL0FpTW9kYWxDb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5cbmV4cG9ydCBlbnVtIEFpTW9kYWxBbGlnbntcbiAgICBCZWdpbixDZW50ZXIsRW5kXG59XG5cbmV4cG9ydCBjbGFzcyBBaU1vZGFsUG9zaXRpb257XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdmFsdWU6YW55PTBcbiAgICAgICAgLHB1YmxpYyBhbGlnbjpBaU1vZGFsQWxpZ249QWlNb2RhbEFsaWduLkJlZ2luXG4gICAgICAgICxwdWJsaWMgb2Zmc2V0Om51bWJlcj0wKSB7XG4gICAgfVxuXG4gICAgc3RhdGljIEJlZ2luKG9mZnNldDpudW1iZXI9MCl7XG4gICAgICAgIHJldHVybiBuZXcgQWlNb2RhbFBvc2l0aW9uKDAsQWlNb2RhbEFsaWduLkJlZ2luLG9mZnNldCk7XG4gICAgfVxuXG4gICAgc3RhdGljIENlbnRlcihvZmZzZXQ6bnVtYmVyPTApe1xuICAgICAgICByZXR1cm4gbmV3IEFpTW9kYWxQb3NpdGlvbignNTAlJyxBaU1vZGFsQWxpZ24uQ2VudGVyLG9mZnNldCk7XG4gICAgfVxuXG4gICAgc3RhdGljIEVuZChvZmZzZXQ6bnVtYmVyPTApe1xuICAgICAgICByZXR1cm4gbmV3IEFpTW9kYWxQb3NpdGlvbignMTAwJScsQWlNb2RhbEFsaWduLkVuZCxvZmZzZXQpO1xuICAgIH1cblxuICAgIG51bWJlclZhbHVlKCl7XG4gICAgICAgIHJldHVybiBOdW1iZXIodGhpcy52YWx1ZS5yZXBsYWNlKCclJywnJykudHJpbSgpKTtcbiAgICB9XG5cbiAgICBwb3NpdGlvbkxlZnQoZGlhbG9nLGNvbnRlbnQsdGFyZ2V0RWxlbWVudCl7XG4gICAgICAgIHZhciB4PXRoaXMudmFsdWU7XG4gICAgICAgIGlmKHRhcmdldEVsZW1lbnQpe1xuICAgICAgICAgICAgdmFyIGxlZnQ9dGFyZ2V0RWxlbWVudC5vZmZzZXRMZWZ0O1xuICAgICAgICAgICAgaWYodHlwZW9mIHRoaXMudmFsdWUgPT0gJ3N0cmluZycgJiYgdGhpcy52YWx1ZS5pbmRleE9mKCclJykgIT0gLTEpe1xuICAgICAgICAgICAgICAgIHZhciB3aWR0aD10YXJnZXRFbGVtZW50Lm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgICAgIHZhciBudmFsdWU6bnVtYmVyPXRoaXMubnVtYmVyVmFsdWUoKTtcbiAgICAgICAgICAgICAgICB4PWxlZnQrICh3aWR0aCAqIG52YWx1ZSkvMTAwO1xuXG4gICAgICAgICAgICB9ZWxzZVxuICAgICAgICAgICAgICAgIHg9bGVmdCt4O1xuICAgICAgICB9XG5cbiAgICAgICAgZGlhbG9nLnN0eWxlLmxlZnQ9eDtcbiAgICAgICAgbGV0IGNvbnRlbnRMZWZ0PTA7XG4gICAgICAgIHN3aXRjaCh0aGlzLmFsaWduKXtcbiAgICAgICAgICAgIC8vY2FzZSBBaU1vZGFsQWxpZ24uQmVnaW46XG4gICAgICAgICAgICAgIC8vICBjb250ZW50TGVmdD0wO1xuICAgICAgICAgICAgICAgIC8vYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFpTW9kYWxBbGlnbi5DZW50ZXI6XG4gICAgICAgICAgICAgICAgY29udGVudExlZnQ9LWNvbnRlbnQub2Zmc2V0V2lkdGggLzI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFpTW9kYWxBbGlnbi5FbmQ6XG4gICAgICAgICAgICAgICAgY29udGVudExlZnQ9LWNvbnRlbnQub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY29udGVudC5zdHlsZS5sZWZ0PWNvbnRlbnRMZWZ0K3RoaXMub2Zmc2V0O1xuICAgIH1cblxuICAgIHBvc2l0aW9uVG9wKGRpYWxvZyxjb250ZW50LHRhcmdldEVsZW1lbnQpe1xuXG4gICAgICAgIHZhciB5PXRoaXMudmFsdWU7XG4gICAgICAgIGlmKHRhcmdldEVsZW1lbnQpe1xuICAgICAgICAgICAgdmFyIHRvcD10YXJnZXRFbGVtZW50Lm9mZnNldFRvcDtcbiAgICAgICAgICAgIGlmKHR5cGVvZiB0aGlzLnZhbHVlID09ICdzdHJpbmcnICYmIHRoaXMudmFsdWUuaW5kZXhPZignJScpICE9IC0xKXtcbiAgICAgICAgICAgICAgICB2YXIgaGVpZ2h0PXRhcmdldEVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICAgICAgICAgICAgICAgIHZhciBudmFsdWU6bnVtYmVyPXRoaXMubnVtYmVyVmFsdWUoKTtcbiAgICAgICAgICAgICAgICB5PXRvcCsgKGhlaWdodCAqIG52YWx1ZSkvMTAwO1xuXG4gICAgICAgICAgICB9ZWxzZVxuICAgICAgICAgICAgICAgIHk9dG9wK3k7XG4gICAgICAgIH1cblxuICAgICAgICBkaWFsb2cuc3R5bGUudG9wPXk7XG4gICAgICAgIGxldCBjb250ZW50VG9wPTA7XG4gICAgICAgIHN3aXRjaCh0aGlzLmFsaWduKXtcbiAgICAgICAgICAgIC8vY2FzZSBBaU1vZGFsQWxpZ24uQmVnaW46XG4gICAgICAgICAgICAgIC8vICBjb250ZW50VG9wPTA7XG4gICAgICAgICAgICAgICAgLy9icmVhaztcbiAgICAgICAgICAgIGNhc2UgQWlNb2RhbEFsaWduLkNlbnRlcjpcbiAgICAgICAgICAgICAgICBjb250ZW50VG9wPS1jb250ZW50Lm9mZnNldEhlaWdodCAvMjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQWlNb2RhbEFsaWduLkVuZDpcbiAgICAgICAgICAgICAgICBjb250ZW50VG9wPS1jb250ZW50Lm9mZnNldEhlaWdodDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjb250ZW50LnN0eWxlLnRvcD1jb250ZW50VG9wK3RoaXMub2Zmc2V0O1xuICAgIH1cblxufVxuXG4vKipcbiAqIEEgY29uZmlndXJhdGlvbiBkZWZpbml0aW9uIG9iamVjdC5cbiAqIEluc3RydWN0aW9uIGZvciBob3cgdG8gc2hvdyBhIG1vZGFsLlxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQWlNb2RhbENvbmZpZyB7XG5cbiAgICB4OkFpTW9kYWxQb3NpdGlvbj1BaU1vZGFsUG9zaXRpb24uQ2VudGVyKCk7XG5cbiAgICB5OkFpTW9kYWxQb3NpdGlvbj1BaU1vZGFsUG9zaXRpb24uQmVnaW4oKTtcblxuICAgIHdpZHRoOnN0cmluZz1udWxsO1xuXG4gICAgaGVpZ2h0OnN0cmluZz1udWxsO1xuXG4gICAgZmxvYXRpbmc6Ym9vbGVhbj1mYWxzZTtcblxuICAgIGFyb3VuZFRvOnN0cmluZzsgLy8gcG9zaXRpb24gZGlhbG9nIGFyb3VuZCB0byBhbiBlbGVtZW50XG5cbiAgICBhbmNob3JOYW1lOnN0cmluZz1udWxsO1xuXG4gICAgbWFzayA6IHN0cmluZz1udWxsOyAvL251bGwsJ3doaXRlJywnYmxhY2snXG5cbiAgICBhdXRvSGlkZTpib29sZWFuPWZhbHNlO1xuXG4gICAgRVNDSGlkZTpib29sZWFuPXRydWU7XG5cbiAgICBUaW1lSGlkZTpudW1iZXI9MDsvL3NlY29uZHMgdG8gaGlkZVxuXG4gICAgdHJhY2tpbmdTaXplUG9zaXRpb246Ym9vbGVhbj1mYWxzZTtcblxuICAgIGFuaW1hdGlvbjpzdHJpbmc9bnVsbDsvL1NsaWRlVG9wLEZhZGVJblxuXG4gICAgZ2V0IFBvc2l0aW9uKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmZsb2F0aW5nID8gJ2ZpeGVkJzonYWJzb2x1dGUnO1xuICAgIH1cblxufVxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
