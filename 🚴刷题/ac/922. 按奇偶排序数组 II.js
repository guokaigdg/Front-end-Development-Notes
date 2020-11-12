/**
 * @param {number[]} A
 * @return {number[]}
 */
 
// 解题思路
// 分奇偶数两个数组
// 合并偶数奇数数组

var sortArrayByParityII = function(A) {
  let oushu = [],
    jishu = [],
    res = [];
  for (let i of A) {
    if (i % 2 === 0) {
      oushu.push(i);
    } else {
      jishu.push(i);
    }
  }
  for (let i = 0; i < A.length / 2; i++) {
    res.push(oushu[i]);
    res.push(jishu[i]);
  }
  return res;
};
