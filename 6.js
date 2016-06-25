var _ = require('lodash');

var worker = function(list) {
  var grouped = _.groupBy(list, "username");
  var counted = [];
  _.forEach(grouped, function(comments, user, grouped) {
    counted.push({"username": user, "comment_count": _.size(comments)});
  });

  return _.sortBy(counted, "comment_count").reverse();
};

module.exports = worker;
