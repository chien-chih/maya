System.register(['angular2/core', 'angular2/common', '../AiFormControl/AiFormControl', '../AiFormInput/AiFormInput', '../AiTextarea/AiTextarea'], function(exports_1) {
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
    var core_1, common_1, AiFormControl_1, AiFormInput_1, AiTextarea_1;
    var AiFormTextarea;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (AiFormControl_1_1) {
                AiFormControl_1 = AiFormControl_1_1;
            },
            function (AiFormInput_1_1) {
                AiFormInput_1 = AiFormInput_1_1;
            },
            function (AiTextarea_1_1) {
                AiTextarea_1 = AiTextarea_1_1;
            }],
        execute: function() {
            AiFormTextarea = (function (_super) {
                __extends(AiFormTextarea, _super);
                function AiFormTextarea(ele) {
                    _super.call(this, ele);
                }
                AiFormTextarea = __decorate([
                    core_1.Component(AiFormControl_1.AiFormControl.meta({
                        templateUrl: 'package:src/components/AiFormTextarea/AiFormTextarea.html',
                        directives: [AiTextarea_1.AiTextarea],
                        selector: 'ai-form-textarea',
                        inputs: AiFormInput_1.AiFormInput.inputs,
                        host: AiFormInput_1.AiFormInput.host,
                        providers: [new core_1.Provider(common_1.NG_VALUE_ACCESSOR, { useExisting: core_1.forwardRef(function () { return AiFormTextarea; }), multi: true })]
                    }, {
                        ignoreActive: 1,
                        ignoreFocus: 1,
                        ignoreHover: 1
                    })), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], AiFormTextarea);
                return AiFormTextarea;
            })(AiFormInput_1.AiFormInput);
            exports_1("AiFormTextarea", AiFormTextarea);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlGb3JtVGV4dGFyZWEvQWlGb3JtVGV4dGFyZWEudHMiXSwibmFtZXMiOlsiQWlGb3JtVGV4dGFyZWEiLCJBaUZvcm1UZXh0YXJlYS5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFPQTtnQkFhb0NBLGtDQUFXQTtnQkFFM0NBLHdCQUFZQSxHQUFlQTtvQkFDdkJDLGtCQUFNQSxHQUFHQSxDQUFDQSxDQUFDQTtnQkFDZkEsQ0FBQ0E7Z0JBakJMRDtvQkFBQ0EsZ0JBQVNBLENBQUNBLDZCQUFhQSxDQUFDQSxJQUFJQSxDQUFDQTt3QkFDdEJBLFdBQVdBLEVBQUNBLDJEQUEyREE7d0JBQ3ZFQSxVQUFVQSxFQUFFQSxDQUFDQSx1QkFBVUEsQ0FBQ0E7d0JBQ3hCQSxRQUFRQSxFQUFFQSxrQkFBa0JBO3dCQUM1QkEsTUFBTUEsRUFBRUEseUJBQVdBLENBQUNBLE1BQU1BO3dCQUMxQkEsSUFBSUEsRUFBRUEseUJBQVdBLENBQUNBLElBQUlBO3dCQUN0QkEsU0FBU0EsRUFBRUEsQ0FBQ0EsSUFBSUEsZUFBUUEsQ0FBQ0EsMEJBQWlCQSxFQUFFQSxFQUFDQSxXQUFXQSxFQUFFQSxpQkFBVUEsQ0FBQ0EsY0FBTUEsT0FBQUEsY0FBY0EsRUFBZEEsQ0FBY0EsQ0FBQ0EsRUFBRUEsS0FBS0EsRUFBRUEsSUFBSUEsRUFBQ0EsQ0FBQ0EsQ0FBQ0E7cUJBQzdHQSxFQUFDQTt3QkFDRUEsWUFBWUEsRUFBQ0EsQ0FBQ0E7d0JBQ2RBLFdBQVdBLEVBQUNBLENBQUNBO3dCQUNiQSxXQUFXQSxFQUFDQSxDQUFDQTtxQkFDaEJBLENBQ0pBLENBQUNBOzttQ0FNREE7Z0JBQURBLHFCQUFDQTtZQUFEQSxDQWxCQSxBQWtCQ0EsRUFMbUMseUJBQVcsRUFLOUM7WUFsQkQsMkNBa0JDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9BaUZvcm1UZXh0YXJlYS9BaUZvcm1UZXh0YXJlYS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LEVsZW1lbnRSZWYsZm9yd2FyZFJlZixQcm92aWRlcn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge05HX1ZBTFVFX0FDQ0VTU09SfSBmcm9tICdhbmd1bGFyMi9jb21tb24nO1xuaW1wb3J0IHtPYnNlcnZhYmxlV3JhcHBlciwgRXZlbnRFbWl0dGVyfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2FzeW5jJztcbmltcG9ydCB7QWlGb3JtQ29udHJvbH0gZnJvbSAnLi4vQWlGb3JtQ29udHJvbC9BaUZvcm1Db250cm9sJztcbmltcG9ydCB7QWlGb3JtSW5wdXR9IGZyb20gJy4uL0FpRm9ybUlucHV0L0FpRm9ybUlucHV0JztcbmltcG9ydCB7QWlUZXh0YXJlYX0gZnJvbSAnLi4vQWlUZXh0YXJlYS9BaVRleHRhcmVhJztcblxuQENvbXBvbmVudChBaUZvcm1Db250cm9sLm1ldGEoe1xuICAgICAgICB0ZW1wbGF0ZVVybDoncGFja2FnZTpzcmMvY29tcG9uZW50cy9BaUZvcm1UZXh0YXJlYS9BaUZvcm1UZXh0YXJlYS5odG1sJyxcbiAgICAgICAgZGlyZWN0aXZlczogW0FpVGV4dGFyZWFdLFxuICAgICAgICBzZWxlY3RvcjogJ2FpLWZvcm0tdGV4dGFyZWEnLFxuICAgICAgICBpbnB1dHM6IEFpRm9ybUlucHV0LmlucHV0cyxcbiAgICAgICAgaG9zdDogQWlGb3JtSW5wdXQuaG9zdCxcbiAgICAgICAgcHJvdmlkZXJzOiBbbmV3IFByb3ZpZGVyKE5HX1ZBTFVFX0FDQ0VTU09SLCB7dXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQWlGb3JtVGV4dGFyZWEpLCBtdWx0aTogdHJ1ZX0pXVxuICAgIH0se1xuICAgICAgICBpZ25vcmVBY3RpdmU6MSxcbiAgICAgICAgaWdub3JlRm9jdXM6MSxcbiAgICAgICAgaWdub3JlSG92ZXI6MVxuICAgIH1cbikpICAgIFxuZXhwb3J0IGNsYXNzIEFpRm9ybVRleHRhcmVhIGV4dGVuZHMgQWlGb3JtSW5wdXQgeyBcblxuICAgIGNvbnN0cnVjdG9yKGVsZTogRWxlbWVudFJlZikgeyBcbiAgICAgICAgc3VwZXIoZWxlKTtcbiAgICB9XG59IFxuICBcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
