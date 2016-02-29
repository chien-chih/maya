System.register(['../AiControl/AiControl', 'angular2/src/facade/async'], function(exports_1) {
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var AiControl_1, async_1;
    var AiToggle;
    return {
        setters:[
            function (AiControl_1_1) {
                AiControl_1 = AiControl_1_1;
            },
            function (async_1_1) {
                async_1 = async_1_1;
            }],
        execute: function() {
            AiToggle = (function (_super) {
                __extends(AiToggle, _super);
                function AiToggle(ele) {
                    _super.call(this, ele);
                    /** Whether this toggle is checked. */
                    this.checked = false;
                    this.onchange = new async_1.EventEmitter();
                    this.nativeElement.setAttribute('ai-toggle', '');
                }
                AiToggle.meta = function (meta) {
                    meta = AiControl_1.AiControl.meta(meta);
                    meta.inputs.push('value');
                    meta.inputs.push('checked');
                    meta.outputs.push('onchange');
                    meta.host['[class.checked]'] = 'checked';
                    return meta;
                };
                AiToggle.prototype.toggle = function () {
                    if (!this.disabled) {
                        this.checked = !this.checked;
                    }
                };
                return AiToggle;
            })(AiControl_1.AiControl);
            exports_1("AiToggle", AiToggle);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlUb2dnbGUvQWlUb2dnbGUudHMiXSwibmFtZXMiOlsiQWlUb2dnbGUiLCJBaVRvZ2dsZS5jb25zdHJ1Y3RvciIsIkFpVG9nZ2xlLm1ldGEiLCJBaVRvZ2dsZS50b2dnbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBS0E7Z0JBQThCQSw0QkFBU0E7Z0JBbUJuQ0Esa0JBQVlBLEdBQWVBO29CQUN2QkMsa0JBQU1BLEdBQUdBLENBQUNBLENBQUNBO29CQWxCZkEsc0NBQXNDQTtvQkFDdENBLFlBQU9BLEdBQVVBLEtBQUtBLENBQUNBO29CQUt2QkEsYUFBUUEsR0FBbUJBLElBQUlBLG9CQUFZQSxFQUFFQSxDQUFDQTtvQkFhMUNBLElBQUlBLENBQUNBLGFBQWFBLENBQUNBLFlBQVlBLENBQUNBLFdBQVdBLEVBQUNBLEVBQUVBLENBQUNBLENBQUNBO2dCQUNwREEsQ0FBQ0E7Z0JBWk1ELGFBQUlBLEdBQVhBLFVBQVlBLElBQVFBO29CQUNoQkUsSUFBSUEsR0FBQ0EscUJBQVNBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO29CQUMxQkEsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0E7b0JBQzFCQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxDQUFDQTtvQkFDNUJBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLENBQUNBO29CQUM5QkEsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsaUJBQWlCQSxDQUFDQSxHQUFDQSxTQUFTQSxDQUFDQTtvQkFDdkNBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBO2dCQUNoQkEsQ0FBQ0E7Z0JBT0RGLHlCQUFNQSxHQUFOQTtvQkFDSUcsRUFBRUEsQ0FBQUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQUEsQ0FBQ0E7d0JBQ2ZBLElBQUlBLENBQUNBLE9BQU9BLEdBQUNBLENBQUNBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBO29CQUMvQkEsQ0FBQ0E7Z0JBQ0xBLENBQUNBO2dCQUdMSCxlQUFDQTtZQUFEQSxDQS9CQSxBQStCQ0EsRUEvQjZCLHFCQUFTLEVBK0J0QztZQS9CRCwrQkErQkMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL0FpVG9nZ2xlL0FpVG9nZ2xlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtFbGVtZW50UmVmLE9uQ2hhbmdlc30gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0FpQ29udHJvbH0gZnJvbSAnLi4vQWlDb250cm9sL0FpQ29udHJvbCc7XG5pbXBvcnQge0V2ZW50RW1pdHRlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9hc3luYyc7XG5cbiBcbmV4cG9ydCBjbGFzcyBBaVRvZ2dsZSBleHRlbmRzIEFpQ29udHJvbCB7IFxuXG4gICAgLyoqIFdoZXRoZXIgdGhpcyB0b2dnbGUgaXMgY2hlY2tlZC4gKi9cbiAgICBjaGVja2VkOiBib29sZWFuPWZhbHNlO1xuXG4gICAgLyoqIFZhbHVlIGFzc2lnbmVkIHRvIHRoaXMgdG9nZ2xlLiBNYXkgVXNlZCB0byBhc3NpZ24gdGhlIHZhbHVlIHRvIHRoZSBwYXJlbnQgR3JvdXAuICovXG4gICAgdmFsdWU6YW55O1xuXG4gICAgb25jaGFuZ2U6RXZlbnRFbWl0dGVyPGFueT49bmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgc3RhdGljIG1ldGEobWV0YTphbnkpOmFueXtcbiAgICAgICAgbWV0YT1BaUNvbnRyb2wubWV0YShtZXRhKTtcbiAgICAgICAgbWV0YS5pbnB1dHMucHVzaCgndmFsdWUnKTtcbiAgICAgICAgbWV0YS5pbnB1dHMucHVzaCgnY2hlY2tlZCcpO1xuICAgICAgICBtZXRhLm91dHB1dHMucHVzaCgnb25jaGFuZ2UnKTtcbiAgICAgICAgbWV0YS5ob3N0WydbY2xhc3MuY2hlY2tlZF0nXT0nY2hlY2tlZCc7XG4gICAgICAgIHJldHVybiBtZXRhO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKGVsZTogRWxlbWVudFJlZikge1xuICAgICAgICBzdXBlcihlbGUpOyBcbiAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNldEF0dHJpYnV0ZSgnYWktdG9nZ2xlJywnJyk7IFxuICAgIH0gIFxuXG4gICAgdG9nZ2xlKCk6dm9pZHtcbiAgICAgICAgaWYoIXRoaXMuZGlzYWJsZWQpe1xuICAgICAgICAgICAgdGhpcy5jaGVja2VkPSF0aGlzLmNoZWNrZWQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBcbn0gIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
