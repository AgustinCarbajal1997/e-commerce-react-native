import { URL_PRODUCTS } from "../../constants/db";

export const GET_PRODUCTS = 'GET_PRODUCTS';


export const getProducts = () => {
    return async dispatch =>{
        try {
            const response = await fetch(URL_PRODUCTS);
            const data = await response.json();
            // console.log(data);

            dispatch({ type: GET_PRODUCTS, payload: data })

        } catch (error) {
            console.log(error)
        }
    }
}