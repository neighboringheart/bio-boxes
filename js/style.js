// <br /><p style="padding-top: 20px; font-family: FONTFAMILY;text-align: center; width: 450px; margin: auto; border: BORDERSTYLE; border-bottom:none; background-color: #HEXCODE;"><font size="6"><font color="#HEXCODE">NAME</font></font></p><p style="padding: 10px; padding-left: 20px; padding-right: 20px; width: 450px; margin: auto; font-family: FONTFAMILY; border: BORDERSTYLE; border-top: none; background-color: #HEXCODE;">TEXT</p><br />

function gID(id) {
    const element = document.getElementById(id)

    return element
}

let codeForm = gID('code-form')
let finalCode = gID('final-code')

if (codeForm) {
    codeForm.addEventListener('submit', (e) => {
        e.preventDefault()

        let bgColor = gID('bg-color').value
        let headFont = gID('head-font').value
        let bodyFont = gID('body-font').value
        let headFC = gID('head-fc').value
        let bodyFC = gID('body-fc').value
        let border = gID('border').value

        finalCode.innerHTML = `&lt;br />&lt;p style="padding-top: 20px; font-family: ${headFont};text-align: center; width: 450px; margin: auto; border: ${border}; border-bottom:none; background-color: #${bgColor};">&lt;font size="6">&lt;font color="#${headFC}">NAME&lt;/font>&lt;/font>&lt;/p>&lt;p style="padding: 10px; padding-left: 20px; padding-right: 20px; width: 450px; margin: auto; font-family: ${bodyFont}; border: ${border}; border-top: none; background-color: #${bgColor};">&lt;font color="#${bodyFC}">BODY TEXT&lt;/font>&lt;/p>&lt;br />`
    })
}

function copyButton(id) {
    var copyText = gID(id)

    copyText.select()

    navigator.clipboard.writeText(copyText.value)

    alert('The code is now copied to your clipboard! :D')
}
