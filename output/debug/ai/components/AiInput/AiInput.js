System.register(['angular2/core', 'angular2/common', 'angular2/src/facade/async', '../AiControl/AiControl', '../AiIcon/AiIcon'], function(exports_1) {
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
    var core_1, common_1, async_1, AiControl_1, AiIcon_1;
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
                    this.pattern = '';
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
                AiInput.prototype.ngOnInit = function () {
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
                AiInput.inputs = ['value', 'type', 'maxlength', 'readonly', 'cancel_button', 'symbol_icon', 'right_icon', 'pattern'];
                AiInput.outputs = ['_click_right', '_click_left', '_focus_change', '_value_change'];
                AiInput.host = {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlJbnB1dC9BaUlucHV0LnRzIl0sIm5hbWVzIjpbIkFpSW5wdXQiLCJBaUlucHV0LmNvbnN0cnVjdG9yIiwiQWlJbnB1dC5yZWdpc3Rlck9uQ2hhbmdlIiwiQWlJbnB1dC5yZWdpc3Rlck9uVG91Y2hlZCIsIkFpSW5wdXQud3JpdGVWYWx1ZSIsIkFpSW5wdXQubmdPbkluaXQiLCJBaUlucHV0LnVwZGF0ZVZhbHVlIiwiQWlJbnB1dC5oYXNWYWx1ZSIsIkFpSW5wdXQuc2V0SGFzRm9jdXMiLCJBaUlucHV0LmdldElucHV0VGFiSW5kZXgiLCJBaUlucHV0LmdldE1heExlbmd0aCIsIkFpSW5wdXQuZ2V0VHlwZSIsIkFpSW5wdXQuaXNSZWFkb25seSIsIkFpSW5wdXQuaGFzTGVmdEljb24iLCJBaUlucHV0Lmhhc1JpZ2h0SWNvbiIsIkFpSW5wdXQuaGFzU3ltYm9sSWNvbiIsIkFpSW5wdXQub25MZWZ0Q2xpY2siLCJBaUlucHV0Lm9uUmlnaHRDbGljayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFNQTtnQkFhNkJBLDJCQUFTQTtnQkFzQ2xDQSxpQkFBWUEsR0FBZUE7b0JBQ3ZCQyxrQkFBTUEsR0FBR0EsQ0FBQ0EsQ0FBQ0E7b0JBM0JmQSxVQUFLQSxHQUFTQSxFQUFFQSxDQUFDQTtvQkFFakJBLFNBQUlBLEdBQVFBLE1BQU1BLENBQUNBO29CQUVuQkEsY0FBU0EsR0FBUUEsR0FBR0EsQ0FBQ0E7b0JBRXJCQSxhQUFRQSxHQUFTQSxLQUFLQSxDQUFDQTtvQkFFdkJBLGtCQUFhQSxHQUFTQSxLQUFLQSxDQUFDQTtvQkFFNUJBLGdCQUFXQSxHQUFRQSxFQUFFQSxDQUFDQTtvQkFFdEJBLFlBQU9BLEdBQVFBLEVBQUVBLENBQUNBO29CQUVsQkEsY0FBU0EsR0FBUUEsRUFBRUEsQ0FBQ0E7b0JBRXBCQSxlQUFVQSxHQUFRQSxFQUFFQSxDQUFDQTtvQkFFckJBLGlCQUFZQSxHQUFvQkEsSUFBSUEs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Q0EsY0FBTUEsT0FBQUEsT0FBT0EsRUFBUEEsQ0FBT0EsQ0FBQ0EsRUFBRUEsS0FBS0EsRUFBRUEsSUFBSUEsRUFBQ0EsQ0FBQ0EsQ0FBQ0E7cUJBQ2xHQSxFQUFDQTt3QkFDRUEsWUFBWUEsRUFBQ0EsQ0FBQ0E7d0JBQ2RBLFdBQVdBLEVBQUNBLENBQUNBO3dCQUNiQSxXQUFXQSxFQUFDQSxDQUFDQTtxQkFDaEJBLENBQUNBLENBQUNBOzs0QkEySE5BO2dCQUFEQSxjQUFDQTtZQUFEQSxDQXZJQSxBQXVJQ0EsRUExSDRCLHFCQUFTLEVBMEhyQztZQXZJRCw2QkF1SUMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL0FpSW5wdXQvQWlJbnB1dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LEVsZW1lbnRSZWYsZm9yd2FyZFJlZixQcm92aWRlcixIb3N0QmluZGluZ30gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0NvbnRyb2xWYWx1ZUFjY2Vzc29yLE5HX1ZBTFVFX0FDQ0VTU09SfSBmcm9tICdhbmd1bGFyMi9jb21tb24nO1xuaW1wb3J0IHtPYnNlcnZhYmxlV3JhcHBlcixFdmVudEVtaXR0ZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvYXN5bmMnO1xuaW1wb3J0IHtBaUNvbnRyb2x9IGZyb20gJy4uL0FpQ29udHJvbC9BaUNvbnRyb2wnO1xuaW1wb3J0IHtBaUljb259IGZyb20gJy4uL0FpSWNvbi9BaUljb24nO1xuXG5AQ29tcG9uZW50KEFpQ29udHJvbC5tZXRhKHtcbiAgICB0ZW1wbGF0ZVVybDoncGFja2FnZTpzcmMvY29tcG9uZW50cy9BaUlucHV0L0FpSW5wdXQuaHRtbCcsXG4gICAgZGlyZWN0aXZlczogW0FpSWNvbl0sXG4gICAgc2VsZWN0b3I6ICdhaS1pbnB1dCcsXG4gICAgaW5wdXRzOiBBaUlucHV0LmlucHV0cyxcbiAgICBvdXRwdXRzOiBBaUlucHV0Lm91dHB1dHMsXG4gICAgaG9zdDogQWlJbnB1dC5ob3N0LFxuICAgIHByb3ZpZGVyczogW25ldyBQcm92aWRlcihOR19WQUxVRV9BQ0NFU1NPUiwge3VzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEFpSW5wdXQpLCBtdWx0aTogdHJ1ZX0pXVxuICAgIH0se1xuICAgICAgICBpZ25vcmVBY3RpdmU6MSxcbiAgICAgICAgaWdub3JlRm9jdXM6MSxcbiAgICAgICAgaWdub3JlSG92ZXI6MVxuICAgIH0pKSAgIFxuZXhwb3J0IGNsYXNzIEFpSW5wdXQgZXh0ZW5kcyBBaUNvbnRyb2wgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvcnsgXG5cbiAgICBzdGF0aWMgaW5wdXRzPVsndmFsdWUnLCd0eXBlJywnbWF4bGVuZ3RoJywncmVhZG9ubHknLCdjYW5jZWxfYnV0dG9uJywnc3ltYm9sX2ljb24nLCdyaWdodF9pY29uJywncGF0dGVybiddO1xuICAgIHN0YXRpYyBvdXRwdXRzPVsnX2NsaWNrX3JpZ2h0JywnX2NsaWNrX2xlZnQnLCdfZm9jdXNfY2hhbmdlJywnX3ZhbHVlX2NoYW5nZSddO1xuICAgIHN0YXRpYyBob3N0PXtcbiAgICAgICAgICAgICdbY2xhc3MuZm9jdXNdJzogJ2lzRm9jdXMnLFxuICAgICAgICAgICAgJ1tjbGFzcy52YWx1ZWRdJzogJ2hhc1ZhbHVlKCknLFxuICAgICAgICAgICAgJ1tjbGFzcy5yZWFkb25seV0nOiAncmVhZG9ubHknLFxuICAgICAgICAgICAgJ1tjbGFzcy5haS1pbnB1dC1sZWZ0XSc6ICdoYXNMZWZ0SWNvbigpJyxcbiAgICAgICAgICAgICdbY2xhc3MuYWktaW5wdXQtcmlnaHRdJzogJ2hhc1JpZ2h0SWNvbigpJ1xuICAgICAgICB9O1xuXG4gICAgdmFsdWU6IHN0cmluZz0nJzsgXG4gICAgXG4gICAgdHlwZTpzdHJpbmc9J3RleHQnO1xuXG4gICAgbWF4bGVuZ3RoOm51bWJlcj0yNTU7XG5cbiAgICByZWFkb25seTpib29sZWFuPWZhbHNlO1xuXG4gICAgY2FuY2VsX2J1dHRvbjpib29sZWFuPWZhbHNlO1xuXG4gICAgc3ltYm9sX2ljb246c3RyaW5nPScnO1xuXG4gICAgcGF0dGVybjpzdHJpbmc9Jyc7XG5cbiAgICBsZWZ0X2ljb246c3RyaW5nPScnO1xuXG4gICAgcmlnaHRfaWNvbjpzdHJpbmc9Jyc7XG5cbiAgICBfY2xpY2tfcmlnaHQ6IEV2ZW50RW1pdHRlcjxhbnk+PW5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIF9jbGlja19sZWZ0OiBFdmVudEVtaXR0ZXI8YW55Pj1uZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBfZm9jdXNfY2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55Pj1uZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBfdmFsdWVfY2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55Pj1uZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBjb25zdHJ1Y3RvcihlbGU6IEVsZW1lbnRSZWYpIHsgIFxuICAgICAgICBzdXBlcihlbGUpOyBcbiAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNldEF0dHJpYnV0ZSgnYWktaW5wdXQnLCcnKTsgXG4gICAgfVxuXG4gICAgb25DaGFuZ2UgPSAoXykgPT4ge307XG4gICAgb25Ub3VjaGVkID0gKCkgPT4ge307XG4gICAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKF86IGFueSkgPT4gdm9pZCk6IHZvaWQgeyB0aGlzLm9uQ2hhbmdlID0gZm47IH1cbiAgICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQgeyB0aGlzLm9uVG91Y2hlZCA9IGZuOyB9XG4gICAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMudmFsdWU9dmFsdWU/dmFsdWU6Jyc7XG4gICAgICAgIFxuICAgIH1cbiAgXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlVmFsdWUobnVsbCk7XG4gICAgfVxuXG4gICAgdXBkYXRlVmFsdWUoZXZlbnQpIHtcbiAgICAgICAgaWYoZXZlbnQpIHRoaXMudmFsdWUgPSBldmVudC50YXJnZXQudmFsdWUudHJpbSgpO1xuICAgICAgICBpZih0aGlzLmNhbmNlbF9idXR0b24pe1xuICAgICAgICAgICAgaWYodGhpcy52YWx1ZS5sZW5ndGggPiAwKVxuICAgICAgICAgICAgICAgIHRoaXMucmlnaHRfaWNvbj0nY2FuY2VsJzsgICAgICAgICAgICBcbiAgICAgICAgICAgIGVsc2UgICAgXG4gICAgICAgICAgICAgICAgdGhpcy5yaWdodF9pY29uPScnOyAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIHRoaXMub25DaGFuZ2UodGhpcy52YWx1ZSk7XG4gICAgICAgIE9ic2VydmFibGVXcmFwcGVyLmNhbGxFbWl0KHRoaXMuX3ZhbHVlX2NoYW5nZSwgdGhpcy52YWx1ZSk7XG4gICAgfVxuXG4gICAgaGFzVmFsdWUoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUgJiYgdGhpcy52YWx1ZS5sZW5ndGggPiAwO1xuICAgIH0gXG4gICAgXG4gICAgc2V0SGFzRm9jdXMoaGFzRm9jdXM6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5pc0ZvY3VzPWhhc0ZvY3VzO1xuICAgICAgICBPYnNlcnZhYmxlV3JhcHBlci5jYWxsRW1pdCh0aGlzLl9mb2N1c19jaGFuZ2UsaGFzRm9jdXMpO1xuICAgIH1cblxuICAgIGdldElucHV0VGFiSW5kZXgoKXtcbiAgICAgICAgaWYodGhpcy5yZWFkb25seSkgcmV0dXJuIC0xO1xuICAgICAgICByZXR1cm4gdGhpcy50YWJpbmRleDtcbiAgICB9XG5cbiAgICBnZXRNYXhMZW5ndGgoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMubWF4bGVuZ3RoO1xuICAgIH0gICAgXG5cbiAgICBnZXRUeXBlKCl7XG4gICAgICAgIHJldHVybiB0aGlzLnR5cGU7XG4gICAgfSAgICBcblxuICAgIGlzUmVhZG9ubHkoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVhZG9ubHkgPyAndHJ1ZSc6bnVsbDtcbiAgICB9ICAgIFxuICAgIFxuICAgIGhhc0xlZnRJY29uKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmxlZnRfaWNvbi5sZW5ndGggPiAwO1xuICAgIH1cblxuICAgIGhhc1JpZ2h0SWNvbigpe1xuICAgICAgICByZXR1cm4gdGhpcy5yaWdodF9pY29uLmxlbmd0aCA+IDA7XG4gICAgfVxuXG4gICAgaGFzU3ltYm9sSWNvbigpe1xuICAgICAgICByZXR1cm4gdGhpcy5zeW1ib2xfaWNvbi5sZW5ndGggPiAwO1xuICAgIH1cbiBcbiAgICBvbkxlZnRDbGljaygpe1xuICAgICAgICBPYnNlcnZhYmxlV3JhcHBlci5jYWxsRW1pdCh0aGlzLl9jbGlja19sZWZ0LCBudWxsKTtcbiAgICB9XG5cbiAgICBvblJpZ2h0Q2xpY2soKXtcbiAgICAgICAgaWYodGhpcy5jYW5jZWxfYnV0dG9uKXtcbiAgICAgICAgICAgIHRoaXMudmFsdWU9Jyc7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKG51bGwpO1xuICAgICAgICAgICAgdHJ5e1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jaGlsZE5vZGVzWzBdLmZvY3VzKCk7XG4gICAgICAgICAgICB9Y2F0Y2goZSl7fVxuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIE9ic2VydmFibGVXcmFwcGVyLmNhbGxFbWl0KHRoaXMuX2NsaWNrX3JpZ2h0LCBudWxsKTtcbiAgICB9XG4gXG59IFxuICBcbiAgIFxuIFxuICAiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
