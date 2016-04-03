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
            })();
            exports_1("AiModalPosition", AiModalPosition);
            /**
             * A configuration definition object.
             * Instruction for how to show a modal.
             */
            AiModalConfig = (function () {
                function AiModalConfig(keyboard) {
                    if (keyboard === void 0) { keyboard = undefined; }
                    this.x = AiModalPosition.Center;
                    this.y = AiModalPosition.Begin;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlNb2RhbC9BaU1vZGFsQ29uZmlnLnRzIl0sIm5hbWVzIjpbIkFpTW9kYWxBbGlnbiIsIkFpTW9kYWxQb3NpdGlvbiIsIkFpTW9kYWxQb3NpdGlvbi5jb25zdHJ1Y3RvciIsIkFpTW9kYWxQb3NpdGlvbi5CZWdpbiIsIkFpTW9kYWxQb3NpdGlvbi5DZW50ZXIiLCJBaU1vZGFsUG9zaXRpb24uRW5kIiwiQWlNb2RhbFBvc2l0aW9uLm51bWJlck9mZnNldCIsIkFpTW9kYWxQb3NpdGlvbi5wb3NpdGlvbkxlZnQiLCJBaU1vZGFsUG9zaXRpb24ucG9zaXRpb25Ub3AiLCJBaU1vZGFsQ29uZmlnIiwiQWlNb2RhbENvbmZpZy5jb25zdHJ1Y3RvciIsIkFpTW9kYWxDb25maWcuUG9zaXRpb24iLCJBaU1vZGFsQ29uZmlnLnN1cHBvcnRzS2V5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFHQSxXQUFZLFlBQVk7Z0JBQ3BCQSxpREFBS0EsQ0FBQUE7Z0JBQUNBLG1EQUFNQSxDQUFBQTtnQkFBQ0EsNkNBQUdBLENBQUFBO1lBQ3BCQSxDQUFDQSxFQUZXLFlBQVksS0FBWixZQUFZLFFBRXZCO29EQUFBO1lBRUQ7Z0JBTUlDLHlCQUFZQSxNQUFZQSxFQUFDQSxLQUFxQ0E7b0JBQWxEQyxzQkFBWUEsR0FBWkEsVUFBWUE7b0JBQUNBLHFCQUFxQ0EsR0FBckNBLFFBQW1CQSxZQUFZQSxDQUFDQSxLQUFLQTtvQkFDMURBLElBQUlBLENBQUNBLE1BQU1BLEdBQUNBLE1BQU1BLENBQUNBO29CQUNuQkEsSUFBSUEsQ0FBQ0EsS0FBS0EsR0FBQ0EsS0FBS0EsQ0FBQ0E7Z0JBQ3JCQSxDQUFDQTtnQkFHREQsc0JBQVdBLHdCQUFLQTt5QkFBaEJBO3dCQUNJRSxNQUFNQSxDQUFDQSxJQUFJQSxlQUFlQSxFQUFFQSxDQUFDQTtvQkFDakNBLENBQUNBOzs7bUJBQUFGO2dCQUVEQSxzQkFBV0EseUJBQU1BO3lCQUFqQkE7d0JBQ0lHLE1BQU1BLENB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LENBQUE7WUFFRDs7O2VBR0c7WUFDSDtnQkE0QklRLHVCQUNJQSxRQUE0Q0E7b0JBQTVDQyx3QkFBNENBLEdBQTVDQSxvQkFBNENBO29CQTFCaERBLE1BQUNBLEdBQWlCQSxlQUFlQSxDQUFDQSxNQUFNQSxDQUFDQTtvQkFFekNBLE1BQUNBLEdBQWlCQSxlQUFlQSxDQUFDQSxLQUFLQSxDQUFDQTtvQkFFeENBLGFBQVFBLEdBQVNBLEtBQUtBLENBQUNBO29CQUl2QkEsZUFBVUEsR0FBUUEsSUFBSUEsQ0FBQ0E7b0JBRXZCQSxTQUFJQSxHQUFVQSxJQUFJQSxDQUFDQSxDQUFDQSxzQkFBc0JBO29CQUUxQ0EsYUFBUUEsR0FBU0EsS0FBS0EsQ0FBQ0E7b0JBRXZCQSx5QkFBb0JBLEdBQVNBLEtBQUtBLENBQUNBO29CQUVuQ0E7Ozs7O3VCQUtHQTtvQkFDSEEsYUFBUUEsR0FBeUJBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBO2dCQUt0Q0EsQ0FBQ0E7Z0JBRURELHNCQUFJQSxtQ0FBUUE7eUJBQVpBO3dCQUNJRSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxPQUFPQSxHQUFDQSxVQUFVQSxDQUFDQTtvQkFDOUNBLENBQUNBOzs7bUJBQUFGO2dCQUdEQTs7OzttQkFJR0E7Z0JBQ0hBLG1DQUFXQSxHQUFYQSxVQUFZQSxPQUFlQTtvQkFDdkJHLE1BQU1BLENBQWlCQSxJQUFJQSxDQUFDQSxRQUFTQSxDQUFDQSxPQUFPQSxDQUFDQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDaEVBLENBQUNBO2dCQTVDTEg7b0JBQUNBLGlCQUFVQSxFQUFFQTs7a0NBNkNaQTtnQkFBREEsb0JBQUNBO1lBQURBLENBN0NBLEFBNkNDQSxJQUFBO1lBN0NELHlDQTZDQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvQWlNb2RhbC9BaU1vZGFsQ29uZmlnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcblxuXG5leHBvcnQgZW51bSBBaU1vZGFsQWxpZ257XG4gICAgQmVnaW4sQ2VudGVyLEVuZFxufSAgICBcblxuZXhwb3J0IGNsYXNzIEFpTW9kYWxQb3NpdGlvbntcbiAgICBcbiAgICBvZmZzZXQ6YW55O1xuICAgIFxuICAgIGFsaWduOkFpTW9kYWxBbGlnbjtcbiAgICBcbiAgICBjb25zdHJ1Y3RvcihvZmZzZXQ6YW55PTAsYWxpZ246QWlNb2RhbEFsaWduPUFpTW9kYWxBbGlnbi5CZWdpbikge1xuICAgICAgICB0aGlzLm9mZnNldD1vZmZzZXQ7XG4gICAgICAgIHRoaXMuYWxpZ249YWxpZ247XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgZ2V0IEJlZ2luKCl7XG4gICAgICAgIHJldHVybiBuZXcgQWlNb2RhbFBvc2l0aW9uKCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBDZW50ZXIoKXtcbiAgICAgICAgcmV0dXJuIG5ldyBBaU1vZGFsUG9zaXRpb24oJzUwJScsQWlNb2RhbEFsaWduLkNlbnRlcik7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBFbmQoKXtcbiAgICAgICAgcmV0dXJuIG5ldyBBaU1vZGFsUG9zaXRpb24oJzEwMCUnLEFpTW9kYWxBbGlnbi5FbmQpO1xuICAgIH1cblxuICAgIG51bWJlck9mZnNldCgpe1xuICAgICAgICByZXR1cm4gTnVtYmVyKHRoaXMub2Zmc2V0LnJlcGxhY2UoJyUnLCcnKS50cmltKCkpO1xuICAgIH1cblxuICAgIHBvc2l0aW9uTGVmdChkaWFsb2csY29udGVudCx0YXJnZXRFbGVtZW50KXtcbiAgICAgICAgIFxuICAgICAgICB2YXIgeD10aGlzLm9mZnNldDtcbiAgICAgICAgaWYodGFyZ2V0RWxlbWVudCl7XG4gICAgICAgICAgICB2YXIgbGVmdD10YXJnZXRFbGVtZW50Lm9mZnNldExlZnQ7XG4gICAgICAgICAgICBpZih0eXBlb2YgdGhpcy5vZmZzZXQgPT0gJ3N0cmluZycgJiYgdGhpcy5vZmZzZXQuaW5kZXhPZignJScpICE9IC0xKXtcbiAgICAgICAgICAgICAgICB2YXIgd2lkdGg9dGFyZ2V0RWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgICAgICB2YXIgbm9mZnNldDpudW1iZXI9dGhpcy5udW1iZXJPZmZzZXQoKTtcbiAgICAgICAgICAgICAgICB4PWxlZnQrICh3aWR0aCAqIG5vZmZzZXQpLzEwMDtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1lbHNlXG4gICAgICAgICAgICAgICAgeD1sZWZ0K3g7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGRpYWxvZy5zdHlsZS5sZWZ0PXg7XG4gICAgICAgIHN3aXRjaCh0aGlzLmFsaWduKXtcbiAgICAgICAgICAgIGNhc2UgQWlNb2RhbEFsaWduLkJlZ2luOlxuICAgICAgICAgICAgICAgIGNvbnRlbnQuc3R5bGUubGVmdD0wO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBaU1vZGFsQWxpZ24uQ2VudGVyOlxuICAgICAgICAgICAgICAgIGNvbnRlbnQuc3R5bGUubGVmdD0tY29udGVudC5vZmZzZXRXaWR0aCAvMjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQWlNb2RhbEFsaWduLkVuZDpcbiAgICAgICAgICAgICAgICBjb250ZW50LnN0eWxlLmxlZnQ9LWNvbnRlbnQub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwb3NpdGlvblRvcChkaWFsb2csY29udGVudCx0YXJnZXRFbGVtZW50KXtcbiAgICAgICAgdmFyIHk9dGhpcy5vZmZzZXQ7XG4gICAgICAgIGlmKHRhcmdldEVsZW1lbnQpe1xuICAgICAgICAgICAgdmFyIHRvcD10YXJnZXRFbGVtZW50Lm9mZnNldFRvcDtcbiAgICAgICAgICAgIGlmKHR5cGVvZiB0aGlzLm9mZnNldCA9PSAnc3RyaW5nJyAmJiB0aGlzLm9mZnNldC5pbmRleE9mKCclJykgIT0gLTEpe1xuICAgICAgICAgICAgICAgIHZhciBoZWlnaHQ9dGFyZ2V0RWxlbWVudC5vZmZzZXRIZWlnaHQ7XG4gICAgICAgICAgICAgICAgdmFyIG5vZmZzZXQ6bnVtYmVyPXRoaXMubnVtYmVyT2Zmc2V0KCk7XG4gICAgICAgICAgICAgICAgeT10b3ArIChoZWlnaHQgKiBub2Zmc2V0KS8xMDA7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9ZWxzZVxuICAgICAgICAgICAgICAgIHk9dG9wK3k7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGRpYWxvZy5zdHlsZS50b3A9eTsgICAgICAgICAgICBcbiAgICAgICAgc3dpdGNoKHRoaXMuYWxpZ24pe1xuICAgICAgICAgICAgY2FzZSBBaU1vZGFsQWxpZ24uQmVnaW46XG4gICAgICAgICAgICAgICAgY29udGVudC5zdHlsZS50b3A9MDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQWlNb2RhbEFsaWduLkNlbnRlcjpcbiAgICAgICAgICAgICAgICBjb250ZW50LnN0eWxlLnRvcD0tY29udGVudC5vZmZzZXRXaWR0aCAvMjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQWlNb2RhbEFsaWduLkVuZDpcbiAgICAgICAgICAgICAgICBjb250ZW50LnN0eWxlLnRvcD0tY29udGVudC5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG4vKipcbiAqIEEgY29uZmlndXJhdGlvbiBkZWZpbml0aW9uIG9iamVjdC5cbiAqIEluc3RydWN0aW9uIGZvciBob3cgdG8gc2hvdyBhIG1vZGFsLlxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQWlNb2RhbENvbmZpZyB7XG5cbiAgICB4OkFpTW9kYWxQb3NpdGlvbj1BaU1vZGFsUG9zaXRpb24uQ2VudGVyO1xuICAgIFxuICAgIHk6QWlNb2RhbFBvc2l0aW9uPUFpTW9kYWxQb3NpdGlvbi5CZWdpbjtcblxuICAgIGZsb2F0aW5nOmJvb2xlYW49ZmFsc2U7XG5cbiAgICBhcm91bmRUbzpzdHJpbmc7IC8vIHBvc2l0aW9uIGRpYWxvZyBhcm91bmQgdG8gYW4gZWxlbWVudFxuXG4gICAgYW5jaG9yTmFtZTpzdHJpbmc9bnVsbDtcblxuICAgIG1hc2sgOiBzdHJpbmc9bnVsbDsgLy9udWxsLCd3aGl0ZScsJ2JsYWNrJ1xuICAgIFxuICAgIGF1dG9IaWRlOmJvb2xlYW49ZmFsc2U7XG5cbiAgICB0cmFja2luZ1NpemVQb3NpdGlvbjpib29sZWFuPWZhbHNlOyAgICBcblxuICAgIC8qKlxuICAgICAqIEtleWJvYXJkIHZhbHVlL3MgdGhhdCBjbG9zZSB0aGUgbW9kYWwuXG4gICAgICogQWNjZXB0cyBlaXRoZXIgYSBzaW5nbGUgbnVtZXJpYyB2YWx1ZSBvciBhbiBhcnJheSBvZiBudW1lcmljIHZhbHVlcy5cbiAgICAgKiBBIG1vZGFsIGNsb3NlZCBieSBhIGtleWJvYXJkIHN0cm9rZSB3aWxsIHJlc3VsdCBpbiBhICdyZWplY3QnIG5vdGlmaWNhdGlvbiBmcm9tIHRoZSBwcm9taXNlLlxuICAgICAqIERlZmF1bHRzIHRvIDI3LCBzZXQgYG51bGxgIGltcGxpY2l0bHkgdG8gZGlzYWJsZS5cbiAgICAgKi9cbiAgICBrZXlib2FyZDogQXJyYXk8bnVtYmVyPiB8IG51bWJlcj1bMjddO1xuXG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAga2V5Ym9hcmQ6IEFycmF5PG51bWJlcj4gfCBudW1iZXIgPSB1bmRlZmluZWQpIHtcbiAgICB9XG5cbiAgICBnZXQgUG9zaXRpb24oKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmxvYXRpbmcgPyAnZml4ZWQnOidhYnNvbHV0ZSc7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIGNvbmZpZyBpbnN0YW5jZSBzdXBwb3J0cyBhIGdpdmVuIGtleS5cbiAgICAgKiBAcGFyYW0ga2V5XG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgc3VwcG9ydHNLZXkoa2V5Q29kZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAoPEFycmF5PG51bWJlcj4+dGhpcy5rZXlib2FyZCkuaW5kZXhPZihrZXlDb2RlKSA+IC0xO1xuICAgIH1cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
