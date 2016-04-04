System.register(['angular2/core', '../AiControl/AiControl', './AiModalInstance', "angular2/src/facade/async"], function(exports_1) {
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
                    if (this.instance.isTopModal &&
                        this.instance.config.supportsKey(event.keyCode)) {
                        this.instance.dismiss();
                    }
                };
                AiModalContainer.prototype.onLoad = function () {
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
            })(AiControl_1.AiControl);
            exports_1("AiModalContainer", AiModalContainer);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlNb2RhbC9BaU1vZGFsQ29udGFpbmVyLnRzIl0sIm5hbWVzIjpbIkFpTW9kYWxDb250YWluZXIiLCJBaU1vZGFsQ29udGFpbmVyLmNvbnN0cnVjdG9yIiwiQWlNb2RhbENvbnRhaW5lci5DbGFzcyIsIkFpTW9kYWxDb250YWluZXIucmVzZXRQb3NpdGlvbiIsIkFpTW9kYWxDb250YWluZXIub25DbGljayIsIkFpTW9kYWxDb250YWluZXIuZG9jdW1lbnRLZXlwcmVzcyIsIkFpTW9kYWxDb250YWluZXIub25Mb2FkIiwiQWlNb2RhbENvbnRhaW5lci5vblVubG9hZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFPQTtnQkFZc0NBLG9DQUFTQTtnQkFJM0NBLDBCQUFvQkEsUUFBeUJBLEVBQUNBLEdBQWVBO29CQUN6REMsa0JBQU1BLEdBQUdBLENBQUNBLENBQUNBO29CQURLQSxhQUFRQSxHQUFSQSxRQUFRQSxDQUFpQkE7b0JBRjdDQSxlQUFVQSxHQUFRQSxRQUFRQSxDQUFDQTtnQkFJM0JBLENBQUNBO2dCQUVERCxzQkFBSUEsbUNBQUtBO3lCQUFUQTt3QkFDSUUsSUFBSUEsR0FBR0EsR0FBUUEsRUFBRUEsQ0FBQ0E7d0JBRWxCQSxFQUFFQSxDQUFBQSxDQUFDQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQTs0QkFDekJBLEdBQUdBLElBQUVBLFFBQVFBLEdBQUNBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBO3dCQUU1Q0EsRUFBRUEsQ0FBQUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsUUFBUUEsQ0FBQ0E7NEJBQzdCQSxHQUFHQSxJQUFFQSxXQUFXQSxDQUFDQTt3QkFFckJBLE1BQU1BLENBQUNBLEdBQUdBLENBQUNBO29CQUNmQSxDQUFDQTs7O21CQUFBRjtnQkFFREEsd0NB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QVNBLEVBQUVBLE9BQU9BOzRCQUNsQkEsb0JBQW9CQSxFQUFFQSxZQUFZQTs0QkFDbENBLFNBQVNBLEVBQUVBLFdBQVdBOzRCQUN0QkEsZ0JBQWdCQSxFQUFFQSwwQkFBMEJBOzRCQUM1Q0EsVUFBVUEsRUFBRUEsR0FBR0E7NEJBQ2ZBLE1BQU1BLEVBQUVBLFFBQVFBO3lCQUNuQkE7d0JBQ0RBLFFBQVFBLEVBQUNBLHlEQUF5REE7cUJBQ3JFQSxDQUFDQTs7cUNBa0ZEQTtnQkFBREEsdUJBQUNBO1lBQURBLENBN0ZBLEFBNkZDQSxFQWpGcUMscUJBQVMsRUFpRjlDO1lBN0ZELCtDQTZGQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvQWlNb2RhbC9BaU1vZGFsQ29udGFpbmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsRWxlbWVudFJlZixBdHRyaWJ1dGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtBaUNvbnRyb2x9IGZyb20gJy4uL0FpQ29udHJvbC9BaUNvbnRyb2wnO1xuaW1wb3J0IHtBaU1vZGFsSW5zdGFuY2V9IGZyb20gJy4vQWlNb2RhbEluc3RhbmNlJztcbmltcG9ydCB7QWlNb2RhbENvbmZpZyxBaU1vZGFsQWxpZ259IGZyb20gJy4vQWlNb2RhbENvbmZpZyc7XG5pbXBvcnQge0FpTW9kYWx9IGZyb20gJy4vQWlNb2RhbCc7XG5pbXBvcnQge1RpbWVyV3JhcHBlcn0gZnJvbSBcImFuZ3VsYXIyL3NyYy9mYWNhZGUvYXN5bmNcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhaS1tb2RhbC1jb250YWluZXInLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgJ1tjbGFzc10nOiAnQ2xhc3MnLFxuICAgICAgICAnW3N0eWxlLnZpc2liaWxpdHldJzogJ3Zpc2liaWxpdHknLFxuICAgICAgICAnKGNsaWNrKSc6ICdvbkNsaWNrKCknLFxuICAgICAgICAnKGJvZHk6a2V5ZG93biknOiAnZG9jdW1lbnRLZXlwcmVzcygkZXZlbnQpJyxcbiAgICAgICAgJ3RhYmluZGV4JzogJzAnLFxuICAgICAgICAncm9sZSc6ICdkaWFsb2cnXG4gICAgfSxcbiAgICB0ZW1wbGF0ZTonPGRpdiBjbGFzcz1cImFpLW1vZGFsLWRpYWxvZ1wiPjxpICNtb2RhbERpYWxvZz48L2k+PC9kaXY+J1xufSlcbmV4cG9ydCBjbGFzcyBBaU1vZGFsQ29udGFpbmVyIGV4dGVuZHMgQWlDb250cm9se1xuXG4gICAgdmlzaWJpbGl0eTpzdHJpbmc9J2hpZGRlbic7XG4gICAgXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBpbnN0YW5jZTogQWlNb2RhbEluc3RhbmNlLGVsZTogRWxlbWVudFJlZikge1xuICAgICAgICBzdXBlcihlbGUpOyBcbiAgICB9XG4gICAgXG4gICAgZ2V0IENsYXNzKCk6c3RyaW5ne1xuICAgICAgICB2YXIgY2xzOnN0cmluZz0nJztcblxuICAgICAgICBpZih0aGlzLmluc3RhbmNlLmNvbmZpZy5tYXNrKVxuICAgICAgICAgICAgY2xzKz0nIG1hc2sgJyt0aGlzLmluc3RhbmNlLmNvbmZpZy5tYXNrO1xuXG4gICAgICAgIGlmKHRoaXMuaW5zdGFuY2UuY29uZmlnLmF1dG9IaWRlKVxuICAgICAgICAgICAgY2xzKz0nIGF1dG9oaWRlJztcblxuICAgICAgICByZXR1cm4gY2xzO1xuICAgIH1cblxuICAgIHJlc2V0UG9zaXRpb24oKSB7XG4gICAgICAgIC8vdGhlIHJlYWwgbW9kYWwgc2hvdyBwb3NpdGlvbiBpcyBkaWFsb2cgcG9zaXRpb24gKyBhbGlnbiBwb3NpdGlvblxuICAgICAgICBcbiAgICAgICAgdmFyIGRpYWxvZz10aGlzLm5hdGl2ZUVsZW1lbnQuY2hpbGROb2Rlc1swXTtcbiAgICAgICAgdmFyIGNvbnRlbnQ9ZGlhbG9nLmNoaWxkTm9kZXNbMV07XG4gICAgICAgIHZhciBjb25maWc9dGhpcy5pbnN0YW5jZS5jb25maWc7XG5cbiAgICAgICAgZGlhbG9nLnN0eWxlLnBvc2l0aW9uPWNvbmZpZy5Qb3NpdGlvbjtcbiAgICAgICAgY29udGVudC5zdHlsZS5wb3NpdGlvbj0ncmVsYXRpdmUnO1xuICAgICAgICBsZXQgdGFyZ2V0PW51bGw7XG4gICAgICAgIGlmKGNvbmZpZy5hcm91bmRUbylcbiAgICAgICAgICAgIHRhcmdldD1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb25maWcuYXJvdW5kVG8pO1xuICAgICAgICBjb25maWcueC5wb3NpdGlvbkxlZnQoZGlhbG9nLGNvbnRlbnQsdGFyZ2V0KTtcbiAgICAgICAgY29uZmlnLnkucG9zaXRpb25Ub3AoZGlhbG9nLGNvbnRlbnQsdGFyZ2V0KTtcblxuICAgICAgICB0aGlzLnZpc2liaWxpdHk9bnVsbDtcbiAgICB9XG5cblxuICAgIG9uQ2xpY2soKSB7XG4gICAgICAgIGlmKHRoaXMuaW5zdGFuY2UuY29uZmlnLmF1dG9IaWRlKVxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5kaXNtaXNzKCk7XG4gICAgfVxuXG4gICAgZG9jdW1lbnRLZXlwcmVzcyhldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICBpZiAodGhpcy5pbnN0YW5jZS5pc1RvcE1vZGFsICYmIFxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5jb25maWcuc3VwcG9ydHNLZXkoZXZlbnQua2V5Q29kZSkpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlLmRpc21pc3MoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBvbkxvYWQoKXtcbiAgICAgICAgdmFyIHRoYXQ9dGhpcztcbiAgICAgICAgLy90aGF0LnJlc2V0UG9zaXRpb24oKTtcblxuICAgICAgICBUaW1lcldyYXBwZXIuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGF0LnJlc2V0UG9zaXRpb24oKTtcbiAgICAgICAgfSwgMSk7XG5cblxuICAgICAgICBpZih0aGlzLmluc3RhbmNlLmNvbmZpZy50cmFja2luZ1NpemVQb3NpdGlvbil7XG4gICAgICAgICAgICBUaW1lcldyYXBwZXIuc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoYXQucmVzZXRQb3NpdGlvbigpO1xuICAgICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgIFxuICAgICAgICB9ICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAvL2RvY3VtZW50LmJvZHkuc2V0QXR0cmlidXRlKG1vYmlsZT8nbW9iaWxlJzonZGVza3RvcCcsJycpO1xuXG4gICAgICAgIC8vaWYgKHRoaXMuX2xpc3QubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgIC8vIERPTS5hZGRDbGFzcyhET00ucXVlcnkoJ2JvZHknKSwgJ21vZGFsLW9wZW4nKTsgXG4gICAgICAgIC8vfVxuICAgIH1cblxuICAgIG9uVW5sb2FkKCl7XG4gICAgICAgIC8vaWYgKHRoaXMuX2xpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAvL0RPTS5yZW1vdmVDbGFzcyhET00ucXVlcnkoJ2JvZHknKSwgJ21vZGFsLW9wZW4nKTtcbiAgICAgICAgLy99XG5cbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
