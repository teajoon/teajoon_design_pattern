// 임의 모듈 생성
var MyApp = MyApp || {}

MyApp.wildlifePreserveSimulator = function (animalMaker) {
  var animal = []
  return {
    addAnimal: function(spaces, sex) {
      animals.push(animalMaker.make(species, sex))
    },
    getAnimalCount: function () {
      return animals.length
    }
  }
}

var preserve = MyApp.wildlifePreserveSimulator(realAnimalMaker)
preserve.addAnimal(gorilla, female)