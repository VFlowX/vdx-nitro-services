export default defineEventHandler((event) => {
  // TODO use jose to validate JWT

  // const api = getHeader(event, "api")
  // if (api !== process.env.TOKEN_VUEJX) {
  //   setResponseStatus(event, 403)
  //   return "Fobbiden"
  // }
  // leave / ping
  // if (!getRequestURL(event).pathname.startsWith("/ping")) {
  //   // Extends or modify the event
  //   const token = getHeader(event, "token")
  //   if (!token) {
  //     pino.warn(`Unauthorized request to: ${getRequestURL(event).pathname}`)
  //     setResponseStatus(event, 403)
  //     return "Forbidden"
  //   }
  //   const decoded = jwt.verify(token, secret)
  //   event.context.user = decoded
  // }
})
