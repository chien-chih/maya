System.register([], function(exports_1) {
    var Selection, Option, PatternInfo, PatternParser, InputSelection, Utils, PatternMatcher, AiFormatter;
    return {
        setters:[],
        execute: function() {
            Selection = (function () {
                function Selection(begin, end) {
                    this.begin = begin;
                    this.end = end;
                }
                return Selection;
            })();
            Option = (function () {
                function Option() {
                    this.persistent = true;
                    this.repeat = false;
                    this.placeholder = ' ';
                }
                return Option;
            })();
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
            InputSelection = (function () {
                function InputSelection() {
                }
                //
                // Get begin and end positions of selected input. Return 0's
                // if there is no selectiion data
                //
                InputSelection.prototype.get = function (el) {
                    // If normal browser return with result
                    if (typeof el.selectionStart === 'number') {
                        return {
                            begin: el.selectionStart,
                            end: el.selectionEnd
                        };
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
                            return new Selection(-inputRange.moveStart('character', -length), -inputRange.moveEnd('character', -length));
                        }
                    }
                    catch (e) { }
                    //Return 0's on no selection data
                    return { begin: 0, end: 0 };
                };
                ;
                //
                // Set the caret position at a specified location
                //
                InputSelection.prototype.set = function (el, pos) {
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
                return InputSelection;
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
            PatternMatcher = (function () {
                function PatternMatcher(matcher, pattern) {
                    this.matchers = [];
                    this.patterns = [];
                    if (matcher === '*')
                        this.matchers.push(/.*/);
                    else
                        this.matchers.push(new RegExp(matcher));
                    var patternParser = new PatternParser();
                    var parsedPattern = patternParser.parse(pattern);
                    this.patterns.push(parsedPattern);
                }
                PatternMatcher.prototype.getPattern = function (input) {
                    for (var i = 0; i < this.matchers.length; i++) {
                        var matcher = this.matchers[i];
                        if (matcher.test(input))
                            return this.patterns[i];
                    }
                    return null;
                };
                return PatternMatcher;
            })();
            AiFormatter = (function () {
                function AiFormatter(inputElement, format) {
                    this.inputElement = inputElement;
                    this.inptRegs = { '9': /[0-9]/, 'a': /[A-Za-z]/, '*': /[A-Za-z0-9]/ };
                    this.inputSelection = new InputSelection();
                    this.utils = new Utils();
                    this.option = new Option();
                    this.value = '';
                    this.inputs = [];
                    this.chars = [];
                    this.hldrs = {};
                    this.focus = 0;
                    this.patternMatcher = new PatternMatcher('*', format);
                    this.updatePattern();
                    this.processKey('', false);
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
                    // Persistence
                    if (this.option.persistent) {
                        // Format on start
                        this.processKey('', false);
                        inputElement.blur();
                        var onfocus = function () {
                            // Wrapped in timeout so that we can grab input selection
                            setTimeout(function () {
                                // Grab selection
                                var selection = self.inputSelection.get(self.inputElement);
                                // Char check
                                var isAfterStart = selection.end > self.focus, isFirstChar = selection.end === 0;
                                // If clicked in front of start, refocus to start
                                if (isAfterStart || isFirstChar) {
                                    self.inputSelection.set(self.inputElement, self.focus);
                                }
                            }, 0);
                        };
                        // Add Listeners
                        this.utils.addListener(inputElement, 'focus', onfocus);
                        this.utils.addListener(inputElement, 'click', onfocus);
                        this.utils.addListener(inputElement, 'touchstart', onfocus);
                    }
                }
                //
                // @private
                // Determine correct format pattern based on input val
                //
                AiFormatter.prototype.updatePattern = function () {
                    // Determine appropriate pattern
                    var newPattern = this.patternMatcher.getPattern(this.value);
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
                    // Get current state
                    if (ignoreCaret === void 0) { ignoreCaret = false; }
                    this.selection = this.inputSelection.get(this.inputElement);
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
                    while (this.chars[this.selection.begin]) {
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
                    // Switch to first matching pattern based on val
                    this.updatePattern();
                    // Validate inputs
                    this.validateInpts();
                    // Add formatted characters
                    this.addChars();
                    // Set value and adhere to maxLength
                    this.inputElement.value = this.value.substr(0, this.mLength);
                    // Set new caret position
                    if ((typeof ignoreCaret) === 'undefined' || ignoreCaret === false) {
                        this.inputSelection.set(this.inputElement, this.newPos);
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
                    for (var i = 0; i <= this.mLength; i++) {
                        // Get transformed position
                        var curChar = this.chars[i], curHldr = this.hldrs[i], pos = i + shift, val;
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
                        var inptType = this.inputs[i];
                        // Checks
                        var isBadType = !this.inptRegs[inptType], isInvalid = !isBadType && !this.inptRegs[inptType].test(this.value.charAt(i)), inBounds = this.inputs[i];
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
                    if (this.option.persistent) {
                        // Loop over all possible characters
                        for (var i = 0; i <= this.mLength; i++) {
                            if (!this.value.charAt(i)) {
                                // Add placeholder at pos
                                this.value = this.utils.addChars(this.value, this.option.placeholder, i);
                                this.hldrs[i] = this.option.placeholder;
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
                        for (var j = 0; j <= this.value.length; j++) {
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
                        this.hldrs[i + 1] = this.option.placeholder;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWlJbnB1dC9BaUZvcm1hdHRlci4xLnRzIl0sIm5hbWVzIjpbIlNlbGVjdGlvbiIsIlNlbGVjdGlvbi5jb25zdHJ1Y3RvciIsIk9wdGlvbiIsIk9wdGlvbi5jb25zdHJ1Y3RvciIsIlBhdHRlcm5JbmZvIiwiUGF0dGVybkluZm8uY29uc3RydWN0b3IiLCJQYXR0ZXJuUGFyc2VyIiwiUGF0dGVyblBhcnNlci5jb25zdHJ1Y3RvciIsIlBhdHRlcm5QYXJzZXIuZ2V0TWF0Y2hlcyIsIlBhdHRlcm5QYXJzZXIucGFyc2UiLCJJbnB1dFNlbGVjdGlvbiIsIklucHV0U2VsZWN0aW9uLmNvbnN0cnVjdG9yIiwiSW5wdXRTZWxlY3Rpb24uZ2V0IiwiSW5wdXRTZWxlY3Rpb24uc2V0IiwiVXRpbHMiLCJVdGlscy5jb25zdHJ1Y3RvciIsIlV0aWxzLmV4dGVuZCIsIlV0aWxzLmFkZENoYXJzIiwiVXRpbHMucmVtb3ZlQ2hhcnMiLCJVdGlscy5pc0JldHdlZW4iLCJVdGlscy5hZGRMaXN0ZW5lciIsIlV0aWxzLnByZXZlbnREZWZhdWx0IiwiVXRpbHMuZ2V0Q2xpcCIsIlV0aWxzLmdldE1hdGNoaW5nS2V5IiwiVXRpbHMuaXNEZWxLZXlEb3duIiwiVXRpbHMuaXNEZWxLZXlQcmVzcyIsIlV0aWxzLmlzU3BlY2lhbEtleVByZXNzIiwiVXRpbHMuaXNNb2RpZmllciIsIlBhdHRlcm5NYXRjaGVyIiwiUGF0dGVybk1hdGNoZXIuY29uc3RydWN0b3IiLCJQYXR0ZXJuTWF0Y2hlci5nZXRQYXR0ZXJuIiwiQWlGb3JtYXR0ZXIiLCJBaUZvcm1hdHRlci5jb25zdHJ1Y3RvciIsIkFpRm9ybWF0dGVyLnVwZGF0ZVBhdHRlcm4iLCJBaUZvcm1hdHRlci5wcm9jZXNzS2V5IiwiQWlGb3JtYXR0ZXIuZGVsZXRlIiwiQWlGb3JtYXR0ZXIubmV4dFBvcyIsIkFpRm9ybWF0dGVyLmZvcm1hdFZhbHVlIiwiQWlGb3JtYXR0ZXIucmVtb3ZlQ2hhcnMiLCJBaUZvcm1hdHRl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Q0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsS0FBS0EsS0FBS0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7d0JBQ2hEQSxJQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxHQUFHQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxLQUFLQSxHQUFHQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTt3QkFDeEVBLElBQUlBLENBQUNBLEtBQUtBLEdBQUtBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLFdBQVdBLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLEVBQUVBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLEtBQUtBLEVBQUVBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO29CQUM5RkEsQ0FBQ0E7b0JBR0RBLElBQUlBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLE1BQU1BLElBQUlBLE1BQU1BLEtBQUtBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBO3dCQUNqQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsRUFBRUEsQ0FBQ0E7b0JBR2hCQSxDQUFDQTtvQkFBQ0EsSUFBSUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsTUFBTUEsSUFBSUEsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsS0FBS0EsR0FBR0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7d0JBRW5EQSxzRUFBc0VBO3dCQUN0RUEsSUFBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsV0FBV0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsRUFBRUEsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsR0FBR0EsR0FBRUEsQ0FBQ0EsRUFBRUEsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7d0JBQzNGQSxJ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QUNBLEVBQUVBLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLEtBQUtBLEdBQUVBLENBQUNBLEVBQUVBLElBQUlBLENBQUNBLE1BQU1BLEdBQUVBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO3dCQUN2RUEsSUFBSUEsQ0FBQ0EsTUFBTUEsRUFBR0EsQ0FBQ0E7d0JBQ2ZBLElBQUlBLENBQUNBLEtBQUtBLEVBQUdBLENBQUNBO29CQUNoQkEsQ0FBQ0E7b0JBRURBLHdDQUF3Q0E7b0JBQ3hDQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxJQUFJQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQTt3QkFDcEJBLElBQUlBLENBQUNBLEtBQUtBLEVBQUVBLENBQUNBO29CQUNmQSxDQUFDQTtvQkFFREEsZUFBZUE7b0JBQ2ZBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO3dCQUNsQkEsT0FBT0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7d0JBQ3JCQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxHQUFHQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxXQUFXQSxDQUFDQTtvQkFDOUNBLENBQUNBO29CQUVEQSxlQUFlQTtvQkFDZkEsSUFBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsRUFBRUEsR0FBR0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ3ZEQSxDQUFDQTs7Z0JBRUxWLGtCQUFDQTtZQUFEQSxDQXpWQSxBQXlWQ0EsSUFBQTtZQXpWRCxxQ0F5VkMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL0FpSW5wdXQvQWlGb3JtYXR0ZXIuMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFNlbGVjdGlvbntcbiAgICBiZWdpbjpudW1iZXI7XG4gICAgZW5kOm51bWJlcjtcbiAgICBjb25zdHJ1Y3RvcihiZWdpbjpudW1iZXIsZW5kOm51bWJlcikgeyAgXG4gICAgICB0aGlzLmJlZ2luPWJlZ2luO1xuICAgICAgdGhpcy5lbmQ9ZW5kO1xuICAgIH1cbn1cblxuY2xhc3MgT3B0aW9ue1xuICAgIHBlcnNpc3RlbnQ6Ym9vbGVhbj0gdHJ1ZTtcbiAgICByZXBlYXQ6Ym9vbGVhbiA9IGZhbHNlO1xuICAgIHBsYWNlaG9sZGVyOnN0cmluZz0nICc7XG59XG5cbmNsYXNzIFBhdHRlcm5JbmZve1xuICAgIGlucHV0cz1bXTtcbiAgICBjaGFycz1bXTtcbiAgICBtTGVuZ3RoOm51bWJlcjtcbn1cblxuIFxuY2xhc3MgUGF0dGVyblBhcnNlcntcbiAgICBzdGF0aWMgREVMSU1fU0laRTpudW1iZXIgPSA0O1xuICAgIHN0YXRpYyByZWdleHA6UmVnRXhwICA9IG5ldyBSZWdFeHAoJ3t7KFtefV0rKX19JywgJ2cnKTsgXG4gICAgXG4gICAgZ2V0TWF0Y2hlcyhwYXR0ZXJuKXtcbiAgICAgICAgICAvLyBQb3B1bGF0ZSBhcnJheSBvZiBtYXRjaGVzXG4gICAgICAgICAgdmFyIG1hdGNoZXMgPSBbXSxtYXRjaDtcbiAgICAgICAgICB3aGlsZShtYXRjaCA9IFBhdHRlcm5QYXJzZXIucmVnZXhwLmV4ZWMocGF0dGVybikpIHtcbiAgICAgICAgICAgIG1hdGNoZXMucHVzaChtYXRjaCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBtYXRjaGVzO1xuICAgIH1cbiAgICBcbiAgICBwYXJzZShwYXR0ZXJuKXtcbiAgICAgICAgdmFyIGluZm86UGF0dGVybkluZm89bmV3IFBhdHRlcm5JbmZvKCk7XG4gICAgICAgIHZhciBtYXRjaGVzID0gdGhpcy5nZXRNYXRjaGVzKHBhdHRlcm4pLCBwTGVuZ3RoID0gcGF0dGVybi5sZW5ndGg7XG4gICAgICAgIHZhciBtQ291bnQgPSAwLGlDb3VudCA9IDAsaSA9IDA7XG5cbiAgICAgICAgdmFyIHByb2Nlc3NNYXRjaCA9IGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgICB2YXIgdmFsTGVuZ3RoID0gdmFsLmxlbmd0aDtcbiAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHZhbExlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBpbmZvLmlucHV0c1tpQ291bnRdID0gdmFsLmNoYXJBdChqKTtcbiAgICAgICAgICAgIGlDb3VudCsrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBtQ291bnQgKys7XG4gICAgICAgICAgaSArPSAodmFsLmxlbmd0aCArIFBhdHRlcm5QYXJzZXIuREVMSU1fU0laRSAtIDEpO1xuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgZm9yIChpOyBpIDwgcExlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKG1Db3VudCA8IG1hdGNoZXMubGVuZ3RoICYmIGkgPT09IG1hdGNoZXNbbUNvdW50XS5pbmRleCkge1xuICAgICAgICAgICAgcHJvY2Vzc01hdGNoKG1hdGNoZXNbbUNvdW50XVsxXSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGluZm8uY2hhcnNbaSAtIChtQ291bnQgKiBQYXR0ZXJuUGFyc2VyLkRFTElNX1NJWkUpXSA9IHBhdHRlcm4uY2hhckF0KGkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaW5mby5tTGVuZ3RoID0gaSAtIChtQ291bnQgKiBQYXR0ZXJuUGFyc2VyLkRFTElNX1NJWkUpO1xuICAgICAgICByZXR1cm4gaW5mbzsgICAgXG4gICAgfVxuICAgIFxufVxuXG5cblxuY2xhc3MgSW5wdXRTZWxlY3Rpb24ge1xuICAgIC8vXG4gICAgLy8gR2V0IGJlZ2luIGFuZCBlbmQgcG9zaXRpb25zIG9mIHNlbGVjdGVkIGlucHV0LiBSZXR1cm4gMCdzXG4gICAgLy8gaWYgdGhlcmUgaXMgbm8gc2VsZWN0aWlvbiBkYXRhXG4gICAgLy9cbiAgICBnZXQoZWwpOlNlbGVjdGlvbiB7XG5cblxuXG4gICAgICAvLyBJZiBub3JtYWwgYnJvd3NlciByZXR1cm4gd2l0aCByZXN1bHRcbiAgICAgIGlmICh0eXBlb2YgZWwuc2VsZWN0aW9uU3RhcnQgPT09ICdudW1iZXInKSB7XG4gICAgICAgIHJldHVybiB7IFxuICAgICAgICAgIGJlZ2luOiBlbC5zZWxlY3Rpb25TdGFydCxcbiAgICAgICAgICBlbmQ6IGVsLnNlbGVjdGlvbkVuZFxuICAgICAgICB9O1xuICAgICAgfVxuICAgIFxuICAgICAgdHJ5e1xuICAgICAgICAvLyBVaC1PaC4gV2UgbXVzdCBiZSBJRS4gRnVuIHdpdGggVGV4dFJhbmdlISFcbiAgICAgICAgY29uc3QgZG9jID0gZG9jdW1lbnQgYXMgYW55O1xuICAgICAgICB2YXIgcmFuZ2UgPSBkb2Muc2VsZWN0aW9uLmNyZWF0ZVJhbmdlKCk7XG4gICAgICAgIC8vIERldGVybWluZSBpZiB0aGVyZSBpcyBhIHNlbGVjdGlvblxuICAgICAgICBpZiAocmFuZ2UgJiYgcmFuZ2UucGFyZW50RWxlbWVudCgpID09PSBlbCkge1xuICAgICAgICAgIHZhciBpbnB1dFJhbmdlID0gZWwuY3JlYXRlVGV4dFJhbmdlKCksXG4gICAgICAgICAgICAgIGVuZFJhbmdlICAgPSBlbC5jcmVhdGVUZXh0UmFuZ2UoKSxcbiAgICAgICAgICAgICAgbGVuZ3RoICAgICA9IGVsLnZhbHVlLmxlbmd0aDtcbiAgICAgIFxuICAgICAgICAgIC8vIENyZWF0ZSBhIHdvcmtpbmcgVGV4dFJhbmdlIGZvciB0aGUgaW5wdXQgc2VsZWN0aW9uXG4gICAgICAgICAgaW5wdXRSYW5nZS5tb3ZlVG9Cb29rbWFyayhyYW5nZS5nZXRCb29rbWFyaygpKTtcbiAgICAgIFxuICAgICAgICAgIC8vIE1vdmUgZW5kUmFuZ2UgYmVnaW4gcG9zIHRvIGVuZCBwb3MgKGhlbmNlIGVuZFJhbmdlKVxuICAgICAgICAgIGVuZFJhbmdlLmNvbGxhcHNlKGZhbHNlKTtcbiAgICAgICAgICBcbiAgICAgICAgICAvLyBJZiB3ZSBhcmUgYXQgdGhlIHZlcnkgZW5kIG9mIHRoZSBpbnB1dCwgYmVnaW4gYW5kIGVuZFxuICAgICAgICAgIC8vIG11c3QgYm90aCBiZSB0aGUgbGVuZ3RoIG9mIHRoZSBlbC52YWx1ZVxuICAgICAgICAgIGlmIChpbnB1dFJhbmdlLmNvbXBhcmVFbmRQb2ludHMoJ1N0YXJ0VG9FbmQnLCBlbmRSYW5nZSkgPiAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIHsgYmVnaW46IGxlbmd0aCwgZW5kOiBsZW5ndGggfTtcbiAgICAgICAgICB9XG4gICAgICBcbiAgICAgICAgICAvLyBOb3RlOiBtb3ZlU3RhcnQgdXN1YWxseSByZXR1cm5zIHRoZSB1bml0cyBtb3ZlZCwgd2hpY2ggXG4gICAgICAgICAgLy8gb25lIG1heSB0aGluayBpcyAtbGVuZ3RoLCBob3dldmVyLCBpdCB3aWxsIHN0b3Agd2hlbiBpdFxuICAgICAgICAgIC8vIGdldHMgdG8gdGhlIGJlZ2luIG9mIHRoZSByYW5nZSwgdGh1cyBnaXZpbmcgdXMgdGhlXG4gICAgICAgICAgLy8gbmVnYXRpdmUgdmFsdWUgb2YgdGhlIHBvcy5cbiAgICAgICAgICByZXR1cm4gbmV3IFNlbGVjdGlvbihcbiAgICAgICAgICAgIC1pbnB1dFJhbmdlLm1vdmVTdGFydCgnY2hhcmFjdGVyJywgLWxlbmd0aCksXG4gICAgICAgICAgICAtaW5wdXRSYW5nZS5tb3ZlRW5kKCdjaGFyYWN0ZXInLCAtbGVuZ3RoKSlcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIH1jYXRjaChlKXt9XG4gICAgXG4gICAgICAvL1JldHVybiAwJ3Mgb24gbm8gc2VsZWN0aW9uIGRhdGFcbiAgICAgIHJldHVybiB7IGJlZ2luOiAwLCBlbmQ6IDAgfTtcbiAgICB9OyAgXG4gICAgXG4gICAgXG4gICAgLy9cbiAgICAvLyBTZXQgdGhlIGNhcmV0IHBvc2l0aW9uIGF0IGEgc3BlY2lmaWVkIGxvY2F0aW9uXG4gICAgLy9cbiAgICBzZXQoZWwsIHBvcykge1xuICAgICAgLy8gTm9ybWFsaXplIHBvc1xuICAgICAgaWYgKHR5cGVvZiBwb3MgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHBvcyA9IHsgYmVnaW46IHBvcywgZW5kOiBwb3MgfTtcbiAgICAgIH1cbiAgICBcbiAgICAgIC8vIElmIG5vcm1hbCBicm93c2VyXG4gICAgICBpZiAoZWwuc2V0U2VsZWN0aW9uUmFuZ2UpIHtcbiAgICAgICAgZWwuZm9jdXMoKTtcbiAgICAgICAgZWwuc2V0U2VsZWN0aW9uUmFuZ2UocG9zLmJlZ2luLCBwb3MuZW5kKTtcbiAgICBcbiAgICAgIC8vIElFID0gVGV4dFJhbmdlIGZ1blxuICAgICAgfSBlbHNlIGlmIChlbC5jcmVhdGVUZXh0UmFuZ2UpIHtcbiAgICAgICAgdmFyIHJhbmdlID0gZWwuY3JlYXRlVGV4dFJhbmdlKCk7XG4gICAgICAgIHJhbmdlLmNvbGxhcHNlKHRydWUpO1xuICAgICAgICByYW5nZS5tb3ZlRW5kKCdjaGFyYWN0ZXInLCBwb3MuZW5kKTtcbiAgICAgICAgcmFuZ2UubW92ZVN0YXJ0KCdjaGFyYWN0ZXInLCBwb3MuYmVnaW4pO1xuICAgICAgICByYW5nZS5zZWxlY3QoKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIFxuICAgIFxufVxuXG5jbGFzcyBVdGlscyB7XG4gICAgdUFnZW50ID0gKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnKSA/IG5hdmlnYXRvci51c2VyQWdlbnQgOiBudWxsO1xuIFxuICAgIC8vXG4gICAgLy8gU2hhbGxvdyBjb3B5IHByb3BlcnRpZXMgZnJvbSBuIG9iamVjdHMgdG8gZGVzdE9ialxuICAgIC8vXG4gICAgZXh0ZW5kKGRlc3RPYmopIHtcbiAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGZvciAodmFyIGtleSBpbiBhcmd1bWVudHNbaV0pIHtcbiAgICAgICAgICBkZXN0T2JqW2tleV0gPSBhcmd1bWVudHNbaV1ba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGRlc3RPYmo7XG4gICAgfTtcbiAgICBcbiAgICAvL1xuICAgIC8vIEFkZCBhIGdpdmVuIGNoYXJhY3RlciB0byBhIHN0cmluZyBhdCBhIGRlZmluZWQgcG9zXG4gICAgLy9cbiAgICBhZGRDaGFycyhzdHIsIGNoYXJzLCBwb3MpIHtcbiAgICAgIHJldHVybiBzdHIuc3Vic3RyKDAsIHBvcykgKyBjaGFycyArIHN0ci5zdWJzdHIocG9zLCBzdHIubGVuZ3RoKTtcbiAgICB9OyBcbiAgICBcbiAgICAvL1xuICAgIC8vIFJlbW92ZSBhIHNwYW4gb2YgY2hhcmFjdGVyc1xuICAgIC8vXG4gICAgcmVtb3ZlQ2hhcnMoc3RyLCBzdGFydCwgZW5kKSB7XG4gICAgICByZXR1cm4gc3RyLnN1YnN0cigwLCBzdGFydCkgKyBzdHIuc3Vic3RyKGVuZCwgc3RyLmxlbmd0aCk7XG4gICAgfTtcbiAgICBcbiAgICAvL1xuICAgIC8vIFJldHVybiB0cnVlL2ZhbHNlIGlzIG51bSBmYWxzZSBiZXR3ZWVuIGJvdW5kc1xuICAgIC8vXG4gICAgaXNCZXR3ZWVuKG51bSwgYm91bmRzKSB7XG4gICAgICBib3VuZHMuc29ydChmdW5jdGlvbihhLGIpIHsgcmV0dXJuIGEtYjsgfSk7XG4gICAgICByZXR1cm4gKG51bSA+IGJvdW5kc1swXSAmJiBudW0gPCBib3VuZHNbMV0pO1xuICAgIH07XG4gICAgXG4gICAgLy9cbiAgICAvLyBIZWxwZXIgbWV0aG9kIGZvciBjcm9zcyBicm93c2VyIGV2ZW50IGxpc3RlbmVyc1xuICAgIC8vXG4gICAgYWRkTGlzdGVuZXIoZWwsIGV2dCwgaGFuZGxlcikge1xuICAgICAgcmV0dXJuICh0eXBlb2YgZWwuYWRkRXZlbnRMaXN0ZW5lciAhPT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgID8gZWwuYWRkRXZlbnRMaXN0ZW5lcihldnQsIGhhbmRsZXIsIGZhbHNlKVxuICAgICAgICA6IGVsLmF0dGFjaEV2ZW50KCdvbicgKyBldnQsIGhhbmRsZXIpO1xuICAgIH07XG4gICAgXG4gICAgLy9cbiAgICAvLyBIZWxwZXIgbWV0aG9kIGZvciBjcm9zcyBicm93c2VyIGltcGxlbWVudGF0aW9uIG9mIHByZXZlbnREZWZhdWx0XG4gICAgLy9cbiAgICBwcmV2ZW50RGVmYXVsdChldnQpIHtcbiAgICAgIHJldHVybiAoZXZ0LnByZXZlbnREZWZhdWx0KSA/IGV2dC5wcmV2ZW50RGVmYXVsdCgpIDogKGV2dC5yZXR1cm5WYWx1ZSA9IGZhbHNlKTtcbiAgICB9O1xuICAgIFxuICAgIC8vXG4gICAgLy8gSGVscGVyIG1ldGhvZCBmb3IgY3Jvc3MgYnJvd3NlciBpbXBsZW1lbnRhdGlvbiBmb3IgZ3JhYmJpbmdcbiAgICAvLyBjbGlwYm9hcmQgZGF0YVxuICAgIC8vXG4gICAgZ2V0Q2xpcChldnQpIHtcbiAgICAgIHZhciBldmVudDphbnk9ZXZ0O1xuICAgICAgdmFyIHdpbjphbnk9d2luZG93O1xuICAgICAgaWYgKGV2ZW50LmNsaXBib2FyZERhdGEpIHsgcmV0dXJuIGV2ZW50LmNsaXBib2FyZERhdGEuZ2V0RGF0YSgnVGV4dCcpOyB9XG4gICAgICBpZiAod2luLmNsaXBib2FyZERhdGEpIHsgcmV0dXJuIHdpbi5jbGlwYm9hcmREYXRhLmdldERhdGEoJ1RleHQnKTsgfVxuICAgIH07XG4gICAgXG4gICAgLy9cbiAgICAvLyBMb29wIG92ZXIgb2JqZWN0IGFuZCBjaGVja2luZyBmb3IgbWF0Y2hpbmcgcHJvcGVydGllc1xuICAgIC8vXG4gICAgZ2V0TWF0Y2hpbmdLZXkod2hpY2gsIGtleUNvZGUsIGtleXMpIHtcbiAgICAgIC8vIExvb3Agb3ZlciBhbmQgcmV0dXJuIGlmIG1hdGNoZWQuXG4gICAgICBmb3IgKHZhciBrIGluIGtleXMpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXNba107XG4gICAgICAgIGlmICh3aGljaCA9PT0ga2V5LndoaWNoICYmIGtleUNvZGUgPT09IGtleS5rZXlDb2RlKSB7XG4gICAgICAgICAgcmV0dXJuIGs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIFxuICAgIC8vXG4gICAgLy8gUmV0dXJucyB0cnVlL2ZhbHNlIGlmIGsgaXMgYSBkZWwga2V5RG93blxuICAgIC8vXG4gICAgaXNEZWxLZXlEb3duKHdoaWNoLCBrZXlDb2RlKSB7XG4gICAgICB2YXIga2V5cyA9IHtcbiAgICAgICAgJ2JhY2tzcGFjZSc6IHsgJ3doaWNoJzogOCwgJ2tleUNvZGUnOiA4IH0sXG4gICAgICAgICdkZWxldGUnOiB7ICd3aGljaCc6IDQ2LCAna2V5Q29kZSc6IDQ2IH1cbiAgICAgIH07XG4gICAgXG4gICAgICByZXR1cm4gdGhpcy5nZXRNYXRjaGluZ0tleSh3aGljaCwga2V5Q29kZSwga2V5cyk7XG4gICAgfTtcbiAgICBcbiAgICAvL1xuICAgIC8vIFJldHVybnMgdHJ1ZS9mYWxzZSBpZiBrIGlzIGEgZGVsIGtleVByZXNzXG4gICAgLy9cbiAgICBpc0RlbEtleVByZXNzKHdoaWNoLCBrZXlDb2RlKSB7XG4gICAgICB2YXIga2V5cyA9IHtcbiAgICAgICAgJ2JhY2tzcGFjZSc6IHsgJ3doaWNoJzogOCwgJ2tleUNvZGUnOiA4LCAnc2hpZnRLZXknOiBmYWxzZSB9LFxuICAgICAgICAnZGVsZXRlJzogeyAnd2hpY2gnOiAwLCAna2V5Q29kZSc6IDQ2IH1cbiAgICAgIH07XG4gICAgXG4gICAgICByZXR1cm4gdGhpcy5nZXRNYXRjaGluZ0tleSh3aGljaCwga2V5Q29kZSwga2V5cyk7XG4gICAgfTtcblxuICAgIC8vXG4gICAgLy8gRGV0ZXJtaW5lIGlmIGtleXByZXNzIHJlbGF0ZXMgdG8gc3BlY2lhbEtleVxuICAgIC8vXG4gICAgaXNTcGVjaWFsS2V5UHJlc3Mod2hpY2gsIGtleUNvZGUpIHtcbiAgICAgIHZhciBrZXlzID0ge1xuICAgICAgICAndGFiJzogeyAnd2hpY2gnOiAwLCAna2V5Q29kZSc6IDkgfSxcbiAgICAgICAgJ2VudGVyJzogeyAnd2hpY2gnOiAxMywgJ2tleUNvZGUnOiAxMyB9LFxuICAgICAgICAnZW5kJzogeyAnd2hpY2gnOiAwLCAna2V5Q29kZSc6IDM1IH0sXG4gICAgICAgICdob21lJzogeyAnd2hpY2gnOiAwLCAna2V5Q29kZSc6IDM2IH0sXG4gICAgICAgICdsZWZ0YXJyb3cnOiB7ICd3aGljaCc6IDAsICdrZXlDb2RlJzogMzcgfSxcbiAgICAgICAgJ3VwYXJyb3cnOiB7ICd3aGljaCc6IDAsICdrZXlDb2RlJzogMzggfSxcbiAgICAgICAgJ3JpZ2h0YXJyb3cnOiB7ICd3aGljaCc6IDAsICdrZXlDb2RlJzogMzkgfSxcbiAgICAgICAgJ2Rvd25hcnJvdyc6IHsgJ3doaWNoJzogMCwgJ2tleUNvZGUnOiA0MCB9LFxuICAgICAgICAnRjUnOiB7ICd3aGljaCc6IDExNiwgJ2tleUNvZGUnOiAxMTYgfVxuICAgICAgfTtcbiAgICBcbiAgICAgIHJldHVybiB0aGlzLmdldE1hdGNoaW5nS2V5KHdoaWNoLCBrZXlDb2RlLCBrZXlzKTtcbiAgICB9O1xuICAgIFxuICAgIC8vXG4gICAgLy8gUmV0dXJucyB0cnVlL2ZhbHNlIGlmIG1vZGlmaWVyIGtleSBpcyBoZWxkIGRvd25cbiAgICAvL1xuICAgIGlzTW9kaWZpZXIoZXZ0KSB7XG4gICAgICByZXR1cm4gZXZ0LmN0cmxLZXkgfHwgZXZ0LmFsdEtleSB8fCBldnQubWV0YUtleTtcbiAgICB9O1xuICAgIFxufVxuXG5jbGFzcyBQYXR0ZXJuTWF0Y2hlciB7XG4gICAgbWF0Y2hlcnM6YW55ID0gW10gXG4gICAgcGF0dGVybnM6YW55ID0gW107XG5cbiAgICBjb25zdHJ1Y3RvcihtYXRjaGVyLHBhdHRlcm4pIHsgIFxuICAgICAgICBpZiAobWF0Y2hlciA9PT0gJyonKSBcbiAgICAgICAgICB0aGlzLm1hdGNoZXJzLnB1c2goLy4qLyk7XG4gICAgICAgIGVsc2UgXG4gICAgICAgICAgdGhpcy5tYXRjaGVycy5wdXNoKG5ldyBSZWdFeHAobWF0Y2hlcikpO1xuXG5cbiAgICAgICAgdmFyIHBhdHRlcm5QYXJzZXIgPSBuZXcgUGF0dGVyblBhcnNlcigpOyBcbiAgICAgICAgdmFyIHBhcnNlZFBhdHRlcm4gPSBwYXR0ZXJuUGFyc2VyLnBhcnNlKHBhdHRlcm4pO1xuICAgICAgICB0aGlzLnBhdHRlcm5zLnB1c2gocGFyc2VkUGF0dGVybik7XG4gICAgfVxuXG4gICAgZ2V0UGF0dGVybihpbnB1dCk6UGF0dGVybkluZm97XG4gICAgICAgIGZvcih2YXIgaT0wO2k8dGhpcy5tYXRjaGVycy5sZW5ndGg7aSsrKXtcbiAgICAgICAgICB2YXIgbWF0Y2hlcj10aGlzLm1hdGNoZXJzW2ldO1xuICAgICAgICAgIGlmIChtYXRjaGVyLnRlc3QoaW5wdXQpKSBcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGF0dGVybnNbaV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQWlGb3JtYXR0ZXIge1xuICAgIHByaXZhdGUgaW5wdFJlZ3M6YW55ID0geyc5JzogL1swLTldLywnYSc6IC9bQS1aYS16XS8sJyonOiAvW0EtWmEtejAtOV0vfTtcbiAgICBwcml2YXRlIHBhdHRlcm5NYXRjaGVyOlBhdHRlcm5NYXRjaGVyO1xuICAgIHByaXZhdGUgaW5wdXRTZWxlY3Rpb24gOiBJbnB1dFNlbGVjdGlvbiA9IG5ldyBJbnB1dFNlbGVjdGlvbigpO1xuICAgIHByaXZhdGUgdXRpbHM6VXRpbHM9bmV3IFV0aWxzKCk7XG4gICAgcHJpdmF0ZSBzZWxlY3Rpb246U2VsZWN0aW9uO1xuICAgIHByaXZhdGUgb3B0aW9uOk9wdGlvbj1uZXcgT3B0aW9uKCk7XG4gICAgcHJpdmF0ZSB2YWx1ZTpzdHJpbmc9Jyc7XG5cbiAgICBpbnB1dHM9W107XG4gICAgY2hhcnM9W107XG4gICAgbUxlbmd0aDpudW1iZXI7XG4gICAgbmV3UG9zOmFueTtcbiAgICBmb2N1c1N0YXJ0OmFueTtcbiAgICBkZWx0YTphbnk7XG4gICAgaGxkcnM6YW55ID0ge307XG4gICAgZm9jdXM6bnVtYmVyID0gMDtcbiAgXG4gIFxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaW5wdXRFbGVtZW50OiBhbnksZm9ybWF0IDpzdHJpbmcpIHsgIFxuICAgICAgXG4gICAgICAgIHRoaXMucGF0dGVybk1hdGNoZXIgPSBuZXcgUGF0dGVybk1hdGNoZXIoJyonLGZvcm1hdCk7XG4gICAgICAgIHRoaXMudXBkYXRlUGF0dGVybigpO1xuICAgICAgICB0aGlzLnByb2Nlc3NLZXkoJycsIGZhbHNlKTtcbiAgICAgICAgLy8gQWRkIExpc3RlbmVyc1xuICAgICAgICB2YXIgc2VsZj10aGlzO1xuICAgICAgICB0aGlzLnV0aWxzLmFkZExpc3RlbmVyKGlucHV0RWxlbWVudCwgJ2tleWRvd24nLCBmdW5jdGlvbihldnQpe1xuICAgICAgICAgICAgdmFyIGsgPSBldnQud2hpY2ggfHwgZXZ0LmtleUNvZGU7XG4gICAgICAgICAgXG4gICAgICAgICAgICAvLyBJZiBkZWxldGUga2V5XG4gICAgICAgICAgICBpZiAoayAmJiBzZWxmLnV0aWxzLmlzRGVsS2V5RG93bihldnQud2hpY2gsIGV2dC5rZXlDb2RlKSkge1xuICAgICAgICAgICAgICAvLyBQcm9jZXNzIHRoZSBrZXlDb2RlIGFuZCBwcmV2ZW50IGRlZmF1bHRcbiAgICAgICAgICAgICAgc2VsZi5wcm9jZXNzS2V5KG51bGwsIGspO1xuICAgICAgICAgICAgICByZXR1cm4gc2VsZi51dGlscy5wcmV2ZW50RGVmYXVsdChldnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnV0aWxzLmFkZExpc3RlbmVyKGlucHV0RWxlbWVudCwgJ2tleXByZXNzJywgZnVuY3Rpb24oZXZ0KXtcblxuICAgICAgICAgICAgLy8gVGhlIGZpcnN0IHRoaW5nIHdlIG5lZWQgaXMgdGhlIGNoYXJhY3RlciBjb2RlXG4gICAgICAgICAgICB2YXIgaywgaXNTcGVjaWFsO1xuICAgICAgICAgICAgLy8gTW96aWxsYSB3aWxsIHRyaWdnZXIgb24gc3BlY2lhbCBrZXlzIGFuZCBhc3NpZ24gdGhlIHRoZSB2YWx1ZSAwXG4gICAgICAgICAgICAvLyBXZSB3YW50IHRvIHVzZSB0aGF0IDAgcmF0aGVyIHRoYW4gdGhlIGtleUNvZGUgaXQgYXNzaWducy5cbiAgICAgICAgICAgIGsgPSBldnQud2hpY2ggfHwgZXZ0LmtleUNvZGU7XG4gICAgICAgICAgICBpc1NwZWNpYWwgPSBzZWxmLnV0aWxzLmlzU3BlY2lhbEtleVByZXNzKGV2dC53aGljaCwgZXZ0LmtleUNvZGUpO1xuICAgICAgICAgIFxuICAgICAgICAgICAgLy8gUHJvY2VzcyB0aGUga2V5Q29kZSBhbmQgcHJldmVudCBkZWZhdWx0XG4gICAgICAgICAgICBpZiAoIXNlbGYudXRpbHMuaXNEZWxLZXlQcmVzcyhldnQud2hpY2gsIGV2dC5rZXlDb2RlKSAmJiAhaXNTcGVjaWFsICYmICFzZWxmLnV0aWxzLmlzTW9kaWZpZXIoZXZ0KSkge1xuICAgICAgICAgICAgICBzZWxmLnByb2Nlc3NLZXkoU3RyaW5nLmZyb21DaGFyQ29kZShrKSwgZmFsc2UpO1xuICAgICAgICAgICAgICByZXR1cm4gc2VsZi51dGlscy5wcmV2ZW50RGVmYXVsdChldnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgXG5cbiAgICAgICAgXG4gICAgICAgIHRoaXMudXRpbHMuYWRkTGlzdGVuZXIoaW5wdXRFbGVtZW50LCAncGFzdGUnLCBmdW5jdGlvbihldnQpe1xuICAgICAgICAgICAgc2VsZi5wcm9jZXNzS2V5KHNlbGYudXRpbHMuZ2V0Q2xpcChldnQpLCBmYWxzZSk7XG4gICAgICAgICAgICByZXR1cm4gc2VsZi51dGlscy5wcmV2ZW50RGVmYXVsdChldnQpO1xuICAgICAgICAgIFxuICAgICAgICB9KTtcbiAgICAgICAgXG5cbiAgICAgICAgXG4gICAgICAgIC8vIFBlcnNpc3RlbmNlXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbi5wZXJzaXN0ZW50KSBcbiAgICAgICAge1xuICAgICAgICAgICAgLy8gRm9ybWF0IG9uIHN0YXJ0XG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NLZXkoJycsIGZhbHNlKTtcbiAgICAgICAgICAgIGlucHV0RWxlbWVudC5ibHVyKCk7XG5cbiAgICAgICAgICAgIHZhciBvbmZvY3VzPWZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAvLyBXcmFwcGVkIGluIHRpbWVvdXQgc28gdGhhdCB3ZSBjYW4gZ3JhYiBpbnB1dCBzZWxlY3Rpb25cbiAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgLy8gR3JhYiBzZWxlY3Rpb25cbiAgICAgICAgICAgICAgICB2YXIgc2VsZWN0aW9uID0gc2VsZi5pbnB1dFNlbGVjdGlvbi5nZXQoc2VsZi5pbnB1dEVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIC8vIENoYXIgY2hlY2tcbiAgICAgICAgICAgICAgICB2YXIgaXNBZnRlclN0YXJ0ID0gc2VsZWN0aW9uLmVuZCA+IHNlbGYuZm9jdXMsXG4gICAgICAgICAgICAgICAgICAgIGlzRmlyc3RDaGFyICA9IHNlbGVjdGlvbi5lbmQgPT09IDA7XG4gICAgICAgICAgICAgICAgLy8gSWYgY2xpY2tlZCBpbiBmcm9udCBvZiBzdGFydCwgcmVmb2N1cyB0byBzdGFydFxuICAgICAgICAgICAgICAgIGlmIChpc0FmdGVyU3RhcnQgfHwgaXNGaXJzdENoYXIpIHtcbiAgICAgICAgICAgICAgICAgIHNlbGYuaW5wdXRTZWxlY3Rpb24uc2V0KHNlbGYuaW5wdXRFbGVtZW50LCBzZWxmLmZvY3VzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sIDApO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICBcbiAgICAgICAgICAgIC8vIEFkZCBMaXN0ZW5lcnNcbiAgICAgICAgICAgIHRoaXMudXRpbHMuYWRkTGlzdGVuZXIoaW5wdXRFbGVtZW50LCAnZm9jdXMnLCBvbmZvY3VzKTtcbiAgICAgICAgICAgIHRoaXMudXRpbHMuYWRkTGlzdGVuZXIoaW5wdXRFbGVtZW50LCAnY2xpY2snLCBvbmZvY3VzKTtcbiAgICAgICAgICAgIHRoaXMudXRpbHMuYWRkTGlzdGVuZXIoaW5wdXRFbGVtZW50LCAndG91Y2hzdGFydCcsIG9uZm9jdXMpO1xuICAgICAgICB9ICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgLy9cbiAgICAvLyBAcHJpdmF0ZVxuICAgIC8vIERldGVybWluZSBjb3JyZWN0IGZvcm1hdCBwYXR0ZXJuIGJhc2VkIG9uIGlucHV0IHZhbFxuICAgIC8vXG4gICAgdXBkYXRlUGF0dGVybigpIHtcbiAgICAgIC8vIERldGVybWluZSBhcHByb3ByaWF0ZSBwYXR0ZXJuXG4gICAgICB2YXIgbmV3UGF0dGVybjpQYXR0ZXJuSW5mbyA9IHRoaXMucGF0dGVybk1hdGNoZXIuZ2V0UGF0dGVybih0aGlzLnZhbHVlKTtcbiAgICBcbiAgICAgIC8vIE9ubHkgdXBkYXRlIHRoZSBwYXR0ZXJuIGlmIHRoZXJlIGlzIGFuIGFwcHJvcHJpYXRlIHBhdHRlcm4gZm9yIHRoZSB2YWx1ZS5cbiAgICAgIC8vIE90aGVyd2lzZSwgbGVhdmUgdGhlIGN1cnJlbnQgcGF0dGVybiAoYW5kIGxpa2VseSBkZWxldGUgdGhlIGxhdGVzdCBjaGFyYWN0ZXIuKVxuICAgICAgaWYgKG5ld1BhdHRlcm4pIHtcbiAgICAgICAgLy8gR2V0IGluZm8gYWJvdXQgdGhlIGdpdmVuIHBhdHRlcm5cbiAgICAgICAgdGhpcy5tTGVuZ3RoID0gbmV3UGF0dGVybi5tTGVuZ3RoO1xuICAgICAgICB0aGlzLmNoYXJzICAgPSBuZXdQYXR0ZXJuLmNoYXJzO1xuICAgICAgICB0aGlzLmlucHV0cyAgID0gbmV3UGF0dGVybi5pbnB1dHM7XG4gICAgICB9XG4gICAgfTtcbiAgICBcbiAgICBcbiAgICAvL1xuICAgIC8vIEBwcml2YXRlXG4gICAgLy8gVXNpbmcgdGhlIHByb3ZpZGVkIGtleSBpbmZvcm1hdGlvbiwgYWx0ZXIgZWwgdmFsdWUuXG4gICAgLy9cbiAgICBwcm9jZXNzS2V5KGNoYXJzLCBkZWxLZXksIGlnbm9yZUNhcmV0PWZhbHNlKSB7XG4gICAgICAvLyBHZXQgY3VycmVudCBzdGF0ZVxuICAgICAgXG4gICAgICB0aGlzLnNlbGVjdGlvbiA9IHRoaXMuaW5wdXRTZWxlY3Rpb24uZ2V0KHRoaXMuaW5wdXRFbGVtZW50KTtcbiAgICAgIHRoaXMudmFsdWUgPSB0aGlzLmlucHV0RWxlbWVudC52YWx1ZTtcbiAgICBcbiAgICAgIC8vIEluaXQgdmFsdWVzXG4gICAgICB0aGlzLmRlbHRhID0gMDtcbiAgICBcbiAgICAgIC8vIElmIGNoYXJzIHdlcmUgaGlnaGxpZ2h0ZWQsIHdlIG5lZWQgdG8gcmVtb3ZlIHRoZW1cbiAgICAgIGlmICh0aGlzLnNlbGVjdGlvbi5iZWdpbiAhPT0gdGhpcy5zZWxlY3Rpb24uZW5kKSB7XG4gICAgICAgIHRoaXMuZGVsdGEgPSAoLTEpICogTWF0aC5hYnModGhpcy5zZWxlY3Rpb24uYmVnaW4gLSB0aGlzLnNlbGVjdGlvbi5lbmQpO1xuICAgICAgICB0aGlzLnZhbHVlICAgPSB0aGlzLnV0aWxzLnJlbW92ZUNoYXJzKHRoaXMudmFsdWUsIHRoaXMuc2VsZWN0aW9uLmJlZ2luLCB0aGlzLnNlbGVjdGlvbi5lbmQpO1xuICAgICAgfVxuICAgIFxuICAgICAgLy8gRGVsZXRlIGtleSAobW92ZXMgb3Bwb3NpdGUgZGlyZWN0aW9uKVxuICAgICAgZWxzZSBpZiAoZGVsS2V5ICYmIGRlbEtleSA9PT0gNDYpIHtcbiAgICAgICAgdGhpcy5kZWxldGUoKTtcbiAgICBcbiAgICAgIC8vIG9yIEJhY2tzcGFjZSBhbmQgbm90IGF0IHN0YXJ0XG4gICAgICB9IGVsc2UgaWYgKGRlbEtleSAmJiB0aGlzLnNlbGVjdGlvbi5iZWdpbiAtIDEgPj0gMCkge1xuICAgIFxuICAgICAgICAvLyBBbHdheXMgaGF2ZSBhIGRlbHRhIG9mIGF0IGxlYXN0IC0xIGZvciB0aGUgY2hhcmFjdGVyIGJlaW5nIGRlbGV0ZWQuXG4gICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnV0aWxzLnJlbW92ZUNoYXJzKHRoaXMudmFsdWUsIHRoaXMuc2VsZWN0aW9uLmVuZCAtMSwgdGhpcy5zZWxlY3Rpb24uZW5kKTtcbiAgICAgICAgdGhpcy5kZWx0YSAtPSAxO1xuICAgIFxuICAgICAgLy8gb3IgQmFja3NwYWNlIGFuZCBhdCBzdGFydCAtIGV4aXRcbiAgICAgIH0gZWxzZSBpZiAoZGVsS2V5KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIFxuICAgICAgLy8gSWYgdGhlIGtleSBpcyBub3QgYSBkZWwga2V5LCBpdCBzaG91bGQgY29udmVydCB0byBhIHN0clxuICAgICAgaWYgKCFkZWxLZXkpIHtcbiAgICAgICAgLy8gQWRkIGNoYXIgYXQgcG9zaXRpb24gYW5kIGluY3JlbWVudCBkZWx0YVxuICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy51dGlscy5hZGRDaGFycyh0aGlzLnZhbHVlLCBjaGFycywgdGhpcy5zZWxlY3Rpb24uYmVnaW4pO1xuICAgICAgICB0aGlzLmRlbHRhICs9IGNoYXJzLmxlbmd0aDtcbiAgICAgIH1cbiAgICBcbiAgICAgIC8vIEZvcm1hdCBlbC52YWx1ZSAoYWxzbyBoYW5kbGVzIHVwZGF0aW5nIGNhcmV0IHBvc2l0aW9uKVxuICAgICAgdGhpcy5mb3JtYXRWYWx1ZShpZ25vcmVDYXJldCk7XG4gICAgfTsgXG4gICAgXG4gICAgLy9cbiAgICAvLyBAcHJpdmF0ZVxuICAgIC8vIERlbGV0ZXMgdGhlIGNoYXJhY3RlciBpbiBmcm9udCBvZiBpdFxuICAgIC8vXG4gICAgZGVsZXRlICgpIHtcbiAgICAgIC8vIEFkanVzdCBmb2N1cyB0byBtYWtlIHN1cmUgaXRzIG5vdCBvbiBhIGZvcm1hdHRlZCBjaGFyXG4gICAgICB3aGlsZSAodGhpcy5jaGFyc1t0aGlzLnNlbGVjdGlvbi5iZWdpbl0pIHtcbiAgICAgICAgdGhpcy5uZXh0UG9zKCk7XG4gICAgICB9XG4gICAgXG4gICAgICAvLyBBcyBsb25nIGFzIHdlIGFyZSBub3QgYXQgdGhlIGVuZFxuICAgICAgaWYgKHRoaXMuc2VsZWN0aW9uLmJlZ2luIDwgdGhpcy52YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgLy8gV2Ugd2lsbCBzaW11bGF0ZSBhIGRlbGV0ZSBieSBtb3ZpbmcgdGhlIGNhcmV0IHRvIHRoZSBuZXh0IGNoYXJcbiAgICAgICAgLy8gYW5kIHRoZW4gZGVsZXRpbmdcbiAgICAgICAgdGhpcy5uZXh0UG9zKCk7XG4gICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnV0aWxzLnJlbW92ZUNoYXJzKHRoaXMudmFsdWUsIHRoaXMuc2VsZWN0aW9uLmVuZCAtMSwgdGhpcy5zZWxlY3Rpb24uZW5kKTtcbiAgICAgICAgdGhpcy5kZWx0YSA9IC0xO1xuICAgICAgfVxuICAgIH07XG4gICAgXG4gICAgLy9cbiAgICAvLyBAcHJpdmF0ZVxuICAgIC8vIFF1aWNrIGhlbHBlciBtZXRob2QgdG8gbW92ZSB0aGUgY2FyZXQgdG8gdGhlIG5leHQgcG9zXG4gICAgLy9cbiAgICBuZXh0UG9zKCkge1xuICAgICAgdGhpcy5zZWxlY3Rpb24uZW5kICsrO1xuICAgICAgdGhpcy5zZWxlY3Rpb24uYmVnaW4gKys7XG4gICAgfTtcbiAgICBcbiAgICAvL1xuICAgIC8vIEBwcml2YXRlXG4gICAgLy8gQWx0ZXIgZWxlbWVudCB2YWx1ZSB0byBkaXNwbGF5IGNoYXJhY3RlcnMgbWF0Y2hpbmcgdGhlIHByb3ZpZGVkXG4gICAgLy8gaW5zdGFuY2UgcGF0dGVybi4gQWxzbyByZXNwb25zaWJsZSBmb3IgdXBkYXRpbmdcbiAgICAvL1xuICAgIGZvcm1hdFZhbHVlKGlnbm9yZUNhcmV0KSB7XG4gICAgICAvLyBTZXQgY2FyZXQgcG9zXG4gICAgICB0aGlzLm5ld1BvcyA9IHRoaXMuc2VsZWN0aW9uLmVuZCArIHRoaXMuZGVsdGE7XG4gICAgXG4gICAgICAvLyBSZW1vdmUgYWxsIGZvcm1hdHRlZCBjaGFycyBmcm9tIHZhbFxuICAgICAgdGhpcy5yZW1vdmVDaGFycygpO1xuICAgIFxuICAgICAgLy8gU3dpdGNoIHRvIGZpcnN0IG1hdGNoaW5nIHBhdHRlcm4gYmFzZWQgb24gdmFsXG4gICAgICB0aGlzLnVwZGF0ZVBhdHRlcm4oKTtcbiAgICBcbiAgICAgIC8vIFZhbGlkYXRlIGlucHV0c1xuICAgICAgdGhpcy52YWxpZGF0ZUlucHRzKCk7XG4gICAgXG4gICAgICAvLyBBZGQgZm9ybWF0dGVkIGNoYXJhY3RlcnNcbiAgICAgIHRoaXMuYWRkQ2hhcnMoKTtcbiAgICBcbiAgICAgIC8vIFNldCB2YWx1ZSBhbmQgYWRoZXJlIHRvIG1heExlbmd0aFxuICAgICAgdGhpcy5pbnB1dEVsZW1lbnQudmFsdWUgPSB0aGlzLnZhbHVlLnN1YnN0cigwLCB0aGlzLm1MZW5ndGgpO1xuICAgIFxuICAgICAgLy8gU2V0IG5ldyBjYXJldCBwb3NpdGlvblxuICAgICAgaWYgKCh0eXBlb2YgaWdub3JlQ2FyZXQpID09PSAndW5kZWZpbmVkJyB8fCBpZ25vcmVDYXJldCA9PT0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5pbnB1dFNlbGVjdGlvbi5zZXQodGhpcy5pbnB1dEVsZW1lbnQsIHRoaXMubmV3UG9zKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIFxuICAgIC8vXG4gICAgLy8gQHByaXZhdGVcbiAgICAvLyBSZW1vdmUgYWxsIGZvcm1hdHRlZCBiZWZvcmUgYW5kIGFmdGVyIGEgc3BlY2lmaWVkIHBvc1xuICAgIC8vXG4gICAgcmVtb3ZlQ2hhcnMoKSB7XG4gICAgICAvLyBEZWx0YSBzaG91bGRuJ3QgaW5jbHVkZSBwbGFjZWhvbGRlcnNcbiAgICAgIGlmICh0aGlzLnNlbGVjdGlvbi5lbmQgPiB0aGlzLmZvY3VzKSB7XG4gICAgICAgIHRoaXMuZGVsdGEgKz0gdGhpcy5zZWxlY3Rpb24uZW5kIC0gdGhpcy5mb2N1cztcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLy8gQWNjb3VudCBmb3Igc2hpZnRzIGR1cmluZyByZW1vdmFsXG4gICAgICB2YXIgc2hpZnQgPSAwO1xuICAgIFxuICAgICAgLy8gTG9vcCB0aHJvdWdoIGFsbCBwb3NzaWJsZSBjaGFyIHBvc2l0aW9uc1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPD0gdGhpcy5tTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gR2V0IHRyYW5zZm9ybWVkIHBvc2l0aW9uXG4gICAgICAgIHZhciBjdXJDaGFyID0gdGhpcy5jaGFyc1tpXSxcbiAgICAgICAgICAgIGN1ckhsZHIgPSB0aGlzLmhsZHJzW2ldLFxuICAgICAgICAgICAgcG9zID0gaSArIHNoaWZ0LFxuICAgICAgICAgICAgdmFsO1xuICAgIFxuICAgICAgICAvLyBJZiBhZnRlciBzZWxlY3Rpb24gd2UgbmVlZCB0byBhY2NvdW50IGZvciBkZWx0YVxuICAgICAgICBwb3MgPSAoaSA+PSB0aGlzLnNlbGVjdGlvbi5iZWdpbikgPyBwb3MgKyB0aGlzLmRlbHRhIDogcG9zO1xuICAgICAgICB2YWwgPSB0aGlzLnZhbHVlLmNoYXJBdChwb3MpO1xuICAgICAgICAvLyBSZW1vdmUgY2hhciBhbmQgYWNjb3VudCBmb3Igc2hpZnRcbiAgICAgICAgaWYgKGN1ckNoYXIgJiYgY3VyQ2hhciA9PT0gdmFsIHx8IGN1ckhsZHIgJiYgY3VySGxkciA9PT0gdmFsKSB7XG4gICAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMudXRpbHMucmVtb3ZlQ2hhcnModGhpcy52YWx1ZSwgcG9zLCBwb3MgKyAxKTtcbiAgICAgICAgICBzaGlmdC0tO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgXG4gICAgICAvLyBBbGwgaGxkcnMgc2hvdWxkIGJlIHJlbW92ZWQgbm93XG4gICAgICB0aGlzLmhsZHJzID0ge307XG4gICAgXG4gICAgICAvLyBTZXQgZm9jdXMgdG8gbGFzdCBjaGFyYWN0ZXJcbiAgICAgIHRoaXMuZm9jdXMgPSB0aGlzLnZhbHVlLmxlbmd0aDtcbiAgICB9O1xuICAgIFxuICAgIC8vXG4gICAgLy8gQHByaXZhdGVcbiAgICAvLyBNYWtlIHN1cmUgYWxsIGlucHRzIGFyZSB2YWxpZCwgZWxzZSByZW1vdmUgYW5kIHVwZGF0ZSBkZWx0YVxuICAgIC8vXG4gICAgdmFsaWRhdGVJbnB0cygpIHtcbiAgICAgIC8vIExvb3Agb3ZlciBlYWNoIGNoYXIgYW5kIHZhbGlkYXRlXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMudmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gR2V0IGNoYXIgaW5wdCB0eXBlXG4gICAgICAgIHZhciBpbnB0VHlwZSA9IHRoaXMuaW5wdXRzW2ldO1xuICAgIFxuICAgICAgICAvLyBDaGVja3NcbiAgICAgICAgdmFyIGlzQmFkVHlwZSA9ICF0aGlzLmlucHRSZWdzW2lucHRUeXBlXSxcbiAgICAgICAgICAgIGlzSW52YWxpZCA9ICFpc0JhZFR5cGUgJiYgIXRoaXMuaW5wdFJlZ3NbaW5wdFR5cGVdLnRlc3QodGhpcy52YWx1ZS5jaGFyQXQoaSkpLFxuICAgICAgICAgICAgaW5Cb3VuZHMgID0gdGhpcy5pbnB1dHNbaV07XG4gICAgXG4gICAgICAgIC8vIFJlbW92ZSBpZiBpbmNvcnJlY3QgYW5kIGluYm91bmRzXG4gICAgICAgIGlmICgoaXNCYWRUeXBlIHx8IGlzSW52YWxpZCkgJiYgaW5Cb3VuZHMpIHtcbiAgICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy51dGlscy5yZW1vdmVDaGFycyh0aGlzLnZhbHVlLCBpLCBpICsgMSk7XG4gICAgICAgICAgdGhpcy5mb2N1c1N0YXJ0LS07XG4gICAgICAgICAgdGhpcy5uZXdQb3MtLTtcbiAgICAgICAgICB0aGlzLmRlbHRhLS07XG4gICAgICAgICAgaS0tO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICBcbiAgICAvL1xuICAgIC8vIEBwcml2YXRlXG4gICAgLy8gTG9vcCBvdmVyIHZhbCBhbmQgYWRkIGZvcm1hdHRlZCBjaGFycyBhcyBuZWNlc3NhcnlcbiAgICAvL1xuICAgIGFkZENoYXJzKCkge1xuICAgICAgaWYgKHRoaXMub3B0aW9uLnBlcnNpc3RlbnQpIHtcbiAgICAgICAgLy8gTG9vcCBvdmVyIGFsbCBwb3NzaWJsZSBjaGFyYWN0ZXJzXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDw9IHRoaXMubUxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKCF0aGlzLnZhbHVlLmNoYXJBdChpKSkge1xuICAgICAgICAgICAgLy8gQWRkIHBsYWNlaG9sZGVyIGF0IHBvc1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMudXRpbHMuYWRkQ2hhcnModGhpcy52YWx1ZSwgdGhpcy5vcHRpb24ucGxhY2Vob2xkZXIsIGkpO1xuICAgICAgICAgICAgdGhpcy5obGRyc1tpXSA9IHRoaXMub3B0aW9uLnBsYWNlaG9sZGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmFkZENoYXIoaSk7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgLy8gQWRqdXN0IGZvY3VzIHRvIG1ha2Ugc3VyZSBpdHMgbm90IG9uIGEgZm9ybWF0dGVkIGNoYXJcbiAgICAgICAgd2hpbGUgKHRoaXMuY2hhcnNbdGhpcy5mb2N1c10pIHtcbiAgICAgICAgICB0aGlzLmZvY3VzKys7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEF2b2lkIGNhY2hpbmcgdmFsLmxlbmd0aCwgYXMgdGhleSBtYXkgY2hhbmdlIGluIF9hZGRDaGFyLlxuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8PSB0aGlzLnZhbHVlLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgLy8gV2hlbiBtb3ZpbmcgYmFja3dhcmRzIHRoZXJlIGFyZSBzb21lIHJhY2UgY29uZGl0aW9ucyB3aGVyZSB3ZVxuICAgICAgICAgIC8vIGRvbnQgd2FudCB0byBhZGQgdGhlIGNoYXJhY3RlclxuICAgICAgICAgIGlmICh0aGlzLmRlbHRhIDw9IDAgJiYgKGogPT09IHRoaXMuZm9jdXMpKSB7IHJldHVybiB0cnVlOyB9XG4gICAgXG4gICAgICAgICAgLy8gUGxhY2UgY2hhcmFjdGVyIGluIGN1cnJlbnQgcG9zaXRpb24gb2YgdGhlIGZvcm1hdHRlZCBzdHJpbmcuXG4gICAgICAgICAgdGhpcy5hZGRDaGFyKGopO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICBcbiAgICAvL1xuICAgIC8vIEBwcml2YXRlXG4gICAgLy8gQWRkIGZvcm1hdHR0ZWQgY2hhciBhdCBwb3NpdGlvblxuICAgIC8vXG4gICAgYWRkQ2hhcihpKSB7XG4gICAgICAvLyBJZiBjaGFyIGV4aXN0cyBhdCBwb3NpdGlvblxuICAgICAgdmFyIGNociA9IHRoaXMuY2hhcnNbaV07XG4gICAgICBpZiAoIWNocikgeyByZXR1cm4gdHJ1ZTsgfVxuICAgIFxuICAgICAgLy8gSWYgY2hhcnMgYXJlIGFkZGVkIGluIGJldHdlZW4gdGhlIG9sZCBwb3MgYW5kIG5ldyBwb3NcbiAgICAgIC8vIHdlIG5lZWQgdG8gaW5jcmVtZW50IHBvcyBhbmQgZGVsdGFcbiAgICAgIGlmICh0aGlzLnV0aWxzLmlzQmV0d2VlbihpLCBbdGhpcy5zZWxlY3Rpb24uYmVnaW4gLTEsIHRoaXMubmV3UG9zICsxXSkpIHtcbiAgICAgICAgdGhpcy5uZXdQb3MgKys7XG4gICAgICAgIHRoaXMuZGVsdGEgKys7XG4gICAgICB9XG4gICAgXG4gICAgICAvLyBJZiBjaGFyYWN0ZXIgYWRkZWQgYmVmb3JlIGZvY3VzLCBpbmNyXG4gICAgICBpZiAoaSA8PSB0aGlzLmZvY3VzKSB7XG4gICAgICAgIHRoaXMuZm9jdXMrKztcbiAgICAgIH1cbiAgICBcbiAgICAgIC8vIFVwZGF0ZWhvbGRlclxuICAgICAgaWYgKHRoaXMuaGxkcnNbaV0pIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuaGxkcnNbaV07XG4gICAgICAgIHRoaXMuaGxkcnNbaSArIDFdID0gdGhpcy5vcHRpb24ucGxhY2Vob2xkZXI7XG4gICAgICB9XG4gICAgXG4gICAgICAvLyBVcGRhdGUgdmFsdWVcbiAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnV0aWxzLmFkZENoYXJzKHRoaXMudmFsdWUsIGNociwgaSk7XG4gICAgfTtcbiAgICBcbn1cbiAgIFxuIFxuICJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
