import { postMessageToDiscord } from "../../services/notify/discord"

export default defineEventHandler(async (event) => {
  await postMessageToDiscord({ a: "test" })
})
