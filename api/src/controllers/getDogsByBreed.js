//Controlador que obtiene el detalle de una raza específica por ID

require('dotenv').config();
const { URL_API, KEY } = process.env;
const axios = require('axios');

const getDogsByBreed = async (id) => {
    const byRaza = await axios.get(`${URL_API}/${id}?api_key=${KEY}`)
    if(Object.entries(byRaza.data).length === 0) throw Error ('Raza inexistente')
    return byRaza.data; 
};

module.exports = getDogsByBreed;