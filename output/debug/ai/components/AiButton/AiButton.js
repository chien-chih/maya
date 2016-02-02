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
                    //var el:any = this.ele.nativeElement;
                    //var icon=el.getAttribute('icon');
                    //if(icon){
                    //el.innerHTML=icon;
                    //}
                }
                AiButton = __decorate([
                    core_1.Component(AiControl_1.AiControl.meta({
                        templateUrl: 'package:src/components/AiButton/AiButton.html',
                        selector: 'ai-button',
                        inputs: ['type', 'border'],
                        host: {
                            '[class.raised]': 'type==="raised"',
                            '[class.fab]': 'type==="fab"',
                            '[class.icon]': 'type==="icon"',
                            '[class.material]': 'type==="fab" ||type==="icon"',
                            '[class.link]': '!type',
                            '[class.left]': 'border==="left"',
                            '[class.right]': 'border==="right"',
                        },
                    })), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], AiButton);
                return AiButton;
            })(AiControl_1.AiControl);
            exports_1("AiButton", AiButton);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlCdXR0b24vQWlCdXR0b24udHMiXSwibmFtZXMiOlsiQWlCdXR0b24iLCJBaUJ1dHRvbi5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFHQTtnQkFnQjhCQSw0QkFBU0E7Z0JBSW5DQSxrQkFBWUEsR0FBZUE7b0JBQ3ZCQyxrQkFBTUEsR0FBR0EsQ0FBQ0EsQ0FBQ0E7b0JBQ1hBLHNDQUFzQ0E7b0JBQ3RDQSxtQ0FBbUNBO29CQUNuQ0EsV0FBV0E7b0JBQ1RBLG9CQUFvQkE7b0JBQ3RCQSxHQUFHQTtnQkFDUEEsQ0FBQ0E7Z0JBM0JMRDtvQkFBQ0EsZ0JBQVNBLENBQUNBLHFCQUFTQSxDQUFDQSxJQUFJQSxDQUFDQTt3QkFDdEJBLFdBQVdBLEVBQUNBLCtDQUErQ0E7d0JBQzNEQSxRQUFRQSxFQUFFQSxXQUFXQTt3QkFDckJBLE1BQU1BLEVBQUNBLENBQUNBLE1BQU1BLEVBQUNBLFFBQVFBLENBQUNBO3dCQUN4QkEsSUFBSUEsRUFBQ0E7NEJBQ0hBLGdCQUFnQkEsRUFBQ0EsaUJBQWlCQTs0QkFDbENBLGFBQWFBLEVBQUNBLGNBQWNBOzRCQUM1QkEsY0FBY0EsRUFBQ0EsZUFBZUE7NEJBQzlCQSxrQkFBa0JBLEVBQUNBLDhCQUE4QkE7NEJBQ2pEQSxjQUFjQSxFQUFDQSxPQUFPQTs0QkFDdEJBLGNBQWNBLEVBQUNBLGlCQUFpQkE7NEJBQ2hDQSxlQUFlQSxFQUFDQSxrQkFBa0JBO3lCQUNuQ0E7cUJBQ0pBLENBQUNBLENBQUNBOzs2QkEyRkZBO2dCQUFEQSxlQUFDQTtZQUFEQSxDQXhHQSxBQXdHQ0EsRUF4RjZCLHFCQUFTLEVBd0Z0QztZQXhHRCwrQkF3R0MsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL0FpQnV0dG9uL0FpQnV0dG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsRWxlbWVudFJlZixSZW5kZXJlcn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0FpQ29udHJvbH0gZnJvbSAnLi4vQWlDb250cm9sL0FpQ29udHJvbCc7XG5cbkBDb21wb25lbnQoQWlDb250cm9sLm1ldGEoe1xuICAgIHRlbXBsYXRlVXJsOidwYWNrYWdlOnNyYy9jb21wb25lbnRzL0FpQnV0dG9uL0FpQnV0dG9uLmh0bWwnLFxuICAgIHNlbGVjdG9yOiAnYWktYnV0dG9uJyxcbiAgICBpbnB1dHM6Wyd0eXBlJywnYm9yZGVyJ10sXG4gICAgaG9zdDp7XG4gICAgICAnW2NsYXNzLnJhaXNlZF0nOid0eXBlPT09XCJyYWlzZWRcIicsXG4gICAgICAnW2NsYXNzLmZhYl0nOid0eXBlPT09XCJmYWJcIicsXG4gICAgICAnW2NsYXNzLmljb25dJzondHlwZT09PVwiaWNvblwiJyxcbiAgICAgICdbY2xhc3MubWF0ZXJpYWxdJzondHlwZT09PVwiZmFiXCIgfHx0eXBlPT09XCJpY29uXCInLFxuICAgICAgJ1tjbGFzcy5saW5rXSc6JyF0eXBlJyxcbiAgICAgICdbY2xhc3MubGVmdF0nOidib3JkZXI9PT1cImxlZnRcIicsXG4gICAgICAnW2NsYXNzLnJpZ2h0XSc6J2JvcmRlcj09PVwicmlnaHRcIicsXG4gICAgfSxcbn0pKSAgICBcbi8vc2l6ZTpkZWZhdWx0LHNtYWxsLGxhcmdlXG4vL2NvbG9yOnJlZCxncmVlbix5ZWxsb3dcbmV4cG9ydCBjbGFzcyBBaUJ1dHRvbiBleHRlbmRzIEFpQ29udHJvbHsgXG4gICAgdHlwZTpzdHJpbmc7XG4gICAgYm9yZGVyOnN0cmluZztcbiAgICBcbiAgICBjb25zdHJ1Y3RvcihlbGU6IEVsZW1lbnRSZWYpIHsgXG4gICAgICAgIHN1cGVyKGVsZSk7IFxuICAgICAgICAvL3ZhciBlbDphbnkgPSB0aGlzLmVsZS5uYXRpdmVFbGVtZW50O1xuICAgICAgICAvL3ZhciBpY29uPWVsLmdldEF0dHJpYnV0ZSgnaWNvbicpO1xuICAgICAgICAvL2lmKGljb24pe1xuICAgICAgICAgIC8vZWwuaW5uZXJIVE1MPWljb247XG4gICAgICAgIC8vfVxuICAgIH1cbiAgICBcbiAgICBcbi8qXG4gICAgb25DbGFzc05hbWVSZWJ1aWxkKGVsOmFueSl7XG4gIFxuICAgICAgICB0aGlzLmFkZENsYXNzTmFtZSgnYWktYnV0dG9uJyk7XG4gICAgICAgIGlmKGVsLmdldEF0dHJpYnV0ZSgndHlwZScpKVxuICAgICAgICAgIHRoaXMuYWRkQ2xhc3NOYW1lKGVsLmdldEF0dHJpYnV0ZSgndHlwZScpKTsgLy9yYWlzZWQsZmFiLGljb25cbiAgICAgICAgZWxzZVxuICAgICAgICAgIHRoaXMuYWRkQ2xhc3NOYW1lKCdsaW5rJylcbiAgICAgICAgdGhpcy5hZGRDbGFzc05hbWUoZWwuZ2V0QXR0cmlidXRlKCdib3JkZXInKSk7IC8vdG9wIGxlZnQgYm90dG9tIHJpZ2h0XG5cbiAgICAgICAgdmFyIGljb249ZWwuZ2V0QXR0cmlidXRlKCdpY29uJyk7XG4gICAgICAgIGlmKGljb24pXG4gICAgICAgICAgZWwuY2hpbGROb2Rlc1swXS5pbm5lckhUTUw9XCI8aSBjbGFzcz0nYWktaWNvbic+XCIraWNvbitcIjwvaT5cIjtcbiAgICB9XG4qL1xuXG5cblxuXG4gICAgICAvL1tuZ0NsYXNzXT1cInNldENsYXNzZXMoKVwiXG4gICAgLyogIFxuICAgIG9uTW91c2Vkb3duKCkge1xuICAgICAgZGVidWdnZXJcbiAgICAgIHRoaXMuaXNNb3VzZURvd24gPSB0cnVlO1xuICAgICAgVGltZXJXcmFwcGVyLnNldFRpbWVvdXQoKCkgPT4ge3RoaXMuaXNNb3VzZURvd24gPSBmYWxzZX0sIDEwMCk7XG4gICAgfVxuICBcbiAgICBvbkZvY3VzKCkge1xuICAgICAgZGVidWdnZXJcbiAgICAgIHRoaXMuaXNLZXlib2FyZEZvY3VzZWQgPSAhdGhpcy5pc01vdXNlRG93bjtcbiAgICAgICAgdGhpcy5yZXNldENsYXNzKCk7XG4gICAgfVxuICBcbiAgICBvbkJsdXIoKSB7XG4gICAgICB0aGlzLmlzS2V5Ym9hcmRGb2N1c2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMucmVzZXRDbGFzcygpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgXG4gICAgfSAgICBcblxuICAgIGNvbnN0cnVjdG9yKGVsZTogRWxlbWVudFJlZikge1xuICAgICAgICB2YXIgZWw6YW55ID0gZWxlLm5hdGl2ZUVsZW1lbnQ7XG4gICAgfSBcblxuICAgIGhvc3Q6IHtcbiAgICAgICcobW91c2Vkb3duKSc6ICdvbk1vdXNlZG93bigpJyxcbiAgICAgICcoZm9jdXMpJzogJ29uRm9jdXMoKScsXG4gICAgICAnKGJsdXIpJzogJ29uQmx1cigpJyxcbiAgICAgICdbY2xhc3MuYWktYnV0dG9uLWZvY3VzXSc6ICdpc01vdXNlRG93bicsXG4gICAgICB9LFxuXG5cbiAgICAnW2NsYXNzLnJhaXNlZF0nOiAndHlwZT09PVwicmFpc2VkXCInLFxuICAgICdbY2xhc3MuZmxhZ10nOiAndHlwZT09PVwiZmxhZ1wiJyxcbiAgICAnW2NsYXNzLmZhYl0nOiAndHlwZT09PVwiZmFiXCInLFxuICAgICdbY2xhc3MubGlua10nOiAndHlwZT09PVwibGlua1wiJyxcbiAgICAnW2NsYXNzLmljb25dJzogJ3R5cGU9PT1cImljb25cIicsXG5cbiAgICBzZXRDbGFzc2VzKCkge1xuICAgICAgbGV0IGNsYXNzZXMgPSAgeyBcbiAgICAgICAgYWlCdXR0b246dHJ1ZSxcbiAgICAgICAgcmFpc2VkOiB0aGlzLnR5cGU9PT0ncmFpc2VkJ1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNsYXNzZXM7XG4gICAgfSBcbiAgXG4gIGlzTW91c2VEb3duOiBib29sZWFuID0gZmFsc2U7XG4gICAgaXNNb3VzZURvd246IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBpc0tleWJvYXJkRm9jdXNlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cbiAgICAqL1xufSBcbiAgXG4gICBcbiBcbiAgIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
