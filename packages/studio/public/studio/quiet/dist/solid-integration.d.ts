import type { JSX } from "solid-js";

/**
 * This type can be used to create scoped tags for your components.
 *
 * Usage:
 *
 * ```ts
 * import type { ScopedElements } from "my-app/solid";
 *
 * declare module "solid-js" {
 *   namespace JSX {
 *     interface IntrinsicElements
 *       extends ScopedElements<'prefix-', '-suffix'> {}
 *   }
 * }
 * ```
 *
 */
export type ScopedElements<Prefix extends string = "", Suffix extends string = ""> = {
  [Key in keyof CustomElements as `${Prefix}${Key}${Suffix}`]: CustomElements[Key];
};

type BaseProps = {
  /** Content added between the opening and closing tags of the element */
  children?: JSX.Element;
  /** Used for declaratively styling one or more elements using CSS (Cascading Stylesheets) */
  class?: string;
  /** Takes an object where the key is the class name(s) and the value is a boolean expression. When true, the class is applied, and when false, it is removed. */
  classList?: Record<string, boolean | undefined>;
  /** Specifies the text direction of the element. */
  dir?: "ltr" | "rtl";
  /** Contains a space-separated list of the part names of the element that should be exposed on the host element. */
  exportparts?: string;
  /** Specifies whether the element should be hidden. */
  hidden?: boolean | string;
  /** A unique identifier for the element. */
  id?: string;
  /** Sets the HTML or XML markup contained within the element. */
  innerHTML?: string;
  /** Specifies the language of the element. */
  lang?: string;
  /** Contains a space-separated list of the part names of the element. Part names allows CSS to select and style specific elements in a shadow tree via the ::part pseudo-element. */
  part?: string;
  /** Use the ref attribute with a variable to assign a DOM element to the variable once the element is rendered. */
  ref?: unknown | ((e: unknown) => void);
  /** Adds a reference for a custom element slot */
  slot?: string;
  /** Prop for setting inline styles */
  style?: JSX.CSSProperties;
  /** Overrides the default Tab button behavior. Avoid using values other than -1 and 0. */
  tabIndex?: number;
  /** Sets the text content of the element */
  textContent?: string;
  /** Specifies the tooltip text for the element. */
  title?: string;
  /** Passing 'no' excludes the element content from being translated. */
  translate?: "yes" | "no";
} & JSX.DirectiveAttributes &
  JSX.PropAttributes &
  JSX.AttrAttributes;

type BaseEvents = {};

type QuietAccordionItemProps = {
  /**  */
  expanded?: boolean;
  /** The accordion item's label. If you need to provide HTML in the label, use the `label` slot instead. */
  label?: string;
  /** The accordion item's appearance. This will be set automatically by the accordion controller. */
  appearance?: "normal" | "contained" | "separated" | "unstyled";
  /** The position of the expand/collapse icon. This will be set automatically by the accordion controller. */
  "icon-placement"?: "start" | "end";
  /** Disables the accordion item. */
  disabled?: boolean;
  /**  */
  "prop:body"?: HTMLElement;
  /**  */
  "prop:content"?: HTMLElement;
  /**  */
  "prop:header"?: HTMLElement;
} & JSX.DirectiveFunctionAttributes<QuietAccordionItem> &
  JSX.OnAttributes<QuietAccordionItem> &
  JSX.OnCaptureAttributes<QuietAccordionItem>;

type QuietAccordionProps = {
  /** When set, selecting an accordion item will automatically collapse the others. */
  "auto-collapse"?: boolean;
  /** Determines the accordion's appearance. */
  appearance?: "normal" | "contained" | "separated" | "unstyled";
  /** Determines which side of the accordion item the expand/collapse icon shows. */
  "icon-placement"?: "start" | "end";

  /** Emitted when an accordion item is instructed to expand but before it is shown. Calling `event.preventDefault()` will prevent the item from expanding. `event.detail.item` will contain the expanding item. */
  "on:quiet-before-expand"?: (e: CustomEvent<never>) => void;
  /** Emitted after an accordion item has been expanded. `event.detail.item` will contain the expanded item. */
  "on:quiet-expand"?: (e: CustomEvent<never>) => void;
  /** Emitted when an accordion item is instructed to collapse but before it is hidden. Calling `event.preventDefault()` will prevent the item from collapsing. `event.detail.item` will contain the collapsing item. */
  "on:quiet-before-collapse"?: (e: CustomEvent<never>) => void;
  /** Emitted after an accordion item has been collapsed. `event.detail.item` will contain the collapsed item. */
  "on:quiet-collapse"?: (e: CustomEvent<never>) => void;
} & JSX.DirectiveFunctionAttributes<QuietAccordion> &
  JSX.OnAttributes<QuietAccordion> &
  JSX.OnCaptureAttributes<QuietAccordion>;

type QuietBreadcrumbProps = {} & JSX.DirectiveFunctionAttributes<QuietBreadcrumb> &
  JSX.OnAttributes<QuietBreadcrumb> &
  JSX.OnCaptureAttributes<QuietBreadcrumb>;

type QuietAvatarProps = {
  /** An accessible label for the avatar. This won't be visible, but it will be read to assistive devices so you should
always include one. */
  label?: string | undefined;
  /** A string of characters to display in the avatar when an image isn't available or fails to load. Up to five
characters are supported. */
  characters?: string | undefined;
  /** The URL of an image to display in the avatar. Non-square images will be clipped to fit. */
  image?: string | undefined;
  /**  */
  "prop:hasImageLoaded"?: boolean;
} & JSX.DirectiveFunctionAttributes<QuietAvatar> &
  JSX.OnAttributes<QuietAvatar> &
  JSX.OnCaptureAttributes<QuietAvatar>;

type QuietBadgeProps = {
  /** The type of badge to draw. */
  variant?: "neutral" | "primary" | "constructive" | "destructive";
  /** Determines the badges's appearance. */
  appearance?: "normal" | "outline";
  /** Draws attention to the badge using an animation. */
  attention?: "tap" | "shake" | "sparkle";
} & JSX.DirectiveFunctionAttributes<QuietBadge> &
  JSX.OnAttributes<QuietBadge> &
  JSX.OnCaptureAttributes<QuietBadge>;

type QuietBreadcrumbItemProps = {
  /** Indicates that this item is the current page or view. */
  current?: boolean;
  /** The URL the breadcrumb item should point to. If omitted, the breadcrumb item will be drawn as a `<span>` instead of
a link, enabling alternate content such as dropdowns. */
  href?: string;
  /** Opens the link in the specified target. */
  target?: "_blank" | "_parent" | "_self" | "_top" | undefined;
  /** Sets the link's `rel` attribute. Note that the default value is `noreferrer noopener`, meaning you might need to
set it to an empty string if you're also using `target`. */
  rel?: string;
} & JSX.DirectiveFunctionAttributes<QuietBreadcrumbItem> &
  JSX.OnAttributes<QuietBreadcrumbItem> &
  JSX.OnCaptureAttributes<QuietBreadcrumbItem>;

type QuietBrowserFrameProps = {
  /** The label to display in the address bar. This will override the domain that shows when using `href`. */
  label?: string;
  /** When set, the address bar will be wrapped by a link that goes to this URL. A human-readable domain name will be
shown in the address bar unless `label` is also provided. */
  href?: string;
  /** Opens the link in the specified target. Only works when `href` is set. */
  target?: "_blank" | "_parent" | "_self" | "_top" | undefined;
  /** Sets the link's `rel` attribute.  Only works when `href` is set. When linking to an external domain, you should
probably set this to `noreferrer noopener`. */
  rel?: string | undefined;
  /** Sets the link's `download` attribute, causing the linked file to be downloaded. Only works when `href` is set. */
  download?: string | undefined;
  /** When set, removes all padding from the body element and removes border radius from slotted media. Useful for
displaying images and videos that span edge-to-edge in the browser frame. */
  flush?: boolean;
  /** Sets the window control style to use. 'mac' uses the traffic light controls, 'windows' uses Windows 11-style
controls, and 'auto' will use the most appropriate style based on the user's operating system. */
  platform?: "mac" | "windows" | "auto";
} & JSX.DirectiveFunctionAttributes<QuietBrowserFrame> &
  JSX.OnAttributes<QuietBrowserFrame> &
  JSX.OnCaptureAttributes<QuietBrowserFrame>;

type QuietButtonGroupProps = {
  /** An accessible label for the tab list. This won't be visible, but it will be read to assistive devices so it's
usually a good idea to include one. */
  label?: string;
  /** The button group's orientation. */
  orientation?: "horizontal" | "vertical";
} & JSX.DirectiveFunctionAttributes<QuietButtonGroup> &
  JSX.OnAttributes<QuietButtonGroup> &
  JSX.OnCaptureAttributes<QuietButtonGroup>;

type QuietButtonProps = {
  /** Determines the button's appearance. */
  appearance?: "normal" | "outline" | "text" | "image";
  /** The type of button to render. This attribute has no effect on text or image buttons. */
  variant?: "neutral" | "primary" | "destructive";
  /** Disables the button. */
  disabled?: boolean;
  /** Draws the button in a loading state. */
  loading?: boolean;
  /** Turns the button into a two-state toggle button. Clicking once will turn it on. Clicking again will turn it off.
Cannot be used with links buttons or submit buttons. */
  toggle?: "on" | "off" | undefined;
  /** The button's size. */
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  /** To create an icon button, slot an icon into the button's default slot and set this attribute to an appropriate
label. The label won't be visible, but it will be available to assistive devices. */
  "icon-label"?: string;
  /** Draws the button in a pill shape. */
  pill?: boolean;
  /** Determines the button's type. */
  type?: "button" | "submit" | "reset";
  /** The name to submit when the button is used to submit the form. */
  name?: string;
  /** The value to submit when the button is used to submit the form. */
  value?: string;
  /** When true, the button will be rendered with a caret to indicate a dropdown menu. */
  "with-caret"?: boolean;
  /** Set this to render the button as an `<a>` tag instead of a `<button>`. The button will act as a link. When this is
set, form attributes and features will not work. */
  href?: string;
  /** Opens the link in the specified target. Only works with link buttons. */
  target?: "_blank" | "_parent" | "_self" | "_top" | undefined;
  /** Sets the link's `rel` attribute. Only works with link buttons. When linking to an external domain, you should
probably set this to `noreferrer noopener`. */
  rel?: string | undefined;
  /** Sets the link's `download` attribute, causing the linked file to be downloaded. Only works with link buttons. */
  download?: string | undefined;
  /** The form to associate this control with. If omitted, the closest containing `<form>` will be used. The value of
this attribute must be an ID of a form in the same document or shadow root. */
  form?: string;
  /** Overrides the containing form's `action` attribute. */
  formaction?: string | undefined;
  /** Overrides the containing form's `enctype` attribute. */
  formenctype?: "application/x-www-form-urlencoded" | "multipart/form-data" | "text/plain" | undefined;
  /** Overrides the containing form's `method` attribute. */
  formmethod?: "post" | "get" | undefined;
  /** Overrides the containing form's `novalidate` attribute. */
  formnovalidate?: boolean | undefined;
  /** Overrides the containing form's `target` attribute. */
  formtarget?: "_self" | "_blank" | "_parent" | "_top" | string | undefined;

  /** Emitted when the button loses focus. This event does not bubble. */
  "on:quiet-blur"?: (e: CustomEvent<never>) => void;
  /** Emitted when the button is pressed and held by tapping or with the mouse. You can look at `event.detail.originalEvent.type` to see the type of event that initiated the long press. */
  "on:quiet-long-press"?: (e: CustomEvent<never>) => void;
  /** Emitted when the button receives focus. This event does not bubble. */
  "on:quiet-focus"?: (e: CustomEvent<never>) => void;
} & JSX.DirectiveFunctionAttributes<QuietButton> &
  JSX.OnAttributes<QuietButton> &
  JSX.OnCaptureAttributes<QuietButton>;

type QuietBytesProps = {
  /** The number of bytes to format. */
  value?: number;
  /** The unit to display. */
  unit?: "byte" | "bit";
  /** How to display the bytes, e.g. "100 bytes", "100 b", or "100b". */
  display?: "long" | "short" | "narrow";
} & JSX.DirectiveFunctionAttributes<QuietBytes> &
  JSX.OnAttributes<QuietBytes> &
  JSX.OnCaptureAttributes<QuietBytes>;

type QuietCalloutProps = {
  /** The type of callout to render. */
  variant?: "neutral" | "primary" | "constructive" | "destructive";
} & JSX.DirectiveFunctionAttributes<QuietCallout> &
  JSX.OnAttributes<QuietCallout> &
  JSX.OnCaptureAttributes<QuietCallout>;

type QuietCardProps = {
  /** Determines the card's appearance. */
  appearance?: "normal" | "filled";
  /** The card's orientation. */
  orientation?: "horizontal" | "vertical";
} & JSX.DirectiveFunctionAttributes<QuietCard> &
  JSX.OnAttributes<QuietCard> &
  JSX.OnCaptureAttributes<QuietCard>;

type QuietCarouselProps = {
  /** A custom label for the carousel. This won't be visible, but it will be read to assistive devices. */
  label?: string;
  /** The current active item's index. */
  "active-index"?: number;
  /** The current active item's name. */
  "active-name"?: string;
  /** Enables looping navigation. When true, prev/next buttons wrap around to the opposite end. */
  loop?: boolean;
  /** Hides navigation buttons. */
  "without-nav"?: boolean;
  /** Hides pagination dots. */
  "without-pagination"?: boolean;
  /**  */
  "prop:items"?: HTMLElement;
  /**  */
  "prop:isScrolling"?: boolean;
  /**  */
  "prop:itemCount"?: number;
  /** Emitted when the active item changes and the slide has been fully scrolled into view. */
  "on:quiet-item-change"?: (e: CustomEvent<never>) => void;
} & JSX.DirectiveFunctionAttributes<QuietCarousel> &
  JSX.OnAttributes<QuietCarousel> &
  JSX.OnCaptureAttributes<QuietCarousel>;

type QuietCarouselItemProps = {
  /** An optional name for the carousel item so you can reference it with the `active-name` attribute. */
  name?: string;
} & JSX.DirectiveFunctionAttributes<QuietCarouselItem> &
  JSX.OnAttributes<QuietCarouselItem> &
  JSX.OnCaptureAttributes<QuietCarouselItem>;

type QuietCheckboxProps = {
  /** The checkbox's label. If you need to provide HTML in the label, use the `label` slot instead. */
  label?: string;
  /** The checkbox's description. If you need to provide HTML in the description, use the `description` slot instead. */
  description?: string;
  /** The name of the checkbox. This will be submitted with the form as a name/value pair. */
  name?: string;
  /** The checkbox's value. */
  value?: string;
  /** The checkbox's checked state. */
  checked?: boolean;
  /** Puts the checkbox in an indeterminate state. */
  indeterminate?: boolean;
  /** Disables the checkbox. */
  disabled?: boolean;
  /** The type of checkbox to render. */
  appearance?: "normal" | "filled";
  /** The checkbox's size. */
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  /** The form to associate this control with. If omitted, the closest containing `<form>` will be used. The value of
this attribute must be an ID of a form in the same document or shadow root. */
  form?: string;
  /** Makes the checkbox required. Form submission will not be allowed until the checkbox is checked. */
  required?: boolean;
  /**  */
  "prop:isInvalid"?: boolean;
  /**  */
  "prop:hadUserInteraction"?: boolean;
  /**  */
  "prop:wasSubmitted"?: boolean;
  /** Emitted when the checkbox loses focus. This event does not bubble. */
  "on:quiet-blur"?: (e: CustomEvent<never>) => void;
  /** Emitted when the user commits changes to the checkbox's value. */
  "on:quiet-change"?: (e: CustomEvent<never>) => void;
  /** Emitted when the checkbox receives focus. This event does not bubble. */
  "on:quiet-focus"?: (e: CustomEvent<never>) => void;
  /** Emitted when the checkbox receives input. */
  "on:quiet-input"?: (e: CustomEvent<never>) => void;
} & JSX.DirectiveFunctionAttributes<QuietCheckbox> &
  JSX.OnAttributes<QuietCheckbox> &
  JSX.OnCaptureAttributes<QuietCheckbox>;

type QuietColorInputProps = {
  /** The color input's label. If you need to provide HTML in the label, use the `label` slot instead. */
  label?: string;
  /** The color input's description. If you need to provide HTML in the description, use the `description` slot instead. */
  description?: string;
  /** The name of the color input. This will be submitted with the form as a name/value pair. */
  name?: string;
  /** The color input's value. */
  value?: string;
  /** A placeholder to show in the color input when it's blank. */
  placeholder?: string;
  /** Disables the color input. */
  disabled?: boolean;
  /** Makes the color input a read-only area. */
  readonly?: boolean;
  /** Adds a clear button to the color input when it's not blank. */
  "with-clear"?: boolean;
  /** The type of color input to render. */
  appearance?: "normal" | "filled" | "unstyled";
  /** The color input's size. */
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  /** Draws the text field in a pill shape. */
  pill?: boolean;
  /** The format to use for the color's value. */
  format?: "hex" | "rgb" | "hsl";
  /** One or more semicolon-delimited colors (any valid CSS color format or name) to show as preset swatches below the
color picker. */
  swatches?: string;
  /** Enables the alpha slider. */
  "with-alpha"?: boolean;
  /** Enables the eye dropper button. Only available in
[supportive browsers](https://caniuse.com/?search=eyedropper%20API). */
  "with-eye-dropper"?: boolean;
  /** The placement of the dropdown menu in reference to the trigger. The menu will shift to a more optimal location if
the preferred placement doesn't have enough room. */
  placement?:
    | "top"
    | "top-start"
    | "top-end"
    | "bottom"
    | "bottom-start"
    | "bottom-end"
    | "right"
    | "right-start"
    | "right-end"
    | "left"
    | "left-start"
    | "left-end";
  /** The distance of the dropdown menu from its trigger. */
  distance?: number;
  /** The offset of the dropdown menu along its trigger. */
  offset?: number;
  /** The form to associate this control with. If omitted, the closest containing `<form>` will be used. The value of
this attribute must be an ID of a form in the same document or shadow root. */
  form?: string;
  /** Makes the color input required. Form submission will not be allowed when this is set and the color input is blank. */
  required?: boolean;
  /** Tells the browser how to autocomplete the color input. See [this page](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete)
for available values. */
  autocomplete?: string;
  /** Tells the browser to focus the color input when the page loads or a dialog is shown. */
  autofocus?: boolean;
  /** Sets the enter key label on virtual keyboards. */
  enterkeyhint?: "enter" | "done" | "go" | "next" | "previous" | "search" | "send";
  /** Provides the browser with a hint about the type of data that might be entered by the user, allowing the appropriate
virtual keyboard to be displayed on supported devices. */
  inputmode?: "none" | "text" | "decimal" | "numeric" | "tel" | "search" | "email" | "url";
  /**  */
  "prop:isOpen"?: boolean;
  /**  */
  "prop:isInvalid"?: boolean;
  /**  */
  "prop:hadUserInteraction"?: boolean;
  /**  */
  "prop:wasSubmitted"?: boolean;
  /** Emitted when the color input loses focus. This event does not bubble. */
  "on:quiet-blur"?: (e: CustomEvent<never>) => void;
  /** Emitted when the user commits changes to the color input's value. */
  "on:quiet-change"?: (e: CustomEvent<never>) => void;
  /** Emitted when the color input receives focus. This event does not bubble. */
  "on:quiet-focus"?: (e: CustomEvent<never>) => void;
  /** Emitted when the color input receives input. */
  "on:quiet-input"?: (e: CustomEvent<never>) => void;
} & JSX.DirectiveFunctionAttributes<QuietColorInput> &
  JSX.OnAttributes<QuietColorInput> &
  JSX.OnCaptureAttributes<QuietColorInput>;

type QuietCheckboxGroupProps = {
  /** The checkbox's label. If you need to provide HTML in the label, use the `label` slot instead. */
  label?: string;
  /** The checkbox's description. If you need to provide HTML in the description, use the `description` slot instead. */
  description?: string;
  /** The orientation of grouped items. */
  orientation?: "horizontal" | "vertical";
  /** Indicates at least one option in the checkbox group is required. This just adds a visual indicator. To perform
validation, use the checkbox's `required` attribute and/or `setCustomValidity()` method. */
  required?: boolean;
} & JSX.DirectiveFunctionAttributes<QuietCheckboxGroup> &
  JSX.OnAttributes<QuietCheckboxGroup> &
  JSX.OnCaptureAttributes<QuietCheckboxGroup>;

type QuietColorPickerProps = {
  /** The color picker's label. This won't be visible, but it will be read to assistive devices so you should always
include one. */
  label?: string;
  /** The color picker's value. */
  value?: string;
  /** The format to use for the color's value. */
  format?: "hex" | "rgb" | "hsl";
  /** Disables the color picker. */
  disabled?: boolean;
  /** The color picker's size. */
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  /** One or more semicolon-delimited colors (any valid CSS color format or name) to show as preset swatches below the
color picker. */
  swatches?: string;
  /** Enables the alpha slider. */
  "with-alpha"?: boolean;
  /** Enables the eye dropper button. Only available in
[supportive browsers](https://caniuse.com/?search=eyedropper%20API). */
  "with-eye-dropper"?: boolean;
  /** Enables the color value text field. */
  "with-input"?: boolean;
  /**  */
  "prop:h"?: number;
  /**  */
  "prop:s"?: number;
  /**  */
  "prop:v"?: number;
  /**  */
  "prop:a"?: number;
  /**  */
  "prop:colorSliderThumbX"?: number;
  /**  */
  "prop:colorSliderThumbY"?: number;
  /**  */
  "prop:hasFocus"?: boolean;
  /**  */
  "prop:isChangingV"?: boolean;
  /**  */
  "prop:isChangingS"?: boolean;
  /**  */
  "prop:inputIsFocused"?: boolean;
  /**  */
  "prop:displayValue"?: string;
  /**  */
  "prop:hadUserInteraction"?: boolean;
  /** Emitted when the user commits changes to the color picker's value. */
  "on:quiet-change"?: (e: CustomEvent<never>) => void;
  /** Emitted when the color picker receives input. This can fire very frequently during dragging, so avoid doing expensive operations in the handler. If you don't live feedback, use the `quiet-change` event instead. */
  "on:quiet-input"?: (e: CustomEvent<never>) => void;
} & JSX.DirectiveFunctionAttributes<QuietColorPicker> &
  JSX.OnAttributes<QuietColorPicker> &
  JSX.OnCaptureAttributes<QuietColorPicker>;

type QuietComboboxProps = {
  /** The combobox's label. */
  label?: string;
  /** The combobox's description. */
  description?: string;
  /** The name of the combobox for form submission. */
  name?: string;
  /** The combobox's value(s). */
  value?: string | string[];
  /** Placeholder text for the input. */
  placeholder?: string;
  /** Disables the combobox. */
  disabled?: boolean;
  /** Makes the combobox required. */
  required?: boolean;
  /** Enables multiple selection. */
  multiple?: boolean;
  /** Adds a clear button when not blank. */
  "with-clear"?: boolean;
  /** The visual appearance of the combobox. */
  appearance?: "normal" | "filled" | "unstyled";
  /** The size of the combobox. */
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  /** Draws the combobox in a pill shape. */
  pill?: boolean;
  /** The dropdown's placement relative to the input. */
  placement?: "top" | "top-start" | "top-end" | "bottom" | "bottom-start" | "bottom-end";
  /** The distance of the dropdown from the input. */
  distance?: number;
  /** The offset of the dropdown along the input. */
  offset?: number;
  /** The form to associate with. */
  form?: string;
  /**  */
  "prop:open"?: boolean;
  /**  */
  "prop:inputValue"?: string;
  /** Emitted when the combobox loses focus. */
  "on:quiet-blur"?: (e: CustomEvent<never>) => void;
  /** Emitted when the user commits changes to the combobox's value. */
  "on:quiet-change"?: (e: CustomEvent<never>) => void;
  /** Emitted when the combobox receives focus. */
  "on:quiet-focus"?: (e: CustomEvent<never>) => void;
  /** Emitted when the combobox receives input. */
  "on:quiet-input"?: (e: CustomEvent<never>) => void;
  /** Emitted when the dropdown is instructed to open but before it is shown. */
  "on:quiet-before-open"?: (e: CustomEvent<never>) => void;
  /** Emitted when the dropdown opens. */
  "on:quiet-open"?: (e: CustomEvent<never>) => void;
  /** Emitted when the dropdown is instructed to close but before it is hidden. */
  "on:quiet-before-close"?: (e: CustomEvent<never>) => void;
  /** Emitted when the dropdown closes. */
  "on:quiet-close"?: (e: CustomEvent<never>) => void;
} & JSX.DirectiveFunctionAttributes<QuietCombobox> &
  JSX.OnAttributes<QuietCombobox> &
  JSX.OnCaptureAttributes<QuietCombobox>;

type QuietComboboxItemProps = {
  /** The value to submit when this item is selected. If not provided, the text content is used. */
  value?: string;
  /** Disables the item. */
  disabled?: boolean;
  /**  */
  "prop:defaultSlot"?: HTMLSlotElement;
} & JSX.DirectiveFunctionAttributes<QuietComboboxItem> &
  JSX.OnAttributes<QuietComboboxItem> &
  JSX.OnCaptureAttributes<QuietComboboxItem>;

