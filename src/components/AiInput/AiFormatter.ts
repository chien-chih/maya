class AiFormatterPatternInfo{
    inputs=[];
    chars=[];
    mLength:number;
}

class AiFormatterPatternParser{
    static DELIM_SIZE:number = 4;
    static regexp:RegExp  = new RegExp('{{([^}]+)}}', 'g'); 
    
    getMatches(pattern){
          // Populate array of matches
          var matches = [],match;
          while(match = AiFormatterPatternParser.regexp.exec(pattern)) {
            matches.push(match);
          }
          return matches;
    }
    
    parse(pattern):AiFormatterPatternInfo{
        var info:AiFormatterPatternInfo=new AiFormatterPatternInfo();
        var matches = this.getMatches(pattern), pLength = pattern.length;
        var mCount = 0,iCount = 0,i = 0;

        var processMatch = function (val) {
          var valLength = val.length;
          for (var j = 0; j < valLength; j++) {
            info.inputs[iCount] = val.charAt(j);
            iCount++;
          }
          mCount ++;
          i += (val.length + AiFormatterPatternParser.DELIM_SIZE - 1);
        };
        
        for (i; i < pLength; i++) {
          if (mCount < matches.length && i === matches[mCount].index) {
            processMatch(matches[mCount][1]);
          } else {
            info.chars[i - (mCount * AiFormatterPatternParser.DELIM_SIZE)] = pattern.charAt(i);
          }
        }
        
        info.mLength = i - (mCount * AiFormatterPatternParser.DELIM_SIZE);
        return info;    
    }
}

class AiFormatterSelection{
    begin:number;
    end:number;
    constructor(begin:number,end:number) {  
      this.begin=begin;
      this.end=end;
    }
}

class AiFormatterInputSelector {
    //
    // Get begin and end positions of selected input. Return 0's
    // if there is no selectiion data
    //
    get(el):AiFormatterSelection {

      // If normal browser return with result
      if (typeof el.selectionStart === 'number') {
          return new AiFormatterSelection(el.selectionStart,el.selectionEnd);
      }
    
      try{
        // Uh-Oh. We must be IE. Fun with TextRange!!
        const doc = document as any;
        var range = doc.selection.createRange();
        // Determine if there is a selection
        if (range && range.parentElement() === el) {
          var inputRange = el.createTextRange(),
              endRange   = el.createTextRange(),
              length     = el.value.length;
      
          // Create a working TextRange for the input selection
          inputRange.moveToBookmark(range.getBookmark());
      
          // Move endRange begin pos to end pos (hence endRange)
          endRange.collapse(false);
          
          // If we are at the very end of the input, begin and end
          // must both be the length of the el.value
          if (inputRange.compareEndPoints('StartToEnd', endRange) > -1) {
            return { begin: length, end: length };
          }
      
          // Note: moveStart usually returns the units moved, which 
          // one may think is -length, however, it will stop when it
          // gets to the begin of the range, thus giving us the
          // negative value of the pos.
          return new AiFormatterSelection(
            -inputRange.moveStart('character', -length),
            -inputRange.moveEnd('character', -length))
        }
        
      }catch(e){}
    
      //Return 0's on no selection data
      return new AiFormatterSelection(0,0);
    };  
    
    
    //
    // Set the caret position at a specified location
    //
    set(el, pos) {
      // Normalize pos
      if (typeof pos !== 'object') {
        pos = { begin: pos, end: pos };
      }
    
      // If normal browser
      if (el.setSelectionRange) {
        el.focus();
        el.setSelectionRange(pos.begin, pos.end);
    
      // IE = TextRange fun
      } else if (el.createTextRange) {
        var range = el.createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos.end);
        range.moveStart('character', pos.begin);
        range.select();
      }
    };
    
    
}

class AiFormatterUtils {
    //
    // Add a given character to a string at a defined pos
    //
    addChars(str, chars, pos) {
      return str.substr(0, pos) + chars + str.substr(pos, str.length);
    }; 
    
