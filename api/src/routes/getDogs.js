//Ruta Obtiene un arreglo de objetos, donde cada objeto es la raza de un perro.

module.exports = (req, res) => {
    try{
        const getDogs = getDogs();
        res.status(200).json(getDogs);
    }
    catch(err){
        res.status(400).json({err: err.message})
    }
}