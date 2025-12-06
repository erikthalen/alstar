/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */
import {
  file_input_styles_default
} from "../../chunks/chunk.4GCYMSCL.js";
import "../../chunks/chunk.VQNLE2QA.js";
import "../../chunks/chunk.MGJZZ2SA.js";
import "../../chunks/chunk.3L6SRQZP.js";
import "../../chunks/chunk.BUQAADTR.js";
import "../../chunks/chunk.UDUVG3YR.js";
import "../../chunks/chunk.ZCPQX3DA.js";
import "../../chunks/chunk.LSX63TFG.js";
import "../../chunks/chunk.VZGOKU4C.js";
import "../../chunks/chunk.TUTBBYZM.js";
import {
  QuietFormControlElement,
  e as e2,
  n,
  r,
  t
} from "../../chunks/chunk.3WKCIAWU.js";
import "../../chunks/chunk.5E32SBSM.js";
import "../../chunks/chunk.HV6WFC7E.js";
import {
  form_control_styles_default
} from "../../chunks/chunk.QB6BERFO.js";
import {
  host_styles_default
} from "../../chunks/chunk.OW7IPG4K.js";
import "../../chunks/chunk.A5SY4VDT.js";
import {
  Localize
} from "../../chunks/chunk.N7C6RCMV.js";
import {
  QuietBlurEvent,
  QuietChangeEvent,
  QuietFocusEvent,
  QuietInputEvent
} from "../../chunks/chunk.E7L7Q2A4.js";
import "../../chunks/chunk.RT7RKCPI.js";
import {
  o
} from "../../chunks/chunk.7LEBIIO5.js";
import {
  e
} from "../../chunks/chunk.E6M524BP.js";
import "../../chunks/chunk.UTLMCKJR.js";
import {
  x
} from "../../chunks/chunk.VLHFHZQJ.js";
import "../../chunks/chunk.AR2Y4PNI.js";
import "../../chunks/chunk.YC32QOAM.js";
import {
  __decorateClass
} from "../../chunks/chunk.32UODNLB.js";

