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
                };
                AiInput.prototype.setHasFocus = function (hasFocus) {
                    this.isFocus = hasFocus;
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
                    }
                    else
                        async_1.ObservableWrapper.callEmit(this.onclickright, null);
                };
                AiInput = __decorate([
                    core_1.Component(AiControl_1.AiControl.meta({
                        templateUrl: 'package:src/components/AiInput/AiInput.html',
                        selector: 'ai-input',
                        inputs: ['maxlength', 'readonly', 'value'],
                        outputs: ['onclickleft', 'onclickright'],
                        host: {
                            '[class.focus]': 'isFocus',
                            '[class.valued]': 'hasValue()',
                            '[class.readonly]': 'readonly',
                            '[class.ai-input-left]': 'isLeftExist()',
                            '[class.ai-input-right]': 'isRightExist()'
                        },
                        directives: [AiIcon_1.AiIcon]
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlJbnB1dC9BaUlucHV0LnRzIl0sIm5hbWVzIjpbIkFpSW5wdXQiLCJBaUlucHV0LmNvbnN0cnVjdG9yIiwiQWlJbnB1dC51cGRhdGVDYW5jZWxJY29uIiwiQWlJbnB1dC5uZ09uQ2hhbmdlcyIsIkFpSW5wdXQuaGFzVmFsdWUiLCJBaUlucHV0LnVwZGF0ZVZhbHVlIiwiQWlJbnB1dC5zZXRIYXNGb2N1cyIsIkFpSW5wdXQuZ2V0TWF4TGVuZ3RoIiwiQWlJbnB1dC5nZXRUeXBlIiwiQWlJbnB1dC5pc1JlYWRvbmx5IiwiQWlJbnB1dC5pc0xlZnRFeGlzdCIsIkFpSW5wdXQuaXNSaWdodEV4aXN0IiwiQWlJbnB1dC5vbkxlZnRDbGljayIsIkFpSW5wdXQub25SaWdodENsaWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUtBO2dCQWtCNkJBLDJCQUFTQTtnQkFXbENBLGlCQUFZQSxHQUFlQSxFQUNGQSxNQUFNQSxFQUNSQSxJQUFJQSxFQUNKQSxJQUFJQSxFQUNIQSxLQUFLQTtvQkFFekJDLGtCQUFNQSxHQUFHQSxDQUFDQSxDQUFDQTtvQkFoQmZBLFNBQUlBLEdBQVFBLEVBQUVBLENBQUNBO29CQUNmQSxVQUFLQSxHQUFRQSxFQUFFQSxDQUFDQTtvQkFDaEJBLFVBQUtBLEdBQVNBLEVBQUVBLENBQUNBO29CQUNqQkEsY0FBU0EsR0FBUUEsR0FBR0EsQ0FBQ0E7b0JBQ3JCQSxTQUFJQSxHQUFRQSxNQUFNQSxDQUFDQTtvQkFDbkJBLGFBQVFBLEdBQVNBLEtBQUtBLENBQUNBO29CQUN2QkEsV0FBTUEsR0FBU0EsS0FBS0EsQ0FBQ0E7b0JBQ3JCQSxpQkFBWUEsR0FBb0JBLElBQUlBLG9CQUFZQSxFQUFFQSxDQUFDQTtvQkFDbkRBLGdCQUFXQSxHQUFvQkEsSUFBSUEsb0JBQVlBLEVBQUVBLENBQUNBO29CQVM5Q0EsRUFBRUEsQ0FBQUEsQ0FBQ0EsSUFBSUEsSUFBSUEsSUFBSUEsQ0FBQ0E7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T0FBT0EsQ0FBQ0EsQ0FBQUE7OzRCQXdFMUJBO2dCQUFEQSxjQUFDQTtZQUFEQSxDQXpHQSxBQXlHQ0EsRUF2RjRCLHFCQUFTLEVBdUZyQztZQXpHRCw2QkF5R0MsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL0FpSW5wdXQvQWlJbnB1dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LEVsZW1lbnRSZWYsQXR0cmlidXRlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7T2JzZXJ2YWJsZVdyYXBwZXIsRXZlbnRFbWl0dGVyfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2FzeW5jJztcbmltcG9ydCB7QWlDb250cm9sfSBmcm9tICcuLi9BaUNvbnRyb2wvQWlDb250cm9sJztcbmltcG9ydCB7QWlJY29ufSBmcm9tICcuLi9BaUljb24vQWlJY29uJztcblxuQENvbXBvbmVudChBaUNvbnRyb2wubWV0YSh7XG4gICAgdGVtcGxhdGVVcmw6J3BhY2thZ2U6c3JjL2NvbXBvbmVudHMvQWlJbnB1dC9BaUlucHV0Lmh0bWwnLFxuICAgIHNlbGVjdG9yOiAnYWktaW5wdXQnLFxuICAgIGlucHV0czpbJ21heGxlbmd0aCcsJ3JlYWRvbmx5JywndmFsdWUnXSxcbiAgICBvdXRwdXRzOlsnb25jbGlja2xlZnQnLCdvbmNsaWNrcmlnaHQnXSxcbiAgICBob3N0OiB7XG4gICAgICAgICdbY2xhc3MuZm9jdXNdJzogJ2lzRm9jdXMnLFxuICAgICAgICAnW2NsYXNzLnZhbHVlZF0nOiAnaGFzVmFsdWUoKScsXG4gICAgICAgICdbY2xhc3MucmVhZG9ubHldJzogJ3JlYWRvbmx5JyxcbiAgICAgICAgJ1tjbGFzcy5haS1pbnB1dC1sZWZ0XSc6ICdpc0xlZnRFeGlzdCgpJyxcbiAgICAgICAgJ1tjbGFzcy5haS1pbnB1dC1yaWdodF0nOiAnaXNSaWdodEV4aXN0KCknXG4gICAgfSxcbiAgICBkaXJlY3RpdmVzOiBbQWlJY29uXSAgXG4gICAgfSx7XG4gICAgICAgIGlnbm9yZUFjdGl2ZToxLFxuICAgICAgICBpZ25vcmVGb2N1czoxLFxuICAgICAgICBpZ25vcmVIb3ZlcjoxXG4gICAgfSkpICAgIFxuZXhwb3J0IGNsYXNzIEFpSW5wdXQgZXh0ZW5kcyBBaUNvbnRyb2x7IFxuICAgIGxlZnQ6c3RyaW5nPScnO1xuICAgIHJpZ2h0OnN0cmluZz0nJztcbiAgICB2YWx1ZTogc3RyaW5nPScnOyBcbiAgICBtYXhsZW5ndGg6bnVtYmVyPTI1NTtcbiAgICB0eXBlOnN0cmluZz0ndGV4dCc7XG4gICAgcmVhZG9ubHk6Ym9vbGVhbj1mYWxzZTtcbiAgICBjYW5jZWw6Ym9vbGVhbj1mYWxzZTtcbiAgICBvbmNsaWNrcmlnaHQ6IEV2ZW50RW1pdHRlcjxhbnk+PW5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBvbmNsaWNrbGVmdDogRXZlbnRFbWl0dGVyPGFueT49bmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgY29uc3RydWN0b3IoZWxlOiBFbGVtZW50UmVmLFxuICAgICAgICBAQXR0cmlidXRlKFwiY2FuY2VsXCIpIGNhbmNlbCxcbiAgICAgICAgQEF0dHJpYnV0ZShcInR5cGVcIikgdHlwZSxcbiAgICAgICAgQEF0dHJpYnV0ZShcImxlZnRcIikgbGVmdCxcbiAgICAgICAgQEF0dHJpYnV0ZShcInJpZ2h0XCIpIHJpZ2h0XG4gICAgICAgICkgeyAgXG4gICAgICAgIHN1cGVyKGVsZSk7IFxuICAgICAgICBpZih0eXBlICE9IG51bGwpIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgIGlmKGxlZnQgIT0gbnVsbCkgdGhpcy5sZWZ0ID0gbGVmdDtcbiAgICAgICAgaWYocmlnaHQgIT0gbnVsbCkgdGhpcy5yaWdodCA9IHJpZ2h0O1xuICAgICAgICBcbiAgICAgICAgaWYoY2FuY2VsICE9IG51bGwpe1xuICAgICAgICAgICAgdGhpcy5jYW5jZWwgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVDYW5jZWxJY29uKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVDYW5jZWxJY29uKCl7XG4gICAgICAgIGlmKHRoaXMuY2FuY2VsKXtcbiAgICAgICAgICAgIGlmKHRoaXMudmFsdWUubGVuZ3RoID4gMClcbiAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0PSdjYW5jZWwnOyAgICAgICAgICAgIFxuICAgICAgICAgICAgZWxzZSAgICBcbiAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0PScnOyAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoXykge1xuICAgICAgICB0aGlzLnVwZGF0ZUNhbmNlbEljb24oKTtcbiAgICB9XG5cbiAgICBoYXNWYWx1ZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZS5sZW5ndGggPiAwO1xuICAgIH0gXG5cbiAgICB1cGRhdGVWYWx1ZShldmVudCkge1xuICAgICAgICBpZihldmVudCkgdGhpcy52YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgICAgdGhpcy51cGRhdGVDYW5jZWxJY29uKCk7XG4gICAgfVxuICAgIFxuICAgIHNldEhhc0ZvY3VzKGhhc0ZvY3VzOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuaXNGb2N1cz1oYXNGb2N1cztcbiAgICB9XG5cbiAgICBnZXRNYXhMZW5ndGgoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMubWF4bGVuZ3RoO1xuICAgIH0gICAgXG5cbiAgICBnZXRUeXBlKCl7XG4gICAgICAgIHJldHVybiB0aGlzLnR5cGU7XG4gICAgfSAgICBcblxuICAgIGlzUmVhZG9ubHkoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVhZG9ubHkgPyAndHJ1ZSc6bnVsbDtcbiAgICB9ICAgIFxuICAgIFxuICAgIGlzTGVmdEV4aXN0KCl7XG4gICAgICAgIHJldHVybiB0aGlzLmxlZnQubGVuZ3RoID4gMDtcbiAgICB9XG5cbiAgICBpc1JpZ2h0RXhpc3QoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMucmlnaHQubGVuZ3RoID4gMDtcbiAgICB9XG4gXG4gICAgb25MZWZ0Q2xpY2soKXtcbiAgICAgICAgT2JzZXJ2YWJsZVdyYXBwZXIuY2FsbEVtaXQodGhpcy5vbmNsaWNrbGVmdCwgbnVsbCk7XG4gICAgfVxuXG4gICAgb25SaWdodENsaWNrKCl7XG4gICAgICAgIGlmKHRoaXMuY2FuY2VsKXtcbiAgICAgICAgICAgIHRoaXMudmFsdWU9Jyc7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKG51bGwpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIE9ic2VydmFibGVXcmFwcGVyLmNhbGxFbWl0KHRoaXMub25jbGlja3JpZ2h0LCBudWxsKTtcbiAgICB9XG4gXG59IFxuICBcbiAgIFxuIFxuICAiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