    //
    // Remove a span of characters
    //
    removeChars(str, start, end) {
      return str.substr(0, start) + str.substr(end, str.length);
    };
    
    //
    // Return true/false is num false between bounds
    //
    isBetween(num, bounds) {
      bounds.sort(function(a,b) { return a-b; });
      return (num > bounds[0] && num < bounds[1]);
    };
    
    //
    // Helper method for cross browser event listeners
    //
    addListener(el, evt, handler) {
      return (typeof el.addEventListener !== 'undefined')
        ? el.addEventListener(evt, handler, false)
        : el.attachEvent('on' + evt, handler);
    };
    
    //
    // Helper method for cross browser implementation of preventDefault
    //
    preventDefault(evt) {
      return (evt.preventDefault) ? evt.preventDefault() : (evt.returnValue = false);
    };
    
    //
    // Helper method for cross browser implementation for grabbing
    // clipboard data
    //
    getClip(evt) {
      var event:any=evt;
      var win:any=window;
      if (event.clipboardData) { return event.clipboardData.getData('Text'); }
      if (win.clipboardData) { return win.clipboardData.getData('Text'); }
    };
    
    //
    // Loop over object and checking for matching properties
    //
    getMatchingKey(which, keyCode, keys) {
      // Loop over and return if matched.
      for (var k in keys) {
        var key = keys[k];
        if (which === key.which && keyCode === key.keyCode) {
          return k;
        }
      }
    };
    
    //
    // Returns true/false if k is a del keyDown
    //
    isDelKeyDown(which, keyCode) {
      var keys = {
        'backspace': { 'which': 8, 'keyCode': 8 },
        'delete': { 'which': 46, 'keyCode': 46 }
      };
    
      return this.getMatchingKey(which, keyCode, keys);
    };
    
    //
    // Returns true/false if k is a del keyPress
    //
    isDelKeyPress(which, keyCode) {
      var keys = {
        'backspace': { 'which': 8, 'keyCode': 8, 'shiftKey': false },
        'delete': { 'which': 0, 'keyCode': 46 }
      };
    
      return this.getMatchingKey(which, keyCode, keys);
    };

    //
    // Determine if keypress relates to specialKey
    //
    isSpecialKeyPress(which, keyCode) {
      var keys = {
        'tab': { 'which': 0, 'keyCode': 9 },
        'enter': { 'which': 13, 'keyCode': 13 },
        'end': { 'which': 0, 'keyCode': 35 },
        'home': { 'which': 0, 'keyCode': 36 },
        'leftarrow': { 'which': 0, 'keyCode': 37 },
        'uparrow': { 'which': 0, 'keyCode': 38 },
        'rightarrow': { 'which': 0, 'keyCode': 39 },
        'downarrow': { 'which': 0, 'keyCode': 40 },
        'F5': { 'which': 116, 'keyCode': 116 }
      };
    
      return this.getMatchingKey(which, keyCode, keys);
    };
    
    //
    // Returns true/false if modifier key is held down
    //
    isModifier(evt) {
      return evt.ctrlKey || evt.altKey || evt.metaKey;
    };
    
}



export class AiFormatter {
  
    private inptRegs:any = {'9': /[0-9]/,'a': /[A-Za-z]/,'*': /[A-Za-z0-9]/};
    private utils:AiFormatterUtils=new AiFormatterUtils();
    private inputSelector : AiFormatterInputSelector = new AiFormatterInputSelector();
    private selection:AiFormatterSelection;
    private pattern:AiFormatterPatternInfo;
    private placeholder:string=' ';
    private newPos:any;
    private focusStart:any;
    private focus:number = 0;
    private delta:any;
    private hldrs:any = {};

    value:string='';
  

