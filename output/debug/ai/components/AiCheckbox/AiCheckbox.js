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
    var AiCheckbox;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (AiToggle_1_1) {
                AiToggle_1 = AiToggle_1_1;
            }],
        execute: function() {
            AiCheckbox = (function (_super) {
                __extends(AiCheckbox, _super);
                function AiCheckbox(ele) {
                    _super.call(this, ele);
                }
                AiCheckbox.prototype.onClick = function () {
                    this.toggle();
                };
                AiCheckbox = __decorate([
                    core_1.Component(AiToggle_1.AiToggle.meta({
                        templateUrl: 'package:src/components/AiCheckbox/AiCheckbox.html',
                        selector: 'ai-checkbox'
                    })), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], AiCheckbox);
                return AiCheckbox;
            }(AiToggle_1.AiToggle));
            exports_1("AiCheckbox", AiCheckbox);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlDaGVja2JveC9BaUNoZWNrYm94LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFRQTtnQkFBZ0MsOEJBQVE7Z0JBRXBDLG9CQUFZLEdBQWU7b0JBQ3ZCLGtCQUFNLEdBQUcsQ0FBQyxDQUFDO2dCQUNmLENBQUM7Z0JBRUQsNEJBQU8sR0FBUDtvQkFDSSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQ2xCLENBQUM7Z0JBWkw7b0JBQUMsZ0JBQVMsQ0FBQyxtQkFBUSxDQUFDLElBQUksQ0FBQzt3QkFDckIsV0FBVyxFQUFDLG1EQUFtRDt3QkFDL0QsUUFBUSxFQUFFLGFBQWE7cUJBQzFCLENBQUMsQ0FBQzs7OEJBQUE7Z0JBV0gsaUJBQUM7WUFBRCxDQVZBLEFBVUMsQ0FWK0IsbUJBQVEsR0FVdkM7WUFWRCxtQ0FVQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvQWlDaGVja2JveC9BaUNoZWNrYm94LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsRWxlbWVudFJlZn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge09ic2VydmFibGVXcmFwcGVyLEV2ZW50RW1pdHRlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9hc3luYyc7XG5pbXBvcnQge0FpVG9nZ2xlfSBmcm9tICcuLi9BaVRvZ2dsZS9BaVRvZ2dsZSc7XG5cbkBDb21wb25lbnQoQWlUb2dnbGUubWV0YSh7XG4gICAgdGVtcGxhdGVVcmw6J3BhY2thZ2U6c3JjL2NvbXBvbmVudHMvQWlDaGVja2JveC9BaUNoZWNrYm94Lmh0bWwnLFxuICAgIHNlbGVjdG9yOiAnYWktY2hlY2tib3gnXG59KSkgICAgXG5leHBvcnQgY2xhc3MgQWlDaGVja2JveCBleHRlbmRzIEFpVG9nZ2xleyBcblxuICAgIGNvbnN0cnVjdG9yKGVsZTogRWxlbWVudFJlZikgeyAgXG4gICAgICAgIHN1cGVyKGVsZSk7IFxuICAgIH1cbiAgICBcbiAgICBvbkNsaWNrKCl7XG4gICAgICAgIHRoaXMudG9nZ2xlKCk7XG4gICAgfVxuICAgIFxufSAgIFxuICBcbiAgIFxuIFxuICAiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
