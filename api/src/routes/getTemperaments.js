const getTemperaments = require('../controllers/getTemperaments')

module.exports = (req, res) => {
    try{
        const allTemperaments = getTemperaments(edad);
        res.status(200).json(allTemperaments)
      }
      catch(err){
        res.status(400).json({err: err.message})
      }
}