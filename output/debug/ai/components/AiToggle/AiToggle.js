System.register(['angular2/core', 'angular2/src/facade/async', '../AiControl/AiControl'], function(exports_1) {
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
    var core_1, async_1, AiControl_1;
    var AiToggle;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (async_1_1) {
                async_1 = async_1_1;
            },
            function (AiControl_1_1) {
                AiControl_1 = AiControl_1_1;
            }],
        execute: function() {
            AiToggle = (function (_super) {
                __extends(AiToggle, _super);
                function AiToggle(ele) {
                    _super.call(this, ele);
                    this.value = false;
                    this._up = 'check_box_outline_blank';
                    this._down = 'check_box';
                    this.onchange = new async_1.EventEmitter();
                }
                AiToggle.prototype.toggle = function () {
                    if (!this.disabled) {
                        this.value = !this.value;
                    }
                };
                AiToggle.prototype.onClick = function () {
                    this.toggle();
                };
                Object.defineProperty(AiToggle.prototype, "current", {
                    get: function () {
                        if (this.value)
                            return this._down;
                        return this._up;
                    },
                    set: function (v) {
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AiToggle.prototype, "up", {
                    get: function () {
                        return this._up;
                    },
                    set: function (v) {
                        this._up = v;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AiToggle.prototype, "down", {
                    get: function () {
                        return this._down;
                    },
                    set: function (v) {
                        this._down = v;
                        this.current = v;
                    },
                    enumerable: true,
                    configurable: true
                });
                AiToggle = __decorate([
                    core_1.Component(AiControl_1.AiControl.meta({
                        templateUrl: 'package:src/components/AiToggle/AiToggle.html',
                        selector: 'ai-toggle',
                        inputs: ['value', 'up', 'down'],
                        outputs: ['onchange'],
                        host: {
                            '[class.checked]': 'value',
                        },
                    })), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], AiToggle);
                return AiToggle;
            })(AiControl_1.AiControl);
            exports_1("AiToggle", AiToggle);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlUb2dnbGUvQWlUb2dnbGUudHMiXSwibmFtZXMiOlsiQWlUb2dnbGUiLCJBaVRvZ2dsZS5jb25zdHJ1Y3RvciIsIkFpVG9nZ2xlLnRvZ2dsZSIsIkFpVG9nZ2xlLm9uQ2xpY2siLCJBaVRvZ2dsZS5jdXJyZW50IiwiQWlUb2dnbGUudXAiLCJBaVRvZ2dsZS5kb3duIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUlBO2dCQVM4QkEsNEJBQVNBO2dCQVFuQ0Esa0JBQVlBLEdBQWVBO29CQUN2QkMsa0JBQU1BLEdBQUdBLENBQUNBLENBQUNBO29CQVBmQSxVQUFLQSxHQUFTQSxLQUFLQSxDQUFDQTtvQkFDcEJBLFFBQUdBLEdBQVFBLHlCQUF5QkEsQ0FBQ0E7b0JBQ3JDQSxVQUFLQSxHQUFRQSxXQUFXQSxDQUFDQTtvQkFFekJBLGFBQVFBLEdBQW9CQSxJQUFJQSxvQkFBWUEsRUFBRUEsQ0FBQ0E7Z0JBSS9DQSxDQUFDQTtnQkFDREQseUJBQU1BLEdBQU5BO29CQUNJRSxFQUFFQSxDQUFBQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFBQSxDQUFDQTt3QkFDZkEsSUFBSUEsQ0FBQ0EsS0FBS0EsR0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0E7b0JBQzNCQSxDQUFDQTtnQkFDTEEsQ0FBQ0E7Z0JBRURGLDBCQUFPQSxHQUFQQTtvQkFDSUcsSUFBSUEsQ0FBQ0EsTUFBTUEsRUFBRUEsQ0FBQ0E7Z0JBQ2xCQSxDQUFDQTtnQkFFREgsc0JBQUlBLDZCQUFPQTt5QkFBWEE7d0JBQ0lJLEVBQUVBLENBQUFBLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBOzRCQUFDQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQTt3QkFDakNBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBO29CQUNwQkEsQ0FBQ0E7eUJBQ0RKLFVBQVlBLENBQVNBO29CQUNyQkksQ0FBQ0E7OzttQkFGQUo7Z0JBS0RBLHNCQUFJQSx3QkFBRUE7eUJBQU5BO3dCQUNJSyxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQTtvQkFDcEJBLENBQUNBO3lCQUNETCxVQUFPQSxDQUFTQTt3QkFDWkssSUFBSUEsQ0FBQ0EsR0FBR0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7b0JBQ2pCQSxDQUFDQTs7O21CQUhBTDtnQkFLREEsc0JBQUlBLDBCQUFJQTt5QkFBUkE7d0JBQ0lNLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBO29CQUN0QkEsQ0FBQ0E7eUJBQ0ROLFVBQVNBLENBQVNBO3dCQUNkTSxJQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxDQUFDQSxDQUFDQTt3QkFDZkEsSUFBSUEsQ0FBQ0EsT0FBT0EsR0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0JBQ25CQSxDQUFDQTs7O21CQUpBTjtnQkEvQ0xBO29CQUFDQSxnQkFBU0EsQ0FBQ0EscUJBQVNBLENBQUNBLElBQUlBLENBQUNBO3dCQUN0QkEsV0FBV0EsRUFBQ0EsK0NBQStDQTt3QkFDM0RBLFFBQVFBLEVBQUVBLFdBQVdBO3dCQUNyQkEsTUFBTUEsRUFBQ0EsQ0FBQ0EsT0FBT0EsRUFBQ0EsSUFBSUEsRUFBQ0EsTUFBTUEsQ0FBQ0E7d0JBQzVCQSxPQUFPQSxFQUFDQSxDQUFDQSxVQUFVQSxDQUFDQTt3QkFDcEJBLElBQUlBLEVBQUNBOzRCQUNEQSxpQkFBaUJBLEVBQUVBLE9BQU9BO3lCQUM3QkE7cUJBQ0pBLENBQUNBLENBQUNBOzs2QkE2Q0ZBO2dCQUFEQSxlQUFDQTtZQUFEQSxDQXJEQSxBQXFEQ0EsRUE1QzZCLHFCQUFTLEVBNEN0QztZQXJERCwrQkFxREMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL0FpVG9nZ2xlL0FpVG9nZ2xlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsRWxlbWVudFJlZn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge09ic2VydmFibGVXcmFwcGVyLEV2ZW50RW1pdHRlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9hc3luYyc7XG5pbXBvcnQge0FpQ29udHJvbH0gZnJvbSAnLi4vQWlDb250cm9sL0FpQ29udHJvbCc7XG5cbkBDb21wb25lbnQoQWlDb250cm9sLm1ldGEoe1xuICAgIHRlbXBsYXRlVXJsOidwYWNrYWdlOnNyYy9jb21wb25lbnRzL0FpVG9nZ2xlL0FpVG9nZ2xlLmh0bWwnLFxuICAgIHNlbGVjdG9yOiAnYWktdG9nZ2xlJyxcbiAgICBpbnB1dHM6Wyd2YWx1ZScsJ3VwJywnZG93biddLFxuICAgIG91dHB1dHM6WydvbmNoYW5nZSddLFxuICAgIGhvc3Q6e1xuICAgICAgICAnW2NsYXNzLmNoZWNrZWRdJzogJ3ZhbHVlJyxcbiAgICB9LFxufSkpICAgIFxuZXhwb3J0IGNsYXNzIEFpVG9nZ2xlIGV4dGVuZHMgQWlDb250cm9seyBcblxuICAgIHZhbHVlOmJvb2xlYW49ZmFsc2U7IFxuICAgIF91cDpzdHJpbmc9J2NoZWNrX2JveF9vdXRsaW5lX2JsYW5rJztcbiAgICBfZG93bjpzdHJpbmc9J2NoZWNrX2JveCc7XG5cbiAgICBvbmNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT49bmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgY29uc3RydWN0b3IoZWxlOiBFbGVtZW50UmVmKSB7ICBcbiAgICAgICAgc3VwZXIoZWxlKTsgXG4gICAgfVxuICAgIHRvZ2dsZSgpOnZvaWR7XG4gICAgICAgIGlmKCF0aGlzLmRpc2FibGVkKXtcbiAgICAgICAgICAgIHRoaXMudmFsdWU9IXRoaXMudmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkNsaWNrKCl7XG4gICAgICAgIHRoaXMudG9nZ2xlKCk7XG4gICAgfVxuICAgIFxuICAgIGdldCBjdXJyZW50KCk6IHN0cmluZyB7XG4gICAgICAgIGlmKHRoaXMudmFsdWUpIHJldHVybiB0aGlzLl9kb3duO1xuICAgICAgICByZXR1cm4gdGhpcy5fdXA7XG4gICAgfVxuICAgIHNldCBjdXJyZW50KHY6IHN0cmluZykge1xuICAgIH1cblxuXG4gICAgZ2V0IHVwKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl91cDtcbiAgICB9XG4gICAgc2V0IHVwKHY6IHN0cmluZykge1xuICAgICAgICB0aGlzLl91cCA9IHY7XG4gICAgfVxuXG4gICAgZ2V0IGRvd24oKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Rvd247XG4gICAgfVxuICAgIHNldCBkb3duKHY6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9kb3duID0gdjtcbiAgICAgICAgdGhpcy5jdXJyZW50PXY7XG4gICAgfVxuXG59IFxuICBcbiAgIFxuIFxuICAiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
