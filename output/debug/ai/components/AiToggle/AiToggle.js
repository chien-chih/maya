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
                    var el = this.ele.nativeElement;
                    el.setAttribute('ai-toggle', '');
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlUb2dnbGUvQWlUb2dnbGUudHMiXSwibmFtZXMiOlsiQWlUb2dnbGUiLCJBaVRvZ2dsZS5jb25zdHJ1Y3RvciIsIkFpVG9nZ2xlLm1ldGEiLCJBaVRvZ2dsZS50b2dnbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBS0E7Z0JBQThCQSw0QkFBU0E7Z0JBbUJuQ0Esa0JBQVlBLEdBQWVBO29CQUN2QkMsa0JBQU1BLEdBQUdBLENBQUNBLENBQUNBO29CQWxCZkEsc0NBQXNDQTtvQkFDdENBLFlBQU9BLEdBQVVBLEtBQUtBLENBQUNBO29CQUt2QkEsYUFBUUEsR0FBbUJBLElBQUlBLG9CQUFZQSxFQUFFQSxDQUFDQTtvQkFhMUNBLElBQUlBLEVBQUVBLEdBQU9BLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLGFBQWFBLENBQUNBO29CQUNwQ0EsRUFBRUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsV0FBV0EsRUFBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0E7Z0JBQ3BDQSxDQUFDQTtnQkFiTUQsYUFBSUEsR0FBWEEsVUFBWUEsSUFBUUE7b0JBQ2hCRSxJQUFJQSxHQUFDQSxxQkFBU0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7b0JBQzFCQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQTtvQkFDMUJBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLENBQUNBO29CQUM1QkEsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsQ0FBQ0E7b0JBQzlCQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxpQkFBaUJBLENBQUNBLEdBQUNBLFNBQVNBLENBQUNBO29CQUN2Q0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0E7Z0JBQ2hCQSxDQUFDQTtnQkFRREYseUJBQU1BLEdBQU5BO29CQUNJRyxFQUFFQSxDQUFBQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFBQSxDQUFDQTt3QkFDZkEsSUFBSUEsQ0FBQ0EsT0FBT0EsR0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0E7b0JBQy9CQSxDQUFDQTtnQkFDTEEsQ0FBQ0E7Z0JBR0xILGVBQUNBO1lBQURBLENBaENBLEFBZ0NDQSxFQWhDNkIscUJBQVMsRUFnQ3RDO1lBaENELCtCQWdDQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvQWlUb2dnbGUvQWlUb2dnbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0VsZW1lbnRSZWYsT25DaGFuZ2VzfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7QWlDb250cm9sfSBmcm9tICcuLi9BaUNvbnRyb2wvQWlDb250cm9sJztcbmltcG9ydCB7RXZlbnRFbWl0dGVyfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2FzeW5jJztcblxuIFxuZXhwb3J0IGNsYXNzIEFpVG9nZ2xlIGV4dGVuZHMgQWlDb250cm9sIHsgXG5cbiAgICAvKiogV2hldGhlciB0aGlzIHRvZ2dsZSBpcyBjaGVja2VkLiAqL1xuICAgIGNoZWNrZWQ6IGJvb2xlYW49ZmFsc2U7XG5cbiAgICAvKiogVmFsdWUgYXNzaWduZWQgdG8gdGhpcyB0b2dnbGUuIE1heSBVc2VkIHRvIGFzc2lnbiB0aGUgdmFsdWUgdG8gdGhlIHBhcmVudCBHcm91cC4gKi9cbiAgICB2YWx1ZTphbnk7XG5cbiAgICBvbmNoYW5nZTpFdmVudEVtaXR0ZXI8YW55Pj1uZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBzdGF0aWMgbWV0YShtZXRhOmFueSk6YW55e1xuICAgICAgICBtZXRhPUFpQ29udHJvbC5tZXRhKG1ldGEpO1xuICAgICAgICBtZXRhLmlucHV0cy5wdXNoKCd2YWx1ZScpO1xuICAgICAgICBtZXRhLmlucHV0cy5wdXNoKCdjaGVja2VkJyk7XG4gICAgICAgIG1ldGEub3V0cHV0cy5wdXNoKCdvbmNoYW5nZScpO1xuICAgICAgICBtZXRhLmhvc3RbJ1tjbGFzcy5jaGVja2VkXSddPSdjaGVja2VkJztcbiAgICAgICAgcmV0dXJuIG1ldGE7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoZWxlOiBFbGVtZW50UmVmKSB7XG4gICAgICAgIHN1cGVyKGVsZSk7IFxuICAgICAgICB2YXIgZWw6YW55ID0gdGhpcy5lbGUubmF0aXZlRWxlbWVudDtcbiAgICAgICAgZWwuc2V0QXR0cmlidXRlKCdhaS10b2dnbGUnLCcnKTsgXG4gICAgfSAgXG5cbiAgICB0b2dnbGUoKTp2b2lke1xuICAgICAgICBpZighdGhpcy5kaXNhYmxlZCl7XG4gICAgICAgICAgICB0aGlzLmNoZWNrZWQ9IXRoaXMuY2hlY2tlZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIFxufSAiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
