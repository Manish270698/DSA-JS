// leetcode 485. Max Consecutive Ones

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let max = 0;
  let currMax = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 1) currMax++;
    else {
      max = Math.max(max, currMax);
      currMax = 0;
    }
  }

  return Math.max(max, currMax);
};

const nums = [1, 1, 0, 1, 1, 1];
console.log(findMaxConsecutiveOnes(nums));
