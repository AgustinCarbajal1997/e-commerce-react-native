import { URL_DATA_USERS } from "../../constants/db";

export const GET_DATA_USER = 'GET_DATA_USER';
export const POST_DATA_USER = 'POST_DATA_USER';

const createArray = (data) => {
    const items = []; 
    Object.keys(data).forEach(key => items.push({ ...data[key] }))
    return items;
}


export const getDataUser = (userId) => {
    return async dispatch => {
        try {
            const response = await fetch(URL_DATA_USERS);
            const data = await response.json();
            console.log(data);

            const arrayItems = createArray(data);


            dispatch({ type: GET_DATA_USER, payload: arrayItems, userId:userId })

        } catch (error) {
            console.log(error)
        }
    }
}
export const postDataUser = (dataUser) => {
    return async dispatch => {
        try {
            const response = await fetch(URL_DATA_USERS,{
                method:"POST",
                headers:{
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    age:dataUser.age,
                    name:dataUser.name,
                    phone:dataUser.phone,
                    userId:dataUser.userId
                })
            })

            console.log(response)

            dispatch({ type:POST_DATA_USER, payload:dataUser })



        } catch (error) {
            console.log(error)
        }
    }
}