var ape = {
  hasThumb: true,
  hasTail: false,
  swing: function() {
    return '매달리기'
  }
}

var chimp = Object.create(ape)

var bonobo = Object.create(ape)
bonobo.habitat = '중앙 아프리카'
