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



// Calculates the negative sentiment of a sentence
// -------------------------------------------------- //

function negativity (phrase) {
  var addPush = function(t, score){
    hits += score;
    words.push(t);
  };
    
  var noPunctuation = phrase.replace(/[^\w\s]|_/g,"").replace(/\s+/g," "),
      tokens = noPunctuation.toLowerCase().split(" "),
      hits   = 0,
      words  = [];

  tokens.forEach(function(t) {
    if (neg5.indexOf(t) > -1) {
      addPush(t,5);
    } else if (neg4.indexOf(t) > -1) {
      addPush(t,4);
    } else if (neg3.indexOf(t) > -1) {
      addPush(t,3);
    } else if (neg2.indexOf(t) > -1) {
      addPush(t,2);
    } else if (neg1.indexOf(t) > -1) {
      addPush(t,1);
    }
  });

  return {
    score       : hits,
    comparative : hits / tokens.length,
    words       : words
  };
}


// Calculates the positive sentiment  of a sentence
// -------------------------------------------------- //

function positivity (phrase) {
  var addPush = function(t, score){
    hits += score;
    words.push(t);
  };
    
  var noPunctuation = phrase.replace(/[^\w\s]|_/g,"").replace(/\s+/g," "),
      tokens = noPunctuation.toLowerCase().split(" "),
      hits   = 0,
      words  = [];

  tokens.forEach(function(t) {
    if (pos5.indexOf(t) > -1) {
      addPush(t,5);
    } else if (pos4.indexOf(t) > -1) {
      addPush(t,4);
    } else if (pos3.indexOf(t) > -1) {
      addPush(t,3);
    } else if (pos2.indexOf(t) > -1) {
      addPush(t,2);
    } else if (pos1.indexOf(t) > -1) {
      addPush(t,1);
    }
  });

  return {
    score : hits,
    comparative : hits / tokens.length,
    words : words
  };
}


// Calculates overall sentiment
// -------------------------------------------------- //

function analyze (phrase) {

  var pos = positivity(phrase),
      neg = negativity(phrase);

  return {
    score       : pos.score - neg.score,
    comparative : pos.comparative - neg.comparative,
    positive    : pos,
    negative    : neg
  };
}


module.exports = {
  analyze    : analyze,
  negativity : negativity,
  positivity : positivity
};