import { LOCALIDADES } from "./constantes.js"
import { obtenerDia, stringMes } from "./funciones/funcionesFecha.js";
import { realizarLlamadaAxios } from "./funciones/funcionesLlamada.js";

const obtenerDiasFechas = (fechas)=>{
    let listaDias = []
    Object.keys(fechas).forEach(key => {
        listaDias.push(obtenerDia(fechas[key]))
    });
    return listaDias;
}

const mostrarTodo = (respuesta)=>{
    const hoy = new Date()
    console.log(`${stringMes(hoy.getMonth())} (Mes actual) `)
    console.log(respuesta[0].data.get_open_days)
    console.log(`${stringMes(hoy.getMonth())} (Mes siguiente) `)
    console.log(respuesta[1].data.get_open_days)
    console.log(`${stringMes(hoy.getMonth())} (Mes siguiente del siguiente) `)
    console.log(respuesta[2].data.get_open_days)
}

const mostarDatosLocalidadLoop= async (localidades) =>{
    for await (let item of localidades){
        const respuesta = await realizarLlamadaAxios(item);
        const hoy = new Date()
        //mostrarTodo(respuesta);
        console.log('------------------------------')
        console.log(`Dias con fechas disponibles ${item.localidad.toUpperCase()}:`)
        //Mes actual
        console.log(`${stringMes(hoy.getMonth())}`)
        let listaDias = obtenerDiasFechas(respuesta[0].data.get_open_days);
        console.log(listaDias);
    
        //Mes siguiente
        //console.log(`\n${stringMes(hoy.getMonth()+1)}`)
        //listaDias = obtenerDiasFechas(respuesta[1].data.get_open_days);
        //console.log(listaDias);
    
        //Dos meses futuro
        //console.log(`\n${stringMes(hoy.getMonth()+2)}`)
        //listaDias = obtenerDiasFechas(respuesta[2].data.get_open_days);
        //console.log(listaDias);
    }
}

const main = async () =>{
    console.log("Inicio programa")
    //Loop con await. El for of funciona el await
    await mostarDatosLocalidadLoop(LOCALIDADES);

    console.log("Fin programa")
}

main()