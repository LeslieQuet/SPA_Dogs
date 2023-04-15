//Ruta Obtiene un arreglo de objetos, donde cada objeto es la raza de un perro.
const getDogs = require('../controllers/getDogs')

module.exports = async(req, res) => {
    try{
        const getAllDogs = await getDogs();
        res.status(200).json(getAllDogs);
    }
    catch(err){
        res.status(500).json({err: err.message})
    }
}