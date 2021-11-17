var firstUniqChar = function (s) {
  if (s === "") return " ";
  let obj = {};
  let min = 0;
  for (let i of s) {
    if (!obj[i]) {
      obj[i] = 1;
    } else if (obj[i]) {
      obj[i] = obj[i] + 1;
    }
  }
  for (let i of Object.keys(obj)) {
    if (obj[i] == 1) {
      return i;
    }
    min = obj[i];
  }
  if (min !== 0) {
    return " ";
  }
};
// console.log(firstUniqChar("loveleetcode"));
console.log(firstUniqChar("ccbbddgg"));
