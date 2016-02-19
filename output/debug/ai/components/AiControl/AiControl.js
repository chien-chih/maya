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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlDb250cm9sL0FpQ29udHJvbC50cyJdLCJuYW1lcyI6WyJLZXlDb2RlcyIsIktleUNvZGVzLmNvbnN0cnVjdG9yIiwiQWlDb250cm9sIiwiQWlDb250cm9sLmNvbnN0cnVjdG9yIiwiQWlDb250cm9sLmluaXQiLCJBaUNvbnRyb2wubWV0YSIsIkFpQ29udHJvbC5lbmFibGVNYXRlcmlhbCIsIkFpQ29udHJvbC5nZXRUYWJJbmRleCIsIkFpQ29udHJvbC5vbkNsaWNrIiwiQWlDb250cm9sLm9uTW91c2VPdmVyIiwiQWlDb250cm9sLm9uTW91c2VPdXQiLCJBaUNvbnRyb2wub25Nb3VzZURvd24iLCJBaUNvbnRyb2wub25Nb3VzZVVwIiwiQWlDb250cm9sLm9uS2V5RG93biIsIkFpQ29udHJvbC5vbktleVVwIiwiQWlDb250cm9sLm9uVG91Y2hTdGFydCIsIkFpQ29udHJvbC5vblRvdWNoRW5kIiwiQWlDb250cm9sLm9uRm9jdXMiLCJBaUNvbnRyb2wub25CbHVyIiwiQWlDb250cm9sLmZpcmVDbGlja0V2ZW50IiwiQWlDb250cm9sLm1vdXNlT3ZlciIsIkFpQ29udHJvbC5tb3VzZU91dCIsIkFpQ29udHJvbC5tb3VzZURvd24iLCJBaUNvbnRyb2wubW91c2VVcCIsIkFpQ29udHJvbC5rZXlEb3duIiwiQWlDb250cm9sLmtleVVwIiwiQWlDb250cm9sLnRvdWNoU3RhcnQiLCJBaUNvbnRyb2wudG91Y2hFbmQiLCJBaUNvbnRyb2wuZm9jdXMiLCJBaUNvbnRyb2wuYmx1ciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU9BLCtDQUErQztZQUMvQyxzQ0FBc0M7WUFDdEMsbUVBQW1FO1lBQ25FLDBDQUEwQztZQUV0Qyx3QkFBd0I7WUFDeEIsU0FBUztZQUNULGtEQUFrRDtZQUNsRCxJQUFJO1lBQ1I7Z0JBQUFBO2dCQVVBQyxDQUFDQTtnQkFSaUJELGVBQU1BLEdBQUdBLEVBQUVBLENBQUNBO2dCQUNaQSxjQUFLQSxH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QSxDQUFBQSxDQUFDQTt3QkFDakJBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO3dCQUN2QkEsSUFBSUEsQ0FBQ0EsY0FBY0EsRUFBRUEsQ0FBQ0E7b0JBQzFCQSxDQUFDQTtvQkFDREEsS0FBS0EsQ0FBQ0EsY0FBY0EsRUFBRUEsQ0FBQ0E7Z0JBQzNCQSxDQUFDQTtnQkFFRHpCLHlCQUFLQSxHQUFMQTtvQkFDSTBCLHVCQUF1QkE7b0JBQ3ZCQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFBQSxDQUFDQTt3QkFDaEJBLElBQUlBLENBQUNBLE9BQU9BLEVBQUVBLENBQUNBO3dCQUNmQSxJQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxDQUFDQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQTtvQkFDbENBLENBQUNBO2dCQUNMQSxDQUFDQTtnQkFFRDFCLHdCQUFJQSxHQUFKQTtvQkFDSTJCLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBO3dCQUNmQSxJQUFJQSxDQUFDQSxNQUFNQSxFQUFFQSxDQUFDQTtvQkFDbEJBLElBQUlBLENBQUNBLE9BQU9BLEdBQUdBLEtBQUtBLENBQUNBO2dCQUN6QkEsQ0FBQ0E7Z0JBdExNM0IsZ0JBQU1BLEdBQVNBLFNBQVNBLENBQUNBLElBQUlBLEVBQUVBLENBQUNBO2dCQXlMM0NBLGdCQUFDQTtZQUFEQSxDQW5NQSxBQW1NQ0EsSUFBQTtZQW5NRCxpQ0FtTUMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL0FpQ29udHJvbC9BaUNvbnRyb2wuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0VsZW1lbnRSZWYsQXR0cmlidXRlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7VGltZXJXcmFwcGVyfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2FzeW5jJztcbi8vaW1wb3J0IHtpc1ByZXNlbnR9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZyc7XG5pbXBvcnQge0tleWJvYXJkRXZlbnQsTW91c2VFdmVudH0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9icm93c2VyJztcbmltcG9ydCB7TnVtYmVyV3JhcHBlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9sYW5nJztcbmltcG9ydCB7Q09OU1R9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZyc7XG5pbXBvcnQge09ic2VydmFibGVXcmFwcGVyLEV2ZW50RW1pdHRlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9hc3luYyc7XG4vL2ltcG9ydCAqIGFzIHV0aWxzIGZyb20gJ2FpL2NvbXBvbmVudHMvdXRpbHMnO1xuLy9pbXBvcnQge1N0cmluZ0NoYWlufSBmcm9tICcuL3V0aWxzJztcbi8vaW1wb3J0IHtSZWZsZWN0b3J9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL3JlZmxlY3Rpb24vcmVmbGVjdG9yJztcbi8vaW1wb3J0IHtOZ0NsYXNzfSBmcm9tICdhbmd1bGFyMi9jb21tb24nO1xuXG4gICAgLy9kaXJlY3RpdmVzOiBbTmdDbGFzc10sXG4gICAgLy9ob3N0OiB7XG4gICAgLy8gICdbYXR0ci5kaXNhYmxlZF0nOiAnZGlzYWJsZWQ/XCJkaXNhYmxlZFwiOm51bGwnLFxuICAgIC8vfSxcbkBDT05TVCgpXG5leHBvcnQgY2xhc3MgS2V5Q29kZXMge1xuICBAQ09OU1QoKSBzdGF0aWMgRVNDQVBFID0gMjc7XG4gIEBDT05TVCgpIHN0YXRpYyBFTlRFUiA9IDEzO1xuICBAQ09OU1QoKSBzdGF0aWMgU1BBQ0UgPSAzMjtcbiAgQENPTlNUKCkgc3RhdGljIExFRlQgPSAzNztcbiAgQENPTlNUKCkgc3RhdGljIFVQID0gMzg7XG4gIEBDT05TVCgpIHN0YXRpYyBSSUdIVCA9IDM5O1xuICBAQ09OU1QoKSBzdGF0aWMgRE9XTiA9IDQwO1xuICBcbn1cblxuZXhwb3J0IGNsYXNzIEFpQ29udHJvbCB7IFxuICAgIHRhYmluZGV4OiBudW1iZXI9MDtcbiAgICBkaXNhYmxlZDpib29sZWFuPWZhbHNlO1xuICAgIGlzRm9jdXM6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBpc0FjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGlzSG92ZXI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBpc0ZpcmU6Ym9vbGVhbj1mYWxzZTtcbiAgICBrZXlDb2RlOm51bWJlcj0wO1xuICAgIHZpc2libGU6IGJvb2xlYW4gPSB0cnVlO1xuICAgIFxuICAgIHN0YXRpYyBtb2JpbGU6Ym9vbGVhbj1BaUNvbnRyb2wuaW5pdCgpO1xuICAgIHN0YXRpYyBpbml0KCk6Ym9vbGVhbntcbiAgICAgICAgdmFyIHVzZXJBZ2VudCA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XG4gICAgICAgIHZhciBtb2JpbGUgPSAhIXVzZXJBZ2VudCAmJiAvaVBhZHxpUGhvbmV8QW5kcm9pZC8udGVzdCh1c2VyQWdlbnQpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnNldEF0dHJpYnV0ZShtb2JpbGU/J21vYmlsZSc6J2Rlc2t0b3AnLCcnKTtcbiAgICAgICAgcmV0dXJuIG1vYmlsZTtcbiAgICB9XG5cbiAgICBvbmNsaWNrOiBFdmVudEVtaXR0ZXI8YW55Pj1uZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgXG4gICAgc3RhdGljIG1ldGEobWV0YTphbnksb3B0aW9ucz86YW55KTphbnl7XG4gICAgICAgIGlmKCFvcHRpb25zKSBvcHRpb25zPXt9OyBcbiAgICAgICAgaWYoIW1ldGEuaW5wdXRzKSBtZXRhLmlucHV0cz1bXTtcbiAgICAgICAgaWYoIW1ldGEub3V0cHV0cykgbWV0YS5vdXRwdXRzPVtdO1xuICAgICAgICBpZighbWV0YS5ob3N0KSBtZXRhLmhvc3Q9e307XG5cbiAgICAgICAgbWV0YS5pbnB1dHMucHVzaCgndmlzaWJsZScpO1xuICAgICAgICBtZXRhLmhvc3RbJ1tjbGFzcy5oaWRlXSddPSchdmlzaWJsZSc7XG4gICAgICAgIGlmKCFvcHRpb25zLmlnbm9yZURpc2FibGVkKXtcbiAgICAgICAgICAgIG1ldGEuaW5wdXRzLnB1c2goJ2Rpc2FibGVkJyk7XG4gICAgICAgICAgICBtZXRhLmhvc3RbJ1tjbGFzcy5kaXNhYmxlZF0nXT0nZGlzYWJsZWQnO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZighb3B0aW9ucy5pZ25vcmVGb2N1cyl7XG4gICAgICAgICAgICBtZXRhLmhvc3RbJ1tjbGFzcy5mb2N1c10nXT0naXNGb2N1cyc7XG4gICAgICAgICAgICBtZXRhLmhvc3RbJyhmb2N1cyknXT0nZm9jdXMoKSc7XG4gICAgICAgICAgICBtZXRhLmhvc3RbJyhibHVyKSddPSdibHVyKCknO1xuICAgICAgICAgICAgbWV0YS5ob3N0WydbdGFiaW5kZXhdJ109J2dldFRhYkluZGV4KCknO1xuICAgICAgICB9ICAgICAgICBcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgbWV0YS5ob3N0WydbdGFiaW5kZXhdJ109Jy0xJztcblxuXG4gICAgICAgIGlmKCFvcHRpb25zLmlnbm9yZUhvdmVyKXtcbiAgICAgICAgICAgIG1ldGEuaG9zdFsnW2NsYXNzLmhvdmVyXSddPSdpc0hvdmVyJztcbiAgICAgICAgICAgIG1ldGEuaG9zdFsnKG1vdXNlb3ZlciknXT0nbW91c2VPdmVyKCknO1xuICAgICAgICAgICAgbWV0YS5ob3N0WycobW91c2VvdXQpJ109J21vdXNlT3V0KCknO1xuICAgICAgICB9ICAgICAgICBcblxuICAgICAgICBpZighb3B0aW9ucy5pZ25vcmVBY3RpdmUpe1xuICAgICAgICAgICAgbWV0YS5vdXRwdXRzLnB1c2goJ29uY2xpY2snKTtcbiAgICAgICAgICAgIG1ldGEuaG9zdFsnW2NsYXNzLmFjdGl2ZV0nXT0naXNBY3RpdmUnO1xuICAgICAgICAgICAgbWV0YS5ob3N0WycobW91c2V1cCknXT0nbW91c2VVcCgkZXZlbnQpJztcbiAgICAgICAgICAgIG1ldGEuaG9zdFsnKG1vdXNlZG93biknXT0nbW91c2VEb3duKCRldmVudCknO1xuICAgICAgICAgICAgbWV0YS5ob3N0WycodG91Y2hzdGFydCknXT0ndG91Y2hTdGFydCgkZXZlbnQpJztcbiAgICAgICAgICAgIG1ldGEuaG9zdFsnKHRvdWNoZW5kKSddPSd0b3VjaEVuZCgkZXZlbnQpJztcbiAgICAgICAgICAgIG1ldGEuaG9zdFsnKGtleXVwKSddPSdrZXlVcCgkZXZlbnQpJztcbiAgICAgICAgICAgIG1ldGEuaG9zdFsnKGtleWRvd24pJ109J2tleURvd24oJGV2ZW50KSc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1ldGE7XG4gICAgfVxuXG4gICAgZW5hYmxlTWF0ZXJpYWwoKXtcbiAgICAgICAgdGhpcy5lbGUubmF0aXZlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FpLW1hdGVyaWFsJywnJyk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIGVsZTogRWxlbWVudFJlZikge1xuICAgICAgICB2YXIgZWw6YW55ID0gdGhpcy5lbGUubmF0aXZlRWxlbWVudDtcbiAgICAgICAgZWwuc2V0QXR0cmlidXRlKCdhaS1jb250cm9sJywnJyk7IFxuICAgICAgICBcbiAgICAgICAgdmFyIHRhYmluZGV4ID0gZWwuZ2V0QXR0cmlidXRlKCd0YWJpbmRleCcpO1xuICAgICAgICBpZih0YWJpbmRleCkgdGhpcy50YWJpbmRleCA9IE51bWJlcldyYXBwZXIucGFyc2VJbnQodGFiaW5kZXgsIDEwKTtcbiAgICB9ICBcblxuICAgIGdldFRhYkluZGV4KCl7XG4gICAgICAgIGlmKHRoaXMuZGlzYWJsZWQgfHwgIXRoaXMudmlzaWJsZSkgcmV0dXJuIC0xO1xuICAgICAgICByZXR1cm4gdGhpcy50YWJpbmRleDtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBvbkNsaWNrKCl7fVxuICAgIHByb3RlY3RlZCBvbk1vdXNlT3ZlcigpIHt9XG4gICAgcHJvdGVjdGVkIG9uTW91c2VPdXQoKSB7fVxuICAgIHByb3RlY3RlZCBvbk1vdXNlRG93bihldmVudDogTW91c2VFdmVudCkge31cbiAgICBwcm90ZWN0ZWQgb25Nb3VzZVVwKGV2ZW50OiBNb3VzZUV2ZW50KSB7fVxuICAgIHByb3RlY3RlZCBvbktleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHt9XG4gICAgcHJvdGVjdGVkIG9uS2V5VXAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHt9XG4gICAgcHJvdGVjdGVkIG9uVG91Y2hTdGFydChldmVudCkge31cbiAgICBwcm90ZWN0ZWQgb25Ub3VjaEVuZChldmVudCkge31cbiAgICBwcm90ZWN0ZWQgb25Gb2N1cygpIHt9XG4gICAgcHJvdGVjdGVkIG9uQmx1cigpIHt9XG4gICAgXG4gICAgZmlyZUNsaWNrRXZlbnQoKXtcbiAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkICYmICF0aGlzLmlzRmlyZSkge1xuICAgICAgICAgICAgdHJ5e1xuICAgICAgICAgICAgICAgIHRoaXMub25DbGljaygpO1xuICAgICAgICAgICAgICAgIHRoaXMuaXNGaXJlPXRydWU7XG4gICAgICAgICAgICAgICAgT2JzZXJ2YWJsZVdyYXBwZXIuY2FsbEVtaXQodGhpcy5vbmNsaWNrLCBudWxsKTtcbiAgICAgICAgICAgIH1maW5hbGx5e1xuICAgICAgICAgICAgICAgIHRoaXMuaXNGaXJlPWZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbW91c2VPdmVyKCkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKCdtb3VzZW92ZXInKTtcbiAgICAgICAgLy9uZWVkIHByZXZlbnQgaW9zL2FuZG9yaWQgc2VuZCBzdHJhbmdlIG1vdXNlb3ZlciBldmVudFxuICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWQgJiYgIUFpQ29udHJvbC5tb2JpbGUpIHtcbiAgICAgICAgICAgIHRoaXMub25Nb3VzZU92ZXIoKTtcbiAgICAgICAgICAgIHRoaXMuaXNIb3ZlciA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgbW91c2VPdXQoKSB7XG4gICAgICAgIHRoaXMuaXNIb3ZlciA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGlmICghdGhpcy5kaXNhYmxlZCAmJiAhQWlDb250cm9sLm1vYmlsZSkgXG4gICAgICAgICAgICB0aGlzLm9uTW91c2VPdXQoKTtcbiAgICB9XG4gICAgXG4gICAgbW91c2VEb3duKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ21vdXNlZG93bicpO1xuICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWQgJiYgZXZlbnQuYnV0dG9uPT0wKSB7XG4gICAgICAgICAgICB0aGlzLm9uTW91c2VEb3duKGV2ZW50KTtcbiAgICAgICAgICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIG1vdXNlVXAoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZygnbW91c2V1cCcpO1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGlmICghdGhpcy5kaXNhYmxlZCAmJiBldmVudC5idXR0b249PTApIHtcbiAgICAgICAgICAgIHRoaXMub25Nb3VzZVVwKGV2ZW50KTtcbiAgICAgICAgICAgIHRoaXMuZmlyZUNsaWNrRXZlbnQoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBcbiAgICBrZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIC8vZml4IGlvcyBibHVldG9vdGgga2V5Y29kZSBidWdcbiAgICAgICAgdGhpcy5rZXlDb2RlPWV2ZW50LmtleUNvZGU7XG4gICAgICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5vbktleURvd24oZXZlbnQpO1xuICAgICAgICAgICAgaWYoZXZlbnQua2V5Q29kZSA9PSBLZXlDb2Rlcy5TUEFDRSl7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgLy9wcmV2ZW50IHByZXNzIHNwYWNlIGp1bXAgdG8gZW5kXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBrZXlVcChldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMub25LZXlVcChldmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5rZXlDb2RlID09IEtleUNvZGVzLlNQQUNFKSBcbiAgICAgICAgICAgIHRoaXMuZmlyZUNsaWNrRXZlbnQoKTtcbiAgICB9XG4gICAgXG4gICAgdG91Y2hTdGFydChldmVudCkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKCd0b3VjaHN0YXJ0Jyk7XG4gICAgICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5vblRvdWNoU3RhcnQoZXZlbnQpO1xuICAgICAgICAgICAgaWYoZXZlbnQudG91Y2hlcy5sZW5ndGggPT0gMSlcbiAgICAgICAgICAgICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICB0b3VjaEVuZChldmVudCkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKCd0b3VjaGVuZCcpO1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWQpe1xuICAgICAgICAgICAgdGhpcy5vblRvdWNoRW5kKGV2ZW50KTtcbiAgICAgICAgICAgIHRoaXMuZmlyZUNsaWNrRXZlbnQoKTtcbiAgICAgICAgfVxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIGZvY3VzKCkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKCdmb2N1cycpO1xuICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWQpe1xuICAgICAgICAgICAgdGhpcy5vbkZvY3VzKCk7XG4gICAgICAgICAgICB0aGlzLmlzRm9jdXMgPSAhdGhpcy5pc0FjdGl2ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBibHVyKCkge1xuICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWQpXG4gICAgICAgICAgICB0aGlzLm9uQmx1cigpO1xuICAgICAgICB0aGlzLmlzRm9jdXMgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBcbn0gIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
