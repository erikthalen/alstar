/** Emitted when an element's intersection state changes. */
export declare class QuietIntersectEvent extends Event {
    readonly detail?: QuietIntersectEventDetail;
    constructor(detail?: QuietIntersectEventDetail);
}
interface QuietIntersectEventDetail {
    entry?: IntersectionObserverEntry;
}
declare global {
    interface GlobalEventHandlersEventMap {
        'quiet-intersect': QuietIntersectEvent;
    }
}
export {};
