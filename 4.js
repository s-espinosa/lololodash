var _ = require('lodash');

var worker = function(cities) {
  var hot = [];
  var warm = [];

  _.forEach(Object.keys(cities), function(key) {
    var hotTest = _.every(cities[key], function(temp){
      return temp > 19;
    });

    var warmTest = _.some(cities[key], function(temp) {
      return temp > 19;
    });

    if (hotTest) {
      hot.push(key);
    } else if (warmTest){
      warm.push(key);
    }
  })

  return {hot: hot, warm: warm}
};

module.exports = worker;
