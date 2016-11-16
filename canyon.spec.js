var chai = require('chai');
var expect = chai.expect;
var calcCanyonDepth = require('./canyon.js').calcCanyonDepth;

describe('Canyon algorithm', function() {
    
    it('Should return 0 for []', function() {
        expect(calcCanyonDepth([])).to.eql(0);
    });

    it('Should return 0 for [3]', function() {
        expect(calcCanyonDepth([3])).to.eql(0);
    });

    it('Should return 0 for [2,4]', function() {
        expect(calcCanyonDepth([2,4])).to.eql(0);
    });

    it('Should return 0 for [1,5,1]', function() {
        expect(calcCanyonDepth([1,5,1])).to.eql(0);
    });

    it('Should return 0 for [1,5,5]', function() {
        expect(calcCanyonDepth([1,5,5])).to.eql(0);
    });

    it('Should return 4 for [5,1,5]', function() {
        expect(calcCanyonDepth([5,1,5])).to.eql(4);
    });

    it('Should return 3 for [1,5,2,3,4]', function() {
        expect(calcCanyonDepth([1,5,2,3,4])).to.eql(3);
    });

    it('Should return 8 for [5,1,5,1,5]', function() {
        expect(calcCanyonDepth([5,1,5,1,5])).to.eql(8);
    });

    it('Should return 9 for [5,1,4,1,5]', function() {
        expect(calcCanyonDepth([5,1,4,1,5])).to.eql(9);
    });

    it('Should return 3 for [2,1,3,1,4]', function() {
        expect(calcCanyonDepth([2,1,3,1,4])).to.eql(3);
    });

    it('Should return 3 for [4,1,5,1,4]', function() {
        expect(calcCanyonDepth([4,1,5,1,4])).to.eql(6);
    });

});