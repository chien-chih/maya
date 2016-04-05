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
                    if (this.instance.isTopModal &&
                        this.instance.config.supportsKey(event.keyCode)) {
                        this.instance.dismiss();
                    }
                };
                AiModalContainer.prototype.onLoad = function () {
                    //        debugger
                    //      var body=DOM.query("body");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlNb2RhbC9BaU1vZGFsQ29udGFpbmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFvQkE7Z0JBQXNDLG9DQUFTO2dCQUkzQywwQkFBb0IsUUFBeUIsRUFBQyxHQUFlO29CQUN6RCxrQkFBTSxHQUFHLENBQUMsQ0FBQztvQkFESyxhQUFRLEdBQVIsUUFBUSxDQUFpQjtvQkFGN0MsZUFBVSxHQUFRLFFBQVEsQ0FBQztnQkFJM0IsQ0FBQztnQkFFRCxzQkFBSSxtQ0FBSzt5QkFBVDt3QkFDSSxJQUFJLEdBQUcsR0FBUSxFQUFFLENBQUM7d0JBRWxCLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQzs0QkFDekIsR0FBRyxJQUFFLFFBQVEsR0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7d0JBRTVDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQzs0QkFDN0IsR0FBRyxJQUFFLFdBQVcsQ0FBQzt3QkFFckIsTUFBTSxDQUFDLEdBQUcsQ0FBQztvQkFDZixDQUFDOzs7bUJBQUE7Z0JBRUQsd0NBQWEsR0FBYjtvQkFDSSxrRUFBa0U7b0JBRWxFLElBQUksTUFBTSxHQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUM1QyxJQUFJLE9BQU8sR0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNqQyxJQUFJLE1BQU0sR0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztvQkFFaEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztvQkFDdEMsT0FBTyxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUMsVUFBVSxDQUFDO29CQUNsQyxJQUFJLE1BQU0sR0FBQyxJQUFJLENBQUM7b0JBQ2hCLEVBQUUsQ0FBQSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7d0JBQ2YsTUFBTSxHQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUNwRCxNQUFNLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUM3QyxNQUFNLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUU1QyxJQUFJLENBQUMsVUFBVSxHQUFDLElBQUksQ0FBQztnQkFDekIsQ0FBQztnQkFHRCxrQ0FBTyxHQUFQO29CQUNJLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQzt3QkFDN0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDaEMsQ0FBQztnQkFFRCwyQ0FBZ0IsR0FBaEIsVUFBaUIsS0FBb0I7b0JBQ2pDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVTt3QkFDeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUNoRCxDQUFDO3dCQUNELElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7b0JBQzVCLENBQUM7Z0JBQ0wsQ0FBQztnQkFFRCxpQ0FBTSxHQUFOO29CQUNKLGtCQUFrQjtvQkFDaEIsbUNBQW1DO29CQUc3QixJQUFJLElBQUksR0FBQyxJQUFJLENBQUM7b0JBQ2QsdUJBQXVCO29CQUV2QixvQkFBWSxDQUFDLFVBQVUsQ0FBQzt3QkFDcEIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO29CQUN6QixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBR04sRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUMsQ0FBQSxDQUFDO3dCQUMxQyxvQkFBWSxDQUFDLFdBQVcsQ0FBQzs0QkFDckIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO3dCQUN6QixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7b0JBRVosQ0FBQztvQkFFRCwyREFBMkQ7b0JBRTNELGdDQUFnQztvQkFDN0Isa0RBQWtEO29CQUNyRCxHQUFHO2dCQUNQLENBQUM7Z0JBRUQsbUNBQVEsR0FBUjtvQkFDSSxnQ0FBZ0M7b0JBQzVCLG1EQUFtRDtvQkFDdkQsR0FBRztnQkFFUCxDQUFDO2dCQWhHTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxvQkFBb0I7d0JBQzlCLElBQUksRUFBRTs0QkFDRixTQUFTLEVBQUUsT0FBTzs0QkFDbEIsb0JBQW9CLEVBQUUsWUFBWTs0QkFDbEMsU0FBUyxFQUFFLFdBQVc7NEJBQ3RCLGdCQUFnQixFQUFFLDBCQUEwQjs0QkFDNUMsVUFBVSxFQUFFLEdBQUc7NEJBQ2YsTUFBTSxFQUFFLFFBQVE7eUJBQ25CO3dCQUNELFFBQVEsRUFBQyx5REFBeUQ7cUJBQ3JFLENBQUM7O29DQUFBO2dCQXNGRix1QkFBQztZQUFELENBckZBLEFBcUZDLENBckZxQyxxQkFBUyxHQXFGOUM7WUFyRkQsK0NBcUZDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9BaU1vZGFsL0FpTW9kYWxDb250YWluZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCxFbGVtZW50UmVmLEF0dHJpYnV0ZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0FpQ29udHJvbH0gZnJvbSAnLi4vQWlDb250cm9sL0FpQ29udHJvbCc7XG5pbXBvcnQge0FpTW9kYWxJbnN0YW5jZX0gZnJvbSAnLi9BaU1vZGFsSW5zdGFuY2UnO1xuaW1wb3J0IHtBaU1vZGFsQ29uZmlnLEFpTW9kYWxBbGlnbn0gZnJvbSAnLi9BaU1vZGFsQ29uZmlnJztcbmltcG9ydCB7QWlNb2RhbH0gZnJvbSAnLi9BaU1vZGFsJztcbmltcG9ydCB7VGltZXJXcmFwcGVyfSBmcm9tIFwiYW5ndWxhcjIvc3JjL2ZhY2FkZS9hc3luY1wiO1xuaW1wb3J0IHsgRE9NIH0gZnJvbSAnYW5ndWxhcjIvc3JjL3BsYXRmb3JtL2RvbS9kb21fYWRhcHRlcic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYWktbW9kYWwtY29udGFpbmVyJyxcbiAgICBob3N0OiB7XG4gICAgICAgICdbY2xhc3NdJzogJ0NsYXNzJyxcbiAgICAgICAgJ1tzdHlsZS52aXNpYmlsaXR5XSc6ICd2aXNpYmlsaXR5JyxcbiAgICAgICAgJyhjbGljayknOiAnb25DbGljaygpJyxcbiAgICAgICAgJyhib2R5OmtleWRvd24pJzogJ2RvY3VtZW50S2V5cHJlc3MoJGV2ZW50KScsXG4gICAgICAgICd0YWJpbmRleCc6ICcwJyxcbiAgICAgICAgJ3JvbGUnOiAnZGlhbG9nJ1xuICAgIH0sXG4gICAgdGVtcGxhdGU6JzxkaXYgY2xhc3M9XCJhaS1tb2RhbC1kaWFsb2dcIj48aSAjbW9kYWxEaWFsb2c+PC9pPjwvZGl2Pidcbn0pXG5leHBvcnQgY2xhc3MgQWlNb2RhbENvbnRhaW5lciBleHRlbmRzIEFpQ29udHJvbHtcblxuICAgIHZpc2liaWxpdHk6c3RyaW5nPSdoaWRkZW4nO1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaW5zdGFuY2U6IEFpTW9kYWxJbnN0YW5jZSxlbGU6IEVsZW1lbnRSZWYpIHtcbiAgICAgICAgc3VwZXIoZWxlKTsgXG4gICAgfVxuICAgIFxuICAgIGdldCBDbGFzcygpOnN0cmluZ3tcbiAgICAgICAgdmFyIGNsczpzdHJpbmc9Jyc7XG5cbiAgICAgICAgaWYodGhpcy5pbnN0YW5jZS5jb25maWcubWFzaylcbiAgICAgICAgICAgIGNscys9JyBtYXNrICcrdGhpcy5pbnN0YW5jZS5jb25maWcubWFzaztcblxuICAgICAgICBpZih0aGlzLmluc3RhbmNlLmNvbmZpZy5hdXRvSGlkZSlcbiAgICAgICAgICAgIGNscys9JyBhdXRvaGlkZSc7XG5cbiAgICAgICAgcmV0dXJuIGNscztcbiAgICB9XG5cbiAgICByZXNldFBvc2l0aW9uKCkge1xuICAgICAgICAvL3RoZSByZWFsIG1vZGFsIHNob3cgcG9zaXRpb24gaXMgZGlhbG9nIHBvc2l0aW9uICsgYWxpZ24gcG9zaXRpb25cbiAgICAgICAgXG4gICAgICAgIHZhciBkaWFsb2c9dGhpcy5uYXRpdmVFbGVtZW50LmNoaWxkTm9kZXNbMF07XG4gICAgICAgIHZhciBjb250ZW50PWRpYWxvZy5jaGlsZE5vZGVzWzFdO1xuICAgICAgICB2YXIgY29uZmlnPXRoaXMuaW5zdGFuY2UuY29uZmlnO1xuXG4gICAgICAgIGRpYWxvZy5zdHlsZS5wb3NpdGlvbj1jb25maWcuUG9zaXRpb247XG4gICAgICAgIGNvbnRlbnQuc3R5bGUucG9zaXRpb249J3JlbGF0aXZlJztcbiAgICAgICAgbGV0IHRhcmdldD1udWxsO1xuICAgICAgICBpZihjb25maWcuYXJvdW5kVG8pXG4gICAgICAgICAgICB0YXJnZXQ9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29uZmlnLmFyb3VuZFRvKTtcbiAgICAgICAgY29uZmlnLngucG9zaXRpb25MZWZ0KGRpYWxvZyxjb250ZW50LHRhcmdldCk7XG4gICAgICAgIGNvbmZpZy55LnBvc2l0aW9uVG9wKGRpYWxvZyxjb250ZW50LHRhcmdldCk7XG5cbiAgICAgICAgdGhpcy52aXNpYmlsaXR5PW51bGw7XG4gICAgfVxuXG5cbiAgICBvbkNsaWNrKCkge1xuICAgICAgICBpZih0aGlzLmluc3RhbmNlLmNvbmZpZy5hdXRvSGlkZSlcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UuZGlzbWlzcygpO1xuICAgIH1cblxuICAgIGRvY3VtZW50S2V5cHJlc3MoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuaW5zdGFuY2UuaXNUb3BNb2RhbCAmJiBcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UuY29uZmlnLnN1cHBvcnRzS2V5KGV2ZW50LmtleUNvZGUpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5kaXNtaXNzKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgb25Mb2FkKCl7XG4vLyAgICAgICAgZGVidWdnZXJcbiAgLy8gICAgICB2YXIgYm9keT1ET00ucXVlcnkoXCJib2R5XCIpO1xuICAgICAgICBcbiAgICAgICAgICAgXG4gICAgICAgIHZhciB0aGF0PXRoaXM7XG4gICAgICAgIC8vdGhhdC5yZXNldFBvc2l0aW9uKCk7XG5cbiAgICAgICAgVGltZXJXcmFwcGVyLnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhhdC5yZXNldFBvc2l0aW9uKCk7XG4gICAgICAgIH0sIDEpO1xuXG5cbiAgICAgICAgaWYodGhpcy5pbnN0YW5jZS5jb25maWcudHJhY2tpbmdTaXplUG9zaXRpb24pe1xuICAgICAgICAgICAgVGltZXJXcmFwcGVyLnNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGF0LnJlc2V0UG9zaXRpb24oKTtcbiAgICAgICAgICAgIH0sIDUwMCk7XG4gICAgICAgICBcbiAgICAgICAgfSAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgLy9kb2N1bWVudC5ib2R5LnNldEF0dHJpYnV0ZShtb2JpbGU/J21vYmlsZSc6J2Rlc2t0b3AnLCcnKTtcblxuICAgICAgICAvL2lmICh0aGlzLl9saXN0Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAvLyBET00uYWRkQ2xhc3MoRE9NLnF1ZXJ5KCdib2R5JyksICdtb2RhbC1vcGVuJyk7IFxuICAgICAgICAvL31cbiAgICB9XG5cbiAgICBvblVubG9hZCgpe1xuICAgICAgICAvL2lmICh0aGlzLl9saXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgLy9ET00ucmVtb3ZlQ2xhc3MoRE9NLnF1ZXJ5KCdib2R5JyksICdtb2RhbC1vcGVuJyk7XG4gICAgICAgIC8vfVxuXG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
