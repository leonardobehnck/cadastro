function save() {
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const address = document.getElementById("address").value
    const whatsapp = document.getElementById("whatsapp").value

    if (name && email) {
        document.getElementById("error-message").innerHTML = ""
        document.getElementById("saved-name").innerHTML = name
        document.getElementById("saved-email").innerHTML = email
        document.getElementById("saved-address").innerHTML = address
        document.getElementById("saved-whatsapp").innerHTML = whatsapp
        localStorage.setItem("name", name)
        localStorage.setItem("email", email)
        localStorage.setItem("address", address)
        localStorage.setItem("whatsapp", whatsapp)
        limpar()
    }
    else {
        const error = "Preencha todos os dados."
        document.getElementById("error-message").innerHTML = error
    }
}

function init() {
    const name = localStorage.getItem("name")
    const email = localStorage.getItem("email")
    const address = localStorage.getItem("address")
    const whatsapp = localStorage.getItem("whatsapp")
    if (name) {document.getElementById("saved-name").innerHTML = name}
    if (email) {document.getElementById("saved-email").innerHTML = email}
    if (address) {document.getElementById("saved-address").innerHTML = address}
    if (whatsapp) {document.getElementById("saved-whatsapp").innerHTML = whatsapp}
}

function erase() {
    document.getElementById("name").value = ""
    document.getElementById("email").value = ""
    document.getElementById("address").value = ""
    document.getElementById("whatsapp").value = ""
}

function del() {
    localStorage.setItem("name", "")
    localStorage.setItem("email", "")
    localStorage.setItem("address", "")
    localStorage.setItem("whatsapp", "")
    document.getElementById("saved-name").innerHTML = ""
    document.getElementById("saved-email").innerHTML = ""
    document.getElementById("saved-address").innerHTML = ""
    document.getElementById("saved-whatsapp").innerHTML = ""
}