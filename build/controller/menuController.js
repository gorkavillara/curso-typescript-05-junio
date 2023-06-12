var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import inquirer from "inquirer";
const MenuPrincipal = () => __awaiter(void 0, void 0, void 0, function* () {
    while (true) {
        const response = yield inquirer.prompt([
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
        ]);
        // Si la respuesta es salir -> return
        // Si no, voy a volver a mostrar el prompt
        console.log(response);
        if (response.menuPrincipal === "5. Salir")
            return;
    }
});
export default MenuPrincipal;
//# sourceMappingURL=menuController.js.map