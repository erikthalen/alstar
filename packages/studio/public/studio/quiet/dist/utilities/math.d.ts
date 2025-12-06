/** Guarantees the returned value is between a minimum and maximum number. */
export declare function clamp(value: number, min: number, max: number): number;
/** Creates a unique ID with an optional prefix. */
export declare function createId(prefix?: string): string;
/** Generates a random integer from min to max. */
export declare function randomInteger(min: number, max: number): number;
/** Returns a function that generates a seeded, pseudo random number between 0-1 every time it's called. */
export declare function seededNumberGenerator(seed: number): () => number;
