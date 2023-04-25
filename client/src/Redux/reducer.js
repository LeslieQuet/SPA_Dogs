import { GET_DETAIL, GET_DOGS, GET_BREED_BY_NAME, GET_TEMPERAMENTS, GET_BREEDS_BY_TEMPER, ORDERED_BY_NAME, ORDERED_BY_WEIGHT } from "./actions";

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
            console.log(action.payload)
            return {...state, breeds: action.payload}
        case GET_TEMPERAMENTS:
            return {...state, temperaments: action.payload}
        case GET_BREEDS_BY_TEMPER:
            return {...state, breeds: action.payload}
        case ORDERED_BY_NAME:
            let orderedByName = action.payload === 1 ? 
            state.breeds.sort(function (a, b) {
                        console.log('pasé x name 1');                
                        if (a.name > b.name) return 1;
                        if (a.name < b.name) return -1;
                        return 0;
                }):
                    state.breeds.sort(function (a, b) {
                        console.log('pasé x name 2');                
                        if (a.name < b.name) return 1;
                        if (a.name > b.name) return -1;
                        return 0;
                }); 
                console.log(orderedByName)
            return {...state, breeds: orderedByName, completed: true}
        case ORDERED_BY_WEIGHT:
                let orderedByWeight = action.payload === 3 ?
                state.breeds.sort(function (a, b) {
                    console.log('pasé x peso 3');                
                    return Number(a.weight.split(" - ")[0]) - Number(b.weight.split(" - ")[0])
                }):
                state.breeds.sort(function (a, b) {
                    console.log('pasé x peso 4');                
                    return Number(a.weight.split(" - ")[1]) - Number(b.weight.split(" - ")[1])
            }).reverse();
            return {...state, breeds: orderedByWeight, completed: true}
        default :
            return {...state};
    }
};


export default rootReducer;