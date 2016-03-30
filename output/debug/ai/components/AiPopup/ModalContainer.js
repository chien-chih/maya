System.register(['angular2/core', './ModalInstance'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, ModalInstance_1;
    var ModalContainer;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ModalInstance_1_1) {
                ModalInstance_1 = ModalInstance_1_1;
            }],
        execute: function() {
            ModalContainer = (function () {
                function ModalContainer(instance) {
                    this.instance = instance;
                    /*
                            if (!instance.inElement) {
                                this.position = this.width = this.height = null;
                                this.top = this.left = this.right = this.bottom = null;
                            } else {
                                this.position = 'absolute';
                                this.height = '100%';
                                this.width = '100%';
                                this.top = this.left = this.right = this.bottom = '0';
                            }
                            
                            if (!instance.inElement) {
                                this.positionString = null;
                            } else {
                                this.positionString = 'absolute';
                            }
                    */
                }
                ModalContainer.prototype.onContainerClick = function ($event) {
                    $event.stopPropagation();
                };
                ModalContainer.prototype.onClick = function () {
                    //return !this.instance.config.isBlocking && this.instance.dismiss();
                };
                ModalContainer.prototype.documentKeypress = function (event) {
                    debugger;
                    // check that this modal is the last in the stack.
                    if (this.modal.position(this.instance) !== this.modal.length - 1)
                        return;
                    if (this.instance.config.supportsKey(event.keyCode)) {
                        this.instance.dismiss();
                    }
                };
                ModalContainer.prototype.onLoad = function () {
                    //document.body.setAttribute(mobile?'mobile':'desktop','');
                    //if (this._list.length === 1) {
                    // DOM.addClass(DOM.query('body'), 'modal-open'); 
                    //}
                };
                ModalContainer.prototype.onUnload = function () {
                    //if (this._list.length === 0) {
                    //DOM.removeClass(DOM.query('body'), 'modal-open');
                    //}
                };
                ModalContainer = __decorate([
                    core_1.Component({
                        selector: 'modal-container',
                        host: {
                            '[style.position]': 'position',
                            '[style.height]': 'height',
                            '[style.width]': 'width',
                            '[style.top]': 'top',
                            '[style.left]': 'left',
                            '[style.right]': 'right',
                            '[style.bottom]': 'bottom',
                            'tabindex': '0',
                            'role': 'dialog',
                            'class': 'in modal',
                            'style': 'display: block',
                            //        '[style.position]': 'positionString',
                            '(body:keydown)': 'documentKeypress($event)',
                            '(click)': 'onClick()'
                        },
                        template: "<div class=\"ai-modal-mask\"></div><div class=\"ai-modal-autohide\"></div>\n        <div class=\"modal-dialog\" (click)=\"onContainerClick($event)\" style=\"display: block\">\n            <div style=\"display: none\" #modalDialog></div>\n        </div>\n        "
                    }), 
                    __metadata('design:paramtypes', [ModalInstance_1.ModalInstance])
                ], ModalContainer);
                return ModalContainer;
            })();
            exports_1("ModalContainer", ModalContainer);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlQb3B1cC9Nb2RhbENvbnRhaW5lci50cyJdLCJuYW1lcyI6WyJNb2RhbENvbnRhaW5lciIsIk1vZGFsQ29udGFpbmVyLmNvbnN0cnVjdG9yIiwiTW9kYWxDb250YWluZXIub25Db250YWluZXJDbGljayIsIk1vZGFsQ29udGFpbmVyLm9uQ2xpY2siLCJNb2RhbENvbnRhaW5lci5kb2N1bWVudEtleXByZXNzIiwiTW9kYWxDb250YWluZXIub25Mb2FkIiwiTW9kYWxDb250YWluZXIub25VbmxvYWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUtBO2dCQXVDSUEsd0JBQW9CQSxRQUF1QkE7b0JBQXZCQyxhQUFRQSxHQUFSQSxRQUFRQSxDQUFlQTtvQkFDL0NBOzs7Ozs7Ozs7Ozs7Ozs7O3NCQWdCRUE7Z0JBQ0VBLENBQUNBO2dCQUVHRCx5Q0FBZ0JBLEdBQWhCQSxVQUFpQkEsTUFBV0E7b0JBQzVCRSxNQUFNQSxDQUFDQSxlQUFlQSxFQUFFQSxDQUFDQTtnQkFDN0JBLENBQUNBO2dCQUVERixnQ0FBT0EsR0FBUEE7b0JBQ0lHLHFFQUFxRUE7Z0JBQ3pFQSxDQUFDQTtnQkFFREgseUNBQWdCQSxHQUFoQkEsVUFBaUJBLEtBQW9CQTtvQkFDakNJLFFBQVFBLENBQUFBO29CQUNSQSxrREFBa0RBO29CQUNsREEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsS0FBS0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsTUFBTUEsR0FBR0EsQ0FBQ0EsQ0FBQ0E7d0JBQUNBLE1BQU1BLENBQUNBO29CQUV6RUEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7d0JBQ2xEQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxPQUFPQSxFQUFFQSxDQUFDQTtvQkFDNUJBLENBQUNBO2dCQUNMQSxDQUFDQTtnQkFFREosK0JBQU1BLEdBQU5BO29CQUNJSywyREFBMkRBO29CQUUzREEsZ0NBQWdDQTtvQkFDN0JBLGtEQUFrREE7b0JBQ3JEQSxHQUFHQTtnQkFDUEEsQ0FBQ0E7Z0JBRURMLGlDQUFRQSxHQUFSQTtvQkFDSU0sZ0NBQWdDQTtvQkFDNUJBLG1EQUFtREE7b0JBQ3ZEQSxHQUFHQTtnQkFFUEEsQ0FBQ0E7Z0JBMUZMTjtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNQQSxRQUFRQSxFQUFFQSxpQkFBaUJBO3dCQUMzQkEsSUFBSUEsRUFBRUE7NEJBQ0ZBLGtCQUFrQkEsRUFBRUEsVUFBVUE7NEJBQzlCQSxnQkFBZ0JBLEVBQUVBLFFBQVFBOzRCQUMxQkEsZUFBZUEsRUFBRUEsT0FBT0E7NEJBQ3hCQSxhQUFhQSxFQUFFQSxLQUFLQTs0QkFDcEJBLGNBQWNBLEVBQUVBLE1BQU1BOzRCQUN0QkEsZUFBZUEsRUFBRUEsT0FBT0E7NEJBQ3hCQSxnQkFBZ0JBLEVBQUVBLFFBQVFBOzRCQUMxQkEsVUFBVUEsRUFBRUEsR0FBR0E7NEJBQ2ZBLE1BQU1BLEVBQUVBLFFBQVFBOzRCQUNoQkEsT0FBT0EsRUFBRUEsVUFBVUE7NEJBQ25CQSxPQUFPQSxFQUFFQSxnQkFBZ0JBOzRCQUNqQ0EsK0NBQStDQTs0QkFDdkNBLGdCQUFnQkEsRUFBRUEsMEJBQTBCQTs0QkFDNUNBLFNBQVNBLEVBQUVBLFdBQVdBO3lCQUV6QkE7d0JBQ0RBLFFBQVFBLEVBQ0pBLHdRQUlDQTtxQkFFUkEsQ0FBQ0E7O21DQWlFREE7Z0JBQURBLHFCQUFDQTtZQUFEQSxDQTNGQSxBQTJGQ0EsSUFBQTtZQTNGRCwyQ0EyRkMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL0FpUG9wdXAvTW9kYWxDb250YWluZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7TW9kYWxJbnN0YW5jZX0gZnJvbSAnLi9Nb2RhbEluc3RhbmNlJztcbmltcG9ydCB7TW9kYWx9IGZyb20gJy4vTW9kYWwnO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbW9kYWwtY29udGFpbmVyJyxcbiAgICBob3N0OiB7XG4gICAgICAgICdbc3R5bGUucG9zaXRpb25dJzogJ3Bvc2l0aW9uJyxcbiAgICAgICAgJ1tzdHlsZS5oZWlnaHRdJzogJ2hlaWdodCcsXG4gICAgICAgICdbc3R5bGUud2lkdGhdJzogJ3dpZHRoJyxcbiAgICAgICAgJ1tzdHlsZS50b3BdJzogJ3RvcCcsXG4gICAgICAgICdbc3R5bGUubGVmdF0nOiAnbGVmdCcsXG4gICAgICAgICdbc3R5bGUucmlnaHRdJzogJ3JpZ2h0JyxcbiAgICAgICAgJ1tzdHlsZS5ib3R0b21dJzogJ2JvdHRvbScsXG4gICAgICAgICd0YWJpbmRleCc6ICcwJyxcbiAgICAgICAgJ3JvbGUnOiAnZGlhbG9nJyxcbiAgICAgICAgJ2NsYXNzJzogJ2luIG1vZGFsJyxcbiAgICAgICAgJ3N0eWxlJzogJ2Rpc3BsYXk6IGJsb2NrJyxcbi8vICAgICAgICAnW3N0eWxlLnBvc2l0aW9uXSc6ICdwb3NpdGlvblN0cmluZycsXG4gICAgICAgICcoYm9keTprZXlkb3duKSc6ICdkb2N1bWVudEtleXByZXNzKCRldmVudCknLFxuICAgICAgICAnKGNsaWNrKSc6ICdvbkNsaWNrKCknXG5cbiAgICB9LFxuICAgIHRlbXBsYXRlOlxuICAgICAgICBgPGRpdiBjbGFzcz1cImFpLW1vZGFsLW1hc2tcIj48L2Rpdj48ZGl2IGNsYXNzPVwiYWktbW9kYWwtYXV0b2hpZGVcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWRpYWxvZ1wiIChjbGljayk9XCJvbkNvbnRhaW5lckNsaWNrKCRldmVudClcIiBzdHlsZT1cImRpc3BsYXk6IGJsb2NrXCI+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPVwiZGlzcGxheTogbm9uZVwiICNtb2RhbERpYWxvZz48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIGBcblxufSlcbmV4cG9ydCBjbGFzcyBNb2RhbENvbnRhaW5lciB7XG4gICAgcHVibGljIHBvc2l0aW9uOiBzdHJpbmc7XG4gICAgcHVibGljIGhlaWdodDogc3RyaW5nO1xuICAgIHB1YmxpYyB3aWR0aDogc3RyaW5nO1xuICAgIHB1YmxpYyB0b3A6IHN0cmluZztcbiAgICBwdWJsaWMgbGVmdDogc3RyaW5nO1xuICAgIHB1YmxpYyByaWdodDogc3RyaW5nO1xuICAgIHB1YmxpYyBib3R0b206IHN0cmluZztcblxuICAgIHB1YmxpYyBwb3NpdGlvblN0cmluZzogc3RyaW5nO1xuICAgIHByaXZhdGUgbW9kYWw6IE1vZGFsO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBpbnN0YW5jZTogTW9kYWxJbnN0YW5jZSkge1xuLypcbiAgICAgICAgaWYgKCFpbnN0YW5jZS5pbkVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLndpZHRoID0gdGhpcy5oZWlnaHQgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy50b3AgPSB0aGlzLmxlZnQgPSB0aGlzLnJpZ2h0ID0gdGhpcy5ib3R0b20gPSBudWxsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgICAgICB0aGlzLmhlaWdodCA9ICcxMDAlJztcbiAgICAgICAgICAgIHRoaXMud2lkdGggPSAnMTAwJSc7XG4gICAgICAgICAgICB0aGlzLnRvcCA9IHRoaXMubGVmdCA9IHRoaXMucmlnaHQgPSB0aGlzLmJvdHRvbSA9ICcwJztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKCFpbnN0YW5jZS5pbkVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb25TdHJpbmcgPSBudWxsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvblN0cmluZyA9ICdhYnNvbHV0ZSc7XG4gICAgICAgIH1cbiovXG4gICAgfVxuICAgIFxuICAgICAgICBvbkNvbnRhaW5lckNsaWNrKCRldmVudDogYW55KSB7XG4gICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG5cbiAgICBvbkNsaWNrKCkge1xuICAgICAgICAvL3JldHVybiAhdGhpcy5pbnN0YW5jZS5jb25maWcuaXNCbG9ja2luZyAmJiB0aGlzLmluc3RhbmNlLmRpc21pc3MoKTtcbiAgICB9XG5cbiAgICBkb2N1bWVudEtleXByZXNzKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIGRlYnVnZ2VyXG4gICAgICAgIC8vIGNoZWNrIHRoYXQgdGhpcyBtb2RhbCBpcyB0aGUgbGFzdCBpbiB0aGUgc3RhY2suXG4gICAgICAgIGlmICh0aGlzLm1vZGFsLnBvc2l0aW9uKHRoaXMuaW5zdGFuY2UpICE9PSB0aGlzLm1vZGFsLmxlbmd0aCAtIDEpIHJldHVybjtcblxuICAgICAgICBpZiAodGhpcy5pbnN0YW5jZS5jb25maWcuc3VwcG9ydHNLZXkoZXZlbnQua2V5Q29kZSkpIHtcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UuZGlzbWlzcygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIG9uTG9hZCgpe1xuICAgICAgICAvL2RvY3VtZW50LmJvZHkuc2V0QXR0cmlidXRlKG1vYmlsZT8nbW9iaWxlJzonZGVza3RvcCcsJycpO1xuXG4gICAgICAgIC8vaWYgKHRoaXMuX2xpc3QubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgIC8vIERPTS5hZGRDbGFzcyhET00ucXVlcnkoJ2JvZHknKSwgJ21vZGFsLW9wZW4nKTsgXG4gICAgICAgIC8vfVxuICAgIH1cblxuICAgIG9uVW5sb2FkKCl7XG4gICAgICAgIC8vaWYgKHRoaXMuX2xpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAvL0RPTS5yZW1vdmVDbGFzcyhET00ucXVlcnkoJ2JvZHknKSwgJ21vZGFsLW9wZW4nKTtcbiAgICAgICAgLy99XG5cbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
