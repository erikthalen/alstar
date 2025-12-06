import type { CSSResultGroup } from 'lit';
import { QuietElement } from '../../utilities/quiet-element.js';
/**
 * <quiet-spinner>
 *
 * @summary Tells the user that content is loading or a request is processing in the background.
 * @documentation https://quietui.org/docs/components/spinner
 * @status stable
 * @since 1.0
 *
 * @slot - A custom spinner to show in lieu of the default one. Works best with `<img>` and `<svg>` elements. Custom
 *  spinners will not be animated, allowing you to use animated GIF, APNG, and SVG animations without conflict.
 *
 * @csspart track - the spinner's track, a `<circle>` SVG element.
 * @csspart indicator - the spinner's indicator, a `<circle>` SVG element.
 *
 * @cssproperty [--indicator-color=var(--quiet-primary-fill-mid)] - The color of the spinner's indicator.
 * @cssproperty [--track-color=color-mix(in oklab, var(--quiet-neutral-fill-mid), transparent 75%)] - The color of the
 *  spinner's track.
 * @cssproperty [--speed=0.75s] - The speed for one complete rotation.
 */
export declare class QuietSpinner extends QuietElement {
    static styles: CSSResultGroup;
    private localize;
    /** A custom label for screen readers. */
    label: string;
    firstUpdated(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'quiet-spinner': QuietSpinner;
    }
}
