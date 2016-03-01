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
    var AiFormControl;
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
            AiFormControl = (function (_super) {
                __extends(AiFormControl, _super);
                function AiFormControl(ele) {
                    _super.call(this, ele);
                    this.value = null;
                    this.label = '';
                    this.message = '';
                    this.word = '';
                    this.error = '';
                    this.icon = '';
                    //validation
                    this.required = false;
                    this._value_change = new async_1.EventEmitter();
                    this.onChange = function (_) { };
                    this.onTouched = function () { };
                    this.nativeElement.setAttribute('ai-form-control', '');
                }
                AiFormControl.meta = function (meta, options) {
                    meta = AiControl_1.AiControl.meta(meta, options);
                    meta.inputs.push('value');
                    meta.inputs.push('label');
                    meta.inputs.push('message');
                    meta.inputs.push('word');
                    meta.inputs.push('error');
                    meta.inputs.push('icon');
                    meta.inputs.push('required');
                    meta.host['[class.valued]'] = 'hasValue()';
                    meta.host['[class.icon]'] = 'hasIcon()';
                    meta.host['[class.required]'] = 'required';
                    meta.host['[class.error]'] = 'hasError()';
                    return meta;
                };
                AiFormControl.prototype.registerOnChange = function (fn) { this.onChange = fn; };
                AiFormControl.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
                AiFormControl.prototype.writeValue = function (value) {
                    if (value)
                        this.value = value;
                };
                AiFormControl.prototype.updateValue = function (value) {
                    this.error = '';
                    this.value = value;
                    this.onChange(this.value);
                    async_1.ObservableWrapper.callEmit(this._value_change, this.value);
                };
                AiFormControl.prototype.hasValue = function () {
                    return this.value != null && this.value.length > 0;
                };
                AiFormControl.prototype.hasLabel = function () {
                    return this.label.length > 0;
                };
                AiFormControl.prototype.hasMessage = function () {
                    return this.message.length > 0;
                };
                AiFormControl.prototype.hasWord = function () {
                    return this.word.length > 0;
                };
                AiFormControl.prototype.hasIcon = function () {
                    return this.icon.length > 0;
                };
                AiFormControl.prototype.hasError = function () {
                    return this.error.length > 0;
                };
                AiFormControl.prototype.validate = function (text) {
                    this.error = '';
                    if (this.required && text.length == 0) {
                        this.error = this.label + ' is required';
                        return false;
                    }
                    return true;
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', async_1.EventEmitter)
                ], AiFormControl.prototype, "_value_change", void 0);
                return AiFormControl;
            })(AiControl_1.AiControl);
            exports_1("AiFormControl", AiFormControl);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlGb3JtQ29udHJvbC9BaUZvcm1Db250cm9sLnRzIl0sIm5hbWVzIjpbIkFpRm9ybUNvbnRyb2wiLCJBaUZvcm1Db250cm9sLmNvbnN0cnVjdG9yIiwiQWlGb3JtQ29udHJvbC5tZXRhIiwiQWlGb3JtQ29udHJvbC5yZWdpc3Rlck9uQ2hhbmdlIiwiQWlGb3JtQ29udHJvbC5yZWdpc3Rlck9uVG91Y2hlZCIsIkFpRm9ybUNvbnRyb2wud3JpdGVWYWx1ZSIsIkFpRm9ybUNvbnRyb2wudXBkYXRlVmFsdWUiLCJBaUZvcm1Db250cm9sLmhhc1ZhbHVlIiwiQWlGb3JtQ29udHJvbC5oYXNMYWJlbCIsIkFpRm9ybUNvbnRyb2wuaGFzTWVzc2FnZSIsIkFpRm9ybUNvbnRyb2wuaGFzV29yZCIsIkFpRm9ybUNvbnRyb2wuaGFzSWNvbiIsIkFpRm9ybUNvbnRyb2wuaGFzRXJyb3IiLCJBaUZvcm1Db250cm9sLnZhbGlkYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUtBO2dCQUFtQ0EsaUNBQVNBO2dCQThCeENBLHVCQUFZQSxHQUFlQTtvQkFDdkJDLGtCQUFNQSxHQUFHQSxDQUFDQSxDQUFDQTtvQkE5QmZBLFVBQUtBLEdBQUtBLElBQUlBLENBQUNBO29CQUNmQSxVQUFLQSxHQUFRQSxFQUFFQSxDQUFDQTtvQkFDaEJBLFlBQU9BLEdBQVFBLEVBQUVBLENBQUNBO29CQUNsQkEsU0FBSUEsR0FBUUEsRUFBRUEsQ0FBQ0E7b0JBQ2ZBLFVBQUtBLEdBQVFBLEVBQUVBLENBQUNBO29CQUNoQkEsU0FBSUEsR0FBUUEsRUFBRUEsQ0FBQ0E7b0JBRWZBLFlBQVlBO29CQUNaQSxhQUFRQSxHQUFTQSxLQUFLQSxDQUFDQTtvQkFHdkJBLGtCQUFhQSxHQUFvQkEsSUFBSUEsb0JBQVlBLEVBQUVBLENBQUNBO29CQXVCcERBLGFBQVFBLEdBQUdBLFVBQUNBLENBQUNBLElBQU1BLENBQUNBLENBQUNBO29CQUNyQkEsY0FB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cm9sLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsRWxlbWVudFJlZixJbnB1dCxPdXRwdXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtDb250cm9sVmFsdWVBY2Nlc3Nvcn0gZnJvbSAnYW5ndWxhcjIvY29tbW9uJztcbmltcG9ydCB7T2JzZXJ2YWJsZVdyYXBwZXIsRXZlbnRFbWl0dGVyfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2FzeW5jJztcbmltcG9ydCB7QWlDb250cm9sfSBmcm9tICcuLi9BaUNvbnRyb2wvQWlDb250cm9sJztcblxuZXhwb3J0IGNsYXNzIEFpRm9ybUNvbnRyb2wgZXh0ZW5kcyBBaUNvbnRyb2wgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvcntcbiAgICB2YWx1ZTphbnk9bnVsbDtcbiAgICBsYWJlbDpzdHJpbmc9Jyc7IFxuICAgIG1lc3NhZ2U6c3RyaW5nPScnO1xuICAgIHdvcmQ6c3RyaW5nPScnO1xuICAgIGVycm9yOnN0cmluZz0nJztcbiAgICBpY29uOnN0cmluZz0nJztcbiAgICBcbiAgICAvL3ZhbGlkYXRpb25cbiAgICByZXF1aXJlZDpib29sZWFuPWZhbHNlO1xuXG4gICAgQE91dHB1dCgpXG4gICAgX3ZhbHVlX2NoYW5nZTogRXZlbnRFbWl0dGVyPGFueT49bmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgc3RhdGljIG1ldGEobWV0YTphbnksb3B0aW9ucz86YW55KTphbnl7XG4gICAgICAgIG1ldGE9QWlDb250cm9sLm1ldGEobWV0YSxvcHRpb25zKTtcbiAgICAgICAgbWV0YS5pbnB1dHMucHVzaCgndmFsdWUnKTtcbiAgICAgICAgbWV0YS5pbnB1dHMucHVzaCgnbGFiZWwnKTtcbiAgICAgICAgbWV0YS5pbnB1dHMucHVzaCgnbWVzc2FnZScpO1xuICAgICAgICBtZXRhLmlucHV0cy5wdXNoKCd3b3JkJyk7XG4gICAgICAgIG1ldGEuaW5wdXRzLnB1c2goJ2Vycm9yJyk7XG4gICAgICAgIG1ldGEuaW5wdXRzLnB1c2goJ2ljb24nKTtcbiAgICAgICAgbWV0YS5pbnB1dHMucHVzaCgncmVxdWlyZWQnKTtcbiAgICAgICAgbWV0YS5ob3N0WydbY2xhc3MudmFsdWVkXSddPSdoYXNWYWx1ZSgpJztcbiAgICAgICAgbWV0YS5ob3N0WydbY2xhc3MuaWNvbl0nXT0naGFzSWNvbigpJztcbiAgICAgICAgbWV0YS5ob3N0WydbY2xhc3MucmVxdWlyZWRdJ109J3JlcXVpcmVkJztcbiAgICAgICAgbWV0YS5ob3N0WydbY2xhc3MuZXJyb3JdJ109J2hhc0Vycm9yKCknO1xuICAgICAgICByZXR1cm4gbWV0YTtcbiAgICB9XG4gICAgXG4gICAgY29uc3RydWN0b3IoZWxlOiBFbGVtZW50UmVmKSB7XG4gICAgICAgIHN1cGVyKGVsZSk7IFxuICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdhaS1mb3JtLWNvbnRyb2wnLCcnKTsgXG4gICAgfSAgXG5cbiAgICBvbkNoYW5nZSA9IChfKSA9PiB7fTtcbiAgICBvblRvdWNoZWQgPSAoKSA9PiB7fTtcbiAgICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogYW55KSA9PiB2b2lkKTogdm9pZCB7IHRoaXMub25DaGFuZ2UgPSBmbjsgfVxuICAgIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7IHRoaXMub25Ub3VjaGVkID0gZm47IH1cblxuICAgIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgICAgICBpZih2YWx1ZSkgdGhpcy52YWx1ZT12YWx1ZTtcbiAgICB9XG5cbiAgICB1cGRhdGVWYWx1ZSh2YWx1ZTphbnkpIHtcbiAgICAgICAgdGhpcy5lcnJvcj0nJztcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlKHRoaXMudmFsdWUpO1xuICAgICAgICBPYnNlcnZhYmxlV3JhcHBlci5jYWxsRW1pdCh0aGlzLl92YWx1ZV9jaGFuZ2UsIHRoaXMudmFsdWUpO1xuICAgIH1cblxuICAgIGhhc1ZhbHVlKCl7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlICE9IG51bGwgJiYgdGhpcy52YWx1ZS5sZW5ndGggPiAwO1xuICAgIH0gXG5cblxuICAgIGhhc0xhYmVsKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmxhYmVsLmxlbmd0aCA+IDA7XG4gICAgfVxuXG4gICAgaGFzTWVzc2FnZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5tZXNzYWdlLmxlbmd0aCA+IDA7XG4gICAgfVxuXG4gICAgaGFzV29yZCgpe1xuICAgICAgICByZXR1cm4gdGhpcy53b3JkLmxlbmd0aCA+IDA7XG4gICAgfVxuXG4gICAgaGFzSWNvbigpe1xuICAgICAgICByZXR1cm4gdGhpcy5pY29uLmxlbmd0aCA+IDA7XG4gICAgfVxuXG4gICAgaGFzRXJyb3IoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXJyb3IubGVuZ3RoID4gMDtcbiAgICB9XG5cbiAgICB2YWxpZGF0ZSh0ZXh0OnN0cmluZyk6Ym9vbGVhbntcbiAgICAgICAgdGhpcy5lcnJvcj0nJztcbiAgICAgICAgaWYodGhpcy5yZXF1aXJlZCAmJiB0ZXh0Lmxlbmd0aD09MCkge1xuICAgICAgICAgICAgdGhpcy5lcnJvcj10aGlzLmxhYmVsKycgaXMgcmVxdWlyZWQnO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gICAgXG4gXG59XG5cbiAiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
