import type { CSSResultGroup, PropertyValues } from 'lit';
import { QuietFormControlElement } from '../../utilities/quiet-element.js';
import '../icon/icon.js';
import '../spinner/spinner.js';
/**
 * <quiet-button>
 *
 * @summary Allows users to navigate, submit forms, and perform other actions.
 * @documentation https://quietui.org/docs/components/button
 * @status stable
 * @since 1.0
 *
 * @dependency quiet-icon
 * @dependency quiet-spinner
 *
 * @slot - The button's label.
 * @slot start - An icon or similar element to place before the label. Works great with `<quiet-icon>`.
 * @slot end - An icon or similar element to place after the label. Works great with `<quiet-icon>`.
 *
 * @event quiet-blur - Emitted when the button loses focus. This event does not bubble.
 * @event quiet-long-press - Emitted when the button is pressed and held by tapping or with the mouse. You can look at
 *  `event.detail.originalEvent.type` to see the type of event that initiated the long press.
 * @event quiet-focus - Emitted when the button receives focus. This event does not bubble.
 *
 * @csspart button - The internal `<button>` element. Other than `width`, this is where most custom styles should be
 *  applied.
 * @csspart caret - The caret icon, a `<quiet-icon>` element. Only present with the `with-caret` attribute.
 * @csspart caret__svg - The caret icon's `<svg>` part.
 * @csspart spinner - The loading indicator, a `<quiet-spinner>` element. Only present with the `loading` attribute.
 * @csspart toggle-indicator - When the button is a toggle button, this is the indicator that shows the current state.

 * @cssstate disabled - Applied when the button is disabled.
 * @cssstate focused - Applied when the button has focus.
 * @cssstate loading - Applied when a toggle button is loading.
 * @cssstate toggled - Applied when a toggle button is activated.
 */
export declare class QuietButton extends QuietFormControlElement {
    static formAssociated: boolean;
    static shadowRootOptions: {
        delegatesFocus: boolean;
        mode: ShadowRootMode;
        serializable?: boolean;
        slotAssignment?: SlotAssignmentMode;
        customElements?: CustomElementRegistry;
        registry?: CustomElementRegistry;
    };
    static styles: CSSResultGroup;
    protected internals: ElementInternals;
    private longPress;
    protected get focusableAnchor(): HTMLButtonElement;
    /** Determines the button's appearance. */
    appearance: 'normal' | 'outline' | 'text' | 'image';
    /** The type of button to render. This attribute has no effect on text or image buttons. */
    variant: 'neutral' | 'primary' | 'destructive';
    /** Disables the button. */
    disabled: boolean;
    /** Draws the button in a loading state. */
    loading: boolean;
    /**
     * Turns the button into a two-state toggle button. Clicking once will turn it on. Clicking again will turn it off.
     * Cannot be used with links buttons or submit buttons.
     */
    toggle?: 'on' | 'off';
    /** The button's size. */
    size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    /**
     * To create an icon button, slot an icon into the button's default slot and set this attribute to an appropriate
     * label. The label won't be visible, but it will be available to assistive devices.
     */
    iconLabel: string;
    /** Draws the button in a pill shape. */
    pill: boolean;
    /** Determines the button's type. */
    type: 'button' | 'submit' | 'reset';
    /** The name to submit when the button is used to submit the form. */
    name: string;
    /** The value to submit when the button is used to submit the form. */
    value: string;
    /** When true, the button will be rendered with a caret to indicate a dropdown menu. */
    withCaret: boolean;
    /**
     * Set this to render the button as an `<a>` tag instead of a `<button>`. The button will act as a link. When this is
     * set, form attributes and features will not work.
     */
    href: string;
    /** Opens the link in the specified target. Only works with link buttons. */
    target: '_blank' | '_parent' | '_self' | '_top' | undefined;
    /**
     * Sets the link's `rel` attribute. Only works with link buttons. When linking to an external domain, you should
     * probably set this to `noreferrer noopener`.
     */
    rel?: string;
    /** Sets the link's `download` attribute, causing the linked file to be downloaded. Only works with link buttons. */
    download?: string;
    /**
     * The form to associate this control with. If omitted, the closest containing `<form>` will be used. The value of
     * this attribute must be an ID of a form in the same document or shadow root.
     */
    form: string;
    /** Overrides the containing form's `action` attribute. */
    formAction: string | undefined;
    /** Overrides the containing form's `enctype` attribute. */
    formEnctype: 'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain' | undefined;
    /** Overrides the containing form's `method` attribute. */
    formMethod: 'post' | 'get' | undefined;
    /** Overrides the containing form's `novalidate` attribute. */
    formNoValidate: boolean | undefined;
    /** Overrides the containing form's `target` attribute. */
    formTarget: '_self' | '_blank' | '_parent' | '_top' | string | undefined;
    firstUpdated(): void;
    updated(changedProperties: PropertyValues<this>): void;
    private handleBlur;
    private handleFocus;
    private handleClick;
    render(): import("lit-html").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'quiet-button': QuietButton;
    }
}
