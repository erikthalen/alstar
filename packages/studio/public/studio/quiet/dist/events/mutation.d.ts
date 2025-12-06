/** Emitted when a mutation event occurs. */
export declare class QuietMutationEvent extends Event {
    readonly detail?: QuietMutationEventDetail;
    constructor(detail: QuietMutationEventDetail);
}
interface QuietMutationEventDetail {
    record: MutationRecord;
}
declare global {
    interface HTMLElementEventMap {
        'quiet-mutation': QuietMutationEvent;
    }
}
export {};
