/** Emitted when a custom transition finishes. */
export declare class QuietTransitionEndEvent extends Event {
    constructor();
}
declare global {
    interface GlobalEventHandlersEventMap {
        'quiet-transition-end': QuietTransitionEndEvent;
    }
}
