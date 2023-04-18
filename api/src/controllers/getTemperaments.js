require('dotenv').config();
const { URL_API, KEY } = process.env;
const axios = require('axios');
const {Temperament} = require('../db')

const getTemperaments = async() => {
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
    return toBulkCreate;
};

const saveTemperamentsOnDB = async () => {
    try{
        const allTemperaments = await getTemperaments();
        const savedTempers = await Temperament.bulkCreate(allTemperaments);
        console.log(savedTempers);
        return allTemperaments; 
    }
    catch(error){
        return {error: error.message};
    }
}

module.exports = saveTemperamentsOnDB;
