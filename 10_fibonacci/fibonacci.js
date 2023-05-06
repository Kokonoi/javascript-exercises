const fibonacci = function (num) {
  let fibo = parseInt(num);
  let number = 1;
  let prevNumber = 0;
  if (fibo === 1) {
    return number;
  } else if (fibo < 0) {
    return "OOPS";
  } else {
    for (i = 1; i < fibo; i++) {
      number += prevNumber;
      prevNumber = number - prevNumber;
    }
    return number;
  }
};

// Do not edit below this line
module.exports = fibonacci;
