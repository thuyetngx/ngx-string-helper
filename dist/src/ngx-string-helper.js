import { Injectable } from '@angular/core';
var NgxStrHelper = (function () {
    function NgxStrHelper() {
        this.escapeChars = {
            '¢': 'cent',
            '£': 'pound',
            '¥': 'yen',
            '€': 'euro',
            '©': 'copy',
            '®': 'reg',
            '<': 'lt',
            '>': 'gt',
            '"': 'quot',
            '&': 'amp',
            '\'': '#39'
        };
    }
    NgxStrHelper.prototype.isNullOrEmpty = function (input) {
        return (input === undefined || input === null || input === "");
    };
    /**
     * @param str: string, len: number
     * Input: "Input is a string test";
     * Output: "Input is a..."
     */
    NgxStrHelper.prototype.truncate = function (str, len) {
        return str.substring(0, len) + '...';
    };
    /**
     * Searches for a given substring
     * @param str: string, finStr: string
     * Input: ("Test is a string", "is")
     * Output: True
     */
    NgxStrHelper.prototype.contains = function (str, findStr) {
        return str.indexOf(findStr) >= 0;
    };
    NgxStrHelper.prototype.toSlug = function (str) {
        return str
            .toLowerCase()
            .replace(/ /g, '-')
            .replace(/[^\w-]+/g, '');
    };
    NgxStrHelper.prototype.decapitalize = function (str) {
        return str.charAt(0).toLowerCase() + str.slice(1);
    };
    NgxStrHelper.prototype.capitalize = function (str, lowercaseRest) {
        var remainingChars = !lowercaseRest ? str.slice(1) : str.slice(1).toLowerCase();
        return str.charAt(0).toUpperCase() + remainingChars;
    };
    NgxStrHelper.prototype.clean = function (str) {
        return str.trim().replace(/\s\s+/g, ' ');
    };
    NgxStrHelper.prototype.chars = function (str) {
        return str.split('');
    };
    NgxStrHelper.prototype.swapCase = function (str) {
        return str.replace(/\S/g, function (c) {
            return c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase();
        });
    };
    NgxStrHelper.prototype.include = function (str, needle) {
        if (needle === '')
            return true;
        return str.indexOf(needle) !== -1;
    };
    NgxStrHelper.prototype.count = function (str, substr) {
        if (str.length === 0 || substr.length === 0)
            return 0;
        return str.split(substr).length - 1;
    };
    NgxStrHelper.prototype.escapeHTML = function (str) {
        var regexString = '[';
        for (var key in this.escapeChars) {
            regexString += key;
        }
        regexString += ']';
        var regex = new RegExp(regexString, 'g');
        return str.replace(regex, function (m) {
            return '&' + this.escapeChars[m] + ';';
        });
    };
    NgxStrHelper.prototype.insert = function (str, i, substr) {
        return this.splice(str, i, 0, substr);
    };
    NgxStrHelper.prototype.splice = function (str, i, howmany, substr) {
        var arr = this.chars(str);
        arr.splice(~~i, ~~howmany, substr);
        return arr.join('');
    };
    NgxStrHelper.prototype.replaceAll = function (str, find, replace, ignorecase) {
        var flags = (ignorecase === true) ? 'gi' : 'g';
        var reg = new RegExp(find, flags);
        return str.replace(reg, replace);
    };
    NgxStrHelper.prototype.isBlank = function (str) {
        return (/^\s*$/).test(str);
    };
    NgxStrHelper.prototype.reverse = function (str) {
        return this.chars(str).reverse().join('');
    };
    NgxStrHelper.prototype.startsWith = function (str, starts, position) {
        starts = '' + starts;
        position = position == null ? 0 : Math.min(this.toPositive(position), str.length);
        return str.lastIndexOf(starts, position) === position;
    };
    NgxStrHelper.prototype.endsWith = function (str, ends, position) {
        ends = '' + ends;
        if (typeof position == 'undefined') {
            position = str.length - ends.length;
        }
        else {
            position = Math.min(this.toPositive(position), str.length) - ends.length;
        }
        return position >= 0 && str.indexOf(ends, position) === position;
    };
    NgxStrHelper.prototype.pred = function (str) {
        return this.adjacent(str, -1);
    };
    NgxStrHelper.prototype.succ = function (str) {
        return this.adjacent(str, 1);
    };
    NgxStrHelper.prototype.titleize = function (str) {
        return str.toLowerCase().replace(/(?:^|\s|-)\S/g, function (c) {
            return c.toUpperCase();
        });
    };
    NgxStrHelper.prototype.camelize = function (str, decapitalize) {
        str = str.trim().replace(/[-_\s]+(.)?/g, function (match, c) {
            return c ? c.toUpperCase() : '';
        });
        if (decapitalize === true) {
            return this.decapitalize(str);
        }
        else {
            return str;
        }
    };
    NgxStrHelper.prototype.classify = function (str) {
        return this.capitalize(this.camelize(str.replace(/[\W_]/g, ' '), false).replace(/\s/g, ''), false);
    };
    NgxStrHelper.prototype.underscored = function (str) {
        return str.replace(/([a-z\d])([A-Z]+)/g, '$1_$2').replace(/[-\s]+/g, '_').toLowerCase();
    };
    NgxStrHelper.prototype.dasherize = function (str) {
        return str.replace(/([A-Z])/g, '-$1').replace(/[-_\s]+/g, '-').toLowerCase();
    };
    NgxStrHelper.prototype.humanize = function (str) {
        return this.capitalize(this.underscored(str).replace(/_id$/, '').replace(/_/g, ' ').trim(), false);
    };
    NgxStrHelper.prototype.toPositive = function (num) {
        return num < 0 ? 0 : (+num || 0);
    };
    NgxStrHelper.prototype.adjacent = function (str, direction) {
        if (str.length === 0) {
            return '';
        }
        return str.slice(0, -1) + String.fromCharCode(str.charCodeAt(str.length - 1) + direction);
    };
    NgxStrHelper.prototype.toNumber = function (num, precision) {
        if (num == null)
            return 0;
        var factor = Math.pow(10, isFinite(precision) ? precision : 0);
        return Math.round(num * factor) / factor;
    };
    NgxStrHelper.prototype.stripTags = function (str) {
        return str.replace(/<\/?[^>]+>/g, '');
    };
    NgxStrHelper.prototype.repeat = function (str, qty, separator) {
        qty = ~~qty;
        // using faster implementation if separator is not needed;
        if (separator == null)
            return this.strRepeat(str, qty);
        // this one is about 300x slower in Google Chrome
        /*eslint no-empty: 0*/
        for (var repeat = []; qty > 0; repeat[--qty] = str) { }
        return repeat.join(separator);
    };
    NgxStrHelper.prototype.strRepeat = function (str, qty) {
        if (qty < 1)
            return '';
        var result = '';
        while (qty > 0) {
            if (qty & 1)
                result += str;
            qty >>= 1, str += str;
        }
        return result;
    };
    NgxStrHelper.prototype.surround = function (str, wrapper) {
        return [wrapper, str, wrapper].join('');
    };
    NgxStrHelper.prototype.quote = function (str, quoteChar) {
        return this.surround(str, quoteChar || '"');
    };
    NgxStrHelper.prototype.unquote = function (str, quoteChar) {
        quoteChar = quoteChar || '"';
        if (str[0] === quoteChar && str[str.length - 1] === quoteChar)
            return str.slice(1, str.length - 1);
        else
            return str;
    };
    NgxStrHelper.prototype.boolMatch = function (s, matchers) {
        var i, matcher, down = s.toLowerCase();
        matchers = [].concat(matchers);
        for (i = 0; i < matchers.length; i += 1) {
            matcher = matchers[i];
            if (!matcher)
                continue;
            if (matcher.test && matcher.test(s))
                return true;
            if (matcher.toLowerCase() === down)
                return true;
        }
    };
    NgxStrHelper.prototype.toBoolean = function (str, trueValues, falseValues) {
        if (trueValues === void 0) { trueValues = []; }
        if (falseValues === void 0) { falseValues = []; }
        if (typeof str === 'number')
            str = '' + str;
        if (typeof str !== 'string')
            return !!str;
        str = str.trim();
        if (this.boolMatch(str, trueValues || ['true', '1']))
            return true;
        if (this.boolMatch(str, falseValues || ['false', '0']))
            return false;
    };
    NgxStrHelper.prototype.chop = function (str, step) {
        if (str == null)
            return [];
        str = String(str);
        step = ~~step;
        return step > 0 ? str.match(new RegExp('.{1,' + step + '}', 'g')) : [str];
    };
    /**
     * Removes prefix from start of string.
     * @param str : string
     * @param prefix : string
     * chompLeft('foobar', 'foo') ==> "bar"
     * chompLeft('foobar', 'bar') ==> "foobar"
     */
    NgxStrHelper.prototype.chompLeft = function (str, prefix) {
        if (str.indexOf(prefix) === 0) {
            str = str.slice(prefix.length);
            return str;
        }
        else {
            return str;
        }
    };
    /**
     * Removes suffix from end of string.
     * @param str : string
     * @param suffix : string
     * chompRight('foobar', 'foo') ==> "foobar"
     * chompRight('foobar', 'bar') ==> "foo"
     */
    NgxStrHelper.prototype.chompRight = function (str, suffix) {
        if (this.endsWith(str, suffix)) {
            str = str.slice(0, str.length - suffix.length);
            return str;
        }
        else {
            return str;
        }
    };
    /**
     * Converts all adjacent whitespace characters to a single space.
     * @param str :string
     * Input: '  String   \t libraries are   \n\n\t fun\n!  ';
     * Output: 'String libraries are fun !'
     */
    NgxStrHelper.prototype.collapseWhitespace = function (str) {
        str = str.replace(/[\s\xa0]+/g, ' ').replace(/^\s+|\s+$/g, '');
        return str;
    };
    /**
     * Ensures string starts with prefix.
     * @param str : string
     * @param prefix : string
     * ensureLeft('subdir', '/') ==> '/subdir'
     */
    NgxStrHelper.prototype.ensureLeft = function (str, prefix) {
        if (str.indexOf(prefix) === 0) {
            return str;
        }
        else {
            return prefix + str;
        }
    };
    /**
     * Ensures string ends with suffix.
     * @param str : string
     * @param suffix : string
     * ensureRight('dir', '/') ==> 'dir'
     */
    NgxStrHelper.prototype.ensureRight = function (str, suffix) {
        if (str.indexOf(suffix) === 0) {
            return str;
        }
        else {
            return str + suffix;
        }
    };
    /**
     * Return true if the string contains only letters.
     * @param str string
     * isAlpha("afaf") ==> true
     * isAlpha("fdafaf3") ==> false
     */
    NgxStrHelper.prototype.isAlpha = function (str) {
        return !/[^a-z\xDF-\xFF]|^$/.test(str.toLowerCase());
    };
    /**
     * Return true if the string contains only letters and numbers
     * @param str string
     * isAlphaNumeric("afaf35353afaf") ==> true
     * isAlphaNumeric("FFFF99fff") ==> true
     * isAlphaNumeric("aaff..") ==> false
     */
    NgxStrHelper.prototype.isAlphaNumeric = function (str) {
        return !/[^0-9a-z\xDF-\xFF]/.test(str.toLowerCase());
    };
    /**
     * Return true if the character or string is lowercase
     * @param str : string
     * isLower("a") ==> true
     * isLower("z") ==> true
     * isLower("B") ==> false
     * isLower("hithuyet") ==> true
     * isLower("hi thuyet") ==> false
     */
    NgxStrHelper.prototype.isLower = function (str) {
        return this.isAlpha(str) && str.toLowerCase() === str;
    };
    /**
     * Return true if the string only contains digits
     * @param str : string
     * isNumeric("3") ==> true
     * isNumeric("000992424242") ==> true
     * isNumeric("34.22") ==> false
     * isNumeric("-22.33") ==> false
     * isNumeric("NaN") ==> false
     * isNumeric("THUYET") ==> false
     */
    NgxStrHelper.prototype.isNumeric = function (str) {
        return !/[^0-9]/.test(str);
    };
    /**
     * Returns true if the character or string is uppercase
     * @param str : string
     * isUpper("HelLO") ==> true
     * isUpper("HI THUYET") ==> false
     * isUpper("HITHUYET") ==> true
     * isUpper("B") ==> true
     * isUpper("a") ==> false
     * isUpper("z") ==> false
     */
    NgxStrHelper.prototype.isUpper = function (str) {
        return this.isAlpha(str) && str.toUpperCase() === str;
    };
    /**
     * Return the substring denoted by n positive left-most characters.
     * @param str : string
     * @param num : number
     * left("My name Thuyet", 2) ==> "My"
     * left("My name Thuyet", 0) ==> ""
     */
    NgxStrHelper.prototype.left = function (str, num) {
        if (num >= 0) {
            return str.substr(0, num);
        }
    };
    /**
     * Return the substring denoted by n positive right-most characters.
     * @param str : string
     * @param num : number
     * right("My name THUYET", 2) ==> "ET"
     * right("My name THUYET", 0) ==> ""
     */
    NgxStrHelper.prototype.right = function (str, num) {
        if (num >= 0) {
            return str.substr(str.length - num, num);
        }
    };
    /**
     * Returns a string repeated n times.
     * @param str : string
     * @param num : number
     * times("*", 3) ==> "***"
     */
    NgxStrHelper.prototype.times = function (str, num) {
        return new Array(num + 1).join(str);
    };
    return NgxStrHelper;
}());
export { NgxStrHelper };
NgxStrHelper.decorators = [
    { type: Injectable },
];
/** @nocollapse */
NgxStrHelper.ctorParameters = function () { return []; };
//# sourceMappingURL=ngx-string-helper.js.map