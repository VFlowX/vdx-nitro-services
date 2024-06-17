import dayjs from "dayjs"
import locale from "dayjs/locale/vi"
import relativeTime from "dayjs/plugin/relativeTime"
import weekOfYear from "dayjs/plugin/weekOfYear"
import weekday from "dayjs/plugin/weekday"
import customParseFormat from "dayjs/plugin/customParseFormat.js"

dayjs.locale(locale)
dayjs.extend(relativeTime)
dayjs.extend(weekOfYear)
dayjs.extend(weekday)
dayjs.extend(customParseFormat)

export const d = dayjs
