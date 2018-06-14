const header = document.querySelector('h1')

const knopka = document.createElement("div")
knopka.style.width = "24px"
knopka.style.height = "24px"
knopka.style.background = `url(${chrome.extension.getURL("icons/icon.svg")})`

const link = document.createElement("a")
link.href = "https://rutracker.org/forum/tracker.php?nm=" + header.textContent
link.appendChild(knopka)

header.parentElement.appendChild(link)
