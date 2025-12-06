import type { CSSResultGroup, PropertyValues } from 'lit';
import { QuietFormControlElement } from '../../utilities/quiet-element.js';
import '../tooltip/tooltip.js';
import type { QuietTooltip } from '../tooltip/tooltip.js';
/**
 * <quiet-slider>
 *
 * @summary Allows users to select numeric values within a given range by moving a thumb along a track.
 * @documentation https://quietui.org/docs/components/slider
 * @status stable
 * @since 1.0
 *
 * @dependency quiet-tooltip
 *
 * @slot label - The slider's label. For plain-text labels, you can use the `label` attribute instead.
 * @slot description - The slider's description. For plain-text descriptions, you can use the `description` attribute
 *  instead.
 * @slot reference - One or more reference labels to show visually below the slider.
 *
 * @event quiet-blur - Emitted when the slider loses focus. This event does not bubble.
 * @event quiet-change - Emitted when the user commits changes to the slider's value.
 * @event quiet-focus - Emitted when the slider receives focus. This event does not bubble.
 * @event quiet-input - Emitted when the slider receives input.
 *
 * @csspart label - The element that contains the sliders's label.
 * @csspart description - The element that contains the slider's description.
 * @csspart slider - The focusable element with `role="slider"`. Contains the track and reference slot.
 * @csspart track - The slider's track.
 * @csspart indicator - The colored indicator that shows from the start of the slider to the current value.
 * @csspart markers - The container that holds all the markers when `with-markers` is used.
 * @csspart marker - The individual markers that are shown when `with-markers` is used.
 * @csspart references - The container that holds references that get slotted in.
 * @csspart thumb - The slider's thumb.
 * @csspart thumb-min - The min value thumb in a range slider.
 * @csspart thumb-max - The max value thumb in a range slider.
 * @csspart tooltip - The tooltip, a `<quiet-tooltip>` element.
 * @csspart tooltip__tooltip - The tooltip's `tooltip` part.
 * @csspart tooltip__content - The tooltip's `content` part.
 * @csspart tooltip__arrow - The tooltip's `arrow` part.
 *
 * @cssstate disabled - Applied when the slider is disabled.
 * @cssstate dragging - Applied when the slider is being dragged.
 * @cssstate focused - Applied when the slider has focus.
 * @cssstate user-valid - Applied when the slider is valid and the user has sufficiently interacted with it.
 * @cssstate user-invalid - Applied when the slider is invalid and the user has sufficiently interacted with it.
 *
 * @cssproperty [--track-size=0.75em] - The height or width of the slider's track.
 * @cssproperty [--marker-width=0.1875em] - The width of each individual marker.
 * @cssproperty [--marker-height=0.1875em] - The height of each individual marker.
 * @cssproperty [--thumb-width=1.25em] - The width of the thumb.
 * @cssproperty [--thumb-height=1.25em] - The height of the thumb.
 */
export declare class QuietSlider extends QuietFormControlElement {
    static formAssociated: boolean;
    static observeSlots: boolean;
    static styles: CSSResultGroup;
    private draggableTrack;
    private draggableThumbMin;
    private draggableThumbMax;
    private localize;
    private trackBoundingClientRect;
    private valueWhenDraggingStarted;
    private activeThumb;
    private lastTrackPosition;
    protected get focusableAnchor(): HTMLElement;
    slider: HTMLElement;
    thumb: HTMLElement;
    thumbMin: HTMLElement;
    thumbMax: HTMLElement;
    track: HTMLElement;
    tooltip: QuietTooltip;
    tooltipMin: QuietTooltip;
    tooltipMax: QuietTooltip;
    isInvalid: boolean;
    hadUserInteraction: boolean;
    wasSubmitted: boolean;
    /**
     * The slider's label. If you need to provide HTML in the label, use the `label` slot instead.
     */
    label: string;
    /**
     * The slider's description. If you need to provide HTML in the description, use the `description` slot instead.
     */
    description: string;
    /** The name of the slider. This will be submitted with the form as a name/value pair. */
    name: string;
    /** The slider's value. */
    value: number;
    /** The minimum value of a range selection. Used only when range attribute is set. */
    minValue: number;
    /** The maximum value of a range selection. Used only when range attribute is set. */
    maxValue: number;
    /** Converts the slider to a range slider with two thumbs. */
    range: boolean;
    /** Get if this is a range slider */
    get isRange(): boolean;
    /** Disables the slider. */
    disabled: boolean;
    /** Makes the slider a read-only field. */
    readonly: boolean;
    /** The orientation of the slider. */
    orientation: 'horizontal' | 'vertical';
    /** The slider's size. */
    size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    /** The starting value from which to draw the slider's fill, which is based on its current value. */
    indicatorOffset: number;
    /**
     * The form to associate this control with. If omitted, the closest containing `<form>` will be used. The value of
     * this attribute must be an ID of a form in the same document or shadow root.
     */
    form: string;
    /** The minimum value allowed. */
    min: number;
    /** The maximum value allowed. */
    max: number;
    /** The granularity the value must adhere to when incrementing and decrementing. */
    step: number;
    /** Tells the browser to focus the slider when the page loads or a dialog is shown. */
    autofocus: boolean;
    /** The distance of the tooltip from the slider's thumb. */
    tooltipDistance: number;
    /** The placement of the tooltip in reference to the slider's thumb. */
    tooltipPlacement: 'top' | 'right' | 'bottom' | 'left';
    /** Draws markers at each step along the slider. */
    withMarkers: boolean;
    /** Draws a tooltip above the thumb when the control has focus or is dragged. */
    withTooltip: boolean;
    /**
     * A custom formatting function to apply to the value. This will be shown in the tooltip and announced by screen
     * readers. Must be set with JavaScript. Property only.
     */
    valueFormatter: (value: number) => string;
    connectedCallback(): void;
    disconnectedCallback(): void;
    firstUpdated(): void;
    updated(changedProperties: PropertyValues<this>): void;
    /** @internal Called when a containing fieldset is disabled. */
    formDisabledCallback(isDisabled: boolean): void;
    /** @internal Called when the form is reset. */
    formResetCallback(): void;
    /** Clamps a number to min/max while ensuring it's a valid step interval. */
    private clampAndRoundToStep;
    /** Given a value, returns its percentage within a range of min/max. */
    private getPercentageFromValue;
    /** Converts coordinates to slider value */
    private getValueFromCoordinates;
    private handleBlur;
    private handleFocus;
    private handleHostInvalid;
    private handleKeyDown;
    private handleLabelPointerDown;
    private setValueFromCoordinates;
    private setThumbValueFromCoordinates;
    private showTooltip;
    private hideTooltip;
    private showRangeTooltips;
    private hideRangeTooltips;
    /** Updates the form value submission for range sliders */
    private updateFormValue;
    /** Sets the form control's validity */
    private updateValidity;
    /** Sets focus to the slider. */
    focus(): void;
    /** Removes focus from the slider. */
    blur(): void;
    /**
     * Decreases the slider's value by `step`. This is a programmatic change, so `input` and `change` events will not be
     * emitted when this is called.
     */
    stepDown(): void;
    /**
     * Increases the slider's value by `step`. This is a programmatic change, so `input` and `change` events will not be
     * emitted when this is called.
     */
    stepUp(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'quiet-slider': QuietSlider;
    }
}
