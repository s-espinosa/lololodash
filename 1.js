var _ = require('lodash');

var worker = function(list) {
  var filtered = _.filter(list, {active: true});
  return filtered;
};

module.exports = worker;
