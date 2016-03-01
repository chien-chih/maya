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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlDb250cm9sL0FpQ29udHJvbC50cyJdLCJuYW1lcyI6WyJLZXlDb2RlcyIsIktleUNvZGVzLmNvbnN0cnVjdG9yIiwiQWlDb250cm9sIiwiQWlDb250cm9sLmNvbnN0cnVjdG9yIiwiQWlDb250cm9sLm9uQ2xpY2siLCJBaUNvbnRyb2wub25Nb3VzZU92ZXIiLCJBaUNvbnRyb2wub25Nb3VzZU91dCIsIkFpQ29udHJvbC5vbk1vdXNlRG93biIsIkFpQ29udHJvbC5vbk1vdXNlVXAiLCJBaUNvbnRyb2wub25LZXlEb3duIiwiQWlDb250cm9sLm9uS2V5VXAiLCJBaUNvbnRyb2wub25Ub3VjaFN0YXJ0IiwiQWlDb250cm9sLm9uVG91Y2hFbmQiLCJBaUNvbnRyb2wub25Gb2N1cyIsIkFpQ29udHJvbC5vbkJsdXIiLCJBaUNvbnRyb2wuaW5pdCIsIkFpQ29udHJvbC5tZXRhIiwiQWlDb250cm9sLm5nT25DaGFuZ2VzIiwiQWlDb250cm9sLmVuYWJsZU1hdGVyaWFsIiwiQWlDb250cm9sLmdldFRhYkluZGV4IiwiQWlDb250cm9sLmlzRGlzYWJsZWQiLCJBaUNvbnRyb2wuZmlyZUNsaWNrRXZlbnQiLCJBaUNvbnRyb2wubW91c2VPdmVyIiwiQWlDb250cm9sLm1vdXNlT3V0IiwiQWlDb250cm9sLm1vdXNlRG93biIsIkFpQ29udHJvbC5tb3VzZVVwIiwiQWlDb250cm9sLmtleURvd24iLCJBaUNvbnRyb2wua2V5VXAiLCJBaUNvbnRyb2wudG91Y2hTdGFydCIsIkFpQ29udHJvbC50b3VjaEVuZCIsIkFpQ29udHJvbC5mb2N1cyIsIkFpQ29udHJvbC5ibHVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBU0Esa0ZBQWtGO1lBQ2xGLGtDQUFrQztZQUVsQywrQ0FBK0M7WUFDL0Msc0NBQXNDO1lBQ3RDLG1FQUFtRTtZQUNuRSwwQ0FBMEM7WUFFdEMsd0JBQXdCO1lBQ3hCLFNBQVM7WUFDVCxrREFBa0Q7WUFDbEQsSUFB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TUNBLElBQUE7WUE3TUQsaUNBNk1DLENBQUE7Ozs7QUFHRDs7Ozs7O0VBTUUiLCJmaWxlIjoiY29tcG9uZW50cy9BaUNvbnRyb2wvQWlDb250cm9sLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtFbGVtZW50UmVmLEF0dHJpYnV0ZSxPbkNoYW5nZXN9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtUaW1lcldyYXBwZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvYXN5bmMnO1xuLy9pbXBvcnQge2lzUHJlc2VudH0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9sYW5nJztcbmltcG9ydCB7S2V5Ym9hcmRFdmVudCxNb3VzZUV2ZW50fSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2Jyb3dzZXInO1xuaW1wb3J0IHtOdW1iZXJXcmFwcGVyfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnO1xuaW1wb3J0IHtDT05TVH0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9sYW5nJztcbmltcG9ydCB7T2JzZXJ2YWJsZVdyYXBwZXIsRXZlbnRFbWl0dGVyfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2FzeW5jJztcbmltcG9ydCB7RE9NfSBmcm9tICdhbmd1bGFyMi9zcmMvcGxhdGZvcm0vZG9tL2RvbV9hZGFwdGVyJztcblxuLy9pbXBvcnQge0Jyb3dzZXJEb21BZGFwdGVyfSBmcm9tIFwiYW5ndWxhcjIvc3JjL3BsYXRmb3JtL2Jyb3dzZXIvYnJvd3Nlcl9hZGFwdGVyXCI7XG4vL0Jyb3dzZXJEb21BZGFwdGVyLm1ha2VDdXJyZW50KCk7XG5cbi8vaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnYWkvY29tcG9uZW50cy91dGlscyc7XG4vL2ltcG9ydCB7U3RyaW5nQ2hhaW59IGZyb20gJy4vdXRpbHMnO1xuLy9pbXBvcnQge1JlZmxlY3Rvcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvcmUvcmVmbGVjdGlvbi9yZWZsZWN0b3InO1xuLy9pbXBvcnQge05nQ2xhc3N9IGZyb20gJ2FuZ3VsYXIyL2NvbW1vbic7XG5cbiAgICAvL2RpcmVjdGl2ZXM6IFtOZ0NsYXNzXSxcbiAgICAvL2hvc3Q6IHtcbiAgICAvLyAgJ1thdHRyLmRpc2FibGVkXSc6ICdkaXNhYmxlZD9cImRpc2FibGVkXCI6bnVsbCcsXG4gICAgLy99LFxuQENPTlNUKClcbmV4cG9ydCBjbGFzcyBLZXlDb2RlcyB7XG4gIEBDT05TVCgpIHN0YXRpYyBFU0NBUEUgPSAyNztcbiAgQENPTlNUKCkgc3RhdGljIEVOVEVSID0gMTM7XG4gIEBDT05TVCgpIHN0YXRpYyBTUEFDRSA9IDMyO1xuICBAQ09OU1QoKSBzdGF0aWMgTEVGVCA9IDM3O1xuICBAQ09OU1QoKSBzdGF0aWMgVVAgPSAzODtcbiAgQENPTlNUKCkgc3RhdGljIFJJR0hUID0gMzk7XG4gIEBDT05TVCgpIHN0YXRpYyBET1dOID0gNDA7XG4gICBcbn1cblxuZXhwb3J0IGNsYXNzIEFpQ29udHJvbCBpbXBsZW1lbnRzIE9uQ2hhbmdlc3sgXG4gICAgbmF0aXZlRWxlbWVudDphbnk7XG4gICAgdGFiaW5kZXg6IG51bWJlcj0wO1xuICAgIGRpc2FibGVkOmJvb2xlYW49ZmFsc2U7XG4gICAgaXNGb2N1czogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGlzQWN0aXZlOiBib29sZWFuID0gZmFsc2U7XG4gICAgaXNIb3ZlcjogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGlzRmlyZTpib29sZWFuPWZhbHNlO1xuICAgIGtleUNvZGU6bnVtYmVyPTA7XG4gICAgdmlzaWJsZTogYm9vbGVhbiA9IHRydWU7XG4gICAgXG4gICAgaGludDpzdHJpbmc9Jyc7XG4gICAgaWNvbjpzdHJpbmc9Jyc7XG4gICAgZXJyb3I6c3RyaW5nPScnO1xuXG4gICAgX2NsaWNrOiBFdmVudEVtaXR0ZXI8YW55Pj1uZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBwcm90ZWN0ZWQgb25DbGljaygpe31cbiAgICBwcm90ZWN0ZWQgb25Nb3VzZU92ZXIoKSB7fVxuICAgIHByb3RlY3RlZCBvbk1vdXNlT3V0KCkge31cbiAgICBwcm90ZWN0ZWQgb25Nb3VzZURvd24oZXZlbnQ6IE1vdXNlRXZlbnQpIHt9XG4gICAgcHJvdGVjdGVkIG9uTW91c2VVcChldmVudDogTW91c2VFdmVudCkge31cbiAgICBwcm90ZWN0ZWQgb25LZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7fVxuICAgIHByb3RlY3RlZCBvbktleVVwKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7fVxuICAgIHByb3RlY3RlZCBvblRvdWNoU3RhcnQoZXZlbnQpIHt9XG4gICAgcHJvdGVjdGVkIG9uVG91Y2hFbmQoZXZlbnQpIHt9XG4gICAgcHJvdGVjdGVkIG9uRm9jdXMoKSB7fVxuICAgIHByb3RlY3RlZCBvbkJsdXIoKSB7fVxuICAgIFxuICAgIHN0YXRpYyBtb2JpbGU6Ym9vbGVhbj1BaUNvbnRyb2wuaW5pdCgpO1xuICAgIHN0YXRpYyBpbml0KCk6Ym9vbGVhbntcbiAgICAgICAgdmFyIHVzZXJBZ2VudCA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XG4gICAgICAgIHZhciBtb2JpbGUgPSAhIXVzZXJBZ2VudCAmJiAvaVBhZHxpUGhvbmV8QW5kcm9pZC8udGVzdCh1c2VyQWdlbnQpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnNldEF0dHJpYnV0ZShtb2JpbGU/J21vYmlsZSc6J2Rlc2t0b3AnLCcnKTtcbiAgICAgICAgcmV0dXJuIG1vYmlsZTtcbiAgICB9XG4gICAgc3RhdGljIG1ldGEobWV0YTphbnksb3B0aW9ucz86YW55KTphbnl7XG4gICAgICAgIGlmKCFvcHRpb25zKSBvcHRpb25zPXt9OyBcbiAgICAgICAgaWYoIW1ldGEuaW5wdXRzKSBtZXRhLmlucHV0cz1bXTtcbiAgICAgICAgaWYoIW1ldGEub3V0cHV0cykgbWV0YS5vdXRwdXRzPVtdO1xuICAgICAgICBpZighbWV0YS5ob3N0KSBtZXRhLmhvc3Q9e307XG4gLy8gICAgICAgaWYoIW1ldGEucHJvdmlkZXJzKSBtZXRhLnByb3ZpZGVycz1bXTtcbiBcbiAgICAgICAgbWV0YS5pbnB1dHMucHVzaCgndmlzaWJsZScpO1xuICAgICAgICBtZXRhLmhvc3RbJ1tjbGFzcy5oaWRlXSddPSchdmlzaWJsZSc7XG4gICAgICAgIGlmKCFvcHRpb25zLmlnbm9yZURpc2FibGVkKXtcbiAgICAgICAgICAgIG1ldGEuaW5wdXRzLnB1c2goJ2Rpc2FibGVkJyk7XG4gICAgICAgICAgICBtZXRhLmhvc3RbJ1tjbGFzcy5kaXNhYmxlZF0nXT0nZGlzYWJsZWQnO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZighb3B0aW9ucy5pZ25vcmVGb2N1cyl7XG4gICAgICAgICAgICBtZXRhLmhvc3RbJ1tjbGFzcy5mb2N1c10nXT0naXNGb2N1cyc7XG4gICAgICAgICAgICBtZXRhLmhvc3RbJyhmb2N1cyknXT0nZm9jdXMoKSc7XG4gICAgICAgICAgICBtZXRhLmhvc3RbJyhibHVyKSddPSdibHVyKCknO1xuICAgICAgICAgICAgbWV0YS5ob3N0WydbdGFiaW5kZXhdJ109J2dldFRhYkluZGV4KCknO1xuICAgICAgICB9ICAgICAgICBcblxuXG4gICAgICAgIGlmKCFvcHRpb25zLmlnbm9yZUhvdmVyKXtcbiAgICAgICAgICAgIG1ldGEuaG9zdFsnW2NsYXNzLmhvdmVyXSddPSdpc0hvdmVyJztcbiAgICAgICAgICAgIG1ldGEuaG9zdFsnKG1vdXNlb3ZlciknXT0nbW91c2VPdmVyKCknO1xuICAgICAgICAgICAgbWV0YS5ob3N0WycobW91c2VvdXQpJ109J21vdXNlT3V0KCknO1xuICAgICAgICB9ICAgICAgICBcblxuICAgICAgICBpZighb3B0aW9ucy5pZ25vcmVBY3RpdmUpe1xuICAgICAgICAgICAgbWV0YS5vdXRwdXRzLnB1c2goJ19jbGljaycpO1xuICAgICAgICAgICAgbWV0YS5ob3N0WydbY2xhc3MuYWN0aXZlXSddPSdpc0FjdGl2ZSc7XG4gICAgICAgICAgICBtZXRhLmhvc3RbJyhtb3VzZXVwKSddPSdtb3VzZVVwKCRldmVudCknO1xuICAgICAgICAgICAgbWV0YS5ob3N0WycobW91c2Vkb3duKSddPSdtb3VzZURvd24oJGV2ZW50KSc7XG4gICAgICAgICAgICBtZXRhLmhvc3RbJyh0b3VjaHN0YXJ0KSddPSd0b3VjaFN0YXJ0KCRldmVudCknO1xuICAgICAgICAgICAgbWV0YS5ob3N0WycodG91Y2hlbmQpJ109J3RvdWNoRW5kKCRldmVudCknO1xuICAgICAgICAgICAgbWV0YS5ob3N0Wycoa2V5dXApJ109J2tleVVwKCRldmVudCknO1xuICAgICAgICAgICAgbWV0YS5ob3N0Wycoa2V5ZG93biknXT0na2V5RG93bigkZXZlbnQpJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWV0YTtcbiAgICB9XG4gIFxuICAgIGNvbnN0cnVjdG9yKGVsZTogRWxlbWVudFJlZikge1xuICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQgPSBlbGUubmF0aXZlRWxlbWVudDtcbiAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNldEF0dHJpYnV0ZSgnYWktY29udHJvbCcsJycpOyBcblxuICAgICAgICB2YXIgdGFiaW5kZXggPSB0aGlzLm5hdGl2ZUVsZW1lbnQuZ2V0QXR0cmlidXRlKCd0YWJpbmRleCcpO1xuICAgICAgICBpZih0YWJpbmRleCkgdGhpcy50YWJpbmRleCA9IE51bWJlcldyYXBwZXIucGFyc2VJbnQodGFiaW5kZXgsIDEwKTtcbiAgICB9ICBcblxuICAgIG5nT25DaGFuZ2VzKF8pIHtcbiAgICAgICAgLy9hbGVydCh0aGlzLnNwaW5uaW5nKTtcbiAgICB9XG5cbiAgICBlbmFibGVNYXRlcmlhbCgpe1xuICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdhaS1tYXRlcmlhbCcsJycpO1xuICAgIH1cblxuICAgIGdldFRhYkluZGV4KCl7XG4gICAgICAgIGlmKHRoaXMuZGlzYWJsZWQgfHwgIXRoaXMudmlzaWJsZSkgcmV0dXJuIC0xO1xuICAgICAgICByZXR1cm4gdGhpcy50YWJpbmRleDtcbiAgICB9XG5cbiAgICBpc0Rpc2FibGVkKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmRpc2FibGVkPyBcImRpc2FibGVkXCIgOiBudWxsO1xuICAgIH1cblxuICAgIGZpcmVDbGlja0V2ZW50KCl7XG4gICAgICAgIGlmICghdGhpcy5kaXNhYmxlZCAmJiAhdGhpcy5pc0ZpcmUpIHtcbiAgICAgICAgICAgIHRyeXtcbiAgICAgICAgICAgICAgICB0aGlzLm9uQ2xpY2soKTtcbiAgICAgICAgICAgICAgICB0aGlzLmlzRmlyZT10cnVlO1xuICAgICAgICAgICAgICAgIE9ic2VydmFibGVXcmFwcGVyLmNhbGxFbWl0KHRoaXMuX2NsaWNrLCBudWxsKTtcbiAgICAgICAgICAgIH1maW5hbGx5e1xuICAgICAgICAgICAgICAgIHRoaXMuaXNGaXJlPWZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbW91c2VPdmVyKCkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKCdtb3VzZW92ZXInKTtcbiAgICAgICAgLy9uZWVkIHByZXZlbnQgaW9zL2FuZG9yaWQgc2VuZCBzdHJhbmdlIG1vdXNlb3ZlciBldmVudFxuICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWQgJiYgIUFpQ29udHJvbC5tb2JpbGUpIHtcbiAgICAgICAgICAgIHRoaXMub25Nb3VzZU92ZXIoKTtcbiAgICAgICAgICAgIHRoaXMuaXNIb3ZlciA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgbW91c2VPdXQoKSB7XG4gICAgICAgIHRoaXMuaXNIb3ZlciA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGlmICghdGhpcy5kaXNhYmxlZCAmJiAhQWlDb250cm9sLm1vYmlsZSkgXG4gICAgICAgICAgICB0aGlzLm9uTW91c2VPdXQoKTtcbiAgICB9XG4gICAgXG4gICAgbW91c2VEb3duKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ21vdXNlZG93bicpO1xuICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWQgJiYgZXZlbnQuYnV0dG9uPT0wKSB7XG4gICAgICAgICAgICB0aGlzLm9uTW91c2VEb3duKGV2ZW50KTtcbiAgICAgICAgICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIG1vdXNlVXAoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZygnbW91c2V1cCcpO1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGlmICghdGhpcy5kaXNhYmxlZCAmJiBldmVudC5idXR0b249PTApIHtcbiAgICAgICAgICAgIHRoaXMub25Nb3VzZVVwKGV2ZW50KTtcbiAgICAgICAgICAgIHRoaXMuZmlyZUNsaWNrRXZlbnQoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBcbiAgICBrZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIC8vZml4IGlvcyBibHVldG9vdGgga2V5Y29kZSBidWdcbiAgICAgICAgdGhpcy5rZXlDb2RlPWV2ZW50LmtleUNvZGU7XG4gICAgICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5vbktleURvd24oZXZlbnQpO1xuICAgICAgICAgICAgaWYoZXZlbnQua2V5Q29kZSA9PSBLZXlDb2Rlcy5TUEFDRSl7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgLy9wcmV2ZW50IHByZXNzIHNwYWNlIGp1bXAgdG8gZW5kXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBrZXlVcChldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMub25LZXlVcChldmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5rZXlDb2RlID09IEtleUNvZGVzLlNQQUNFKSBcbiAgICAgICAgICAgIHRoaXMuZmlyZUNsaWNrRXZlbnQoKTtcbiAgICB9XG4gICAgXG4gICAgdG91Y2hTdGFydChldmVudCkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKCd0b3VjaHN0YXJ0Jyk7XG4gICAgICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5vblRvdWNoU3RhcnQoZXZlbnQpO1xuICAgICAgICAgICAgaWYoZXZlbnQudG91Y2hlcy5sZW5ndGggPT0gMSlcbiAgICAgICAgICAgICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICB0b3VjaEVuZChldmVudCkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKCd0b3VjaGVuZCcpO1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWQpe1xuICAgICAgICAgICAgdGhpcy5vblRvdWNoRW5kKGV2ZW50KTtcbiAgICAgICAgICAgIHRoaXMuZmlyZUNsaWNrRXZlbnQoKTtcbiAgICAgICAgfVxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIGZvY3VzKCkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKCdmb2N1cycpO1xuICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWQpe1xuICAgICAgICAgICAgdGhpcy5vbkZvY3VzKCk7XG4gICAgICAgICAgICB0aGlzLmlzRm9jdXMgPSAhdGhpcy5pc0FjdGl2ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBibHVyKCkge1xuICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWQpXG4gICAgICAgICAgICB0aGlzLm9uQmx1cigpO1xuICAgICAgICB0aGlzLmlzRm9jdXMgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBcbn0gXG5cblxuLyogIFxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xuICAgIGFsZXJ0KCdoZWxsbycpO1xuICAgIC8vZGVidWdnZXJcbiAgICAvL2RvY3VtZW50LmJvZHkuc2V0QXR0cmlidXRlKCdtb2JpbGUnLCdhJyk7XG59KTtcbiovIFxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
