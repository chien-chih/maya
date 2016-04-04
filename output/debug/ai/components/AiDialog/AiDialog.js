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
                    var bindings = core_1.Injector.resolve([
                        core_1.provide(Ai_1.AiConfirmContext, { useValue: context })
                    ]);
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
                //text:message|title|ico|yes
                AiDialog.prototype.alert = function (text, callback) {
                    var n = text.split("|");
                    var context = new Ai_1.AiConfirmContext(n[0], n[1], n[2], n[3], n[4]);
                    var bindings = core_1.Injector.resolve([
                        core_1.provide(Ai_1.AiConfirmContext, { useValue: context })
                    ]);
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
                AiDialog = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [Ai_1.AiModal])
                ], AiDialog);
                return AiDialog;
            })();
            exports_1("AiDialog", AiDialog);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlEaWFsb2cvQWlEaWFsb2cudHMiXSwibmFtZXMiOlsiQWlEaWFsb2ciLCJBaURpYWxvZy5jb25zdHJ1Y3RvciIsIkFpRGlhbG9nLmNvbmZpcm0iLCJBaURpYWxvZy5hbGVydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBY0E7Z0JBR0lBLGtCQUFvQkEsS0FBY0E7b0JBQWRDLFVBQUtBLEdBQUxBLEtBQUtBLENBQVNBO2dCQUVsQ0EsQ0FBQ0E7Z0JBQ0RELCtCQUErQkE7Z0JBQy9CQSwwQkFBT0EsR0FBUEEsVUFBUUEsSUFBV0EsRUFBQ0EsUUFBYUE7b0JBQzdCRSxJQUFJQSxDQUFDQSxHQUFHQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtvQkFDeEJBLElBQUlBLE9BQU9BLEdBQWtCQSxJQUFJQSxxQkFBZ0JBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLEVBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLEVBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLEVBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLEVBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO29CQUU1RUEsSUFBSUEsUUFBUUEsR0FBR0EsZUFBUUEsQ0FBQ0EsT0FBT0EsQ0FBQ0E7d0JBQzVCQSxjQUFPQSxDQUFDQSxxQkFBZ0JBLEVBQUVBLEVBQUNBLFFBQVFBLEVBQUVBLE9BQU9BLEVBQUNBLENBQUNBO3FCQUNqREEsQ0FBQ0EsQ0FBQ0E7b0JBRUhBLElBQUlBLE1BQU1BLEdBQTRCQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxJQUFJQSxDQUM1Q0EsY0FBU0EsRUFBQ0EsUUFBUUEsRUFBQ0EsY0FBU0EsQ0FBQ0EsYUFBYUEsQ0FBQ0EsQ0FBQ0E7b0JBQ3JEQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUNQQSxVQUFDQSxhQUFhQTt3QkFDVkEsTUFBTUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FDNUJBLFVBQUNBLE1BQU1BOzRCQUNIQSxFQUFFQSxDQUFBQSxDQUFDQSxRQUFRQSxDQUFDQTtnQ0FBQ0EsUUFBUUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7d0JBQ2hDQSxDQUFDQSxFQUNEQTs0QkFDSUEsRUFBRUEsQ0FBQUEsQ0FBQ0EsUUFBUUEsQ0FBQ0E7Z0NBQUNBLFFBQVFBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO3dCQUNqQ0EsQ0FBQ0EsQ0FDSkEsQ0FBQ0E7b0JBQ05BLENBQUNBLENBQUNBLENBQUNBO2dCQUNYQSxDQUFDQTtnQkFFREYsNEJBQTRCQTtnQkFDNUJBLHdCQUFLQSxHQUFMQSxVQUFNQSxJQUFXQSxFQUFDQSxRQUFhQTtvQkFDM0JHLElBQUlBLENBQUNBLEdBQUdBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO29CQUN4QkEsSUFBSUEsT0FBT0EsR0FBa0JBLElBQUlBLHFCQUFnQkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsRUFBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsRUFBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsRUFBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsRUFBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0JBRTVFQSxJQUFJQSxRQUFRQSxHQUFHQSxlQUFRQSxDQUFDQSxPQUFPQSxDQUFDQTt3QkFDNUJBLGNBQU9BLENBQUNBLHFCQUFnQkEsRUFBRUEsRUFBQ0EsUUFBUUEsRUFBRUEsT0FBT0EsRUFBQ0EsQ0FBQ0E7cUJBQ2pEQSxDQUFDQSxDQUFDQTtvQkFFSEEsSUFBSUEsTUFBTUEsR0FBNEJBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLElBQUlBLENBQzVDQSxZQUFPQSxFQUFDQSxRQUFRQSxFQUFDQSxZQUFPQSxDQUFDQSxhQUFhQSxDQUFDQSxDQUFDQTtvQkFDakRBLE1BQU1BLENBQUNBLElBQUlBLENBQ1BBLFVBQUNBLGFBQWFBO3dCQUNWQSxNQUFNQSxDQUFDQSxhQUFhQSxDQUFDQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUM1QkEsVUFBQ0EsTUFBTUE7NEJBQ0hBLEVBQUVBLENBQUFBLENBQUNBLFFBQVFBLENBQUNBO2dDQUFDQSxRQUFRQSxFQUFFQSxDQUFDQTt3QkFDNUJBLENBQUNBLEVBQ0RBOzRCQUNJQSxFQUFFQSxDQUFBQSxDQUFDQSxRQUFRQSxDQUFDQTtnQ0FBQ0EsUUFBUUEsRUFBRUEsQ0FBQ0E7d0JBQzVCQSxDQUFDQSxDQUNKQSxDQUFDQTtvQkFDTkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ1hBLENBQUNBO2dCQXBETEg7b0JBQUNBLGlCQUFVQSxFQUFFQTs7NkJBc0RaQTtnQkFBREEsZUFBQ0E7WUFBREEsQ0F0REEsQUFzRENBLElBQUE7WUF0REQsK0JBc0RDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9BaURpYWxvZy9BaURpYWxvZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgSW5qZWN0YWJsZSxcbiAgICBEeW5hbWljQ29tcG9uZW50TG9hZGVyLFxuICAgIENvbXBvbmVudFJlZixcbiAgICBFbGVtZW50UmVmLFxuICAgIEluamVjdG9yLFxuICAgIHByb3ZpZGUsXG4gICAgUmVzb2x2ZWRQcm92aWRlcixcbiAgICBPcHRpb25hbCxcbiAgICBBcHBsaWNhdGlvblJlZlxufSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7QWlNb2RhbCxBaU1vZGFsSW5zdGFuY2UsQWlBbGVydCxBaUNvbmZpcm0sQWlDb25maXJtQ29udGV4dCxBaU1vZGFsQ29uZmlnLEFpTW9kYWxBbGlnbixBaU1vZGFsUG9zaXRpb259IGZyb20gJy4uL0FpJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQWlEaWFsb2d7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1vZGFsOiBBaU1vZGFsKXtcbiAgICAgICAgXG4gICAgfVxuICAgIC8vdGV4dDptZXNzYWdlfHRpdGxlfGljb3x5ZXN8bm9cbiAgICBjb25maXJtKHRleHQ6c3RyaW5nLGNhbGxiYWNrPzphbnkpe1xuICAgICAgICB2YXIgbiA9IHRleHQuc3BsaXQoXCJ8XCIpO1xuICAgICAgICBsZXQgY29udGV4dDpBaUNvbmZpcm1Db250ZXh0PW5ldyBBaUNvbmZpcm1Db250ZXh0KG5bMF0sblsxXSxuWzJdLG5bM10sbls0XSk7XG5cbiAgICAgICAgbGV0IGJpbmRpbmdzID0gSW5qZWN0b3IucmVzb2x2ZShbXG4gICAgICAgICAgICBwcm92aWRlKEFpQ29uZmlybUNvbnRleHQsIHt1c2VWYWx1ZTogY29udGV4dH0pXG4gICAgICAgIF0pO1xuXG4gICAgICAgIGxldCBkaWFsb2c6UHJvbWlzZTxBaU1vZGFsSW5zdGFuY2U+ID0gdGhpcy5tb2RhbC5vcGVuKFxuICAgICAgICAgICAgPGFueT5BaUNvbmZpcm0sYmluZGluZ3MsQWlDb25maXJtLkRlZmF1bHRDb25maWcpO1xuICAgICAgICBkaWFsb2cudGhlbihcbiAgICAgICAgICAgIChyZXN1bHRQcm9taXNlKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdFByb21pc2UucmVzdWx0LnRoZW4oXG4gICAgICAgICAgICAgICAgICAgIChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGNhbGxiYWNrKSBjYWxsYmFjayh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgXG4gICAgICAgICAgICAgICAgICAgICgpID0+eyBcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGNhbGxiYWNrKSBjYWxsYmFjayhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSk7ICAgICAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIC8vdGV4dDptZXNzYWdlfHRpdGxlfGljb3x5ZXNcbiAgICBhbGVydCh0ZXh0OnN0cmluZyxjYWxsYmFjaz86YW55KXtcbiAgICAgICAgdmFyIG4gPSB0ZXh0LnNwbGl0KFwifFwiKTtcbiAgICAgICAgbGV0IGNvbnRleHQ6QWlDb25maXJtQ29udGV4dD1uZXcgQWlDb25maXJtQ29udGV4dChuWzBdLG5bMV0sblsyXSxuWzNdLG5bNF0pO1xuXG4gICAgICAgIGxldCBiaW5kaW5ncyA9IEluamVjdG9yLnJlc29sdmUoW1xuICAgICAgICAgICAgcHJvdmlkZShBaUNvbmZpcm1Db250ZXh0LCB7dXNlVmFsdWU6IGNvbnRleHR9KVxuICAgICAgICBdKTtcblxuICAgICAgICBsZXQgZGlhbG9nOlByb21pc2U8QWlNb2RhbEluc3RhbmNlPiA9IHRoaXMubW9kYWwub3BlbihcbiAgICAgICAgICAgIDxhbnk+QWlBbGVydCxiaW5kaW5ncyxBaUFsZXJ0LkRlZmF1bHRDb25maWcpO1xuICAgICAgICBkaWFsb2cudGhlbihcbiAgICAgICAgICAgIChyZXN1bHRQcm9taXNlKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdFByb21pc2UucmVzdWx0LnRoZW4oXG4gICAgICAgICAgICAgICAgICAgIChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGNhbGxiYWNrKSBjYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgICAgICB9LCBcbiAgICAgICAgICAgICAgICAgICAgKCkgPT57IFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoY2FsbGJhY2spIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSk7ICAgICAgICAgICAgXG4gICAgfVxuICAgIFxufSAgIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
