System.register([], function(exports_1) {
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
            })();
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
            })();
            AiFormatterSelection = (function () {
                function AiFormatterSelection(begin, end) {
                    this.begin = begin;
                    this.end = end;
                }
                return AiFormatterSelection;
            })();
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
            })();
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
            })();
            AiFormatter = (function () {
                function AiFormatter(inputElement, format, value) {
                    this.inputElement = inputElement;
                    this.inptRegs = { '9': /[0-9]/, 'a': /[A-Za-z]/, '*': /[A-Za-z0-9]/ };
                    this.utils = new AiFormatterUtils();
                    this.inputSelector = new AiFormatterInputSelector();
                    this.placeholder = ' ';
                    this.focus = 0;
                    this.hldrs = {};
                    this.value = '';
                    inputElement.value = value;
                    format = format.replace(/{/g, '{{').replace(/}/g, '}}');
                    var patternParser = new AiFormatterPatternParser();
                    this.pattern = patternParser.parse(format);
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
                    //inputElement.blur();
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
            })();
            exports_1("AiFormatter", AiFormatter);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlJbnB1dC9BaUZvcm1hdHRlci50cyJdLCJuYW1lcyI6WyJBaUZvcm1hdHRlclBhdHRlcm5JbmZvIiwiQWlGb3JtYXR0ZXJQYXR0ZXJuSW5mby5jb25zdHJ1Y3RvciIsIkFpRm9ybWF0dGVyUGF0dGVyblBhcnNlciIsIkFpRm9ybWF0dGVyUGF0dGVyblBhcnNlci5jb25zdHJ1Y3RvciIsIkFpRm9ybWF0dGVyUGF0dGVyblBhcnNlci5nZXRNYXRjaGVzIiwiQWlGb3JtYXR0ZXJQYXR0ZXJuUGFyc2VyLnBhcnNlIiwiQWlGb3JtYXR0ZXJTZWxlY3Rpb24iLCJBaUZvcm1hdHRlclNlbGVjdGlvbi5jb25zdHJ1Y3RvciIsIkFpRm9ybWF0dGVySW5wdXRTZWxlY3RvciIsIkFpRm9ybWF0dGVySW5wdXRTZWxlY3Rvci5jb25zdHJ1Y3RvciIsIkFpRm9ybWF0dGVySW5wdXRTZWxlY3Rvci5nZXQiLCJBaUZvcm1hdHRlcklucHV0U2VsZWN0b3Iuc2V0IiwiQWlGb3JtYXR0ZXJVdGlscyIsIkFpRm9ybWF0dGVyVXRpbHMuY29uc3RydWN0b3IiLCJBaUZvcm1hdHRlclV0aWxzLmFkZENoYXJzIiwiQWlGb3JtYXR0ZXJVdGlscy5yZW1vdmVDaGFycyIsIkFpRm9ybWF0dGVyVXRpbHMuaXNCZXR3ZWVuIiwiQWlGb3JtYXR0ZXJVdGlscy5hZGRMaXN0ZW5lciIsIkFpRm9ybWF0dGVyVXRpbHMucHJldmVudERlZmF1bHQiLCJBaUZvcm1hdHRlclV0aWxzLmdldENsaXAiLCJBaUZvcm1hdHRlclV0aWxzLmdldE1hdGNoaW5nS2V5IiwiQWlGb3JtYXR0ZXJVdGlscy5pc0RlbEtleURvd24iLCJBaUZvcm1hdHRlclV0aWxzLmlzRGVsS2V5UHJlc3MiLCJBaUZvcm1hdHRlclV0aWxzLmlzU3BlY2lhbEtleVByZXNzIiwiQWlGb3JtYXR0ZXJVdGlscy5pc01vZGlmaWVyIiwiQWlGb3JtYXR0ZXIiLCJBaUZvcm1hdHRlci5jb25zdHJ1Y3RvciIsIkFpRm9ybWF0dGVyLnByb2Nlc3NLZXkiLCJBaUZvcm1hdHRlci5kZWxldGUiLCJBaUZvcm1hdHRlci5uZXh0UG9zIiwiQWlGb3JtYXR0ZXIuZm9ybWF0VmFsdWUiLCJBaUZvcm1hdHRlci5yZW1vdmVDaGFycyIsIkFpRm9ybWF0dGVyLnZhbGlkYXRlSW5wdHMiLCJBaUZvcm1hdHRlci5hZGRDaGFycyIsIkFpRm9ybWF0dGVyLmFkZENoYXIiXSwibWFwcGluZ3MiOiI7Ozs7O1lBQUE7Z0JBQUFBO29CQUNJQyxXQUFNQSxHQUFDQSxFQUFFQSxDQUFDQTtvQkFDVkEsVUFBS0EsR0FBQ0EsRUFBRUEsQ0FBQ0E7Z0JBRWJBLENBQUNBO2dCQUFERCw2QkFBQ0E7WUFBREEsQ0FKQSxBQUlDQSxJQUFBO1lBRUQ7Z0JBQUFFO2dCQXVDQUMsQ0FBQ0E7Z0JBbkNHRCw2Q0FBVUEsR0FBVkEsVUFBV0EsT0FBT0E7b0JBQ1pFLDRCQUE0QkE7b0JBQzVCQSxJQUFJQSxPQUFPQSxHQUFHQSxFQUFFQSxFQUFDQSxLQUFLQSxDQUFDQTtvQkFDdkJBLE9BQU1BLEtBQUtBLEdBQUdBLHdCQUF3QkEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsRUFBRUEsQ0FBQ0E7d0JBQzVEQSxPQUFPQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtvQkFDdEJBLENBQUNBO29CQUNEQSxNQUFNQSxDQUFDQSxPQUFPQSxDQUFDQTtnQkFDckJBLENBQUNBO2dCQUVERix3Q0FBS0EsR0FBTEEsVUFBTUEsT0FBT0E7b0JBQ1RHLElBQUlBLElBQUlBLEdBQXdCQSxJQUFJQSxzQkFBc0JBLEVBQUVBLENBQUNBO29CQUM3REEsSUFBSUEsT0FBT0EsR0FBR0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsRUFBRUEsT0FBT0EsR0FBR0EsT0FBT0EsQ0FBQ0EsTUFBTUEsQ0FBQ0E7b0JBQ2pFQSxJQUFJQSxNQUFNQSxHQUFHQSxDQUFDQSxFQUFDQSxNQUFNQSxHQUFHQSxDQUFDQSxFQUFDQSxDQUFD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bnRzL0FpSW5wdXQvQWlGb3JtYXR0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBaUZvcm1hdHRlclBhdHRlcm5JbmZve1xuICAgIGlucHV0cz1bXTtcbiAgICBjaGFycz1bXTtcbiAgICBtTGVuZ3RoOm51bWJlcjtcbn1cblxuY2xhc3MgQWlGb3JtYXR0ZXJQYXR0ZXJuUGFyc2Vye1xuICAgIHN0YXRpYyBERUxJTV9TSVpFOm51bWJlciA9IDQ7XG4gICAgc3RhdGljIHJlZ2V4cDpSZWdFeHAgID0gbmV3IFJlZ0V4cCgne3soW159XSspfX0nLCAnZycpOyBcbiAgICBcbiAgICBnZXRNYXRjaGVzKHBhdHRlcm4pe1xuICAgICAgICAgIC8vIFBvcHVsYXRlIGFycmF5IG9mIG1hdGNoZXNcbiAgICAgICAgICB2YXIgbWF0Y2hlcyA9IFtdLG1hdGNoO1xuICAgICAgICAgIHdoaWxlKG1hdGNoID0gQWlGb3JtYXR0ZXJQYXR0ZXJuUGFyc2VyLnJlZ2V4cC5leGVjKHBhdHRlcm4pKSB7XG4gICAgICAgICAgICBtYXRjaGVzLnB1c2gobWF0Y2gpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbWF0Y2hlcztcbiAgICB9XG4gICAgXG4gICAgcGFyc2UocGF0dGVybik6QWlGb3JtYXR0ZXJQYXR0ZXJuSW5mb3tcbiAgICAgICAgdmFyIGluZm86QWlGb3JtYXR0ZXJQYXR0ZXJuSW5mbz1uZXcgQWlGb3JtYXR0ZXJQYXR0ZXJuSW5mbygpO1xuICAgICAgICB2YXIgbWF0Y2hlcyA9IHRoaXMuZ2V0TWF0Y2hlcyhwYXR0ZXJuKSwgcExlbmd0aCA9IHBhdHRlcm4ubGVuZ3RoO1xuICAgICAgICB2YXIgbUNvdW50ID0gMCxpQ291bnQgPSAwLGkgPSAwO1xuXG4gICAgICAgIHZhciBwcm9jZXNzTWF0Y2ggPSBmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgICAgdmFyIHZhbExlbmd0aCA9IHZhbC5sZW5ndGg7XG4gICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB2YWxMZW5ndGg7IGorKykge1xuICAgICAgICAgICAgaW5mby5pbnB1dHNbaUNvdW50XSA9IHZhbC5jaGFyQXQoaik7XG4gICAgICAgICAgICBpQ291bnQrKztcbiAgICAgICAgICB9XG4gICAgICAgICAgbUNvdW50ICsrO1xuICAgICAgICAgIGkgKz0gKHZhbC5sZW5ndGggKyBBaUZvcm1hdHRlclBhdHRlcm5QYXJzZXIuREVMSU1fU0laRSAtIDEpO1xuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgZm9yIChpOyBpIDwgcExlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKG1Db3VudCA8IG1hdGNoZXMubGVuZ3RoICYmIGkgPT09IG1hdGNoZXNbbUNvdW50XS5pbmRleCkge1xuICAgICAgICAgICAgcHJvY2Vzc01hdGNoKG1hdGNoZXNbbUNvdW50XVsxXSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGluZm8uY2hhcnNbaSAtIChtQ291bnQgKiBBaUZvcm1hdHRlclBhdHRlcm5QYXJzZXIuREVMSU1fU0laRSldID0gcGF0dGVybi5jaGFyQXQoaSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpbmZvLm1MZW5ndGggPSBpIC0gKG1Db3VudCAqIEFpRm9ybWF0dGVyUGF0dGVyblBhcnNlci5ERUxJTV9TSVpFKTtcbiAgICAgICAgcmV0dXJuIGluZm87ICAgIFxuICAgIH1cbn1cblxuY2xhc3MgQWlGb3JtYXR0ZXJTZWxlY3Rpb257XG4gICAgYmVnaW46bnVtYmVyO1xuICAgIGVuZDpudW1iZXI7XG4gICAgY29uc3RydWN0b3IoYmVnaW46bnVtYmVyLGVuZDpudW1iZXIpIHsgIFxuICAgICAgdGhpcy5iZWdpbj1iZWdpbjtcbiAgICAgIHRoaXMuZW5kPWVuZDtcbiAgICB9XG59XG5cbmNsYXNzIEFpRm9ybWF0dGVySW5wdXRTZWxlY3RvciB7XG4gICAgLy9cbiAgICAvLyBHZXQgYmVnaW4gYW5kIGVuZCBwb3NpdGlvbnMgb2Ygc2VsZWN0ZWQgaW5wdXQuIFJldHVybiAwJ3NcbiAgICAvLyBpZiB0aGVyZSBpcyBubyBzZWxlY3RpaW9uIGRhdGFcbiAgICAvL1xuICAgIGdldChlbCk6QWlGb3JtYXR0ZXJTZWxlY3Rpb24ge1xuXG4gICAgICAvLyBJZiBub3JtYWwgYnJvd3NlciByZXR1cm4gd2l0aCByZXN1bHRcbiAgICAgIGlmICh0eXBlb2YgZWwuc2VsZWN0aW9uU3RhcnQgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBBaUZvcm1hdHRlclNlbGVjdGlvbihlbC5zZWxlY3Rpb25TdGFydCxlbC5zZWxlY3Rpb25FbmQpO1xuICAgICAgfVxuICAgIFxuICAgICAgdHJ5e1xuICAgICAgICAvLyBVaC1PaC4gV2UgbXVzdCBiZSBJRS4gRnVuIHdpdGggVGV4dFJhbmdlISFcbiAgICAgICAgY29uc3QgZG9jID0gZG9jdW1lbnQgYXMgYW55O1xuICAgICAgICB2YXIgcmFuZ2UgPSBkb2Muc2VsZWN0aW9uLmNyZWF0ZVJhbmdlKCk7XG4gICAgICAgIC8vIERldGVybWluZSBpZiB0aGVyZSBpcyBhIHNlbGVjdGlvblxuICAgICAgICBpZiAocmFuZ2UgJiYgcmFuZ2UucGFyZW50RWxlbWVudCgpID09PSBlbCkge1xuICAgICAgICAgIHZhciBpbnB1dFJhbmdlID0gZWwuY3JlYXRlVGV4dFJhbmdlKCksXG4gICAgICAgICAgICAgIGVuZFJhbmdlICAgPSBlbC5jcmVhdGVUZXh0UmFuZ2UoKSxcbiAgICAgICAgICAgICAgbGVuZ3RoICAgICA9IGVsLnZhbHVlLmxlbmd0aDtcbiAgICAgIFxuICAgICAgICAgIC8vIENyZWF0ZSBhIHdvcmtpbmcgVGV4dFJhbmdlIGZvciB0aGUgaW5wdXQgc2VsZWN0aW9uXG4gICAgICAgICAgaW5wdXRSYW5nZS5tb3ZlVG9Cb29rbWFyayhyYW5nZS5nZXRCb29rbWFyaygpKTtcbiAgICAgIFxuICAgICAgICAgIC8vIE1vdmUgZW5kUmFuZ2UgYmVnaW4gcG9zIHRvIGVuZCBwb3MgKGhlbmNlIGVuZFJhbmdlKVxuICAgICAgICAgIGVuZFJhbmdlLmNvbGxhcHNlKGZhbHNlKTtcbiAgICAgICAgICBcbiAgICAgICAgICAvLyBJZiB3ZSBhcmUgYXQgdGhlIHZlcnkgZW5kIG9mIHRoZSBpbnB1dCwgYmVnaW4gYW5kIGVuZFxuICAgICAgICAgIC8vIG11c3QgYm90aCBiZSB0aGUgbGVuZ3RoIG9mIHRoZSBlbC52YWx1ZVxuICAgICAgICAgIGlmIChpbnB1dFJhbmdlLmNvbXBhcmVFbmRQb2ludHMoJ1N0YXJ0VG9FbmQnLCBlbmRSYW5nZSkgPiAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIHsgYmVnaW46IGxlbmd0aCwgZW5kOiBsZW5ndGggfTtcbiAgICAgICAgICB9XG4gICAgICBcbiAgICAgICAgICAvLyBOb3RlOiBtb3ZlU3RhcnQgdXN1YWxseSByZXR1cm5zIHRoZSB1bml0cyBtb3ZlZCwgd2hpY2ggXG4gICAgICAgICAgLy8gb25lIG1heSB0aGluayBpcyAtbGVuZ3RoLCBob3dldmVyLCBpdCB3aWxsIHN0b3Agd2hlbiBpdFxuICAgICAgICAgIC8vIGdldHMgdG8gdGhlIGJlZ2luIG9mIHRoZSByYW5nZSwgdGh1cyBnaXZpbmcgdXMgdGhlXG4gICAgICAgICAgLy8gbmVnYXRpdmUgdmFsdWUgb2YgdGhlIHBvcy5cbiAgICAgICAgICByZXR1cm4gbmV3IEFpRm9ybWF0dGVyU2VsZWN0aW9uKFxuICAgICAgICAgICAgLWlucHV0UmFuZ2UubW92ZVN0YXJ0KCdjaGFyYWN0ZXInLCAtbGVuZ3RoKSxcbiAgICAgICAgICAgIC1pbnB1dFJhbmdlLm1vdmVFbmQoJ2NoYXJhY3RlcicsIC1sZW5ndGgpKVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgfWNhdGNoKGUpe31cbiAgICBcbiAgICAgIC8vUmV0dXJuIDAncyBvbiBubyBzZWxlY3Rpb24gZGF0YVxuICAgICAgcmV0dXJuIG5ldyBBaUZvcm1hdHRlclNlbGVjdGlvbigwLDApO1xuICAgIH07ICBcbiAgICBcbiAgICBcbiAgICAvL1xuICAgIC8vIFNldCB0aGUgY2FyZXQgcG9zaXRpb24gYXQgYSBzcGVjaWZpZWQgbG9jYXRpb25cbiAgICAvL1xuICAgIHNldChlbCwgcG9zKSB7XG4gICAgICAvLyBOb3JtYWxpemUgcG9zXG4gICAgICBpZiAodHlwZW9mIHBvcyAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcG9zID0geyBiZWdpbjogcG9zLCBlbmQ6IHBvcyB9O1xuICAgICAgfVxuICAgIFxuICAgICAgLy8gSWYgbm9ybWFsIGJyb3dzZXJcbiAgICAgIGlmIChlbC5zZXRTZWxlY3Rpb25SYW5nZSkge1xuICAgICAgICBlbC5mb2N1cygpO1xuICAgICAgICBlbC5zZXRTZWxlY3Rpb25SYW5nZShwb3MuYmVnaW4sIHBvcy5lbmQpO1xuICAgIFxuICAgICAgLy8gSUUgPSBUZXh0UmFuZ2UgZnVuXG4gICAgICB9IGVsc2UgaWYgKGVsLmNyZWF0ZVRleHRSYW5nZSkge1xuICAgICAgICB2YXIgcmFuZ2UgPSBlbC5jcmVhdGVUZXh0UmFuZ2UoKTtcbiAgICAgICAgcmFuZ2UuY29sbGFwc2UodHJ1ZSk7XG4gICAgICAgIHJhbmdlLm1vdmVFbmQoJ2NoYXJhY3RlcicsIHBvcy5lbmQpO1xuICAgICAgICByYW5nZS5tb3ZlU3RhcnQoJ2NoYXJhY3RlcicsIHBvcy5iZWdpbik7XG4gICAgICAgIHJhbmdlLnNlbGVjdCgpO1xuICAgICAgfVxuICAgIH07XG4gICAgXG4gICAgXG59XG5cbmNsYXNzIEFpRm9ybWF0dGVyVXRpbHMge1xuICAgIC8vXG4gICAgLy8gQWRkIGEgZ2l2ZW4gY2hhcmFjdGVyIHRvIGEgc3RyaW5nIGF0IGEgZGVmaW5lZCBwb3NcbiAgICAvL1xuICAgIGFkZENoYXJzKHN0ciwgY2hhcnMsIHBvcykge1xuICAgICAgcmV0dXJuIHN0ci5zdWJzdHIoMCwgcG9zKSArIGNoYXJzICsgc3RyLnN1YnN0cihwb3MsIHN0ci5sZW5ndGgpO1xuICAgIH07IFxuICAgIFxuICAgIC8vXG4gICAgLy8gUmVtb3ZlIGEgc3BhbiBvZiBjaGFyYWN0ZXJzXG4gICAgLy9cbiAgICByZW1vdmVDaGFycyhzdHIsIHN0YXJ0LCBlbmQpIHtcbiAgICAgIHJldHVybiBzdHIuc3Vic3RyKDAsIHN0YXJ0KSArIHN0ci5zdWJzdHIoZW5kLCBzdHIubGVuZ3RoKTtcbiAgICB9O1xuICAgIFxuICAgIC8vXG4gICAgLy8gUmV0dXJuIHRydWUvZmFsc2UgaXMgbnVtIGZhbHNlIGJldHdlZW4gYm91bmRzXG4gICAgLy9cbiAgICBpc0JldHdlZW4obnVtLCBib3VuZHMpIHtcbiAgICAgIGJvdW5kcy5zb3J0KGZ1bmN0aW9uKGEsYikgeyByZXR1cm4gYS1iOyB9KTtcbiAgICAgIHJldHVybiAobnVtID4gYm91bmRzWzBdICYmIG51bSA8IGJvdW5kc1sxXSk7XG4gICAgfTtcbiAgICBcbiAgICAvL1xuICAgIC8vIEhlbHBlciBtZXRob2QgZm9yIGNyb3NzIGJyb3dzZXIgZXZlbnQgbGlzdGVuZXJzXG4gICAgLy9cbiAgICBhZGRMaXN0ZW5lcihlbCwgZXZ0LCBoYW5kbGVyKSB7XG4gICAgICByZXR1cm4gKHR5cGVvZiBlbC5hZGRFdmVudExpc3RlbmVyICE9PSAndW5kZWZpbmVkJylcbiAgICAgICAgPyBlbC5hZGRFdmVudExpc3RlbmVyKGV2dCwgaGFuZGxlciwgZmFsc2UpXG4gICAgICAgIDogZWwuYXR0YWNoRXZlbnQoJ29uJyArIGV2dCwgaGFuZGxlcik7XG4gICAgfTtcbiAgICBcbiAgICAvL1xuICAgIC8vIEhlbHBlciBtZXRob2QgZm9yIGNyb3NzIGJyb3dzZXIgaW1wbGVtZW50YXRpb24gb2YgcHJldmVudERlZmF1bHRcbiAgICAvL1xuICAgIHByZXZlbnREZWZhdWx0KGV2dCkge1xuICAgICAgcmV0dXJuIChldnQucHJldmVudERlZmF1bHQpID8gZXZ0LnByZXZlbnREZWZhdWx0KCkgOiAoZXZ0LnJldHVyblZhbHVlID0gZmFsc2UpO1xuICAgIH07XG4gICAgXG4gICAgLy9cbiAgICAvLyBIZWxwZXIgbWV0aG9kIGZvciBjcm9zcyBicm93c2VyIGltcGxlbWVudGF0aW9uIGZvciBncmFiYmluZ1xuICAgIC8vIGNsaXBib2FyZCBkYXRhXG4gICAgLy9cbiAgICBnZXRDbGlwKGV2dCkge1xuICAgICAgdmFyIGV2ZW50OmFueT1ldnQ7XG4gICAgICB2YXIgd2luOmFueT13aW5kb3c7XG4gICAgICBpZiAoZXZlbnQuY2xpcGJvYXJkRGF0YSkgeyByZXR1cm4gZXZlbnQuY2xpcGJvYXJkRGF0YS5nZXREYXRhKCdUZXh0Jyk7IH1cbiAgICAgIGlmICh3aW4uY2xpcGJvYXJkRGF0YSkgeyByZXR1cm4gd2luLmNsaXBib2FyZERhdGEuZ2V0RGF0YSgnVGV4dCcpOyB9XG4gICAgfTtcbiAgICBcbiAgICAvL1xuICAgIC8vIExvb3Agb3ZlciBvYmplY3QgYW5kIGNoZWNraW5nIGZvciBtYXRjaGluZyBwcm9wZXJ0aWVzXG4gICAgLy9cbiAgICBnZXRNYXRjaGluZ0tleSh3aGljaCwga2V5Q29kZSwga2V5cykge1xuICAgICAgLy8gTG9vcCBvdmVyIGFuZCByZXR1cm4gaWYgbWF0Y2hlZC5cbiAgICAgIGZvciAodmFyIGsgaW4ga2V5cykge1xuICAgICAgICB2YXIga2V5ID0ga2V5c1trXTtcbiAgICAgICAgaWYgKHdoaWNoID09PSBrZXkud2hpY2ggJiYga2V5Q29kZSA9PT0ga2V5LmtleUNvZGUpIHtcbiAgICAgICAgICByZXR1cm4gaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgXG4gICAgLy9cbiAgICAvLyBSZXR1cm5zIHRydWUvZmFsc2UgaWYgayBpcyBhIGRlbCBrZXlEb3duXG4gICAgLy9cbiAgICBpc0RlbEtleURvd24od2hpY2gsIGtleUNvZGUpIHtcbiAgICAgIHZhciBrZXlzID0ge1xuICAgICAgICAnYmFja3NwYWNlJzogeyAnd2hpY2gnOiA4LCAna2V5Q29kZSc6IDggfSxcbiAgICAgICAgJ2RlbGV0ZSc6IHsgJ3doaWNoJzogNDYsICdrZXlDb2RlJzogNDYgfVxuICAgICAgfTtcbiAgICBcbiAgICAgIHJldHVybiB0aGlzLmdldE1hdGNoaW5nS2V5KHdoaWNoLCBrZXlDb2RlLCBrZXlzKTtcbiAgICB9O1xuICAgIFxuICAgIC8vXG4gICAgLy8gUmV0dXJucyB0cnVlL2ZhbHNlIGlmIGsgaXMgYSBkZWwga2V5UHJlc3NcbiAgICAvL1xuICAgIGlzRGVsS2V5UHJlc3Mod2hpY2gsIGtleUNvZGUpIHtcbiAgICAgIHZhciBrZXlzID0ge1xuICAgICAgICAnYmFja3NwYWNlJzogeyAnd2hpY2gnOiA4LCAna2V5Q29kZSc6IDgsICdzaGlmdEtleSc6IGZhbHNlIH0sXG4gICAgICAgICdkZWxldGUnOiB7ICd3aGljaCc6IDAsICdrZXlDb2RlJzogNDYgfVxuICAgICAgfTtcbiAgICBcbiAgICAgIHJldHVybiB0aGlzLmdldE1hdGNoaW5nS2V5KHdoaWNoLCBrZXlDb2RlLCBrZXlzKTtcbiAgICB9O1xuXG4gICAgLy9cbiAgICAvLyBEZXRlcm1pbmUgaWYga2V5cHJlc3MgcmVsYXRlcyB0byBzcGVjaWFsS2V5XG4gICAgLy9cbiAgICBpc1NwZWNpYWxLZXlQcmVzcyh3aGljaCwga2V5Q29kZSkge1xuICAgICAgdmFyIGtleXMgPSB7XG4gICAgICAgICd0YWInOiB7ICd3aGljaCc6IDAsICdrZXlDb2RlJzogOSB9LFxuICAgICAgICAnZW50ZXInOiB7ICd3aGljaCc6IDEzLCAna2V5Q29kZSc6IDEzIH0sXG4gICAgICAgICdlbmQnOiB7ICd3aGljaCc6IDAsICdrZXlDb2RlJzogMzUgfSxcbiAgICAgICAgJ2hvbWUnOiB7ICd3aGljaCc6IDAsICdrZXlDb2RlJzogMzYgfSxcbiAgICAgICAgJ2xlZnRhcnJvdyc6IHsgJ3doaWNoJzogMCwgJ2tleUNvZGUnOiAzNyB9LFxuICAgICAgICAndXBhcnJvdyc6IHsgJ3doaWNoJzogMCwgJ2tleUNvZGUnOiAzOCB9LFxuICAgICAgICAncmlnaHRhcnJvdyc6IHsgJ3doaWNoJzogMCwgJ2tleUNvZGUnOiAzOSB9LFxuICAgICAgICAnZG93bmFycm93JzogeyAnd2hpY2gnOiAwLCAna2V5Q29kZSc6IDQwIH0sXG4gICAgICAgICdGNSc6IHsgJ3doaWNoJzogMTE2LCAna2V5Q29kZSc6IDExNiB9XG4gICAgICB9O1xuICAgIFxuICAgICAgcmV0dXJuIHRoaXMuZ2V0TWF0Y2hpbmdLZXkod2hpY2gsIGtleUNvZGUsIGtleXMpO1xuICAgIH07XG4gICAgXG4gICAgLy9cbiAgICAvLyBSZXR1cm5zIHRydWUvZmFsc2UgaWYgbW9kaWZpZXIga2V5IGlzIGhlbGQgZG93blxuICAgIC8vXG4gICAgaXNNb2RpZmllcihldnQpIHtcbiAgICAgIHJldHVybiBldnQuY3RybEtleSB8fCBldnQuYWx0S2V5IHx8IGV2dC5tZXRhS2V5O1xuICAgIH07XG4gICAgXG59XG5cblxuXG5leHBvcnQgY2xhc3MgQWlGb3JtYXR0ZXIge1xuICBcbiAgICBwcml2YXRlIGlucHRSZWdzOmFueSA9IHsnOSc6IC9bMC05XS8sJ2EnOiAvW0EtWmEtel0vLCcqJzogL1tBLVphLXowLTldL307XG4gICAgcHJpdmF0ZSB1dGlsczpBaUZvcm1hdHRlclV0aWxzPW5ldyBBaUZvcm1hdHRlclV0aWxzKCk7XG4gICAgcHJpdmF0ZSBpbnB1dFNlbGVjdG9yIDogQWlGb3JtYXR0ZXJJbnB1dFNlbGVjdG9yID0gbmV3IEFpRm9ybWF0dGVySW5wdXRTZWxlY3RvcigpO1xuICAgIHByaXZhdGUgc2VsZWN0aW9uOkFpRm9ybWF0dGVyU2VsZWN0aW9uO1xuICAgIHByaXZhdGUgcGF0dGVybjpBaUZvcm1hdHRlclBhdHRlcm5JbmZvO1xuICAgIHByaXZhdGUgcGxhY2Vob2xkZXI6c3RyaW5nPScgJztcbiAgICBwcml2YXRlIG5ld1Bvczphbnk7XG4gICAgcHJpdmF0ZSBmb2N1c1N0YXJ0OmFueTtcbiAgICBwcml2YXRlIGZvY3VzOm51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBkZWx0YTphbnk7XG4gICAgcHJpdmF0ZSBobGRyczphbnkgPSB7fTtcblxuICAgIHZhbHVlOnN0cmluZz0nJztcbiAgXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGlucHV0RWxlbWVudDogYW55LGZvcm1hdCA6c3RyaW5nLHZhbHVlOnN0cmluZykge1xuICAgICAgICBpbnB1dEVsZW1lbnQudmFsdWU9dmFsdWU7XG4gICAgICAgIGZvcm1hdD1mb3JtYXQucmVwbGFjZSgvey9nLCAne3snKS5yZXBsYWNlKC99L2csICd9fScpO1xuICAgICAgICB2YXIgcGF0dGVyblBhcnNlcjpBaUZvcm1hdHRlclBhdHRlcm5QYXJzZXIgPSBuZXcgQWlGb3JtYXR0ZXJQYXR0ZXJuUGFyc2VyKCk7IFxuICAgICAgICB0aGlzLnBhdHRlcm4gPSBwYXR0ZXJuUGFyc2VyLnBhcnNlKGZvcm1hdCk7XG4gICAgICAgIC8vIEFkZCBMaXN0ZW5lcnNcbiAgICAgICAgdmFyIHNlbGY9dGhpcztcbiAgICAgICAgdGhpcy51dGlscy5hZGRMaXN0ZW5lcihpbnB1dEVsZW1lbnQsICdrZXlkb3duJywgZnVuY3Rpb24oZXZ0KXtcbiAgICAgICAgICAgIHZhciBrID0gZXZ0LndoaWNoIHx8IGV2dC5rZXlDb2RlO1xuICAgICAgICAgIFxuICAgICAgICAgICAgLy8gSWYgZGVsZXRlIGtleVxuICAgICAgICAgICAgaWYgKGsgJiYgc2VsZi51dGlscy5pc0RlbEtleURvd24oZXZ0LndoaWNoLCBldnQua2V5Q29kZSkpIHtcbiAgICAgICAgICAgICAgLy8gUHJvY2VzcyB0aGUga2V5Q29kZSBhbmQgcHJldmVudCBkZWZhdWx0XG4gICAgICAgICAgICAgIHNlbGYucHJvY2Vzc0tleShudWxsLCBrKTtcbiAgICAgICAgICAgICAgcmV0dXJuIHNlbGYudXRpbHMucHJldmVudERlZmF1bHQoZXZ0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy51dGlscy5hZGRMaXN0ZW5lcihpbnB1dEVsZW1lbnQsICdrZXlwcmVzcycsIGZ1bmN0aW9uKGV2dCl7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIFRoZSBmaXJzdCB0aGluZyB3ZSBuZWVkIGlzIHRoZSBjaGFyYWN0ZXIgY29kZVxuICAgICAgICAgICAgdmFyIGssIGlzU3BlY2lhbDtcbiAgICAgICAgICAgIC8vIE1vemlsbGEgd2lsbCB0cmlnZ2VyIG9uIHNwZWNpYWwga2V5cyBhbmQgYXNzaWduIHRoZSB0aGUgdmFsdWUgMFxuICAgICAgICAgICAgLy8gV2Ugd2FudCB0byB1c2UgdGhhdCAwIHJhdGhlciB0aGFuIHRoZSBrZXlDb2RlIGl0IGFzc2lnbnMuXG4gICAgICAgICAgICBrID0gZXZ0LndoaWNoIHx8IGV2dC5rZXlDb2RlO1xuICAgICAgICAgICAgaXNTcGVjaWFsID0gc2VsZi51dGlscy5pc1NwZWNpYWxLZXlQcmVzcyhldnQud2hpY2gsIGV2dC5rZXlDb2RlKTtcbiAgICAgICAgICBcbiAgICAgICAgICAgIC8vIFByb2Nlc3MgdGhlIGtleUNvZGUgYW5kIHByZXZlbnQgZGVmYXVsdFxuICAgICAgICAgICAgaWYgKCFzZWxmLnV0aWxzLmlzRGVsS2V5UHJlc3MoZXZ0LndoaWNoLCBldnQua2V5Q29kZSkgJiYgIWlzU3BlY2lhbCAmJiAhc2VsZi51dGlscy5pc01vZGlmaWVyKGV2dCkpIHtcbiAgICAgICAgICAgICAgc2VsZi5wcm9jZXNzS2V5KFN0cmluZy5mcm9tQ2hhckNvZGUoayksIGZhbHNlKTtcbiAgICAgICAgICAgICAgcmV0dXJuIHNlbGYudXRpbHMucHJldmVudERlZmF1bHQoZXZ0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnV0aWxzLmFkZExpc3RlbmVyKGlucHV0RWxlbWVudCwgJ3Bhc3RlJywgZnVuY3Rpb24oZXZ0KXtcbiAgICAgICAgICAgIHNlbGYucHJvY2Vzc0tleShzZWxmLnV0aWxzLmdldENsaXAoZXZ0KSwgZmFsc2UpO1xuICAgICAgICAgICAgcmV0dXJuIHNlbGYudXRpbHMucHJldmVudERlZmF1bHQoZXZ0KTtcbiAgICAgICAgICBcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICAvLyBGb3JtYXQgb24gc3RhcnRcbiAgICAgICAgdGhpcy5wcm9jZXNzS2V5KCcnLCBmYWxzZSk7XG4gICAgICAgIC8vaW5wdXRFbGVtZW50LmJsdXIoKTtcblxuICAgICAgICB2YXIgb25mb2N1cz1mdW5jdGlvbigpIHtcbiAgICAgICAgICAvLyBXcmFwcGVkIGluIHRpbWVvdXQgc28gdGhhdCB3ZSBjYW4gZ3JhYiBpbnB1dCBzZWxlY3Rpb25cbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIEdyYWIgc2VsZWN0aW9uXG4gICAgICAgICAgICB2YXIgc2VsZWN0aW9uID0gc2VsZi5pbnB1dFNlbGVjdG9yLmdldChzZWxmLmlucHV0RWxlbWVudCk7XG4gICAgICAgICAgICAvLyBDaGFyIGNoZWNrXG4gICAgICAgICAgICB2YXIgaXNBZnRlclN0YXJ0ID0gc2VsZWN0aW9uLmVuZCA+IHNlbGYuZm9jdXMsXG4gICAgICAgICAgICAgICAgaXNGaXJzdENoYXIgID0gc2VsZWN0aW9uLmVuZCA9PT0gMDtcbiAgICAgICAgICAgIC8vIElmIGNsaWNrZWQgaW4gZnJvbnQgb2Ygc3RhcnQsIHJlZm9jdXMgdG8gc3RhcnRcbiAgICAgICAgICAgIGlmIChpc0FmdGVyU3RhcnQgfHwgaXNGaXJzdENoYXIpIHtcbiAgICAgICAgICAgICAgc2VsZi5pbnB1dFNlbGVjdG9yLnNldChzZWxmLmlucHV0RWxlbWVudCwgc2VsZi5mb2N1cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgMCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gQWRkIExpc3RlbmVyc1xuICAgICAgICB0aGlzLnV0aWxzLmFkZExpc3RlbmVyKGlucHV0RWxlbWVudCwgJ2ZvY3VzJywgb25mb2N1cyk7XG4gICAgICAgIHRoaXMudXRpbHMuYWRkTGlzdGVuZXIoaW5wdXRFbGVtZW50LCAnY2xpY2snLCBvbmZvY3VzKTtcbiAgICAgICAgdGhpcy51dGlscy5hZGRMaXN0ZW5lcihpbnB1dEVsZW1lbnQsICd0b3VjaHN0YXJ0Jywgb25mb2N1cyk7XG4gICAgfVxuICAgIFxuICAgIC8vXG4gICAgLy8gQHByaXZhdGVcbiAgICAvLyBVc2luZyB0aGUgcHJvdmlkZWQga2V5IGluZm9ybWF0aW9uLCBhbHRlciBlbCB2YWx1ZS5cbiAgICAvL1xuICAgIHByb2Nlc3NLZXkoY2hhcnMsIGRlbEtleSwgaWdub3JlQ2FyZXQ9ZmFsc2UpIHtcbiAgICAgIC8vIEdldCBjdXJyZW50IHN0YXRlXG4gICAgICBcbiAgICAgIHRoaXMuc2VsZWN0aW9uID0gdGhpcy5pbnB1dFNlbGVjdG9yLmdldCh0aGlzLmlucHV0RWxlbWVudCk7XG4gICAgICB0aGlzLnZhbHVlID0gdGhpcy5pbnB1dEVsZW1lbnQudmFsdWU7XG4gICAgXG4gICAgICAvLyBJbml0IHZhbHVlc1xuICAgICAgdGhpcy5kZWx0YSA9IDA7XG4gICAgXG4gICAgICAvLyBJZiBjaGFycyB3ZXJlIGhpZ2hsaWdodGVkLCB3ZSBuZWVkIHRvIHJlbW92ZSB0aGVtXG4gICAgICBpZiAodGhpcy5zZWxlY3Rpb24uYmVnaW4gIT09IHRoaXMuc2VsZWN0aW9uLmVuZCkge1xuICAgICAgICB0aGlzLmRlbHRhID0gKC0xKSAqIE1hdGguYWJzKHRoaXMuc2VsZWN0aW9uLmJlZ2luIC0gdGhpcy5zZWxlY3Rpb24uZW5kKTtcbiAgICAgICAgdGhpcy52YWx1ZSAgID0gdGhpcy51dGlscy5yZW1vdmVDaGFycyh0aGlzLnZhbHVlLCB0aGlzLnNlbGVjdGlvbi5iZWdpbiwgdGhpcy5zZWxlY3Rpb24uZW5kKTtcbiAgICAgIH1cbiAgICBcbiAgICAgIC8vIERlbGV0ZSBrZXkgKG1vdmVzIG9wcG9zaXRlIGRpcmVjdGlvbilcbiAgICAgIGVsc2UgaWYgKGRlbEtleSAmJiBkZWxLZXkgPT09IDQ2KSB7XG4gICAgICAgIHRoaXMuZGVsZXRlKCk7XG4gICAgXG4gICAgICAvLyBvciBCYWNrc3BhY2UgYW5kIG5vdCBhdCBzdGFydFxuICAgICAgfSBlbHNlIGlmIChkZWxLZXkgJiYgdGhpcy5zZWxlY3Rpb24uYmVnaW4gLSAxID49IDApIHtcbiAgICBcbiAgICAgICAgLy8gQWx3YXlzIGhhdmUgYSBkZWx0YSBvZiBhdCBsZWFzdCAtMSBmb3IgdGhlIGNoYXJhY3RlciBiZWluZyBkZWxldGVkLlxuICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy51dGlscy5yZW1vdmVDaGFycyh0aGlzLnZhbHVlLCB0aGlzLnNlbGVjdGlvbi5lbmQgLTEsIHRoaXMuc2VsZWN0aW9uLmVuZCk7XG4gICAgICAgIHRoaXMuZGVsdGEgLT0gMTtcbiAgICBcbiAgICAgIC8vIG9yIEJhY2tzcGFjZSBhbmQgYXQgc3RhcnQgLSBleGl0XG4gICAgICB9IGVsc2UgaWYgKGRlbEtleSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICBcbiAgICAgIC8vIElmIHRoZSBrZXkgaXMgbm90IGEgZGVsIGtleSwgaXQgc2hvdWxkIGNvbnZlcnQgdG8gYSBzdHJcbiAgICAgIGlmICghZGVsS2V5KSB7XG4gICAgICAgIC8vIEFkZCBjaGFyIGF0IHBvc2l0aW9uIGFuZCBpbmNyZW1lbnQgZGVsdGFcbiAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMudXRpbHMuYWRkQ2hhcnModGhpcy52YWx1ZSwgY2hhcnMsIHRoaXMuc2VsZWN0aW9uLmJlZ2luKTtcbiAgICAgICAgdGhpcy5kZWx0YSArPSBjaGFycy5sZW5ndGg7XG4gICAgICB9XG4gICAgXG4gICAgICAvLyBGb3JtYXQgZWwudmFsdWUgKGFsc28gaGFuZGxlcyB1cGRhdGluZyBjYXJldCBwb3NpdGlvbilcbiAgICAgIHRoaXMuZm9ybWF0VmFsdWUoaWdub3JlQ2FyZXQpO1xuICAgIH07IFxuICAgIFxuICAgIC8vXG4gICAgLy8gQHByaXZhdGVcbiAgICAvLyBEZWxldGVzIHRoZSBjaGFyYWN0ZXIgaW4gZnJvbnQgb2YgaXRcbiAgICAvL1xuICAgIGRlbGV0ZSAoKSB7XG4gICAgICAvLyBBZGp1c3QgZm9jdXMgdG8gbWFrZSBzdXJlIGl0cyBub3Qgb24gYSBmb3JtYXR0ZWQgY2hhclxuICAgICAgd2hpbGUgKHRoaXMucGF0dGVybi5jaGFyc1t0aGlzLnNlbGVjdGlvbi5iZWdpbl0pIHtcbiAgICAgICAgdGhpcy5uZXh0UG9zKCk7XG4gICAgICB9XG4gICAgXG4gICAgICAvLyBBcyBsb25nIGFzIHdlIGFyZSBub3QgYXQgdGhlIGVuZFxuICAgICAgaWYgKHRoaXMuc2VsZWN0aW9uLmJlZ2luIDwgdGhpcy52YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgLy8gV2Ugd2lsbCBzaW11bGF0ZSBhIGRlbGV0ZSBieSBtb3ZpbmcgdGhlIGNhcmV0IHRvIHRoZSBuZXh0IGNoYXJcbiAgICAgICAgLy8gYW5kIHRoZW4gZGVsZXRpbmdcbiAgICAgICAgdGhpcy5uZXh0UG9zKCk7XG4gICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnV0aWxzLnJlbW92ZUNoYXJzKHRoaXMudmFsdWUsIHRoaXMuc2VsZWN0aW9uLmVuZCAtMSwgdGhpcy5zZWxlY3Rpb24uZW5kKTtcbiAgICAgICAgdGhpcy5kZWx0YSA9IC0xO1xuICAgICAgfVxuICAgIH07XG4gICAgXG4gICAgLy9cbiAgICAvLyBAcHJpdmF0ZVxuICAgIC8vIFF1aWNrIGhlbHBlciBtZXRob2QgdG8gbW92ZSB0aGUgY2FyZXQgdG8gdGhlIG5leHQgcG9zXG4gICAgLy9cbiAgICBuZXh0UG9zKCkge1xuICAgICAgdGhpcy5zZWxlY3Rpb24uZW5kICsrO1xuICAgICAgdGhpcy5zZWxlY3Rpb24uYmVnaW4gKys7XG4gICAgfTtcbiAgICBcbiAgICAvL1xuICAgIC8vIEBwcml2YXRlXG4gICAgLy8gQWx0ZXIgZWxlbWVudCB2YWx1ZSB0byBkaXNwbGF5IGNoYXJhY3RlcnMgbWF0Y2hpbmcgdGhlIHByb3ZpZGVkXG4gICAgLy8gaW5zdGFuY2UgcGF0dGVybi4gQWxzbyByZXNwb25zaWJsZSBmb3IgdXBkYXRpbmdcbiAgICAvL1xuICAgIGZvcm1hdFZhbHVlKGlnbm9yZUNhcmV0KSB7XG4gICAgICAvLyBTZXQgY2FyZXQgcG9zXG4gICAgICB0aGlzLm5ld1BvcyA9IHRoaXMuc2VsZWN0aW9uLmVuZCArIHRoaXMuZGVsdGE7XG4gICAgXG4gICAgICAvLyBSZW1vdmUgYWxsIGZvcm1hdHRlZCBjaGFycyBmcm9tIHZhbFxuICAgICAgdGhpcy5yZW1vdmVDaGFycygpO1xuICAgIFxuICAgICAgLy8gVmFsaWRhdGUgaW5wdXRzXG4gICAgICB0aGlzLnZhbGlkYXRlSW5wdHMoKTtcbiAgICBcbiAgICAgIC8vIEFkZCBmb3JtYXR0ZWQgY2hhcmFjdGVyc1xuICAgICAgdGhpcy5hZGRDaGFycygpO1xuICAgIFxuICAgICAgLy8gU2V0IHZhbHVlIGFuZCBhZGhlcmUgdG8gbWF4TGVuZ3RoXG4gICAgICB0aGlzLmlucHV0RWxlbWVudC52YWx1ZSA9IHRoaXMudmFsdWUuc3Vic3RyKDAsIHRoaXMucGF0dGVybi5tTGVuZ3RoKTtcbiAgICBcbiAgICAgIC8vIFNldCBuZXcgY2FyZXQgcG9zaXRpb25cbiAgICAgIGlmICgodHlwZW9mIGlnbm9yZUNhcmV0KSA9PT0gJ3VuZGVmaW5lZCcgfHwgaWdub3JlQ2FyZXQgPT09IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuaW5wdXRTZWxlY3Rvci5zZXQodGhpcy5pbnB1dEVsZW1lbnQsIHRoaXMubmV3UG9zKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIFxuICAgIC8vXG4gICAgLy8gQHByaXZhdGVcbiAgICAvLyBSZW1vdmUgYWxsIGZvcm1hdHRlZCBiZWZvcmUgYW5kIGFmdGVyIGEgc3BlY2lmaWVkIHBvc1xuICAgIC8vXG4gICAgcmVtb3ZlQ2hhcnMoKSB7XG4gICAgICAvLyBEZWx0YSBzaG91bGRuJ3QgaW5jbHVkZSBwbGFjZWhvbGRlcnNcbiAgICAgIGlmICh0aGlzLnNlbGVjdGlvbi5lbmQgPiB0aGlzLmZvY3VzKSB7XG4gICAgICAgIHRoaXMuZGVsdGEgKz0gdGhpcy5zZWxlY3Rpb24uZW5kIC0gdGhpcy5mb2N1cztcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLy8gQWNjb3VudCBmb3Igc2hpZnRzIGR1cmluZyByZW1vdmFsXG4gICAgICB2YXIgc2hpZnQgPSAwO1xuICAgIFxuICAgICAgLy8gTG9vcCB0aHJvdWdoIGFsbCBwb3NzaWJsZSBjaGFyIHBvc2l0aW9uc1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPD0gdGhpcy5wYXR0ZXJuLm1MZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBHZXQgdHJhbnNmb3JtZWQgcG9zaXRpb25cbiAgICAgICAgdmFyIGN1ckNoYXIgPSB0aGlzLnBhdHRlcm4uY2hhcnNbaV0sXG4gICAgICAgICAgICBjdXJIbGRyID0gdGhpcy5obGRyc1tpXSxcbiAgICAgICAgICAgIHBvcyA9IGkgKyBzaGlmdCxcbiAgICAgICAgICAgIHZhbDtcbiAgICBcbiAgICAgICAgLy8gSWYgYWZ0ZXIgc2VsZWN0aW9uIHdlIG5lZWQgdG8gYWNjb3VudCBmb3IgZGVsdGFcbiAgICAgICAgcG9zID0gKGkgPj0gdGhpcy5zZWxlY3Rpb24uYmVnaW4pID8gcG9zICsgdGhpcy5kZWx0YSA6IHBvcztcbiAgICAgICAgdmFsID0gdGhpcy52YWx1ZS5jaGFyQXQocG9zKTtcbiAgICAgICAgLy8gUmVtb3ZlIGNoYXIgYW5kIGFjY291bnQgZm9yIHNoaWZ0XG4gICAgICAgIGlmIChjdXJDaGFyICYmIGN1ckNoYXIgPT09IHZhbCB8fCBjdXJIbGRyICYmIGN1ckhsZHIgPT09IHZhbCkge1xuICAgICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnV0aWxzLnJlbW92ZUNoYXJzKHRoaXMudmFsdWUsIHBvcywgcG9zICsgMSk7XG4gICAgICAgICAgc2hpZnQtLTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIFxuICAgICAgLy8gQWxsIGhsZHJzIHNob3VsZCBiZSByZW1vdmVkIG5vd1xuICAgICAgdGhpcy5obGRycyA9IHt9O1xuICAgIFxuICAgICAgLy8gU2V0IGZvY3VzIHRvIGxhc3QgY2hhcmFjdGVyXG4gICAgICB0aGlzLmZvY3VzID0gdGhpcy52YWx1ZS5sZW5ndGg7XG4gICAgfTtcbiAgICBcbiAgICAvL1xuICAgIC8vIEBwcml2YXRlXG4gICAgLy8gTWFrZSBzdXJlIGFsbCBpbnB0cyBhcmUgdmFsaWQsIGVsc2UgcmVtb3ZlIGFuZCB1cGRhdGUgZGVsdGFcbiAgICAvL1xuICAgIHZhbGlkYXRlSW5wdHMoKSB7XG4gICAgICAvLyBMb29wIG92ZXIgZWFjaCBjaGFyIGFuZCB2YWxpZGF0ZVxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIEdldCBjaGFyIGlucHQgdHlwZVxuICAgICAgICB2YXIgaW5wdFR5cGUgPSB0aGlzLnBhdHRlcm4uaW5wdXRzW2ldO1xuICAgIFxuICAgICAgICAvLyBDaGVja3NcbiAgICAgICAgdmFyIGlzQmFkVHlwZSA9ICF0aGlzLmlucHRSZWdzW2lucHRUeXBlXSxcbiAgICAgICAgICAgIGlzSW52YWxpZCA9ICFpc0JhZFR5cGUgJiYgIXRoaXMuaW5wdFJlZ3NbaW5wdFR5cGVdLnRlc3QodGhpcy52YWx1ZS5jaGFyQXQoaSkpLFxuICAgICAgICAgICAgaW5Cb3VuZHMgID0gdGhpcy5wYXR0ZXJuLmlucHV0c1tpXTtcbiAgICBcbiAgICAgICAgLy8gUmVtb3ZlIGlmIGluY29ycmVjdCBhbmQgaW5ib3VuZHNcbiAgICAgICAgaWYgKChpc0JhZFR5cGUgfHwgaXNJbnZhbGlkKSAmJiBpbkJvdW5kcykge1xuICAgICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnV0aWxzLnJlbW92ZUNoYXJzKHRoaXMudmFsdWUsIGksIGkgKyAxKTtcbiAgICAgICAgICB0aGlzLmZvY3VzU3RhcnQtLTtcbiAgICAgICAgICB0aGlzLm5ld1Bvcy0tO1xuICAgICAgICAgIHRoaXMuZGVsdGEtLTtcbiAgICAgICAgICBpLS07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIFxuICAgIC8vXG4gICAgLy8gQHByaXZhdGVcbiAgICAvLyBMb29wIG92ZXIgdmFsIGFuZCBhZGQgZm9ybWF0dGVkIGNoYXJzIGFzIG5lY2Vzc2FyeVxuICAgIC8vXG4gICAgYWRkQ2hhcnMoKSB7XG4gICAgICAgIC8vIExvb3Agb3ZlciBhbGwgcG9zc2libGUgY2hhcmFjdGVyc1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8PSB0aGlzLnBhdHRlcm4ubUxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKCF0aGlzLnZhbHVlLmNoYXJBdChpKSkge1xuICAgICAgICAgICAgLy8gQWRkIHBsYWNlaG9sZGVyIGF0IHBvc1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMudXRpbHMuYWRkQ2hhcnModGhpcy52YWx1ZSwgdGhpcy5wbGFjZWhvbGRlciwgaSk7XG4gICAgICAgICAgICB0aGlzLmhsZHJzW2ldID0gdGhpcy5wbGFjZWhvbGRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5hZGRDaGFyKGkpO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIC8vIEFkanVzdCBmb2N1cyB0byBtYWtlIHN1cmUgaXRzIG5vdCBvbiBhIGZvcm1hdHRlZCBjaGFyXG4gICAgICAgIHdoaWxlICh0aGlzLnBhdHRlcm4uY2hhcnNbdGhpcy5mb2N1c10pIHtcbiAgICAgICAgICB0aGlzLmZvY3VzKys7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFxuICAgIC8vXG4gICAgLy8gQHByaXZhdGVcbiAgICAvLyBBZGQgZm9ybWF0dHRlZCBjaGFyIGF0IHBvc2l0aW9uXG4gICAgLy9cbiAgICBhZGRDaGFyKGkpIHtcbiAgICAgIC8vIElmIGNoYXIgZXhpc3RzIGF0IHBvc2l0aW9uXG4gICAgICB2YXIgY2hyID0gdGhpcy5wYXR0ZXJuLmNoYXJzW2ldO1xuICAgICAgaWYgKCFjaHIpIHsgcmV0dXJuIHRydWU7IH1cbiAgICBcbiAgICAgIC8vIElmIGNoYXJzIGFyZSBhZGRlZCBpbiBiZXR3ZWVuIHRoZSBvbGQgcG9zIGFuZCBuZXcgcG9zXG4gICAgICAvLyB3ZSBuZWVkIHRvIGluY3JlbWVudCBwb3MgYW5kIGRlbHRhXG4gICAgICBpZiAodGhpcy51dGlscy5pc0JldHdlZW4oaSwgW3RoaXMuc2VsZWN0aW9uLmJlZ2luIC0xLCB0aGlzLm5ld1BvcyArMV0pKSB7XG4gICAgICAgIHRoaXMubmV3UG9zICsrO1xuICAgICAgICB0aGlzLmRlbHRhICsrO1xuICAgICAgfVxuICAgIFxuICAgICAgLy8gSWYgY2hhcmFjdGVyIGFkZGVkIGJlZm9yZSBmb2N1cywgaW5jclxuICAgICAgaWYgKGkgPD0gdGhpcy5mb2N1cykge1xuICAgICAgICB0aGlzLmZvY3VzKys7XG4gICAgICB9XG4gICAgXG4gICAgICAvLyBVcGRhdGVob2xkZXJcbiAgICAgIGlmICh0aGlzLmhsZHJzW2ldKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmhsZHJzW2ldO1xuICAgICAgICB0aGlzLmhsZHJzW2kgKyAxXSA9IHRoaXMucGxhY2Vob2xkZXI7XG4gICAgICB9XG4gICAgXG4gICAgICAvLyBVcGRhdGUgdmFsdWVcbiAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnV0aWxzLmFkZENoYXJzKHRoaXMudmFsdWUsIGNociwgaSk7XG4gICAgfTtcbiAgICBcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
