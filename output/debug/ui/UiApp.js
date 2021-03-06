System.register(['angular2/core', 'ai/components/AiApp/AiApp', 'ai/components/AiButton/AiButton'], function(exports_1, context_1) {
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
    var core_1, AiApp_1, AiButton_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (AiApp_1_1) {
                AiApp_1 = AiApp_1_1;
            },
            function (AiButton_1_1) {
                AiButton_1 = AiButton_1_1;
            }],
        execute: function() {
            AppComponent = (function (_super) {
                __extends(AppComponent, _super);
                function AppComponent() {
                    _super.apply(this, arguments);
                    this.spinButtonSpinning = false;
                }
                AppComponent.prototype.onSpinButtonClick = function () {
                    debugger;
                    this.spinButtonSpinning = !this.spinButtonSpinning;
                };
                AppComponent = __decorate([
                    core_1.Component(AiApp_1.AiApp.meta({
                        selector: 'ui-app',
                        templateUrl: 'package:app/ui/UiApp.html',
                        directives: [AiButton_1.AiButton]
                    })), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }(AiApp_1.AiApp));
            exports_1("AppComponent", AppComponent);
            AiApp_1.AiApp.boot(AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVpL1VpQXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFVQTtnQkFBbUMsZ0NBQUs7Z0JBQXhDO29CQUFtQyw4QkFBSztvQkFDcEMsdUJBQWtCLEdBQVMsS0FBSyxDQUFDO2dCQU1yQyxDQUFDO2dCQUpHLHdDQUFpQixHQUFqQjtvQkFDSSxRQUFRLENBQUE7b0JBQ1IsSUFBSSxDQUFDLGtCQUFrQixHQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDO2dCQUNyRCxDQUFDO2dCQVhMO29CQUFDLGdCQUFTLENBQUMsYUFBSyxDQUFDLElBQUksQ0FBQzt3QkFDbEIsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLFdBQVcsRUFBQywyQkFBMkI7d0JBQ3ZDLFVBQVUsRUFBRSxDQUFDLG1CQUFRLENBQUM7cUJBQ3pCLENBQUMsQ0FBQzs7Z0NBQUE7Z0JBUUgsbUJBQUM7WUFBRCxDQVBBLEFBT0MsQ0FQa0MsYUFBSyxHQU92QztZQVBELHVDQU9DLENBQUE7WUFDRCxhQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDIiwiZmlsZSI6InVpL1VpQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtBaUFwcH0gZnJvbSAnYWkvY29tcG9uZW50cy9BaUFwcC9BaUFwcCc7XG5pbXBvcnQge0FpQnV0dG9ufSBmcm9tICdhaS9jb21wb25lbnRzL0FpQnV0dG9uL0FpQnV0dG9uJztcblxuXG5AQ29tcG9uZW50KEFpQXBwLm1ldGEoe1xuICAgIHNlbGVjdG9yOiAndWktYXBwJyxcbiAgICB0ZW1wbGF0ZVVybDoncGFja2FnZTphcHAvdWkvVWlBcHAuaHRtbCcsXG4gICAgZGlyZWN0aXZlczogW0FpQnV0dG9uXSAgXG59KSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgIGV4dGVuZHMgQWlBcHB7ICBcbiAgICBzcGluQnV0dG9uU3Bpbm5pbmc6Ym9vbGVhbj1mYWxzZTtcbiAgICBcbiAgICBvblNwaW5CdXR0b25DbGljaygpe1xuICAgICAgICBkZWJ1Z2dlclxuICAgICAgICB0aGlzLnNwaW5CdXR0b25TcGlubmluZz0hdGhpcy5zcGluQnV0dG9uU3Bpbm5pbmc7ICAgICAgICAgXG4gICAgfVxufVxuQWlBcHAuYm9vdChBcHBDb21wb25lbnQpOyAgIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
