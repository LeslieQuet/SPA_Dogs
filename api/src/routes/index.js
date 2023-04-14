const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const getDogs = require('../controllers/getDogs');
const getDogsByName = require('../controllers/getDogsByName');
const getDogsByRaza = require('../controllers/getDogsByRaza');
const getTemperaments= require('../controllers/getTemperaments');
const createADog = require('../controllers/createADog.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/dogs', getDogs);
router.use('/dogs', getDogsByName);
router.use('/dogs/:idRaza', getDogsByRaza);
router.use('/dogs', getTemperaments);
router.use('/dogs', createADog);


module.exports = router;
 