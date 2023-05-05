const add = function (a, b) {
  let firstNum = a;
  let secondNum = b;
  let result = firstNum + secondNum;
  return result;
};

const subtract = function (a, b) {
  let firstNum = a;
  let secondNum = b;
  let result = firstNum - secondNum;
  return result;
};

const sum = function (para) {
  let paraArray = para;
  let sum = paraArray.reduce((x, y) => x + y, 0);
  return sum;
};

const multiply = function (para) {
  let arr = para;
  return arr.length
    ? arr.reduce((accumulator, nextItem) => accumulator * nextItem)
    : 0;
};

const power = function (a, b) {
  return Math.pow(a, b);
};

const factorial = function (x) {
  let answer = 1;
  if (x == 0 && x == 1) {
    return 1;
  } else {
    for (let i = 1; i <= x; i++) {
      answer *= i;
    }
  }
  return answer;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
