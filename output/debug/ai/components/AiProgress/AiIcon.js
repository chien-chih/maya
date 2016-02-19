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
    var AiIcon;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (AiControl_1_1) {
                AiControl_1 = AiControl_1_1;
            }],
        execute: function() {
            AiIcon = (function (_super) {
                __extends(AiIcon, _super);
                function AiIcon(ele) {
                    _super.call(this, ele);
                    this.enableMaterial();
                }
                AiIcon = __decorate([
                    core_1.Component(AiControl_1.AiControl.meta({
                        templateUrl: 'package:src/components/AiIcon/AiIcon.html',
                        selector: 'ai-icon',
                    }, {
                        ignoreActive: 1,
                        ignoreDisabled: 1,
                        ignoreFocus: 1,
                        ignoreHover: 1
                    })), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], AiIcon);
                return AiIcon;
            })(AiControl_1.AiControl);
            exports_1("AiIcon", AiIcon);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlQcm9ncmVzcy9BaUljb24udHMiXSwibmFtZXMiOlsiQWlJY29uIiwiQWlJY29uLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUdBO2dCQVU0QkEsMEJBQVNBO2dCQUVqQ0EsZ0JBQVlBLEdBQWVBO29CQUN2QkMsa0JBQU1BLEdBQUdBLENBQUNBLENBQUNBO29CQUNYQSxJQUFJQSxDQUFDQSxjQUFjQSxFQUFFQSxDQUFDQTtnQkFDMUJBLENBQUNBO2dCQWZMRDtvQkFBQ0EsZ0JBQVNBLENBQUNBLHFCQUFTQSxDQUFDQSxJQUFJQSxDQUFDQTt3QkFDbEJBLFdBQVdBLEVBQUNBLDJDQUEyQ0E7d0JBQ3ZEQSxRQUFRQSxFQUFFQSxTQUFTQTtxQkFDdEJBLEVBQUNBO3dCQUNFQSxZQUFZQSxFQUFDQSxDQUFDQTt3QkFDZEEsY0FBY0EsRUFBQ0EsQ0FBQ0E7d0JBQ2hCQSxXQUFXQSxFQUFDQSxDQUFDQTt3QkFDYkEsV0FBV0EsRUFBQ0EsQ0FBQ0E7cUJBQ2hCQSxDQUNKQSxDQUFDQTs7MkJBUURBO2dCQUFEQSxhQUFDQTtZQUFEQSxDQWpCQSxBQWlCQ0EsRUFQMkIscUJBQVMsRUFPcEM7WUFqQkQsMkJBaUJDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9BaVByb2dyZXNzL0FpSWNvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LEVsZW1lbnRSZWYsUmVuZGVyZXJ9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtBaUNvbnRyb2x9IGZyb20gJy4uL0FpQ29udHJvbC9BaUNvbnRyb2wnO1xuXG5AQ29tcG9uZW50KEFpQ29udHJvbC5tZXRhKHtcbiAgICAgICAgdGVtcGxhdGVVcmw6J3BhY2thZ2U6c3JjL2NvbXBvbmVudHMvQWlJY29uL0FpSWNvbi5odG1sJyxcbiAgICAgICAgc2VsZWN0b3I6ICdhaS1pY29uJyxcbiAgICB9LHtcbiAgICAgICAgaWdub3JlQWN0aXZlOjEsXG4gICAgICAgIGlnbm9yZURpc2FibGVkOjEsXG4gICAgICAgIGlnbm9yZUZvY3VzOjEsXG4gICAgICAgIGlnbm9yZUhvdmVyOjFcbiAgICB9XG4pKSAgICBcbmV4cG9ydCBjbGFzcyBBaUljb24gZXh0ZW5kcyBBaUNvbnRyb2wgeyBcblxuICAgIGNvbnN0cnVjdG9yKGVsZTogRWxlbWVudFJlZikgeyBcbiAgICAgICAgc3VwZXIoZWxlKTsgXG4gICAgICAgIHRoaXMuZW5hYmxlTWF0ZXJpYWwoKTtcbiAgICB9XG5cbn0gXG4gIFxuICAgXG4gXG4gICJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
