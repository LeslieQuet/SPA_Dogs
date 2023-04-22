export const GET_DOGS = 'GET_DOGS';

export const getDogs = () => {
    return function(dispatch){
        fetch(`http://localhost:3001/dogs`)
            .then((res) => res.json())
            .then((data) => dispatch({type: GET_DOGS, payload: data})
        )
    }
}

// export const getDogs= () => {
//     return {type: GET_DOGS, payload: [{id: 1, name: "Dálmata", temperments: "Leal"}, {id: 2, name: "Labrador", temperments: "Amigable"} ]};
// }