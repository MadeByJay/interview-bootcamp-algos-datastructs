// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  return parseInt(Math.abs(n).toString().split('').reverse().join('')) * Math.sign(n)
}

function officialReverseInt(n) {
  return parseInt(n.toString().split('').reverse().join('')) * Math.sign(n)
}

function semanticReverseInt(n) {
  const reversedInt = parseInt(n.toString().split('').reverse().join(''));
  return reversedInt * Math.sign(n)
}

function clearReverseInt(n) {
  const reversedStr = n.toString().split('').reverse().join('');
  return parseInt(reversedStr) * Math.sign(n)
}

module.exports = reverseInt;
