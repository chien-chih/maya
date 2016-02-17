System.register(['angular2/core', 'angular2/src/facade/lang', '../AiControl/AiControl', './AiRadioGroup', './AiRadioDispatcher'], function(exports_1) {
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
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, lang_1, AiControl_1, AiRadioGroup_1, AiRadioDispatcher_1;
    var _uniqueIdCounter, AiRadio;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (lang_1_1) {
                lang_1 = lang_1_1;
            },
            function (AiControl_1_1) {
                AiControl_1 = AiControl_1_1;
            },
            function (AiRadioGroup_1_1) {
                AiRadioGroup_1 = AiRadioGroup_1_1;
            },
            function (AiRadioDispatcher_1_1) {
                AiRadioDispatcher_1 = AiRadioDispatcher_1_1;
            }],
        execute: function() {
            _uniqueIdCounter = 0;
            AiRadio = (function (_super) {
                __extends(AiRadio, _super);
                function AiRadio(ele, id, radioGroup, radioDispatcher) {
                    var _this = this;
                    _super.call(this, ele);
                    this.radioDispatcher = radioDispatcher;
                    /** Whether this radio is checked. */
                    this.checked = false;
                    /** Value assigned to this radio. Used to assign the value to the parent RadioGroup. */
                    this.value = null;
                    this.radioGroup = radioGroup;
                    this.id = lang_1.isPresent(id) ? id : "ai-radio-" + _uniqueIdCounter++;
                    // Whenever a radio button with the same name is checked, uncheck this radio button.
                    radioDispatcher.listen(function (name) {
                        if (name == _this.name) {
                            _this.checked = false;
                        }
                    });
                    // When this radio-button is inside of a radio-group, the group determines the name.
                    this.name = radioGroup.getName();
                    this.radioGroup.register(this);
                }
                /** Change handler invoked when bindings are resolved or when bindings have changed. */
                AiRadio.prototype.ngOnInit = function () {
                    this.name = this.radioGroup.getName();
                };
                Object.defineProperty(AiRadio.prototype, "icon", {
                    get: function () {
                        if (this.checked)
                            return 'radio_button_checked';
                        return 'radio_button_unchecked';
                    },
                    enumerable: true,
                    configurable: true
                });
                AiRadio.prototype.onClick = function () {
                    this.select();
                };
                /** Select this radio button. */
                AiRadio.prototype.select = function () {
                    if (!this.disabled) {
                        this.radioDispatcher.notify(this.name);
                        this.checked = true;
                        if (lang_1.isPresent(this.radioGroup)) {
                            this.radioGroup.updateValue(this.value, this.id);
                        }
                    }
                };
                AiRadio = __decorate([
                    core_1.Component(AiControl_1.AiControl.meta({
                        templateUrl: 'package:src/components/AiRadio/AiRadio.html',
                        selector: 'ai-radio',
                        inputs: ['id', 'name', 'value', 'checked'],
                        host: {
                            '[class.checked]': 'value',
                        },
                    })),
                    __param(1, core_1.Attribute('id')),
                    __param(2, core_1.Optional()),
                    __param(2, core_1.SkipSelf()),
                    __param(2, core_1.Host()), 
                    __metadata('design:paramtypes', [core_1.ElementRef, String, AiRadioGroup_1.AiRadioGroup, AiRadioDispatcher_1.AiRadioDispatcher])
                ], AiRadio);
                return AiRadio;
            })(AiControl_1.AiControl);
            exports_1("AiRadio", AiRadio);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlSYWRpby9BaVJhZGlvLnRzIl0sIm5hbWVzIjpbIkFpUmFkaW8iLCJBaVJhZGlvLmNvbnN0cnVjdG9yIiwiQWlSYWRpby5uZ09uSW5pdCIsIkFpUmFkaW8uaWNvbiIsIkFpUmFkaW8ub25DbGljayIsIkFpUmFkaW8uc2VsZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBT0ksZ0JBQWdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBQWhCLGdCQUFnQixHQUFXLENBQUMsQ0FBQztZQUVqQztnQkFRNkJBLDJCQUFTQTtnQkFpQmxDQSxpQkFBWUEsR0FBZUEsRUFDRkEsRUFBVUEsRUFDS0EsVUFBd0JBLEVBQ2hEQSxlQUFrQ0E7b0JBNUJ0REMsaUJBc0VDQTtvQkF6Q09BLGtCQUFNQSxHQUFHQSxDQUFDQSxDQUFDQTtvQkFEQ0Esb0JBQWVBLEdBQWZBLGVBQWVBLENBQW1CQTtvQkFuQmxEQSxxQ0FBcUNBO29CQUNyQ0EsWUFBT0EsR0FBVUEsS0FBS0EsQ0FBQ0E7b0JBUXZCQSx1RkFBdUZBO29CQUN2RkEsVUFBS0EsR0FBTUEsSUFBSUEsQ0FBQ0E7b0JBV1pBLElBQUlBLENBQUNBLFVBQVVBLEdBQUdBLFVBQVVBLENBQUNBO29CQUM3QkEsSUFBSUEsQ0FBQ0EsRUFBRUEsR0FBR0EsZ0JBQVNBLENBQUNBLEVBQUVBLENBQUNBLEdBQUdBLEVBQUVBLEdBQUdBLGNBQVlBLGdCQUFnQkEsRUFBSUEsQ0FBQ0E7b0JBRWhFQSxvRkFBb0ZBO29CQUNwRkEsZUFBZUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsVUFBQ0EsSUFBSUE7d0JBQ3hCQSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxJQUFJQSxLQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQTs0QkFDcEJBLEtBQUlBLENBQUNBLE9BQU9BLEdBQUdBLEtBQUtBLENBQUNBO3dCQUN6QkEsQ0FBQ0E7b0JBQ0xBLENBQUNBLENBQUNBLENBQUNBO29CQUVIQSxvRkFBb0ZBO29CQUNwRkEsSUFBSUEsQ0FBQ0EsSUFBSUEsR0FBR0EsVUFBVUEsQ0FBQ0EsT0FBT0EsRUFBRUEsQ0FBQ0E7b0JBQ2pDQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxRQUFRQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtnQkFDbkNBLENBQUNBO2dCQUVERCx1RkFBdUZBO2dCQUN2RkEsMEJBQVFBLEdBQVJBO29CQUNJRSxJQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxPQUFPQSxFQUFFQSxDQUFDQTtnQkFDMUNBLENBQUNBO2dCQUVERixzQkFBSUEseUJBQUlBO3lCQUFSQTt3QkFDSUcsRUFBRUEsQ0FBQUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0E7NEJBQUNBLE1BQU1BLENBQUNBLHNCQUFzQkEsQ0FBQUE7d0JBQzlDQSxNQUFNQSxDQUFDQSx3QkFBd0JBLENBQUNBO29CQUNwQ0EsQ0FBQ0E7OzttQkFBQUg7Z0JBRURBLHlCQUFPQSxHQUFQQTtvQkFDSUksSUFBSUEsQ0FBQ0EsTUFBTUEsRUFBRUEsQ0FBQ0E7Z0JBQ2xCQSxDQUFDQTtnQkFFREosZ0NBQWdDQTtnQkFDaENBLHdCQUFNQSxHQUFOQTtvQkFDSUssRUFBRUEsQ0FBQUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQUEsQ0FBQ0E7d0JBQ2ZBLElBQUlBLENBQUNBLGVBQWVBLENBQUNBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO3dCQUN2Q0EsSUFBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsSUFBSUEsQ0FBQ0E7d0JBQ3BCQSxFQUFFQSxDQUFDQSxDQUFDQSxnQkFBU0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7NEJBQzdCQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxXQUFXQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxFQUFFQSxJQUFJQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQTt3QkFDckRBLENBQUNBO29CQUNMQSxDQUFDQTtnQkFDTEEsQ0FBQ0E7Z0JBcEVMTDtvQkFBQ0EsZ0JBQVNBLENBQUNBLHFCQUFTQSxDQUFDQSxJQUFJQSxDQUFDQTt3QkFDdEJBLFdBQVdBLEVBQUNBLDZDQUE2Q0E7d0JBQ3pEQSxRQUFRQSxFQUFFQSxVQUFVQTt3QkFDcEJBLE1BQU1BLEVBQUNBLENBQUNBLElBQUlBLEVBQUVBLE1BQU1BLEVBQUVBLE9BQU9BLEVBQUVBLFNBQVNBLENBQUNBO3dCQUN6Q0EsSUFBSUEsRUFBQ0E7NEJBQ0RBLGlCQUFpQkEsRUFBRUEsT0FBT0E7eUJBQzdCQTtxQkFDSkEsQ0FBQ0EsQ0FBQ0E7b0JBbUJTQSxXQUFDQSxnQkFBU0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQUE7b0JBQ2hCQSxXQUFDQSxlQUFRQSxFQUFFQSxDQUFBQTtvQkFBQ0EsV0FBQ0EsZUFBUUEsRUFBRUEsQ0FBQUE7b0JBQUNBLFdBQUNBLFdBQUlBLEVBQUVBLENBQUFBOzs0QkEyQzFDQTtnQkFBREEsY0FBQ0E7WUFBREEsQ0F0RUEsQUFzRUNBLEVBOUQ0QixxQkFBUyxFQThEckM7WUF0RUQsNkJBc0VDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9BaVJhZGlvL0FpUmFkaW8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCxFbGVtZW50UmVmLE9uSW5pdCxIb3N0LFNraXBTZWxmLEF0dHJpYnV0ZSxPcHRpb25hbH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge2lzUHJlc2VudCwgU3RyaW5nV3JhcHBlciwgTnVtYmVyV3JhcHBlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9sYW5nJztcbmltcG9ydCB7T2JzZXJ2YWJsZVdyYXBwZXIsRXZlbnRFbWl0dGVyfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2FzeW5jJztcbmltcG9ydCB7QWlDb250cm9sfSBmcm9tICcuLi9BaUNvbnRyb2wvQWlDb250cm9sJztcbmltcG9ydCB7QWlSYWRpb0dyb3VwfSBmcm9tICcuL0FpUmFkaW9Hcm91cCc7XG5pbXBvcnQge0FpUmFkaW9EaXNwYXRjaGVyfSBmcm9tICcuL0FpUmFkaW9EaXNwYXRjaGVyJztcblxudmFyIF91bmlxdWVJZENvdW50ZXI6IG51bWJlciA9IDA7XG5cbkBDb21wb25lbnQoQWlDb250cm9sLm1ldGEoe1xuICAgIHRlbXBsYXRlVXJsOidwYWNrYWdlOnNyYy9jb21wb25lbnRzL0FpUmFkaW8vQWlSYWRpby5odG1sJyxcbiAgICBzZWxlY3RvcjogJ2FpLXJhZGlvJyxcbiAgICBpbnB1dHM6WydpZCcsICduYW1lJywgJ3ZhbHVlJywgJ2NoZWNrZWQnXSxcbiAgICBob3N0OnsgXG4gICAgICAgICdbY2xhc3MuY2hlY2tlZF0nOiAndmFsdWUnLFxuICAgIH0sXG59KSkgICAgIFxuZXhwb3J0IGNsYXNzIEFpUmFkaW8gZXh0ZW5kcyBBaUNvbnRyb2wgaW1wbGVtZW50cyBPbkluaXR7IFxuICAgIC8qKiBXaGV0aGVyIHRoaXMgcmFkaW8gaXMgY2hlY2tlZC4gKi9cbiAgICBjaGVja2VkOiBib29sZWFuPWZhbHNlO1xuICAgIFxuICAgIC8qKiBUaGUgdW5pcXVlIElEIGZvciB0aGUgcmFkaW8gYnV0dG9uLiAqL1xuICAgIGlkOiBzdHJpbmc7XG4gICAgXG4gICAgLyoqIEFuYWxvZyB0byBIVE1MICduYW1lJyBhdHRyaWJ1dGUgdXNlZCB0byBncm91cCByYWRpb3MgZm9yIHVuaXF1ZSBzZWxlY3Rpb24uICovXG4gICAgbmFtZTogc3RyaW5nO1xuICAgIFxuICAgIC8qKiBWYWx1ZSBhc3NpZ25lZCB0byB0aGlzIHJhZGlvLiBVc2VkIHRvIGFzc2lnbiB0aGUgdmFsdWUgdG8gdGhlIHBhcmVudCBSYWRpb0dyb3VwLiAqL1xuICAgIHZhbHVlOiBhbnk9bnVsbDtcbiAgICBcbiAgICAvKiogVGhlIHBhcmVudCByYWRpbyBncm91cC4gTWF5IG9yIG1heSBub3QgYmUgcHJlc2VudC4gKi9cbiAgICByYWRpb0dyb3VwOiBBaVJhZGlvR3JvdXA7XG4gICAgXG5cbiAgICBjb25zdHJ1Y3RvcihlbGU6IEVsZW1lbnRSZWYsXG4gICAgICAgICAgICBAQXR0cmlidXRlKCdpZCcpIGlkOiBzdHJpbmcsXG4gICAgICAgICAgICBAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBASG9zdCgpIHJhZGlvR3JvdXA6IEFpUmFkaW9Hcm91cCxcbiAgICAgICAgICAgIHByaXZhdGUgcmFkaW9EaXNwYXRjaGVyOiBBaVJhZGlvRGlzcGF0Y2hlcil7XG4gICAgICAgIHN1cGVyKGVsZSk7XG4gICAgICAgIHRoaXMucmFkaW9Hcm91cCA9IHJhZGlvR3JvdXA7XG4gICAgICAgIHRoaXMuaWQgPSBpc1ByZXNlbnQoaWQpID8gaWQgOiBgYWktcmFkaW8tJHtfdW5pcXVlSWRDb3VudGVyKyt9YDtcbiAgICBcbiAgICAgICAgLy8gV2hlbmV2ZXIgYSByYWRpbyBidXR0b24gd2l0aCB0aGUgc2FtZSBuYW1lIGlzIGNoZWNrZWQsIHVuY2hlY2sgdGhpcyByYWRpbyBidXR0b24uXG4gICAgICAgIHJhZGlvRGlzcGF0Y2hlci5saXN0ZW4oKG5hbWUpID0+IHtcbiAgICAgICAgICAgIGlmIChuYW1lID09IHRoaXMubmFtZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICBcbiAgICAgICAgLy8gV2hlbiB0aGlzIHJhZGlvLWJ1dHRvbiBpcyBpbnNpZGUgb2YgYSByYWRpby1ncm91cCwgdGhlIGdyb3VwIGRldGVybWluZXMgdGhlIG5hbWUuXG4gICAgICAgIHRoaXMubmFtZSA9IHJhZGlvR3JvdXAuZ2V0TmFtZSgpO1xuICAgICAgICB0aGlzLnJhZGlvR3JvdXAucmVnaXN0ZXIodGhpcyk7XG4gICAgfVxuICAgIFxuICAgIC8qKiBDaGFuZ2UgaGFuZGxlciBpbnZva2VkIHdoZW4gYmluZGluZ3MgYXJlIHJlc29sdmVkIG9yIHdoZW4gYmluZGluZ3MgaGF2ZSBjaGFuZ2VkLiAqL1xuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLm5hbWUgPSB0aGlzLnJhZGlvR3JvdXAuZ2V0TmFtZSgpO1xuICAgIH1cblxuICAgIGdldCBpY29uKCk6IHN0cmluZyB7XG4gICAgICAgIGlmKHRoaXMuY2hlY2tlZCkgcmV0dXJuICdyYWRpb19idXR0b25fY2hlY2tlZCdcbiAgICAgICAgcmV0dXJuICdyYWRpb19idXR0b25fdW5jaGVja2VkJztcbiAgICB9XG5cbiAgICBvbkNsaWNrKCl7XG4gICAgICAgIHRoaXMuc2VsZWN0KCk7XG4gICAgfVxuICBcbiAgICAvKiogU2VsZWN0IHRoaXMgcmFkaW8gYnV0dG9uLiAqL1xuICAgIHNlbGVjdCgpIHtcbiAgICAgICAgaWYoIXRoaXMuZGlzYWJsZWQpe1xuICAgICAgICAgICAgdGhpcy5yYWRpb0Rpc3BhdGNoZXIubm90aWZ5KHRoaXMubmFtZSk7XG4gICAgICAgICAgICB0aGlzLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKGlzUHJlc2VudCh0aGlzLnJhZGlvR3JvdXApKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yYWRpb0dyb3VwLnVwZGF0ZVZhbHVlKHRoaXMudmFsdWUsIHRoaXMuaWQpO1xuICAgICAgICAgICAgfSAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfSAgICBcblxufSBcbiAgXG4gICBcbiBcbiAgIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
