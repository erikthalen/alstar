import type { CSSResultGroup } from 'lit';
import { QuietElement } from '../../utilities/quiet-element.js';
/**
 * <quiet-carousel-item>
 *
 * @summary Represents individual items used in a carousel.
 * @documentation https://quietui.com/docs/components/carousel
 * @status stable
 * @since 1.0
 *
 * @slot - The content to show inside the carousel item.
 *
 * @csspart content - A flex wrapper around the carousel item's content.
 */
export declare class QuietCarouselItem extends QuietElement {
    static styles: CSSResultGroup;
    /** An optional name for the carousel item so you can reference it with the `active-name` attribute. */
    name: string;
    firstUpdated(): void;
    render(): import("lit-html").TemplateResult<1>;
}
