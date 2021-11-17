var twoSum = function (nums, target) {
  let object = {};
  for (let i = 0; i < nums.length; i++) {
    object[nums[i]] = i;
  }
  for (let i = 0; i < nums.length; i++) {
    if (object[target - nums[i]] && i !== object[target - nums[i]]) {
      return [i, object[target - nums[i]]];
    }
  }
};
console.log(twoSum([1, 3, 4, 2], 6));
