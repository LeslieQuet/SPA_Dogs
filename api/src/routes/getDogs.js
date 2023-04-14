//Ruta Obtiene un arreglo de objetos, donde cada objeto es la raza de un perro.
const getDogs = require('../controllers/getDogs')

module.exports = (req, res) => {
    try{
        const getAllDogsByRaza = getDogs();
        res.status(200).json(getAllDogsByRaza);
    }
    catch(err){
        res.status(400).json({err: err.message})
    }
}