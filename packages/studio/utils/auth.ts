import { db } from '@alstar/db'
import { type MiddlewareHandler } from 'hono'
import { getCookie, setCookie } from 'hono/cookie'
import { HTTPException } from 'hono/http-exception'
import { sql } from './sql.ts'

const middleware: MiddlewareHandler = async (c, next) => {
  const url = new URL(c.req.url)
  const user = db.database
    .prepare(sql`
      select
        email
      from
        users
    `)
    .get()

  const cookie = getCookie(c, 'login')

  if (
    !user &&
    url.pathname !== '/studio/register' &&
    url.pathname !== '/studio/api/auth/register'
  ) {
    return c.redirect('/studio/register')
  }

  if (
    user &&
    !cookie &&
    url.pathname !== '/studio/login' &&
    url.pathname !== '/studio/api/auth/login'
  ) {
    return c.redirect('/studio/login')
  }

  // console.log(cookie)

  // deleteCookie(c, 'cookie_name')

  // const allCookies = getCookie(c)

  await next()

  // const authorized = false

  // if(!authorized) {
  //   throw new HTTPException(401, { message: 'Custom error message' })
  // } else {
  //   await next()
  // }
}

export default middleware
