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
            }());
            exports_1("AiDialog", AiDialog);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlEaWFsb2cvQWlEaWFsb2cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFlQTtnQkFFSSxrQkFBb0IsS0FBYztvQkFBZCxVQUFLLEdBQUwsS0FBSyxDQUFTO2dCQUVsQyxDQUFDO2dCQUNELCtCQUErQjtnQkFDL0IsMEJBQU8sR0FBUCxVQUFRLElBQVcsRUFBQyxRQUFhO29CQUM3QixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUN4QixJQUFJLE9BQU8sR0FBa0IsSUFBSSxxQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBRTVFLElBQUksUUFBUSxHQUFHLGVBQVEsQ0FBQyxPQUFPLENBQUM7d0JBQzVCLGNBQU8sQ0FBQyxxQkFBZ0IsRUFBRSxFQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUMsQ0FBQztxQkFDakQsQ0FBQyxDQUFDO29CQUVILElBQUksTUFBTSxHQUE0QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDNUMsY0FBUyxFQUFDLFFBQVEsRUFBQyxjQUFTLENBQUMsYUFBYSxDQUFDLENBQUM7b0JBQ3JELE1BQU0sQ0FBQyxJQUFJLENBQ1AsVUFBQyxhQUFhO3dCQUNWLE1BQU0sQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLElBQUksQ0FDNUIsVUFBQyxNQUFNOzRCQUNILEVBQUUsQ0FBQSxDQUFDLFFBQVEsQ0FBQztnQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ2hDLENBQUMsRUFDRDs0QkFDSSxFQUFFLENBQUEsQ0FBQyxRQUFRLENBQUM7Z0NBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUNqQyxDQUFDLENBQ0osQ0FBQztvQkFDTixDQUFDLENBQUMsQ0FBQztnQkFDWCxDQUFDO2dCQUVELDRCQUE0QjtnQkFDNUIsd0JBQUssR0FBTCxVQUFNLElBQVcsRUFBQyxRQUFhO29CQUMzQixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUN4QixJQUFJLE9BQU8sR0FBa0IsSUFBSSxxQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBRTVFLElBQUksUUFBUSxHQUFHLGVBQVEsQ0FBQyxPQUFPLENBQUM7d0JBQzVCLGNBQU8sQ0FBQyxxQkFBZ0IsRUFBRSxFQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUMsQ0FBQztxQkFDakQsQ0FBQyxDQUFDO29CQUVILElBQUksTUFBTSxHQUE0QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDNUMsWUFBTyxFQUFDLFFBQVEsRUFBQyxZQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7b0JBQ2pELE1BQU0sQ0FBQyxJQUFJLENBQ1AsVUFBQyxhQUFhO3dCQUNWLE1BQU0sQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLElBQUksQ0FDNUIsVUFBQyxNQUFNOzRCQUNILEVBQUUsQ0FBQSxDQUFDLFFBQVEsQ0FBQztnQ0FBQyxRQUFRLEVBQUUsQ0FBQzt3QkFDNUIsQ0FBQyxFQUNEOzRCQUNJLEVBQUUsQ0FBQSxDQUFDLFFBQVEsQ0FBQztnQ0FBQyxRQUFRLEVBQUUsQ0FBQzt3QkFDNUIsQ0FBQyxDQUNKLENBQUM7b0JBQ04sQ0FBQyxDQUFDLENBQUM7Z0JBQ1gsQ0FBQztnQkFwREw7b0JBQUMsaUJBQVUsRUFBRTs7NEJBQUE7Z0JBc0RiLGVBQUM7WUFBRCxDQXJEQSxBQXFEQyxJQUFBO1lBckRELCtCQXFEQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvQWlEaWFsb2cvQWlEaWFsb2cuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIEluamVjdGFibGUsXG4gICAgRHluYW1pY0NvbXBvbmVudExvYWRlcixcbiAgICBDb21wb25lbnRSZWYsXG4gICAgRWxlbWVudFJlZixcbiAgICBJbmplY3RvcixcbiAgICBwcm92aWRlLFxuICAgIFJlc29sdmVkUHJvdmlkZXIsXG4gICAgT3B0aW9uYWwsXG4gICAgQXBwbGljYXRpb25SZWZcbn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0FpTW9kYWwsQWlNb2RhbEluc3RhbmNlLEFpQWxlcnQsQWlDb25maXJtLEFpQ29uZmlybUNvbnRleHQsQWlNb2RhbENvbmZpZyxBaU1vZGFsQWxpZ24sQWlNb2RhbFBvc2l0aW9ufSBmcm9tICcuLi9BaSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFpRGlhbG9ne1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBtb2RhbDogQWlNb2RhbCl7XG4gICAgICAgIFxuICAgIH1cbiAgICAvL3RleHQ6bWVzc2FnZXx0aXRsZXxpY298eWVzfG5vXG4gICAgY29uZmlybSh0ZXh0OnN0cmluZyxjYWxsYmFjaz86YW55KXtcbiAgICAgICAgdmFyIG4gPSB0ZXh0LnNwbGl0KFwifFwiKTtcbiAgICAgICAgbGV0IGNvbnRleHQ6QWlDb25maXJtQ29udGV4dD1uZXcgQWlDb25maXJtQ29udGV4dChuWzBdLG5bMV0sblsyXSxuWzNdLG5bNF0pO1xuXG4gICAgICAgIGxldCBiaW5kaW5ncyA9IEluamVjdG9yLnJlc29sdmUoW1xuICAgICAgICAgICAgcHJvdmlkZShBaUNvbmZpcm1Db250ZXh0LCB7dXNlVmFsdWU6IGNvbnRleHR9KVxuICAgICAgICBdKTtcblxuICAgICAgICBsZXQgZGlhbG9nOlByb21pc2U8QWlNb2RhbEluc3RhbmNlPiA9IHRoaXMubW9kYWwub3BlbihcbiAgICAgICAgICAgIDxhbnk+QWlDb25maXJtLGJpbmRpbmdzLEFpQ29uZmlybS5EZWZhdWx0Q29uZmlnKTtcbiAgICAgICAgZGlhbG9nLnRoZW4oXG4gICAgICAgICAgICAocmVzdWx0UHJvbWlzZSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHRQcm9taXNlLnJlc3VsdC50aGVuKFxuICAgICAgICAgICAgICAgICAgICAocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihjYWxsYmFjaykgY2FsbGJhY2sodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH0sIFxuICAgICAgICAgICAgICAgICAgICAoKSA9PnsgXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihjYWxsYmFjaykgY2FsbGJhY2soZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pOyAgICAgICAgICAgIFxuICAgIH1cbiAgICBcbiAgICAvL3RleHQ6bWVzc2FnZXx0aXRsZXxpY298eWVzXG4gICAgYWxlcnQodGV4dDpzdHJpbmcsY2FsbGJhY2s/OmFueSl7XG4gICAgICAgIHZhciBuID0gdGV4dC5zcGxpdChcInxcIik7XG4gICAgICAgIGxldCBjb250ZXh0OkFpQ29uZmlybUNvbnRleHQ9bmV3IEFpQ29uZmlybUNvbnRleHQoblswXSxuWzFdLG5bMl0sblszXSxuWzRdKTtcblxuICAgICAgICBsZXQgYmluZGluZ3MgPSBJbmplY3Rvci5yZXNvbHZlKFtcbiAgICAgICAgICAgIHByb3ZpZGUoQWlDb25maXJtQ29udGV4dCwge3VzZVZhbHVlOiBjb250ZXh0fSlcbiAgICAgICAgXSk7XG5cbiAgICAgICAgbGV0IGRpYWxvZzpQcm9taXNlPEFpTW9kYWxJbnN0YW5jZT4gPSB0aGlzLm1vZGFsLm9wZW4oXG4gICAgICAgICAgICA8YW55PkFpQWxlcnQsYmluZGluZ3MsQWlBbGVydC5EZWZhdWx0Q29uZmlnKTtcbiAgICAgICAgZGlhbG9nLnRoZW4oXG4gICAgICAgICAgICAocmVzdWx0UHJvbWlzZSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHRQcm9taXNlLnJlc3VsdC50aGVuKFxuICAgICAgICAgICAgICAgICAgICAocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihjYWxsYmFjaykgY2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgXG4gICAgICAgICAgICAgICAgICAgICgpID0+eyBcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGNhbGxiYWNrKSBjYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pOyAgICAgICAgICAgIFxuICAgIH1cbiAgICBcbn0gICJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
