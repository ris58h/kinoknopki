const NAV_LINK_PREFIX = "/lists/"
const YEAR_REGEX = /^\d{4}$/g

const header = document.querySelector("h1")
const headerName = header.firstChild?.textContent

let origName = null
const origNameAndAge = document.querySelectorAll("h1 + div > span")
if (origNameAndAge.length === 2) {
    origName = origNameAndAge[0].textContent
}

const movieName = origName ? origName : headerName
if (movieName) {
    const movieYear = findMovieYear()
    header.parentElement.appendChild(createButtons(movieName, movieYear))
}

function findMovieYear() {
    const navLinks = document.querySelectorAll("a[href^='" + NAV_LINK_PREFIX + "']")
    for (navLink of navLinks) {
        const navLinkValue = navLink.textContent
        if (navLinkValue.match(YEAR_REGEX)) {
            return navLinkValue
        }
    }
}
