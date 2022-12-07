const retryInterval = 1000

const sleep = async ms => new Promise(res => setTimeout(res, ms))

function connect(url, handler) {
  if (globalThis.ws) {
    globalThis.ws.close()
  }

  const newSock = new WebSocket(url)
  newSock.onmessage = ({ data }) => {
    handler(JSON.parse(data.toString()))
  }
  newSock.onclose = async e => {
    if (e.code === 1001) return //
    console.warn("server disconnected", e)
    await sleep(retryInterval)
    connect(url, handler)
  }

  return (globalThis.ws = newSock)
}

function send(data) {
  if (!globalThis.ws || globalThis.ws.readyState !== WebSocket.OPEN) {
    console.error("socket is not ready!")
    return
  }

  return globalThis.ws.send(JSON.stringify(data))
}
