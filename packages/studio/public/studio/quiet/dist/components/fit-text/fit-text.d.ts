import type { CSSResultGroup } from 'lit';
import { QuietElement } from '../../utilities/quiet-element.js';
/**
 * <quiet-fit-text>
 *
 * @summary Scales a line of text to fit within its container.
 * @documentation https://quietui.org/docs/components/fit-text
 * @status stable
 * @since 1.0
 *
 * @slot - One or more text nodes to display. Non-text nodes will be ignored.
 */
export declare class QuietFitText extends QuietElement {
    static styles: CSSResultGroup;
    private resizeObserver;
    measure: HTMLSpanElement;
    defaultSlot: HTMLSlotElement;
    containerWidth: number;
    text: string;
    /**
     * The minimum font size to use when scaling, in pixels. The text will never be smaller than this value, which may
     * lead to overflows if the text is excessively long.
     */
    minFontSize: number;
    /**
     * The maximum font size to use when scaling, in pixels. The text will never be larger than this value, which may
     * cause the text to not scale the full width of the container.
     */
    maxFontSize: number;
    /**
     * The precision, in pixels, used to scale the text to fit. Larger values are more performant but result in less
     * accurate measurements.
     */
    precision: number;
    connectedCallback(): void;
    disconnectedCallback(): void;
    firstUpdated(): void;
    update(changedProperties: Map<PropertyKey, unknown>): void;
    private handleSlotChange;
    /**
     * Resizes the text to fit inside the container. You probably won't need to call this unless you're loading a font
     * dynamically and need to resize the text after it loads.
     */
    resize(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'quiet-fit-text': QuietFitText;
    }
}
