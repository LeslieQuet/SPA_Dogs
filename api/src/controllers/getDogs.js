//Controlador que obtiene un arreglo de objetos, donde cada objeto es la raza de un perro. 
//Si recibe por query un name trae las conincidencias por nombre

require('dotenv').config();
const { URL_API, URL_API_Q, KEY } = process.env;
const axios = require('axios');
const {Dog, Temperament} = require('../db');

const dogsGetter = async (name) => {
    //Si recibe query hace la solicitud a la api con la query
    if(name){
        const breedByQuery = await axios.get(`${URL_API_Q}${name}`)
        if(Object.entries(breedByQuery.data).length === 0) throw Error ('No hay concidencias de raza')
        const breedByName = breedByQuery.data.map(breed=>{
            return {
                id: breed.id,
                image: `https://cdn2.thedogapi.com/images/${breed.reference_image_id}.jpg`,
                name: breed.name,
                height: breed.height.metric,
                weight: breed.weight.metric,
                life_span: breed.life_span,
                temperament: breed.temperament,
            }
        })
        return breedByName; 
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

    const dbDogs = allDogsDB.map(dog=>{
        let string = '' 
        dog.Temperaments.map(temper=> {
            string = temper.name + ', '+ string;
            return string;
        })
        return {
            id: dog.id,
            image: dog.image,
            name: dog.name,
            height: dog.height,
            weight: dog.weight,
            life_span: dog.life_span,
            temperament: string,
        } 
    })

    const apiDogs = allDogsApi.data.map(dog=>{
        return {
            id: dog.id,
            image: `https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`,
            name: dog.name,
            height: dog.height.metric,
            weight: dog.weight.metric,
            life_span: dog.life_span,
            temperament: dog.temperament,
        }
    })    
    const allDogs = dbDogs.concat(apiDogs);
    return allDogs;
    }
}
    
module.exports = dogsGetter;
 