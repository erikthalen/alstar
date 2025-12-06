/** Emitted immediately before a card is flipped. */
export declare class QuietBeforeFlipEvent extends Event {
    constructor();
}
/** Emitted when one or more elements are selected. */
export declare class QuietFlipEvent extends Event {
    constructor();
}
declare global {
    interface GlobalEventHandlersEventMap {
        'quiet-before-flip': QuietBeforeFlipEvent;
        'quiet-flip': QuietBeforeFlipEvent;
    }
}
