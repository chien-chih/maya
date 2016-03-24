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
                    this.formatter = null;
                    this._value = '';
                    this.type = 'text';
                    this.maxlength = 255;
                    this.readonly = false;
                    this.cancel_button = false;
                    this.symbol_icon = '';
                    this.left_icon = '';
                    this.right_icon = '';
                    this._click_right = new async_1.EventEmitter();
                    this._click_left = new async_1.EventEmitter();
                    this._focus_change = new async_1.EventEmitter();
                    this._value_change = new async_1.EventEmitter();
                    this.onChange = function (_) { };
                    this.onTouched = function () { };
                    this.nativeElement.setAttribute('ai-input', '');
                    var numberInput = this.nativeElement.getAttribute('numberinput');
                    if (numberInput != null)
                        this.setNumberInput();
                    var format = this.nativeElement.getAttribute('format');
                    if (format) {
                        var nativeInput = this.nativeElement.childNodes[0];
                        this.formatter = new AiFormatter_1.AiFormatter(nativeInput, format);
                        if (this.formatter.numberInput != null)
                            this.setNumberInput();
                        var that = this;
                        this.formatter.onValueChange = function (value) {
                            that._value = value.trim();
                            that.updateValue(null);
                        };
                    }
                }
                AiInput.prototype.registerOnChange = function (fn) { this.onChange = fn; };
                AiInput.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
                AiInput.prototype.writeValue = function (value) {
                    var that = this;
                    setTimeout(function () {
                        that.value = value ? value : '';
                    }, 1);
                };
                Object.defineProperty(AiInput.prototype, "value", {
                    get: function () {
                        return this._value;
                    },
                    set: function (v) {
                        if (this.hasFormat()) {
                            this.formatter.setValue(v);
                        }
                        else
                            this._value = v;
                    },
                    enumerable: true,
                    configurable: true
                });
                AiInput.prototype.setNumberInput = function () {
                    this.nativeElement.childNodes[0].setAttribute('pattern', '\\d*');
                };
                AiInput.prototype.hasFormat = function () {
                    return this.formatter != null;
                };
                AiInput.prototype.updateInput = function () {
                    if (this.hasFormat())
                        return '';
                    return this.value;
                };
                AiInput.prototype.updateValue = function (event) {
                    if (this.hasFormat() && event)
                        return;
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
                    return this.value.length > 0;
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
                AiInput.inputs = ['value', 'type', 'maxlength', 'readonly', 'cancel_button', 'symbol_icon', 'right_icon'];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlJbnB1dC9BaUlucHV0LnRzIl0sIm5hbWVzIjpbIkFpSW5wdXQiLCJBaUlucHV0LmNvbnN0cnVjdG9yIiwiQWlJbnB1dC5yZWdpc3Rlck9uQ2hhbmdlIiwiQWlJbnB1dC5yZWdpc3Rlck9uVG91Y2hlZCIsIkFpSW5wdXQud3JpdGVWYWx1ZSIsIkFpSW5wdXQudmFsdWUiLCJBaUlucHV0LnNldE51bWJlcklucHV0IiwiQWlJbnB1dC5oYXNGb3JtYXQiLCJBaUlucHV0LnVwZGF0ZUlucHV0IiwiQWlJbnB1dC51cGRhdGVWYWx1ZSIsIkFpSW5wdXQuaGFzVmFsdWUiLCJBaUlucHV0LnNldEhhc0ZvY3VzIiwiQWlJbnB1dC5nZXRJbnB1dFRhYkluZGV4IiwiQWlJbnB1dC5nZXRNYXhMZW5ndGgiLCJBaUlucHV0LmdldFR5cGUiLCJBaUlucHV0LmlzUmVhZG9ubHkiLCJBaUlucHV0Lmhhc0xlZnRJY29uIiwiQWlJbnB1dC5oYXNSaWdodEljb24iLCJBaUlucHV0Lmhhc1N5bWJvbEljb24iLCJBaUlucHV0Lm9uTGVmdENsaWNrIiwiQWlJbnB1dC5vblJpZ2h0Q2xpY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBT0E7Z0JBYTZCQSwyQkFBU0E7Z0JBdUNsQ0EsaUJBQVlBLEdBQWVBO29CQUN2QkMsa0JBQU1BLEdBQUdBLENBQUNBLENBQUNBO29CQTNCUEEsY0FBU0EsR0FBYUEsSUFBSUEsQ0FBQ0E7b0JBRW5DQSxXQUFNQSxHQUFTQSxFQUFFQSxDQUFDQTtvQkFFbEJBLFNBQUlBLEdBQVFBLE1BQU1BLENBQUNBO29CQUVuQkEsY0FBU0EsR0FBUUEsR0FBR0EsQ0FBQ0E7b0JBRXJCQSxhQUFRQSxHQUFTQSxLQUFLQSxDQUFDQTtvQkFFdkJBLGtCQUFhQSxHQUFTQSxLQUFLQSxDQUFDQTtvQkFFNUJBLGdCQUFXQSxHQUFRQSxFQUFFQSxDQUFDQTtvQkFFdEJBLGNBQVNBLEdBQVFBLEVBQUVB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Q2JBLFdBQVdBLEVBQUNBLENBQUNBO3FCQUNoQkEsQ0FBQ0EsQ0FBQ0E7OzRCQW1LTkE7Z0JBQURBLGNBQUNBO1lBQURBLENBL0tBLEFBK0tDQSxFQWxLNEIscUJBQVMsRUFrS3JDO1lBL0tELDZCQStLQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvQWlJbnB1dC9BaUlucHV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsRWxlbWVudFJlZixmb3J3YXJkUmVmLFByb3ZpZGVyLEhvc3RCaW5kaW5nfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Q29udHJvbFZhbHVlQWNjZXNzb3IsTkdfVkFMVUVfQUNDRVNTT1J9IGZyb20gJ2FuZ3VsYXIyL2NvbW1vbic7XG5pbXBvcnQge09ic2VydmFibGVXcmFwcGVyLEV2ZW50RW1pdHRlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9hc3luYyc7XG5pbXBvcnQge0FpQ29udHJvbH0gZnJvbSAnLi4vQWlDb250cm9sL0FpQ29udHJvbCc7XG5pbXBvcnQge0FpSWNvbn0gZnJvbSAnLi4vQWlJY29uL0FpSWNvbic7XG5pbXBvcnQge0FpRm9ybWF0dGVyfSBmcm9tICcuL0FpRm9ybWF0dGVyJztcblxuQENvbXBvbmVudChBaUNvbnRyb2wubWV0YSh7XG4gICAgdGVtcGxhdGVVcmw6J3BhY2thZ2U6c3JjL2NvbXBvbmVudHMvQWlJbnB1dC9BaUlucHV0Lmh0bWwnLFxuICAgIGRpcmVjdGl2ZXM6IFtBaUljb25dLFxuICAgIHNlbGVjdG9yOiAnYWktaW5wdXQnLFxuICAgIGlucHV0czogQWlJbnB1dC5pbnB1dHMsXG4gICAgb3V0cHV0czogQWlJbnB1dC5vdXRwdXRzLFxuICAgIGhvc3Q6IEFpSW5wdXQuaG9zdCxcbiAgICBwcm92aWRlcnM6IFtuZXcgUHJvdmlkZXIoTkdfVkFMVUVfQUNDRVNTT1IsIHt1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBBaUlucHV0KSwgbXVsdGk6IHRydWV9KV1cbiAgICB9LHtcbiAgICAgICAgaWdub3JlQWN0aXZlOjEsXG4gICAgICAgIGlnbm9yZUZvY3VzOjEsXG4gICAgICAgIGlnbm9yZUhvdmVyOjFcbiAgICB9KSkgICBcbmV4cG9ydCBjbGFzcyBBaUlucHV0IGV4dGVuZHMgQWlDb250cm9sIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3J7IFxuXG4gICAgc3RhdGljIGlucHV0cz1bJ3ZhbHVlJywndHlwZScsJ21heGxlbmd0aCcsJ3JlYWRvbmx5JywnY2FuY2VsX2J1dHRvbicsJ3N5bWJvbF9pY29uJywncmlnaHRfaWNvbiddO1xuICAgIHN0YXRpYyBvdXRwdXRzPVsnX2NsaWNrX3JpZ2h0JywnX2NsaWNrX2xlZnQnLCdfZm9jdXNfY2hhbmdlJywnX3ZhbHVlX2NoYW5nZSddO1xuICAgIHN0YXRpYyBob3N0PXtcbiAgICAgICAgICAgICdbY2xhc3MuZm9ybWF0dGVkXSc6ICdoYXNGb3JtYXQoKScsXG4gICAgICAgICAgICAnW2NsYXNzLmZvY3VzXSc6ICdpc0ZvY3VzJyxcbiAgICAgICAgICAgICdbY2xhc3MudmFsdWVkXSc6ICdoYXNWYWx1ZSgpJyxcbiAgICAgICAgICAgICdbY2xhc3MucmVhZG9ubHldJzogJ3JlYWRvbmx5JyxcbiAgICAgICAgICAgICdbY2xhc3MuYWktaW5wdXQtbGVmdF0nOiAnaGFzTGVmdEljb24oKScsXG4gICAgICAgICAgICAnW2NsYXNzLmFpLWlucHV0LXJpZ2h0XSc6ICdoYXNSaWdodEljb24oKSdcbiAgICAgICAgfTtcblxuICAgIHByaXZhdGUgZm9ybWF0dGVyOkFpRm9ybWF0dGVyPW51bGw7XG5cbiAgICBfdmFsdWU6IHN0cmluZz0nJzsgXG4gICAgXG4gICAgdHlwZTpzdHJpbmc9J3RleHQnO1xuXG4gICAgbWF4bGVuZ3RoOm51bWJlcj0yNTU7XG5cbiAgICByZWFkb25seTpib29sZWFuPWZhbHNlO1xuXG4gICAgY2FuY2VsX2J1dHRvbjpib29sZWFuPWZhbHNlO1xuXG4gICAgc3ltYm9sX2ljb246c3RyaW5nPScnO1xuXG4gICAgbGVmdF9pY29uOnN0cmluZz0nJztcblxuICAgIHJpZ2h0X2ljb246c3RyaW5nPScnO1xuXG4gICAgX2NsaWNrX3JpZ2h0OiBFdmVudEVtaXR0ZXI8YW55Pj1uZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBfY2xpY2tfbGVmdDogRXZlbnRFbWl0dGVyPGFueT49bmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgX2ZvY3VzX2NoYW5nZTogRXZlbnRFbWl0dGVyPGFueT49bmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgX3ZhbHVlX2NoYW5nZTogRXZlbnRFbWl0dGVyPGFueT49bmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgY29uc3RydWN0b3IoZWxlOiBFbGVtZW50UmVmKSB7ICBcbiAgICAgICAgc3VwZXIoZWxlKTsgXG4gICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FpLWlucHV0JywnJyk7IFxuICAgICAgICBcbiAgICAgICAgdmFyIG51bWJlcklucHV0PXRoaXMubmF0aXZlRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ251bWJlcmlucHV0Jyk7XG4gICAgICAgIGlmKG51bWJlcklucHV0ICE9IG51bGwpIHRoaXMuc2V0TnVtYmVySW5wdXQoKTtcbiAgICAgICAgdmFyIGZvcm1hdD10aGlzLm5hdGl2ZUVsZW1lbnQuZ2V0QXR0cmlidXRlKCdmb3JtYXQnKTtcbiAgICAgICAgaWYoZm9ybWF0KXtcbiAgICAgICAgICAgIHZhciBuYXRpdmVJbnB1dD10aGlzLm5hdGl2ZUVsZW1lbnQuY2hpbGROb2Rlc1swXTtcbiAgICAgICAgICAgIHRoaXMuZm9ybWF0dGVyPW5ldyBBaUZvcm1hdHRlcihuYXRpdmVJbnB1dCxmb3JtYXQpO1xuICAgICAgICAgICAgaWYodGhpcy5mb3JtYXR0ZXIubnVtYmVySW5wdXQgIT0gbnVsbCkgdGhpcy5zZXROdW1iZXJJbnB1dCgpO1xuICAgICAgICAgICAgdmFyIHRoYXQ9dGhpcztcbiAgICAgICAgICAgIHRoaXMuZm9ybWF0dGVyLm9uVmFsdWVDaGFuZ2U9ZnVuY3Rpb24odmFsdWUpe1xuICAgICAgICAgICAgICAgIHRoYXQuX3ZhbHVlPXZhbHVlLnRyaW0oKTtcbiAgICAgICAgICAgICAgICB0aGF0LnVwZGF0ZVZhbHVlKG51bGwpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgb25DaGFuZ2UgPSAoXykgPT4ge307XG4gICAgb25Ub3VjaGVkID0gKCkgPT4ge307XG4gICAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKF86IGFueSkgPT4gdm9pZCk6IHZvaWQgeyB0aGlzLm9uQ2hhbmdlID0gZm47IH1cbiAgICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQgeyB0aGlzLm9uVG91Y2hlZCA9IGZuOyB9XG5cbiAgICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdmFyIHRoYXQ9dGhpcztcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpeyBcbiAgICAgICAgICAgIHRoYXQudmFsdWU9dmFsdWU/dmFsdWU6Jyc7XG4gICAgICAgIH0sIDEpO1xuICAgIH1cblxuICAgIGdldCB2YWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICAgIH1cbiAgICBcbiAgICBzZXQgdmFsdWUodikge1xuICAgICAgICBpZih0aGlzLmhhc0Zvcm1hdCgpKXtcbiAgICAgICAgICAgIHRoaXMuZm9ybWF0dGVyLnNldFZhbHVlKHYpO1xuICAgICAgICB9ZWxzZVxuICAgICAgICAgICAgdGhpcy5fdmFsdWU9djtcbiAgICB9XG5cbiAgICBzZXROdW1iZXJJbnB1dCgpe1xuICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY2hpbGROb2Rlc1swXS5zZXRBdHRyaWJ1dGUoJ3BhdHRlcm4nLCdcXFxcZConKTtcbiAgICB9XG4gICAgXG4gICAgaGFzRm9ybWF0KCl7XG4gICAgICAgIHJldHVybiB0aGlzLmZvcm1hdHRlciAhPSBudWxsO1xuICAgIH1cbiAgICBcbiAgICB1cGRhdGVJbnB1dCgpe1xuICAgICAgICBpZih0aGlzLmhhc0Zvcm1hdCgpKSByZXR1cm4gJyc7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICAgIH1cblxuICAgIHVwZGF0ZVZhbHVlKGV2ZW50KSB7XG4gICAgICAgIGlmKHRoaXMuaGFzRm9ybWF0KCkgJiYgZXZlbnQpIHJldHVybjtcbiAgICAgICAgaWYoZXZlbnQpIHRoaXMudmFsdWUgPSBldmVudC50YXJnZXQudmFsdWUudHJpbSgpO1xuICAgICAgICBpZih0aGlzLmNhbmNlbF9idXR0b24pe1xuICAgICAgICAgICAgaWYodGhpcy52YWx1ZS5sZW5ndGggPiAwKVxuICAgICAgICAgICAgICAgIHRoaXMucmlnaHRfaWNvbj0nY2FuY2VsJzsgICAgICAgICAgICBcbiAgICAgICAgICAgIGVsc2UgICAgXG4gICAgICAgICAgICAgICAgdGhpcy5yaWdodF9pY29uPScnOyAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIHRoaXMub25DaGFuZ2UodGhpcy52YWx1ZSk7XG4gICAgICAgIE9ic2VydmFibGVXcmFwcGVyLmNhbGxFbWl0KHRoaXMuX3ZhbHVlX2NoYW5nZSwgdGhpcy52YWx1ZSk7XG4gICAgfVxuXG4gICAgaGFzVmFsdWUoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUubGVuZ3RoID4gMDtcbiAgICB9IFxuICAgIFxuICAgIHNldEhhc0ZvY3VzKGhhc0ZvY3VzOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuaXNGb2N1cz1oYXNGb2N1cztcbiAgICAgICAgT2JzZXJ2YWJsZVdyYXBwZXIuY2FsbEVtaXQodGhpcy5fZm9jdXNfY2hhbmdlLGhhc0ZvY3VzKTtcbiAgICB9XG5cbiAgICBnZXRJbnB1dFRhYkluZGV4KCl7XG4gICAgICAgIGlmKHRoaXMucmVhZG9ubHkpIHJldHVybiAtMTtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFiaW5kZXg7XG4gICAgfVxuXG4gICAgZ2V0TWF4TGVuZ3RoKCl7XG4gICAgICAgIHJldHVybiB0aGlzLm1heGxlbmd0aDtcbiAgICB9ICAgIFxuXG4gICAgZ2V0VHlwZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy50eXBlO1xuICAgIH0gICAgXG5cbiAgICBpc1JlYWRvbmx5KCl7XG4gICAgICAgIHJldHVybiB0aGlzLnJlYWRvbmx5ID8gJ3RydWUnOm51bGw7XG4gICAgfSAgICBcbiAgICBcbiAgICBoYXNMZWZ0SWNvbigpe1xuICAgICAgICByZXR1cm4gdGhpcy5sZWZ0X2ljb24ubGVuZ3RoID4gMDtcbiAgICB9XG5cbiAgICBoYXNSaWdodEljb24oKXtcbiAgICAgICAgcmV0dXJuIHRoaXMucmlnaHRfaWNvbi5sZW5ndGggPiAwO1xuICAgIH1cblxuICAgIGhhc1N5bWJvbEljb24oKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3ltYm9sX2ljb24ubGVuZ3RoID4gMDtcbiAgICB9XG4gXG4gICAgb25MZWZ0Q2xpY2soKXtcbiAgICAgICAgT2JzZXJ2YWJsZVdyYXBwZXIuY2FsbEVtaXQodGhpcy5fY2xpY2tfbGVmdCwgbnVsbCk7XG4gICAgfVxuIFxuICAgIG9uUmlnaHRDbGljaygpe1xuICAgICAgICBpZih0aGlzLmNhbmNlbF9idXR0b24pe1xuICAgICAgICAgICAgdGhpcy52YWx1ZT0nJztcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWUobnVsbCk7XG4gICAgICAgICAgICB0cnl7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNoaWxkTm9kZXNbMF0uZm9jdXMoKTtcbiAgICAgICAgICAgIH1jYXRjaChlKXt9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgT2JzZXJ2YWJsZVdyYXBwZXIuY2FsbEVtaXQodGhpcy5fY2xpY2tfcmlnaHQsIG51bGwpO1xuICAgIH1cbiBcbn0gXG4gIFxuICAgXG4gXG4gICJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
