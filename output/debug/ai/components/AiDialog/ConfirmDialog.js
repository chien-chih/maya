System.register(['angular2/core', 'angular2/common', '../Ai'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, Ai_1;
    var ConfirmContext, ConfirmDialog;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (Ai_1_1) {
                Ai_1 = Ai_1_1;
            }],
        execute: function() {
            ConfirmContext = (function () {
                function ConfirmContext(title, message, yesText, noText) {
                    if (title === void 0) { title = ''; }
                    if (message === void 0) { message = ''; }
                    if (yesText === void 0) { yesText = 'YES'; }
                    if (noText === void 0) { noText = 'NO'; }
                    this.title = title;
                    this.message = message;
                    this.yesText = yesText;
                    this.noText = noText;
                }
                return ConfirmContext;
            })();
            exports_1("ConfirmContext", ConfirmContext);
            /**
             * A 2 state bootstrap modal window, representing 2 possible answer, true/false.
             */
            ConfirmDialog = (function () {
                function ConfirmDialog(instance, context) {
                    this.instance = instance;
                    this.context = context;
                }
                ConfirmDialog.prototype.ok = function ($event) {
                    $event.stopPropagation();
                    this.instance.close(true);
                };
                ConfirmDialog.prototype.cancel = function () {
                    this.instance.dismiss();
                };
                ConfirmDialog = __decorate([
                    core_1.Component({
                        selector: 'modal-content',
                        directives: [common_1.NgIf],
                        /* tslint:disable */ template: "<div class=\"modal-header\" style='background:#fff;border:solid 2px red;width:300px;height:100px'>\n        <h3 class=\"modal-title\">{{context.title}}</h3>\n        </div>\n        <div class=\"modal-body\">{{context.body}}</div>\n        <div class=\"modal-footer\">\n            <button class=\"btn btn-primary\" (click)=\"ok($event)\">{{context.yesText}}</button>\n            <button *ngIf=\"!context.hideNo\" class=\"btn btn-warning\" (click)=\"cancel()\">{{context.noText}}</button>\n        </div>"
                    }), 
                    __metadata('design:paramtypes', [Ai_1.AiModalInstance, ConfirmContext])
                ], ConfirmDialog);
                return ConfirmDialog;
            })();
            exports_1("ConfirmDialog", ConfirmDialog);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlEaWFsb2cvQ29uZmlybURpYWxvZy50cyJdLCJuYW1lcyI6WyJDb25maXJtQ29udGV4dCIsIkNvbmZpcm1Db250ZXh0LmNvbnN0cnVjdG9yIiwiQ29uZmlybURpYWxvZyIsIkNvbmZpcm1EaWFsb2cuY29uc3RydWN0b3IiLCJDb25maXJtRGlhbG9nLm9rIiwiQ29uZmlybURpYWxvZy5jYW5jZWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUlBO2dCQUNJQSx3QkFDV0EsS0FBa0JBLEVBQ2xCQSxPQUFvQkEsRUFDcEJBLE9BQXVCQSxFQUN2QkEsTUFBcUJBO29CQUg1QkMscUJBQXlCQSxHQUF6QkEsVUFBeUJBO29CQUN6QkEsdUJBQTJCQSxHQUEzQkEsWUFBMkJBO29CQUMzQkEsdUJBQThCQSxHQUE5QkEsZUFBOEJBO29CQUM5QkEsc0JBQTRCQSxHQUE1QkEsYUFBNEJBO29CQUhyQkEsVUFBS0EsR0FBTEEsS0FBS0EsQ0FBYUE7b0JBQ2xCQSxZQUFPQSxHQUFQQSxPQUFPQSxDQUFhQTtvQkFDcEJBLFlBQU9BLEdBQVBBLE9BQU9BLENBQWdCQTtvQkFDdkJBLFdBQU1BLEdBQU5BLE1BQU1BLENBQWVBO2dCQUM3QkEsQ0FBQ0E7Z0JBQ1JELHFCQUFDQTtZQUFEQSxDQVBBLEFBT0NBLElBQUE7WUFQRCwyQ0FPQyxDQUFBO1lBRUQ7O2VBRUc7WUFDSDtnQkFnQklFLHVCQUFtQkEsUUFBeUJBLEVBQVNBLE9BQXVCQTtvQkFBekRDLGFBQVFBLEdBQVJBLFFBQVFBLENBQWlCQTtvQkFBU0EsWUFBT0EsR0FBUEEsT0FBT0EsQ0FBZ0JBO2dCQUM1RUEsQ0FBQ0E7Z0JBRURELDBCQUFFQSxHQUFGQSxVQUFHQSxNQUFXQTtvQkFDVkUsTUFBTUEsQ0FBQ0EsZUFBZUEsRUFBRUEsQ0FBQ0E7b0JBQ3pCQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxLQUFLQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtnQkFDOUJBLENBQUNBO2dCQUVERiw4QkFBTUEsR0FBTkE7b0JBQ0lHLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLE9BQU9BLEVBQUVBLENBQUNBO2dCQUM1QkEsQ0FBQ0E7Z0JBMUJMSDtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNQQSxRQUFRQSxFQUFFQSxlQUFlQTt3QkFDekJBLFVBQVVBLEVBQUVBLENBQUVBLGFBQUlBLENBQUVBO3dCQUNwQkEsb0JBQW9CQSxDQUFDQSxRQUFRQSxFQUM3QkEsMmZBT1dBO3FCQUNkQSxDQUFDQTs7a0NBZ0JEQTtnQkFBREEsb0JBQUNBO1lBQURBLENBNUJBLEFBNEJDQSxJQUFBO1lBNUJELHlDQTRCQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvQWlEaWFsb2cvQ29uZmlybURpYWxvZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBwcm92aWRlLCBFbGVtZW50UmVmLCBJbmplY3Rvcn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge05nSWZ9IGZyb20gJ2FuZ3VsYXIyL2NvbW1vbic7XG5pbXBvcnQge0FpTW9kYWxJbnN0YW5jZSxBaU1vZGFsRGlhbG9nfSBmcm9tICcuLi9BaSc7XG5cbmV4cG9ydCBjbGFzcyBDb25maXJtQ29udGV4dCB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyB0aXRsZTogc3RyaW5nID0gJycsXG4gICAgICAgIHB1YmxpYyBtZXNzYWdlOiBzdHJpbmcgPSAnJyxcbiAgICAgICAgcHVibGljIHllc1RleHQ6IHN0cmluZyA9ICdZRVMnLFxuICAgICAgICBwdWJsaWMgbm9UZXh0OiBzdHJpbmcgPSAnTk8nXG4gICAgKSB7fVxufVxuXG4vKipcbiAqIEEgMiBzdGF0ZSBib290c3RyYXAgbW9kYWwgd2luZG93LCByZXByZXNlbnRpbmcgMiBwb3NzaWJsZSBhbnN3ZXIsIHRydWUvZmFsc2UuXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbW9kYWwtY29udGVudCcsXG4gICAgZGlyZWN0aXZlczogWyBOZ0lmIF0sXG4gICAgLyogdHNsaW50OmRpc2FibGUgKi8gdGVtcGxhdGU6XG4gICAgYDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIiBzdHlsZT0nYmFja2dyb3VuZDojZmZmO2JvcmRlcjpzb2xpZCAycHggcmVkO3dpZHRoOjMwMHB4O2hlaWdodDoxMDBweCc+XG4gICAgICAgIDxoMyBjbGFzcz1cIm1vZGFsLXRpdGxlXCI+e3tjb250ZXh0LnRpdGxlfX08L2gzPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj57e2NvbnRleHQuYm9keX19PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1mb290ZXJcIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiAoY2xpY2spPVwib2soJGV2ZW50KVwiPnt7Y29udGV4dC55ZXNUZXh0fX08L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCIhY29udGV4dC5oaWRlTm9cIiBjbGFzcz1cImJ0biBidG4td2FybmluZ1wiIChjbGljayk9XCJjYW5jZWwoKVwiPnt7Y29udGV4dC5ub1RleHR9fTwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5gXG59KVxuZXhwb3J0IGNsYXNzIENvbmZpcm1EaWFsb2cgaW1wbGVtZW50cyBBaU1vZGFsRGlhbG9nIHtcbiAgICBcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBpbnN0YW5jZTogQWlNb2RhbEluc3RhbmNlLHByaXZhdGUgY29udGV4dDogQ29uZmlybUNvbnRleHQpIHtcbiAgICB9XG5cbiAgICBvaygkZXZlbnQ6IGFueSkge1xuICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHRoaXMuaW5zdGFuY2UuY2xvc2UodHJ1ZSk7XG4gICAgfVxuXG4gICAgY2FuY2VsKCkge1xuICAgICAgICB0aGlzLmluc3RhbmNlLmRpc21pc3MoKTtcbiAgICB9XG4gICAgXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
