System.register(['angular2/core', '../AiControl/AiControl', './ModalInstance'], function(exports_1) {
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, AiControl_1, ModalInstance_1;
    var AiModalContainer;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (AiControl_1_1) {
                AiControl_1 = AiControl_1_1;
            },
            function (ModalInstance_1_1) {
                ModalInstance_1 = ModalInstance_1_1;
            }],
        execute: function() {
            AiModalContainer = (function (_super) {
                __extends(AiModalContainer, _super);
                function AiModalContainer(instance, ele) {
                    _super.call(this, ele);
                    this.instance = instance;
                    this.visibility = 'hidden';
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
                AiModalContainer.prototype.onContainerClick = function ($event) {
                    $event.stopPropagation();
                };
                AiModalContainer.prototype.getClass = function () {
                    var cls = '';
                    if (this.instance.config.mask != null)
                        cls += ' mask ' + this.instance.config.mask;
                    if (this.instance.config.autoHide)
                        cls += ' autohide';
                    return cls;
                };
                AiModalContainer.prototype.resetPosition = function () {
                    var dialog = this.nativeElement.childNodes[0];
                    var content = dialog.childNodes[1];
                    var config = this.instance.config;
                    var position = config.floating ? 'fixed' : 'absolute';
                    var x = config.x;
                    if (typeof x == 'string' && x.indexOf('%') != -1) {
                        dialog.style.position = 'fixed';
                        dialog.style.left = x;
                        content.style.position = 'relative';
                        content.style.left = -content.clientWidth / 2;
                    }
                    else {
                        dialog.style.position = position;
                        dialog.style.left = x;
                    }
                    var y = config.y;
                    if (typeof y == 'string' && y.indexOf('%') != -1) {
                        dialog.style.position = 'fixed';
                        dialog.style.top = y;
                        content.style.position = 'relative';
                        content.style.top = -content.clientHeight / 2;
                    }
                    else {
                        dialog.style.position = position;
                        dialog.style.left = y;
                    }
                    this.visibility = null;
                };
                AiModalContainer.prototype.onClick = function () {
                    //return !this.instance.config.isBlocking && this.instance.dismiss();
                };
                AiModalContainer.prototype.documentKeypress = function (event) {
                    // check that this modal is the last in the stack.
                    if (this.modal.position(this.instance) !== this.modal.length - 1)
                        return;
                    if (this.instance.config.supportsKey(event.keyCode)) {
                        this.instance.dismiss();
                    }
                };
                AiModalContainer.prototype.onLoad = function () {
                    var that = this;
                    window.setTimeout(function () {
                        that.resetPosition();
                    }, 1);
                    //document.body.setAttribute(mobile?'mobile':'desktop','');
                    //if (this._list.length === 1) {
                    // DOM.addClass(DOM.query('body'), 'modal-open'); 
                    //}
                };
                AiModalContainer.prototype.onUnload = function () {
                    //if (this._list.length === 0) {
                    //DOM.removeClass(DOM.query('body'), 'modal-open');
                    //}
                };
                AiModalContainer = __decorate([
                    core_1.Component({
                        selector: 'ai-modal-container',
                        host: {
                            '[class]': 'getClass()',
                            '[style.visibility]': 'visibility',
                            //        '[style.position]': 'position',
                            //      '[style.height]': 'height',
                            //    '[style.width]': 'width',
                            //  '[style.top]': 'top',
                            //'[style.left]': 'left',
                            //        '[style.right]': 'right',
                            //      '[style.bottom]': 'bottom',
                            'tabindex': '0',
                            'role': 'dialog',
                            //    'style': 'display: block',
                            //        '[style.position]': 'positionString',
                            '(body:keydown)': 'documentKeypress($event)',
                            '(click)': 'onClick()'
                        },
                        template: '<div class="ai-modal-dialog"><i #modalDialog></i></div>'
                    }), 
                    __metadata('design:paramtypes', [ModalInstance_1.ModalInstance, core_1.ElementRef])
                ], AiModalContainer);
                return AiModalContainer;
            })(AiControl_1.AiControl);
            exports_1("AiModalContainer", AiModalContainer);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlQb3B1cC9BaU1vZGFsQ29udGFpbmVyLnRzIl0sIm5hbWVzIjpbIkFpTW9kYWxDb250YWluZXIiLCJBaU1vZGFsQ29udGFpbmVyLmNvbnN0cnVjdG9yIiwiQWlNb2RhbENvbnRhaW5lci5vbkNvbnRhaW5lckNsaWNrIiwiQWlNb2RhbENvbnRhaW5lci5nZXRDbGFzcyIsIkFpTW9kYWxDb250YWluZXIucmVzZXRQb3NpdGlvbiIsIkFpTW9kYWxDb250YWluZXIub25DbGljayIsIkFpTW9kYWxDb250YWluZXIuZG9jdW1lbnRLZXlwcmVzcyIsIkFpTW9kYWxDb250YWluZXIub25Mb2FkIiwiQWlNb2RhbENvbnRhaW5lci5vblVubG9hZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFNQTtnQkEwQnNDQSxvQ0FBU0E7Z0JBZTNDQSwwQkFBb0JBLFFBQXVCQSxFQUFDQSxHQUFlQTtvQkFDdkRDLGtCQUFNQSxHQUFHQSxDQUFDQSxDQUFDQTtvQkFES0EsYUFBUUEsR0FBUkEsUUFBUUEsQ0FBZUE7b0JBZHBDQSxlQUFVQSxHQUFRQSxRQUFRQSxDQUFDQTtvQkFtQnRDQTs7Ozs7Ozs7Ozs7Ozs7OztzQkFnQkVBO2dCQUNFQSxDQUFDQTtnQkFFR0QsMkNBQWdCQSxHQUFoQkEsVUFBaUJBLE1BQVdBO29CQUM1QkUsTUFBTUEsQ0FBQ0EsZUFBZUEsRUFBRUEsQ0FBQ0E7Z0JBQzdCQSxDQUFDQTtnQkFFREYsbUNBQVFBLEdBQVJBO29CQUNJRyxJQUFJQSxHQUFHQSxHQUFRQSxFQUFFQSxDQUFDQTtvQkFFbEJBLEVBQUVBLENBQUFBLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLE1BQU1BLENBQUNBLElBQUlBLElBQUlBLElBQUlBLENBQUNBO3dCQUNqQ0EsR0FBR0EsSUFBRUEsUUFBUUEsR0FBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0E7b0JBRTVDQSxFQUFF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QSxFQUFFQSxHQUFHQTs0QkFDZkEsTUFBTUEsRUFBRUEsUUFBUUE7NEJBQ3BCQSxnQ0FBZ0NBOzRCQUNwQ0EsK0NBQStDQTs0QkFDdkNBLGdCQUFnQkEsRUFBRUEsMEJBQTBCQTs0QkFDNUNBLFNBQVNBLEVBQUVBLFdBQVdBO3lCQUV6QkE7d0JBQ0RBLFFBQVFBLEVBQUNBLHlEQUF5REE7cUJBSXJFQSxDQUFDQTs7cUNBeUhEQTtnQkFBREEsdUJBQUNBO1lBQURBLENBbEpBLEFBa0pDQSxFQXhIcUMscUJBQVMsRUF3SDlDO1lBbEpELCtDQWtKQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvQWlQb3B1cC9BaU1vZGFsQ29udGFpbmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsRWxlbWVudFJlZixBdHRyaWJ1dGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtBaUNvbnRyb2x9IGZyb20gJy4uL0FpQ29udHJvbC9BaUNvbnRyb2wnO1xuaW1wb3J0IHtNb2RhbEluc3RhbmNlfSBmcm9tICcuL01vZGFsSW5zdGFuY2UnO1xuaW1wb3J0IHtNb2RhbH0gZnJvbSAnLi9Nb2RhbCc7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhaS1tb2RhbC1jb250YWluZXInLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgJ1tjbGFzc10nOiAnZ2V0Q2xhc3MoKScsXG4gICAgICAgICdbc3R5bGUudmlzaWJpbGl0eV0nOiAndmlzaWJpbGl0eScsXG5cbi8vICAgICAgICAnW3N0eWxlLnBvc2l0aW9uXSc6ICdwb3NpdGlvbicsXG4gIC8vICAgICAgJ1tzdHlsZS5oZWlnaHRdJzogJ2hlaWdodCcsXG4gICAgLy8gICAgJ1tzdHlsZS53aWR0aF0nOiAnd2lkdGgnLFxuICAgICAgLy8gICdbc3R5bGUudG9wXSc6ICd0b3AnLFxuICAgICAgICAvLydbc3R5bGUubGVmdF0nOiAnbGVmdCcsXG4vLyAgICAgICAgJ1tzdHlsZS5yaWdodF0nOiAncmlnaHQnLFxuICAvLyAgICAgICdbc3R5bGUuYm90dG9tXSc6ICdib3R0b20nLFxuICAgICAgICAndGFiaW5kZXgnOiAnMCcsXG4gICAgICAgICdyb2xlJzogJ2RpYWxvZycsXG4gICAgLy8gICAgJ3N0eWxlJzogJ2Rpc3BsYXk6IGJsb2NrJyxcbi8vICAgICAgICAnW3N0eWxlLnBvc2l0aW9uXSc6ICdwb3NpdGlvblN0cmluZycsXG4gICAgICAgICcoYm9keTprZXlkb3duKSc6ICdkb2N1bWVudEtleXByZXNzKCRldmVudCknLFxuICAgICAgICAnKGNsaWNrKSc6ICdvbkNsaWNrKCknXG5cbiAgICB9LFxuICAgIHRlbXBsYXRlOic8ZGl2IGNsYXNzPVwiYWktbW9kYWwtZGlhbG9nXCI+PGkgI21vZGFsRGlhbG9nPjwvaT48L2Rpdj4nXG4gICAgLy88ZGl2IHN0eWxlPVwiZGlzcGxheTogbm9uZVwiICNtb2RhbERpYWxvZz48L2Rpdj5cbiAvLzxkaXYgY2xhc3M9XCJtb2RhbC1kaWFsb2dcIiAoY2xpY2spPVwib25Db250YWluZXJDbGljaygkZXZlbnQpXCIgc3R5bGU9XCJkaXNwbGF5OiBibG9ja1wiPlxuIC8vXG59KVxuZXhwb3J0IGNsYXNzIEFpTW9kYWxDb250YWluZXIgZXh0ZW5kcyBBaUNvbnRyb2x7XG4gICAgcHVibGljIHZpc2liaWxpdHk6c3RyaW5nPSdoaWRkZW4nO1xuICAgIFxuICAgIHB1YmxpYyBwb3NpdGlvbjogc3RyaW5nO1xuICAgIHB1YmxpYyBoZWlnaHQ6IHN0cmluZztcbiAgICBwdWJsaWMgd2lkdGg6IHN0cmluZztcbiAgICBwdWJsaWMgdG9wOiBzdHJpbmc7XG4gICAgcHVibGljIGxlZnQ6IHN0cmluZztcbiAgICBwdWJsaWMgcmlnaHQ6IHN0cmluZztcbiAgICBwdWJsaWMgYm90dG9tOiBzdHJpbmc7XG5cbiAgICBwdWJsaWMgcG9zaXRpb25TdHJpbmc6IHN0cmluZztcbiAgICBwcml2YXRlIG1vZGFsOiBNb2RhbDtcblxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBpbnN0YW5jZTogTW9kYWxJbnN0YW5jZSxlbGU6IEVsZW1lbnRSZWYpIHtcbiAgICAgICAgc3VwZXIoZWxlKTsgXG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgXG4vKlxuICAgICAgICBpZiAoIWluc3RhbmNlLmluRWxlbWVudCkge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMud2lkdGggPSB0aGlzLmhlaWdodCA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLnRvcCA9IHRoaXMubGVmdCA9IHRoaXMucmlnaHQgPSB0aGlzLmJvdHRvbSA9IG51bGw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gJzEwMCUnO1xuICAgICAgICAgICAgdGhpcy53aWR0aCA9ICcxMDAlJztcbiAgICAgICAgICAgIHRoaXMudG9wID0gdGhpcy5sZWZ0ID0gdGhpcy5yaWdodCA9IHRoaXMuYm90dG9tID0gJzAnO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoIWluc3RhbmNlLmluRWxlbWVudCkge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvblN0cmluZyA9IG51bGw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uU3RyaW5nID0gJ2Fic29sdXRlJztcbiAgICAgICAgfVxuKi9cbiAgICB9XG4gICAgXG4gICAgICAgIG9uQ29udGFpbmVyQ2xpY2soJGV2ZW50OiBhbnkpIHtcbiAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cblxuICAgIGdldENsYXNzKCk6c3RyaW5ne1xuICAgICAgICB2YXIgY2xzOnN0cmluZz0nJztcblxuICAgICAgICBpZih0aGlzLmluc3RhbmNlLmNvbmZpZy5tYXNrICE9IG51bGwpXG4gICAgICAgICAgICBjbHMrPScgbWFzayAnK3RoaXMuaW5zdGFuY2UuY29uZmlnLm1hc2s7XG5cbiAgICAgICAgaWYodGhpcy5pbnN0YW5jZS5jb25maWcuYXV0b0hpZGUpXG4gICAgICAgICAgICBjbHMrPScgYXV0b2hpZGUnO1xuXG4gICAgICAgIHJldHVybiBjbHM7XG4gICAgfVxuXG4gICAgcmVzZXRQb3NpdGlvbigpIHtcbiAgICAgICAgdmFyIGRpYWxvZz10aGlzLm5hdGl2ZUVsZW1lbnQuY2hpbGROb2Rlc1swXTtcbiAgICAgICAgdmFyIGNvbnRlbnQ9ZGlhbG9nLmNoaWxkTm9kZXNbMV07XG4gICAgICAgIHZhciBjb25maWc9dGhpcy5pbnN0YW5jZS5jb25maWc7XG4gICAgICAgIHZhciBwb3NpdGlvbiA9IGNvbmZpZy5mbG9hdGluZyA/ICdmaXhlZCcgOiAnYWJzb2x1dGUnO1xuXG4gICAgICAgIHZhciB4PWNvbmZpZy54O1xuICAgICAgICBpZiAodHlwZW9mIHggPT0gJ3N0cmluZycgJiYgeC5pbmRleE9mKCclJykgIT0gLTEpIHtcbiAgICAgICAgICAgIGRpYWxvZy5zdHlsZS5wb3NpdGlvbj0nZml4ZWQnO1xuICAgICAgICAgICAgZGlhbG9nLnN0eWxlLmxlZnQ9eDsgICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnRlbnQuc3R5bGUucG9zaXRpb249J3JlbGF0aXZlJztcbiAgICAgICAgICAgIGNvbnRlbnQuc3R5bGUubGVmdD0tY29udGVudC5jbGllbnRXaWR0aCAvMjsgICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRpYWxvZy5zdHlsZS5wb3NpdGlvbj1wb3NpdGlvbjtcbiAgICAgICAgICAgIGRpYWxvZy5zdHlsZS5sZWZ0PXg7ICAgICAgICAgICAgXG4gICAgICAgIH1cblxuICAgICAgICB2YXIgeT1jb25maWcueTtcbiAgICAgICAgaWYgKHR5cGVvZiB5ID09ICdzdHJpbmcnICYmIHkuaW5kZXhPZignJScpICE9IC0xKSB7XG4gICAgICAgICAgICBkaWFsb2cuc3R5bGUucG9zaXRpb249J2ZpeGVkJztcbiAgICAgICAgICAgIGRpYWxvZy5zdHlsZS50b3A9eTsgICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnRlbnQuc3R5bGUucG9zaXRpb249J3JlbGF0aXZlJztcbiAgICAgICAgICAgIGNvbnRlbnQuc3R5bGUudG9wPS1jb250ZW50LmNsaWVudEhlaWdodCAvMjsgICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRpYWxvZy5zdHlsZS5wb3NpdGlvbj1wb3NpdGlvbjtcbiAgICAgICAgICAgIGRpYWxvZy5zdHlsZS5sZWZ0PXk7ICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMudmlzaWJpbGl0eT1udWxsO1xuICAgIH1cblxuXG4gICAgb25DbGljaygpIHtcbiAgICAgICAgLy9yZXR1cm4gIXRoaXMuaW5zdGFuY2UuY29uZmlnLmlzQmxvY2tpbmcgJiYgdGhpcy5pbnN0YW5jZS5kaXNtaXNzKCk7XG4gICAgfVxuXG4gICAgZG9jdW1lbnRLZXlwcmVzcyhldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICAvLyBjaGVjayB0aGF0IHRoaXMgbW9kYWwgaXMgdGhlIGxhc3QgaW4gdGhlIHN0YWNrLlxuICAgICAgICBpZiAodGhpcy5tb2RhbC5wb3NpdGlvbih0aGlzLmluc3RhbmNlKSAhPT0gdGhpcy5tb2RhbC5sZW5ndGggLSAxKSByZXR1cm47XG5cbiAgICAgICAgaWYgKHRoaXMuaW5zdGFuY2UuY29uZmlnLnN1cHBvcnRzS2V5KGV2ZW50LmtleUNvZGUpKSB7XG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlLmRpc21pc3MoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBvbkxvYWQoKXtcbiAgICAgICAgdmFyIHRoYXQ9dGhpcztcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhhdC5yZXNldFBvc2l0aW9uKCk7XG4gICAgICAgIH0sMSk7XG4gICAgICAgIC8vZG9jdW1lbnQuYm9keS5zZXRBdHRyaWJ1dGUobW9iaWxlPydtb2JpbGUnOidkZXNrdG9wJywnJyk7XG5cbiAgICAgICAgLy9pZiAodGhpcy5fbGlzdC5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgLy8gRE9NLmFkZENsYXNzKERPTS5xdWVyeSgnYm9keScpLCAnbW9kYWwtb3BlbicpOyBcbiAgICAgICAgLy99XG4gICAgfVxuXG4gICAgb25VbmxvYWQoKXtcbiAgICAgICAgLy9pZiAodGhpcy5fbGlzdC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIC8vRE9NLnJlbW92ZUNsYXNzKERPTS5xdWVyeSgnYm9keScpLCAnbW9kYWwtb3BlbicpO1xuICAgICAgICAvL31cblxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
