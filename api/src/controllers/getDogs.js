//Controlador que obtiene un arreglo de objetos, donde cada objeto es la raza de un perro.

require('dotenv').config();
const { URL_API, KEY } = process.env;
const axios = require('axios');


const getAllDogs = async () => {
    let dogsApi = await axios.get(`${URL_API}?api_key=${KEY}`)
    if(dogsApi)return dogsApi.data;
}        

module.exports = getAllDogs;
 