type QuietComparisonProps = {
  /** The position of the divider as a decimal (0-1). */
  position?: number;
  /** The orientation of the comparison slider, either 'horizontal' or 'vertical'. */
  orientation?: "horizontal" | "vertical";
  /** Disables the comparison component, preventing it from being focused and adjusted. */
  disabled?: boolean;
  /**  */
  "prop:isDragging"?: boolean;
  /** Dispatched when the comparison's handle is moved. */
  "on:quiet-resize"?: (e: CustomEvent<never>) => void;
} & JSX.DirectiveFunctionAttributes<QuietComparison> &
  JSX.OnAttributes<QuietComparison> &
  JSX.OnCaptureAttributes<QuietComparison>;

type QuietCopyProps = {
  /** The text content that will be copied to the clipboard. */
  data?: string | ClipboardItem[];
  /** Disables the button. */
  disabled?: boolean;
  /** The placement of the feedback animation. */
  "feedback-placement"?: "top" | "right" | "bottom" | "left" | "hidden";

  /** Emitted when the content has been copied. This event does not bubble. You can inspect `event.detail.data` to see the content that was copied. */
  "on:quiet-copy"?: (e: CustomEvent<never>) => void;
  /** Emitted when the browser refuses to allow the content to be copied. This event does not bubble. You can inspect `event.detail.error` to see the error that occurred. */
  "on:quiet-copy-error"?: (e: CustomEvent<never>) => void;
} & JSX.DirectiveFunctionAttributes<QuietCopy> &
  JSX.OnAttributes<QuietCopy> &
  JSX.OnCaptureAttributes<QuietCopy>;

type QuietCountdownProps = {
  /** An accessible label for the countdown. This won't be visible, but it will be read to assistive devices so you should
always include one. */
  label?: string;
  /** The date in the future at which the countdown will end. If an attribute is passed, the date should be an
[ISO 8601 string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString).
If set as a property, a `Date` object can be used instead. */
  date?: Date | string;
  /** A visual delimiter to show between units. */
  delimiter?: string;
  /** The smallest unit to display in the countdown. */
  "min-unit"?: "seconds" | "minutes" | "hours" | "days" | "months" | "years";
  /** The largest unit to display in the countdown. */
  "max-unit"?: "seconds" | "minutes" | "hours" | "days" | "months" | "years";
  /** Whether to group numbers, e.g. with a thousands separator. */
  grouping?: "always" | "never" | "auto" | "min2";
  /**  */
  "prop:currentTimeUnits"?: Record<string, number>;
  /**  */
  "prop:visibleUnits"?: string[];
  /**  */
  "prop:effectiveEndDate"?: Date | null;
  /** A custom formatting function to apply to the number. When set, `decimal-places` and `grouping` will be ignored.
Property only. */
  "prop:valueFormatter"?: (value: number) => string;
  /** Dispatched when the countdown finishes. */
  "on:quiet-finished"?: (e: CustomEvent<never>) => void;
  /** Dispatched every time the visible countdown changes. For example, if the timer displays seconds, this will be once every second; if `min-unit` is minutes, it will be once every minute; and so on. */
  "on:quiet-tick"?: (e: CustomEvent<never>) => void;
} & JSX.DirectiveFunctionAttributes<QuietCountdown> &
  JSX.OnAttributes<QuietCountdown> &
  JSX.OnCaptureAttributes<QuietCountdown>;

type QuietDateProps = {
  /** The date to format. If an attribute is passed, the date should be an [ISO 8601 string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString).
If set as a property, a `Date` object can be used instead. If unset, the current date will be assumed. */
  date?: Date | string;
  /** A shortcut property for formatting the date. This can be used with `time-style`, but not with other formatting
properties such as `weekday`, `hour`, `month`, etc. */
  "date-style"?: "full" | "long" | "medium" | "short";
  /** A shortcut property for formatting the time. This can be used with `date-style`, but not with other formatting
properties such as `weekday`, `hour`, `month`, etc. */
  "time-style"?: "full" | "long" | "medium" | "short";
  /** Whether to use 12-hour time (as opposed to 24-hour time). If `auto`, the default value is determined by the user's
locale. */
  "hour-format"?: "auto" | "12" | "24";
  /** The hour cycle to use. */
  hourCycle?: "h11" | "h12" | "h23" | "h24";
  /** The time zone to use. The default is the user's default time zone. */
  "time-zone"?: string;
  /** The representation of the weekday. */
  weekday?: "long" | "short" | "narrow";
  /** The representation of the era. */
  era?: "long" | "short" | "narrow";
  /** The representation of the year. */
  year?: "numeric" | "2-digit";
  /** The representation of the month. */
  month?: "numeric" | "2-digit" | "long" | "short" | "narrow";
  /** The representation of the day. */
  day?: "numeric" | "2-digit";
  /** The formatting style used for day periods like "in the morning", "am", "noon", "n" etc. This option only has an
effect if a 12-hour clock is used. */
  "day-period"?: "long" | "short" | "narrow";
  /** The representation of the hour. */
  hour?: "numeric" | "2-digit";
  /** The representation of the minute. */
  minute?: "numeric" | "2-digit";
  /** The representation of the second. */
  second?: "numeric" | "2-digit";
  /** The number of digits used to represent fractions of a second (any additional digits are truncated). */
  "fractional-second-digits"?: 1 | 2 | 3;
  /** The localized representation of the time zone name. */
  "time-zone-name"?: "long" | "short" | "shortOffset" | "longOffset" | "shortGeneric" | "longGeneric";
  /** The format matching algorithm to use. */
  "format-matcher"?: "basic" | "best-fit";
} & JSX.DirectiveFunctionAttributes<QuietDate> &
  JSX.OnAttributes<QuietDate> &
  JSX.OnCaptureAttributes<QuietDate>;

type QuietDialogProps = {
  /** Opens or closes the dialog. */
  open?: boolean;
  /** By default, the dialog will appear in the center of the screen. Changing the placement will cause the dialog to
slide in from the side of the screen like a drawer. */
  placement?: "center" | "top" | "bottom" | "start" | "end" | "full";
  /** Allows the dialog to be closed when clicking outside of it. */
  "light-dismiss"?: boolean;
  /** For dialogs that scroll, this will reset the scroll position when the dialog closes. */
  "reset-scroll"?: boolean;

  /** Emitted when the dialog is instructed to open but before it is shown. Calling `event.preventDefault()` will prevent the dialog from opening. */
  "on:quiet-before-open"?: (e: CustomEvent<never>) => void;
  /** Emitted after the dialog has been opened and the show animation has completed. */
  "on:quiet-open"?: (e: CustomEvent<never>) => void;
  /** Emitted when the dialog is dismissed. Calling `event.preventDefault()` will prevent the dialog from closing and show a brief animation.<br><br>You can check `event.detail.source` to see which element triggered the dialog to close, such as a button. If the source is the dialog itself, the user has pressed [[Escape]] or the dialog has been closed programmatically. */
  "on:quiet-before-close"?: (e: CustomEvent<never>) => void;
  /** Emitted after the dialog has been closed and the hide animation has completed. */
  "on:quiet-close"?: (e: CustomEvent<never>) => void;
} & JSX.DirectiveFunctionAttributes<QuietDialog> &
  JSX.OnAttributes<QuietDialog> &
  JSX.OnCaptureAttributes<QuietDialog>;

type QuietDividerProps = {
  /** Sets the divider's orientation. */
  orientation?: "horizontal" | "vertical";
} & JSX.DirectiveFunctionAttributes<QuietDivider> &
  JSX.OnAttributes<QuietDivider> &
  JSX.OnCaptureAttributes<QuietDivider>;

type QuietDropdownItemProps = {
  /** An optional value for the menu item. This is useful for determining which item was selected when listening to the
dropdown's `quiet-select` event. */
  value?: string;
  /** Set to `checkbox` to make the item a checkbox. */
  type?: "normal" | "checkbox";
  /** The type of menu item to render. */
  variant?: "destructive" | "neutral";
  /** Set to true to check the dropdown item. Only valid when `type` is `checkbox`. */
  checked?: boolean;
  /** Disables the dropdown item. */
  disabled?: boolean;
  /** Whether the submenu is currently open. */
  submenuOpen?: boolean;
  /** Tells the dropdown item to behave like a link. When selected, the browser will navigate to the target URL. */
  href?: string;
  /** Opens the link in the specified target. Only works when `href` is provided. */
  target?: "_blank" | "_parent" | "_self" | "_top" | undefined;
  /** Sets the link's `rel` attribute. Only works when `href` is provided. When linking to an external domain, you should
probably set this to `noreferrer noopener`. */
  rel?: string | undefined;
  /** Sets the link's `download` attribute, causing the linked file to be downloaded. Only works when `href` is provided. */
  download?: string | undefined;
  /**  */
  "prop:hiddenLink"?: HTMLAnchorElement;
  /**  */
  "prop:submenuElement"?: HTMLDivElement;
} & JSX.DirectiveFunctionAttributes<QuietDropdownItem> &
  JSX.OnAttributes<QuietDropdownItem> &
  JSX.OnCaptureAttributes<QuietDropdownItem>;

type QuietFileInputProps = {
  /** The text field's label. If you need to provide HTML in the label, use the `label` slot instead. */
  label?: string;
  /** The text field's description. If you need to provide HTML in the description, use the `description` slot instead. */
  description?: string;
  /** The name of the file input. This will be submitted with the form as a name/value pair. */
  name?: string;
  /** Disables the file input. */
  disabled?: boolean;
  /** A list of acceptable file types. Must be a comma-separated list of [unique file type
specifiers](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#unique_file_type_specifiers). */
  accept?: boolean;
  /** Allows more than one file to be selected. */
  multiple?: boolean;
  /** The file input's size. */
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  /** The form to associate this control with. If omitted, the closest containing `<form>` will be used. The value of
this attribute must be an ID of a form in the same document or shadow root. */
  form?: string;
  /** Makes the file input required. Form submission will not be allowed when this is set and no files are selected. */
  required?: boolean;
  /**  */
  "prop:dropzone"?: HTMLLabelElement;
  /**  */
  "prop:fileInput"?: HTMLInputElement;
  /**  */
  "prop:isDragging"?: boolean;
  /**  */
  "prop:isInvalid"?: boolean;
  /**  */
  "prop:hadUserInteraction"?: boolean;
  /**  */
  "prop:wasSubmitted"?: boolean;
  /** An array of files that are currently selected. (Property only) */
  "prop:files"?: File[];
  /** Emitted when the file input loses focus. This event does not bubble. */
  "on:quiet-blur"?: (e: CustomEvent<never>) => void;
  /** Emitted when the user selects or removes a file. */
  "on:quiet-change"?: (e: CustomEvent<never>) => void;
  /** Emitted when the file input receives focus. This event does not bubble. */
  "on:quiet-focus"?: (e: CustomEvent<never>) => void;
  /** Emitted when the file input receives input. */
  "on:quiet-input"?: (e: CustomEvent<never>) => void;
} & JSX.DirectiveFunctionAttributes<QuietFileInput> &
  JSX.OnAttributes<QuietFileInput> &
  JSX.OnCaptureAttributes<QuietFileInput>;

type QuietDropdownProps = {
  /** Opens or closes the dropdown. */
  open?: boolean;
  /** The ID of an element to apply the dropdown as a context menu. */
  "context-menu"?: string;
  /** The placement of the dropdown menu in reference to the trigger. The menu will shift to a more optimal location if
the preferred placement doesn't have enough room. */
  placement?:
    | "top"
    | "top-start"
    | "top-end"
    | "bottom"
    | "bottom-start"
    | "bottom-end"
    | "right"
    | "right-start"
    | "right-end"
    | "left"
    | "left-start"
    | "left-end";
  /** The distance of the dropdown menu from its trigger. */
  distance?: number;
  /** The offset of the dropdown menu along its trigger. */
  offset?: number;
  /**  */
  "prop:defaultSlot"?: HTMLSlotElement;
  /** Emitted when the dropdown is instructed to open but before it is shown. */
  "on:quiet-before-open"?: (e: CustomEvent<never>) => void;
  /** Emitted when the dropdown menu has opened and the animation has completed. */
  "on:quiet-open"?: (e: CustomEvent<never>) => void;
  /** Emitted when the dropdown is dismissed but before it is hidden. */
  "on:quiet-before-close"?: (e: CustomEvent<never>) => void;
  /** Emitted when the dropdown menu has closed and the animation has completed. */
  "on:quiet-close"?: (e: CustomEvent<never>) => void;
  /** Emitted when a dropdown item has been selected. You can inspect `event.detail.item` to see the `<quiet-dropdown-item>` that was selected. Calling `event.preventDefault()` will keep the dropdown open. */
  "on:quiet-select"?: (e: CustomEvent<never>) => void;
} & JSX.DirectiveFunctionAttributes<QuietDropdown> &
  JSX.OnAttributes<QuietDropdown> &
  JSX.OnCaptureAttributes<QuietDropdown>;

type QuietExpanderProps = {
  /** Whether the content is expanded */
  expanded?: boolean;
  /** Disables the expand/collapse functionality */
  disabled?: boolean;
  /** When true, the shadow above collapsed content will not be rendered. */
  "without-shadow"?: boolean;
  /**  */
  "prop:content"?: HTMLElement;
  /**  */
  "prop:trigger"?: HTMLButtonElement;
  /** Emitted before the expander opens. Cancelable event that prevents opening when canceled. */
  "on:quiet-before-open"?: (e: CustomEvent<never>) => void;
  /** Emitted after the expander has opened. */
  "on:quiet-open"?: (e: CustomEvent<never>) => void;
  /** Emitted before the expander closes. Cancelable event that prevents closing when canceled. */
  "on:quiet-before-close"?: (e: CustomEvent<never>) => void;
  /** Emitted after the expander has closed. */
  "on:quiet-close"?: (e: CustomEvent<never>) => void;
} & JSX.DirectiveFunctionAttributes<QuietExpander> &
  JSX.OnAttributes<QuietExpander> &
  JSX.OnCaptureAttributes<QuietExpander>;

type QuietEmptyStateProps = {} & JSX.DirectiveFunctionAttributes<QuietEmptyState> &
  JSX.OnAttributes<QuietEmptyState> &
  JSX.OnCaptureAttributes<QuietEmptyState>;

type QuietFitTextProps = {
  /** The minimum font size to use when scaling, in pixels. The text will never be smaller than this value, which may
lead to overflows if the text is excessively long. */
  "min-font-size"?: number;
  /** The maximum font size to use when scaling, in pixels. The text will never be larger than this value, which may
cause the text to not scale the full width of the container. */
  "max-font-size"?: number;
  /** The precision, in pixels, used to scale the text to fit. Larger values are more performant but result in less
accurate measurements. */
  precision?: number;
  /**  */
  "prop:measure"?: HTMLSpanElement;
  /**  */
  "prop:defaultSlot"?: HTMLSlotElement;
  /**  */
  "prop:containerWidth"?: number;
  /**  */
  "prop:text"?: string;
} & JSX.DirectiveFunctionAttributes<QuietFitText> &
  JSX.OnAttributes<QuietFitText> &
  JSX.OnCaptureAttributes<QuietFitText>;

type QuietFlipCardProps = {
  /** Flips the card. */
  flipped?: boolean;
  /** Determines the flip direction. */
  orientation?: "horizontal" | "vertical";
  /**  */
  "prop:defaultSlot"?: HTMLSlotElement;
  /**  */
  "prop:backSlot"?: HTMLSlotElement;
  /** Emitted when the flip card is instructed to flip but before it actually flips. Calling `event.preventDefault()` will prevent the flip card from flipping. */
  "on:quiet-before-flip"?: (e: CustomEvent<never>) => void;
  /** Emitted after the flip card has been flipped and the animation has completed. */
  "on:quiet-flip"?: (e: CustomEvent<never>) => void;
} & JSX.DirectiveFunctionAttributes<QuietFlipCard> &
  JSX.OnAttributes<QuietFlipCard> &
  JSX.OnCaptureAttributes<QuietFlipCard>;

type QuietHotkeyProps = {
  /** The primary keys to display in the hotkey, separated by a space. */
  keys?: string;
  /** The keys to display on Linux devices, separated by a space. */
  linux?: string;
  /** The keys to display on Mac devices, separated by a space. */
  mac?: string;
  /** The keys to display on Windows devices, separated by a space. */
  windows?: string;
  /** Optional label for screen readers. If not provided, the hotkey text will be used. */
  label?: string;
  /** The delimiter to show between each key. When set to `auto`, the delimiter will be determined by the platform (no
character for Mac and "+" for others). */
  delimiter?: "auto" | string;
  /** Determines the platform to show. When set to `auto`, the platform will be automatically detected. The `linux`
platform will be used for most Linux, Unix, and BSD operating systems. */
  platform?: "auto" | "linux" | "mac" | "windows";
  /** The hotkey's appearance. */
  appearance?: "normal" | "unstyled";
} & JSX.DirectiveFunctionAttributes<QuietHotkey> &
  JSX.OnAttributes<QuietHotkey> &
  JSX.OnCaptureAttributes<QuietHotkey>;

type QuietIncludeProps = {
  /** The URL of the file to include. Must be a CORS-enabled endpoint. */
  src?: string;
  /** The mode to use when fetching the request. */
  mode?: RequestMode;
  /** By default, scripts in included files will not be executed. Setting this to true will allow them to run. If you use
this option, make sure you trust the included HTML, otherwise you may become vulnerable to XSS exploits. */
  "allow-scripts"?: boolean;

  /** Emitted when the include file has been fetched and rendered. The HTTP status code will be available in `event.detail.status`. This event does not bubble. */
  "on:quiet-included"?: (e: CustomEvent<never>) => void;
  /** Emitted when the fetch results in a network error or receives an HTTP response outside of the 200 range. If a network error occurs, it will be available in `event.detail.error`. If an HTTP status code was returned, it will be available in `event.detail.status`. This event does not bubble. */
  "on:quiet-include-error"?: (e: CustomEvent<never>) => void;
} & JSX.DirectiveFunctionAttributes<QuietInclude> &
  JSX.OnAttributes<QuietInclude> &
  JSX.OnCaptureAttributes<QuietInclude>;

type QuietIconProps = {
  /** The name of the icon library to use. */
  library?: string;
  /** The icon family to use for this icon, e.g. `filled` or `outline`. */
  family?: string;
  /** The name of the icon to render. */
  name?: string;
  /** A label to use for assistive devices. If omitted, the icon will be considered presentational. */
  label?: string;
  /** Flips the icon horizontally. */
  "flip-x"?: boolean;
  /** Flips the icon vertically. */
  "flip-y"?: boolean;
  /** Rotates the icon the specified number of degrees. */
  rotate?: number;
  /**  */
  "prop:svg"?: SVGSVGElement | undefined;
  /** The icon has reloaded and rendered. This event does not bubble. */
  "on:quiet-loaded"?: (e: CustomEvent<never>) => void;
  /** The icon failed to load. This event does not bubble. */
  "on:quiet-load-error"?: (e: CustomEvent<never>) => void;
} & JSX.DirectiveFunctionAttributes<QuietIcon> &
  JSX.OnAttributes<QuietIcon> &
  JSX.OnCaptureAttributes<QuietIcon>;

type QuietInfiniteScrollerProps = {
  /** An accessible label for the feed. */
  label?: string;
  /** The scroll threshold at which to trigger loading more items. Accepts percentages (e.g., "20%") or pixels
(e.g., "200px"). */
  threshold?: string;
  /**  */
  "prop:defaultSlot"?: HTMLSlotElement;
  /**  */
  "prop:isLoading"?: boolean;
  /**  */
  "prop:isComplete"?: boolean;
  /** Emitted when scrolling reaches the threshold and more items should be loaded. */
  "on:quiet-load-more"?: (e: CustomEvent<never>) => void;
} & JSX.DirectiveFunctionAttributes<QuietInfiniteScroller> &
  JSX.OnAttributes<QuietInfiniteScroller> &
  JSX.OnCaptureAttributes<QuietInfiniteScroller>;

type QuietIntersectionObserverProps = {
  /** The ID of the element to use as as the bounding box of the viewport for the observed targets. */
  root?: string | null;
  /** Margin around the root. Can have values similar to the CSS margin property. */
  "root-margin"?: string;
  /** Either a single number or space-delimited numbers which indicate at what percentage of the target's visibility the observer's callback should be executed. */
  threshold?: string;
  /** A CSS class name to apply to elements while they're intersecting. The class will be removed when the element is no
longer in the viewport. This allows you to apply styles to elements as they enter and exit the viewport using pure
CSS. */
  "intersect-class"?: string;
  /** When true, stops observing after the first intersection. */
  once?: boolean;
  /** Disables the intersection observer. */
  disabled?: boolean;

  /** Emitted when an observed element starts or stops intersecting. `event.detail.entry` contains the respective [`IntersectionObserverEntry`](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry) object. */
  "on:quiet-intersect"?: (e: CustomEvent<never>) => void;
} & JSX.DirectiveFunctionAttributes<QuietIntersectionObserver> &
  JSX.OnAttributes<QuietIntersectionObserver> &
  JSX.OnCaptureAttributes<QuietIntersectionObserver>;

type QuietJoystickProps = {
  /** An accessible label for the joystick. This won't be visible, but it will be read to assistive devices so you should
always include one. */
  label?: string;
  /** Indicates whether the joystick is disabled. When `true`, the joystick does not respond to mouse or touch input. */
  disabled?: boolean;
  /** The operational mode of the joystick. 'normal' snaps back to center on release, 'sticky' retains its last position. */
  mode?: "normal" | "sticky";
  /** The normalized distance (0-1) from the center below which no movement is registered. */
  "dead-zone"?: number;
  /**  */
  "prop:thumbEl"?: HTMLDivElement;
  /** Emitted before interaction begins. Calling `event.preventDefault()` will cancel activation. */
  "on:quiet-joystick-before-start"?: (e: CustomEvent<never>) => void;
  /** Emitted when movement begins. */
  "on:quiet-joystick-start"?: (e: CustomEvent<never>) => void;
  /** Emitted continuously during movement. Consider debouncing for performance-sensitive applications. */
  "on:quiet-joystick-move"?: (e: CustomEvent<never>) => void;
  /** Emitted before interaction ends. Calling `event.preventDefault()` will cancel deactivation. */
  "on:quiet-joystick-before-stop"?: (e: CustomEvent<never>) => void;
  /** Emitted when movement ends. */
  "on:quiet-joystick-stop"?: (e: CustomEvent<never>) => void;
} & JSX.DirectiveFunctionAttributes<QuietJoystick> &
  JSX.OnAttributes<QuietJoystick> &
  JSX.OnCaptureAttributes<QuietJoystick>;

type QuietListboxItemProps = {
  /** The listbox item's label. If you need to provide HTML in the label, use the `label` slot instead. */
  label?: string;
  /** The listbox item's description. If you need to provide HTML in the description, use the `description` slot instead. */
  description?: string;
  /** The listbox item's value. */
  value?: string;
  /** The listbox item's selected state. */
  selected?: boolean;
  /** Disables the listbox item. */
  disabled?: boolean;
} & JSX.DirectiveFunctionAttributes<QuietListboxItem> &
  JSX.OnAttributes<QuietListboxItem> &
  JSX.OnCaptureAttributes<QuietListboxItem>;

type QuietListboxProps = {
  /** The listbox's label. If you need to provide HTML in the label, use the `label` slot instead. */
  label?: string;
  /** The listbox's description. If you need to provide HTML in the description, use the `description` slot instead. */
  description?: string;
  /** The name of the listbox. This will be submitted with the form as a name/value pair. */
  name?: string;
  /** Enables multiple selection mode. */
  multiple?: boolean;
  /** Disables the listbox. */
  disabled?: boolean;
  /** Makes the text field a read-only field. */
  readonly?: boolean;
  /** The text field's size. */
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  /** The form to associate this control with. If omitted, the closest containing `<form>` will be used. The value of
this attribute must be an ID of a form in the same document or shadow root. */
  form?: string;
  /** Makes the listbox required. Form submission will not be allowed when this is set and the listbox is blank. */
  required?: boolean;
  /** The listbox's value. For multiple selection, this will be the value of the first selected item. */
  value?: string;
  /** Gets or sets the currently selected values as an array. This property provides a consistent way to access or modify
the selection state regardless of whether the listbox is in single or multiple selection mode.

In single selection mode, it returns an array with either zero or one value. In multiple selection mode, it returns
an array of all selected values.

When setting this property in single mode, the first value in the array (if any) becomes the selected value. In
multiple mode, all values in the array become selected. */
  selectedValues?: string;
  /** Gets or sets an array of selected listbox items. */
  "prop:selectedItems"?: QuietListboxItem[];
  /** Emitted when the list box loses focus. This event does not bubble. */
  "on:quiet-blur"?: (e: CustomEvent<never>) => void;
  /** Emitted when the user commits changes to the list box's selection. In single select mode, it occurs when a change is made and the listbox loses focus. In multiselect mode, it occurs whenever an option is toggled even while the listbox has focus. */
  "on:quiet-change"?: (e: CustomEvent<never>) => void;
  /** Emitted when the list box receives focus. This event does not bubble. */
  "on:quiet-focus"?: (e: CustomEvent<never>) => void;
  /** Emitted when the list box's selection changes from user input. */
  "on:quiet-input"?: (e: CustomEvent<never>) => void;
} & JSX.DirectiveFunctionAttributes<QuietListbox> &
  JSX.OnAttributes<QuietListbox> &
  JSX.OnCaptureAttributes<QuietListbox>;

