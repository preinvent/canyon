# Canyon algorithm

## The problem

The premise of this problem is that you have to calculate how much water will fill a 2 dimensional canyon. Water will run off either side if there are no containing walls.

For example, consider the following example:

```
4 |      O
3 |  O   O
2 |O O   O
1 |O O O O O
0 |---------
   0 1 2 3 4
```

This can be written using the array notation `[2, 3, 1, 4, 1]` (column 0 is 2 blocks high, column 1 is 3 blocks high, etc). 

If it rained evenly across the canyon, we would expect rain to drain off from the first two and last columns and only collect in column 2 up to the height of 3:

```
4 |      O
3 |  O W O
2 |O O W O
1 |O O O O O
0 |---------
   0 1 2 3 4
```

Therefore for the answer to this particular problem is `2` as there are two "blocks" of water that will collect in our canyon.

## Solution #1

The simplest solution is for each column:

1. calculate the highest peak of all columns to the left and the highest peak of all columns to the right
2. calculate the lesser of the two peaks from #1
3. add the difference between the current column level and the peak from #2 to a running total.

In terms of time complexity, this is a quadratic solution - O(n<sup>2</sup>) - as for each column we are scanning the entire set every time.

Memory usage is constant as we only need to store the running total and high left/right peaks for each iteration.

## Solution #2

A slightly more complex solution (and the solution given in the code here) is to first precompute the left and right peaks for each column in one loop, then scan and add up the running total from the left/right peaks already stored.

This is a quicker linear solution as we're just scanning the set twice. Memory usage is slightly higher as we're storing two arrays, each with the length of the input set. However, in modern computing, memory is cheap and we often opt for indexed cached sets over computation for performance.

# Running the code

The code presented here for solution #2 is written in NodeJS and uses Mocha/Chai for its tests.

## Using npm:

```
$ npm install
$ npm test
```

## Using Facebook's yarn:

```
$ yarn
$ yarn test
```

# The output

```
  Canyon algorithm
    ✓ Should return 0 for []
    ✓ Should return 0 for [3]
    ✓ Should return 0 for [2,4]
    ✓ Should return 0 for [1,5,1]
    ✓ Should return 0 for [1,5,5]
    ✓ Should return 4 for [5,1,5]
    ✓ Should return 3 for [1,5,2,3,4]
    ✓ Should return 8 for [5,1,5,1,5]
    ✓ Should return 9 for [5,1,4,1,5]
    ✓ Should return 3 for [2,1,3,1,4]
    ✓ Should return 6 for [4,1,5,1,4]
 ```