import type { NitroErrorHandler } from "nitropack"

export default <NitroErrorHandler> function (error, event) {
  setResponseStatus(event, error.statusCode || 500)
  event.node.res.end(error.message)
  // console.error(error)
}
