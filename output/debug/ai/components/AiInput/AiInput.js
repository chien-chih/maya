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
                AiInput = __decorate([
                    core_1.Component(AiControl_1.AiControl.meta({
                        templateUrl: 'package:src/components/AiInput/AiInput.html',
                        selector: 'ai-input',
                        inputs: ['maxLength', 'type', 'readonly', 'value'],
                        host: {
                            '[class.focus]': 'isFocus',
                            '[class.valued]': 'hasValue()',
                            '[class.readonly]': 'readonly'
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlJbnB1dC9BaUlucHV0LnRzIl0sIm5hbWVzIjpbIkFpSW5wdXQiLCJBaUlucHV0LmNvbnN0cnVjdG9yIiwiQWlJbnB1dC5oYXNWYWx1ZSIsIkFpSW5wdXQudXBkYXRlVmFsdWUiLCJBaUlucHV0LnNldEhhc0ZvY3VzIiwiQWlJbnB1dC5nZXRNYXhMZW5ndGgiLCJBaUlucHV0LmdldFR5cGUiLCJBaUlucHV0LmlzUmVhZG9ubHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBSUE7Z0JBYzZCQSwyQkFBU0E7Z0JBT2xDQSxpQkFBWUEsR0FBZUE7b0JBQ3ZCQyxrQkFBTUEsR0FBR0EsQ0FBQ0EsQ0FBQ0E7b0JBTmZBLFVBQUtBLEdBQVNBLEVBQUVBLENBQUNBO29CQUNqQkEsY0FBU0EsR0FBUUEsR0FBR0EsQ0FBQ0E7b0JBQ3JCQSxTQUFJQSxHQUFRQSxNQUFNQSxDQUFDQTtvQkFDbkJBLGFBQVFBLEdBQVNBLEtBQUtBLENBQUNBO2dCQUl2QkEsQ0FBQ0E7Z0JBRURELDBCQUFRQSxHQUFSQTtvQkFDSUUsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsTUFBTUEsR0FBR0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ2pDQSxDQUFDQTtnQkFFREYsNkJBQVdBLEdBQVhBLFVBQVlBLEtBQUtBO29CQUNiRyxJQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxLQUFLQSxDQUFDQSxNQUFNQSxDQUFDQSxLQUFLQSxDQUFDQTtnQkFDcENBLENBQUNBO2dCQUVESCw2QkFBV0EsR0FBWEEsVUFBWUEsUUFBaUJBO29CQUN6QkksSUFBSUEsQ0FBQ0EsT0FBT0EsR0FBQ0EsUUFBUUEsQ0FBQ0E7Z0JBQzFCQSxDQUFDQTtnQkFFREosOEJBQVlBLEdBQVpBO29CQUNJSyxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQTtnQkFDMUJBLENBQUNBO2dCQUVETCx5QkFBT0EsR0FBUEE7b0JBQ0lNLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBO2dCQUNyQkEsQ0FBQ0E7Z0JBRUROLDRCQUFVQSxHQUFWQTtvQkFDSU8sTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsTUFBTUEsR0FBQ0EsSUFBSUEsQ0FBQ0E7Z0JBQ3ZDQSxDQUFDQTtnQkEvQ0xQO29CQUFDQSxnQkFBU0EsQ0FBQ0EscUJBQVNBLENBQUNBLElBQUlBLENBQUNBO3dCQUN0QkEsV0FBV0EsRUFBQ0EsNkNBQTZDQTt3QkFDekRBLFFBQVFBLEVBQUVBLFVBQVVBO3dCQUNwQkEsTUFBTUEsRUFBQ0EsQ0FBQ0EsV0FBV0EsRUFBQ0EsTUFBTUEsRUFBQ0EsVUFBVUEsRUFBQ0EsT0FBT0EsQ0FBQ0E7d0JBQzlDQSxJQUFJQSxFQUFFQTs0QkFDRkEsZUFBZUEsRUFBRUEsU0FBU0E7NEJBQzFCQSxnQkFBZ0JBLEVBQUVBLFlBQVlBOzRCQUM5QkEsa0JBQWtCQSxFQUFFQSxVQUFVQTt5QkFDakNBO3FCQUNBQSxFQUFDQTt3QkFDRUEsWUFBWUEsRUFBQ0EsQ0FBQ0E7d0JBQ2RBLFdBQVdBLEVBQUNBLENBQUNBO3dCQUNiQSxXQUFXQSxFQUFDQSxDQUFDQTtxQkFDaEJBLENBQUNBLENBQUNBOzs0QkFvQ05BO2dCQUFEQSxjQUFDQTtZQUFEQSxDQWpEQSxBQWlEQ0EsRUFuQzRCLHFCQUFTLEVBbUNyQztZQWpERCw2QkFpREMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL0FpSW5wdXQvQWlJbnB1dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LEVsZW1lbnRSZWZ9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtPYnNlcnZhYmxlV3JhcHBlcixFdmVudEVtaXR0ZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvYXN5bmMnO1xuaW1wb3J0IHtBaUNvbnRyb2x9IGZyb20gJy4uL0FpQ29udHJvbC9BaUNvbnRyb2wnO1xuXG5AQ29tcG9uZW50KEFpQ29udHJvbC5tZXRhKHtcbiAgICB0ZW1wbGF0ZVVybDoncGFja2FnZTpzcmMvY29tcG9uZW50cy9BaUlucHV0L0FpSW5wdXQuaHRtbCcsXG4gICAgc2VsZWN0b3I6ICdhaS1pbnB1dCcsXG4gICAgaW5wdXRzOlsnbWF4TGVuZ3RoJywndHlwZScsJ3JlYWRvbmx5JywndmFsdWUnXSxcbiAgICBob3N0OiB7XG4gICAgICAgICdbY2xhc3MuZm9jdXNdJzogJ2lzRm9jdXMnLFxuICAgICAgICAnW2NsYXNzLnZhbHVlZF0nOiAnaGFzVmFsdWUoKScsXG4gICAgICAgICdbY2xhc3MucmVhZG9ubHldJzogJ3JlYWRvbmx5J1xuICAgIH0gICAgICAgXG4gICAgfSx7XG4gICAgICAgIGlnbm9yZUFjdGl2ZToxLFxuICAgICAgICBpZ25vcmVGb2N1czoxLFxuICAgICAgICBpZ25vcmVIb3ZlcjoxXG4gICAgfSkpICAgIFxuZXhwb3J0IGNsYXNzIEFpSW5wdXQgZXh0ZW5kcyBBaUNvbnRyb2x7IFxuXG4gICAgdmFsdWU6IHN0cmluZz1cIlwiOyBcbiAgICBtYXhMZW5ndGg6bnVtYmVyPTI1NTtcbiAgICB0eXBlOnN0cmluZz0ndGV4dCc7XG4gICAgcmVhZG9ubHk6Ym9vbGVhbj1mYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKGVsZTogRWxlbWVudFJlZikgeyAgXG4gICAgICAgIHN1cGVyKGVsZSk7IFxuICAgIH1cblxuICAgIGhhc1ZhbHVlKCl7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlLmxlbmd0aCA+IDA7XG4gICAgfSBcblxuICAgIHVwZGF0ZVZhbHVlKGV2ZW50KSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgfVxuICAgIFxuICAgIHNldEhhc0ZvY3VzKGhhc0ZvY3VzOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuaXNGb2N1cz1oYXNGb2N1cztcbiAgICB9XG5cbiAgICBnZXRNYXhMZW5ndGgoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMubWF4TGVuZ3RoO1xuICAgIH0gICAgXG5cbiAgICBnZXRUeXBlKCl7XG4gICAgICAgIHJldHVybiB0aGlzLnR5cGU7XG4gICAgfSAgICBcblxuICAgIGlzUmVhZG9ubHkoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVhZG9ubHkgPyAndHJ1ZSc6bnVsbDtcbiAgICB9ICAgIFxuIFxufSBcbiAgXG4gICBcbiBcbiAgIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
