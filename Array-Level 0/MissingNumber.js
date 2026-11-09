function missingNumber(nums) {
  const size = nums.length;
  const sum = size * (size + 1)/2;

  const realSum = nums.reduce((acc, val) => acc + val, 0)
  
  return sum - realSum;
}
