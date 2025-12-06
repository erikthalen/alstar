/** Emitted when copying has completed. */
export declare class QuietCopyEvent extends Event {
    readonly detail: QuietCopyEventDetail;
    constructor(detail: QuietCopyEventDetail);
}
interface QuietCopyEventDetail {
    data: string | ClipboardItem[];
}
/** Emitted when an error occurred during the copying operation. */
export declare class QuietCopyErrorEvent extends Event {
    readonly detail: QuietCopyErrorEventDetail;
    constructor(detail: QuietCopyErrorEventDetail);
}
interface QuietCopyErrorEventDetail {
    /** The error that occurred while copying. */
    error: Error;
}
declare global {
    interface GlobalEventHandlersEventMap {
        'quiet-copy': QuietCopyEvent;
        'quiet-copy-error': QuietCopyErrorEvent;
    }
}
export {};
