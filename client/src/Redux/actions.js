export const GET_DOGS = 'GET_DOGS';
export const GET_DETAIL = 'GET_ DETAIL';
export const GET_BREED_BY_NAME = 'GET_BREED_BY_NAME';

export const getDogs = () => {
    return function(dispatch){
        fetch(`http://localhost:3001/dogs`)
            .then((res) => res.json())
            .then((data) => dispatch({type: GET_DOGS, payload: data})
        )
    }
}

export const getDetail = (id) => {
    return function(dispatch){
        fetch(`http://localhost:3001/dogs/${id}`)
            .then((res) => res.json())
            .then((data) => dispatch({type: GET_DETAIL, payload: data})
        )
    }
}

export const getBreed = (name) => {
    console.log("me ejecuté")
    return function(dispatch){
        fetch(`http://localhost:3001/dogs?name=${name}`)
            .then((res) => res.json())
            .then((data) => dispatch({type: GET_BREED_BY_NAME, payload: data})
        )
    }
}