import type { CSSResultGroup, PropertyValues } from 'lit';
import { QuietElement } from '../../utilities/quiet-element.js';
import '../spinner/spinner.js';
/**
 * <quiet-veil>
 *
 * @summary Covers elements visually and disables interaction during important states such as submitting or loading.
 * @documentation https://quietui.org/docs/components/veil
 * @status stable
 * @since 1.0
 *
 * @dependency quiet-spinner
 *
 * @slot - The content to be covered when the veil state is active.
 * @slot front - Content to show in front of the veil, such as a custom loading indicator or message.
 *
 * @event quiet-before-activate - Emitted when the veil will activate. Calling `event.preventDefault()` will prevent
 *  the activation from occurring.
 * @event quiet-activate - Emitted immediately after the veil is activated.
 * @event quiet-before-deactivate - Emitted when the veil will deactivate. Calling `event.preventDefault()` will
 *  prevent the deactivation from occurring.
 * @event quiet-deactivate - Emitted immediately after the veil is deactivated.
 *
 * @cssproperty [--blur=3px] - The amount of blur to apply to the veil when active.
 * @cssproperty [--show-duration=300] - The duration of the show/hide animation.
 *
 * @cssstate active - Applied when the veil is active.
 */
export declare class QuietVeil extends QuietElement {
    static styles: CSSResultGroup;
    private isFirstUpdate;
    private localize;
    front: HTMLDivElement;
    dialog: HTMLDialogElement;
    /** The label for screen readers when veil is active. */
    label: string;
    /** Description of the property. */
    active: boolean;
    /** Set to true to show the veil over the entire viewport instead of the content inside of it. */
    fullscreen: boolean;
    firstUpdated(): void;
    updated(changedProperties: PropertyValues<this>): void;
    /** Activates the veil. */
    private activate;
    /** Deactivates the veil. */
    private deactivate;
    private handleDialogCancel;
    private handleDocumentKeyDown;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'quiet-veil': QuietVeil;
    }
}
