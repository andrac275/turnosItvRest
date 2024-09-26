/**
 * Devuelve el mes 
 */
export const stringMes = (numMes)=>{
    switch (numMes) {
        case 0:
            return 'Enero';
        case 1:
            return 'Febrero';
        case 2:
            return 'Marzo';
        case 3:
            return 'Abril';
        case 4:
            return 'Mayo';
        case 5:
            return 'Junio';
        case 6:
            return 'Julio';
        case 7:
            return 'Agosto';
        case 8:
            return 'Septiembre';
        case 9:
            return 'Octubre';
        case 10:
            return 'Noviembre';
        case 11:
            return 'Diciembre';
        default:
            return 'Error Mes';
    }
    
}

/**
 * Dada una fecha en formato YYYY-MM-DD, devuelve el
 * dia DD.
 * @param {*} fecha 
 */
export const obtenerDia = (fecha)=>{
    return fecha.slice(8);
}
/**
 * Dado un año y el mes (Enero = 0, Feb=1, Diciembre=11), 
 * se le suma 1 para que sea un "mes" mas natural
 * Si se pasa del mes 12, devuelve el año siguiente
 * @param {*} anyo 
 * @param {*} month 
 * @returns 
 */
const obtenerAnyo = (anyo, month) =>{
    let aux = (month + 1)
    if(aux > 12){
        return (anyo + 1).toString();
    } 
    return anyo.toString();
}

/**
 * Dado un año y el mes (Enero = 0, Feb=1, Diciembre=11), 
 * se le suma 1 para que sea un "mes" mas natural
 * Si se pasa del mes 12, devuelve el módulo de dicho mes
 * @param {*} month 
 * @returns 
 */
const obtenerMesFormateado= (month) =>{
    let aux = (month + 1)
    if(aux > 12){
        aux = aux % 12;
    } 

    aux = aux.toString();
    if(aux.length < 2){
        //Poner cero por la izquierda si el mes es del 1 al 9.
        aux = '0' + aux;
    }
    return aux;
}

export const obtenerFechaFormateada = () =>{
    let fechaMesesSiguientes = [];
    let now = new Date();
    let anyo = now.getFullYear();
    let mes = now.getMonth();
    //Mes actual
    const fechaFormateada =`${obtenerAnyo(anyo,mes)}-${obtenerMesFormateado(mes)}-01`;
    fechaMesesSiguientes.push(fechaFormateada)
    //Mes siguiente
    const fechaFormateada2 =`${obtenerAnyo(anyo,mes + 1)}-${obtenerMesFormateado(mes + 1)}-01`;
    fechaMesesSiguientes.push(fechaFormateada2)
    //Dos meses futuro
    const fechaFormateada3 =`${obtenerAnyo(anyo,mes + 2)}-${obtenerMesFormateado(mes + 2)}-01`;
    fechaMesesSiguientes.push(fechaFormateada3)
    
    return fechaMesesSiguientes;
}