System.register(['angular2/core', 'angular2/src/facade/async', '../AiControl/AiControl'], function(exports_1) {
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
    var core_1, async_1, AiControl_1;
    var AiCheckbox;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (async_1_1) {
                async_1 = async_1_1;
            },
            function (AiControl_1_1) {
                AiControl_1 = AiControl_1_1;
            }],
        execute: function() {
            AiCheckbox = (function (_super) {
                __extends(AiCheckbox, _super);
                function AiCheckbox(ele) {
                    _super.call(this, ele);
                    this.value = false;
                    this.onchange = new async_1.EventEmitter();
                }
                AiCheckbox.prototype.onClick = function () {
                    this.toggle();
                };
                AiCheckbox.prototype.toggle = function () {
                    if (!this.disabled)
                        this.value = !this.value;
                };
                AiCheckbox = __decorate([
                    core_1.Component(AiControl_1.AiControl.meta({
                        templateUrl: 'package:src/components/AiCheckbox/AiCheckbox.html',
                        selector: 'ai-checkbox',
                        inputs: ['value'],
                        outputs: ['onchange'],
                        host: {
                            //'(click)':'toggle()',
                            '[class.checked]': 'value',
                        },
                    })), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], AiCheckbox);
                return AiCheckbox;
            })(AiControl_1.AiControl);
            exports_1("AiCheckbox", AiCheckbox);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlDaGVja2JveC9BaUNoZWNrYm94LnRzIl0sIm5hbWVzIjpbIkFpQ2hlY2tib3giLCJBaUNoZWNrYm94LmNvbnN0cnVjdG9yIiwiQWlDaGVja2JveC5vbkNsaWNrIiwiQWlDaGVja2JveC50b2dnbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBSUE7Z0JBVWdDQSw4QkFBU0E7Z0JBSXJDQSxvQkFBWUEsR0FBZUE7b0JBQ3ZCQyxrQkFBTUEsR0FBR0EsQ0FBQ0EsQ0FBQ0E7b0JBSmZBLFVBQUtBLEdBQVNBLEtBQUtBLENBQUNBO29CQUNwQkEsYUFBUUEsR0FBb0JBLElBQUlBLG9CQUFZQSxFQUFFQSxDQUFDQTtnQkFJL0NBLENBQUNBO2dCQUVERCw0QkFBT0EsR0FBUEE7b0JBQ0lFLElBQUlBLENBQUNBLE1BQU1BLEVBQUVBLENBQUNBO2dCQUNsQkEsQ0FBQ0E7Z0JBRURGLDJCQUFNQSxHQUFOQTtvQkFDSUcsRUFBRUEsQ0FBQUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0E7d0JBQ2RBLElBQUlBLENBQUNBLEtBQUtBLEdBQUNBLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBO2dCQUMvQkEsQ0FBQ0E7Z0JBekJMSDtvQkFBQ0EsZ0JBQVNBLENBQUNBLHFCQUFTQSxDQUFDQSxJQUFJQSxDQUFDQTt3QkFDdEJBLFdBQVdBLEVBQUNBLG1EQUFtREE7d0JBQy9EQSxRQUFRQSxFQUFFQSxhQUFhQTt3QkFDdkJBLE1BQU1BLEVBQUNBLENBQUNBLE9BQU9BLENBQUNBO3dCQUNoQkEsT0FBT0EsRUFBQ0EsQ0FBQ0EsVUFBVUEsQ0FBQ0E7d0JBQ3BCQSxJQUFJQSxFQUFDQTs0QkFDREEsdUJBQXVCQTs0QkFDdkJBLGlCQUFpQkEsRUFBRUEsT0FBT0E7eUJBQzdCQTtxQkFDSkEsQ0FBQ0EsQ0FBQ0E7OytCQWtCRkE7Z0JBQURBLGlCQUFDQTtZQUFEQSxDQTNCQSxBQTJCQ0EsRUFqQitCLHFCQUFTLEVBaUJ4QztZQTNCRCxtQ0EyQkMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL0FpQ2hlY2tib3gvQWlDaGVja2JveC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LEVsZW1lbnRSZWZ9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtPYnNlcnZhYmxlV3JhcHBlcixFdmVudEVtaXR0ZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvYXN5bmMnO1xuaW1wb3J0IHtBaUNvbnRyb2x9IGZyb20gJy4uL0FpQ29udHJvbC9BaUNvbnRyb2wnO1xuXG5AQ29tcG9uZW50KEFpQ29udHJvbC5tZXRhKHtcbiAgICB0ZW1wbGF0ZVVybDoncGFja2FnZTpzcmMvY29tcG9uZW50cy9BaUNoZWNrYm94L0FpQ2hlY2tib3guaHRtbCcsXG4gICAgc2VsZWN0b3I6ICdhaS1jaGVja2JveCcsXG4gICAgaW5wdXRzOlsndmFsdWUnXSxcbiAgICBvdXRwdXRzOlsnb25jaGFuZ2UnXSxcbiAgICBob3N0OntcbiAgICAgICAgLy8nKGNsaWNrKSc6J3RvZ2dsZSgpJyxcbiAgICAgICAgJ1tjbGFzcy5jaGVja2VkXSc6ICd2YWx1ZScsXG4gICAgfSxcbn0pKSAgICBcbmV4cG9ydCBjbGFzcyBBaUNoZWNrYm94IGV4dGVuZHMgQWlDb250cm9seyBcbiAgICB2YWx1ZTpib29sZWFuPWZhbHNlOyBcbiAgICBvbmNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT49bmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgY29uc3RydWN0b3IoZWxlOiBFbGVtZW50UmVmKSB7ICBcbiAgICAgICAgc3VwZXIoZWxlKTsgXG4gICAgfVxuICAgIFxuICAgIG9uQ2xpY2soKXtcbiAgICAgICAgdGhpcy50b2dnbGUoKTtcbiAgICB9XG4gICAgXG4gICAgdG9nZ2xlKCk6dm9pZHtcbiAgICAgICAgaWYoIXRoaXMuZGlzYWJsZWQpXG4gICAgICAgICAgICB0aGlzLnZhbHVlPSF0aGlzLnZhbHVlO1xuICAgIH1cblxufSBcbiAgXG4gICBcbiBcbiAgIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
