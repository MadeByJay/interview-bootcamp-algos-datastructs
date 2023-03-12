// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str = "") {
  const charMap = {};

  for (const char of str) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  let maxChar = "";
  let highestNumber = 0;

  for (const char in charMap) {
    if (charMap[char] > highestNumber) {
      highestNumber = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}

function maxCharV2(str = "") {
  const charMap = str.split("").reduce((acc, currentChar) => {
    acc[currentChar] = acc[currentChar] + 1 || 1;
    return acc;
  }, {});

  console.log(JSON.stringify(charMap));
}

function maxCharV1(str = "") {
  const charMap = str.split("").reduce((acc, currentChar) => {
    if (acc[currentChar]) {
      acc[currentChar] = acc[currentChar]++;
      return acc;
    }

    acc[currentChar] = 1;
    return acc;
  }, {});

  console.log(JSON.stringify(charMap));
}

maxChar("abcdefghijklmnaaaaaaa");

module.exports = maxChar;
