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
}
