/**
 * Starts the autoloader and registers new Quiet elements as they appear in the DOM.
 */
export declare function startLoader(): void;
/**
 * Stops the autoloader. Elements that have already been loaded will remain loaded.
 */
export declare function stopLoader(): void;
/**
 * Checks a node for undefined elements and attempts to register them.
 */
export declare function discoverElements(root: Element | ShadowRoot): Promise<void>;
/**
 * Many multi-page applications (MPAs) use Hotwire: Turbo to provide a SPA-like experience for users. When visiting
 * links, Turbo intercepts the click, fetches the new page, and updates metadata and content without redirecting,
 * resulting in a buttery smooth transition when going from one page to another.
 *
 * However, when you use Turbo with Quiet's autoloader, you may see FOUCE when visiting new pages for the first time.
 * This is because Turbo renders the new page and _then_ the autoloader fetches unregistered components.
 *
 * To solve that, this function adds a listener that hooks into Turbo's `turbo:before-render` event and registers all
 * components before the new page is rendered, effectively eliminating FOUCE for page-to-page navigation.
 *
 * The function comes with a configurable timeout to prevent issues with errors or slow networks. For most use cases,
 * the default value of 2000ms is optimal.
 */
export declare function preventTurboFouce(timeout?: number): void;
