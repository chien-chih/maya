System.register(['../AiControl/AiControl'], function(exports_1) {
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var AiControl_1;
    var AiSection;
    return {
        setters:[
            function (AiControl_1_1) {
                AiControl_1 = AiControl_1_1;
            }],
        execute: function() {
            AiSection = (function (_super) {
                __extends(AiSection, _super);
                function AiSection(ele) {
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
                    el.setAttribute('ai-section', '');
                }
                AiSection.meta = function (meta, options) {
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
                AiSection.prototype.isLabelExist = function () {
                    return this.label.length > 0;
                };
                AiSection.prototype.isMessageExist = function () {
                    return this.message.length > 0;
                };
                AiSection.prototype.isWordExist = function () {
                    return this.word.length > 0;
                };
                AiSection.prototype.isIconExist = function () {
                    return this.icon.length > 0;
                };
                AiSection.prototype.isErrorExist = function () {
                    return this.error.length > 0;
                };
                AiSection.prototype.validate = function (text) {
                    this.error = '';
                    if (this.required && text.length == 0) {
                        this.error = this.label + ' is required';
                    }
                    else if (this.minLength > 0 && text.length < this.minLength) {
                        this.error = this.label + ' minimum length is ' + this.minLength;
                    }
                };
                return AiSection;
            })(AiControl_1.AiControl);
            exports_1("AiSection", AiSection);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlTZWN0aW9uL0FpU2VjdGlvbi50cyJdLCJuYW1lcyI6WyJBaVNlY3Rpb24iLCJBaVNlY3Rpb24uY29uc3RydWN0b3IiLCJBaVNlY3Rpb24ubWV0YSIsIkFpU2VjdGlvbi5pc0xhYmVsRXhpc3QiLCJBaVNlY3Rpb24uaXNNZXNzYWdlRXhpc3QiLCJBaVNlY3Rpb24uaXNXb3JkRXhpc3QiLCJBaVNlY3Rpb24uaXNJY29uRXhpc3QiLCJBaVNlY3Rpb24uaXNFcnJvckV4aXN0IiwiQWlTZWN0aW9uLnZhbGlkYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztZQUdBO2dCQUErQkEsNkJBQVNBO2dCQTJCcENBLG1CQUFZQSxHQUFlQTtvQkFDdkJDLGtCQUFNQSxHQUFHQSxDQUFDQSxDQUFDQTtvQkExQmZBLFVBQUtBLEdBQVFBLEVBQUVBLENBQUNBO29CQUNoQkEsWUFBT0EsR0FBUUEsRUFBRUEsQ0FBQ0E7b0JBQ2xCQSxTQUFJQSxHQUFRQSxFQUFFQSxDQUFDQTtvQkFDZkEsVUFBS0EsR0FBUUEsRUFBRUEsQ0FBQ0E7b0JBQ2hCQSxTQUFJQSxHQUFRQSxFQUFFQSxDQUFDQTtvQkFFZkEsWUFBWUE7b0JBQ1pBLGFBQVFBLEdBQVNBLEtBQUtBLENBQUNBO29CQUN2QkEsY0FBU0EsR0FBUUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0JBbUJoQkEsSUFBSUEsRUFBRUEsR0FBT0EsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsYUFBYUEsQ0FBQ0E7b0JBQ3BDQSxFQUFFQSxDQUFDQSxZQUFZQSxDQUFDQSxZQUFZQSxFQUFDQSxFQUFFQSxDQUFDQSxDQUFDQTtnQkFDckNBLENBQUNBO2dCQW5CTUQsY0FBSUEsR0FBWEEsVUFBWUEsSUFBUUEsRUFBQ0EsT0FBWUE7b0JBQzdCRSxJQUFJQSxHQUFDQSxxQkFBU0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsRUFBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0E7b0JBQ2xDQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQTtvQkFDMUJBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLENBQUNBO29CQUM1QkEsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7b0JBQ3pCQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQTtvQkFDMUJBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBO29CQUN6QkEsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsQ0FBQ0E7b0JBQzdCQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxDQUFDQTtvQkFDOUJBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLGNBQWNBLENBQUNBLEdBQUNBLGVBQWVBLENBQUNBO29CQUMxQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0Esa0JBQWtCQSxDQUFDQSxHQUFDQSxVQUFVQSxDQUFDQTtvQkFDekNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLGVBQWVBLENBQUNBLEdBQUNBLGdCQUFnQkEsQ0FBQ0E7b0JBQzVDQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQTtnQkFDaEJBLENBQUNBO2dCQVFERixnQ0FBWUEsR0FBWkE7b0JBQ0lHLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLE1BQU1BLEdBQUdBLENBQUNBLENBQUNBO2dCQUNqQ0EsQ0FBQ0E7Z0JBRURILGtDQUFjQSxHQUFkQTtvQkFDSUksTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsTUFBTUEsR0FBR0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ25DQSxDQUFDQTtnQkFFREosK0JBQVdBLEdBQVhBO29CQUNJSyxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxHQUFHQSxDQUFDQSxDQUFDQTtnQkFDaENBLENBQUNBO2dCQUVETCwrQkFBV0EsR0FBWEE7b0JBQ0lNLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLEdBQUdBLENBQUNBLENBQUNBO2dCQUNoQ0EsQ0FBQ0E7Z0JBRUROLGdDQUFZQSxHQUFaQTtvQkFDSU8sTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsTUFBTUEsR0FBR0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ2pDQSxDQUFDQTtnQkFFRFAsNEJBQVFBLEdBQVJBLFVBQVNBLElBQVdBO29CQUNoQlEsSUFBSUEsQ0FBQ0EsS0FBS0EsR0FBQ0EsRUFBRUEsQ0FBQ0E7b0JBQ2RBLEVBQUVBLENBQUFBLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLElBQUlBLElBQUlBLENBQUNBLE1BQU1BLElBQUVBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO3dCQUNqQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsR0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsR0FBQ0EsY0FBY0EsQ0FBQ0E7b0JBQ3pDQSxDQUFDQTtvQkFDREEsSUFBSUEsQ0FBQ0EsRUFBRUEsQ0FBQUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsU0FBU0EsR0FBR0EsQ0FBQ0EsSUFBSUEsSUFBSUEsQ0FBQ0EsTUFBTUEsR0FBR0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQUEsQ0FBQ0E7d0JBQ3hEQSxJQUFJQSxDQUFDQSxLQUFLQSxHQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxHQUFDQSxxQkFBcUJBLEdBQUNBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBO29CQUMvREEsQ0FBQ0E7Z0JBSUxBLENBQUNBO2dCQUVMUixnQkFBQ0E7WUFBREEsQ0FsRUEsQUFrRUNBLEVBbEU4QixxQkFBUyxFQWtFdkM7WUFsRUQsaUNBa0VDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9BaVNlY3Rpb24vQWlTZWN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtFbGVtZW50UmVmfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7QWlDb250cm9sfSBmcm9tICcuLi9BaUNvbnRyb2wvQWlDb250cm9sJztcblxuZXhwb3J0IGNsYXNzIEFpU2VjdGlvbiBleHRlbmRzIEFpQ29udHJvbHtcbiBcbiAgICBsYWJlbDpzdHJpbmc9Jyc7XG4gICAgbWVzc2FnZTpzdHJpbmc9Jyc7XG4gICAgd29yZDpzdHJpbmc9Jyc7XG4gICAgZXJyb3I6c3RyaW5nPScnO1xuICAgIGljb246c3RyaW5nPScnO1xuICAgIFxuICAgIC8vdmFsaWRhdGlvblxuICAgIHJlcXVpcmVkOmJvb2xlYW49ZmFsc2U7XG4gICAgbWluTGVuZ3RoOm51bWJlcj0tMTtcbiAgICBcbiAgICBzdGF0aWMgbWV0YShtZXRhOmFueSxvcHRpb25zPzphbnkpOmFueXtcbiAgICAgICAgbWV0YT1BaUNvbnRyb2wubWV0YShtZXRhLG9wdGlvbnMpO1xuICAgICAgICBtZXRhLmlucHV0cy5wdXNoKCdsYWJlbCcpO1xuICAgICAgICBtZXRhLmlucHV0cy5wdXNoKCdtZXNzYWdlJyk7XG4gICAgICAgIG1ldGEuaW5wdXRzLnB1c2goJ3dvcmQnKTtcbiAgICAgICAgbWV0YS5pbnB1dHMucHVzaCgnZXJyb3InKTtcbiAgICAgICAgbWV0YS5pbnB1dHMucHVzaCgnaWNvbicpO1xuICAgICAgICBtZXRhLmlucHV0cy5wdXNoKCdyZXF1aXJlZCcpO1xuICAgICAgICBtZXRhLmlucHV0cy5wdXNoKCdtaW5MZW5ndGgnKTtcbiAgICAgICAgbWV0YS5ob3N0WydbY2xhc3MuaWNvbl0nXT0naXNJY29uRXhpc3QoKSc7XG4gICAgICAgIG1ldGEuaG9zdFsnW2NsYXNzLnJlcXVpcmVkXSddPSdyZXF1aXJlZCc7XG4gICAgICAgIG1ldGEuaG9zdFsnW2NsYXNzLmVycm9yXSddPSdpc0Vycm9yRXhpc3QoKSc7XG4gICAgICAgIHJldHVybiBtZXRhO1xuICAgIH1cbiAgICBcbiAgICBjb25zdHJ1Y3RvcihlbGU6IEVsZW1lbnRSZWYpIHtcbiAgICAgICAgc3VwZXIoZWxlKTsgXG4gICAgICAgIHZhciBlbDphbnkgPSB0aGlzLmVsZS5uYXRpdmVFbGVtZW50O1xuICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2FpLXNlY3Rpb24nLCcnKTsgXG4gICAgfSAgXG5cbiAgICBpc0xhYmVsRXhpc3QoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMubGFiZWwubGVuZ3RoID4gMDtcbiAgICB9XG5cbiAgICBpc01lc3NhZ2VFeGlzdCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5tZXNzYWdlLmxlbmd0aCA+IDA7XG4gICAgfVxuXG4gICAgaXNXb3JkRXhpc3QoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMud29yZC5sZW5ndGggPiAwO1xuICAgIH1cblxuICAgIGlzSWNvbkV4aXN0KCl7XG4gICAgICAgIHJldHVybiB0aGlzLmljb24ubGVuZ3RoID4gMDtcbiAgICB9XG5cbiAgICBpc0Vycm9yRXhpc3QoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXJyb3IubGVuZ3RoID4gMDtcbiAgICB9XG5cbiAgICB2YWxpZGF0ZSh0ZXh0OnN0cmluZyl7XG4gICAgICAgIHRoaXMuZXJyb3I9Jyc7XG4gICAgICAgIGlmKHRoaXMucmVxdWlyZWQgJiYgdGV4dC5sZW5ndGg9PTApIHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3I9dGhpcy5sYWJlbCsnIGlzIHJlcXVpcmVkJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHRoaXMubWluTGVuZ3RoID4gMCAmJiB0ZXh0Lmxlbmd0aCA8IHRoaXMubWluTGVuZ3RoKXtcbiAgICAgICAgICAgIHRoaXMuZXJyb3I9dGhpcy5sYWJlbCsnIG1pbmltdW0gbGVuZ3RoIGlzICcrdGhpcy5taW5MZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgXG5cblxuICAgIH0gICAgXG5cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
