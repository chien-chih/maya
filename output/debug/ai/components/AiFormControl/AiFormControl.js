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
                    var el = this.ele.nativeElement;
                    el.setAttribute('ai-form-control', '');
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlGb3JtQ29udHJvbC9BaUZvcm1Db250cm9sLnRzIl0sIm5hbWVzIjpbIkFpRm9ybUNvbnRyb2wiLCJBaUZvcm1Db250cm9sLmNvbnN0cnVjdG9yIiwiQWlGb3JtQ29udHJvbC5tZXRhIiwiQWlGb3JtQ29udHJvbC5pc0xhYmVsRXhpc3QiLCJBaUZvcm1Db250cm9sLmlzTWVzc2FnZUV4aXN0IiwiQWlGb3JtQ29udHJvbC5pc1dvcmRFeGlzdCIsIkFpRm9ybUNvbnRyb2wuaXNJY29uRXhpc3QiLCJBaUZvcm1Db250cm9sLmlzRXJyb3JFeGlzdCIsIkFpRm9ybUNvbnRyb2wudmFsaWRhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O1lBR0E7Z0JBQW1DQSxpQ0FBU0E7Z0JBMkJ4Q0EsdUJBQVlBLEdBQWVBO29CQUN2QkMsa0JBQU1BLEdBQUdBLENBQUNBLENBQUNBO29CQTFCZkEsVUFBS0EsR0FBUUEsRUFBRUEsQ0FBQ0E7b0JBQ2hCQSxZQUFPQSxHQUFRQSxFQUFFQSxDQUFDQTtvQkFDbEJBLFNBQUlBLEdBQVFBLEVBQUVBLENBQUNBO29CQUNmQSxVQUFLQSxHQUFRQSxFQUFFQSxDQUFDQTtvQkFDaEJBLFNBQUlBLEdBQVFBLEVBQUVBLENBQUNBO29CQUVmQSxZQUFZQTtvQkFDWkEsYUFBUUEsR0FBU0EsS0FBS0EsQ0FBQ0E7b0JBQ3ZCQSxjQUFTQSxHQUFRQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFtQmhCQSxJQUFJQSxFQUFFQSxHQUFPQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxhQUFhQSxDQUFDQTtvQkFDcENBLEVBQUVBLENBQUNBLFlBQVlBLENBQUNBLGlCQUFpQkEsRUFBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0E7Z0JBQzFDQSxDQUFDQTtnQkFuQk1ELGtCQUFJQSxHQUFYQSxVQUFZQSxJQUFRQSxFQUFDQSxPQUFZQTtvQkFDN0JFLElBQUlBLEdBQUNBLHFCQUFTQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxFQUFDQSxP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bnRyb2wvQWlGb3JtQ29udHJvbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RWxlbWVudFJlZn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0FpQ29udHJvbH0gZnJvbSAnLi4vQWlDb250cm9sL0FpQ29udHJvbCc7XG5cbmV4cG9ydCBjbGFzcyBBaUZvcm1Db250cm9sIGV4dGVuZHMgQWlDb250cm9se1xuIFxuICAgIGxhYmVsOnN0cmluZz0nJztcbiAgICBtZXNzYWdlOnN0cmluZz0nJztcbiAgICB3b3JkOnN0cmluZz0nJztcbiAgICBlcnJvcjpzdHJpbmc9Jyc7XG4gICAgaWNvbjpzdHJpbmc9Jyc7XG4gICAgXG4gICAgLy92YWxpZGF0aW9uXG4gICAgcmVxdWlyZWQ6Ym9vbGVhbj1mYWxzZTtcbiAgICBtaW5MZW5ndGg6bnVtYmVyPS0xO1xuICAgIFxuICAgIHN0YXRpYyBtZXRhKG1ldGE6YW55LG9wdGlvbnM/OmFueSk6YW55e1xuICAgICAgICBtZXRhPUFpQ29udHJvbC5tZXRhKG1ldGEsb3B0aW9ucyk7XG4gICAgICAgIG1ldGEuaW5wdXRzLnB1c2goJ2xhYmVsJyk7XG4gICAgICAgIG1ldGEuaW5wdXRzLnB1c2goJ21lc3NhZ2UnKTtcbiAgICAgICAgbWV0YS5pbnB1dHMucHVzaCgnd29yZCcpO1xuICAgICAgICBtZXRhLmlucHV0cy5wdXNoKCdlcnJvcicpO1xuICAgICAgICBtZXRhLmlucHV0cy5wdXNoKCdpY29uJyk7XG4gICAgICAgIG1ldGEuaW5wdXRzLnB1c2goJ3JlcXVpcmVkJyk7XG4gICAgICAgIG1ldGEuaW5wdXRzLnB1c2goJ21pbkxlbmd0aCcpO1xuICAgICAgICBtZXRhLmhvc3RbJ1tjbGFzcy5pY29uXSddPSdpc0ljb25FeGlzdCgpJztcbiAgICAgICAgbWV0YS5ob3N0WydbY2xhc3MucmVxdWlyZWRdJ109J3JlcXVpcmVkJztcbiAgICAgICAgbWV0YS5ob3N0WydbY2xhc3MuZXJyb3JdJ109J2lzRXJyb3JFeGlzdCgpJztcbiAgICAgICAgcmV0dXJuIG1ldGE7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0cnVjdG9yKGVsZTogRWxlbWVudFJlZikge1xuICAgICAgICBzdXBlcihlbGUpOyBcbiAgICAgICAgdmFyIGVsOmFueSA9IHRoaXMuZWxlLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnYWktZm9ybS1jb250cm9sJywnJyk7IFxuICAgIH0gIFxuXG4gICAgaXNMYWJlbEV4aXN0KCl7XG4gICAgICAgIHJldHVybiB0aGlzLmxhYmVsLmxlbmd0aCA+IDA7XG4gICAgfVxuXG4gICAgaXNNZXNzYWdlRXhpc3QoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMubWVzc2FnZS5sZW5ndGggPiAwO1xuICAgIH1cblxuICAgIGlzV29yZEV4aXN0KCl7XG4gICAgICAgIHJldHVybiB0aGlzLndvcmQubGVuZ3RoID4gMDtcbiAgICB9XG5cbiAgICBpc0ljb25FeGlzdCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5pY29uLmxlbmd0aCA+IDA7XG4gICAgfVxuXG4gICAgaXNFcnJvckV4aXN0KCl7XG4gICAgICAgIHJldHVybiB0aGlzLmVycm9yLmxlbmd0aCA+IDA7XG4gICAgfVxuXG4gICAgdmFsaWRhdGUodGV4dDpzdHJpbmcpe1xuICAgICAgICB0aGlzLmVycm9yPScnO1xuICAgICAgICBpZih0aGlzLnJlcXVpcmVkICYmIHRleHQubGVuZ3RoPT0wKSB7XG4gICAgICAgICAgICB0aGlzLmVycm9yPXRoaXMubGFiZWwrJyBpcyByZXF1aXJlZCc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZih0aGlzLm1pbkxlbmd0aCA+IDAgJiYgdGV4dC5sZW5ndGggPCB0aGlzLm1pbkxlbmd0aCl7XG4gICAgICAgICAgICB0aGlzLmVycm9yPXRoaXMubGFiZWwrJyBtaW5pbXVtIGxlbmd0aCBpcyAnK3RoaXMubWluTGVuZ3RoO1xuICAgICAgICB9XG4gICAgICAgIFxuXG5cbiAgICB9ICAgIFxuXG59XG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
