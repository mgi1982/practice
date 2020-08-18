/**
 *  @param {number[]} nums
 *  @param {number} target
 *  @return {number[]}
 */
var twoSum = function(nums, target) {
  let sorted = nums.slice().sort((a,b) => {
    if (a > b) {
      return 1
    } else if (a < b) {
      return -1
    }
    return 0
  })
  let c1 = sorted.length - 1
  let c2 = 0
  while (c1 === c2 
    || (sorted[c1] + sorted[c2]) !== target) {
      let complement = (target - sorted[c1])
      c2 = sorted.indexOf(complement)
      if (c2 === -1) {
        c1--
        continue
      }
  }
  let first = nums.indexOf(sorted[c1])
  let second = nums.indexOf(sorted[c2])
  if (first === second) {
    second = nums.indexOf(sorted[c2], (first + 1))
  }
  return [
    first,
    second
  ]
};
console.log(
  twoSum([-10,-1,-18,-19], -19),
  twoSum([3,3], 6),
  twoSum([2,7,11,15], 9),
  twoSum([-1,-2,-3,-4,-5], -8),
  twoSum([2,7,11,15], 9),
  twoSum([0,4,3,0], 0),
);
