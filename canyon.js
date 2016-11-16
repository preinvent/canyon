module.exports.calcCanyonDepth = function(canyon) {

    var total = 0,
        leftMax = 0,
        rightMax = 0,
        lefts = [],
        rights = [],
        i;

    for (i in canyon) {
        leftMax = Math.max(leftMax, canyon[i]);
        lefts[i] = leftMax;

        rightMax = Math.max(rightMax, canyon[canyon.length-1-i]);
        rights[canyon.length-1-i] = rightMax;
    }
    
    for (i = 1; i < canyon.length-1; ++i) {
        var smallestPeak = Math.min(lefts[i], rights[i]);
        total += (smallestPeak - canyon[i]);
    }
    
    return total;
};

