System.register(['angular2/core', '../AiToggle/AiToggle'], function(exports_1) {
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
    var core_1, AiToggle_1;
    var AiCheck;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (AiToggle_1_1) {
                AiToggle_1 = AiToggle_1_1;
            }],
        execute: function() {
            AiCheck = (function (_super) {
                __extends(AiCheck, _super);
                function AiCheck(ele) {
                    _super.call(this, ele);
                    this.value = false;
                    this.up = 'check_box_outline_blank';
                    this.down = 'check_box';
                }
                AiCheck.prototype.onClick = function () {
                    this.toggle();
                };
                Object.defineProperty(AiCheck.prototype, "icon", {
                    get: function () {
                        if (this.checked)
                            return this.down;
                        return this.up;
                    },
                    enumerable: true,
                    configurable: true
                });
                AiCheck = __decorate([
                    core_1.Component(AiToggle_1.AiToggle.meta({
                        templateUrl: 'package:src/components/AiCheck/AiCheck.html',
                        selector: 'ai-check',
                        inputs: ['up', 'down'],
                    })), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], AiCheck);
                return AiCheck;
            })(AiToggle_1.AiToggle);
            exports_1("AiCheck", AiCheck);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlDaGVjay9BaUNoZWNrLnRzIl0sIm5hbWVzIjpbIkFpQ2hlY2siLCJBaUNoZWNrLmNvbnN0cnVjdG9yIiwiQWlDaGVjay5vbkNsaWNrIiwiQWlDaGVjay5pY29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUlBO2dCQUs2QkEsMkJBQVFBO2dCQU1qQ0EsaUJBQVlBLEdBQWVBO29CQUN2QkMsa0JBQU1BLEdBQUdBLENBQUNBLENBQUNBO29CQUxmQSxVQUFLQSxHQUFTQSxLQUFLQSxDQUFDQTtvQkFDcEJBLE9BQUVBLEdBQVFBLHlCQUF5QkEsQ0FBQ0E7b0JBQ3BDQSxTQUFJQSxHQUFRQSxXQUFXQSxDQUFDQTtnQkFJeEJBLENBQUNBO2dCQUdERCx5QkFBT0EsR0FBUEE7b0JBQ0lFLElBQUlBLENBQUNBLE1BQU1BLEVBQUVBLENBQUNBO2dCQUNsQkEsQ0FBQ0E7Z0JBRURGLHNCQUFJQSx5QkFBSUE7eUJBQVJBO3dCQUNJRyxFQUFFQSxDQUFBQSxDQUFDQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQTs0QkFBQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0E7d0JBQ2xDQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxFQUFFQSxDQUFDQTtvQkFDbkJBLENBQUNBOzs7bUJBQUFIO2dCQXZCTEE7b0JBQUNBLGdCQUFTQSxDQUFDQSxtQkFBUUEsQ0FBQ0EsSUFBSUEsQ0FBQ0E7d0JBQ3JCQSxXQUFXQSxFQUFDQSw2Q0FBNkNBO3dCQUN6REEsUUFBUUEsRUFBRUEsVUFBVUE7d0JBQ3BCQSxNQUFNQSxFQUFDQSxDQUFDQSxJQUFJQSxFQUFDQSxNQUFNQSxDQUFDQTtxQkFDdkJBLENBQUNBLENBQUNBOzs0QkFxQkZBO2dCQUFEQSxjQUFDQTtZQUFEQSxDQXpCQSxBQXlCQ0EsRUFwQjRCLG1CQUFRLEVBb0JwQztZQXpCRCw2QkF5QkMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL0FpQ2hlY2svQWlDaGVjay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LEVsZW1lbnRSZWZ9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtPYnNlcnZhYmxlV3JhcHBlcixFdmVudEVtaXR0ZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvYXN5bmMnO1xuaW1wb3J0IHtBaVRvZ2dsZX0gZnJvbSAnLi4vQWlUb2dnbGUvQWlUb2dnbGUnO1xuXG5AQ29tcG9uZW50KEFpVG9nZ2xlLm1ldGEoe1xuICAgIHRlbXBsYXRlVXJsOidwYWNrYWdlOnNyYy9jb21wb25lbnRzL0FpQ2hlY2svQWlDaGVjay5odG1sJyxcbiAgICBzZWxlY3RvcjogJ2FpLWNoZWNrJyxcbiAgICBpbnB1dHM6Wyd1cCcsJ2Rvd24nXSxcbn0pKSAgICBcbmV4cG9ydCBjbGFzcyBBaUNoZWNrIGV4dGVuZHMgQWlUb2dnbGV7IFxuXG4gICAgdmFsdWU6Ym9vbGVhbj1mYWxzZTsgXG4gICAgdXA6c3RyaW5nPSdjaGVja19ib3hfb3V0bGluZV9ibGFuayc7XG4gICAgZG93bjpzdHJpbmc9J2NoZWNrX2JveCc7XG5cbiAgICBjb25zdHJ1Y3RvcihlbGU6IEVsZW1lbnRSZWYpIHsgIFxuICAgICAgICBzdXBlcihlbGUpOyBcbiAgICB9XG5cblxuICAgIG9uQ2xpY2soKXtcbiAgICAgICAgdGhpcy50b2dnbGUoKTtcbiAgICB9XG4gICAgXG4gICAgZ2V0IGljb24oKTogc3RyaW5nIHtcbiAgICAgICAgaWYodGhpcy5jaGVja2VkKSByZXR1cm4gdGhpcy5kb3duO1xuICAgICAgICByZXR1cm4gdGhpcy51cDtcbiAgICB9XG5cbn0gXG4gIFxuICAgXG4gXG4gICJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
