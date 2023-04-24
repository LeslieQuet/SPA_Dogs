export const GET_DOGS = 'GET_DOGS';
export const GET_DETAIL = 'GET_ DETAIL';
export const GET_BREED_BY_NAME = 'GET_BREED_BY_NAME';
export const GET_TEMPERAMENTS = 'GET_TEMPERAMENTS';
export const GET_BREEDS_BY_TEMPER = 'GET_BREEDS_BY_TEMPER';

export const getDogs = () => {
    return function(dispatch){
        fetch(`http://localhost:3001/dogs`)
            .then((res) => res.json())
            .then((data) => dispatch({type: GET_DOGS, payload: data}))
    }
}

export const getDetail = (id) => {
    return function(dispatch){
        fetch(`http://localhost:3001/dogs/${id}`)
            .then((res) => res.json())
            .then((data) => dispatch({type: GET_DETAIL, payload: data}))
    }
}

export const getBreed = (name) => {
    return function(dispatch){
        fetch(`http://localhost:3001/dogs?name=${name}`)
            .then((res) => res.json())
            .then((data) => dispatch({type: GET_BREED_BY_NAME, payload: data}))
    }
}
    
export const getTemperaments = () => {
    return function(dispatch){
        fetch(`http://localhost:3001/temperaments`)
        .then((res) => res.json())
        .then((data) => dispatch({type: GET_TEMPERAMENTS, payload: data}))
    }
}
export const getBreedsByTemperaments = (temper) => {
    return function(dispatch){
        fetch(`http://localhost:3001/temperaments?temper=${temper}`)
        .then((res) => res.json())
        .then((data) => dispatch({type: GET_BREEDS_BY_TEMPER, payload: data}))
    }
}