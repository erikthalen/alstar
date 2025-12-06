/**
 * Applies a class to the specified element to animate it. The class is removed after the animation finishes or is
 * canceled, then the promise resolves. If applying the class doesn't trigger an animation, the promise resolves
 * immediately.
 */
export declare function animateWithClass(el: Element, className: string): Promise<void>;
/** Determines if two DOMRect objects have different positions. */
export declare function hasDomRectMoved(oldPosition: DOMRect, newPosition: DOMRect): boolean;
/** Parses a CSS duration string and returns the corresponding number of milliseconds. */
export declare function parseCssDuration(duration: string): number;
