require('dotenv').config();
const { URL_API, KEY } = process.env;
const axios = require('axios');
const {Temperament} = require('../db')

const getTemperaments = async(temper) => {
    //Si recibe un temper por query devuelve las razas que incluyen ese temperamento
    if(temper){
        let apiData = await axios.get(`${URL_API}?api_key=${KEY}`);
        let breedsData = apiData.data;

        let breedsByTemp = [];

        breedsData.forEach(breed => {
            if(breed.temperament != undefined){
                let stringArray = breed.temperament.split(', ');
                if(stringArray.includes(temper)){
                    breedsByTemp.push(breed);
                }
            }
        });

        const dogsByTemp = breedsByTemp.map(breed=>{
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
        return dogsByTemp;
    }
    
    //Si la BD tiene temps los envía [{name + id}]
    const temperamentsDb = await Temperament.findAll();
    if (temperamentsDb.length >= 1) return temperamentsDb;

    //Si la BD no tiene temps los trae de la Api y los Bulkea en la tabla de la BD
    let apiData = await axios.get(`${URL_API}?api_key=${KEY}`);
    let breedsData = apiData.data;

    const temperamentsSet = new Set();
    breedsData.forEach(breed => {
        if(breed.temperament != undefined){
            let stringArray = breed.temperament.split(', ');
            stringArray.forEach(temperament => temperamentsSet.add(temperament))
        }
    });
    const toBulkCreate = [];
    temperamentsSet.forEach(temp =>{
        toBulkCreate.push({"name":temp})
    })
    const savedTempers = await Temperament.bulkCreate(allTemperaments);
    return savedTempers;
};

const saveTemperamentsOnDB = async (temper) => {
    try{
        const allTemperaments = await getTemperaments(temper);
        return allTemperaments; 
    }
    catch(error){
        return {error: error.message};
    }
}

module.exports = saveTemperamentsOnDB;
