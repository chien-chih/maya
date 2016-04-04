System.register(['angular2/core', '../Ai', './AiConfirm'], function(exports_1) {
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
                        template: "<div class='ai-dlg-body' [attr.hasIcon]='hasIcon()'>\n        <div class='title'>{{context.title}}</div>\n        <div class='message'>{{context.message}}</div>\n        <span class='ico' ai-material>{{context.ico}}</span>\n    </div>\n    <div class='bar'>\n        <ai-button class='yes' red raised (_click)='ok()'>{{context.yesText}}</ai-button>    \n    </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [Ai_1.AiModalInstance, AiConfirm_1.AiConfirmContext])
                ], AiAlert);
                return AiAlert;
            })(AiConfirm_1.AiConfirm);
            exports_1("AiAlert", AiAlert);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlEaWFsb2cvQWlBbGVydC50cyJdLCJuYW1lcyI6WyJBaUFsZXJ0IiwiQWlBbGVydC5jb25zdHJ1Y3RvciIsIkFpQWxlcnQuRGVmYXVsdENvbmZpZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFJQTtnQkFjNkJBLDJCQUFTQTtnQkFXbENBLGlCQUFtQkEsUUFBeUJBLEVBQVFBLE9BQXlCQTtvQkFDekVDLGtCQUFNQSxRQUFRQSxFQUFDQSxPQUFPQSxDQUFDQSxDQUFDQTtvQkFEVEEsYUFBUUEsR0FBUkEsUUFBUUEsQ0FBaUJBO29CQUFRQSxZQUFPQSxHQUFQQSxPQUFPQSxDQUFrQkE7Z0JBRTdFQSxDQUFDQTtnQkFYREQsc0JBQVdBLHdCQUFhQTt5QkFBeEJBO3dCQUNJRSxJQUFJQSxNQUFNQSxHQUFnQkEsSUFBSUEsa0JBQWFBLEVBQUVBLENBQUNBO3dCQUM5Q0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsR0FBQ0Esb0JBQWVBLENBQUNBLE1BQU1BLENBQUNBO3dCQUNoQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsR0FBQ0EsSUFBSUEsb0JBQWVBLENBQUNBLEdBQUdBLEVBQUNBLGlCQUFZQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTt3QkFDckRBLE1BQU1BLENBQUNBLElBQUlBLEdBQUNBLE9BQU9BLENBQUNBO3dCQUNwQkEsTUFBTUEsQ0FBQ0EsUUFBUUEsR0FBQ0EsSUFBSUEsQ0FBQ0E7d0JBQ3JCQSxNQUFNQSxDQUFDQSxNQUFNQSxDQUFDQTtvQkFDbEJBLENBQUNBOzs7bUJBQUFGO2dCQXZCTEE7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDUEEsUUFBUUEsRUFBRUEsVUFBVUE7d0JBQ3BCQSxVQUFVQSxFQUFFQSxDQUFDQSxhQUFRQSxDQUFDQTt3QkFDdEJBLFFBQVFBLEVBQ1JBLG9YQVFDQTtxQkFDSkEsQ0FBQ0E7OzRCQWlCREE7Z0JBQURBLGNBQUNBO1lBQURBLENBOUJBLEFBOEJDQSxFQWhCNEIscUJBQVMsRUFnQnJDO1lBOUJELDZCQThCQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvQWlEaWFsb2cvQWlBbGVydC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7QWlCdXR0b24sQWlNb2RhbEluc3RhbmNlLEFpTW9kYWxEaWFsb2csQWlNb2RhbENvbmZpZyxBaU1vZGFsQWxpZ24sQWlNb2RhbFBvc2l0aW9ufSBmcm9tICcuLi9BaSc7XG5pbXBvcnQge0FpQ29uZmlybSxBaUNvbmZpcm1Db250ZXh0fSBmcm9tICcuL0FpQ29uZmlybSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYWktYWxlcnQnLFxuICAgIGRpcmVjdGl2ZXM6IFtBaUJ1dHRvbl0sXG4gICAgdGVtcGxhdGU6XG4gICAgYDxkaXYgY2xhc3M9J2FpLWRsZy1ib2R5JyBbYXR0ci5oYXNJY29uXT0naGFzSWNvbigpJz5cbiAgICAgICAgPGRpdiBjbGFzcz0ndGl0bGUnPnt7Y29udGV4dC50aXRsZX19PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9J21lc3NhZ2UnPnt7Y29udGV4dC5tZXNzYWdlfX08L2Rpdj5cbiAgICAgICAgPHNwYW4gY2xhc3M9J2ljbycgYWktbWF0ZXJpYWw+e3tjb250ZXh0Lmljb319PC9zcGFuPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9J2Jhcic+XG4gICAgICAgIDxhaS1idXR0b24gY2xhc3M9J3llcycgcmVkIHJhaXNlZCAoX2NsaWNrKT0nb2soKSc+e3tjb250ZXh0Lnllc1RleHR9fTwvYWktYnV0dG9uPiAgICBcbiAgICA8L2Rpdj5cbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzIEFpQWxlcnQgZXh0ZW5kcyBBaUNvbmZpcm0ge1xuXG4gICAgc3RhdGljIGdldCBEZWZhdWx0Q29uZmlnKCk6QWlNb2RhbENvbmZpZ3sgXG4gICAgICAgIGxldCBjb25maWc6QWlNb2RhbENvbmZpZyA9bmV3IEFpTW9kYWxDb25maWcoKTsgICAgXG4gICAgICAgIGNvbmZpZy54PUFpTW9kYWxQb3NpdGlvbi5DZW50ZXI7XG4gICAgICAgIGNvbmZpZy55PW5ldyBBaU1vZGFsUG9zaXRpb24oMTAwLEFpTW9kYWxBbGlnbi5CZWdpbik7XG4gICAgICAgIGNvbmZpZy5tYXNrPSdibGFjayc7XG4gICAgICAgIGNvbmZpZy5mbG9hdGluZz10cnVlO1xuICAgICAgICByZXR1cm4gY29uZmlnOyBcbiAgICB9ICAgIFxuXG4gICAgY29uc3RydWN0b3IocHVibGljIGluc3RhbmNlOiBBaU1vZGFsSW5zdGFuY2UscHVibGljIGNvbnRleHQ6IEFpQ29uZmlybUNvbnRleHQpIHtcbiAgICAgICAgc3VwZXIoaW5zdGFuY2UsY29udGV4dCk7XG4gICAgfVxuXG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
