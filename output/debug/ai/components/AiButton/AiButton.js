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
            })(AiControl_1.AiControl);
            exports_1("AiButton", AiButton);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlCdXR0b24vQWlCdXR0b24udHMiXSwibmFtZXMiOlsiQWlCdXR0b24iLCJBaUJ1dHRvbi5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFFQSx5Q0FBeUM7WUFDekMsc0JBQXNCO1lBRXRCO2dCQVU4QkEsNEJBQVNBO2dCQUNuQ0EsY0FBY0E7Z0JBQ2RBLGdCQUFnQkE7Z0JBRWhCQSxrQkFBWUEsR0FBZUE7b0JBQ3ZCQyxrQkFBTUEsR0FBR0EsQ0FBQ0EsQ0FBQ0E7b0JBQ1hBLEVBQUVBLENBQUFBLENBQUNBLElBQUlBLENBQUNBLGFBQWFBLENBQUNBLFlBQVlBLENBQUNBLEtBQUtBLENBQUNBLEtBQUdBLEVBQUVBLElBQUlBLElBQUlBLENBQUNBLGFBQWFBLENBQUNBLFlBQVlBLENBQUNBLE1BQU1BLENBQUNBLEtBQUdBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBO3dCQUMvRkEsSUFBSUEsQ0FBQ0EsY0FBY0EsRUFBRUEsQ0FBQ0E7b0JBQ3hCQSxDQUFDQTtvQkFFREEsV0FBV0E7b0JBQ1RBLG9CQUFvQkE7b0JBQ3RCQSxHQUFHQTtnQkFDUEEsQ0FBQ0E7Z0JBdkJMRDtvQkFBQ0EsZ0JBQVNBLENBQUNBLHFCQUFTQSxDQUFDQSxJQUFJQSxDQUFDQTt3QkFDdEJBLFdBQVdBLEVBQUNBLCtDQUErQ0E7d0JBQzNEQSxRQUFRQSxFQUFFQSxXQUFXQTt3QkFDckJBLE1BQU1BLEVBQUNBLEVBQUVBO3dCQUNUQSxJQUFJQSxFQUFDQSxFQUVKQTtxQkFDSkEsQ0FBQ0EsQ0FBQ0E7OzZCQTZGRkE7Z0JBQURBLGVBQUNBO1lBQURBLENBcEdBLEFBb0dDQSxFQTFGNkIscUJBQVMsRUEwRnRDO1lBcEdELCtCQW9HQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvQWlCdXR0b24vQWlCdXR0b24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCxFbGVtZW50UmVmLEF0dHJpYnV0ZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0FpQ29udHJvbH0gZnJvbSAnLi4vQWlDb250cm9sL0FpQ29udHJvbCc7XG4vL2ltcG9ydCB7VWlTZXJ2aWNlfSBmcm9tICcuLi9VaVNlcnZpY2UnO1xuLy8sdWlTZXJ2aWNlOlVpU2VydmljZVxuXG5AQ29tcG9uZW50KEFpQ29udHJvbC5tZXRhKHtcbiAgICB0ZW1wbGF0ZVVybDoncGFja2FnZTpzcmMvY29tcG9uZW50cy9BaUJ1dHRvbi9BaUJ1dHRvbi5odG1sJyxcbiAgICBzZWxlY3RvcjogJ2FpLWJ1dHRvbicsXG4gICAgaW5wdXRzOltdLFxuICAgIGhvc3Q6e1xuICAgICAgLy8nW2NsYXNzLm1hdGVyaWFsXSc6J3R5cGU9PT1cImZhYlwiIHx8dHlwZT09PVwiaWNvblwiJyxcbiAgICB9LFxufSkpICAgIFxuLy9zaXplOmRlZmF1bHQsc21hbGwsbGFyZ2Vcbi8vY29sb3I6cmVkLGdyZWVuLHllbGxvd1xuZXhwb3J0IGNsYXNzIEFpQnV0dG9uIGV4dGVuZHMgQWlDb250cm9seyBcbiAgICAvL3R5cGU6c3RyaW5nO1xuICAgIC8vYm9yZGVyOnN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGVsZTogRWxlbWVudFJlZikgeyBcbiAgICAgICAgc3VwZXIoZWxlKTsgXG4gICAgICAgIGlmKHRoaXMubmF0aXZlRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2ZhYicpPT09XCJcIiB8fCB0aGlzLm5hdGl2ZUVsZW1lbnQuZ2V0QXR0cmlidXRlKCdpY29uJyk9PT1cIlwiKSB7XG4gICAgICAgICAgdGhpcy5lbmFibGVNYXRlcmlhbCgpO1xuICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgIC8vaWYoaWNvbil7XG4gICAgICAgICAgLy9lbC5pbm5lckhUTUw9aWNvbjtcbiAgICAgICAgLy99XG4gICAgfVxuICAgIFxuICAgIFxuLypcbiAgICBvbkNsYXNzTmFtZVJlYnVpbGQoZWw6YW55KXtcbiAgXG4gICAgICAgIHRoaXMuYWRkQ2xhc3NOYW1lKCdhaS1idXR0b24nKTtcbiAgICAgICAgaWYoZWwuZ2V0QXR0cmlidXRlKCd0eXBlJykpXG4gICAgICAgICAgdGhpcy5hZGRDbGFzc05hbWUoZWwuZ2V0QXR0cmlidXRlKCd0eXBlJykpOyAvL3JhaXNlZCxmYWIsaWNvblxuICAgICAgICBlbHNlXG4gICAgICAgICAgdGhpcy5hZGRDbGFzc05hbWUoJ2xpbmsnKVxuICAgICAgICB0aGlzLmFkZENsYXNzTmFtZShlbC5nZXRBdHRyaWJ1dGUoJ2JvcmRlcicpKTsgLy90b3AgbGVmdCBib3R0b20gcmlnaHRcblxuICAgICAgICB2YXIgaWNvbj1lbC5nZXRBdHRyaWJ1dGUoJ2ljb24nKTtcbiAgICAgICAgaWYoaWNvbilcbiAgICAgICAgICBlbC5jaGlsZE5vZGVzWzBdLmlubmVySFRNTD1cIjxpIGNsYXNzPSdhaS1pY29uJz5cIitpY29uK1wiPC9pPlwiO1xuICAgIH1cbiovXG5cblxuXG5cbiAgICAgIC8vW25nQ2xhc3NdPVwic2V0Q2xhc3NlcygpXCJcbiAgICAvKiAgXG4gICAgb25Nb3VzZWRvd24oKSB7XG4gICAgICBkZWJ1Z2dlclxuICAgICAgdGhpcy5pc01vdXNlRG93biA9IHRydWU7XG4gICAgICBUaW1lcldyYXBwZXIuc2V0VGltZW91dCgoKSA9PiB7dGhpcy5pc01vdXNlRG93biA9IGZhbHNlfSwgMTAwKTtcbiAgICB9XG4gIFxuICAgIG9uRm9jdXMoKSB7XG4gICAgICBkZWJ1Z2dlclxuICAgICAgdGhpcy5pc0tleWJvYXJkRm9jdXNlZCA9ICF0aGlzLmlzTW91c2VEb3duO1xuICAgICAgICB0aGlzLnJlc2V0Q2xhc3MoKTtcbiAgICB9XG4gIFxuICAgIG9uQmx1cigpIHtcbiAgICAgIHRoaXMuaXNLZXlib2FyZEZvY3VzZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yZXNldENsYXNzKCk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICBcbiAgICB9ICAgIFxuXG4gICAgY29uc3RydWN0b3IoZWxlOiBFbGVtZW50UmVmKSB7XG4gICAgICAgIHZhciBlbDphbnkgPSBlbGUubmF0aXZlRWxlbWVudDtcbiAgICB9IFxuXG4gICAgaG9zdDoge1xuICAgICAgJyhtb3VzZWRvd24pJzogJ29uTW91c2Vkb3duKCknLFxuICAgICAgJyhmb2N1cyknOiAnb25Gb2N1cygpJyxcbiAgICAgICcoYmx1ciknOiAnb25CbHVyKCknLFxuICAgICAgJ1tjbGFzcy5haS1idXR0b24tZm9jdXNdJzogJ2lzTW91c2VEb3duJyxcbiAgICAgIH0sXG5cblxuICAgICdbY2xhc3MucmFpc2VkXSc6ICd0eXBlPT09XCJyYWlzZWRcIicsXG4gICAgJ1tjbGFzcy5mbGFnXSc6ICd0eXBlPT09XCJmbGFnXCInLFxuICAgICdbY2xhc3MuZmFiXSc6ICd0eXBlPT09XCJmYWJcIicsXG4gICAgJ1tjbGFzcy5saW5rXSc6ICd0eXBlPT09XCJsaW5rXCInLFxuICAgICdbY2xhc3NbaWNvbl1dJzogJ3R5cGU9PT1cImljb25cIicsXG5cbiAgICBzZXRDbGFzc2VzKCkge1xuICAgICAgbGV0IGNsYXNzZXMgPSAgeyBcbiAgICAgICAgYWlCdXR0b246dHJ1ZSxcbiAgICAgICAgcmFpc2VkOiB0aGlzLnR5cGU9PT0ncmFpc2VkJ1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNsYXNzZXM7XG4gICAgfSBcbiAgXG4gIGlzTW91c2VEb3duOiBib29sZWFuID0gZmFsc2U7XG4gICAgaXNNb3VzZURvd246IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBpc0tleWJvYXJkRm9jdXNlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cbiAgICAqL1xufSBcbiAgXG4gICBcbiBcbiAgIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
