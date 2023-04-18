const {Dog} = require('../db')

const createDogs = async (image, name, height, weight, years, temperaments) => {
    var newDog = await Dog.create(image, name, height, weight, years);
    newDog.addTemperament(temperaments);
    return newDog;
};

module.exports = createDogs;