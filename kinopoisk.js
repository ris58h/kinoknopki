const header = document.querySelector("h1")

const headerName = header.textContent
const origName = document.querySelector("h1 + span").textContent
const name = origName ? origName : headerName
const year = document.querySelector("a[href^='/lists/m_act%5Byear%5D/']").textContent

header.parentElement.appendChild(createButton(name, year))
