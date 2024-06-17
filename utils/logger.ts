import path from "node:path"
import { pino } from "pino"
import pretty from "pino-pretty"

const stream = pretty({
  destination: 1,
  colorize: true,
  colorizeObjects: true,
  singleLine: true,
  ignore: "pid,hostname",
})
export function initPino(logPath: string, mode = "dev") {
  const transport = pino.transport({
    targets: [
      {
        target: "pino/file",
        level: "trace",
        options: {
          destination: path.join(logPath, "pino-trace.log"),
          mkdir: true,
        },
      },
      {
        target: "pino/file",
        level: "error",
        options: {
          destination: path.join(logPath, "pino-error.log"),
        },
      },
      {
        target: "pino-pretty",
      },
    ],
  })
  return pino(transport, stream)
}

const logPath = path.resolve("./logs/")
const log = initPino(logPath)

export { log }
