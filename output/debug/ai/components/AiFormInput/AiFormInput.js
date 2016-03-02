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
                    this.nativeElement.setAttribute('ai-form-input', '');
                    this.inhieritAttributesToChilds(0);
                    var child = this.nativeElement.childNodes[0];
                    if (this.nativeElement.getAttribute('round') != null)
                        child.setAttribute('round', '');
                    else if (this.nativeElement.getAttribute('ellipse') != null)
                        child.setAttribute('ellipse', '');
                    else if (this.nativeElement.getAttribute('none') != null)
                        child.setAttribute('none', '');
                    else if (this.nativeElement.getAttribute('rect') != null)
                        child.setAttribute('rect', '');
                    else
                        child.setAttribute('line', '');
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
                AiFormInput.inputs = ['type', 'maxlength', 'min_length', 'readonly', 'counter', 'validated'];
                AiFormInput.host = {
                    '[class.focus]': 'isFocus',
                    '[class.readonly]': 'readonly',
                };
                AiFormInput = __decorate([
                    core_1.Component(AiFormControl_1.AiFormControl.meta({
                        templateUrl: 'package:src/components/AiFormInput/AiFormInput.html',
                        directives: [AiInput_1.AiInput],
                        selector: 'ai-form-input',
                        inputs: AiFormInput.inputs,
                        host: AiFormInput.host,
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlGb3JtSW5wdXQvQWlGb3JtSW5wdXQudHMiXSwibmFtZXMiOlsiQWlGb3JtSW5wdXQiLCJBaUZvcm1JbnB1dC5jb25zdHJ1Y3RvciIsIkFpRm9ybUlucHV0LnVwZGF0ZVZhbHVlIiwiQWlGb3JtSW5wdXQudmFsaWRhdGUiLCJBaUZvcm1JbnB1dC5zZXRIYXNGb2N1cyIsIkFpRm9ybUlucHV0LmdldE1heExlbmd0aCIsIkFpRm9ybUlucHV0LmdldFR5cGUiLCJBaUZvcm1JbnB1dC5pc1JlYWRvbmx5IiwiQWlGb3JtSW5wdXQuZ2V0U3ltYm9sSWNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFNQTtnQkFhaUNBLCtCQUFhQTtnQkFvQjFDQSxxQkFBWUEsR0FBZUE7b0JBQ3ZCQyxrQkFBTUEsR0FBR0EsQ0FBQ0EsQ0FBQ0E7b0JBYmZBLFNBQUlBLEdBQVFBLE1BQU1BLENBQUNBO29CQUVuQkEsZUFBVUEsR0FBUUEsR0FBR0EsQ0FBQ0E7b0JBRXRCQSxlQUFVQSxHQUFRQSxDQUFDQSxDQUFDQTtvQkFFcEJBLGFBQVFBLEdBQVNBLEtBQUtBLENBQUNBO29CQUV2QkEsWUFBT0EsR0FBU0EsS0FBS0EsQ0FBQ0E7b0JBRXRCQSxjQUFTQSxHQUFTQSxLQUFLQSxDQUFDQTtvQkFJcEJBLElBQUlBLENBQUNBLGFBQWFBLENBQUNBLFlBQVlBLENBQUNBLGVBQWVBLEVBQUNBLEVBQUVBLENBQUNBLENBQUNBO29CQUNwREEsSUFBSUEsQ0FBQ0EsMEJBQTBCQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFDbkNBLElBQUlBLEtBQUtBLEdBQUNBLElBQUlBLENBQUNBLGFBQWFBLENBQUNBLFVBQVVBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO29CQUMzQ0EsRUFBRUEsQ0FBQUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsSUFBSUEsSUFBSUEsQ0FBQ0E7d0JBQ2hEQSxLQUFLQSxDQUFDQSxZQUFZQSxDQUFDQSxPQUFPQSxFQUFDQSxFQUFFQSxDQUFDQSxDQUFDQTtvQkFDbkNBLElBQUlBLENBQUNBLEVBQUVBLENBQUFBLENBQUNBLElBQUlBLENBQUNBLGFBQWFBLENBQUNBLFlBQVlBLENBQUNBLFNBQVNBLENBQUNBLElBQUlBLElBQUlBLENBQUNBO3dCQUN2REEsS0FBS0EsQ0FBQ0EsWUFBWUEsQ0FBQ0EsU0FBU0EsRUFBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0E7b0JBQ3JDQSxJQUFJQSxDQUFDQSxFQUFFQSxDQUFBQSxDQUFDQSxJQUFJQSxDQUFDQSxhQUFhQSxDQUFDQSxZQUFZQSxDQUFDQSxNQUFNQSxDQUFDQSxJQUFJQSxJQUFJQSxDQUFDQTt3QkFDcERBLEtBQUtBLENBQUNBLFlBQVlBLENBQUNBLE1BQU1BLEVBQUNBLEVBQUVBLENBQUNBLENBQUNBO29CQUNsQ0EsSUFBSUEsQ0FBQ0EsRUFBRUEsQ0FBQUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsSUFBSUEsQ0FBQ0E7d0JBQ3BEQSxLQUFLQSxDQUFDQSxZQUFZQSxDQUFDQSxNQUFNQSxFQUFDQSxFQUFFQSxDQUFDQSxDQUFDQTtvQkFDbENBLElBQUlBO3dCQUNBQSxLQUFLQSxDQUFDQSxZQUFZQSxDQUFDQSxNQUFNQSxFQUFDQSxFQUFFQSxDQUFDQSxDQUFDQTtnQkFDdENBLENBQUNBO2dCQUVERCxpQ0FBV0EsR0FBWEEsVUFBWUEsS0FBU0E7b0JBQ2pCRSxFQUFFQSxDQUFBQSxDQUFDQSxJQUFJQSxDQUFDQSxPQUFPQSxJQUFJQSxLQUFLQSxDQUFDQTt3QkFDckJBLElBQUlBLENBQUNBLElBQUlBLEdBQUVBLEtBQUtBLENBQUNBLE1BQU1BLEdBQUdBLEdBQUdBLEdBQUdBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBO29CQUNwREEsZ0JBQUtBLENBQUNBLFdBQVdBLFlBQUNBLEtBQUtBLENBQUNBLENBQUNBO2dCQUM3QkEsQ0FBQ0E7Z0JBRURGLDhCQUFRQSxHQUFSQSxVQUFTQSxJQUFXQTtvQkFDaEJHLEVBQUVBLENBQUFBLENBQUNBLGdCQUFLQSxDQUFDQSxRQUFRQSxZQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFBQSxDQUFDQTt3QkFFckJBLEVBQUVBLENBQUFBLENBQUNBLElBQUlBLENBQUNBLFVBQVVBLEdBQUdBLENBQUNBLElBQUlBLElBQUlBLENBQUNBLE1BQU1BLEdBQUdBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLENBQUFBLENBQUNBOzRCQUNyREEsSUFBSUEsQ0FBQ0EsS0FBS0EsR0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsR0FBQ0EscUJBQXFCQSxHQUFDQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQTs0QkFDNURBLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBO3dCQUNqQkEsQ0FBQ0E7b0JBQ0xBLENBQUNBO29CQUNEQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQTtnQkFDaEJBLENBQUNBO2dCQUVESCxpQ0FBV0EsR0FBWEEsVUFBWUEsUUFBaUJBO29CQUN6QkksSUFBSUEsQ0FBQ0EsT0FBT0EsR0FBQ0EsUUFBUUEsQ0FBQ0E7b0JBQ3RCQSxFQUFFQSxDQUFBQSxDQUFDQSxDQUFDQSxRQUFRQSxDQUFDQTt3QkFDVEEsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ2xDQSxDQUFDQTtnQkFFREosa0NBQVlBLEdBQVpBO29CQUNJSyxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQTtnQkFDM0JBLENBQUNBO2dCQUVETCw2QkFBT0EsR0FBUEE7b0JBQ0lNLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBO2dCQUNyQkEsQ0FBQ0E7Z0JBRUROLGdDQUFVQSxHQUFWQTtvQkFDSU8sTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsTUFBTUEsR0FBQ0EsSUFBSUEsQ0FBQ0E7Z0JBQ3ZDQSxDQUFDQTtnQkFFRFAsbUNBQWFBLEdBQWJBO29CQUVJUSxFQUFFQSxDQUFBQSxDQUFDQSxJQUFJQSxDQUFDQSxRQUFRQSxFQUFFQSxDQUFDQTt3QkFDZkEsTUFBTUEsQ0FBQ0EsT0FBT0EsQ0FBQ0E7b0JBQ25CQSxJQUFJQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQTt3QkFDcEJBLE1BQU1BLENBQUNBLE1BQU1BLENBQUNBO29CQUVsQkEsTUFBTUEsQ0FBQ0EsRUFBRUEsQ0FBQ0E7Z0JBQ2RBLENBQUNBO2dCQTlFTVIsa0JBQU1BLEdBQUNBLENBQUNBLE1BQU1BLEVBQUNBLFdBQVdBLEVBQUNBLFlBQVlBLEVBQUNBLFVBQVVBLEVBQUNBLFNBQVNBLEVBQUNBLFdBQVdBLENBQUNBLENBQUNBO2dCQUMxRUEsZ0JBQUlBLEdBQUNBO29CQUNKQSxlQUFlQSxFQUFFQSxTQUFTQTtvQkFDMUJBLGtCQUFrQkEsRUFBRUEsVUFBVUE7aUJBQ2pDQSxDQUFDQTtnQkFuQlZBO29CQUFDQSxnQkFBU0EsQ0FBQ0EsNkJBQWFBLENBQUNBLElBQUlBLENBQUNBO3dCQUN0QkEsV0FBV0EsRUFBQ0EscURBQXFEQTt3QkFDakVBLFVBQVVBLEVBQUVBLENBQUNBLGlCQUFPQSxDQUFDQTt3QkFDckJBLFFBQVFBLEVBQUVBLGVBQWVBO3dCQUN6QkEsTUFBTUEsRUFBRUEsV0FBV0EsQ0FBQ0EsTUFBTUE7d0JBQzFCQSxJQUFJQSxFQUFFQSxXQUFXQSxDQUFDQSxJQUFJQTt3QkFDdEJBLFNBQVNBLEVBQUVBLENBQUNBLElBQUlBLGVBQVFBLENBQUNBLDBCQUFpQkEsRUFBRUEsRUFBQ0EsV0FBV0EsRUFBRUEsaUJBQVVBLENBQUNBLGNBQU1BLE9BQUFBLFdBQVdBLEVBQVhBLENBQVdBLENBQUNBLEVBQUVBLEtBQUtBLEVBQUVBLElBQUlBLEVBQUNBLENBQUNBLENBQUNBO3FCQUMxR0EsRUFBQ0E7d0JBQ0VBLFlBQVlBLEVBQUNBLENBQUNBO3dCQUNkQSxXQUFXQSxFQUFDQSxDQUFDQTt3QkFDYkEsV0FBV0EsRUFBQ0EsQ0FBQ0E7cUJBQ2hCQSxDQUNKQSxDQUFDQTs7Z0NBb0ZEQTtnQkFBREEsa0JBQUNBO1lBQURBLENBaEdBLEFBZ0dDQSxFQW5GZ0MsNkJBQWEsRUFtRjdDO1lBaEdELHFDQWdHQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvQWlGb3JtSW5wdXQvQWlGb3JtSW5wdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCxFbGVtZW50UmVmLGZvcndhcmRSZWYsUHJvdmlkZXJ9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtOR19WQUxVRV9BQ0NFU1NPUn0gZnJvbSAnYW5ndWxhcjIvY29tbW9uJztcbmltcG9ydCB7T2JzZXJ2YWJsZVdyYXBwZXIsRXZlbnRFbWl0dGVyfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2FzeW5jJztcbmltcG9ydCB7QWlGb3JtQ29udHJvbH0gZnJvbSAnLi4vQWlGb3JtQ29udHJvbC9BaUZvcm1Db250cm9sJztcbmltcG9ydCB7QWlJbnB1dH0gZnJvbSAnLi4vQWlJbnB1dC9BaUlucHV0JztcblxuQENvbXBvbmVudChBaUZvcm1Db250cm9sLm1ldGEoe1xuICAgICAgICB0ZW1wbGF0ZVVybDoncGFja2FnZTpzcmMvY29tcG9uZW50cy9BaUZvcm1JbnB1dC9BaUZvcm1JbnB1dC5odG1sJyxcbiAgICAgICAgZGlyZWN0aXZlczogW0FpSW5wdXRdLFxuICAgICAgICBzZWxlY3RvcjogJ2FpLWZvcm0taW5wdXQnLFxuICAgICAgICBpbnB1dHM6IEFpRm9ybUlucHV0LmlucHV0cyxcbiAgICAgICAgaG9zdDogQWlGb3JtSW5wdXQuaG9zdCxcbiAgICAgICAgcHJvdmlkZXJzOiBbbmV3IFByb3ZpZGVyKE5HX1ZBTFVFX0FDQ0VTU09SLCB7dXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQWlGb3JtSW5wdXQpLCBtdWx0aTogdHJ1ZX0pXVxuICAgIH0se1xuICAgICAgICBpZ25vcmVBY3RpdmU6MSxcbiAgICAgICAgaWdub3JlRm9jdXM6MSxcbiAgICAgICAgaWdub3JlSG92ZXI6MVxuICAgIH1cbikpICAgIFxuZXhwb3J0IGNsYXNzIEFpRm9ybUlucHV0IGV4dGVuZHMgQWlGb3JtQ29udHJvbCB7IFxuXG4gICAgc3RhdGljIGlucHV0cz1bJ3R5cGUnLCdtYXhsZW5ndGgnLCdtaW5fbGVuZ3RoJywncmVhZG9ubHknLCdjb3VudGVyJywndmFsaWRhdGVkJ107XG4gICAgc3RhdGljIGhvc3Q9e1xuICAgICAgICAgICAgJ1tjbGFzcy5mb2N1c10nOiAnaXNGb2N1cycsXG4gICAgICAgICAgICAnW2NsYXNzLnJlYWRvbmx5XSc6ICdyZWFkb25seScsXG4gICAgICAgIH07XG5cbiAgICB0eXBlOnN0cmluZz0ndGV4dCc7XG5cbiAgICBtYXhfbGVuZ3RoOm51bWJlcj0yNTU7XG5cbiAgICBtaW5fbGVuZ3RoOm51bWJlcj0wO1xuXG4gICAgcmVhZG9ubHk6Ym9vbGVhbj1mYWxzZTtcblxuICAgIGNvdW50ZXI6Ym9vbGVhbj1mYWxzZTtcblxuICAgIHZhbGlkYXRlZDpib29sZWFuPWZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IoZWxlOiBFbGVtZW50UmVmKSB7IFxuICAgICAgICBzdXBlcihlbGUpO1xuICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdhaS1mb3JtLWlucHV0JywnJyk7IFxuICAgICAgICB0aGlzLmluaGllcml0QXR0cmlidXRlc1RvQ2hpbGRzKDApO1xuICAgICAgICB2YXIgY2hpbGQ9dGhpcy5uYXRpdmVFbGVtZW50LmNoaWxkTm9kZXNbMF07XG4gICAgICAgIGlmKHRoaXMubmF0aXZlRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3JvdW5kJykgIT0gbnVsbClcbiAgICAgICAgICAgIGNoaWxkLnNldEF0dHJpYnV0ZSgncm91bmQnLCcnKTtcbiAgICAgICAgZWxzZSBpZih0aGlzLm5hdGl2ZUVsZW1lbnQuZ2V0QXR0cmlidXRlKCdlbGxpcHNlJykgIT0gbnVsbClcbiAgICAgICAgICAgIGNoaWxkLnNldEF0dHJpYnV0ZSgnZWxsaXBzZScsJycpO1xuICAgICAgICBlbHNlIGlmKHRoaXMubmF0aXZlRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ25vbmUnKSAhPSBudWxsKVxuICAgICAgICAgICAgY2hpbGQuc2V0QXR0cmlidXRlKCdub25lJywnJyk7XG4gICAgICAgIGVsc2UgaWYodGhpcy5uYXRpdmVFbGVtZW50LmdldEF0dHJpYnV0ZSgncmVjdCcpICE9IG51bGwpXG4gICAgICAgICAgICBjaGlsZC5zZXRBdHRyaWJ1dGUoJ3JlY3QnLCcnKTtcbiAgICAgICAgZWxzZSBcbiAgICAgICAgICAgIGNoaWxkLnNldEF0dHJpYnV0ZSgnbGluZScsJycpO1xuICAgIH1cbiAgICBcbiAgICB1cGRhdGVWYWx1ZSh2YWx1ZTphbnkpIHtcbiAgICAgICAgaWYodGhpcy5jb3VudGVyICYmIHZhbHVlKVxuICAgICAgICAgICAgdGhpcy53b3JkPSB2YWx1ZS5sZW5ndGggKyBcIi9cIiArIHRoaXMubWF4X2xlbmd0aDtcbiAgICAgICAgc3VwZXIudXBkYXRlVmFsdWUodmFsdWUpO1xuICAgIH1cblxuICAgIHZhbGlkYXRlKHRleHQ6c3RyaW5nKTpib29sZWFue1xuICAgICAgICBpZihzdXBlci52YWxpZGF0ZSh0ZXh0KSl7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKHRoaXMubWluX2xlbmd0aCA+IDAgJiYgdGV4dC5sZW5ndGggPCB0aGlzLm1pbl9sZW5ndGgpe1xuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3I9dGhpcy5sYWJlbCsnIG1pbmltdW0gbGVuZ3RoIGlzICcrdGhpcy5taW5fbGVuZ3RoO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9ICAgIFxuXG4gICAgc2V0SGFzRm9jdXMoaGFzRm9jdXM6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5pc0ZvY3VzPWhhc0ZvY3VzO1xuICAgICAgICBpZighaGFzRm9jdXMpXG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRlKHRoaXMudmFsdWUpO1xuICAgIH1cblxuICAgIGdldE1heExlbmd0aCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5tYXhfbGVuZ3RoO1xuICAgIH0gICAgXG5cbiAgICBnZXRUeXBlKCl7XG4gICAgICAgIHJldHVybiB0aGlzLnR5cGU7XG4gICAgfSAgICBcblxuICAgIGlzUmVhZG9ubHkoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVhZG9ubHkgPyAndHJ1ZSc6bnVsbDtcbiAgICB9ICAgIFxuXG4gICAgZ2V0U3ltYm9sSWNvbigpe1xuICAgICAgICBcbiAgICAgICAgaWYodGhpcy5oYXNFcnJvcigpKVxuICAgICAgICAgICAgcmV0dXJuIFwiZXJyb3JcIjtcbiAgICAgICAgZWxzZSBpZiAodGhpcy52YWxpZGF0ZWQpXG4gICAgICAgICAgICByZXR1cm4gXCJkb25lXCI7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG5cbn0gXG4gIFxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
