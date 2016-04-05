System.register(['angular2/core', 'ai/components/AiApp/AiApp', 'ai/components/AiFormInput/AiFormInput', 'ai/components/AiFormTextarea/AiFormTextarea'], function(exports_1, context_1) {
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
    var core_1, AiApp_1, AiFormInput_1, AiFormTextarea_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (AiApp_1_1) {
                AiApp_1 = AiApp_1_1;
            },
            function (AiFormInput_1_1) {
                AiFormInput_1 = AiFormInput_1_1;
            },
            function (AiFormTextarea_1_1) {
                AiFormTextarea_1 = AiFormTextarea_1_1;
            }],
        execute: function() {
            AppComponent = (function (_super) {
                __extends(AppComponent, _super);
                function AppComponent() {
                    _super.apply(this, arguments);
                    this.value = '';
                    this.valueX = '';
                }
                AppComponent = __decorate([
                    core_1.Component(AiApp_1.AiApp.meta({
                        selector: 'forminput-app',
                        templateUrl: 'package:app/forminput/ForminputApp.html',
                        directives: [AiFormInput_1.AiFormInput, AiFormTextarea_1.AiFormTextarea]
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm1pbnB1dC9Gb3JtaW5wdXRBcHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVdBO2dCQUFtQyxnQ0FBSztnQkFBeEM7b0JBQW1DLDhCQUFLO29CQUNwQyxVQUFLLEdBQVEsRUFBRSxDQUFDO29CQUVoQixXQUFNLEdBQVEsRUFBRSxDQUFDO2dCQUVyQixDQUFDO2dCQVZEO29CQUFDLGdCQUFTLENBQUMsYUFBSyxDQUFDLElBQUksQ0FBQzt3QkFDbEIsUUFBUSxFQUFFLGVBQWU7d0JBQ3pCLFdBQVcsRUFBQyx5Q0FBeUM7d0JBQ3JELFVBQVUsRUFBRSxDQUFDLHlCQUFXLEVBQUMsK0JBQWMsQ0FBQztxQkFDM0MsQ0FBQyxDQUFDOztnQ0FBQTtnQkFNSCxtQkFBQztZQUFELENBTEEsQUFLQyxDQUxrQyxhQUFLLEdBS3ZDO1lBTEQsdUNBS0MsQ0FBQTtZQUNELGFBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMiLCJmaWxlIjoiZm9ybWlucHV0L0Zvcm1pbnB1dEFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7QWlBcHB9IGZyb20gJ2FpL2NvbXBvbmVudHMvQWlBcHAvQWlBcHAnO1xuaW1wb3J0IHtBaUZvcm1JbnB1dH0gZnJvbSAnYWkvY29tcG9uZW50cy9BaUZvcm1JbnB1dC9BaUZvcm1JbnB1dCc7XG5pbXBvcnQge0FpRm9ybVRleHRhcmVhfSBmcm9tICdhaS9jb21wb25lbnRzL0FpRm9ybVRleHRhcmVhL0FpRm9ybVRleHRhcmVhJztcblxuXG5AQ29tcG9uZW50KEFpQXBwLm1ldGEoe1xuICAgIHNlbGVjdG9yOiAnZm9ybWlucHV0LWFwcCcsXG4gICAgdGVtcGxhdGVVcmw6J3BhY2thZ2U6YXBwL2Zvcm1pbnB1dC9Gb3JtaW5wdXRBcHAuaHRtbCcsXG4gICAgZGlyZWN0aXZlczogW0FpRm9ybUlucHV0LEFpRm9ybVRleHRhcmVhXSAgXG59KSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgIGV4dGVuZHMgQWlBcHB7ICBcbiAgICB2YWx1ZTpzdHJpbmc9Jyc7XG5cbiAgICB2YWx1ZVg6c3RyaW5nPScnO1xuXG59XG5BaUFwcC5ib290KEFwcENvbXBvbmVudCk7ICAiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
