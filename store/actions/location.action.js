export const GET_LOCATION = 'GET_LOCATION';


export const getLogation = (coords) => {
    return async dispatch => {
        try {
            const response = await fetch(`https://apis.datos.gob.ar/georef/api/ubicacion?lat=${coords.lat}&lon=${coords.lng}`);

            

            const data = await response.json();
            
            let shippingMessage;
            
            // determino el lugar de envio para dejar un mensaje del metodo y tiempo de envio
            if(data.ubicacion.provincia.nombre === null){
                shippingMessage = "Envío internacional DHL"
            }else if(data.ubicacion.provincia.nombre === "Ciudad Autónoma de Buenos Aires"){
                shippingMessage = "Envío Capital Full express 24hs"
            }else{
                shippingMessage = `Envio normal a ${data.ubicacion.provincia.nombre} en 72hs`
            }
            console.log(shippingMessage)
            dispatch({ type:GET_LOCATION, payload:shippingMessage })

            
        } catch (error) {
            console.log(error)
        }
        

    }
}