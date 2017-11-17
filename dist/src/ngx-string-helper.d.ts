export declare class NgxStrHelper {
    private escapeChars;
    constructor();
    isNullOrEmpty(input: any): boolean;
    truncate(str: string, len: number): string;
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
    endsWith(str: string, ends: string, position: number): boolean;
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
}
