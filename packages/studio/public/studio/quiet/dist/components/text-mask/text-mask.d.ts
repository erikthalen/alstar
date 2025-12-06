import type { CSSResultGroup, PropertyValues } from 'lit';
import { QuietElement } from '../../utilities/quiet-element.js';
/**
 * <quiet-text-mask>
 *
 * @summary Applies text as a mask over an image, creating visually stylized characters.
 * @documentation https://quietui.org/docs/components/text-mask
 * @status stable
 * @since 1.0
 *
 * @slot - The text to be masked.
 *
 * @cssproperty --brightness - Adjusts the brightness of the mask image (0-200%, where 100% is normal)
 * @cssproperty --contrast - Adjusts the contrast of the mask image (0-200%, where 100% is normal)
 * @cssproperty --grayscale - Converts the mask to grayscale (0-100%, where 0% is normal and 100% is fully grayscale)
 * @cssproperty --hue-rotate - Rotates the hue of the mask (0-360deg)
 */
export declare class QuietTextMask extends QuietElement {
    static styles: CSSResultGroup;
    /** The URL of the image to use for the mask. */
    image: string;
    /** Creates a parallax-like effect where the image stays fixed while scrolling */
    fixed: boolean;
    updated(changedProperties: PropertyValues<this>): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'quiet-text-mask': QuietTextMask;
    }
}
