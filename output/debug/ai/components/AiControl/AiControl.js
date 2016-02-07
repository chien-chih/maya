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
                KeyCodes.UP = 38;
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
                ], KeyCodes, "UP", void 0);
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
                    this.onclick = new async_1.EventEmitter();
                    var el = this.ele.nativeElement;
                    el.setAttribute('ai-control', '');
                    var tabindex = el.getAttribute('tabindex');
                    if (tabindex)
                        this.tabindex = lang_1.NumberWrapper.parseInt(tabindex, 10);
                    if (el.getAttribute('disabled'))
                        this.disabled = true;
                }
                AiControl.init = function () {
                    var userAgent = navigator.userAgent;
                    var mobile = !!userAgent && /iPad|iPhone|Android/.test(userAgent);
                    document.body.setAttribute(mobile ? 'mobile' : 'desktop', '');
                    return mobile;
                };
                AiControl.meta = function (meta) {
                    if (!meta.inputs)
                        meta.inputs = [];
                    meta.inputs.push('disabled');
                    if (!meta.outputs)
                        meta.outputs = [];
                    meta.outputs.push('onclick');
                    if (!meta.host)
                        meta.host = {};
                    meta.host['[class.disabled]'] = 'disabled';
                    meta.host['[class.focus]'] = 'isFocus';
                    meta.host['[class.active]'] = 'isActive';
                    meta.host['[class.hover]'] = 'isHover';
                    meta.host['(touchstart)'] = 'onTouchstart($event)';
                    meta.host['(touchend)'] = 'onTouchend($event)';
                    meta.host['(mouseup)'] = 'onMouseup($event)';
                    meta.host['(mousedown)'] = 'onMousedown($event)';
                    meta.host['(mouseover)'] = 'onMouseover()';
                    meta.host['(mouseout)'] = 'onMouseout()';
                    meta.host['(keyup)'] = 'onKeyup($event)';
                    meta.host['(keydown)'] = 'onKeydown($event)';
                    meta.host['(focus)'] = 'onFocus()';
                    meta.host['(blur)'] = 'onBlur()';
                    meta.host['[tabindex]'] = 'getTabIndex()';
                    return meta;
                };
                AiControl.prototype.enableMaterial = function () {
                    this.ele.nativeElement.setAttribute('ai-material', '');
                };
                AiControl.prototype.getTabIndex = function () {
                    if (this.disabled)
                        return -1;
                    return this.tabindex;
                };
                AiControl.prototype.onClick = function () {
                };
                AiControl.prototype.fireClickEvent = function () {
                    if (!this.disabled && !this.isFire) {
                        try {
                            this.isFire = true;
                            this.onClick();
                            async_1.ObservableWrapper.callEmit(this.onclick, null);
                        }
                        finally {
                            this.isFire = false;
                        }
                    }
                };
                AiControl.prototype.onMouseover = function () {
                    //console.log('mouseover');
                    //need prevent ios/andorid send strange mouseover event
                    if (!this.disabled && !AiControl.mobile)
                        this.isHover = true;
                };
                AiControl.prototype.onMouseout = function () {
                    this.isHover = false;
                    this.isActive = false;
                };
                AiControl.prototype.onMousedown = function (event) {
                    //console.log('mousedown');
                    if (!this.disabled && event.button == 0) {
                        this.isActive = true;
                    }
                };
                AiControl.prototype.onMouseup = function (event) {
                    //console.log('mouseup');
                    this.isActive = false;
                    if (event.button == 0) {
                        this.fireClickEvent();
                    }
                };
                AiControl.prototype.onKeydown = function (event) {
                    //fix ios bluetooth keycode bug
                    this.keyCode = event.keyCode;
                    if (!this.disabled && event.keyCode == KeyCodes.SPACE) {
                        this.isActive = true;
                        //prevent press space jump to end
                        event.preventDefault();
                        event.stopPropagation();
                    }
                };
                AiControl.prototype.onKeyup = function (event) {
                    this.isActive = false;
                    if (this.keyCode == KeyCodes.SPACE)
                        this.fireClickEvent();
                };
                AiControl.prototype.onTouchstart = function (event) {
                    //console.log('touchstart');
                    if (!this.disabled && event.touches.length == 1) {
                        this.isActive = true;
                    }
                };
                AiControl.prototype.onTouchend = function (event) {
                    //console.log('touchend');
                    this.isActive = false;
                    if (!this.disabled) {
                        this.fireClickEvent();
                    }
                    event.preventDefault();
                };
                AiControl.prototype.onFocus = function () {
                    //console.log('focus');
                    if (!this.disabled) {
                        this.isFocus = !this.isActive;
                    }
                };
                AiControl.prototype.onBlur = function () {
                    this.isFocus = false;
                };
                AiControl.mobile = AiControl.init();
                return AiControl;
            })();
            exports_1("AiControl", AiControl);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlDb250cm9sL0FpQ29udHJvbC50cyJdLCJuYW1lcyI6WyJLZXlDb2RlcyIsIktleUNvZGVzLmNvbnN0cnVjdG9yIiwiQWlDb250cm9sIiwiQWlDb250cm9sLmNvbnN0cnVjdG9yIiwiQWlDb250cm9sLmluaXQiLCJBaUNvbnRyb2wubWV0YSIsIkFpQ29udHJvbC5lbmFibGVNYXRlcmlhbCIsIkFpQ29udHJvbC5nZXRUYWJJbmRleCIsIkFpQ29udHJvbC5vbkNsaWNrIiwiQWlDb250cm9sLmZpcmVDbGlja0V2ZW50IiwiQWlDb250cm9sLm9uTW91c2VvdmVyIiwiQWlDb250cm9sLm9uTW91c2VvdXQiLCJBaUNvbnRyb2wub25Nb3VzZWRvd24iLCJBaUNvbnRyb2wub25Nb3VzZXVwIiwiQWlDb250cm9sLm9uS2V5ZG93biIsIkFpQ29udHJvbC5vbktleXVwIiwiQWlDb250cm9sLm9uVG91Y2hzdGFydCIsIkFpQ29udHJvbC5vblRvdWNoZW5kIiwiQWlDb250cm9sLm9uRm9jdXMiLCJBaUNvbnRyb2wub25CbHVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBT0EsK0NBQStDO1lBQy9DLHNDQUFzQztZQUN0QyxtRUFBbUU7WUFDbkUsMENBQTBDO1lBRXRDLHdCQUF3QjtZQUN4QixTQUFTO1lBQ1Qsa0RBQWtEO1lBQ2xELElBQUk7WUFDUjtnQkFBQUE7Z0JBT0FDLENBQUNBO2dCQUxpQkQsZUFBTUEsR0FBR0EsRUFBRUEsQ0FBQ0E7Z0JBQ1pBLGNBQUtBLEdBQUdBLEVBQUVBLENBQUNBO2dCQUNYQSxjQUFLQSxHQUFHQSxFQUFFQSxDQUFDQTtnQkFDWEEsV0FBRUEsR0FBR0EsRUFBRUEsQ0FBQ0E7Z0JBQ1JBLGFBQUlBLEdBQUdBLEVBQUVBLENBQUNBO2dCQUoxQkE7b0JBQUNBLFlBQUtBLEVBQUVBOzttQkFBUUEsa0JBQU1BLFVBQU1BO2dCQUM1QkE7b0JBQUNBLFlBQUtBLEVBQUVBOzttQkFBUUEsaUJBQUtBLFVBQU1BO2dCQUMzQkE7b0JBQUNBLFlBQUtBLEVBQUVBOzttQkFBUUEsaUJBQUtBLFVBQU1BO2dCQUMzQkE7b0JBQUNBLFlBQUtBLEVBQUVBOzttQkFBUUEsY0FBRUEsVUFBTUE7Z0JBQ3hCQTtvQkFBQ0EsWUFBS0EsRUFBRUE7O21CQUFRQSxnQkFBSUEsVUFBTUE7Z0JBTjVCQTtvQkFBQ0EsWUFBS0EsRUFBRUE7OzZCQU9QQTtnQkFBREEsZUFBQ0E7WUFBREEsQ0FQQSxBQU9DQSxJQUFBO1lBUEQsK0JBT0MsQ0FBQTtZQUVEO2dCQWlESUUsbUJBQXNCQSxHQUFlQTtvQkFBZkMsUUFBR0EsR0FBSEEsR0FBR0EsQ0FBWUE7b0JBaERyQ0EsYUFBUUEsR0FBU0EsQ0FBQ0EsQ0FBQ0E7b0JBQ25CQSxhQUFRQSxHQUFTQSxLQUFLQSxDQUFDQTtvQkFDdkJBLFlBQU9BLEdBQVlBLEtBQUtBLENBQUNBO29CQUN6QkEsYUFBUUEsR0FBWUEsS0FBS0EsQ0FBQ0E7b0JBQzFCQSxZQUFPQSxHQUFZQSxLQUFLQSxDQUFDQTtvQkFDekJBLFdBQU1BLEdBQVNBLEtBQUtBLENBQUNBO29CQUNyQkEsWUFBT0EsR0FBUUEsQ0FBQ0EsQ0FBQ0E7b0JBVWpCQSxZQUFPQSxHQUFvQkEsSUFBSUEsb0JBQVlBLEVBQUVBLENBQUNBO29CQWtDMUNBLElBQUlBLEVBQUVBLEdBQU9BLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLGFBQWFBLENBQUNBO29CQUNwQ0EsRUFBRUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsWUFBWUEsRUFBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0E7b0JBRWpDQSxJQUFJQSxRQUFRQSxHQUFHQSxFQUFFQSxDQUFDQSxZQUFZQSxDQUFDQSxVQUFVQSxDQUFDQSxDQUFDQTtvQkFDM0NBLEVBQUVBLENBQUFBLENBQUNBLFFBQVFBLENBQUNBO3dCQUFDQSxJQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxvQkFBYUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsUUFBUUEsRUFBRUEsRUFBRUEsQ0FBQ0EsQ0FBQ0E7b0JBRWxFQSxFQUFFQSxDQUFBQSxDQUFDQSxFQUFFQSxDQUFDQSxZQUFZQSxDQUFDQSxVQUFVQSxDQUFDQSxDQUFDQTt3QkFDM0JBLElBQUlBLENBQUNBLFFBQVFBLEdBQUdBLElBQUlBLENBQUNBO2dCQUM3QkEsQ0FBQ0E7Z0JBakRNRCxjQUFJQSxHQUFYQTtvQkFDSUUsSUFBSUEsU0FBU0EsR0FBR0EsU0FBU0EsQ0FBQ0EsU0FBU0EsQ0FBQ0E7b0JBQ3BDQSxJQUFJQSxNQUFNQSxHQUFHQSxDQUFDQSxDQUFDQSxTQUFTQSxJQUFJQSxxQkFBcUJBLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLENBQUNBO29CQUNsRUEsUUFBUUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsTUFBTUEsR0FBQ0EsUUFBUUEsR0FBQ0EsU0FBU0EsRUFBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0E7b0JBQ3pEQSxNQUFNQSxDQUFDQSxNQUFNQSxDQUFDQTtnQkFDbEJBLENBQUNBO2dCQUlNRixjQUFJQSxHQUFYQSxVQUFZQSxJQUFRQTtvQkFDaEJHLEVBQUVBLENBQUFBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBO3dCQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxHQUFDQSxFQUFFQSxDQUFDQTtvQkFDaENBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLENBQUNBO29CQUU3QkEsRUFBRUEsQ0FBQUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0E7d0JBQUNBLElBQUlBLENBQUNBLE9BQU9BLEdBQUNBLEVBQUVBLENBQUNBO29CQUNsQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQ0E7b0JBRTdCQSxFQUFFQSxDQUFBQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQTt3QkFBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsR0FBQ0EsRUFBRUEsQ0FBQ0E7b0JBQzVCQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxrQkFBa0JBLENBQUNBLEdBQUNBLFVBQVVBLENBQUNBO29CQUN6Q0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsR0FBQ0EsU0FBU0EsQ0FBQ0E7b0JBQ3JDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxnQkFBZ0JBLENBQUNBLEdBQUNBLFVBQVVBLENBQUNBO29CQUN2Q0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsR0FBQ0EsU0FBU0EsQ0FBQ0E7b0JBQ3JDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxjQUFjQSxDQUFDQSxHQUFDQSxzQkFBc0JBLENBQUNBO29CQUNqREEsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsR0FBQ0Esb0JBQW9CQSxDQUFDQTtvQkFDN0NBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLEdBQUNBLG1CQUFtQkEsQ0FBQ0E7b0JBQzNDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxhQUFhQSxDQUFDQSxHQUFDQSxxQkFBcUJBLENBQUNBO29CQUMvQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsR0FBQ0EsZUFBZUEsQ0FBQ0E7b0JBQ3pDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxHQUFDQSxjQUFjQSxDQUFDQTtvQkFDdkNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLEdBQUNBLGlCQUFpQkEsQ0FBQ0E7b0JBQ3ZDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxHQUFDQSxtQkFBbUJBLENBQUNBO29CQUMzQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsR0FBQ0EsV0FBV0EsQ0FBQ0E7b0JBQ2pDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxHQUFDQSxVQUFVQSxDQUFDQTtvQkFDL0JBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLEdBQUNBLGVBQWVBLENBQUNBO29CQUN4Q0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0E7Z0JBQ2hCQSxDQUFDQTtnQkFFREgsa0NBQWNBLEdBQWRBO29CQUNJSSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxhQUFhQSxDQUFDQSxZQUFZQSxDQUFDQSxhQUFhQSxFQUFDQSxFQUFFQSxDQUFDQSxDQUFDQTtnQkFDMURBLENBQUNBO2dCQWNESiwrQkFBV0EsR0FBWEE7b0JBQ0lLLEVBQUVBLENBQUFBLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBO3dCQUFDQSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFDNUJBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBO2dCQUN6QkEsQ0FBQ0E7Z0JBRVNMLDJCQUFPQSxHQUFqQkE7Z0JBRUFNLENBQUNBO2dCQUVETixrQ0FBY0EsR0FBZEE7b0JBQ0lPLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBLENBQUNBO3dCQUNqQ0EsSUFBR0EsQ0FBQ0E7NEJBQ0FBLElBQUlBLENBQUNBLE1BQU1BLEdBQUNBLElBQUlBLENBQUNBOzRCQUNqQkEsSUFBSUEsQ0FBQ0EsT0FBT0EsRUFBRUEsQ0FBQ0E7NEJBQ2ZBLHlCQUFpQkEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7d0JBQ25EQSxDQUFDQTtnQ0FBT0EsQ0FBQ0E7NEJBQ0xBLElBQUlBLENBQUNBLE1BQU1BLEdBQUNBLEtBQUtBLENBQUNBO3dCQUN0QkEsQ0FBQ0E7b0JBQ0xBLENBQUNBO2dCQUNMQSxDQUFDQTtnQkFFRFAsK0JBQVdBLEdBQVhBO29CQUNJUSwyQkFBMkJBO29CQUMzQkEsdURBQXVEQTtvQkFDdkRBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLE1BQU1BLENBQUNBO3dCQUFDQSxJQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxJQUFJQSxDQUFDQTtnQkFDakVBLENBQUNBO2dCQUVEUiw4QkFBVUEsR0FBVkE7b0JBQ0lTLElBQUlBLENBQUNBLE9BQU9BLEdBQUdBLEtBQUtBLENBQUNBO29CQUNyQkEsSUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsS0FBS0EsQ0FBQ0E7Z0JBQzFCQSxDQUFDQTtnQkFFRFQsK0JBQVdBLEdBQVhBLFVBQVlBLEtBQWlCQTtvQkFDekJVLDJCQUEyQkE7b0JBQzNCQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxRQUFRQSxJQUFJQSxLQUFLQSxDQUFDQSxNQUFNQSxJQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTt3QkFDcENBLElBQUlBLENBQUNBLFFBQVFBLEdBQUdBLElBQUlBLENBQUNBO29CQUN6QkEsQ0FBQ0E7Z0JBQ0xBLENBQUNBO2dCQUVEViw2QkFBU0EsR0FBVEEsVUFBVUEsS0FBaUJBO29CQUN2QlcseUJBQXlCQTtvQkFDekJBLElBQUlBLENBQUNBLFFBQVFBLEdBQUdBLEtBQUtBLENBQUNBO29CQUN0QkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsTUFBTUEsSUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7d0JBQ2xCQSxJQUFJQSxDQUFDQSxjQUFjQSxFQUFFQSxDQUFDQTtvQkFDMUJBLENBQUNBO2dCQUNMQSxDQUFDQTtnQkFHRFgsNkJBQVNBLEdBQVRBLFVBQVVBLEtBQW9CQTtvQkFDMUJZLCtCQUErQkE7b0JBQy9CQSxJQUFJQSxDQUFDQSxPQUFPQSxHQUFDQSxLQUFLQSxDQUFDQSxPQUFPQSxDQUFDQTtvQkFFM0JBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLElBQUlBLEtBQUtBLENBQUNBLE9BQU9BLElBQUlBLFFBQVFBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBO3dCQUNwREEsSUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsSUFBSUEsQ0FBQ0E7d0JBQ3JCQSxpQ0FBaUNBO3dCQUNqQ0EsS0FBS0EsQ0FBQ0EsY0FBY0EsRUFBRUEsQ0FBQ0E7d0JBQ3ZCQSxLQUFLQSxDQUFDQSxlQUFlQSxFQUFFQSxDQUFDQTtvQkFDNUJBLENBQUNBO2dCQUNMQSxDQUFDQTtnQkFFRFosMkJBQU9BLEdBQVBBLFVBQVFBLEtBQW9CQTtvQkFDeEJhLElBQUlBLENBQUNBLFFBQVFBLEdBQUdBLEtBQUtBLENBQUNBO29CQUN0QkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsSUFBSUEsUUFBUUEsQ0FBQ0EsS0FBS0EsQ0FBQ0E7d0JBQy9CQSxJQUFJQSxDQUFDQSxjQUFjQSxFQUFFQSxDQUFDQTtnQkFDOUJBLENBQUNBO2dCQUVEYixnQ0FBWUEsR0FBWkEsVUFBYUEsS0FBS0E7b0JBQ2RjLDRCQUE0QkE7b0JBQzVCQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxRQUFRQSxJQUFJQSxLQUFLQSxDQUFDQSxPQUFPQSxDQUFDQSxNQUFNQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTt3QkFDOUNBLElBQUlBLENBQUNBLFFBQVFBLEdBQUdBLElBQUlBLENBQUNBO29CQUN6QkEsQ0FBQ0E7Z0JBQ0xBLENBQUNBO2dCQUVEZCw4QkFBVUEsR0FBVkEsVUFBV0EsS0FBS0E7b0JBQ1plLDBCQUEwQkE7b0JBQzFCQSxJQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxLQUFLQSxDQUFDQTtvQkFDckJBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLENBQUFBLENBQUNBO3dCQUNqQkEsSUFBSUEsQ0FBQ0EsY0FBY0EsRUFBRUEsQ0FBQ0E7b0JBQzFCQSxDQUFDQTtvQkFDREEsS0FBS0EsQ0FBQ0EsY0FBY0EsRUFBRUEsQ0FBQ0E7Z0JBQzNCQSxDQUFDQTtnQkFFRGYsMkJBQU9BLEdBQVBBO29CQUNJZ0IsdUJBQXVCQTtvQkFDdkJBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLENBQUFBLENBQUNBO3dCQUNoQkEsSUFBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0E7b0JBQ2xDQSxDQUFDQTtnQkFDTEEsQ0FBQ0E7Z0JBRURoQiwwQkFBTUEsR0FBTkE7b0JBQ0lpQixJQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxLQUFLQSxDQUFDQTtnQkFDekJBLENBQUNBO2dCQS9JTWpCLGdCQUFNQSxHQUFTQSxTQUFTQSxDQUFDQSxJQUFJQSxFQUFFQSxDQUFDQTtnQkFrSjNDQSxnQkFBQ0E7WUFBREEsQ0EzSkEsQUEySkNBLElBQUE7WUEzSkQsaUNBMkpDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9BaUNvbnRyb2wvQWlDb250cm9sLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtFbGVtZW50UmVmLEF0dHJpYnV0ZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1RpbWVyV3JhcHBlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9hc3luYyc7XG4vL2ltcG9ydCB7aXNQcmVzZW50fSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnO1xuaW1wb3J0IHtLZXlib2FyZEV2ZW50LE1vdXNlRXZlbnR9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvYnJvd3Nlcic7XG5pbXBvcnQge051bWJlcldyYXBwZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZyc7XG5pbXBvcnQge0NPTlNUfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnO1xuaW1wb3J0IHtPYnNlcnZhYmxlV3JhcHBlcixFdmVudEVtaXR0ZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvYXN5bmMnO1xuLy9pbXBvcnQgKiBhcyB1dGlscyBmcm9tICdhaS9jb21wb25lbnRzL3V0aWxzJztcbi8vaW1wb3J0IHtTdHJpbmdDaGFpbn0gZnJvbSAnLi91dGlscyc7XG4vL2ltcG9ydCB7UmVmbGVjdG9yfSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS9yZWZsZWN0aW9uL3JlZmxlY3Rvcic7XG4vL2ltcG9ydCB7TmdDbGFzc30gZnJvbSAnYW5ndWxhcjIvY29tbW9uJztcblxuICAgIC8vZGlyZWN0aXZlczogW05nQ2xhc3NdLFxuICAgIC8vaG9zdDoge1xuICAgIC8vICAnW2F0dHIuZGlzYWJsZWRdJzogJ2Rpc2FibGVkP1wiZGlzYWJsZWRcIjpudWxsJyxcbiAgICAvL30sXG5AQ09OU1QoKVxuZXhwb3J0IGNsYXNzIEtleUNvZGVzIHtcbiAgQENPTlNUKCkgc3RhdGljIEVTQ0FQRSA9IDI3O1xuICBAQ09OU1QoKSBzdGF0aWMgRU5URVIgPSAxMztcbiAgQENPTlNUKCkgc3RhdGljIFNQQUNFID0gMzI7XG4gIEBDT05TVCgpIHN0YXRpYyBVUCA9IDM4O1xuICBAQ09OU1QoKSBzdGF0aWMgRE9XTiA9IDQwO1xufVxuXG5leHBvcnQgY2xhc3MgQWlDb250cm9sIHsgXG4gICAgdGFiaW5kZXg6IG51bWJlcj0wO1xuICAgIGRpc2FibGVkOmJvb2xlYW49ZmFsc2U7XG4gICAgaXNGb2N1czogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGlzQWN0aXZlOiBib29sZWFuID0gZmFsc2U7XG4gICAgaXNIb3ZlcjogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGlzRmlyZTpib29sZWFuPWZhbHNlO1xuICAgIGtleUNvZGU6bnVtYmVyPTA7XG4gICAgXG4gICAgc3RhdGljIG1vYmlsZTpib29sZWFuPUFpQ29udHJvbC5pbml0KCk7XG4gICAgc3RhdGljIGluaXQoKTpib29sZWFue1xuICAgICAgICB2YXIgdXNlckFnZW50ID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgICAgICAgdmFyIG1vYmlsZSA9ICEhdXNlckFnZW50ICYmIC9pUGFkfGlQaG9uZXxBbmRyb2lkLy50ZXN0KHVzZXJBZ2VudCk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc2V0QXR0cmlidXRlKG1vYmlsZT8nbW9iaWxlJzonZGVza3RvcCcsJycpO1xuICAgICAgICByZXR1cm4gbW9iaWxlO1xuICAgIH1cblxuICAgIG9uY2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+PW5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBcbiAgICBzdGF0aWMgbWV0YShtZXRhOmFueSk6YW55e1xuICAgICAgICBpZighbWV0YS5pbnB1dHMpIG1ldGEuaW5wdXRzPVtdO1xuICAgICAgICBtZXRhLmlucHV0cy5wdXNoKCdkaXNhYmxlZCcpO1xuXG4gICAgICAgIGlmKCFtZXRhLm91dHB1dHMpIG1ldGEub3V0cHV0cz1bXTtcbiAgICAgICAgbWV0YS5vdXRwdXRzLnB1c2goJ29uY2xpY2snKTtcbiAgICAgICAgXG4gICAgICAgIGlmKCFtZXRhLmhvc3QpIG1ldGEuaG9zdD17fTtcbiAgICAgICAgbWV0YS5ob3N0WydbY2xhc3MuZGlzYWJsZWRdJ109J2Rpc2FibGVkJztcbiAgICAgICAgbWV0YS5ob3N0WydbY2xhc3MuZm9jdXNdJ109J2lzRm9jdXMnO1xuICAgICAgICBtZXRhLmhvc3RbJ1tjbGFzcy5hY3RpdmVdJ109J2lzQWN0aXZlJztcbiAgICAgICAgbWV0YS5ob3N0WydbY2xhc3MuaG92ZXJdJ109J2lzSG92ZXInO1xuICAgICAgICBtZXRhLmhvc3RbJyh0b3VjaHN0YXJ0KSddPSdvblRvdWNoc3RhcnQoJGV2ZW50KSc7XG4gICAgICAgIG1ldGEuaG9zdFsnKHRvdWNoZW5kKSddPSdvblRvdWNoZW5kKCRldmVudCknO1xuICAgICAgICBtZXRhLmhvc3RbJyhtb3VzZXVwKSddPSdvbk1vdXNldXAoJGV2ZW50KSc7XG4gICAgICAgIG1ldGEuaG9zdFsnKG1vdXNlZG93biknXT0nb25Nb3VzZWRvd24oJGV2ZW50KSc7XG4gICAgICAgIG1ldGEuaG9zdFsnKG1vdXNlb3ZlciknXT0nb25Nb3VzZW92ZXIoKSc7XG4gICAgICAgIG1ldGEuaG9zdFsnKG1vdXNlb3V0KSddPSdvbk1vdXNlb3V0KCknO1xuICAgICAgICBtZXRhLmhvc3RbJyhrZXl1cCknXT0nb25LZXl1cCgkZXZlbnQpJztcbiAgICAgICAgbWV0YS5ob3N0Wycoa2V5ZG93biknXT0nb25LZXlkb3duKCRldmVudCknO1xuICAgICAgICBtZXRhLmhvc3RbJyhmb2N1cyknXT0nb25Gb2N1cygpJztcbiAgICAgICAgbWV0YS5ob3N0WycoYmx1ciknXT0nb25CbHVyKCknO1xuICAgICAgICBtZXRhLmhvc3RbJ1t0YWJpbmRleF0nXT0nZ2V0VGFiSW5kZXgoKSc7XG4gICAgICAgIHJldHVybiBtZXRhO1xuICAgIH1cblxuICAgIGVuYWJsZU1hdGVyaWFsKCl7XG4gICAgICAgIHRoaXMuZWxlLm5hdGl2ZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdhaS1tYXRlcmlhbCcsJycpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBlbGU6IEVsZW1lbnRSZWYpIHtcbiAgICAgICAgXG4gICAgICAgIHZhciBlbDphbnkgPSB0aGlzLmVsZS5uYXRpdmVFbGVtZW50O1xuICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2FpLWNvbnRyb2wnLCcnKTsgXG4gICAgICAgIFxuICAgICAgICB2YXIgdGFiaW5kZXggPSBlbC5nZXRBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XG4gICAgICAgIGlmKHRhYmluZGV4KSB0aGlzLnRhYmluZGV4ID0gTnVtYmVyV3JhcHBlci5wYXJzZUludCh0YWJpbmRleCwgMTApO1xuXG4gICAgICAgIGlmKGVsLmdldEF0dHJpYnV0ZSgnZGlzYWJsZWQnKSlcbiAgICAgICAgICAgIHRoaXMuZGlzYWJsZWQgPSB0cnVlO1xuICAgIH0gIFxuXG4gICAgZ2V0VGFiSW5kZXgoKXtcbiAgICAgICAgaWYodGhpcy5kaXNhYmxlZCkgcmV0dXJuIC0xO1xuICAgICAgICByZXR1cm4gdGhpcy50YWJpbmRleDtcbiAgICB9XG4gICAgXG4gICAgcHJvdGVjdGVkIG9uQ2xpY2soKXtcbiAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIGZpcmVDbGlja0V2ZW50KCl7XG4gICAgICAgIGlmICghdGhpcy5kaXNhYmxlZCAmJiAhdGhpcy5pc0ZpcmUpIHtcbiAgICAgICAgICAgIHRyeXtcbiAgICAgICAgICAgICAgICB0aGlzLmlzRmlyZT10cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMub25DbGljaygpO1xuICAgICAgICAgICAgICAgIE9ic2VydmFibGVXcmFwcGVyLmNhbGxFbWl0KHRoaXMub25jbGljaywgbnVsbCk7XG4gICAgICAgICAgICB9ZmluYWxseXtcbiAgICAgICAgICAgICAgICB0aGlzLmlzRmlyZT1mYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uTW91c2VvdmVyKCkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKCdtb3VzZW92ZXInKTtcbiAgICAgICAgLy9uZWVkIHByZXZlbnQgaW9zL2FuZG9yaWQgc2VuZCBzdHJhbmdlIG1vdXNlb3ZlciBldmVudFxuICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWQgJiYgIUFpQ29udHJvbC5tb2JpbGUpIHRoaXMuaXNIb3ZlciA9IHRydWU7XG4gICAgfVxuICAgIFxuICAgIG9uTW91c2VvdXQoKSB7XG4gICAgICAgIHRoaXMuaXNIb3ZlciA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgfVxuICAgIFxuICAgIG9uTW91c2Vkb3duKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ21vdXNlZG93bicpO1xuICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWQgJiYgZXZlbnQuYnV0dG9uPT0wKSB7XG4gICAgICAgICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBvbk1vdXNldXAoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZygnbW91c2V1cCcpO1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGlmIChldmVudC5idXR0b249PTApIHtcbiAgICAgICAgICAgIHRoaXMuZmlyZUNsaWNrRXZlbnQoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBcbiAgICBvbktleWRvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgLy9maXggaW9zIGJsdWV0b290aCBrZXljb2RlIGJ1Z1xuICAgICAgICB0aGlzLmtleUNvZGU9ZXZlbnQua2V5Q29kZTtcbiAgICAgICAgXG4gICAgICAgIGlmICghdGhpcy5kaXNhYmxlZCAmJiBldmVudC5rZXlDb2RlID09IEtleUNvZGVzLlNQQUNFKSB7XG4gICAgICAgICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vcHJldmVudCBwcmVzcyBzcGFjZSBqdW1wIHRvIGVuZFxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIG9uS2V5dXAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5rZXlDb2RlID09IEtleUNvZGVzLlNQQUNFKSBcbiAgICAgICAgICAgIHRoaXMuZmlyZUNsaWNrRXZlbnQoKTtcbiAgICB9XG4gICAgXG4gICAgb25Ub3VjaHN0YXJ0KGV2ZW50KSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ3RvdWNoc3RhcnQnKTtcbiAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkICYmIGV2ZW50LnRvdWNoZXMubGVuZ3RoID09IDEpIHtcbiAgICAgICAgICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIG9uVG91Y2hlbmQoZXZlbnQpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZygndG91Y2hlbmQnKTtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkKXtcbiAgICAgICAgICAgIHRoaXMuZmlyZUNsaWNrRXZlbnQoKTtcbiAgICAgICAgfVxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIG9uRm9jdXMoKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ2ZvY3VzJyk7XG4gICAgICAgIGlmICghdGhpcy5kaXNhYmxlZCl7XG4gICAgICAgICAgICB0aGlzLmlzRm9jdXMgPSAhdGhpcy5pc0FjdGl2ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBvbkJsdXIoKSB7XG4gICAgICAgIHRoaXMuaXNGb2N1cyA9IGZhbHNlO1xuICAgIH1cblxuICAgIFxufSAiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
