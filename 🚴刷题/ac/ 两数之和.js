function sum(num1, num2) {
  let num1StringArr = num1.split("").reverse();
  let num2StringArr = num2.split("").reverse();
  let num1NumArr = num1StringArr.map((data) => {
    return +data;
  });
  let num2NumArr = num2StringArr.map((data) => {
    return +data;
  });
  num1NumArr.length < num2NumArr.length
    ? ([num1NumArr, num2NumArr] = [num2NumArr, num1NumArr])
    : "";
  let res = [];

  for (let i = 0; i < num1NumArr.length; i++) {
    let isNum2NumArr = num2NumArr[i] ? num2NumArr[i] : 0;
    //倒数第二位之前
    if (i < num1NumArr.length - 1) {
      if (num1NumArr[i] + isNum2NumArr >= 10) {
        num1NumArr[i + 1] = num1NumArr[i + 1] + 1;
        res.push(num1NumArr[i] + isNum2NumArr - 10);
      } else res.push(num1NumArr[i] + (num2NumArr[i] ? num2NumArr[i] : 0));
    }
    //倒数第一位
    else {
      if (num1NumArr[i] + isNum2NumArr >= 10) {
        res.push(num1NumArr[i] + isNum2NumArr - 10);
        res.push(1);
      } else res.push(num1NumArr[i] + (num2NumArr[i] ? num2NumArr[i] : 0));
    }
  }
  res = res.reverse();
  let resString = "";
  for (let i of res) {
    resString = resString + i;
  }
  return resString;
}
console.log(sum("9999999", "1"));
