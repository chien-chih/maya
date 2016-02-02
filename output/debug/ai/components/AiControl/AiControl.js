System.register([], function(exports_1) {
    var AiControl;
    return {
        setters:[],
        execute: function() {
            //import * as utils from 'ai/components/utils';
            //import {StringChain} from './utils';
            //import {Reflector} from 'angular2/src/core/reflection/reflector';
            //import {TimerWrapper} from 'angular2/src/facade/async';
            //import {NgClass} from 'angular2/common';
            //directives: [NgClass],
            //host: {
            //  '[attr.disabled]': 'disabled?"disabled":null',
            //},
            AiControl = (function () {
                function AiControl(ele) {
                    this.ele = ele;
                    var el = this.ele.nativeElement;
                    this.color = el.getAttribute('color');
                    this.size = el.getAttribute('size');
                }
                AiControl.meta = function (meta) {
                    if (!meta.inputs)
                        meta.inputs = [];
                    meta.inputs.push('disabled');
                    if (!meta.host)
                        meta.host = {};
                    meta.host['[attr.disabled]'] = 'disabled?"disabled":null';
                    meta.host['[class.red]'] = 'color==="red"';
                    meta.host['[class.yellow]'] = 'color==="yellow"';
                    meta.host['[class.green]'] = 'color==="green"';
                    meta.host['[class.large]'] = 'size==="large"';
                    meta.host['[class.small]'] = 'size==="small"';
                    return meta;
                };
                return AiControl;
            })();
            exports_1("AiControl", AiControl);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlDb250cm9sL0FpQ29udHJvbC50cyJdLCJuYW1lcyI6WyJBaUNvbnRyb2wiLCJBaUNvbnRyb2wuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7O1lBQ0EsK0NBQStDO1lBQy9DLHNDQUFzQztZQUN0QyxtRUFBbUU7WUFDbkUseURBQXlEO1lBQ3pELDBDQUEwQztZQUV0Qyx3QkFBd0I7WUFDeEIsU0FBUztZQUNULGtEQUFrRDtZQUNsRCxJQUFJO1lBR1I7Z0JBcUJJQSxtQkFBc0JBLEdBQWVBO29CQUFmQyxRQUFHQSxHQUFIQSxHQUFHQSxDQUFZQTtvQkFDakNBLElBQUlBLEVBQUVBLEdBQU9BLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLGFBQWFBLENBQUNBO29CQUNwQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsR0FBQ0EsRUFBRUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0E7b0JBQ3BDQSxJQUFJQSxDQUFDQSxJQUFJQSxHQUFDQSxFQUFFQSxDQUFDQSxZQUFZQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQTtnQkFDdENBLENBQUNBO2dCQWxCTUQsY0FBSUEsR0FBR0EsVUFBVUEsSUFBUUE7b0JBQzVCLEVBQUUsQ0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQzt3QkFBQyxJQUFJLENBQUMsTUFBTSxHQUFDLEVBQUUsQ0FBQztvQkFDaEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7b0JBQzdCLEVBQUUsQ0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzt3QkFBQyxJQUFJLENBQUMsSUFBSSxHQUFDLEVBQUUsQ0FBQztvQkFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFDLDBCQUEwQixDQUFDO29CQUN4RCxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFDLGVBQWUsQ0FBQztvQkFDekMsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFDLGtCQUFrQixDQUFDO29CQUMvQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFDLGlCQUFpQixDQUFDO29CQUM3QyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFDLGdCQUFnQixDQUFDO29CQUM1QyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFDLGdCQUFnQixDQUFDO29CQUU1QyxNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUNoQixDQUFDLENBQUFBO2dCQXdDTEEsZ0JBQUNBO1lBQURBLENBM0RBLEFBMkRDQSxJQUFBO1lBM0RELGlDQTJEQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvQWlDb250cm9sL0FpQ29udHJvbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RWxlbWVudFJlZn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG4vL2ltcG9ydCAqIGFzIHV0aWxzIGZyb20gJ2FpL2NvbXBvbmVudHMvdXRpbHMnO1xuLy9pbXBvcnQge1N0cmluZ0NoYWlufSBmcm9tICcuL3V0aWxzJztcbi8vaW1wb3J0IHtSZWZsZWN0b3J9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL3JlZmxlY3Rpb24vcmVmbGVjdG9yJztcbi8vaW1wb3J0IHtUaW1lcldyYXBwZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvYXN5bmMnO1xuLy9pbXBvcnQge05nQ2xhc3N9IGZyb20gJ2FuZ3VsYXIyL2NvbW1vbic7XG5cbiAgICAvL2RpcmVjdGl2ZXM6IFtOZ0NsYXNzXSxcbiAgICAvL2hvc3Q6IHtcbiAgICAvLyAgJ1thdHRyLmRpc2FibGVkXSc6ICdkaXNhYmxlZD9cImRpc2FibGVkXCI6bnVsbCcsXG4gICAgLy99LFxuXG5cbmV4cG9ydCBjbGFzcyBBaUNvbnRyb2wgeyBcbiAgICAvL3ByaXZhdGUgX2NsYXNzQ2hhaW46U3RyaW5nQ2hhaW47ICBcbiAgICAvL19jbGFzc05hbWUgOiBzdHJpbmc7XG4gICAgZGlzYWJsZWQ6Ym9vbGVhbjtcbiAgICBjb2xvcjpzdHJpbmc7XG4gICAgc2l6ZTpzdHJpbmc7XG5cbiAgICBzdGF0aWMgbWV0YSA9IGZ1bmN0aW9uIChtZXRhOmFueSk6YW55e1xuICAgICAgICBpZighbWV0YS5pbnB1dHMpIG1ldGEuaW5wdXRzPVtdO1xuICAgICAgICBtZXRhLmlucHV0cy5wdXNoKCdkaXNhYmxlZCcpO1xuICAgICAgICBpZighbWV0YS5ob3N0KSBtZXRhLmhvc3Q9e307XG4gICAgICAgIG1ldGEuaG9zdFsnW2F0dHIuZGlzYWJsZWRdJ109J2Rpc2FibGVkP1wiZGlzYWJsZWRcIjpudWxsJztcbiAgICAgICAgbWV0YS5ob3N0WydbY2xhc3MucmVkXSddPSdjb2xvcj09PVwicmVkXCInO1xuICAgICAgICBtZXRhLmhvc3RbJ1tjbGFzcy55ZWxsb3ddJ109J2NvbG9yPT09XCJ5ZWxsb3dcIic7XG4gICAgICAgIG1ldGEuaG9zdFsnW2NsYXNzLmdyZWVuXSddPSdjb2xvcj09PVwiZ3JlZW5cIic7XG4gICAgICAgIG1ldGEuaG9zdFsnW2NsYXNzLmxhcmdlXSddPSdzaXplPT09XCJsYXJnZVwiJztcbiAgICAgICAgbWV0YS5ob3N0WydbY2xhc3Muc21hbGxdJ109J3NpemU9PT1cInNtYWxsXCInO1xuXG4gICAgICAgIHJldHVybiBtZXRhO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBlbGU6IEVsZW1lbnRSZWYpIHtcbiAgICAgICAgdmFyIGVsOmFueSA9IHRoaXMuZWxlLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIHRoaXMuY29sb3I9ZWwuZ2V0QXR0cmlidXRlKCdjb2xvcicpOyBcbiAgICAgICAgdGhpcy5zaXplPWVsLmdldEF0dHJpYnV0ZSgnc2l6ZScpOyBcbiAgICB9ICBcblxuICAgICAgICAvL1JlZmxlY3QuZ2V0TWV0YWRhdGEoJ2Fubm90YXRpb25zJywgQ29tcG9uZW50Q2xhc3MpO1xuICAgICAgICAvL1JlZmxlY3QuZGVmaW5lTWV0YWRhdGEoXCJzZXJ2aWNlXCIsIHsgc2VydmljZU5hbWU6IG5hbWUgfSwgdGFyZ2V0KTtcbiAgICAgICAgLy90aGlzLnJlYnVpbGRDbGFzc05hbWUoKTsgIFxuLypcbiAgICByZWJ1aWxkQ2xhc3NOYW1lKCl7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9jbGFzc0NoYWluPW5ldyBTdHJpbmdDaGFpbignJyk7XG4gICAgICAgIHRoaXMub25DbGFzc05hbWVSZWJ1aWxkKGVsKTtcblxuICAgICAgICB0aGlzLmFkZENsYXNzTmFtZShlbC5nZXRBdHRyaWJ1dGUoJ3NpemUnKSk7IFxuICAgICAgICB0aGlzLmFkZENsYXNzTmFtZShlbC5nZXRBdHRyaWJ1dGUoJ2NvbG9yJykpOyBcbiAgICAgICAgaWYoZWwuZ2V0QXR0cmlidXRlKCdwcmltYXJ5JykhPW51bGwpIHRoaXMuYWRkQ2xhc3NOYW1lKCdwcmltYXJ5JylcbiAgICAgICAgaWYodGhpcy5kaXNhYmxlZCkgdGhpcy5hZGRDbGFzc05hbWUoJ2Rpc2FibGVkJyk7XG5cbiAgICAgICAgdGhpcy5fY2xhc3NOYW1lPXRoaXMuX2NsYXNzQ2hhaW4udG9TdHJpbmcoKTtcbiAgICAgICAgdGhpcy5fY2xhc3NDaGFpbj1udWxsO1xuICAgIH1cbiAgICBvbkNsYXNzTmFtZVJlYnVpbGQoZWw6YW55KXt9XG4gICAgYWRkQ2xhc3NOYW1lKG5hbWU6c3RyaW5nKXtcbiAgICAgICAgdGhpcy5fY2xhc3NDaGFpbi5hZGQobmFtZSk7XG4gICAgfVxuXG4gICAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XG4gICAgfVxuXHRcbiAgICBzZXQgZGlzYWJsZWQodjogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl9kaXNhYmxlZCA9IHY7XG4gICAgICAgIHRoaXMucmVidWlsZENsYXNzTmFtZSgpO1xuICAgIH1cbiovXG4gICAgXG59ICJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
