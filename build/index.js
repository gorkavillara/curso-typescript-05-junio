var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "dexie"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const dexie_1 = __importDefault(require("dexie"));
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
    };
    const database = window.indexedDB;
    if (database) {
        let db;
        const request = database.open("Usuarios", 2);
        request.onupgradeneeded = () => {
            db = request.result;
            console.log("BBDD creada", db);
        };
    }
    class DatabaseIDB extends dexie_1.default {
        constructor(params) {
            super(params);
        }
    }
    const myDb = new DatabaseIDB("Usuarios");
    console.log({ myDb });
    console.log("Hola mundo");
});
//# sourceMappingURL=index.js.map