// src/components/file-input/file-input.ts
var nativeFileInput = document.createElement("input");
nativeFileInput.name = "quiet-faux-input";
nativeFileInput.type = "file";
nativeFileInput.required = true;
var VALIDATION_MESSAGE = nativeFileInput.validationMessage;
var QuietFileInput = class extends QuietFormControlElement {
  constructor() {
    super(...arguments);
    this.localize = new Localize(this);
    this.isDragging = false;
    this.isInvalid = false;
    this.hadUserInteraction = false;
    this.wasSubmitted = false;
    this.files = [];
    this.disabled = false;
    this.accept = false;
    this.multiple = false;
    this.size = "md";
    this.required = false;
  }
  get focusableAnchor() {
    return this.fileInput;
  }
  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("invalid", this.handleHostInvalid);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener("invalid", this.handleHostInvalid);
  }
  updated(changedProperties) {
    this.updateValidity();
    if (changedProperties.has("files")) {
      this.customStates.set("blank", this.files.length === 0);
      this.fileInput.files = this.getFileList();
      this.fileInput.setAttribute("aria-hidden", "true");
      this.fileInput.removeAttribute("aria-hidden");
      this.updateFormValue();
    }
    if (changedProperties.has("disabled")) {
      this.customStates.set("disabled", this.disabled);
    }
    if (this.hadUserInteraction || this.wasSubmitted) {
      this.customStates.set("user-invalid", this.isInvalid);
      this.customStates.set("user-valid", !this.isInvalid);
    } else {
      this.customStates.set("user-invalid", false);
      this.customStates.set("user-valid", false);
    }
  }
  /** @internal Called when a containing fieldset is disabled. */
  formDisabledCallback(isDisabled) {
    this.disabled = isDisabled;
  }
  /** @internal Called when the form is reset. */
  formResetCallback() {
    this.isInvalid = false;
    this.hadUserInteraction = false;
    this.wasSubmitted = false;
    this.files = [];
  }
  /** Converts the `this.files` array into a `FileList` object so the `<input type="file">` can be updated. */
  getFileList() {
    const dt = new DataTransfer();
    for (const file of this.files) dt.items.add(file);
    return dt.files;
  }
  handleBlur() {
    this.customStates.set("focused", false);
    this.dispatchEvent(new QuietBlurEvent());
  }
  handleDragEnter(event) {
    event.preventDefault();
    this.isDragging = true;
  }
  handleDragLeave(event) {
    if (event.relatedTarget === this.dropzone) {
      event.stopPropagation();
      event.preventDefault();
    }
    event.preventDefault();
    this.isDragging = false;
  }
  handleDragOver(event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = "copy";
  }
  handleDrop(event) {
    event.preventDefault();
    this.isDragging = false;
    this.hadUserInteraction = true;
    const entryQueue = [];
    const filesToAdd = [];
    const items = event.dataTransfer?.items;
    if (!items) return;
    for (let i = 0; i < items.length; i++) {
      if (items[i].kind === "file") {
        const entry = items[i].webkitGetAsEntry();
        if (entry) {
          entryQueue.push(entry);
        }
      }
    }
    const processQueue = async () => {
      while (entryQueue.length > 0) {
        if (!this.multiple && filesToAdd.length > 0) {
          break;
        }
        const currentEntry = entryQueue.shift();
        if (currentEntry.isFile) {
          await new Promise((resolve) => {
            currentEntry.file((file) => {
              filesToAdd.push(file);
              resolve();
            });
          });
        } else if (currentEntry.isDirectory) {
          const reader = currentEntry.createReader();
          let entries = [];
          do {
            entries = await new Promise((resolve) => {
              reader.readEntries((results) => resolve(results));
            });
            entryQueue.unshift(...entries);
          } while (entries.length > 0);
        }
      }
      if (this.multiple) {
        this.files = this.files.concat(filesToAdd);
      } else if (filesToAdd.length > 0) {
        this.files = [filesToAdd[0]];
      }
      this.dispatchEvent(new QuietInputEvent());
      this.dispatchEvent(new QuietChangeEvent());
    };
    processQueue();
  }
  handleFileInput() {
    this.hadUserInteraction = true;
    if (this.fileInput.files) {
      if (this.multiple) {
        this.files = this.files.concat([...this.fileInput.files]);
      } else {
        this.files = [this.fileInput.files[0]];
      }
    }
    this.dispatchEvent(new QuietInputEvent());
    this.dispatchEvent(new QuietChangeEvent());
  }
  handleFocus() {
    this.customStates.set("focused", true);
    this.dispatchEvent(new QuietFocusEvent());
  }
  handleHostInvalid() {
    this.wasSubmitted = true;
  }
  handleRemoveClick(_, indexToRemove) {
    this.files = this.files.filter((__, index) => index !== indexToRemove);
    this.dispatchEvent(new QuietInputEvent());
    this.dispatchEvent(new QuietChangeEvent());
  }
  /** Determines if a File object is an image type the browser can render. */
  isImage(file) {
    return ["image/apng", "image/avif", "image/gif", "image/jpeg", "image/png", "image/svg+xml", "image/webp"].includes(
      file.type
    );
  }
  /** Returns a system icon name based on the provided mime type. */
  mimeTypeToIconName(mimeType) {
    if ([
      "application/x-freearc",
      // cspell:disable-line
      "application/x-bzip",
      "application/x-bzip2",
      "application/gzip",
      "application/java-archive",
      "application/vnd.rar",
      "application/x-tar",
      "application/zip",
      "application/x-zip-compressed",
      "application/x-7z-compressed"
    ].includes(mimeType)) {
      return "file-zip";
    }
    if (mimeType.startsWith("audio")) {
      return "music";
    }
    if (mimeType.startsWith("image")) {
      return "photo";
    }
    if (mimeType.startsWith("video")) {
      return "video";
    }
    return "file";
  }
  /** Updates the form value based on this.files. Call this after adding or removing files to/from this.files. */
  updateFormValue() {
    const formData = new FormData();
    this.files.forEach((file) => formData.append(this.name, file));
    this.internals.setFormValue(formData);
  }
  /** Sets the form control's validity */
  async updateValidity() {
    await this.updateComplete;
    const hasCustomValidity = this.getCustomValidity().length > 0;
    const hasMissingValue = this.required && this.files.length === 0;
    const validationMessage = hasCustomValidity ? this.getCustomValidity() : VALIDATION_MESSAGE;
    const flags = {
      customError: hasCustomValidity,
      valueMissing: hasMissingValue
    };
    this.isInvalid = hasCustomValidity ? true : hasMissingValue;
    this.internals.setValidity(flags, validationMessage, this.focusableAnchor);
  }
  render() {
    const hasLabel = this.label || this.slotsWithContent.has("label");
    const hasDescription = this.description || this.slotsWithContent.has("description");
    return x`
      <label id="label" part="label" for="file-input" class=${e({ vh: !hasLabel })}>
        <slot name="label">${this.label}</slot>
      </label>

      <div id="description" part="description" class=${e({ vh: !hasDescription })}>
        <slot name="description">${this.description}</slot>
      </div>

      <label
        id="dropzone"
        part="dropzone"
        class="${e({
      // Sizes
      xs: this.size === "xs",
      sm: this.size === "sm",
      md: this.size === "md",
      lg: this.size === "lg",
      xl: this.size === "xl",
      // States
      disabled: this.disabled,
      dragging: this.isDragging
    })}"
        role="presentation"
        @focus=${this.handleFocus}
        @blur=${this.handleBlur}
        @dragenter=${this.handleDragEnter}
        @dragleave=${this.handleDragLeave}
        @dragover=${this.handleDragOver}
        @drop=${this.handleDrop}
      >
        <slot name="dropzone">
          <quiet-icon library="system" name="upload"></quiet-icon>
          <br />
          ${this.multiple ? this.localize.term("dragFilesHereOrChooseFromFolder") : this.localize.term("dragFileHereOrChooseFromFolder")}
        </slot>

        <input
          id="file-input"
          type="file"
          accept=${o(this.accept)}
          ?multiple=${this.multiple}
          ?required=${this.required}
          aria-describedby="description"
          @input=${this.handleFileInput}
        />
      </label>

      <div
        part="file-list"
        id="file-list"
        class="${e({
      // Sizes
      xs: this.size === "xs",
      sm: this.size === "sm",
      md: this.size === "md",
      lg: this.size === "lg",
      xl: this.size === "xl",
      // States
      disabled: this.disabled,
      dragging: this.isDragging
    })}"
      >
        ${this.files.map((file, index) => {
      const isImage = this.isImage(file);
      const iconName = this.mimeTypeToIconName(file.type);
      return x`
            <div part="file" class="file">
              <span part="file-thumbnail" class="file-thumbnail">
                ${isImage ? x`<img part="file-image" src=${URL.createObjectURL(file)} alt="" aria-hidden="true" />` : x`
                      <quiet-icon
                        part="file-icon"
                        exportparts="svg:file-icon__svg"
                        library="system"
                        name="${iconName}"
                      ></quiet-icon>
                    `}
              </span>
              <div class="file-details">
                <span class="file-name">${file.name}</span>
                <small class="file-size">
                  <quiet-bytes value=${file.size} lang=${this.localize.lang()}></quiet-bytes>
                </small>
              </div>
              <div class="file-actions">
                <quiet-button
                  part="file-remove-button"
                  exportparts="button:file-remove-button__button"
                  class="file-remove"
                  name="x"
                  appearance="text"
                  icon-label=${this.localize.term("remove")}
                  size=${this.size}
                  @click=${(event) => this.handleRemoveClick(event, index)}
                >
                  <quiet-icon library="system" name="x"></quiet-icon>
                </quiet-button>
              </div>
            </div>
          `;
    })}
      </div>
    `;
  }
};
QuietFileInput.formAssociated = true;
QuietFileInput.observeSlots = true;
QuietFileInput.styles = [host_styles_default, form_control_styles_default, file_input_styles_default];
__decorateClass([
  e2("#dropzone")
], QuietFileInput.prototype, "dropzone", 2);
__decorateClass([
  e2("#file-input")
], QuietFileInput.prototype, "fileInput", 2);
__decorateClass([
  r()
], QuietFileInput.prototype, "isDragging", 2);
__decorateClass([
  r()
], QuietFileInput.prototype, "isInvalid", 2);
__decorateClass([
  r()
], QuietFileInput.prototype, "hadUserInteraction", 2);
__decorateClass([
  r()
], QuietFileInput.prototype, "wasSubmitted", 2);
__decorateClass([
  r()
], QuietFileInput.prototype, "files", 2);
__decorateClass([
  n()
], QuietFileInput.prototype, "label", 2);
__decorateClass([
  n()
], QuietFileInput.prototype, "description", 2);
__decorateClass([
  n({ reflect: true })
], QuietFileInput.prototype, "name", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], QuietFileInput.prototype, "disabled", 2);
__decorateClass([
  n({ type: Boolean })
], QuietFileInput.prototype, "accept", 2);
__decorateClass([
  n({ type: Boolean })
], QuietFileInput.prototype, "multiple", 2);
__decorateClass([
  n({ reflect: true })
], QuietFileInput.prototype, "size", 2);
__decorateClass([
  n()
], QuietFileInput.prototype, "form", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], QuietFileInput.prototype, "required", 2);
QuietFileInput = __decorateClass([
  t("quiet-file-input")
], QuietFileInput);
document.addEventListener("dragover", (event) => event.preventDefault());
document.addEventListener("dragleave", (event) => event.preventDefault());
document.addEventListener("drop", (event) => event.preventDefault());
export {
  QuietFileInput
};
