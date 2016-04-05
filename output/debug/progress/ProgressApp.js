System.register(['angular2/core', 'ai/components/AiApp/AiApp', 'ai/components/AiSpinner/AiSpinner', 'ai/components/AiProgress/AiProgress', 'ai/components/AiPercent/AiPercent'], function(exports_1, context_1) {
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
    var core_1, AiApp_1, AiSpinner_1, AiProgress_1, AiPercent_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (AiApp_1_1) {
                AiApp_1 = AiApp_1_1;
            },
            function (AiSpinner_1_1) {
                AiSpinner_1 = AiSpinner_1_1;
            },
            function (AiProgress_1_1) {
                AiProgress_1 = AiProgress_1_1;
            },
            function (AiPercent_1_1) {
                AiPercent_1 = AiPercent_1_1;
            }],
        execute: function() {
            AppComponent = (function (_super) {
                __extends(AppComponent, _super);
                function AppComponent() {
                    _super.apply(this, arguments);
                }
                AppComponent = __decorate([
                    core_1.Component(AiApp_1.AiApp.meta({
                        selector: 'progress-app',
                        templateUrl: 'package:app/progress/ProgressApp.html',
                        directives: [AiSpinner_1.AiSpinner, AiProgress_1.AiProgress, AiPercent_1.AiPercent]
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2dyZXNzL1Byb2dyZXNzQXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFZQTtnQkFBbUMsZ0NBQUs7Z0JBQXhDO29CQUFtQyw4QkFBSztnQkFFeEMsQ0FBQztnQkFQRDtvQkFBQyxnQkFBUyxDQUFDLGFBQUssQ0FBQyxJQUFJLENBQUM7d0JBQ2xCLFFBQVEsRUFBRSxjQUFjO3dCQUN4QixXQUFXLEVBQUMsdUNBQXVDO3dCQUNuRCxVQUFVLEVBQUUsQ0FBQyxxQkFBUyxFQUFDLHVCQUFVLEVBQUMscUJBQVMsQ0FBQztxQkFDL0MsQ0FBQyxDQUFDOztnQ0FBQTtnQkFHSCxtQkFBQztZQUFELENBRkEsQUFFQyxDQUZrQyxhQUFLLEdBRXZDO1lBRkQsdUNBRUMsQ0FBQTtZQUNELGFBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMiLCJmaWxlIjoicHJvZ3Jlc3MvUHJvZ3Jlc3NBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0FpQXBwfSBmcm9tICdhaS9jb21wb25lbnRzL0FpQXBwL0FpQXBwJztcbmltcG9ydCB7QWlTcGlubmVyfSBmcm9tICdhaS9jb21wb25lbnRzL0FpU3Bpbm5lci9BaVNwaW5uZXInO1xuaW1wb3J0IHtBaVByb2dyZXNzfSBmcm9tICdhaS9jb21wb25lbnRzL0FpUHJvZ3Jlc3MvQWlQcm9ncmVzcyc7XG5pbXBvcnQge0FpUGVyY2VudH0gZnJvbSAnYWkvY29tcG9uZW50cy9BaVBlcmNlbnQvQWlQZXJjZW50JztcblxuXG5AQ29tcG9uZW50KEFpQXBwLm1ldGEoe1xuICAgIHNlbGVjdG9yOiAncHJvZ3Jlc3MtYXBwJyxcbiAgICB0ZW1wbGF0ZVVybDoncGFja2FnZTphcHAvcHJvZ3Jlc3MvUHJvZ3Jlc3NBcHAuaHRtbCcsXG4gICAgZGlyZWN0aXZlczogW0FpU3Bpbm5lcixBaVByb2dyZXNzLEFpUGVyY2VudF0gIFxufSkpXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50ICBleHRlbmRzIEFpQXBweyAgXG4gICAgIFxufVxuQWlBcHAuYm9vdChBcHBDb21wb25lbnQpOyAgIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
