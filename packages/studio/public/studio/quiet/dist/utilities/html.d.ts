/** Escapes HTML special characters in a string using the browser's built-in HTML escaping via textContent. */
export declare function escapeHtml(html: string): string;
/** Returns the "inner HTML" of a slot element. */
export declare function getSlotHtml(slot: HTMLSlotElement): string;
/** Returns the "text content" of a slot element. */
export declare function getSlotText(slot: HTMLSlotElement | undefined | null): string;
