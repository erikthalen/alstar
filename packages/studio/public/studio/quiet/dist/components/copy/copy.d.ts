import type { CSSResultGroup, PropertyValues } from 'lit';
import { QuietElement } from '../../utilities/quiet-element.js';
import '../button/button.js';
import '../icon/icon.js';
/**
 * <quiet-copy>
 *
 * @summary Copies text and other types of data to the clipboard.
 * @documentation https://quietui.org/docs/components/copy
 * @status stable
 * @since 1.0
 *
 * @dependency quiet-button
 * @dependency quiet-icon
 *
 * @slot - A custom button to use instead of the default.
 *
 * @event quiet-copy - Emitted when the content has been copied. This event does not bubble. You can inspect
 *  `event.detail.data` to see the content that was copied.
 * @event quiet-copy-error - Emitted when the browser refuses to allow the content to be copied. This event does not
 *  bubble. You can inspect `event.detail.error` to see the error that occurred.
 *
 * @csspart copy-button - The default copy button, a `<quiet-button>` element.
 * @csspart copy-button__button - The default copy button's `button` part.
 * @csspart copy-icon - The default copy icon, a `<quiet-icon>` element.
 * @csspart copy-icon__svg - The copy icon's `svg` part.
 * @csspart feedback - The feedback that shows when copying.
 */
export declare class QuietCopy extends QuietElement {
    static styles: CSSResultGroup;
    private localize;
    private feedback;
    /** The text content that will be copied to the clipboard. */
    data: string | ClipboardItem[];
    /** Disables the button. */
    disabled: boolean;
    /** The placement of the feedback animation. */
    feedbackPlacement: 'top' | 'right' | 'bottom' | 'left' | 'hidden';
    updated(changedProperties: PropertyValues<this>): void;
    private handleClick;
    /** Shows copy feedback with an animation */
    private showFeedback;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'quiet-copy': QuietCopy;
    }
}
