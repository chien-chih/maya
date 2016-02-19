System.register(['angular2/core', '../AiToggle/AiToggle'], function(exports_1) {
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
    var core_1, AiToggle_1;
    var AiCheckbox;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (AiToggle_1_1) {
                AiToggle_1 = AiToggle_1_1;
            }],
        execute: function() {
            AiCheckbox = (function (_super) {
                __extends(AiCheckbox, _super);
                function AiCheckbox(ele) {
                    _super.call(this, ele);
                }
                AiCheckbox.prototype.onClick = function () {
                    this.toggle();
                };
                AiCheckbox = __decorate([
                    core_1.Component(AiToggle_1.AiToggle.meta({
                        templateUrl: 'package:src/components/AiCheckbox/AiCheckbox.html',
                        selector: 'ai-checkbox'
                    })), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], AiCheckbox);
                return AiCheckbox;
            })(AiToggle_1.AiToggle);
            exports_1("AiCheckbox", AiCheckbox);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlDaGVja2JveC9BaUNoZWNrYm94LnRzIl0sIm5hbWVzIjpbIkFpQ2hlY2tib3giLCJBaUNoZWNrYm94LmNvbnN0cnVjdG9yIiwiQWlDaGVja2JveC5vbkNsaWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUlBO2dCQUlnQ0EsOEJBQVFBO2dCQUVwQ0Esb0JBQVlBLEdBQWVBO29CQUN2QkMsa0JBQU1BLEdBQUdBLENBQUNBLENBQUNBO2dCQUNmQSxDQUFDQTtnQkFFREQsNEJBQU9BLEdBQVBBO29CQUNJRSxJQUFJQSxDQUFDQSxNQUFNQSxFQUFFQSxDQUFDQTtnQkFDbEJBLENBQUNBO2dCQVpMRjtvQkFBQ0EsZ0JBQVNBLENBQUNBLG1CQUFRQSxDQUFDQSxJQUFJQSxDQUFDQTt3QkFDckJBLFdBQVdBLEVBQUNBLG1EQUFtREE7d0JBQy9EQSxRQUFRQSxFQUFFQSxhQUFhQTtxQkFDMUJBLENBQUNBLENBQUNBOzsrQkFXRkE7Z0JBQURBLGlCQUFDQTtZQUFEQSxDQWRBLEFBY0NBLEVBVitCLG1CQUFRLEVBVXZDO1lBZEQsbUNBY0MsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL0FpQ2hlY2tib3gvQWlDaGVja2JveC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LEVsZW1lbnRSZWZ9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtPYnNlcnZhYmxlV3JhcHBlcixFdmVudEVtaXR0ZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvYXN5bmMnO1xuaW1wb3J0IHtBaVRvZ2dsZX0gZnJvbSAnLi4vQWlUb2dnbGUvQWlUb2dnbGUnO1xuXG5AQ29tcG9uZW50KEFpVG9nZ2xlLm1ldGEoe1xuICAgIHRlbXBsYXRlVXJsOidwYWNrYWdlOnNyYy9jb21wb25lbnRzL0FpQ2hlY2tib3gvQWlDaGVja2JveC5odG1sJyxcbiAgICBzZWxlY3RvcjogJ2FpLWNoZWNrYm94J1xufSkpICAgIFxuZXhwb3J0IGNsYXNzIEFpQ2hlY2tib3ggZXh0ZW5kcyBBaVRvZ2dsZXsgXG5cbiAgICBjb25zdHJ1Y3RvcihlbGU6IEVsZW1lbnRSZWYpIHsgIFxuICAgICAgICBzdXBlcihlbGUpOyBcbiAgICB9XG4gICAgXG4gICAgb25DbGljaygpe1xuICAgICAgICB0aGlzLnRvZ2dsZSgpO1xuICAgIH1cbiAgICBcbn0gIFxuICBcbiAgIFxuIFxuICAiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
