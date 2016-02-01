System.register(['angular2/core', 'angular2/platform/browser', 'ai/components/aiCheckbox/aiCheckbox'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, browser_1, aiCheckbox_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (aiCheckbox_1_1) {
                aiCheckbox_1 = aiCheckbox_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'checkbox-app',
                        template: "\n        <ai-checkbox>normal</ai-checkbox><ai-checkbox primary>primary</ai-checkbox><ai-checkbox [disabled]=\"true\">disabled</ai-checkbox>\n        <ai-checkbox color=\"red\" [checked]=\"true\" >red</ai-checkbox><ai-checkbox color=\"green\">green</ai-checkbox><ai-checkbox color=\"yellow\">yellow</ai-checkbox>\n        <br/>\n        <ai-checkbox size='small'>small</ai-checkbox><ai-checkbox>normal</ai-checkbox><ai-checkbox size='large'>large</ai-checkbox>\n        ",
                        directives: [aiCheckbox_1.AiCheckbox]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
            browser_1.bootstrap(AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4L2FwcC50cyJdLCJuYW1lcyI6WyJBcHBDb21wb25lbnQiLCJBcHBDb21wb25lbnQuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU1BO2dCQUFBQTtnQkFZQUMsQ0FBQ0E7Z0JBWkREO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1BBLFFBQVFBLEVBQUVBLGNBQWNBO3dCQUN4QkEsUUFBUUEsRUFBRUEsd2RBS0xBO3dCQUNKQSxVQUFVQSxFQUFFQSxDQUFDQSx1QkFBVUEsQ0FBQ0E7cUJBQzVCQSxDQUFDQTs7aUNBR0RBO2dCQUFEQSxtQkFBQ0E7WUFBREEsQ0FaQSxBQVlDQSxJQUFBO1lBWkQsdUNBWUMsQ0FBQTtZQUVELG1CQUFTLENBQUMsWUFBWSxDQUFDLENBQUMiLCJmaWxlIjoiaW5kZXgvYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtib290c3RyYXB9ICAgIGZyb20gJ2FuZ3VsYXIyL3BsYXRmb3JtL2Jyb3dzZXInO1xuaW1wb3J0ICogYXMgYWkgZnJvbSAnYWkvYWknO1xuaW1wb3J0IHtBaUNoZWNrYm94fSBmcm9tICdhaS9jb21wb25lbnRzL2FpQ2hlY2tib3gvYWlDaGVja2JveCc7XG4gICAgICAgIFxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2NoZWNrYm94LWFwcCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGFpLWNoZWNrYm94Pm5vcm1hbDwvYWktY2hlY2tib3g+PGFpLWNoZWNrYm94IHByaW1hcnk+cHJpbWFyeTwvYWktY2hlY2tib3g+PGFpLWNoZWNrYm94IFtkaXNhYmxlZF09XCJ0cnVlXCI+ZGlzYWJsZWQ8L2FpLWNoZWNrYm94PlxuICAgICAgICA8YWktY2hlY2tib3ggY29sb3I9XCJyZWRcIiBbY2hlY2tlZF09XCJ0cnVlXCIgPnJlZDwvYWktY2hlY2tib3g+PGFpLWNoZWNrYm94IGNvbG9yPVwiZ3JlZW5cIj5ncmVlbjwvYWktY2hlY2tib3g+PGFpLWNoZWNrYm94IGNvbG9yPVwieWVsbG93XCI+eWVsbG93PC9haS1jaGVja2JveD5cbiAgICAgICAgPGJyLz5cbiAgICAgICAgPGFpLWNoZWNrYm94IHNpemU9J3NtYWxsJz5zbWFsbDwvYWktY2hlY2tib3g+PGFpLWNoZWNrYm94Pm5vcm1hbDwvYWktY2hlY2tib3g+PGFpLWNoZWNrYm94IHNpemU9J2xhcmdlJz5sYXJnZTwvYWktY2hlY2tib3g+XG4gICAgICAgIGBcbiAgICAsZGlyZWN0aXZlczogW0FpQ2hlY2tib3hdICBcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHsgIFxuICAgIFxufSAgICAgICAgICAgICAgXG5cbmJvb3RzdHJhcChBcHBDb21wb25lbnQpOyAgIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
