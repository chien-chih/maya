System.register(['angular2/src/facade/lang', 'angular2/src/facade/async'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var lang_1, lang_2, async_1;
    var KeyCodes, AiControl;
    return {
        setters:[
            function (lang_1_1) {
                lang_1 = lang_1_1;
                lang_2 = lang_1_1;
            },
            function (async_1_1) {
                async_1 = async_1_1;
            }],
        execute: function() {
            //import {BrowserDomAdapter} from "angular2/src/platform/browser/browser_adapter";
            //BrowserDomAdapter.makeCurrent();
            //import * as utils from 'ai/components/utils';
            //import {StringChain} from './utils';
            //import {Reflector} from 'angular2/src/core/reflection/reflector';
            //import {NgClass} from 'angular2/common';
            //directives: [NgClass],
            //host: {
            //  '[attr.disabled]': 'disabled?"disabled":null',
            //},
            KeyCodes = (function () {
                function KeyCodes() {
                }
                KeyCodes.ESCAPE = 27;
                KeyCodes.ENTER = 13;
                KeyCodes.SPACE = 32;
                KeyCodes.LEFT = 37;
                KeyCodes.UP = 38;
                KeyCodes.RIGHT = 39;
                KeyCodes.DOWN = 40;
                __decorate([
                    lang_2.CONST(), 
                    __metadata('design:type', Object)
                ], KeyCodes, "ESCAPE", void 0);
                __decorate([
                    lang_2.CONST(), 
                    __metadata('design:type', Object)
                ], KeyCodes, "ENTER", void 0);
                __decorate([
                    lang_2.CONST(), 
                    __metadata('design:type', Object)
                ], KeyCodes, "SPACE", void 0);
                __decorate([
                    lang_2.CONST(), 
                    __metadata('design:type', Object)
                ], KeyCodes, "LEFT", void 0);
                __decorate([
                    lang_2.CONST(), 
                    __metadata('design:type', Object)
                ], KeyCodes, "UP", void 0);
                __decorate([
                    lang_2.CONST(), 
                    __metadata('design:type', Object)
                ], KeyCodes, "RIGHT", void 0);
                __decorate([
                    lang_2.CONST(), 
                    __metadata('design:type', Object)
                ], KeyCodes, "DOWN", void 0);
                KeyCodes = __decorate([
                    lang_2.CONST(), 
                    __metadata('design:paramtypes', [])
                ], KeyCodes);
                return KeyCodes;
            })();
            exports_1("KeyCodes", KeyCodes);
            AiControl = (function () {
                function AiControl(ele) {
                    this.tabindex = 0;
                    this.disabled = false;
                    this.isFocus = false;
                    this.isActive = false;
                    this.isHover = false;
                    this.isFire = false;
                    this.keyCode = 0;
                    this.visible = true;
                    this.hint = '';
                    this.icon = '';
                    this.error = '';
                    this._click = new async_1.EventEmitter();
                    this.nativeElement = ele.nativeElement;
                    this.nativeElement.setAttribute('ai-control', '');
                    var tabindex = this.nativeElement.getAttribute('tabindex');
                    if (tabindex)
                        this.tabindex = lang_1.NumberWrapper.parseInt(tabindex, 10);
                }
                AiControl.prototype.onClick = function () { };
                AiControl.prototype.onMouseOver = function () { };
                AiControl.prototype.onMouseOut = function () { };
                AiControl.prototype.onMouseDown = function (event) { };
                AiControl.prototype.onMouseUp = function (event) { };
                AiControl.prototype.onKeyDown = function (event) { };
                AiControl.prototype.onKeyUp = function (event) { };
                AiControl.prototype.onTouchStart = function (event) { };
                AiControl.prototype.onTouchEnd = function (event) { };
                AiControl.prototype.onFocus = function () { };
                AiControl.prototype.onBlur = function () { };
                AiControl.init = function () {
                    var userAgent = navigator.userAgent;
                    var mobile = !!userAgent && /iPad|iPhone|Android/.test(userAgent);
                    document.body.setAttribute(mobile ? 'mobile' : 'desktop', '');
                    return mobile;
                };
                AiControl.meta = function (meta, options) {
                    if (!options)
                        options = {};
                    if (!meta.inputs)
                        meta.inputs = [];
                    if (!meta.outputs)
                        meta.outputs = [];
                    if (!meta.host)
                        meta.host = {};
                    //       if(!meta.providers) meta.providers=[];
                    meta.inputs.push('visible');
                    meta.host['[class.hide]'] = '!visible';
                    if (!options.ignoreDisabled) {
                        meta.inputs.push('disabled');
                        meta.host['[class.disabled]'] = 'disabled';
                    }
                    if (!options.ignoreFocus) {
                        meta.host['[class.focus]'] = 'isFocus';
                        meta.host['(focus)'] = 'focus()';
                        meta.host['(blur)'] = 'blur()';
                        meta.host['[tabindex]'] = 'getTabIndex()';
                    }
                    if (!options.ignoreHover) {
                        meta.host['[class.hover]'] = 'isHover';
                        meta.host['(mouseover)'] = 'mouseOver()';
                        meta.host['(mouseout)'] = 'mouseOut()';
                    }
                    if (!options.ignoreActive) {
                        meta.outputs.push('_click');
                        meta.host['[class.active]'] = 'isActive';
                        meta.host['(mouseup)'] = 'mouseUp($event)';
                        meta.host['(mousedown)'] = 'mouseDown($event)';
                        meta.host['(touchstart)'] = 'touchStart($event)';
                        meta.host['(touchend)'] = 'touchEnd($event)';
                        meta.host['(keyup)'] = 'keyUp($event)';
                        meta.host['(keydown)'] = 'keyDown($event)';
                    }
                    return meta;
                };
                AiControl.prototype.inhieritAttributesToChilds = function (i) {
                    var attributes = ['primary', 'red', 'green', 'yellow', 'large', 'small'];
                    this.inhieritAttributes(attributes, i);
                };
                AiControl.prototype.inhieritAttributes = function (attributes, i) {
                    var ele = this.nativeElement;
                    attributes.forEach(function (attr) {
                        if (ele.getAttribute(attr) != null)
                            ele.childNodes[i].setAttribute(attr, '');
                    });
                };
                AiControl.prototype.ngOnChanges = function (_) {
                    //alert(this.spinning);
                };
                AiControl.prototype.enableMaterial = function () {
                    this.nativeElement.setAttribute('ai-material', '');
                };
                AiControl.prototype.getTabIndex = function () {
                    if (this.disabled || !this.visible)
                        return -1;
                    return this.tabindex;
                };
                AiControl.prototype.isDisabled = function () {
                    return this.disabled ? "disabled" : null;
                };
                AiControl.prototype.fireClickEvent = function () {
                    if (!this.disabled && !this.isFire) {
                        try {
                            this.onClick();
                            this.isFire = true;
                            async_1.ObservableWrapper.callEmit(this._click, null);
                        }
                        finally {
                            this.isFire = false;
                        }
                    }
                };
                AiControl.prototype.mouseOver = function () {
                    //console.log('mouseover');
                    //need prevent ios/andorid send strange mouseover event
                    if (!this.disabled && !AiControl.mobile) {
                        this.onMouseOver();
                        this.isHover = true;
                    }
                };
                AiControl.prototype.mouseOut = function () {
                    this.isHover = false;
                    this.isActive = false;
                    if (!this.disabled && !AiControl.mobile)
                        this.onMouseOut();
                };
                AiControl.prototype.mouseDown = function (event) {
                    //console.log('mousedown');
                    if (!this.disabled && event.button == 0) {
                        this.onMouseDown(event);
                        this.isActive = true;
                    }
                };
                AiControl.prototype.mouseUp = function (event) {
                    //console.log('mouseup');
                    this.isActive = false;
                    if (!this.disabled && event.button == 0) {
                        this.onMouseUp(event);
                        this.fireClickEvent();
                    }
                };
                AiControl.prototype.keyDown = function (event) {
                    //fix ios bluetooth keycode bug
                    this.keyCode = event.keyCode;
                    if (!this.disabled) {
                        this.onKeyDown(event);
                        if (event.keyCode == KeyCodes.SPACE) {
                            this.isActive = true;
                            //prevent press space jump to end
                            event.preventDefault();
                            event.stopPropagation();
                        }
                    }
                };
                AiControl.prototype.keyUp = function (event) {
                    if (!this.disabled) {
                        this.onKeyUp(event);
                    }
                    this.isActive = false;
                    if (this.keyCode == KeyCodes.SPACE)
                        this.fireClickEvent();
                };
                AiControl.prototype.touchStart = function (event) {
                    //console.log('touchstart');
                    if (!this.disabled) {
                        this.onTouchStart(event);
                        if (event.touches.length == 1)
                            this.isActive = true;
                    }
                };
                AiControl.prototype.touchEnd = function (event) {
                    //console.log('touchend');
                    this.isActive = false;
                    if (!this.disabled) {
                        this.onTouchEnd(event);
                        this.fireClickEvent();
                    }
                    event.preventDefault();
                };
                AiControl.prototype.focus = function () {
                    //console.log('focus');
                    if (!this.disabled) {
                        this.onFocus();
                        this.isFocus = !this.isActive;
                    }
                };
                AiControl.prototype.blur = function () {
                    if (!this.disabled)
                        this.onBlur();
                    this.isFocus = false;
                };
                AiControl.mobile = AiControl.init();
                return AiControl;
            })();
            exports_1("AiControl", AiControl);
        }
    }
});
/*
document.addEventListener('DOMContentLoaded', function() {
    alert('hello');
    //debugger
    //document.body.setAttribute('mobile','a');
});
*/

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlDb250cm9sL0FpQ29udHJvbC50cyJdLCJuYW1lcyI6WyJLZXlDb2RlcyIsIktleUNvZGVzLmNvbnN0cnVjdG9yIiwiQWlDb250cm9sIiwiQWlDb250cm9sLmNvbnN0cnVjdG9yIiwiQWlDb250cm9sLm9uQ2xpY2siLCJBaUNvbnRyb2wub25Nb3VzZU92ZXIiLCJBaUNvbnRyb2wub25Nb3VzZU91dCIsIkFpQ29udHJvbC5vbk1vdXNlRG93biIsIkFpQ29udHJvbC5vbk1vdXNlVXAiLCJBaUNvbnRyb2wub25LZXlEb3duIiwiQWlDb250cm9sLm9uS2V5VXAiLCJBaUNvbnRyb2wub25Ub3VjaFN0YXJ0IiwiQWlDb250cm9sLm9uVG91Y2hFbmQiLCJBaUNvbnRyb2wub25Gb2N1cyIsIkFpQ29udHJvbC5vbkJsdXIiLCJBaUNvbnRyb2wuaW5pdCIsIkFpQ29udHJvbC5tZXRhIiwiQWlDb250cm9sLmluaGllcml0QXR0cmlidXRlc1RvQ2hpbGRzIiwiQWlDb250cm9sLmluaGllcml0QXR0cmlidXRlcyIsIkFpQ29udHJvbC5uZ09uQ2hhbmdlcyIsIkFpQ29udHJvbC5lbmFibGVNYXRlcmlhbCIsIkFpQ29udHJvbC5nZXRUYWJJbmRleCIsIkFpQ29udHJvbC5pc0Rpc2FibGVkIiwiQWlDb250cm9sLmZpcmVDbGlja0V2ZW50IiwiQWlDb250cm9sLm1vdXNlT3ZlciIsIkFpQ29udHJvbC5tb3VzZU91dCIsIkFpQ29udHJvbC5tb3VzZURvd24iLCJBaUNvbnRyb2wubW91c2VVcCIsIkFpQ29udHJvbC5rZXlEb3duIiwiQWlDb250cm9sLmtleVVwIiwiQWlDb250cm9sLnRvdWNoU3RhcnQiLCJBaUNvbnRyb2wudG91Y2hFbmQiLCJBaUNvbnRyb2wuZm9jdXMiLCJBaUNvbnRyb2wuYmx1ciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVNBLGtGQUFrRjtZQUNsRixrQ0FBa0M7WUFFbEMsK0NBQStDO1lBQy9DLHNDQUFzQztZ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QUFBLENBQUNBO3dCQUNqQkEsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7d0JBQ3ZCQSxJQUFJQSxDQUFDQSxjQUFjQSxFQUFFQSxDQUFDQTtvQkFDMUJBLENBQUNBO29CQUNEQSxLQUFLQSxDQUFDQSxjQUFjQSxFQUFFQSxDQUFDQTtnQkFDM0JBLENBQUNBO2dCQUVEN0IseUJBQUtBLEdBQUxBO29CQUNJOEIsdUJBQXVCQTtvQkFDdkJBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLENBQUFBLENBQUNBO3dCQUNoQkEsSUFBSUEsQ0FBQ0EsT0FBT0EsRUFBRUEsQ0FBQ0E7d0JBQ2ZBLElBQUlBLENBQUNBLE9BQU9BLEdBQUdBLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBO29CQUNsQ0EsQ0FBQ0E7Z0JBQ0xBLENBQUNBO2dCQUVEOUIsd0JBQUlBLEdBQUpBO29CQUNJK0IsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0E7d0JBQ2ZBLElBQUlBLENBQUNBLE1BQU1BLEVBQUVBLENBQUNBO29CQUNsQkEsSUFBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsS0FBS0EsQ0FBQ0E7Z0JBQ3pCQSxDQUFDQTtnQkEzTE0vQixnQkFBTUEsR0FBU0EsU0FBU0EsQ0FBQ0EsSUFBSUEsRUFBRUEsQ0FBQ0E7Z0JBOEwzQ0EsZ0JBQUNBO1lBQURBLENBM05BLEFBMk5DQSxJQUFBO1lBM05ELGlDQTJOQyxDQUFBOzs7O0FBR0Q7Ozs7OztFQU1FIiwiZmlsZSI6ImNvbXBvbmVudHMvQWlDb250cm9sL0FpQ29udHJvbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RWxlbWVudFJlZixBdHRyaWJ1dGUsT25DaGFuZ2VzfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7VGltZXJXcmFwcGVyfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2FzeW5jJztcbi8vaW1wb3J0IHtpc1ByZXNlbnR9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZyc7XG5pbXBvcnQge0tleWJvYXJkRXZlbnQsTW91c2VFdmVudH0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9icm93c2VyJztcbmltcG9ydCB7TnVtYmVyV3JhcHBlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9sYW5nJztcbmltcG9ydCB7Q09OU1R9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZyc7XG5pbXBvcnQge09ic2VydmFibGVXcmFwcGVyLEV2ZW50RW1pdHRlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9hc3luYyc7XG5pbXBvcnQge0RPTX0gZnJvbSAnYW5ndWxhcjIvc3JjL3BsYXRmb3JtL2RvbS9kb21fYWRhcHRlcic7XG5cbi8vaW1wb3J0IHtCcm93c2VyRG9tQWRhcHRlcn0gZnJvbSBcImFuZ3VsYXIyL3NyYy9wbGF0Zm9ybS9icm93c2VyL2Jyb3dzZXJfYWRhcHRlclwiO1xuLy9Ccm93c2VyRG9tQWRhcHRlci5tYWtlQ3VycmVudCgpO1xuXG4vL2ltcG9ydCAqIGFzIHV0aWxzIGZyb20gJ2FpL2NvbXBvbmVudHMvdXRpbHMnO1xuLy9pbXBvcnQge1N0cmluZ0NoYWlufSBmcm9tICcuL3V0aWxzJztcbi8vaW1wb3J0IHtSZWZsZWN0b3J9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL3JlZmxlY3Rpb24vcmVmbGVjdG9yJztcbi8vaW1wb3J0IHtOZ0NsYXNzfSBmcm9tICdhbmd1bGFyMi9jb21tb24nO1xuXG4gICAgLy9kaXJlY3RpdmVzOiBbTmdDbGFzc10sXG4gICAgLy9ob3N0OiB7XG4gICAgLy8gICdbYXR0ci5kaXNhYmxlZF0nOiAnZGlzYWJsZWQ/XCJkaXNhYmxlZFwiOm51bGwnLFxuICAgIC8vfSxcbkBDT05TVCgpXG5leHBvcnQgY2xhc3MgS2V5Q29kZXMge1xuICBAQ09OU1QoKSBzdGF0aWMgRVNDQVBFID0gMjc7XG4gIEBDT05TVCgpIHN0YXRpYyBFTlRFUiA9IDEzO1xuICBAQ09OU1QoKSBzdGF0aWMgU1BBQ0UgPSAzMjtcbiAgQENPTlNUKCkgc3RhdGljIExFRlQgPSAzNztcbiAgQENPTlNUKCkgc3RhdGljIFVQID0gMzg7XG4gIEBDT05TVCgpIHN0YXRpYyBSSUdIVCA9IDM5O1xuICBAQ09OU1QoKSBzdGF0aWMgRE9XTiA9IDQwO1xuICAgXG59XG5cbmV4cG9ydCBjbGFzcyBBaUNvbnRyb2wgaW1wbGVtZW50cyBPbkNoYW5nZXN7IFxuICAgIG5hdGl2ZUVsZW1lbnQ6YW55O1xuICAgIHRhYmluZGV4OiBudW1iZXI9MDtcbiAgICBkaXNhYmxlZDpib29sZWFuPWZhbHNlO1xuICAgIGlzRm9jdXM6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBpc0FjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGlzSG92ZXI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBpc0ZpcmU6Ym9vbGVhbj1mYWxzZTtcbiAgICBrZXlDb2RlOm51bWJlcj0wO1xuICAgIHZpc2libGU6IGJvb2xlYW4gPSB0cnVlO1xuICAgIFxuICAgIGhpbnQ6c3RyaW5nPScnO1xuICAgIGljb246c3RyaW5nPScnO1xuICAgIGVycm9yOnN0cmluZz0nJztcblxuICAgIF9jbGljazogRXZlbnRFbWl0dGVyPGFueT49bmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgcHJvdGVjdGVkIG9uQ2xpY2soKXt9XG4gICAgcHJvdGVjdGVkIG9uTW91c2VPdmVyKCkge31cbiAgICBwcm90ZWN0ZWQgb25Nb3VzZU91dCgpIHt9XG4gICAgcHJvdGVjdGVkIG9uTW91c2VEb3duKGV2ZW50OiBNb3VzZUV2ZW50KSB7fVxuICAgIHByb3RlY3RlZCBvbk1vdXNlVXAoZXZlbnQ6IE1vdXNlRXZlbnQpIHt9XG4gICAgcHJvdGVjdGVkIG9uS2V5RG93bihldmVudDogS2V5Ym9hcmRFdmVudCkge31cbiAgICBwcm90ZWN0ZWQgb25LZXlVcChldmVudDogS2V5Ym9hcmRFdmVudCkge31cbiAgICBwcm90ZWN0ZWQgb25Ub3VjaFN0YXJ0KGV2ZW50KSB7fVxuICAgIHByb3RlY3RlZCBvblRvdWNoRW5kKGV2ZW50KSB7fVxuICAgIHByb3RlY3RlZCBvbkZvY3VzKCkge31cbiAgICBwcm90ZWN0ZWQgb25CbHVyKCkge31cbiAgICBcbiAgICBzdGF0aWMgbW9iaWxlOmJvb2xlYW49QWlDb250cm9sLmluaXQoKTtcbiAgICBzdGF0aWMgaW5pdCgpOmJvb2xlYW57XG4gICAgICAgIHZhciB1c2VyQWdlbnQgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xuICAgICAgICB2YXIgbW9iaWxlID0gISF1c2VyQWdlbnQgJiYgL2lQYWR8aVBob25lfEFuZHJvaWQvLnRlc3QodXNlckFnZW50KTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zZXRBdHRyaWJ1dGUobW9iaWxlPydtb2JpbGUnOidkZXNrdG9wJywnJyk7XG4gICAgICAgIHJldHVybiBtb2JpbGU7XG4gICAgfVxuICAgIHN0YXRpYyBtZXRhKG1ldGE6YW55LG9wdGlvbnM/OmFueSk6YW55e1xuICAgICAgICBpZighb3B0aW9ucykgb3B0aW9ucz17fTsgXG4gICAgICAgIGlmKCFtZXRhLmlucHV0cykgbWV0YS5pbnB1dHM9W107XG4gICAgICAgIGlmKCFtZXRhLm91dHB1dHMpIG1ldGEub3V0cHV0cz1bXTtcbiAgICAgICAgaWYoIW1ldGEuaG9zdCkgbWV0YS5ob3N0PXt9O1xuIC8vICAgICAgIGlmKCFtZXRhLnByb3ZpZGVycykgbWV0YS5wcm92aWRlcnM9W107XG4gXG4gICAgICAgIG1ldGEuaW5wdXRzLnB1c2goJ3Zpc2libGUnKTtcbiAgICAgICAgbWV0YS5ob3N0WydbY2xhc3MuaGlkZV0nXT0nIXZpc2libGUnO1xuICAgICAgICBpZighb3B0aW9ucy5pZ25vcmVEaXNhYmxlZCl7XG4gICAgICAgICAgICBtZXRhLmlucHV0cy5wdXNoKCdkaXNhYmxlZCcpO1xuICAgICAgICAgICAgbWV0YS5ob3N0WydbY2xhc3MuZGlzYWJsZWRdJ109J2Rpc2FibGVkJztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYoIW9wdGlvbnMuaWdub3JlRm9jdXMpe1xuICAgICAgICAgICAgbWV0YS5ob3N0WydbY2xhc3MuZm9jdXNdJ109J2lzRm9jdXMnO1xuICAgICAgICAgICAgbWV0YS5ob3N0WycoZm9jdXMpJ109J2ZvY3VzKCknO1xuICAgICAgICAgICAgbWV0YS5ob3N0WycoYmx1ciknXT0nYmx1cigpJztcbiAgICAgICAgICAgIG1ldGEuaG9zdFsnW3RhYmluZGV4XSddPSdnZXRUYWJJbmRleCgpJztcbiAgICAgICAgfSAgICAgICAgXG5cblxuICAgICAgICBpZighb3B0aW9ucy5pZ25vcmVIb3Zlcil7XG4gICAgICAgICAgICBtZXRhLmhvc3RbJ1tjbGFzcy5ob3Zlcl0nXT0naXNIb3Zlcic7XG4gICAgICAgICAgICBtZXRhLmhvc3RbJyhtb3VzZW92ZXIpJ109J21vdXNlT3ZlcigpJztcbiAgICAgICAgICAgIG1ldGEuaG9zdFsnKG1vdXNlb3V0KSddPSdtb3VzZU91dCgpJztcbiAgICAgICAgfSAgICAgICAgXG5cbiAgICAgICAgaWYoIW9wdGlvbnMuaWdub3JlQWN0aXZlKXtcbiAgICAgICAgICAgIG1ldGEub3V0cHV0cy5wdXNoKCdfY2xpY2snKTtcbiAgICAgICAgICAgIG1ldGEuaG9zdFsnW2NsYXNzLmFjdGl2ZV0nXT0naXNBY3RpdmUnO1xuICAgICAgICAgICAgbWV0YS5ob3N0WycobW91c2V1cCknXT0nbW91c2VVcCgkZXZlbnQpJztcbiAgICAgICAgICAgIG1ldGEuaG9zdFsnKG1vdXNlZG93biknXT0nbW91c2VEb3duKCRldmVudCknO1xuICAgICAgICAgICAgbWV0YS5ob3N0WycodG91Y2hzdGFydCknXT0ndG91Y2hTdGFydCgkZXZlbnQpJztcbiAgICAgICAgICAgIG1ldGEuaG9zdFsnKHRvdWNoZW5kKSddPSd0b3VjaEVuZCgkZXZlbnQpJztcbiAgICAgICAgICAgIG1ldGEuaG9zdFsnKGtleXVwKSddPSdrZXlVcCgkZXZlbnQpJztcbiAgICAgICAgICAgIG1ldGEuaG9zdFsnKGtleWRvd24pJ109J2tleURvd24oJGV2ZW50KSc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1ldGE7XG4gICAgfVxuICBcbiAgICBjb25zdHJ1Y3RvcihlbGU6IEVsZW1lbnRSZWYpIHtcbiAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50ID0gZWxlLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FpLWNvbnRyb2wnLCcnKTsgXG5cbiAgICAgICAgdmFyIHRhYmluZGV4ID0gdGhpcy5uYXRpdmVFbGVtZW50LmdldEF0dHJpYnV0ZSgndGFiaW5kZXgnKTtcbiAgICAgICAgaWYodGFiaW5kZXgpIHRoaXMudGFiaW5kZXggPSBOdW1iZXJXcmFwcGVyLnBhcnNlSW50KHRhYmluZGV4LCAxMCk7XG4gICAgfSAgXG5cbiAgICBpbmhpZXJpdEF0dHJpYnV0ZXNUb0NoaWxkcyhpKXtcbiAgICAgICAgdmFyIGF0dHJpYnV0ZXM9WydwcmltYXJ5JywncmVkJywnZ3JlZW4nLCd5ZWxsb3cnLCdsYXJnZScsJ3NtYWxsJ107XG4gICAgICAgIHRoaXMuaW5oaWVyaXRBdHRyaWJ1dGVzKGF0dHJpYnV0ZXMsaSk7XG4gICAgfVxuXG4gICAgaW5oaWVyaXRBdHRyaWJ1dGVzKGF0dHJpYnV0ZXMsaSl7XG4gICAgICAgIHZhciBlbGU9dGhpcy5uYXRpdmVFbGVtZW50O1xuICAgICAgICBhdHRyaWJ1dGVzLmZvckVhY2goYXR0ciA9PiB7XG4gICAgICAgICAgICBpZihlbGUuZ2V0QXR0cmlidXRlKGF0dHIpICE9IG51bGwpXG4gICAgICAgICAgICAgICAgZWxlLmNoaWxkTm9kZXNbaV0uc2V0QXR0cmlidXRlKGF0dHIsJycpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcyhfKSB7XG4gICAgICAgIC8vYWxlcnQodGhpcy5zcGlubmluZyk7XG4gICAgfVxuXG4gICAgZW5hYmxlTWF0ZXJpYWwoKXtcbiAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNldEF0dHJpYnV0ZSgnYWktbWF0ZXJpYWwnLCcnKTtcbiAgICB9XG5cbiAgICBnZXRUYWJJbmRleCgpe1xuICAgICAgICBpZih0aGlzLmRpc2FibGVkIHx8ICF0aGlzLnZpc2libGUpIHJldHVybiAtMTtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFiaW5kZXg7XG4gICAgfVxuXG4gICAgaXNEaXNhYmxlZCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5kaXNhYmxlZD8gXCJkaXNhYmxlZFwiIDogbnVsbDtcbiAgICB9XG5cbiAgICBmaXJlQ2xpY2tFdmVudCgpe1xuICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWQgJiYgIXRoaXMuaXNGaXJlKSB7XG4gICAgICAgICAgICB0cnl7XG4gICAgICAgICAgICAgICAgdGhpcy5vbkNsaWNrKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0ZpcmU9dHJ1ZTtcbiAgICAgICAgICAgICAgICBPYnNlcnZhYmxlV3JhcHBlci5jYWxsRW1pdCh0aGlzLl9jbGljaywgbnVsbCk7XG4gICAgICAgICAgICB9ZmluYWxseXtcbiAgICAgICAgICAgICAgICB0aGlzLmlzRmlyZT1mYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1vdXNlT3ZlcigpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZygnbW91c2VvdmVyJyk7XG4gICAgICAgIC8vbmVlZCBwcmV2ZW50IGlvcy9hbmRvcmlkIHNlbmQgc3RyYW5nZSBtb3VzZW92ZXIgZXZlbnRcbiAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkICYmICFBaUNvbnRyb2wubW9iaWxlKSB7XG4gICAgICAgICAgICB0aGlzLm9uTW91c2VPdmVyKCk7XG4gICAgICAgICAgICB0aGlzLmlzSG92ZXIgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIG1vdXNlT3V0KCkge1xuICAgICAgICB0aGlzLmlzSG92ZXIgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWQgJiYgIUFpQ29udHJvbC5tb2JpbGUpIFxuICAgICAgICAgICAgdGhpcy5vbk1vdXNlT3V0KCk7XG4gICAgfVxuICAgIFxuICAgIG1vdXNlRG93bihldmVudDogTW91c2VFdmVudCkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKCdtb3VzZWRvd24nKTtcbiAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkICYmIGV2ZW50LmJ1dHRvbj09MCkge1xuICAgICAgICAgICAgdGhpcy5vbk1vdXNlRG93bihldmVudCk7XG4gICAgICAgICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBtb3VzZVVwKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ21vdXNldXAnKTtcblxuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGlmICghdGhpcy5kaXNhYmxlZCAmJiBldmVudC5idXR0b249PTApIHtcbiAgICAgICAgICAgIHRoaXMub25Nb3VzZVVwKGV2ZW50KTtcbiAgICAgICAgICAgIHRoaXMuZmlyZUNsaWNrRXZlbnQoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBcbiAgICBrZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIC8vZml4IGlvcyBibHVldG9vdGgga2V5Y29kZSBidWdcbiAgICAgICAgdGhpcy5rZXlDb2RlPWV2ZW50LmtleUNvZGU7XG4gICAgICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5vbktleURvd24oZXZlbnQpO1xuICAgICAgICAgICAgaWYoZXZlbnQua2V5Q29kZSA9PSBLZXlDb2Rlcy5TUEFDRSl7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgLy9wcmV2ZW50IHByZXNzIHNwYWNlIGp1bXAgdG8gZW5kXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBrZXlVcChldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMub25LZXlVcChldmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5rZXlDb2RlID09IEtleUNvZGVzLlNQQUNFKSBcbiAgICAgICAgICAgIHRoaXMuZmlyZUNsaWNrRXZlbnQoKTtcbiAgICB9XG4gICAgXG4gICAgdG91Y2hTdGFydChldmVudCkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKCd0b3VjaHN0YXJ0Jyk7XG4gICAgICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5vblRvdWNoU3RhcnQoZXZlbnQpO1xuICAgICAgICAgICAgaWYoZXZlbnQudG91Y2hlcy5sZW5ndGggPT0gMSlcbiAgICAgICAgICAgICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICB0b3VjaEVuZChldmVudCkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKCd0b3VjaGVuZCcpO1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWQpe1xuICAgICAgICAgICAgdGhpcy5vblRvdWNoRW5kKGV2ZW50KTtcbiAgICAgICAgICAgIHRoaXMuZmlyZUNsaWNrRXZlbnQoKTtcbiAgICAgICAgfVxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIGZvY3VzKCkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKCdmb2N1cycpO1xuICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWQpe1xuICAgICAgICAgICAgdGhpcy5vbkZvY3VzKCk7XG4gICAgICAgICAgICB0aGlzLmlzRm9jdXMgPSAhdGhpcy5pc0FjdGl2ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBibHVyKCkge1xuICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWQpXG4gICAgICAgICAgICB0aGlzLm9uQmx1cigpO1xuICAgICAgICB0aGlzLmlzRm9jdXMgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBcbn0gXG5cblxuLyogIFxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xuICAgIGFsZXJ0KCdoZWxsbycpO1xuICAgIC8vZGVidWdnZXJcbiAgICAvL2RvY3VtZW50LmJvZHkuc2V0QXR0cmlidXRlKCdtb2JpbGUnLCdhJyk7XG59KTtcbiovIFxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
