var _ = require('lodash')

var bands = [
  {
    name: 'delta'
  , min: 0
  , max: 4
  }
  , {
    name: 'theta'
  , min: 4
  , max: 7
  }
  , {
    name: 'alpha'
  , min: 8
  , max: 15
  }
  , {
    name: 'beta'
  , min: 16
  , max: 31 
  }
  , {
    name: 'gamma'
  , min: 32 
  , max: 256
  }
]

module.exports = function (stream, bandName) {
  var band = _.first(_.filter(bands, 'name', bandName))
  var bp = function (list) {
    return _.slice(list, band.min, band.max)
  }
  return stream.map(bp)
}
