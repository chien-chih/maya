System.register(["angular2/src/platform/browser/browser_adapter"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_adapter_1;
    var AiDOM;
    return {
        setters:[
            function (browser_adapter_1_1) {
                browser_adapter_1 = browser_adapter_1_1;
            }],
        execute: function() {
            AiDOM = (function () {
                function AiDOM() {
                }
                AiDOM.get = function () {
                    if (AiDOM._dom == null)
                        AiDOM._dom = new browser_adapter_1.BrowserDomAdapter();
                    return AiDOM._dom;
                };
                AiDOM._dom = null;
                return AiDOM;
            }());
            exports_1("AiDOM", AiDOM);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlVdGlscy9BaURPTS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztZQUdBO2dCQUFBO2dCQVFBLENBQUM7Z0JBTGlCLFNBQUcsR0FBakI7b0JBQ0ksRUFBRSxDQUFBLENBQUMsS0FBSyxDQUFDLElBQUksSUFBRSxJQUFJLENBQUM7d0JBQUMsS0FBSyxDQUFDLElBQUksR0FBQyxJQUFJLG1DQUFpQixFQUFFLENBQUM7b0JBQ3hELE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO2dCQUN0QixDQUFDO2dCQUpjLFVBQUksR0FBbUIsSUFBSSxDQUFDO2dCQU0vQyxZQUFDO1lBQUQsQ0FSQSxBQVFDLElBQUE7WUFSRCx5QkFRQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvQWlVdGlscy9BaURPTS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RE9NfSBmcm9tICdhbmd1bGFyMi9zcmMvcGxhdGZvcm0vZG9tL2RvbV9hZGFwdGVyJztcbmltcG9ydCB7QnJvd3NlckRvbUFkYXB0ZXJ9IGZyb20gXCJhbmd1bGFyMi9zcmMvcGxhdGZvcm0vYnJvd3Nlci9icm93c2VyX2FkYXB0ZXJcIjtcblxuZXhwb3J0IGNsYXNzIEFpRE9NIHtcblxuICAgIHByaXZhdGUgc3RhdGljIF9kb206QnJvd3NlckRvbUFkYXB0ZXI9bnVsbDtcbiAgICBwdWJsaWMgc3RhdGljIGdldCgpe1xuICAgICAgICBpZihBaURPTS5fZG9tPT1udWxsKSBBaURPTS5fZG9tPW5ldyBCcm93c2VyRG9tQWRhcHRlcigpO1xuICAgICAgICByZXR1cm4gQWlET00uX2RvbTtcbiAgICB9XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
