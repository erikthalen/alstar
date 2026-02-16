import { authClient } from './auth.js'

class RegisterForm extends HTMLElement {
  /** @type {AbortController} */
  abortController

  /** @param {FormData} formData */
  async register(formData) {
    const { data, error } = await authClient.signUp.email(
      {
        email: formData.get('email').toString(),
        name: formData.get('email').toString(),
        password: formData.get('password').toString(), // user password -> min 8 characters by default
        callbackURL: '/studio', // A URL to redirect to after the user verifies their email (optional)
      },
      {
        onRequest: (ctx) => {
          //show loading
        },
        onSuccess: (ctx) => {
          window.location.replace(window.location.origin + '/studio')
        },
        onError: (ctx) => {
          // display the error message
          alert(ctx.error.message)
        },
      },
    )

    console.log(data, error)
  }

  connectedCallback() {
    this.abortController = new AbortController()

    this.addEventListener(
      'submit',
      (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)

        if (formData.get('password') === formData.get('password_2')) {
          this.register(formData)
        } else {
          alert(`Passwords doesn't match`)
        }
      },
      { signal: this.abortController.signal },
    )
  }

  disconnectedCallback() {
    this.abortController.abort()
  }
}

customElements.define('register-form', RegisterForm)