type QuietLoremIpsumProps = {
  /** The type of HTML content to generate. */
  type?: "sentence" | "title" | "paragraph" | "ol" | "ul";
  /** The length of the content to generate, e.g. the number of words, sentences, paragraphs, or list items. This should
be a number or a range in the format of `{min}-{max}`, e.g. `2-4`. */
  length?: number | string;
  /** By default, the generator will produce random content every time it runs. Use this option to seed the generator
with a non-zero number and force it to output the same content every time. */
  seed?: number;
  /** The number of words that should occur in a sentence or list item. This should be a number or a range in the format
of `{min}-{max}`, e.g. `4-16`. */
  "words-per-sentence"?: number | string;
  /** The number of sentences that should occur in a paragraph. This should be a number or a range in the format of
`{min}-{max}`, e.g. `3-6`. */
  "sentences-per-paragraph"?: number | string;
} & JSX.DirectiveFunctionAttributes<QuietLoremIpsum> &
  JSX.OnAttributes<QuietLoremIpsum> &
  JSX.OnCaptureAttributes<QuietLoremIpsum>;

type QuietMutationObserverProps = {
  /** Disables the mutation observer. */
  disabled?: boolean;
  /** Indicates whether attributes should be observed. */
  attr?: boolean;
  /** Indicates whether attribute old value should be recorded. */
  "attr-old-value"?: boolean;
  /** One or more attributes to limit observations to, separate by a space. When not specified, all attributes are
observed. */
  "attr-filter"?: string;
  /** Indicates whether mutations to target's children are to be observed. */
  "child-list"?: boolean;
  /** Indicates whether mutations to target's descendants are to be observed. */
  subtree?: boolean;
  /** Indicates whether character data should be observed. */
  "character-data"?: boolean;
  /** Indicates whether character data old value should be recorded. */
  "character-data-old-value"?: boolean;

  /** Emitted when a slotted element is mutated. The `event.detail.record` property contains a [`MutationRecord`](https://developer.mozilla.org/en-US/docs/Web/API/MutationRecord) with information about the mutation. */
  "on:quiet-mutation"?: (e: CustomEvent<never>) => void;
} & JSX.DirectiveFunctionAttributes<QuietMutationObserver> &
  JSX.OnAttributes<QuietMutationObserver> &
  JSX.OnCaptureAttributes<QuietMutationObserver>;

type QuietNaviconProps = {
  /** The ID of the associated menu that gets shown/hidden when the navicon is toggled. The element must be in the same
document as the navicon. */
  for?: string;
  /** Determines if the navicon is toggled on. */
  expanded?: boolean;
  /** Determines the navicon's symbol. */
  symbol?: "hamburger" | "equals" | "horizontal-dots" | "vertical-dots";
  /** Disables the navicon. */
  disabled?: boolean;
  /** The accessible label for the navicon. */
  label?: string;

  /** Emitted when the navicon loses focus. This event does not bubble. */
  "on:quiet-blur"?: (e: CustomEvent<never>) => void;
  /** Emitted when the navicon receives focus. This event does not bubble. */
  "on:quiet-focus"?: (e: CustomEvent<never>) => void;
} & JSX.DirectiveFunctionAttributes<QuietNavicon> &
  JSX.OnAttributes<QuietNavicon> &
  JSX.OnCaptureAttributes<QuietNavicon>;

type QuietMeshGradientProps = {
  /** The number of gradient layers to generate. */
  complexity?: number;
  /** A seed value for consistent gradient generation. If not provided, the gradient will be random. */
  seed?: number | undefined;
} & JSX.DirectiveFunctionAttributes<QuietMeshGradient> &
  JSX.OnAttributes<QuietMeshGradient> &
  JSX.OnCaptureAttributes<QuietMeshGradient>;

type QuietNumberFieldProps = {
  /** The number field's label. If you need to provide HTML in the label, use the `label` slot instead. */
  label?: string;
  /** The number field's description. If you need to provide HTML in the description, use the `description` slot instead. */
  description?: string;
  /** The name of the number field. This will be submitted with the form as a name/value pair. */
  name?: string;
  /** The number field's value. */
  value?: string;
  /** A placeholder to show in the number field when it's blank. */
  placeholder?: string;
  /** Disables the number field. */
  disabled?: boolean;
  /** Makes the number field a read-only field. */
  readonly?: boolean;
  /** The type of number field to render. */
  appearance?: "normal" | "filled" | "unstyled";
  /** The number field's size. */
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  /** Draws the number field in a pill shape. */
  pill?: boolean;
  /** The form to associate this control with. If omitted, the closest containing `<form>` will be used. The value of
this attribute must be an ID of a form in the same document or shadow root. */
  form?: string;
  /** Makes the number field required. Form submission will not be allowed when this is set and the number field is blank. */
  required?: boolean;
  /** A regular expression the value should match to be considered valid. */
  pattern?: string;
  /** The minimum value for date/time types. */
  min?: number;
  /** The maximum value for date/time types. */
  max?: number;
  /** The granularity the value must adhere to when incrementing and decrementing. */
  step?: number | "any";
  /** Tells the browser how to autocomplete the number field. See [this page](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete)
for available values. */
  autocomplete?: string;
  /** Tells the browser to focus the number field when the page loads or a dialog is shown. */
  autofocus?: boolean;
  /** Sets the enter key label on virtual keyboards. */
  enterkeyhint?: "enter" | "done" | "go" | "next" | "previous" | "search" | "send";
  /** When true, the add/subtract steppers won't be displayed. */
  "without-steppers"?: boolean;
  /**  */
  "prop:isInvalid"?: boolean;
  /**  */
  "prop:hadUserInteraction"?: boolean;
  /**  */
  "prop:wasSubmitted"?: boolean;
  /**  */
  "prop:isPasswordVisible"?: boolean;
  /** Emitted when the number field loses focus. This event does not bubble. */
  "on:quiet-blur"?: (e: CustomEvent<never>) => void;
  /** Emitted when the user commits changes to the number field's value. */
  "on:quiet-change"?: (e: CustomEvent<never>) => void;
  /** Emitted when the number field receives focus. This event does not bubble. */
  "on:quiet-focus"?: (e: CustomEvent<never>) => void;
  /** Emitted when the number field receives input. */
  "on:quiet-input"?: (e: CustomEvent<never>) => void;
} & JSX.DirectiveFunctionAttributes<QuietNumberField> &
  JSX.OnAttributes<QuietNumberField> &
  JSX.OnCaptureAttributes<QuietNumberField>;

type QuietNumberTickerProps = {
  /** The starting value for the count. */
  "start-value"?: number;
  /** The target value to count to. */
  "end-value"?: number;
  /** Duration of the animation in milliseconds. */
  duration?: number;
  /** Delay in milliseconds before counting starts. */
  delay?: number;
  /** Number of decimal places to display. */
  "decimal-places"?: number;
  /** Whether to group numbers, e.g. with a thousands separator. */
  grouping?: "always" | "never" | "auto" | "min2";
  /** Whether to start the animation when the component comes into view. */
  "start-on-view"?: boolean;
  /** By default, no animation will occur when the user indicates a preference for reduced motion. Use this attribute to
override this behavior when necessary. */
  "ignore-reduced-motion"?: boolean;
  /** A custom formatting function to apply to the number. When set, `decimal-places` and `grouping` will be ignored.
Property only. */
  "prop:valueFormatter"?: (value: number) => string;
  /** Emitted when the counting animation has completed. */
  "on:quiet-animation-complete"?: (e: CustomEvent<never>) => void;
} & JSX.DirectiveFunctionAttributes<QuietNumberTicker> &
  JSX.OnAttributes<QuietNumberTicker> &
  JSX.OnCaptureAttributes<QuietNumberTicker>;

type QuietPaginationProps = {
  /** A label to use to describe the control to assistive devices. Defaults to "Pagination" when not set. */
  label?: string;
  /** The total number of pages to show. */
  "total-pages"?: number;
  /** The current page. */
  page?: number;
  /** The number of pages to show on each side of the current page. Minimum 2. */
  siblings?: number;
  /** The number of pages to increase or decrease when jump buttons are clicked. */
  jump?: number;
  /** How the pagination will display buttons. */
  format?: "compact" | "standard";
  /** A string that, when provided, renders `<a>` elements instead of `<${tag}s>` using this as the link's template.
Use `$page` to indicate the page number, e.g. `"/path/to/$page"`. Alternatively, you can provide a JavaScript
function that accepts a page number and returns a URL. */
  "link-formatter"?: string | ((page: number) => string);
  /** Disables the pagination control. */
  disabled?: boolean;
  /** Determine's the pagination's appearance. */
  appearance?: "normal" | "filled" | "unstyled";
  /** Removes the previous and next buttons. */
  "without-nav"?: boolean;

  /** Emitted when the page is going to change but before it actually changes. Calling `event.preventDefault()` will prevent the page from changing. Inspect `event.detail` to get the `currentPage` and `requestedPage` properties. */
  "on:quiet-before-page-change"?: (e: CustomEvent<never>) => void;
  /** Emitted after the page has been changed and the UI has been updated. */
  "on:quiet-page-change"?: (e: CustomEvent<never>) => void;
} & JSX.DirectiveFunctionAttributes<QuietPagination> &
  JSX.OnAttributes<QuietPagination> &
  JSX.OnCaptureAttributes<QuietPagination>;

type QuietNumberProps = {
  /** The number to format. */
  number?: number;
  /** The formatting style to use. */
  type?: "decimal" | "currency" | "percent" | "unit";
  /** The currency to use when formatting currency. Must be an ISO 4217 currency code, e.g. "EUR" for euro. If not
provided, USD will be assumed. */
  currency?: string;
  /** How to display the currency in currency formatting. */
  "currency-display"?: "code" | "symbol" | "narrowSymbol" | "name";
  /** In many locales, accounting format means to wrap the number with parentheses instead of appending a minus sign. */
  "currency-sign"?: "standard" | "accounting";
  /** The unit to use in unit formatting. [Possible values can be found here.](https://tc39.es/ecma402/#table-sanctioned-single-unit-identifiers)
There is no default value. If the style is `unit`, this option must be provided. */
  unit?: string;
  /** The unit formatting style to use in unit formatting. */
  "unit-display"?: "narrow" | "short" | "long";
  /** The minimum number of integer digits to use. A value with a smaller number of integer digits than this number will
be left-padded with zeros (to the specified length) when formatted. Possible values are from `1` to `21`. The
default is `1`. */
  "minimum-integer-digits"?: number;
  /** The minimum number of fraction digits to use. Possible values are from `0` to `20`. */
  "minimum-fraction-digits"?: number;
  /** The maximum number of fraction digits to use. Possible values are from `0` to `20`. */
  "maximum-fraction-digits"?: number;
  /** The minimum number of significant digits to use. Possible values are from `1` to `21`; the default is `1`. */
  "minimum-significant-digits"?: number;
  /** The maximum number of significant digits to use. Possible values are from `1` to `21`; the default is `21`. */
  "maximum-significant-digits"?: number;
  /** Specifies how rounding conflicts will be resolved. */
  "rounding-priority"?: "auto" | "morePrecision" | "lessPrecision";
  /** Indicates the increment at which rounding should take place relative to the calculated rounding magnitude. Possible
values are `1`, `2`, `5`, `10`, `20`, `25`, `50`, `100`, `200`, `250`, `500`, `1000`, `2000`, `2500`, and `5000`.
Cannot be mixed with significant-digits rounding or any setting of `roundingPriority` other than auto. */
  "rounding-increment"?:
    | "1"
    | "2"
    | "5"
    | "10"
    | "20"
    | "25"
    | "50"
    | "100"
    | "200"
    | "250"
    | "500"
    | "1000"
    | "2000"
    | "2500"
    | "5000";
  /** How decimals should be rounded. [See this page for more details.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#roundingmode) */
  "rounding-mode"?:
    | "ceil"
    | "floor"
    | "expand"
    | "trunc"
    | "halfCeil"
    | "halfFloor"
    | "halfExpand"
    | "halfTrunc"
    | "halfEven";
  /** The strategy for displaying trailing zeros on whole numbers. */
  "trailing-zero-display"?: "auto" | "stripIfInteger";
  /** The formatting that should be displayed for the number. */
  notation?: "standard" | "scientific" | "engineering" | "compact";
  /** Only used when `notation` is `compact`. */
  "compact-display"?: "short" | "long";
  /** Whether to use grouping separators, such as thousands separators or thousand/lakh/crore separators. */
  grouping?: "always" | "never" | "auto" | "min2";
  /** When to display the sign for the number. */
  "sign-display"?: "auto" | "always" | "exceptZero" | "negative" | "never";
} & JSX.DirectiveFunctionAttributes<QuietNumber> &
  JSX.OnAttributes<QuietNumber> &
  JSX.OnCaptureAttributes<QuietNumber>;

type QuietPasscodeProps = {
  /** The passcode's label. If you need to provide HTML in the label, use the `label` slot instead. */
  label?: string;
  /** The passcode's description. If you need to provide HTML in the description, use the `description` slot instead. */
  description?: string;
  /** The name of the passcode. This will be submitted with the form as a name/value pair. */
  name?: string;
  /** The passcode's value. */
  value?: string;
  /** The format of the passcode. This dictates the number of characters and where delimiters will show. Use `#` to
represent an allowed character. Use a space, dash, or any other character to represent a delimiter. Delimiters are
shown for visual clarity, but won't be included in the submitted value. */
  format?: string;
  /** Disables the passcode. */
  disabled?: boolean;
  /** The type of passcode to render. */
  appearance?: "normal" | "filled" | "unstyled";
  /** The passcode's size. */
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  /** Masks the characters so they're not displayed on screen.=. */
  masked?: boolean;
  /** The type of characters to allow in the input. */
  type?: "numeric" | "alpha" | "alphanumeric" | "any";
  /** Makes the passcode case sensitive. */
  "case-sensitive"?: boolean;
  /** The form to associate this control with. If omitted, the closest containing `<form>` will be used. The value of
this attribute must be an ID of a form in the same document or shadow root. */
  form?: string;
  /** Makes the passcode required. Form submission will not be allowed when this is set and the passcode is blank. */
  required?: boolean;
  /** A regular expression the value should match to be considered valid. */
  pattern?: string;
  /** Tells the browser how to autocomplete the passcode. See [this page](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete)
for available values. */
  autocomplete?: string;
  /** Tells the browser to focus the passcode when the page loads or a dialog is shown. */
  autofocus?: boolean;
  /** Sets the enter key label on virtual keyboards. */
  enterkeyhint?: "enter" | "done" | "go" | "next" | "previous" | "search" | "send";
  /**  */
  "prop:isInvalid"?: boolean;
  /**  */
  "prop:hadUserInteraction"?: boolean;
  /**  */
  "prop:wasSubmitted"?: boolean;
  /** Emitted when the passcode loses focus. This event does not bubble. */
  "on:quiet-blur"?: (e: CustomEvent<never>) => void;
  /** Emitted when the user commits changes to the passcode's value. */
  "on:quiet-change"?: (e: CustomEvent<never>) => void;
  /** Emitted when the passcode receives focus. This event does not bubble. */
  "on:quiet-focus"?: (e: CustomEvent<never>) => void;
  /** Emitted when the passcode receives input. */
  "on:quiet-input"?: (e: CustomEvent<never>) => void;
  /** Emitted when the final character in the passcode is entered. This is useful as a hook to verify the passcode as soon as it's typed in without requiring the user to explicitly submit it. */
  "on:quiet-input-complete"?: (e: CustomEvent<never>) => void;
} & JSX.DirectiveFunctionAttributes<QuietPasscode> &
  JSX.OnAttributes<QuietPasscode> &
  JSX.OnCaptureAttributes<QuietPasscode>;

type QuietPopoverProps = {
  /** The ID of of popover's anchor element. This must be an interactive/focusable element such as a button and it must
be in the same document as the popover. */
  for?: string;
  /** Shows or hides the popover. */
  open?: boolean;
  /** The placement of the popover in reference to the anchor. The menu will shift to a more optimal location if the
preferred placement doesn't have enough room. */
  placement?:
    | "top"
    | "top-start"
    | "top-end"
    | "bottom"
    | "bottom-start"
    | "bottom-end"
    | "right"
    | "right-start"
    | "right-end"
    | "left"
    | "left-start"
    | "left-end";
  /** The distance of the popover from its anchor. */
  distance?: number;
  /** The offset of the popover along its trigger. */
  offset?: number;
  /** Renders the popover without an arrow. */
  "without-arrow"?: boolean;

  /** Emitted when the popover is instructed to open but before it is shown. */
  "on:quiet-before-open"?: (e: CustomEvent<never>) => void;
  /** Emitted when the popover has opened and the animation has completed. */
  "on:quiet-open"?: (e: CustomEvent<never>) => void;
  /** Emitted when the popover is dismissed but before it is hidden. */
  "on:quiet-before-close"?: (e: CustomEvent<never>) => void;
  /** Emitted when the popover has closed. and the animation has completed. */
  "on:quiet-close"?: (e: CustomEvent<never>) => void;
} & JSX.DirectiveFunctionAttributes<QuietPopover> &
  JSX.OnAttributes<QuietPopover> &
  JSX.OnCaptureAttributes<QuietPopover>;

type QuietProgressProps = {
  /** A custom label for assistive devices. */
  label?: string;
  /** The type of progress bar to render. */
  appearance?: "bar" | "ring" | "pie";
  /** The progress bar's minimum value. */
  min?: number;
  /** The progress bar's maximum value. */
  max?: number;
  /** The progress bar's current value. */
  value?: number;
  /** When the completion status can't be determined, the progress bar is considered indeterminate and the value is
ignored. Useful for tasks whose progress can't be reported. */
  indeterminate?: boolean;
  /** The progress bar's current value as a percentage. This is a readonly property. */
  "prop:percentage"?: string;
} & JSX.DirectiveFunctionAttributes<QuietProgress> &
  JSX.OnAttributes<QuietProgress> &
  JSX.OnCaptureAttributes<QuietProgress>;

type QuietRadioProps = {
  /** The radio's label. If you need to provide HTML in the label, use the `label` slot instead. */
  label?: string;
  /** The radio's description. If you need to provide HTML in the description, use the `description` slot instead. */
  description?: string;
  /** The name of the radio. This will be submitted with the form as a name/value pair. */
  name?: string;
  /** The radio's current value. Set this to change the selected item. */
  value?: string;
  /** The orientation of grouped items. */
  orientation?: "horizontal" | "vertical";
  /** The form to associate this control with. If omitted, the closest containing `<form>` will be used. The value of
this attribute must be an ID of a form in the same document or shadow root. */
  form?: string;
  /** Indicates at least one option in the radio is required. */
  required?: boolean;
  /** Disables the radio control. */
  disabled?: boolean;
  /**  */
  "prop:group"?: HTMLElement;
  /**  */
  "prop:isInvalid"?: boolean;
  /**  */
  "prop:hadUserInteraction"?: boolean;
  /**  */
  "prop:wasSubmitted"?: boolean;
  /** Emitted when the user commits changes to the radio's value. */
  "on:quiet-change"?: (e: CustomEvent<never>) => void;
  /** Emitted when the radio receives input. */
  "on:quiet-input"?: (e: CustomEvent<never>) => void;
} & JSX.DirectiveFunctionAttributes<QuietRadio> &
  JSX.OnAttributes<QuietRadio> &
  JSX.OnCaptureAttributes<QuietRadio>;

type QuietRadioItemProps = {
  /** The radio item's label. If you need to provide HTML in the label, use the `label` slot instead. */
  label?: string;
  /** The radio item's description. If you need to provide HTML in the description, use the `description` slot instead. */
  description?: string;
  /** The radio item's value. */
  value?: string;
  /** The radio item's checked state. */
  checked?: boolean;
  /** Disables the radio item. */
  disabled?: boolean;
  /** The type of radio item to render. */
  appearance?: "normal" | "filled";
  /** The radio item's size. */
  size?: "xs" | "sm" | "md" | "lg" | "xl";

  /** Emitted when the radio item loses focus. This event does not bubble. */
  "on:quiet-blur"?: (e: CustomEvent<never>) => void;
  /** Emitted when the radio item receives focus. This event does not bubble. */
  "on:quiet-focus"?: (e: CustomEvent<never>) => void;
} & JSX.DirectiveFunctionAttributes<QuietRadioItem> &
  JSX.OnAttributes<QuietRadioItem> &
  JSX.OnCaptureAttributes<QuietRadioItem>;

type QuietRandomContentProps = {
  /** The number of items to show. */
  items?: number;
  /** The selection mode. The default is 'unique', which ensures different items are shown after calling `randomize()`,
when possible. Use `random` for true randomization or `sequence` to show the next set of items based on their DOM
position. */
  mode?: "unique" | "random" | "sequence";
} & JSX.DirectiveFunctionAttributes<QuietRandomContent> &
  JSX.OnAttributes<QuietRandomContent> &
  JSX.OnCaptureAttributes<QuietRandomContent>;

type QuietQrProps = {
  /** A string of data to encode. URLs, email addresses, and other types of text are fine. */
  data?: string;
  /** A descriptive label for assistive devices. This will not be shown, but it will be announced by screen readers. If
no label is provided, the raw data will be used instead. */
  label?: string;
  /** Determines the level of error correction. The values correspond to those in the
[QR Code specification](https://www.qrcode.com/en/about/standards.html). */
  "error-correction"?: "L" | "M" | "Q" | "H";
  /** The corner radius of the blocks that make up the QR code. For best results, keep this within 0–0.5. */
  corners?: number;
  /** The size of the resulting code in pixels. In most cases, 128–512 is ideal. */
  size?: number;
} & JSX.DirectiveFunctionAttributes<QuietQr> &
  JSX.OnAttributes<QuietQr> &
  JSX.OnCaptureAttributes<QuietQr>;

type QuietRatingProps = {
  /** The rating's label. If you need to provide HTML in the label, use the `label` slot instead. */
  label?: string;
  /** The rating's description. If you need to provide HTML in the description, use the `description` slot instead. */
  description?: string;
  /** The name of the rating. This will be submitted with the form as a name/value pair. */
  name?: string;
  /** The rating's value. */
  value?: number;
  /** Disables the rating. */
  disabled?: boolean;
  /** Makes the rating a read-only field. */
  readonly?: boolean;
  /** The rating's size. */
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  /** The form to associate this control with. If omitted, the closest containing `<form>` will be used. The value of
this attribute must be an iD of a form in the same document or shadow root. */
  form?: string;
  /** Makes the rating required. Form submission will not be allowed when this is set and the rating is empty. */
  required?: boolean;
  /** The maximum value allowed. */
  max?: number;
  /** The granularity the value must adhere to when incrementing and decrementing. */
  step?: number;
  /** Tells the browser to focus the rating when the page loads or a dialog is shown. */
  autofocus?: boolean;
  /**  */
  "prop:rating"?: HTMLElement;
  /**  */
  "prop:isInvalid"?: boolean;
  /**  */
  "prop:hadUserInteraction"?: boolean;
  /**  */
  "prop:wasSubmitted"?: boolean;
  /** A function that returns the HTML for each symbol. The function will receive the `value` and `isSelected` arguments
that you can use to customize the symbol based on specific values or whether the symbol is in the selected state.
You should only return trusted HTML from this function, otherwise you may become vulnerable to XSS exploits. */
  "prop:symbolFormatter"?: (step: number, isSelected: boolean) => string;
  /** Emitted when the rating loses focus. This event does not bubble. */
  "on:quiet-blur"?: (e: CustomEvent<never>) => void;
  /** Emitted when the user commits changes to the rating's value. */
  "on:quiet-change"?: (e: CustomEvent<never>) => void;
  /** Emitted when the rating receives focus. This event does not bubble. */
  "on:quiet-focus"?: (e: CustomEvent<never>) => void;
  /** Emitted when the rating receives input. */
  "on:quiet-input"?: (e: CustomEvent<never>) => void;
} & JSX.DirectiveFunctionAttributes<QuietRating> &
  JSX.OnAttributes<QuietRating> &
  JSX.OnCaptureAttributes<QuietRating>;

type QuietRelativeTimeProps = {
  /** The date from which to calculate the relative time from. If an attribute is passed, the date should be an [ISO 8601
string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString). If set
as a property, a `Date` object can be used instead. If unset, the current date will be assumed. */
  date?: Date | string;
  /** The style of date to render. */
  format?: "long" | "short" | "narrow";
  /** When `auto`, the date may produce strings such as "yesterday" instead of "1 day ago". */
  numeric?: "auto" | "always";
  /** When set, the time will update itself. */
  live?: boolean;
} & JSX.DirectiveFunctionAttributes<QuietRelativeTime> &
  JSX.OnAttributes<QuietRelativeTime> &
  JSX.OnCaptureAttributes<QuietRelativeTime>;

