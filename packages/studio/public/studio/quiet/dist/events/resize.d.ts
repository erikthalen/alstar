/** Emitted when a resize occurs. */
export declare class QuietResizeEvent extends Event {
    readonly detail?: QuietResizeEventDetail;
    constructor(detail?: QuietResizeEventDetail);
}
interface QuietResizeEventDetail {
    entry?: ResizeObserverEntry;
}
declare global {
    interface GlobalEventHandlersEventMap {
        'quiet-resize': QuietResizeEvent;
    }
}
export {};
