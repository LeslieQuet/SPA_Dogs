// obtiene el detalle de una raza específica por ID. 
//Devuelve un objeto con la información pedida en el detalle de un perro.


module.exports = (req, res) => {
    try{
        const {id} = req.param;
        const getDogsByRaza = getDogsByRaza(id);
        res.status(200).json(getDogsByRaza)
      }
      catch(err){
        res.status(400).json({err: err.message})
      }
}