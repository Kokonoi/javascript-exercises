const palindromes = (str) => {
  let punctuationRegex = /[^a-z]/g;
  let sentence = str
    .toLowerCase()
    .replaceAll(" ", "")
    .replaceAll(punctuationRegex, "");
  let sentenceRev = sentence.split("").reverse().join("");

  if (sentence == sentenceRev) {
    return true;
  } else {
    false;
  }
};

// Do not edit below this line
module.exports = palindromes;
