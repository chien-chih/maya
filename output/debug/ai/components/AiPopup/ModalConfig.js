System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var ModalConfig;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            /**
             * A configuration definition object.
             * Instruction for how to show a modal.
             */
            ModalConfig = (function () {
                function ModalConfig(keyboard) {
                    if (keyboard === void 0) { keyboard = undefined; }
                    this.anchorName = null;
                    //mask : string='black';
                    this.mask = null;
                    this.autoHide = false;
                    this.floating = false;
                    this.x = '50%';
                    this.y = '20%';
                    /**
                     * Keyboard value/s that close the modal.
                     * Accepts either a single numeric value or an array of numeric values.
                     * A modal closed by a keyboard stroke will result in a 'reject' notification from the promise.
                     * Defaults to 27, set `null` implicitly to disable.
                     */
                    this.keyboard = [27];
                }
                /**
                 * Returns true if the config instance supports a given key.
                 * @param key
                 * @returns {boolean}
                 */
                ModalConfig.prototype.supportsKey = function (keyCode) {
                    return this.keyboard.indexOf(keyCode) > -1;
                };
                ModalConfig = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [Object])
                ], ModalConfig);
                return ModalConfig;
            })();
            exports_1("ModalConfig", ModalConfig);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlQb3B1cC9Nb2RhbENvbmZpZy50cyJdLCJuYW1lcyI6WyJNb2RhbENvbmZpZyIsIk1vZGFsQ29uZmlnLmNvbnN0cnVjdG9yIiwiTW9kYWxDb25maWcuc3VwcG9ydHNLZXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUlBOzs7ZUFHRztZQUNIO2dCQXlCSUEscUJBQ0lBLFFBQTRDQTtvQkFBNUNDLHdCQUE0Q0EsR0FBNUNBLG9CQUE0Q0E7b0JBdkJoREEsZUFBVUEsR0FBUUEsSUFBSUEsQ0FBQ0E7b0JBRXZCQSx3QkFBd0JBO29CQUN4QkEsU0FBSUEsR0FBVUEsSUFBSUEsQ0FBQ0E7b0JBRW5CQSxhQUFRQSxHQUFTQSxLQUFLQSxDQUFDQTtvQkFFdkJBLGFBQVFBLEdBQVNBLEtBQUtBLENBQUNBO29CQUV2QkEsTUFBQ0EsR0FBS0EsS0FBS0EsQ0FBQ0E7b0JBRVpBLE1BQUNBLEdBQUtBLEtBQUtBLENBQUNBO29CQUVaQTs7Ozs7dUJBS0dBO29CQUNIQSxhQUFRQSxHQUF5QkEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0E7Z0JBS3RDQSxDQUFDQTtnQkFHREQ7Ozs7bUJBSUdBO2dCQUNIQSxpQ0FBV0EsR0FBWEEsVUFBWUEsT0FBZUE7b0JBQ3ZCRSxNQUFNQSxDQUFpQkEsSUFBSUEsQ0FBQ0EsUUFBU0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ2hFQSxDQUFDQTtnQkFyQ0xGO29CQUFDQSxpQkFBVUEsRUFBRUE7O2dDQXNDWkE7Z0JBQURBLGtCQUFDQTtZQUFEQSxDQXRDQSxBQXNDQ0EsSUFBQTtZQXRDRCxxQ0FzQ0MsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL0FpUG9wdXAvTW9kYWxDb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5cblxuLyoqXG4gKiBBIGNvbmZpZ3VyYXRpb24gZGVmaW5pdGlvbiBvYmplY3QuXG4gKiBJbnN0cnVjdGlvbiBmb3IgaG93IHRvIHNob3cgYSBtb2RhbC5cbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1vZGFsQ29uZmlnIHtcbiAgICBcbiAgICBhbmNob3JOYW1lOnN0cmluZz1udWxsO1xuXG4gICAgLy9tYXNrIDogc3RyaW5nPSdibGFjayc7XG4gICAgbWFzayA6IHN0cmluZz1udWxsO1xuICAgIFxuICAgIGF1dG9IaWRlOmJvb2xlYW49ZmFsc2U7XG4gICAgXG4gICAgZmxvYXRpbmc6Ym9vbGVhbj1mYWxzZTtcbiAgICBcbiAgICB4OmFueT0nNTAlJztcbiAgICBcbiAgICB5OmFueT0nMjAlJztcblxuICAgIC8qKlxuICAgICAqIEtleWJvYXJkIHZhbHVlL3MgdGhhdCBjbG9zZSB0aGUgbW9kYWwuXG4gICAgICogQWNjZXB0cyBlaXRoZXIgYSBzaW5nbGUgbnVtZXJpYyB2YWx1ZSBvciBhbiBhcnJheSBvZiBudW1lcmljIHZhbHVlcy5cbiAgICAgKiBBIG1vZGFsIGNsb3NlZCBieSBhIGtleWJvYXJkIHN0cm9rZSB3aWxsIHJlc3VsdCBpbiBhICdyZWplY3QnIG5vdGlmaWNhdGlvbiBmcm9tIHRoZSBwcm9taXNlLlxuICAgICAqIERlZmF1bHRzIHRvIDI3LCBzZXQgYG51bGxgIGltcGxpY2l0bHkgdG8gZGlzYWJsZS5cbiAgICAgKi9cbiAgICBrZXlib2FyZDogQXJyYXk8bnVtYmVyPiB8IG51bWJlcj1bMjddO1xuXG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAga2V5Ym9hcmQ6IEFycmF5PG51bWJlcj4gfCBudW1iZXIgPSB1bmRlZmluZWQpIHtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgY29uZmlnIGluc3RhbmNlIHN1cHBvcnRzIGEgZ2l2ZW4ga2V5LlxuICAgICAqIEBwYXJhbSBrZXlcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBzdXBwb3J0c0tleShrZXlDb2RlOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICg8QXJyYXk8bnVtYmVyPj50aGlzLmtleWJvYXJkKS5pbmRleE9mKGtleUNvZGUpID4gLTE7XG4gICAgfVxufVxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
