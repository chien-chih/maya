System.register(['angular2/core', '../Ai', './AiConfirm'], function(exports_1, context_1) {
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
    var core_1, Ai_1, AiConfirm_1;
    var AiAlert;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Ai_1_1) {
                Ai_1 = Ai_1_1;
            },
            function (AiConfirm_1_1) {
                AiConfirm_1 = AiConfirm_1_1;
            }],
        execute: function() {
            AiAlert = (function (_super) {
                __extends(AiAlert, _super);
                function AiAlert(instance, context) {
                    _super.call(this, instance, context);
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
                AiAlert = __decorate([
                    core_1.Component({
                        selector: 'ai-alert',
                        directives: [Ai_1.AiButton],
                        template: "<div class='ai-dlg-body' [attr.hasIcon]='hasIcon()'>\n        <div class='title'>{{context.title}}</div>\n        <div class='message'>{{context.message}}</div>\n        <span class='ico' ai-material>{{context.ico}}</span>\n    </div>\n    <div class='bar'>\n        <ai-button class='yes' red (_click)='ok()'>{{context.yesText}}</ai-button>    \n    </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [Ai_1.AiModalInstance, AiConfirm_1.AiConfirmContext])
                ], AiAlert);
                return AiAlert;
            }(AiConfirm_1.AiConfirm));
            exports_1("AiAlert", AiAlert);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlEaWFsb2cvQWlBbGVydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBa0JBO2dCQUE2QiwyQkFBUztnQkFXbEMsaUJBQW1CLFFBQXlCLEVBQVEsT0FBeUI7b0JBQ3pFLGtCQUFNLFFBQVEsRUFBQyxPQUFPLENBQUMsQ0FBQztvQkFEVCxhQUFRLEdBQVIsUUFBUSxDQUFpQjtvQkFBUSxZQUFPLEdBQVAsT0FBTyxDQUFrQjtnQkFFN0UsQ0FBQztnQkFYRCxzQkFBVyx3QkFBYTt5QkFBeEI7d0JBQ0ksSUFBSSxNQUFNLEdBQWdCLElBQUksa0JBQWEsRUFBRSxDQUFDO3dCQUM5QyxNQUFNLENBQUMsQ0FBQyxHQUFDLG9CQUFlLENBQUMsTUFBTSxDQUFDO3dCQUNoQyxNQUFNLENBQUMsQ0FBQyxHQUFDLElBQUksb0JBQWUsQ0FBQyxHQUFHLEVBQUMsaUJBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDckQsTUFBTSxDQUFDLElBQUksR0FBQyxPQUFPLENBQUM7d0JBQ3BCLE1BQU0sQ0FBQyxRQUFRLEdBQUMsSUFBSSxDQUFDO3dCQUNyQixNQUFNLENBQUMsTUFBTSxDQUFDO29CQUNsQixDQUFDOzs7bUJBQUE7Z0JBdkJMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFVBQVU7d0JBQ3BCLFVBQVUsRUFBRSxDQUFDLGFBQVEsQ0FBQzt3QkFDdEIsUUFBUSxFQUNSLDZXQVFDO3FCQUNKLENBQUM7OzJCQUFBO2dCQWlCRixjQUFDO1lBQUQsQ0FoQkEsQUFnQkMsQ0FoQjRCLHFCQUFTLEdBZ0JyQztZQWhCRCw2QkFnQkMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL0FpRGlhbG9nL0FpQWxlcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0FpQnV0dG9uLEFpTW9kYWxJbnN0YW5jZSxBaU1vZGFsRGlhbG9nLEFpTW9kYWxDb25maWcsQWlNb2RhbEFsaWduLEFpTW9kYWxQb3NpdGlvbn0gZnJvbSAnLi4vQWknO1xuaW1wb3J0IHtBaUNvbmZpcm0sQWlDb25maXJtQ29udGV4dH0gZnJvbSAnLi9BaUNvbmZpcm0nO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FpLWFsZXJ0JyxcbiAgICBkaXJlY3RpdmVzOiBbQWlCdXR0b25dLFxuICAgIHRlbXBsYXRlOlxuICAgIGA8ZGl2IGNsYXNzPSdhaS1kbGctYm9keScgW2F0dHIuaGFzSWNvbl09J2hhc0ljb24oKSc+XG4gICAgICAgIDxkaXYgY2xhc3M9J3RpdGxlJz57e2NvbnRleHQudGl0bGV9fTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPSdtZXNzYWdlJz57e2NvbnRleHQubWVzc2FnZX19PC9kaXY+XG4gICAgICAgIDxzcGFuIGNsYXNzPSdpY28nIGFpLW1hdGVyaWFsPnt7Y29udGV4dC5pY299fTwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPSdiYXInPlxuICAgICAgICA8YWktYnV0dG9uIGNsYXNzPSd5ZXMnIHJlZCAoX2NsaWNrKT0nb2soKSc+e3tjb250ZXh0Lnllc1RleHR9fTwvYWktYnV0dG9uPiAgICBcbiAgICA8L2Rpdj5cbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzIEFpQWxlcnQgZXh0ZW5kcyBBaUNvbmZpcm0ge1xuXG4gICAgc3RhdGljIGdldCBEZWZhdWx0Q29uZmlnKCk6QWlNb2RhbENvbmZpZ3sgXG4gICAgICAgIGxldCBjb25maWc6QWlNb2RhbENvbmZpZyA9bmV3IEFpTW9kYWxDb25maWcoKTsgICAgXG4gICAgICAgIGNvbmZpZy54PUFpTW9kYWxQb3NpdGlvbi5DZW50ZXI7XG4gICAgICAgIGNvbmZpZy55PW5ldyBBaU1vZGFsUG9zaXRpb24oMTAwLEFpTW9kYWxBbGlnbi5CZWdpbik7XG4gICAgICAgIGNvbmZpZy5tYXNrPSdibGFjayc7XG4gICAgICAgIGNvbmZpZy5mbG9hdGluZz10cnVlO1xuICAgICAgICByZXR1cm4gY29uZmlnOyBcbiAgICB9ICAgIFxuXG4gICAgY29uc3RydWN0b3IocHVibGljIGluc3RhbmNlOiBBaU1vZGFsSW5zdGFuY2UscHVibGljIGNvbnRleHQ6IEFpQ29uZmlybUNvbnRleHQpIHtcbiAgICAgICAgc3VwZXIoaW5zdGFuY2UsY29udGV4dCk7XG4gICAgfVxuXG5cbn0gIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
