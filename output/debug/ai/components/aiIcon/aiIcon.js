System.register(['angular2/core', '../aiControl'], function(exports_1) {
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
    var core_1, aiControl_1;
    var AiIcon;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (aiControl_1_1) {
                aiControl_1 = aiControl_1_1;
            }],
        execute: function() {
            AiIcon = (function (_super) {
                __extends(AiIcon, _super);
                function AiIcon(ele) {
                    _super.call(this, ele);
                }
                AiIcon = __decorate([
                    core_1.Component({
                        templateUrl: 'package:src/components/aiIcon/aiIcon.html',
                        selector: 'ai-icon',
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], AiIcon);
                return AiIcon;
            })(aiControl_1.AiControl);
            exports_1("AiIcon", AiIcon);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYWlJY29uL2FpSWNvbi50cyJdLCJuYW1lcyI6WyJBaUljb24iLCJBaUljb24uY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBR0E7Z0JBTTRCQSwwQkFBU0E7Z0JBRWpDQSxnQkFBWUEsR0FBZUE7b0JBQ3ZCQyxrQkFBTUEsR0FBR0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ2ZBLENBQUNBO2dCQVZMRDtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNQQSxXQUFXQSxFQUFDQSwyQ0FBMkNBO3dCQUN2REEsUUFBUUEsRUFBRUEsU0FBU0E7cUJBQ3RCQSxDQUFDQTs7MkJBU0RBO2dCQUFEQSxhQUFDQTtZQUFEQSxDQVpBLEFBWUNBLEVBTjJCLHFCQUFTLEVBTXBDO1lBWkQsMkJBWUMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2FpSWNvbi9haUljb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCxFbGVtZW50UmVmLFJlbmRlcmVyfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7QWlDb250cm9sfSBmcm9tICcuLi9haUNvbnRyb2wnO1xuXG5AQ29tcG9uZW50KHtcbiAgICB0ZW1wbGF0ZVVybDoncGFja2FnZTpzcmMvY29tcG9uZW50cy9haUljb24vYWlJY29uLmh0bWwnLFxuICAgIHNlbGVjdG9yOiAnYWktaWNvbicsXG59KSAgICBcblxuXG5leHBvcnQgY2xhc3MgQWlJY29uIGV4dGVuZHMgQWlDb250cm9sIHsgXG5cbiAgICBjb25zdHJ1Y3RvcihlbGU6IEVsZW1lbnRSZWYpIHsgXG4gICAgICAgIHN1cGVyKGVsZSk7IFxuICAgIH1cblxufSBcbiAgXG4gICBcbiBcbiAgIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
