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
            })(AiControl_1.AiControl);
            exports_1("AiProgress", AiProgress);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlQcm9ncmVzcy9BaVByb2dyZXNzLnRzIl0sIm5hbWVzIjpbIkFpUHJvZ3Jlc3MiLCJBaVByb2dyZXNzLmNvbnN0cnVjdG9yIiwiQWlQcm9ncmVzcy52YWx1ZSIsIkFpUHJvZ3Jlc3MubmdPbkNoYW5nZXMiLCJBaVByb2dyZXNzLnRyYW5zZm9ybUZvclZhbHVlIiwiQWlQcm9ncmVzcy5jbGFtcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFLQTtnQkFnQmdDQSw4QkFBU0E7Z0JBT3JDQSxvQkFBWUEsR0FBZUE7b0JBQ3ZCQyxrQkFBTUEsR0FBR0EsQ0FBQ0EsQ0FBQ0E7b0JBSmZBLDJEQUEyREE7b0JBQzNEQSxpQkFBWUEsR0FBU0EsRUFBRUEsQ0FBQ0E7Z0JBSXhCQSxDQUFDQTtnQkFFREQsc0JBQUlBLDZCQUFLQTt5QkFBVEE7d0JBQ0lFLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBO29CQUN2QkEsQ0FBQ0E7eUJBRURGLFVBQVVBLENBQUNBO3dCQUNQRSxFQUFFQSxDQUFDQSxDQUFDQSxnQkFBU0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7NEJBQ2pCQSxJQUFJQSxDQUFDQSxNQUFNQSxHQUFHQSxVQUFVQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTt3QkFDcENBLENBQUNBO29CQUNMQSxDQUFDQTs7O21CQU5BRjtnQkFRREEsZ0NBQVdBLEdBQVhBLFVBQVlBLENBQUNBO29CQUNURyxFQUFFQSxDQUFDQSxDQUFDQSxjQUFPQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTt3QkFDeEJBLE1BQU1BLENBQUNBO29CQUNUQSxDQUFDQTtvQkFDREEsSUFBSUEsQ0FBQ0EsWUFBWUEsR0FBR0EsSUFBSUEsQ0FBQ0EsaUJBQWlCQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtnQkFDM0RBLENBQUNBO2dCQUVESCwrRkFBK0ZBO2dCQUMvRkEsc0NBQWlCQSxHQUFqQkEsVUFBa0JBLEtBQUtBO29CQUNuQkksb0ZBQW9GQTtvQkFDcEZBLElBQUlBLEtBQUtBLEdBQUdBLEtBQUtBLEdBQUdBLEdBQUdBLENBQUNBO29CQUN4QkEsSUFBSUEsVUFBVUEsR0FBR0EsQ0FBQ0EsS0FBS0EsR0FBR0EsR0FBR0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7b0JBQ25DQSxNQUFNQSxDQUFDQSxnQkFBY0EsVUFBVUEsaUJBQVlBLEtBQUtBLFNBQU1BLENBQUNBO2dCQUMzREEsQ0FBQ0E7Z0JBRURKLDhDQUE4Q0E7Z0JBQ3ZDQSxnQkFBS0EsR0FBWkEsVUFBYUEsQ0FBQ0E7b0JBQ1ZLLE1BQU1BLENBQUNBLFdBQUlBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLEVBQUVBLFdBQUlBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO2dCQUN6Q0EsQ0FBQ0E7Z0JBdkRMTDtvQkFBQ0EsZ0JBQVNBLENBQUNBLHFCQUFTQSxDQUFDQSxJQUFJQSxDQUFDQTt3QkFDbEJBLFdBQVdBLEVBQUNBLG1EQUFtREE7d0JBQy9EQSxRQUFRQSxFQUFFQSxhQUFhQTt3QkFDdkJBLE1BQU1BLEVBQUVBLENBQUNBLE9BQU9BLENBQUNBO3dCQUNqQkEsSUFBSUEsRUFBRUE7NEJBQ0ZBLE1BQU1BLEVBQUVBLGFBQWFBOzRCQUNyQkEsZUFBZUEsRUFBRUEsR0FBR0E7NEJBQ3BCQSxlQUFlQSxFQUFFQSxLQUFLQTs0QkFDdEJBLHNCQUFzQkEsRUFBRUEsT0FBT0E7eUJBQ2xDQTtxQkFDSkEsRUFBQ0E7d0JBQ0VBLFlBQVlBLEVBQUNBLENBQUNBO3dCQUNkQSxXQUFXQSxFQUFDQSxDQUFDQTt3QkFDYkEsV0FBV0EsRUFBQ0EsQ0FBQ0E7cUJBQ2hCQSxDQUNKQSxDQUFDQTs7K0JBeUNEQTtnQkFBREEsaUJBQUNBO1lBQURBLENBeERBLEFBd0RDQSxFQXhDK0IscUJBQVMsRUF3Q3hDO1lBeERELG1DQXdEQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvQWlQcm9ncmVzcy9BaVByb2dyZXNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsRWxlbWVudFJlZiwgQXR0cmlidXRlLCBPbkNoYW5nZXN9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtpc1ByZXNlbnQsIGlzQmxhbmt9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZyc7XG5pbXBvcnQge01hdGh9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvbWF0aCc7XG5pbXBvcnQge0FpQ29udHJvbH0gZnJvbSAnLi4vQWlDb250cm9sL0FpQ29udHJvbCc7XG5cbkBDb21wb25lbnQoQWlDb250cm9sLm1ldGEoe1xuICAgICAgICB0ZW1wbGF0ZVVybDoncGFja2FnZTpzcmMvY29tcG9uZW50cy9BaVByb2dyZXNzL0FpUHJvZ3Jlc3MuaHRtbCcsXG4gICAgICAgIHNlbGVjdG9yOiAnYWktcHJvZ3Jlc3MnLFxuICAgICAgICBpbnB1dHM6IFsndmFsdWUnXSxcbiAgICAgICAgaG9zdDoge1xuICAgICAgICAgICAgJ3JvbGUnOiAncHJvZ3Jlc3NiYXInLFxuICAgICAgICAgICAgJ2FyaWEtdmFsdWVtaW4nOiAnMCcsXG4gICAgICAgICAgICAnYXJpYS12YWx1ZW1heCc6ICcxMDAnLFxuICAgICAgICAgICAgJ1thdHRyLmFyaWEtdmFsdWVub3ddJzogJ3ZhbHVlJyxcbiAgICAgICAgfSwgICAgICAgIFxuICAgIH0se1xuICAgICAgICBpZ25vcmVBY3RpdmU6MSxcbiAgICAgICAgaWdub3JlRm9jdXM6MSxcbiAgICAgICAgaWdub3JlSG92ZXI6MVxuICAgIH1cbikpICAgIFxuZXhwb3J0IGNsYXNzIEFpUHJvZ3Jlc3MgZXh0ZW5kcyBBaUNvbnRyb2wgaW1wbGVtZW50cyBPbkNoYW5nZXN7IFxuICAgIC8qKiBWYWx1ZSBmb3IgdGhlIHByaW1hcnkgYmFyLiAqL1xuICAgIF92YWx1ZTogbnVtYmVyO1xuICAgIFxuICAgIC8qKiBDU1MgYHRyYW5zZm9ybWAgcHJvcGVydHkgYXBwbGllZCB0byB0aGUgcHJpbWFyeSBiYXIuICovXG4gICAgQmFyVHJhbnNmb3JtOiBzdHJpbmc9Jyc7XG4gICAgXG4gICAgY29uc3RydWN0b3IoZWxlOiBFbGVtZW50UmVmKSB7IFxuICAgICAgICBzdXBlcihlbGUpOyBcbiAgICB9XG5cbiAgICBnZXQgdmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgICB9XG4gICAgXG4gICAgc2V0IHZhbHVlKHYpIHtcbiAgICAgICAgaWYgKGlzUHJlc2VudCh2KSkge1xuICAgICAgICAgIHRoaXMuX3ZhbHVlID0gQWlQcm9ncmVzcy5jbGFtcCh2KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBuZ09uQ2hhbmdlcyhfKSB7XG4gICAgICAgIGlmIChpc0JsYW5rKHRoaXMudmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuQmFyVHJhbnNmb3JtID0gdGhpcy50cmFuc2Zvcm1Gb3JWYWx1ZSh0aGlzLnZhbHVlKTtcbiAgICB9XG4gICAgXG4gICAgLyoqIEdldHMgdGhlIENTUyBgdHJhbnNmb3JtYCBwcm9wZXJ0eSBmb3IgYSBwcm9ncmVzcyBiYXIgYmFzZWQgb24gdGhlIGdpdmVuIHZhbHVlICgwIC0gMTAwKS4gKi9cbiAgICB0cmFuc2Zvcm1Gb3JWYWx1ZSh2YWx1ZSkge1xuICAgICAgICAvLyBUT0RPKGplbGJvdXJuKTogdGVzdCBwZXJmIGdhaW4gb2YgY2FjaGluZyB0aGVzZSwgc2luY2UgdGhlcmUgYXJlIG9ubHkgMTAxIHZhbHVlcy5cbiAgICAgICAgbGV0IHNjYWxlID0gdmFsdWUgLyAxMDA7XG4gICAgICAgIGxldCB0cmFuc2xhdGVYID0gKHZhbHVlIC0gMTAwKSAvIDI7XG4gICAgICAgIHJldHVybiBgdHJhbnNsYXRlWCgke3RyYW5zbGF0ZVh9JSkgc2NhbGUoJHtzY2FsZX0sIDEpYDtcbiAgICB9XG4gICAgXG4gICAgLyoqIENsYW1wcyBhIHZhbHVlIHRvIGJlIGJldHdlZW4gMCBhbmQgMTAwLiAqL1xuICAgIHN0YXRpYyBjbGFtcCh2KSB7XG4gICAgICAgIHJldHVybiBNYXRoLm1heCgwLCBNYXRoLm1pbigxMDAsIHYpKTtcbiAgICB9XG59IFxuICBcbiAgIFxuIFxuICAiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
