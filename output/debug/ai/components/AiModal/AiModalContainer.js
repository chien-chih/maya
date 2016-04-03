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
                    that.resetPosition();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlNb2RhbC9BaU1vZGFsQ29udGFpbmVyLnRzIl0sIm5hbWVzIjpbIkFpTW9kYWxDb250YWluZXIiLCJBaU1vZGFsQ29udGFpbmVyLmNvbnN0cnVjdG9yIiwiQWlNb2RhbENvbnRhaW5lci5DbGFzcyIsIkFpTW9kYWxDb250YWluZXIucmVzZXRQb3NpdGlvbiIsIkFpTW9kYWxDb250YWluZXIub25DbGljayIsIkFpTW9kYWxDb250YWluZXIuZG9jdW1lbnRLZXlwcmVzcyIsIkFpTW9kYWxDb250YWluZXIub25Mb2FkIiwiQWlNb2RhbENvbnRhaW5lci5vblVubG9hZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFPQTtnQkFZc0NBLG9DQUFTQTtnQkFJM0NBLDBCQUFvQkEsUUFBeUJBLEVBQUNBLEdBQWVBO29CQUN6REMsa0JBQU1BLEdBQUdBLENBQUNBLENBQUNBO29CQURLQSxhQUFRQSxHQUFSQSxRQUFRQSxDQUFpQkE7b0JBRjdDQSxlQUFVQSxHQUFRQSxRQUFRQSxDQUFDQTtnQkFNM0JBLENBQUNBO2dCQUVERCxzQkFBSUEsbUNBQUtBO3lCQUFUQTt3QkFDSUUsSUFBSUEsR0FBR0EsR0FBUUEsRUFBRUEsQ0FBQ0E7d0JBRWxCQSxFQUFFQSxDQUFBQSxDQUFDQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQTs0QkFDekJBLEdBQUdBLElBQUVBLFFBQVFBLEdBQUNBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBO3dCQUU1Q0EsRUFBRUEsQ0FBQUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsUUFBUUEsQ0FBQ0E7NEJBQzdCQSxHQUFHQSxJQUFFQSxXQUFXQSxDQUFDQTt3QkFFckJBLE1BQU1BLENBQUNBLEdBQUdBLENBQUNBO29CQUNmQSxDQUFDQTs7O21CQUFBRjtnQkFFREEsd0NB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RUFBRUEsMEJBQTBCQTs0QkFDNUNBLFVBQVVBLEVBQUVBLEdBQUdBOzRCQUNmQSxNQUFNQSxFQUFFQSxRQUFRQTt5QkFDbkJBO3dCQUNEQSxRQUFRQSxFQUFDQSx5REFBeURBO3FCQUNyRUEsQ0FBQ0E7O3FDQStFREE7Z0JBQURBLHVCQUFDQTtZQUFEQSxDQTFGQSxBQTBGQ0EsRUE5RXFDLHFCQUFTLEVBOEU5QztZQTFGRCwrQ0EwRkMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL0FpTW9kYWwvQWlNb2RhbENvbnRhaW5lci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LEVsZW1lbnRSZWYsQXR0cmlidXRlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7QWlDb250cm9sfSBmcm9tICcuLi9BaUNvbnRyb2wvQWlDb250cm9sJztcbmltcG9ydCB7QWlNb2RhbEluc3RhbmNlfSBmcm9tICcuL0FpTW9kYWxJbnN0YW5jZSc7XG5pbXBvcnQge0FpTW9kYWxDb25maWcsQWlNb2RhbEFsaWdufSBmcm9tICcuL0FpTW9kYWxDb25maWcnO1xuaW1wb3J0IHtBaU1vZGFsfSBmcm9tICcuL0FpTW9kYWwnO1xuaW1wb3J0IHtUaW1lcldyYXBwZXJ9IGZyb20gXCJhbmd1bGFyMi9zcmMvZmFjYWRlL2FzeW5jXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYWktbW9kYWwtY29udGFpbmVyJyxcbiAgICBob3N0OiB7XG4gICAgICAgICdbY2xhc3NdJzogJ0NsYXNzJyxcbiAgICAgICAgJ1tzdHlsZS52aXNpYmlsaXR5XSc6ICd2aXNpYmlsaXR5JyxcbiAgICAgICAgJyhjbGljayknOiAnb25DbGljaygpJyxcbiAgICAgICAgJyhib2R5OmtleWRvd24pJzogJ2RvY3VtZW50S2V5cHJlc3MoJGV2ZW50KScsXG4gICAgICAgICd0YWJpbmRleCc6ICcwJyxcbiAgICAgICAgJ3JvbGUnOiAnZGlhbG9nJ1xuICAgIH0sXG4gICAgdGVtcGxhdGU6JzxkaXYgY2xhc3M9XCJhaS1tb2RhbC1kaWFsb2dcIj48aSAjbW9kYWxEaWFsb2c+PC9pPjwvZGl2Pidcbn0pXG5leHBvcnQgY2xhc3MgQWlNb2RhbENvbnRhaW5lciBleHRlbmRzIEFpQ29udHJvbHtcblxuICAgIHZpc2liaWxpdHk6c3RyaW5nPSdoaWRkZW4nO1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaW5zdGFuY2U6IEFpTW9kYWxJbnN0YW5jZSxlbGU6IEVsZW1lbnRSZWYpIHtcbiAgICAgICAgc3VwZXIoZWxlKTsgXG4gICAgICAgIFxuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgZ2V0IENsYXNzKCk6c3RyaW5ne1xuICAgICAgICB2YXIgY2xzOnN0cmluZz0nJztcblxuICAgICAgICBpZih0aGlzLmluc3RhbmNlLmNvbmZpZy5tYXNrKVxuICAgICAgICAgICAgY2xzKz0nIG1hc2sgJyt0aGlzLmluc3RhbmNlLmNvbmZpZy5tYXNrO1xuXG4gICAgICAgIGlmKHRoaXMuaW5zdGFuY2UuY29uZmlnLmF1dG9IaWRlKVxuICAgICAgICAgICAgY2xzKz0nIGF1dG9oaWRlJztcblxuICAgICAgICByZXR1cm4gY2xzO1xuICAgIH1cblxuICAgIHJlc2V0UG9zaXRpb24oKSB7XG4gICAgICAgIC8vdGhlIHJlYWwgbW9kYWwgc2hvdyBwb3NpdGlvbiBpcyBkaWFsb2cgcG9zaXRpb24gKyBhbGlnbiBwb3NpdGlvblxuICAgICAgICBcbiAgICAgICAgdmFyIGRpYWxvZz10aGlzLm5hdGl2ZUVsZW1lbnQuY2hpbGROb2Rlc1swXTtcbiAgICAgICAgdmFyIGNvbnRlbnQ9ZGlhbG9nLmNoaWxkTm9kZXNbMV07XG4gICAgICAgIHZhciBjb25maWc9dGhpcy5pbnN0YW5jZS5jb25maWc7XG5cbiAgICAgICAgZGlhbG9nLnN0eWxlLnBvc2l0aW9uPWNvbmZpZy5Qb3NpdGlvbjtcbiAgICAgICAgY29udGVudC5zdHlsZS5wb3NpdGlvbj0ncmVsYXRpdmUnO1xuICAgICAgICBsZXQgdGFyZ2V0PW51bGw7XG4gICAgICAgIGlmKGNvbmZpZy5hcm91bmRUbylcbiAgICAgICAgICAgIHRhcmdldD1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb25maWcuYXJvdW5kVG8pO1xuICAgICAgICBjb25maWcueC5wb3NpdGlvbkxlZnQoZGlhbG9nLGNvbnRlbnQsdGFyZ2V0KTtcbiAgICAgICAgY29uZmlnLnkucG9zaXRpb25Ub3AoZGlhbG9nLGNvbnRlbnQsdGFyZ2V0KTtcblxuICAgICAgICB0aGlzLnZpc2liaWxpdHk9bnVsbDtcbiAgICB9XG5cblxuICAgIG9uQ2xpY2soKSB7XG4gICAgICAgIGlmKHRoaXMuaW5zdGFuY2UuY29uZmlnLmF1dG9IaWRlKVxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5kaXNtaXNzKCk7XG4gICAgfVxuXG4gICAgZG9jdW1lbnRLZXlwcmVzcyhldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICBpZiAodGhpcy5pbnN0YW5jZS5pc1RvcE1vZGFsICYmIFxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5jb25maWcuc3VwcG9ydHNLZXkoZXZlbnQua2V5Q29kZSkpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlLmRpc21pc3MoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBvbkxvYWQoKXtcbiAgICAgICAgdmFyIHRoYXQ9dGhpcztcbiAgICAgICAgdGhhdC5yZXNldFBvc2l0aW9uKCk7XG5cbiAgICAgICAgaWYodGhpcy5pbnN0YW5jZS5jb25maWcudHJhY2tpbmdTaXplUG9zaXRpb24pe1xuICAgICAgICAgICAgVGltZXJXcmFwcGVyLnNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGF0LnJlc2V0UG9zaXRpb24oKTtcbiAgICAgICAgICAgIH0sIDUwMCk7XG4gICAgICAgICBcbiAgICAgICAgfSAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgLy9kb2N1bWVudC5ib2R5LnNldEF0dHJpYnV0ZShtb2JpbGU/J21vYmlsZSc6J2Rlc2t0b3AnLCcnKTtcblxuICAgICAgICAvL2lmICh0aGlzLl9saXN0Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAvLyBET00uYWRkQ2xhc3MoRE9NLnF1ZXJ5KCdib2R5JyksICdtb2RhbC1vcGVuJyk7IFxuICAgICAgICAvL31cbiAgICB9XG5cbiAgICBvblVubG9hZCgpe1xuICAgICAgICAvL2lmICh0aGlzLl9saXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgLy9ET00ucmVtb3ZlQ2xhc3MoRE9NLnF1ZXJ5KCdib2R5JyksICdtb2RhbC1vcGVuJyk7XG4gICAgICAgIC8vfVxuXG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
