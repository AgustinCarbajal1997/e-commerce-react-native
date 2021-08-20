import { URL_LOGIN, URL_SIGNUP } from "../../constants/url"

export const SIGNUP = 'SIGNUP';
export const LOGIN = 'LOGIN';


const errorMessages = {
    INVALID_EMAIL: 'Email inválido',
    EMAIL_EXISTS: 'Email ya se encuentra registrado',
};


export const signup = (email, password) => {
    return async dispatch => {
        const response = await fetch(URL_SIGNUP,{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                email,
                password,
                returnSecureToken:true
            })
        });

        if(!response.ok) {
            const data = await response.json();
            const errorCode = data.error.message;
            const errorMessage = errorCode in errorMessages 
                ? errorMessages[errorCode]
                : "No se ha podido registrar"
            
            throw new Error(errorMessage);
        }

        const data = await response.json();
        console.log(data)
        dispatch({ type: SIGNUP, token: data.idToken, user: data.localId})
        
    }
}

export const login = (email, password) => {
    return async dispatch => {
        const response = await fetch(URL_LOGIN,{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                email,
                password,
                returnSecureToken:true
            })
        })

        if(!response.ok) throw new Error("Ocurrio un error, no se pudo acceder");

        const data = await response.json();
        console.log(data)
        dispatch({ type: LOGIN, token: data.idToken, user:data.localId })

    }
}


