System.register(['angular2/src/facade/lang', 'angular2/src/facade/async', "angular2/src/platform/browser/browser_adapter"], function(exports_1, context_1) {
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
    var lang_1, lang_2, async_1, browser_adapter_1;
    var KeyCodes, AiControl;
    return {
        setters:[
            function (lang_1_1) {
                lang_1 = lang_1_1;
                lang_2 = lang_1_1;
            },
            function (async_1_1) {
                async_1 = async_1_1;
            },
            function (browser_adapter_1_1) {
                browser_adapter_1 = browser_adapter_1_1;
            }],
        execute: function() {
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
                    this._click = new async_1.EventEmitter();
                    this._dom = null;
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
                Object.defineProperty(AiControl.prototype, "DOM", {
                    get: function () {
                        if (this._dom == null)
                            this._dom = new browser_adapter_1.BrowserDomAdapter();
                        return this._dom;
                    },
                    enumerable: true,
                    configurable: true
                });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlDb250cm9sL0FpQ29udHJvbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFVQSxrQ0FBa0M7WUFFbEMsK0NBQStDO1lBQy9DLHNDQUFzQztZQUN0QyxtRUFBbUU7WUFDbkUsMENBQTBDO1lBRXRDLHdCQUF3QjtZQUN4QixTQUFTO1lBQ1Qsa0RBQWtEO1lBQ2xELElBQUk7WUFFUjtnQkFBQTtnQkFTQSxDQUFDO2dCQVJpQixlQUFNLEdBQUcsRUFBRSxDQUFDO2dCQUNaLGNBQUssR0FBRyxFQUFFLENBQUM7Z0JBQ1gsY0FBSyxHQUFHLEVBQUUsQ0FBQztnQkFDWCxhQUFJLEdBQUcsRUFBRSxDQUFDO2dCQUNWLFdBQUUsR0FBRyxFQUFFLENBQUM7Z0JBQ1IsY0FBSyxHQUFHLEVBQUUsQ0FBQztnQkFDWCxhQUFJLEdBQUcsRUFBRSxDQUFDO2dCQU4xQjtvQkFBQyxZQUFLLEVBQUU7OzhDQUFBO2dCQUNSO29CQUFDLFlBQUssRUFBRTs7NkNBQUE7Z0JBQ1I7b0JBQUMsWUFBSyxFQUFFOzs2Q0FBQTtnQkFDUjtvQkFBQyxZQUFLLEVBQUU7OzRDQUFBO2dCQUNSO29CQUFDLFlBQUssRUFBRTs7MENBQUE7Z0JBQ1I7b0JBQUMsWUFBSyxFQUFFOzs2Q0FBQTtnQkFDUjtvQkFBQyxZQUFLLEVBQUU7OzRDQUFBO2dCQVJWO29CQUFDLFlBQUssRUFBRTs7NEJBQUE7Z0JBVVIsZUFBQztZQUFELENBVEEsQUFTQyxJQUFBO1lBVEQsK0JBU0MsQ0FBQTtZQUVEO2dCQStFSSxtQkFBWSxHQUFlO29CQTdFM0IsYUFBUSxHQUFTLENBQUMsQ0FBQztvQkFDbkIsYUFBUSxHQUFTLEtBQUssQ0FBQztvQkFDdkIsWUFBTyxHQUFZLEtBQUssQ0FBQztvQkFDekIsYUFBUSxHQUFZLEtBQUssQ0FBQztvQkFDMUIsWUFBTyxHQUFZLEtBQUssQ0FBQztvQkFDekIsV0FBTSxHQUFTLEtBQUssQ0FBQztvQkFDckIs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QUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQSxDQUFDO3dCQUNoQixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7d0JBQ2YsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7b0JBQ2xDLENBQUM7Z0JBQ0wsQ0FBQztnQkFFRCx3QkFBSSxHQUFKO29CQUNJLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQzt3QkFDZixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7b0JBQ2xCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO2dCQUN6QixDQUFDO2dCQWpNTSxnQkFBTSxHQUFTLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFvTTNDLGdCQUFDO1lBQUQsQ0E3TkEsQUE2TkMsSUFBQTtZQTdORCxpQ0E2TkMsQ0FBQTs7OztBQUdEOzs7Ozs7RUFNRSIsImZpbGUiOiJjb21wb25lbnRzL0FpQ29udHJvbC9BaUNvbnRyb2wuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0VsZW1lbnRSZWYsQXR0cmlidXRlLE9uQ2hhbmdlc30gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1RpbWVyV3JhcHBlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9hc3luYyc7XG4vL2ltcG9ydCB7aXNQcmVzZW50fSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnO1xuaW1wb3J0IHtLZXlib2FyZEV2ZW50LE1vdXNlRXZlbnR9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvYnJvd3Nlcic7XG5pbXBvcnQge051bWJlcldyYXBwZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZyc7XG5pbXBvcnQge0NPTlNUfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnO1xuaW1wb3J0IHtPYnNlcnZhYmxlV3JhcHBlcixFdmVudEVtaXR0ZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvYXN5bmMnO1xuaW1wb3J0IHtET019IGZyb20gJ2FuZ3VsYXIyL3NyYy9wbGF0Zm9ybS9kb20vZG9tX2FkYXB0ZXInO1xuXG5pbXBvcnQge0Jyb3dzZXJEb21BZGFwdGVyfSBmcm9tIFwiYW5ndWxhcjIvc3JjL3BsYXRmb3JtL2Jyb3dzZXIvYnJvd3Nlcl9hZGFwdGVyXCI7XG4vL0Jyb3dzZXJEb21BZGFwdGVyLm1ha2VDdXJyZW50KCk7XG5cbi8vaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnYWkvY29tcG9uZW50cy91dGlscyc7XG4vL2ltcG9ydCB7U3RyaW5nQ2hhaW59IGZyb20gJy4vdXRpbHMnO1xuLy9pbXBvcnQge1JlZmxlY3Rvcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvcmUvcmVmbGVjdGlvbi9yZWZsZWN0b3InO1xuLy9pbXBvcnQge05nQ2xhc3N9IGZyb20gJ2FuZ3VsYXIyL2NvbW1vbic7XG5cbiAgICAvL2RpcmVjdGl2ZXM6IFtOZ0NsYXNzXSxcbiAgICAvL2hvc3Q6IHtcbiAgICAvLyAgJ1thdHRyLmRpc2FibGVkXSc6ICdkaXNhYmxlZD9cImRpc2FibGVkXCI6bnVsbCcsXG4gICAgLy99LFxuQENPTlNUKClcbmV4cG9ydCBjbGFzcyBLZXlDb2RlcyB7XG4gIEBDT05TVCgpIHN0YXRpYyBFU0NBUEUgPSAyNztcbiAgQENPTlNUKCkgc3RhdGljIEVOVEVSID0gMTM7XG4gIEBDT05TVCgpIHN0YXRpYyBTUEFDRSA9IDMyO1xuICBAQ09OU1QoKSBzdGF0aWMgTEVGVCA9IDM3O1xuICBAQ09OU1QoKSBzdGF0aWMgVVAgPSAzODtcbiAgQENPTlNUKCkgc3RhdGljIFJJR0hUID0gMzk7XG4gIEBDT05TVCgpIHN0YXRpYyBET1dOID0gNDA7XG4gICBcbn1cblxuZXhwb3J0IGNsYXNzIEFpQ29udHJvbCBpbXBsZW1lbnRzIE9uQ2hhbmdlc3sgXG4gICAgbmF0aXZlRWxlbWVudDphbnk7XG4gICAgdGFiaW5kZXg6IG51bWJlcj0wO1xuICAgIGRpc2FibGVkOmJvb2xlYW49ZmFsc2U7XG4gICAgaXNGb2N1czogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGlzQWN0aXZlOiBib29sZWFuID0gZmFsc2U7XG4gICAgaXNIb3ZlcjogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGlzRmlyZTpib29sZWFuPWZhbHNlO1xuICAgIGtleUNvZGU6bnVtYmVyPTA7XG4gICAgdmlzaWJsZTogYm9vbGVhbiA9IHRydWU7XG4gICAgXG4gICAgX2NsaWNrOiBFdmVudEVtaXR0ZXI8YW55Pj1uZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBwcm90ZWN0ZWQgb25DbGljaygpe31cbiAgICBwcm90ZWN0ZWQgb25Nb3VzZU92ZXIoKSB7fVxuICAgIHByb3RlY3RlZCBvbk1vdXNlT3V0KCkge31cbiAgICBwcm90ZWN0ZWQgb25Nb3VzZURvd24oZXZlbnQ6IE1vdXNlRXZlbnQpIHt9XG4gICAgcHJvdGVjdGVkIG9uTW91c2VVcChldmVudDogTW91c2VFdmVudCkge31cbiAgICBwcm90ZWN0ZWQgb25LZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7fVxuICAgIHByb3RlY3RlZCBvbktleVVwKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7fVxuICAgIHByb3RlY3RlZCBvblRvdWNoU3RhcnQoZXZlbnQpIHt9XG4gICAgcHJvdGVjdGVkIG9uVG91Y2hFbmQoZXZlbnQpIHt9XG4gICAgcHJvdGVjdGVkIG9uRm9jdXMoKSB7fVxuICAgIHByb3RlY3RlZCBvbkJsdXIoKSB7fVxuICAgIFxuICAgIHN0YXRpYyBtb2JpbGU6Ym9vbGVhbj1BaUNvbnRyb2wuaW5pdCgpO1xuICAgIHN0YXRpYyBpbml0KCk6Ym9vbGVhbntcbiAgICAgICAgdmFyIHVzZXJBZ2VudCA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XG4gICAgICAgIHZhciBtb2JpbGUgPSAhIXVzZXJBZ2VudCAmJiAvaVBhZHxpUGhvbmV8QW5kcm9pZC8udGVzdCh1c2VyQWdlbnQpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnNldEF0dHJpYnV0ZShtb2JpbGU/J21vYmlsZSc6J2Rlc2t0b3AnLCcnKTtcbiAgICAgICAgcmV0dXJuIG1vYmlsZTtcbiAgICB9XG4gICAgc3RhdGljIG1ldGEobWV0YTphbnksb3B0aW9ucz86YW55KTphbnl7XG4gICAgICAgIGlmKCFvcHRpb25zKSBvcHRpb25zPXt9OyBcbiAgICAgICAgaWYoIW1ldGEuaW5wdXRzKSBtZXRhLmlucHV0cz1bXTtcbiAgICAgICAgaWYoIW1ldGEub3V0cHV0cykgbWV0YS5vdXRwdXRzPVtdO1xuICAgICAgICBpZighbWV0YS5ob3N0KSBtZXRhLmhvc3Q9e307XG4gLy8gICAgICAgaWYoIW1ldGEucHJvdmlkZXJzKSBtZXRhLnByb3ZpZGVycz1bXTtcbiBcbiAgICAgICAgbWV0YS5pbnB1dHMucHVzaCgndmlzaWJsZScpO1xuICAgICAgICBtZXRhLmhvc3RbJ1tjbGFzcy5oaWRlXSddPSchdmlzaWJsZSc7XG4gICAgICAgIGlmKCFvcHRpb25zLmlnbm9yZURpc2FibGVkKXtcbiAgICAgICAgICAgIG1ldGEuaW5wdXRzLnB1c2goJ2Rpc2FibGVkJyk7XG4gICAgICAgICAgICBtZXRhLmhvc3RbJ1tjbGFzcy5kaXNhYmxlZF0nXT0nZGlzYWJsZWQnO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZighb3B0aW9ucy5pZ25vcmVGb2N1cyl7XG4gICAgICAgICAgICBtZXRhLmhvc3RbJ1tjbGFzcy5mb2N1c10nXT0naXNGb2N1cyc7XG4gICAgICAgICAgICBtZXRhLmhvc3RbJyhmb2N1cyknXT0nZm9jdXMoKSc7XG4gICAgICAgICAgICBtZXRhLmhvc3RbJyhibHVyKSddPSdibHVyKCknO1xuICAgICAgICAgICAgbWV0YS5ob3N0WydbdGFiaW5kZXhdJ109J2dldFRhYkluZGV4KCknO1xuICAgICAgICB9ICAgICAgICBcblxuXG4gICAgICAgIGlmKCFvcHRpb25zLmlnbm9yZUhvdmVyKXtcbiAgICAgICAgICAgIG1ldGEuaG9zdFsnW2NsYXNzLmhvdmVyXSddPSdpc0hvdmVyJztcbiAgICAgICAgICAgIG1ldGEuaG9zdFsnKG1vdXNlb3ZlciknXT0nbW91c2VPdmVyKCknO1xuICAgICAgICAgICAgbWV0YS5ob3N0WycobW91c2VvdXQpJ109J21vdXNlT3V0KCknO1xuICAgICAgICB9ICAgICAgICBcblxuICAgICAgICBpZighb3B0aW9ucy5pZ25vcmVBY3RpdmUpe1xuICAgICAgICAgICAgbWV0YS5vdXRwdXRzLnB1c2goJ19jbGljaycpO1xuICAgICAgICAgICAgbWV0YS5ob3N0WydbY2xhc3MuYWN0aXZlXSddPSdpc0FjdGl2ZSc7XG4gICAgICAgICAgICBtZXRhLmhvc3RbJyhtb3VzZXVwKSddPSdtb3VzZVVwKCRldmVudCknO1xuICAgICAgICAgICAgbWV0YS5ob3N0WycobW91c2Vkb3duKSddPSdtb3VzZURvd24oJGV2ZW50KSc7XG4gICAgICAgICAgICBtZXRhLmhvc3RbJyh0b3VjaHN0YXJ0KSddPSd0b3VjaFN0YXJ0KCRldmVudCknO1xuICAgICAgICAgICAgbWV0YS5ob3N0WycodG91Y2hlbmQpJ109J3RvdWNoRW5kKCRldmVudCknO1xuICAgICAgICAgICAgbWV0YS5ob3N0Wycoa2V5dXApJ109J2tleVVwKCRldmVudCknO1xuICAgICAgICAgICAgbWV0YS5ob3N0Wycoa2V5ZG93biknXT0na2V5RG93bigkZXZlbnQpJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWV0YTtcbiAgICB9XG5cbiAgICBfZG9tOkJyb3dzZXJEb21BZGFwdGVyPW51bGw7XG4gICAgcHJvdGVjdGVkIGdldCBET00oKXtcbiAgICAgICAgaWYodGhpcy5fZG9tPT1udWxsKSB0aGlzLl9kb209bmV3IEJyb3dzZXJEb21BZGFwdGVyKCk7XG4gICAgICAgIHJldHVybiB0aGlzLl9kb207XG4gICAgfVxuICAgIFxuICAgIGNvbnN0cnVjdG9yKGVsZTogRWxlbWVudFJlZikge1xuICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQgPSBlbGUubmF0aXZlRWxlbWVudDtcbiAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNldEF0dHJpYnV0ZSgnYWktY29udHJvbCcsJycpOyBcblxuICAgICAgICB2YXIgdGFiaW5kZXggPSB0aGlzLm5hdGl2ZUVsZW1lbnQuZ2V0QXR0cmlidXRlKCd0YWJpbmRleCcpO1xuICAgICAgICBpZih0YWJpbmRleCkgdGhpcy50YWJpbmRleCA9IE51bWJlcldyYXBwZXIucGFyc2VJbnQodGFiaW5kZXgsIDEwKTtcbiAgICB9ICBcblxuICAgIGluaGllcml0QXR0cmlidXRlc1RvQ2hpbGRzKGkpe1xuICAgICAgICB2YXIgYXR0cmlidXRlcz1bJ3ByaW1hcnknLCdyZWQnLCdncmVlbicsJ3llbGxvdycsJ2xhcmdlJywnc21hbGwnXTtcbiAgICAgICAgdGhpcy5pbmhpZXJpdEF0dHJpYnV0ZXMoYXR0cmlidXRlcyxpKTtcbiAgICB9XG5cbiAgICBpbmhpZXJpdEF0dHJpYnV0ZXMoYXR0cmlidXRlcyxpKXtcbiAgICAgICAgdmFyIGVsZT10aGlzLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIGF0dHJpYnV0ZXMuZm9yRWFjaChhdHRyID0+IHtcbiAgICAgICAgICAgIGlmKGVsZS5nZXRBdHRyaWJ1dGUoYXR0cikgIT0gbnVsbClcbiAgICAgICAgICAgICAgICBlbGUuY2hpbGROb2Rlc1tpXS5zZXRBdHRyaWJ1dGUoYXR0ciwnJyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKF8pIHtcbiAgICAgICAgLy9hbGVydCh0aGlzLnNwaW5uaW5nKTtcbiAgICB9XG5cbiAgICBlbmFibGVNYXRlcmlhbCgpe1xuICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdhaS1tYXRlcmlhbCcsJycpO1xuICAgIH1cblxuICAgIGdldFRhYkluZGV4KCl7XG4gICAgICAgIGlmKHRoaXMuZGlzYWJsZWQgfHwgIXRoaXMudmlzaWJsZSkgcmV0dXJuIC0xO1xuICAgICAgICByZXR1cm4gdGhpcy50YWJpbmRleDtcbiAgICB9XG5cbiAgICBpc0Rpc2FibGVkKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmRpc2FibGVkPyBcImRpc2FibGVkXCIgOiBudWxsO1xuICAgIH1cblxuICAgIGZpcmVDbGlja0V2ZW50KCl7XG4gICAgICAgIGlmICghdGhpcy5kaXNhYmxlZCAmJiAhdGhpcy5pc0ZpcmUpIHtcbiAgICAgICAgICAgIHRyeXtcbiAgICAgICAgICAgICAgICB0aGlzLm9uQ2xpY2soKTtcbiAgICAgICAgICAgICAgICB0aGlzLmlzRmlyZT10cnVlO1xuICAgICAgICAgICAgICAgIE9ic2VydmFibGVXcmFwcGVyLmNhbGxFbWl0KHRoaXMuX2NsaWNrLCBudWxsKTtcbiAgICAgICAgICAgIH1maW5hbGx5e1xuICAgICAgICAgICAgICAgIHRoaXMuaXNGaXJlPWZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbW91c2VPdmVyKCkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKCdtb3VzZW92ZXInKTtcbiAgICAgICAgLy9uZWVkIHByZXZlbnQgaW9zL2FuZG9yaWQgc2VuZCBzdHJhbmdlIG1vdXNlb3ZlciBldmVudFxuICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWQgJiYgIUFpQ29udHJvbC5tb2JpbGUpIHtcbiAgICAgICAgICAgIHRoaXMub25Nb3VzZU92ZXIoKTtcbiAgICAgICAgICAgIHRoaXMuaXNIb3ZlciA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgbW91c2VPdXQoKSB7XG4gICAgICAgIHRoaXMuaXNIb3ZlciA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGlmICghdGhpcy5kaXNhYmxlZCAmJiAhQWlDb250cm9sLm1vYmlsZSkgXG4gICAgICAgICAgICB0aGlzLm9uTW91c2VPdXQoKTtcbiAgICB9XG4gICAgXG4gICAgbW91c2VEb3duKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ21vdXNlZG93bicpO1xuICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWQgJiYgZXZlbnQuYnV0dG9uPT0wKSB7XG4gICAgICAgICAgICB0aGlzLm9uTW91c2VEb3duKGV2ZW50KTtcbiAgICAgICAgICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIG1vdXNlVXAoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZygnbW91c2V1cCcpO1xuXG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkICYmIGV2ZW50LmJ1dHRvbj09MCkge1xuICAgICAgICAgICAgdGhpcy5vbk1vdXNlVXAoZXZlbnQpO1xuICAgICAgICAgICAgdGhpcy5maXJlQ2xpY2tFdmVudCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIFxuICAgIGtleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgLy9maXggaW9zIGJsdWV0b290aCBrZXljb2RlIGJ1Z1xuICAgICAgICB0aGlzLmtleUNvZGU9ZXZlbnQua2V5Q29kZTtcbiAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICB0aGlzLm9uS2V5RG93bihldmVudCk7XG4gICAgICAgICAgICBpZihldmVudC5rZXlDb2RlID09IEtleUNvZGVzLlNQQUNFKXtcbiAgICAgICAgICAgICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAvL3ByZXZlbnQgcHJlc3Mgc3BhY2UganVtcCB0byBlbmRcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGtleVVwKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5vbktleVVwKGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLmtleUNvZGUgPT0gS2V5Q29kZXMuU1BBQ0UpIFxuICAgICAgICAgICAgdGhpcy5maXJlQ2xpY2tFdmVudCgpO1xuICAgIH1cbiAgICBcbiAgICB0b3VjaFN0YXJ0KGV2ZW50KSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ3RvdWNoc3RhcnQnKTtcbiAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICB0aGlzLm9uVG91Y2hTdGFydChldmVudCk7XG4gICAgICAgICAgICBpZihldmVudC50b3VjaGVzLmxlbmd0aCA9PSAxKVxuICAgICAgICAgICAgICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHRvdWNoRW5kKGV2ZW50KSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ3RvdWNoZW5kJyk7XG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgIGlmICghdGhpcy5kaXNhYmxlZCl7XG4gICAgICAgICAgICB0aGlzLm9uVG91Y2hFbmQoZXZlbnQpO1xuICAgICAgICAgICAgdGhpcy5maXJlQ2xpY2tFdmVudCgpO1xuICAgICAgICB9XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgZm9jdXMoKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ2ZvY3VzJyk7XG4gICAgICAgIGlmICghdGhpcy5kaXNhYmxlZCl7XG4gICAgICAgICAgICB0aGlzLm9uRm9jdXMoKTtcbiAgICAgICAgICAgIHRoaXMuaXNGb2N1cyA9ICF0aGlzLmlzQWN0aXZlO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGJsdXIoKSB7XG4gICAgICAgIGlmICghdGhpcy5kaXNhYmxlZClcbiAgICAgICAgICAgIHRoaXMub25CbHVyKCk7XG4gICAgICAgIHRoaXMuaXNGb2N1cyA9IGZhbHNlO1xuICAgIH1cblxuICAgIFxufSBcblxuXG4vKiAgXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7XG4gICAgYWxlcnQoJ2hlbGxvJyk7XG4gICAgLy9kZWJ1Z2dlclxuICAgIC8vZG9jdW1lbnQuYm9keS5zZXRBdHRyaWJ1dGUoJ21vYmlsZScsJ2EnKTtcbn0pO1xuKi8gXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
