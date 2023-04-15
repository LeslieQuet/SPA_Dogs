// obtiene el detalle de una raza específica por ID. 
//Devuelve un objeto con la información pedida en el detalle de un perro.
const getDogsByBreed = require('../controllers/getDogsByBreed');

module.exports = async(req, res) => {
    try{
        const {idRaza} = req.params;
        const byBreed = await getDogsByBreed(idRaza);
        res.status(200).json(byBreed);
    }
    catch(err){
        res.status(400).json({err: err.message})
    }
}

// require('dotenv').config();
// const { URL_API, KEY } = process.env;
// const axios = require('axios');

// module.exports = (req, res) => {
//   const {idRaza} = req.params;
//   axios.get(`${URL_API}/${idRaza}?api_key=${KEY}`)
//   .then((response) => {
//     const {data} = response;
//     res.status(200).json({data})
//   })
// }