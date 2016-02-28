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
                    this.ele = ele;
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
                    this.onclick = new async_1.EventEmitter();
                    var el = this.ele.nativeElement;
                    el.setAttribute('ai-control', '');
                    var tabindex = el.getAttribute('tabindex');
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
                        meta.outputs.push('onclick');
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
                AiControl.prototype.ngOnChanges = function (_) {
                    //alert(this.spinning);
                };
                AiControl.prototype.enableMaterial = function () {
                    this.ele.nativeElement.setAttribute('ai-material', '');
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
                            async_1.ObservableWrapper.callEmit(this.onclick, null);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlDb250cm9sL0FpQ29udHJvbC50cyJdLCJuYW1lcyI6WyJLZXlDb2RlcyIsIktleUNvZGVzLmNvbnN0cnVjdG9yIiwiQWlDb250cm9sIiwiQWlDb250cm9sLmNvbnN0cnVjdG9yIiwiQWlDb250cm9sLm9uQ2xpY2siLCJBaUNvbnRyb2wub25Nb3VzZU92ZXIiLCJBaUNvbnRyb2wub25Nb3VzZU91dCIsIkFpQ29udHJvbC5vbk1vdXNlRG93biIsIkFpQ29udHJvbC5vbk1vdXNlVXAiLCJBaUNvbnRyb2wub25LZXlEb3duIiwiQWlDb250cm9sLm9uS2V5VXAiLCJBaUNvbnRyb2wub25Ub3VjaFN0YXJ0IiwiQWlDb250cm9sLm9uVG91Y2hFbmQiLCJBaUNvbnRyb2wub25Gb2N1cyIsIkFpQ29udHJvbC5vbkJsdXIiLCJBaUNvbnRyb2wuaW5pdCIsIkFpQ29udHJvbC5tZXRhIiwiQWlDb250cm9sLm5nT25DaGFuZ2VzIiwiQWlDb250cm9sLmVuYWJsZU1hdGVyaWFsIiwiQWlDb250cm9sLmdldFRhYkluZGV4IiwiQWlDb250cm9sLmlzRGlzYWJsZWQiLCJBaUNvbnRyb2wuZmlyZUNsaWNrRXZlbnQiLCJBaUNvbnRyb2wubW91c2VPdmVyIiwiQWlDb250cm9sLm1vdXNlT3V0IiwiQWlDb250cm9sLm1vdXNlRG93biIsIkFpQ29udHJvbC5tb3VzZVVwIiwiQWlDb250cm9sLmtleURvd24iLCJBaUNvbnRyb2wua2V5VXAiLCJBaUNvbnRyb2wudG91Y2hTdGFydCIsIkFpQ29udHJvbC50b3VjaEVuZCIsIkFpQ29udHJvbC5mb2N1cyIsIkFpQ29udHJvbC5ibHVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBU0Esa0ZBQWtGO1lBQ2xGLGtDQUFrQztZQUVsQywrQ0FBK0M7WUFDL0Msc0NBQXNDO1lBQ3RDLG1FQUFtRTtZQUNuRSwwQ0FBMEM7WUFFdEMsd0JBQXdCO1lBQ3hCLFNBQVM7WUFDVCxrREFBa0Q7WUFDbEQsSUFB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LENBM01BLEFBMk1DQSxJQUFBO1lBM01ELGlDQTJNQyxDQUFBOzs7O0FBR0Q7Ozs7OztFQU1FIiwiZmlsZSI6ImNvbXBvbmVudHMvQWlDb250cm9sL0FpQ29udHJvbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RWxlbWVudFJlZixBdHRyaWJ1dGUsT25DaGFuZ2VzfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7VGltZXJXcmFwcGVyfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2FzeW5jJztcbi8vaW1wb3J0IHtpc1ByZXNlbnR9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZyc7XG5pbXBvcnQge0tleWJvYXJkRXZlbnQsTW91c2VFdmVudH0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9icm93c2VyJztcbmltcG9ydCB7TnVtYmVyV3JhcHBlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9sYW5nJztcbmltcG9ydCB7Q09OU1R9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZyc7XG5pbXBvcnQge09ic2VydmFibGVXcmFwcGVyLEV2ZW50RW1pdHRlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9hc3luYyc7XG5pbXBvcnQge0RPTX0gZnJvbSAnYW5ndWxhcjIvc3JjL3BsYXRmb3JtL2RvbS9kb21fYWRhcHRlcic7XG5cbi8vaW1wb3J0IHtCcm93c2VyRG9tQWRhcHRlcn0gZnJvbSBcImFuZ3VsYXIyL3NyYy9wbGF0Zm9ybS9icm93c2VyL2Jyb3dzZXJfYWRhcHRlclwiO1xuLy9Ccm93c2VyRG9tQWRhcHRlci5tYWtlQ3VycmVudCgpO1xuXG4vL2ltcG9ydCAqIGFzIHV0aWxzIGZyb20gJ2FpL2NvbXBvbmVudHMvdXRpbHMnO1xuLy9pbXBvcnQge1N0cmluZ0NoYWlufSBmcm9tICcuL3V0aWxzJztcbi8vaW1wb3J0IHtSZWZsZWN0b3J9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL3JlZmxlY3Rpb24vcmVmbGVjdG9yJztcbi8vaW1wb3J0IHtOZ0NsYXNzfSBmcm9tICdhbmd1bGFyMi9jb21tb24nO1xuXG4gICAgLy9kaXJlY3RpdmVzOiBbTmdDbGFzc10sXG4gICAgLy9ob3N0OiB7XG4gICAgLy8gICdbYXR0ci5kaXNhYmxlZF0nOiAnZGlzYWJsZWQ/XCJkaXNhYmxlZFwiOm51bGwnLFxuICAgIC8vfSxcbkBDT05TVCgpXG5leHBvcnQgY2xhc3MgS2V5Q29kZXMge1xuICBAQ09OU1QoKSBzdGF0aWMgRVNDQVBFID0gMjc7XG4gIEBDT05TVCgpIHN0YXRpYyBFTlRFUiA9IDEzO1xuICBAQ09OU1QoKSBzdGF0aWMgU1BBQ0UgPSAzMjtcbiAgQENPTlNUKCkgc3RhdGljIExFRlQgPSAzNztcbiAgQENPTlNUKCkgc3RhdGljIFVQID0gMzg7XG4gIEBDT05TVCgpIHN0YXRpYyBSSUdIVCA9IDM5O1xuICBAQ09OU1QoKSBzdGF0aWMgRE9XTiA9IDQwO1xuICAgXG59XG5cbmV4cG9ydCBjbGFzcyBBaUNvbnRyb2wgaW1wbGVtZW50cyBPbkNoYW5nZXN7IFxuICAgIHRhYmluZGV4OiBudW1iZXI9MDtcbiAgICBkaXNhYmxlZDpib29sZWFuPWZhbHNlO1xuICAgIGlzRm9jdXM6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBpc0FjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGlzSG92ZXI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBpc0ZpcmU6Ym9vbGVhbj1mYWxzZTtcbiAgICBrZXlDb2RlOm51bWJlcj0wO1xuICAgIHZpc2libGU6IGJvb2xlYW4gPSB0cnVlO1xuICAgIFxuICAgIGhpbnQ6c3RyaW5nPScnO1xuICAgIGljb246c3RyaW5nPScnO1xuICAgIGVycm9yOnN0cmluZz0nJztcblxuICAgIG9uY2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+PW5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIHByb3RlY3RlZCBvbkNsaWNrKCl7fVxuICAgIHByb3RlY3RlZCBvbk1vdXNlT3ZlcigpIHt9XG4gICAgcHJvdGVjdGVkIG9uTW91c2VPdXQoKSB7fVxuICAgIHByb3RlY3RlZCBvbk1vdXNlRG93bihldmVudDogTW91c2VFdmVudCkge31cbiAgICBwcm90ZWN0ZWQgb25Nb3VzZVVwKGV2ZW50OiBNb3VzZUV2ZW50KSB7fVxuICAgIHByb3RlY3RlZCBvbktleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHt9XG4gICAgcHJvdGVjdGVkIG9uS2V5VXAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHt9XG4gICAgcHJvdGVjdGVkIG9uVG91Y2hTdGFydChldmVudCkge31cbiAgICBwcm90ZWN0ZWQgb25Ub3VjaEVuZChldmVudCkge31cbiAgICBwcm90ZWN0ZWQgb25Gb2N1cygpIHt9XG4gICAgcHJvdGVjdGVkIG9uQmx1cigpIHt9XG4gICAgXG4gICAgc3RhdGljIG1vYmlsZTpib29sZWFuPUFpQ29udHJvbC5pbml0KCk7XG4gICAgc3RhdGljIGluaXQoKTpib29sZWFue1xuICAgICAgICB2YXIgdXNlckFnZW50ID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgICAgICAgdmFyIG1vYmlsZSA9ICEhdXNlckFnZW50ICYmIC9pUGFkfGlQaG9uZXxBbmRyb2lkLy50ZXN0KHVzZXJBZ2VudCk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc2V0QXR0cmlidXRlKG1vYmlsZT8nbW9iaWxlJzonZGVza3RvcCcsJycpO1xuICAgICAgICByZXR1cm4gbW9iaWxlO1xuICAgIH1cbiAgICBzdGF0aWMgbWV0YShtZXRhOmFueSxvcHRpb25zPzphbnkpOmFueXtcbiAgICAgICAgaWYoIW9wdGlvbnMpIG9wdGlvbnM9e307IFxuICAgICAgICBpZighbWV0YS5pbnB1dHMpIG1ldGEuaW5wdXRzPVtdO1xuICAgICAgICBpZighbWV0YS5vdXRwdXRzKSBtZXRhLm91dHB1dHM9W107XG4gICAgICAgIGlmKCFtZXRhLmhvc3QpIG1ldGEuaG9zdD17fTtcblxuICAgICAgICBtZXRhLmlucHV0cy5wdXNoKCd2aXNpYmxlJyk7XG4gICAgICAgIG1ldGEuaG9zdFsnW2NsYXNzLmhpZGVdJ109JyF2aXNpYmxlJztcbiAgICAgICAgaWYoIW9wdGlvbnMuaWdub3JlRGlzYWJsZWQpe1xuICAgICAgICAgICAgbWV0YS5pbnB1dHMucHVzaCgnZGlzYWJsZWQnKTtcbiAgICAgICAgICAgIG1ldGEuaG9zdFsnW2NsYXNzLmRpc2FibGVkXSddPSdkaXNhYmxlZCc7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmKCFvcHRpb25zLmlnbm9yZUZvY3VzKXtcbiAgICAgICAgICAgIG1ldGEuaG9zdFsnW2NsYXNzLmZvY3VzXSddPSdpc0ZvY3VzJztcbiAgICAgICAgICAgIG1ldGEuaG9zdFsnKGZvY3VzKSddPSdmb2N1cygpJztcbiAgICAgICAgICAgIG1ldGEuaG9zdFsnKGJsdXIpJ109J2JsdXIoKSc7XG4gICAgICAgICAgICBtZXRhLmhvc3RbJ1t0YWJpbmRleF0nXT0nZ2V0VGFiSW5kZXgoKSc7XG4gICAgICAgIH0gICAgICAgIFxuXG5cbiAgICAgICAgaWYoIW9wdGlvbnMuaWdub3JlSG92ZXIpe1xuICAgICAgICAgICAgbWV0YS5ob3N0WydbY2xhc3MuaG92ZXJdJ109J2lzSG92ZXInO1xuICAgICAgICAgICAgbWV0YS5ob3N0WycobW91c2VvdmVyKSddPSdtb3VzZU92ZXIoKSc7XG4gICAgICAgICAgICBtZXRhLmhvc3RbJyhtb3VzZW91dCknXT0nbW91c2VPdXQoKSc7XG4gICAgICAgIH0gICAgICAgIFxuXG4gICAgICAgIGlmKCFvcHRpb25zLmlnbm9yZUFjdGl2ZSl7XG4gICAgICAgICAgICBtZXRhLm91dHB1dHMucHVzaCgnb25jbGljaycpO1xuICAgICAgICAgICAgbWV0YS5ob3N0WydbY2xhc3MuYWN0aXZlXSddPSdpc0FjdGl2ZSc7XG4gICAgICAgICAgICBtZXRhLmhvc3RbJyhtb3VzZXVwKSddPSdtb3VzZVVwKCRldmVudCknO1xuICAgICAgICAgICAgbWV0YS5ob3N0WycobW91c2Vkb3duKSddPSdtb3VzZURvd24oJGV2ZW50KSc7XG4gICAgICAgICAgICBtZXRhLmhvc3RbJyh0b3VjaHN0YXJ0KSddPSd0b3VjaFN0YXJ0KCRldmVudCknO1xuICAgICAgICAgICAgbWV0YS5ob3N0WycodG91Y2hlbmQpJ109J3RvdWNoRW5kKCRldmVudCknO1xuICAgICAgICAgICAgbWV0YS5ob3N0Wycoa2V5dXApJ109J2tleVVwKCRldmVudCknO1xuICAgICAgICAgICAgbWV0YS5ob3N0Wycoa2V5ZG93biknXT0na2V5RG93bigkZXZlbnQpJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWV0YTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgZWxlOiBFbGVtZW50UmVmKSB7XG4gICAgICAgIHZhciBlbDphbnkgPSB0aGlzLmVsZS5uYXRpdmVFbGVtZW50O1xuICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2FpLWNvbnRyb2wnLCcnKTsgXG5cbiAgICAgICAgdmFyIHRhYmluZGV4ID0gZWwuZ2V0QXR0cmlidXRlKCd0YWJpbmRleCcpO1xuICAgICAgICBpZih0YWJpbmRleCkgdGhpcy50YWJpbmRleCA9IE51bWJlcldyYXBwZXIucGFyc2VJbnQodGFiaW5kZXgsIDEwKTtcbiAgICB9ICBcblxuICAgIG5nT25DaGFuZ2VzKF8pIHtcbiAgICAgICAgLy9hbGVydCh0aGlzLnNwaW5uaW5nKTtcbiAgICB9XG5cbiAgICBlbmFibGVNYXRlcmlhbCgpe1xuICAgICAgICB0aGlzLmVsZS5uYXRpdmVFbGVtZW50LnNldEF0dHJpYnV0ZSgnYWktbWF0ZXJpYWwnLCcnKTtcbiAgICB9XG5cbiAgICBnZXRUYWJJbmRleCgpe1xuICAgICAgICBpZih0aGlzLmRpc2FibGVkIHx8ICF0aGlzLnZpc2libGUpIHJldHVybiAtMTtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFiaW5kZXg7XG4gICAgfVxuXG4gICAgaXNEaXNhYmxlZCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5kaXNhYmxlZD8gXCJkaXNhYmxlZFwiIDogbnVsbDtcbiAgICB9XG5cbiAgICBmaXJlQ2xpY2tFdmVudCgpe1xuICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWQgJiYgIXRoaXMuaXNGaXJlKSB7XG4gICAgICAgICAgICB0cnl7XG4gICAgICAgICAgICAgICAgdGhpcy5vbkNsaWNrKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0ZpcmU9dHJ1ZTtcbiAgICAgICAgICAgICAgICBPYnNlcnZhYmxlV3JhcHBlci5jYWxsRW1pdCh0aGlzLm9uY2xpY2ssIG51bGwpO1xuICAgICAgICAgICAgfWZpbmFsbHl7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0ZpcmU9ZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtb3VzZU92ZXIoKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ21vdXNlb3ZlcicpO1xuICAgICAgICAvL25lZWQgcHJldmVudCBpb3MvYW5kb3JpZCBzZW5kIHN0cmFuZ2UgbW91c2VvdmVyIGV2ZW50XG4gICAgICAgIGlmICghdGhpcy5kaXNhYmxlZCAmJiAhQWlDb250cm9sLm1vYmlsZSkge1xuICAgICAgICAgICAgdGhpcy5vbk1vdXNlT3ZlcigpO1xuICAgICAgICAgICAgdGhpcy5pc0hvdmVyID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBtb3VzZU91dCgpIHtcbiAgICAgICAgdGhpcy5pc0hvdmVyID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkICYmICFBaUNvbnRyb2wubW9iaWxlKSBcbiAgICAgICAgICAgIHRoaXMub25Nb3VzZU91dCgpO1xuICAgIH1cbiAgICBcbiAgICBtb3VzZURvd24oZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZygnbW91c2Vkb3duJyk7XG4gICAgICAgIGlmICghdGhpcy5kaXNhYmxlZCAmJiBldmVudC5idXR0b249PTApIHtcbiAgICAgICAgICAgIHRoaXMub25Nb3VzZURvd24oZXZlbnQpO1xuICAgICAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgbW91c2VVcChldmVudDogTW91c2VFdmVudCkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKCdtb3VzZXVwJyk7XG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkICYmIGV2ZW50LmJ1dHRvbj09MCkge1xuICAgICAgICAgICAgdGhpcy5vbk1vdXNlVXAoZXZlbnQpO1xuICAgICAgICAgICAgdGhpcy5maXJlQ2xpY2tFdmVudCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIFxuICAgIGtleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgLy9maXggaW9zIGJsdWV0b290aCBrZXljb2RlIGJ1Z1xuICAgICAgICB0aGlzLmtleUNvZGU9ZXZlbnQua2V5Q29kZTtcbiAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICB0aGlzLm9uS2V5RG93bihldmVudCk7XG4gICAgICAgICAgICBpZihldmVudC5rZXlDb2RlID09IEtleUNvZGVzLlNQQUNFKXtcbiAgICAgICAgICAgICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAvL3ByZXZlbnQgcHJlc3Mgc3BhY2UganVtcCB0byBlbmRcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGtleVVwKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5vbktleVVwKGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLmtleUNvZGUgPT0gS2V5Q29kZXMuU1BBQ0UpIFxuICAgICAgICAgICAgdGhpcy5maXJlQ2xpY2tFdmVudCgpO1xuICAgIH1cbiAgICBcbiAgICB0b3VjaFN0YXJ0KGV2ZW50KSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ3RvdWNoc3RhcnQnKTtcbiAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICB0aGlzLm9uVG91Y2hTdGFydChldmVudCk7XG4gICAgICAgICAgICBpZihldmVudC50b3VjaGVzLmxlbmd0aCA9PSAxKVxuICAgICAgICAgICAgICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHRvdWNoRW5kKGV2ZW50KSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ3RvdWNoZW5kJyk7XG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgIGlmICghdGhpcy5kaXNhYmxlZCl7XG4gICAgICAgICAgICB0aGlzLm9uVG91Y2hFbmQoZXZlbnQpO1xuICAgICAgICAgICAgdGhpcy5maXJlQ2xpY2tFdmVudCgpO1xuICAgICAgICB9XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgZm9jdXMoKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ2ZvY3VzJyk7XG4gICAgICAgIGlmICghdGhpcy5kaXNhYmxlZCl7XG4gICAgICAgICAgICB0aGlzLm9uRm9jdXMoKTtcbiAgICAgICAgICAgIHRoaXMuaXNGb2N1cyA9ICF0aGlzLmlzQWN0aXZlO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGJsdXIoKSB7XG4gICAgICAgIGlmICghdGhpcy5kaXNhYmxlZClcbiAgICAgICAgICAgIHRoaXMub25CbHVyKCk7XG4gICAgICAgIHRoaXMuaXNGb2N1cyA9IGZhbHNlO1xuICAgIH1cblxuICAgIFxufSBcblxuXG4vKiAgXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7XG4gICAgYWxlcnQoJ2hlbGxvJyk7XG4gICAgLy9kZWJ1Z2dlclxuICAgIC8vZG9jdW1lbnQuYm9keS5zZXRBdHRyaWJ1dGUoJ21vYmlsZScsJ2EnKTtcbn0pO1xuKi8gXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
