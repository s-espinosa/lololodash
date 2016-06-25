var _ = require('lodash');

var worker = function(cities) {
  var hot = [];
  var warm = [];

  _.forEach(cities, function(temps, city, _cities){
    var hotTest = _.every(temps, function(temp) {
      return temp > 19;
    })

    var warmTest = _.some(temps, function(temp) {
      return temp > 19;
    })

    if (hotTest) {
      hot.push(city);
    } else if (warmTest) {
      warm.push(city);
    }
  });

  return {hot: hot, warm: warm};
};

module.exports = worker;
