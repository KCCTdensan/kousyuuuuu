import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"
import Fastify from "fastify"
import fastifyStatic from "@fastify/static"
import fastifyWebsocket from "@fastify/websocket"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const port = Number(process.env.PORT) || 8080
const root = join(__dirname, "static")

const fastify = Fastify({
  logger: { level: "error" },
})

await Promise.all([
  fastify.register(fastifyStatic, { root }),
  fastify.register(fastifyWebsocket),
])

////////////////////////////////////////////////////////////////

type ChatMsg = {
  name: string
  text: string
  time: number
}

const chatHistory: ChatMsg[] = []

fastify.get("/sock", { websocket: true }, (conn, req) => {
  conn.socket.on("message", buf => {
    const { name, text } = JSON.parse(buf.toString())
    const msg = {
      name: name || "",
      text: text || "",
      time: Date.now(),
    }

    chatHistory.push(msg)
    fastify.websocketServer.clients.forEach(client => {
      if (client.readyState === client.OPEN) {
        client.send(JSON.stringify(msg))
      }
    })
  })
})

fastify.get("/history", (req, reply) => {
  reply.send(chatHistory)
})

////////////////////////////////////////////////////////////////

await fastify.listen({ port })
