System.register(['angular2/core', '../aiControl'], function(exports_1) {
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
    var core_1, aiControl_1;
    var AiCheckbox;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (aiControl_1_1) {
                aiControl_1 = aiControl_1_1;
            }],
        execute: function() {
            AiCheckbox = (function (_super) {
                __extends(AiCheckbox, _super);
                function AiCheckbox(ele) {
                    _super.call(this, ele);
                    this.value = false;
                }
                AiCheckbox.prototype.onClassNameRebuild = function (el) {
                    this.addClassName('ai-checkbox');
                };
                AiCheckbox.prototype.toggle = function () {
                    this.value = !this.value;
                };
                AiCheckbox = __decorate([
                    core_1.Component(aiControl_1.AiControl.meta({
                        templateUrl: 'package:src/components/aiCheckbox/aiCheckbox.html',
                        selector: 'ai-checkbox',
                        inputs: ['value'],
                        host: {
                            '[class.checked]': 'value',
                        },
                    })), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], AiCheckbox);
                return AiCheckbox;
            })(aiControl_1.AiControl);
            exports_1("AiCheckbox", AiCheckbox);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYWlDaGVja2JveC9haUNoZWNrYm94LnRzIl0sIm5hbWVzIjpbIkFpQ2hlY2tib3giLCJBaUNoZWNrYm94LmNvbnN0cnVjdG9yIiwiQWlDaGVja2JveC5vbkNsYXNzTmFtZVJlYnVpbGQiLCJBaUNoZWNrYm94LnRvZ2dsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFHQTtnQkFRZ0NBLDhCQUFTQTtnQkFHckNBLG9CQUFZQSxHQUFlQTtvQkFDdkJDLGtCQUFNQSxHQUFHQSxDQUFDQSxDQUFDQTtvQkFIZkEsVUFBS0EsR0FBU0EsS0FBS0EsQ0FBQ0E7Z0JBSXBCQSxDQUFDQTtnQkFFREQsdUNBQWtCQSxHQUFsQkEsVUFBbUJBLEVBQU1BO29CQUVyQkUsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsQ0FBQ0E7Z0JBQ3JDQSxDQUFDQTtnQkFHREYsMkJBQU1BLEdBQU5BO29CQUNJRyxJQUFJQSxDQUFDQSxLQUFLQSxHQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQTtnQkFDM0JBLENBQUNBO2dCQXZCTEg7b0JBQUNBLGdCQUFTQSxDQUFDQSxxQkFBU0EsQ0FBQ0EsSUFBSUEsQ0FBQ0E7d0JBQ3RCQSxXQUFXQSxFQUFDQSxtREFBbURBO3dCQUMvREEsUUFBUUEsRUFBRUEsYUFBYUE7d0JBQ3ZCQSxNQUFNQSxFQUFDQSxDQUFDQSxPQUFPQSxDQUFDQTt3QkFDaEJBLElBQUlBLEVBQUNBOzRCQUNEQSxpQkFBaUJBLEVBQUVBLE9BQU9BO3lCQUM3QkE7cUJBQ0pBLENBQUNBLENBQUNBOzsrQkFrQkZBO2dCQUFEQSxpQkFBQ0E7WUFBREEsQ0F6QkEsQUF5QkNBLEVBakIrQixxQkFBUyxFQWlCeEM7WUF6QkQsbUNBeUJDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9haUNoZWNrYm94L2FpQ2hlY2tib3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCxFbGVtZW50UmVmLFJlbmRlcmVyfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7QWlDb250cm9sfSBmcm9tICcuLi9haUNvbnRyb2wnO1xuXG5AQ29tcG9uZW50KEFpQ29udHJvbC5tZXRhKHtcbiAgICB0ZW1wbGF0ZVVybDoncGFja2FnZTpzcmMvY29tcG9uZW50cy9haUNoZWNrYm94L2FpQ2hlY2tib3guaHRtbCcsXG4gICAgc2VsZWN0b3I6ICdhaS1jaGVja2JveCcsXG4gICAgaW5wdXRzOlsndmFsdWUnXSxcbiAgICBob3N0OntcbiAgICAgICAgJ1tjbGFzcy5jaGVja2VkXSc6ICd2YWx1ZScsXG4gICAgfSxcbn0pKSAgICBcbmV4cG9ydCBjbGFzcyBBaUNoZWNrYm94IGV4dGVuZHMgQWlDb250cm9seyBcbiAgICB2YWx1ZTpib29sZWFuPWZhbHNlOyBcbiAgICBcbiAgICBjb25zdHJ1Y3RvcihlbGU6IEVsZW1lbnRSZWYpIHsgIFxuICAgICAgICBzdXBlcihlbGUpOyBcbiAgICB9XG5cbiAgICBvbkNsYXNzTmFtZVJlYnVpbGQoZWw6YW55KXtcblxuICAgICAgICB0aGlzLmFkZENsYXNzTmFtZSgnYWktY2hlY2tib3gnKTtcbiAgICB9XG4gICAgXG5cbiAgICB0b2dnbGUoKTp2b2lke1xuICAgICAgICB0aGlzLnZhbHVlPSF0aGlzLnZhbHVlO1xuICAgIH1cblxufSBcbiAgXG4gICBcbiBcbiAgIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
