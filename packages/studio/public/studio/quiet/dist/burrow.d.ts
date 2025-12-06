import { type TemplateResult } from 'lit-html';
export { html } from 'lit-html';
export { classMap } from 'lit/directives/class-map.js';
export { ifDefined } from 'lit/directives/if-defined.js';
export { live } from 'lit/directives/live.js';
export { repeat } from 'lit/directives/repeat.js';
export { styleMap } from 'lit/directives/style-map.js';
export { unsafeHTML } from 'lit/directives/unsafe-html.js';
export { unsafeSVG } from 'lit/directives/unsafe-svg.js';
export { until } from 'lit/directives/until.js';
export interface BurrowOptions {
    /**
     * A callback to run when the burrow connects to the DOM. Use `this` to access the Burrow instance.
     */
    attached?: () => void;
    /**
     * A callback to run when the burrow disconnects from the DOM. Use `this` to access the Burrow instance.
     */
    detached?: () => void;
}
export declare class Burrow {
    private connectedCallback;
    private disconnectedCallback;
    private template;
    private wrapper;
    host: HTMLElement | null;
    constructor(template: () => TemplateResult, options?: BurrowOptions);
    private clearStateTracking;
    /**
     * Attaches the burrow to a DOM element.
     */
    attach(el: string | HTMLElement): void;
    /**
     * Detaches the burrow from its host element and restores the original content.
     */
    detach(): void;
    /**
     * Re-renders the template with the current state.
     */
    update(): Promise<void>;
}
/**
 * Creates a new Burrow instance with the given template and options.
 *
 * @param template - A function that returns a `TemplateResult`. This function is called on each update to get fresh
 * template with current state values.
 * @param options - Optional configuration options for the burrow.
 *
 * @example
 * ```ts
 * const data = state({ count: 0 });
 *
 * // With auto-attach to host element
 * burrow('app', () => html`
 *   <button @click=${() => data.count++}>
 *     Count: ${data.count}
 *   </button>
 * `);
 *
 * // Without auto-attach
 * const myBurrow = burrow(() => html`<div>Content</div>`);
 * myBurrow.attach('app');
 * ```
 */
export declare function burrow(template: () => TemplateResult, options?: BurrowOptions): Burrow;
export declare function burrow(host: string | HTMLElement, template: () => TemplateResult, options?: BurrowOptions): Burrow;
/**
 * Creates a reactive state object that automatically updates associated burrows when modified.
 */
export declare function state<T extends Record<string, any>>(defaults: T): T;
