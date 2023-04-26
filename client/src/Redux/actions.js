export const GET_DOGS = 'GET_DOGS'
export const GET_DETAIL = 'GET_ DETAIL'
export const GET_BREED_BY_NAME = 'GET_BREED_BY_NAME'
export const GET_TEMPERAMENTS = 'GET_TEMPERAMENTS'
export const GET_BREEDS_BY_TEMPER = 'GET_BREEDS_BY_TEMPER'
export const ORDERED_BY_NAME = 'ORDERED_BY_NAME'
export const ORDERED_BY_WEIGHT = 'ORDERED_BY_WEIGHT'
export const CREATE_A_BREED = 'CREATE_A_BREED'

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

export const orderedByName = (value) => {
    return { type: ORDERED_BY_NAME, payload: value }
}

export const orderedByWeight = (value) => {
    return { type: ORDERED_BY_WEIGHT, payload: value }
}

export const createABreed = (breedData) => {
    return (dispatch) => {
      return postData(breedData)
        .then(response => dispatch({type: CREATE_A_BREED, payload: response}))
        .catch(error => {
            console.error('Error al intentar crear la nueva raza: ', error);
        });
    };
  };


const postData = async (breedData) => {
    try{
        const response = await fetch(`http://localhost:3001/dogs`,{
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache', 
            credentials: 'same-origin', 
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow', 
            referrerPolicy: 'no-referrer', 
            body: JSON.stringify(breedData) 
        });
        return response.json(); 
    } catch (error) {
        console.error('Error al realizar la solicitud: ', error);
        throw error;
    }
}