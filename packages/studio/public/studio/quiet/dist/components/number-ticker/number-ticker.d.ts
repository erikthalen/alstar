import type { CSSResultGroup, PropertyValues } from 'lit';
import { QuietElement } from '../../utilities/quiet-element.js';
/**
 * `<quiet-number-ticker>`
 *
 * @summary Animates a number from a starting value to an ending value.
 * @documentation https://quietui.com/docs/components/number-ticker
 * @status stable
 * @since 1.0
 *
 * @event quiet-animation-complete - Emitted when the counting animation has completed.
 */
export declare class QuietNumberTicker extends QuietElement {
    static styles: CSSResultGroup;
    private animationFrame;
    private animationTimeout;
    private localize;
    private observer;
    private startTime;
    private currentValue;
    private isAnimating;
    /** The starting value for the count. */
    startValue: number;
    /** The target value to count to. */
    endValue: number;
    /** Duration of the animation in milliseconds. */
    duration: number;
    /** Delay in milliseconds before counting starts. */
    delay: number;
    /** Number of decimal places to display. */
    decimalPlaces: number;
    /** Whether to group numbers, e.g. with a thousands separator. */
    grouping: 'always' | 'never' | 'auto' | 'min2';
    /** Whether to start the animation when the component comes into view. */
    startOnView: boolean;
    /**
     * By default, no animation will occur when the user indicates a preference for reduced motion. Use this attribute to
     * override this behavior when necessary.
     */
    ignoreReducedMotion: boolean;
    /**
     * A custom formatting function to apply to the number. When set, `decimal-places` and `grouping` will be ignored.
     * Property only.
     */
    valueFormatter: (value: number) => string;
    connectedCallback(): void;
    disconnectedCallback(): void;
    updated(changedProperties: PropertyValues<this>): void;
    private setupIntersectionObserver;
    private startAnimation;
    private startReducedMotionAnimation;
    private easeOutExpo;
    private tick;
    private stopAnimation;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'quiet-number-ticker': QuietNumberTicker;
    }
}
