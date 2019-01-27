function Marsupial(name, nocturnal) {
  if (!(this instanceof Marsupial)) {
    return new Marsupial(name, nocturnal)
  }
  this.name = name
  this.isNocturnal = nocturnal

  this.isAwake = function(isNight) {
    return isNight === this.isNocturnal
  }
}

Marsupial.prototype.isNotAwake = function(isNight) {
  return isNight !== this.isNocturnal
}

var maverick = new Marsupial('매버릭', true)
var slider = new Marsupial('슬라이더', false)

