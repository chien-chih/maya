System.register(['angular2/core', 'ai/components/AiButton/AiButton', 'ai/components/AiIcon/AiIcon', 'ai/components/AiApp/AiApp'], function(exports_1, context_1) {
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
    var core_1, AiButton_1, AiIcon_1, AiApp_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
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
            }(AiApp_1.AiApp));
            exports_1("AppComponent", AppComponent);
            AiApp_1.AiApp.boot(AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1dHRvbi9CdXR0b25BcHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWNBO2dCQUFrQyxnQ0FBSztnQkFFbkMsc0JBQVksR0FBZTtvQkFDdkIsa0JBQU0sR0FBRyxDQUFDLENBQUM7b0JBcUJmLE1BQUMsR0FBUSxDQUFDLENBQUM7Z0JBcEJYLENBQUM7Z0JBRUQsdUNBQWdCLEdBQWhCLFVBQWlCLFNBQVM7b0JBQ3hCLElBQUksUUFBUSxHQUFHO3dCQUNiLFFBQVEsRUFBQyxPQUFPLEVBQUMsUUFBUSxFQUFDLE9BQU87d0JBQ2pDLFFBQVEsRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLE1BQU07d0JBQzlCLE9BQU8sRUFBQyxLQUFLLEVBQUMsTUFBTSxFQUFDLEtBQUssRUFBQyxPQUFPLEVBQUMsS0FBSztxQkFDekMsQ0FBQTtvQkFFQyxJQUFJLEVBQUUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQztvQkFDOUQsU0FBUyxHQUFHLElBQUksR0FBRyxTQUFTLENBQUM7b0JBQzdCLElBQUksV0FBVyxHQUFHLENBQUMsU0FBUyxJQUFJLEVBQUUsQ0FBQyxDQUFDO29CQUNwQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7d0JBQ2pCLEVBQUUsQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO3dCQUN0QyxXQUFXLEdBQUcsT0FBTyxFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksVUFBVSxDQUFDO29CQUNuRCxDQUFDO29CQUNELEVBQUUsR0FBRyxJQUFJLENBQUM7b0JBQ1YsTUFBTSxDQUFDLFdBQVcsQ0FBQztnQkFFdkIsQ0FBQztnQkFFRCw4QkFBTyxHQUFQO2dCQVlGLENBQUM7Z0JBMUNIO29CQUFDLGdCQUFTLENBQUMsYUFBSyxDQUFDLElBQUksQ0FBQzt3QkFDbEIsUUFBUSxFQUFFLFlBQVk7d0JBQ3RCLFdBQVcsRUFBQyxtQ0FBbUM7d0JBQy9DLFVBQVUsRUFBRSxDQUFDLG1CQUFRLEVBQUMsZUFBTSxDQUFDO3FCQUNoQyxDQUFDLENBQUM7O2dDQUFBO2dCQXVDSCxtQkFBQztZQUFELENBdENBLEFBc0NDLENBdENpQyxhQUFLLEdBc0N0QztZQXRDRCx1Q0FzQ0MsQ0FBQTtZQUtELGFBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMiLCJmaWxlIjoiYnV0dG9uL0J1dHRvbkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5pbXBvcnQge0NvbXBvbmVudCxFbGVtZW50UmVmfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7QWlCdXR0b259IGZyb20gJ2FpL2NvbXBvbmVudHMvQWlCdXR0b24vQWlCdXR0b24nO1xuaW1wb3J0IHtBaUljb259IGZyb20gJ2FpL2NvbXBvbmVudHMvQWlJY29uL0FpSWNvbic7XG5pbXBvcnQge0FpQXBwfSBmcm9tICdhaS9jb21wb25lbnRzL0FpQXBwL0FpQXBwJztcbi8vaW1wb3J0IHtQYXR0ZXJuUGFyc2VyfSBmcm9tICdhaS9jb21wb25lbnRzL0FpSW5wdXQvQWlGb3JtYXR0ZXInO1xuLy9pbXBvcnQge1BhdHRlcm5NYXRjaGVyfSBmcm9tICdhaS9jb21wb25lbnRzL0FpSW5wdXQvQWlGb3JtYXR0ZXInO1xuXG5AQ29tcG9uZW50KEFpQXBwLm1ldGEoe1xuICAgIHNlbGVjdG9yOiAnYnV0dG9uLWFwcCcsXG4gICAgdGVtcGxhdGVVcmw6J3BhY2thZ2U6YXBwL2J1dHRvbi9CdXR0b25BcHAuaHRtbCcsXG4gICAgZGlyZWN0aXZlczogW0FpQnV0dG9uLEFpSWNvbl1cbn0pKVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCBleHRlbmRzIEFpQXBweyBcblxuICAgIGNvbnN0cnVjdG9yKGVsZTogRWxlbWVudFJlZikgeyAgXG4gICAgICAgIHN1cGVyKGVsZSk7IFxuICAgIH1cblxuICAgIGlzRXZlbnRTdXBwb3J0ZWQoZXZlbnROYW1lKXtcbiAgICAgIHZhciBUQUdOQU1FUyA9IHtcbiAgICAgICAgJ3NlbGVjdCc6J2lucHV0JywnY2hhbmdlJzonaW5wdXQnLFxuICAgICAgICAnc3VibWl0JzonZm9ybScsJ3Jlc2V0JzonZm9ybScsXG4gICAgICAgICdlcnJvcic6J2ltZycsJ2xvYWQnOidpbWcnLCdhYm9ydCc6J2ltZydcbiAgICAgIH1cblxuICAgICAgICB2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFRBR05BTUVTW2V2ZW50TmFtZV0gfHwgJ2RpdicpO1xuICAgICAgICBldmVudE5hbWUgPSAnb24nICsgZXZlbnROYW1lO1xuICAgICAgICB2YXIgaXNTdXBwb3J0ZWQgPSAoZXZlbnROYW1lIGluIGVsKTtcbiAgICAgICAgaWYgKCFpc1N1cHBvcnRlZCkge1xuICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZShldmVudE5hbWUsICdyZXR1cm47Jyk7XG4gICAgICAgICAgaXNTdXBwb3J0ZWQgPSB0eXBlb2YgZWxbZXZlbnROYW1lXSA9PSAnZnVuY3Rpb24nO1xuICAgICAgICB9XG4gICAgICAgIGVsID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIGlzU3VwcG9ydGVkO1xuICAgICAgXG4gICAgfVxuICAgIGk6bnVtYmVyPTA7XG4gICAgb25DbGljaygpIHtcbi8qICBcbiAgICAgIHZhciBwcD1uZXcgUGF0dGVyblBhcnNlcigpOyBcbiAgICAgIHZhciByZXN1bHQgPSBwcC5wYXJzZSgnKHt7OUEqfX0pIHt7OUEqfX0te3tBQUFBfX0nKTtcbiAgICAgIFxuICAgICAgdmFyIHBhdHRlcm5NYXRjaGVyPW5ldyBQYXR0ZXJuTWF0Y2hlcigpO1xuICAgICAgcGF0dGVybk1hdGNoZXIuYWRkKCdeYWJjJCcsJ3t7Kn19LXt7Kn19LXt7Kn19Jyk7XG5cbiAgICAgIHZhciByZXN1bHQxPXBhdHRlcm5NYXRjaGVyLmdldFBhdHRlcm4oJ2FiYycpO1xuICAgICAgXG4gICAgICBkZWJ1Z2dlclxuICAgICAgKi8gXG4gIH0gIFxufSAgIFxuXG5cbiBcblxuQWlBcHAuYm9vdChBcHBDb21wb25lbnQpOyAgIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
