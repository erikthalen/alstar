import type { QuietIcon } from '../components/icon/icon.js';
export type ResolveFunction = (name: string, family: string) => string;
export type MutateFunction = (svg: SVGElement) => void;
export interface Library {
    resolve: ResolveFunction;
    mutate?: MutateFunction;
}
/** Registers a new icon library. */
export declare function registerIconLibrary(name: string, library: Library): void;
/** Removes a previously registered icon library. */
export declare function unregisterIconLibrary(name: string): void;
/** Gets a registered icon library. */
export declare function getLibrary(name: string): Library | undefined;
/** Call this when an icon is connected to make it reactive to changes to icon libraries. */
export declare function connectIcon(el: QuietIcon): void;
/** Call this when an icon is disconnected and no longer needs to be reactive. */
export declare function disconnectIcon(el: QuietIcon): void;
/** Gets an array of all icons that are currently connected. */
export declare function getObservedIcons(): QuietIcon[];
/**
 * Updates all connected icons from the specified library. Call this after registering, unregistering, or making changes
 * to an icon library to make sure icons refresh.
 */
export declare function updateConnectedIcons(): Promise<void[]>;
