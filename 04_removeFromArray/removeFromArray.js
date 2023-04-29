const removeFromArray = (arr, ...args) => {
  let mainArr = arr;
  mainArr = mainArr.filter((x) => !args.includes(x));
  return mainArr;
};

// Do not edit below this line
module.exports = removeFromArray;
