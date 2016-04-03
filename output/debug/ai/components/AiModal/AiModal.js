System.register(['angular2/core', './AiModalConfig', './AiModalInstance', './AiModalContainer'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, AiModalConfig_1, AiModalInstance_1, AiModalContainer_1;
    var AiModal;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (AiModalConfig_1_1) {
                AiModalConfig_1 = AiModalConfig_1_1;
            },
            function (AiModalInstance_1_1) {
                AiModalInstance_1 = AiModalInstance_1_1;
            },
            function (AiModalContainer_1_1) {
                AiModalContainer_1 = AiModalContainer_1_1;
            }],
        execute: function() {
            AiModal = (function () {
                function AiModal(componentLoader, appRef) {
                    this.componentLoader = componentLoader;
                    this.appRef = appRef;
                    this._list = [];
                }
                /**
                 * Opens a modal window inside an existing component.
                 * @param componentType The angular Component to render as modal.
                 * @param bindings Resolved providers that will inject into the component provided.
                 * @param config A Modal Configuration object.
                 * @returns {Promise<AiModalInstance>}
                 */
                AiModal.prototype.open = function (componentType, bindings, config) {
                    var _this = this;
                    config = config ? config : new AiModalConfig_1.AiModalConfig();
                    var instance = new AiModalInstance_1.AiModalInstance(config, this);
                    instance.inElement = !!config.anchorName;
                    var containerBindings = core_1.Injector.resolve([core_1.provide(AiModalInstance_1.AiModalInstance, { useValue: instance })]);
                    var container = this.createContainer(containerBindings, config.anchorName);
                    return container
                        .then(function (containerRef) {
                        instance.containerRef = containerRef;
                        var modalDataBindings = core_1.Injector.resolve([core_1.provide(AiModalInstance_1.AiModalInstance, { useValue: instance })]).concat(bindings);
                        return _this.componentLoader.loadIntoLocation(componentType, containerRef.location, 'modalDialog', modalDataBindings)
                            .then(function (dialogRef) {
                            instance.dialogRef = dialogRef;
                            _this.push(instance);
                            return instance;
                        });
                    });
                };
                /**
                 * Push a AiModalInstance into the stack and manage it so when it's done
                 * it will automatically kick itself out of the stack.
                 * @param instance
                 */
                AiModal.prototype.push = function (instance) {
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
                 * Remove a AiModalInstance from the stack.
                 * @param instance
                 */
                AiModal.prototype.remove = function (instance) {
                    var idx = this._list.indexOf(instance);
                    if (idx > -1)
                        this._list.splice(idx, 1);
                    instance.onUnload();
                };
                AiModal.prototype.position = function (instance) {
                    return this.indexOf(instance);
                };
                AiModal.prototype.index = function (index) {
                    return this._list[index];
                };
                AiModal.prototype.indexOf = function (instance) {
                    return this._list.indexOf(instance);
                };
                Object.defineProperty(AiModal.prototype, "length", {
                    get: function () {
                        return this._list.length;
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Creates backdrop element.
                 
                 * @param {ResolvedProvider[]} Resolved providers,
                 *     must contain the AiModalInstance instance for this backdrop.
                 * @param {string} An anchor name, optional.
                 *     if not supplied backdrop gets applied next to elementRef, otherwise into it.
                 * @returns {Promise<ComponentRef>}
                 */
                AiModal.prototype.createContainer = function (bindings, anchorName) {
                    //The element to block using the modal
                    // TODO: appRef.injector.get(APP_COMPONENT) Doesn't work.
                    // When it does replace with the hack below.
                    //let myElementRef = this.appRef.injector.get(APP_COMPONENT).location;
                    var elementRef = this.appRef._rootComponents[0].location;
                    return (!anchorName) ?
                        this.componentLoader.loadNextToLocation(AiModalContainer_1.AiModalContainer, elementRef, bindings) :
                        this.componentLoader.loadIntoLocation(AiModalContainer_1.AiModalContainer, elementRef, anchorName, bindings);
                };
                AiModal = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [core_1.DynamicComponentLoader, core_1.ApplicationRef])
                ], AiModal);
                return AiModal;
            })();
            exports_1("AiModal", AiModal);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlNb2RhbC9BaU1vZGFsLnRzIl0sIm5hbWVzIjpbIkFpTW9kYWwiLCJBaU1vZGFsLmNvbnN0cnVjdG9yIiwiQWlNb2RhbC5vcGVuIiwiQWlNb2RhbC5wdXNoIiwiQWlNb2RhbC5yZW1vdmUiLCJBaU1vZGFsLnBvc2l0aW9uIiwiQWlNb2RhbC5pbmRleCIsIkFpTW9kYWwuaW5kZXhPZiIsIkFpTW9kYWwubGVuZ3RoIiwiQWlNb2RhbC5jcmVhdGVDb250YWluZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWlCQTtnQkFLSUEsaUJBQW9CQSxlQUF1Q0EsRUFBVUEsTUFBc0JBO29CQUF2RUMsb0JBQWVBLEdBQWZBLGVBQWVBLENBQXdCQTtvQkFBVUEsV0FBTUEsR0FBTkEsTUFBTUEsQ0FBZ0JBO29CQUZuRkEsVUFBS0EsR0FBc0JBLEVBQUVBLENBQUNBO2dCQUd0Q0EsQ0FBQ0E7Z0JBR0REOzs7Ozs7bUJBTUdBO2dCQUNJQSxzQkFBSUEsR0FBWEEsVUFDSUEsYUFBa0NBLEVBQ2xDQSxRQUE0QkEsRUFDNUJBLE1BQXNCQTtvQkFIMUJFLGlCQWdDQ0E7b0JBMUJHQSxNQUFNQSxHQUFHQSxNQUFNQSxHQUFJQSxNQUFNQSxHQUFHQSxJQUFJQSw2QkFBYUEsRUFBRUEsQ0FBQ0E7b0JBRWhEQSxJQUFJQSxRQUFRQSxHQUFHQSxJQUFJQSxpQ0FBZUEsQ0FBQ0EsTUFBTUEsRUFBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7b0JBQ2hEQSxRQUFRQSxDQUFDQSxTQUFTQSxHQUFHQSxDQUFDQSxDQUFDQSxNQUFNQSxDQUFDQSxVQUFVQSxDQUFDQTtvQkFFekNBLElBQUlBLGlCQUFpQkEsR0FBR0EsZUFBUUEsQ0FBQ0EsT0FBT0EsQ0FDcENBLENBQUNBLGNBQU9BLENBQUNBLGlDQUFlQSxFQUFFQSxFQUFDQSxRQUFRQSxFQUFFQSxRQUFRQSxFQUFDQSxDQUFDQSxDQUFDQSxDQUMvQ0EsQ0FBQ0E7b0JBQ05BLElBQUlBLFNBQVNB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QUFLQSxDQUFDQSxPQUFPQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQTtnQkFDeENBLENBQUNBO2dCQUVEUCxzQkFBSUEsMkJBQU1BO3lCQUFWQTt3QkFDSVEsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsTUFBTUEsQ0FBQ0E7b0JBQzdCQSxDQUFDQTs7O21CQUFBUjtnQkFFREE7Ozs7Ozs7O21CQVFHQTtnQkFDS0EsaUNBQWVBLEdBQXZCQSxVQUNJQSxRQUE0QkEsRUFDNUJBLFVBQW1CQTtvQkFHbkJTLHNDQUFzQ0E7b0JBQ3RDQSx5REFBeURBO29CQUN6REEsNENBQTRDQTtvQkFDNUNBLHNFQUFzRUE7b0JBQ3RFQSxJQUFJQSxVQUFVQSxHQUFxQkEsSUFBSUEsQ0FBQ0EsTUFBT0EsQ0FBQ0EsZUFBZUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsUUFBUUEsQ0FBQ0E7b0JBRTVFQSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFDQSxVQUFVQSxDQUFDQTt3QkFDaEJBLElBQUlBLENBQUNBLGVBQWVBLENBQUNBLGtCQUFrQkEsQ0FBQ0EsbUNBQWdCQSxFQUFFQSxVQUFVQSxFQUFFQSxRQUFRQSxDQUFDQTt3QkFDL0VBLElBQUlBLENBQUNBLGVBQWVBLENBQUNBLGdCQUFnQkEsQ0FBQ0EsbUNBQWdCQSxFQUFFQSxVQUFVQSxFQUFFQSxVQUFVQSxFQUFFQSxRQUFRQSxDQUFDQSxDQUFDQTtnQkFDbEdBLENBQUNBO2dCQXRITFQ7b0JBQUNBLGlCQUFVQSxFQUFFQTs7NEJBdUhYQTtnQkFBREEsY0FBQ0E7WUFBREEsQ0F2SEQsQUF1SEVBLElBQUE7WUF2SEYsNkJBdUhFLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9BaU1vZGFsL0FpTW9kYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIEluamVjdGFibGUsXG4gICAgRHluYW1pY0NvbXBvbmVudExvYWRlcixcbiAgICBDb21wb25lbnRSZWYsXG4gICAgRWxlbWVudFJlZixcbiAgICBJbmplY3RvcixcbiAgICBwcm92aWRlLFxuICAgIFJlc29sdmVkUHJvdmlkZXIsXG4gICAgT3B0aW9uYWwsXG4gICAgQXBwbGljYXRpb25SZWZcbn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0FpTW9kYWxDb25maWd9IGZyb20gJy4vQWlNb2RhbENvbmZpZyc7XG5pbXBvcnQge0FpTW9kYWxJbnN0YW5jZX0gZnJvbSAnLi9BaU1vZGFsSW5zdGFuY2UnO1xuaW1wb3J0IHtBaU1vZGFsQ29udGFpbmVyfSBmcm9tICcuL0FpTW9kYWxDb250YWluZXInO1xuaW1wb3J0IHsgRE9NIH0gZnJvbSAnYW5ndWxhcjIvc3JjL3BsYXRmb3JtL2RvbS9kb21fYWRhcHRlcic7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFpTW9kYWwge1xuXG4gICAgcHJpdmF0ZSBfbGlzdDogQWlNb2RhbEluc3RhbmNlW10gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY29tcG9uZW50TG9hZGVyOiBEeW5hbWljQ29tcG9uZW50TG9hZGVyLCBwcml2YXRlIGFwcFJlZjogQXBwbGljYXRpb25SZWYpe1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogT3BlbnMgYSBtb2RhbCB3aW5kb3cgaW5zaWRlIGFuIGV4aXN0aW5nIGNvbXBvbmVudC5cbiAgICAgKiBAcGFyYW0gY29tcG9uZW50VHlwZSBUaGUgYW5ndWxhciBDb21wb25lbnQgdG8gcmVuZGVyIGFzIG1vZGFsLlxuICAgICAqIEBwYXJhbSBiaW5kaW5ncyBSZXNvbHZlZCBwcm92aWRlcnMgdGhhdCB3aWxsIGluamVjdCBpbnRvIHRoZSBjb21wb25lbnQgcHJvdmlkZWQuXG4gICAgICogQHBhcmFtIGNvbmZpZyBBIE1vZGFsIENvbmZpZ3VyYXRpb24gb2JqZWN0LlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPEFpTW9kYWxJbnN0YW5jZT59XG4gICAgICovXG4gICAgcHVibGljIG9wZW4oXG4gICAgICAgIGNvbXBvbmVudFR5cGU6IEZ1bmN0aW9uQ29uc3RydWN0b3IsXG4gICAgICAgIGJpbmRpbmdzOiBSZXNvbHZlZFByb3ZpZGVyW10sXG4gICAgICAgIGNvbmZpZz86IEFpTW9kYWxDb25maWdcbiAgICAgICAgKTogUHJvbWlzZTxBaU1vZGFsSW5zdGFuY2U+IHtcblxuICAgICAgICBjb25maWcgPSBjb25maWcgPyAgY29uZmlnIDogbmV3IEFpTW9kYWxDb25maWcoKTtcblxuICAgICAgICBsZXQgaW5zdGFuY2UgPSBuZXcgQWlNb2RhbEluc3RhbmNlKGNvbmZpZyx0aGlzKTtcbiAgICAgICAgaW5zdGFuY2UuaW5FbGVtZW50ID0gISFjb25maWcuYW5jaG9yTmFtZTtcblxuICAgICAgICBsZXQgY29udGFpbmVyQmluZGluZ3MgPSBJbmplY3Rvci5yZXNvbHZlKFxuICAgICAgICAgICAgW3Byb3ZpZGUoQWlNb2RhbEluc3RhbmNlLCB7dXNlVmFsdWU6IGluc3RhbmNlfSldXG4gICAgICAgICAgICApO1xuICAgICAgICBsZXQgY29udGFpbmVyOiBQcm9taXNlPENvbXBvbmVudFJlZj4gPXRoaXMuY3JlYXRlQ29udGFpbmVyKCBjb250YWluZXJCaW5kaW5ncywgY29uZmlnLmFuY2hvck5hbWUpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lclxuICAgICAgICAgICAgLnRoZW4oIChjb250YWluZXJSZWY6IENvbXBvbmVudFJlZikgPT4ge1xuICAgICAgICAgICAgICAgIGluc3RhbmNlLmNvbnRhaW5lclJlZiA9IGNvbnRhaW5lclJlZjtcblxuICAgICAgICAgICAgICAgIGxldCBtb2RhbERhdGFCaW5kaW5ncyA9IEluamVjdG9yLnJlc29sdmUoXG4gICAgICAgICAgICAgICAgICAgIFtwcm92aWRlKEFpTW9kYWxJbnN0YW5jZSwge3VzZVZhbHVlOiBpbnN0YW5jZX0pXSkuY29uY2F0KGJpbmRpbmdzKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbXBvbmVudExvYWRlci5sb2FkSW50b0xvY2F0aW9uKFxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRUeXBlLCBjb250YWluZXJSZWYubG9jYXRpb24sICdtb2RhbERpYWxvZycsIG1vZGFsRGF0YUJpbmRpbmdzKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihkaWFsb2dSZWYgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2UuZGlhbG9nUmVmID0gZGlhbG9nUmVmO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnB1c2goaW5zdGFuY2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pOyBcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQdXNoIGEgQWlNb2RhbEluc3RhbmNlIGludG8gdGhlIHN0YWNrIGFuZCBtYW5hZ2UgaXQgc28gd2hlbiBpdCdzIGRvbmVcbiAgICAgKiBpdCB3aWxsIGF1dG9tYXRpY2FsbHkga2ljayBpdHNlbGYgb3V0IG9mIHRoZSBzdGFjay5cbiAgICAgKiBAcGFyYW0gaW5zdGFuY2VcbiAgICAgKi9cbiAgICBwdXNoKGluc3RhbmNlOiBBaU1vZGFsSW5zdGFuY2UpOiB2b2lkIHtcbiAgICAgICAgbGV0IGlkeCA9IHRoaXMuX2xpc3QuaW5kZXhPZihpbnN0YW5jZSk7XG4gICAgICAgIGlmIChpZHggPT09IC0xKSB0aGlzLl9saXN0LnB1c2goaW5zdGFuY2UpO1xuICAgICAgICBpbnN0YW5jZS5vbkxvYWQoKTtcbiAgICAgICAgaW5zdGFuY2UucmVzdWx0XG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmUoaW5zdGFuY2UpOyAgIFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICAgdGhpcy5yZW1vdmUoaW5zdGFuY2UpOyAgIFxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGEgQWlNb2RhbEluc3RhbmNlIGZyb20gdGhlIHN0YWNrLlxuICAgICAqIEBwYXJhbSBpbnN0YW5jZVxuICAgICAqL1xuICAgIHJlbW92ZShpbnN0YW5jZTogQWlNb2RhbEluc3RhbmNlKTogdm9pZCB7XG4gICAgICAgIGxldCBpZHggPSB0aGlzLl9saXN0LmluZGV4T2YoaW5zdGFuY2UpO1xuICAgICAgICBpZiAoaWR4ID4gLTEpIHRoaXMuX2xpc3Quc3BsaWNlKGlkeCwgMSk7XG4gICAgICAgIGluc3RhbmNlLm9uVW5sb2FkKCk7XG5cbiAgICB9XG5cbiAgICBwb3NpdGlvbihpbnN0YW5jZTogQWlNb2RhbEluc3RhbmNlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmluZGV4T2YoaW5zdGFuY2UpO1xuICAgIH1cblxuICAgIGluZGV4KGluZGV4OiBudW1iZXIpOiBBaU1vZGFsSW5zdGFuY2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5fbGlzdFtpbmRleF07XG4gICAgfVxuXG4gICAgaW5kZXhPZihpbnN0YW5jZTogQWlNb2RhbEluc3RhbmNlKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xpc3QuaW5kZXhPZihpbnN0YW5jZSk7XG4gICAgfVxuXG4gICAgZ2V0IGxlbmd0aCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fbGlzdC5sZW5ndGg7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBiYWNrZHJvcCBlbGVtZW50LlxuICAgICBcbiAgICAgKiBAcGFyYW0ge1Jlc29sdmVkUHJvdmlkZXJbXX0gUmVzb2x2ZWQgcHJvdmlkZXJzLFxuICAgICAqICAgICBtdXN0IGNvbnRhaW4gdGhlIEFpTW9kYWxJbnN0YW5jZSBpbnN0YW5jZSBmb3IgdGhpcyBiYWNrZHJvcC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gQW4gYW5jaG9yIG5hbWUsIG9wdGlvbmFsLlxuICAgICAqICAgICBpZiBub3Qgc3VwcGxpZWQgYmFja2Ryb3AgZ2V0cyBhcHBsaWVkIG5leHQgdG8gZWxlbWVudFJlZiwgb3RoZXJ3aXNlIGludG8gaXQuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q29tcG9uZW50UmVmPn1cbiAgICAgKi9cbiAgICBwcml2YXRlIGNyZWF0ZUNvbnRhaW5lcihcbiAgICAgICAgYmluZGluZ3M6IFJlc29sdmVkUHJvdmlkZXJbXSxcbiAgICAgICAgYW5jaG9yTmFtZT86IHN0cmluZ1xuICAgICAgICApIDogUHJvbWlzZTxDb21wb25lbnRSZWY+IHtcbiAgICAgICAgICAgIFxuICAgICAgICAvL1RoZSBlbGVtZW50IHRvIGJsb2NrIHVzaW5nIHRoZSBtb2RhbFxuICAgICAgICAvLyBUT0RPOiBhcHBSZWYuaW5qZWN0b3IuZ2V0KEFQUF9DT01QT05FTlQpIERvZXNuJ3Qgd29yay5cbiAgICAgICAgLy8gV2hlbiBpdCBkb2VzIHJlcGxhY2Ugd2l0aCB0aGUgaGFjayBiZWxvdy5cbiAgICAgICAgLy9sZXQgbXlFbGVtZW50UmVmID0gdGhpcy5hcHBSZWYuaW5qZWN0b3IuZ2V0KEFQUF9DT01QT05FTlQpLmxvY2F0aW9uO1xuICAgICAgICBsZXQgZWxlbWVudFJlZjogRWxlbWVudFJlZiA9ICg8YW55PnRoaXMuYXBwUmVmKS5fcm9vdENvbXBvbmVudHNbMF0ubG9jYXRpb247XG5cbiAgICAgICAgcmV0dXJuICghYW5jaG9yTmFtZSkgP1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRMb2FkZXIubG9hZE5leHRUb0xvY2F0aW9uKEFpTW9kYWxDb250YWluZXIsIGVsZW1lbnRSZWYsIGJpbmRpbmdzKSA6XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudExvYWRlci5sb2FkSW50b0xvY2F0aW9uKEFpTW9kYWxDb250YWluZXIsIGVsZW1lbnRSZWYsIGFuY2hvck5hbWUsIGJpbmRpbmdzKTtcbiAgICB9XG4gfSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
