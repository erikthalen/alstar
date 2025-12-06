/** Emitted when the element is opened. Calling `event.preventDefault` will prevent the element from opening. */
export declare class QuietBeforeOpenEvent extends Event {
    constructor(options?: {
        cancelable: boolean;
    });
}
/** Emitted after the element is opened and applicable animations have completed. */
export declare class QuietOpenEvent extends Event {
    constructor();
}
/**
 * Emitted when the element is told to dismiss. Calling `event.preventDefault` will prevent the element from closing.
 * You can inspect `event.detail.source` to see which element triggered dismissal.
 */
export declare class QuietBeforeCloseEvent extends Event {
    readonly detail: QuietBeforeCloseEventDetails;
    constructor(detail: QuietBeforeCloseEventDetails, options?: {
        cancelable: boolean;
    });
}
interface QuietBeforeCloseEventDetails {
    /** The element that triggered the close action, if available. */
    source: Element | null;
}
/** Emitted after the element is closed and applicable animations have completed. */
export declare class QuietCloseEvent extends Event {
    constructor();
}
declare global {
    interface GlobalEventHandlersEventMap {
        'quiet-before-open': QuietBeforeOpenEvent;
        'quiet-open': QuietOpenEvent;
        'quiet-before-close': QuietBeforeCloseEvent;
        'quiet-close': QuietCloseEvent;
    }
}
export {};
