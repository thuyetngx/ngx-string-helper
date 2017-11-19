export declare class NgxStrHelper {
    private escapeChars;
    constructor();
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
    toSlug(str: string): string;
    decapitalize(str: string): string;
    capitalize(str: string, lowercaseRest: boolean): string;
    clean(str: string): string;
    chars(str: string): string[];
    swapCase(str: string): string;
    include(str: string, needle: string): boolean;
    count(str: string, substr: string): number;
    escapeHTML(str: string): string;
    insert(str: string, i: number, substr: string): string;
    splice(str: string, i: number, howmany: number, substr: string): string;
    replaceAll(str: string, find: string, replace: string, ignorecase: boolean): string;
    isBlank(str: string): boolean;
    reverse(str: string): string;
    startsWith(str: string, starts: string, position: number): boolean;
    endsWith(str: string, ends: string, position?: number): boolean;
    pred(str: string): string;
    succ(str: string): string;
    titleize(str: string): string;
    camelize(str: string, decapitalize: boolean): string;
    classify(str: string): string;
    underscored(str: string): string;
    dasherize(str: string): string;
    humanize(str: string): string;
    toPositive(num: number): number;
    adjacent(str: string, direction: number): string;
    toNumber(num: any, precision: number): number;
    stripTags(str: string): string;
    repeat(str: string, qty: number, separator: string): string;
    strRepeat(str: string, qty: number): string;
    surround(str: string, wrapper: string): string;
    quote(str: string, quoteChar: string): string;
    unquote(str: string, quoteChar: string): string;
    boolMatch(s: string, matchers: any): true | undefined;
    toBoolean(str: string, trueValues?: never[], falseValues?: never[]): boolean | undefined;
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
