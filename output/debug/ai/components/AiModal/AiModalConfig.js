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
            }());
            exports_1("AiModalConfig", AiModalConfig);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlNb2RhbC9BaU1vZGFsQ29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBR0EsV0FBWSxZQUFZO2dCQUNwQixpREFBSyxDQUFBO2dCQUFDLG1EQUFNLENBQUE7Z0JBQUMsNkNBQUcsQ0FBQTtZQUNwQixDQUFDLEVBRlcsWUFBWSxLQUFaLFlBQVksUUFFdkI7b0RBQUE7WUFFRDtnQkFNSSx5QkFBWSxNQUFZLEVBQUMsS0FBcUM7b0JBQWxELHNCQUFZLEdBQVosVUFBWTtvQkFBQyxxQkFBcUMsR0FBckMsUUFBbUIsWUFBWSxDQUFDLEtBQUs7b0JBQzFELElBQUksQ0FBQyxNQUFNLEdBQUMsTUFBTSxDQUFDO29CQUNuQixJQUFJLENBQUMsS0FBSyxHQUFDLEtBQUssQ0FBQztnQkFDckIsQ0FBQztnQkFHRCxzQkFBVyx3QkFBSzt5QkFBaEI7d0JBQ0ksTUFBTSxDQUFDLElBQUksZUFBZSxFQUFFLENBQUM7b0JBQ2pDLENBQUM7OzttQkFBQTtnQkFFRCxzQkFBVyx5QkFBTTt5QkFBakI7d0JBQ0ksTUFBTSxDQUFDLElBQUksZUFBZSxDQUFDLEtBQUssRUFBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQzFELENBQUM7OzttQkFBQTtnQkFFRCxzQkFBVyxzQkFBRzt5QkFBZDt3QkFDSSxNQUFNLENBQUMsSUFBSSxlQUFlLENBQUMsTUFBTSxFQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDeEQsQ0FBQzs7O21CQUFBO2dCQUVELHNDQUFZLEdBQVo7b0JBQ0ksTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztnQkFDdEQsQ0FBQztnQkFFRCxzQ0FBWSxHQUFaLFVBQWEsTUFBTSxFQUFDLE9BQU8sRUFBQyxhQUFhO29CQUNyQyxJQUFJLENBQUMsR0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO29CQUNsQixFQUFFLENBQUEsQ0FBQyxhQUFhLENBQUMsQ0FBQSxDQUFDO3dCQUNkLElBQUksSUFBSSxHQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUM7d0JBQ2xDLEVBQUUsQ0FBQSxDQUFDLE9BQU8sSUFBSSxDQUFDLE1BQU0sSUFBSSxRQUFRLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQSxDQUFDOzRCQUNqRSxJQUFJLEtBQUssR0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDOzRCQUNwQyxJQUFJLE9BQU8sR0FBUSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7NEJBQ3ZDLENBQUMsR0FBQyxJQUFJLEdBQUUsQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEdBQUMsR0FBRyxDQUFDO3dCQUVsQyxDQUFDO3dCQUFBLElBQUk7NEJBQ0QsQ0FBQyxHQUFDLElBQUksR0FBQyxDQUFDLENBQUM7b0JBQ2pCLENBQUM7b0JBRUQsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUMsQ0FBQyxDQUFDO29CQUNwQixNQUFNLENBQUEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUEsQ0FBQzt3QkFDZixLQUFLLFlBQVksQ0FBQyxLQUFLOzRCQUNuQixPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksR0FBQyxDQUFDLENBQUM7NEJBQ3JCLEtBQUssQ0FBQzt3QkFDVixLQUFLLFlBQVksQ0FBQyxNQUFNOzRCQUNwQixPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksR0FBQyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUUsQ0FBQyxDQUFDOzRCQUMzQyxLQUFLLENBQUM7d0JBQ1YsS0FBSyxZQUFZLENBQUMsR0FBRzs0QkFDakIsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUMsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDOzRCQUN4QyxLQUFLLENBQUM7b0JBQ2QsQ0FBQztnQkFDTCxDQUFDO2dCQUVELHFDQUFXLEdBQVgsVUFBWSxNQUFNLEVBQUMsT0FBTyxFQUFDLGFBQWE7b0JBQ3BDLElBQUksQ0FBQyxHQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7b0JBQ2xCLEVBQUUsQ0FBQSxDQUFDLGFBQWEsQ0FBQyxDQUFBLENBQUM7d0JBQ2QsSUFBSSxHQUFHLEdBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQzt3QkFDaEMsRUFBRSxDQUFBLENBQUMsT0FBTyxJQUFJLENBQUMsTUFBTSxJQUFJLFFBQVEsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBLENBQUM7NEJBQ2pFLElBQUksTUFBTSxHQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUM7NEJBQ3RDLElBQUksT0FBTyxHQUFRLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQzs0QkFDdkMsQ0FBQyxHQUFDLEdBQUcsR0FBRSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsR0FBQyxHQUFHLENBQUM7d0JBRWxDLENBQUM7d0JBQUEsSUFBSTs0QkFDRCxDQUFDLEdBQUMsR0FBRyxHQUFDLENBQUMsQ0FBQztvQkFDaEIsQ0FBQztvQkFFRCxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBQyxDQUFDLENBQUM7b0JBQ25CLE1BQU0sQ0FBQSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQSxDQUFDO3dCQUNmLEtBQUssWUFBWSxDQUFDLEtBQUs7NEJBQ25CLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFDLENBQUMsQ0FBQzs0QkFDcEIsS0FBSyxDQUFDO3dCQUNWLEtBQUssWUFBWSxDQUFDLE1BQU07NEJBQ3BCLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRSxDQUFDLENBQUM7NEJBQzFDLEtBQUssQ0FBQzt3QkFDVixLQUFLLFlBQVksQ0FBQyxHQUFHOzRCQUNqQixPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBQyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUM7NEJBQ3ZDLEtBQUssQ0FBQztvQkFDZCxDQUFDO2dCQUNMLENBQUM7Z0JBRUwsc0JBQUM7WUFBRCxDQWxGQSxBQWtGQyxJQUFBO1lBbEZELDZDQWtGQyxDQUFBO1lBRUQ7OztlQUdHO1lBRUg7Z0JBMkJJLHVCQUNJLFFBQTRDO29CQUE1Qyx3QkFBNEMsR0FBNUMsb0JBQTRDO29CQTFCaEQsTUFBQyxHQUFpQixlQUFlLENBQUMsTUFBTSxDQUFDO29CQUV6QyxNQUFDLEdBQWlCLGVBQWUsQ0FBQyxLQUFLLENBQUM7b0JBRXhDLGFBQVEsR0FBUyxLQUFLLENBQUM7b0JBSXZCLGVBQVUsR0FBUSxJQUFJLENBQUM7b0JBRXZCLFNBQUksR0FBVSxJQUFJLENBQUMsQ0FBQyxzQkFBc0I7b0JBRTFDLGFBQVEsR0FBUyxLQUFLLENBQUM7b0JBRXZCLHlCQUFvQixHQUFTLEtBQUssQ0FBQztvQkFFbkM7Ozs7O3VCQUtHO29CQUNILGFBQVEsR0FBeUIsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFLdEMsQ0FBQztnQkFFRCxzQkFBSSxtQ0FBUTt5QkFBWjt3QkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLEdBQUMsVUFBVSxDQUFDO29CQUM5QyxDQUFDOzs7bUJBQUE7Z0JBR0Q7Ozs7bUJBSUc7Z0JBQ0gsbUNBQVcsR0FBWCxVQUFZLE9BQWU7b0JBQ3ZCLE1BQU0sQ0FBaUIsSUFBSSxDQUFDLFFBQVMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hFLENBQUM7Z0JBNUNMO29CQUFDLGlCQUFVLEVBQUU7O2lDQUFBO2dCQTZDYixvQkFBQztZQUFELENBNUNBLEFBNENDLElBQUE7WUE1Q0QseUNBNENDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9BaU1vZGFsL0FpTW9kYWxDb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5cbmV4cG9ydCBlbnVtIEFpTW9kYWxBbGlnbntcbiAgICBCZWdpbixDZW50ZXIsRW5kXG59ICAgIFxuXG5leHBvcnQgY2xhc3MgQWlNb2RhbFBvc2l0aW9ue1xuICAgIFxuICAgIG9mZnNldDphbnk7XG4gICAgXG4gICAgYWxpZ246QWlNb2RhbEFsaWduO1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKG9mZnNldDphbnk9MCxhbGlnbjpBaU1vZGFsQWxpZ249QWlNb2RhbEFsaWduLkJlZ2luKSB7XG4gICAgICAgIHRoaXMub2Zmc2V0PW9mZnNldDtcbiAgICAgICAgdGhpcy5hbGlnbj1hbGlnbjtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBnZXQgQmVnaW4oKXtcbiAgICAgICAgcmV0dXJuIG5ldyBBaU1vZGFsUG9zaXRpb24oKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IENlbnRlcigpe1xuICAgICAgICByZXR1cm4gbmV3IEFpTW9kYWxQb3NpdGlvbignNTAlJyxBaU1vZGFsQWxpZ24uQ2VudGVyKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IEVuZCgpe1xuICAgICAgICByZXR1cm4gbmV3IEFpTW9kYWxQb3NpdGlvbignMTAwJScsQWlNb2RhbEFsaWduLkVuZCk7XG4gICAgfVxuXG4gICAgbnVtYmVyT2Zmc2V0KCl7XG4gICAgICAgIHJldHVybiBOdW1iZXIodGhpcy5vZmZzZXQucmVwbGFjZSgnJScsJycpLnRyaW0oKSk7XG4gICAgfVxuXG4gICAgcG9zaXRpb25MZWZ0KGRpYWxvZyxjb250ZW50LHRhcmdldEVsZW1lbnQpe1xuICAgICAgICB2YXIgeD10aGlzLm9mZnNldDtcbiAgICAgICAgaWYodGFyZ2V0RWxlbWVudCl7XG4gICAgICAgICAgICB2YXIgbGVmdD10YXJnZXRFbGVtZW50Lm9mZnNldExlZnQ7XG4gICAgICAgICAgICBpZih0eXBlb2YgdGhpcy5vZmZzZXQgPT0gJ3N0cmluZycgJiYgdGhpcy5vZmZzZXQuaW5kZXhPZignJScpICE9IC0xKXtcbiAgICAgICAgICAgICAgICB2YXIgd2lkdGg9dGFyZ2V0RWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgICAgICB2YXIgbm9mZnNldDpudW1iZXI9dGhpcy5udW1iZXJPZmZzZXQoKTtcbiAgICAgICAgICAgICAgICB4PWxlZnQrICh3aWR0aCAqIG5vZmZzZXQpLzEwMDtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1lbHNlXG4gICAgICAgICAgICAgICAgeD1sZWZ0K3g7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGRpYWxvZy5zdHlsZS5sZWZ0PXg7XG4gICAgICAgIHN3aXRjaCh0aGlzLmFsaWduKXtcbiAgICAgICAgICAgIGNhc2UgQWlNb2RhbEFsaWduLkJlZ2luOlxuICAgICAgICAgICAgICAgIGNvbnRlbnQuc3R5bGUubGVmdD0wO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBaU1vZGFsQWxpZ24uQ2VudGVyOlxuICAgICAgICAgICAgICAgIGNvbnRlbnQuc3R5bGUubGVmdD0tY29udGVudC5vZmZzZXRXaWR0aCAvMjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQWlNb2RhbEFsaWduLkVuZDpcbiAgICAgICAgICAgICAgICBjb250ZW50LnN0eWxlLmxlZnQ9LWNvbnRlbnQub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwb3NpdGlvblRvcChkaWFsb2csY29udGVudCx0YXJnZXRFbGVtZW50KXtcbiAgICAgICAgdmFyIHk9dGhpcy5vZmZzZXQ7XG4gICAgICAgIGlmKHRhcmdldEVsZW1lbnQpe1xuICAgICAgICAgICAgdmFyIHRvcD10YXJnZXRFbGVtZW50Lm9mZnNldFRvcDtcbiAgICAgICAgICAgIGlmKHR5cGVvZiB0aGlzLm9mZnNldCA9PSAnc3RyaW5nJyAmJiB0aGlzLm9mZnNldC5pbmRleE9mKCclJykgIT0gLTEpe1xuICAgICAgICAgICAgICAgIHZhciBoZWlnaHQ9dGFyZ2V0RWxlbWVudC5vZmZzZXRIZWlnaHQ7XG4gICAgICAgICAgICAgICAgdmFyIG5vZmZzZXQ6bnVtYmVyPXRoaXMubnVtYmVyT2Zmc2V0KCk7XG4gICAgICAgICAgICAgICAgeT10b3ArIChoZWlnaHQgKiBub2Zmc2V0KS8xMDA7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9ZWxzZVxuICAgICAgICAgICAgICAgIHk9dG9wK3k7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGRpYWxvZy5zdHlsZS50b3A9eTsgICAgICAgICAgICBcbiAgICAgICAgc3dpdGNoKHRoaXMuYWxpZ24pe1xuICAgICAgICAgICAgY2FzZSBBaU1vZGFsQWxpZ24uQmVnaW46XG4gICAgICAgICAgICAgICAgY29udGVudC5zdHlsZS50b3A9MDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQWlNb2RhbEFsaWduLkNlbnRlcjpcbiAgICAgICAgICAgICAgICBjb250ZW50LnN0eWxlLnRvcD0tY29udGVudC5vZmZzZXRXaWR0aCAvMjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQWlNb2RhbEFsaWduLkVuZDpcbiAgICAgICAgICAgICAgICBjb250ZW50LnN0eWxlLnRvcD0tY29udGVudC5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG4vKipcbiAqIEEgY29uZmlndXJhdGlvbiBkZWZpbml0aW9uIG9iamVjdC5cbiAqIEluc3RydWN0aW9uIGZvciBob3cgdG8gc2hvdyBhIG1vZGFsLlxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQWlNb2RhbENvbmZpZyB7XG5cbiAgICB4OkFpTW9kYWxQb3NpdGlvbj1BaU1vZGFsUG9zaXRpb24uQ2VudGVyO1xuICAgIFxuICAgIHk6QWlNb2RhbFBvc2l0aW9uPUFpTW9kYWxQb3NpdGlvbi5CZWdpbjtcblxuICAgIGZsb2F0aW5nOmJvb2xlYW49ZmFsc2U7XG5cbiAgICBhcm91bmRUbzpzdHJpbmc7IC8vIHBvc2l0aW9uIGRpYWxvZyBhcm91bmQgdG8gYW4gZWxlbWVudFxuXG4gICAgYW5jaG9yTmFtZTpzdHJpbmc9bnVsbDtcblxuICAgIG1hc2sgOiBzdHJpbmc9bnVsbDsgLy9udWxsLCd3aGl0ZScsJ2JsYWNrJ1xuICAgIFxuICAgIGF1dG9IaWRlOmJvb2xlYW49ZmFsc2U7XG5cbiAgICB0cmFja2luZ1NpemVQb3NpdGlvbjpib29sZWFuPWZhbHNlOyAgICBcblxuICAgIC8qKlxuICAgICAqIEtleWJvYXJkIHZhbHVlL3MgdGhhdCBjbG9zZSB0aGUgbW9kYWwuXG4gICAgICogQWNjZXB0cyBlaXRoZXIgYSBzaW5nbGUgbnVtZXJpYyB2YWx1ZSBvciBhbiBhcnJheSBvZiBudW1lcmljIHZhbHVlcy5cbiAgICAgKiBBIG1vZGFsIGNsb3NlZCBieSBhIGtleWJvYXJkIHN0cm9rZSB3aWxsIHJlc3VsdCBpbiBhICdyZWplY3QnIG5vdGlmaWNhdGlvbiBmcm9tIHRoZSBwcm9taXNlLlxuICAgICAqIERlZmF1bHRzIHRvIDI3LCBzZXQgYG51bGxgIGltcGxpY2l0bHkgdG8gZGlzYWJsZS5cbiAgICAgKi9cbiAgICBrZXlib2FyZDogQXJyYXk8bnVtYmVyPiB8IG51bWJlcj1bMjddO1xuXG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAga2V5Ym9hcmQ6IEFycmF5PG51bWJlcj4gfCBudW1iZXIgPSB1bmRlZmluZWQpIHtcbiAgICB9XG5cbiAgICBnZXQgUG9zaXRpb24oKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmxvYXRpbmcgPyAnZml4ZWQnOidhYnNvbHV0ZSc7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIGNvbmZpZyBpbnN0YW5jZSBzdXBwb3J0cyBhIGdpdmVuIGtleS5cbiAgICAgKiBAcGFyYW0ga2V5XG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgc3VwcG9ydHNLZXkoa2V5Q29kZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAoPEFycmF5PG51bWJlcj4+dGhpcy5rZXlib2FyZCkuaW5kZXhPZihrZXlDb2RlKSA+IC0xO1xuICAgIH1cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
