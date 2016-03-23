System.register([], function(exports_1) {
    var PatternInfo, PatternParser, PatternMatcher, InputSelect, Utils, AiFormatter;
    return {
        setters:[],
        execute: function() {
            PatternInfo = (function () {
                function PatternInfo() {
                    this.inputs = [];
                    this.chars = [];
                }
                return PatternInfo;
            })();
            PatternParser = (function () {
                function PatternParser() {
                }
                PatternParser.prototype.getMatches = function (pattern) {
                    // Populate array of matches
                    var matches = [], match;
                    while (match = PatternParser.regexp.exec(pattern)) {
                        matches.push(match);
                    }
                    return matches;
                };
                PatternParser.prototype.parse = function (pattern) {
                    var info = new PatternInfo();
                    var matches = this.getMatches(pattern), pLength = pattern.length;
                    var mCount = 0, iCount = 0, i = 0;
                    var processMatch = function (val) {
                        var valLength = val.length;
                        for (var j = 0; j < valLength; j++) {
                            info.inputs[iCount] = val.charAt(j);
                            iCount++;
                        }
                        mCount++;
                        i += (val.length + PatternParser.DELIM_SIZE - 1);
                    };
                    for (i; i < pLength; i++) {
                        if (mCount < matches.length && i === matches[mCount].index) {
                            processMatch(matches[mCount][1]);
                        }
                        else {
                            info.chars[i - (mCount * PatternParser.DELIM_SIZE)] = pattern.charAt(i);
                        }
                    }
                    info.mLength = i - (mCount * PatternParser.DELIM_SIZE);
                    return info;
                };
                PatternParser.DELIM_SIZE = 4;
                PatternParser.regexp = new RegExp('{{([^}]+)}}', 'g');
                return PatternParser;
            })();
            PatternMatcher = (function () {
                function PatternMatcher() {
                    this.matchers = [];
                    this.patterns = [];
                }
                PatternMatcher.prototype.add = function (matcher, pattern) {
                    if (matcher === '*')
                        this.matchers.push(/.*/);
                    else
                        this.matchers.push(new RegExp(matcher));
                    var patternParser = new PatternParser();
                    var parsedPattern = patternParser.parse(pattern);
                    this.patterns.push(parsedPattern);
                };
                PatternMatcher.prototype.getPattern = function (input) {
                    for (var i = 0; i < this.matchers.length; i++) {
                        var matcher = this.matchers[i];
                        if (matcher.test(input))
                            return this.patterns[i];
                    }
                    return null;
                };
                PatternMatcher.prototype.hello = function (text) {
                    alert(text);
                };
                return PatternMatcher;
            })();
            InputSelect = (function () {
                function InputSelect() {
                }
                //
                // Get begin and end positions of selected input. Return 0's
                // if there is no selectiion data
                //
                InputSelect.prototype.get = function (el) {
                    // If normal browser return with result
                    if (typeof el.selectionStart === 'number') {
                        return {
                            begin: el.selectionStart,
                            end: el.selectionEnd
                        };
                    }
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
                        return {
                            begin: -inputRange.moveStart('character', -length),
                            end: -inputRange.moveEnd('character', -length)
                        };
                    }
                    //Return 0's on no selection data
                    return { begin: 0, end: 0 };
                };
                ;
                //
                // Set the caret position at a specified location
                //
                InputSelect.prototype.set = function (el, pos) {
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
                return InputSelect;
            })();
            Utils = (function () {
                function Utils() {
                    this.uAgent = (typeof navigator !== 'undefined') ? navigator.userAgent : null;
                }
                //
                // Shallow copy properties from n objects to destObj
                //
                Utils.prototype.extend = function (destObj) {
                    for (var i = 1; i < arguments.length; i++) {
                        for (var key in arguments[i]) {
                            destObj[key] = arguments[i][key];
                        }
                    }
                    return destObj;
                };
                ;
                //
                // Add a given character to a string at a defined pos
                //
                Utils.prototype.addChars = function (str, chars, pos) {
                    return str.substr(0, pos) + chars + str.substr(pos, str.length);
                };
                ;
                //
                // Remove a span of characters
                //
                Utils.prototype.removeChars = function (str, start, end) {
                    return str.substr(0, start) + str.substr(end, str.length);
                };
                ;
                //
                // Return true/false is num false between bounds
                //
                Utils.prototype.isBetween = function (num, bounds) {
                    bounds.sort(function (a, b) { return a - b; });
                    return (num > bounds[0] && num < bounds[1]);
                };
                ;
                //
                // Helper method for cross browser event listeners
                //
                Utils.prototype.addListener = function (el, evt, handler) {
                    return (typeof el.addEventListener !== 'undefined')
                        ? el.addEventListener(evt, handler, false)
                        : el.attachEvent('on' + evt, handler);
                };
                ;
                //
                // Helper method for cross browser implementation of preventDefault
                //
                Utils.prototype.preventDefault = function (evt) {
                    return (evt.preventDefault) ? evt.preventDefault() : (evt.returnValue = false);
                };
                ;
                //
                // Helper method for cross browser implementation for grabbing
                // clipboard data
                //
                Utils.prototype.getClip = function (evt) {
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
                Utils.prototype.getMatchingKey = function (which, keyCode, keys) {
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
                Utils.prototype.isDelKeyDown = function (which, keyCode) {
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
                Utils.prototype.isDelKeyPress = function (which, keyCode) {
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
                Utils.prototype.isSpecialKeyPress = function (which, keyCode) {
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
                Utils.prototype.isModifier = function (evt) {
                    return evt.ctrlKey || evt.altKey || evt.metaKey;
                };
                ;
                return Utils;
            })();
            AiFormatter = (function () {
                function AiFormatter(el) {
                    this.el = el;
                    this.inptRegs = { '9': /[0-9]/, 'a': /[A-Za-z]/, '*': /[A-Za-z0-9]/ };
                    this.patternMatcher = new PatternMatcher();
                    this.inptSel = new InputSelect();
                    this.utils = new Utils();
                    this.inputs = [];
                    this.chars = [];
                    this.hldrs = {};
                    this.focus = 0;
                    this.updatePattern();
                    this.processKey('', false);
                }
                //
                // @private
                // Determine correct format pattern based on input val
                //
                AiFormatter.prototype.updatePattern = function () {
                    // Determine appropriate pattern
                    var newPattern = this.patternMatcher.getPattern(this.val);
                    // Only update the pattern if there is an appropriate pattern for the value.
                    // Otherwise, leave the current pattern (and likely delete the latest character.)
                    if (newPattern) {
                        // Get info about the given pattern
                        this.mLength = newPattern.mLength;
                        this.chars = newPattern.chars;
                        this.inputs = newPattern.inputs;
                    }
                };
                ;
                //
                // @private
                // Using the provided key information, alter el value.
                //
                AiFormatter.prototype.processKey = function (chars, delKey, ignoreCaret) {
                    if (ignoreCaret === void 0) { ignoreCaret = false; }
                    // Get current state
                    this.sel = this.inptSel.get(this.el);
                    this.val = this.el.value;
                    // Init values
                    this.delta = 0;
                    // If chars were highlighted, we need to remove them
                    if (this.sel.begin !== this.sel.end) {
                        this.delta = (-1) * Math.abs(this.sel.begin - this.sel.end);
                        this.val = this.utils.removeChars(this.val, this.sel.begin, this.sel.end);
                    }
                    else if (delKey && delKey === 46) {
                        this.delete();
                    }
                    else if (delKey && this.sel.begin - 1 >= 0) {
                        // Always have a delta of at least -1 for the character being deleted.
                        this.val = this.utils.removeChars(this.val, this.sel.end - 1, this.sel.end);
                        this.delta -= 1;
                    }
                    else if (delKey) {
                        return true;
                    }
                    // If the key is not a del key, it should convert to a str
                    if (!delKey) {
                        // Add char at position and increment delta
                        this.val = this.utils.addChars(this.val, chars, this.sel.begin);
                        this.delta += chars.length;
                    }
                    // Format el.value (also handles updating caret position)
                    this.formatValue(ignoreCaret);
                };
                ;
                //
                // @private
                // Handler called on all keyDown strokes. All keys trigger
                // this handler. Only process delete keys.
                //
                AiFormatter.prototype.keyDown = function (evt) {
                    // The first thing we need is the character code
                    var k = evt.which || evt.keyCode;
                    // If delete key
                    if (k && this.utils.isDelKeyDown(evt.which, evt.keyCode)) {
                        // Process the keyCode and prevent default
                        this.processKey(null, k);
                        return this.utils.preventDefault(evt);
                    }
                };
                ;
                //
                // @private
                // Handler called on all keyPress strokes. Only processes
                // character keys (as long as no modifier key is in use).
                //
                AiFormatter.prototype.keyPress = function (evt) {
                    // The first thing we need is the character code
                    var k, isSpecial;
                    // Mozilla will trigger on special keys and assign the the value 0
                    // We want to use that 0 rather than the keyCode it assigns.
                    k = evt.which || evt.keyCode;
                    isSpecial = this.utils.isSpecialKeyPress(evt.which, evt.keyCode);
                    // Process the keyCode and prevent default
                    if (!this.utils.isDelKeyPress(evt.which, evt.keyCode) && !isSpecial && !this.utils.isModifier(evt)) {
                        this.processKey(String.fromCharCode(k), false);
                        return this.utils.preventDefault(evt);
                    }
                };
                ;
                //
                // @private
                // Handler called on paste event.
                //
                AiFormatter.prototype.paste = function (evt) {
                    // Process the clipboard paste and prevent default
                    this.processKey(this.utils.getClip(evt), false);
                    return this.utils.preventDefault(evt);
                };
                ;
                //
                // @private
                // Handle called on focus event.
                //
                AiFormatter.prototype._focus = function () {
                    // Wrapped in timeout so that we can grab input selection
                    var self = this;
                    setTimeout(function () {
                        // Grab selection
                        var selection = this.inputSel.get(self.el);
                        // Char check
                        var isAfterStart = selection.end > self.focus, isFirstChar = selection.end === 0;
                        // If clicked in front of start, refocus to start
                        if (isAfterStart || isFirstChar) {
                            this.inputSel.set(self.el, self.focus);
                        }
                    }, 0);
                };
                ;
                //
                // @private
                // Deletes the character in front of it
                //
                AiFormatter.prototype.delete = function () {
                    // Adjust focus to make sure its not on a formatted char
                    while (this.chars[this.sel.begin]) {
                        this.nextPos();
                    }
                    // As long as we are not at the end
                    if (this.sel.begin < this.val.length) {
                        // We will simulate a delete by moving the caret to the next char
                        // and then deleting
                        this.nextPos();
                        this.val = this.utils.removeChars(this.val, this.sel.end - 1, this.sel.end);
                        this.delta = -1;
                    }
                };
                ;
                //
                // @private
                // Quick helper method to move the caret to the next pos
                //
                AiFormatter.prototype.nextPos = function () {
                    this.sel.end++;
                    this.sel.begin++;
                };
                ;
                //
                // @private
                // Alter element value to display characters matching the provided
                // instance pattern. Also responsible for updating
                //
                AiFormatter.prototype.formatValue = function (ignoreCaret) {
                    // Set caret pos
                    this.newPos = this.sel.end + this.delta;
                    // Remove all formatted chars from val
                    this.removeChars();
                    // Switch to first matching pattern based on val
                    this.updatePattern();
                    // Validate inputs
                    this.validateInpts();
                    // Add formatted characters
                    this.addChars();
                    // Set value and adhere to maxLength
                    this.el.value = this.val.substr(0, this.mLength);
                    // Set new caret position
                    if ((typeof ignoreCaret) === 'undefined' || ignoreCaret === false) {
                        this.inptSel.set(this.el, this.newPos);
                    }
                };
                ;
                //
                // @private
                // Remove all formatted before and after a specified pos
                //
                AiFormatter.prototype.removeChars = function () {
                    // Delta shouldn't include placeholders
                    if (this.sel.end > this.focus) {
                        this.delta += this.sel.end - this.focus;
                    }
                    // Account for shifts during removal
                    var shift = 0;
                    // Loop through all possible char positions
                    for (var i = 0; i <= this.mLength; i++) {
                        // Get transformed position
                        var curChar = this.chars[i], curHldr = this.hldrs[i], pos = i + shift, val;
                        // If after selection we need to account for delta
                        pos = (i >= this.sel.begin) ? pos + this.delta : pos;
                        val = this.val.charAt(pos);
                        // Remove char and account for shift
                        if (curChar && curChar === val || curHldr && curHldr === val) {
                            this.val = this.utils.removeChars(this.val, pos, pos + 1);
                            shift--;
                        }
                    }
                    // All hldrs should be removed now
                    this.hldrs = {};
                    // Set focus to last character
                    this.focus = this.val.length;
                };
                ;
                //
                // @private
                // Make sure all inpts are valid, else remove and update delta
                //
                AiFormatter.prototype.validateInpts = function () {
                    // Loop over each char and validate
                    for (var i = 0; i < this.val.length; i++) {
                        // Get char inpt type
                        var inptType = this.inputs[i];
                        // Checks
                        var isBadType = !this.inptRegs[inptType], isInvalid = !isBadType && !this.inptRegs[inptType].test(this.val.charAt(i)), inBounds = this.inputs[i];
                        // Remove if incorrect and inbounds
                        if ((isBadType || isInvalid) && inBounds) {
                            this.val = this.utils.removeChars(this.val, i, i + 1);
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
                    if (this.opts.persistent) {
                        // Loop over all possible characters
                        for (var i = 0; i <= this.mLength; i++) {
                            if (!this.val.charAt(i)) {
                                // Add placeholder at pos
                                this.val = this.utils.addChars(this.val, this.opts.placeholder, i);
                                this.hldrs[i] = this.opts.placeholder;
                            }
                            this.addChar(i);
                        }
                        // Adjust focus to make sure its not on a formatted char
                        while (this.chars[this.focus]) {
                            this.focus++;
                        }
                    }
                    else {
                        // Avoid caching val.length, as they may change in _addChar.
                        for (var j = 0; j <= this.val.length; j++) {
                            // When moving backwards there are some race conditions where we
                            // dont want to add the character
                            if (this.delta <= 0 && (j === this.focus)) {
                                return true;
                            }
                            // Place character in current position of the formatted string.
                            this.addChar(j);
                        }
                    }
                };
                ;
                //
                // @private
                // Add formattted char at position
                //
                AiFormatter.prototype.addChar = function (i) {
                    // If char exists at position
                    var chr = this.chars[i];
                    if (!chr) {
                        return true;
                    }
                    // If chars are added in between the old pos and new pos
                    // we need to increment pos and delta
                    if (this.utils.isBetween(i, [this.sel.begin - 1, this.newPos + 1])) {
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
                        this.hldrs[i + 1] = this.opts.placeholder;
                    }
                    // Update value
                    this.val = this.utils.addChars(this.val, chr, i);
                };
                ;
                //
                // @private
                // Create a patternSpec for passing into patternMatcher that
                // has exactly one catch all pattern.
                //
                AiFormatter.prototype.specFromSinglePattern = function (patternStr) {
                    return [{ '*': patternStr }];
                };
                ;
                return AiFormatter;
            })();
            exports_1("AiFormatter", AiFormatter);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlJbnB1dC9BaU1hdGNoZXIudHMiXSwibmFtZXMiOlsiUGF0dGVybkluZm8iLCJQYXR0ZXJuSW5mby5jb25zdHJ1Y3RvciIsIlBhdHRlcm5QYXJzZXIiLCJQYXR0ZXJuUGFyc2VyLmNvbnN0cnVjdG9yIiwiUGF0dGVyblBhcnNlci5nZXRNYXRjaGVzIiwiUGF0dGVyblBhcnNlci5wYXJzZSIsIlBhdHRlcm5NYXRjaGVyIiwiUGF0dGVybk1hdGNoZXIuY29uc3RydWN0b3IiLCJQYXR0ZXJuTWF0Y2hlci5hZGQiLCJQYXR0ZXJuTWF0Y2hlci5nZXRQYXR0ZXJuIiwiUGF0dGVybk1hdGNoZXIuaGVsbG8iLCJJbnB1dFNlbGVjdCIsIklucHV0U2VsZWN0LmNvbnN0cnVjdG9yIiwiSW5wdXRTZWxlY3QuZ2V0IiwiSW5wdXRTZWxlY3Quc2V0IiwiVXRpbHMiLCJVdGlscy5jb25zdHJ1Y3RvciIsIlV0aWxzLmV4dGVuZCIsIlV0aWxzLmFkZENoYXJzIiwiVXRpbHMucmVtb3ZlQ2hhcnMiLCJVdGlscy5pc0JldHdlZW4iLCJVdGlscy5hZGRMaXN0ZW5lciIsIlV0aWxzLnByZXZlbnREZWZhdWx0IiwiVXRpbHMuZ2V0Q2xpcCIsIlV0aWxzLmdldE1hdGNoaW5nS2V5IiwiVXRpbHMuaXNEZWxLZXlEb3duIiwiVXRpbHMuaXNEZWxLZXlQcmVzcyIsIlV0aWxzLmlzU3BlY2lhbEtleVByZXNzIiwiVXRpbHMuaXNNb2RpZmllciIsIkFpRm9ybWF0dGVyIiwiQWlGb3JtYXR0ZXIuY29uc3RydWN0b3IiLCJBaUZvcm1hdHRlci51cGRhdGVQYXR0ZXJuIiwiQWlGb3JtYXR0ZXIucHJvY2Vzc0tleSIsIkFpRm9ybWF0dGVyLmtleURvd24iLCJBaUZvcm1hdHRlci5rZXlQcmVzcyIsIkFpRm9ybWF0dGVyLnBhc3RlIiwiQWlGb3JtYXR0ZXIuX2ZvY3VzIiwiQWlGb3JtYXR0ZXIuZGVsZXRlIiwiQWlGb3JtYXR0ZXIubmV4dFBvcyIsIkFpRm9ybWF0dGVyLmZvcm1hdFZhbHVlIiwiQWlGb3JtYXR0ZXIucmVtb3ZlQ2hhcnMiLCJBaUZvcm1hdHRlci52YWxpZGF0ZUlucHRzIiwiQWlGb3JtYXR0ZXIuYWRkQ2hhcnMiLCJBaUZvcm1hdHRlci5hZGRDaGFyIiwiQWlGb3JtYXR0ZXIuc3BlY0Zyb21TaW5nbGVQYXR0ZXJuIl0sIm1hcHBpbmdzIjoiOzs7OztZQUFBO2dCQUFBQTtvQkFDSUMsV0FBTUEsR0FBQ0EsRUFBRUEsQ0FBQ0E7b0JBQ1ZBLFVBQUtBLEdBQUNBLEVBQUVBLENBQUNBO2dCQUViQSxDQUFDQTtnQkFBREQsa0JBQUNBO1lBQURBLENBSkEsQUFJQ0EsSUFBQTtZQUVEO2dCQUFBRTtnQkF3Q0FDLENBQUNBO2dCQXBDR0Qsa0NBQVVBLEdBQVZBLFVBQVdBLE9BQU9BO29CQUNaRSw0QkFBNEJBO29CQUM1QkEsSUFBSUEsT0FBT0EsR0FBR0EsRUFBRUEsRUFBQ0EsS0FBS0EsQ0FBQ0E7b0JBQ3ZCQSxPQUFNQSxLQUFLQSxHQUFHQSxhQUFhQSxDQUFDQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxFQUFFQSxDQUFDQTt3QkFDakRBLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO29CQUN0QkEsQ0FBQ0E7b0JBQ0RBLE1BQU1BLENBQUNBLE9BQU9BLENBQUNBO2dCQUNyQkEsQ0FBQ0E7Z0JBRURGLDZCQUFLQSxHQUFMQSxVQUFNQSxPQUFPQTtvQkFDVEcsSUFBSUEsSUFBSUEsR0FBYUEsSUFBSUEsV0FBV0EsRUFBRUEsQ0FBQ0E7b0JBQ3ZDQSxJQUFJQSxPQUFPQSxHQUFHQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxPQUFPQSxDQUFDQSxFQUFFQSxPQUFPQSxHQUFHQSxPQUFPQSxDQUFDQSxNQUFNQSxDQUFDQTtvQkFDakVBLElBQUlBLE1BQU1BLEdBQUdBLENBQUNBLEVBQUNBLE1BQU1BLEdBQUdBLENBQUNBLEVBQUNBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO29CQUVoQ0EsSUFBSUEsWUFBWUEsR0FB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QSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxLQUFLQSxLQUFLQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQTt3QkFDcENBLElBQUlBLENBQUNBLEtBQUtBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLEdBQUdBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLEtBQUtBLEdBQUdBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO3dCQUM1REEsSUFBSUEsQ0FBQ0EsR0FBR0EsR0FBS0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsV0FBV0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsRUFBRUEsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsS0FBS0EsRUFBRUEsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7b0JBQzlFQSxDQUFDQTtvQkFHREEsSUFBSUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsTUFBTUEsSUFBSUEsTUFBTUEsS0FBS0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7d0JBQ2pDQSxJQUFJQSxDQUFDQSxNQUFNQSxFQUFFQSxDQUFDQTtvQkFHaEJBLENBQUNBO29CQUFDQSxJQUFJQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxNQUFNQSxJQUFJQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxLQUFLQSxHQUFHQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTt3QkFFN0NBLHNFQUFzRUE7d0JBQ3RFQSxJQUFJQSxDQUFDQSxHQUFHQSxHQUFHQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxXQUFXQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxFQUFFQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxHQUFFQSxDQUFDQSxFQUFFQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTt3QkFDM0VBLElB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QSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxHQUFHQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQTt3QkFDOUJBLElBQUlBLENBQUNBLEtBQUtBLElBQUlBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEdBQUdBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBO29CQUMxQ0EsQ0FBQ0E7b0JBRURBLG9DQUFvQ0E7b0JBQ3BDQSxJQUFJQSxLQUFLQSxHQUFHQSxDQUFDQSxDQUFDQTtvQkFFZEEsMkNBQTJDQTtvQkFDM0NBLEdBQUdBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLEVBQUVBLENBQUNBLElBQUlBLElBQUlBLENBQUNBLE9BQU9BLEVBQUVBLENBQUNBLEVBQUVBLEVBQUVBLENBQUNBO3dCQUN2Q0EsMkJBQTJCQTt3QkFDM0JBLElBQUlBLE9BQU9BLEdBQUdBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLEVBQ3ZCQSxPQUFPQSxHQUFHQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQSxFQUN2QkEsR0FBR0EsR0FBR0EsQ0FBQ0EsR0FBR0EsS0FBS0EsRUFDZkEsR0FBR0EsQ0FBQ0E7d0JBRVJBLGtEQUFrREE7d0JBQ2xEQSxHQUFHQSxHQUFHQSxDQUFDQSxDQUFDQSxJQUFJQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxLQUFLQSxDQUFDQSxHQUFHQSxHQUFHQSxHQUFHQSxJQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxHQUFHQSxDQUFDQTt3QkFDckRBLEdBQUdBLEdBQUdBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLE1BQU1BLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO3dCQUMzQkEsb0NBQW9DQTt3QkFDcENBLEVBQUVBLENBQUNBLENBQUNBLE9BQU9BLElBQUlBLE9BQU9BLEtBQUtBLEdBQUdBLElBQUlBLE9BQU9BLElBQUlBLE9BQU9BLEtBQUtBLEdBQUdBLENBQUNBLENBQUNB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Q0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0E7b0JBQzVDQSxDQUFDQTtvQkFFREEsZUFBZUE7b0JBQ2ZBLElBQUlBLENBQUNBLEdBQUdBLEdBQUdBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLFFBQVFBLENBQUNBLElBQUlBLENBQUNBLEdBQUdBLEVBQUVBLEdBQUdBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBO2dCQUNuREEsQ0FBQ0E7O2dCQUVEZCxFQUFFQTtnQkFDRkEsV0FBV0E7Z0JBQ1hBLDREQUE0REE7Z0JBQzVEQSxxQ0FBcUNBO2dCQUNyQ0EsRUFBRUE7Z0JBQ0ZBLDJDQUFxQkEsR0FBckJBLFVBQXNCQSxVQUFVQTtvQkFDOUJlLE1BQU1BLENBQUNBLENBQUNBLEVBQUVBLEdBQUdBLEVBQUVBLFVBQVVBLEVBQUVBLENBQUNBLENBQUNBO2dCQUMvQkEsQ0FBQ0E7O2dCQUNMZixrQkFBQ0E7WUFBREEsQ0FqV0EsQUFpV0NBLElBQUE7WUFqV0QscUNBaVdDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9BaUlucHV0L0FpTWF0Y2hlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFBhdHRlcm5JbmZve1xuICAgIGlucHV0cz1bXTtcbiAgICBjaGFycz1bXTtcbiAgICBtTGVuZ3RoOm51bWJlcjtcbn1cbiBcbmNsYXNzIFBhdHRlcm5QYXJzZXJ7XG4gICAgc3RhdGljIERFTElNX1NJWkU6bnVtYmVyID0gNDtcbiAgICBzdGF0aWMgcmVnZXhwOlJlZ0V4cCAgPSBuZXcgUmVnRXhwKCd7eyhbXn1dKyl9fScsICdnJyk7IFxuICAgIFxuICAgIGdldE1hdGNoZXMocGF0dGVybil7XG4gICAgICAgICAgLy8gUG9wdWxhdGUgYXJyYXkgb2YgbWF0Y2hlc1xuICAgICAgICAgIHZhciBtYXRjaGVzID0gW10sbWF0Y2g7XG4gICAgICAgICAgd2hpbGUobWF0Y2ggPSBQYXR0ZXJuUGFyc2VyLnJlZ2V4cC5leGVjKHBhdHRlcm4pKSB7XG4gICAgICAgICAgICBtYXRjaGVzLnB1c2gobWF0Y2gpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbWF0Y2hlcztcbiAgICB9XG4gICAgXG4gICAgcGFyc2UocGF0dGVybil7XG4gICAgICAgIHZhciBpbmZvOlBhdHRlcm5JbmZvPW5ldyBQYXR0ZXJuSW5mbygpO1xuICAgICAgICB2YXIgbWF0Y2hlcyA9IHRoaXMuZ2V0TWF0Y2hlcyhwYXR0ZXJuKSwgcExlbmd0aCA9IHBhdHRlcm4ubGVuZ3RoO1xuICAgICAgICB2YXIgbUNvdW50ID0gMCxpQ291bnQgPSAwLGkgPSAwO1xuXG4gICAgICAgIHZhciBwcm9jZXNzTWF0Y2ggPSBmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgICAgdmFyIHZhbExlbmd0aCA9IHZhbC5sZW5ndGg7XG4gICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB2YWxMZW5ndGg7IGorKykge1xuICAgICAgICAgICAgaW5mby5pbnB1dHNbaUNvdW50XSA9IHZhbC5jaGFyQXQoaik7XG4gICAgICAgICAgICBpQ291bnQrKztcbiAgICAgICAgICB9XG4gICAgICAgICAgbUNvdW50ICsrO1xuICAgICAgICAgIGkgKz0gKHZhbC5sZW5ndGggKyBQYXR0ZXJuUGFyc2VyLkRFTElNX1NJWkUgLSAxKTtcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIGZvciAoaTsgaSA8IHBMZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChtQ291bnQgPCBtYXRjaGVzLmxlbmd0aCAmJiBpID09PSBtYXRjaGVzW21Db3VudF0uaW5kZXgpIHtcbiAgICAgICAgICAgIHByb2Nlc3NNYXRjaChtYXRjaGVzW21Db3VudF1bMV0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbmZvLmNoYXJzW2kgLSAobUNvdW50ICogUGF0dGVyblBhcnNlci5ERUxJTV9TSVpFKV0gPSBwYXR0ZXJuLmNoYXJBdChpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGluZm8ubUxlbmd0aCA9IGkgLSAobUNvdW50ICogUGF0dGVyblBhcnNlci5ERUxJTV9TSVpFKTtcbiAgICAgICAgcmV0dXJuIGluZm87ICAgIFxuICAgIH1cbiAgICBcbn1cblxuXG5jbGFzcyBQYXR0ZXJuTWF0Y2hlciB7XG4gICAgbWF0Y2hlcnM6YW55ID0gW10gXG4gICAgcGF0dGVybnM6YW55ID0gW107XG5cbiAgICBhZGQobWF0Y2hlcixwYXR0ZXJuKXtcbiAgICAgICAgaWYgKG1hdGNoZXIgPT09ICcqJykgXG4gICAgICAgICAgdGhpcy5tYXRjaGVycy5wdXNoKC8uKi8pO1xuICAgICAgICBlbHNlIFxuICAgICAgICAgIHRoaXMubWF0Y2hlcnMucHVzaChuZXcgUmVnRXhwKG1hdGNoZXIpKTtcblxuXG4gICAgICAgIHZhciBwYXR0ZXJuUGFyc2VyID0gbmV3IFBhdHRlcm5QYXJzZXIoKTsgXG4gICAgICAgIHZhciBwYXJzZWRQYXR0ZXJuID0gcGF0dGVyblBhcnNlci5wYXJzZShwYXR0ZXJuKTtcbiAgICAgICAgdGhpcy5wYXR0ZXJucy5wdXNoKHBhcnNlZFBhdHRlcm4pO1xuICAgIH1cblxuICAgIGdldFBhdHRlcm4oaW5wdXQpOlBhdHRlcm5JbmZve1xuICAgICAgICBmb3IodmFyIGk9MDtpPHRoaXMubWF0Y2hlcnMubGVuZ3RoO2krKyl7XG4gICAgICAgICAgdmFyIG1hdGNoZXI9dGhpcy5tYXRjaGVyc1tpXTtcbiAgICAgICAgICBpZiAobWF0Y2hlci50ZXN0KGlucHV0KSkgXG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhdHRlcm5zW2ldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGhlbGxvKHRleHQ6c3RyaW5nKXtcbiAgICAgIGFsZXJ0KHRleHQpO1xuICAgIH1cbn1cblxuY2xhc3MgSW5wdXRTZWxlY3Qge1xuICAgIC8vXG4gICAgLy8gR2V0IGJlZ2luIGFuZCBlbmQgcG9zaXRpb25zIG9mIHNlbGVjdGVkIGlucHV0LiBSZXR1cm4gMCdzXG4gICAgLy8gaWYgdGhlcmUgaXMgbm8gc2VsZWN0aWlvbiBkYXRhXG4gICAgLy9cbiAgICBnZXQoZWwpIHtcbiAgICAgIC8vIElmIG5vcm1hbCBicm93c2VyIHJldHVybiB3aXRoIHJlc3VsdFxuICAgICAgaWYgKHR5cGVvZiBlbC5zZWxlY3Rpb25TdGFydCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuIHsgXG4gICAgICAgICAgYmVnaW46IGVsLnNlbGVjdGlvblN0YXJ0LFxuICAgICAgICAgIGVuZDogZWwuc2VsZWN0aW9uRW5kXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgXG4gICAgICAvLyBVaC1PaC4gV2UgbXVzdCBiZSBJRS4gRnVuIHdpdGggVGV4dFJhbmdlISFcbiAgICAgIGNvbnN0IGRvYyA9IGRvY3VtZW50IGFzIGFueTtcbiAgICAgIHZhciByYW5nZSA9IGRvYy5zZWxlY3Rpb24uY3JlYXRlUmFuZ2UoKTtcbiAgICAgIC8vIERldGVybWluZSBpZiB0aGVyZSBpcyBhIHNlbGVjdGlvblxuICAgICAgaWYgKHJhbmdlICYmIHJhbmdlLnBhcmVudEVsZW1lbnQoKSA9PT0gZWwpIHtcbiAgICAgICAgdmFyIGlucHV0UmFuZ2UgPSBlbC5jcmVhdGVUZXh0UmFuZ2UoKSxcbiAgICAgICAgICAgIGVuZFJhbmdlICAgPSBlbC5jcmVhdGVUZXh0UmFuZ2UoKSxcbiAgICAgICAgICAgIGxlbmd0aCAgICAgPSBlbC52YWx1ZS5sZW5ndGg7XG4gICAgXG4gICAgICAgIC8vIENyZWF0ZSBhIHdvcmtpbmcgVGV4dFJhbmdlIGZvciB0aGUgaW5wdXQgc2VsZWN0aW9uXG4gICAgICAgIGlucHV0UmFuZ2UubW92ZVRvQm9va21hcmsocmFuZ2UuZ2V0Qm9va21hcmsoKSk7XG4gICAgXG4gICAgICAgIC8vIE1vdmUgZW5kUmFuZ2UgYmVnaW4gcG9zIHRvIGVuZCBwb3MgKGhlbmNlIGVuZFJhbmdlKVxuICAgICAgICBlbmRSYW5nZS5jb2xsYXBzZShmYWxzZSk7XG4gICAgICAgIFxuICAgICAgICAvLyBJZiB3ZSBhcmUgYXQgdGhlIHZlcnkgZW5kIG9mIHRoZSBpbnB1dCwgYmVnaW4gYW5kIGVuZFxuICAgICAgICAvLyBtdXN0IGJvdGggYmUgdGhlIGxlbmd0aCBvZiB0aGUgZWwudmFsdWVcbiAgICAgICAgaWYgKGlucHV0UmFuZ2UuY29tcGFyZUVuZFBvaW50cygnU3RhcnRUb0VuZCcsIGVuZFJhbmdlKSA+IC0xKSB7XG4gICAgICAgICAgcmV0dXJuIHsgYmVnaW46IGxlbmd0aCwgZW5kOiBsZW5ndGggfTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICAvLyBOb3RlOiBtb3ZlU3RhcnQgdXN1YWxseSByZXR1cm5zIHRoZSB1bml0cyBtb3ZlZCwgd2hpY2ggXG4gICAgICAgIC8vIG9uZSBtYXkgdGhpbmsgaXMgLWxlbmd0aCwgaG93ZXZlciwgaXQgd2lsbCBzdG9wIHdoZW4gaXRcbiAgICAgICAgLy8gZ2V0cyB0byB0aGUgYmVnaW4gb2YgdGhlIHJhbmdlLCB0aHVzIGdpdmluZyB1cyB0aGVcbiAgICAgICAgLy8gbmVnYXRpdmUgdmFsdWUgb2YgdGhlIHBvcy5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBiZWdpbjogLWlucHV0UmFuZ2UubW92ZVN0YXJ0KCdjaGFyYWN0ZXInLCAtbGVuZ3RoKSxcbiAgICAgICAgICBlbmQ6IC1pbnB1dFJhbmdlLm1vdmVFbmQoJ2NoYXJhY3RlcicsIC1sZW5ndGgpXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgXG4gICAgICAvL1JldHVybiAwJ3Mgb24gbm8gc2VsZWN0aW9uIGRhdGFcbiAgICAgIHJldHVybiB7IGJlZ2luOiAwLCBlbmQ6IDAgfTtcbiAgICB9OyAgXG4gICAgXG4gICAgXG4gICAgLy9cbiAgICAvLyBTZXQgdGhlIGNhcmV0IHBvc2l0aW9uIGF0IGEgc3BlY2lmaWVkIGxvY2F0aW9uXG4gICAgLy9cbiAgICBzZXQoZWwsIHBvcykge1xuICAgICAgLy8gTm9ybWFsaXplIHBvc1xuICAgICAgaWYgKHR5cGVvZiBwb3MgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHBvcyA9IHsgYmVnaW46IHBvcywgZW5kOiBwb3MgfTtcbiAgICAgIH1cbiAgICBcbiAgICAgIC8vIElmIG5vcm1hbCBicm93c2VyXG4gICAgICBpZiAoZWwuc2V0U2VsZWN0aW9uUmFuZ2UpIHtcbiAgICAgICAgZWwuZm9jdXMoKTtcbiAgICAgICAgZWwuc2V0U2VsZWN0aW9uUmFuZ2UocG9zLmJlZ2luLCBwb3MuZW5kKTtcbiAgICBcbiAgICAgIC8vIElFID0gVGV4dFJhbmdlIGZ1blxuICAgICAgfSBlbHNlIGlmIChlbC5jcmVhdGVUZXh0UmFuZ2UpIHtcbiAgICAgICAgdmFyIHJhbmdlID0gZWwuY3JlYXRlVGV4dFJhbmdlKCk7XG4gICAgICAgIHJhbmdlLmNvbGxhcHNlKHRydWUpO1xuICAgICAgICByYW5nZS5tb3ZlRW5kKCdjaGFyYWN0ZXInLCBwb3MuZW5kKTtcbiAgICAgICAgcmFuZ2UubW92ZVN0YXJ0KCdjaGFyYWN0ZXInLCBwb3MuYmVnaW4pO1xuICAgICAgICByYW5nZS5zZWxlY3QoKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIFxuICAgIFxufVxuXG5jbGFzcyBVdGlscyB7XG4gICAgdUFnZW50ID0gKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnKSA/IG5hdmlnYXRvci51c2VyQWdlbnQgOiBudWxsO1xuIFxuICAgIC8vXG4gICAgLy8gU2hhbGxvdyBjb3B5IHByb3BlcnRpZXMgZnJvbSBuIG9iamVjdHMgdG8gZGVzdE9ialxuICAgIC8vXG4gICAgZXh0ZW5kKGRlc3RPYmopIHtcbiAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGZvciAodmFyIGtleSBpbiBhcmd1bWVudHNbaV0pIHtcbiAgICAgICAgICBkZXN0T2JqW2tleV0gPSBhcmd1bWVudHNbaV1ba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGRlc3RPYmo7XG4gICAgfTtcbiAgICBcbiAgICAvL1xuICAgIC8vIEFkZCBhIGdpdmVuIGNoYXJhY3RlciB0byBhIHN0cmluZyBhdCBhIGRlZmluZWQgcG9zXG4gICAgLy9cbiAgICBhZGRDaGFycyhzdHIsIGNoYXJzLCBwb3MpIHtcbiAgICAgIHJldHVybiBzdHIuc3Vic3RyKDAsIHBvcykgKyBjaGFycyArIHN0ci5zdWJzdHIocG9zLCBzdHIubGVuZ3RoKTtcbiAgICB9OyBcbiAgICBcbiAgICAvL1xuICAgIC8vIFJlbW92ZSBhIHNwYW4gb2YgY2hhcmFjdGVyc1xuICAgIC8vXG4gICAgcmVtb3ZlQ2hhcnMoc3RyLCBzdGFydCwgZW5kKSB7XG4gICAgICByZXR1cm4gc3RyLnN1YnN0cigwLCBzdGFydCkgKyBzdHIuc3Vic3RyKGVuZCwgc3RyLmxlbmd0aCk7XG4gICAgfTtcbiAgICBcbiAgICAvL1xuICAgIC8vIFJldHVybiB0cnVlL2ZhbHNlIGlzIG51bSBmYWxzZSBiZXR3ZWVuIGJvdW5kc1xuICAgIC8vXG4gICAgaXNCZXR3ZWVuKG51bSwgYm91bmRzKSB7XG4gICAgICBib3VuZHMuc29ydChmdW5jdGlvbihhLGIpIHsgcmV0dXJuIGEtYjsgfSk7XG4gICAgICByZXR1cm4gKG51bSA+IGJvdW5kc1swXSAmJiBudW0gPCBib3VuZHNbMV0pO1xuICAgIH07XG4gICAgXG4gICAgLy9cbiAgICAvLyBIZWxwZXIgbWV0aG9kIGZvciBjcm9zcyBicm93c2VyIGV2ZW50IGxpc3RlbmVyc1xuICAgIC8vXG4gICAgYWRkTGlzdGVuZXIoZWwsIGV2dCwgaGFuZGxlcikge1xuICAgICAgcmV0dXJuICh0eXBlb2YgZWwuYWRkRXZlbnRMaXN0ZW5lciAhPT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgID8gZWwuYWRkRXZlbnRMaXN0ZW5lcihldnQsIGhhbmRsZXIsIGZhbHNlKVxuICAgICAgICA6IGVsLmF0dGFjaEV2ZW50KCdvbicgKyBldnQsIGhhbmRsZXIpO1xuICAgIH07XG4gICAgXG4gICAgLy9cbiAgICAvLyBIZWxwZXIgbWV0aG9kIGZvciBjcm9zcyBicm93c2VyIGltcGxlbWVudGF0aW9uIG9mIHByZXZlbnREZWZhdWx0XG4gICAgLy9cbiAgICBwcmV2ZW50RGVmYXVsdChldnQpIHtcbiAgICAgIHJldHVybiAoZXZ0LnByZXZlbnREZWZhdWx0KSA/IGV2dC5wcmV2ZW50RGVmYXVsdCgpIDogKGV2dC5yZXR1cm5WYWx1ZSA9IGZhbHNlKTtcbiAgICB9O1xuICAgIFxuICAgIC8vXG4gICAgLy8gSGVscGVyIG1ldGhvZCBmb3IgY3Jvc3MgYnJvd3NlciBpbXBsZW1lbnRhdGlvbiBmb3IgZ3JhYmJpbmdcbiAgICAvLyBjbGlwYm9hcmQgZGF0YVxuICAgIC8vXG4gICAgZ2V0Q2xpcChldnQpIHtcbiAgICAgIHZhciBldmVudDphbnk9ZXZ0O1xuICAgICAgdmFyIHdpbjphbnk9d2luZG93O1xuICAgICAgaWYgKGV2ZW50LmNsaXBib2FyZERhdGEpIHsgcmV0dXJuIGV2ZW50LmNsaXBib2FyZERhdGEuZ2V0RGF0YSgnVGV4dCcpOyB9XG4gICAgICBpZiAod2luLmNsaXBib2FyZERhdGEpIHsgcmV0dXJuIHdpbi5jbGlwYm9hcmREYXRhLmdldERhdGEoJ1RleHQnKTsgfVxuICAgIH07XG4gICAgXG4gICAgLy9cbiAgICAvLyBMb29wIG92ZXIgb2JqZWN0IGFuZCBjaGVja2luZyBmb3IgbWF0Y2hpbmcgcHJvcGVydGllc1xuICAgIC8vXG4gICAgZ2V0TWF0Y2hpbmdLZXkod2hpY2gsIGtleUNvZGUsIGtleXMpIHtcbiAgICAgIC8vIExvb3Agb3ZlciBhbmQgcmV0dXJuIGlmIG1hdGNoZWQuXG4gICAgICBmb3IgKHZhciBrIGluIGtleXMpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXNba107XG4gICAgICAgIGlmICh3aGljaCA9PT0ga2V5LndoaWNoICYmIGtleUNvZGUgPT09IGtleS5rZXlDb2RlKSB7XG4gICAgICAgICAgcmV0dXJuIGs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIFxuICAgIC8vXG4gICAgLy8gUmV0dXJucyB0cnVlL2ZhbHNlIGlmIGsgaXMgYSBkZWwga2V5RG93blxuICAgIC8vXG4gICAgaXNEZWxLZXlEb3duKHdoaWNoLCBrZXlDb2RlKSB7XG4gICAgICB2YXIga2V5cyA9IHtcbiAgICAgICAgJ2JhY2tzcGFjZSc6IHsgJ3doaWNoJzogOCwgJ2tleUNvZGUnOiA4IH0sXG4gICAgICAgICdkZWxldGUnOiB7ICd3aGljaCc6IDQ2LCAna2V5Q29kZSc6IDQ2IH1cbiAgICAgIH07XG4gICAgXG4gICAgICByZXR1cm4gdGhpcy5nZXRNYXRjaGluZ0tleSh3aGljaCwga2V5Q29kZSwga2V5cyk7XG4gICAgfTtcbiAgICBcbiAgICAvL1xuICAgIC8vIFJldHVybnMgdHJ1ZS9mYWxzZSBpZiBrIGlzIGEgZGVsIGtleVByZXNzXG4gICAgLy9cbiAgICBpc0RlbEtleVByZXNzKHdoaWNoLCBrZXlDb2RlKSB7XG4gICAgICB2YXIga2V5cyA9IHtcbiAgICAgICAgJ2JhY2tzcGFjZSc6IHsgJ3doaWNoJzogOCwgJ2tleUNvZGUnOiA4LCAnc2hpZnRLZXknOiBmYWxzZSB9LFxuICAgICAgICAnZGVsZXRlJzogeyAnd2hpY2gnOiAwLCAna2V5Q29kZSc6IDQ2IH1cbiAgICAgIH07XG4gICAgXG4gICAgICByZXR1cm4gdGhpcy5nZXRNYXRjaGluZ0tleSh3aGljaCwga2V5Q29kZSwga2V5cyk7XG4gICAgfTtcblxuICAgIC8vXG4gICAgLy8gRGV0ZXJtaW5lIGlmIGtleXByZXNzIHJlbGF0ZXMgdG8gc3BlY2lhbEtleVxuICAgIC8vXG4gICAgaXNTcGVjaWFsS2V5UHJlc3Mod2hpY2gsIGtleUNvZGUpIHtcbiAgICAgIHZhciBrZXlzID0ge1xuICAgICAgICAndGFiJzogeyAnd2hpY2gnOiAwLCAna2V5Q29kZSc6IDkgfSxcbiAgICAgICAgJ2VudGVyJzogeyAnd2hpY2gnOiAxMywgJ2tleUNvZGUnOiAxMyB9LFxuICAgICAgICAnZW5kJzogeyAnd2hpY2gnOiAwLCAna2V5Q29kZSc6IDM1IH0sXG4gICAgICAgICdob21lJzogeyAnd2hpY2gnOiAwLCAna2V5Q29kZSc6IDM2IH0sXG4gICAgICAgICdsZWZ0YXJyb3cnOiB7ICd3aGljaCc6IDAsICdrZXlDb2RlJzogMzcgfSxcbiAgICAgICAgJ3VwYXJyb3cnOiB7ICd3aGljaCc6IDAsICdrZXlDb2RlJzogMzggfSxcbiAgICAgICAgJ3JpZ2h0YXJyb3cnOiB7ICd3aGljaCc6IDAsICdrZXlDb2RlJzogMzkgfSxcbiAgICAgICAgJ2Rvd25hcnJvdyc6IHsgJ3doaWNoJzogMCwgJ2tleUNvZGUnOiA0MCB9LFxuICAgICAgICAnRjUnOiB7ICd3aGljaCc6IDExNiwgJ2tleUNvZGUnOiAxMTYgfVxuICAgICAgfTtcbiAgICBcbiAgICAgIHJldHVybiB0aGlzLmdldE1hdGNoaW5nS2V5KHdoaWNoLCBrZXlDb2RlLCBrZXlzKTtcbiAgICB9O1xuICAgIFxuICAgIC8vXG4gICAgLy8gUmV0dXJucyB0cnVlL2ZhbHNlIGlmIG1vZGlmaWVyIGtleSBpcyBoZWxkIGRvd25cbiAgICAvL1xuICAgIGlzTW9kaWZpZXIoZXZ0KSB7XG4gICAgICByZXR1cm4gZXZ0LmN0cmxLZXkgfHwgZXZ0LmFsdEtleSB8fCBldnQubWV0YUtleTtcbiAgICB9O1xuICAgIFxufVxuXG4gXG5leHBvcnQgY2xhc3MgQWlGb3JtYXR0ZXIge1xuICAgIHByaXZhdGUgaW5wdFJlZ3M6YW55ID0geyc5JzogL1swLTldLywnYSc6IC9bQS1aYS16XS8sJyonOiAvW0EtWmEtejAtOV0vfTtcbiAgICBwcml2YXRlIHBhdHRlcm5NYXRjaGVyOlBhdHRlcm5NYXRjaGVyID0gbmV3IFBhdHRlcm5NYXRjaGVyKCk7XG4gICAgcHJpdmF0ZSBpbnB0U2VsIDogSW5wdXRTZWxlY3QgPSBuZXcgSW5wdXRTZWxlY3QoKTtcbiAgICBwcml2YXRlIHV0aWxzOlV0aWxzPW5ldyBVdGlscygpO1xuXG4gICAgaW5wdXRzPVtdO1xuICAgIGNoYXJzPVtdO1xuICAgIG1MZW5ndGg6bnVtYmVyO1xuXG4gICAgb3B0czphbnk7XG4gICAgbmV3UG9zOmFueTtcbiAgICBmb2N1c1N0YXJ0OmFueTtcbiAgICBzZWw6YW55O1xuICAgIHZhbDphbnk7XG4gICAgZGVsdGE6YW55O1xuICAgIGhsZHJzOmFueSA9IHt9O1xuICAgIGZvY3VzOmFueSA9IDA7XG4gIFxuICBcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBhbnkpIHsgIFxuICAgICAgICB0aGlzLnVwZGF0ZVBhdHRlcm4oKTtcbiAgICAgICAgdGhpcy5wcm9jZXNzS2V5KCcnLCBmYWxzZSk7XG4gICAgfVxuICAgIFxuICAgIC8vXG4gICAgLy8gQHByaXZhdGVcbiAgICAvLyBEZXRlcm1pbmUgY29ycmVjdCBmb3JtYXQgcGF0dGVybiBiYXNlZCBvbiBpbnB1dCB2YWxcbiAgICAvL1xuICAgIHVwZGF0ZVBhdHRlcm4oKSB7XG4gICAgICAvLyBEZXRlcm1pbmUgYXBwcm9wcmlhdGUgcGF0dGVyblxuICAgICAgdmFyIG5ld1BhdHRlcm46UGF0dGVybkluZm8gPSB0aGlzLnBhdHRlcm5NYXRjaGVyLmdldFBhdHRlcm4odGhpcy52YWwpO1xuICAgIFxuICAgICAgLy8gT25seSB1cGRhdGUgdGhlIHBhdHRlcm4gaWYgdGhlcmUgaXMgYW4gYXBwcm9wcmlhdGUgcGF0dGVybiBmb3IgdGhlIHZhbHVlLlxuICAgICAgLy8gT3RoZXJ3aXNlLCBsZWF2ZSB0aGUgY3VycmVudCBwYXR0ZXJuIChhbmQgbGlrZWx5IGRlbGV0ZSB0aGUgbGF0ZXN0IGNoYXJhY3Rlci4pXG4gICAgICBpZiAobmV3UGF0dGVybikge1xuICAgICAgICAvLyBHZXQgaW5mbyBhYm91dCB0aGUgZ2l2ZW4gcGF0dGVyblxuICAgICAgICB0aGlzLm1MZW5ndGggPSBuZXdQYXR0ZXJuLm1MZW5ndGg7XG4gICAgICAgIHRoaXMuY2hhcnMgICA9IG5ld1BhdHRlcm4uY2hhcnM7XG4gICAgICAgIHRoaXMuaW5wdXRzICAgPSBuZXdQYXR0ZXJuLmlucHV0cztcbiAgICAgIH1cbiAgICB9O1xuICAgIFxuICAgIFxuICAgIC8vXG4gICAgLy8gQHByaXZhdGVcbiAgICAvLyBVc2luZyB0aGUgcHJvdmlkZWQga2V5IGluZm9ybWF0aW9uLCBhbHRlciBlbCB2YWx1ZS5cbiAgICAvL1xuICAgIHByb2Nlc3NLZXkoY2hhcnMsIGRlbEtleSwgaWdub3JlQ2FyZXQ9ZmFsc2UpIHtcbiAgICAgIC8vIEdldCBjdXJyZW50IHN0YXRlXG4gICAgICB0aGlzLnNlbCA9IHRoaXMuaW5wdFNlbC5nZXQodGhpcy5lbCk7XG4gICAgICB0aGlzLnZhbCA9IHRoaXMuZWwudmFsdWU7XG4gICAgXG4gICAgICAvLyBJbml0IHZhbHVlc1xuICAgICAgdGhpcy5kZWx0YSA9IDA7XG4gICAgXG4gICAgICAvLyBJZiBjaGFycyB3ZXJlIGhpZ2hsaWdodGVkLCB3ZSBuZWVkIHRvIHJlbW92ZSB0aGVtXG4gICAgICBpZiAodGhpcy5zZWwuYmVnaW4gIT09IHRoaXMuc2VsLmVuZCkge1xuICAgICAgICB0aGlzLmRlbHRhID0gKC0xKSAqIE1hdGguYWJzKHRoaXMuc2VsLmJlZ2luIC0gdGhpcy5zZWwuZW5kKTtcbiAgICAgICAgdGhpcy52YWwgICA9IHRoaXMudXRpbHMucmVtb3ZlQ2hhcnModGhpcy52YWwsIHRoaXMuc2VsLmJlZ2luLCB0aGlzLnNlbC5lbmQpO1xuICAgICAgfVxuICAgIFxuICAgICAgLy8gRGVsZXRlIGtleSAobW92ZXMgb3Bwb3NpdGUgZGlyZWN0aW9uKVxuICAgICAgZWxzZSBpZiAoZGVsS2V5ICYmIGRlbEtleSA9PT0gNDYpIHtcbiAgICAgICAgdGhpcy5kZWxldGUoKTtcbiAgICBcbiAgICAgIC8vIG9yIEJhY2tzcGFjZSBhbmQgbm90IGF0IHN0YXJ0XG4gICAgICB9IGVsc2UgaWYgKGRlbEtleSAmJiB0aGlzLnNlbC5iZWdpbiAtIDEgPj0gMCkge1xuICAgIFxuICAgICAgICAvLyBBbHdheXMgaGF2ZSBhIGRlbHRhIG9mIGF0IGxlYXN0IC0xIGZvciB0aGUgY2hhcmFjdGVyIGJlaW5nIGRlbGV0ZWQuXG4gICAgICAgIHRoaXMudmFsID0gdGhpcy51dGlscy5yZW1vdmVDaGFycyh0aGlzLnZhbCwgdGhpcy5zZWwuZW5kIC0xLCB0aGlzLnNlbC5lbmQpO1xuICAgICAgICB0aGlzLmRlbHRhIC09IDE7XG4gICAgXG4gICAgICAvLyBvciBCYWNrc3BhY2UgYW5kIGF0IHN0YXJ0IC0gZXhpdFxuICAgICAgfSBlbHNlIGlmIChkZWxLZXkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgXG4gICAgICAvLyBJZiB0aGUga2V5IGlzIG5vdCBhIGRlbCBrZXksIGl0IHNob3VsZCBjb252ZXJ0IHRvIGEgc3RyXG4gICAgICBpZiAoIWRlbEtleSkge1xuICAgICAgICAvLyBBZGQgY2hhciBhdCBwb3NpdGlvbiBhbmQgaW5jcmVtZW50IGRlbHRhXG4gICAgICAgIHRoaXMudmFsID0gdGhpcy51dGlscy5hZGRDaGFycyh0aGlzLnZhbCwgY2hhcnMsIHRoaXMuc2VsLmJlZ2luKTtcbiAgICAgICAgdGhpcy5kZWx0YSArPSBjaGFycy5sZW5ndGg7XG4gICAgICB9XG4gICAgXG4gICAgICAvLyBGb3JtYXQgZWwudmFsdWUgKGFsc28gaGFuZGxlcyB1cGRhdGluZyBjYXJldCBwb3NpdGlvbilcbiAgICAgIHRoaXMuZm9ybWF0VmFsdWUoaWdub3JlQ2FyZXQpO1xuICAgIH07IFxuICAgIFxuICAgIFxuICAgIC8vXG4gICAgLy8gQHByaXZhdGVcbiAgICAvLyBIYW5kbGVyIGNhbGxlZCBvbiBhbGwga2V5RG93biBzdHJva2VzLiBBbGwga2V5cyB0cmlnZ2VyXG4gICAgLy8gdGhpcyBoYW5kbGVyLiBPbmx5IHByb2Nlc3MgZGVsZXRlIGtleXMuXG4gICAgLy9cbiAgICBrZXlEb3duKGV2dCkge1xuICAgICAgLy8gVGhlIGZpcnN0IHRoaW5nIHdlIG5lZWQgaXMgdGhlIGNoYXJhY3RlciBjb2RlXG4gICAgICB2YXIgayA9IGV2dC53aGljaCB8fCBldnQua2V5Q29kZTtcbiAgICBcbiAgICAgIC8vIElmIGRlbGV0ZSBrZXlcbiAgICAgIGlmIChrICYmIHRoaXMudXRpbHMuaXNEZWxLZXlEb3duKGV2dC53aGljaCwgZXZ0LmtleUNvZGUpKSB7XG4gICAgICAgIC8vIFByb2Nlc3MgdGhlIGtleUNvZGUgYW5kIHByZXZlbnQgZGVmYXVsdFxuICAgICAgICB0aGlzLnByb2Nlc3NLZXkobnVsbCwgayk7XG4gICAgICAgIHJldHVybiB0aGlzLnV0aWxzLnByZXZlbnREZWZhdWx0KGV2dCk7XG4gICAgICB9XG4gICAgfTtcbiAgICBcbiAgICAvL1xuICAgIC8vIEBwcml2YXRlXG4gICAgLy8gSGFuZGxlciBjYWxsZWQgb24gYWxsIGtleVByZXNzIHN0cm9rZXMuIE9ubHkgcHJvY2Vzc2VzXG4gICAgLy8gY2hhcmFjdGVyIGtleXMgKGFzIGxvbmcgYXMgbm8gbW9kaWZpZXIga2V5IGlzIGluIHVzZSkuXG4gICAgLy9cbiAgICBrZXlQcmVzcyhldnQpIHtcbiAgICAgIC8vIFRoZSBmaXJzdCB0aGluZyB3ZSBuZWVkIGlzIHRoZSBjaGFyYWN0ZXIgY29kZVxuICAgICAgdmFyIGssIGlzU3BlY2lhbDtcbiAgICAgIC8vIE1vemlsbGEgd2lsbCB0cmlnZ2VyIG9uIHNwZWNpYWwga2V5cyBhbmQgYXNzaWduIHRoZSB0aGUgdmFsdWUgMFxuICAgICAgLy8gV2Ugd2FudCB0byB1c2UgdGhhdCAwIHJhdGhlciB0aGFuIHRoZSBrZXlDb2RlIGl0IGFzc2lnbnMuXG4gICAgICBrID0gZXZ0LndoaWNoIHx8IGV2dC5rZXlDb2RlO1xuICAgICAgaXNTcGVjaWFsID0gdGhpcy51dGlscy5pc1NwZWNpYWxLZXlQcmVzcyhldnQud2hpY2gsIGV2dC5rZXlDb2RlKTtcbiAgICBcbiAgICAgIC8vIFByb2Nlc3MgdGhlIGtleUNvZGUgYW5kIHByZXZlbnQgZGVmYXVsdFxuICAgICAgaWYgKCF0aGlzLnV0aWxzLmlzRGVsS2V5UHJlc3MoZXZ0LndoaWNoLCBldnQua2V5Q29kZSkgJiYgIWlzU3BlY2lhbCAmJiAhdGhpcy51dGlscy5pc01vZGlmaWVyKGV2dCkpIHtcbiAgICAgICAgdGhpcy5wcm9jZXNzS2V5KFN0cmluZy5mcm9tQ2hhckNvZGUoayksIGZhbHNlKTtcbiAgICAgICAgcmV0dXJuIHRoaXMudXRpbHMucHJldmVudERlZmF1bHQoZXZ0KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIFxuICAgIC8vXG4gICAgLy8gQHByaXZhdGVcbiAgICAvLyBIYW5kbGVyIGNhbGxlZCBvbiBwYXN0ZSBldmVudC5cbiAgICAvL1xuICAgIHBhc3RlKGV2dCkge1xuICAgICAgLy8gUHJvY2VzcyB0aGUgY2xpcGJvYXJkIHBhc3RlIGFuZCBwcmV2ZW50IGRlZmF1bHRcbiAgICAgIHRoaXMucHJvY2Vzc0tleSh0aGlzLnV0aWxzLmdldENsaXAoZXZ0KSwgZmFsc2UpO1xuICAgICAgcmV0dXJuIHRoaXMudXRpbHMucHJldmVudERlZmF1bHQoZXZ0KTtcbiAgICB9O1xuXG5cbiAgICAvL1xuICAgIC8vIEBwcml2YXRlXG4gICAgLy8gSGFuZGxlIGNhbGxlZCBvbiBmb2N1cyBldmVudC5cbiAgICAvL1xuICAgIF9mb2N1cygpIHtcbiAgICAgIC8vIFdyYXBwZWQgaW4gdGltZW91dCBzbyB0aGF0IHdlIGNhbiBncmFiIGlucHV0IHNlbGVjdGlvblxuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIEdyYWIgc2VsZWN0aW9uXG4gICAgICAgIHZhciBzZWxlY3Rpb24gPSB0aGlzLmlucHV0U2VsLmdldChzZWxmLmVsKTtcbiAgICAgICAgLy8gQ2hhciBjaGVja1xuICAgICAgICB2YXIgaXNBZnRlclN0YXJ0ID0gc2VsZWN0aW9uLmVuZCA+IHNlbGYuZm9jdXMsXG4gICAgICAgICAgICBpc0ZpcnN0Q2hhciAgPSBzZWxlY3Rpb24uZW5kID09PSAwO1xuICAgICAgICAvLyBJZiBjbGlja2VkIGluIGZyb250IG9mIHN0YXJ0LCByZWZvY3VzIHRvIHN0YXJ0XG4gICAgICAgIGlmIChpc0FmdGVyU3RhcnQgfHwgaXNGaXJzdENoYXIpIHtcbiAgICAgICAgICB0aGlzLmlucHV0U2VsLnNldChzZWxmLmVsLCBzZWxmLmZvY3VzKTtcbiAgICAgICAgfVxuICAgICAgfSwgMCk7XG4gICAgfTtcblxuICAgIC8vXG4gICAgLy8gQHByaXZhdGVcbiAgICAvLyBEZWxldGVzIHRoZSBjaGFyYWN0ZXIgaW4gZnJvbnQgb2YgaXRcbiAgICAvL1xuICAgIGRlbGV0ZSAoKSB7XG4gICAgICAvLyBBZGp1c3QgZm9jdXMgdG8gbWFrZSBzdXJlIGl0cyBub3Qgb24gYSBmb3JtYXR0ZWQgY2hhclxuICAgICAgd2hpbGUgKHRoaXMuY2hhcnNbdGhpcy5zZWwuYmVnaW5dKSB7XG4gICAgICAgIHRoaXMubmV4dFBvcygpO1xuICAgICAgfVxuICAgIFxuICAgICAgLy8gQXMgbG9uZyBhcyB3ZSBhcmUgbm90IGF0IHRoZSBlbmRcbiAgICAgIGlmICh0aGlzLnNlbC5iZWdpbiA8IHRoaXMudmFsLmxlbmd0aCkge1xuICAgICAgICAvLyBXZSB3aWxsIHNpbXVsYXRlIGEgZGVsZXRlIGJ5IG1vdmluZyB0aGUgY2FyZXQgdG8gdGhlIG5leHQgY2hhclxuICAgICAgICAvLyBhbmQgdGhlbiBkZWxldGluZ1xuICAgICAgICB0aGlzLm5leHRQb3MoKTtcbiAgICAgICAgdGhpcy52YWwgPSB0aGlzLnV0aWxzLnJlbW92ZUNoYXJzKHRoaXMudmFsLCB0aGlzLnNlbC5lbmQgLTEsIHRoaXMuc2VsLmVuZCk7XG4gICAgICAgIHRoaXMuZGVsdGEgPSAtMTtcbiAgICAgIH1cbiAgICB9O1xuICAgIFxuICAgIC8vXG4gICAgLy8gQHByaXZhdGVcbiAgICAvLyBRdWljayBoZWxwZXIgbWV0aG9kIHRvIG1vdmUgdGhlIGNhcmV0IHRvIHRoZSBuZXh0IHBvc1xuICAgIC8vXG4gICAgbmV4dFBvcygpIHtcbiAgICAgIHRoaXMuc2VsLmVuZCArKztcbiAgICAgIHRoaXMuc2VsLmJlZ2luICsrO1xuICAgIH07XG4gICAgXG4gICAgLy9cbiAgICAvLyBAcHJpdmF0ZVxuICAgIC8vIEFsdGVyIGVsZW1lbnQgdmFsdWUgdG8gZGlzcGxheSBjaGFyYWN0ZXJzIG1hdGNoaW5nIHRoZSBwcm92aWRlZFxuICAgIC8vIGluc3RhbmNlIHBhdHRlcm4uIEFsc28gcmVzcG9uc2libGUgZm9yIHVwZGF0aW5nXG4gICAgLy9cbiAgICBmb3JtYXRWYWx1ZShpZ25vcmVDYXJldCkge1xuICAgICAgLy8gU2V0IGNhcmV0IHBvc1xuICAgICAgdGhpcy5uZXdQb3MgPSB0aGlzLnNlbC5lbmQgKyB0aGlzLmRlbHRhO1xuICAgIFxuICAgICAgLy8gUmVtb3ZlIGFsbCBmb3JtYXR0ZWQgY2hhcnMgZnJvbSB2YWxcbiAgICAgIHRoaXMucmVtb3ZlQ2hhcnMoKTtcbiAgICBcbiAgICAgIC8vIFN3aXRjaCB0byBmaXJzdCBtYXRjaGluZyBwYXR0ZXJuIGJhc2VkIG9uIHZhbFxuICAgICAgdGhpcy51cGRhdGVQYXR0ZXJuKCk7XG4gICAgXG4gICAgICAvLyBWYWxpZGF0ZSBpbnB1dHNcbiAgICAgIHRoaXMudmFsaWRhdGVJbnB0cygpO1xuICAgIFxuICAgICAgLy8gQWRkIGZvcm1hdHRlZCBjaGFyYWN0ZXJzXG4gICAgICB0aGlzLmFkZENoYXJzKCk7XG4gICAgXG4gICAgICAvLyBTZXQgdmFsdWUgYW5kIGFkaGVyZSB0byBtYXhMZW5ndGhcbiAgICAgIHRoaXMuZWwudmFsdWUgPSB0aGlzLnZhbC5zdWJzdHIoMCwgdGhpcy5tTGVuZ3RoKTtcbiAgICBcbiAgICAgIC8vIFNldCBuZXcgY2FyZXQgcG9zaXRpb25cbiAgICAgIGlmICgodHlwZW9mIGlnbm9yZUNhcmV0KSA9PT0gJ3VuZGVmaW5lZCcgfHwgaWdub3JlQ2FyZXQgPT09IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuaW5wdFNlbC5zZXQodGhpcy5lbCwgdGhpcy5uZXdQb3MpO1xuICAgICAgfVxuICAgIH07XG4gICAgXG4gICAgLy9cbiAgICAvLyBAcHJpdmF0ZVxuICAgIC8vIFJlbW92ZSBhbGwgZm9ybWF0dGVkIGJlZm9yZSBhbmQgYWZ0ZXIgYSBzcGVjaWZpZWQgcG9zXG4gICAgLy9cbiAgICByZW1vdmVDaGFycygpIHtcbiAgICAgIC8vIERlbHRhIHNob3VsZG4ndCBpbmNsdWRlIHBsYWNlaG9sZGVyc1xuICAgICAgaWYgKHRoaXMuc2VsLmVuZCA+IHRoaXMuZm9jdXMpIHtcbiAgICAgICAgdGhpcy5kZWx0YSArPSB0aGlzLnNlbC5lbmQgLSB0aGlzLmZvY3VzO1xuICAgICAgfVxuICAgICAgXG4gICAgICAvLyBBY2NvdW50IGZvciBzaGlmdHMgZHVyaW5nIHJlbW92YWxcbiAgICAgIHZhciBzaGlmdCA9IDA7XG4gICAgXG4gICAgICAvLyBMb29wIHRocm91Z2ggYWxsIHBvc3NpYmxlIGNoYXIgcG9zaXRpb25zXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8PSB0aGlzLm1MZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBHZXQgdHJhbnNmb3JtZWQgcG9zaXRpb25cbiAgICAgICAgdmFyIGN1ckNoYXIgPSB0aGlzLmNoYXJzW2ldLFxuICAgICAgICAgICAgY3VySGxkciA9IHRoaXMuaGxkcnNbaV0sXG4gICAgICAgICAgICBwb3MgPSBpICsgc2hpZnQsXG4gICAgICAgICAgICB2YWw7XG4gICAgXG4gICAgICAgIC8vIElmIGFmdGVyIHNlbGVjdGlvbiB3ZSBuZWVkIHRvIGFjY291bnQgZm9yIGRlbHRhXG4gICAgICAgIHBvcyA9IChpID49IHRoaXMuc2VsLmJlZ2luKSA/IHBvcyArIHRoaXMuZGVsdGEgOiBwb3M7XG4gICAgICAgIHZhbCA9IHRoaXMudmFsLmNoYXJBdChwb3MpO1xuICAgICAgICAvLyBSZW1vdmUgY2hhciBhbmQgYWNjb3VudCBmb3Igc2hpZnRcbiAgICAgICAgaWYgKGN1ckNoYXIgJiYgY3VyQ2hhciA9PT0gdmFsIHx8IGN1ckhsZHIgJiYgY3VySGxkciA9PT0gdmFsKSB7XG4gICAgICAgICAgdGhpcy52YWwgPSB0aGlzLnV0aWxzLnJlbW92ZUNoYXJzKHRoaXMudmFsLCBwb3MsIHBvcyArIDEpO1xuICAgICAgICAgIHNoaWZ0LS07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBcbiAgICAgIC8vIEFsbCBobGRycyBzaG91bGQgYmUgcmVtb3ZlZCBub3dcbiAgICAgIHRoaXMuaGxkcnMgPSB7fTtcbiAgICBcbiAgICAgIC8vIFNldCBmb2N1cyB0byBsYXN0IGNoYXJhY3RlclxuICAgICAgdGhpcy5mb2N1cyA9IHRoaXMudmFsLmxlbmd0aDtcbiAgICB9O1xuICAgIFxuICAgIC8vXG4gICAgLy8gQHByaXZhdGVcbiAgICAvLyBNYWtlIHN1cmUgYWxsIGlucHRzIGFyZSB2YWxpZCwgZWxzZSByZW1vdmUgYW5kIHVwZGF0ZSBkZWx0YVxuICAgIC8vXG4gICAgdmFsaWRhdGVJbnB0cygpIHtcbiAgICAgIC8vIExvb3Agb3ZlciBlYWNoIGNoYXIgYW5kIHZhbGlkYXRlXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMudmFsLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIEdldCBjaGFyIGlucHQgdHlwZVxuICAgICAgICB2YXIgaW5wdFR5cGUgPSB0aGlzLmlucHV0c1tpXTtcbiAgICBcbiAgICAgICAgLy8gQ2hlY2tzXG4gICAgICAgIHZhciBpc0JhZFR5cGUgPSAhdGhpcy5pbnB0UmVnc1tpbnB0VHlwZV0sXG4gICAgICAgICAgICBpc0ludmFsaWQgPSAhaXNCYWRUeXBlICYmICF0aGlzLmlucHRSZWdzW2lucHRUeXBlXS50ZXN0KHRoaXMudmFsLmNoYXJBdChpKSksXG4gICAgICAgICAgICBpbkJvdW5kcyAgPSB0aGlzLmlucHV0c1tpXTtcbiAgICBcbiAgICAgICAgLy8gUmVtb3ZlIGlmIGluY29ycmVjdCBhbmQgaW5ib3VuZHNcbiAgICAgICAgaWYgKChpc0JhZFR5cGUgfHwgaXNJbnZhbGlkKSAmJiBpbkJvdW5kcykge1xuICAgICAgICAgIHRoaXMudmFsID0gdGhpcy51dGlscy5yZW1vdmVDaGFycyh0aGlzLnZhbCwgaSwgaSArIDEpO1xuICAgICAgICAgIHRoaXMuZm9jdXNTdGFydC0tO1xuICAgICAgICAgIHRoaXMubmV3UG9zLS07XG4gICAgICAgICAgdGhpcy5kZWx0YS0tO1xuICAgICAgICAgIGktLTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgXG4gICAgLy9cbiAgICAvLyBAcHJpdmF0ZVxuICAgIC8vIExvb3Agb3ZlciB2YWwgYW5kIGFkZCBmb3JtYXR0ZWQgY2hhcnMgYXMgbmVjZXNzYXJ5XG4gICAgLy9cbiAgICBhZGRDaGFycygpIHtcbiAgICAgIGlmICh0aGlzLm9wdHMucGVyc2lzdGVudCkge1xuICAgICAgICAvLyBMb29wIG92ZXIgYWxsIHBvc3NpYmxlIGNoYXJhY3RlcnNcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPD0gdGhpcy5tTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAoIXRoaXMudmFsLmNoYXJBdChpKSkge1xuICAgICAgICAgICAgLy8gQWRkIHBsYWNlaG9sZGVyIGF0IHBvc1xuICAgICAgICAgICAgdGhpcy52YWwgPSB0aGlzLnV0aWxzLmFkZENoYXJzKHRoaXMudmFsLCB0aGlzLm9wdHMucGxhY2Vob2xkZXIsIGkpO1xuICAgICAgICAgICAgdGhpcy5obGRyc1tpXSA9IHRoaXMub3B0cy5wbGFjZWhvbGRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5hZGRDaGFyKGkpO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIC8vIEFkanVzdCBmb2N1cyB0byBtYWtlIHN1cmUgaXRzIG5vdCBvbiBhIGZvcm1hdHRlZCBjaGFyXG4gICAgICAgIHdoaWxlICh0aGlzLmNoYXJzW3RoaXMuZm9jdXNdKSB7XG4gICAgICAgICAgdGhpcy5mb2N1cysrO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBBdm9pZCBjYWNoaW5nIHZhbC5sZW5ndGgsIGFzIHRoZXkgbWF5IGNoYW5nZSBpbiBfYWRkQ2hhci5cbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPD0gdGhpcy52YWwubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAvLyBXaGVuIG1vdmluZyBiYWNrd2FyZHMgdGhlcmUgYXJlIHNvbWUgcmFjZSBjb25kaXRpb25zIHdoZXJlIHdlXG4gICAgICAgICAgLy8gZG9udCB3YW50IHRvIGFkZCB0aGUgY2hhcmFjdGVyXG4gICAgICAgICAgaWYgKHRoaXMuZGVsdGEgPD0gMCAmJiAoaiA9PT0gdGhpcy5mb2N1cykpIHsgcmV0dXJuIHRydWU7IH1cbiAgICBcbiAgICAgICAgICAvLyBQbGFjZSBjaGFyYWN0ZXIgaW4gY3VycmVudCBwb3NpdGlvbiBvZiB0aGUgZm9ybWF0dGVkIHN0cmluZy5cbiAgICAgICAgICB0aGlzLmFkZENoYXIoaik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIFxuICAgIC8vXG4gICAgLy8gQHByaXZhdGVcbiAgICAvLyBBZGQgZm9ybWF0dHRlZCBjaGFyIGF0IHBvc2l0aW9uXG4gICAgLy9cbiAgICBhZGRDaGFyKGkpIHtcbiAgICAgIC8vIElmIGNoYXIgZXhpc3RzIGF0IHBvc2l0aW9uXG4gICAgICB2YXIgY2hyID0gdGhpcy5jaGFyc1tpXTtcbiAgICAgIGlmICghY2hyKSB7IHJldHVybiB0cnVlOyB9XG4gICAgXG4gICAgICAvLyBJZiBjaGFycyBhcmUgYWRkZWQgaW4gYmV0d2VlbiB0aGUgb2xkIHBvcyBhbmQgbmV3IHBvc1xuICAgICAgLy8gd2UgbmVlZCB0byBpbmNyZW1lbnQgcG9zIGFuZCBkZWx0YVxuICAgICAgaWYgKHRoaXMudXRpbHMuaXNCZXR3ZWVuKGksIFt0aGlzLnNlbC5iZWdpbiAtMSwgdGhpcy5uZXdQb3MgKzFdKSkge1xuICAgICAgICB0aGlzLm5ld1BvcyArKztcbiAgICAgICAgdGhpcy5kZWx0YSArKztcbiAgICAgIH1cbiAgICBcbiAgICAgIC8vIElmIGNoYXJhY3RlciBhZGRlZCBiZWZvcmUgZm9jdXMsIGluY3JcbiAgICAgIGlmIChpIDw9IHRoaXMuZm9jdXMpIHtcbiAgICAgICAgdGhpcy5mb2N1cysrO1xuICAgICAgfVxuICAgIFxuICAgICAgLy8gVXBkYXRlaG9sZGVyXG4gICAgICBpZiAodGhpcy5obGRyc1tpXSkge1xuICAgICAgICBkZWxldGUgdGhpcy5obGRyc1tpXTtcbiAgICAgICAgdGhpcy5obGRyc1tpICsgMV0gPSB0aGlzLm9wdHMucGxhY2Vob2xkZXI7XG4gICAgICB9XG4gICAgXG4gICAgICAvLyBVcGRhdGUgdmFsdWVcbiAgICAgIHRoaXMudmFsID0gdGhpcy51dGlscy5hZGRDaGFycyh0aGlzLnZhbCwgY2hyLCBpKTtcbiAgICB9O1xuICAgIFxuICAgIC8vXG4gICAgLy8gQHByaXZhdGVcbiAgICAvLyBDcmVhdGUgYSBwYXR0ZXJuU3BlYyBmb3IgcGFzc2luZyBpbnRvIHBhdHRlcm5NYXRjaGVyIHRoYXRcbiAgICAvLyBoYXMgZXhhY3RseSBvbmUgY2F0Y2ggYWxsIHBhdHRlcm4uXG4gICAgLy9cbiAgICBzcGVjRnJvbVNpbmdsZVBhdHRlcm4ocGF0dGVyblN0cikge1xuICAgICAgcmV0dXJuIFt7ICcqJzogcGF0dGVyblN0ciB9XTtcbiAgICB9OyAgICBcbn1cbiAgIFxuIFxuICJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
