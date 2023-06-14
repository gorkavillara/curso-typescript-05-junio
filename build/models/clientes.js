var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axios from "axios";
class Cliente {
    constructor(id, n, e) {
        this.id = id;
        this.nombre = n;
        this.email = e;
        this.activo = true;
    }
    desactivaCliente() {
        this.activo = false;
    }
    static definicion() {
        console.log("Un cliente es un activo valioso para las empresas");
    }
    static obtenClientes() {
        return __awaiter(this, void 0, void 0, function* () {
            const url = "https://97ebb3ca3281.ngrok.app/clients";
            const data = { action: "get" };
            const clientes = yield axios.post(url, data);
            // console.log(clientes.data)
            return clientes.data;
        });
    }
}
Cliente.tipo = "cliente";
Cliente.definicion();
Cliente.tipo;
export { Cliente };
//# sourceMappingURL=clientes.js.map