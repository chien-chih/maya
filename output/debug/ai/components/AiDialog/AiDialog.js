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
    var AiDialog;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Ai_1_1) {
                Ai_1 = Ai_1_1;
            }],
        execute: function() {
            AiDialog = (function () {
                function AiDialog(modal) {
                    this.modal = modal;
                }
                //text:message|title|ico|yes|no
                AiDialog.prototype.confirm = function (text, callback) {
                    var n = text.split("|");
                    var context = new Ai_1.AiConfirmContext(n[0], n[1], n[2], n[3], n[4]);
                    var bindings = core_1.Injector.resolve([core_1.provide(Ai_1.AiConfirmContext, { useValue: context })]);
                    var dialog = this.modal.open(Ai_1.AiConfirm, bindings, Ai_1.AiConfirm.DefaultConfig);
                    dialog.then(function (resultPromise) {
                        return resultPromise.result.then(function (result) {
                            if (callback)
                                callback(true);
                        }, function () {
                            if (callback)
                                callback(false);
                        });
                    });
                };
                //text:message|title|ico|ok
                AiDialog.prototype.alert = function (text, callback) {
                    var n = text.split("|");
                    var context = new Ai_1.AiAlertContext(n[0], n[1], n[2], n[3]);
                    var bindings = core_1.Injector.resolve([core_1.provide(Ai_1.AiAlertContext, { useValue: context })]);
                    var dialog = this.modal.open(Ai_1.AiAlert, bindings, Ai_1.AiAlert.DefaultConfig);
                    dialog.then(function (resultPromise) {
                        return resultPromise.result.then(function (result) {
                            if (callback)
                                callback();
                        }, function () {
                            if (callback)
                                callback();
                        });
                    });
                };
                //text:message|icon|ok
                AiDialog.prototype.slidedown = function (text, callback) {
                    this.notification(text, 'slidedown', '', callback);
                };
                //text:message|icon|ok
                AiDialog.prototype.slidedownDark = function (text, callback) {
                    this.notification(text, 'slidedown', 'dark', callback);
                };
                //text:message|icon|ok
                AiDialog.prototype.corner = function (text, callback) {
                    this.notification(text, 'corner', '', callback);
                };
                //text:message|icon|ok
                AiDialog.prototype.cornerDark = function (text, callback) {
                    this.notification(text, 'corner', 'dark', callback);
                };
                //text:message|icon|ok
                AiDialog.prototype.thumb = function (text, callback) {
                    this.notification(text, 'thumb', '', callback);
                };
                //text:message|icon|ok
                AiDialog.prototype.thumbDark = function (text, callback) {
                    this.notification(text, 'thumb', 'dark', callback);
                };
                //text:message|icon|ok
                AiDialog.prototype.flip = function (text, callback) {
                    this.notification(text, 'flip', '', callback);
                };
                //text:message|icon|ok
                AiDialog.prototype.flipDark = function (text, callback) {
                    this.notification(text, 'flip', 'dark', callback);
                };
                //text:message|icon|ok
                AiDialog.prototype.progress = function (text, callback) {
                    this.notification(text, 'progress', '', callback);
                };
                //text:message|icon|ok
                AiDialog.prototype.progressDark = function (text, callback) {
                    this.notification(text, 'progress', 'dark', callback);
                };
                //text:message|icon|ok
                AiDialog.prototype.notification = function (text, style, color, callback) {
                    var n = text.split("|");
                    var context = new Ai_1.AiNotifyContext(n[0], n[1] ? n[1] : '', n[2] ? n[2] : '', style, color);
                    var bindings = core_1.Injector.resolve([core_1.provide(Ai_1.AiNotifyContext, { useValue: context })]);
                    var dialog = this.modal.open(Ai_1.AiNotify, bindings, Ai_1.AiNotify.GetConfig(context));
                    dialog.then(function (resultPromise) {
                        return resultPromise.result.then(function (result) {
                            if (callback)
                                callback(true);
                        }, function () {
                            if (callback)
                                callback();
                        });
                    });
                };
                AiDialog = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [Ai_1.AiModal])
                ], AiDialog);
                return AiDialog;
            }());
            exports_1("AiDialog", AiDialog);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlEaWFsb2cvQWlEaWFsb2cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFLQTtnQkFFSSxrQkFBb0IsS0FBYztvQkFBZCxVQUFLLEdBQUwsS0FBSyxDQUFTO2dCQUVsQyxDQUFDO2dCQUNELCtCQUErQjtnQkFDL0IsMEJBQU8sR0FBUCxVQUFRLElBQVcsRUFBQyxRQUFhO29CQUM3QixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUN4QixJQUFJLE9BQU8sR0FBa0IsSUFBSSxxQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzVFLElBQUksUUFBUSxHQUFHLGVBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxjQUFPLENBQUMscUJBQWdCLEVBQUUsRUFBQyxRQUFRLEVBQUUsT0FBTyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBRWxGLElBQUksTUFBTSxHQUE0QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDNUMsY0FBUyxFQUFDLFFBQVEsRUFBQyxjQUFTLENBQUMsYUFBYSxDQUFDLENBQUM7b0JBQ3JELE1BQU0sQ0FBQyxJQUFJLENBQ1AsVUFBQyxhQUFhO3dCQUNWLE1BQU0sQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLElBQUksQ0FDNUIsVUFBQyxNQUFNOzRCQUNILEVBQUUsQ0FBQSxDQUFDLFFBQVEsQ0FBQztnQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ2hDLENBQUMsRUFDRDs0QkFDSSxFQUFFLENBQUEsQ0FBQyxRQUFRLENBQUM7Z0NBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUNqQyxD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TUFBTSxDQUFDLElBQUksQ0FDUCxVQUFDLGFBQWE7d0JBQ1YsTUFBTSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUM1QixVQUFDLE1BQU07NEJBQ0gsRUFBRSxDQUFBLENBQUMsUUFBUSxDQUFDO2dDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDaEMsQ0FBQyxFQUNEOzRCQUNJLEVBQUUsQ0FBQSxDQUFDLFFBQVEsQ0FBQztnQ0FBQyxRQUFRLEVBQUUsQ0FBQzt3QkFDNUIsQ0FBQyxDQUNKLENBQUM7b0JBQ04sQ0FBQyxDQUFDLENBQUM7Z0JBQ1gsQ0FBQztnQkFySEw7b0JBQUMsaUJBQVUsRUFBRTs7NEJBQUE7Z0JBdUhiLGVBQUM7WUFBRCxDQXRIQSxBQXNIQyxJQUFBO1lBdEhELCtCQXNIQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvQWlEaWFsb2cvQWlEaWFsb2cuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGUsRHluYW1pY0NvbXBvbmVudExvYWRlcixDb21wb25lbnRSZWYsRWxlbWVudFJlZixJbmplY3Rvcixwcm92aWRlLFJlc29sdmVkUHJvdmlkZXIsT3B0aW9uYWwsQXBwbGljYXRpb25SZWZ9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtBaU1vZGFsLEFpTW9kYWxJbnN0YW5jZSxBaUFsZXJ0LEFpQWxlcnRDb250ZXh0LEFpQ29uZmlybSxBaUNvbmZpcm1Db250ZXh0LEFpTm90aWZ5LEFpTm90aWZ5Q29udGV4dCxBaU1vZGFsQ29uZmlnLEFpTW9kYWxBbGlnbixBaU1vZGFsUG9zaXRpb259IGZyb20gJy4uL0FpJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQWlEaWFsb2d7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1vZGFsOiBBaU1vZGFsKXtcblxuICAgIH1cbiAgICAvL3RleHQ6bWVzc2FnZXx0aXRsZXxpY298eWVzfG5vXG4gICAgY29uZmlybSh0ZXh0OnN0cmluZyxjYWxsYmFjaz86YW55KXtcbiAgICAgICAgdmFyIG4gPSB0ZXh0LnNwbGl0KFwifFwiKTtcbiAgICAgICAgbGV0IGNvbnRleHQ6QWlDb25maXJtQ29udGV4dD1uZXcgQWlDb25maXJtQ29udGV4dChuWzBdLG5bMV0sblsyXSxuWzNdLG5bNF0pO1xuICAgICAgICBsZXQgYmluZGluZ3MgPSBJbmplY3Rvci5yZXNvbHZlKFtwcm92aWRlKEFpQ29uZmlybUNvbnRleHQsIHt1c2VWYWx1ZTogY29udGV4dH0pXSk7XG5cbiAgICAgICAgbGV0IGRpYWxvZzpQcm9taXNlPEFpTW9kYWxJbnN0YW5jZT4gPSB0aGlzLm1vZGFsLm9wZW4oXG4gICAgICAgICAgICA8YW55PkFpQ29uZmlybSxiaW5kaW5ncyxBaUNvbmZpcm0uRGVmYXVsdENvbmZpZyk7XG4gICAgICAgIGRpYWxvZy50aGVuKFxuICAgICAgICAgICAgKHJlc3VsdFByb21pc2UpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0UHJvbWlzZS5yZXN1bHQudGhlbihcbiAgICAgICAgICAgICAgICAgICAgKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoY2FsbGJhY2spIGNhbGxiYWNrKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAoKSA9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGNhbGxiYWNrKSBjYWxsYmFjayhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy90ZXh0Om1lc3NhZ2V8dGl0bGV8aWNvfG9rXG4gICAgYWxlcnQodGV4dDpzdHJpbmcsY2FsbGJhY2s/OmFueSl7XG4gICAgICAgIHZhciBuID0gdGV4dC5zcGxpdChcInxcIik7XG4gICAgICAgIGxldCBjb250ZXh0OkFpQWxlcnRDb250ZXh0PW5ldyBBaUFsZXJ0Q29udGV4dChuWzBdLG5bMV0sblsyXSxuWzNdKTtcbiAgICAgICAgbGV0IGJpbmRpbmdzID0gSW5qZWN0b3IucmVzb2x2ZShbcHJvdmlkZShBaUFsZXJ0Q29udGV4dCwge3VzZVZhbHVlOiBjb250ZXh0fSldKTtcblxuICAgICAgICBsZXQgZGlhbG9nOlByb21pc2U8QWlNb2RhbEluc3RhbmNlPiA9IHRoaXMubW9kYWwub3BlbihcbiAgICAgICAgICAgIDxhbnk+QWlBbGVydCxiaW5kaW5ncyxBaUFsZXJ0LkRlZmF1bHRDb25maWcpO1xuICAgICAgICBkaWFsb2cudGhlbihcbiAgICAgICAgICAgIChyZXN1bHRQcm9taXNlKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdFByb21pc2UucmVzdWx0LnRoZW4oXG4gICAgICAgICAgICAgICAgICAgIChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGNhbGxiYWNrKSBjYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAoKSA9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGNhbGxiYWNrKSBjYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vdGV4dDptZXNzYWdlfGljb258b2tcbiAgICBzbGlkZWRvd24odGV4dDpzdHJpbmcsY2FsbGJhY2s/OmFueSl7XG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9uKHRleHQsJ3NsaWRlZG93bicsJycsY2FsbGJhY2spO1xuICAgIH1cbiBcbiAgICAvL3RleHQ6bWVzc2FnZXxpY29ufG9rXG4gICAgc2xpZGVkb3duRGFyayh0ZXh0OnN0cmluZyxjYWxsYmFjaz86YW55KXtcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb24odGV4dCwnc2xpZGVkb3duJywnZGFyaycsY2FsbGJhY2spO1xuICAgIH1cblxuICAgIC8vdGV4dDptZXNzYWdlfGljb258b2tcbiAgICBjb3JuZXIodGV4dDpzdHJpbmcsY2FsbGJhY2s/OmFueSl7XG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9uKHRleHQsJ2Nvcm5lcicsJycsY2FsbGJhY2spO1xuICAgIH1cbiBcbiAgICAvL3RleHQ6bWVzc2FnZXxpY29ufG9rXG4gICAgY29ybmVyRGFyayh0ZXh0OnN0cmluZyxjYWxsYmFjaz86YW55KXtcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb24odGV4dCwnY29ybmVyJywnZGFyaycsY2FsbGJhY2spO1xuICAgIH1cblxuICAgIC8vdGV4dDptZXNzYWdlfGljb258b2tcbiAgICB0aHVtYih0ZXh0OnN0cmluZyxjYWxsYmFjaz86YW55KXtcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb24odGV4dCwndGh1bWInLCcnLGNhbGxiYWNrKTtcbiAgICB9XG4gXG4gICAgLy90ZXh0Om1lc3NhZ2V8aWNvbnxva1xuICAgIHRodW1iRGFyayh0ZXh0OnN0cmluZyxjYWxsYmFjaz86YW55KXtcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb24odGV4dCwndGh1bWInLCdkYXJrJyxjYWxsYmFjayk7XG4gICAgfVxuXG4gICAgLy90ZXh0Om1lc3NhZ2V8aWNvbnxva1xuICAgIGZsaXAodGV4dDpzdHJpbmcsY2FsbGJhY2s/OmFueSl7XG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9uKHRleHQsJ2ZsaXAnLCcnLGNhbGxiYWNrKTtcbiAgICB9XG4gXG4gICAgLy90ZXh0Om1lc3NhZ2V8aWNvbnxva1xuICAgIGZsaXBEYXJrKHRleHQ6c3RyaW5nLGNhbGxiYWNrPzphbnkpe1xuICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbih0ZXh0LCdmbGlwJywnZGFyaycsY2FsbGJhY2spO1xuICAgIH1cblxuICAgIC8vdGV4dDptZXNzYWdlfGljb258b2tcbiAgICBwcm9ncmVzcyh0ZXh0OnN0cmluZyxjYWxsYmFjaz86YW55KXtcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb24odGV4dCwncHJvZ3Jlc3MnLCcnLGNhbGxiYWNrKTtcbiAgICB9XG4gXG4gICAgLy90ZXh0Om1lc3NhZ2V8aWNvbnxva1xuICAgIHByb2dyZXNzRGFyayh0ZXh0OnN0cmluZyxjYWxsYmFjaz86YW55KXtcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb24odGV4dCwncHJvZ3Jlc3MnLCdkYXJrJyxjYWxsYmFjayk7XG4gICAgfVxuXG4gICAgLy90ZXh0Om1lc3NhZ2V8aWNvbnxva1xuICAgIG5vdGlmaWNhdGlvbih0ZXh0OnN0cmluZyxzdHlsZTpzdHJpbmcsY29sb3I6c3RyaW5nLGNhbGxiYWNrPzphbnkpe1xuICAgICAgICB2YXIgbiA9IHRleHQuc3BsaXQoXCJ8XCIpO1xuICAgICAgICBsZXQgY29udGV4dDpBaU5vdGlmeUNvbnRleHQ9bmV3IEFpTm90aWZ5Q29udGV4dChuWzBdLG5bMV0/blsxXTonJyxuWzJdP25bMl06Jycsc3R5bGUsY29sb3IpO1xuICAgICAgICBsZXQgYmluZGluZ3MgPSBJbmplY3Rvci5yZXNvbHZlKFtwcm92aWRlKEFpTm90aWZ5Q29udGV4dCwge3VzZVZhbHVlOiBjb250ZXh0fSldKTtcblxuICAgICAgICBsZXQgZGlhbG9nOlByb21pc2U8QWlNb2RhbEluc3RhbmNlPiA9IHRoaXMubW9kYWwub3BlbihcbiAgICAgICAgICAgIDxhbnk+QWlOb3RpZnksYmluZGluZ3MsQWlOb3RpZnkuR2V0Q29uZmlnKGNvbnRleHQpKTtcbiAgICAgICAgZGlhbG9nLnRoZW4oXG4gICAgICAgICAgICAocmVzdWx0UHJvbWlzZSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHRQcm9taXNlLnJlc3VsdC50aGVuKFxuICAgICAgICAgICAgICAgICAgICAocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihjYWxsYmFjaykgY2FsbGJhY2sodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICgpID0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoY2FsbGJhY2spIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
