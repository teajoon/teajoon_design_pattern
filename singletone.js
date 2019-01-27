var MyApp = MyApp || {}

MyApp.wildlifePreserveSimulator = (function () {
  var animal = []

  return {
    addAnimal: function(animalMaker, species, sex) {
      animals.push(animalMaker.make(species, sex))
    },
    getAnimalCount: function () {
      return animals.length
    }
  }
})

MyApp.wildlifePreserveSimulator.addAnimal(realAnimalMaker, gorilla, female)