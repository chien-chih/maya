System.register(['angular2/core'], function(exports_1) {
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
                AiModalPosition.Begin = function () {
                    return new AiModalPosition();
                };
                AiModalPosition.Center = function () {
                    return new AiModalPosition('50%', AiModalAlign.Center);
                };
                AiModalPosition.End = function () {
                    return new AiModalPosition('100%', AiModalAlign.End);
                };
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
            })();
            exports_1("AiModalPosition", AiModalPosition);
            /**
             * A configuration definition object.
             * Instruction for how to show a modal.
             */
            AiModalConfig = (function () {
                function AiModalConfig(keyboard) {
                    if (keyboard === void 0) { keyboard = undefined; }
                    this.x = AiModalPosition.Center();
                    this.y = AiModalPosition.Begin();
                    this.floating = false;
                    this.anchorName = null;
                    this.mask = null; //null,'white','black'
                    this.autoHide = false;
                    this.trackingSizePosition = false;
                    /**
                     * Keyboard value/s that close the modal.
                     * Accepts either a single numeric value or an array of numeric values.
                     * A modal closed by a keyboard stroke will result in a 'reject' notification from the promise.
                     * Defaults to 27, set `null` implicitly to disable.
                     */
                    this.keyboard = [27];
                }
                Object.defineProperty(AiModalConfig.prototype, "Position", {
                    get: function () {
                        return this.floating ? 'fixed' : 'absolute';
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Returns true if the config instance supports a given key.
                 * @param key
                 * @returns {boolean}
                 */
                AiModalConfig.prototype.supportsKey = function (keyCode) {
                    return this.keyboard.indexOf(keyCode) > -1;
                };
                AiModalConfig = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [Object])
                ], AiModalConfig);
                return AiModalConfig;
            })();
            exports_1("AiModalConfig", AiModalConfig);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlQb3B1cC9BaU1vZGFsQ29uZmlnLnRzIl0sIm5hbWVzIjpbIkFpTW9kYWxBbGlnbiIsIkFpTW9kYWxQb3NpdGlvbiIsIkFpTW9kYWxQb3NpdGlvbi5jb25zdHJ1Y3RvciIsIkFpTW9kYWxQb3NpdGlvbi5CZWdpbiIsIkFpTW9kYWxQb3NpdGlvbi5DZW50ZXIiLCJBaU1vZGFsUG9zaXRpb24uRW5kIiwiQWlNb2RhbFBvc2l0aW9uLm51bWJlck9mZnNldCIsIkFpTW9kYWxQb3NpdGlvbi5wb3NpdGlvbkxlZnQiLCJBaU1vZGFsUG9zaXRpb24ucG9zaXRpb25Ub3AiLCJBaU1vZGFsQ29uZmlnIiwiQWlNb2RhbENvbmZpZy5jb25zdHJ1Y3RvciIsIkFpTW9kYWxDb25maWcuUG9zaXRpb24iLCJBaU1vZGFsQ29uZmlnLnN1cHBvcnRzS2V5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFHQSxXQUFZLFlBQVk7Z0JBQ3BCQSxpREFBS0EsQ0FBQUE7Z0JBQUNBLG1EQUFNQSxDQUFBQTtnQkFBQ0EsNkNBQUdBLENBQUFBO1lBQ3BCQSxDQUFDQSxFQUZXLFlBQVksS0FBWixZQUFZLFFBRXZCO29EQUFBO1lBRUQ7Z0JBTUlDLHlCQUFZQSxNQUFZQSxFQUFDQSxLQUFxQ0E7b0JBQWxEQyxzQkFBWUEsR0FBWkEsVUFBWUE7b0JBQUNBLHFCQUFxQ0EsR0FBckNBLFFBQW1CQSxZQUFZQSxDQUFDQSxLQUFLQTtvQkFDMURBLElBQUlBLENBQUNBLE1BQU1BLEdBQUNBLE1BQU1BLENBQUNBO29CQUNuQkEsSUFBSUEsQ0FBQ0EsS0FBS0EsR0FBQ0EsS0FBS0EsQ0FBQ0E7Z0JBQ3JCQSxDQUFDQTtnQkFFTUQscUJBQUtBLEdBQVpBO29CQUNJRSxNQUFNQSxDQUFDQSxJQUFJQSxlQUFlQSxFQUFFQSxDQUFDQTtnQkFDakNBLENBQUNBO2dCQUVNRixzQkFBTUEsR0FBYkE7b0JBQ0lHLE1BQU1BLENBQUNBLElBQUlBLGVBQWVBLENBQUNBLEtBQUtB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d0JBQTRDQSxHQUE1Q0Esb0JBQTRDQTtvQkExQmhEQSxNQUFDQSxHQUFpQkEsZUFBZUEsQ0FBQ0EsTUFBTUEsRUFBRUEsQ0FBQ0E7b0JBRTNDQSxNQUFDQSxHQUFpQkEsZUFBZUEsQ0FBQ0EsS0FBS0EsRUFBRUEsQ0FBQ0E7b0JBRTFDQSxhQUFRQSxHQUFTQSxLQUFLQSxDQUFDQTtvQkFJdkJBLGVBQVVBLEdBQVFBLElBQUlBLENBQUNBO29CQUV2QkEsU0FBSUEsR0FBVUEsSUFBSUEsQ0FBQ0EsQ0FBQ0Esc0JBQXNCQTtvQkFFMUNBLGFBQVFBLEdBQVNBLEtBQUtBLENBQUNBO29CQUV2QkEseUJBQW9CQSxHQUFTQSxLQUFLQSxDQUFDQTtvQkFFbkNBOzs7Ozt1QkFLR0E7b0JBQ0hBLGFBQVFBLEdBQXlCQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQTtnQkFLdENBLENBQUNBO2dCQUVERCxzQkFBSUEsbUNBQVFBO3lCQUFaQTt3QkFDSUUsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsT0FBT0EsR0FBQ0EsVUFBVUEsQ0FBQ0E7b0JBQzlDQSxDQUFDQTs7O21CQUFBRjtnQkFHREE7Ozs7bUJBSUdBO2dCQUNIQSxtQ0FBV0EsR0FBWEEsVUFBWUEsT0FBZUE7b0JBQ3ZCRyxNQUFNQSxDQUFpQkEsSUFBSUEsQ0FBQ0EsUUFBU0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ2hFQSxDQUFDQTtnQkE1Q0xIO29CQUFDQSxpQkFBVUEsRUFBRUE7O2tDQTZDWkE7Z0JBQURBLG9CQUFDQTtZQUFEQSxDQTdDQSxBQTZDQ0EsSUFBQTtZQTdDRCx5Q0E2Q0MsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL0FpUG9wdXAvQWlNb2RhbENvbmZpZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cblxuZXhwb3J0IGVudW0gQWlNb2RhbEFsaWdue1xuICAgIEJlZ2luLENlbnRlcixFbmRcbn0gICAgXG5cbmV4cG9ydCBjbGFzcyBBaU1vZGFsUG9zaXRpb257XG4gICAgXG4gICAgb2Zmc2V0OmFueTtcbiAgICBcbiAgICBhbGlnbjpBaU1vZGFsQWxpZ247XG4gICAgXG4gICAgY29uc3RydWN0b3Iob2Zmc2V0OmFueT0wLGFsaWduOkFpTW9kYWxBbGlnbj1BaU1vZGFsQWxpZ24uQmVnaW4pIHtcbiAgICAgICAgdGhpcy5vZmZzZXQ9b2Zmc2V0O1xuICAgICAgICB0aGlzLmFsaWduPWFsaWduO1xuICAgIH1cblxuICAgIHN0YXRpYyBCZWdpbigpe1xuICAgICAgICByZXR1cm4gbmV3IEFpTW9kYWxQb3NpdGlvbigpO1xuICAgIH1cblxuICAgIHN0YXRpYyBDZW50ZXIoKXtcbiAgICAgICAgcmV0dXJuIG5ldyBBaU1vZGFsUG9zaXRpb24oJzUwJScsQWlNb2RhbEFsaWduLkNlbnRlcik7XG4gICAgfVxuXG4gICAgc3RhdGljIEVuZCgpe1xuICAgICAgICByZXR1cm4gbmV3IEFpTW9kYWxQb3NpdGlvbignMTAwJScsQWlNb2RhbEFsaWduLkVuZCk7XG4gICAgfVxuXG4gICAgbnVtYmVyT2Zmc2V0KCl7XG4gICAgICAgIHJldHVybiBOdW1iZXIodGhpcy5vZmZzZXQucmVwbGFjZSgnJScsJycpLnRyaW0oKSk7XG4gICAgfVxuXG4gICAgcG9zaXRpb25MZWZ0KGRpYWxvZyxjb250ZW50LHRhcmdldEVsZW1lbnQpe1xuICAgICAgICAgXG4gICAgICAgIHZhciB4PXRoaXMub2Zmc2V0O1xuICAgICAgICBpZih0YXJnZXRFbGVtZW50KXtcbiAgICAgICAgICAgIHZhciBsZWZ0PXRhcmdldEVsZW1lbnQub2Zmc2V0TGVmdDtcbiAgICAgICAgICAgIGlmKHR5cGVvZiB0aGlzLm9mZnNldCA9PSAnc3RyaW5nJyAmJiB0aGlzLm9mZnNldC5pbmRleE9mKCclJykgIT0gLTEpe1xuICAgICAgICAgICAgICAgIHZhciB3aWR0aD10YXJnZXRFbGVtZW50Lm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgICAgIHZhciBub2Zmc2V0Om51bWJlcj10aGlzLm51bWJlck9mZnNldCgpO1xuICAgICAgICAgICAgICAgIHg9bGVmdCsgKHdpZHRoICogbm9mZnNldCkvMTAwO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfWVsc2VcbiAgICAgICAgICAgICAgICB4PWxlZnQreDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgZGlhbG9nLnN0eWxlLmxlZnQ9eDtcbiAgICAgICAgc3dpdGNoKHRoaXMuYWxpZ24pe1xuICAgICAgICAgICAgY2FzZSBBaU1vZGFsQWxpZ24uQmVnaW46XG4gICAgICAgICAgICAgICAgY29udGVudC5zdHlsZS5sZWZ0PTA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFpTW9kYWxBbGlnbi5DZW50ZXI6XG4gICAgICAgICAgICAgICAgY29udGVudC5zdHlsZS5sZWZ0PS1jb250ZW50Lm9mZnNldFdpZHRoIC8yO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBaU1vZGFsQWxpZ24uRW5kOlxuICAgICAgICAgICAgICAgIGNvbnRlbnQuc3R5bGUubGVmdD0tY29udGVudC5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBvc2l0aW9uVG9wKGRpYWxvZyxjb250ZW50LHRhcmdldEVsZW1lbnQpe1xuICAgICAgICB2YXIgeT10aGlzLm9mZnNldDtcbiAgICAgICAgaWYodGFyZ2V0RWxlbWVudCl7XG4gICAgICAgICAgICB2YXIgdG9wPXRhcmdldEVsZW1lbnQub2Zmc2V0VG9wO1xuICAgICAgICAgICAgaWYodHlwZW9mIHRoaXMub2Zmc2V0ID09ICdzdHJpbmcnICYmIHRoaXMub2Zmc2V0LmluZGV4T2YoJyUnKSAhPSAtMSl7XG4gICAgICAgICAgICAgICAgdmFyIGhlaWdodD10YXJnZXRFbGVtZW50Lm9mZnNldEhlaWdodDtcbiAgICAgICAgICAgICAgICB2YXIgbm9mZnNldDpudW1iZXI9dGhpcy5udW1iZXJPZmZzZXQoKTtcbiAgICAgICAgICAgICAgICB5PXRvcCsgKGhlaWdodCAqIG5vZmZzZXQpLzEwMDtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1lbHNlXG4gICAgICAgICAgICAgICAgeT10b3AreTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgZGlhbG9nLnN0eWxlLnRvcD15OyAgICAgICAgICAgIFxuICAgICAgICBzd2l0Y2godGhpcy5hbGlnbil7XG4gICAgICAgICAgICBjYXNlIEFpTW9kYWxBbGlnbi5CZWdpbjpcbiAgICAgICAgICAgICAgICBjb250ZW50LnN0eWxlLnRvcD0wO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBaU1vZGFsQWxpZ24uQ2VudGVyOlxuICAgICAgICAgICAgICAgIGNvbnRlbnQuc3R5bGUudG9wPS1jb250ZW50Lm9mZnNldFdpZHRoIC8yO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBaU1vZGFsQWxpZ24uRW5kOlxuICAgICAgICAgICAgICAgIGNvbnRlbnQuc3R5bGUudG9wPS1jb250ZW50Lm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG59XG5cbi8qKlxuICogQSBjb25maWd1cmF0aW9uIGRlZmluaXRpb24gb2JqZWN0LlxuICogSW5zdHJ1Y3Rpb24gZm9yIGhvdyB0byBzaG93IGEgbW9kYWwuXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBaU1vZGFsQ29uZmlnIHtcblxuICAgIHg6QWlNb2RhbFBvc2l0aW9uPUFpTW9kYWxQb3NpdGlvbi5DZW50ZXIoKTtcbiAgICBcbiAgICB5OkFpTW9kYWxQb3NpdGlvbj1BaU1vZGFsUG9zaXRpb24uQmVnaW4oKTtcblxuICAgIGZsb2F0aW5nOmJvb2xlYW49ZmFsc2U7XG5cbiAgICBhcm91bmRUbzpzdHJpbmc7IC8vIHBvc2l0aW9uIGRpYWxvZyBhcm91bmQgdG8gYW4gZWxlbWVudFxuXG4gICAgYW5jaG9yTmFtZTpzdHJpbmc9bnVsbDtcblxuICAgIG1hc2sgOiBzdHJpbmc9bnVsbDsgLy9udWxsLCd3aGl0ZScsJ2JsYWNrJ1xuICAgIFxuICAgIGF1dG9IaWRlOmJvb2xlYW49ZmFsc2U7XG5cbiAgICB0cmFja2luZ1NpemVQb3NpdGlvbjpib29sZWFuPWZhbHNlOyAgICBcblxuICAgIC8qKlxuICAgICAqIEtleWJvYXJkIHZhbHVlL3MgdGhhdCBjbG9zZSB0aGUgbW9kYWwuXG4gICAgICogQWNjZXB0cyBlaXRoZXIgYSBzaW5nbGUgbnVtZXJpYyB2YWx1ZSBvciBhbiBhcnJheSBvZiBudW1lcmljIHZhbHVlcy5cbiAgICAgKiBBIG1vZGFsIGNsb3NlZCBieSBhIGtleWJvYXJkIHN0cm9rZSB3aWxsIHJlc3VsdCBpbiBhICdyZWplY3QnIG5vdGlmaWNhdGlvbiBmcm9tIHRoZSBwcm9taXNlLlxuICAgICAqIERlZmF1bHRzIHRvIDI3LCBzZXQgYG51bGxgIGltcGxpY2l0bHkgdG8gZGlzYWJsZS5cbiAgICAgKi9cbiAgICBrZXlib2FyZDogQXJyYXk8bnVtYmVyPiB8IG51bWJlcj1bMjddO1xuXG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAga2V5Ym9hcmQ6IEFycmF5PG51bWJlcj4gfCBudW1iZXIgPSB1bmRlZmluZWQpIHtcbiAgICB9XG5cbiAgICBnZXQgUG9zaXRpb24oKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmxvYXRpbmcgPyAnZml4ZWQnOidhYnNvbHV0ZSc7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIGNvbmZpZyBpbnN0YW5jZSBzdXBwb3J0cyBhIGdpdmVuIGtleS5cbiAgICAgKiBAcGFyYW0ga2V5XG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgc3VwcG9ydHNLZXkoa2V5Q29kZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAoPEFycmF5PG51bWJlcj4+dGhpcy5rZXlib2FyZCkuaW5kZXhPZihrZXlDb2RlKSA+IC0xO1xuICAgIH1cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
