System.register(['angular2/core', 'angular2/common', '../AiControl/AiControl', '../AiInput/AiInput', '../AiIcon/AiIcon'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
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
            }(AiInput_1.AiInput));
            exports_1("AiTextarea", AiTextarea);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlUZXh0YXJlYS9BaVRleHRhcmVhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFvQkE7Z0JBQWdDLDhCQUFPO2dCQUVuQyxvQkFBWSxHQUFlO29CQUN2QixrQkFBTSxHQUFHLENBQUMsQ0FBQztnQkFFZixDQUFDO2dCQWxCTDtvQkFBQyxnQkFBUyxDQUFDLHFCQUFTLENBQUMsSUFBSSxDQUFDO3dCQUN0QixXQUFXLEVBQUMsbURBQW1EO3dCQUMvRCxVQUFVLEVBQUUsQ0FBQyxlQUFNLENBQUM7d0JBQ3BCLFFBQVEsRUFBRSxhQUFhO3dCQUN2QixNQUFNLEVBQUUsaUJBQU8sQ0FBQyxNQUFNO3dCQUN0QixPQUFPLEVBQUUsaUJBQU8sQ0FBQyxPQUFPO3dCQUN4QixJQUFJLEVBQUUsaUJBQU8sQ0FBQyxJQUFJO3dCQUNsQixTQUFTLEVBQUUsQ0FBQyxJQUFJLGVBQVEsQ0FBQywwQkFBaUIsRUFBRSxFQUFDLFdBQVcsRUFBRSxpQkFBVSxDQUFDLGNBQU0sT0FBQSxVQUFVLEVBQVYsQ0FBVSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7cUJBQ3JHLEVBQUM7d0JBQ0UsWUFBWSxFQUFDLENBQUM7d0JBQ2QsV0FBVyxFQUFDLENBQUM7d0JBQ2IsV0FBVyxFQUFDLENBQUM7cUJBQ2hCLENBQUMsQ0FBQzs7OEJBQUE7Z0JBU1AsaUJBQUM7WUFBRCxDQVJBLEFBUUMsQ0FSK0IsaUJBQU8sR0FRdEM7WUFSRCxtQ0FRQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvQWlUZXh0YXJlYS9BaVRleHRhcmVhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsRWxlbWVudFJlZixmb3J3YXJkUmVmLFByb3ZpZGVyLEhvc3RCaW5kaW5nfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Q29udHJvbFZhbHVlQWNjZXNzb3IsTkdfVkFMVUVfQUNDRVNTT1J9IGZyb20gJ2FuZ3VsYXIyL2NvbW1vbic7XG5pbXBvcnQge09ic2VydmFibGVXcmFwcGVyLEV2ZW50RW1pdHRlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9hc3luYyc7XG5pbXBvcnQge0FpQ29udHJvbH0gZnJvbSAnLi4vQWlDb250cm9sL0FpQ29udHJvbCc7XG5pbXBvcnQge0FpSW5wdXR9IGZyb20gJy4uL0FpSW5wdXQvQWlJbnB1dCc7XG5pbXBvcnQge0FpSWNvbn0gZnJvbSAnLi4vQWlJY29uL0FpSWNvbic7XG5cbkBDb21wb25lbnQoQWlDb250cm9sLm1ldGEoe1xuICAgIHRlbXBsYXRlVXJsOidwYWNrYWdlOnNyYy9jb21wb25lbnRzL0FpVGV4dGFyZWEvQWlUZXh0YXJlYS5odG1sJyxcbiAgICBkaXJlY3RpdmVzOiBbQWlJY29uXSxcbiAgICBzZWxlY3RvcjogJ2FpLXRleHRhcmVhJyxcbiAgICBpbnB1dHM6IEFpSW5wdXQuaW5wdXRzLFxuICAgIG91dHB1dHM6IEFpSW5wdXQub3V0cHV0cyxcbiAgICBob3N0OiBBaUlucHV0Lmhvc3QsXG4gICAgcHJvdmlkZXJzOiBbbmV3IFByb3ZpZGVyKE5HX1ZBTFVFX0FDQ0VTU09SLCB7dXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQWlUZXh0YXJlYSksIG11bHRpOiB0cnVlfSldXG4gICAgfSx7XG4gICAgICAgIGlnbm9yZUFjdGl2ZToxLFxuICAgICAgICBpZ25vcmVGb2N1czoxLFxuICAgICAgICBpZ25vcmVIb3ZlcjoxXG4gICAgfSkpICAgXG5leHBvcnQgY2xhc3MgQWlUZXh0YXJlYSBleHRlbmRzIEFpSW5wdXQgeyBcblxuICAgIGNvbnN0cnVjdG9yKGVsZTogRWxlbWVudFJlZikgeyAgXG4gICAgICAgIHN1cGVyKGVsZSk7IFxuXG4gICAgfVxuXG5cbn0gXG4gIFxuICAgXG4gXG4gICJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
