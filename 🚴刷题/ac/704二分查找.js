/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  if (nums.length === 1 && nums[0] !== target) return -1;
  if (nums[0] > target) return -1;
  if (nums[nums.length - 1] < target) return -1;
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    mid = parseInt(left + (right - right) / 2);
    if (target === nums[mid]) {
      return mid;
    }
    if (nums[mid] < target) {
      left = mid + 1;
    }
    if (target < nums[mid]) {
      right = mid - 1;
    }
  }
  return -1;
};

console.log(search([-1, 0, 3, 5, 9, 12], 9));
