var _ = require('lodash');

var worker = function(list) {
  grouped = _.groupBy(list, "article");
  totalQuantities = []
  _.each(grouped, function(orders, article, grouped){
    var totalOrders = {article: +article, total_orders: _.sumBy(orders, "quantity")};
    totalQuantities.push(totalOrders);
  })

  return _.sortBy(totalQuantities, "quantity").reverse();
};

module.exports = worker;
