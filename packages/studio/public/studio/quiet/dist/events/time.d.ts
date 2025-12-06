/** Emitted when a task has finished running. */
export declare class QuietFinishedEvent extends Event {
    constructor();
}
/** Emitted when a timer has updated at a specific interval */
export declare class QuietTickEvent extends Event {
    constructor();
}
declare global {
    interface GlobalEventHandlersEventMap {
        'quiet-finished': QuietFinishedEvent;
        'quiet-tick': QuietTickEvent;
    }
}
