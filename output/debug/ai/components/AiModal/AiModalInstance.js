System.register(['angular2/src/facade/async'], function(exports_1) {
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
            })();
            exports_1("AiModalInstance", AiModalInstance);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlNb2RhbC9BaU1vZGFsSW5zdGFuY2UudHMiXSwibmFtZXMiOlsiQWlNb2RhbEluc3RhbmNlIiwiQWlNb2RhbEluc3RhbmNlLmNvbnN0cnVjdG9yIiwiQWlNb2RhbEluc3RhbmNlLmlzVG9wTW9kYWwiLCJBaU1vZGFsSW5zdGFuY2UucmVzdWx0IiwiQWlNb2RhbEluc3RhbmNlLmNsb3NlIiwiQWlNb2RhbEluc3RhbmNlLmRpc21pc3MiLCJBaU1vZGFsSW5zdGFuY2UuZGlzcG9zZSIsIkFpTW9kYWxJbnN0YW5jZS5vbkxvYWQiLCJBaU1vZGFsSW5zdGFuY2Uub25VbmxvYWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztZQU1BOztlQUVHO1lBQ0g7Z0JBV0lBLHlCQUFtQkEsTUFBcUJBLEVBQVNBLEtBQWFBO29CQUEzQ0MsV0FBTUEsR0FBTkEsTUFBTUEsQ0FBZUE7b0JBQVNBLFVBQUtBLEdBQUxBLEtBQUtBLENBQVFBO29CQUMxREEsSUFBSUEsQ0FBQ0EsY0FBY0EsR0FBR0Esc0JBQWNBLENBQUNBLFNBQVNBLEVBQUVBLENBQUNBO2dCQUNyREEsQ0FBQ0E7Z0JBRURELHNCQUFJQSx1Q0FBVUE7eUJBQWRBO3dCQUNJRSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxRQUFRQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxNQUFNQSxHQUFHQSxDQUFDQSxDQUFDQTtvQkFDOURBLENBQUNBOzs7bUJBQUFGO2dCQU1EQSxzQkFBSUEsbUNBQU1BO29CQUpWQTs7O3VCQUdHQTt5QkFDSEE7d0JBQ0lHLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLGNBQWNBLENBQUNBLE9BQU9BLENBQUNBO29CQUN2Q0EsQ0FBQ0E7OzttQkFBQUg7Z0JBRURBOzttQkFFR0E7Z0JBQ0hBLCtCQUFLQSxHQUFMQSxVQUFNQSxNQUFrQkE7b0JBQWxCSSxzQkFBa0JBLEdBQWxCQSxhQUFrQkE7b0JBQ3BCQSxFQUFFQSxDQUFDQSxDQUFFQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxRQUFRQSxDQUFDQSxXQUFXQTt3QkFDaENBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLFFBQVFBLENBQUNBLFdBQVdBLEVBQUVBLEtBQUtBLElBQUtBLENBQUNBO3dCQUFDQSxNQUFNQSxDQUFDQTtvQkFDaEVBLElBQUlBLENBQUNBLE9BQU9BLEVBQUVBLENBQUNBO29CQUNmQSxJQUFJQSxDQUFDQSxjQUFjQSxDQUFDQSxPQUFPQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQTtnQkFDeENBLENBQUNBO2dCQUVESjs7Ozs7O21CQU1HQTtnQkFDSEEsaUNBQU9BLEdBQVBBO29CQUNJSyxFQUFFQSxDQUFDQSxDQUFFQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxRQUFRQSxDQUFDQSxhQUFhQTt3QkFDdENBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLFFBQVFBLENBQUNBLGFBQWFBLEVBQUVBLEtBQUtBLElBQUtBLENBQUNBO3dCQUFDQSxNQUFNQSxDQUFDQTtvQkFDOURBLElBQUlBLENBQUNBLE9BQU9BLEVBQUVBLENBQUNBO29CQUNmQSxJQUFJQSxDQUFDQSxjQUFjQSxDQUFDQSxNQUFNQSxFQUFFQSxDQUFDQTtnQkFDakNBLENBQUNBO2dCQUVPTCxpQ0FBT0EsR0FBZkE7b0JBQ0lNLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLE9BQU9BLEVBQUVBLENBQUNBO29CQUM1QkEsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsT0FBT0EsRUFBRUEsQ0FBQ0E7Z0JBQzdCQSxDQUFDQTtnQkFFRE4sZ0NBQU1BLEdBQU5BO29CQUNJTyxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxRQUFRQSxDQUFDQSxNQUFNQSxFQUFFQSxDQUFDQTtnQkFDeENBLENBQUNBO2dCQUVEUCxrQ0FBUUEsR0FBUkE7b0JBQ0lRLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLFFBQVFBLENBQUNBLFFBQVFBLEVBQUVBLENBQUNBO2dCQUMxQ0EsQ0FBQ0E7Z0JBRUxSLHNCQUFDQTtZQUFEQSxDQWhFQSxBQWdFQ0EsSUFBQTtZQWhFRCw2Q0FnRUMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL0FpTW9kYWwvQWlNb2RhbEluc3RhbmNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50UmVmIH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1Byb21pc2VXcmFwcGVyfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2FzeW5jJztcblxuaW1wb3J0IHtBaU1vZGFsQ29uZmlnfSBmcm9tICcuL0FpTW9kYWxDb25maWcnO1xuaW1wb3J0IHtBaU1vZGFsfSBmcm9tICcuL0FpTW9kYWwnO1xuXG4vKipcbiAqIEFQSSB0byBhbiBvcGVuIG1vZGFsIHdpbmRvdy5cbiAqL1xuZXhwb3J0IGNsYXNzIEFpTW9kYWxJbnN0YW5jZSB7XG5cblxuICAgIHByaXZhdGUgX3Jlc3VsdERlZmVyZWQ6IGFueTtcbiAgICBcbiAgICBkaWFsb2dSZWY6IENvbXBvbmVudFJlZjtcbiAgICBcbiAgICBjb250YWluZXJSZWY6IENvbXBvbmVudFJlZjtcblxuICAgIGluRWxlbWVudDogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBjb25maWc6IEFpTW9kYWxDb25maWcscHJpdmF0ZSBtb2RhbDpBaU1vZGFsKSB7XG4gICAgICAgIHRoaXMuX3Jlc3VsdERlZmVyZWQgPSBQcm9taXNlV3JhcHBlci5jb21wbGV0ZXIoKTtcbiAgICB9XG5cbiAgICBnZXQgaXNUb3BNb2RhbCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5tb2RhbC5wb3NpdGlvbih0aGlzKSA9PSB0aGlzLm1vZGFsLmxlbmd0aCAtIDE7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQSBQcm9taXNlIHRoYXQgaXMgcmVzb2x2ZWQgb24gYSBjbG9zZSBldmVudCBhbmQgcmVqZWN0ZWQgb24gYSBkaXNtaXNzIGV2ZW50LlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPFQ+fGFueXwqfFByb21pc2U8YW55Pn1cbiAgICAgKi9cbiAgICBnZXQgcmVzdWx0KCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZXN1bHREZWZlcmVkLnByb21pc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogIENsb3NlIHRoZSBtb2RhbCB3aXRoIGEgcmV0dXJuIHZhbHVlLCBpLmU6IHJlc3VsdC5cbiAgICAgKi9cbiAgICBjbG9zZShyZXN1bHQ6IGFueSA9IG51bGwpIHtcbiAgICAgICAgaWYgKCB0aGlzLmRpYWxvZ1JlZi5pbnN0YW5jZS5iZWZvcmVDbG9zZSAmJlxuICAgICAgICAgICAgICAgIHRoaXMuZGlhbG9nUmVmLmluc3RhbmNlLmJlZm9yZUNsb3NlKCkgPT09IHRydWUgKSByZXR1cm47XG4gICAgICAgIHRoaXMuZGlzcG9zZSgpO1xuICAgICAgICB0aGlzLl9yZXN1bHREZWZlcmVkLnJlc29sdmUocmVzdWx0KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiAgQ2xvc2UgdGhlIG1vZGFsIHdpdGhvdXQgYSByZXR1cm4gdmFsdWUsIGkuZTogY2FuY2VsbGVkLlxuICAgICAqICBUaGlzIGNhbGwgaXMgYXV0b21hdGljYWxseSBpbnZva2VkIHdoZW4gYSB1c2VyIGVpdGhlcjpcbiAgICAgKiAgLSBQcmVzc2VzIGFuIGV4aXQga2V5Ym9hcmQga2V5IChpZiBjb25maWd1cmVkKS5cbiAgICAgKiAgLSBDbGlja3Mgb3V0c2lkZSBvZiB0aGUgbW9kYWwgd2luZG93IChpZiBjb25maWd1cmVkKS5cbiAgICAgKiAgVXN1YWxseSwgZGlzbWlzcyByZXByZXNlbnQgYSBDYW5jZWwgYnV0dG9uIG9yIGEgWCBidXR0b24uXG4gICAgICovXG4gICAgZGlzbWlzcygpIHtcbiAgICAgICAgaWYgKCB0aGlzLmRpYWxvZ1JlZi5pbnN0YW5jZS5iZWZvcmVEaXNtaXNzICYmXG4gICAgICAgICAgICB0aGlzLmRpYWxvZ1JlZi5pbnN0YW5jZS5iZWZvcmVEaXNtaXNzKCkgPT09IHRydWUgKSByZXR1cm47XG4gICAgICAgIHRoaXMuZGlzcG9zZSgpO1xuICAgICAgICB0aGlzLl9yZXN1bHREZWZlcmVkLnJlamVjdCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZGlzcG9zZSgpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXJSZWYuZGlzcG9zZSgpO1xuICAgICAgICB0aGlzLmRpYWxvZ1JlZi5kaXNwb3NlKCk7XG4gICAgfVxuICAgIFxuICAgIG9uTG9hZCgpe1xuICAgICAgICB0aGlzLmNvbnRhaW5lclJlZi5pbnN0YW5jZS5vbkxvYWQoKTtcbiAgICB9XG4gICAgXG4gICAgb25VbmxvYWQoKXtcbiAgICAgICAgdGhpcy5jb250YWluZXJSZWYuaW5zdGFuY2Uub25VbmxvYWQoKTtcbiAgICB9XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
