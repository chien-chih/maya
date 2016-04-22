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
                Object.defineProperty(AiModalInstance.prototype, "isOnlyModal", {
                    get: function () {
                        return this.modal.length == 1;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AiModalInstance.prototype, "isNoModal", {
                    get: function () {
                        return this.modal.length == 0;
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
                    var self = this;
                    this.containerRef.instance.beforeUnload(function () {
                        self.dispose();
                        self._resultDefered.resolve(result);
                    });
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
                    var self = this;
                    this.containerRef.instance.beforeUnload(function () {
                        self.dispose();
                        self._resultDefered.reject();
                    });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlNb2RhbC9BaU1vZGFsSW5zdGFuY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7WUFNQTs7ZUFFRztZQUNIO2dCQVdJLHlCQUFtQixNQUFxQixFQUFTLEtBQWE7b0JBQTNDLFdBQU0sR0FBTixNQUFNLENBQWU7b0JBQVMsVUFBSyxHQUFMLEtBQUssQ0FBUTtvQkFDMUQsSUFBSSxDQUFDLGNBQWMsR0FBRyxzQkFBYyxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUNyRCxDQUFDO2dCQUVELHNCQUFJLHVDQUFVO3lCQUFkO3dCQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7b0JBQzlELENBQUM7OzttQkFBQTtnQkFFRCxzQkFBSSx3Q0FBVzt5QkFBZjt3QkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDO29CQUNsQyxDQUFDOzs7bUJBQUE7Z0JBRUQsc0JBQUksc0NBQVM7eUJBQWI7d0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQztvQkFDbEMsQ0FBQzs7O21CQUFBO2dCQU1ELHNCQUFJLG1DQUFNO29CQUpWOzs7dUJBR0c7eUJBQ0g7d0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDO29CQUN2QyxDQUFDOzs7bUJBQUE7Z0JBRUQ7O21CQUVHO2dCQUNILCtCQUFLLEdBQUwsVUFBTSxNQUFrQjtvQkFBbEIsc0JBQWtCLEdBQWxCLGFBQWtCO29CQUNwQixFQUFFLENBQUMsQ0FBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxXQUFXO3dCQUNoQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsS0FBSyxJQUFLLENBQUM7d0JBQUMsTUFBTSxDQUFDO29CQUVoRSxJQUFJLElBQUksR0FBQyxJQUFJLENBQUM7b0JBQ2QsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDO3dCQUNwQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7d0JBQ2YsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3hDLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUM7Z0JBRUQ7Ozs7OzttQkFNRztnQkFDSCxpQ0FBTyxHQUFQO29CQUNJLEVBQUUsQ0FBQyxDQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGFBQWE7d0JBQ3RDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxLQUFLLElBQUssQ0FBQzt3QkFBQyxNQUFNLENBQUM7b0JBRTlELElBQUksSUFBSSxHQUFDLElBQUksQ0FBQztvQkFDZCxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUM7d0JBQ3BDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQzt3QkFDZixJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxDQUFDO29CQUNqQyxDQUFDLENBQUMsQ0FBQztnQkFDUCxDQUFDO2dCQUVPLGlDQUFPLEdBQWY7b0JBQ0ksSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztvQkFDNUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDN0IsQ0FBQztnQkFFRCxnQ0FBTSxHQUFOO29CQUNJLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUN4QyxDQUFDO2dCQUVELGtDQUFRLEdBQVI7b0JBQ0ksSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQzFDLENBQUM7Z0JBRUwsc0JBQUM7WUFBRCxDQWhGQSxBQWdGQyxJQUFBO1lBaEZELDZDQWdGQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvQWlNb2RhbC9BaU1vZGFsSW5zdGFuY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnRSZWYgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7UHJvbWlzZVdyYXBwZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvYXN5bmMnO1xuXG5pbXBvcnQge0FpTW9kYWxDb25maWd9IGZyb20gJy4vQWlNb2RhbENvbmZpZyc7XG5pbXBvcnQge0FpTW9kYWx9IGZyb20gJy4vQWlNb2RhbCc7XG5cbi8qKlxuICogQVBJIHRvIGFuIG9wZW4gbW9kYWwgd2luZG93LlxuICovXG5leHBvcnQgY2xhc3MgQWlNb2RhbEluc3RhbmNlIHtcblxuXG4gICAgcHJpdmF0ZSBfcmVzdWx0RGVmZXJlZDogYW55O1xuXG4gICAgZGlhbG9nUmVmOiBDb21wb25lbnRSZWY7XG5cbiAgICBjb250YWluZXJSZWY6IENvbXBvbmVudFJlZjtcblxuICAgIGluRWxlbWVudDogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBjb25maWc6IEFpTW9kYWxDb25maWcscHJpdmF0ZSBtb2RhbDpBaU1vZGFsKSB7XG4gICAgICAgIHRoaXMuX3Jlc3VsdERlZmVyZWQgPSBQcm9taXNlV3JhcHBlci5jb21wbGV0ZXIoKTtcbiAgICB9XG5cbiAgICBnZXQgaXNUb3BNb2RhbCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5tb2RhbC5wb3NpdGlvbih0aGlzKSA9PSB0aGlzLm1vZGFsLmxlbmd0aCAtIDE7XG4gICAgfVxuXG4gICAgZ2V0IGlzT25seU1vZGFsKCl7XG4gICAgICAgIHJldHVybiB0aGlzLm1vZGFsLmxlbmd0aCA9PSAxO1xuICAgIH1cblxuICAgIGdldCBpc05vTW9kYWwoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kYWwubGVuZ3RoID09IDA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQSBQcm9taXNlIHRoYXQgaXMgcmVzb2x2ZWQgb24gYSBjbG9zZSBldmVudCBhbmQgcmVqZWN0ZWQgb24gYSBkaXNtaXNzIGV2ZW50LlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPFQ+fGFueXwqfFByb21pc2U8YW55Pn1cbiAgICAgKi9cbiAgICBnZXQgcmVzdWx0KCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZXN1bHREZWZlcmVkLnByb21pc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogIENsb3NlIHRoZSBtb2RhbCB3aXRoIGEgcmV0dXJuIHZhbHVlLCBpLmU6IHJlc3VsdC5cbiAgICAgKi9cbiAgICBjbG9zZShyZXN1bHQ6IGFueSA9IG51bGwpIHtcbiAgICAgICAgaWYgKCB0aGlzLmRpYWxvZ1JlZi5pbnN0YW5jZS5iZWZvcmVDbG9zZSAmJlxuICAgICAgICAgICAgICAgIHRoaXMuZGlhbG9nUmVmLmluc3RhbmNlLmJlZm9yZUNsb3NlKCkgPT09IHRydWUgKSByZXR1cm47XG5cbiAgICAgICAgdmFyIHNlbGY9dGhpcztcbiAgICAgICAgdGhpcy5jb250YWluZXJSZWYuaW5zdGFuY2UuYmVmb3JlVW5sb2FkKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBzZWxmLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgIHNlbGYuX3Jlc3VsdERlZmVyZWQucmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiAgQ2xvc2UgdGhlIG1vZGFsIHdpdGhvdXQgYSByZXR1cm4gdmFsdWUsIGkuZTogY2FuY2VsbGVkLlxuICAgICAqICBUaGlzIGNhbGwgaXMgYXV0b21hdGljYWxseSBpbnZva2VkIHdoZW4gYSB1c2VyIGVpdGhlcjpcbiAgICAgKiAgLSBQcmVzc2VzIGFuIGV4aXQga2V5Ym9hcmQga2V5IChpZiBjb25maWd1cmVkKS5cbiAgICAgKiAgLSBDbGlja3Mgb3V0c2lkZSBvZiB0aGUgbW9kYWwgd2luZG93IChpZiBjb25maWd1cmVkKS5cbiAgICAgKiAgVXN1YWxseSwgZGlzbWlzcyByZXByZXNlbnQgYSBDYW5jZWwgYnV0dG9uIG9yIGEgWCBidXR0b24uXG4gICAgICovXG4gICAgZGlzbWlzcygpIHtcbiAgICAgICAgaWYgKCB0aGlzLmRpYWxvZ1JlZi5pbnN0YW5jZS5iZWZvcmVEaXNtaXNzICYmXG4gICAgICAgICAgICB0aGlzLmRpYWxvZ1JlZi5pbnN0YW5jZS5iZWZvcmVEaXNtaXNzKCkgPT09IHRydWUgKSByZXR1cm47XG5cbiAgICAgICAgdmFyIHNlbGY9dGhpcztcbiAgICAgICAgdGhpcy5jb250YWluZXJSZWYuaW5zdGFuY2UuYmVmb3JlVW5sb2FkKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBzZWxmLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgIHNlbGYuX3Jlc3VsdERlZmVyZWQucmVqZWN0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgZGlzcG9zZSgpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXJSZWYuZGlzcG9zZSgpO1xuICAgICAgICB0aGlzLmRpYWxvZ1JlZi5kaXNwb3NlKCk7XG4gICAgfVxuXG4gICAgb25Mb2FkKCl7XG4gICAgICAgIHRoaXMuY29udGFpbmVyUmVmLmluc3RhbmNlLm9uTG9hZCgpO1xuICAgIH1cblxuICAgIG9uVW5sb2FkKCl7XG4gICAgICAgIHRoaXMuY29udGFpbmVyUmVmLmluc3RhbmNlLm9uVW5sb2FkKCk7XG4gICAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
