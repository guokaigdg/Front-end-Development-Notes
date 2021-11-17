// 数组翻转方法
var reverseString = function (s) {
  return s.reverse();
};

//双指针,中间逼近 (解构赋值)
var reverseString = function (s) {
  let i = 0;
  let j = s.length - 1;
  while (i < j) {
    [s[i], s[j]] = [s[j], s[i]];
    i++;
    j--;
  }
  return s;
};

//双指针,中间逼近 (单独函数处理数组交换)
var reverseString = function (s) {
  const swap = (array, x, y) => {
    let z = array[x];
    array[x] = array[y];
    array[y] = z;
  };
  let i = 0;
  let j = s.length - 1;
  while (i < j) {
    swap(s, i, j);
    i++;
    j--;
  }
  return s;
};

console.log(reverseString(["h", "e", "l", "l", "o"]));
