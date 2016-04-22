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
                //text:message|ico|color|yes|no
                AiDialog.prototype.notify = function (text, callback) {
                    var n = text.split("|");
                    var context = new Ai_1.AiNotificationContext(n[0], n[1], n[2], n[3]);
                    var bindings = core_1.Injector.resolve([core_1.provide(Ai_1.AiNotificationContext, { useValue: context })]);
                    var dialog = this.modal.open(Ai_1.AiNotification, bindings, Ai_1.AiNotification.DefaultConfig);
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
                AiDialog.prototype.corner = function (text, callback) {
                };
                //text:message|ico|color|yes|no
                AiDialog.prototype.thumb = function (text, callback) {
                };
                AiDialog.prototype.genie = function (text, callback) {
                };
                AiDialog.prototype.flip = function (text, callback) {
                };
                //text:message|ico|color|yes|no
                AiDialog.prototype.progress = function (text, callback) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlEaWFsb2cvQWlEaWFsb2cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFLQTtnQkFFSSxrQkFBb0IsS0FBYztvQkFBZCxVQUFLLEdBQUwsS0FBSyxDQUFTO2dCQUVsQyxDQUFDO2dCQUNELCtCQUErQjtnQkFDL0IsMEJBQU8sR0FBUCxVQUFRLElBQVcsRUFBQyxRQUFhO29CQUM3QixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUN4QixJQUFJLE9BQU8sR0FBa0IsSUFBSSxxQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzVFLElBQUksUUFBUSxHQUFHLGVBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxjQUFPLENBQUMscUJBQWdCLEVBQUUsRUFBQyxRQUFRLEVBQUUsT0FBTyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBRWxGLElBQUksTUFBTSxHQUE0QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDNUMsY0FBUyxFQUFDLFFBQVEsRUFBQyxjQUFTLENBQUMsYUFBYSxDQUFDLENBQUM7b0JBQ3JELE1BQU0sQ0FBQyxJQUFJLENBQ1AsVUFBQyxhQUFhO3dCQUNWLE1BQU0sQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLElBQUksQ0FDNUIsVUFBQyxNQUFNOzRCQUNILEVBQUUsQ0FBQSxDQUFDLFFBQVEsQ0FBQztnQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ2hDLENBQUMsRUFDRDs0QkFDSSxFQUFFLENBQUEsQ0FBQyxRQUFRLENBQUM7Z0NBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUNqQyxD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QkF6Rkw7b0JBQUMsaUJBQVUsRUFBRTs7NEJBQUE7Z0JBNEZiLGVBQUM7WUFBRCxDQTNGQSxBQTJGQyxJQUFBO1lBM0ZELCtCQTJGQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvQWlEaWFsb2cvQWlEaWFsb2cuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGUsRHluYW1pY0NvbXBvbmVudExvYWRlcixDb21wb25lbnRSZWYsRWxlbWVudFJlZixJbmplY3Rvcixwcm92aWRlLFJlc29sdmVkUHJvdmlkZXIsT3B0aW9uYWwsQXBwbGljYXRpb25SZWZ9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtBaU1vZGFsLEFpTW9kYWxJbnN0YW5jZSxBaUFsZXJ0LEFpQWxlcnRDb250ZXh0LEFpQ29uZmlybSxBaUNvbmZpcm1Db250ZXh0LEFpTm90aWZpY2F0aW9uLEFpTm90aWZpY2F0aW9uQ29udGV4dCxBaU1vZGFsQ29uZmlnLEFpTW9kYWxBbGlnbixBaU1vZGFsUG9zaXRpb259IGZyb20gJy4uL0FpJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQWlEaWFsb2d7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1vZGFsOiBBaU1vZGFsKXtcblxuICAgIH1cbiAgICAvL3RleHQ6bWVzc2FnZXx0aXRsZXxpY298eWVzfG5vXG4gICAgY29uZmlybSh0ZXh0OnN0cmluZyxjYWxsYmFjaz86YW55KXtcbiAgICAgICAgdmFyIG4gPSB0ZXh0LnNwbGl0KFwifFwiKTtcbiAgICAgICAgbGV0IGNvbnRleHQ6QWlDb25maXJtQ29udGV4dD1uZXcgQWlDb25maXJtQ29udGV4dChuWzBdLG5bMV0sblsyXSxuWzNdLG5bNF0pO1xuICAgICAgICBsZXQgYmluZGluZ3MgPSBJbmplY3Rvci5yZXNvbHZlKFtwcm92aWRlKEFpQ29uZmlybUNvbnRleHQsIHt1c2VWYWx1ZTogY29udGV4dH0pXSk7XG5cbiAgICAgICAgbGV0IGRpYWxvZzpQcm9taXNlPEFpTW9kYWxJbnN0YW5jZT4gPSB0aGlzLm1vZGFsLm9wZW4oXG4gICAgICAgICAgICA8YW55PkFpQ29uZmlybSxiaW5kaW5ncyxBaUNvbmZpcm0uRGVmYXVsdENvbmZpZyk7XG4gICAgICAgIGRpYWxvZy50aGVuKFxuICAgICAgICAgICAgKHJlc3VsdFByb21pc2UpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0UHJvbWlzZS5yZXN1bHQudGhlbihcbiAgICAgICAgICAgICAgICAgICAgKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoY2FsbGJhY2spIGNhbGxiYWNrKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAoKSA9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGNhbGxiYWNrKSBjYWxsYmFjayhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy90ZXh0Om1lc3NhZ2V8dGl0bGV8aWNvfG9rXG4gICAgYWxlcnQodGV4dDpzdHJpbmcsY2FsbGJhY2s/OmFueSl7XG4gICAgICAgIHZhciBuID0gdGV4dC5zcGxpdChcInxcIik7XG4gICAgICAgIGxldCBjb250ZXh0OkFpQWxlcnRDb250ZXh0PW5ldyBBaUFsZXJ0Q29udGV4dChuWzBdLG5bMV0sblsyXSxuWzNdKTtcbiAgICAgICAgbGV0IGJpbmRpbmdzID0gSW5qZWN0b3IucmVzb2x2ZShbcHJvdmlkZShBaUFsZXJ0Q29udGV4dCwge3VzZVZhbHVlOiBjb250ZXh0fSldKTtcblxuICAgICAgICBsZXQgZGlhbG9nOlByb21pc2U8QWlNb2RhbEluc3RhbmNlPiA9IHRoaXMubW9kYWwub3BlbihcbiAgICAgICAgICAgIDxhbnk+QWlBbGVydCxiaW5kaW5ncyxBaUFsZXJ0LkRlZmF1bHRDb25maWcpO1xuICAgICAgICBkaWFsb2cudGhlbihcbiAgICAgICAgICAgIChyZXN1bHRQcm9taXNlKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdFByb21pc2UucmVzdWx0LnRoZW4oXG4gICAgICAgICAgICAgICAgICAgIChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGNhbGxiYWNrKSBjYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAoKSA9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGNhbGxiYWNrKSBjYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cbiAgICAvL3RleHQ6bWVzc2FnZXxpY298Y29sb3J8eWVzfG5vXG4gICAgbm90aWZ5KHRleHQ6c3RyaW5nLGNhbGxiYWNrPzphbnkpe1xuICAgICAgICB2YXIgbiA9IHRleHQuc3BsaXQoXCJ8XCIpO1xuICAgICAgICBsZXQgY29udGV4dDpBaU5vdGlmaWNhdGlvbkNvbnRleHQ9bmV3IEFpTm90aWZpY2F0aW9uQ29udGV4dChuWzBdLG5bMV0sblsyXSxuWzNdKTtcbiAgICAgICAgbGV0IGJpbmRpbmdzID0gSW5qZWN0b3IucmVzb2x2ZShbcHJvdmlkZShBaU5vdGlmaWNhdGlvbkNvbnRleHQsIHt1c2VWYWx1ZTogY29udGV4dH0pXSk7XG5cbiAgICAgICAgbGV0IGRpYWxvZzpQcm9taXNlPEFpTW9kYWxJbnN0YW5jZT4gPSB0aGlzLm1vZGFsLm9wZW4oXG4gICAgICAgICAgICA8YW55PkFpTm90aWZpY2F0aW9uLGJpbmRpbmdzLEFpTm90aWZpY2F0aW9uLkRlZmF1bHRDb25maWcpO1xuICAgICAgICBkaWFsb2cudGhlbihcbiAgICAgICAgICAgIChyZXN1bHRQcm9taXNlKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdFByb21pc2UucmVzdWx0LnRoZW4oXG4gICAgICAgICAgICAgICAgICAgIChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGNhbGxiYWNrKSBjYWxsYmFjayh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgKCkgPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihjYWxsYmFjaykgY2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIGNvcm5lcih0ZXh0OnN0cmluZyxjYWxsYmFjaz86YW55KXtcblxuICAgIH1cblxuICAgIC8vdGV4dDptZXNzYWdlfGljb3xjb2xvcnx5ZXN8bm9cbiAgICB0aHVtYih0ZXh0OnN0cmluZyxjYWxsYmFjaz86YW55KXtcblxuICAgIH1cblxuICAgIGdlbmllKHRleHQ6c3RyaW5nLGNhbGxiYWNrPzphbnkpe1xuXG4gICAgfVxuXG4gICAgZmxpcCh0ZXh0OnN0cmluZyxjYWxsYmFjaz86YW55KXtcblxuICAgIH1cblxuICAgIC8vdGV4dDptZXNzYWdlfGljb3xjb2xvcnx5ZXN8bm9cbiAgICBwcm9ncmVzcyh0ZXh0OnN0cmluZyxjYWxsYmFjaz86YW55KXtcblxuICAgIH1cblxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
