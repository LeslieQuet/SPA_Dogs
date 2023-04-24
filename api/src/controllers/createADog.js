const {Dog} = require('../db')

const createDogs = async (image, name, height, weight, life_span, temperaments) => {
    let newDog = await Dog.create({image, name, height, weight, life_span});
    newDog.addTemperament(temperaments);
    return newDog;
};

module.exports = createDogs;