/**
 * Emitted when the page is going to change, e.g. in a pagination component. Calling `event.preventDefault` will prevent
 * the page from changing.
 */
export declare class QuietBeforePageChangeEvent extends Event {
    readonly detail: QuietBeforePageChangeEventDetail;
    constructor(detail: QuietBeforePageChangeEventDetail);
}
interface QuietBeforePageChangeEventDetail {
    currentPage: number;
    requestedPage: number;
}
/** Emitted after the page has changed. */
export declare class QuietPageChangeEvent extends Event {
    constructor();
}
declare global {
    interface GlobalEventHandlersEventMap {
        'quiet-before-page-change': QuietBeforePageChangeEvent;
        'quiet-page-change': QuietPageChangeEvent;
    }
}
export {};
