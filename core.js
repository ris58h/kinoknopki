function createButtons(movieName, movieYear) {
    const cb = (iconUrl, urlTemplate, siteName) => {
        let searchQuery = movieName
        if (movieYear) {
            searchQuery += " " + movieYear
        }
        return createButton(iconUrl, urlTemplate, siteName, searchQuery)
    }

    const buttons = document.createElement("div")
    buttons.appendChild(cb("http://rutracker.org/favicon.ico", "https://rutracker.org/forum/tracker.php?o=10&s=2&nm=%s", "RuTracker.org"))
    buttons.appendChild(cb("https://thepiratebay.org/favicon.ico", "https://thepiratebay.org/search/%s/", "The Pirate Bay"))
    return buttons
}

function createButton(iconUrl, urlTemplate, siteName, searchQuery) {
    const link = document.createElement("a")
    let href = urlTemplate.replace("%s", searchQuery)
    link.href = href
    link.target="_blank"
    link.title = siteName + ": " + searchQuery
    link.style.display = "inline-block"
    link.style.width = "24px"
    link.style.height = "24px"
    link.style.background = `url(${iconUrl}) 0% 0% / 100% no-repeat`
    link.style.margin = "2px"
    return link
}
