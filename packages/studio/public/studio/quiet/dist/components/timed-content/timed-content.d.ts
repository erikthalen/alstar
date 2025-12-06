import type { CSSResultGroup, PropertyValues } from 'lit';
import { QuietElement } from '../../utilities/quiet-element.js';
/**
 * <quiet-timed-content>
 *
 * @summary Shows certain content based on the current date and time.
 * @documentation https://quietui.org/docs/components/timed-content
 * @status stable
 * @since 1.0
 *
 * @slot - The default slot.
 * @slot before - Optional content that shows before the specified date/time.
 * @slot after - Optional content that shows after the specified date/time.
 */
export declare class QuietTimedContent extends QuietElement {
    static styles: CSSResultGroup;
    private updateInterval;
    /** The date to start showing the content. */
    startDate: string | Date;
    /** The date to stop showing the content. */
    endDate: string | Date;
    /** When set, the content will update as the time changes. */
    live: boolean;
    connectedCallback(): void;
    disconnectedCallback(): void;
    updated(changedProperties: PropertyValues<this>): void;
    private setupTimer;
    private cleanupTimer;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'quiet-timed-content': QuietTimedContent;
    }
}
