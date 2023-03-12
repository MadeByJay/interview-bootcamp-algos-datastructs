// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA = "", stringB = "") {
  const charMapA = buildCharMap(stringA);
  const charMapB = buildCharMap(stringB);

  const charMapAKeys = Object.keys(charMapA);
  const charMapBKeys = Object.keys(charMapB);

  if (charMapAKeys.length !== charMapBKeys.length) return false;

  return charMapAKeys.every((char) => {
    return charMapA[char] === charMapB[char];
  });
}

function anagramsV2(stringA = "", stringB = "") {
  return cleanString(stringA) === cleanString(stringB);

  function cleanString(string = "") {
    return string.replace(/[^\w]/g, "").toLowerCase().split("").sort().join();
  }
}

function anagramsV1(stringA = "", stringB = "") {
  const charMapA = buildCharMap(stringA);
  const charMapB = buildCharMap(stringB);

  if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
    return false;
  }

  for (const char in charMapA) {
    if (charMapA[char] !== charMapB[char]) return false;
  }

  return true;
}

function buildCharMap(string = "") {
  return string
    .replace(/[^\w]/g, "")
    .toLowerCase()
    .split("")
    .reduce((acc, current) => {
      acc[current] = acc[current] + 1 || 1;
      return acc;
    }, {});
}

anagrams("rail safety", "fairy tales");
anagramsV1("rail safety", "fairy tales");

module.exports = anagrams;
