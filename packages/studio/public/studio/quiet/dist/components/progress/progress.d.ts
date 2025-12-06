import type { CSSResultGroup, PropertyValues } from 'lit';
import { QuietElement } from '../../utilities/quiet-element.js';
/**
 * <quiet-progress>
 *
 * @summary Visually represents the progress of a request or task.
 * @documentation https://quietui.org/docs/components/progress
 * @status stable
 * @since 1.0
 *
 * @slot - Text to render inside the progress bar.
 *
 * @cssproperty [--track-color=var(--quiet-neutral-fill-softer)] - The color of the progress bar's track.
 * @cssproperty [--track-size=1.5em | 1em] - The height or thickness of the track, depending on the type of progress bar.
 * @cssproperty [--indicator-color=var(--quiet-primary-fill-mid)] - The color of the progress bar's value indicator.
 * @cssproperty [--diameter=10em] - For progress rings, the diameter of the ring.
 *
 * @csspart track - The progress bar's track, a `<div>` for progress bars and a `<circle>` for progress rings.
 * @csspart indicator - The progress bar's current value indicator, a `<div>` for progress bars and an SVG `<circle>`
 *  for progress rings.
 * @csspart content - The container that holds any content that's been slotted in.
 */
export declare class QuietProgress extends QuietElement {
    static styles: CSSResultGroup;
    /** A custom label for assistive devices. */
    label: string;
    /** The type of progress bar to render. */
    appearance: 'bar' | 'ring' | 'pie';
    /** The progress bar's minimum value. */
    min: number;
    /** The progress bar's maximum value. */
    max: number;
    /** The progress bar's current value. */
    value: number;
    /** The progress bar's current value as a percentage. This is a readonly property. */
    get percentage(): number;
    /**
     * When the completion status can't be determined, the progress bar is considered indeterminate and the value is
     * ignored. Useful for tasks whose progress can't be reported.
     */
    indeterminate: boolean;
    firstUpdated(): void;
    updated(changedProperties: PropertyValues<this>): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'quiet-progress': QuietProgress;
    }
}
