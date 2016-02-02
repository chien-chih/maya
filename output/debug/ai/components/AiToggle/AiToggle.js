System.register(['angular2/core', '../AiControl/AiControl'], function(exports_1) {
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
    var core_1, AiControl_1;
    var AiToggle;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
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
                    this._current = 'check_box_outline_blank';
                }
                AiToggle.prototype.toggle = function () {
                    if (!this.disabled)
                        this.value = !this.value;
                };
                Object.defineProperty(AiToggle.prototype, "current", {
                    get: function () {
                        return this._current;
                    },
                    set: function (v) {
                        this._current = v;
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
                        host: {
                            '(click)': 'toggle()',
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlUb2dnbGUvQWlUb2dnbGUudHMiXSwibmFtZXMiOlsiQWlUb2dnbGUiLCJBaVRvZ2dsZS5jb25zdHJ1Y3RvciIsIkFpVG9nZ2xlLnRvZ2dsZSIsIkFpVG9nZ2xlLmN1cnJlbnQiLCJBaVRvZ2dsZS51cCIsIkFpVG9nZ2xlLmRvd24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBR0E7Z0JBUzhCQSw0QkFBU0E7Z0JBS25DQSxrQkFBWUEsR0FBZUE7b0JBQ3ZCQyxrQkFBTUEsR0FBR0EsQ0FBQ0EsQ0FBQ0E7b0JBTGZBLFVBQUtBLEdBQVNBLEtBQUtBLENBQUNBO29CQUNwQkEsUUFBR0EsR0FBUUEseUJBQXlCQSxDQUFDQTtvQkFDckNBLFVBQUtBLEdBQVFBLFdBQVdBLENBQUNBO29CQUN6QkEsYUFBUUEsR0FBUUEseUJBQXlCQSxDQUFDQTtnQkFHMUNBLENBQUNBO2dCQUNERCx5QkFBTUEsR0FBTkE7b0JBQ0lFLEVBQUVBLENBQUFBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBO3dCQUNkQSxJQUFJQSxDQUFDQSxLQUFLQSxHQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQTtnQkFDL0JBLENBQUNBO2dCQUVERixzQkFBSUEsNkJBQU9BO3lCQUFYQTt3QkFDSUcsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0E7b0JBQ3pCQSxDQUFDQTt5QkFDREgsVUFBWUEsQ0FBU0E7d0JBQ2pCRyxJQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxDQUFDQSxDQUFDQTtvQkFDdEJBLENBQUNBOzs7bUJBSEFIO2dCQU1EQSxzQkFBSUEsd0JBQUVBO3lCQUFOQTt3QkFDSUksTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0E7b0JBQ3BCQSxDQUFDQTt5QkFDREosVUFBT0EsQ0FBU0E7d0JBQ1pJLElBQUlBLENBQUNBLEdBQUdBLEdBQUdBLENBQUNBLENBQUNBO29CQUNqQkEsQ0FBQ0E7OzttQkFIQUo7Z0JBS0RBLHNCQUFJQSwwQkFBSUE7eUJBQVJBO3dCQUNJSyxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQTtvQkFDdEJBLENBQUNBO3lCQUNETCxVQUFTQSxDQUFTQTt3QkFDZEssSUFBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7d0JBQ2ZBLElBQUlBLENBQUNBLE9BQU9BLEdBQUNBLENBQUNBLENBQUNBO29CQUNuQkEsQ0FBQ0E7OzttQkFKQUw7Z0JBdkNMQTtvQkFBQ0EsZ0JBQVNBLENBQUNBLHFCQUFTQSxDQUFDQSxJQUFJQSxDQUFDQTt3QkFDdEJBLFdBQVdBLEVBQUNBLCtDQUErQ0E7d0JBQzNEQSxRQUFRQSxFQUFFQSxXQUFXQTt3QkFDckJBLE1BQU1BLEVBQUNBLENBQUNBLE9BQU9BLEVBQUNBLElBQUlBLEVBQUNBLE1BQU1BLENBQUNBO3dCQUM1QkEsSUFBSUEsRUFBQ0E7NEJBQ0RBLFNBQVNBLEVBQUNBLFVBQVVBOzRCQUNwQkEsaUJBQWlCQSxFQUFFQSxPQUFPQTt5QkFDN0JBO3FCQUNKQSxDQUFDQSxDQUFDQTs7NkJBcUNGQTtnQkFBREEsZUFBQ0E7WUFBREEsQ0E3Q0EsQUE2Q0NBLEVBcEM2QixxQkFBUyxFQW9DdEM7WUE3Q0QsK0JBNkNDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9BaVRvZ2dsZS9BaVRvZ2dsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LEVsZW1lbnRSZWYsUmVuZGVyZXJ9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtBaUNvbnRyb2x9IGZyb20gJy4uL0FpQ29udHJvbC9BaUNvbnRyb2wnO1xuXG5AQ29tcG9uZW50KEFpQ29udHJvbC5tZXRhKHtcbiAgICB0ZW1wbGF0ZVVybDoncGFja2FnZTpzcmMvY29tcG9uZW50cy9BaVRvZ2dsZS9BaVRvZ2dsZS5odG1sJyxcbiAgICBzZWxlY3RvcjogJ2FpLXRvZ2dsZScsXG4gICAgaW5wdXRzOlsndmFsdWUnLCd1cCcsJ2Rvd24nXSxcbiAgICBob3N0OntcbiAgICAgICAgJyhjbGljayknOid0b2dnbGUoKScsXG4gICAgICAgICdbY2xhc3MuY2hlY2tlZF0nOiAndmFsdWUnLFxuICAgIH0sXG59KSkgICAgXG5leHBvcnQgY2xhc3MgQWlUb2dnbGUgZXh0ZW5kcyBBaUNvbnRyb2x7IFxuICAgIHZhbHVlOmJvb2xlYW49ZmFsc2U7IFxuICAgIF91cDpzdHJpbmc9J2NoZWNrX2JveF9vdXRsaW5lX2JsYW5rJztcbiAgICBfZG93bjpzdHJpbmc9J2NoZWNrX2JveCc7XG4gICAgX2N1cnJlbnQ6c3RyaW5nPSdjaGVja19ib3hfb3V0bGluZV9ibGFuayc7XG4gICAgY29uc3RydWN0b3IoZWxlOiBFbGVtZW50UmVmKSB7ICBcbiAgICAgICAgc3VwZXIoZWxlKTsgXG4gICAgfVxuICAgIHRvZ2dsZSgpOnZvaWR7XG4gICAgICAgIGlmKCF0aGlzLmRpc2FibGVkKVxuICAgICAgICAgICAgdGhpcy52YWx1ZT0hdGhpcy52YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgY3VycmVudCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fY3VycmVudDtcbiAgICB9XG4gICAgc2V0IGN1cnJlbnQodjogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX2N1cnJlbnQgPSB2O1xuICAgIH1cblxuXG4gICAgZ2V0IHVwKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl91cDtcbiAgICB9XG4gICAgc2V0IHVwKHY6IHN0cmluZykge1xuICAgICAgICB0aGlzLl91cCA9IHY7XG4gICAgfVxuXG4gICAgZ2V0IGRvd24oKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Rvd247XG4gICAgfVxuICAgIHNldCBkb3duKHY6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9kb3duID0gdjtcbiAgICAgICAgdGhpcy5jdXJyZW50PXY7XG4gICAgfVxuXG59IFxuICBcbiAgIFxuIFxuICAiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
