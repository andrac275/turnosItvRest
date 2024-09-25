const obtenerAnyo = (anyo, month) =>{
    let aux = (month + 1)
    if(aux > 12){
        return (anyo + 1).toString();
    } 
    return anyo.toString();
}

const obtenerMesFormateado= (month) =>{
    let aux = (month + 1)
    if(aux == 13){
        aux = 1;
    } else if(aux == 14){
        aux = 2;
    } else if(aux == 15){
        aux = 3;
    }

    aux = aux.toString();
    if(aux.length < 2){
        //Poner cero por la izquierda
        aux = '0' + aux;
    }
    return aux;
}

export const obtenerFechaFormateada = () =>{
    let mesesSiguientes = [];
    let now = new Date();
    let anyo = now.getFullYear();
    let mes = now.getMonth();
    const fechaFormateada =`${obtenerAnyo(anyo,mes)}-${obtenerMesFormateado(mes)}-01`;
    mesesSiguientes.push(fechaFormateada)
    const fechaFormateada2 =`${obtenerAnyo(anyo,mes + 1)}-${obtenerMesFormateado(mes + 1)}-01`;
    mesesSiguientes.push(fechaFormateada2)
    const fechaFormateada3 =`${obtenerAnyo(anyo,mes + 2)}-${obtenerMesFormateado(mes + 2)}-01`;
    mesesSiguientes.push(fechaFormateada3)
    
    console.log(mesesSiguientes)
    return fechaFormateada;
}