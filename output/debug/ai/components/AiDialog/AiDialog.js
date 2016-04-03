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
                AiDialog.prototype.confirm = function (text, callback) {
                    var config = new Ai_1.AiModalConfig();
                    config.x = Ai_1.AiModalPosition.Center;
                    config.y = new Ai_1.AiModalPosition(100, Ai_1.AiModalAlign.Begin);
                    config.mask = 'white';
                    config.floating = true;
                    var context = new Ai_1.ConfirmContext();
                    context.message = text;
                    var bindings = core_1.Injector.resolve([
                        core_1.provide(Ai_1.ConfirmContext, { useValue: context })
                    ]);
                    var dialog = this.modal.open(Ai_1.ConfirmDialog, bindings, config);
                    dialog.then(function (resultPromise) {
                        return resultPromise.result.then(function (result) {
                            callback(true);
                        }, function () {
                            callback(false);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlEaWFsb2cvQWlEaWFsb2cudHMiXSwibmFtZXMiOlsiQWlEaWFsb2ciLCJBaURpYWxvZy5jb25zdHJ1Y3RvciIsIkFpRGlhbG9nLmNvbmZpcm0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWNBO2dCQUdJQSxrQkFBb0JBLEtBQWNBO29CQUFkQyxVQUFLQSxHQUFMQSxLQUFLQSxDQUFTQTtnQkFFbENBLENBQUNBO2dCQUVERCwwQkFBT0EsR0FBUEEsVUFBUUEsSUFBV0EsRUFBQ0EsUUFBUUE7b0JBQ3hCRSxJQUFJQSxNQUFNQSxHQUFnQkEsSUFBSUEsa0JBQWFBLEVBQUVBLENBQUNBO29CQUM5Q0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsR0FBQ0Esb0JBQWVBLENBQUNBLE1BQU1BLENBQUNBO29CQUNoQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsR0FBQ0EsSUFBSUEsb0JBQWVBLENBQUNBLEdBQUdBLEVBQUNBLGlCQUFZQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtvQkFDckRBLE1BQU1BLENBQUNBLElBQUlBLEdBQUNBLE9BQU9BLENBQUNBO29CQUNwQkEsTUFBTUEsQ0FBQ0EsUUFBUUEsR0FBQ0EsSUFBSUEsQ0FBQ0E7b0JBRXJCQSxJQUFJQSxPQUFPQSxHQUFnQkEsSUFBSUEsbUJBQWNBLEVBQUVBLENBQUNBO29CQUNoREEsT0FBT0EsQ0FBQ0EsT0FBT0EsR0FBQ0EsSUFBSUEsQ0FBQ0E7b0JBRXJCQSxJQUFJQSxRQUFRQSxHQUFHQSxlQUFRQSxDQUFDQSxPQUFPQSxDQUFDQTt3QkFDNUJBLGNBQU9BLENBQUNBLG1CQUFjQSxFQUFFQSxFQUFDQSxRQUFRQSxFQUFFQSxPQUFPQSxFQUFDQSxDQUFDQTtxQkFDL0NBLENBQUNBLENBQUNBO29CQUVIQSxJQUFJQSxNQUFNQSxHQUE0QkEsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsSUFBSUEsQ0FBTUEsa0JBQWFBLEVBQUNBLFFBQVFBLEVBQUNBLE1BQU1BLENBQUNBLENBQUNBO29CQUMxRkEsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FDUEEsVUFBQ0EsYUFBYUE7d0JBQ1ZBLE1BQU1BLENBQUNBLGFBQWFBLENBQUNBLE1BQU1BLENBQUNBLElBQUlBLENBQzVCQSxVQUFDQSxNQUFNQTs0QkFDSEEsUUFBUUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7d0JBQ25CQSxDQUFDQSxFQUNEQTs0QkFDSUEsUUFBUUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7d0JBQ3BCQSxDQUFDQSxDQUNKQSxDQUFDQTtvQkFDTkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ1hBLENBQUNBO2dCQWpDTEY7b0JBQUNBLGlCQUFVQSxFQUFFQTs7NkJBa0NaQTtnQkFBREEsZUFBQ0E7WUFBREEsQ0FsQ0EsQUFrQ0NBLElBQUE7WUFsQ0QsK0JBa0NDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9BaURpYWxvZy9BaURpYWxvZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgSW5qZWN0YWJsZSxcbiAgICBEeW5hbWljQ29tcG9uZW50TG9hZGVyLFxuICAgIENvbXBvbmVudFJlZixcbiAgICBFbGVtZW50UmVmLFxuICAgIEluamVjdG9yLFxuICAgIHByb3ZpZGUsXG4gICAgUmVzb2x2ZWRQcm92aWRlcixcbiAgICBPcHRpb25hbCxcbiAgICBBcHBsaWNhdGlvblJlZlxufSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7QWlNb2RhbCxBaU1vZGFsSW5zdGFuY2UsQ29uZmlybURpYWxvZyxDb25maXJtQ29udGV4dCxBaU1vZGFsQ29uZmlnLEFpTW9kYWxBbGlnbixBaU1vZGFsUG9zaXRpb259IGZyb20gJy4uL0FpJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQWlEaWFsb2d7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1vZGFsOiBBaU1vZGFsKXtcbiAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIGNvbmZpcm0odGV4dDpzdHJpbmcsY2FsbGJhY2spe1xuICAgICAgICBsZXQgY29uZmlnOkFpTW9kYWxDb25maWcgPW5ldyBBaU1vZGFsQ29uZmlnKCk7ICAgIFxuICAgICAgICBjb25maWcueD1BaU1vZGFsUG9zaXRpb24uQ2VudGVyO1xuICAgICAgICBjb25maWcueT1uZXcgQWlNb2RhbFBvc2l0aW9uKDEwMCxBaU1vZGFsQWxpZ24uQmVnaW4pO1xuICAgICAgICBjb25maWcubWFzaz0nd2hpdGUnO1xuICAgICAgICBjb25maWcuZmxvYXRpbmc9dHJ1ZTtcblxuICAgICAgICBsZXQgY29udGV4dDpDb25maXJtQ29udGV4dD1uZXcgQ29uZmlybUNvbnRleHQoKTtcbiAgICAgICAgY29udGV4dC5tZXNzYWdlPXRleHQ7XG5cbiAgICAgICAgbGV0IGJpbmRpbmdzID0gSW5qZWN0b3IucmVzb2x2ZShbXG4gICAgICAgICAgICBwcm92aWRlKENvbmZpcm1Db250ZXh0LCB7dXNlVmFsdWU6IGNvbnRleHR9KVxuICAgICAgICBdKTtcblxuICAgICAgICBsZXQgZGlhbG9nOlByb21pc2U8QWlNb2RhbEluc3RhbmNlPiA9IHRoaXMubW9kYWwub3Blbig8YW55PkNvbmZpcm1EaWFsb2csYmluZGluZ3MsY29uZmlnKTtcbiAgICAgICAgZGlhbG9nLnRoZW4oXG4gICAgICAgICAgICAocmVzdWx0UHJvbWlzZSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHRQcm9taXNlLnJlc3VsdC50aGVuKFxuICAgICAgICAgICAgICAgICAgICAocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgXG4gICAgICAgICAgICAgICAgICAgICgpID0+eyBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KTsgICAgICAgICAgICBcbiAgICB9XG59ICAiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
