var analyze = require('./lib/sentimental').analyze,
    positivity = require('./lib/sentimental').positivity,
    negativity = require('./lib/sentimental').negativity;

an=analyze("Hey you worthless scumbag"); //Score: -6, Comparative:-1.5
pos=positivity("This is so cool"); //Score: 1, Comparative:.25
neg=negativity("Hey you worthless scumbag"); //Score: 6, Comparative:1.5

console.log(an);
