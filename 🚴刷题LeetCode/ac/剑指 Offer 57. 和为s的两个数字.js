const sum = (nums, target) => {
  let map = {};
  nums.forEach((item) => {
    map[item] = item;
  });
  for (let i of nums) {
    if (map[target - i]) {
      return [target - map[i], i];
    }
  }
};

console.log(sum([10, 26, 30, 31, 47, 60], 40));
