export const ADD_CART = "ADD_CART";
export const ADD_QUANTITY = "ADD_QUANTITY";
export const DELETE_QUANTITY = "DELETE_QUANTITY"


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