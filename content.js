const header = document.querySelector('h1')

const ruName = header.textContent
const origName = document.querySelector("h1 + span").textContent
const name = origName ? origName : ruName
const year = document.querySelector("a[href^='/lists/m_act%5Byear%5D/']").textContent

const button = document.createElement("div")
button.style.width = "24px"
button.style.height = "24px"
button.style.background = `url(${chrome.extension.getURL("icons/icon.svg")})`

const link = document.createElement("a")
link.href = "https://rutracker.org/forum/tracker.php?o=10&s=2&nm=" + (name + " " + year)
link.appendChild(button)

header.parentElement.appendChild(link)
