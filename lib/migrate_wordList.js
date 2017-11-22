// Transforms old word list format to the new one
// -------------------------------------------------- //

var fs = require('fs');

var neg5 = require('../wordLists/neglist.js').neg5,
    neg4 = require('../wordLists/neglist.js').neg4,
    neg3 = require('../wordLists/neglist.js').neg3,
    neg2 = require('../wordLists/neglist.js').neg2,
    neg1 = require('../wordLists/neglist.js').neg1,
    pos5 = require('../wordLists/poslist.js').pos5,
    pos4 = require('../wordLists/poslist.js').pos4,
    pos3 = require('../wordLists/poslist.js').pos3,
    pos2 = require('../wordLists/poslist.js').pos2,
    pos1 = require('../wordLists/poslist.js').pos1;

var afinn = require('../wordLists/afinn.json');

var result = {};
neg5.forEach(function(t) { if (!(t in afinn)) { result[t] = -5; } else { console.log('Already exist: ', t, afinn[t], -5); } });
neg4.forEach(function(t) { if (!(t in afinn)) { result[t] = -4; } else { console.log('Already exist: ', t, afinn[t], -4); } });
neg3.forEach(function(t) { if (!(t in afinn)) { result[t] = -3; } else { console.log('Already exist: ', t, afinn[t], -3); } });
neg2.forEach(function(t) { if (!(t in afinn)) { result[t] = -2; } else { console.log('Already exist: ', t, afinn[t], -2); } });
neg1.forEach(function(t) { if (!(t in afinn)) { result[t] = -1; } else { console.log('Already exist: ', t, afinn[t], -1); } });
pos1.forEach(function(t) { if (!(t in afinn)) { result[t] = 1; } else { console.log('Already exist: ', t, afinn[t], 1); } });
pos2.forEach(function(t) { if (!(t in afinn)) { result[t] = 2; } else { console.log('Already exist: ', t, afinn[t], 2); } });
pos3.forEach(function(t) { if (!(t in afinn)) { result[t] = 3; } else { console.log('Already exist: ', t, afinn[t], 3); } });
pos4.forEach(function(t) { if (!(t in afinn)) { result[t] = 4; } else { console.log('Already exist: ', t, afinn[t], 4); } });
pos5.forEach(function(t) { if (!(t in afinn)) { result[t] = 5; } else { console.log('Already exist: ', t, afinn[t], 5); } });

console.log(JSON.stringify(result));

Object.assign(afinn, result);

fs.writeFile('wordLists/afinn.json', JSON.stringify(afinn), function (err) {
    if (err) {
	console.log('Error: ', err);
    }
});
