//Controlador que obtiene el detalle de una raza específica por ID

require('dotenv').config();
const { URL_API, KEY } = process.env;
const axios = require('axios');

const getDogsByBreed = async (id) => {
    if(id){    
        return id;
    }
};

module.exports = getDogsByBreed;