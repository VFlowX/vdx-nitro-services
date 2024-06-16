import { parse, sep as pathSep } from "node:path"
import { existsSync, readFileSync, statSync } from "node:fs"
import { outputFile, remove } from "fs-extra"

export async function writeCMSFile(path: string, fileData: string | NodeJS.ArrayBufferView) {
  if (!isValidPath(path)) {
    return {
      statusCode: 400,
      data: "Not valid path!",
    }
  }

  try {
    await outputFile(getTruePath(path), fileData)
    return {
      statusCode: 200,
      data: "Success!",
    }
  }
  catch (err) {
    return {
      statusCode: 500,
      data: err,
    }
  }
}
export async function deleteCMSFile(path: string) {
  if (!isValidPath(path)) {
    return {
      statusCode: 400,
      data: "Not valid path!",
    }
  }

  try {
    await remove(getTruePath(path))
    return {
      statusCode: 200,
      data: "File deleted!",
    }
  }
  catch (err) {
    return {
      statusCode: 500,
      data: err,
    }
  }
}

function getTruePath(path: string) {
  return process.env.SOURCE_DIRS + path.replace("@", pathSep)
}

function isValidPath(path: string) {
  if (path.endsWith(pathSep))
    return false
  if (!path.startsWith("@"))
    return false
  if (path.startsWith("@features")
    || path.startsWith("@layouts")
    || path.startsWith("@modules")
    || path.startsWith("@pages")
    || path.startsWith("@styles")) {
    return true
  }
  return false
}

export function getCMSFile(path: string) {
  let fileData = ""
  if (!isValidPath(path)) {
    return {
      statusCode: 400,
      data: `${path} is not valid`,
    }
  }

  const truePath = getTruePath(path)
  if (!existsSync(truePath)) {
    return {
      statusCode: 400,
      data: `File not found: ${path}`,
    }
  }

  fileData = readFileSync(truePath, { encoding: "utf-8" })
  const stat = statSync(truePath)
  const fileParsed = parse(truePath)
  return {
    statusCode: 200,
    data: {
      data: fileData,
      _metadata: {
        name: fileParsed.name,
        fileName: fileParsed.base,
        ext: fileParsed.ext,
        mtimeMs: stat.mtimeMs,
        ctimeMs: stat.ctimeMs,
        size: stat.size,
      },
    },
  }
}
