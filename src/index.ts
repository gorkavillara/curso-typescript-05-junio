const userInput = document.querySelector("input#input-username") as HTMLInputElement | null
const passwordInput = document.querySelector("input#input-password") as HTMLInputElement | null

const userForm = document.querySelector("form") as HTMLFormElement

userForm.onsubmit = (event) => {
    event.preventDefault()
    console.log("Estoy en el evento")
    const username = userInput?.value
    const password = passwordInput?.value

    document.cookie = `username=${username}`
    document.cookie = `password=${password}`
}