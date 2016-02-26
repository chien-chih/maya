System.register(['angular2/core', '../AiFormControl/AiFormControl'], function(exports_1) {
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
    var core_1, AiFormControl_1;
    var AiFormInput;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (AiFormControl_1_1) {
                AiFormControl_1 = AiFormControl_1_1;
            }],
        execute: function() {
            AiFormInput = (function (_super) {
                __extends(AiFormInput, _super);
                // Events emitted by this directive. We use these special 'md-' events to communicate
                // to the parent MdInputContainer.
                //mdChange: EventEmitter<any>;
                //mdFocusChange: EventEmitter<any>;
                function AiFormInput(ele) {
                    _super.call(this, ele);
                    //textareaMode:boolean=false;
                    this.value = "";
                    this.showCounter = false;
                    this.maxLength = 255;
                    this.type = 'text';
                    this.readonly = false;
                    var el = this.ele.nativeElement;
                    el.setAttribute('ai-form-input', '');
                }
                AiFormInput.prototype.hasValue = function () {
                    return this.value.length > 0;
                };
                AiFormInput.prototype.ngOnChanges = function (_) {
                    this.updateCounter();
                };
                AiFormInput.prototype.updateValue = function (event) {
                    this.value = event.target.value;
                    this.updateCounter();
                    this.error = '';
                };
                AiFormInput.prototype.updateCounter = function () {
                    if (this.showCounter) {
                        this.word = this.value.length + "/" + this.maxLength;
                    }
                };
                AiFormInput.prototype.setHasFocus = function (hasFocus) {
                    this.isFocus = hasFocus;
                    if (!hasFocus)
                        this.validate(this.value);
                };
                AiFormInput.prototype.getMaxLength = function () {
                    return this.maxLength;
                };
                AiFormInput.prototype.getType = function () {
                    return this.type;
                };
                AiFormInput.prototype.isReadonly = function () {
                    return this.readonly ? 'true' : null;
                };
                AiFormInput = __decorate([
                    core_1.Component(AiFormControl_1.AiFormControl.meta({
                        templateUrl: 'package:src/components/AiFormInput/AiFormInput.html',
                        selector: 'ai-form-input',
                        inputs: ['showCounter', 'maxLength', 'type', 'readonly', 'value'],
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
                ], AiFormInput);
                return AiFormInput;
            })(AiFormControl_1.AiFormControl);
            exports_1("AiFormInput", AiFormInput);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlGb3JtSW5wdXQvQWlGb3JtSW5wdXQudHMiXSwibmFtZXMiOlsiQWlGb3JtSW5wdXQiLCJBaUZvcm1JbnB1dC5jb25zdHJ1Y3RvciIsIkFpRm9ybUlucHV0Lmhhc1ZhbHVlIiwiQWlGb3JtSW5wdXQubmdPbkNoYW5nZXMiLCJBaUZvcm1JbnB1dC51cGRhdGVWYWx1ZSIsIkFpRm9ybUlucHV0LnVwZGF0ZUNvdW50ZXIiLCJBaUZvcm1JbnB1dC5zZXRIYXNGb2N1cyIsIkFpRm9ybUlucHV0LmdldE1heExlbmd0aCIsIkFpRm9ybUlucHV0LmdldFR5cGUiLCJBaUZvcm1JbnB1dC5pc1JlYWRvbmx5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUlBO2dCQWVpQ0EsK0JBQWFBO2dCQVExQ0EscUZBQXFGQTtnQkFDckZBLGtDQUFrQ0E7Z0JBQ2xDQSw4QkFBOEJBO2dCQUM5QkEsbUNBQW1DQTtnQkFFbkNBLHFCQUFZQSxHQUFlQTtvQkFDdkJDLGtCQUFNQSxHQUFHQSxDQUFDQSxDQUFDQTtvQkFiZkEsNkJBQTZCQTtvQkFDN0JBLFVBQUtBLEdBQVNBLEVBQUVBLENBQUNBO29CQUNqQkEsZ0JBQVdBLEdBQVNBLEtBQUtBLENBQUNBO29CQUMxQkEsY0FBU0EsR0FBUUEsR0FBR0EsQ0FBQ0E7b0JBQ3JCQSxTQUFJQSxHQUFRQSxNQUFNQSxDQUFDQTtvQkFDbkJBLGFBQVFBLEdBQVNBLEtBQUtBLENBQUNBO29CQVNuQkEsSUFBSUEsRUFBRUEsR0FBT0EsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsYUFBYUEsQ0FBQ0E7b0JBQ3BDQSxFQUFFQSxDQUFDQSxZQUFZQSxDQUFDQSxlQUFlQSxFQUFDQSxFQUFFQSxDQUFDQSxDQUFDQTtnQkFDeENBLENBQUNBO2dCQUVERCw4QkFBUUEsR0FBUkE7b0JBQ0lFLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLE1BQU1BLEdBQUdBLENBQUNBLENBQUNBO2dCQUNqQ0EsQ0FBQ0E7Z0JBRURGLGlDQUFXQSxHQUFYQSxVQUFZQSxDQUFDQTtvQkFDVEcsSUFBSUEsQ0FBQ0EsYUFBYUEsRUFBRUEsQ0FBQ0E7Z0JBQ3pCQSxDQUFDQTtnQkFDREgsaUNBQVdBLEdBQVhBLFVBQVlBLEtBQUtBO29CQUNiSSxJQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxLQUFLQSxDQUFDQSxNQUFNQSxDQUFDQSxLQUFLQSxDQUFDQTtvQkFDaENBLElBQUlBLENBQUNBLGFBQWFBLEVBQUVBLENBQUNBO29CQUNyQkEsSUFBSUEsQ0FBQ0EsS0FBS0EsR0FBQ0EsRUFBRUEsQ0FBQ0E7Z0JBQ2xCQSxDQUFDQTtnQkFFREosbUNBQWFBLEdBQWJBO29CQUNJSyxFQUFFQSxDQUFBQSxDQUFDQSxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxDQUFBQSxDQUFDQTt3QkFDakJBLElBQUlBLENBQUNBLElBQUlBLEdBQUVBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLE1BQU1BLEdBQUdBLEdBQUdBLEdBQUdBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBO29CQUN4REEsQ0FBQ0E7Z0JBQ0xBLENBQUNBO2dCQUVETCxpQ0FBV0EsR0FBWEEsVUFBWUEsUUFBaUJBO29CQUN6Qk0sSUFBSUEsQ0FBQ0EsT0FBT0EsR0FBQ0EsUUFBUUEsQ0FBQ0E7b0JBQ3RCQSxFQUFFQSxDQUFBQSxDQUFDQSxDQUFDQSxRQUFRQSxDQUFDQTt3QkFDVEEsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ2xDQSxDQUFDQTtnQkFFRE4sa0NBQVlBLEdBQVpBO29CQUNJTyxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQTtnQkFDMUJBLENBQUNBO2dCQUVEUCw2QkFBT0EsR0FBUEE7b0JBQ0lRLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBO2dCQUNyQkEsQ0FBQ0E7Z0JBRURSLGdDQUFVQSxHQUFWQTtvQkFDSVMsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsTUFBTUEsR0FBQ0EsSUFBSUEsQ0FBQ0E7Z0JBQ3ZDQSxDQUFDQTtnQkFyRUxUO29CQUFDQSxnQkFBU0EsQ0FBQ0EsNkJBQWFBLENBQUNBLElBQUlBLENBQUNBO3dCQUN0QkEsV0FBV0EsRUFBQ0EscURBQXFEQTt3QkFDakVBLFFBQVFBLEVBQUVBLGVBQWVBO3dCQUN6QkEsTUFBTUEsRUFBQ0EsQ0FBQ0EsYUFBYUEsRUFBQ0EsV0FBV0EsRUFBQ0EsTUFBTUEsRUFBQ0EsVUFBVUEsRUFBQ0EsT0FBT0EsQ0FBQ0E7d0JBQzVEQSxJQUFJQSxFQUFFQTs0QkFDRkEsZUFBZUEsRUFBRUEsU0FBU0E7NEJBQzFCQSxnQkFBZ0JBLEVBQUVBLFlBQVlBOzRCQUM5QkEsa0JBQWtCQSxFQUFFQSxVQUFVQTt5QkFDakNBO3FCQUNKQSxFQUFDQTt3QkFDRUEsWUFBWUEsRUFBQ0EsQ0FBQ0E7d0JBQ2RBLFdBQVdBLEVBQUNBLENBQUNBO3dCQUNiQSxXQUFXQSxFQUFDQSxDQUFDQTtxQkFDaEJBLENBQ0pBLENBQUNBOztnQ0F5RERBO2dCQUFEQSxrQkFBQ0E7WUFBREEsQ0F2RUEsQUF1RUNBLEVBeERnQyw2QkFBYSxFQXdEN0M7WUF2RUQscUNBdUVDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9BaUZvcm1JbnB1dC9BaUZvcm1JbnB1dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LEVsZW1lbnRSZWYsQXR0cmlidXRlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7T2JzZXJ2YWJsZVdyYXBwZXIsIEV2ZW50RW1pdHRlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9hc3luYyc7XG5pbXBvcnQge0FpRm9ybUNvbnRyb2x9IGZyb20gJy4uL0FpRm9ybUNvbnRyb2wvQWlGb3JtQ29udHJvbCc7XG5cbkBDb21wb25lbnQoQWlGb3JtQ29udHJvbC5tZXRhKHtcbiAgICAgICAgdGVtcGxhdGVVcmw6J3BhY2thZ2U6c3JjL2NvbXBvbmVudHMvQWlGb3JtSW5wdXQvQWlGb3JtSW5wdXQuaHRtbCcsXG4gICAgICAgIHNlbGVjdG9yOiAnYWktZm9ybS1pbnB1dCcsXG4gICAgICAgIGlucHV0czpbJ3Nob3dDb3VudGVyJywnbWF4TGVuZ3RoJywndHlwZScsJ3JlYWRvbmx5JywndmFsdWUnXSxcbiAgICAgICAgaG9zdDoge1xuICAgICAgICAgICAgJ1tjbGFzcy5mb2N1c10nOiAnaXNGb2N1cycsXG4gICAgICAgICAgICAnW2NsYXNzLnZhbHVlZF0nOiAnaGFzVmFsdWUoKScsXG4gICAgICAgICAgICAnW2NsYXNzLnJlYWRvbmx5XSc6ICdyZWFkb25seScsXG4gICAgICAgIH0sICAgICAgIFxuICAgIH0se1xuICAgICAgICBpZ25vcmVBY3RpdmU6MSxcbiAgICAgICAgaWdub3JlRm9jdXM6MSxcbiAgICAgICAgaWdub3JlSG92ZXI6MVxuICAgIH1cbikpICAgIFxuZXhwb3J0IGNsYXNzIEFpRm9ybUlucHV0IGV4dGVuZHMgQWlGb3JtQ29udHJvbCB7IFxuICAgIC8vdGV4dGFyZWFNb2RlOmJvb2xlYW49ZmFsc2U7XG4gICAgdmFsdWU6IHN0cmluZz1cIlwiOyBcbiAgICBzaG93Q291bnRlcjpib29sZWFuPWZhbHNlO1xuICAgIG1heExlbmd0aDpudW1iZXI9MjU1O1xuICAgIHR5cGU6c3RyaW5nPSd0ZXh0JztcbiAgICByZWFkb25seTpib29sZWFuPWZhbHNlO1xuXG4gICAgLy8gRXZlbnRzIGVtaXR0ZWQgYnkgdGhpcyBkaXJlY3RpdmUuIFdlIHVzZSB0aGVzZSBzcGVjaWFsICdtZC0nIGV2ZW50cyB0byBjb21tdW5pY2F0ZVxuICAgIC8vIHRvIHRoZSBwYXJlbnQgTWRJbnB1dENvbnRhaW5lci5cbiAgICAvL21kQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgICAvL21kRm9jdXNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+O1xuICBcbiAgICBjb25zdHJ1Y3RvcihlbGU6IEVsZW1lbnRSZWYpIHsgXG4gICAgICAgIHN1cGVyKGVsZSk7XG4gICAgICAgIHZhciBlbDphbnkgPSB0aGlzLmVsZS5uYXRpdmVFbGVtZW50O1xuICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2FpLWZvcm0taW5wdXQnLCcnKTsgXG4gICAgfVxuXG4gICAgaGFzVmFsdWUoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUubGVuZ3RoID4gMDtcbiAgICB9IFxuXG4gICAgbmdPbkNoYW5nZXMoXykge1xuICAgICAgICB0aGlzLnVwZGF0ZUNvdW50ZXIoKTtcbiAgICB9XG4gICAgdXBkYXRlVmFsdWUoZXZlbnQpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgICAgdGhpcy51cGRhdGVDb3VudGVyKCk7XG4gICAgICAgIHRoaXMuZXJyb3I9Jyc7XG4gICAgfVxuICAgIFxuICAgIHVwZGF0ZUNvdW50ZXIoKXtcbiAgICAgICAgaWYodGhpcy5zaG93Q291bnRlcil7XG4gICAgICAgICAgICB0aGlzLndvcmQ9IHRoaXMudmFsdWUubGVuZ3RoICsgXCIvXCIgKyB0aGlzLm1heExlbmd0aDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBzZXRIYXNGb2N1cyhoYXNGb2N1czogYm9vbGVhbikge1xuICAgICAgICB0aGlzLmlzRm9jdXM9aGFzRm9jdXM7XG4gICAgICAgIGlmKCFoYXNGb2N1cylcbiAgICAgICAgICAgIHRoaXMudmFsaWRhdGUodGhpcy52YWx1ZSk7XG4gICAgfVxuXG4gICAgZ2V0TWF4TGVuZ3RoKCl7XG4gICAgICAgIHJldHVybiB0aGlzLm1heExlbmd0aDtcbiAgICB9ICAgIFxuXG4gICAgZ2V0VHlwZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy50eXBlO1xuICAgIH0gICAgXG5cbiAgICBpc1JlYWRvbmx5KCl7XG4gICAgICAgIHJldHVybiB0aGlzLnJlYWRvbmx5ID8gJ3RydWUnOm51bGw7XG4gICAgfSAgICBcblxufSBcbiAgXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
