export const GET_DOGS = 'GET_DOGS';
export const GET_DETAIL = 'GET_ DETAIL';

export const getDogs = () => {
    return function(dispatch){
        fetch(`http://localhost:3001/dogs`)
            .then((res) => res.json())
            .then((data) => dispatch({type: GET_DOGS, payload: data})
        )
    }
}

export const getDetail= (id) => {
    return function(dispatch){
        fetch(`http://localhost:3001/dogs/${id}`)
            .then((res) => res.json())
            .then((data) => dispatch({type: GET_DETAIL, payload: data})
        )
    }
}