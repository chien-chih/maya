System.register(['angular2/core', '../AiFormControl/AiFormControl', '../AiFormInput/AiFormInput'], function(exports_1) {
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
    var core_1, AiFormControl_1, AiFormInput_1;
    var AiFormTextarea;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (AiFormControl_1_1) {
                AiFormControl_1 = AiFormControl_1_1;
            },
            function (AiFormInput_1_1) {
                AiFormInput_1 = AiFormInput_1_1;
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
                        selector: 'ai-form-textarea',
                        inputs: ['showCounter', 'maxLength', 'readonly', 'value'],
                        host: {
                            '[class.focus]': 'isFocus',
                            '[class.valued]': 'hasValue()',
                            '[class.readonly]': 'readonly',
                        },
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlGb3JtVGV4dGFyZWEvQWlGb3JtVGV4dGFyZWEudHMiXSwibmFtZXMiOlsiQWlGb3JtVGV4dGFyZWEiLCJBaUZvcm1UZXh0YXJlYS5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFLQTtnQkFlb0NBLGtDQUFXQTtnQkFFM0NBLHdCQUFZQSxHQUFlQTtvQkFDdkJDLGtCQUFNQSxHQUFHQSxDQUFDQSxDQUFDQTtnQkFDZkEsQ0FBQ0E7Z0JBbkJMRDtvQkFBQ0EsZ0JBQVNBLENBQUNBLDZCQUFhQSxDQUFDQSxJQUFJQSxDQUFDQTt3QkFDdEJBLFdBQVdBLEVBQUNBLDJEQUEyREE7d0JBQ3ZFQSxRQUFRQSxFQUFFQSxrQkFBa0JBO3dCQUM1QkEsTUFBTUEsRUFBQ0EsQ0FBQ0EsYUFBYUEsRUFBQ0EsV0FBV0EsRUFBQ0EsVUFBVUEsRUFBQ0EsT0FBT0EsQ0FBQ0E7d0JBQ3JEQSxJQUFJQSxFQUFFQTs0QkFDRkEsZUFBZUEsRUFBRUEsU0FBU0E7NEJBQzFCQSxnQkFBZ0JBLEVBQUVBLFlBQVlBOzRCQUM5QkEsa0JBQWtCQSxFQUFFQSxVQUFVQTt5QkFDakNBO3FCQUNKQSxFQUFDQTt3QkFDRUEsWUFBWUEsRUFBQ0EsQ0FBQ0E7d0JBQ2RBLFdBQVdBLEVBQUNBLENBQUNBO3dCQUNiQSxXQUFXQSxFQUFDQSxDQUFDQTtxQkFDaEJBLENBQ0pBLENBQUNBOzttQ0FNREE7Z0JBQURBLHFCQUFDQTtZQUFEQSxDQXBCQSxBQW9CQ0EsRUFMbUMseUJBQVcsRUFLOUM7WUFwQkQsMkNBb0JDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9BaUZvcm1UZXh0YXJlYS9BaUZvcm1UZXh0YXJlYS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LEVsZW1lbnRSZWYsQXR0cmlidXRlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7T2JzZXJ2YWJsZVdyYXBwZXIsIEV2ZW50RW1pdHRlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9hc3luYyc7XG5pbXBvcnQge0FpRm9ybUNvbnRyb2x9IGZyb20gJy4uL0FpRm9ybUNvbnRyb2wvQWlGb3JtQ29udHJvbCc7XG5pbXBvcnQge0FpRm9ybUlucHV0fSBmcm9tICcuLi9BaUZvcm1JbnB1dC9BaUZvcm1JbnB1dCc7XG5cbkBDb21wb25lbnQoQWlGb3JtQ29udHJvbC5tZXRhKHtcbiAgICAgICAgdGVtcGxhdGVVcmw6J3BhY2thZ2U6c3JjL2NvbXBvbmVudHMvQWlGb3JtVGV4dGFyZWEvQWlGb3JtVGV4dGFyZWEuaHRtbCcsXG4gICAgICAgIHNlbGVjdG9yOiAnYWktZm9ybS10ZXh0YXJlYScsXG4gICAgICAgIGlucHV0czpbJ3Nob3dDb3VudGVyJywnbWF4TGVuZ3RoJywncmVhZG9ubHknLCd2YWx1ZSddLFxuICAgICAgICBob3N0OiB7XG4gICAgICAgICAgICAnW2NsYXNzLmZvY3VzXSc6ICdpc0ZvY3VzJyxcbiAgICAgICAgICAgICdbY2xhc3MudmFsdWVkXSc6ICdoYXNWYWx1ZSgpJyxcbiAgICAgICAgICAgICdbY2xhc3MucmVhZG9ubHldJzogJ3JlYWRvbmx5JyxcbiAgICAgICAgfSwgICAgICAgXG4gICAgfSx7XG4gICAgICAgIGlnbm9yZUFjdGl2ZToxLFxuICAgICAgICBpZ25vcmVGb2N1czoxLFxuICAgICAgICBpZ25vcmVIb3ZlcjoxXG4gICAgfVxuKSkgICAgXG5leHBvcnQgY2xhc3MgQWlGb3JtVGV4dGFyZWEgZXh0ZW5kcyBBaUZvcm1JbnB1dCB7IFxuXG4gICAgY29uc3RydWN0b3IoZWxlOiBFbGVtZW50UmVmKSB7IFxuICAgICAgICBzdXBlcihlbGUpO1xuICAgIH1cbn0gXG4gIFxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
