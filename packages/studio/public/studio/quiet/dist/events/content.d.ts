/** Emitted when the content of the target node has mutated. */
export declare class QuietContentChangedEvent extends Event {
    readonly detail: QuietContentChangedEventDetail;
    constructor(detail: QuietContentChangedEventDetail);
}
interface QuietContentChangedEventDetail {
    mutations: MutationRecord[];
}
declare global {
    interface GlobalEventHandlersEventMap {
        'quiet-content-changed': QuietContentChangedEvent;
    }
}
export {};
