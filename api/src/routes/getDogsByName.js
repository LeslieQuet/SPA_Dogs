//Obtiene todas aquellas razas de perros que coinciden con el nombre recibido por query
const getDogsByName = require('../controllers/getDogsByName')

module.exports = (req, res) => {
    try{
        const {name} = req.query;
        const byName = getDogsByName(name);
        res.status(200).json(byName)
    }
        catch(err){
        res.status(400).json({err: err.message})
    }
}