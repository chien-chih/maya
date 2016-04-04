System.register(['angular2/core', '../Ai'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, Ai_1;
    var AiConfirmContext, AiConfirm;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Ai_1_1) {
                Ai_1 = Ai_1_1;
            }],
        execute: function() {
            AiConfirmContext = (function () {
                function AiConfirmContext(title, message, ico, yesText, noText) {
                    if (title === void 0) { title = ''; }
                    if (message === void 0) { message = ''; }
                    if (ico === void 0) { ico = ''; }
                    if (yesText === void 0) { yesText = 'YES'; }
                    if (noText === void 0) { noText = 'NO'; }
                    this.title = title;
                    this.message = message;
                    this.ico = ico;
                    this.yesText = yesText;
                    this.noText = noText;
                }
                return AiConfirmContext;
            })();
            exports_1("AiConfirmContext", AiConfirmContext);
            AiConfirm = (function () {
                function AiConfirm(instance, context) {
                    this.instance = instance;
                    this.context = context;
                }
                Object.defineProperty(AiConfirm, "DefaultConfig", {
                    get: function () {
                        var config = new Ai_1.AiModalConfig();
                        config.x = Ai_1.AiModalPosition.Center;
                        config.y = new Ai_1.AiModalPosition(100, Ai_1.AiModalAlign.Begin);
                        config.mask = 'black';
                        config.floating = true;
                        return config;
                    },
                    enumerable: true,
                    configurable: true
                });
                AiConfirm.prototype.ok = function () {
                    this.instance.close(true);
                };
                AiConfirm.prototype.cancel = function () {
                    this.instance.dismiss();
                };
                AiConfirm.prototype.hasIcon = function () {
                    return this.context.ico.length > 0 ? '' : null;
                };
                AiConfirm = __decorate([
                    core_1.Component({
                        selector: 'ai-confirm',
                        directives: [Ai_1.AiButton],
                        template: "<div class='ai-dlg-body' [attr.hasIcon]='hasIcon()'>\n        <div class='title'>{{context.title}}</div>\n        <div class='message'>{{context.message}}</div>\n        <span class='ico' ai-material>{{context.ico}}</span>\n    </div>\n    <div class='bar'>\n        <div class='line'></div>\n        <ai-button class='no' primary (_click)='cancel()'>{{context.noText}}</ai-button>\n        <ai-button class='yes' primary leftborder (_click)='ok()'>{{context.yesText}}</ai-button>    \n    </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [Ai_1.AiModalInstance, AiConfirmContext])
                ], AiConfirm);
                return AiConfirm;
            })();
            exports_1("AiConfirm", AiConfirm);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlEaWFsb2cvQWlDb25maXJtLnRzIl0sIm5hbWVzIjpbIkFpQ29uZmlybUNvbnRleHQiLCJBaUNvbmZpcm1Db250ZXh0LmNvbnN0cnVjdG9yIiwiQWlDb25maXJtIiwiQWlDb25maXJtLmNvbnN0cnVjdG9yIiwiQWlDb25maXJtLkRlZmF1bHRDb25maWciLCJBaUNvbmZpcm0ub2siLCJBaUNvbmZpcm0uY2FuY2VsIiwiQWlDb25maXJtLmhhc0ljb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUdBO2dCQUNJQSwwQkFDV0EsS0FBa0JBLEVBQ2xCQSxPQUFvQkEsRUFDcEJBLEdBQWFBLEVBQ2JBLE9BQXVCQSxFQUN2QkEsTUFBcUJBO29CQUo1QkMscUJBQXlCQSxHQUF6QkEsVUFBeUJBO29CQUN6QkEsdUJBQTJCQSxHQUEzQkEsWUFBMkJBO29CQUMzQkEsbUJBQW9CQSxHQUFwQkEsUUFBb0JBO29CQUNwQkEsdUJBQThCQSxHQUE5QkEsZUFBOEJBO29CQUM5QkEsc0JBQTRCQSxHQUE1QkEsYUFBNEJBO29CQUpyQkEsVUFBS0EsR0FBTEEsS0FBS0EsQ0FBYUE7b0JBQ2xCQSxZQUFPQSxHQUFQQSxPQUFPQSxDQUFhQTtvQkFDcEJBLFFBQUdBLEdBQUhBLEdBQUdBLENBQVVBO29CQUNiQSxZQUFPQSxHQUFQQSxPQUFPQSxDQUFnQkE7b0JBQ3ZCQSxXQUFNQSxHQUFOQSxNQUFNQSxDQUFlQTtnQkFDN0JBLENBQUNBO2dCQUNSRCx1QkFBQ0E7WUFBREEsQ0FSQSxBQVFDQSxJQUFBO1lBUkQsK0NBUUMsQ0FBQTtZQUVEO2dCQTJCSUUsbUJBQW1CQSxRQUF5QkEsRUFBUUEsT0FBeUJBO29CQUExREMsYUFBUUEsR0FBUkEsUUFBUUEsQ0FBaUJBO29CQUFRQSxZQUFPQSxHQUFQQSxPQUFPQSxDQUFrQkE7Z0JBQzdFQSxDQUFDQTtnQkFWREQsc0JBQVdBLDBCQUFhQTt5QkFBeEJBO3dCQUNJRSxJQUFJQSxNQUFNQSxHQUFnQkEsSUFBSUEsa0JBQWFBLEVBQUVBLENBQUNBO3dCQUM5Q0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsR0FBQ0Esb0JBQWVBLENBQUNBLE1BQU1BLENBQUNBO3dCQUNoQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsR0FBQ0EsSUFBSUEsb0JBQWVBLENBQUNBLEdBQUdBLEVBQUNBLGlCQUFZQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTt3QkFDckRBLE1BQU1BLENBQUNBLElBQUlBLEdBQUNBLE9BQU9BLENBQUNBO3dCQUNwQkEsTUFBTUEsQ0FBQ0EsUUFBUUEsR0FBQ0EsSUFBSUEsQ0FBQ0E7d0JBQ3JCQSxNQUFNQSxDQUFDQSxNQUFNQSxDQUFDQTtvQkFDbEJBLENBQUNBOzs7bUJBQUFGO2dCQUtEQSxzQkFBRUEsR0FBRkE7b0JBQ0lHLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLEtBQUtBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO2dCQUM5QkEsQ0FBQ0E7Z0JBRURILDBCQUFNQSxHQUFOQTtvQkFDSUksSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsT0FBT0EsRUFBRUEsQ0FBQ0E7Z0JBQzVCQSxDQUFDQTtnQkFFREosMkJBQU9BLEdBQVBBO29CQUNJSyxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxNQUFNQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxHQUFDQSxJQUFJQSxDQUFDQTtnQkFDakRBLENBQUNBO2dCQXhDTEw7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDUEEsUUFBUUEsRUFBRUEsWUFBWUE7d0JBQ3RCQSxVQUFVQSxFQUFFQSxDQUFDQSxhQUFRQSxDQUFDQTt3QkFDdEJBLFFBQVFBLEVBQ1JBLHdmQVVDQTtxQkFDSkEsQ0FBQ0E7OzhCQTJCREE7Z0JBQURBLGdCQUFDQTtZQUFEQSxDQTFDQSxBQTBDQ0EsSUFBQTtZQTFDRCxpQ0EwQ0MsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL0FpRGlhbG9nL0FpQ29uZmlybS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7QWlCdXR0b24sQWlNb2RhbEluc3RhbmNlLEFpTW9kYWxEaWFsb2csQWlNb2RhbENvbmZpZyxBaU1vZGFsQWxpZ24sQWlNb2RhbFBvc2l0aW9ufSBmcm9tICcuLi9BaSc7XG5cbmV4cG9ydCBjbGFzcyBBaUNvbmZpcm1Db250ZXh0IHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIHRpdGxlOiBzdHJpbmcgPSAnJyxcbiAgICAgICAgcHVibGljIG1lc3NhZ2U6IHN0cmluZyA9ICcnLFxuICAgICAgICBwdWJsaWMgaWNvOnN0cmluZz0nJyxcbiAgICAgICAgcHVibGljIHllc1RleHQ6IHN0cmluZyA9ICdZRVMnLFxuICAgICAgICBwdWJsaWMgbm9UZXh0OiBzdHJpbmcgPSAnTk8nXG4gICAgKSB7fVxufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FpLWNvbmZpcm0nLFxuICAgIGRpcmVjdGl2ZXM6IFtBaUJ1dHRvbl0sXG4gICAgdGVtcGxhdGU6XG4gICAgYDxkaXYgY2xhc3M9J2FpLWRsZy1ib2R5JyBbYXR0ci5oYXNJY29uXT0naGFzSWNvbigpJz5cbiAgICAgICAgPGRpdiBjbGFzcz0ndGl0bGUnPnt7Y29udGV4dC50aXRsZX19PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9J21lc3NhZ2UnPnt7Y29udGV4dC5tZXNzYWdlfX08L2Rpdj5cbiAgICAgICAgPHNwYW4gY2xhc3M9J2ljbycgYWktbWF0ZXJpYWw+e3tjb250ZXh0Lmljb319PC9zcGFuPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9J2Jhcic+XG4gICAgICAgIDxkaXYgY2xhc3M9J2xpbmUnPjwvZGl2PlxuICAgICAgICA8YWktYnV0dG9uIGNsYXNzPSdubycgcHJpbWFyeSAoX2NsaWNrKT0nY2FuY2VsKCknPnt7Y29udGV4dC5ub1RleHR9fTwvYWktYnV0dG9uPlxuICAgICAgICA8YWktYnV0dG9uIGNsYXNzPSd5ZXMnIHByaW1hcnkgbGVmdGJvcmRlciAoX2NsaWNrKT0nb2soKSc+e3tjb250ZXh0Lnllc1RleHR9fTwvYWktYnV0dG9uPiAgICBcbiAgICA8L2Rpdj5cbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzIEFpQ29uZmlybSBpbXBsZW1lbnRzIEFpTW9kYWxEaWFsb2cge1xuXG4gICAgc3RhdGljIGdldCBEZWZhdWx0Q29uZmlnKCk6QWlNb2RhbENvbmZpZ3sgXG4gICAgICAgIGxldCBjb25maWc6QWlNb2RhbENvbmZpZyA9bmV3IEFpTW9kYWxDb25maWcoKTsgICAgXG4gICAgICAgIGNvbmZpZy54PUFpTW9kYWxQb3NpdGlvbi5DZW50ZXI7XG4gICAgICAgIGNvbmZpZy55PW5ldyBBaU1vZGFsUG9zaXRpb24oMTAwLEFpTW9kYWxBbGlnbi5CZWdpbik7XG4gICAgICAgIGNvbmZpZy5tYXNrPSdibGFjayc7XG4gICAgICAgIGNvbmZpZy5mbG9hdGluZz10cnVlO1xuICAgICAgICByZXR1cm4gY29uZmlnOyBcbiAgICB9ICAgIFxuXG4gICAgY29uc3RydWN0b3IocHVibGljIGluc3RhbmNlOiBBaU1vZGFsSW5zdGFuY2UscHVibGljIGNvbnRleHQ6IEFpQ29uZmlybUNvbnRleHQpIHtcbiAgICB9XG5cbiAgICBvaygpIHtcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5jbG9zZSh0cnVlKTtcbiAgICB9XG5cbiAgICBjYW5jZWwoKSB7XG4gICAgICAgIHRoaXMuaW5zdGFuY2UuZGlzbWlzcygpO1xuICAgIH1cbiAgICBcbiAgICBoYXNJY29uKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQuaWNvLmxlbmd0aCA+IDAgPyAnJzpudWxsO1xuICAgIH1cbiAgICBcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
