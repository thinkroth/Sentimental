var analyze = require('./lib/sentimental').analyze,
    negativity = require('./lib/sentimental').negativity,
    positivity = require('./lib/sentimental').positivity;

kr = "cool beans";
console.log(analyze(kr))

module.exports = {
  analyze    : analyze,
  negativity : negativity,
  positivity : positivity
};
