import { LitElement, css, html } from 'lit'

/**
 * An example element.
 *
 */
export class ToggleIcon extends LitElement {
  static formAssociated = true

  static internals

  static properties = {
    /** The label of the toggle icon. */
    label: {},

    /** The name of the toggle icon. This will be submitted with the form as a name/value pair. */
    name: {},

    /** The value of the toggle icon. This will be submitted with the form as a name/value pair. */
    value: {},

    /** The toggle icon's checked state. */
    checked: {},

    /** The toggle icon's disabled state. */
    disabled: {},
  }

  constructor() {
    super()
    this.internals = this.attachInternals()

    this.label = ''
    this.name = ''
    this.value = ''
    this.checked = false
    this.disabled = false
  }

  get form() {
    return this.internals.form
  }

  get type() {
    return this.localName
  }

  handleChange(e) {
    if (!e.target) return

    this.checked = e.target.checked

    this.dispatchEvent(new Event('change', { bubbles: true, composed: true }))
    this.dispatchEvent(new InputEvent('input'))

    this.internals.setFormValue(this.checked ? this.value : null)
  }

  render() {
    return html`
      <label>
        ${this.label ? html`<span>${this.label}</span>` : ''}

        <div class="checkbox">
          <slot name="unchecked" class="unchecked-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentcolor"
              class="icon icon-tabler icons-tabler-filled icon-tabler-circle"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path
                d="M7 3.34a10 10 0 1 1 -4.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 4.995 -8.336z"
              />
            </svg>
          </slot>

          <slot name="checked" class="checked-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentcolor"
              class="icon icon-tabler icons-tabler-filled icon-tabler-circle"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path
                d="M7 3.34a10 10 0 1 1 -4.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 4.995 -8.336z"
              />
            </svg>
          </slot>

          <input
            .disabled=${this.disabled}
            .name=${this.name}
            .value=${this.value}
            .checked=${this.checked}
            type="checkbox"
            @change=${this.handleChange}
          />
        </div>
      </label>
    `
  }

  static styles = css`
    :host {
      --checked-color: lightgreen;
      --unchecked-color: crimson;

      display: inline-block;
      user-select: none;
    }

    label {
      cursor: pointer;

      display: flex;
      gap: 0.5rem;
      align-items: center;
      justify-content: center;

      height: 1.4rem;
      width: 1.4rem;
    }

    label:has(input:focus) {
      outline: none;
    }

    label:has(input:focus-visible) {
      outline: 2px solid blue;
      outline-offset: 2px;
    }

    input {
      position: absolute;
      opacity: 0;
      pointer-events: none;
    }

    .checkbox {
      display: grid;
      grid-template-areas: 'stack';
    }

    .checkbox:not(:has(input:checked)) {
      .checked-icon svg {
        opacity: 0;
        scale: 0;
      }

      .unchecked-icon svg {
        opacity: 1;
      }
    }

    .checkbox:has(input:checked) {
      .checked-icon svg {
        opacity: 1;
      }

      .unchecked-icon svg {
        opacity: 0;
        scale: 0;
      }
    }

    svg {
      transition: all 100ms ease-in-out;
      width: 1rem;
      height: 1rem;
    }

    .unchecked-icon {
      color: var(--unchecked-color);

      svg {
        grid-area: stack;
      }
    }

    .checked-icon {
      color: var(--checked-color);

      svg {
        grid-area: stack;
      }
    }
  `
}

customElements.define('alstar-toggle-icon', ToggleIcon)
