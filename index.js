import { TORREVIEJA, ONDARA } from "./constantes.js"
import { realizarLlamadaAxios } from "./funciones/funcionesLlamada.js";


const main = async () =>{
    console.log("Inicio programa")

const llamadaAxios = await realizarLlamadaAxios(TORREVIEJA);
console.log(llamadaAxios.data.get_open_days)

console.log("Fin programa")
}

main()