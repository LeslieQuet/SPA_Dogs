import { GET_DETAIL, GET_DOGS, GET_BREED_BY_NAME, GET_TEMPERAMENTS, GET_BREEDS_BY_TEMPER } from "./actions";

const initialState = {
    breeds: [],
    detail: [],
    temperaments: []    
}

const rootReducer = (state=initialState, action) => {
    switch(action.type){
        case GET_DOGS:
            return {...state, breeds: action.payload};
        case GET_DETAIL:
            return {...state, detail: action.payload}
        case GET_BREED_BY_NAME:
            return {...state, breeds: action.payload}
        case GET_TEMPERAMENTS:
            return {...state, temperaments: action.payload}
        case GET_BREEDS_BY_TEMPER:
            return {...state, breeds: action.payload}
        default :
            return {...state};
    }
};

export default rootReducer;