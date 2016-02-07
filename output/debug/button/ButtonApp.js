System.register(['angular2/core', 'angular2/platform/browser', 'ai/components/AiButton/AiButton', 'ai/components/AiIcon/AiIcon', 'ai/components/AiApp/AiApp'], function(exports_1) {
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
    var core_1, browser_1, AiButton_1, AiIcon_1, AiApp_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (AiButton_1_1) {
                AiButton_1 = AiButton_1_1;
            },
            function (AiIcon_1_1) {
                AiIcon_1 = AiIcon_1_1;
            },
            function (AiApp_1_1) {
                AiApp_1 = AiApp_1_1;
            }],
        execute: function() {
            AppComponent = (function (_super) {
                __extends(AppComponent, _super);
                function AppComponent(ele) {
                    _super.call(this, ele);
                    this.i = 0;
                }
                AppComponent.prototype.isEventSupported = function (eventName) {
                    var TAGNAMES = {
                        'select': 'input', 'change': 'input',
                        'submit': 'form', 'reset': 'form',
                        'error': 'img', 'load': 'img', 'abort': 'img'
                    };
                    var el = document.createElement(TAGNAMES[eventName] || 'div');
                    eventName = 'on' + eventName;
                    var isSupported = (eventName in el);
                    if (!isSupported) {
                        el.setAttribute(eventName, 'return;');
                        isSupported = typeof el[eventName] == 'function';
                    }
                    el = null;
                    return isSupported;
                };
                AppComponent.prototype.onClick = function () {
                    this.i = this.i + 1;
                    console.log(this.i.toString());
                };
                AppComponent = __decorate([
                    core_1.Component(AiApp_1.AiApp.meta({
                        selector: 'button-app',
                        templateUrl: 'package:app/button/ButtonApp.html',
                        directives: [AiButton_1.AiButton, AiIcon_1.AiIcon]
                    })), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], AppComponent);
                return AppComponent;
            })(AiApp_1.AiApp);
            exports_1("AppComponent", AppComponent);
            browser_1.bootstrap(AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1dHRvbi9CdXR0b25BcHAudHMiXSwibmFtZXMiOlsiQXBwQ29tcG9uZW50IiwiQXBwQ29tcG9uZW50LmNvbnN0cnVjdG9yIiwiQXBwQ29tcG9uZW50LmlzRXZlbnRTdXBwb3J0ZWQiLCJBcHBDb21wb25lbnQub25DbGljayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFRQTtnQkFNa0NBLGdDQUFLQTtnQkFFbkNBLHNCQUFZQSxHQUFlQTtvQkFDdkJDLGtCQUFNQSxHQUFHQSxDQUFDQSxDQUFDQTtvQkFxQmZBLE1BQUNBLEdBQVFBLENBQUNBLENBQUNBO2dCQXBCWEEsQ0FBQ0E7Z0JBRURELHVDQUFnQkEsR0FBaEJBLFVBQWlCQSxTQUFTQTtvQkFDeEJFLElBQUlBLFFBQVFBLEdBQUdBO3dCQUNiQSxRQUFRQSxFQUFDQSxPQUFPQSxFQUFDQSxRQUFRQSxFQUFDQSxPQUFPQTt3QkFDakNBLFFBQVFBLEVBQUNBLE1BQU1BLEVBQUNBLE9BQU9BLEVBQUNBLE1BQU1BO3dCQUM5QkEsT0FBT0EsRUFBQ0EsS0FBS0EsRUFBQ0EsTUFBTUEsRUFBQ0EsS0FBS0EsRUFBQ0EsT0FBT0EsRUFBQ0EsS0FBS0E7cUJBQ3pDQSxDQUFBQTtvQkFFQ0EsSUFBSUEsRUFBRUEsR0FBR0EsUUFBUUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsSUFBSUEsS0FBS0EsQ0FBQ0EsQ0FBQ0E7b0JBQzlEQSxTQUFTQSxHQUFHQSxJQUFJQSxHQUFHQSxTQUFTQSxDQUFDQTtvQkFDN0JBLElBQUlBLFdBQVdBLEdBQUdBLENBQUNBLFNBQVNBLElBQUlBLEVBQUVBLENBQUNBLENBQUNBO29CQUNwQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsV0FBV0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7d0JBQ2pCQSxFQUFFQSxDQUFDQSxZQUFZQSxDQUFDQSxTQUFTQSxFQUFFQSxTQUFTQSxDQUFDQSxDQUFDQTt3QkFDdENBLFdBQVdBLEdBQUdBLE9BQU9BLEVBQUVBLENBQUNBLFNBQVNBLENBQUNBLElBQUlBLFVBQVVBLENBQUNBO29CQUNuREEsQ0FBQ0E7b0JBQ0RBLEVBQUVBLEdBQUdBLElBQUlBLENBQUNBO29CQUNWQSxNQUFNQSxDQUFDQSxXQUFXQSxDQUFDQTtnQkFFdkJBLENBQUNBO2dCQUVERiw4QkFBT0EsR0FBUEE7b0JBRUlHLElBQUlBLENBQUNBLENBQUNBLEdBQUNBLElBQUlBLENBQUNBLENBQUNBLEdBQUVBLENBQUNBLENBQUNBO29CQUNqQkEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsUUFBUUEsRUFBRUEsQ0FBQ0EsQ0FBQ0E7Z0JBUXJDQSxDQUFDQTtnQkExQ0hIO29CQUFDQSxnQkFBU0EsQ0FBQ0EsYUFBS0EsQ0FBQ0EsSUFBSUEsQ0FBQ0E7d0JBQ2xCQSxRQUFRQSxFQUFFQSxZQUFZQTt3QkFDdEJBLFdBQVdBLEVBQUNBLG1DQUFtQ0E7d0JBRS9DQSxVQUFVQSxFQUFFQSxDQUFDQSxtQkFBUUEsRUFBQ0EsZUFBTUEsQ0FBQ0E7cUJBQ2hDQSxDQUFDQSxDQUFDQTs7aUNBc0NGQTtnQkFBREEsbUJBQUNBO1lBQURBLENBM0NBLEFBMkNDQSxFQXJDaUMsYUFBSyxFQXFDdEM7WUEzQ0QsdUNBMkNDLENBQUE7WUFFRCxtQkFBUyxDQUFDLFlBQVksQ0FBQyxDQUFDIiwiZmlsZSI6ImJ1dHRvbi9CdXR0b25BcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCxFbGVtZW50UmVmfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Ym9vdHN0cmFwfSAgICBmcm9tICdhbmd1bGFyMi9wbGF0Zm9ybS9icm93c2VyJztcbmltcG9ydCAqIGFzIGFpIGZyb20gJ2FpL2FpJztcbmltcG9ydCAqIGFzIHNhbXBsZSBmcm9tICdhaS9zYW1wbGUvc2FtcGxlJztcbmltcG9ydCB7QWlCdXR0b259IGZyb20gJ2FpL2NvbXBvbmVudHMvQWlCdXR0b24vQWlCdXR0b24nO1xuaW1wb3J0IHtBaUljb259IGZyb20gJ2FpL2NvbXBvbmVudHMvQWlJY29uL0FpSWNvbic7XG5pbXBvcnQge0FpQXBwfSBmcm9tICdhaS9jb21wb25lbnRzL0FpQXBwL0FpQXBwJztcblxuQENvbXBvbmVudChBaUFwcC5tZXRhKHtcbiAgICBzZWxlY3RvcjogJ2J1dHRvbi1hcHAnLFxuICAgIHRlbXBsYXRlVXJsOidwYWNrYWdlOmFwcC9idXR0b24vQnV0dG9uQXBwLmh0bWwnLFxuICAgIC8vdGVtcGxhdGU6IGA8YWktYnV0dG9uPm5vcm1hbDwvYWktYnV0dG9uPmAsXG4gICAgZGlyZWN0aXZlczogW0FpQnV0dG9uLEFpSWNvbl1cbn0pKVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCBleHRlbmRzIEFpQXBweyBcblxuICAgIGNvbnN0cnVjdG9yKGVsZTogRWxlbWVudFJlZikgeyAgXG4gICAgICAgIHN1cGVyKGVsZSk7IFxuICAgIH1cblxuICAgIGlzRXZlbnRTdXBwb3J0ZWQoZXZlbnROYW1lKXtcbiAgICAgIHZhciBUQUdOQU1FUyA9IHtcbiAgICAgICAgJ3NlbGVjdCc6J2lucHV0JywnY2hhbmdlJzonaW5wdXQnLFxuICAgICAgICAnc3VibWl0JzonZm9ybScsJ3Jlc2V0JzonZm9ybScsXG4gICAgICAgICdlcnJvcic6J2ltZycsJ2xvYWQnOidpbWcnLCdhYm9ydCc6J2ltZydcbiAgICAgIH1cblxuICAgICAgICB2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFRBR05BTUVTW2V2ZW50TmFtZV0gfHwgJ2RpdicpO1xuICAgICAgICBldmVudE5hbWUgPSAnb24nICsgZXZlbnROYW1lO1xuICAgICAgICB2YXIgaXNTdXBwb3J0ZWQgPSAoZXZlbnROYW1lIGluIGVsKTtcbiAgICAgICAgaWYgKCFpc1N1cHBvcnRlZCkge1xuICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZShldmVudE5hbWUsICdyZXR1cm47Jyk7XG4gICAgICAgICAgaXNTdXBwb3J0ZWQgPSB0eXBlb2YgZWxbZXZlbnROYW1lXSA9PSAnZnVuY3Rpb24nO1xuICAgICAgICB9XG4gICAgICAgIGVsID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIGlzU3VwcG9ydGVkO1xuICAgICAgXG4gICAgfVxuICAgIGk6bnVtYmVyPTA7XG4gICAgb25DbGljaygpIHtcbiAgICAgICAgLy9hbGVydCgnbW91c2VvdXQ6Jyt0aGlzLmlzRXZlbnRTdXBwb3J0ZWQoJ21vdXNlb3V0JykpO1xuICAgICAgICB0aGlzLmk9dGhpcy5pICsxO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmkudG9TdHJpbmcoKSk7XG5cbiAgICAgICAgLy92YXIgc3RyaW5ncyA9IFsnSGVsbG8nLCAnOTgwNTInLCAxMF07XG4gICAgICAgIC8vdmFyIGwgPSBuZXcgYWkuTGV0dGVyc09ubHlWYWxpZGF0b3IoKTtcbiAgICAgICAgLy9pZihsLmlzQWNjZXB0YWJsZSgnaGVsbG8nKSlcbiAgICAgICAgICAgLy8gYWxlcnQoXCJ0cnVlXCIpO1xuICAgICAgICAgICAgLy9lbHNlXG4gICAgICAgICAgICAvL2FsZXJ0KFwiZmFsc2VcIik7XG4gIH0gIFxufSAgICAgICAgICAgICAgXG5cbmJvb3RzdHJhcChBcHBDb21wb25lbnQpOyAgIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
