type ClassNamesArg = string | null | undefined | boolean | {
    [key: string]: boolean | undefined | null;
} | ClassNamesArg[];
export declare const cn: (...args: ClassNamesArg[]) => string;
export {};
