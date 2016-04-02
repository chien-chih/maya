System.register(['angular2/core', 'angular2/common', './AiModalInstance'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, AiModalInstance_1;
    var YesNoModalContent, YesNoModal;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (AiModalInstance_1_1) {
                AiModalInstance_1 = AiModalInstance_1_1;
            }],
        execute: function() {
            /**
             * Data definition
             */
            YesNoModalContent = (function () {
                function YesNoModalContent(title, body, hideNo, yesText, noText) {
                    if (title === void 0) { title = 'Hello World Title'; }
                    if (body === void 0) { body = 'Hello World Body!'; }
                    if (hideNo === void 0) { hideNo = false; }
                    if (yesText === void 0) { yesText = 'YES'; }
                    if (noText === void 0) { noText = 'NO'; }
                    this.title = title;
                    this.body = body;
                    this.hideNo = hideNo;
                    this.yesText = yesText;
                    this.noText = noText;
                }
                return YesNoModalContent;
            })();
            exports_1("YesNoModalContent", YesNoModalContent);
            /**
             * A 2 state bootstrap modal window, representing 2 possible answer, true/false.
             */
            YesNoModal = (function () {
                function YesNoModal(instance, modelContentData) {
                    this.instance = instance;
                    this.context = modelContentData;
                }
                YesNoModal.prototype.ok = function ($event) {
                    $event.stopPropagation();
                    this.instance.close(true);
                };
                YesNoModal.prototype.cancel = function () {
                    this.instance.dismiss();
                };
                YesNoModal = __decorate([
                    core_1.Component({
                        selector: 'modal-content',
                        directives: [common_1.NgIf],
                        /* tslint:disable */ template: "<div class=\"modal-header\" style='background:#fff;border:solid 2px red;width:300px;height:100px'>\n        <h3 class=\"modal-title\">{{context.title}}</h3>\n        </div>\n        <div class=\"modal-body\">{{context.body}}</div>\n        <div class=\"modal-footer\">\n            <button class=\"btn btn-primary\" (click)=\"ok($event)\">{{context.yesText}}</button>\n            <button *ngIf=\"!context.hideNo\" class=\"btn btn-warning\" (click)=\"cancel()\">{{context.noText}}</button>\n        </div>"
                    }), 
                    __metadata('design:paramtypes', [AiModalInstance_1.AiModalInstance, YesNoModalContent])
                ], YesNoModal);
                return YesNoModal;
            })();
            exports_1("YesNoModal", YesNoModal);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlQb3B1cC95ZXNOb01vZGFsLnRzIl0sIm5hbWVzIjpbIlllc05vTW9kYWxDb250ZW50IiwiWWVzTm9Nb2RhbENvbnRlbnQuY29uc3RydWN0b3IiLCJZZXNOb01vZGFsIiwiWWVzTm9Nb2RhbC5jb25zdHJ1Y3RvciIsIlllc05vTW9kYWwub2siLCJZZXNOb01vZGFsLmNhbmNlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBT0E7O2VBRUc7WUFDSDtnQkFDSUEsMkJBQ1dBLEtBQW1DQSxFQUNuQ0EsSUFBa0NBLEVBQ2xDQSxNQUF1QkEsRUFDdkJBLE9BQXVCQSxFQUN2QkEsTUFBcUJBO29CQUo1QkMscUJBQTBDQSxHQUExQ0EsMkJBQTBDQTtvQkFDMUNBLG9CQUF5Q0EsR0FBekNBLDBCQUF5Q0E7b0JBQ3pDQSxzQkFBOEJBLEdBQTlCQSxjQUE4QkE7b0JBQzlCQSx1QkFBOEJBLEdBQTlCQSxlQUE4QkE7b0JBQzlCQSxzQkFBNEJBLEdBQTVCQSxhQUE0QkE7b0JBSnJCQSxVQUFLQSxHQUFMQSxLQUFLQSxDQUE4QkE7b0JBQ25DQSxTQUFJQSxHQUFKQSxJQUFJQSxDQUE4QkE7b0JBQ2xDQSxXQUFNQSxHQUFOQSxNQUFNQSxDQUFpQkE7b0JBQ3ZCQSxZQUFPQSxHQUFQQSxPQUFPQSxDQUFnQkE7b0JBQ3ZCQSxXQUFNQSxHQUFOQSxNQUFNQSxDQUFlQTtnQkFDN0JBLENBQUNBO2dCQUNSRCx3QkFBQ0E7WUFBREEsQ0FSQSxBQVFDQSxJQUFBO1lBUkQsaURBUUMsQ0FBQTtZQUVEOztlQUVHO1lBQ0g7Z0JBZ0JJRSxvQkFBbUJBLFFBQXlCQSxFQUFFQSxnQkFBbUNBO29CQUE5REMsYUFBUUEsR0FBUkEsUUFBUUEsQ0FBaUJBO29CQUN4Q0EsSUFBSUEsQ0FBQ0EsT0FBT0EsR0FBc0JBLGdCQUFnQkEsQ0FBQ0E7Z0JBQ3ZEQSxDQUFDQTtnQkFFREQsdUJBQUVBLEdBQUZBLFVBQUdBLE1BQVdBO29CQUNWRSxNQUFNQSxDQUFDQSxlQUFlQSxFQUFFQSxDQUFDQTtvQkFDekJBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLEtBQUtBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO2dCQUM5QkEsQ0FBQ0E7Z0JBRURGLDJCQUFNQSxHQUFOQTtvQkFDSUcsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsT0FBT0EsRUFBRUEsQ0FBQ0E7Z0JBQzVCQSxDQUFDQTtnQkEzQkxIO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1BBLFFBQVFBLEVBQUVBLGVBQWVBO3dCQUN6QkEsVUFBVUEsRUFBRUEsQ0FBRUEsYUFBSUEsQ0FBRUE7d0JBQ3BCQSxvQkFBb0JBLENBQUNBLFFBQVFBLEVBQzdCQSwyZkFPV0E7cUJBQ2RBLENBQUNBOzsrQkFnQkRBO2dCQUFEQSxpQkFBQ0E7WUFBREEsQ0E1QkEsQUE0QkNBLElBQUE7WUE1QkQsbUNBNEJDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9BaVBvcHVwL3llc05vTW9kYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgcHJvdmlkZSwgRWxlbWVudFJlZiwgSW5qZWN0b3J9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtOZ0lmfSBmcm9tICdhbmd1bGFyMi9jb21tb24nO1xuXG5cbmltcG9ydCB7QWlNb2RhbERpYWxvZ30gZnJvbSAnLi9BaU1vZGFsRGlhbG9nJztcbmltcG9ydCB7QWlNb2RhbEluc3RhbmNlfSBmcm9tICcuL0FpTW9kYWxJbnN0YW5jZSc7XG5cbi8qKlxuICogRGF0YSBkZWZpbml0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBZZXNOb01vZGFsQ29udGVudCB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyB0aXRsZTogc3RyaW5nID0gJ0hlbGxvIFdvcmxkIFRpdGxlJyxcbiAgICAgICAgcHVibGljIGJvZHk6IHN0cmluZyA9ICdIZWxsbyBXb3JsZCBCb2R5IScsXG4gICAgICAgIHB1YmxpYyBoaWRlTm86IGJvb2xlYW4gPSBmYWxzZSxcbiAgICAgICAgcHVibGljIHllc1RleHQ6IHN0cmluZyA9ICdZRVMnLFxuICAgICAgICBwdWJsaWMgbm9UZXh0OiBzdHJpbmcgPSAnTk8nXG4gICAgKSB7fVxufVxuXG4vKipcbiAqIEEgMiBzdGF0ZSBib290c3RyYXAgbW9kYWwgd2luZG93LCByZXByZXNlbnRpbmcgMiBwb3NzaWJsZSBhbnN3ZXIsIHRydWUvZmFsc2UuXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbW9kYWwtY29udGVudCcsXG4gICAgZGlyZWN0aXZlczogWyBOZ0lmIF0sXG4gICAgLyogdHNsaW50OmRpc2FibGUgKi8gdGVtcGxhdGU6XG4gICAgYDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIiBzdHlsZT0nYmFja2dyb3VuZDojZmZmO2JvcmRlcjpzb2xpZCAycHggcmVkO3dpZHRoOjMwMHB4O2hlaWdodDoxMDBweCc+XG4gICAgICAgIDxoMyBjbGFzcz1cIm1vZGFsLXRpdGxlXCI+e3tjb250ZXh0LnRpdGxlfX08L2gzPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj57e2NvbnRleHQuYm9keX19PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1mb290ZXJcIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiAoY2xpY2spPVwib2soJGV2ZW50KVwiPnt7Y29udGV4dC55ZXNUZXh0fX08L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCIhY29udGV4dC5oaWRlTm9cIiBjbGFzcz1cImJ0biBidG4td2FybmluZ1wiIChjbGljayk9XCJjYW5jZWwoKVwiPnt7Y29udGV4dC5ub1RleHR9fTwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5gXG59KVxuZXhwb3J0IGNsYXNzIFllc05vTW9kYWwgaW1wbGVtZW50cyBBaU1vZGFsRGlhbG9nIHtcbiAgICBjb250ZXh0OiBZZXNOb01vZGFsQ29udGVudDtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBpbnN0YW5jZTogQWlNb2RhbEluc3RhbmNlLCBtb2RlbENvbnRlbnREYXRhOiBZZXNOb01vZGFsQ29udGVudCkge1xuICAgICAgICB0aGlzLmNvbnRleHQgPSA8WWVzTm9Nb2RhbENvbnRlbnQ+bW9kZWxDb250ZW50RGF0YTtcbiAgICB9XG5cbiAgICBvaygkZXZlbnQ6IGFueSkge1xuICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHRoaXMuaW5zdGFuY2UuY2xvc2UodHJ1ZSk7XG4gICAgfVxuXG4gICAgY2FuY2VsKCkge1xuICAgICAgICB0aGlzLmluc3RhbmNlLmRpc21pc3MoKTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
