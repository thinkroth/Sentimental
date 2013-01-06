var should = require('should'),
    positivity = require('../lib/sentimental.js').positivity,
    negativity = require('../lib/sentimental.js').negativity,
    analyze = require('../lib/sentimental.js').analyze;


describe('Negativity', function () {
  describe('#negativeScore', function () {
    it('level 5 should return 5 points', function (done) {
      negativity("bastard").score.should.equal(5);
      done();
    });
    it('level 4 should return 4 points', function (done) {
      negativity("scumbag").score.should.equal(4);
      done();
    });
    it('level 3 should return 3 points', function (done) {
      negativity("evil").score.should.equal(3);
      done();
    });
    it('level 2 should return 2 points', function (done) {
      negativity("ache").score.should.equal(2);
      done();
    });
    it('level 1 should return 1 points', function (done) {
      negativity("anti").score.should.equal(1);
      done();
    });
    it('level 5 word with level 1 intensifier should return 10 points', function (done) {
      negativity("such bastard").score.should.equal(10);
      done();
    });
    it('level 5 word with level 2 intensifier should return 15 points', function (done) {
      negativity("complete bastard").score.should.equal(15);
      done();
    });
    it('level 5 word with level 3 intensifier should return 20 points', function (done) {
      negativity("extremely bastard").score.should.equal(20);
      done();
    });
    it('level 4 word with level 1 intensifier should return 8 points', function (done) {
      negativity("such scumbag").score.should.equal(8);
      done();
    });
    it('level 4 word with level 2 intensifier should return 16 points', function (done) {
      negativity("complete scumbag").score.should.equal(12);
      done();
    });
    it('level 4 word with level 3 intensifier should return 24 points', function (done) {
      negativity("extremely scumbag").score.should.equal(16);
      done();
    });
    it('level 3 word with level 1 intensifier should return 6 points', function (done) {
      negativity("such evil").score.should.equal(6);
      done();
    });
    it('level 3 word with level 2 intensifier should return 9 points', function (done) {
      negativity("complete evil").score.should.equal(9);
      done();
    });
    it('level 3 word with level 3 intensifier should return 12 points', function (done) {
      negativity("extremely evil").score.should.equal(12);
      done();
    });
    it('level 2 word with level 1 intensifier should return 4 points', function (done) {
      negativity("such ache").score.should.equal(4);
      done();
    });
    it('level 2 word with level 2 intensifier should return 5 points', function (done) {
      negativity("complete ache").score.should.equal(6);
      done();
    });
    it('level 2 word with level 3 intensifier should return 24 points', function (done) {
      negativity("extremely ache").score.should.equal(8);
      done();
    });
    it('level 1 word with level 1 intensifier should return 2 points', function (done) {
      negativity("such anti").score.should.equal(2);
      done();
    });
    it('level 1 word with level 2 intensifier should return 3 points', function (done) {
      negativity("complete anti").score.should.equal(3);
      done();
    });
    it('level 1 word with level 3 intensifier should return 4 points', function (done) {
      negativity("extremely anti").score.should.equal(4);
      done();
    });
  });
  describe('#negativeComparative', function () {
    it('should return score divided by word length', function (done) {
      negativity("Hey scumbag").comparative.should.equal(2);
      done();
    });
  });
  describe('#negativeWordCount', function () {
    it('should return the negative world count', function (done) {
      negativity("This is two anti evil words").words.length.should.equal(2);
      done();
    });
  });
});


describe('Positivity', function () {
  describe('#positiveScore', function () {
    it('level 5 should return 5 points', function (done) {
      positivity("superb").score.should.equal(5);
      done();
    });
    it('level 4 should return 4 points', function (done) {
      positivity("amazing").score.should.equal(4);
      done();
    });
    it('level 3 should return 3 points', function (done) {
      positivity("admire").score.should.equal(3);
      done();
    });
    it('level 2 should return 2 points', function (done) {
      positivity("amaze").score.should.equal(2);
      done();
    });
    it('level 1 should return 1 points', function (done) {
      positivity("cool").score.should.equal(1);
      done();
    });
    it('level 5 word with level 1 intensifier should return 10 points', function (done) {
      positivity("such breathtaking").score.should.equal(10);
      done();
    });
    it('level 5 word with level 2 intensifier should return 15 points', function (done) {
      positivity("complete breathtaking").score.should.equal(15);
      done();
    });
    it('level 5 word with level 3 intensifier should return 20 points', function (done) {
      positivity("extremely breathtaking").score.should.equal(20);
      done();
    });
    it('level 4 word with level 1 intensifier should return 8 points', function (done) {
      positivity("such fun").score.should.equal(8);
      done();
    });
    it('level 4 word with level 2 intensifier should return 16 points', function (done) {
      positivity("complete fun").score.should.equal(12);
      done();
    });
    it('level 4 word with level 3 intensifier should return 24 points', function (done) {
      positivity("extremely fun").score.should.equal(16);
      done();
    });
    it('level 3 word with level 1 intensifier should return 6 points', function (done) {
      positivity("such delight").score.should.equal(6);
      done();
    });
    it('level 3 word with level 2 intensifier should return 9 points', function (done) {
      positivity("complete delight").score.should.equal(9);
      done();
    });
    it('level 3 word with level 3 intensifier should return 12 points', function (done) {
      positivity("extremely delight").score.should.equal(12);
      done();
    });
    it('level 2 word with level 1 intensifier should return 4 points', function (done) {
      positivity("such eager").score.should.equal(4);
      done();
    });
    it('level 2 word with level 2 intensifier should return 5 points', function (done) {
      positivity("complete eager").score.should.equal(6);
      done();
    });
    it('level 2 word with level 3 intensifier should return 24 points', function (done) {
      positivity("extremely eager").score.should.equal(8);
      done();
    });
    it('level 1 word with level 1 intensifier should return 2 points', function (done) {
      positivity("such trust").score.should.equal(2);
      done();
    });
    it('level 1 word with level 2 intensifier should return 3 points', function (done) {
      positivity("complete trust").score.should.equal(3);
      done();
    });
    it('level 1 word with level 3 intensifier should return 4 points', function (done) {
      positivity("extremely trust").score.should.equal(4);
      done();
    });
  });
  describe('#positiveComparative', function () {
    it('should return score divided by word length', function (done) {
      positivity("Hey amazing").comparative.should.equal(2);
      done();
    });
  });
  describe('#positiveWordCount', function () {
    it('should return the positive world count', function (done) {
      positivity("This is two amazing cool words").words.length.should.equal(2);
      done();
    });
  });
});

describe('Analyze', function () {
  describe('#score', function () {
    it('should equal positivity - negativity', function (done) {
      analyze("Hey Amazing Scumbag").score.should.equal(0);
      done();
    });
    it('should be positive for only positives', function (done) {
      analyze("Cool beans").score.should.equal(1);
      done();
    });
    it('should be negative for only negatives', function (done) {
      analyze("Hey scumbag").score.should.equal(-4);
      done();
    });
    it('should ignore ending punctuation', function (done) {
      analyze("Fearless!").score.should.equal(2);
      analyze("Crash!").score.should.equal(-2);
      done();
    });
    it('should ignore hashtags', function (done) {
      analyze("#fearless").score.should.equal(2);
      analyze("#crash").score.should.equal(-2);
      done();
    });
  });
  describe('#comparative', function () {
    it('should equal (positive - negative) / word count ', function (done) {
      analyze("An amazing anti").comparative.should.equal(1);
      done();
    });
  });
});
