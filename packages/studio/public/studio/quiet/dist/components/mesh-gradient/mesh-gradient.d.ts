import type { CSSResultGroup, PropertyValues } from 'lit';
import { QuietElement } from '../../utilities/quiet-element.js';
/**
 * <quiet-mesh-gradient>
 *
 * @summary Generates beautiful mesh gradients with customizable colors and complexity.
 * @documentation https://quietui.org/docs/components/mesh-gradient
 * @status experimental
 * @since 1.0
 *
 * @slot - Content to display over the gradient.
 *
 * @csspart gradient - The gradient container element for styling the gradient layer.
 * @csspart content - The content container element for styling the content layer.
 *
 * @cssproperty [--gradient-color] - The base color for the gradient. Accepts any valid CSS color format, but does not
 *  accept custom properties, e.g. `var(--my-color)`.
 * @cssproperty [--brightness=0] - Adjusts the brightness of the gradient from -100 (darker) to +100 (lighter).
 * @cssproperty [--optimal-text-color] - A readonly custom property that maps to the optimal text color (black or white)
 *  based on the gradient's base color.
 */
export declare class QuietMeshGradient extends QuietElement {
    static styles: CSSResultGroup;
    private currentBaseColor;
    private currentBrightness;
    private gradientStyle;
    /** The number of gradient layers to generate. */
    complexity: number;
    /** A seed value for consistent gradient generation. If not provided, the gradient will be random. */
    seed: number | undefined;
    firstUpdated(): void;
    updated(changedProperties: PropertyValues<this>): void;
    /**
     * Adjusts the brightness of an HSL color using a hybrid tint/shade approach. Positive values tint the color
     * (lighten + desaturate) and negative values shade it (darken only).
     */
    private adjustBrightness;
    /** Extracts the HSL values from any CSS color format using TinyColor. */
    private colorToHsl;
    /** Detects the current base color and brightness, and regenerates the gradient if needed. */
    private detectAndGenerateGradient;
    /** Generates an array of HSL colors based on color theory, preserving the base color's characteristics. */
    private generateColors;
    /** Generates the CSS gradient styles. */
    private generateGradient;
    /** Gets the current value of `--gradient-color` from computed styles. */
    private getBaseColor;
    /** Gets the current value of `--brightness` from computed styles. */
    private getBrightness;
    /** Determines the optimal text color (black or white) based on the background color. */
    private getOptimalTextColor;
    /** Calculates gradient positions, either randomly or based on a seed. */
    private getPosition;
    /**
     * Handles the `transitionend` event to detect when `--gradient-color` or `--brightness` changes. The 1ms transitions
     * on the `color` and `z-index` properties trigger this.
     */
    private handleColorTransition;
    /** Formats an HSL object as a CSS HSL string. */
    private hslToString;
    /** Creates a random HSL color for when no base color is provided. */
    private randomHsl;
    /** Regenerates the gradient. Useful for creating new random gradients programmatically. */
    regenerate(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'quiet-mesh-gradient': QuietMeshGradient;
    }
}
