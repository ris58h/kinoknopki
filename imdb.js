const YEAR_REGEX = /^\d{4}$/g

const header = document.querySelector("h1")

const movieName = header.textContent.trim()
const movieYear = findMovieYear()

insertAfter(createButtons(movieName, movieYear), header)

function findMovieYear() {
    const navLinks = document.querySelectorAll("a.ipc-link")
    for (navLink of navLinks) {
        const navLinkValue = navLink.textContent
        if (navLinkValue.match(YEAR_REGEX)) {
            return navLinkValue
        }
    }
}

function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
