/** Emitted when an action has progressed. */
export declare class QuietProgressEvent extends Event {
    readonly detail: QuietProgressDetail;
    constructor(detail: QuietProgressDetail);
}
interface QuietProgressDetail {
    percent: number;
}
declare global {
    interface GlobalEventHandlersEventMap {
        'quiet-progress': QuietProgressEvent;
    }
}
export {};
