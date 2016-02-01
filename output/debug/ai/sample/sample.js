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
    var HelloWorld;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            HelloWorld = (function () {
                function HelloWorld() {
                    // Declaring the variable for binding with initial value
                    this.yourName = '';
                }
                HelloWorld = __decorate([
                    core_1.Component({
                        // Declare the tag name in index.html to where the component attaches
                        selector: 'hello-world',
                        // Location of the template for this component
                        template: 'hello2 '
                    }), 
                    __metadata('design:paramtypes', [])
                ], HelloWorld);
                return HelloWorld;
            })();
            exports_1("HelloWorld", HelloWorld);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhbXBsZS9zYW1wbGUudHMiXSwibmFtZXMiOlsiSGVsbG9Xb3JsZCIsIkhlbGxvV29ybGQuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUdBO2dCQUFBQTtvQkFRSUMsd0RBQXdEQTtvQkFDeERBLGFBQVFBLEdBQVdBLEVBQUVBLENBQUNBO2dCQUMxQkEsQ0FBQ0E7Z0JBVkREO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1BBLHFFQUFxRUE7d0JBQ3JFQSxRQUFRQSxFQUFFQSxhQUFhQTt3QkFDdkJBLDhDQUE4Q0E7d0JBQzlDQSxRQUFRQSxFQUFFQSxTQUFTQTtxQkFDdEJBLENBQUNBOzsrQkFLREE7Z0JBQURBLGlCQUFDQTtZQUFEQSxDQVZBLEFBVUNBLElBQUE7WUFWRCxtQ0FVQyxDQUFBIiwiZmlsZSI6InNhbXBsZS9zYW1wbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgLy8gRGVjbGFyZSB0aGUgdGFnIG5hbWUgaW4gaW5kZXguaHRtbCB0byB3aGVyZSB0aGUgY29tcG9uZW50IGF0dGFjaGVzXG4gICAgc2VsZWN0b3I6ICdoZWxsby13b3JsZCcsXG4gICAgLy8gTG9jYXRpb24gb2YgdGhlIHRlbXBsYXRlIGZvciB0aGlzIGNvbXBvbmVudFxuICAgIHRlbXBsYXRlOiAnaGVsbG8yICdcbn0pXG5cbmV4cG9ydCBjbGFzcyBIZWxsb1dvcmxkIHtcbiAgICAvLyBEZWNsYXJpbmcgdGhlIHZhcmlhYmxlIGZvciBiaW5kaW5nIHdpdGggaW5pdGlhbCB2YWx1ZVxuICAgIHlvdXJOYW1lOiBzdHJpbmcgPSAnJztcbn1cbiAgXG4gIFxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
