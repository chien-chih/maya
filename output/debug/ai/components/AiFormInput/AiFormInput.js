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
            })(AiFormControl_1.AiFormControl);
            exports_1("AiFormInput", AiFormInput);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlGb3JtSW5wdXQvQWlGb3JtSW5wdXQudHMiXSwibmFtZXMiOlsiQWlGb3JtSW5wdXQiLCJBaUZvcm1JbnB1dC5jb25zdHJ1Y3RvciIsIkFpRm9ybUlucHV0LnVwZGF0ZVZhbHVlIiwiQWlGb3JtSW5wdXQudmFsaWRhdGUiLCJBaUZvcm1JbnB1dC5zZXRIYXNGb2N1cyIsIkFpRm9ybUlucHV0LmdldE1heExlbmd0aCIsIkFpRm9ybUlucHV0LmdldFR5cGUiLCJBaUZvcm1JbnB1dC5pc1JlYWRvbmx5IiwiQWlGb3JtSW5wdXQuZ2V0U3ltYm9sSWNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFNQTtnQkFhaUNBLCtCQUFhQTtnQkFxQjFDQSxxQkFBWUEsR0FBZUE7b0JBQ3ZCQyxrQkFBTUEsR0FBR0EsQ0FBQ0EsQ0FBQ0E7b0JBYmZBLFNBQUlBLEdBQVFBLE1BQU1BLENBQUNBO29CQUVuQkEsZUFBVUEsR0FBUUEsR0FBR0EsQ0FBQ0E7b0JBRXRCQSxlQUFVQSxHQUFRQSxDQUFDQSxDQUFDQTtvQkFFcEJBLGFBQVFBLEdBQVNBLEtBQUtBLENBQUNBO29CQUV2QkEsWUFBT0EsR0FBU0EsS0FBS0EsQ0FBQ0E7b0JBRXRCQSxjQUFTQSxHQUFTQSxLQUFLQSxDQUFDQTtvQkFJcEJBLElBQUlBLENBQUNBLGFBQWFBLENBQUNBLFlBQVlBLENBQUNBLGVBQWVBLEVBQUNBLEVBQUVBLENBQUNBLENBQUNBO29CQUNwREEsSUFBSUEsQ0FBQ0EsMEJBQTBCQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFDbkNBLElBQUlBLEtBQUtBLEdBQUNBLElBQUlBLENBQUNBLGFBQWFBLENBQUNBLFVBQVVBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO29CQUMzQ0EsRUFBRUEsQ0FBQUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsSUFBSUEsSUFBSUEsQ0FBQ0E7d0JBQ2hEQSxLQUFLQSxDQUFDQSxZQUFZQSxDQUFDQSxPQUFPQSxFQUFDQSxFQUFFQSxDQUFDQSxDQUFDQTtvQkFDbkNBLElBQUlBLENBQUNBLEVBQUVBLENBQUFBLENBQUNBLElBQUlBLENBQUNBLGFBQWFBLENBQUNBLFlBQVlBLENBQUNBLFNBQVNBLENBQUNBLElBQUlBLElBQUlBLENBQUNBO3dCQUN2REEsS0FBS0EsQ0FBQ0EsWUFBWUEsQ0FBQ0EsU0FBU0EsRUFBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0E7b0JBQ3JDQSxJQUFJQSxDQUFDQSxFQUFFQSxDQUFBQSxDQUFDQSxJQUFJQSxDQUFDQSxhQUFhQSxDQUFDQSxZQUFZQSxDQUFDQSxNQUFNQSxDQUFDQSxJQUFJQSxJQUFJQSxDQUFDQTt3QkFDcERBLEtBQUtBLENBQUNBLFlBQVlBLENBQUNBLE1BQU1BLEVBQUNBLEVBQUVBLENBQUNBLENBQUNBO29CQUNsQ0EsSUFBSUEsQ0FBQ0EsRUFBRUEsQ0FBQUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsSUFBSUEsQ0FBQ0E7d0JBQ3BEQSxLQUFLQSxDQUFDQSxZQUFZQSxDQUFDQSxNQUFNQSxFQUFDQSxFQUFFQSxDQUFDQSxDQUFDQTtvQkFDbENBLElBQUlBO3dCQUNBQSxLQUFLQSxDQUFDQSxZQUFZQSxDQUFDQSxNQUFNQSxFQUFDQSxFQUFFQSxDQUFDQSxDQUFDQTtvQkFFbENBLElBQUlBLEtBQUtBLEdBQUNBLElBQUlBLENBQUNBLGFBQWFBLENBQUNBLFlBQVlBLENBQUNBLE9BQU9BLENBQUNBLENBQUNBO29CQUNuREEsRUFBRUEsQ0FBQUEsQ0FBQ0EsS0FBS0EsSUFBSUEsSUFBSUEsQ0FBQ0EsQ0FBQUEsQ0FBQ0E7d0JBQ2RBLElBQUlBLENBQUNBLE9BQU9BLEdBQUNBLElBQUlBLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO29CQUNuQ0EsQ0FBQ0E7b0JBRURBLElBQUlBLE1BQU1BLEdBQUNBLElBQUlBLENBQUNBLGFBQWFB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QUNBO3FCQUNoQkEsQ0FDSkEsQ0FBQ0E7O2dDQXlHREE7Z0JBQURBLGtCQUFDQTtZQUFEQSxDQXJIQSxBQXFIQ0EsRUF4R2dDLDZCQUFhLEVBd0c3QztZQXJIRCxxQ0FxSEMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL0FpRm9ybUlucHV0L0FpRm9ybUlucHV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsRWxlbWVudFJlZixmb3J3YXJkUmVmLFByb3ZpZGVyfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7TkdfVkFMVUVfQUNDRVNTT1J9IGZyb20gJ2FuZ3VsYXIyL2NvbW1vbic7XG5pbXBvcnQge09ic2VydmFibGVXcmFwcGVyLEV2ZW50RW1pdHRlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9hc3luYyc7XG5pbXBvcnQge0FpRm9ybUNvbnRyb2x9IGZyb20gJy4uL0FpRm9ybUNvbnRyb2wvQWlGb3JtQ29udHJvbCc7XG5pbXBvcnQge0FpSW5wdXR9IGZyb20gJy4uL0FpSW5wdXQvQWlJbnB1dCc7XG5cbkBDb21wb25lbnQoQWlGb3JtQ29udHJvbC5tZXRhKHtcbiAgICAgICAgdGVtcGxhdGVVcmw6J3BhY2thZ2U6c3JjL2NvbXBvbmVudHMvQWlGb3JtSW5wdXQvQWlGb3JtSW5wdXQuaHRtbCcsXG4gICAgICAgIGRpcmVjdGl2ZXM6IFtBaUlucHV0XSxcbiAgICAgICAgc2VsZWN0b3I6ICdhaS1mb3JtLWlucHV0JyxcbiAgICAgICAgaW5wdXRzOiBBaUZvcm1JbnB1dC5pbnB1dHMsXG4gICAgICAgIGhvc3Q6IEFpRm9ybUlucHV0Lmhvc3QsXG4gICAgICAgIHByb3ZpZGVyczogW25ldyBQcm92aWRlcihOR19WQUxVRV9BQ0NFU1NPUiwge3VzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEFpRm9ybUlucHV0KSwgbXVsdGk6IHRydWV9KV1cbiAgICB9LHtcbiAgICAgICAgaWdub3JlQWN0aXZlOjEsXG4gICAgICAgIGlnbm9yZUZvY3VzOjEsXG4gICAgICAgIGlnbm9yZUhvdmVyOjFcbiAgICB9XG4pKSAgICBcbmV4cG9ydCBjbGFzcyBBaUZvcm1JbnB1dCBleHRlbmRzIEFpRm9ybUNvbnRyb2wgeyBcblxuICAgIHN0YXRpYyBpbnB1dHM9Wyd0eXBlJywnbWF4bGVuZ3RoJywnbWluX2xlbmd0aCcsJ3JlYWRvbmx5JywnY291bnRlcicsJ3ZhbGlkYXRlZCddO1xuICAgIHN0YXRpYyBob3N0PXtcbiAgICAgICAgICAgICdbY2xhc3MuZm9jdXNdJzogJ2lzRm9jdXMnLFxuICAgICAgICAgICAgJ1tjbGFzcy5yZWFkb25seV0nOiAncmVhZG9ubHknLFxuICAgICAgICB9O1xuICAgIHByaXZhdGUgbWF0Y2hlcjphbnk7XG5cbiAgICB0eXBlOnN0cmluZz0ndGV4dCc7XG5cbiAgICBtYXhfbGVuZ3RoOm51bWJlcj0yNTU7XG5cbiAgICBtaW5fbGVuZ3RoOm51bWJlcj0wO1xuXG4gICAgcmVhZG9ubHk6Ym9vbGVhbj1mYWxzZTtcblxuICAgIGNvdW50ZXI6Ym9vbGVhbj1mYWxzZTtcblxuICAgIHZhbGlkYXRlZDpib29sZWFuPWZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IoZWxlOiBFbGVtZW50UmVmKSB7IFxuICAgICAgICBzdXBlcihlbGUpO1xuICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdhaS1mb3JtLWlucHV0JywnJyk7IFxuICAgICAgICB0aGlzLmluaGllcml0QXR0cmlidXRlc1RvQ2hpbGRzKDApO1xuICAgICAgICB2YXIgY2hpbGQ9dGhpcy5uYXRpdmVFbGVtZW50LmNoaWxkTm9kZXNbMF07XG4gICAgICAgIGlmKHRoaXMubmF0aXZlRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3JvdW5kJykgIT0gbnVsbClcbiAgICAgICAgICAgIGNoaWxkLnNldEF0dHJpYnV0ZSgncm91bmQnLCcnKTtcbiAgICAgICAgZWxzZSBpZih0aGlzLm5hdGl2ZUVsZW1lbnQuZ2V0QXR0cmlidXRlKCdlbGxpcHNlJykgIT0gbnVsbClcbiAgICAgICAgICAgIGNoaWxkLnNldEF0dHJpYnV0ZSgnZWxsaXBzZScsJycpO1xuICAgICAgICBlbHNlIGlmKHRoaXMubmF0aXZlRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ25vbmUnKSAhPSBudWxsKVxuICAgICAgICAgICAgY2hpbGQuc2V0QXR0cmlidXRlKCdub25lJywnJyk7XG4gICAgICAgIGVsc2UgaWYodGhpcy5uYXRpdmVFbGVtZW50LmdldEF0dHJpYnV0ZSgncmVjdCcpICE9IG51bGwpXG4gICAgICAgICAgICBjaGlsZC5zZXRBdHRyaWJ1dGUoJ3JlY3QnLCcnKTtcbiAgICAgICAgZWxzZSBcbiAgICAgICAgICAgIGNoaWxkLnNldEF0dHJpYnV0ZSgnbGluZScsJycpO1xuXG4gICAgICAgIHZhciBtYXRjaD10aGlzLm5hdGl2ZUVsZW1lbnQuZ2V0QXR0cmlidXRlKCdtYXRjaCcpO1xuICAgICAgICBpZihtYXRjaCAhPSBudWxsKXtcbiAgICAgICAgICAgIHRoaXMubWF0Y2hlcj1uZXcgUmVnRXhwKG1hdGNoKTtcbiAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIHZhciBmb3JtYXQ9dGhpcy5uYXRpdmVFbGVtZW50LmdldEF0dHJpYnV0ZSgnZm9ybWF0Jyk7XG4gICAgICAgIGlmKGZvcm1hdCAhPSBudWxsKVxuICAgICAgICAgICAgY2hpbGQuc2V0QXR0cmlidXRlKCdmb3JtYXQnLGZvcm1hdCk7XG5cbiAgICAgICAgdmFyIG51bWJlcklucHV0PXRoaXMubmF0aXZlRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ251bWJlcmlucHV0Jyk7XG4gICAgICAgIGlmKG51bWJlcklucHV0ICE9IG51bGwpIFxuICAgICAgICAgICAgY2hpbGQuc2V0QXR0cmlidXRlKCdudW1iZXJpbnB1dCcsJycpO1xuICAgICAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIHVwZGF0ZVZhbHVlKHZhbHVlOmFueSkge1xuICAgICAgICBpZih0aGlzLmNvdW50ZXIgJiYgdmFsdWUpXG4gICAgICAgICAgICB0aGlzLndvcmQ9IHZhbHVlLmxlbmd0aCArIFwiL1wiICsgdGhpcy5tYXhfbGVuZ3RoO1xuICAgICAgICBzdXBlci51cGRhdGVWYWx1ZSh2YWx1ZSk7XG4gICAgfVxuXG4gICAgdmFsaWRhdGUodGV4dDpzdHJpbmcpOmJvb2xlYW57XG4gICAgICAgIFxuICAgICAgICBpZihzdXBlci52YWxpZGF0ZSh0ZXh0KSl7XG4gICAgICAgICAgICBpZih0aGlzLm1pbl9sZW5ndGggPiAwICYmIHRleHQubGVuZ3RoIDwgdGhpcy5taW5fbGVuZ3RoKXtcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yPXRoaXMubGFiZWwrJyBtaW5pbXVtIGxlbmd0aCBpcyAnK3RoaXMubWluX2xlbmd0aDtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKHRoaXMubWF0Y2hlciAmJiAhdGhpcy5tYXRjaGVyLnRlc3QodGV4dCkpe1xuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3I9dGhpcy5sYWJlbCsnIGlzIG5vdCB2YWxpZCBmb3JtYXQgJztcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSAgICBcblxuICAgIHNldEhhc0ZvY3VzKGhhc0ZvY3VzOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuaXNGb2N1cz1oYXNGb2N1cztcbiAgICAgICAgaWYoIWhhc0ZvY3VzICYmIHRoaXMudmFsdWUgIT0gbnVsbCl7XG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRlKHRoaXMudmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0TWF4TGVuZ3RoKCl7XG4gICAgICAgIHJldHVybiB0aGlzLm1heF9sZW5ndGg7XG4gICAgfSAgICBcblxuICAgIGdldFR5cGUoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgICB9ICAgIFxuXG4gICAgaXNSZWFkb25seSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5yZWFkb25seSA/ICd0cnVlJzpudWxsO1xuICAgIH0gICAgXG5cbiAgICBnZXRTeW1ib2xJY29uKCl7XG4gICAgICAgIFxuICAgICAgICBpZih0aGlzLmhhc0Vycm9yKCkpXG4gICAgICAgICAgICByZXR1cm4gXCJlcnJvclwiO1xuICAgICAgICBlbHNlIGlmICh0aGlzLnZhbGlkYXRlZClcbiAgICAgICAgICAgIHJldHVybiBcImRvbmVcIjtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG5cblxufSBcbiAgXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
