import {Component,ElementRef,OnInit,Host,SkipSelf,Attribute,Optional} from 'angular2/core';
import {isPresent, StringWrapper, NumberWrapper} from 'angular2/src/facade/lang';
import {ObservableWrapper,EventEmitter} from 'angular2/src/facade/async';
import {AiControl} from '../AiControl/AiControl';
import {AiRadioGroup} from './AiRadioGroup';
import {AiRadioDispatcher} from './AiRadioDispatcher';

var _uniqueIdCounter: number = 0;

@Component(AiControl.meta({
    templateUrl:'package:src/components/AiRadio/AiRadio.html',
    selector: 'ai-radio',
    inputs:['id', 'name', 'value', 'checked'],
    host:{ 
        '[class.checked]': 'value',
    },
}))     
export class AiRadio extends AiControl implements OnInit{ 
    /** Whether this radio is checked. */
    checked: boolean=false;
    
    /** The unique ID for the radio button. */
    id: string;
    
    /** Analog to HTML 'name' attribute used to group radios for unique selection. */
    name: string;
    
    /** Value assigned to this radio. Used to assign the value to the parent RadioGroup. */
    value: any=null;
    
    /** The parent radio group. May or may not be present. */
    radioGroup: AiRadioGroup;
    

    constructor(ele: ElementRef,
            @Attribute('id') id: string,
            @Optional() @SkipSelf() @Host() radioGroup: AiRadioGroup,
            private radioDispatcher: AiRadioDispatcher){
        super(ele);
        this.radioGroup = radioGroup;
        this.id = isPresent(id) ? id : `ai-radio-${_uniqueIdCounter++}`;
    
        // Whenever a radio button with the same name is checked, uncheck this radio button.
        radioDispatcher.listen((name) => {
            if (name == this.name) {
                this.checked = false;
            }
        });
    
        // When this radio-button is inside of a radio-group, the group determines the name.
        this.name = radioGroup.getName();
        this.radioGroup.register(this);
    }
    
    /** Change handler invoked when bindings are resolved or when bindings have changed. */
    ngOnInit() {
        this.name = this.radioGroup.getName();
    }

    get icon(): string {
        if(this.checked) return 'radio_button_checked'
        return 'radio_button_unchecked';
    }

    onClick(){
        this.select();
    }
  
    /** Select this radio button. */
    select() {
        if(!this.disabled){
            this.radioDispatcher.notify(this.name);
            this.checked = true;
            if (isPresent(this.radioGroup)) {
                this.radioGroup.updateValue(this.value, this.id);
            }            
        }
    }    

} 
  
   
 
  