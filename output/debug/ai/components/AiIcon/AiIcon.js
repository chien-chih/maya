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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlJY29uL0FpSWNvbi50cyJdLCJuYW1lcyI6WyJBaUljb24iLCJBaUljb24uY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBR0E7Z0JBVTRCQSwwQkFBU0E7Z0JBRWpDQSxnQkFBWUEsR0FBZUE7b0JBQ3ZCQyxrQkFBTUEsR0FBR0EsQ0FBQ0EsQ0FBQ0E7b0JBQ1hBLElBQUlBLENBQUNBLGNBQWNBLEVBQUVBLENBQUNBO2dCQUMxQkEsQ0FBQ0E7Z0JBZkxEO29CQUFDQSxnQkFBU0EsQ0FBQ0EscUJBQVNBLENBQUNBLElBQUlBLENBQUNBO3dCQUNsQkEsV0FBV0EsRUFBQ0EsMkNBQTJDQTt3QkFDdkRBLFFBQVFBLEVBQUVBLFNBQVNBO3FCQUN0QkEsRUFBQ0E7d0JBQ0VBLFlBQVlBLEVBQUNBLENBQUNBO3dCQUNkQSxjQUFjQSxFQUFDQSxDQUFDQTt3QkFDaEJBLFdBQVdBLEVBQUNBLENBQUNBO3dCQUNiQSxXQUFXQSxFQUFDQSxDQUFDQTtxQkFDaEJBLENBQ0pBLENBQUNBOzsyQkFRREE7Z0JBQURBLGFBQUNBO1lBQURBLENBakJBLEFBaUJDQSxFQVAyQixxQkFBUyxFQU9wQztZQWpCRCwyQkFpQkMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL0FpSWNvbi9BaUljb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCxFbGVtZW50UmVmLFJlbmRlcmVyfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7QWlDb250cm9sfSBmcm9tICcuLi9BaUNvbnRyb2wvQWlDb250cm9sJztcblxuQENvbXBvbmVudChBaUNvbnRyb2wubWV0YSh7XG4gICAgICAgIHRlbXBsYXRlVXJsOidwYWNrYWdlOnNyYy9jb21wb25lbnRzL0FpSWNvbi9BaUljb24uaHRtbCcsXG4gICAgICAgIHNlbGVjdG9yOiAnYWktaWNvbicsXG4gICAgfSx7XG4gICAgICAgIGlnbm9yZUFjdGl2ZToxLFxuICAgICAgICBpZ25vcmVEaXNhYmxlZDoxLFxuICAgICAgICBpZ25vcmVGb2N1czoxLFxuICAgICAgICBpZ25vcmVIb3ZlcjoxXG4gICAgfVxuKSkgICAgXG5leHBvcnQgY2xhc3MgQWlJY29uIGV4dGVuZHMgQWlDb250cm9sIHsgXG5cbiAgICBjb25zdHJ1Y3RvcihlbGU6IEVsZW1lbnRSZWYpIHsgXG4gICAgICAgIHN1cGVyKGVsZSk7IFxuICAgICAgICB0aGlzLmVuYWJsZU1hdGVyaWFsKCk7XG4gICAgfVxuXG59IFxuICBcbiAgIFxuIFxuICAiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
