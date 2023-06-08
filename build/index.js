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
//# sourceMappingURL=index.js.map