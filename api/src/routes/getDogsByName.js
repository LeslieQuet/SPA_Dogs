//Obtiene todas aquellas razas de perros que coinciden con el nombre recibido por query

module.exports = (req, res) => {
    try{
        const {name} = req.query;
        const getDogsByName = getDogsByName(name);
        res.status(200).json(getDogsByName)
    }
        catch(err){
        res.status(400).json({err: err.message})
    }
}