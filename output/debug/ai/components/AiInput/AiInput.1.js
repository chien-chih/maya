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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlJbnB1dC9BaUlucHV0LjEudHMiXSwibmFtZXMiOlsiQWlJbnB1dCIsIkFpSW5wdXQuY29uc3RydWN0b3IiLCJBaUlucHV0LnJlZ2lzdGVyT25DaGFuZ2UiLCJBaUlucHV0LnJlZ2lzdGVyT25Ub3VjaGVkIiwiQWlJbnB1dC53cml0ZVZhbHVlIiwiQWlJbnB1dC5uZ09uSW5pdCIsIkFpSW5wdXQudXBkYXRlVmFsdWUiLCJBaUlucHV0Lmhhc1ZhbHVlIiwiQWlJbnB1dC5zZXRIYXNGb2N1cyIsIkFpSW5wdXQuZ2V0SW5wdXRUYWJJbmRleCIsIkFpSW5wdXQuZ2V0TWF4TGVuZ3RoIiwiQWlJbnB1dC5nZXRUeXBlIiwiQWlJbnB1dC5pc1JlYWRvbmx5IiwiQWlJbnB1dC5oYXNMZWZ0SWNvbiIsIkFpSW5wdXQuaGFzUmlnaHRJY29uIiwiQWlJbnB1dC5oYXNTeW1ib2xJY29uIiwiQWlJbnB1dC5vbkxlZnRDbGljayIsIkFpSW5wdXQub25SaWdodENsaWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU1BO2dCQWE2QkEsMkJBQVNBO2dCQXNDbENBLGlCQUFZQSxHQUFlQTtvQkFDdkJDLGtCQUFNQSxHQUFHQSxDQUFDQSxDQUFDQTtvQkEzQmZBLFVBQUtBLEdBQVNBLEVBQUVBLENBQUNBO29CQUVqQkEsU0FBSUEsR0FBUUEsTUFBTUEsQ0FBQ0E7b0JBRW5CQSxjQUFTQSxHQUFRQSxHQUFHQSxDQUFDQTtvQkFFckJBLGFBQVFBLEdBQVNBLEtBQUtBLENBQUNBO29CQUV2QkEsa0JBQWFBLEdBQVNBLEtBQUtBLENBQUNBO29CQUU1QkEsZ0JBQVdBLEdBQVFBLEVBQUVBLENBQUNBO29CQUV0QkEsWUFBT0EsR0FBUUEsRUFBRUEsQ0FBQ0E7b0JBRWxCQSxjQUFTQSxHQUFRQSxFQUFFQSxDQUFDQTtvQkFFcEJBLGVBQVVBLEdBQVFBLEVBQUVBLENBQUNBO29CQUVyQkEsaUJBQVlBLEdBQW9CQSxJQUFJ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QUFDQSxjQUFNQSxPQUFBQSxPQUFPQSxFQUFQQSxDQUFPQSxDQUFDQSxFQUFFQSxLQUFLQSxFQUFFQSxJQUFJQSxFQUFDQSxDQUFDQSxDQUFDQTtxQkFDbEdBLEVBQUNBO3dCQUNFQSxZQUFZQSxFQUFDQSxDQUFDQTt3QkFDZEEsV0FBV0EsRUFBQ0EsQ0FBQ0E7d0JBQ2JBLFdBQVdBLEVBQUNBLENBQUNBO3FCQUNoQkEsQ0FBQ0EsQ0FBQ0E7OzRCQTJITkE7Z0JBQURBLGNBQUNBO1lBQURBLENBdklBLEFBdUlDQSxFQTFINEIscUJBQVMsRUEwSHJDO1lBdklELDZCQXVJQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvQWlJbnB1dC9BaUlucHV0LjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCxFbGVtZW50UmVmLGZvcndhcmRSZWYsUHJvdmlkZXIsSG9zdEJpbmRpbmd9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtDb250cm9sVmFsdWVBY2Nlc3NvcixOR19WQUxVRV9BQ0NFU1NPUn0gZnJvbSAnYW5ndWxhcjIvY29tbW9uJztcbmltcG9ydCB7T2JzZXJ2YWJsZVdyYXBwZXIsRXZlbnRFbWl0dGVyfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2FzeW5jJztcbmltcG9ydCB7QWlDb250cm9sfSBmcm9tICcuLi9BaUNvbnRyb2wvQWlDb250cm9sJztcbmltcG9ydCB7QWlJY29ufSBmcm9tICcuLi9BaUljb24vQWlJY29uJztcblxuQENvbXBvbmVudChBaUNvbnRyb2wubWV0YSh7XG4gICAgdGVtcGxhdGVVcmw6J3BhY2thZ2U6c3JjL2NvbXBvbmVudHMvQWlJbnB1dC9BaUlucHV0Lmh0bWwnLFxuICAgIGRpcmVjdGl2ZXM6IFtBaUljb25dLFxuICAgIHNlbGVjdG9yOiAnYWktaW5wdXQnLFxuICAgIGlucHV0czogQWlJbnB1dC5pbnB1dHMsXG4gICAgb3V0cHV0czogQWlJbnB1dC5vdXRwdXRzLFxuICAgIGhvc3Q6IEFpSW5wdXQuaG9zdCxcbiAgICBwcm92aWRlcnM6IFtuZXcgUHJvdmlkZXIoTkdfVkFMVUVfQUNDRVNTT1IsIHt1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBBaUlucHV0KSwgbXVsdGk6IHRydWV9KV1cbiAgICB9LHtcbiAgICAgICAgaWdub3JlQWN0aXZlOjEsXG4gICAgICAgIGlnbm9yZUZvY3VzOjEsXG4gICAgICAgIGlnbm9yZUhvdmVyOjFcbiAgICB9KSkgICBcbmV4cG9ydCBjbGFzcyBBaUlucHV0IGV4dGVuZHMgQWlDb250cm9sIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3J7IFxuXG4gICAgc3RhdGljIGlucHV0cz1bJ3ZhbHVlJywndHlwZScsJ21heGxlbmd0aCcsJ3JlYWRvbmx5JywnY2FuY2VsX2J1dHRvbicsJ3N5bWJvbF9pY29uJywncmlnaHRfaWNvbicsJ3BhdHRlcm4nXTtcbiAgICBzdGF0aWMgb3V0cHV0cz1bJ19jbGlja19yaWdodCcsJ19jbGlja19sZWZ0JywnX2ZvY3VzX2NoYW5nZScsJ192YWx1ZV9jaGFuZ2UnXTtcbiAgICBzdGF0aWMgaG9zdD17XG4gICAgICAgICAgICAnW2NsYXNzLmZvY3VzXSc6ICdpc0ZvY3VzJyxcbiAgICAgICAgICAgICdbY2xhc3MudmFsdWVkXSc6ICdoYXNWYWx1ZSgpJyxcbiAgICAgICAgICAgICdbY2xhc3MucmVhZG9ubHldJzogJ3JlYWRvbmx5JyxcbiAgICAgICAgICAgICdbY2xhc3MuYWktaW5wdXQtbGVmdF0nOiAnaGFzTGVmdEljb24oKScsXG4gICAgICAgICAgICAnW2NsYXNzLmFpLWlucHV0LXJpZ2h0XSc6ICdoYXNSaWdodEljb24oKSdcbiAgICAgICAgfTtcblxuICAgIHZhbHVlOiBzdHJpbmc9Jyc7IFxuICAgIFxuICAgIHR5cGU6c3RyaW5nPSd0ZXh0JztcblxuICAgIG1heGxlbmd0aDpudW1iZXI9MjU1O1xuXG4gICAgcmVhZG9ubHk6Ym9vbGVhbj1mYWxzZTtcblxuICAgIGNhbmNlbF9idXR0b246Ym9vbGVhbj1mYWxzZTtcblxuICAgIHN5bWJvbF9pY29uOnN0cmluZz0nJztcblxuICAgIHBhdHRlcm46c3RyaW5nPScnO1xuXG4gICAgbGVmdF9pY29uOnN0cmluZz0nJztcblxuICAgIHJpZ2h0X2ljb246c3RyaW5nPScnO1xuXG4gICAgX2NsaWNrX3JpZ2h0OiBFdmVudEVtaXR0ZXI8YW55Pj1uZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBfY2xpY2tfbGVmdDogRXZlbnRFbWl0dGVyPGFueT49bmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgX2ZvY3VzX2NoYW5nZTogRXZlbnRFbWl0dGVyPGFueT49bmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgX3ZhbHVlX2NoYW5nZTogRXZlbnRFbWl0dGVyPGFueT49bmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgY29uc3RydWN0b3IoZWxlOiBFbGVtZW50UmVmKSB7ICBcbiAgICAgICAgc3VwZXIoZWxlKTsgXG4gICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FpLWlucHV0JywnJyk7IFxuICAgIH1cblxuICAgIG9uQ2hhbmdlID0gKF8pID0+IHt9O1xuICAgIG9uVG91Y2hlZCA9ICgpID0+IHt9O1xuICAgIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBhbnkpID0+IHZvaWQpOiB2b2lkIHsgdGhpcy5vbkNoYW5nZSA9IGZuOyB9XG4gICAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHsgdGhpcy5vblRvdWNoZWQgPSBmbjsgfVxuICAgIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLnZhbHVlPXZhbHVlP3ZhbHVlOicnO1xuICAgICAgICBcbiAgICB9XG4gIFxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKG51bGwpO1xuICAgIH1cblxuICAgIHVwZGF0ZVZhbHVlKGV2ZW50KSB7XG4gICAgICAgIGlmKGV2ZW50KSB0aGlzLnZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlLnRyaW0oKTtcbiAgICAgICAgaWYodGhpcy5jYW5jZWxfYnV0dG9uKXtcbiAgICAgICAgICAgIGlmKHRoaXMudmFsdWUubGVuZ3RoID4gMClcbiAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0X2ljb249J2NhbmNlbCc7ICAgICAgICAgICAgXG4gICAgICAgICAgICBlbHNlICAgIFxuICAgICAgICAgICAgICAgIHRoaXMucmlnaHRfaWNvbj0nJzsgICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9uQ2hhbmdlKHRoaXMudmFsdWUpO1xuICAgICAgICBPYnNlcnZhYmxlV3JhcHBlci5jYWxsRW1pdCh0aGlzLl92YWx1ZV9jaGFuZ2UsIHRoaXMudmFsdWUpO1xuICAgIH1cblxuICAgIGhhc1ZhbHVlKCl7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlICYmIHRoaXMudmFsdWUubGVuZ3RoID4gMDtcbiAgICB9IFxuICAgIFxuICAgIHNldEhhc0ZvY3VzKGhhc0ZvY3VzOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuaXNGb2N1cz1oYXNGb2N1cztcbiAgICAgICAgT2JzZXJ2YWJsZVdyYXBwZXIuY2FsbEVtaXQodGhpcy5fZm9jdXNfY2hhbmdlLGhhc0ZvY3VzKTtcbiAgICB9XG5cbiAgICBnZXRJbnB1dFRhYkluZGV4KCl7XG4gICAgICAgIGlmKHRoaXMucmVhZG9ubHkpIHJldHVybiAtMTtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFiaW5kZXg7XG4gICAgfVxuXG4gICAgZ2V0TWF4TGVuZ3RoKCl7XG4gICAgICAgIHJldHVybiB0aGlzLm1heGxlbmd0aDtcbiAgICB9ICAgIFxuXG4gICAgZ2V0VHlwZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy50eXBlO1xuICAgIH0gICAgXG5cbiAgICBpc1JlYWRvbmx5KCl7XG4gICAgICAgIHJldHVybiB0aGlzLnJlYWRvbmx5ID8gJ3RydWUnOm51bGw7XG4gICAgfSAgICBcbiAgICBcbiAgICBoYXNMZWZ0SWNvbigpe1xuICAgICAgICByZXR1cm4gdGhpcy5sZWZ0X2ljb24ubGVuZ3RoID4gMDtcbiAgICB9XG5cbiAgICBoYXNSaWdodEljb24oKXtcbiAgICAgICAgcmV0dXJuIHRoaXMucmlnaHRfaWNvbi5sZW5ndGggPiAwO1xuICAgIH1cblxuICAgIGhhc1N5bWJvbEljb24oKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3ltYm9sX2ljb24ubGVuZ3RoID4gMDtcbiAgICB9XG4gXG4gICAgb25MZWZ0Q2xpY2soKXtcbiAgICAgICAgT2JzZXJ2YWJsZVdyYXBwZXIuY2FsbEVtaXQodGhpcy5fY2xpY2tfbGVmdCwgbnVsbCk7XG4gICAgfVxuXG4gICAgb25SaWdodENsaWNrKCl7XG4gICAgICAgIGlmKHRoaXMuY2FuY2VsX2J1dHRvbil7XG4gICAgICAgICAgICB0aGlzLnZhbHVlPScnO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZShudWxsKTtcbiAgICAgICAgICAgIHRyeXtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY2hpbGROb2Rlc1swXS5mb2N1cygpO1xuICAgICAgICAgICAgfWNhdGNoKGUpe31cbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgICAgICBPYnNlcnZhYmxlV3JhcHBlci5jYWxsRW1pdCh0aGlzLl9jbGlja19yaWdodCwgbnVsbCk7XG4gICAgfVxuIFxufSBcbiAgXG4gICBcbiBcbiAgIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
