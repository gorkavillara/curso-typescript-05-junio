import inquirer from "inquirer"
import { Cliente } from "../models/clientes.js"

const MenuPrincipal = async () => {
    while(true) {
        const response = await inquirer.prompt([
            {
                message: "Elige una opción",
                name: "menuPrincipal",
                type: "list",
                choices: [
                    "1. Crear nuevo cliente",
                    "2. Listar clientes",
                    "3. Actualizar cliente",
                    "4. Eliminar cliente",
                    "5. Salir"
                ]
            }
        ])
        // Si la respuesta es salir -> return
        // Si no, voy a volver a mostrar el prompt
        console.log(response)
        if (response.menuPrincipal === "1. Crear nuevo cliente") {
            // Crearemos un nuevo cliente
        }
        if (response.menuPrincipal === "2. Listar clientes") {
            // Listaremos los clientes que haya en el servidor
            const clientes = await Cliente.obtenClientes()
            // console.log(clientes)
            clientes.forEach((cliente) => {
                console.log(`${cliente.id}. ${cliente.nombre}`)
            })
        }
        if (response.menuPrincipal === "3. Actualizar cliente") {}
        if (response.menuPrincipal === "4. Eliminar cliente") {}
        if (response.menuPrincipal === "5. Salir") return
    }
}

export default MenuPrincipal