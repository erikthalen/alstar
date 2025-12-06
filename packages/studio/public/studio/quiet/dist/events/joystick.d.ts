/**
 * Emitted when the joystick is about to start being interacted with. Calling `event.preventDefault` will prevent the
 * joystick from activating.
 */
export declare class QuietJoystickBeforeStartEvent extends Event {
    readonly detail: QuietJoystickEventDetails;
    constructor(detail: QuietJoystickEventDetails, options?: {
        cancelable: boolean;
    });
}
/**
 * Emitted after the joystick has started being interacted with.
 */
export declare class QuietJoystickStartEvent extends Event {
    readonly detail: QuietJoystickEventDetails;
    constructor(detail: QuietJoystickEventDetails);
}
/**
 * Emitted continuously while the joystick is being moved.
 */
export declare class QuietJoystickMoveEvent extends Event {
    readonly detail: QuietJoystickEventDetails;
    constructor(detail: QuietJoystickEventDetails);
}
/**
 * Emitted when the joystick is about to stop being interacted with. Calling `event.preventDefault` will prevent the
 * joystick from stopping.
 */
export declare class QuietJoystickBeforeStopEvent extends Event {
    readonly detail: QuietJoystickEventDetails;
    constructor(detail: QuietJoystickEventDetails, options?: {
        cancelable: boolean;
    });
}
/**
 * Emitted after the joystick has stopped being interacted with.
 */
export declare class QuietJoystickStopEvent extends Event {
    readonly detail: QuietJoystickEventDetails;
    constructor(detail: QuietJoystickEventDetails);
}
/**
 * Interface defining the details payload for joystick events.
 */
interface QuietJoystickEventDetails {
    /** The angle of the joystick in degrees (0° at top, clockwise). */
    angle: number;
    /** The normalized distance from the center (0-1). */
    distance: number;
    /** The normalized x-coordinate (-1 to 1). */
    x: number;
    /** The normalized y-coordinate (-1 to 1). */
    y: number;
}
declare global {
    interface GlobalEventHandlersEventMap {
        'quiet-joystick-before-start': QuietJoystickBeforeStartEvent;
        'quiet-joystick-start': QuietJoystickStartEvent;
        'quiet-joystick-move': QuietJoystickMoveEvent;
        'quiet-joystick-before-stop': QuietJoystickBeforeStopEvent;
        'quiet-joystick-stop': QuietJoystickStopEvent;
    }
}
export {};
