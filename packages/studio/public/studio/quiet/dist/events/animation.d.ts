/** Emitted when an animation such as typing or ticking completes. */
export declare class QuietAnimationComplete extends Event {
    constructor();
}
declare global {
    interface GlobalEventHandlersEventMap {
        'quiet-animation-complete': QuietAnimationComplete;
    }
}
