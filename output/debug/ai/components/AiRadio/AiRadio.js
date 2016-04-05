System.register(['angular2/core', 'angular2/src/facade/lang', '../AiToggle/AiToggle', './AiRadioGroup', './AiRadioDispatcher'], function(exports_1, context_1) {
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
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, lang_1, AiToggle_1, AiRadioGroup_1, AiRadioDispatcher_1;
    var _uniqueIdCounter, AiRadio;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (lang_1_1) {
                lang_1 = lang_1_1;
            },
            function (AiToggle_1_1) {
                AiToggle_1 = AiToggle_1_1;
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
                    core_1.Component(AiToggle_1.AiToggle.meta({
                        templateUrl: 'package:src/components/AiRadio/AiRadio.html',
                        selector: 'ai-radio',
                        inputs: ['id', 'name']
                    })),
                    __param(1, core_1.Attribute('id')),
                    __param(2, core_1.Optional()),
                    __param(2, core_1.SkipSelf()),
                    __param(2, core_1.Host()), 
                    __metadata('design:paramtypes', [core_1.ElementRef, String, AiRadioGroup_1.AiRadioGroup, AiRadioDispatcher_1.AiRadioDispatcher])
                ], AiRadio);
                return AiRadio;
            }(AiToggle_1.AiToggle));
            exports_1("AiRadio", AiRadio);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlSYWRpby9BaVJhZGlvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQU9JLGdCQUFnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUFoQixnQkFBZ0IsR0FBVyxDQUFDLENBQUM7WUFPakM7Z0JBQTZCLDJCQUFRO2dCQVlqQyxpQkFBWSxHQUFlLEVBQ0YsRUFBVSxFQUNLLFVBQXdCLEVBQ2hELGVBQWtDO29CQWZ0RCxpQkF5REM7b0JBekNPLGtCQUFNLEdBQUcsQ0FBQyxDQUFDO29CQURDLG9CQUFlLEdBQWYsZUFBZSxDQUFtQjtvQkFFOUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7b0JBQzdCLElBQUksQ0FBQyxFQUFFLEdBQUcsZ0JBQVMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsY0FBWSxnQkFBZ0IsRUFBSSxDQUFDO29CQUVoRSxvRkFBb0Y7b0JBQ3BGLGVBQWUsQ0FBQyxNQUFNLENBQUMsVUFBQyxJQUFJO3dCQUN4QixFQUFFLENBQUMsQ0FBQyxJQUFJLElBQUksS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7NEJBQ3BCLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO3dCQUN6QixDQUFDO29CQUNMLENBQUMsQ0FBQyxDQUFDO29CQUVILG9GQUFvRjtvQkFDcEYsSUFBSSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7b0JBQ2pDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNuQyxDQUFDO2dCQUVELHVGQUF1RjtnQkFDdkYsMEJBQVEsR0FBUjtvQkFDSSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQzFDLENBQUM7Z0JBRUQsc0JBQUkseUJBQUk7eUJBQVI7d0JBQ0ksRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQzs0QkFBQyxNQUFNLENBQUMsc0JBQXNCLENBQUE7d0JBQzlDLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQztvQkFDcEMsQ0FBQzs7O21CQUFBO2dCQUVELHlCQUFPLEdBQVA7b0JBQ0ksSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUNsQixDQUFDO2dCQUVELGdDQUFnQztnQkFDaEMsd0JBQU0sR0FBTjtvQkFDSSxFQUFFLENBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQSxDQUFDO3dCQUNmLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDdkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7d0JBQ3BCLEVBQUUsQ0FBQyxDQUFDLGdCQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDN0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7d0JBQ3JELENBQUM7b0JBQ0wsQ0FBQztnQkFDTCxDQUFDO2dCQTVETDtvQkFBQyxnQkFBUyxDQUFDLG1CQUFRLENBQUMsSUFBSSxDQUFDO3dCQUNyQixXQUFXLEVBQUMsNkNBQTZDO3dCQUN6RCxRQUFRLEVBQUUsVUFBVTt3QkFDcEIsTUFBTSxFQUFDLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQztxQkFDeEIsQ0FBQyxDQUFDOytCQWNVLGdCQUFTLENBQUMsSUFBSSxDQUFDOytCQUNmLGVBQVEsRUFBRTsrQkFBRSxlQUFRLEVBQUU7K0JBQUUsV0FBSSxFQUFFOzsyQkFmeEM7Z0JBMERILGNBQUM7WUFBRCxDQXpEQSxBQXlEQyxDQXpENEIsbUJBQVEsR0F5RHBDO1lBekRELDZCQXlEQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvQWlSYWRpby9BaVJhZGlvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsRWxlbWVudFJlZixPbkluaXQsSG9zdCxTa2lwU2VsZixBdHRyaWJ1dGUsT3B0aW9uYWx9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtpc1ByZXNlbnQsIFN0cmluZ1dyYXBwZXIsIE51bWJlcldyYXBwZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZyc7XG5pbXBvcnQge09ic2VydmFibGVXcmFwcGVyLEV2ZW50RW1pdHRlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9hc3luYyc7XG5pbXBvcnQge0FpVG9nZ2xlfSBmcm9tICcuLi9BaVRvZ2dsZS9BaVRvZ2dsZSc7XG5pbXBvcnQge0FpUmFkaW9Hcm91cH0gZnJvbSAnLi9BaVJhZGlvR3JvdXAnO1xuaW1wb3J0IHtBaVJhZGlvRGlzcGF0Y2hlcn0gZnJvbSAnLi9BaVJhZGlvRGlzcGF0Y2hlcic7XG5cbnZhciBfdW5pcXVlSWRDb3VudGVyOiBudW1iZXIgPSAwO1xuXG5AQ29tcG9uZW50KEFpVG9nZ2xlLm1ldGEoe1xuICAgIHRlbXBsYXRlVXJsOidwYWNrYWdlOnNyYy9jb21wb25lbnRzL0FpUmFkaW8vQWlSYWRpby5odG1sJyxcbiAgICBzZWxlY3RvcjogJ2FpLXJhZGlvJyxcbiAgICBpbnB1dHM6WydpZCcsICduYW1lJ11cbn0pKSAgICAgXG5leHBvcnQgY2xhc3MgQWlSYWRpbyBleHRlbmRzIEFpVG9nZ2xlIGltcGxlbWVudHMgT25Jbml0eyBcblxuICAgIC8qKiBUaGUgdW5pcXVlIElEIGZvciB0aGUgcmFkaW8gYnV0dG9uLiAqL1xuICAgIGlkOiBzdHJpbmc7XG4gICAgXG4gICAgLyoqIEFuYWxvZyB0byBIVE1MICduYW1lJyBhdHRyaWJ1dGUgdXNlZCB0byBncm91cCByYWRpb3MgZm9yIHVuaXF1ZSBzZWxlY3Rpb24uICovXG4gICAgbmFtZTogc3RyaW5nO1xuICAgIFxuICAgIC8qKiBUaGUgcGFyZW50IHJhZGlvIGdyb3VwLiBNYXkgb3IgbWF5IG5vdCBiZSBwcmVzZW50LiAqL1xuICAgIHJhZGlvR3JvdXA6IEFpUmFkaW9Hcm91cDtcbiAgICBcblxuICAgIGNvbnN0cnVjdG9yKGVsZTogRWxlbWVudFJlZixcbiAgICAgICAgICAgIEBBdHRyaWJ1dGUoJ2lkJykgaWQ6IHN0cmluZyxcbiAgICAgICAgICAgIEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIEBIb3N0KCkgcmFkaW9Hcm91cDogQWlSYWRpb0dyb3VwLFxuICAgICAgICAgICAgcHJpdmF0ZSByYWRpb0Rpc3BhdGNoZXI6IEFpUmFkaW9EaXNwYXRjaGVyKXtcbiAgICAgICAgc3VwZXIoZWxlKTtcbiAgICAgICAgdGhpcy5yYWRpb0dyb3VwID0gcmFkaW9Hcm91cDtcbiAgICAgICAgdGhpcy5pZCA9IGlzUHJlc2VudChpZCkgPyBpZCA6IGBhaS1yYWRpby0ke191bmlxdWVJZENvdW50ZXIrK31gO1xuICAgIFxuICAgICAgICAvLyBXaGVuZXZlciBhIHJhZGlvIGJ1dHRvbiB3aXRoIHRoZSBzYW1lIG5hbWUgaXMgY2hlY2tlZCwgdW5jaGVjayB0aGlzIHJhZGlvIGJ1dHRvbi5cbiAgICAgICAgcmFkaW9EaXNwYXRjaGVyLmxpc3RlbigobmFtZSkgPT4ge1xuICAgICAgICAgICAgaWYgKG5hbWUgPT0gdGhpcy5uYW1lKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIFxuICAgICAgICAvLyBXaGVuIHRoaXMgcmFkaW8tYnV0dG9uIGlzIGluc2lkZSBvZiBhIHJhZGlvLWdyb3VwLCB0aGUgZ3JvdXAgZGV0ZXJtaW5lcyB0aGUgbmFtZS5cbiAgICAgICAgdGhpcy5uYW1lID0gcmFkaW9Hcm91cC5nZXROYW1lKCk7XG4gICAgICAgIHRoaXMucmFkaW9Hcm91cC5yZWdpc3Rlcih0aGlzKTtcbiAgICB9XG4gICAgXG4gICAgLyoqIENoYW5nZSBoYW5kbGVyIGludm9rZWQgd2hlbiBiaW5kaW5ncyBhcmUgcmVzb2x2ZWQgb3Igd2hlbiBiaW5kaW5ncyBoYXZlIGNoYW5nZWQuICovXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IHRoaXMucmFkaW9Hcm91cC5nZXROYW1lKCk7XG4gICAgfVxuXG4gICAgZ2V0IGljb24oKTogc3RyaW5nIHtcbiAgICAgICAgaWYodGhpcy5jaGVja2VkKSByZXR1cm4gJ3JhZGlvX2J1dHRvbl9jaGVja2VkJ1xuICAgICAgICByZXR1cm4gJ3JhZGlvX2J1dHRvbl91bmNoZWNrZWQnO1xuICAgIH1cblxuICAgIG9uQ2xpY2soKXtcbiAgICAgICAgdGhpcy5zZWxlY3QoKTtcbiAgICB9XG4gIFxuICAgIC8qKiBTZWxlY3QgdGhpcyByYWRpbyBidXR0b24uICovXG4gICAgc2VsZWN0KCkge1xuICAgICAgICBpZighdGhpcy5kaXNhYmxlZCl7XG4gICAgICAgICAgICB0aGlzLnJhZGlvRGlzcGF0Y2hlci5ub3RpZnkodGhpcy5uYW1lKTtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICBpZiAoaXNQcmVzZW50KHRoaXMucmFkaW9Hcm91cCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJhZGlvR3JvdXAudXBkYXRlVmFsdWUodGhpcy52YWx1ZSwgdGhpcy5pZCk7XG4gICAgICAgICAgICB9ICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9ICAgIFxuXG59IFxuICBcbiAgIFxuIFxuICAiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
