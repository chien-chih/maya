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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlDb250cm9sL0FpQ29udHJvbC50cyJdLCJuYW1lcyI6WyJLZXlDb2RlcyIsIktleUNvZGVzLmNvbnN0cnVjdG9yIiwiQWlDb250cm9sIiwiQWlDb250cm9sLmNvbnN0cnVjdG9yIiwiQWlDb250cm9sLm9uQ2xpY2siLCJBaUNvbnRyb2wub25Nb3VzZU92ZXIiLCJBaUNvbnRyb2wub25Nb3VzZU91dCIsIkFpQ29udHJvbC5vbk1vdXNlRG93biIsIkFpQ29udHJvbC5vbk1vdXNlVXAiLCJBaUNvbnRyb2wub25LZXlEb3duIiwiQWlDb250cm9sLm9uS2V5VXAiLCJBaUNvbnRyb2wub25Ub3VjaFN0YXJ0IiwiQWlDb250cm9sLm9uVG91Y2hFbmQiLCJBaUNvbnRyb2wub25Gb2N1cyIsIkFpQ29udHJvbC5vbkJsdXIiLCJBaUNvbnRyb2wuaW5pdCIsIkFpQ29udHJvbC5tZXRhIiwiQWlDb250cm9sLm5nT25DaGFuZ2VzIiwiQWlDb250cm9sLmVuYWJsZU1hdGVyaWFsIiwiQWlDb250cm9sLmdldFRhYkluZGV4IiwiQWlDb250cm9sLmlzRGlzYWJsZWQiLCJBaUNvbnRyb2wuZmlyZUNsaWNrRXZlbnQiLCJBaUNvbnRyb2wubW91c2VPdmVyIiwiQWlDb250cm9sLm1vdXNlT3V0IiwiQWlDb250cm9sLm1vdXNlRG93biIsIkFpQ29udHJvbC5tb3VzZVVwIiwiQWlDb250cm9sLmtleURvd24iLCJBaUNvbnRyb2wua2V5VXAiLCJBaUNvbnRyb2wudG91Y2hTdGFydCIsIkFpQ29udHJvbC50b3VjaEVuZCIsIkFpQ29udHJvbC5mb2N1cyIsIkFpQ29udHJvbC5ibHVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBU0Esa0ZBQWtGO1lBQ2xGLGtDQUFrQztZQUVsQywrQ0FBK0M7WUFDL0Msc0NBQXNDO1lBQ3RDLG1FQUFtRTtZQUNuRSwwQ0FBMEM7WUFFdEMsd0JBQXdCO1lBQ3hCLFNBQVM7WUFDVCxrREFBa0Q7WUFDbEQsSUFBSTtZQUNSO2dCQUFBQTtnQkFVQUMsQ0FBQ0E7Z0JBUmlCRCxlQUFNQSxHQUFHQSxFQUFFQSxDQUFDQTtnQkFDWkEsY0FBS0EsR0FBR0EsRUFBRUEsQ0FBQ0E7Z0JBQ1hBLGNBQUtBLEdBQUdBLEVBQUVBLENBQUNBO2dCQUNYQSxhQUFJQSxHQUFHQSxFQUFFQSxDQUFDQTtnQkFDVkEsV0FBRUEsR0FBR0EsRUFBRUEsQ0FBQ0E7Z0JBQ1JBLGNBQUtBLEdBQUdBLEVBQUVBLENBQUNBO2dCQUNYQSxhQUFJQSxHQUFHQSxFQUFFQSxDQUFDQTtnQkFOMUJBO29CQUFDQSxZQUFLQSxFQUFFQTs7bUJBQVFBLGtCQUFNQSxVQUFNQTtnQkFDNUJBO29CQUFDQSxZQUFLQSxFQUFFQTs7bUJBQVFBLGlCQUFLQSxVQUFNQTtnQkFDM0JBO29CQUFDQSxZQUFLQSxFQUFFQTs7bUJBQVFBLGlCQUFLQSxVQUFNQTtnQkFDM0JBO29CQUFDQSxZQUFLQSxFQUFFQTs7bUJBQVFBLGdCQUFJQSxVQUFNQTtnQkFDMUJBO29CQUFDQSxZQUFLQSxFQUFFQTs7bUJBQVFBLGNBQUVBLFVBQU1BO2dCQUN4QkE7b0JBQUNBLFlBQUtBLEVBQUVBOzttQkFBUUEsaUJBQUtBLFVBQU1BO2dCQUMzQkE7b0JBQUNBLFlBQUtBLEVBQUVBOzttQkFBUUEsZ0JBQUlBLFVBQU1BO2dCQVI1QkE7b0JBQUNBLFlBQUtBLEVBQUVBOzs2QkFVUEE7Z0JBQURBLGVBQUNBO1lBQURBLENBVkEsQUFVQ0EsSUFBQTtZQVZELCtCQVVDLENBQUE7WUFFRDtnQkE0RUlFLG1CQUFZQSxHQUFlQTtvQkExRTNCQyxhQUFRQSxHQUFTQSxDQUFDQSxDQUFDQTtvQkFDbkJBLGFBQVFBLEdBQVNBLEtBQUtBLENBQUNBO29CQUN2QkEsWUFBT0EsR0FBWUEsS0FBS0EsQ0FBQ0E7b0JBQ3pCQSxhQUFRQSxHQUFZQSxLQUFLQSxDQUFDQTtvQkFDMUJBLFlBQU9BLEdBQVlBLEtBQUtBLENBQUNBO29CQUN6QkEsV0FBTUEsR0FBU0EsS0FBS0EsQ0FBQ0E7b0JBQ3JCQSxZQUFPQSxHQUFRQSxDQUFDQSxDQUFDQTtvQkFDakJBLFlBQU9BLEdBQVlBLElBQUlBLENBQUNBO29CQUV4QkEsU0FBSUEsR0FBUUEsRUFBRUEsQ0FBQ0E7b0JBQ2ZBLFNBQUlBLEdBQVFBLEVBQUVBLENBQUNBO29CQUNmQSxVQUFLQSxHQUFRQSxFQUFFQSxDQUFDQTtvQkFFaEJBLFdBQU1BLEdBQW9CQSxJQUFJQSxvQkFBWUEsRUFBRUEsQ0FBQ0E7b0JBOER6Q0EsSUFBSUEsQ0FBQ0EsYUFBYUEsR0FBR0EsR0FBR0EsQ0FBQ0EsYUFBYUEsQ0FBQ0E7b0JBQ3ZDQSxJQUFJQSxDQUFDQSxhQUFhQSxDQUFDQSxZQUFZQSxDQUFDQSxZQUFZQSxFQUFDQSxFQUFFQSxDQUFDQSxDQUFDQTtvQkFFakRBLElBQUlBLFFBQVFBLEdBQUdBLElBQUlBLENBQUNBLGFBQWFBLENBQUNBLFlBQVlBLENBQUNBLFVBQVVBLENBQUNBLENBQUNBO29CQUMzREEsRUFBRUEsQ0FBQUEsQ0FBQ0EsUUFBUUEsQ0FBQ0E7d0JBQUNBLElBQUlBLENBQUNBLFFBQVFBLEdBQUdBLG9CQUFhQSxDQUFDQSxRQUFRQSxDQUFDQSxRQUFRQSxFQUFFQSxFQUFFQSxDQUFDQSxDQUFDQTtnQkFDdEVBLENBQUNBO2dCQWpFU0QsMkJBQU9BLEdBQWpCQSxjQUFvQkUsQ0FBQ0E7Z0JBQ1hGLCtCQUFXQSxHQUFyQkEsY0FBeUJHLENBQUNBO2dCQUNoQkgsOEJBQVVBLEdBQXBCQSxjQUF3QkksQ0FBQ0E7Z0JBQ2ZKLCtCQUFXQSxHQUFyQkEsVUFBc0JBLEtBQWlCQSxJQUFHSyxDQUFDQTtnQkFDakNMLDZCQUFTQSxHQUFuQkEsVUFBb0JBLEtBQWlCQSxJQUFHTSxDQUFDQTtnQkFDL0JOLDZCQUFTQSxHQUFuQkEsVUFBb0JBLEtBQW9CQSxJQUFHTyxDQUFDQTtnQkFDbENQLDJCQUFPQSxHQUFqQkEsVUFBa0JBLEtBQW9CQSxJQUFHUSxDQUFDQTtnQkFDaENSLGdDQUFZQSxHQUF0QkEsVUFBdUJBLEtBQUtBLElBQUdTLENBQUNBO2dCQUN0QlQsOEJBQVVBLEdBQXBCQSxVQUFxQkEsS0FBS0EsSUFBR1UsQ0FBQ0E7Z0JBQ3BCViwyQkFBT0EsR0FBakJBLGNBQXFCVyxDQUFDQTtnQkFDWlgsMEJBQU1BLEdBQWhCQSxjQUFvQlksQ0FBQ0E7Z0JBR2RaLGNBQUlBLEdBQVhBO29CQUNJYSxJQUFJQSxTQUFTQSxHQUFHQSxTQUFTQSxDQUFDQSxTQUFTQSxDQUFDQTtvQkFDcENBLElBQUlBLE1BQU1BLEdBQUdBLENBQUNBLENBQUNBLFNBQVNBLElBQUlBLHFCQUFxQkEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQ0E7b0JBQ2xFQSxRQUFRQSxDQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxNQUFNQSxHQUFDQSxRQUFRQSxHQUFDQSxTQUFTQSxFQUFDQSxFQUFFQSxDQUFDQSxDQUFDQTtvQkFDekRBLE1BQU1BLENBQUNBLE1BQU1BLENBQUNBO2dCQUNsQkEsQ0FBQ0E7Z0JBQ01iLGNBQUlBLEdBQVhBLFVBQVlBLElBQVFBLEVBQUNBLE9BQVlBO29CQUM3QmMsRUFBRUEsQ0FBQUEsQ0FBQ0EsQ0FBQ0EsT0FBT0EsQ0FBQ0E7d0JBQUNBLE9BQU9BLEdBQUNBLEVBQUVBLENBQUNBO29CQUN4QkEsRUFBRUEsQ0FBQUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0E7d0JBQUNBLElBQUlBLENBQUNBLE1BQU1BLEdBQUNBLEVBQUVBLENBQUNBO29CQUNoQ0EsRUFBRUEsQ0FBQUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0E7d0JBQUNBLElBQUlBLENBQUNBLE9BQU9BLEdBQUNBLEVBQUVBLENBQUNBO29CQUNsQ0EsRUFBRUEsQ0FBQUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0E7d0JBQUNBLElBQUlBLENBQUNBLElBQUlBLEdBQUNBLEVBQUVBLENBQUNBO29CQUU1QkEsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQ0E7b0JBQzVCQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxjQUFjQSxDQUFDQSxHQUFDQSxVQUFVQSxDQUFDQTtvQkFDckNBLEVBQUVBLENBQUFBLENBQUNBLENBQUNBLE9BQU9BLENBQUNBLGNBQWNBLENBQUNBLENBQUFBLENBQUNBO3dCQUN4QkEsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsQ0FBQ0E7d0JBQzdCQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxrQkFBa0JBLENBQUNBLEdBQUNBLFVBQVVBLENBQUNBO29CQUM3Q0EsQ0FBQ0E7b0JBRURBLEVBQUVBLENBQUFBLENBQUNBLENBQUNBLE9BQU9BLENBQUNBLFdBQVdBLENBQUNBLENBQUFBLENBQUNBO3dCQUNyQkEsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsR0FBQ0EsU0FBU0EsQ0FBQ0E7d0JBQ3JDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxHQUFDQSxTQUFTQSxDQUFDQTt3QkFDL0JBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLEdBQUNBLFFBQVFBLENBQUNBO3dCQUM3QkEsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsR0FBQ0EsZUFBZUEsQ0FBQ0E7b0JBQzVDQSxDQUFDQTtvQkFHREEsRUFBRUEsQ0FBQUEsQ0FBQ0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsV0FBV0EsQ0FBQ0EsQ0FBQUEsQ0FBQ0E7d0JBQ3JCQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxlQUFlQSxDQUFDQSxHQUFDQSxTQUFTQSxDQUFDQTt3QkFDckNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLGFBQWFBLENBQUNBLEdBQUNBLGFBQWFBLENBQUNBO3dCQUN2Q0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsR0FBQ0EsWUFBWUEsQ0FBQ0E7b0JBQ3pDQSxDQUFDQTtvQkFFREEsRUFBRUEsQ0FBQUEsQ0FBQ0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsWUFBWUEsQ0FBQ0EsQ0FBQUEsQ0FBQ0E7d0JBQ3RCQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQTt3QkFDNUJBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLGdCQUFnQkEsQ0FBQ0EsR0FBQ0EsVUFBVUEsQ0FBQ0E7d0JBQ3ZDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxHQUFDQSxpQkFBaUJBLENBQUNBO3dCQUN6Q0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsR0FBQ0EsbUJBQW1CQSxDQUFDQTt3QkFDN0NBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLGNBQWNBLENBQUNBLEdBQUNBLG9CQUFvQkEsQ0FBQ0E7d0JBQy9DQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxHQUFDQSxrQkFBa0JBLENBQUNBO3dCQUMzQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsR0FBQ0EsZUFBZUEsQ0FBQ0E7d0JBQ3JDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxHQUFDQSxpQkFBaUJBLENBQUNBO29CQUM3Q0EsQ0FBQ0E7b0JBQ0RBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBO2dCQUNoQkEsQ0FBQ0E7Z0JBVURkLCtCQUFXQSxHQUFYQSxVQUFZQSxDQUFDQTtvQkFDVGUsdUJBQXVCQTtnQkFDM0JBLENBQUNBO2dCQUVEZixrQ0FBY0EsR0FBZEE7b0JBQ0lnQixJQUFJQSxDQUFDQSxhQUFhQSxDQUFDQSxZQUFZQSxDQUFDQSxhQUFhQSxFQUFDQSxFQUFFQSxDQUFDQSxDQUFDQTtnQkFDdERBLENBQUNBO2dCQUVEaEIsK0JBQVdBLEdBQVhBO29CQUNJaUIsRUFBRUEsQ0FBQUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0E7d0JBQUNBLE1BQU1BLENBQUNBLENBQUNBLENBQUNBLENBQUNBO29CQUM3Q0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0E7Z0JBQ3pCQSxDQUFDQTtnQkFFRGpCLDhCQUFVQSxHQUFWQTtvQkFDSWtCLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLEdBQUVBLFVBQVVBLEdBQUdBLElBQUlBLENBQUNBO2dCQUM1Q0EsQ0FBQ0E7Z0JBRURsQixrQ0FBY0EsR0FBZEE7b0JBQ0ltQixFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxRQUFRQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFDQTt3QkFDakNBLElBQUdBLENBQUNBOzRCQUNBQSxJQUFJQSxDQUFDQSxPQUFPQSxFQUFFQSxDQUFDQTs0QkFDZkEsSUFBSUEsQ0FBQ0EsTUFBTUEsR0FBQ0EsSUFBSUEsQ0FBQ0E7NEJBQ2pCQSx5QkFBaUJBLENBQUNBLFFBQVFBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLEVBQUVBLElBQUlBLENBQUNBLENBQUNBO3dCQUNsREEsQ0FBQ0E7Z0NBQU9BLENBQUNBOzRCQUNMQSxJQUFJQSxDQUFDQSxNQUFNQSxHQUFDQSxLQUFLQSxDQUFDQTt3QkFDdEJBLENBQUNBO29CQUNMQSxDQUFDQTtnQkFDTEEsQ0FBQ0E7Z0JBRURuQiw2QkFBU0EsR0FBVEE7b0JBQ0lvQiwyQkFBMkJBO29CQUMzQkEsdURBQXVEQTtvQkFDdkRBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBLENBQUNBO3dCQUN0Q0EsSUFBSUEsQ0FBQ0EsV0FBV0EsRUFBRUEsQ0FBQ0E7d0JBQ25CQSxJQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxJQUFJQSxDQUFDQTtvQkFDeEJBLENBQUNBO2dCQUNMQSxDQUFDQTtnQkFFRHBCLDRCQUFRQSxHQUFSQTtvQkFDSXFCLElBQUlBLENBQUNBLE9BQU9BLEdBQUdBLEtBQUtBLENBQUNBO29CQUNyQkEsSUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsS0FBS0EsQ0FBQ0E7b0JBQ3RCQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxRQUFRQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxNQUFNQSxDQUFDQTt3QkFDcENBLElBQUlBLENBQUNBLFVBQVVBLEVBQUVBLENBQUNBO2dCQUMxQkEsQ0FBQ0E7Z0JBRURyQiw2QkFBU0EsR0FBVEEsVUFBVUEsS0FBaUJBO29CQUN2QnNCLDJCQUEyQkE7b0JBQzNCQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxRQUFRQSxJQUFJQSxLQUFLQSxDQUFDQSxNQUFNQSxJQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTt3QkFDcENBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO3dCQUN4QkEsSUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsSUFBSUEsQ0FBQ0E7b0JBQ3pCQSxDQUFDQTtnQkFDTEEsQ0FBQ0E7Z0JBRUR0QiwyQkFBT0EsR0FBUEEsVUFBUUEsS0FBaUJBO29CQUNyQnVCLHlCQUF5QkE7b0JBQ3pCQSxJQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxLQUFLQSxDQUFDQTtvQkFDdEJBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLElBQUlBLEtBQUtBLENBQUNBLE1BQU1BLElBQUVBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO3dCQUNwQ0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7d0JBQ3RCQSxJQUFJQSxDQUFDQSxjQUFjQSxFQUFFQSxDQUFDQTtvQkFDMUJBLENBQUNBO2dCQUNMQSxDQUFDQTtnQkFHRHZCLDJCQUFPQSxHQUFQQSxVQUFRQSxLQUFvQkE7b0JBQ3hCd0IsK0JBQStCQTtvQkFDL0JBLElBQUlBLENBQUNBLE9BQU9BLEdBQUNBLEtBQUtBLENBQUNBLE9BQU9BLENBQUNBO29CQUMzQkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7d0JBQ2pCQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTt3QkFDdEJBLEVBQUVBLENBQUFBLENBQUNBLEtBQUtBLENBQUNBLE9BQU9BLElBQUlBLFFBQVFBLENBQUNBLEtBQUtBLENBQUNBLENBQUFBLENBQUNBOzRCQUNoQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsSUFBSUEsQ0FBQ0E7NEJBQ3JCQSxpQ0FBaUNBOzRCQUNqQ0EsS0FBS0EsQ0FBQ0EsY0FBY0EsRUFBRUEsQ0FBQ0E7NEJBQ3ZCQSxLQUFLQSxDQUFDQSxlQUFlQSxFQUFFQSxDQUFDQTt3QkFDNUJBLENBQUNBO29CQUNMQSxDQUFDQTtnQkFDTEEsQ0FBQ0E7Z0JBRUR4Qix5QkFBS0EsR0FBTEEsVUFBTUEsS0FBb0JBO29CQUN0QnlCLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLENBQUNBLENBQUNBO3dCQUNqQkEsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7b0JBQ3hCQSxDQUFDQTtvQkFDREEsSUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsS0FBS0EsQ0FBQ0E7b0JBQ3RCQSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxPQUFPQSxJQUFJQSxRQUFRQSxDQUFDQSxLQUFLQSxDQUFDQTt3QkFDL0JBLElBQUlBLENBQUNBLGNBQWNBLEVBQUVBLENBQUNBO2dCQUM5QkEsQ0FBQ0E7Z0JBRUR6Qiw4QkFBVUEsR0FBVkEsVUFBV0EsS0FBS0E7b0JBQ1owQiw0QkFBNEJBO29CQUM1QkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7d0JBQ2pCQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTt3QkFDekJBLEVBQUVBLENBQUFBLENBQUNBLEtBQUtBLENBQUNBLE9BQU9BLENBQUNBLE1BQU1BLElBQUlBLENBQUNBLENBQUNBOzRCQUN6QkEsSUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsSUFBSUEsQ0FBQ0E7b0JBQzdCQSxDQUFDQTtnQkFDTEEsQ0FBQ0E7Z0JBRUQxQiw0QkFBUUEsR0FBUkEsVUFBU0EsS0FBS0E7b0JBQ1YyQiwwQkFBMEJBO29CQUMxQkEsSUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsS0FBS0EsQ0FBQ0E7b0JBQ3JCQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFBQSxDQUFDQTt3QkFDakJBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO3dCQUN2QkEsSUFBSUEsQ0FBQ0EsY0FBY0EsRUFBRUEsQ0FBQ0E7b0JBQzFCQSxDQUFDQTtvQkFDREEsS0FBS0EsQ0FBQ0EsY0FBY0EsRUFBRUEsQ0FBQ0E7Z0JBQzNCQSxDQUFDQTtnQkFFRDNCLHlCQUFLQSxHQUFMQTtvQkFDSTRCLHVCQUF1QkE7b0JBQ3ZCQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFBQSxDQUFDQTt3QkFDaEJBLElBQUlBLENBQUNBLE9BQU9BLEVBQUVBLENBQUNBO3dCQUNmQSxJQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxDQUFDQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQTtvQkFDbENBLENBQUNBO2dCQUNMQSxDQUFDQTtnQkFFRDVCLHdCQUFJQSxHQUFKQTtvQkFDSTZCLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBO3dCQUNmQSxJQUFJQSxDQUFDQSxNQUFNQSxFQUFFQSxDQUFDQTtvQkFDbEJBLElBQUlBLENBQUNBLE9BQU9BLEdBQUdBLEtBQUtBLENBQUNBO2dCQUN6QkEsQ0FBQ0E7Z0JBNUtNN0IsZ0JBQU1BLEdBQVNBLFNBQVNBLENBQUNBLElBQUlBLEVBQUVBLENBQUNBO2dCQStLM0NBLGdCQUFDQTtZQUFEQSxDQTVNQSxBQTRNQ0EsSUFBQTtZQTVNRCxpQ0E0TUMsQ0FBQTs7OztBQUdEOzs7Ozs7RUFNRSIsImZpbGUiOiJjb21wb25lbnRzL0FpQ29udHJvbC9BaUNvbnRyb2wuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0VsZW1lbnRSZWYsQXR0cmlidXRlLE9uQ2hhbmdlc30gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1RpbWVyV3JhcHBlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9hc3luYyc7XG4vL2ltcG9ydCB7aXNQcmVzZW50fSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnO1xuaW1wb3J0IHtLZXlib2FyZEV2ZW50LE1vdXNlRXZlbnR9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvYnJvd3Nlcic7XG5pbXBvcnQge051bWJlcldyYXBwZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZyc7XG5pbXBvcnQge0NPTlNUfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnO1xuaW1wb3J0IHtPYnNlcnZhYmxlV3JhcHBlcixFdmVudEVtaXR0ZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvYXN5bmMnO1xuaW1wb3J0IHtET019IGZyb20gJ2FuZ3VsYXIyL3NyYy9wbGF0Zm9ybS9kb20vZG9tX2FkYXB0ZXInO1xuXG4vL2ltcG9ydCB7QnJvd3NlckRvbUFkYXB0ZXJ9IGZyb20gXCJhbmd1bGFyMi9zcmMvcGxhdGZvcm0vYnJvd3Nlci9icm93c2VyX2FkYXB0ZXJcIjtcbi8vQnJvd3NlckRvbUFkYXB0ZXIubWFrZUN1cnJlbnQoKTtcblxuLy9pbXBvcnQgKiBhcyB1dGlscyBmcm9tICdhaS9jb21wb25lbnRzL3V0aWxzJztcbi8vaW1wb3J0IHtTdHJpbmdDaGFpbn0gZnJvbSAnLi91dGlscyc7XG4vL2ltcG9ydCB7UmVmbGVjdG9yfSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS9yZWZsZWN0aW9uL3JlZmxlY3Rvcic7XG4vL2ltcG9ydCB7TmdDbGFzc30gZnJvbSAnYW5ndWxhcjIvY29tbW9uJztcblxuICAgIC8vZGlyZWN0aXZlczogW05nQ2xhc3NdLFxuICAgIC8vaG9zdDoge1xuICAgIC8vICAnW2F0dHIuZGlzYWJsZWRdJzogJ2Rpc2FibGVkP1wiZGlzYWJsZWRcIjpudWxsJyxcbiAgICAvL30sXG5AQ09OU1QoKVxuZXhwb3J0IGNsYXNzIEtleUNvZGVzIHtcbiAgQENPTlNUKCkgc3RhdGljIEVTQ0FQRSA9IDI3O1xuICBAQ09OU1QoKSBzdGF0aWMgRU5URVIgPSAxMztcbiAgQENPTlNUKCkgc3RhdGljIFNQQUNFID0gMzI7XG4gIEBDT05TVCgpIHN0YXRpYyBMRUZUID0gMzc7XG4gIEBDT05TVCgpIHN0YXRpYyBVUCA9IDM4O1xuICBAQ09OU1QoKSBzdGF0aWMgUklHSFQgPSAzOTtcbiAgQENPTlNUKCkgc3RhdGljIERPV04gPSA0MDtcbiAgIFxufVxuXG5leHBvcnQgY2xhc3MgQWlDb250cm9sIGltcGxlbWVudHMgT25DaGFuZ2VzeyBcbiAgICBuYXRpdmVFbGVtZW50OmFueTtcbiAgICB0YWJpbmRleDogbnVtYmVyPTA7XG4gICAgZGlzYWJsZWQ6Ym9vbGVhbj1mYWxzZTtcbiAgICBpc0ZvY3VzOiBib29sZWFuID0gZmFsc2U7XG4gICAgaXNBY3RpdmU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBpc0hvdmVyOiBib29sZWFuID0gZmFsc2U7XG4gICAgaXNGaXJlOmJvb2xlYW49ZmFsc2U7XG4gICAga2V5Q29kZTpudW1iZXI9MDtcbiAgICB2aXNpYmxlOiBib29sZWFuID0gdHJ1ZTtcbiAgICBcbiAgICBoaW50OnN0cmluZz0nJztcbiAgICBpY29uOnN0cmluZz0nJztcbiAgICBlcnJvcjpzdHJpbmc9Jyc7XG5cbiAgICBfY2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+PW5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIHByb3RlY3RlZCBvbkNsaWNrKCl7fVxuICAgIHByb3RlY3RlZCBvbk1vdXNlT3ZlcigpIHt9XG4gICAgcHJvdGVjdGVkIG9uTW91c2VPdXQoKSB7fVxuICAgIHByb3RlY3RlZCBvbk1vdXNlRG93bihldmVudDogTW91c2VFdmVudCkge31cbiAgICBwcm90ZWN0ZWQgb25Nb3VzZVVwKGV2ZW50OiBNb3VzZUV2ZW50KSB7fVxuICAgIHByb3RlY3RlZCBvbktleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHt9XG4gICAgcHJvdGVjdGVkIG9uS2V5VXAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHt9XG4gICAgcHJvdGVjdGVkIG9uVG91Y2hTdGFydChldmVudCkge31cbiAgICBwcm90ZWN0ZWQgb25Ub3VjaEVuZChldmVudCkge31cbiAgICBwcm90ZWN0ZWQgb25Gb2N1cygpIHt9XG4gICAgcHJvdGVjdGVkIG9uQmx1cigpIHt9XG4gICAgXG4gICAgc3RhdGljIG1vYmlsZTpib29sZWFuPUFpQ29udHJvbC5pbml0KCk7XG4gICAgc3RhdGljIGluaXQoKTpib29sZWFue1xuICAgICAgICB2YXIgdXNlckFnZW50ID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgICAgICAgdmFyIG1vYmlsZSA9ICEhdXNlckFnZW50ICYmIC9pUGFkfGlQaG9uZXxBbmRyb2lkLy50ZXN0KHVzZXJBZ2VudCk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc2V0QXR0cmlidXRlKG1vYmlsZT8nbW9iaWxlJzonZGVza3RvcCcsJycpO1xuICAgICAgICByZXR1cm4gbW9iaWxlO1xuICAgIH1cbiAgICBzdGF0aWMgbWV0YShtZXRhOmFueSxvcHRpb25zPzphbnkpOmFueXtcbiAgICAgICAgaWYoIW9wdGlvbnMpIG9wdGlvbnM9e307IFxuICAgICAgICBpZighbWV0YS5pbnB1dHMpIG1ldGEuaW5wdXRzPVtdO1xuICAgICAgICBpZighbWV0YS5vdXRwdXRzKSBtZXRhLm91dHB1dHM9W107XG4gICAgICAgIGlmKCFtZXRhLmhvc3QpIG1ldGEuaG9zdD17fTtcblxuICAgICAgICBtZXRhLmlucHV0cy5wdXNoKCd2aXNpYmxlJyk7XG4gICAgICAgIG1ldGEuaG9zdFsnW2NsYXNzLmhpZGVdJ109JyF2aXNpYmxlJztcbiAgICAgICAgaWYoIW9wdGlvbnMuaWdub3JlRGlzYWJsZWQpe1xuICAgICAgICAgICAgbWV0YS5pbnB1dHMucHVzaCgnZGlzYWJsZWQnKTtcbiAgICAgICAgICAgIG1ldGEuaG9zdFsnW2NsYXNzLmRpc2FibGVkXSddPSdkaXNhYmxlZCc7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmKCFvcHRpb25zLmlnbm9yZUZvY3VzKXtcbiAgICAgICAgICAgIG1ldGEuaG9zdFsnW2NsYXNzLmZvY3VzXSddPSdpc0ZvY3VzJztcbiAgICAgICAgICAgIG1ldGEuaG9zdFsnKGZvY3VzKSddPSdmb2N1cygpJztcbiAgICAgICAgICAgIG1ldGEuaG9zdFsnKGJsdXIpJ109J2JsdXIoKSc7XG4gICAgICAgICAgICBtZXRhLmhvc3RbJ1t0YWJpbmRleF0nXT0nZ2V0VGFiSW5kZXgoKSc7XG4gICAgICAgIH0gICAgICAgIFxuXG5cbiAgICAgICAgaWYoIW9wdGlvbnMuaWdub3JlSG92ZXIpe1xuICAgICAgICAgICAgbWV0YS5ob3N0WydbY2xhc3MuaG92ZXJdJ109J2lzSG92ZXInO1xuICAgICAgICAgICAgbWV0YS5ob3N0WycobW91c2VvdmVyKSddPSdtb3VzZU92ZXIoKSc7XG4gICAgICAgICAgICBtZXRhLmhvc3RbJyhtb3VzZW91dCknXT0nbW91c2VPdXQoKSc7XG4gICAgICAgIH0gICAgICAgIFxuXG4gICAgICAgIGlmKCFvcHRpb25zLmlnbm9yZUFjdGl2ZSl7XG4gICAgICAgICAgICBtZXRhLm91dHB1dHMucHVzaCgnX2NsaWNrJyk7XG4gICAgICAgICAgICBtZXRhLmhvc3RbJ1tjbGFzcy5hY3RpdmVdJ109J2lzQWN0aXZlJztcbiAgICAgICAgICAgIG1ldGEuaG9zdFsnKG1vdXNldXApJ109J21vdXNlVXAoJGV2ZW50KSc7XG4gICAgICAgICAgICBtZXRhLmhvc3RbJyhtb3VzZWRvd24pJ109J21vdXNlRG93bigkZXZlbnQpJztcbiAgICAgICAgICAgIG1ldGEuaG9zdFsnKHRvdWNoc3RhcnQpJ109J3RvdWNoU3RhcnQoJGV2ZW50KSc7XG4gICAgICAgICAgICBtZXRhLmhvc3RbJyh0b3VjaGVuZCknXT0ndG91Y2hFbmQoJGV2ZW50KSc7XG4gICAgICAgICAgICBtZXRhLmhvc3RbJyhrZXl1cCknXT0na2V5VXAoJGV2ZW50KSc7XG4gICAgICAgICAgICBtZXRhLmhvc3RbJyhrZXlkb3duKSddPSdrZXlEb3duKCRldmVudCknO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtZXRhO1xuICAgIH1cbiAgXG4gICAgY29uc3RydWN0b3IoZWxlOiBFbGVtZW50UmVmKSB7XG4gICAgICAgIHRoaXMubmF0aXZlRWxlbWVudCA9IGVsZS5uYXRpdmVFbGVtZW50O1xuICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdhaS1jb250cm9sJywnJyk7IFxuXG4gICAgICAgIHZhciB0YWJpbmRleCA9IHRoaXMubmF0aXZlRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XG4gICAgICAgIGlmKHRhYmluZGV4KSB0aGlzLnRhYmluZGV4ID0gTnVtYmVyV3JhcHBlci5wYXJzZUludCh0YWJpbmRleCwgMTApO1xuICAgIH0gIFxuXG4gICAgbmdPbkNoYW5nZXMoXykge1xuICAgICAgICAvL2FsZXJ0KHRoaXMuc3Bpbm5pbmcpO1xuICAgIH1cblxuICAgIGVuYWJsZU1hdGVyaWFsKCl7XG4gICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FpLW1hdGVyaWFsJywnJyk7XG4gICAgfVxuXG4gICAgZ2V0VGFiSW5kZXgoKXtcbiAgICAgICAgaWYodGhpcy5kaXNhYmxlZCB8fCAhdGhpcy52aXNpYmxlKSByZXR1cm4gLTE7XG4gICAgICAgIHJldHVybiB0aGlzLnRhYmluZGV4O1xuICAgIH1cblxuICAgIGlzRGlzYWJsZWQoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGlzYWJsZWQ/IFwiZGlzYWJsZWRcIiA6IG51bGw7XG4gICAgfVxuXG4gICAgZmlyZUNsaWNrRXZlbnQoKXtcbiAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkICYmICF0aGlzLmlzRmlyZSkge1xuICAgICAgICAgICAgdHJ5e1xuICAgICAgICAgICAgICAgIHRoaXMub25DbGljaygpO1xuICAgICAgICAgICAgICAgIHRoaXMuaXNGaXJlPXRydWU7XG4gICAgICAgICAgICAgICAgT2JzZXJ2YWJsZVdyYXBwZXIuY2FsbEVtaXQodGhpcy5fY2xpY2ssIG51bGwpO1xuICAgICAgICAgICAgfWZpbmFsbHl7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0ZpcmU9ZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtb3VzZU92ZXIoKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ21vdXNlb3ZlcicpO1xuICAgICAgICAvL25lZWQgcHJldmVudCBpb3MvYW5kb3JpZCBzZW5kIHN0cmFuZ2UgbW91c2VvdmVyIGV2ZW50XG4gICAgICAgIGlmICghdGhpcy5kaXNhYmxlZCAmJiAhQWlDb250cm9sLm1vYmlsZSkge1xuICAgICAgICAgICAgdGhpcy5vbk1vdXNlT3ZlcigpO1xuICAgICAgICAgICAgdGhpcy5pc0hvdmVyID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBtb3VzZU91dCgpIHtcbiAgICAgICAgdGhpcy5pc0hvdmVyID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkICYmICFBaUNvbnRyb2wubW9iaWxlKSBcbiAgICAgICAgICAgIHRoaXMub25Nb3VzZU91dCgpO1xuICAgIH1cbiAgICBcbiAgICBtb3VzZURvd24oZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZygnbW91c2Vkb3duJyk7XG4gICAgICAgIGlmICghdGhpcy5kaXNhYmxlZCAmJiBldmVudC5idXR0b249PTApIHtcbiAgICAgICAgICAgIHRoaXMub25Nb3VzZURvd24oZXZlbnQpO1xuICAgICAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgbW91c2VVcChldmVudDogTW91c2VFdmVudCkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKCdtb3VzZXVwJyk7XG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkICYmIGV2ZW50LmJ1dHRvbj09MCkge1xuICAgICAgICAgICAgdGhpcy5vbk1vdXNlVXAoZXZlbnQpO1xuICAgICAgICAgICAgdGhpcy5maXJlQ2xpY2tFdmVudCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIFxuICAgIGtleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgLy9maXggaW9zIGJsdWV0b290aCBrZXljb2RlIGJ1Z1xuICAgICAgICB0aGlzLmtleUNvZGU9ZXZlbnQua2V5Q29kZTtcbiAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICB0aGlzLm9uS2V5RG93bihldmVudCk7XG4gICAgICAgICAgICBpZihldmVudC5rZXlDb2RlID09IEtleUNvZGVzLlNQQUNFKXtcbiAgICAgICAgICAgICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAvL3ByZXZlbnQgcHJlc3Mgc3BhY2UganVtcCB0byBlbmRcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGtleVVwKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5vbktleVVwKGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLmtleUNvZGUgPT0gS2V5Q29kZXMuU1BBQ0UpIFxuICAgICAgICAgICAgdGhpcy5maXJlQ2xpY2tFdmVudCgpO1xuICAgIH1cbiAgICBcbiAgICB0b3VjaFN0YXJ0KGV2ZW50KSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ3RvdWNoc3RhcnQnKTtcbiAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICB0aGlzLm9uVG91Y2hTdGFydChldmVudCk7XG4gICAgICAgICAgICBpZihldmVudC50b3VjaGVzLmxlbmd0aCA9PSAxKVxuICAgICAgICAgICAgICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHRvdWNoRW5kKGV2ZW50KSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ3RvdWNoZW5kJyk7XG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgIGlmICghdGhpcy5kaXNhYmxlZCl7XG4gICAgICAgICAgICB0aGlzLm9uVG91Y2hFbmQoZXZlbnQpO1xuICAgICAgICAgICAgdGhpcy5maXJlQ2xpY2tFdmVudCgpO1xuICAgICAgICB9XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgZm9jdXMoKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ2ZvY3VzJyk7XG4gICAgICAgIGlmICghdGhpcy5kaXNhYmxlZCl7XG4gICAgICAgICAgICB0aGlzLm9uRm9jdXMoKTtcbiAgICAgICAgICAgIHRoaXMuaXNGb2N1cyA9ICF0aGlzLmlzQWN0aXZlO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGJsdXIoKSB7XG4gICAgICAgIGlmICghdGhpcy5kaXNhYmxlZClcbiAgICAgICAgICAgIHRoaXMub25CbHVyKCk7XG4gICAgICAgIHRoaXMuaXNGb2N1cyA9IGZhbHNlO1xuICAgIH1cblxuICAgIFxufSBcblxuXG4vKiAgXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7XG4gICAgYWxlcnQoJ2hlbGxvJyk7XG4gICAgLy9kZWJ1Z2dlclxuICAgIC8vZG9jdW1lbnQuYm9keS5zZXRBdHRyaWJ1dGUoJ21vYmlsZScsJ2EnKTtcbn0pO1xuKi8gXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
