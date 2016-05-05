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
                    var self = this;
                    if (this.dialogRef.instance.beforeClose &&
                        this.dialogRef.instance.beforeClose() === true)
                        return;
                    var delay = 0;
                    if (this.dialogRef.instance.closingDelayTime)
                        delay = this.dialogRef.instance.closingDelayTime();
                    this.containerRef.instance.beforeClose(delay, function () {
                        self.dispose();
                    });
                    self._resultDefered.resolve(result);
                };
                AiModalInstance.prototype.dispose = function () {
                    this.containerRef.dispose();
                    this.dialogRef.dispose();
                };
                AiModalInstance.prototype.onLoad = function () {
                    if (this.dialogRef.instance.onOpen)
                        this.dialogRef.instance.onOpen();
                    this.containerRef.instance.onOpen();
                };
                AiModalInstance.prototype.onUnload = function () {
                    if (this.dialogRef.instance.onClose)
                        this.dialogRef.instance.onClose();
                    this.containerRef.instance.onClose();
                };
                return AiModalInstance;
            }());
            exports_1("AiModalInstance", AiModalInstance);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlNb2RhbC9BaU1vZGFsSW5zdGFuY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7WUFNQTs7ZUFFRztZQUNIO2dCQVdJLHlCQUFtQixNQUFxQixFQUFTLEtBQWE7b0JBQTNDLFdBQU0sR0FBTixNQUFNLENBQWU7b0JBQVMsVUFBSyxHQUFMLEtBQUssQ0FBUTtvQkFDMUQsSUFBSSxDQUFDLGNBQWMsR0FBRyxzQkFBYyxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUNyRCxDQUFDO2dCQUVELHNCQUFJLHVDQUFVO3lCQUFkO3dCQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7b0JBQzlELENBQUM7OzttQkFBQTtnQkFFRCxzQkFBSSx3Q0FBVzt5QkFBZjt3QkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDO29CQUNsQyxDQUFDOzs7bUJBQUE7Z0JBRUQsc0JBQUksc0NBQVM7eUJBQWI7d0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQztvQkFDbEMsQ0FBQzs7O21CQUFBO2dCQU1ELHNCQUFJLG1DQUFNO29CQUpWOzs7dUJBR0c7eUJBQ0g7d0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDO29CQUN2QyxDQUFDOzs7bUJBQUE7Z0JBRUQ7O21CQUVHO2dCQUNILCtCQUFLLEdBQUwsVUFBTSxNQUFrQjtvQkFBbEIsc0JBQWtCLEdBQWxCLGFBQWtCO29CQUNwQixJQUFJLElBQUksR0FBQyxJQUFJLENBQUM7b0JBQ2QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsV0FBVzt3QkFDbkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLEtBQUssSUFBSyxDQUFDO3dCQUFDLE1BQU0sQ0FBQztvQkFFNUQsSUFBSSxLQUFLLEdBQUMsQ0FBQyxDQUFDO29CQUNaLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDO3dCQUN6QyxLQUFLLEdBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztvQkFFckQsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBQzt3QkFDekMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO29CQUNuQixDQUFDLENBQUMsQ0FBQztvQkFDSCxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDeEMsQ0FBQztnQkFFTyxpQ0FBTyxHQUFmO29CQUNJLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUM7b0JBQzVCLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQzdCLENBQUM7Z0JBRUQsZ0NBQU0sR0FBTjtvQkFDSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7d0JBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7b0JBQ3JFLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUN4QyxDQUFDO2dCQUVELGtDQUFRLEdBQVI7b0JBQ0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO3dCQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO29CQUN2RSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDekMsQ0FBQztnQkFFTCxzQkFBQztZQUFELENBcEVBLEFBb0VDLElBQUE7WUFwRUQsNkNBb0VDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9BaU1vZGFsL0FpTW9kYWxJbnN0YW5jZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudFJlZiB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtQcm9taXNlV3JhcHBlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9hc3luYyc7XG5cbmltcG9ydCB7QWlNb2RhbENvbmZpZ30gZnJvbSAnLi9BaU1vZGFsQ29uZmlnJztcbmltcG9ydCB7QWlNb2RhbH0gZnJvbSAnLi9BaU1vZGFsJztcblxuLyoqXG4gKiBBUEkgdG8gYW4gb3BlbiBtb2RhbCB3aW5kb3cuXG4gKi9cbmV4cG9ydCBjbGFzcyBBaU1vZGFsSW5zdGFuY2Uge1xuXG5cbiAgICBwcml2YXRlIF9yZXN1bHREZWZlcmVkOiBhbnk7XG5cbiAgICBkaWFsb2dSZWY6IENvbXBvbmVudFJlZjtcblxuICAgIGNvbnRhaW5lclJlZjogQ29tcG9uZW50UmVmO1xuXG4gICAgaW5FbGVtZW50OiBib29sZWFuO1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBjb25maWc6IEFpTW9kYWxDb25maWcscHJpdmF0ZSBtb2RhbDpBaU1vZGFsKSB7XG4gICAgICAgIHRoaXMuX3Jlc3VsdERlZmVyZWQgPSBQcm9taXNlV3JhcHBlci5jb21wbGV0ZXIoKTtcbiAgICB9XG5cbiAgICBnZXQgaXNUb3BNb2RhbCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5tb2RhbC5wb3NpdGlvbih0aGlzKSA9PSB0aGlzLm1vZGFsLmxlbmd0aCAtIDE7XG4gICAgfVxuXG4gICAgZ2V0IGlzT25seU1vZGFsKCl7XG4gICAgICAgIHJldHVybiB0aGlzLm1vZGFsLmxlbmd0aCA9PSAxO1xuICAgIH1cblxuICAgIGdldCBpc05vTW9kYWwoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kYWwubGVuZ3RoID09IDA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQSBQcm9taXNlIHRoYXQgaXMgcmVzb2x2ZWQgb24gYSBjbG9zZSBldmVudCBhbmQgcmVqZWN0ZWQgb24gYSBkaXNtaXNzIGV2ZW50LlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPFQ+fGFueXwqfFByb21pc2U8YW55Pn1cbiAgICAgKi9cbiAgICBnZXQgcmVzdWx0KCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZXN1bHREZWZlcmVkLnByb21pc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogIENsb3NlIHRoZSBtb2RhbCB3aXRoIGEgcmV0dXJuIHZhbHVlLCBpLmU6IHJlc3VsdC5cbiAgICAgKi9cbiAgICBjbG9zZShyZXN1bHQ6IGFueSA9IG51bGwpIHtcbiAgICAgICAgdmFyIHNlbGY9dGhpcztcbiAgICAgICAgaWYgKHRoaXMuZGlhbG9nUmVmLmluc3RhbmNlLmJlZm9yZUNsb3NlICYmXG4gICAgICAgICAgICB0aGlzLmRpYWxvZ1JlZi5pbnN0YW5jZS5iZWZvcmVDbG9zZSgpID09PSB0cnVlICkgcmV0dXJuO1xuXG4gICAgICAgIGxldCBkZWxheT0wO1xuICAgICAgICBpZiAodGhpcy5kaWFsb2dSZWYuaW5zdGFuY2UuY2xvc2luZ0RlbGF5VGltZSkgXG4gICAgICAgICAgICBkZWxheT10aGlzLmRpYWxvZ1JlZi5pbnN0YW5jZS5jbG9zaW5nRGVsYXlUaW1lKCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmNvbnRhaW5lclJlZi5pbnN0YW5jZS5iZWZvcmVDbG9zZShkZWxheSxmdW5jdGlvbigpe1xuICAgICAgICAgICAgc2VsZi5kaXNwb3NlKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBzZWxmLl9yZXN1bHREZWZlcmVkLnJlc29sdmUocmVzdWx0KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGRpc3Bvc2UoKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyUmVmLmRpc3Bvc2UoKTtcbiAgICAgICAgdGhpcy5kaWFsb2dSZWYuZGlzcG9zZSgpO1xuICAgIH1cblxuICAgIG9uTG9hZCgpe1xuICAgICAgICBpZiAodGhpcy5kaWFsb2dSZWYuaW5zdGFuY2Uub25PcGVuKSB0aGlzLmRpYWxvZ1JlZi5pbnN0YW5jZS5vbk9wZW4oKTtcbiAgICAgICAgdGhpcy5jb250YWluZXJSZWYuaW5zdGFuY2Uub25PcGVuKCk7XG4gICAgfVxuXG4gICAgb25VbmxvYWQoKXtcbiAgICAgICAgaWYgKHRoaXMuZGlhbG9nUmVmLmluc3RhbmNlLm9uQ2xvc2UpIHRoaXMuZGlhbG9nUmVmLmluc3RhbmNlLm9uQ2xvc2UoKTtcbiAgICAgICAgdGhpcy5jb250YWluZXJSZWYuaW5zdGFuY2Uub25DbG9zZSgpO1xuICAgIH1cblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
