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
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
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
                // Events emitted by this directive. We use these special 'md-' events to communicate
                // to the parent MdInputContainer.
                //mdChange: EventEmitter<any>;
                //mdFocusChange: EventEmitter<any>;
                function AiInput(ele, textarea, value) {
                    _super.call(this, ele);
                    this.textareaMode = false;
                    if (textarea != null)
                        this.textareaMode = true;
                    this.value = value == null ? '' : value;
                }
                AiInput.prototype.updateValue = function (event) {
                    this.value = event.target.value;
                };
                AiInput.prototype.setHasFocus = function (hasFocus) {
                    this.isFocus = hasFocus;
                };
                AiInput = __decorate([
                    core_1.Component(AiControl_1.AiControl.meta({
                        templateUrl: 'package:src/components/AiInput/AiInput.html',
                        selector: 'ai-input',
                        inputs: [],
                        host: {
                            '[class.focus]': 'isFocus',
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
            })(AiControl_1.AiControl);
            exports_1("AiInput", AiInput);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlJbnB1dC9BaUlucHV0LnRzIl0sIm5hbWVzIjpbIkFpSW5wdXQiLCJBaUlucHV0LmNvbnN0cnVjdG9yIiwiQWlJbnB1dC51cGRhdGVWYWx1ZSIsIkFpSW5wdXQuc2V0SGFzRm9jdXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBS0E7Z0JBYTZCQSwyQkFBU0E7Z0JBSWxDQSxxRkFBcUZBO2dCQUNyRkEsa0NBQWtDQTtnQkFDbENBLDhCQUE4QkE7Z0JBQzlCQSxtQ0FBbUNBO2dCQUVuQ0EsaUJBQVlBLEdBQWVBLEVBQXdCQSxRQUFnQkEsRUFBcUJBLEtBQWFBO29CQUNqR0Msa0JBQU1BLEdBQUdBLENBQUNBLENBQUNBO29CQVRmQSxpQkFBWUEsR0FBU0EsS0FBS0EsQ0FBQ0E7b0JBVXZCQSxFQUFFQSxDQUFBQSxDQUFDQSxRQUFRQSxJQUFJQSxJQUFJQSxDQUFDQTt3QkFBQ0EsSUFBSUEsQ0FBQ0EsWUFBWUEsR0FBQ0EsSUFBSUEsQ0FBQ0E7b0JBQzVDQSxJQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxLQUFLQSxJQUFJQSxJQUFJQSxHQUFHQSxFQUFFQSxHQUFHQSxLQUFLQSxDQUFDQTtnQkFDNUNBLENBQUNBO2dCQUVERCw2QkFBV0EsR0FBWEEsVUFBWUEsS0FBS0E7b0JBQ2JFLElBQUlBLENBQUNBLEtBQUtBLEdBQUdBLEtBQUtBLENBQUNBLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBO2dCQUNwQ0EsQ0FBQ0E7Z0JBRURGLDZCQUFXQSxHQUFYQSxVQUFZQSxRQUFpQkE7b0JBQ3pCRyxJQUFJQSxDQUFDQSxPQUFPQSxHQUFDQSxRQUFRQSxDQUFDQTtnQkFDMUJBLENBQUNBO2dCQWxDTEg7b0JBQUNBLGdCQUFTQSxDQUFDQSxxQkFBU0EsQ0FBQ0EsSUFBSUEsQ0FBQ0E7d0JBQ2xCQSxXQUFXQSxFQUFDQSw2Q0FBNkNBO3dCQUN6REEsUUFBUUEsRUFBRUEsVUFBVUE7d0JBQ3BCQSxNQUFNQSxFQUFFQSxFQUFFQTt3QkFDVkEsSUFBSUEsRUFBRUE7NEJBQ0ZBLGVBQWVBLEVBQUVBLFNBQVNBO3lCQUM3QkE7cUJBQ0pBLEVBQUNBO3dCQUNFQSxZQUFZQSxFQUFDQSxDQUFDQTt3QkFDZEEsV0FBV0EsRUFBQ0EsQ0FBQ0E7d0JBQ2JBLFdBQVdBLEVBQUNBLENBQUNBO3FCQUNoQkEsQ0FDSkEsQ0FBQ0E7b0JBVThCQSxXQUFDQSxnQkFBU0EsQ0FBQ0EsVUFBVUEsQ0FBQ0EsQ0FBQUE7b0JBQWtCQSxXQUFDQSxnQkFBU0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQUE7OzRCQWExRkE7Z0JBQURBLGNBQUNBO1lBQURBLENBbkNBLEFBbUNDQSxFQXRCNEIscUJBQVMsRUFzQnJDO1lBbkNELDZCQW1DQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvQWlJbnB1dC9BaUlucHV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsRWxlbWVudFJlZixBdHRyaWJ1dGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuLy9pbXBvcnQge05nSWZ9IGZyb20gJ2FuZ3VsYXIyL2FuZ3VsYXIyJztcbmltcG9ydCB7T2JzZXJ2YWJsZVdyYXBwZXIsIEV2ZW50RW1pdHRlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9hc3luYyc7XG5pbXBvcnQge0FpQ29udHJvbH0gZnJvbSAnLi4vQWlDb250cm9sL0FpQ29udHJvbCc7XG5cbkBDb21wb25lbnQoQWlDb250cm9sLm1ldGEoe1xuICAgICAgICB0ZW1wbGF0ZVVybDoncGFja2FnZTpzcmMvY29tcG9uZW50cy9BaUlucHV0L0FpSW5wdXQuaHRtbCcsXG4gICAgICAgIHNlbGVjdG9yOiAnYWktaW5wdXQnLFxuICAgICAgICBpbnB1dHM6IFtdLFxuICAgICAgICBob3N0OiB7XG4gICAgICAgICAgICAnW2NsYXNzLmZvY3VzXSc6ICdpc0ZvY3VzJyxcbiAgICAgICAgfSwgICAgICAgXG4gICAgfSx7XG4gICAgICAgIGlnbm9yZUFjdGl2ZToxLFxuICAgICAgICBpZ25vcmVGb2N1czoxLFxuICAgICAgICBpZ25vcmVIb3ZlcjoxXG4gICAgfVxuKSkgICAgXG5leHBvcnQgY2xhc3MgQWlJbnB1dCBleHRlbmRzIEFpQ29udHJvbCB7IFxuICAgIHRleHRhcmVhTW9kZTpib29sZWFuPWZhbHNlO1xuICAgIHZhbHVlOiBzdHJpbmc7IFxuXG4gICAgLy8gRXZlbnRzIGVtaXR0ZWQgYnkgdGhpcyBkaXJlY3RpdmUuIFdlIHVzZSB0aGVzZSBzcGVjaWFsICdtZC0nIGV2ZW50cyB0byBjb21tdW5pY2F0ZVxuICAgIC8vIHRvIHRoZSBwYXJlbnQgTWRJbnB1dENvbnRhaW5lci5cbiAgICAvL21kQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgICAvL21kRm9jdXNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+O1xuICBcbiAgICBjb25zdHJ1Y3RvcihlbGU6IEVsZW1lbnRSZWYsQEF0dHJpYnV0ZSgndGV4dGFyZWEnKSB0ZXh0YXJlYTogc3RyaW5nLEBBdHRyaWJ1dGUoJ3ZhbHVlJykgdmFsdWU6IHN0cmluZykgeyBcbiAgICAgICAgc3VwZXIoZWxlKTtcbiAgICAgICAgaWYodGV4dGFyZWEgIT0gbnVsbCkgdGhpcy50ZXh0YXJlYU1vZGU9dHJ1ZTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlID09IG51bGwgPyAnJyA6IHZhbHVlO1xuICAgIH1cblxuICAgIHVwZGF0ZVZhbHVlKGV2ZW50KSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgfVxuICAgIFxuICAgIHNldEhhc0ZvY3VzKGhhc0ZvY3VzOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuaXNGb2N1cz1oYXNGb2N1cztcbiAgICB9XG59IFxuICBcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
