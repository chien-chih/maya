System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var AiFormatterPatternInfo, AiFormatterPatternParser, AiFormatterSelection, AiFormatterInputSelector, AiFormatterUtils, AiFormatter;
    return {
        setters:[],
        execute: function() {
            AiFormatterPatternInfo = (function () {
                function AiFormatterPatternInfo() {
                    this.inputs = [];
                    this.chars = [];
                }
                return AiFormatterPatternInfo;
            }());
            AiFormatterPatternParser = (function () {
                function AiFormatterPatternParser() {
                }
                AiFormatterPatternParser.prototype.getMatches = function (pattern) {
                    // Populate array of matches
                    var matches = [], match;
                    while (match = AiFormatterPatternParser.regexp.exec(pattern)) {
                        matches.push(match);
                    }
                    return matches;
                };
                AiFormatterPatternParser.prototype.parse = function (pattern) {
                    var info = new AiFormatterPatternInfo();
                    var matches = this.getMatches(pattern), pLength = pattern.length;
                    var mCount = 0, iCount = 0, i = 0;
                    var processMatch = function (val) {
                        var valLength = val.length;
                        for (var j = 0; j < valLength; j++) {
                            info.inputs[iCount] = val.charAt(j);
                            iCount++;
                        }
                        mCount++;
                        i += (val.length + AiFormatterPatternParser.DELIM_SIZE - 1);
                    };
                    for (i; i < pLength; i++) {
                        if (mCount < matches.length && i === matches[mCount].index) {
                            processMatch(matches[mCount][1]);
                        }
                        else {
                            info.chars[i - (mCount * AiFormatterPatternParser.DELIM_SIZE)] = pattern.charAt(i);
                        }
                    }
                    info.mLength = i - (mCount * AiFormatterPatternParser.DELIM_SIZE);
                    return info;
                };
                AiFormatterPatternParser.DELIM_SIZE = 4;
                AiFormatterPatternParser.regexp = new RegExp('{{([^}]+)}}', 'g');
                return AiFormatterPatternParser;
            }());
            AiFormatterSelection = (function () {
                function AiFormatterSelection(begin, end) {
                    this.begin = begin;
                    this.end = end;
                }
                return AiFormatterSelection;
            }());
            AiFormatterInputSelector = (function () {
                function AiFormatterInputSelector() {
                }
                //
                // Get begin and end positions of selected input. Return 0's
                // if there is no selectiion data
                //
                AiFormatterInputSelector.prototype.get = function (el) {
                    // If normal browser return with result
                    if (typeof el.selectionStart === 'number') {
                        return new AiFormatterSelection(el.selectionStart, el.selectionEnd);
                    }
                    try {
                        // Uh-Oh. We must be IE. Fun with TextRange!!
                        var doc = document;
                        var range = doc.selection.createRange();
                        // Determine if there is a selection
                        if (range && range.parentElement() === el) {
                            var inputRange = el.createTextRange(), endRange = el.createTextRange(), length = el.value.length;
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
                            return new AiFormatterSelection(-inputRange.moveStart('character', -length), -inputRange.moveEnd('character', -length));
                        }
                    }
                    catch (e) { }
                    //Return 0's on no selection data
                    return new AiFormatterSelection(0, 0);
                };
                ;
                //
                // Set the caret position at a specified location
                //
                AiFormatterInputSelector.prototype.set = function (el, pos) {
                    // Normalize pos
                    if (typeof pos !== 'object') {
                        pos = { begin: pos, end: pos };
                    }
                    // If normal browser
                    if (el.setSelectionRange) {
                        el.focus();
                        el.setSelectionRange(pos.begin, pos.end);
                    }
                    else if (el.createTextRange) {
                        var range = el.createTextRange();
                        range.collapse(true);
                        range.moveEnd('character', pos.end);
                        range.moveStart('character', pos.begin);
                        range.select();
                    }
                };
                ;
                return AiFormatterInputSelector;
            }());
            AiFormatterUtils = (function () {
                function AiFormatterUtils() {
                }
                //
                // Add a given character to a string at a defined pos
                //
                AiFormatterUtils.prototype.addChars = function (str, chars, pos) {
                    return str.substr(0, pos) + chars + str.substr(pos, str.length);
                };
                ;
                //
                // Remove a span of characters
                //
                AiFormatterUtils.prototype.removeChars = function (str, start, end) {
                    return str.substr(0, start) + str.substr(end, str.length);
                };
                ;
                //
                // Return true/false is num false between bounds
                //
                AiFormatterUtils.prototype.isBetween = function (num, bounds) {
                    bounds.sort(function (a, b) { return a - b; });
                    return (num > bounds[0] && num < bounds[1]);
                };
                ;
                //
                // Helper method for cross browser event listeners
                //
                AiFormatterUtils.prototype.addListener = function (el, evt, handler) {
                    return (typeof el.addEventListener !== 'undefined')
                        ? el.addEventListener(evt, handler, false)
                        : el.attachEvent('on' + evt, handler);
                };
                ;
                //
                // Helper method for cross browser implementation of preventDefault
                //
                AiFormatterUtils.prototype.preventDefault = function (evt) {
                    return (evt.preventDefault) ? evt.preventDefault() : (evt.returnValue = false);
                };
                ;
                //
                // Helper method for cross browser implementation for grabbing
                // clipboard data
                //
                AiFormatterUtils.prototype.getClip = function (evt) {
                    var event = evt;
                    var win = window;
                    if (event.clipboardData) {
                        return event.clipboardData.getData('Text');
                    }
                    if (win.clipboardData) {
                        return win.clipboardData.getData('Text');
                    }
                };
                ;
                //
                // Loop over object and checking for matching properties
                //
                AiFormatterUtils.prototype.getMatchingKey = function (which, keyCode, keys) {
                    // Loop over and return if matched.
                    for (var k in keys) {
                        var key = keys[k];
                        if (which === key.which && keyCode === key.keyCode) {
                            return k;
                        }
                    }
                };
                ;
                //
                // Returns true/false if k is a del keyDown
                //
                AiFormatterUtils.prototype.isDelKeyDown = function (which, keyCode) {
                    var keys = {
                        'backspace': { 'which': 8, 'keyCode': 8 },
                        'delete': { 'which': 46, 'keyCode': 46 }
                    };
                    return this.getMatchingKey(which, keyCode, keys);
                };
                ;
                //
                // Returns true/false if k is a del keyPress
                //
                AiFormatterUtils.prototype.isDelKeyPress = function (which, keyCode) {
                    var keys = {
                        'backspace': { 'which': 8, 'keyCode': 8, 'shiftKey': false },
                        'delete': { 'which': 0, 'keyCode': 46 }
                    };
                    return this.getMatchingKey(which, keyCode, keys);
                };
                ;
                //
                // Determine if keypress relates to specialKey
                //
                AiFormatterUtils.prototype.isSpecialKeyPress = function (which, keyCode) {
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
                ;
                //
                // Returns true/false if modifier key is held down
                //
                AiFormatterUtils.prototype.isModifier = function (evt) {
                    return evt.ctrlKey || evt.altKey || evt.metaKey;
                };
                ;
                return AiFormatterUtils;
            }());
            AiFormatter = (function () {
                function AiFormatter(inputElement, format) {
                    this.inputElement = inputElement;
                    this.inptRegs = { '9': /[0-9]/, 'a': /[A-Za-z]/, '*': /[A-Za-z0-9]/ };
                    this.utils = new AiFormatterUtils();
                    this.inputSelector = new AiFormatterInputSelector();
                    this.placeholder = ' ';
                    this.focus = 0;
                    this.hldrs = {};
                    this.numberInput = false;
                    this.value = '';
                    format = format.replace(/{/g, '{{').replace(/}/g, '}}');
                    var patternParser = new AiFormatterPatternParser();
                    this.pattern = patternParser.parse(format);
                    this.numberInput = true;
                    for (var i = 0; i < this.pattern.inputs.length; i++) {
                        if (this.pattern.inputs[i] !== '9') {
                            this.numberInput = false;
                            break;
                        }
                    }
                    // Add Listeners
                    var self = this;
                    this.utils.addListener(inputElement, 'keydown', function (evt) {
                        var k = evt.which || evt.keyCode;
                        // If delete key
                        if (k && self.utils.isDelKeyDown(evt.which, evt.keyCode)) {
                            // Process the keyCode and prevent default
                            self.processKey(null, k);
                            return self.utils.preventDefault(evt);
                        }
                    });
                    this.utils.addListener(inputElement, 'keypress', function (evt) {
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
                    this.utils.addListener(inputElement, 'paste', function (evt) {
                        self.processKey(self.utils.getClip(evt), false);
                        return self.utils.preventDefault(evt);
                    });
                    // Format on start
                    this.processKey('', false);
                    inputElement.blur();
                    var onfocus = function () {
                        // Wrapped in timeout so that we can grab input selection
                        setTimeout(function () {
                            // Grab selection
                            var selection = self.inputSelector.get(self.inputElement);
                            // Char check
                            var isAfterStart = selection.end > self.focus, isFirstChar = selection.end === 0;
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
                AiFormatter.prototype.setValue = function (value) {
                    this.inputElement.value = value;
                    this.processKey('', false);
                };
                //
                // @private
                // Using the provided key information, alter el value.
                //
                AiFormatter.prototype.processKey = function (chars, delKey, ignoreCaret) {
                    // Get current state
                    if (ignoreCaret === void 0) { ignoreCaret = false; }
                    this.selection = this.inputSelector.get(this.inputElement);
                    this.value = this.inputElement.value;
                    // Init values
                    this.delta = 0;
                    // If chars were highlighted, we need to remove them
                    if (this.selection.begin !== this.selection.end) {
                        this.delta = (-1) * Math.abs(this.selection.begin - this.selection.end);
                        this.value = this.utils.removeChars(this.value, this.selection.begin, this.selection.end);
                    }
                    else if (delKey && delKey === 46) {
                        this.delete();
                    }
                    else if (delKey && this.selection.begin - 1 >= 0) {
                        // Always have a delta of at least -1 for the character being deleted.
                        this.value = this.utils.removeChars(this.value, this.selection.end - 1, this.selection.end);
                        this.delta -= 1;
                    }
                    else if (delKey) {
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
                    if (this.onValueChange)
                        this.onValueChange(this.inputElement.value);
                };
                ;
                //
                // @private
                // Deletes the character in front of it
                //
                AiFormatter.prototype.delete = function () {
                    // Adjust focus to make sure its not on a formatted char
                    while (this.pattern.chars[this.selection.begin]) {
                        this.nextPos();
                    }
                    // As long as we are not at the end
                    if (this.selection.begin < this.value.length) {
                        // We will simulate a delete by moving the caret to the next char
                        // and then deleting
                        this.nextPos();
                        this.value = this.utils.removeChars(this.value, this.selection.end - 1, this.selection.end);
                        this.delta = -1;
                    }
                };
                ;
                //
                // @private
                // Quick helper method to move the caret to the next pos
                //
                AiFormatter.prototype.nextPos = function () {
                    this.selection.end++;
                    this.selection.begin++;
                };
                ;
                //
                // @private
                // Alter element value to display characters matching the provided
                // instance pattern. Also responsible for updating
                //
                AiFormatter.prototype.formatValue = function (ignoreCaret) {
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
                ;
                //
                // @private
                // Remove all formatted before and after a specified pos
                //
                AiFormatter.prototype.removeChars = function () {
                    // Delta shouldn't include placeholders
                    if (this.selection.end > this.focus) {
                        this.delta += this.selection.end - this.focus;
                    }
                    // Account for shifts during removal
                    var shift = 0;
                    // Loop through all possible char positions
                    for (var i = 0; i <= this.pattern.mLength; i++) {
                        // Get transformed position
                        var curChar = this.pattern.chars[i], curHldr = this.hldrs[i], pos = i + shift, val;
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
                ;
                //
                // @private
                // Make sure all inpts are valid, else remove and update delta
                //
                AiFormatter.prototype.validateInpts = function () {
                    // Loop over each char and validate
                    for (var i = 0; i < this.value.length; i++) {
                        // Get char inpt type
                        var inptType = this.pattern.inputs[i];
                        // Checks
                        var isBadType = !this.inptRegs[inptType], isInvalid = !isBadType && !this.inptRegs[inptType].test(this.value.charAt(i)), inBounds = this.pattern.inputs[i];
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
                ;
                //
                // @private
                // Loop over val and add formatted chars as necessary
                //
                AiFormatter.prototype.addChars = function () {
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
                ;
                //
                // @private
                // Add formattted char at position
                //
                AiFormatter.prototype.addChar = function (i) {
                    // If char exists at position
                    var chr = this.pattern.chars[i];
                    if (!chr) {
                        return true;
                    }
                    // If chars are added in between the old pos and new pos
                    // we need to increment pos and delta
                    if (this.utils.isBetween(i, [this.selection.begin - 1, this.newPos + 1])) {
                        this.newPos++;
                        this.delta++;
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
                ;
                return AiFormatter;
            }());
            exports_1("AiFormatter", AiFormatter);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlJbnB1dC9BaUZvcm1hdHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O1lBQUE7Z0JBQUE7b0JBQ0ksV0FBTSxHQUFDLEVBQUUsQ0FBQztvQkFDVixVQUFLLEdBQUMsRUFBRSxDQUFDO2dCQUViLENBQUM7Z0JBQUQsNkJBQUM7WUFBRCxDQUpBLEFBSUMsSUFBQTtZQUVEO2dCQUFBO2dCQXVDQSxDQUFDO2dCQW5DRyw2Q0FBVSxHQUFWLFVBQVcsT0FBTztvQkFDWiw0QkFBNEI7b0JBQzVCLElBQUksT0FBTyxHQUFHLEVBQUUsRUFBQyxLQUFLLENBQUM7b0JBQ3ZCLE9BQU0sS0FBSyxHQUFHLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQzt3QkFDNUQsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDdEIsQ0FBQztvQkFDRCxNQUFNLENBQUMsT0FBTyxDQUFDO2dCQUNyQixDQUFDO2dCQUVELHdDQUFLLEdBQUwsVUFBTSxPQUFPO29CQUNULElBQUksSUFBSSxHQUF3QixJQUFJLHNCQUFzQixFQUFFLENBQUM7b0JBQzdELElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEVBQUUsT0FBTyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUM7b0JBQ2pFLElBQUksTUFBTSxHQUFHLENBQUMsRUFBQyxNQUFNLEdBQUcsQ0FBQyxFQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBRWhDLElBQUksWUFBWSxHQUFHLFVBQVUsR0FBRzt3QkFDOUIsSUFBSSxTQUFTLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQzt3QkFDM0IsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQzs0QkFDbkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FB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LENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDbEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNyQixJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO29CQUN2QyxDQUFDO29CQUVELGVBQWU7b0JBQ2YsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDdkQsQ0FBQzs7Z0JBRUwsa0JBQUM7WUFBRCxDQTNUQSxBQTJUQyxJQUFBO1lBM1RELHFDQTJUQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvQWlJbnB1dC9BaUZvcm1hdHRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFpRm9ybWF0dGVyUGF0dGVybkluZm97XG4gICAgaW5wdXRzPVtdO1xuICAgIGNoYXJzPVtdO1xuICAgIG1MZW5ndGg6bnVtYmVyO1xufVxuXG5jbGFzcyBBaUZvcm1hdHRlclBhdHRlcm5QYXJzZXJ7XG4gICAgc3RhdGljIERFTElNX1NJWkU6bnVtYmVyID0gNDtcbiAgICBzdGF0aWMgcmVnZXhwOlJlZ0V4cCAgPSBuZXcgUmVnRXhwKCd7eyhbXn1dKyl9fScsICdnJyk7IFxuICAgIFxuICAgIGdldE1hdGNoZXMocGF0dGVybil7XG4gICAgICAgICAgLy8gUG9wdWxhdGUgYXJyYXkgb2YgbWF0Y2hlc1xuICAgICAgICAgIHZhciBtYXRjaGVzID0gW10sbWF0Y2g7XG4gICAgICAgICAgd2hpbGUobWF0Y2ggPSBBaUZvcm1hdHRlclBhdHRlcm5QYXJzZXIucmVnZXhwLmV4ZWMocGF0dGVybikpIHtcbiAgICAgICAgICAgIG1hdGNoZXMucHVzaChtYXRjaCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBtYXRjaGVzO1xuICAgIH1cbiAgICBcbiAgICBwYXJzZShwYXR0ZXJuKTpBaUZvcm1hdHRlclBhdHRlcm5JbmZve1xuICAgICAgICB2YXIgaW5mbzpBaUZvcm1hdHRlclBhdHRlcm5JbmZvPW5ldyBBaUZvcm1hdHRlclBhdHRlcm5JbmZvKCk7XG4gICAgICAgIHZhciBtYXRjaGVzID0gdGhpcy5nZXRNYXRjaGVzKHBhdHRlcm4pLCBwTGVuZ3RoID0gcGF0dGVybi5sZW5ndGg7XG4gICAgICAgIHZhciBtQ291bnQgPSAwLGlDb3VudCA9IDAsaSA9IDA7XG5cbiAgICAgICAgdmFyIHByb2Nlc3NNYXRjaCA9IGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgICB2YXIgdmFsTGVuZ3RoID0gdmFsLmxlbmd0aDtcbiAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHZhbExlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBpbmZvLmlucHV0c1tpQ291bnRdID0gdmFsLmNoYXJBdChqKTtcbiAgICAgICAgICAgIGlDb3VudCsrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBtQ291bnQgKys7XG4gICAgICAgICAgaSArPSAodmFsLmxlbmd0aCArIEFpRm9ybWF0dGVyUGF0dGVyblBhcnNlci5ERUxJTV9TSVpFIC0gMSk7XG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICBmb3IgKGk7IGkgPCBwTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAobUNvdW50IDwgbWF0Y2hlcy5sZW5ndGggJiYgaSA9PT0gbWF0Y2hlc1ttQ291bnRdLmluZGV4KSB7XG4gICAgICAgICAgICBwcm9jZXNzTWF0Y2gobWF0Y2hlc1ttQ291bnRdWzFdKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaW5mby5jaGFyc1tpIC0gKG1Db3VudCAqIEFpRm9ybWF0dGVyUGF0dGVyblBhcnNlci5ERUxJTV9TSVpFKV0gPSBwYXR0ZXJuLmNoYXJBdChpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGluZm8ubUxlbmd0aCA9IGkgLSAobUNvdW50ICogQWlGb3JtYXR0ZXJQYXR0ZXJuUGFyc2VyLkRFTElNX1NJWkUpO1xuICAgICAgICByZXR1cm4gaW5mbzsgICAgXG4gICAgfVxufVxuXG5jbGFzcyBBaUZvcm1hdHRlclNlbGVjdGlvbntcbiAgICBiZWdpbjpudW1iZXI7XG4gICAgZW5kOm51bWJlcjtcbiAgICBjb25zdHJ1Y3RvcihiZWdpbjpudW1iZXIsZW5kOm51bWJlcikgeyAgXG4gICAgICB0aGlzLmJlZ2luPWJlZ2luO1xuICAgICAgdGhpcy5lbmQ9ZW5kO1xuICAgIH1cbn1cblxuY2xhc3MgQWlGb3JtYXR0ZXJJbnB1dFNlbGVjdG9yIHtcbiAgICAvL1xuICAgIC8vIEdldCBiZWdpbiBhbmQgZW5kIHBvc2l0aW9ucyBvZiBzZWxlY3RlZCBpbnB1dC4gUmV0dXJuIDAnc1xuICAgIC8vIGlmIHRoZXJlIGlzIG5vIHNlbGVjdGlpb24gZGF0YVxuICAgIC8vXG4gICAgZ2V0KGVsKTpBaUZvcm1hdHRlclNlbGVjdGlvbiB7XG5cbiAgICAgIC8vIElmIG5vcm1hbCBicm93c2VyIHJldHVybiB3aXRoIHJlc3VsdFxuICAgICAgaWYgKHR5cGVvZiBlbC5zZWxlY3Rpb25TdGFydCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IEFpRm9ybWF0dGVyU2VsZWN0aW9uKGVsLnNlbGVjdGlvblN0YXJ0LGVsLnNlbGVjdGlvbkVuZCk7XG4gICAgICB9XG4gICAgXG4gICAgICB0cnl7XG4gICAgICAgIC8vIFVoLU9oLiBXZSBtdXN0IGJlIElFLiBGdW4gd2l0aCBUZXh0UmFuZ2UhIVxuICAgICAgICBjb25zdCBkb2MgPSBkb2N1bWVudCBhcyBhbnk7XG4gICAgICAgIHZhciByYW5nZSA9IGRvYy5zZWxlY3Rpb24uY3JlYXRlUmFuZ2UoKTtcbiAgICAgICAgLy8gRGV0ZXJtaW5lIGlmIHRoZXJlIGlzIGEgc2VsZWN0aW9uXG4gICAgICAgIGlmIChyYW5nZSAmJiByYW5nZS5wYXJlbnRFbGVtZW50KCkgPT09IGVsKSB7XG4gICAgICAgICAgdmFyIGlucHV0UmFuZ2UgPSBlbC5jcmVhdGVUZXh0UmFuZ2UoKSxcbiAgICAgICAgICAgICAgZW5kUmFuZ2UgICA9IGVsLmNyZWF0ZVRleHRSYW5nZSgpLFxuICAgICAgICAgICAgICBsZW5ndGggICAgID0gZWwudmFsdWUubGVuZ3RoO1xuICAgICAgXG4gICAgICAgICAgLy8gQ3JlYXRlIGEgd29ya2luZyBUZXh0UmFuZ2UgZm9yIHRoZSBpbnB1dCBzZWxlY3Rpb25cbiAgICAgICAgICBpbnB1dFJhbmdlLm1vdmVUb0Jvb2ttYXJrKHJhbmdlLmdldEJvb2ttYXJrKCkpO1xuICAgICAgXG4gICAgICAgICAgLy8gTW92ZSBlbmRSYW5nZSBiZWdpbiBwb3MgdG8gZW5kIHBvcyAoaGVuY2UgZW5kUmFuZ2UpXG4gICAgICAgICAgZW5kUmFuZ2UuY29sbGFwc2UoZmFsc2UpO1xuICAgICAgICAgIFxuICAgICAgICAgIC8vIElmIHdlIGFyZSBhdCB0aGUgdmVyeSBlbmQgb2YgdGhlIGlucHV0LCBiZWdpbiBhbmQgZW5kXG4gICAgICAgICAgLy8gbXVzdCBib3RoIGJlIHRoZSBsZW5ndGggb2YgdGhlIGVsLnZhbHVlXG4gICAgICAgICAgaWYgKGlucHV0UmFuZ2UuY29tcGFyZUVuZFBvaW50cygnU3RhcnRUb0VuZCcsIGVuZFJhbmdlKSA+IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4geyBiZWdpbjogbGVuZ3RoLCBlbmQ6IGxlbmd0aCB9O1xuICAgICAgICAgIH1cbiAgICAgIFxuICAgICAgICAgIC8vIE5vdGU6IG1vdmVTdGFydCB1c3VhbGx5IHJldHVybnMgdGhlIHVuaXRzIG1vdmVkLCB3aGljaCBcbiAgICAgICAgICAvLyBvbmUgbWF5IHRoaW5rIGlzIC1sZW5ndGgsIGhvd2V2ZXIsIGl0IHdpbGwgc3RvcCB3aGVuIGl0XG4gICAgICAgICAgLy8gZ2V0cyB0byB0aGUgYmVnaW4gb2YgdGhlIHJhbmdlLCB0aHVzIGdpdmluZyB1cyB0aGVcbiAgICAgICAgICAvLyBuZWdhdGl2ZSB2YWx1ZSBvZiB0aGUgcG9zLlxuICAgICAgICAgIHJldHVybiBuZXcgQWlGb3JtYXR0ZXJTZWxlY3Rpb24oXG4gICAgICAgICAgICAtaW5wdXRSYW5nZS5tb3ZlU3RhcnQoJ2NoYXJhY3RlcicsIC1sZW5ndGgpLFxuICAgICAgICAgICAgLWlucHV0UmFuZ2UubW92ZUVuZCgnY2hhcmFjdGVyJywgLWxlbmd0aCkpXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICB9Y2F0Y2goZSl7fVxuICAgIFxuICAgICAgLy9SZXR1cm4gMCdzIG9uIG5vIHNlbGVjdGlvbiBkYXRhXG4gICAgICByZXR1cm4gbmV3IEFpRm9ybWF0dGVyU2VsZWN0aW9uKDAsMCk7XG4gICAgfTsgIFxuICAgIFxuICAgIFxuICAgIC8vXG4gICAgLy8gU2V0IHRoZSBjYXJldCBwb3NpdGlvbiBhdCBhIHNwZWNpZmllZCBsb2NhdGlvblxuICAgIC8vXG4gICAgc2V0KGVsLCBwb3MpIHtcbiAgICAgIC8vIE5vcm1hbGl6ZSBwb3NcbiAgICAgIGlmICh0eXBlb2YgcG9zICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBwb3MgPSB7IGJlZ2luOiBwb3MsIGVuZDogcG9zIH07XG4gICAgICB9XG4gICAgXG4gICAgICAvLyBJZiBub3JtYWwgYnJvd3NlclxuICAgICAgaWYgKGVsLnNldFNlbGVjdGlvblJhbmdlKSB7XG4gICAgICAgIGVsLmZvY3VzKCk7XG4gICAgICAgIGVsLnNldFNlbGVjdGlvblJhbmdlKHBvcy5iZWdpbiwgcG9zLmVuZCk7XG4gICAgXG4gICAgICAvLyBJRSA9IFRleHRSYW5nZSBmdW5cbiAgICAgIH0gZWxzZSBpZiAoZWwuY3JlYXRlVGV4dFJhbmdlKSB7XG4gICAgICAgIHZhciByYW5nZSA9IGVsLmNyZWF0ZVRleHRSYW5nZSgpO1xuICAgICAgICByYW5nZS5jb2xsYXBzZSh0cnVlKTtcbiAgICAgICAgcmFuZ2UubW92ZUVuZCgnY2hhcmFjdGVyJywgcG9zLmVuZCk7XG4gICAgICAgIHJhbmdlLm1vdmVTdGFydCgnY2hhcmFjdGVyJywgcG9zLmJlZ2luKTtcbiAgICAgICAgcmFuZ2Uuc2VsZWN0KCk7XG4gICAgICB9XG4gICAgfTtcbiAgICBcbiAgICBcbn1cblxuY2xhc3MgQWlGb3JtYXR0ZXJVdGlscyB7XG4gICAgLy9cbiAgICAvLyBBZGQgYSBnaXZlbiBjaGFyYWN0ZXIgdG8gYSBzdHJpbmcgYXQgYSBkZWZpbmVkIHBvc1xuICAgIC8vXG4gICAgYWRkQ2hhcnMoc3RyLCBjaGFycywgcG9zKSB7XG4gICAgICByZXR1cm4gc3RyLnN1YnN0cigwLCBwb3MpICsgY2hhcnMgKyBzdHIuc3Vic3RyKHBvcywgc3RyLmxlbmd0aCk7XG4gICAgfTsgXG4gICAgXG4gICAgLy9cbiAgICAvLyBSZW1vdmUgYSBzcGFuIG9mIGNoYXJhY3RlcnNcbiAgICAvL1xuICAgIHJlbW92ZUNoYXJzKHN0ciwgc3RhcnQsIGVuZCkge1xuICAgICAgcmV0dXJuIHN0ci5zdWJzdHIoMCwgc3RhcnQpICsgc3RyLnN1YnN0cihlbmQsIHN0ci5sZW5ndGgpO1xuICAgIH07XG4gICAgXG4gICAgLy9cbiAgICAvLyBSZXR1cm4gdHJ1ZS9mYWxzZSBpcyBudW0gZmFsc2UgYmV0d2VlbiBib3VuZHNcbiAgICAvL1xuICAgIGlzQmV0d2VlbihudW0sIGJvdW5kcykge1xuICAgICAgYm91bmRzLnNvcnQoZnVuY3Rpb24oYSxiKSB7IHJldHVybiBhLWI7IH0pO1xuICAgICAgcmV0dXJuIChudW0gPiBib3VuZHNbMF0gJiYgbnVtIDwgYm91bmRzWzFdKTtcbiAgICB9O1xuICAgIFxuICAgIC8vXG4gICAgLy8gSGVscGVyIG1ldGhvZCBmb3IgY3Jvc3MgYnJvd3NlciBldmVudCBsaXN0ZW5lcnNcbiAgICAvL1xuICAgIGFkZExpc3RlbmVyKGVsLCBldnQsIGhhbmRsZXIpIHtcbiAgICAgIHJldHVybiAodHlwZW9mIGVsLmFkZEV2ZW50TGlzdGVuZXIgIT09ICd1bmRlZmluZWQnKVxuICAgICAgICA/IGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZ0LCBoYW5kbGVyLCBmYWxzZSlcbiAgICAgICAgOiBlbC5hdHRhY2hFdmVudCgnb24nICsgZXZ0LCBoYW5kbGVyKTtcbiAgICB9O1xuICAgIFxuICAgIC8vXG4gICAgLy8gSGVscGVyIG1ldGhvZCBmb3IgY3Jvc3MgYnJvd3NlciBpbXBsZW1lbnRhdGlvbiBvZiBwcmV2ZW50RGVmYXVsdFxuICAgIC8vXG4gICAgcHJldmVudERlZmF1bHQoZXZ0KSB7XG4gICAgICByZXR1cm4gKGV2dC5wcmV2ZW50RGVmYXVsdCkgPyBldnQucHJldmVudERlZmF1bHQoKSA6IChldnQucmV0dXJuVmFsdWUgPSBmYWxzZSk7XG4gICAgfTtcbiAgICBcbiAgICAvL1xuICAgIC8vIEhlbHBlciBtZXRob2QgZm9yIGNyb3NzIGJyb3dzZXIgaW1wbGVtZW50YXRpb24gZm9yIGdyYWJiaW5nXG4gICAgLy8gY2xpcGJvYXJkIGRhdGFcbiAgICAvL1xuICAgIGdldENsaXAoZXZ0KSB7XG4gICAgICB2YXIgZXZlbnQ6YW55PWV2dDtcbiAgICAgIHZhciB3aW46YW55PXdpbmRvdztcbiAgICAgIGlmIChldmVudC5jbGlwYm9hcmREYXRhKSB7IHJldHVybiBldmVudC5jbGlwYm9hcmREYXRhLmdldERhdGEoJ1RleHQnKTsgfVxuICAgICAgaWYgKHdpbi5jbGlwYm9hcmREYXRhKSB7IHJldHVybiB3aW4uY2xpcGJvYXJkRGF0YS5nZXREYXRhKCdUZXh0Jyk7IH1cbiAgICB9O1xuICAgIFxuICAgIC8vXG4gICAgLy8gTG9vcCBvdmVyIG9iamVjdCBhbmQgY2hlY2tpbmcgZm9yIG1hdGNoaW5nIHByb3BlcnRpZXNcbiAgICAvL1xuICAgIGdldE1hdGNoaW5nS2V5KHdoaWNoLCBrZXlDb2RlLCBrZXlzKSB7XG4gICAgICAvLyBMb29wIG92ZXIgYW5kIHJldHVybiBpZiBtYXRjaGVkLlxuICAgICAgZm9yICh2YXIgayBpbiBrZXlzKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzW2tdO1xuICAgICAgICBpZiAod2hpY2ggPT09IGtleS53aGljaCAmJiBrZXlDb2RlID09PSBrZXkua2V5Q29kZSkge1xuICAgICAgICAgIHJldHVybiBrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICBcbiAgICAvL1xuICAgIC8vIFJldHVybnMgdHJ1ZS9mYWxzZSBpZiBrIGlzIGEgZGVsIGtleURvd25cbiAgICAvL1xuICAgIGlzRGVsS2V5RG93bih3aGljaCwga2V5Q29kZSkge1xuICAgICAgdmFyIGtleXMgPSB7XG4gICAgICAgICdiYWNrc3BhY2UnOiB7ICd3aGljaCc6IDgsICdrZXlDb2RlJzogOCB9LFxuICAgICAgICAnZGVsZXRlJzogeyAnd2hpY2gnOiA0NiwgJ2tleUNvZGUnOiA0NiB9XG4gICAgICB9O1xuICAgIFxuICAgICAgcmV0dXJuIHRoaXMuZ2V0TWF0Y2hpbmdLZXkod2hpY2gsIGtleUNvZGUsIGtleXMpO1xuICAgIH07XG4gICAgXG4gICAgLy9cbiAgICAvLyBSZXR1cm5zIHRydWUvZmFsc2UgaWYgayBpcyBhIGRlbCBrZXlQcmVzc1xuICAgIC8vXG4gICAgaXNEZWxLZXlQcmVzcyh3aGljaCwga2V5Q29kZSkge1xuICAgICAgdmFyIGtleXMgPSB7XG4gICAgICAgICdiYWNrc3BhY2UnOiB7ICd3aGljaCc6IDgsICdrZXlDb2RlJzogOCwgJ3NoaWZ0S2V5JzogZmFsc2UgfSxcbiAgICAgICAgJ2RlbGV0ZSc6IHsgJ3doaWNoJzogMCwgJ2tleUNvZGUnOiA0NiB9XG4gICAgICB9O1xuICAgIFxuICAgICAgcmV0dXJuIHRoaXMuZ2V0TWF0Y2hpbmdLZXkod2hpY2gsIGtleUNvZGUsIGtleXMpO1xuICAgIH07XG5cbiAgICAvL1xuICAgIC8vIERldGVybWluZSBpZiBrZXlwcmVzcyByZWxhdGVzIHRvIHNwZWNpYWxLZXlcbiAgICAvL1xuICAgIGlzU3BlY2lhbEtleVByZXNzKHdoaWNoLCBrZXlDb2RlKSB7XG4gICAgICB2YXIga2V5cyA9IHtcbiAgICAgICAgJ3RhYic6IHsgJ3doaWNoJzogMCwgJ2tleUNvZGUnOiA5IH0sXG4gICAgICAgICdlbnRlcic6IHsgJ3doaWNoJzogMTMsICdrZXlDb2RlJzogMTMgfSxcbiAgICAgICAgJ2VuZCc6IHsgJ3doaWNoJzogMCwgJ2tleUNvZGUnOiAzNSB9LFxuICAgICAgICAnaG9tZSc6IHsgJ3doaWNoJzogMCwgJ2tleUNvZGUnOiAzNiB9LFxuICAgICAgICAnbGVmdGFycm93JzogeyAnd2hpY2gnOiAwLCAna2V5Q29kZSc6IDM3IH0sXG4gICAgICAgICd1cGFycm93JzogeyAnd2hpY2gnOiAwLCAna2V5Q29kZSc6IDM4IH0sXG4gICAgICAgICdyaWdodGFycm93JzogeyAnd2hpY2gnOiAwLCAna2V5Q29kZSc6IDM5IH0sXG4gICAgICAgICdkb3duYXJyb3cnOiB7ICd3aGljaCc6IDAsICdrZXlDb2RlJzogNDAgfSxcbiAgICAgICAgJ0Y1JzogeyAnd2hpY2gnOiAxMTYsICdrZXlDb2RlJzogMTE2IH1cbiAgICAgIH07XG4gICAgXG4gICAgICByZXR1cm4gdGhpcy5nZXRNYXRjaGluZ0tleSh3aGljaCwga2V5Q29kZSwga2V5cyk7XG4gICAgfTtcbiAgICBcbiAgICAvL1xuICAgIC8vIFJldHVybnMgdHJ1ZS9mYWxzZSBpZiBtb2RpZmllciBrZXkgaXMgaGVsZCBkb3duXG4gICAgLy9cbiAgICBpc01vZGlmaWVyKGV2dCkge1xuICAgICAgcmV0dXJuIGV2dC5jdHJsS2V5IHx8IGV2dC5hbHRLZXkgfHwgZXZ0Lm1ldGFLZXk7XG4gICAgfTtcbiAgICBcbn1cblxuXG5cbmV4cG9ydCBjbGFzcyBBaUZvcm1hdHRlciB7XG4gIFxuICAgIHByaXZhdGUgaW5wdFJlZ3M6YW55ID0geyc5JzogL1swLTldLywnYSc6IC9bQS1aYS16XS8sJyonOiAvW0EtWmEtejAtOV0vfTtcbiAgICBwcml2YXRlIHV0aWxzOkFpRm9ybWF0dGVyVXRpbHM9bmV3IEFpRm9ybWF0dGVyVXRpbHMoKTtcbiAgICBwcml2YXRlIGlucHV0U2VsZWN0b3IgOiBBaUZvcm1hdHRlcklucHV0U2VsZWN0b3IgPSBuZXcgQWlGb3JtYXR0ZXJJbnB1dFNlbGVjdG9yKCk7XG4gICAgcHJpdmF0ZSBzZWxlY3Rpb246QWlGb3JtYXR0ZXJTZWxlY3Rpb247XG4gICAgcHJpdmF0ZSBwYXR0ZXJuOkFpRm9ybWF0dGVyUGF0dGVybkluZm87XG4gICAgcHJpdmF0ZSBwbGFjZWhvbGRlcjpzdHJpbmc9JyAnO1xuICAgIHByaXZhdGUgbmV3UG9zOmFueTtcbiAgICBwcml2YXRlIGZvY3VzU3RhcnQ6YW55O1xuICAgIHByaXZhdGUgZm9jdXM6bnVtYmVyID0gMDtcbiAgICBwcml2YXRlIGRlbHRhOmFueTtcbiAgICBwcml2YXRlIGhsZHJzOmFueSA9IHt9O1xuICBcbiAgICBudW1iZXJJbnB1dDpib29sZWFuPWZhbHNlO1xuICAgIHZhbHVlOnN0cmluZz0nJztcbiAgICBvblZhbHVlQ2hhbmdlOmFueTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaW5wdXRFbGVtZW50OiBhbnksZm9ybWF0IDpzdHJpbmcpIHtcbiAgICAgICAgZm9ybWF0PWZvcm1hdC5yZXBsYWNlKC97L2csICd7eycpLnJlcGxhY2UoL30vZywgJ319Jyk7XG4gICAgICAgIHZhciBwYXR0ZXJuUGFyc2VyOkFpRm9ybWF0dGVyUGF0dGVyblBhcnNlciA9IG5ldyBBaUZvcm1hdHRlclBhdHRlcm5QYXJzZXIoKTsgXG4gICAgICAgIHRoaXMucGF0dGVybiA9IHBhdHRlcm5QYXJzZXIucGFyc2UoZm9ybWF0KTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMubnVtYmVySW5wdXQ9dHJ1ZTtcbiAgICAgICAgZm9yKHZhciBpPTA7aTx0aGlzLnBhdHRlcm4uaW5wdXRzLmxlbmd0aDtpKyspe1xuICAgICAgICAgICAgaWYodGhpcy5wYXR0ZXJuLmlucHV0c1tpXSAhPT0gJzknKXtcbiAgICAgICAgICAgICAgICB0aGlzLm51bWJlcklucHV0PWZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBBZGQgTGlzdGVuZXJzXG4gICAgICAgIHZhciBzZWxmPXRoaXM7XG4gICAgICAgIHRoaXMudXRpbHMuYWRkTGlzdGVuZXIoaW5wdXRFbGVtZW50LCAna2V5ZG93bicsIGZ1bmN0aW9uKGV2dCl7XG4gICAgICAgICAgICB2YXIgayA9IGV2dC53aGljaCB8fCBldnQua2V5Q29kZTtcbiAgICAgICAgICBcbiAgICAgICAgICAgIC8vIElmIGRlbGV0ZSBrZXlcbiAgICAgICAgICAgIGlmIChrICYmIHNlbGYudXRpbHMuaXNEZWxLZXlEb3duKGV2dC53aGljaCwgZXZ0LmtleUNvZGUpKSB7XG4gICAgICAgICAgICAgIC8vIFByb2Nlc3MgdGhlIGtleUNvZGUgYW5kIHByZXZlbnQgZGVmYXVsdFxuICAgICAgICAgICAgICBzZWxmLnByb2Nlc3NLZXkobnVsbCwgayk7XG4gICAgICAgICAgICAgIHJldHVybiBzZWxmLnV0aWxzLnByZXZlbnREZWZhdWx0KGV2dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMudXRpbHMuYWRkTGlzdGVuZXIoaW5wdXRFbGVtZW50LCAna2V5cHJlc3MnLCBmdW5jdGlvbihldnQpe1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBUaGUgZmlyc3QgdGhpbmcgd2UgbmVlZCBpcyB0aGUgY2hhcmFjdGVyIGNvZGVcbiAgICAgICAgICAgIHZhciBrLCBpc1NwZWNpYWw7XG4gICAgICAgICAgICAvLyBNb3ppbGxhIHdpbGwgdHJpZ2dlciBvbiBzcGVjaWFsIGtleXMgYW5kIGFzc2lnbiB0aGUgdGhlIHZhbHVlIDBcbiAgICAgICAgICAgIC8vIFdlIHdhbnQgdG8gdXNlIHRoYXQgMCByYXRoZXIgdGhhbiB0aGUga2V5Q29kZSBpdCBhc3NpZ25zLlxuICAgICAgICAgICAgayA9IGV2dC53aGljaCB8fCBldnQua2V5Q29kZTtcbiAgICAgICAgICAgIGlzU3BlY2lhbCA9IHNlbGYudXRpbHMuaXNTcGVjaWFsS2V5UHJlc3MoZXZ0LndoaWNoLCBldnQua2V5Q29kZSk7XG4gICAgICAgICAgXG4gICAgICAgICAgICAvLyBQcm9jZXNzIHRoZSBrZXlDb2RlIGFuZCBwcmV2ZW50IGRlZmF1bHRcbiAgICAgICAgICAgIGlmICghc2VsZi51dGlscy5pc0RlbEtleVByZXNzKGV2dC53aGljaCwgZXZ0LmtleUNvZGUpICYmICFpc1NwZWNpYWwgJiYgIXNlbGYudXRpbHMuaXNNb2RpZmllcihldnQpKSB7XG4gICAgICAgICAgICAgIHNlbGYucHJvY2Vzc0tleShTdHJpbmcuZnJvbUNoYXJDb2RlKGspLCBmYWxzZSk7XG4gICAgICAgICAgICAgIHJldHVybiBzZWxmLnV0aWxzLnByZXZlbnREZWZhdWx0KGV2dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgdGhpcy51dGlscy5hZGRMaXN0ZW5lcihpbnB1dEVsZW1lbnQsICdwYXN0ZScsIGZ1bmN0aW9uKGV2dCl7XG4gICAgICAgICAgICBzZWxmLnByb2Nlc3NLZXkoc2VsZi51dGlscy5nZXRDbGlwKGV2dCksIGZhbHNlKTtcbiAgICAgICAgICAgIHJldHVybiBzZWxmLnV0aWxzLnByZXZlbnREZWZhdWx0KGV2dCk7XG4gICAgICAgICAgXG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgLy8gRm9ybWF0IG9uIHN0YXJ0XG4gICAgICAgIHRoaXMucHJvY2Vzc0tleSgnJywgZmFsc2UpO1xuICAgICAgICBpbnB1dEVsZW1lbnQuYmx1cigpO1xuXG4gICAgICAgIHZhciBvbmZvY3VzPWZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgLy8gV3JhcHBlZCBpbiB0aW1lb3V0IHNvIHRoYXQgd2UgY2FuIGdyYWIgaW5wdXQgc2VsZWN0aW9uXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgLy8gR3JhYiBzZWxlY3Rpb25cbiAgICAgICAgICAgICAgdmFyIHNlbGVjdGlvbiA9IHNlbGYuaW5wdXRTZWxlY3Rvci5nZXQoc2VsZi5pbnB1dEVsZW1lbnQpO1xuICAgICAgICAgICAgICAvLyBDaGFyIGNoZWNrXG4gICAgICAgICAgICAgIHZhciBpc0FmdGVyU3RhcnQgPSBzZWxlY3Rpb24uZW5kID4gc2VsZi5mb2N1cyxcbiAgICAgICAgICAgICAgICAgIGlzRmlyc3RDaGFyICA9IHNlbGVjdGlvbi5lbmQgPT09IDA7XG4gICAgICAgICAgICAgIC8vIElmIGNsaWNrZWQgaW4gZnJvbnQgb2Ygc3RhcnQsIHJlZm9jdXMgdG8gc3RhcnRcbiAgICAgICAgICAgICAgaWYgKGlzQWZ0ZXJTdGFydCB8fCBpc0ZpcnN0Q2hhcikge1xuICAgICAgICAgICAgICAgIHNlbGYuaW5wdXRTZWxlY3Rvci5zZXQoc2VsZi5pbnB1dEVsZW1lbnQsIHNlbGYuZm9jdXMpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBBZGQgTGlzdGVuZXJzXG4gICAgICAgIHRoaXMudXRpbHMuYWRkTGlzdGVuZXIoaW5wdXRFbGVtZW50LCAnZm9jdXMnLCBvbmZvY3VzKTtcbiAgICAgICAgdGhpcy51dGlscy5hZGRMaXN0ZW5lcihpbnB1dEVsZW1lbnQsICdjbGljaycsIG9uZm9jdXMpO1xuICAgICAgICB0aGlzLnV0aWxzLmFkZExpc3RlbmVyKGlucHV0RWxlbWVudCwgJ3RvdWNoc3RhcnQnLCBvbmZvY3VzKTtcbiAgICB9XG4gICAgXG4gICAgc2V0VmFsdWUodmFsdWU6c3RyaW5nKXtcbiAgICAgICAgdGhpcy5pbnB1dEVsZW1lbnQudmFsdWU9dmFsdWU7XG4gICAgICAgIHRoaXMucHJvY2Vzc0tleSgnJywgZmFsc2UpO1xuICAgIH1cbiAgICBcbiAgICAvL1xuICAgIC8vIEBwcml2YXRlXG4gICAgLy8gVXNpbmcgdGhlIHByb3ZpZGVkIGtleSBpbmZvcm1hdGlvbiwgYWx0ZXIgZWwgdmFsdWUuXG4gICAgLy9cbiAgICBwcm9jZXNzS2V5KGNoYXJzLCBkZWxLZXksIGlnbm9yZUNhcmV0PWZhbHNlKSB7XG4gICAgICAgIC8vIEdldCBjdXJyZW50IHN0YXRlXG4gICAgICAgIFxuICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IHRoaXMuaW5wdXRTZWxlY3Rvci5nZXQodGhpcy5pbnB1dEVsZW1lbnQpO1xuICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy5pbnB1dEVsZW1lbnQudmFsdWU7XG4gICAgICBcbiAgICAgICAgLy8gSW5pdCB2YWx1ZXNcbiAgICAgICAgdGhpcy5kZWx0YSA9IDA7XG4gICAgICBcbiAgICAgICAgLy8gSWYgY2hhcnMgd2VyZSBoaWdobGlnaHRlZCwgd2UgbmVlZCB0byByZW1vdmUgdGhlbVxuICAgICAgICBpZiAodGhpcy5zZWxlY3Rpb24uYmVnaW4gIT09IHRoaXMuc2VsZWN0aW9uLmVuZCkge1xuICAgICAgICAgIHRoaXMuZGVsdGEgPSAoLTEpICogTWF0aC5hYnModGhpcy5zZWxlY3Rpb24uYmVnaW4gLSB0aGlzLnNlbGVjdGlvbi5lbmQpO1xuICAgICAgICAgIHRoaXMudmFsdWUgICA9IHRoaXMudXRpbHMucmVtb3ZlQ2hhcnModGhpcy52YWx1ZSwgdGhpcy5zZWxlY3Rpb24uYmVnaW4sIHRoaXMuc2VsZWN0aW9uLmVuZCk7XG4gICAgICAgIH1cbiAgICAgIFxuICAgICAgICAvLyBEZWxldGUga2V5IChtb3ZlcyBvcHBvc2l0ZSBkaXJlY3Rpb24pXG4gICAgICAgIGVsc2UgaWYgKGRlbEtleSAmJiBkZWxLZXkgPT09IDQ2KSB7XG4gICAgICAgICAgdGhpcy5kZWxldGUoKTtcbiAgICAgIFxuICAgICAgICAvLyBvciBCYWNrc3BhY2UgYW5kIG5vdCBhdCBzdGFydFxuICAgICAgICB9IGVsc2UgaWYgKGRlbEtleSAmJiB0aGlzLnNlbGVjdGlvbi5iZWdpbiAtIDEgPj0gMCkge1xuICAgICAgXG4gICAgICAgICAgLy8gQWx3YXlzIGhhdmUgYSBkZWx0YSBvZiBhdCBsZWFzdCAtMSBmb3IgdGhlIGNoYXJhY3RlciBiZWluZyBkZWxldGVkLlxuICAgICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnV0aWxzLnJlbW92ZUNoYXJzKHRoaXMudmFsdWUsIHRoaXMuc2VsZWN0aW9uLmVuZCAtMSwgdGhpcy5zZWxlY3Rpb24uZW5kKTtcbiAgICAgICAgICB0aGlzLmRlbHRhIC09IDE7XG4gICAgICBcbiAgICAgICAgLy8gb3IgQmFja3NwYWNlIGFuZCBhdCBzdGFydCAtIGV4aXRcbiAgICAgICAgfSBlbHNlIGlmIChkZWxLZXkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgXG4gICAgICAgIC8vIElmIHRoZSBrZXkgaXMgbm90IGEgZGVsIGtleSwgaXQgc2hvdWxkIGNvbnZlcnQgdG8gYSBzdHJcbiAgICAgICAgaWYgKCFkZWxLZXkpIHtcbiAgICAgICAgICAvLyBBZGQgY2hhciBhdCBwb3NpdGlvbiBhbmQgaW5jcmVtZW50IGRlbHRhXG4gICAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMudXRpbHMuYWRkQ2hhcnModGhpcy52YWx1ZSwgY2hhcnMsIHRoaXMuc2VsZWN0aW9uLmJlZ2luKTtcbiAgICAgICAgICB0aGlzLmRlbHRhICs9IGNoYXJzLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgXG4gICAgICAgIC8vIEZvcm1hdCBlbC52YWx1ZSAoYWxzbyBoYW5kbGVzIHVwZGF0aW5nIGNhcmV0IHBvc2l0aW9uKVxuICAgICAgICB0aGlzLmZvcm1hdFZhbHVlKGlnbm9yZUNhcmV0KTtcbiAgICAgICAgaWYodGhpcy5vblZhbHVlQ2hhbmdlKSB0aGlzLm9uVmFsdWVDaGFuZ2UodGhpcy5pbnB1dEVsZW1lbnQudmFsdWUpOyAgICAgIFxuICAgIH07IFxuICAgIFxuICAgIC8vXG4gICAgLy8gQHByaXZhdGVcbiAgICAvLyBEZWxldGVzIHRoZSBjaGFyYWN0ZXIgaW4gZnJvbnQgb2YgaXRcbiAgICAvL1xuICAgIGRlbGV0ZSAoKSB7XG4gICAgICAvLyBBZGp1c3QgZm9jdXMgdG8gbWFrZSBzdXJlIGl0cyBub3Qgb24gYSBmb3JtYXR0ZWQgY2hhclxuICAgICAgd2hpbGUgKHRoaXMucGF0dGVybi5jaGFyc1t0aGlzLnNlbGVjdGlvbi5iZWdpbl0pIHtcbiAgICAgICAgdGhpcy5uZXh0UG9zKCk7XG4gICAgICB9XG4gICAgXG4gICAgICAvLyBBcyBsb25nIGFzIHdlIGFyZSBub3QgYXQgdGhlIGVuZFxuICAgICAgaWYgKHRoaXMuc2VsZWN0aW9uLmJlZ2luIDwgdGhpcy52YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgLy8gV2Ugd2lsbCBzaW11bGF0ZSBhIGRlbGV0ZSBieSBtb3ZpbmcgdGhlIGNhcmV0IHRvIHRoZSBuZXh0IGNoYXJcbiAgICAgICAgLy8gYW5kIHRoZW4gZGVsZXRpbmdcbiAgICAgICAgdGhpcy5uZXh0UG9zKCk7XG4gICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnV0aWxzLnJlbW92ZUNoYXJzKHRoaXMudmFsdWUsIHRoaXMuc2VsZWN0aW9uLmVuZCAtMSwgdGhpcy5zZWxlY3Rpb24uZW5kKTtcbiAgICAgICAgdGhpcy5kZWx0YSA9IC0xO1xuICAgICAgfVxuICAgIH07XG4gICAgXG4gICAgLy9cbiAgICAvLyBAcHJpdmF0ZVxuICAgIC8vIFF1aWNrIGhlbHBlciBtZXRob2QgdG8gbW92ZSB0aGUgY2FyZXQgdG8gdGhlIG5leHQgcG9zXG4gICAgLy9cbiAgICBuZXh0UG9zKCkge1xuICAgICAgdGhpcy5zZWxlY3Rpb24uZW5kICsrO1xuICAgICAgdGhpcy5zZWxlY3Rpb24uYmVnaW4gKys7XG4gICAgfTtcbiAgICBcbiAgICAvL1xuICAgIC8vIEBwcml2YXRlXG4gICAgLy8gQWx0ZXIgZWxlbWVudCB2YWx1ZSB0byBkaXNwbGF5IGNoYXJhY3RlcnMgbWF0Y2hpbmcgdGhlIHByb3ZpZGVkXG4gICAgLy8gaW5zdGFuY2UgcGF0dGVybi4gQWxzbyByZXNwb25zaWJsZSBmb3IgdXBkYXRpbmdcbiAgICAvL1xuICAgIGZvcm1hdFZhbHVlKGlnbm9yZUNhcmV0KSB7XG4gICAgICAvLyBTZXQgY2FyZXQgcG9zXG4gICAgICB0aGlzLm5ld1BvcyA9IHRoaXMuc2VsZWN0aW9uLmVuZCArIHRoaXMuZGVsdGE7XG4gICAgXG4gICAgICAvLyBSZW1vdmUgYWxsIGZvcm1hdHRlZCBjaGFycyBmcm9tIHZhbFxuICAgICAgdGhpcy5yZW1vdmVDaGFycygpO1xuICAgIFxuICAgICAgLy8gVmFsaWRhdGUgaW5wdXRzXG4gICAgICB0aGlzLnZhbGlkYXRlSW5wdHMoKTtcbiAgICBcbiAgICAgIC8vIEFkZCBmb3JtYXR0ZWQgY2hhcmFjdGVyc1xuICAgICAgdGhpcy5hZGRDaGFycygpO1xuICAgIFxuICAgICAgLy8gU2V0IHZhbHVlIGFuZCBhZGhlcmUgdG8gbWF4TGVuZ3RoXG4gICAgICB0aGlzLmlucHV0RWxlbWVudC52YWx1ZSA9IHRoaXMudmFsdWUuc3Vic3RyKDAsIHRoaXMucGF0dGVybi5tTGVuZ3RoKTtcbiAgICBcbiAgICAgIC8vIFNldCBuZXcgY2FyZXQgcG9zaXRpb25cbiAgICAgIGlmICgodHlwZW9mIGlnbm9yZUNhcmV0KSA9PT0gJ3VuZGVmaW5lZCcgfHwgaWdub3JlQ2FyZXQgPT09IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuaW5wdXRTZWxlY3Rvci5zZXQodGhpcy5pbnB1dEVsZW1lbnQsIHRoaXMubmV3UG9zKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIFxuICAgIC8vXG4gICAgLy8gQHByaXZhdGVcbiAgICAvLyBSZW1vdmUgYWxsIGZvcm1hdHRlZCBiZWZvcmUgYW5kIGFmdGVyIGEgc3BlY2lmaWVkIHBvc1xuICAgIC8vXG4gICAgcmVtb3ZlQ2hhcnMoKSB7XG4gICAgICAvLyBEZWx0YSBzaG91bGRuJ3QgaW5jbHVkZSBwbGFjZWhvbGRlcnNcbiAgICAgIGlmICh0aGlzLnNlbGVjdGlvbi5lbmQgPiB0aGlzLmZvY3VzKSB7XG4gICAgICAgIHRoaXMuZGVsdGEgKz0gdGhpcy5zZWxlY3Rpb24uZW5kIC0gdGhpcy5mb2N1cztcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLy8gQWNjb3VudCBmb3Igc2hpZnRzIGR1cmluZyByZW1vdmFsXG4gICAgICB2YXIgc2hpZnQgPSAwO1xuICAgIFxuICAgICAgLy8gTG9vcCB0aHJvdWdoIGFsbCBwb3NzaWJsZSBjaGFyIHBvc2l0aW9uc1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPD0gdGhpcy5wYXR0ZXJuLm1MZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBHZXQgdHJhbnNmb3JtZWQgcG9zaXRpb25cbiAgICAgICAgdmFyIGN1ckNoYXIgPSB0aGlzLnBhdHRlcm4uY2hhcnNbaV0sXG4gICAgICAgICAgICBjdXJIbGRyID0gdGhpcy5obGRyc1tpXSxcbiAgICAgICAgICAgIHBvcyA9IGkgKyBzaGlmdCxcbiAgICAgICAgICAgIHZhbDtcbiAgICBcbiAgICAgICAgLy8gSWYgYWZ0ZXIgc2VsZWN0aW9uIHdlIG5lZWQgdG8gYWNjb3VudCBmb3IgZGVsdGFcbiAgICAgICAgcG9zID0gKGkgPj0gdGhpcy5zZWxlY3Rpb24uYmVnaW4pID8gcG9zICsgdGhpcy5kZWx0YSA6IHBvcztcbiAgICAgICAgdmFsID0gdGhpcy52YWx1ZS5jaGFyQXQocG9zKTtcbiAgICAgICAgLy8gUmVtb3ZlIGNoYXIgYW5kIGFjY291bnQgZm9yIHNoaWZ0XG4gICAgICAgIGlmIChjdXJDaGFyICYmIGN1ckNoYXIgPT09IHZhbCB8fCBjdXJIbGRyICYmIGN1ckhsZHIgPT09IHZhbCkge1xuICAgICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnV0aWxzLnJlbW92ZUNoYXJzKHRoaXMudmFsdWUsIHBvcywgcG9zICsgMSk7XG4gICAgICAgICAgc2hpZnQtLTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIFxuICAgICAgLy8gQWxsIGhsZHJzIHNob3VsZCBiZSByZW1vdmVkIG5vd1xuICAgICAgdGhpcy5obGRycyA9IHt9O1xuICAgIFxuICAgICAgLy8gU2V0IGZvY3VzIHRvIGxhc3QgY2hhcmFjdGVyXG4gICAgICB0aGlzLmZvY3VzID0gdGhpcy52YWx1ZS5sZW5ndGg7XG4gICAgfTtcbiAgICBcbiAgICAvL1xuICAgIC8vIEBwcml2YXRlXG4gICAgLy8gTWFrZSBzdXJlIGFsbCBpbnB0cyBhcmUgdmFsaWQsIGVsc2UgcmVtb3ZlIGFuZCB1cGRhdGUgZGVsdGFcbiAgICAvL1xuICAgIHZhbGlkYXRlSW5wdHMoKSB7XG4gICAgICAvLyBMb29wIG92ZXIgZWFjaCBjaGFyIGFuZCB2YWxpZGF0ZVxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIEdldCBjaGFyIGlucHQgdHlwZVxuICAgICAgICB2YXIgaW5wdFR5cGUgPSB0aGlzLnBhdHRlcm4uaW5wdXRzW2ldO1xuICAgIFxuICAgICAgICAvLyBDaGVja3NcbiAgICAgICAgdmFyIGlzQmFkVHlwZSA9ICF0aGlzLmlucHRSZWdzW2lucHRUeXBlXSxcbiAgICAgICAgICAgIGlzSW52YWxpZCA9ICFpc0JhZFR5cGUgJiYgIXRoaXMuaW5wdFJlZ3NbaW5wdFR5cGVdLnRlc3QodGhpcy52YWx1ZS5jaGFyQXQoaSkpLFxuICAgICAgICAgICAgaW5Cb3VuZHMgID0gdGhpcy5wYXR0ZXJuLmlucHV0c1tpXTtcbiAgICBcbiAgICAgICAgLy8gUmVtb3ZlIGlmIGluY29ycmVjdCBhbmQgaW5ib3VuZHNcbiAgICAgICAgaWYgKChpc0JhZFR5cGUgfHwgaXNJbnZhbGlkKSAmJiBpbkJvdW5kcykge1xuICAgICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnV0aWxzLnJlbW92ZUNoYXJzKHRoaXMudmFsdWUsIGksIGkgKyAxKTtcbiAgICAgICAgICB0aGlzLmZvY3VzU3RhcnQtLTtcbiAgICAgICAgICB0aGlzLm5ld1Bvcy0tO1xuICAgICAgICAgIHRoaXMuZGVsdGEtLTtcbiAgICAgICAgICBpLS07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIFxuICAgIC8vXG4gICAgLy8gQHByaXZhdGVcbiAgICAvLyBMb29wIG92ZXIgdmFsIGFuZCBhZGQgZm9ybWF0dGVkIGNoYXJzIGFzIG5lY2Vzc2FyeVxuICAgIC8vXG4gICAgYWRkQ2hhcnMoKSB7XG4gICAgICAgIC8vIExvb3Agb3ZlciBhbGwgcG9zc2libGUgY2hhcmFjdGVyc1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8PSB0aGlzLnBhdHRlcm4ubUxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKCF0aGlzLnZhbHVlLmNoYXJBdChpKSkge1xuICAgICAgICAgICAgLy8gQWRkIHBsYWNlaG9sZGVyIGF0IHBvc1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMudXRpbHMuYWRkQ2hhcnModGhpcy52YWx1ZSwgdGhpcy5wbGFjZWhvbGRlciwgaSk7XG4gICAgICAgICAgICB0aGlzLmhsZHJzW2ldID0gdGhpcy5wbGFjZWhvbGRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5hZGRDaGFyKGkpO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIC8vIEFkanVzdCBmb2N1cyB0byBtYWtlIHN1cmUgaXRzIG5vdCBvbiBhIGZvcm1hdHRlZCBjaGFyXG4gICAgICAgIHdoaWxlICh0aGlzLnBhdHRlcm4uY2hhcnNbdGhpcy5mb2N1c10pIHtcbiAgICAgICAgICB0aGlzLmZvY3VzKys7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFxuICAgIC8vXG4gICAgLy8gQHByaXZhdGVcbiAgICAvLyBBZGQgZm9ybWF0dHRlZCBjaGFyIGF0IHBvc2l0aW9uXG4gICAgLy9cbiAgICBhZGRDaGFyKGkpIHtcbiAgICAgIC8vIElmIGNoYXIgZXhpc3RzIGF0IHBvc2l0aW9uXG4gICAgICB2YXIgY2hyID0gdGhpcy5wYXR0ZXJuLmNoYXJzW2ldO1xuICAgICAgaWYgKCFjaHIpIHsgcmV0dXJuIHRydWU7IH1cbiAgICBcbiAgICAgIC8vIElmIGNoYXJzIGFyZSBhZGRlZCBpbiBiZXR3ZWVuIHRoZSBvbGQgcG9zIGFuZCBuZXcgcG9zXG4gICAgICAvLyB3ZSBuZWVkIHRvIGluY3JlbWVudCBwb3MgYW5kIGRlbHRhXG4gICAgICBpZiAodGhpcy51dGlscy5pc0JldHdlZW4oaSwgW3RoaXMuc2VsZWN0aW9uLmJlZ2luIC0xLCB0aGlzLm5ld1BvcyArMV0pKSB7XG4gICAgICAgIHRoaXMubmV3UG9zICsrO1xuICAgICAgICB0aGlzLmRlbHRhICsrO1xuICAgICAgfVxuICAgIFxuICAgICAgLy8gSWYgY2hhcmFjdGVyIGFkZGVkIGJlZm9yZSBmb2N1cywgaW5jclxuICAgICAgaWYgKGkgPD0gdGhpcy5mb2N1cykge1xuICAgICAgICB0aGlzLmZvY3VzKys7XG4gICAgICB9XG4gICAgXG4gICAgICAvLyBVcGRhdGVob2xkZXJcbiAgICAgIGlmICh0aGlzLmhsZHJzW2ldKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmhsZHJzW2ldO1xuICAgICAgICB0aGlzLmhsZHJzW2kgKyAxXSA9IHRoaXMucGxhY2Vob2xkZXI7XG4gICAgICB9XG4gICAgXG4gICAgICAvLyBVcGRhdGUgdmFsdWVcbiAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnV0aWxzLmFkZENoYXJzKHRoaXMudmFsdWUsIGNociwgaSk7XG4gICAgfTtcbiAgICBcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
