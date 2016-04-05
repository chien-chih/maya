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
    var AiProgress;
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
            AiProgress = (function (_super) {
                __extends(AiProgress, _super);
                function AiProgress(ele) {
                    _super.call(this, ele);
                    /** CSS `transform` property applied to the primary bar. */
                    this.BarTransform = '';
                }
                Object.defineProperty(AiProgress.prototype, "value", {
                    get: function () {
                        return this._value;
                    },
                    set: function (v) {
                        if (lang_1.isPresent(v)) {
                            this._value = AiProgress.clamp(v);
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                AiProgress.prototype.ngOnChanges = function (_) {
                    if (lang_1.isBlank(this.value)) {
                        return;
                    }
                    this.BarTransform = this.transformForValue(this.value);
                };
                /** Gets the CSS `transform` property for a progress bar based on the given value (0 - 100). */
                AiProgress.prototype.transformForValue = function (value) {
                    // TODO(jelbourn): test perf gain of caching these, since there are only 101 values.
                    var scale = value / 100;
                    var translateX = (value - 100) / 2;
                    return "translateX(" + translateX + "%) scale(" + scale + ", 1)";
                };
                /** Clamps a value to be between 0 and 100. */
                AiProgress.clamp = function (v) {
                    return math_1.Math.max(0, math_1.Math.min(100, v));
                };
                AiProgress = __decorate([
                    core_1.Component(AiControl_1.AiControl.meta({
                        templateUrl: 'package:src/components/AiProgress/AiProgress.html',
                        selector: 'ai-progress',
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
                ], AiProgress);
                return AiProgress;
            }(AiControl_1.AiControl));
            exports_1("AiProgress", AiProgress);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlQcm9ncmVzcy9BaVByb2dyZXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFxQkE7Z0JBQWdDLDhCQUFTO2dCQU9yQyxvQkFBWSxHQUFlO29CQUN2QixrQkFBTSxHQUFHLENBQUMsQ0FBQztvQkFKZiwyREFBMkQ7b0JBQzNELGlCQUFZLEdBQVMsRUFBRSxDQUFDO2dCQUl4QixDQUFDO2dCQUVELHNCQUFJLDZCQUFLO3lCQUFUO3dCQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO29CQUN2QixDQUFDO3lCQUVELFVBQVUsQ0FBQzt3QkFDUCxFQUFFLENBQUMsQ0FBQyxnQkFBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDakIsSUFBSSxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNwQyxDQUFDO29CQUNMLENBQUM7OzttQkFOQTtnQkFRRCxnQ0FBVyxHQUFYLFVBQVksQ0FBQztvQkFDVCxFQUFFLENBQUMsQ0FBQyxjQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDeEIsTUFBTSxDQUFDO29CQUNULENBQUM7b0JBQ0QsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUMzRCxDQUFDO2dCQUVELCtGQUErRjtnQkFDL0Ysc0NBQWlCLEdBQWpCLFVBQWtCLEtBQUs7b0JBQ25CLG9GQUFvRjtvQkFDcEYsSUFBSSxLQUFLLEdBQUcsS0FBSyxHQUFHLEdBQUcsQ0FBQztvQkFDeEIsSUFBSSxVQUFVLEdBQUcsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNuQyxNQUFNLENBQUMsZ0JBQWMsVUFBVSxpQkFBWSxLQUFLLFNBQU0sQ0FBQztnQkFDM0QsQ0FBQztnQkFFRCw4Q0FBOEM7Z0JBQ3ZDLGdCQUFLLEdBQVosVUFBYSxDQUFDO29CQUNWLE1BQU0sQ0FBQyxXQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxXQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN6QyxDQUFDO2dCQXZETDtvQkFBQyxnQkFBUyxDQUFDLHFCQUFTLENBQUMsSUFBSSxDQUFDO3dCQUNsQixXQUFXLEVBQUMsbURBQW1EO3dCQUMvRCxRQUFRLEVBQUUsYUFBYTt3QkFDdkIsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDO3dCQUNqQixJQUFJLEVBQUU7NEJBQ0YsTUFBTSxFQUFFLGFBQWE7NEJBQ3JCLGVBQWUsRUFBRSxHQUFHOzRCQUNwQixlQUFlLEVBQUUsS0FBSzs0QkFDdEIsc0JBQXNCLEVBQUUsT0FBTzt5QkFDbEM7cUJBQ0osRUFBQzt3QkFDRSxZQUFZLEVBQUMsQ0FBQzt3QkFDZCxXQUFXLEVBQUMsQ0FBQzt3QkFDYixXQUFXLEVBQUMsQ0FBQztxQkFDaEIsQ0FDSixDQUFDOzs4QkFBQTtnQkF5Q0YsaUJBQUM7WUFBRCxDQXhDQSxBQXdDQyxDQXhDK0IscUJBQVMsR0F3Q3hDO1lBeENELG1DQXdDQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvQWlQcm9ncmVzcy9BaVByb2dyZXNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsRWxlbWVudFJlZiwgQXR0cmlidXRlLCBPbkNoYW5nZXN9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtpc1ByZXNlbnQsIGlzQmxhbmt9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZyc7XG5pbXBvcnQge01hdGh9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvbWF0aCc7XG5pbXBvcnQge0FpQ29udHJvbH0gZnJvbSAnLi4vQWlDb250cm9sL0FpQ29udHJvbCc7XG5cbkBDb21wb25lbnQoQWlDb250cm9sLm1ldGEoe1xuICAgICAgICB0ZW1wbGF0ZVVybDoncGFja2FnZTpzcmMvY29tcG9uZW50cy9BaVByb2dyZXNzL0FpUHJvZ3Jlc3MuaHRtbCcsXG4gICAgICAgIHNlbGVjdG9yOiAnYWktcHJvZ3Jlc3MnLFxuICAgICAgICBpbnB1dHM6IFsndmFsdWUnXSxcbiAgICAgICAgaG9zdDoge1xuICAgICAgICAgICAgJ3JvbGUnOiAncHJvZ3Jlc3NiYXInLFxuICAgICAgICAgICAgJ2FyaWEtdmFsdWVtaW4nOiAnMCcsXG4gICAgICAgICAgICAnYXJpYS12YWx1ZW1heCc6ICcxMDAnLFxuICAgICAgICAgICAgJ1thdHRyLmFyaWEtdmFsdWVub3ddJzogJ3ZhbHVlJyxcbiAgICAgICAgfSwgICAgICAgIFxuICAgIH0se1xuICAgICAgICBpZ25vcmVBY3RpdmU6MSxcbiAgICAgICAgaWdub3JlRm9jdXM6MSxcbiAgICAgICAgaWdub3JlSG92ZXI6MVxuICAgIH1cbikpICAgIFxuZXhwb3J0IGNsYXNzIEFpUHJvZ3Jlc3MgZXh0ZW5kcyBBaUNvbnRyb2wgaW1wbGVtZW50cyBPbkNoYW5nZXN7IFxuICAgIC8qKiBWYWx1ZSBmb3IgdGhlIHByaW1hcnkgYmFyLiAqL1xuICAgIF92YWx1ZTogbnVtYmVyO1xuICAgIFxuICAgIC8qKiBDU1MgYHRyYW5zZm9ybWAgcHJvcGVydHkgYXBwbGllZCB0byB0aGUgcHJpbWFyeSBiYXIuICovXG4gICAgQmFyVHJhbnNmb3JtOiBzdHJpbmc9Jyc7XG4gICAgXG4gICAgY29uc3RydWN0b3IoZWxlOiBFbGVtZW50UmVmKSB7IFxuICAgICAgICBzdXBlcihlbGUpOyBcbiAgICB9XG5cbiAgICBnZXQgdmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgICB9XG4gICAgXG4gICAgc2V0IHZhbHVlKHYpIHtcbiAgICAgICAgaWYgKGlzUHJlc2VudCh2KSkge1xuICAgICAgICAgIHRoaXMuX3ZhbHVlID0gQWlQcm9ncmVzcy5jbGFtcCh2KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBuZ09uQ2hhbmdlcyhfKSB7XG4gICAgICAgIGlmIChpc0JsYW5rKHRoaXMudmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuQmFyVHJhbnNmb3JtID0gdGhpcy50cmFuc2Zvcm1Gb3JWYWx1ZSh0aGlzLnZhbHVlKTtcbiAgICB9XG4gICAgXG4gICAgLyoqIEdldHMgdGhlIENTUyBgdHJhbnNmb3JtYCBwcm9wZXJ0eSBmb3IgYSBwcm9ncmVzcyBiYXIgYmFzZWQgb24gdGhlIGdpdmVuIHZhbHVlICgwIC0gMTAwKS4gKi9cbiAgICB0cmFuc2Zvcm1Gb3JWYWx1ZSh2YWx1ZSkge1xuICAgICAgICAvLyBUT0RPKGplbGJvdXJuKTogdGVzdCBwZXJmIGdhaW4gb2YgY2FjaGluZyB0aGVzZSwgc2luY2UgdGhlcmUgYXJlIG9ubHkgMTAxIHZhbHVlcy5cbiAgICAgICAgbGV0IHNjYWxlID0gdmFsdWUgLyAxMDA7XG4gICAgICAgIGxldCB0cmFuc2xhdGVYID0gKHZhbHVlIC0gMTAwKSAvIDI7XG4gICAgICAgIHJldHVybiBgdHJhbnNsYXRlWCgke3RyYW5zbGF0ZVh9JSkgc2NhbGUoJHtzY2FsZX0sIDEpYDtcbiAgICB9XG4gICAgXG4gICAgLyoqIENsYW1wcyBhIHZhbHVlIHRvIGJlIGJldHdlZW4gMCBhbmQgMTAwLiAqL1xuICAgIHN0YXRpYyBjbGFtcCh2KSB7XG4gICAgICAgIHJldHVybiBNYXRoLm1heCgwLCBNYXRoLm1pbigxMDAsIHYpKTtcbiAgICB9XG59IFxuICBcbiAgIFxuIFxuICAiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
