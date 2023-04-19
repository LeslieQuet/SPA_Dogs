//Ruta para crear posteo de un Dog (con los atributos definidos en la DB)
//Falta definir que devuelve el server;
const createADog = require('../controllers/createADog')

//FALTAN validaciones de atributos

module.exports = async (req, res) => {
    const {image, name, height, weight, years, temperaments} = req.body;
    try{
        const newDog = await createADog(image, name, height, weight, years, temperaments);
        res.status(200).json({newDog})
    }
    catch(err){
        res.status(400).json({err: err.message});
    }
}

