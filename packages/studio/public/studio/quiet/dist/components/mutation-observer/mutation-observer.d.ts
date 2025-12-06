import type { CSSResultGroup, PropertyValues } from 'lit';
import { QuietElement } from '../../utilities/quiet-element.js';
/**
 * <quiet-mutation-observer>
 *
 * @summary Watches child elements and dispatches an event when they mutate.
 * @documentation https://quietui.org/docs/components/mutation
 * @status stable
 * @since 1.0
 *
 * @slot - The elements to observe. All direct children of the host element are observed, but not nested elements.
 *
 * @event quiet-mutation - Emitted when a slotted element is mutated. The `event.detail.record` property contains a
 *  [`MutationRecord`](https://developer.mozilla.org/en-US/docs/Web/API/MutationRecord) with information about
 *  the mutation.
 */
export declare class QuietMutationObserver extends QuietElement {
    static styles: CSSResultGroup;
    private mutationObserver;
    /** Disables the mutation observer. */
    disabled: boolean;
    /** Indicates whether attributes should be observed. */
    attr: boolean;
    /** Indicates whether attribute old value should be recorded. */
    attrOldValue: boolean;
    /**
     * One or more attributes to limit observations to, separate by a space. When not specified, all attributes are
     * observed.
     */
    attrFilter: string;
    /** Indicates whether mutations to target's children are to be observed. */
    childList: boolean;
    /** Indicates whether mutations to target's descendants are to be observed. */
    subtree: boolean;
    /** Indicates whether character data should be observed. */
    characterData: boolean;
    /** Indicates whether character data old value should be recorded. */
    characterDataOldValue: boolean;
    connectedCallback(): void;
    disconnectedCallback(): void;
    updated(changedProperties: PropertyValues<this>): void;
    /** Starts or restarts the mutation observer. */
    private startObserver;
    /** Stops the mutation observer. */
    private stopObserver;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'quiet-mutation-observer': QuietMutationObserver;
    }
}
