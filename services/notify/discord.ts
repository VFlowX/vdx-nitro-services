import type { FetchOptions } from "ofetch"
import { ofetch } from "ofetch"
import { log } from "../../utils/logger"

export async function postMessageToDiscord(message) {
  message = message || "Something not right!"
  const myHeaders = new Headers()
  myHeaders.append("Content-Type", "application/json")
  const raw = JSON.stringify({
    content: message,
  })

  const requestOptions: FetchOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  }

  await ofetch(`https://discord.com/api/webhooks/1163334325626998905/KSBmjgqjIss7im72K9SHXXOSbsQdvTXEWJHT0YlQH8sAknSvbxp8Req8iKoJ8JwtuHXy?thread_id=1212230059528818699`, requestOptions).catch((err) => {
    log.error(err)
  })
}
