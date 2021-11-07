/**
 * 给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。
 * 如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0。
 * 假设环境不允许存储 64 位整数（有符号或无符号）。
 */
var reverse = function (x) {
  if (x === 0) {
    return 0;
  }
  let newX = x >= 0 ? x : -x;
  let resString = newX.toString().split("").reverse().join("");
  // 2的31次方2147483648
  let res = parseInt(resString) > 2147483648 ? 0 : parseInt(resString);
  if (x > 0) {
    return res;
  }
  return -res;
};

console.log(reverse(123));
console.log(reverse(120));
console.log(reverse(-123));
console.log(reverse(0));
console.log(reverse(2147483648));
console.log(reverse(1534236469));
