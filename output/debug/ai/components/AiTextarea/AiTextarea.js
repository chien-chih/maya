System.register(['angular2/core', 'angular2/common', '../AiControl/AiControl', '../AiInput/AiInput', '../AiIcon/AiIcon'], function(exports_1) {
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
    var core_1, common_1, AiControl_1, AiInput_1, AiIcon_1;
    var AiTextarea;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (AiControl_1_1) {
                AiControl_1 = AiControl_1_1;
            },
            function (AiInput_1_1) {
                AiInput_1 = AiInput_1_1;
            },
            function (AiIcon_1_1) {
                AiIcon_1 = AiIcon_1_1;
            }],
        execute: function() {
            AiTextarea = (function (_super) {
                __extends(AiTextarea, _super);
                function AiTextarea(ele) {
                    _super.call(this, ele);
                }
                AiTextarea = __decorate([
                    core_1.Component(AiControl_1.AiControl.meta({
                        templateUrl: 'package:src/components/AiTextarea/AiTextarea.html',
                        directives: [AiIcon_1.AiIcon],
                        selector: 'ai-textarea',
                        inputs: AiInput_1.AiInput.inputs,
                        outputs: AiInput_1.AiInput.outputs,
                        host: AiInput_1.AiInput.host,
                        providers: [new core_1.Provider(common_1.NG_VALUE_ACCESSOR, { useExisting: core_1.forwardRef(function () { return AiTextarea; }), multi: true })]
                    }, {
                        ignoreActive: 1,
                        ignoreFocus: 1,
                        ignoreHover: 1
                    })), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], AiTextarea);
                return AiTextarea;
            })(AiInput_1.AiInput);
            exports_1("AiTextarea", AiTextarea);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlUZXh0YXJlYS9BaVRleHRhcmVhLnRzIl0sIm5hbWVzIjpbIkFpVGV4dGFyZWEiLCJBaVRleHRhcmVhLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU9BO2dCQWFnQ0EsOEJBQU9BO2dCQUVuQ0Esb0JBQVlBLEdBQWVBO29CQUN2QkMsa0JBQU1BLEdBQUdBLENBQUNBLENBQUNBO2dCQUVmQSxDQUFDQTtnQkFsQkxEO29CQUFDQSxnQkFBU0EsQ0FBQ0EscUJBQVNBLENBQUNBLElBQUlBLENBQUNBO3dCQUN0QkEsV0FBV0EsRUFBQ0EsbURBQW1EQTt3QkFDL0RBLFVBQVVBLEVBQUVBLENBQUNBLGVBQU1BLENBQUNBO3dCQUNwQkEsUUFBUUEsRUFBRUEsYUFBYUE7d0JBQ3ZCQSxNQUFNQSxFQUFFQSxpQkFBT0EsQ0FBQ0EsTUFBTUE7d0JBQ3RCQSxPQUFPQSxFQUFFQSxpQkFBT0EsQ0FBQ0EsT0FBT0E7d0JBQ3hCQSxJQUFJQSxFQUFFQSxpQkFBT0EsQ0FBQ0EsSUFBSUE7d0JBQ2xCQSxTQUFTQSxFQUFFQSxDQUFDQSxJQUFJQSxlQUFRQSxDQUFDQSwwQkFBaUJBLEVBQUVBLEVBQUNBLFdBQVdBLEVBQUVBLGlCQUFVQSxDQUFDQSxjQUFNQSxPQUFBQSxVQUFVQSxFQUFWQSxDQUFVQSxDQUFDQSxFQUFFQSxLQUFLQSxFQUFFQSxJQUFJQSxFQUFDQSxDQUFDQSxDQUFDQTtxQkFDckdBLEVBQUNBO3dCQUNFQSxZQUFZQSxFQUFDQSxDQUFDQTt3QkFDZEEsV0FBV0EsRUFBQ0EsQ0FBQ0E7d0JBQ2JBLFdBQVdBLEVBQUNBLENBQUNBO3FCQUNoQkEsQ0FBQ0EsQ0FBQ0E7OytCQVNOQTtnQkFBREEsaUJBQUNBO1lBQURBLENBckJBLEFBcUJDQSxFQVIrQixpQkFBTyxFQVF0QztZQXJCRCxtQ0FxQkMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL0FpVGV4dGFyZWEvQWlUZXh0YXJlYS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LEVsZW1lbnRSZWYsZm9yd2FyZFJlZixQcm92aWRlcixIb3N0QmluZGluZ30gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0NvbnRyb2xWYWx1ZUFjY2Vzc29yLE5HX1ZBTFVFX0FDQ0VTU09SfSBmcm9tICdhbmd1bGFyMi9jb21tb24nO1xuaW1wb3J0IHtPYnNlcnZhYmxlV3JhcHBlcixFdmVudEVtaXR0ZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvYXN5bmMnO1xuaW1wb3J0IHtBaUNvbnRyb2x9IGZyb20gJy4uL0FpQ29udHJvbC9BaUNvbnRyb2wnO1xuaW1wb3J0IHtBaUlucHV0fSBmcm9tICcuLi9BaUlucHV0L0FpSW5wdXQnO1xuaW1wb3J0IHtBaUljb259IGZyb20gJy4uL0FpSWNvbi9BaUljb24nO1xuXG5AQ29tcG9uZW50KEFpQ29udHJvbC5tZXRhKHtcbiAgICB0ZW1wbGF0ZVVybDoncGFja2FnZTpzcmMvY29tcG9uZW50cy9BaVRleHRhcmVhL0FpVGV4dGFyZWEuaHRtbCcsXG4gICAgZGlyZWN0aXZlczogW0FpSWNvbl0sXG4gICAgc2VsZWN0b3I6ICdhaS10ZXh0YXJlYScsXG4gICAgaW5wdXRzOiBBaUlucHV0LmlucHV0cyxcbiAgICBvdXRwdXRzOiBBaUlucHV0Lm91dHB1dHMsXG4gICAgaG9zdDogQWlJbnB1dC5ob3N0LFxuICAgIHByb3ZpZGVyczogW25ldyBQcm92aWRlcihOR19WQUxVRV9BQ0NFU1NPUiwge3VzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEFpVGV4dGFyZWEpLCBtdWx0aTogdHJ1ZX0pXVxuICAgIH0se1xuICAgICAgICBpZ25vcmVBY3RpdmU6MSxcbiAgICAgICAgaWdub3JlRm9jdXM6MSxcbiAgICAgICAgaWdub3JlSG92ZXI6MVxuICAgIH0pKSAgIFxuZXhwb3J0IGNsYXNzIEFpVGV4dGFyZWEgZXh0ZW5kcyBBaUlucHV0IHsgXG5cbiAgICBjb25zdHJ1Y3RvcihlbGU6IEVsZW1lbnRSZWYpIHsgIFxuICAgICAgICBzdXBlcihlbGUpOyBcblxuICAgIH1cblxuXG59IFxuICBcbiAgIFxuIFxuICAiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
