/** Emitted when one or more elements are selected. */
export declare class QuietSelectEvent extends Event {
    readonly detail: QuietSelectEventDetail;
    constructor(detail: QuietSelectEventDetail);
}
interface QuietSelectEventDetail {
    /** An item or array of items that were selected. */
    item: Element | Element[];
}
declare global {
    interface GlobalEventHandlersEventMap {
        'quiet-select': QuietSelectEvent;
    }
}
export {};
