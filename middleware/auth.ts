export default defineEventHandler(async (event) => {
  // const pathRequest = getRequestURL(event).pathname
  // // ignore /ping
  // if (!pathRequest.startsWith("/ping")) {
  //   const authToken = getHeader(event, "Authorization")?.slice(0, 7) // "Bearer " slice
  //   if (!authToken) {
  //     log.warn(`Unauthorized request to: ${pathRequest}`)
  //     setResponseStatus(event, 403)
  //     return "Fobbiden"
  //   }

  //   const algorithm = "ES512"
  //   const x509 = process.env.publicJWTToken
  //   const ecPublicKey = await importSPKI(x509, algorithm)
  //   event.context.user = await jwtVerify(authToken, ecPublicKey)
  // }
})
