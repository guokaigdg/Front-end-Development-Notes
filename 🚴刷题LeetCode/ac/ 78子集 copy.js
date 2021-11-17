// 解题思路
//  sort()从小到大排序
// 倒数第K个值输出

var findKthLargest = function (nums, k) {
  nums.sort((a, b) => a - b);
  return nums[nums.length - k];
};
