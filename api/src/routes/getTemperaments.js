const getTemperaments = require('../controllers/getTemperaments')

module.exports = async (req, res) => {
    try{
        const bulkAllTemperaments = await getTemperaments();
        console.log(bulkAllTemperaments);
        res.status(200).json(bulkAllTemperaments)
      }
      catch(err){
        res.status(400).json({err: err.message})
      }
}
