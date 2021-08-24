import { URL_BUY_PRODUCTS } from "../../constants/db";

export const ADD_CART = "ADD_CART";
export const ADD_QUANTITY = "ADD_QUANTITY";
export const DELETE_QUANTITY = "DELETE_QUANTITY";
export const BUY_PRODUCTS = "BUY_PRODUCTS";

export const addToCart = (item) => ({
    type:ADD_CART,
    payload:item
})

export const addQuantity = (id) => ({
    type: ADD_QUANTITY,
    payload:id
})

export const deleteQuantity = (id) => ({
    type:DELETE_QUANTITY,
    payload:id
})

export const buyProductsOfCart = (purchaseDetails) => {
    return async dispatch => {
        try {
            const response = await fetch(URL_BUY_PRODUCTS,{
                method:"POST",
                headers:{
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({
                    date: new Date().toLocaleDateString(),
                    total:purchaseDetails.total,
                    userId:purchaseDetails.userId
                })
            })

            

            dispatch({ type:BUY_PRODUCTS })

        } catch (error) {
            console.log(error)
        }
    }
}