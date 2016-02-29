System.register(['angular2/core', 'angular2/src/facade/async', '../AiControl/AiControl', '../AiIcon/AiIcon'], function(exports_1) {
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
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, async_1, AiControl_1, AiIcon_1;
    var AiInput;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
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
                function AiInput(ele, cancel, type, left, right) {
                    _super.call(this, ele);
                    this.left = '';
                    this.right = '';
                    this.value = '';
                    this.maxlength = 255;
                    this.type = 'text';
                    this.readonly = false;
                    this.cancel = false;
                    this.onclickright = new async_1.EventEmitter();
                    this.onclickleft = new async_1.EventEmitter();
                    this.onfocuschange = new async_1.EventEmitter();
                    this.onvalue = new async_1.EventEmitter();
                    if (type != null)
                        this.type = type;
                    if (left != null)
                        this.left = left;
                    if (right != null)
                        this.right = right;
                    if (cancel != null) {
                        this.cancel = true;
                        this.updateCancelIcon();
                    }
                }
                AiInput.prototype.updateCancelIcon = function () {
                    if (this.cancel) {
                        if (this.value.length > 0)
                            this.right = 'cancel';
                        else
                            this.right = '';
                    }
                };
                AiInput.prototype.ngOnChanges = function (_) {
                    this.updateCancelIcon();
                };
                AiInput.prototype.hasValue = function () {
                    return this.value.length > 0;
                };
                AiInput.prototype.updateValue = function (event) {
                    if (event)
                        this.value = event.target.value;
                    this.updateCancelIcon();
                    async_1.ObservableWrapper.callEmit(this.onvalue, this.value);
                };
                AiInput.prototype.setHasFocus = function (hasFocus) {
                    this.isFocus = hasFocus;
                    async_1.ObservableWrapper.callEmit(this.onfocuschange, hasFocus);
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
                AiInput.prototype.onLeftClick = function () {
                    async_1.ObservableWrapper.callEmit(this.onclickleft, null);
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
                        async_1.ObservableWrapper.callEmit(this.onclickright, null);
                };
                AiInput = __decorate([
                    core_1.Component(AiControl_1.AiControl.meta({
                        templateUrl: 'package:src/components/AiInput/AiInput.html',
                        directives: [AiIcon_1.AiIcon],
                        selector: 'ai-input',
                        inputs: ['maxlength', 'readonly', 'value'],
                        outputs: ['onclickleft', 'onclickright', 'onfocuschange', 'onvalue'],
                        host: {
                            '[class.focus]': 'isFocus',
                            '[class.valued]': 'hasValue()',
                            '[class.readonly]': 'readonly',
                            '[class.ai-input-left]': 'isLeftExist()',
                            '[class.ai-input-right]': 'isRightExist()'
                        }
                    }, {
                        ignoreActive: 1,
                        ignoreFocus: 1,
                        ignoreHover: 1
                    })),
                    __param(1, core_1.Attribute("cancel")),
                    __param(2, core_1.Attribute("type")),
                    __param(3, core_1.Attribute("left")),
                    __param(4, core_1.Attribute("right")), 
                    __metadata('design:paramtypes', [core_1.ElementRef, Object, Object, Object, Object])
                ], AiInput);
                return AiInput;
            })(AiControl_1.AiControl);
            exports_1("AiInput", AiInput);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlJbnB1dC9BaUlucHV0LnRzIl0sIm5hbWVzIjpbIkFpSW5wdXQiLCJBaUlucHV0LmNvbnN0cnVjdG9yIiwiQWlJbnB1dC51cGRhdGVDYW5jZWxJY29uIiwiQWlJbnB1dC5uZ09uQ2hhbmdlcyIsIkFpSW5wdXQuaGFzVmFsdWUiLCJBaUlucHV0LnVwZGF0ZVZhbHVlIiwiQWlJbnB1dC5zZXRIYXNGb2N1cyIsIkFpSW5wdXQuZ2V0TWF4TGVuZ3RoIiwiQWlJbnB1dC5nZXRUeXBlIiwiQWlJbnB1dC5pc1JlYWRvbmx5IiwiQWlJbnB1dC5pc0xlZnRFeGlzdCIsIkFpSW5wdXQuaXNSaWdodEV4aXN0IiwiQWlJbnB1dC5vbkxlZnRDbGljayIsIkFpSW5wdXQub25SaWdodENsaWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUtBO2dCQWtCNkJBLDJCQUFTQTtnQkFhbENBLGlCQUFZQSxHQUFlQSxFQUNGQSxNQUFNQSxFQUNSQSxJQUFJQSxFQUNKQSxJQUFJQSxFQUNIQSxLQUFLQTtvQkFFekJDLGtCQUFNQSxHQUFHQSxDQUFDQSxDQUFDQTtvQkFsQmZBLFNBQUlBLEdBQVFBLEVBQUVBLENBQUNBO29CQUNmQSxVQUFLQSxHQUFRQSxFQUFFQSxDQUFDQTtvQkFDaEJBLFVBQUtBLEdBQVNBLEVBQUVBLENBQUNBO29CQUNqQkEsY0FBU0EsR0FBUUEsR0FBR0EsQ0FBQ0E7b0JBQ3JCQSxTQUFJQSxHQUFRQSxNQUFNQSxDQUFDQTtvQkFDbkJBLGFBQVFBLEdBQVNBLEtBQUtBLENBQUNBO29CQUN2QkEsV0FBTUEsR0FBU0EsS0FBS0EsQ0FBQ0E7b0JBQ3JCQSxpQkFBWUEsR0FBb0JBLElBQUlBLG9CQUFZQSxFQUFFQSxDQUFDQTtvQkFDbkRBLGdCQUFXQSxHQUFvQkEsSUFBSUEsb0JBQVlBLEVBQUVBLENBQUNBO29CQUNsREEsa0JBQWFBLEdBQW9CQSxJQUFJQSxvQkFBWUEsRUFBRUEsQ0FBQ0E7b0JB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RUFBQ0EsU0FBU0EsQ0FBQ0E7d0JBQ2hFQSxJQUFJQSxFQUFFQTs0QkFDRkEsZUFBZUEsRUFBRUEsU0FBU0E7NEJBQzFCQSxnQkFBZ0JBLEVBQUVBLFlBQVlBOzRCQUM5QkEsa0JBQWtCQSxFQUFFQSxVQUFVQTs0QkFDOUJBLHVCQUF1QkEsRUFBRUEsZUFBZUE7NEJBQ3hDQSx3QkFBd0JBLEVBQUVBLGdCQUFnQkE7eUJBQzdDQTtxQkFDQUEsRUFBQ0E7d0JBQ0VBLFlBQVlBLEVBQUNBLENBQUNBO3dCQUNkQSxXQUFXQSxFQUFDQSxDQUFDQTt3QkFDYkEsV0FBV0EsRUFBQ0EsQ0FBQ0E7cUJBQ2hCQSxDQUFDQSxDQUFDQTtvQkFlQ0EsV0FBQ0EsZ0JBQVNBLENBQUNBLFFBQVFBLENBQUNBLENBQUFBO29CQUNwQkEsV0FBQ0EsZ0JBQVNBLENBQUNBLE1BQU1BLENBQUNBLENBQUFBO29CQUNsQkEsV0FBQ0EsZ0JBQVNBLENBQUNBLE1BQU1BLENBQUNBLENBQUFBO29CQUNsQkEsV0FBQ0EsZ0JBQVNBLENBQUNBLE9BQU9BLENBQUNBLENBQUFBOzs0QkE2RTFCQTtnQkFBREEsY0FBQ0E7WUFBREEsQ0FoSEEsQUFnSENBLEVBOUY0QixxQkFBUyxFQThGckM7WUFoSEQsNkJBZ0hDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9BaUlucHV0L0FpSW5wdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCxFbGVtZW50UmVmLEF0dHJpYnV0ZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge09ic2VydmFibGVXcmFwcGVyLEV2ZW50RW1pdHRlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9hc3luYyc7XG5pbXBvcnQge0FpQ29udHJvbH0gZnJvbSAnLi4vQWlDb250cm9sL0FpQ29udHJvbCc7XG5pbXBvcnQge0FpSWNvbn0gZnJvbSAnLi4vQWlJY29uL0FpSWNvbic7XG5cbkBDb21wb25lbnQoQWlDb250cm9sLm1ldGEoe1xuICAgIHRlbXBsYXRlVXJsOidwYWNrYWdlOnNyYy9jb21wb25lbnRzL0FpSW5wdXQvQWlJbnB1dC5odG1sJyxcbiAgICBkaXJlY3RpdmVzOiBbQWlJY29uXSxcbiAgICBzZWxlY3RvcjogJ2FpLWlucHV0JyxcbiAgICBpbnB1dHM6WydtYXhsZW5ndGgnLCdyZWFkb25seScsJ3ZhbHVlJ10sXG4gICAgb3V0cHV0czpbJ29uY2xpY2tsZWZ0Jywnb25jbGlja3JpZ2h0Jywnb25mb2N1c2NoYW5nZScsJ29udmFsdWUnXSxcbiAgICBob3N0OiB7XG4gICAgICAgICdbY2xhc3MuZm9jdXNdJzogJ2lzRm9jdXMnLFxuICAgICAgICAnW2NsYXNzLnZhbHVlZF0nOiAnaGFzVmFsdWUoKScsXG4gICAgICAgICdbY2xhc3MucmVhZG9ubHldJzogJ3JlYWRvbmx5JyxcbiAgICAgICAgJ1tjbGFzcy5haS1pbnB1dC1sZWZ0XSc6ICdpc0xlZnRFeGlzdCgpJyxcbiAgICAgICAgJ1tjbGFzcy5haS1pbnB1dC1yaWdodF0nOiAnaXNSaWdodEV4aXN0KCknXG4gICAgfVxuICAgIH0se1xuICAgICAgICBpZ25vcmVBY3RpdmU6MSxcbiAgICAgICAgaWdub3JlRm9jdXM6MSxcbiAgICAgICAgaWdub3JlSG92ZXI6MVxuICAgIH0pKSAgICBcbmV4cG9ydCBjbGFzcyBBaUlucHV0IGV4dGVuZHMgQWlDb250cm9seyBcbiAgICBsZWZ0OnN0cmluZz0nJztcbiAgICByaWdodDpzdHJpbmc9Jyc7XG4gICAgdmFsdWU6IHN0cmluZz0nJzsgXG4gICAgbWF4bGVuZ3RoOm51bWJlcj0yNTU7XG4gICAgdHlwZTpzdHJpbmc9J3RleHQnO1xuICAgIHJlYWRvbmx5OmJvb2xlYW49ZmFsc2U7XG4gICAgY2FuY2VsOmJvb2xlYW49ZmFsc2U7XG4gICAgb25jbGlja3JpZ2h0OiBFdmVudEVtaXR0ZXI8YW55Pj1uZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgb25jbGlja2xlZnQ6IEV2ZW50RW1pdHRlcjxhbnk+PW5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBvbmZvY3VzY2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55Pj1uZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgb252YWx1ZTogRXZlbnRFbWl0dGVyPGFueT49bmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgY29uc3RydWN0b3IoZWxlOiBFbGVtZW50UmVmLFxuICAgICAgICBAQXR0cmlidXRlKFwiY2FuY2VsXCIpIGNhbmNlbCxcbiAgICAgICAgQEF0dHJpYnV0ZShcInR5cGVcIikgdHlwZSxcbiAgICAgICAgQEF0dHJpYnV0ZShcImxlZnRcIikgbGVmdCxcbiAgICAgICAgQEF0dHJpYnV0ZShcInJpZ2h0XCIpIHJpZ2h0XG4gICAgICAgICkgeyAgXG4gICAgICAgIHN1cGVyKGVsZSk7IFxuICAgICAgICBpZih0eXBlICE9IG51bGwpIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgIGlmKGxlZnQgIT0gbnVsbCkgdGhpcy5sZWZ0ID0gbGVmdDtcbiAgICAgICAgaWYocmlnaHQgIT0gbnVsbCkgdGhpcy5yaWdodCA9IHJpZ2h0O1xuICAgICAgICBcbiAgICAgICAgaWYoY2FuY2VsICE9IG51bGwpe1xuICAgICAgICAgICAgdGhpcy5jYW5jZWwgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVDYW5jZWxJY29uKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVDYW5jZWxJY29uKCl7XG4gICAgICAgIGlmKHRoaXMuY2FuY2VsKXtcbiAgICAgICAgICAgIGlmKHRoaXMudmFsdWUubGVuZ3RoID4gMClcbiAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0PSdjYW5jZWwnOyAgICAgICAgICAgIFxuICAgICAgICAgICAgZWxzZSAgICBcbiAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0PScnOyAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoXykge1xuICAgICAgICB0aGlzLnVwZGF0ZUNhbmNlbEljb24oKTtcbiAgICB9XG5cbiAgICBoYXNWYWx1ZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZS5sZW5ndGggPiAwO1xuICAgIH0gXG5cbiAgICB1cGRhdGVWYWx1ZShldmVudCkge1xuICAgICAgICBpZihldmVudCkgdGhpcy52YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgICAgdGhpcy51cGRhdGVDYW5jZWxJY29uKCk7XG4gICAgICAgIE9ic2VydmFibGVXcmFwcGVyLmNhbGxFbWl0KHRoaXMub252YWx1ZSwgdGhpcy52YWx1ZSk7XG4gICAgfVxuICAgIFxuICAgIHNldEhhc0ZvY3VzKGhhc0ZvY3VzOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuaXNGb2N1cz1oYXNGb2N1cztcbiAgICAgICAgT2JzZXJ2YWJsZVdyYXBwZXIuY2FsbEVtaXQodGhpcy5vbmZvY3VzY2hhbmdlLGhhc0ZvY3VzKTtcbiAgICB9XG5cbiAgICBnZXRNYXhMZW5ndGgoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMubWF4bGVuZ3RoO1xuICAgIH0gICAgXG5cbiAgICBnZXRUeXBlKCl7XG4gICAgICAgIHJldHVybiB0aGlzLnR5cGU7XG4gICAgfSAgICBcblxuICAgIGlzUmVhZG9ubHkoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVhZG9ubHkgPyAndHJ1ZSc6bnVsbDtcbiAgICB9ICAgIFxuICAgIFxuICAgIGlzTGVmdEV4aXN0KCl7XG4gICAgICAgIHJldHVybiB0aGlzLmxlZnQubGVuZ3RoID4gMDtcbiAgICB9XG5cbiAgICBpc1JpZ2h0RXhpc3QoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMucmlnaHQubGVuZ3RoID4gMDtcbiAgICB9XG4gXG4gICAgb25MZWZ0Q2xpY2soKXtcbiAgICAgICAgT2JzZXJ2YWJsZVdyYXBwZXIuY2FsbEVtaXQodGhpcy5vbmNsaWNrbGVmdCwgbnVsbCk7XG4gICAgfVxuXG4gICAgb25SaWdodENsaWNrKCl7XG4gICAgICAgIGlmKHRoaXMuY2FuY2VsKXtcbiAgICAgICAgICAgIHRoaXMudmFsdWU9Jyc7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKG51bGwpO1xuICAgICAgICAgICAgdHJ5e1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5jaGlsZE5vZGVzWzBdLmZvY3VzKCk7XG4gICAgICAgICAgICB9Y2F0Y2goZSl7fVxuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIE9ic2VydmFibGVXcmFwcGVyLmNhbGxFbWl0KHRoaXMub25jbGlja3JpZ2h0LCBudWxsKTtcbiAgICB9XG4gXG59IFxuICBcbiAgIFxuIFxuICAiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
