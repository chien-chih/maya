System.register(['angular2/core', 'angular2/common', 'angular2/src/facade/async', '../AiControl/AiControl', '../AiIcon/AiIcon', './AiFormatter'], function(exports_1) {
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
    var core_1, common_1, async_1, AiControl_1, AiIcon_1, AiFormatter_1;
    var AiInput;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (async_1_1) {
                async_1 = async_1_1;
            },
            function (AiControl_1_1) {
                AiControl_1 = AiControl_1_1;
            },
            function (AiIcon_1_1) {
                AiIcon_1 = AiIcon_1_1;
            },
            function (AiFormatter_1_1) {
                AiFormatter_1 = AiFormatter_1_1;
            }],
        execute: function() {
            AiInput = (function (_super) {
                __extends(AiInput, _super);
                function AiInput(ele) {
                    _super.call(this, ele);
                    this.value = '';
                    this.type = 'text';
                    this.maxlength = 255;
                    this.readonly = false;
                    this.cancel_button = false;
                    this.symbol_icon = '';
                    this.format = '';
                    this.left_icon = '';
                    this.right_icon = '';
                    this._click_right = new async_1.EventEmitter();
                    this._click_left = new async_1.EventEmitter();
                    this._focus_change = new async_1.EventEmitter();
                    this._value_change = new async_1.EventEmitter();
                    this.onChange = function (_) { };
                    this.onTouched = function () { };
                    this.nativeElement.setAttribute('ai-input', '');
                }
                AiInput.prototype.registerOnChange = function (fn) { this.onChange = fn; };
                AiInput.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
                AiInput.prototype.writeValue = function (value) {
                    this.value = value ? value : '';
                };
                AiInput.prototype.hasFormat = function () {
                    return this.format.length > 0;
                };
                AiInput.prototype.ngOnInit = function () {
                    if (this.hasFormat()) {
                        var nativeInput = this.nativeElement.childNodes[0];
                        var formatter = new AiFormatter_1.AiFormatter(nativeInput, this.format, this.value);
                        this.value = formatter.value;
                    }
                    this.updateValue(null);
                };
                AiInput.prototype.updateValue = function (event) {
                    if (event)
                        this.value = event.target.value.trim();
                    if (this.cancel_button) {
                        if (this.value.length > 0)
                            this.right_icon = 'cancel';
                        else
                            this.right_icon = '';
                    }
                    this.onChange(this.value);
                    async_1.ObservableWrapper.callEmit(this._value_change, this.value);
                };
                AiInput.prototype.hasValue = function () {
                    return this.value && this.value.length > 0;
                };
                AiInput.prototype.setHasFocus = function (hasFocus) {
                    this.isFocus = hasFocus;
                    async_1.ObservableWrapper.callEmit(this._focus_change, hasFocus);
                };
                AiInput.prototype.getInputTabIndex = function () {
                    if (this.readonly)
                        return -1;
                    return this.tabindex;
                };
                AiInput.prototype.getMaxLength = function () {
                    return this.maxlength;
                };
                AiInput.prototype.getType = function () {
                    return this.type;
                };
                AiInput.prototype.isReadonly = function () {
                    return this.readonly ? 'true' : null;
                };
                AiInput.prototype.hasLeftIcon = function () {
                    return this.left_icon.length > 0;
                };
                AiInput.prototype.hasRightIcon = function () {
                    return this.right_icon.length > 0;
                };
                AiInput.prototype.hasSymbolIcon = function () {
                    return this.symbol_icon.length > 0;
                };
                AiInput.prototype.onLeftClick = function () {
                    async_1.ObservableWrapper.callEmit(this._click_left, null);
                };
                AiInput.prototype.onRightClick = function () {
                    if (this.cancel_button) {
                        this.value = '';
                        this.updateValue(null);
                        try {
                            this.nativeElement.childNodes[0].focus();
                        }
                        catch (e) { }
                    }
                    else
                        async_1.ObservableWrapper.callEmit(this._click_right, null);
                };
                AiInput.inputs = ['value', 'type', 'maxlength', 'readonly', 'cancel_button', 'symbol_icon', 'right_icon', 'format'];
                AiInput.outputs = ['_click_right', '_click_left', '_focus_change', '_value_change'];
                AiInput.host = {
                    '[class.formatted]': 'hasFormat()',
                    '[class.focus]': 'isFocus',
                    '[class.valued]': 'hasValue()',
                    '[class.readonly]': 'readonly',
                    '[class.ai-input-left]': 'hasLeftIcon()',
                    '[class.ai-input-right]': 'hasRightIcon()'
                };
                AiInput = __decorate([
                    core_1.Component(AiControl_1.AiControl.meta({
                        templateUrl: 'package:src/components/AiInput/AiInput.html',
                        directives: [AiIcon_1.AiIcon],
                        selector: 'ai-input',
                        inputs: AiInput.inputs,
                        outputs: AiInput.outputs,
                        host: AiInput.host,
                        providers: [new core_1.Provider(common_1.NG_VALUE_ACCESSOR, { useExisting: core_1.forwardRef(function () { return AiInput; }), multi: true })]
                    }, {
                        ignoreActive: 1,
                        ignoreFocus: 1,
                        ignoreHover: 1
                    })), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], AiInput);
                return AiInput;
            })(AiControl_1.AiControl);
            exports_1("AiInput", AiInput);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlJbnB1dC9BaUlucHV0LnRzIl0sIm5hbWVzIjpbIkFpSW5wdXQiLCJBaUlucHV0LmNvbnN0cnVjdG9yIiwiQWlJbnB1dC5yZWdpc3Rlck9uQ2hhbmdlIiwiQWlJbnB1dC5yZWdpc3Rlck9uVG91Y2hlZCIsIkFpSW5wdXQud3JpdGVWYWx1ZSIsIkFpSW5wdXQuaGFzRm9ybWF0IiwiQWlJbnB1dC5uZ09uSW5pdCIsIkFpSW5wdXQudXBkYXRlVmFsdWUiLCJBaUlucHV0Lmhhc1ZhbHVlIiwiQWlJbnB1dC5zZXRIYXNGb2N1cyIsIkFpSW5wdXQuZ2V0SW5wdXRUYWJJbmRleCIsIkFpSW5wdXQuZ2V0TWF4TGVuZ3RoIiwiQWlJbnB1dC5nZXRUeXBlIiwiQWlJbnB1dC5pc1JlYWRvbmx5IiwiQWlJbnB1dC5oYXNMZWZ0SWNvbiIsIkFpSW5wdXQuaGFzUmlnaHRJY29uIiwiQWlJbnB1dC5oYXNTeW1ib2xJY29uIiwiQWlJbnB1dC5vbkxlZnRDbGljayIsIkFpSW5wdXQub25SaWdodENsaWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU9BO2dCQWE2QkEsMkJBQVNBO2dCQXVDbENBLGlCQUFZQSxHQUFlQTtvQkFDdkJDLGtCQUFNQSxHQUFHQSxDQUFDQSxDQUFDQTtvQkEzQmZBLFVBQUtBLEdBQVNBLEVBQUVBLENBQUNBO29CQUVqQkEsU0FBSUEsR0FBUUEsTUFBTUEsQ0FBQ0E7b0JBRW5CQSxjQUFTQSxHQUFRQSxHQUFHQSxDQUFDQTtvQkFFckJBLGFBQVFBLEdBQVNBLEtBQUtBLENBQUNBO29CQUV2QkEsa0JBQWFBLEdBQVNBLEtBQUtBLENBQUNBO29CQUU1QkEsZ0JBQVdBLEdBQVFBLEVBQUVBLENBQUNBO29CQUV0QkEsV0FBTUEsR0FBUUEsRUFBRUEsQ0FBQ0E7b0JBRWpCQSxjQUFTQSxHQUFRQSxFQUFFQSxDQUFDQTtvQkFFcEJBLGVBQVVBLEdBQVFBLEVBQUVBLENBQUNBO29CQUVy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RUEsU0FBU0E7b0JBQzFCQSxnQkFBZ0JBLEVBQUVBLFlBQVlBO29CQUM5QkEsa0JBQWtCQSxFQUFFQSxVQUFVQTtvQkFDOUJBLHVCQUF1QkEsRUFBRUEsZUFBZUE7b0JBQ3hDQSx3QkFBd0JBLEVBQUVBLGdCQUFnQkE7aUJBQzdDQSxDQUFDQTtnQkF4QlZBO29CQUFDQSxnQkFBU0EsQ0FBQ0EscUJBQVNBLENBQUNBLElBQUlBLENBQUNBO3dCQUN0QkEsV0FBV0EsRUFBQ0EsNkNBQTZDQTt3QkFDekRBLFVBQVVBLEVBQUVBLENBQUNBLGVBQU1BLENBQUNBO3dCQUNwQkEsUUFBUUEsRUFBRUEsVUFBVUE7d0JBQ3BCQSxNQUFNQSxFQUFFQSxPQUFPQSxDQUFDQSxNQUFNQTt3QkFDdEJBLE9BQU9BLEVBQUVBLE9BQU9BLENBQUNBLE9BQU9BO3dCQUN4QkEsSUFBSUEsRUFBRUEsT0FBT0EsQ0FBQ0EsSUFBSUE7d0JBQ2xCQSxTQUFTQSxFQUFFQSxDQUFDQSxJQUFJQSxlQUFRQSxDQUFDQSwwQkFBaUJBLEVBQUVBLEVBQUNBLFdBQVdBLEVBQUVBLGlCQUFVQSxDQUFDQSxjQUFNQSxPQUFBQSxPQUFPQSxFQUFQQSxDQUFPQSxDQUFDQSxFQUFFQSxLQUFLQSxFQUFFQSxJQUFJQSxFQUFDQSxDQUFDQSxDQUFDQTtxQkFDbEdBLEVBQUNBO3dCQUNFQSxZQUFZQSxFQUFDQSxDQUFDQTt3QkFDZEEsV0FBV0EsRUFBQ0EsQ0FBQ0E7d0JBQ2JBLFdBQVdBLEVBQUNBLENBQUNBO3FCQUNoQkEsQ0FBQ0EsQ0FBQ0E7OzRCQXNJTkE7Z0JBQURBLGNBQUNBO1lBQURBLENBbEpBLEFBa0pDQSxFQXJJNEIscUJBQVMsRUFxSXJDO1lBbEpELDZCQWtKQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvQWlJbnB1dC9BaUlucHV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsRWxlbWVudFJlZixmb3J3YXJkUmVmLFByb3ZpZGVyLEhvc3RCaW5kaW5nfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Q29udHJvbFZhbHVlQWNjZXNzb3IsTkdfVkFMVUVfQUNDRVNTT1J9IGZyb20gJ2FuZ3VsYXIyL2NvbW1vbic7XG5pbXBvcnQge09ic2VydmFibGVXcmFwcGVyLEV2ZW50RW1pdHRlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9hc3luYyc7XG5pbXBvcnQge0FpQ29udHJvbH0gZnJvbSAnLi4vQWlDb250cm9sL0FpQ29udHJvbCc7XG5pbXBvcnQge0FpSWNvbn0gZnJvbSAnLi4vQWlJY29uL0FpSWNvbic7XG5pbXBvcnQge0FpRm9ybWF0dGVyfSBmcm9tICcuL0FpRm9ybWF0dGVyJztcblxuQENvbXBvbmVudChBaUNvbnRyb2wubWV0YSh7XG4gICAgdGVtcGxhdGVVcmw6J3BhY2thZ2U6c3JjL2NvbXBvbmVudHMvQWlJbnB1dC9BaUlucHV0Lmh0bWwnLFxuICAgIGRpcmVjdGl2ZXM6IFtBaUljb25dLFxuICAgIHNlbGVjdG9yOiAnYWktaW5wdXQnLFxuICAgIGlucHV0czogQWlJbnB1dC5pbnB1dHMsXG4gICAgb3V0cHV0czogQWlJbnB1dC5vdXRwdXRzLFxuICAgIGhvc3Q6IEFpSW5wdXQuaG9zdCxcbiAgICBwcm92aWRlcnM6IFtuZXcgUHJvdmlkZXIoTkdfVkFMVUVfQUNDRVNTT1IsIHt1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBBaUlucHV0KSwgbXVsdGk6IHRydWV9KV1cbiAgICB9LHtcbiAgICAgICAgaWdub3JlQWN0aXZlOjEsXG4gICAgICAgIGlnbm9yZUZvY3VzOjEsXG4gICAgICAgIGlnbm9yZUhvdmVyOjFcbiAgICB9KSkgICBcbmV4cG9ydCBjbGFzcyBBaUlucHV0IGV4dGVuZHMgQWlDb250cm9sIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3J7IFxuXG4gICAgc3RhdGljIGlucHV0cz1bJ3ZhbHVlJywndHlwZScsJ21heGxlbmd0aCcsJ3JlYWRvbmx5JywnY2FuY2VsX2J1dHRvbicsJ3N5bWJvbF9pY29uJywncmlnaHRfaWNvbicsJ2Zvcm1hdCddO1xuICAgIHN0YXRpYyBvdXRwdXRzPVsnX2NsaWNrX3JpZ2h0JywnX2NsaWNrX2xlZnQnLCdfZm9jdXNfY2hhbmdlJywnX3ZhbHVlX2NoYW5nZSddO1xuICAgIHN0YXRpYyBob3N0PXtcbiAgICAgICAgICAgICdbY2xhc3MuZm9ybWF0dGVkXSc6ICdoYXNGb3JtYXQoKScsXG4gICAgICAgICAgICAnW2NsYXNzLmZvY3VzXSc6ICdpc0ZvY3VzJyxcbiAgICAgICAgICAgICdbY2xhc3MudmFsdWVkXSc6ICdoYXNWYWx1ZSgpJyxcbiAgICAgICAgICAgICdbY2xhc3MucmVhZG9ubHldJzogJ3JlYWRvbmx5JyxcbiAgICAgICAgICAgICdbY2xhc3MuYWktaW5wdXQtbGVmdF0nOiAnaGFzTGVmdEljb24oKScsXG4gICAgICAgICAgICAnW2NsYXNzLmFpLWlucHV0LXJpZ2h0XSc6ICdoYXNSaWdodEljb24oKSdcbiAgICAgICAgfTtcblxuICAgIHZhbHVlOiBzdHJpbmc9Jyc7IFxuICAgIFxuICAgIHR5cGU6c3RyaW5nPSd0ZXh0JztcblxuICAgIG1heGxlbmd0aDpudW1iZXI9MjU1O1xuXG4gICAgcmVhZG9ubHk6Ym9vbGVhbj1mYWxzZTtcblxuICAgIGNhbmNlbF9idXR0b246Ym9vbGVhbj1mYWxzZTtcblxuICAgIHN5bWJvbF9pY29uOnN0cmluZz0nJztcblxuICAgIGZvcm1hdDpzdHJpbmc9Jyc7XG4gICAgXG4gICAgbGVmdF9pY29uOnN0cmluZz0nJztcblxuICAgIHJpZ2h0X2ljb246c3RyaW5nPScnO1xuXG4gICAgX2NsaWNrX3JpZ2h0OiBFdmVudEVtaXR0ZXI8YW55Pj1uZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBfY2xpY2tfbGVmdDogRXZlbnRFbWl0dGVyPGFueT49bmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgX2ZvY3VzX2NoYW5nZTogRXZlbnRFbWl0dGVyPGFueT49bmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgX3ZhbHVlX2NoYW5nZTogRXZlbnRFbWl0dGVyPGFueT49bmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgY29uc3RydWN0b3IoZWxlOiBFbGVtZW50UmVmKSB7ICBcbiAgICAgICAgc3VwZXIoZWxlKTsgXG4gICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FpLWlucHV0JywnJyk7IFxuICAgIH1cblxuICAgIG9uQ2hhbmdlID0gKF8pID0+IHt9O1xuICAgIG9uVG91Y2hlZCA9ICgpID0+IHt9O1xuICAgIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBhbnkpID0+IHZvaWQpOiB2b2lkIHsgdGhpcy5vbkNoYW5nZSA9IGZuOyB9XG4gICAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHsgdGhpcy5vblRvdWNoZWQgPSBmbjsgfVxuICAgIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLnZhbHVlPXZhbHVlP3ZhbHVlOicnO1xuICAgIH1cbiAgICBcbiAgICBoYXNGb3JtYXQoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0Lmxlbmd0aCA+IDA7XG4gICAgfVxuICBcbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgXG4gICAgICAgIGlmKHRoaXMuaGFzRm9ybWF0KCkpe1xuICAgICAgICAgICAgdmFyIG5hdGl2ZUlucHV0PXRoaXMubmF0aXZlRWxlbWVudC5jaGlsZE5vZGVzWzBdO1xuICAgICAgICAgICAgdmFyIGZvcm1hdHRlcj1uZXcgQWlGb3JtYXR0ZXIobmF0aXZlSW5wdXQsdGhpcy5mb3JtYXQsdGhpcy52YWx1ZSk7XG4gICAgICAgICAgICB0aGlzLnZhbHVlPWZvcm1hdHRlci52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKG51bGwpO1xuICAgIH1cblxuICAgIHVwZGF0ZVZhbHVlKGV2ZW50KSB7XG4gICAgICAgIGlmKGV2ZW50KSB0aGlzLnZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlLnRyaW0oKTtcbiAgICAgICAgICAgIFxuICAgICAgICBpZih0aGlzLmNhbmNlbF9idXR0b24pe1xuICAgICAgICAgICAgaWYodGhpcy52YWx1ZS5sZW5ndGggPiAwKVxuICAgICAgICAgICAgICAgIHRoaXMucmlnaHRfaWNvbj0nY2FuY2VsJzsgICAgICAgICAgICBcbiAgICAgICAgICAgIGVsc2UgICAgXG4gICAgICAgICAgICAgICAgdGhpcy5yaWdodF9pY29uPScnOyAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIHRoaXMub25DaGFuZ2UodGhpcy52YWx1ZSk7XG4gICAgICAgIE9ic2VydmFibGVXcmFwcGVyLmNhbGxFbWl0KHRoaXMuX3ZhbHVlX2NoYW5nZSwgdGhpcy52YWx1ZSk7XG4gICAgfVxuXG4gICAgaGFzVmFsdWUoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUgJiYgdGhpcy52YWx1ZS5sZW5ndGggPiAwO1xuICAgIH0gXG4gICAgXG4gICAgc2V0SGFzRm9jdXMoaGFzRm9jdXM6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5pc0ZvY3VzPWhhc0ZvY3VzO1xuICAgICAgICBPYnNlcnZhYmxlV3JhcHBlci5jYWxsRW1pdCh0aGlzLl9mb2N1c19jaGFuZ2UsaGFzRm9jdXMpO1xuICAgIH1cblxuICAgIGdldElucHV0VGFiSW5kZXgoKXtcbiAgICAgICAgaWYodGhpcy5yZWFkb25seSkgcmV0dXJuIC0xO1xuICAgICAgICByZXR1cm4gdGhpcy50YWJpbmRleDtcbiAgICB9XG5cbiAgICBnZXRNYXhMZW5ndGgoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMubWF4bGVuZ3RoO1xuICAgIH0gICAgXG5cbiAgICBnZXRUeXBlKCl7XG4gICAgICAgIHJldHVybiB0aGlzLnR5cGU7XG4gICAgfSAgICBcblxuICAgIGlzUmVhZG9ubHkoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVhZG9ubHkgPyAndHJ1ZSc6bnVsbDtcbiAgICB9ICAgIFxuICAgIFxuICAgIGhhc0xlZnRJY29uKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmxlZnRfaWNvbi5sZW5ndGggPiAwO1xuICAgIH1cblxuICAgIGhhc1JpZ2h0SWNvbigpe1xuICAgICAgICByZXR1cm4gdGhpcy5yaWdodF9pY29uLmxlbmd0aCA+IDA7XG4gICAgfVxuXG4gICAgaGFzU3ltYm9sSWNvbigpe1xuICAgICAgICByZXR1cm4gdGhpcy5zeW1ib2xfaWNvbi5sZW5ndGggPiAwO1xuICAgIH1cbiBcbiAgICBvbkxlZnRDbGljaygpe1xuICAgICAgICBPYnNlcnZhYmxlV3JhcHBlci5jYWxsRW1pdCh0aGlzLl9jbGlja19sZWZ0LCBudWxsKTtcbiAgICB9XG5cbiAgICBvblJpZ2h0Q2xpY2soKXtcbiAgICAgICAgaWYodGhpcy5jYW5jZWxfYnV0dG9uKXtcbiAgICAgICAgICAgIHRoaXMudmFsdWU9Jyc7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKG51bGwpO1xuICAgICAgICAgICAgdHJ5e1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jaGlsZE5vZGVzWzBdLmZvY3VzKCk7XG4gICAgICAgICAgICB9Y2F0Y2goZSl7fVxuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIE9ic2VydmFibGVXcmFwcGVyLmNhbGxFbWl0KHRoaXMuX2NsaWNrX3JpZ2h0LCBudWxsKTtcbiAgICB9XG4gXG59IFxuICBcbiAgIFxuIFxuICAiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
