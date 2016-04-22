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
    var AiButton;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (AiControl_1_1) {
                AiControl_1 = AiControl_1_1;
            }],
        execute: function() {
            //import {UiService} from '../UiService';
            //,uiService:UiService
            AiButton = (function (_super) {
                __extends(AiButton, _super);
                //type:string;
                //border:string;
                function AiButton(ele) {
                    _super.call(this, ele);
                    if (this.nativeElement.getAttribute('fab') === "" || this.nativeElement.getAttribute('icon') === "") {
                        this.enableMaterial();
                    }
                }
                AiButton = __decorate([
                    core_1.Component(AiControl_1.AiControl.meta({
                        templateUrl: 'package:src/components/AiButton/AiButton.html',
                        selector: 'ai-button',
                        inputs: [],
                        host: {},
                    })), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], AiButton);
                return AiButton;
            }(AiControl_1.AiControl));
            exports_1("AiButton", AiButton);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlCdXR0b24vQWlCdXR0b24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUVBLHlDQUF5QztZQUN6QyxzQkFBc0I7WUFZdEI7Z0JBQThCLDRCQUFTO2dCQUNuQyxjQUFjO2dCQUNkLGdCQUFnQjtnQkFFaEIsa0JBQVksR0FBZTtvQkFDdkIsa0JBQU0sR0FBRyxDQUFDLENBQUM7b0JBQ1gsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEtBQUcsRUFBRSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxLQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7d0JBQy9GLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztvQkFDeEIsQ0FBQztnQkFFTCxDQUFDO2dCQXBCTDtvQkFBQyxnQkFBUyxDQUFDLHFCQUFTLENBQUMsSUFBSSxDQUFDO3dCQUN0QixXQUFXLEVBQUMsK0NBQStDO3dCQUMzRCxRQUFRLEVBQUUsV0FBVzt3QkFDckIsTUFBTSxFQUFDLEVBQUU7d0JBQ1QsSUFBSSxFQUFDLEVBRUo7cUJBQ0osQ0FBQyxDQUFDOzs0QkFBQTtnQkFnQkgsZUFBQztZQUFELENBYkEsQUFhQyxDQWI2QixxQkFBUyxHQWF0QztZQWJELCtCQWFDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9BaUJ1dHRvbi9BaUJ1dHRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LEVsZW1lbnRSZWYsQXR0cmlidXRlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7QWlDb250cm9sfSBmcm9tICcuLi9BaUNvbnRyb2wvQWlDb250cm9sJztcbi8vaW1wb3J0IHtVaVNlcnZpY2V9IGZyb20gJy4uL1VpU2VydmljZSc7XG4vLyx1aVNlcnZpY2U6VWlTZXJ2aWNlXG5cbkBDb21wb25lbnQoQWlDb250cm9sLm1ldGEoe1xuICAgIHRlbXBsYXRlVXJsOidwYWNrYWdlOnNyYy9jb21wb25lbnRzL0FpQnV0dG9uL0FpQnV0dG9uLmh0bWwnLFxuICAgIHNlbGVjdG9yOiAnYWktYnV0dG9uJyxcbiAgICBpbnB1dHM6W10sXG4gICAgaG9zdDp7XG4gICAgICAvLydbY2xhc3MubWF0ZXJpYWxdJzondHlwZT09PVwiZmFiXCIgfHx0eXBlPT09XCJpY29uXCInLFxuICAgIH0sXG59KSlcbi8vc2l6ZTpkZWZhdWx0LHNtYWxsLGxhcmdlXG4vL2NvbG9yOnJlZCxncmVlbix5ZWxsb3dcbmV4cG9ydCBjbGFzcyBBaUJ1dHRvbiBleHRlbmRzIEFpQ29udHJvbHtcbiAgICAvL3R5cGU6c3RyaW5nO1xuICAgIC8vYm9yZGVyOnN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGVsZTogRWxlbWVudFJlZikge1xuICAgICAgICBzdXBlcihlbGUpO1xuICAgICAgICBpZih0aGlzLm5hdGl2ZUVsZW1lbnQuZ2V0QXR0cmlidXRlKCdmYWInKT09PVwiXCIgfHwgdGhpcy5uYXRpdmVFbGVtZW50LmdldEF0dHJpYnV0ZSgnaWNvbicpPT09XCJcIikge1xuICAgICAgICAgIHRoaXMuZW5hYmxlTWF0ZXJpYWwoKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG5cbn1cblxuXG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
