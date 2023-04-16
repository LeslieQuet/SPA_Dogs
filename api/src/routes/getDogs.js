//Ruta 
//En /dogs Obtiene un arreglo de objetos, donde cada objeto es la raza de un perro.
//Con query=name trae las razas por nombre


const getDogs = require('../controllers/getDogs')

module.exports = async(req, res) => {
    try{
        const {name} = req.query;
        const getAllDogs = await getDogs(name);
        res.status(200).json(getAllDogs);
    }
    catch(err){
        res.status(400).json({err: err.message})
    }
}