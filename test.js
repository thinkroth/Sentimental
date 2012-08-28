var analyze = require('./lib/sentimental').analyze,
    positivity = require('./lib/sentimental').positivity,
    negativity = require('./lib/sentimental').negativity;

an=analyze("Hey you worthless scumbag");
pos=positivity("This is so cool");
neg=negativity("Hey you worthless scumbag");
an_ru=analyze("Чо за хуйня?");
an_ru2=analyze("Ненавижу это гавно");
an_ru3=analyze("Система автоопределения тональности явно недооценена");

console.log(an);
console.log(an_ru);
console.log(an_ru2);
console.log(an_ru3);