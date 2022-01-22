import axios from "axios";





export const GET_PICTURES='GET_PICTURES';

export const getPicturesThunk =(currentPage, limitCats, idPats)=>{
    return async dispatch =>{
        const resolve = await axios.get(`https://api.thecatapi.com/v1/images/search?limit=${limitCats}&page=${limitCats}&category_ids=${idPats} `);
        dispatch({
            type:GET_PICTURES,
            payload:resolve['data']
        })
    }
}

