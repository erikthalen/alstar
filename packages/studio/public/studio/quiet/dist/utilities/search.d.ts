/**
 * Simple case-insensitive search that checks if a query string appears within content.
 *
 * @param query The search string to look for
 * @param content The string to search within
 * @returns a boolean indicating if the query exists within the content
 */
export declare function exactSearch(query: string, content: string): boolean;
/**
 * Fuzzy string matching that handles typos, transpositions, and works with any language/script. The higher the
 * threshold (0-1), the pickier it is about matches. 0.7 is a good default that catches most typos while avoiding false
 * positives.
 *
 * @param query The search query to look for
 * @param content The string to search within
 * @param threshold Minimum similarity threshold (0-1), where 1 requires exact match
 * @returns a boolean indicating if the fuzzy match meets the threshold
 */
export declare function fuzzySearch(query: string, content: string, threshold?: number): boolean;
