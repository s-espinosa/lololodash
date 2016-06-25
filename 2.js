var _ = require('lodash');

var worker = function(list) {
  return _.sortBy(list, function(list) {
    return -1 * list.quantity;
  });
};

module.exports = worker;
