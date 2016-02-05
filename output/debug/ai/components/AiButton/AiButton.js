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
            AiButton = (function (_super) {
                __extends(AiButton, _super);
                function AiButton(ele) {
                    _super.call(this, ele);
                    var el = this.ele.nativeElement;
                    if (el.getAttribute('fab') === "" || el.getAttribute('icon') === "") {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlCdXR0b24vQWlCdXR0b24udHMiXSwibmFtZXMiOlsiQWlCdXR0b24iLCJBaUJ1dHRvbi5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFHQTtnQkFVOEJBLDRCQUFTQTtnQkFJbkNBLGtCQUFZQSxHQUFlQTtvQkFDdkJDLGtCQUFNQSxHQUFHQSxDQUFDQSxDQUFDQTtvQkFDWEEsSUFBSUEsRUFBRUEsR0FBT0EsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsYUFBYUEsQ0FBQ0E7b0JBQ3BDQSxFQUFFQSxDQUFBQSxDQUFDQSxFQUFFQSxDQUFDQSxZQUFZQSxDQUFDQSxLQUFLQSxDQUFDQSxLQUFHQSxFQUFFQSxJQUFJQSxFQUFFQSxDQUFDQSxZQUFZQSxDQUFDQSxNQUFNQSxDQUFDQSxLQUFHQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQTt3QkFDL0RBLElBQUlBLENBQUNBLGNBQWNBLEVBQUVBLENBQUNBO29CQUN4QkEsQ0FBQ0E7b0JBRURBLFdBQVdBO29CQUNUQSxvQkFBb0JBO29CQUN0QkEsR0FBR0E7Z0JBQ1BBLENBQUNBO2dCQXhCTEQ7b0JBQUNBLGdCQUFTQSxDQUFDQSxxQkFBU0EsQ0FBQ0EsSUFBSUEsQ0FBQ0E7d0JBQ3RCQSxXQUFXQSxFQUFDQSwrQ0FBK0NBO3dCQUMzREEsUUFBUUEsRUFBRUEsV0FBV0E7d0JBQ3JCQSxNQUFNQSxFQUFDQSxFQUFFQTt3QkFDVEEsSUFBSUEsRUFBQ0EsRUFFSkE7cUJBQ0pBLENBQUNBLENBQUNBOzs2QkE4RkZBO2dCQUFEQSxlQUFDQTtZQUFEQSxDQXJHQSxBQXFHQ0EsRUEzRjZCLHFCQUFTLEVBMkZ0QztZQXJHRCwrQkFxR0MsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL0FpQnV0dG9uL0FpQnV0dG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsRWxlbWVudFJlZixBdHRyaWJ1dGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtBaUNvbnRyb2x9IGZyb20gJy4uL0FpQ29udHJvbC9BaUNvbnRyb2wnO1xuXG5AQ29tcG9uZW50KEFpQ29udHJvbC5tZXRhKHtcbiAgICB0ZW1wbGF0ZVVybDoncGFja2FnZTpzcmMvY29tcG9uZW50cy9BaUJ1dHRvbi9BaUJ1dHRvbi5odG1sJyxcbiAgICBzZWxlY3RvcjogJ2FpLWJ1dHRvbicsXG4gICAgaW5wdXRzOltdLFxuICAgIGhvc3Q6e1xuICAgICAgLy8nW2NsYXNzLm1hdGVyaWFsXSc6J3R5cGU9PT1cImZhYlwiIHx8dHlwZT09PVwiaWNvblwiJyxcbiAgICB9LFxufSkpICAgIFxuLy9zaXplOmRlZmF1bHQsc21hbGwsbGFyZ2Vcbi8vY29sb3I6cmVkLGdyZWVuLHllbGxvd1xuZXhwb3J0IGNsYXNzIEFpQnV0dG9uIGV4dGVuZHMgQWlDb250cm9seyBcbiAgICAvL3R5cGU6c3RyaW5nO1xuICAgIGJvcmRlcjpzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihlbGU6IEVsZW1lbnRSZWYpIHsgXG4gICAgICAgIHN1cGVyKGVsZSk7IFxuICAgICAgICB2YXIgZWw6YW55ID0gdGhpcy5lbGUubmF0aXZlRWxlbWVudDtcbiAgICAgICAgaWYoZWwuZ2V0QXR0cmlidXRlKCdmYWInKT09PVwiXCIgfHwgZWwuZ2V0QXR0cmlidXRlKCdpY29uJyk9PT1cIlwiKSB7XG4gICAgICAgICAgdGhpcy5lbmFibGVNYXRlcmlhbCgpO1xuICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgIC8vaWYoaWNvbil7XG4gICAgICAgICAgLy9lbC5pbm5lckhUTUw9aWNvbjtcbiAgICAgICAgLy99XG4gICAgfVxuICAgIFxuICAgIFxuLypcbiAgICBvbkNsYXNzTmFtZVJlYnVpbGQoZWw6YW55KXtcbiAgXG4gICAgICAgIHRoaXMuYWRkQ2xhc3NOYW1lKCdhaS1idXR0b24nKTtcbiAgICAgICAgaWYoZWwuZ2V0QXR0cmlidXRlKCd0eXBlJykpXG4gICAgICAgICAgdGhpcy5hZGRDbGFzc05hbWUoZWwuZ2V0QXR0cmlidXRlKCd0eXBlJykpOyAvL3JhaXNlZCxmYWIsaWNvblxuICAgICAgICBlbHNlXG4gICAgICAgICAgdGhpcy5hZGRDbGFzc05hbWUoJ2xpbmsnKVxuICAgICAgICB0aGlzLmFkZENsYXNzTmFtZShlbC5nZXRBdHRyaWJ1dGUoJ2JvcmRlcicpKTsgLy90b3AgbGVmdCBib3R0b20gcmlnaHRcblxuICAgICAgICB2YXIgaWNvbj1lbC5nZXRBdHRyaWJ1dGUoJ2ljb24nKTtcbiAgICAgICAgaWYoaWNvbilcbiAgICAgICAgICBlbC5jaGlsZE5vZGVzWzBdLmlubmVySFRNTD1cIjxpIGNsYXNzPSdhaS1pY29uJz5cIitpY29uK1wiPC9pPlwiO1xuICAgIH1cbiovXG5cblxuXG5cbiAgICAgIC8vW25nQ2xhc3NdPVwic2V0Q2xhc3NlcygpXCJcbiAgICAvKiAgXG4gICAgb25Nb3VzZWRvd24oKSB7XG4gICAgICBkZWJ1Z2dlclxuICAgICAgdGhpcy5pc01vdXNlRG93biA9IHRydWU7XG4gICAgICBUaW1lcldyYXBwZXIuc2V0VGltZW91dCgoKSA9PiB7dGhpcy5pc01vdXNlRG93biA9IGZhbHNlfSwgMTAwKTtcbiAgICB9XG4gIFxuICAgIG9uRm9jdXMoKSB7XG4gICAgICBkZWJ1Z2dlclxuICAgICAgdGhpcy5pc0tleWJvYXJkRm9jdXNlZCA9ICF0aGlzLmlzTW91c2VEb3duO1xuICAgICAgICB0aGlzLnJlc2V0Q2xhc3MoKTtcbiAgICB9XG4gIFxuICAgIG9uQmx1cigpIHtcbiAgICAgIHRoaXMuaXNLZXlib2FyZEZvY3VzZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yZXNldENsYXNzKCk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICBcbiAgICB9ICAgIFxuXG4gICAgY29uc3RydWN0b3IoZWxlOiBFbGVtZW50UmVmKSB7XG4gICAgICAgIHZhciBlbDphbnkgPSBlbGUubmF0aXZlRWxlbWVudDtcbiAgICB9IFxuXG4gICAgaG9zdDoge1xuICAgICAgJyhtb3VzZWRvd24pJzogJ29uTW91c2Vkb3duKCknLFxuICAgICAgJyhmb2N1cyknOiAnb25Gb2N1cygpJyxcbiAgICAgICcoYmx1ciknOiAnb25CbHVyKCknLFxuICAgICAgJ1tjbGFzcy5haS1idXR0b24tZm9jdXNdJzogJ2lzTW91c2VEb3duJyxcbiAgICAgIH0sXG5cblxuICAgICdbY2xhc3MucmFpc2VkXSc6ICd0eXBlPT09XCJyYWlzZWRcIicsXG4gICAgJ1tjbGFzcy5mbGFnXSc6ICd0eXBlPT09XCJmbGFnXCInLFxuICAgICdbY2xhc3MuZmFiXSc6ICd0eXBlPT09XCJmYWJcIicsXG4gICAgJ1tjbGFzcy5saW5rXSc6ICd0eXBlPT09XCJsaW5rXCInLFxuICAgICdbY2xhc3NbaWNvbl1dJzogJ3R5cGU9PT1cImljb25cIicsXG5cbiAgICBzZXRDbGFzc2VzKCkge1xuICAgICAgbGV0IGNsYXNzZXMgPSAgeyBcbiAgICAgICAgYWlCdXR0b246dHJ1ZSxcbiAgICAgICAgcmFpc2VkOiB0aGlzLnR5cGU9PT0ncmFpc2VkJ1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNsYXNzZXM7XG4gICAgfSBcbiAgXG4gIGlzTW91c2VEb3duOiBib29sZWFuID0gZmFsc2U7XG4gICAgaXNNb3VzZURvd246IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBpc0tleWJvYXJkRm9jdXNlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cbiAgICAqL1xufSBcbiAgXG4gICBcbiBcbiAgIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
