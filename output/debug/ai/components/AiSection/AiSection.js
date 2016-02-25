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
                    var el = this.ele.nativeElement;
                    el.setAttribute('ai-section', '');
                }
                AiSection.meta = function (meta, options) {
                    meta = AiControl_1.AiControl.meta(meta, options);
                    meta.inputs.push('label');
                    meta.inputs.push('message');
                    meta.inputs.push('word');
                    meta.inputs.push('error');
                    //meta.host['[class.]']='isLabelExist()';
                    return meta;
                };
                AiSection.prototype.isLabelExist = function () {
                    return this.label != null && this.label.length > 0;
                };
                AiSection.prototype.isMessageExist = function () {
                    return this.message != null && this.message.length > 0;
                };
                AiSection.prototype.isWordExist = function () {
                    return this.word != null && this.word.length > 0;
                };
                AiSection.prototype.isErrorExist = function () {
                    return this.error != null && this.error.length > 0;
                };
                return AiSection;
            })(AiControl_1.AiControl);
            exports_1("AiSection", AiSection);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlTZWN0aW9uL0FpU2VjdGlvbi50cyJdLCJuYW1lcyI6WyJBaVNlY3Rpb24iLCJBaVNlY3Rpb24uY29uc3RydWN0b3IiLCJBaVNlY3Rpb24ubWV0YSIsIkFpU2VjdGlvbi5pc0xhYmVsRXhpc3QiLCJBaVNlY3Rpb24uaXNNZXNzYWdlRXhpc3QiLCJBaVNlY3Rpb24uaXNXb3JkRXhpc3QiLCJBaVNlY3Rpb24uaXNFcnJvckV4aXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztZQUdBO2dCQUErQkEsNkJBQVNBO2dCQWlCcENBLG1CQUFZQSxHQUFlQTtvQkFDdkJDLGtCQUFNQSxHQUFHQSxDQUFDQSxDQUFDQTtvQkFDWEEsSUFBSUEsRUFBRUEsR0FBT0EsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsYUFBYUEsQ0FBQ0E7b0JBQ3BDQSxFQUFFQSxDQUFDQSxZQUFZQSxDQUFDQSxZQUFZQSxFQUFDQSxFQUFFQSxDQUFDQSxDQUFDQTtnQkFDckNBLENBQUNBO2dCQWRNRCxjQUFJQSxHQUFYQSxVQUFZQSxJQUFRQSxFQUFDQSxPQUFZQTtvQkFDN0JFLElBQUlBLEdBQUNBLHFCQUFTQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxFQUFDQSxPQUFPQSxDQUFDQSxDQUFDQTtvQkFDbENBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLENBQUNBO29CQUMxQkEsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQ0E7b0JBQzVCQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQTtvQkFDekJBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLENBQUNBO29CQUMxQkEseUNBQXlDQTtvQkFDekNBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBO2dCQUNoQkEsQ0FBQ0E7Z0JBUURGLGdDQUFZQSxHQUFaQTtvQkFDSUcsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsSUFBSUEsSUFBSUEsSUFBSUEsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsTUFBTUEsR0FBR0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ3ZEQSxDQUFDQTtnQkFFREgsa0NBQWNBLEdBQWRBO29CQUNJSSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxPQUFPQSxJQUFJQSxJQUFJQSxJQUFJQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxNQUFNQSxHQUFHQSxDQUFDQSxDQUFDQTtnQkFDM0RBLENBQUNBO2dCQUVESiwrQkFBV0EsR0FBWEE7b0JBQ0lLLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLElBQUlBLElBQUlBLElBQUlBLElBQUlBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLEdBQUdBLENBQUNBLENBQUNBO2dCQUNyREEsQ0FBQ0E7Z0JBRURMLGdDQUFZQSxHQUFaQTtvQkFDSU0sTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsSUFBSUEsSUFBSUEsSUFBSUEsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsTUFBTUEsR0FBR0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ3ZEQSxDQUFDQTtnQkFFTE4sZ0JBQUNBO1lBQURBLENBdkNBLEFBdUNDQSxFQXZDOEIscUJBQVMsRUF1Q3ZDO1lBdkNELGlDQXVDQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvQWlTZWN0aW9uL0FpU2VjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RWxlbWVudFJlZn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0FpQ29udHJvbH0gZnJvbSAnLi4vQWlDb250cm9sL0FpQ29udHJvbCc7XG5cbmV4cG9ydCBjbGFzcyBBaVNlY3Rpb24gZXh0ZW5kcyBBaUNvbnRyb2x7XG4gXG4gICAgbGFiZWw6c3RyaW5nO1xuICAgIG1lc3NhZ2U6c3RyaW5nO1xuICAgIHdvcmQ6c3RyaW5nO1xuICAgIGVycm9yOnN0cmluZztcbiAgICBcbiAgICBzdGF0aWMgbWV0YShtZXRhOmFueSxvcHRpb25zPzphbnkpOmFueXtcbiAgICAgICAgbWV0YT1BaUNvbnRyb2wubWV0YShtZXRhLG9wdGlvbnMpO1xuICAgICAgICBtZXRhLmlucHV0cy5wdXNoKCdsYWJlbCcpO1xuICAgICAgICBtZXRhLmlucHV0cy5wdXNoKCdtZXNzYWdlJyk7XG4gICAgICAgIG1ldGEuaW5wdXRzLnB1c2goJ3dvcmQnKTtcbiAgICAgICAgbWV0YS5pbnB1dHMucHVzaCgnZXJyb3InKTtcbiAgICAgICAgLy9tZXRhLmhvc3RbJ1tjbGFzcy5dJ109J2lzTGFiZWxFeGlzdCgpJztcbiAgICAgICAgcmV0dXJuIG1ldGE7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0cnVjdG9yKGVsZTogRWxlbWVudFJlZikge1xuICAgICAgICBzdXBlcihlbGUpOyBcbiAgICAgICAgdmFyIGVsOmFueSA9IHRoaXMuZWxlLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnYWktc2VjdGlvbicsJycpOyBcbiAgICB9ICBcblxuICAgIGlzTGFiZWxFeGlzdCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5sYWJlbCAhPSBudWxsICYmIHRoaXMubGFiZWwubGVuZ3RoID4gMDtcbiAgICB9XG5cbiAgICBpc01lc3NhZ2VFeGlzdCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5tZXNzYWdlICE9IG51bGwgJiYgdGhpcy5tZXNzYWdlLmxlbmd0aCA+IDA7XG4gICAgfVxuXG4gICAgaXNXb3JkRXhpc3QoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMud29yZCAhPSBudWxsICYmIHRoaXMud29yZC5sZW5ndGggPiAwO1xuICAgIH1cblxuICAgIGlzRXJyb3JFeGlzdCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5lcnJvciAhPSBudWxsICYmIHRoaXMuZXJyb3IubGVuZ3RoID4gMDtcbiAgICB9XG5cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
