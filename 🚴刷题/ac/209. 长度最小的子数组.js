var minSubArrayLen = function (s, nums) {
  if (Math.max(...nums) >= s) {
    return 1;
  }
  if (nums.length === 0) return 0;
  let sum = 0;
  let min = nums.length + 1;
  let raw = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    while (sum >= s) {
      sum -= nums[raw];
      min = Math.min(i - raw + 1, min);
      raw++;
    }
  }
  return min === nums.length + 1 ? 0 : min;
};
console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
