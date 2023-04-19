//Controlador que obtiene un arreglo de objetos, donde cada objeto es la raza de un perro. 
//Si recibe por query un name trae las conincidencias por nombre

require('dotenv').config();
const { URL_API, URL_API_Q, KEY } = process.env;
const axios = require('axios');
const {Dog, Temperament} = require('../db');

const dogsGetter = async (name) => {
    if(name){
        const breedByName = await axios.get(`${URL_API_Q}${name}`)
        if(Object.entries(breedByName.data).length === 0) throw Error ('No hay concidencias de raza')
        return breedByName.data; 
    }
    else {
        const allDogsApi = await axios.get(`${URL_API}?api_key=${KEY}`)
        const allDogsDB = await Dog.findAll({
            include: {
                model: Temperament,
                attributes: ['name'],
                through: {
                    attributes: [],
                },
            }
        })
    const allDogs = allDogsDB.concat(allDogsApi.data);
    return allDogs;
    }
}
    
module.exports = dogsGetter;
 