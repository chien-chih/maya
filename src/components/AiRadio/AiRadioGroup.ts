import {Component,ElementRef,OnChanges} from 'angular2/core';
import {isPresent, StringWrapper, NumberWrapper} from 'angular2/src/facade/lang';
import {ObservableWrapper,EventEmitter} from 'angular2/src/facade/async';
import {KeyCodes,AiControl} from '../AiControl/AiControl';
import {AiRadioDispatcher} from './AiRadioDispatcher';
import {AiRadio} from './AiRadio';

var _uniqueIdCounter: number = 0;

@Component(AiControl.meta({
    templateUrl:'package:src/components/AiRadio/AiRadioGroup.html',
    selector: 'ai-radio-group',
    providers:[AiRadioDispatcher],
    inputs:['value'],
    outputs:['change'],
    host:{
        'role': 'radiogroup',
        '[class.checked]': 'value',
    },
}))    

export class AiRadioGroup extends AiControl implements OnChanges{ 
     /** The selected value for the radio group. The value comes from the options. */
    value:any;

    /** The HTML name attribute applied to radio buttons in this group. */
    _name: string;
    
    /** Array of child radio buttons. */
    _radios: AiRadio[]= [];
    
    activedescendant: any;
    
    /** The ID of the selected radio button. */
    selectedRadioId: string;

    change:EventEmitter<any>=new EventEmitter();
    
    constructor(ele: ElementRef,private radioDispatcher: AiRadioDispatcher){  
        super(ele); 
        this.tabindex=-1;
        this._name = `ai-radio-group-${_uniqueIdCounter++}`;
        this.selectedRadioId = '';
    }
    
    /** Gets the name of this group, as to be applied in the HTML 'name' attribute. */
    getName(): string {
        return this._name;
    }
    
    /** Change handler invoked when bindings are resolved or when bindings have changed. */
    ngOnChanges(_) {
        // If the value of this radio-group has been set or changed, we have to look through the
        // child radio buttons and select the one that has a corresponding value (if any).
        if (isPresent(this.value) && this.value != '') {
          this.radioDispatcher.notify(this._name);
          this._radios.forEach(radio => {
            if (radio.value == this.value) {
              radio.checked = true;
              this.selectedRadioId = radio.id;
              this.activedescendant = radio.id;
            }
          });
        }
    }
    
    /** Update the value of this radio group from a child md-radio being selected. */
    updateValue(value: any, id: string) {
        this.value = value;
        this.selectedRadioId = id;
        this.activedescendant = id;
        ObservableWrapper.callEmit(this.change, null);
    }
    
    /** Registers a child radio button with this group. */
    register(radio: AiRadio) {
        this._radios.push(radio);
    }
    
    // TODO(jelbourn): Replace this with a findIndex method in the collections facade.
    getSelectedRadioIndex(): number {
        
        for (let i = 0; i < this._radios.length; i++) {
          if (this._radios[i].id == this.selectedRadioId) {
            return i;
          }
        } 
        
        return -1;
    }
    
    onKeyDown(event: KeyboardEvent) {
        if (!this.disabled) {
            switch (event.keyCode) {
              case KeyCodes.UP:
              case KeyCodes.LEFT:
                this.stepSelectedRadio(-1);
                event.preventDefault();
                break;
              case KeyCodes.DOWN:
              case KeyCodes.RIGHT:
                this.stepSelectedRadio(1);
                event.preventDefault();
                break;
            }
        }
    }
    
    /** Steps the selected radio based on the given step value (usually either +1 or -1). */
    stepSelectedRadio(step) {
        
        let index = this.getSelectedRadioIndex() + step;
        if (index < 0 || index >= this._radios.length) {
          return;
        }
    
        let radio = this._radios[index];
    
        // If the next radio is line is disabled, skip it (maintaining direction).
        if (radio.disabled) {
          this.stepSelectedRadio(step + (step < 0 ? -1 : 1));
          return;
        }
    
        this.radioDispatcher.notify(this._name);
        radio.checked = true;
        ObservableWrapper.callEmit(this.change, null);
    
        this.value = radio.value;
        this.selectedRadioId = radio.id;
        this.activedescendant = radio.id;
        
    }    
        


}



