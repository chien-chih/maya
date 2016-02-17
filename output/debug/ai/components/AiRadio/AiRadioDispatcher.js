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
    var AiRadioDispatcher;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            /**
             * Class for radio buttons to coordinate unique selection based on name.
             * Indended to be consumed as an Angular service.
             */
            AiRadioDispatcher = (function () {
                function AiRadioDispatcher() {
                    this.listeners = [];
                }
                /** Notify other radio buttons that selection for the given name has been set. */
                AiRadioDispatcher.prototype.notify = function (name) {
                    this.listeners.forEach(function (listener) { return listener(name); });
                };
                /** Listen for future changes to radio button selection. */
                AiRadioDispatcher.prototype.listen = function (listener) {
                    this.listeners.push(listener);
                };
                AiRadioDispatcher = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], AiRadioDispatcher);
                return AiRadioDispatcher;
            })();
            exports_1("AiRadioDispatcher", AiRadioDispatcher);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlSYWRpby9BaVJhZGlvRGlzcGF0Y2hlci50cyJdLCJuYW1lcyI6WyJBaVJhZGlvRGlzcGF0Y2hlciIsIkFpUmFkaW9EaXNwYXRjaGVyLmNvbnN0cnVjdG9yIiwiQWlSYWRpb0Rpc3BhdGNoZXIubm90aWZ5IiwiQWlSYWRpb0Rpc3BhdGNoZXIubGlzdGVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFDQTs7O2VBR0c7WUFDSDtnQkFLRUE7b0JBQ0VDLElBQUlBLENBQUNBLFNBQVNBLEdBQUdBLEVBQUVBLENBQUNBO2dCQUN0QkEsQ0FBQ0E7Z0JBRURELGlGQUFpRkE7Z0JBQ2pGQSxrQ0FBTUEsR0FBTkEsVUFBT0EsSUFBWUE7b0JBQ2pCRSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxPQUFPQSxDQUFDQSxVQUFBQSxRQUFRQSxJQUFJQSxPQUFBQSxRQUFRQSxDQUFDQSxJQUFJQSxDQUFDQSxFQUFkQSxDQUFjQSxDQUFDQSxDQUFDQTtnQkFDckRBLENBQUNBO2dCQUVERiwyREFBMkRBO2dCQUMzREEsa0NBQU1BLEdBQU5BLFVBQU9BLFFBQVFBO29CQUNiRyxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQTtnQkFDaENBLENBQUNBO2dCQWpCSEg7b0JBQUNBLGlCQUFVQSxFQUFFQTs7c0NBa0JaQTtnQkFBREEsd0JBQUNBO1lBQURBLENBbEJBLEFBa0JDQSxJQUFBO1lBbEJELGlEQWtCQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvQWlSYWRpby9BaVJhZGlvRGlzcGF0Y2hlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG4vKipcbiAqIENsYXNzIGZvciByYWRpbyBidXR0b25zIHRvIGNvb3JkaW5hdGUgdW5pcXVlIHNlbGVjdGlvbiBiYXNlZCBvbiBuYW1lLlxuICogSW5kZW5kZWQgdG8gYmUgY29uc3VtZWQgYXMgYW4gQW5ndWxhciBzZXJ2aWNlLlxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQWlSYWRpb0Rpc3BhdGNoZXIge1xuICBcbiAgbGlzdGVuZXJzOiBGdW5jdGlvbltdO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubGlzdGVuZXJzID0gW107XG4gIH1cblxuICAvKiogTm90aWZ5IG90aGVyIHJhZGlvIGJ1dHRvbnMgdGhhdCBzZWxlY3Rpb24gZm9yIHRoZSBnaXZlbiBuYW1lIGhhcyBiZWVuIHNldC4gKi9cbiAgbm90aWZ5KG5hbWU6IHN0cmluZykge1xuICAgIHRoaXMubGlzdGVuZXJzLmZvckVhY2gobGlzdGVuZXIgPT4gbGlzdGVuZXIobmFtZSkpO1xuICB9XG5cbiAgLyoqIExpc3RlbiBmb3IgZnV0dXJlIGNoYW5nZXMgdG8gcmFkaW8gYnV0dG9uIHNlbGVjdGlvbi4gKi9cbiAgbGlzdGVuKGxpc3RlbmVyKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
