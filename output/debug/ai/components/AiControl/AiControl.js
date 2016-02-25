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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlDb250cm9sL0FpQ29udHJvbC50cyJdLCJuYW1lcyI6WyJLZXlDb2RlcyIsIktleUNvZGVzLmNvbnN0cnVjdG9yIiwiQWlDb250cm9sIiwiQWlDb250cm9sLmNvbnN0cnVjdG9yIiwiQWlDb250cm9sLm9uQ2xpY2siLCJBaUNvbnRyb2wub25Nb3VzZU92ZXIiLCJBaUNvbnRyb2wub25Nb3VzZU91dCIsIkFpQ29udHJvbC5vbk1vdXNlRG93biIsIkFpQ29udHJvbC5vbk1vdXNlVXAiLCJBaUNvbnRyb2wub25LZXlEb3duIiwiQWlDb250cm9sLm9uS2V5VXAiLCJBaUNvbnRyb2wub25Ub3VjaFN0YXJ0IiwiQWlDb250cm9sLm9uVG91Y2hFbmQiLCJBaUNvbnRyb2wub25Gb2N1cyIsIkFpQ29udHJvbC5vbkJsdXIiLCJBaUNvbnRyb2wuaW5pdCIsIkFpQ29udHJvbC5tZXRhIiwiQWlDb250cm9sLm5nT25DaGFuZ2VzIiwiQWlDb250cm9sLmVuYWJsZU1hdGVyaWFsIiwiQWlDb250cm9sLmdldFRhYkluZGV4IiwiQWlDb250cm9sLmlzRGlzYWJsZWQiLCJBaUNvbnRyb2wuZmlyZUNsaWNrRXZlbnQiLCJBaUNvbnRyb2wubW91c2VPdmVyIiwiQWlDb250cm9sLm1vdXNlT3V0IiwiQWlDb250cm9sLm1vdXNlRG93biIsIkFpQ29udHJvbC5tb3VzZVVwIiwiQWlDb250cm9sLmtleURvd24iLCJBaUNvbnRyb2wua2V5VXAiLCJBaUNvbnRyb2wudG91Y2hTdGFydCIsIkFpQ29udHJvbC50b3VjaEVuZCIsIkFpQ29udHJvbC5mb2N1cyIsIkFpQ29udHJvbC5ibHVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBU0Esa0ZBQWtGO1lBQ2xGLGtDQUFrQztZQUVsQywrQ0FBK0M7WUFDL0Msc0NBQXNDO1lBQ3RDLG1FQUFtRTtZQUNuRSwwQ0FBMEM7WUFFdEMsd0JBQXdCO1lBQ3hCLFNBQVM7WUFDVCxrREFBa0Q7WUFDbEQsSUFB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LENBM01BLEFBMk1DQSxJQUFBO1lBM01ELGlDQTJNQyxDQUFBOzs7O0FBR0Q7Ozs7OztFQU1FIiwiZmlsZSI6ImNvbXBvbmVudHMvQWlDb250cm9sL0FpQ29udHJvbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RWxlbWVudFJlZixBdHRyaWJ1dGUsT25DaGFuZ2VzfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7VGltZXJXcmFwcGVyfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2FzeW5jJztcbi8vaW1wb3J0IHtpc1ByZXNlbnR9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZyc7XG5pbXBvcnQge0tleWJvYXJkRXZlbnQsTW91c2VFdmVudH0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9icm93c2VyJztcbmltcG9ydCB7TnVtYmVyV3JhcHBlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9sYW5nJztcbmltcG9ydCB7Q09OU1R9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZyc7XG5pbXBvcnQge09ic2VydmFibGVXcmFwcGVyLEV2ZW50RW1pdHRlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9hc3luYyc7XG5pbXBvcnQge0RPTX0gZnJvbSAnYW5ndWxhcjIvc3JjL3BsYXRmb3JtL2RvbS9kb21fYWRhcHRlcic7XG5cbi8vaW1wb3J0IHtCcm93c2VyRG9tQWRhcHRlcn0gZnJvbSBcImFuZ3VsYXIyL3NyYy9wbGF0Zm9ybS9icm93c2VyL2Jyb3dzZXJfYWRhcHRlclwiO1xuLy9Ccm93c2VyRG9tQWRhcHRlci5tYWtlQ3VycmVudCgpO1xuXG4vL2ltcG9ydCAqIGFzIHV0aWxzIGZyb20gJ2FpL2NvbXBvbmVudHMvdXRpbHMnO1xuLy9pbXBvcnQge1N0cmluZ0NoYWlufSBmcm9tICcuL3V0aWxzJztcbi8vaW1wb3J0IHtSZWZsZWN0b3J9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL3JlZmxlY3Rpb24vcmVmbGVjdG9yJztcbi8vaW1wb3J0IHtOZ0NsYXNzfSBmcm9tICdhbmd1bGFyMi9jb21tb24nO1xuXG4gICAgLy9kaXJlY3RpdmVzOiBbTmdDbGFzc10sXG4gICAgLy9ob3N0OiB7XG4gICAgLy8gICdbYXR0ci5kaXNhYmxlZF0nOiAnZGlzYWJsZWQ/XCJkaXNhYmxlZFwiOm51bGwnLFxuICAgIC8vfSxcbkBDT05TVCgpXG5leHBvcnQgY2xhc3MgS2V5Q29kZXMge1xuICBAQ09OU1QoKSBzdGF0aWMgRVNDQVBFID0gMjc7XG4gIEBDT05TVCgpIHN0YXRpYyBFTlRFUiA9IDEzO1xuICBAQ09OU1QoKSBzdGF0aWMgU1BBQ0UgPSAzMjtcbiAgQENPTlNUKCkgc3RhdGljIExFRlQgPSAzNztcbiAgQENPTlNUKCkgc3RhdGljIFVQID0gMzg7XG4gIEBDT05TVCgpIHN0YXRpYyBSSUdIVCA9IDM5O1xuICBAQ09OU1QoKSBzdGF0aWMgRE9XTiA9IDQwO1xuICBcbn1cblxuZXhwb3J0IGNsYXNzIEFpQ29udHJvbCBpbXBsZW1lbnRzIE9uQ2hhbmdlc3sgXG4gICAgdGFiaW5kZXg6IG51bWJlcj0wO1xuICAgIGRpc2FibGVkOmJvb2xlYW49ZmFsc2U7XG4gICAgaXNGb2N1czogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGlzQWN0aXZlOiBib29sZWFuID0gZmFsc2U7XG4gICAgaXNIb3ZlcjogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGlzRmlyZTpib29sZWFuPWZhbHNlO1xuICAgIGtleUNvZGU6bnVtYmVyPTA7XG4gICAgdmlzaWJsZTogYm9vbGVhbiA9IHRydWU7XG4gICAgXG4gICAgaGludDpzdHJpbmc9Jyc7XG4gICAgaWNvbjpzdHJpbmc9Jyc7XG4gICAgZXJyb3I6c3RyaW5nPScnO1xuXG4gICAgb25jbGljazogRXZlbnRFbWl0dGVyPGFueT49bmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgcHJvdGVjdGVkIG9uQ2xpY2soKXt9XG4gICAgcHJvdGVjdGVkIG9uTW91c2VPdmVyKCkge31cbiAgICBwcm90ZWN0ZWQgb25Nb3VzZU91dCgpIHt9XG4gICAgcHJvdGVjdGVkIG9uTW91c2VEb3duKGV2ZW50OiBNb3VzZUV2ZW50KSB7fVxuICAgIHByb3RlY3RlZCBvbk1vdXNlVXAoZXZlbnQ6IE1vdXNlRXZlbnQpIHt9XG4gICAgcHJvdGVjdGVkIG9uS2V5RG93bihldmVudDogS2V5Ym9hcmRFdmVudCkge31cbiAgICBwcm90ZWN0ZWQgb25LZXlVcChldmVudDogS2V5Ym9hcmRFdmVudCkge31cbiAgICBwcm90ZWN0ZWQgb25Ub3VjaFN0YXJ0KGV2ZW50KSB7fVxuICAgIHByb3RlY3RlZCBvblRvdWNoRW5kKGV2ZW50KSB7fVxuICAgIHByb3RlY3RlZCBvbkZvY3VzKCkge31cbiAgICBwcm90ZWN0ZWQgb25CbHVyKCkge31cbiAgICBcbiAgICBzdGF0aWMgbW9iaWxlOmJvb2xlYW49QWlDb250cm9sLmluaXQoKTtcbiAgICBzdGF0aWMgaW5pdCgpOmJvb2xlYW57XG4gICAgICAgIHZhciB1c2VyQWdlbnQgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xuICAgICAgICB2YXIgbW9iaWxlID0gISF1c2VyQWdlbnQgJiYgL2lQYWR8aVBob25lfEFuZHJvaWQvLnRlc3QodXNlckFnZW50KTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zZXRBdHRyaWJ1dGUobW9iaWxlPydtb2JpbGUnOidkZXNrdG9wJywnJyk7XG4gICAgICAgIHJldHVybiBtb2JpbGU7XG4gICAgfVxuICAgIHN0YXRpYyBtZXRhKG1ldGE6YW55LG9wdGlvbnM/OmFueSk6YW55e1xuICAgICAgICBpZighb3B0aW9ucykgb3B0aW9ucz17fTsgXG4gICAgICAgIGlmKCFtZXRhLmlucHV0cykgbWV0YS5pbnB1dHM9W107XG4gICAgICAgIGlmKCFtZXRhLm91dHB1dHMpIG1ldGEub3V0cHV0cz1bXTtcbiAgICAgICAgaWYoIW1ldGEuaG9zdCkgbWV0YS5ob3N0PXt9O1xuXG4gICAgICAgIG1ldGEuaW5wdXRzLnB1c2goJ3Zpc2libGUnKTtcbiAgICAgICAgbWV0YS5ob3N0WydbY2xhc3MuaGlkZV0nXT0nIXZpc2libGUnO1xuICAgICAgICBpZighb3B0aW9ucy5pZ25vcmVEaXNhYmxlZCl7XG4gICAgICAgICAgICBtZXRhLmlucHV0cy5wdXNoKCdkaXNhYmxlZCcpO1xuICAgICAgICAgICAgbWV0YS5ob3N0WydbY2xhc3MuZGlzYWJsZWRdJ109J2Rpc2FibGVkJztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYoIW9wdGlvbnMuaWdub3JlRm9jdXMpe1xuICAgICAgICAgICAgbWV0YS5ob3N0WydbY2xhc3MuZm9jdXNdJ109J2lzRm9jdXMnO1xuICAgICAgICAgICAgbWV0YS5ob3N0WycoZm9jdXMpJ109J2ZvY3VzKCknO1xuICAgICAgICAgICAgbWV0YS5ob3N0WycoYmx1ciknXT0nYmx1cigpJztcbiAgICAgICAgICAgIG1ldGEuaG9zdFsnW3RhYmluZGV4XSddPSdnZXRUYWJJbmRleCgpJztcbiAgICAgICAgfSAgICAgICAgXG5cblxuICAgICAgICBpZighb3B0aW9ucy5pZ25vcmVIb3Zlcil7XG4gICAgICAgICAgICBtZXRhLmhvc3RbJ1tjbGFzcy5ob3Zlcl0nXT0naXNIb3Zlcic7XG4gICAgICAgICAgICBtZXRhLmhvc3RbJyhtb3VzZW92ZXIpJ109J21vdXNlT3ZlcigpJztcbiAgICAgICAgICAgIG1ldGEuaG9zdFsnKG1vdXNlb3V0KSddPSdtb3VzZU91dCgpJztcbiAgICAgICAgfSAgICAgICAgXG5cbiAgICAgICAgaWYoIW9wdGlvbnMuaWdub3JlQWN0aXZlKXtcbiAgICAgICAgICAgIG1ldGEub3V0cHV0cy5wdXNoKCdvbmNsaWNrJyk7XG4gICAgICAgICAgICBtZXRhLmhvc3RbJ1tjbGFzcy5hY3RpdmVdJ109J2lzQWN0aXZlJztcbiAgICAgICAgICAgIG1ldGEuaG9zdFsnKG1vdXNldXApJ109J21vdXNlVXAoJGV2ZW50KSc7XG4gICAgICAgICAgICBtZXRhLmhvc3RbJyhtb3VzZWRvd24pJ109J21vdXNlRG93bigkZXZlbnQpJztcbiAgICAgICAgICAgIG1ldGEuaG9zdFsnKHRvdWNoc3RhcnQpJ109J3RvdWNoU3RhcnQoJGV2ZW50KSc7XG4gICAgICAgICAgICBtZXRhLmhvc3RbJyh0b3VjaGVuZCknXT0ndG91Y2hFbmQoJGV2ZW50KSc7XG4gICAgICAgICAgICBtZXRhLmhvc3RbJyhrZXl1cCknXT0na2V5VXAoJGV2ZW50KSc7XG4gICAgICAgICAgICBtZXRhLmhvc3RbJyhrZXlkb3duKSddPSdrZXlEb3duKCRldmVudCknO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtZXRhO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBlbGU6IEVsZW1lbnRSZWYpIHtcbiAgICAgICAgdmFyIGVsOmFueSA9IHRoaXMuZWxlLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnYWktY29udHJvbCcsJycpOyBcblxuICAgICAgICB2YXIgdGFiaW5kZXggPSBlbC5nZXRBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XG4gICAgICAgIGlmKHRhYmluZGV4KSB0aGlzLnRhYmluZGV4ID0gTnVtYmVyV3JhcHBlci5wYXJzZUludCh0YWJpbmRleCwgMTApO1xuICAgIH0gIFxuXG4gICAgbmdPbkNoYW5nZXMoXykge1xuICAgICAgICAvL2FsZXJ0KHRoaXMuc3Bpbm5pbmcpO1xuICAgIH1cblxuICAgIGVuYWJsZU1hdGVyaWFsKCl7XG4gICAgICAgIHRoaXMuZWxlLm5hdGl2ZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdhaS1tYXRlcmlhbCcsJycpO1xuICAgIH1cblxuICAgIGdldFRhYkluZGV4KCl7XG4gICAgICAgIGlmKHRoaXMuZGlzYWJsZWQgfHwgIXRoaXMudmlzaWJsZSkgcmV0dXJuIC0xO1xuICAgICAgICByZXR1cm4gdGhpcy50YWJpbmRleDtcbiAgICB9XG5cbiAgICBpc0Rpc2FibGVkKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmRpc2FibGVkPyBcImRpc2FibGVkXCIgOiBudWxsO1xuICAgIH1cblxuICAgIGZpcmVDbGlja0V2ZW50KCl7XG4gICAgICAgIGlmICghdGhpcy5kaXNhYmxlZCAmJiAhdGhpcy5pc0ZpcmUpIHtcbiAgICAgICAgICAgIHRyeXtcbiAgICAgICAgICAgICAgICB0aGlzLm9uQ2xpY2soKTtcbiAgICAgICAgICAgICAgICB0aGlzLmlzRmlyZT10cnVlO1xuICAgICAgICAgICAgICAgIE9ic2VydmFibGVXcmFwcGVyLmNhbGxFbWl0KHRoaXMub25jbGljaywgbnVsbCk7XG4gICAgICAgICAgICB9ZmluYWxseXtcbiAgICAgICAgICAgICAgICB0aGlzLmlzRmlyZT1mYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1vdXNlT3ZlcigpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZygnbW91c2VvdmVyJyk7XG4gICAgICAgIC8vbmVlZCBwcmV2ZW50IGlvcy9hbmRvcmlkIHNlbmQgc3RyYW5nZSBtb3VzZW92ZXIgZXZlbnRcbiAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkICYmICFBaUNvbnRyb2wubW9iaWxlKSB7XG4gICAgICAgICAgICB0aGlzLm9uTW91c2VPdmVyKCk7XG4gICAgICAgICAgICB0aGlzLmlzSG92ZXIgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIG1vdXNlT3V0KCkge1xuICAgICAgICB0aGlzLmlzSG92ZXIgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWQgJiYgIUFpQ29udHJvbC5tb2JpbGUpIFxuICAgICAgICAgICAgdGhpcy5vbk1vdXNlT3V0KCk7XG4gICAgfVxuICAgIFxuICAgIG1vdXNlRG93bihldmVudDogTW91c2VFdmVudCkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKCdtb3VzZWRvd24nKTtcbiAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkICYmIGV2ZW50LmJ1dHRvbj09MCkge1xuICAgICAgICAgICAgdGhpcy5vbk1vdXNlRG93bihldmVudCk7XG4gICAgICAgICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBtb3VzZVVwKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ21vdXNldXAnKTtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWQgJiYgZXZlbnQuYnV0dG9uPT0wKSB7XG4gICAgICAgICAgICB0aGlzLm9uTW91c2VVcChldmVudCk7XG4gICAgICAgICAgICB0aGlzLmZpcmVDbGlja0V2ZW50KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgXG4gICAga2V5RG93bihldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICAvL2ZpeCBpb3MgYmx1ZXRvb3RoIGtleWNvZGUgYnVnXG4gICAgICAgIHRoaXMua2V5Q29kZT1ldmVudC5rZXlDb2RlO1xuICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMub25LZXlEb3duKGV2ZW50KTtcbiAgICAgICAgICAgIGlmKGV2ZW50LmtleUNvZGUgPT0gS2V5Q29kZXMuU1BBQ0Upe1xuICAgICAgICAgICAgICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIC8vcHJldmVudCBwcmVzcyBzcGFjZSBqdW1wIHRvIGVuZFxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAga2V5VXAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICB0aGlzLm9uS2V5VXAoZXZlbnQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMua2V5Q29kZSA9PSBLZXlDb2Rlcy5TUEFDRSkgXG4gICAgICAgICAgICB0aGlzLmZpcmVDbGlja0V2ZW50KCk7XG4gICAgfVxuICAgIFxuICAgIHRvdWNoU3RhcnQoZXZlbnQpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZygndG91Y2hzdGFydCcpO1xuICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMub25Ub3VjaFN0YXJ0KGV2ZW50KTtcbiAgICAgICAgICAgIGlmKGV2ZW50LnRvdWNoZXMubGVuZ3RoID09IDEpXG4gICAgICAgICAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgdG91Y2hFbmQoZXZlbnQpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZygndG91Y2hlbmQnKTtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkKXtcbiAgICAgICAgICAgIHRoaXMub25Ub3VjaEVuZChldmVudCk7XG4gICAgICAgICAgICB0aGlzLmZpcmVDbGlja0V2ZW50KCk7XG4gICAgICAgIH1cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBmb2N1cygpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZygnZm9jdXMnKTtcbiAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkKXtcbiAgICAgICAgICAgIHRoaXMub25Gb2N1cygpO1xuICAgICAgICAgICAgdGhpcy5pc0ZvY3VzID0gIXRoaXMuaXNBY3RpdmU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgYmx1cigpIHtcbiAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkKVxuICAgICAgICAgICAgdGhpcy5vbkJsdXIoKTtcbiAgICAgICAgdGhpcy5pc0ZvY3VzID0gZmFsc2U7XG4gICAgfVxuXG4gICAgXG59IFxuXG5cbi8qICBcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcbiAgICBhbGVydCgnaGVsbG8nKTtcbiAgICAvL2RlYnVnZ2VyXG4gICAgLy9kb2N1bWVudC5ib2R5LnNldEF0dHJpYnV0ZSgnbW9iaWxlJywnYScpO1xufSk7XG4qLyBcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
