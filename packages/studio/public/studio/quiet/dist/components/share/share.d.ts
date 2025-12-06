import type { CSSResultGroup, PropertyValues } from 'lit';
import { QuietElement } from '../../utilities/quiet-element.js';
/**
 * <quiet-share>
 *
 * @summary Allows users to share links, files and text via their operating system's share interface.
 * @documentation https://quietui.org/docs/components/share
 * @status stable
 * @since 1.0
 *
 * @slot - A custom button to use instead of the default.
 *
 * @csspart share-button - The default share button, a `<quiet-button>` element.
 * @csspart share-button__button - The default share button's `button` part.
 * @csspart share-icon - The default share icon, a `<quiet-icon>` element.
 * @csspart share-icon__svg - The share icon's `svg` part.
 * @csspart feedback - The feedback that shows when copying (e.g. when the Web Share API is unsupported).
 */
export declare class QuietShare extends QuietElement {
    static styles: CSSResultGroup;
    private localize;
    private feedback;
    /**
     * A human-readable label to be shared. This is sometimes ignored by the operating system, but you should usually
     * provide it as a fallback value.
     */
    label: string;
    /** A string of text to be shared. */
    text: string;
    /** A URL to be shares. */
    url: string;
    /**
     * An array of [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File) objects to be shared. Property only.
     */
    files: File[];
    /** Disables the button. */
    disabled: boolean;
    /** The placement of the feedback animation when falling back to copying. */
    feedbackPlacement: 'top' | 'right' | 'bottom' | 'left' | 'hidden';
    updated(changedProperties: PropertyValues<this>): void;
    private handleClick;
    /** Shows copy feedback with an animation */
    private showFeedback;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'quiet-share': QuietShare;
    }
}