    constructor(private inputElement: any,format :string,value:string) {
        inputElement.value=value;
        format=format.replace(/{/g, '{{').replace(/}/g, '}}');
        var patternParser:AiFormatterPatternParser = new AiFormatterPatternParser(); 
        this.pattern = patternParser.parse(format);
        // Add Listeners
        var self=this;
        this.utils.addListener(inputElement, 'keydown', function(evt){
            var k = evt.which || evt.keyCode;
          
            // If delete key
            if (k && self.utils.isDelKeyDown(evt.which, evt.keyCode)) {
              // Process the keyCode and prevent default
              self.processKey(null, k);
              return self.utils.preventDefault(evt);
            }
        });

        this.utils.addListener(inputElement, 'keypress', function(evt){
            
            // The first thing we need is the character code
            var k, isSpecial;
            // Mozilla will trigger on special keys and assign the the value 0
            // We want to use that 0 rather than the keyCode it assigns.
            k = evt.which || evt.keyCode;
            isSpecial = self.utils.isSpecialKeyPress(evt.which, evt.keyCode);
          
            // Process the keyCode and prevent default
            if (!self.utils.isDelKeyPress(evt.which, evt.keyCode) && !isSpecial && !self.utils.isModifier(evt)) {
              self.processKey(String.fromCharCode(k), false);
              return self.utils.preventDefault(evt);
            }
        });
        
        this.utils.addListener(inputElement, 'paste', function(evt){
            self.processKey(self.utils.getClip(evt), false);
            return self.utils.preventDefault(evt);
          
        });
        
        // Format on start
        this.processKey('', false);
        //inputElement.blur();

        var onfocus=function() {
          // Wrapped in timeout so that we can grab input selection
          setTimeout(function () {
            // Grab selection
            var selection = self.inputSelector.get(self.inputElement);
            // Char check
            var isAfterStart = selection.end > self.focus,
                isFirstChar  = selection.end === 0;
            // If clicked in front of start, refocus to start
            if (isAfterStart || isFirstChar) {
              self.inputSelector.set(self.inputElement, self.focus);
            }
          }, 0);
        };

        // Add Listeners
        this.utils.addListener(inputElement, 'focus', onfocus);
        this.utils.addListener(inputElement, 'click', onfocus);
        this.utils.addListener(inputElement, 'touchstart', onfocus);
    }
    
    //
    // @private
    // Using the provided key information, alter el value.
    //
    processKey(chars, delKey, ignoreCaret=false) {
      // Get current state
      
      this.selection = this.inputSelector.get(this.inputElement);
      this.value = this.inputElement.value;
    
      // Init values
      this.delta = 0;
    
      // If chars were highlighted, we need to remove them
      if (this.selection.begin !== this.selection.end) {
        this.delta = (-1) * Math.abs(this.selection.begin - this.selection.end);
        this.value   = this.utils.removeChars(this.value, this.selection.begin, this.selection.end);
      }
    
      // Delete key (moves opposite direction)
      else if (delKey && delKey === 46) {
        this.delete();
    
      // or Backspace and not at start
      } else if (delKey && this.selection.begin - 1 >= 0) {
    
        // Always have a delta of at least -1 for the character being deleted.
        this.value = this.utils.removeChars(this.value, this.selection.end -1, this.selection.end);
        this.delta -= 1;
    
      // or Backspace and at start - exit
      } else if (delKey) {
        return true;
      }
    
      // If the key is not a del key, it should convert to a str
      if (!delKey) {
        // Add char at position and increment delta
        this.value = this.utils.addChars(this.value, chars, this.selection.begin);
        this.delta += chars.length;
      }
    
      // Format el.value (also handles updating caret position)
      this.formatValue(ignoreCaret);
    }; 
    
    //
    // @private
    // Deletes the character in front of it
    //
    delete () {
      // Adjust focus to make sure its not on a formatted char
      while (this.pattern.chars[this.selection.begin]) {
        this.nextPos();
      }
    
      // As long as we are not at the end
      if (this.selection.begin < this.value.length) {
        // We will simulate a delete by moving the caret to the next char
        // and then deleting
        this.nextPos();
        this.value = this.utils.removeChars(this.value, this.selection.end -1, this.selection.end);
        this.delta = -1;
      }
    };
    
