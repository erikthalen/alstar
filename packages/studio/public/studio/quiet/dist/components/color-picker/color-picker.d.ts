import type { CSSResultGroup, PropertyValues } from 'lit';
import { QuietElement } from '../../utilities/quiet-element.js';
import '../button/button.js';
import '../copy/copy.js';
import '../slider/slider.js';
import '../text-field/text-field.js';
/**
 * <quiet-color-picker>
 *
 * @summary Provides a customizable interface for selecting a color.
 * @documentation https://quietui.org/docs/components/color-picker
 * @status stable
 * @since 1.0
 *
 * @dependency quiet-button
 * @dependency quiet-copy
 * @dependency quiet-slider
 * @dependency quiet-text-field
 *
 * @event quiet-change - Emitted when the user commits changes to the color picker's value.
 * @event quiet-input - Emitted when the color picker receives input. This can fire very frequently during dragging, so
 *  avoid doing expensive operations in the handler. If you don't live feedback, use the `quiet-change` event instead.
 *
 * @csspart picker - The element the wraps the color picker.
 * @csspart color-slider - The 2d color slider.
 * @csspart color-slider-thumb - The color slider's thumb.
 * @csspart controls - The container that wraps the sliders and preview.
 * @csspart sliders - The container that wraps the hue and alpha slider.
 * @csspart hue-slider - The slider that controls the color's hue.
 * @csspart hue-slider__label - The hue slider's `label` part.
 * @csspart hue-slider__description - The hue slider's `description` part.
 * @csspart hue-slider__slider - The hue slider's `slider` part.
 * @csspart hue-slider__track - The hue slider's `track` part.
 * @csspart hue-slider__indicator - The hue slider's `indicator` part.
 * @csspart hue-slider__thumb - The hue slider's `thumb` part.
 * @csspart alpha-slider - The slider that controls the color's opacity.
 * @csspart alpha-slider__label - The alpha slider's `label` part.
 * @csspart alpha-slider__description - The alpha slider's `description` part.
 * @csspart alpha-slider__slider - The alpha slider's `slider` part.
 * @csspart alpha-slider__track - The alpha slider's `track` part.
 * @csspart alpha-slider__indicator - The alpha slider's `indicator` part.
 * @csspart alpha-slider__thumb - The alpha slider's `thumb` part.
 * @csspart eye-dropper-button - The eye dropper button, a `<quiet-button>` element.
 * @csspart preview-button - The button that shows a preview of the current color, a `<quiet-button>` element.
 * @csspart color-input - The color input text field, a `<quiet-text-field>` element.
 * @csspart color-input__visual-box - The element that wraps the internal text box.
 * @csspart color-input__text-box - The internal text box, an `<input>` element.
 * @csspart swatches - The element that contains swatches.
 * @csspart swatch - Each individual swatch.
 *
 * @cssstate disabled - Applied when the color picker is disabled.
 * @cssstate focused - Applied when the color picker has focus.
 */
export declare class QuietColorPicker extends QuietElement {
    static observeSlots: boolean;
    static styles: CSSResultGroup;
    private colorSliderBoundingClientRect;
    private draggableThumb;
    private isDragging;
    private localize;
    private valueWhenDraggingStarted;
    private wasValueSetInternally;
    protected get focusableAnchor(): HTMLElement;
    private colorSlider;
    private colorSliderThumb;
    h: number;
    s: number;
    v: number;
    a: number;
    colorSliderThumbX: number;
    colorSliderThumbY: number;
    hasFocus: boolean;
    isChangingV: boolean;
    isChangingS: boolean;
    inputIsFocused: boolean;
    displayValue: string;
    hadUserInteraction: boolean;
    /**
     * The color picker's label. This won't be visible, but it will be read to assistive devices so you should always
     * include one.
     */
    label: string;
    /** The color picker's value. */
    value: string;
    /** The format to use for the color's value. */
    format: 'hex' | 'rgb' | 'hsl';
    /** Disables the color picker. */
    disabled: boolean;
    /** The color picker's size. */
    size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    /**
     * One or more semicolon-delimited colors (any valid CSS color format or name) to show as preset swatches below the
     * color picker.
     */
    swatches: string;
    /** Enables the alpha slider. */
    withAlpha: boolean;
    /**
     * Enables the eye dropper button. Only available in
     * [supportive browsers](https://caniuse.com/?search=eyedropper%20API).
     */
    withEyeDropper: boolean;
    /** Enables the color value text field. */
    withInput: boolean;
    connectedCallback(): void;
    disconnectedCallback(): void;
    firstUpdated(): void;
    updated(changedProperties: PropertyValues<this>): void;
    private formatHue;
    private formatAlpha;
    private handleColorInputBlur;
    private handleColorInputFocus;
    private handleColorInputInput;
    private handleColorSliderBlur;
    private handleColorSliderThumbKeyDown;
    private handleEyeDropperClick;
    private handleFocusIn;
    private handleFocusOut;
    private handleHueSliderInput;
    private handleAlphaSliderInput;
    /** Sets the color when a swatch is clicked. */
    private handleSwatchClick;
    /**
     * Parses an arbitrary color string and sets the corresponding HSVA values.
     */
    private setColorFromString;
    /** Sets the S and V value based on the pointer's x and y coordinates. */
    private setColorFromCoordinates;
    /** Prevent custom events that bubble from propagating outside of the component */
    private stopPropagation;
    /** Updates the color slider's thumb position based on S and V. */
    private updateColorSliderThumbPosition;
    /** Sets focus to the color picker. */
    focus(): void;
    /** Removes focus from the color picker. */
    blur(): void;
    /**
     * Gets the current value as a hex string, a hex8 string, an RGB object, or an HSL object. RBG objects have `r`, `g`,
     * and `b` properties ranging from 0–255 and an `a` property (representing opacity) that ranges from 0-1. HSL objects
     * have an `h` property ranging from `0-359` and `s`, `l`, and `a` properties ranging from 0–1.
     */
    getValueAs(format?: 'hex' | 'hex8' | 'hsl' | 'rgb'): string | import("@ctrl/tinycolor").Numberify<import("@ctrl/tinycolor").HSLA> | import("@ctrl/tinycolor").Numberify<import("@ctrl/tinycolor").RGBA>;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'quiet-color-picker': QuietColorPicker;
    }
}
