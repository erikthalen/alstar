export declare const SUPPORTS_SCROLLSNAPCHANGE: boolean;
export declare const SUPPORTS_SCROLLSNAPCHANGING: boolean;
/**
 * Prevents scrolling on the document while a modal component is active. If more than one element locks scrolling, it
 * will only be unlocked after all elements unlock it.
 */
export declare function lockScrolling(el: Element): void;
/** Removes a lock and enables scrolling on the document if there are no more locks in place. */
export declare function unlockScrolling(el: Element): void;
/** A tiny polyfill for scrollend. Only applies to the target element, not the entire DOM. */
export declare function scrollEndPolyfill(element: Element): void;
