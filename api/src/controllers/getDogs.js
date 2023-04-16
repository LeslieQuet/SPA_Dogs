//Controlador que obtiene un arreglo de objetos, donde cada objeto es la raza de un perro. 
//Si recibe por query un name trae las conincidencias por nombre

require('dotenv').config();
const { URL_API, URL_API_Q, KEY } = process.env;
const axios = require('axios');


const getAllDogs = async (name) => {
    if(name){
        const byName = await axios.get(`${URL_API_Q}${name}`)
        if(Object.entries(byName.data).length === 0) throw Error ('No hay concidencias de raza')
        return byName.data; 
    }
    else {
        let dogsApi = await axios.get(`${URL_API}?api_key=${KEY}`)
        if(dogsApi)return dogsApi.data;
    }
}        

module.exports = getAllDogs;
 