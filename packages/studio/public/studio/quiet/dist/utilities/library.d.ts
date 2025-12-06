/** Sets the library's asset path to the specified directory or URL. */
export declare function setLibraryPath(path: string): void;
/**
 * Gets the library's assets path.
 *
 * The asset path is used to load assets such as icons and images. By default, Quiet will look for a script ending in
 * "quiet.js" and guess the asset path relative to the script's location. This "just works" for most users but, if
 * you're bundling the library, you'll need to copy the `assets` folder into your app and point this to that location.
 *
 * The easiest way is to provide a `data-quiet` attribute on any element in the DOM.
 *
 * @example
 *
 *  <html data-quiet="/path/to/assets">
 *
 * @param subpath - An optional path to append to the base path.
 */
export declare function getLibraryPath(subpath?: string): string;
