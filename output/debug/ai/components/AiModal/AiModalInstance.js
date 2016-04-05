System.register(['angular2/src/facade/async'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var async_1;
    var AiModalInstance;
    return {
        setters:[
            function (async_1_1) {
                async_1 = async_1_1;
            }],
        execute: function() {
            /**
             * API to an open modal window.
             */
            AiModalInstance = (function () {
                function AiModalInstance(config, modal) {
                    this.config = config;
                    this.modal = modal;
                    this._resultDefered = async_1.PromiseWrapper.completer();
                }
                Object.defineProperty(AiModalInstance.prototype, "isTopModal", {
                    get: function () {
                        return this.modal.position(this) == this.modal.length - 1;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AiModalInstance.prototype, "result", {
                    /**
                     * A Promise that is resolved on a close event and rejected on a dismiss event.
                     * @returns {Promise<T>|any|*|Promise<any>}
                     */
                    get: function () {
                        return this._resultDefered.promise;
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 *  Close the modal with a return value, i.e: result.
                 */
                AiModalInstance.prototype.close = function (result) {
                    if (result === void 0) { result = null; }
                    if (this.dialogRef.instance.beforeClose &&
                        this.dialogRef.instance.beforeClose() === true)
                        return;
                    this.dispose();
                    this._resultDefered.resolve(result);
                };
                /**
                 *  Close the modal without a return value, i.e: cancelled.
                 *  This call is automatically invoked when a user either:
                 *  - Presses an exit keyboard key (if configured).
                 *  - Clicks outside of the modal window (if configured).
                 *  Usually, dismiss represent a Cancel button or a X button.
                 */
                AiModalInstance.prototype.dismiss = function () {
                    if (this.dialogRef.instance.beforeDismiss &&
                        this.dialogRef.instance.beforeDismiss() === true)
                        return;
                    this.dispose();
                    this._resultDefered.reject();
                };
                AiModalInstance.prototype.dispose = function () {
                    this.containerRef.dispose();
                    this.dialogRef.dispose();
                };
                AiModalInstance.prototype.onLoad = function () {
                    this.containerRef.instance.onLoad();
                };
                AiModalInstance.prototype.onUnload = function () {
                    this.containerRef.instance.onUnload();
                };
                return AiModalInstance;
            }());
            exports_1("AiModalInstance", AiModalInstance);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlNb2RhbC9BaU1vZGFsSW5zdGFuY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7WUFNQTs7ZUFFRztZQUNIO2dCQVdJLHlCQUFtQixNQUFxQixFQUFTLEtBQWE7b0JBQTNDLFdBQU0sR0FBTixNQUFNLENBQWU7b0JBQVMsVUFBSyxHQUFMLEtBQUssQ0FBUTtvQkFDMUQsSUFBSSxDQUFDLGNBQWMsR0FBRyxzQkFBYyxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUNyRCxDQUFDO2dCQUVELHNCQUFJLHVDQUFVO3lCQUFkO3dCQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7b0JBQzlELENBQUM7OzttQkFBQTtnQkFNRCxzQkFBSSxtQ0FBTTtvQkFKVjs7O3VCQUdHO3lCQUNIO3dCQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQztvQkFDdkMsQ0FBQzs7O21CQUFBO2dCQUVEOzttQkFFRztnQkFDSCwrQkFBSyxHQUFMLFVBQU0sTUFBa0I7b0JBQWxCLHNCQUFrQixHQUFsQixhQUFrQjtvQkFDcEIsRUFBRSxDQUFDLENBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsV0FBVzt3QkFDaEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLEtBQUssSUFBSyxDQUFDO3dCQUFDLE1BQU0sQ0FBQztvQkFDaEUsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO29CQUNmLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUN4QyxDQUFDO2dCQUVEOzs7Ozs7bUJBTUc7Z0JBQ0gsaUNBQU8sR0FBUDtvQkFDSSxFQUFFLENBQUMsQ0FBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxhQUFhO3dCQUN0QyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsS0FBSyxJQUFLLENBQUM7d0JBQUMsTUFBTSxDQUFDO29CQUM5RCxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7b0JBQ2YsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDakMsQ0FBQztnQkFFTyxpQ0FBTyxHQUFmO29CQUNJLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUM7b0JBQzVCLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQzdCLENBQUM7Z0JBRUQsZ0NBQU0sR0FBTjtvQkFDSSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDeEMsQ0FBQztnQkFFRCxrQ0FBUSxHQUFSO29CQUNJLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUMxQyxDQUFDO2dCQUVMLHNCQUFDO1lBQUQsQ0FoRUEsQUFnRUMsSUFBQTtZQWhFRCw2Q0FnRUMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL0FpTW9kYWwvQWlNb2RhbEluc3RhbmNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50UmVmIH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1Byb21pc2VXcmFwcGVyfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2FzeW5jJztcblxuaW1wb3J0IHtBaU1vZGFsQ29uZmlnfSBmcm9tICcuL0FpTW9kYWxDb25maWcnO1xuaW1wb3J0IHtBaU1vZGFsfSBmcm9tICcuL0FpTW9kYWwnO1xuXG4vKipcbiAqIEFQSSB0byBhbiBvcGVuIG1vZGFsIHdpbmRvdy5cbiAqL1xuZXhwb3J0IGNsYXNzIEFpTW9kYWxJbnN0YW5jZSB7XG5cblxuICAgIHByaXZhdGUgX3Jlc3VsdERlZmVyZWQ6IGFueTtcbiAgICBcbiAgICBkaWFsb2dSZWY6IENvbXBvbmVudFJlZjtcbiAgICBcbiAgICBjb250YWluZXJSZWY6IENvbXBvbmVudFJlZjtcblxuICAgIGluRWxlbWVudDogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBjb25maWc6IEFpTW9kYWxDb25maWcscHJpdmF0ZSBtb2RhbDpBaU1vZGFsKSB7XG4gICAgICAgIHRoaXMuX3Jlc3VsdERlZmVyZWQgPSBQcm9taXNlV3JhcHBlci5jb21wbGV0ZXIoKTtcbiAgICB9XG5cbiAgICBnZXQgaXNUb3BNb2RhbCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5tb2RhbC5wb3NpdGlvbih0aGlzKSA9PSB0aGlzLm1vZGFsLmxlbmd0aCAtIDE7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQSBQcm9taXNlIHRoYXQgaXMgcmVzb2x2ZWQgb24gYSBjbG9zZSBldmVudCBhbmQgcmVqZWN0ZWQgb24gYSBkaXNtaXNzIGV2ZW50LlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPFQ+fGFueXwqfFByb21pc2U8YW55Pn1cbiAgICAgKi9cbiAgICBnZXQgcmVzdWx0KCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZXN1bHREZWZlcmVkLnByb21pc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogIENsb3NlIHRoZSBtb2RhbCB3aXRoIGEgcmV0dXJuIHZhbHVlLCBpLmU6IHJlc3VsdC5cbiAgICAgKi9cbiAgICBjbG9zZShyZXN1bHQ6IGFueSA9IG51bGwpIHtcbiAgICAgICAgaWYgKCB0aGlzLmRpYWxvZ1JlZi5pbnN0YW5jZS5iZWZvcmVDbG9zZSAmJlxuICAgICAgICAgICAgICAgIHRoaXMuZGlhbG9nUmVmLmluc3RhbmNlLmJlZm9yZUNsb3NlKCkgPT09IHRydWUgKSByZXR1cm47XG4gICAgICAgIHRoaXMuZGlzcG9zZSgpO1xuICAgICAgICB0aGlzLl9yZXN1bHREZWZlcmVkLnJlc29sdmUocmVzdWx0KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiAgQ2xvc2UgdGhlIG1vZGFsIHdpdGhvdXQgYSByZXR1cm4gdmFsdWUsIGkuZTogY2FuY2VsbGVkLlxuICAgICAqICBUaGlzIGNhbGwgaXMgYXV0b21hdGljYWxseSBpbnZva2VkIHdoZW4gYSB1c2VyIGVpdGhlcjpcbiAgICAgKiAgLSBQcmVzc2VzIGFuIGV4aXQga2V5Ym9hcmQga2V5IChpZiBjb25maWd1cmVkKS5cbiAgICAgKiAgLSBDbGlja3Mgb3V0c2lkZSBvZiB0aGUgbW9kYWwgd2luZG93IChpZiBjb25maWd1cmVkKS5cbiAgICAgKiAgVXN1YWxseSwgZGlzbWlzcyByZXByZXNlbnQgYSBDYW5jZWwgYnV0dG9uIG9yIGEgWCBidXR0b24uXG4gICAgICovXG4gICAgZGlzbWlzcygpIHtcbiAgICAgICAgaWYgKCB0aGlzLmRpYWxvZ1JlZi5pbnN0YW5jZS5iZWZvcmVEaXNtaXNzICYmXG4gICAgICAgICAgICB0aGlzLmRpYWxvZ1JlZi5pbnN0YW5jZS5iZWZvcmVEaXNtaXNzKCkgPT09IHRydWUgKSByZXR1cm47XG4gICAgICAgIHRoaXMuZGlzcG9zZSgpO1xuICAgICAgICB0aGlzLl9yZXN1bHREZWZlcmVkLnJlamVjdCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZGlzcG9zZSgpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXJSZWYuZGlzcG9zZSgpO1xuICAgICAgICB0aGlzLmRpYWxvZ1JlZi5kaXNwb3NlKCk7XG4gICAgfVxuICAgIFxuICAgIG9uTG9hZCgpe1xuICAgICAgICB0aGlzLmNvbnRhaW5lclJlZi5pbnN0YW5jZS5vbkxvYWQoKTtcbiAgICB9XG4gICAgXG4gICAgb25VbmxvYWQoKXtcbiAgICAgICAgdGhpcy5jb250YWluZXJSZWYuaW5zdGFuY2Uub25VbmxvYWQoKTtcbiAgICB9XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
