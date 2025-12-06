/** Emitted when the element loses focus. */
export declare class QuietBlurEvent extends Event {
    constructor();
}
/** Emitted when the element's value changes. */
export declare class QuietChangeEvent extends Event {
    constructor();
}
/** Emitted when the element receives focus. */
export declare class QuietFocusEvent extends Event {
    constructor();
}
/** Emitted when the element receives input. */
export declare class QuietInputEvent extends Event {
    constructor();
}
/** Emitted when a fixed-length input is completely filled out. */
export declare class QuietInputCompleteEvent extends Event {
    constructor();
}
declare global {
    interface GlobalEventHandlersEventMap {
        'quiet-blur': QuietBlurEvent;
        'quiet-change': QuietChangeEvent;
        'quiet-focus': QuietFocusEvent;
        'quiet-input': QuietInputEvent;
    }
}
