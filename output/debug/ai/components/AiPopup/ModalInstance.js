System.register(['angular2/src/facade/async'], function(exports_1) {
    var async_1;
    var ModalInstance;
    return {
        setters:[
            function (async_1_1) {
                async_1 = async_1_1;
            }],
        execute: function() {
            /**
             * API to an open modal window.
             */
            ModalInstance = (function () {
                function ModalInstance(config) {
                    this.config = config;
                    this._resultDefered = async_1.PromiseWrapper.completer();
                }
                Object.defineProperty(ModalInstance.prototype, "result", {
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
                ModalInstance.prototype.close = function (result) {
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
                ModalInstance.prototype.dismiss = function () {
                    if (this.dialogRef.instance.beforeDismiss &&
                        this.dialogRef.instance.beforeDismiss() === true)
                        return;
                    this.dispose();
                    this._resultDefered.reject();
                };
                ModalInstance.prototype.dispose = function () {
                    this.containerRef.dispose();
                    this.dialogRef.dispose();
                };
                ModalInstance.prototype.onLoad = function () {
                    this.containerRef.instance.onLoad();
                };
                ModalInstance.prototype.onUnload = function () {
                    this.containerRef.instance.onUnload();
                };
                return ModalInstance;
            })();
            exports_1("ModalInstance", ModalInstance);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlQb3B1cC9Nb2RhbEluc3RhbmNlLnRzIl0sIm5hbWVzIjpbIk1vZGFsSW5zdGFuY2UiLCJNb2RhbEluc3RhbmNlLmNvbnN0cnVjdG9yIiwiTW9kYWxJbnN0YW5jZS5yZXN1bHQiLCJNb2RhbEluc3RhbmNlLmNsb3NlIiwiTW9kYWxJbnN0YW5jZS5kaXNtaXNzIiwiTW9kYWxJbnN0YW5jZS5kaXNwb3NlIiwiTW9kYWxJbnN0YW5jZS5vbkxvYWQiLCJNb2RhbEluc3RhbmNlLm9uVW5sb2FkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7WUFLQTs7ZUFFRztZQUNIO2dCQVdJQSx1QkFBbUJBLE1BQW1CQTtvQkFBbkJDLFdBQU1BLEdBQU5BLE1BQU1BLENBQWFBO29CQUNsQ0EsSUFBSUEsQ0FBQ0EsY0FBY0EsR0FBR0Esc0JBQWNBLENBQUNBLFNBQVNBLEVBQUVBLENBQUNBO2dCQUNyREEsQ0FBQ0E7Z0JBTURELHNCQUFJQSxpQ0FBTUE7b0JBSlZBOzs7dUJBR0dBO3lCQUNIQTt3QkFDSUUsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsT0FBT0EsQ0FBQ0E7b0JBQ3ZDQSxDQUFDQTs7O21CQUFBRjtnQkFFREE7O21CQUVHQTtnQkFDSEEsNkJBQUtBLEdBQUxBLFVBQU1BLE1BQWtCQTtvQkFBbEJHLHNCQUFrQkEsR0FBbEJBLGFBQWtCQTtvQkFDcEJBLEVBQUVBLENBQUNBLENBQUVBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLFFBQVFBLENBQUNBLFdBQVdBO3dCQUNoQ0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsV0FBV0EsRUFBRUEsS0FBS0EsSUFBS0EsQ0FBQ0E7d0JBQUNBLE1BQU1BLENBQUNBO29CQUNoRUEsSUFBSUEsQ0FBQ0EsT0FBT0EsRUFBRUEsQ0FBQ0E7b0JBQ2ZBLElBQUlBLENBQUNBLGNBQWNBLENBQUNBLE9BQU9BLENBQUNBLE1BQU1BLENBQUNBLENBQUNBO2dCQUN4Q0EsQ0FBQ0E7Z0JBRURIOzs7Ozs7bUJBTUdBO2dCQUNIQSwrQkFBT0EsR0FBUEE7b0JBQ0lJLEVBQUVBLENBQUNBLENBQUVBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLFFBQVFBLENBQUNBLGFBQWFBO3dCQUN0Q0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsYUFBYUEsRUFBRUEsS0FBS0EsSUFBS0EsQ0FBQ0E7d0JBQUNBLE1BQU1BLENBQUNBO29CQUM5REEsSUFBSUEsQ0FBQ0EsT0FBT0EsRUFBRUEsQ0FBQ0E7b0JBQ2ZBLElBQUlBLENBQUNBLGNBQWNBLENBQUNBLE1BQU1BLEVBQUVBLENBQUNBO2dCQUNqQ0EsQ0FBQ0E7Z0JBRU9KLCtCQUFPQSxHQUFmQTtvQkFDSUssSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsT0FBT0EsRUFBRUEsQ0FBQ0E7b0JBQzVCQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxPQUFPQSxFQUFFQSxDQUFDQTtnQkFDN0JBLENBQUNBO2dCQUVETCw4QkFBTUEsR0FBTkE7b0JBQ0lNLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLFFBQVFBLENBQUNBLE1BQU1BLEVBQUVBLENBQUNBO2dCQUN4Q0EsQ0FBQ0E7Z0JBRUROLGdDQUFRQSxHQUFSQTtvQkFDSU8sSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsUUFBUUEsRUFBRUEsQ0FBQ0E7Z0JBQzFDQSxDQUFDQTtnQkFFTFAsb0JBQUNBO1lBQURBLENBNURBLEFBNERDQSxJQUFBO1lBNURELHlDQTREQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvQWlQb3B1cC9Nb2RhbEluc3RhbmNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50UmVmIH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1Byb21pc2VXcmFwcGVyfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2FzeW5jJztcblxuaW1wb3J0IHtNb2RhbENvbmZpZ30gZnJvbSAnLi9Nb2RhbENvbmZpZyc7XG5cbi8qKlxuICogQVBJIHRvIGFuIG9wZW4gbW9kYWwgd2luZG93LlxuICovXG5leHBvcnQgY2xhc3MgTW9kYWxJbnN0YW5jZSB7XG5cblxuICAgIHByaXZhdGUgX3Jlc3VsdERlZmVyZWQ6IGFueTtcbiAgICBcbiAgICBkaWFsb2dSZWY6IENvbXBvbmVudFJlZjtcbiAgICBcbiAgICBjb250YWluZXJSZWY6IENvbXBvbmVudFJlZjtcblxuICAgIGluRWxlbWVudDogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBjb25maWc6IE1vZGFsQ29uZmlnKSB7XG4gICAgICAgIHRoaXMuX3Jlc3VsdERlZmVyZWQgPSBQcm9taXNlV3JhcHBlci5jb21wbGV0ZXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBIFByb21pc2UgdGhhdCBpcyByZXNvbHZlZCBvbiBhIGNsb3NlIGV2ZW50IGFuZCByZWplY3RlZCBvbiBhIGRpc21pc3MgZXZlbnQuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8VD58YW55fCp8UHJvbWlzZTxhbnk+fVxuICAgICAqL1xuICAgIGdldCByZXN1bHQoKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Jlc3VsdERlZmVyZWQucHJvbWlzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiAgQ2xvc2UgdGhlIG1vZGFsIHdpdGggYSByZXR1cm4gdmFsdWUsIGkuZTogcmVzdWx0LlxuICAgICAqL1xuICAgIGNsb3NlKHJlc3VsdDogYW55ID0gbnVsbCkge1xuICAgICAgICBpZiAoIHRoaXMuZGlhbG9nUmVmLmluc3RhbmNlLmJlZm9yZUNsb3NlICYmXG4gICAgICAgICAgICAgICAgdGhpcy5kaWFsb2dSZWYuaW5zdGFuY2UuYmVmb3JlQ2xvc2UoKSA9PT0gdHJ1ZSApIHJldHVybjtcbiAgICAgICAgdGhpcy5kaXNwb3NlKCk7XG4gICAgICAgIHRoaXMuX3Jlc3VsdERlZmVyZWQucmVzb2x2ZShyZXN1bHQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqICBDbG9zZSB0aGUgbW9kYWwgd2l0aG91dCBhIHJldHVybiB2YWx1ZSwgaS5lOiBjYW5jZWxsZWQuXG4gICAgICogIFRoaXMgY2FsbCBpcyBhdXRvbWF0aWNhbGx5IGludm9rZWQgd2hlbiBhIHVzZXIgZWl0aGVyOlxuICAgICAqICAtIFByZXNzZXMgYW4gZXhpdCBrZXlib2FyZCBrZXkgKGlmIGNvbmZpZ3VyZWQpLlxuICAgICAqICAtIENsaWNrcyBvdXRzaWRlIG9mIHRoZSBtb2RhbCB3aW5kb3cgKGlmIGNvbmZpZ3VyZWQpLlxuICAgICAqICBVc3VhbGx5LCBkaXNtaXNzIHJlcHJlc2VudCBhIENhbmNlbCBidXR0b24gb3IgYSBYIGJ1dHRvbi5cbiAgICAgKi9cbiAgICBkaXNtaXNzKCkge1xuICAgICAgICBpZiAoIHRoaXMuZGlhbG9nUmVmLmluc3RhbmNlLmJlZm9yZURpc21pc3MgJiZcbiAgICAgICAgICAgIHRoaXMuZGlhbG9nUmVmLmluc3RhbmNlLmJlZm9yZURpc21pc3MoKSA9PT0gdHJ1ZSApIHJldHVybjtcbiAgICAgICAgdGhpcy5kaXNwb3NlKCk7XG4gICAgICAgIHRoaXMuX3Jlc3VsdERlZmVyZWQucmVqZWN0KCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkaXNwb3NlKCkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lclJlZi5kaXNwb3NlKCk7XG4gICAgICAgIHRoaXMuZGlhbG9nUmVmLmRpc3Bvc2UoKTtcbiAgICB9XG4gICAgXG4gICAgb25Mb2FkKCl7XG4gICAgICAgIHRoaXMuY29udGFpbmVyUmVmLmluc3RhbmNlLm9uTG9hZCgpO1xuICAgIH1cbiAgICBcbiAgICBvblVubG9hZCgpe1xuICAgICAgICB0aGlzLmNvbnRhaW5lclJlZi5pbnN0YW5jZS5vblVubG9hZCgpO1xuICAgIH1cblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
