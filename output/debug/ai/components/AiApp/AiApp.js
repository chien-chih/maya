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
    var AiApp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            //import {enableProdMode} from 'angular2/core';
            //enableProdMode();
            AiApp = (function () {
                function AiApp(ele) {
                    this.ele = ele;
                }
                AiApp.meta = function (meta) {
                    //if(!meta.directives) meta.directives=[];
                    //meta.directives.push(AiApp);
                    //meta.inputs.push('AiApp');
                    return meta;
                };
                AiApp = __decorate([
                    core_1.Component({
                        template: '',
                        selector: 'ai-app',
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], AiApp);
                return AiApp;
            })();
            exports_1("AiApp", AiApp);
            document.addEventListener('DOMContentLoaded', function () {
                alert('hello');
                //debugger
                //document.body.setAttribute('mobile','a');
            });
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlBcHAvQWlBcHAudHMiXSwibmFtZXMiOlsiQWlBcHAiLCJBaUFwcC5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBQ0EsK0NBQStDO1lBQy9DLG1CQUFtQjtZQUVuQjtnQkFhSUEsZUFBc0JBLEdBQWVBO29CQUFmQyxRQUFHQSxHQUFIQSxHQUFHQSxDQUFZQTtnQkFDckNBLENBQUNBO2dCQVJNRCxVQUFJQSxHQUFHQSxVQUFVQSxJQUFRQTtvQkFDNUIsMENBQTBDO29CQUMxQyw4QkFBOEI7b0JBQzlCLDRCQUE0QjtvQkFDNUIsTUFBTSxDQUFDLElBQUksQ0FBQztnQkFDaEIsQ0FBQyxDQUFBQTtnQkFYTEE7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDUEEsUUFBUUEsRUFBQ0EsRUFBRUE7d0JBQ1hBLFFBQVFBLEVBQUVBLFFBQVFBO3FCQUNyQkEsQ0FBQ0E7OzBCQWVEQTtnQkFBREEsWUFBQ0E7WUFBREEsQ0FsQkEsQUFrQkNBLElBQUE7WUFsQkQseUJBa0JDLENBQUE7WUFFRCxRQUFRLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUU7Z0JBQzFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDZixVQUFVO2dCQUNWLDJDQUEyQztZQUMvQyxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJjb21wb25lbnRzL0FpQXBwL0FpQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsRWxlbWVudFJlZn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG4vL2ltcG9ydCB7ZW5hYmxlUHJvZE1vZGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuLy9lbmFibGVQcm9kTW9kZSgpO1xuXG5AQ29tcG9uZW50KHtcbiAgICB0ZW1wbGF0ZTonJyxcbiAgICBzZWxlY3RvcjogJ2FpLWFwcCcsXG59KSAgICBcbmV4cG9ydCBjbGFzcyBBaUFwcHsgXG5cbiAgICBzdGF0aWMgbWV0YSA9IGZ1bmN0aW9uIChtZXRhOmFueSk6YW55e1xuICAgICAgICAvL2lmKCFtZXRhLmRpcmVjdGl2ZXMpIG1ldGEuZGlyZWN0aXZlcz1bXTtcbiAgICAgICAgLy9tZXRhLmRpcmVjdGl2ZXMucHVzaChBaUFwcCk7XG4gICAgICAgIC8vbWV0YS5pbnB1dHMucHVzaCgnQWlBcHAnKTtcbiAgICAgICAgcmV0dXJuIG1ldGE7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIGVsZTogRWxlbWVudFJlZikgeyBcbiAgICB9XG5cblxuXG59IFxuICBcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcbiAgICBhbGVydCgnaGVsbG8nKTtcbiAgICAvL2RlYnVnZ2VyXG4gICAgLy9kb2N1bWVudC5ib2R5LnNldEF0dHJpYnV0ZSgnbW9iaWxlJywnYScpO1xufSk7XG4gICBcbiBcbiAgIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
