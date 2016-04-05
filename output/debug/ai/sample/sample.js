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
            }());
            exports_1("HelloWorld", HelloWorld);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhbXBsZS9zYW1wbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFVQTtnQkFBQTtvQkFDSSx3REFBd0Q7b0JBQ3hELGFBQVEsR0FBVyxFQUFFLENBQUM7Z0JBQzFCLENBQUM7Z0JBVkQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxxRUFBcUU7d0JBQ3JFLFFBQVEsRUFBRSxhQUFhO3dCQUN2Qiw4Q0FBOEM7d0JBQzlDLFFBQVEsRUFBRSxTQUFTO3FCQUN0QixDQUFDOzs4QkFBQTtnQkFLRixpQkFBQztZQUFELENBSEEsQUFHQyxJQUFBO1lBSEQsbUNBR0MsQ0FBQSIsImZpbGUiOiJzYW1wbGUvc2FtcGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIC8vIERlY2xhcmUgdGhlIHRhZyBuYW1lIGluIGluZGV4Lmh0bWwgdG8gd2hlcmUgdGhlIGNvbXBvbmVudCBhdHRhY2hlc1xuICAgIHNlbGVjdG9yOiAnaGVsbG8td29ybGQnLFxuICAgIC8vIExvY2F0aW9uIG9mIHRoZSB0ZW1wbGF0ZSBmb3IgdGhpcyBjb21wb25lbnRcbiAgICB0ZW1wbGF0ZTogJ2hlbGxvMiAnXG59KVxuXG5leHBvcnQgY2xhc3MgSGVsbG9Xb3JsZCB7XG4gICAgLy8gRGVjbGFyaW5nIHRoZSB2YXJpYWJsZSBmb3IgYmluZGluZyB3aXRoIGluaXRpYWwgdmFsdWVcbiAgICB5b3VyTmFtZTogc3RyaW5nID0gJyc7XG59XG4gIFxuICBcblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
