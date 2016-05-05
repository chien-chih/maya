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
                //text:message|icon|ok
                AiDialog.prototype.waitStart = function (text, callback) {
                    var n = text.split("|");
                    var context = new Ai_1.AiCircleContext(n[0], n[1] ? n[1] : '', n[2] ? n[2] : '');
                    var bindings = core_1.Injector.resolve([core_1.provide(Ai_1.AiCircleContext, { useValue: context })]);
                    var dialog = this.modal.open(Ai_1.AiCircle, bindings, Ai_1.AiCircle.GetConfig(context));
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
                //text:message|icon|ok
                AiDialog.prototype.waitStop = function () {
                    Ai_1.AiCircle.removeDlgInstance();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlEaWFsb2cvQWlEaWFsb2cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFLQTtnQkFJSSxrQkFBb0IsS0FBYztvQkFBZCxVQUFLLEdBQUwsS0FBSyxDQUFTO2dCQUVsQyxDQUFDO2dCQUNELCtCQUErQjtnQkFDL0IsMEJBQU8sR0FBUCxVQUFRLElBQVcsRUFBQyxRQUFhO29CQUM3QixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUN4QixJQUFJLE9BQU8sR0FBa0IsSUFBSSxxQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzVFLElBQUksUUFBUSxHQUFHLGVBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxjQUFPLENBQUMscUJBQWdCLEVBQUUsRUFBQyxRQUFRLEVBQUUsT0FBTyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBRWxGLElBQUksTUFBTSxHQUE0QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDNUMsY0FBUyxFQUFDLFFBQVEsRUFBQyxjQUFTLENBQUMsYUFBYSxDQUFDLENBQUM7b0JBQ3JELE1BQU0sQ0FBQyxJQUFJLENBQ1AsVUFBQyxhQUFhO3dCQUNWLE1BQU0sQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLElBQUksQ0FDNUIsVUFBQyxNQUFNOzRCQUNILEVBQUUsQ0FBQSxDQUFDLFFBQVEsQ0FBQztnQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ2hDLENBQUMsRUFDRDs0QkFDSSxFQUFFLENBQUEsQ0FBQyxRQUFRLENBQUM7Z0NBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUNqQyxD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QUFFOzs0QkFBQTtnQkEySWIsZUFBQztZQUFELENBMUlBLEFBMElDLElBQUE7WUExSUQsK0JBMElDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9BaURpYWxvZy9BaURpYWxvZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZSxEeW5hbWljQ29tcG9uZW50TG9hZGVyLENvbXBvbmVudFJlZixFbGVtZW50UmVmLEluamVjdG9yLHByb3ZpZGUsUmVzb2x2ZWRQcm92aWRlcixPcHRpb25hbCxBcHBsaWNhdGlvblJlZn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0FpTW9kYWwsQWlNb2RhbEluc3RhbmNlLEFpQWxlcnQsQWlBbGVydENvbnRleHQsQWlDb25maXJtLEFpQ29uZmlybUNvbnRleHQsQWlOb3RpZnksQWlOb3RpZnlDb250ZXh0LEFpQ2lyY2xlLEFpQ2lyY2xlQ29udGV4dCxBaU1vZGFsQ29uZmlnLEFpTW9kYWxBbGlnbixBaU1vZGFsUG9zaXRpb259IGZyb20gJy4uL0FpJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQWlEaWFsb2d7XG5cblxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBtb2RhbDogQWlNb2RhbCl7XG5cbiAgICB9XG4gICAgLy90ZXh0Om1lc3NhZ2V8dGl0bGV8aWNvfHllc3xub1xuICAgIGNvbmZpcm0odGV4dDpzdHJpbmcsY2FsbGJhY2s/OmFueSl7XG4gICAgICAgIHZhciBuID0gdGV4dC5zcGxpdChcInxcIik7XG4gICAgICAgIGxldCBjb250ZXh0OkFpQ29uZmlybUNvbnRleHQ9bmV3IEFpQ29uZmlybUNvbnRleHQoblswXSxuWzFdLG5bMl0sblszXSxuWzRdKTtcbiAgICAgICAgbGV0IGJpbmRpbmdzID0gSW5qZWN0b3IucmVzb2x2ZShbcHJvdmlkZShBaUNvbmZpcm1Db250ZXh0LCB7dXNlVmFsdWU6IGNvbnRleHR9KV0pO1xuXG4gICAgICAgIGxldCBkaWFsb2c6UHJvbWlzZTxBaU1vZGFsSW5zdGFuY2U+ID0gdGhpcy5tb2RhbC5vcGVuKFxuICAgICAgICAgICAgPGFueT5BaUNvbmZpcm0sYmluZGluZ3MsQWlDb25maXJtLkRlZmF1bHRDb25maWcpO1xuICAgICAgICBkaWFsb2cudGhlbihcbiAgICAgICAgICAgIChyZXN1bHRQcm9taXNlKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdFByb21pc2UucmVzdWx0LnRoZW4oXG4gICAgICAgICAgICAgICAgICAgIChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGNhbGxiYWNrKSBjYWxsYmFjayh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgKCkgPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihjYWxsYmFjaykgY2FsbGJhY2soZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vdGV4dDptZXNzYWdlfHRpdGxlfGljb3xva1xuICAgIGFsZXJ0KHRleHQ6c3RyaW5nLGNhbGxiYWNrPzphbnkpe1xuICAgICAgICB2YXIgbiA9IHRleHQuc3BsaXQoXCJ8XCIpO1xuICAgICAgICBsZXQgY29udGV4dDpBaUFsZXJ0Q29udGV4dD1uZXcgQWlBbGVydENvbnRleHQoblswXSxuWzFdLG5bMl0sblszXSk7XG4gICAgICAgIGxldCBiaW5kaW5ncyA9IEluamVjdG9yLnJlc29sdmUoW3Byb3ZpZGUoQWlBbGVydENvbnRleHQsIHt1c2VWYWx1ZTogY29udGV4dH0pXSk7XG5cbiAgICAgICAgbGV0IGRpYWxvZzpQcm9taXNlPEFpTW9kYWxJbnN0YW5jZT4gPSB0aGlzLm1vZGFsLm9wZW4oXG4gICAgICAgICAgICA8YW55PkFpQWxlcnQsYmluZGluZ3MsQWlBbGVydC5EZWZhdWx0Q29uZmlnKTtcbiAgICAgICAgZGlhbG9nLnRoZW4oXG4gICAgICAgICAgICAocmVzdWx0UHJvbWlzZSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHRQcm9taXNlLnJlc3VsdC50aGVuKFxuICAgICAgICAgICAgICAgICAgICAocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihjYWxsYmFjaykgY2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgKCkgPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihjYWxsYmFjaykgY2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvL3RleHQ6bWVzc2FnZXxpY29ufG9rXG4gICAgc2xpZGVkb3duKHRleHQ6c3RyaW5nLGNhbGxiYWNrPzphbnkpe1xuICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbih0ZXh0LCdzbGlkZWRvd24nLCcnLGNhbGxiYWNrKTsgXG4gICAgfVxuIFxuICAgIC8vdGV4dDptZXNzYWdlfGljb258b2tcbiAgICBzbGlkZWRvd25EYXJrKHRleHQ6c3RyaW5nLGNhbGxiYWNrPzphbnkpe1xuICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbih0ZXh0LCdzbGlkZWRvd24nLCdkYXJrJyxjYWxsYmFjayk7XG4gICAgfVxuXG4gICAgLy90ZXh0Om1lc3NhZ2V8aWNvbnxva1xuICAgIGNvcm5lcih0ZXh0OnN0cmluZyxjYWxsYmFjaz86YW55KXtcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb24odGV4dCwnY29ybmVyJywnJyxjYWxsYmFjayk7XG4gICAgfVxuIFxuICAgIC8vdGV4dDptZXNzYWdlfGljb258b2tcbiAgICBjb3JuZXJEYXJrKHRleHQ6c3RyaW5nLGNhbGxiYWNrPzphbnkpe1xuICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbih0ZXh0LCdjb3JuZXInLCdkYXJrJyxjYWxsYmFjayk7XG4gICAgfVxuXG4gICAgLy90ZXh0Om1lc3NhZ2V8aWNvbnxva1xuICAgIHRodW1iKHRleHQ6c3RyaW5nLGNhbGxiYWNrPzphbnkpe1xuICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbih0ZXh0LCd0aHVtYicsJycsY2FsbGJhY2spO1xuICAgIH1cbiBcbiAgICAvL3RleHQ6bWVzc2FnZXxpY29ufG9rXG4gICAgdGh1bWJEYXJrKHRleHQ6c3RyaW5nLGNhbGxiYWNrPzphbnkpe1xuICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbih0ZXh0LCd0aHVtYicsJ2RhcmsnLGNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICAvL3RleHQ6bWVzc2FnZXxpY29ufG9rXG4gICAgZmxpcCh0ZXh0OnN0cmluZyxjYWxsYmFjaz86YW55KXtcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb24odGV4dCwnZmxpcCcsJycsY2FsbGJhY2spO1xuICAgIH1cbiBcbiAgICAvL3RleHQ6bWVzc2FnZXxpY29ufG9rXG4gICAgZmxpcERhcmsodGV4dDpzdHJpbmcsY2FsbGJhY2s/OmFueSl7XG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9uKHRleHQsJ2ZsaXAnLCdkYXJrJyxjYWxsYmFjayk7XG4gICAgfVxuXG5cbiAgICAvL3RleHQ6bWVzc2FnZXxpY29ufG9rXG4gICAgbm90aWZpY2F0aW9uKHRleHQ6c3RyaW5nLHN0eWxlOnN0cmluZyxjb2xvcjpzdHJpbmcsY2FsbGJhY2s/OmFueSl7XG4gICAgICAgIHZhciBuID0gdGV4dC5zcGxpdChcInxcIik7XG4gICAgICAgIGxldCBjb250ZXh0OkFpTm90aWZ5Q29udGV4dD1uZXcgQWlOb3RpZnlDb250ZXh0KG5bMF0sblsxXT9uWzFdOicnLG5bMl0/blsyXTonJyxzdHlsZSxjb2xvcik7XG4gICAgICAgIGxldCBiaW5kaW5ncyA9IEluamVjdG9yLnJlc29sdmUoW3Byb3ZpZGUoQWlOb3RpZnlDb250ZXh0LCB7dXNlVmFsdWU6IGNvbnRleHR9KV0pO1xuXG4gICAgICAgIGxldCBkaWFsb2c6UHJvbWlzZTxBaU1vZGFsSW5zdGFuY2U+ID0gdGhpcy5tb2RhbC5vcGVuKFxuICAgICAgICAgICAgPGFueT5BaU5vdGlmeSxiaW5kaW5ncyxBaU5vdGlmeS5HZXRDb25maWcoY29udGV4dCkpO1xuICAgICAgICBkaWFsb2cudGhlbihcbiAgICAgICAgICAgIChyZXN1bHRQcm9taXNlKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdFByb21pc2UucmVzdWx0LnRoZW4oXG4gICAgICAgICAgICAgICAgICAgIChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGNhbGxiYWNrKSBjYWxsYmFjayh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgKCkgPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihjYWxsYmFjaykgY2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvL3RleHQ6bWVzc2FnZXxpY29ufG9rXG4gICAgd2FpdFN0YXJ0KHRleHQ6c3RyaW5nLGNhbGxiYWNrPzphbnkpe1xuXG4gICAgICAgIHZhciBuID0gdGV4dC5zcGxpdChcInxcIik7XG4gICAgICAgIGxldCBjb250ZXh0OkFpQ2lyY2xlQ29udGV4dD1uZXcgQWlDaXJjbGVDb250ZXh0KG5bMF0sblsxXT9uWzFdOicnLG5bMl0/blsyXTonJyk7XG4gICAgICAgIGxldCBiaW5kaW5ncyA9IEluamVjdG9yLnJlc29sdmUoW3Byb3ZpZGUoQWlDaXJjbGVDb250ZXh0LCB7dXNlVmFsdWU6IGNvbnRleHR9KV0pO1xuXG4gICAgICAgIGxldCBkaWFsb2cgPSB0aGlzLm1vZGFsLm9wZW4oXG4gICAgICAgICAgICA8YW55PkFpQ2lyY2xlLGJpbmRpbmdzLEFpQ2lyY2xlLkdldENvbmZpZyhjb250ZXh0KSk7XG4gICAgICAgIGRpYWxvZy50aGVuKFxuICAgICAgICAgICAgKHJlc3VsdFByb21pc2UpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0UHJvbWlzZS5yZXN1bHQudGhlbihcbiAgICAgICAgICAgICAgICAgICAgKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoY2FsbGJhY2spIGNhbGxiYWNrKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAoKSA9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGNhbGxiYWNrKSBjYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cbiBcbiAgICAvL3RleHQ6bWVzc2FnZXxpY29ufG9rXG4gICAgd2FpdFN0b3AoKXtcbiAgICAgICAgQWlDaXJjbGUucmVtb3ZlRGxnSW5zdGFuY2UoKTtcbiAgICB9XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
