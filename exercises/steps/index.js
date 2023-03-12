// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  for (let i = 1; i <= n; i++) {
    const result = [];
    const poundAmount = i % n || n;
    const spaceAmount = n - poundAmount;

    for (let i = 1; i <= poundAmount; i++) {
      result.push("#");
    }

    for (let i = 0; i < spaceAmount; i++) {
      result.push(" ");
    }

    console.log(result.join(""));
  }
}

function stepsV2(n) {
  for (let row = 0; row < n; row++) {
    let step = "";

    for (let column = 0; column < n; column++) {
      if (column <= row) {
        step += "#";
      } else {
        step += " ";
      }
    }

    console.log(step);
  }
}

steps(3);
module.exports = steps;
