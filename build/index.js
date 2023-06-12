import figlet from "figlet";
import MenuPrincipal from "./controller/menuController";
// import chalk from "chalk"
// console.log("Hola mundo desde el proyecto final de Typescript")
figlet("Proyecto Final", (error, res) => {
    if (error)
        return console.error(error);
    // console.log(res)
});
// chalk.blueBright("Hola mundo desde chalk")
// Primero - Vamos a crear una pantalla de menú principal
// 1 - Saludo -> figlet
// 2 - Opciones -> inquirer
// https://github.com/redspidersoftware/proyectoTypescript
MenuPrincipal();
//# sourceMappingURL=index.js.map