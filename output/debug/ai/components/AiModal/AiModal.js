System.register(['angular2/core', './AiModalConfig', './AiModalInstance', './AiModalContainer'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
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
            }());
            exports_1("AiModal", AiModal);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlNb2RhbC9BaU1vZGFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBTUE7Z0JBSUksaUJBQW9CLGVBQXVDLEVBQVUsTUFBc0I7b0JBQXZFLG9CQUFlLEdBQWYsZUFBZSxDQUF3QjtvQkFBVSxXQUFNLEdBQU4sTUFBTSxDQUFnQjtvQkFGbkYsVUFBSyxHQUFzQixFQUFFLENBQUM7Z0JBR3RDLENBQUM7Z0JBRUQ7Ozs7OzttQkFNRztnQkFDSSxzQkFBSSxHQUFYLFVBQ0ksYUFBa0MsRUFDbEMsUUFBNEIsRUFDNUIsTUFBc0I7b0JBSDFCLGlCQWdDQztvQkExQkcsTUFBTSxHQUFHLE1BQU0sR0FBSSxNQUFNLEdBQUcsSUFBSSw2QkFBYSxFQUFFLENBQUM7b0JBRWhELElBQUksUUFBUSxHQUFHLElBQUksaUNBQWUsQ0FBQyxNQUFNLEVBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ2hELFFBQVEsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUM7b0JBRXpDLElBQUksaUJBQWlCLEdBQUcsZUFBUSxDQUFDLE9BQU8sQ0FDcEMsQ0FBQyxjQUFPLENBQUMsaUNBQWUsRUFBRSxFQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUMsQ0FBQyxDQUFDLENBQy9DLENBQUM7b0JBQ04sSUFBSSxTQUFTLEdBQXlCLElBQUksQ0FBQyxlQUFlLENBQUUsaUJBQWlCLEVBQUUsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO29CQUVsRyxNQUFNLENBQUMsU0FBUzt5QkFDWCxJQUFJLENBQUUsVUFBQyxZQUEwQjt3QkFDOUIsUUFBUSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7d0JBRXJDLElBQUksaUJBQWlCLEdBQUcsZUFBUSxDQUFDLE9BQU8sQ0FDcEMsQ0FBQyxjQUFPLENBQUMsaUNBQWUsRUFBRSxFQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxN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QUFVLEVBQUU7OzJCQUFBO2dCQXFIWixjQUFDO1lBQUQsQ0FwSEQsQUFvSEUsSUFBQTtZQXBIRiw2QkFvSEUsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL0FpTW9kYWwvQWlNb2RhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZSxEeW5hbWljQ29tcG9uZW50TG9hZGVyLENvbXBvbmVudFJlZixFbGVtZW50UmVmLEluamVjdG9yLHByb3ZpZGUsUmVzb2x2ZWRQcm92aWRlcixBcHBsaWNhdGlvblJlZn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0FpTW9kYWxDb25maWd9IGZyb20gJy4vQWlNb2RhbENvbmZpZyc7XG5pbXBvcnQge0FpTW9kYWxJbnN0YW5jZX0gZnJvbSAnLi9BaU1vZGFsSW5zdGFuY2UnO1xuaW1wb3J0IHtBaU1vZGFsQ29udGFpbmVyfSBmcm9tICcuL0FpTW9kYWxDb250YWluZXInO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQWlNb2RhbCB7XG5cbiAgICBwcml2YXRlIF9saXN0OiBBaU1vZGFsSW5zdGFuY2VbXSA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBjb21wb25lbnRMb2FkZXI6IER5bmFtaWNDb21wb25lbnRMb2FkZXIsIHByaXZhdGUgYXBwUmVmOiBBcHBsaWNhdGlvblJlZil7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT3BlbnMgYSBtb2RhbCB3aW5kb3cgaW5zaWRlIGFuIGV4aXN0aW5nIGNvbXBvbmVudC5cbiAgICAgKiBAcGFyYW0gY29tcG9uZW50VHlwZSBUaGUgYW5ndWxhciBDb21wb25lbnQgdG8gcmVuZGVyIGFzIG1vZGFsLlxuICAgICAqIEBwYXJhbSBiaW5kaW5ncyBSZXNvbHZlZCBwcm92aWRlcnMgdGhhdCB3aWxsIGluamVjdCBpbnRvIHRoZSBjb21wb25lbnQgcHJvdmlkZWQuXG4gICAgICogQHBhcmFtIGNvbmZpZyBBIE1vZGFsIENvbmZpZ3VyYXRpb24gb2JqZWN0LlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPEFpTW9kYWxJbnN0YW5jZT59XG4gICAgICovXG4gICAgcHVibGljIG9wZW4oXG4gICAgICAgIGNvbXBvbmVudFR5cGU6IEZ1bmN0aW9uQ29uc3RydWN0b3IsXG4gICAgICAgIGJpbmRpbmdzOiBSZXNvbHZlZFByb3ZpZGVyW10sXG4gICAgICAgIGNvbmZpZz86IEFpTW9kYWxDb25maWdcbiAgICAgICAgKTogUHJvbWlzZTxBaU1vZGFsSW5zdGFuY2U+IHtcblxuICAgICAgICBjb25maWcgPSBjb25maWcgPyAgY29uZmlnIDogbmV3IEFpTW9kYWxDb25maWcoKTtcblxuICAgICAgICBsZXQgaW5zdGFuY2UgPSBuZXcgQWlNb2RhbEluc3RhbmNlKGNvbmZpZyx0aGlzKTtcbiAgICAgICAgaW5zdGFuY2UuaW5FbGVtZW50ID0gISFjb25maWcuYW5jaG9yTmFtZTtcblxuICAgICAgICBsZXQgY29udGFpbmVyQmluZGluZ3MgPSBJbmplY3Rvci5yZXNvbHZlKFxuICAgICAgICAgICAgW3Byb3ZpZGUoQWlNb2RhbEluc3RhbmNlLCB7dXNlVmFsdWU6IGluc3RhbmNlfSldXG4gICAgICAgICAgICApO1xuICAgICAgICBsZXQgY29udGFpbmVyOiBQcm9taXNlPENvbXBvbmVudFJlZj4gPXRoaXMuY3JlYXRlQ29udGFpbmVyKCBjb250YWluZXJCaW5kaW5ncywgY29uZmlnLmFuY2hvck5hbWUpO1xuXG4gICAgICAgIHJldHVybiBjb250YWluZXJcbiAgICAgICAgICAgIC50aGVuKCAoY29udGFpbmVyUmVmOiBDb21wb25lbnRSZWYpID0+IHtcbiAgICAgICAgICAgICAgICBpbnN0YW5jZS5jb250YWluZXJSZWYgPSBjb250YWluZXJSZWY7XG5cbiAgICAgICAgICAgICAgICBsZXQgbW9kYWxEYXRhQmluZGluZ3MgPSBJbmplY3Rvci5yZXNvbHZlKFxuICAgICAgICAgICAgICAgICAgICBbcHJvdmlkZShBaU1vZGFsSW5zdGFuY2UsIHt1c2VWYWx1ZTogaW5zdGFuY2V9KV0pLmNvbmNhdChiaW5kaW5ncyk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb21wb25lbnRMb2FkZXIubG9hZEludG9Mb2NhdGlvbihcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50VHlwZSwgY29udGFpbmVyUmVmLmxvY2F0aW9uLCAnbW9kYWxEaWFsb2cnLCBtb2RhbERhdGFCaW5kaW5ncylcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZGlhbG9nUmVmID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbmNlLmRpYWxvZ1JlZiA9IGRpYWxvZ1JlZjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wdXNoKGluc3RhbmNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQdXNoIGEgQWlNb2RhbEluc3RhbmNlIGludG8gdGhlIHN0YWNrIGFuZCBtYW5hZ2UgaXQgc28gd2hlbiBpdCdzIGRvbmVcbiAgICAgKiBpdCB3aWxsIGF1dG9tYXRpY2FsbHkga2ljayBpdHNlbGYgb3V0IG9mIHRoZSBzdGFjay5cbiAgICAgKiBAcGFyYW0gaW5zdGFuY2VcbiAgICAgKi9cbiAgICBwdXNoKGluc3RhbmNlOiBBaU1vZGFsSW5zdGFuY2UpOiB2b2lkIHtcbiAgICAgICAgbGV0IGlkeCA9IHRoaXMuX2xpc3QuaW5kZXhPZihpbnN0YW5jZSk7XG4gICAgICAgIGlmIChpZHggPT09IC0xKSB0aGlzLl9saXN0LnB1c2goaW5zdGFuY2UpO1xuICAgICAgICBpbnN0YW5jZS5vbkxvYWQoKTtcbiAgICAgICAgaW5zdGFuY2UucmVzdWx0XG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmUoaW5zdGFuY2UpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICAgdGhpcy5yZW1vdmUoaW5zdGFuY2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGEgQWlNb2RhbEluc3RhbmNlIGZyb20gdGhlIHN0YWNrLlxuICAgICAqIEBwYXJhbSBpbnN0YW5jZVxuICAgICAqL1xuICAgIHJlbW92ZShpbnN0YW5jZTogQWlNb2RhbEluc3RhbmNlKTogdm9pZCB7XG4gICAgICAgIGxldCBpZHggPSB0aGlzLl9saXN0LmluZGV4T2YoaW5zdGFuY2UpO1xuICAgICAgICBpZiAoaWR4ID4gLTEpIHRoaXMuX2xpc3Quc3BsaWNlKGlkeCwgMSk7XG4gICAgICAgIGluc3RhbmNlLm9uVW5sb2FkKCk7XG4gICAgfVxuXG4gICAgcG9zaXRpb24oaW5zdGFuY2U6IEFpTW9kYWxJbnN0YW5jZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbmRleE9mKGluc3RhbmNlKTtcbiAgICB9XG5cbiAgICBpbmRleChpbmRleDogbnVtYmVyKTogQWlNb2RhbEluc3RhbmNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xpc3RbaW5kZXhdO1xuICAgIH1cblxuICAgIGluZGV4T2YoaW5zdGFuY2U6IEFpTW9kYWxJbnN0YW5jZSk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9saXN0LmluZGV4T2YoaW5zdGFuY2UpO1xuICAgIH1cblxuICAgIGdldCBsZW5ndGgoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xpc3QubGVuZ3RoO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYmFja2Ryb3AgZWxlbWVudC5cblxuICAgICAqIEBwYXJhbSB7UmVzb2x2ZWRQcm92aWRlcltdfSBSZXNvbHZlZCBwcm92aWRlcnMsXG4gICAgICogICAgIG11c3QgY29udGFpbiB0aGUgQWlNb2RhbEluc3RhbmNlIGluc3RhbmNlIGZvciB0aGlzIGJhY2tkcm9wLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBBbiBhbmNob3IgbmFtZSwgb3B0aW9uYWwuXG4gICAgICogICAgIGlmIG5vdCBzdXBwbGllZCBiYWNrZHJvcCBnZXRzIGFwcGxpZWQgbmV4dCB0byBlbGVtZW50UmVmLCBvdGhlcndpc2UgaW50byBpdC5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDb21wb25lbnRSZWY+fVxuICAgICAqL1xuICAgIHByaXZhdGUgY3JlYXRlQ29udGFpbmVyKFxuICAgICAgICBiaW5kaW5nczogUmVzb2x2ZWRQcm92aWRlcltdLFxuICAgICAgICBhbmNob3JOYW1lPzogc3RyaW5nXG4gICAgICAgICkgOiBQcm9taXNlPENvbXBvbmVudFJlZj4ge1xuXG4gICAgICAgIC8vVGhlIGVsZW1lbnQgdG8gYmxvY2sgdXNpbmcgdGhlIG1vZGFsXG4gICAgICAgIC8vIFRPRE86IGFwcFJlZi5pbmplY3Rvci5nZXQoQVBQX0NPTVBPTkVOVCkgRG9lc24ndCB3b3JrLlxuICAgICAgICAvLyBXaGVuIGl0IGRvZXMgcmVwbGFjZSB3aXRoIHRoZSBoYWNrIGJlbG93LlxuICAgICAgICAvL2xldCBteUVsZW1lbnRSZWYgPSB0aGlzLmFwcFJlZi5pbmplY3Rvci5nZXQoQVBQX0NPTVBPTkVOVCkubG9jYXRpb247XG4gICAgICAgIGxldCBlbGVtZW50UmVmOiBFbGVtZW50UmVmID0gKDxhbnk+dGhpcy5hcHBSZWYpLl9yb290Q29tcG9uZW50c1swXS5sb2NhdGlvbjtcblxuICAgICAgICByZXR1cm4gKCFhbmNob3JOYW1lKSA/XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudExvYWRlci5sb2FkTmV4dFRvTG9jYXRpb24oQWlNb2RhbENvbnRhaW5lciwgZWxlbWVudFJlZiwgYmluZGluZ3MpIDpcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50TG9hZGVyLmxvYWRJbnRvTG9jYXRpb24oQWlNb2RhbENvbnRhaW5lciwgZWxlbWVudFJlZiwgYW5jaG9yTmFtZSwgYmluZGluZ3MpO1xuICAgIH1cbiB9Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
