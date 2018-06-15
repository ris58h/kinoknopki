const container = document.querySelector(".title_wrapper")

const headerName = document.querySelector(".title_wrapper h1").firstChild.textContent.trim()
const origTitle = document.querySelector(".title_wrapper .originalTitle")
const origName = origTitle ? origTitle.firstChild.textContent.trim() : ""
const name = origName ? origName : headerName
const year = document.querySelector("#titleYear a").textContent

container.appendChild(createButtons(name, year))
