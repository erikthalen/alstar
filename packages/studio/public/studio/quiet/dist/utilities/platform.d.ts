export type Platform = 'mac' | 'windows' | 'linux' | 'other';
/** Specific sniff for iOS devices */
export declare const IS_IOS: boolean;
/**
 * Detects the current platform using modern APIs with fallbacks. Yes, this is a browser sniff. No, in most cases it
 * shouldn't be used. Currently, the use case is for displaying platform-specific keyboard shortcuts through the
 * `<quiet-hotkey>` component which, to the best of my knowledge, can't be reliably feature-detected.
 */
export declare function detectPlatform(): Platform;
