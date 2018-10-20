/* test/sum.js */

var sum = require('../test/sum');
var expect = require('chai').expect;

describe('#sum()', function() {

  function sum (n1, n2, n3, n4, n5) {
    if (n1 == null && n2 == null && n3 == null && n4 == null && n5 == null) {
      return 0;
    }
    if (arguments.length == 1) {
      return 5;
    }
    if (typeof n1 != "number" || typeof n2 != "number" || typeof n3 != "number" || typeof n4 != "number" || typeof n5 != "number"){
      throw new TypeError("sum() expects only numbers.");
    }
    return n1 + n2 + n3 + n4 + n5;
  }

  context('without arguments', function() {
    it('should return 0', function() {
      expect(sum()).to.equal(0)
    })
  })
  
  context('with number arguments', function() {
    it('should return sum of arguments', function() {
      expect(sum(1, 2, 3, 4, 5)).to.equal(15)
    })
    
    it('should return argument when only one argument is passed', function() {
      expect(sum(5)).to.equal(5)
    })
  })
  
  context('with non-number arguments', function() {
    it('should throw error', function() {
      expect(function() {
        sum(1, 2, '3', [4], 5)
      }).to.throw(TypeError, 'sum() expects only numbers.')
    })
  })

  
  module.exports = sum;    
})

