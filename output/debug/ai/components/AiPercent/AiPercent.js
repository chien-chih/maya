System.register(['angular2/core', 'angular2/src/facade/lang', 'angular2/src/facade/math', '../AiControl/AiControl'], function(exports_1) {
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
            })(AiControl_1.AiControl);
            exports_1("AiPercent", AiPercent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlQZXJjZW50L0FpUGVyY2VudC50cyJdLCJuYW1lcyI6WyJBaVBlcmNlbnQiLCJBaVBlcmNlbnQuY29uc3RydWN0b3IiLCJBaVBlcmNlbnQudmFsdWUiLCJBaVBlcmNlbnQuZ2V0UGVyY2VudCIsIkFpUGVyY2VudC5uZ09uQ2hhbmdlcyIsIkFpUGVyY2VudC5jbGFtcCIsIkFpUGVyY2VudC5hbmltYXRlSW5kaWNhdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUtBO2dCQWdCK0JBLDZCQUFTQTtnQkFTcENBLG1CQUFZQSxHQUFlQTtvQkFDdkJDLGtCQUFNQSxHQUFHQSxDQUFDQSxDQUFDQTtvQkFOZkEsbUJBQWNBLEdBQVNBLEVBQUVBLENBQUNBO29CQUMxQkEsb0JBQWVBLEdBQVNBLEVBQUVBLENBQUNBO29CQUMzQkEsa0JBQWFBLEdBQVNBLEVBQUVBLENBQUNBO29CQUN6QkEsbUJBQWNBLEdBQVNBLEVBQUVBLENBQUNBO2dCQUkxQkEsQ0FBQ0E7Z0JBRURELHNCQUFJQSw0QkFBS0E7eUJBQVRBO3dCQUNJRSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQTtvQkFDdkJBLENBQUNBO3lCQUVERixVQUFVQSxDQUFDQTt3QkFDUEUsRUFBRUEsQ0FBQ0EsQ0FBQ0EsZ0JBQVNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBOzRCQUNqQkEsSUFBSUEsQ0FBQ0EsTUFBTUEsR0FBR0EsU0FBU0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7d0JBQ25DQSxDQUFDQTtvQkFDTEEsQ0FBQ0E7OzttQkFOQUY7Z0JBUURBLDhCQUFVQSxHQUFWQTtvQkFDSUcsTUFBTUEsQ0FBSUEsSUFBSUEsQ0FBQ0EsS0FBS0EsTUFBR0EsQ0FBQ0E7Z0JBRTVCQSxDQUFDQTtnQkFFREgsK0JBQVdBLEdBQVhBLFVBQVlBLENBQUNBO29CQUNUSSxFQUFFQSxDQUFDQSxDQUFDQSxjQUFPQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTt3QkFDeEJBLE1BQU1BLENBQUNBO29CQUNUQSxDQUFDQTtvQkFDREEsSUFBSUEsQ0FBQ0EsZ0JBQWdCQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtnQkFDdENBLENBQUNBO2dCQUVESiw4Q0FBOENBO2dCQUN2Q0EsZUFBS0EsR0FBWkEsVUFBYUEsQ0FBQ0E7b0JBQ1ZLLE1BQU1BLENBQUNBLFdBQUlBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLEVBQUVBLFdBQUlBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO2dCQUN6Q0EsQ0FBQ0E7Z0JBRURMOzs7Ozs7O21CQU9HQTtnQkFDSEEsb0NBQWdCQSxHQUFoQkEsVUFBaUJBLEtBQVlBO29CQUN6Qk0sSUFBSUEsQ0FBQ0EsY0FBY0EsR0FBRUEsQ0FBQ0EsS0FBS0EsSUFBSUEsRUFBRUEsQ0FBQ0EsR0FBR0EsdUJBQXVCQSxHQUFHQSxFQUFFQSxDQUFDQTtvQkFDbEVBLElBQUlBLENBQUNBLGVBQWVBLEdBQUVBLENBQUNBLEtBQUtBLElBQUlBLEVBQUVBLENBQUNBLEdBQUdBLHVCQUF1QkEsR0FBR0EsRUFBRUEsQ0FBQ0E7b0JBRW5FQSxJQUFJQSxFQUFFQSxHQUFDQSxLQUFLQSxJQUFJQSxFQUFFQSxHQUFHQSxHQUFHQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQSxLQUFLQSxHQUFHQSxFQUFFQSxDQUFDQSxHQUFHQSxFQUFFQSxHQUFHQSxHQUFHQSxDQUFDQSxHQUFHQSxHQUFHQSxDQUFDQSxDQUFDQTtvQkFDN0RBLElBQUlBLENBQUNBLGFBQWFBLEdBQUNBLFlBQVVBLEVBQUVBLFNBQU1BLENBQUNBO29CQUV0Q0EsSUFBSUEsRUFBRUEsR0FBR0EsS0FBS0EsSUFBSUEsRUFBRUEsR0FBR0EsRUFBRUEsR0FBR0EsQ0FBQ0EsS0FBS0EsR0FBR0EsRUFBRUEsR0FBR0EsR0FBR0EsR0FBR0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7b0JBQ3JEQSxJQUFJQSxDQUFDQSxjQUFjQSxHQUFDQSxZQUFVQSxFQUFFQSxTQUFNQSxDQUFDQTtnQkFDM0NBLENBQUNBO2dCQXpFTE47b0JBQUNBLGdCQUFTQSxDQUFDQSxxQkFBU0EsQ0FBQ0EsSUFBSUEsQ0FBQ0E7d0JBQ2xCQSxXQUFXQSxFQUFDQSxpREFBaURBO3dCQUM3REEsUUFBUUEsRUFBRUEsWUFBWUE7d0JBQ3RCQSxNQUFNQSxFQUFFQSxDQUFDQSxPQUFPQSxDQUFDQTt3QkFDakJBLElBQUlBLEVBQUVBOzRCQUNGQSxNQUFNQSxFQUFFQSxhQUFhQTs0QkFDckJBLGVBQWVBLEVBQUVBLEdBQUdBOzRCQUNwQkEsZUFBZUEsRUFBRUEsS0FBS0E7NEJBQ3RCQSxzQkFBc0JBLEVBQUVBLE9BQU9BO3lCQUNsQ0E7cUJBQ0pBLEVBQUNBO3dCQUNFQSxZQUFZQSxFQUFDQSxDQUFDQTt3QkFDZEEsV0FBV0EsRUFBQ0EsQ0FBQ0E7d0JBQ2JBLFdBQVdBLEVBQUNBLENBQUNBO3FCQUNoQkEsQ0FDSkEsQ0FBQ0E7OzhCQTREREE7Z0JBQURBLGdCQUFDQTtZQUFEQSxDQTNFQSxBQTJFQ0EsRUEzRDhCLHFCQUFTLEVBMkR2QztZQTNFRCxpQ0EyRUMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL0FpUGVyY2VudC9BaVBlcmNlbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCxFbGVtZW50UmVmLCBBdHRyaWJ1dGUsIE9uQ2hhbmdlc30gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge2lzUHJlc2VudCwgaXNCbGFua30gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9sYW5nJztcbmltcG9ydCB7TWF0aH0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9tYXRoJztcbmltcG9ydCB7QWlDb250cm9sfSBmcm9tICcuLi9BaUNvbnRyb2wvQWlDb250cm9sJztcblxuQENvbXBvbmVudChBaUNvbnRyb2wubWV0YSh7XG4gICAgICAgIHRlbXBsYXRlVXJsOidwYWNrYWdlOnNyYy9jb21wb25lbnRzL0FpUGVyY2VudC9BaVBlcmNlbnQuaHRtbCcsXG4gICAgICAgIHNlbGVjdG9yOiAnYWktcGVyY2VudCcsXG4gICAgICAgIGlucHV0czogWyd2YWx1ZSddLFxuICAgICAgICBob3N0OiB7XG4gICAgICAgICAgICAncm9sZSc6ICdwcm9ncmVzc2JhcicsXG4gICAgICAgICAgICAnYXJpYS12YWx1ZW1pbic6ICcwJyxcbiAgICAgICAgICAgICdhcmlhLXZhbHVlbWF4JzogJzEwMCcsXG4gICAgICAgICAgICAnW2F0dHIuYXJpYS12YWx1ZW5vd10nOiAndmFsdWUnLFxuICAgICAgICB9LCAgICAgICBcbiAgICB9LHtcbiAgICAgICAgaWdub3JlQWN0aXZlOjEsXG4gICAgICAgIGlnbm9yZUZvY3VzOjEsXG4gICAgICAgIGlnbm9yZUhvdmVyOjFcbiAgICB9XG4pKSAgICBcbmV4cG9ydCBjbGFzcyBBaVBlcmNlbnQgZXh0ZW5kcyBBaUNvbnRyb2wgaW1wbGVtZW50cyBPbkNoYW5nZXN7IFxuICAgIC8qKiBWYWx1ZSBmb3IgdGhlIHByaW1hcnkgYmFyLiAqL1xuICAgIF92YWx1ZTogbnVtYmVyO1xuICAgIFxuICAgIHJpZ2h0VHJhbnNmb3JtOiBzdHJpbmc9Jyc7XG4gICAgcmlnaHRUcmFuc2l0aW9uOiBzdHJpbmc9Jyc7XG4gICAgbGVmdFRyYW5zZm9ybTogc3RyaW5nPScnO1xuICAgIGxlZnRUcmFuc2l0aW9uOiBzdHJpbmc9Jyc7XG4gICAgXG4gICAgY29uc3RydWN0b3IoZWxlOiBFbGVtZW50UmVmKSB7IFxuICAgICAgICBzdXBlcihlbGUpOyBcbiAgICB9XG5cbiAgICBnZXQgdmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgICB9XG4gICAgXG4gICAgc2V0IHZhbHVlKHYpIHtcbiAgICAgICAgaWYgKGlzUHJlc2VudCh2KSkge1xuICAgICAgICAgIHRoaXMuX3ZhbHVlID0gQWlQZXJjZW50LmNsYW1wKHYpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGdldFBlcmNlbnQoKTpzdHJpbmd7XG4gICAgICAgIHJldHVybiBgJHt0aGlzLnZhbHVlfSVgOyAgXG5cbiAgICB9XG4gICAgXG4gICAgbmdPbkNoYW5nZXMoXykge1xuICAgICAgICBpZiAoaXNCbGFuayh0aGlzLnZhbHVlKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFuaW1hdGVJbmRpY2F0b3IodGhpcy52YWx1ZSk7XG4gICAgfVxuICAgIFxuICAgIC8qKiBDbGFtcHMgYSB2YWx1ZSB0byBiZSBiZXR3ZWVuIDAgYW5kIDEwMC4gKi9cbiAgICBzdGF0aWMgY2xhbXAodikge1xuICAgICAgICByZXR1cm4gTWF0aC5tYXgoMCwgTWF0aC5taW4oMTAwLCB2KSk7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIE1hbnVhbGx5IGFuaW1hdGUgdGhlIERldGVybWluYXRlIGluZGljYXRvciBiYXNlZCBvbiB0aGUgc3BlY2lmaWVkXG4gICAgICogcGVyY2VudGFnZSB2YWx1ZSAoMC0xMDApLlxuICAgICAqXG4gICAgICogTm90ZTogdGhpcyBhbmltYXRpb24gd2FzIHByZXZpb3VzbHkgZG9uZSB1c2luZyBTQ1NTLlxuICAgICAqIC0gZ2VuZXJhdGVkIDU0SyBvZiBzdHlsZXNcbiAgICAgKiAtIHVzZSBhdHRyaWJ1dGUgc2VsZWN0b3JzIHdoaWNoIGhhZCBwb29yIHBlcmZvcm1hbmNlcyBpbiBJRVxuICAgICAqL1xuICAgIGFuaW1hdGVJbmRpY2F0b3IodmFsdWU6bnVtYmVyKSB7XG4gICAgICAgIHRoaXMubGVmdFRyYW5zaXRpb249ICh2YWx1ZSA8PSA1MCkgPyBcInRyYW5zZm9ybSAwLjFzIGxpbmVhclwiIDogXCJcIjtcbiAgICAgICAgdGhpcy5yaWdodFRyYW5zaXRpb249ICh2YWx1ZSA+PSA1MCkgPyBcInRyYW5zZm9ybSAwLjFzIGxpbmVhclwiIDogXCJcIjtcblxuICAgICAgICBsZXQgbHQ9dmFsdWUgPD0gNTAgPyAxMzUgOiAoKCh2YWx1ZSAtIDUwKSAvIDUwICogMTgwKSArIDEzNSk7XG4gICAgICAgIHRoaXMubGVmdFRyYW5zZm9ybT1gcm90YXRlKCR7bHR9ZGVnKWA7ICBcblxuICAgICAgICBsZXQgcnQgPSB2YWx1ZSA+PSA1MCA/IDQ1IDogKHZhbHVlIC8gNTAgKiAxODAgLSAxMzUpO1xuICAgICAgICB0aGlzLnJpZ2h0VHJhbnNmb3JtPWByb3RhdGUoJHtydH1kZWcpYDtcbiAgICB9XG5cbn0gXG4gIFxuICAgXG4gXG4gICJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
