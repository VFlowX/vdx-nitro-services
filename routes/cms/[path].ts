import { sep } from "node:path"
import { deleteCMSFile } from "../../services/fs"

export default defineEventHandler(async (event) => {
  // const body = readBody(event)
  // console.log(body);
  if (event.method === "GET") {
    const params = getRouterParams(event)
    if (params.path) {
      const res = getCMSFile(params.path.replaceAll("__", sep))
      setResponseStatus(event, res.statusCode || 500)
      return res?.data
    }
    else {
      setResponseStatus(event, 400, "Params path not found")
    }

    return params
  }
  else if (event.method === "PUT") {
    const params = getRouterParams(event)
    const body = await readBody(event)
    if (params.path) {
      const res = await writeCMSFile(params.path.replaceAll("__", sep), body.data)
      setResponseStatus(event, res.statusCode || 500)
      return res?.data
    }
    else {
      setResponseStatus(event, 400, "Params path not found")
    }
    return params
  }
  else {
    setResponseStatus(event, 404)
  }
})