type QuietResizeObserverProps = {
  /** Disables the resize observer. */
  disabled?: boolean;
  /** Sets which box model the observer will observe changes to. */
  box?: "content-box" | "border-box" | "device-pixel-content-box";

  /** Emitted when a slotted element is resized. Like `ResizeObserver`, this event is also dispatched when each element is first observed. The `event.detail.entry` property contains a [`ResizeObserverEntry`](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserverEntry) with information about the element's dimensions. */
  "on:quiet-resize"?: (e: CustomEvent<never>) => void;
} & JSX.DirectiveFunctionAttributes<QuietResizeObserver> &
  JSX.OnAttributes<QuietResizeObserver> &
  JSX.OnCaptureAttributes<QuietResizeObserver>;

type QuietSearchListProps = {
  /** In most cases, you should slot the controller into the `controller` slot. However, when the controller must exist
outside the search list, you can set this property to the ID of an external `<input>` or `<quiet-text-field>`
element instead. */
  controller?: string;
  /** The search behavior to use when finding a matching item. The `exact` search is case-insensitive but requires an
exact match. The `fuzzy` search is more forgiving to typos. When using `custom`, you can set the `isMatch` property
to a custom function to determine if the provided query matches the element's content. */
  match?: "exact" | "fuzzy" | "custom";
  /** The time in milliseconds to use for debouncing the search results while the user types. */
  debounce?: number;
  /**  */
  "prop:results"?: HTMLElement;
  /**  */
  "prop:query"?: string;
  /**  */
  "prop:isEmpty"?: boolean;
  /**  */
  "prop:isInitial"?: boolean;
  /**  */
  "prop:resultsMessage"?: string;
  /** A custom search function you can provide to change the search behavior. The function is applied to each item when
the search query changes. The `query` argument is the current search term, `content` is a string containing the
element's searchable content, including its `textContent` and `data-keywords"`, and `el` is the element being
searched. Property only. */
  "prop:isMatch"?: (query: string, content: string, el: Element) => boolean;
} & JSX.DirectiveFunctionAttributes<QuietSearchList> &
  JSX.OnAttributes<QuietSearchList> &
  JSX.OnCaptureAttributes<QuietSearchList>;

type QuietScrollerProps = {
  /** The scroller's orientation. */
  orientation?: "horizontal" | "vertical";
  /** Removes the visible scrollbar. */
  "without-scrollbar"?: boolean;
  /** Removes the shadows. */
  "without-shadow"?: boolean;
  /**  */
  "prop:content"?: HTMLElement;
  /**  */
  "prop:canScroll"?: boolean;
} & JSX.DirectiveFunctionAttributes<QuietScroller> &
  JSX.OnAttributes<QuietScroller> &
  JSX.OnCaptureAttributes<QuietScroller>;

type QuietShareProps = {
  /** A human-readable label to be shared. This is sometimes ignored by the operating system, but you should usually
provide it as a fallback value. */
  label?: string;
  /** A string of text to be shared. */
  text?: string;
  /** A URL to be shares. */
  url?: string;
  /** An array of [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File) objects to be shared. Property only. */
  files?: File[];
  /** Disables the button. */
  disabled?: boolean;
  /** The placement of the feedback animation when falling back to copying. */
  "feedback-placement"?: "top" | "right" | "bottom" | "left" | "hidden";
} & JSX.DirectiveFunctionAttributes<QuietShare> &
  JSX.OnAttributes<QuietShare> &
  JSX.OnCaptureAttributes<QuietShare>;

type QuietSlideActivatorProps = {
  /** The label to show in the slide activator's track. If you need to provide HTML in the label, use the `label` slot
instead. */
  label?: string;
  /** The label to show when the control is activated. If omitted, the regular label will be shown. If you need to
provide HTML in the label, use the `label` slot instead. */
  "activated-label"?: string;
  /** Reflects when the control is activated. Remove this attribute to deactivate it. */
  activated?: boolean;
  /** Disables the control. */
  disabled?: boolean;
  /** Draws attention to the track by adding a subtle animation. */
  attention?: "shimmer";
  /**  */
  "prop:thumb"?: HTMLElement;
  /**  */
  "prop:isDragging"?: boolean;
  /**  */
  "prop:isPressing"?: boolean;
  /**  */
  "prop:thumbPosition"?: number;
  /** Emitted when the control will activate. Calling `event.preventDefault()` will prevent the activation from occurring. */
  "on:quiet-before-activate"?: (e: CustomEvent<never>) => void;
  /** Emitted immediately after the control is activated. */
  "on:quiet-activate"?: (e: CustomEvent<never>) => void;
  /** Emitted when the control will deactivate. Calling `event.preventDefault()` will prevent the deactivation from occurring. */
  "on:quiet-before-deactivate"?: (e: CustomEvent<never>) => void;
  /** Emitted immediately after the control is deactivated. */
  "on:quiet-deactivate"?: (e: CustomEvent<never>) => void;
  /** Emitted as the slider progresses. Use `event.details.percent` to see how far along it is. */
  "on:quiet-progress"?: (e: CustomEvent<never>) => void;
} & JSX.DirectiveFunctionAttributes<QuietSlideActivator> &
  JSX.OnAttributes<QuietSlideActivator> &
  JSX.OnCaptureAttributes<QuietSlideActivator>;

type QuietSelectProps = {
  /** The select's label. If you need to provide HTML in the label, use the `label` slot instead. */
  label?: string;
  /** The select's description. If you need to provide HTML in the description, use the `description` slot instead. */
  description?: string;
  /** The name of the select. This will be submitted with the form as a name/value pair. */
  name?: string;
  /** The select's value. */
  value?: string;
  /** Disables the select. */
  disabled?: boolean;
  /** Makes the select a read-only field. */
  readonly?: boolean;
  /** The type of select to render. */
  appearance?: "normal" | "filled" | "unstyled";
  /** The select's size. */
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  /** Draws the select in a pill shape. */
  pill?: boolean;
  /** The form to associate this control with. If omitted, the closest containing `<form>` will be used. The value of
this attribute must be an ID of a form in the same document or shadow root. */
  form?: string;
  /** Makes the select required. Form submission will not be allowed when this is set and the select is blank. */
  required?: boolean;
  /** Tells the browser how to autocomplete the select. See [this page](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete)
for available values. */
  autocomplete?: string;
  /** Sets the enter key label on virtual keyboards. */
  enterkeyhint?: "enter" | "done" | "go" | "next" | "previous" | "search" | "send";
  /**  */
  "prop:isInvalid"?: boolean;
  /**  */
  "prop:hadUserInteraction"?: boolean;
  /**  */
  "prop:wasSubmitted"?: boolean;
  /**  */
  "prop:options"?: string;
  /** Emitted when the select loses focus. This event does not bubble. */
  "on:quiet-blur"?: (e: CustomEvent<never>) => void;
  /** Emitted when the user commits changes to the select's value. */
  "on:quiet-change"?: (e: CustomEvent<never>) => void;
  /** Emitted when the select receives focus. This event does not bubble. */
  "on:quiet-focus"?: (e: CustomEvent<never>) => void;
  /** Emitted when the select receives input. */
  "on:quiet-input"?: (e: CustomEvent<never>) => void;
} & JSX.DirectiveFunctionAttributes<QuietSelect> &
  JSX.OnAttributes<QuietSelect> &
  JSX.OnCaptureAttributes<QuietSelect>;

type QuietSliderProps = {
  /** The slider's label. If you need to provide HTML in the label, use the `label` slot instead. */
  label?: string;
  /** The slider's description. If you need to provide HTML in the description, use the `description` slot instead. */
  description?: string;
  /** The name of the slider. This will be submitted with the form as a name/value pair. */
  name?: string;
  /** The slider's value. */
  value?: number;
  /** The minimum value of a range selection. Used only when range attribute is set. */
  "min-value"?: number;
  /** The maximum value of a range selection. Used only when range attribute is set. */
  "max-value"?: number;
  /** Converts the slider to a range slider with two thumbs. */
  range?: boolean;
  /** Disables the slider. */
  disabled?: boolean;
  /** Makes the slider a read-only field. */
  readonly?: boolean;
  /** The orientation of the slider. */
  orientation?: "horizontal" | "vertical";
  /** The slider's size. */
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  /** The starting value from which to draw the slider's fill, which is based on its current value. */
  "indicator-offset"?: number;
  /** The form to associate this control with. If omitted, the closest containing `<form>` will be used. The value of
this attribute must be an ID of a form in the same document or shadow root. */
  form?: string;
  /** The minimum value allowed. */
  min?: number;
  /** The maximum value allowed. */
  max?: number;
  /** The granularity the value must adhere to when incrementing and decrementing. */
  step?: number;
  /** Tells the browser to focus the slider when the page loads or a dialog is shown. */
  autofocus?: boolean;
  /** The distance of the tooltip from the slider's thumb. */
  "tooltip-distance"?: number;
  /** The placement of the tooltip in reference to the slider's thumb. */
  "tooltip-placement"?: "top" | "right" | "bottom" | "left";
  /** Draws markers at each step along the slider. */
  "with-markers"?: boolean;
  /** Draws a tooltip above the thumb when the control has focus or is dragged. */
  "with-tooltip"?: boolean;
  /**  */
  "prop:slider"?: HTMLElement;
  /**  */
  "prop:thumb"?: HTMLElement;
  /**  */
  "prop:thumbMin"?: HTMLElement;
  /**  */
  "prop:thumbMax"?: HTMLElement;
  /**  */
  "prop:track"?: HTMLElement;
  /**  */
  "prop:tooltip"?: QuietTooltip;
  /**  */
  "prop:tooltipMin"?: QuietTooltip;
  /**  */
  "prop:tooltipMax"?: QuietTooltip;
  /**  */
  "prop:isInvalid"?: boolean;
  /**  */
  "prop:hadUserInteraction"?: boolean;
  /**  */
  "prop:wasSubmitted"?: boolean;
  /** Get if this is a range slider */
  "prop:isRange"?: boolean;
  /** A custom formatting function to apply to the value. This will be shown in the tooltip and announced by screen
readers. Must be set with JavaScript. Property only. */
  "prop:valueFormatter"?: (value: number) => string;
  /** Emitted when the slider loses focus. This event does not bubble. */
  "on:quiet-blur"?: (e: CustomEvent<never>) => void;
  /** Emitted when the user commits changes to the slider's value. */
  "on:quiet-change"?: (e: CustomEvent<never>) => void;
  /** Emitted when the slider receives focus. This event does not bubble. */
  "on:quiet-focus"?: (e: CustomEvent<never>) => void;
  /** Emitted when the slider receives input. */
  "on:quiet-input"?: (e: CustomEvent<never>) => void;
} & JSX.DirectiveFunctionAttributes<QuietSlider> &
  JSX.OnAttributes<QuietSlider> &
  JSX.OnCaptureAttributes<QuietSlider>;

type QuietSparklineProps = {
  /** An accessible label for the sparkline. This will be read by screen readers for users who can't see the chart, so
make sure to describe it appropriately. */
  label?: string;
  /** A space-separated list of positive values to show in the sparkline, e.g. "10 25 18 30". At least two values are
required to generate a chart. */
  data?: string;
  /** Determines the sparkline's appearance. */
  appearance?: "gradient" | "line" | "solid";
  /** Draws the component with colors to visually indicate the specified trend. */
  trend?: "positive" | "negative" | "neutral";
  /** The interpolation method used to connect data points on the line. */
  curve?: "linear" | "natural" | "step";
  /**  */
  "prop:points"?: number[];
} & JSX.DirectiveFunctionAttributes<QuietSparkline> &
  JSX.OnAttributes<QuietSparkline> &
  JSX.OnCaptureAttributes<QuietSparkline>;

type QuietSpinnerProps = {
  /** A custom label for screen readers. */
  label?: string;
} & JSX.DirectiveFunctionAttributes<QuietSpinner> &
  JSX.OnAttributes<QuietSpinner> &
  JSX.OnCaptureAttributes<QuietSpinner>;

type QuietSpoilerProps = {
  /** Shows or hides the spoiler's content. */
  visible?: boolean;
  /** Renders the spoiler inline. */
  inline?: boolean;
  /** Removes the hide button and persists the content when shown. */
  persist?: boolean;
  /** Determines how the spoiler is hidden. */
  effect?: "blur" | "solid" | "noise";
  /** The spoiler's label. If you need to provide HTML in the label, use the `label` slot instead. */
  label?: string;
  /** When more than one spoilers share the same name, only will be shown at a time. */
  name?: string;
} & JSX.DirectiveFunctionAttributes<QuietSpoiler> &
  JSX.OnAttributes<QuietSpoiler> &
  JSX.OnCaptureAttributes<QuietSpoiler>;

type QuietSplitterProps = {
  /** The current position of the divider as a decimal (0-1). */
  position?: number;
  /** The orientation of the splitter. */
  orientation?: "horizontal" | "vertical";
  /** Disables the splitter, preventing it from being focused and resized. */
  disabled?: boolean;
  /** A space-separated list of percentage snap points, e.g. "25% 50% 75%". */
  snap?: string;
  /** The maximum distance (in pixels) within which the divider will snap to a specified snap point. */
  "snap-threshold"?: number;
  /**  */
  "prop:isCollapsed"?: boolean;
  /**  */
  "prop:isDragging"?: boolean;
  /** Dispatched when the splitter's handle is moved. */
  "on:quiet-resize"?: (e: CustomEvent<never>) => void;
} & JSX.DirectiveFunctionAttributes<QuietSplitter> &
  JSX.OnAttributes<QuietSplitter> &
  JSX.OnCaptureAttributes<QuietSplitter>;

type QuietStampProps = {
  /** The ID of the `<template>` element to use as a stamp. */
  template?: string;
  /** When true, the stamped content will replace the `<quiet-stamp>` element instead of being appended to it. This can
be useful for controlling exactly what appears in the DOM, but it can also be confusing for developers who may not
understand how the stamped content was generated. */
  replace?: boolean;
} & JSX.DirectiveFunctionAttributes<QuietStamp> &
  JSX.OnAttributes<QuietStamp> &
  JSX.OnCaptureAttributes<QuietStamp>;

type QuietSwitchProps = {
  /** The switch's label. If you need to provide HTML in the label, use the `label` slot instead. */
  label?: string;
  /** The switch's description. If you need to provide HTML in the description, use the `description` slot instead. */
  description?: string;
  /** The name of the switch. This will be submitted with the form as a name/value pair. */
  name?: string;
  /** The switch's value. */
  value?: string;
  /** The switch's checked state. */
  checked?: boolean;
  /** Disables the switch. */
  disabled?: boolean;
  /** The switch's size. */
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  /** The form to associate this control with. If omitted, the closest containing `<form>` will be used. The value of
this attribute must be an ID of a form in the same document or shadow root. */
  form?: string;
  /** Makes the switch required. Form submission will not be allowed until the switch is checked. */
  required?: boolean;
  /**  */
  "prop:isInvalid"?: boolean;
  /**  */
  "prop:hadUserInteraction"?: boolean;
  /**  */
  "prop:wasSubmitted"?: boolean;
  /** Emitted when the switch loses focus. This event does not bubble. */
  "on:quiet-blur"?: (e: CustomEvent<never>) => void;
  /** Emitted when the user commits changes to the switch's value. */
  "on:quiet-change"?: (e: CustomEvent<never>) => void;
  /** Emitted when the switch receives focus. This event does not bubble. */
  "on:quiet-focus"?: (e: CustomEvent<never>) => void;
  /** Emitted when the switch receives input. */
  "on:quiet-input"?: (e: CustomEvent<never>) => void;
} & JSX.DirectiveFunctionAttributes<QuietSwitch> &
  JSX.OnAttributes<QuietSwitch> &
  JSX.OnCaptureAttributes<QuietSwitch>;

type QuietTabProps = {
  /** The name of the tab panel this tab will link to. The tab panel must be an HTML element inside the
`<quiet-tab-list>` element with a `name` attribute. */
  panel?: string | undefined;
  /** Disables the tab, preventing it from being activated. */
  disabled?: boolean;
} & JSX.DirectiveFunctionAttributes<QuietTab> &
  JSX.OnAttributes<QuietTab> &
  JSX.OnCaptureAttributes<QuietTab>;

type QuietTabListProps = {
  /** An accessible label for the tab list. This won't be visible, but it will be read to assistive devices so you should
always include one. */
  label?: string;
  /** The name of the tab panel that's currently active. */
  tab?: string;
  /** The placement of tab controls. */
  placement?: "top" | "bottom" | "start" | "end";

  /** Emitted after a tab is shown. The event will include a `detail` object with `tab` and `panel`properties that reference the respective tab and panel elements. */
  "on:quiet-tab-shown"?: (e: CustomEvent<never>) => void;
  /** Emitted after a tab is hidden. The event will include a `detail` object with `tab` and `panel` properties that reference the respective tab and panel elements. */
  "on:quiet-tab-hidden"?: (e: CustomEvent<never>) => void;
} & JSX.DirectiveFunctionAttributes<QuietTabList> &
  JSX.OnAttributes<QuietTabList> &
  JSX.OnCaptureAttributes<QuietTabList>;

type QuietTabPanelProps = {
  /** The name of the tab panel. Used for assigning tabs to panels. */
  name?: string;
} & JSX.DirectiveFunctionAttributes<QuietTabPanel> &
  JSX.OnAttributes<QuietTabPanel> &
  JSX.OnCaptureAttributes<QuietTabPanel>;

type QuietTextAreaProps = {
  /** The text area's label. If you need to provide HTML in the label, use the `label` slot instead. */
  label?: string;
  /** The text area's description. If you need to provide HTML in the description, use the `description` slot instead. */
  description?: string;
  /** The name of the text area. This will be submitted with the form as a name/value pair. */
  name?: string;
  /** The text area's value. */
  value?: string;
  /** A placeholder to show in the text area when it's blank. */
  placeholder?: string;
  /** Disables the text area. */
  disabled?: boolean;
  /** Makes the text area a read-only area. */
  readonly?: boolean;
  /** Determines how the text area can be resized. */
  resize?: "vertical" | "auto" | "none";
  /** The default number of rows visible in the text area. */
  rows?: number;
  /** The type of text area to render. */
  appearance?: "normal" | "filled" | "unstyled";
  /** The text area's size. */
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  /** The form to associate this control with. If omitted, the closest containing `<form>` will be used. The value of
this attribute must be an ID of a form in the same document or shadow root. */
  form?: string;
  /** Makes the text area required. Form submission will not be allowed when this is set and the text area is blank. */
  required?: boolean;
  /** The minimum string length that will be considered valid. */
  minlength?: number;
  /** The maximum string length that will be considered valid. */
  maxlength?: number;
  /** Turns autocapitalize on or off in supported browsers. */
  autocapitalize?: "off" | "none" | "on" | "sentences" | "words" | "characters";
  /** Tells the browser how to autocomplete the text area. See [this page](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete)
for available values. */
  autocomplete?: string;
  /** Turns autocorrect on or off in supported browsers. */
  autocorrect?: "off" | "on";
  /** Tells the browser to focus the text area when the page loads or a dialog is shown. */
  autofocus?: boolean;
  /** Sets the enter key label on virtual keyboards. */
  enterkeyhint?: "enter" | "done" | "go" | "next" | "previous" | "search" | "send";
  /** Provides the browser with a hint about the type of data that might be entered by the user, allowing the appropriate
virtual keyboard to be displayed on supported devices. */
  inputmode?: "none" | "text" | "decimal" | "numeric" | "tel" | "search" | "email" | "url";
  /** Turns spell checking on or off in supported browsers. */
  spellcheck?: boolean;
  /**  */
  "prop:isInvalid"?: boolean;
  /**  */
  "prop:hadUserInteraction"?: boolean;
  /**  */
  "prop:wasSubmitted"?: boolean;
  /** Emitted when the text area loses focus. This event does not bubble. */
  "on:quiet-blur"?: (e: CustomEvent<never>) => void;
  /** Emitted when the user commits changes to the text area's value. */
  "on:quiet-change"?: (e: CustomEvent<never>) => void;
  /** Emitted when the text area receives focus. This event does not bubble. */
  "on:quiet-focus"?: (e: CustomEvent<never>) => void;
  /** Emitted when the text area receives input. */
  "on:quiet-input"?: (e: CustomEvent<never>) => void;
} & JSX.DirectiveFunctionAttributes<QuietTextArea> &
  JSX.OnAttributes<QuietTextArea> &
  JSX.OnCaptureAttributes<QuietTextArea>;

type QuietTextMaskProps = {
  /** The URL of the image to use for the mask. */
  image?: string;
  /** Creates a parallax-like effect where the image stays fixed while scrolling */
  fixed?: boolean;
} & JSX.DirectiveFunctionAttributes<QuietTextMask> &
  JSX.OnAttributes<QuietTextMask> &
  JSX.OnCaptureAttributes<QuietTextMask>;

type QuietTextFieldProps = {
  /** The text field's label. If you need to provide HTML in the label, use the `label` slot instead. */
  label?: string;
  /** The text field's description. If you need to provide HTML in the description, use the `description` slot instead. */
  description?: string;
  /** The name of the text field. This will be submitted with the form as a name/value pair. */
  name?: string;
  /** The text field's value. */
  value?: string;
  /** A placeholder to show in the text field when it's blank. */
  placeholder?: string;
  /** Disables the text field. */
  disabled?: boolean;
  /** Makes the text field a read-only field. */
  readonly?: boolean;
  /** Adds a clear button to the text field when it's not blank. */
  "with-clear"?: boolean;
  /** The type of text field to render. */
  appearance?: "normal" | "filled" | "unstyled";
  /** The text field's size. */
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  /** Draws the text field in a pill shape. */
  pill?: boolean;
  /** The type of data the text field will accept. */
  type?:
    | "color"
    | "date"
    | "datetime-local"
    | "email"
    | "month"
    | "number"
    | "password"
    | "search"
    | "tel"
    | "text"
    | "time"
    | "url"
    | "week";
  /** The form to associate this control with. If omitted, the closest containing `<form>` will be used. The value of
this attribute must be an ID of a form in the same document or shadow root. */
  form?: string;
  /** Makes the text field required. Form submission will not be allowed when this is set and the text field is blank. */
  required?: boolean;
  /** A regular expression the value should match to be considered valid. */
  pattern?: string;
  /** The minimum string length that will be considered valid. */
  minlength?: number;
  /** The maximum string length that will be considered valid. */
  maxlength?: number;
  /** The minimum value for date/time types. */
  min?: number;
  /** The maximum value for date/time types. */
  max?: number;
  /** The granularity the value must adhere to when incrementing and decrementing. */
  step?: number | "any";
  /** Turns autocapitalize on or off in supported browsers. */
  autocapitalize?: "off" | "none" | "on" | "sentences" | "words" | "characters";
  /** Tells the browser how to autocomplete the text field. See [this page](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete)
for available values. */
  autocomplete?: string;
  /** Turns autocorrect on or off in supported browsers. */
  autocorrect?: "off" | "on";
  /** Tells the browser to focus the text field when the page loads or a dialog is shown. */
  autofocus?: boolean;
  /** Sets the enter key label on virtual keyboards. */
  enterkeyhint?: "enter" | "done" | "go" | "next" | "previous" | "search" | "send";
  /** Provides the browser with a hint about the type of data that might be entered by the user, allowing the appropriate
virtual keyboard to be displayed on supported devices. */
  inputmode?: "none" | "text" | "decimal" | "numeric" | "tel" | "search" | "email" | "url";
  /** Turns spell checking on or off in supported browsers. */
  spellcheck?: boolean;
  /**  */
  "prop:isInvalid"?: boolean;
  /**  */
  "prop:hadUserInteraction"?: boolean;
  /**  */
  "prop:wasSubmitted"?: boolean;
  /**  */
  "prop:isPasswordVisible"?: boolean;
  /** Emitted when the text field loses focus. This event does not bubble. */
  "on:quiet-blur"?: (e: CustomEvent<never>) => void;
  /** Emitted when the user commits changes to the text field's value. */
  "on:quiet-change"?: (e: CustomEvent<never>) => void;
  /** Emitted when the text field receives focus. This event does not bubble. */
  "on:quiet-focus"?: (e: CustomEvent<never>) => void;
  /** Emitted when the text field receives input. */
  "on:quiet-input"?: (e: CustomEvent<never>) => void;
} & JSX.DirectiveFunctionAttributes<QuietTextField> &
  JSX.OnAttributes<QuietTextField> &
  JSX.OnCaptureAttributes<QuietTextField>;

type QuietTimedContentProps = {
  /** The date to start showing the content. */
  "start-date"?: string | Date;
  /** The date to stop showing the content. */
  "end-date"?: string | Date;
  /** When set, the content will update as the time changes. */
  live?: boolean;
} & JSX.DirectiveFunctionAttributes<QuietTimedContent> &
  JSX.OnAttributes<QuietTimedContent> &
  JSX.OnCaptureAttributes<QuietTimedContent>;

type QuietToastProps = {
  /** The placement of the toast stack on the screen. */
  placement?: "top-start" | "top-center" | "top-end" | "bottom-start" | "bottom-center" | "bottom-end";
  /**  */
  "prop:stack"?: QuietTransitionGroup;
  /**  */
  "prop:transitionGroup"?: QuietTransitionGroup;
  /** A custom animation to use for enter/exit transitions. This gets passed through to the internal transition group.
Works well with animations from `@quietui/scurry`. (Property only) */
  "prop:transitionAnimation"?: QuietTransitionAnimation | undefined;
} & JSX.DirectiveFunctionAttributes<QuietToast> &
  JSX.OnAttributes<QuietToast> &
  JSX.OnCaptureAttributes<QuietToast>;

