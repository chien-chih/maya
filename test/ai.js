var ai;
(function (ai) {
    var lettersRegexp = /^[A-Za-z]+$/;
    var LettersOnlyValidator = (function () {
        function LettersOnlyValidator() {
        }
        LettersOnlyValidator.prototype.isAcceptable = function (s) {
            return lettersRegexp.test(s);
        };
        return LettersOnlyValidator;
    })();
    ai.LettersOnlyValidator = LettersOnlyValidator;
    var numberRegexp = /^[0-9]+$/;
    var ZipCodeValidator = (function () {
        function ZipCodeValidator() {
        }
        ZipCodeValidator.prototype.isAcceptable = function (s) {
            return s.length === 5 && numberRegexp.test(s);
        };
        return ZipCodeValidator;
    })();
    ai.ZipCodeValidator = ZipCodeValidator;
})(ai || (ai = {}));

System.register(['angular2/core', 'angular2/src/facade/async', 'angular2/src/facade/lang'], function(exports_1) {
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
    var core_1, async_1, lang_1;
    var MdButton, MdAnchor;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (async_1_1) {
                async_1 = async_1_1;
            },
            function (lang_1_1) {
                lang_1 = lang_1_1;
            }],
        execute: function() {
            // TODO(jelbourn): Ink ripples.
            // TODO(jelbourn): Make the `isMouseDown` stuff done with one global listener.
            MdButton = (function () {
                function MdButton() {
                    /** Whether a mousedown has occurred on this element in the last 100ms. */
                    this.isMouseDown = false;
                    /** Whether the button has focus from the keyboard (not the mouse). Used for class binding. */
                    this.isKeyboardFocused = false;
                }
                MdButton.prototype.onMousedown = function () {
                    var _this = this;
                    // We only *show* the focus style when focus has come to the button via the keyboard.
                    // The Material Design spec is silent on this topic, and without doing this, the
                    // button continues to look :active after clicking.
                    // @see http://marcysutton.com/button-focus-hell/
                    this.isMouseDown = true;
                    async_1.TimerWrapper.setTimeout(function () { _this.isMouseDown = false; }, 100);
                };
                MdButton.prototype.onFocus = function () {
                    this.isKeyboardFocused = !this.isMouseDown;
                };
                MdButton.prototype.onBlur = function () {
                    this.isKeyboardFocused = false;
                };
                MdButton = __decorate([
                    core_1.Component({
                        selector: '[mdButton]:not(a), [mdFab]:not(a), [mdRaisedButton]:not(a)',
                        host: {
                            '(mousedown)': 'onMousedown()',
                            '(focus)': 'onFocus()',
                            '(blur)': 'onBlur()',
                            '[class.md-button-focus]': 'isKeyboardFocused',
                        },
                    }),
                    core_1.View({
                        templateUrl: 'package:angular2_material/src/components/button/button.html',
                        styleUrls: ['package:angular2_material/src/components/button/button.css'],
                        encapsulation: core_1.ViewEncapsulation.None,
                    }), 
                    __metadata('design:paramtypes', [])
                ], MdButton);
                return MdButton;
            })();
            exports_1("MdButton", MdButton);
            MdAnchor = (function (_super) {
                __extends(MdAnchor, _super);
                function MdAnchor() {
                    _super.apply(this, arguments);
                }
                Object.defineProperty(MdAnchor.prototype, "disabled", {
                    get: function () {
                        return this.disabled_;
                    },
                    set: function (value) {
                        // The presence of *any* disabled value makes the component disabled, *except* for false.
                        this.disabled_ = lang_1.isPresent(value) && this.disabled !== false;
                    },
                    enumerable: true,
                    configurable: true
                });
                MdAnchor.prototype.onClick = function (event) {
                    // A disabled anchor shouldn't navigate anywhere.
                    if (this.disabled) {
                        event.preventDefault();
                    }
                };
                /** Invoked when a change is detected. */
                MdAnchor.prototype.ngOnChanges = function (_) {
                    // A disabled anchor should not be in the tab flow.
                    this.tabIndex = this.disabled ? -1 : 0;
                };
                Object.defineProperty(MdAnchor.prototype, "isAriaDisabled", {
                    /** Gets the aria-disabled value for the component, which must be a string for Dart. */
                    get: function () {
                        return this.disabled ? 'true' : 'false';
                    },
                    enumerable: true,
                    configurable: true
                });
                MdAnchor = __decorate([
                    core_1.Component({
                        selector: 'a[mdButton], a[mdRaisedButton], a[mdFab]',
                        inputs: ['disabled'],
                        host: {
                            '(click)': 'onClick($event)',
                            '(mousedown)': 'onMousedown()',
                            '(focus)': 'onFocus()',
                            '(blur)': 'onBlur()',
                            '[tabIndex]': 'tabIndex',
                            '[class.md-button-focus]': 'isKeyboardFocused',
                            '[attr.aria-disabled]': 'isAriaDisabled',
                        },
                    }),
                    core_1.View({
                        templateUrl: 'package:angular2_material/src/components/button/button.html',
                        encapsulation: core_1.ViewEncapsulation.None
                    }), 
                    __metadata('design:paramtypes', [])
                ], MdAnchor);
                return MdAnchor;
            })(MdButton);
            exports_1("MdAnchor", MdAnchor);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFpLnRzIiwiYnV0dG9uMi9idXR0b24udHMiXSwibmFtZXMiOlsiYWkiLCJhaS5MZXR0ZXJzT25seVZhbGlkYXRvciIsImFpLkxldHRlcnNPbmx5VmFsaWRhdG9yLmNvbnN0cnVjdG9yIiwiYWkuTGV0dGVyc09ubHlWYWxpZGF0b3IuaXNBY2NlcHRhYmxlIiwiYWkuWmlwQ29kZVZhbGlkYXRvciIsImFpLlppcENvZGVWYWxpZGF0b3IuY29uc3RydWN0b3IiLCJhaS5aaXBDb2RlVmFsaWRhdG9yLmlzQWNjZXB0YWJsZSIsIk1kQnV0dG9uIiwiTWRCdXR0b24uY29uc3RydWN0b3IiLCJNZEJ1dHRvbi5vbk1vdXNlZG93biIsIk1kQnV0dG9uLm9uRm9jdXMiLCJNZEJ1dHRvbi5vbkJsdXIiLCJNZEFuY2hvciIsIk1kQW5jaG9yLmNvbnN0cnVjdG9yIiwiTWRBbmNob3IuZGlzYWJsZWQiLCJNZEFuY2hvci5vbkNsaWNrIiwiTWRBbmNob3IubmdPbkNoYW5nZXMiLCJNZEFuY2hvci5pc0FyaWFEaXNhYmxlZCJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBTyxFQUFFLENBcUJSO0FBckJELFdBQU8sRUFBRSxFQUFBLENBQUM7SUFLTkEsSUFBSUEsYUFBYUEsR0FBR0EsYUFBYUEsQ0FBQ0E7SUFFbENBO1FBQUFDO1FBSUFDLENBQUNBO1FBSEdELDJDQUFZQSxHQUFaQSxVQUFhQSxDQUFTQTtZQUNsQkUsTUFBTUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDakNBLENBQUNBO1FBQ0xGLDJCQUFDQTtJQUFEQSxDQUpBRCxBQUlDQyxJQUFBRDtJQUpZQSx1QkFBb0JBLHVCQUloQ0EsQ0FBQUE7SUFFR0EsSUFBSUEsWUFBWUEsR0FBR0EsVUFBVUEsQ0FBQ0E7SUFFbENBO1FBQUFJO1FBSUFDLENBQUNBO1FBSEdELHVDQUFZQSxHQUFaQSxVQUFhQSxDQUFTQTtZQUNsQkUsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsTUFBTUEsS0FB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QSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtnQkFDekNBLENBQUNBO2dCQUdESixzQkFBSUEsb0NBQWNBO29CQURsQkEsdUZBQXVGQTt5QkFDdkZBO3dCQUNFSyxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxNQUFNQSxHQUFHQSxPQUFPQSxDQUFDQTtvQkFDMUNBLENBQUNBOzs7bUJBQUFMO2dCQTlDSEE7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDVEEsUUFBUUEsRUFBRUEsMENBQTBDQTt3QkFDcERBLE1BQU1BLEVBQUVBLENBQUNBLFVBQVVBLENBQUNBO3dCQUNwQkEsSUFBSUEsRUFBRUE7NEJBQ0pBLFNBQVNBLEVBQUVBLGlCQUFpQkE7NEJBQzVCQSxhQUFhQSxFQUFFQSxlQUFlQTs0QkFDOUJBLFNBQVNBLEVBQUVBLFdBQVdBOzRCQUN0QkEsUUFBUUEsRUFBRUEsVUFBVUE7NEJBQ3BCQSxZQUFZQSxFQUFFQSxVQUFVQTs0QkFDeEJBLHlCQUF5QkEsRUFBRUEsbUJBQW1CQTs0QkFDOUNBLHNCQUFzQkEsRUFBRUEsZ0JBQWdCQTt5QkFDekNBO3FCQUNGQSxDQUFDQTtvQkFDREEsV0FBSUEsQ0FBQ0E7d0JBQ0pBLFdBQVdBLEVBQUVBLDZEQUE2REE7d0JBQzFFQSxhQUFhQSxFQUFFQSx3QkFBaUJBLENBQUNBLElBQUlBO3FCQUN0Q0EsQ0FBQ0E7OzZCQStCREE7Z0JBQURBLGVBQUNBO1lBQURBLENBL0NBLEFBK0NDQSxFQTlCNkIsUUFBUSxFQThCckM7WUEvQ0QsK0JBK0NDLENBQUEiLCJmaWxlIjoiYWkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUgYWl7XG4gICAgZXhwb3J0IGludGVyZmFjZSBTdHJpbmdWYWxpZGF0b3Ige1xuICAgICAgICBpc0FjY2VwdGFibGUoczogc3RyaW5nKTogYm9vbGVhbjtcbiAgICB9ICAgIFxuICAgIFxuICAgIHZhciBsZXR0ZXJzUmVnZXhwID0gL15bQS1aYS16XSskLztcblxuICAgIGV4cG9ydCBjbGFzcyBMZXR0ZXJzT25seVZhbGlkYXRvciBpbXBsZW1lbnRzIFN0cmluZ1ZhbGlkYXRvciB7XG4gICAgICAgIGlzQWNjZXB0YWJsZShzOiBzdHJpbmcpIHsgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIGxldHRlcnNSZWdleHAudGVzdChzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAgICAgdmFyIG51bWJlclJlZ2V4cCA9IC9eWzAtOV0rJC87XG5cbiAgICBleHBvcnQgY2xhc3MgWmlwQ29kZVZhbGlkYXRvciBpbXBsZW1lbnRzIFN0cmluZ1ZhbGlkYXRvciB7XG4gICAgICAgIGlzQWNjZXB0YWJsZShzOiBzdHJpbmcpIHsgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHMubGVuZ3RoID09PSA1ICYmIG51bWJlclJlZ2V4cC50ZXN0KHMpO1xuICAgICAgICB9XG4gICAgfVxuXG59XG5cbiIsImltcG9ydCB7Q29tcG9uZW50LCBWaWV3LCBWaWV3RW5jYXBzdWxhdGlvbiwgT25DaGFuZ2VzfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcblxuaW1wb3J0IHtUaW1lcldyYXBwZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvYXN5bmMnO1xuaW1wb3J0IHtpc1ByZXNlbnR9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZyc7XG4gXG5cbi8vIFRPRE8oamVsYm91cm4pOiBJbmsgcmlwcGxlcy5cbi8vIFRPRE8oamVsYm91cm4pOiBNYWtlIHRoZSBgaXNNb3VzZURvd25gIHN0dWZmIGRvbmUgd2l0aCBvbmUgZ2xvYmFsIGxpc3RlbmVyLlxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdbbWRCdXR0b25dOm5vdChhKSwgW21kRmFiXTpub3QoYSksIFttZFJhaXNlZEJ1dHRvbl06bm90KGEpJyxcbiAgaG9zdDoge1xuICAgICcobW91c2Vkb3duKSc6ICdvbk1vdXNlZG93bigpJyxcbiAgICAnKGZvY3VzKSc6ICdvbkZvY3VzKCknLFxuICAgICcoYmx1ciknOiAnb25CbHVyKCknLFxuICAgICdbY2xhc3MubWQtYnV0dG9uLWZvY3VzXSc6ICdpc0tleWJvYXJkRm9jdXNlZCcsXG4gIH0sXG59KVxuQFZpZXcoe1xuICB0ZW1wbGF0ZVVybDogJ3BhY2thZ2U6YW5ndWxhcjJfbWF0ZXJpYWwvc3JjL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3BhY2thZ2U6YW5ndWxhcjJfbWF0ZXJpYWwvc3JjL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5jc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgTWRCdXR0b24ge1xuICAvKiogV2hldGhlciBhIG1vdXNlZG93biBoYXMgb2NjdXJyZWQgb24gdGhpcyBlbGVtZW50IGluIHRoZSBsYXN0IDEwMG1zLiAqL1xuICBpc01vdXNlRG93bjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKiBXaGV0aGVyIHRoZSBidXR0b24gaGFzIGZvY3VzIGZyb20gdGhlIGtleWJvYXJkIChub3QgdGhlIG1vdXNlKS4gVXNlZCBmb3IgY2xhc3MgYmluZGluZy4gKi9cbiAgaXNLZXlib2FyZEZvY3VzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBvbk1vdXNlZG93bigpIHtcbiAgICAvLyBXZSBvbmx5ICpzaG93KiB0aGUgZm9jdXMgc3R5bGUgd2hlbiBmb2N1cyBoYXMgY29tZSB0byB0aGUgYnV0dG9uIHZpYSB0aGUga2V5Ym9hcmQuXG4gICAgLy8gVGhlIE1hdGVyaWFsIERlc2lnbiBzcGVjIGlzIHNpbGVudCBvbiB0aGlzIHRvcGljLCBhbmQgd2l0aG91dCBkb2luZyB0aGlzLCB0aGVcbiAgICAvLyBidXR0b24gY29udGludWVzIHRvIGxvb2sgOmFjdGl2ZSBhZnRlciBjbGlja2luZy5cbiAgICAvLyBAc2VlIGh0dHA6Ly9tYXJjeXN1dHRvbi5jb20vYnV0dG9uLWZvY3VzLWhlbGwvXG4gICAgdGhpcy5pc01vdXNlRG93biA9IHRydWU7XG4gICAgVGltZXJXcmFwcGVyLnNldFRpbWVvdXQoKCkgPT4ge3RoaXMuaXNNb3VzZURvd24gPSBmYWxzZX0sIDEwMCk7XG4gIH1cblxuICBvbkZvY3VzKCkge1xuICAgIHRoaXMuaXNLZXlib2FyZEZvY3VzZWQgPSAhdGhpcy5pc01vdXNlRG93bjtcbiAgfVxuXG4gIG9uQmx1cigpIHtcbiAgICB0aGlzLmlzS2V5Ym9hcmRGb2N1c2VkID0gZmFsc2U7XG4gIH1cbn1cblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhW21kQnV0dG9uXSwgYVttZFJhaXNlZEJ1dHRvbl0sIGFbbWRGYWJdJyxcbiAgaW5wdXRzOiBbJ2Rpc2FibGVkJ10sXG4gIGhvc3Q6IHtcbiAgICAnKGNsaWNrKSc6ICdvbkNsaWNrKCRldmVudCknLFxuICAgICcobW91c2Vkb3duKSc6ICdvbk1vdXNlZG93bigpJyxcbiAgICAnKGZvY3VzKSc6ICdvbkZvY3VzKCknLFxuICAgICcoYmx1ciknOiAnb25CbHVyKCknLFxuICAgICdbdGFiSW5kZXhdJzogJ3RhYkluZGV4JyxcbiAgICAnW2NsYXNzLm1kLWJ1dHRvbi1mb2N1c10nOiAnaXNLZXlib2FyZEZvY3VzZWQnLFxuICAgICdbYXR0ci5hcmlhLWRpc2FibGVkXSc6ICdpc0FyaWFEaXNhYmxlZCcsXG4gIH0sXG59KVxuQFZpZXcoe1xuICB0ZW1wbGF0ZVVybDogJ3BhY2thZ2U6YW5ndWxhcjJfbWF0ZXJpYWwvc3JjL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5odG1sJyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBNZEFuY2hvciBleHRlbmRzIE1kQnV0dG9uIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgdGFiSW5kZXg6IG51bWJlcjtcbiAgZGlzYWJsZWRfOiBib29sZWFuO1xuXG4gIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5kaXNhYmxlZF87XG4gIH1cblxuICBzZXQgZGlzYWJsZWQodmFsdWUpIHtcbiAgICAvLyBUaGUgcHJlc2VuY2Ugb2YgKmFueSogZGlzYWJsZWQgdmFsdWUgbWFrZXMgdGhlIGNvbXBvbmVudCBkaXNhYmxlZCwgKmV4Y2VwdCogZm9yIGZhbHNlLlxuICAgIHRoaXMuZGlzYWJsZWRfID0gaXNQcmVzZW50KHZhbHVlKSAmJiB0aGlzLmRpc2FibGVkICE9PSBmYWxzZTtcbiAgfVxuXG4gIG9uQ2xpY2soZXZlbnQpIHtcbiAgICAvLyBBIGRpc2FibGVkIGFuY2hvciBzaG91bGRuJ3QgbmF2aWdhdGUgYW55d2hlcmUuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEludm9rZWQgd2hlbiBhIGNoYW5nZSBpcyBkZXRlY3RlZC4gKi9cbiAgbmdPbkNoYW5nZXMoXykge1xuICAgIC8vIEEgZGlzYWJsZWQgYW5jaG9yIHNob3VsZCBub3QgYmUgaW4gdGhlIHRhYiBmbG93LlxuICAgIHRoaXMudGFiSW5kZXggPSB0aGlzLmRpc2FibGVkID8gLTEgOiAwO1xuICB9XG5cbiAgLyoqIEdldHMgdGhlIGFyaWEtZGlzYWJsZWQgdmFsdWUgZm9yIHRoZSBjb21wb25lbnQsIHdoaWNoIG11c3QgYmUgYSBzdHJpbmcgZm9yIERhcnQuICovXG4gIGdldCBpc0FyaWFEaXNhYmxlZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmRpc2FibGVkID8gJ3RydWUnIDogJ2ZhbHNlJztcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
module.exports =ai