import type { CSSResultGroup, PropertyValues } from 'lit';
import { QuietFormControlElement } from '../../utilities/quiet-element.js';
/**
 * <quiet-toggle-icon>
 *
 * @summary Similar to checkboxes, except with icons to represent the checked and unchecked states.
 * @documentation https://quietui.org/docs/components/toggle-icon
 * @status stable
 * @since 1.0
 *
 * @slot checked - The icon to show when checked. Works best with a `<quiet-icon>` element.
 * @slot unchecked - The default icon to show when unchecked. Works best with a `<quiet-icon>` element.
 *
 * @event quiet-blur - Emitted when the toggle icon loses focus. This event does not bubble.
 * @event quiet-change - Emitted when the user commits changes to the toggle's value.
 * @event quiet-focus - Emitted when the checkbox receives focus. This event does not bubble.
 * @event quiet-input - Emitted when the checkbox receives input.
 *
 * @csspart button - The internal button that contains the toggle icons, a `<button>` element.
 *
 * @cssproperty [--animation-speed=300ms] - The animation speed to use when effects are selected.
 * @cssproperty [--checked-color=#f59e0b] - The color to use for checked toggle icons.
 * @cssproperty [--unchecked-color=var(--quiet-neutral-fill-mid)] - The color to use for unchecked toggle icons.
 *
 * @cssstate checked - Applied when the toggle icon is active.
 * @cssstate disabled - Applied when the toggle icon is disabled.
 * @cssstate focused - Applied when the toggle icon has focus.
 * @cssstate user-valid - Applied when the toggle icon is valid and the user has sufficiently interacted with it.
 * @cssstate user-invalid - Applied when the toggle icon is invalid and the user has sufficiently interacted with it.
 */
export declare class QuietToggleIcon extends QuietFormControlElement {
    static shadowRootOptions: {
        delegatesFocus: boolean;
        mode: ShadowRootMode;
        serializable?: boolean;
        slotAssignment?: SlotAssignmentMode;
        customElements?: CustomElementRegistry;
        registry?: CustomElementRegistry;
    };
    static formAssociated: boolean;
    static styles: CSSResultGroup;
    protected get focusableAnchor(): HTMLButtonElement;
    button: HTMLButtonElement;
    isInvalid: boolean;
    hadUserInteraction: boolean;
    wasSubmitted: boolean;
    /** The toggle icon's label. The label won't be displayed, but it will be announced by assistive devices. */
    label: string;
    /** The name of the toggle icon. This will be submitted with the form as a name/value pair. */
    name: string;
    /** The toggle icon's value. */
    value: string;
    /** The toggle icon's checked state. */
    checked: boolean;
    /** Disables the toggle icon. */
    disabled: boolean;
    /** The checkbox's size. */
    size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    /** The animation to use when toggling. */
    effect: 'fade' | 'scale' | 'flip-x' | 'flip-y' | 'translate-x' | 'translate-y' | 'none';
    /**
     * The form to associate this control with. If omitted, the closest containing `<form>` will be used. The value of
     * this attribute must be an ID of a form in the same document or shadow root.
     */
    form: string;
    /**
     * Makes the toggle icon required. Form submission will not be allowed until the toggle icon is checked.
     */
    required: boolean;
    connectedCallback(): void;
    disconnectedCallback(): void;
    updated(changedProperties: PropertyValues<this>): void;
    /** @internal Called when a containing fieldset is disabled. */
    formDisabledCallback(isDisabled: boolean): void;
    /** @internal Called when the form is reset. */
    formResetCallback(): void;
    private handleBlur;
    private handleClick;
    private handleFocus;
    private handleHostInvalid;
    /** Sets the form control's validity */
    private updateValidity;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'quiet-toggle-icon': QuietToggleIcon;
    }
}
