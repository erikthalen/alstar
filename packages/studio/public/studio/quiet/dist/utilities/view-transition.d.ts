/**
 * Wraps a callback in a view transition if supported by the browser. Falls back to executing the callback directly if
 * not supported.
 */
export declare function doViewTransition(callback: () => void): void;
