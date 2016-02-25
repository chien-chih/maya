System.register(['angular2/core', '../AiSection/AiSection'], function(exports_1) {
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
    var core_1, AiSection_1;
    var AiInput;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (AiSection_1_1) {
                AiSection_1 = AiSection_1_1;
            }],
        execute: function() {
            AiInput = (function (_super) {
                __extends(AiInput, _super);
                // Events emitted by this directive. We use these special 'md-' events to communicate
                // to the parent MdInputContainer.
                //mdChange: EventEmitter<any>;
                //mdFocusChange: EventEmitter<any>;
                function AiInput(ele, textarea, value) {
                    _super.call(this, ele);
                    this.textareaMode = false;
                    this.showCounter = false;
                    this.maxLength = 255;
                    this.type = 'text';
                    this.readonly = false;
                    if (textarea != null)
                        this.textareaMode = true;
                    this.value = value == null ? '' : value;
                }
                AiInput.prototype.hasValue = function () {
                    return this.value.length > 0;
                };
                AiInput.prototype.ngOnChanges = function (_) {
                    this.updateCounter();
                };
                AiInput.prototype.updateValue = function (event) {
                    this.value = event.target.value;
                    this.updateCounter();
                    this.error = '';
                };
                AiInput.prototype.updateCounter = function () {
                    if (this.showCounter) {
                        this.word = this.value.length + "/" + this.maxLength;
                    }
                };
                AiInput.prototype.setHasFocus = function (hasFocus) {
                    this.isFocus = hasFocus;
                    if (!hasFocus)
                        this.validate(this.value);
                };
                AiInput.prototype.getMaxLength = function () {
                    return this.maxLength;
                };
                AiInput.prototype.getType = function () {
                    return this.type;
                };
                AiInput.prototype.isReadonly = function () {
                    return this.readonly ? 'true' : null;
                };
                AiInput = __decorate([
                    core_1.Component(AiSection_1.AiSection.meta({
                        templateUrl: 'package:src/components/AiInput/AiInput.html',
                        selector: 'ai-input',
                        inputs: ['showCounter', 'maxLength', 'type', 'readonly'],
                        host: {
                            '[class.focus]': 'isFocus',
                            '[class.valued]': 'hasValue()',
                            '[class.readonly]': 'readonly',
                        },
                    }, {
                        ignoreActive: 1,
                        ignoreFocus: 1,
                        ignoreHover: 1
                    })),
                    __param(1, core_1.Attribute('textarea')),
                    __param(2, core_1.Attribute('value')), 
                    __metadata('design:paramtypes', [core_1.ElementRef, String, String])
                ], AiInput);
                return AiInput;
            })(AiSection_1.AiSection);
            exports_1("AiInput", AiInput);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlJbnB1dC9BaUlucHV0LnRzIl0sIm5hbWVzIjpbIkFpSW5wdXQiLCJBaUlucHV0LmNvbnN0cnVjdG9yIiwiQWlJbnB1dC5oYXNWYWx1ZSIsIkFpSW5wdXQubmdPbkNoYW5nZXMiLCJBaUlucHV0LnVwZGF0ZVZhbHVlIiwiQWlJbnB1dC51cGRhdGVDb3VudGVyIiwiQWlJbnB1dC5zZXRIYXNGb2N1cyIsIkFpSW5wdXQuZ2V0TWF4TGVuZ3RoIiwiQWlJbnB1dC5nZXRUeXBlIiwiQWlJbnB1dC5pc1JlYWRvbmx5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUlBO2dCQWU2QkEsMkJBQVNBO2dCQVFsQ0EscUZBQXFGQTtnQkFDckZBLGtDQUFrQ0E7Z0JBQ2xDQSw4QkFBOEJBO2dCQUM5QkEsbUNBQW1DQTtnQkFFbkNBLGlCQUFZQSxHQUFlQSxFQUF3QkEsUUFBZ0JBLEVBQXFCQSxLQUFhQTtvQkFDakdDLGtCQUFNQSxHQUFHQSxDQUFDQSxDQUFDQTtvQkFiZkEsaUJBQVlBLEdBQVNBLEtBQUtBLENBQUNBO29CQUUzQkEsZ0JBQVdBLEdBQVNBLEtBQUtBLENBQUNBO29CQUMxQkEsY0FBU0EsR0FBUUEsR0FBR0EsQ0FBQ0E7b0JBQ3JCQSxTQUFJQSxHQUFRQSxNQUFNQSxDQUFDQTtvQkFDbkJBLGFBQVFBLEdBQVNBLEtBQUtBLENBQUNBO29CQVNuQkEsRUFBRUEsQ0FBQUEsQ0FBQ0EsUUFBUUEsSUFBSUEsSUFBSUEsQ0FBQ0E7d0JBQUNBLElBQUlBLENBQUNBLFlBQVlBLEdBQUNBLElBQUlBLENBQUNBO29CQUM1Q0EsSUFBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsS0FBS0EsSUFBSUEsSUFBSUEsR0FBR0EsRUFBRUEsR0FBR0EsS0FBS0EsQ0FBQ0E7Z0JBQzVDQSxDQUFDQTtnQkFFREQsMEJBQVFBLEdBQVJBO29CQUNJRSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxNQUFNQSxHQUFHQSxDQUFDQSxDQUFDQTtnQkFDakNBLENBQUNBO2dCQUVERiw2QkFBV0EsR0FBWEEsVUFBWUEsQ0FBQ0E7b0JBQ1RHLElBQUlBLENBQUNBLGFBQWFBLEVBQUVBLENBQUNBO2dCQUN6QkEsQ0FBQ0E7Z0JBQ0RILDZCQUFXQSxHQUFYQSxVQUFZQSxLQUFLQTtvQkFDYkksSUFBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsS0FBS0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsS0FBS0EsQ0FBQ0E7b0JBQ2hDQSxJQUFJQSxDQUFDQSxhQUFhQSxFQUFFQSxDQUFDQTtvQkFDckJBLElBQUlBLENBQUNBLEtBQUtBLEdBQUNBLEVBQUVBLENBQUNBO2dCQUNsQkEsQ0FBQ0E7Z0JBRURKLCtCQUFhQSxHQUFiQTtvQkFDSUssRUFBRUEsQ0FBQUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsQ0FBQUEsQ0FBQ0E7d0JBQ2pCQSxJQUFJQSxDQUFDQSxJQUFJQSxHQUFFQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxNQUFNQSxHQUFHQSxHQUFHQSxHQUFHQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQTtvQkFDeERBLENBQUNBO2dCQUNMQSxDQUFDQTtnQkFFREwsNkJBQVdBLEdBQVhBLFVBQVlBLFFBQWlCQTtvQkFDekJNLElBQUlBLENBQUNBLE9BQU9BLEdBQUNBLFFBQVFBLENBQUNBO29CQUN0QkEsRUFBRUEsQ0FBQUEsQ0FBQ0EsQ0FBQ0EsUUFBUUEsQ0FBQ0E7d0JBQ1RBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO2dCQUNsQ0EsQ0FBQ0E7Z0JBRUROLDhCQUFZQSxHQUFaQTtvQkFDSU8sTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0E7Z0JBQzFCQSxDQUFDQTtnQkFFRFAseUJBQU9BLEdBQVBBO29CQUNJUSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQTtnQkFDckJBLENBQUNBO2dCQUVEUiw0QkFBVUEsR0FBVkE7b0JBQ0lTLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLEdBQUdBLE1BQU1BLEdBQUNBLElBQUlBLENBQUNBO2dCQUN2Q0EsQ0FBQ0E7Z0JBckVMVDtvQkFBQ0EsZ0JBQVNBLENBQUNBLHFCQUFTQSxDQUFDQSxJQUFJQSxDQUFDQTt3QkFDbEJBLFdBQVdBLEVBQUNBLDZDQUE2Q0E7d0JBQ3pEQSxRQUFRQSxFQUFFQSxVQUFVQTt3QkFDcEJBLE1BQU1BLEVBQUNBLENBQUNBLGFBQWFBLEVBQUNBLFdBQVdBLEVBQUNBLE1BQU1BLEVBQUNBLFVBQVVBLENBQUNBO3dCQUNwREEsSUFBSUEsRUFBRUE7NEJBQ0ZBLGVBQWVBLEVBQUVBLFNBQVNBOzRCQUMxQkEsZ0JBQWdCQSxFQUFFQSxZQUFZQTs0QkFDOUJBLGtCQUFrQkEsRUFBRUEsVUFBVUE7eUJBQ2pDQTtxQkFDSkEsRUFBQ0E7d0JBQ0VBLFlBQVlBLEVBQUNBLENBQUNBO3dCQUNkQSxXQUFXQSxFQUFDQSxDQUFDQTt3QkFDYkEsV0FBV0EsRUFBQ0EsQ0FBQ0E7cUJBQ2hCQSxDQUNKQSxDQUFDQTtvQkFjOEJBLFdBQUNBLGdCQUFTQSxDQUFDQSxVQUFVQSxDQUFDQSxDQUFBQTtvQkFBa0JBLFdBQUNBLGdCQUFTQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFBQTs7NEJBMkMxRkE7Z0JBQURBLGNBQUNBO1lBQURBLENBdkVBLEFBdUVDQSxFQXhENEIscUJBQVMsRUF3RHJDO1lBdkVELDZCQXVFQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvQWlJbnB1dC9BaUlucHV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsRWxlbWVudFJlZixBdHRyaWJ1dGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtPYnNlcnZhYmxlV3JhcHBlciwgRXZlbnRFbWl0dGVyfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2FzeW5jJztcbmltcG9ydCB7QWlTZWN0aW9ufSBmcm9tICcuLi9BaVNlY3Rpb24vQWlTZWN0aW9uJztcblxuQENvbXBvbmVudChBaVNlY3Rpb24ubWV0YSh7XG4gICAgICAgIHRlbXBsYXRlVXJsOidwYWNrYWdlOnNyYy9jb21wb25lbnRzL0FpSW5wdXQvQWlJbnB1dC5odG1sJyxcbiAgICAgICAgc2VsZWN0b3I6ICdhaS1pbnB1dCcsXG4gICAgICAgIGlucHV0czpbJ3Nob3dDb3VudGVyJywnbWF4TGVuZ3RoJywndHlwZScsJ3JlYWRvbmx5J10sXG4gICAgICAgIGhvc3Q6IHtcbiAgICAgICAgICAgICdbY2xhc3MuZm9jdXNdJzogJ2lzRm9jdXMnLFxuICAgICAgICAgICAgJ1tjbGFzcy52YWx1ZWRdJzogJ2hhc1ZhbHVlKCknLFxuICAgICAgICAgICAgJ1tjbGFzcy5yZWFkb25seV0nOiAncmVhZG9ubHknLFxuICAgICAgICB9LCAgICAgICBcbiAgICB9LHtcbiAgICAgICAgaWdub3JlQWN0aXZlOjEsXG4gICAgICAgIGlnbm9yZUZvY3VzOjEsXG4gICAgICAgIGlnbm9yZUhvdmVyOjFcbiAgICB9XG4pKSAgICBcbmV4cG9ydCBjbGFzcyBBaUlucHV0IGV4dGVuZHMgQWlTZWN0aW9uIHsgXG4gICAgdGV4dGFyZWFNb2RlOmJvb2xlYW49ZmFsc2U7XG4gICAgdmFsdWU6IHN0cmluZzsgXG4gICAgc2hvd0NvdW50ZXI6Ym9vbGVhbj1mYWxzZTtcbiAgICBtYXhMZW5ndGg6bnVtYmVyPTI1NTtcbiAgICB0eXBlOnN0cmluZz0ndGV4dCc7XG4gICAgcmVhZG9ubHk6Ym9vbGVhbj1mYWxzZTtcblxuICAgIC8vIEV2ZW50cyBlbWl0dGVkIGJ5IHRoaXMgZGlyZWN0aXZlLiBXZSB1c2UgdGhlc2Ugc3BlY2lhbCAnbWQtJyBldmVudHMgdG8gY29tbXVuaWNhdGVcbiAgICAvLyB0byB0aGUgcGFyZW50IE1kSW5wdXRDb250YWluZXIuXG4gICAgLy9tZENoYW5nZTogRXZlbnRFbWl0dGVyPGFueT47XG4gICAgLy9tZEZvY3VzQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgXG4gICAgY29uc3RydWN0b3IoZWxlOiBFbGVtZW50UmVmLEBBdHRyaWJ1dGUoJ3RleHRhcmVhJykgdGV4dGFyZWE6IHN0cmluZyxAQXR0cmlidXRlKCd2YWx1ZScpIHZhbHVlOiBzdHJpbmcpIHsgXG4gICAgICAgIHN1cGVyKGVsZSk7XG4gICAgICAgIGlmKHRleHRhcmVhICE9IG51bGwpIHRoaXMudGV4dGFyZWFNb2RlPXRydWU7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZSA9PSBudWxsID8gJycgOiB2YWx1ZTtcbiAgICB9XG5cbiAgICBoYXNWYWx1ZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZS5sZW5ndGggPiAwO1xuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKF8pIHtcbiAgICAgICAgdGhpcy51cGRhdGVDb3VudGVyKCk7XG4gICAgfVxuICAgIHVwZGF0ZVZhbHVlKGV2ZW50KSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgICAgIHRoaXMudXBkYXRlQ291bnRlcigpO1xuICAgICAgICB0aGlzLmVycm9yPScnO1xuICAgIH1cbiAgICBcbiAgICB1cGRhdGVDb3VudGVyKCl7XG4gICAgICAgIGlmKHRoaXMuc2hvd0NvdW50ZXIpe1xuICAgICAgICAgICAgdGhpcy53b3JkPSB0aGlzLnZhbHVlLmxlbmd0aCArIFwiL1wiICsgdGhpcy5tYXhMZW5ndGg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgc2V0SGFzRm9jdXMoaGFzRm9jdXM6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5pc0ZvY3VzPWhhc0ZvY3VzO1xuICAgICAgICBpZighaGFzRm9jdXMpXG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRlKHRoaXMudmFsdWUpO1xuICAgIH1cblxuICAgIGdldE1heExlbmd0aCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5tYXhMZW5ndGg7XG4gICAgfSAgICBcblxuICAgIGdldFR5cGUoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgICB9ICAgIFxuXG4gICAgaXNSZWFkb25seSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5yZWFkb25seSA/ICd0cnVlJzpudWxsO1xuICAgIH0gICAgXG5cbn0gXG4gIFxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9