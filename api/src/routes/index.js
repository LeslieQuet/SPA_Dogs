const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const getDogs = require('./getDogs');
const getDogsByName = require('./getDogsByName');
const getDogsByBreed= require('./getDogsByBreed');
const getTemperaments= require('./getTemperaments');
const createADog = require('./postDog.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/dogs/:idRaza', getDogsByBreed);
router.use('/dogs', getDogs);
router.use('/dogs', getDogsByName);
router.use('/dogs', getTemperaments);
router.use('/dogs', createADog);


module.exports = router;
 