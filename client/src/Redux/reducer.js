import { GET_DETAIL, GET_DOGS, GET_BREED_BY_NAME } from "./actions";

const initialState = {
    breeds: [],
    detail: [],
    queryBreeds: []
}

const rootReducer = (state=initialState, action) => {
    switch(action.type){
        case GET_DOGS:
            return {...state, breeds: action.payload};
        case GET_DETAIL:
            return {...state, detail: action.payload}
        case GET_BREED_BY_NAME:
            return {...state, breeds: action.payload}
        default :
            return {...state};
    }
};

export default rootReducer;