System.register(['angular2/core', 'angular2/common', '../AiFormControl/AiFormControl', '../AiInput/AiInput'], function(exports_1, context_1) {
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
                }
                AiFormInput.prototype.ngOnInit = function () {
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
                    var match = this.nativeElement.getAttribute('match');
                    if (match != null) {
                        this.matcher = new RegExp(match);
                    }
                    var format = this.nativeElement.getAttribute('format');
                    if (format != null)
                        child.setAttribute('format', format);
                    var numberInput = this.nativeElement.getAttribute('numberinput');
                    if (numberInput != null)
                        child.setAttribute('numberinput', '');
                };
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
                        if (this.matcher && !this.matcher.test(text)) {
                            this.error = this.label + ' is not valid format ';
                            return false;
                        }
                    }
                    return true;
                };
                AiFormInput.prototype.setHasFocus = function (hasFocus) {
                    this.isFocus = hasFocus;
                    if (!hasFocus && this.value != null) {
                        this.validate(this.value);
                    }
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
            }(AiFormControl_1.AiFormControl));
            exports_1("AiFormInput", AiFormInput);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlGb3JtSW5wdXQvQWlGb3JtSW5wdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQW1CQTtnQkFBaUMsK0JBQWE7Z0JBcUIxQyxxQkFBWSxHQUFlO29CQUN2QixrQkFBTSxHQUFHLENBQUMsQ0FBQztvQkFiZixTQUFJLEdBQVEsTUFBTSxDQUFDO29CQUVuQixlQUFVLEdBQVEsR0FBRyxDQUFDO29CQUV0QixlQUFVLEdBQVEsQ0FBQyxDQUFDO29CQUVwQixhQUFRLEdBQVMsS0FBSyxDQUFDO29CQUV2QixZQUFPLEdBQVMsS0FBSyxDQUFDO29CQUV0QixjQUFTLEdBQVMsS0FBSyxDQUFDO29CQUlwQixJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxlQUFlLEVBQUMsRUFBRSxDQUFDLENBQUM7Z0JBRXhELENBQUM7Z0JBRUQsOEJBQVEsR0FBUjtvQkFFSSxJQUFJLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ25DLElBQUksS0FBSyxHQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUMzQyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJLENBQUM7d0JBQ2hELEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUNuQyxJQUFJLENBQUMsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLElBQUksSUFBSSxDQUFDO3dCQUN2RCxLQUFLLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBQyxFQUFFLENBQUMsQ0FBQztvQkFDckMsSUFBSSxDQUFDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUks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QUFZLEVBQUMsQ0FBQzt3QkFDZCxXQUFXLEVBQUMsQ0FBQzt3QkFDYixXQUFXLEVBQUMsQ0FBQztxQkFDaEIsQ0FDSixDQUFDOzsrQkFBQTtnQkE4R0Ysa0JBQUM7WUFBRCxDQTdHQSxBQTZHQyxDQTdHZ0MsNkJBQWEsR0E2RzdDO1lBN0dELHFDQTZHQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvQWlGb3JtSW5wdXQvQWlGb3JtSW5wdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCxFbGVtZW50UmVmLGZvcndhcmRSZWYsUHJvdmlkZXJ9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtOR19WQUxVRV9BQ0NFU1NPUn0gZnJvbSAnYW5ndWxhcjIvY29tbW9uJztcbmltcG9ydCB7T2JzZXJ2YWJsZVdyYXBwZXIsRXZlbnRFbWl0dGVyfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2FzeW5jJztcbmltcG9ydCB7QWlGb3JtQ29udHJvbH0gZnJvbSAnLi4vQWlGb3JtQ29udHJvbC9BaUZvcm1Db250cm9sJztcbmltcG9ydCB7QWlJbnB1dH0gZnJvbSAnLi4vQWlJbnB1dC9BaUlucHV0JztcblxuQENvbXBvbmVudChBaUZvcm1Db250cm9sLm1ldGEoe1xuICAgICAgICB0ZW1wbGF0ZVVybDoncGFja2FnZTpzcmMvY29tcG9uZW50cy9BaUZvcm1JbnB1dC9BaUZvcm1JbnB1dC5odG1sJyxcbiAgICAgICAgZGlyZWN0aXZlczogW0FpSW5wdXRdLFxuICAgICAgICBzZWxlY3RvcjogJ2FpLWZvcm0taW5wdXQnLFxuICAgICAgICBpbnB1dHM6IEFpRm9ybUlucHV0LmlucHV0cyxcbiAgICAgICAgaG9zdDogQWlGb3JtSW5wdXQuaG9zdCxcbiAgICAgICAgcHJvdmlkZXJzOiBbbmV3IFByb3ZpZGVyKE5HX1ZBTFVFX0FDQ0VTU09SLCB7dXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQWlGb3JtSW5wdXQpLCBtdWx0aTogdHJ1ZX0pXVxuICAgIH0se1xuICAgICAgICBpZ25vcmVBY3RpdmU6MSxcbiAgICAgICAgaWdub3JlRm9jdXM6MSxcbiAgICAgICAgaWdub3JlSG92ZXI6MVxuICAgIH1cbikpICAgIFxuZXhwb3J0IGNsYXNzIEFpRm9ybUlucHV0IGV4dGVuZHMgQWlGb3JtQ29udHJvbCB7IFxuXG4gICAgc3RhdGljIGlucHV0cz1bJ3R5cGUnLCdtYXhsZW5ndGgnLCdtaW5fbGVuZ3RoJywncmVhZG9ubHknLCdjb3VudGVyJywndmFsaWRhdGVkJ107XG4gICAgc3RhdGljIGhvc3Q9e1xuICAgICAgICAgICAgJ1tjbGFzcy5mb2N1c10nOiAnaXNGb2N1cycsXG4gICAgICAgICAgICAnW2NsYXNzLnJlYWRvbmx5XSc6ICdyZWFkb25seScsXG4gICAgICAgIH07XG4gICAgcHJpdmF0ZSBtYXRjaGVyOmFueTtcblxuICAgIHR5cGU6c3RyaW5nPSd0ZXh0JztcblxuICAgIG1heF9sZW5ndGg6bnVtYmVyPTI1NTtcblxuICAgIG1pbl9sZW5ndGg6bnVtYmVyPTA7XG5cbiAgICByZWFkb25seTpib29sZWFuPWZhbHNlO1xuXG4gICAgY291bnRlcjpib29sZWFuPWZhbHNlO1xuXG4gICAgdmFsaWRhdGVkOmJvb2xlYW49ZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3RvcihlbGU6IEVsZW1lbnRSZWYpIHsgXG4gICAgICAgIHN1cGVyKGVsZSk7XG4gICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FpLWZvcm0taW5wdXQnLCcnKTsgXG4gICAgICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgbmdPbkluaXQoKSB7XG4gICAgXG4gICAgICAgIHRoaXMuaW5oaWVyaXRBdHRyaWJ1dGVzVG9DaGlsZHMoMCk7XG4gICAgICAgIHZhciBjaGlsZD10aGlzLm5hdGl2ZUVsZW1lbnQuY2hpbGROb2Rlc1swXTtcbiAgICAgICAgaWYodGhpcy5uYXRpdmVFbGVtZW50LmdldEF0dHJpYnV0ZSgncm91bmQnKSAhPSBudWxsKVxuICAgICAgICAgICAgY2hpbGQuc2V0QXR0cmlidXRlKCdyb3VuZCcsJycpO1xuICAgICAgICBlbHNlIGlmKHRoaXMubmF0aXZlRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2VsbGlwc2UnKSAhPSBudWxsKVxuICAgICAgICAgICAgY2hpbGQuc2V0QXR0cmlidXRlKCdlbGxpcHNlJywnJyk7XG4gICAgICAgIGVsc2UgaWYodGhpcy5uYXRpdmVFbGVtZW50LmdldEF0dHJpYnV0ZSgnbm9uZScpICE9IG51bGwpXG4gICAgICAgICAgICBjaGlsZC5zZXRBdHRyaWJ1dGUoJ25vbmUnLCcnKTtcbiAgICAgICAgZWxzZSBpZih0aGlzLm5hdGl2ZUVsZW1lbnQuZ2V0QXR0cmlidXRlKCdyZWN0JykgIT0gbnVsbClcbiAgICAgICAgICAgIGNoaWxkLnNldEF0dHJpYnV0ZSgncmVjdCcsJycpO1xuICAgICAgICBlbHNlIFxuICAgICAgICAgICAgY2hpbGQuc2V0QXR0cmlidXRlKCdsaW5lJywnJyk7XG5cbiAgICAgICAgdmFyIG1hdGNoPXRoaXMubmF0aXZlRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ21hdGNoJyk7XG4gICAgICAgIGlmKG1hdGNoICE9IG51bGwpe1xuICAgICAgICAgICAgdGhpcy5tYXRjaGVyPW5ldyBSZWdFeHAobWF0Y2gpO1xuICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgdmFyIGZvcm1hdD10aGlzLm5hdGl2ZUVsZW1lbnQuZ2V0QXR0cmlidXRlKCdmb3JtYXQnKTtcbiAgICAgICAgaWYoZm9ybWF0ICE9IG51bGwpXG4gICAgICAgICAgICBjaGlsZC5zZXRBdHRyaWJ1dGUoJ2Zvcm1hdCcsZm9ybWF0KTtcblxuICAgICAgICB2YXIgbnVtYmVySW5wdXQ9dGhpcy5uYXRpdmVFbGVtZW50LmdldEF0dHJpYnV0ZSgnbnVtYmVyaW5wdXQnKTtcbiAgICAgICAgaWYobnVtYmVySW5wdXQgIT0gbnVsbCkgXG4gICAgICAgICAgICBjaGlsZC5zZXRBdHRyaWJ1dGUoJ251bWJlcmlucHV0JywnJyk7XG4gICAgfSBcbiAgICBcbiAgICBcbiAgICB1cGRhdGVWYWx1ZSh2YWx1ZTphbnkpIHtcbiAgICAgICAgaWYodGhpcy5jb3VudGVyICYmIHZhbHVlKVxuICAgICAgICAgICAgdGhpcy53b3JkPSB2YWx1ZS5sZW5ndGggKyBcIi9cIiArIHRoaXMubWF4X2xlbmd0aDtcbiAgICAgICAgc3VwZXIudXBkYXRlVmFsdWUodmFsdWUpO1xuICAgIH1cblxuICAgIHZhbGlkYXRlKHRleHQ6c3RyaW5nKTpib29sZWFue1xuICAgICAgICBcbiAgICAgICAgaWYoc3VwZXIudmFsaWRhdGUodGV4dCkpe1xuICAgICAgICAgICAgaWYodGhpcy5taW5fbGVuZ3RoID4gMCAmJiB0ZXh0Lmxlbmd0aCA8IHRoaXMubWluX2xlbmd0aCl7XG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvcj10aGlzLmxhYmVsKycgbWluaW11bSBsZW5ndGggaXMgJyt0aGlzLm1pbl9sZW5ndGg7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZih0aGlzLm1hdGNoZXIgJiYgIXRoaXMubWF0Y2hlci50ZXN0KHRleHQpKXtcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yPXRoaXMubGFiZWwrJyBpcyBub3QgdmFsaWQgZm9ybWF0ICc7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gICAgXG5cbiAgICBzZXRIYXNGb2N1cyhoYXNGb2N1czogYm9vbGVhbikge1xuICAgICAgICB0aGlzLmlzRm9jdXM9aGFzRm9jdXM7XG4gICAgICAgIGlmKCFoYXNGb2N1cyAmJiB0aGlzLnZhbHVlICE9IG51bGwpe1xuICAgICAgICAgICAgdGhpcy52YWxpZGF0ZSh0aGlzLnZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldE1heExlbmd0aCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5tYXhfbGVuZ3RoO1xuICAgIH0gICAgXG5cbiAgICBnZXRUeXBlKCl7XG4gICAgICAgIHJldHVybiB0aGlzLnR5cGU7XG4gICAgfSAgICBcblxuICAgIGlzUmVhZG9ubHkoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVhZG9ubHkgPyAndHJ1ZSc6bnVsbDtcbiAgICB9ICAgIFxuXG4gICAgZ2V0U3ltYm9sSWNvbigpe1xuICAgICAgICBcbiAgICAgICAgaWYodGhpcy5oYXNFcnJvcigpKVxuICAgICAgICAgICAgcmV0dXJuIFwiZXJyb3JcIjtcbiAgICAgICAgZWxzZSBpZiAodGhpcy52YWxpZGF0ZWQpXG4gICAgICAgICAgICByZXR1cm4gXCJkb25lXCI7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG5cbn0gXG4gIFxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
