System.register(['angular2/core', '../AiFormControl/AiFormControl', '../AiInput/AiInput'], function(exports_1) {
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
    var core_1, AiFormControl_1, AiInput_1;
    var AiFormInput;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
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
                    this.nativeElement.setAttribute('ai-form-input', '');
                }
                AiFormInput.prototype.hasValue = function () {
                    return this.value.length > 0;
                };
                AiFormInput.prototype.ngOnChanges = function (_) {
                    this.updateCounter();
                };
                AiFormInput.prototype.updateValue = function (value) {
                    this.value = value;
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
                        directives: [AiInput_1.AiInput],
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlGb3JtSW5wdXQvQWlGb3JtSW5wdXQudHMiXSwibmFtZXMiOlsiQWlGb3JtSW5wdXQiLCJBaUZvcm1JbnB1dC5jb25zdHJ1Y3RvciIsIkFpRm9ybUlucHV0Lmhhc1ZhbHVlIiwiQWlGb3JtSW5wdXQubmdPbkNoYW5nZXMiLCJBaUZvcm1JbnB1dC51cGRhdGVWYWx1ZSIsIkFpRm9ybUlucHV0LnVwZGF0ZUNvdW50ZXIiLCJBaUZvcm1JbnB1dC5zZXRIYXNGb2N1cyIsIkFpRm9ybUlucHV0LmdldE1heExlbmd0aCIsIkFpRm9ybUlucHV0LmdldFR5cGUiLCJBaUZvcm1JbnB1dC5pc1JlYWRvbmx5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUtBO2dCQWdCaUNBLCtCQUFhQTtnQkFRMUNBLHFGQUFxRkE7Z0JBQ3JGQSxrQ0FBa0NBO2dCQUNsQ0EsOEJBQThCQTtnQkFDOUJBLG1DQUFtQ0E7Z0JBRW5DQSxxQkFBWUEsR0FBZUE7b0JBQ3ZCQyxrQkFBTUEsR0FBR0EsQ0FBQ0EsQ0FBQ0E7b0JBYmZBLDZCQUE2QkE7b0JBQzdCQSxVQUFLQSxHQUFTQSxFQUFFQSxDQUFDQTtvQkFDakJBLGdCQUFXQSxHQUFTQSxLQUFLQSxDQUFDQTtvQkFDMUJBLGNBQVNBLEdBQVFBLEdBQUdBLENBQUNBO29CQUNyQkEsU0FBSUEsR0FBUUEsTUFBTUEsQ0FBQ0E7b0JBQ25CQSxhQUFRQSxHQUFTQSxLQUFLQSxDQUFDQTtvQkFTbkJBLElBQUlBLENBQUNBLGFBQWFBLENBQUNBLFlBQVlBLENBQUNBLGVBQWVBLEVBQUNBLEVBQUVBLENBQUNBLENBQUNBO2dCQUN4REEsQ0FBQ0E7Z0JBRURELDhCQUFRQSxHQUFSQTtvQkFDSUUsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsTUFBTUEsR0FBR0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ2pDQSxDQUFDQTtnQkFFREYsaUNBQVdBLEdBQVhBLFVBQVlBLENBQUNBO29CQUNURyxJQUFJQSxDQUFDQSxhQUFhQSxFQUFFQSxDQUFDQTtnQkFDekJBLENBQUNBO2dCQUNESCxpQ0FBV0EsR0FBWEEsVUFBWUEsS0FBS0E7b0JBQ2JJLElBQUlBLENBQUNBLEtBQUtBLEdBQUdBLEtBQUtBLENBQUNBO29CQUNuQkEsSUFBSUEsQ0FBQ0EsYUFBYUEsRUFBRUEsQ0FBQ0E7b0JBQ3JCQSxJQUFJQSxDQUFDQSxLQUFLQSxHQUFDQSxFQUFFQSxDQUFDQTtnQkFDbEJBLENBQUNBO2dCQUVESixtQ0FBYUEsR0FBYkE7b0JBQ0lLLEVBQUVBLENBQUFBLENBQUNBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLENBQUFBLENBQUNBO3dCQUNqQkEsSUFBSUEsQ0FBQ0EsSUFBSUEsR0FBRUEsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsTUFBTUEsR0FBR0EsR0FBR0EsR0FBR0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0E7b0JBQ3hEQSxDQUFDQTtnQkFDTEEsQ0FBQ0E7Z0JBRURMLGlDQUFXQSxHQUFYQSxVQUFZQSxRQUFpQkE7b0JBQ3pCTSxJQUFJQSxDQUFDQSxPQUFPQSxHQUFDQSxRQUFRQSxDQUFDQTtvQkFDdEJBLEVBQUVBLENBQUFBLENBQUNBLENBQUNBLFFBQVFBLENBQUNBO3dCQUNUQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtnQkFDbENBLENBQUNBO2dCQUVETixrQ0FBWUEsR0FBWkE7b0JBQ0lPLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBO2dCQUMxQkEsQ0FBQ0E7Z0JBRURQLDZCQUFPQSxHQUFQQTtvQkFDSVEsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0E7Z0JBQ3JCQSxDQUFDQTtnQkFFRFIsZ0NBQVVBLEdBQVZBO29CQUNJUyxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxNQUFNQSxHQUFDQSxJQUFJQSxDQUFDQTtnQkFDdkNBLENBQUNBO2dCQXJFTFQ7b0JBQUNBLGdCQUFTQSxDQUFDQSw2QkFBYUEsQ0FBQ0EsSUFBSUEsQ0FBQ0E7d0JBQ3RCQSxXQUFXQSxFQUFDQSxxREFBcURBO3dCQUNqRUEsVUFBVUEsRUFBRUEsQ0FBQ0EsaUJBQU9BLENBQUNBO3dCQUNyQkEsUUFBUUEsRUFBRUEsZUFBZUE7d0JBQ3pCQSxNQUFNQSxFQUFDQSxDQUFDQSxhQUFhQSxFQUFDQSxXQUFXQSxFQUFDQSxNQUFNQSxFQUFDQSxVQUFVQSxFQUFDQSxPQUFPQSxDQUFDQTt3QkFDNURBLElBQUlBLEVBQUVBOzRCQUNGQSxlQUFlQSxFQUFFQSxTQUFTQTs0QkFDMUJBLGdCQUFnQkEsRUFBRUEsWUFBWUE7NEJBQzlCQSxrQkFBa0JBLEVBQUVBLFVBQVVBO3lCQUNqQ0E7cUJBQ0pBLEVBQUNBO3dCQUNFQSxZQUFZQSxFQUFDQSxDQUFDQTt3QkFDZEEsV0FBV0EsRUFBQ0EsQ0FBQ0E7d0JBQ2JBLFdBQVdBLEVBQUNBLENBQUNBO3FCQUNoQkEsQ0FDSkEsQ0FBQ0E7O2dDQXdEREE7Z0JBQURBLGtCQUFDQTtZQUFEQSxDQXZFQSxBQXVFQ0EsRUF2RGdDLDZCQUFhLEVBdUQ3QztZQXZFRCxxQ0F1RUMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL0FpRm9ybUlucHV0L0FpRm9ybUlucHV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsRWxlbWVudFJlZixBdHRyaWJ1dGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtPYnNlcnZhYmxlV3JhcHBlciwgRXZlbnRFbWl0dGVyfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2FzeW5jJztcbmltcG9ydCB7QWlGb3JtQ29udHJvbH0gZnJvbSAnLi4vQWlGb3JtQ29udHJvbC9BaUZvcm1Db250cm9sJztcbmltcG9ydCB7QWlJbnB1dH0gZnJvbSAnLi4vQWlJbnB1dC9BaUlucHV0JztcblxuQENvbXBvbmVudChBaUZvcm1Db250cm9sLm1ldGEoe1xuICAgICAgICB0ZW1wbGF0ZVVybDoncGFja2FnZTpzcmMvY29tcG9uZW50cy9BaUZvcm1JbnB1dC9BaUZvcm1JbnB1dC5odG1sJyxcbiAgICAgICAgZGlyZWN0aXZlczogW0FpSW5wdXRdLFxuICAgICAgICBzZWxlY3RvcjogJ2FpLWZvcm0taW5wdXQnLFxuICAgICAgICBpbnB1dHM6WydzaG93Q291bnRlcicsJ21heExlbmd0aCcsJ3R5cGUnLCdyZWFkb25seScsJ3ZhbHVlJ10sXG4gICAgICAgIGhvc3Q6IHtcbiAgICAgICAgICAgICdbY2xhc3MuZm9jdXNdJzogJ2lzRm9jdXMnLFxuICAgICAgICAgICAgJ1tjbGFzcy52YWx1ZWRdJzogJ2hhc1ZhbHVlKCknLFxuICAgICAgICAgICAgJ1tjbGFzcy5yZWFkb25seV0nOiAncmVhZG9ubHknLFxuICAgICAgICB9LCAgICAgICBcbiAgICB9LHtcbiAgICAgICAgaWdub3JlQWN0aXZlOjEsXG4gICAgICAgIGlnbm9yZUZvY3VzOjEsXG4gICAgICAgIGlnbm9yZUhvdmVyOjFcbiAgICB9XG4pKSAgICBcbmV4cG9ydCBjbGFzcyBBaUZvcm1JbnB1dCBleHRlbmRzIEFpRm9ybUNvbnRyb2wgeyBcbiAgICAvL3RleHRhcmVhTW9kZTpib29sZWFuPWZhbHNlO1xuICAgIHZhbHVlOiBzdHJpbmc9XCJcIjsgXG4gICAgc2hvd0NvdW50ZXI6Ym9vbGVhbj1mYWxzZTtcbiAgICBtYXhMZW5ndGg6bnVtYmVyPTI1NTtcbiAgICB0eXBlOnN0cmluZz0ndGV4dCc7XG4gICAgcmVhZG9ubHk6Ym9vbGVhbj1mYWxzZTtcblxuICAgIC8vIEV2ZW50cyBlbWl0dGVkIGJ5IHRoaXMgZGlyZWN0aXZlLiBXZSB1c2UgdGhlc2Ugc3BlY2lhbCAnbWQtJyBldmVudHMgdG8gY29tbXVuaWNhdGVcbiAgICAvLyB0byB0aGUgcGFyZW50IE1kSW5wdXRDb250YWluZXIuXG4gICAgLy9tZENoYW5nZTogRXZlbnRFbWl0dGVyPGFueT47XG4gICAgLy9tZEZvY3VzQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgXG4gICAgY29uc3RydWN0b3IoZWxlOiBFbGVtZW50UmVmKSB7IFxuICAgICAgICBzdXBlcihlbGUpO1xuICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdhaS1mb3JtLWlucHV0JywnJyk7IFxuICAgIH1cblxuICAgIGhhc1ZhbHVlKCl7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlLmxlbmd0aCA+IDA7XG4gICAgfSBcblxuICAgIG5nT25DaGFuZ2VzKF8pIHtcbiAgICAgICAgdGhpcy51cGRhdGVDb3VudGVyKCk7XG4gICAgfVxuICAgIHVwZGF0ZVZhbHVlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy51cGRhdGVDb3VudGVyKCk7XG4gICAgICAgIHRoaXMuZXJyb3I9Jyc7XG4gICAgfVxuICAgIFxuICAgIHVwZGF0ZUNvdW50ZXIoKXtcbiAgICAgICAgaWYodGhpcy5zaG93Q291bnRlcil7XG4gICAgICAgICAgICB0aGlzLndvcmQ9IHRoaXMudmFsdWUubGVuZ3RoICsgXCIvXCIgKyB0aGlzLm1heExlbmd0aDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBzZXRIYXNGb2N1cyhoYXNGb2N1czogYm9vbGVhbikge1xuICAgICAgICB0aGlzLmlzRm9jdXM9aGFzRm9jdXM7XG4gICAgICAgIGlmKCFoYXNGb2N1cylcbiAgICAgICAgICAgIHRoaXMudmFsaWRhdGUodGhpcy52YWx1ZSk7XG4gICAgfVxuXG4gICAgZ2V0TWF4TGVuZ3RoKCl7XG4gICAgICAgIHJldHVybiB0aGlzLm1heExlbmd0aDtcbiAgICB9ICAgIFxuXG4gICAgZ2V0VHlwZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy50eXBlO1xuICAgIH0gICAgXG5cbiAgICBpc1JlYWRvbmx5KCl7XG4gICAgICAgIHJldHVybiB0aGlzLnJlYWRvbmx5ID8gJ3RydWUnOm51bGw7XG4gICAgfSAgICBcblxufSBcbiAgXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
