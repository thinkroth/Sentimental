var afinn = require('../wordLists/afinn.json');
var assign = require('lodash/assign');

var tokenizeWithNoPunctuation = function (phrase) {
  var noPunctuation = phrase.replace(/[^a-zA-Z ]+/g, ' ').replace('/ {2,}/',' ');
  return noPunctuation.toLowerCase().split(" ");
};

// Calculates the negative sentiment of a sentence
// -------------------------------------------------- //

function negativity (phrase, inject) {
  validateInjection(inject);
  var addPush = function(t, score){
    hits -= score;
    words.push(t);
  };

  var tokens = tokenizeWithNoPunctuation(phrase),
      hits   = 0,
      words  = [];

  tokens.forEach(function(t) {
    if (afinn.hasOwnProperty(t)) {
      if (afinn[t] < 0){
        addPush(t, afinn[t]);
      }
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

function positivity (phrase, inject) {
  validateInjection(inject);
  var addPush = function(t, score){
    hits += score;
    words.push(t);
  };

  var tokens = tokenizeWithNoPunctuation(phrase),
      hits   = 0,
      words  = [];

  tokens.forEach(function(t) {
    if (afinn.hasOwnProperty(t)) {
      if (afinn[t] > 0){
        addPush(t, afinn[t]);
      }
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

function analyze (phrase, inject) {
  validateInjection(inject);

  var pos = positivity(phrase, inject),
      neg = negativity(phrase, inject);

  return {
    score       : pos.score - neg.score,
    comparative : pos.comparative - neg.comparative,
    positive    : pos,
    negative    : neg
  };
}


// Validates injection parameter, updates AFINN library scores programmatically (persists)
// -------------------------------------------------- //
function validateInjection(inject){
  if (typeof inject === 'undefined') {
    inject = null;
  }
  if (inject != null){
    if (typeof(inject) != "object"){
      throw "Injection must be an object";
    }
    assign(afinn,inject);
  }
}


module.exports = {
  analyze    : analyze,
  negativity : negativity,
  positivity : positivity
};
