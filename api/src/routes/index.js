const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const getDogs = require('./getDogs');
const getDogsByBreed= require('./getDogsByBreed');
const getTemperaments= require('./getTemperaments');
const postADog = require('./postDog.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.post('/dogs', postADog);
router.get('/dogs', getDogs);
router.get('/dogs/:idRaza', getDogsByBreed);
router.get('/temperaments', getTemperaments);


module.exports = router;
 