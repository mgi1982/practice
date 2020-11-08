/**
 *  * @param {number} candies
 *   * @param {number} num_people
 *    * @return {number[]}
 *     */
var distributeCandies = function(candies, num_people) {
  const out = new Array(num_people).fill(0)
  let dispense = 0
  while (candies > 0) {
    for (let i=0;i<out.length;i++) {
      dispense++
      if (dispense <= candies) {
        out[i] += dispense
        candies -= dispense
      } else {
        out[i] += candies
        candies = 0
        break
      }
    }
  }
  return out
};

[
  { candies: 7, num_people: 4, expected: [1,2,3,1]},
  { candies: 10, num_people: 3, expected: [5,2,3]},
].forEach(test => {
  const actual = distributeCandies(test.candies, test.num_people).join(',')
  if (actual === test.expected.join(',')) {
    console.log('PASS!');
  } else {
    console.log(`FAIL for ${test.candies} candies and ${test.num_people} people! Expected ${test.expected} but got ${actual}`);
  }
})

/* 
 */
