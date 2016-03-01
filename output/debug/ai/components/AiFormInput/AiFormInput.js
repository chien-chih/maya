System.register(['angular2/core', 'angular2/common', '../AiFormControl/AiFormControl', '../AiInput/AiInput'], function(exports_1) {
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
    var core_1, common_1, AiFormControl_1, AiInput_1;
    var AiFormInput;
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
            function (AiInput_1_1) {
                AiInput_1 = AiInput_1_1;
            }],
        execute: function() {
            AiFormInput = (function (_super) {
                __extends(AiFormInput, _super);
                function AiFormInput(ele) {
                    _super.call(this, ele);
                    this.type = 'text';
                    this.max_length = 255;
                    this.min_length = 0;
                    this.readonly = false;
                    this.counter = false;
                    this.validated = false;
                }
                AiFormInput.prototype.updateValue = function (value) {
                    if (this.counter && value)
                        this.word = value.length + "/" + this.max_length;
                    _super.prototype.updateValue.call(this, value);
                };
                AiFormInput.prototype.validate = function (text) {
                    if (_super.prototype.validate.call(this, text)) {
                        if (this.min_length > 0 && text.length < this.min_length) {
                            this.error = this.label + ' minimum length is ' + this.min_length;
                            return false;
                        }
                    }
                    return true;
                };
                AiFormInput.prototype.setHasFocus = function (hasFocus) {
                    this.isFocus = hasFocus;
                    if (!hasFocus)
                        this.validate(this.value);
                };
                AiFormInput.prototype.getMaxLength = function () {
                    return this.max_length;
                };
                AiFormInput.prototype.getType = function () {
                    return this.type;
                };
                AiFormInput.prototype.isReadonly = function () {
                    return this.readonly ? 'true' : null;
                };
                AiFormInput.prototype.getSymbolIcon = function () {
                    if (this.hasError())
                        return "error";
                    else if (this.validated)
                        return "done";
                    return '';
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], AiFormInput.prototype, "type", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], AiFormInput.prototype, "max_length", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], AiFormInput.prototype, "min_length", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], AiFormInput.prototype, "readonly", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], AiFormInput.prototype, "counter", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], AiFormInput.prototype, "validated", void 0);
                AiFormInput = __decorate([
                    core_1.Component(AiFormControl_1.AiFormControl.meta({
                        templateUrl: 'package:src/components/AiFormInput/AiFormInput.html',
                        directives: [AiInput_1.AiInput],
                        selector: 'ai-form-input',
                        host: {
                            '[class.focus]': 'isFocus',
                            '[class.readonly]': 'readonly',
                        },
                        providers: [new core_1.Provider(common_1.NG_VALUE_ACCESSOR, { useExisting: core_1.forwardRef(function () { return AiFormInput; }), multi: true })]
                    }, {
                        ignoreActive: 1,
                        ignoreFocus: 1,
                        ignoreHover: 1
                    })), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], AiFormInput);
                return AiFormInput;
            })(AiFormControl_1.AiFormControl);
            exports_1("AiFormInput", AiFormInput);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlGb3JtSW5wdXQvQWlGb3JtSW5wdXQudHMiXSwibmFtZXMiOlsiQWlGb3JtSW5wdXQiLCJBaUZvcm1JbnB1dC5jb25zdHJ1Y3RvciIsIkFpRm9ybUlucHV0LnVwZGF0ZVZhbHVlIiwiQWlGb3JtSW5wdXQudmFsaWRhdGUiLCJBaUZvcm1JbnB1dC5zZXRIYXNGb2N1cyIsIkFpRm9ybUlucHV0LmdldE1heExlbmd0aCIsIkFpRm9ybUlucHV0LmdldFR5cGUiLCJBaUZvcm1JbnB1dC5pc1JlYWRvbmx5IiwiQWlGb3JtSW5wdXQuZ2V0U3ltYm9sSWNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFNQTtnQkFlaUNBLCtCQUFhQTtnQkFvQjFDQSxxQkFBWUEsR0FBZUE7b0JBQ3ZCQyxrQkFBTUEsR0FBR0EsQ0FBQ0EsQ0FBQ0E7b0JBbEJmQSxTQUFJQSxHQUFRQSxNQUFNQSxDQUFDQTtvQkFHbkJBLGVBQVVBLEdBQVFBLEdBQUdBLENBQUNBO29CQUd0QkEsZUFBVUEsR0FBUUEsQ0FBQ0EsQ0FBQ0E7b0JBR3BCQSxhQUFRQSxHQUFTQSxLQUFLQSxDQUFDQTtvQkFHdkJBLFlBQU9BLEdBQVNBLEtBQUtBLENBQUNBO29CQUd0QkEsY0FBU0EsR0FBU0EsS0FBS0EsQ0FBQ0E7Z0JBSXhCQSxDQUFDQTtnQkFFREQsaUNBQVdBLEdBQVhBLFVBQVlBLEtBQVNBO29CQUNqQkUsRUFBRUEsQ0FBQUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsSUFBSUEsS0FBS0EsQ0FBQ0E7d0JBQ3JCQSxJQUFJQSxDQUFDQSxJQUFJQSxHQUFFQSxLQUFLQSxDQUFDQSxNQUFNQSxHQUFHQSxHQUFHQSxHQUFHQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQTtvQkFDcERBLGdCQUFLQSxDQUFDQSxXQUFXQSxZQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtnQkFDN0JBLENBQUNBO2dCQUVERiw4QkFBUUEsR0FBUkEsVUFBU0EsSUFBV0E7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WUFBWUEsRUFBQ0EsQ0FBQ0E7d0JBQ2RBLFdBQVdBLEVBQUNBLENBQUNBO3dCQUNiQSxXQUFXQSxFQUFDQSxDQUFDQTtxQkFDaEJBLENBQ0pBLENBQUNBOztnQ0F1RURBO2dCQUFEQSxrQkFBQ0E7WUFBREEsQ0FyRkEsQUFxRkNBLEVBdEVnQyw2QkFBYSxFQXNFN0M7WUFyRkQscUNBcUZDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9BaUZvcm1JbnB1dC9BaUZvcm1JbnB1dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LEVsZW1lbnRSZWYsSW5wdXQsT3V0cHV0LGZvcndhcmRSZWYsUHJvdmlkZXJ9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtOR19WQUxVRV9BQ0NFU1NPUn0gZnJvbSAnYW5ndWxhcjIvY29tbW9uJztcbmltcG9ydCB7T2JzZXJ2YWJsZVdyYXBwZXIsRXZlbnRFbWl0dGVyfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2FzeW5jJztcbmltcG9ydCB7QWlGb3JtQ29udHJvbH0gZnJvbSAnLi4vQWlGb3JtQ29udHJvbC9BaUZvcm1Db250cm9sJztcbmltcG9ydCB7QWlJbnB1dH0gZnJvbSAnLi4vQWlJbnB1dC9BaUlucHV0JztcblxuQENvbXBvbmVudChBaUZvcm1Db250cm9sLm1ldGEoe1xuICAgICAgICB0ZW1wbGF0ZVVybDoncGFja2FnZTpzcmMvY29tcG9uZW50cy9BaUZvcm1JbnB1dC9BaUZvcm1JbnB1dC5odG1sJyxcbiAgICAgICAgZGlyZWN0aXZlczogW0FpSW5wdXRdLFxuICAgICAgICBzZWxlY3RvcjogJ2FpLWZvcm0taW5wdXQnLFxuICAgICAgICBob3N0OiB7XG4gICAgICAgICAgICAnW2NsYXNzLmZvY3VzXSc6ICdpc0ZvY3VzJyxcbiAgICAgICAgICAgICdbY2xhc3MucmVhZG9ubHldJzogJ3JlYWRvbmx5JyxcbiAgICAgICAgfSxcbiAgICAgICAgcHJvdmlkZXJzOiBbbmV3IFByb3ZpZGVyKE5HX1ZBTFVFX0FDQ0VTU09SLCB7dXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQWlGb3JtSW5wdXQpLCBtdWx0aTogdHJ1ZX0pXVxuICAgIH0se1xuICAgICAgICBpZ25vcmVBY3RpdmU6MSxcbiAgICAgICAgaWdub3JlRm9jdXM6MSxcbiAgICAgICAgaWdub3JlSG92ZXI6MVxuICAgIH1cbikpICAgIFxuZXhwb3J0IGNsYXNzIEFpRm9ybUlucHV0IGV4dGVuZHMgQWlGb3JtQ29udHJvbCB7IFxuXG4gICAgQElucHV0KCkgXG4gICAgdHlwZTpzdHJpbmc9J3RleHQnO1xuXG4gICAgQElucHV0KCkgIFxuICAgIG1heF9sZW5ndGg6bnVtYmVyPTI1NTtcblxuICAgIEBJbnB1dCgpICBcbiAgICBtaW5fbGVuZ3RoOm51bWJlcj0wO1xuXG4gICAgQElucHV0KCkgXG4gICAgcmVhZG9ubHk6Ym9vbGVhbj1mYWxzZTtcblxuICAgIEBJbnB1dCgpIFxuICAgIGNvdW50ZXI6Ym9vbGVhbj1mYWxzZTtcblxuICAgIEBJbnB1dCgpIFxuICAgIHZhbGlkYXRlZDpib29sZWFuPWZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IoZWxlOiBFbGVtZW50UmVmKSB7IFxuICAgICAgICBzdXBlcihlbGUpO1xuICAgIH1cblxuICAgIHVwZGF0ZVZhbHVlKHZhbHVlOmFueSkge1xuICAgICAgICBpZih0aGlzLmNvdW50ZXIgJiYgdmFsdWUpXG4gICAgICAgICAgICB0aGlzLndvcmQ9IHZhbHVlLmxlbmd0aCArIFwiL1wiICsgdGhpcy5tYXhfbGVuZ3RoO1xuICAgICAgICBzdXBlci51cGRhdGVWYWx1ZSh2YWx1ZSk7XG4gICAgfVxuXG4gICAgdmFsaWRhdGUodGV4dDpzdHJpbmcpOmJvb2xlYW57XG4gICAgICAgIGlmKHN1cGVyLnZhbGlkYXRlKHRleHQpKXtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYodGhpcy5taW5fbGVuZ3RoID4gMCAmJiB0ZXh0Lmxlbmd0aCA8IHRoaXMubWluX2xlbmd0aCl7XG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvcj10aGlzLmxhYmVsKycgbWluaW11bSBsZW5ndGggaXMgJyt0aGlzLm1pbl9sZW5ndGg7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gICAgXG5cbiAgICBzZXRIYXNGb2N1cyhoYXNGb2N1czogYm9vbGVhbikge1xuICAgICAgICB0aGlzLmlzRm9jdXM9aGFzRm9jdXM7XG4gICAgICAgIGlmKCFoYXNGb2N1cylcbiAgICAgICAgICAgIHRoaXMudmFsaWRhdGUodGhpcy52YWx1ZSk7XG4gICAgfVxuXG4gICAgZ2V0TWF4TGVuZ3RoKCl7XG4gICAgICAgIHJldHVybiB0aGlzLm1heF9sZW5ndGg7XG4gICAgfSAgICBcblxuICAgIGdldFR5cGUoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgICB9ICAgIFxuXG4gICAgaXNSZWFkb25seSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5yZWFkb25seSA/ICd0cnVlJzpudWxsO1xuICAgIH0gICAgXG5cbiAgICBnZXRTeW1ib2xJY29uKCl7XG4gICAgICAgIFxuICAgICAgICBpZih0aGlzLmhhc0Vycm9yKCkpXG4gICAgICAgICAgICByZXR1cm4gXCJlcnJvclwiO1xuICAgICAgICBlbHNlIGlmICh0aGlzLnZhbGlkYXRlZClcbiAgICAgICAgICAgIHJldHVybiBcImRvbmVcIjtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG5cblxufSBcbiAgXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
