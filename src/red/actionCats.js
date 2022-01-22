import axios from "axios";





export const GET_CATEGORIES='GET_CATEGORIES';

export const getPhotosThunk =()=>{
    return async dispatch =>{
        const resolve = await axios.get(`https://api.thecatapi.com/v1/categories `);
        dispatch({
            type:GET_CATEGORIES,
            payload:resolve['data']
        })
    }
}

