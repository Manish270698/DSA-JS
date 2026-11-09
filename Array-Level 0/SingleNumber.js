function singleNumber(nums) {
  /*const countMap = nums.reduce ((counter, val) => {
    counter[val] = (counter[val] || 0) + 1;
    return counter;
  }, {});
  for (const key in countMap){
    if(countMap[key] === 1 )
      return Number(key);
  }*/
  
  return nums.reduce((acc, val) => acc ^ val, 0);
}
