import { GET_DETAIL, GET_DOGS } from "./actions";

const initialState = {
    breeds: [],
    detail: []
}

const rootReducer = (state=initialState, action) => {
    switch(action.type){
        case GET_DOGS:
            return {...state, breeds: action.payload};
        case GET_DETAIL:
            return {...state, detail: action.payload}
        default :
            return {...state};
    }
};

export default rootReducer;