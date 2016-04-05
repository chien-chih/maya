System.register(['angular2/core', 'angular2/src/facade/lang', 'angular2/src/facade/async', '../AiControl/AiControl', './AiRadioDispatcher'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
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
    var core_1, lang_1, async_1, AiControl_1, AiRadioDispatcher_1;
    var _uniqueIdCounter, AiRadioGroup;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (lang_1_1) {
                lang_1 = lang_1_1;
            },
            function (async_1_1) {
                async_1 = async_1_1;
            },
            function (AiControl_1_1) {
                AiControl_1 = AiControl_1_1;
            },
            function (AiRadioDispatcher_1_1) {
                AiRadioDispatcher_1 = AiRadioDispatcher_1_1;
            }],
        execute: function() {
            _uniqueIdCounter = 0;
            AiRadioGroup = (function (_super) {
                __extends(AiRadioGroup, _super);
                function AiRadioGroup(ele, radioDispatcher) {
                    _super.call(this, ele);
                    this.radioDispatcher = radioDispatcher;
                    /** Array of child radio buttons. */
                    this._radios = [];
                    this.change = new async_1.EventEmitter();
                    this.tabindex = -1;
                    this._name = "ai-radio-group-" + _uniqueIdCounter++;
                    this.selectedRadioId = '';
                }
                /** Gets the name of this group, as to be applied in the HTML 'name' attribute. */
                AiRadioGroup.prototype.getName = function () {
                    return this._name;
                };
                /** Change handler invoked when bindings are resolved or when bindings have changed. */
                AiRadioGroup.prototype.ngOnChanges = function (_) {
                    var _this = this;
                    // If the value of this radio-group has been set or changed, we have to look through the
                    // child radio buttons and select the one that has a corresponding value (if any).
                    if (lang_1.isPresent(this.value) && this.value != '') {
                        this.radioDispatcher.notify(this._name);
                        this._radios.forEach(function (radio) {
                            if (radio.value == _this.value) {
                                radio.checked = true;
                                _this.selectedRadioId = radio.id;
                                _this.activedescendant = radio.id;
                            }
                        });
                    }
                };
                /** Update the value of this radio group from a child md-radio being selected. */
                AiRadioGroup.prototype.updateValue = function (value, id) {
                    this.value = value;
                    this.selectedRadioId = id;
                    this.activedescendant = id;
                    async_1.ObservableWrapper.callEmit(this.change, null);
                };
                /** Registers a child radio button with this group. */
                AiRadioGroup.prototype.register = function (radio) {
                    this._radios.push(radio);
                };
                // TODO(jelbourn): Replace this with a findIndex method in the collections facade.
                AiRadioGroup.prototype.getSelectedRadioIndex = function () {
                    for (var i = 0; i < this._radios.length; i++) {
                        if (this._radios[i].id == this.selectedRadioId) {
                            return i;
                        }
                    }
                    return -1;
                };
                AiRadioGroup.prototype.onKeyDown = function (event) {
                    if (!this.disabled) {
                        switch (event.keyCode) {
                            case AiControl_1.KeyCodes.UP:
                            case AiControl_1.KeyCodes.LEFT:
                                this.stepSelectedRadio(-1);
                                event.preventDefault();
                                break;
                            case AiControl_1.KeyCodes.DOWN:
                            case AiControl_1.KeyCodes.RIGHT:
                                this.stepSelectedRadio(1);
                                event.preventDefault();
                                break;
                        }
                    }
                };
                /** Steps the selected radio based on the given step value (usually either +1 or -1). */
                AiRadioGroup.prototype.stepSelectedRadio = function (step) {
                    var index = this.getSelectedRadioIndex() + step;
                    if (index < 0 || index >= this._radios.length) {
                        return;
                    }
                    var radio = this._radios[index];
                    // If the next radio is line is disabled, skip it (maintaining direction).
                    if (radio.disabled) {
                        this.stepSelectedRadio(step + (step < 0 ? -1 : 1));
                        return;
                    }
                    this.radioDispatcher.notify(this._name);
                    radio.checked = true;
                    async_1.ObservableWrapper.callEmit(this.change, null);
                    this.value = radio.value;
                    this.selectedRadioId = radio.id;
                    this.activedescendant = radio.id;
                };
                AiRadioGroup = __decorate([
                    core_1.Component(AiControl_1.AiControl.meta({
                        templateUrl: 'package:src/components/AiRadio/AiRadioGroup.html',
                        selector: 'ai-radio-group',
                        providers: [AiRadioDispatcher_1.AiRadioDispatcher],
                        inputs: ['value'],
                        outputs: ['change'],
                        host: {
                            'role': 'radiogroup',
                            '[class.checked]': 'value',
                        },
                    })), 
                    __metadata('design:paramtypes', [core_1.ElementRef, AiRadioDispatcher_1.AiRadioDispatcher])
                ], AiRadioGroup);
                return AiRadioGroup;
            }(AiControl_1.AiControl));
            exports_1("AiRadioGroup", AiRadioGroup);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlSYWRpby9BaVJhZGlvR3JvdXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBT0ksZ0JBQWdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBQWhCLGdCQUFnQixHQUFXLENBQUMsQ0FBQztZQWNqQztnQkFBa0MsZ0NBQVM7Z0JBaUJ2QyxzQkFBWSxHQUFlLEVBQVMsZUFBa0M7b0JBQ2xFLGtCQUFNLEdBQUcsQ0FBQyxDQUFDO29CQURxQixvQkFBZSxHQUFmLGVBQWUsQ0FBbUI7b0JBVnRFLG9DQUFvQztvQkFDcEMsWUFBTyxHQUFhLEVBQUUsQ0FBQztvQkFPdkIsV0FBTSxHQUFtQixJQUFJLG9CQUFZLEVBQUUsQ0FBQztvQkFJeEMsSUFBSSxDQUFDLFFBQVEsR0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxvQkFBa0IsZ0JBQWdCLEVBQUksQ0FBQztvQkFDcEQsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7Z0JBQzlCLENBQUM7Z0JBRUQsa0ZBQWtGO2dCQUNsRiw4QkFBTyxHQUFQO29CQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO2dCQUN0QixDQUFDO2dCQUVELHVGQUF1RjtnQkFDdkYsa0NBQVcsR0FBWCxVQUFZLENBQUM7b0JBQWIsaUJBYUM7b0JBWkcsd0ZBQXdGO29CQUN4RixrRkFBa0Y7b0JBQ2xGLEVBQUUsQ0FBQyxDQUFDLGdCQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQzt3QkFDOUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUN4QyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFBLEtBQUs7NEJBQ3hCLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLElBQUksS0FB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QUMsQ0FBQyxDQUFDO3dCQUNuRCxNQUFNLENBQUM7b0JBQ1QsQ0FBQztvQkFFRCxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3hDLEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO29CQUNyQix5QkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFFOUMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO29CQUN6QixJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQyxFQUFFLENBQUM7b0JBQ2hDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUMsRUFBRSxDQUFDO2dCQUVyQyxDQUFDO2dCQTNITDtvQkFBQyxnQkFBUyxDQUFDLHFCQUFTLENBQUMsSUFBSSxDQUFDO3dCQUN0QixXQUFXLEVBQUMsa0RBQWtEO3dCQUM5RCxRQUFRLEVBQUUsZ0JBQWdCO3dCQUMxQixTQUFTLEVBQUMsQ0FBQyxxQ0FBaUIsQ0FBQzt3QkFDN0IsTUFBTSxFQUFDLENBQUMsT0FBTyxDQUFDO3dCQUNoQixPQUFPLEVBQUMsQ0FBQyxRQUFRLENBQUM7d0JBQ2xCLElBQUksRUFBQzs0QkFDRCxNQUFNLEVBQUUsWUFBWTs0QkFDcEIsaUJBQWlCLEVBQUUsT0FBTzt5QkFDN0I7cUJBQ0osQ0FBQyxDQUFDOztnQ0FBQTtnQkFxSEgsbUJBQUM7WUFBRCxDQW5IQSxBQW1IQyxDQW5IaUMscUJBQVMsR0FtSDFDO1lBbkhELHVDQW1IQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvQWlSYWRpby9BaVJhZGlvR3JvdXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCxFbGVtZW50UmVmLE9uQ2hhbmdlc30gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge2lzUHJlc2VudCwgU3RyaW5nV3JhcHBlciwgTnVtYmVyV3JhcHBlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9sYW5nJztcbmltcG9ydCB7T2JzZXJ2YWJsZVdyYXBwZXIsRXZlbnRFbWl0dGVyfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2FzeW5jJztcbmltcG9ydCB7S2V5Q29kZXMsQWlDb250cm9sfSBmcm9tICcuLi9BaUNvbnRyb2wvQWlDb250cm9sJztcbmltcG9ydCB7QWlSYWRpb0Rpc3BhdGNoZXJ9IGZyb20gJy4vQWlSYWRpb0Rpc3BhdGNoZXInO1xuaW1wb3J0IHtBaVJhZGlvfSBmcm9tICcuL0FpUmFkaW8nO1xuXG52YXIgX3VuaXF1ZUlkQ291bnRlcjogbnVtYmVyID0gMDtcblxuQENvbXBvbmVudChBaUNvbnRyb2wubWV0YSh7XG4gICAgdGVtcGxhdGVVcmw6J3BhY2thZ2U6c3JjL2NvbXBvbmVudHMvQWlSYWRpby9BaVJhZGlvR3JvdXAuaHRtbCcsXG4gICAgc2VsZWN0b3I6ICdhaS1yYWRpby1ncm91cCcsXG4gICAgcHJvdmlkZXJzOltBaVJhZGlvRGlzcGF0Y2hlcl0sXG4gICAgaW5wdXRzOlsndmFsdWUnXSxcbiAgICBvdXRwdXRzOlsnY2hhbmdlJ10sXG4gICAgaG9zdDp7XG4gICAgICAgICdyb2xlJzogJ3JhZGlvZ3JvdXAnLFxuICAgICAgICAnW2NsYXNzLmNoZWNrZWRdJzogJ3ZhbHVlJyxcbiAgICB9LFxufSkpICAgIFxuXG5leHBvcnQgY2xhc3MgQWlSYWRpb0dyb3VwIGV4dGVuZHMgQWlDb250cm9sIGltcGxlbWVudHMgT25DaGFuZ2VzeyBcbiAgICAgLyoqIFRoZSBzZWxlY3RlZCB2YWx1ZSBmb3IgdGhlIHJhZGlvIGdyb3VwLiBUaGUgdmFsdWUgY29tZXMgZnJvbSB0aGUgb3B0aW9ucy4gKi9cbiAgICB2YWx1ZTphbnk7XG5cbiAgICAvKiogVGhlIEhUTUwgbmFtZSBhdHRyaWJ1dGUgYXBwbGllZCB0byByYWRpbyBidXR0b25zIGluIHRoaXMgZ3JvdXAuICovXG4gICAgX25hbWU6IHN0cmluZztcbiAgICBcbiAgICAvKiogQXJyYXkgb2YgY2hpbGQgcmFkaW8gYnV0dG9ucy4gKi9cbiAgICBfcmFkaW9zOiBBaVJhZGlvW109IFtdO1xuICAgIFxuICAgIGFjdGl2ZWRlc2NlbmRhbnQ6IGFueTtcbiAgICBcbiAgICAvKiogVGhlIElEIG9mIHRoZSBzZWxlY3RlZCByYWRpbyBidXR0b24uICovXG4gICAgc2VsZWN0ZWRSYWRpb0lkOiBzdHJpbmc7XG5cbiAgICBjaGFuZ2U6RXZlbnRFbWl0dGVyPGFueT49bmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKGVsZTogRWxlbWVudFJlZixwcml2YXRlIHJhZGlvRGlzcGF0Y2hlcjogQWlSYWRpb0Rpc3BhdGNoZXIpeyAgXG4gICAgICAgIHN1cGVyKGVsZSk7IFxuICAgICAgICB0aGlzLnRhYmluZGV4PS0xO1xuICAgICAgICB0aGlzLl9uYW1lID0gYGFpLXJhZGlvLWdyb3VwLSR7X3VuaXF1ZUlkQ291bnRlcisrfWA7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRSYWRpb0lkID0gJyc7XG4gICAgfVxuICAgIFxuICAgIC8qKiBHZXRzIHRoZSBuYW1lIG9mIHRoaXMgZ3JvdXAsIGFzIHRvIGJlIGFwcGxpZWQgaW4gdGhlIEhUTUwgJ25hbWUnIGF0dHJpYnV0ZS4gKi9cbiAgICBnZXROYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICAgIH1cbiAgICBcbiAgICAvKiogQ2hhbmdlIGhhbmRsZXIgaW52b2tlZCB3aGVuIGJpbmRpbmdzIGFyZSByZXNvbHZlZCBvciB3aGVuIGJpbmRpbmdzIGhhdmUgY2hhbmdlZC4gKi9cbiAgICBuZ09uQ2hhbmdlcyhfKSB7XG4gICAgICAgIC8vIElmIHRoZSB2YWx1ZSBvZiB0aGlzIHJhZGlvLWdyb3VwIGhhcyBiZWVuIHNldCBvciBjaGFuZ2VkLCB3ZSBoYXZlIHRvIGxvb2sgdGhyb3VnaCB0aGVcbiAgICAgICAgLy8gY2hpbGQgcmFkaW8gYnV0dG9ucyBhbmQgc2VsZWN0IHRoZSBvbmUgdGhhdCBoYXMgYSBjb3JyZXNwb25kaW5nIHZhbHVlIChpZiBhbnkpLlxuICAgICAgICBpZiAoaXNQcmVzZW50KHRoaXMudmFsdWUpICYmIHRoaXMudmFsdWUgIT0gJycpIHtcbiAgICAgICAgICB0aGlzLnJhZGlvRGlzcGF0Y2hlci5ub3RpZnkodGhpcy5fbmFtZSk7XG4gICAgICAgICAgdGhpcy5fcmFkaW9zLmZvckVhY2gocmFkaW8gPT4ge1xuICAgICAgICAgICAgaWYgKHJhZGlvLnZhbHVlID09IHRoaXMudmFsdWUpIHtcbiAgICAgICAgICAgICAgcmFkaW8uY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRSYWRpb0lkID0gcmFkaW8uaWQ7XG4gICAgICAgICAgICAgIHRoaXMuYWN0aXZlZGVzY2VuZGFudCA9IHJhZGlvLmlkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8qKiBVcGRhdGUgdGhlIHZhbHVlIG9mIHRoaXMgcmFkaW8gZ3JvdXAgZnJvbSBhIGNoaWxkIG1kLXJhZGlvIGJlaW5nIHNlbGVjdGVkLiAqL1xuICAgIHVwZGF0ZVZhbHVlKHZhbHVlOiBhbnksIGlkOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLnNlbGVjdGVkUmFkaW9JZCA9IGlkO1xuICAgICAgICB0aGlzLmFjdGl2ZWRlc2NlbmRhbnQgPSBpZDtcbiAgICAgICAgT2JzZXJ2YWJsZVdyYXBwZXIuY2FsbEVtaXQodGhpcy5jaGFuZ2UsIG51bGwpO1xuICAgIH1cbiAgICBcbiAgICAvKiogUmVnaXN0ZXJzIGEgY2hpbGQgcmFkaW8gYnV0dG9uIHdpdGggdGhpcyBncm91cC4gKi9cbiAgICByZWdpc3RlcihyYWRpbzogQWlSYWRpbykge1xuICAgICAgICB0aGlzLl9yYWRpb3MucHVzaChyYWRpbyk7XG4gICAgfVxuICAgIFxuICAgIC8vIFRPRE8oamVsYm91cm4pOiBSZXBsYWNlIHRoaXMgd2l0aCBhIGZpbmRJbmRleCBtZXRob2QgaW4gdGhlIGNvbGxlY3Rpb25zIGZhY2FkZS5cbiAgICBnZXRTZWxlY3RlZFJhZGlvSW5kZXgoKTogbnVtYmVyIHtcbiAgICAgICAgXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fcmFkaW9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKHRoaXMuX3JhZGlvc1tpXS5pZCA9PSB0aGlzLnNlbGVjdGVkUmFkaW9JZCkge1xuICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgfVxuICAgICAgICB9IFxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgICBcbiAgICBvbktleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcbiAgICAgICAgICAgICAgY2FzZSBLZXlDb2Rlcy5VUDpcbiAgICAgICAgICAgICAgY2FzZSBLZXlDb2Rlcy5MRUZUOlxuICAgICAgICAgICAgICAgIHRoaXMuc3RlcFNlbGVjdGVkUmFkaW8oLTEpO1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgS2V5Q29kZXMuRE9XTjpcbiAgICAgICAgICAgICAgY2FzZSBLZXlDb2Rlcy5SSUdIVDpcbiAgICAgICAgICAgICAgICB0aGlzLnN0ZXBTZWxlY3RlZFJhZGlvKDEpO1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLyoqIFN0ZXBzIHRoZSBzZWxlY3RlZCByYWRpbyBiYXNlZCBvbiB0aGUgZ2l2ZW4gc3RlcCB2YWx1ZSAodXN1YWxseSBlaXRoZXIgKzEgb3IgLTEpLiAqL1xuICAgIHN0ZXBTZWxlY3RlZFJhZGlvKHN0ZXApIHtcbiAgICAgICAgXG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMuZ2V0U2VsZWN0ZWRSYWRpb0luZGV4KCkgKyBzdGVwO1xuICAgICAgICBpZiAoaW5kZXggPCAwIHx8IGluZGV4ID49IHRoaXMuX3JhZGlvcy5sZW5ndGgpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgbGV0IHJhZGlvID0gdGhpcy5fcmFkaW9zW2luZGV4XTtcbiAgICBcbiAgICAgICAgLy8gSWYgdGhlIG5leHQgcmFkaW8gaXMgbGluZSBpcyBkaXNhYmxlZCwgc2tpcCBpdCAobWFpbnRhaW5pbmcgZGlyZWN0aW9uKS5cbiAgICAgICAgaWYgKHJhZGlvLmRpc2FibGVkKSB7XG4gICAgICAgICAgdGhpcy5zdGVwU2VsZWN0ZWRSYWRpbyhzdGVwICsgKHN0ZXAgPCAwID8gLTEgOiAxKSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIHRoaXMucmFkaW9EaXNwYXRjaGVyLm5vdGlmeSh0aGlzLl9uYW1lKTtcbiAgICAgICAgcmFkaW8uY2hlY2tlZCA9IHRydWU7XG4gICAgICAgIE9ic2VydmFibGVXcmFwcGVyLmNhbGxFbWl0KHRoaXMuY2hhbmdlLCBudWxsKTtcbiAgICBcbiAgICAgICAgdGhpcy52YWx1ZSA9IHJhZGlvLnZhbHVlO1xuICAgICAgICB0aGlzLnNlbGVjdGVkUmFkaW9JZCA9IHJhZGlvLmlkO1xuICAgICAgICB0aGlzLmFjdGl2ZWRlc2NlbmRhbnQgPSByYWRpby5pZDtcbiAgICAgICAgXG4gICAgfSAgICBcbiAgICAgICAgXG5cblxufVxuXG5cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
