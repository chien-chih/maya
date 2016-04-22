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
    var lang_1, async_1;
    var KeyCodes, AiControl;
    return {
        setters:[
            function (lang_1_1) {
                lang_1 = lang_1_1;
            },
            function (async_1_1) {
                async_1 = async_1_1;
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
                    lang_1.CONST(), 
                    __metadata('design:type', Object)
                ], KeyCodes, "ESCAPE", void 0);
                __decorate([
                    lang_1.CONST(), 
                    __metadata('design:type', Object)
                ], KeyCodes, "ENTER", void 0);
                __decorate([
                    lang_1.CONST(), 
                    __metadata('design:type', Object)
                ], KeyCodes, "SPACE", void 0);
                __decorate([
                    lang_1.CONST(), 
                    __metadata('design:type', Object)
                ], KeyCodes, "LEFT", void 0);
                __decorate([
                    lang_1.CONST(), 
                    __metadata('design:type', Object)
                ], KeyCodes, "UP", void 0);
                __decorate([
                    lang_1.CONST(), 
                    __metadata('design:type', Object)
                ], KeyCodes, "RIGHT", void 0);
                __decorate([
                    lang_1.CONST(), 
                    __metadata('design:type', Object)
                ], KeyCodes, "DOWN", void 0);
                KeyCodes = __decorate([
                    lang_1.CONST(), 
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlDb250cm9sL0FpQ29udHJvbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUtBLGtDQUFrQztZQUVsQywrQ0FBK0M7WUFDL0Msc0NBQXNDO1lBQ3RDLG1FQUFtRTtZQUNuRSwwQ0FBMEM7WUFFdEMsd0JBQXdCO1lBQ3hCLFNBQVM7WUFDVCxrREFBa0Q7WUFDbEQsSUFBSTtZQUVSO2dCQUFBO2dCQVNBLENBQUM7Z0JBUmlCLGVBQU0sR0FBRyxFQUFFLENBQUM7Z0JBQ1osY0FBSyxHQUFHLEVBQUUsQ0FBQztnQkFDWCxjQUFLLEdBQUcsRUFBRSxDQUFDO2dCQUNYLGFBQUksR0FBRyxFQUFFLENBQUM7Z0JBQ1YsV0FBRSxHQUFHLEVBQUUsQ0FBQztnQkFDUixjQUFLLEdBQUcsRUFBRSxDQUFDO2dCQUNYLGFBQUksR0FBRyxFQUFFLENBQUM7Z0JBTjFCO29CQUFDLFlBQUssRUFBRTs7OENBQUE7Z0JBQ1I7b0JBQUMsWUFBSyxFQUFFOzs2Q0FBQTtnQkFDUjtvQkFBQyxZQUFLLEVBQUU7OzZDQUFBO2dCQUNSO29CQUFDLFlBQUssRUFBRTs7NENBQUE7Z0JBQ1I7b0JBQUMsWUFBSyxFQUFFOzswQ0FBQTtnQkFDUjtvQkFBQyxZQUFLLEVBQUU7OzZDQUFBO2dCQUNSO29CQUFDLFlBQUssRUFBRTs7NENBQUE7Z0JBUlY7b0JBQUMsWUFBSyxFQUFFOzs0QkFBQTtnQkFVUixlQUFDO1lBQUQsQ0FUQSxBQVNDLElBQUE7WUFURCwrQkFTQyxDQUFBO1lBRUQ7Z0JBMEVJLG1CQUFZLEdBQWU7b0JBeEUzQixhQUFRLEdBQVMsQ0FBQyxDQUFDO29CQUNuQixhQUFRLEdBQVMsS0FBSyxDQUFDO29CQUN2QixZQUFPLEdBQVksS0FBSyxDQUFDO29CQUN6QixhQUFRLEdBQVksS0FBSyxDQUFDO29CQUMxQixZQUFPLEdBQVksS0FBSyxDQUFDO29CQUN6QixXQUFNLEdBQVMsS0FBSyxDQUFDO29CQUNyQixZQUFPLEdBQVEsQ0FBQyxDQUFDO29CQUNqQixZQUFPLEdBQVksSUFBSSxDQUFDO29CQUV4QixXQUFNLEdBQW9CLElBQUksb0JBQVksRUFBRSxDQUFDO29CQWdFekMsSUFBSSxDQUFDLGFBQWEsR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDO29CQUN2QyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUMsRUFBRSxDQUFDLENBQUM7b0JBRWpELElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDO29CQUMzRCxFQUFFLENBQUEsQ0FBQyxRQUFRLENBQUM7d0JBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxvQkFBYSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0JBQ3RFLENBQUM7Z0JBbkVTLDJCQUFPLEdBQWpCLGNBQW9CLENBQUM7Z0JBQ1gsK0JBQVcsR0FBckIsY0FBeUIsQ0FBQztnQkFDaEIsOEJBQVUsR0FBcEIsY0FBd0IsQ0FBQztnQkFDZiwrQkFBVyxHQUFyQixVQUFzQixLQUFpQixJQUFHLENBQUM7Z0JBQ2pDLDZCQUFTLEdBQW5CLFVBQW9CLEtBQWlCLElBQUcsQ0FBQztnQkFDL0IsNkJBQVMsR0FBbkIsVUFBb0IsS0FBb0IsSUFBRyxDQUFDO2dCQUNsQywyQkFBTyxHQUFqQixVQUFrQixLQUFvQixJQUFHLENBQUM7Z0JBQ2hDLGdDQUFZLEdBQXRCLFVBQXVCLEtBQUssSUFBRyxDQUFDO2dCQUN0Qiw4QkFBVSxHQUFwQixVQUFxQixLQUFLLElBQUcsQ0FBQztnQkFDcEIsMkJBQU8sR0FBakIsY0FBcUIsQ0FBQztnQkFDWiwwQkFBTSxHQUFoQixjQUFvQixDQUFDO2dCQUdkLGNBQUksR0FBWDtvQkFDSSxJQUFJLFNBQVMsR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDO29CQUNwQyxJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUMsU0FBUyxJQUFJLHFCQUFxQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDbEUsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFDLFFBQVEsR0FBQyxTQUFTLEVBQUMsRUFBRSxDQUFDLENBQUM7b0JBQ3pELE1BQU0sQ0FBQyxNQUFNLENBQUM7Z0JBQ2xCLENBQUM7Z0JBQ00sY0FBSSxHQUFYLFVBQVksSUFBUSxFQUFDLE9BQVk7b0JBQzdCLEVBQUUsQ0FBQSxDQUFDLENBQUMsT0FBTyxDQUFDO3dCQUFDLE9BQU8sR0FBQyxFQUFFLENBQUM7b0JBQ3hCLEVBQUUsQ0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQzt3QkFBQyxJQUFJLENBQUMsTUFBTSxHQUFDLEVBQUUsQ0FBQztvQkFDaEMsRUFBRSxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO3dCQUFDLElBQUksQ0FBQyxPQUFPLEdBQUMsRUFBRSxDQUFDO29CQUNsQyxFQUFFLENBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7d0JBQUMsSUFBSSxDQUFDLElBQUksR0FBQyxFQUFFLENBQUM7b0JBQ25DLCtDQUErQztvQkFFeEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUMsVUFBVSxDQUFDO29CQUNyQyxFQUFFLENBQUEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQSxDQUFDO3dCQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQzt3QkFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFDLFVBQVUsQ0FBQztvQkFDN0MsQ0FBQztvQkFFRCxFQUFFLENBQUEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQSxDQUFDO3dCQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFDLFNBQVMsQ0FBQzt3QkFDckMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBQyxTQUFTLENBQUM7d0JBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUMsUUFBUSxDQUFDO3dCQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFDLGVBQWUsQ0FBQztvQkFDNUMsQ0FBQztvQkFHRCxFQUFFLENBQUEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQSxDQUFDO3dCQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFDLFNBQVMsQ0FBQzt3QkFDckMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBQyxhQUFhLENBQUM7d0JBQ3ZDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUMsWUFBWSxDQUFDO29CQUN6QyxDQUFDO29CQUVELEVBQUUsQ0FBQSxDQUFDLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFBLENBQUM7d0JBQ3RCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO3dCQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUMsVUFBVSxDQUFDO3dCQUN2QyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFDLGlCQUFpQixDQUFDO3dCQUN6QyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFDLG1CQUFtQixDQUFDO3dCQUM3QyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFDLG9CQUFvQixDQUFDO3dCQUMvQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFDLGtCQUFrQixDQUFDO3dCQUMzQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFDLGVBQWUsQ0FBQzt3QkFDckMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBQyxpQkFBaUIsQ0FBQztvQkFDN0MsQ0FBQztvQkFDRCxNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUNoQixDQUFDO2dCQVdELDhDQUEwQixHQUExQixVQUEyQixDQUFDO29CQUN4QixJQUFJLFVBQVUsR0FBQyxDQUFDLFNBQVMsRUFBQyxLQUFLLEVBQUMsT0FBTyxFQUFDLFFBQVEsRUFBQyxPQUFPLEVBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ2xFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLEVBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzFDLENBQUM7Z0JBRUQsc0NBQWtCLEdBQWxCLFVBQW1CLFVBQVUsRUFBQyxDQUFDO29CQUMzQixJQUFJLEdBQUcsR0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO29CQUMzQixVQUFVLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSTt3QkFDbkIsRUFBRSxDQUFBLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUM7NEJBQzlCLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLElBQUksRUFBQyxFQUFFLENBQUMsQ0FBQztvQkFDaEQsQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsQ0FBQztnQkFFRCwrQkFBVyxHQUFYLFVBQVksQ0FBQztvQkFDVCx1QkFBdUI7Z0JBQzNCLENBQUM7Z0JBRUQsa0NBQWMsR0FBZDtvQkFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ3RELENBQUM7Z0JBRUQsK0JBQVcsR0FBWDtvQkFDSSxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQzt3QkFBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzdDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO2dCQUN6QixDQUFDO2dCQUVELDhCQUFVLEdBQVY7b0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUUsVUFBVSxHQUFHLElBQUksQ0FBQztnQkFDNUMsQ0FBQztnQkFFRCxrQ0FBYyxHQUFkO29CQUNJLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO3dCQUNqQyxJQUFHLENBQUM7NEJBQ0EsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDOzRCQUNmLElBQUksQ0FBQyxNQUFNLEdBQUMsSUFBSSxDQUFDOzRCQUNqQix5QkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQzt3QkFDbEQsQ0FBQztnQ0FBTyxDQUFDOzRCQUNMLElBQUksQ0FBQyxNQUFNLEdBQUMsS0FBSyxDQUFDO3dCQUN0QixDQUFDO29CQUNMLENBQUM7Z0JBQ0wsQ0FBQztnQkFFRCw2QkFBUyxHQUFUO29CQUNJLDJCQUEyQjtvQkFDM0IsdURBQXVEO29CQUN2RCxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzt3QkFDdEMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO3dCQUNuQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztvQkFDeEIsQ0FBQztnQkFDTCxDQUFDO2dCQUVELDRCQUFRLEdBQVI7b0JBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7b0JBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO29CQUN0QixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDO3dCQUNwQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7Z0JBQzFCLENBQUM7Z0JBRUQsNkJBQVMsR0FBVCxVQUFVLEtBQWlCO29CQUN2QiwyQkFBMkI7b0JBQzNCLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxLQUFLLENBQUMsTUFBTSxJQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3BDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQ3hCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO29CQUN6QixDQUFDO2dCQUNMLENBQUM7Z0JBRUQsMkJBQU8sR0FBUCxVQUFRLEtBQWlCO29CQUNyQix5QkFBeUI7b0JBRXpCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO29CQUN0QixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksS0FBSyxDQUFDLE1BQU0sSUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNwQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUN0QixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7b0JBQzFCLENBQUM7Z0JBQ0wsQ0FBQztnQkFHRCwyQkFBTyxHQUFQLFVBQVEsS0FBb0I7b0JBQ3hCLCtCQUErQjtvQkFDL0IsSUFBSSxDQUFDLE9BQU8sR0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO29CQUMzQixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO3dCQUNqQixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUN0QixFQUFFLENBQUEsQ0FBQyxLQUFLLENBQUMsT0FBTyxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQSxDQUFDOzRCQUNoQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQzs0QkFDckIsaUNBQWlDOzRCQUNqQyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7NEJBQ3ZCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQzt3QkFDNUIsQ0FBQztvQkFDTCxDQUFDO2dCQUNMLENBQUM7Z0JBRUQseUJBQUssR0FBTCxVQUFNLEtBQW9CO29CQUN0QixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO3dCQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUN4QixDQUFDO29CQUNELElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO29CQUN0QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUM7d0JBQy9CLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDOUIsQ0FBQztnQkFFRCw4QkFBVSxHQUFWLFVBQVcsS0FBSztvQkFDWiw0QkFBNEI7b0JBQzVCLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7d0JBQ2pCLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQ3pCLEVBQUUsQ0FBQSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQzs0QkFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7b0JBQzdCLENBQUM7Z0JBQ0wsQ0FBQztnQkFFRCw0QkFBUSxHQUFSLFVBQVMsS0FBSztvQkFDViwwQkFBMEI7b0JBQzFCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO29CQUNyQixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQSxDQUFDO3dCQUNqQixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUN2QixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7b0JBQzFCLENBQUM7b0JBQ0QsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUMzQixDQUFDO2dCQUVELHlCQUFLLEdBQUw7b0JBQ0ksdUJBQXVCO29CQUN2QixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQSxDQUFDO3dCQUNoQixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7d0JBQ2YsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7b0JBQ2xDLENBQUM7Z0JBQ0wsQ0FBQztnQkFFRCx3QkFBSSxHQUFKO29CQUNJLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQzt3QkFDZixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7b0JBQ2xCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO2dCQUN6QixDQUFDO2dCQTVMTSxnQkFBTSxHQUFTLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkErTDNDLGdCQUFDO1lBQUQsQ0F4TkEsQUF3TkMsSUFBQTtZQXhORCxpQ0F3TkMsQ0FBQTs7OztBQUdEOzs7Ozs7RUFNRSIsImZpbGUiOiJjb21wb25lbnRzL0FpQ29udHJvbC9BaUNvbnRyb2wuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0VsZW1lbnRSZWYsQXR0cmlidXRlLE9uQ2hhbmdlc30gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0tleWJvYXJkRXZlbnQsTW91c2VFdmVudH0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9icm93c2VyJztcbmltcG9ydCB7Q09OU1QsTnVtYmVyV3JhcHBlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9sYW5nJztcbmltcG9ydCB7T2JzZXJ2YWJsZVdyYXBwZXIsVGltZXJXcmFwcGVyLEV2ZW50RW1pdHRlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9hc3luYyc7XG5cbi8vQnJvd3NlckRvbUFkYXB0ZXIubWFrZUN1cnJlbnQoKTtcblxuLy9pbXBvcnQgKiBhcyB1dGlscyBmcm9tICdhaS9jb21wb25lbnRzL3V0aWxzJztcbi8vaW1wb3J0IHtTdHJpbmdDaGFpbn0gZnJvbSAnLi91dGlscyc7XG4vL2ltcG9ydCB7UmVmbGVjdG9yfSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS9yZWZsZWN0aW9uL3JlZmxlY3Rvcic7XG4vL2ltcG9ydCB7TmdDbGFzc30gZnJvbSAnYW5ndWxhcjIvY29tbW9uJztcblxuICAgIC8vZGlyZWN0aXZlczogW05nQ2xhc3NdLFxuICAgIC8vaG9zdDoge1xuICAgIC8vICAnW2F0dHIuZGlzYWJsZWRdJzogJ2Rpc2FibGVkP1wiZGlzYWJsZWRcIjpudWxsJyxcbiAgICAvL30sXG5AQ09OU1QoKVxuZXhwb3J0IGNsYXNzIEtleUNvZGVzIHtcbiAgQENPTlNUKCkgc3RhdGljIEVTQ0FQRSA9IDI3O1xuICBAQ09OU1QoKSBzdGF0aWMgRU5URVIgPSAxMztcbiAgQENPTlNUKCkgc3RhdGljIFNQQUNFID0gMzI7XG4gIEBDT05TVCgpIHN0YXRpYyBMRUZUID0gMzc7XG4gIEBDT05TVCgpIHN0YXRpYyBVUCA9IDM4O1xuICBAQ09OU1QoKSBzdGF0aWMgUklHSFQgPSAzOTtcbiAgQENPTlNUKCkgc3RhdGljIERPV04gPSA0MDtcblxufVxuXG5leHBvcnQgY2xhc3MgQWlDb250cm9sIGltcGxlbWVudHMgT25DaGFuZ2Vze1xuICAgIG5hdGl2ZUVsZW1lbnQ6YW55O1xuICAgIHRhYmluZGV4OiBudW1iZXI9MDtcbiAgICBkaXNhYmxlZDpib29sZWFuPWZhbHNlO1xuICAgIGlzRm9jdXM6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBpc0FjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGlzSG92ZXI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBpc0ZpcmU6Ym9vbGVhbj1mYWxzZTtcbiAgICBrZXlDb2RlOm51bWJlcj0wO1xuICAgIHZpc2libGU6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgX2NsaWNrOiBFdmVudEVtaXR0ZXI8YW55Pj1uZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBwcm90ZWN0ZWQgb25DbGljaygpe31cbiAgICBwcm90ZWN0ZWQgb25Nb3VzZU92ZXIoKSB7fVxuICAgIHByb3RlY3RlZCBvbk1vdXNlT3V0KCkge31cbiAgICBwcm90ZWN0ZWQgb25Nb3VzZURvd24oZXZlbnQ6IE1vdXNlRXZlbnQpIHt9XG4gICAgcHJvdGVjdGVkIG9uTW91c2VVcChldmVudDogTW91c2VFdmVudCkge31cbiAgICBwcm90ZWN0ZWQgb25LZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7fVxuICAgIHByb3RlY3RlZCBvbktleVVwKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7fVxuICAgIHByb3RlY3RlZCBvblRvdWNoU3RhcnQoZXZlbnQpIHt9XG4gICAgcHJvdGVjdGVkIG9uVG91Y2hFbmQoZXZlbnQpIHt9XG4gICAgcHJvdGVjdGVkIG9uRm9jdXMoKSB7fVxuICAgIHByb3RlY3RlZCBvbkJsdXIoKSB7fVxuXG4gICAgc3RhdGljIG1vYmlsZTpib29sZWFuPUFpQ29udHJvbC5pbml0KCk7XG4gICAgc3RhdGljIGluaXQoKTpib29sZWFue1xuICAgICAgICB2YXIgdXNlckFnZW50ID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgICAgICAgdmFyIG1vYmlsZSA9ICEhdXNlckFnZW50ICYmIC9pUGFkfGlQaG9uZXxBbmRyb2lkLy50ZXN0KHVzZXJBZ2VudCk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc2V0QXR0cmlidXRlKG1vYmlsZT8nbW9iaWxlJzonZGVza3RvcCcsJycpO1xuICAgICAgICByZXR1cm4gbW9iaWxlO1xuICAgIH1cbiAgICBzdGF0aWMgbWV0YShtZXRhOmFueSxvcHRpb25zPzphbnkpOmFueXtcbiAgICAgICAgaWYoIW9wdGlvbnMpIG9wdGlvbnM9e307XG4gICAgICAgIGlmKCFtZXRhLmlucHV0cykgbWV0YS5pbnB1dHM9W107XG4gICAgICAgIGlmKCFtZXRhLm91dHB1dHMpIG1ldGEub3V0cHV0cz1bXTtcbiAgICAgICAgaWYoIW1ldGEuaG9zdCkgbWV0YS5ob3N0PXt9O1xuIC8vICAgICAgIGlmKCFtZXRhLnByb3ZpZGVycykgbWV0YS5wcm92aWRlcnM9W107XG5cbiAgICAgICAgbWV0YS5pbnB1dHMucHVzaCgndmlzaWJsZScpO1xuICAgICAgICBtZXRhLmhvc3RbJ1tjbGFzcy5oaWRlXSddPSchdmlzaWJsZSc7XG4gICAgICAgIGlmKCFvcHRpb25zLmlnbm9yZURpc2FibGVkKXtcbiAgICAgICAgICAgIG1ldGEuaW5wdXRzLnB1c2goJ2Rpc2FibGVkJyk7XG4gICAgICAgICAgICBtZXRhLmhvc3RbJ1tjbGFzcy5kaXNhYmxlZF0nXT0nZGlzYWJsZWQnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoIW9wdGlvbnMuaWdub3JlRm9jdXMpe1xuICAgICAgICAgICAgbWV0YS5ob3N0WydbY2xhc3MuZm9jdXNdJ109J2lzRm9jdXMnO1xuICAgICAgICAgICAgbWV0YS5ob3N0WycoZm9jdXMpJ109J2ZvY3VzKCknO1xuICAgICAgICAgICAgbWV0YS5ob3N0WycoYmx1ciknXT0nYmx1cigpJztcbiAgICAgICAgICAgIG1ldGEuaG9zdFsnW3RhYmluZGV4XSddPSdnZXRUYWJJbmRleCgpJztcbiAgICAgICAgfVxuXG5cbiAgICAgICAgaWYoIW9wdGlvbnMuaWdub3JlSG92ZXIpe1xuICAgICAgICAgICAgbWV0YS5ob3N0WydbY2xhc3MuaG92ZXJdJ109J2lzSG92ZXInO1xuICAgICAgICAgICAgbWV0YS5ob3N0WycobW91c2VvdmVyKSddPSdtb3VzZU92ZXIoKSc7XG4gICAgICAgICAgICBtZXRhLmhvc3RbJyhtb3VzZW91dCknXT0nbW91c2VPdXQoKSc7XG4gICAgICAgIH1cblxuICAgICAgICBpZighb3B0aW9ucy5pZ25vcmVBY3RpdmUpe1xuICAgICAgICAgICAgbWV0YS5vdXRwdXRzLnB1c2goJ19jbGljaycpO1xuICAgICAgICAgICAgbWV0YS5ob3N0WydbY2xhc3MuYWN0aXZlXSddPSdpc0FjdGl2ZSc7XG4gICAgICAgICAgICBtZXRhLmhvc3RbJyhtb3VzZXVwKSddPSdtb3VzZVVwKCRldmVudCknO1xuICAgICAgICAgICAgbWV0YS5ob3N0WycobW91c2Vkb3duKSddPSdtb3VzZURvd24oJGV2ZW50KSc7XG4gICAgICAgICAgICBtZXRhLmhvc3RbJyh0b3VjaHN0YXJ0KSddPSd0b3VjaFN0YXJ0KCRldmVudCknO1xuICAgICAgICAgICAgbWV0YS5ob3N0WycodG91Y2hlbmQpJ109J3RvdWNoRW5kKCRldmVudCknO1xuICAgICAgICAgICAgbWV0YS5ob3N0Wycoa2V5dXApJ109J2tleVVwKCRldmVudCknO1xuICAgICAgICAgICAgbWV0YS5ob3N0Wycoa2V5ZG93biknXT0na2V5RG93bigkZXZlbnQpJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWV0YTtcbiAgICB9XG5cblxuICAgIGNvbnN0cnVjdG9yKGVsZTogRWxlbWVudFJlZikge1xuICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQgPSBlbGUubmF0aXZlRWxlbWVudDtcbiAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNldEF0dHJpYnV0ZSgnYWktY29udHJvbCcsJycpO1xuXG4gICAgICAgIHZhciB0YWJpbmRleCA9IHRoaXMubmF0aXZlRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XG4gICAgICAgIGlmKHRhYmluZGV4KSB0aGlzLnRhYmluZGV4ID0gTnVtYmVyV3JhcHBlci5wYXJzZUludCh0YWJpbmRleCwgMTApO1xuICAgIH1cblxuICAgIGluaGllcml0QXR0cmlidXRlc1RvQ2hpbGRzKGkpe1xuICAgICAgICB2YXIgYXR0cmlidXRlcz1bJ3ByaW1hcnknLCdyZWQnLCdncmVlbicsJ3llbGxvdycsJ2xhcmdlJywnc21hbGwnXTtcbiAgICAgICAgdGhpcy5pbmhpZXJpdEF0dHJpYnV0ZXMoYXR0cmlidXRlcyxpKTtcbiAgICB9XG5cbiAgICBpbmhpZXJpdEF0dHJpYnV0ZXMoYXR0cmlidXRlcyxpKXtcbiAgICAgICAgdmFyIGVsZT10aGlzLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIGF0dHJpYnV0ZXMuZm9yRWFjaChhdHRyID0+IHtcbiAgICAgICAgICAgIGlmKGVsZS5nZXRBdHRyaWJ1dGUoYXR0cikgIT0gbnVsbClcbiAgICAgICAgICAgICAgICBlbGUuY2hpbGROb2Rlc1tpXS5zZXRBdHRyaWJ1dGUoYXR0ciwnJyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKF8pIHtcbiAgICAgICAgLy9hbGVydCh0aGlzLnNwaW5uaW5nKTtcbiAgICB9XG5cbiAgICBlbmFibGVNYXRlcmlhbCgpe1xuICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdhaS1tYXRlcmlhbCcsJycpO1xuICAgIH1cblxuICAgIGdldFRhYkluZGV4KCl7XG4gICAgICAgIGlmKHRoaXMuZGlzYWJsZWQgfHwgIXRoaXMudmlzaWJsZSkgcmV0dXJuIC0xO1xuICAgICAgICByZXR1cm4gdGhpcy50YWJpbmRleDtcbiAgICB9XG5cbiAgICBpc0Rpc2FibGVkKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmRpc2FibGVkPyBcImRpc2FibGVkXCIgOiBudWxsO1xuICAgIH1cblxuICAgIGZpcmVDbGlja0V2ZW50KCl7XG4gICAgICAgIGlmICghdGhpcy5kaXNhYmxlZCAmJiAhdGhpcy5pc0ZpcmUpIHtcbiAgICAgICAgICAgIHRyeXtcbiAgICAgICAgICAgICAgICB0aGlzLm9uQ2xpY2soKTtcbiAgICAgICAgICAgICAgICB0aGlzLmlzRmlyZT10cnVlO1xuICAgICAgICAgICAgICAgIE9ic2VydmFibGVXcmFwcGVyLmNhbGxFbWl0KHRoaXMuX2NsaWNrLCBudWxsKTtcbiAgICAgICAgICAgIH1maW5hbGx5e1xuICAgICAgICAgICAgICAgIHRoaXMuaXNGaXJlPWZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbW91c2VPdmVyKCkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKCdtb3VzZW92ZXInKTtcbiAgICAgICAgLy9uZWVkIHByZXZlbnQgaW9zL2FuZG9yaWQgc2VuZCBzdHJhbmdlIG1vdXNlb3ZlciBldmVudFxuICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWQgJiYgIUFpQ29udHJvbC5tb2JpbGUpIHtcbiAgICAgICAgICAgIHRoaXMub25Nb3VzZU92ZXIoKTtcbiAgICAgICAgICAgIHRoaXMuaXNIb3ZlciA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtb3VzZU91dCgpIHtcbiAgICAgICAgdGhpcy5pc0hvdmVyID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkICYmICFBaUNvbnRyb2wubW9iaWxlKVxuICAgICAgICAgICAgdGhpcy5vbk1vdXNlT3V0KCk7XG4gICAgfVxuXG4gICAgbW91c2VEb3duKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ21vdXNlZG93bicpO1xuICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWQgJiYgZXZlbnQuYnV0dG9uPT0wKSB7XG4gICAgICAgICAgICB0aGlzLm9uTW91c2VEb3duKGV2ZW50KTtcbiAgICAgICAgICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbW91c2VVcChldmVudDogTW91c2VFdmVudCkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKCdtb3VzZXVwJyk7XG5cbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWQgJiYgZXZlbnQuYnV0dG9uPT0wKSB7XG4gICAgICAgICAgICB0aGlzLm9uTW91c2VVcChldmVudCk7XG4gICAgICAgICAgICB0aGlzLmZpcmVDbGlja0V2ZW50KCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGtleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgLy9maXggaW9zIGJsdWV0b290aCBrZXljb2RlIGJ1Z1xuICAgICAgICB0aGlzLmtleUNvZGU9ZXZlbnQua2V5Q29kZTtcbiAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICB0aGlzLm9uS2V5RG93bihldmVudCk7XG4gICAgICAgICAgICBpZihldmVudC5rZXlDb2RlID09IEtleUNvZGVzLlNQQUNFKXtcbiAgICAgICAgICAgICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAvL3ByZXZlbnQgcHJlc3Mgc3BhY2UganVtcCB0byBlbmRcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAga2V5VXAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICB0aGlzLm9uS2V5VXAoZXZlbnQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMua2V5Q29kZSA9PSBLZXlDb2Rlcy5TUEFDRSlcbiAgICAgICAgICAgIHRoaXMuZmlyZUNsaWNrRXZlbnQoKTtcbiAgICB9XG5cbiAgICB0b3VjaFN0YXJ0KGV2ZW50KSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ3RvdWNoc3RhcnQnKTtcbiAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICB0aGlzLm9uVG91Y2hTdGFydChldmVudCk7XG4gICAgICAgICAgICBpZihldmVudC50b3VjaGVzLmxlbmd0aCA9PSAxKVxuICAgICAgICAgICAgICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdG91Y2hFbmQoZXZlbnQpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZygndG91Y2hlbmQnKTtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkKXtcbiAgICAgICAgICAgIHRoaXMub25Ub3VjaEVuZChldmVudCk7XG4gICAgICAgICAgICB0aGlzLmZpcmVDbGlja0V2ZW50KCk7XG4gICAgICAgIH1cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBmb2N1cygpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZygnZm9jdXMnKTtcbiAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkKXtcbiAgICAgICAgICAgIHRoaXMub25Gb2N1cygpO1xuICAgICAgICAgICAgdGhpcy5pc0ZvY3VzID0gIXRoaXMuaXNBY3RpdmU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBibHVyKCkge1xuICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWQpXG4gICAgICAgICAgICB0aGlzLm9uQmx1cigpO1xuICAgICAgICB0aGlzLmlzRm9jdXMgPSBmYWxzZTtcbiAgICB9XG5cblxufVxuXG5cbi8qXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7XG4gICAgYWxlcnQoJ2hlbGxvJyk7XG4gICAgLy9kZWJ1Z2dlclxuICAgIC8vZG9jdW1lbnQuYm9keS5zZXRBdHRyaWJ1dGUoJ21vYmlsZScsJ2EnKTtcbn0pO1xuKi9cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
