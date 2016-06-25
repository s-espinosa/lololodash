var _ = require('lodash');

var worker = function(income) {
  var averageIncome = _.sumBy(income, "income")/income.length;
  var underperformers = _.filter(income, function(performer) {
      return performer["income"] <= averageIncome;
    })
  underperformers = _.sortBy(underperformers, "income");
  var overperformers = _.filter(income, function(performer) {
      return performer["income"] > averageIncome;
    })
  overperformers = _.sortBy(overperformers, "income");

  return {
    "average": averageIncome,
    "underperform": underperformers,
    "overperform": overperformers
  }
};

module.exports = worker;
