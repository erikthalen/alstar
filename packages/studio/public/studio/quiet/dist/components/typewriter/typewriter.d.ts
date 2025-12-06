import type { CSSResultGroup, PropertyValues } from 'lit';
import { QuietElement } from '../../utilities/quiet-element.js';
/**
 * `<quiet-typewriter>`
 *
 * @summary Simulates a natural typing effect with customizable speed, delay, and looping options.
 * @documentation https://quietui.com/docs/components/typewriter
 * @status stable
 * @since 1.0
 *
 * @event quiet-animation-complete - Emitted when the typing animation has completed.
 *
 * @cssproperty [--cursor-color=currentColor] - The color of the cursor during animation when `with-cursor` is enabled.
 * @cssproperty [--cursor-width=1.5px] - The width of the cursor during animation when `with-cursor` is enabled.
 *
 * @csspart cursor - The cursor, a `<span>` element with a styled border.
 */
export declare class QuietTypewriter extends QuietElement {
    static styles: CSSResultGroup;
    private animationTimeout;
    private observer;
    /** The text to type out. Multiple lines can be separated by the delimiter. */
    text: string;
    /** The delimiter used to separate multiple lines of text. */
    delimiter: string;
    /** The average speed in milliseconds to wait between typing each character. */
    speed: number;
    /** Delay in milliseconds before the animation starts. */
    delay: number;
    /** Whether to start the animation when the component comes into view. */
    startOnView: boolean;
    /** Whether to show a blinking cursor during animation. */
    withCursor: boolean;
    /** Whether to loop the animation with a pause and backspace effect. */
    loop: boolean;
    /** Duration in milliseconds to pause before backspacing when looping. */
    loopDelay: number;
    /** Whether to pause the typewriter animation. */
    pause: boolean;
    /**
     * By default, no animation will occur when the user indicates a preference for reduced motion. Use this attribute to
     * override this behavior when necessary.
     */
    ignoreReducedMotion: boolean;
    private charIndex;
    private currentLineIndex;
    private currentText;
    private isAnimating;
    private isErasing;
    private lines;
    connectedCallback(): void;
    disconnectedCallback(): void;
    updated(changedProperties: PropertyValues<this>): Promise<void>;
    private setupIntersectionObserver;
    /** Gets the current line of text to type. */
    private getCurrentLine;
    /** Starts the typewriter animation. */
    private startAnimation;
    /** Types the next character in the animation. */
    private typeNextChar;
    /** Starts the erase animation. */
    private startEraseAnimation;
    /** Erases the next character in the animation. */
    private eraseNextChar;
    /** Resets the animation state to the beginning. */
    private resetState;
    /** Restarts the animation from the beginning. */
    restart(): void;
    /** Stops the current animation by clearing the timeout. */
    private stopAnimation;
    /** Resumes the animation based on the current state. */
    private resumeAnimation;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'quiet-typewriter': QuietTypewriter;
    }
}
