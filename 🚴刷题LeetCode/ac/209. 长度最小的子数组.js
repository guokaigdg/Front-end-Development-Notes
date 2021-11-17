//滑动数组
//1
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
// 2
var minSubArrayLen = function (s, nums) {
  if (Math.max(...nums) >= s) return 1;
  if (nums.length === 0) return 0;
  let len = nums.length;
  let minLen = len + 1;
  let newNums = [];
  let sum = 0;
  const add = (array) => {
    return array.reduce((a, b) => a + b);
  };
  for (let i = 0; i < len; i++) {
    newNums.push(nums[i]);
    sum = add(newNums);
    while (sum >= s) {
      minLen = newNums.length < minLen ? newNums.length : minLen;
      newNums.shift();
      sum = add(newNums);
    }
  }
  return minLen === len + 1 ? 0 : minLen;
};

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
