System.register(['ai/components/utils'], function(exports_1) {
    var utils;
    return {
        setters:[
            function (utils_1) {
                utils = utils_1;
            }],
        execute: function() {
            describe('StringChaing test', function () {
                it('StringChain should be empty', function () {
                    var s = new utils.StringChain('');
                    expect(s.toString()).toEqual('');
                });
                it('StringChain add remove test', function () {
                    var sc = new utils.StringChain('start');
                    expect(sc.toString()).toEqual('start');
                    sc.add("first");
                    expect(sc.toString()).toEqual('start first');
                    sc.add("first");
                    expect(sc.toString()).toEqual('start first');
                    sc.add(" first");
                    expect(sc.toString()).toEqual('start first');
                    sc.add("second");
                    expect(sc.toString()).toEqual('start first second');
                    sc.remove("first");
                    expect(sc.toString()).toEqual('start second');
                    sc.assign("");
                    expect(sc.toString()).toEqual('');
                });
            });
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3RDb21wb25lbnRzL3V0aWxzLnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7WUFJQSxRQUFRLENBQUMsbUJBQW1CLEVBQUU7Z0JBRTFCLEVBQUUsQ0FBQyw2QkFBNkIsRUFBRTtvQkFDOUIsSUFBSSxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUNsQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFBO2dCQUNoQyxDQUFDLENBQ0osQ0FBQztnQkFFRixFQUFFLENBQUMsNkJBQTZCLEVBQUU7b0JBQzFCLElBQUksRUFBRSxHQUFHLElBQUksS0FBSyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDeEMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDdkMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDaEIsTUFBTSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztvQkFDN0MsRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDaEIsTUFBTSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztvQkFDN0MsRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDakIsTUFBTSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztvQkFDN0MsRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDakIsTUFBTSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO29CQUNwRCxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNuQixNQUFNLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO29CQUM5QyxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUNkLE1BQU0sQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ3RDLENBQUMsQ0FDSixDQUFDO1lBRU4sQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoidGVzdENvbXBvbmVudHMvdXRpbHMudGVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ub2RlX21vZHVsZXMvYW5ndWxhcjIvdHlwaW5ncy9qYXNtaW5lL2phc21pbmUuZC50c1wiIC8+XG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICdhaS9jb21wb25lbnRzL3V0aWxzJztcblxuXG5kZXNjcmliZSgnU3RyaW5nQ2hhaW5nIHRlc3QnLCAoKSA9PiB7XG5cbiAgICBpdCgnU3RyaW5nQ2hhaW4gc2hvdWxkIGJlIGVtcHR5JywgKCkgPT4ge1xuICAgICAgICB2YXIgcyA9IG5ldyB1dGlscy5TdHJpbmdDaGFpbignJyk7IFxuICAgICAgICBleHBlY3Qocy50b1N0cmluZygpKS50b0VxdWFsKCcnKVxuICAgICAgICB9XG4gICAgKTtcbiAgICBcbiAgICBpdCgnU3RyaW5nQ2hhaW4gYWRkIHJlbW92ZSB0ZXN0JywgKCkgPT4ge1xuICAgICAgICAgICAgdmFyIHNjID0gbmV3IHV0aWxzLlN0cmluZ0NoYWluKCdzdGFydCcpOyBcbiAgICAgICAgICAgIGV4cGVjdChzYy50b1N0cmluZygpKS50b0VxdWFsKCdzdGFydCcpO1xuICAgICAgICAgICAgc2MuYWRkKFwiZmlyc3RcIik7ICAgIFxuICAgICAgICAgICAgZXhwZWN0KHNjLnRvU3RyaW5nKCkpLnRvRXF1YWwoJ3N0YXJ0IGZpcnN0Jyk7XG4gICAgICAgICAgICBzYy5hZGQoXCJmaXJzdFwiKTsgICAgXG4gICAgICAgICAgICBleHBlY3Qoc2MudG9TdHJpbmcoKSkudG9FcXVhbCgnc3RhcnQgZmlyc3QnKTtcbiAgICAgICAgICAgIHNjLmFkZChcIiBmaXJzdFwiKTsgICAgXG4gICAgICAgICAgICBleHBlY3Qoc2MudG9TdHJpbmcoKSkudG9FcXVhbCgnc3RhcnQgZmlyc3QnKTtcbiAgICAgICAgICAgIHNjLmFkZChcInNlY29uZFwiKTtcbiAgICAgICAgICAgIGV4cGVjdChzYy50b1N0cmluZygpKS50b0VxdWFsKCdzdGFydCBmaXJzdCBzZWNvbmQnKTtcbiAgICAgICAgICAgIHNjLnJlbW92ZShcImZpcnN0XCIpO1xuICAgICAgICAgICAgZXhwZWN0KHNjLnRvU3RyaW5nKCkpLnRvRXF1YWwoJ3N0YXJ0IHNlY29uZCcpO1xuICAgICAgICAgICAgc2MuYXNzaWduKFwiXCIpO1xuICAgICAgICAgICAgZXhwZWN0KHNjLnRvU3RyaW5nKCkpLnRvRXF1YWwoJycpO1xuICAgICAgICB9XG4gICAgKTtcblxufSk7ICJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
