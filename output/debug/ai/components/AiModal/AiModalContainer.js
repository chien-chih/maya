System.register(['angular2/core', '../AiControl/AiControl', './AiModalInstance', "angular2/src/facade/async"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, AiControl_1, AiModalInstance_1, async_1;
    var AiModalContainer;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (AiControl_1_1) {
                AiControl_1 = AiControl_1_1;
            },
            function (AiModalInstance_1_1) {
                AiModalInstance_1 = AiModalInstance_1_1;
            },
            function (async_1_1) {
                async_1 = async_1_1;
            }],
        execute: function() {
            AiModalContainer = (function (_super) {
                __extends(AiModalContainer, _super);
                function AiModalContainer(instance, ele) {
                    _super.call(this, ele);
                    this.instance = instance;
                    this.visibility = 'hidden';
                }
                Object.defineProperty(AiModalContainer.prototype, "Class", {
                    get: function () {
                        var cls = '';
                        if (this.instance.config.mask)
                            cls += ' mask ' + this.instance.config.mask;
                        if (this.instance.config.autoHide)
                            cls += ' autohide';
                        return cls;
                    },
                    enumerable: true,
                    configurable: true
                });
                AiModalContainer.prototype.resetPosition = function () {
                    //the real modal show position is dialog position + align position
                    var dialog = this.nativeElement.childNodes[0];
                    var content = dialog.childNodes[1];
                    var config = this.instance.config;
                    dialog.style.position = config.Position;
                    content.style.position = 'relative';
                    var target = null;
                    if (config.aroundTo)
                        target = document.getElementById(config.aroundTo);
                    config.x.positionLeft(dialog, content, target);
                    config.y.positionTop(dialog, content, target);
                    this.visibility = null;
                };
                AiModalContainer.prototype.onClick = function () {
                    if (this.instance.config.autoHide)
                        this.instance.dismiss();
                };
                AiModalContainer.prototype.documentKeypress = function (event) {
                    if (this.instance.isTopModal && this.instance.config.ESCHide && event.keyCode == AiControl_1.KeyCodes.ESCAPE)
                        this.instance.dismiss();
                };
                AiModalContainer.prototype.onLoad = function () {
                    //        var body=this.DOM.query("body");
                    //      debugger
                    var that = this;
                    //that.resetPosition();
                    async_1.TimerWrapper.setTimeout(function () {
                        that.resetPosition();
                    }, 1);
                    if (this.instance.config.trackingSizePosition) {
                        async_1.TimerWrapper.setInterval(function () {
                            that.resetPosition();
                        }, 500);
                    }
                    //document.body.setAttribute(mobile?'mobile':'desktop','');
                    //if (this._list.length === 1) {
                    // DOM.addClass(DOM.query('body'), 'modal-open'); 
                    //}
                };
                AiModalContainer.prototype.onUnload = function () {
                    //if (this._list.length === 0) {
                    //DOM.removeClass(DOM.query('body'), 'modal-open');
                    //}
                };
                AiModalContainer = __decorate([
                    core_1.Component({
                        selector: 'ai-modal-container',
                        host: {
                            '[class]': 'Class',
                            '[style.visibility]': 'visibility',
                            '(click)': 'onClick()',
                            '(body:keydown)': 'documentKeypress($event)',
                            'tabindex': '0',
                            'role': 'dialog'
                        },
                        template: '<div class="ai-modal-dialog"><i #modalDialog></i></div>'
                    }), 
                    __metadata('design:paramtypes', [AiModalInstance_1.AiModalInstance, core_1.ElementRef])
                ], AiModalContainer);
                return AiModalContainer;
            }(AiControl_1.AiControl));
            exports_1("AiModalContainer", AiModalContainer);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlNb2RhbC9BaU1vZGFsQ29udGFpbmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFtQkE7Z0JBQXNDLG9DQUFTO2dCQU0zQywwQkFBb0IsUUFBeUIsRUFBQyxHQUFlO29CQUN6RCxrQkFBTSxHQUFHLENBQUMsQ0FBQztvQkFESyxhQUFRLEdBQVIsUUFBUSxDQUFpQjtvQkFGN0MsZUFBVSxHQUFRLFFBQVEsQ0FBQztnQkFJM0IsQ0FBQztnQkFFRCxzQkFBSSxtQ0FBSzt5QkFBVDt3QkFDSSxJQUFJLEdBQUcsR0FBUSxFQUFFLENBQUM7d0JBRWxCLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQzs0QkFDekIsR0FBRyxJQUFFLFFBQVEsR0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7d0JBRTVDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQzs0QkFDN0IsR0FBRyxJQUFFLFdBQVcsQ0FBQzt3QkFFckIsTUFBTSxDQUFDLEdBQUcsQ0FBQztvQkFDZixDQUFDOzs7bUJBQUE7Z0JBRUQsd0NBQWEsR0FBYjtvQkFDSSxrRUFBa0U7b0JBRWxFLElBQUksTUFBTSxHQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUM1QyxJQUFJLE9BQU8sR0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNqQyxJQUFJLE1BQU0sR0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztvQkFFaEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztvQkFDdEMsT0FBTyxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUMsVUFBVSxDQUFDO29CQUNsQyxJQUFJLE1BQU0sR0FBQyxJQUFJLENBQUM7b0JBQ2hCLEVBQUUsQ0FBQSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7d0JBQ2YsTUFBTSxHQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUNwRCxNQUFNLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUM3QyxNQUFNLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUU1QyxJQUFJLENBQUMsVUFBVSxHQUFDLElBQUksQ0FBQztnQkFDekIsQ0FBQztnQkFHRCxrQ0FBTyxHQUFQO29CQUNJLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQzt3QkFDN0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDaEMsQ0FBQztnQkFFRCwyQ0FBZ0IsR0FBaEIsVUFBaUIsS0FBb0I7b0JBQ2pDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sSUFBSSxLQUFLLENBQUMsT0FBTyxJQUFFLG9CQUFRLENBQUMsTUFBTSxDQUFDO3dCQUMzRixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNoQyxDQUFDO2dCQUVELGlDQUFNLEdBQU47b0JBQ0osMENBQTBDO29CQUN4QyxnQkFBZ0I7b0JBR1YsSUFBSSxJQUFJLEdBQUMsSUFBSSxDQUFDO29CQUNkLHVCQUF1QjtvQkFFdkIsb0JBQVksQ0FBQyxVQUFVLENBQUM7d0JBQ3BCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztvQkFDekIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUdOLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLENBQUEsQ0FBQzt3QkFDMUMsb0JBQVksQ0FBQyxXQUFXLENBQUM7NEJBQ3JCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQzt3QkFDekIsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO29CQUVaLENBQUM7b0JBRUQsMkRBQTJEO29CQUUzRCxnQ0FBZ0M7b0JBQzdCLGtEQUFrRDtvQkFDckQsR0FBRztnQkFDUCxDQUFDO2dCQUVELG1DQUFRLEdBQVI7b0JBQ0ksZ0NBQWdDO29CQUM1QixtREFBbUQ7b0JBQ3ZELEdBQUc7Z0JBRVAsQ0FBQztnQkEvRkw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsb0JBQW9CO3dCQUM5QixJQUFJLEVBQUU7NEJBQ0YsU0FBUyxFQUFFLE9BQU87NEJBQ2xCLG9CQUFvQixFQUFFLFlBQVk7NEJBQ2xDLFNBQVMsRUFBRSxXQUFXOzRCQUN0QixnQkFBZ0IsRUFBRSwwQkFBMEI7NEJBQzVDLFVBQVUsRUFBRSxHQUFHOzRCQUNmLE1BQU0sRUFBRSxRQUFRO3lCQUNuQjt3QkFDRCxRQUFRLEVBQUMseURBQXlEO3FCQUNyRSxDQUFDOztvQ0FBQTtnQkFxRkYsdUJBQUM7WUFBRCxDQXBGQSxBQW9GQyxDQXBGcUMscUJBQVMsR0FvRjlDO1lBcEZELCtDQW9GQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvQWlNb2RhbC9BaU1vZGFsQ29udGFpbmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsRWxlbWVudFJlZixBdHRyaWJ1dGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtBaUNvbnRyb2wsS2V5Q29kZXN9IGZyb20gJy4uL0FpQ29udHJvbC9BaUNvbnRyb2wnO1xuaW1wb3J0IHtBaU1vZGFsSW5zdGFuY2V9IGZyb20gJy4vQWlNb2RhbEluc3RhbmNlJztcbmltcG9ydCB7QWlNb2RhbENvbmZpZyxBaU1vZGFsQWxpZ259IGZyb20gJy4vQWlNb2RhbENvbmZpZyc7XG5pbXBvcnQge0FpTW9kYWx9IGZyb20gJy4vQWlNb2RhbCc7XG5pbXBvcnQge1RpbWVyV3JhcHBlcn0gZnJvbSBcImFuZ3VsYXIyL3NyYy9mYWNhZGUvYXN5bmNcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhaS1tb2RhbC1jb250YWluZXInLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgJ1tjbGFzc10nOiAnQ2xhc3MnLFxuICAgICAgICAnW3N0eWxlLnZpc2liaWxpdHldJzogJ3Zpc2liaWxpdHknLFxuICAgICAgICAnKGNsaWNrKSc6ICdvbkNsaWNrKCknLFxuICAgICAgICAnKGJvZHk6a2V5ZG93biknOiAnZG9jdW1lbnRLZXlwcmVzcygkZXZlbnQpJyxcbiAgICAgICAgJ3RhYmluZGV4JzogJzAnLFxuICAgICAgICAncm9sZSc6ICdkaWFsb2cnXG4gICAgfSxcbiAgICB0ZW1wbGF0ZTonPGRpdiBjbGFzcz1cImFpLW1vZGFsLWRpYWxvZ1wiPjxpICNtb2RhbERpYWxvZz48L2k+PC9kaXY+J1xufSlcbmV4cG9ydCBjbGFzcyBBaU1vZGFsQ29udGFpbmVyIGV4dGVuZHMgQWlDb250cm9se1xuXG4gICAgXG5cbiAgICB2aXNpYmlsaXR5OnN0cmluZz0naGlkZGVuJztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaW5zdGFuY2U6IEFpTW9kYWxJbnN0YW5jZSxlbGU6IEVsZW1lbnRSZWYpIHtcbiAgICAgICAgc3VwZXIoZWxlKTsgXG4gICAgfVxuICAgIFxuICAgIGdldCBDbGFzcygpOnN0cmluZ3tcbiAgICAgICAgdmFyIGNsczpzdHJpbmc9Jyc7XG5cbiAgICAgICAgaWYodGhpcy5pbnN0YW5jZS5jb25maWcubWFzaylcbiAgICAgICAgICAgIGNscys9JyBtYXNrICcrdGhpcy5pbnN0YW5jZS5jb25maWcubWFzaztcblxuICAgICAgICBpZih0aGlzLmluc3RhbmNlLmNvbmZpZy5hdXRvSGlkZSlcbiAgICAgICAgICAgIGNscys9JyBhdXRvaGlkZSc7XG5cbiAgICAgICAgcmV0dXJuIGNscztcbiAgICB9XG5cbiAgICByZXNldFBvc2l0aW9uKCkge1xuICAgICAgICAvL3RoZSByZWFsIG1vZGFsIHNob3cgcG9zaXRpb24gaXMgZGlhbG9nIHBvc2l0aW9uICsgYWxpZ24gcG9zaXRpb25cbiAgICAgICAgXG4gICAgICAgIHZhciBkaWFsb2c9dGhpcy5uYXRpdmVFbGVtZW50LmNoaWxkTm9kZXNbMF07XG4gICAgICAgIHZhciBjb250ZW50PWRpYWxvZy5jaGlsZE5vZGVzWzFdO1xuICAgICAgICB2YXIgY29uZmlnPXRoaXMuaW5zdGFuY2UuY29uZmlnO1xuXG4gICAgICAgIGRpYWxvZy5zdHlsZS5wb3NpdGlvbj1jb25maWcuUG9zaXRpb247XG4gICAgICAgIGNvbnRlbnQuc3R5bGUucG9zaXRpb249J3JlbGF0aXZlJztcbiAgICAgICAgbGV0IHRhcmdldD1udWxsO1xuICAgICAgICBpZihjb25maWcuYXJvdW5kVG8pXG4gICAgICAgICAgICB0YXJnZXQ9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29uZmlnLmFyb3VuZFRvKTtcbiAgICAgICAgY29uZmlnLngucG9zaXRpb25MZWZ0KGRpYWxvZyxjb250ZW50LHRhcmdldCk7XG4gICAgICAgIGNvbmZpZy55LnBvc2l0aW9uVG9wKGRpYWxvZyxjb250ZW50LHRhcmdldCk7XG5cbiAgICAgICAgdGhpcy52aXNpYmlsaXR5PW51bGw7XG4gICAgfVxuXG5cbiAgICBvbkNsaWNrKCkge1xuICAgICAgICBpZih0aGlzLmluc3RhbmNlLmNvbmZpZy5hdXRvSGlkZSlcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UuZGlzbWlzcygpO1xuICAgIH1cblxuICAgIGRvY3VtZW50S2V5cHJlc3MoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuaW5zdGFuY2UuaXNUb3BNb2RhbCAmJiB0aGlzLmluc3RhbmNlLmNvbmZpZy5FU0NIaWRlICYmIGV2ZW50LmtleUNvZGU9PUtleUNvZGVzLkVTQ0FQRSlcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UuZGlzbWlzcygpO1xuICAgIH1cbiAgICBcbiAgICBvbkxvYWQoKXtcbi8vICAgICAgICB2YXIgYm9keT10aGlzLkRPTS5xdWVyeShcImJvZHlcIik7XG4gIC8vICAgICAgZGVidWdnZXJcbiAgICAgICAgXG4gICAgICAgICAgIFxuICAgICAgICB2YXIgdGhhdD10aGlzO1xuICAgICAgICAvL3RoYXQucmVzZXRQb3NpdGlvbigpO1xuXG4gICAgICAgIFRpbWVyV3JhcHBlci5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoYXQucmVzZXRQb3NpdGlvbigpO1xuICAgICAgICB9LCAxKTtcblxuXG4gICAgICAgIGlmKHRoaXMuaW5zdGFuY2UuY29uZmlnLnRyYWNraW5nU2l6ZVBvc2l0aW9uKXtcbiAgICAgICAgICAgIFRpbWVyV3JhcHBlci5zZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhhdC5yZXNldFBvc2l0aW9uKCk7XG4gICAgICAgICAgICB9LCA1MDApO1xuICAgICAgICAgXG4gICAgICAgIH0gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgIC8vZG9jdW1lbnQuYm9keS5zZXRBdHRyaWJ1dGUobW9iaWxlPydtb2JpbGUnOidkZXNrdG9wJywnJyk7XG5cbiAgICAgICAgLy9pZiAodGhpcy5fbGlzdC5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgLy8gRE9NLmFkZENsYXNzKERPTS5xdWVyeSgnYm9keScpLCAnbW9kYWwtb3BlbicpOyBcbiAgICAgICAgLy99XG4gICAgfVxuXG4gICAgb25VbmxvYWQoKXtcbiAgICAgICAgLy9pZiAodGhpcy5fbGlzdC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIC8vRE9NLnJlbW92ZUNsYXNzKERPTS5xdWVyeSgnYm9keScpLCAnbW9kYWwtb3BlbicpO1xuICAgICAgICAvL31cblxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
