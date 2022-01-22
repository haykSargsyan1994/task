import {GET_CATEGORIES} from "../actionCats";


const initialState={
    categories:[]
};


export const CategoryReducer=(state=initialState, action)=>{
    switch (action.type) {
        case GET_CATEGORIES:
            return {
                ...state,
                categories: action.payload
            };
        default:
            return state
    }
};

