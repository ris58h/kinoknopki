let container = document.querySelector(".title_wrapper")

if (container) {
    const headerName = document.querySelector(".title_wrapper h1").firstChild.textContent.trim()
    const origTitle = document.querySelector(".title_wrapper .originalTitle")
    const origName = origTitle ? origTitle.firstChild.textContent.trim() : ""
    const name = origName ? origName : headerName
    const year = document.querySelector("#titleYear a").textContent
    
    container.appendChild(createButtons(name, year))
} else {
    // New design
    container = document.querySelector("div[class^='TitleBlock__TitleContainer-']")

    const name = document.querySelector("h1").textContent.trim()
    const year = document.querySelector("div[class^='TitleBlock__TitleMetaDataContainer-'] ul li a").textContent
    
    container.insertBefore(createButtons(name, year), container.firstChild)
}
