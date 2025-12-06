/**
 * Adds a configurable long press event to the target element.
 *
 * By default, a `long press` event will be dispatched 700ms after `touchstart` if the user hasn't moved the pointer far
 * from the original position. You can listen for this event with `el.addEventListener('long-press')` like any other
 * event. By design, this utility works with both touch and pointer events. To disable pointer events and only listen to
 * touch, set `ignorePointerEvents` to `true`.
 *
 * The `long-press` event is cancelable and bubbles by default. To prevent browsers (e.g. iOS) from showing touch
 * callouts and text selection, the `-webkit-touch-callout`, `-webkit-user-select`, and `user-select` properties are all
 * set to `none !important` temporarily.
 *
 * The event will start functioning as soon as the constructor is called. A `start()` and `stop()` method can be used to
 * start and stop the event listener programmatically, if needed.
 *
 * @usage
 *
 * const longPress = new LongPress(element);
 *
 * element.addEventListener('long-press', (event) => {
 *   // a long press has occurred at originalEvent.clientX, originalEvent.clientY
 *   const originalEvent = event.detail.originalEvent;
 * });
 */
export declare class LongPress {
    private options;
    private target;
    private timeout;
    private startCoords;
    private wasStarted;
    constructor(el: Element, options?: Partial<LongPressOptions>);
    private handlePress;
    private handleMove;
    private handleRelease;
    /** Starts listening for the long press event. */
    start(): void;
    /** Stops listening for the long press event. */
    stop(): void;
}
export declare class LongPressEvent extends Event {
    readonly detail: LongPressEventDetail;
    constructor(eventName: string, eventOptions: EventInit, detail: LongPressEventDetail);
}
export interface LongPressEventDetail {
    /** The type of event. This will be `touch` for taps and `pointer` for clicks. */
    type: 'touch' | 'pointer';
    /** The event that initiated the long press. Useful for determining the target, coordinates, etc. */
    originalEvent: TouchEvent | PointerEvent;
}
export interface LongPressOptions {
    /**
     * By default, both touch and pointers events will dispatch a long press event. Set this to `true` to disable pointer
     * events and only listen to touch events.
     */
    ignorePointerEvents: boolean;
    /** The name of the event to emit. */
    eventName: string;
    /** Options to pass to the event. */
    eventOptions: EventInit;
    /** The amount of time to wait before considering it a long press. */
    duration: number;
    /** The maximum change in movement before the long press is canceled. */
    maxDelta: number;
    /** Whether to override certain styles that prevent touch callouts and user selection during the long press. */
    overrideStyles: boolean;
}