type QuietToastItemProps = {
  /** The type of notification to render. */
  variant?: "primary" | "constructive" | "destructive" | "neutral";
  /** The length of time to show the notification before removing it. Set this to `0` to show the notification until the
user dismisses it. */
  duration?: number;
  /** When set, the close button will be omitted. */
  "without-close"?: boolean;

  /** Emitted when the toast item is dismissed. */
  "on:quiet-before-close"?: (e: CustomEvent<never>) => void;
  /** Emitted after the toast has been dismissed and the hide animation has completed. */
  "on:quiet-close"?: (e: CustomEvent<never>) => void;
} & JSX.DirectiveFunctionAttributes<QuietToastItem> &
  JSX.OnAttributes<QuietToastItem> &
  JSX.OnCaptureAttributes<QuietToastItem>;

type QuietToggleIconProps = {
  /** The toggle icon's label. The label won't be displayed, but it will be announced by assistive devices. */
  label?: string;
  /** The name of the toggle icon. This will be submitted with the form as a name/value pair. */
  name?: string;
  /** The toggle icon's value. */
  value?: string;
  /** The toggle icon's checked state. */
  checked?: boolean;
  /** Disables the toggle icon. */
  disabled?: boolean;
  /** The checkbox's size. */
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  /** The animation to use when toggling. */
  effect?: "fade" | "scale" | "flip-x" | "flip-y" | "translate-x" | "translate-y" | "none";
  /** The form to associate this control with. If omitted, the closest containing `<form>` will be used. The value of
this attribute must be an ID of a form in the same document or shadow root. */
  form?: string;
  /** Makes the toggle icon required. Form submission will not be allowed until the toggle icon is checked. */
  required?: boolean;
  /**  */
  "prop:button"?: HTMLButtonElement;
  /**  */
  "prop:isInvalid"?: boolean;
  /**  */
  "prop:hadUserInteraction"?: boolean;
  /**  */
  "prop:wasSubmitted"?: boolean;
  /** Emitted when the toggle icon loses focus. This event does not bubble. */
  "on:quiet-blur"?: (e: CustomEvent<never>) => void;
  /** Emitted when the user commits changes to the toggle's value. */
  "on:quiet-change"?: (e: CustomEvent<never>) => void;
  /** Emitted when the checkbox receives focus. This event does not bubble. */
  "on:quiet-focus"?: (e: CustomEvent<never>) => void;
  /** Emitted when the checkbox receives input. */
  "on:quiet-input"?: (e: CustomEvent<never>) => void;
} & JSX.DirectiveFunctionAttributes<QuietToggleIcon> &
  JSX.OnAttributes<QuietToggleIcon> &
  JSX.OnCaptureAttributes<QuietToggleIcon>;

type QuietToggleTagProps = {
  /** The toggle tag's label. If you need to provide HTML in the label, use the `label` slot instead. */
  label?: string;
  /** The name of the toggle tag. This will be submitted with the form as a name/value pair. */
  name?: string;
  /** The toggle tag's value. */
  value?: string;
  /** The toggle tag's checked state. */
  checked?: boolean;
  /** Disables the toggle tag. */
  disabled?: boolean;
  /** The toggle tag's size. */
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  /** The form to associate this control with. If omitted, the closest containing `<form>` will be used. The value of
this attribute must be an ID of a form in the same document or shadow root. */
  form?: string;
  /** Makes the toggle tag required. Form submission will not be allowed until the toggle tag is checked. */
  required?: boolean;
  /**  */
  "prop:isInvalid"?: boolean;
  /**  */
  "prop:hadUserInteraction"?: boolean;
  /**  */
  "prop:wasSubmitted"?: boolean;
  /** Emitted when the toggle tag loses focus. This event does not bubble. */
  "on:quiet-blur"?: (e: CustomEvent<never>) => void;
  /** Emitted when the user commits changes to the toggle tag's value. */
  "on:quiet-change"?: (e: CustomEvent<never>) => void;
  /** Emitted when the toggle tag receives focus. This event does not bubble. */
  "on:quiet-focus"?: (e: CustomEvent<never>) => void;
  /** Emitted when the toggle tag receives input. */
  "on:quiet-input"?: (e: CustomEvent<never>) => void;
} & JSX.DirectiveFunctionAttributes<QuietToggleTag> &
  JSX.OnAttributes<QuietToggleTag> &
  JSX.OnCaptureAttributes<QuietToggleTag>;

type QuietToolbarProps = {
  /** The toolbar's orientation. This changes which arrow keys are used to select adjacent buttons. */
  orientation?: "horizontal" | "vertical";
} & JSX.DirectiveFunctionAttributes<QuietToolbar> &
  JSX.OnAttributes<QuietToolbar> &
  JSX.OnCaptureAttributes<QuietToolbar>;

type QuietTooltipProps = {
  /** The ID of the tooltip's anchor element. This must be an interactive/focusable element such as a button and it must
be in the same document as the tooltip. */
  for?: string;
  /** Shows or hides the tooltip. */
  open?: boolean;
  /** The placement of the tooltip in reference to the anchor. The menu will shift to a more optimal location if the
preferred placement doesn't have enough room. */
  placement?:
    | "top"
    | "top-start"
    | "top-end"
    | "bottom"
    | "bottom-start"
    | "bottom-end"
    | "right"
    | "right-start"
    | "right-end"
    | "left"
    | "left-start"
    | "left-end";
  /** The distance of the tooltip from its anchor. */
  distance?: number;
  /** The offset of the tooltip along its trigger. */
  offset?: number;
  /** The number of milliseconds to wait before opening the tooltip when hovering in. */
  "open-delay"?: number;
  /** The number of milliseconds to wait before closing the tooltip when hovering out. */
  "close-delay"?: number;
  /** By default, the tooltip automatically shows when the user focuses or hovers over the anchor. If you want to control
the tooltip programmatically, set this to `manual`. */
  activation?: "auto" | "manual";
  /** Renders the tooltip without an arrow. */
  "without-arrow"?: boolean;

  /** Emitted when the tooltip is instructed to open but before it is shown. */
  "on:quiet-before-open"?: (e: CustomEvent<never>) => void;
  /** Emitted when the tooltip has opened and the animation has completed. */
  "on:quiet-open"?: (e: CustomEvent<never>) => void;
  /** Emitted when the tooltip is dismissed but before it is hidden. */
  "on:quiet-before-close"?: (e: CustomEvent<never>) => void;
  /** Emitted when the tooltip has closed. and the animation has completed. */
  "on:quiet-close"?: (e: CustomEvent<never>) => void;
} & JSX.DirectiveFunctionAttributes<QuietTooltip> &
  JSX.OnAttributes<QuietTooltip> &
  JSX.OnCaptureAttributes<QuietTooltip>;

type QuietTypewriterProps = {
  /** The text to type out. Multiple lines can be separated by the delimiter. */
  text?: string;
  /** The delimiter used to separate multiple lines of text. */
  delimiter?: string;
  /** The average speed in milliseconds to wait between typing each character. */
  speed?: number;
  /** Delay in milliseconds before the animation starts. */
  delay?: number;
  /** Whether to start the animation when the component comes into view. */
  "start-on-view"?: boolean;
  /** Whether to show a blinking cursor during animation. */
  "with-cursor"?: boolean;
  /** Whether to loop the animation with a pause and backspace effect. */
  loop?: boolean;
  /** Duration in milliseconds to pause before backspacing when looping. */
  "loop-delay"?: number;
  /** Whether to pause the typewriter animation. */
  pause?: boolean;
  /** By default, no animation will occur when the user indicates a preference for reduced motion. Use this attribute to
override this behavior when necessary. */
  "ignore-reduced-motion"?: boolean;

  /** Emitted when the typing animation has completed. */
  "on:quiet-animation-complete"?: (e: CustomEvent<never>) => void;
} & JSX.DirectiveFunctionAttributes<QuietTypewriter> &
  JSX.OnAttributes<QuietTypewriter> &
  JSX.OnCaptureAttributes<QuietTypewriter>;

type QuietVeilProps = {
  /** The label for screen readers when veil is active. */
  label?: string;
  /** Description of the property. */
  active?: boolean;
  /** Set to true to show the veil over the entire viewport instead of the content inside of it. */
  fullscreen?: boolean;
  /**  */
  "prop:front"?: HTMLDivElement;
  /**  */
  "prop:dialog"?: HTMLDialogElement;
  /** Emitted when the veil will activate. Calling `event.preventDefault()` will prevent the activation from occurring. */
  "on:quiet-before-activate"?: (e: CustomEvent<never>) => void;
  /** Emitted immediately after the veil is activated. */
  "on:quiet-activate"?: (e: CustomEvent<never>) => void;
  /** Emitted when the veil will deactivate. Calling `event.preventDefault()` will prevent the deactivation from occurring. */
  "on:quiet-before-deactivate"?: (e: CustomEvent<never>) => void;
  /** Emitted immediately after the veil is deactivated. */
  "on:quiet-deactivate"?: (e: CustomEvent<never>) => void;
} & JSX.DirectiveFunctionAttributes<QuietVeil> &
  JSX.OnAttributes<QuietVeil> &
  JSX.OnCaptureAttributes<QuietVeil>;

type QuietTransitionGroupProps = {
  /** Disables transition animations. However, the `quiet-content-changed` and `quiet-transition-end` events will still
be dispatched. */
  "disable-transitions"?: boolean;
  /** By default, no animation will occur when the user indicates a preference for reduced motion. Use this attribute to
override this behavior when necessary. */
  "ignore-reduced-motion"?: boolean;
  /** Determines if the transition group is currently animating. (Property only) */
  "prop:isTransitioning"?: boolean;
  /** A custom animation to use for enter/exit transitions. Works well with animations from `@quietui/scurry`.
(Property only) */
  "prop:transitionAnimation"?: QuietTransitionAnimation | undefined;
  /** By default, the transition group observes and animates its own children. In some cases, you may want it to control
another element's children. This is useful in cases where you can't directly wrap child elements with the
`<quiet-transition-group>` element.

For example, if you embed a transition group in a component's shadow root but need it to control slotted (light
DOM) elements, you can't simply wrap the slot because the mutation observer can't see projected (slotted) elements.
In this case, point this property to the target element and the transition group will hide itself and observe the
target container's children instead. (Property only) */
  "prop:transitionContainer"?: HTMLElement;
  /** Emitted when content changes and before the transition animation begins. */
  "on:quiet-content-changed"?: (e: CustomEvent<never>) => void;
  /** Emitted when transition animations end. */
  "on:quiet-transition-end"?: (e: CustomEvent<never>) => void;
} & JSX.DirectiveFunctionAttributes<QuietTransitionGroup> &
  JSX.OnAttributes<QuietTransitionGroup> &
  JSX.OnCaptureAttributes<QuietTransitionGroup>;

type QuietZoomableFrameProps = {
  /** The URL of the content to display. */
  src?: string;
  /** Inline HTML to display. */
  srcdoc?: string;
  /** Allows fullscreen mode. */
  allowfullscreen?: boolean;
  /** Controls iframe loading behavior. */
  loading?: "eager" | "lazy";
  /** Controls referrer information. */
  referrerpolicy?: string;
  /** Security restrictions for the iframe. */
  sandbox?: string;
  /** The current zoom of the frame, e.g. 0 = 0% and 1 = 100%. */
  zoom?: number;
  /** The zoom levels to step through when using zoom controls. This does not restrict programmatic changes to the zoom. */
  "zoom-levels"?: string;
  /** Removes the zoom controls. */
  "without-controls"?: boolean;
  /** Disables interaction when present. */
  "without-interaction"?: boolean;
  /**  */
  "prop:iframe"?: HTMLIFrameElement;
  /** Returns the internal iframe's `window` object. (Readonly property) */
  "prop:contentWindow"?: Window | null;
  /** Returns the internal iframe's `document` object. (Readonly property) */
  "prop:contentDocument"?: Document | null;
  /** Emitted when the internal iframe when it finishes loading. */
  "on:load"?: (e: CustomEvent<Event>) => void;
  /** Emitted from the internal iframe when it fails to load. */
  "on:error"?: (e: CustomEvent<Event>) => void;
} & JSX.DirectiveFunctionAttributes<QuietZoomableFrame> &
  JSX.OnAttributes<QuietZoomableFrame> &
  JSX.OnCaptureAttributes<QuietZoomableFrame>;

