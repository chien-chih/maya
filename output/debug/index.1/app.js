System.register(['angular2/core', 'angular2/platform/browser', 'ai/components/aiCheckbox/aiCheckbox'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, browser_1, checkbox;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (checkbox_1) {
                checkbox = checkbox_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'checkbox-app',
                        template: "\n        <ai-checkbox>small</ai-button>\n        ",
                        directives: [checkbox.AiCheckbox]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
            browser_1.bootstrap(AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LjEvYXBwLnRzIl0sIm5hbWVzIjpbIkFwcENvbXBvbmVudCIsIkFwcENvbXBvbmVudC5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBTUE7Z0JBQUFBO2dCQVNBQyxDQUFDQTtnQkFUREQ7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDUEEsUUFBUUEsRUFBRUEsY0FBY0E7d0JBQ3hCQSxRQUFRQSxFQUFFQSxvREFFTEE7d0JBQ0pBLFVBQVVBLEVBQUVBLENBQUNBLFFBQVFBLENBQUNBLFVBQVVBLENBQUNBO3FCQUNyQ0EsQ0FBQ0E7O2lDQUdEQTtnQkFBREEsbUJBQUNBO1lBQURBLENBVEEsQUFTQ0EsSUFBQTtZQVRELHVDQVNDLENBQUE7WUFFRCxtQkFBUyxDQUFDLFlBQVksQ0FBQyxDQUFDIiwiZmlsZSI6ImluZGV4LjEvYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtib290c3RyYXB9ICAgIGZyb20gJ2FuZ3VsYXIyL3BsYXRmb3JtL2Jyb3dzZXInO1xuaW1wb3J0ICogYXMgYWkgZnJvbSAnYWkvYWknO1xuaW1wb3J0ICogYXMgY2hlY2tib3ggZnJvbSAnYWkvY29tcG9uZW50cy9haUNoZWNrYm94L2FpQ2hlY2tib3gnO1xuICAgICAgICBcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdjaGVja2JveC1hcHAnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxhaS1jaGVja2JveD5zbWFsbDwvYWktYnV0dG9uPlxuICAgICAgICBgXG4gICAgLGRpcmVjdGl2ZXM6IFtjaGVja2JveC5BaUNoZWNrYm94XVxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgeyBcbiAgICBcbn0gICAgICAgICAgICAgIFxuXG5ib290c3RyYXAoQXBwQ29tcG9uZW50KTsgICJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
