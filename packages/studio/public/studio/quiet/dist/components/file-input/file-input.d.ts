import type { CSSResultGroup, PropertyValues } from 'lit';
import { QuietFormControlElement } from '../../utilities/quiet-element.js';
import '../button/button.js';
import '../bytes/bytes.js';
import '../icon/icon.js';
/**
 * <quiet-file-input>
 *
 * @summary Allows the user to select files to upload to the server.
 * @documentation https://quietui.org/docs/components/file
 * @status stable
 * @since 1.0
 *
 * @dependency quiet-button
 * @dependency quiet-bytes
 * @dependency quiet-icon
 *
 * @slot label - The file input's label. For plain-text labels, you can use the `label` attribute instead.
 * @slot description - The file input's description. For plain-text descriptions, you can use the `description`
 *  attribute instead.
 * @slot dropzone - Custom content to show in the dropzone.
 *
 * @event quiet-blur - Emitted when the file input loses focus. This event does not bubble.
 * @event quiet-change - Emitted when the user selects or removes a file.
 * @event quiet-focus - Emitted when the file input receives focus. This event does not bubble.
 * @event quiet-input - Emitted when the file input receives input.
 *
 * @csspart label - The element that contains the text field's label, a `<label>` element.
 * @csspart description - The element that contains the text field's description.
 * @csspart dropzone - The bordered region where files can be dropped.
 * @csspart file-list - The list of files shown when at least one file is selected.
 * @csspart file - A selected file will be drawn in this container.
 * @csspart file-thumbnail - The container that hold's the file's image or icon.
 * @csspart file-image - The file's image preview (if it's an image).
 * @csspart file-icon - The file's icon (if it's not an image).
 * @csspart file-icon__svg - The `<svg>` part of the file icon.
 * @csspart file-details - The container that holds the filename and size.
 * @csspart file-name - The container that holds the file's name, a `<span>` element.
 * @csspart file-size - The container that holds the file's size, a `<small>` element.
 * @csspart file-actions - The container that holds the file's remove button.
 * @csspart file-remove-button - The file's remove button.
 * @csspart file-remove-button__button - The `button` part of the file's remove button.
 *
 * @cssstate disabled - Applied when the file input is disabled.
 * @cssstate blank - Applied when the file input has a blank value.
 * @cssstate focused - Applied when the file input has focus.
 * @cssstate user-valid - Applied when the file input is valid and the user has sufficiently interacted with it.
 * @cssstate user-invalid - Applied when the file input is invalid and the user has sufficiently interacted with it.
 */
export declare class QuietFileInput extends QuietFormControlElement {
    static formAssociated: boolean;
    static observeSlots: boolean;
    static styles: CSSResultGroup;
    private localize;
    protected get focusableAnchor(): HTMLInputElement;
    dropzone: HTMLLabelElement;
    fileInput: HTMLInputElement;
    isDragging: boolean;
    isInvalid: boolean;
    hadUserInteraction: boolean;
    wasSubmitted: boolean;
    /** An array of files that are currently selected. (Property only) */
    files: File[];
    /**
     * The text field's label. If you need to provide HTML in the label, use the `label` slot instead.
     */
    label: string;
    /**
     * The text field's description. If you need to provide HTML in the description, use the `description` slot instead.
     */
    description: string;
    /** The name of the file input. This will be submitted with the form as a name/value pair. */
    name: string;
    /** Disables the file input. */
    disabled: boolean;
    /**
     * A list of acceptable file types. Must be a comma-separated list of [unique file type
     * specifiers](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#unique_file_type_specifiers).
     */
    accept: boolean;
    /** Allows more than one file to be selected. */
    multiple: boolean;
    /** The file input's size. */
    size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    /**
     * The form to associate this control with. If omitted, the closest containing `<form>` will be used. The value of
     * this attribute must be an ID of a form in the same document or shadow root.
     */
    form: string;
    /**
     * Makes the file input required. Form submission will not be allowed when this is set and no files are selected.
     */
    required: boolean;
    connectedCallback(): void;
    disconnectedCallback(): void;
    updated(changedProperties: PropertyValues<this>): void;
    /** @internal Called when a containing fieldset is disabled. */
    formDisabledCallback(isDisabled: boolean): void;
    /** @internal Called when the form is reset. */
    formResetCallback(): void;
    /** Converts the `this.files` array into a `FileList` object so the `<input type="file">` can be updated. */
    private getFileList;
    private handleBlur;
    private handleDragEnter;
    private handleDragLeave;
    private handleDragOver;
    private handleDrop;
    private handleFileInput;
    private handleFocus;
    private handleHostInvalid;
    private handleRemoveClick;
    /** Determines if a File object is an image type the browser can render. */
    private isImage;
    /** Returns a system icon name based on the provided mime type. */
    private mimeTypeToIconName;
    /** Updates the form value based on this.files. Call this after adding or removing files to/from this.files. */
    private updateFormValue;
    /** Sets the form control's validity */
    private updateValidity;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'quiet-file-input': QuietFileInput;
    }
}
