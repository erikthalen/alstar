import type { CSSResultGroup } from 'lit';
import { QuietElement } from '../../utilities/quiet-element.js';
/**
 * <quiet-callout>
 *
 * @summary Draws attention to important information, provides context, or prompts users to take action.
 * @documentation https://quietui.org/docs/components/callout
 * @status stable
 * @since 1.0
 *
 * @slot - Content to show in the callout.
 * @slot icon - An optional icon to show in the callout. Works well with `<quiet-icon>` and `<svg>` elements.
 *
 * @csspart icon - The container the wraps the icon.
 * @csspart body - The container that wraps the callout's content.
 */
export declare class QuietCallout extends QuietElement {
    static observeSlots: boolean;
    static styles: CSSResultGroup;
    firstUpdated(): void;
    /** The type of callout to render. */
    variant: 'neutral' | 'primary' | 'constructive' | 'destructive';
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'quiet-callout': QuietCallout;
    }
}
