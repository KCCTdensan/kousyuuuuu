// WebSocket
const sockUrl = new URL("ws://localhost/sock")
connect(sockUrl, sockHandler)

// Elements
const nameForm = document.querySelector("#username")
const hisElem = document.querySelector("#history")
const msgForm = document.querySelector("#new-message-form")
const msgText = document.querySelector("#new-message-text")

msgForm.onsubmit = e => {
  e.preventDefault()
  formHandler(e)
}

////////////////////////////////////////////////////////////////

function createMsgElem(data) {
  const html = `
    <div class="message">
      <p class="message-head">${data.name}</p>
      <p class="message-body">${data.text}</p>
      <p class="message-tail">${new Date(data.time).toLocaleString("ja")}</p>
    </div>
  `
  return $(html.trim())[0]
}

async function scrollHistory() {
  hisElem.scrollTo({
    top: hisElem.scrollHeight,
    behavior: "smooth",
  })
}

function sockHandler(data) {
  console.log("message received!", data)

  const elem = createMsgElem(data)
  hisElem.appendChild(elem)
  scrollHistory()
}

function formHandler(event) {
  console.log("form submitted!")

  const text = msgText.value
  msgText.value = ""

  // フォームが空だったら中止
  if (text.length == 0) {
    console.log("form is empty!")
    return
  }

  send({
    name: nameForm.value || "太郎",
    text: text,
  })
}

////////////////////////////////////////////////////////////////

async function loadHistory() {
  const history = await fetch("/history").then(r => r.json())
  hisElem.append(...history.map(createMsgElem))
  scrollHistory()
}
loadHistory()
