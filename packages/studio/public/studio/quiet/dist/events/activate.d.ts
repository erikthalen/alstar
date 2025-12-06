/** Emitted when an activation occurs. Canceling the event will prevent activation. */
export declare class QuietBeforeActivateEvent extends Event {
    constructor();
}
/** Emitted immediately after an activation occurs. */
export declare class QuietActivateEvent extends Event {
    constructor();
}
/** Emitted when a deactivation occurs. Canceling the event will prevent deactivation. */
export declare class QuietBeforeDeactivateEvent extends Event {
    constructor();
}
/** Emitted immediately after an activation occurs. */
export declare class QuietDeactivateEvent extends Event {
    constructor();
}
declare global {
    interface GlobalEventHandlersEventMap {
        'quiet-before-activate': QuietBeforeActivateEvent;
        'quiet-activate': QuietActivateEvent;
        'quiet-before-deactivate': QuietBeforeActivateEvent;
        'quiet-deactivate': QuietDeactivateEvent;
    }
}