    //
    // @private
    // Quick helper method to move the caret to the next pos
    //
    nextPos() {
      this.selection.end ++;
      this.selection.begin ++;
    };
    
    //
    // @private
    // Alter element value to display characters matching the provided
    // instance pattern. Also responsible for updating
    //
    formatValue(ignoreCaret) {
      // Set caret pos
      this.newPos = this.selection.end + this.delta;
    
      // Remove all formatted chars from val
      this.removeChars();
    
      // Validate inputs
      this.validateInpts();
    
      // Add formatted characters
      this.addChars();
    
      // Set value and adhere to maxLength
      this.inputElement.value = this.value.substr(0, this.pattern.mLength);
    
      // Set new caret position
      if ((typeof ignoreCaret) === 'undefined' || ignoreCaret === false) {
        this.inputSelector.set(this.inputElement, this.newPos);
      }
    };
    
    //
    // @private
    // Remove all formatted before and after a specified pos
    //
    removeChars() {
      // Delta shouldn't include placeholders
      if (this.selection.end > this.focus) {
        this.delta += this.selection.end - this.focus;
      }
      
      // Account for shifts during removal
      var shift = 0;
    
      // Loop through all possible char positions
      for (var i = 0; i <= this.pattern.mLength; i++) {
        // Get transformed position
        var curChar = this.pattern.chars[i],
            curHldr = this.hldrs[i],
            pos = i + shift,
            val;
    
        // If after selection we need to account for delta
        pos = (i >= this.selection.begin) ? pos + this.delta : pos;
        val = this.value.charAt(pos);
        // Remove char and account for shift
        if (curChar && curChar === val || curHldr && curHldr === val) {
          this.value = this.utils.removeChars(this.value, pos, pos + 1);
          shift--;
        }
      }
    
      // All hldrs should be removed now
      this.hldrs = {};
    
      // Set focus to last character
      this.focus = this.value.length;
    };
    
    //
    // @private
    // Make sure all inpts are valid, else remove and update delta
    //
    validateInpts() {
      // Loop over each char and validate
      for (var i = 0; i < this.value.length; i++) {
        // Get char inpt type
        var inptType = this.pattern.inputs[i];
    
        // Checks
        var isBadType = !this.inptRegs[inptType],
            isInvalid = !isBadType && !this.inptRegs[inptType].test(this.value.charAt(i)),
            inBounds  = this.pattern.inputs[i];
    
        // Remove if incorrect and inbounds
        if ((isBadType || isInvalid) && inBounds) {
          this.value = this.utils.removeChars(this.value, i, i + 1);
          this.focusStart--;
          this.newPos--;
          this.delta--;
          i--;
        }
      }
    };
    
    //
    // @private
    // Loop over val and add formatted chars as necessary
    //
    addChars() {
        // Loop over all possible characters
        for (var i = 0; i <= this.pattern.mLength; i++) {
          if (!this.value.charAt(i)) {
            // Add placeholder at pos
            this.value = this.utils.addChars(this.value, this.placeholder, i);
            this.hldrs[i] = this.placeholder;
          }
          this.addChar(i);
        }
    
        // Adjust focus to make sure its not on a formatted char
        while (this.pattern.chars[this.focus]) {
          this.focus++;
        }
    };
    
    //
    // @private
    // Add formattted char at position
    //
    addChar(i) {
      // If char exists at position
      var chr = this.pattern.chars[i];
      if (!chr) { return true; }
    
      // If chars are added in between the old pos and new pos
      // we need to increment pos and delta
      if (this.utils.isBetween(i, [this.selection.begin -1, this.newPos +1])) {
        this.newPos ++;
        this.delta ++;
      }
    
      // If character added before focus, incr
      if (i <= this.focus) {
        this.focus++;
      }
    
      // Updateholder
      if (this.hldrs[i]) {
        delete this.hldrs[i];
        this.hldrs[i + 1] = this.placeholder;
      }
    
      // Update value
      this.value = this.utils.addChars(this.value, chr, i);
    };
    
}