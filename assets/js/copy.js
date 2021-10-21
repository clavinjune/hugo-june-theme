for (const e of document.querySelectorAll('div.highlight')) {
    e.innerHTML += `<div class="copy-button"><span id="copy" class="font-16 fg-bold bottom-red">copy</span></div>`
}

const copy = text => {
    if (navigator.clipboard && window.isSecureContext) {
        return navigator.clipboard.writeText(text)
    }

    let temp = document.createElement("textarea")
    temp.value = text
    document.body.appendChild(temp)
    temp.select()
    document.execCommand("copy")
    document.body.removeChild(temp)
}

document.addEventListener('click', e => {
    if (e.target && e.target.id === 'copy') {
        copy(e.
            target.
            parentElement.
            previousElementSibling.
            querySelector("table > tbody > tr > :nth-child(2)").
            textContent.trim())
    }
  })