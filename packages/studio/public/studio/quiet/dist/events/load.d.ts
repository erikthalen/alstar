/** Emitted when loading has completed. */
export declare class QuietLoadedEvent extends Event {
    constructor();
}
/** Emitted when an error occurred during the loading operation. */
export declare class QuietLoadErrorEvent extends Event {
    readonly detail: QuietLoadErrorEventDetail;
    constructor(detail: QuietLoadErrorEventDetail);
}
interface QuietLoadErrorEventDetail {
    /** The error that occurred while loading. */
    error: Error;
}
declare global {
    interface GlobalEventHandlersEventMap {
        'quiet-loaded': QuietLoadedEvent;
        'quiet-load-error': QuietLoadErrorEvent;
    }
}
/** Emitted when scrolling has reached the threshold and more items should be loaded. */
export declare class QuietLoadMoreEvent extends Event {
    constructor();
}
export {};
