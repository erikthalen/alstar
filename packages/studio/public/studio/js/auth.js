import { createAuthClient } from 'better-auth/client'

export const authClient = createAuthClient({
  basePath: '/studio/api/auth',
})

/** @param {FormData} formData */
async function login(formData) {
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
        // window.location.replace(window.location.origin + '/studio')
      },
      onError: (ctx) => {
        // display the error message
        alert(ctx.error.message)
      },
    }
  )

  console.log(data)
}

async function logout() {
  await authClient.signOut({
    fetchOptions: {
      onSuccess: () => {
        // window.location.replace(window.location.origin + '/studio/login')
      },
    },
  })
}

/** @param {FormData} formData */
async function register(formData) {
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
        console.log(ctx)
        // window.location.replace(window.location.origin + '/studio')
      },
      onError: (ctx) => {
        // display the error message
        alert(ctx.error.message)
      },
    }
  )

  console.log('data', data, error)
}

async function getSession() {
  const session = await authClient.getSession()

  return session.data?.user
}

window.auth = {
  login,
  logout,
  register,
  getSession,
}
