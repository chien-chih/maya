System.register(['angular2/core', './ModalConfig', './ModalInstance', './AiModalContainer'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, ModalConfig_1, ModalInstance_1, AiModalContainer_1;
    var Modal;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ModalConfig_1_1) {
                ModalConfig_1 = ModalConfig_1_1;
            },
            function (ModalInstance_1_1) {
                ModalInstance_1 = ModalInstance_1_1;
            },
            function (AiModalContainer_1_1) {
                AiModalContainer_1 = AiModalContainer_1_1;
            }],
        execute: function() {
            Modal = (function () {
                function Modal(componentLoader, appRef) {
                    this.componentLoader = componentLoader;
                    this.appRef = appRef;
                    this._list = [];
                }
                /**
                 * Opens a modal window inside an existing component.
                 * @param componentType The angular Component to render as modal.
                 * @param bindings Resolved providers that will inject into the component provided.
                 * @param config A Modal Configuration object.
                 * @returns {Promise<ModalInstance>}
                 */
                Modal.prototype.open = function (componentType, bindings, config) {
                    var _this = this;
                    config = config ? config : new ModalConfig_1.ModalConfig();
                    var instance = new ModalInstance_1.ModalInstance(config);
                    instance.inElement = !!config.anchorName;
                    var containerBindings = core_1.Injector.resolve([core_1.provide(ModalInstance_1.ModalInstance, { useValue: instance })]);
                    var container = this.createContainer(containerBindings, config.anchorName);
                    return container
                        .then(function (containerRef) {
                        instance.containerRef = containerRef;
                        var modalDataBindings = core_1.Injector.resolve([core_1.provide(ModalInstance_1.ModalInstance, { useValue: instance })]).concat(bindings);
                        return _this.componentLoader.loadIntoLocation(componentType, containerRef.location, 'modalDialog', modalDataBindings)
                            .then(function (dialogRef) {
                            instance.dialogRef = dialogRef;
                            _this.push(instance);
                            return instance;
                        });
                    });
                };
                /**
                 * Push a ModalInstance into the stack and manage it so when it's done
                 * it will automatically kick itself out of the stack.
                 * @param instance
                 */
                Modal.prototype.push = function (instance) {
                    var _this = this;
                    var idx = this._list.indexOf(instance);
                    if (idx === -1)
                        this._list.push(instance);
                    instance.onLoad();
                    instance.result
                        .then(function () {
                        _this.remove(instance);
                    })
                        .catch(function () {
                        _this.remove(instance);
                    });
                };
                /**
                 * Remove a ModalInstance from the stack.
                 * @param instance
                 */
                Modal.prototype.remove = function (instance) {
                    var idx = this._list.indexOf(instance);
                    if (idx > -1)
                        this._list.splice(idx, 1);
                    instance.onUnload();
                };
                Modal.prototype.position = function (instance) {
                    return this.indexOf(instance);
                };
                Modal.prototype.index = function (index) {
                    return this._list[index];
                };
                Modal.prototype.indexOf = function (instance) {
                    return this._list.indexOf(instance);
                };
                Object.defineProperty(Modal.prototype, "length", {
                    get: function () {
                        return this._list.length;
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Creates backdrop element.
                 
                 * @param {ResolvedProvider[]} Resolved providers,
                 *     must contain the ModalInstance instance for this backdrop.
                 * @param {string} An anchor name, optional.
                 *     if not supplied backdrop gets applied next to elementRef, otherwise into it.
                 * @returns {Promise<ComponentRef>}
                 */
                Modal.prototype.createContainer = function (bindings, anchorName) {
                    //The element to block using the modal
                    // TODO: appRef.injector.get(APP_COMPONENT) Doesn't work.
                    // When it does replace with the hack below.
                    //let myElementRef = this.appRef.injector.get(APP_COMPONENT).location;
                    var elementRef = this.appRef._rootComponents[0].location;
                    return (!anchorName) ?
                        this.componentLoader.loadNextToLocation(AiModalContainer_1.AiModalContainer, elementRef, bindings) :
                        this.componentLoader.loadIntoLocation(AiModalContainer_1.AiModalContainer, elementRef, anchorName, bindings);
                };
                Modal = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [core_1.DynamicComponentLoader, core_1.ApplicationRef])
                ], Modal);
                return Modal;
            })();
            exports_1("Modal", Modal);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlQb3B1cC9Nb2RhbC50cyJdLCJuYW1lcyI6WyJNb2RhbCIsIk1vZGFsLmNvbnN0cnVjdG9yIiwiTW9kYWwub3BlbiIsIk1vZGFsLnB1c2giLCJNb2RhbC5yZW1vdmUiLCJNb2RhbC5wb3NpdGlvbiIsIk1vZGFsLmluZGV4IiwiTW9kYWwuaW5kZXhPZiIsIk1vZGFsLmxlbmd0aCIsIk1vZGFsLmNyZWF0ZUNvbnRhaW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBaUJBO2dCQUtJQSxlQUFvQkEsZUFBdUNBLEVBQVVBLE1BQXNCQTtvQkFBdkVDLG9CQUFlQSxHQUFmQSxlQUFlQSxDQUF3QkE7b0JBQVVBLFdBQU1BLEdBQU5BLE1BQU1BLENBQWdCQTtvQkFGbkZBLFVBQUtBLEdBQW9CQSxFQUFFQSxDQUFDQTtnQkFHcENBLENBQUNBO2dCQUdERDs7Ozs7O21CQU1HQTtnQkFDSUEsb0JBQUlBLEdBQVhBLFVBQ0lBLGFBQWtDQSxFQUNsQ0EsUUFBNEJBLEVBQzVCQSxNQUFvQkE7b0JBSHhCRSxpQkE4QkNBO29CQXhCR0EsTUFBTUEsR0FBR0EsTUFBTUEsR0FBSUEsTUFBTUEsR0FBR0EsSUFBSUEseUJBQVdBLEVBQUVBLENBQUNBO29CQUU5Q0EsSUFBSUEsUUFBUUEsR0FBR0EsSUFBSUEsNkJBQWFBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBO29CQUN6Q0EsUUFBUUEsQ0FBQ0EsU0FBU0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsVUFBVUEsQ0FBQ0E7b0JBRXpDQSxJQUFJQSxpQkFBaUJBLEdBQUdBLGVBQVFBLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLGNBQU9BLENBQUNBLDZCQUFhQSxFQUFFQSxFQUFDQSxRQUFRQSxFQUFFQSxRQUFRQSxFQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFDekZBLElBQUlBLFNBQVNBLEdBQXlCQSxJQUFJQSxDQUFDQSxlQUFlQSxDQUFFQSxpQkFB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QUFDQTtnQkFDeENBLENBQUNBO2dCQUVEUCxzQkFBSUEseUJBQU1BO3lCQUFWQTt3QkFDSVEsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsTUFBTUEsQ0FBQ0E7b0JBQzdCQSxDQUFDQTs7O21CQUFBUjtnQkFFREE7Ozs7Ozs7O21CQVFHQTtnQkFDS0EsK0JBQWVBLEdBQXZCQSxVQUNJQSxRQUE0QkEsRUFDNUJBLFVBQW1CQTtvQkFHbkJTLHNDQUFzQ0E7b0JBQ3RDQSx5REFBeURBO29CQUN6REEsNENBQTRDQTtvQkFDNUNBLHNFQUFzRUE7b0JBQ3RFQSxJQUFJQSxVQUFVQSxHQUFxQkEsSUFBSUEsQ0FBQ0EsTUFBT0EsQ0FBQ0EsZUFBZUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsUUFBUUEsQ0FBQ0E7b0JBRTVFQSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFDQSxVQUFVQSxDQUFDQTt3QkFDaEJBLElBQUlBLENBQUNBLGVBQWVBLENBQUNBLGtCQUFrQkEsQ0FBQ0EsbUNBQWdCQSxFQUFFQSxVQUFVQSxFQUFFQSxRQUFRQSxDQUFDQTt3QkFDL0VBLElBQUlBLENBQUNBLGVBQWVBLENBQUNBLGdCQUFnQkEsQ0FBQ0EsbUNBQWdCQSxFQUFFQSxVQUFVQSxFQUFFQSxVQUFVQSxFQUFFQSxRQUFRQSxDQUFDQSxDQUFDQTtnQkFDbEdBLENBQUNBO2dCQXBITFQ7b0JBQUNBLGlCQUFVQSxFQUFFQTs7MEJBcUhYQTtnQkFBREEsWUFBQ0E7WUFBREEsQ0FySEQsQUFxSEVBLElBQUE7WUFySEYseUJBcUhFLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9BaVBvcHVwL01vZGFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBJbmplY3RhYmxlLFxuICAgIER5bmFtaWNDb21wb25lbnRMb2FkZXIsXG4gICAgQ29tcG9uZW50UmVmLFxuICAgIEVsZW1lbnRSZWYsXG4gICAgSW5qZWN0b3IsXG4gICAgcHJvdmlkZSxcbiAgICBSZXNvbHZlZFByb3ZpZGVyLFxuICAgIE9wdGlvbmFsLFxuICAgIEFwcGxpY2F0aW9uUmVmXG59IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtNb2RhbENvbmZpZ30gZnJvbSAnLi9Nb2RhbENvbmZpZyc7XG5pbXBvcnQge01vZGFsSW5zdGFuY2V9IGZyb20gJy4vTW9kYWxJbnN0YW5jZSc7XG5pbXBvcnQge0FpTW9kYWxDb250YWluZXJ9IGZyb20gJy4vQWlNb2RhbENvbnRhaW5lcic7XG5pbXBvcnQgeyBET00gfSBmcm9tICdhbmd1bGFyMi9zcmMvcGxhdGZvcm0vZG9tL2RvbV9hZGFwdGVyJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTW9kYWwge1xuXG4gICAgcHJpdmF0ZSBfbGlzdDogTW9kYWxJbnN0YW5jZVtdID0gW107XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbXBvbmVudExvYWRlcjogRHluYW1pY0NvbXBvbmVudExvYWRlciwgcHJpdmF0ZSBhcHBSZWY6IEFwcGxpY2F0aW9uUmVmKXtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIE9wZW5zIGEgbW9kYWwgd2luZG93IGluc2lkZSBhbiBleGlzdGluZyBjb21wb25lbnQuXG4gICAgICogQHBhcmFtIGNvbXBvbmVudFR5cGUgVGhlIGFuZ3VsYXIgQ29tcG9uZW50IHRvIHJlbmRlciBhcyBtb2RhbC5cbiAgICAgKiBAcGFyYW0gYmluZGluZ3MgUmVzb2x2ZWQgcHJvdmlkZXJzIHRoYXQgd2lsbCBpbmplY3QgaW50byB0aGUgY29tcG9uZW50IHByb3ZpZGVkLlxuICAgICAqIEBwYXJhbSBjb25maWcgQSBNb2RhbCBDb25maWd1cmF0aW9uIG9iamVjdC5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxNb2RhbEluc3RhbmNlPn1cbiAgICAgKi9cbiAgICBwdWJsaWMgb3BlbihcbiAgICAgICAgY29tcG9uZW50VHlwZTogRnVuY3Rpb25Db25zdHJ1Y3RvcixcbiAgICAgICAgYmluZGluZ3M6IFJlc29sdmVkUHJvdmlkZXJbXSxcbiAgICAgICAgY29uZmlnPzogTW9kYWxDb25maWdcbiAgICAgICAgKTogUHJvbWlzZTxNb2RhbEluc3RhbmNlPiB7XG5cbiAgICAgICAgY29uZmlnID0gY29uZmlnID8gIGNvbmZpZyA6IG5ldyBNb2RhbENvbmZpZygpO1xuXG4gICAgICAgIGxldCBpbnN0YW5jZSA9IG5ldyBNb2RhbEluc3RhbmNlKGNvbmZpZyk7XG4gICAgICAgIGluc3RhbmNlLmluRWxlbWVudCA9ICEhY29uZmlnLmFuY2hvck5hbWU7XG5cbiAgICAgICAgbGV0IGNvbnRhaW5lckJpbmRpbmdzID0gSW5qZWN0b3IucmVzb2x2ZShbcHJvdmlkZShNb2RhbEluc3RhbmNlLCB7dXNlVmFsdWU6IGluc3RhbmNlfSldKTtcbiAgICAgICAgbGV0IGNvbnRhaW5lcjogUHJvbWlzZTxDb21wb25lbnRSZWY+ID10aGlzLmNyZWF0ZUNvbnRhaW5lciggY29udGFpbmVyQmluZGluZ3MsIGNvbmZpZy5hbmNob3JOYW1lKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBjb250YWluZXJcbiAgICAgICAgICAgIC50aGVuKCAoY29udGFpbmVyUmVmOiBDb21wb25lbnRSZWYpID0+IHtcbiAgICAgICAgICAgICAgICBpbnN0YW5jZS5jb250YWluZXJSZWYgPSBjb250YWluZXJSZWY7XG5cbiAgICAgICAgICAgICAgICBsZXQgbW9kYWxEYXRhQmluZGluZ3MgPSBJbmplY3Rvci5yZXNvbHZlKFxuICAgICAgICAgICAgICAgICAgICBbcHJvdmlkZShNb2RhbEluc3RhbmNlLCB7dXNlVmFsdWU6IGluc3RhbmNlfSldKS5jb25jYXQoYmluZGluZ3MpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29tcG9uZW50TG9hZGVyLmxvYWRJbnRvTG9jYXRpb24oXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudFR5cGUsIGNvbnRhaW5lclJlZi5sb2NhdGlvbiwgJ21vZGFsRGlhbG9nJywgbW9kYWxEYXRhQmluZGluZ3MpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGRpYWxvZ1JlZiA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZS5kaWFsb2dSZWYgPSBkaWFsb2dSZWY7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHVzaChpbnN0YW5jZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7IFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFB1c2ggYSBNb2RhbEluc3RhbmNlIGludG8gdGhlIHN0YWNrIGFuZCBtYW5hZ2UgaXQgc28gd2hlbiBpdCdzIGRvbmVcbiAgICAgKiBpdCB3aWxsIGF1dG9tYXRpY2FsbHkga2ljayBpdHNlbGYgb3V0IG9mIHRoZSBzdGFjay5cbiAgICAgKiBAcGFyYW0gaW5zdGFuY2VcbiAgICAgKi9cbiAgICBwdXNoKGluc3RhbmNlOiBNb2RhbEluc3RhbmNlKTogdm9pZCB7XG4gICAgICAgIGxldCBpZHggPSB0aGlzLl9saXN0LmluZGV4T2YoaW5zdGFuY2UpO1xuICAgICAgICBpZiAoaWR4ID09PSAtMSkgdGhpcy5fbGlzdC5wdXNoKGluc3RhbmNlKTtcbiAgICAgICAgaW5zdGFuY2Uub25Mb2FkKCk7XG4gICAgICAgIGluc3RhbmNlLnJlc3VsdFxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlKGluc3RhbmNlKTsgICBcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgIHRoaXMucmVtb3ZlKGluc3RhbmNlKTsgICBcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBhIE1vZGFsSW5zdGFuY2UgZnJvbSB0aGUgc3RhY2suXG4gICAgICogQHBhcmFtIGluc3RhbmNlXG4gICAgICovXG4gICAgcmVtb3ZlKGluc3RhbmNlOiBNb2RhbEluc3RhbmNlKTogdm9pZCB7XG4gICAgICAgIGxldCBpZHggPSB0aGlzLl9saXN0LmluZGV4T2YoaW5zdGFuY2UpO1xuICAgICAgICBpZiAoaWR4ID4gLTEpIHRoaXMuX2xpc3Quc3BsaWNlKGlkeCwgMSk7XG4gICAgICAgIGluc3RhbmNlLm9uVW5sb2FkKCk7XG5cbiAgICB9XG5cbiAgICBwb3NpdGlvbihpbnN0YW5jZTogTW9kYWxJbnN0YW5jZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbmRleE9mKGluc3RhbmNlKTtcbiAgICB9XG5cbiAgICBpbmRleChpbmRleDogbnVtYmVyKTogTW9kYWxJbnN0YW5jZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9saXN0W2luZGV4XTtcbiAgICB9XG5cbiAgICBpbmRleE9mKGluc3RhbmNlOiBNb2RhbEluc3RhbmNlKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xpc3QuaW5kZXhPZihpbnN0YW5jZSk7XG4gICAgfVxuXG4gICAgZ2V0IGxlbmd0aCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fbGlzdC5sZW5ndGg7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBiYWNrZHJvcCBlbGVtZW50LlxuICAgICBcbiAgICAgKiBAcGFyYW0ge1Jlc29sdmVkUHJvdmlkZXJbXX0gUmVzb2x2ZWQgcHJvdmlkZXJzLFxuICAgICAqICAgICBtdXN0IGNvbnRhaW4gdGhlIE1vZGFsSW5zdGFuY2UgaW5zdGFuY2UgZm9yIHRoaXMgYmFja2Ryb3AuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IEFuIGFuY2hvciBuYW1lLCBvcHRpb25hbC5cbiAgICAgKiAgICAgaWYgbm90IHN1cHBsaWVkIGJhY2tkcm9wIGdldHMgYXBwbGllZCBuZXh0IHRvIGVsZW1lbnRSZWYsIG90aGVyd2lzZSBpbnRvIGl0LlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENvbXBvbmVudFJlZj59XG4gICAgICovXG4gICAgcHJpdmF0ZSBjcmVhdGVDb250YWluZXIoXG4gICAgICAgIGJpbmRpbmdzOiBSZXNvbHZlZFByb3ZpZGVyW10sXG4gICAgICAgIGFuY2hvck5hbWU/OiBzdHJpbmdcbiAgICAgICAgKSA6IFByb21pc2U8Q29tcG9uZW50UmVmPiB7XG4gICAgICAgICAgICBcbiAgICAgICAgLy9UaGUgZWxlbWVudCB0byBibG9jayB1c2luZyB0aGUgbW9kYWxcbiAgICAgICAgLy8gVE9ETzogYXBwUmVmLmluamVjdG9yLmdldChBUFBfQ09NUE9ORU5UKSBEb2Vzbid0IHdvcmsuXG4gICAgICAgIC8vIFdoZW4gaXQgZG9lcyByZXBsYWNlIHdpdGggdGhlIGhhY2sgYmVsb3cuXG4gICAgICAgIC8vbGV0IG15RWxlbWVudFJlZiA9IHRoaXMuYXBwUmVmLmluamVjdG9yLmdldChBUFBfQ09NUE9ORU5UKS5sb2NhdGlvbjtcbiAgICAgICAgbGV0IGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYgPSAoPGFueT50aGlzLmFwcFJlZikuX3Jvb3RDb21wb25lbnRzWzBdLmxvY2F0aW9uO1xuXG4gICAgICAgIHJldHVybiAoIWFuY2hvck5hbWUpID9cbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50TG9hZGVyLmxvYWROZXh0VG9Mb2NhdGlvbihBaU1vZGFsQ29udGFpbmVyLCBlbGVtZW50UmVmLCBiaW5kaW5ncykgOlxuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRMb2FkZXIubG9hZEludG9Mb2NhdGlvbihBaU1vZGFsQ29udGFpbmVyLCBlbGVtZW50UmVmLCBhbmNob3JOYW1lLCBiaW5kaW5ncyk7XG4gICAgfVxuIH0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
