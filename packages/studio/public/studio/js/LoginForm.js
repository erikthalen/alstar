import { authClient } from './auth.js'

class LoginForm extends HTMLElement {
  /** @type {AbortController} */
  abortController

  /** @param {FormData} formData */
  async login(formData) {
    const { data, error } = await authClient.signIn.email(
      {
        email: formData.get('email').toString(),
        password: formData.get('password').toString(),
        callbackURL: '/studio',
        rememberMe: false,
      },
      {
        onRequest: (ctx) => {
          //show loading
        },
        onSuccess: (ctx) => {
          console.log(ctx)
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

        this.login(new FormData(e.target))
      },
      { signal: this.abortController.signal },
    )
  }

  disconnectedCallback() {
    this.abortController.abort()
  }
}

customElements.define('login-form', LoginForm)
