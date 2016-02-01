System.register(['angular2/core', '../aiControl'], function(exports_1) {
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
    var core_1, aiControl_1;
    var AiButton;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (aiControl_1_1) {
                aiControl_1 = aiControl_1_1;
            }],
        execute: function() {
            AiButton = (function (_super) {
                __extends(AiButton, _super);
                function AiButton(ele) {
                    _super.call(this, ele);
                }
                AiButton.prototype.onClassNameRebuild = function (el) {
                    this.addClassName('ai-button');
                    if (el.getAttribute('type'))
                        this.addClassName(el.getAttribute('type')); //raised,fab,icon
                    else
                        this.addClassName('link');
                    this.addClassName(el.getAttribute('border')); //top left bottom right
                    var icon = el.getAttribute('icon');
                    if (icon)
                        el.childNodes[0].innerHTML = "<i class='ai-icon'>" + icon + "</i>";
                };
                AiButton = __decorate([
                    core_1.Component(aiControl_1.AiControl.meta({
                        templateUrl: 'package:src/components/aiButton/aiButton.html',
                        selector: 'ai-button',
                    })), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], AiButton);
                return AiButton;
            })(aiControl_1.AiControl);
            exports_1("AiButton", AiButton);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYWlCdXR0b24vYWlCdXR0b24udHMiXSwibmFtZXMiOlsiQWlCdXR0b24iLCJBaUJ1dHRvbi5jb25zdHJ1Y3RvciIsIkFpQnV0dG9uLm9uQ2xhc3NOYW1lUmVidWlsZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFHQTtnQkFNOEJBLDRCQUFTQTtnQkFDbkNBLGtCQUFZQSxHQUFlQTtvQkFBSUMsa0JBQU1BLEdBQUdBLENBQUNBLENBQUNBO2dCQUFDQSxDQUFDQTtnQkFFNUNELHFDQUFrQkEsR0FBbEJBLFVBQW1CQSxFQUFNQTtvQkFFckJFLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLFdBQVdBLENBQUNBLENBQUNBO29CQUMvQkEsRUFBRUEsQ0FBQUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7d0JBQ3pCQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxFQUFFQSxDQUFDQSxZQUFZQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxpQkFBaUJBO29CQUMvREEsSUFBSUE7d0JBQ0ZBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLE1BQU1BLENBQUNBLENBQUFBO29CQUMzQkEsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsdUJBQXVCQTtvQkFFckVBLElBQUlBLElBQUlBLEdBQUNBLEVBQUVBLENBQUNBLFlBQVlBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBO29CQUNqQ0EsRUFBRUEsQ0FBQUEsQ0FBQ0EsSUFBSUEsQ0FBQ0E7d0JBQ05BLEVBQUVBLENBQUNBLFVBQVVBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLFNBQVNBLEdBQUNBLHFCQUFxQkEsR0FBQ0EsSUFBSUEsR0FBQ0EsTUFBTUEsQ0FBQ0E7Z0JBQ25FQSxDQUFDQTtnQkFyQkxGO29CQUFDQSxnQkFBU0EsQ0FBQ0EscUJBQVNBLENBQUNBLElBQUlBLENBQUNBO3dCQUN0QkEsV0FBV0EsRUFBQ0EsK0NBQStDQTt3QkFDM0RBLFFBQVFBLEVBQUVBLFdBQVdBO3FCQUN4QkEsQ0FBQ0EsQ0FBQ0E7OzZCQStFRkE7Z0JBQURBLGVBQUNBO1lBQURBLENBbEZBLEFBa0ZDQSxFQTVFNkIscUJBQVMsRUE0RXRDO1lBbEZELCtCQWtGQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvYWlCdXR0b24vYWlCdXR0b24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCxFbGVtZW50UmVmLFJlbmRlcmVyfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7QWlDb250cm9sfSBmcm9tICcuLi9haUNvbnRyb2wnO1xuXG5AQ29tcG9uZW50KEFpQ29udHJvbC5tZXRhKHtcbiAgICB0ZW1wbGF0ZVVybDoncGFja2FnZTpzcmMvY29tcG9uZW50cy9haUJ1dHRvbi9haUJ1dHRvbi5odG1sJyxcbiAgICBzZWxlY3RvcjogJ2FpLWJ1dHRvbicsXG59KSkgICAgXG4vL3NpemU6ZGVmYXVsdCxzbWFsbCxsYXJnZVxuLy9jb2xvcjpyZWQsZ3JlZW4seWVsbG93XG5leHBvcnQgY2xhc3MgQWlCdXR0b24gZXh0ZW5kcyBBaUNvbnRyb2x7IFxuICAgIGNvbnN0cnVjdG9yKGVsZTogRWxlbWVudFJlZikgeyBzdXBlcihlbGUpOyB9XG5cbiAgICBvbkNsYXNzTmFtZVJlYnVpbGQoZWw6YW55KXtcbiAgXG4gICAgICAgIHRoaXMuYWRkQ2xhc3NOYW1lKCdhaS1idXR0b24nKTtcbiAgICAgICAgaWYoZWwuZ2V0QXR0cmlidXRlKCd0eXBlJykpXG4gICAgICAgICAgdGhpcy5hZGRDbGFzc05hbWUoZWwuZ2V0QXR0cmlidXRlKCd0eXBlJykpOyAvL3JhaXNlZCxmYWIsaWNvblxuICAgICAgICBlbHNlXG4gICAgICAgICAgdGhpcy5hZGRDbGFzc05hbWUoJ2xpbmsnKVxuICAgICAgICB0aGlzLmFkZENsYXNzTmFtZShlbC5nZXRBdHRyaWJ1dGUoJ2JvcmRlcicpKTsgLy90b3AgbGVmdCBib3R0b20gcmlnaHRcblxuICAgICAgICB2YXIgaWNvbj1lbC5nZXRBdHRyaWJ1dGUoJ2ljb24nKTtcbiAgICAgICAgaWYoaWNvbilcbiAgICAgICAgICBlbC5jaGlsZE5vZGVzWzBdLmlubmVySFRNTD1cIjxpIGNsYXNzPSdhaS1pY29uJz5cIitpY29uK1wiPC9pPlwiO1xuICAgIH1cblxuXG5cblxuXG4gICAgICAvL1tuZ0NsYXNzXT1cInNldENsYXNzZXMoKVwiXG4gICAgLyogIFxuICAgIG9uTW91c2Vkb3duKCkge1xuICAgICAgZGVidWdnZXJcbiAgICAgIHRoaXMuaXNNb3VzZURvd24gPSB0cnVlO1xuICAgICAgVGltZXJXcmFwcGVyLnNldFRpbWVvdXQoKCkgPT4ge3RoaXMuaXNNb3VzZURvd24gPSBmYWxzZX0sIDEwMCk7XG4gICAgfVxuICBcbiAgICBvbkZvY3VzKCkge1xuICAgICAgZGVidWdnZXJcbiAgICAgIHRoaXMuaXNLZXlib2FyZEZvY3VzZWQgPSAhdGhpcy5pc01vdXNlRG93bjtcbiAgICAgICAgdGhpcy5yZXNldENsYXNzKCk7XG4gICAgfVxuICBcbiAgICBvbkJsdXIoKSB7XG4gICAgICB0aGlzLmlzS2V5Ym9hcmRGb2N1c2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMucmVzZXRDbGFzcygpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgXG4gICAgfSAgICBcblxuICAgIGNvbnN0cnVjdG9yKGVsZTogRWxlbWVudFJlZikge1xuICAgICAgICB2YXIgZWw6YW55ID0gZWxlLm5hdGl2ZUVsZW1lbnQ7XG4gICAgfSBcblxuICAgIGhvc3Q6IHtcbiAgICAgICcobW91c2Vkb3duKSc6ICdvbk1vdXNlZG93bigpJyxcbiAgICAgICcoZm9jdXMpJzogJ29uRm9jdXMoKScsXG4gICAgICAnKGJsdXIpJzogJ29uQmx1cigpJyxcbiAgICAgICdbY2xhc3MuYWktYnV0dG9uLWZvY3VzXSc6ICdpc01vdXNlRG93bicsXG4gICAgICB9LFxuXG5cbiAgICAnW2NsYXNzLnJhaXNlZF0nOiAndHlwZT09PVwicmFpc2VkXCInLFxuICAgICdbY2xhc3MuZmxhZ10nOiAndHlwZT09PVwiZmxhZ1wiJyxcbiAgICAnW2NsYXNzLmZhYl0nOiAndHlwZT09PVwiZmFiXCInLFxuICAgICdbY2xhc3MubGlua10nOiAndHlwZT09PVwibGlua1wiJyxcbiAgICAnW2NsYXNzLmljb25dJzogJ3R5cGU9PT1cImljb25cIicsXG5cbiAgICBzZXRDbGFzc2VzKCkge1xuICAgICAgbGV0IGNsYXNzZXMgPSAgeyBcbiAgICAgICAgYWlCdXR0b246dHJ1ZSxcbiAgICAgICAgcmFpc2VkOiB0aGlzLnR5cGU9PT0ncmFpc2VkJ1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNsYXNzZXM7XG4gICAgfSBcbiAgXG4gIGlzTW91c2VEb3duOiBib29sZWFuID0gZmFsc2U7XG4gICAgaXNNb3VzZURvd246IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBpc0tleWJvYXJkRm9jdXNlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cbiAgICAqL1xufSBcbiAgXG4gICBcbiBcbiAgIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
