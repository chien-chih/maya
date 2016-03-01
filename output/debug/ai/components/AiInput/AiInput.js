System.register(['angular2/core', 'angular2/common', 'angular2/src/facade/lang', 'angular2/src/facade/async', '../AiControl/AiControl', '../AiIcon/AiIcon'], function(exports_1) {
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
    var core_1, common_1, lang_1, async_1, AiControl_1, AiIcon_1;
    var CUSTOM_VALUE_ACCESSOR, AiInput;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (lang_1_1) {
                lang_1 = lang_1_1;
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
            CUSTOM_VALUE_ACCESSOR = lang_1.CONST_EXPR(new core_1.Provider(common_1.NG_VALUE_ACCESSOR, { useExisting: core_1.forwardRef(function () { return AiInput; }), multi: true }));
            //const CUSTOM_VALUE_ACCESSOR = new Provider(
            //  NG_VALUE_ACCESSOR, {useExisting: forwardRef(() => LabelsValueAccessor), multi: true});
            AiInput = (function (_super) {
                __extends(AiInput, _super);
                function AiInput(ele) {
                    _super.call(this, ele);
                    this.value = '';
                    this.type = 'text';
                    this.cancel = false;
                    this.symbol = '';
                    this.left = '';
                    this.right = '';
                    this.maxlength = 255;
                    this.minlength = 255;
                    this.readonly = false;
                    this.required = false;
                    this._click_right = new async_1.EventEmitter();
                    this._click_left = new async_1.EventEmitter();
                    this._focus_change = new async_1.EventEmitter();
                    this._value_change = new async_1.EventEmitter();
                    this.onChange = function (_) { };
                    this.onTouched = function () { };
                    //, ngControl: NgControl
                    //if(ngControl) {
                    // this.ngControl.valueAccessor = this;
                    //}
                }
                AiInput.prototype.writeValue = function (value) {
                    if (value)
                        this.value = value;
                    //    this.host.writeLabelsValue(value);
                };
                AiInput.prototype.registerOnChange = function (fn) { this.onChange = fn; };
                AiInput.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
                //writeValue(obj: any): void{ 
                //this.value=obj;
                //}
                //registerOnChange(fn: any): void{
                //      this.onChange = fn;
                //}
                //registerOnTouched(fn: any): void{
                //        this.onTouched = fn;
                //}
                AiInput.prototype.ngOnInit = function () {
                    this.updateValue(null);
                };
                AiInput.prototype.updateValue = function (event) {
                    if (event)
                        this.value = event.target.value.trim();
                    if (this.cancel) {
                        if (this.value.length > 0)
                            this.right = 'cancel';
                        else
                            this.right = '';
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
                AiInput.prototype.getMaxLength = function () {
                    return this.maxlength;
                };
                AiInput.prototype.getType = function () {
                    return this.type;
                };
                AiInput.prototype.isReadonly = function () {
                    return this.readonly ? 'true' : null;
                };
                AiInput.prototype.isLeftExist = function () {
                    return this.left.length > 0;
                };
                AiInput.prototype.isRightExist = function () {
                    return this.right.length > 0;
                };
                AiInput.prototype.isSymbolExist = function () {
                    return this.symbol.length > 0;
                };
                AiInput.prototype.onLeftClick = function () {
                    async_1.ObservableWrapper.callEmit(this._click_left, null);
                };
                AiInput.prototype.onRightClick = function () {
                    if (this.cancel) {
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
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], AiInput.prototype, "value", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], AiInput.prototype, "type", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], AiInput.prototype, "cancel", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], AiInput.prototype, "symbol", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], AiInput.prototype, "left", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], AiInput.prototype, "right", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], AiInput.prototype, "maxlength", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], AiInput.prototype, "minlength", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], AiInput.prototype, "readonly", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], AiInput.prototype, "required", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', async_1.EventEmitter)
                ], AiInput.prototype, "_click_right", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', async_1.EventEmitter)
                ], AiInput.prototype, "_click_left", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', async_1.EventEmitter)
                ], AiInput.prototype, "_focus_change", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', async_1.EventEmitter)
                ], AiInput.prototype, "_value_change", void 0);
                AiInput = __decorate([
                    core_1.Component(AiControl_1.AiControl.meta({
                        templateUrl: 'package:src/components/AiInput/AiInput.html',
                        directives: [AiIcon_1.AiIcon],
                        selector: 'ai-input',
                        host: {
                            '[class.focus]': 'isFocus',
                            '[class.valued]': 'hasValue()',
                            '[class.readonly]': 'readonly',
                            '[class.ai-input-left]': 'isLeftExist()',
                            '[class.ai-input-right]': 'isRightExist()'
                        },
                        providers: [CUSTOM_VALUE_ACCESSOR]
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlJbnB1dC9BaUlucHV0LnRzIl0sIm5hbWVzIjpbIkFpSW5wdXQiLCJBaUlucHV0LmNvbnN0cnVjdG9yIiwiQWlJbnB1dC53cml0ZVZhbHVlIiwiQWlJbnB1dC5yZWdpc3Rlck9uQ2hhbmdlIiwiQWlJbnB1dC5yZWdpc3Rlck9uVG91Y2hlZCIsIkFpSW5wdXQubmdPbkluaXQiLCJBaUlucHV0LnVwZGF0ZVZhbHVlIiwiQWlJbnB1dC5oYXNWYWx1ZSIsIkFpSW5wdXQuc2V0SGFzRm9jdXMiLCJBaUlucHV0LmdldE1heExlbmd0aCIsIkFpSW5wdXQuZ2V0VHlwZSIsIkFpSW5wdXQuaXNSZWFkb25seSIsIkFpSW5wdXQuaXNMZWZ0RXhpc3QiLCJBaUlucHV0LmlzUmlnaHRFeGlzdCIsIkFpSW5wdXQuaXNTeW1ib2xFeGlzdCIsIkFpSW5wdXQub25MZWZ0Q2xpY2siLCJBaUlucHV0Lm9uUmlnaHRDbGljayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztRQVVNLHFCQUFxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUFyQixxQkFBcUIsR0FBRyxpQkFBVSxDQUFDLElBQUksZUFBUSxDQUNuRCwwQkFBaUIsRUFBRSxFQUFDLFdBQVcsRUFBRSxpQkFBVSxDQUFDLGNBQU0sT0FBQSxPQUFPLEVBQVAsQ0FBTyxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBQyxDQUFDLENBQUMsQ0FBQztZQUU3RSw2Q0FBNkM7WUFDM0MsMEZBQTBGO1lBRzVGO2dCQWlCNkJBLDJCQUFTQTtnQkEyQ2xDQSxpQkFBWUEsR0FBZUE7b0JBQ3ZCQyxrQkFBTUEsR0FBR0EsQ0FBQ0EsQ0FBQ0E7b0JBMUNmQSxVQUFLQSxHQUFTQSxFQUFFQSxDQUFDQTtvQkFHakJBLFNBQUlBLEdBQVFBLE1BQU1BLENBQUNBO29CQUduQkEsV0FBTUEsR0FBU0EsS0FBS0EsQ0FBQ0E7b0JBR3JCQSxXQUFNQSxHQUFRQSxFQUFFQSxDQUFDQTtvQkFHakJBLFNBQUlBLEdBQVFBLEVB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dUNBO2dCQUVsREE7b0JBQUNBLGFBQU1BLEVBQUVBOzttQkFDVEEsa0NBQWFBLFVBQXVDQTtnQkFFcERBO29CQUFDQSxhQUFNQSxFQUFFQTs7bUJBQ1RBLGtDQUFhQSxVQUF1Q0E7Z0JBMUR4REE7b0JBQUNBLGdCQUFTQSxDQUFDQSxxQkFBU0EsQ0FBQ0EsSUFBSUEsQ0FBQ0E7d0JBQ3RCQSxXQUFXQSxFQUFDQSw2Q0FBNkNBO3dCQUN6REEsVUFBVUEsRUFBRUEsQ0FBQ0EsZUFBTUEsQ0FBQ0E7d0JBQ3BCQSxRQUFRQSxFQUFFQSxVQUFVQTt3QkFDcEJBLElBQUlBLEVBQUVBOzRCQUNGQSxlQUFlQSxFQUFFQSxTQUFTQTs0QkFDMUJBLGdCQUFnQkEsRUFBRUEsWUFBWUE7NEJBQzlCQSxrQkFBa0JBLEVBQUVBLFVBQVVBOzRCQUM5QkEsdUJBQXVCQSxFQUFFQSxlQUFlQTs0QkFDeENBLHdCQUF3QkEsRUFBRUEsZ0JBQWdCQTt5QkFDN0NBO3dCQUNBQSxTQUFTQSxFQUFFQSxDQUFDQSxxQkFBcUJBLENBQUNBO3FCQUNsQ0EsRUFBQ0E7d0JBQ0VBLFlBQVlBLEVBQUNBLENBQUNBO3dCQUNkQSxXQUFXQSxFQUFDQSxDQUFDQTt3QkFDYkEsV0FBV0EsRUFBQ0EsQ0FBQ0E7cUJBQ2hCQSxDQUFDQSxDQUFDQTs7NEJBMklOQTtnQkFBREEsY0FBQ0E7WUFBREEsQ0EzSkEsQUEySkNBLEVBMUk0QixxQkFBUyxFQTBJckM7WUEzSkQsNkJBMkpDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9BaUlucHV0L0FpSW5wdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCxFbGVtZW50UmVmLEF0dHJpYnV0ZSxJbnB1dCxPdXRwdXQsZm9yd2FyZFJlZixQcm92aWRlcn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge05nQ29udHJvbCxDb250cm9sVmFsdWVBY2Nlc3NvcixOR19WQUxVRV9BQ0NFU1NPUn0gZnJvbSAnYW5ndWxhcjIvY29tbW9uJztcbmltcG9ydCB7Q09OU1RfRVhQUn0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9sYW5nJztcblxuXG5pbXBvcnQge09ic2VydmFibGVXcmFwcGVyLEV2ZW50RW1pdHRlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9hc3luYyc7XG5pbXBvcnQge0FpQ29udHJvbH0gZnJvbSAnLi4vQWlDb250cm9sL0FpQ29udHJvbCc7XG5pbXBvcnQge0FpSWNvbn0gZnJvbSAnLi4vQWlJY29uL0FpSWNvbic7XG5cblxuY29uc3QgQ1VTVE9NX1ZBTFVFX0FDQ0VTU09SID0gQ09OU1RfRVhQUihuZXcgUHJvdmlkZXIoXG4gIE5HX1ZBTFVFX0FDQ0VTU09SLCB7dXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQWlJbnB1dCksIG11bHRpOiB0cnVlfSkpO1xuXG4vL2NvbnN0IENVU1RPTV9WQUxVRV9BQ0NFU1NPUiA9IG5ldyBQcm92aWRlcihcbiAgLy8gIE5HX1ZBTFVFX0FDQ0VTU09SLCB7dXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTGFiZWxzVmFsdWVBY2Nlc3NvciksIG11bHRpOiB0cnVlfSk7XG5cblxuQENvbXBvbmVudChBaUNvbnRyb2wubWV0YSh7XG4gICAgdGVtcGxhdGVVcmw6J3BhY2thZ2U6c3JjL2NvbXBvbmVudHMvQWlJbnB1dC9BaUlucHV0Lmh0bWwnLFxuICAgIGRpcmVjdGl2ZXM6IFtBaUljb25dLFxuICAgIHNlbGVjdG9yOiAnYWktaW5wdXQnLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgJ1tjbGFzcy5mb2N1c10nOiAnaXNGb2N1cycsXG4gICAgICAgICdbY2xhc3MudmFsdWVkXSc6ICdoYXNWYWx1ZSgpJyxcbiAgICAgICAgJ1tjbGFzcy5yZWFkb25seV0nOiAncmVhZG9ubHknLFxuICAgICAgICAnW2NsYXNzLmFpLWlucHV0LWxlZnRdJzogJ2lzTGVmdEV4aXN0KCknLFxuICAgICAgICAnW2NsYXNzLmFpLWlucHV0LXJpZ2h0XSc6ICdpc1JpZ2h0RXhpc3QoKSdcbiAgICB9XG4gICAgLHByb3ZpZGVyczogW0NVU1RPTV9WQUxVRV9BQ0NFU1NPUl1cbiAgICB9LHtcbiAgICAgICAgaWdub3JlQWN0aXZlOjEsXG4gICAgICAgIGlnbm9yZUZvY3VzOjEsXG4gICAgICAgIGlnbm9yZUhvdmVyOjFcbiAgICB9KSkgICAgXG5leHBvcnQgY2xhc3MgQWlJbnB1dCBleHRlbmRzIEFpQ29udHJvbCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yeyBcbiAgICBASW5wdXQoKSBcbiAgICB2YWx1ZTogc3RyaW5nPScnOyBcbiAgICBcbiAgICBASW5wdXQoKSBcbiAgICB0eXBlOnN0cmluZz0ndGV4dCc7XG5cbiAgICBASW5wdXQoKSBcbiAgICBjYW5jZWw6Ym9vbGVhbj1mYWxzZTtcblxuICAgIEBJbnB1dCgpIFxuICAgIHN5bWJvbDpzdHJpbmc9Jyc7XG5cbiAgICBASW5wdXQoKSBcbiAgICBsZWZ0OnN0cmluZz0nJztcblxuICAgIEBJbnB1dCgpIFxuICAgIHJpZ2h0OnN0cmluZz0nJztcblxuICAgIEBJbnB1dCgpIFxuICAgIG1heGxlbmd0aDpudW1iZXI9MjU1O1xuXG4gICAgQElucHV0KCkgXG4gICAgbWlubGVuZ3RoOm51bWJlcj0yNTU7XG5cbiAgICBASW5wdXQoKSBcbiAgICByZWFkb25seTpib29sZWFuPWZhbHNlO1xuXG4gICAgQElucHV0KCkgXG4gICAgcmVxdWlyZWQ6Ym9vbGVhbj1mYWxzZTtcbiAgICBcbiAgICBAT3V0cHV0KClcbiAgICBfY2xpY2tfcmlnaHQ6IEV2ZW50RW1pdHRlcjxhbnk+PW5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIEBPdXRwdXQoKVxuICAgIF9jbGlja19sZWZ0OiBFdmVudEVtaXR0ZXI8YW55Pj1uZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBAT3V0cHV0KClcbiAgICBfZm9jdXNfY2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55Pj1uZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBAT3V0cHV0KClcbiAgICBfdmFsdWVfY2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55Pj1uZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBjb25zdHJ1Y3RvcihlbGU6IEVsZW1lbnRSZWYpIHsgIFxuICAgICAgICBzdXBlcihlbGUpOyBcbiAgICAgICAgLy8sIG5nQ29udHJvbDogTmdDb250cm9sXG4gICAgICAgIC8vaWYobmdDb250cm9sKSB7XG4gICAgICAgICAgIC8vIHRoaXMubmdDb250cm9sLnZhbHVlQWNjZXNzb3IgPSB0aGlzO1xuICAgICAgICAvL31cbiAgICB9XG5cbiAgICBcbiAgICBvbkNoYW5nZSA9IChfKSA9PiB7fTtcbiAgICBvblRvdWNoZWQgPSAoKSA9PiB7fTtcbiAgICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgaWYodmFsdWUpIHRoaXMudmFsdWU9dmFsdWU7XG4gICAgLy8gICAgdGhpcy5ob3N0LndyaXRlTGFiZWxzVmFsdWUodmFsdWUpO1xuICAgIH1cbiAgICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogYW55KSA9PiB2b2lkKTogdm9pZCB7IHRoaXMub25DaGFuZ2UgPSBmbjsgfVxuICAgIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7IHRoaXMub25Ub3VjaGVkID0gZm47IH1cbiAgXG4gICAgLy93cml0ZVZhbHVlKG9iajogYW55KTogdm9pZHsgXG4gICAgICAgIC8vdGhpcy52YWx1ZT1vYmo7XG4gICAgLy99XG4gICAgLy9yZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lke1xuICAvLyAgICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgICAgICAgXG4gICAgLy99XG4gICAgLy9yZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZHtcbi8vICAgICAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICAgICAgICBcbiAgICAvL31cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKG51bGwpO1xuICAgIH1cblxuICAgIHVwZGF0ZVZhbHVlKGV2ZW50KSB7XG4gICAgICAgIGlmKGV2ZW50KSB0aGlzLnZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlLnRyaW0oKTtcbiAgICAgICAgaWYodGhpcy5jYW5jZWwpe1xuICAgICAgICAgICAgaWYodGhpcy52YWx1ZS5sZW5ndGggPiAwKVxuICAgICAgICAgICAgICAgIHRoaXMucmlnaHQ9J2NhbmNlbCc7ICAgICAgICAgICAgXG4gICAgICAgICAgICBlbHNlICAgIFxuICAgICAgICAgICAgICAgIHRoaXMucmlnaHQ9Jyc7ICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vbkNoYW5nZSh0aGlzLnZhbHVlKTtcbiAgICAgICAgT2JzZXJ2YWJsZVdyYXBwZXIuY2FsbEVtaXQodGhpcy5fdmFsdWVfY2hhbmdlLCB0aGlzLnZhbHVlKTtcbiAgICB9XG5cbiAgICBoYXNWYWx1ZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZS5sZW5ndGggPiAwO1xuICAgIH0gXG4gICAgXG4gICAgc2V0SGFzRm9jdXMoaGFzRm9jdXM6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5pc0ZvY3VzPWhhc0ZvY3VzO1xuICAgICAgICBPYnNlcnZhYmxlV3JhcHBlci5jYWxsRW1pdCh0aGlzLl9mb2N1c19jaGFuZ2UsaGFzRm9jdXMpO1xuICAgIH1cblxuICAgIGdldE1heExlbmd0aCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5tYXhsZW5ndGg7XG4gICAgfSAgICBcblxuICAgIGdldFR5cGUoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgICB9ICAgIFxuXG4gICAgaXNSZWFkb25seSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5yZWFkb25seSA/ICd0cnVlJzpudWxsO1xuICAgIH0gICAgXG4gICAgXG4gICAgaXNMZWZ0RXhpc3QoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMubGVmdC5sZW5ndGggPiAwO1xuICAgIH1cblxuICAgIGlzUmlnaHRFeGlzdCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5yaWdodC5sZW5ndGggPiAwO1xuICAgIH1cblxuICAgIGlzU3ltYm9sRXhpc3QoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3ltYm9sLmxlbmd0aCA+IDA7XG4gICAgfVxuIFxuICAgIG9uTGVmdENsaWNrKCl7XG4gICAgICAgIE9ic2VydmFibGVXcmFwcGVyLmNhbGxFbWl0KHRoaXMuX2NsaWNrX2xlZnQsIG51bGwpO1xuICAgIH1cblxuICAgIG9uUmlnaHRDbGljaygpe1xuICAgICAgICBpZih0aGlzLmNhbmNlbCl7XG4gICAgICAgICAgICB0aGlzLnZhbHVlPScnO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZShudWxsKTtcbiAgICAgICAgICAgIHRyeXtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY2hpbGROb2Rlc1swXS5mb2N1cygpO1xuICAgICAgICAgICAgfWNhdGNoKGUpe31cbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgICAgICBPYnNlcnZhYmxlV3JhcHBlci5jYWxsRW1pdCh0aGlzLl9jbGlja19yaWdodCwgbnVsbCk7XG4gICAgfVxuIFxufSBcbiAgXG4gICBcbiBcbiAgIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
