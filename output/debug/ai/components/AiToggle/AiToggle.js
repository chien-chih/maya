System.register(['../AiControl/AiControl', 'angular2/src/facade/async'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
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
            }(AiControl_1.AiControl));
            exports_1("AiToggle", AiToggle);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlUb2dnbGUvQWlUb2dnbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUtBO2dCQUE4Qiw0QkFBUztnQkFtQm5DLGtCQUFZLEdBQWU7b0JBQ3ZCLGtCQUFNLEdBQUcsQ0FBQyxDQUFDO29CQWxCZixzQ0FBc0M7b0JBQ3RDLFlBQU8sR0FBVSxLQUFLLENBQUM7b0JBS3ZCLGFBQVEsR0FBbUIsSUFBSSxvQkFBWSxFQUFFLENBQUM7b0JBYTFDLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBQyxFQUFFLENBQUMsQ0FBQztnQkFDcEQsQ0FBQztnQkFaTSxhQUFJLEdBQVgsVUFBWSxJQUFRO29CQUNoQixJQUFJLEdBQUMscUJBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUMxQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDNUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7b0JBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBQyxTQUFTLENBQUM7b0JBQ3ZDLE1BQU0sQ0FBQyxJQUFJLENBQUM7Z0JBQ2hCLENBQUM7Z0JBT0QseUJBQU0sR0FBTjtvQkFDSSxFQUFFLENBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQSxDQUFDO3dCQUNmLElBQUksQ0FBQyxPQUFPLEdBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO29CQUMvQixDQUFDO2dCQUNMLENBQUM7Z0JBR0wsZUFBQztZQUFELENBL0JBLEFBK0JDLENBL0I2QixxQkFBUyxHQStCdEM7WUEvQkQsK0JBK0JDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9BaVRvZ2dsZS9BaVRvZ2dsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RWxlbWVudFJlZixPbkNoYW5nZXN9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtBaUNvbnRyb2x9IGZyb20gJy4uL0FpQ29udHJvbC9BaUNvbnRyb2wnO1xuaW1wb3J0IHtFdmVudEVtaXR0ZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvYXN5bmMnO1xuXG4gXG5leHBvcnQgY2xhc3MgQWlUb2dnbGUgZXh0ZW5kcyBBaUNvbnRyb2wgeyBcblxuICAgIC8qKiBXaGV0aGVyIHRoaXMgdG9nZ2xlIGlzIGNoZWNrZWQuICovXG4gICAgY2hlY2tlZDogYm9vbGVhbj1mYWxzZTtcblxuICAgIC8qKiBWYWx1ZSBhc3NpZ25lZCB0byB0aGlzIHRvZ2dsZS4gTWF5IFVzZWQgdG8gYXNzaWduIHRoZSB2YWx1ZSB0byB0aGUgcGFyZW50IEdyb3VwLiAqL1xuICAgIHZhbHVlOmFueTtcblxuICAgIG9uY2hhbmdlOkV2ZW50RW1pdHRlcjxhbnk+PW5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIHN0YXRpYyBtZXRhKG1ldGE6YW55KTphbnl7XG4gICAgICAgIG1ldGE9QWlDb250cm9sLm1ldGEobWV0YSk7XG4gICAgICAgIG1ldGEuaW5wdXRzLnB1c2goJ3ZhbHVlJyk7XG4gICAgICAgIG1ldGEuaW5wdXRzLnB1c2goJ2NoZWNrZWQnKTtcbiAgICAgICAgbWV0YS5vdXRwdXRzLnB1c2goJ29uY2hhbmdlJyk7XG4gICAgICAgIG1ldGEuaG9zdFsnW2NsYXNzLmNoZWNrZWRdJ109J2NoZWNrZWQnO1xuICAgICAgICByZXR1cm4gbWV0YTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihlbGU6IEVsZW1lbnRSZWYpIHtcbiAgICAgICAgc3VwZXIoZWxlKTsgXG4gICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FpLXRvZ2dsZScsJycpOyBcbiAgICB9ICBcblxuICAgIHRvZ2dsZSgpOnZvaWR7XG4gICAgICAgIGlmKCF0aGlzLmRpc2FibGVkKXtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tlZD0hdGhpcy5jaGVja2VkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgXG59ICJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
