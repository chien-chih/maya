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
                    //if(icon){
                    //el.innerHTML=icon;
                    //}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlCdXR0b24vQWlCdXR0b24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUVBLHlDQUF5QztZQUN6QyxzQkFBc0I7WUFZdEI7Z0JBQThCLDRCQUFTO2dCQUNuQyxjQUFjO2dCQUNkLGdCQUFnQjtnQkFFaEIsa0JBQVksR0FBZTtvQkFDdkIsa0JBQU0sR0FBRyxDQUFDLENBQUM7b0JBQ1gsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEtBQUcsRUFBRSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxLQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7d0JBQy9GLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztvQkFDeEIsQ0FBQztvQkFFRCxXQUFXO29CQUNULG9CQUFvQjtvQkFDdEIsR0FBRztnQkFDUCxDQUFDO2dCQXZCTDtvQkFBQyxnQkFBUyxDQUFDLHFCQUFTLENBQUMsSUFBSSxDQUFDO3dCQUN0QixXQUFXLEVBQUMsK0NBQStDO3dCQUMzRCxRQUFRLEVBQUUsV0FBVzt3QkFDckIsTUFBTSxFQUFDLEVBQUU7d0JBQ1QsSUFBSSxFQUFDLEVBRUo7cUJBQ0osQ0FBQyxDQUFDOzs0QkFBQTtnQkE2RkgsZUFBQztZQUFELENBMUZBLEFBMEZDLENBMUY2QixxQkFBUyxHQTBGdEM7WUExRkQsK0JBMEZDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9BaUJ1dHRvbi9BaUJ1dHRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LEVsZW1lbnRSZWYsQXR0cmlidXRlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7QWlDb250cm9sfSBmcm9tICcuLi9BaUNvbnRyb2wvQWlDb250cm9sJztcbi8vaW1wb3J0IHtVaVNlcnZpY2V9IGZyb20gJy4uL1VpU2VydmljZSc7XG4vLyx1aVNlcnZpY2U6VWlTZXJ2aWNlXG5cbkBDb21wb25lbnQoQWlDb250cm9sLm1ldGEoe1xuICAgIHRlbXBsYXRlVXJsOidwYWNrYWdlOnNyYy9jb21wb25lbnRzL0FpQnV0dG9uL0FpQnV0dG9uLmh0bWwnLFxuICAgIHNlbGVjdG9yOiAnYWktYnV0dG9uJyxcbiAgICBpbnB1dHM6W10sXG4gICAgaG9zdDp7XG4gICAgICAvLydbY2xhc3MubWF0ZXJpYWxdJzondHlwZT09PVwiZmFiXCIgfHx0eXBlPT09XCJpY29uXCInLFxuICAgIH0sXG59KSkgICAgXG4vL3NpemU6ZGVmYXVsdCxzbWFsbCxsYXJnZVxuLy9jb2xvcjpyZWQsZ3JlZW4seWVsbG93XG5leHBvcnQgY2xhc3MgQWlCdXR0b24gZXh0ZW5kcyBBaUNvbnRyb2x7IFxuICAgIC8vdHlwZTpzdHJpbmc7XG4gICAgLy9ib3JkZXI6c3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZWxlOiBFbGVtZW50UmVmKSB7IFxuICAgICAgICBzdXBlcihlbGUpOyBcbiAgICAgICAgaWYodGhpcy5uYXRpdmVFbGVtZW50LmdldEF0dHJpYnV0ZSgnZmFiJyk9PT1cIlwiIHx8IHRoaXMubmF0aXZlRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2ljb24nKT09PVwiXCIpIHtcbiAgICAgICAgICB0aGlzLmVuYWJsZU1hdGVyaWFsKCk7XG4gICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgLy9pZihpY29uKXtcbiAgICAgICAgICAvL2VsLmlubmVySFRNTD1pY29uO1xuICAgICAgICAvL31cbiAgICB9XG4gICAgXG4gICAgXG4vKlxuICAgIG9uQ2xhc3NOYW1lUmVidWlsZChlbDphbnkpe1xuICBcbiAgICAgICAgdGhpcy5hZGRDbGFzc05hbWUoJ2FpLWJ1dHRvbicpO1xuICAgICAgICBpZihlbC5nZXRBdHRyaWJ1dGUoJ3R5cGUnKSlcbiAgICAgICAgICB0aGlzLmFkZENsYXNzTmFtZShlbC5nZXRBdHRyaWJ1dGUoJ3R5cGUnKSk7IC8vcmFpc2VkLGZhYixpY29uXG4gICAgICAgIGVsc2VcbiAgICAgICAgICB0aGlzLmFkZENsYXNzTmFtZSgnbGluaycpXG4gICAgICAgIHRoaXMuYWRkQ2xhc3NOYW1lKGVsLmdldEF0dHJpYnV0ZSgnYm9yZGVyJykpOyAvL3RvcCBsZWZ0IGJvdHRvbSByaWdodFxuXG4gICAgICAgIHZhciBpY29uPWVsLmdldEF0dHJpYnV0ZSgnaWNvbicpO1xuICAgICAgICBpZihpY29uKVxuICAgICAgICAgIGVsLmNoaWxkTm9kZXNbMF0uaW5uZXJIVE1MPVwiPGkgY2xhc3M9J2FpLWljb24nPlwiK2ljb24rXCI8L2k+XCI7XG4gICAgfVxuKi9cblxuXG5cblxuICAgICAgLy9bbmdDbGFzc109XCJzZXRDbGFzc2VzKClcIlxuICAgIC8qICBcbiAgICBvbk1vdXNlZG93bigpIHtcbiAgICAgIGRlYnVnZ2VyXG4gICAgICB0aGlzLmlzTW91c2VEb3duID0gdHJ1ZTtcbiAgICAgIFRpbWVyV3JhcHBlci5zZXRUaW1lb3V0KCgpID0+IHt0aGlzLmlzTW91c2VEb3duID0gZmFsc2V9LCAxMDApO1xuICAgIH1cbiAgXG4gICAgb25Gb2N1cygpIHtcbiAgICAgIGRlYnVnZ2VyXG4gICAgICB0aGlzLmlzS2V5Ym9hcmRGb2N1c2VkID0gIXRoaXMuaXNNb3VzZURvd247XG4gICAgICAgIHRoaXMucmVzZXRDbGFzcygpO1xuICAgIH1cbiAgXG4gICAgb25CbHVyKCkge1xuICAgICAgdGhpcy5pc0tleWJvYXJkRm9jdXNlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJlc2V0Q2xhc3MoKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgIFxuICAgIH0gICAgXG5cbiAgICBjb25zdHJ1Y3RvcihlbGU6IEVsZW1lbnRSZWYpIHtcbiAgICAgICAgdmFyIGVsOmFueSA9IGVsZS5uYXRpdmVFbGVtZW50O1xuICAgIH0gXG5cbiAgICBob3N0OiB7XG4gICAgICAnKG1vdXNlZG93biknOiAnb25Nb3VzZWRvd24oKScsXG4gICAgICAnKGZvY3VzKSc6ICdvbkZvY3VzKCknLFxuICAgICAgJyhibHVyKSc6ICdvbkJsdXIoKScsXG4gICAgICAnW2NsYXNzLmFpLWJ1dHRvbi1mb2N1c10nOiAnaXNNb3VzZURvd24nLFxuICAgICAgfSxcblxuXG4gICAgJ1tjbGFzcy5yYWlzZWRdJzogJ3R5cGU9PT1cInJhaXNlZFwiJyxcbiAgICAnW2NsYXNzLmZsYWddJzogJ3R5cGU9PT1cImZsYWdcIicsXG4gICAgJ1tjbGFzcy5mYWJdJzogJ3R5cGU9PT1cImZhYlwiJyxcbiAgICAnW2NsYXNzLmxpbmtdJzogJ3R5cGU9PT1cImxpbmtcIicsXG4gICAgJ1tjbGFzc1tpY29uXV0nOiAndHlwZT09PVwiaWNvblwiJyxcblxuICAgIHNldENsYXNzZXMoKSB7XG4gICAgICBsZXQgY2xhc3NlcyA9ICB7IFxuICAgICAgICBhaUJ1dHRvbjp0cnVlLFxuICAgICAgICByYWlzZWQ6IHRoaXMudHlwZT09PSdyYWlzZWQnXG4gICAgICB9XG4gICAgICByZXR1cm4gY2xhc3NlcztcbiAgICB9IFxuICBcbiAgaXNNb3VzZURvd246IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBpc01vdXNlRG93bjogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGlzS2V5Ym9hcmRGb2N1c2VkOiBib29sZWFuID0gZmFsc2U7XG5cblxuICAgICovXG59IFxuICBcbiAgIFxuIFxuICAiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
