// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array = [], size) {
  const chunkedArray = [];
  let index = 0;

  while (array.length >= size) {
    chunkedArray.push(array.slice(index, index + size));
    //Add chunk size to index to iterate
    index += size;
  }

  return chunkedArray;
}

// First pass - works but mutates array with splice
// Using slice + an index would be better
function chunkV1(array = [], size) {
  const chunkedArray = [];

  while (array.length >= size) {
    chunkedArray.push(array.splice(0, size));
  }

  if (array.length) chunkedArray.push(array);

  return chunkedArray;
}

module.exports = chunk;
