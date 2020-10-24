//48. 旋转图像
// 额外开辟数组
var rotate = function (matrix) {
  let len = matrix.length;
  let newRes = [];
  for (let i = 0; i < len; i++) {
    newRes.push([]);
  }
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      let popNumber = matrix[i].pop();
      newRes[len - j - 1].unshift(popNumber);
    }
  }
  return newRes;
};

// 原数组上修改
var rotate2 = function (matrix) {
  let len = matrix.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      let popNumber = matrix[i].pop();
      matrix[len - j - 1].unshift(popNumber);
    }
  }
};

let res = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let res2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(rotate(res));
rotate2(res2);
console.log(res2);
