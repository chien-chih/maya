System.register(['../AiControl/AiControl'], function(exports_1) {
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var AiControl_1;
    var AiFormControl;
    return {
        setters:[
            function (AiControl_1_1) {
                AiControl_1 = AiControl_1_1;
            }],
        execute: function() {
            AiFormControl = (function (_super) {
                __extends(AiFormControl, _super);
                function AiFormControl(ele) {
                    _super.call(this, ele);
                    this.label = '';
                    this.message = '';
                    this.word = '';
                    this.error = '';
                    this.icon = '';
                    //validation
                    this.required = false;
                    this.minLength = -1;
                    this.nativeElement.setAttribute('ai-form-control', '');
                }
                AiFormControl.meta = function (meta, options) {
                    meta = AiControl_1.AiControl.meta(meta, options);
                    meta.inputs.push('label');
                    meta.inputs.push('message');
                    meta.inputs.push('word');
                    meta.inputs.push('error');
                    meta.inputs.push('icon');
                    meta.inputs.push('required');
                    meta.inputs.push('minLength');
                    meta.host['[class.icon]'] = 'isIconExist()';
                    meta.host['[class.required]'] = 'required';
                    meta.host['[class.error]'] = 'isErrorExist()';
                    return meta;
                };
                AiFormControl.prototype.isLabelExist = function () {
                    return this.label.length > 0;
                };
                AiFormControl.prototype.isMessageExist = function () {
                    return this.message.length > 0;
                };
                AiFormControl.prototype.isWordExist = function () {
                    return this.word.length > 0;
                };
                AiFormControl.prototype.isIconExist = function () {
                    return this.icon.length > 0;
                };
                AiFormControl.prototype.isErrorExist = function () {
                    return this.error.length > 0;
                };
                AiFormControl.prototype.validate = function (text) {
                    this.error = '';
                    if (this.required && text.length == 0) {
                        this.error = this.label + ' is required';
                    }
                    else if (this.minLength > 0 && text.length < this.minLength) {
                        this.error = this.label + ' minimum length is ' + this.minLength;
                    }
                };
                return AiFormControl;
            })(AiControl_1.AiControl);
            exports_1("AiFormControl", AiFormControl);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlGb3JtQ29udHJvbC9BaUZvcm1Db250cm9sLnRzIl0sIm5hbWVzIjpbIkFpRm9ybUNvbnRyb2wiLCJBaUZvcm1Db250cm9sLmNvbnN0cnVjdG9yIiwiQWlGb3JtQ29udHJvbC5tZXRhIiwiQWlGb3JtQ29udHJvbC5pc0xhYmVsRXhpc3QiLCJBaUZvcm1Db250cm9sLmlzTWVzc2FnZUV4aXN0IiwiQWlGb3JtQ29udHJvbC5pc1dvcmRFeGlzdCIsIkFpRm9ybUNvbnRyb2wuaXNJY29uRXhpc3QiLCJBaUZvcm1Db250cm9sLmlzRXJyb3JFeGlzdCIsIkFpRm9ybUNvbnRyb2wudmFsaWRhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O1lBR0E7Z0JBQW1DQSxpQ0FBU0E7Z0JBMkJ4Q0EsdUJBQVlBLEdBQWVBO29CQUN2QkMsa0JBQU1BLEdBQUdBLENBQUNBLENBQUNBO29CQTFCZkEsVUFBS0EsR0FBUUEsRUFBRUEsQ0FBQ0E7b0JBQ2hCQSxZQUFPQSxHQUFRQSxFQUFFQSxDQUFDQTtvQkFDbEJBLFNBQUlBLEdBQVFBLEVBQUVBLENBQUNBO29CQUNmQSxVQUFLQSxHQUFRQSxFQUFFQSxDQUFDQTtvQkFDaEJBLFNBQUlBLEdBQVFBLEVBQUVBLENBQUNBO29CQUVmQSxZQUFZQTtvQkFDWkEsYUFBUUEsR0FBU0EsS0FBS0EsQ0FBQ0E7b0JBQ3ZCQSxjQUFTQSxHQUFRQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFtQmhCQSxJQUFJQSxDQUFDQSxhQUFhQSxDQUFDQSxZQUFZQSxDQUFDQSxpQkFBaUJBLEVBQUNBLEVBQUVBLENBQUNBLENBQUNBO2dCQUMxREEsQ0FBQ0E7Z0JBbEJNRCxrQkFBSUEsR0FBWEEsVUFBWUEsSUFBUUEsRUFBQ0EsT0FBWUE7b0JBQzdCRSxJQUFJQSxHQUFDQSxxQkFBU0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsRUFBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0E7b0JBQ2xDQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQTtvQkFDMUJBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLENBQUNBO29CQUM1QkEsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7b0JBQ3pCQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQTtvQkFDMUJBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBO29CQUN6QkEsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsQ0FBQ0E7b0JBQzdCQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxDQUFDQTtvQkFDOUJBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLGNBQWNBLENBQUNBLEdBQUNBLGVBQWVBLENBQUNBO29CQUMxQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0Esa0JBQWtCQSxDQUFDQSxHQUFDQSxVQUFVQSxDQUFDQTtvQkFDekNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLGVBQWVBLENBQUNBLEdBQUNBLGdCQUFnQkEsQ0FBQ0E7b0JBQzVDQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQTtnQkFDaEJBLENBQUNBO2dCQU9ERixvQ0FBWUEsR0FBWkE7b0JBQ0lHLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLE1BQU1BLEdBQUdBLENBQUNBLENBQUNBO2dCQUNqQ0EsQ0FBQ0E7Z0JBRURILHNDQUFjQSxHQUFkQTtvQkFDSUksTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsTUFBTUEsR0FBR0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ25DQSxDQUFDQTtnQkFFREosbUNBQVdBLEdBQVhBO29CQUNJSyxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxHQUFHQSxDQUFDQSxDQUFDQTtnQkFDaENBLENBQUNBO2dCQUVETCxtQ0FBV0EsR0FBWEE7b0JBQ0lNLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLEdBQUdBLENBQUNBLENBQUNBO2dCQUNoQ0EsQ0FBQ0E7Z0JBRUROLG9DQUFZQSxHQUFaQTtvQkFDSU8sTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsTUFBTUEsR0FBR0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ2pDQSxDQUFDQTtnQkFFRFAsZ0NBQVFBLEdBQVJBLFVBQVNBLElBQVdBO29CQUNoQlEsSUFBSUEsQ0FBQ0EsS0FBS0EsR0FBQ0EsRUFBRUEsQ0FBQ0E7b0JBQ2RBLEVBQUVBLENBQUFBLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLElBQUlBLElBQUlBLENBQUNBLE1BQU1BLElBQUVBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO3dCQUNqQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsR0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsR0FBQ0EsY0FBY0EsQ0FBQ0E7b0JBQ3pDQSxDQUFDQTtvQkFDREEsSUFBSUEsQ0FBQ0EsRUFBRUEsQ0FBQUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsU0FBU0EsR0FBR0EsQ0FBQ0EsSUFBSUEsSUFBSUEsQ0FBQ0EsTUFBTUEsR0FBR0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQUEsQ0FBQ0E7d0JBQ3hEQSxJQUFJQSxDQUFDQSxLQUFLQSxHQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxHQUFDQSxxQkFBcUJBLEdBQUNBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBO29CQUMvREEsQ0FBQ0E7Z0JBSUxBLENBQUNBO2dCQUVMUixvQkFBQ0E7WUFBREEsQ0FqRUEsQUFpRUNBLEVBakVrQyxxQkFBUyxFQWlFM0M7WUFqRUQseUNBaUVDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9BaUZvcm1Db250cm9sL0FpRm9ybUNvbnRyb2wuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0VsZW1lbnRSZWZ9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtBaUNvbnRyb2x9IGZyb20gJy4uL0FpQ29udHJvbC9BaUNvbnRyb2wnO1xuXG5leHBvcnQgY2xhc3MgQWlGb3JtQ29udHJvbCBleHRlbmRzIEFpQ29udHJvbHtcbiBcbiAgICBsYWJlbDpzdHJpbmc9Jyc7XG4gICAgbWVzc2FnZTpzdHJpbmc9Jyc7XG4gICAgd29yZDpzdHJpbmc9Jyc7XG4gICAgZXJyb3I6c3RyaW5nPScnO1xuICAgIGljb246c3RyaW5nPScnO1xuICAgIFxuICAgIC8vdmFsaWRhdGlvblxuICAgIHJlcXVpcmVkOmJvb2xlYW49ZmFsc2U7XG4gICAgbWluTGVuZ3RoOm51bWJlcj0tMTtcbiAgICBcbiAgICBzdGF0aWMgbWV0YShtZXRhOmFueSxvcHRpb25zPzphbnkpOmFueXtcbiAgICAgICAgbWV0YT1BaUNvbnRyb2wubWV0YShtZXRhLG9wdGlvbnMpO1xuICAgICAgICBtZXRhLmlucHV0cy5wdXNoKCdsYWJlbCcpO1xuICAgICAgICBtZXRhLmlucHV0cy5wdXNoKCdtZXNzYWdlJyk7XG4gICAgICAgIG1ldGEuaW5wdXRzLnB1c2goJ3dvcmQnKTtcbiAgICAgICAgbWV0YS5pbnB1dHMucHVzaCgnZXJyb3InKTtcbiAgICAgICAgbWV0YS5pbnB1dHMucHVzaCgnaWNvbicpO1xuICAgICAgICBtZXRhLmlucHV0cy5wdXNoKCdyZXF1aXJlZCcpO1xuICAgICAgICBtZXRhLmlucHV0cy5wdXNoKCdtaW5MZW5ndGgnKTtcbiAgICAgICAgbWV0YS5ob3N0WydbY2xhc3MuaWNvbl0nXT0naXNJY29uRXhpc3QoKSc7XG4gICAgICAgIG1ldGEuaG9zdFsnW2NsYXNzLnJlcXVpcmVkXSddPSdyZXF1aXJlZCc7XG4gICAgICAgIG1ldGEuaG9zdFsnW2NsYXNzLmVycm9yXSddPSdpc0Vycm9yRXhpc3QoKSc7XG4gICAgICAgIHJldHVybiBtZXRhO1xuICAgIH1cbiAgICBcbiAgICBjb25zdHJ1Y3RvcihlbGU6IEVsZW1lbnRSZWYpIHtcbiAgICAgICAgc3VwZXIoZWxlKTsgXG4gICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FpLWZvcm0tY29udHJvbCcsJycpOyBcbiAgICB9ICBcblxuICAgIGlzTGFiZWxFeGlzdCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5sYWJlbC5sZW5ndGggPiAwO1xuICAgIH1cblxuICAgIGlzTWVzc2FnZUV4aXN0KCl7XG4gICAgICAgIHJldHVybiB0aGlzLm1lc3NhZ2UubGVuZ3RoID4gMDtcbiAgICB9XG5cbiAgICBpc1dvcmRFeGlzdCgpe1xuICAgICAgICByZXR1cm4gdGhpcy53b3JkLmxlbmd0aCA+IDA7XG4gICAgfVxuXG4gICAgaXNJY29uRXhpc3QoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuaWNvbi5sZW5ndGggPiAwO1xuICAgIH1cblxuICAgIGlzRXJyb3JFeGlzdCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5lcnJvci5sZW5ndGggPiAwO1xuICAgIH1cblxuICAgIHZhbGlkYXRlKHRleHQ6c3RyaW5nKXtcbiAgICAgICAgdGhpcy5lcnJvcj0nJztcbiAgICAgICAgaWYodGhpcy5yZXF1aXJlZCAmJiB0ZXh0Lmxlbmd0aD09MCkge1xuICAgICAgICAgICAgdGhpcy5lcnJvcj10aGlzLmxhYmVsKycgaXMgcmVxdWlyZWQnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYodGhpcy5taW5MZW5ndGggPiAwICYmIHRleHQubGVuZ3RoIDwgdGhpcy5taW5MZW5ndGgpe1xuICAgICAgICAgICAgdGhpcy5lcnJvcj10aGlzLmxhYmVsKycgbWluaW11bSBsZW5ndGggaXMgJyt0aGlzLm1pbkxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICBcblxuXG4gICAgfSAgICBcblxufVxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
