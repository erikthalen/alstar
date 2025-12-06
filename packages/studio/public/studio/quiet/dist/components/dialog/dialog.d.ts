import type { CSSResultGroup, PropertyValues } from 'lit';
import { QuietElement } from '../../utilities/quiet-element.js';
/**
 * <quiet-dialog>
 *
 * @summary Displays modal content for alerts, confirmations, configurations, and other important interactions that
 *  require immediate attention.
 * @documentation https://quietui.org/docs/components/dialog
 * @status stable
 * @since 1.0
 *
 * @slot - Content to place in the dialog's body. Note that, due to [this Chrome bug](https://issues.chromium.org/issues/40800208),
 *  you should wrap text nodes in an element to allow text selection in that browser.
 * @slot header - Content to place in the dialog's header.
 * @slot actions - Slot in one or more text buttons to customize the actions that appear in the dialog's header. Only
 *  available when the header is enabled.
 * @slot footer - Content to place in the dialog's footer.
 *
 * @event quiet-before-open - Emitted when the dialog is instructed to open but before it is shown. Calling
 *  `event.preventDefault()` will prevent the dialog from opening.
 * @event quiet-open - Emitted after the dialog has been opened and the show animation has completed.
 * @event quiet-before-close - Emitted when the dialog is dismissed. Calling `event.preventDefault()` will prevent the
 *  dialog from closing and show a brief animation.<br><br>You can check `event.detail.source` to see which element
 *  triggered the dialog to close, such as a button. If the source is the dialog itself, the user has pressed [[Escape]]
 *  or the dialog has been closed programmatically.
 * @event quiet-close - Emitted after the dialog has been closed and the hide animation has completed.
 *
 * @cssproperty [--height=fit-content] - The default height of the dialog. Note that dialogs shrink to fit as necessary.
 * @cssproperty [--show-duration=200ms] - The duration of the show/hide animation.
 * @cssproperty [--spacing=1.5rem] - The spacing to use throughout the dialog.
 * @cssproperty [--width=30rem] - The default width of the dialog. Note that dialogs shrink to fit as necessary.
 *
 * @csspart dialog - The internal `<dialog>` element.
 * @csspart body - The container that wraps the dialog's body.
 * @csspart header - The container that wraps the dialog's header. A flex container, by default.
 * @csspart footer - The container that wraps the dialog's footer. A flex container, by default.
 *
 * @cssstate open - Applied when the dialog is open.
 */
export declare class QuietDialog extends QuietElement {
    static observeSlots: boolean;
    static styles: CSSResultGroup;
    private localize;
    private body;
    private dialog;
    /** Opens or closes the dialog. */
    open: boolean;
    /**
     * By default, the dialog will appear in the center of the screen. Changing the placement will cause the dialog to
     * slide in from the side of the screen like a drawer.
     */
    placement: 'center' | 'top' | 'bottom' | 'start' | 'end' | 'full';
    /** Allows the dialog to be closed when clicking outside of it. */
    lightDismiss: boolean;
    /** For dialogs that scroll, this will reset the scroll position when the dialog closes. */
    resetScroll: boolean;
    updated(changedProperties: PropertyValues<this>): void;
    private handleDialogCancel;
    private handleDialogClick;
    private handleDialogPointerDown;
    private handleDocumentKeyDown;
    /** Call this to show the dialog. */
    private show;
    /** Call this to ask the dialog to close. */
    private requestClose;
    /** Scrolls the dialog's body to the specified position. */
    scrollBodyTo(options: ScrollToOptions): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'quiet-dialog': QuietDialog;
    }
}
