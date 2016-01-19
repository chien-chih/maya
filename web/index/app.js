System.register(['angular2/core', 'angular2/platform/browser', 'ai/ai', 'ai/button/button'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, browser_1, ai, button;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (ai_1) {
                ai = ai_1;
            },
            function (button_1) {
                button = button_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent.prototype.onClick = function () {
                    var strings = ['Hello', '98052', 10];
                    var l = new ai.LettersOnlyValidator();
                    if (l.isAcceptable('hello'))
                        alert("true");
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: '<hello-world>Loading...</hello-world><h1 class="student main">My First Angular 2 App</h1><br><button  (click)="onClick()">click</button>',
                        directives: [button.HelloWorld]
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4L2FwcC50cyJdLCJuYW1lcyI6WyJBcHBDb21wb25lbnQiLCJBcHBDb21wb25lbnQuY29uc3RydWN0b3IiLCJBcHBDb21wb25lbnQub25DbGljayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBS0E7Z0JBQUFBO2dCQWVBQyxDQUFDQTtnQkFSR0QsOEJBQU9BLEdBQVBBO29CQUNJRSxJQUFJQSxPQUFPQSxHQUFHQSxDQUFDQSxPQUFPQSxFQUFFQSxPQUFPQSxFQUFFQSxFQUFFQSxDQUFDQSxDQUFDQTtvQkFDckNBLElBQUlBLENBQUNBLEdBQUdBLElBQUlBLEVBQUVBLENBQUNBLG9CQUFvQkEsRUFBRUEsQ0FBQ0E7b0JBQ3RDQSxFQUFFQSxDQUFBQSxDQUFDQSxDQUFDQSxDQUFDQSxZQUFZQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQTt3QkFDdkJBLEtBQUtBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBO2dCQUd4QkEsQ0FBQ0E7Z0JBZEhGO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1BBLFFBQVFBLEVBQUVBLFFBQVFBO3dCQUNsQkEsUUFBUUEsRUFBRUEsMElBQTBJQTt3QkFDbkpBLFVBQVVBLEVBQUVBLENBQUNBLE1BQU1BLENBQUNBLFVBQVVBLENBQUNBO3FCQUNuQ0EsQ0FBQ0E7O2lDQVdEQTtnQkFBREEsbUJBQUNBO1lBQURBLENBZkEsQUFlQ0EsSUFBQTtZQWZELHVDQWVDLENBQUE7WUFFRCxtQkFBUyxDQUFDLFlBQVksQ0FBQyxDQUFDIiwiZmlsZSI6ImluZGV4L2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Ym9vdHN0cmFwfSAgICBmcm9tICdhbmd1bGFyMi9wbGF0Zm9ybS9icm93c2VyJztcbmltcG9ydCAqIGFzIGFpIGZyb20gJ2FpL2FpJztcbmltcG9ydCAqIGFzIGJ1dHRvbiBmcm9tICdhaS9idXR0b24vYnV0dG9uJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIHRlbXBsYXRlOiAnPGhlbGxvLXdvcmxkPkxvYWRpbmcuLi48L2hlbGxvLXdvcmxkPjxoMSBjbGFzcz1cInN0dWRlbnQgbWFpblwiPk15IEZpcnN0IEFuZ3VsYXIgMiBBcHA8L2gxPjxicj48YnV0dG9uICAoY2xpY2spPVwib25DbGljaygpXCI+Y2xpY2s8L2J1dHRvbj4nXG4gICAgLGRpcmVjdGl2ZXM6IFtidXR0b24uSGVsbG9Xb3JsZF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHsgXG4gICAgXG4gICAgb25DbGljaygpIHtcbiAgICAgICAgdmFyIHN0cmluZ3MgPSBbJ0hlbGxvJywgJzk4MDUyJywgMTBdO1xuICAgICAgICB2YXIgbCA9IG5ldyBhaS5MZXR0ZXJzT25seVZhbGlkYXRvcigpO1xuICAgICAgICBpZihsLmlzQWNjZXB0YWJsZSgnaGVsbG8nKSlcbiAgICAgICAgICAgIGFsZXJ0KFwidHJ1ZVwiKTtcbiAgICAgICAgICAgIC8vZWxzZVxuICAgICAgICAgICAgLy9hbGVydChcImZhbHNlXCIpO1xuICB9IFxufSAgICAgICAgICAgICBcblxuYm9vdHN0cmFwKEFwcENvbXBvbmVudCk7ICAiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
