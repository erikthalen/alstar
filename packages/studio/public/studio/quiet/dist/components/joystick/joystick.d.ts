import type { CSSResultGroup, PropertyValues } from 'lit';
import { QuietElement } from '../../utilities/quiet-element.js';
/**
 * A custom web component that renders a joystick controllable via touch or mouse.
 *
 * @summary A directional joystick that can be controlled via touch or mouse.
 * @documentation https://quietui.org/docs/components/joystick
 * @status stable
 * @since 1.0
 *
 * @slot thumb - An optional icon to display inside the thumb.
 *
 * @event quiet-joystick-before-start - Emitted before interaction begins. Calling `event.preventDefault()` will cancel
 *  activation.
 * @event quiet-joystick-start - Emitted when movement begins.
 * @event quiet-joystick-move - Emitted continuously during movement. Consider debouncing for performance-sensitive
 *  applications.
 * @event quiet-joystick-before-stop - Emitted before interaction ends. Calling `event.preventDefault()` will cancel
 *  deactivation.
 * @event quiet-joystick-stop - Emitted when movement ends.
 *
 * @csspart thumb - The movable thumb within the joystick.
 *
 * @cssproperty [--size=7rem] - The overall width and height of the joystick.
 * @cssproperty [--thumb-size=2.5rem] - The width and height of the movable thumb.
 *
 * @cssstate disabled - Applied when the joystick is disabled.
 * @cssstate dragging - Applied when the joystick is being dragged.
 *
 * @cssproperty [--distance=0] - A readonly custom property that represents the normalized distance (0-1) of the thumb
 *  from the center, updated dynamically during movement. You can use this to change the joystick's appearance as the
 *  user moves the thumb.
 */
export declare class QuietJoystick extends QuietElement {
    static styles: CSSResultGroup;
    thumbEl: HTMLDivElement;
    /**
     * An accessible label for the joystick. This won't be visible, but it will be read to assistive devices so you should
     * always include one.
     */
    label: string;
    /** Indicates whether the joystick is disabled. When `true`, the joystick does not respond to mouse or touch input. */
    disabled: boolean;
    /** The operational mode of the joystick. 'normal' snaps back to center on release, 'sticky' retains its last position. */
    mode: 'normal' | 'sticky';
    /** The normalized distance (0-1) from the center below which no movement is registered. */
    get deadZone(): number;
    set deadZone(value: number);
    private _deadZone;
    private isDragging;
    private centerX;
    private centerY;
    private lastPosData;
    private maxDistance;
    private resizeObserver;
    connectedCallback(): void;
    disconnectedCallback(): void;
    firstUpdated(): void;
    updated(changedProperties: PropertyValues): void;
    private updateDimensions;
    private calculatePosition;
    private dispatchJoystickEvent;
    private handleStart;
    private handleMove;
    private handleEnd;
    private getPositionFromEvent;
    private updateThumbPosition;
    private resetThumbPosition;
    private setupListeners;
    private cleanupListeners;
    /**
     * Programmatically resets the joystick's position. Useful for resetting it in sticky mode, e.g. when a game restarts.
     */
    reset(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'quiet-joystick': QuietJoystick;
    }
}
