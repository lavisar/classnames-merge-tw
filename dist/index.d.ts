type ClassNamesArg = string | {
    [key: string]: boolean;
} | boolean | undefined | null;
export declare const cn: (...classNames: ClassNamesArg[]) => string;
export {};
