const getTemperaments = require('../controllers/getTemperaments')

module.exports = async (req, res) => {
    try{
        const {temper} = req.query;
        const temperaments = await getTemperaments(temper);
        res.status(200).json(temperaments)
      }
      catch(err){
        res.status(400).json({err: err.message})
      }
}
