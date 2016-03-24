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
            })();
            exports_1("AiFormatter", AiFormatter);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlJbnB1dC9BaUZvcm1hdHRlci50cyJdLCJuYW1lcyI6WyJBaUZvcm1hdHRlclBhdHRlcm5JbmZvIiwiQWlGb3JtYXR0ZXJQYXR0ZXJuSW5mby5jb25zdHJ1Y3RvciIsIkFpRm9ybWF0dGVyUGF0dGVyblBhcnNlciIsIkFpRm9ybWF0dGVyUGF0dGVyblBhcnNlci5jb25zdHJ1Y3RvciIsIkFpRm9ybWF0dGVyUGF0dGVyblBhcnNlci5nZXRNYXRjaGVzIiwiQWlGb3JtYXR0ZXJQYXR0ZXJuUGFyc2VyLnBhcnNlIiwiQWlGb3JtYXR0ZXJTZWxlY3Rpb24iLCJBaUZvcm1hdHRlclNlbGVjdGlvbi5jb25zdHJ1Y3RvciIsIkFpRm9ybWF0dGVySW5wdXRTZWxlY3RvciIsIkFpRm9ybWF0dGVySW5wdXRTZWxlY3Rvci5jb25zdHJ1Y3RvciIsIkFpRm9ybWF0dGVySW5wdXRTZWxlY3Rvci5nZXQiLCJBaUZvcm1hdHRlcklucHV0U2VsZWN0b3Iuc2V0IiwiQWlGb3JtYXR0ZXJVdGlscyIsIkFpRm9ybWF0dGVyVXRpbHMuY29uc3RydWN0b3IiLCJBaUZvcm1hdHRlclV0aWxzLmFkZENoYXJzIiwiQWlGb3JtYXR0ZXJVdGlscy5yZW1vdmVDaGFycyIsIkFpRm9ybWF0dGVyVXRpbHMuaXNCZXR3ZWVuIiwiQWlGb3JtYXR0ZXJVdGlscy5hZGRMaXN0ZW5lciIsIkFpRm9ybWF0dGVyVXRpbHMucHJldmVudERlZmF1bHQiLCJBaUZvcm1hdHRlclV0aWxzLmdldENsaXAiLCJBaUZvcm1hdHRlclV0aWxzLmdldE1hdGNoaW5nS2V5IiwiQWlGb3JtYXR0ZXJVdGlscy5pc0RlbEtleURvd24iLCJBaUZvcm1hdHRlclV0aWxzLmlzRGVsS2V5UHJlc3MiLCJBaUZvcm1hdHRlclV0aWxzLmlzU3BlY2lhbEtleVByZXNzIiwiQWlGb3JtYXR0ZXJVdGlscy5pc01vZGlmaWVyIiwiQWlGb3JtYXR0ZXIiLCJBaUZvcm1hdHRlci5jb25zdHJ1Y3RvciIsIkFpRm9ybWF0dGVyLnNldFZhbHVlIiwiQWlGb3JtYXR0ZXIucHJvY2Vzc0tleSIsIkFpRm9ybWF0dGVyLmRlbGV0ZSIsIkFpRm9ybWF0dGVyLm5leHRQb3MiLCJBaUZvcm1hdHRlci5mb3JtYXRWYWx1ZSIsIkFpRm9ybWF0dGVyLnJlbW92ZUNoYXJzIiwiQWlGb3JtYXR0ZXIudmFsaWRhdGVJbnB0cyIsIkFpRm9ybWF0dGVyLmFkZENoYXJzIiwiQWlGb3JtYXR0ZXIuYWRkQ2hhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7WUFBQTtnQkFBQUE7b0JBQ0lDLFdBQU1BLEdBQUNBLEVBQUVBLENBQUNBO29CQUNWQSxVQUFLQSxHQUFDQSxFQUFFQSxDQUFDQTtnQkFFYkEsQ0FBQ0E7Z0JBQURELDZCQUFDQTtZQUFEQSxDQUpBLEFBSUNBLElBQUE7WUFFRDtnQkFBQUU7Z0JBdUNBQyxDQUFDQTtnQkFuQ0dELDZDQUFVQSxHQUFWQSxVQUFXQSxPQUFPQTtvQkFDWkUsNEJBQTRCQTtvQkFDNUJBLElBQUlBLE9BQU9BLEdBQUdBLEVBQUVBLEVBQUNBLEtBQUtBLENBQUNBO29CQUN2QkEsT0FBTUEsS0FBS0EsR0FBR0Esd0JBQXdCQSxDQUFDQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxFQUFFQSxDQUFDQTt3QkFDNURBLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO29CQUN0QkEsQ0FBQ0E7b0JBQ0RBLE1BQU1BLENBQUNBLE9BQU9BLENBQUNBO2dCQUNyQkEsQ0FBQ0E7Z0JBRURGLHdDQUFLQSxHQUFMQSxVQUFNQSxPQUFPQTtvQkFDVEcsSUFBSUEsSUFBSUEsR0FBd0JBLElBQUlBLHNCQUFzQkEsRUFBRUEsQ0FBQ0E7b0JBQzdEQSxJQUFJQSxPQUFPQSxHQUFHQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxPQUFPQSxDQUFDQSxFQUFFQSxPQUFPQSxHQUFHQSxPQUFPQSxDQUFDQSxNQUFNQSxDQUFDQTtvQkFDakVBLElBQUlBLE1BQU1BLEdBQUdBLENBQUNBLEVBQUNBLE1BQU1B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QUlBLENBQUNBLFNBQVNBLENBQUNBLEdBQUdBLEdBQUdBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBO3dCQUNwQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsSUFBSUEsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsR0FBR0EsR0FBR0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0E7b0JBQ2hEQSxDQUFDQTtvQkFFREEsb0NBQW9DQTtvQkFDcENBLElBQUlBLEtBQUtBLEdBQUdBLENBQUNBLENBQUNBO29CQUVkQSwyQ0FBMkNBO29CQUMzQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsSUFBSUEsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsT0FBT0EsRUFBRUEsQ0FBQ0EsRUFBRUEsRUFBRUEsQ0FBQ0E7d0JBQy9DQSwyQkFBMkJBO3dCQUMzQkEsSUFBSUEsT0FBT0EsR0FBR0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsRUFDL0JBLE9BQU9BLEdBQUdBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLEVBQ3ZCQSxHQUFHQSxHQUFHQSxDQUFDQSxHQUFHQSxLQUFLQSxFQUNmQSxHQUFHQSxDQUFDQTt3QkFFUkEsa0RBQWtEQTt3QkFDbERBLEdBQUdBLEdBQUdBLENBQUNBLENBQUNBLElBQUlBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLEtBQUtBLENBQUNBLEdBQUdBLEdBQUdBLEdBQUdBLElBQUlBLENBQUNBLEtBQUtBLEdBQUdBLEdBQUdBLENBQUNBO3dCQUMzREEsR0FBR0EsR0FBR0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7d0JBQzdCQSxvQ0FBb0NBO3dCQUNwQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsT0FBT0EsSUFBSUEsT0FBT0EsS0FBS0EsR0FBR0EsSUFBSUEsT0FBT0EsSUFBSUEsT0FBT0EsS0FBS0EsR0FB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RUEsSUFBSUEsQ0FBQ0EsTUFBTUEsRUFBR0EsQ0FBQ0E7d0JBQ2ZBLElBQUlBLENBQUNBLEtBQUtBLEVBQUdBLENBQUNBO29CQUNoQkEsQ0FBQ0E7b0JBRURBLHdDQUF3Q0E7b0JBQ3hDQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxJQUFJQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQTt3QkFDcEJBLElBQUlBLENBQUNBLEtBQUtBLEVBQUVBLENBQUNBO29CQUNmQSxDQUFDQTtvQkFFREEsZUFBZUE7b0JBQ2ZBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO3dCQUNsQkEsT0FBT0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7d0JBQ3JCQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxHQUFHQSxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQTtvQkFDdkNBLENBQUNBO29CQUVEQSxlQUFlQTtvQkFDZkEsSUFBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsRUFBRUEsR0FBR0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ3ZEQSxDQUFDQTs7Z0JBRUxWLGtCQUFDQTtZQUFEQSxDQTNUQSxBQTJUQ0EsSUFBQTtZQTNURCxxQ0EyVEMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL0FpSW5wdXQvQWlGb3JtYXR0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBaUZvcm1hdHRlclBhdHRlcm5JbmZve1xuICAgIGlucHV0cz1bXTtcbiAgICBjaGFycz1bXTtcbiAgICBtTGVuZ3RoOm51bWJlcjtcbn1cblxuY2xhc3MgQWlGb3JtYXR0ZXJQYXR0ZXJuUGFyc2Vye1xuICAgIHN0YXRpYyBERUxJTV9TSVpFOm51bWJlciA9IDQ7XG4gICAgc3RhdGljIHJlZ2V4cDpSZWdFeHAgID0gbmV3IFJlZ0V4cCgne3soW159XSspfX0nLCAnZycpOyBcbiAgICBcbiAgICBnZXRNYXRjaGVzKHBhdHRlcm4pe1xuICAgICAgICAgIC8vIFBvcHVsYXRlIGFycmF5IG9mIG1hdGNoZXNcbiAgICAgICAgICB2YXIgbWF0Y2hlcyA9IFtdLG1hdGNoO1xuICAgICAgICAgIHdoaWxlKG1hdGNoID0gQWlGb3JtYXR0ZXJQYXR0ZXJuUGFyc2VyLnJlZ2V4cC5leGVjKHBhdHRlcm4pKSB7XG4gICAgICAgICAgICBtYXRjaGVzLnB1c2gobWF0Y2gpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbWF0Y2hlcztcbiAgICB9XG4gICAgXG4gICAgcGFyc2UocGF0dGVybik6QWlGb3JtYXR0ZXJQYXR0ZXJuSW5mb3tcbiAgICAgICAgdmFyIGluZm86QWlGb3JtYXR0ZXJQYXR0ZXJuSW5mbz1uZXcgQWlGb3JtYXR0ZXJQYXR0ZXJuSW5mbygpO1xuICAgICAgICB2YXIgbWF0Y2hlcyA9IHRoaXMuZ2V0TWF0Y2hlcyhwYXR0ZXJuKSwgcExlbmd0aCA9IHBhdHRlcm4ubGVuZ3RoO1xuICAgICAgICB2YXIgbUNvdW50ID0gMCxpQ291bnQgPSAwLGkgPSAwO1xuXG4gICAgICAgIHZhciBwcm9jZXNzTWF0Y2ggPSBmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgICAgdmFyIHZhbExlbmd0aCA9IHZhbC5sZW5ndGg7XG4gICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB2YWxMZW5ndGg7IGorKykge1xuICAgICAgICAgICAgaW5mby5pbnB1dHNbaUNvdW50XSA9IHZhbC5jaGFyQXQoaik7XG4gICAgICAgICAgICBpQ291bnQrKztcbiAgICAgICAgICB9XG4gICAgICAgICAgbUNvdW50ICsrO1xuICAgICAgICAgIGkgKz0gKHZhbC5sZW5ndGggKyBBaUZvcm1hdHRlclBhdHRlcm5QYXJzZXIuREVMSU1fU0laRSAtIDEpO1xuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgZm9yIChpOyBpIDwgcExlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKG1Db3VudCA8IG1hdGNoZXMubGVuZ3RoICYmIGkgPT09IG1hdGNoZXNbbUNvdW50XS5pbmRleCkge1xuICAgICAgICAgICAgcHJvY2Vzc01hdGNoKG1hdGNoZXNbbUNvdW50XVsxXSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGluZm8uY2hhcnNbaSAtIChtQ291bnQgKiBBaUZvcm1hdHRlclBhdHRlcm5QYXJzZXIuREVMSU1fU0laRSldID0gcGF0dGVybi5jaGFyQXQoaSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpbmZvLm1MZW5ndGggPSBpIC0gKG1Db3VudCAqIEFpRm9ybWF0dGVyUGF0dGVyblBhcnNlci5ERUxJTV9TSVpFKTtcbiAgICAgICAgcmV0dXJuIGluZm87ICAgIFxuICAgIH1cbn1cblxuY2xhc3MgQWlGb3JtYXR0ZXJTZWxlY3Rpb257XG4gICAgYmVnaW46bnVtYmVyO1xuICAgIGVuZDpudW1iZXI7XG4gICAgY29uc3RydWN0b3IoYmVnaW46bnVtYmVyLGVuZDpudW1iZXIpIHsgIFxuICAgICAgdGhpcy5iZWdpbj1iZWdpbjtcbiAgICAgIHRoaXMuZW5kPWVuZDtcbiAgICB9XG59XG5cbmNsYXNzIEFpRm9ybWF0dGVySW5wdXRTZWxlY3RvciB7XG4gICAgLy9cbiAgICAvLyBHZXQgYmVnaW4gYW5kIGVuZCBwb3NpdGlvbnMgb2Ygc2VsZWN0ZWQgaW5wdXQuIFJldHVybiAwJ3NcbiAgICAvLyBpZiB0aGVyZSBpcyBubyBzZWxlY3RpaW9uIGRhdGFcbiAgICAvL1xuICAgIGdldChlbCk6QWlGb3JtYXR0ZXJTZWxlY3Rpb24ge1xuXG4gICAgICAvLyBJZiBub3JtYWwgYnJvd3NlciByZXR1cm4gd2l0aCByZXN1bHRcbiAgICAgIGlmICh0eXBlb2YgZWwuc2VsZWN0aW9uU3RhcnQgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBBaUZvcm1hdHRlclNlbGVjdGlvbihlbC5zZWxlY3Rpb25TdGFydCxlbC5zZWxlY3Rpb25FbmQpO1xuICAgICAgfVxuICAgIFxuICAgICAgdHJ5e1xuICAgICAgICAvLyBVaC1PaC4gV2UgbXVzdCBiZSBJRS4gRnVuIHdpdGggVGV4dFJhbmdlISFcbiAgICAgICAgY29uc3QgZG9jID0gZG9jdW1lbnQgYXMgYW55O1xuICAgICAgICB2YXIgcmFuZ2UgPSBkb2Muc2VsZWN0aW9uLmNyZWF0ZVJhbmdlKCk7XG4gICAgICAgIC8vIERldGVybWluZSBpZiB0aGVyZSBpcyBhIHNlbGVjdGlvblxuICAgICAgICBpZiAocmFuZ2UgJiYgcmFuZ2UucGFyZW50RWxlbWVudCgpID09PSBlbCkge1xuICAgICAgICAgIHZhciBpbnB1dFJhbmdlID0gZWwuY3JlYXRlVGV4dFJhbmdlKCksXG4gICAgICAgICAgICAgIGVuZFJhbmdlICAgPSBlbC5jcmVhdGVUZXh0UmFuZ2UoKSxcbiAgICAgICAgICAgICAgbGVuZ3RoICAgICA9IGVsLnZhbHVlLmxlbmd0aDtcbiAgICAgIFxuICAgICAgICAgIC8vIENyZWF0ZSBhIHdvcmtpbmcgVGV4dFJhbmdlIGZvciB0aGUgaW5wdXQgc2VsZWN0aW9uXG4gICAgICAgICAgaW5wdXRSYW5nZS5tb3ZlVG9Cb29rbWFyayhyYW5nZS5nZXRCb29rbWFyaygpKTtcbiAgICAgIFxuICAgICAgICAgIC8vIE1vdmUgZW5kUmFuZ2UgYmVnaW4gcG9zIHRvIGVuZCBwb3MgKGhlbmNlIGVuZFJhbmdlKVxuICAgICAgICAgIGVuZFJhbmdlLmNvbGxhcHNlKGZhbHNlKTtcbiAgICAgICAgICBcbiAgICAgICAgICAvLyBJZiB3ZSBhcmUgYXQgdGhlIHZlcnkgZW5kIG9mIHRoZSBpbnB1dCwgYmVnaW4gYW5kIGVuZFxuICAgICAgICAgIC8vIG11c3QgYm90aCBiZSB0aGUgbGVuZ3RoIG9mIHRoZSBlbC52YWx1ZVxuICAgICAgICAgIGlmIChpbnB1dFJhbmdlLmNvbXBhcmVFbmRQb2ludHMoJ1N0YXJ0VG9FbmQnLCBlbmRSYW5nZSkgPiAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIHsgYmVnaW46IGxlbmd0aCwgZW5kOiBsZW5ndGggfTtcbiAgICAgICAgICB9XG4gICAgICBcbiAgICAgICAgICAvLyBOb3RlOiBtb3ZlU3RhcnQgdXN1YWxseSByZXR1cm5zIHRoZSB1bml0cyBtb3ZlZCwgd2hpY2ggXG4gICAgICAgICAgLy8gb25lIG1heSB0aGluayBpcyAtbGVuZ3RoLCBob3dldmVyLCBpdCB3aWxsIHN0b3Agd2hlbiBpdFxuICAgICAgICAgIC8vIGdldHMgdG8gdGhlIGJlZ2luIG9mIHRoZSByYW5nZSwgdGh1cyBnaXZpbmcgdXMgdGhlXG4gICAgICAgICAgLy8gbmVnYXRpdmUgdmFsdWUgb2YgdGhlIHBvcy5cbiAgICAgICAgICByZXR1cm4gbmV3IEFpRm9ybWF0dGVyU2VsZWN0aW9uKFxuICAgICAgICAgICAgLWlucHV0UmFuZ2UubW92ZVN0YXJ0KCdjaGFyYWN0ZXInLCAtbGVuZ3RoKSxcbiAgICAgICAgICAgIC1pbnB1dFJhbmdlLm1vdmVFbmQoJ2NoYXJhY3RlcicsIC1sZW5ndGgpKVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgfWNhdGNoKGUpe31cbiAgICBcbiAgICAgIC8vUmV0dXJuIDAncyBvbiBubyBzZWxlY3Rpb24gZGF0YVxuICAgICAgcmV0dXJuIG5ldyBBaUZvcm1hdHRlclNlbGVjdGlvbigwLDApO1xuICAgIH07ICBcbiAgICBcbiAgICBcbiAgICAvL1xuICAgIC8vIFNldCB0aGUgY2FyZXQgcG9zaXRpb24gYXQgYSBzcGVjaWZpZWQgbG9jYXRpb25cbiAgICAvL1xuICAgIHNldChlbCwgcG9zKSB7XG4gICAgICAvLyBOb3JtYWxpemUgcG9zXG4gICAgICBpZiAodHlwZW9mIHBvcyAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcG9zID0geyBiZWdpbjogcG9zLCBlbmQ6IHBvcyB9O1xuICAgICAgfVxuICAgIFxuICAgICAgLy8gSWYgbm9ybWFsIGJyb3dzZXJcbiAgICAgIGlmIChlbC5zZXRTZWxlY3Rpb25SYW5nZSkge1xuICAgICAgICBlbC5mb2N1cygpO1xuICAgICAgICBlbC5zZXRTZWxlY3Rpb25SYW5nZShwb3MuYmVnaW4sIHBvcy5lbmQpO1xuICAgIFxuICAgICAgLy8gSUUgPSBUZXh0UmFuZ2UgZnVuXG4gICAgICB9IGVsc2UgaWYgKGVsLmNyZWF0ZVRleHRSYW5nZSkge1xuICAgICAgICB2YXIgcmFuZ2UgPSBlbC5jcmVhdGVUZXh0UmFuZ2UoKTtcbiAgICAgICAgcmFuZ2UuY29sbGFwc2UodHJ1ZSk7XG4gICAgICAgIHJhbmdlLm1vdmVFbmQoJ2NoYXJhY3RlcicsIHBvcy5lbmQpO1xuICAgICAgICByYW5nZS5tb3ZlU3RhcnQoJ2NoYXJhY3RlcicsIHBvcy5iZWdpbik7XG4gICAgICAgIHJhbmdlLnNlbGVjdCgpO1xuICAgICAgfVxuICAgIH07XG4gICAgXG4gICAgXG59XG5cbmNsYXNzIEFpRm9ybWF0dGVyVXRpbHMge1xuICAgIC8vXG4gICAgLy8gQWRkIGEgZ2l2ZW4gY2hhcmFjdGVyIHRvIGEgc3RyaW5nIGF0IGEgZGVmaW5lZCBwb3NcbiAgICAvL1xuICAgIGFkZENoYXJzKHN0ciwgY2hhcnMsIHBvcykge1xuICAgICAgcmV0dXJuIHN0ci5zdWJzdHIoMCwgcG9zKSArIGNoYXJzICsgc3RyLnN1YnN0cihwb3MsIHN0ci5sZW5ndGgpO1xuICAgIH07IFxuICAgIFxuICAgIC8vXG4gICAgLy8gUmVtb3ZlIGEgc3BhbiBvZiBjaGFyYWN0ZXJzXG4gICAgLy9cbiAgICByZW1vdmVDaGFycyhzdHIsIHN0YXJ0LCBlbmQpIHtcbiAgICAgIHJldHVybiBzdHIuc3Vic3RyKDAsIHN0YXJ0KSArIHN0ci5zdWJzdHIoZW5kLCBzdHIubGVuZ3RoKTtcbiAgICB9O1xuICAgIFxuICAgIC8vXG4gICAgLy8gUmV0dXJuIHRydWUvZmFsc2UgaXMgbnVtIGZhbHNlIGJldHdlZW4gYm91bmRzXG4gICAgLy9cbiAgICBpc0JldHdlZW4obnVtLCBib3VuZHMpIHtcbiAgICAgIGJvdW5kcy5zb3J0KGZ1bmN0aW9uKGEsYikgeyByZXR1cm4gYS1iOyB9KTtcbiAgICAgIHJldHVybiAobnVtID4gYm91bmRzWzBdICYmIG51bSA8IGJvdW5kc1sxXSk7XG4gICAgfTtcbiAgICBcbiAgICAvL1xuICAgIC8vIEhlbHBlciBtZXRob2QgZm9yIGNyb3NzIGJyb3dzZXIgZXZlbnQgbGlzdGVuZXJzXG4gICAgLy9cbiAgICBhZGRMaXN0ZW5lcihlbCwgZXZ0LCBoYW5kbGVyKSB7XG4gICAgICByZXR1cm4gKHR5cGVvZiBlbC5hZGRFdmVudExpc3RlbmVyICE9PSAndW5kZWZpbmVkJylcbiAgICAgICAgPyBlbC5hZGRFdmVudExpc3RlbmVyKGV2dCwgaGFuZGxlciwgZmFsc2UpXG4gICAgICAgIDogZWwuYXR0YWNoRXZlbnQoJ29uJyArIGV2dCwgaGFuZGxlcik7XG4gICAgfTtcbiAgICBcbiAgICAvL1xuICAgIC8vIEhlbHBlciBtZXRob2QgZm9yIGNyb3NzIGJyb3dzZXIgaW1wbGVtZW50YXRpb24gb2YgcHJldmVudERlZmF1bHRcbiAgICAvL1xuICAgIHByZXZlbnREZWZhdWx0KGV2dCkge1xuICAgICAgcmV0dXJuIChldnQucHJldmVudERlZmF1bHQpID8gZXZ0LnByZXZlbnREZWZhdWx0KCkgOiAoZXZ0LnJldHVyblZhbHVlID0gZmFsc2UpO1xuICAgIH07XG4gICAgXG4gICAgLy9cbiAgICAvLyBIZWxwZXIgbWV0aG9kIGZvciBjcm9zcyBicm93c2VyIGltcGxlbWVudGF0aW9uIGZvciBncmFiYmluZ1xuICAgIC8vIGNsaXBib2FyZCBkYXRhXG4gICAgLy9cbiAgICBnZXRDbGlwKGV2dCkge1xuICAgICAgdmFyIGV2ZW50OmFueT1ldnQ7XG4gICAgICB2YXIgd2luOmFueT13aW5kb3c7XG4gICAgICBpZiAoZXZlbnQuY2xpcGJvYXJkRGF0YSkgeyByZXR1cm4gZXZlbnQuY2xpcGJvYXJkRGF0YS5nZXREYXRhKCdUZXh0Jyk7IH1cbiAgICAgIGlmICh3aW4uY2xpcGJvYXJkRGF0YSkgeyByZXR1cm4gd2luLmNsaXBib2FyZERhdGEuZ2V0RGF0YSgnVGV4dCcpOyB9XG4gICAgfTtcbiAgICBcbiAgICAvL1xuICAgIC8vIExvb3Agb3ZlciBvYmplY3QgYW5kIGNoZWNraW5nIGZvciBtYXRjaGluZyBwcm9wZXJ0aWVzXG4gICAgLy9cbiAgICBnZXRNYXRjaGluZ0tleSh3aGljaCwga2V5Q29kZSwga2V5cykge1xuICAgICAgLy8gTG9vcCBvdmVyIGFuZCByZXR1cm4gaWYgbWF0Y2hlZC5cbiAgICAgIGZvciAodmFyIGsgaW4ga2V5cykge1xuICAgICAgICB2YXIga2V5ID0ga2V5c1trXTtcbiAgICAgICAgaWYgKHdoaWNoID09PSBrZXkud2hpY2ggJiYga2V5Q29kZSA9PT0ga2V5LmtleUNvZGUpIHtcbiAgICAgICAgICByZXR1cm4gaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgXG4gICAgLy9cbiAgICAvLyBSZXR1cm5zIHRydWUvZmFsc2UgaWYgayBpcyBhIGRlbCBrZXlEb3duXG4gICAgLy9cbiAgICBpc0RlbEtleURvd24od2hpY2gsIGtleUNvZGUpIHtcbiAgICAgIHZhciBrZXlzID0ge1xuICAgICAgICAnYmFja3NwYWNlJzogeyAnd2hpY2gnOiA4LCAna2V5Q29kZSc6IDggfSxcbiAgICAgICAgJ2RlbGV0ZSc6IHsgJ3doaWNoJzogNDYsICdrZXlDb2RlJzogNDYgfVxuICAgICAgfTtcbiAgICBcbiAgICAgIHJldHVybiB0aGlzLmdldE1hdGNoaW5nS2V5KHdoaWNoLCBrZXlDb2RlLCBrZXlzKTtcbiAgICB9O1xuICAgIFxuICAgIC8vXG4gICAgLy8gUmV0dXJucyB0cnVlL2ZhbHNlIGlmIGsgaXMgYSBkZWwga2V5UHJlc3NcbiAgICAvL1xuICAgIGlzRGVsS2V5UHJlc3Mod2hpY2gsIGtleUNvZGUpIHtcbiAgICAgIHZhciBrZXlzID0ge1xuICAgICAgICAnYmFja3NwYWNlJzogeyAnd2hpY2gnOiA4LCAna2V5Q29kZSc6IDgsICdzaGlmdEtleSc6IGZhbHNlIH0sXG4gICAgICAgICdkZWxldGUnOiB7ICd3aGljaCc6IDAsICdrZXlDb2RlJzogNDYgfVxuICAgICAgfTtcbiAgICBcbiAgICAgIHJldHVybiB0aGlzLmdldE1hdGNoaW5nS2V5KHdoaWNoLCBrZXlDb2RlLCBrZXlzKTtcbiAgICB9O1xuXG4gICAgLy9cbiAgICAvLyBEZXRlcm1pbmUgaWYga2V5cHJlc3MgcmVsYXRlcyB0byBzcGVjaWFsS2V5XG4gICAgLy9cbiAgICBpc1NwZWNpYWxLZXlQcmVzcyh3aGljaCwga2V5Q29kZSkge1xuICAgICAgdmFyIGtleXMgPSB7XG4gICAgICAgICd0YWInOiB7ICd3aGljaCc6IDAsICdrZXlDb2RlJzogOSB9LFxuICAgICAgICAnZW50ZXInOiB7ICd3aGljaCc6IDEzLCAna2V5Q29kZSc6IDEzIH0sXG4gICAgICAgICdlbmQnOiB7ICd3aGljaCc6IDAsICdrZXlDb2RlJzogMzUgfSxcbiAgICAgICAgJ2hvbWUnOiB7ICd3aGljaCc6IDAsICdrZXlDb2RlJzogMzYgfSxcbiAgICAgICAgJ2xlZnRhcnJvdyc6IHsgJ3doaWNoJzogMCwgJ2tleUNvZGUnOiAzNyB9LFxuICAgICAgICAndXBhcnJvdyc6IHsgJ3doaWNoJzogMCwgJ2tleUNvZGUnOiAzOCB9LFxuICAgICAgICAncmlnaHRhcnJvdyc6IHsgJ3doaWNoJzogMCwgJ2tleUNvZGUnOiAzOSB9LFxuICAgICAgICAnZG93bmFycm93JzogeyAnd2hpY2gnOiAwLCAna2V5Q29kZSc6IDQwIH0sXG4gICAgICAgICdGNSc6IHsgJ3doaWNoJzogMTE2LCAna2V5Q29kZSc6IDExNiB9XG4gICAgICB9O1xuICAgIFxuICAgICAgcmV0dXJuIHRoaXMuZ2V0TWF0Y2hpbmdLZXkod2hpY2gsIGtleUNvZGUsIGtleXMpO1xuICAgIH07XG4gICAgXG4gICAgLy9cbiAgICAvLyBSZXR1cm5zIHRydWUvZmFsc2UgaWYgbW9kaWZpZXIga2V5IGlzIGhlbGQgZG93blxuICAgIC8vXG4gICAgaXNNb2RpZmllcihldnQpIHtcbiAgICAgIHJldHVybiBldnQuY3RybEtleSB8fCBldnQuYWx0S2V5IHx8IGV2dC5tZXRhS2V5O1xuICAgIH07XG4gICAgXG59XG5cblxuXG5leHBvcnQgY2xhc3MgQWlGb3JtYXR0ZXIge1xuICBcbiAgICBwcml2YXRlIGlucHRSZWdzOmFueSA9IHsnOSc6IC9bMC05XS8sJ2EnOiAvW0EtWmEtel0vLCcqJzogL1tBLVphLXowLTldL307XG4gICAgcHJpdmF0ZSB1dGlsczpBaUZvcm1hdHRlclV0aWxzPW5ldyBBaUZvcm1hdHRlclV0aWxzKCk7XG4gICAgcHJpdmF0ZSBpbnB1dFNlbGVjdG9yIDogQWlGb3JtYXR0ZXJJbnB1dFNlbGVjdG9yID0gbmV3IEFpRm9ybWF0dGVySW5wdXRTZWxlY3RvcigpO1xuICAgIHByaXZhdGUgc2VsZWN0aW9uOkFpRm9ybWF0dGVyU2VsZWN0aW9uO1xuICAgIHByaXZhdGUgcGF0dGVybjpBaUZvcm1hdHRlclBhdHRlcm5JbmZvO1xuICAgIHByaXZhdGUgcGxhY2Vob2xkZXI6c3RyaW5nPScgJztcbiAgICBwcml2YXRlIG5ld1Bvczphbnk7XG4gICAgcHJpdmF0ZSBmb2N1c1N0YXJ0OmFueTtcbiAgICBwcml2YXRlIGZvY3VzOm51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBkZWx0YTphbnk7XG4gICAgcHJpdmF0ZSBobGRyczphbnkgPSB7fTtcbiAgXG4gICAgbnVtYmVySW5wdXQ6Ym9vbGVhbj1mYWxzZTtcbiAgICB2YWx1ZTpzdHJpbmc9Jyc7XG4gICAgb25WYWx1ZUNoYW5nZTphbnk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGlucHV0RWxlbWVudDogYW55LGZvcm1hdCA6c3RyaW5nKSB7XG4gICAgICAgIGZvcm1hdD1mb3JtYXQucmVwbGFjZSgvey9nLCAne3snKS5yZXBsYWNlKC99L2csICd9fScpO1xuICAgICAgICB2YXIgcGF0dGVyblBhcnNlcjpBaUZvcm1hdHRlclBhdHRlcm5QYXJzZXIgPSBuZXcgQWlGb3JtYXR0ZXJQYXR0ZXJuUGFyc2VyKCk7IFxuICAgICAgICB0aGlzLnBhdHRlcm4gPSBwYXR0ZXJuUGFyc2VyLnBhcnNlKGZvcm1hdCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLm51bWJlcklucHV0PXRydWU7XG4gICAgICAgIGZvcih2YXIgaT0wO2k8dGhpcy5wYXR0ZXJuLmlucHV0cy5sZW5ndGg7aSsrKXtcbiAgICAgICAgICAgIGlmKHRoaXMucGF0dGVybi5pbnB1dHNbaV0gIT09ICc5Jyl7XG4gICAgICAgICAgICAgICAgdGhpcy5udW1iZXJJbnB1dD1mYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gQWRkIExpc3RlbmVyc1xuICAgICAgICB2YXIgc2VsZj10aGlzO1xuICAgICAgICB0aGlzLnV0aWxzLmFkZExpc3RlbmVyKGlucHV0RWxlbWVudCwgJ2tleWRvd24nLCBmdW5jdGlvbihldnQpe1xuICAgICAgICAgICAgdmFyIGsgPSBldnQud2hpY2ggfHwgZXZ0LmtleUNvZGU7XG4gICAgICAgICAgXG4gICAgICAgICAgICAvLyBJZiBkZWxldGUga2V5XG4gICAgICAgICAgICBpZiAoayAmJiBzZWxmLnV0aWxzLmlzRGVsS2V5RG93bihldnQud2hpY2gsIGV2dC5rZXlDb2RlKSkge1xuICAgICAgICAgICAgICAvLyBQcm9jZXNzIHRoZSBrZXlDb2RlIGFuZCBwcmV2ZW50IGRlZmF1bHRcbiAgICAgICAgICAgICAgc2VsZi5wcm9jZXNzS2V5KG51bGwsIGspO1xuICAgICAgICAgICAgICByZXR1cm4gc2VsZi51dGlscy5wcmV2ZW50RGVmYXVsdChldnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnV0aWxzLmFkZExpc3RlbmVyKGlucHV0RWxlbWVudCwgJ2tleXByZXNzJywgZnVuY3Rpb24oZXZ0KXtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gVGhlIGZpcnN0IHRoaW5nIHdlIG5lZWQgaXMgdGhlIGNoYXJhY3RlciBjb2RlXG4gICAgICAgICAgICB2YXIgaywgaXNTcGVjaWFsO1xuICAgICAgICAgICAgLy8gTW96aWxsYSB3aWxsIHRyaWdnZXIgb24gc3BlY2lhbCBrZXlzIGFuZCBhc3NpZ24gdGhlIHRoZSB2YWx1ZSAwXG4gICAgICAgICAgICAvLyBXZSB3YW50IHRvIHVzZSB0aGF0IDAgcmF0aGVyIHRoYW4gdGhlIGtleUNvZGUgaXQgYXNzaWducy5cbiAgICAgICAgICAgIGsgPSBldnQud2hpY2ggfHwgZXZ0LmtleUNvZGU7XG4gICAgICAgICAgICBpc1NwZWNpYWwgPSBzZWxmLnV0aWxzLmlzU3BlY2lhbEtleVByZXNzKGV2dC53aGljaCwgZXZ0LmtleUNvZGUpO1xuICAgICAgICAgIFxuICAgICAgICAgICAgLy8gUHJvY2VzcyB0aGUga2V5Q29kZSBhbmQgcHJldmVudCBkZWZhdWx0XG4gICAgICAgICAgICBpZiAoIXNlbGYudXRpbHMuaXNEZWxLZXlQcmVzcyhldnQud2hpY2gsIGV2dC5rZXlDb2RlKSAmJiAhaXNTcGVjaWFsICYmICFzZWxmLnV0aWxzLmlzTW9kaWZpZXIoZXZ0KSkge1xuICAgICAgICAgICAgICBzZWxmLnByb2Nlc3NLZXkoU3RyaW5nLmZyb21DaGFyQ29kZShrKSwgZmFsc2UpO1xuICAgICAgICAgICAgICByZXR1cm4gc2VsZi51dGlscy5wcmV2ZW50RGVmYXVsdChldnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMudXRpbHMuYWRkTGlzdGVuZXIoaW5wdXRFbGVtZW50LCAncGFzdGUnLCBmdW5jdGlvbihldnQpe1xuICAgICAgICAgICAgc2VsZi5wcm9jZXNzS2V5KHNlbGYudXRpbHMuZ2V0Q2xpcChldnQpLCBmYWxzZSk7XG4gICAgICAgICAgICByZXR1cm4gc2VsZi51dGlscy5wcmV2ZW50RGVmYXVsdChldnQpO1xuICAgICAgICAgIFxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIC8vIEZvcm1hdCBvbiBzdGFydFxuICAgICAgICB0aGlzLnByb2Nlc3NLZXkoJycsIGZhbHNlKTtcbiAgICAgICAgaW5wdXRFbGVtZW50LmJsdXIoKTtcblxuICAgICAgICB2YXIgb25mb2N1cz1mdW5jdGlvbigpIHtcbiAgICAgICAgICAgIC8vIFdyYXBwZWQgaW4gdGltZW91dCBzbyB0aGF0IHdlIGNhbiBncmFiIGlucHV0IHNlbGVjdGlvblxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIC8vIEdyYWIgc2VsZWN0aW9uXG4gICAgICAgICAgICAgIHZhciBzZWxlY3Rpb24gPSBzZWxmLmlucHV0U2VsZWN0b3IuZ2V0KHNlbGYuaW5wdXRFbGVtZW50KTtcbiAgICAgICAgICAgICAgLy8gQ2hhciBjaGVja1xuICAgICAgICAgICAgICB2YXIgaXNBZnRlclN0YXJ0ID0gc2VsZWN0aW9uLmVuZCA+IHNlbGYuZm9jdXMsXG4gICAgICAgICAgICAgICAgICBpc0ZpcnN0Q2hhciAgPSBzZWxlY3Rpb24uZW5kID09PSAwO1xuICAgICAgICAgICAgICAvLyBJZiBjbGlja2VkIGluIGZyb250IG9mIHN0YXJ0LCByZWZvY3VzIHRvIHN0YXJ0XG4gICAgICAgICAgICAgIGlmIChpc0FmdGVyU3RhcnQgfHwgaXNGaXJzdENoYXIpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmlucHV0U2VsZWN0b3Iuc2V0KHNlbGYuaW5wdXRFbGVtZW50LCBzZWxmLmZvY3VzKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gQWRkIExpc3RlbmVyc1xuICAgICAgICB0aGlzLnV0aWxzLmFkZExpc3RlbmVyKGlucHV0RWxlbWVudCwgJ2ZvY3VzJywgb25mb2N1cyk7XG4gICAgICAgIHRoaXMudXRpbHMuYWRkTGlzdGVuZXIoaW5wdXRFbGVtZW50LCAnY2xpY2snLCBvbmZvY3VzKTtcbiAgICAgICAgdGhpcy51dGlscy5hZGRMaXN0ZW5lcihpbnB1dEVsZW1lbnQsICd0b3VjaHN0YXJ0Jywgb25mb2N1cyk7XG4gICAgfVxuICAgIFxuICAgIHNldFZhbHVlKHZhbHVlOnN0cmluZyl7XG4gICAgICAgIHRoaXMuaW5wdXRFbGVtZW50LnZhbHVlPXZhbHVlO1xuICAgICAgICB0aGlzLnByb2Nlc3NLZXkoJycsIGZhbHNlKTtcbiAgICB9XG4gICAgXG4gICAgLy9cbiAgICAvLyBAcHJpdmF0ZVxuICAgIC8vIFVzaW5nIHRoZSBwcm92aWRlZCBrZXkgaW5mb3JtYXRpb24sIGFsdGVyIGVsIHZhbHVlLlxuICAgIC8vXG4gICAgcHJvY2Vzc0tleShjaGFycywgZGVsS2V5LCBpZ25vcmVDYXJldD1mYWxzZSkge1xuICAgICAgICAvLyBHZXQgY3VycmVudCBzdGF0ZVxuICAgICAgICBcbiAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSB0aGlzLmlucHV0U2VsZWN0b3IuZ2V0KHRoaXMuaW5wdXRFbGVtZW50KTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuaW5wdXRFbGVtZW50LnZhbHVlO1xuICAgICAgXG4gICAgICAgIC8vIEluaXQgdmFsdWVzXG4gICAgICAgIHRoaXMuZGVsdGEgPSAwO1xuICAgICAgXG4gICAgICAgIC8vIElmIGNoYXJzIHdlcmUgaGlnaGxpZ2h0ZWQsIHdlIG5lZWQgdG8gcmVtb3ZlIHRoZW1cbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0aW9uLmJlZ2luICE9PSB0aGlzLnNlbGVjdGlvbi5lbmQpIHtcbiAgICAgICAgICB0aGlzLmRlbHRhID0gKC0xKSAqIE1hdGguYWJzKHRoaXMuc2VsZWN0aW9uLmJlZ2luIC0gdGhpcy5zZWxlY3Rpb24uZW5kKTtcbiAgICAgICAgICB0aGlzLnZhbHVlICAgPSB0aGlzLnV0aWxzLnJlbW92ZUNoYXJzKHRoaXMudmFsdWUsIHRoaXMuc2VsZWN0aW9uLmJlZ2luLCB0aGlzLnNlbGVjdGlvbi5lbmQpO1xuICAgICAgICB9XG4gICAgICBcbiAgICAgICAgLy8gRGVsZXRlIGtleSAobW92ZXMgb3Bwb3NpdGUgZGlyZWN0aW9uKVxuICAgICAgICBlbHNlIGlmIChkZWxLZXkgJiYgZGVsS2V5ID09PSA0Nikge1xuICAgICAgICAgIHRoaXMuZGVsZXRlKCk7XG4gICAgICBcbiAgICAgICAgLy8gb3IgQmFja3NwYWNlIGFuZCBub3QgYXQgc3RhcnRcbiAgICAgICAgfSBlbHNlIGlmIChkZWxLZXkgJiYgdGhpcy5zZWxlY3Rpb24uYmVnaW4gLSAxID49IDApIHtcbiAgICAgIFxuICAgICAgICAgIC8vIEFsd2F5cyBoYXZlIGEgZGVsdGEgb2YgYXQgbGVhc3QgLTEgZm9yIHRoZSBjaGFyYWN0ZXIgYmVpbmcgZGVsZXRlZC5cbiAgICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy51dGlscy5yZW1vdmVDaGFycyh0aGlzLnZhbHVlLCB0aGlzLnNlbGVjdGlvbi5lbmQgLTEsIHRoaXMuc2VsZWN0aW9uLmVuZCk7XG4gICAgICAgICAgdGhpcy5kZWx0YSAtPSAxO1xuICAgICAgXG4gICAgICAgIC8vIG9yIEJhY2tzcGFjZSBhbmQgYXQgc3RhcnQgLSBleGl0XG4gICAgICAgIH0gZWxzZSBpZiAoZGVsS2V5KSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIFxuICAgICAgICAvLyBJZiB0aGUga2V5IGlzIG5vdCBhIGRlbCBrZXksIGl0IHNob3VsZCBjb252ZXJ0IHRvIGEgc3RyXG4gICAgICAgIGlmICghZGVsS2V5KSB7XG4gICAgICAgICAgLy8gQWRkIGNoYXIgYXQgcG9zaXRpb24gYW5kIGluY3JlbWVudCBkZWx0YVxuICAgICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnV0aWxzLmFkZENoYXJzKHRoaXMudmFsdWUsIGNoYXJzLCB0aGlzLnNlbGVjdGlvbi5iZWdpbik7XG4gICAgICAgICAgdGhpcy5kZWx0YSArPSBjaGFycy5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgIFxuICAgICAgICAvLyBGb3JtYXQgZWwudmFsdWUgKGFsc28gaGFuZGxlcyB1cGRhdGluZyBjYXJldCBwb3NpdGlvbilcbiAgICAgICAgdGhpcy5mb3JtYXRWYWx1ZShpZ25vcmVDYXJldCk7XG4gICAgICAgIGlmKHRoaXMub25WYWx1ZUNoYW5nZSkgdGhpcy5vblZhbHVlQ2hhbmdlKHRoaXMuaW5wdXRFbGVtZW50LnZhbHVlKTsgICAgICBcbiAgICB9OyBcbiAgICBcbiAgICAvL1xuICAgIC8vIEBwcml2YXRlXG4gICAgLy8gRGVsZXRlcyB0aGUgY2hhcmFjdGVyIGluIGZyb250IG9mIGl0XG4gICAgLy9cbiAgICBkZWxldGUgKCkge1xuICAgICAgLy8gQWRqdXN0IGZvY3VzIHRvIG1ha2Ugc3VyZSBpdHMgbm90IG9uIGEgZm9ybWF0dGVkIGNoYXJcbiAgICAgIHdoaWxlICh0aGlzLnBhdHRlcm4uY2hhcnNbdGhpcy5zZWxlY3Rpb24uYmVnaW5dKSB7XG4gICAgICAgIHRoaXMubmV4dFBvcygpO1xuICAgICAgfVxuICAgIFxuICAgICAgLy8gQXMgbG9uZyBhcyB3ZSBhcmUgbm90IGF0IHRoZSBlbmRcbiAgICAgIGlmICh0aGlzLnNlbGVjdGlvbi5iZWdpbiA8IHRoaXMudmFsdWUubGVuZ3RoKSB7XG4gICAgICAgIC8vIFdlIHdpbGwgc2ltdWxhdGUgYSBkZWxldGUgYnkgbW92aW5nIHRoZSBjYXJldCB0byB0aGUgbmV4dCBjaGFyXG4gICAgICAgIC8vIGFuZCB0aGVuIGRlbGV0aW5nXG4gICAgICAgIHRoaXMubmV4dFBvcygpO1xuICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy51dGlscy5yZW1vdmVDaGFycyh0aGlzLnZhbHVlLCB0aGlzLnNlbGVjdGlvbi5lbmQgLTEsIHRoaXMuc2VsZWN0aW9uLmVuZCk7XG4gICAgICAgIHRoaXMuZGVsdGEgPSAtMTtcbiAgICAgIH1cbiAgICB9O1xuICAgIFxuICAgIC8vXG4gICAgLy8gQHByaXZhdGVcbiAgICAvLyBRdWljayBoZWxwZXIgbWV0aG9kIHRvIG1vdmUgdGhlIGNhcmV0IHRvIHRoZSBuZXh0IHBvc1xuICAgIC8vXG4gICAgbmV4dFBvcygpIHtcbiAgICAgIHRoaXMuc2VsZWN0aW9uLmVuZCArKztcbiAgICAgIHRoaXMuc2VsZWN0aW9uLmJlZ2luICsrO1xuICAgIH07XG4gICAgXG4gICAgLy9cbiAgICAvLyBAcHJpdmF0ZVxuICAgIC8vIEFsdGVyIGVsZW1lbnQgdmFsdWUgdG8gZGlzcGxheSBjaGFyYWN0ZXJzIG1hdGNoaW5nIHRoZSBwcm92aWRlZFxuICAgIC8vIGluc3RhbmNlIHBhdHRlcm4uIEFsc28gcmVzcG9uc2libGUgZm9yIHVwZGF0aW5nXG4gICAgLy9cbiAgICBmb3JtYXRWYWx1ZShpZ25vcmVDYXJldCkge1xuICAgICAgLy8gU2V0IGNhcmV0IHBvc1xuICAgICAgdGhpcy5uZXdQb3MgPSB0aGlzLnNlbGVjdGlvbi5lbmQgKyB0aGlzLmRlbHRhO1xuICAgIFxuICAgICAgLy8gUmVtb3ZlIGFsbCBmb3JtYXR0ZWQgY2hhcnMgZnJvbSB2YWxcbiAgICAgIHRoaXMucmVtb3ZlQ2hhcnMoKTtcbiAgICBcbiAgICAgIC8vIFZhbGlkYXRlIGlucHV0c1xuICAgICAgdGhpcy52YWxpZGF0ZUlucHRzKCk7XG4gICAgXG4gICAgICAvLyBBZGQgZm9ybWF0dGVkIGNoYXJhY3RlcnNcbiAgICAgIHRoaXMuYWRkQ2hhcnMoKTtcbiAgICBcbiAgICAgIC8vIFNldCB2YWx1ZSBhbmQgYWRoZXJlIHRvIG1heExlbmd0aFxuICAgICAgdGhpcy5pbnB1dEVsZW1lbnQudmFsdWUgPSB0aGlzLnZhbHVlLnN1YnN0cigwLCB0aGlzLnBhdHRlcm4ubUxlbmd0aCk7XG4gICAgXG4gICAgICAvLyBTZXQgbmV3IGNhcmV0IHBvc2l0aW9uXG4gICAgICBpZiAoKHR5cGVvZiBpZ25vcmVDYXJldCkgPT09ICd1bmRlZmluZWQnIHx8IGlnbm9yZUNhcmV0ID09PSBmYWxzZSkge1xuICAgICAgICB0aGlzLmlucHV0U2VsZWN0b3Iuc2V0KHRoaXMuaW5wdXRFbGVtZW50LCB0aGlzLm5ld1Bvcyk7XG4gICAgICB9XG4gICAgfTtcbiAgICBcbiAgICAvL1xuICAgIC8vIEBwcml2YXRlXG4gICAgLy8gUmVtb3ZlIGFsbCBmb3JtYXR0ZWQgYmVmb3JlIGFuZCBhZnRlciBhIHNwZWNpZmllZCBwb3NcbiAgICAvL1xuICAgIHJlbW92ZUNoYXJzKCkge1xuICAgICAgLy8gRGVsdGEgc2hvdWxkbid0IGluY2x1ZGUgcGxhY2Vob2xkZXJzXG4gICAgICBpZiAodGhpcy5zZWxlY3Rpb24uZW5kID4gdGhpcy5mb2N1cykge1xuICAgICAgICB0aGlzLmRlbHRhICs9IHRoaXMuc2VsZWN0aW9uLmVuZCAtIHRoaXMuZm9jdXM7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC8vIEFjY291bnQgZm9yIHNoaWZ0cyBkdXJpbmcgcmVtb3ZhbFxuICAgICAgdmFyIHNoaWZ0ID0gMDtcbiAgICBcbiAgICAgIC8vIExvb3AgdGhyb3VnaCBhbGwgcG9zc2libGUgY2hhciBwb3NpdGlvbnNcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDw9IHRoaXMucGF0dGVybi5tTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gR2V0IHRyYW5zZm9ybWVkIHBvc2l0aW9uXG4gICAgICAgIHZhciBjdXJDaGFyID0gdGhpcy5wYXR0ZXJuLmNoYXJzW2ldLFxuICAgICAgICAgICAgY3VySGxkciA9IHRoaXMuaGxkcnNbaV0sXG4gICAgICAgICAgICBwb3MgPSBpICsgc2hpZnQsXG4gICAgICAgICAgICB2YWw7XG4gICAgXG4gICAgICAgIC8vIElmIGFmdGVyIHNlbGVjdGlvbiB3ZSBuZWVkIHRvIGFjY291bnQgZm9yIGRlbHRhXG4gICAgICAgIHBvcyA9IChpID49IHRoaXMuc2VsZWN0aW9uLmJlZ2luKSA/IHBvcyArIHRoaXMuZGVsdGEgOiBwb3M7XG4gICAgICAgIHZhbCA9IHRoaXMudmFsdWUuY2hhckF0KHBvcyk7XG4gICAgICAgIC8vIFJlbW92ZSBjaGFyIGFuZCBhY2NvdW50IGZvciBzaGlmdFxuICAgICAgICBpZiAoY3VyQ2hhciAmJiBjdXJDaGFyID09PSB2YWwgfHwgY3VySGxkciAmJiBjdXJIbGRyID09PSB2YWwpIHtcbiAgICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy51dGlscy5yZW1vdmVDaGFycyh0aGlzLnZhbHVlLCBwb3MsIHBvcyArIDEpO1xuICAgICAgICAgIHNoaWZ0LS07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBcbiAgICAgIC8vIEFsbCBobGRycyBzaG91bGQgYmUgcmVtb3ZlZCBub3dcbiAgICAgIHRoaXMuaGxkcnMgPSB7fTtcbiAgICBcbiAgICAgIC8vIFNldCBmb2N1cyB0byBsYXN0IGNoYXJhY3RlclxuICAgICAgdGhpcy5mb2N1cyA9IHRoaXMudmFsdWUubGVuZ3RoO1xuICAgIH07XG4gICAgXG4gICAgLy9cbiAgICAvLyBAcHJpdmF0ZVxuICAgIC8vIE1ha2Ugc3VyZSBhbGwgaW5wdHMgYXJlIHZhbGlkLCBlbHNlIHJlbW92ZSBhbmQgdXBkYXRlIGRlbHRhXG4gICAgLy9cbiAgICB2YWxpZGF0ZUlucHRzKCkge1xuICAgICAgLy8gTG9vcCBvdmVyIGVhY2ggY2hhciBhbmQgdmFsaWRhdGVcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy52YWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBHZXQgY2hhciBpbnB0IHR5cGVcbiAgICAgICAgdmFyIGlucHRUeXBlID0gdGhpcy5wYXR0ZXJuLmlucHV0c1tpXTtcbiAgICBcbiAgICAgICAgLy8gQ2hlY2tzXG4gICAgICAgIHZhciBpc0JhZFR5cGUgPSAhdGhpcy5pbnB0UmVnc1tpbnB0VHlwZV0sXG4gICAgICAgICAgICBpc0ludmFsaWQgPSAhaXNCYWRUeXBlICYmICF0aGlzLmlucHRSZWdzW2lucHRUeXBlXS50ZXN0KHRoaXMudmFsdWUuY2hhckF0KGkpKSxcbiAgICAgICAgICAgIGluQm91bmRzICA9IHRoaXMucGF0dGVybi5pbnB1dHNbaV07XG4gICAgXG4gICAgICAgIC8vIFJlbW92ZSBpZiBpbmNvcnJlY3QgYW5kIGluYm91bmRzXG4gICAgICAgIGlmICgoaXNCYWRUeXBlIHx8IGlzSW52YWxpZCkgJiYgaW5Cb3VuZHMpIHtcbiAgICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy51dGlscy5yZW1vdmVDaGFycyh0aGlzLnZhbHVlLCBpLCBpICsgMSk7XG4gICAgICAgICAgdGhpcy5mb2N1c1N0YXJ0LS07XG4gICAgICAgICAgdGhpcy5uZXdQb3MtLTtcbiAgICAgICAgICB0aGlzLmRlbHRhLS07XG4gICAgICAgICAgaS0tO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICBcbiAgICAvL1xuICAgIC8vIEBwcml2YXRlXG4gICAgLy8gTG9vcCBvdmVyIHZhbCBhbmQgYWRkIGZvcm1hdHRlZCBjaGFycyBhcyBuZWNlc3NhcnlcbiAgICAvL1xuICAgIGFkZENoYXJzKCkge1xuICAgICAgICAvLyBMb29wIG92ZXIgYWxsIHBvc3NpYmxlIGNoYXJhY3RlcnNcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPD0gdGhpcy5wYXR0ZXJuLm1MZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmICghdGhpcy52YWx1ZS5jaGFyQXQoaSkpIHtcbiAgICAgICAgICAgIC8vIEFkZCBwbGFjZWhvbGRlciBhdCBwb3NcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnV0aWxzLmFkZENoYXJzKHRoaXMudmFsdWUsIHRoaXMucGxhY2Vob2xkZXIsIGkpO1xuICAgICAgICAgICAgdGhpcy5obGRyc1tpXSA9IHRoaXMucGxhY2Vob2xkZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuYWRkQ2hhcihpKTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICAvLyBBZGp1c3QgZm9jdXMgdG8gbWFrZSBzdXJlIGl0cyBub3Qgb24gYSBmb3JtYXR0ZWQgY2hhclxuICAgICAgICB3aGlsZSAodGhpcy5wYXR0ZXJuLmNoYXJzW3RoaXMuZm9jdXNdKSB7XG4gICAgICAgICAgdGhpcy5mb2N1cysrO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBcbiAgICAvL1xuICAgIC8vIEBwcml2YXRlXG4gICAgLy8gQWRkIGZvcm1hdHR0ZWQgY2hhciBhdCBwb3NpdGlvblxuICAgIC8vXG4gICAgYWRkQ2hhcihpKSB7XG4gICAgICAvLyBJZiBjaGFyIGV4aXN0cyBhdCBwb3NpdGlvblxuICAgICAgdmFyIGNociA9IHRoaXMucGF0dGVybi5jaGFyc1tpXTtcbiAgICAgIGlmICghY2hyKSB7IHJldHVybiB0cnVlOyB9XG4gICAgXG4gICAgICAvLyBJZiBjaGFycyBhcmUgYWRkZWQgaW4gYmV0d2VlbiB0aGUgb2xkIHBvcyBhbmQgbmV3IHBvc1xuICAgICAgLy8gd2UgbmVlZCB0byBpbmNyZW1lbnQgcG9zIGFuZCBkZWx0YVxuICAgICAgaWYgKHRoaXMudXRpbHMuaXNCZXR3ZWVuKGksIFt0aGlzLnNlbGVjdGlvbi5iZWdpbiAtMSwgdGhpcy5uZXdQb3MgKzFdKSkge1xuICAgICAgICB0aGlzLm5ld1BvcyArKztcbiAgICAgICAgdGhpcy5kZWx0YSArKztcbiAgICAgIH1cbiAgICBcbiAgICAgIC8vIElmIGNoYXJhY3RlciBhZGRlZCBiZWZvcmUgZm9jdXMsIGluY3JcbiAgICAgIGlmIChpIDw9IHRoaXMuZm9jdXMpIHtcbiAgICAgICAgdGhpcy5mb2N1cysrO1xuICAgICAgfVxuICAgIFxuICAgICAgLy8gVXBkYXRlaG9sZGVyXG4gICAgICBpZiAodGhpcy5obGRyc1tpXSkge1xuICAgICAgICBkZWxldGUgdGhpcy5obGRyc1tpXTtcbiAgICAgICAgdGhpcy5obGRyc1tpICsgMV0gPSB0aGlzLnBsYWNlaG9sZGVyO1xuICAgICAgfVxuICAgIFxuICAgICAgLy8gVXBkYXRlIHZhbHVlXG4gICAgICB0aGlzLnZhbHVlID0gdGhpcy51dGlscy5hZGRDaGFycyh0aGlzLnZhbHVlLCBjaHIsIGkpO1xuICAgIH07XG4gICAgXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
