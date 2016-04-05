System.register(['angular2/core'], function(exports_1, context_1) {
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
            }());
            exports_1("AiRadioDispatcher", AiRadioDispatcher);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlSYWRpby9BaVJhZGlvRGlzcGF0Y2hlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUNBOzs7ZUFHRztZQUVIO2dCQUlFO29CQUNFLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO2dCQUN0QixDQUFDO2dCQUVELGlGQUFpRjtnQkFDakYsa0NBQU0sR0FBTixVQUFPLElBQVk7b0JBQ2pCLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFkLENBQWMsQ0FBQyxDQUFDO2dCQUNyRCxDQUFDO2dCQUVELDJEQUEyRDtnQkFDM0Qsa0NBQU0sR0FBTixVQUFPLFFBQVE7b0JBQ2IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ2hDLENBQUM7Z0JBakJIO29CQUFDLGlCQUFVLEVBQUU7O3FDQUFBO2dCQWtCYix3QkFBQztZQUFELENBakJBLEFBaUJDLElBQUE7WUFqQkQsaURBaUJDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9BaVJhZGlvL0FpUmFkaW9EaXNwYXRjaGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbi8qKlxuICogQ2xhc3MgZm9yIHJhZGlvIGJ1dHRvbnMgdG8gY29vcmRpbmF0ZSB1bmlxdWUgc2VsZWN0aW9uIGJhc2VkIG9uIG5hbWUuXG4gKiBJbmRlbmRlZCB0byBiZSBjb25zdW1lZCBhcyBhbiBBbmd1bGFyIHNlcnZpY2UuXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBaVJhZGlvRGlzcGF0Y2hlciB7XG4gIFxuICBsaXN0ZW5lcnM6IEZ1bmN0aW9uW107XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMgPSBbXTtcbiAgfVxuXG4gIC8qKiBOb3RpZnkgb3RoZXIgcmFkaW8gYnV0dG9ucyB0aGF0IHNlbGVjdGlvbiBmb3IgdGhlIGdpdmVuIG5hbWUgaGFzIGJlZW4gc2V0LiAqL1xuICBub3RpZnkobmFtZTogc3RyaW5nKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMuZm9yRWFjaChsaXN0ZW5lciA9PiBsaXN0ZW5lcihuYW1lKSk7XG4gIH1cblxuICAvKiogTGlzdGVuIGZvciBmdXR1cmUgY2hhbmdlcyB0byByYWRpbyBidXR0b24gc2VsZWN0aW9uLiAqL1xuICBsaXN0ZW4obGlzdGVuZXIpIHtcbiAgICB0aGlzLmxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
