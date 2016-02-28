System.register(['angular2/core', '../AiControl/AiControl'], function(exports_1) {
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
    var core_1, AiControl_1;
    var AiInput;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (AiControl_1_1) {
                AiControl_1 = AiControl_1_1;
            }],
        execute: function() {
            AiInput = (function (_super) {
                __extends(AiInput, _super);
                function AiInput(ele) {
                    _super.call(this, ele);
                    this.left = '';
                    this.right = '';
                    this.value = "";
                    this.maxLength = 255;
                    this.type = 'text';
                    this.readonly = false;
                }
                AiInput.prototype.hasValue = function () {
                    return this.value.length > 0;
                };
                AiInput.prototype.updateValue = function (event) {
                    this.value = event.target.value;
                };
                AiInput.prototype.setHasFocus = function (hasFocus) {
                    this.isFocus = hasFocus;
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
                AiInput.prototype.isLeftExist = function () {
                    return this.left.length > 0;
                };
                AiInput.prototype.isRightExist = function () {
                    return this.right.length > 0;
                };
                AiInput = __decorate([
                    core_1.Component(AiControl_1.AiControl.meta({
                        templateUrl: 'package:src/components/AiInput/AiInput.html',
                        selector: 'ai-input',
                        inputs: ['maxLength', 'type', 'readonly', 'value', 'left', 'right'],
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
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], AiInput);
                return AiInput;
            })(AiControl_1.AiControl);
            exports_1("AiInput", AiInput);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlJbnB1dC9BaUlucHV0LnRzIl0sIm5hbWVzIjpbIkFpSW5wdXQiLCJBaUlucHV0LmNvbnN0cnVjdG9yIiwiQWlJbnB1dC5oYXNWYWx1ZSIsIkFpSW5wdXQudXBkYXRlVmFsdWUiLCJBaUlucHV0LnNldEhhc0ZvY3VzIiwiQWlJbnB1dC5nZXRNYXhMZW5ndGgiLCJBaUlucHV0LmdldFR5cGUiLCJBaUlucHV0LmlzUmVhZG9ubHkiLCJBaUlucHV0LmlzTGVmdEV4aXN0IiwiQWlJbnB1dC5pc1JpZ2h0RXhpc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBSUE7Z0JBZ0I2QkEsMkJBQVNBO2dCQVFsQ0EsaUJBQVlBLEdBQWVBO29CQUN2QkMsa0JBQU1BLEdBQUdBLENBQUNBLENBQUNBO29CQVJmQSxTQUFJQSxHQUFRQSxFQUFFQSxDQUFDQTtvQkFDZkEsVUFBS0EsR0FBUUEsRUFBRUEsQ0FBQ0E7b0JBQ2hCQSxVQUFLQSxHQUFTQSxFQUFFQSxDQUFDQTtvQkFDakJBLGNBQVNBLEdBQVFBLEdBQUdBLENBQUNBO29CQUNyQkEsU0FBSUEsR0FBUUEsTUFBTUEsQ0FBQ0E7b0JBQ25CQSxhQUFRQSxHQUFTQSxLQUFLQSxDQUFDQTtnQkFJdkJBLENBQUNBO2dCQUVERCwwQkFBUUEsR0FBUkE7b0JBQ0lFLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLE1BQU1BLEdBQUdBLENBQUNBLENBQUNBO2dCQUNqQ0EsQ0FBQ0E7Z0JBRURGLDZCQUFXQSxHQUFYQSxVQUFZQSxLQUFLQTtvQkFDYkcsSUFBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsS0FBS0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsS0FBS0EsQ0FBQ0E7Z0JBQ3BDQSxDQUFDQTtnQkFFREgsNkJBQVdBLEdBQVhBLFVBQVlBLFFBQWlCQTtvQkFDekJJLElBQUlBLENBQUNBLE9BQU9BLEdBQUNBLFFBQVFBLENBQUNBO2dCQUMxQkEsQ0FBQ0E7Z0JBRURKLDhCQUFZQSxHQUFaQTtvQkFDSUssTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0E7Z0JBQzFCQSxDQUFDQTtnQkFFREwseUJBQU9BLEdBQVBBO29CQUNJTSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQTtnQkFDckJBLENBQUNBO2dCQUVETiw0QkFBVUEsR0FBVkE7b0JBQ0lPLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLEdBQUdBLE1BQU1BLEdBQUNBLElBQUlBLENBQUNBO2dCQUN2Q0EsQ0FBQ0E7Z0JBRURQLDZCQUFXQSxHQUFYQTtvQkFDSVEsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsR0FBR0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ2hDQSxDQUFDQTtnQkFFRFIsOEJBQVlBLEdBQVpBO29CQUNJUyxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxNQUFNQSxHQUFHQSxDQUFDQSxDQUFDQTtnQkFDakNBLENBQUNBO2dCQTFETFQ7b0JBQUNBLGdCQUFTQSxDQUFDQSxxQkFBU0EsQ0FBQ0EsSUFBSUEsQ0FBQ0E7d0JBQ3RCQSxXQUFXQSxFQUFDQSw2Q0FBNkNBO3dCQUN6REEsUUFBUUEsRUFBRUEsVUFBVUE7d0JBQ3BCQSxNQUFNQSxFQUFDQSxDQUFDQSxXQUFXQSxFQUFDQSxNQUFNQSxFQUFDQSxVQUFVQSxFQUFDQSxPQUFPQSxFQUFDQSxNQUFNQSxFQUFDQSxPQUFPQSxDQUFDQTt3QkFDN0RBLElBQUlBLEVBQUVBOzRCQUNGQSxlQUFlQSxFQUFFQSxTQUFTQTs0QkFDMUJBLGdCQUFnQkEsRUFBRUEsWUFBWUE7NEJBQzlCQSxrQkFBa0JBLEVBQUVBLFVBQVVBOzRCQUM5QkEsdUJBQXVCQSxFQUFFQSxlQUFlQTs0QkFDeENBLHdCQUF3QkEsRUFBRUEsZ0JBQWdCQTt5QkFDN0NBO3FCQUNBQSxFQUFDQTt3QkFDRUEsWUFBWUEsRUFBQ0EsQ0FBQ0E7d0JBQ2RBLFdBQVdBLEVBQUNBLENBQUNBO3dCQUNiQSxXQUFXQSxFQUFDQSxDQUFDQTtxQkFDaEJBLENBQUNBLENBQUNBOzs0QkE2Q05BO2dCQUFEQSxjQUFDQTtZQUFEQSxDQTVEQSxBQTREQ0EsRUE1QzRCLHFCQUFTLEVBNENyQztZQTVERCw2QkE0REMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL0FpSW5wdXQvQWlJbnB1dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LEVsZW1lbnRSZWZ9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtPYnNlcnZhYmxlV3JhcHBlcixFdmVudEVtaXR0ZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvYXN5bmMnO1xuaW1wb3J0IHtBaUNvbnRyb2x9IGZyb20gJy4uL0FpQ29udHJvbC9BaUNvbnRyb2wnO1xuXG5AQ29tcG9uZW50KEFpQ29udHJvbC5tZXRhKHtcbiAgICB0ZW1wbGF0ZVVybDoncGFja2FnZTpzcmMvY29tcG9uZW50cy9BaUlucHV0L0FpSW5wdXQuaHRtbCcsXG4gICAgc2VsZWN0b3I6ICdhaS1pbnB1dCcsXG4gICAgaW5wdXRzOlsnbWF4TGVuZ3RoJywndHlwZScsJ3JlYWRvbmx5JywndmFsdWUnLCdsZWZ0JywncmlnaHQnXSxcbiAgICBob3N0OiB7XG4gICAgICAgICdbY2xhc3MuZm9jdXNdJzogJ2lzRm9jdXMnLFxuICAgICAgICAnW2NsYXNzLnZhbHVlZF0nOiAnaGFzVmFsdWUoKScsXG4gICAgICAgICdbY2xhc3MucmVhZG9ubHldJzogJ3JlYWRvbmx5JyxcbiAgICAgICAgJ1tjbGFzcy5haS1pbnB1dC1sZWZ0XSc6ICdpc0xlZnRFeGlzdCgpJyxcbiAgICAgICAgJ1tjbGFzcy5haS1pbnB1dC1yaWdodF0nOiAnaXNSaWdodEV4aXN0KCknXG4gICAgfSAgICAgICBcbiAgICB9LHtcbiAgICAgICAgaWdub3JlQWN0aXZlOjEsXG4gICAgICAgIGlnbm9yZUZvY3VzOjEsXG4gICAgICAgIGlnbm9yZUhvdmVyOjFcbiAgICB9KSkgICAgXG5leHBvcnQgY2xhc3MgQWlJbnB1dCBleHRlbmRzIEFpQ29udHJvbHsgXG4gICAgbGVmdDpzdHJpbmc9Jyc7XG4gICAgcmlnaHQ6c3RyaW5nPScnO1xuICAgIHZhbHVlOiBzdHJpbmc9XCJcIjsgXG4gICAgbWF4TGVuZ3RoOm51bWJlcj0yNTU7XG4gICAgdHlwZTpzdHJpbmc9J3RleHQnO1xuICAgIHJlYWRvbmx5OmJvb2xlYW49ZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3RvcihlbGU6IEVsZW1lbnRSZWYpIHsgIFxuICAgICAgICBzdXBlcihlbGUpOyBcbiAgICB9XG5cbiAgICBoYXNWYWx1ZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZS5sZW5ndGggPiAwO1xuICAgIH0gXG5cbiAgICB1cGRhdGVWYWx1ZShldmVudCkge1xuICAgICAgICB0aGlzLnZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIH1cbiAgICBcbiAgICBzZXRIYXNGb2N1cyhoYXNGb2N1czogYm9vbGVhbikge1xuICAgICAgICB0aGlzLmlzRm9jdXM9aGFzRm9jdXM7XG4gICAgfVxuXG4gICAgZ2V0TWF4TGVuZ3RoKCl7XG4gICAgICAgIHJldHVybiB0aGlzLm1heExlbmd0aDtcbiAgICB9ICAgIFxuXG4gICAgZ2V0VHlwZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy50eXBlO1xuICAgIH0gICAgXG5cbiAgICBpc1JlYWRvbmx5KCl7XG4gICAgICAgIHJldHVybiB0aGlzLnJlYWRvbmx5ID8gJ3RydWUnOm51bGw7XG4gICAgfSAgICBcbiAgICBcbiAgICBpc0xlZnRFeGlzdCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5sZWZ0Lmxlbmd0aCA+IDA7XG4gICAgfVxuXG4gICAgaXNSaWdodEV4aXN0KCl7XG4gICAgICAgIHJldHVybiB0aGlzLnJpZ2h0Lmxlbmd0aCA+IDA7XG4gICAgfVxuIFxufSBcbiAgXG4gICBcbiBcbiAgIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
