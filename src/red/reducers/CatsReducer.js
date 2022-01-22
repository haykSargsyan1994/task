import {GET_PICTURES} from "../actionPicture";


const initialState={
    pictures:[]
};


export const CatsReducer=(state=initialState, action)=>{
    switch (action.type) {
        case GET_PICTURES:
            return {
                ...state,
                pictures: action.payload
            };
        default:
            return state
    }
};

