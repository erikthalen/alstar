/**
 * Generator that yields all active elements in the DOM tree, traversing through open shadow DOM boundaries. The last
 * element returned is the "deepest" active element. To fetch the deepest active element, use
 * `[...activeElements()].pop()`.
 */
export declare function activeElements(activeElement?: Element | null): Generator<Element>;
