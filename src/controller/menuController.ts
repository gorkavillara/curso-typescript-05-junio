import inquirer from "inquirer"

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
        if (response.menuPrincipal === "5. Salir") return
    }
}

export default MenuPrincipal