export type CustomElements = {
  /**
   * An individual section within an accordion, consisting of a header and content that shows when expanded.
   * ---
   *
   *
   * ### **Methods:**
   *  - **focus()** - Sets focus to the accordion item.
   * - **blur()** - Removes focus from the accordion item.
   * - **animateExpand()** - Animate the expansion of the body - called by the accordion controller
   * - **animateCollapse()** - Animate the collapse of the body - called by the accordion controller
   *
   * ### **Slots:**
   *  - _default_ - The content to show when expanded.
   * - **icon** - The expand/collapse icon.
   * - **label** - The accordion item's label. For plain-text labels, you can use the `label` attribute instead.
   *
   * ### **CSS Parts:**
   *  - **header** - The accordion item's header that contains the label and icon.
   * - **label** - The label container.
   * - **icon** - The icon container.
   * - **body** - The accordion item's body that contains the content.
   * - **content** - The content wrapper inside the body.
   */
  "quiet-accordion-item": Partial<QuietAccordionItemProps & BaseProps & BaseEvents>;

  /**
   * A container for content that expands and collapses when selected.
   * ---
   *
   *
   * ### **Events:**
   *  - **quiet-before-expand** - Emitted when an accordion item is instructed to expand but before it is shown. Calling `event.preventDefault()` will prevent the item from expanding. `event.detail.item` will contain the expanding item.
   * - **quiet-expand** - Emitted after an accordion item has been expanded. `event.detail.item` will contain the expanded item.
   * - **quiet-before-collapse** - Emitted when an accordion item is instructed to collapse but before it is hidden. Calling `event.preventDefault()` will prevent the item from collapsing. `event.detail.item` will contain the collapsing item.
   * - **quiet-collapse** - Emitted after an accordion item has been collapsed. `event.detail.item` will contain the collapsed item.
   *
   * ### **Slots:**
   *  - _default_ - One or more `<quiet-accordion-item>` elements to place in the accordion.
   *
   * ### **CSS Properties:**
   *  - **--duration** - The expand and collapse duration. _(default: 200ms)_
   * - **--easing** - The expand and collapse easing. _(default: ease)_
   * - **--border-color** - The accordion's border color. _(default: var(--quiet-neutral-stroke-softer))_
   * - **--border-width** - The accordion's border width. _(default: var(--quiet-border-width))_
   * - **--border-style** - The accordion's border style. _(default: var(--quiet-border-style))_
   * - **--border-radius** - The border radius to apply to rounded edges. _(default: var(--quiet-border-radius-md))_
   */
  "quiet-accordion": Partial<QuietAccordionProps & BaseProps & BaseEvents>;

  /**
   * Offers a trail of links that correspond to an app or website's hierarchy, making navigation more predictable
   * for users.
   * ---
   *
   *
   * ### **Slots:**
   *  - _default_ - The default slot containing one or more breadcrumb items.
   *
   * ### **CSS Properties:**
   *  - **--item-spacing** - The amount of spacing to use between breadcrumb items. _(default: 0.5em)_
   */
  "quiet-breadcrumb": Partial<QuietBreadcrumbProps & BaseProps & BaseEvents>;

  /**
   * Provides a visual representation of a user to enhance personalization and recognition.
   * ---
   *
   *
   * ### **Slots:**
   *  - **icon** - A custom icon to use instead of the default. Will not be shown when an image or initials are present. For best results, use a `<quiet-icon>` or an `<svg>` element.
   *
   * ### **CSS Properties:**
   *  - **--size** - The size of the avatar to draw. _(default: 3rem)_
   */
  "quiet-avatar": Partial<QuietAvatarProps & BaseProps & BaseEvents>;

  /**
   * Displays useful information or notifications such as a new feature or an unread message count.
   * ---
   *
   *
   * ### **Slots:**
   *  - _default_ - The badge's content.
   *
   * ### **CSS Properties:**
   *  - **--attention-duration** - The speed at which the attention animation will run. _(default: 1.5s)_
   * - **--attention-easing** - The easing to use for the attention animation. _(default: ease)_
   */
  "quiet-badge": Partial<QuietBadgeProps & BaseProps & BaseEvents>;

  /**
   * Represents a single link or step in the hierarchical structure of an app or website.
   * ---
   *
   *
   * ### **Slots:**
   *  - _default_ - The default slot.
   * - **start** - An icon or similar element to place before the breadcrumb item. Works great with `<quiet-icon>`.
   * - **end** - An icon or similar element to place after the breadcrumb item. Works great with `<quiet-icon>`.
   * - **separator** - A custom separator to show instead of the default. Works great with `<quiet-icon>`.
   *
   * ### **CSS Parts:**
   *  - **label** - The breadcrumb's label, an `<a>` element if `href` is set or a `<span>` element otherwise.
   * - **separator** - The container that wraps the breadcrumb's separator, a `span` element.
   */
  "quiet-breadcrumb-item": Partial<QuietBreadcrumbItemProps & BaseProps & BaseEvents>;

  /**
   * An on-page browser UI that displays arbitrary content inside of it.
   * ---
   *
   *
   * ### **Slots:**
   *  - _default_ - The content to display in the browser window body.
   * - **icon** - An optional icon to display at the start of the address bar.
   *
   * ### **CSS Properties:**
   *  - **--address-background-color** - Background color for the address bar. _(default: undefined)_
   * - **--address-color** - Text color for the address bar. _(default: undefined)_
   * - **--border-color** - Border color for the browser frame. _(default: undefined)_
   * - **--body-padding** - Padding to apply to the browser frame's body. _(default: undefined)_
   * - **--header-background-color** - Background color for the header. _(default: undefined)_
   * - **--header-height** - Height of the browser frame header. _(default: undefined)_
   * - **--windows-control-color** - The color for Windows-style control buttons. _(default: undefined)_
   *
   * ### **CSS Parts:**
   *  - **header** - The browser frame's header that contains controls and address bar.
   * - **controls** - The browser frame's control buttons container (red, yellow, green dots or Windows controls).
   * - **address-bar** - The browser frame's address bar. Either an `<a>` or a `<span>` depending on `href`.
   * - **body** - The browser frame's body, where content shows.
   */
  "quiet-browser-frame": Partial<QuietBrowserFrameProps & BaseProps & BaseEvents>;

  /**
   * Displays related buttons in a stylized group.
   * ---
   *
   *
   * ### **Slots:**
   *  - _default_ - One or more `<quiet-button>` elements to place in the button group.
   */
  "quiet-button-group": Partial<QuietButtonGroupProps & BaseProps & BaseEvents>;

  /**
   * Allows users to navigate, submit forms, and perform other actions.
   * ---
   *
   *
   * ### **Events:**
   *  - **quiet-blur** - Emitted when the button loses focus. This event does not bubble.
   * - **quiet-long-press** - Emitted when the button is pressed and held by tapping or with the mouse. You can look at `event.detail.originalEvent.type` to see the type of event that initiated the long press.
   * - **quiet-focus** - Emitted when the button receives focus. This event does not bubble.
   *
   * ### **Slots:**
   *  - _default_ - The button's label.
   * - **start** - An icon or similar element to place before the label. Works great with `<quiet-icon>`.
   * - **end** - An icon or similar element to place after the label. Works great with `<quiet-icon>`.
   *
   * ### **CSS Parts:**
   *  - **button** - The internal `<button>` element. Other than `width`, this is where most custom styles should be applied.
   * - **caret** - The caret icon, a `<quiet-icon>` element. Only present with the `with-caret` attribute.
   * - **caret__svg** - The caret icon's `<svg>` part.
   * - **spinner** - The loading indicator, a `<quiet-spinner>` element. Only present with the `loading` attribute.
   * - **toggle-indicator** - When the button is a toggle button, this is the indicator that shows the current state.
   */
  "quiet-button": Partial<QuietButtonProps & BaseProps & BaseEvents>;

  /**
   * Formats an arbitrary number of bytes or bits into a human-readable size.
   * ---
   *
   */
  "quiet-bytes": Partial<QuietBytesProps & BaseProps & BaseEvents>;

  /**
   * Draws attention to important information, provides context, or prompts users to take action.
   * ---
   *
   *
   * ### **Slots:**
   *  - _default_ - Content to show in the callout.
   * - **icon** - An optional icon to show in the callout. Works well with `<quiet-icon>` and `<svg>` elements.
   *
   * ### **CSS Parts:**
   *  - **icon** - The container the wraps the icon.
   * - **body** - The container that wraps the callout's content.
   */
  "quiet-callout": Partial<QuietCalloutProps & BaseProps & BaseEvents>;

  /**
   * Provides a flexible and visually appealing way to organize and present content in a consistent and easily
   * digestible format.
   * ---
   *
   *
   * ### **Slots:**
   *  - _default_ - Content to place in the dialog's body.
   * - **header** - Content to place in the dialog's header.
   * - **actions** - Slot in one or more text buttons to add actions to the card's header (vertical) or footer (horizontal). Only available when the respective header/footer is enabled.
   * - **footer** - Content to place in the dialog's footer.
   *
   * ### **CSS Properties:**
   *  - **--spacing** - The spacing to use throughout the card. _(default: 1.5rem)_
   * - **--border-width** - The width of the card's border, including interior borders. _(default: undefined)_
   * - **--border-style** - The style of the card's border. _(default: undefined)_
   *
   * ### **CSS Parts:**
   *  - **body** - The container that wraps the card's body.
   * - **header** - The container that wraps the card's header. A flex container, by default.
   * - **footer** - The container that wraps the card's footer. A flex container, by default.
   * - **media** - The container that wraps the card's media.
   */
  "quiet-card": Partial<QuietCardProps & BaseProps & BaseEvents>;

  /**
   * Displays content in a scrollable horizontal slider with navigation controls.
   * ---
   *
   *
   * ### **Events:**
   *  - **quiet-item-change** - Emitted when the active item changes and the slide has been fully scrolled into view.
   *
   * ### **Methods:**
   *  - **scrollToIndex(index: _number_, scrollBehavior: _ScrollBehavior_)** - Navigate to the specified item.
   * - **scrollToNext(scrollBehavior: _ScrollBehavior_)** - Navigate to the next item
   * - **scrollToPrevious(scrollBehavior: _ScrollBehavior_)** - Navigate to the previous item
   *
   * ### **Slots:**
   *  - _default_ - The default slot for carousel items.
   *
   * ### **CSS Properties:**
   *  - **--aspect-ratio** - The aspect ratio of the carousel. By default, carousels render 100% wide, so this helps retain proportions across various devices. Gets applied to the `items` part. _(default: 16/9)_
   * - **--item-gap** - The gap between items in the carousel. _(default: 2rem)_
   * - **--dot-size** - The size of each pagination dot. _(default: 0.875em)_
   * - **--dot-gap** - The size of the gap between pagination dots. _(default: 0.5em)_
   * - **--dot-color** - The color of inactive pagination dots. _(default: var(--quiet-neutral-fill-soft))_
   * - **--dot-active-color** - The color of active pagination dots. _(default: var(--quiet-neutral-fill-loud))_
   *
   * ### **CSS Parts:**
   *  - **items** - The scrollable container that holds the carousel items.
   * - **controls** - The container that surrounds nav buttons and pagination.
   * - **previous-button** - The previous button.
   * - **next-button** - The next button.
   * - **pagination** - The container for the pagination dots.
   * - **pagination-dot** - Each individual pagination dot.
   * - **pagination-dot-active** - The active pagination dot.
   */
  "quiet-carousel": Partial<QuietCarouselProps & BaseProps & BaseEvents>;

  /**
   * Represents individual items used in a carousel.
   * ---
   *
   *
   * ### **Slots:**
   *  - _default_ - The content to show inside the carousel item.
   *
   * ### **CSS Parts:**
   *  - **content** - A flex wrapper around the carousel item's content.
   */
  "quiet-carousel-item": Partial<QuietCarouselItemProps & BaseProps & BaseEvents>;

  /**
   * Allows users to select one or more options from a list or toggle single options on and off.
   * ---
   *
   *
   * ### **Events:**
   *  - **quiet-blur** - Emitted when the checkbox loses focus. This event does not bubble.
   * - **quiet-change** - Emitted when the user commits changes to the checkbox's value.
   * - **quiet-focus** - Emitted when the checkbox receives focus. This event does not bubble.
   * - **quiet-input** - Emitted when the checkbox receives input.
   *
   * ### **Methods:**
   *  - **focus()** - Sets focus to the checkbox.
   * - **blur()** - Removes focus from the checkbox.
   *
   * ### **Slots:**
   *  - _default_ - The checkbox's label. For plain-text labels, you can use the `label` attribute instead.
   * - **description** - The checkbox's description. For plain-text descriptions, you can use the `description` attribute instead.
   *
   * ### **CSS Parts:**
   *  - **label** - The `<label>` that wraps the entire control.
   * - **description** - The element that contains the checkbox's description.
   * - **visual-box** - The element that wraps the internal checkbox.
   * - **check-icon** - The check icon, a `<quiet-icon>` element.
   * - **check-icon__svg** - The check icon's `svg` part.
   * - **indeterminate-icon** - The indeterminate icon, a `<quiet-icon>` element.
   * - **indeterminate-icon__svg** - The indeterminate icon's `<svg>` part.
   */
  "quiet-checkbox": Partial<QuietCheckboxProps & BaseProps & BaseEvents>;

  /**
   * Allows users to enter or select a color and submit it with a form.
   * ---
   *
   *
   * ### **Events:**
   *  - **quiet-blur** - Emitted when the color input loses focus. This event does not bubble.
   * - **quiet-change** - Emitted when the user commits changes to the color input's value.
   * - **quiet-focus** - Emitted when the color input receives focus. This event does not bubble.
   * - **quiet-input** - Emitted when the color input receives input.
   *
   * ### **Methods:**
   *  - **blur()** - Removes focus from the color input.
   * - **focus()** - Sets focus to the color input.
   * - **getValueAs(format: _'hex' | 'hex8' | 'hsl' | 'rgb'_)** - Gets the current value as a hex string, a hex8 string, an RGB object, or an HSL object. RBG objects have `r`, `g`,
   * and `b` properties ranging from 0–255 and an `a` property (representing opacity) that ranges from 0-1. HSL objects
   * have an `h` property ranging from `0-359` and `s`, `l`, and `a` properties ranging from 0–1.
   * - **select()** - Selects all text in the color input.
   * - **setSelectionRange(start: _number_, end: _number_, direction: _'forward' | 'backward' | 'none'_)** - Sets the start and end positions of the current text selection in the color input.
   * - **setRangeText(replacement: _string_, start: _number_, end: _number_, selectMode: _'select' | 'start' | 'end' | 'preserve'_)** - Replaces a range of text in the color input with a new string.
   * - **showPicker()** - Shows the color picker.
   * - **hidePicker()** - Hides the color picker.
   *
   * ### **Slots:**
   *  - **label** - The color input's label. For plain-text labels, you can use the `label` attribute instead.
   * - **description** - The color input's description. For plain-text descriptions, you can use the `description` attribute instead.
   *
   * ### **CSS Properties:**
   *  - **--show-duration** - The duration of the show/hide animation. _(default: 50ms)_
   * - **--preview-size** - The size of the color preview. _(default: 1.6em)_
   *
   * ### **CSS Parts:**
   *  - **label** - The element that contains the color input's label.
   * - **description** - The element that contains the color input's description.
   * - **visual-box** - The element that wraps the internal text box.
   * - **text-box** - The internal text box, an `<input>` element.
   * - **clear-button** - The clear button, a `<button>` element.
   */
  "quiet-color-input": Partial<QuietColorInputProps & BaseProps & BaseEvents>;

  /**
   * Attaches a label and description to a group of related checkboxes or switches.
   * ---
   *
   *
   * ### **Slots:**
   *  - _default_ - The checkboxes to place in the group.
   * - **label** - The checkbox's label. For plain-text labels, you can use the `label` attribute instead.
   * - **description** - The checkbox's description. For plain-text descriptions, you can use the `description` attribute instead.
   *
   * ### **CSS Properties:**
   *  - **--gap** - The gap between checkboxes. _(default: 1em)_
   *
   * ### **CSS Parts:**
   *  - **label** - The element that contains the checkbox group's label.
   * - **description** - The element that contains the checkbox group's description.
   * - **group** - The element that wraps the grouped checkboxes.
   */
  "quiet-checkbox-group": Partial<QuietCheckboxGroupProps & BaseProps & BaseEvents>;

  /**
   * Provides a customizable interface for selecting a color.
   * ---
   *
   *
   * ### **Events:**
   *  - **quiet-change** - Emitted when the user commits changes to the color picker's value.
   * - **quiet-input** - Emitted when the color picker receives input. This can fire very frequently during dragging, so avoid doing expensive operations in the handler. If you don't live feedback, use the `quiet-change` event instead.
   *
   * ### **Methods:**
   *  - **focus()** - Sets focus to the color picker.
   * - **blur()** - Removes focus from the color picker.
   * - **getValueAs(format: _'hex' | 'hex8' | 'hsl' | 'rgb'_)** - Gets the current value as a hex string, a hex8 string, an RGB object, or an HSL object. RBG objects have `r`, `g`,
   * and `b` properties ranging from 0–255 and an `a` property (representing opacity) that ranges from 0-1. HSL objects
   * have an `h` property ranging from `0-359` and `s`, `l`, and `a` properties ranging from 0–1.
   *
   * ### **CSS Parts:**
   *  - **picker** - The element the wraps the color picker.
   * - **color-slider** - The 2d color slider.
   * - **color-slider-thumb** - The color slider's thumb.
   * - **controls** - The container that wraps the sliders and preview.
   * - **sliders** - The container that wraps the hue and alpha slider.
   * - **hue-slider** - The slider that controls the color's hue.
   * - **hue-slider__label** - The hue slider's `label` part.
   * - **hue-slider__description** - The hue slider's `description` part.
   * - **hue-slider__slider** - The hue slider's `slider` part.
   * - **hue-slider__track** - The hue slider's `track` part.
   * - **hue-slider__indicator** - The hue slider's `indicator` part.
   * - **hue-slider__thumb** - The hue slider's `thumb` part.
   * - **alpha-slider** - The slider that controls the color's opacity.
   * - **alpha-slider__label** - The alpha slider's `label` part.
   * - **alpha-slider__description** - The alpha slider's `description` part.
   * - **alpha-slider__slider** - The alpha slider's `slider` part.
   * - **alpha-slider__track** - The alpha slider's `track` part.
   * - **alpha-slider__indicator** - The alpha slider's `indicator` part.
   * - **alpha-slider__thumb** - The alpha slider's `thumb` part.
   * - **eye-dropper-button** - The eye dropper button, a `<quiet-button>` element.
   * - **preview-button** - The button that shows a preview of the current color, a `<quiet-button>` element.
   * - **color-input** - The color input text field, a `<quiet-text-field>` element.
   * - **color-input__visual-box** - The element that wraps the internal text box.
   * - **color-input__text-box** - The internal text box, an `<input>` element.
   * - **swatches** - The element that contains swatches.
   * - **swatch** - Each individual swatch.
   */
  "quiet-color-picker": Partial<QuietColorPickerProps & BaseProps & BaseEvents>;

  /**
   * Allows users to select from a list of options with type-ahead search.
   * ---
   *
   *
   * ### **Events:**
   *  - **quiet-blur** - Emitted when the combobox loses focus.
   * - **quiet-change** - Emitted when the user commits changes to the combobox's value.
   * - **quiet-focus** - Emitted when the combobox receives focus.
   * - **quiet-input** - Emitted when the combobox receives input.
   * - **quiet-before-open** - Emitted when the dropdown is instructed to open but before it is shown.
   * - **quiet-open** - Emitted when the dropdown opens.
   * - **quiet-before-close** - Emitted when the dropdown is instructed to close but before it is hidden.
   * - **quiet-close** - Emitted when the dropdown closes.
   *
   * ### **Methods:**
   *  - **getTagContent(item: _QuietComboboxItem_): _TemplateResult_** - A custom function for rendering tag content. By default, this function returns the item's full `textContent`. You
   * can override it to customize the content that gets rendered in tags in `multiple` mode.
   * - **focus()** - Sets focus to the combobox.
   * - **blur()** - Removes focus from the combobox.
   *
   * ### **Slots:**
   *  - _default_ - One or more `<quiet-combobox-item>` elements to show as options.
   * - **label** - The combobox's label. For plain-text labels, use the `label` attribute instead.
   * - **description** - The combobox's description. For plain-text descriptions, use the `description` attribute instead.
   * - **start** - An icon or similar element to place before the input. Works great with `<quiet-icon>`.
   * - **end** - An icon or similar element to place after the input. Works great with `<quiet-icon>`.
   *
   * ### **CSS Properties:**
   *  - **--text-box-min-width** - The minimum width of the input field when shown next to tags. Only available in `multiple` mode. _(default: 12ch)_
   * - **--show-duration** - The duration of the show/hide animation for the dropdown. _(default: 50ms)_
   *
   * ### **CSS Parts:**
   *  - **label** - The element that contains the combobox's label.
   * - **description** - The element that contains the combobox's description.
   * - **visual-box** - The element that wraps the internal text box.
   * - **input-area** - The wrapper surrounding tags and the internal text box.
   * - **tag** - Individual tag elements.
   * - **tag-remove** - The remove button for tags.
   * - **text-box** - The internal text box, an `<input>` element.
   * - **chevron** - The chevron icon, a `<quiet-icon>` element.
   * - **chevron__svg** - The chevron icon's `<svg>` part.
   * - **clear-button** - The clear button.
   * - **dropdown** - The dropdown container.
   */
  "quiet-combobox": Partial<QuietComboboxProps & BaseProps & BaseEvents>;

  /**
   * An item that can be selected from a combobox control.
   * ---
   *
   *
   * ### **Methods:**
   *  - **getLabelText(): _string_** - Gets the text content from the combobox item's label.
   *
   * ### **Slots:**
   *  - _default_ - The item's label.
   * - **icon** - An optional icon to display at the start of the item.
   * - **details** - Optional details to display at the end of the item.
   *
   * ### **CSS Parts:**
   *  - **icon** - The container that wraps the icon slot.
   * - **label** - The container that wraps the item's label.
   * - **details** - The container that wraps the details slot.
   * - **checkmark** - The checkmark icon shown when selected in multiple mode.
   */
  "quiet-combobox-item": Partial<QuietComboboxItemProps & BaseProps & BaseEvents>;

  /**
   * Displays two elements side-by-side with a draggable divider, allowing users to adjust the visible portions
   * for direct visual comparison.
   * ---
   *
   *
   * ### **Events:**
   *  - **quiet-resize** - Dispatched when the comparison's handle is moved.
   *
   * ### **Slots:**
   *  - **start** - The content to show on the left/start side or top side, depending on orientation.
   * - **end** - The content to show on the right/end side or bottom side, depending on orientation.
   * - **handle-icon** - A custom icon to use for the divider's handle.
   *
   * ### **CSS Parts:**
   *  - **start** - The container for the start content.
   * - **end** - The container for the end content.
   * - **divider** - The draggable divider between start and end.
   * - **handle** - The visual handle within the divider.
   */
  "quiet-comparison": Partial<QuietComparisonProps & BaseProps & BaseEvents>;

  /**
   * Copies text and other types of data to the clipboard.
   * ---
   *
   *
   * ### **Events:**
   *  - **quiet-copy** - Emitted when the content has been copied. This event does not bubble. You can inspect `event.detail.data` to see the content that was copied.
   * - **quiet-copy-error** - Emitted when the browser refuses to allow the content to be copied. This event does not bubble. You can inspect `event.detail.error` to see the error that occurred.
   *
   * ### **Slots:**
   *  - _default_ - A custom button to use instead of the default.
   *
   * ### **CSS Parts:**
   *  - **copy-button** - The default copy button, a `<quiet-button>` element.
   * - **copy-button__button** - The default copy button's `button` part.
   * - **copy-icon** - The default copy icon, a `<quiet-icon>` element.
   * - **copy-icon__svg** - The copy icon's `svg` part.
   * - **feedback** - The feedback that shows when copying.
   */
  "quiet-copy": Partial<QuietCopyProps & BaseProps & BaseEvents>;

  /**
   * Displays a countdown until the specified date.
   * ---
   *
   *
   * ### **Events:**
   *  - **quiet-finished** - Dispatched when the countdown finishes.
   * - **quiet-tick** - Dispatched every time the visible countdown changes. For example, if the timer displays seconds, this will be once every second; if `min-unit` is minutes, it will be once every minute; and so on.
   *
   * ### **Methods:**
   *  - **start(options: _{ resume?: boolean }_)** - Starts or resumes the countdown timer after validating dates.
   * - **stop()** - Stops the countdown timer and records the time it was stopped.
   *
   * ### **Slots:**
   *  - **seconds** - A custom label to show for seconds.
   * - **minutes** - A custom label to show for minutes.
   * - **hours** - A custom label to show for hours.
   * - **days** - A custom label to show for days.
   * - **months** - A custom label to show for months.
   * - **years** - A custom label to show for years.
   *
   * ### **CSS Parts:**
   *  - **unit** - The container that holds each unit, including its values and labels.
   * - **value** - The value of each unit.
   * - **label** - The label of each unit.
   * - **delimiter** - The delimiters between units.
   */
  "quiet-countdown": Partial<QuietCountdownProps & BaseProps & BaseEvents>;

  /**
   * Outputs a date or time in the specified format.
   * ---
   *
   */
  "quiet-date": Partial<QuietDateProps & BaseProps & BaseEvents>;

  /**
   * Displays modal content for alerts, confirmations, configurations, and other important interactions that
   * require immediate attention.
   * ---
   *
   *
   * ### **Events:**
   *  - **quiet-before-open** - Emitted when the dialog is instructed to open but before it is shown. Calling `event.preventDefault()` will prevent the dialog from opening.
   * - **quiet-open** - Emitted after the dialog has been opened and the show animation has completed.
   * - **quiet-before-close** - Emitted when the dialog is dismissed. Calling `event.preventDefault()` will prevent the dialog from closing and show a brief animation.<br><br>You can check `event.detail.source` to see which element triggered the dialog to close, such as a button. If the source is the dialog itself, the user has pressed [[Escape]] or the dialog has been closed programmatically.
   * - **quiet-close** - Emitted after the dialog has been closed and the hide animation has completed.
   *
   * ### **Methods:**
   *  - **scrollBodyTo(options: _ScrollToOptions_)** - Scrolls the dialog's body to the specified position.
   *
   * ### **Slots:**
   *  - _default_ - Content to place in the dialog's body. Note that, due to [this Chrome bug](https://issues.chromium.org/issues/40800208), you should wrap text nodes in an element to allow text selection in that browser.
   * - **header** - Content to place in the dialog's header.
   * - **actions** - Slot in one or more text buttons to customize the actions that appear in the dialog's header. Only available when the header is enabled.
   * - **footer** - Content to place in the dialog's footer.
   *
   * ### **CSS Properties:**
   *  - **--height** - The default height of the dialog. Note that dialogs shrink to fit as necessary. _(default: fit-content)_
   * - **--show-duration** - The duration of the show/hide animation. _(default: 200ms)_
   * - **--spacing** - The spacing to use throughout the dialog. _(default: 1.5rem)_
   * - **--width** - The default width of the dialog. Note that dialogs shrink to fit as necessary. _(default: 30rem)_
   *
   * ### **CSS Parts:**
   *  - **dialog** - The internal `<dialog>` element.
   * - **body** - The container that wraps the dialog's body.
   * - **header** - The container that wraps the dialog's header. A flex container, by default.
   * - **footer** - The container that wraps the dialog's footer. A flex container, by default.
   */
  "quiet-dialog": Partial<QuietDialogProps & BaseProps & BaseEvents>;

  /**
   * Separates and groups content visually.
   * ---
   *
   *
   * ### **Slots:**
   *  - **symbol** - Optional text or a symbol to show in the center of the divider.
   *
   * ### **CSS Properties:**
   *  - **--color** - The color of the divider. _(default: var(--quiet-neutral-stroke-soft))_
   * - **--spacing** - The spacing around the divider. _(default: 1rem)_
   * - **--thickness** - The thickness of the divider. _(default: var(--quiet-border-width))_
   *
   * ### **CSS Parts:**
   *  - **symbol** - The container that wraps the slotted symbol or icon.
   */
  "quiet-divider": Partial<QuietDividerProps & BaseProps & BaseEvents>;

  /**
   * Can be selected from inside a dropdown menu.
   * ---
   *
   *
   * ### **Methods:**
   *  - **openSubmenu()** - Opens the submenu.
   * - **closeSubmenu()** - Closes the submenu.
   *
   * ### **Slots:**
   *  - _default_ - The item's label or description.
   * - **icon** - An optional icon to show at the start of the item.
   * - **details** - Optional details, such as a keyboard shortcut, to display at the end of the item.
   * - **submenu** - Optional submenu items to display in a nested dropdown. For best results, use `<quiet-submenu-item>` and `<quiet-divider>` elements.
   *
   * ### **CSS Parts:**
   *  - **checkmark** - The checkmark icon that's shown when checked, a `<quiet-icon>` element.
   * - **checkmark__svg** - The checkmark icon's `svg` part.
   * - **icon** - The container that wraps the icon.
   * - **label** - The container that wraps the label.
   * - **details** - The container that wraps the menu item's details.
   * - **submenu** - The container that wraps the submenu items.
   * - **submenu-icon** - The icon indicating that a submenu is available.
   * - **submenu-icon__svg** - The submenu icon's `svg` part.
   */
  "quiet-dropdown-item": Partial<QuietDropdownItemProps & BaseProps & BaseEvents>;

  /**
   * Allows the user to select files to upload to the server.
   * ---
   *
   *
   * ### **Events:**
   *  - **quiet-blur** - Emitted when the file input loses focus. This event does not bubble.
   * - **quiet-change** - Emitted when the user selects or removes a file.
   * - **quiet-focus** - Emitted when the file input receives focus. This event does not bubble.
   * - **quiet-input** - Emitted when the file input receives input.
   *
   * ### **Slots:**
   *  - **label** - The file input's label. For plain-text labels, you can use the `label` attribute instead.
   * - **description** - The file input's description. For plain-text descriptions, you can use the `description` attribute instead.
   * - **dropzone** - Custom content to show in the dropzone.
   *
   * ### **CSS Parts:**
   *  - **label** - The element that contains the text field's label, a `<label>` element.
   * - **description** - The element that contains the text field's description.
   * - **dropzone** - The bordered region where files can be dropped.
   * - **file-list** - The list of files shown when at least one file is selected.
   * - **file** - A selected file will be drawn in this container.
   * - **file-thumbnail** - The container that hold's the file's image or icon.
   * - **file-image** - The file's image preview (if it's an image).
   * - **file-icon** - The file's icon (if it's not an image).
   * - **file-icon__svg** - The `<svg>` part of the file icon.
   * - **file-details** - The container that holds the filename and size.
   * - **file-name** - The container that holds the file's name, a `<span>` element.
   * - **file-size** - The container that holds the file's size, a `<small>` element.
   * - **file-actions** - The container that holds the file's remove button.
   * - **file-remove-button** - The file's remove button.
   * - **file-remove-button__button** - The `button` part of the file's remove button.
   */
  "quiet-file-input": Partial<QuietFileInputProps & BaseProps & BaseEvents>;

  /**
   * Provides a menu of options that appear when the corresponding trigger is activated.
   * ---
   *
   *
   * ### **Events:**
   *  - **quiet-before-open** - Emitted when the dropdown is instructed to open but before it is shown.
   * - **quiet-open** - Emitted when the dropdown menu has opened and the animation has completed.
   * - **quiet-before-close** - Emitted when the dropdown is dismissed but before it is hidden.
   * - **quiet-close** - Emitted when the dropdown menu has closed and the animation has completed.
   * - **quiet-select** - Emitted when a dropdown item has been selected. You can inspect `event.detail.item` to see the `<quiet-dropdown-item>` that was selected. Calling `event.preventDefault()` will keep the dropdown open.
   *
   * ### **Slots:**
   *  - _default_ - One or more `<dropdown-item>` elements to show in the dropdown. You can also use `<quiet-divider>` here.
   * - **trigger** - The dropdown's trigger. Must be a `<quiet-button>` or `<button>` element.
   *
   * ### **CSS Properties:**
   *  - **--show-duration** - The duration of the show/hide animation. _(default: 50ms)_
   *
   * ### **CSS Parts:**
   *  - **menu** - The dropdown menu's container.
   */
  "quiet-dropdown": Partial<QuietDropdownProps & BaseProps & BaseEvents>;

  /**
   * An expandable content container with smooth animation on show/hide.
   * ---
   *
   *
   * ### **Events:**
   *  - **quiet-before-open** - Emitted before the expander opens. Cancelable event that prevents opening when canceled.
   * - **quiet-open** - Emitted after the expander has opened.
   * - **quiet-before-close** - Emitted before the expander closes. Cancelable event that prevents closing when canceled.
   * - **quiet-close** - Emitted after the expander has closed.
   *
   * ### **Slots:**
   *  - _default_ - The default slot for content to be expanded/collapsed.
   * - **expand-label** - The label for the button that expands the content.
   * - **collapse-label** - The label for the button that collapses the content.
   *
   * ### **CSS Properties:**
   *  - **--preview-height** - The visible height of the expander's content when collapsed. _(default: 3lh)_
   * - **--duration** - The duration of the expand/collapse animation. _(default: 200ms)_
   * - **--easing** - The easing to use for the expand/collapse animation. _(default: ease)_
   *
   * ### **CSS Parts:**
   *  - **content** - The container holding the expandable content.
   * - **shadow** - The shadow that shows above collapsed content.
   * - **trigger** - The button that toggles between expanded and collapsed states.
   */
  "quiet-expander": Partial<QuietExpanderProps & BaseProps & BaseEvents>;

  /**
   * Guides users during first-time experiences or when content is missing, transforming blank spaces into
   * opportunities with helpful visuals and clear actions.
   * ---
   *
   *
   * ### **Slots:**
   *  - _default_ - Content to show in the empty state. Usually includes a heading, a paragraph, and sometimes buttons.
   * - **illustration** - An optional illustration to show in the empty state. Works well with an image or a `<quiet-icon>` element.
   *
   * ### **CSS Properties:**
   *  - **--content-width** - The maximum width of the empty state's content. When space is limited, the content will wrap automatically. _(default: 40ch)_
   * - **--illustration-width** - The maximum width of the illustration. By default, this will be half of `--content-width`. This property does not affect the size of icons. _(default: undefined)_
   *
   * ### **CSS Parts:**
   *  - **content** - The container that wraps the content.
   * - **illustration** - The container that wraps the illustration.
   */
  "quiet-empty-state": Partial<QuietEmptyStateProps & BaseProps & BaseEvents>;

  /**
   * Scales a line of text to fit within its container.
   * ---
   *
   *
   * ### **Methods:**
   *  - **resize()** - Resizes the text to fit inside the container. You probably won't need to call this unless you're loading a font
   * dynamically and need to resize the text after it loads.
   *
   * ### **Slots:**
   *  - _default_ - One or more text nodes to display. Non-text nodes will be ignored.
   */
  "quiet-fit-text": Partial<QuietFitTextProps & BaseProps & BaseEvents>;

  /**
   * Displays information on two sides, allowing users to flip between the front and back with the click of a
   * button.
   * ---
   *
   *
   * ### **Events:**
   *  - **quiet-before-flip** - Emitted when the flip card is instructed to flip but before it actually flips. Calling `event.preventDefault()` will prevent the flip card from flipping.
   * - **quiet-flip** - Emitted after the flip card has been flipped and the animation has completed.
   *
   * ### **Slots:**
   *  - **front** - The content to show on the front of the card.
   * - **back** - The content to show on the back of the card.
   *
   * ### **CSS Properties:**
   *  - **--flip-duration** - The duration of the card flip animation. _(default: 0.6s)_
   * - **--flip-easing** - The easing to use for the flip animation. _(default: cubic-bezier(0.2, 0.85, 0.3, 1.15))_
   */
  "quiet-flip-card": Partial<QuietFlipCardProps & BaseProps & BaseEvents>;

  /**
   * Shows keyboard shortcut combinations based on the user's operating system.
   * ---
   *
   *
   * ### **CSS Parts:**
   *  - **key** - The `<kbd>` elements that wrap keys.
   * - **keyword** - The `<kbd>` elements that wrap keywords.
   * - **delimiter** - The `<span>` elements that wrap delimiters.
   */
  "quiet-hotkey": Partial<QuietHotkeyProps & BaseProps & BaseEvents>;

  /**
   * Pulls content from another file into your page.
   * ---
   *
   *
   * ### **Events:**
   *  - **quiet-included** - Emitted when the include file has been fetched and rendered. The HTTP status code will be available in `event.detail.status`. This event does not bubble.
   * - **quiet-include-error** - Emitted when the fetch results in a network error or receives an HTTP response outside of the 200 range. If a network error occurs, it will be available in `event.detail.error`. If an HTTP status code was returned, it will be available in `event.detail.status`. This event does not bubble.
   */
  "quiet-include": Partial<QuietIncludeProps & BaseProps & BaseEvents>;

  /**
   * Provides a visual representation of an object, action, or idea.
   * ---
   *
   *
   * ### **Events:**
   *  - **quiet-loaded** - The icon has reloaded and rendered. This event does not bubble.
   * - **quiet-load-error** - The icon failed to load. This event does not bubble.
   *
   * ### **Methods:**
   *  - **load()** - Loads or reloads and draws the icon.
   *
   * ### **CSS Parts:**
   *  - **svg** - The internal SVG element.
   */
  "quiet-icon": Partial<QuietIconProps & BaseProps & BaseEvents>;

  /**
   * Provides an accessible container for continuously loading content feeds.
   * ---
   *
   *
   * ### **Events:**
   *  - **quiet-load-more** - Emitted when scrolling reaches the threshold and more items should be loaded.
   *
   * ### **Methods:**
   *  - **complete()** - Mark the feed as completed, preventing further load events. Changing content in the default slot will reset this
   * and re-enable infinite scrolling.
   *
   * ### **Slots:**
   *  - _default_ - The default slot for feed items. Each item should have role="article" and be focusable.
   */
  "quiet-infinite-scroller": Partial<QuietInfiniteScrollerProps & BaseProps & BaseEvents>;

  /**
   * Watches child elements and dispatches events when they intersect with their root element.
   * ---
   *
   *
   * ### **Events:**
   *  - **quiet-intersect** - Emitted when an observed element starts or stops intersecting. `event.detail.entry` contains the respective [`IntersectionObserverEntry`](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry) object.
   *
   * ### **Slots:**
   *  - _default_ - The elements to observe. Only direct children of the host element are observed.
   */
  "quiet-intersection-observer": Partial<QuietIntersectionObserverProps & BaseProps & BaseEvents>;

  /**
   * A directional joystick that can be controlled via touch or mouse.
   * ---
   *
   *
   * ### **Events:**
   *  - **quiet-joystick-before-start** - Emitted before interaction begins. Calling `event.preventDefault()` will cancel activation.
   * - **quiet-joystick-start** - Emitted when movement begins.
   * - **quiet-joystick-move** - Emitted continuously during movement. Consider debouncing for performance-sensitive applications.
   * - **quiet-joystick-before-stop** - Emitted before interaction ends. Calling `event.preventDefault()` will cancel deactivation.
   * - **quiet-joystick-stop** - Emitted when movement ends.
   *
   * ### **Methods:**
   *  - **reset()** - Programmatically resets the joystick's position. Useful for resetting it in sticky mode, e.g. when a game restarts.
   *
   * ### **Slots:**
   *  - **thumb** - An optional icon to display inside the thumb.
   *
   * ### **CSS Properties:**
   *  - **--size** - The overall width and height of the joystick. _(default: 7rem)_
   * - **--thumb-size** - The width and height of the movable thumb. _(default: 2.5rem)_
   * - **--distance** - A readonly custom property that represents the normalized distance (0-1) of the thumb from the center, updated dynamically during movement. You can use this to change the joystick's appearance as the user moves the thumb. _(default: 0)_
   *
   * ### **CSS Parts:**
   *  - **thumb** - The movable thumb within the joystick.
   */
  "quiet-joystick": Partial<QuietJoystickProps & BaseProps & BaseEvents>;

  /**
   * Represents individual choices within a listbox.
   * ---
   *
   *
   * ### **Slots:**
   *  - _default_ - The listbox item's label. For plain-text labels, you can use the `label` attribute instead.
   */
  "quiet-listbox-item": Partial<QuietListboxItemProps & BaseProps & BaseEvents>;

  /**
   * Displays a list of options, allowing users to select one or more items from the available choices.
   * ---
   *
   *
   * ### **Events:**
   *  - **quiet-blur** - Emitted when the list box loses focus. This event does not bubble.
   * - **quiet-change** - Emitted when the user commits changes to the list box's selection. In single select mode, it occurs when a change is made and the listbox loses focus. In multiselect mode, it occurs whenever an option is toggled even while the listbox has focus.
   * - **quiet-focus** - Emitted when the list box receives focus. This event does not bubble.
   * - **quiet-input** - Emitted when the list box's selection changes from user input.
   *
   * ### **Methods:**
   *  - **getSelectedValues()** - Returns an array of all selected values.
   * - **setSelectedValues(values: _string|string[]_)** - Sets the selected items by value(s) without triggering events.
   * Works for both single and multiple selection modes.
   * - **selectAll()** - Convenience method for selecting all items.
   * - **deselectAll()** - Convenience method for deselecting all items.
   * - **focus()** - Sets focus to the listbox.
   * - **blur()** - Removes focus from the listbox.
   *
   * ### **Slots:**
   *  - _default_ - Listbox items to show in the listbox.
   * - **label** - The listbox's label. For plain-text labels, you can use the `label` attribute instead.
   * - **description** - The listbox's description. For plain-text descriptions, you can use the `description` attribute instead.
   *
   * ### **CSS Parts:**
   *  - **label** - The element that contains the text field's label.
   * - **description** - The element that contains the text field's description.
   * - **listbox** - The internal listbox container that holds listbox items.
   */
  "quiet-listbox": Partial<QuietListboxProps & BaseProps & BaseEvents>;

  /**
   * Outputs placeholder text in various formats for testing designs with random content.
   * ---
   *
   */
  "quiet-lorem-ipsum": Partial<QuietLoremIpsumProps & BaseProps & BaseEvents>;

  /**
   * Watches child elements and dispatches an event when they mutate.
   * ---
   *
   *
   * ### **Events:**
   *  - **quiet-mutation** - Emitted when a slotted element is mutated. The `event.detail.record` property contains a [`MutationRecord`](https://developer.mozilla.org/en-US/docs/Web/API/MutationRecord) with information about the mutation.
   *
   * ### **Slots:**
   *  - _default_ - The elements to observe. All direct children of the host element are observed, but not nested elements.
   */
  "quiet-mutation-observer": Partial<QuietMutationObserverProps & BaseProps & BaseEvents>;

  /**
   * A navicon, or "hamburger button", is a special button used to control mobile navigation menus.
   * ---
   *
   *
   * ### **Events:**
   *  - **quiet-blur** - Emitted when the navicon loses focus. This event does not bubble.
   * - **quiet-focus** - Emitted when the navicon receives focus. This event does not bubble.
   *
   * ### **CSS Properties:**
   *  - **--dot-size** - The width of each dot. Available when symbol is `vertical-dots` or `horizontal-dots`. _(default: 0.125em)_
   * - **--line-width** - The width of each line. Available when symbol is `hamburger` or `equals`. _(default: 0.0625em)_
   * - **--line-transition-duration** - The duration of the symbol's animation. _(default: 200ms)_
   * - **--line-transition-easing** - The easing to use for the symbol's animation. _(default: cubic-bezier(0.4, 0, 0.2, 1))_
   * - **--dot-size** - The size of the dots in the dots symbol. _(default: 0.125em)_
   *
   * ### **CSS Parts:**
   *  - **line** - The individual lines that make up the navicon symbol.
   * - **line-top** - The top line.
   * - **line-middle** - The middle line (hamburger symbol only).
   * - **line-bottom** - The bottom line.
   */
  "quiet-navicon": Partial<QuietNaviconProps & BaseProps & BaseEvents>;

  /**
   * Generates beautiful mesh gradients with customizable colors and complexity.
   * ---
   *
   *
   * ### **Methods:**
   *  - **regenerate()** - Regenerates the gradient. Useful for creating new random gradients programmatically.
   *
   * ### **Slots:**
   *  - _default_ - Content to display over the gradient.
   *
   * ### **CSS Properties:**
   *  - **--gradient-color** - The base color for the gradient. Accepts any valid CSS color format, but does not accept custom properties, e.g. `var(--my-color)`. _(default: undefined)_
   * - **--brightness** - Adjusts the brightness of the gradient from -100 (darker) to +100 (lighter). _(default: 0)_
   * - **--optimal-text-color** - A readonly custom property that maps to the optimal text color (black or white) based on the gradient's base color. _(default: undefined)_
   *
   * ### **CSS Parts:**
   *  - **gradient** - The gradient container element for styling the gradient layer.
   * - **content** - The content container element for styling the content layer.
   */
  "quiet-mesh-gradient": Partial<QuietMeshGradientProps & BaseProps & BaseEvents>;

  /**
   * Allows users to input and edit numbers.
   * ---
   *
   *
   * ### **Events:**
   *  - **quiet-blur** - Emitted when the number field loses focus. This event does not bubble.
   * - **quiet-change** - Emitted when the user commits changes to the number field's value.
   * - **quiet-focus** - Emitted when the number field receives focus. This event does not bubble.
   * - **quiet-input** - Emitted when the number field receives input.
   *
   * ### **Methods:**
   *  - **focus()** - Sets focus to the number field.
   * - **blur()** - Removes focus from the number field.
   * - **select()** - Selects all text in the number field.
   * - **setSelectionRange(start: _number_, end: _number_, direction: _'forward' | 'backward' | 'none'_)** - Sets the start and end positions of the current text selection in the number field.
   * - **setRangeText(replacement: _string_, start: _number_, end: _number_, selectMode: _'select' | 'start' | 'end' | 'preserve'_)** - Replaces a range of text in the number field with a new string.
   * - **stepDown()** - When a supported `type` is used, this method will decrease the number field's value by `step`. This is a programmatic
   * change, so `input` and `change` events will not be emitted when this is called.
   * - **stepUp()** - When a supported `type` is used, this method will increase the number field's value by `step`. This is a programmatic
   * change, so `input` and `change` events will not be emitted when this is called.
   *
   * ### **Slots:**
   *  - **label** - The number field's label. For plain-text labels, you can use the `label` attribute instead.
   * - **description** - The number field's description. For plain-text descriptions, you can use the `description` attribute instead.
   * - **start** - An icon or similar element to place before the label. Works great with `<quiet-icon>`.
   * - **end** - An icon or similar element to place after the label. Works great with `<quiet-icon>`.
   *
   * ### **CSS Parts:**
   *  - **label** - The element that contains the number field's label.
   * - **description** - The element that contains the number field's description.
   * - **visual-box** - The element that wraps the internal text box.
   * - **text-box** - The internal text box, an `<input>` element.
   * - **stepper** - The up and down stepper buttons.
   * - **stepper-up** - The up stepper button.
   * - **stepper-down** - The down stepper button.
   */
  "quiet-number-field": Partial<QuietNumberFieldProps & BaseProps & BaseEvents>;

  /**
   * Animates a number from a starting value to an ending value.
   * ---
   *
   *
   * ### **Events:**
   *  - **quiet-animation-complete** - Emitted when the counting animation has completed.
   */
  "quiet-number-ticker": Partial<QuietNumberTickerProps & BaseProps & BaseEvents>;

  /**
   * Splits content into numbered pages so users can navigate datasets in manageable chunks.
   * ---
   *
   *
   * ### **Events:**
   *  - **quiet-before-page-change** - Emitted when the page is going to change but before it actually changes. Calling `event.preventDefault()` will prevent the page from changing. Inspect `event.detail` to get the `currentPage` and `requestedPage` properties.
   * - **quiet-page-change** - Emitted after the page has been changed and the UI has been updated.
   *
   * ### **Slots:**
   *  - **previous-icon** - A custom icon to use for the previous button.
   * - **next-icon** - A custom icon to use for the next button.
   * - **jump-backward-icon** - A custom icon to use for the jump backward button.
   * - **jump-forward-icon** - A custom icon to use for jump forward button.
   *
   * ### **CSS Parts:**
   *  - **nav** - The navigation container, a `<nav>` element.
   * - **list** - The list that contains the pagination items, a `<ul>` element.
   * - **item** - A pagination item, an `<li>` element.
   * - **button** - A pagination button, a `<button>` or an `<a>` element.
   * - **button-first** - The button that navigates to the first page.
   * - **button-previous** - The button that navigates to the previous page.
   * - **button-next** - The button that navigates to the next page.
   * - **button-last** - The button that navigates to the last page.
   * - **button-page** - A button that navigates to a specific page.
   * - **button-current** - The button that represents the current page.
   * - **button-jump-backward** - The jump backward button.
   * - **button-jump-forward** - The jump forward button.
   * - **range** - The page range that shows the page when viewed in the compact format, e.g. "1 of 10".
   */
  "quiet-pagination": Partial<QuietPaginationProps & BaseProps & BaseEvents>;

  /**
   * Outputs a formatted number with support for currency, percentages, and units.
   * ---
   *
   */
  "quiet-number": Partial<QuietNumberProps & BaseProps & BaseEvents>;

  /**
   * Allows users to enter fixed-length passcodes, verification tokens, one-time codes, and similar data in a
   * user-friendly way.
   * ---
   *
   *
   * ### **Events:**
   *  - **quiet-blur** - Emitted when the passcode loses focus. This event does not bubble.
   * - **quiet-change** - Emitted when the user commits changes to the passcode's value.
   * - **quiet-focus** - Emitted when the passcode receives focus. This event does not bubble.
   * - **quiet-input** - Emitted when the passcode receives input.
   * - **quiet-input-complete** - Emitted when the final character in the passcode is entered. This is useful as a hook to verify the passcode as soon as it's typed in without requiring the user to explicitly submit it.
   *
   * ### **Methods:**
   *  - **focus()** - Sets focus to the passcode.
   * - **blur()** - Removes focus from the passcode.
   *
   * ### **Slots:**
   *  - **label** - The passcode's label. For plain-text labels, you can use the `label` attribute instead.
   * - **description** - The passcode's description. For plain-text descriptions, you can use the `description` attribute instead.
   *
   * ### **CSS Parts:**
   *  - **label** - The element that contains the passcode's label.
   * - **description** - The element that contains the passcode's description.
   * - **visual-box** - The element that wraps the characters, delimiters, and the hidden input.
   * - **character-box** - Each individual character box.
   * - **delimiter** - Each individual delimiter.
   */
  "quiet-passcode": Partial<QuietPasscodeProps & BaseProps & BaseEvents>;

  /**
   * Provides additional information or functionality without interrupting the flow of content.
   * ---
   *
   *
   * ### **Events:**
   *  - **quiet-before-open** - Emitted when the popover is instructed to open but before it is shown.
   * - **quiet-open** - Emitted when the popover has opened and the animation has completed.
   * - **quiet-before-close** - Emitted when the popover is dismissed but before it is hidden.
   * - **quiet-close** - Emitted when the popover has closed. and the animation has completed.
   *
   * ### **Slots:**
   *  - _default_ - The popover's content. Do not include interactive elements such as button, links, etc. as they won't be accessible to users inside the popover.
   *
   * ### **CSS Properties:**
   *  - **--arrow-size** - The size of the arrow. To hide the arrow, use the `without-arrow` attribute. _(default: 0.3125rem)_
   * - **--max-width** - The maximum width the popover be before wrapping. _(default: 25rem)_
   * - **--show-duration** - The duration of the show/hide animation. _(default: 100ms)_
   *
   * ### **CSS Parts:**
   *  - **dialog** - The element that powers the popover, a `<dialog>` element.
   * - **content** - The element that wraps the popover's content.
   * - **arrow** - The popover's arrow. To change the arrow's size, use `--arrow-size` instead.
   */
  "quiet-popover": Partial<QuietPopoverProps & BaseProps & BaseEvents>;

  /**
   * Visually represents the progress of a request or task.
   * ---
   *
   *
   * ### **Slots:**
   *  - _default_ - Text to render inside the progress bar.
   *
   * ### **CSS Properties:**
   *  - **--track-color** - The color of the progress bar's track. _(default: var(--quiet-neutral-fill-softer))_
   * - **--track-size** - The height or thickness of the track, depending on the type of progress bar. _(default: 1.5em | 1em)_
   * - **--indicator-color** - The color of the progress bar's value indicator. _(default: var(--quiet-primary-fill-mid))_
   * - **--diameter** - For progress rings, the diameter of the ring. _(default: 10em)_
   *
   * ### **CSS Parts:**
   *  - **track** - The progress bar's track, a `<div>` for progress bars and a `<circle>` for progress rings.
   * - **indicator** - The progress bar's current value indicator, a `<div>` for progress bars and an SVG `<circle>` for progress rings.
   * - **content** - The container that holds any content that's been slotted in.
   */
  "quiet-progress": Partial<QuietProgressProps & BaseProps & BaseEvents>;

  /**
   * Allows the user to select one option from a group of choices.
   * ---
   *
   *
   * ### **Events:**
   *  - **quiet-change** - Emitted when the user commits changes to the radio's value.
   * - **quiet-input** - Emitted when the radio receives input.
   *
   * ### **Methods:**
   *  - **focus(options: _FocusOptions_)** - Sets focus to the selected item or the first item if none are selected.
   *
   * ### **Slots:**
   *  - _default_ - The radio items to place in the group.
   * - **label** - The radio's label. For plain-text labels, you can use the `label` attribute instead.
   * - **description** - The radios's description. For plain-text descriptions, you can use the `description` attribute instead.
   *
   * ### **CSS Parts:**
   *  - **label** - The element that contains the radio's label.
   * - **description** - The element that contains the radio's description.
   * - **group** - The element that wraps the grouped radios.
   */
  "quiet-radio": Partial<QuietRadioProps & BaseProps & BaseEvents>;

  /**
   * Represents individual choices within a radio.
   * ---
   *
   *
   * ### **Events:**
   *  - **quiet-blur** - Emitted when the radio item loses focus. This event does not bubble.
   * - **quiet-focus** - Emitted when the radio item receives focus. This event does not bubble.
   *
   * ### **Slots:**
   *  - _default_ - The radio item's label. For plain-text labels, you can use the `label` attribute instead.
   *
   * ### **CSS Parts:**
   *  - **label** - The `<label>` that wraps the entire control.
   * - **visual-box** - The element that wraps the internal radio.
   * - **radio-icon** - The radio icon, a `<quiet-icon>` element.
   * - **radio-icon__svg** - The radio icon's `svg` part.
   */
  "quiet-radio-item": Partial<QuietRadioItemProps & BaseProps & BaseEvents>;

  /**
   * Randomly displays one or more elements from a list.
   * ---
   *
   *
   * ### **Methods:**
   *  - **randomize()** - Rotates the visible item(s) based on the selected mode.
   *
   * ### **Slots:**
   *  - _default_ - A pool of items that will be randomly displayed. Each item _must_ be a direct descendant of the host element.
   */
  "quiet-random-content": Partial<QuietRandomContentProps & BaseProps & BaseEvents>;

  /**
   * Generates a QR Code with embedded data.
   * ---
   *
   */
  "quiet-qr": Partial<QuietQrProps & BaseProps & BaseEvents>;

  /**
   * Allows users to provide feedback based on their satisfaction with a product or service.
   * ---
   *
   *
   * ### **Events:**
   *  - **quiet-blur** - Emitted when the rating loses focus. This event does not bubble.
   * - **quiet-change** - Emitted when the user commits changes to the rating's value.
   * - **quiet-focus** - Emitted when the rating receives focus. This event does not bubble.
   * - **quiet-input** - Emitted when the rating receives input.
   *
   * ### **Methods:**
   *  - **focus()** - Sets focus to the rating.
   * - **blur()** - Removes focus from the rating.
   * - **stepDown()** - Decreases the rating's value by `step`. This is a programmatic change, so `input` and `change` events will not be
   * emitted when this is called.
   * - **stepUp()** - Increases the rating's value by `step`. This is a programmatic change, so `input` and `change` events will not be
   * emitted when this is called.
   *
   * ### **Slots:**
   *  - **label** - The rating's label. For plain-text labels, you can use the `label` attribute instead.
   * - **description** - The rating's description. For plain-text descriptions, you can use the `description` attribute instead.
   *
   * ### **CSS Parts:**
   *  - **label** - The element that contains the ratings's label.
   * - **description** - The element that contains the rating's description.
   * - **rating** - The element that wraps all of the rating's symbols.
   * - **symbol** - The container that holds the selected and unselected version of each symbol.
   */
  "quiet-rating": Partial<QuietRatingProps & BaseProps & BaseEvents>;

  /**
   * Outputs a relative time in a human-readable format.
   * ---
   *
   */
  "quiet-relative-time": Partial<QuietRelativeTimeProps & BaseProps & BaseEvents>;

  /**
   * Watches child elements and dispatches an event when they resize.
   * ---
   *
   *
   * ### **Events:**
   *  - **quiet-resize** - Emitted when a slotted element is resized. Like `ResizeObserver`, this event is also dispatched when each element is first observed. The `event.detail.entry` property contains a [`ResizeObserverEntry`](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserverEntry) with information about the element's dimensions.
   *
   * ### **Slots:**
   *  - _default_ - The elements to observe. All direct children of the host element are observed, but not nested elements.
   */
  "quiet-resize-observer": Partial<QuietResizeObserverProps & BaseProps & BaseEvents>;

  /**
   * Queries a collection of items based on their content and keywords.
   * ---
   *
   *
   * ### **Methods:**
   *  - **setQuery(query)** - Sets the search query and updates the results. To clear the search, set this to an empty string.
   *
   * ### **Slots:**
   *  - _default_ - One or more elements to be searched. Each element must be a direct descendent of the host, i.e. do not wrap items in other containers. If desired, you can apply flex and grid styles to the `items` part to control how items appear in the list. By default, items will be displayed in a flex column.
   * - **controller** - A `<quiet-text-field>` or `<input>` element that will control the search list.
   * - **initial** - Optional content to display when no search query has been entered.
   * - **empty** - Optional content to display when the search yields no results.
   *
   * ### **CSS Parts:**
   *  - **items** - The container that wraps the slotted items. Displays as a flex column by default.
   */
  "quiet-search-list": Partial<QuietSearchListProps & BaseProps & BaseEvents>;

  /**
   * Adds an accessible container with visual affordances to help users identify and navigate scrolling content.
   * ---
   *
   *
   * ### **Slots:**
   *  - _default_ - The content to show inside the scroller.
   *
   * ### **CSS Properties:**
   *  - **--shadow-color** - The base color of the shadow. _(default: var(--quiet-neutral-fill-mid))_
   * - **--shadow-size** - The width of the shadow. _(default: 2rem)_
   * - **--thumb-color** - The color of the scrollbar's thumb (supportive browsers only). _(default: var(--quiet-neutral-fill-mid))_
   * - **--track-color** - The color of the scrollbar's track (supportive browsers only). _(default: transparent)_
   *
   * ### **CSS Parts:**
   *  - **content** - The container that wraps the slotted content.
   * - **start-shadow** - The starting shadow.
   * - **end-shadow** - The ending shadow.
   */
  "quiet-scroller": Partial<QuietScrollerProps & BaseProps & BaseEvents>;

  /**
   * Allows users to share links, files and text via their operating system's share interface.
   * ---
   *
   *
   * ### **Slots:**
   *  - _default_ - A custom button to use instead of the default.
   *
   * ### **CSS Parts:**
   *  - **share-button** - The default share button, a `<quiet-button>` element.
   * - **share-button__button** - The default share button's `button` part.
   * - **share-icon** - The default share icon, a `<quiet-icon>` element.
   * - **share-icon__svg** - The share icon's `svg` part.
   * - **feedback** - The feedback that shows when copying (e.g. when the Web Share API is unsupported).
   */
  "quiet-share": Partial<QuietShareProps & BaseProps & BaseEvents>;

  /**
   * Gives users a draggable thumb that must be moved to the end of its track to trigger an action.
   * ---
   *
   *
   * ### **Events:**
   *  - **quiet-before-activate** - Emitted when the control will activate. Calling `event.preventDefault()` will prevent the activation from occurring.
   * - **quiet-activate** - Emitted immediately after the control is activated.
   * - **quiet-before-deactivate** - Emitted when the control will deactivate. Calling `event.preventDefault()` will prevent the deactivation from occurring.
   * - **quiet-deactivate** - Emitted immediately after the control is deactivated.
   * - **quiet-progress** - Emitted as the slider progresses. Use `event.details.percent` to see how far along it is.
   *
   * ### **Slots:**
   *  - **label** - The slide activator's label. For plain-text labels, you can use the `label` attribute instead.
   * - **activated-label** - The label to show when activated. For plain-text labels, you can use the `activated-label` attribute instead.
   * - **thumb** - The thumb element that users drag. Defaults to a double chevron icon if not provided.
   *
   * ### **CSS Properties:**
   *  - **--border-radius** - The control's border radius. We use a CSS custom property so we can properly calculate the inset border radius for the thumb. _(default: var(--quiet-border-radius-lg))_
   * - **--thumb-width** - The thumb's width. _(default: 4em)_
   * - **--thumb-inset** - The thumb's inset from the host element. _(default: 0.125em)_
   * - **--shimmer-color** - The color to use as a base for the shimmer animation. _(default: undefined)_
   * - **--thumb-position** - A read-only property that moves from 0 to 1 as the user slides the thumb to activate the control. Useful as a hook to transition background styles based on the thumb's position. _(default: (read-only))_
   *
   * ### **CSS Parts:**
   *  - **thumb** - The slide activator's thumb.
   * - **label** - The slide activator's label.
   */
  "quiet-slide-activator": Partial<QuietSlideActivatorProps & BaseProps & BaseEvents>;

  /**
   * Allows users to choose an option from a predefined list of options.
   * ---
   *
   *
   * ### **Events:**
   *  - **quiet-blur** - Emitted when the select loses focus. This event does not bubble.
   * - **quiet-change** - Emitted when the user commits changes to the select's value.
   * - **quiet-focus** - Emitted when the select receives focus. This event does not bubble.
   * - **quiet-input** - Emitted when the select receives input.
   *
   * ### **Methods:**
   *  - **focus()** - Sets focus to the select.
   * - **blur()** - Removes focus from the select.
   * - **showPicker()** - Shows the picker in supportive browsers.
   *
   * ### **Slots:**
   *  - **label** - The select's label. For plain-text labels, you can use the `label` attribute instead.
   * - **description** - The select's description. For plain-text descriptions, you can use the `description` attribute instead.
   * - **start** - An icon or similar element to place before the label. Works great with `<quiet-icon>`.
   * - **end** - An icon or similar element to place after the label. Works great with `<quiet-icon>`.
   *
   * ### **CSS Parts:**
   *  - **label** - The element that contains the select's label.
   * - **description** - The element that contains the select's description.
   * - **visual-box** - The element that wraps the internal text box.
   * - **text-box** - The internal text box, a `<select>` element.
   * - **chevron** - The chevron icon, a `<quiet-icon>` element.
   * - **chevron__svg** - The chevron icon's `<svg>` part.
   */
  "quiet-select": Partial<QuietSelectProps & BaseProps & BaseEvents>;

  /**
   * Allows users to select numeric values within a given range by moving a thumb along a track.
   * ---
   *
   *
   * ### **Events:**
   *  - **quiet-blur** - Emitted when the slider loses focus. This event does not bubble.
   * - **quiet-change** - Emitted when the user commits changes to the slider's value.
   * - **quiet-focus** - Emitted when the slider receives focus. This event does not bubble.
   * - **quiet-input** - Emitted when the slider receives input.
   *
   * ### **Methods:**
   *  - **focus()** - Sets focus to the slider.
   * - **blur()** - Removes focus from the slider.
   * - **stepDown()** - Decreases the slider's value by `step`. This is a programmatic change, so `input` and `change` events will not be
   * emitted when this is called.
   * - **stepUp()** - Increases the slider's value by `step`. This is a programmatic change, so `input` and `change` events will not be
   * emitted when this is called.
   *
   * ### **Slots:**
   *  - **label** - The slider's label. For plain-text labels, you can use the `label` attribute instead.
   * - **description** - The slider's description. For plain-text descriptions, you can use the `description` attribute instead.
   * - **reference** - One or more reference labels to show visually below the slider.
   *
   * ### **CSS Properties:**
   *  - **--track-size** - The height or width of the slider's track. _(default: 0.75em)_
   * - **--marker-width** - The width of each individual marker. _(default: 0.1875em)_
   * - **--marker-height** - The height of each individual marker. _(default: 0.1875em)_
   * - **--thumb-width** - The width of the thumb. _(default: 1.25em)_
   * - **--thumb-height** - The height of the thumb. _(default: 1.25em)_
   *
   * ### **CSS Parts:**
   *  - **label** - The element that contains the sliders's label.
   * - **description** - The element that contains the slider's description.
   * - **slider** - The focusable element with `role="slider"`. Contains the track and reference slot.
   * - **track** - The slider's track.
   * - **indicator** - The colored indicator that shows from the start of the slider to the current value.
   * - **markers** - The container that holds all the markers when `with-markers` is used.
   * - **marker** - The individual markers that are shown when `with-markers` is used.
   * - **references** - The container that holds references that get slotted in.
   * - **thumb** - The slider's thumb.
   * - **thumb-min** - The min value thumb in a range slider.
   * - **thumb-max** - The max value thumb in a range slider.
   * - **tooltip** - The tooltip, a `<quiet-tooltip>` element.
   * - **tooltip__tooltip** - The tooltip's `tooltip` part.
   * - **tooltip__content** - The tooltip's `content` part.
   * - **tooltip__arrow** - The tooltip's `arrow` part.
   */
  "quiet-slider": Partial<QuietSliderProps & BaseProps & BaseEvents>;

  /**
   * Shows at-a-glance trends in a small, inline chart that fits within text or tables.
   * ---
   *
   *
   * ### **CSS Properties:**
   *  - **--fill-color** - The start color of the gradient fill _(default: undefined)_
   * - **--gradient-stop-color** - The end color of the gradient fill _(default: undefined)_
   */
  "quiet-sparkline": Partial<QuietSparklineProps & BaseProps & BaseEvents>;

  /**
   * Tells the user that content is loading or a request is processing in the background.
   * ---
   *
   *
   * ### **Slots:**
   *  - _default_ - A custom spinner to show in lieu of the default one. Works best with `<img>` and `<svg>` elements. Custom spinners will not be animated, allowing you to use animated GIF, APNG, and SVG animations without conflict.
   *
   * ### **CSS Properties:**
   *  - **--indicator-color** - The color of the spinner's indicator. _(default: var(--quiet-primary-fill-mid))_
   * - **--track-color** - The color of the spinner's track. _(default: color-mix(in oklab, var(--quiet-neutral-fill-mid), transparent 75%))_
   * - **--speed** - The speed for one complete rotation. _(default: 0.75s)_
   *
   * ### **CSS Parts:**
   *  - **track** - the spinner's track, a `<circle>` SVG element.
   * - **indicator** - the spinner's indicator, a `<circle>` SVG element.
   */
  "quiet-spinner": Partial<QuietSpinnerProps & BaseProps & BaseEvents>;

  /**
   * Conceals sensitive content and gives the user the option of showing it or not, preventing unintentional
   * disclosure.
   * ---
   *
   *
   * ### **Slots:**
   *  - _default_ - The spoiler's content.
   * - **label** - A custom label for the reveal text. For plain-text labels, you can use the `label` attribute instead.
   *
   * ### **CSS Properties:**
   *  - **--blur** - The amount of blur when using the blur effect. _(default: 8px)_
   *
   * ### **CSS Parts:**
   *  - **content** - The container that holds the spoiler's content.
   * - **cover** - The element that covers the spoiler, a `<button>` element.
   * - **label** - The container that wraps the label, a `<span>` element.
   * - **hide-button** - The button that hides the spoiler, a `<button>` element containing an icon.
   * - **hide-icon** - The hide icon, a `<quiet-icon>` element.
   * - **hide-icon__svg** - The hide icon's `svg` part.
   */
  "quiet-spoiler": Partial<QuietSpoilerProps & BaseProps & BaseEvents>;

  /**
   * A draggable splitter that separates two panels, allowing users to resize them.
   * ---
   *
   *
   * ### **Events:**
   *  - **quiet-resize** - Dispatched when the splitter's handle is moved.
   *
   * ### **Slots:**
   *  - **start** - The content for the primary (start) panel.
   * - **end** - The content for the secondary (end) panel.
   * - **handle** - The draggable handle that separates the panels.
   *
   * ### **CSS Properties:**
   *  - **--divider-min-position** - Minimum position of the divider (as a percentage or pixel value). _(default: 0%)_
   * - **--divider-max-position** - Maximum position of the divider (as a percentage or pixel value). _(default: 100%)_
   * - **--divider-draggable-area** - The size of the divider's draggable area (can be larger than the visible area). _(default: 1rem)_
   * - **--divider-width** - The width of the visual divider. _(default: 0.125rem)_
   *
   * ### **CSS Parts:**
   *  - **start** - The content to show in the first (start) panel.
   * - **end** - The content to show in the second (end) panel.
   * - **divider** - The draggable divider that separates the panels.
   * - **handle** - The visual handle within the divider (only present when not using the `handle` slot).
   */
  "quiet-splitter": Partial<QuietSplitterProps & BaseProps & BaseEvents>;

  /**
   * Renders templates with simple expressions, logic, and custom data.
   * ---
   *
   *
   * ### **Methods:**
   *  - **renderTemplate()** - Processes the associated template and renders it to the DOM.
   */
  "quiet-stamp": Partial<QuietStampProps & BaseProps & BaseEvents>;

  /**
   * Allows the user to toggle between two mutually exclusive states, such as on and off.
   * ---
   *
   *
   * ### **Events:**
   *  - **quiet-blur** - Emitted when the switch loses focus. This event does not bubble.
   * - **quiet-change** - Emitted when the user commits changes to the switch's value.
   * - **quiet-focus** - Emitted when the switch receives focus. This event does not bubble.
   * - **quiet-input** - Emitted when the switch receives input.
   *
   * ### **Methods:**
   *  - **focus()** - Sets focus to the switch.
   * - **blur()** - Removes focus from the switch.
   *
   * ### **Slots:**
   *  - _default_ - The switch's label. For plain-text labels, you can use the `label` attribute instead.
   * - **description** - The switch's description. For plain-text descriptions, you can use the `description` attribute instead.
   * - **off-label** - The label to show when the switch is off.
   * - **on-label** - The label to show when the switch is on.
   *
   * ### **CSS Parts:**
   *  - **label** - The `<label>` that wraps the entire control.
   * - **description** - The element that contains the switch's description.
   * - **visual-box** - The element that wraps the internal switch.
   * - **switch** - The internal switch, an `<input type="checkbox" role="switch">` element.
   * - **thumb** - The switch's thumb.
   * - **on-label** - The container wrapping the `on-label`.
   * - **off-label** - The container wrapping the `off-label`.
   */
  "quiet-switch": Partial<QuietSwitchProps & BaseProps & BaseEvents>;

  /**
   * Describes and selects a tab panel within a tab list.
   * ---
   *
   *
   * ### **Slots:**
   *  - _default_ - The tab's content. This is usually a short label, but sometimes includes an icon.
   */
  "quiet-tab": Partial<QuietTabProps & BaseProps & BaseEvents>;

  /**
   * Allows users to switch between different sections of content without leaving the page, providing a clean and
   * organized interface.
   * ---
   *
   *
   * ### **Events:**
   *  - **quiet-tab-shown** - Emitted after a tab is shown. The event will include a `detail` object with `tab` and `panel`properties that reference the respective tab and panel elements.
   * - **quiet-tab-hidden** - Emitted after a tab is hidden. The event will include a `detail` object with `tab` and `panel` properties that reference the respective tab and panel elements.
   *
   * ### **Slots:**
   *  - _default_ - One or more `<quiet-tab-panel>` elements, each with a `name` attribute unique to the tab list.
   * - **tab** - One or more `<quiet-tab>` elements, each with a `panel` attribute linked to the `name` of a tab panel. Note that tabs will automatically apply this slot to themselves, so you can safely omit `slot="tab"` in your markup. Also useful for adding close buttons to tabs.
   *
   * ### **CSS Parts:**
   *  - **tabs** - The container that holds all of the tabs, a `<quiet-scroller>` element.
   * - **tabs-content** - The scroller's `content` part.
   * - **panels** - The container that holds all of the tab panels.
   */
  "quiet-tab-list": Partial<QuietTabListProps & BaseProps & BaseEvents>;

  /**
   * Holds the content that gets displayed when a tab is selected.
   * ---
   *
   *
   * ### **Slots:**
   *  - _default_ - Content to show inside the tab panel.
   */
  "quiet-tab-panel": Partial<QuietTabPanelProps & BaseProps & BaseEvents>;

  /**
   * Allows users to edit multi-line, plain text content.
   * ---
   *
   *
   * ### **Events:**
   *  - **quiet-blur** - Emitted when the text area loses focus. This event does not bubble.
   * - **quiet-change** - Emitted when the user commits changes to the text area's value.
   * - **quiet-focus** - Emitted when the text area receives focus. This event does not bubble.
   * - **quiet-input** - Emitted when the text area receives input.
   *
   * ### **Methods:**
   *  - **focus()** - Sets focus to the text area.
   * - **blur()** - Removes focus from the text area.
   * - **select()** - Selects all text in the text area.
   * - **setSelectionRange(start: _number_, end: _number_, direction: _'forward' | 'backward' | 'none'_)** - Sets the start and end positions of the current text selection in the text area.
   * - **setRangeText(replacement: _string_, start: _number_, end: _number_, selectMode: _'select' | 'start' | 'end' | 'preserve'_)** - Replaces a range of text in the text area with a new string.
   *
   * ### **Slots:**
   *  - **label** - The text area's label. For plain-text labels, you can use the `label` attribute instead.
   * - **description** - The text area's description. For plain-text descriptions, you can use the `description` attribute instead.
   *
   * ### **CSS Parts:**
   *  - **label** - The element that contains the text area's label.
   * - **description** - The element that contains the text area's description.
   * - **visual-box** - The element that wraps the internal text box.
   * - **text-box** - The internal text box, a `<textarea>` element.
   */
  "quiet-text-area": Partial<QuietTextAreaProps & BaseProps & BaseEvents>;

  /**
   * Applies text as a mask over an image, creating visually stylized characters.
   * ---
   *
   *
   * ### **Slots:**
   *  - _default_ - The text to be masked.
   *
   * ### **CSS Properties:**
   *  - **--brightness** - Adjusts the brightness of the mask image (0-200%, where 100% is normal) _(default: undefined)_
   * - **--contrast** - Adjusts the contrast of the mask image (0-200%, where 100% is normal) _(default: undefined)_
   * - **--grayscale** - Converts the mask to grayscale (0-100%, where 0% is normal and 100% is fully grayscale) _(default: undefined)_
   * - **--hue-rotate** - Rotates the hue of the mask (0-360deg) _(default: undefined)_
   */
  "quiet-text-mask": Partial<QuietTextMaskProps & BaseProps & BaseEvents>;

  /**
   * Allows users to input and edit text.
   * ---
   *
   *
   * ### **Events:**
   *  - **quiet-blur** - Emitted when the text field loses focus. This event does not bubble.
   * - **quiet-change** - Emitted when the user commits changes to the text field's value.
   * - **quiet-focus** - Emitted when the text field receives focus. This event does not bubble.
   * - **quiet-input** - Emitted when the text field receives input.
   *
   * ### **Methods:**
   *  - **focus()** - Sets focus to the text field.
   * - **blur()** - Removes focus from the text field.
   * - **select()** - Selects all text in the text field.
   * - **setSelectionRange(start: _number_, end: _number_, direction: _'forward' | 'backward' | 'none'_)** - Sets the start and end positions of the current text selection in the text field.
   * - **setRangeText(replacement: _string_, start: _number_, end: _number_, selectMode: _'select' | 'start' | 'end' | 'preserve'_)** - Replaces a range of text in the text field with a new string.
   * - **showPicker()** - For types that support a picker, such as color and date selectors, this will cause the picker to show.
   * - **stepDown()** - When a supported `type` is used, this method will decrease the text field's value by `step`. This is a programmatic
   * change, so `input` and `change` events will not be emitted when this is called.
   * - **stepUp()** - When a supported `type` is used, this method will increase the text field's value by `step`. This is a programmatic
   * change, so `input` and `change` events will not be emitted when this is called.
   *
   * ### **Slots:**
   *  - **label** - The text field's label. For plain-text labels, you can use the `label` attribute instead.
   * - **description** - The text field's description. For plain-text descriptions, you can use the `description` attribute instead.
   * - **start** - An icon or similar element to place before the label. Works great with `<quiet-icon>`.
   * - **end** - An icon or similar element to place after the label. Works great with `<quiet-icon>`.
   *
   * ### **CSS Parts:**
   *  - **label** - The element that contains the text field's label.
   * - **description** - The element that contains the text field's description.
   * - **visual-box** - The element that wraps the internal text box.
   * - **text-box** - The internal text box, an `<input>` element.
   * - **clear-button** - The clear button, a `<button>` element.
   * - **password-toggle-button** - The password toggle button, a `<button>` element.
   */
  "quiet-text-field": Partial<QuietTextFieldProps & BaseProps & BaseEvents>;

  /**
   * Shows certain content based on the current date and time.
   * ---
   *
   *
   * ### **Slots:**
   *  - _default_ - The default slot.
   * - **before** - Optional content that shows before the specified date/time.
   * - **after** - Optional content that shows after the specified date/time.
   */
  "quiet-timed-content": Partial<QuietTimedContentProps & BaseProps & BaseEvents>;

  /**
   * A mechanism for showing temporary, non-intrusive notifications that appear above the page's content.
   * ---
   *
   *
   * ### **Methods:**
   *  - **create(content: _string_, options: _Partial<CreateOptions>_)** - Creates a toast notification and adds it to the stack. Returns a reference to the created toast item.
   * - **createFromTemplate(template: _HTMLTemplateElement_)** - Creates a toast notification using an existing `<quiet-toast-item>` element. Useful if you want to create your own
   * toast items declaratively. Returns a reference to the cloned toast item.
   * - **empty()** - Removes all elements from the toast stack and turns when the remove transition finishes.
   * - **escapeHtml(html: _string_)** - Escapes HTML special characters in the given string.
   */
  "quiet-toast": Partial<QuietToastProps & BaseProps & BaseEvents>;

  /**
   * Notifications displayed by the toast component.
   * ---
   *
   *
   * ### **Events:**
   *  - **quiet-before-close** - Emitted when the toast item is dismissed.
   * - **quiet-close** - Emitted after the toast has been dismissed and the hide animation has completed.
   *
   * ### **Slots:**
   *  - _default_ - Content to show in the toast item.
   * - **icon** - Content to show as a visual. Usually an icon, image, avatar, etc.
   *
   * ### **CSS Properties:**
   *  - **--accent-line-width** - The width of the notification's accent line. _(default: 0.33em)_
   * - **--progress** - A readonly value that goes from 100% to 0%, representing the progress remaining until the notification closes. Useful for creating custom content with visual indicators of the notification's progress. _(default: undefined)_
   *
   * ### **CSS Parts:**
   *  - **icon** - undefined
   * - **content** - undefined
   * - **close-button** - The close button, a `<button>` element.
   * - **progress** - The progress ring, a `<quiet-progress>` element.
   * - **progress__track** - The progress ring's exported `track` part.
   * - **progress__indicator** - The progress ring's exported `indicator` part.
   * - **progress__content** - The progress ring's exported `content` part.
   * - **close-icon** - The close icon, a `<quiet-icon>` element.
   * - **close-icon__svg** - The close icons exported `svg` part.
   */
  "quiet-toast-item": Partial<QuietToastItemProps & BaseProps & BaseEvents>;

  /**
   * Similar to checkboxes, except with icons to represent the checked and unchecked states.
   * ---
   *
   *
   * ### **Events:**
   *  - **quiet-blur** - Emitted when the toggle icon loses focus. This event does not bubble.
   * - **quiet-change** - Emitted when the user commits changes to the toggle's value.
   * - **quiet-focus** - Emitted when the checkbox receives focus. This event does not bubble.
   * - **quiet-input** - Emitted when the checkbox receives input.
   *
   * ### **Slots:**
   *  - **checked** - The icon to show when checked. Works best with a `<quiet-icon>` element.
   * - **unchecked** - The default icon to show when unchecked. Works best with a `<quiet-icon>` element.
   *
   * ### **CSS Properties:**
   *  - **--animation-speed** - The animation speed to use when effects are selected. _(default: 300ms)_
   * - **--checked-color** - The color to use for checked toggle icons. _(default: #f59e0b)_
   * - **--unchecked-color** - The color to use for unchecked toggle icons. _(default: var(--quiet-neutral-fill-mid))_
   *
   * ### **CSS Parts:**
   *  - **button** - The internal button that contains the toggle icons, a `<button>` element.
   */
  "quiet-toggle-icon": Partial<QuietToggleIconProps & BaseProps & BaseEvents>;

  /**
   * Similar to checkboxes, except with tags to represent the checked and unchecked states.
   * ---
   *
   *
   * ### **Events:**
   *  - **quiet-blur** - Emitted when the toggle tag loses focus. This event does not bubble.
   * - **quiet-change** - Emitted when the user commits changes to the toggle tag's value.
   * - **quiet-focus** - Emitted when the toggle tag receives focus. This event does not bubble.
   * - **quiet-input** - Emitted when the toggle tag receives input.
   *
   * ### **Methods:**
   *  - **focus()** - Sets focus to the toggle tag.
   * - **blur()** - Removes focus from the toggle tag.
   *
   * ### **Slots:**
   *  - _default_ - The toggle tag's label. For plain-text labels, you can use the `label` attribute instead.
   *
   * ### **CSS Parts:**
   *  - **label** - The `<label>` that wraps the entire control.
   */
  "quiet-toggle-tag": Partial<QuietToggleTagProps & BaseProps & BaseEvents>;

  /**
   * Turns a collection of buttons and button groups into an accessible toolbar.
   * ---
   *
   *
   * ### **Slots:**
   *  - _default_ - A mixture of buttons and/or button groups.
   */
  "quiet-toolbar": Partial<QuietToolbarProps & BaseProps & BaseEvents>;

  /**
   * Provides additional information when the user hovers or focuses on an element.
   * ---
   *
   *
   * ### **Events:**
   *  - **quiet-before-open** - Emitted when the tooltip is instructed to open but before it is shown.
   * - **quiet-open** - Emitted when the tooltip has opened and the animation has completed.
   * - **quiet-before-close** - Emitted when the tooltip is dismissed but before it is hidden.
   * - **quiet-close** - Emitted when the tooltip has closed. and the animation has completed.
   *
   * ### **Slots:**
   *  - _default_ - The tooltip's content. Do not include interactive elements such as button, links, etc. as they won't be accessible to users inside the tooltip.
   *
   * ### **CSS Properties:**
   *  - **--arrow-size** - The size of the arrow. To hide the arrow, use the `without-arrow` attribute. _(default: 0.3125rem)_
   * - **--max-width** - The maximum width the tooltip can be before wrapping. _(default: 20rem)_
   * - **--show-duration** - The duration of the show/hide animation. _(default: 100ms)_
   *
   * ### **CSS Parts:**
   *  - **tooltip** - The element that powers the tooltip.
   * - **content** - The element that wraps the tooltip's content.
   * - **arrow** - The tooltip's arrow. To change the arrow's size, use `--arrow-size` instead.
   */
  "quiet-tooltip": Partial<QuietTooltipProps & BaseProps & BaseEvents>;

  /**
   * Simulates a natural typing effect with customizable speed, delay, and looping options.
   * ---
   *
   *
   * ### **Events:**
   *  - **quiet-animation-complete** - Emitted when the typing animation has completed.
   *
   * ### **Methods:**
   *  - **restart()** - Restarts the animation from the beginning.
   *
   * ### **CSS Properties:**
   *  - **--cursor-color** - The color of the cursor during animation when `with-cursor` is enabled. _(default: currentColor)_
   * - **--cursor-width** - The width of the cursor during animation when `with-cursor` is enabled. _(default: 1.5px)_
   *
   * ### **CSS Parts:**
   *  - **cursor** - The cursor, a `<span>` element with a styled border.
   */
  "quiet-typewriter": Partial<QuietTypewriterProps & BaseProps & BaseEvents>;

  /**
   * Covers elements visually and disables interaction during important states such as submitting or loading.
   * ---
   *
   *
   * ### **Events:**
   *  - **quiet-before-activate** - Emitted when the veil will activate. Calling `event.preventDefault()` will prevent the activation from occurring.
   * - **quiet-activate** - Emitted immediately after the veil is activated.
   * - **quiet-before-deactivate** - Emitted when the veil will deactivate. Calling `event.preventDefault()` will prevent the deactivation from occurring.
   * - **quiet-deactivate** - Emitted immediately after the veil is deactivated.
   *
   * ### **Slots:**
   *  - _default_ - The content to be covered when the veil state is active.
   * - **front** - Content to show in front of the veil, such as a custom loading indicator or message.
   *
   * ### **CSS Properties:**
   *  - **--blur** - The amount of blur to apply to the veil when active. _(default: 3px)_
   * - **--show-duration** - The duration of the show/hide animation. _(default: 300)_
   */
  "quiet-veil": Partial<QuietVeilProps & BaseProps & BaseEvents>;

  /**
   * Improves the user's experience by adding subtle animations as items are added, removed, and reordered in the
   * group.
   * ---
   *
   *
   * ### **Events:**
   *  - **quiet-content-changed** - Emitted when content changes and before the transition animation begins.
   * - **quiet-transition-end** - Emitted when transition animations end.
   *
   * ### **Methods:**
   *  - **transitionComplete()** - Returns a promise that resolves when the current transition ends. If no transition is running, it resolves
   * immediately  This is a great way to ensure transitions have stopped before doing something else, such as adding or
   * removing new elements to the transition group.
   * - **updateElementPositions()** - Updates the cached coordinates of all child elements in the transition group. In most cases, you shouldn't have to
   * call this method. However, if you're resizing or animating elements imperatively, you may need to call this
   * immediately before appending or removing elements to ensure a smooth transition.
   *
   * ### **Slots:**
   *  - _default_ - One or more elements to transition when adding, removing, and reordering the DOM.
   *
   * ### **CSS Properties:**
   *  - **--duration** - The duration of each individual step (not the total transition time). _(default: 0.25s)_
   */
  "quiet-transition-group": Partial<QuietTransitionGroupProps & BaseProps & BaseEvents>;

  /**
   * Renders iframe content with zoom and interaction controls.
   * ---
   *
   *
   * ### **Events:**
   *  - **load** - Emitted when the internal iframe when it finishes loading.
   * - **error** - Emitted from the internal iframe when it fails to load.
   *
   * ### **Methods:**
   *  - **zoomIn()** - Zooms in to the next available zoom level.
   * - **zoomOut()** - Zooms out to the previous available zoom level.
   *
   * ### **Slots:**
   *  - **zoom-in-icon** - The slot that contains the zoom in icon.
   * - **zoom-out-icon** - The slot that contains the zoom out icon.
   *
   * ### **CSS Properties:**
   *  - **--aspect-ratio** - The aspect ratio of the frame. _(default: 16/9)_
   *
   * ### **CSS Parts:**
   *  - **iframe** - The internal `<iframe>` element.
   * - **controls** - The container that surrounds zoom control buttons.
   * - **zoom-in-button** - The zoom in button.
   * - **zoom-out-button** - The zoom out button.
   */
  "quiet-zoomable-frame": Partial<QuietZoomableFrameProps & BaseProps & BaseEvents>;
};
