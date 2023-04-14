// obtiene el detalle de una raza específica por ID. 
//Devuelve un objeto con la información pedida en el detalle de un perro.
const getDogsByRaza = require('../controllers/getDogsByRaza')

module.exports = (req, res) => {
    try{
        const {id} = req.param;
        const byRaza = getDogsByRaza(id);
        res.status(200).json(byRaza)
      }
      catch(err){
        res.status(400).json({err: err.message})
      }
}