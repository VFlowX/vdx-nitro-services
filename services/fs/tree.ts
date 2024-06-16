import { parse, sep } from "node:path"
import { statSync } from "node:fs"
import { globSync } from "glob"

const srcDir = process.env.SOURCE_DIRS
const globPattern = {
  components: `${srcDir}/features/*/components/**`,
  composables: `${srcDir}/features/*/composables/**`,
  settings: `${srcDir}/features/*/settings/**`,
  stores: `${srcDir}/features/*/stores/**`,
  layouts: `${srcDir}/layouts/**`,
  modules: `${srcDir}/modules/**`,
  pages: `${srcDir}/pages/**`,
  styles: `${srcDir}/styles/**`,
}

async function getDirTree() {
  const result: any = []
  for (const patternType in globPattern) {
    const lstFile = globSync(globPattern[patternType], {
      nodir: true,
    }).map((path) => {
      const stat = statSync(path)
      const fileParsed = parse(path)
      return {
        path: path.split(sep).join("__").replace("shared__", "@"),
        name: fileParsed.name,
        fileName: fileParsed.base,
        type: patternType,
        ext: fileParsed.ext,
        mtimeMs: stat.mtimeMs,
        ctimeMs: stat.ctimeMs,
        size: stat.size,
      }
    })
    result.push(...lstFile)
  }
  return result
}
export { getDirTree }
