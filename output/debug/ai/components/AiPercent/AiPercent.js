System.register(['angular2/core', 'angular2/src/facade/lang', 'angular2/src/facade/math', '../AiControl/AiControl'], function(exports_1, context_1) {
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
    var core_1, lang_1, math_1, AiControl_1;
    var AiPercent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (lang_1_1) {
                lang_1 = lang_1_1;
            },
            function (math_1_1) {
                math_1 = math_1_1;
            },
            function (AiControl_1_1) {
                AiControl_1 = AiControl_1_1;
            }],
        execute: function() {
            AiPercent = (function (_super) {
                __extends(AiPercent, _super);
                function AiPercent(ele) {
                    _super.call(this, ele);
                    this.rightTransform = '';
                    this.rightTransition = '';
                    this.leftTransform = '';
                    this.leftTransition = '';
                }
                Object.defineProperty(AiPercent.prototype, "value", {
                    get: function () {
                        return this._value;
                    },
                    set: function (v) {
                        if (lang_1.isPresent(v)) {
                            this._value = AiPercent.clamp(v);
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                AiPercent.prototype.getPercent = function () {
                    return this.value + "%";
                };
                AiPercent.prototype.ngOnChanges = function (_) {
                    if (lang_1.isBlank(this.value)) {
                        return;
                    }
                    this.animateIndicator(this.value);
                };
                /** Clamps a value to be between 0 and 100. */
                AiPercent.clamp = function (v) {
                    return math_1.Math.max(0, math_1.Math.min(100, v));
                };
                /**
                 * Manually animate the Determinate indicator based on the specified
                 * percentage value (0-100).
                 *
                 * Note: this animation was previously done using SCSS.
                 * - generated 54K of styles
                 * - use attribute selectors which had poor performances in IE
                 */
                AiPercent.prototype.animateIndicator = function (value) {
                    this.leftTransition = (value <= 50) ? "transform 0.1s linear" : "";
                    this.rightTransition = (value >= 50) ? "transform 0.1s linear" : "";
                    var lt = value <= 50 ? 135 : (((value - 50) / 50 * 180) + 135);
                    this.leftTransform = "rotate(" + lt + "deg)";
                    var rt = value >= 50 ? 45 : (value / 50 * 180 - 135);
                    this.rightTransform = "rotate(" + rt + "deg)";
                };
                AiPercent = __decorate([
                    core_1.Component(AiControl_1.AiControl.meta({
                        templateUrl: 'package:src/components/AiPercent/AiPercent.html',
                        selector: 'ai-percent',
                        inputs: ['value'],
                        host: {
                            'role': 'progressbar',
                            'aria-valuemin': '0',
                            'aria-valuemax': '100',
                            '[attr.aria-valuenow]': 'value',
                        },
                    }, {
                        ignoreActive: 1,
                        ignoreFocus: 1,
                        ignoreHover: 1
                    })), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], AiPercent);
                return AiPercent;
            }(AiControl_1.AiControl));
            exports_1("AiPercent", AiPercent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlQZXJjZW50L0FpUGVyY2VudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBcUJBO2dCQUErQiw2QkFBUztnQkFTcEMsbUJBQVksR0FBZTtvQkFDdkIsa0JBQU0sR0FBRyxDQUFDLENBQUM7b0JBTmYsbUJBQWMsR0FBUyxFQUFFLENBQUM7b0JBQzFCLG9CQUFlLEdBQVMsRUFBRSxDQUFDO29CQUMzQixrQkFBYSxHQUFTLEVBQUUsQ0FBQztvQkFDekIsbUJBQWMsR0FBUyxFQUFFLENBQUM7Z0JBSTFCLENBQUM7Z0JBRUQsc0JBQUksNEJBQUs7eUJBQVQ7d0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7b0JBQ3ZCLENBQUM7eUJBRUQsVUFBVSxDQUFDO3dCQUNQLEVBQUUsQ0FBQyxDQUFDLGdCQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUNqQixJQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ25DLENBQUM7b0JBQ0wsQ0FBQzs7O21CQU5BO2dCQVFELDhCQUFVLEdBQVY7b0JBQ0ksTUFBTSxDQUFJLElBQUksQ0FBQyxLQUFLLE1BQUcsQ0FBQztnQkFFNUIsQ0FBQztnQkFFRCwrQkFBVyxHQUFYLFVBQVksQ0FBQztvQkFDVCxFQUFFLENBQUMsQ0FBQyxjQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDeEIsTUFBTSxDQUFDO29CQUNULENBQUM7b0JBQ0QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDdEMsQ0FBQztnQkFFRCw4Q0FBOEM7Z0JBQ3ZDLGVBQUssR0FBWixVQUFhLENBQUM7b0JBQ1YsTUFBTSxDQUFDLFdBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLFdBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pDLENBQUM7Z0JBRUQ7Ozs7Ozs7bUJBT0c7Z0JBQ0gsb0NBQWdCLEdBQWhCLFVBQWlCLEtBQVk7b0JBQ3pCLElBQUksQ0FBQyxjQUFjLEdBQUUsQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDLEdBQUcsdUJBQXVCLEdBQUcsRUFBRSxDQUFDO29CQUNsRSxJQUFJLENBQUMsZUFBZSxHQUFFLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQyxHQUFHLHVCQUF1QixHQUFHLEVBQUUsQ0FBQztvQkFFbkUsSUFBSSxFQUFFLEdBQUMsS0FBSyxJQUFJLEVBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztvQkFDN0QsSUFBSSxDQUFDLGFBQWEsR0FBQyxZQUFVLEVBQUUsU0FBTSxDQUFDO29CQUV0QyxJQUFJLEVBQUUsR0FBRyxLQUFLLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEtBQUssR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO29CQUNyRCxJQUFJLENBQUMsY0FBYyxHQUFDLFlBQVUsRUFBRSxTQUFNLENBQUM7Z0JBQzNDLENBQUM7Z0JBekVMO29CQUFDLGdCQUFTLENBQUMscUJBQVMsQ0FBQyxJQUFJLENBQUM7d0JBQ2xCLFdBQVcsRUFBQyxpREFBaUQ7d0JBQzdELFFBQVEsRUFBRSxZQUFZO3dCQUN0QixNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUM7d0JBQ2pCLElBQUksRUFBRTs0QkFDRixNQUFNLEVBQUUsYUFBYTs0QkFDckIsZUFBZSxFQUFFLEdBQUc7NEJBQ3BCLGVBQWUsRUFBRSxLQUFLOzRCQUN0QixzQkFBc0IsRUFBRSxPQUFPO3lCQUNsQztxQkFDSixFQUFDO3dCQUNFLFlBQVksRUFBQyxDQUFDO3dCQUNkLFdBQVcsRUFBQyxDQUFDO3dCQUNiLFdBQVcsRUFBQyxDQUFDO3FCQUNoQixDQUNKLENBQUM7OzZCQUFBO2dCQTRERixnQkFBQztZQUFELENBM0RBLEFBMkRDLENBM0Q4QixxQkFBUyxHQTJEdkM7WUEzREQsaUNBMkRDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9BaVBlcmNlbnQvQWlQZXJjZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsRWxlbWVudFJlZiwgQXR0cmlidXRlLCBPbkNoYW5nZXN9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtpc1ByZXNlbnQsIGlzQmxhbmt9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZyc7XG5pbXBvcnQge01hdGh9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvbWF0aCc7XG5pbXBvcnQge0FpQ29udHJvbH0gZnJvbSAnLi4vQWlDb250cm9sL0FpQ29udHJvbCc7XG5cbkBDb21wb25lbnQoQWlDb250cm9sLm1ldGEoe1xuICAgICAgICB0ZW1wbGF0ZVVybDoncGFja2FnZTpzcmMvY29tcG9uZW50cy9BaVBlcmNlbnQvQWlQZXJjZW50Lmh0bWwnLFxuICAgICAgICBzZWxlY3RvcjogJ2FpLXBlcmNlbnQnLFxuICAgICAgICBpbnB1dHM6IFsndmFsdWUnXSxcbiAgICAgICAgaG9zdDoge1xuICAgICAgICAgICAgJ3JvbGUnOiAncHJvZ3Jlc3NiYXInLFxuICAgICAgICAgICAgJ2FyaWEtdmFsdWVtaW4nOiAnMCcsXG4gICAgICAgICAgICAnYXJpYS12YWx1ZW1heCc6ICcxMDAnLFxuICAgICAgICAgICAgJ1thdHRyLmFyaWEtdmFsdWVub3ddJzogJ3ZhbHVlJyxcbiAgICAgICAgfSwgICAgICAgXG4gICAgfSx7XG4gICAgICAgIGlnbm9yZUFjdGl2ZToxLFxuICAgICAgICBpZ25vcmVGb2N1czoxLFxuICAgICAgICBpZ25vcmVIb3ZlcjoxXG4gICAgfVxuKSkgICAgXG5leHBvcnQgY2xhc3MgQWlQZXJjZW50IGV4dGVuZHMgQWlDb250cm9sIGltcGxlbWVudHMgT25DaGFuZ2VzeyBcbiAgICAvKiogVmFsdWUgZm9yIHRoZSBwcmltYXJ5IGJhci4gKi9cbiAgICBfdmFsdWU6IG51bWJlcjtcbiAgICBcbiAgICByaWdodFRyYW5zZm9ybTogc3RyaW5nPScnO1xuICAgIHJpZ2h0VHJhbnNpdGlvbjogc3RyaW5nPScnO1xuICAgIGxlZnRUcmFuc2Zvcm06IHN0cmluZz0nJztcbiAgICBsZWZ0VHJhbnNpdGlvbjogc3RyaW5nPScnO1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKGVsZTogRWxlbWVudFJlZikgeyBcbiAgICAgICAgc3VwZXIoZWxlKTsgXG4gICAgfVxuXG4gICAgZ2V0IHZhbHVlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gICAgfVxuICAgIFxuICAgIHNldCB2YWx1ZSh2KSB7XG4gICAgICAgIGlmIChpc1ByZXNlbnQodikpIHtcbiAgICAgICAgICB0aGlzLl92YWx1ZSA9IEFpUGVyY2VudC5jbGFtcCh2KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBnZXRQZXJjZW50KCk6c3RyaW5ne1xuICAgICAgICByZXR1cm4gYCR7dGhpcy52YWx1ZX0lYDsgIFxuXG4gICAgfVxuICAgIFxuICAgIG5nT25DaGFuZ2VzKF8pIHtcbiAgICAgICAgaWYgKGlzQmxhbmsodGhpcy52YWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hbmltYXRlSW5kaWNhdG9yKHRoaXMudmFsdWUpO1xuICAgIH1cbiAgICBcbiAgICAvKiogQ2xhbXBzIGEgdmFsdWUgdG8gYmUgYmV0d2VlbiAwIGFuZCAxMDAuICovXG4gICAgc3RhdGljIGNsYW1wKHYpIHtcbiAgICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIE1hdGgubWluKDEwMCwgdikpO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBNYW51YWxseSBhbmltYXRlIHRoZSBEZXRlcm1pbmF0ZSBpbmRpY2F0b3IgYmFzZWQgb24gdGhlIHNwZWNpZmllZFxuICAgICAqIHBlcmNlbnRhZ2UgdmFsdWUgKDAtMTAwKS5cbiAgICAgKlxuICAgICAqIE5vdGU6IHRoaXMgYW5pbWF0aW9uIHdhcyBwcmV2aW91c2x5IGRvbmUgdXNpbmcgU0NTUy5cbiAgICAgKiAtIGdlbmVyYXRlZCA1NEsgb2Ygc3R5bGVzXG4gICAgICogLSB1c2UgYXR0cmlidXRlIHNlbGVjdG9ycyB3aGljaCBoYWQgcG9vciBwZXJmb3JtYW5jZXMgaW4gSUVcbiAgICAgKi9cbiAgICBhbmltYXRlSW5kaWNhdG9yKHZhbHVlOm51bWJlcikge1xuICAgICAgICB0aGlzLmxlZnRUcmFuc2l0aW9uPSAodmFsdWUgPD0gNTApID8gXCJ0cmFuc2Zvcm0gMC4xcyBsaW5lYXJcIiA6IFwiXCI7XG4gICAgICAgIHRoaXMucmlnaHRUcmFuc2l0aW9uPSAodmFsdWUgPj0gNTApID8gXCJ0cmFuc2Zvcm0gMC4xcyBsaW5lYXJcIiA6IFwiXCI7XG5cbiAgICAgICAgbGV0IGx0PXZhbHVlIDw9IDUwID8gMTM1IDogKCgodmFsdWUgLSA1MCkgLyA1MCAqIDE4MCkgKyAxMzUpO1xuICAgICAgICB0aGlzLmxlZnRUcmFuc2Zvcm09YHJvdGF0ZSgke2x0fWRlZylgOyAgXG5cbiAgICAgICAgbGV0IHJ0ID0gdmFsdWUgPj0gNTAgPyA0NSA6ICh2YWx1ZSAvIDUwICogMTgwIC0gMTM1KTtcbiAgICAgICAgdGhpcy5yaWdodFRyYW5zZm9ybT1gcm90YXRlKCR7cnR9ZGVnKWA7XG4gICAgfVxuXG59IFxuICBcbiAgIFxuIFxuICAiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
