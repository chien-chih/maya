System.register(['ai/ai'], function(exports_1) {
    var ai;
    var l;
    return {
        setters:[
            function (ai_1) {
                ai = ai_1;
            }],
        execute: function() {
            l = new ai.LettersOnlyValidator();
            describe('3 st tests', function () {
                it('true is true', function () { return expect(l.isAcceptable('hello')).toEqual(true); });
            });
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QxL2FpLnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7UUFFSSxDQUFDOzs7Ozs7O1lBQUQsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLG9CQUFvQixFQUFFLENBQUM7WUFFdEMsUUFBUSxDQUFDLFlBQVksRUFBRTtnQkFDckIsRUFBRSxDQUFDLGNBQWMsRUFBRSxjQUFNLE9BQUEsTUFBTSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQTdDLENBQTZDLENBQUMsQ0FBQztZQUMxRSxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJ0ZXN0MS9haS50ZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL25vZGVfbW9kdWxlcy9hbmd1bGFyMi90eXBpbmdzL2phc21pbmUvamFzbWluZS5kLnRzXCIgLz5cbmltcG9ydCAqIGFzIGFpIGZyb20gJ2FpL2FpJztcbnZhciBsID0gbmV3IGFpLkxldHRlcnNPbmx5VmFsaWRhdG9yKCk7XG5cbmRlc2NyaWJlKCczIHN0IHRlc3RzJywgKCkgPT4ge1xuICBpdCgndHJ1ZSBpcyB0cnVlJywgKCkgPT4gZXhwZWN0KGwuaXNBY2NlcHRhYmxlKCdoZWxsbycpKS50b0VxdWFsKHRydWUpKTtcbn0pOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
