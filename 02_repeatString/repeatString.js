const repeatString = (str, num) => {
  let strData = "";
  if (num < 0) {
    return "ERROR";
  } else {
    for (i = 0; i < num; i++) {
      strData = strData.concat(str);
    }
  }
  return strData;
};

// Do not edit below this line
module.exports = repeatString;
