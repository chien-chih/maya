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
                            contentTop = -content.offsetWidth / 2;
                            break;
                        case AiModalAlign.End:
                            contentTop = -content.offsetWidth;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlNb2RhbC9BaU1vZGFsQ29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBR0EsV0FBWSxZQUFZO2dCQUNwQixpREFBSyxDQUFBO2dCQUFDLG1EQUFNLENBQUE7Z0JBQUMsNkNBQUcsQ0FBQTtZQUNwQixDQUFDLEVBRlcsWUFBWSxLQUFaLFlBQVksUUFFdkI7b0RBQUE7WUFFRDtnQkFFSSx5QkFBbUIsS0FBVyxFQUNsQixLQUFxQyxFQUNyQyxNQUFlO29CQUZmLHFCQUFrQixHQUFsQixTQUFrQjtvQkFDekIscUJBQTRDLEdBQTVDLFFBQTBCLFlBQVksQ0FBQyxLQUFLO29CQUM1QyxzQkFBc0IsR0FBdEIsVUFBc0I7b0JBRlIsVUFBSyxHQUFMLEtBQUssQ0FBTTtvQkFDbEIsVUFBSyxHQUFMLEtBQUssQ0FBZ0M7b0JBQ3JDLFdBQU0sR0FBTixNQUFNLENBQVM7Z0JBQzNCLENBQUM7Z0JBRU0scUJBQUssR0FBWixVQUFhLE1BQWU7b0JBQWYsc0JBQWUsR0FBZixVQUFlO29CQUN4QixNQUFNLENBQUMsSUFBSSxlQUFlLENBQUMsQ0FBQyxFQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQzVELENBQUM7Z0JBRU0sc0JBQU0sR0FBYixVQUFjLE1BQWU7b0JBQWYsc0JBQWUsR0FBZixVQUFlO29CQUN6QixNQUFNLENBQUMsSUFBSSxlQUFlLENBQUMsS0FBSyxFQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ2pFLENBQUM7Z0JBRU0sbUJBQUcsR0FBVixVQUFXLE1BQWU7b0JBQWYsc0JBQWUsR0FBZixVQUFlO29CQUN0QixNQUFNLENBQUMsSUFBSSxlQUFlLENBQUMsTUFBTSxFQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQy9ELENBQUM7Z0JBRUQscUNBQVcsR0FBWDtvQkFDSSxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO2dCQUNyRCxDQUFDO2dCQUVELHNDQUFZLEdBQVosVUFBYSxNQUFNLEVBQUMsT0FBTyxFQUFDLGFBQWE7b0JBQ3JDLElBQUksQ0FBQyxHQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7b0JBQ2pCLEVBQUUsQ0FBQSxDQUFDLGFBQWEsQ0FBQyxDQUFBLENBQUM7d0JBQ2QsSUFBSSxJQUFJLEdBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQzt3QkFDbEMsRUFBRSxDQUFBLENBQUMsT0FBTyxJQUFJLENBQUMsS0FBSyxJQUFJLFFBQVEsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBLENBQUM7NEJBQy9ELElBQUksS0FBSyxHQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUM7NEJBQ3BDLElBQUksTUFBTSxHQUFRLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQzs0QkFDckMsQ0FBQyxHQUFDLElBQUksR0FBRSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsR0FBQyxHQUFHLENBQUM7d0JBRWpDLENBQUM7d0JBQUEsSUFBSTs0QkFDRCxDQUFDLEdBQUMsSUFBSSxHQUFDLENBQUMsQ0FBQztvQkFDakIsQ0FBQztvQkFFRCxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksR0FBQyxDQUFDLENBQUM7b0JBQ3BCLElBQUksV0FBVyxHQUFDLENBQUMsQ0FBQztvQkFDbEIsTUFBTSxDQUFBLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBLENBQUM7d0JBQ2YsMEJBQTBCO3dCQUN4QixrQkFBa0I7d0JBQ2hCLFFBQVE7d0JBQ1osS0FBSyxZQUFZLENBQUMsTUFBTTs0QkFDcEIsV0FBVyxHQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRSxDQUFDLENBQUM7NEJBQ3BDLEtBQUssQ0FBQzt3QkFDVixLQUFLLFlBQVksQ0FBQyxHQUFHOzRCQUNqQixXQUFXLEdBQUMsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDOzRCQUNqQyxLQUFLLENBQUM7b0JBQ2QsQ0FBQztvQkFDRCxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksR0FBQyxXQUFXLEdBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztnQkFDL0MsQ0FBQztnQkFFRCxxQ0FBVyxHQUFYLFVBQVksTUFBTSxFQUFDLE9BQU8sRUFBQyxhQUFhO29CQUNwQyxJQUFJLENBQUMsR0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO29CQUNqQixFQUFFLENBQUEsQ0FBQyxhQUFhLENBQUMsQ0FBQSxDQUFDO3dCQUNkLElBQUksR0FBRyxHQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUM7d0JBQ2hDLEVBQUUsQ0FBQSxDQUFDLE9BQU8sSUFBSSxDQUFDLEtBQUssSUFBSSxRQUFRLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQSxDQUFDOzRCQUMvRCxJQUFJLE1BQU0sR0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDOzRCQUN0QyxJQUFJLE1BQU0sR0FBUSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7NEJBQ3JDLENBQUMsR0FBQyxHQUFHLEdBQUUsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLEdBQUMsR0FBRyxDQUFDO3dCQUVqQyxDQUFDO3dCQUFBLElBQUk7NEJBQ0QsQ0FBQyxHQUFDLEdBQUcsR0FBQyxDQUFDLENBQUM7b0JBQ2hCLENBQUM7b0JBRUQsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUMsQ0FBQyxDQUFDO29CQUNuQixJQUFJLFVBQVUsR0FBQyxDQUFDLENBQUM7b0JBQ2pCLE1BQU0sQ0FBQSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQSxDQUFDO3dCQUNmLDBCQUEwQjt3QkFDeEIsaUJBQWlCO3dCQUNmLFFBQVE7d0JBQ1osS0FBSyxZQUFZLENBQUMsTUFBTTs0QkFDcEIsVUFBVSxHQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRSxDQUFDLENBQUM7NEJBQ25DLEtBQUssQ0FBQzt3QkFDVixLQUFLLFlBQVksQ0FBQyxHQUFHOzRCQUNqQixVQUFVLEdBQUMsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDOzRCQUNoQyxLQUFLLENBQUM7b0JBQ2QsQ0FBQztvQkFDRCxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBQyxVQUFVLEdBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztnQkFDN0MsQ0FBQztnQkFFTCxzQkFBQztZQUFELENBakZBLEFBaUZDLElBQUE7WUFqRkQsNkNBaUZDLENBQUE7WUFFRDs7O2VBR0c7WUFFSDtnQkFBQTtvQkFFSSxNQUFDLEdBQWlCLGVBQWUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztvQkFFM0MsTUFBQyxHQUFpQixlQUFlLENBQUMsS0FBSyxFQUFFLENBQUM7b0JBRTFDLFVBQUssR0FBUSxJQUFJLENBQUM7b0JBRWxCLFdBQU0sR0FBUSxJQUFJLENBQUM7b0JBRW5CLGFBQVEsR0FBUyxLQUFLLENBQUM7b0JBSXZCLGVBQVUsR0FBUSxJQUFJLENBQUM7b0JBRXZCLFNBQUksR0FBVSxJQUFJLENBQUMsQ0FBQyxzQkFBc0I7b0JBRTFDLGFBQVEsR0FBUyxLQUFLLENBQUM7b0JBRXZCLFlBQU8sR0FBUyxJQUFJLENBQUM7b0JBRXJCLGFBQVEsR0FBUSxDQUFDLENBQUMsQ0FBQSxpQkFBaUI7b0JBRW5DLHlCQUFvQixHQUFTLEtBQUssQ0FBQztvQkFFbkMsY0FBUyxHQUFRLElBQUksQ0FBQyxDQUFBLGlCQUFpQjtnQkFNM0MsQ0FBQztnQkFKRyxzQkFBSSxtQ0FBUTt5QkFBWjt3QkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLEdBQUMsVUFBVSxDQUFDO29CQUM5QyxDQUFDOzs7bUJBQUE7Z0JBL0JMO29CQUFDLGlCQUFVLEVBQUU7O2lDQUFBO2dCQWlDYixvQkFBQztZQUFELENBaENBLEFBZ0NDLElBQUE7WUFoQ0QseUNBZ0NDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9BaU1vZGFsL0FpTW9kYWxDb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5cbmV4cG9ydCBlbnVtIEFpTW9kYWxBbGlnbntcbiAgICBCZWdpbixDZW50ZXIsRW5kXG59XG5cbmV4cG9ydCBjbGFzcyBBaU1vZGFsUG9zaXRpb257XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdmFsdWU6YW55PTBcbiAgICAgICAgLHB1YmxpYyBhbGlnbjpBaU1vZGFsQWxpZ249QWlNb2RhbEFsaWduLkJlZ2luXG4gICAgICAgICxwdWJsaWMgb2Zmc2V0Om51bWJlcj0wKSB7XG4gICAgfVxuXG4gICAgc3RhdGljIEJlZ2luKG9mZnNldDpudW1iZXI9MCl7XG4gICAgICAgIHJldHVybiBuZXcgQWlNb2RhbFBvc2l0aW9uKDAsQWlNb2RhbEFsaWduLkJlZ2luLG9mZnNldCk7XG4gICAgfVxuXG4gICAgc3RhdGljIENlbnRlcihvZmZzZXQ6bnVtYmVyPTApe1xuICAgICAgICByZXR1cm4gbmV3IEFpTW9kYWxQb3NpdGlvbignNTAlJyxBaU1vZGFsQWxpZ24uQ2VudGVyLG9mZnNldCk7XG4gICAgfVxuXG4gICAgc3RhdGljIEVuZChvZmZzZXQ6bnVtYmVyPTApe1xuICAgICAgICByZXR1cm4gbmV3IEFpTW9kYWxQb3NpdGlvbignMTAwJScsQWlNb2RhbEFsaWduLkVuZCxvZmZzZXQpO1xuICAgIH1cblxuICAgIG51bWJlclZhbHVlKCl7XG4gICAgICAgIHJldHVybiBOdW1iZXIodGhpcy52YWx1ZS5yZXBsYWNlKCclJywnJykudHJpbSgpKTtcbiAgICB9XG5cbiAgICBwb3NpdGlvbkxlZnQoZGlhbG9nLGNvbnRlbnQsdGFyZ2V0RWxlbWVudCl7XG4gICAgICAgIHZhciB4PXRoaXMudmFsdWU7XG4gICAgICAgIGlmKHRhcmdldEVsZW1lbnQpe1xuICAgICAgICAgICAgdmFyIGxlZnQ9dGFyZ2V0RWxlbWVudC5vZmZzZXRMZWZ0O1xuICAgICAgICAgICAgaWYodHlwZW9mIHRoaXMudmFsdWUgPT0gJ3N0cmluZycgJiYgdGhpcy52YWx1ZS5pbmRleE9mKCclJykgIT0gLTEpe1xuICAgICAgICAgICAgICAgIHZhciB3aWR0aD10YXJnZXRFbGVtZW50Lm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgICAgIHZhciBudmFsdWU6bnVtYmVyPXRoaXMubnVtYmVyVmFsdWUoKTtcbiAgICAgICAgICAgICAgICB4PWxlZnQrICh3aWR0aCAqIG52YWx1ZSkvMTAwO1xuXG4gICAgICAgICAgICB9ZWxzZVxuICAgICAgICAgICAgICAgIHg9bGVmdCt4O1xuICAgICAgICB9XG5cbiAgICAgICAgZGlhbG9nLnN0eWxlLmxlZnQ9eDtcbiAgICAgICAgbGV0IGNvbnRlbnRMZWZ0PTA7XG4gICAgICAgIHN3aXRjaCh0aGlzLmFsaWduKXtcbiAgICAgICAgICAgIC8vY2FzZSBBaU1vZGFsQWxpZ24uQmVnaW46XG4gICAgICAgICAgICAgIC8vICBjb250ZW50TGVmdD0wO1xuICAgICAgICAgICAgICAgIC8vYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFpTW9kYWxBbGlnbi5DZW50ZXI6XG4gICAgICAgICAgICAgICAgY29udGVudExlZnQ9LWNvbnRlbnQub2Zmc2V0V2lkdGggLzI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFpTW9kYWxBbGlnbi5FbmQ6XG4gICAgICAgICAgICAgICAgY29udGVudExlZnQ9LWNvbnRlbnQub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY29udGVudC5zdHlsZS5sZWZ0PWNvbnRlbnRMZWZ0K3RoaXMub2Zmc2V0O1xuICAgIH1cblxuICAgIHBvc2l0aW9uVG9wKGRpYWxvZyxjb250ZW50LHRhcmdldEVsZW1lbnQpe1xuICAgICAgICB2YXIgeT10aGlzLnZhbHVlO1xuICAgICAgICBpZih0YXJnZXRFbGVtZW50KXtcbiAgICAgICAgICAgIHZhciB0b3A9dGFyZ2V0RWxlbWVudC5vZmZzZXRUb3A7XG4gICAgICAgICAgICBpZih0eXBlb2YgdGhpcy52YWx1ZSA9PSAnc3RyaW5nJyAmJiB0aGlzLnZhbHVlLmluZGV4T2YoJyUnKSAhPSAtMSl7XG4gICAgICAgICAgICAgICAgdmFyIGhlaWdodD10YXJnZXRFbGVtZW50Lm9mZnNldEhlaWdodDtcbiAgICAgICAgICAgICAgICB2YXIgbnZhbHVlOm51bWJlcj10aGlzLm51bWJlclZhbHVlKCk7XG4gICAgICAgICAgICAgICAgeT10b3ArIChoZWlnaHQgKiBudmFsdWUpLzEwMDtcblxuICAgICAgICAgICAgfWVsc2VcbiAgICAgICAgICAgICAgICB5PXRvcCt5O1xuICAgICAgICB9XG5cbiAgICAgICAgZGlhbG9nLnN0eWxlLnRvcD15O1xuICAgICAgICBsZXQgY29udGVudFRvcD0wO1xuICAgICAgICBzd2l0Y2godGhpcy5hbGlnbil7XG4gICAgICAgICAgICAvL2Nhc2UgQWlNb2RhbEFsaWduLkJlZ2luOlxuICAgICAgICAgICAgICAvLyAgY29udGVudFRvcD0wO1xuICAgICAgICAgICAgICAgIC8vYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFpTW9kYWxBbGlnbi5DZW50ZXI6XG4gICAgICAgICAgICAgICAgY29udGVudFRvcD0tY29udGVudC5vZmZzZXRXaWR0aCAvMjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQWlNb2RhbEFsaWduLkVuZDpcbiAgICAgICAgICAgICAgICBjb250ZW50VG9wPS1jb250ZW50Lm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRlbnQuc3R5bGUudG9wPWNvbnRlbnRUb3ArdGhpcy5vZmZzZXQ7XG4gICAgfVxuXG59XG5cbi8qKlxuICogQSBjb25maWd1cmF0aW9uIGRlZmluaXRpb24gb2JqZWN0LlxuICogSW5zdHJ1Y3Rpb24gZm9yIGhvdyB0byBzaG93IGEgbW9kYWwuXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBaU1vZGFsQ29uZmlnIHtcblxuICAgIHg6QWlNb2RhbFBvc2l0aW9uPUFpTW9kYWxQb3NpdGlvbi5DZW50ZXIoKTtcblxuICAgIHk6QWlNb2RhbFBvc2l0aW9uPUFpTW9kYWxQb3NpdGlvbi5CZWdpbigpO1xuXG4gICAgd2lkdGg6c3RyaW5nPW51bGw7XG5cbiAgICBoZWlnaHQ6c3RyaW5nPW51bGw7XG5cbiAgICBmbG9hdGluZzpib29sZWFuPWZhbHNlO1xuXG4gICAgYXJvdW5kVG86c3RyaW5nOyAvLyBwb3NpdGlvbiBkaWFsb2cgYXJvdW5kIHRvIGFuIGVsZW1lbnRcblxuICAgIGFuY2hvck5hbWU6c3RyaW5nPW51bGw7XG5cbiAgICBtYXNrIDogc3RyaW5nPW51bGw7IC8vbnVsbCwnd2hpdGUnLCdibGFjaydcblxuICAgIGF1dG9IaWRlOmJvb2xlYW49ZmFsc2U7XG5cbiAgICBFU0NIaWRlOmJvb2xlYW49dHJ1ZTtcblxuICAgIFRpbWVIaWRlOm51bWJlcj0wOy8vc2Vjb25kcyB0byBoaWRlXG5cbiAgICB0cmFja2luZ1NpemVQb3NpdGlvbjpib29sZWFuPWZhbHNlO1xuXG4gICAgYW5pbWF0aW9uOnN0cmluZz1udWxsOy8vU2xpZGVUb3AsRmFkZUluXG5cbiAgICBnZXQgUG9zaXRpb24oKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmxvYXRpbmcgPyAnZml4ZWQnOidhYnNvbHV0ZSc7XG4gICAgfVxuXG59XG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
