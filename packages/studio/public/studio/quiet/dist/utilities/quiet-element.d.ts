import type { TemplateResult } from 'lit';
import { LitElement } from 'lit';
/** The base class for all Quiet components */
export declare class QuietElement extends LitElement {
    static formAssociated: boolean;
    static shadowRootOptions: ShadowRootInit;
    /**
     * Enables slot detection for a component. When enabled, named slots that have content will be automatically detected
     * and their names will be added to a Set in the reactive `this.slots` property.
     */
    static observeSlots: boolean;
    protected internals: ElementInternals;
    shadowRoot: ShadowRoot;
    /**
     * @internal A Set containing all named slots that are currently populated with content. For performance reasons, this
     * will only be set when the static `observeSlots` property is enabled on the component.
     */
    slotsWithContent: Set<string>;
    dir: string;
    lang: string;
    constructor();
    connectedCallback(): void;
    /**
     * Updates the slotsWithContent Set with currently populated slots
     */
    private updateSlotsWithContent;
    /** @internal */
    customStates: {
        /** Adds or removes the specified custom state. */
        set: (customState: string, active: boolean) => void;
        /** Determines whether or not the element currently has the specified state. */
        has: (customState: string) => boolean;
    };
    /**
     * Used in templates to conditionally render a slot when it has content. When it doesn't have content, a hidden slot
     * of the same name is rendered instead to ensure the `slotchange` event continues to fire.
     */
    protected whenSlotted(name: string, content: TemplateResult, options?: Partial<WhenSlottedOptions>): TemplateResult;
}
interface WhenSlottedOptions {
    /**
     * When true, the slot will be rendered even if nothing is slotted in. Useful for showing the slot when, for example,
     * nothing is slotted in but a corresponding value is provided through a property.
     */
    force: boolean;
}
/** The base class for all Quiet form controls. */
export declare abstract class QuietFormControlElement extends QuietElement {
    static formAssociated: boolean;
    /**
     * For form controls, components must implement this and set it to the element that should receive focus when
     * reporting validation errors.
     */
    protected abstract get focusableAnchor(): HTMLElement;
    /** For form-associated elements, this returns the current validity state of the control. */
    get validity(): ValidityState | undefined;
    /** Gets the form control's current validation message or an empty string when the form control is valid. */
    get validationMessage(): string;
    /**
     * Checks if the form control has any restraints and whether it satisfies them. If invalid, `false` will be returned
     * and the `invalid` event will be dispatched. If valid, `true` will be returned.
     */
    checkValidity(): boolean;
    /**
     * Sets a custom validation message for the form control. If this message is not an empty string, then the form
     * control is considered invalid and the specified message will be displayed to the user when reporting validity.
     * Setting an empty string clears the custom validity state.
     */
    setCustomValidity(message: string): void;
    /** Returns the current custom validation message or an empty string if no custom error is set. */
    protected getCustomValidity(): string;
    /**
     * Checks if the form control has any restraints and whether it satisfies them. If invalid, `false` will be returned
     * and the `invalid` event will be dispatched. In addition, the problem will be reported to the user. If valid, `true`
     * will be returned.
     */
    reportValidity(): boolean;
}
export {};
