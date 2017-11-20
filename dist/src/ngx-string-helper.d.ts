export declare class NgxStrHelper {
    private escapeChars;
    constructor();
    /**
     * @param input any
     * Input: "Input is a string" ==> false
     * Input: "" ==> true
     */
    isNullOrEmpty(input: any): boolean;
    /**
     * @param str: string, len: number
     * Input: "Input is a string test";
     * Output: "Input is a..."
     */
    truncate(str: string, len: number): string;
    /**
     * Searches for a given substring
     * @param str: string, finStr: string
     * Input: ("Test is a string", "is")
     * Output: True
     */
    contains(str: string, findStr: string): boolean;
    /**
     * @param str : string
     * Input: "Input is a string" ==> "input-is-a-string"
     */
    toSlug(str: string): string;
    /**
     * @param str string
     * Input: "Foo Bar" ==> "foo Bar"
     */
    decapitalize(str: string): string;
    /**
     *
     * @param str string
     * @param lowercaseRest : boolean, (optional)
     * Input: "foo Bar" ==> "Foo Bar"
     * Input: "FOO Bar" ==> "Foo Bar"
     */
    capitalize(str: string, lowercaseRest?: boolean): string;
    /**
     * @param str string
     * Input: " foo    bar   " ==> "foo bar"
     */
    clean(str: string): string;
    /**
     * @param str string
     * Input: "Hello" ==> ["H", "e", "l", "l", "o"]
     */
    chars(str: string): string[];
    /**
     * Returns a copy of the string in which all the case-based characters have had their case swapped.
     * @param str string
     * Input: "hELLO" ==> "Hello"
     */
    swapCase(str: string): string;
    /**
     * Tests if string contains a substring.
     * @param str : string
     * @param needle : string
     * Input: include("foobar", "ob") ==> true
     */
    include(str: string, needle: string): boolean;
    /**
     * Returns number of occurrences of substring in string.
     * @param str : string
     * @param substr : string
     * Input: count("Hello world", "l") ==> 3
     */
    count(str: string, substr: string): number;
    /**
     * Converts HTML special characters to their entity equivalents. This function supports cent, yen, euro, pound, lt, gt, copy, reg, quote, amp, apos.
     * @param str : string
     * Input: escapeHTML("<div>Blah blah blah</div>") ==> "&lt;div&gt;Blah blah blah&lt;/div&gt;"
     */
    escapeHTML(str: string): string;
    /**
     * Converts entity characters to HTML equivalents. This function supports cent, yen, euro, pound, lt, gt, copy, reg, quote, amp, apos, nbsp.
     * @param str : string
     * Input: unescapeHTML("&lt;div&gt;Blah&nbsp;blah blah&lt;/div&gt;") ==> "<div>Blah blah blah</div>"
     */
    unescapeHTML(str: string): string;
    /**
     * @param str : string
     * @param i : number // Index
     * @param substr : string
     * Input: insert("Hellworld", 4, "o ") ==> "Hello world"
     */
    insert(str: string, i: number, substr: string): string;
    /**
     * Like an array splice.
     * @param str : string
     * @param i : number // Index
     * @param howmany : number // Number character
     * @param substr : string // String replace
     * Input: splice("https://github.com/test/ngx-string-helper", 19, 4, "thuyetngx");
     * Outputs: "https://github.com/thuyetngx/ngx-string-helper"
     */
    splice(str: string, i: number, howmany: number, substr: string): string;
    /**
     * @param str : string
     * @param find : string
     * @param replace : string
     * @param ignorecase : boolean
     * Input: replaceAll("foo", "o", "a"); ==> "faa"
     */
    replaceAll(str: string, find: string, replace: string, ignorecase: boolean): string;
    /**
     * @param str : string
     * isBlank(""); // => true
     * isBlank("\n"); // => true
     * isBlank(" "); // => true
     * isBlank("a"); // => false
     */
    isBlank(str: string): boolean;
    /**
     * Return reversed string
     * @param str : string
     * Input: .reverse("foobar"); ==> "raboof"
     */
    reverse(str: string): string;
    /**
     * This method checks whether the string begins with starts at position (default: 0)
     * @param str : string
     * @param starts : string
     * @param position : number
     * Input: startsWith("image.gif", "image"); ==> true
     * Input: startsWith(".vimrc", "vim", 1); ==> true
     */
    startsWith(str: string, starts: string, position: number): boolean;
    /**
     * This method checks whether the string ends with ends at position (default: string.length).
     * @param str : string
     * @param ends : string
     * @param position : number
     * Input: endsWith("image.gif", "gif"); ==> true
     * Input: endsWith("image.old.gif", "old", 9); ==> true
     */
    endsWith(str: string, ends: string, position?: number): boolean;
    /**
     * Returns the predecessor to string
     * @param str : string
     * pred("b") ==> "a"
     * pred("B") ==> "A"
     */
    pred(str: string): string;
    /**
     * Returns the successor to string.
     * @param str : string
     * pred("a") ==> "b"
     * pred("A") ==> "B"
     */
    succ(str: string): string;
    /**
     * @param str : string
     * titleize("my name is thuyet") ==> "My Name Is Thuyet"
     */
    titleize(str: string): string;
    /**
     * Converts underscored or dasherized string to a camelized one. Begins with a lower case letter unless it starts with an underscore, dash or an upper case letter.
     * @param str : string
     * @param decapitalize : string
     * camelize("moz-transform") ==> "mozTransform"
     * camelize("-moz-transform") ==> "MozTransform"
     * camelize("_moz_transform") ==> "MozTransform"
     * camelize("-moz-transform", true) ==> "MozTransform"
     */
    camelize(str: string, decapitalize: boolean): string;
    /**
     * Converts string to camelized class name. First letter is always upper case
     * @param str : string
     * classify("thuyet_le_van") ==> "ThuyetLeVan"
     */
    classify(str: string): string;
    /**
     * Converts a camelized or dasherized string into an underscored one
     * @param str : string
     * underscored("ThuyetLeVan") ==> "thuyet_le_van"
     */
    underscored(str: string): string;
    /**
     * Converts a underscored or camelized string into an dasherized one
     * @param str : string
     * underscored("ThuyetLeVan") ==> "thuyet-le-van"
     */
    dasherize(str: string): string;
    /**
     * Converts an underscored, camelized, or dasherized string into a humanized one. Also removes beginning and ending whitespace, and removes the postfix '_id'.
     * @param str : string
     * humanize("  capitalize dash-CamelCase_underscore trim  ") ==> "Capitalize dash camel case underscore trim"
     */
    humanize(str: string): string;
    toPositive(num: number): number;
    adjacent(str: string, direction: number): string;
    /**
     * Parse string to number. Returns NaN if string can't be parsed to number.
     * @param num : string
     * @param precision : number
     * toNumber("2.556") ==> 3
     * toNumber("2.556", 1) ==> 2.6
     * toNumber("999.999", -1) ==> 990
     */
    toNumber(num: any, precision: number): number;
    /**
     * Removes all html tags from string.
     * @param str : string
     * stripTags("a <a href=\"#\">link</a>") ==> "a link"
     * stripTags("a <a href=\"#\">link</a><script>alert(\"hello world!\")</script>") ==> "a linkalert("hello world!")"
     */
    stripTags(str: string): string;
    /**
     * Repeats a string count times.
     * @param str : string
     * @param qty : number
     * @param separator : string
     * repeat("HEY", 3) ==> "HEYHEYHEY"
     * repeat("HEY", 3, "HI") ==> "HEYHEYHEYHI"
     */
    repeat(str: string, qty: number, separator: string): string;
    strRepeat(str: string, qty: number): string;
    /**
     * Surround a string with another string.
     * @param str : string
     * @param wrapper : string
     * surround("HEY", "NAME") ==> "NAMEHEYNAME"
     */
    surround(str: string, wrapper: string): string;
    /**
     * Quotes a string. quoteChar defaults to ".
     * @param str : string
     * @param quoteChar : string
     * quote("DEMO", '"') ==> '"DEMO"'
     */
    quote(str: string, quoteChar: string): string;
    /**
     * Unquotes a string. quoteChar defaults to ".
     * @param str : string
     * @param quoteChar : string
     * unquote('"DEMO"') ==> "DEMO"
     */
    unquote(str: string, quoteChar: string): string;
    boolMatch(s: string, matchers: any): true | undefined;
    /**
     * Turn strings that can be commonly considered as booleas to real booleans. Such as "true", "false", "1" and "0". This function is case insensitive.
     * @param str : string
     * @param trueValues : []
     * @param falseValues : []
     * toBoolean("true") ==> true
     * toBoolean("FALSE") ==> false
     * toBoolean("random") ==> undefined
     */
    toBoolean(str: string, trueValues?: never[], falseValues?: never[]): boolean | undefined;
    /**
     * @param str : string
     * @param step : number
     * chop("whitespace", 3) ==> ["whi", "tes", "pac", "e"]
     */
    chop(str: string, step: number): never[] | RegExpMatchArray | null;
    /**
     * Removes prefix from start of string.
     * @param str : string
     * @param prefix : string
     * chompLeft('foobar', 'foo') ==> "bar"
     * chompLeft('foobar', 'bar') ==> "foobar"
     */
    chompLeft(str: string, prefix: string): string;
    /**
     * Removes suffix from end of string.
     * @param str : string
     * @param suffix : string
     * chompRight('foobar', 'foo') ==> "foobar"
     * chompRight('foobar', 'bar') ==> "foo"
     */
    chompRight(str: string, suffix: string): string;
    /**
     * Converts all adjacent whitespace characters to a single space.
     * @param str :string
     * Input: '  String   \t libraries are   \n\n\t fun\n!  ';
     * Output: 'String libraries are fun !'
     */
    collapseWhitespace(str: string): string;
    /**
     * Ensures string starts with prefix.
     * @param str : string
     * @param prefix : string
     * ensureLeft('subdir', '/') ==> '/subdir'
     */
    ensureLeft(str: string, prefix: string): string;
    /**
     * Ensures string ends with suffix.
     * @param str : string
     * @param suffix : string
     * ensureRight('dir', '/') ==> 'dir'
     */
    ensureRight(str: string, suffix: string): string;
    /**
     * Return true if the string contains only letters.
     * @param str string
     * isAlpha("afaf") ==> true
     * isAlpha("fdafaf3") ==> false
     */
    isAlpha(str: string): boolean;
    /**
     * Return true if the string contains only letters and numbers
     * @param str string
     * isAlphaNumeric("afaf35353afaf") ==> true
     * isAlphaNumeric("FFFF99fff") ==> true
     * isAlphaNumeric("aaff..") ==> false
     */
    isAlphaNumeric(str: string): boolean;
    /**
     * Return true if the character or string is lowercase
     * @param str : string
     * isLower("a") ==> true
     * isLower("z") ==> true
     * isLower("B") ==> false
     * isLower("hithuyet") ==> true
     * isLower("hi thuyet") ==> false
     */
    isLower(str: string): boolean;
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
    isNumeric(str: string): boolean;
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
    isUpper(str: string): boolean;
    /**
     * Return the substring denoted by n positive left-most characters.
     * @param str : string
     * @param num : number
     * left("My name Thuyet", 2) ==> "My"
     * left("My name Thuyet", 0) ==> ""
     */
    left(str: string, num: number): string | undefined;
    /**
     * Return the substring denoted by n positive right-most characters.
     * @param str : string
     * @param num : number
     * right("My name THUYET", 2) ==> "ET"
     * right("My name THUYET", 0) ==> ""
     */
    right(str: string, num: number): string | undefined;
    /**
     * Returns a string repeated n times.
     * @param str : string
     * @param num : number
     * times("*", 3) ==> "***"
     */
    times(str: string, num: number): string;
}
