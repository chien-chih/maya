System.register(['angular2/src/facade/lang', 'angular2/src/facade/async'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
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
            }());
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
                    //hint:string='';
                    //  icon:string='';
                    //    error:string='';
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
            }());
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlDb250cm9sL0FpQ29udHJvbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFTQSxrRkFBa0Y7WUFDbEYsa0NBQWtDO1lBRWxDLCtDQUErQztZQUMvQyxzQ0FBc0M7WUFDdEMsbUVBQW1FO1lBQ25FLDBDQUEwQztZQUV0Qyx3QkFBd0I7WUFDeEIsU0FBUztZQUNULGtEQUFrRDtZQUNsRCxJQUFJO1lBRVI7Z0JBQUE7Z0JBU0EsQ0FBQztnQkFSaUIsZUFBTSxHQUFHLEVBQUUsQ0FBQztnQkFDWixjQUFLLEdBQUcsRUFBRSxDQUFDO2dCQUNYLGNBQUssR0FBRyxFQUFFLENBQUM7Z0JBQ1gsYUFBSSxHQUFHLEVBQUUsQ0FBQztnQkFDVixXQUFFLEdBQUcsRUFBRSxDQUFDO2dCQUNSLGNBQUssR0FBRyxFQUFFLENBQUM7Z0JBQ1gsYUFBSSxHQUFHLEVBQUUsQ0FBQztnQkFOMUI7b0JBQUMsWUFBSyxFQUFFOzs4Q0FBQTtnQkFDUjtvQkFBQyxZQUFLLEVBQUU7OzZDQUFBO2dCQUNSO29CQUFDLFlBQUssRUFBRTs7NkNBQUE7Z0JBQ1I7b0JBQUMsWUFBSyxFQUFFOzs0Q0FBQTtnQkFDUjtvQkFBQyxZQUFLLEVBQUU7OzBDQUFBO2dCQUNSO29CQUFDLFlBQUssRUFBRTs7NkNBQUE7Z0JBQ1I7b0JBQUMsWUFBSyxFQUFFOzs0Q0FBQTtnQkFSVjtvQkFBQyxZQUFLLEVBQUU7OzRCQUFBO2dCQVVSLGVBQUM7WUFBRCxDQVRBLEFBU0MsSUFBQTtZQVRELCtCQVNDLENBQUE7WUFFRDtnQkE2RUksbUJBQVksR0FBZTtvQkEzRTNCLGFBQVEsR0FBUyxDQUFDLENBQUM7b0JBQ25CLGFBQVEsR0FBUyxLQUFLLENBQUM7b0JBQ3ZCLFlBQU8sR0FBWSxLQUFLLENBQUM7b0JBQ3pCLGFBQVEsR0FBWSxLQUFLLENBQUM7b0JBQzFCLFlBQU8sR0FBWSxLQUFLLENBQUM7b0JBQ3pCLFdBQU0sR0FBUyxLQUFLLENB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QUFJLEdBQUo7b0JBQ0ksRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO3dCQUNmLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztvQkFDbEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7Z0JBQ3pCLENBQUM7Z0JBM0xNLGdCQUFNLEdBQVMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQThMM0MsZ0JBQUM7WUFBRCxDQTNOQSxBQTJOQyxJQUFBO1lBM05ELGlDQTJOQyxDQUFBOzs7O0FBR0Q7Ozs7OztFQU1FIiwiZmlsZSI6ImNvbXBvbmVudHMvQWlDb250cm9sL0FpQ29udHJvbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RWxlbWVudFJlZixBdHRyaWJ1dGUsT25DaGFuZ2VzfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7VGltZXJXcmFwcGVyfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2FzeW5jJztcbi8vaW1wb3J0IHtpc1ByZXNlbnR9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZyc7XG5pbXBvcnQge0tleWJvYXJkRXZlbnQsTW91c2VFdmVudH0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9icm93c2VyJztcbmltcG9ydCB7TnVtYmVyV3JhcHBlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9sYW5nJztcbmltcG9ydCB7Q09OU1R9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZyc7XG5pbXBvcnQge09ic2VydmFibGVXcmFwcGVyLEV2ZW50RW1pdHRlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9hc3luYyc7XG5pbXBvcnQge0RPTX0gZnJvbSAnYW5ndWxhcjIvc3JjL3BsYXRmb3JtL2RvbS9kb21fYWRhcHRlcic7XG5cbi8vaW1wb3J0IHtCcm93c2VyRG9tQWRhcHRlcn0gZnJvbSBcImFuZ3VsYXIyL3NyYy9wbGF0Zm9ybS9icm93c2VyL2Jyb3dzZXJfYWRhcHRlclwiO1xuLy9Ccm93c2VyRG9tQWRhcHRlci5tYWtlQ3VycmVudCgpO1xuXG4vL2ltcG9ydCAqIGFzIHV0aWxzIGZyb20gJ2FpL2NvbXBvbmVudHMvdXRpbHMnO1xuLy9pbXBvcnQge1N0cmluZ0NoYWlufSBmcm9tICcuL3V0aWxzJztcbi8vaW1wb3J0IHtSZWZsZWN0b3J9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL3JlZmxlY3Rpb24vcmVmbGVjdG9yJztcbi8vaW1wb3J0IHtOZ0NsYXNzfSBmcm9tICdhbmd1bGFyMi9jb21tb24nO1xuXG4gICAgLy9kaXJlY3RpdmVzOiBbTmdDbGFzc10sXG4gICAgLy9ob3N0OiB7XG4gICAgLy8gICdbYXR0ci5kaXNhYmxlZF0nOiAnZGlzYWJsZWQ/XCJkaXNhYmxlZFwiOm51bGwnLFxuICAgIC8vfSxcbkBDT05TVCgpXG5leHBvcnQgY2xhc3MgS2V5Q29kZXMge1xuICBAQ09OU1QoKSBzdGF0aWMgRVNDQVBFID0gMjc7XG4gIEBDT05TVCgpIHN0YXRpYyBFTlRFUiA9IDEzO1xuICBAQ09OU1QoKSBzdGF0aWMgU1BBQ0UgPSAzMjtcbiAgQENPTlNUKCkgc3RhdGljIExFRlQgPSAzNztcbiAgQENPTlNUKCkgc3RhdGljIFVQID0gMzg7XG4gIEBDT05TVCgpIHN0YXRpYyBSSUdIVCA9IDM5O1xuICBAQ09OU1QoKSBzdGF0aWMgRE9XTiA9IDQwO1xuICAgXG59XG5cbmV4cG9ydCBjbGFzcyBBaUNvbnRyb2wgaW1wbGVtZW50cyBPbkNoYW5nZXN7IFxuICAgIG5hdGl2ZUVsZW1lbnQ6YW55O1xuICAgIHRhYmluZGV4OiBudW1iZXI9MDtcbiAgICBkaXNhYmxlZDpib29sZWFuPWZhbHNlO1xuICAgIGlzRm9jdXM6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBpc0FjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGlzSG92ZXI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBpc0ZpcmU6Ym9vbGVhbj1mYWxzZTtcbiAgICBrZXlDb2RlOm51bWJlcj0wO1xuICAgIHZpc2libGU6IGJvb2xlYW4gPSB0cnVlO1xuICAgIFxuICAgIC8vaGludDpzdHJpbmc9Jyc7XG4gIC8vICBpY29uOnN0cmluZz0nJztcbi8vICAgIGVycm9yOnN0cmluZz0nJztcblxuICAgIF9jbGljazogRXZlbnRFbWl0dGVyPGFueT49bmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgcHJvdGVjdGVkIG9uQ2xpY2soKXt9XG4gICAgcHJvdGVjdGVkIG9uTW91c2VPdmVyKCkge31cbiAgICBwcm90ZWN0ZWQgb25Nb3VzZU91dCgpIHt9XG4gICAgcHJvdGVjdGVkIG9uTW91c2VEb3duKGV2ZW50OiBNb3VzZUV2ZW50KSB7fVxuICAgIHByb3RlY3RlZCBvbk1vdXNlVXAoZXZlbnQ6IE1vdXNlRXZlbnQpIHt9XG4gICAgcHJvdGVjdGVkIG9uS2V5RG93bihldmVudDogS2V5Ym9hcmRFdmVudCkge31cbiAgICBwcm90ZWN0ZWQgb25LZXlVcChldmVudDogS2V5Ym9hcmRFdmVudCkge31cbiAgICBwcm90ZWN0ZWQgb25Ub3VjaFN0YXJ0KGV2ZW50KSB7fVxuICAgIHByb3RlY3RlZCBvblRvdWNoRW5kKGV2ZW50KSB7fVxuICAgIHByb3RlY3RlZCBvbkZvY3VzKCkge31cbiAgICBwcm90ZWN0ZWQgb25CbHVyKCkge31cbiAgICBcbiAgICBzdGF0aWMgbW9iaWxlOmJvb2xlYW49QWlDb250cm9sLmluaXQoKTtcbiAgICBzdGF0aWMgaW5pdCgpOmJvb2xlYW57XG4gICAgICAgIHZhciB1c2VyQWdlbnQgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xuICAgICAgICB2YXIgbW9iaWxlID0gISF1c2VyQWdlbnQgJiYgL2lQYWR8aVBob25lfEFuZHJvaWQvLnRlc3QodXNlckFnZW50KTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zZXRBdHRyaWJ1dGUobW9iaWxlPydtb2JpbGUnOidkZXNrdG9wJywnJyk7XG4gICAgICAgIHJldHVybiBtb2JpbGU7XG4gICAgfVxuICAgIHN0YXRpYyBtZXRhKG1ldGE6YW55LG9wdGlvbnM/OmFueSk6YW55e1xuICAgICAgICBpZighb3B0aW9ucykgb3B0aW9ucz17fTsgXG4gICAgICAgIGlmKCFtZXRhLmlucHV0cykgbWV0YS5pbnB1dHM9W107XG4gICAgICAgIGlmKCFtZXRhLm91dHB1dHMpIG1ldGEub3V0cHV0cz1bXTtcbiAgICAgICAgaWYoIW1ldGEuaG9zdCkgbWV0YS5ob3N0PXt9O1xuIC8vICAgICAgIGlmKCFtZXRhLnByb3ZpZGVycykgbWV0YS5wcm92aWRlcnM9W107XG4gXG4gICAgICAgIG1ldGEuaW5wdXRzLnB1c2goJ3Zpc2libGUnKTtcbiAgICAgICAgbWV0YS5ob3N0WydbY2xhc3MuaGlkZV0nXT0nIXZpc2libGUnO1xuICAgICAgICBpZighb3B0aW9ucy5pZ25vcmVEaXNhYmxlZCl7XG4gICAgICAgICAgICBtZXRhLmlucHV0cy5wdXNoKCdkaXNhYmxlZCcpO1xuICAgICAgICAgICAgbWV0YS5ob3N0WydbY2xhc3MuZGlzYWJsZWRdJ109J2Rpc2FibGVkJztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYoIW9wdGlvbnMuaWdub3JlRm9jdXMpe1xuICAgICAgICAgICAgbWV0YS5ob3N0WydbY2xhc3MuZm9jdXNdJ109J2lzRm9jdXMnO1xuICAgICAgICAgICAgbWV0YS5ob3N0WycoZm9jdXMpJ109J2ZvY3VzKCknO1xuICAgICAgICAgICAgbWV0YS5ob3N0WycoYmx1ciknXT0nYmx1cigpJztcbiAgICAgICAgICAgIG1ldGEuaG9zdFsnW3RhYmluZGV4XSddPSdnZXRUYWJJbmRleCgpJztcbiAgICAgICAgfSAgICAgICAgXG5cblxuICAgICAgICBpZighb3B0aW9ucy5pZ25vcmVIb3Zlcil7XG4gICAgICAgICAgICBtZXRhLmhvc3RbJ1tjbGFzcy5ob3Zlcl0nXT0naXNIb3Zlcic7XG4gICAgICAgICAgICBtZXRhLmhvc3RbJyhtb3VzZW92ZXIpJ109J21vdXNlT3ZlcigpJztcbiAgICAgICAgICAgIG1ldGEuaG9zdFsnKG1vdXNlb3V0KSddPSdtb3VzZU91dCgpJztcbiAgICAgICAgfSAgICAgICAgXG5cbiAgICAgICAgaWYoIW9wdGlvbnMuaWdub3JlQWN0aXZlKXtcbiAgICAgICAgICAgIG1ldGEub3V0cHV0cy5wdXNoKCdfY2xpY2snKTtcbiAgICAgICAgICAgIG1ldGEuaG9zdFsnW2NsYXNzLmFjdGl2ZV0nXT0naXNBY3RpdmUnO1xuICAgICAgICAgICAgbWV0YS5ob3N0WycobW91c2V1cCknXT0nbW91c2VVcCgkZXZlbnQpJztcbiAgICAgICAgICAgIG1ldGEuaG9zdFsnKG1vdXNlZG93biknXT0nbW91c2VEb3duKCRldmVudCknO1xuICAgICAgICAgICAgbWV0YS5ob3N0WycodG91Y2hzdGFydCknXT0ndG91Y2hTdGFydCgkZXZlbnQpJztcbiAgICAgICAgICAgIG1ldGEuaG9zdFsnKHRvdWNoZW5kKSddPSd0b3VjaEVuZCgkZXZlbnQpJztcbiAgICAgICAgICAgIG1ldGEuaG9zdFsnKGtleXVwKSddPSdrZXlVcCgkZXZlbnQpJztcbiAgICAgICAgICAgIG1ldGEuaG9zdFsnKGtleWRvd24pJ109J2tleURvd24oJGV2ZW50KSc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1ldGE7XG4gICAgfVxuICBcbiAgICBjb25zdHJ1Y3RvcihlbGU6IEVsZW1lbnRSZWYpIHtcbiAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50ID0gZWxlLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FpLWNvbnRyb2wnLCcnKTsgXG5cbiAgICAgICAgdmFyIHRhYmluZGV4ID0gdGhpcy5uYXRpdmVFbGVtZW50LmdldEF0dHJpYnV0ZSgndGFiaW5kZXgnKTtcbiAgICAgICAgaWYodGFiaW5kZXgpIHRoaXMudGFiaW5kZXggPSBOdW1iZXJXcmFwcGVyLnBhcnNlSW50KHRhYmluZGV4LCAxMCk7XG4gICAgfSAgXG5cbiAgICBpbmhpZXJpdEF0dHJpYnV0ZXNUb0NoaWxkcyhpKXtcbiAgICAgICAgdmFyIGF0dHJpYnV0ZXM9WydwcmltYXJ5JywncmVkJywnZ3JlZW4nLCd5ZWxsb3cnLCdsYXJnZScsJ3NtYWxsJ107XG4gICAgICAgIHRoaXMuaW5oaWVyaXRBdHRyaWJ1dGVzKGF0dHJpYnV0ZXMsaSk7XG4gICAgfVxuXG4gICAgaW5oaWVyaXRBdHRyaWJ1dGVzKGF0dHJpYnV0ZXMsaSl7XG4gICAgICAgIHZhciBlbGU9dGhpcy5uYXRpdmVFbGVtZW50O1xuICAgICAgICBhdHRyaWJ1dGVzLmZvckVhY2goYXR0ciA9PiB7XG4gICAgICAgICAgICBpZihlbGUuZ2V0QXR0cmlidXRlKGF0dHIpICE9IG51bGwpXG4gICAgICAgICAgICAgICAgZWxlLmNoaWxkTm9kZXNbaV0uc2V0QXR0cmlidXRlKGF0dHIsJycpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcyhfKSB7XG4gICAgICAgIC8vYWxlcnQodGhpcy5zcGlubmluZyk7XG4gICAgfVxuXG4gICAgZW5hYmxlTWF0ZXJpYWwoKXtcbiAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNldEF0dHJpYnV0ZSgnYWktbWF0ZXJpYWwnLCcnKTtcbiAgICB9XG5cbiAgICBnZXRUYWJJbmRleCgpe1xuICAgICAgICBpZih0aGlzLmRpc2FibGVkIHx8ICF0aGlzLnZpc2libGUpIHJldHVybiAtMTtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFiaW5kZXg7XG4gICAgfVxuXG4gICAgaXNEaXNhYmxlZCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5kaXNhYmxlZD8gXCJkaXNhYmxlZFwiIDogbnVsbDtcbiAgICB9XG5cbiAgICBmaXJlQ2xpY2tFdmVudCgpe1xuICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWQgJiYgIXRoaXMuaXNGaXJlKSB7XG4gICAgICAgICAgICB0cnl7XG4gICAgICAgICAgICAgICAgdGhpcy5vbkNsaWNrKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0ZpcmU9dHJ1ZTtcbiAgICAgICAgICAgICAgICBPYnNlcnZhYmxlV3JhcHBlci5jYWxsRW1pdCh0aGlzLl9jbGljaywgbnVsbCk7XG4gICAgICAgICAgICB9ZmluYWxseXtcbiAgICAgICAgICAgICAgICB0aGlzLmlzRmlyZT1mYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1vdXNlT3ZlcigpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZygnbW91c2VvdmVyJyk7XG4gICAgICAgIC8vbmVlZCBwcmV2ZW50IGlvcy9hbmRvcmlkIHNlbmQgc3RyYW5nZSBtb3VzZW92ZXIgZXZlbnRcbiAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkICYmICFBaUNvbnRyb2wubW9iaWxlKSB7XG4gICAgICAgICAgICB0aGlzLm9uTW91c2VPdmVyKCk7XG4gICAgICAgICAgICB0aGlzLmlzSG92ZXIgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIG1vdXNlT3V0KCkge1xuICAgICAgICB0aGlzLmlzSG92ZXIgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWQgJiYgIUFpQ29udHJvbC5tb2JpbGUpIFxuICAgICAgICAgICAgdGhpcy5vbk1vdXNlT3V0KCk7XG4gICAgfVxuICAgIFxuICAgIG1vdXNlRG93bihldmVudDogTW91c2VFdmVudCkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKCdtb3VzZWRvd24nKTtcbiAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkICYmIGV2ZW50LmJ1dHRvbj09MCkge1xuICAgICAgICAgICAgdGhpcy5vbk1vdXNlRG93bihldmVudCk7XG4gICAgICAgICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBtb3VzZVVwKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ21vdXNldXAnKTtcblxuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGlmICghdGhpcy5kaXNhYmxlZCAmJiBldmVudC5idXR0b249PTApIHtcbiAgICAgICAgICAgIHRoaXMub25Nb3VzZVVwKGV2ZW50KTtcbiAgICAgICAgICAgIHRoaXMuZmlyZUNsaWNrRXZlbnQoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBcbiAgICBrZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIC8vZml4IGlvcyBibHVldG9vdGgga2V5Y29kZSBidWdcbiAgICAgICAgdGhpcy5rZXlDb2RlPWV2ZW50LmtleUNvZGU7XG4gICAgICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5vbktleURvd24oZXZlbnQpO1xuICAgICAgICAgICAgaWYoZXZlbnQua2V5Q29kZSA9PSBLZXlDb2Rlcy5TUEFDRSl7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgLy9wcmV2ZW50IHByZXNzIHNwYWNlIGp1bXAgdG8gZW5kXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBrZXlVcChldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMub25LZXlVcChldmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5rZXlDb2RlID09IEtleUNvZGVzLlNQQUNFKSBcbiAgICAgICAgICAgIHRoaXMuZmlyZUNsaWNrRXZlbnQoKTtcbiAgICB9XG4gICAgXG4gICAgdG91Y2hTdGFydChldmVudCkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKCd0b3VjaHN0YXJ0Jyk7XG4gICAgICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5vblRvdWNoU3RhcnQoZXZlbnQpO1xuICAgICAgICAgICAgaWYoZXZlbnQudG91Y2hlcy5sZW5ndGggPT0gMSlcbiAgICAgICAgICAgICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICB0b3VjaEVuZChldmVudCkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKCd0b3VjaGVuZCcpO1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWQpe1xuICAgICAgICAgICAgdGhpcy5vblRvdWNoRW5kKGV2ZW50KTtcbiAgICAgICAgICAgIHRoaXMuZmlyZUNsaWNrRXZlbnQoKTtcbiAgICAgICAgfVxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIGZvY3VzKCkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKCdmb2N1cycpO1xuICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWQpe1xuICAgICAgICAgICAgdGhpcy5vbkZvY3VzKCk7XG4gICAgICAgICAgICB0aGlzLmlzRm9jdXMgPSAhdGhpcy5pc0FjdGl2ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBibHVyKCkge1xuICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWQpXG4gICAgICAgICAgICB0aGlzLm9uQmx1cigpO1xuICAgICAgICB0aGlzLmlzRm9jdXMgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBcbn0gXG5cblxuLyogIFxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xuICAgIGFsZXJ0KCdoZWxsbycpO1xuICAgIC8vZGVidWdnZXJcbiAgICAvL2RvY3VtZW50LmJvZHkuc2V0QXR0cmlidXRlKCdtb2JpbGUnLCdhJyk7XG59KTtcbiovIFxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
