const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const getDogs = require('./getDogs.js');
const getDogsByName = require('./getDogsByName.js');
const getDogsByRaza = require('./getDogsByRaza.js');
const getTemperaments= require('./getTemperaments.js');
const createADog = require('./createADog.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/dogs', getDogs);
router.use('/dogs', getDogsByName);
router.use('/dogs/:idRaza', getDogsByRaza);
router.use('/dogs', getTemperaments);
router.use('/dogs', createADog);


module.exports = router;
 