interface QuietExpandCollapseEventDetails {
    /** The accordion item element being expanded or collapsed. */
    item: HTMLElement;
}
/** Emitted when an accordion item is about to expand. Calling `event.preventDefault` will prevent expansion. */
export declare class QuietBeforeExpandEvent extends Event {
    readonly detail: QuietExpandCollapseEventDetails;
    constructor(item: HTMLElement, options?: {
        cancelable: boolean;
    });
}
/** Emitted after an accordion item has expanded and applicable animations have completed. */
export declare class QuietExpandEvent extends Event {
    readonly detail: QuietExpandCollapseEventDetails;
    constructor(item: HTMLElement);
}
/** Emitted when an accordion item is about to collapse. Calling `event.preventDefault` will prevent collapse. */
export declare class QuietBeforeCollapseEvent extends Event {
    readonly detail: QuietExpandCollapseEventDetails;
    constructor(item: HTMLElement, options?: {
        cancelable: boolean;
    });
}
/** Emitted after an accordion item has collapsed and applicable animations have completed. */
export declare class QuietCollapseEvent extends Event {
    readonly detail: QuietExpandCollapseEventDetails;
    constructor(item: HTMLElement);
}
declare global {
    interface GlobalEventHandlersEventMap {
        'quiet-before-expand': QuietBeforeExpandEvent;
        'quiet-expand': QuietExpandEvent;
        'quiet-before-collapse': QuietBeforeCollapseEvent;
        'quiet-collapse': QuietCollapseEvent;
    }
}
export {};
