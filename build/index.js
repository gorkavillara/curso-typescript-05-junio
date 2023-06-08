"use strict";
const userInput = document.querySelector("input#input-username");
const passwordInput = document.querySelector("input#input-password");
const userForm = document.querySelector("form");
userForm.onsubmit = (event) => {
    event.preventDefault();
    console.log("Estoy en el evento");
    const username = userInput === null || userInput === void 0 ? void 0 : userInput.value;
    const password = passwordInput === null || passwordInput === void 0 ? void 0 : passwordInput.value;
    document.cookie = `username=${username}`;
    document.cookie = `password=${password}`;
};
const miCookie = "username=miusername; password=123455677";
const obtenMiCookie = (todalacookieenteraenstring, lakeyquebuscamos) => {
    const arrayDeCookies = todalacookieenteraenstring
        .split("; ")
        .map((cadaUna) => {
        const [key, value] = cadaUna.split("=");
        return { key, value };
    });
    const valor = arrayDeCookies.find((cadaCookie) => cadaCookie.key === lakeyquebuscamos);
    return valor ? valor.value : null;
};
console.log(obtenMiCookie(miCookie, "username"));
console.log(obtenMiCookie(miCookie, "password"));
//# sourceMappingURL=index.js.map