module.exports = (req, res) => {
    try{
        const getTemperaments = getTemperaments(edad);
        res.status(200).json(getTemperaments)
      }
      catch(err){
        res.status(400).json({err: err.message})
      }
}