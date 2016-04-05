System.register(['angular2/core', '../AiToggle/AiToggle'], function(exports_1, context_1) {
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
    var core_1, AiToggle_1;
    var AiCheck;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (AiToggle_1_1) {
                AiToggle_1 = AiToggle_1_1;
            }],
        execute: function() {
            AiCheck = (function (_super) {
                __extends(AiCheck, _super);
                function AiCheck(ele) {
                    _super.call(this, ele);
                    this.value = false;
                    this.up = 'check_box_outline_blank';
                    this.down = 'check_box';
                }
                AiCheck.prototype.onClick = function () {
                    this.toggle();
                };
                Object.defineProperty(AiCheck.prototype, "icon", {
                    get: function () {
                        if (this.checked)
                            return this.down;
                        return this.up;
                    },
                    enumerable: true,
                    configurable: true
                });
                AiCheck = __decorate([
                    core_1.Component(AiToggle_1.AiToggle.meta({
                        templateUrl: 'package:src/components/AiCheck/AiCheck.html',
                        selector: 'ai-check',
                        inputs: ['up', 'down'],
                    })), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], AiCheck);
                return AiCheck;
            }(AiToggle_1.AiToggle));
            exports_1("AiCheck", AiCheck);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlDaGVjay9BaUNoZWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFTQTtnQkFBNkIsMkJBQVE7Z0JBTWpDLGlCQUFZLEdBQWU7b0JBQ3ZCLGtCQUFNLEdBQUcsQ0FBQyxDQUFDO29CQUxmLFVBQUssR0FBUyxLQUFLLENBQUM7b0JBQ3BCLE9BQUUsR0FBUSx5QkFBeUIsQ0FBQztvQkFDcEMsU0FBSSxHQUFRLFdBQVcsQ0FBQztnQkFJeEIsQ0FBQztnQkFHRCx5QkFBTyxHQUFQO29CQUNJLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDbEIsQ0FBQztnQkFFRCxzQkFBSSx5QkFBSTt5QkFBUjt3QkFDSSxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDOzRCQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO3dCQUNsQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztvQkFDbkIsQ0FBQzs7O21CQUFBO2dCQXZCTDtvQkFBQyxnQkFBUyxDQUFDLG1CQUFRLENBQUMsSUFBSSxDQUFDO3dCQUNyQixXQUFXLEVBQUMsNkNBQTZDO3dCQUN6RCxRQUFRLEVBQUUsVUFBVTt3QkFDcEIsTUFBTSxFQUFDLENBQUMsSUFBSSxFQUFDLE1BQU0sQ0FBQztxQkFDdkIsQ0FBQyxDQUFDOzsyQkFBQTtnQkFxQkgsY0FBQztZQUFELENBcEJBLEFBb0JDLENBcEI0QixtQkFBUSxHQW9CcEM7WUFwQkQsNkJBb0JDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9BaUNoZWNrL0FpQ2hlY2suanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCxFbGVtZW50UmVmfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7T2JzZXJ2YWJsZVdyYXBwZXIsRXZlbnRFbWl0dGVyfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2FzeW5jJztcbmltcG9ydCB7QWlUb2dnbGV9IGZyb20gJy4uL0FpVG9nZ2xlL0FpVG9nZ2xlJztcblxuQENvbXBvbmVudChBaVRvZ2dsZS5tZXRhKHtcbiAgICB0ZW1wbGF0ZVVybDoncGFja2FnZTpzcmMvY29tcG9uZW50cy9BaUNoZWNrL0FpQ2hlY2suaHRtbCcsXG4gICAgc2VsZWN0b3I6ICdhaS1jaGVjaycsXG4gICAgaW5wdXRzOlsndXAnLCdkb3duJ10sXG59KSkgICAgXG5leHBvcnQgY2xhc3MgQWlDaGVjayBleHRlbmRzIEFpVG9nZ2xleyBcblxuICAgIHZhbHVlOmJvb2xlYW49ZmFsc2U7IFxuICAgIHVwOnN0cmluZz0nY2hlY2tfYm94X291dGxpbmVfYmxhbmsnO1xuICAgIGRvd246c3RyaW5nPSdjaGVja19ib3gnO1xuXG4gICAgY29uc3RydWN0b3IoZWxlOiBFbGVtZW50UmVmKSB7ICBcbiAgICAgICAgc3VwZXIoZWxlKTsgXG4gICAgfVxuXG5cbiAgICBvbkNsaWNrKCl7XG4gICAgICAgIHRoaXMudG9nZ2xlKCk7XG4gICAgfVxuICAgIFxuICAgIGdldCBpY29uKCk6IHN0cmluZyB7XG4gICAgICAgIGlmKHRoaXMuY2hlY2tlZCkgcmV0dXJuIHRoaXMuZG93bjtcbiAgICAgICAgcmV0dXJuIHRoaXMudXA7XG4gICAgfVxuXG59IFxuICBcbiAgIFxuIFxuICAiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
