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
    toPositive(num: number): number;
}
