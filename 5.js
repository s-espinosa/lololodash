var _ = require('lodash');

var worker = function(list) {
  var upChained = _.chain(list)
    .sortBy()
    .map(function(word){
      return word.toUpperCase() + "CHAINED";
    })
    .value();

  return upChained;
};

module.exports = worker;
