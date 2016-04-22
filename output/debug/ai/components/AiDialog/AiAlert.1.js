System.register(['angular2/core', '../Ai'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
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
    var AiAlertContext, AiAlert;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Ai_1_1) {
                Ai_1 = Ai_1_1;
            }],
        execute: function() {
            AiAlertContext = (function () {
                function AiAlertContext(title, message, ico, okText) {
                    if (title === void 0) { title = ''; }
                    if (message === void 0) { message = ''; }
                    if (ico === void 0) { ico = ''; }
                    if (okText === void 0) { okText = 'OK'; }
                    this.title = title;
                    this.message = message;
                    this.ico = ico;
                    this.okText = okText;
                }
                return AiAlertContext;
            }());
            exports_1("AiAlertContext", AiAlertContext);
            AiAlert = (function () {
                function AiAlert(instance, context) {
                    this.instance = instance;
                    this.context = context;
                }
                Object.defineProperty(AiAlert, "DefaultConfig", {
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
                AiAlert.prototype.ok = function () {
                    this.instance.dismiss();
                };
                AiAlert.prototype.hasIcon = function () {
                    return this.context.ico.length > 0 ? '' : null;
                };
                AiAlert = __decorate([
                    core_1.Component({
                        selector: 'ai-alert',
                        directives: [Ai_1.AiButton],
                        template: "<div class='ai-dlg-body' [attr.hasIcon]='hasIcon()'>\n        <h2 class='title'>{{context.title}}</h2>\n        <p class='message'>{{context.message}}</p>\n        <div class='left'>\n            <span class='ico' ai-material>{{context.ico}}</span>\n        </div>\n\n    </div>\n    <div class='bar'>\n        <ai-button class='yes' raised red (_click)='ok()'>{{context.okText}}</ai-button>\n    </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [Ai_1.AiModalInstance, AiAlertContext])
                ], AiAlert);
                return AiAlert;
            }());
            exports_1("AiAlert", AiAlert);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlEaWFsb2cvQWlBbGVydC4xLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBR0E7Z0JBQ0ksd0JBQ1csS0FBa0IsRUFDbEIsT0FBb0IsRUFDcEIsR0FBYSxFQUNiLE1BQXFCO29CQUg1QixxQkFBeUIsR0FBekIsVUFBeUI7b0JBQ3pCLHVCQUEyQixHQUEzQixZQUEyQjtvQkFDM0IsbUJBQW9CLEdBQXBCLFFBQW9CO29CQUNwQixzQkFBNEIsR0FBNUIsYUFBNEI7b0JBSHJCLFVBQUssR0FBTCxLQUFLLENBQWE7b0JBQ2xCLFlBQU8sR0FBUCxPQUFPLENBQWE7b0JBQ3BCLFFBQUcsR0FBSCxHQUFHLENBQVU7b0JBQ2IsV0FBTSxHQUFOLE1BQU0sQ0FBZTtnQkFDN0IsQ0FBQztnQkFDUixxQkFBQztZQUFELENBUEEsQUFPQyxJQUFBO1lBUEQsMkNBT0MsQ0FBQTtZQW9CRDtnQkFXSSxpQkFBbUIsUUFBeUIsRUFBUSxPQUF1QjtvQkFBeEQsYUFBUSxHQUFSLFFBQVEsQ0FBaUI7b0JBQVEsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7Z0JBQzNFLENBQUM7Z0JBVkQsc0JBQVcsd0JBQWE7eUJBQXhCO3dCQUNJLElBQUksTUFBTSxHQUFnQixJQUFJLGtCQUFhLEVBQUUsQ0FBQzt3QkFDOUMsTUFBTSxDQUFDLENBQUMsR0FBQyxvQkFBZSxDQUFDLE1BQU0sQ0FBQzt3QkFDaEMsTUFBTSxDQUFDLENBQUMsR0FBQyxJQUFJLG9CQUFlLENBQUMsR0FBRyxFQUFDLGlCQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQ3JELE1BQU0sQ0FBQyxJQUFJLEdBQUMsT0FBTyxDQUFDO3dCQUNwQixNQUFNLENBQUMsUUFBUSxHQUFDLElBQUksQ0FBQzt3QkFDckIsTUFBTSxDQUFDLE1BQU0sQ0FBQztvQkFDbEIsQ0FBQzs7O21CQUFBO2dCQUtELG9CQUFFLEdBQUY7b0JBQ0ksSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDNUIsQ0FBQztnQkFFRCx5QkFBTyxHQUFQO29CQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBQyxJQUFJLENBQUM7Z0JBQ2pELENBQUM7Z0JBckNMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFVBQVU7d0JBQ3BCLFVBQVUsRUFBRSxDQUFDLGFBQVEsQ0FBQzt3QkFDdEIsUUFBUSxFQUNSLDJaQVdDO3FCQUNKLENBQUM7OzJCQUFBO2dCQXdCRixjQUFDO1lBQUQsQ0F2QkEsQUF1QkMsSUFBQTtZQXZCRCw2QkF1QkMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL0FpRGlhbG9nL0FpQWxlcnQuMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7QWlCdXR0b24sQWlDb25maXJtLEFpQ29uZmlybUNvbnRleHQsQWlNb2RhbEluc3RhbmNlLEFpTW9kYWxEaWFsb2csQWlNb2RhbENvbmZpZyxBaU1vZGFsQWxpZ24sQWlNb2RhbFBvc2l0aW9ufSBmcm9tICcuLi9BaSc7XG5cbmV4cG9ydCBjbGFzcyBBaUFsZXJ0Q29udGV4dCB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyB0aXRsZTogc3RyaW5nID0gJycsXG4gICAgICAgIHB1YmxpYyBtZXNzYWdlOiBzdHJpbmcgPSAnJyxcbiAgICAgICAgcHVibGljIGljbzpzdHJpbmc9JycsXG4gICAgICAgIHB1YmxpYyBva1RleHQ6IHN0cmluZyA9ICdPSydcbiAgICApIHt9XG59XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhaS1hbGVydCcsXG4gICAgZGlyZWN0aXZlczogW0FpQnV0dG9uXSxcbiAgICB0ZW1wbGF0ZTpcbiAgICBgPGRpdiBjbGFzcz0nYWktZGxnLWJvZHknIFthdHRyLmhhc0ljb25dPSdoYXNJY29uKCknPlxuICAgICAgICA8aDIgY2xhc3M9J3RpdGxlJz57e2NvbnRleHQudGl0bGV9fTwvaDI+XG4gICAgICAgIDxwIGNsYXNzPSdtZXNzYWdlJz57e2NvbnRleHQubWVzc2FnZX19PC9wPlxuICAgICAgICA8ZGl2IGNsYXNzPSdsZWZ0Jz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdpY28nIGFpLW1hdGVyaWFsPnt7Y29udGV4dC5pY299fTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPSdiYXInPlxuICAgICAgICA8YWktYnV0dG9uIGNsYXNzPSd5ZXMnIHJhaXNlZCByZWQgKF9jbGljayk9J29rKCknPnt7Y29udGV4dC5va1RleHR9fTwvYWktYnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgQWlBbGVydCBpbXBsZW1lbnRzIEFpTW9kYWxEaWFsb2cge1xuXG4gICAgc3RhdGljIGdldCBEZWZhdWx0Q29uZmlnKCk6QWlNb2RhbENvbmZpZ3tcbiAgICAgICAgbGV0IGNvbmZpZzpBaU1vZGFsQ29uZmlnID1uZXcgQWlNb2RhbENvbmZpZygpO1xuICAgICAgICBjb25maWcueD1BaU1vZGFsUG9zaXRpb24uQ2VudGVyO1xuICAgICAgICBjb25maWcueT1uZXcgQWlNb2RhbFBvc2l0aW9uKDEwMCxBaU1vZGFsQWxpZ24uQmVnaW4pO1xuICAgICAgICBjb25maWcubWFzaz0nYmxhY2snO1xuICAgICAgICBjb25maWcuZmxvYXRpbmc9dHJ1ZTtcbiAgICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgaW5zdGFuY2U6IEFpTW9kYWxJbnN0YW5jZSxwdWJsaWMgY29udGV4dDogQWlBbGVydENvbnRleHQpIHtcbiAgICB9XG5cbiAgICBvaygpIHtcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5kaXNtaXNzKCk7XG4gICAgfVxuXG4gICAgaGFzSWNvbigpe1xuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0Lmljby5sZW5ndGggPiAwID8gJyc6bnVsbDtcbiAgICB9XG5cblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
