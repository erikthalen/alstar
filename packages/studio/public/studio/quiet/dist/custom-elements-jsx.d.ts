
import type { QuietAccordionItem } from "./components/accordion-item/accordion-item.ts";
import type { QuietAccordion } from "./components/accordion/accordion.ts";
import type { QuietBreadcrumb } from "./components/breadcrumb/breadcrumb.ts";
import type { QuietAvatar } from "./components/avatar/avatar.ts";
import type { QuietBadge } from "./components/badge/badge.ts";
import type { QuietBreadcrumbItem } from "./components/breadcrumb-item/breadcrumb-item.ts";
import type { QuietBrowserFrame } from "./components/browser-frame/browser-frame.ts";
import type { QuietButtonGroup } from "./components/button-group/button-group.ts";
import type { QuietButton } from "./components/button/button.ts";
import type { QuietBytes } from "./components/bytes/bytes.ts";
import type { QuietCallout } from "./components/callout/callout.ts";
import type { QuietCard } from "./components/card/card.ts";
import type { QuietCarousel } from "./components/carousel/carousel.ts";
import type { QuietCarouselItem } from "./components/carousel-item/carousel-item.ts";
import type { QuietCheckbox } from "./components/checkbox/checkbox.ts";
import type { QuietColorInput } from "./components/color-input/color-input.ts";
import type { QuietCheckboxGroup } from "./components/checkbox-group/checkbox-group.ts";
import type { QuietColorPicker } from "./components/color-picker/color-picker.ts";
import type { QuietCombobox } from "./components/combobox/combobox.ts";
import type { QuietComboboxItem } from "./components/combobox-item/combobox-item.ts";
import type { QuietComparison } from "./components/comparison/comparison.ts";
import type { QuietCopy } from "./components/copy/copy.ts";
import type { QuietCountdown } from "./components/countdown/countdown.ts";
import type { QuietDate } from "./components/date/date.ts";
import type { QuietDialog } from "./components/dialog/dialog.ts";
import type { QuietDivider } from "./components/divider/divider.ts";
import type { QuietDropdownItem } from "./components/dropdown-item/dropdown-item.ts";
import type { QuietFileInput } from "./components/file-input/file-input.ts";
import type { QuietDropdown } from "./components/dropdown/dropdown.ts";
import type { QuietExpander } from "./components/expander/expander.ts";
import type { QuietEmptyState } from "./components/empty-state/empty-state.ts";
import type { QuietFitText } from "./components/fit-text/fit-text.ts";
import type { QuietFlipCard } from "./components/flip-card/flip-card.ts";
import type { QuietHotkey } from "./components/hotkey/hotkey.ts";
import type { QuietInclude } from "./components/include/include.ts";
import type { QuietIcon } from "./components/icon/icon.ts";
import type { QuietInfiniteScroller } from "./components/infinite-scroller/infinite-scroller.ts";
import type { QuietIntersectionObserver } from "./components/intersection-observer/intersection-observer.ts";
import type { QuietJoystick } from "./components/joystick/joystick.ts";
import type { QuietListboxItem } from "./components/listbox-item/listbox-item.ts";
import type { QuietListbox } from "./components/listbox/listbox.ts";
import type { QuietLoremIpsum } from "./components/lorem-ipsum/lorem-ipsum.ts";
import type { QuietMutationObserver } from "./components/mutation-observer/mutation-observer.ts";
import type { QuietNavicon } from "./components/navicon/navicon.ts";
import type { QuietMeshGradient } from "./components/mesh-gradient/mesh-gradient.ts";
import type { QuietNumberField } from "./components/number-field/number-field.ts";
import type { QuietNumberTicker } from "./components/number-ticker/number-ticker.ts";
import type { QuietPagination } from "./components/pagination/pagination.ts";
import type { QuietNumber } from "./components/number/number.ts";
import type { QuietPasscode } from "./components/passcode/passcode.ts";
import type { QuietPopover } from "./components/popover/popover.ts";
import type { QuietProgress } from "./components/progress/progress.ts";
import type { QuietRadio } from "./components/radio/radio.ts";
import type { QuietRadioItem } from "./components/radio-item/radio-item.ts";
import type { QuietRandomContent } from "./components/random-content/random-content.ts";
import type { QuietQr } from "./components/qr/qr.ts";
import type { QuietRating } from "./components/rating/rating.ts";
import type { QuietRelativeTime } from "./components/relative-time/relative-time.ts";
import type { QuietResizeObserver } from "./components/resize-observer/resize-observer.ts";
import type { QuietSearchList } from "./components/search-list/search-list.ts";
import type { QuietScroller } from "./components/scroller/scroller.ts";
import type { QuietShare } from "./components/share/share.ts";
import type { QuietSlideActivator } from "./components/slide-activator/slide-activator.ts";
import type { QuietSelect } from "./components/select/select.ts";
import type { QuietSlider } from "./components/slider/slider.ts";
import type { QuietSparkline } from "./components/sparkline/sparkline.ts";
import type { QuietSpinner } from "./components/spinner/spinner.ts";
import type { QuietSpoiler } from "./components/spoiler/spoiler.ts";
import type { QuietSplitter } from "./components/splitter/splitter.ts";
import type { QuietStamp } from "./components/stamp/stamp.ts";
import type { QuietSwitch } from "./components/switch/switch.ts";
import type { QuietTab } from "./components/tab/tab.ts";
import type { QuietTabList } from "./components/tab-list/tab-list.ts";
import type { QuietTabPanel } from "./components/tab-panel/tab-panel.ts";
import type { QuietTextArea } from "./components/text-area/text-area.ts";
import type { QuietTextMask } from "./components/text-mask/text-mask.ts";
import type { QuietTextField } from "./components/text-field/text-field.ts";
import type { QuietTimedContent } from "./components/timed-content/timed-content.ts";
import type { QuietToast } from "./components/toast/toast.ts";
import type { QuietToastItem } from "./components/toast-item/toast-item.ts";
import type { QuietToggleIcon } from "./components/toggle-icon/toggle-icon.ts";
import type { QuietToggleTag } from "./components/toggle-tag/toggle-tag.ts";
import type { QuietToolbar } from "./components/toolbar/toolbar.ts";
import type { QuietTooltip } from "./components/tooltip/tooltip.ts";
import type { QuietTypewriter } from "./components/typewriter/typewriter.ts";
import type { QuietVeil } from "./components/veil/veil.ts";
import type { QuietTransitionGroup } from "./components/transition-group/transition-group.ts";
import type { QuietZoomableFrame } from "./components/zoomable-frame/zoomable-frame.ts";

/**
 * This type can be used to create scoped tags for your components.
 * 
 * Usage:
 * 
 * ```ts
 * import type { ScopedElements } from "path/to/library/jsx-integration";
 * 
 * declare module "my-library" {
 *   namespace JSX {
 *     interface IntrinsicElements
 *       extends ScopedElements<'test-', ''> {}
 *   }
 * }
 * ```
 * 
 * @deprecated Runtime scoped elements result in duplicate types and can confusing for developers. It is recommended to use the `prefix` and `suffix` options to generate new types instead.
 */
export type ScopedElements<
  Prefix extends string = "",
  Suffix extends string = ""
> = {
  [Key in keyof CustomElements as `${Prefix}${Key}${Suffix}`]: CustomElements[Key];
};

type BaseProps<T extends HTMLElement> = {

  /** Content added between the opening and closing tags of the element */
  children?: any;
  /** Used for declaratively styling one or more elements using CSS (Cascading Stylesheets) */
  class?: string;
  /** Used for declaratively styling one or more elements using CSS (Cascading Stylesheets) */
  className?: string;
  /** Takes an object where the key is the class name(s) and the value is a boolean expression. When true, the class is applied, and when false, it is removed. */
  classList?: Record<string, boolean | undefined>;
  /** Specifies the text direction of the element. */
  dir?: "ltr" | "rtl";
  /** Contains a space-separated list of the part names of the element that should be exposed on the host element. */
  exportparts?: string;
  /** For <label> and <output>, lets you associate the label with some control. */
  htmlFor?: string;
  /** Specifies whether the element should be hidden. */
  hidden?: boolean | string;
  /** A unique identifier for the element. */
  id?: string;
  /** Keys tell React which array item each component corresponds to */
  key?: string | number;
  /** Specifies the language of the element. */
  lang?: string;
  /** Contains a space-separated list of the part names of the element. Part names allows CSS to select and style specific elements in a shadow tree via the ::part pseudo-element. */
  part?: string;
  /** Use the ref attribute with a variable to assign a DOM element to the variable once the element is rendered. */
  ref?: T | ((e: T) => void);
  /** Adds a reference for a custom element slot */
  slot?: string;
  /** Prop for setting inline styles */
  style?: Record<string, string | number>;
  /** Overrides the default Tab button behavior. Avoid using values other than -1 and 0. */
  tabIndex?: number;
  /** Specifies the tooltip text for the element. */
  title?: string;
  /** Passing 'no' excludes the element content from being translated. */
  translate?: "yes" | "no";
  /** The popover global attribute is used to designate an element as a popover element. */
  popover?: "auto" | "hint" | "manual";
  /** Turns an element element into a popover control button; takes the ID of the popover element to control as its value. */
  popovertarget?: "top" | "bottom" | "left" | "right" | "auto";
  /** Specifies the action to be performed on a popover element being controlled by a control element. */
  popovertargetaction?: "show" | "hide" | "toggle";

} ;

type BaseEvents = {


};



export type QuietAccordionItemProps = {
  /**  */
  "expanded"?: QuietAccordionItem['expanded'];
  /** The accordion item's label. If you need to provide HTML in the label, use the `label` slot instead. */
  "label"?: QuietAccordionItem['label'];
  /** The accordion item's appearance. This will be set automatically by the accordion controller. */
  "appearance"?: QuietAccordionItem['appearance'];
  /** The position of the expand/collapse icon. This will be set automatically by the accordion controller. */
  "icon-placement"?: QuietAccordionItem['iconPlacement'];
  /** The position of the expand/collapse icon. This will be set automatically by the accordion controller. */
  "iconPlacement"?: QuietAccordionItem['iconPlacement'];
  /** Disables the accordion item. */
  "disabled"?: QuietAccordionItem['disabled'];
  /**  */
  "body"?: QuietAccordionItem['body'];
  /**  */
  "content"?: QuietAccordionItem['content'];
  /**  */
  "header"?: QuietAccordionItem['header'];


}


export type QuietAccordionProps = {
  /** When set, selecting an accordion item will automatically collapse the others. */
  "auto-collapse"?: QuietAccordion['autoCollapse'];
  /** When set, selecting an accordion item will automatically collapse the others. */
  "autoCollapse"?: QuietAccordion['autoCollapse'];
  /** Determines the accordion's appearance. */
  "appearance"?: QuietAccordion['appearance'];
  /** Determines which side of the accordion item the expand/collapse icon shows. */
  "icon-placement"?: QuietAccordion['iconPlacement'];
  /** Determines which side of the accordion item the expand/collapse icon shows. */
  "iconPlacement"?: QuietAccordion['iconPlacement'];

  /** Emitted when an accordion item is instructed to expand but before it is shown. Calling `event.preventDefault()` will prevent the item from expanding. `event.detail.item` will contain the expanding item. */
  "onquiet-before-expand"?: (e: CustomEvent<never>) => void;
  /** Emitted after an accordion item has been expanded. `event.detail.item` will contain the expanded item. */
  "onquiet-expand"?: (e: CustomEvent<never>) => void;
  /** Emitted when an accordion item is instructed to collapse but before it is hidden. Calling `event.preventDefault()` will prevent the item from collapsing. `event.detail.item` will contain the collapsing item. */
  "onquiet-before-collapse"?: (e: CustomEvent<never>) => void;
  /** Emitted after an accordion item has been collapsed. `event.detail.item` will contain the collapsed item. */
  "onquiet-collapse"?: (e: CustomEvent<never>) => void;
}


export type QuietBreadcrumbProps = {


}


export type QuietAvatarProps = {
  /** An accessible label for the avatar. This won't be visible, but it will be read to assistive devices so you should
always include one. */
  "label"?: QuietAvatar['label'];
  /** A string of characters to display in the avatar when an image isn't available or fails to load. Up to five
characters are supported. */
  "characters"?: QuietAvatar['characters'];
  /** The URL of an image to display in the avatar. Non-square images will be clipped to fit. */
  "image"?: QuietAvatar['image'];
  /**  */
  "hasImageLoaded"?: QuietAvatar['hasImageLoaded'];


}


export type QuietBadgeProps = {
  /** The type of badge to draw. */
  "variant"?: QuietBadge['variant'];
  /** Determines the badges's appearance. */
  "appearance"?: QuietBadge['appearance'];
  /** Draws attention to the badge using an animation. */
  "attention"?: QuietBadge['attention'];


}


export type QuietBreadcrumbItemProps = {
  /** Indicates that this item is the current page or view. */
  "current"?: QuietBreadcrumbItem['current'];
  /** The URL the breadcrumb item should point to. If omitted, the breadcrumb item will be drawn as a `<span>` instead of
a link, enabling alternate content such as dropdowns. */
  "href"?: QuietBreadcrumbItem['href'];
  /** Opens the link in the specified target. */
  "target"?: QuietBreadcrumbItem['target'];
  /** Sets the link's `rel` attribute. Note that the default value is `noreferrer noopener`, meaning you might need to
set it to an empty string if you're also using `target`. */
  "rel"?: QuietBreadcrumbItem['rel'];


}


export type QuietBrowserFrameProps = {
  /** The label to display in the address bar. This will override the domain that shows when using `href`. */
  "label"?: QuietBrowserFrame['label'];
  /** When set, the address bar will be wrapped by a link that goes to this URL. A human-readable domain name will be
shown in the address bar unless `label` is also provided. */
  "href"?: QuietBrowserFrame['href'];
  /** Opens the link in the specified target. Only works when `href` is set. */
  "target"?: QuietBrowserFrame['target'];
  /** Sets the link's `rel` attribute.  Only works when `href` is set. When linking to an external domain, you should
probably set this to `noreferrer noopener`. */
  "rel"?: QuietBrowserFrame['rel'];
  /** Sets the link's `download` attribute, causing the linked file to be downloaded. Only works when `href` is set. */
  "download"?: QuietBrowserFrame['download'];
  /** When set, removes all padding from the body element and removes border radius from slotted media. Useful for
displaying images and videos that span edge-to-edge in the browser frame. */
  "flush"?: QuietBrowserFrame['flush'];
  /** Sets the window control style to use. 'mac' uses the traffic light controls, 'windows' uses Windows 11-style
controls, and 'auto' will use the most appropriate style based on the user's operating system. */
  "platform"?: QuietBrowserFrame['platform'];


}


export type QuietButtonGroupProps = {
  /** An accessible label for the tab list. This won't be visible, but it will be read to assistive devices so it's
usually a good idea to include one. */
  "label"?: QuietButtonGroup['label'];
  /** The button group's orientation. */
  "orientation"?: QuietButtonGroup['orientation'];


}


export type QuietButtonProps = {
  /** Determines the button's appearance. */
  "appearance"?: QuietButton['appearance'];
  /** The type of button to render. This attribute has no effect on text or image buttons. */
  "variant"?: QuietButton['variant'];
  /** Disables the button. */
  "disabled"?: QuietButton['disabled'];
  /** Draws the button in a loading state. */
  "loading"?: QuietButton['loading'];
  /** Turns the button into a two-state toggle button. Clicking once will turn it on. Clicking again will turn it off.
Cannot be used with links buttons or submit buttons. */
  "toggle"?: QuietButton['toggle'];
  /** The button's size. */
  "size"?: QuietButton['size'];
  /** To create an icon button, slot an icon into the button's default slot and set this attribute to an appropriate
label. The label won't be visible, but it will be available to assistive devices. */
  "icon-label"?: QuietButton['iconLabel'];
  /** To create an icon button, slot an icon into the button's default slot and set this attribute to an appropriate
label. The label won't be visible, but it will be available to assistive devices. */
  "iconLabel"?: QuietButton['iconLabel'];
  /** Draws the button in a pill shape. */
  "pill"?: QuietButton['pill'];
  /** Determines the button's type. */
  "type"?: QuietButton['type'];
  /** The name to submit when the button is used to submit the form. */
  "name"?: QuietButton['name'];
  /** The value to submit when the button is used to submit the form. */
  "value"?: QuietButton['value'];
  /** When true, the button will be rendered with a caret to indicate a dropdown menu. */
  "with-caret"?: QuietButton['withCaret'];
  /** When true, the button will be rendered with a caret to indicate a dropdown menu. */
  "withCaret"?: QuietButton['withCaret'];
  /** Set this to render the button as an `<a>` tag instead of a `<button>`. The button will act as a link. When this is
set, form attributes and features will not work. */
  "href"?: QuietButton['href'];
  /** Opens the link in the specified target. Only works with link buttons. */
  "target"?: QuietButton['target'];
  /** Sets the link's `rel` attribute. Only works with link buttons. When linking to an external domain, you should
probably set this to `noreferrer noopener`. */
  "rel"?: QuietButton['rel'];
  /** Sets the link's `download` attribute, causing the linked file to be downloaded. Only works with link buttons. */
  "download"?: QuietButton['download'];
  /** The form to associate this control with. If omitted, the closest containing `<form>` will be used. The value of
this attribute must be an ID of a form in the same document or shadow root. */
  "form"?: QuietButton['form'];
  /** Overrides the containing form's `action` attribute. */
  "formaction"?: QuietButton['formAction'];
  /** Overrides the containing form's `action` attribute. */
  "formAction"?: QuietButton['formAction'];
  /** Overrides the containing form's `enctype` attribute. */
  "formenctype"?: QuietButton['formEnctype'];
  /** Overrides the containing form's `enctype` attribute. */
  "formEnctype"?: QuietButton['formEnctype'];
  /** Overrides the containing form's `method` attribute. */
  "formmethod"?: QuietButton['formMethod'];
  /** Overrides the containing form's `method` attribute. */
  "formMethod"?: QuietButton['formMethod'];
  /** Overrides the containing form's `novalidate` attribute. */
  "formnovalidate"?: QuietButton['formNoValidate'];
  /** Overrides the containing form's `novalidate` attribute. */
  "formNoValidate"?: QuietButton['formNoValidate'];
  /** Overrides the containing form's `target` attribute. */
  "formtarget"?: QuietButton['formTarget'];
  /** Overrides the containing form's `target` attribute. */
  "formTarget"?: QuietButton['formTarget'];

  /** Emitted when the button loses focus. This event does not bubble. */
  "onquiet-blur"?: (e: CustomEvent<never>) => void;
  /** Emitted when the button is pressed and held by tapping or with the mouse. You can look at `event.detail.originalEvent.type` to see the type of event that initiated the long press. */
  "onquiet-long-press"?: (e: CustomEvent<never>) => void;
  /** Emitted when the button receives focus. This event does not bubble. */
  "onquiet-focus"?: (e: CustomEvent<never>) => void;
}


export type QuietBytesProps = {
  /** The number of bytes to format. */
  "value"?: QuietBytes['value'];
  /** The unit to display. */
  "unit"?: QuietBytes['unit'];
  /** How to display the bytes, e.g. "100 bytes", "100 b", or "100b". */
  "display"?: QuietBytes['display'];


}


export type QuietCalloutProps = {
  /** The type of callout to render. */
  "variant"?: QuietCallout['variant'];


}


export type QuietCardProps = {
  /** Determines the card's appearance. */
  "appearance"?: QuietCard['appearance'];
  /** The card's orientation. */
  "orientation"?: QuietCard['orientation'];


}


export type QuietCarouselProps = {
  /** A custom label for the carousel. This won't be visible, but it will be read to assistive devices. */
  "label"?: QuietCarousel['label'];
  /** The current active item's index. */
  "active-index"?: QuietCarousel['activeIndex'];
  /** The current active item's index. */
  "activeIndex"?: QuietCarousel['activeIndex'];
  /** The current active item's name. */
  "active-name"?: QuietCarousel['activeName'];
  /** The current active item's name. */
  "activeName"?: QuietCarousel['activeName'];
  /** Enables looping navigation. When true, prev/next buttons wrap around to the opposite end. */
  "loop"?: QuietCarousel['loop'];
  /** Hides navigation buttons. */
  "without-nav"?: QuietCarousel['withoutNav'];
  /** Hides navigation buttons. */
  "withoutNav"?: QuietCarousel['withoutNav'];
  /** Hides pagination dots. */
  "without-pagination"?: QuietCarousel['withoutPagination'];
  /** Hides pagination dots. */
  "withoutPagination"?: QuietCarousel['withoutPagination'];
  /**  */
  "items"?: QuietCarousel['items'];
  /**  */
  "isScrolling"?: QuietCarousel['isScrolling'];
  /**  */
  "itemCount"?: QuietCarousel['itemCount'];

  /** Emitted when the active item changes and the slide has been fully scrolled into view. */
  "onquiet-item-change"?: (e: CustomEvent<never>) => void;
}


export type QuietCarouselItemProps = {
  /** An optional name for the carousel item so you can reference it with the `active-name` attribute. */
  "name"?: QuietCarouselItem['name'];


}


export type QuietCheckboxProps = {
  /** The checkbox's label. If you need to provide HTML in the label, use the `label` slot instead. */
  "label"?: QuietCheckbox['label'];
  /** The checkbox's description. If you need to provide HTML in the description, use the `description` slot instead. */
  "description"?: QuietCheckbox['description'];
  /** The name of the checkbox. This will be submitted with the form as a name/value pair. */
  "name"?: QuietCheckbox['name'];
  /** The checkbox's value. */
  "value"?: QuietCheckbox['value'];
  /** The checkbox's checked state. */
  "checked"?: QuietCheckbox['checked'];
  /** Puts the checkbox in an indeterminate state. */
  "indeterminate"?: QuietCheckbox['indeterminate'];
  /** Disables the checkbox. */
  "disabled"?: QuietCheckbox['disabled'];
  /** The type of checkbox to render. */
  "appearance"?: QuietCheckbox['appearance'];
  /** The checkbox's size. */
  "size"?: QuietCheckbox['size'];
  /** The form to associate this control with. If omitted, the closest containing `<form>` will be used. The value of
this attribute must be an ID of a form in the same document or shadow root. */
  "form"?: QuietCheckbox['form'];
  /** Makes the checkbox required. Form submission will not be allowed until the checkbox is checked. */
  "required"?: QuietCheckbox['required'];
  /**  */
  "isInvalid"?: QuietCheckbox['isInvalid'];
  /**  */
  "hadUserInteraction"?: QuietCheckbox['hadUserInteraction'];
  /**  */
  "wasSubmitted"?: QuietCheckbox['wasSubmitted'];

  /** Emitted when the checkbox loses focus. This event does not bubble. */
  "onquiet-blur"?: (e: CustomEvent<never>) => void;
  /** Emitted when the user commits changes to the checkbox's value. */
  "onquiet-change"?: (e: CustomEvent<never>) => void;
  /** Emitted when the checkbox receives focus. This event does not bubble. */
  "onquiet-focus"?: (e: CustomEvent<never>) => void;
  /** Emitted when the checkbox receives input. */
  "onquiet-input"?: (e: CustomEvent<never>) => void;
}


export type QuietColorInputProps = {
  /** The color input's label. If you need to provide HTML in the label, use the `label` slot instead. */
  "label"?: QuietColorInput['label'];
  /** The color input's description. If you need to provide HTML in the description, use the `description` slot instead. */
  "description"?: QuietColorInput['description'];
  /** The name of the color input. This will be submitted with the form as a name/value pair. */
  "name"?: QuietColorInput['name'];
  /** The color input's value. */
  "value"?: QuietColorInput['value'];
  /** A placeholder to show in the color input when it's blank. */
  "placeholder"?: QuietColorInput['placeholder'];
  /** Disables the color input. */
  "disabled"?: QuietColorInput['disabled'];
  /** Makes the color input a read-only area. */
  "readonly"?: QuietColorInput['readonly'];
  /** Adds a clear button to the color input when it's not blank. */
  "with-clear"?: QuietColorInput['withClear'];
  /** Adds a clear button to the color input when it's not blank. */
  "withClear"?: QuietColorInput['withClear'];
  /** The type of color input to render. */
  "appearance"?: QuietColorInput['appearance'];
  /** The color input's size. */
  "size"?: QuietColorInput['size'];
  /** Draws the text field in a pill shape. */
  "pill"?: QuietColorInput['pill'];
  /** The format to use for the color's value. */
  "format"?: QuietColorInput['format'];
  /** One or more semicolon-delimited colors (any valid CSS color format or name) to show as preset swatches below the
color picker. */
  "swatches"?: QuietColorInput['swatches'];
  /** Enables the alpha slider. */
  "with-alpha"?: QuietColorInput['withAlpha'];
  /** Enables the alpha slider. */
  "withAlpha"?: QuietColorInput['withAlpha'];
  /** Enables the eye dropper button. Only available in
[supportive browsers](https://caniuse.com/?search=eyedropper%20API). */
  "with-eye-dropper"?: QuietColorInput['withEyeDropper'];
  /** Enables the eye dropper button. Only available in
[supportive browsers](https://caniuse.com/?search=eyedropper%20API). */
  "withEyeDropper"?: QuietColorInput['withEyeDropper'];
  /** The placement of the dropdown menu in reference to the trigger. The menu will shift to a more optimal location if
the preferred placement doesn't have enough room. */
  "placement"?: QuietColorInput['placement'];
  /** The distance of the dropdown menu from its trigger. */
  "distance"?: QuietColorInput['distance'];
  /** The offset of the dropdown menu along its trigger. */
  "offset"?: QuietColorInput['offset'];
  /** The form to associate this control with. If omitted, the closest containing `<form>` will be used. The value of
this attribute must be an ID of a form in the same document or shadow root. */
  "form"?: QuietColorInput['form'];
  /** Makes the color input required. Form submission will not be allowed when this is set and the color input is blank. */
  "required"?: QuietColorInput['required'];
  /** Tells the browser how to autocomplete the color input. See [this page](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete)
for available values. */
  "autocomplete"?: QuietColorInput['autocomplete'];
  /** Tells the browser to focus the color input when the page loads or a dialog is shown. */
  "autofocus"?: QuietColorInput['autofocus'];
  /** Sets the enter key label on virtual keyboards. */
  "enterkeyhint"?: QuietColorInput['enterkeyhint'];
  /** Provides the browser with a hint about the type of data that might be entered by the user, allowing the appropriate
virtual keyboard to be displayed on supported devices. */
  "inputmode"?: QuietColorInput['inputmode'];
  /**  */
  "isOpen"?: QuietColorInput['isOpen'];
  /**  */
  "isInvalid"?: QuietColorInput['isInvalid'];
  /**  */
  "hadUserInteraction"?: QuietColorInput['hadUserInteraction'];
  /**  */
  "wasSubmitted"?: QuietColorInput['wasSubmitted'];

  /** Emitted when the color input loses focus. This event does not bubble. */
  "onquiet-blur"?: (e: CustomEvent<never>) => void;
  /** Emitted when the user commits changes to the color input's value. */
  "onquiet-change"?: (e: CustomEvent<never>) => void;
  /** Emitted when the color input receives focus. This event does not bubble. */
  "onquiet-focus"?: (e: CustomEvent<never>) => void;
  /** Emitted when the color input receives input. */
  "onquiet-input"?: (e: CustomEvent<never>) => void;
}


export type QuietCheckboxGroupProps = {
  /** The checkbox's label. If you need to provide HTML in the label, use the `label` slot instead. */
  "label"?: QuietCheckboxGroup['label'];
  /** The checkbox's description. If you need to provide HTML in the description, use the `description` slot instead. */
  "description"?: QuietCheckboxGroup['description'];
  /** The orientation of grouped items. */
  "orientation"?: QuietCheckboxGroup['orientation'];
  /** Indicates at least one option in the checkbox group is required. This just adds a visual indicator. To perform
validation, use the checkbox's `required` attribute and/or `setCustomValidity()` method. */
  "required"?: QuietCheckboxGroup['required'];


}


export type QuietColorPickerProps = {
  /** The color picker's label. This won't be visible, but it will be read to assistive devices so you should always
include one. */
  "label"?: QuietColorPicker['label'];
  /** The color picker's value. */
  "value"?: QuietColorPicker['value'];
  /** The format to use for the color's value. */
  "format"?: QuietColorPicker['format'];
  /** Disables the color picker. */
  "disabled"?: QuietColorPicker['disabled'];
  /** The color picker's size. */
  "size"?: QuietColorPicker['size'];
  /** One or more semicolon-delimited colors (any valid CSS color format or name) to show as preset swatches below the
color picker. */
  "swatches"?: QuietColorPicker['swatches'];
  /** Enables the alpha slider. */
  "with-alpha"?: QuietColorPicker['withAlpha'];
  /** Enables the alpha slider. */
  "withAlpha"?: QuietColorPicker['withAlpha'];
  /** Enables the eye dropper button. Only available in
[supportive browsers](https://caniuse.com/?search=eyedropper%20API). */
  "with-eye-dropper"?: QuietColorPicker['withEyeDropper'];
  /** Enables the eye dropper button. Only available in
[supportive browsers](https://caniuse.com/?search=eyedropper%20API). */
  "withEyeDropper"?: QuietColorPicker['withEyeDropper'];
  /** Enables the color value text field. */
  "with-input"?: QuietColorPicker['withInput'];
  /** Enables the color value text field. */
  "withInput"?: QuietColorPicker['withInput'];
  /**  */
  "h"?: QuietColorPicker['h'];
  /**  */
  "s"?: QuietColorPicker['s'];
  /**  */
  "v"?: QuietColorPicker['v'];
  /**  */
  "a"?: QuietColorPicker['a'];
  /**  */
  "colorSliderThumbX"?: QuietColorPicker['colorSliderThumbX'];
  /**  */
  "colorSliderThumbY"?: QuietColorPicker['colorSliderThumbY'];
  /**  */
  "hasFocus"?: QuietColorPicker['hasFocus'];
  /**  */
  "isChangingV"?: QuietColorPicker['isChangingV'];
  /**  */
  "isChangingS"?: QuietColorPicker['isChangingS'];
  /**  */
  "inputIsFocused"?: QuietColorPicker['inputIsFocused'];
  /**  */
  "displayValue"?: QuietColorPicker['displayValue'];
  /**  */
  "hadUserInteraction"?: QuietColorPicker['hadUserInteraction'];

  /** Emitted when the user commits changes to the color picker's value. */
  "onquiet-change"?: (e: CustomEvent<never>) => void;
  /** Emitted when the color picker receives input. This can fire very frequently during dragging, so avoid doing expensive operations in the handler. If you don't live feedback, use the `quiet-change` event instead. */
  "onquiet-input"?: (e: CustomEvent<never>) => void;
}


export type QuietComboboxProps = {
  /** The combobox's label. */
  "label"?: QuietCombobox['label'];
  /** The combobox's description. */
  "description"?: QuietCombobox['description'];
  /** The name of the combobox for form submission. */
  "name"?: QuietCombobox['name'];
  /** The combobox's value(s). */
  "value"?: QuietCombobox['value'];
  /** Placeholder text for the input. */
  "placeholder"?: QuietCombobox['placeholder'];
  /** Disables the combobox. */
  "disabled"?: QuietCombobox['disabled'];
  /** Makes the combobox required. */
  "required"?: QuietCombobox['required'];
  /** Enables multiple selection. */
  "multiple"?: QuietCombobox['multiple'];
  /** Adds a clear button when not blank. */
  "with-clear"?: QuietCombobox['withClear'];
  /** Adds a clear button when not blank. */
  "withClear"?: QuietCombobox['withClear'];
  /** The visual appearance of the combobox. */
  "appearance"?: QuietCombobox['appearance'];
  /** The size of the combobox. */
  "size"?: QuietCombobox['size'];
  /** Draws the combobox in a pill shape. */
  "pill"?: QuietCombobox['pill'];
  /** The dropdown's placement relative to the input. */
  "placement"?: QuietCombobox['placement'];
  /** The distance of the dropdown from the input. */
  "distance"?: QuietCombobox['distance'];
  /** The offset of the dropdown along the input. */
  "offset"?: QuietCombobox['offset'];
  /** The form to associate with. */
  "form"?: QuietCombobox['form'];
  /**  */
  "open"?: QuietCombobox['open'];
  /**  */
  "inputValue"?: QuietCombobox['inputValue'];

  /** Emitted when the combobox loses focus. */
  "onquiet-blur"?: (e: CustomEvent<never>) => void;
  /** Emitted when the user commits changes to the combobox's value. */
  "onquiet-change"?: (e: CustomEvent<never>) => void;
  /** Emitted when the combobox receives focus. */
  "onquiet-focus"?: (e: CustomEvent<never>) => void;
  /** Emitted when the combobox receives input. */
  "onquiet-input"?: (e: CustomEvent<never>) => void;
  /** Emitted when the dropdown is instructed to open but before it is shown. */
  "onquiet-before-open"?: (e: CustomEvent<never>) => void;
  /** Emitted when the dropdown opens. */
  "onquiet-open"?: (e: CustomEvent<never>) => void;
  /** Emitted when the dropdown is instructed to close but before it is hidden. */
  "onquiet-before-close"?: (e: CustomEvent<never>) => void;
  /** Emitted when the dropdown closes. */
  "onquiet-close"?: (e: CustomEvent<never>) => void;
}


export type QuietComboboxItemProps = {
  /** The value to submit when this item is selected. If not provided, the text content is used. */
  "value"?: QuietComboboxItem['value'];
  /** Disables the item. */
  "disabled"?: QuietComboboxItem['disabled'];
  /**  */
  "defaultSlot"?: QuietComboboxItem['defaultSlot'];


}


export type QuietComparisonProps = {
  /** The position of the divider as a decimal (0-1). */
  "position"?: QuietComparison['position'];
  /** The orientation of the comparison slider, either 'horizontal' or 'vertical'. */
  "orientation"?: QuietComparison['orientation'];
  /** Disables the comparison component, preventing it from being focused and adjusted. */
  "disabled"?: QuietComparison['disabled'];
  /**  */
  "isDragging"?: QuietComparison['isDragging'];

  /** Dispatched when the comparison's handle is moved. */
  "onquiet-resize"?: (e: CustomEvent<never>) => void;
}


export type QuietCopyProps = {
  /** The text content that will be copied to the clipboard. */
  "data"?: QuietCopy['data'];
  /** Disables the button. */
  "disabled"?: QuietCopy['disabled'];
  /** The placement of the feedback animation. */
  "feedback-placement"?: QuietCopy['feedbackPlacement'];
  /** The placement of the feedback animation. */
  "feedbackPlacement"?: QuietCopy['feedbackPlacement'];

  /** Emitted when the content has been copied. This event does not bubble. You can inspect `event.detail.data` to see the content that was copied. */
  "onquiet-copy"?: (e: CustomEvent<never>) => void;
  /** Emitted when the browser refuses to allow the content to be copied. This event does not bubble. You can inspect `event.detail.error` to see the error that occurred. */
  "onquiet-copy-error"?: (e: CustomEvent<never>) => void;
}


export type QuietCountdownProps = {
  /** An accessible label for the countdown. This won't be visible, but it will be read to assistive devices so you should
always include one. */
  "label"?: QuietCountdown['label'];
  /** The date in the future at which the countdown will end. If an attribute is passed, the date should be an
[ISO 8601 string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString).
If set as a property, a `Date` object can be used instead. */
  "date"?: QuietCountdown['date'];
  /** A visual delimiter to show between units. */
  "delimiter"?: QuietCountdown['delimiter'];
  /** The smallest unit to display in the countdown. */
  "min-unit"?: QuietCountdown['minUnit'];
  /** The smallest unit to display in the countdown. */
  "minUnit"?: QuietCountdown['minUnit'];
  /** The largest unit to display in the countdown. */
  "max-unit"?: QuietCountdown['maxUnit'];
  /** The largest unit to display in the countdown. */
  "maxUnit"?: QuietCountdown['maxUnit'];
  /** Whether to group numbers, e.g. with a thousands separator. */
  "grouping"?: QuietCountdown['grouping'];
  /**  */
  "currentTimeUnits"?: QuietCountdown['currentTimeUnits'];
  /**  */
  "visibleUnits"?: QuietCountdown['visibleUnits'];
  /**  */
  "effectiveEndDate"?: QuietCountdown['effectiveEndDate'];
  /** A custom formatting function to apply to the number. When set, `decimal-places` and `grouping` will be ignored.
Property only. */
  "valueFormatter"?: QuietCountdown['valueFormatter'];

  /** Dispatched when the countdown finishes. */
  "onquiet-finished"?: (e: CustomEvent<never>) => void;
  /** Dispatched every time the visible countdown changes. For example, if the timer displays seconds, this will be once every second; if `min-unit` is minutes, it will be once every minute; and so on. */
  "onquiet-tick"?: (e: CustomEvent<never>) => void;
}


export type QuietDateProps = {
  /** The date to format. If an attribute is passed, the date should be an [ISO 8601 string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString).
If set as a property, a `Date` object can be used instead. If unset, the current date will be assumed. */
  "date"?: QuietDate['date'];
  /** A shortcut property for formatting the date. This can be used with `time-style`, but not with other formatting
properties such as `weekday`, `hour`, `month`, etc. */
  "date-style"?: QuietDate['dateStyle'];
  /** A shortcut property for formatting the date. This can be used with `time-style`, but not with other formatting
properties such as `weekday`, `hour`, `month`, etc. */
  "dateStyle"?: QuietDate['dateStyle'];
  /** A shortcut property for formatting the time. This can be used with `date-style`, but not with other formatting
properties such as `weekday`, `hour`, `month`, etc. */
  "time-style"?: QuietDate['timeStyle'];
  /** A shortcut property for formatting the time. This can be used with `date-style`, but not with other formatting
properties such as `weekday`, `hour`, `month`, etc. */
  "timeStyle"?: QuietDate['timeStyle'];
  /** Whether to use 12-hour time (as opposed to 24-hour time). If `auto`, the default value is determined by the user's
locale. */
  "hour-format"?: QuietDate['hourFormat'];
  /** Whether to use 12-hour time (as opposed to 24-hour time). If `auto`, the default value is determined by the user's
locale. */
  "hourFormat"?: QuietDate['hourFormat'];
  /** The hour cycle to use. */
  "hourCycle"?: QuietDate['hourCycle'];
  /** The time zone to use. The default is the user's default time zone. */
  "time-zone"?: QuietDate['timeZone'];
  /** The time zone to use. The default is the user's default time zone. */
  "timeZone"?: QuietDate['timeZone'];
  /** The representation of the weekday. */
  "weekday"?: QuietDate['weekday'];
  /** The representation of the era. */
  "era"?: QuietDate['era'];
  /** The representation of the year. */
  "year"?: QuietDate['year'];
  /** The representation of the month. */
  "month"?: QuietDate['month'];
  /** The representation of the day. */
  "day"?: QuietDate['day'];
  /** The formatting style used for day periods like "in the morning", "am", "noon", "n" etc. This option only has an
effect if a 12-hour clock is used. */
  "day-period"?: QuietDate['dayPeriod'];
  /** The formatting style used for day periods like "in the morning", "am", "noon", "n" etc. This option only has an
effect if a 12-hour clock is used. */
  "dayPeriod"?: QuietDate['dayPeriod'];
  /** The representation of the hour. */
  "hour"?: QuietDate['hour'];
  /** The representation of the minute. */
  "minute"?: QuietDate['minute'];
  /** The representation of the second. */
  "second"?: QuietDate['second'];
  /** The number of digits used to represent fractions of a second (any additional digits are truncated). */
  "fractional-second-digits"?: QuietDate['fractionalSecondDigits'];
  /** The number of digits used to represent fractions of a second (any additional digits are truncated). */
  "fractionalSecondDigits"?: QuietDate['fractionalSecondDigits'];
  /** The localized representation of the time zone name. */
  "time-zone-name"?: QuietDate['timeZoneName'];
  /** The localized representation of the time zone name. */
  "timeZoneName"?: QuietDate['timeZoneName'];
  /** The format matching algorithm to use. */
  "format-matcher"?: QuietDate['formatMatcher'];
  /** The format matching algorithm to use. */
  "formatMatcher"?: QuietDate['formatMatcher'];


}


export type QuietDialogProps = {
  /** Opens or closes the dialog. */
  "open"?: QuietDialog['open'];
  /** By default, the dialog will appear in the center of the screen. Changing the placement will cause the dialog to
slide in from the side of the screen like a drawer. */
  "placement"?: QuietDialog['placement'];
  /** Allows the dialog to be closed when clicking outside of it. */
  "light-dismiss"?: QuietDialog['lightDismiss'];
  /** Allows the dialog to be closed when clicking outside of it. */
  "lightDismiss"?: QuietDialog['lightDismiss'];
  /** For dialogs that scroll, this will reset the scroll position when the dialog closes. */
  "reset-scroll"?: QuietDialog['resetScroll'];
  /** For dialogs that scroll, this will reset the scroll position when the dialog closes. */
  "resetScroll"?: QuietDialog['resetScroll'];

  /** Emitted when the dialog is instructed to open but before it is shown. Calling `event.preventDefault()` will prevent the dialog from opening. */
  "onquiet-before-open"?: (e: CustomEvent<never>) => void;
  /** Emitted after the dialog has been opened and the show animation has completed. */
  "onquiet-open"?: (e: CustomEvent<never>) => void;
  /** Emitted when the dialog is dismissed. Calling `event.preventDefault()` will prevent the dialog from closing and show a brief animation.<br><br>You can check `event.detail.source` to see which element triggered the dialog to close, such as a button. If the source is the dialog itself, the user has pressed [[Escape]] or the dialog has been closed programmatically. */
  "onquiet-before-close"?: (e: CustomEvent<never>) => void;
  /** Emitted after the dialog has been closed and the hide animation has completed. */
  "onquiet-close"?: (e: CustomEvent<never>) => void;
}


export type QuietDividerProps = {
  /** Sets the divider's orientation. */
  "orientation"?: QuietDivider['orientation'];


}


export type QuietDropdownItemProps = {
  /** An optional value for the menu item. This is useful for determining which item was selected when listening to the
dropdown's `quiet-select` event. */
  "value"?: QuietDropdownItem['value'];
  /** Set to `checkbox` to make the item a checkbox. */
  "type"?: QuietDropdownItem['type'];
  /** The type of menu item to render. */
  "variant"?: QuietDropdownItem['variant'];
  /** Set to true to check the dropdown item. Only valid when `type` is `checkbox`. */
  "checked"?: QuietDropdownItem['checked'];
  /** Disables the dropdown item. */
  "disabled"?: QuietDropdownItem['disabled'];
  /** Whether the submenu is currently open. */
  "submenuOpen"?: QuietDropdownItem['submenuOpen'];
  /** Tells the dropdown item to behave like a link. When selected, the browser will navigate to the target URL. */
  "href"?: QuietDropdownItem['href'];
  /** Opens the link in the specified target. Only works when `href` is provided. */
  "target"?: QuietDropdownItem['target'];
  /** Sets the link's `rel` attribute. Only works when `href` is provided. When linking to an external domain, you should
probably set this to `noreferrer noopener`. */
  "rel"?: QuietDropdownItem['rel'];
  /** Sets the link's `download` attribute, causing the linked file to be downloaded. Only works when `href` is provided. */
  "download"?: QuietDropdownItem['download'];
  /**  */
  "hiddenLink"?: QuietDropdownItem['hiddenLink'];
  /**  */
  "submenuElement"?: QuietDropdownItem['submenuElement'];


}


export type QuietFileInputProps = {
  /** The text field's label. If you need to provide HTML in the label, use the `label` slot instead. */
  "label"?: QuietFileInput['label'];
  /** The text field's description. If you need to provide HTML in the description, use the `description` slot instead. */
  "description"?: QuietFileInput['description'];
  /** The name of the file input. This will be submitted with the form as a name/value pair. */
  "name"?: QuietFileInput['name'];
  /** Disables the file input. */
  "disabled"?: QuietFileInput['disabled'];
  /** A list of acceptable file types. Must be a comma-separated list of [unique file type
specifiers](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#unique_file_type_specifiers). */
  "accept"?: QuietFileInput['accept'];
  /** Allows more than one file to be selected. */
  "multiple"?: QuietFileInput['multiple'];
  /** The file input's size. */
  "size"?: QuietFileInput['size'];
  /** The form to associate this control with. If omitted, the closest containing `<form>` will be used. The value of
this attribute must be an ID of a form in the same document or shadow root. */
  "form"?: QuietFileInput['form'];
  /** Makes the file input required. Form submission will not be allowed when this is set and no files are selected. */
  "required"?: QuietFileInput['required'];
  /**  */
  "dropzone"?: QuietFileInput['dropzone'];
  /**  */
  "fileInput"?: QuietFileInput['fileInput'];
  /**  */
  "isDragging"?: QuietFileInput['isDragging'];
  /**  */
  "isInvalid"?: QuietFileInput['isInvalid'];
  /**  */
  "hadUserInteraction"?: QuietFileInput['hadUserInteraction'];
  /**  */
  "wasSubmitted"?: QuietFileInput['wasSubmitted'];
  /** An array of files that are currently selected. (Property only) */
  "files"?: QuietFileInput['files'];

  /** Emitted when the file input loses focus. This event does not bubble. */
  "onquiet-blur"?: (e: CustomEvent<never>) => void;
  /** Emitted when the user selects or removes a file. */
  "onquiet-change"?: (e: CustomEvent<never>) => void;
  /** Emitted when the file input receives focus. This event does not bubble. */
  "onquiet-focus"?: (e: CustomEvent<never>) => void;
  /** Emitted when the file input receives input. */
  "onquiet-input"?: (e: CustomEvent<never>) => void;
}


export type QuietDropdownProps = {
  /** Opens or closes the dropdown. */
  "open"?: QuietDropdown['open'];
  /** The ID of an element to apply the dropdown as a context menu. */
  "context-menu"?: QuietDropdown['contextMenu'];
  /** The ID of an element to apply the dropdown as a context menu. */
  "contextMenu"?: QuietDropdown['contextMenu'];
  /** The placement of the dropdown menu in reference to the trigger. The menu will shift to a more optimal location if
the preferred placement doesn't have enough room. */
  "placement"?: QuietDropdown['placement'];
  /** The distance of the dropdown menu from its trigger. */
  "distance"?: QuietDropdown['distance'];
  /** The offset of the dropdown menu along its trigger. */
  "offset"?: QuietDropdown['offset'];
  /**  */
  "defaultSlot"?: QuietDropdown['defaultSlot'];

  /** Emitted when the dropdown is instructed to open but before it is shown. */
  "onquiet-before-open"?: (e: CustomEvent<never>) => void;
  /** Emitted when the dropdown menu has opened and the animation has completed. */
  "onquiet-open"?: (e: CustomEvent<never>) => void;
  /** Emitted when the dropdown is dismissed but before it is hidden. */
  "onquiet-before-close"?: (e: CustomEvent<never>) => void;
  /** Emitted when the dropdown menu has closed and the animation has completed. */
  "onquiet-close"?: (e: CustomEvent<never>) => void;
  /** Emitted when a dropdown item has been selected. You can inspect `event.detail.item` to see the `<quiet-dropdown-item>` that was selected. Calling `event.preventDefault()` will keep the dropdown open. */
  "onquiet-select"?: (e: CustomEvent<never>) => void;
}


export type QuietExpanderProps = {
  /** Whether the content is expanded */
  "expanded"?: QuietExpander['expanded'];
  /** Disables the expand/collapse functionality */
  "disabled"?: QuietExpander['disabled'];
  /** When true, the shadow above collapsed content will not be rendered. */
  "without-shadow"?: QuietExpander['withoutShadow'];
  /** When true, the shadow above collapsed content will not be rendered. */
  "withoutShadow"?: QuietExpander['withoutShadow'];
  /**  */
  "content"?: QuietExpander['content'];
  /**  */
  "trigger"?: QuietExpander['trigger'];

  /** Emitted before the expander opens. Cancelable event that prevents opening when canceled. */
  "onquiet-before-open"?: (e: CustomEvent<never>) => void;
  /** Emitted after the expander has opened. */
  "onquiet-open"?: (e: CustomEvent<never>) => void;
  /** Emitted before the expander closes. Cancelable event that prevents closing when canceled. */
  "onquiet-before-close"?: (e: CustomEvent<never>) => void;
  /** Emitted after the expander has closed. */
  "onquiet-close"?: (e: CustomEvent<never>) => void;
}


export type QuietEmptyStateProps = {


}


export type QuietFitTextProps = {
  /** The minimum font size to use when scaling, in pixels. The text will never be smaller than this value, which may
lead to overflows if the text is excessively long. */
  "min-font-size"?: QuietFitText['minFontSize'];
  /** The minimum font size to use when scaling, in pixels. The text will never be smaller than this value, which may
lead to overflows if the text is excessively long. */
  "minFontSize"?: QuietFitText['minFontSize'];
  /** The maximum font size to use when scaling, in pixels. The text will never be larger than this value, which may
cause the text to not scale the full width of the container. */
  "max-font-size"?: QuietFitText['maxFontSize'];
  /** The maximum font size to use when scaling, in pixels. The text will never be larger than this value, which may
cause the text to not scale the full width of the container. */
  "maxFontSize"?: QuietFitText['maxFontSize'];
  /** The precision, in pixels, used to scale the text to fit. Larger values are more performant but result in less
accurate measurements. */
  "precision"?: QuietFitText['precision'];
  /**  */
  "measure"?: QuietFitText['measure'];
  /**  */
  "defaultSlot"?: QuietFitText['defaultSlot'];
  /**  */
  "containerWidth"?: QuietFitText['containerWidth'];
  /**  */
  "text"?: QuietFitText['text'];


}


export type QuietFlipCardProps = {
  /** Flips the card. */
  "flipped"?: QuietFlipCard['flipped'];
  /** Determines the flip direction. */
  "orientation"?: QuietFlipCard['orientation'];
  /**  */
  "defaultSlot"?: QuietFlipCard['defaultSlot'];
  /**  */
  "backSlot"?: QuietFlipCard['backSlot'];

  /** Emitted when the flip card is instructed to flip but before it actually flips. Calling `event.preventDefault()` will prevent the flip card from flipping. */
  "onquiet-before-flip"?: (e: CustomEvent<never>) => void;
  /** Emitted after the flip card has been flipped and the animation has completed. */
  "onquiet-flip"?: (e: CustomEvent<never>) => void;
}


export type QuietHotkeyProps = {
  /** The primary keys to display in the hotkey, separated by a space. */
  "keys"?: QuietHotkey['keys'];
  /** The keys to display on Linux devices, separated by a space. */
  "linux"?: QuietHotkey['linux'];
  /** The keys to display on Mac devices, separated by a space. */
  "mac"?: QuietHotkey['mac'];
  /** The keys to display on Windows devices, separated by a space. */
  "windows"?: QuietHotkey['windows'];
  /** Optional label for screen readers. If not provided, the hotkey text will be used. */
  "label"?: QuietHotkey['label'];
  /** The delimiter to show between each key. When set to `auto`, the delimiter will be determined by the platform (no
character for Mac and "+" for others). */
  "delimiter"?: QuietHotkey['delimiter'];
  /** Determines the platform to show. When set to `auto`, the platform will be automatically detected. The `linux`
platform will be used for most Linux, Unix, and BSD operating systems. */
  "platform"?: QuietHotkey['platform'];
  /** The hotkey's appearance. */
  "appearance"?: QuietHotkey['appearance'];


}


export type QuietIncludeProps = {
  /** The URL of the file to include. Must be a CORS-enabled endpoint. */
  "src"?: QuietInclude['src'];
  /** The mode to use when fetching the request. */
  "mode"?: QuietInclude['mode'];
  /** By default, scripts in included files will not be executed. Setting this to true will allow them to run. If you use
this option, make sure you trust the included HTML, otherwise you may become vulnerable to XSS exploits. */
  "allow-scripts"?: QuietInclude['allowScripts'];
  /** By default, scripts in included files will not be executed. Setting this to true will allow them to run. If you use
this option, make sure you trust the included HTML, otherwise you may become vulnerable to XSS exploits. */
  "allowScripts"?: QuietInclude['allowScripts'];

  /** Emitted when the include file has been fetched and rendered. The HTTP status code will be available in `event.detail.status`. This event does not bubble. */
  "onquiet-included"?: (e: CustomEvent<never>) => void;
  /** Emitted when the fetch results in a network error or receives an HTTP response outside of the 200 range. If a network error occurs, it will be available in `event.detail.error`. If an HTTP status code was returned, it will be available in `event.detail.status`. This event does not bubble. */
  "onquiet-include-error"?: (e: CustomEvent<never>) => void;
}


export type QuietIconProps = {
  /** The name of the icon library to use. */
  "library"?: QuietIcon['library'];
  /** The icon family to use for this icon, e.g. `filled` or `outline`. */
  "family"?: QuietIcon['family'];
  /** The name of the icon to render. */
  "name"?: QuietIcon['name'];
  /** A label to use for assistive devices. If omitted, the icon will be considered presentational. */
  "label"?: QuietIcon['label'];
  /** Flips the icon horizontally. */
  "flip-x"?: QuietIcon['flipX'];
  /** Flips the icon horizontally. */
  "flipX"?: QuietIcon['flipX'];
  /** Flips the icon vertically. */
  "flip-y"?: QuietIcon['flipY'];
  /** Flips the icon vertically. */
  "flipY"?: QuietIcon['flipY'];
  /** Rotates the icon the specified number of degrees. */
  "rotate"?: QuietIcon['rotate'];
  /**  */
  "svg"?: QuietIcon['svg'];

  /** The icon has reloaded and rendered. This event does not bubble. */
  "onquiet-loaded"?: (e: CustomEvent<never>) => void;
  /** The icon failed to load. This event does not bubble. */
  "onquiet-load-error"?: (e: CustomEvent<never>) => void;
}


export type QuietInfiniteScrollerProps = {
  /** An accessible label for the feed. */
  "label"?: QuietInfiniteScroller['label'];
  /** The scroll threshold at which to trigger loading more items. Accepts percentages (e.g., "20%") or pixels
(e.g., "200px"). */
  "threshold"?: QuietInfiniteScroller['threshold'];
  /**  */
  "defaultSlot"?: QuietInfiniteScroller['defaultSlot'];
  /**  */
  "isLoading"?: QuietInfiniteScroller['isLoading'];
  /**  */
  "isComplete"?: QuietInfiniteScroller['isComplete'];

  /** Emitted when scrolling reaches the threshold and more items should be loaded. */
  "onquiet-load-more"?: (e: CustomEvent<never>) => void;
}


export type QuietIntersectionObserverProps = {
  /** The ID of the element to use as as the bounding box of the viewport for the observed targets. */
  "root"?: QuietIntersectionObserver['root'];
  /** Margin around the root. Can have values similar to the CSS margin property. */
  "root-margin"?: QuietIntersectionObserver['rootMargin'];
  /** Margin around the root. Can have values similar to the CSS margin property. */
  "rootMargin"?: QuietIntersectionObserver['rootMargin'];
  /** Either a single number or space-delimited numbers which indicate at what percentage of the target's visibility the observer's callback should be executed. */
  "threshold"?: QuietIntersectionObserver['threshold'];
  /** A CSS class name to apply to elements while they're intersecting. The class will be removed when the element is no
longer in the viewport. This allows you to apply styles to elements as they enter and exit the viewport using pure
CSS. */
  "intersect-class"?: QuietIntersectionObserver['intersectClass'];
  /** A CSS class name to apply to elements while they're intersecting. The class will be removed when the element is no
longer in the viewport. This allows you to apply styles to elements as they enter and exit the viewport using pure
CSS. */
  "intersectClass"?: QuietIntersectionObserver['intersectClass'];
  /** When true, stops observing after the first intersection. */
  "once"?: QuietIntersectionObserver['once'];
  /** Disables the intersection observer. */
  "disabled"?: QuietIntersectionObserver['disabled'];

  /** Emitted when an observed element starts or stops intersecting. `event.detail.entry` contains the respective [`IntersectionObserverEntry`](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry) object. */
  "onquiet-intersect"?: (e: CustomEvent<never>) => void;
}


export type QuietJoystickProps = {
  /** An accessible label for the joystick. This won't be visible, but it will be read to assistive devices so you should
always include one. */
  "label"?: QuietJoystick['label'];
  /** Indicates whether the joystick is disabled. When `true`, the joystick does not respond to mouse or touch input. */
  "disabled"?: QuietJoystick['disabled'];
  /** The operational mode of the joystick. 'normal' snaps back to center on release, 'sticky' retains its last position. */
  "mode"?: QuietJoystick['mode'];
  /** The normalized distance (0-1) from the center below which no movement is registered. */
  "dead-zone"?: QuietJoystick['deadZone'];
  /** The normalized distance (0-1) from the center below which no movement is registered. */
  "deadZone"?: QuietJoystick['deadZone'];
  /**  */
  "thumbEl"?: QuietJoystick['thumbEl'];

  /** Emitted before interaction begins. Calling `event.preventDefault()` will cancel activation. */
  "onquiet-joystick-before-start"?: (e: CustomEvent<never>) => void;
  /** Emitted when movement begins. */
  "onquiet-joystick-start"?: (e: CustomEvent<never>) => void;
  /** Emitted continuously during movement. Consider debouncing for performance-sensitive applications. */
  "onquiet-joystick-move"?: (e: CustomEvent<never>) => void;
  /** Emitted before interaction ends. Calling `event.preventDefault()` will cancel deactivation. */
  "onquiet-joystick-before-stop"?: (e: CustomEvent<never>) => void;
  /** Emitted when movement ends. */
  "onquiet-joystick-stop"?: (e: CustomEvent<never>) => void;
}


export type QuietListboxItemProps = {
  /** The listbox item's label. If you need to provide HTML in the label, use the `label` slot instead. */
  "label"?: QuietListboxItem['label'];
  /** The listbox item's description. If you need to provide HTML in the description, use the `description` slot instead. */
  "description"?: QuietListboxItem['description'];
  /** The listbox item's value. */
  "value"?: QuietListboxItem['value'];
  /** The listbox item's selected state. */
  "selected"?: QuietListboxItem['selected'];
  /** Disables the listbox item. */
  "disabled"?: QuietListboxItem['disabled'];


}


export type QuietListboxProps = {
  /** The listbox's label. If you need to provide HTML in the label, use the `label` slot instead. */
  "label"?: QuietListbox['label'];
  /** The listbox's description. If you need to provide HTML in the description, use the `description` slot instead. */
  "description"?: QuietListbox['description'];
  /** The name of the listbox. This will be submitted with the form as a name/value pair. */
  "name"?: QuietListbox['name'];
  /** Enables multiple selection mode. */
  "multiple"?: QuietListbox['multiple'];
  /** Disables the listbox. */
  "disabled"?: QuietListbox['disabled'];
  /** Makes the text field a read-only field. */
  "readonly"?: QuietListbox['readonly'];
  /** The text field's size. */
  "size"?: QuietListbox['size'];
  /** The form to associate this control with. If omitted, the closest containing `<form>` will be used. The value of
this attribute must be an ID of a form in the same document or shadow root. */
  "form"?: QuietListbox['form'];
  /** Makes the listbox required. Form submission will not be allowed when this is set and the listbox is blank. */
  "required"?: QuietListbox['required'];
  /** The listbox's value. For multiple selection, this will be the value of the first selected item. */
  "value"?: QuietListbox['value'];
  /** Gets or sets the currently selected values as an array. This property provides a consistent way to access or modify
the selection state regardless of whether the listbox is in single or multiple selection mode.

In single selection mode, it returns an array with either zero or one value. In multiple selection mode, it returns
an array of all selected values.

When setting this property in single mode, the first value in the array (if any) becomes the selected value. In
multiple mode, all values in the array become selected. */
  "selectedValues"?: QuietListbox['selectedValues'];
  /** Gets or sets an array of selected listbox items. */
  "selectedItems"?: QuietListbox['selectedItems'];

  /** Emitted when the list box loses focus. This event does not bubble. */
  "onquiet-blur"?: (e: CustomEvent<never>) => void;
  /** Emitted when the user commits changes to the list box's selection. In single select mode, it occurs when a change is made and the listbox loses focus. In multiselect mode, it occurs whenever an option is toggled even while the listbox has focus. */
  "onquiet-change"?: (e: CustomEvent<never>) => void;
  /** Emitted when the list box receives focus. This event does not bubble. */
  "onquiet-focus"?: (e: CustomEvent<never>) => void;
  /** Emitted when the list box's selection changes from user input. */
  "onquiet-input"?: (e: CustomEvent<never>) => void;
}


export type QuietLoremIpsumProps = {
  /** The type of HTML content to generate. */
  "type"?: QuietLoremIpsum['type'];
  /** The length of the content to generate, e.g. the number of words, sentences, paragraphs, or list items. This should
be a number or a range in the format of `{min}-{max}`, e.g. `2-4`. */
  "length"?: QuietLoremIpsum['length'];
  /** By default, the generator will produce random content every time it runs. Use this option to seed the generator
with a non-zero number and force it to output the same content every time. */
  "seed"?: QuietLoremIpsum['seed'];
  /** The number of words that should occur in a sentence or list item. This should be a number or a range in the format
of `{min}-{max}`, e.g. `4-16`. */
  "words-per-sentence"?: QuietLoremIpsum['wordsPerSentence'];
  /** The number of words that should occur in a sentence or list item. This should be a number or a range in the format
of `{min}-{max}`, e.g. `4-16`. */
  "wordsPerSentence"?: QuietLoremIpsum['wordsPerSentence'];
  /** The number of sentences that should occur in a paragraph. This should be a number or a range in the format of
`{min}-{max}`, e.g. `3-6`. */
  "sentences-per-paragraph"?: QuietLoremIpsum['sentencesPerParagraph'];
  /** The number of sentences that should occur in a paragraph. This should be a number or a range in the format of
`{min}-{max}`, e.g. `3-6`. */
  "sentencesPerParagraph"?: QuietLoremIpsum['sentencesPerParagraph'];


}


export type QuietMutationObserverProps = {
  /** Disables the mutation observer. */
  "disabled"?: QuietMutationObserver['disabled'];
  /** Indicates whether attributes should be observed. */
  "attr"?: QuietMutationObserver['attr'];
  /** Indicates whether attribute old value should be recorded. */
  "attr-old-value"?: QuietMutationObserver['attrOldValue'];
  /** Indicates whether attribute old value should be recorded. */
  "attrOldValue"?: QuietMutationObserver['attrOldValue'];
  /** One or more attributes to limit observations to, separate by a space. When not specified, all attributes are
observed. */
  "attr-filter"?: QuietMutationObserver['attrFilter'];
  /** One or more attributes to limit observations to, separate by a space. When not specified, all attributes are
observed. */
  "attrFilter"?: QuietMutationObserver['attrFilter'];
  /** Indicates whether mutations to target's children are to be observed. */
  "child-list"?: QuietMutationObserver['childList'];
  /** Indicates whether mutations to target's children are to be observed. */
  "childList"?: QuietMutationObserver['childList'];
  /** Indicates whether mutations to target's descendants are to be observed. */
  "subtree"?: QuietMutationObserver['subtree'];
  /** Indicates whether character data should be observed. */
  "character-data"?: QuietMutationObserver['characterData'];
  /** Indicates whether character data should be observed. */
  "characterData"?: QuietMutationObserver['characterData'];
  /** Indicates whether character data old value should be recorded. */
  "character-data-old-value"?: QuietMutationObserver['characterDataOldValue'];
  /** Indicates whether character data old value should be recorded. */
  "characterDataOldValue"?: QuietMutationObserver['characterDataOldValue'];

  /** Emitted when a slotted element is mutated. The `event.detail.record` property contains a [`MutationRecord`](https://developer.mozilla.org/en-US/docs/Web/API/MutationRecord) with information about the mutation. */
  "onquiet-mutation"?: (e: CustomEvent<never>) => void;
}


export type QuietNaviconProps = {
  /** The ID of the associated menu that gets shown/hidden when the navicon is toggled. The element must be in the same
document as the navicon. */
  "for"?: QuietNavicon['for'];
  /** Determines if the navicon is toggled on. */
  "expanded"?: QuietNavicon['expanded'];
  /** Determines the navicon's symbol. */
  "symbol"?: QuietNavicon['symbol'];
  /** Disables the navicon. */
  "disabled"?: QuietNavicon['disabled'];
  /** The accessible label for the navicon. */
  "label"?: QuietNavicon['label'];

  /** Emitted when the navicon loses focus. This event does not bubble. */
  "onquiet-blur"?: (e: CustomEvent<never>) => void;
  /** Emitted when the navicon receives focus. This event does not bubble. */
  "onquiet-focus"?: (e: CustomEvent<never>) => void;
}


export type QuietMeshGradientProps = {
  /** The number of gradient layers to generate. */
  "complexity"?: QuietMeshGradient['complexity'];
  /** A seed value for consistent gradient generation. If not provided, the gradient will be random. */
  "seed"?: QuietMeshGradient['seed'];


}


export type QuietNumberFieldProps = {
  /** The number field's label. If you need to provide HTML in the label, use the `label` slot instead. */
  "label"?: QuietNumberField['label'];
  /** The number field's description. If you need to provide HTML in the description, use the `description` slot instead. */
  "description"?: QuietNumberField['description'];
  /** The name of the number field. This will be submitted with the form as a name/value pair. */
  "name"?: QuietNumberField['name'];
  /** The number field's value. */
  "value"?: QuietNumberField['value'];
  /** A placeholder to show in the number field when it's blank. */
  "placeholder"?: QuietNumberField['placeholder'];
  /** Disables the number field. */
  "disabled"?: QuietNumberField['disabled'];
  /** Makes the number field a read-only field. */
  "readonly"?: QuietNumberField['readonly'];
  /** The type of number field to render. */
  "appearance"?: QuietNumberField['appearance'];
  /** The number field's size. */
  "size"?: QuietNumberField['size'];
  /** Draws the number field in a pill shape. */
  "pill"?: QuietNumberField['pill'];
  /** The form to associate this control with. If omitted, the closest containing `<form>` will be used. The value of
this attribute must be an ID of a form in the same document or shadow root. */
  "form"?: QuietNumberField['form'];
  /** Makes the number field required. Form submission will not be allowed when this is set and the number field is blank. */
  "required"?: QuietNumberField['required'];
  /** A regular expression the value should match to be considered valid. */
  "pattern"?: QuietNumberField['pattern'];
  /** The minimum value for date/time types. */
  "min"?: QuietNumberField['min'];
  /** The maximum value for date/time types. */
  "max"?: QuietNumberField['max'];
  /** The granularity the value must adhere to when incrementing and decrementing. */
  "step"?: QuietNumberField['step'];
  /** Tells the browser how to autocomplete the number field. See [this page](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete)
for available values. */
  "autocomplete"?: QuietNumberField['autocomplete'];
  /** Tells the browser to focus the number field when the page loads or a dialog is shown. */
  "autofocus"?: QuietNumberField['autofocus'];
  /** Sets the enter key label on virtual keyboards. */
  "enterkeyhint"?: QuietNumberField['enterkeyhint'];
  /** When true, the add/subtract steppers won't be displayed. */
  "without-steppers"?: QuietNumberField['withoutSteppers'];
  /** When true, the add/subtract steppers won't be displayed. */
  "withoutSteppers"?: QuietNumberField['withoutSteppers'];
  /**  */
  "isInvalid"?: QuietNumberField['isInvalid'];
  /**  */
  "hadUserInteraction"?: QuietNumberField['hadUserInteraction'];
  /**  */
  "wasSubmitted"?: QuietNumberField['wasSubmitted'];
  /**  */
  "isPasswordVisible"?: QuietNumberField['isPasswordVisible'];

  /** Emitted when the number field loses focus. This event does not bubble. */
  "onquiet-blur"?: (e: CustomEvent<never>) => void;
  /** Emitted when the user commits changes to the number field's value. */
  "onquiet-change"?: (e: CustomEvent<never>) => void;
  /** Emitted when the number field receives focus. This event does not bubble. */
  "onquiet-focus"?: (e: CustomEvent<never>) => void;
  /** Emitted when the number field receives input. */
  "onquiet-input"?: (e: CustomEvent<never>) => void;
}


export type QuietNumberTickerProps = {
  /** The starting value for the count. */
  "start-value"?: QuietNumberTicker['startValue'];
  /** The starting value for the count. */
  "startValue"?: QuietNumberTicker['startValue'];
  /** The target value to count to. */
  "end-value"?: QuietNumberTicker['endValue'];
  /** The target value to count to. */
  "endValue"?: QuietNumberTicker['endValue'];
  /** Duration of the animation in milliseconds. */
  "duration"?: QuietNumberTicker['duration'];
  /** Delay in milliseconds before counting starts. */
  "delay"?: QuietNumberTicker['delay'];
  /** Number of decimal places to display. */
  "decimal-places"?: QuietNumberTicker['decimalPlaces'];
  /** Number of decimal places to display. */
  "decimalPlaces"?: QuietNumberTicker['decimalPlaces'];
  /** Whether to group numbers, e.g. with a thousands separator. */
  "grouping"?: QuietNumberTicker['grouping'];
  /** Whether to start the animation when the component comes into view. */
  "start-on-view"?: QuietNumberTicker['startOnView'];
  /** Whether to start the animation when the component comes into view. */
  "startOnView"?: QuietNumberTicker['startOnView'];
  /** By default, no animation will occur when the user indicates a preference for reduced motion. Use this attribute to
override this behavior when necessary. */
  "ignore-reduced-motion"?: QuietNumberTicker['ignoreReducedMotion'];
  /** By default, no animation will occur when the user indicates a preference for reduced motion. Use this attribute to
override this behavior when necessary. */
  "ignoreReducedMotion"?: QuietNumberTicker['ignoreReducedMotion'];
  /** A custom formatting function to apply to the number. When set, `decimal-places` and `grouping` will be ignored.
Property only. */
  "valueFormatter"?: QuietNumberTicker['valueFormatter'];

  /** Emitted when the counting animation has completed. */
  "onquiet-animation-complete"?: (e: CustomEvent<never>) => void;
}


export type QuietPaginationProps = {
  /** A label to use to describe the control to assistive devices. Defaults to "Pagination" when not set. */
  "label"?: QuietPagination['label'];
  /** The total number of pages to show. */
  "total-pages"?: QuietPagination['totalPages'];
  /** The total number of pages to show. */
  "totalPages"?: QuietPagination['totalPages'];
  /** The current page. */
  "page"?: QuietPagination['page'];
  /** The number of pages to show on each side of the current page. Minimum 2. */
  "siblings"?: QuietPagination['siblings'];
  /** The number of pages to increase or decrease when jump buttons are clicked. */
  "jump"?: QuietPagination['jump'];
  /** How the pagination will display buttons. */
  "format"?: QuietPagination['format'];
  /** A string that, when provided, renders `<a>` elements instead of `<${tag}s>` using this as the link's template.
Use `$page` to indicate the page number, e.g. `"/path/to/$page"`. Alternatively, you can provide a JavaScript
function that accepts a page number and returns a URL. */
  "link-formatter"?: QuietPagination['linkFormatter'];
  /** A string that, when provided, renders `<a>` elements instead of `<${tag}s>` using this as the link's template.
Use `$page` to indicate the page number, e.g. `"/path/to/$page"`. Alternatively, you can provide a JavaScript
function that accepts a page number and returns a URL. */
  "linkFormatter"?: QuietPagination['linkFormatter'];
  /** Disables the pagination control. */
  "disabled"?: QuietPagination['disabled'];
  /** Determine's the pagination's appearance. */
  "appearance"?: QuietPagination['appearance'];
  /** Removes the previous and next buttons. */
  "without-nav"?: QuietPagination['withoutNav'];
  /** Removes the previous and next buttons. */
  "withoutNav"?: QuietPagination['withoutNav'];

  /** Emitted when the page is going to change but before it actually changes. Calling `event.preventDefault()` will prevent the page from changing. Inspect `event.detail` to get the `currentPage` and `requestedPage` properties. */
  "onquiet-before-page-change"?: (e: CustomEvent<never>) => void;
  /** Emitted after the page has been changed and the UI has been updated. */
  "onquiet-page-change"?: (e: CustomEvent<never>) => void;
}


export type QuietNumberProps = {
  /** The number to format. */
  "number"?: QuietNumber['number'];
  /** The formatting style to use. */
  "type"?: QuietNumber['type'];
  /** The currency to use when formatting currency. Must be an ISO 4217 currency code, e.g. "EUR" for euro. If not
provided, USD will be assumed. */
  "currency"?: QuietNumber['currency'];
  /** How to display the currency in currency formatting. */
  "currency-display"?: QuietNumber['currencyDisplay'];
  /** How to display the currency in currency formatting. */
  "currencyDisplay"?: QuietNumber['currencyDisplay'];
  /** In many locales, accounting format means to wrap the number with parentheses instead of appending a minus sign. */
  "currency-sign"?: QuietNumber['currencySign'];
  /** In many locales, accounting format means to wrap the number with parentheses instead of appending a minus sign. */
  "currencySign"?: QuietNumber['currencySign'];
  /** The unit to use in unit formatting. [Possible values can be found here.](https://tc39.es/ecma402/#table-sanctioned-single-unit-identifiers)
There is no default value. If the style is `unit`, this option must be provided. */
  "unit"?: QuietNumber['unit'];
  /** The unit formatting style to use in unit formatting. */
  "unit-display"?: QuietNumber['unitDisplay'];
  /** The unit formatting style to use in unit formatting. */
  "unitDisplay"?: QuietNumber['unitDisplay'];
  /** The minimum number of integer digits to use. A value with a smaller number of integer digits than this number will
be left-padded with zeros (to the specified length) when formatted. Possible values are from `1` to `21`. The
default is `1`. */
  "minimum-integer-digits"?: QuietNumber['minimumIntegerDigits'];
  /** The minimum number of integer digits to use. A value with a smaller number of integer digits than this number will
be left-padded with zeros (to the specified length) when formatted. Possible values are from `1` to `21`. The
default is `1`. */
  "minimumIntegerDigits"?: QuietNumber['minimumIntegerDigits'];
  /** The minimum number of fraction digits to use. Possible values are from `0` to `20`. */
  "minimum-fraction-digits"?: QuietNumber['minimumFractionDigits'];
  /** The minimum number of fraction digits to use. Possible values are from `0` to `20`. */
  "minimumFractionDigits"?: QuietNumber['minimumFractionDigits'];
  /** The maximum number of fraction digits to use. Possible values are from `0` to `20`. */
  "maximum-fraction-digits"?: QuietNumber['maximumFractionDigits'];
  /** The maximum number of fraction digits to use. Possible values are from `0` to `20`. */
  "maximumFractionDigits"?: QuietNumber['maximumFractionDigits'];
  /** The minimum number of significant digits to use. Possible values are from `1` to `21`; the default is `1`. */
  "minimum-significant-digits"?: QuietNumber['minimumSignificantDigits'];
  /** The minimum number of significant digits to use. Possible values are from `1` to `21`; the default is `1`. */
  "minimumSignificantDigits"?: QuietNumber['minimumSignificantDigits'];
  /** The maximum number of significant digits to use. Possible values are from `1` to `21`; the default is `21`. */
  "maximum-significant-digits"?: QuietNumber['maximumSignificantDigits'];
  /** The maximum number of significant digits to use. Possible values are from `1` to `21`; the default is `21`. */
  "maximumSignificantDigits"?: QuietNumber['maximumSignificantDigits'];
  /** Specifies how rounding conflicts will be resolved. */
  "rounding-priority"?: QuietNumber['roundingPriority'];
  /** Specifies how rounding conflicts will be resolved. */
  "roundingPriority"?: QuietNumber['roundingPriority'];
  /** Indicates the increment at which rounding should take place relative to the calculated rounding magnitude. Possible
values are `1`, `2`, `5`, `10`, `20`, `25`, `50`, `100`, `200`, `250`, `500`, `1000`, `2000`, `2500`, and `5000`.
Cannot be mixed with significant-digits rounding or any setting of `roundingPriority` other than auto. */
  "rounding-increment"?: QuietNumber['roundingIncrement'];
  /** Indicates the increment at which rounding should take place relative to the calculated rounding magnitude. Possible
values are `1`, `2`, `5`, `10`, `20`, `25`, `50`, `100`, `200`, `250`, `500`, `1000`, `2000`, `2500`, and `5000`.
Cannot be mixed with significant-digits rounding or any setting of `roundingPriority` other than auto. */
  "roundingIncrement"?: QuietNumber['roundingIncrement'];
  /** How decimals should be rounded. [See this page for more details.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#roundingmode) */
  "rounding-mode"?: QuietNumber['roundingMode'];
  /** How decimals should be rounded. [See this page for more details.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#roundingmode) */
  "roundingMode"?: QuietNumber['roundingMode'];
  /** The strategy for displaying trailing zeros on whole numbers. */
  "trailing-zero-display"?: QuietNumber['trailingZeroDisplay'];
  /** The strategy for displaying trailing zeros on whole numbers. */
  "trailingZeroDisplay"?: QuietNumber['trailingZeroDisplay'];
  /** The formatting that should be displayed for the number. */
  "notation"?: QuietNumber['notation'];
  /** Only used when `notation` is `compact`. */
  "compact-display"?: QuietNumber['compactDisplay'];
  /** Only used when `notation` is `compact`. */
  "compactDisplay"?: QuietNumber['compactDisplay'];
  /** Whether to use grouping separators, such as thousands separators or thousand/lakh/crore separators. */
  "grouping"?: QuietNumber['grouping'];
  /** When to display the sign for the number. */
  "sign-display"?: QuietNumber['signDisplay'];
  /** When to display the sign for the number. */
  "signDisplay"?: QuietNumber['signDisplay'];


}


export type QuietPasscodeProps = {
  /** The passcode's label. If you need to provide HTML in the label, use the `label` slot instead. */
  "label"?: QuietPasscode['label'];
  /** The passcode's description. If you need to provide HTML in the description, use the `description` slot instead. */
  "description"?: QuietPasscode['description'];
  /** The name of the passcode. This will be submitted with the form as a name/value pair. */
  "name"?: QuietPasscode['name'];
  /** The passcode's value. */
  "value"?: QuietPasscode['value'];
  /** The format of the passcode. This dictates the number of characters and where delimiters will show. Use `#` to
represent an allowed character. Use a space, dash, or any other character to represent a delimiter. Delimiters are
shown for visual clarity, but won't be included in the submitted value. */
  "format"?: QuietPasscode['format'];
  /** Disables the passcode. */
  "disabled"?: QuietPasscode['disabled'];
  /** The type of passcode to render. */
  "appearance"?: QuietPasscode['appearance'];
  /** The passcode's size. */
  "size"?: QuietPasscode['size'];
  /** Masks the characters so they're not displayed on screen.=. */
  "masked"?: QuietPasscode['masked'];
  /** The type of characters to allow in the input. */
  "type"?: QuietPasscode['type'];
  /** Makes the passcode case sensitive. */
  "case-sensitive"?: QuietPasscode['caseSensitive'];
  /** Makes the passcode case sensitive. */
  "caseSensitive"?: QuietPasscode['caseSensitive'];
  /** The form to associate this control with. If omitted, the closest containing `<form>` will be used. The value of
this attribute must be an ID of a form in the same document or shadow root. */
  "form"?: QuietPasscode['form'];
  /** Makes the passcode required. Form submission will not be allowed when this is set and the passcode is blank. */
  "required"?: QuietPasscode['required'];
  /** A regular expression the value should match to be considered valid. */
  "pattern"?: QuietPasscode['pattern'];
  /** Tells the browser how to autocomplete the passcode. See [this page](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete)
for available values. */
  "autocomplete"?: QuietPasscode['autocomplete'];
  /** Tells the browser to focus the passcode when the page loads or a dialog is shown. */
  "autofocus"?: QuietPasscode['autofocus'];
  /** Sets the enter key label on virtual keyboards. */
  "enterkeyhint"?: QuietPasscode['enterkeyhint'];
  /**  */
  "isInvalid"?: QuietPasscode['isInvalid'];
  /**  */
  "hadUserInteraction"?: QuietPasscode['hadUserInteraction'];
  /**  */
  "wasSubmitted"?: QuietPasscode['wasSubmitted'];

  /** Emitted when the passcode loses focus. This event does not bubble. */
  "onquiet-blur"?: (e: CustomEvent<never>) => void;
  /** Emitted when the user commits changes to the passcode's value. */
  "onquiet-change"?: (e: CustomEvent<never>) => void;
  /** Emitted when the passcode receives focus. This event does not bubble. */
  "onquiet-focus"?: (e: CustomEvent<never>) => void;
  /** Emitted when the passcode receives input. */
  "onquiet-input"?: (e: CustomEvent<never>) => void;
  /** Emitted when the final character in the passcode is entered. This is useful as a hook to verify the passcode as soon as it's typed in without requiring the user to explicitly submit it. */
  "onquiet-input-complete"?: (e: CustomEvent<never>) => void;
}


export type QuietPopoverProps = {
  /** The ID of of popover's anchor element. This must be an interactive/focusable element such as a button and it must
be in the same document as the popover. */
  "for"?: QuietPopover['for'];
  /** Shows or hides the popover. */
  "open"?: QuietPopover['open'];
  /** The placement of the popover in reference to the anchor. The menu will shift to a more optimal location if the
preferred placement doesn't have enough room. */
  "placement"?: QuietPopover['placement'];
  /** The distance of the popover from its anchor. */
  "distance"?: QuietPopover['distance'];
  /** The offset of the popover along its trigger. */
  "offset"?: QuietPopover['offset'];
  /** Renders the popover without an arrow. */
  "without-arrow"?: QuietPopover['withoutArrow'];
  /** Renders the popover without an arrow. */
  "withoutArrow"?: QuietPopover['withoutArrow'];

  /** Emitted when the popover is instructed to open but before it is shown. */
  "onquiet-before-open"?: (e: CustomEvent<never>) => void;
  /** Emitted when the popover has opened and the animation has completed. */
  "onquiet-open"?: (e: CustomEvent<never>) => void;
  /** Emitted when the popover is dismissed but before it is hidden. */
  "onquiet-before-close"?: (e: CustomEvent<never>) => void;
  /** Emitted when the popover has closed. and the animation has completed. */
  "onquiet-close"?: (e: CustomEvent<never>) => void;
}


export type QuietProgressProps = {
  /** A custom label for assistive devices. */
  "label"?: QuietProgress['label'];
  /** The type of progress bar to render. */
  "appearance"?: QuietProgress['appearance'];
  /** The progress bar's minimum value. */
  "min"?: QuietProgress['min'];
  /** The progress bar's maximum value. */
  "max"?: QuietProgress['max'];
  /** The progress bar's current value. */
  "value"?: QuietProgress['value'];
  /** When the completion status can't be determined, the progress bar is considered indeterminate and the value is
ignored. Useful for tasks whose progress can't be reported. */
  "indeterminate"?: QuietProgress['indeterminate'];


}


export type QuietRadioProps = {
  /** The radio's label. If you need to provide HTML in the label, use the `label` slot instead. */
  "label"?: QuietRadio['label'];
  /** The radio's description. If you need to provide HTML in the description, use the `description` slot instead. */
  "description"?: QuietRadio['description'];
  /** The name of the radio. This will be submitted with the form as a name/value pair. */
  "name"?: QuietRadio['name'];
  /** The radio's current value. Set this to change the selected item. */
  "value"?: QuietRadio['value'];
  /** The orientation of grouped items. */
  "orientation"?: QuietRadio['orientation'];
  /** The form to associate this control with. If omitted, the closest containing `<form>` will be used. The value of
this attribute must be an ID of a form in the same document or shadow root. */
  "form"?: QuietRadio['form'];
  /** Indicates at least one option in the radio is required. */
  "required"?: QuietRadio['required'];
  /** Disables the radio control. */
  "disabled"?: QuietRadio['disabled'];
  /**  */
  "group"?: QuietRadio['group'];
  /**  */
  "isInvalid"?: QuietRadio['isInvalid'];
  /**  */
  "hadUserInteraction"?: QuietRadio['hadUserInteraction'];
  /**  */
  "wasSubmitted"?: QuietRadio['wasSubmitted'];

  /** Emitted when the user commits changes to the radio's value. */
  "onquiet-change"?: (e: CustomEvent<never>) => void;
  /** Emitted when the radio receives input. */
  "onquiet-input"?: (e: CustomEvent<never>) => void;
}


export type QuietRadioItemProps = {
  /** The radio item's label. If you need to provide HTML in the label, use the `label` slot instead. */
  "label"?: QuietRadioItem['label'];
  /** The radio item's description. If you need to provide HTML in the description, use the `description` slot instead. */
  "description"?: QuietRadioItem['description'];
  /** The radio item's value. */
  "value"?: QuietRadioItem['value'];
  /** The radio item's checked state. */
  "checked"?: QuietRadioItem['checked'];
  /** Disables the radio item. */
  "disabled"?: QuietRadioItem['disabled'];
  /** The type of radio item to render. */
  "appearance"?: QuietRadioItem['appearance'];
  /** The radio item's size. */
  "size"?: QuietRadioItem['size'];

  /** Emitted when the radio item loses focus. This event does not bubble. */
  "onquiet-blur"?: (e: CustomEvent<never>) => void;
  /** Emitted when the radio item receives focus. This event does not bubble. */
  "onquiet-focus"?: (e: CustomEvent<never>) => void;
}


export type QuietRandomContentProps = {
  /** The number of items to show. */
  "items"?: QuietRandomContent['items'];
  /** The selection mode. The default is 'unique', which ensures different items are shown after calling `randomize()`,
when possible. Use `random` for true randomization or `sequence` to show the next set of items based on their DOM
position. */
  "mode"?: QuietRandomContent['mode'];


}


export type QuietQrProps = {
  /** A string of data to encode. URLs, email addresses, and other types of text are fine. */
  "data"?: QuietQr['data'];
  /** A descriptive label for assistive devices. This will not be shown, but it will be announced by screen readers. If
no label is provided, the raw data will be used instead. */
  "label"?: QuietQr['label'];
  /** Determines the level of error correction. The values correspond to those in the
[QR Code specification](https://www.qrcode.com/en/about/standards.html). */
  "error-correction"?: QuietQr['errorCorrection'];
  /** Determines the level of error correction. The values correspond to those in the
[QR Code specification](https://www.qrcode.com/en/about/standards.html). */
  "errorCorrection"?: QuietQr['errorCorrection'];
  /** The corner radius of the blocks that make up the QR code. For best results, keep this within 0–0.5. */
  "corners"?: QuietQr['corners'];
  /** The size of the resulting code in pixels. In most cases, 128–512 is ideal. */
  "size"?: QuietQr['size'];


}


export type QuietRatingProps = {
  /** The rating's label. If you need to provide HTML in the label, use the `label` slot instead. */
  "label"?: QuietRating['label'];
  /** The rating's description. If you need to provide HTML in the description, use the `description` slot instead. */
  "description"?: QuietRating['description'];
  /** The name of the rating. This will be submitted with the form as a name/value pair. */
  "name"?: QuietRating['name'];
  /** The rating's value. */
  "value"?: QuietRating['value'];
  /** Disables the rating. */
  "disabled"?: QuietRating['disabled'];
  /** Makes the rating a read-only field. */
  "readonly"?: QuietRating['readonly'];
  /** The rating's size. */
  "size"?: QuietRating['size'];
  /** The form to associate this control with. If omitted, the closest containing `<form>` will be used. The value of
this attribute must be an iD of a form in the same document or shadow root. */
  "form"?: QuietRating['form'];
  /** Makes the rating required. Form submission will not be allowed when this is set and the rating is empty. */
  "required"?: QuietRating['required'];
  /** The maximum value allowed. */
  "max"?: QuietRating['max'];
  /** The granularity the value must adhere to when incrementing and decrementing. */
  "step"?: QuietRating['step'];
  /** Tells the browser to focus the rating when the page loads or a dialog is shown. */
  "autofocus"?: QuietRating['autofocus'];
  /**  */
  "rating"?: QuietRating['rating'];
  /**  */
  "isInvalid"?: QuietRating['isInvalid'];
  /**  */
  "hadUserInteraction"?: QuietRating['hadUserInteraction'];
  /**  */
  "wasSubmitted"?: QuietRating['wasSubmitted'];
  /** A function that returns the HTML for each symbol. The function will receive the `value` and `isSelected` arguments
that you can use to customize the symbol based on specific values or whether the symbol is in the selected state.
You should only return trusted HTML from this function, otherwise you may become vulnerable to XSS exploits. */
  "symbolFormatter"?: QuietRating['symbolFormatter'];

  /** Emitted when the rating loses focus. This event does not bubble. */
  "onquiet-blur"?: (e: CustomEvent<never>) => void;
  /** Emitted when the user commits changes to the rating's value. */
  "onquiet-change"?: (e: CustomEvent<never>) => void;
  /** Emitted when the rating receives focus. This event does not bubble. */
  "onquiet-focus"?: (e: CustomEvent<never>) => void;
  /** Emitted when the rating receives input. */
  "onquiet-input"?: (e: CustomEvent<never>) => void;
}


export type QuietRelativeTimeProps = {
  /** The date from which to calculate the relative time from. If an attribute is passed, the date should be an [ISO 8601
string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString). If set
as a property, a `Date` object can be used instead. If unset, the current date will be assumed. */
  "date"?: QuietRelativeTime['date'];
  /** The style of date to render. */
  "format"?: QuietRelativeTime['format'];
  /** When `auto`, the date may produce strings such as "yesterday" instead of "1 day ago". */
  "numeric"?: QuietRelativeTime['numeric'];
  /** When set, the time will update itself. */
  "live"?: QuietRelativeTime['live'];


}


export type QuietResizeObserverProps = {
  /** Disables the resize observer. */
  "disabled"?: QuietResizeObserver['disabled'];
  /** Sets which box model the observer will observe changes to. */
  "box"?: QuietResizeObserver['box'];

  /** Emitted when a slotted element is resized. Like `ResizeObserver`, this event is also dispatched when each element is first observed. The `event.detail.entry` property contains a [`ResizeObserverEntry`](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserverEntry) with information about the element's dimensions. */
  "onquiet-resize"?: (e: CustomEvent<never>) => void;
}


export type QuietSearchListProps = {
  /** In most cases, you should slot the controller into the `controller` slot. However, when the controller must exist
outside the search list, you can set this property to the ID of an external `<input>` or `<quiet-text-field>`
element instead. */
  "controller"?: QuietSearchList['controller'];
  /** The search behavior to use when finding a matching item. The `exact` search is case-insensitive but requires an
exact match. The `fuzzy` search is more forgiving to typos. When using `custom`, you can set the `isMatch` property
to a custom function to determine if the provided query matches the element's content. */
  "match"?: QuietSearchList['match'];
  /** The time in milliseconds to use for debouncing the search results while the user types. */
  "debounce"?: QuietSearchList['debounce'];
  /**  */
  "results"?: QuietSearchList['results'];
  /**  */
  "query"?: QuietSearchList['query'];
  /**  */
  "isEmpty"?: QuietSearchList['isEmpty'];
  /**  */
  "isInitial"?: QuietSearchList['isInitial'];
  /**  */
  "resultsMessage"?: QuietSearchList['resultsMessage'];
  /** A custom search function you can provide to change the search behavior. The function is applied to each item when
the search query changes. The `query` argument is the current search term, `content` is a string containing the
element's searchable content, including its `textContent` and `data-keywords"`, and `el` is the element being
searched. Property only. */
  "isMatch"?: QuietSearchList['isMatch'];


}


export type QuietScrollerProps = {
  /** The scroller's orientation. */
  "orientation"?: QuietScroller['orientation'];
  /** Removes the visible scrollbar. */
  "without-scrollbar"?: QuietScroller['withoutScrollbar'];
  /** Removes the visible scrollbar. */
  "withoutScrollbar"?: QuietScroller['withoutScrollbar'];
  /** Removes the shadows. */
  "without-shadow"?: QuietScroller['withoutShadow'];
  /** Removes the shadows. */
  "withoutShadow"?: QuietScroller['withoutShadow'];
  /**  */
  "content"?: QuietScroller['content'];
  /**  */
  "canScroll"?: QuietScroller['canScroll'];


}


export type QuietShareProps = {
  /** A human-readable label to be shared. This is sometimes ignored by the operating system, but you should usually
provide it as a fallback value. */
  "label"?: QuietShare['label'];
  /** A string of text to be shared. */
  "text"?: QuietShare['text'];
  /** A URL to be shares. */
  "url"?: QuietShare['url'];
  /** An array of [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File) objects to be shared. Property only. */
  "files"?: QuietShare['files'];
  /** Disables the button. */
  "disabled"?: QuietShare['disabled'];
  /** The placement of the feedback animation when falling back to copying. */
  "feedback-placement"?: QuietShare['feedbackPlacement'];
  /** The placement of the feedback animation when falling back to copying. */
  "feedbackPlacement"?: QuietShare['feedbackPlacement'];


}


export type QuietSlideActivatorProps = {
  /** The label to show in the slide activator's track. If you need to provide HTML in the label, use the `label` slot
instead. */
  "label"?: QuietSlideActivator['label'];
  /** The label to show when the control is activated. If omitted, the regular label will be shown. If you need to
provide HTML in the label, use the `label` slot instead. */
  "activated-label"?: QuietSlideActivator['activatedLabel'];
  /** The label to show when the control is activated. If omitted, the regular label will be shown. If you need to
provide HTML in the label, use the `label` slot instead. */
  "activatedLabel"?: QuietSlideActivator['activatedLabel'];
  /** Reflects when the control is activated. Remove this attribute to deactivate it. */
  "activated"?: QuietSlideActivator['activated'];
  /** Disables the control. */
  "disabled"?: QuietSlideActivator['disabled'];
  /** Draws attention to the track by adding a subtle animation. */
  "attention"?: QuietSlideActivator['attention'];
  /**  */
  "thumb"?: QuietSlideActivator['thumb'];
  /**  */
  "isDragging"?: QuietSlideActivator['isDragging'];
  /**  */
  "isPressing"?: QuietSlideActivator['isPressing'];
  /**  */
  "thumbPosition"?: QuietSlideActivator['thumbPosition'];

  /** Emitted when the control will activate. Calling `event.preventDefault()` will prevent the activation from occurring. */
  "onquiet-before-activate"?: (e: CustomEvent<never>) => void;
  /** Emitted immediately after the control is activated. */
  "onquiet-activate"?: (e: CustomEvent<never>) => void;
  /** Emitted when the control will deactivate. Calling `event.preventDefault()` will prevent the deactivation from occurring. */
  "onquiet-before-deactivate"?: (e: CustomEvent<never>) => void;
  /** Emitted immediately after the control is deactivated. */
  "onquiet-deactivate"?: (e: CustomEvent<never>) => void;
  /** Emitted as the slider progresses. Use `event.details.percent` to see how far along it is. */
  "onquiet-progress"?: (e: CustomEvent<never>) => void;
}


export type QuietSelectProps = {
  /** The select's label. If you need to provide HTML in the label, use the `label` slot instead. */
  "label"?: QuietSelect['label'];
  /** The select's description. If you need to provide HTML in the description, use the `description` slot instead. */
  "description"?: QuietSelect['description'];
  /** The name of the select. This will be submitted with the form as a name/value pair. */
  "name"?: QuietSelect['name'];
  /** The select's value. */
  "value"?: QuietSelect['value'];
  /** Disables the select. */
  "disabled"?: QuietSelect['disabled'];
  /** Makes the select a read-only field. */
  "readonly"?: QuietSelect['readonly'];
  /** The type of select to render. */
  "appearance"?: QuietSelect['appearance'];
  /** The select's size. */
  "size"?: QuietSelect['size'];
  /** Draws the select in a pill shape. */
  "pill"?: QuietSelect['pill'];
  /** The form to associate this control with. If omitted, the closest containing `<form>` will be used. The value of
this attribute must be an ID of a form in the same document or shadow root. */
  "form"?: QuietSelect['form'];
  /** Makes the select required. Form submission will not be allowed when this is set and the select is blank. */
  "required"?: QuietSelect['required'];
  /** Tells the browser how to autocomplete the select. See [this page](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete)
for available values. */
  "autocomplete"?: QuietSelect['autocomplete'];
  /** Sets the enter key label on virtual keyboards. */
  "enterkeyhint"?: QuietSelect['enterkeyhint'];
  /**  */
  "isInvalid"?: QuietSelect['isInvalid'];
  /**  */
  "hadUserInteraction"?: QuietSelect['hadUserInteraction'];
  /**  */
  "wasSubmitted"?: QuietSelect['wasSubmitted'];
  /**  */
  "options"?: QuietSelect['options'];

  /** Emitted when the select loses focus. This event does not bubble. */
  "onquiet-blur"?: (e: CustomEvent<never>) => void;
  /** Emitted when the user commits changes to the select's value. */
  "onquiet-change"?: (e: CustomEvent<never>) => void;
  /** Emitted when the select receives focus. This event does not bubble. */
  "onquiet-focus"?: (e: CustomEvent<never>) => void;
  /** Emitted when the select receives input. */
  "onquiet-input"?: (e: CustomEvent<never>) => void;
}


export type QuietSliderProps = {
  /** The slider's label. If you need to provide HTML in the label, use the `label` slot instead. */
  "label"?: QuietSlider['label'];
  /** The slider's description. If you need to provide HTML in the description, use the `description` slot instead. */
  "description"?: QuietSlider['description'];
  /** The name of the slider. This will be submitted with the form as a name/value pair. */
  "name"?: QuietSlider['name'];
  /** The slider's value. */
  "value"?: QuietSlider['value'];
  /** The minimum value of a range selection. Used only when range attribute is set. */
  "min-value"?: QuietSlider['minValue'];
  /** The minimum value of a range selection. Used only when range attribute is set. */
  "minValue"?: QuietSlider['minValue'];
  /** The maximum value of a range selection. Used only when range attribute is set. */
  "max-value"?: QuietSlider['maxValue'];
  /** The maximum value of a range selection. Used only when range attribute is set. */
  "maxValue"?: QuietSlider['maxValue'];
  /** Converts the slider to a range slider with two thumbs. */
  "range"?: QuietSlider['range'];
  /** Disables the slider. */
  "disabled"?: QuietSlider['disabled'];
  /** Makes the slider a read-only field. */
  "readonly"?: QuietSlider['readonly'];
  /** The orientation of the slider. */
  "orientation"?: QuietSlider['orientation'];
  /** The slider's size. */
  "size"?: QuietSlider['size'];
  /** The starting value from which to draw the slider's fill, which is based on its current value. */
  "indicator-offset"?: QuietSlider['indicatorOffset'];
  /** The starting value from which to draw the slider's fill, which is based on its current value. */
  "indicatorOffset"?: QuietSlider['indicatorOffset'];
  /** The form to associate this control with. If omitted, the closest containing `<form>` will be used. The value of
this attribute must be an ID of a form in the same document or shadow root. */
  "form"?: QuietSlider['form'];
  /** The minimum value allowed. */
  "min"?: QuietSlider['min'];
  /** The maximum value allowed. */
  "max"?: QuietSlider['max'];
  /** The granularity the value must adhere to when incrementing and decrementing. */
  "step"?: QuietSlider['step'];
  /** Tells the browser to focus the slider when the page loads or a dialog is shown. */
  "autofocus"?: QuietSlider['autofocus'];
  /** The distance of the tooltip from the slider's thumb. */
  "tooltip-distance"?: QuietSlider['tooltipDistance'];
  /** The distance of the tooltip from the slider's thumb. */
  "tooltipDistance"?: QuietSlider['tooltipDistance'];
  /** The placement of the tooltip in reference to the slider's thumb. */
  "tooltip-placement"?: QuietSlider['tooltipPlacement'];
  /** The placement of the tooltip in reference to the slider's thumb. */
  "tooltipPlacement"?: QuietSlider['tooltipPlacement'];
  /** Draws markers at each step along the slider. */
  "with-markers"?: QuietSlider['withMarkers'];
  /** Draws markers at each step along the slider. */
  "withMarkers"?: QuietSlider['withMarkers'];
  /** Draws a tooltip above the thumb when the control has focus or is dragged. */
  "with-tooltip"?: QuietSlider['withTooltip'];
  /** Draws a tooltip above the thumb when the control has focus or is dragged. */
  "withTooltip"?: QuietSlider['withTooltip'];
  /**  */
  "slider"?: QuietSlider['slider'];
  /**  */
  "thumb"?: QuietSlider['thumb'];
  /**  */
  "thumbMin"?: QuietSlider['thumbMin'];
  /**  */
  "thumbMax"?: QuietSlider['thumbMax'];
  /**  */
  "track"?: QuietSlider['track'];
  /**  */
  "tooltip"?: QuietSlider['tooltip'];
  /**  */
  "tooltipMin"?: QuietSlider['tooltipMin'];
  /**  */
  "tooltipMax"?: QuietSlider['tooltipMax'];
  /**  */
  "isInvalid"?: QuietSlider['isInvalid'];
  /**  */
  "hadUserInteraction"?: QuietSlider['hadUserInteraction'];
  /**  */
  "wasSubmitted"?: QuietSlider['wasSubmitted'];
  /** A custom formatting function to apply to the value. This will be shown in the tooltip and announced by screen
readers. Must be set with JavaScript. Property only. */
  "valueFormatter"?: QuietSlider['valueFormatter'];

  /** Emitted when the slider loses focus. This event does not bubble. */
  "onquiet-blur"?: (e: CustomEvent<never>) => void;
  /** Emitted when the user commits changes to the slider's value. */
  "onquiet-change"?: (e: CustomEvent<never>) => void;
  /** Emitted when the slider receives focus. This event does not bubble. */
  "onquiet-focus"?: (e: CustomEvent<never>) => void;
  /** Emitted when the slider receives input. */
  "onquiet-input"?: (e: CustomEvent<never>) => void;
}


export type QuietSparklineProps = {
  /** An accessible label for the sparkline. This will be read by screen readers for users who can't see the chart, so
make sure to describe it appropriately. */
  "label"?: QuietSparkline['label'];
  /** A space-separated list of positive values to show in the sparkline, e.g. "10 25 18 30". At least two values are
required to generate a chart. */
  "data"?: QuietSparkline['data'];
  /** Determines the sparkline's appearance. */
  "appearance"?: QuietSparkline['appearance'];
  /** Draws the component with colors to visually indicate the specified trend. */
  "trend"?: QuietSparkline['trend'];
  /** The interpolation method used to connect data points on the line. */
  "curve"?: QuietSparkline['curve'];
  /**  */
  "points"?: QuietSparkline['points'];


}


export type QuietSpinnerProps = {
  /** A custom label for screen readers. */
  "label"?: QuietSpinner['label'];


}


export type QuietSpoilerProps = {
  /** Shows or hides the spoiler's content. */
  "visible"?: QuietSpoiler['visible'];
  /** Renders the spoiler inline. */
  "inline"?: QuietSpoiler['inline'];
  /** Removes the hide button and persists the content when shown. */
  "persist"?: QuietSpoiler['persist'];
  /** Determines how the spoiler is hidden. */
  "effect"?: QuietSpoiler['effect'];
  /** The spoiler's label. If you need to provide HTML in the label, use the `label` slot instead. */
  "label"?: QuietSpoiler['label'];
  /** When more than one spoilers share the same name, only will be shown at a time. */
  "name"?: QuietSpoiler['name'];


}


export type QuietSplitterProps = {
  /** The current position of the divider as a decimal (0-1). */
  "position"?: QuietSplitter['position'];
  /** The orientation of the splitter. */
  "orientation"?: QuietSplitter['orientation'];
  /** Disables the splitter, preventing it from being focused and resized. */
  "disabled"?: QuietSplitter['disabled'];
  /** A space-separated list of percentage snap points, e.g. "25% 50% 75%". */
  "snap"?: QuietSplitter['snap'];
  /** The maximum distance (in pixels) within which the divider will snap to a specified snap point. */
  "snap-threshold"?: QuietSplitter['snapThreshold'];
  /** The maximum distance (in pixels) within which the divider will snap to a specified snap point. */
  "snapThreshold"?: QuietSplitter['snapThreshold'];
  /**  */
  "isCollapsed"?: QuietSplitter['isCollapsed'];
  /**  */
  "isDragging"?: QuietSplitter['isDragging'];

  /** Dispatched when the splitter's handle is moved. */
  "onquiet-resize"?: (e: CustomEvent<never>) => void;
}


export type QuietStampProps = {
  /** The ID of the `<template>` element to use as a stamp. */
  "template"?: QuietStamp['template'];
  /** When true, the stamped content will replace the `<quiet-stamp>` element instead of being appended to it. This can
be useful for controlling exactly what appears in the DOM, but it can also be confusing for developers who may not
understand how the stamped content was generated. */
  "replace"?: QuietStamp['replace'];


}


export type QuietSwitchProps = {
  /** The switch's label. If you need to provide HTML in the label, use the `label` slot instead. */
  "label"?: QuietSwitch['label'];
  /** The switch's description. If you need to provide HTML in the description, use the `description` slot instead. */
  "description"?: QuietSwitch['description'];
  /** The name of the switch. This will be submitted with the form as a name/value pair. */
  "name"?: QuietSwitch['name'];
  /** The switch's value. */
  "value"?: QuietSwitch['value'];
  /** The switch's checked state. */
  "checked"?: QuietSwitch['checked'];
  /** Disables the switch. */
  "disabled"?: QuietSwitch['disabled'];
  /** The switch's size. */
  "size"?: QuietSwitch['size'];
  /** The form to associate this control with. If omitted, the closest containing `<form>` will be used. The value of
this attribute must be an ID of a form in the same document or shadow root. */
  "form"?: QuietSwitch['form'];
  /** Makes the switch required. Form submission will not be allowed until the switch is checked. */
  "required"?: QuietSwitch['required'];
  /**  */
  "isInvalid"?: QuietSwitch['isInvalid'];
  /**  */
  "hadUserInteraction"?: QuietSwitch['hadUserInteraction'];
  /**  */
  "wasSubmitted"?: QuietSwitch['wasSubmitted'];

  /** Emitted when the switch loses focus. This event does not bubble. */
  "onquiet-blur"?: (e: CustomEvent<never>) => void;
  /** Emitted when the user commits changes to the switch's value. */
  "onquiet-change"?: (e: CustomEvent<never>) => void;
  /** Emitted when the switch receives focus. This event does not bubble. */
  "onquiet-focus"?: (e: CustomEvent<never>) => void;
  /** Emitted when the switch receives input. */
  "onquiet-input"?: (e: CustomEvent<never>) => void;
}


export type QuietTabProps = {
  /** The name of the tab panel this tab will link to. The tab panel must be an HTML element inside the
`<quiet-tab-list>` element with a `name` attribute. */
  "panel"?: QuietTab['panel'];
  /** Disables the tab, preventing it from being activated. */
  "disabled"?: QuietTab['disabled'];


}


export type QuietTabListProps = {
  /** An accessible label for the tab list. This won't be visible, but it will be read to assistive devices so you should
always include one. */
  "label"?: QuietTabList['label'];
  /** The name of the tab panel that's currently active. */
  "tab"?: QuietTabList['tab'];
  /** The placement of tab controls. */
  "placement"?: QuietTabList['placement'];

  /** Emitted after a tab is shown. The event will include a `detail` object with `tab` and `panel`properties that reference the respective tab and panel elements. */
  "onquiet-tab-shown"?: (e: CustomEvent<never>) => void;
  /** Emitted after a tab is hidden. The event will include a `detail` object with `tab` and `panel` properties that reference the respective tab and panel elements. */
  "onquiet-tab-hidden"?: (e: CustomEvent<never>) => void;
}


export type QuietTabPanelProps = {
  /** The name of the tab panel. Used for assigning tabs to panels. */
  "name"?: QuietTabPanel['name'];


}


export type QuietTextAreaProps = {
  /** The text area's label. If you need to provide HTML in the label, use the `label` slot instead. */
  "label"?: QuietTextArea['label'];
  /** The text area's description. If you need to provide HTML in the description, use the `description` slot instead. */
  "description"?: QuietTextArea['description'];
  /** The name of the text area. This will be submitted with the form as a name/value pair. */
  "name"?: QuietTextArea['name'];
  /** The text area's value. */
  "value"?: QuietTextArea['value'];
  /** A placeholder to show in the text area when it's blank. */
  "placeholder"?: QuietTextArea['placeholder'];
  /** Disables the text area. */
  "disabled"?: QuietTextArea['disabled'];
  /** Makes the text area a read-only area. */
  "readonly"?: QuietTextArea['readonly'];
  /** Determines how the text area can be resized. */
  "resize"?: QuietTextArea['resize'];
  /** The default number of rows visible in the text area. */
  "rows"?: QuietTextArea['rows'];
  /** The type of text area to render. */
  "appearance"?: QuietTextArea['appearance'];
  /** The text area's size. */
  "size"?: QuietTextArea['size'];
  /** The form to associate this control with. If omitted, the closest containing `<form>` will be used. The value of
this attribute must be an ID of a form in the same document or shadow root. */
  "form"?: QuietTextArea['form'];
  /** Makes the text area required. Form submission will not be allowed when this is set and the text area is blank. */
  "required"?: QuietTextArea['required'];
  /** The minimum string length that will be considered valid. */
  "minlength"?: QuietTextArea['minLength'];
  /** The minimum string length that will be considered valid. */
  "minLength"?: QuietTextArea['minLength'];
  /** The maximum string length that will be considered valid. */
  "maxlength"?: QuietTextArea['maxLength'];
  /** The maximum string length that will be considered valid. */
  "maxLength"?: QuietTextArea['maxLength'];
  /** Turns autocapitalize on or off in supported browsers. */
  "autocapitalize"?: QuietTextArea['autocapitalize'];
  /** Tells the browser how to autocomplete the text area. See [this page](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete)
for available values. */
  "autocomplete"?: QuietTextArea['autocomplete'];
  /** Turns autocorrect on or off in supported browsers. */
  "autocorrect"?: QuietTextArea['autocorrect'];
  /** Tells the browser to focus the text area when the page loads or a dialog is shown. */
  "autofocus"?: QuietTextArea['autofocus'];
  /** Sets the enter key label on virtual keyboards. */
  "enterkeyhint"?: QuietTextArea['enterkeyhint'];
  /** Provides the browser with a hint about the type of data that might be entered by the user, allowing the appropriate
virtual keyboard to be displayed on supported devices. */
  "inputmode"?: QuietTextArea['inputmode'];
  /** Turns spell checking on or off in supported browsers. */
  "spellcheck"?: QuietTextArea['spellcheck'];
  /**  */
  "isInvalid"?: QuietTextArea['isInvalid'];
  /**  */
  "hadUserInteraction"?: QuietTextArea['hadUserInteraction'];
  /**  */
  "wasSubmitted"?: QuietTextArea['wasSubmitted'];

  /** Emitted when the text area loses focus. This event does not bubble. */
  "onquiet-blur"?: (e: CustomEvent<never>) => void;
  /** Emitted when the user commits changes to the text area's value. */
  "onquiet-change"?: (e: CustomEvent<never>) => void;
  /** Emitted when the text area receives focus. This event does not bubble. */
  "onquiet-focus"?: (e: CustomEvent<never>) => void;
  /** Emitted when the text area receives input. */
  "onquiet-input"?: (e: CustomEvent<never>) => void;
}


export type QuietTextMaskProps = {
  /** The URL of the image to use for the mask. */
  "image"?: QuietTextMask['image'];
  /** Creates a parallax-like effect where the image stays fixed while scrolling */
  "fixed"?: QuietTextMask['fixed'];


}


export type QuietTextFieldProps = {
  /** The text field's label. If you need to provide HTML in the label, use the `label` slot instead. */
  "label"?: QuietTextField['label'];
  /** The text field's description. If you need to provide HTML in the description, use the `description` slot instead. */
  "description"?: QuietTextField['description'];
  /** The name of the text field. This will be submitted with the form as a name/value pair. */
  "name"?: QuietTextField['name'];
  /** The text field's value. */
  "value"?: QuietTextField['value'];
  /** A placeholder to show in the text field when it's blank. */
  "placeholder"?: QuietTextField['placeholder'];
  /** Disables the text field. */
  "disabled"?: QuietTextField['disabled'];
  /** Makes the text field a read-only field. */
  "readonly"?: QuietTextField['readonly'];
  /** Adds a clear button to the text field when it's not blank. */
  "with-clear"?: QuietTextField['withClear'];
  /** Adds a clear button to the text field when it's not blank. */
  "withClear"?: QuietTextField['withClear'];
  /** The type of text field to render. */
  "appearance"?: QuietTextField['appearance'];
  /** The text field's size. */
  "size"?: QuietTextField['size'];
  /** Draws the text field in a pill shape. */
  "pill"?: QuietTextField['pill'];
  /** The type of data the text field will accept. */
  "type"?: QuietTextField['type'];
  /** The form to associate this control with. If omitted, the closest containing `<form>` will be used. The value of
this attribute must be an ID of a form in the same document or shadow root. */
  "form"?: QuietTextField['form'];
  /** Makes the text field required. Form submission will not be allowed when this is set and the text field is blank. */
  "required"?: QuietTextField['required'];
  /** A regular expression the value should match to be considered valid. */
  "pattern"?: QuietTextField['pattern'];
  /** The minimum string length that will be considered valid. */
  "minlength"?: QuietTextField['minLength'];
  /** The minimum string length that will be considered valid. */
  "minLength"?: QuietTextField['minLength'];
  /** The maximum string length that will be considered valid. */
  "maxlength"?: QuietTextField['maxLength'];
  /** The maximum string length that will be considered valid. */
  "maxLength"?: QuietTextField['maxLength'];
  /** The minimum value for date/time types. */
  "min"?: QuietTextField['min'];
  /** The maximum value for date/time types. */
  "max"?: QuietTextField['max'];
  /** The granularity the value must adhere to when incrementing and decrementing. */
  "step"?: QuietTextField['step'];
  /** Turns autocapitalize on or off in supported browsers. */
  "autocapitalize"?: QuietTextField['autocapitalize'];
  /** Tells the browser how to autocomplete the text field. See [this page](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete)
for available values. */
  "autocomplete"?: QuietTextField['autocomplete'];
  /** Turns autocorrect on or off in supported browsers. */
  "autocorrect"?: QuietTextField['autocorrect'];
  /** Tells the browser to focus the text field when the page loads or a dialog is shown. */
  "autofocus"?: QuietTextField['autofocus'];
  /** Sets the enter key label on virtual keyboards. */
  "enterkeyhint"?: QuietTextField['enterkeyhint'];
  /** Provides the browser with a hint about the type of data that might be entered by the user, allowing the appropriate
virtual keyboard to be displayed on supported devices. */
  "inputmode"?: QuietTextField['inputmode'];
  /** Turns spell checking on or off in supported browsers. */
  "spellcheck"?: QuietTextField['spellcheck'];
  /**  */
  "isInvalid"?: QuietTextField['isInvalid'];
  /**  */
  "hadUserInteraction"?: QuietTextField['hadUserInteraction'];
  /**  */
  "wasSubmitted"?: QuietTextField['wasSubmitted'];
  /**  */
  "isPasswordVisible"?: QuietTextField['isPasswordVisible'];

  /** Emitted when the text field loses focus. This event does not bubble. */
  "onquiet-blur"?: (e: CustomEvent<never>) => void;
  /** Emitted when the user commits changes to the text field's value. */
  "onquiet-change"?: (e: CustomEvent<never>) => void;
  /** Emitted when the text field receives focus. This event does not bubble. */
  "onquiet-focus"?: (e: CustomEvent<never>) => void;
  /** Emitted when the text field receives input. */
  "onquiet-input"?: (e: CustomEvent<never>) => void;
}


export type QuietTimedContentProps = {
  /** The date to start showing the content. */
  "start-date"?: QuietTimedContent['startDate'];
  /** The date to start showing the content. */
  "startDate"?: QuietTimedContent['startDate'];
  /** The date to stop showing the content. */
  "end-date"?: QuietTimedContent['endDate'];
  /** The date to stop showing the content. */
  "endDate"?: QuietTimedContent['endDate'];
  /** When set, the content will update as the time changes. */
  "live"?: QuietTimedContent['live'];


}


export type QuietToastProps = {
  /** The placement of the toast stack on the screen. */
  "placement"?: QuietToast['placement'];
  /**  */
  "stack"?: QuietToast['stack'];
  /**  */
  "transitionGroup"?: QuietToast['transitionGroup'];
  /** A custom animation to use for enter/exit transitions. This gets passed through to the internal transition group.
Works well with animations from `@quietui/scurry`. (Property only) */
  "transitionAnimation"?: QuietToast['transitionAnimation'];


}


export type QuietToastItemProps = {
  /** The type of notification to render. */
  "variant"?: QuietToastItem['variant'];
  /** The length of time to show the notification before removing it. Set this to `0` to show the notification until the
user dismisses it. */
  "duration"?: QuietToastItem['duration'];
  /** When set, the close button will be omitted. */
  "without-close"?: QuietToastItem['withoutClose'];
  /** When set, the close button will be omitted. */
  "withoutClose"?: QuietToastItem['withoutClose'];

  /** Emitted when the toast item is dismissed. */
  "onquiet-before-close"?: (e: CustomEvent<never>) => void;
  /** Emitted after the toast has been dismissed and the hide animation has completed. */
  "onquiet-close"?: (e: CustomEvent<never>) => void;
}


export type QuietToggleIconProps = {
  /** The toggle icon's label. The label won't be displayed, but it will be announced by assistive devices. */
  "label"?: QuietToggleIcon['label'];
  /** The name of the toggle icon. This will be submitted with the form as a name/value pair. */
  "name"?: QuietToggleIcon['name'];
  /** The toggle icon's value. */
  "value"?: QuietToggleIcon['value'];
  /** The toggle icon's checked state. */
  "checked"?: QuietToggleIcon['checked'];
  /** Disables the toggle icon. */
  "disabled"?: QuietToggleIcon['disabled'];
  /** The checkbox's size. */
  "size"?: QuietToggleIcon['size'];
  /** The animation to use when toggling. */
  "effect"?: QuietToggleIcon['effect'];
  /** The form to associate this control with. If omitted, the closest containing `<form>` will be used. The value of
this attribute must be an ID of a form in the same document or shadow root. */
  "form"?: QuietToggleIcon['form'];
  /** Makes the toggle icon required. Form submission will not be allowed until the toggle icon is checked. */
  "required"?: QuietToggleIcon['required'];
  /**  */
  "button"?: QuietToggleIcon['button'];
  /**  */
  "isInvalid"?: QuietToggleIcon['isInvalid'];
  /**  */
  "hadUserInteraction"?: QuietToggleIcon['hadUserInteraction'];
  /**  */
  "wasSubmitted"?: QuietToggleIcon['wasSubmitted'];

  /** Emitted when the toggle icon loses focus. This event does not bubble. */
  "onquiet-blur"?: (e: CustomEvent<never>) => void;
  /** Emitted when the user commits changes to the toggle's value. */
  "onquiet-change"?: (e: CustomEvent<never>) => void;
  /** Emitted when the checkbox receives focus. This event does not bubble. */
  "onquiet-focus"?: (e: CustomEvent<never>) => void;
  /** Emitted when the checkbox receives input. */
  "onquiet-input"?: (e: CustomEvent<never>) => void;
}


export type QuietToggleTagProps = {
  /** The toggle tag's label. If you need to provide HTML in the label, use the `label` slot instead. */
  "label"?: QuietToggleTag['label'];
  /** The name of the toggle tag. This will be submitted with the form as a name/value pair. */
  "name"?: QuietToggleTag['name'];
  /** The toggle tag's value. */
  "value"?: QuietToggleTag['value'];
  /** The toggle tag's checked state. */
  "checked"?: QuietToggleTag['checked'];
  /** Disables the toggle tag. */
  "disabled"?: QuietToggleTag['disabled'];
  /** The toggle tag's size. */
  "size"?: QuietToggleTag['size'];
  /** The form to associate this control with. If omitted, the closest containing `<form>` will be used. The value of
this attribute must be an ID of a form in the same document or shadow root. */
  "form"?: QuietToggleTag['form'];
  /** Makes the toggle tag required. Form submission will not be allowed until the toggle tag is checked. */
  "required"?: QuietToggleTag['required'];
  /**  */
  "isInvalid"?: QuietToggleTag['isInvalid'];
  /**  */
  "hadUserInteraction"?: QuietToggleTag['hadUserInteraction'];
  /**  */
  "wasSubmitted"?: QuietToggleTag['wasSubmitted'];

  /** Emitted when the toggle tag loses focus. This event does not bubble. */
  "onquiet-blur"?: (e: CustomEvent<never>) => void;
  /** Emitted when the user commits changes to the toggle tag's value. */
  "onquiet-change"?: (e: CustomEvent<never>) => void;
  /** Emitted when the toggle tag receives focus. This event does not bubble. */
  "onquiet-focus"?: (e: CustomEvent<never>) => void;
  /** Emitted when the toggle tag receives input. */
  "onquiet-input"?: (e: CustomEvent<never>) => void;
}


export type QuietToolbarProps = {
  /** The toolbar's orientation. This changes which arrow keys are used to select adjacent buttons. */
  "orientation"?: QuietToolbar['orientation'];


}


export type QuietTooltipProps = {
  /** The ID of the tooltip's anchor element. This must be an interactive/focusable element such as a button and it must
be in the same document as the tooltip. */
  "for"?: QuietTooltip['for'];
  /** Shows or hides the tooltip. */
  "open"?: QuietTooltip['open'];
  /** The placement of the tooltip in reference to the anchor. The menu will shift to a more optimal location if the
preferred placement doesn't have enough room. */
  "placement"?: QuietTooltip['placement'];
  /** The distance of the tooltip from its anchor. */
  "distance"?: QuietTooltip['distance'];
  /** The offset of the tooltip along its trigger. */
  "offset"?: QuietTooltip['offset'];
  /** The number of milliseconds to wait before opening the tooltip when hovering in. */
  "open-delay"?: QuietTooltip['openDelay'];
  /** The number of milliseconds to wait before opening the tooltip when hovering in. */
  "openDelay"?: QuietTooltip['openDelay'];
  /** The number of milliseconds to wait before closing the tooltip when hovering out. */
  "close-delay"?: QuietTooltip['closeDelay'];
  /** The number of milliseconds to wait before closing the tooltip when hovering out. */
  "closeDelay"?: QuietTooltip['closeDelay'];
  /** By default, the tooltip automatically shows when the user focuses or hovers over the anchor. If you want to control
the tooltip programmatically, set this to `manual`. */
  "activation"?: QuietTooltip['activation'];
  /** Renders the tooltip without an arrow. */
  "without-arrow"?: QuietTooltip['withoutArrow'];
  /** Renders the tooltip without an arrow. */
  "withoutArrow"?: QuietTooltip['withoutArrow'];

  /** Emitted when the tooltip is instructed to open but before it is shown. */
  "onquiet-before-open"?: (e: CustomEvent<never>) => void;
  /** Emitted when the tooltip has opened and the animation has completed. */
  "onquiet-open"?: (e: CustomEvent<never>) => void;
  /** Emitted when the tooltip is dismissed but before it is hidden. */
  "onquiet-before-close"?: (e: CustomEvent<never>) => void;
  /** Emitted when the tooltip has closed. and the animation has completed. */
  "onquiet-close"?: (e: CustomEvent<never>) => void;
}


export type QuietTypewriterProps = {
  /** The text to type out. Multiple lines can be separated by the delimiter. */
  "text"?: QuietTypewriter['text'];
  /** The delimiter used to separate multiple lines of text. */
  "delimiter"?: QuietTypewriter['delimiter'];
  /** The average speed in milliseconds to wait between typing each character. */
  "speed"?: QuietTypewriter['speed'];
  /** Delay in milliseconds before the animation starts. */
  "delay"?: QuietTypewriter['delay'];
  /** Whether to start the animation when the component comes into view. */
  "start-on-view"?: QuietTypewriter['startOnView'];
  /** Whether to start the animation when the component comes into view. */
  "startOnView"?: QuietTypewriter['startOnView'];
  /** Whether to show a blinking cursor during animation. */
  "with-cursor"?: QuietTypewriter['withCursor'];
  /** Whether to show a blinking cursor during animation. */
  "withCursor"?: QuietTypewriter['withCursor'];
  /** Whether to loop the animation with a pause and backspace effect. */
  "loop"?: QuietTypewriter['loop'];
  /** Duration in milliseconds to pause before backspacing when looping. */
  "loop-delay"?: QuietTypewriter['loopDelay'];
  /** Duration in milliseconds to pause before backspacing when looping. */
  "loopDelay"?: QuietTypewriter['loopDelay'];
  /** Whether to pause the typewriter animation. */
  "pause"?: QuietTypewriter['pause'];
  /** By default, no animation will occur when the user indicates a preference for reduced motion. Use this attribute to
override this behavior when necessary. */
  "ignore-reduced-motion"?: QuietTypewriter['ignoreReducedMotion'];
  /** By default, no animation will occur when the user indicates a preference for reduced motion. Use this attribute to
override this behavior when necessary. */
  "ignoreReducedMotion"?: QuietTypewriter['ignoreReducedMotion'];

  /** Emitted when the typing animation has completed. */
  "onquiet-animation-complete"?: (e: CustomEvent<never>) => void;
}


export type QuietVeilProps = {
  /** The label for screen readers when veil is active. */
  "label"?: QuietVeil['label'];
  /** Description of the property. */
  "active"?: QuietVeil['active'];
  /** Set to true to show the veil over the entire viewport instead of the content inside of it. */
  "fullscreen"?: QuietVeil['fullscreen'];
  /**  */
  "front"?: QuietVeil['front'];
  /**  */
  "dialog"?: QuietVeil['dialog'];

  /** Emitted when the veil will activate. Calling `event.preventDefault()` will prevent the activation from occurring. */
  "onquiet-before-activate"?: (e: CustomEvent<never>) => void;
  /** Emitted immediately after the veil is activated. */
  "onquiet-activate"?: (e: CustomEvent<never>) => void;
  /** Emitted when the veil will deactivate. Calling `event.preventDefault()` will prevent the deactivation from occurring. */
  "onquiet-before-deactivate"?: (e: CustomEvent<never>) => void;
  /** Emitted immediately after the veil is deactivated. */
  "onquiet-deactivate"?: (e: CustomEvent<never>) => void;
}


export type QuietTransitionGroupProps = {
  /** Disables transition animations. However, the `quiet-content-changed` and `quiet-transition-end` events will still
be dispatched. */
  "disable-transitions"?: QuietTransitionGroup['disableTransitions'];
  /** Disables transition animations. However, the `quiet-content-changed` and `quiet-transition-end` events will still
be dispatched. */
  "disableTransitions"?: QuietTransitionGroup['disableTransitions'];
  /** By default, no animation will occur when the user indicates a preference for reduced motion. Use this attribute to
override this behavior when necessary. */
  "ignore-reduced-motion"?: QuietTransitionGroup['ignoreReducedMotion'];
  /** By default, no animation will occur when the user indicates a preference for reduced motion. Use this attribute to
override this behavior when necessary. */
  "ignoreReducedMotion"?: QuietTransitionGroup['ignoreReducedMotion'];
  /** Determines if the transition group is currently animating. (Property only) */
  "isTransitioning"?: QuietTransitionGroup['isTransitioning'];
  /** A custom animation to use for enter/exit transitions. Works well with animations from `@quietui/scurry`.
(Property only) */
  "transitionAnimation"?: QuietTransitionGroup['transitionAnimation'];
  /** By default, the transition group observes and animates its own children. In some cases, you may want it to control
another element's children. This is useful in cases where you can't directly wrap child elements with the
`<quiet-transition-group>` element.

For example, if you embed a transition group in a component's shadow root but need it to control slotted (light
DOM) elements, you can't simply wrap the slot because the mutation observer can't see projected (slotted) elements.
In this case, point this property to the target element and the transition group will hide itself and observe the
target container's children instead. (Property only) */
  "transitionContainer"?: QuietTransitionGroup['transitionContainer'];

  /** Emitted when content changes and before the transition animation begins. */
  "onquiet-content-changed"?: (e: CustomEvent<never>) => void;
  /** Emitted when transition animations end. */
  "onquiet-transition-end"?: (e: CustomEvent<never>) => void;
}


export type QuietZoomableFrameProps = {
  /** The URL of the content to display. */
  "src"?: QuietZoomableFrame['src'];
  /** Inline HTML to display. */
  "srcdoc"?: QuietZoomableFrame['srcdoc'];
  /** Allows fullscreen mode. */
  "allowfullscreen"?: QuietZoomableFrame['allowfullscreen'];
  /** Controls iframe loading behavior. */
  "loading"?: QuietZoomableFrame['loading'];
  /** Controls referrer information. */
  "referrerpolicy"?: QuietZoomableFrame['referrerpolicy'];
  /** Security restrictions for the iframe. */
  "sandbox"?: QuietZoomableFrame['sandbox'];
  /** The current zoom of the frame, e.g. 0 = 0% and 1 = 100%. */
  "zoom"?: QuietZoomableFrame['zoom'];
  /** The zoom levels to step through when using zoom controls. This does not restrict programmatic changes to the zoom. */
  "zoom-levels"?: QuietZoomableFrame['zoomLevels'];
  /** The zoom levels to step through when using zoom controls. This does not restrict programmatic changes to the zoom. */
  "zoomLevels"?: QuietZoomableFrame['zoomLevels'];
  /** Removes the zoom controls. */
  "without-controls"?: QuietZoomableFrame['withoutControls'];
  /** Removes the zoom controls. */
  "withoutControls"?: QuietZoomableFrame['withoutControls'];
  /** Disables interaction when present. */
  "without-interaction"?: QuietZoomableFrame['withoutInteraction'];
  /** Disables interaction when present. */
  "withoutInteraction"?: QuietZoomableFrame['withoutInteraction'];
  /**  */
  "iframe"?: QuietZoomableFrame['iframe'];

  /** Emitted when the internal iframe when it finishes loading. */
  "onload"?: (e: CustomEvent<Event>) => void;
  /** Emitted from the internal iframe when it fails to load. */
  "onerror"?: (e: CustomEvent<Event>) => void;
}

  export type CustomElements = {


  /**
     * <quiet-accordion-item>
 * 
 * #### Attributes & Properties
 * 
 * Component attributes and properties that can be applied to the element or by using JavaScript.
 * 
 * - `expanded`: undefined 
 * - `label`: The accordion item's label. If you need to provide HTML in the label, use the `label` slot instead. 
 * - `appearance`: The accordion item's appearance. This will be set automatically by the accordion controller. 
 * - `icon-placement`/`iconPlacement`: The position of the expand/collapse icon. This will be set automatically by the accordion controller. 
 * - `disabled`: Disables the accordion item. 
 * - `body`: undefined (property only)
 * - `content`: undefined (property only)
 * - `header`: undefined (property only)
 * 
 * #### Slots
 * 
 * Areas where markup can be added to the component.
 * 
 * - `(default)`: The content to show when expanded.
 * - `icon`: The expand/collapse icon.
 * - `label`: The accordion item's label. For plain-text labels, you can use the `label` attribute instead.
 * 
 * #### Methods
 * 
 * Methods that can be called to access component functionality.
 * 
 * - `focus() => void`: Sets focus to the accordion item.
 * - `blur() => void`: Removes focus from the accordion item.
 * - `animateExpand() => void`: Animate the expansion of the body - called by the accordion controller
 * - `animateCollapse() => void`: Animate the collapse of the body - called by the accordion controller
 * 
 * #### CSS Parts
 * 
 * Custom selectors for styling elements within the component.
 * 
 * - `header`: The accordion item's header that contains the label and icon.
 * - `label`: The label container.
 * - `icon`: The icon container.
 * - `body`: The accordion item's body that contains the content.
 * - `content`: The content wrapper inside the body.
 * 
 * #### CSS States
 * 
 * These can be used to apply styling when a component is in a given state.
 * 
 * - `disabled`: Applies when the accordion item is disabled.
 * - `expanded`: Applies when the accordion item is expanded.
  */
    "quiet-accordion-item": Partial<QuietAccordionItemProps & BaseProps<QuietAccordionItem> & BaseEvents>;


  /**
     * <quiet-accordion>
 * 
 * #### Attributes & Properties
 * 
 * Component attributes and properties that can be applied to the element or by using JavaScript.
 * 
 * - `auto-collapse`/`autoCollapse`: When set, selecting an accordion item will automatically collapse the others. 
 * - `appearance`: Determines the accordion's appearance. 
 * - `icon-placement`/`iconPlacement`: Determines which side of the accordion item the expand/collapse icon shows. 
 * 
 * #### Events
 * 
 * Events that will be emitted by the component.
 * 
 * - `quiet-before-expand`: Emitted when an accordion item is instructed to expand but before it is shown. Calling `event.preventDefault()` will prevent the item from expanding. `event.detail.item` will contain the expanding item.
 * - `quiet-expand`: Emitted after an accordion item has been expanded. `event.detail.item` will contain the expanded item.
 * - `quiet-before-collapse`: Emitted when an accordion item is instructed to collapse but before it is hidden. Calling `event.preventDefault()` will prevent the item from collapsing. `event.detail.item` will contain the collapsing item.
 * - `quiet-collapse`: Emitted after an accordion item has been collapsed. `event.detail.item` will contain the collapsed item.
 * 
 * #### Slots
 * 
 * Areas where markup can be added to the component.
 * 
 * - `(default)`: One or more `<quiet-accordion-item>` elements to place in the accordion.
 * 
 * #### CSS Custom Properties
 * 
 * CSS variables available for styling the component.
 * 
 * - `--duration`: The expand and collapse duration. (default: `200ms`)
 * - `--easing`: The expand and collapse easing. (default: `ease`)
 * - `--border-color`: The accordion's border color. (default: `var(--quiet-neutral-stroke-softer)`)
 * - `--border-width`: The accordion's border width. (default: `var(--quiet-border-width)`)
 * - `--border-style`: The accordion's border style. (default: `var(--quiet-border-style)`)
 * - `--border-radius`: The border radius to apply to rounded edges. (default: `var(--quiet-border-radius-md)`)
  */
    "quiet-accordion": Partial<QuietAccordionProps & BaseProps<QuietAccordion> & BaseEvents>;


  /**
     * <quiet-breadcrumb>
 * 
 * #### Slots
 * 
 * Areas where markup can be added to the component.
 * 
 * - `(default)`: The default slot containing one or more breadcrumb items.
 * 
 * #### CSS Custom Properties
 * 
 * CSS variables available for styling the component.
 * 
 * - `--item-spacing`: The amount of spacing to use between breadcrumb items. (default: `0.5em`)
  */
    "quiet-breadcrumb": Partial<QuietBreadcrumbProps & BaseProps<QuietBreadcrumb> & BaseEvents>;


  /**
     * <quiet-avatar>
 * 
 * #### Attributes & Properties
 * 
 * Component attributes and properties that can be applied to the element or by using JavaScript.
 * 
 * - `label`: An accessible label for the avatar. This won't be visible, but it will be read to assistive devices so you should
 * always include one. 
 * - `characters`: A string of characters to display in the avatar when an image isn't available or fails to load. Up to five
 * characters are supported. 
 * - `image`: The URL of an image to display in the avatar. Non-square images will be clipped to fit. 
 * - `hasImageLoaded`: undefined (property only)
 * 
 * #### Slots
 * 
 * Areas where markup can be added to the component.
 * 
 * - `icon`: A custom icon to use instead of the default. Will not be shown when an image or initials are present. For best results, use a `<quiet-icon>` or an `<svg>` element.
 * 
 * #### CSS Custom Properties
 * 
 * CSS variables available for styling the component.
 * 
 * - `--size`: The size of the avatar to draw. (default: `3rem`)
  */
    "quiet-avatar": Partial<QuietAvatarProps & BaseProps<QuietAvatar> & BaseEvents>;


  /**
     * <quiet-badge>
 * 
 * #### Attributes & Properties
 * 
 * Component attributes and properties that can be applied to the element or by using JavaScript.
 * 
 * - `variant`: The type of badge to draw. 
 * - `appearance`: Determines the badges's appearance. 
 * - `attention`: Draws attention to the badge using an animation. 
 * 
 * #### Slots
 * 
 * Areas where markup can be added to the component.
 * 
 * - `(default)`: The badge's content.
 * 
 * #### CSS Custom Properties
 * 
 * CSS variables available for styling the component.
 * 
 * - `--attention-duration`: The speed at which the attention animation will run. (default: `1.5s`)
 * - `--attention-easing`: The easing to use for the attention animation. (default: `ease`)
  */
    "quiet-badge": Partial<QuietBadgeProps & BaseProps<QuietBadge> & BaseEvents>;


  /**
     * <quiet-breadcrumb-item>
 * 
 * #### Attributes & Properties
 * 
 * Component attributes and properties that can be applied to the element or by using JavaScript.
 * 
 * - `current`: Indicates that this item is the current page or view. 
 * - `href`: The URL the breadcrumb item should point to. If omitted, the breadcrumb item will be drawn as a `<span>` instead of
 * a link, enabling alternate content such as dropdowns. 
 * - `target`: Opens the link in the specified target. 
 * - `rel`: Sets the link's `rel` attribute. Note that the default value is `noreferrer noopener`, meaning you might need to
 * set it to an empty string if you're also using `target`. 
 * 
 * #### Slots
 * 
 * Areas where markup can be added to the component.
 * 
 * - `(default)`: The default slot.
 * - `start`: An icon or similar element to place before the breadcrumb item. Works great with `<quiet-icon>`.
 * - `end`: An icon or similar element to place after the breadcrumb item. Works great with `<quiet-icon>`.
 * - `separator`: A custom separator to show instead of the default. Works great with `<quiet-icon>`.
 * 
 * #### CSS Parts
 * 
 * Custom selectors for styling elements within the component.
 * 
 * - `label`: The breadcrumb's label, an `<a>` element if `href` is set or a `<span>` element otherwise.
 * - `separator`: The container that wraps the breadcrumb's separator, a `span` element.
  */
    "quiet-breadcrumb-item": Partial<QuietBreadcrumbItemProps & BaseProps<QuietBreadcrumbItem> & BaseEvents>;


  /**
     * <quiet-browser-frame>
 * 
 * #### Attributes & Properties
 * 
 * Component attributes and properties that can be applied to the element or by using JavaScript.
 * 
 * - `label`: The label to display in the address bar. This will override the domain that shows when using `href`. 
 * - `href`: When set, the address bar will be wrapped by a link that goes to this URL. A human-readable domain name will be
 * shown in the address bar unless `label` is also provided. 
 * - `target`: Opens the link in the specified target. Only works when `href` is set. 
 * - `rel`: Sets the link's `rel` attribute.  Only works when `href` is set. When linking to an external domain, you should
 * probably set this to `noreferrer noopener`. 
 * - `download`: Sets the link's `download` attribute, causing the linked file to be downloaded. Only works when `href` is set. 
 * - `flush`: When set, removes all padding from the body element and removes border radius from slotted media. Useful for
 * displaying images and videos that span edge-to-edge in the browser frame. 
 * - `platform`: Sets the window control style to use. 'mac' uses the traffic light controls, 'windows' uses Windows 11-style
 * controls, and 'auto' will use the most appropriate style based on the user's operating system. 
 * 
 * #### Slots
 * 
 * Areas where markup can be added to the component.
 * 
 * - `(default)`: The content to display in the browser window body.
 * - `icon`: An optional icon to display at the start of the address bar.
 * 
 * #### CSS Custom Properties
 * 
 * CSS variables available for styling the component.
 * 
 * - `--address-background-color`: Background color for the address bar. (default: `undefined`)
 * - `--address-color`: Text color for the address bar. (default: `undefined`)
 * - `--border-color`: Border color for the browser frame. (default: `undefined`)
 * - `--body-padding`: Padding to apply to the browser frame's body. (default: `undefined`)
 * - `--header-background-color`: Background color for the header. (default: `undefined`)
 * - `--header-height`: Height of the browser frame header. (default: `undefined`)
 * - `--windows-control-color`: The color for Windows-style control buttons. (default: `undefined`)
 * 
 * #### CSS Parts
 * 
 * Custom selectors for styling elements within the component.
 * 
 * - `header`: The browser frame's header that contains controls and address bar.
 * - `controls`: The browser frame's control buttons container (red, yellow, green dots or Windows controls).
 * - `address-bar`: The browser frame's address bar. Either an `<a>` or a `<span>` depending on `href`.
 * - `body`: The browser frame's body, where content shows.
  */
    "quiet-browser-frame": Partial<QuietBrowserFrameProps & BaseProps<QuietBrowserFrame> & BaseEvents>;


  /**
     * <quiet-button-group>
 * 
 * #### Attributes & Properties
 * 
 * Component attributes and properties that can be applied to the element or by using JavaScript.
 * 
 * - `label`: An accessible label for the tab list. This won't be visible, but it will be read to assistive devices so it's
 * usually a good idea to include one. 
 * - `orientation`: The button group's orientation. 
 * 
 * #### Slots
 * 
 * Areas where markup can be added to the component.
 * 
 * - `(default)`: One or more `<quiet-button>` elements to place in the button group.
  */
    "quiet-button-group": Partial<QuietButtonGroupProps & BaseProps<QuietButtonGroup> & BaseEvents>;


  /**
     * <quiet-button>
 * 
 * #### Attributes & Properties
 * 
 * Component attributes and properties that can be applied to the element or by using JavaScript.
 * 
 * - `appearance`: Determines the button's appearance. 
 * - `variant`: The type of button to render. This attribute has no effect on text or image buttons. 
 * - `disabled`: Disables the button. 
 * - `loading`: Draws the button in a loading state. 
 * - `toggle`: Turns the button into a two-state toggle button. Clicking once will turn it on. Clicking again will turn it off.
 * Cannot be used with links buttons or submit buttons. 
 * - `size`: The button's size. 
 * - `icon-label`/`iconLabel`: To create an icon button, slot an icon into the button's default slot and set this attribute to an appropriate
 * label. The label won't be visible, but it will be available to assistive devices. 
 * - `pill`: Draws the button in a pill shape. 
 * - `type`: Determines the button's type. 
 * - `name`: The name to submit when the button is used to submit the form. 
 * - `value`: The value to submit when the button is used to submit the form. 
 * - `with-caret`/`withCaret`: When true, the button will be rendered with a caret to indicate a dropdown menu. 
 * - `href`: Set this to render the button as an `<a>` tag instead of a `<button>`. The button will act as a link. When this is
 * set, form attributes and features will not work. 
 * - `target`: Opens the link in the specified target. Only works with link buttons. 
 * - `rel`: Sets the link's `rel` attribute. Only works with link buttons. When linking to an external domain, you should
 * probably set this to `noreferrer noopener`. 
 * - `download`: Sets the link's `download` attribute, causing the linked file to be downloaded. Only works with link buttons. 
 * - `form`: The form to associate this control with. If omitted, the closest containing `<form>` will be used. The value of
 * this attribute must be an ID of a form in the same document or shadow root. 
 * - `formaction`/`formAction`: Overrides the containing form's `action` attribute. 
 * - `formenctype`/`formEnctype`: Overrides the containing form's `enctype` attribute. 
 * - `formmethod`/`formMethod`: Overrides the containing form's `method` attribute. 
 * - `formnovalidate`/`formNoValidate`: Overrides the containing form's `novalidate` attribute. 
 * - `formtarget`/`formTarget`: Overrides the containing form's `target` attribute. 
 * 
 * #### Events
 * 
 * Events that will be emitted by the component.
 * 
 * - `quiet-blur`: Emitted when the button loses focus. This event does not bubble.
 * - `quiet-long-press`: Emitted when the button is pressed and held by tapping or with the mouse. You can look at `event.detail.originalEvent.type` to see the type of event that initiated the long press.
 * - `quiet-focus`: Emitted when the button receives focus. This event does not bubble.
 * 
 * #### Slots
 * 
 * Areas where markup can be added to the component.
 * 
 * - `(default)`: The button's label.
 * - `start`: An icon or similar element to place before the label. Works great with `<quiet-icon>`.
 * - `end`: An icon or similar element to place after the label. Works great with `<quiet-icon>`.
 * 
 * #### CSS Parts
 * 
 * Custom selectors for styling elements within the component.
 * 
 * - `button`: The internal `<button>` element. Other than `width`, this is where most custom styles should be applied.
 * - `caret`: The caret icon, a `<quiet-icon>` element. Only present with the `with-caret` attribute.
 * - `caret__svg`: The caret icon's `<svg>` part.
 * - `spinner`: The loading indicator, a `<quiet-spinner>` element. Only present with the `loading` attribute.
 * - `toggle-indicator`: When the button is a toggle button, this is the indicator that shows the current state.
 * 
 * #### CSS States
 * 
 * These can be used to apply styling when a component is in a given state.
 * 
 * - `disabled`: Applied when the button is disabled.
 * - `focused`: Applied when the button has focus.
 * - `loading`: Applied when a toggle button is loading.
 * - `toggled`: Applied when a toggle button is activated.
  */
    "quiet-button": Partial<QuietButtonProps & BaseProps<QuietButton> & BaseEvents>;


  /**
     * <quiet-bytes>
 * 
 * #### Attributes & Properties
 * 
 * Component attributes and properties that can be applied to the element or by using JavaScript.
 * 
 * - `value`: The number of bytes to format. 
 * - `unit`: The unit to display. 
 * - `display`: How to display the bytes, e.g. "100 bytes", "100 b", or "100b". 
  */
    "quiet-bytes": Partial<QuietBytesProps & BaseProps<QuietBytes> & BaseEvents>;


  /**
     * <quiet-callout>
 * 
 * #### Attributes & Properties
 * 
 * Component attributes and properties that can be applied to the element or by using JavaScript.
 * 
 * - `variant`: The type of callout to render. 
 * 
 * #### Slots
 * 
 * Areas where markup can be added to the component.
 * 
 * - `(default)`: Content to show in the callout.
 * - `icon`: An optional icon to show in the callout. Works well with `<quiet-icon>` and `<svg>` elements.
 * 
 * #### CSS Parts
 * 
 * Custom selectors for styling elements within the component.
 * 
 * - `icon`: The container the wraps the icon.
 * - `body`: The container that wraps the callout's content.
  */
    "quiet-callout": Partial<QuietCalloutProps & BaseProps<QuietCallout> & BaseEvents>;


  /**
     * <quiet-card>
 * 
 * #### Attributes & Properties
 * 
 * Component attributes and properties that can be applied to the element or by using JavaScript.
 * 
 * - `appearance`: Determines the card's appearance. 
 * - `orientation`: The card's orientation. 
 * 
 * #### Slots
 * 
 * Areas where markup can be added to the component.
 * 
 * - `(default)`: Content to place in the dialog's body.
 * - `header`: Content to place in the dialog's header.
 * - `actions`: Slot in one or more text buttons to add actions to the card's header (vertical) or footer (horizontal). Only available when the respective header/footer is enabled.
 * - `footer`: Content to place in the dialog's footer.
 * 
 * #### CSS Custom Properties
 * 
 * CSS variables available for styling the component.
 * 
 * - `--spacing`: The spacing to use throughout the card. (default: `1.5rem`)
 * - `--border-width`: The width of the card's border, including interior borders. (default: `undefined`)
 * - `--border-style`: The style of the card's border. (default: `undefined`)
 * 
 * #### CSS Parts
 * 
 * Custom selectors for styling elements within the component.
 * 
 * - `body`: The container that wraps the card's body.
 * - `header`: The container that wraps the card's header. A flex container, by default.
 * - `footer`: The container that wraps the card's footer. A flex container, by default.
 * - `media`: The container that wraps the card's media.
  */
    "quiet-card": Partial<QuietCardProps & BaseProps<QuietCard> & BaseEvents>;


  /**
     * <quiet-carousel>
 * 
 * #### Attributes & Properties
 * 
 * Component attributes and properties that can be applied to the element or by using JavaScript.
 * 
 * - `label`: A custom label for the carousel. This won't be visible, but it will be read to assistive devices. 
 * - `active-index`/`activeIndex`: The current active item's index. 
 * - `active-name`/`activeName`: The current active item's name. 
 * - `loop`: Enables looping navigation. When true, prev/next buttons wrap around to the opposite end. 
 * - `without-nav`/`withoutNav`: Hides navigation buttons. 
 * - `without-pagination`/`withoutPagination`: Hides pagination dots. 
 * - `items`: undefined (property only)
 * - `isScrolling`: undefined (property only)
 * - `itemCount`: undefined (property only)
 * 
 * #### Events
 * 
 * Events that will be emitted by the component.
 * 
 * - `quiet-item-change`: Emitted when the active item changes and the slide has been fully scrolled into view.
 * 
 * #### Slots
 * 
 * Areas where markup can be added to the component.
 * 
 * - `(default)`: The default slot for carousel items.
 * 
 * #### Methods
 * 
 * Methods that can be called to access component functionality.
 * 
 * - `scrollToIndex(index: number, scrollBehavior: ScrollBehavior = 'smooth') => void`: Navigate to the specified item.
 * - `scrollToNext(scrollBehavior: ScrollBehavior = 'smooth') => void`: Navigate to the next item
 * - `scrollToPrevious(scrollBehavior: ScrollBehavior = 'smooth') => void`: Navigate to the previous item
 * 
 * #### CSS Custom Properties
 * 
 * CSS variables available for styling the component.
 * 
 * - `--aspect-ratio`: The aspect ratio of the carousel. By default, carousels render 100% wide, so this helps retain proportions across various devices. Gets applied to the `items` part. (default: `16/9`)
 * - `--item-gap`: The gap between items in the carousel. (default: `2rem`)
 * - `--dot-size`: The size of each pagination dot. (default: `0.875em`)
 * - `--dot-gap`: The size of the gap between pagination dots. (default: `0.5em`)
 * - `--dot-color`: The color of inactive pagination dots. (default: `var(--quiet-neutral-fill-soft)`)
 * - `--dot-active-color`: The color of active pagination dots. (default: `var(--quiet-neutral-fill-loud)`)
 * 
 * #### CSS Parts
 * 
 * Custom selectors for styling elements within the component.
 * 
 * - `items`: The scrollable container that holds the carousel items.
 * - `controls`: The container that surrounds nav buttons and pagination.
 * - `previous-button`: The previous button.
 * - `next-button`: The next button.
 * - `pagination`: The container for the pagination dots.
 * - `pagination-dot`: Each individual pagination dot.
 * - `pagination-dot-active`: The active pagination dot.
 * 
 * #### CSS States
 * 
 * These can be used to apply styling when a component is in a given state.
 * 
 * - `scrolling`: Applied when the carousel is scrolling.
  */
    "quiet-carousel": Partial<QuietCarouselProps & BaseProps<QuietCarousel> & BaseEvents>;


  /**
     * <quiet-carousel-item>
 * 
 * #### Attributes & Properties
 * 
 * Component attributes and properties that can be applied to the element or by using JavaScript.
 * 
 * - `name`: An optional name for the carousel item so you can reference it with the `active-name` attribute. 
 * 
 * #### Slots
 * 
 * Areas where markup can be added to the component.
 * 
 * - `(default)`: The content to show inside the carousel item.
 * 
 * #### CSS Parts
 * 
 * Custom selectors for styling elements within the component.
 * 
 * - `content`: A flex wrapper around the carousel item's content.
  */
    "quiet-carousel-item": Partial<QuietCarouselItemProps & BaseProps<QuietCarouselItem> & BaseEvents>;


  /**
     * <quiet-checkbox>
 * 
 * #### Attributes & Properties
 * 
 * Component attributes and properties that can be applied to the element or by using JavaScript.
 * 
 * - `label`: The checkbox's label. If you need to provide HTML in the label, use the `label` slot instead. 
 * - `description`: The checkbox's description. If you need to provide HTML in the description, use the `description` slot instead. 
 * - `name`: The name of the checkbox. This will be submitted with the form as a name/value pair. 
 * - `value`: The checkbox's value. 
 * - `checked`: The checkbox's checked state. 
 * - `indeterminate`: Puts the checkbox in an indeterminate state. 
 * - `disabled`: Disables the checkbox. 
 * - `appearance`: The type of checkbox to render. 
 * - `size`: The checkbox's size. 
 * - `form`: The form to associate this control with. If omitted, the closest containing `<form>` will be used. The value of
 * this attribute must be an ID of a form in the same document or shadow root. 
 * - `required`: Makes the checkbox required. Form submission will not be allowed until the checkbox is checked. 
 * - `isInvalid`: undefined (property only)
 * - `hadUserInteraction`: undefined (property only)
 * - `wasSubmitted`: undefined (property only)
 * 
 * #### Events
 * 
 * Events that will be emitted by the component.
 * 
 * - `quiet-blur`: Emitted when the checkbox loses focus. This event does not bubble.
 * - `quiet-change`: Emitted when the user commits changes to the checkbox's value.
 * - `quiet-focus`: Emitted when the checkbox receives focus. This event does not bubble.
 * - `quiet-input`: Emitted when the checkbox receives input.
 * 
 * #### Slots
 * 
 * Areas where markup can be added to the component.
 * 
 * - `(default)`: The checkbox's label. For plain-text labels, you can use the `label` attribute instead.
 * - `description`: The checkbox's description. For plain-text descriptions, you can use the `description` attribute instead.
 * 
 * #### Methods
 * 
 * Methods that can be called to access component functionality.
 * 
 * - `focus() => void`: Sets focus to the checkbox.
 * - `blur() => void`: Removes focus from the checkbox.
 * 
 * #### CSS Parts
 * 
 * Custom selectors for styling elements within the component.
 * 
 * - `label`: The `<label>` that wraps the entire control.
 * - `description`: The element that contains the checkbox's description.
 * - `visual-box`: The element that wraps the internal checkbox.
 * - `check-icon`: The check icon, a `<quiet-icon>` element.
 * - `check-icon__svg`: The check icon's `svg` part.
 * - `indeterminate-icon`: The indeterminate icon, a `<quiet-icon>` element.
 * - `indeterminate-icon__svg`: The indeterminate icon's `<svg>` part.
 * 
 * #### CSS States
 * 
 * These can be used to apply styling when a component is in a given state.
 * 
 * - `checked`: Applied when the checkbox is checked.
 * - `disabled`: Applied when the checkbox is disabled.
 * - `focused`: Applied when the checkbox has focus.
 * - `user-valid`: Applied when the checkbox is valid and the user has sufficiently interacted with it.
 * - `user-invalid`: Applied when the checkbox is invalid and the user has sufficiently interacted with it.
  */
    "quiet-checkbox": Partial<QuietCheckboxProps & BaseProps<QuietCheckbox> & BaseEvents>;


  /**
     * <quiet-color-input>
 * 
 * #### Attributes & Properties
 * 
 * Component attributes and properties that can be applied to the element or by using JavaScript.
 * 
 * - `label`: The color input's label. If you need to provide HTML in the label, use the `label` slot instead. 
 * - `description`: The color input's description. If you need to provide HTML in the description, use the `description` slot instead. 
 * - `name`: The name of the color input. This will be submitted with the form as a name/value pair. 
 * - `value`: The color input's value. 
 * - `placeholder`: A placeholder to show in the color input when it's blank. 
 * - `disabled`: Disables the color input. 
 * - `readonly`: Makes the color input a read-only area. 
 * - `with-clear`/`withClear`: Adds a clear button to the color input when it's not blank. 
 * - `appearance`: The type of color input to render. 
 * - `size`: The color input's size. 
 * - `pill`: Draws the text field in a pill shape. 
 * - `format`: The format to use for the color's value. 
 * - `swatches`: One or more semicolon-delimited colors (any valid CSS color format or name) to show as preset swatches below the
 * color picker. 
 * - `with-alpha`/`withAlpha`: Enables the alpha slider. 
 * - `with-eye-dropper`/`withEyeDropper`: Enables the eye dropper button. Only available in
 * [supportive browsers](https://caniuse.com/?search=eyedropper%20API). 
 * - `placement`: The placement of the dropdown menu in reference to the trigger. The menu will shift to a more optimal location if
 * the preferred placement doesn't have enough room. 
 * - `distance`: The distance of the dropdown menu from its trigger. 
 * - `offset`: The offset of the dropdown menu along its trigger. 
 * - `form`: The form to associate this control with. If omitted, the closest containing `<form>` will be used. The value of
 * this attribute must be an ID of a form in the same document or shadow root. 
 * - `required`: Makes the color input required. Form submission will not be allowed when this is set and the color input is blank. 
 * - `autocomplete`: Tells the browser how to autocomplete the color input. See [this page](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete)
 * for available values. 
 * - `autofocus`: Tells the browser to focus the color input when the page loads or a dialog is shown. 
 * - `enterkeyhint`: Sets the enter key label on virtual keyboards. 
 * - `inputmode`: Provides the browser with a hint about the type of data that might be entered by the user, allowing the appropriate
 * virtual keyboard to be displayed on supported devices. 
 * - `isOpen`: undefined (property only)
 * - `isInvalid`: undefined (property only)
 * - `hadUserInteraction`: undefined (property only)
 * - `wasSubmitted`: undefined (property only)
 * 
 * #### Events
 * 
 * Events that will be emitted by the component.
 * 
 * - `quiet-blur`: Emitted when the color input loses focus. This event does not bubble.
 * - `quiet-change`: Emitted when the user commits changes to the color input's value.
 * - `quiet-focus`: Emitted when the color input receives focus. This event does not bubble.
 * - `quiet-input`: Emitted when the color input receives input.
 * 
 * #### Slots
 * 
 * Areas where markup can be added to the component.
 * 
 * - `label`: The color input's label. For plain-text labels, you can use the `label` attribute instead.
 * - `description`: The color input's description. For plain-text descriptions, you can use the `description` attribute instead.
 * 
 * #### Methods
 * 
 * Methods that can be called to access component functionality.
 * 
 * - `blur() => void`: Removes focus from the color input.
 * - `focus() => void`: Sets focus to the color input.
 * - `getValueAs(format: 'hex' | 'hex8' | 'hsl' | 'rgb' = 'rgb') => void`: Gets the current value as a hex string, a hex8 string, an RGB object, or an HSL object. RBG objects have `r`, `g`,
 * and `b` properties ranging from 0–255 and an `a` property (representing opacity) that ranges from 0-1. HSL objects
 * have an `h` property ranging from `0-359` and `s`, `l`, and `a` properties ranging from 0–1.
 * - `select() => void`: Selects all text in the color input.
 * - `setSelectionRange(start: number, end: number, direction: 'forward' | 'backward' | 'none' = 'none') => void`: Sets the start and end positions of the current text selection in the color input.
 * - `setRangeText(replacement: string, start?: number, end?: number, selectMode?: 'select' | 'start' | 'end' | 'preserve') => void`: Replaces a range of text in the color input with a new string.
 * - `showPicker() => void`: Shows the color picker.
 * - `hidePicker() => void`: Hides the color picker.
 * 
 * #### CSS Custom Properties
 * 
 * CSS variables available for styling the component.
 * 
 * - `--show-duration`: The duration of the show/hide animation. (default: `50ms`)
 * - `--preview-size`: The size of the color preview. (default: `1.6em`)
 * 
 * #### CSS Parts
 * 
 * Custom selectors for styling elements within the component.
 * 
 * - `label`: The element that contains the color input's label.
 * - `description`: The element that contains the color input's description.
 * - `visual-box`: The element that wraps the internal text box.
 * - `text-box`: The internal text box, an `<input>` element.
 * - `clear-button`: The clear button, a `<button>` element.
 * 
 * #### CSS States
 * 
 * These can be used to apply styling when a component is in a given state.
 * 
 * - `disabled`: Applied when the color input is disabled.
 * - `blank`: Applied when the color input has a blank value.
 * - `focused`: Applied when the color input has focus.
 * - `open`: Applied when the color picker is open.
 * - `user-valid`: Applied when the color input is valid and the user has sufficiently interacted with it.
 * - `user-invalid`: Applied when the color input is invalid and the user has sufficiently interacted with it.
  */
    "quiet-color-input": Partial<QuietColorInputProps & BaseProps<QuietColorInput> & BaseEvents>;


  /**
     * <quiet-checkbox-group>
 * 
 * #### Attributes & Properties
 * 
 * Component attributes and properties that can be applied to the element or by using JavaScript.
 * 
 * - `label`: The checkbox's label. If you need to provide HTML in the label, use the `label` slot instead. 
 * - `description`: The checkbox's description. If you need to provide HTML in the description, use the `description` slot instead. 
 * - `orientation`: The orientation of grouped items. 
 * - `required`: Indicates at least one option in the checkbox group is required. This just adds a visual indicator. To perform
 * validation, use the checkbox's `required` attribute and/or `setCustomValidity()` method. 
 * 
 * #### Slots
 * 
 * Areas where markup can be added to the component.
 * 
 * - `(default)`: The checkboxes to place in the group.
 * - `label`: The checkbox's label. For plain-text labels, you can use the `label` attribute instead.
 * - `description`: The checkbox's description. For plain-text descriptions, you can use the `description` attribute instead.
 * 
 * #### CSS Custom Properties
 * 
 * CSS variables available for styling the component.
 * 
 * - `--gap`: The gap between checkboxes. (default: `1em`)
 * 
 * #### CSS Parts
 * 
 * Custom selectors for styling elements within the component.
 * 
 * - `label`: The element that contains the checkbox group's label.
 * - `description`: The element that contains the checkbox group's description.
 * - `group`: The element that wraps the grouped checkboxes.
  */
    "quiet-checkbox-group": Partial<QuietCheckboxGroupProps & BaseProps<QuietCheckboxGroup> & BaseEvents>;


  /**
     * <quiet-color-picker>
 * 
 * #### Attributes & Properties
 * 
 * Component attributes and properties that can be applied to the element or by using JavaScript.
 * 
 * - `label`: The color picker's label. This won't be visible, but it will be read to assistive devices so you should always
 * include one. 
 * - `value`: The color picker's value. 
 * - `format`: The format to use for the color's value. 
 * - `disabled`: Disables the color picker. 
 * - `size`: The color picker's size. 
 * - `swatches`: One or more semicolon-delimited colors (any valid CSS color format or name) to show as preset swatches below the
 * color picker. 
 * - `with-alpha`/`withAlpha`: Enables the alpha slider. 
 * - `with-eye-dropper`/`withEyeDropper`: Enables the eye dropper button. Only available in
 * [supportive browsers](https://caniuse.com/?search=eyedropper%20API). 
 * - `with-input`/`withInput`: Enables the color value text field. 
 * - `h`: undefined (property only)
 * - `s`: undefined (property only)
 * - `v`: undefined (property only)
 * - `a`: undefined (property only)
 * - `colorSliderThumbX`: undefined (property only)
 * - `colorSliderThumbY`: undefined (property only)
 * - `hasFocus`: undefined (property only)
 * - `isChangingV`: undefined (property only)
 * - `isChangingS`: undefined (property only)
 * - `inputIsFocused`: undefined (property only)
 * - `displayValue`: undefined (property only)
 * - `hadUserInteraction`: undefined (property only)
 * 
 * #### Events
 * 
 * Events that will be emitted by the component.
 * 
 * - `quiet-change`: Emitted when the user commits changes to the color picker's value.
 * - `quiet-input`: Emitted when the color picker receives input. This can fire very frequently during dragging, so avoid doing expensive operations in the handler. If you don't live feedback, use the `quiet-change` event instead.
 * 
 * #### Methods
 * 
 * Methods that can be called to access component functionality.
 * 
 * - `focus() => void`: Sets focus to the color picker.
 * - `blur() => void`: Removes focus from the color picker.
 * - `getValueAs(format: 'hex' | 'hex8' | 'hsl' | 'rgb' = 'rgb') => void`: Gets the current value as a hex string, a hex8 string, an RGB object, or an HSL object. RBG objects have `r`, `g`,
 * and `b` properties ranging from 0–255 and an `a` property (representing opacity) that ranges from 0-1. HSL objects
 * have an `h` property ranging from `0-359` and `s`, `l`, and `a` properties ranging from 0–1.
 * 
 * #### CSS Parts
 * 
 * Custom selectors for styling elements within the component.
 * 
 * - `picker`: The element the wraps the color picker.
 * - `color-slider`: The 2d color slider.
 * - `color-slider-thumb`: The color slider's thumb.
 * - `controls`: The container that wraps the sliders and preview.
 * - `sliders`: The container that wraps the hue and alpha slider.
 * - `hue-slider`: The slider that controls the color's hue.
 * - `hue-slider__label`: The hue slider's `label` part.
 * - `hue-slider__description`: The hue slider's `description` part.
 * - `hue-slider__slider`: The hue slider's `slider` part.
 * - `hue-slider__track`: The hue slider's `track` part.
 * - `hue-slider__indicator`: The hue slider's `indicator` part.
 * - `hue-slider__thumb`: The hue slider's `thumb` part.
 * - `alpha-slider`: The slider that controls the color's opacity.
 * - `alpha-slider__label`: The alpha slider's `label` part.
 * - `alpha-slider__description`: The alpha slider's `description` part.
 * - `alpha-slider__slider`: The alpha slider's `slider` part.
 * - `alpha-slider__track`: The alpha slider's `track` part.
 * - `alpha-slider__indicator`: The alpha slider's `indicator` part.
 * - `alpha-slider__thumb`: The alpha slider's `thumb` part.
 * - `eye-dropper-button`: The eye dropper button, a `<quiet-button>` element.
 * - `preview-button`: The button that shows a preview of the current color, a `<quiet-button>` element.
 * - `color-input`: The color input text field, a `<quiet-text-field>` element.
 * - `color-input__visual-box`: The element that wraps the internal text box.
 * - `color-input__text-box`: The internal text box, an `<input>` element.
 * - `swatches`: The element that contains swatches.
 * - `swatch`: Each individual swatch.
 * 
 * #### CSS States
 * 
 * These can be used to apply styling when a component is in a given state.
 * 
 * - `disabled`: Applied when the color picker is disabled.
 * - `focused`: Applied when the color picker has focus.
  */
    "quiet-color-picker": Partial<QuietColorPickerProps & BaseProps<QuietColorPicker> & BaseEvents>;


  /**
     * <quiet-combobox>
 * 
 * #### Attributes & Properties
 * 
 * Component attributes and properties that can be applied to the element or by using JavaScript.
 * 
 * - `label`: The combobox's label. 
 * - `description`: The combobox's description. 
 * - `name`: The name of the combobox for form submission. 
 * - `value`: The combobox's value(s). 
 * - `placeholder`: Placeholder text for the input. 
 * - `disabled`: Disables the combobox. 
 * - `required`: Makes the combobox required. 
 * - `multiple`: Enables multiple selection. 
 * - `with-clear`/`withClear`: Adds a clear button when not blank. 
 * - `appearance`: The visual appearance of the combobox. 
 * - `size`: The size of the combobox. 
 * - `pill`: Draws the combobox in a pill shape. 
 * - `placement`: The dropdown's placement relative to the input. 
 * - `distance`: The distance of the dropdown from the input. 
 * - `offset`: The offset of the dropdown along the input. 
 * - `form`: The form to associate with. 
 * - `open`: undefined (property only)
 * - `inputValue`: undefined (property only)
 * 
 * #### Events
 * 
 * Events that will be emitted by the component.
 * 
 * - `quiet-blur`: Emitted when the combobox loses focus.
 * - `quiet-change`: Emitted when the user commits changes to the combobox's value.
 * - `quiet-focus`: Emitted when the combobox receives focus.
 * - `quiet-input`: Emitted when the combobox receives input.
 * - `quiet-before-open`: Emitted when the dropdown is instructed to open but before it is shown.
 * - `quiet-open`: Emitted when the dropdown opens.
 * - `quiet-before-close`: Emitted when the dropdown is instructed to close but before it is hidden.
 * - `quiet-close`: Emitted when the dropdown closes.
 * 
 * #### Slots
 * 
 * Areas where markup can be added to the component.
 * 
 * - `(default)`: One or more `<quiet-combobox-item>` elements to show as options.
 * - `label`: The combobox's label. For plain-text labels, use the `label` attribute instead.
 * - `description`: The combobox's description. For plain-text descriptions, use the `description` attribute instead.
 * - `start`: An icon or similar element to place before the input. Works great with `<quiet-icon>`.
 * - `end`: An icon or similar element to place after the input. Works great with `<quiet-icon>`.
 * 
 * #### Methods
 * 
 * Methods that can be called to access component functionality.
 * 
 * - `formDisabledCallback(disabled: boolean) => void`: undefined
 * - `formResetCallback() => void`: undefined
 * - `getTagContent(item: QuietComboboxItem) => TemplateResult`: A custom function for rendering tag content. By default, this function returns the item's full `textContent`. You
 * can override it to customize the content that gets rendered in tags in `multiple` mode.
 * - `focus() => void`: Sets focus to the combobox.
 * - `blur() => void`: Removes focus from the combobox.
 * 
 * #### CSS Custom Properties
 * 
 * CSS variables available for styling the component.
 * 
 * - `--text-box-min-width`: The minimum width of the input field when shown next to tags. Only available in `multiple` mode. (default: `12ch`)
 * - `--show-duration`: The duration of the show/hide animation for the dropdown. (default: `50ms`)
 * 
 * #### CSS Parts
 * 
 * Custom selectors for styling elements within the component.
 * 
 * - `label`: The element that contains the combobox's label.
 * - `description`: The element that contains the combobox's description.
 * - `visual-box`: The element that wraps the internal text box.
 * - `input-area`: The wrapper surrounding tags and the internal text box.
 * - `tag`: Individual tag elements.
 * - `tag-remove`: The remove button for tags.
 * - `text-box`: The internal text box, an `<input>` element.
 * - `chevron`: The chevron icon, a `<quiet-icon>` element.
 * - `chevron__svg`: The chevron icon's `<svg>` part.
 * - `clear-button`: The clear button.
 * - `dropdown`: The dropdown container.
 * 
 * #### CSS States
 * 
 * These can be used to apply styling when a component is in a given state.
 * 
 * - `open`: Applied when the dropdown is open.
 * - `disabled`: Applied when the combobox is disabled.
 * - `focused`: Applied when the combobox has focus.
 * - `blank`: Applied when the combobox has no value.
 * - `user-valid`: Applied when valid after user interaction.
 * - `user-invalid`: Applied when invalid after user interaction.
  */
    "quiet-combobox": Partial<QuietComboboxProps & BaseProps<QuietCombobox> & BaseEvents>;


  /**
     * <quiet-combobox-item>
 * 
 * #### Attributes & Properties
 * 
 * Component attributes and properties that can be applied to the element or by using JavaScript.
 * 
 * - `value`: The value to submit when this item is selected. If not provided, the text content is used. 
 * - `disabled`: Disables the item. 
 * - `defaultSlot`: undefined (property only)
 * 
 * #### Slots
 * 
 * Areas where markup can be added to the component.
 * 
 * - `(default)`: The item's label.
 * - `icon`: An optional icon to display at the start of the item.
 * - `details`: Optional details to display at the end of the item.
 * 
 * #### Methods
 * 
 * Methods that can be called to access component functionality.
 * 
 * - `getLabelText() => string`: Gets the text content from the combobox item's label.
 * 
 * #### CSS Parts
 * 
 * Custom selectors for styling elements within the component.
 * 
 * - `icon`: The container that wraps the icon slot.
 * - `label`: The container that wraps the item's label.
 * - `details`: The container that wraps the details slot.
 * - `checkmark`: The checkmark icon shown when selected in multiple mode.
 * 
 * #### CSS States
 * 
 * These can be used to apply styling when a component is in a given state.
 * 
 * - `selected`: Applied when the item is selected.
 * - `disabled`: Applied when the item is disabled.
 * - `active`: Applied when the item is active (keyboard navigation).
  */
    "quiet-combobox-item": Partial<QuietComboboxItemProps & BaseProps<QuietComboboxItem> & BaseEvents>;


  /**
     * <quiet-comparison>
 * 
 * #### Attributes & Properties
 * 
 * Component attributes and properties that can be applied to the element or by using JavaScript.
 * 
 * - `position`: The position of the divider as a decimal (0-1). 
 * - `orientation`: The orientation of the comparison slider, either 'horizontal' or 'vertical'. 
 * - `disabled`: Disables the comparison component, preventing it from being focused and adjusted. 
 * - `isDragging`: undefined (property only)
 * 
 * #### Events
 * 
 * Events that will be emitted by the component.
 * 
 * - `quiet-resize`: Dispatched when the comparison's handle is moved.
 * 
 * #### Slots
 * 
 * Areas where markup can be added to the component.
 * 
 * - `start`: The content to show on the left/start side or top side, depending on orientation.
 * - `end`: The content to show on the right/end side or bottom side, depending on orientation.
 * - `handle-icon`: A custom icon to use for the divider's handle.
 * 
 * #### CSS Parts
 * 
 * Custom selectors for styling elements within the component.
 * 
 * - `start`: The container for the start content.
 * - `end`: The container for the end content.
 * - `divider`: The draggable divider between start and end.
 * - `handle`: The visual handle within the divider.
 * 
 * #### CSS States
 * 
 * These can be used to apply styling when a component is in a given state.
 * 
 * - `disabled`: Applied when the comparison is disabled.
 * - `dragging`: Applied when the divider is being dragged.
 * - `focused`: Applied when the divider has focus.
  */
    "quiet-comparison": Partial<QuietComparisonProps & BaseProps<QuietComparison> & BaseEvents>;


  /**
     * <quiet-copy>
 * 
 * #### Attributes & Properties
 * 
 * Component attributes and properties that can be applied to the element or by using JavaScript.
 * 
 * - `data`: The text content that will be copied to the clipboard. 
 * - `disabled`: Disables the button. 
 * - `feedback-placement`/`feedbackPlacement`: The placement of the feedback animation. 
 * 
 * #### Events
 * 
 * Events that will be emitted by the component.
 * 
 * - `quiet-copy`: Emitted when the content has been copied. This event does not bubble. You can inspect `event.detail.data` to see the content that was copied.
 * - `quiet-copy-error`: Emitted when the browser refuses to allow the content to be copied. This event does not bubble. You can inspect `event.detail.error` to see the error that occurred.
 * 
 * #### Slots
 * 
 * Areas where markup can be added to the component.
 * 
 * - `(default)`: A custom button to use instead of the default.
 * 
 * #### CSS Parts
 * 
 * Custom selectors for styling elements within the component.
 * 
 * - `copy-button`: The default copy button, a `<quiet-button>` element.
 * - `copy-button__button`: The default copy button's `button` part.
 * - `copy-icon`: The default copy icon, a `<quiet-icon>` element.
 * - `copy-icon__svg`: The copy icon's `svg` part.
 * - `feedback`: The feedback that shows when copying.
  */
    "quiet-copy": Partial<QuietCopyProps & BaseProps<QuietCopy> & BaseEvents>;


  /**
     * <quiet-countdown>
 * 
 * #### Attributes & Properties
 * 
 * Component attributes and properties that can be applied to the element or by using JavaScript.
 * 
 * - `label`: An accessible label for the countdown. This won't be visible, but it will be read to assistive devices so you should
 * always include one. 
 * - `date`: The date in the future at which the countdown will end. If an attribute is passed, the date should be an
 * [ISO 8601 string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString).
 * If set as a property, a `Date` object can be used instead. 
 * - `delimiter`: A visual delimiter to show between units. 
 * - `min-unit`/`minUnit`: The smallest unit to display in the countdown. 
 * - `max-unit`/`maxUnit`: The largest unit to display in the countdown. 
 * - `grouping`: Whether to group numbers, e.g. with a thousands separator. 
 * - `currentTimeUnits`: undefined (property only)
 * - `visibleUnits`: undefined (property only)
 * - `effectiveEndDate`: undefined (property only)
 * - `valueFormatter`: A custom formatting function to apply to the number. When set, `decimal-places` and `grouping` will be ignored.
 * Property only. (property only)
 * 
 * #### Events
 * 
 * Events that will be emitted by the component.
 * 
 * - `quiet-finished`: Dispatched when the countdown finishes.
 * - `quiet-tick`: Dispatched every time the visible countdown changes. For example, if the timer displays seconds, this will be once every second; if `min-unit` is minutes, it will be once every minute; and so on.
 * 
 * #### Slots
 * 
 * Areas where markup can be added to the component.
 * 
 * - `seconds`: A custom label to show for seconds.
 * - `minutes`: A custom label to show for minutes.
 * - `hours`: A custom label to show for hours.
 * - `days`: A custom label to show for days.
 * - `months`: A custom label to show for months.
 * - `years`: A custom label to show for years.
 * 
 * #### Methods
 * 
 * Methods that can be called to access component functionality.
 * 
 * - `start(options: { resume?: boolean } = {}) => void`: Starts or resumes the countdown timer after validating dates.
 * - `stop() => void`: Stops the countdown timer and records the time it was stopped.
 * 
 * #### CSS Parts
 * 
 * Custom selectors for styling elements within the component.
 * 
 * - `unit`: The container that holds each unit, including its values and labels.
 * - `value`: The value of each unit.
 * - `label`: The label of each unit.
 * - `delimiter`: The delimiters between units.
 * 
 * #### CSS States
 * 
 * These can be used to apply styling when a component is in a given state.
 * 
 * - `active`: Applied when the countdown is actively counting down.
  */
    "quiet-countdown": Partial<QuietCountdownProps & BaseProps<QuietCountdown> & BaseEvents>;


  /**
     * <quiet-date>
 * 
 * #### Attributes & Properties
 * 
 * Component attributes and properties that can be applied to the element or by using JavaScript.
 * 
 * - `date`: The date to format. If an attribute is passed, the date should be an [ISO 8601 string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString).
 * If set as a property, a `Date` object can be used instead. If unset, the current date will be assumed. 
 * - `date-style`/`dateStyle`: A shortcut property for formatting the date. This can be used with `time-style`, but not with other formatting
 * properties such as `weekday`, `hour`, `month`, etc. 
 * - `time-style`/`timeStyle`: A shortcut property for formatting the time. This can be used with `date-style`, but not with other formatting
 * properties such as `weekday`, `hour`, `month`, etc. 
 * - `hour-format`/`hourFormat`: Whether to use 12-hour time (as opposed to 24-hour time). If `auto`, the default value is determined by the user's
 * locale. 
 * - `hourCycle`: The hour cycle to use. 
 * - `time-zone`/`timeZone`: The time zone to use. The default is the user's default time zone. 
 * - `weekday`: The representation of the weekday. 
 * - `era`: The representation of the era. 
 * - `year`: The representation of the year. 
 * - `month`: The representation of the month. 
 * - `day`: The representation of the day. 
 * - `day-period`/`dayPeriod`: The formatting style used for day periods like "in the morning", "am", "noon", "n" etc. This option only has an
 * effect if a 12-hour clock is used. 
 * - `hour`: The representation of the hour. 
 * - `minute`: The representation of the minute. 
 * - `second`: The representation of the second. 
 * - `fractional-second-digits`/`fractionalSecondDigits`: The number of digits used to represent fractions of a second (any additional digits are truncated). 
 * - `time-zone-name`/`timeZoneName`: The localized representation of the time zone name. 
 * - `format-matcher`/`formatMatcher`: The format matching algorithm to use. 
  */
    "quiet-date": Partial<QuietDateProps & BaseProps<QuietDate> & BaseEvents>;


  /**
     * <quiet-dialog>
 * 
 * #### Attributes & Properties
 * 
 * Component attributes and properties that can be applied to the element or by using JavaScript.
 * 
 * - `open`: Opens or closes the dialog. 
 * - `placement`: By default, the dialog will appear in the center of the screen. Changing the placement will cause the dialog to
 * slide in from the side of the screen like a drawer. 
 * - `light-dismiss`/`lightDismiss`: Allows the dialog to be closed when clicking outside of it. 
 * - `reset-scroll`/`resetScroll`: For dialogs that scroll, this will reset the scroll position when the dialog closes. 
 * 
 * #### Events
 * 
 * Events that will be emitted by the component.
 * 
 * - `quiet-before-open`: Emitted when the dialog is instructed to open but before it is shown. Calling `event.preventDefault()` will prevent the dialog from opening.
 * - `quiet-open`: Emitted after the dialog has been opened and the show animation has completed.
 * - `quiet-before-close`: Emitted when the dialog is dismissed. Calling `event.preventDefault()` will prevent the dialog from closing and show a brief animation.<br><br>You can check `event.detail.source` to see which element triggered the dialog to close, such as a button. If the source is the dialog itself, the user has pressed [[Escape]] or the dialog has been closed programmatically.
 * - `quiet-close`: Emitted after the dialog has been closed and the hide animation has completed.
 * 
 * #### Slots
 * 
 * Areas where markup can be added to the component.
 * 
 * - `(default)`: Content to place in the dialog's body. Note that, due to [this Chrome bug](https://issues.chromium.org/issues/40800208), you should wrap text nodes in an element to allow text selection in that browser.
 * - `header`: Content to place in the dialog's header.
 * - `actions`: Slot in one or more text buttons to customize the actions that appear in the dialog's header. Only available when the header is enabled.
 * - `footer`: Content to place in the dialog's footer.
 * 
 * #### Methods
 * 
 * Methods that can be called to access component functionality.
 * 
 * - `scrollBodyTo(options: ScrollToOptions) => void`: Scrolls the dialog's body to the specified position.
 * 
 * #### CSS Custom Properties
 * 
 * CSS variables available for styling the component.
 * 
 * - `--height`: The default height of the dialog. Note that dialogs shrink to fit as necessary. (default: `fit-content`)
 * - `--show-duration`: The duration of the show/hide animation. (default: `200ms`)
 * - `--spacing`: The spacing to use throughout the dialog. (default: `1.5rem`)
 * - `--width`: The default width of the dialog. Note that dialogs shrink to fit as necessary. (default: `30rem`)
 * 
 * #### CSS Parts
 * 
 * Custom selectors for styling elements within the component.
 * 
 * - `dialog`: The internal `<dialog>` element.
 * - `body`: The container that wraps the dialog's body.
 * - `header`: The container that wraps the dialog's header. A flex container, by default.
 * - `footer`: The container that wraps the dialog's footer. A flex container, by default.
 * 
 * #### CSS States
 * 
 * These can be used to apply styling when a component is in a given state.
 * 
 * - `open`: Applied when the dialog is open.
  */
    "quiet-dialog": Partial<QuietDialogProps & BaseProps<QuietDialog> & BaseEvents>;


  /**
     * <quiet-divider>
 * 
 * #### Attributes & Properties
 * 
 * Component attributes and properties that can be applied to the element or by using JavaScript.
 * 
 * - `orientation`: Sets the divider's orientation. 
 * 
 * #### Slots
 * 
 * Areas where markup can be added to the component.
 * 
 * - `symbol`: Optional text or a symbol to show in the center of the divider.
 * 
 * #### CSS Custom Properties
 * 
 * CSS variables available for styling the component.
 * 
 * - `--color`: The color of the divider. (default: `var(--quiet-neutral-stroke-soft)`)
 * - `--spacing`: The spacing around the divider. (default: `1rem`)
 * - `--thickness`: The thickness of the divider. (default: `var(--quiet-border-width)`)
 * 
 * #### CSS Parts
 * 
 * Custom selectors for styling elements within the component.
 * 
 * - `symbol`: The container that wraps the slotted symbol or icon.
  */
    "quiet-divider": Partial<QuietDividerProps & BaseProps<QuietDivider> & BaseEvents>;


  /**
     * <quiet-dropdown-item>
 * 
 * #### Attributes & Properties
 * 
 * Component attributes and properties that can be applied to the element or by using JavaScript.
 * 
 * - `value`: An optional value for the menu item. This is useful for determining which item was selected when listening to the
 * dropdown's `quiet-select` event. 
 * - `type`: Set to `checkbox` to make the item a checkbox. 
 * - `variant`: The type of menu item to render. 
 * - `checked`: Set to true to check the dropdown item. Only valid when `type` is `checkbox`. 
 * - `disabled`: Disables the dropdown item. 
 * - `submenuOpen`: Whether the submenu is currently open. 
 * - `href`: Tells the dropdown item to behave like a link. When selected, the browser will navigate to the target URL. 
 * - `target`: Opens the link in the specified target. Only works when `href` is provided. 
 * - `rel`: Sets the link's `rel` attribute. Only works when `href` is provided. When linking to an external domain, you should
 * probably set this to `noreferrer noopener`. 
 * - `download`: Sets the link's `download` attribute, causing the linked file to be downloaded. Only works when `href` is provided. 
 * - `hiddenLink`: undefined (property only)
 * - `submenuElement`: undefined (property only)
 * 
 * #### Slots
 * 
 * Areas where markup can be added to the component.
 * 
 * - `(default)`: The item's label or description.
 * - `icon`: An optional icon to show at the start of the item.
 * - `details`: Optional details, such as a keyboard shortcut, to display at the end of the item.
 * - `submenu`: Optional submenu items to display in a nested dropdown. For best results, use `<quiet-submenu-item>` and `<quiet-divider>` elements.
 * 
 * #### Methods
 * 
 * Methods that can be called to access component functionality.
 * 
 * - `openSubmenu() => void`: Opens the submenu.
 * - `closeSubmenu() => void`: Closes the submenu.
 * 
 * #### CSS Parts
 * 
 * Custom selectors for styling elements within the component.
 * 
 * - `checkmark`: The checkmark icon that's shown when checked, a `<quiet-icon>` element.
 * - `checkmark__svg`: The checkmark icon's `svg` part.
 * - `icon`: The container that wraps the icon.
 * - `label`: The container that wraps the label.
 * - `details`: The container that wraps the menu item's details.
 * - `submenu`: The container that wraps the submenu items.
 * - `submenu-icon`: The icon indicating that a submenu is available.
 * - `submenu-icon__svg`: The submenu icon's `svg` part.
 * 
 * #### CSS States
 * 
 * These can be used to apply styling when a component is in a given state.
 * 
 * - `active`: Applied when the dropdown item is active.
 * - `disabled`: Applied when the dropdown item is disabled.
 * - `checked`: Applied when the dropdown item is checked.
 * - `submenu-open`: Applied when the dropdown item's submenu is open.
 * - `has-submenu`: Applied when the dropdown item has a submenu.
  */
    "quiet-dropdown-item": Partial<QuietDropdownItemProps & BaseProps<QuietDropdownItem> & BaseEvents>;


  /**
     * <quiet-file-input>
 * 
 * #### Attributes & Properties
 * 
 * Component attributes and properties that can be applied to the element or by using JavaScript.
 * 
 * - `label`: The text field's label. If you need to provide HTML in the label, use the `label` slot instead. 
 * - `description`: The text field's description. If you need to provide HTML in the description, use the `description` slot instead. 
 * - `name`: The name of the file input. This will be submitted with the form as a name/value pair. 
 * - `disabled`: Disables the file input. 
 * - `accept`: A list of acceptable file types. Must be a comma-separated list of [unique file type
 * specifiers](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#unique_file_type_specifiers). 
 * - `multiple`: Allows more than one file to be selected. 
 * - `size`: The file input's size. 
 * - `form`: The form to associate this control with. If omitted, the closest containing `<form>` will be used. The value of
 * this attribute must be an ID of a form in the same document or shadow root. 
 * - `required`: Makes the file input required. Form submission will not be allowed when this is set and no files are selected. 
 * - `dropzone`: undefined (property only)
 * - `fileInput`: undefined (property only)
 * - `isDragging`: undefined (property only)
 * - `isInvalid`: undefined (property only)
 * - `hadUserInteraction`: undefined (property only)
 * - `wasSubmitted`: undefined (property only)
 * - `files`: An array of files that are currently selected. (Property only) (property only)
 * 
 * #### Events
 * 
 * Events that will be emitted by the component.
 * 
 * - `quiet-blur`: Emitted when the file input loses focus. This event does not bubble.
 * - `quiet-change`: Emitted when the user selects or removes a file.
 * - `quiet-focus`: Emitted when the file input receives focus. This event does not bubble.
 * - `quiet-input`: Emitted when the file input receives input.
 * 
 * #### Slots
 * 
 * Areas where markup can be added to the component.
 * 
 * - `label`: The file input's label. For plain-text labels, you can use the `label` attribute instead.
 * - `description`: The file input's description. For plain-text descriptions, you can use the `description` attribute instead.
 * - `dropzone`: Custom content to show in the dropzone.
 * 
 * #### CSS Parts
 * 
 * Custom selectors for styling elements within the component.
 * 
 * - `label`: The element that contains the text field's label, a `<label>` element.
 * - `description`: The element that contains the text field's description.
 * - `dropzone`: The bordered region where files can be dropped.
 * - `file-list`: The list of files shown when at least one file is selected.
 * - `file`: A selected file will be drawn in this container.
 * - `file-thumbnail`: The container that hold's the file's image or icon.
 * - `file-image`: The file's image preview (if it's an image).
 * - `file-icon`: The file's icon (if it's not an image).
 * - `file-icon__svg`: The `<svg>` part of the file icon.
 * - `file-details`: The container that holds the filename and size.
 * - `file-name`: The container that holds the file's name, a `<span>` element.
 * - `file-size`: The container that holds the file's size, a `<small>` element.
 * - `file-actions`: The container that holds the file's remove button.
 * - `file-remove-button`: The file's remove button.
 * - `file-remove-button__button`: The `button` part of the file's remove button.
 * 
 * #### CSS States
 * 
 * These can be used to apply styling when a component is in a given state.
 * 
 * - `disabled`: Applied when the file input is disabled.
 * - `blank`: Applied when the file input has a blank value.
 * - `focused`: Applied when the file input has focus.
 * - `user-valid`: Applied when the file input is valid and the user has sufficiently interacted with it.
 * - `user-invalid`: Applied when the file input is invalid and the user has sufficiently interacted with it.
  */
    "quiet-file-input": Partial<QuietFileInputProps & BaseProps<QuietFileInput> & BaseEvents>;


  /**
     * <quiet-dropdown>
 * 
 * #### Attributes & Properties
 * 
 * Component attributes and properties that can be applied to the element or by using JavaScript.
 * 
 * - `open`: Opens or closes the dropdown. 
 * - `context-menu`/`contextMenu`: The ID of an element to apply the dropdown as a context menu. 
 * - `placement`: The placement of the dropdown menu in reference to the trigger. The menu will shift to a more optimal location if
 * the preferred placement doesn't have enough room. 
 * - `distance`: The distance of the dropdown menu from its trigger. 
 * - `offset`: The offset of the dropdown menu along its trigger. 
 * - `defaultSlot`: undefined (property only)
 * 
 * #### Events
 * 
 * Events that will be emitted by the component.
 * 
 * - `quiet-before-open`: Emitted when the dropdown is instructed to open but before it is shown.
 * - `quiet-open`: Emitted when the dropdown menu has opened and the animation has completed.
 * - `quiet-before-close`: Emitted when the dropdown is dismissed but before it is hidden.
 * - `quiet-close`: Emitted when the dropdown menu has closed and the animation has completed.
 * - `quiet-select`: Emitted when a dropdown item has been selected. You can inspect `event.detail.item` to see the `<quiet-dropdown-item>` that was selected. Calling `event.preventDefault()` will keep the dropdown open.
 * 
 * #### Slots
 * 
 * Areas where markup can be added to the component.
 * 
 * - `(default)`: One or more `<dropdown-item>` elements to show in the dropdown. You can also use `<quiet-divider>` here.
 * - `trigger`: The dropdown's trigger. Must be a `<quiet-button>` or `<button>` element.
 * 
 * #### CSS Custom Properties
 * 
 * CSS variables available for styling the component.
 * 
 * - `--show-duration`: The duration of the show/hide animation. (default: `50ms`)
 * 
 * #### CSS Parts
 * 
 * Custom selectors for styling elements within the component.
 * 
 * - `menu`: The dropdown menu's container.
 * 
 * #### CSS States
 * 
 * These can be used to apply styling when a component is in a given state.
 * 
 * - `open`: Applied when the dropdown is open.
  */
    "quiet-dropdown": Partial<QuietDropdownProps & BaseProps<QuietDropdown> & BaseEvents>;


  /**
     * <quiet-expander>
 * 
 * #### Attributes & Properties
 * 
 * Component attributes and properties that can be applied to the element or by using JavaScript.
 * 
 * - `expanded`: Whether the content is expanded 
 * - `disabled`: Disables the expand/collapse functionality 
 * - `without-shadow`/`withoutShadow`: When true, the shadow above collapsed content will not be rendered. 
 * - `content`: undefined (property only)
 * - `trigger`: undefined (property only)
 * 
 * #### Events
 * 
 * Events that will be emitted by the component.
 * 
 * - `quiet-before-open`: Emitted before the expander opens. Cancelable event that prevents opening when canceled.
 * - `quiet-open`: Emitted after the expander has opened.
 * - `quiet-before-close`: Emitted before the expander closes. Cancelable event that prevents closing when canceled.
 * - `quiet-close`: Emitted after the expander has closed.
 * 
 * #### Slots
 * 
 * Areas where markup can be added to the component.
 * 
 * - `(default)`: The default slot for content to be expanded/collapsed.
 * - `expand-label`: The label for the button that expands the content.
 * - `collapse-label`: The label for the button that collapses the content.
 * 
 * #### CSS Custom Properties
 * 
 * CSS variables available for styling the component.
 * 
 * - `--preview-height`: The visible height of the expander's content when collapsed. (default: `3lh`)
 * - `--duration`: The duration of the expand/collapse animation. (default: `200ms`)
 * - `--easing`: The easing to use for the expand/collapse animation. (default: `ease`)
 * 
 * #### CSS Parts
 * 
 * Custom selectors for styling elements within the component.
 * 
 * - `content`: The container holding the expandable content.
 * - `shadow`: The shadow that shows above collapsed content.
 * - `trigger`: The button that toggles between expanded and collapsed states.
 * 
 * #### CSS States
 * 
 * These can be used to apply styling when a component is in a given state.
 * 
 * - `disabled`: Applied when the expander is disabled.
 * - `expanded`: Applied when the content is expanded.
  */
    "quiet-expander": Partial<QuietExpanderProps & BaseProps<QuietExpander> & BaseEvents>;


  /**
     * <quiet-empty-state>
 * 
 * #### Slots
 * 
 * Areas where markup can be added to the component.
 * 
 * - `(default)`: Content to show in the empty state. Usually includes a heading, a paragraph, and sometimes buttons.
 * - `illustration`: An optional illustration to show in the empty state. Works well with an image or a `<quiet-icon>` element.
 * 
 * #### CSS Custom Properties
 * 
 * CSS variables available for styling the component.
 * 
 * - `--content-width`: The maximum width of the empty state's content. When space is limited, the content will wrap automatically. (default: `40ch`)
 * - `--illustration-width`: The maximum width of the illustration. By default, this will be half of `--content-width`. This property does not affect the size of icons. (default: `undefined`)
 * 
 * #### CSS Parts
 * 
 * Custom selectors for styling elements within the component.
 * 
 * - `content`: The container that wraps the content.
 * - `illustration`: The container that wraps the illustration.
  */
    "quiet-empty-state": Partial<QuietEmptyStateProps & BaseProps<QuietEmptyState> & BaseEvents>;


  /**
     * <quiet-fit-text>
 * 
 * #### Attributes & Properties
 * 
 * Component attributes and properties that can be applied to the element or by using JavaScript.
 * 
 * - `min-font-size`/`minFontSize`: The minimum font size to use when scaling, in pixels. The text will never be smaller than this value, which may
 * lead to overflows if the text is excessively long. 
 * - `max-font-size`/`maxFontSize`: The maximum font size to use when scaling, in pixels. The text will never be larger than this value, which may
 * cause the text to not scale the full width of the container. 
 * - `precision`: The precision, in pixels, used to scale the text to fit. Larger values are more performant but result in less
 * accurate measurements. 
 * - `measure`: undefined (property only)
 * - `defaultSlot`: undefined (property only)
 * - `containerWidth`: undefined (property only)
 * - `text`: undefined (property only)
 * 
 * #### Slots
 * 
 * Areas where markup can be added to the component.
 * 
 * - `(default)`: One or more text nodes to display. Non-text nodes will be ignored.
 * 
 * #### Methods
 * 
 * Methods that can be called to access component functionality.
 * 
 * - `resize() => void`: Resizes the text to fit inside the container. You probably won't need to call this unless you're loading a font
 * dynamically and need to resize the text after it loads.
  */
    "quiet-fit-text": Partial<QuietFitTextProps & BaseProps<QuietFitText> & BaseEvents>;


  /**
     * <quiet-flip-card>
 * 
 * #### Attributes & Properties
 * 
 * Component attributes and properties that can be applied to the element or by using JavaScript.
 * 
 * - `flipped`: Flips the card. 
 * - `orientation`: Determines the flip direction. 
 * - `defaultSlot`: undefined (property only)
 * - `backSlot`: undefined (property only)
 * 
 * #### Events
 * 
 * Events that will be emitted by the component.
 * 
 * - `quiet-before-flip`: Emitted when the flip card is instructed to flip but before it actually flips. Calling `event.preventDefault()` will prevent the flip card from flipping.
 * - `quiet-flip`: Emitted after the flip card has been flipped and the animation has completed.
 * 
 * #### Slots
 * 
 * Areas where markup can be added to the component.
 * 
 * - `front`: The content to show on the front of the card.
 * - `back`: The content to show on the back of the card.
 * 
 * #### CSS Custom Properties
 * 
 * CSS variables available for styling the component.
 * 
 * - `--flip-duration`: The duration of the card flip animation. (default: `0.6s`)
 * - `--flip-easing`: The easing to use for the flip animation. (default: `cubic-bezier(0.2, 0.85, 0.3, 1.15)`)
 * 
 * #### CSS States
 * 
 * These can be used to apply styling when a component is in a given state.
 * 
 * - `flipped`: Applied when the card is flipped over.
  */
    "quiet-flip-card": Partial<QuietFlipCardProps & BaseProps<QuietFlipCard> & BaseEvents>;


  /**
     * <quiet-hotkey>
 * 
 * #### Attributes & Properties
 * 
 * Component attributes and properties that can be applied to the element or by using JavaScript.
 * 
 * - `keys`: The primary keys to display in the hotkey, separated by a space. 
 * - `linux`: The keys to display on Linux devices, separated by a space. 
 * - `mac`: The keys to display on Mac devices, separated by a space. 
 * - `windows`: The keys to display on Windows devices, separated by a space. 
 * - `label`: Optional label for screen readers. If not provided, the hotkey text will be used. 
 * - `delimiter`: The delimiter to show between each key. When set to `auto`, the delimiter will be determined by the platform (no
 * character for Mac and "+" for others). 
 * - `platform`: Determines the platform to show. When set to `auto`, the platform will be automatically detected. The `linux`
 * platform will be used for most Linux, Unix, and BSD operating systems. 
 * - `appearance`: The hotkey's appearance. 
 * 
 * #### CSS Parts
 * 
 * Custom selectors for styling elements within the component.
 * 
 * - `key`: The `<kbd>` elements that wrap keys.
 * - `keyword`: The `<kbd>` elements that wrap keywords.
 * - `delimiter`: The `<span>` elements that wrap delimiters.
  */
    "quiet-hotkey": Partial<QuietHotkeyProps & BaseProps<QuietHotkey> & BaseEvents>;


  /**
     * <quiet-include>
 * 
 * #### Attributes & Properties
 * 
 * Component attributes and properties that can be applied to the element or by using JavaScript.
 * 
 * - `src`: The URL of the file to include. Must be a CORS-enabled endpoint. 
 * - `mode`: The mode to use when fetching the request. 
 * - `allow-scripts`/`allowScripts`: By default, scripts in included files will not be executed. Setting this to true will allow them to run. If you use
 * this option, make sure you trust the included HTML, otherwise you may become vulnerable to XSS exploits. 
 * 
 * #### Events
 * 
 * Events that will be emitted by the component.
 * 
 * - `quiet-included`: Emitted when the include file has been fetched and rendered. The HTTP status code will be available in `event.detail.status`. This event does not bubble.
 * - `quiet-include-error`: Emitted when the fetch results in a network error or receives an HTTP response outside of the 200 range. If a network error occurs, it will be available in `event.detail.error`. If an HTTP status code was returned, it will be available in `event.detail.status`. This event does not bubble.
  */
    "quiet-include": Partial<QuietIncludeProps & BaseProps<QuietInclude> & BaseEvents>;


  /**
     * <quiet-icon>
 * 
 * #### Attributes & Properties
 * 
 * Component attributes and properties that can be applied to the element or by using JavaScript.
 * 
 * - `library`: The name of the icon library to use. 
 * - `family`: The icon family to use for this icon, e.g. `filled` or `outline`. 
 * - `name`: The name of the icon to render. 
 * - `label`: A label to use for assistive devices. If omitted, the icon will be considered presentational. 
 * - `flip-x`/`flipX`: Flips the icon horizontally. 
 * - `flip-y`/`flipY`: Flips the icon vertically. 
 * - `rotate`: Rotates the icon the specified number of degrees. 
 * - `svg`: undefined (property only)
 * 
 * #### Events
 * 
 * Events that will be emitted by the component.
 * 
 * - `quiet-loaded`: The icon has reloaded and rendered. This event does not bubble.
 * - `quiet-load-error`: The icon failed to load. This event does not bubble.
 * 
 * #### Methods
 * 
 * Methods that can be called to access component functionality.
 * 
 * - `load() => void`: Loads or reloads and draws the icon.
 * 
 * #### CSS Parts
 * 
 * Custom selectors for styling elements within the component.
 * 
 * - `svg`: The internal SVG element.
  */
    "quiet-icon": Partial<QuietIconProps & BaseProps<QuietIcon> & BaseEvents>;


  /**
     * <quiet-infinite-scroller>
 * 
 * #### Attributes & Properties
 * 
 * Component attributes and properties that can be applied to the element or by using JavaScript.
 * 
 * - `label`: An accessible label for the feed. 
 * - `threshold`: The scroll threshold at which to trigger loading more items. Accepts percentages (e.g., "20%") or pixels
 * (e.g., "200px"). 
 * - `defaultSlot`: undefined (property only)
 * - `isLoading`: undefined (property only)
 * - `isComplete`: undefined (property only)
 * 
 * #### Events
 * 
 * Events that will be emitted by the component.
 * 
 * - `quiet-load-more`: Emitted when scrolling reaches the threshold and more items should be loaded.
 * 
 * #### Slots
 * 
 * Areas where markup can be added to the component.
 * 
 * - `(default)`: The default slot for feed items. Each item should have role="article" and be focusable.
 * 
 * #### Methods
 * 
 * Methods that can be called to access component functionality.
 * 
 * - `complete() => void`: Mark the feed as completed, preventing further load events. Changing content in the default slot will reset this
 * and re-enable infinite scrolling.
 * 
 * #### CSS States
 * 
 * These can be used to apply styling when a component is in a given state.
 * 
 * - `loading`: Applied when the infinite scroller is loading more content.
 * - `complete`: Applied when the infinite scroller has no more content to load.
  */
    "quiet-infinite-scroller": Partial<QuietInfiniteScrollerProps & BaseProps<QuietInfiniteScroller> & BaseEvents>;


  /**
     * <quiet-intersection-observer>
 * 
 * #### Attributes & Properties
 * 
 * Component attributes and properties that can be applied to the element or by using JavaScript.
 * 
 * - `root`: The ID of the element to use as as the bounding box of the viewport for the observed targets. 
 * - `root-margin`/`rootMargin`: Margin around the root. Can have values similar to the CSS margin property. 
 * - `threshold`: Either a single number or space-delimited numbers which indicate at what percentage of the target's visibility the observer's callback should be executed. 
 * - `intersect-class`/`intersectClass`: A CSS class name to apply to elements while they're intersecting. The class will be removed when the element is no
 * longer in the viewport. This allows you to apply styles to elements as they enter and exit the viewport using pure
 * CSS. 
 * - `once`: When true, stops observing after the first intersection. 
 * - `disabled`: Disables the intersection observer. 
 * 
 * #### Events
 * 
 * Events that will be emitted by the component.
 * 
 * - `quiet-intersect`: Emitted when an observed element starts or stops intersecting. `event.detail.entry` contains the respective [`IntersectionObserverEntry`](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry) object.
 * 
 * #### Slots
 * 
 * Areas where markup can be added to the component.
 * 
 * - `(default)`: The elements to observe. Only direct children of the host element are observed.
  */
    "quiet-intersection-observer": Partial<QuietIntersectionObserverProps & BaseProps<QuietIntersectionObserver> & BaseEvents>;


  /**
     * A custom web component that renders a joystick controllable via touch or mouse.
 * 
 * #### Attributes & Properties
 * 
 * Component attributes and properties that can be applied to the element or by using JavaScript.
 * 
 * - `label`: An accessible label for the joystick. This won't be visible, but it will be read to assistive devices so you should
 * always include one. 
 * - `disabled`: Indicates whether the joystick is disabled. When `true`, the joystick does not respond to mouse or touch input. 
 * - `mode`: The operational mode of the joystick. 'normal' snaps back to center on release, 'sticky' retains its last position. 
 * - `dead-zone`/`deadZone`: The normalized distance (0-1) from the center below which no movement is registered. 
 * - `thumbEl`: undefined (property only)
 * 
 * #### Events
 * 
 * Events that will be emitted by the component.
 * 
 * - `quiet-joystick-before-start`: Emitted before interaction begins. Calling `event.preventDefault()` will cancel activation.
 * - `quiet-joystick-start`: Emitted when movement begins.
 * - `quiet-joystick-move`: Emitted continuously during movement. Consider debouncing for performance-sensitive applications.
 * - `quiet-joystick-before-stop`: Emitted before interaction ends. Calling `event.preventDefault()` will cancel deactivation.
 * - `quiet-joystick-stop`: Emitted when movement ends.
 * 
 * #### Slots
 * 
 * Areas where markup can be added to the component.
 * 
 * - `thumb`: An optional icon to display inside the thumb.
 * 
 * #### Methods
 * 
 * Methods that can be called to access component functionality.
 * 
 * - `reset() => void`: Programmatically resets the joystick's position. Useful for resetting it in sticky mode, e.g. when a game restarts.
 * 
 * #### CSS Custom Properties
 * 
 * CSS variables available for styling the component.
 * 
 * - `--size`: The overall width and height of the joystick. (default: `7rem`)
 * - `--thumb-size`: The width and height of the movable thumb. (default: `2.5rem`)
 * - `--distance`: A readonly custom property that represents the normalized distance (0-1) of the thumb from the center, updated dynamically during movement. You can use this to change the joystick's appearance as the user moves the thumb. (default: `0`)
 * 
 * #### CSS Parts
 * 
 * Custom selectors for styling elements within the component.
 * 
 * - `thumb`: The movable thumb within the joystick.
 * 
 * #### CSS States
 * 
 * These can be used to apply styling when a component is in a given state.
 * 
 * - `disabled`: Applied when the joystick is disabled.
 * - `dragging`: Applied when the joystick is being dragged.
  */
    "quiet-joystick": Partial<QuietJoystickProps & BaseProps<QuietJoystick> & BaseEvents>;


  /**
     * <quiet-listbox-item>
 * 
 * #### Attributes & Properties
 * 
 * Component attributes and properties that can be applied to the element or by using JavaScript.
 * 
 * - `label`: The listbox item's label. If you need to provide HTML in the label, use the `label` slot instead. 
 * - `description`: The listbox item's description. If you need to provide HTML in the description, use the `description` slot instead. 
 * - `value`: The listbox item's value. 
 * - `selected`: The listbox item's selected state. 
 * - `disabled`: Disables the listbox item. 
 * 
 * #### Slots
 * 
 * Areas where markup can be added to the component.
 * 
 * - `(default)`: The listbox item's label. For plain-text labels, you can use the `label` attribute instead.
 * 
 * #### CSS States
 * 
 * These can be used to apply styling when a component is in a given state.
 * 
 * - `selected`: Applied when the listbox item is selected.
 * - `disabled`: Applied when the listbox item is disabled.
 * - `controller-disabled`: Applied when the listbox controller is disabled.
 * - `controller-focused`: Applied when the listbox controller focused.
 * - `controller-readonly`: Applied when the listbox controller is readonly.
  */
    "quiet-listbox-item": Partial<QuietListboxItemProps & BaseProps<QuietListboxItem> & BaseEvents>;


  /**
     * <quiet-listbox>
 * 
 * #### Attributes & Properties
 * 
 * Component attributes and properties that can be applied to the element or by using JavaScript.
 * 
 * - `label`: The listbox's label. If you need to provide HTML in the label, use the `label` slot instead. 
 * - `description`: The listbox's description. If you need to provide HTML in the description, use the `description` slot instead. 
 * - `name`: The name of the listbox. This will be submitted with the form as a name/value pair. 
 * - `multiple`: Enables multiple selection mode. 
 * - `disabled`: Disables the listbox. 
 * - `readonly`: Makes the text field a read-only field. 
 * - `size`: The text field's size. 
 * - `form`: The form to associate this control with. If omitted, the closest containing `<form>` will be used. The value of
 * this attribute must be an ID of a form in the same document or shadow root. 
 * - `required`: Makes the listbox required. Form submission will not be allowed when this is set and the listbox is blank. 
 * - `value`: The listbox's value. For multiple selection, this will be the value of the first selected item. 
 * - `selectedValues`: Gets or sets the currently selected values as an array. This property provides a consistent way to access or modify
 * the selection state regardless of whether the listbox is in single or multiple selection mode.
 * 
 * In single selection mode, it returns an array with either zero or one value. In multiple selection mode, it returns
 * an array of all selected values.
 * 
 * When setting this property in single mode, the first value in the array (if any) becomes the selected value. In
 * multiple mode, all values in the array become selected. 
 * - `selectedItems`: Gets or sets an array of selected listbox items. (property only)
 * 
 * #### Events
 * 
 * Events that will be emitted by the component.
 * 
 * - `quiet-blur`: Emitted when the list box loses focus. This event does not bubble.
 * - `quiet-change`: Emitted when the user commits changes to the list box's selection. In single select mode, it occurs when a change is made and the listbox loses focus. In multiselect mode, it occurs whenever an option is toggled even while the listbox has focus.
 * - `quiet-focus`: Emitted when the list box receives focus. This event does not bubble.
 * - `quiet-input`: Emitted when the list box's selection changes from user input.
 * 
 * #### Slots
 * 
 * Areas where markup can be added to the component.
 * 
 * - `(default)`: Listbox items to show in the listbox.
 * - `label`: The listbox's label. For plain-text labels, you can use the `label` attribute instead.
 * - `description`: The listbox's description. For plain-text descriptions, you can use the `description` attribute instead.
 * 
 * #### Methods
 * 
 * Methods that can be called to access component functionality.
 * 
 * - `formDisabledCallback(isDisabled: boolean) => void`: undefined
 * - `formResetCallback() => void`: undefined
 * - `getSelectedValues() => void`: Returns an array of all selected values.
 * - `setSelectedValues(values: string|string[]) => void`: Sets the selected items by value(s) without triggering events.
 * Works for both single and multiple selection modes.
 * - `selectAll() => void`: Convenience method for selecting all items.
 * - `deselectAll() => void`: Convenience method for deselecting all items.
 * - `focus() => void`: Sets focus to the listbox.
 * - `blur() => void`: Removes focus from the listbox.
 * 
 * #### CSS Parts
 * 
 * Custom selectors for styling elements within the component.
 * 
 * - `label`: The element that contains the text field's label.
 * - `description`: The element that contains the text field's description.
 * - `listbox`: The internal listbox container that holds listbox items.
 * 
 * #### CSS States
 * 
 * These can be used to apply styling when a component is in a given state.
 * 
 * - `disabled`: Applied when the text field is disabled.
 * - `blank`: Applied when the text field has a blank value.
 * - `focused`: Applied when the text field has focus.
 * - `user-valid`: Applied when the text field is valid and the user has sufficiently interacted with it.
 * - `user-invalid`: Applied when the text field is invalid and the user has sufficiently interacted with it.
  */
    "quiet-listbox": Partial<QuietListboxProps & BaseProps<QuietListbox> & BaseEvents>;


  /**
     * <quiet-lorem-ipsum>
 * 
 * #### Attributes & Properties
 * 
 * Component attributes and properties that can be applied to the element or by using JavaScript.
 * 
 * - `type`: The type of HTML content to generate. 
 * - `length`: The length of the content to generate, e.g. the number of words, sentences, paragraphs, or list items. This should
 * be a number or a range in the format of `{min}-{max}`, e.g. `2-4`. 
 * - `seed`: By default, the generator will produce random content every time it runs. Use this option to seed the generator
 * with a non-zero number and force it to output the same content every time. 
 * - `words-per-sentence`/`wordsPerSentence`: The number of words that should occur in a sentence or list item. This should be a number or a range in the format
 * of `{min}-{max}`, e.g. `4-16`. 
 * - `sentences-per-paragraph`/`sentencesPerParagraph`: The number of sentences that should occur in a paragraph. This should be a number or a range in the format of
 * `{min}-{max}`, e.g. `3-6`. 
  */
    "quiet-lorem-ipsum": Partial<QuietLoremIpsumProps & BaseProps<QuietLoremIpsum> & BaseEvents>;


  /**
     * <quiet-mutation-observer>
 * 
 * #### Attributes & Properties
 * 
 * Component attributes and properties that can be applied to the element or by using JavaScript.
 * 
 * - `disabled`: Disables the mutation observer. 
 * - `attr`: Indicates whether attributes should be observed. 
 * - `attr-old-value`/`attrOldValue`: Indicates whether attribute old value should be recorded. 
 * - `attr-filter`/`attrFilter`: One or more attributes to limit observations to, separate by a space. When not specified, all attributes are
 * observed. 
 * - `child-list`/`childList`: Indicates whether mutations to target's children are to be observed. 
 * - `subtree`: Indicates whether mutations to target's descendants are to be observed. 
 * - `character-data`/`characterData`: Indicates whether character data should be observed. 
 * - `character-data-old-value`/`characterDataOldValue`: Indicates whether character data old value should be recorded. 
 * 
 * #### Events
 * 
 * Events that will be emitted by the component.
 * 
 * - `quiet-mutation`: Emitted when a slotted element is mutated. The `event.detail.record` property contains a [`MutationRecord`](https://developer.mozilla.org/en-US/docs/Web/API/MutationRecord) with information about the mutation.
 * 
 * #### Slots
 * 
 * Areas where markup can be added to the component.
 * 
 * - `(default)`: The elements to observe. All direct children of the host element are observed, but not nested elements.
  */
    "quiet-mutation-observer": Partial<QuietMutationObserverProps & BaseProps<QuietMutationObserver> & BaseEvents>;


  /**
     * <quiet-navicon>
 * 
 * #### Attributes & Properties
 * 
 * Component attributes and properties that can be applied to the element or by using JavaScript.
 * 
 * - `for`: The ID of the associated menu that gets shown/hidden when the navicon is toggled. The element must be in the same
 * document as the navicon. 
 * - `expanded`: Determines if the navicon is toggled on. 
 * - `symbol`: Determines the navicon's symbol. 
 * - `disabled`: Disables the navicon. 
 * - `label`: The accessible label for the navicon. 
 * 
 * #### Events
 * 
 * Events that will be emitted by the component.
 * 
 * - `quiet-blur`: Emitted when the navicon loses focus. This event does not bubble.
 * - `quiet-focus`: Emitted when the navicon receives focus. This event does not bubble.
 * 
 * #### CSS Custom Properties
 * 
 * CSS variables available for styling the component.
 * 
 * - `--dot-size`: The width of each dot. Available when symbol is `vertical-dots` or `horizontal-dots`. (default: `0.125em`)
 * - `--line-width`: The width of each line. Available when symbol is `hamburger` or `equals`. (default: `0.0625em`)
 * - `--line-transition-duration`: The duration of the symbol's animation. (default: `200ms`)
 * - `--line-transition-easing`: The easing to use for the symbol's animation. (default: `cubic-bezier(0.4, 0, 0.2, 1)`)
 * - `--dot-size`: The size of the dots in the dots symbol. (default: `0.125em`)
 * 
 * #### CSS Parts
 * 
 * Custom selectors for styling elements within the component.
 * 
 * - `line`: The individual lines that make up the navicon symbol.
 * - `line-top`: The top line.
 * - `line-middle`: The middle line (hamburger symbol only).
 * - `line-bottom`: The bottom line.
 * 
 * #### CSS States
 * 
 * These can be used to apply styling when a component is in a given state.
 * 
 * - `expanded`: Applied when the navicon is toggled on.
 * - `disabled`: Applied when the navicon is disabled.
 * - `focused`: Applied when the navicon has focus.
  */
    "quiet-navicon": Partial<QuietNaviconProps & BaseProps<QuietNavicon> & BaseEvents>;


  /**
     * <quiet-mesh-gradient>
 * 
 * #### Attributes & Properties
 * 
 * Component attributes and properties that can be applied to the element or by using JavaScript.
 * 
 * - `complexity`: The number of gradient layers to generate. 
 * - `seed`: A seed value for consistent gradient generation. If not provided, the gradient will be random. 
 * 
 * #### Slots
 * 
 * Areas where markup can be added to the component.
 * 
 * - `(default)`: Content to display over the gradient.
 * 
 * #### Methods
 * 
 * Methods that can be called to access component functionality.
 * 
 * - `regenerate() => void`: Regenerates the gradient. Useful for creating new random gradients programmatically.
 * 
 * #### CSS Custom Properties
 * 
 * CSS variables available for styling the component.
 * 
 * - `--gradient-color`: The base color for the gradient. Accepts any valid CSS color format, but does not accept custom properties, e.g. `var(--my-color)`. (default: `undefined`)
 * - `--brightness`: Adjusts the brightness of the gradient from -100 (darker) to +100 (lighter). (default: `0`)
 * - `--optimal-text-color`: A readonly custom property that maps to the optimal text color (black or white) based on the gradient's base color. (default: `undefined`)
 * 
 * #### CSS Parts
 * 
 * Custom selectors for styling elements within the component.
 * 
 * - `gradient`: The gradient container element for styling the gradient layer.
 * - `content`: The content container element for styling the content layer.
  */
    "quiet-mesh-gradient": Partial<QuietMeshGradientProps & BaseProps<QuietMeshGradient> & BaseEvents>;


  /**
     * <quiet-number-field>
 * 
 * #### Attributes & Properties
 * 
 * Component attributes and properties that can be applied to the element or by using JavaScript.
 * 
 * - `label`: The number field's label. If you need to provide HTML in the label, use the `label` slot instead. 
 * - `description`: The number field's description. If you need to provide HTML in the description, use the `description` slot instead. 
 * - `name`: The name of the number field. This will be submitted with the form as a name/value pair. 
 * - `value`: The number field's value. 
 * - `placeholder`: A placeholder to show in the number field when it's blank. 
 * - `disabled`: Disables the number field. 
 * - `readonly`: Makes the number field a read-only field. 
 * - `appearance`: The type of number field to render. 
 * - `size`: The number field's size. 
 * - `pill`: Draws the number field in a pill shape. 
 * - `form`: The form to associate this control with. If omitted, the closest containing `<form>` will be used. The value of
 * this attribute must be an ID of a form in the same document or shadow root. 
 * - `required`: Makes the number field required. Form submission will not be allowed when this is set and the number field is blank. 
 * - `pattern`: A regular expression the value should match to be considered valid. 
 * - `min`: The minimum value for date/time types. 
 * - `max`: The maximum value for date/time types. 
 * - `step`: The granularity the value must adhere to when incrementing and decrementing. 
 * - `autocomplete`: Tells the browser how to autocomplete the number field. See [this page](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete)
 * for available values. 
 * - `autofocus`: Tells the browser to focus the number field when the page loads or a dialog is shown. 
 * - `enterkeyhint`: Sets the enter key label on virtual keyboards. 
 * - `without-steppers`/`withoutSteppers`: When true, the add/subtract steppers won't be displayed. 
 * - `isInvalid`: undefined (property only)
 * - `hadUserInteraction`: undefined (property only)
 * - `wasSubmitted`: undefined (property only)
 * - `isPasswordVisible`: undefined (property only)
 * 
 * #### Events
 * 
 * Events that will be emitted by the component.
 * 
 * - `quiet-blur`: Emitted when the number field loses focus. This event does not bubble.
 * - `quiet-change`: Emitted when the user commits changes to the number field's value.
 * - `quiet-focus`: Emitted when the number field receives focus. This event does not bubble.
 * - `quiet-input`: Emitted when the number field receives input.
 * 
 * #### Slots
 * 
 * Areas where markup can be added to the component.
 * 
 * - `label`: The number field's label. For plain-text labels, you can use the `label` attribute instead.
 * - `description`: The number field's description. For plain-text descriptions, you can use the `description` attribute instead.
 * - `start`: An icon or similar element to place before the label. Works great with `<quiet-icon>`.
 * - `end`: An icon or similar element to place after the label. Works great with `<quiet-icon>`.
 * 
 * #### Methods
 * 
 * Methods that can be called to access component functionality.
 * 
 * - `focus() => void`: Sets focus to the number field.
 * - `blur() => void`: Removes focus from the number field.
 * - `select() => void`: Selects all text in the number field.
 * - `setSelectionRange(start: number, end: number, direction: 'forward' | 'backward' | 'none' = 'none') => void`: Sets the start and end positions of the current text selection in the number field.
 * - `setRangeText(replacement: string, start?: number, end?: number, selectMode?: 'select' | 'start' | 'end' | 'preserve') => void`: Replaces a range of text in the number field with a new string.
 * - `stepDown() => void`: When a supported `type` is used, this method will decrease the number field's value by `step`. This is a programmatic
 * change, so `input` and `change` events will not be emitted when this is called.
 * - `stepUp() => void`: When a supported `type` is used, this method will increase the number field's value by `step`. This is a programmatic
 * change, so `input` and `change` events will not be emitted when this is called.
 * 
 * #### CSS Parts
 * 
 * Custom selectors for styling elements within the component.
 * 
 * - `label`: The element that contains the number field's label.
 * - `description`: The element that contains the number field's description.
 * - `visual-box`: The element that wraps the internal text box.
 * - `text-box`: The internal text box, an `<input>` element.
 * - `stepper`: The up and down stepper buttons.
 * - `stepper-up`: The up stepper button.
 * - `stepper-down`: The down stepper button.
 * 
 * #### CSS States
 * 
 * These can be used to apply styling when a component is in a given state.
 * 
 * - `disabled`: Applied when the number field is disabled.
 * - `blank`: Applied when the number field has a blank value.
 * - `focused`: Applied when the number field has focus.
 * - `user-valid`: Applied when the number field is valid and the user has sufficiently interacted with it.
 * - `user-invalid`: Applied when the number field is invalid and the user has sufficiently interacted with it.
  */
    "quiet-number-field": Partial<QuietNumberFieldProps & BaseProps<QuietNumberField> & BaseEvents>;


  /**
     * `<quiet-number-ticker>`
 * 
 * #### Attributes & Properties
 * 
 * Component attributes and properties that can be applied to the element or by using JavaScript.
 * 
 * - `start-value`/`startValue`: The starting value for the count. 
 * - `end-value`/`endValue`: The target value to count to. 
 * - `duration`: Duration of the animation in milliseconds. 
 * - `delay`: Delay in milliseconds before counting starts. 
 * - `decimal-places`/`decimalPlaces`: Number of decimal places to display. 
 * - `grouping`: Whether to group numbers, e.g. with a thousands separator. 
 * - `start-on-view`/`startOnView`: Whether to start the animation when the component comes into view. 
 * - `ignore-reduced-motion`/`ignoreReducedMotion`: By default, no animation will occur when the user indicates a preference for reduced motion. Use this attribute to
 * override this behavior when necessary. 
 * - `valueFormatter`: A custom formatting function to apply to the number. When set, `decimal-places` and `grouping` will be ignored.
 * Property only. (property only)
 * 
 * #### Events
 * 
 * Events that will be emitted by the component.
 * 
 * - `quiet-animation-complete`: Emitted when the counting animation has completed.
  */
    "quiet-number-ticker": Partial<QuietNumberTickerProps & BaseProps<QuietNumberTicker> & BaseEvents>;


  /**
     * <quiet-pagination>
 * 
 * #### Attributes & Properties
 * 
 * Component attributes and properties that can be applied to the element or by using JavaScript.
 * 
 * - `label`: A label to use to describe the control to assistive devices. Defaults to "Pagination" when not set. 
 * - `total-pages`/`totalPages`: The total number of pages to show. 
 * - `page`: The current page. 
 * - `siblings`: The number of pages to show on each side of the current page. Minimum 2. 
 * - `jump`: The number of pages to increase or decrease when jump buttons are clicked. 
 * - `format`: How the pagination will display buttons. 
 * - `link-formatter`/`linkFormatter`: A string that, when provided, renders `<a>` elements instead of `<${tag}s>` using this as the link's template.
 * Use `$page` to indicate the page number, e.g. `"/path/to/$page"`. Alternatively, you can provide a JavaScript
 * function that accepts a page number and returns a URL. 
 * - `disabled`: Disables the pagination control. 
 * - `appearance`: Determine's the pagination's appearance. 
 * - `without-nav`/`withoutNav`: Removes the previous and next buttons. 
 * 
 * #### Events
 * 
 * Events that will be emitted by the component.
 * 
 * - `quiet-before-page-change`: Emitted when the page is going to change but before it actually changes. Calling `event.preventDefault()` will prevent the page from changing. Inspect `event.detail` to get the `currentPage` and `requestedPage` properties.
 * - `quiet-page-change`: Emitted after the page has been changed and the UI has been updated.
 * 
 * #### Slots
 * 
 * Areas where markup can be added to the component.
 * 
 * - `previous-icon`: A custom icon to use for the previous button.
 * - `next-icon`: A custom icon to use for the next button.
 * - `jump-backward-icon`: A custom icon to use for the jump backward button.
 * - `jump-forward-icon`: A custom icon to use for jump forward button.
 * 
 * #### CSS Parts
 * 
 * Custom selectors for styling elements within the component.
 * 
 * - `nav`: The navigation container, a `<nav>` element.
 * - `list`: The list that contains the pagination items, a `<ul>` element.
 * - `item`: A pagination item, an `<li>` element.
 * - `button`: A pagination button, a `<button>` or an `<a>` element.
 * - `button-first`: The button that navigates to the first page.
 * - `button-previous`: The button that navigates to the previous page.
 * - `button-next`: The button that navigates to the next page.
 * - `button-last`: The button that navigates to the last page.
 * - `button-page`: A button that navigates to a specific page.
 * - `button-current`: The button that represents the current page.
 * - `button-jump-backward`: The jump backward button.
 * - `button-jump-forward`: The jump forward button.
 * - `range`: The page range that shows the page when viewed in the compact format, e.g. "1 of 10".
 * 
 * #### CSS States
 * 
 * These can be used to apply styling when a component is in a given state.
 * 
 * - `disabled`: Applied when the pagination is disabled.
  */
    "quiet-pagination": Partial<QuietPaginationProps & BaseProps<QuietPagination> & BaseEvents>;


  /**
     * <quiet-number>
 * 
 * #### Attributes & Properties
 * 
 * Component attributes and properties that can be applied to the element or by using JavaScript.
 * 
 * - `number`: The number to format. 
 * - `type`: The formatting style to use. 
 * - `currency`: The currency to use when formatting currency. Must be an ISO 4217 currency code, e.g. "EUR" for euro. If not
 * provided, USD will be assumed. 
 * - `currency-display`/`currencyDisplay`: How to display the currency in currency formatting. 
 * - `currency-sign`/`currencySign`: In many locales, accounting format means to wrap the number with parentheses instead of appending a minus sign. 
 * - `unit`: The unit to use in unit formatting. [Possible values can be found here.](https://tc39.es/ecma402/#table-sanctioned-single-unit-identifiers)
 * There is no default value. If the style is `unit`, this option must be provided. 
 * - `unit-display`/`unitDisplay`: The unit formatting style to use in unit formatting. 
 * - `minimum-integer-digits`/`minimumIntegerDigits`: The minimum number of integer digits to use. A value with a smaller number of integer digits than this number will
 * be left-padded with zeros (to the specified length) when formatted. Possible values are from `1` to `21`. The
 * default is `1`. 
 * - `minimum-fraction-digits`/`minimumFractionDigits`: The minimum number of fraction digits to use. Possible values are from `0` to `20`. 
 * - `maximum-fraction-digits`/`maximumFractionDigits`: The maximum number of fraction digits to use. Possible values are from `0` to `20`. 
 * - `minimum-significant-digits`/`minimumSignificantDigits`: The minimum number of significant digits to use. Possible values are from `1` to `21`; the default is `1`. 
 * - `maximum-significant-digits`/`maximumSignificantDigits`: The maximum number of significant digits to use. Possible values are from `1` to `21`; the default is `21`. 
 * - `rounding-priority`/`roundingPriority`: Specifies how rounding conflicts will be resolved. 
 * - `rounding-increment`/`roundingIncrement`: Indicates the increment at which rounding should take place relative to the calculated rounding magnitude. Possible
 * values are `1`, `2`, `5`, `10`, `20`, `25`, `50`, `100`, `200`, `250`, `500`, `1000`, `2000`, `2500`, and `5000`.
 * Cannot be mixed with significant-digits rounding or any setting of `roundingPriority` other than auto. 
 * - `rounding-mode`/`roundingMode`: How decimals should be rounded. [See this page for more details.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#roundingmode) 
 * - `trailing-zero-display`/`trailingZeroDisplay`: The strategy for displaying trailing zeros on whole numbers. 
 * - `notation`: The formatting that should be displayed for the number. 
 * - `compact-display`/`compactDisplay`: Only used when `notation` is `compact`. 
 * - `grouping`: Whether to use grouping separators, such as thousands separators or thousand/lakh/crore separators. 
 * - `sign-display`/`signDisplay`: When to display the sign for the number. 
  */
    "quiet-number": Partial<QuietNumberProps & BaseProps<QuietNumber> & BaseEvents>;


  /**
     * <quiet-passcode>
 * 
 * #### Attributes & Properties
 * 
 * Component attributes and properties that can be applied to the element or by using JavaScript.
 * 
 * - `label`: The passcode's label. If you need to provide HTML in the label, use the `label` slot instead. 
 * - `description`: The passcode's description. If you need to provide HTML in the description, use the `description` slot instead. 
 * - `name`: The name of the passcode. This will be submitted with the form as a name/value pair. 
 * - `value`: The passcode's value. 
 * - `format`: The format of the passcode. This dictates the number of characters and where delimiters will show. Use `#` to
 * represent an allowed character. Use a space, dash, or any other character to represent a delimiter. Delimiters are
 * shown for visual clarity, but won't be included in the submitted value. 
 * - `disabled`: Disables the passcode. 
 * - `appearance`: The type of passcode to render. 
 * - `size`: The passcode's size. 
 * - `masked`: Masks the characters so they're not displayed on screen.=. 
 * - `type`: The type of characters to allow in the input. 
 * - `case-sensitive`/`caseSensitive`: Makes the passcode case sensitive. 
 * - `form`: The form to associate this control with. If omitted, the closest containing `<form>` will be used. The value of
 * this attribute must be an ID of a form in the same document or shadow root. 
 * - `required`: Makes the passcode required. Form submission will not be allowed when this is set and the passcode is blank. 
 * - `pattern`: A regular expression the value should match to be considered valid. 
 * - `autocomplete`: Tells the browser how to autocomplete the passcode. See [this page](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete)
 * for available values. 
 * - `autofocus`: Tells the browser to focus the passcode when the page loads or a dialog is shown. 
 * - `enterkeyhint`: Sets the enter key label on virtual keyboards. 
 * - `isInvalid`: undefined (property only)
 * - `hadUserInteraction`: undefined (property only)
 * - `wasSubmitted`: undefined (property only)
 * 
 * #### Events
 * 
 * Events that will be emitted by the component.
 * 
 * - `quiet-blur`: Emitted when the passcode loses focus. This event does not bubble.
 * - `quiet-change`: Emitted when the user commits changes to the passcode's value.
 * - `quiet-focus`: Emitted when the passcode receives focus. This event does not bubble.
 * - `quiet-input`: Emitted when the passcode receives input.
 * - `quiet-input-complete`: Emitted when the final character in the passcode is entered. This is useful as a hook to verify the passcode as soon as it's typed in without requiring the user to explicitly submit it.
 * 
 * #### Slots
 * 
 * Areas where markup can be added to the component.
 * 
 * - `label`: The passcode's label. For plain-text labels, you can use the `label` attribute instead.
 * - `description`: The passcode's description. For plain-text descriptions, you can use the `description` attribute instead.
 * 
 * #### Methods
 * 
 * Methods that can be called to access component functionality.
 * 
 * - `focus() => void`: Sets focus to the passcode.
 * - `blur() => void`: Removes focus from the passcode.
 * 
 * #### CSS Parts
 * 
 * Custom selectors for styling elements within the component.
 * 
 * - `label`: The element that contains the passcode's label.
 * - `description`: The element that contains the passcode's description.
 * - `visual-box`: The element that wraps the characters, delimiters, and the hidden input.
 * - `character-box`: Each individual character box.
 * - `delimiter`: Each individual delimiter.
 * 
 * #### CSS States
 * 
 * These can be used to apply styling when a component is in a given state.
 * 
 * - `disabled`: Applied when the passcode is disabled.
 * - `blank`: Applied when the passcode has a blank value.
 * - `focused`: Applied when the passcode has focus.
 * - `user-valid`: Applied when the passcode is valid and the user has sufficiently interacted with it.
 * - `user-invalid`: Applied when the passcode is invalid and the user has sufficiently interacted with it.
  */
    "quiet-passcode": Partial<QuietPasscodeProps & BaseProps<QuietPasscode> & BaseEvents>;


  /**
     * <quiet-popover>
 * 
 * #### Attributes & Properties
 * 
 * Component attributes and properties that can be applied to the element or by using JavaScript.
 * 
 * - `for`: The ID of of popover's anchor element. This must be an interactive/focusable element such as a button and it must
 * be in the same document as the popover. 
 * - `open`: Shows or hides the popover. 
 * - `placement`: The placement of the popover in reference to the anchor. The menu will shift to a more optimal location if the
 * preferred placement doesn't have enough room. 
 * - `distance`: The distance of the popover from its anchor. 
 * - `offset`: The offset of the popover along its trigger. 
 * - `without-arrow`/`withoutArrow`: Renders the popover without an arrow. 
 * 
 * #### Events
 * 
 * Events that will be emitted by the component.
 * 
 * - `quiet-before-open`: Emitted when the popover is instructed to open but before it is shown.
 * - `quiet-open`: Emitted when the popover has opened and the animation has completed.
 * - `quiet-before-close`: Emitted when the popover is dismissed but before it is hidden.
 * - `quiet-close`: Emitted when the popover has closed. and the animation has completed.
 * 
 * #### Slots
 * 
 * Areas where markup can be added to the component.
 * 
 * - `(default)`: The popover's content. Do not include interactive elements such as button, links, etc. as they won't be accessible to users inside the popover.
 * 
 * #### CSS Custom Properties
 * 
 * CSS variables available for styling the component.
 * 
 * - `--arrow-size`: The size of the arrow. To hide the arrow, use the `without-arrow` attribute. (default: `0.3125rem`)
 * - `--max-width`: The maximum width the popover be before wrapping. (default: `25rem`)
 * - `--show-duration`: The duration of the show/hide animation. (default: `100ms`)
 * 
 * #### CSS Parts
 * 
 * Custom selectors for styling elements within the component.
 * 
 * - `dialog`: The element that powers the popover, a `<dialog>` element.
 * - `content`: The element that wraps the popover's content.
 * - `arrow`: The popover's arrow. To change the arrow's size, use `--arrow-size` instead.
 * 
 * #### CSS States
 * 
 * These can be used to apply styling when a component is in a given state.
 * 
 * - `open`: Applied when the popover is open.
  */
    "quiet-popover": Partial<QuietPopoverProps & BaseProps<QuietPopover> & BaseEvents>;


  /**
     * <quiet-progress>
 * 
 * #### Attributes & Properties
 * 
 * Component attributes and properties that can be applied to the element or by using JavaScript.
 * 
 * - `label`: A custom label for assistive devices. 
 * - `appearance`: The type of progress bar to render. 
 * - `min`: The progress bar's minimum value. 
 * - `max`: The progress bar's maximum value. 
 * - `value`: The progress bar's current value. 
 * - `indeterminate`: When the completion status can't be determined, the progress bar is considered indeterminate and the value is
 * ignored. Useful for tasks whose progress can't be reported. 
 * - `percentage`: The progress bar's current value as a percentage. This is a readonly property. (property only) (readonly)
 * 
 * #### Slots
 * 
 * Areas where markup can be added to the component.
 * 
 * - `(default)`: Text to render inside the progress bar.
 * 
 * #### CSS Custom Properties
 * 
 * CSS variables available for styling the component.
 * 
 * - `--track-color`: The color of the progress bar's track. (default: `var(--quiet-neutral-fill-softer)`)
 * - `--track-size`: The height or thickness of the track, depending on the type of progress bar. (default: `1.5em | 1em`)
 * - `--indicator-color`: The color of the progress bar's value indicator. (default: `var(--quiet-primary-fill-mid)`)
 * - `--diameter`: For progress rings, the diameter of the ring. (default: `10em`)
 * 
 * #### CSS Parts
 * 
 * Custom selectors for styling elements within the component.
 * 
 * - `track`: The progress bar's track, a `<div>` for progress bars and a `<circle>` for progress rings.
 * - `indicator`: The progress bar's current value indicator, a `<div>` for progress bars and an SVG `<circle>` for progress rings.
 * - `content`: The container that holds any content that's been slotted in.
  */
    "quiet-progress": Partial<QuietProgressProps & BaseProps<QuietProgress> & BaseEvents>;


  /**
     * <quiet-radio>
 * 
 * #### Attributes & Properties
 * 
 * Component attributes and properties that can be applied to the element or by using JavaScript.
 * 
 * - `label`: The radio's label. If you need to provide HTML in the label, use the `label` slot instead. 
 * - `description`: The radio's description. If you need to provide HTML in the description, use the `description` slot instead. 
 * - `name`: The name of the radio. This will be submitted with the form as a name/value pair. 
 * - `value`: The radio's current value. Set this to change the selected item. 
 * - `orientation`: The orientation of grouped items. 
 * - `form`: The form to associate this control with. If omitted, the closest containing `<form>` will be used. The value of
 * this attribute must be an ID of a form in the same document or shadow root. 
 * - `required`: Indicates at least one option in the radio is required. 
 * - `disabled`: Disables the radio control. 
 * - `group`: undefined (property only)
 * - `isInvalid`: undefined (property only)
 * - `hadUserInteraction`: undefined (property only)
 * - `wasSubmitted`: undefined (property only)
 * 
 * #### Events
 * 
 * Events that will be emitted by the component.
 * 
 * - `quiet-change`: Emitted when the user commits changes to the radio's value.
 * - `quiet-input`: Emitted when the radio receives input.
 * 
 * #### Slots
 * 
 * Areas where markup can be added to the component.
 * 
 * - `(default)`: The radio items to place in the group.
 * - `label`: The radio's label. For plain-text labels, you can use the `label` attribute instead.
 * - `description`: The radios's description. For plain-text descriptions, you can use the `description` attribute instead.
 * 
 * #### Methods
 * 
 * Methods that can be called to access component functionality.
 * 
 * - `focus(options?: FocusOptions) => void`: Sets focus to the selected item or the first item if none are selected.
 * 
 * #### CSS Parts
 * 
 * Custom selectors for styling elements within the component.
 * 
 * - `label`: The element that contains the radio's label.
 * - `description`: The element that contains the radio's description.
 * - `group`: The element that wraps the grouped radios.
 * 
 * #### CSS States
 * 
 * These can be used to apply styling when a component is in a given state.
 * 
 * - `user-valid`: Applied when the radio is valid and the user has sufficiently interacted with it.
 * - `user-invalid`: Applied when the radio is invalid and the user has sufficiently interacted with it.
  */
    "quiet-radio": Partial<QuietRadioProps & BaseProps<QuietRadio> & BaseEvents>;


  /**
     * <quiet-radio-item>
 * 
 * #### Attributes & Properties
 * 
 * Component attributes and properties that can be applied to the element or by using JavaScript.
 * 
 * - `label`: The radio item's label. If you need to provide HTML in the label, use the `label` slot instead. 
 * - `description`: The radio item's description. If you need to provide HTML in the description, use the `description` slot instead. 
 * - `value`: The radio item's value. 
 * - `checked`: The radio item's checked state. 
 * - `disabled`: Disables the radio item. 
 * - `appearance`: The type of radio item to render. 
 * - `size`: The radio item's size. 
 * 
 * #### Events
 * 
 * Events that will be emitted by the component.
 * 
 * - `quiet-blur`: Emitted when the radio item loses focus. This event does not bubble.
 * - `quiet-focus`: Emitted when the radio item receives focus. This event does not bubble.
 * 
 * #### Slots
 * 
 * Areas where markup can be added to the component.
 * 
 * - `(default)`: The radio item's label. For plain-text labels, you can use the `label` attribute instead.
 * 
 * #### CSS Parts
 * 
 * Custom selectors for styling elements within the component.
 * 
 * - `label`: The `<label>` that wraps the entire control.
 * - `visual-box`: The element that wraps the internal radio.
 * - `radio-icon`: The radio icon, a `<quiet-icon>` element.
 * - `radio-icon__svg`: The radio icon's `svg` part.
 * 
 * #### CSS States
 * 
 * These can be used to apply styling when a component is in a given state.
 * 
 * - `checked`: Applied when the radio item is checked.
 * - `disabled`: Applied when the radio item is disabled.
 * - `focused`: Applied when the radio item has focus.
  */
    "quiet-radio-item": Partial<QuietRadioItemProps & BaseProps<QuietRadioItem> & BaseEvents>;


  /**
     * <quiet-random-content>
 * 
 * #### Attributes & Properties
 * 
 * Component attributes and properties that can be applied to the element or by using JavaScript.
 * 
 * - `items`: The number of items to show. 
 * - `mode`: The selection mode. The default is 'unique', which ensures different items are shown after calling `randomize()`,
 * when possible. Use `random` for true randomization or `sequence` to show the next set of items based on their DOM
 * position. 
 * 
 * #### Slots
 * 
 * Areas where markup can be added to the component.
 * 
 * - `(default)`: A pool of items that will be randomly displayed. Each item _must_ be a direct descendant of the host element.
 * 
 * #### Methods
 * 
 * Methods that can be called to access component functionality.
 * 
 * - `randomize() => void`: Rotates the visible item(s) based on the selected mode.
  */
    "quiet-random-content": Partial<QuietRandomContentProps & BaseProps<QuietRandomContent> & BaseEvents>;


  /**
     * <quiet-qr>
 * 
 * #### Attributes & Properties
 * 
 * Component attributes and properties that can be applied to the element or by using JavaScript.
 * 
 * - `data`: A string of data to encode. URLs, email addresses, and other types of text are fine. 
 * - `label`: A descriptive label for assistive devices. This will not be shown, but it will be announced by screen readers. If
 * no label is provided, the raw data will be used instead. 
 * - `error-correction`/`errorCorrection`: Determines the level of error correction. The values correspond to those in the
 * [QR Code specification](https://www.qrcode.com/en/about/standards.html). 
 * - `corners`: The corner radius of the blocks that make up the QR code. For best results, keep this within 0–0.5. 
 * - `size`: The size of the resulting code in pixels. In most cases, 128–512 is ideal. 
  */
    "quiet-qr": Partial<QuietQrProps & BaseProps<QuietQr> & BaseEvents>;


  /**
     * <quiet-rating>
 * 
 * #### Attributes & Properties
 * 
 * Component attributes and properties that can be applied to the element or by using JavaScript.
 * 
 * - `label`: The rating's label. If you need to provide HTML in the label, use the `label` slot instead. 
 * - `description`: The rating's description. If you need to provide HTML in the description, use the `description` slot instead. 
 * - `name`: The name of the rating. This will be submitted with the form as a name/value pair. 
 * - `value`: The rating's value. 
 * - `disabled`: Disables the rating. 
 * - `readonly`: Makes the rating a read-only field. 
 * - `size`: The rating's size. 
 * - `form`: The form to associate this control with. If omitted, the closest containing `<form>` will be used. The value of
 * this attribute must be an iD of a form in the same document or shadow root. 
 * - `required`: Makes the rating required. Form submission will not be allowed when this is set and the rating is empty. 
 * - `max`: The maximum value allowed. 
 * - `step`: The granularity the value must adhere to when incrementing and decrementing. 
 * - `autofocus`: Tells the browser to focus the rating when the page loads or a dialog is shown. 
 * - `rating`: undefined (property only)
 * - `isInvalid`: undefined (property only)
 * - `hadUserInteraction`: undefined (property only)
 * - `wasSubmitted`: undefined (property only)
 * - `symbolFormatter`: A function that returns the HTML for each symbol. The function will receive the `value` and `isSelected` arguments
 * that you can use to customize the symbol based on specific values or whether the symbol is in the selected state.
 * You should only return trusted HTML from this function, otherwise you may become vulnerable to XSS exploits. (property only)
 * 
 * #### Events
 * 
 * Events that will be emitted by the component.
 * 
 * - `quiet-blur`: Emitted when the rating loses focus. This event does not bubble.
 * - `quiet-change`: Emitted when the user commits changes to the rating's value.
 * - `quiet-focus`: Emitted when the rating receives focus. This event does not bubble.
 * - `quiet-input`: Emitted when the rating receives input.
 * 
 * #### Slots
 * 
 * Areas where markup can be added to the component.
 * 
 * - `label`: The rating's label. For plain-text labels, you can use the `label` attribute instead.
 * - `description`: The rating's description. For plain-text descriptions, you can use the `description` attribute instead.
 * 
 * #### Methods
 * 
 * Methods that can be called to access component functionality.
 * 
 * - `focus() => void`: Sets focus to the rating.
 * - `blur() => void`: Removes focus from the rating.
 * - `stepDown() => void`: Decreases the rating's value by `step`. This is a programmatic change, so `input` and `change` events will not be
 * emitted when this is called.
 * - `stepUp() => void`: Increases the rating's value by `step`. This is a programmatic change, so `input` and `change` events will not be
 * emitted when this is called.
 * 
 * #### CSS Parts
 * 
 * Custom selectors for styling elements within the component.
 * 
 * - `label`: The element that contains the ratings's label.
 * - `description`: The element that contains the rating's description.
 * - `rating`: The element that wraps all of the rating's symbols.
 * - `symbol`: The container that holds the selected and unselected version of each symbol.
 * 
 * #### CSS States
 * 
 * These can be used to apply styling when a component is in a given state.
 * 
 * - `disabled`: Applied when the rating is disabled.
 * - `focused`: Applied when the rating has focus.
 * - `user-valid`: Applied when the rating is valid and the user has sufficiently interacted with it.
 * - `user-invalid`: Applied when the rating is invalid and the user has sufficiently interacted with it.
  */
    "quiet-rating": Partial<QuietRatingProps & BaseProps<QuietRating> & BaseEvents>;


  /**
     * <quiet-relative-time>
 * 
 * #### Attributes & Properties
 * 
 * Component attributes and properties that can be applied to the element or by using JavaScript.
 * 
 * - `date`: The date from which to calculate the relative time from. If an attribute is passed, the date should be an [ISO 8601
 * string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString). If set
 * as a property, a `Date` object can be used instead. If unset, the current date will be assumed. 
 * - `format`: The style of date to render. 
 * - `numeric`: When `auto`, the date may produce strings such as "yesterday" instead of "1 day ago". 
 * - `live`: When set, the time will update itself. 
  */
    "quiet-relative-time": Partial<QuietRelativeTimeProps & BaseProps<QuietRelativeTime> & BaseEvents>;


  /**
     * <quiet-resize-observer>
 * 
 * #### Attributes & Properties
 * 
 * Component attributes and properties that can be applied to the element or by using JavaScript.
 * 
 * - `disabled`: Disables the resize observer. 
 * - `box`: Sets which box model the observer will observe changes to. 
 * 
 * #### Events
 * 
 * Events that will be emitted by the component.
 * 
 * - `quiet-resize`: Emitted when a slotted element is resized. Like `ResizeObserver`, this event is also dispatched when each element is first observed. The `event.detail.entry` property contains a [`ResizeObserverEntry`](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserverEntry) with information about the element's dimensions.
 * 
 * #### Slots
 * 
 * Areas where markup can be added to the component.
 * 
 * - `(default)`: The elements to observe. All direct children of the host element are observed, but not nested elements.
  */
    "quiet-resize-observer": Partial<QuietResizeObserverProps & BaseProps<QuietResizeObserver> & BaseEvents>;


  /**
     * <quiet-search-list>
 * 
 * #### Attributes & Properties
 * 
 * Component attributes and properties that can be applied to the element or by using JavaScript.
 * 
 * - `controller`: In most cases, you should slot the controller into the `controller` slot. However, when the controller must exist
 * outside the search list, you can set this property to the ID of an external `<input>` or `<quiet-text-field>`
 * element instead. 
 * - `match`: The search behavior to use when finding a matching item. The `exact` search is case-insensitive but requires an
 * exact match. The `fuzzy` search is more forgiving to typos. When using `custom`, you can set the `isMatch` property
 * to a custom function to determine if the provided query matches the element's content. 
 * - `debounce`: The time in milliseconds to use for debouncing the search results while the user types. 
 * - `results`: undefined (property only)
 * - `query`: undefined (property only)
 * - `isEmpty`: undefined (property only)
 * - `isInitial`: undefined (property only)
 * - `resultsMessage`: undefined (property only)
 * - `isMatch`: A custom search function you can provide to change the search behavior. The function is applied to each item when
 * the search query changes. The `query` argument is the current search term, `content` is a string containing the
 * element's searchable content, including its `textContent` and `data-keywords"`, and `el` is the element being
 * searched. Property only. (property only)
 * 
 * #### Slots
 * 
 * Areas where markup can be added to the component.
 * 
 * - `(default)`: One or more elements to be searched. Each element must be a direct descendent of the host, i.e. do not wrap items in other containers. If desired, you can apply flex and grid styles to the `items` part to control how items appear in the list. By default, items will be displayed in a flex column.
 * - `controller`: A `<quiet-text-field>` or `<input>` element that will control the search list.
 * - `initial`: Optional content to display when no search query has been entered.
 * - `empty`: Optional content to display when the search yields no results.
 * 
 * #### Methods
 * 
 * Methods that can be called to access component functionality.
 * 
 * - `setQuery(query = '') => void`: Sets the search query and updates the results. To clear the search, set this to an empty string.
 * 
 * #### CSS Parts
 * 
 * Custom selectors for styling elements within the component.
 * 
 * - `items`: The container that wraps the slotted items. Displays as a flex column by default.
 * 
 * #### CSS States
 * 
 * These can be used to apply styling when a component is in a given state.
 * 
 * - `empty`: Applied when a query is entered and no matching results are found.
 * - `initial`: Applied when the query is empty and the `initial` slot is showing.
  */
    "quiet-search-list": Partial<QuietSearchListProps & BaseProps<QuietSearchList> & BaseEvents>;


  /**
     * <quiet-scroller>
 * 
 * #### Attributes & Properties
 * 
 * Component attributes and properties that can be applied to the element or by using JavaScript.
 * 
 * - `orientation`: The scroller's orientation. 
 * - `without-scrollbar`/`withoutScrollbar`: Removes the visible scrollbar. 
 * - `without-shadow`/`withoutShadow`: Removes the shadows. 
 * - `content`: undefined (property only)
 * - `canScroll`: undefined (property only)
 * 
 * #### Slots
 * 
 * Areas where markup can be added to the component.
 * 
 * - `(default)`: The content to show inside the scroller.
 * 
 * #### CSS Custom Properties
 * 
 * CSS variables available for styling the component.
 * 
 * - `--shadow-color`: The base color of the shadow. (default: `var(--quiet-neutral-fill-mid)`)
 * - `--shadow-size`: The width of the shadow. (default: `2rem`)
 * - `--thumb-color`: The color of the scrollbar's thumb (supportive browsers only). (default: `var(--quiet-neutral-fill-mid)`)
 * - `--track-color`: The color of the scrollbar's track (supportive browsers only). (default: `transparent`)
 * 
 * #### CSS Parts
 * 
 * Custom selectors for styling elements within the component.
 * 
 * - `content`: The container that wraps the slotted content.
 * - `start-shadow`: The starting shadow.
 * - `end-shadow`: The ending shadow.
  */
    "quiet-scroller": Partial<QuietScrollerProps & BaseProps<QuietScroller> & BaseEvents>;


  /**
     * <quiet-share>
 * 
 * #### Attributes & Properties
 * 
 * Component attributes and properties that can be applied to the element or by using JavaScript.
 * 
 * - `label`: A human-readable label to be shared. This is sometimes ignored by the operating system, but you should usually
 * provide it as a fallback value. 
 * - `text`: A string of text to be shared. 
 * - `url`: A URL to be shares. 
 * - `files`: An array of [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File) objects to be shared. Property only. 
 * - `disabled`: Disables the button. 
 * - `feedback-placement`/`feedbackPlacement`: The placement of the feedback animation when falling back to copying. 
 * 
 * #### Slots
 * 
 * Areas where markup can be added to the component.
 * 
 * - `(default)`: A custom button to use instead of the default.
 * 
 * #### CSS Parts
 * 
 * Custom selectors for styling elements within the component.
 * 
 * - `share-button`: The default share button, a `<quiet-button>` element.
 * - `share-button__button`: The default share button's `button` part.
 * - `share-icon`: The default share icon, a `<quiet-icon>` element.
 * - `share-icon__svg`: The share icon's `svg` part.
 * - `feedback`: The feedback that shows when copying (e.g. when the Web Share API is unsupported).
  */
    "quiet-share": Partial<QuietShareProps & BaseProps<QuietShare> & BaseEvents>;


  /**
     * <quiet-slide-activator>
 * 
 * #### Attributes & Properties
 * 
 * Component attributes and properties that can be applied to the element or by using JavaScript.
 * 
 * - `label`: The label to show in the slide activator's track. If you need to provide HTML in the label, use the `label` slot
 * instead. 
 * - `activated-label`/`activatedLabel`: The label to show when the control is activated. If omitted, the regular label will be shown. If you need to
 * provide HTML in the label, use the `label` slot instead. 
 * - `activated`: Reflects when the control is activated. Remove this attribute to deactivate it. 
 * - `disabled`: Disables the control. 
 * - `attention`: Draws attention to the track by adding a subtle animation. 
 * - `thumb`: undefined (property only)
 * - `isDragging`: undefined (property only)
 * - `isPressing`: undefined (property only)
 * - `thumbPosition`: undefined (property only)
 * 
 * #### Events
 * 
 * Events that will be emitted by the component.
 * 
 * - `quiet-before-activate`: Emitted when the control will activate. Calling `event.preventDefault()` will prevent the activation from occurring.
 * - `quiet-activate`: Emitted immediately after the control is activated.
 * - `quiet-before-deactivate`: Emitted when the control will deactivate. Calling `event.preventDefault()` will prevent the deactivation from occurring.
 * - `quiet-deactivate`: Emitted immediately after the control is deactivated.
 * - `quiet-progress`: Emitted as the slider progresses. Use `event.details.percent` to see how far along it is.
 * 
 * #### Slots
 * 
 * Areas where markup can be added to the component.
 * 
 * - `label`: The slide activator's label. For plain-text labels, you can use the `label` attribute instead.
 * - `activated-label`: The label to show when activated. For plain-text labels, you can use the `activated-label` attribute instead.
 * - `thumb`: The thumb element that users drag. Defaults to a double chevron icon if not provided.
 * 
 * #### CSS Custom Properties
 * 
 * CSS variables available for styling the component.
 * 
 * - `--border-radius`: The control's border radius. We use a CSS custom property so we can properly calculate the inset border radius for the thumb. (default: `var(--quiet-border-radius-lg)`)
 * - `--thumb-width`: The thumb's width. (default: `4em`)
 * - `--thumb-inset`: The thumb's inset from the host element. (default: `0.125em`)
 * - `--shimmer-color`: The color to use as a base for the shimmer animation. (default: `undefined`)
 * - `--thumb-position`: A read-only property that moves from 0 to 1 as the user slides the thumb to activate the control. Useful as a hook to transition background styles based on the thumb's position. (default: `(read-only)`)
 * 
 * #### CSS Parts
 * 
 * Custom selectors for styling elements within the component.
 * 
 * - `thumb`: The slide activator's thumb.
 * - `label`: The slide activator's label.
 * 
 * #### CSS States
 * 
 * These can be used to apply styling when a component is in a given state.
 * 
 * - `activated`: Applied briefly when the slide activator has been activated.
 * - `dragging`: Applied when the slide activator is dragging.
 * - `pressing`: Applied when the user is pressing a key to activate the slide activator.
 * - `disabled`: Applied when the slide activator is disabled.
  */
    "quiet-slide-activator": Partial<QuietSlideActivatorProps & BaseProps<QuietSlideActivator> & BaseEvents>;


  /**
     * <quiet-select>
 * 
 * #### Attributes & Properties
 * 
 * Component attributes and properties that can be applied to the element or by using JavaScript.
 * 
 * - `label`: The select's label. If you need to provide HTML in the label, use the `label` slot instead. 
 * - `description`: The select's description. If you need to provide HTML in the description, use the `description` slot instead. 
 * - `name`: The name of the select. This will be submitted with the form as a name/value pair. 
 * - `value`: The select's value. 
 * - `disabled`: Disables the select. 
 * - `readonly`: Makes the select a read-only field. 
 * - `appearance`: The type of select to render. 
 * - `size`: The select's size. 
 * - `pill`: Draws the select in a pill shape. 
 * - `form`: The form to associate this control with. If omitted, the closest containing `<form>` will be used. The value of
 * this attribute must be an ID of a form in the same document or shadow root. 
 * - `required`: Makes the select required. Form submission will not be allowed when this is set and the select is blank. 
 * - `autocomplete`: Tells the browser how to autocomplete the select. See [this page](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete)
 * for available values. 
 * - `enterkeyhint`: Sets the enter key label on virtual keyboards. 
 * - `isInvalid`: undefined (property only)
 * - `hadUserInteraction`: undefined (property only)
 * - `wasSubmitted`: undefined (property only)
 * - `options`: undefined (property only)
 * 
 * #### Events
 * 
 * Events that will be emitted by the component.
 * 
 * - `quiet-blur`: Emitted when the select loses focus. This event does not bubble.
 * - `quiet-change`: Emitted when the user commits changes to the select's value.
 * - `quiet-focus`: Emitted when the select receives focus. This event does not bubble.
 * - `quiet-input`: Emitted when the select receives input.
 * 
 * #### Slots
 * 
 * Areas where markup can be added to the component.
 * 
 * - `label`: The select's label. For plain-text labels, you can use the `label` attribute instead.
 * - `description`: The select's description. For plain-text descriptions, you can use the `description` attribute instead.
 * - `start`: An icon or similar element to place before the label. Works great with `<quiet-icon>`.
 * - `end`: An icon or similar element to place after the label. Works great with `<quiet-icon>`.
 * 
 * #### Methods
 * 
 * Methods that can be called to access component functionality.
 * 
 * - `focus() => void`: Sets focus to the select.
 * - `blur() => void`: Removes focus from the select.
 * - `showPicker() => void`: Shows the picker in supportive browsers.
 * 
 * #### CSS Parts
 * 
 * Custom selectors for styling elements within the component.
 * 
 * - `label`: The element that contains the select's label.
 * - `description`: The element that contains the select's description.
 * - `visual-box`: The element that wraps the internal text box.
 * - `text-box`: The internal text box, a `<select>` element.
 * - `chevron`: The chevron icon, a `<quiet-icon>` element.
 * - `chevron__svg`: The chevron icon's `<svg>` part.
 * 
 * #### CSS States
 * 
 * These can be used to apply styling when a component is in a given state.
 * 
 * - `disabled`: Applied when the select is disabled.
 * - `blank`: Applied when the select has no selected option.
 * - `focused`: Applied when the select has focus.
 * - `user-valid`: Applied when the select is valid and the user has sufficiently interacted with it.
 * - `user-invalid`: Applied when the select is invalid and the user has sufficiently interacted with it.
  */
    "quiet-select": Partial<QuietSelectProps & BaseProps<QuietSelect> & BaseEvents>;


  /**
     * <quiet-slider>
 * 
 * #### Attributes & Properties
 * 
 * Component attributes and properties that can be applied to the element or by using JavaScript.
 * 
 * - `label`: The slider's label. If you need to provide HTML in the label, use the `label` slot instead. 
 * - `description`: The slider's description. If you need to provide HTML in the description, use the `description` slot instead. 
 * - `name`: The name of the slider. This will be submitted with the form as a name/value pair. 
 * - `value`: The slider's value. 
 * - `min-value`/`minValue`: The minimum value of a range selection. Used only when range attribute is set. 
 * - `max-value`/`maxValue`: The maximum value of a range selection. Used only when range attribute is set. 
 * - `range`: Converts the slider to a range slider with two thumbs. 
 * - `disabled`: Disables the slider. 
 * - `readonly`: Makes the slider a read-only field. 
 * - `orientation`: The orientation of the slider. 
 * - `size`: The slider's size. 
 * - `indicator-offset`/`indicatorOffset`: The starting value from which to draw the slider's fill, which is based on its current value. 
 * - `form`: The form to associate this control with. If omitted, the closest containing `<form>` will be used. The value of
 * this attribute must be an ID of a form in the same document or shadow root. 
 * - `min`: The minimum value allowed. 
 * - `max`: The maximum value allowed. 
 * - `step`: The granularity the value must adhere to when incrementing and decrementing. 
 * - `autofocus`: Tells the browser to focus the slider when the page loads or a dialog is shown. 
 * - `tooltip-distance`/`tooltipDistance`: The distance of the tooltip from the slider's thumb. 
 * - `tooltip-placement`/`tooltipPlacement`: The placement of the tooltip in reference to the slider's thumb. 
 * - `with-markers`/`withMarkers`: Draws markers at each step along the slider. 
 * - `with-tooltip`/`withTooltip`: Draws a tooltip above the thumb when the control has focus or is dragged. 
 * - `slider`: undefined (property only)
 * - `thumb`: undefined (property only)
 * - `thumbMin`: undefined (property only)
 * - `thumbMax`: undefined (property only)
 * - `track`: undefined (property only)
 * - `tooltip`: undefined (property only)
 * - `tooltipMin`: undefined (property only)
 * - `tooltipMax`: undefined (property only)
 * - `isInvalid`: undefined (property only)
 * - `hadUserInteraction`: undefined (property only)
 * - `wasSubmitted`: undefined (property only)
 * - `isRange`: Get if this is a range slider (property only) (readonly)
 * - `valueFormatter`: A custom formatting function to apply to the value. This will be shown in the tooltip and announced by screen
 * readers. Must be set with JavaScript. Property only. (property only)
 * 
 * #### Events
 * 
 * Events that will be emitted by the component.
 * 
 * - `quiet-blur`: Emitted when the slider loses focus. This event does not bubble.
 * - `quiet-change`: Emitted when the user commits changes to the slider's value.
 * - `quiet-focus`: Emitted when the slider receives focus. This event does not bubble.
 * - `quiet-input`: Emitted when the slider receives input.
 * 
 * #### Slots
 * 
 * Areas where markup can be added to the component.
 * 
 * - `label`: The slider's label. For plain-text labels, you can use the `label` attribute instead.
 * - `description`: The slider's description. For plain-text descriptions, you can use the `description` attribute instead.
 * - `reference`: One or more reference labels to show visually below the slider.
 * 
 * #### Methods
 * 
 * Methods that can be called to access component functionality.
 * 
 * - `focus() => void`: Sets focus to the slider.
 * - `blur() => void`: Removes focus from the slider.
 * - `stepDown() => void`: Decreases the slider's value by `step`. This is a programmatic change, so `input` and `change` events will not be
 * emitted when this is called.
 * - `stepUp() => void`: Increases the slider's value by `step`. This is a programmatic change, so `input` and `change` events will not be
 * emitted when this is called.
 * 
 * #### CSS Custom Properties
 * 
 * CSS variables available for styling the component.
 * 
 * - `--track-size`: The height or width of the slider's track. (default: `0.75em`)
 * - `--marker-width`: The width of each individual marker. (default: `0.1875em`)
 * - `--marker-height`: The height of each individual marker. (default: `0.1875em`)
 * - `--thumb-width`: The width of the thumb. (default: `1.25em`)
 * - `--thumb-height`: The height of the thumb. (default: `1.25em`)
 * 
 * #### CSS Parts
 * 
 * Custom selectors for styling elements within the component.
 * 
 * - `label`: The element that contains the sliders's label.
 * - `description`: The element that contains the slider's description.
 * - `slider`: The focusable element with `role="slider"`. Contains the track and reference slot.
 * - `track`: The slider's track.
 * - `indicator`: The colored indicator that shows from the start of the slider to the current value.
 * - `markers`: The container that holds all the markers when `with-markers` is used.
 * - `marker`: The individual markers that are shown when `with-markers` is used.
 * - `references`: The container that holds references that get slotted in.
 * - `thumb`: The slider's thumb.
 * - `thumb-min`: The min value thumb in a range slider.
 * - `thumb-max`: The max value thumb in a range slider.
 * - `tooltip`: The tooltip, a `<quiet-tooltip>` element.
 * - `tooltip__tooltip`: The tooltip's `tooltip` part.
 * - `tooltip__content`: The tooltip's `content` part.
 * - `tooltip__arrow`: The tooltip's `arrow` part.
 * 
 * #### CSS States
 * 
 * These can be used to apply styling when a component is in a given state.
 * 
 * - `disabled`: Applied when the slider is disabled.
 * - `dragging`: Applied when the slider is being dragged.
 * - `focused`: Applied when the slider has focus.
 * - `user-valid`: Applied when the slider is valid and the user has sufficiently interacted with it.
 * - `user-invalid`: Applied when the slider is invalid and the user has sufficiently interacted with it.
  */
    "quiet-slider": Partial<QuietSliderProps & BaseProps<QuietSlider> & BaseEvents>;


  /**
     * <quiet-sparkline>
 * 
 * #### Attributes & Properties
 * 
 * Component attributes and properties that can be applied to the element or by using JavaScript.
 * 
 * - `label`: An accessible label for the sparkline. This will be read by screen readers for users who can't see the chart, so
 * make sure to describe it appropriately. 
 * - `data`: A space-separated list of positive values to show in the sparkline, e.g. "10 25 18 30". At least two values are
 * required to generate a chart. 
 * - `appearance`: Determines the sparkline's appearance. 
 * - `trend`: Draws the component with colors to visually indicate the specified trend. 
 * - `curve`: The interpolation method used to connect data points on the line. 
 * - `points`: undefined (property only)
 * 
 * #### CSS Custom Properties
 * 
 * CSS variables available for styling the component.
 * 
 * - `--fill-color`: The start color of the gradient fill (default: `undefined`)
 * - `--gradient-stop-color`: The end color of the gradient fill (default: `undefined`)
  */
    "quiet-sparkline": Partial<QuietSparklineProps & BaseProps<QuietSparkline> & BaseEvents>;


  /**
     * <quiet-spinner>
 * 
 * #### Attributes & Properties
 * 
 * Component attributes and properties that can be applied to the element or by using JavaScript.
 * 
 * - `label`: A custom label for screen readers. 
 * 
 * #### Slots
 * 
 * Areas where markup can be added to the component.
 * 
 * - `(default)`: A custom spinner to show in lieu of the default one. Works best with `<img>` and `<svg>` elements. Custom spinners will not be animated, allowing you to use animated GIF, APNG, and SVG animations without conflict.
 * 
 * #### CSS Custom Properties
 * 
 * CSS variables available for styling the component.
 * 
 * - `--indicator-color`: The color of the spinner's indicator. (default: `var(--quiet-primary-fill-mid)`)
 * - `--track-color`: The color of the spinner's track. (default: `color-mix(in oklab, var(--quiet-neutral-fill-mid), transparent 75%)`)
 * - `--speed`: The speed for one complete rotation. (default: `0.75s`)
 * 
 * #### CSS Parts
 * 
 * Custom selectors for styling elements within the component.
 * 
 * - `track`: the spinner's track, a `<circle>` SVG element.
 * - `indicator`: the spinner's indicator, a `<circle>` SVG element.
  */
    "quiet-spinner": Partial<QuietSpinnerProps & BaseProps<QuietSpinner> & BaseEvents>;


  /**
     * <quiet-spoiler>
 * 
 * #### Attributes & Properties
 * 
 * Component attributes and properties that can be applied to the element or by using JavaScript.
 * 
 * - `visible`: Shows or hides the spoiler's content. 
 * - `inline`: Renders the spoiler inline. 
 * - `persist`: Removes the hide button and persists the content when shown. 
 * - `effect`: Determines how the spoiler is hidden. 
 * - `label`: The spoiler's label. If you need to provide HTML in the label, use the `label` slot instead. 
 * - `name`: When more than one spoilers share the same name, only will be shown at a time. 
 * 
 * #### Slots
 * 
 * Areas where markup can be added to the component.
 * 
 * - `(default)`: The spoiler's content.
 * - `label`: A custom label for the reveal text. For plain-text labels, you can use the `label` attribute instead.
 * 
 * #### CSS Custom Properties
 * 
 * CSS variables available for styling the component.
 * 
 * - `--blur`: The amount of blur when using the blur effect. (default: `8px`)
 * 
 * #### CSS Parts
 * 
 * Custom selectors for styling elements within the component.
 * 
 * - `content`: The container that holds the spoiler's content.
 * - `cover`: The element that covers the spoiler, a `<button>` element.
 * - `label`: The container that wraps the label, a `<span>` element.
 * - `hide-button`: The button that hides the spoiler, a `<button>` element containing an icon.
 * - `hide-icon`: The hide icon, a `<quiet-icon>` element.
 * - `hide-icon__svg`: The hide icon's `svg` part.
  */
    "quiet-spoiler": Partial<QuietSpoilerProps & BaseProps<QuietSpoiler> & BaseEvents>;


  /**
     * <quiet-splitter>
 * 
 * #### Attributes & Properties
 * 
 * Component attributes and properties that can be applied to the element or by using JavaScript.
 * 
 * - `position`: The current position of the divider as a decimal (0-1). 
 * - `orientation`: The orientation of the splitter. 
 * - `disabled`: Disables the splitter, preventing it from being focused and resized. 
 * - `snap`: A space-separated list of percentage snap points, e.g. "25% 50% 75%". 
 * - `snap-threshold`/`snapThreshold`: The maximum distance (in pixels) within which the divider will snap to a specified snap point. 
 * - `isCollapsed`: undefined (property only)
 * - `isDragging`: undefined (property only)
 * 
 * #### Events
 * 
 * Events that will be emitted by the component.
 * 
 * - `quiet-resize`: Dispatched when the splitter's handle is moved.
 * 
 * #### Slots
 * 
 * Areas where markup can be added to the component.
 * 
 * - `start`: The content for the primary (start) panel.
 * - `end`: The content for the secondary (end) panel.
 * - `handle`: The draggable handle that separates the panels.
 * 
 * #### CSS Custom Properties
 * 
 * CSS variables available for styling the component.
 * 
 * - `--divider-min-position`: Minimum position of the divider (as a percentage or pixel value). (default: `0%`)
 * - `--divider-max-position`: Maximum position of the divider (as a percentage or pixel value). (default: `100%`)
 * - `--divider-draggable-area`: The size of the divider's draggable area (can be larger than the visible area). (default: `1rem`)
 * - `--divider-width`: The width of the visual divider. (default: `0.125rem`)
 * 
 * #### CSS Parts
 * 
 * Custom selectors for styling elements within the component.
 * 
 * - `start`: The content to show in the first (start) panel.
 * - `end`: The content to show in the second (end) panel.
 * - `divider`: The draggable divider that separates the panels.
 * - `handle`: The visual handle within the divider (only present when not using the `handle` slot).
 * 
 * #### CSS States
 * 
 * These can be used to apply styling when a component is in a given state.
 * 
 * - `disabled`: Applied when the splitter is disabled.
 * - `dragging`: Applied when the splitter is being dragged.
 * - `focused`: Applied when the splitter has focus.
  */
    "quiet-splitter": Partial<QuietSplitterProps & BaseProps<QuietSplitter> & BaseEvents>;


  /**
     * <quiet-stamp>
 * 
 * #### Attributes & Properties
 * 
 * Component attributes and properties that can be applied to the element or by using JavaScript.
 * 
 * - `template`: The ID of the `<template>` element to use as a stamp. 
 * - `replace`: When true, the stamped content will replace the `<quiet-stamp>` element instead of being appended to it. This can
 * be useful for controlling exactly what appears in the DOM, but it can also be confusing for developers who may not
 * understand how the stamped content was generated. 
 * 
 * #### Methods
 * 
 * Methods that can be called to access component functionality.
 * 
 * - `renderTemplate() => void`: Processes the associated template and renders it to the DOM.
  */
    "quiet-stamp": Partial<QuietStampProps & BaseProps<QuietStamp> & BaseEvents>;


  /**
     * <quiet-switch>
 * 
 * #### Attributes & Properties
 * 
 * Component attributes and properties that can be applied to the element or by using JavaScript.
 * 
 * - `label`: The switch's label. If you need to provide HTML in the label, use the `label` slot instead. 
 * - `description`: The switch's description. If you need to provide HTML in the description, use the `description` slot instead. 
 * - `name`: The name of the switch. This will be submitted with the form as a name/value pair. 
 * - `value`: The switch's value. 
 * - `checked`: The switch's checked state. 
 * - `disabled`: Disables the switch. 
 * - `size`: The switch's size. 
 * - `form`: The form to associate this control with. If omitted, the closest containing `<form>` will be used. The value of
 * this attribute must be an ID of a form in the same document or shadow root. 
 * - `required`: Makes the switch required. Form submission will not be allowed until the switch is checked. 
 * - `isInvalid`: undefined (property only)
 * - `hadUserInteraction`: undefined (property only)
 * - `wasSubmitted`: undefined (property only)
 * 
 * #### Events
 * 
 * Events that will be emitted by the component.
 * 
 * - `quiet-blur`: Emitted when the switch loses focus. This event does not bubble.
 * - `quiet-change`: Emitted when the user commits changes to the switch's value.
 * - `quiet-focus`: Emitted when the switch receives focus. This event does not bubble.
 * - `quiet-input`: Emitted when the switch receives input.
 * 
 * #### Slots
 * 
 * Areas where markup can be added to the component.
 * 
 * - `(default)`: The switch's label. For plain-text labels, you can use the `label` attribute instead.
 * - `description`: The switch's description. For plain-text descriptions, you can use the `description` attribute instead.
 * - `off-label`: The label to show when the switch is off.
 * - `on-label`: The label to show when the switch is on.
 * 
 * #### Methods
 * 
 * Methods that can be called to access component functionality.
 * 
 * - `focus() => void`: Sets focus to the switch.
 * - `blur() => void`: Removes focus from the switch.
 * 
 * #### CSS Parts
 * 
 * Custom selectors for styling elements within the component.
 * 
 * - `label`: The `<label>` that wraps the entire control.
 * - `description`: The element that contains the switch's description.
 * - `visual-box`: The element that wraps the internal switch.
 * - `switch`: The internal switch, an `<input type="checkbox" role="switch">` element.
 * - `thumb`: The switch's thumb.
 * - `on-label`: The container wrapping the `on-label`.
 * - `off-label`: The container wrapping the `off-label`.
 * 
 * #### CSS States
 * 
 * These can be used to apply styling when a component is in a given state.
 * 
 * - `disabled`: Applied when the switch is disabled.
 * - `focused`: Applied when the switch has focus.
 * - `user-valid`: Applied when the switch is valid and the user has sufficiently interacted with it.
 * - `user-invalid`: Applied when the switch is invalid and the user has sufficiently interacted with it.
  */
    "quiet-switch": Partial<QuietSwitchProps & BaseProps<QuietSwitch> & BaseEvents>;


  /**
     * <quiet-tab>
 * 
 * #### Attributes & Properties
 * 
 * Component attributes and properties that can be applied to the element or by using JavaScript.
 * 
 * - `panel`: The name of the tab panel this tab will link to. The tab panel must be an HTML element inside the
 * `<quiet-tab-list>` element with a `name` attribute. 
 * - `disabled`: Disables the tab, preventing it from being activated. 
 * 
 * #### Slots
 * 
 * Areas where markup can be added to the component.
 * 
 * - `(default)`: The tab's content. This is usually a short label, but sometimes includes an icon.
 * 
 * #### CSS States
 * 
 * These can be used to apply styling when a component is in a given state.
 * 
 * - `active`: Applied when the tab is selected.
 * - `disabled`: Applied when the tab is selected.
  */
    "quiet-tab": Partial<QuietTabProps & BaseProps<QuietTab> & BaseEvents>;


  /**
     * <quiet-tab-list>
 * 
 * #### Attributes & Properties
 * 
 * Component attributes and properties that can be applied to the element or by using JavaScript.
 * 
 * - `label`: An accessible label for the tab list. This won't be visible, but it will be read to assistive devices so you should
 * always include one. 
 * - `tab`: The name of the tab panel that's currently active. 
 * - `placement`: The placement of tab controls. 
 * 
 * #### Events
 * 
 * Events that will be emitted by the component.
 * 
 * - `quiet-tab-shown`: Emitted after a tab is shown. The event will include a `detail` object with `tab` and `panel`properties that reference the respective tab and panel elements.
 * - `quiet-tab-hidden`: Emitted after a tab is hidden. The event will include a `detail` object with `tab` and `panel` properties that reference the respective tab and panel elements.
 * 
 * #### Slots
 * 
 * Areas where markup can be added to the component.
 * 
 * - `(default)`: One or more `<quiet-tab-panel>` elements, each with a `name` attribute unique to the tab list.
 * - `tab`: One or more `<quiet-tab>` elements, each with a `panel` attribute linked to the `name` of a tab panel. Note that tabs will automatically apply this slot to themselves, so you can safely omit `slot="tab"` in your markup. Also useful for adding close buttons to tabs.
 * 
 * #### CSS Parts
 * 
 * Custom selectors for styling elements within the component.
 * 
 * - `tabs`: The container that holds all of the tabs, a `<quiet-scroller>` element.
 * - `tabs-content`: The scroller's `content` part.
 * - `panels`: The container that holds all of the tab panels.
  */
    "quiet-tab-list": Partial<QuietTabListProps & BaseProps<QuietTabList> & BaseEvents>;


  /**
     * <quiet-tab-panel>
 * 
 * #### Attributes & Properties
 * 
 * Component attributes and properties that can be applied to the element or by using JavaScript.
 * 
 * - `name`: The name of the tab panel. Used for assigning tabs to panels. 
 * 
 * #### Slots
 * 
 * Areas where markup can be added to the component.
 * 
 * - `(default)`: Content to show inside the tab panel.
 * 
 * #### CSS States
 * 
 * These can be used to apply styling when a component is in a given state.
 * 
 * - `visible`: Applied when the tab panel is visible.
  */
    "quiet-tab-panel": Partial<QuietTabPanelProps & BaseProps<QuietTabPanel> & BaseEvents>;


  /**
     * <quiet-text-area>
 * 
 * #### Attributes & Properties
 * 
 * Component attributes and properties that can be applied to the element or by using JavaScript.
 * 
 * - `label`: The text area's label. If you need to provide HTML in the label, use the `label` slot instead. 
 * - `description`: The text area's description. If you need to provide HTML in the description, use the `description` slot instead. 
 * - `name`: The name of the text area. This will be submitted with the form as a name/value pair. 
 * - `value`: The text area's value. 
 * - `placeholder`: A placeholder to show in the text area when it's blank. 
 * - `disabled`: Disables the text area. 
 * - `readonly`: Makes the text area a read-only area. 
 * - `resize`: Determines how the text area can be resized. 
 * - `rows`: The default number of rows visible in the text area. 
 * - `appearance`: The type of text area to render. 
 * - `size`: The text area's size. 
 * - `form`: The form to associate this control with. If omitted, the closest containing `<form>` will be used. The value of
 * this attribute must be an ID of a form in the same document or shadow root. 
 * - `required`: Makes the text area required. Form submission will not be allowed when this is set and the text area is blank. 
 * - `minlength`/`minLength`: The minimum string length that will be considered valid. 
 * - `maxlength`/`maxLength`: The maximum string length that will be considered valid. 
 * - `autocapitalize`: Turns autocapitalize on or off in supported browsers. 
 * - `autocomplete`: Tells the browser how to autocomplete the text area. See [this page](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete)
 * for available values. 
 * - `autocorrect`: Turns autocorrect on or off in supported browsers. 
 * - `autofocus`: Tells the browser to focus the text area when the page loads or a dialog is shown. 
 * - `enterkeyhint`: Sets the enter key label on virtual keyboards. 
 * - `inputmode`: Provides the browser with a hint about the type of data that might be entered by the user, allowing the appropriate
 * virtual keyboard to be displayed on supported devices. 
 * - `spellcheck`: Turns spell checking on or off in supported browsers. 
 * - `isInvalid`: undefined (property only)
 * - `hadUserInteraction`: undefined (property only)
 * - `wasSubmitted`: undefined (property only)
 * 
 * #### Events
 * 
 * Events that will be emitted by the component.
 * 
 * - `quiet-blur`: Emitted when the text area loses focus. This event does not bubble.
 * - `quiet-change`: Emitted when the user commits changes to the text area's value.
 * - `quiet-focus`: Emitted when the text area receives focus. This event does not bubble.
 * - `quiet-input`: Emitted when the text area receives input.
 * 
 * #### Slots
 * 
 * Areas where markup can be added to the component.
 * 
 * - `label`: The text area's label. For plain-text labels, you can use the `label` attribute instead.
 * - `description`: The text area's description. For plain-text descriptions, you can use the `description` attribute instead.
 * 
 * #### Methods
 * 
 * Methods that can be called to access component functionality.
 * 
 * - `focus() => void`: Sets focus to the text area.
 * - `blur() => void`: Removes focus from the text area.
 * - `select() => void`: Selects all text in the text area.
 * - `setSelectionRange(start: number, end: number, direction: 'forward' | 'backward' | 'none' = 'none') => void`: Sets the start and end positions of the current text selection in the text area.
 * - `setRangeText(replacement: string, start?: number, end?: number, selectMode?: 'select' | 'start' | 'end' | 'preserve') => void`: Replaces a range of text in the text area with a new string.
 * 
 * #### CSS Parts
 * 
 * Custom selectors for styling elements within the component.
 * 
 * - `label`: The element that contains the text area's label.
 * - `description`: The element that contains the text area's description.
 * - `visual-box`: The element that wraps the internal text box.
 * - `text-box`: The internal text box, a `<textarea>` element.
 * 
 * #### CSS States
 * 
 * These can be used to apply styling when a component is in a given state.
 * 
 * - `disabled`: Applied when the text area is disabled.
 * - `blank`: Applied when the text area has a blank value.
 * - `focused`: Applied when the text area has focus.
 * - `user-valid`: Applied when the text area is valid and the user has sufficiently interacted with it.
 * - `user-invalid`: Applied when the text area is invalid and the user has sufficiently interacted with it.
  */
    "quiet-text-area": Partial<QuietTextAreaProps & BaseProps<QuietTextArea> & BaseEvents>;


  /**
     * <quiet-text-mask>
 * 
 * #### Attributes & Properties
 * 
 * Component attributes and properties that can be applied to the element or by using JavaScript.
 * 
 * - `image`: The URL of the image to use for the mask. 
 * - `fixed`: Creates a parallax-like effect where the image stays fixed while scrolling 
 * 
 * #### Slots
 * 
 * Areas where markup can be added to the component.
 * 
 * - `(default)`: The text to be masked.
 * 
 * #### CSS Custom Properties
 * 
 * CSS variables available for styling the component.
 * 
 * - `--brightness`: Adjusts the brightness of the mask image (0-200%, where 100% is normal) (default: `undefined`)
 * - `--contrast`: Adjusts the contrast of the mask image (0-200%, where 100% is normal) (default: `undefined`)
 * - `--grayscale`: Converts the mask to grayscale (0-100%, where 0% is normal and 100% is fully grayscale) (default: `undefined`)
 * - `--hue-rotate`: Rotates the hue of the mask (0-360deg) (default: `undefined`)
  */
    "quiet-text-mask": Partial<QuietTextMaskProps & BaseProps<QuietTextMask> & BaseEvents>;


  /**
     * <quiet-text-field>
 * 
 * #### Attributes & Properties
 * 
 * Component attributes and properties that can be applied to the element or by using JavaScript.
 * 
 * - `label`: The text field's label. If you need to provide HTML in the label, use the `label` slot instead. 
 * - `description`: The text field's description. If you need to provide HTML in the description, use the `description` slot instead. 
 * - `name`: The name of the text field. This will be submitted with the form as a name/value pair. 
 * - `value`: The text field's value. 
 * - `placeholder`: A placeholder to show in the text field when it's blank. 
 * - `disabled`: Disables the text field. 
 * - `readonly`: Makes the text field a read-only field. 
 * - `with-clear`/`withClear`: Adds a clear button to the text field when it's not blank. 
 * - `appearance`: The type of text field to render. 
 * - `size`: The text field's size. 
 * - `pill`: Draws the text field in a pill shape. 
 * - `type`: The type of data the text field will accept. 
 * - `form`: The form to associate this control with. If omitted, the closest containing `<form>` will be used. The value of
 * this attribute must be an ID of a form in the same document or shadow root. 
 * - `required`: Makes the text field required. Form submission will not be allowed when this is set and the text field is blank. 
 * - `pattern`: A regular expression the value should match to be considered valid. 
 * - `minlength`/`minLength`: The minimum string length that will be considered valid. 
 * - `maxlength`/`maxLength`: The maximum string length that will be considered valid. 
 * - `min`: The minimum value for date/time types. 
 * - `max`: The maximum value for date/time types. 
 * - `step`: The granularity the value must adhere to when incrementing and decrementing. 
 * - `autocapitalize`: Turns autocapitalize on or off in supported browsers. 
 * - `autocomplete`: Tells the browser how to autocomplete the text field. See [this page](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete)
 * for available values. 
 * - `autocorrect`: Turns autocorrect on or off in supported browsers. 
 * - `autofocus`: Tells the browser to focus the text field when the page loads or a dialog is shown. 
 * - `enterkeyhint`: Sets the enter key label on virtual keyboards. 
 * - `inputmode`: Provides the browser with a hint about the type of data that might be entered by the user, allowing the appropriate
 * virtual keyboard to be displayed on supported devices. 
 * - `spellcheck`: Turns spell checking on or off in supported browsers. 
 * - `isInvalid`: undefined (property only)
 * - `hadUserInteraction`: undefined (property only)
 * - `wasSubmitted`: undefined (property only)
 * - `isPasswordVisible`: undefined (property only)
 * 
 * #### Events
 * 
 * Events that will be emitted by the component.
 * 
 * - `quiet-blur`: Emitted when the text field loses focus. This event does not bubble.
 * - `quiet-change`: Emitted when the user commits changes to the text field's value.
 * - `quiet-focus`: Emitted when the text field receives focus. This event does not bubble.
 * - `quiet-input`: Emitted when the text field receives input.
 * 
 * #### Slots
 * 
 * Areas where markup can be added to the component.
 * 
 * - `label`: The text field's label. For plain-text labels, you can use the `label` attribute instead.
 * - `description`: The text field's description. For plain-text descriptions, you can use the `description` attribute instead.
 * - `start`: An icon or similar element to place before the label. Works great with `<quiet-icon>`.
 * - `end`: An icon or similar element to place after the label. Works great with `<quiet-icon>`.
 * 
 * #### Methods
 * 
 * Methods that can be called to access component functionality.
 * 
 * - `focus() => void`: Sets focus to the text field.
 * - `blur() => void`: Removes focus from the text field.
 * - `select() => void`: Selects all text in the text field.
 * - `setSelectionRange(start: number, end: number, direction: 'forward' | 'backward' | 'none' = 'none') => void`: Sets the start and end positions of the current text selection in the text field.
 * - `setRangeText(replacement: string, start?: number, end?: number, selectMode?: 'select' | 'start' | 'end' | 'preserve') => void`: Replaces a range of text in the text field with a new string.
 * - `showPicker() => void`: For types that support a picker, such as color and date selectors, this will cause the picker to show.
 * - `stepDown() => void`: When a supported `type` is used, this method will decrease the text field's value by `step`. This is a programmatic
 * change, so `input` and `change` events will not be emitted when this is called.
 * - `stepUp() => void`: When a supported `type` is used, this method will increase the text field's value by `step`. This is a programmatic
 * change, so `input` and `change` events will not be emitted when this is called.
 * 
 * #### CSS Parts
 * 
 * Custom selectors for styling elements within the component.
 * 
 * - `label`: The element that contains the text field's label.
 * - `description`: The element that contains the text field's description.
 * - `visual-box`: The element that wraps the internal text box.
 * - `text-box`: The internal text box, an `<input>` element.
 * - `clear-button`: The clear button, a `<button>` element.
 * - `password-toggle-button`: The password toggle button, a `<button>` element.
 * 
 * #### CSS States
 * 
 * These can be used to apply styling when a component is in a given state.
 * 
 * - `disabled`: Applied when the text field is disabled.
 * - `blank`: Applied when the text field has a blank value.
 * - `focused`: Applied when the text field has focus.
 * - `user-valid`: Applied when the text field is valid and the user has sufficiently interacted with it.
 * - `user-invalid`: Applied when the text field is invalid and the user has sufficiently interacted with it.
  */
    "quiet-text-field": Partial<QuietTextFieldProps & BaseProps<QuietTextField> & BaseEvents>;


  /**
     * <quiet-timed-content>
 * 
 * #### Attributes & Properties
 * 
 * Component attributes and properties that can be applied to the element or by using JavaScript.
 * 
 * - `start-date`/`startDate`: The date to start showing the content. 
 * - `end-date`/`endDate`: The date to stop showing the content. 
 * - `live`: When set, the content will update as the time changes. 
 * 
 * #### Slots
 * 
 * Areas where markup can be added to the component.
 * 
 * - `(default)`: The default slot.
 * - `before`: Optional content that shows before the specified date/time.
 * - `after`: Optional content that shows after the specified date/time.
  */
    "quiet-timed-content": Partial<QuietTimedContentProps & BaseProps<QuietTimedContent> & BaseEvents>;


  /**
     * <quiet-toast>
 * 
 * #### Attributes & Properties
 * 
 * Component attributes and properties that can be applied to the element or by using JavaScript.
 * 
 * - `placement`: The placement of the toast stack on the screen. 
 * - `stack`: undefined (property only)
 * - `transitionGroup`: undefined (property only)
 * - `transitionAnimation`: A custom animation to use for enter/exit transitions. This gets passed through to the internal transition group.
 * Works well with animations from `@quietui/scurry`. (Property only) (property only)
 * 
 * #### Methods
 * 
 * Methods that can be called to access component functionality.
 * 
 * - `create(content: string, options?: Partial<CreateOptions>) => void`: Creates a toast notification and adds it to the stack. Returns a reference to the created toast item.
 * - `createFromTemplate(template: HTMLTemplateElement) => void`: Creates a toast notification using an existing `<quiet-toast-item>` element. Useful if you want to create your own
 * toast items declaratively. Returns a reference to the cloned toast item.
 * - `empty() => void`: Removes all elements from the toast stack and turns when the remove transition finishes.
 * - `escapeHtml(html: string) => void`: Escapes HTML special characters in the given string.
 * 
 * #### CSS States
 * 
 * These can be used to apply styling when a component is in a given state.
 * 
 * - `visible`: Applied when the toast stack is visible.
  */
    "quiet-toast": Partial<QuietToastProps & BaseProps<QuietToast> & BaseEvents>;


  /**
     * <quiet-toast-item>
 * 
 * #### Attributes & Properties
 * 
 * Component attributes and properties that can be applied to the element or by using JavaScript.
 * 
 * - `variant`: The type of notification to render. 
 * - `duration`: The length of time to show the notification before removing it. Set this to `0` to show the notification until the
 * user dismisses it. 
 * - `without-close`/`withoutClose`: When set, the close button will be omitted. 
 * 
 * #### Events
 * 
 * Events that will be emitted by the component.
 * 
 * - `quiet-before-close`: Emitted when the toast item is dismissed.
 * - `quiet-close`: Emitted after the toast has been dismissed and the hide animation has completed.
 * 
 * #### Slots
 * 
 * Areas where markup can be added to the component.
 * 
 * - `(default)`: Content to show in the toast item.
 * - `icon`: Content to show as a visual. Usually an icon, image, avatar, etc.
 * 
 * #### CSS Custom Properties
 * 
 * CSS variables available for styling the component.
 * 
 * - `--accent-line-width`: The width of the notification's accent line. (default: `0.33em`)
 * - `--progress`: A readonly value that goes from 100% to 0%, representing the progress remaining until the notification closes. Useful for creating custom content with visual indicators of the notification's progress. (default: `undefined`)
 * 
 * #### CSS Parts
 * 
 * Custom selectors for styling elements within the component.
 * 
 * - `icon`: undefined
 * - `content`: undefined
 * - `close-button`: The close button, a `<button>` element.
 * - `progress`: The progress ring, a `<quiet-progress>` element.
 * - `progress__track`: The progress ring's exported `track` part.
 * - `progress__indicator`: The progress ring's exported `indicator` part.
 * - `progress__content`: The progress ring's exported `content` part.
 * - `close-icon`: The close icon, a `<quiet-icon>` element.
 * - `close-icon__svg`: The close icons exported `svg` part.
  */
    "quiet-toast-item": Partial<QuietToastItemProps & BaseProps<QuietToastItem> & BaseEvents>;


  /**
     * <quiet-toggle-icon>
 * 
 * #### Attributes & Properties
 * 
 * Component attributes and properties that can be applied to the element or by using JavaScript.
 * 
 * - `label`: The toggle icon's label. The label won't be displayed, but it will be announced by assistive devices. 
 * - `name`: The name of the toggle icon. This will be submitted with the form as a name/value pair. 
 * - `value`: The toggle icon's value. 
 * - `checked`: The toggle icon's checked state. 
 * - `disabled`: Disables the toggle icon. 
 * - `size`: The checkbox's size. 
 * - `effect`: The animation to use when toggling. 
 * - `form`: The form to associate this control with. If omitted, the closest containing `<form>` will be used. The value of
 * this attribute must be an ID of a form in the same document or shadow root. 
 * - `required`: Makes the toggle icon required. Form submission will not be allowed until the toggle icon is checked. 
 * - `button`: undefined (property only)
 * - `isInvalid`: undefined (property only)
 * - `hadUserInteraction`: undefined (property only)
 * - `wasSubmitted`: undefined (property only)
 * 
 * #### Events
 * 
 * Events that will be emitted by the component.
 * 
 * - `quiet-blur`: Emitted when the toggle icon loses focus. This event does not bubble.
 * - `quiet-change`: Emitted when the user commits changes to the toggle's value.
 * - `quiet-focus`: Emitted when the checkbox receives focus. This event does not bubble.
 * - `quiet-input`: Emitted when the checkbox receives input.
 * 
 * #### Slots
 * 
 * Areas where markup can be added to the component.
 * 
 * - `checked`: The icon to show when checked. Works best with a `<quiet-icon>` element.
 * - `unchecked`: The default icon to show when unchecked. Works best with a `<quiet-icon>` element.
 * 
 * #### CSS Custom Properties
 * 
 * CSS variables available for styling the component.
 * 
 * - `--animation-speed`: The animation speed to use when effects are selected. (default: `300ms`)
 * - `--checked-color`: The color to use for checked toggle icons. (default: `#f59e0b`)
 * - `--unchecked-color`: The color to use for unchecked toggle icons. (default: `var(--quiet-neutral-fill-mid)`)
 * 
 * #### CSS Parts
 * 
 * Custom selectors for styling elements within the component.
 * 
 * - `button`: The internal button that contains the toggle icons, a `<button>` element.
 * 
 * #### CSS States
 * 
 * These can be used to apply styling when a component is in a given state.
 * 
 * - `checked`: Applied when the toggle icon is active.
 * - `disabled`: Applied when the toggle icon is disabled.
 * - `focused`: Applied when the toggle icon has focus.
 * - `user-valid`: Applied when the toggle icon is valid and the user has sufficiently interacted with it.
 * - `user-invalid`: Applied when the toggle icon is invalid and the user has sufficiently interacted with it.
  */
    "quiet-toggle-icon": Partial<QuietToggleIconProps & BaseProps<QuietToggleIcon> & BaseEvents>;


  /**
     * <quiet-toggle-tag>
 * 
 * #### Attributes & Properties
 * 
 * Component attributes and properties that can be applied to the element or by using JavaScript.
 * 
 * - `label`: The toggle tag's label. If you need to provide HTML in the label, use the `label` slot instead. 
 * - `name`: The name of the toggle tag. This will be submitted with the form as a name/value pair. 
 * - `value`: The toggle tag's value. 
 * - `checked`: The toggle tag's checked state. 
 * - `disabled`: Disables the toggle tag. 
 * - `size`: The toggle tag's size. 
 * - `form`: The form to associate this control with. If omitted, the closest containing `<form>` will be used. The value of
 * this attribute must be an ID of a form in the same document or shadow root. 
 * - `required`: Makes the toggle tag required. Form submission will not be allowed until the toggle tag is checked. 
 * - `isInvalid`: undefined (property only)
 * - `hadUserInteraction`: undefined (property only)
 * - `wasSubmitted`: undefined (property only)
 * 
 * #### Events
 * 
 * Events that will be emitted by the component.
 * 
 * - `quiet-blur`: Emitted when the toggle tag loses focus. This event does not bubble.
 * - `quiet-change`: Emitted when the user commits changes to the toggle tag's value.
 * - `quiet-focus`: Emitted when the toggle tag receives focus. This event does not bubble.
 * - `quiet-input`: Emitted when the toggle tag receives input.
 * 
 * #### Slots
 * 
 * Areas where markup can be added to the component.
 * 
 * - `(default)`: The toggle tag's label. For plain-text labels, you can use the `label` attribute instead.
 * 
 * #### Methods
 * 
 * Methods that can be called to access component functionality.
 * 
 * - `focus() => void`: Sets focus to the toggle tag.
 * - `blur() => void`: Removes focus from the toggle tag.
 * 
 * #### CSS Parts
 * 
 * Custom selectors for styling elements within the component.
 * 
 * - `label`: The `<label>` that wraps the entire control.
 * 
 * #### CSS States
 * 
 * These can be used to apply styling when a component is in a given state.
 * 
 * - `checked`: Applied when the toggle tag is checked.
 * - `disabled`: Applied when the toggle tag is disabled.
 * - `focused`: Applied when the toggle tag has focus.
 * - `user-valid`: Applied when the toggle tag is valid and the user has sufficiently interacted with it.
 * - `user-invalid`: Applied when the toggle tag is invalid and the user has sufficiently interacted with it.
  */
    "quiet-toggle-tag": Partial<QuietToggleTagProps & BaseProps<QuietToggleTag> & BaseEvents>;


  /**
     * <quiet-toolbar>
 * 
 * #### Attributes & Properties
 * 
 * Component attributes and properties that can be applied to the element or by using JavaScript.
 * 
 * - `orientation`: The toolbar's orientation. This changes which arrow keys are used to select adjacent buttons. 
 * 
 * #### Slots
 * 
 * Areas where markup can be added to the component.
 * 
 * - `(default)`: A mixture of buttons and/or button groups.
  */
    "quiet-toolbar": Partial<QuietToolbarProps & BaseProps<QuietToolbar> & BaseEvents>;


  /**
     * <quiet-tooltip>
 * 
 * #### Attributes & Properties
 * 
 * Component attributes and properties that can be applied to the element or by using JavaScript.
 * 
 * - `for`: The ID of the tooltip's anchor element. This must be an interactive/focusable element such as a button and it must
 * be in the same document as the tooltip. 
 * - `open`: Shows or hides the tooltip. 
 * - `placement`: The placement of the tooltip in reference to the anchor. The menu will shift to a more optimal location if the
 * preferred placement doesn't have enough room. 
 * - `distance`: The distance of the tooltip from its anchor. 
 * - `offset`: The offset of the tooltip along its trigger. 
 * - `open-delay`/`openDelay`: The number of milliseconds to wait before opening the tooltip when hovering in. 
 * - `close-delay`/`closeDelay`: The number of milliseconds to wait before closing the tooltip when hovering out. 
 * - `activation`: By default, the tooltip automatically shows when the user focuses or hovers over the anchor. If you want to control
 * the tooltip programmatically, set this to `manual`. 
 * - `without-arrow`/`withoutArrow`: Renders the tooltip without an arrow. 
 * 
 * #### Events
 * 
 * Events that will be emitted by the component.
 * 
 * - `quiet-before-open`: Emitted when the tooltip is instructed to open but before it is shown.
 * - `quiet-open`: Emitted when the tooltip has opened and the animation has completed.
 * - `quiet-before-close`: Emitted when the tooltip is dismissed but before it is hidden.
 * - `quiet-close`: Emitted when the tooltip has closed. and the animation has completed.
 * 
 * #### Slots
 * 
 * Areas where markup can be added to the component.
 * 
 * - `(default)`: The tooltip's content. Do not include interactive elements such as button, links, etc. as they won't be accessible to users inside the tooltip.
 * 
 * #### CSS Custom Properties
 * 
 * CSS variables available for styling the component.
 * 
 * - `--arrow-size`: The size of the arrow. To hide the arrow, use the `without-arrow` attribute. (default: `0.3125rem`)
 * - `--max-width`: The maximum width the tooltip can be before wrapping. (default: `20rem`)
 * - `--show-duration`: The duration of the show/hide animation. (default: `100ms`)
 * 
 * #### CSS Parts
 * 
 * Custom selectors for styling elements within the component.
 * 
 * - `tooltip`: The element that powers the tooltip.
 * - `content`: The element that wraps the tooltip's content.
 * - `arrow`: The tooltip's arrow. To change the arrow's size, use `--arrow-size` instead.
 * 
 * #### CSS States
 * 
 * These can be used to apply styling when a component is in a given state.
 * 
 * - `open`: Applied when the tooltip is open.
  */
    "quiet-tooltip": Partial<QuietTooltipProps & BaseProps<QuietTooltip> & BaseEvents>;


  /**
     * `<quiet-typewriter>`
 * 
 * #### Attributes & Properties
 * 
 * Component attributes and properties that can be applied to the element or by using JavaScript.
 * 
 * - `text`: The text to type out. Multiple lines can be separated by the delimiter. 
 * - `delimiter`: The delimiter used to separate multiple lines of text. 
 * - `speed`: The average speed in milliseconds to wait between typing each character. 
 * - `delay`: Delay in milliseconds before the animation starts. 
 * - `start-on-view`/`startOnView`: Whether to start the animation when the component comes into view. 
 * - `with-cursor`/`withCursor`: Whether to show a blinking cursor during animation. 
 * - `loop`: Whether to loop the animation with a pause and backspace effect. 
 * - `loop-delay`/`loopDelay`: Duration in milliseconds to pause before backspacing when looping. 
 * - `pause`: Whether to pause the typewriter animation. 
 * - `ignore-reduced-motion`/`ignoreReducedMotion`: By default, no animation will occur when the user indicates a preference for reduced motion. Use this attribute to
 * override this behavior when necessary. 
 * 
 * #### Events
 * 
 * Events that will be emitted by the component.
 * 
 * - `quiet-animation-complete`: Emitted when the typing animation has completed.
 * 
 * #### Methods
 * 
 * Methods that can be called to access component functionality.
 * 
 * - `restart() => void`: Restarts the animation from the beginning.
 * 
 * #### CSS Custom Properties
 * 
 * CSS variables available for styling the component.
 * 
 * - `--cursor-color`: The color of the cursor during animation when `with-cursor` is enabled. (default: `currentColor`)
 * - `--cursor-width`: The width of the cursor during animation when `with-cursor` is enabled. (default: `1.5px`)
 * 
 * #### CSS Parts
 * 
 * Custom selectors for styling elements within the component.
 * 
 * - `cursor`: The cursor, a `<span>` element with a styled border.
  */
    "quiet-typewriter": Partial<QuietTypewriterProps & BaseProps<QuietTypewriter> & BaseEvents>;


  /**
     * <quiet-veil>
 * 
 * #### Attributes & Properties
 * 
 * Component attributes and properties that can be applied to the element or by using JavaScript.
 * 
 * - `label`: The label for screen readers when veil is active. 
 * - `active`: Description of the property. 
 * - `fullscreen`: Set to true to show the veil over the entire viewport instead of the content inside of it. 
 * - `front`: undefined (property only)
 * - `dialog`: undefined (property only)
 * 
 * #### Events
 * 
 * Events that will be emitted by the component.
 * 
 * - `quiet-before-activate`: Emitted when the veil will activate. Calling `event.preventDefault()` will prevent the activation from occurring.
 * - `quiet-activate`: Emitted immediately after the veil is activated.
 * - `quiet-before-deactivate`: Emitted when the veil will deactivate. Calling `event.preventDefault()` will prevent the deactivation from occurring.
 * - `quiet-deactivate`: Emitted immediately after the veil is deactivated.
 * 
 * #### Slots
 * 
 * Areas where markup can be added to the component.
 * 
 * - `(default)`: The content to be covered when the veil state is active.
 * - `front`: Content to show in front of the veil, such as a custom loading indicator or message.
 * 
 * #### CSS Custom Properties
 * 
 * CSS variables available for styling the component.
 * 
 * - `--blur`: The amount of blur to apply to the veil when active. (default: `3px`)
 * - `--show-duration`: The duration of the show/hide animation. (default: `300`)
 * 
 * #### CSS States
 * 
 * These can be used to apply styling when a component is in a given state.
 * 
 * - `active`: Applied when the veil is active.
  */
    "quiet-veil": Partial<QuietVeilProps & BaseProps<QuietVeil> & BaseEvents>;


  /**
     * <quiet-transition-group>
 * 
 * #### Attributes & Properties
 * 
 * Component attributes and properties that can be applied to the element or by using JavaScript.
 * 
 * - `disable-transitions`/`disableTransitions`: Disables transition animations. However, the `quiet-content-changed` and `quiet-transition-end` events will still
 * be dispatched. 
 * - `ignore-reduced-motion`/`ignoreReducedMotion`: By default, no animation will occur when the user indicates a preference for reduced motion. Use this attribute to
 * override this behavior when necessary. 
 * - `isTransitioning`: Determines if the transition group is currently animating. (Property only) (property only)
 * - `transitionAnimation`: A custom animation to use for enter/exit transitions. Works well with animations from `@quietui/scurry`.
 * (Property only) (property only)
 * - `transitionContainer`: By default, the transition group observes and animates its own children. In some cases, you may want it to control
 * another element's children. This is useful in cases where you can't directly wrap child elements with the
 * `<quiet-transition-group>` element.
 * 
 * For example, if you embed a transition group in a component's shadow root but need it to control slotted (light
 * DOM) elements, you can't simply wrap the slot because the mutation observer can't see projected (slotted) elements.
 * In this case, point this property to the target element and the transition group will hide itself and observe the
 * target container's children instead. (Property only) (property only)
 * 
 * #### Events
 * 
 * Events that will be emitted by the component.
 * 
 * - `quiet-content-changed`: Emitted when content changes and before the transition animation begins.
 * - `quiet-transition-end`: Emitted when transition animations end.
 * 
 * #### Slots
 * 
 * Areas where markup can be added to the component.
 * 
 * - `(default)`: One or more elements to transition when adding, removing, and reordering the DOM.
 * 
 * #### Methods
 * 
 * Methods that can be called to access component functionality.
 * 
 * - `transitionComplete() => void`: Returns a promise that resolves when the current transition ends. If no transition is running, it resolves
 * immediately  This is a great way to ensure transitions have stopped before doing something else, such as adding or
 * removing new elements to the transition group.
 * - `updateElementPositions() => void`: Updates the cached coordinates of all child elements in the transition group. In most cases, you shouldn't have to
 * call this method. However, if you're resizing or animating elements imperatively, you may need to call this
 * immediately before appending or removing elements to ensure a smooth transition.
 * 
 * #### CSS Custom Properties
 * 
 * CSS variables available for styling the component.
 * 
 * - `--duration`: The duration of each individual step (not the total transition time). (default: `0.25s`)
 * 
 * #### CSS States
 * 
 * These can be used to apply styling when a component is in a given state.
 * 
 * - `transitioning`: Applied when a transition is active.
  */
    "quiet-transition-group": Partial<QuietTransitionGroupProps & BaseProps<QuietTransitionGroup> & BaseEvents>;


  /**
     * <quiet-zoomable-frame>
 * 
 * #### Attributes & Properties
 * 
 * Component attributes and properties that can be applied to the element or by using JavaScript.
 * 
 * - `src`: The URL of the content to display. 
 * - `srcdoc`: Inline HTML to display. 
 * - `allowfullscreen`: Allows fullscreen mode. 
 * - `loading`: Controls iframe loading behavior. 
 * - `referrerpolicy`: Controls referrer information. 
 * - `sandbox`: Security restrictions for the iframe. 
 * - `zoom`: The current zoom of the frame, e.g. 0 = 0% and 1 = 100%. 
 * - `zoom-levels`/`zoomLevels`: The zoom levels to step through when using zoom controls. This does not restrict programmatic changes to the zoom. 
 * - `without-controls`/`withoutControls`: Removes the zoom controls. 
 * - `without-interaction`/`withoutInteraction`: Disables interaction when present. 
 * - `iframe`: undefined (property only)
 * - `contentWindow`: Returns the internal iframe's `window` object. (Readonly property) (property only) (readonly)
 * - `contentDocument`: Returns the internal iframe's `document` object. (Readonly property) (property only) (readonly)
 * 
 * #### Events
 * 
 * Events that will be emitted by the component.
 * 
 * - `load`: Emitted when the internal iframe when it finishes loading.
 * - `error`: Emitted from the internal iframe when it fails to load.
 * 
 * #### Slots
 * 
 * Areas where markup can be added to the component.
 * 
 * - `zoom-in-icon`: The slot that contains the zoom in icon.
 * - `zoom-out-icon`: The slot that contains the zoom out icon.
 * 
 * #### Methods
 * 
 * Methods that can be called to access component functionality.
 * 
 * - `zoomIn() => void`: Zooms in to the next available zoom level.
 * - `zoomOut() => void`: Zooms out to the previous available zoom level.
 * 
 * #### CSS Custom Properties
 * 
 * CSS variables available for styling the component.
 * 
 * - `--aspect-ratio`: The aspect ratio of the frame. (default: `16/9`)
 * 
 * #### CSS Parts
 * 
 * Custom selectors for styling elements within the component.
 * 
 * - `iframe`: The internal `<iframe>` element.
 * - `controls`: The container that surrounds zoom control buttons.
 * - `zoom-in-button`: The zoom in button.
 * - `zoom-out-button`: The zoom out button.
 * 
 * #### CSS States
 * 
 * These can be used to apply styling when a component is in a given state.
 * 
 * - `loading`: Applied when the iframe is loading.
 * - `error`: Applied when the iframe failed to load.
  */
    "quiet-zoomable-frame": Partial<QuietZoomableFrameProps & BaseProps<QuietZoomableFrame> & BaseEvents>;
  }

export type CustomCssProperties = {
  /** The expand and collapse duration. */
  "--duration"?: string;
  /** The expand and collapse easing. */
  "--easing"?: string;
  /** The accordion's border color. */
  "--border-color"?: string;
  /** The accordion's border width. */
  "--border-width"?: string;
  /** The accordion's border style. */
  "--border-style"?: string;
  /** The border radius to apply to rounded edges. */
  "--border-radius"?: string;
  /** The amount of spacing to use between breadcrumb items. */
  "--item-spacing"?: string;
  /** The size of the avatar to draw. */
  "--size"?: string;
  /** The speed at which the attention animation will run. */
  "--attention-duration"?: string;
  /** The easing to use for the attention animation. */
  "--attention-easing"?: string;
  /** Background color for the address bar. */
  "--address-background-color"?: string;
  /** Text color for the address bar. */
  "--address-color"?: string;
  /** Padding to apply to the browser frame's body. */
  "--body-padding"?: string;
  /** Background color for the header. */
  "--header-background-color"?: string;
  /** Height of the browser frame header. */
  "--header-height"?: string;
  /** The color for Windows-style control buttons. */
  "--windows-control-color"?: string;
  /** The spacing to use throughout the card. */
  "--spacing"?: string;
  /** The aspect ratio of the carousel. By default, carousels render 100% wide, so this helps retain proportions across various devices. Gets applied to the `items` part. */
  "--aspect-ratio"?: string;
  /** The gap between items in the carousel. */
  "--item-gap"?: string;
  /** The size of each pagination dot. */
  "--dot-size"?: string;
  /** The size of the gap between pagination dots. */
  "--dot-gap"?: string;
  /** The color of inactive pagination dots. */
  "--dot-color"?: string;
  /** The color of active pagination dots. */
  "--dot-active-color"?: string;
  /** The duration of the show/hide animation. */
  "--show-duration"?: string;
  /** The size of the color preview. */
  "--preview-size"?: string;
  /** The gap between checkboxes. */
  "--gap"?: string;
  /** The minimum width of the input field when shown next to tags. Only available in `multiple` mode. */
  "--text-box-min-width"?: string;
  /** The default height of the dialog. Note that dialogs shrink to fit as necessary. */
  "--height"?: string;
  /** The default width of the dialog. Note that dialogs shrink to fit as necessary. */
  "--width"?: string;
  /** The color of the divider. */
  "--color"?: string;
  /** The thickness of the divider. */
  "--thickness"?: string;
  /** The visible height of the expander's content when collapsed. */
  "--preview-height"?: string;
  /** The maximum width of the empty state's content. When space is limited, the content will wrap automatically. */
  "--content-width"?: string;
  /** The maximum width of the illustration. By default, this will be half of `--content-width`. This property does not affect the size of icons. */
  "--illustration-width"?: string;
  /** The duration of the card flip animation. */
  "--flip-duration"?: string;
  /** The easing to use for the flip animation. */
  "--flip-easing"?: string;
  /** The width and height of the movable thumb. */
  "--thumb-size"?: string;
  /** A readonly custom property that represents the normalized distance (0-1) of the thumb from the center, updated dynamically during movement. You can use this to change the joystick's appearance as the user moves the thumb. */
  "--distance"?: string;
  /** The width of each line. Available when symbol is `hamburger` or `equals`. */
  "--line-width"?: string;
  /** The duration of the symbol's animation. */
  "--line-transition-duration"?: string;
  /** The easing to use for the symbol's animation. */
  "--line-transition-easing"?: string;
  /** The base color for the gradient. Accepts any valid CSS color format, but does not accept custom properties, e.g. `var(--my-color)`. */
  "--gradient-color"?: string;
  /** Adjusts the brightness of the gradient from -100 (darker) to +100 (lighter). */
  "--brightness"?: string;
  /** A readonly custom property that maps to the optimal text color (black or white) based on the gradient's base color. */
  "--optimal-text-color"?: string;
  /** The size of the arrow. To hide the arrow, use the `without-arrow` attribute. */
  "--arrow-size"?: string;
  /** The maximum width the popover be before wrapping. */
  "--max-width"?: string;
  /** The color of the progress bar's track. */
  "--track-color"?: string;
  /** The height or thickness of the track, depending on the type of progress bar. */
  "--track-size"?: string;
  /** The color of the progress bar's value indicator. */
  "--indicator-color"?: string;
  /** For progress rings, the diameter of the ring. */
  "--diameter"?: string;
  /** The base color of the shadow. */
  "--shadow-color"?: string;
  /** The width of the shadow. */
  "--shadow-size"?: string;
  /** The color of the scrollbar's thumb (supportive browsers only). */
  "--thumb-color"?: string;
  /** The thumb's width. */
  "--thumb-width"?: string;
  /** The thumb's inset from the host element. */
  "--thumb-inset"?: string;
  /** The color to use as a base for the shimmer animation. */
  "--shimmer-color"?: string;
  /** A read-only property that moves from 0 to 1 as the user slides the thumb to activate the control. Useful as a hook to transition background styles based on the thumb's position. */
  "--thumb-position"?: string;
  /** The width of each individual marker. */
  "--marker-width"?: string;
  /** The height of each individual marker. */
  "--marker-height"?: string;
  /** The height of the thumb. */
  "--thumb-height"?: string;
  /** The start color of the gradient fill */
  "--fill-color"?: string;
  /** The end color of the gradient fill */
  "--gradient-stop-color"?: string;
  /** The speed for one complete rotation. */
  "--speed"?: string;
  /** The amount of blur when using the blur effect. */
  "--blur"?: string;
  /** Minimum position of the divider (as a percentage or pixel value). */
  "--divider-min-position"?: string;
  /** Maximum position of the divider (as a percentage or pixel value). */
  "--divider-max-position"?: string;
  /** The size of the divider's draggable area (can be larger than the visible area). */
  "--divider-draggable-area"?: string;
  /** The width of the visual divider. */
  "--divider-width"?: string;
  /** Adjusts the contrast of the mask image (0-200%, where 100% is normal) */
  "--contrast"?: string;
  /** Converts the mask to grayscale (0-100%, where 0% is normal and 100% is fully grayscale) */
  "--grayscale"?: string;
  /** Rotates the hue of the mask (0-360deg) */
  "--hue-rotate"?: string;
  /** The width of the notification's accent line. */
  "--accent-line-width"?: string;
  /** A readonly value that goes from 100% to 0%, representing the progress remaining until the notification closes. Useful for creating custom content with visual indicators of the notification's progress. */
  "--progress"?: string;
  /** The animation speed to use when effects are selected. */
  "--animation-speed"?: string;
  /** The color to use for checked toggle icons. */
  "--checked-color"?: string;
  /** The color to use for unchecked toggle icons. */
  "--unchecked-color"?: string;
  /** The color of the cursor during animation when `with-cursor` is enabled. */
  "--cursor-color"?: string;
  /** The width of the cursor during animation when `with-cursor` is enabled. */
  "--cursor-width"?: string;
}


declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends CustomElements {}
  }
  export interface CSSProperties extends CustomCssProperties {}
}

declare module 'preact' {
  namespace JSX {
    interface IntrinsicElements extends CustomElements {}
  }
  export interface CSSProperties extends CustomCssProperties {}
}

declare module '@builder.io/qwik' {
  namespace JSX {
    interface IntrinsicElements extends CustomElements {}
  }
  export interface CSSProperties extends CustomCssProperties {}
}

declare module '@stencil/core' {
  namespace JSX {
    interface IntrinsicElements extends CustomElements {}
  }
  export interface CSSProperties extends CustomCssProperties {}
}

declare module 'hono' {
  namespace JSX {
    interface IntrinsicElements extends CustomElements {}
  }
  export interface CSSProperties extends CustomCssProperties {}
}

declare module 'react-native' {
  namespace JSX {
    interface IntrinsicElements extends CustomElements {}
  }
  export interface CSSProperties extends CustomCssProperties {}
}

declare global {
  namespace JSX {
    interface IntrinsicElements extends CustomElements {}
  }
  export interface CSSProperties extends CustomCssProperties {}
}
