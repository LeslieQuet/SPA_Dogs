//Controlador que obtiene el detalle de una raza específica por ID

require('dotenv').config();
const { URL_API, KEY } = process.env;
const axios = require('axios');
const {Dog, Temperament} = require('../db');

const getDogsByBreed = async (id) => {
    if(id < 500){
        const byRaza = await axios.get(`${URL_API}/${id}?api_key=${KEY}`)
        if(Object.entries(byRaza.data).length === 0) throw Error ('Raza inexistente')
        const idBreed = {
            id: byRaza.data.id,
            image: `https://cdn2.thedogapi.com/images/${byRaza.data.reference_image_id}.jpg`,
            name: byRaza.data.name,
            height: byRaza.data.height.metric,
            weight: byRaza.data.weight.metric,
            life_span: byRaza.data.life_span,
            temperament: byRaza.data.temperament,
        }
        return idBreed; 
    }
    else {
        const byRazaDB = await Dog.findByPk(id, {
            include: {
                model: Temperament,
                attributes: ['name'],
                through: {
                    attributes: [],
                },
            }
        })

        let string = '' 
        byRazaDB.Temperaments.map(temper=> {
            string = temper.name + ', '+ string;
            return string;
        })

        return {
            id: byRazaDB.id,
            image: byRazaDB.image,
            name: byRazaDB.name,
            height: byRazaDB.height,
            weight: byRazaDB.weight,
            life_span: byRazaDB.life_span,
            temperament: string,
        } 
    }
};

module.exports = getDogsByBreed;