const NAV_LINK_PREFIX = "/lists/navigator/"
const YEAR_REGEX = /^\d{4}$/g

const header = document.querySelector("h1")
const origName = document.querySelector("h1 + div > span:first-child")?.textContent
const movieName = origName ? origName : header?.textContent
if (movieName) {
    const movieYear = findMovieYear()
    header.parentElement.appendChild(createButtons(movieName, movieYear))
}

function findMovieYear() {
    const navLinks = document.querySelectorAll("a[href^='" + NAV_LINK_PREFIX + "']")
    for (navLink of navLinks) {
        const pathname = navLink.pathname
        const navLinkValue = pathname.substring(NAV_LINK_PREFIX.length, pathname.length - 1)
        if (navLinkValue.match(YEAR_REGEX)) {
            return navLinkValue
        }
    }
}
