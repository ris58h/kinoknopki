function createButton(name, year) {
    const button = document.createElement("div")
    button.style.width = "24px"
    button.style.height = "24px"
    button.style.background = `url(${chrome.extension.getURL("icons/icon.svg")})`

    const link = document.createElement("a")
    link.href = "https://rutracker.org/forum/tracker.php?o=10&s=2&nm=" + (name + " " + year)
    link.appendChild(button)

    return link
}
