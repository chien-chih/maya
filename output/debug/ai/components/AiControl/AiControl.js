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
                    this.onclick = new async_1.EventEmitter();
                    var el = this.ele.nativeElement;
                    el.setAttribute('ai-control', '');
                    var tabindex = el.getAttribute('tabindex');
                    if (tabindex)
                        this.tabindex = lang_1.NumberWrapper.parseInt(tabindex, 10);
                    if (el.getAttribute('disabled'))
                        this.disabled = true;
                }
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
                    if (!this.disabled) {
                        this.onClick();
                        async_1.ObservableWrapper.callEmit(this.onclick, null);
                    }
                };
                AiControl.prototype.onMouseover = function () {
                    if (!this.disabled)
                        this.isHover = true;
                };
                AiControl.prototype.onMouseout = function () {
                    this.isHover = false;
                    this.isActive = false;
                };
                AiControl.prototype.onMousedown = function (event) {
                    if (!this.disabled && event.button == 0) {
                        this.isActive = true;
                    }
                };
                AiControl.prototype.onMouseup = function (event) {
                    this.isActive = false;
                    if (event.button == 0)
                        this.fireClickEvent();
                };
                AiControl.prototype.onKeydown = function (event) {
                    if (!this.disabled && event.keyCode == KeyCodes.SPACE || event.keyCode == KeyCodes.ENTER) {
                        this.isActive = true;
                    }
                };
                AiControl.prototype.onKeyup = function (event) {
                    this.isActive = false;
                    if (event.keyCode == KeyCodes.SPACE || event.keyCode == KeyCodes.ENTER)
                        this.fireClickEvent();
                };
                AiControl.prototype.onTouchstart = function (event) {
                    if (!this.disabled && event.touches.length == 1) {
                        this.isActive = true;
                    }
                };
                AiControl.prototype.onTouchend = function (event) {
                    this.isActive = false;
                    if (event.touches.length == 1)
                        this.fireClickEvent();
                };
                AiControl.prototype.onFocus = function () {
                    if (!this.disabled)
                        this.isFocus = !this.isActive;
                };
                AiControl.prototype.onBlur = function () {
                    this.isFocus = false;
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
                return AiControl;
            })();
            exports_1("AiControl", AiControl);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlDb250cm9sL0FpQ29udHJvbC50cyJdLCJuYW1lcyI6WyJLZXlDb2RlcyIsIktleUNvZGVzLmNvbnN0cnVjdG9yIiwiQWlDb250cm9sIiwiQWlDb250cm9sLmNvbnN0cnVjdG9yIiwiQWlDb250cm9sLmVuYWJsZU1hdGVyaWFsIiwiQWlDb250cm9sLmdldFRhYkluZGV4IiwiQWlDb250cm9sLm9uQ2xpY2siLCJBaUNvbnRyb2wuZmlyZUNsaWNrRXZlbnQiLCJBaUNvbnRyb2wub25Nb3VzZW92ZXIiLCJBaUNvbnRyb2wub25Nb3VzZW91dCIsIkFpQ29udHJvbC5vbk1vdXNlZG93biIsIkFpQ29udHJvbC5vbk1vdXNldXAiLCJBaUNvbnRyb2wub25LZXlkb3duIiwiQWlDb250cm9sLm9uS2V5dXAiLCJBaUNvbnRyb2wub25Ub3VjaHN0YXJ0IiwiQWlDb250cm9sLm9uVG91Y2hlbmQiLCJBaUNvbnRyb2wub25Gb2N1cyIsIkFpQ29udHJvbC5vbkJsdXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFPQSwrQ0FBK0M7WUFDL0Msc0NBQXNDO1lBQ3RDLG1FQUFtRTtZQUNuRSwwQ0FBMEM7WUFFdEMsd0JBQXdCO1lBQ3hCLFNBQVM7WUFDVCxrREFBa0Q7WUFDbEQsSUFBSTtZQUNSO2dCQUFBQTtnQkFPQUMsQ0FBQ0E7Z0JBTGlCRCxlQUFNQSxHQUFHQSxFQUFFQSxDQUFDQTtnQkFDWkEsY0FBS0EsR0FBR0EsRUFBRUEsQ0FBQ0E7Z0JBQ1hBLGNBQUtBLEdBQUdBLEVBQUVBLENBQUNBO2dCQUNYQSxXQUFFQSxHQUFHQSxFQUFFQSxDQUFDQTtnQkFDUkEsYUFBSUEsR0FBR0EsRUFBRUEsQ0FBQ0E7Z0JBSjFCQTtvQkFBQ0EsWUFBS0EsRUFBRUE7O21CQUFRQSxrQkFBTUEsVUFBTUE7Z0JBQzVCQTtvQkFBQ0EsWUFBS0EsRUFBRUE7O21CQUFRQSxpQkFBS0EsVUFBTUE7Z0JBQzNCQTtvQkFBQ0EsWUFBS0EsRUFBRUE7O21C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QkFBQ0E7WUFBREEsQ0F4SEEsQUF3SENBLElBQUE7WUF4SEQsaUNBd0hDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9BaUNvbnRyb2wvQWlDb250cm9sLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtFbGVtZW50UmVmLEF0dHJpYnV0ZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1RpbWVyV3JhcHBlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9hc3luYyc7XG4vL2ltcG9ydCB7aXNQcmVzZW50fSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnO1xuaW1wb3J0IHtLZXlib2FyZEV2ZW50LE1vdXNlRXZlbnR9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvYnJvd3Nlcic7XG5pbXBvcnQge051bWJlcldyYXBwZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZyc7XG5pbXBvcnQge0NPTlNUfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnO1xuaW1wb3J0IHtPYnNlcnZhYmxlV3JhcHBlcixFdmVudEVtaXR0ZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvYXN5bmMnO1xuLy9pbXBvcnQgKiBhcyB1dGlscyBmcm9tICdhaS9jb21wb25lbnRzL3V0aWxzJztcbi8vaW1wb3J0IHtTdHJpbmdDaGFpbn0gZnJvbSAnLi91dGlscyc7XG4vL2ltcG9ydCB7UmVmbGVjdG9yfSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS9yZWZsZWN0aW9uL3JlZmxlY3Rvcic7XG4vL2ltcG9ydCB7TmdDbGFzc30gZnJvbSAnYW5ndWxhcjIvY29tbW9uJztcblxuICAgIC8vZGlyZWN0aXZlczogW05nQ2xhc3NdLFxuICAgIC8vaG9zdDoge1xuICAgIC8vICAnW2F0dHIuZGlzYWJsZWRdJzogJ2Rpc2FibGVkP1wiZGlzYWJsZWRcIjpudWxsJyxcbiAgICAvL30sXG5AQ09OU1QoKVxuZXhwb3J0IGNsYXNzIEtleUNvZGVzIHtcbiAgQENPTlNUKCkgc3RhdGljIEVTQ0FQRSA9IDI3O1xuICBAQ09OU1QoKSBzdGF0aWMgRU5URVIgPSAxMztcbiAgQENPTlNUKCkgc3RhdGljIFNQQUNFID0gMzI7XG4gIEBDT05TVCgpIHN0YXRpYyBVUCA9IDM4O1xuICBAQ09OU1QoKSBzdGF0aWMgRE9XTiA9IDQwO1xufVxuXG5leHBvcnQgY2xhc3MgQWlDb250cm9sIHsgXG4gICAgdGFiaW5kZXg6IG51bWJlcj0wO1xuICAgIGRpc2FibGVkOmJvb2xlYW49ZmFsc2U7XG4gICAgaXNGb2N1czogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGlzQWN0aXZlOiBib29sZWFuID0gZmFsc2U7XG4gICAgaXNIb3ZlcjogYm9vbGVhbiA9IGZhbHNlO1xuICAgIFxuICAgIG9uY2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+PW5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBcbiAgICBzdGF0aWMgbWV0YSA9IGZ1bmN0aW9uIChtZXRhOmFueSk6YW55e1xuICAgICAgICBpZighbWV0YS5pbnB1dHMpIG1ldGEuaW5wdXRzPVtdO1xuICAgICAgICBtZXRhLmlucHV0cy5wdXNoKCdkaXNhYmxlZCcpO1xuXG4gICAgICAgIGlmKCFtZXRhLm91dHB1dHMpIG1ldGEub3V0cHV0cz1bXTtcbiAgICAgICAgbWV0YS5vdXRwdXRzLnB1c2goJ29uY2xpY2snKTtcbiAgICAgICAgXG4gICAgICAgIGlmKCFtZXRhLmhvc3QpIG1ldGEuaG9zdD17fTtcbiAgICAgICAgbWV0YS5ob3N0WydbY2xhc3MuZGlzYWJsZWRdJ109J2Rpc2FibGVkJztcbiAgICAgICAgbWV0YS5ob3N0WydbY2xhc3MuZm9jdXNdJ109J2lzRm9jdXMnO1xuICAgICAgICBtZXRhLmhvc3RbJ1tjbGFzcy5hY3RpdmVdJ109J2lzQWN0aXZlJztcbiAgICAgICAgbWV0YS5ob3N0WydbY2xhc3MuaG92ZXJdJ109J2lzSG92ZXInO1xuICAgICAgICBtZXRhLmhvc3RbJyh0b3VjaHN0YXJ0KSddPSdvblRvdWNoc3RhcnQoJGV2ZW50KSc7XG4gICAgICAgIG1ldGEuaG9zdFsnKHRvdWNoZW5kKSddPSdvblRvdWNoZW5kKCRldmVudCknO1xuICAgICAgICBtZXRhLmhvc3RbJyhtb3VzZXVwKSddPSdvbk1vdXNldXAoJGV2ZW50KSc7XG4gICAgICAgIG1ldGEuaG9zdFsnKG1vdXNlZG93biknXT0nb25Nb3VzZWRvd24oJGV2ZW50KSc7XG4gICAgICAgIG1ldGEuaG9zdFsnKG1vdXNlb3ZlciknXT0nb25Nb3VzZW92ZXIoKSc7XG4gICAgICAgIG1ldGEuaG9zdFsnKG1vdXNlb3V0KSddPSdvbk1vdXNlb3V0KCknO1xuICAgICAgICBtZXRhLmhvc3RbJyhrZXl1cCknXT0nb25LZXl1cCgkZXZlbnQpJztcbiAgICAgICAgbWV0YS5ob3N0Wycoa2V5ZG93biknXT0nb25LZXlkb3duKCRldmVudCknO1xuICAgICAgICBtZXRhLmhvc3RbJyhmb2N1cyknXT0nb25Gb2N1cygpJztcbiAgICAgICAgbWV0YS5ob3N0WycoYmx1ciknXT0nb25CbHVyKCknO1xuICAgICAgICBtZXRhLmhvc3RbJ1t0YWJpbmRleF0nXT0nZ2V0VGFiSW5kZXgoKSc7XG4gICAgICAgIHJldHVybiBtZXRhO1xuICAgIH1cblxuICAgIGVuYWJsZU1hdGVyaWFsKCl7XG4gICAgICAgIHRoaXMuZWxlLm5hdGl2ZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdhaS1tYXRlcmlhbCcsJycpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBlbGU6IEVsZW1lbnRSZWYpIHtcbiAgICAgICAgXG4gICAgICAgIHZhciBlbDphbnkgPSB0aGlzLmVsZS5uYXRpdmVFbGVtZW50O1xuICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2FpLWNvbnRyb2wnLCcnKTtcbiAgICAgICAgXG4gICAgICAgIHZhciB0YWJpbmRleCA9IGVsLmdldEF0dHJpYnV0ZSgndGFiaW5kZXgnKTtcbiAgICAgICAgaWYodGFiaW5kZXgpIHRoaXMudGFiaW5kZXggPSBOdW1iZXJXcmFwcGVyLnBhcnNlSW50KHRhYmluZGV4LCAxMCk7XG5cbiAgICAgICAgaWYoZWwuZ2V0QXR0cmlidXRlKCdkaXNhYmxlZCcpKVxuICAgICAgICAgICAgdGhpcy5kaXNhYmxlZCA9IHRydWU7XG4gICAgfSAgXG5cbiAgICBnZXRUYWJJbmRleCgpe1xuICAgICAgICBpZih0aGlzLmRpc2FibGVkKSByZXR1cm4gLTE7XG4gICAgICAgIHJldHVybiB0aGlzLnRhYmluZGV4O1xuICAgIH1cbiAgICBcbiAgICBwcm90ZWN0ZWQgb25DbGljaygpe1xuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgZmlyZUNsaWNrRXZlbnQoKXtcbiAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICB0aGlzLm9uQ2xpY2soKTtcbiAgICAgICAgICAgIE9ic2VydmFibGVXcmFwcGVyLmNhbGxFbWl0KHRoaXMub25jbGljaywgbnVsbCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbk1vdXNlb3ZlcigpIHtcbiAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkKSB0aGlzLmlzSG92ZXIgPSB0cnVlO1xuICAgIH1cbiAgICBcbiAgICBvbk1vdXNlb3V0KCkge1xuICAgICAgICB0aGlzLmlzSG92ZXIgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgIH1cbiAgICBcbiAgICBvbk1vdXNlZG93bihldmVudDogTW91c2VFdmVudCkge1xuICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWQgJiYgZXZlbnQuYnV0dG9uPT0wKSB7XG4gICAgICAgICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBvbk1vdXNldXAoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBpZiAoZXZlbnQuYnV0dG9uPT0wKSB0aGlzLmZpcmVDbGlja0V2ZW50KCk7XG4gICAgfVxuICAgIFxuICAgIFxuICAgIG9uS2V5ZG93bihldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWQgJiYgZXZlbnQua2V5Q29kZSA9PSBLZXlDb2Rlcy5TUEFDRSB8fCBldmVudC5rZXlDb2RlID09IEtleUNvZGVzLkVOVEVSKSB7XG4gICAgICAgICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBvbktleXVwKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT0gS2V5Q29kZXMuU1BBQ0UgfHwgZXZlbnQua2V5Q29kZSA9PSBLZXlDb2Rlcy5FTlRFUikgdGhpcy5maXJlQ2xpY2tFdmVudCgpO1xuICAgIH1cbiAgICBcbiAgICBvblRvdWNoc3RhcnQoZXZlbnQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkICYmIGV2ZW50LnRvdWNoZXMubGVuZ3RoID09IDEpIHtcbiAgICAgICAgICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIG9uVG91Y2hlbmQoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBpZiAoZXZlbnQudG91Y2hlcy5sZW5ndGggPT0gMSkgdGhpcy5maXJlQ2xpY2tFdmVudCgpO1xuICAgIH1cblxuICAgIG9uRm9jdXMoKSB7XG4gICAgICAgIGlmICghdGhpcy5kaXNhYmxlZClcbiAgICAgICAgICAgIHRoaXMuaXNGb2N1cyA9ICF0aGlzLmlzQWN0aXZlO1xuICAgIH1cbiAgICBcbiAgICBvbkJsdXIoKSB7XG4gICAgICAgIHRoaXMuaXNGb2N1cyA9IGZhbHNlO1xuICAgIH1cblxuICAgIFxufSAiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
