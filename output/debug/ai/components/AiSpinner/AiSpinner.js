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
    var AiSpinner;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (AiControl_1_1) {
                AiControl_1 = AiControl_1_1;
            }],
        execute: function() {
            AiSpinner = (function (_super) {
                __extends(AiSpinner, _super);
                function AiSpinner(ele) {
                    _super.call(this, ele);
                }
                AiSpinner = __decorate([
                    core_1.Component(AiControl_1.AiControl.meta({
                        templateUrl: 'package:src/components/AiSpinner/AiSpinner.html',
                        selector: 'ai-spinner',
                    }, {
                        ignoreActive: 1,
                        ignoreDisabled: 1,
                        ignoreFocus: 1,
                        ignoreHover: 1
                    })), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], AiSpinner);
                return AiSpinner;
            })(AiControl_1.AiControl);
            exports_1("AiSpinner", AiSpinner);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlTcGlubmVyL0FpU3Bpbm5lci50cyJdLCJuYW1lcyI6WyJBaVNwaW5uZXIiLCJBaVNwaW5uZXIuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBR0E7Z0JBVStCQSw2QkFBU0E7Z0JBRXBDQSxtQkFBWUEsR0FBZUE7b0JBQ3ZCQyxrQkFBTUEsR0FBR0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ2ZBLENBQUNBO2dCQWRMRDtvQkFBQ0EsZ0JBQVNBLENBQUNBLHFCQUFTQSxDQUFDQSxJQUFJQSxDQUFDQTt3QkFDbEJBLFdBQVdBLEVBQUNBLGlEQUFpREE7d0JBQzdEQSxRQUFRQSxFQUFFQSxZQUFZQTtxQkFDekJBLEVBQUNBO3dCQUNFQSxZQUFZQSxFQUFDQSxDQUFDQTt3QkFDZEEsY0FBY0EsRUFBQ0EsQ0FBQ0E7d0JBQ2hCQSxXQUFXQSxFQUFDQSxDQUFDQTt3QkFDYkEsV0FBV0EsRUFBQ0EsQ0FBQ0E7cUJBQ2hCQSxDQUNKQSxDQUFDQTs7OEJBTURBO2dCQUFEQSxnQkFBQ0E7WUFBREEsQ0FmQSxBQWVDQSxFQUw4QixxQkFBUyxFQUt2QztZQWZELGlDQWVDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9BaVNwaW5uZXIvQWlTcGlubmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsRWxlbWVudFJlZn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0FpQ29udHJvbH0gZnJvbSAnLi4vQWlDb250cm9sL0FpQ29udHJvbCc7XG5cbkBDb21wb25lbnQoQWlDb250cm9sLm1ldGEoe1xuICAgICAgICB0ZW1wbGF0ZVVybDoncGFja2FnZTpzcmMvY29tcG9uZW50cy9BaVNwaW5uZXIvQWlTcGlubmVyLmh0bWwnLFxuICAgICAgICBzZWxlY3RvcjogJ2FpLXNwaW5uZXInLFxuICAgIH0se1xuICAgICAgICBpZ25vcmVBY3RpdmU6MSxcbiAgICAgICAgaWdub3JlRGlzYWJsZWQ6MSxcbiAgICAgICAgaWdub3JlRm9jdXM6MSxcbiAgICAgICAgaWdub3JlSG92ZXI6MVxuICAgIH1cbikpICAgIFxuZXhwb3J0IGNsYXNzIEFpU3Bpbm5lciBleHRlbmRzIEFpQ29udHJvbCB7IFxuXG4gICAgY29uc3RydWN0b3IoZWxlOiBFbGVtZW50UmVmKSB7IFxuICAgICAgICBzdXBlcihlbGUpOyBcbiAgICB9XG59IFxuICBcbiAgIFxuIFxuICAiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
