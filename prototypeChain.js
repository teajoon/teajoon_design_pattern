var primate = {
  stereoscopicVision: true
}

var ape = Object.create(primate)
ape.hasTail = true
ape.hasThumbs = false
ape.swing = function () {
  return '매달리기'
}

var chimp = Object.create(ape)


// 성능에 좋지 않다!

