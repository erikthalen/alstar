/**
 * Event emitted when an item changes, e.g. a carousel item.
 */
export declare class QuietItemChangeEvent extends Event {
    readonly detail: QuietItemChangeEventDetail;
    constructor(detail: QuietItemChangeEventDetail);
}
interface QuietItemChangeEventDetail {
    /** The index of the item that changed. */
    index?: number;
}
declare global {
    interface HTMLElementEventMap {
        'quiet-item-change': QuietItemChangeEvent;
    }
}
export {};
