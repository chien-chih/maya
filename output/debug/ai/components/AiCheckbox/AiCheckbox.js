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
    var AiCheckbox;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (AiControl_1_1) {
                AiControl_1 = AiControl_1_1;
            }],
        execute: function() {
            AiCheckbox = (function (_super) {
                __extends(AiCheckbox, _super);
                function AiCheckbox(ele) {
                    _super.call(this, ele);
                    this.value = false;
                }
                AiCheckbox.prototype.toggle = function () {
                    if (!this.disabled)
                        this.value = !this.value;
                };
                AiCheckbox = __decorate([
                    core_1.Component(AiControl_1.AiControl.meta({
                        templateUrl: 'package:src/components/AiCheckbox/AiCheckbox.html',
                        selector: 'ai-checkbox',
                        inputs: ['value'],
                        host: {
                            '(click)': 'toggle()',
                            '[class.checked]': 'value',
                        },
                    })), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], AiCheckbox);
                return AiCheckbox;
            })(AiControl_1.AiControl);
            exports_1("AiCheckbox", AiCheckbox);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlDaGVja2JveC9BaUNoZWNrYm94LnRzIl0sIm5hbWVzIjpbIkFpQ2hlY2tib3giLCJBaUNoZWNrYm94LmNvbnN0cnVjdG9yIiwiQWlDaGVja2JveC50b2dnbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBR0E7Z0JBU2dDQSw4QkFBU0E7Z0JBR3JDQSxvQkFBWUEsR0FBZUE7b0JBQ3ZCQyxrQkFBTUEsR0FBR0EsQ0FBQ0EsQ0FBQ0E7b0JBSGZBLFVBQUtBLEdBQVNBLEtBQUtBLENBQUNBO2dCQUlwQkEsQ0FBQ0E7Z0JBQ0RELDJCQUFNQSxHQUFOQTtvQkFDSUUsRUFBRUEsQ0FBQUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0E7d0JBQ2RBLElBQUlBLENBQUNBLEtBQUtBLEdBQUNBLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBO2dCQUMvQkEsQ0FBQ0E7Z0JBbEJMRjtvQkFBQ0EsZ0JBQVNBLENBQUNBLHFCQUFTQSxDQUFDQSxJQUFJQSxDQUFDQTt3QkFDdEJBLFdBQVdBLEVBQUNBLG1EQUFtREE7d0JBQy9EQSxRQUFRQSxFQUFFQSxhQUFhQTt3QkFDdkJBLE1BQU1BLEVBQUNBLENBQUNBLE9BQU9BLENBQUNBO3dCQUNoQkEsSUFBSUEsRUFBQ0E7NEJBQ0RBLFNBQVNBLEVBQUNBLFVBQVVBOzRCQUNwQkEsaUJBQWlCQSxFQUFFQSxPQUFPQTt5QkFDN0JBO3FCQUNKQSxDQUFDQSxDQUFDQTs7K0JBWUZBO2dCQUFEQSxpQkFBQ0E7WUFBREEsQ0FwQkEsQUFvQkNBLEVBWCtCLHFCQUFTLEVBV3hDO1lBcEJELG1DQW9CQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvQWlDaGVja2JveC9BaUNoZWNrYm94LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsRWxlbWVudFJlZixSZW5kZXJlcn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0FpQ29udHJvbH0gZnJvbSAnLi4vQWlDb250cm9sL0FpQ29udHJvbCc7XG5cbkBDb21wb25lbnQoQWlDb250cm9sLm1ldGEoe1xuICAgIHRlbXBsYXRlVXJsOidwYWNrYWdlOnNyYy9jb21wb25lbnRzL0FpQ2hlY2tib3gvQWlDaGVja2JveC5odG1sJyxcbiAgICBzZWxlY3RvcjogJ2FpLWNoZWNrYm94JyxcbiAgICBpbnB1dHM6Wyd2YWx1ZSddLFxuICAgIGhvc3Q6e1xuICAgICAgICAnKGNsaWNrKSc6J3RvZ2dsZSgpJyxcbiAgICAgICAgJ1tjbGFzcy5jaGVja2VkXSc6ICd2YWx1ZScsXG4gICAgfSxcbn0pKSAgICBcbmV4cG9ydCBjbGFzcyBBaUNoZWNrYm94IGV4dGVuZHMgQWlDb250cm9seyBcbiAgICB2YWx1ZTpib29sZWFuPWZhbHNlOyBcbiAgICBcbiAgICBjb25zdHJ1Y3RvcihlbGU6IEVsZW1lbnRSZWYpIHsgIFxuICAgICAgICBzdXBlcihlbGUpOyBcbiAgICB9XG4gICAgdG9nZ2xlKCk6dm9pZHtcbiAgICAgICAgaWYoIXRoaXMuZGlzYWJsZWQpXG4gICAgICAgICAgICB0aGlzLnZhbHVlPSF0aGlzLnZhbHVlO1xuICAgIH1cblxufSBcbiAgXG4gICBcbiBcbiAgIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
