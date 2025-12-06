import type { CSSResultGroup, PropertyValues } from 'lit';
import { QuietElement } from '../../utilities/quiet-element.js';
/**
 * <quiet-divider>
 *
 * @summary Separates and groups content visually.
 * @documentation https://quietui.org/docs/components/divider
 * @status stable
 * @since 1.0
 *
 * @slot symbol - Optional text or a symbol to show in the center of the divider.
 *
 * @cssproperty [--color=var(--quiet-neutral-stroke-soft)] - The color of the divider.
 * @cssproperty [--spacing=1rem] - The spacing around the divider.
 * @cssproperty [--thickness=var(--quiet-border-width)] - The thickness of the divider.
 *
 * @csspart symbol - The container that wraps the slotted symbol or icon.
 */
export declare class QuietDivider extends QuietElement {
    static observeSlots: boolean;
    static styles: CSSResultGroup;
    /** Sets the divider's orientation. */
    orientation: 'horizontal' | 'vertical';
    firstUpdated(): void;
    updated(changedProperties: PropertyValues<this>): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'quiet-divider': QuietDivider;
    }
}
