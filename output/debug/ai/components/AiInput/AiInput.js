System.register(['angular2/core', 'angular2/common', 'angular2/src/facade/async', '../AiControl/AiControl', '../AiIcon/AiIcon', './AiFormatter'], function(exports_1, context_1) {
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
                }
                AiInput.prototype.ngOnInit = function () {
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
                };
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
                        if (v == null)
                            v = '';
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
            }(AiControl_1.AiControl));
            exports_1("AiInput", AiInput);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlJbnB1dC9BaUlucHV0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFvQkE7Z0JBQTZCLDJCQUFTO2dCQXVDbEMsaUJBQVksR0FBZTtvQkFDdkIsa0JBQU0sR0FBRyxDQUFDLENBQUM7b0JBM0JQLGNBQVMsR0FBYSxJQUFJLENBQUM7b0JBRW5DLFdBQU0sR0FBUyxFQUFFLENBQUM7b0JBRWxCLFNBQUksR0FBUSxNQUFNLENBQUM7b0JBRW5CLGNBQVMsR0FBUSxHQUFHLENBQUM7b0JBRXJCLGFBQVEsR0FBUyxLQUFLLENBQUM7b0JBRXZCLGtCQUFhLEdBQVMsS0FBSyxDQUFDO29CQUU1QixnQkFBVyxHQUFRLEVBQUUsQ0FBQztvQkFFdEIsY0FBUyxHQUFRLEVBQUUsQ0FBQztvQkFFcEIsZUFBVSxHQUFRLEVBQUUsQ0FBQztvQkFFckIsaUJBQVksR0FBb0IsSUFBSSxvQkFBWSxFQUFFLENBQUM7b0JBRW5ELGdCQUFXLEdBQW9CLElBQUksb0JBQVksRUFBRSxDQUFDO29CQUVsRCxrQkFBYSxHQUFvQixJQUFJLG9CQUFZLEVBQUUsQ0FBQztvQkFFcEQsa0JBQWEsR0FBb0IsSUFBSSxvQkFBWSxFQUFFLENBQUM7b0JBMEJwRCxhQUFRLEdBQUcsVUFBQyxDQUFDLElBQU0sQ0FBQyxDQUFDO29CQUNyQixjQUFTLEdBQUcsY0FBTyxDQUFDLENBQUM7b0JBdkJqQixJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUMsRUFBRSxDQUFDLENBQUM7Z0JBRW5ELENBQUM7Z0JBRUQsMEJBQVEsR0FBUjtvQkFDSSxJQUFJLFdBQVcsR0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQztvQkFDL0QsRUFBRSxDQUFBLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQzt3QkFBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7b0JB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bUIsRUFBRSxhQUFhO29CQUNsQyxlQUFlLEVBQUUsU0FBUztvQkFDMUIsZ0JBQWdCLEVBQUUsWUFBWTtvQkFDOUIsa0JBQWtCLEVBQUUsVUFBVTtvQkFDOUIsdUJBQXVCLEVBQUUsZUFBZTtvQkFDeEMsd0JBQXdCLEVBQUUsZ0JBQWdCO2lCQUM3QyxDQUFDO2dCQXhCVjtvQkFBQyxnQkFBUyxDQUFDLHFCQUFTLENBQUMsSUFBSSxDQUFDO3dCQUN0QixXQUFXLEVBQUMsNkNBQTZDO3dCQUN6RCxVQUFVLEVBQUUsQ0FBQyxlQUFNLENBQUM7d0JBQ3BCLFFBQVEsRUFBRSxVQUFVO3dCQUNwQixNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU07d0JBQ3RCLE9BQU8sRUFBRSxPQUFPLENBQUMsT0FBTzt3QkFDeEIsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJO3dCQUNsQixTQUFTLEVBQUUsQ0FBQyxJQUFJLGVBQVEsQ0FBQywwQkFBaUIsRUFBRSxFQUFDLFdBQVcsRUFBRSxpQkFBVSxDQUFDLGNBQU0sT0FBQSxPQUFPLEVBQVAsQ0FBTyxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7cUJBQ2xHLEVBQUM7d0JBQ0UsWUFBWSxFQUFDLENBQUM7d0JBQ2QsV0FBVyxFQUFDLENBQUM7d0JBQ2IsV0FBVyxFQUFDLENBQUM7cUJBQ2hCLENBQUMsQ0FBQzs7MkJBQUE7Z0JBd0tQLGNBQUM7WUFBRCxDQXZLQSxBQXVLQyxDQXZLNEIscUJBQVMsR0F1S3JDO1lBdktELDZCQXVLQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvQWlJbnB1dC9BaUlucHV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsRWxlbWVudFJlZixmb3J3YXJkUmVmLFByb3ZpZGVyLEhvc3RCaW5kaW5nfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Q29udHJvbFZhbHVlQWNjZXNzb3IsTkdfVkFMVUVfQUNDRVNTT1J9IGZyb20gJ2FuZ3VsYXIyL2NvbW1vbic7XG5pbXBvcnQge09ic2VydmFibGVXcmFwcGVyLEV2ZW50RW1pdHRlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9hc3luYyc7XG5pbXBvcnQge0FpQ29udHJvbH0gZnJvbSAnLi4vQWlDb250cm9sL0FpQ29udHJvbCc7XG5pbXBvcnQge0FpSWNvbn0gZnJvbSAnLi4vQWlJY29uL0FpSWNvbic7XG5pbXBvcnQge0FpRm9ybWF0dGVyfSBmcm9tICcuL0FpRm9ybWF0dGVyJztcblxuQENvbXBvbmVudChBaUNvbnRyb2wubWV0YSh7XG4gICAgdGVtcGxhdGVVcmw6J3BhY2thZ2U6c3JjL2NvbXBvbmVudHMvQWlJbnB1dC9BaUlucHV0Lmh0bWwnLFxuICAgIGRpcmVjdGl2ZXM6IFtBaUljb25dLFxuICAgIHNlbGVjdG9yOiAnYWktaW5wdXQnLFxuICAgIGlucHV0czogQWlJbnB1dC5pbnB1dHMsXG4gICAgb3V0cHV0czogQWlJbnB1dC5vdXRwdXRzLFxuICAgIGhvc3Q6IEFpSW5wdXQuaG9zdCxcbiAgICBwcm92aWRlcnM6IFtuZXcgUHJvdmlkZXIoTkdfVkFMVUVfQUNDRVNTT1IsIHt1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBBaUlucHV0KSwgbXVsdGk6IHRydWV9KV1cbiAgICB9LHtcbiAgICAgICAgaWdub3JlQWN0aXZlOjEsXG4gICAgICAgIGlnbm9yZUZvY3VzOjEsXG4gICAgICAgIGlnbm9yZUhvdmVyOjFcbiAgICB9KSkgICBcbmV4cG9ydCBjbGFzcyBBaUlucHV0IGV4dGVuZHMgQWlDb250cm9sIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3J7IFxuXG4gICAgc3RhdGljIGlucHV0cz1bJ3ZhbHVlJywndHlwZScsJ21heGxlbmd0aCcsJ3JlYWRvbmx5JywnY2FuY2VsX2J1dHRvbicsJ3N5bWJvbF9pY29uJywncmlnaHRfaWNvbiddO1xuICAgIHN0YXRpYyBvdXRwdXRzPVsnX2NsaWNrX3JpZ2h0JywnX2NsaWNrX2xlZnQnLCdfZm9jdXNfY2hhbmdlJywnX3ZhbHVlX2NoYW5nZSddO1xuICAgIHN0YXRpYyBob3N0PXtcbiAgICAgICAgICAgICdbY2xhc3MuZm9ybWF0dGVkXSc6ICdoYXNGb3JtYXQoKScsXG4gICAgICAgICAgICAnW2NsYXNzLmZvY3VzXSc6ICdpc0ZvY3VzJyxcbiAgICAgICAgICAgICdbY2xhc3MudmFsdWVkXSc6ICdoYXNWYWx1ZSgpJyxcbiAgICAgICAgICAgICdbY2xhc3MucmVhZG9ubHldJzogJ3JlYWRvbmx5JyxcbiAgICAgICAgICAgICdbY2xhc3MuYWktaW5wdXQtbGVmdF0nOiAnaGFzTGVmdEljb24oKScsXG4gICAgICAgICAgICAnW2NsYXNzLmFpLWlucHV0LXJpZ2h0XSc6ICdoYXNSaWdodEljb24oKSdcbiAgICAgICAgfTtcblxuICAgIHByaXZhdGUgZm9ybWF0dGVyOkFpRm9ybWF0dGVyPW51bGw7XG5cbiAgICBfdmFsdWU6IHN0cmluZz0nJzsgXG4gICAgXG4gICAgdHlwZTpzdHJpbmc9J3RleHQnO1xuXG4gICAgbWF4bGVuZ3RoOm51bWJlcj0yNTU7XG5cbiAgICByZWFkb25seTpib29sZWFuPWZhbHNlO1xuXG4gICAgY2FuY2VsX2J1dHRvbjpib29sZWFuPWZhbHNlO1xuXG4gICAgc3ltYm9sX2ljb246c3RyaW5nPScnO1xuXG4gICAgbGVmdF9pY29uOnN0cmluZz0nJztcblxuICAgIHJpZ2h0X2ljb246c3RyaW5nPScnO1xuXG4gICAgX2NsaWNrX3JpZ2h0OiBFdmVudEVtaXR0ZXI8YW55Pj1uZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBfY2xpY2tfbGVmdDogRXZlbnRFbWl0dGVyPGFueT49bmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgX2ZvY3VzX2NoYW5nZTogRXZlbnRFbWl0dGVyPGFueT49bmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgX3ZhbHVlX2NoYW5nZTogRXZlbnRFbWl0dGVyPGFueT49bmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgY29uc3RydWN0b3IoZWxlOiBFbGVtZW50UmVmKSB7ICBcbiAgICAgICAgc3VwZXIoZWxlKTsgXG4gICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FpLWlucHV0JywnJyk7IFxuXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHZhciBudW1iZXJJbnB1dD10aGlzLm5hdGl2ZUVsZW1lbnQuZ2V0QXR0cmlidXRlKCdudW1iZXJpbnB1dCcpO1xuICAgICAgICBpZihudW1iZXJJbnB1dCAhPSBudWxsKSB0aGlzLnNldE51bWJlcklucHV0KCk7XG5cbiAgICAgICAgdmFyIGZvcm1hdD10aGlzLm5hdGl2ZUVsZW1lbnQuZ2V0QXR0cmlidXRlKCdmb3JtYXQnKTtcbiAgICAgICAgaWYoZm9ybWF0KXtcbiAgICAgICAgXG4gICAgICAgICAgICB2YXIgbmF0aXZlSW5wdXQ9dGhpcy5uYXRpdmVFbGVtZW50LmNoaWxkTm9kZXNbMF07XG4gICAgICAgICAgICB0aGlzLmZvcm1hdHRlcj1uZXcgQWlGb3JtYXR0ZXIobmF0aXZlSW5wdXQsZm9ybWF0KTtcbiAgICAgICAgICAgIGlmKHRoaXMuZm9ybWF0dGVyLm51bWJlcklucHV0ICE9IG51bGwpIHRoaXMuc2V0TnVtYmVySW5wdXQoKTtcbiAgICAgICAgICAgIHZhciB0aGF0PXRoaXM7XG4gICAgICAgICAgICB0aGlzLmZvcm1hdHRlci5vblZhbHVlQ2hhbmdlPWZ1bmN0aW9uKHZhbHVlKXtcbiAgICAgICAgICAgICAgICB0aGF0Ll92YWx1ZT12YWx1ZS50cmltKCk7XG4gICAgICAgICAgICAgICAgdGhhdC51cGRhdGVWYWx1ZShudWxsKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9IFxuXG4gICAgb25DaGFuZ2UgPSAoXykgPT4ge307XG4gICAgb25Ub3VjaGVkID0gKCkgPT4ge307XG4gICAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKF86IGFueSkgPT4gdm9pZCk6IHZvaWQgeyB0aGlzLm9uQ2hhbmdlID0gZm47IH1cbiAgICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQgeyB0aGlzLm9uVG91Y2hlZCA9IGZuOyB9XG5cbiAgICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdmFyIHRoYXQ9dGhpcztcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpeyBcbiAgICAgICAgICAgIHRoYXQudmFsdWU9dmFsdWU/dmFsdWU6Jyc7XG4gICAgICAgIH0sIDEpO1xuICAgIH1cblxuICAgIGdldCB2YWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICAgIH1cbiAgICBcbiAgICBzZXQgdmFsdWUodikge1xuICAgICAgICBpZih2PT1udWxsKSB2PScnO1xuICAgICAgICBpZih0aGlzLmhhc0Zvcm1hdCgpKXtcbiAgICAgICAgICAgIHRoaXMuZm9ybWF0dGVyLnNldFZhbHVlKHYpO1xuICAgICAgICB9ZWxzZVxuICAgICAgICAgICAgdGhpcy5fdmFsdWU9djtcbiAgICB9XG5cbiAgICBzZXROdW1iZXJJbnB1dCgpe1xuICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY2hpbGROb2Rlc1swXS5zZXRBdHRyaWJ1dGUoJ3BhdHRlcm4nLCdcXFxcZConKTtcbiAgICB9XG4gICAgXG4gICAgaGFzRm9ybWF0KCl7XG4gICAgICAgIHJldHVybiB0aGlzLmZvcm1hdHRlciAhPSBudWxsO1xuICAgIH1cbiAgICBcbiAgICB1cGRhdGVJbnB1dCgpe1xuICAgICAgICBpZih0aGlzLmhhc0Zvcm1hdCgpKSByZXR1cm4gJyc7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICAgIH1cblxuICAgIHVwZGF0ZVZhbHVlKGV2ZW50KSB7XG4gICAgICAgIGlmKHRoaXMuaGFzRm9ybWF0KCkgJiYgZXZlbnQpIHJldHVybjtcbiAgICAgICAgaWYoZXZlbnQpIHRoaXMudmFsdWUgPSBldmVudC50YXJnZXQudmFsdWUudHJpbSgpO1xuICAgICAgICBpZih0aGlzLmNhbmNlbF9idXR0b24pe1xuICAgICAgICAgICAgaWYodGhpcy52YWx1ZS5sZW5ndGggPiAwKVxuICAgICAgICAgICAgICAgIHRoaXMucmlnaHRfaWNvbj0nY2FuY2VsJzsgICAgICAgICAgICBcbiAgICAgICAgICAgIGVsc2UgICAgXG4gICAgICAgICAgICAgICAgdGhpcy5yaWdodF9pY29uPScnOyAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIHRoaXMub25DaGFuZ2UodGhpcy52YWx1ZSk7XG4gICAgICAgIE9ic2VydmFibGVXcmFwcGVyLmNhbGxFbWl0KHRoaXMuX3ZhbHVlX2NoYW5nZSwgdGhpcy52YWx1ZSk7XG4gICAgfVxuXG4gICAgaGFzVmFsdWUoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUubGVuZ3RoID4gMDtcbiAgICB9IFxuICAgIFxuICAgIHNldEhhc0ZvY3VzKGhhc0ZvY3VzOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuaXNGb2N1cz1oYXNGb2N1cztcbiAgICAgICAgT2JzZXJ2YWJsZVdyYXBwZXIuY2FsbEVtaXQodGhpcy5fZm9jdXNfY2hhbmdlLGhhc0ZvY3VzKTtcbiAgICB9XG5cbiAgICBnZXRJbnB1dFRhYkluZGV4KCl7XG4gICAgICAgIGlmKHRoaXMucmVhZG9ubHkpIHJldHVybiAtMTtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFiaW5kZXg7XG4gICAgfVxuXG4gICAgZ2V0TWF4TGVuZ3RoKCl7XG4gICAgICAgIHJldHVybiB0aGlzLm1heGxlbmd0aDtcbiAgICB9ICAgIFxuXG4gICAgZ2V0VHlwZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy50eXBlO1xuICAgIH0gICAgXG5cbiAgICBpc1JlYWRvbmx5KCl7XG4gICAgICAgIHJldHVybiB0aGlzLnJlYWRvbmx5ID8gJ3RydWUnOm51bGw7XG4gICAgfSAgICBcbiAgICBcbiAgICBoYXNMZWZ0SWNvbigpe1xuICAgICAgICByZXR1cm4gdGhpcy5sZWZ0X2ljb24ubGVuZ3RoID4gMDtcbiAgICB9XG5cbiAgICBoYXNSaWdodEljb24oKXtcbiAgICAgICAgcmV0dXJuIHRoaXMucmlnaHRfaWNvbi5sZW5ndGggPiAwO1xuICAgIH1cblxuICAgIGhhc1N5bWJvbEljb24oKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3ltYm9sX2ljb24ubGVuZ3RoID4gMDtcbiAgICB9XG4gXG4gICAgb25MZWZ0Q2xpY2soKXtcbiAgICAgICAgT2JzZXJ2YWJsZVdyYXBwZXIuY2FsbEVtaXQodGhpcy5fY2xpY2tfbGVmdCwgbnVsbCk7XG4gICAgfVxuIFxuICAgIG9uUmlnaHRDbGljaygpe1xuICAgICAgICBpZih0aGlzLmNhbmNlbF9idXR0b24pe1xuICAgICAgICAgICAgdGhpcy52YWx1ZT0nJztcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWUobnVsbCk7XG4gICAgICAgICAgICB0cnl7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmNoaWxkTm9kZXNbMF0uZm9jdXMoKTtcbiAgICAgICAgICAgIH1jYXRjaChlKXt9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgT2JzZXJ2YWJsZVdyYXBwZXIuY2FsbEVtaXQodGhpcy5fY2xpY2tfcmlnaHQsIG51bGwpO1xuICAgIH1cbiBcbn0gXG4gIFxuICAgXG4gXG4gICJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
