//Ruta para crear posteo de un Dog (con los atributos definidos en la DB)
//Falta definir que devuelve el server;
const createADog = require('../controllers/createADog')

module.exports = (req, res) => {
    const {image, name, height, weight, years} = req.body;
    try{
        const postADog = createADog();
        res.status(201).json({postADog})
    }
    catch(err){
        res.status(400).json({err: err.message});
    }
}

