System.register(['angular2/core', 'angular2/src/facade/async', '../AiControl/AiControl'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
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
            }(AiControl_1.AiControl));
            exports_1("AiFormControl", AiFormControl);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlGb3JtQ29udHJvbC9BaUZvcm1Db250cm9sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFLQTtnQkFBbUMsaUNBQVM7Z0JBOEJ4Qyx1QkFBWSxHQUFlO29CQUN2QixrQkFBTSxHQUFHLENBQUMsQ0FBQztvQkE5QmYsVUFBSyxHQUFLLElBQUksQ0FBQztvQkFDZixVQUFLLEdBQVEsRUFBRSxDQUFDO29CQUNoQixZQUFPLEdBQVEsRUFBRSxDQUFDO29CQUNsQixTQUFJLEdBQVEsRUFBRSxDQUFDO29CQUNmLFVBQUssR0FBUSxFQUFFLENBQUM7b0JBQ2hCLFNBQUksR0FBUSxFQUFFLENBQUM7b0JBRWYsWUFBWTtvQkFDWixhQUFRLEdBQVMsS0FBSyxDQUFDO29CQUd2QixrQkFBYSxHQUFvQixJQUFJLG9CQUFZLEVBQUUsQ0FBQztvQkF1QnBELGFBQVEsR0FBRyxVQUFDLENBQUMsSUFBTSxDQUFDLENBQUM7b0JBQ3JCLGNBQVMsR0FBRyxjQUFPLENBQUMsQ0FBQztvQkFKakIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsaUJBQWlCLEVBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQzFELENBQUM7Z0JBbkJNLGtCQUFJLEdBQVgsVUFBWSxJQUFRLEVBQUMsT0FBWTtvQkFDN0IsSUFBSSxHQUFDLHFCQUFTLENBQUMsSUFBSSxDQUFDLElBQUksRUFBQyxPQUFPLENBQUMsQ0FBQztvQkFDbEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUMxQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3pCLElBQUksQ0FB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QyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvQWlGb3JtQ29udHJvbC9BaUZvcm1Db250cm9sLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsRWxlbWVudFJlZixJbnB1dCxPdXRwdXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtDb250cm9sVmFsdWVBY2Nlc3Nvcn0gZnJvbSAnYW5ndWxhcjIvY29tbW9uJztcbmltcG9ydCB7T2JzZXJ2YWJsZVdyYXBwZXIsRXZlbnRFbWl0dGVyfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2FzeW5jJztcbmltcG9ydCB7QWlDb250cm9sfSBmcm9tICcuLi9BaUNvbnRyb2wvQWlDb250cm9sJztcblxuZXhwb3J0IGNsYXNzIEFpRm9ybUNvbnRyb2wgZXh0ZW5kcyBBaUNvbnRyb2wgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvcntcbiAgICB2YWx1ZTphbnk9bnVsbDtcbiAgICBsYWJlbDpzdHJpbmc9Jyc7IFxuICAgIG1lc3NhZ2U6c3RyaW5nPScnO1xuICAgIHdvcmQ6c3RyaW5nPScnO1xuICAgIGVycm9yOnN0cmluZz0nJztcbiAgICBpY29uOnN0cmluZz0nJztcbiAgICBcbiAgICAvL3ZhbGlkYXRpb25cbiAgICByZXF1aXJlZDpib29sZWFuPWZhbHNlO1xuXG4gICAgQE91dHB1dCgpXG4gICAgX3ZhbHVlX2NoYW5nZTogRXZlbnRFbWl0dGVyPGFueT49bmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgc3RhdGljIG1ldGEobWV0YTphbnksb3B0aW9ucz86YW55KTphbnl7XG4gICAgICAgIG1ldGE9QWlDb250cm9sLm1ldGEobWV0YSxvcHRpb25zKTtcbiAgICAgICAgbWV0YS5pbnB1dHMucHVzaCgndmFsdWUnKTtcbiAgICAgICAgbWV0YS5pbnB1dHMucHVzaCgnbGFiZWwnKTtcbiAgICAgICAgbWV0YS5pbnB1dHMucHVzaCgnbWVzc2FnZScpO1xuICAgICAgICBtZXRhLmlucHV0cy5wdXNoKCd3b3JkJyk7XG4gICAgICAgIG1ldGEuaW5wdXRzLnB1c2goJ2Vycm9yJyk7XG4gICAgICAgIG1ldGEuaW5wdXRzLnB1c2goJ2ljb24nKTtcbiAgICAgICAgbWV0YS5pbnB1dHMucHVzaCgncmVxdWlyZWQnKTtcbiAgICAgICAgbWV0YS5ob3N0WydbY2xhc3MudmFsdWVkXSddPSdoYXNWYWx1ZSgpJztcbiAgICAgICAgbWV0YS5ob3N0WydbY2xhc3MuaWNvbl0nXT0naGFzSWNvbigpJztcbiAgICAgICAgbWV0YS5ob3N0WydbY2xhc3MucmVxdWlyZWRdJ109J3JlcXVpcmVkJztcbiAgICAgICAgbWV0YS5ob3N0WydbY2xhc3MuZXJyb3JdJ109J2hhc0Vycm9yKCknO1xuICAgICAgICByZXR1cm4gbWV0YTtcbiAgICB9XG4gICAgXG4gICAgY29uc3RydWN0b3IoZWxlOiBFbGVtZW50UmVmKSB7XG4gICAgICAgIHN1cGVyKGVsZSk7IFxuICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdhaS1mb3JtLWNvbnRyb2wnLCcnKTsgXG4gICAgfSAgXG5cbiAgICBvbkNoYW5nZSA9IChfKSA9PiB7fTtcbiAgICBvblRvdWNoZWQgPSAoKSA9PiB7fTtcbiAgICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogYW55KSA9PiB2b2lkKTogdm9pZCB7IHRoaXMub25DaGFuZ2UgPSBmbjsgfVxuICAgIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7IHRoaXMub25Ub3VjaGVkID0gZm47IH1cblxuICAgIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgICAgICBpZih2YWx1ZSkgdGhpcy52YWx1ZT12YWx1ZTtcbiAgICB9XG5cbiAgICB1cGRhdGVWYWx1ZSh2YWx1ZTphbnkpIHtcbiAgICAgICAgdGhpcy5lcnJvcj0nJztcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlKHRoaXMudmFsdWUpO1xuICAgICAgICBPYnNlcnZhYmxlV3JhcHBlci5jYWxsRW1pdCh0aGlzLl92YWx1ZV9jaGFuZ2UsIHRoaXMudmFsdWUpO1xuICAgIH1cblxuICAgIGhhc1ZhbHVlKCl7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlICE9IG51bGwgJiYgdGhpcy52YWx1ZS5sZW5ndGggPiAwO1xuICAgIH0gXG5cblxuICAgIGhhc0xhYmVsKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmxhYmVsLmxlbmd0aCA+IDA7XG4gICAgfVxuXG4gICAgaGFzTWVzc2FnZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5tZXNzYWdlLmxlbmd0aCA+IDA7XG4gICAgfVxuXG4gICAgaGFzV29yZCgpe1xuICAgICAgICByZXR1cm4gdGhpcy53b3JkLmxlbmd0aCA+IDA7XG4gICAgfVxuXG4gICAgaGFzSWNvbigpe1xuICAgICAgICByZXR1cm4gdGhpcy5pY29uLmxlbmd0aCA+IDA7XG4gICAgfVxuXG4gICAgaGFzRXJyb3IoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXJyb3IubGVuZ3RoID4gMDtcbiAgICB9XG5cbiAgICB2YWxpZGF0ZSh0ZXh0OnN0cmluZyk6Ym9vbGVhbntcbiAgICAgICAgdGhpcy5lcnJvcj0nJztcbiAgICAgICAgaWYodGhpcy5yZXF1aXJlZCAmJiB0ZXh0Lmxlbmd0aD09MCkge1xuICAgICAgICAgICAgdGhpcy5lcnJvcj10aGlzLmxhYmVsKycgaXMgcmVxdWlyZWQnO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gICAgXG4gXG59XG5cbiAiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
