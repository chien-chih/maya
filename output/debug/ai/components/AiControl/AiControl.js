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
                    meta.host['(touchstart)'] = 'touchStart($event)';
                    meta.host['(touchend)'] = 'touchEnd($event)';
                    meta.host['(mouseup)'] = 'mouseUp($event)';
                    meta.host['(mousedown)'] = 'mouseDown($event)';
                    meta.host['(mouseover)'] = 'mouseOver()';
                    meta.host['(mouseout)'] = 'mouseOut()';
                    meta.host['(keyup)'] = 'keyUp($event)';
                    meta.host['(keydown)'] = 'keyDown($event)';
                    meta.host['(focus)'] = 'focus()';
                    meta.host['(blur)'] = 'blur()';
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlDb250cm9sL0FpQ29udHJvbC50cyJdLCJuYW1lcyI6WyJLZXlDb2RlcyIsIktleUNvZGVzLmNvbnN0cnVjdG9yIiwiQWlDb250cm9sIiwiQWlDb250cm9sLmNvbnN0cnVjdG9yIiwiQWlDb250cm9sLmluaXQiLCJBaUNvbnRyb2wubWV0YSIsIkFpQ29udHJvbC5lbmFibGVNYXRlcmlhbCIsIkFpQ29udHJvbC5nZXRUYWJJbmRleCIsIkFpQ29udHJvbC5vbkNsaWNrIiwiQWlDb250cm9sLm9uTW91c2VPdmVyIiwiQWlDb250cm9sLm9uTW91c2VPdXQiLCJBaUNvbnRyb2wub25Nb3VzZURvd24iLCJBaUNvbnRyb2wub25Nb3VzZVVwIiwiQWlDb250cm9sLm9uS2V5RG93biIsIkFpQ29udHJvbC5vbktleVVwIiwiQWlDb250cm9sLm9uVG91Y2hTdGFydCIsIkFpQ29udHJvbC5vblRvdWNoRW5kIiwiQWlDb250cm9sLm9uRm9jdXMiLCJBaUNvbnRyb2wub25CbHVyIiwiQWlDb250cm9sLmZpcmVDbGlja0V2ZW50IiwiQWlDb250cm9sLm1vdXNlT3ZlciIsIkFpQ29udHJvbC5tb3VzZU91dCIsIkFpQ29udHJvbC5tb3VzZURvd24iLCJBaUNvbnRyb2wubW91c2VVcCIsIkFpQ29udHJvbC5rZXlEb3duIiwiQWlDb250cm9sLmtleVVwIiwiQWlDb250cm9sLnRvdWNoU3RhcnQiLCJBaUNvbnRyb2wudG91Y2hFbmQiLCJBaUNvbnRyb2wuZm9jdXMiLCJBaUNvbnRyb2wuYmx1ciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU9BLCtDQUErQztZQUMvQyxzQ0FBc0M7WUFDdEMsbUVBQW1FO1lBQ25FLDBDQUEwQztZQUV0Qyx3QkFBd0I7WUFDeEIsU0FBUztZQUNULGtEQUFrRDtZQUNsRCxJQUFJO1lBQ1I7Z0JBQUFBO2dCQVVBQyxDQUFDQTtnQkFSaUJELGVBQU1BLEdBQUdBLEVBQUVBLENBQUNBO2dCQUNaQSxjQUFLQSxH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ekJBLENBQUNBO2dCQXpLTTNCLGdCQUFNQSxHQUFTQSxTQUFTQSxDQUFDQSxJQUFJQSxFQUFFQSxDQUFDQTtnQkE0SzNDQSxnQkFBQ0E7WUFBREEsQ0FyTEEsQUFxTENBLElBQUE7WUFyTEQsaUNBcUxDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9BaUNvbnRyb2wvQWlDb250cm9sLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtFbGVtZW50UmVmLEF0dHJpYnV0ZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1RpbWVyV3JhcHBlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9hc3luYyc7XG4vL2ltcG9ydCB7aXNQcmVzZW50fSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnO1xuaW1wb3J0IHtLZXlib2FyZEV2ZW50LE1vdXNlRXZlbnR9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvYnJvd3Nlcic7XG5pbXBvcnQge051bWJlcldyYXBwZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZyc7XG5pbXBvcnQge0NPTlNUfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnO1xuaW1wb3J0IHtPYnNlcnZhYmxlV3JhcHBlcixFdmVudEVtaXR0ZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvYXN5bmMnO1xuLy9pbXBvcnQgKiBhcyB1dGlscyBmcm9tICdhaS9jb21wb25lbnRzL3V0aWxzJztcbi8vaW1wb3J0IHtTdHJpbmdDaGFpbn0gZnJvbSAnLi91dGlscyc7XG4vL2ltcG9ydCB7UmVmbGVjdG9yfSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS9yZWZsZWN0aW9uL3JlZmxlY3Rvcic7XG4vL2ltcG9ydCB7TmdDbGFzc30gZnJvbSAnYW5ndWxhcjIvY29tbW9uJztcblxuICAgIC8vZGlyZWN0aXZlczogW05nQ2xhc3NdLFxuICAgIC8vaG9zdDoge1xuICAgIC8vICAnW2F0dHIuZGlzYWJsZWRdJzogJ2Rpc2FibGVkP1wiZGlzYWJsZWRcIjpudWxsJyxcbiAgICAvL30sXG5AQ09OU1QoKVxuZXhwb3J0IGNsYXNzIEtleUNvZGVzIHtcbiAgQENPTlNUKCkgc3RhdGljIEVTQ0FQRSA9IDI3O1xuICBAQ09OU1QoKSBzdGF0aWMgRU5URVIgPSAxMztcbiAgQENPTlNUKCkgc3RhdGljIFNQQUNFID0gMzI7XG4gIEBDT05TVCgpIHN0YXRpYyBMRUZUID0gMzc7XG4gIEBDT05TVCgpIHN0YXRpYyBVUCA9IDM4O1xuICBAQ09OU1QoKSBzdGF0aWMgUklHSFQgPSAzOTtcbiAgQENPTlNUKCkgc3RhdGljIERPV04gPSA0MDtcbiAgXG59XG5cbmV4cG9ydCBjbGFzcyBBaUNvbnRyb2wgeyBcbiAgICB0YWJpbmRleDogbnVtYmVyPTA7XG4gICAgZGlzYWJsZWQ6Ym9vbGVhbj1mYWxzZTtcbiAgICBpc0ZvY3VzOiBib29sZWFuID0gZmFsc2U7XG4gICAgaXNBY3RpdmU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBpc0hvdmVyOiBib29sZWFuID0gZmFsc2U7XG4gICAgaXNGaXJlOmJvb2xlYW49ZmFsc2U7XG4gICAga2V5Q29kZTpudW1iZXI9MDtcbiAgICBcbiAgICBzdGF0aWMgbW9iaWxlOmJvb2xlYW49QWlDb250cm9sLmluaXQoKTtcbiAgICBzdGF0aWMgaW5pdCgpOmJvb2xlYW57XG4gICAgICAgIHZhciB1c2VyQWdlbnQgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xuICAgICAgICB2YXIgbW9iaWxlID0gISF1c2VyQWdlbnQgJiYgL2lQYWR8aVBob25lfEFuZHJvaWQvLnRlc3QodXNlckFnZW50KTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zZXRBdHRyaWJ1dGUobW9iaWxlPydtb2JpbGUnOidkZXNrdG9wJywnJyk7XG4gICAgICAgIHJldHVybiBtb2JpbGU7XG4gICAgfVxuXG4gICAgb25jbGljazogRXZlbnRFbWl0dGVyPGFueT49bmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIFxuICAgIHN0YXRpYyBtZXRhKG1ldGE6YW55KTphbnl7XG4gICAgICAgIGlmKCFtZXRhLmlucHV0cykgbWV0YS5pbnB1dHM9W107XG4gICAgICAgIG1ldGEuaW5wdXRzLnB1c2goJ2Rpc2FibGVkJyk7XG5cbiAgICAgICAgaWYoIW1ldGEub3V0cHV0cykgbWV0YS5vdXRwdXRzPVtdO1xuICAgICAgICBtZXRhLm91dHB1dHMucHVzaCgnb25jbGljaycpO1xuICAgICAgICBcbiAgICAgICAgaWYoIW1ldGEuaG9zdCkgbWV0YS5ob3N0PXt9O1xuICAgICAgICBtZXRhLmhvc3RbJ1tjbGFzcy5kaXNhYmxlZF0nXT0nZGlzYWJsZWQnO1xuICAgICAgICBtZXRhLmhvc3RbJ1tjbGFzcy5mb2N1c10nXT0naXNGb2N1cyc7XG4gICAgICAgIG1ldGEuaG9zdFsnW2NsYXNzLmFjdGl2ZV0nXT0naXNBY3RpdmUnO1xuICAgICAgICBtZXRhLmhvc3RbJ1tjbGFzcy5ob3Zlcl0nXT0naXNIb3Zlcic7XG4gICAgICAgIG1ldGEuaG9zdFsnKHRvdWNoc3RhcnQpJ109J3RvdWNoU3RhcnQoJGV2ZW50KSc7XG4gICAgICAgIG1ldGEuaG9zdFsnKHRvdWNoZW5kKSddPSd0b3VjaEVuZCgkZXZlbnQpJztcbiAgICAgICAgbWV0YS5ob3N0WycobW91c2V1cCknXT0nbW91c2VVcCgkZXZlbnQpJztcbiAgICAgICAgbWV0YS5ob3N0WycobW91c2Vkb3duKSddPSdtb3VzZURvd24oJGV2ZW50KSc7XG4gICAgICAgIG1ldGEuaG9zdFsnKG1vdXNlb3ZlciknXT0nbW91c2VPdmVyKCknO1xuICAgICAgICBtZXRhLmhvc3RbJyhtb3VzZW91dCknXT0nbW91c2VPdXQoKSc7XG4gICAgICAgIG1ldGEuaG9zdFsnKGtleXVwKSddPSdrZXlVcCgkZXZlbnQpJztcbiAgICAgICAgbWV0YS5ob3N0Wycoa2V5ZG93biknXT0na2V5RG93bigkZXZlbnQpJztcbiAgICAgICAgbWV0YS5ob3N0WycoZm9jdXMpJ109J2ZvY3VzKCknO1xuICAgICAgICBtZXRhLmhvc3RbJyhibHVyKSddPSdibHVyKCknO1xuICAgICAgICBtZXRhLmhvc3RbJ1t0YWJpbmRleF0nXT0nZ2V0VGFiSW5kZXgoKSc7XG4gICAgICAgIHJldHVybiBtZXRhO1xuICAgIH1cblxuICAgIGVuYWJsZU1hdGVyaWFsKCl7XG4gICAgICAgIHRoaXMuZWxlLm5hdGl2ZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdhaS1tYXRlcmlhbCcsJycpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBlbGU6IEVsZW1lbnRSZWYpIHtcbiAgICAgICAgXG4gICAgICAgIHZhciBlbDphbnkgPSB0aGlzLmVsZS5uYXRpdmVFbGVtZW50O1xuICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2FpLWNvbnRyb2wnLCcnKTsgXG4gICAgICAgIFxuICAgICAgICB2YXIgdGFiaW5kZXggPSBlbC5nZXRBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XG4gICAgICAgIGlmKHRhYmluZGV4KSB0aGlzLnRhYmluZGV4ID0gTnVtYmVyV3JhcHBlci5wYXJzZUludCh0YWJpbmRleCwgMTApO1xuXG4gICAgICAgIGlmKGVsLmdldEF0dHJpYnV0ZSgnZGlzYWJsZWQnKSlcbiAgICAgICAgICAgIHRoaXMuZGlzYWJsZWQgPSB0cnVlO1xuICAgIH0gIFxuXG4gICAgZ2V0VGFiSW5kZXgoKXtcbiAgICAgICAgaWYodGhpcy5kaXNhYmxlZCkgcmV0dXJuIC0xO1xuICAgICAgICByZXR1cm4gdGhpcy50YWJpbmRleDtcbiAgICB9XG4gICAgXG4gICAgcHJvdGVjdGVkIG9uQ2xpY2soKXt9XG4gICAgcHJvdGVjdGVkIG9uTW91c2VPdmVyKCkge31cbiAgICBwcm90ZWN0ZWQgb25Nb3VzZU91dCgpIHt9XG4gICAgcHJvdGVjdGVkIG9uTW91c2VEb3duKGV2ZW50OiBNb3VzZUV2ZW50KSB7fVxuICAgIHByb3RlY3RlZCBvbk1vdXNlVXAoZXZlbnQ6IE1vdXNlRXZlbnQpIHt9XG4gICAgcHJvdGVjdGVkIG9uS2V5RG93bihldmVudDogS2V5Ym9hcmRFdmVudCkge31cbiAgICBwcm90ZWN0ZWQgb25LZXlVcChldmVudDogS2V5Ym9hcmRFdmVudCkge31cbiAgICBwcm90ZWN0ZWQgb25Ub3VjaFN0YXJ0KGV2ZW50KSB7fVxuICAgIHByb3RlY3RlZCBvblRvdWNoRW5kKGV2ZW50KSB7fVxuICAgIHByb3RlY3RlZCBvbkZvY3VzKCkge31cbiAgICBwcm90ZWN0ZWQgb25CbHVyKCkge31cbiAgICBcbiAgICBmaXJlQ2xpY2tFdmVudCgpe1xuICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWQgJiYgIXRoaXMuaXNGaXJlKSB7XG4gICAgICAgICAgICB0cnl7XG4gICAgICAgICAgICAgICAgdGhpcy5vbkNsaWNrKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0ZpcmU9dHJ1ZTtcbiAgICAgICAgICAgICAgICBPYnNlcnZhYmxlV3JhcHBlci5jYWxsRW1pdCh0aGlzLm9uY2xpY2ssIG51bGwpO1xuICAgICAgICAgICAgfWZpbmFsbHl7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0ZpcmU9ZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtb3VzZU92ZXIoKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ21vdXNlb3ZlcicpO1xuICAgICAgICAvL25lZWQgcHJldmVudCBpb3MvYW5kb3JpZCBzZW5kIHN0cmFuZ2UgbW91c2VvdmVyIGV2ZW50XG4gICAgICAgIGlmICghdGhpcy5kaXNhYmxlZCAmJiAhQWlDb250cm9sLm1vYmlsZSkge1xuICAgICAgICAgICAgdGhpcy5vbk1vdXNlT3ZlcigpO1xuICAgICAgICAgICAgdGhpcy5pc0hvdmVyID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBtb3VzZU91dCgpIHtcbiAgICAgICAgdGhpcy5pc0hvdmVyID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkICYmICFBaUNvbnRyb2wubW9iaWxlKSBcbiAgICAgICAgICAgIHRoaXMub25Nb3VzZU91dCgpO1xuICAgIH1cbiAgICBcbiAgICBtb3VzZURvd24oZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZygnbW91c2Vkb3duJyk7XG4gICAgICAgIGlmICghdGhpcy5kaXNhYmxlZCAmJiBldmVudC5idXR0b249PTApIHtcbiAgICAgICAgICAgIHRoaXMub25Nb3VzZURvd24oZXZlbnQpO1xuICAgICAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgbW91c2VVcChldmVudDogTW91c2VFdmVudCkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKCdtb3VzZXVwJyk7XG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkICYmIGV2ZW50LmJ1dHRvbj09MCkge1xuICAgICAgICAgICAgdGhpcy5vbk1vdXNlVXAoZXZlbnQpO1xuICAgICAgICAgICAgdGhpcy5maXJlQ2xpY2tFdmVudCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIFxuICAgIGtleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgLy9maXggaW9zIGJsdWV0b290aCBrZXljb2RlIGJ1Z1xuICAgICAgICB0aGlzLmtleUNvZGU9ZXZlbnQua2V5Q29kZTtcbiAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICB0aGlzLm9uS2V5RG93bihldmVudCk7XG4gICAgICAgICAgICBpZihldmVudC5rZXlDb2RlID09IEtleUNvZGVzLlNQQUNFKXtcbiAgICAgICAgICAgICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAvL3ByZXZlbnQgcHJlc3Mgc3BhY2UganVtcCB0byBlbmRcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGtleVVwKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5vbktleVVwKGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLmtleUNvZGUgPT0gS2V5Q29kZXMuU1BBQ0UpIFxuICAgICAgICAgICAgdGhpcy5maXJlQ2xpY2tFdmVudCgpO1xuICAgIH1cbiAgICBcbiAgICB0b3VjaFN0YXJ0KGV2ZW50KSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ3RvdWNoc3RhcnQnKTtcbiAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICB0aGlzLm9uVG91Y2hTdGFydChldmVudCk7XG4gICAgICAgICAgICBpZihldmVudC50b3VjaGVzLmxlbmd0aCA9PSAxKVxuICAgICAgICAgICAgICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHRvdWNoRW5kKGV2ZW50KSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ3RvdWNoZW5kJyk7XG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgIGlmICghdGhpcy5kaXNhYmxlZCl7XG4gICAgICAgICAgICB0aGlzLm9uVG91Y2hFbmQoZXZlbnQpO1xuICAgICAgICAgICAgdGhpcy5maXJlQ2xpY2tFdmVudCgpO1xuICAgICAgICB9XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgZm9jdXMoKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ2ZvY3VzJyk7XG4gICAgICAgIGlmICghdGhpcy5kaXNhYmxlZCl7XG4gICAgICAgICAgICB0aGlzLm9uRm9jdXMoKTtcbiAgICAgICAgICAgIHRoaXMuaXNGb2N1cyA9ICF0aGlzLmlzQWN0aXZlO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGJsdXIoKSB7XG4gICAgICAgIGlmICghdGhpcy5kaXNhYmxlZClcbiAgICAgICAgICAgIHRoaXMub25CbHVyKCk7XG4gICAgICAgIHRoaXMuaXNGb2N1cyA9IGZhbHNlO1xuICAgIH1cblxuICAgIFxufSAiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
