(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define(['exports', '@angular/core'], factory) :
    (factory((global['ngx-string-helper'] = global['ngx-string-helper'] || {}),global.ng.core));
}(this, (function (exports,_angular_core) { 'use strict';

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
    NgxStrHelper.prototype.truncate = function (str, len) {
        return str.substring(0, len) + '...';
    };
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
    
    return NgxStrHelper;
}());
NgxStrHelper.decorators = [
    { type: _angular_core.Injectable },
];
/** @nocollapse */
NgxStrHelper.ctorParameters = function () { return []; };

function NgxStrHelperFactory() {
    return new NgxStrHelper();
}

var NgxStrHelperModule = (function () {
    function NgxStrHelperModule() {
    }
    return NgxStrHelperModule;
}());
NgxStrHelperModule.decorators = [
    { type: _angular_core.NgModule, args: [{
                providers: [
                    {
                        provide: NgxStrHelper,
                        useFactory: NgxStrHelperFactory
                    }
                ]
            },] },
];
/** @nocollapse */
NgxStrHelperModule.ctorParameters = function () { return []; };

exports.NgxStrHelperModule = NgxStrHelperModule;
exports.NgxStrHelper = NgxStrHelper;

Object.defineProperty(exports, '__esModule', { value: true });

})));
