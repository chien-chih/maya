System.register(['angular2/core', 'angular2/src/facade/lang', 'angular2/src/facade/async', '../AiControl/AiControl', './AiRadioDispatcher'], function(exports_1) {
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
            })(AiControl_1.AiControl);
            exports_1("AiRadioGroup", AiRadioGroup);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlSYWRpby9BaVJhZGlvR3JvdXAudHMiXSwibmFtZXMiOlsiQWlSYWRpb0dyb3VwIiwiQWlSYWRpb0dyb3VwLmNvbnN0cnVjdG9yIiwiQWlSYWRpb0dyb3VwLmdldE5hbWUiLCJBaVJhZGlvR3JvdXAubmdPbkNoYW5nZXMiLCJBaVJhZGlvR3JvdXAudXBkYXRlVmFsdWUiLCJBaVJhZGlvR3JvdXAucmVnaXN0ZXIiLCJBaVJhZGlvR3JvdXAuZ2V0U2VsZWN0ZWRSYWRpb0luZGV4IiwiQWlSYWRpb0dyb3VwLm9uS2V5RG93biIsIkFpUmFkaW9Hcm91cC5zdGVwU2VsZWN0ZWRSYWRpbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztRQU9JLGdCQUFnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUFoQixnQkFBZ0IsR0FBVyxDQUFDLENBQUM7WUFFakM7Z0JBWWtDQSxnQ0FBU0E7Z0JBaUJ2Q0Esc0JBQVlBLEdBQWVBLEVBQVNBLGVBQWtDQTtvQkFDbEVDLGtCQUFNQSxHQUFHQSxDQUFDQSxDQUFDQTtvQkFEcUJBLG9CQUFlQSxHQUFmQSxlQUFlQSxDQUFtQkE7b0JBVnRFQSxvQ0FBb0NBO29CQUNwQ0EsWUFBT0EsR0FBYUEsRUFBRUEsQ0FBQ0E7b0JBT3ZCQSxXQUFNQSxHQUFtQkEsSUFBSUEsb0JBQVlBLEVBQUVBLENBQUNBO29CQUl4Q0EsSUFBSUEsQ0FBQ0EsUUFBUUEsR0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0JBQ2pCQSxJQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxvQkFBa0JBLGdCQUFnQkEsRUFBSUEsQ0FBQ0E7b0JBQ3BEQSxJQUFJQSxDQUFDQSxlQUFlQSxHQUFHQSxFQUFFQSxDQUFDQTtnQkFDOUJBLENBQUNBO2dCQUVERCxrRkFBa0ZBO2dCQUNsRkEsOEJBQU9BLEdBQVBBO29CQUNJRSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQTtnQkFDdEJBLENBQUNBO2dCQUVERix1RkFBdUZBO2dCQUN2RkEsa0NB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QSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQTtvQkFFOUNBLElBQUlBLENBQUNBLEtBQUtBLEdBQUdBLEtBQUtBLENBQUNBLEtBQUtBLENBQUNBO29CQUN6QkEsSUFBSUEsQ0FBQ0EsZUFBZUEsR0FBR0EsS0FBS0EsQ0FBQ0EsRUFBRUEsQ0FBQ0E7b0JBQ2hDQSxJQUFJQSxDQUFDQSxnQkFBZ0JBLEdBQUdBLEtBQUtBLENBQUNBLEVBQUVBLENBQUNBO2dCQUVyQ0EsQ0FBQ0E7Z0JBM0hMUjtvQkFBQ0EsZ0JBQVNBLENBQUNBLHFCQUFTQSxDQUFDQSxJQUFJQSxDQUFDQTt3QkFDdEJBLFdBQVdBLEVBQUNBLGtEQUFrREE7d0JBQzlEQSxRQUFRQSxFQUFFQSxnQkFBZ0JBO3dCQUMxQkEsU0FBU0EsRUFBQ0EsQ0FBQ0EscUNBQWlCQSxDQUFDQTt3QkFDN0JBLE1BQU1BLEVBQUNBLENBQUNBLE9BQU9BLENBQUNBO3dCQUNoQkEsT0FBT0EsRUFBQ0EsQ0FBQ0EsUUFBUUEsQ0FBQ0E7d0JBQ2xCQSxJQUFJQSxFQUFDQTs0QkFDREEsTUFBTUEsRUFBRUEsWUFBWUE7NEJBQ3BCQSxpQkFBaUJBLEVBQUVBLE9BQU9BO3lCQUM3QkE7cUJBQ0pBLENBQUNBLENBQUNBOztpQ0FxSEZBO2dCQUFEQSxtQkFBQ0E7WUFBREEsQ0EvSEEsQUErSENBLEVBbkhpQyxxQkFBUyxFQW1IMUM7WUEvSEQsdUNBK0hDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9BaVJhZGlvL0FpUmFkaW9Hcm91cC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LEVsZW1lbnRSZWYsT25DaGFuZ2VzfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7aXNQcmVzZW50LCBTdHJpbmdXcmFwcGVyLCBOdW1iZXJXcmFwcGVyfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnO1xuaW1wb3J0IHtPYnNlcnZhYmxlV3JhcHBlcixFdmVudEVtaXR0ZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvYXN5bmMnO1xuaW1wb3J0IHtLZXlDb2RlcyxBaUNvbnRyb2x9IGZyb20gJy4uL0FpQ29udHJvbC9BaUNvbnRyb2wnO1xuaW1wb3J0IHtBaVJhZGlvRGlzcGF0Y2hlcn0gZnJvbSAnLi9BaVJhZGlvRGlzcGF0Y2hlcic7XG5pbXBvcnQge0FpUmFkaW99IGZyb20gJy4vQWlSYWRpbyc7XG5cbnZhciBfdW5pcXVlSWRDb3VudGVyOiBudW1iZXIgPSAwO1xuXG5AQ29tcG9uZW50KEFpQ29udHJvbC5tZXRhKHtcbiAgICB0ZW1wbGF0ZVVybDoncGFja2FnZTpzcmMvY29tcG9uZW50cy9BaVJhZGlvL0FpUmFkaW9Hcm91cC5odG1sJyxcbiAgICBzZWxlY3RvcjogJ2FpLXJhZGlvLWdyb3VwJyxcbiAgICBwcm92aWRlcnM6W0FpUmFkaW9EaXNwYXRjaGVyXSxcbiAgICBpbnB1dHM6Wyd2YWx1ZSddLFxuICAgIG91dHB1dHM6WydjaGFuZ2UnXSxcbiAgICBob3N0OntcbiAgICAgICAgJ3JvbGUnOiAncmFkaW9ncm91cCcsXG4gICAgICAgICdbY2xhc3MuY2hlY2tlZF0nOiAndmFsdWUnLFxuICAgIH0sXG59KSkgICAgXG5cbmV4cG9ydCBjbGFzcyBBaVJhZGlvR3JvdXAgZXh0ZW5kcyBBaUNvbnRyb2wgaW1wbGVtZW50cyBPbkNoYW5nZXN7IFxuICAgICAvKiogVGhlIHNlbGVjdGVkIHZhbHVlIGZvciB0aGUgcmFkaW8gZ3JvdXAuIFRoZSB2YWx1ZSBjb21lcyBmcm9tIHRoZSBvcHRpb25zLiAqL1xuICAgIHZhbHVlOmFueTtcblxuICAgIC8qKiBUaGUgSFRNTCBuYW1lIGF0dHJpYnV0ZSBhcHBsaWVkIHRvIHJhZGlvIGJ1dHRvbnMgaW4gdGhpcyBncm91cC4gKi9cbiAgICBfbmFtZTogc3RyaW5nO1xuICAgIFxuICAgIC8qKiBBcnJheSBvZiBjaGlsZCByYWRpbyBidXR0b25zLiAqL1xuICAgIF9yYWRpb3M6IEFpUmFkaW9bXT0gW107XG4gICAgXG4gICAgYWN0aXZlZGVzY2VuZGFudDogYW55O1xuICAgIFxuICAgIC8qKiBUaGUgSUQgb2YgdGhlIHNlbGVjdGVkIHJhZGlvIGJ1dHRvbi4gKi9cbiAgICBzZWxlY3RlZFJhZGlvSWQ6IHN0cmluZztcblxuICAgIGNoYW5nZTpFdmVudEVtaXR0ZXI8YW55Pj1uZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgXG4gICAgY29uc3RydWN0b3IoZWxlOiBFbGVtZW50UmVmLHByaXZhdGUgcmFkaW9EaXNwYXRjaGVyOiBBaVJhZGlvRGlzcGF0Y2hlcil7ICBcbiAgICAgICAgc3VwZXIoZWxlKTsgXG4gICAgICAgIHRoaXMudGFiaW5kZXg9LTE7XG4gICAgICAgIHRoaXMuX25hbWUgPSBgYWktcmFkaW8tZ3JvdXAtJHtfdW5pcXVlSWRDb3VudGVyKyt9YDtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFJhZGlvSWQgPSAnJztcbiAgICB9XG4gICAgXG4gICAgLyoqIEdldHMgdGhlIG5hbWUgb2YgdGhpcyBncm91cCwgYXMgdG8gYmUgYXBwbGllZCBpbiB0aGUgSFRNTCAnbmFtZScgYXR0cmlidXRlLiAqL1xuICAgIGdldE5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gICAgfVxuICAgIFxuICAgIC8qKiBDaGFuZ2UgaGFuZGxlciBpbnZva2VkIHdoZW4gYmluZGluZ3MgYXJlIHJlc29sdmVkIG9yIHdoZW4gYmluZGluZ3MgaGF2ZSBjaGFuZ2VkLiAqL1xuICAgIG5nT25DaGFuZ2VzKF8pIHtcbiAgICAgICAgLy8gSWYgdGhlIHZhbHVlIG9mIHRoaXMgcmFkaW8tZ3JvdXAgaGFzIGJlZW4gc2V0IG9yIGNoYW5nZWQsIHdlIGhhdmUgdG8gbG9vayB0aHJvdWdoIHRoZVxuICAgICAgICAvLyBjaGlsZCByYWRpbyBidXR0b25zIGFuZCBzZWxlY3QgdGhlIG9uZSB0aGF0IGhhcyBhIGNvcnJlc3BvbmRpbmcgdmFsdWUgKGlmIGFueSkuXG4gICAgICAgIGlmIChpc1ByZXNlbnQodGhpcy52YWx1ZSkgJiYgdGhpcy52YWx1ZSAhPSAnJykge1xuICAgICAgICAgIHRoaXMucmFkaW9EaXNwYXRjaGVyLm5vdGlmeSh0aGlzLl9uYW1lKTtcbiAgICAgICAgICB0aGlzLl9yYWRpb3MuZm9yRWFjaChyYWRpbyA9PiB7XG4gICAgICAgICAgICBpZiAocmFkaW8udmFsdWUgPT0gdGhpcy52YWx1ZSkge1xuICAgICAgICAgICAgICByYWRpby5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFJhZGlvSWQgPSByYWRpby5pZDtcbiAgICAgICAgICAgICAgdGhpcy5hY3RpdmVkZXNjZW5kYW50ID0gcmFkaW8uaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLyoqIFVwZGF0ZSB0aGUgdmFsdWUgb2YgdGhpcyByYWRpbyBncm91cCBmcm9tIGEgY2hpbGQgbWQtcmFkaW8gYmVpbmcgc2VsZWN0ZWQuICovXG4gICAgdXBkYXRlVmFsdWUodmFsdWU6IGFueSwgaWQ6IHN0cmluZykge1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRSYWRpb0lkID0gaWQ7XG4gICAgICAgIHRoaXMuYWN0aXZlZGVzY2VuZGFudCA9IGlkO1xuICAgICAgICBPYnNlcnZhYmxlV3JhcHBlci5jYWxsRW1pdCh0aGlzLmNoYW5nZSwgbnVsbCk7XG4gICAgfVxuICAgIFxuICAgIC8qKiBSZWdpc3RlcnMgYSBjaGlsZCByYWRpbyBidXR0b24gd2l0aCB0aGlzIGdyb3VwLiAqL1xuICAgIHJlZ2lzdGVyKHJhZGlvOiBBaVJhZGlvKSB7XG4gICAgICAgIHRoaXMuX3JhZGlvcy5wdXNoKHJhZGlvKTtcbiAgICB9XG4gICAgXG4gICAgLy8gVE9ETyhqZWxib3Vybik6IFJlcGxhY2UgdGhpcyB3aXRoIGEgZmluZEluZGV4IG1ldGhvZCBpbiB0aGUgY29sbGVjdGlvbnMgZmFjYWRlLlxuICAgIGdldFNlbGVjdGVkUmFkaW9JbmRleCgpOiBudW1iZXIge1xuICAgICAgICBcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9yYWRpb3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAodGhpcy5fcmFkaW9zW2ldLmlkID09IHRoaXMuc2VsZWN0ZWRSYWRpb0lkKSB7XG4gICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gXG4gICAgICAgIFxuICAgICAgICByZXR1cm4gLTE7XG4gICAgfVxuICAgIFxuICAgIG9uS2V5RG93bihldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xuICAgICAgICAgICAgICBjYXNlIEtleUNvZGVzLlVQOlxuICAgICAgICAgICAgICBjYXNlIEtleUNvZGVzLkxFRlQ6XG4gICAgICAgICAgICAgICAgdGhpcy5zdGVwU2VsZWN0ZWRSYWRpbygtMSk7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBLZXlDb2Rlcy5ET1dOOlxuICAgICAgICAgICAgICBjYXNlIEtleUNvZGVzLlJJR0hUOlxuICAgICAgICAgICAgICAgIHRoaXMuc3RlcFNlbGVjdGVkUmFkaW8oMSk7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvKiogU3RlcHMgdGhlIHNlbGVjdGVkIHJhZGlvIGJhc2VkIG9uIHRoZSBnaXZlbiBzdGVwIHZhbHVlICh1c3VhbGx5IGVpdGhlciArMSBvciAtMSkuICovXG4gICAgc3RlcFNlbGVjdGVkUmFkaW8oc3RlcCkge1xuICAgICAgICBcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5nZXRTZWxlY3RlZFJhZGlvSW5kZXgoKSArIHN0ZXA7XG4gICAgICAgIGlmIChpbmRleCA8IDAgfHwgaW5kZXggPj0gdGhpcy5fcmFkaW9zLmxlbmd0aCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBsZXQgcmFkaW8gPSB0aGlzLl9yYWRpb3NbaW5kZXhdO1xuICAgIFxuICAgICAgICAvLyBJZiB0aGUgbmV4dCByYWRpbyBpcyBsaW5lIGlzIGRpc2FibGVkLCBza2lwIGl0IChtYWludGFpbmluZyBkaXJlY3Rpb24pLlxuICAgICAgICBpZiAocmFkaW8uZGlzYWJsZWQpIHtcbiAgICAgICAgICB0aGlzLnN0ZXBTZWxlY3RlZFJhZGlvKHN0ZXAgKyAoc3RlcCA8IDAgPyAtMSA6IDEpKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgdGhpcy5yYWRpb0Rpc3BhdGNoZXIubm90aWZ5KHRoaXMuX25hbWUpO1xuICAgICAgICByYWRpby5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgT2JzZXJ2YWJsZVdyYXBwZXIuY2FsbEVtaXQodGhpcy5jaGFuZ2UsIG51bGwpO1xuICAgIFxuICAgICAgICB0aGlzLnZhbHVlID0gcmFkaW8udmFsdWU7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRSYWRpb0lkID0gcmFkaW8uaWQ7XG4gICAgICAgIHRoaXMuYWN0aXZlZGVzY2VuZGFudCA9IHJhZGlvLmlkO1xuICAgICAgICBcbiAgICB9ICAgIFxuICAgICAgICBcblxuXG59XG5cblxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
