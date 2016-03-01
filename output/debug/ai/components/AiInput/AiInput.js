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
                    this.left_icon = '';
                    this.right_icon = '';
                    this._click_right = new async_1.EventEmitter();
                    this._click_left = new async_1.EventEmitter();
                    this._focus_change = new async_1.EventEmitter();
                    this._value_change = new async_1.EventEmitter();
                    this.onChange = function (_) { };
                    this.onTouched = function () { };
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
                    __metadata('design:type', Number)
                ], AiInput.prototype, "maxlength", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], AiInput.prototype, "readonly", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], AiInput.prototype, "cancel_button", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], AiInput.prototype, "symbol_icon", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], AiInput.prototype, "left_icon", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], AiInput.prototype, "right_icon", void 0);
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
                            '[class.ai-input-left]': 'hasLeftIcon()',
                            '[class.ai-input-right]': 'hasRightIcon()'
                        },
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlJbnB1dC9BaUlucHV0LnRzIl0sIm5hbWVzIjpbIkFpSW5wdXQiLCJBaUlucHV0LmNvbnN0cnVjdG9yIiwiQWlJbnB1dC5yZWdpc3Rlck9uQ2hhbmdlIiwiQWlJbnB1dC5yZWdpc3Rlck9uVG91Y2hlZCIsIkFpSW5wdXQud3JpdGVWYWx1ZSIsIkFpSW5wdXQubmdPbkluaXQiLCJBaUlucHV0LnVwZGF0ZVZhbHVlIiwiQWlJbnB1dC5oYXNWYWx1ZSIsIkFpSW5wdXQuc2V0SGFzRm9jdXMiLCJBaUlucHV0LmdldElucHV0VGFiSW5kZXgiLCJBaUlucHV0LmdldE1heExlbmd0aCIsIkFpSW5wdXQuZ2V0VHlwZSIsIkFpSW5wdXQuaXNSZWFkb25seSIsIkFpSW5wdXQuaGFzTGVmdEljb24iLCJBaUlucHV0Lmhhc1JpZ2h0SWNvbiIsIkFpSW5wdXQuaGFzU3ltYm9sSWNvbiIsIkFpSW5wdXQub25MZWZ0Q2xpY2siLCJBaUlucHV0Lm9uUmlnaHRDbGljayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFNQTtnQkFpQjZCQSwyQkFBU0E7Z0JBcUNsQ0EsaUJBQVlBLEdBQWVBO29CQUN2QkMsa0JBQU1BLEdBQUdBLENBQUNBLENBQUNBO29CQXBDZkEsVUFBS0EsR0FBU0EsRUFBRUEsQ0FBQ0E7b0JBR2pCQSxTQUFJQSxHQUFRQSxNQUFNQSxDQUFDQTtvQkFHbkJBLGNBQVNBLEdBQVFBLEdBQUdBLENBQUNBO29CQUdyQkEsYUFBUUEsR0FBU0EsS0FBS0EsQ0FBQ0E7b0JBR3ZCQSxrQkFBYUEsR0FBU0EsS0FBS0EsQ0FBQ0E7b0JBRzVCQSxnQkFBV0EsR0FBUUEsRUFBRUEsQ0FBQ0E7b0JBR3RCQSxjQUFTQSxHQUFRQSxFQUFFQSxDQUFDQTtvQkFHcEJBLGVBQVVBLEdBQVFBLEVBQUVBLENBQUNBO29CQUdyQkEsaUJBQVlBLEdBQW9CQSxJQUFJQSxvQkFBWUEsRUFBRUEsQ0FBQ0E7b0JBR25EQSxnQkFBV0EsR0FBb0JBLElBQUlBLG9CQUFZQSxFQUFFQSxDQUFDQTtvQkFHbERBLGtCQUFhQSxHQUFvQkEsSUFBSUEsb0JBQVlBLEVBQUVBLENBQUNBO29CQUdwREEsa0JBQWFBLEdBQW9CQSxJQUFJQSxvQkFBWUEsRUFBRUEsQ0FBQ0E7b0JBTXBEQSxhQUFRQSxHQUFHQSxVQUFDQSxDQUFDQSxJQUFNQSxDQUFDQSxDQUFDQTtvQkFDckJBLGNBQVNBLEdBQUdBLGNBQU9BLENBQUNBLENBQUNBO2dCQUhyQkEsQ0FBQ0E7Z0JBSURELGtDQUFnQkEsR0FBaEJBLFVBQWlCQSxFQUFvQkEsSUFBVUUsSUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ3BFRixtQ0FBaUJBLEdBQWpCQSxVQUFrQkEsRUFBY0EsSUFBVUcsSUFBSUEsQ0FBQ0EsU0FBU0EsR0FBR0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ2hFSCw0QkFBVUEsR0FBVkEsVUFBV0EsS0FBVUE7b0JBQ2pCSSxJQUFJQSxDQUFDQSxLQUFLQSxHQUFDQSxLQUFLQSxHQUFDQSxLQUFLQSxHQUFDQSxFQUFFQSxDQUFDQTtnQkFFOUJBLENBQUNBO2dCQUVESiwwQkFBUUEsR0FBUkE7b0JBQ0lLLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO2dCQUMzQkEsQ0FBQ0E7Z0JBRURMLDZCQUFXQSxHQUFYQSxVQUFZQSxLQUFLQTtvQkFDYk0sRUFBRUEsQ0FBQUEsQ0FBQ0EsS0FBS0EsQ0FBQ0E7d0JBQUNBLElBQUlBLENBQUNBLEtBQUtBLEdBQUdBLEtBQUtBLENBQUNBLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBLElBQUlBLEVBQUVBLENBQUNBO29CQUNqREEsRUFBRUEsQ0FBQUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsQ0FBQUEsQ0FBQ0E7d0JBQ25CQSxFQUFFQSxDQUFBQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxNQUFNQSxHQUFHQSxDQUFDQSxDQUFDQTs0QkFDckJBLElBQUlBLENBQUNBLFVBQVVBLEdBQUNBLFFBQVFBLENBQUNBO3dCQUM3QkEsSUFBSUE7NEJBQ0FBLElBQUlBLENBQUNBLFVBQVVBLEdBQUNBLEVBQUVBLENBQUNBO29CQUMzQkEsQ0FBQ0E7b0JBQ0RBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO29CQUMxQkEseUJBQWlCQSxDQUFDQSxRQUFRQSxDQUFDQSxJQUFJQSxDQUFDQSxhQUFhQSxFQUFFQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtnQkFDL0RBLENBQUNBO2dCQUVETiwwQkFBUUEsR0FBUkE7b0JBQ0lPLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLElBQUlBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLE1BQU1BLEdBQUdBLENBQUNBLENBQUNBO2dCQUMvQ0EsQ0FBQ0E7Z0JBRURQLDZCQUFXQSxHQUFYQSxVQUFZQSxRQUFpQkE7b0JBQ3pCUSxJQUFJQSxDQUFDQSxPQUFPQSxHQUFDQSxRQUFRQSxDQUFDQTtvQkFDdEJBLHlCQUFpQkEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsYUFBYUEsRUFBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0E7Z0JBQzVEQSxDQUFDQTtnQkFFRFIsa0NBQWdCQSxHQUFoQkE7b0JBQ0lTLEVBQUVBLENBQUFBLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBO3dCQUFDQSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFDNUJBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBO2dCQUN6QkEsQ0FBQ0E7Z0JBRURULDhCQUFZQSxHQUFaQTtvQkFDSVUsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0E7Z0JBQzFCQSxDQUFDQTtnQkFFRFYseUJBQU9BLEdBQVBBO29CQUNJVyxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQTtnQkFDckJBLENBQUNBO2dCQUVEWCw0QkFBVUEsR0FBVkE7b0JBQ0lZLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLEdBQUdBLE1BQU1BLEdBQUNBLElBQUlBLENBQUNBO2dCQUN2Q0EsQ0FBQ0E7Z0JBRURaLDZCQUFXQSxHQUFYQTtvQkFDSWEsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsTUFBTUEsR0FBR0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ3JDQSxDQUFDQTtnQkFFRGIsOEJBQVlBLEdBQVpBO29CQUNJYyxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxNQUFNQSxHQUFHQSxDQUFDQSxDQUFDQTtnQkFDdENBLENBQUNBO2dCQUVEZCwrQkFBYUEsR0FBYkE7b0JBQ0llLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLE1BQU1BLEdBQUdBLENBQUNBLENBQUNBO2dCQUN2Q0EsQ0FBQ0E7Z0JBRURmLDZCQUFXQSxHQUFYQTtvQkFDSWdCLHlCQUFpQkEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsV0FBV0EsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7Z0JBQ3ZEQSxDQUFDQTtnQkFFRGhCLDhCQUFZQSxHQUFaQTtvQkFDSWlCLEVBQUVBLENBQUFBLENBQUNBLElBQUlBLENBQUNBLGFBQWFBLENBQUNBLENBQUFBLENBQUNBO3dCQUNuQkEsSUFBSUEsQ0FBQ0EsS0FBS0EsR0FBQ0EsRUFBRUEsQ0FBQ0E7d0JBQ2RBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO3dCQUN2QkEsSUFBR0EsQ0FBQ0E7NEJBQ0FBLElBQUlBLENBQUNBLGFBQWFBLENBQUNBLFVBQVVBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLEtBQUtBLEVBQUVBLENBQUNBO3dCQUM3Q0EsQ0FBQ0E7d0JBQUFBLEtBQUtBLENBQUFBLENBQUNBLENBQUNBLENBQUNBLENBQUFBLENBQUNBLENBQUFBLENBQUNBO29CQUNmQSxDQUFDQTtvQkFDREEsSUFBSUE7d0JBQ0FBLHlCQUFpQkEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsWUFBWUEsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7Z0JBQzVEQSxDQUFDQTtnQkFySERqQjtvQkFBQ0EsWUFBS0EsRUFBRUE7O21CQUNSQSwwQkFBS0EsVUFBWUE7Z0JBRWpCQTtvQkFBQ0EsWUFBS0EsRUFBRUE7O21CQUNSQSx5QkFBSUEsVUFBZUE7Z0JBRW5CQTtvQkFBQ0EsWUFBS0EsRUFBRUE7O21CQUNSQSw4QkFBU0EsVUFBWUE7Z0JBRXJCQTtvQkFBQ0EsWUFBS0EsRUFBRUE7O21CQUNSQSw2QkFBUUEsVUFBZUE7Z0JBRXZCQTtvQkFBQ0EsWUFBS0EsRUFBRUE7O21CQUNSQSxrQ0FBYUEsVUFBZUE7Z0JBRTVCQTtvQkFBQ0EsWUFBS0EsRUFBRUE7O21CQUNSQSxnQ0FBV0EsVUFBV0E7Z0JBRXRCQTtvQkFBQ0EsWUFBS0EsRUFBRUE7O21CQUNSQSw4QkFBU0EsVUFBV0E7Z0JBRXBCQTtvQkFBQ0EsWUFBS0EsRUFBRUE7O21CQUNSQSwrQkFBVUEsVUFBV0E7Z0JBRXJCQTtvQkFBQ0EsYUFBTUEsRUFBRUE7O21CQUNUQSxpQ0FBWUEsVUFBdUNBO2dCQUVuREE7b0JBQUNBLGFBQU1BLEVBQUVBOzttQkFDVEEsZ0NBQVdBLFVBQXVDQTtnQkFFbERBO29CQUFDQSxhQUFNQSxFQUFFQTs7bUJBQ1RBLGtDQUFhQSxVQUF1Q0E7Z0JBRXBEQTtvQkFBQ0EsYUFBTUEsRUFBRUE7O21CQUNUQSxrQ0FBYUEsVUFBdUNBO2dCQXBEeERBO29CQUFDQSxnQkFBU0EsQ0FBQ0EscUJBQVNBLENBQUNBLElBQUlBLENBQUNBO3dCQUN0QkEsV0FBV0EsRUFBQ0EsNkNBQTZDQTt3QkFDekRBLFVBQVVBLEVBQUVBLENBQUNBLGVBQU1BLENBQUNBO3dCQUNwQkEsUUFBUUEsRUFBRUEsVUFBVUE7d0JBQ3BCQSxJQUFJQSxFQUFFQTs0QkFDRkEsZUFBZUEsRUFBRUEsU0FBU0E7NEJBQzFCQSxnQkFBZ0JBLEVBQUVBLFlBQVlBOzRCQUM5QkEsa0JBQWtCQSxFQUFFQSxVQUFVQTs0QkFDOUJBLHVCQUF1QkEsRUFBRUEsZUFBZUE7NEJBQ3hDQSx3QkFBd0JBLEVBQUVBLGdCQUFnQkE7eUJBQzdDQTt3QkFDQUEsU0FBU0EsRUFBRUEsQ0FBQ0EsSUFBSUEsZUFBUUEsQ0FBQ0EsMEJBQWlCQSxFQUFFQSxFQUFDQSxXQUFXQSxFQUFFQSxpQkFBVUEsQ0FBQ0EsY0FBTUEsT0FBQUEsT0FBT0EsRUFBUEEsQ0FBT0EsQ0FBQ0EsRUFBRUEsS0FBS0EsRUFBRUEsSUFBSUEsRUFBQ0EsQ0FBQ0EsQ0FBQ0E7cUJBQ25HQSxFQUFDQTt3QkFDRUEsWUFBWUEsRUFBQ0EsQ0FBQ0E7d0JBQ2RBLFdBQVdBLEVBQUNBLENBQUNBO3dCQUNiQSxXQUFXQSxFQUFDQSxDQUFDQTtxQkFDaEJBLENBQUNBLENBQUNBOzs0QkF5SE5BO2dCQUFEQSxjQUFDQTtZQUFEQSxDQXpJQSxBQXlJQ0EsRUF4SDRCLHFCQUFTLEVBd0hyQztZQXpJRCw2QkF5SUMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL0FpSW5wdXQvQWlJbnB1dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LEVsZW1lbnRSZWYsSW5wdXQsT3V0cHV0LGZvcndhcmRSZWYsUHJvdmlkZXIsSG9zdEJpbmRpbmd9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtDb250cm9sVmFsdWVBY2Nlc3NvcixOR19WQUxVRV9BQ0NFU1NPUn0gZnJvbSAnYW5ndWxhcjIvY29tbW9uJztcbmltcG9ydCB7T2JzZXJ2YWJsZVdyYXBwZXIsRXZlbnRFbWl0dGVyfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2FzeW5jJztcbmltcG9ydCB7QWlDb250cm9sfSBmcm9tICcuLi9BaUNvbnRyb2wvQWlDb250cm9sJztcbmltcG9ydCB7QWlJY29ufSBmcm9tICcuLi9BaUljb24vQWlJY29uJztcblxuQENvbXBvbmVudChBaUNvbnRyb2wubWV0YSh7XG4gICAgdGVtcGxhdGVVcmw6J3BhY2thZ2U6c3JjL2NvbXBvbmVudHMvQWlJbnB1dC9BaUlucHV0Lmh0bWwnLFxuICAgIGRpcmVjdGl2ZXM6IFtBaUljb25dLFxuICAgIHNlbGVjdG9yOiAnYWktaW5wdXQnLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgJ1tjbGFzcy5mb2N1c10nOiAnaXNGb2N1cycsXG4gICAgICAgICdbY2xhc3MudmFsdWVkXSc6ICdoYXNWYWx1ZSgpJyxcbiAgICAgICAgJ1tjbGFzcy5yZWFkb25seV0nOiAncmVhZG9ubHknLFxuICAgICAgICAnW2NsYXNzLmFpLWlucHV0LWxlZnRdJzogJ2hhc0xlZnRJY29uKCknLFxuICAgICAgICAnW2NsYXNzLmFpLWlucHV0LXJpZ2h0XSc6ICdoYXNSaWdodEljb24oKSdcbiAgICB9XG4gICAgLHByb3ZpZGVyczogW25ldyBQcm92aWRlcihOR19WQUxVRV9BQ0NFU1NPUiwge3VzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEFpSW5wdXQpLCBtdWx0aTogdHJ1ZX0pXVxuICAgIH0se1xuICAgICAgICBpZ25vcmVBY3RpdmU6MSxcbiAgICAgICAgaWdub3JlRm9jdXM6MSxcbiAgICAgICAgaWdub3JlSG92ZXI6MVxuICAgIH0pKSAgICBcbmV4cG9ydCBjbGFzcyBBaUlucHV0IGV4dGVuZHMgQWlDb250cm9sIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3J7IFxuICAgIEBJbnB1dCgpIFxuICAgIHZhbHVlOiBzdHJpbmc9Jyc7IFxuICAgIFxuICAgIEBJbnB1dCgpIFxuICAgIHR5cGU6c3RyaW5nPSd0ZXh0JztcblxuICAgIEBJbnB1dCgpIFxuICAgIG1heGxlbmd0aDpudW1iZXI9MjU1O1xuXG4gICAgQElucHV0KCkgXG4gICAgcmVhZG9ubHk6Ym9vbGVhbj1mYWxzZTtcblxuICAgIEBJbnB1dCgpIFxuICAgIGNhbmNlbF9idXR0b246Ym9vbGVhbj1mYWxzZTtcblxuICAgIEBJbnB1dCgpIFxuICAgIHN5bWJvbF9pY29uOnN0cmluZz0nJztcblxuICAgIEBJbnB1dCgpIFxuICAgIGxlZnRfaWNvbjpzdHJpbmc9Jyc7XG5cbiAgICBASW5wdXQoKSBcbiAgICByaWdodF9pY29uOnN0cmluZz0nJztcblxuICAgIEBPdXRwdXQoKVxuICAgIF9jbGlja19yaWdodDogRXZlbnRFbWl0dGVyPGFueT49bmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgQE91dHB1dCgpXG4gICAgX2NsaWNrX2xlZnQ6IEV2ZW50RW1pdHRlcjxhbnk+PW5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIEBPdXRwdXQoKVxuICAgIF9mb2N1c19jaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+PW5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIEBPdXRwdXQoKVxuICAgIF92YWx1ZV9jaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+PW5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIGNvbnN0cnVjdG9yKGVsZTogRWxlbWVudFJlZikgeyAgXG4gICAgICAgIHN1cGVyKGVsZSk7IFxuICAgIH1cblxuICAgIG9uQ2hhbmdlID0gKF8pID0+IHt9O1xuICAgIG9uVG91Y2hlZCA9ICgpID0+IHt9O1xuICAgIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBhbnkpID0+IHZvaWQpOiB2b2lkIHsgdGhpcy5vbkNoYW5nZSA9IGZuOyB9XG4gICAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHsgdGhpcy5vblRvdWNoZWQgPSBmbjsgfVxuICAgIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLnZhbHVlPXZhbHVlP3ZhbHVlOicnO1xuICAgICAgICBcbiAgICB9XG4gIFxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKG51bGwpO1xuICAgIH1cblxuICAgIHVwZGF0ZVZhbHVlKGV2ZW50KSB7XG4gICAgICAgIGlmKGV2ZW50KSB0aGlzLnZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlLnRyaW0oKTtcbiAgICAgICAgaWYodGhpcy5jYW5jZWxfYnV0dG9uKXtcbiAgICAgICAgICAgIGlmKHRoaXMudmFsdWUubGVuZ3RoID4gMClcbiAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0X2ljb249J2NhbmNlbCc7ICAgICAgICAgICAgXG4gICAgICAgICAgICBlbHNlICAgIFxuICAgICAgICAgICAgICAgIHRoaXMucmlnaHRfaWNvbj0nJzsgICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9uQ2hhbmdlKHRoaXMudmFsdWUpO1xuICAgICAgICBPYnNlcnZhYmxlV3JhcHBlci5jYWxsRW1pdCh0aGlzLl92YWx1ZV9jaGFuZ2UsIHRoaXMudmFsdWUpO1xuICAgIH1cblxuICAgIGhhc1ZhbHVlKCl7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlICYmIHRoaXMudmFsdWUubGVuZ3RoID4gMDtcbiAgICB9IFxuICAgIFxuICAgIHNldEhhc0ZvY3VzKGhhc0ZvY3VzOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuaXNGb2N1cz1oYXNGb2N1cztcbiAgICAgICAgT2JzZXJ2YWJsZVdyYXBwZXIuY2FsbEVtaXQodGhpcy5fZm9jdXNfY2hhbmdlLGhhc0ZvY3VzKTtcbiAgICB9XG5cbiAgICBnZXRJbnB1dFRhYkluZGV4KCl7XG4gICAgICAgIGlmKHRoaXMucmVhZG9ubHkpIHJldHVybiAtMTtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFiaW5kZXg7XG4gICAgfVxuXG4gICAgZ2V0TWF4TGVuZ3RoKCl7XG4gICAgICAgIHJldHVybiB0aGlzLm1heGxlbmd0aDtcbiAgICB9ICAgIFxuXG4gICAgZ2V0VHlwZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy50eXBlO1xuICAgIH0gICAgXG5cbiAgICBpc1JlYWRvbmx5KCl7XG4gICAgICAgIHJldHVybiB0aGlzLnJlYWRvbmx5ID8gJ3RydWUnOm51bGw7XG4gICAgfSAgICBcbiAgICBcbiAgICBoYXNMZWZ0SWNvbigpe1xuICAgICAgICByZXR1cm4gdGhpcy5sZWZ0X2ljb24ubGVuZ3RoID4gMDtcbiAgICB9XG5cbiAgICBoYXNSaWdodEljb24oKXtcbiAgICAgICAgcmV0dXJuIHRoaXMucmlnaHRfaWNvbi5sZW5ndGggPiAwO1xuICAgIH1cblxuICAgIGhhc1N5bWJvbEljb24oKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3ltYm9sX2ljb24ubGVuZ3RoID4gMDtcbiAgICB9XG4gXG4gICAgb25MZWZ0Q2xpY2soKXtcbiAgICAgICAgT2JzZXJ2YWJsZVdyYXBwZXIuY2FsbEVtaXQodGhpcy5fY2xpY2tfbGVmdCwgbnVsbCk7XG4gICAgfVxuXG4gICAgb25SaWdodENsaWNrKCl7XG4gICAgICAgIGlmKHRoaXMuY2FuY2VsX2J1dHRvbil7XG4gICAgICAgICAgICB0aGlzLnZhbHVlPScnO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZShudWxsKTtcbiAgICAgICAgICAgIHRyeXtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuY2hpbGROb2Rlc1swXS5mb2N1cygpO1xuICAgICAgICAgICAgfWNhdGNoKGUpe31cbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgICAgICBPYnNlcnZhYmxlV3JhcHBlci5jYWxsRW1pdCh0aGlzLl9jbGlja19yaWdodCwgbnVsbCk7XG4gICAgfVxuIFxufSBcbiAgXG4gICBcbiBcbiAgIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
