export declare const deepCopy: <T>(object: T) => T;
export declare const omitFields: <T, Fields extends keyof T>(object: T, fields: Fields[]) => Pick<T, Exclude<keyof T, Fields>>;
export declare const pickFields: <T, Fields extends keyof T>(object: T, fields: Fields[]) => Pick<T, Fields>;
export declare const removeFields: <T, Fields extends keyof T>(object: T, fields: Fields[]) => Pick<T, Exclude<keyof T, Fields>>;
