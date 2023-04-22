import { GET_DOGS } from "./actions";

const initialState = {
    breeds: [],
}

const rootReducer = (state=initialState, action) => {
    switch(action.type){
        case GET_DOGS:
            return {...state, breeds: action.payload}
        default :
            return {...state};
    }
};

export default rootReducer;