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
        window.location.replace(window.location.origin + '/studio')
      },
      onError: (ctx) => {
        // display the error message
        alert(ctx.error.message)
      },
    },
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

async function getSession() {
  const session = await authClient.getSession()

  return session.data?.user
}

window.auth = {
  login,
  logout,
  getSession,
}
