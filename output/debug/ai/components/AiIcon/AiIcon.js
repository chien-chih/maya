System.register(['angular2/core', '../AiControl/AiControl'], function(exports_1, context_1) {
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
                        ignoreDisabled: 1,
                        ignoreFocus: 1
                    })), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], AiIcon);
                return AiIcon;
            }(AiControl_1.AiControl));
            exports_1("AiIcon", AiIcon);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlJY29uL0FpSWNvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBV0E7Z0JBQTRCLDBCQUFTO2dCQUVqQyxnQkFBWSxHQUFlO29CQUN2QixrQkFBTSxHQUFHLENBQUMsQ0FBQztvQkFDWCxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQzFCLENBQUM7Z0JBYkw7b0JBQUMsZ0JBQVMsQ0FBQyxxQkFBUyxDQUFDLElBQUksQ0FBQzt3QkFDbEIsV0FBVyxFQUFDLDJDQUEyQzt3QkFDdkQsUUFBUSxFQUFFLFNBQVM7cUJBQ3RCLEVBQUM7d0JBQ0UsY0FBYyxFQUFDLENBQUM7d0JBQ2hCLFdBQVcsRUFBQyxDQUFDO3FCQUNoQixDQUNKLENBQUM7OzBCQUFBO2dCQVFGLGFBQUM7WUFBRCxDQVBBLEFBT0MsQ0FQMkIscUJBQVMsR0FPcEM7WUFQRCwyQkFPQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvQWlJY29uL0FpSWNvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LEVsZW1lbnRSZWYsUmVuZGVyZXJ9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtBaUNvbnRyb2x9IGZyb20gJy4uL0FpQ29udHJvbC9BaUNvbnRyb2wnO1xuXG5AQ29tcG9uZW50KEFpQ29udHJvbC5tZXRhKHtcbiAgICAgICAgdGVtcGxhdGVVcmw6J3BhY2thZ2U6c3JjL2NvbXBvbmVudHMvQWlJY29uL0FpSWNvbi5odG1sJyxcbiAgICAgICAgc2VsZWN0b3I6ICdhaS1pY29uJyxcbiAgICB9LHtcbiAgICAgICAgaWdub3JlRGlzYWJsZWQ6MSxcbiAgICAgICAgaWdub3JlRm9jdXM6MVxuICAgIH1cbikpICAgIFxuZXhwb3J0IGNsYXNzIEFpSWNvbiBleHRlbmRzIEFpQ29udHJvbCB7IFxuXG4gICAgY29uc3RydWN0b3IoZWxlOiBFbGVtZW50UmVmKSB7IFxuICAgICAgICBzdXBlcihlbGUpOyBcbiAgICAgICAgdGhpcy5lbmFibGVNYXRlcmlhbCgpO1xuICAgIH1cblxufSBcbiAgXG4gICBcbiBcbiAgIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
