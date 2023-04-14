// obtiene el detalle de una raza específica por ID. 
//Devuelve un objeto con la información pedida en el detalle de un perro.
const getDogsByBreed= require('../controllers/getDogsByBreed')

module.exports = (req, res) => {
  const {id} = req.params;
  try{
      const byRaza = getDogsByBreed(id);
      res.status(200).json(byRaza)
    }
    catch(err){
      res.status(400).json({err: err.message})
    }
}