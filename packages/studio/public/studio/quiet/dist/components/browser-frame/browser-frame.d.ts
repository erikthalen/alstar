import type { CSSResultGroup } from 'lit';
import { QuietElement } from '../../utilities/quiet-element.js';
/**
 * <quiet-browser-frame>
 *
 * @summary An on-page browser UI that displays arbitrary content inside of it.
 * @documentation https://quietui.org/docs/components/browser-frame
 * @status stable
 * @since 1.0
 *
 * @slot - The content to display in the browser window body.
 * @slot icon - An optional icon to display at the start of the address bar.
 *
 * @csspart header - The browser frame's header that contains controls and address bar.
 * @csspart controls - The browser frame's control buttons container (red, yellow, green dots or Windows controls).
 * @csspart address-bar - The browser frame's address bar. Either an `<a>` or a `<span>` depending on `href`.
 * @csspart body - The browser frame's body, where content shows.
 *
 * @cssproperty --address-background-color - Background color for the address bar.
 * @cssproperty --address-color - Text color for the address bar.
 * @cssproperty --border-color - Border color for the browser frame.
 * @cssproperty --body-padding - Padding to apply to the browser frame's body.
 * @cssproperty --header-background-color - Background color for the header.
 * @cssproperty --header-height - Height of the browser frame header.
 * @cssproperty --windows-control-color - The color for Windows-style control buttons.
 */
export declare class QuietBrowserFrame extends QuietElement {
    static styles: CSSResultGroup;
    /** The label to display in the address bar. This will override the domain that shows when using `href`. */
    label: string;
    /**
     * When set, the address bar will be wrapped by a link that goes to this URL. A human-readable domain name will be
     * shown in the address bar unless `label` is also provided.
     */
    href: string;
    /** Opens the link in the specified target. Only works when `href` is set. */
    target: '_blank' | '_parent' | '_self' | '_top' | undefined;
    /**
     * Sets the link's `rel` attribute.  Only works when `href` is set. When linking to an external domain, you should
     * probably set this to `noreferrer noopener`.
     */
    rel?: string;
    /** Sets the link's `download` attribute, causing the linked file to be downloaded. Only works when `href` is set. */
    download?: string;
    /**
     * When set, removes all padding from the body element and removes border radius from slotted media. Useful for
     * displaying images and videos that span edge-to-edge in the browser frame.
     */
    flush: boolean;
    /**
     * Sets the window control style to use. 'mac' uses the traffic light controls, 'windows' uses Windows 11-style
     * controls, and 'auto' will use the most appropriate style based on the user's operating system.
     */
    platform: 'mac' | 'windows' | 'auto';
    /** Extracts a clean domain from a URL string */
    private getDomain;
    /** Detects the user's platform. Defaults to Mac for non-Windows devices. */
    private getPlatform;
    private renderMacControls;
    private renderWindowsControls;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'quiet-browser-frame': QuietBrowserFrame;
    }
}
