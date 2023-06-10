"use strict";
const userInput = document.querySelector("input#input-username");
const passwordInput = document.querySelector("input#input-password");
const userForm = document.querySelector("form");
userForm.onsubmit = (event) => {
    event.preventDefault();
    if (!userInput || !passwordInput)
        return;
    console.log("Estoy en el evento");
    const username = userInput.value;
    const password = passwordInput.value;
    sessionStorage.setItem("username", username);
    sessionStorage.setItem("password", password);
    //   document.cookie = `username=${username}`;
    //   document.cookie = `password=${password}`;
};
// const miCookie = "username=miusername; password=123455677";
// const obtenMiCookie = (
//   todalacookieenteraenstring: string,
//   lakeyquebuscamos: string
// ) => {
//   const arrayDeCookies = todalacookieenteraenstring
//     .split("; ")
//     .map((cadaUna) => {
//       const [key, value] = cadaUna.split("=");
//       return { key, value };
//     });
//   const valor = arrayDeCookies.find(
//     (cadaCookie) => cadaCookie.key === lakeyquebuscamos
//   );
//   return valor ? valor.value : null;
// };
// console.log(obtenMiCookie(miCookie, "username"));
// console.log(obtenMiCookie(miCookie, "password"));
//# sourceMappingURL=index.js.map