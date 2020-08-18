/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
  let odds = 0
  for (let i=0;i<arr.length;i++) {
    const curr = arr[i]
    if (curr % 2) {
      odds++
    } else {
      odds = 0
    }
    if (odds === 3) {
      return true
    }
  }
  return false
};

[
  { input: [2,6,4,1], expected: false},
  { input: [1,2,34,3,4,5,7,23,12], expected: true},
].forEach(test => {
  const actual = threeConsecutiveOdds(test.input) 
  if (actual === test.expected) {
    console.log('PASS!');
  } else {
    console.log(`FAIL for ${test.input}! Expected ${test.expected} but got ${actual}`);
  }
})

/* 
 * Results
 * Runtime: 72 ms, faster than 89.54% of JavaScript online submissions for Three Consecutive Odds.
 * Memory Usage: 37 MB, less than 13.72% of JavaScript online submissions for Three Consecutive Odds.
 */
