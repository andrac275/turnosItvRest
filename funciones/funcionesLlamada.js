import { INSTANT_CODE, LOCALIDADES, ONDARA, TORREVIEJA } from "../constantes.js";
import { obtenerFechaFormateada } from "./funcionesFecha.js";
import axios from "axios";
import { BASE_URL,MONTH_DATA } from "../constantes.js";

const obtenerService = (localidad)=>{
    if(localidad==ONDARA){
        return LOCALIDADES[ONDARA].service
    }else if (localidad == TORREVIEJA){
        return LOCALIDADES[TORREVIEJA].service
    }else{
        return 'Error Service'
    }
}

const obtenerStore = (localidad)=>{
    if(localidad==ONDARA){
        return LOCALIDADES[ONDARA].store
    }else if (localidad == TORREVIEJA){
        return LOCALIDADES[TORREVIEJA].store
    }else{
        return 'Error Store'
    }
}

/**
 * Esto es una lista de objetos, cada objeto map, tiene los datos necesarios
 * "form" que se pasan a axios
 * @param {*} localidad 
 * @param {*} fechas 
 * @returns 
 */
const obtenerDatosLlamada = (localidad, fechas)=>{
    let datosLlamadaLista = [];

    fechas.forEach((fecha)=>{
        const datosLlamada = new Map();
        datosLlamada.set('instanceCode', INSTANT_CODE);
        datosLlamada.set('service',obtenerService(localidad));
        datosLlamada.set('firstCall','false');
        datosLlamada.set('store',obtenerStore(localidad));
        datosLlamada.set('date',fecha);
        datosLlamadaLista.push(datosLlamada);
    })
    
    return datosLlamadaLista;
}


const axiosCall = async (datosLlamada) =>{
    //Cargar los --form
    let formData = new FormData();
    datosLlamada.forEach((value, key)=>{    
        formData.append(key,value);
    });
    
    //Cargar los --headers
    let headers = {
        headers: {
          header1: 'Content-Type: multipart/form-data',
          header2: 'User-Agent: insomnia/9.3.3'
        }
      }


    const urlLlamada = `${BASE_URL}${MONTH_DATA}`

    //Realizar la llamada
    return await axios.post(urlLlamada, formData, headers)
}

export const realizarLlamadaAxios = async (localidad)=>{
    const fechaMesesSiguientesFormateada = obtenerFechaFormateada();
    const datosLlamada = obtenerDatosLlamada(localidad, fechaMesesSiguientesFormateada);
    const respuesta = []
    respuesta.push (await axiosCall(datosLlamada[0]));
    respuesta.push (await axiosCall(datosLlamada[1]));
    respuesta.push (await axiosCall(datosLlamada[2]));
    return respuesta;
}