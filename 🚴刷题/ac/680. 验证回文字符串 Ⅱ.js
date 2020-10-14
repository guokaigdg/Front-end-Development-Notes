// ### 解题思路
// - 双指针
// - 字符串->数组->删除一个数组->字符串
// - 翻转对比

var validPalindrome = function (s) {
  if (s === null) return false;
  if (s.length === 1) return true;
  //正常的,不删除数组情况
  if (s.split("").reverse().join("") === s) return true;
  //存在删除数组中一个值的情况
  let l = 0,
    r = s.length - 1;
  while (l < r) {
    if (s[l] !== s[r]) {
      let left = s.split("");
      let right = s.split("");
      left.splice(l, 1);
      right.splice(r, 1);
      let res =
        left.join("") === left.reverse().join("") ||
        right.join("") === right.reverse().join("");
      return res;
    }
    l++;
    r--;
  }
  return true;
};
console.log(validPalindrome("aba"));
