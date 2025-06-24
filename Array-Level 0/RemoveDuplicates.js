// Leetcode Problem - 26
function removeDup(nums) {
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[x]) {
      nums[++x] = nums[i];
    }
  }
  return x + 1;
}

nums = [0, 0, 0, 1, 1, 2, 2, 3, 3, 5, 6, 6, 6, 7, 8, 9];
console.log(removeDup(nums));
