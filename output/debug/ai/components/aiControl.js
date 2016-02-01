System.register(['./utils'], function(exports_1) {
    var utils_1;
    var AiControl;
    return {
        setters:[
            function (utils_1_1) {
                utils_1 = utils_1_1;
            }],
        execute: function() {
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
                    //Reflect.getMetadata('annotations', ComponentClass);
                    //Reflect.defineMetadata("service", { serviceName: name }, target);
                    this.rebuildClassName();
                }
                AiControl.prototype.rebuildClassName = function () {
                    var el = this.ele.nativeElement;
                    this._classChain = new utils_1.StringChain('');
                    this.onClassNameRebuild(el);
                    this.addClassName(el.getAttribute('size'));
                    this.addClassName(el.getAttribute('color'));
                    if (el.getAttribute('primary') != null)
                        this.addClassName('primary');
                    if (this.disabled)
                        this.addClassName('disabled');
                    this._className = this._classChain.toString();
                    this._classChain = null;
                };
                AiControl.prototype.onClassNameRebuild = function (el) { };
                AiControl.prototype.addClassName = function (name) {
                    this._classChain.add(name);
                };
                Object.defineProperty(AiControl.prototype, "disabled", {
                    get: function () {
                        return this._disabled;
                    },
                    set: function (v) {
                        this._disabled = v;
                        this.rebuildClassName();
                    },
                    enumerable: true,
                    configurable: true
                });
                AiControl.meta = function (meta) {
                    if (!meta.inputs)
                        meta.inputs = [];
                    meta.inputs.push('disabled');
                    if (!meta.host)
                        meta.host = {};
                    meta.host['[attr.disabled]'] = 'disabled?"disabled":null';
                    return meta;
                };
                return AiControl;
            })();
            exports_1("AiControl", AiControl);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYWlDb250cm9sLnRzIl0sIm5hbWVzIjpbIkFpQ29udHJvbCIsIkFpQ29udHJvbC5jb25zdHJ1Y3RvciIsIkFpQ29udHJvbC5yZWJ1aWxkQ2xhc3NOYW1lIiwiQWlDb250cm9sLm9uQ2xhc3NOYW1lUmVidWlsZCIsIkFpQ29udHJvbC5hZGRDbGFzc05hbWUiLCJBaUNvbnRyb2wuZGlzYWJsZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztZQUdBLG1FQUFtRTtZQUNuRSx5REFBeUQ7WUFDekQsMENBQTBDO1lBRXRDLHdCQUF3QjtZQUN4QixTQUFTO1lBQ1Qsa0RBQWtEO1lBQ2xELElBQUk7WUFHUjtnQkFjSUEsbUJBQW9CQSxHQUFlQTtvQkFBZkMsUUFBR0EsR0FBSEEsR0FBR0EsQ0FBWUE7b0JBQy9CQSxxREFBcURBO29CQUNyREEsbUVBQW1FQTtvQkFDbkVBLElBQUlBLENBQUNBLGdCQUFnQkEsRUFBRUEsQ0FBQ0E7Z0JBQzVCQSxDQUFDQTtnQkFFREQsb0NBQWdCQSxHQUFoQkE7b0JBQ0lFLElBQUlBLEVBQUVBLEdBQU9BLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLGFBQWFBLENBQUNBO29CQUNwQ0EsSUFBSUEsQ0FBQ0EsV0FBV0EsR0FBQ0EsSUFBSUEsbUJBQVdBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBO29CQUNyQ0EsSUFBSUEsQ0FBQ0Esa0JBQWtCQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQTtvQkFFNUJBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLEVBQUVBLENBQUNBLFlBQVlBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBLENBQUNBO29CQUMzQ0EsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0JBQzVDQSxFQUFFQSxDQUFBQSxDQUFDQSxFQUFFQSxDQUFDQSxZQUFZQSxDQUFDQSxTQUFTQSxDQUFDQSxJQUFFQSxJQUFJQSxDQUFDQTt3QkFBQ0EsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQUE7b0JBQ2pFQSxFQUFFQSxDQUFBQSxDQUFDQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQTt3QkFBQ0EsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsQ0FBQ0E7b0JBRWhEQSxJQUFJQSxDQUFDQSxVQUFVQSxHQUFDQSxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxRQUFRQSxFQUFFQSxDQUFDQTtvQkFDNUNBLElBQUlBLENBQUNBLFdBQVdBLEdBQUNBLElBQUlBLENBQUNBO2dCQUMxQkEsQ0FBQ0E7Z0JBQ0RGLHNDQUFrQkEsR0FBbEJBLFVBQW1CQSxFQUFNQSxJQUFFRyxDQUFDQTtnQkFDNUJILGdDQUFZQSxHQUFaQSxVQUFhQSxJQUFXQTtvQkFDcEJJLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLEdBQUdBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO2dCQUMvQkEsQ0FBQ0E7Z0JBRURKLHNCQUFJQSwrQkFBUUE7eUJBQVpBO3dCQUNJSyxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQTtvQkFDMUJBLENBQUNBO3lCQUVETCxVQUFhQSxDQUFVQTt3QkFDbkJLLElBQUlBLENBQUNBLFNBQVNBLEdBQUdBLENBQUNBLENBQUNBO3dCQUNuQkEsSUFBSUEsQ0FBQ0EsZ0JBQWdCQSxFQUFFQSxDQUFDQTtvQkFDNUJBLENBQUNBOzs7bUJBTEFMO2dCQW5DTUEsY0FBSUEsR0FBR0EsVUFBVUEsSUFBUUE7b0JBQzVCLEVBQUUsQ0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQzt3QkFBQyxJQUFJLENBQUMsTUFBTSxHQUFDLEVBQUUsQ0FBQztvQkFDaEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7b0JBQzdCLEVBQUUsQ0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzt3QkFBQyxJQUFJLENBQUMsSUFBSSxHQUFDLEVBQUUsQ0FBQztvQkFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFDLDBCQUEwQixDQUFBO29CQUV2RCxNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUNoQixDQUFDLENBQUFBO2dCQW9DTEEsZ0JBQUNBO1lBQURBLENBaERBLEFBZ0RDQSxJQUFBO1lBaERELGlDQWdEQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvYWlDb250cm9sLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtFbGVtZW50UmVmfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbi8vaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnYWkvY29tcG9uZW50cy91dGlscyc7XG5pbXBvcnQge1N0cmluZ0NoYWlufSBmcm9tICcuL3V0aWxzJztcbi8vaW1wb3J0IHtSZWZsZWN0b3J9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL3JlZmxlY3Rpb24vcmVmbGVjdG9yJztcbi8vaW1wb3J0IHtUaW1lcldyYXBwZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvYXN5bmMnO1xuLy9pbXBvcnQge05nQ2xhc3N9IGZyb20gJ2FuZ3VsYXIyL2NvbW1vbic7XG5cbiAgICAvL2RpcmVjdGl2ZXM6IFtOZ0NsYXNzXSxcbiAgICAvL2hvc3Q6IHtcbiAgICAvLyAgJ1thdHRyLmRpc2FibGVkXSc6ICdkaXNhYmxlZD9cImRpc2FibGVkXCI6bnVsbCcsXG4gICAgLy99LFxuXG5cbmV4cG9ydCBjbGFzcyBBaUNvbnRyb2wgeyBcbiAgICBwcml2YXRlIF9jbGFzc0NoYWluOlN0cmluZ0NoYWluOyAgXG4gICAgX2NsYXNzTmFtZSA6IHN0cmluZztcbiAgICBfZGlzYWJsZWQ6Ym9vbGVhbjtcblxuICAgIHN0YXRpYyBtZXRhID0gZnVuY3Rpb24gKG1ldGE6YW55KTphbnl7XG4gICAgICAgIGlmKCFtZXRhLmlucHV0cykgbWV0YS5pbnB1dHM9W107XG4gICAgICAgIG1ldGEuaW5wdXRzLnB1c2goJ2Rpc2FibGVkJyk7XG4gICAgICAgIGlmKCFtZXRhLmhvc3QpIG1ldGEuaG9zdD17fTtcbiAgICAgICAgbWV0YS5ob3N0WydbYXR0ci5kaXNhYmxlZF0nXT0nZGlzYWJsZWQ/XCJkaXNhYmxlZFwiOm51bGwnXG5cbiAgICAgICAgcmV0dXJuIG1ldGE7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGU6IEVsZW1lbnRSZWYpIHtcbiAgICAgICAgLy9SZWZsZWN0LmdldE1ldGFkYXRhKCdhbm5vdGF0aW9ucycsIENvbXBvbmVudENsYXNzKTtcbiAgICAgICAgLy9SZWZsZWN0LmRlZmluZU1ldGFkYXRhKFwic2VydmljZVwiLCB7IHNlcnZpY2VOYW1lOiBuYW1lIH0sIHRhcmdldCk7XG4gICAgICAgIHRoaXMucmVidWlsZENsYXNzTmFtZSgpOyAgXG4gICAgfSAgXG5cbiAgICByZWJ1aWxkQ2xhc3NOYW1lKCl7XG4gICAgICAgIHZhciBlbDphbnkgPSB0aGlzLmVsZS5uYXRpdmVFbGVtZW50O1xuICAgICAgICB0aGlzLl9jbGFzc0NoYWluPW5ldyBTdHJpbmdDaGFpbignJyk7XG4gICAgICAgIHRoaXMub25DbGFzc05hbWVSZWJ1aWxkKGVsKTtcblxuICAgICAgICB0aGlzLmFkZENsYXNzTmFtZShlbC5nZXRBdHRyaWJ1dGUoJ3NpemUnKSk7IFxuICAgICAgICB0aGlzLmFkZENsYXNzTmFtZShlbC5nZXRBdHRyaWJ1dGUoJ2NvbG9yJykpOyBcbiAgICAgICAgaWYoZWwuZ2V0QXR0cmlidXRlKCdwcmltYXJ5JykhPW51bGwpIHRoaXMuYWRkQ2xhc3NOYW1lKCdwcmltYXJ5JylcbiAgICAgICAgaWYodGhpcy5kaXNhYmxlZCkgdGhpcy5hZGRDbGFzc05hbWUoJ2Rpc2FibGVkJyk7XG5cbiAgICAgICAgdGhpcy5fY2xhc3NOYW1lPXRoaXMuX2NsYXNzQ2hhaW4udG9TdHJpbmcoKTtcbiAgICAgICAgdGhpcy5fY2xhc3NDaGFpbj1udWxsO1xuICAgIH1cbiAgICBvbkNsYXNzTmFtZVJlYnVpbGQoZWw6YW55KXt9XG4gICAgYWRkQ2xhc3NOYW1lKG5hbWU6c3RyaW5nKXtcbiAgICAgICAgdGhpcy5fY2xhc3NDaGFpbi5hZGQobmFtZSk7XG4gICAgfVxuXG4gICAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XG4gICAgfVxuXHRcbiAgICBzZXQgZGlzYWJsZWQodjogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl9kaXNhYmxlZCA9IHY7XG4gICAgICAgIHRoaXMucmVidWlsZENsYXNzTmFtZSgpO1xuICAgIH1cblxuICAgIFxufSAiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
