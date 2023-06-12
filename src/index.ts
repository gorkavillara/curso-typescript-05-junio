import Dexie from "dexie"

const userInput = document.querySelector(
  "input#input-username"
) as HTMLInputElement | null;
const passwordInput = document.querySelector(
  "input#input-password"
) as HTMLInputElement | null;

const userForm = document.querySelector("form") as HTMLFormElement;

userForm.onsubmit = (event) => {
  event.preventDefault();
  if (!userInput || !passwordInput) return;

  console.log("Estoy en el evento");
  const username = userInput.value;
  const password = passwordInput.value;
};

const database = window.indexedDB

if (database) {
  let db: IDBDatabase;
  const request = database.open("Usuarios", 2)

  request.onupgradeneeded = () => {
    db = request.result
    console.log("BBDD creada", db)
  }


}

class DatabaseIDB extends Dexie {
  constructor(params: string) {
    super(params)
  }
}

const myDb = new DatabaseIDB("Usuarios")

console.log({ myDb })
console.log("Hola mundo")