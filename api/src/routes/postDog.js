//Ruta para crear posteo de un Dog (con los atributos definidos en la DB)
//Falta definir que devuelve el server;

module.exports = (req, res) => {
    const {image, name, height, weight, years} = req.body;
    try{
        const createADog = createADog();
        res.status(201).json({createADog})
    }
    catch(err){
        res.status(400).json({err: err.message});
    }
}

