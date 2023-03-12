// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// the use of array.every doubles the amount of operations required for result 
// making this the least performant palindrom algo
// can half operations required with following examples
function palindromeWithEvery(str = '') {
  return str.split('').every((char, i) => char === str[str.length - i - 1]);
}

//most performant version - only requires 2 steps/ operations
function palindromeSimple(str = '') {
  const reversed = str.split('').reverse().join();
  return str = reversed;
}

function palindrome(str = '') {
  return str.split('').reduce((prev, current, index, array) => {
    if (!prev) return;

    //use of index and - 1 relies on order of operations 
    //to get us the correct reverse char in the algo
    return current === array[array.length - index - 1]
  }, true)
}

function palindromeV1(str = '') {
  const reversedStr = str.split('').reverse()

  return str.split('').reduce((acc, current, index) => {
    if (!acc) return

    return current === reversedStr[index]

  }, true)
}


module.exports = palindrome;
