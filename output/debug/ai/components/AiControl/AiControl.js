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
                    this.onclick = new async_1.EventEmitter();
                    var el = this.ele.nativeElement;
                    el.setAttribute('ai-control', '');
                    var tabindex = el.getAttribute('tabindex');
                    if (tabindex)
                        this.tabindex = lang_1.NumberWrapper.parseInt(tabindex, 10);
                }
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
                    else
                        meta.host['[tabindex]'] = '-1';
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlDb250cm9sL0FpQ29udHJvbC50cyJdLCJuYW1lcyI6WyJLZXlDb2RlcyIsIktleUNvZGVzLmNvbnN0cnVjdG9yIiwiQWlDb250cm9sIiwiQWlDb250cm9sLmNvbnN0cnVjdG9yIiwiQWlDb250cm9sLmluaXQiLCJBaUNvbnRyb2wubWV0YSIsIkFpQ29udHJvbC5lbmFibGVNYXRlcmlhbCIsIkFpQ29udHJvbC5nZXRUYWJJbmRleCIsIkFpQ29udHJvbC5pc0Rpc2FibGVkIiwiQWlDb250cm9sLm9uQ2xpY2siLCJBaUNvbnRyb2wub25Nb3VzZU92ZXIiLCJBaUNvbnRyb2wub25Nb3VzZU91dCIsIkFpQ29udHJvbC5vbk1vdXNlRG93biIsIkFpQ29udHJvbC5vbk1vdXNlVXAiLCJBaUNvbnRyb2wub25LZXlEb3duIiwiQWlDb250cm9sLm9uS2V5VXAiLCJBaUNvbnRyb2wub25Ub3VjaFN0YXJ0IiwiQWlDb250cm9sLm9uVG91Y2hFbmQiLCJBaUNvbnRyb2wub25Gb2N1cyIsIkFpQ29udHJvbC5vbkJsdXIiLCJBaUNvbnRyb2wuZmlyZUNsaWNrRXZlbnQiLCJBaUNvbnRyb2wubW91c2VPdmVyIiwiQWlDb250cm9sLm1vdXNlT3V0IiwiQWlDb250cm9sLm1vdXNlRG93biIsIkFpQ29udHJvbC5tb3VzZVVwIiwiQWlDb250cm9sLmtleURvd24iLCJBaUNvbnRyb2wua2V5VXAiLCJBaUNvbnRyb2wudG91Y2hTdGFydCIsIkFpQ29udHJvbC50b3VjaEVuZCIsIkFpQ29udHJvbC5mb2N1cyIsIkFpQ29udHJvbC5ibHVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBUUEsa0ZBQWtGO1lBQ2xGLGtDQUFrQztZQUVsQywrQ0FBK0M7WUFDL0Msc0NBQXNDO1lBQ3RDLG1FQUFtRTtZQUNuRSwwQ0FBMEM7WUFFdEMsd0JBQXdCO1lBQ3hCLFNBQVM7WUFDVCxrREFBa0Q7WUFDbEQsSUFBSTtZQUNSO2dCQUFBQTtnQkFVQUMsQ0FB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dCB7RWxlbWVudFJlZixBdHRyaWJ1dGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtUaW1lcldyYXBwZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvYXN5bmMnO1xuLy9pbXBvcnQge2lzUHJlc2VudH0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9sYW5nJztcbmltcG9ydCB7S2V5Ym9hcmRFdmVudCxNb3VzZUV2ZW50fSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2Jyb3dzZXInO1xuaW1wb3J0IHtOdW1iZXJXcmFwcGVyfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnO1xuaW1wb3J0IHtDT05TVH0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9sYW5nJztcbmltcG9ydCB7T2JzZXJ2YWJsZVdyYXBwZXIsRXZlbnRFbWl0dGVyfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2FzeW5jJztcbmltcG9ydCB7RE9NfSBmcm9tICdhbmd1bGFyMi9zcmMvcGxhdGZvcm0vZG9tL2RvbV9hZGFwdGVyJztcbi8vaW1wb3J0IHtCcm93c2VyRG9tQWRhcHRlcn0gZnJvbSBcImFuZ3VsYXIyL3NyYy9wbGF0Zm9ybS9icm93c2VyL2Jyb3dzZXJfYWRhcHRlclwiO1xuLy9Ccm93c2VyRG9tQWRhcHRlci5tYWtlQ3VycmVudCgpO1xuXG4vL2ltcG9ydCAqIGFzIHV0aWxzIGZyb20gJ2FpL2NvbXBvbmVudHMvdXRpbHMnO1xuLy9pbXBvcnQge1N0cmluZ0NoYWlufSBmcm9tICcuL3V0aWxzJztcbi8vaW1wb3J0IHtSZWZsZWN0b3J9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL3JlZmxlY3Rpb24vcmVmbGVjdG9yJztcbi8vaW1wb3J0IHtOZ0NsYXNzfSBmcm9tICdhbmd1bGFyMi9jb21tb24nO1xuXG4gICAgLy9kaXJlY3RpdmVzOiBbTmdDbGFzc10sXG4gICAgLy9ob3N0OiB7XG4gICAgLy8gICdbYXR0ci5kaXNhYmxlZF0nOiAnZGlzYWJsZWQ/XCJkaXNhYmxlZFwiOm51bGwnLFxuICAgIC8vfSxcbkBDT05TVCgpXG5leHBvcnQgY2xhc3MgS2V5Q29kZXMge1xuICBAQ09OU1QoKSBzdGF0aWMgRVNDQVBFID0gMjc7XG4gIEBDT05TVCgpIHN0YXRpYyBFTlRFUiA9IDEzO1xuICBAQ09OU1QoKSBzdGF0aWMgU1BBQ0UgPSAzMjtcbiAgQENPTlNUKCkgc3RhdGljIExFRlQgPSAzNztcbiAgQENPTlNUKCkgc3RhdGljIFVQID0gMzg7XG4gIEBDT05TVCgpIHN0YXRpYyBSSUdIVCA9IDM5O1xuICBAQ09OU1QoKSBzdGF0aWMgRE9XTiA9IDQwO1xuICBcbn1cblxuZXhwb3J0IGNsYXNzIEFpQ29udHJvbCB7IFxuICAgIHRhYmluZGV4OiBudW1iZXI9MDtcbiAgICBkaXNhYmxlZDpib29sZWFuPWZhbHNlO1xuICAgIGlzRm9jdXM6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBpc0FjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGlzSG92ZXI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBpc0ZpcmU6Ym9vbGVhbj1mYWxzZTtcbiAgICBrZXlDb2RlOm51bWJlcj0wO1xuICAgIHZpc2libGU6IGJvb2xlYW4gPSB0cnVlO1xuICAgIFxuICAgIHN0YXRpYyBtb2JpbGU6Ym9vbGVhbj1BaUNvbnRyb2wuaW5pdCgpO1xuICAgIHN0YXRpYyBpbml0KCk6Ym9vbGVhbntcbiAgICAgICAgdmFyIHVzZXJBZ2VudCA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XG4gICAgICAgIHZhciBtb2JpbGUgPSAhIXVzZXJBZ2VudCAmJiAvaVBhZHxpUGhvbmV8QW5kcm9pZC8udGVzdCh1c2VyQWdlbnQpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnNldEF0dHJpYnV0ZShtb2JpbGU/J21vYmlsZSc6J2Rlc2t0b3AnLCcnKTtcbiAgICAgICAgcmV0dXJuIG1vYmlsZTtcbiAgICB9XG5cbiAgICBvbmNsaWNrOiBFdmVudEVtaXR0ZXI8YW55Pj1uZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgXG4gICAgc3RhdGljIG1ldGEobWV0YTphbnksb3B0aW9ucz86YW55KTphbnl7XG4gICAgICAgIGlmKCFvcHRpb25zKSBvcHRpb25zPXt9OyBcbiAgICAgICAgaWYoIW1ldGEuaW5wdXRzKSBtZXRhLmlucHV0cz1bXTtcbiAgICAgICAgaWYoIW1ldGEub3V0cHV0cykgbWV0YS5vdXRwdXRzPVtdO1xuICAgICAgICBpZighbWV0YS5ob3N0KSBtZXRhLmhvc3Q9e307XG5cbiAgICAgICAgbWV0YS5pbnB1dHMucHVzaCgndmlzaWJsZScpO1xuICAgICAgICBtZXRhLmhvc3RbJ1tjbGFzcy5oaWRlXSddPSchdmlzaWJsZSc7XG4gICAgICAgIGlmKCFvcHRpb25zLmlnbm9yZURpc2FibGVkKXtcbiAgICAgICAgICAgIG1ldGEuaW5wdXRzLnB1c2goJ2Rpc2FibGVkJyk7XG4gICAgICAgICAgICBtZXRhLmhvc3RbJ1tjbGFzcy5kaXNhYmxlZF0nXT0nZGlzYWJsZWQnO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZighb3B0aW9ucy5pZ25vcmVGb2N1cyl7XG4gICAgICAgICAgICBtZXRhLmhvc3RbJ1tjbGFzcy5mb2N1c10nXT0naXNGb2N1cyc7XG4gICAgICAgICAgICBtZXRhLmhvc3RbJyhmb2N1cyknXT0nZm9jdXMoKSc7XG4gICAgICAgICAgICBtZXRhLmhvc3RbJyhibHVyKSddPSdibHVyKCknO1xuICAgICAgICAgICAgbWV0YS5ob3N0WydbdGFiaW5kZXhdJ109J2dldFRhYkluZGV4KCknO1xuICAgICAgICB9ICAgICAgICBcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgbWV0YS5ob3N0WydbdGFiaW5kZXhdJ109Jy0xJztcblxuXG4gICAgICAgIGlmKCFvcHRpb25zLmlnbm9yZUhvdmVyKXtcbiAgICAgICAgICAgIG1ldGEuaG9zdFsnW2NsYXNzLmhvdmVyXSddPSdpc0hvdmVyJztcbiAgICAgICAgICAgIG1ldGEuaG9zdFsnKG1vdXNlb3ZlciknXT0nbW91c2VPdmVyKCknO1xuICAgICAgICAgICAgbWV0YS5ob3N0WycobW91c2VvdXQpJ109J21vdXNlT3V0KCknO1xuICAgICAgICB9ICAgICAgICBcblxuICAgICAgICBpZighb3B0aW9ucy5pZ25vcmVBY3RpdmUpe1xuICAgICAgICAgICAgbWV0YS5vdXRwdXRzLnB1c2goJ29uY2xpY2snKTtcbiAgICAgICAgICAgIG1ldGEuaG9zdFsnW2NsYXNzLmFjdGl2ZV0nXT0naXNBY3RpdmUnO1xuICAgICAgICAgICAgbWV0YS5ob3N0WycobW91c2V1cCknXT0nbW91c2VVcCgkZXZlbnQpJztcbiAgICAgICAgICAgIG1ldGEuaG9zdFsnKG1vdXNlZG93biknXT0nbW91c2VEb3duKCRldmVudCknO1xuICAgICAgICAgICAgbWV0YS5ob3N0WycodG91Y2hzdGFydCknXT0ndG91Y2hTdGFydCgkZXZlbnQpJztcbiAgICAgICAgICAgIG1ldGEuaG9zdFsnKHRvdWNoZW5kKSddPSd0b3VjaEVuZCgkZXZlbnQpJztcbiAgICAgICAgICAgIG1ldGEuaG9zdFsnKGtleXVwKSddPSdrZXlVcCgkZXZlbnQpJztcbiAgICAgICAgICAgIG1ldGEuaG9zdFsnKGtleWRvd24pJ109J2tleURvd24oJGV2ZW50KSc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1ldGE7XG4gICAgfVxuXG4gICAgZW5hYmxlTWF0ZXJpYWwoKXtcbiAgICAgICAgdGhpcy5lbGUubmF0aXZlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FpLW1hdGVyaWFsJywnJyk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIGVsZTogRWxlbWVudFJlZikge1xuICAgICAgICB2YXIgZWw6YW55ID0gdGhpcy5lbGUubmF0aXZlRWxlbWVudDtcbiAgICAgICAgZWwuc2V0QXR0cmlidXRlKCdhaS1jb250cm9sJywnJyk7IFxuXG4gICAgICAgIHZhciB0YWJpbmRleCA9IGVsLmdldEF0dHJpYnV0ZSgndGFiaW5kZXgnKTtcbiAgICAgICAgaWYodGFiaW5kZXgpIHRoaXMudGFiaW5kZXggPSBOdW1iZXJXcmFwcGVyLnBhcnNlSW50KHRhYmluZGV4LCAxMCk7XG4gICAgfSAgXG5cbiAgICBnZXRUYWJJbmRleCgpe1xuICAgICAgICBpZih0aGlzLmRpc2FibGVkIHx8ICF0aGlzLnZpc2libGUpIHJldHVybiAtMTtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFiaW5kZXg7XG4gICAgfVxuXG4gICAgaXNEaXNhYmxlZCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5kaXNhYmxlZD8gXCJkaXNhYmxlZFwiIDogbnVsbDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25DbGljaygpe31cbiAgICBwcm90ZWN0ZWQgb25Nb3VzZU92ZXIoKSB7fVxuICAgIHByb3RlY3RlZCBvbk1vdXNlT3V0KCkge31cbiAgICBwcm90ZWN0ZWQgb25Nb3VzZURvd24oZXZlbnQ6IE1vdXNlRXZlbnQpIHt9XG4gICAgcHJvdGVjdGVkIG9uTW91c2VVcChldmVudDogTW91c2VFdmVudCkge31cbiAgICBwcm90ZWN0ZWQgb25LZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7fVxuICAgIHByb3RlY3RlZCBvbktleVVwKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7fVxuICAgIHByb3RlY3RlZCBvblRvdWNoU3RhcnQoZXZlbnQpIHt9XG4gICAgcHJvdGVjdGVkIG9uVG91Y2hFbmQoZXZlbnQpIHt9XG4gICAgcHJvdGVjdGVkIG9uRm9jdXMoKSB7fVxuICAgIHByb3RlY3RlZCBvbkJsdXIoKSB7fVxuICAgIFxuICAgIGZpcmVDbGlja0V2ZW50KCl7XG4gICAgICAgIGlmICghdGhpcy5kaXNhYmxlZCAmJiAhdGhpcy5pc0ZpcmUpIHtcbiAgICAgICAgICAgIHRyeXtcbiAgICAgICAgICAgICAgICB0aGlzLm9uQ2xpY2soKTtcbiAgICAgICAgICAgICAgICB0aGlzLmlzRmlyZT10cnVlO1xuICAgICAgICAgICAgICAgIE9ic2VydmFibGVXcmFwcGVyLmNhbGxFbWl0KHRoaXMub25jbGljaywgbnVsbCk7XG4gICAgICAgICAgICB9ZmluYWxseXtcbiAgICAgICAgICAgICAgICB0aGlzLmlzRmlyZT1mYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1vdXNlT3ZlcigpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZygnbW91c2VvdmVyJyk7XG4gICAgICAgIC8vbmVlZCBwcmV2ZW50IGlvcy9hbmRvcmlkIHNlbmQgc3RyYW5nZSBtb3VzZW92ZXIgZXZlbnRcbiAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkICYmICFBaUNvbnRyb2wubW9iaWxlKSB7XG4gICAgICAgICAgICB0aGlzLm9uTW91c2VPdmVyKCk7XG4gICAgICAgICAgICB0aGlzLmlzSG92ZXIgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIG1vdXNlT3V0KCkge1xuICAgICAgICB0aGlzLmlzSG92ZXIgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWQgJiYgIUFpQ29udHJvbC5tb2JpbGUpIFxuICAgICAgICAgICAgdGhpcy5vbk1vdXNlT3V0KCk7XG4gICAgfVxuICAgIFxuICAgIG1vdXNlRG93bihldmVudDogTW91c2VFdmVudCkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKCdtb3VzZWRvd24nKTtcbiAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkICYmIGV2ZW50LmJ1dHRvbj09MCkge1xuICAgICAgICAgICAgdGhpcy5vbk1vdXNlRG93bihldmVudCk7XG4gICAgICAgICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBtb3VzZVVwKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ21vdXNldXAnKTtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWQgJiYgZXZlbnQuYnV0dG9uPT0wKSB7XG4gICAgICAgICAgICB0aGlzLm9uTW91c2VVcChldmVudCk7XG4gICAgICAgICAgICB0aGlzLmZpcmVDbGlja0V2ZW50KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgXG4gICAga2V5RG93bihldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICAvL2ZpeCBpb3MgYmx1ZXRvb3RoIGtleWNvZGUgYnVnXG4gICAgICAgIHRoaXMua2V5Q29kZT1ldmVudC5rZXlDb2RlO1xuICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMub25LZXlEb3duKGV2ZW50KTtcbiAgICAgICAgICAgIGlmKGV2ZW50LmtleUNvZGUgPT0gS2V5Q29kZXMuU1BBQ0Upe1xuICAgICAgICAgICAgICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIC8vcHJldmVudCBwcmVzcyBzcGFjZSBqdW1wIHRvIGVuZFxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAga2V5VXAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICB0aGlzLm9uS2V5VXAoZXZlbnQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMua2V5Q29kZSA9PSBLZXlDb2Rlcy5TUEFDRSkgXG4gICAgICAgICAgICB0aGlzLmZpcmVDbGlja0V2ZW50KCk7XG4gICAgfVxuICAgIFxuICAgIHRvdWNoU3RhcnQoZXZlbnQpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZygndG91Y2hzdGFydCcpO1xuICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMub25Ub3VjaFN0YXJ0KGV2ZW50KTtcbiAgICAgICAgICAgIGlmKGV2ZW50LnRvdWNoZXMubGVuZ3RoID09IDEpXG4gICAgICAgICAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgdG91Y2hFbmQoZXZlbnQpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZygndG91Y2hlbmQnKTtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkKXtcbiAgICAgICAgICAgIHRoaXMub25Ub3VjaEVuZChldmVudCk7XG4gICAgICAgICAgICB0aGlzLmZpcmVDbGlja0V2ZW50KCk7XG4gICAgICAgIH1cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBmb2N1cygpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZygnZm9jdXMnKTtcbiAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkKXtcbiAgICAgICAgICAgIHRoaXMub25Gb2N1cygpO1xuICAgICAgICAgICAgdGhpcy5pc0ZvY3VzID0gIXRoaXMuaXNBY3RpdmU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgYmx1cigpIHtcbiAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkKVxuICAgICAgICAgICAgdGhpcy5vbkJsdXIoKTtcbiAgICAgICAgdGhpcy5pc0ZvY3VzID0gZmFsc2U7XG4gICAgfVxuXG4gICAgXG59ICJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
