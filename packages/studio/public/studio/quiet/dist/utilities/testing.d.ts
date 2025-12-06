/**
 * Simulates clicking on an HTML element at a specified position with optional offsets.
 * Used for programmatically triggering actual clicks in the testing environment.
 *
 * @param el - The DOM element to click
 * @param position - Where on the element to click ('top', 'right', 'bottom', 'left', 'center', 'top-right', 'top-left', 'bottom-right', 'bottom-left')
 * @param options - Object containing offset configurations
 * @param options.offsetX - Horizontal pixel offset from the click position
 * @param options.offsetY - Vertical pixel offset from the click position
 *
 * @example
 * await clickOnElement(button, 'center'); // Click center of button
 * await clickOnElement(menu, 'top', { offsetY: 5 }); // Click 5px below top of menu
 * await clickOnElement(menu, 'top-right', { offsetX: -2 }); // Click slightly left of top right corner
 */
export declare function clickOnElement(el: Element, position?: 'top' | 'right' | 'bottom' | 'left' | 'center' | 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left', options?: {
    offsetX?: number;
    offsetY?: number;
}): Promise<void>;
interface ExpectEventOptions {
    /** The length of time in milliseconds to wait for events to be received. Default 500. */
    timeout: number;
    /** The number of times the event should be emitted. Default 1. */
    count: number;
}
export declare function expectEvent(
/** The element dispatching the event */
el: Element, 
/**
 * The name of the event(s) to listen for. If more than one event is passed, they all must be dispatched the same
 * number of times as specified in `options.count`. This is most commonly used for testing custom + native events that
 * get dispatched at the same time, e.g. `input` and `quiet-input`.
 */
events: string | string[], 
/** The action to run that will trigger the events */
action: () => void | Promise<void>, 
/** Additional options */
options?: Partial<ExpectEventOptions>): Promise<void>;
export {};
